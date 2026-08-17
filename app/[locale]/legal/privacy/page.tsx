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
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  const languages = Object.fromEntries(
    locales.map((l) => [
      l,
      `${SITE_URL}/${l}/legal/privacy`,
    ]),
  );
  return {
    title: `${t("title")} — ${SITE_NAME}`,
    description: t("metaDescription"),
    openGraph: {
      title: `${t("title")} — ${SITE_NAME}`,
      description: t("metaDescription"),
      url: `${SITE_URL}/${locale}/legal/privacy`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/legal/privacy`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/legal/privacy` },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.privacy");

  const sections = [
    "controller",
    "data",
    "purposes",
    "legalBasis",
    "recipients",
    "transfers",
    "retention",
    "rights",
    "security",
    "cookies",
    "changes",
  ] as const;

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

      <section>
        <h2>{t("sections.contact.heading")}</h2>
        <p>
          {t("sections.contact.body")}{" "}
          <a href="mailto:contact@carebond.ch">contact@carebond.ch</a>
        </p>
      </section>
    </LegalPage>
  );
}
