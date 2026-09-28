import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { locales } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

// Index for /platform. It did not exist: /fr/platform returned a 404 while six
// child pages hung underneath it, and the header CTA "Voir la plateforme"
// pointed at an anchor on the home page instead of a real URL.
//
// As with /solutions, every string is an existing native-reviewed key: the hero
// is the home page's platform section, the cards are each module's own
// eyebrow/title/description. No new marketing copy.
const PLATFORM_SLUGS = [
  "oversight",
  "audit",
  "livestream",
  "chat-multilingue",
  "rounds",
  "floor-plans",
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
  const t = await getTranslations({ locale, namespace: "platformIndex" });
  return buildPageMetadata({
    locale,
    path: "/platform",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function PlatformIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform.bento");
  const tPillars = await getTranslations("platform.bento.pillars");
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {PLATFORM_SLUGS.map((slug) => (
              <article
                key={slug}
                className="group relative rounded-3xl border border-neutral-200 bg-neutral-50/40 p-8 transition-colors hover:border-brand-blue/40"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
                  {tPillars(`${slug}.eyebrow`)}
                </p>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-brand-navy sm:text-xl">
                  <Link
                    href={`/${locale}/platform/${slug}`}
                    className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {tPillars(`${slug}.title`)}
                  </Link>
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                  {tPillars(`${slug}.description`)}
                </p>
                <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-strong">
                  {t("learnMore")}
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
