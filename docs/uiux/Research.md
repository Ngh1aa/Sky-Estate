# Prompt 01 Research — Sky-Estate → KHOẢNG

## Executive finding

The current project has a stronger technical base than product proposition. Its defining experience is still a conventional luxury-property marketplace hidden under a cosmic visual concept. The redesign should therefore preserve useful mechanics but replace the product idea, information hierarchy and decision journey.

## Source audit

### PRESERVE

- Multi-route React architecture.
- Search/filter/sort state management.
- Gallery/lightbox interaction.
- Form validation and loading/success states.
- Lazy route loading.
- reduced-motion handling.
- accessibility foundations such as skip links and focus treatment.
- reusable property/data rendering patterns.

### REWORK

- `HomePage`: current hero is a cinematic one-off visual followed by generic social proof, featured listing cards, generic value cards, testimonials and CTA.
- `ListingsPage`: useful functional base, but discovery is conventional and does not express the premium/design-led proposition.
- `PropertyDetailPage`: strong mechanics but information is presented as gallery + specifications + amenities + booking form; it needs to become a decision story.
- `AboutPage`: narrative, founder, team, years of experience and achievements are synthetic/unverified.
- `ContactPage`: office address, hotline, response promise and email are synthetic/unverified and should not be presented as real business facts.
- Shared navigation: current `Projects` route is only a query alias into Listings and does not represent a true page role.

### REMOVE

- Aether Lane / Sky Estate / Galaxy Home brand system.
- cosmic-purple/glass default visual language.
- fake social proof and performance metrics.
- fake founder/team/office claims.
- luxury clichés that do not help property evaluation.

### UNKNOWN / NEEDS EVIDENCE

- Real brokerage business model.
- Real inventory ownership and availability.
- Real locations/prices/architect credits.
- Actual user conversion funnel.
- Any actual customer testimonial or service SLA.

## Content integrity issues found

The repository currently contains multiple incompatible or unsupported claims. Examples include:

- README references React 18 while `package.json` uses React 19.
- README describes 12 mock properties while homepage copy refers to 13 estates and Listings copy claims 500+ properties.
- About presents a 2014 founding story, named founder, prior employers, 12+ years of experience and transaction achievements without evidence.
- Contact presents a Landmark 81 office, hotline, email and 24-hour reply promise without evidence.
- Some residence descriptions attribute work or interiors to well-known architecture/design brands without proof.

Prompt 02 must convert these into clearly synthetic prototype data or remove them.

## External reference research

### The Modern House

Useful evidence:
- Positions itself around thoughtful living and design-led homes.
- Explicitly describes the homes it represents through space, light, materials, nature and decoration.
- Maintains editorial content alongside property listings.
- Its 2026 search rebuild prioritises fast, context-aware discovery and intentionally mixes listings and editorial content when relevant.

Adopt:
- design qualities as meaningful discovery metadata;
- editorial depth around residences;
- restrained motion and image prominence.

Do not copy:
- exact homepage/listing composition;
- brand typography or British modernist identity.

Sources:
- https://themodernhouse.com/about/
- https://themodernhouse.com/journal/finding-the-right-home-faster

### Inigo

Useful evidence:
- Historic-home positioning is not based on generic price/status alone.
- The homepage combines property inventory with story-led editorial content.
- Brand promise focuses on authentic details and compelling stories.

Adopt:
- story as a decision layer;
- distinct editorial/property relationships.

Do not copy:
- ornamental/heritage art direction or palette.

Source:
- https://www.inigo.com/

### JamesEdition

Useful evidence:
- Strong conventional marketplace mechanics: location, price, beds, property types and large-scale browsing.
- Promotes personalised discovery via custom filters, wish lists, alerts and personalised feeds.
- Direct listing-agent contact remains the end conversion.

Adopt:
- familiar filters as an escape hatch;
- shortlist/saved-search mental model;
- direct next action.

Do not copy:
- marketplace density or global-luxury visual conventions.

Source:
- https://www.jamesedition.com/real_estate

### Sotheby's International Realty

Useful evidence:
- Editorial frequently connects architecture, setting and lifestyle rather than treating luxury as price alone.
- Current property storytelling repeatedly emphasises architectural distinction, setting, privacy, craftsmanship and how a home supports living patterns.

Adopt:
- architecture + setting + lifestyle as one narrative object.

Do not copy:
- auction-house luxury symbolism or brand language.

Sources:
- https://www.sothebysrealty.com/extraordinary-living-blog/new-and-notable-properties-september-2026/
- https://www.sothebysrealty.com/extraordinary-living-blog/new-and-notable-properties-june-2026/

### Knight Frank 2026 Residence Report

Useful evidence:
- Luxury residential development is broadening beyond standard amenities.
- Current reporting highlights lifestyle destinations, authenticity, belonging, exceptional experiences, nature and wellness.
- The report frames place, provenance, judgement and human connection as increasingly difficult-to-copy sources of value.

Adopt:
- avoid defining luxury through a checklist of premium amenities alone;
- surface relationship to place, nature, daily rhythms and community where relevant.

Do not copy:
- branded-residence or UHNW-specific business assumptions into a general prototype.

Sources:
- https://www.knightfrank.com/research/reports/global/the-residence-report
- https://www.knightfrank.com/research/article/2026/9/residence-report-2026-new-scarcity-luxury-developments
- https://www.knightfrank.com/research/article/2026/9/residence-report-2026-wellness-branded-residences

## Design-intelligence retrieval status

The workspace's design-intelligence augmentation was activated conceptually because the inherited visual direction is generic and a system-level redesign is required. A narrow repository search for a directly matching real-estate/luxury-property design-system corpus returned no verified match through the available connector. Per the workspace rule, this is recorded as **no verified match** rather than fabricating vendor guidance.

External current-market/reference research therefore carries the active evidence for this phase; the canonical Design Contract below remains authoritative.

## Three materially different concepts considered

### A — KHOẢNG / Living Index

A design-led property discovery product organised around desired living qualities such as light, quiet, garden, water, skyline, material character and work/life patterns.

Strengths:
- directly changes discovery behaviour;
- creates a memorable product interaction;
- works with existing property/filter/detail mechanics;
- strong portfolio story because product thinking is visible in the UI.

Trade-offs:
- requires expanding the property data model;
- living-quality tags are hypotheses until user-tested;
- must retain conventional facts so discovery does not feel vague.

### B — ATLAS / Place-first Property Explorer

A map-led product where users start from neighbourhood/landscape context and explore homes through proximity, local character and movement through the city.

Strengths:
- highly visual and spatial;
- strong differentiation from card grids;
- clear relationship between home and place.

Trade-offs:
- meaningful prototype requires map/location data that the current project does not have;
- risks becoming a map-demo rather than a property product;
- higher implementation scope for Prompt 02.

### C — PRIVATE EDIT / Concierge-first Curation

A high-touch product that asks a short set of preference questions and returns a small editorially curated shortlist, emphasising human advisor support over open-ended browsing.

Strengths:
- strong premium feel without visual cliché;
- creates a focused conversion story;
- reduces choice overload.

Trade-offs:
- weakens the existing browse/listing foundation;
- would rely heavily on simulated recommendation logic;
- less useful for showing a rich discovery system in the portfolio.

## Direction selected

**KHOẢNG / Living Index**.

Reasoning: it introduces the strongest structural change while preserving and upgrading the most useful technical foundations already in the repository. It also aligns with reference evidence that design-led home discovery benefits from architectural qualities, story and context, while conventional filters remain useful support.

This is a product hypothesis, not validated user evidence. Direct user testing is planned for a later phase.
