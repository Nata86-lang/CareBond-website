import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileText,
  Globe2,
  Languages,
  LayoutGrid,
  MapPin,
  Palette,
  Plug,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";
import { FamilyPhone } from "@/components/marketing/hero/mockups/family-phone";
import { ClinicsTile } from "@/components/marketing/sections/pour-qui/clinics-tile";

// Dynamic solutions landing page — one route per audience type. Each
// page expands on what the home PourQui tabs only hint at: a full hero,
// problem statement, 4 features, supporting visual, and CTA back to
// /contact. Content per audience lives in i18n under solutions.{slug}.
//
// 4 slugs × 4 locales = 16 static pages, all SSG via generateStaticParams.

const VALID_SLUGS = ["ems", "home-care", "hospitals", "clinics"] as const;
type Slug = (typeof VALID_SLUGS)[number];

function isValidSlug(s: string): s is Slug {
  return (VALID_SLUGS as readonly string[]).includes(s);
}

// Feature icons per audience — each landing surfaces 4 features that
// reflect what's actually built for that audience, drawn from the
// platform pillars (oversight / livestream / chat-multilingue / etc.).
const FEATURE_ICONS: Record<Slug, [LucideIcon, LucideIcon, LucideIcon, LucideIcon]> = {
  ems: [LayoutGrid, ShieldCheck, Languages, Users],
  "home-care": [MapPin, FileText, Video, AlertTriangle],
  hospitals: [Plug, Building2, ClipboardCheck, MapPin],
  clinics: [Languages, Palette, UserCheck, Globe2],
};

// Problem section icons — same per audience for the 4 pain bullets
const PROBLEM_ICON: Record<Slug, LucideIcon> = {
  ems: Stethoscope,
  "home-care": MapPin,
  hospitals: Building2,
  clinics: Globe2,
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    VALID_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) return {};
  const t = await getTranslations({ locale, namespace: `solutions.${slug}` });
  const languages = Object.fromEntries(
    locales.map((l) => [
      l === "en" ? "en" : `${l}-CH`,
      `${SITE_URL}/${l}/solutions/${slug}`,
    ]),
  );
  const title = `${t("title")} — ${SITE_NAME}`;
  return {
    title,
    description: t("metaDescription"),
    openGraph: {
      title,
      description: t("metaDescription"),
      url: `${SITE_URL}/${locale}/solutions/${slug}`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/${slug}`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/solutions/${slug}` },
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations(`solutions.${slug}`);
  const tCta = await getTranslations("cta");
  const featureIcons = FEATURE_ICONS[slug];
  const ProblemIcon = PROBLEM_ICON[slug];
  const visual = renderVisual(slug, t("visualAlt"));

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
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
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
                href={`/${locale}#platform`}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {tCta("viewPlatform")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">{visual}</div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("problem.eyebrow")}
            </p>
            <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              {t("problem.heading")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("problem.intro")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {(["p0", "p1", "p2", "p3"] as const).map((k) => (
              <li
                key={k}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-700">
                  <ProblemIcon size={18} strokeWidth={2} aria-hidden="true" />
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-700">
                  {t(`problem.points.${k}`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution / features */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {t("features.eyebrow")}
            </p>
            <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              {t("features.heading")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {t("features.intro")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {(["f0", "f1", "f2", "f3"] as const).map((k, i) => {
              const Icon = featureIcons[i] ?? Users;
              return (
                <li
                  key={k}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50/40 p-6 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-navy">
                    {t(`features.items.${k}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t(`features.items.${k}.description`)}
                  </p>
                </li>
              );
            })}
          </ul>
          {slug === "ems" && (
            <p className="mt-8 text-sm italic leading-relaxed text-neutral-500">
              {t("features.roadmap")}
            </p>
          )}
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

// Per-audience visual. Reuses existing assets so the page feels
// continuous with the home and avoids inventing new mockups.
function renderVisual(slug: Slug, alt: string): ReactNode {
  switch (slug) {
    case "ems":
      return (
        <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl shadow-mockup-lg">
          <Image
            src="/images/floor-plans/residence.jpg"
            alt={alt}
            width={2752}
            height={1536}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1024px"
            quality={85}
          />
        </div>
      );
    case "home-care":
      return <FamilyPhone step={4} />;
    case "hospitals":
      return (
        <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl shadow-mockup-lg">
          <Image
            src="/images/floor-plans/hospital.jpg"
            alt={alt}
            width={2752}
            height={1536}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1024px"
            quality={85}
          />
        </div>
      );
    case "clinics":
      return <ClinicsTile />;
  }
}
