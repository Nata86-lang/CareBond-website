import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ClipboardCheck,
  LayoutGrid,
  Languages,
  MapPin,
  ShieldCheck,
  Video,
} from "lucide-react";

// Section 5 — La plateforme complète. Apple-style bento with five
// platform pillars arranged 6-col × 3-row on desktop: one big headliner
// card (Pilotage, col-span-3 row-span-2) and four wide cards filling
// the rest. Stacks vertically on mobile, 2-col on md.
//
// Each card links to a stub page under /[locale]/platform/{slug}. The
// big oversight card includes an inline 4-KPI mini-mockup to justify
// its visual weight without committing to a full screen mock.

type Pillar = {
  slug:
    | "oversight"
    | "audit"
    | "livestream"
    | "chat-multilingue"
    | "rounds"
    | "floor-plans";
  Icon: LucideIcon;
  size: "big" | "wide";
};

// 6-pillar bento. Layout in 6-col × 4-row: oversight is the big
// anchor top-left (3×2), floor-plans is the big anchor mid-right
// (3×2), the other four flow as wide cards filling rows 3-4.
const PILLARS: Pillar[] = [
  { slug: "oversight", Icon: LayoutGrid, size: "big" },
  { slug: "audit", Icon: ShieldCheck, size: "wide" },
  { slug: "livestream", Icon: Video, size: "wide" },
  { slug: "floor-plans", Icon: MapPin, size: "big" },
  { slug: "chat-multilingue", Icon: Languages, size: "wide" },
  { slug: "rounds", Icon: ClipboardCheck, size: "wide" },
];

export async function PlatformBento({ locale }: { locale: string }) {
  const t = await getTranslations("platform.bento");

  return (
    <section
      id="platform"
      className="border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.028em] text-brand-navy sm:text-[2.5rem] lg:text-[3rem]">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
            {t("subtitle")}
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:grid-rows-4">
          {PILLARS.map(({ slug, Icon, size }) => (
            <Link
              key={slug}
              href={`/${locale}/platform/${slug}`}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:p-8 motion-reduce:transform-none motion-reduce:transition-none ${
                size === "big"
                  ? "lg:col-span-3 lg:row-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue-strong">
                {t(`pillars.${slug}.eyebrow`)}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-navy sm:text-[1.375rem]">
                {t(`pillars.${slug}.title`)}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                {t(`pillars.${slug}.description`)}
              </p>

              {/* Oversight big card gets an inline 4-KPI mini-mockup */}
              {slug === "oversight" && (
                <div
                  aria-hidden="true"
                  className="mt-8 grid grid-cols-2 gap-2.5"
                >
                  {[
                    {
                      label: t("pillars.oversight.kpiResidents"),
                      value: "20,000",
                      bg: "bg-brand-blue",
                    },
                    {
                      label: t("pillars.oversight.kpiProfessionals"),
                      value: "2,393",
                      bg: "bg-brand-navy",
                    },
                    {
                      label: t("pillars.oversight.kpiAlerts"),
                      value: "104",
                      bg: "bg-[#7B4B1F]",
                    },
                    {
                      label: t("pillars.oversight.kpiDevices"),
                      value: "21,567",
                      bg: "bg-[#0F766E]",
                    },
                  ].map((k) => (
                    <div
                      key={k.label}
                      className={`rounded-xl p-3.5 text-white ${k.bg}`}
                    >
                      <p className="text-[10px] font-medium uppercase tracking-wider opacity-90">
                        {k.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
                        {k.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Floor-plans big card gets a mini isometric thumbnail */}
              {slug === "floor-plans" && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 160"
                  className="mt-8 w-full"
                >
                  <polygon
                    points="40,30 280,30 270,130 30,130"
                    fill="#FAFBFC"
                    stroke="#E7E8EB"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="40"
                    y1="80"
                    x2="275"
                    y2="80"
                    stroke="#E7E8EB"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                  <polygon points="50,40 130,40 122,75 42,75" fill="rgb(63 142 243 / 0.14)" stroke="rgb(37 99 235 / 0.5)" strokeWidth="1.2" />
                  <polygon points="130,40 210,40 202,75 122,75" fill="rgb(10 27 57 / 0.05)" stroke="rgb(10 27 57 / 0.2)" strokeWidth="1.2" />
                  <polygon points="210,40 270,40 262,75 202,75" fill="rgb(10 27 57 / 0.05)" stroke="rgb(10 27 57 / 0.2)" strokeWidth="1.2" />
                  <polygon points="42,75 122,75 114,120 34,120" fill="rgb(220 38 38 / 0.10)" stroke="rgb(220 38 38 / 0.45)" strokeWidth="1.2" />
                  <polygon points="122,75 202,75 194,120 114,120" fill="rgb(63 142 243 / 0.14)" stroke="rgb(37 99 235 / 0.5)" strokeWidth="1.2" />
                  <polygon points="202,75 262,75 254,120 194,120" fill="rgb(10 27 57 / 0.05)" stroke="rgb(10 27 57 / 0.2)" strokeWidth="1.2" />
                  <path
                    d="M 86 56 L 86 95 L 158 95 L 158 100"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="86" cy="56" r="5" fill="#2563EB" />
                  <circle cx="158" cy="100" r="5" fill="#DC2626" />
                </svg>
              )}

              <p className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-semibold text-brand-blue-strong">
                {t("learnMore")}
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
