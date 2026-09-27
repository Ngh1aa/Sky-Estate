# KHOẢNG — User Validation

Status: **PLANNED VALIDATION / DIRECT USER EVIDENCE NOT YET AVAILABLE**

Canonical source: `uiux-ai-workspace/skills_UIUX/real-user-validation/SKILL.md`.

## Evidence labels

KHOẢNG uses the canonical evidence classes below and keeps them separate:

- **DIRECT_USER** — observed/interviewed actual or likely target users.
- **LIVE_BEHAVIOR** — real production behavior from analytics/service data.
- **PROXY** — support, sales, broker or domain-expert evidence.
- **DESK_EVIDENCE** — repository evidence, references, documents and market/reference research.
- **HYPOTHESIS** — unvalidated product/design belief.
- **UNKNOWN** — insufficient evidence.

## Current evidence ledger

| Claim / decision | Evidence class | Current state |
|---|---|---|
| KHOẢNG is a property-discovery prototype organized around living qualities | DESK_EVIDENCE | Supported by project direction, implementation and released routes. |
| The Living Index is understandable to target users | HYPOTHESIS | **Not validated.** |
| Selecting up to three living qualities is a useful interaction model | HYPOTHESIS | **Not validated.** |
| Match explanations help users understand why a residence fits | HYPOTHESIS | **Not validated.** |
| Shortlist supports meaningful narrowing/comparison | HYPOTHESIS | **Not validated.** |
| Consultation is the right next action for the intended audience | HYPOTHESIS | **Not validated.** |
| The released site is technically usable within documented automated/manual QA coverage | DESK_EVIDENCE | Supported by release QA; this is not DIRECT_USER evidence. |
| Real adoption, task success, satisfaction, trust or conversion | UNKNOWN | No verified analytics or direct-user evidence recorded. |

## Decisions / hypotheses to test

### H1 — Proposition comprehension

Decision at stake: keep the Living Discovery proposition and Living Index as the primary entry mechanic.

Research question: after a short first view, can a target user explain what makes KHOẢNG different from a conventional property listing experience?

### H2 — Living Index comprehension and control

Decision at stake: keep the current living-quality labels, selection model and selection limit.

Research questions:

- Which labels are immediately clear, ambiguous or overlapping?
- Can users select qualities without instruction?
- Does the limit feel helpful, arbitrary or restrictive?

### H3 — Match explanation credibility

Decision at stake: continue using living-quality match reasons as a primary bridge from discovery to evaluation.

Research question: can users explain why a shown residence matches their selected intent, and do they trust the explanation enough to continue evaluating?

### H4 — Conventional facts remain recoverable

Decision at stake: keep lifestyle discovery primary while conventional facts remain secondary decision support.

Research question: can users still find location, price, type, bedrooms and other expected facts when they need them?

### H5 — Shortlist / consultation next action

Decision at stake: retain save/shortlist and consultation as the principal downstream actions.

Research question: after evaluating a residence, do users understand what to do next and what each action means?

## Participant / recruitment criteria

Target participants should resemble the intended audience documented in the project:

- urban home seekers in Vietnam or people plausibly evaluating urban/lifestyle properties;
- buyers and/or renters who care about spatial/lifestyle fit in addition to conventional facts;
- a mix of people who are design/architecture-aware and people who are less fluent in design language, to expose jargon risk;
- mobile-first and desktop-capable users where device behavior affects the task;
- include accessibility needs, assistive-technology use or lower digital confidence when relevant and feasible rather than simulating those experiences.

No participant count is claimed here. The research owner should set the sample appropriate to decision risk and recruitment access.

## Method

Preferred first round: moderated task-based usability / concept-comprehension study on the released prototype.

Research contract:

`decision → research question → method → participant criteria → task/scenario → evidence captured → success/learning criteria → synthesis → design/product response`

### Suggested tasks

1. **First-view comprehension** — view Home briefly, then explain what the product appears to do and how it differs from ordinary property search.
2. **Express intent** — find homes for a scenario such as bright, quiet and suitable for working from home without being told exactly which controls to use.
3. **Evaluate relevance** — choose a result and explain why it appears to match the expressed intent.
4. **Recover conventional facts** — find expected property facts needed to make a decision.
5. **Continue the journey** — save a residence and locate it again; identify what the consultation action would do.

## Evidence to capture

For each session capture traceably:

- participant criteria relevant to the decision;
- task/scenario;
- observed path and first click;
- task completion / breakdown point;
- errors and recovery;
- comprehension in the participant's own words;
- confidence/trust comments;
- accessibility or device constraints observed;
- contradictions and exceptions;
- resulting product/design decision.

Do not turn facilitator interpretation into a quote.

## Findings

### DIRECT_USER

**NONE RECORDED.**

There are currently no documented participant sessions, user quotes, task-success rates or usability findings that can truthfully be reported.

### LIVE_BEHAVIOR

**NONE RECORDED.**

No verified product analytics dataset is documented.

### PROXY

**NONE RECORDED.**

No broker/support/sales/domain-expert evidence is documented.

### DESK_EVIDENCE

Repository evidence supports that the released prototype implements the intended critical journey, routes, Living Index interaction, shortlist continuity, responsive states and production QA coverage. This evidence verifies implementation/technical behavior only; it does not validate the user hypotheses above.

## Contradictory evidence

No direct-user contradiction exists yet because no DIRECT_USER evidence has been captured.

Potential tensions to test rather than resolve by assumption:

- lifestyle-first discovery may feel differentiated to some users but unfamiliar to others;
- editorial language may communicate atmosphere while also creating label ambiguity;
- limiting living qualities may reduce choice overload or may constrain nuanced intent;
- synthetic inventory is sufficient for interaction testing but cannot validate real brokerage/property-market outcomes.

## Decision impact

Until direct evidence exists:

- Living Index remains an implemented **product hypothesis**, not a validated user need;
- current labels and selection rules remain revisable;
- no usability-success percentage, preference claim or conversion claim should be published;
- automated QA may be cited only as technical/design verification within its actual coverage.

## Remaining UNKNOWNs

- proposition comprehension among target users;
- label comprehension and overlap;
- whether the selection limit fits real decision behavior;
- perceived match relevance/credibility;
- discoverability of conventional facts;
- shortlist usefulness for comparison;
- consultation expectation/trust;
- accessibility experience with real users;
- real adoption/conversion/retention behavior.

## Exit condition for “validated” language

A claim may move from **HYPOTHESIS / UNKNOWN** only when traceable evidence appropriate to that claim exists. A polished interface, green CI, stakeholder approval or AI review is not sufficient to relabel it as DIRECT_USER validation.
