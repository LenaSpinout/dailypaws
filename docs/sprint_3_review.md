# Sprint 3 Review

**Sprint:** Sprint 3 – A Week Together

**Status:** ✅ Implementation complete. Hypothesis validation still pending real family use.

---

# Purpose

Sprint 2 proved DailyPaws can remember and personalise. Sprint 3's job was
different: make the experience feel varied, alive and calm enough that a
family would actually want to keep opening it every day for a week, not
just once.

Per `docs/sprints/sprint3.md`, this sprint deliberately optimised for
variety, curiosity, delight, calmness and simplicity — not AI sophistication.
No new intelligence was introduced.

---

# Sprint Goal

Make DailyPaws engaging enough for one week of real family testing.

---

# What Shipped

| Issue | Title | PR | Outcome |
|---|---|---|---|
| #20 | Mission Library | #48 | Replaced hardcoded Mission templates with the approved `MissionCatalog.md` (Mission Library v0.1 — 16 Missions across 4 Goal Types). Selection stayed simple and deterministic. |
| #49 | Improve Mission Rotation Algorithm | (folded into #48) | Round-robin rotation across all Missions for a Goal Type, fixing an issue found before merge where selection only alternated between the first two of four. |
| #29 | Home Status | #50 | Added Mission Status and current Goal indicators to Home, muted and calm per Epic 3's "invitation, not a dashboard" framing. |
| #30 | Navigation + Profile | #52 | Minimal Home ↔ Profile navigation; Profile shows only already-known onboarding data, read-only. |
| #24 | Timeline | #51 | Recent activity (last 5 Missions, with Insight titles where one exists) surfaced on Home, making the journey visible over days. |
| #25 | Empty & Error States | #53 | A route-level error boundary (calm, PD-049-toned copy) and corruption-hardened persisted state, so no screen can crash into a blank page. |
| #26 | PWA Install | #54 | Manifest `icons` array (192/512/512-maskable) and iOS/Android icon routes, so "Add to Home Screen" actually has an icon to install. |

All six in-scope issues (plus the one rotation follow-up) are closed and
merged to `main`. Each PR passed lint, typecheck, build, and was verified
with Playwright against the running app before merge — not just checked
for type-correctness.

---

# Success Criteria — Mechanically True, Not Yet Family-Validated

`docs/sprints/sprint3.md` defined four success criteria. Here's where each
one actually stands:

- **Mission library feels varied and fresh.** The mechanism is in place —
  16 Missions, round-robin rotation with no immediate repeats — but whether
  it *feels* fresh over a full week is exactly the open question flagged
  during onboarding-goal feedback earlier this sprint (Bellman is very
  calm; some "easy" Missions may not create a visible reaction). That's a
  family-usage question, not something Playwright can answer.
- **Home feels alive and communicates progress.** Status badge, Goal badge
  and Timeline are shipped and calm rather than dashboard-like. Whether it
  *reads* as "alive" to a first-time user is untested outside this session.
- **The learning journey feels continuous over several days.** Timeline
  now shows the last 5 entries across sessions/days, including skipped
  Reflections handled per DD-003. Continuity across an actual week hasn't
  been observed yet — this sprint only ran across implementation sessions,
  not real calendar days.
- **The product is polished enough for external family testing.** This is
  the criterion most solidly met: error/empty states no longer crash,
  and the PWA is installable with a proper icon. This sprint closes real
  gaps that would have embarrassed a first external test, regardless of
  what the family-engagement verdict turns out to be.

**Bottom line:** Sprint 3 built and technically verified everything the
Sprint Goal asked for. It did not — and could not, from an implementation
session — validate the actual hypothesis ("does a family want to come back
tomorrow?"). That validation requires a real week of use, which is the
natural next step, not a retroactive claim to make here.

---

# What We Learned

- The Mission Catalog's rotation logic needed a real second look before
  merge — the initial "avoid immediate repeat" rule silently only ever
  cycled the first two Missions per Goal Type once the Catalog grew to
  four. This was caught by inspection before shipping, not by a family
  noticing repetition, which is itself a signal: mechanical variety bugs
  are easy to miss without deliberately walking a full cycle.
- Several product questions surfaced during Mission Library work remain
  genuinely open rather than resolved (see below) — the Catalog is
  explicitly v0.1, not a finished library.
- The single biggest gap this sprint closed wasn't a feature — it was the
  complete absence of any error boundary or defensive state handling
  (#25). A corrupted `localStorage` record or an unhandled render error
  would previously have produced a blank white screen with no recovery
  path, which is a bad first impression for exactly the kind of external
  family testing this sprint is preparing for.

---

# Open Questions Going Into Testing

Carried in `docs/Questions.md`, still unresolved:

- Whether Behaviour should remain a Goal Type or become a future
  capability (currently excluded from the Mission Catalog's matrix).
- Whether Mission copy should get dog-name/life-stage personalisation
  (the approved Catalog doesn't currently have it, though #20's original
  Acceptance Criteria called for it).
- Whether `successCriteria`/`Difficulty` should surface to the user in
  some non-scored way.
- What the Profile screen should actually contain beyond the current
  minimal read-only placeholder.
- Whether Insight selection should be confidence-gated or always-on.

None of these blocked Sprint 3's goal, but a full week of real testing is
likely to surface which of them actually matter in practice.

---

# Working Agreement — What Continued to Work

- One issue at a time, small PRs, no scope creep — held across all six
  issues without exception.
- Every PR was merged only on explicit instruction, never self-merged.
- Genuine product ambiguities went to `docs/Questions.md` instead of being
  quietly assumed away (five new/carried entries above).
- Lint, typecheck, build and real Playwright verification against a
  running dev server — not just type-correctness — gated every PR.

---

# Decision

**Hypothesis status: Not yet tested.** Sprint 3 delivered the product
surface the hypothesis needs to be tested against; it has not yet been
run past a real family for a real week.

**Smallest next experiment:** put the app in front of a real family
(starting with Lena and Bellman) for one full week of ordinary use, then
run this sprint's success criteria back through `docs/SprintReview.md`'s
checklist with actual answers instead of implementation-side inference.

**Before Sprint 4:** Sprint 4 (Learning Engine — #21 Insight Confirmation,
#22 Follow-up Conversations, #23 Store Conversation Answers, #33
Conversation Memory) deepens personalisation on top of the loop Sprint 3
just polished. Starting it before the engagement hypothesis is actually
validated risks building deeper intelligence on top of a loop nobody has
confirmed people want to repeat for a week. Recommend the family test
happens first.
