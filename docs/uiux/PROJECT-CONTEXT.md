# PROJECT CONTEXT — KHOẢNG

## Project identity

- Project name: **KHOẢNG** (working/final direction for Prompt 01)
- Project type: Responsive web prototype / design-led property discovery
- Repository: `Ngh1aa/Sky-Estate`
- Current stage: Research → Design Contract lock
- Validation lane: `prototype / evidence-led`

## Project goal

Transform the cloned Sky-Estate real-estate prototype into an original portfolio-grade product that helps people discover homes by **how they want to live**, not only by price, type, bedroom count and city.

Success for this phase means the new product positioning, critical journey, sitemap, structural redesign delta, art direction and implementation constraints are explicit enough that Prompt 02 can implement without falling back to the inherited Aether Lane/Galaxy Home template.

## Primary users

Design-aware home seekers in Vietnam, initially focused on urban and lifestyle property discovery. They care about architecture, atmosphere, privacy, natural light, nature, work/life patterns and the emotional quality of a home in addition to conventional property facts.

## UX / product problem frame

- Priority user: design-conscious buyer/renter browsing a curated inventory.
- Highest-value task: quickly narrow homes to a meaningful shortlist based on desired living qualities.
- Observed friction in current product: discovery is conventional (type/city/beds/price/search), while the brand promises an elevated lifestyle experience.
- Primary behavior: select living qualities → explore relevant homes → evaluate one residence → request a consultation.
- User value: less generic browsing; more meaningful comparison based on spatial/lifestyle fit.
- Owner value: a differentiated discovery proposition and clearer consultation intent.
- Critical journey: `ENTRY → EXPRESS LIVING INTENT → DISCOVER → EVALUATE → SHORTLIST/CONSULT → CONFIRM`.

## Evidence state

### VERIFIED

- React/Vite/TypeScript frontend with React Router and Framer Motion.
- Existing routes: Home, Listings, Property Detail, About, Contact and 404.
- Existing discovery mechanics: keyword search, type, city, bedrooms, price and sort.
- Existing detail mechanics: image gallery/lightbox, amenities, facts and booking form.
- Current visual system is cosmic/purple/glass-led and heavily tied to Aether Lane / Galaxy Home.
- Existing source contains synthetic/unverified brand claims, team biographies, performance statistics, office/contact details and luxury-property claims.

### INFERRED

- Existing technical mechanics can be reused as implementation foundations while replacing the experience architecture and brand layer.
- The strongest portfolio differentiation comes from making discovery itself different rather than producing another luxury real-estate reskin.

### UNKNOWN

- Real inventory, legal property status, actual brokerage operations, real customer data, real conversion baseline, real consultation SLA and verified business metrics.

## Technology

- React: current package manifest uses React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router 7
- Framer Motion
- react-helmet-async
- lucide-react

Source code is authoritative over README when they conflict.

## Source of truth

1. User request
2. `docs/uiux/*` after Prompt 01 lock
3. Current source under `src/`
4. `package.json` and deployment config
5. UIUX Factory operating rules
6. External reference research

## Preserve

- React/Vite/TypeScript architecture
- route-based lazy loading
- reduced-motion support
- keyboard/focus foundations
- reusable form validation logic
- gallery/lightbox mechanics
- search/filter state patterns
- data-driven PropertyCard/detail rendering where useful
- Vercel/GitHub Pages compatibility

## Rework

- navigation and information architecture
- homepage narrative
- discovery model
- property-card decision hierarchy
- property-detail information architecture
- data model to support living qualities
- content strategy
- responsive composition
- visual system
- motion grammar
- conversion journey

## Remove / do not carry forward

- Sky Estate / Aether Lane / Galaxy Home identity
- purple cosmic default aesthetic
- generic glass-heavy luxury treatment
- unsupported transaction/customer/experience statistics
- invented founder/team biographies presented as real
- invented office/hotline/email presented as real
- testimonials presented as verified customer evidence
- generic four-value-card sections unless re-earned by the new concept

## Must

- remain recognisably a property discovery product
- support desktop/tablet/mobile intentionally
- make the differentiating discovery mechanism understandable within the first interaction
- retain conventional property facts as secondary decision support
- use prototype/synthetic labels where facts are not real
- pass structural redesign delta gate before claiming redesign success

## Must not

- pass as a color/font/image reskin
- fabricate customer, market, company or property claims
- imitate a reference website layout directly
- make every section a rounded card
- apply identical fade-up motion everywhere
- use luxury clichés as a substitute for information architecture

## Proposed success signals for prototype validation

No measured baseline exists. Planned signals only:

- user can explain the product difference after a short first-view test
- user can select 2–3 living qualities without instruction
- user can reach a relevant residence from the discovery experience
- user can explain why a residence matches selected qualities
- user can identify the next action (save/consult)

Do not claim conversion uplift or usability success before direct testing.
