"use client";

import { useRouter } from "next/navigation";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import styles from "./ReflectionForm.module.css";

export function ReflectionForm() {
  const router = useRouter();
  const { submitReflection } = useMissionSession();

  function handleSelect(optionId: string) {
    submitReflection(optionId);
    router.push("/insight");
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
    </div>
  );
}
