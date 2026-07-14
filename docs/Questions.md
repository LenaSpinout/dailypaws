# Questions

## From implementing issue #12 (Onboarding – conversational first-run flow)

- **Which onboarding questions should be skippable?** PD-051/issue #12 say "Back and Skip available on nearly everything" without specifying per-question. Implemented interpretation: dog's name, who's talking, and the dream-card selection are required (they directly shape the first Mission and everything downstream); life stage and other family members are skippable. Worth explicit confirmation.

Sprint 0 completed.

## From Sprint Planning for Release v0.1

- **What should the Profile screen actually contain?** `MVP_PLAN.md`'s
  Screens list names "7. Profile" but no document describes its content,
  purpose or scope — it isn't mentioned in `docs/releases/v0.1.md`'s
  Epic 3 (Home) Feature list either. Implementation is blocked on this
  beyond a minimal read-only placeholder (see the "Simple Navigation and
  minimal Profile screen" issue), which deliberately shows only data
  already collected elsewhere and adds nothing new. Needs a Product
  Design session to define real Profile scope.
- **Should Insight frequency/selection be confidence-gated, or always-on
  in v0.1?** PD-031 implies Insights should reflect DailyPaws' actual
  confidence in a pattern, but the current single scripted Insight (and
  the "Reflection-aware Insights" issue, #19) always shows something
  after every Mission regardless of how much has actually been observed.
  Unclear whether v0.1 should hold back an Insight when there isn't yet
  enough evidence, or whether "always show something encouraging" is the
  intended MVP behaviour and confidence-gating is a later refinement.
- **Should Mission Details surface `successCriteria` (or a `Difficulty`
  field) to the user?** `domain/types.ts`'s `MissionTemplate` already has
  a `successCriteria` field that the UI never renders, and
  `ProductModel.md`'s Mission concept lists `Difficulty` as a known field
  that doesn't exist anywhere in the codebase. PD-018's "no scores"
  philosophy suggests neither should be surfaced as a score/rating, but
  it's unclear whether `successCriteria` should still inform the Mission
  Details copy in some non-scored way, and whether `Difficulty` should be
  added at all. Left unresolved rather than assumed.

## From structuring MissionCatalog.md

- **Should Behaviour remain a Goal Type, or should it become a future
  capability built on top of observations and relationship
  understanding?** `ProductModel.md` currently lists Behaviour as one
  of 5 Goal Types, but `docs/MissionCatalog.md`'s Mission Matrix only
  covers 4 (Everyday Life, Adventure, Activity, Connection), leaving
  Behaviour out. Not resolved here — this is a product decision to be
  made separately, not assumed.

## From implementing issue #20 (Mission library)

- **The approved Mission Catalog doesn't include dog-name or
  life-stage personalisation.** Issue #20's original Acceptance
  Criteria required Mission copy to substitute the dog's name and use
  life-stage-appropriate wording, but none of the 16 Missions in
  `docs/MissionCatalog.md` contain a `{dogName}` placeholder or any
  life-stage variation — they're written generically ("your dog").
  Implemented the Mission Library exactly as documented, per this
  round's instructions, without adding personalisation the Catalog
  doesn't call for. Left unresolved whether the Catalog should be
  revised to add it, or whether the original AC should be updated to
  match the approved content.

Future questions will be added during implementation.
