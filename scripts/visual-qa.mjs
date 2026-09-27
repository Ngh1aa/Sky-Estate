import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL = process.env.QA_BASE_URL || 'http://127.0.0.1:4173';
const outputDir = 'qa-artifacts';
const routes = [
  { name: 'home', path: '/' },
  { name: 'discover', path: '/discover' },
  { name: 'residence', path: '/residences/villa-aurora-thao-dien' },
];
const viewports = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1440', width: 1440, height: 1000 },
];

await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = [];
let hardFailures = 0;

for (const route of routes) {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (error) => pageErrors.push(error.message));

    const url = `${baseURL}${route.path}`;
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    const diagnostics = await page.evaluate(() => {
      const root = document.documentElement;
      const brokenImages = Array.from(document.images)
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src);
      const overflow = Math.max(root.scrollWidth, document.body.scrollWidth) - window.innerWidth;
      const visibleText = document.body.innerText.trim().slice(0, 300);
      const main = document.querySelector('main');
      const nav = document.querySelector('nav');
      return {
        title: document.title,
        pathname: location.pathname,
        overflow,
        brokenImages,
        hasMain: Boolean(main),
        hasNav: Boolean(nav),
        visibleText,
      };
    });

    const screenshot = `${outputDir}/${route.name}-${viewport.name}.png`;
    await page.screenshot({ path: screenshot, fullPage: true });

    const item = {
      route: route.path,
      viewport,
      status: response?.status() ?? null,
      screenshot,
      ...diagnostics,
      consoleErrors,
      pageErrors,
    };

    const failureReasons = [];
    if (!response || response.status() >= 400) failureReasons.push(`HTTP ${response?.status() ?? 'no response'}`);
    if (!diagnostics.hasMain) failureReasons.push('missing <main>');
    if (!diagnostics.hasNav) failureReasons.push('missing <nav>');
    if (diagnostics.overflow > 2) failureReasons.push(`horizontal overflow ${diagnostics.overflow}px`);
    if (diagnostics.brokenImages.length) failureReasons.push(`${diagnostics.brokenImages.length} broken image(s)`);
    if (pageErrors.length) failureReasons.push(`${pageErrors.length} page error(s)`);
    if (consoleErrors.length) failureReasons.push(`${consoleErrors.length} console error(s)`);
    item.failureReasons = failureReasons;
    if (failureReasons.length) hardFailures += 1;

    report.push(item);
    await context.close();
  }
}

await browser.close();
await fs.writeFile(`${outputDir}/report.json`, JSON.stringify({ hardFailures, report }, null, 2));

console.log(JSON.stringify({ hardFailures, cases: report.length }, null, 2));
if (hardFailures > 0) process.exit(1);
