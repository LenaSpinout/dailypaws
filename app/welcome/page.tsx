"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Illustration } from "@/components/Illustration";
import { strings } from "@/i18n/strings";
import { useOnboarding } from "@/state/onboarding-session";
import styles from "./page.module.css";

export default function WelcomePage() {
  const router = useRouter();
  const { hydrated, hasStarted, completed } = useOnboarding();

  useEffect(() => {
    if (!hydrated) return;
    if (completed) {
      router.replace("/");
    } else if (hasStarted) {
      router.replace("/onboarding");
    }
  }, [hydrated, hasStarted, completed, router]);

  if (!hydrated || completed || hasStarted) {
    return null;
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>{strings.welcome.title}</h1>
        <p className={styles.subtitle}>{strings.welcome.subtitle}</p>
        <p className={styles.body}>{strings.welcome.bodyLine1}</p>
        <p className={styles.body}>{strings.welcome.bodyLine2}</p>
      </div>
      <div className={styles.hero}>
        <Illustration id="welcomeDog" priority sizes="200px" />
      </div>
      <button
        type="button"
        className={styles.primaryButton}
        onClick={() => router.push("/onboarding")}
      >
        {strings.welcome.primaryButton}
      </button>
    </main>
  );
}
