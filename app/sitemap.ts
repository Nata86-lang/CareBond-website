import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { ARTICLES, RESOURCE_LOCALES, articlePath } from "@/lib/resources";

// Sitemap: every marketing route in every locale, with hreflang alternates.
// `priority` is highest on the home, high on the conversion and index pages,
// lowest on the legal pages.
//
// This list is MANUAL. A new route that is not added here is invisible to
// Google — it is not derived from the filesystem.
const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/contact", priority: 0.9 },
  { path: "/solutions", priority: 0.9 },
  { path: "/platform", priority: 0.9 },
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

// The resources section exists in French and German only, so its entries carry
// their own, shorter alternate list. Listing an alternate that 404s is a worse
// signal than listing none.
const RESOURCE_INDEX: { path: string; priority: number }[] = [
  { path: "/resources", priority: 0.8 },
];

// Each article has a different slug per locale, so its alternates are built from
// the slug table rather than from one shared path.
function articleEntries(): MetadataRoute.Sitemap {
  return ARTICLES.flatMap((article) =>
    RESOURCE_LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${articlePath(article.id, locale)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          RESOURCE_LOCALES.map((l) => [
            l,
            `${SITE_URL}/${l}${articlePath(article.id, l)}`,
          ]),
        ),
      },
    })),
  );
}

function entries(
  routes: { path: string; priority: number }[],
  inLocales: readonly string[],
): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority }) =>
    inLocales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          inLocales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
        ),
      },
    })),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Deliberately no `lastModified`: it could only be the build timestamp here,
  // so every URL would claim to have changed on every deploy. Google learns to
  // ignore the signal, and an absent date is better than a false one.
  return [
    ...entries(ROUTES, locales),
    ...entries(RESOURCE_INDEX, RESOURCE_LOCALES),
    ...articleEntries(),
  ];
}
