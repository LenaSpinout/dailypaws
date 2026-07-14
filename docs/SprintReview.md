# Sprint Review Checklist

Used at the end of a sprint, before deciding what to build next.

A Sprint Review is not a code review. Lint, typecheck, build and
Definition of Done are already settled at the PR level, per issue —
they answer "did we build what we said we'd build." This checklist
asks a different question: **did we learn what we set out to learn?**

Go through it with the Sprint Goal for this sprint in hand (recorded in
the sprint proposal). Answer honestly, based on actually using the
product with a real dog and family — not by reading the diff.

---

## 1. The Hypothesis

- What was this sprint's Sprint Goal / hypothesis?
- State it in one sentence before answering anything below.

## 2. Did We Validate It?

- Did a real family complete the full loop this sprint was meant to
  validate, end to end?
- Where the sprint targeted personalisation (e.g. Mission by Goal
  Type), did it actually feel personal — would a different family,
  with a different Goal, notice a real difference?
- Where the sprint targeted continuity (e.g. returning the next day),
  did it actually feel continuous — not repetitive, not reset?
- Where the sprint touched Reflection/Insight, did skipping or
  answering honestly produce something that felt true to DD-003/PD-032
  — not fabricated, not judgmental?
- Would a real family want to come back tomorrow? Why, or why not, in
  their own words if possible?

## 3. What Did We Learn?

- What do we now know about family behaviour that we didn't know
  before this sprint?
- What surprised us — positively or negatively?
- Which of this sprint's issues turned out not to matter to the
  hypothesis, in hindsight?
- What new question belongs in `docs/Questions.md`?

## 4. Decision

- Hypothesis: **Validated / Partially validated / Invalidated.**
- What's the smallest next experiment, given what we learned?
- Does anything observed require a new Product Decision or Design
  Decision, rather than just more implementation?

---

## Explicitly Not Part of This Checklist

Already covered elsewhere — do not re-litigate here:

- Whether lint, typecheck or the build passed.
- Whether each issue's Acceptance Criteria were technically met.
- Whether the PR was reviewed and merged.

If any of the above failed, the sprint isn't ready for review yet —
this checklist assumes they already passed.
