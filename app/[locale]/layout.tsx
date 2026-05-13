import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";
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
  subsets: ["latin", "latin-ext"],
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

  const languages = Object.fromEntries(
    locales.map((l) => [l === "en" ? "en" : `${l}-CH`, `${SITE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}/${locale}`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ...languages,
        "x-default": `${SITE_URL}/fr`,
      },
    },
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

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/carebond-logo.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressLocality: "Genève",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@carebond.ch",
      contactType: "customer support",
      availableLanguage: ["French", "German", "Italian", "English"],
    },
  };

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SkipLink />
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
