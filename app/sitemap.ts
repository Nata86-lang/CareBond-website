import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// Phase 1B sitemap: home + contact stub + 5 platform pillar stubs, each
// available in all 4 locales. Total surface area = 7 routes × 4 locales
// = 28 entries. `priority` is highest on the home, slightly lower on
// contact (conversion target), lowest on the deep stubs (low intent).
const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/contact", priority: 0.9 },
  { path: "/platform/oversight", priority: 0.7 },
  { path: "/platform/audit", priority: 0.7 },
  { path: "/platform/livestream", priority: 0.7 },
  { path: "/platform/chat-multilingue", priority: 0.7 },
  { path: "/platform/rounds", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l === "en" ? "en" : `${l}-CH`,
            `${SITE_URL}/${l}${path}`,
          ]),
        ),
      },
    })),
  );
}
