"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { InsightCard } from "@/components/InsightCard";
import { scriptedInsight } from "@/data/scripted-insights";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import { useOnboarding } from "@/state/onboarding-session";
import styles from "./page.module.css";

export default function InsightPage() {
  const router = useRouter();
  const { reflection, reset } = useMissionSession();
  const { family } = useOnboarding();
  const allowed = reflection !== null && family !== null;

  useEffect(() => {
    if (!allowed) {
      router.replace("/");
    }
  }, [allowed, router]);

  if (!allowed || !family) {
    return null;
  }

  function handleBackHome() {
    reset();
    router.push("/");
  }

  return (
    <main className={styles.main}>
      <InsightCard insight={scriptedInsight} dogName={family.dog.name} />
      <button type="button" className={styles.primaryButton} onClick={handleBackHome}>
        {strings.insight.backHome}
      </button>
    </main>
  );
}
