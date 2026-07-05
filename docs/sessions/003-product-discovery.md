# Session 003 – Product Discovery

**Date:** 2026-07-05

**Sprint:** Sprint 0 – Product Discovery

**Participants**

- Lena (Founder)
- ChatGPT (AI Product Partner)

---

# Goal

Continue defining the product before writing production code.

---

# Decisions

## The onboarding experience

The initial onboarding should take approximately five minutes.

Its only purpose is to learn enough about the family and the dog to generate the first meaningful mission.

The app should continue learning throughout the lifetime of the dog.

---

## Continuous learning

DailyPaws should never assume it fully understands a dog.

Instead it gradually builds confidence through:

- conversations
- completed missions
- observations
- follow-up questions
- user feedback

---

## Two different assessments

DailyPaws separates:

### Who is your dog?

Describes the dog itself.

Examples:

- personality
- motivations
- strengths
- challenges
- everyday life
- skills

---

### Different people. Different relationships.

Describes each relationship between the dog and one family member.

Relationships are never judged.

They are understood.

---

## AI personality summaries

After onboarding the app presents a warm summary.

Not an assessment.

Not a score.

A story.

Example:

"I think I've started getting to know Bellman..."

The summary should always sound humble.

Examples:

- I think...
- It seems...
- I may be wrong...
- Does this sound like Bellman?

---

## Product architecture

DailyPaws should eventually consist of three logical engines:

- Conversation Engine
- Mission Engine
- Insight Engine

---

## Product Model

Instead of designing the database first, we will design the domain model.

Every concept should answer:

- Why does it exist?
- What does DailyPaws know?
- How does it evolve?
- Which other concepts does it relate to?

---

# Biggest insight

DailyPaws should make users feel understood before trying to coach them.

Trust comes before guidance.

---

# Next session

Design the Product Model.

Start with the concept "Family".