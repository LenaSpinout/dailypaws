# Questions

## From reviewing the new docs/releases/ structure

Four planning documents now describe "what ships when," and they
don't fully agree. None of these are documentation bugs I can fix by
editing text — each needs a product decision.

1. **Which document is the authoritative release plan?** GitHub
   Milestones (Sprint 1 – MVP, Sprint 2 – AI, Sprint 3 –
   Personalisation, Future), `docs/MVP_PLAN.md`'s "Version Roadmap"
   section (v0.1.0–v1.0.0), `docs/roadmap.md`'s Sprint/Epic framing,
   and the new `docs/releases/*.md` files all currently coexist.
   Milestones and releases loosely correspond (Sprint 1 ≈ v0.1,
   Sprint 2 ≈ v0.2, Sprint 3 ≈ v0.3, based on content overlap) but
   this mapping is nowhere stated, and there's no release
   corresponding to the "Future" milestone or to v0.4.0 below.

2. **`v0.4.0` ("Family collaboration") has no release doc.**
   `MVP_PLAN.md`'s Version Roadmap lists v0.1.0 → v0.2.0 → v0.3.0 →
   v0.4.0 → v1.0.0, but `docs/releases/` only has v0.1, v0.2, v0.3,
   v1.0 — no v0.4. Was Family collaboration folded into v1.0
   (`v1.0.md` does mention "Multiple families"), or is a v0.4 file
   missing?

3. **v0.2's content differs between the two documents.**
   `MVP_PLAN.md` says v0.2.0 is "Better Mission personalisation."
   `docs/releases/v0.2.md` says v0.2's focus is "Conversations,
   Relationship Profile, Dog Profile, Moments." These aren't
   compatible descriptions of the same release.

4. **Version naming format differs.** `MVP_PLAN.md` uses three-part
   semver (`v0.1.0`); `docs/releases/` uses two-part names as both
   the heading and the filename (`v0.1.md`). Intentional
   simplification, or should they match?

5. **Issues #22 and #23 (Follow-up questions / Store conversation
   answers) were created for the Sprint 1 – MVP milestone at your
   request, but `docs/releases/v0.1.md` excludes "AI Conversations"
   and `docs/releases/v0.2.md` lists "Conversations" as its own
   focus area.** Both issues were scoped as scripted, not
   AI-driven ("Conversational UI, not conversational AI," per
   PD-049) — is v0.1's exclusion meant only for AI-driven
   conversation, or should #22/#23 move to a later milestone?

6. **`docs/releases/v0.1.md`'s Included Epics (Foundation,
   Onboarding, Home, Missions, Reflection, Insights) don't mention
   Profile,** even though `MVP_PLAN.md`'s approved Screens list
   includes Profile as one of v0.1's 7 screens. Omission, or
   implicitly covered by "Foundation"?

7. **"Epic" is used two different ways.** `docs/roadmap.md` has one
   epic ("Learning Experience," bundling onboarding + conversations
   + insights). `docs/releases/v0.1.md` lists six separate epics
   with no equivalent "Learning Experience" grouping, and puts
   conversations in v0.2 instead. Should Epics be redefined once,
   consistently — possibly reusing the Area labels already defined
   in `docs/WORKFLOW.md` (`onboarding`, `conversation`, `mission`,
   `insight`, `journey`, `ai`, `ui`, `backend`) instead of a
   separate, undefined taxonomy?

## From implementing issue #12 (Onboarding – conversational first-run flow)

- **Which onboarding questions should be skippable?** PD-051/issue #12 say "Back and Skip available on nearly everything" without specifying per-question. Implemented interpretation: dog's name, who's talking, and the dream-card selection are required (they directly shape the first Mission and everything downstream); life stage and other family members are skippable. Worth explicit confirmation.
- **Should the first Mission's content vary by selected Goal Type?** Currently the Mission Template shown is still the single existing template regardless of which dream card was picked — actual Goal-based Mission selection is Mission Engine work (MVP_PLAN's "Mission Engine" section), not part of this onboarding-flow issue. Parking Lot candidate for a follow-up issue.

Sprint 0 completed.

Future questions will be added during implementation.