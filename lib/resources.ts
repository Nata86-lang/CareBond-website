import type { Locale } from "@/lib/i18n";

// The "Ressources" section: editorial articles aimed at the questions a Swiss
// care-institution director types into Google BEFORE they know a vendor like
// CareBond exists. The rest of the site is product pages, which only reach
// people already shopping for a product.
//
// French and German only — the two markets CareBond sells into. Four more
// machine-widened languages would add 24 thin pages competing with nothing.
// RESOURCE_LOCALES is the single switch: routes, sitemap, footer, header and the
// hreflang set all read it, so adding Italian later means adding the content file
// and its slugs and nothing else.
export const RESOURCE_LOCALES = ["fr", "de"] as const;
export type ResourceLocale = (typeof RESOURCE_LOCALES)[number];

export function hasResources(locale: string): locale is ResourceLocale {
  return (RESOURCE_LOCALES as readonly string[]).includes(locale);
}

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleSource = {
  label: string;
  url: string;
};

export type Article = {
  /** Language-neutral identity; the URL slug differs per locale. */
  id: ArticleId;
  slug: string;
  locale: ResourceLocale;
  /** Search-result title, kept under 60 characters. */
  metaTitle: string;
  metaDescription: string;
  /** On-page title. May be longer and more human than the metaTitle. */
  h1: string;
  lead: string;
  sections: ArticleSection[];
  takeaways: string[];
  /** Not-legal-advice note, in the article's own language. */
  disclaimer: string;
  /** Every factual claim in the article traces to one of these. */
  sources: ArticleSource[];
};

// Slugs are localised on purpose: a German URL should carry German words, and
// /de/resources/communication-familles-ems would rank for nothing. This table is
// what pairs the two versions so hreflang can point at the right one — without
// it, each language's article would look like an orphan to Google.
//
// Order is editorial: this is the order the index renders them in.
export const ARTICLES = [
  { id: "data-protection", slugs: { fr: "nlpd-ems-obligations", de: "revdsg-pflegeheim-pflichten" } },
  { id: "hosting", slugs: { fr: "heberger-donnees-sante-suisse", de: "gesundheitsdaten-hosting-schweiz" } },
  { id: "families", slugs: { fr: "communication-familles-ems", de: "kommunikation-angehoerige-pflegeheim" } },
  { id: "checklist", slugs: { fr: "numeriser-ems-checklist", de: "pflegeheim-software-checkliste" } },
  { id: "interop", slugs: { fr: "hl7-fhir-explique", de: "hl7-fhir-erklaert" } },
  { id: "multilingual", slugs: { fr: "communication-multilingue-soins", de: "mehrsprachige-kommunikation-pflege" } },
] as const satisfies readonly {
  id: string;
  slugs: Record<ResourceLocale, string>;
}[];

export type ArticleId = (typeof ARTICLES)[number]["id"];

/** The URL path of an article in a given locale, for hreflang and the sitemap. */
export function articlePath(id: ArticleId, locale: ResourceLocale): string {
  const entry = ARTICLES.find((a) => a.id === id);
  if (!entry) throw new Error(`Unknown article id: ${id}`);
  return `/resources/${entry.slugs[locale]}`;
}

/** {fr: "/resources/…", de: "/resources/…"} — the alternates for one article. */
export function articlePaths(id: ArticleId): Record<string, string> {
  return Object.fromEntries(
    RESOURCE_LOCALES.map((l) => [l, articlePath(id, l)]),
  );
}

/**
 * Article bodies are plain data modules under content/resources/, never
 * messages/*.json: that catalogue is read in full on every server render and
 * would carry six long articles into every page of the site.
 */
async function loadArticles(locale: ResourceLocale): Promise<Article[]> {
  const mod = await import(`@/content/resources/${locale}`);
  return mod.articles as Article[];
}

export async function getArticles(locale: string): Promise<Article[]> {
  if (!hasResources(locale)) return [];
  const articles = await loadArticles(locale);
  const order = new Map<string, number>(ARTICLES.map((a, i) => [a.id, i]));
  return [...articles].sort(
    (a, b) => (order.get(a.id) ?? 99) - (order.get(b.id) ?? 99),
  );
}

export async function getArticle(
  locale: string,
  slug: string,
): Promise<Article | null> {
  if (!hasResources(locale)) return null;
  const articles = await loadArticles(locale);
  return articles.find((a) => a.slug === slug) ?? null;
}

/** Locale/slug pairs that actually have content, for generateStaticParams. */
export function allArticleParams(): { locale: Locale; slug: string }[] {
  return RESOURCE_LOCALES.flatMap((locale) =>
    ARTICLES.map((a) => ({ locale: locale as Locale, slug: a.slugs[locale] })),
  );
}
