import type { MissionType } from "@/domain/types";

export type IllustrationId = "homeHero" | "observe";

export interface IllustrationAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// The Illustration Registry — the single place that maps an illustration id
// to its production file. Pages reference ids, never filenames. Adding a
// future illustration (see docs/IllustrationCatalogue.md) only ever needs a
// new entry here plus the file in public/illustrations/ — no component
// changes.
export const illustrations: Record<IllustrationId, IllustrationAsset> = {
  homeHero: {
    src: "/illustrations/home-hero.png",
    alt: "An illustration of a person and their dog sharing a warm moment together outdoors.",
    width: 1536,
    height: 1024,
  },
  observe: {
    src: "/illustrations/observe.png",
    alt: "An illustration of a person calmly watching their dog explore and sniff around outdoors.",
    width: 1536,
    height: 1024,
  },
};

// Maps a Mission Type to its illustration, for the Mission Types that
// already have an approved one. Practice/Explore/Celebrate each get one
// line here once I-003/I-004/I-005 are approved — the Mission screen
// already renders whatever this lookup returns.
export const missionTypeIllustrations: Partial<Record<MissionType, IllustrationId>> = {
  Observe: "observe",
};
