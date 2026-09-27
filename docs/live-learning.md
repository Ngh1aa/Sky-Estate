# KHOẢNG — Live Learning

Status: **POST-LAUNCH LEARNING PLAN / NO USER OR ANALYTICS OUTCOME CLAIMS YET**

Canonical source: `uiux-ai-workspace/skills_UIUX/post-launch-learning-loop/SKILL.md`.

## Learning principle

`release → observe → combine signals → diagnose → prioritize → experiment/repair → rollout → measure again`

KHOẢNG is already released and production-smoke verified. This document starts the learning layer after technical release. It does not reinterpret automated QA as user validation.

## Current evidence state

| Evidence class / signal | Current state | What exists now |
|---|---|---|
| DIRECT_USER | **NONE** | No observed/interviewed target-user sessions are recorded. |
| LIVE_BEHAVIOR | **NONE** | No product analytics or real service behavior dataset is recorded. |
| PROXY | **NONE** | No support, sales, broker or domain-expert evidence is recorded. |
| DESK_EVIDENCE | **AVAILABLE** | Product direction, design contract, implementation, release QA and production-smoke evidence. |
| Technical production evidence | **AVAILABLE** | GitHub Pages production smoke, route/render checks, accessibility automation, interaction smoke. |
| Support evidence | **NOT AVAILABLE** | KHOẢNG is a portfolio prototype and has no documented live support operation. |

## Critical experiences

### CE1 — Express living intent

Journey: `ENTRY → EXPRESS LIVING INTENT`

- User success: a visitor understands that KHOẢNG starts from desired living qualities and can select relevant qualities without instruction.
- Failure: the visitor treats the selector as decoration, cannot interpret labels, or falls back to conventional browsing because the concept is unclear.
- Behavioral metric: selector start, number of qualities selected, transition from Home to Discover after selection.
- Attitudinal / research signal: can the user explain the product difference and the meaning of selected qualities in their own words?
- Technical guardrail: selector interaction remains functional across supported viewports and reduced-motion conditions.
- Support signal: unavailable in the current prototype.
- Human owner: project/product owner.

### CE2 — Discover a residence that appears relevant

Journey: `EXPRESS LIVING INTENT → DISCOVER → EVALUATE`

- User success: a visitor reaches a residence and can explain why it matches the chosen living qualities.
- Failure: results feel arbitrary, match explanations are unclear, or conventional facts cannot be recovered when needed.
- Behavioral metric: Discover result engagement, result-to-detail transition, filter refinement after Living Index selection.
- Attitudinal / research signal: perceived relevance and confidence in the match explanation.
- Technical guardrail: search/refinement and residence navigation remain error-free.
- Support signal: unavailable in the current prototype.
- Human owner: project/product owner.

### CE3 — Preserve intent through shortlist

Journey: `EVALUATE → SHORTLIST`

- User success: a visitor saves a residence, reaches Shortlist, and recognizes the saved item and its context.
- Failure: save state is missed, continuity is lost, or Shortlist does not help comparison.
- Behavioral metric: save action, shortlist open, revisit/removal behavior if instrumentation is added.
- Attitudinal / research signal: whether shortlist feels useful for narrowing a decision rather than merely storing cards.
- Technical guardrail: existing save → Shortlist continuity smoke remains green.
- Support signal: unavailable in the current prototype.
- Human owner: project/product owner.

### CE4 — Understand the consultation next step

Journey: `EVALUATE / SHORTLIST → CONSULT → CONFIRM`

- User success: a visitor understands what information would be shared and what the next step represents.
- Failure: the prototype is mistaken for a real brokerage submission, or users cannot identify the next action.
- Behavioral metric: consult start and prototype confirmation only if explicitly instrumented.
- Attitudinal / research signal: clarity, trust and expectation of what happens next.
- Technical guardrail: form/confirmation prototype remains usable and clearly non-sending.
- Support signal: unavailable in the current prototype.
- Human owner: project/product owner.

## Signal mix and boundaries

Use multiple signal types only when they actually exist:

1. **Technical production QA** — already available; detects implementation regressions, not desirability or usability success.
2. **Direct user research** — planned; required to answer comprehension, relevance and confidence questions.
3. **Product analytics** — planned, not yet instrumented; required before making adoption/funnel claims.
4. **Support/domain evidence** — currently unavailable; do not simulate it.
5. **Accessibility feedback** — direct feedback is not yet available; automated accessibility QA remains technical evidence only.

## Baseline / health view

### Known technical baseline

The release record documents a production-smoke pass with no recorded failures across the tested production cases, plus green route/render/accessibility and critical-interaction gates before release.

### Unknown outcome baseline

The following remain **UNKNOWN** until real evidence is captured:

- percentage of visitors who understand the Living Discovery proposition;
- percentage who can use the Living Index without instruction;
- relevance of result matching to target users;
- task completion and recovery behavior for discovery/evaluation;
- shortlist usefulness;
- consultation intent or completion;
- satisfaction, confidence or trust;
- any conversion, retention or business impact.

## Research / support findings

### Direct-user findings

**NONE RECORDED.**

No quotes, participant counts, percentages or usability findings should be added here without traceable session evidence.

### Support findings

**NONE RECORDED.**

The current portfolio prototype has no documented real support operation.

## Experiments / staged rollout

No A/B test is authorized by this plan.

Possible future experiments must be created only after instrumentation and decision ownership exist. Each experiment must define:

`problem → hypothesis → primary metric → guardrails → population → exposure → stopping/decision rule → owner → rollout/rollback condition`

Do not experiment on obvious accessibility, correctness or trust defects; repair those directly.

## Learning cadence

Run a review when at least one new evidence class becomes available, or after a material production change.

At each review:

1. compare the new signal against the established baseline/expected range;
2. review direct-user evidence separately from analytics and technical QA;
3. identify regressions/opportunities;
4. route the issue to the earliest responsible owner — problem, UX/content, implementation, or rollout;
5. choose repair, research, experiment or no-change;
6. record the decision and the next observation trigger.

## Decision log

| Date | Signal | Decision | Owner | Next observation |
|---|---|---|---|---|
| 2026-09-28 | Production release evidence exists; direct-user and analytics outcome evidence do not. | Keep post-launch outcome claims explicitly unvalidated; prepare research and measurement contracts before making success claims. | Project/product owner | First real-user research round and/or verified analytics instrumentation. |

## Next review

Trigger the next review after either:

- a traceable real-user validation round is completed; or
- analytics events are implemented and verified as emitted/received; or
- a material production change affects a critical experience.

Until then, production correctness may be described as verified within the documented QA coverage, while user/product outcomes remain **UNKNOWN / PLANNED VALIDATION**.
