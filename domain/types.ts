export type MissionType = "Observe" | "Practice" | "Explore" | "Celebrate";

export interface Person {
  id: string;
  name: string;
}

export interface Dog {
  id: string;
  name: string;
}

export interface Family {
  id: string;
  people: Person[];
  dog: Dog;
}

export interface MissionTemplate {
  id: string;
  type: MissionType;
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
