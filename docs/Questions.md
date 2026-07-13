# Questions

## From reviewing the Release v0.1 Epic/Feature breakdown

1. **"Breed (optional)" in Epic 2's Dog Profile contradicts PD-051.**
   PD-051 explicitly lists breed among onboarding's "Deliberately
   incomplete" items: "breed, nicknames, relationships, health data
   and routines are learned later through Conversations, not asked
   upfront." Breed also isn't a field `ProductModel.md`'s Dog
   concept defines at all (its five areas are Personality,
   Motivations, Capabilities, Challenges, Preferences). Documented
   in `docs/releases/v0.1.md` as approved, per instruction not to
   invent a resolution — but the conflict with PD-051 needs a
   decision: amend PD-051, or drop Breed from onboarding's v0.1
   scope?

2. **"Relationship Goals" (Epic 2) vs. the single Family-level Goal
   actually implemented.** PD-047, DD-002 and the shipped onboarding
   flow (issue #12) produce one Goal for the Family via the
   dream-card step. `ProductModel.md`'s Goal concept does allow
   Goals to belong to "The Family" or "An individual Person"
   (PD-028) — so per-Person/per-Relationship goals are modelled —
   but nothing currently asks for more than one. Does
   "Relationship Goals" (plural) signal a v0.1 scope change, or is
   it just a rename of the existing single-Goal feature? Lower
   confidence than item 1 — may simply be terminology.

3. **Epic 6 says "Do NOT introduce Insight Categories in v0.1," but
   `ProductModel.md`'s Insight concept already defines four Insight
   Types (Dog, Relationship, Progress, Discovery) as part of the
   approved Product Model.** Does this mean Insights should still be
   tagged with a Type internally (per the Product Model) but not
   exposed in the v0.1 UI, or that Type-tagging itself is deferred?
   The same question applies symmetrically to Conversation Types
   (Discover, Reflect, Clarify, Celebrate, Coach) if Epic 7's
   Conversation Memory stores typed conversations.

4. **"Reflection" has no corresponding concept in `ProductModel.md`.**
   It's a first-class Epic here (5 Features) and appears in
   `MVP_PLAN.md`, but `ProductModel.md`'s Core Concepts list
   (Family, Person, Role, Dog, Relationship, Context, Goal, Mission,
   Conversation, Insight, Moment, Journey) has no "Reflection" entry
   — it's presumably modelled as part of Mission today. Worth
   confirming whether Reflection should become a first-class
   Product Model concept given the scope defined here, or stays a
   Mission sub-concept.

5. **"Skip Reflection" (Epic 5) and Reflection-aware Insights
   (issue #19).** If a family skips Reflection, what feeds Insight
   Generation (Epic 6)? Not a contradiction — just an undefined
   fallback for a feature combination approved in the same session.

## From implementing issue #12 (Onboarding – conversational first-run flow)

- **Which onboarding questions should be skippable?** PD-051/issue #12 say "Back and Skip available on nearly everything" without specifying per-question. Implemented interpretation: dog's name, who's talking, and the dream-card selection are required (they directly shape the first Mission and everything downstream); life stage and other family members are skippable. Worth explicit confirmation.
- **Should the first Mission's content vary by selected Goal Type?** Currently the Mission Template shown is still the single existing template regardless of which dream card was picked — actual Goal-based Mission selection is Mission Engine work (MVP_PLAN's "Mission Engine" section), not part of this onboarding-flow issue. Parking Lot candidate for a follow-up issue.

Sprint 0 completed.

Future questions will be added during implementation.