# KHOẢNG — Decision Governance & Playbacks

Status: **POST-LAUNCH GOVERNANCE RECORD / HUMAN DECISION OWNERSHIP REQUIRED**

Canonical sources:

- `uiux-ai-workspace/skills_UIUX/human-governance-and-playbacks/SKILL.md`
- `uiux-ai-workspace/skills_UIUX/product-decision-and-stakeholder-framing/SKILL.md`

## Governance principle

`user outcome → decision owner → evidence → review → explicit decision → recorded rationale`

AI/automation may assemble evidence and run technical verification. It does not silently acquire product, research, privacy/compliance or release authority.

## Outcome statement

**Who:** design-aware urban home seekers evaluating lifestyle fit as well as conventional property facts.

**Need:** narrow a broad property search into a meaningful set of residences based on how they want to live.

**Observable success condition:** a target user can express living intent, understand why shown residences match, recover expected property facts, preserve promising options and understand the next step.

The observable user-success conditions remain **PLANNED VALIDATION** until direct-user evidence exists.

## Decision rights

| Decision area | Human / authorized owner | Current status |
|---|---|---|
| Product direction and portfolio outcome | Project/product owner | Explicit project direction exists. |
| Design quality / KHOẢNG visual and UX contract | Project/design owner | Release contract and QA record exist. |
| Engineering feasibility / production implementation | Implementation/repository owner | Production release verified within documented coverage. |
| User-research evidence | **UNASSIGNED / UNKNOWN** until a real research round is organized | No DIRECT_USER evidence recorded. |
| Analytics / measurement implementation | Project/product + implementation owner | Measurement contract exists; instrumentation not verified. |
| Privacy / consent for future analytics or real enquiry capture | **MUST BE EXPLICITLY OWNED BEFORE COLLECTION** | No production telemetry or real enquiry service is claimed. |
| Production release | Authorized project/repository owner | Current release already executed; future material releases require explicit authority. |

One person may hold several roles in a portfolio project, but the role and evidence boundary must remain explicit.

## Playback moments

### 1. Problem playback

Question: are we solving an evidenced problem for the intended audience?

Current state:

- repository/desk evidence supports the design problem and differentiation strategy;
- direct user evidence is missing;
- therefore the problem framing is retained as a strong product hypothesis, not declared universally validated.

Next gate: real-user validation of proposition, current discovery behavior and label comprehension.

### 2. Concept / design playback

Question: do major choices fit the intended outcome and current evidence?

Current state: implemented and design-QA verified, but user-outcome evidence remains pending.

Primary choices under observation:

- Living Index as first-class discovery mechanic;
- lifestyle qualities first, conventional facts second but recoverable;
- match explanations on cards/detail;
- calm editorial visual language;
- transparent prototype framing rather than invented brokerage authority.

### 3. Delivery playback

Question: does the end-to-end working experience preserve the intended critical journey?

Current state: technical and visual release evidence covers the implemented journey, including Living Index interaction, Discover refinement, Residence evaluation, Save → Shortlist continuity and production route/render checks.

Boundary: this verifies delivery behavior within QA coverage, not real-user comprehension or desirability.

### 4. Release / learning decision

Current release: **AUTHORIZED / EXECUTED / PRODUCTION VERIFIED** according to the repository release record.

Post-launch condition: outcome claims stay limited until direct research and/or verified analytics are available. Future analytics collection or real enquiry submission requires an explicit privacy/measurement decision before rollout.

## Material decision records

### D1 — Make Living Index the signature discovery entry

- **Decision:** begin discovery with living qualities rather than only city/type/price/bedrooms.
- **Owner:** project/product-design owner.
- **Evidence:** desk research/project framing plus implementation evidence; no DIRECT_USER validation yet.
- **Alternative:** conventional property filters as the primary entry.
- **Trade-off:** stronger differentiation and lifestyle framing vs higher risk of unfamiliar terminology and interaction-model confusion.
- **Dissent / UNKNOWN:** actual user comprehension, label meaning and preference remain UNKNOWN.
- **Condition:** retain as released hypothesis; revisit after direct-user research.
- **Revisit trigger:** recurring user confusion, poor discoverability, or behavioral evidence that users bypass the mechanic.

### D2 — Keep conventional facts as secondary, recoverable decision support

