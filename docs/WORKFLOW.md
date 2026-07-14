# Development Workflow

This document describes how work moves through DailyPaws, from idea to
deployment. It exists so a small team — one human and two AI
collaborators — can move quickly without losing traceability.

**See also:** `docs/CLAUDE.md` for the AI Software Engineer's own
operating checklist — how a task is approached day to day. This document
defines the team-wide mechanics (branches, labels, review policy);
`CLAUDE.md` defines how the engineer applies them.

---

# Team

- **Founder / Product Owner** — owns product decisions, approves scope,
  merges when a Founder judgement call is needed.
- **AI Technical Advisor** — reviews technical direction and architecture.
- **AI Software Engineer** — implements, opens PRs, keeps docs in sync.

---

# The Board

A single GitHub Project called **DailyPaws** tracks all work, with these
columns:

- 💡 Inbox — raw ideas, not yet triaged
- 📋 Backlog — triaged, not yet ready to start
- 🟢 Ready — scoped and ready to pick up
- 🔵 In Progress — actively being worked
- 👀 Review — PR open, awaiting review
- ✅ Done

**Setup note:** GitHub's Projects (v2) board can only be created and
configured through the GitHub UI or a token with `project` scope — the
tools available to the AI Software Engineer in this session can't create
it. See the bottom of this document for the one-time manual setup steps.

---

# Labels

Defined as code in [`.github/labels.yml`](../.github/labels.yml) and kept
in sync automatically by `.github/workflows/sync-labels.yml` whenever that
file changes on `main`. To change labels: edit the YAML, open a PR, merge.

**Type** — what kind of change
- `feature`, `bug`, `documentation`, `technical-debt`

**Area** — what part of the product
- `onboarding`, `conversation`, `mission`, `insight`, `journey`, `ai`,
  `ui`, `backend`

**Priority**
- `p0` (blocking), `p1` (next up), `p2` (planned, not urgent)

Every issue should carry one Type label. Area and Priority are added
during triage.

---

# Milestones

- **Sprint 1 – MVP**
- **Sprint 2 – AI**
- **Sprint 3 – Personalisation**
- **Future** — deliberately deferred work

Created once via `.github/workflows/bootstrap-milestones.yml`
(`workflow_dispatch`, safe to re-run — it skips milestones that already
exist).

---

# Issue Templates

Three templates live in `.github/ISSUE_TEMPLATE/`: **Feature**, **Bug**,
**Technical Debt**. Blank issues are disabled so every issue starts from
one of these.

Every **Feature** issue must contain:

- Goal
- Context
- Scope
- Out of Scope
- Acceptance Criteria
- Required Documentation
- Dependencies (other issues this depends on or relates to, if any)
- Definition of Done

---

# Lifecycle

Every implementation starts with an issue. No code is written without one.

```
Issue → Branch → Pull Request → Review → Merge → Close Issue
```

1. **Issue** — created from a template, labelled (type + area + priority),
   assigned a milestone, placed on the board.
2. **Branch** — named `<type>/<short-slug>`, e.g. `feature/onboarding-flow`,
   `bug/reflection-redirect-guard`, `technical-debt/label-sync`. Branch from
   `main`.
3. **Pull Request** — opened against `main` using the PR template. The PR
   description must include `Closes #<issue-number>` so merging
   automatically closes the issue and moves the board item to Done.
4. **Review** — the Founder and/or AI Technical Advisor review the diff.
   See the recommendation below on when a review is required.
5. **Merge** — squash merge (matches this repo's existing convention).
6. **Close Issue** — automatic via the `Closes #` link, or manual if the
   PR doesn't close it 1:1.

---

# Definition of Done (general)

Unless a Feature issue's own Definition of Done says otherwise, "done"
means:

- Code merged to `main`.
- Typecheck, lint and build pass.
- Deployed (Vercel auto-deploys `main`).
- Relevant docs updated (`ProductModel`, `ProductDecisions`, `MVP_PLAN`,
  `roadmap.md`) if the change affects them.
- Issue closed.

---

# Recommendations

A few simplifications worth considering as the process beds in:

- **Review, scaled to risk.** With a two-person (+2 AI) team, requiring a
  full review on every PR will slow things down without adding much
  safety. Recommendation: PRs that only implement an already-approved
  Feature issue within its stated scope can be self-merged by the AI
  Software Engineer once checks pass. PRs that touch `docs/ProductBible.md`,
  `docs/ProductDecisions.md`, `docs/ProductModel.md`, or otherwise change
  product direction always need Founder review before merge — this mirrors
  the existing "Documentation before implementation" principle.
- **Inbox vs. Backlog.** These two columns only earn their keep once ideas
  are arriving faster than they can be triaged (e.g. once there's outside
  input). While the team is just the three of us, it's fine to skip
  "Inbox" and file straight into "Backlog" — the column exists on the
  board if you want to start using it later, no reconfiguration needed.
- **Branch protection.** Not configured (no tool access to repository
  settings in this session). Consider enabling "Require a pull request
  before merging" on `main` in Settings → Branches once this workflow is
  the norm, so it's enforced rather than just documented.

---

# Manual Setup Required (one-time)

These steps need a human with GitHub UI access — they can't be done
through the AI Software Engineer's current tooling.

## 1. Create the Project board

1. Go to the repository → **Projects** tab → **New project** → **Board**
   template.
2. Name it **DailyPaws**.
3. Open the project's **Settings → Fields → Status** and replace the
   default options with exactly:
   `💡 Inbox`, `📋 Backlog`, `🟢 Ready`, `🔵 In Progress`, `👀 Review`,
   `✅ Done`.
4. In **Settings → Workflows**, enable:
   - "Item added to project" → set Status to `💡 Inbox`.
   - "Pull request merged" → set Status to `✅ Done`.
   - "Issue closed" → set Status to `✅ Done`.
5. In **Settings → Manage access**, add the repository so new issues can
   be auto-added (Settings → Workflows → "Auto-add to project" → filter
   `is:issue` for this repo).

## 2. Run the bootstrap workflows once

After merging this PR:

- `Sync Labels` runs automatically (triggered by the push to `main`).
- `Bootstrap Milestones` needs a manual trigger: **Actions** tab →
  **Bootstrap Milestones** → **Run workflow**.

Both are safe to re-run at any time.
