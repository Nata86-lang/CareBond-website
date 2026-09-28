import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { locales } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

// Index for /solutions. It did not exist: /fr/solutions returned a 404 while
// five child pages hung underneath it, so the one URL that can rank for
// "solutions de communication pour EMS" was missing.
//
// Every string here is an existing, native-reviewed key — the hero reuses the
// home page's "pour qui" section and each card reuses the child page's own
// eyebrow/title/subtitle. Nothing on this page is newly written marketing copy.
const SOLUTION_SLUGS = [
  "ems",
  "home-care",
  "recovery",
  "hospitals",
  "clinics",
] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionsIndex" });
  return buildPageMetadata({
    locale,
    path: "/solutions",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function SolutionsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pourQui");
  const tSolutions = await getTranslations("solutions");
  const tCta = await getTranslations("cta");

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

      <section className="bg-white pt-14 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {SOLUTION_SLUGS.map((slug) => (
              <article
                key={slug}
                className="group relative rounded-3xl border border-neutral-200 bg-neutral-50/40 p-8 transition-colors hover:border-brand-blue/40 sm:p-10"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
                  {tSolutions(`${slug}.eyebrow`)}
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-brand-navy sm:text-[1.375rem]">
                  <Link
                    href={`/${locale}/solutions/${slug}`}
                    className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  >
                    {/* Stretches the whole card into the link target without
                        nesting interactive elements. */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {tSolutions(`${slug}.title`)}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {tSolutions(`${slug}.subtitle`)}
                </p>
                <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-strong">
                  {tCta("learnMore")}
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

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-blue-strong px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {tCta("primary")}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
