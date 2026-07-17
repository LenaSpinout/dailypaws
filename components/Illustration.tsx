import Image from "next/image";
import { illustrations, type IllustrationId } from "@/data/illustrations";
import styles from "./Illustration.module.css";

// Every page wraps this in a container no wider than the app's 480px
// column, so without a `sizes` hint next/image would otherwise assume
// full-viewport width and fetch far larger variants than ever get
// displayed. Callers with a narrower slot (e.g. a smaller mascot image)
// can override with a tighter value.
const DEFAULT_SIZES = "(max-width: 480px) 100vw, 440px";

// Generic, page-agnostic rendering for any illustration in the Registry.
// Consumers reference an id — never a filename or page-specific markup.
export function Illustration({
  id,
  priority = false,
  sizes = DEFAULT_SIZES,
}: {
  id: IllustrationId;
  priority?: boolean;
  sizes?: string;
}) {
  const illustration = illustrations[id];

  return (
    <Image
      src={illustration.src}
      alt={illustration.alt}
      width={illustration.width}
      height={illustration.height}
      priority={priority}
      sizes={sizes}
      className={styles.illustration}
    />
  );
}
