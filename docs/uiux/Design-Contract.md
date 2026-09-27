# Design Contract — KHOẢNG

## Design intent

KHOẢNG should feel like an architectural publication that happens to be a property product — but it must remain immediately usable as a discovery tool.

## Three adjectives

**Architectural · Quiet · Tactile**

Every visual decision should reinforce at least one of these qualities without reducing the interface to a generic editorial template.

## Art direction

### Core principle

Premium quality comes from composition, photography, hierarchy, pacing and confidence of information — not from glow, glass, metallic gradients or luxury clichés.

### Palette

Primary surfaces:
- Paper: `#F4F3EF`
- Chalk: `#FAFAF7`
- Ink: `#171815`
- Graphite: `#343631`
- Mist: `#D9DCD4`

Single product accent:
- Moss: `#5E6B50`

Optional semantic states may use separate accessible success/error/warning colors, but Moss remains the only decorative/product accent.

Do not introduce gold, purple neon or multi-color gradients as luxury shorthand.

### Typography

Direction: contemporary grotesk + restrained mono utility layer. Avoid default “cream + elegant serif = premium” treatment.

Preferred implementation starting point:
- Display/body: **Instrument Sans** or another verified open/licensed contemporary sans with a broad useful family.
- Data/utility labels: **IBM Plex Mono** or equivalent.

Prompt 02 must verify font availability/licensing before adoption and may substitute a technically safer equivalent while preserving the sans-led character.

Type behavior:
- large editorial headlines with tight line-height;
- sentence case, not all-caps everywhere;
- utility labels small but readable;
- strong contrast between narrative and property data;
- body line length roughly 60–75 characters on wide layouts.

### Grid

Desktop:
- 12-column underlying grid.
- asymmetrical compositions encouraged.
- property storytelling can alternate 5/7, 7/5, full-bleed and narrow text columns.
- avoid universal centered max-width card stacks.

Tablet:
- 8-column interpretation.
- preserve hierarchy before preserving exact geometry.

Mobile:
- 4-column interpretation.
- recomposition, not desktop compression.
- Living Index remains high in the page and easy to reach.

### Spacing

Use large editorial whitespace between major narrative shifts, but keep discovery controls compact enough for practical browsing.

Whitespace is functional: it should separate decision stages, not merely make every screen sparse.

## Photography / media direction

### Desired character

- real architectural/interior photography where licensing allows;
- daylight, natural material and spatial depth;
- lived-but-uncluttered environments;
- diverse context: urban, river, garden, skyline, retreat;
- avoid generic AI-generated mansions or implausible fantasy properties.

### Media hierarchy

Home:
- one dominant architectural image, supported by a smaller counter-image or material/detail crop.
- no generic full-screen background with text simply overlaid in the middle.

Discover:
- image ratio may vary intentionally by result grouping, but card ownership must remain clear.

Residence detail:
- opening visual should establish the strongest spatial quality;
- subsequent media should support claims such as light, indoor/outdoor, material or view.

### Focal contract

For each media family, Prompt 02 must verify:
- primary architectural subject remains visible at 375 / 768 / 1440;
- no accidental vertical slivers;
- no stretched assets;
- no detached caption/price/CTA;
- `object-fit: cover` alone is not considered crop evidence.

## Signature interaction — Living Index

### Goal

Make the product differentiator understandable without onboarding text.

### Desktop behavior

A question-led selector appears as part of the hero composition:

**What should home feel like?**

Qualities are presented as text-led controls, not pill soup.

Selecting a quality should:
1. visibly enter the active intent set;
2. update a nearby residence composition immediately;
3. expose why each matched residence relates to that quality;
4. support max 3 active qualities before encouraging deeper discovery.

### Mobile behavior

Use an accessible horizontal/stacked selector with sufficient touch targets. The preview may collapse to one primary residence at a time.

### Reduced motion

The state change must remain fully comprehensible with motion disabled.

## Motion grammar

Use motion for:
- state change;
- selection continuity;
- media reveal when it helps reading order;
- page transition restraint.

Avoid:
- every section entering from `opacity:0, y:30`;
- constant parallax;
- pulsing/glowing decorative controls;
- scale-on-hover on every element.

Timing guidance:
- micro-interaction: ~150–240ms;
- content state transition: ~240–400ms;
- major narrative reveal: up to ~700ms only when earned.

Respect `prefers-reduced-motion`.

## Component language

### Buttons

Primary:
- solid Ink or Moss depending on surface;
- modest radius, not universal pills;
- clear text and arrow/icon only when meaningful.

Secondary:
- text or border treatment.

### Living-quality controls

Should feel more like an index/editorial marker than rounded SaaS tags.
Possible direction:
- text row with leading index number;
- underline/rule state;
- active marker block;
- compact square or soft-rect hit target.

Do not render 10 identical rounded pills as the hero signature.

### Property cards

Not all cards need the same shell.

Required information ownership:
- image
- title
- location
- 1–3 matching qualities
- key facts
- price when retained
- save affordance

Cards may use border/rule layout instead of boxed surfaces.

### Forms

Quiet, high-contrast, large enough for touch. Error/help text must remain visible in all themes/states.

## Homepage composition contract

### Hero

Not full-screen cosmic background.

Recommended composition:
- left/top: name + proposition + Living Index;
- right/below: dynamic residence visual pair;
- a thin contextual line such as selected location / residence count only if data is truthful.

### Ways of Living

Editorial collection covers with varied image crops and short descriptive titles.

### Featured residence

Large narrative composition with 2–3 media assets and short spatial observations.

### Method

Minimal and transparent. No four-card generic benefit grid.

## Discover composition contract

Desktop:
- persistent compact intent/filter owner region;
- generous result canvas;
- strong separation between active Living Index and conventional filters;
- result explanations attached to each residence.

Mobile:
- sticky/accessible filter summary;
- full filter controls in drawer/sheet if needed;
- preserve result imagery and match explanation.

## Residence detail composition contract

Must include:
- strong opening identity
- Living Index match summary
- editorial visual story
- essential data cluster
- contextual/location section
- consultation owner that does not overwhelm reading
- related residences based on shared qualities

Avoid a right-column sticky lead form occupying the entire experience from the first screen unless usability evidence later supports it.

## Anti-template rules

Prompt 02 fails the Design Contract if it relies on any combination of:
- dark background + neon accent;
- cream background + serif + brown/orange luxury cliché;
- every section has eyebrow + H2 + paragraph + 3 cards;
- every object in a rounded container;
- arbitrary glassmorphism;
- excessive gradients;
- fake floating dashboards;
- same fade-up animation for all sections;
- AI-generated ornamental blobs/auroras;
- decorative effects that make the architecture secondary.

## Accessibility basics

- maintain visible focus states;
- text contrast must remain legible across image/surface contexts;
- touch targets ≥44px when practical on mobile;
- semantic headings and form labels;
- state must not rely on color alone;
- reduced-motion support;
- decorative image alt handling vs informative image alt handling must be intentional.

## Responsive scope

`responsive_all`

Mandatory review widths:
- 375px
- 768px
- 1440px

Responsive quality means intentional transformation, not merely no overflow.
