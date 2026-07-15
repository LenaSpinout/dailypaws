# Mission Framework

This document defines what makes a DailyPaws Mission unique. It is the foundation for the Mission Library and should guide both product design and future content creation.

Mission Framework defines how Missions should feel, not how they are implemented.

See `MissionCatalog.md` for the actual Mission Library — the Missions
themselves, structured against this Framework.

Implements: PD-003 (Missions, not training sessions), PD-029 (Every
Mission serves a purpose), PD-030 (Missions are generated from Mission
Templates).

If this document ever conflicts with `ProductDecisions.md` or
`ProductModel.md`, those documents win — see the Documentation
Hierarchy in `AI_CONTEXT.md`.

## Purpose

A DailyPaws Mission is a small shared experience that helps a family understand their dog a little better.

The purpose is not to train the dog or complete a task.

The purpose is to strengthen the relationship through curiosity, observation and everyday moments.

---

## Core Principles

Every Mission should:

- Feel natural in everyday life.
- Be achievable in just a few minutes.
- Encourage curiosity rather than performance.
- Have no right or wrong outcome.
- Help the family notice something new.
- Leave the family understanding their dog a little better.

---

## Mission Types

DailyPaws currently uses four Mission Types:

- **Observe** – Notice something that happens naturally.
- **Practice** – Try something together without focusing on success or failure.
- **Explore** – Experience a new place, situation or perspective.
- **Celebrate** – Enjoy a shared moment together.

Mission Types are an internal concept but may be presented differently in the user experience.

---

## Mission Anatomy

`ProductModel.md`'s Mission concept is the source of truth for what a
Mission and its Mission Template contain. This document does not
redefine or duplicate that list — it describes how those fields come
together to create a great DailyPaws Mission:

- **Goal Type** determines which Mission a family is likely to
  receive, so every Mission should clearly serve one Goal Type.
- **Mission Type** (Observe, Practice, Explore, Celebrate — see
  above) shapes a Mission's emotional register and pacing.
- **Mission DNA** (see below) keeps a Mission focused on one simple,
  answerable question, regardless of what its other fields say.
- **User-facing copy** should follow the Writing Guidelines below.
- Every Mission should naturally lead into reflection once completed
  — see `DesignDecisions.md` DD-003. This is a quality every Mission
  should have, not a Mission-specific reflection question or new
  scope. The one approved exception is the shared first Mission every
  family receives immediately after onboarding — see DD-005.

---

## Mission DNA

Every Mission should answer one simple question.

Examples:

- Discover how your dog reacts when someone arrives.
- Discover who your dog chooses to stay close to.
- Discover what captures your dog's attention first.

If a Mission cannot be described in one sentence, it is probably trying to do too much.

---

## Mission Success

A Mission is successful if the family learns something.

The dog's behaviour does not have to change.

---

## What a Mission is NOT

A DailyPaws Mission is not:

- a test
- an obedience exercise
- a competition
- a checklist
- a score

It is an invitation to become more curious about your dog.

---

## Future Evolution

Today, Missions focus primarily on observation and shared experiences.

As DailyPaws learns more about each dog and family, Missions may gradually become more personalised and, when appropriate, evolve into gentle behaviour support and guided experiments.

## Writing Guidelines

Every DailyPaws Mission should feel like an invitation rather than an instruction.

Write as if DailyPaws is a calm, curious companion exploring the dog together with the family.

### Tone

- Warm
- Calm
- Curious
- Encouraging
- Humble

### Writing Principles

- Write to the family, not the dog.
- Support personalisation where appropriate — for example the dog's
  name and life stage (see issue #20).
- Prefer curiosity over instruction.
- Explain why the Mission matters.
- Avoid implying there is a correct outcome.
- Never judge success or failure.
- Keep the language simple and conversational.
- Make the Mission easy to imagine in everyday life.

### Prefer

- "Let's discover..."
- "Notice..."
- "I wonder..."
- "Watch what happens..."
- "See if you notice..."

### Avoid

- "Train your dog to..."
- "Teach your dog..."
- "Correct..."
- "Make sure your dog..."
- "Your dog should..."

### The DailyPaws Test

Before adding a new Mission, ask:

- Does this fit naturally into everyday life?
- Will the family learn something, even if the dog's behaviour doesn't change?
- Does it strengthen the relationship?
- Does it spark curiosity?
- Does it sound like DailyPaws?

If the answer to any of these questions is "no", the Mission should be revised.