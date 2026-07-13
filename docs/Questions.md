# Questions

## From reviewing the Release v0.1 Epic/Feature breakdown

1. **Do Conversation Types (Discover, Reflect, Clarify, Celebrate,
   Coach) need the same treatment as Insight Types?** Insight Types
   are resolved: internal only, not exposed in the v0.1 UI (see
   `docs/releases/v0.1.md` Epic 6). The same principle likely
   applies to Conversation Types if Epic 7's Conversation Memory
   stores typed conversations, but that wasn't explicitly decided —
   recommend confirming the same "internal, not exposed" treatment
   applies here too.

## From implementing issue #12 (Onboarding – conversational first-run flow)

- **Which onboarding questions should be skippable?** PD-051/issue #12 say "Back and Skip available on nearly everything" without specifying per-question. Implemented interpretation: dog's name, who's talking, and the dream-card selection are required (they directly shape the first Mission and everything downstream); life stage and other family members are skippable. Worth explicit confirmation.
- **Should the first Mission's content vary by selected Goal Type?** Currently the Mission Template shown is still the single existing template regardless of which dream card was picked — actual Goal-based Mission selection is Mission Engine work (MVP_PLAN's "Mission Engine" section), not part of this onboarding-flow issue. Parking Lot candidate for a follow-up issue.

Sprint 0 completed.

Future questions will be added during implementation.