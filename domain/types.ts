export type MissionType = "Observe" | "Practice" | "Explore" | "Celebrate";

export interface Person {
  id: string;
  name: string;
}

export type LifeStage = "Puppy" | "Young dog" | "Adult" | "Senior";

export type GoalType =
  | "Everyday Life"
  | "Adventure"
  | "Activity"
  | "Behaviour"
  | "Connection";

export interface Goal {
  id: string;
  type: GoalType;
  note?: string;
}

export interface Dog {
  id: string;
  name: string;
  lifeStage?: LifeStage;
}

export interface Family {
  id: string;
  people: Person[];
  dog: Dog;
  goal?: Goal;
}

export interface MissionTemplate {
  id: string;
  type: MissionType;
  goalType: GoalType;
  title: string;
  description: string;
  durationMinutes: number;
  successCriteria: string;
}

export type MissionStatus = "not-started" | "in-progress" | "completed";

export interface ReflectionOption {
  id: string;
  label: string;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
}
