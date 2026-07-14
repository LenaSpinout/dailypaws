# Architecture

> **Purpose**
>
> This document describes the overall technical architecture of DailyPaws.
>
> It explains how the system is organised, how the Product Model maps to software, and the architectural principles that guide implementation.
>
> This document intentionally focuses on long-lived architectural decisions rather than implementation details.

---

# Philosophy

DailyPaws is built around the Product Model.

Technology exists to support the product—not the other way around.

The architecture should prioritise:

- Simplicity over complexity
- Product clarity over technical cleverness
- Continuous learning over static configuration
- Evolution over premature optimisation

Whenever possible:

- build the smallest thing that works
- validate with real families
- improve through iteration

---

# Architectural Principles

## Domain First

The Product Model is the heart of the system.

All implementation should reflect the concepts defined in ProductModel.md.

Technology may change.

The Product Model should remain stable.

---

## Thin UI

The user interface presents information.

It should contain as little business logic as possible.

Business rules belong in the application/domain layer.

---

## AI is a Capability

AI is not the architecture.

Large Language Models are used where they provide value:

- Conversations
- Insight generation
- Mission generation (future)

The rest of the system should continue working without an LLM.
Rule-based before AI

Whenever possible, DailyPaws should use deterministic business rules before introducing AI.

AI should enhance the experience—not replace simple logic that is easier to understand, test and maintain.
---

## Learn Gradually

DailyPaws should never attempt to understand everything during onboarding.

Understanding grows over time through:

- Missions
- Conversations
- Reflections
- Observations
- Insights

---

## Confidence Before Conclusions

The system stores observations.

Knowledge is inferred gradually.

Insights are interpretations—not facts.

---

# High-Level Architecture

```
                DailyPaws

           ┌─────────────────┐
           │   Mobile / PWA  │
           └────────┬────────┘
                    │
                    ▼
          ┌────────────────────┐
          │ Application Layer  │
          └────────┬───────────┘
                    │
                    ▼
          ┌────────────────────┐
          │   Domain Layer      │
          └────────┬───────────┘
                    │
       ┌────────────┴────────────┐
       ▼                         ▼
 Persistence                 AI Services
 (Supabase)                     (LLM)
```

---

# Domain Layer

The Domain Layer mirrors the Product Model.

Core concepts include:

- Family
- Person
- Dog
- Relationship
- Goal
- Mission
- Conversation
- Insight
- Moment

No implementation should introduce competing concepts.

---

# Application Layer

The Application Layer coordinates behaviour.

Examples include:

- Mission selection
- Insight generation
- Conversation flow
- Onboarding flow
- Timeline generation

It orchestrates the Domain Model but should not redefine it.

---

# Presentation Layer

Current implementation:

- Next.js
- App Router
- React
- TypeScript
- CSS Modules
- Progressive Web App (PWA)

The presentation layer should remain mobile-first.

---

# Persistence

Current MVP:

- Supabase
- PostgreSQL
- Authentication
- Storage

Persistence stores observations and user data.

Insights and recommendations should be reproducible from stored evidence.

---

# AI Architecture

AI supports—not controls—the application.

Typical learning loop:

Mission

↓

Reflection

↓

Observation

↓

Dog / Relationship

↓

Insight

↓

Tomorrow's Mission

Future AI services should consume structured observations rather than raw UI state whenever possible.

---

# Data Ownership

Each layer has a clear responsibility.

## UI

Displays information.

Collects user input.

---

## Application

Coordinates workflows.

Applies business rules.

---

## Domain

Represents product concepts.

Contains product logic.

---

## Persistence

Stores long-term data.

Nothing else.

---

## AI

Produces suggestions.

Never owns product state.

---

# Technology Stack

Current MVP

Frontend

- Next.js
- React
- TypeScript
- CSS Modules

Backend

- Supabase
- PostgreSQL

Deployment

- Vercel

Version Control

- GitHub

---

# Future Evolution

The architecture should evolve incrementally.

Possible future additions include:

- Background jobs
- Push notifications
- Native mobile applications
- Additional AI services
- Multi-family support
- Multi-dog support

None of these should require fundamental changes to the Product Model.

---

# Architecture Principles for Contributors

When implementing new functionality:

1. Start from the Product Model.
2. Keep business logic out of the UI.
3. Keep solutions as small as possible.
4. Prefer composition over complexity.
5. Avoid premature abstraction.
6. Document architectural decisions before introducing major changes.
7. Follow the approved Release Plan.
8. Do not bypass Product Decisions or Design Decisions.

---

# Related Documentation

- ProductBible.md
- ProductModel.md
- ProductDecisions.md
- DesignDecisions.md
- MVP_PLAN.md
- releases/
- AI_CONTEXT.md