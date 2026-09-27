# UIUX Phase State — KHOẢNG

## Current phase

`PROMPT_04_AUTHORIZED_RELEASE`

## Result

# PASSED

KHOẢNG has completed the UIUX Factory lifecycle through authorised production release: structural implementation, responsive visual QA, all-route Final QA, accessibility automation, critical interaction smoke, merge, GitHub Pages deployment, production-path remediation and public production smoke verification.

## Product / Design Contract retained

- Name: **KHOẢNG**
- Descriptor: **Living Discovery**
- Positioning: **Find a home by how you want to live.**
- Core mechanic: **Living Index**
- Visual adjectives: **Architectural · Quiet · Tactile**
- Responsive scope: `responsive_all`
- Release authority: **AUTHORIZED / EXECUTED**

## Production

- Production URL: **https://ngh1aa.github.io/Sky-Estate/**
- Hosting: GitHub Pages
- Router in production: HashRouter
- Project base path: `/Sky-Estate/`
- Release branch: `main`
- Release PR: `#1 — Phase 2: KHOẢNG Living Discovery redesign`
- PR merge method: squash
- Product release merge commit: `a9583ed95f253f760b41d91de5859bb398c38f58`
- Production base-path remediation commit: `04d18716cb2366ff8099e4909080d3ac29509694`

## Active routes verified

- `/` / `#/` — Home / Living Discovery Entry
- `/discover` / `#/discover` — Living Index + conventional facts discovery
- `/residences/:id` / `#/residences/:id` — spatial/lifestyle decision detail
- `/collections` — Ways of Living
- `/journal` — Field Notes
- `/shortlist` — local saved residences
- `/about` — About the Method
- `/consult` — preference-aware non-sending prototype enquiry
- `*` — KHOẢNG 404

Compatibility redirects remain:
- `/listings` → `/discover`
- `/listings/:id` → `/residences/:id`
- `/contact` → `/consult`

## Phase 2 representative gate

Workflow: `KHOANG Phase 2 Visual QA`

Representative roles:
1. `/`
2. `/discover`
3. `/residences/villa-aurora-thao-dien`

Widths:
- 375px
- 768px
- 1440px

Result after remediation: **PASS**.

## Final all-route gate

Workflow: `KHOANG Final QA`

Final passing run before release: `36343515144`

Coverage:
- 9 routes × 3 viewports = **27 rendered cases**
- 375 / 768 / 1440
- reduced-motion browser context

Final automated result:
- hard failures: **0**
- serious/critical axe violations: **0**
- moderate axe violations recorded by the QA gate: **0**
- horizontal overflow: **0**
- broken images: **0**
- console errors: **0**
- page errors: **0**
- document-title checks: **PASS**
- single-H1 structural checks: **PASS**
- shared nav/main presence: **PASS**

Critical interaction smoke:
- Home Living Index selection — **PASS**
- Discover search refinement — **PASS**
- Residence save → Shortlist continuity — **PASS**
- Mobile navigation opens with primary links — **PASS**

## Prompt 4 — release execution

### PR transition and merge

PR #1 was moved from Draft to Ready for Review only after the latest Phase 2 CI, visual QA and Final QA were green.

The PR was then squash-merged into `main` with expected-head protection.

Merge result: **PASS**.

### GitHub Pages deployment

Workflow: `Deploy to GitHub Pages`

The production deploy created the public environment URL:

`https://ngh1aa.github.io/Sky-Estate/`

Build and deploy jobs completed successfully.

### Production-only P1 — incorrect Vite project base path

The first real production smoke exposed a defect not visible in local/ephemeral preview QA:

- the public document returned HTTP 200;
- the app did not hydrate;
- KHOẢNG content was absent from the rendered body.

Root cause:
- `vite.config.ts` used `base: '/'`;
- GitHub Pages serves this repository from `/Sky-Estate/`;
- generated JS/CSS therefore pointed to domain-root `/assets/...` instead of `/Sky-Estate/assets/...`.

Root fix:
- Vite base is now deployment-aware using `VITE_BASE_PATH`;
- local and ephemeral previews retain `/`;
- GitHub Pages build explicitly sets `VITE_BASE_PATH: '/Sky-Estate/'`;
- production keeps `VITE_USE_HASH_ROUTER: 'true'`.

Verified production artifact now references:
- `/Sky-Estate/favicon.svg`
- `/Sky-Estate/assets/index-*.js`
- `/Sky-Estate/assets/index-*.css`

Result: **FIXED / PASS**.

### Production smoke gate

Workflow: `KHOANG Production Smoke`

Final passing run: `36344610119`

Artifact: `khoang-production-smoke`

Public production cases:
- Home — 375
- Home — 1440
- Discover — 375
- Discover — 1440
- Residence Detail — 375
- Residence Detail — 1440

Production result:
- cases: **6**
- failures: **0**
- HTTP status: **200** for all cases
- correct KHOẢNG document titles: **PASS**
- expected route H1: **PASS**
- one H1 per page: **PASS**
- shared main/nav present: **PASS**
- horizontal overflow: **0**
- broken images: **0**
- console errors: **0**
- page errors: **0**
- asset base contains `/Sky-Estate/assets/`: **PASS**
- legacy body-text leak (`Sky Estate`, `Aether Lane`, `Galaxy Home`, `Aether Peak`): **0**

Production screenshots were also opened after automation and visually checked. Desktop and mobile retain the approved KHOẢNG hierarchy, media ownership and responsive composition.

