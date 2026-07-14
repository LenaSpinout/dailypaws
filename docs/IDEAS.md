## Idea: Relationship Assessment

### Background

Many dog owners enjoy quizzes and personality tests, but most existing assessments focus on evaluating the dog:

- Is your dog reactive?
- Is your dog dominant?
- How well trained is your dog?

DailyPaws should take a completely different approach.

The purpose is not to judge the dog or the family.

Instead, the assessment should help the family discover and talk about their relationship with their dog.

The conversation itself is just as valuable as the result.

---

### Idea

Introduce a **Relationship Assessment** that the family completes together.

Rather than one person answering questions alone, the assessment becomes a shared activity where family members discuss each question before selecting an answer.

Questions should invite reflection rather than test knowledge.

Examples:

- What do you think makes your dog happiest?
- When does your dog seem most relaxed?
- What do you think your dog finds difficult?
- Which family member does your dog usually seek out first?
- When does your dog surprise you?

The goal is not to find "correct" answers, but to encourage curiosity and conversation.

---

### Product Principles

The assessment should:

- Feel playful rather than formal.
- Create conversations between family members.
- Highlight strengths before opportunities.
- Reinforce that every dog is different.
- Never make the family feel judged.
- Never produce a score or grade.

Instead of saying:

> 72% confident relationship

It might say:

> It seems your family has discovered many of Bellman's favourite routines together.
>
> There may still be new situations where Bellman can surprise you.

---

### Output

The result should feel like a reflection rather than a report.

Examples:

- Your relationship seems adventurous.
- Bellman appears to enjoy exploring together.
- Your family notices small changes in Bellman's behaviour.
- Bellman seems to appreciate calm moments after exciting activities.

The assessment could also identify gentle opportunities, for example:

> You all describe Bellman differently when meeting new people.
>
> That could be an interesting area to explore together through future Missions.

---

### Why this fits DailyPaws

This assessment reinforces one of the core ideas behind DailyPaws:

Relationships are built through shared understanding.

The assessment is not trying to measure how "good" the family is.

Instead, it helps them notice patterns they may never have discussed before.

It becomes another way for DailyPaws to help families become more curious about their dog—and about each other's perspectives.

---

### Possible future extensions

- Repeat the assessment every 6–12 months to reflect on how the relationship has evolved.
- Compare how different family members answered and celebrate both similarities and different perspectives.
- Use the results to inspire future Missions and Conversations.
- Show how the family's understanding changes over time rather than whether it improves.
- Create seasonal or themed assessments (e.g. "Life with a Puppy", "Outdoor Adventures", "Growing Together").

---

### Open questions

- Should the assessment be optional or part of onboarding?
- Should children answer separately before discussing together?
- How much should the assessment influence personalisation?
- Could completing the assessment become a memorable family tradition once or twice a year?
## Idea: Different Mission Types should feel different

### Background

Today, every activity is presented as a "Mission". While this gives the product a simple and consistent structure internally, it risks making very different experiences feel the same to the family.

For example:

> "Ask someone to ring the doorbell when your dog is resting."

This doesn't really feel like a mission. It feels more like a small experiment or observation. It also creates an unintended problem: users may feel they have to wait until someone happens to ring the doorbell, rather than realising they can create the situation themselves when it suits them.

### Idea

Keep **Mission** as the single internal product concept and data model.

However, allow different Mission Types to be presented differently in the UI.

Examples:

- **Today's Observation** – simply notice something that happens naturally.
- **Today's Experiment** – create a small situation together and observe the outcome.
- **Today's Adventure** – explore a new place, environment or experience.
- **Today's Celebration** – spend a few joyful minutes together.
- **Today's Practice** – gently try something together without focusing on success or failure.

Internally these are all still Missions, but the presentation helps set the right expectations.

### Benefits

- Creates more variety without increasing product complexity.
- Better matches the intent of each activity.
- Reinforces that DailyPaws is about curiosity and understanding rather than completing tasks.
- Makes activities feel less repetitive over time.
- Encourages families to see themselves as exploring their dog together rather than "doing exercises."

### Example

Instead of:

> **Mission**
>
> Ask someone to ring the doorbell while Bellman is resting.