- **Decision:** lifestyle intent leads, while price/location/type/bedrooms remain available in Discover/detail.
- **Owner:** project/product-design owner.
- **Evidence:** product direction and expected real-estate decision needs; no direct-user outcome proof yet.
- **Alternative:** remove/reduce conventional filtering further to maximize editorial distinctiveness.
- **Trade-off:** preserves category familiarity and practical evaluation at the cost of additional interface complexity.
- **UNKNOWN:** which facts users expect first and when in the journey.
- **Revisit trigger:** direct research showing users cannot find expected facts or that conventional controls dominate the intended differentiated flow.

### D3 — Use transparent synthetic prototype content instead of invented brokerage authority

- **Decision:** avoid unsupported company history, testimonials, transaction statistics, office/contact claims and objective property-quality claims.
- **Owner:** project/product-design owner.
- **Evidence:** repository audit identified inherited synthetic/unverified claims; project truth requires a portfolio-prototype framing.
- **Alternative:** preserve luxury-brokerage social proof and fictional business authority for realism.
- **Trade-off:** lower apparent commercial realism vs materially stronger truthfulness, trust and portfolio integrity.
- **UNKNOWN:** none required to keep the anti-fabrication boundary.
- **Revisit trigger:** only if the product becomes a real service with verified operational/business evidence.

### D4 — Curate active inventory to protect product meaning

- **Decision:** route active surfaces through the curated KHOẢNG inventory and exclude inherited fantasy fixture media.
- **Owner:** design + implementation owner.
- **Evidence:** human screenshot review found inherited fantasy imagery leaking into the redesigned experience; remediation and production QA are recorded.
- **Alternative:** reuse all inherited fixture assets to maximize content volume.
- **Trade-off:** smaller/repeating synthetic inventory vs stronger visual/content coherence and lower legacy-brand leakage risk.
- **Known limitation:** editorial imagery repetition remains a documented non-blocking craft opportunity.
- **Revisit trigger:** expansion of the curated media/inventory set.

### D5 — Keep consultation non-sending in the portfolio prototype

- **Decision:** demonstrate a preference-aware enquiry flow without representing it as a real brokerage submission/service.
- **Owner:** project/product owner.
- **Evidence:** real brokerage operations, response SLA and verified business contact/service infrastructure are UNKNOWN.
- **Alternative:** wire a real form endpoint and treat submissions as leads.
- **Trade-off:** cannot measure genuine lead conversion, but avoids deceptive service expectations and premature personal-data collection.
- **Condition:** any future real submission flow requires explicit service ownership, privacy/consent, retention and operational-response decisions.
- **Revisit trigger:** transition from portfolio prototype to real operated service.

### D6 — Separate technical release success from product outcome success

- **Decision:** production smoke, accessibility automation and interaction QA may support implementation-quality claims only; they do not become usability/conversion evidence.
- **Owner:** project/product/research owner.
- **Evidence:** current release has strong technical QA but no DIRECT_USER or LIVE_BEHAVIOR outcome dataset.
- **Alternative:** treat green QA as proof that the product is validated.
- **Trade-off:** more conservative portfolio claims vs much stronger evidence integrity.
- **Condition:** outcome language can change only when the appropriate evidence class exists.
- **Revisit trigger:** completed traceable user research or verified live analytics.

## Post-launch decision queue

These are decisions to make only when new evidence exists:

1. Which Living Index labels should be renamed, grouped, removed or added?
2. Should the selection limit remain, change or become adaptive?
3. Should match explanations become more visual, textual or evidence-based?
4. Does Shortlist need explicit comparison support?
5. Which analytics events are worth collecting, under what consent/privacy model?
6. Is a real consultation service ever in scope, or should the CTA remain purely prototype-level?

## Human veto / escalation conditions

Require explicit human review before:

- publishing a claim based on newly collected user/analytics evidence;
- collecting personal data or adding production telemetry with privacy implications;
- changing the core Living Index model based on ambiguous evidence;
- shipping a material redesign of a critical journey;
- turning the consultation prototype into a real submission/service;
- representing KHOẢNG as a real brokerage/business operation.

## Next playback

Trigger the next governance playback when either a direct-user validation round or verified analytics instrumentation becomes available. Bring:

- evidence with provenance;
- contradictions/UNKNOWNs;
- affected decision record(s);
- proposed response and trade-offs;
- owner and release/measurement conditions.

Until then, the released design remains production-verified within documented QA coverage, while user/product outcome claims remain explicitly unvalidated.
