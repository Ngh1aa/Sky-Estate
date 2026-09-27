import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';

const baseURL = process.env.QA_BASE_URL || 'http://127.0.0.1:4173';
const outputDir = 'final-qa-artifacts';
const routes = [
  { name: 'home', path: '/' },
  { name: 'discover', path: '/discover' },
  { name: 'residence', path: '/residences/villa-aurora-thao-dien' },
  { name: 'collections', path: '/collections' },
  { name: 'journal', path: '/journal' },
  { name: 'about', path: '/about' },
  { name: 'consult', path: '/consult' },
  { name: 'shortlist', path: '/shortlist' },
  { name: 'not-found', path: '/this-route-does-not-exist' },
];
const viewports = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1440', width: 1440, height: 1000 },
];

await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = [];
const interactionReport = [];
let hardFailures = 0;

for (const route of routes) {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('pageerror', (error) => pageErrors.push(error.message));

    const response = await page.goto(`${baseURL}${route.path}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);

    const diagnostics = await page.evaluate(() => {
      const root = document.documentElement;
      const brokenImages = Array.from(document.images)
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src);
      return {
        title: document.title,
        pathname: location.pathname,
        overflow: Math.max(root.scrollWidth, document.body.scrollWidth) - window.innerWidth,
        brokenImages,
        hasMain: Boolean(document.querySelector('main')),
        hasNav: Boolean(document.querySelector('nav')),
        h1Count: document.querySelectorAll('h1').length,
      };
    });

    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
    const severeA11y = axe.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact || ''));
    const moderateA11y = axe.violations.filter((violation) => violation.impact === 'moderate');

    const screenshot = `${outputDir}/${route.name}-${viewport.name}.png`;
    await page.screenshot({ path: screenshot, fullPage: true });

    const failureReasons = [];
    if (!response || response.status() >= 400) failureReasons.push(`HTTP ${response?.status() ?? 'no response'}`);
    if (!diagnostics.title.trim()) failureReasons.push('empty document title');
    if (!diagnostics.hasMain) failureReasons.push('missing <main>');
    if (!diagnostics.hasNav) failureReasons.push('missing <nav>');
    if (diagnostics.h1Count !== 1) failureReasons.push(`expected one h1, found ${diagnostics.h1Count}`);
    if (diagnostics.overflow > 2) failureReasons.push(`horizontal overflow ${diagnostics.overflow}px`);
    if (diagnostics.brokenImages.length) failureReasons.push(`${diagnostics.brokenImages.length} broken image(s)`);
    if (pageErrors.length) failureReasons.push(`${pageErrors.length} page error(s)`);
    if (consoleErrors.length) failureReasons.push(`${consoleErrors.length} console error(s)`);
    if (severeA11y.length) failureReasons.push(`${severeA11y.length} serious/critical axe violation(s)`);
    if (failureReasons.length) hardFailures += 1;

    report.push({
      route: route.path,
      viewport,
      status: response?.status() ?? null,
      screenshot,
      ...diagnostics,
      consoleErrors,
      pageErrors,
      severeA11y: severeA11y.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })),
      moderateA11y: moderateA11y.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })),
      failureReasons,
    });

    await context.close();
  }
}

// Interaction smoke — desktop critical journey.
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const steps = [];
  try {
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
    const garden = page.getByRole('button', { name: /03\s*Garden/i });
    await garden.click();
    steps.push({ step: 'home living index selection', pass: (await garden.getAttribute('aria-pressed')) === 'true' });

    await page.goto(`${baseURL}/discover`, { waitUntil: 'networkidle' });
    await page.getByPlaceholder('Name, area or location').fill('Thảo Điền');
    await page.waitForTimeout(250);
    steps.push({ step: 'discover search refinement', pass: await page.getByText('Villa · Thảo Điền').first().isVisible() });

    await page.goto(`${baseURL}/residences/villa-aurora-thao-dien`, { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: /Save residence/i }).click();
    await page.goto(`${baseURL}/shortlist`, { waitUntil: 'networkidle' });
    steps.push({ step: 'save residence to shortlist continuity', pass: await page.getByText('Villa · Thảo Điền').first().isVisible() });
  } catch (error) {
    steps.push({ step: 'critical journey exception', pass: false, error: String(error) });
  }
  for (const step of steps) if (!step.pass) hardFailures += 1;
  interactionReport.push(...steps);
  await context.close();
}

// Mobile navigation visibility smoke.
{
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  try {
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
    const menuButton = page.getByRole('button', { name: /menu/i });
    await menuButton.click();
    const discoverVisible = await page.getByRole('link', { name: 'Discover' }).first().isVisible();
    interactionReport.push({ step: 'mobile navigation opens with primary links', pass: discoverVisible });
    if (!discoverVisible) hardFailures += 1;
  } catch (error) {
    interactionReport.push({ step: 'mobile navigation exception', pass: false, error: String(error) });
    hardFailures += 1;
  }
  await context.close();
}

await browser.close();
await fs.writeFile(`${outputDir}/report.json`, JSON.stringify({ hardFailures, report, interactionReport }, null, 2));
console.log(JSON.stringify({ hardFailures, renderedCases: report.length, interactionCases: interactionReport.length }, null, 2));
if (hardFailures > 0) process.exit(1);
