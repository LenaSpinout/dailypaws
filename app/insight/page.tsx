"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { InsightCard } from "@/components/InsightCard";
import { mockFamily } from "@/data/mock-family";
import { scriptedInsight } from "@/data/scripted-insights";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import styles from "./page.module.css";

export default function InsightPage() {
  const router = useRouter();
  const { reflection, reset } = useMissionSession();
  const allowed = reflection !== null;

  useEffect(() => {
    if (!allowed) {
      router.replace("/");
    }
  }, [allowed, router]);

  if (!allowed) {
    return null;
  }

  function handleBackHome() {
    reset();
    router.push("/");
  }

  return (
    <main className={styles.main}>
      <InsightCard insight={scriptedInsight} dogName={mockFamily.dog.name} />
      <button type="button" className={styles.primaryButton} onClick={handleBackHome}>
        {strings.insight.backHome}
      </button>
    </main>
  );
}
