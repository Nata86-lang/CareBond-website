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
  const t = await getTranslations({ locale, namespace: "legal.imprint" });
  return buildPageMetadata({
    locale,
    path: `/legal/imprint`,
    title: `${t("title")} — ${SITE_NAME}`,
    description: t("metaDescription"),
  });
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.imprint");

  return (
    <LegalPage
      eyebrow={t("eyebrow")}
      title={t("title")}
      lastUpdated={t("lastUpdated")}
    >
      <section>
        <h2>{t("editor.heading")}</h2>
        <p>{t("editor.body")}</p>
      </section>

      <section>
        <h2>{t("publication.heading")}</h2>
        <p>{t("publication.body")}</p>
      </section>

      <section>
        <h2>{t("hosting.heading")}</h2>
        <p>{t("hosting.body")}</p>
      </section>

      <section>
        <h2>{t("ip.heading")}</h2>
        <p>{t("ip.body")}</p>
      </section>

      <section>
        <h2>{t("contact.heading")}</h2>
        <p>
          {t("contact.body")}{" "}
          <a href="mailto:info@carebond.ch">info@carebond.ch</a>
        </p>
      </section>
    </LegalPage>
  );
}
