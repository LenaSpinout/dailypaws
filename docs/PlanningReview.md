# Planning Review – Post-Sprint 3

**Requested by:** Founder and Product Advisor
**Purpose:** Bring the planning documentation (Vision → Roadmap →
Release → Epic → Feature → Issue → PR) back into a coherent,
consistent state after Sprint 3. Documentation-only — no code, no
new GitHub issues, no Product Decisions, no reprioritisation.

---

## Documents Reviewed

`docs/roadmap.md`, `docs/releases/v0.1.md` (`v0.2.md`, `v0.3.md`,
`v1.0.md` are lightweight future placeholders and were checked but
not in need of change), `docs/AI_CONTEXT.md`, `docs/MVP_PLAN.md`,
`docs/WORKFLOW.md`, `docs/ProjectStatus.md`, `docs/sprints/sprint3.md`,
`docs/sprint_3_review.md`, `docs/IllustrationGuide.md`,
`design/approved/style-v1.md`, `docs/IDEAS.md`.

---

## Inconsistencies Found

1. **`docs/roadmap.md` was two sprints out of date.** It listed
   "Sprint 1 – MVP 🟡 In Progress" with no mention of Sprint 2 or
   Sprint 3 at all, even though both had already completed and been
   reviewed (`docs/sprint_3_review.md` exists). This is the clearest
   post-Sprint-3 staleness in the planning hierarchy.

2. **`docs/ProjectStatus.md` still declared Sprint 3 as the
   "Current Phase"** with a "Current sprint scope" list of six
   issues (#20, #29, #30, #24, #25, #26) presented as in-progress,
   even though all six are closed and merged, and the Sprint 3
   review already exists. It also didn't mention the two things that
   have happened since Sprint 3 closed: issue #57 (DD-005, Shared
   First Mission, merged) and issue #62 (Illustration System v1,
   open and blocked).

3. **Milestone naming drift.** `docs/WORKFLOW.md`'s Milestones
   section lists the original plan — "Sprint 1 – MVP", "Sprint 2 –
   AI", "Sprint 3 – Personalisation" — but the sprints that actually
   ran used different names and different themes throughout every
   other document: "Sprint 2 – First personalised learning loop" and
   "Sprint 3 – A Week Together" (`docs/ProjectStatus.md`,
   `docs/sprints/sprint3.md`, `docs/sprint_3_review.md`). In
   addition, every issue this session was tracked under the single
   GitHub milestone "Sprint 1 – MVP" regardless of which sprint it
   narratively belonged to — the "Sprint 2 – AI" / "Sprint 3 –
   Personalisation" milestones don't appear to be in active use.
   **Not changed** — renaming a milestone plan is a Founder-level
   call, and I can't confirm from here whether those milestones
   exist and are relied on elsewhere. Flagging for a decision.

4. **"Explorer Release" is undefined in the Release hierarchy.**
   `docs/IDEAS.md` and `design/approved/style-v1.md` both refer to
   "the Explorer Release," but no document in `docs/releases/`
   (which uses "Release v0.1 – First Meaningful Experience") or
   `docs/roadmap.md` defines or cross-references that name. It's
   unclear whether "Explorer Release" is another name for v0.1 or a
   distinct release. **Not resolved** — reconciling or renaming a
   release is a Product Decision, out of this task's scope.

