import type { ReflectionOption } from "@/domain/types";

export const strings = {
  app: {
    name: "DailyPaws",
    description: "Small sessions. Strong relationships.",
  },
  home: {
    heading: "Hello!",
    subheading: "Here's today's mission for you and {dogName}.",
    viewMission: "View mission",
  },
  mission: {
    back: "Back",
    duration: "{minutes} min",
    start: "Start Mission",
    complete: "Complete Mission",
    inProgress: "You're doing it. Take your time.",
  },
  reflection: {
    heading: "How did it go?",
    subheading: "There's no wrong answer.",
    options: [
      { id: "great", label: "😊 It went really well" },
      { id: "okay", label: "🙂 It was okay" },
      { id: "tricky", label: "😕 It was tricky" },
    ] satisfies ReflectionOption[],
  },
  insight: {
    heading: "I noticed something",
    confirmPrompt: "Does this sound like {dogName}?",
    backHome: "Back to Home",
  },
  welcome: {
    title: "Welcome",
    subtitle: "Every great relationship starts somewhere.",
    bodyLine1: "Let's get to know you and your dog.",
    bodyLine2: "Together, we'll build a deeper understanding through everyday life.",
    primaryButton: "Get started",
  },
  onboarding: {
    progress: "Step {current} of {total}",
    back: "Back",
    skip: "Skip",
    welcomeBack: "Welcome back — let's pick up where we left off.",
    dogName: {
      question: "What's your dog's name?",
      context: "We'll use this to make everything feel personal to your dog.",
      placeholder: "e.g. Bellman",
      continueButton: "Continue",
    },
    lifeStage: {
      question: "How old is {dogName}?",
      context: "This helps us suggest missions that fit where {dogName} is right now.",
      skipLabel: "I'll share this later",
    },
    personName: {
      question: "Who are we talking to today?",
      context: "So we know who to talk to first.",
      placeholder: "Your name",
      continueButton: "Continue",
    },
    familyMembers: {
      question: "Who else shares life with {dogName}?",
      context: "We'll get to know everyone's relationship with {dogName} over time.",
      placeholder: "e.g. Stefan, Oscar",
      continueButton: "Continue",
      skipLabel: "Just me and {dogName} for now",
    },
    goal: {
      question: "What do you hope life with {dogName} feels like in six months?",
      context: "This becomes {dogName}'s first Goal — everything starts here.",
      notePlaceholder: "Anything else you'd love to share? (optional)",
      continueButton: "Create my first Mission",
    },
  },
} as const;
