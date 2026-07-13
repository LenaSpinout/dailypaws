# Design Decisions

Design Decisions record approved, concrete design outcomes — screen
copy, layout intent and emotional goals — that implement the
principles defined in `ProductDecisions.md`.

Where Product Decisions (PD-XXX) state *why* and *what principle*
applies, Design Decisions (DD-XXX) record the *literal approved
content* for a specific screen or moment.

If a Design Decision ever conflicts with a Product Decision, the
Product Decision wins — see the Documentation Hierarchy in
`AI_CONTEXT.md`.

---

## DD-001 – Welcome screen

**Status:** 🟢 Approved

Implements: PD-050 (Lead with purpose), PD-048 (Guide, not character), PD-049 (Calm and concise communication)

### Copy

**Title**

Welcome

**Subtitle**

Every great relationship starts somewhere.

**Body**

Let's get to know you and your dog.

Together, we'll build a deeper understanding through everyday life.

**Primary button**

Get started

### Intent

The screen should make users feel:

- Welcome
- Calm
- Curious
- Hopeful

The screen should not feel like registration or account creation.

---

## DD-002 – Onboarding goal step (dream cards)

**Status:** 🟢 Approved

Implements: PD-051 (Onboarding flow, step 6), Goal Types in `ProductModel.md`.

Reviewed live and refined so no two cards overlap in theme (an
earlier internal draft had two cards both centred on "everyday").
Adding a fifth card ("better connection and communication")
introduced **Connection** as a new Goal Type, since it didn't fit
Everyday Life, Adventure, Activity or Behaviour.

### Copy

| Card | Goal Type |
|---|---|
| A dog I feel confident bringing anywhere | Adventure |
| Calmer walks and an easier everyday life at home | Everyday Life |
| A partner to train, take classes, and learn with | Activity |
| Fewer reactions to distractions, more self-control | Behaviour |
| A closer bond and better communication | Connection |

Plus an optional free-text field, unchanged: "Anything else you'd
love to share? (optional)"

---

## DD-003 – Reflection is a UX concept, not a Product Model concept

**Status:** 🟢 Approved

Reflection represents the user experience of collecting observations
after a Mission. It is a UX flow, not a first-class Product Model
concept, and does not get its own entry in `ProductModel.md`'s Core
Concepts list.

What Reflection actually produces — observations that feed the Dog,
Relationship and Insight concepts — is modelled through those
existing concepts. Reflection itself is the screen and interaction
that collects them, similar to how Onboarding is a UX flow that
produces Family/Dog/Goal data without being a Product Model concept
in its own right.

If Reflection is skipped, no new observations are created and no new
Insight is generated from that Mission; the next Mission is
generated using existing knowledge only.
