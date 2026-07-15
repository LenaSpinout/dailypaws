import type { GoalType, MissionTemplate } from "@/domain/types";
import { firstMission } from "./first-mission";

// Sourced verbatim from docs/MissionCatalog.md (Mission Library v0.1).
// Mission DNA becomes the short title; the Mission field becomes the
// description; Why becomes successCriteria (unrendered today, but
// required by MissionTemplate — see docs/Questions.md).
export const missionTemplates: MissionTemplate[] = [
  {
    id: "m-001",
    type: "Observe",
    goalType: "Everyday Life",
    title: "Discover how your dog reacts when someone arrives.",
    description:
      "Today's Experiment. When it feels natural, ask someone in the family to ring the doorbell or step outside and come back in. Watch your dog's very first reaction. There is no right or wrong. Simply notice what happens.",
    durationMinutes: 5,
    successCriteria:
      "Many families believe they already know how their dog reacts. This Mission often reveals small details they have never noticed before.",
  },
  {
    id: "m-002",
    type: "Practice",
    goalType: "Everyday Life",
    title: "Discover what helps your dog settle beside you.",
    description:
      "Sit quietly together for two minutes and let your dog choose where they want to be.",
    durationMinutes: 5,
    successCriteria: "Sometimes the strongest connection comes from doing nothing together.",
  },
  {
    id: "m-003",
    type: "Explore",
    goalType: "Everyday Life",
    title: "Discover your neighbourhood through your dog's nose.",
    description:
      "Let your dog choose the direction at the next three opportunities during today's walk.",
    durationMinutes: 5,
    successCriteria: "Your dog's choices reveal what interests them most.",
  },
  {
    id: "m-004",
    type: "Celebrate",
    goalType: "Everyday Life",
    title: "Discover your dog's happiest moment today.",
    description:
      "Notice when your dog seems happiest today and spend a few extra minutes sharing that moment.",
    durationMinutes: 5,
    successCriteria: "Joy is worth recognising and repeating.",
  },
  {
    id: "m-005",
    type: "Observe",
    goalType: "Adventure",
    title: "Discover how your dog explores somewhere new.",
    description:
      "Visit a place your dog has never been before and simply watch what they investigate first.",
    durationMinutes: 5,
    successCriteria: "New environments reveal curiosity and confidence.",
  },
  {
    id: "m-006",
    type: "Practice",
    goalType: "Adventure",
    title: "Discover how your dog handles a small challenge.",
    description:
      "Invite your dog to explore a new surface, bridge, rock or fallen tree at their own pace.",
    durationMinutes: 5,
    successCriteria: "Confidence grows through exploration, never through pressure.",
  },
  {
    id: "m-007",
    type: "Explore",
    goalType: "Adventure",
    title: "Experience a mini adventure together.",
    description: "Drive somewhere within 15 minutes that you've never walked before.",
    durationMinutes: 5,
    successCriteria: "Small adventures often become memorable moments.",
  },
  {
    id: "m-008",
    type: "Celebrate",
    goalType: "Adventure",
    title: "Let your dog plan today's adventure.",
    description: "For ten minutes, let your dog decide where to go whenever it's safe.",
    durationMinutes: 5,
    successCriteria: "Seeing the world through your dog's choices is an adventure in itself.",
  },
  {
    id: "m-009",
    type: "Observe",
    goalType: "Activity",
    title: "Discover your dog's favourite game.",
    description: "Offer two different games today and notice which one your dog chooses.",
    durationMinutes: 5,
    successCriteria: "Play reveals personality.",
  },
  {
    id: "m-010",
    type: "Practice",
    goalType: "Activity",
    title: "Discover your dog's problem-solving style.",
    description: "Hide a few treats or a toy and let your dog figure out how to find them.",
    durationMinutes: 5,
    successCriteria: "Every dog solves problems differently.",
  },
  {
    id: "m-011",
    type: "Explore",
    goalType: "Activity",
    title: "Try something you've never done together.",
    description: "Invent a completely new game together today.",
    durationMinutes: 5,
    successCriteria: "New experiences create new memories.",
  },
  {
    id: "m-012",
    type: "Celebrate",
    goalType: "Activity",
    title: "Let your dog choose today's activity.",
    description: "Offer two different activities and follow your dog's choice.",
    durationMinutes: 5,
    successCriteria: "Choice creates engagement.",
  },
  {
    id: "m-013",
    type: "Observe",
    goalType: "Connection",
    title: "Discover how your dog asks for your attention.",
    description: "Notice the first way your dog tries to connect with you today.",
    durationMinutes: 5,
    successCriteria: "Dogs communicate more than we often realise.",
  },
  {
    id: "m-014",
    type: "Practice",
    goalType: "Connection",
    title: "Share five uninterrupted minutes together.",
    description:
      "Put away every distraction and spend five minutes giving your dog your full attention.",
    durationMinutes: 5,
    successCriteria: "Relationships grow through presence.",
  },
  {
    id: "m-015",
    type: "Explore",
    goalType: "Connection",
    title: "Experience the world together somewhere calm.",
    description:
      "Visit a quiet public place and simply sit together watching the world go by.",
    durationMinutes: 5,
    successCriteria: "Sharing calm moments builds trust.",
  },
  {
    id: "m-016",
    type: "Celebrate",
    goalType: "Connection",
    title: "Celebrate your relationship.",
    description: "End the day by doing your dog's favourite thing together.",
    durationMinutes: 5,
    successCriteria: "The best relationships are built through small everyday moments.",
  },
];

export function getTodaysMission(
  goalType?: GoalType,
  lastMissionId?: string | null
): MissionTemplate {
  // No Mission has ever been completed or skipped yet: every family's very
  // first Mission is the same shared introduction (DesignDecisions.md
  // DD-005), regardless of Goal Type. It never enters this rotation pool,
  // and once it's archived into history, lastMissionId is never null again.
  if (lastMissionId == null) {
    return firstMission;
  }

  const matching = missionTemplates.filter((template) => template.goalType === goalType);
  // Fall back to rotating the full library if no template matches the
  // Goal Type yet (e.g. Behaviour, not currently in the Mission Catalog).
  const pool = matching.length > 0 ? matching : missionTemplates;

  // Rotate to the next Mission after the last one shown, wrapping around.
  // Deterministic and simple: no randomness, no weighting, no progression —
  // just cycles through every Mission available for the Goal Type in turn.
  const lastIndex = pool.findIndex((template) => template.id === lastMissionId);
  const nextIndex = lastIndex === -1 ? 0 : (lastIndex + 1) % pool.length;

  return pool[nextIndex];
}

export function getMissionById(id: string): MissionTemplate | undefined {
  if (id === firstMission.id) return firstMission;
  return missionTemplates.find((template) => template.id === id);
}
