import type { Insight } from "@/domain/types";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import styles from "./InsightCard.module.css";

export function InsightCard({
  insight,
  dogName,
}: {
  insight: Insight;
  dogName: string;
}) {
  return (
    <div className={styles.card}>
      <p className={styles.eyebrow}>{strings.insight.heading}</p>
      <h1 className={styles.title}>{insight.title}</h1>
      <p className={styles.description}>{insight.description}</p>
      <p className={styles.confirm}>
        {format(strings.insight.confirmPrompt, { dogName })}
      </p>
    </div>
  );
}