## Root-cause remediation history

### P1 — inherited fantasy media leaked into KHOẢNG

Human screenshot review caught the inherited `galaxy-home-pinnacle` fantasy fixture in active product media.

Root fix:
- `src/data/living.ts` owns `khoangProperties`;
- `galaxy-home-pinnacle` is excluded from active KHOẢNG inventory;
- Home, Discover, Residence Detail, Shortlist, Collections, Field Notes and Consult resolve product context from the curated inventory owner.

Result: **FIXED / PASS**.

### P1 — shared text contrast

Axe caught shared muted foreground contrast below the intended threshold.

Root fix:
- strengthened `--color-muted` to `#62665e`.

Result: **FIXED / PASS**.

### P1 — link foreground cascade

Axe isolated Ink-background CTA links whose foreground inherited Graphite.

Root cause:
- custom unlayered `a { color: inherit; }` overrode Tailwind utility-layer link colors.

Root fix:
- removed the redundant global anchor color override.

Result: **FIXED / PASS**.

### P1 — residence document title

Rendered QA caught an empty document title on the dynamic Residence Detail route.

Root fix:
- retained Helmet metadata;
- added route/property-aware `document.title` synchronization.

Result: **FIXED / PASS**.

### P1 — supporting routes bypassed curated inventory

Human all-route review caught supporting routes reading raw inherited fixture data.

Root fix:
- Collections, Field Notes and Consult now consume `khoangProperties`.

Result: **FIXED / PASS**.

### P1 — GitHub Pages base path

Production smoke caught the project-subpath asset failure described above.

Root fix:
- deployment-aware Vite base path + explicit `/Sky-Estate/` production build setting.

Result: **FIXED / PASS**.

## Human visual veto

Final pre-release and production screenshots were opened and inspected for:
- design hierarchy
- responsive recomposition
- media crop / ownership
- fantasy / old-brand leakage
- cross-page KHOẢNG visual DNA
- CTA foreground/background pairing
- collection/editorial consistency
- mobile long-page rhythm
- production hydration and asset correctness

Outcome: **PASS — no remaining DUE-NOW P0/P1 defect identified.**

Known P2 / non-blocking craft opportunity:
- some editorial imagery repeats because the synthetic prototype inventory is intentionally small. Increasing the curated media set would improve editorial richness but is not required for correctness or the release gate.

## OLD → NEW / Design Contract status

### OLD → NEW

**PASS for structural delta**, with documented evidence limitation.

Prompt 1 used source/layout/component fallback evidence rather than a verified live OLD pixel capture. The project does not claim pixel-perfect OLD→NEW screenshot equivalence.

Verified structural delta includes:
- cosmic luxury marketplace → design-led Living Discovery
- generic listing filters → Living Index + conventional facts
- generic property detail → spatial/lifestyle evaluation journey
- fake brokerage authority → transparent portfolio-prototype framing
- repetitive glass/gradient card system → editorial/asymmetric composition system

### NEW → DESIGN CONTRACT

**PASS**.

The released site preserves:
- Architectural · Quiet · Tactile character
- Paper / Chalk / Ink / Graphite / Moss palette
- sans-led editorial typography
- restrained motion / reduced-motion handling
- Living Index as primary signature interaction
- no active fantasy-property imagery
- no fake social proof / brokerage authority claims

### NEW → NEW cross-page consistency

**PASS** across Home, Discover, Residence Detail, Collections, Journal, About, Consult, Shortlist and 404.

## Requirement ledger

| Requirement | State | Evidence |
|---|---|---|
| Structural redesign | DONE_VERIFIED | merged implementation + rendered routes |
| Living Index | DONE_VERIFIED | source + interaction smoke |
| 375 / 768 / 1440 responsive review | DONE_VERIFIED | Final QA screenshots |
| Shared nav/footer/theme sanity | DONE_VERIFIED | all-route screenshots |
| Media/focal integrity | DONE_VERIFIED | screenshots + curated-inventory remediation |
| Lint | DONE_VERIFIED | GitHub Actions |
| Production build | DONE_VERIFIED | GitHub Actions |
| Serious/critical automated a11y gate | DONE_VERIFIED | 0 in Final QA |
| Critical interaction smoke | DONE_VERIFIED | 4/4 PASS |
| Human visual veto | DONE_VERIFIED | pre-release + production screenshots |
| NEW → Design Contract | DONE_VERIFIED | final visual review |
| NEW → NEW cross-page consistency | DONE_VERIFIED | 9-route review |
| OLD → NEW structural proof | DONE_VERIFIED | fallback OLD source evidence + NEW renders |
| PR merge | DONE_VERIFIED | PR #1 squash merge |
| GitHub Pages deploy | DONE_VERIFIED | production workflow |
| Production base path / hydration | DONE_VERIFIED | artifact + public smoke |
| Production smoke | DONE_VERIFIED | run 36344610119, 6/6 PASS |
| Direct user validation | PENDING_FUTURE_PHASE | no user-research outcome claims made |

## Blocker accounting

- DUE-NOW `BLOCKED`: **0**
- DUE-NOW `UNACCOUNTED`: **0**
- Remaining DUE-NOW P0: **0**
- Remaining DUE-NOW P1: **0**

## Final QA result

`PASSED`

## Release status

# RELEASED — PRODUCTION VERIFIED

Production: **https://ngh1aa.github.io/Sky-Estate/**
