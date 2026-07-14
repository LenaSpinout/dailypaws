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

## From reviewing MissionFramework.md

- **MissionFramework.md's "Mission Anatomy" doesn't match
  `ProductModel.md`'s already-approved Mission fields.** MissionFramework
  lists a Mission's fields as Goal Type, Mission Type, Mission DNA,
  User-facing copy, Reflection prompt — and says "Future versions may
  also include context, duration and energy level." But
  `ProductModel.md`'s Mission concept already lists Context and
  Duration as *current* fields ("For each Mission, DailyPaws knows:
  ... Context ... Duration"), not future ones. Three specific points
  need reconciling:
  - Is Context genuinely not yet part of Mission Anatomy (contradicting
    `ProductModel.md`), or did MissionFramework.md just omit it by
    oversight?
  - Same question for Duration — the shipped code already has
    `durationMinutes` on every Mission Template and displays it in the
    UI, so treating it as "future" seems out of date already.
  - Is "Mission DNA" a new field, or a renaming of `ProductModel.md`'s
    `Success Criteria`? The two aren't obviously the same thing, but
    nothing states they're different either.
  - `Difficulty` (an existing `ProductModel.md` Mission field, and
    already an open question above re: whether it should exist at all)
    isn't mentioned anywhere in MissionFramework.md, not even as
    deferred. Is Difficulty being deliberately dropped from the Mission
    concept, or just not yet addressed by this document?
- **Does "Reflection prompt" as a per-Mission field imply Reflection
  becomes Mission-specific?** MissionFramework.md lists "Reflection
  prompt" as part of every Mission's Anatomy, but the current
  implementation (and `DesignDecisions.md` DD-003) treats Reflection as
  one generic, Mission-independent set of three tap options ("went
  well" / "okay" / "tricky"), not a question that varies per Mission.
  If new Mission Templates (issue #20) are now expected to each carry
  their own reflection prompt, that's new scope not currently described
  in #20's issue body or DD-003. Worth clarifying before #20 is
  implemented, since it changes what a "Mission Template" needs to
  contain.
- **MissionFramework.md's Writing Guidelines don't mention
  personalisation by dog name or life stage.** Issue #20's own
  acceptance criteria require Mission copy to substitute the dog's name
  and use life-stage-appropriate wording, but MissionFramework.md — now
  positioned as the authoritative Mission design document — doesn't
  mention either anywhere in its Purpose, Mission Anatomy or Writing
  Guidelines sections. Not a contradiction, but a gap worth confirming
  is intentional (i.e. assumed self-evident) rather than accidental.

Future questions will be added during implementation.