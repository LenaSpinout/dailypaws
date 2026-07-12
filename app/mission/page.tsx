"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getTodaysMission } from "@/data/mission-templates";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import styles from "./page.module.css";

export default function MissionPage() {
  const router = useRouter();
  const { status, startMission, completeMission } = useMissionSession();
  const mission = getTodaysMission();

  function handleComplete() {
    completeMission();
    router.push("/reflection");
  }

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>
        {strings.mission.back}
      </Link>
      <span className={styles.type}>{mission.type}</span>
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
        <button type="button" className={styles.primaryButton} onClick={startMission}>
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
