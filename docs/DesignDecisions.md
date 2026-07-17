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

---

## DD-004 – Conversation Types are internal, not user-facing

**Status:** 🟢 Approved

Implements: `ProductModel.md`'s Conversation concept (Discover,
Reflect, Clarify, Celebrate, Coach types). Same treatment as Insight
Types — see `docs/releases/v0.1.md` Epic 6.

Conversation Types are an internal concept used by the Conversation
Engine to select and shape follow-up questions. They are never
exposed to the user — the family should never see language like
"Now you have a Clarify Conversation." They should only experience a
natural question.

Example:

"Yesterday Bellman seemed very curious about the new park."

"Did he seem more confident there than usual?"

This happens to be a Clarify Conversation internally, but that's our
internal language, not something the user ever sees.

---

## DD-005 – Shared First Mission

**Status:** 🟢 Approved

Implements: PD-029 (Every Mission serves a purpose), PD-030 (Missions
are generated from Mission Templates), PD-032 (Insights are
suggestions, not facts), PD-033 (Insights are constructive). Approved
by the Founder and Product Advisor.

Every new family receives the same first Mission immediately after
onboarding, regardless of the Goal they chose. Its purpose is to
introduce the DailyPaws experience itself — do one small activity,
observe without directing the dog, reflect on what happened, and
receive a humble, evidence-based Insight — before Goal-based
personalisation begins with the second Mission.

This is the one exception to `MissionFramework.md`'s "every Mission
naturally leads into reflection, not a Mission-specific reflection
question" guidance: this specific Mission has its own Reflection
options and Insight mapping, because its purpose is to teach the loop
itself rather than to serve a Goal Type. No other Mission gets this
treatment.

The shared first Mission is not part of `MissionCatalog.md`'s Mission
Library and must never enter the normal Mission rotation again once
completed.

The Mission content below replaces the originally approved "Who
notices first?" copy. The mechanism this Design Decision defines —
one shared Mission, its own Reflection options and Insight mapping,
never re-entering rotation — is unchanged; only the Mission itself
was replaced with something a new user can try immediately at home,
with no preparation or equipment.

### Copy

**Title**

The Invitation

**Mission DNA**

Discover whether and how your dog chooses to make contact when given
space and no command.

**Description**

Sit on the floor a few metres from your dog.

Don't call them or ask them to do anything.

Relax and wait for 30 seconds.

What happens?

**Why**

Your dog has their own way of choosing connection.

This isn't about obedience — it's about noticing what your dog
chooses to do when nothing is asked of them.

### Reflection Options

- Came over right away
- Came over after a moment
- Watched you from a distance
- Stayed focused on something else
- Something else

### Insight Directions

The exact copy may be refined, but must stay close to the observed
response. All wording follows PD-032/PD-033: observations, not facts;
no judgement; no implication that one response is better than
another; no claim that the dog "does not care."

**Came over right away**

The dog noticed the invitation quickly and chose to close the
distance without being asked.

**Came over after a moment**

The dog noticed the moment and, after a pause, chose to come closer
in their own time.

**Watched you from a distance**

The dog seemed content to stay where they were, keeping an eye on
things from a distance.

**Stayed focused on something else**

Something else nearby seemed to hold the dog's attention more than
the invitation did this time.

**Something else**

No clear pattern yet; another quiet moment like this may reveal
something different.
