import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";
import { LegalPage } from "@/components/legal/legal-page";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.credits" });
  const languages = Object.fromEntries(
    locales.map((l) => [
      l === "en" ? "en" : `${l}-CH`,
      `${SITE_URL}/${l}/legal/credits`,
    ]),
  );
  return {
    title: `${t("title")} — ${SITE_NAME}`,
    description: t("metaDescription"),
    openGraph: {
      title: `${t("title")} — ${SITE_NAME}`,
      description: t("metaDescription"),
      url: `${SITE_URL}/${locale}/legal/credits`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/legal/credits`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/legal/credits` },
    },
  };
}

export default async function CreditsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.credits");

  const sections = ["illustrations", "icons", "typography", "openSource"] as const;

  return (
    <LegalPage
      eyebrow={t("eyebrow")}
      title={t("title")}
      lastUpdated={t("lastUpdated")}
    >
      <p>{t("intro")}</p>
      {sections.map((s) => (
        <section key={s}>
          <h2>{t(`sections.${s}.heading`)}</h2>
          <p>{t(`sections.${s}.body`)}</p>
        </section>
      ))}
    </LegalPage>
  );
}
