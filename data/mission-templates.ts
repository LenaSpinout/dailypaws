import type { GoalType, MissionTemplate } from "@/domain/types";

export const missionTemplates: MissionTemplate[] = [
  {
    id: "observe-front-door",
    type: "Observe",
    goalType: "Everyday Life",
    title: "Watch the front door",
    description:
      "Next time someone rings the doorbell, take a moment to just watch how your dog reacts. No training, just noticing.",
    durationMinutes: 5,
    successCriteria: "You noticed one thing about how your dog responded.",
  },
  {
    id: "explore-new-corner",
    type: "Explore",
    goalType: "Adventure",
    title: "Explore a new corner together",
    description:
      "Take a short walk somewhere you haven't gone before — a new street, a different park entrance, anywhere slightly unfamiliar. Notice how your dog takes it in.",
    durationMinutes: 15,
    successCriteria: "You both experienced somewhere new together.",
  },
  {
    id: "practice-something-new",
    type: "Practice",
    goalType: "Activity",
    title: "Learn something new together",
    description:
      "Pick one small new thing to try together today — a cue, a trick, a game. It's about spending focused time together, not getting it right.",
    durationMinutes: 10,
    successCriteria: "You spent a few focused minutes learning together.",
  },
  {
    id: "notice-a-reaction",
    type: "Observe",
    goalType: "Behaviour",
    title: "Notice what catches their attention",
    description:
      "Next time your dog reacts to something — another dog, a sound, a passerby — just notice what happened right before. No correcting, just watching closely.",
    durationMinutes: 5,
    successCriteria: "You noticed what came right before a reaction.",
  },
  {
    id: "celebrate-a-moment",
    type: "Celebrate",
    goalType: "Connection",
    title: "Share a moment of pure fun",
    description:
      "Set aside a few minutes for something your dog simply loves — a favourite game, a belly rub, a silly moment. No agenda, just enjoying each other.",
    durationMinutes: 10,
    successCriteria: "You both enjoyed a moment together, just because.",
  },
];

export function getTodaysMission(
  goalType?: GoalType,
  lastMissionId?: string | null
): MissionTemplate {
  const matchesGoal = (template: MissionTemplate) => template.goalType === goalType;
  const isNotRepeat = (template: MissionTemplate) => template.id !== lastMissionId;

  return (
    missionTemplates.find((template) => matchesGoal(template) && isNotRepeat(template)) ??
    missionTemplates.find(isNotRepeat) ??
    missionTemplates.find(matchesGoal) ??
    missionTemplates[0]
  );
}
