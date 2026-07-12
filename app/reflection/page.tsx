"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ReflectionForm } from "@/components/ReflectionForm";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import styles from "./page.module.css";

export default function ReflectionPage() {
  const router = useRouter();
  const { status, reflection } = useMissionSession();
  const allowed = status === "completed" || reflection !== null;

  useEffect(() => {
    if (!allowed) {
      router.replace("/");
    }
  }, [allowed, router]);

  if (!allowed) {
    return null;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>{strings.reflection.heading}</h1>
      <p className={styles.subheading}>{strings.reflection.subheading}</p>
      <ReflectionForm />
    </main>
  );
}
