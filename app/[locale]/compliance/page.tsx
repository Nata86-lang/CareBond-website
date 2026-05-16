import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Award,
  ArrowRight,
  ClipboardCheck,
  FileSignature,
  Globe2,
  Lock,
  MapPin,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "compliancePage" });
  const languages = Object.fromEntries(
    locales.map((l) => [
      l === "en" ? "en" : `${l}-CH`,
      `${SITE_URL}/${l}/compliance`,
    ]),
  );
  const title = `${t("title")} — ${SITE_NAME}`;
  return {
    title,
    description: t("metaDescription"),
    openGraph: {
      title,
      description: t("metaDescription"),
      url: `${SITE_URL}/${locale}/compliance`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/compliance`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/compliance` },
    },
  };
}

export default async function CompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("compliancePage");
  const tCta = await getTranslations("cta");

  const PILLAR_ICONS = [ShieldCheck, MapPin, Lock, ClipboardCheck] as const;
  const PILLAR_KEYS = ["nlpd", "hosting", "encryption", "audit"] as const;
  const REGULATION_ICONS = [ShieldCheck, FileSignature, Globe2] as const;
  const REGULATION_KEYS = ["nlpd", "kvg", "transfers"] as const;
  const CERTIFICATION_ICONS = [Award, ServerCog] as const;
  const CERTIFICATION_KEYS = ["iso27001", "hds"] as const;

  return (
    <main id="main-content" className="bg-white">
      {/* Hero */}
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

      {/* 4 pillars (mirrors home Section 8 but deeper) */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {PILLAR_KEYS.map((k, i) => {
              const Icon = PILLAR_ICONS[i] ?? ShieldCheck;
              return (
                <article
                  key={k}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50/40 p-8 sm:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-brand-navy sm:text-[1.375rem]">
                    {t(`pillars.${k}.title`)}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600">
                    {t(`pillars.${k}.description`)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory frameworks */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("regulations.eyebrow")}
            </p>
            <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              {t("regulations.heading")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("regulations.intro")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {REGULATION_KEYS.map((k, i) => {
              const Icon = REGULATION_ICONS[i] ?? ShieldCheck;
              return (
                <li
                  key={k}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-navy">
                    {t(`regulations.items.${k}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t(`regulations.items.${k}.description`)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Targeted certifications */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("certifications.eyebrow")}
            </p>
            <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              {t("certifications.heading")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("certifications.intro")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {CERTIFICATION_KEYS.map((k, i) => {
              const Icon = CERTIFICATION_ICONS[i] ?? Award;
              return (
                <li
                  key={k}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50/40 p-6 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                      {t(`certifications.items.${k}.status`)}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-navy">
                    {t(`certifications.items.${k}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t(`certifications.items.${k}.description`)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Documentation request CTA */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50/40 p-6 text-center sm:p-12 lg:p-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("docs.eyebrow")}
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.5rem]">
              {t("docs.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("docs.description")}
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#152547] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {tCta("primary")}
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </Link>
              <Link
                href={`/${locale}/legal/privacy`}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {t("docs.secondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
