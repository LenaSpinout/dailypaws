"use client";

import { useEffect } from "react";
import Link from "next/link";
import { strings } from "@/i18n/strings";
import styles from "./error.module.css";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <p className={styles.heading}>{strings.error.heading}</p>
      <p className={styles.body}>{strings.error.body}</p>
      <button type="button" className={styles.primaryButton} onClick={reset}>
        {strings.error.retry}
      </button>
      <Link href="/" className={styles.homeLink}>
        {strings.error.backHome}
      </Link>
    </main>
  );
}
