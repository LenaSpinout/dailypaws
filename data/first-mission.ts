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
  title: "Who notices first?",
  description:
    "On your next walk, continue as usual for about five minutes. Then stop somewhere safe. Stand completely still and stay quiet. Do not call your dog, pull the lead or give any signals. Notice: how long does it take before your dog turns and looks at you? What do they do next? Do they come closer, sit down, wait, or continue exploring? Stay still for up to one minute. Then continue your walk as usual. There is no right or wrong response. You are simply discovering how your dog keeps track of you while exploring the world.",
  durationMinutes: 5,
  successCriteria:
    "Dogs divide their attention differently during walks. Some regularly check where their person is. Others become deeply absorbed in scents, sounds and movement around them. This small experiment may reveal more about how your dog balances independence, curiosity and connection.",
};

// Insight mapping for DD-005's one approved exception to the generic
// 3-option Reflection — the option ids here must match
// strings.ts's reflection.firstMissionOptions exactly.
const insightsByReflection: Record<string, Insight> = {
  "looked-back-quickly": {
    id: "keeping-closer-track",
    title: "Keeping closer track than it seems",
    description:
      "The dog seemed to notice the change quickly and may be keeping closer track of the person than is obvious while moving.",
  },
  "looked-back-after-a-while": {
    id: "focused-on-surroundings",
    title: "Taking in the surroundings",
    description:
      "The dog seemed focused on the surroundings and needed more time to notice the pause.",
  },
  "came-closer-or-sat-down": {
    id: "chose-to-reconnect",
    title: "Chose to reconnect",
    description: "When the walk stopped, the dog chose to reconnect with the person.",
  },
  "stayed-focused-on-surroundings": {
    id: "surroundings-held-attention",
    title: "The world held their attention",
    description:
      "The surroundings held the dog's attention longer than the pause did in this situation.",
  },
  "something-else": {
    id: "no-clear-pattern-yet",
    title: "Something worth exploring",
    description: "No clear pattern yet; another context may reveal something different.",
  },
};

const fallbackInsight = insightsByReflection["something-else"];

export function getFirstMissionInsight(reflectionOptionId: string | null): Insight {
  if (!reflectionOptionId) return fallbackInsight;
  return insightsByReflection[reflectionOptionId] ?? fallbackInsight;
}