5. **Epic 1 – Foundation mixes unrelated concerns without a Features
   breakdown.** Every other Epic in `docs/releases/v0.1.md` (2
   through 7) lists discrete Features; Epic 1 instead reads
   "Cross-cutting technical and infrastructure work (persistence,
   empty/error states, PWA install). Not broken into Features in
   this session." Those three concerns map cleanly to already-closed
   issues (#16, #25, #26) and could be listed as Features like every
   other Epic. **Proposed, not applied** — see recommendation below.

6. **Illustration System v1 isn't reflected in any Release
   document.** `docs/IllustrationGuide.md` and
   `design/approved/style-v1.md` are approved, and issue #62 is
   already scoped against them, but no Epic in `docs/releases/v0.1.md`
   (or elsewhere) lists an Illustration-related Feature. **Not
   added** — adding a new Feature to a Release document is out of
   this task's scope; flagging the gap for a decision on whether/
   where it belongs.

---

## Recommended Corrections (not applied — Founder/Product Advisor to approve)

- **Epic 1 – Foundation**, if the team wants it to match the format
  of every other Epic, could read:

  > Features:
  > - Data Persistence
  > - Empty & Error States
  > - PWA Install

- **Milestone naming** (`docs/WORKFLOW.md`): either rename "Sprint 2
  – AI" / "Sprint 3 – Personalisation" to match what actually ran
  ("First Personalised Learning Loop" / "A Week Together"), or
  explicitly note that milestone naming and sprint naming are allowed
  to diverge and why.
- **"Explorer Release"**: confirm whether it refers to v0.1 and, if
  so, add one cross-reference in `docs/releases/v0.1.md` (e.g. "also
  referred to as the Explorer Release in design assets").
- **Illustration System**: once issue #62 is unblocked/implemented,
  decide which Epic it belongs to (Epic 3 – Home was used for the
  issue itself, as the most UX-facing fit) and add it as a Feature.

---

## Files Updated

- `docs/roadmap.md` — Sprint 1 marked ✅ Complete; Sprint 2 and
  Sprint 3 entries added (✅ Complete), each pointing to the document
  that already recorded their outcome. No new claims — this only
  propagates facts already established elsewhere into the roadmap,
  per `docs/WORKFLOW.md`'s own Definition of Done ("Relevant docs
  updated... `roadmap.md`... if the change affects them").
- `docs/ProjectStatus.md` — "Current Phase" changed from "Sprint 3 –
  A Week Together" to "Between Sprints – Awaiting Real Family
  Testing"; Sprint 3 moved into "Completed sprints"; added a "Since
  Sprint 3" section noting #57 (merged) and #62 (open, blocked); added
  a "Next step" section quoting `sprint_3_review.md`'s own Decision.
  The "Deferred to Sprint 4" list is unchanged — no reprioritisation,
  just accurate status.

---

## Intentionally Left Unchanged

- **`docs/AI_CONTEXT.md`'s Documentation hierarchy** (the
  conflict-precedence list: ProductBible → ProductDecisions →
  ProductModel → MVP_PLAN → DesignDecisions → MissionFramework →
  MissionCatalog → AI_CONTEXT → CLAUDE.md) does not include
  `roadmap.md` or `docs/releases/`. This looks like a gap at first
  glance, but it isn't one: that list governs conflicts about product
  *truth*, while roadmap/releases are operational status trackers.
  Adding them to a precedence list about product truth would blur,
  not clarify, the distinction.
- **`docs/sprints/sprint3.md`** — left as-is. It's the original sprint
  plan, a historical snapshot; `docs/sprint_3_review.md` is the
  correct place for the outcome, matching the same pattern as
  Sprint 0 (`docs/sprint_0_review.md`).
- **`docs/MVP_PLAN.md`'s "Sprint 1 is complete when..." wording** —
  still factually true (it already happened); this is a
  retrospective Definition of Done statement, not a stale status
  claim, so it needed no change.
- **`docs/releases/v0.2.md`, `v0.3.md`, `v1.0.md`** — lightweight
  "Expected focus" placeholders for future releases. Consistent with
  their own stated level of detail; no Epic/Feature structure exists
  yet to be inconsistent.
- **Epic numbering and terminology in `docs/releases/v0.1.md`** —
  Epics 1–7 are sequential, each Epic/Feature reference elsewhere in
  the docs (`Questions.md`, `sprint_3_review.md`) matches the names
  used here. No changes needed.

---

## Result

A new contributor reading `docs/roadmap.md` → `docs/ProjectStatus.md`
→ `docs/releases/v0.1.md` now sees one consistent story: Sprints
0–3 are complete, the product is between sprints awaiting real family
testing, and two flagged gaps (Epic 1's missing Features list, the
Illustration System's Release placement) are visible as open items
rather than silently papered over.
