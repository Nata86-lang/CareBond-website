import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// schema.org for CareBond.
//
// Two rules this file exists to enforce:
//
//  1. Stable @ids, scoped correctly. Nodes with no language-specific content
//     (Organization, its logo, the WebSite) get ONE id for the whole site.
//     Nodes carrying translated text (WebPage, SoftwareApplication) get an id
//     per locale — otherwise six locales publish six contradictory definitions
//     of the same identifier and Google has to pick one.
//  2. Nothing invented. No `offers` without a real price, no `aggregateRating`,
//     no `sameAs` until the LinkedIn page exists, no streetAddress/postalCode
//     until the registered address is on hand. An omitted property costs
//     nothing; a fabricated one is a false statement about a real company.
//     `MedicalOrganization` is deliberately NOT used: CareBond sells software,
//     it does not deliver care.

type JsonLdNode = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const LOGO_ID = `${SITE_URL}/#logo`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const LANGUAGE_NAMES: Record<string, string> = {
  fr: "French",
  de: "German",
  it: "Italian",
  en: "English",
  es: "Spanish",
  ca: "Catalan",
};

function organization(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@id": LOGO_ID },
    image: { "@id": LOGO_ID },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressLocality: "Genève",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@carebond.ch",
      contactType: "customer support",
      areaServed: "CH",
      availableLanguage: locales.map((l) => LANGUAGE_NAMES[l]).filter(Boolean),
    },
  };
}

function logo(): JsonLdNode {
  return {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}/logos/carebond-logo.png`,
    contentUrl: `${SITE_URL}/logos/carebond-logo.png`,
    width: 2481,
    height: 2291,
    caption: SITE_NAME,
  };
}

function website(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: [...locales],
  };
}

/**
 * The site-wide graph, emitted once per page from the locale layout.
 *
 * Only nodes that are true on EVERY URL live here. A WebPage node does not:
 * the layout cannot see the pathname, so one emitted from here would describe
 * the home page while sitting on /solutions/ems. Page-scoped nodes are in
 * homeGraph() and breadcrumbGraph() instead.
 */
export function siteGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [organization(), logo(), website()],
  };
}

/**
 * Home-page-scoped nodes. Both carry translated text, so both get an @id per
 * locale — a single shared id would publish six contradictory definitions of
 * the same thing.
 */
export function homeGraph({
  locale,
  title,
  description,
}: {
  locale: string;
  title: string;
  description: string;
}): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${locale}#webpage`,
        url: `${SITE_URL}/${locale}`,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/${locale}#software`,
        name: SITE_NAME,
        url: `${SITE_URL}/${locale}`,
        description,
        applicationCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        inLanguage: locale,
        publisher: { "@id": ORGANIZATION_ID },
        image: { "@id": LOGO_ID },
      },
    ],
  };
}

/**
 * BreadcrumbList for a two-level page (section index → leaf). This is the one
 * node here that visibly changes the search result: Google replaces the raw URL
 * under the title with the readable path.
 */
export function breadcrumbGraph(
  items: { name: string; path: string }[],
): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage for the home page's six questions. */
export function faqGraph(
  entries: { question: string; answer: string }[],
): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question,
      acceptedAnswer: { "@type": "Answer", text: e.answer },
    })),
  };
}

/** Serialise for dangerouslySetInnerHTML, neutralising any `</script>`. */
export function jsonLd(node: JsonLdNode): string {
  return JSON.stringify(node).replace(/</g, "\\u003c");
}
