# DailyPaws Development Playbook

> This document describes how DailyPaws is developed.
>
> It defines the engineering workflow, quality standards and collaboration process for both humans and AI assistants.
>
> The goal is to create a predictable, disciplined and sustainable development process.

---

# Philosophy

DailyPaws is developed one small step at a time.

We optimise for:

- Product quality
- Simplicity
- Learning
- Maintainability

We do **not** optimise for speed at the expense of product quality.

Whenever possible:

- build the smallest thing that works
- validate with real users
- improve through iteration

---

# Core Principles

## Product before Technology

Technology exists to realise the product vision.

Never introduce technical complexity without clear product value.

---

## One Issue at a Time

Only one implementation issue is active at any given time.

Do not continue to another issue automatically.

Each issue ends with a Pull Request.

---

## Smallest Thing That Works

Implement only what the issue requires.

Do not anticipate future requirements.

Avoid premature abstraction.

---

## Review before Merge

Every Pull Request is reviewed before merge.

Reviews focus on:

- Product behaviour
- Simplicity
- Architecture
- Scope
- User experience

Not only code quality.

---

## Deterministic before AI

Whenever deterministic rules provide sufficient value, prefer them over AI.

AI should enhance the product—not replace simple logic.

---

## Learn before Optimising

The purpose of the MVP is learning.

Avoid optimisation until behaviour has been validated with real families.

---

# Development Workflow

The standard workflow is:

Issue

↓

Implementation

↓

Local validation

↓

Pull Request

↓

Review

↓

Merge

↓

Project Status update

↓

Learning Log update (only if something meaningful was learned)

↓

Next Issue

---

# Definition of Ready

An implementation issue is ready when:

- Product Decisions are approved.
- Design Decisions are approved.
- Release scope is approved.
- Dependencies are completed.
- Open Questions are resolved or explicitly deferred.

---

# Definition of Done

An issue is complete when:

- Scope is implemented.
- Acceptance Criteria are met.
- Tests pass.
- Documentation has been updated if required.
- A Pull Request has been opened.

The implementation stops after opening the Pull Request.

---

# Pull Request Review

Every Pull Request should answer:

## Product

- Does this solve the approved issue?
- Does it feel like DailyPaws?
- Does it respect the Product Model?

## Engineering

- Is the implementation simple?
- Is there unnecessary abstraction?
- Is there scope creep?

## Quality

- lint
- typecheck
- build
- relevant Playwright tests

---

# Documentation

Documentation should only be updated when:

- product behaviour changes
- architecture changes
- design changes
- implementation reveals missing documentation

Do not document implementation details unnecessarily.

---

# Learning

After each merged Pull Request ask:

"What did we learn?"

rather than

"What did we build?"

Only document learnings that improve the product or development process.

---

# Roles

## Founder

Owns:

- Vision
- Product decisions
- Priorities
- Final approval

---

## Product Advisor

Supports:

- Product strategy
- UX
- Architecture
- Process
- Reviews

---

## AI Engineering Assistant

Responsible for:

- Implementation
- Technical documentation
- Pull Requests
- Testing
- Reporting

The AI assistant never changes approved product behaviour without explicit approval.

---

# Related Documentation

- ProductBible.md
- ProductModel.md
- ProductDecisions.md
- DesignDecisions.md
- Architecture.md
- AI_CONTEXT.md
- WORKFLOW.md