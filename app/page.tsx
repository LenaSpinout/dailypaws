"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Illustration } from "@/components/Illustration";
import { MissionCard } from "@/components/MissionCard";
import { Timeline } from "@/components/Timeline";
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
      <div className={styles.topRow}>
        <p className={styles.heading}>{strings.home.heading}</p>
        <Link href="/profile" className={styles.profileLink}>
          {strings.home.profileLink}
        </Link>
      </div>
      <div className={styles.hero}>
        <Illustration id="homeHero" priority />
      </div>
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
      <Timeline history={history} />
    </main>
  );
}
