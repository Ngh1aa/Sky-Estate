# KHOẢNG — Outcome Measurement & Instrumentation

Status: **MEASUREMENT CONTRACT / INSTRUMENTATION NOT YET VERIFIED**

Canonical source: `uiux-ai-workspace/skills_UIUX/outcome-metrics-and-instrumentation/SKILL.md`.

## Measurement principle

`purpose → user outcome → owner/business outcome → critical experience → metric → data source → instrumentation → baseline → decision rule → learn`

KHOẢNG currently has production QA evidence but no verified product analytics baseline. Technical pass/fail data must not be presented as proof of user or business outcomes.

## Outcome / metric tree

### Purpose

Help design-aware home seekers narrow a broad property search into a meaningful shortlist based on how they want to live, while keeping conventional property facts available for evaluation.

### User outcomes

1. Understand the Living Discovery proposition.
2. Express desired living qualities.
3. Reach residences that feel meaningfully relevant.
4. Understand why a residence matches the expressed intent.
5. Preserve promising residences in a shortlist.
6. Understand the consultation next step without mistaking the prototype for a real brokerage service.

### Owner / product outcomes

1. Demonstrate a differentiated property-discovery concept.
2. Learn whether the Living Index deserves further investment or revision.
3. Identify where the journey loses comprehension or confidence.
4. Preserve prototype transparency and trust while evaluating engagement.

## Metric layers

### 1. User outcome metrics

| Metric | Decision informed | Current state |
|---|---|---|
| Proposition comprehension in direct research | Keep/rewrite first-screen proposition and interaction framing | **UNKNOWN — DIRECT_USER required** |
| Living Index task completion without instruction | Keep/rework selector discoverability and labels | **UNKNOWN — DIRECT_USER required** |
| Ability to explain residence-match rationale | Keep/rework match explanations and metadata model | **UNKNOWN — DIRECT_USER required** |
| Save → Shortlist task completion | Keep/rework continuity and comparison behavior | **UNKNOWN as user outcome**; technical smoke exists |
| Consultation-step comprehension | Keep/rework downstream CTA and expectation setting | **UNKNOWN — DIRECT_USER required** |

### 2. UX quality metrics

Potential measures after a real research/analytics contract exists:

- first-click / route correctness;
- task completion and breakdown point;
- errors and successful recovery;
- discoverability of conventional filters/facts;
- perceived relevance of results;
- perceived ease/confidence;
- shortlist revisit behavior;
- zero-result recovery behavior.

No numeric threshold is asserted yet because no real baseline exists.

### 3. Owner / product metrics

Potential live behavioral indicators:

- Home → Discover progression after Living Index interaction;
- Discover → Residence Detail progression;
- residence save rate among evaluators;
- Shortlist revisit rate;
- Consult start / prototype-confirmation rate.

These indicators are **not currently measured** and must not be described as conversion performance.

### 4. Technical guardrails

Existing release evidence can serve as a technical baseline for the documented QA coverage:

- production page availability / hydration;
- no broken images in tested routes;
- no console/page errors in tested routes;
- no horizontal overflow in tested viewports;
- accessibility automation gate within documented rule coverage;
- critical interaction smoke;
- correct asset base path and route/title structure.

These are guardrails, not user-outcome metrics.

## Instrumentation contract

The events below are **PROPOSED ONLY**. They must not be marked implemented until the application emits them and the selected analytics receiver verifies receipt.

