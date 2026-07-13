import type { GoalType } from "@/domain/types";

export interface DreamCard {
  id: string;
  goalType: GoalType;
  label: string;
}

export const dreamCards: DreamCard[] = [
  {
    id: "adventure",
    goalType: "Adventure",
    label: "A dog I feel confident bringing anywhere",
  },
  {
    id: "everyday-life",
    goalType: "Everyday Life",
    label: "Calmer walks and an easier everyday life at home",
  },
  {
    id: "activity",
    goalType: "Activity",
    label: "A partner to train, take classes, and learn with",
  },
  {
    id: "behaviour",
    goalType: "Behaviour",
    label: "Fewer reactions to distractions, more self-control",
  },
  {
    id: "connection",
    goalType: "Connection",
    label: "A closer bond and better communication",
  },
];
