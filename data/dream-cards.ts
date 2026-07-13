import type { GoalType } from "@/domain/types";

export interface DreamCard {
  id: string;
  goalType: GoalType;
  label: string;
}

export const dreamCards: DreamCard[] = [
  {
    id: "everyday-life",
    goalType: "Everyday Life",
    label: "Calm walks and everyday moments",
  },
  {
    id: "adventure",
    goalType: "Adventure",
    label: "An adventure companion",
  },
  {
    id: "activity",
    goalType: "Activity",
    label: "An active partner in play and sport",
  },
  {
    id: "behaviour",
    goalType: "Behaviour",
    label: "Better everyday behaviour",
  },
];
