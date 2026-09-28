import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { SITE_URL, GOOGLE_SITE_VERIFICATION } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { siteGraph, jsonLd } from "@/lib/structured-data";
import { hasResources } from "@/lib/resources";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import "../globals.css";

// next/font/google self-hosts at build time: fonts land in
// /_next/static/media/, no runtime requests to Google CDN. Inter is the
// premium choice for product UI typography (Linear, Stripe, Mercury,
// Notion all use it). Replaces Outfit (too geometric/rounded for the
// Swiss healthcare premium tone we are after).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    // Omitted entirely while the token is empty — an empty verification tag
    // would just be noise in the head.
    ...(GOOGLE_SITE_VERIFICATION
      ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
      : {}),
    // Explicit index/follow, plus permission to use a full-length snippet and a
    // large image in the result. Inherited by all 120 URLs — none of the page
    // level generateMetadata functions sets `robots`. This does NOT replace
    // removing the X-Robots-Tag header: an HTML tag cannot override an HTTP one.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...buildPageMetadata({
      locale,
      path: "",
      title: t("title"),
      description: t("description"),
    }),
  };
}

// Next 15.5 enforces that `params` is typed with a plain string here; we
// narrow to Locale at runtime via the locales.includes guard.
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  // Only the namespaces a client component actually reads. The full catalogue is
  // ~69 KB of JSON and was being serialised into the HTML of all 120 URLs; this
  // is ~12 KB. Audited consumers: header.tsx + mobile-nav.tsx (header, nav),
  // solutions-dropdown.tsx (nav, nav.solutionsMenu), features-dropdown.tsx (nav,
  // platform.bento.pillars), pour-qui-client.tsx (pourQui),
  // chat-multilingue-demo.tsx (hero), contact-form.tsx (contactForm),
  // error.tsx (error). Server components keep reading the full catalogue via
  // getTranslations, which never crosses the wire.
  // Adding a useTranslations call to a client component means adding its
  // namespace here, or it renders the raw key path at runtime.
  const clientMessages = {
    nav: messages.nav,
    header: messages.header,
    hero: messages.hero,
    pourQui: messages.pourQui,
    contactForm: messages.contactForm,
    error: messages.error,
    platform: { bento: { pillars: messages.platform.bento.pillars } },
  };

  const graph = siteGraph();

  // Only fr and de have a resources section; the header and mobile menu render
  // the entry only when a label is passed.
  const resourcesLabel = hasResources(locale)
    ? (await getTranslations({ locale, namespace: "resources" }))("navLabel")
    : undefined;

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={clientMessages} locale={locale}>
          <SkipLink />
          <Header locale={locale} resourcesLabel={resourcesLabel} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
        />
      </body>
    </html>
  );
}
