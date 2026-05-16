import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Building2,
  ClipboardCheck,
  Clock,
  FileSignature,
  FileText,
  Globe2,
  Languages,
  LayoutGrid,
  Lock,
  MapPin,
  Navigation,
  Plug,
  Server,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";
import { FamilyPhone } from "@/components/marketing/hero/mockups/family-phone";
import { ProfessionalPhone } from "@/components/marketing/hero/mockups/professional-phone";
import { DashboardTile } from "@/components/marketing/sections/how-it-works/dashboard-tile";
import { ChatMultilingualDemo } from "@/components/marketing/sections/chat-multilingue/chat-multilingue-demo";

// Per-pillar deep-dive page. Structure: hero + audience visual +
// 4-capability grid + compliance line + CTA. Pulls hero copy from
// platform.bento.pillars.{slug} (already on the home bento) so the
// titles stay in sync; the rest comes from a dedicated
// platform.pages.{slug} namespace.

const VALID_SLUGS = [
  "oversight",
  "audit",
  "livestream",
  "chat-multilingue",
  "rounds",
  "floor-plans",
] as const;
type Slug = (typeof VALID_SLUGS)[number];

function isValidSlug(s: string): s is Slug {
  return (VALID_SLUGS as readonly string[]).includes(s);
}

// Icons per slug's capabilities. Drawn from real product capabilities
// so each pillar's grid reflects something CareBond actually does.
// Two slugs have an extra 5th capability — livestream (AI fall detection)
// and rounds (reports shared across the patient's care team). The rest are 4.
const CAPABILITY_ICONS: Record<Slug, LucideIcon[]> = {
  oversight: [LayoutGrid, AlertTriangle, Building2, Users],
  audit: [Users, ClipboardCheck, FileSignature, FileText],
  livestream: [UserCheck, Clock, Lock, Server, Activity],
  "chat-multilingue": [Languages, UserCheck, Server, Globe2],
  rounds: [Smartphone, ClipboardCheck, MapPin, FileSignature, Users],
  "floor-plans": [Building2, Navigation, Smartphone, Plug],
};

const CAPABILITY_KEYS: Record<Slug, readonly string[]> = {
  oversight: ["f0", "f1", "f2", "f3"],
  audit: ["f0", "f1", "f2", "f3"],
  livestream: ["f0", "f1", "f2", "f3", "f4"],
  "chat-multilingue": ["f0", "f1", "f2", "f3"],
  rounds: ["f0", "f1", "f2", "f3", "f4"],
  "floor-plans": ["f0", "f1", "f2", "f3"],
};

// Trust badge icon for each pillar's compliance line.
const COMPLIANCE_ICON: Record<Slug, LucideIcon> = {
  oversight: ShieldCheck,
  audit: ShieldCheck,
  livestream: Lock,
  "chat-multilingue": Languages,
  rounds: FileSignature,
  "floor-plans": MapPin,
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
  const tBento = await getTranslations({
    locale,
    namespace: "platform.bento.pillars",
  });
  const tPage = await getTranslations({
    locale,
    namespace: `platform.pages.${slug}`,
  });
  const title = `${tBento(`${slug}.title`)} — ${SITE_NAME}`;
  const description = tPage("subtitle");
  const languages = Object.fromEntries(
    locales.map((l) => [
      l === "en" ? "en" : `${l}-CH`,
      `${SITE_URL}/${l}/platform/${slug}`,
    ]),
  );
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/platform/${slug}`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/platform/${slug}`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/platform/${slug}` },
    },
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) notFound();
  setRequestLocale(locale);

  const tBento = await getTranslations("platform.bento.pillars");
  const tPage = await getTranslations(`platform.pages.${slug}`);
  const tCta = await getTranslations("cta");
  const capabilityIcons = CAPABILITY_ICONS[slug];
  const ComplianceIcon = COMPLIANCE_ICON[slug];
  const visual = renderVisual(slug, tPage("visualAlt"));

  return (
    <main id="main-content" className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {tBento(`${slug}.eyebrow`)}
            </p>
            <h1 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.75rem] sm:leading-[1.05] sm:tracking-[-0.03em] md:text-[3.25rem] lg:text-[3.75rem]">
              {tBento(`${slug}.title`)}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px] lg:text-lg">
              {tPage("subtitle")}
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

      {/* Visual */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">{visual}</div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {tPage("capabilities.eyebrow")}
            </p>
            <h2 className="mt-5 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              {tPage("capabilities.heading")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {tPage("capabilities.intro")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {CAPABILITY_KEYS[slug].map((k, i) => {
              const Icon = capabilityIcons[i] ?? Users;
              return (
                <li
                  key={k}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-navy">
                    {tPage(`capabilities.items.${k}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {tPage(`capabilities.items.${k}.description`)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Compliance line */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-strong">
            <ComplianceIcon size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <p className="mt-6 text-balance text-lg leading-relaxed text-brand-navy sm:text-xl">
            {tPage("compliance")}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-mockup-lg sm:p-12 lg:p-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
              {tPage("cta.eyebrow")}
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.025em] text-brand-navy sm:text-[2.25rem] lg:text-[2.5rem]">
              {tPage("cta.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              {tPage("cta.description")}
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

function renderVisual(slug: Slug, alt: string): ReactNode {
  switch (slug) {
    case "oversight":
      return <DashboardTile />;
    case "audit":
      // No mockup — audit is a process. Show a stat-grid style card.
      return null;
    case "livestream":
      return <FamilyPhone step={4} />;
    case "chat-multilingue":
      return (
        <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-3 shadow-mockup-lg sm:p-4">
          <div className="overflow-hidden rounded-2xl bg-neutral-50">
            <ChatMultilingualDemo />
          </div>
        </div>
      );
    case "rounds":
      return <ProfessionalPhone step={4} />;
    case "floor-plans":
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
  }
}
