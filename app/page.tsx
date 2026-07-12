import { MissionCard } from "@/components/MissionCard";
import { mockFamily } from "@/data/mock-family";
import { getTodaysMission } from "@/data/mission-templates";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import styles from "./page.module.css";

export default function HomePage() {
  const mission = getTodaysMission();

  return (
    <main className={styles.main}>
      <p className={styles.heading}>{strings.home.heading}</p>
      <p className={styles.subheading}>
        {format(strings.home.subheading, { dogName: mockFamily.dog.name })}
      </p>
      <MissionCard mission={mission} />
    </main>
  );
}
