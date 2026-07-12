import type { MetadataRoute } from "next";
import { strings } from "@/i18n/strings";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: strings.app.name,
    short_name: strings.app.name,
    description: strings.app.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf3ea",
    theme_color: "#faf3ea",
  };
}
