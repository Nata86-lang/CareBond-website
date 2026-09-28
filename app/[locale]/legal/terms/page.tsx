import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
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
  const t = await getTranslations({ locale, namespace: "legal.terms" });
  return buildPageMetadata({
    locale,
    path: `/legal/terms`,
    title: `${t("title")} — ${SITE_NAME}`,
    description: t("metaDescription"),
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.terms");

  const sections = ["scope", "acceptance", "use", "liability", "law"] as const;

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
