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
  primaryAction,
  children,
}: {
  step: number;
  totalSteps: number;
  question: string;
  context: string;
  onBack?: () => void;
  onSkip?: () => void;
  primaryAction?: ReactNode;
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

      {/* Scrolls internally if the step's options don't fit — the
          question above and the primary action below always stay
          visible, so the CTA is never pushed off-screen. */}
      <div className={styles.content}>{children}</div>

      {primaryAction}

      {onSkip && (
        <button type="button" className={styles.skipButton} onClick={onSkip}>
          {strings.onboarding.skip}
        </button>
      )}
    </div>
  );
}
