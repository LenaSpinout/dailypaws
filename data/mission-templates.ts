import type { MissionTemplate } from "@/domain/types";

export const missionTemplates: MissionTemplate[] = [
  {
    id: "observe-front-door",
    type: "Observe",
    title: "Watch the front door",
    description:
      "Next time someone rings the doorbell, take a moment to just watch how your dog reacts. No training, just noticing.",
    durationMinutes: 5,
    successCriteria: "You noticed one thing about how your dog responded.",
  },
];

export function getTodaysMission(): MissionTemplate {
  return missionTemplates[0];
}
