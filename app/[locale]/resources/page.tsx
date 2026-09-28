import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { RESOURCE_LOCALES, getArticles, hasResources } from "@/lib/resources";

export function generateStaticParams() {
  return RESOURCE_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasResources(locale)) return {};
  const t = await getTranslations({ locale, namespace: "resources" });
  return buildPageMetadata({
    locale,
    path: "/resources",
    title: t("metaTitle"),
    description: t("metaDescription"),
    availableIn: RESOURCE_LOCALES,
  });
}

export default async function ResourcesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasResources(locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("resources");
  const articles = await getArticles(locale);

  return (
    <main id="main-content" className="bg-white">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.75rem] sm:leading-[1.05] sm:tracking-[-0.03em] md:text-[3.25rem] lg:text-[3.75rem]">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px] lg:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group relative flex flex-col rounded-3xl border border-neutral-200 bg-neutral-50/40 p-8 transition-colors hover:border-brand-blue/40 sm:p-10"
              >
                <h2 className="text-xl font-semibold tracking-tight text-brand-navy sm:text-[1.375rem]">
                  <Link
                    href={`/${locale}/resources/${article.slug}`}
                    className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.h1}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
                  {article.lead}
                </p>
                <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-strong">
                  {t("readMore")}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
