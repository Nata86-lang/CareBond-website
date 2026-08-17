import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  UserCheck,
  Languages,
  Lock,
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
  const t = await getTranslations({ locale, namespace: "about" });
  const languages = Object.fromEntries(
    locales.map((l) => [
      l,
      `${SITE_URL}/${l}/about`,
    ]),
  );
  const title = `${t("title")} — ${SITE_NAME}`;
  return {
    title,
    description: t("metaDescription"),
    openGraph: {
      title,
      description: t("metaDescription"),
      url: `${SITE_URL}/${locale}/about`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/about` },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCta = await getTranslations("cta");

  const VALUE_ICONS = [Lock, UserCheck, ShieldCheck, Languages] as const;
  const VALUE_KEYS = ["v0", "v1", "v2", "v3"] as const;

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

      {/* Mission */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
                {t("mission.eyebrow")}
              </p>
              <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem]">
                {t("mission.heading")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-neutral-700 sm:text-[17px]">
                {t("mission.body1")}
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-[17px]">
                {t("mission.body2")}
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-[17px]">
                {t("mission.body3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("values.eyebrow")}
            </p>
            <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              {t("values.heading")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("values.intro")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {VALUE_KEYS.map((k, i) => {
              const Icon = VALUE_ICONS[i] ?? ShieldCheck;
              return (
                <li
                  key={k}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-navy">
                    {t(`values.items.${k}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t(`values.items.${k}.description`)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-strong">
            <MapPin size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <p className="mt-6 text-balance text-lg leading-relaxed text-brand-navy sm:text-xl">
            {t("location.body")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-mockup-lg sm:p-12 lg:p-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("cta.eyebrow")}
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.5rem]">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("cta.description")}
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
              <a
                href="mailto:contact@carebond.ch"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                contact@carebond.ch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
