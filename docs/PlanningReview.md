# Planning Review – Post-Sprint 3

**Requested by:** Founder and Product Advisor
**Purpose:** Bring the planning documentation (Vision → Roadmap →
Release → Epic → Feature → Issue → PR) back into a coherent,
consistent state after Sprint 3. Documentation-only — no code, no
new GitHub issues, no reprioritisation.

**Status:** Round 1 (roadmap/status sync) and Round 2 (Founder
decisions below) both complete. No findings remain open from this
review.

---

## Documents Reviewed

`docs/roadmap.md`, `docs/releases/v0.1.md` (`v0.2.md`, `v0.3.md`,
`v1.0.md` are lightweight future placeholders and were checked but
not in need of change), `docs/AI_CONTEXT.md`, `docs/MVP_PLAN.md`,
`docs/WORKFLOW.md`, `docs/ProjectStatus.md`, `docs/sprints/sprint3.md`,
`docs/sprint_3_review.md`, `docs/IllustrationGuide.md`,
`docs/IllustrationCatalogue.md`, `design/approved/style-v1.md`,
`docs/IDEAS.md`.

---

## Resolved

1. **`docs/roadmap.md` was two sprints out of date.** Fixed in Round
   1: Sprint 1 marked ✅ Complete, Sprint 2 and Sprint 3 entries
   added, each pointing to the document that recorded their outcome.

2. **`docs/ProjectStatus.md` still declared Sprint 3 the "Current
   Phase"** with six already-closed issues listed as in-progress.
   Fixed in Round 1: Sprint 3 moved into Completed sprints, a "Since
   Sprint 3" section added for #57 and #62, and a "Next step" section
   added quoting `sprint_3_review.md`'s own Decision.

3. **Milestone naming drift** (`docs/WORKFLOW.md` planned "Sprint 2 –
   AI" / "Sprint 3 – Personalisation," never matching what actually
   ran or what GitHub Milestones were actually used for). Resolved by
   Founder decision: **GitHub Milestones represent Releases, not
   Sprints.** `docs/WORKFLOW.md`'s Milestones section now lists
   `v0.1 – First Meaningful Experience` (renamed from `Sprint 1 –
   MVP`) and `Future`, with sprint-level tracking explicitly pointed
   at `docs/ProjectStatus.md` and `docs/sprints/`.

   **Caveat:** the actual GitHub Milestone object still needs to be
   renamed from `Sprint 1 – MVP` to `v0.1 – First Meaningful
   Experience` — no tool available in this session can rename a
   GitHub Milestone directly (only create/read/list operations are
   exposed). This is a one-time manual step in the GitHub UI, or via
   a script with milestone-write access.

4. **"Explorer Release" was undefined in the Release hierarchy.**
   Resolved by Founder decision: it is not a separate release, but
   "the external family-testing phase of v0.1 – First Meaningful
   Experience." The definition now lives once, in
   `docs/releases/v0.1.md` (added directly under the title), with a
   short cross-reference — not a redefinition — added at the first
   "Explorer Release" mention in each of `design/approved/style-v1.md`,
   `docs/IllustrationCatalogue.md` and `docs/IDEAS.md`.

5. **Epic 1 – Foundation had no Features breakdown**, unlike every
   other Epic. Resolved by Founder decision: `docs/releases/v0.1.md`
   now lists Data Persistence (#16), Application Resilience and Error
   Handling (#25), PWA Installation (#26) and Cross-cutting Technical
   Foundation as Epic 1's Features — mapped to the issues that already
   implemented them, no new scope invented.

6. **Illustration System v1 wasn't reflected in any Release
   document.** Resolved by Founder decision: added **Epic 8 – Visual
   Identity** to `docs/releases/v0.1.md`, with Illustration System v1
   (#62) as its Feature, kept separate from Epic 1 and Epic 3 because
   it's a distinct product capability, not Foundation- or Home-only
   work.

---

## Files Updated

**Round 1:**
- `docs/roadmap.md`
- `docs/ProjectStatus.md`

**Round 2 (this update):**
- `docs/releases/v0.1.md` — Explorer Release definition added under
  the title; Epic 1's Features list added; Epic 8 – Visual Identity
  added.
- `docs/WORKFLOW.md` — Milestones section rewritten: Releases not
  Sprints, `v0.1 – First Meaningful Experience` replacing
  `Sprint 1 – MVP`, `Sprint 2 – AI` and `Sprint 3 – Personalisation`
  removed.
- `design/approved/style-v1.md`, `docs/IllustrationCatalogue.md`,
  `docs/IDEAS.md` — one-line "Explorer Release" cross-reference added
  at each file's first mention of the term.
- `docs/PlanningReview.md` — this document, updated to move resolved
  findings out of "open."

---

## Intentionally Left Unchanged

- **`docs/AI_CONTEXT.md`'s Documentation hierarchy** (the
  conflict-precedence list: ProductBible → ProductDecisions →
  ProductModel → MVP_PLAN → DesignDecisions → MissionFramework →
  MissionCatalog → AI_CONTEXT → CLAUDE.md) does not include
  `roadmap.md` or `docs/releases/`. This isn't a gap: that list
  governs conflicts about product *truth*, while roadmap/releases are
  operational status trackers.
- **`docs/sprints/sprint3.md`** — left as-is. It's the original sprint
  plan, a historical snapshot; `docs/sprint_3_review.md` is the
  correct place for the outcome, matching the same pattern as
  Sprint 0 (`docs/sprint_0_review.md`).
- **`docs/MVP_PLAN.md`'s "Sprint 1 is complete when..." wording** —
  still factually true; a retrospective Definition of Done statement,
  not a stale status claim.
- **`docs/releases/v0.2.md`, `v0.3.md`, `v1.0.md`** — lightweight
  "Expected focus" placeholders for future releases, consistent with
  their own stated level of detail.
- **`.github/workflows/bootstrap-milestones.yml`** — not touched.
  Renaming/reconfiguring a GitHub Actions workflow is a code change,
  out of scope for this documentation-only review. See the Milestone
  caveat above for the manual step still needed on the GitHub side.

---

## Result

A new contributor reading `docs/roadmap.md` → `docs/ProjectStatus.md`
→ `docs/releases/v0.1.md` now sees one consistent story: Sprints
0–3 are complete, the product is between sprints awaiting real family
testing, GitHub Milestones track Releases (not Sprints), "Explorer
Release" is defined once and consistently, and Epic 1 and the new
Epic 8 – Visual Identity both have proper Feature breakdowns like
every other Epic. The one remaining action item is entirely
mechanical: renaming the GitHub Milestone itself, which requires
GitHub UI access this session doesn't have.
