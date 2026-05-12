import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });

  const languages = Object.fromEntries(
    locales.map((l) => [l === "en" ? "en" : `${l}-CH`, `${SITE_URL}/${l}/contact`])
  );

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}/${locale}/contact`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/contact` },
    },
  };
}

export default async function ContactStubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact.stub");

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[calc(100vh-72px)] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-16 text-center lg:px-8"
    >
      <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
        {t("title")}
      </h1>
      <p className="max-w-xl text-balance text-base text-neutral-600 sm:text-lg">
        {t("subtitle")}
      </p>
      <p className="text-base text-neutral-700">
        {t("emailLead")}{" "}
        <a
          href="mailto:contact@carebond.ch"
          className="font-semibold text-brand-blue-strong underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          contact@carebond.ch
        </a>
      </p>
      <Link
        href={`/${locale}`}
        className="inline-flex min-h-12 items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        ← {t("backToHome")}
      </Link>
    </main>
  );
}
