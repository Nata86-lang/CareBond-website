import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// V1 routes; expanded as Phase 1+ pages land.
const ROUTES = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l === "en" ? "en" : `${l}-CH`, `${SITE_URL}/${l}${route}`])
        ),
      },
    }))
  );
}
