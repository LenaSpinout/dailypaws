"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MissionCard } from "@/components/MissionCard";
import { getTodaysMission } from "@/data/mission-templates";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import { useOnboarding } from "@/state/onboarding-session";
import styles from "./page.module.css";

export default function HomePage() {
  const router = useRouter();
  const { hydrated, completed, hasStarted, family } = useOnboarding();
  const { hydrated: missionHydrated, status, history } = useMissionSession();

  useEffect(() => {
    if (!hydrated) return;
    if (!completed) {
      router.replace(hasStarted ? "/onboarding" : "/welcome");
    }
  }, [hydrated, completed, hasStarted, router]);

  if (!hydrated || !missionHydrated || !completed || !family) {
    return null;
  }

  const mission = getTodaysMission(family.goal?.type, history[0]?.missionId ?? null);

  return (
    <main className={styles.main}>
      <p className={styles.heading}>{strings.home.heading}</p>
      <p className={styles.subheading}>
        {format(strings.home.subheading, { dogName: family.dog.name })}
      </p>
      <div className={styles.statusRow}>
        <span className={styles.statusBadge}>{strings.home.missionStatus[status]}</span>
        {family.goal && (
          <span className={styles.goalBadge}>
            {strings.home.goalLabel}: {family.goal.type}
          </span>
        )}
      </div>
      <MissionCard mission={mission} />
    </main>
  );
}
