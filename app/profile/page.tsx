"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { strings } from "@/i18n/strings";
import { useOnboarding } from "@/state/onboarding-session";
import styles from "./page.module.css";

export default function ProfilePage() {
  const router = useRouter();
  const { hydrated, completed, hasStarted, family } = useOnboarding();

  useEffect(() => {
    if (!hydrated) return;
    if (!completed) {
      router.replace(hasStarted ? "/onboarding" : "/welcome");
    }
  }, [hydrated, completed, hasStarted, router]);

  if (!hydrated || !completed || !family) {
    return null;
  }

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>
        {strings.profile.back}
      </Link>
      <h1 className={styles.heading}>{strings.profile.heading}</h1>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>{strings.profile.dogSection}</p>
        <p className={styles.row}>
          <span className={styles.rowLabel}>{strings.profile.dogName}</span>
          <span>{family.dog.name}</span>
        </p>
        <p className={styles.row}>
          <span className={styles.rowLabel}>{strings.profile.lifeStage}</span>
          <span>{family.dog.lifeStage ?? strings.profile.lifeStageUnknown}</span>
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>{strings.profile.peopleSection}</p>
        {family.people.map((person) => (
          <p key={person.id} className={styles.row}>
            {person.name}
          </p>
        ))}
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>{strings.profile.goalSection}</p>
        <p className={styles.row}>
          {family.goal?.type ?? strings.profile.goalUnknown}
        </p>
      </section>
    </main>
  );
}
