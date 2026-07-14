import type { Insight } from "@/domain/types";

// One variant per Reflection answer, each matching a distinct PD-033
// category: "great" celebrates a strength, "okay" describes a pattern,
// "tricky" suggests an opportunity for growth — never a judgment.
const insightsByReflection: Record<string, Insight> = {
  great: {
    id: "confident-together",
    title: "You're building real confidence together",
    description:
      "I noticed today felt easy for both of you. Moments like this are exactly how trust grows.",
  },
  okay: {
    id: "steady-progress",
    title: "You're finding your rhythm",
    description:
      "I noticed today was steady, not perfect — and that's exactly how relationships grow. Every attempt counts.",
  },
  tricky: {
    id: "learning-together",
    title: "Tricky moments teach us the most",
    description:
      "I noticed today didn't go quite as planned. That's not a setback — it's useful information for what to try next.",
  },
};

const fallbackInsight = insightsByReflection.okay;

export function getInsightForReflection(reflectionOptionId: string | null): Insight {
  if (!reflectionOptionId) return fallbackInsight;
  return insightsByReflection[reflectionOptionId] ?? fallbackInsight;
}
