import type { ReactNode } from "react";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import styles from "./OnboardingStepShell.module.css";

export function OnboardingStepShell({
  step,
  totalSteps,
  question,
  context,
  onBack,
  onSkip,
  children,
}: {
  step: number;
  totalSteps: number;
  question: string;
  context: string;
  onBack?: () => void;
  onSkip?: () => void;
  children: ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <div className={styles.topRow}>
        {onBack ? (
          <button type="button" className={styles.linkButton} onClick={onBack}>
            {strings.onboarding.back}
          </button>
        ) : (
          <span />
        )}
        <span className={styles.progress}>
          {format(strings.onboarding.progress, { current: String(step), total: String(totalSteps) })}
        </span>
      </div>

      <h1 className={styles.question}>{question}</h1>
      <p className={styles.context}>{context}</p>

      <div className={styles.content}>{children}</div>

      {onSkip && (
        <button type="button" className={styles.skipButton} onClick={onSkip}>
          {strings.onboarding.skip}
        </button>
      )}
    </div>
  );
}
