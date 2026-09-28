import type { Metadata } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";

// One share image per locale, so a link posted in German does not preview a
// French strapline. Generated at 1200x630 (the size LinkedIn, WhatsApp, Slack
// and X all crop to) from the brand mark + footer.tagline.
export function ogImagePath(locale: string): string {
  const known = (locales as readonly string[]).includes(locale) ? locale : "fr";
  return `/og/carebond-og-${known}.png`;
}

type PageMetaInput = {
  locale: string;
  /** Route below the locale segment: "" for the home, "/solutions/ems", … */
  path: string;
  title: string;
  description: string;
  /**
   * Which locales this page actually exists in. Defaults to all of them, which
   * is right for every route that is generated for all six. Pass a subset for a
   * page that only exists in some — announcing an hreflang alternate that
   * returns 404 is a worse signal than announcing none.
   */
  availableIn?: readonly string[];
  /** The locale x-default should point at. Defaults to fr. */
  defaultLocale?: string;
  /**
   * Per-locale paths, for pages whose URL slug is localised (the resources
   * articles). Without this the alternates would all reuse this locale's slug
   * and point at 404s in the others.
   */
  localePaths?: Record<string, string>;
};

/**
 * The single source of page metadata. Every generateMetadata in the app funnels
 * through here so that title, description, Open Graph, Twitter, canonical and
 * hreflang can never drift apart again.
 *
 * Two bugs this exists to prevent, both of which were live:
 *   1. No og:image or twitter:image anywhere, while twitter:card promised
 *      "summary_large_image" — every shared link rendered as an empty grey box.
 *   2. Only the root layout declared a `twitter` block, and a child's own
 *      `openGraph` replaces the parent's rather than merging, so all 114 inner
 *      pages advertised the HOME PAGE's title and description when shared.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  availableIn = locales,
  defaultLocale = "fr",
  localePaths,
}: PageMetaInput): Metadata {
  const pathIn = (l: string) => localePaths?.[l] ?? path;
  const url = `${SITE_URL}/${locale}${path}`;
  const image = ogImagePath(locale);
  const languages = Object.fromEntries(
    availableIn.map((l) => [l, `${SITE_URL}/${l}${pathIn(l)}`]),
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        "x-default": `${SITE_URL}/${defaultLocale}${pathIn(defaultLocale)}`,
      },
    },
  };
}
