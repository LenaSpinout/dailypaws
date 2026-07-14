import type { Insight } from "@/domain/types";

// One variant per Reflection answer, each matching a distinct PD-033
// category: "great" celebrates a strength, "okay" describes a pattern,
// "tricky" suggests an opportunity for growth — never a judgment.
// A single Reflection is not enough evidence to claim confidence, rhythm
// or a general pattern, so each description stays grounded in today's
// Mission specifically rather than implying a broader conclusion.
const insightsByReflection: Record<string, Insight> = {
  great: {
    id: "suited-you-both",
    title: "This seemed to suit you both",
    description:
      "Today's Mission felt positive. Something similar may be worth exploring again.",
  },
  okay: {
    id: "useful-everyday-moment",
    title: "A useful everyday moment",
    description:
      "It sounds like today felt fairly neutral. Another experience may help reveal more.",
  },
  tricky: {
    id: "something-worth-exploring",
    title: "Something worth exploring",
    description:
      "This seemed harder today. That may help DailyPaws suggest a gentler or different Mission next time.",
  },
};

const fallbackInsight = insightsByReflection.okay;

export function getInsightForReflection(reflectionOptionId: string | null): Insight {
  if (!reflectionOptionId) return fallbackInsight;
  return insightsByReflection[reflectionOptionId] ?? fallbackInsight;
}
