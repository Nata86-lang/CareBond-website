import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { articleGraph, jsonLd } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  RESOURCE_LOCALES,
  allArticleParams,
  articlePaths,
  getArticle,
  hasResources,
} from "@/lib/resources";

export function generateStaticParams() {
  return allArticleParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticle(locale, slug);
  if (!article) return {};
  return buildPageMetadata({
    locale,
    path: `/resources/${slug}`,
    title: article.metaTitle,
    description: article.metaDescription,
    availableIn: RESOURCE_LOCALES,
    // The German article lives at a German slug, so the alternates cannot be
    // derived from this locale's path.
    localePaths: articlePaths(article.id),
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasResources(locale)) notFound();
  const article = await getArticle(locale, slug);
  if (!article) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("resources");

  return (
    <main id="main-content" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleGraph({
              locale,
              path: `/${locale}/resources/${slug}`,
              headline: article.h1,
              description: article.metaDescription,
              sources: article.sources,
            }),
          ),
        }}
      />

      {/* The article column is deliberately narrower than the rest of the site:
          long-form prose is unreadable at max-w-7xl. */}
      <article className="mx-auto max-w-3xl px-6 pt-16 sm:pt-20 lg:pt-24">
        <Breadcrumbs
          items={[
            { name: "CareBond", path: `/${locale}` },
            { name: t("navLabel"), path: `/${locale}/resources` },
            { name: article.h1, path: `/${locale}/resources/${slug}` },
          ]}
        />

        <h1 className="text-balance text-[2rem] font-semibold leading-[1.15] tracking-[-0.025em] text-brand-navy sm:text-[2.5rem] sm:leading-[1.1]">
          {article.h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          {article.lead}
        </p>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-balance text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-brand-navy sm:text-[1.75rem]">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="mt-4 text-base leading-[1.75] text-neutral-700"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-5 space-y-2.5">
                {section.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative pl-6 text-base leading-[1.7] text-neutral-700"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-brand-blue-strong"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {article.takeaways.length > 0 && (
          <aside className="mt-14 rounded-3xl border border-neutral-200 bg-neutral-50/60 p-8">
            <h2 className="text-lg font-semibold tracking-tight text-brand-navy">
              {t("takeawaysHeading")}
            </h2>
            <ul className="mt-4 space-y-3">
              {article.takeaways.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-6 text-[15px] leading-[1.7] text-neutral-700"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-brand-blue-strong"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight text-brand-navy">
            {t("sourcesHeading")}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {article.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 rounded text-[15px] leading-relaxed text-brand-blue-strong underline underline-offset-4 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  {source.label}
                  <ExternalLink
                    size={13}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-neutral-200 pt-6">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {t("disclaimerHeading")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {article.disclaimer}
          </p>
        </section>

        <div className="mb-16 mt-12 sm:mb-20 lg:mb-24">
          <Link
            href={`/${locale}/resources`}
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-brand-blue-strong hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t("backToIndex")}
          </Link>
        </div>
      </article>
    </main>
  );
}
