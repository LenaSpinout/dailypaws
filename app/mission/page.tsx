"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Illustration } from "@/components/Illustration";
import { getTodaysMission } from "@/data/mission-templates";
import { missionTypeIllustrations } from "@/data/illustrations";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import { useOnboarding } from "@/state/onboarding-session";
import styles from "./page.module.css";

export default function MissionPage() {
  const router = useRouter();
  const {
    status,
    startMission,
    completeMission,
    hydrated: missionHydrated,
    history,
  } = useMissionSession();
  const { hydrated, completed, hasStarted, family } = useOnboarding();
  const mission = getTodaysMission(family?.goal?.type, history[0]?.missionId ?? null);

  useEffect(() => {
    if (!hydrated) return;
    if (!completed) {
      router.replace(hasStarted ? "/onboarding" : "/welcome");
    }
  }, [hydrated, completed, hasStarted, router]);

  function handleStart() {
    startMission(mission.id);
  }

  function handleComplete() {
    completeMission();
    router.push("/reflection");
  }

  if (!hydrated || !missionHydrated || !completed || !family) {
    return null;
  }

  const illustrationId = missionTypeIllustrations[mission.type];

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>
        {strings.mission.back}
      </Link>
      <span className={styles.type}>{mission.type}</span>
      {illustrationId && (
        <div className={styles.hero}>
          <Illustration id={illustrationId} priority />
        </div>
      )}
      <h1 className={styles.title}>{mission.title}</h1>
      <p className={styles.description}>{mission.description}</p>
      <p className={styles.meta}>
        {format(strings.mission.duration, {
          minutes: String(mission.durationMinutes),
        })}
      </p>

      {status === "in-progress" && (
        <p className={styles.encouragement}>{strings.mission.inProgress}</p>
      )}

      {status === "not-started" && (
        <button type="button" className={styles.primaryButton} onClick={handleStart}>
          {strings.mission.start}
        </button>
      )}

      {status !== "not-started" && (
        <button
          type="button"
          className={styles.primaryButton}
          onClick={handleComplete}
        >
          {strings.mission.complete}
        </button>
      )}
    </main>
  );
}
