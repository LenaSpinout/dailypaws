import Link from "next/link";
import type { MissionTemplate } from "@/domain/types";
import { strings } from "@/i18n/strings";
import styles from "./MissionCard.module.css";

export function MissionCard({ mission }: { mission: MissionTemplate }) {
  return (
    <Link href="/mission" className={styles.card}>
      <span className={styles.type}>{mission.type}</span>
      <h2 className={styles.title}>{mission.title}</h2>
      <p className={styles.description}>{mission.description}</p>
      <span className={styles.cta}>{strings.home.viewMission}</span>
    </Link>
  );
}
