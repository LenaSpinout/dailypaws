import Image from "next/image";
import { illustrations, type IllustrationId } from "@/data/illustrations";
import styles from "./Illustration.module.css";

// Generic, page-agnostic rendering for any illustration in the Registry.
// Consumers reference an id — never a filename or page-specific markup.
export function Illustration({
  id,
  priority = false,
}: {
  id: IllustrationId;
  priority?: boolean;
}) {
  const illustration = illustrations[id];

  return (
    <Image
      src={illustration.src}
      alt={illustration.alt}
      width={illustration.width}
      height={illustration.height}
      priority={priority}
      className={styles.illustration}
    />
  );
}
