"use client";

import { useRouter } from "next/navigation";
import { firstMission } from "@/data/first-mission";
import { strings } from "@/i18n/strings";
import { useMissionSession } from "@/state/mission-session";
import styles from "./ReflectionForm.module.css";

export function ReflectionForm() {
  const router = useRouter();
  const { missionId, submitReflection, skipReflection } = useMissionSession();

  function handleSelect(optionId: string) {
    submitReflection(optionId);
    router.push("/insight");
  }

  function handleSkip() {
    skipReflection();
    router.push("/");
  }

  // DesignDecisions.md DD-005's one approved exception: the shared first
  // Mission has its own Reflection options. Every other Mission uses the
  // generic three.
  const options =
    missionId === firstMission.id ? strings.reflection.firstMissionOptions : strings.reflection.options;

  return (
    <div className={styles.options}>
      {options.map((option) => (
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
