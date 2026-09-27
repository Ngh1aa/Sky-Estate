# Product Direction — KHOẢNG

## Name

# KHOẢNG

Display name intentionally uses the Vietnamese word “Khoảng”: space, interval, breathing room, distance, room to live.

English descriptor:

**KHOẢNG — Living Discovery**

## Positioning

**Find a home by how you want to live.**

KHOẢNG is a design-led property discovery experience that lets people begin with living qualities — light, quiet, garden, water, skyline, material character, work/life patterns — then narrow into conventional property facts.

It is not positioned as a real brokerage company in this prototype phase.

## Primary audience

Design-aware urban home seekers who care about spatial quality and lifestyle fit but still need conventional property facts to make decisions.

## Highest-value user task

Turn a vague desire such as “bright, quiet, green, suitable for working from home” into a small set of relevant residences that can be compared and acted on.

## Core differentiator — Living Index

The **Living Index** is the product's signature discovery mechanic.

Instead of beginning with only:

`City / Property Type / Price / Bedrooms`

users can begin with:

- Light
- Quiet
- Garden
- Water
- Skyline
- Material Character
- Indoor–Outdoor
- Work from Home
- Entertaining
- Retreat

These labels are product hypotheses. Prompt 02 should model them as explicit synthetic metadata and avoid claiming objective measurement unless a measurable rule exists.

### Interaction model

1. User sees the question: **“What should home feel like?”**
2. User chooses up to 3 living qualities.
3. The interface immediately composes a small visual selection.
4. User can switch to familiar filters at any time.
5. Residence cards explain *why* they match: e.g. `Morning light · Quiet edge · Garden court`.
6. Detail pages expand the matching qualities into visual/editorial evidence.

## Critical journey

`HOME`
→ choose living qualities
→ `DISCOVER`
→ refine with conventional facts
→ open a residence
→ `RESIDENCE DETAIL`
→ understand spatial/lifestyle fit
→ save to shortlist or request a conversation
→ confirmation state.

## Sitemap

### `/` — Home / Living Discovery Entry
Purpose: communicate the product difference and start discovery within seconds.

Core sections:
- minimal global nav
- hero / living-intent selector
- immediate curated preview
- “Ways of Living” editorial collection rail
- selected residence story
- methodology / what the Living Index means
- consultation CTA

### `/discover` — Discovery
Replaces the old generic `/listings` role.

Core capabilities:
- active Living Index chips
- search
- location
- price
- type
- bedrooms
- sort
- grid/list switch if useful
- shortlist state
- clear explanation of result matches
- intentional zero-result recovery

### `/residences/:id` — Residence Detail
Replaces `/listings/:id` conceptually.

Decision hierarchy:
1. residence identity + strongest visual
2. key Living Index qualities
3. visual story / spatial character
4. essential property facts
5. location/context
6. rooms/amenities
7. gallery / plans where available
8. why it may fit the selected intent
9. shortlist / consultation action
10. related residences by shared living qualities

### `/collections` — Ways of Living
Editorial discovery by themes such as:
- Homes for Morning Light
- Quiet City Edges
- Rooms that Open to Green
- Living Above the Skyline

This is a curated prototype page, not an algorithmic claim.

### `/journal` — Field Notes
Short editorial stories around architecture, materials, neighbourhoods and patterns of living.

Purpose: demonstrate the brand's point of view without inventing brokerage authority.

### `/about` — About the Method
Explains KHOẢNG as a prototype/product concept, the Living Index logic and design philosophy.

No fake founders, team biographies, company history or transaction statistics.

### `/consult` — Consultation / Enquiry
Reworks Contact into a preference-aware enquiry flow.

Fields can include:
- name
- email/phone
- preferred locations
- budget range
- selected living qualities
- message

The prototype must not claim a real office, hotline or response SLA.

### `/shortlist` — Saved Residences (optional but recommended)
A lightweight client-side shortlist that demonstrates continuity across discovery/detail.

### `*` — 404

## Route migration intent

- `/listings` → `/discover`
- `/listings/:id` → `/residences/:id`
- `/contact` → `/consult`
- `/about` remains but its content role changes completely

Prompt 02 may preserve compatibility redirects where useful.

## Homepage narrative

### 01 — Orientation
Brand + one-line proposition + Living Index selector.

### 02 — Immediate consequence
Selecting qualities changes visible residences immediately. The first interaction proves the product instead of describing it.

### 03 — Ways of Living
Editorial collections show how KHOẢNG thinks about homes.

### 04 — One Residence, Read Properly
A large editorial feature breaks a home into light, material, boundary, view and daily rhythm.

### 05 — Method
A short, transparent explanation of how living-quality tags are used in the prototype.

### 06 — Continue
Discover all residences / start a consultation.

## Conversion model

Primary:
- `Explore residences`
- `Save residence`
- `Request a consultation`

Secondary:
- browse collection
- read field note

No fake urgency, countdowns, scarcity or social proof.

## Content voice

- precise
- observational
- calm
- visually literate
- not sales-hype

Prefer:
“Filtered morning light reaches the living room from the east-facing courtyard.”

Avoid:
“An unparalleled masterpiece redefining ultimate luxury.”

## Prototype data policy

Residence inventory remains synthetic unless independently verified.

Prompt 02 should:
- remove unsupported architect/interior-brand attributions;
- label synthetic prototype content appropriately in docs/about;
- use believable but non-deceptive descriptions;
- avoid invented awards, transaction history and testimonials.
