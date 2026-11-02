import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: "El Corral",
    description: business.description,
    start_url: "/",
    display: "browser",
    background_color: "#eee7db",
    theme_color: "#191512",
    lang: "es-MX",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
