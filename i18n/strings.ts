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
} as const;
