# MVP Plan

**Version:** 0.1.0

**Status:** Approved

---

# Purpose

The goal of the MVP is not to build the complete DailyPaws experience.

The goal is to validate that families enjoy receiving personalised daily missions and that DailyPaws can gradually learn about both the dog and the relationships.

Every feature included in the MVP must help answer this question.

---

# Success Criteria

The MVP is successful if a family can:

- complete onboarding in less than ten minutes,
- receive a personalised Mission,
- complete it,
- reflect on the experience,
- receive a meaningful Insight,
- want to come back tomorrow.

---

# Core User Journey

1. Install DailyPaws.

2. Meet DailyPaws.

3. Tell DailyPaws about the family and the dog.

4. Receive the first Mission.

5. Complete the Mission.

6. Reflect.

7. Receive the first Insight.

8. Receive tomorrow's Mission.

Everything else is optional.

---

# MVP Scope

The MVP includes:

## Onboarding

A conversation, not a form.

Collects only what's needed to personalise the first Mission:

- Family
- Dog
- First Goal

Every question must earn its place — it should influence the experience, a
future Conversation, or how the first Mission is generated. The onboarding
conversation flows directly into that first Mission; it shouldn't feel
like a separate step that ends before the real product begins.

---

## Conversation

DailyPaws asks simple questions to understand the family.

---

## Mission Engine

Generate one personalised Mission at a time.

Mission Types:

- Observe
- Practice
- Explore
- Celebrate

---

## Reflection

Collect simple feedback after every Mission.

---

## Insight Engine

Generate simple Insights based on completed Missions and Conversations.

---

## Timeline

Display today's Mission and recent activity.

Journey is intentionally simplified.

---

# Out of Scope

The MVP deliberately excludes:

- Multiple dogs
- Multiple families
- Social features
- Sharing
- Notifications
- Calendar
- Watch support
- Gamification
- Badges
- Streaks
- Premium subscriptions
- Veterinary records
- Food tracking
- Medical history
- Health journals
- AI voice
- Offline mode

These may be introduced later if they support the product vision.

---

# Screens

Version 0.1 includes only:

1. Welcome

2. Onboarding

3. Home

4. Mission

5. Reflection

6. Insight

7. Profile

No additional screens should be added unless absolutely necessary.

---

# AI Behaviour

The AI should:

- Be curious.
- Be encouraging.
- Never judge.
- Never pretend certainty.
- Build upon previous conversations.
- Protect the relationship.

---

# Technical Scope

The first implementation should prioritise:

- Simplicity
- Fast iteration
- Readability
- Reusable components

Avoid premature optimisation.

# Technical Decision

## Internationalisation

The MVP supports internationalisation from the beginning.

Version 0.1.0 includes English only.

All UI text must be loaded from localisation resources to allow additional languages in future releases.
---

# Acceptance Criteria

Sprint 1 is complete when:

A real family can use DailyPaws with a real dog and complete at least one meaningful Mission from beginning to end.

---

# Version Roadmap

v0.1.0

First usable MVP.

v0.2.0

Better Mission personalisation.

v0.3.0

Journey.

v0.4.0

Family collaboration.

v1.0.0

Public release.