Present:

> **Today's Experiment**
>
> When it feels natural, ask someone in the family to ring the doorbell or step outside and come back in.
>
> Watch Bellman's very first reaction.
>
> There is no right or wrong response.
>
> Simply notice what happens.

This removes the feeling that the family must wait for the situation to occur and instead frames it as a playful experiment that can be performed whenever convenient.

### Open questions

- Should Mission Types always have unique visual identities?
- Should users even see the underlying word "Mission", or only the presented activity type?
- Should DailyPaws vary the language over time to make the experience feel more alive while keeping the underlying product model simple?

## Idea: Richer Mission Presentation

### Background

Today, every activity is presented simply as a "Mission". While this keeps the product model simple, it makes very different experiences feel the same to the family.

For example:

> "Ask someone to ring the doorbell while your dog is resting."

This doesn't really feel like a mission. It feels more like a small experiment or observation.

Presenting every activity as a generic Mission also risks making the experience feel repetitive over time, even when the activities themselves are varied.

### Idea

Keep **Mission** as the single internal product concept.

However, allow different Mission Types to be presented differently in the user experience.

Examples:

- **Today's Observation** – notice something that happens naturally.
- **Today's Experiment** – create a small situation and observe the outcome.
- **Today's Adventure** – explore a new place together.
- **Today's Celebration** – enjoy a playful moment together.
- **Today's Practice** – gently try something together without focusing on success or failure.

Internally these are all still Missions, preserving a simple Product Model.

### Benefits

- Creates greater variety without increasing technical complexity.
- Better matches the purpose of each activity.
- Reinforces that DailyPaws is about curiosity rather than training.
- Makes the experience feel more alive over time.
- Encourages families to see themselves as discovering their dog rather than completing tasks.

### Example

Instead of:

> **Mission**
>
> Ask someone to ring the doorbell while Bellman is resting.

Present:

> **Today's Experiment**
>
> When it feels natural, ask someone in the family to ring the doorbell or step outside and come back in.
>
> Watch Bellman's very first reaction.
>
> There is no right or wrong response.
>
> Simply notice what happens.

### Open questions

- Should users ever see the word "Mission", or only the presented activity type?
- Should different Mission Types have their own visual identity?
- Should DailyPaws vary the presentation language over time while keeping the underlying Product Model unchanged?

---

## Idea: Context-aware Mission Selection

### Background

Some Missions naturally depend on the family's current situation.

For example, a Mission about observing other dogs only makes sense if the family is somewhere they are likely to encounter dogs. Likewise, a beach, forest or boat trip creates unique opportunities that should not be missed.

Rather than collecting this information during onboarding, DailyPaws could occasionally ask for lightweight context immediately before selecting a Mission.

### Idea

When relevant, DailyPaws asks one simple contextual question before presenting today's Mission.

Examples:

- Where are you today?
- What kind of place are you visiting?
- Are you staying home or heading somewhere?
- Are you mostly indoors or outdoors today?

The answer is only requested when it meaningfully improves today's Mission.

The family should never have to search for a suitable Mission themselves—DailyPaws remains responsible for choosing the most relevant experience.

### Product Principles

- Ask only when the answer changes what happens next.
- Questions should always have an immediate and obvious purpose.
- The default experience should remain effortless.
- Context questions should feel helpful rather than like data collection.
- DailyPaws should adapt to the family's plans—not expect the family to adapt to the app.

### Example

Before today's Mission:

> **A quick question...**
>
> Where are you today?

Options:

- At home
- In the forest
- At the park
- At the beach
- In the city
- Travelling
- Somewhere else

DailyPaws then selects a Mission that naturally fits the environment.

### Future possibilities

Context could eventually include:

- Environment (home, forest, beach, city, boat, etc.)
- Weather
- Time available
- Indoor vs outdoor
- Travelling or home
- Number of people participating

All context should remain optional and only requested when it improves the experience.

### Open questions

- How often should DailyPaws ask for context?
- Should context influence today's Mission only, or also contribute to the family's long-term profile?
- Could context eventually be inferred automatically (location, weather, calendar), while always remaining optional and privacy-friendly?