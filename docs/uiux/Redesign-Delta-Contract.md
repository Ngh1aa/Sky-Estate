# Redesign Delta Contract — OLD Sky-Estate → NEW KHOẢNG

This contract defines what must materially change in Prompt 02. Cosmetic substitution is insufficient.

## 1. Product identity

### OLD
Luxury real-estate brand framed as Sky Estate / Aether Lane / Galaxy Home.

### NEW
KHOẢNG — a design-led living discovery prototype.

### Acceptance
A reviewer should understand the new proposition without seeing the old brand name, purple theme or Galaxy Home hero.

---

## 2. Homepage hierarchy

### OLD
Cinematic Galaxy Home hero → social-proof stats → featured properties → four generic value cards → testimonials → generic CTA.

### NEW
Living-intent entry → instant responsive property selection → Ways of Living collections → deep editorial residence story → transparent Living Index methodology → discover/consult continuation.

### Acceptance
The page must prove the discovery mechanic through interaction before relying on explanatory marketing sections.

---

## 3. Navigation / IA

### OLD
Home / About / Estates / Projects(query alias) / Inquire.

### NEW
Home / Discover / Collections / Journal / About + primary `Consult` action + shortlist access when implemented.

### Acceptance
Every nav item must map to a distinct product/content role. No fake page role implemented only as a query alias.

---

## 4. Discovery model

### OLD
Keyword + type + city + bedroom + price + sort.

### NEW
Living Index first-class discovery + conventional filters as secondary precision controls.

### Acceptance
A user must be able to create a useful result state from living qualities alone and understand why a residence matches.

---

## 5. Property card

### OLD
Image + type + price + title + location + beds/baths/area.

### NEW
Image + residence identity + location + key living-quality match + essential price/fact information + save action.

### Acceptance
The card should answer both:
- “What is this?”
- “Why might this fit the way I want to live?”

---

## 6. Residence detail

### OLD
Gallery → property title/price → stat grid → description → amenities → map placeholder → booking form → related cards.

### NEW
Hero identity → Living Index evidence → spatial/editorial story → essential facts → context/location → amenities only when decision-relevant → media/plans where available → shortlist/consult → related by shared living qualities.

### Acceptance
The detail page must read as a decision narrative, not a specification dump.

---

## 7. About

### OLD
Invented 2014 company story, named founder, team, values and achievement statistics.

### NEW
About the product concept and Living Index method, including explicit prototype/evidence limitations.

### Acceptance
No unverified founder, company history, employee or transaction claims remain.

---

## 8. Contact / conversion

### OLD
Generic contact form + invented office/hotline/email/map + FAQ.

### NEW
Preference-aware consultation form that carries selected living qualities and residence context when available.

### Acceptance
No fake physical office or service SLA. Form feedback states remain clear and accessible.

---

## 9. Content system

### OLD
Status-driven luxury language; generic adjectives; unsupported brand/social proof.

### NEW
Observational, architecture-aware descriptions tied to visible/spatial qualities and clearly synthetic prototype data.

### Acceptance
No unsupported claims about architects, brands, awards, customer counts, transaction values or market leadership.

---

## 10. Visual system

### OLD
Dark cosmic purple, glass panels, gradients, glowing accents, repeated rounded cards.

### NEW
Architectural editorial system defined in `Design-Contract.md`.

### Acceptance
A screenshot in grayscale should still look structurally different because hierarchy/composition changed, not only palette.

---

## 11. Motion system

### OLD
Frequent fade/slide-in section animation plus parallax/glow presentation.

### NEW
One signature Living Index transition, restrained image/typography reveals, meaningful state transitions, reduced-motion equivalent.

### Acceptance
Motion communicates filtering, continuity or focus. Decorative motion must not be the primary source of perceived polish.

---

## 12. Data model

### OLD
Property metadata is dominated by transaction-style facts and generic amenities.

### NEW
Extend each synthetic residence with structured living qualities and evidence text, for example:

```ts
livingQualities: [
  { key: 'light', label: 'Morning light', evidence: 'East-facing courtyard...' },
  { key: 'quiet', label: 'Quiet edge', evidence: 'Set back from...' }
]
```

Exact schema belongs to Prompt 02 engineering, but every quality shown to users must have explanatory evidence rather than an unexplained tag.

---

## 13. Route/page-role delta

| OLD | NEW | Delta |
|---|---|---|
| `/` | `/` | complete narrative + discovery redesign |
| `/listings` | `/discover` | marketplace filter page → living discovery |
| `/listings/:id` | `/residences/:id` | spec page → decision story |
| query-based `Projects` | `/collections` | fake nav role → genuine editorial discovery |
| none | `/journal` | new editorial context role |
| `/about` | `/about` | fake company history → method/product story |
| `/contact` | `/consult` | generic contact → contextual consultation |
| none | `/shortlist` optional | continuity/saved residences |

Compatibility redirects may be retained if useful.

## Representative implementation gate for Prompt 02

Before whole-site rollout, Prompt 02 must render and inspect:

1. Home `/`
2. Discover `/discover`
3. Residence detail `/residences/:id`

Default declared responsive scope: `responsive_all`.

Required representative viewports:
- 375px
- 768px
- 1440px

Rollout is blocked if these representatives are only cosmetically changed or if the Living Index does not work as a real interaction.
