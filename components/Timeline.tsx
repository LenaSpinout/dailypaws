import type { MissionRecord } from "@/state/mission-session";
import { getMissionById } from "@/data/mission-templates";
import { getInsightForReflection } from "@/data/scripted-insights";
import { strings } from "@/i18n/strings";
import styles from "./Timeline.module.css";

const RECENT_ACTIVITY_LIMIT = 5;

export function Timeline({ history }: { history: MissionRecord[] }) {
  const recent = history.slice(0, RECENT_ACTIVITY_LIMIT);

  if (recent.length === 0) {
    return null;
  }

  return (
    <section className={styles.timeline}>
      <p className={styles.heading}>{strings.home.timelineHeading}</p>
      <ul className={styles.list}>
        {recent.map((record, index) => {
          const mission = getMissionById(record.missionId);
          // Per DD-003, a skipped Reflection never produces an Insight —
          // no Insight line is shown for those entries, calmly and without
          // calling attention to the skip itself.
          const insight = record.skipped ? null : getInsightForReflection(record.reflection);

          return (
            <li key={`${record.date}-${record.missionId}-${index}`} className={styles.item}>
              <p className={styles.missionTitle}>
                {mission?.title ?? strings.home.timelineUnknownMission}
              </p>
              {insight && <p className={styles.insightTitle}>{insight.title}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