| Metric / signal | Decision | Proposed event/source | Definition | Segment | Owner | Verification |
|---|---|---|---|---|---|---|
| Living Index engagement | Is the core mechanic discovered/used? | `living_index_started` | First intentional interaction with Living Index in a session | route, viewport/device class | Product/implementation owner | **NOT IMPLEMENTED** |
| Living quality selection | Are labels used and how? | `living_quality_changed` | Add/remove a quality; record quality key and resulting count | quality key, route, count | Product/implementation owner | **NOT IMPLEMENTED** |
| Living Index → Discover | Does expressed intent continue into discovery? | `living_index_discover_opened` | User enters Discover while an expressed intent exists | selected-quality count | Product/implementation owner | **NOT IMPLEMENTED** |
| Result evaluation | Which results invite deeper evaluation? | `residence_opened` | Residence detail opened from a discovery/editorial surface | source surface, residence id, selected-quality count | Product/implementation owner | **NOT IMPLEMENTED** |
| Save continuity | Is shortlist behavior used? | `residence_saved` / `residence_unsaved` | Save-state change for a residence | source surface, residence id | Product/implementation owner | **NOT IMPLEMENTED** |
| Shortlist use | Does saved intent continue? | `shortlist_viewed` | Shortlist route opened; optional saved-item count | saved-item count | Product/implementation owner | **NOT IMPLEMENTED** |
| Consult intent | Is the downstream action understood/used? | `consult_started` | First interaction with the non-sending consultation form | source surface | Product/implementation owner | **NOT IMPLEMENTED** |
| Prototype confirmation | Does the user reach the prototype confirmation state? | `consult_prototype_confirmed` | Non-sending prototype confirmation is displayed | source surface | Product/implementation owner | **NOT IMPLEMENTED** |
| Technical health | Does production remain operational? | existing CI / production-smoke workflows | Release-specific route/render/error checks | tested route + viewport | Engineering/release owner | **AVAILABLE within documented coverage** |

## Event-definition requirements

Before implementation, each analytics event must specify:

- exact trigger condition;
- required properties and allowed values;
- success/failure distinction where relevant;
- session/user/entity scope;
- duplicate-event prevention where relevant;
- consent/privacy implications;
- retention policy;
- analytics destination and verification method.

Do not collect free-form consultation field content for analytics by default. Avoid sending names, email addresses, phone numbers, messages or other personal data into telemetry unless a later real-service design explicitly requires it, has a lawful/privacy-reviewed basis, and the user is informed.

## Baseline state

### Technical baseline

**AVAILABLE within recorded QA coverage.** See `docs/uiux/Phase-State.md` for the released production-smoke and pre-release QA record.

### User / behavioral baseline

**UNKNOWN.**

There is no verified analytics dataset or DIRECT_USER outcome baseline in the repository.

### Target state

**NOT SET.**

Targets should be created only after:

1. the relevant metric definition is stable;
2. instrumentation or research evidence is verified;
3. an actual baseline exists or a defensible external benchmark is explicitly identified;
4. the target has a decision rationale.

No uplift percentage, ROI, conversion target or statistical significance is claimed here.

## Dashboard / report needs

If analytics is implemented, prefer a critical-journey view rather than a page-view dashboard:

`Home intent expression → Discover → Residence evaluation → Save/Shortlist → Consult prototype step`

Minimum reporting should separate:

- core journey events;
- route/source surface;
- device/viewport class where useful;
- new vs returning session only if privacy-safe and technically reliable;
- technical errors/guardrails;
- qualitative research findings in a separate evidence lane.

Do not merge attitudinal findings and behavioral event counts into a single “UX score.”

## Experiment candidates

No experiment is authorized yet. Candidates may be considered only when a real uncertainty and measurable decision exist, for example:

- alternative wording/grouping for ambiguous Living Index labels;
- alternative explanation patterns for why a residence matches;
- alternative shortlist comparison support.

Each experiment requires:

`problem → hypothesis → primary metric → guardrails → population → exposure → duration/stopping logic → analysis owner → rollout decision`

## Limitations / UNKNOWNs

- no verified analytics provider or telemetry implementation;
- no user/session baseline;
- no real brokerage/business conversion data;
- synthetic property inventory limits business-outcome interpretation;
- consultation flow is deliberately non-sending;
- no attitudinal research baseline;
- no real-user accessibility evidence.

## Measurement gate

KHOẢNG may claim that the released implementation passed the documented technical QA and production-smoke coverage. It may **not** claim adoption, conversion improvement, usability success, satisfaction, trust improvement or business impact until the corresponding evidence exists and is traceable.
