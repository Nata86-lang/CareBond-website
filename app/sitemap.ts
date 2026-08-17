import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// Sitemap: every marketing route in every locale, with hreflang
// alternates using generic language codes (global audience — no
// region pinning). `priority` is highest on the home, slightly lower
// on contact (conversion target), lowest on the deep stubs (low intent).
const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/contact", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/compliance", priority: 0.7 },
  { path: "/platform/oversight", priority: 0.7 },
  { path: "/platform/audit", priority: 0.7 },
  { path: "/platform/livestream", priority: 0.7 },
  { path: "/platform/chat-multilingue", priority: 0.7 },
  { path: "/platform/rounds", priority: 0.7 },
  { path: "/platform/floor-plans", priority: 0.7 },
  { path: "/solutions/ems", priority: 0.8 },
  { path: "/solutions/home-care", priority: 0.8 },
  { path: "/solutions/recovery", priority: 0.8 },
  { path: "/solutions/hospitals", priority: 0.8 },
  { path: "/solutions/clinics", priority: 0.8 },
  { path: "/legal/imprint", priority: 0.3 },
  { path: "/legal/privacy", priority: 0.4 },
  { path: "/legal/terms", priority: 0.3 },
  { path: "/legal/cookies", priority: 0.3 },
  { path: "/legal/credits", priority: 0.3 },
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
            l,
            `${SITE_URL}/${l}${path}`,
          ]),
        ),
      },
    })),
  );
}
