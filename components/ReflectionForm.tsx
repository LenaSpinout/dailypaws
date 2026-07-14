"use client";

import { useRouter } from "next/navigation";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import styles from "./ReflectionForm.module.css";

export function ReflectionForm() {
  const router = useRouter();
  const { submitReflection, skipReflection } = useMissionSession();

  function handleSelect(optionId: string) {
    submitReflection(optionId);
    router.push("/insight");
  }

  function handleSkip() {
    skipReflection();
    router.push("/");
  }

  return (
    <div className={styles.options}>
      {strings.reflection.options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={styles.option}
          onClick={() => handleSelect(option.id)}
        >
          {option.label}
        </button>
      ))}
      <button type="button" className={styles.skip} onClick={handleSkip}>
        {strings.reflection.skip}
      </button>
    </div>
  );
}
