"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { InsightCard } from "@/components/InsightCard";
import { firstMission, getFirstMissionInsight } from "@/data/first-mission";
import { getInsightForReflection } from "@/data/scripted-insights";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import { useOnboarding } from "@/state/onboarding-session";
import styles from "./page.module.css";

export default function InsightPage() {
  const router = useRouter();
  const { missionId, reflection, reset, hydrated, insightId, recordInsightShown } =
    useMissionSession();
  const { family } = useOnboarding();
  const allowed = reflection !== null && family !== null;
  // DesignDecisions.md DD-005's one approved exception: the shared first
  // Mission has its own Insight mapping. Every other Mission uses the
  // generic scripted Insights.
  const insight =
    missionId === firstMission.id
      ? getFirstMissionInsight(reflection)
      : getInsightForReflection(reflection);

  useEffect(() => {
    if (!hydrated) return;
    if (!allowed) {
      router.replace("/");
      return;
    }
    if (insightId !== insight.id) {
      recordInsightShown(insight.id);
    }
  }, [hydrated, allowed, insightId, insight.id, recordInsightShown, router]);

  if (!hydrated || !allowed || !family) {
    return null;
  }

  function handleBackHome() {
    reset();
    router.push("/");
  }

  return (
    <main className={styles.main}>
      <InsightCard insight={insight} dogName={family.dog.name} />
      <button type="button" className={styles.primaryButton} onClick={handleBackHome}>
        {strings.insight.backHome}
      </button>
    </main>
  );
}
