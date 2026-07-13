# Design Journal – Volume 1
## From Idea to First Working MVP

> *This journal complements the product documentation. It explains how DailyPaws evolved, why important decisions were made, and how our way of working developed during the first phase of the project.*

---

# Introduction

This journal documents the journey from the initial idea to the first working MVP of DailyPaws.

The official documentation describes **what** DailyPaws is.

This journal explains **why** it became that way.

Many of the most important decisions were not technical. They were decisions about philosophy, relationships, language and user experience.

The goal of this journal is to preserve the thinking behind the product.

---

# Chapter 1 – A Different Kind of Dog App

DailyPaws started with a simple observation.

Most dog apps focus on:

- obedience
- tricks
- activity tracking
- health tracking
- competitions
- streaks

We wanted to build something fundamentally different.

The goal was never to create a better training app.

The goal became:

> Help families build a better relationship with their dog.

That single sentence became the foundation of the entire product.

---

# Chapter 2 – Product Before Technology

One of the earliest decisions was deliberately avoiding technical discussions.

Instead of choosing frameworks and databases, we spent weeks defining:

- Vision
- Product Philosophy
- Product Model
- Product Decisions
- Design Principles
- Core Concepts

Only after those foundations were complete did implementation begin.

This ensured the product was driven by user experience rather than technology.

---

# Chapter 3 – Building the Product Model

The Product Model eventually stabilised around ten core concepts:

- Family
- Person
- Dog
- Relationship
- Context
- Goal
- Mission
- Conversation
- Insight
- Moment

One of the most important discoveries was that **Relationship** deserved to be its own concept.

The relationship between Bellman and Lena is different from the relationship between Bellman and Stefan.

Understanding relationships—not only dogs—became central to DailyPaws.

---

# Chapter 4 – Relationship Before Obedience

Perhaps the biggest philosophical decision was changing the product's purpose.

The goal is not to create better behaved dogs.

The goal is to create stronger relationships.

Training may become part of that journey, but it is never the destination.

This principle influenced almost every later decision.

---

# Chapter 5 – Missions Are Experiences

Initially Missions looked similar to small training exercises.

Gradually they evolved.

Instead of focusing on commands, they became opportunities to:

- observe
- play
- explore
- reflect
- celebrate

A Mission is not something you complete for the app.

It is an invitation to experience everyday life together.

---

# Chapter 6 – Designing Feelings Instead of Features

A major shift happened during Sprint 0.

The question changed from:

> What feature should we build?

to:

> How should the family feel when they leave this screen?

This became one of the strongest design principles in the project.

Every screen should create an emotion before collecting information.

---

# Chapter 7 – Finding the Voice of DailyPaws

The tone of voice required many iterations.

Early ideas sounded too much like a chatbot.

Examples included:

> Hi, I'm DailyPaws...

These were rejected.

Instead we realised something important.

DailyPaws should never pretend to be a person.

It should be:

- warm
- calm
- thoughtful
- honest

The guiding principle became:

> Conversational UI, not conversational AI.

DailyPaws is a guide.

Not a character.

---

# Chapter 8 – The Welcome Screen

The Welcome screen became the first moment where the product truly found its identity.

The approved copy became:

---

**Welcome**

*Every great relationship starts somewhere.*

Let's get to know you and your dog.

Together, we'll build a deeper understanding through everyday life.

**Get started**

---

The intention was not simply to welcome the user.

The intention was to communicate the purpose of DailyPaws before asking for any information.

The desired emotions were:

- Welcome
- Calm
- Curiosity
- Hope

---

# Chapter 9 – Documentation Became Part of the Product

Over time the documentation evolved into a structured knowledge base.

Rather than being an afterthought, documentation became one of the project's strengths.

The documentation now consists of:

- Product Bible
- Product Model
- Product Decisions
- Design Decisions
- MVP Plan
- AI Context
- Workflow
- Sessions

Each document has a clear responsibility.

This separation keeps the project maintainable as it grows.

---

# Chapter 10 – Defining the Team

Although DailyPaws is a small project, clear roles emerged.

## Founder

Responsible for:

- Vision
- Priorities
- Final Product Decisions

## Product & Architecture Partner (ChatGPT)

Responsible for:

- Product thinking
- UX principles
- Domain modelling
- Design discussions
- Product consistency

## Software Engineer (Claude)

Responsible for:

- GitHub
- Implementation
- Documentation updates
- Pull Requests
- Technical consistency

This clear separation of responsibilities proved highly effective.

---

# Chapter 11 – Building a Sustainable Workflow

One of the biggest improvements was changing how work was organised.

Instead of manually maintaining documentation, GitHub Issues and implementation separately, the workflow became:

1. Product Design Session
2. Product Decisions
3. Claude analyses documentation impact
4. Documentation updated
5. GitHub Issue created or updated
6. Implementation
7. Pull Request
8. Product Review
9. Merge

This allows the Founder to focus on the product while Claude maintains consistency across documentation and code.

---

# Chapter 12 – The First Working MVP

Sprint 1 produced the first complete vertical slice.

The application could now:

Home → Mission → Reflection → Insight

It was deployed to Vercel and became the first publicly running version of DailyPaws.

This milestone proved that the Product Model could be translated into working software.

---

# Lessons Learned

Several important lessons emerged during this first phase.

## Product before implementation

Good implementation cannot compensate for unclear product thinking.

Investing time in the Product Model paid off throughout development.

---

## Language shapes products

Small wording changes often had a bigger impact than technical decisions.

The words used by DailyPaws became part of the user experience.

---

## Design emotions first

Every screen should answer one question:

> How should the user feel when leaving this screen?

Features come afterwards.

---

## Documentation is an asset

Well-structured documentation made it easier for AI to contribute consistently.

Documentation became part of the development process rather than something written afterwards.

---

## Clear responsibilities increase speed

Separating responsibilities between Founder, Product Partner and Software Engineer reduced confusion and improved decision making.

---

# Looking Ahead

The first phase established the foundation of DailyPaws.

The next phase will focus on creating a truly delightful onboarding experience.

Rather than collecting information, onboarding will begin a relationship.

The ambition remains unchanged:

Help families understand their dog better.

One small step at a time.

---

*"Every great relationship starts somewhere."*