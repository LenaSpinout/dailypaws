import type { Insight, MissionTemplate } from "@/domain/types";

// DesignDecisions.md DD-005: every family's very first Mission, shown once
// immediately after onboarding regardless of Goal Type. Deliberately kept
// separate from data/mission-templates.ts — it must never enter that
// rotation pool. `goalType` is required by MissionTemplate's shape but is
// never used to select this Mission or rendered anywhere.
export const firstMission: MissionTemplate = {
  id: "first-mission",
  type: "Observe",
  goalType: "Connection",
  title: "The Invitation",
  description:
    "Sit on the floor a few metres from your dog. Don't call them or ask them to do anything. Relax and wait for 30 seconds. What happens?",
  durationMinutes: 5,
  successCriteria:
    "Your dog has their own way of choosing connection. This isn't about obedience — it's about noticing what your dog chooses to do when nothing is asked of them.",
};

// Insight mapping for DD-005's one approved exception to the generic
// 3-option Reflection — the option ids here must match
// strings.ts's reflection.firstMissionOptions exactly.
const insightsByReflection: Record<string, Insight> = {
  "came-over-right-away": {
    id: "chose-to-close-the-distance",
    title: "Chose to come closer quickly",
    description:
      "The dog noticed the invitation quickly and chose to close the distance without being asked.",
  },
  "came-over-after-a-moment": {
    id: "chose-to-come-closer-in-their-own-time",
    title: "Took a moment, then chose to come closer",
    description:
      "The dog noticed the moment and, after a pause, chose to come closer in their own time.",
  },
  "watched-from-a-distance": {
    id: "chose-to-watch-from-a-distance",
    title: "Chose to watch from where they were",
    description:
      "The dog seemed content to stay where they were, keeping an eye on things from a distance.",
  },
  "stayed-focused-on-something-else": {
    id: "something-else-held-attention",
    title: "Something else held their attention",
    description:
      "Something else nearby seemed to hold the dog's attention more than the invitation did this time.",
  },
  "something-else": {
    id: "no-clear-pattern-yet",
    title: "Something worth exploring",
    description:
      "No clear pattern yet; another quiet moment like this may reveal something different.",
  },
};

const fallbackInsight = insightsByReflection["something-else"];

export function getFirstMissionInsight(reflectionOptionId: string | null): Insight {
  if (!reflectionOptionId) return fallbackInsight;
  return insightsByReflection[reflectionOptionId] ?? fallbackInsight;
}
