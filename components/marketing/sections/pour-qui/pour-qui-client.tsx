"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  ClipboardCheck,
  FileText,
  Globe2,
  Languages,
  Palette,
  Plug,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";

// Client tabs for the Pour qui section. The Loupe.ch-inspired layout
// places one large showcase card on top with the active audience's copy,
// feature list and visual mockup, and the audience pill tabs centered
// below it. Tabs at the bottom read as "filters for what's above" — the
// card stays the visual anchor.
//
// All four visuals are mounted as ReactNode props from the server parent
// (rendered server-side) and the client only toggles which one is
// visible. Swap re-mounts the panel via the React `key` to trigger a CSS
// fade-in keyed by audience.

const AUDIENCES = ["ems", "spitex", "hospitals", "clinics"] as const;
type Audience = (typeof AUDIENCES)[number];

const FEATURE_ICONS: Record<Audience, [LucideIcon, LucideIcon, LucideIcon]> = {
  ems: [BarChart3, ShieldCheck, Users],
  spitex: [Video, FileText, AlertTriangle],
  hospitals: [Plug, Building2, ClipboardCheck],
  clinics: [Palette, Globe2, Languages],
};

type Props = {
  emsVisual: ReactNode;
  spitexVisual: ReactNode;
  hospitalsVisual: ReactNode;
  clinicsVisual: ReactNode;
};

export function PourQuiClient({
  emsVisual,
  spitexVisual,
  hospitalsVisual,
  clinicsVisual,
}: Props) {
  const t = useTranslations("pourQui");
  const [active, setActive] = useState<Audience>("ems");
  const baseId = useId();

  const visuals: Record<Audience, ReactNode> = {
    ems: emsVisual,
    spitex: spitexVisual,
    hospitals: hospitalsVisual,
    clinics: clinicsVisual,
  };

  const icons = FEATURE_ICONS[active];

  return (
    <section
      id="pour-qui"
      className="border-t border-neutral-200 bg-neutral-50"
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

        {/* Showcase card */}
        <div
          key={active}
          role="tabpanel"
          id={`${baseId}-panel-${active}`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="dashboard-anim-counter mt-12 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 shadow-mockup-lg sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            {/* Left: copy + features */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-semibold tracking-tight text-brand-navy sm:text-[1.75rem]">
                {t(`audiences.${active}.title`)}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
                {t(`audiences.${active}.description`)}
              </p>
              <ul className="mt-8 space-y-3">
                {([0, 1, 2] as const).map((i) => {
                  const Icon = icons[i];
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-strong">
                        <Icon size={18} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold tracking-tight text-brand-navy">
                          {t(`audiences.${active}.features.f${i}.title`)}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          {t(`audiences.${active}.features.f${i}.description`)}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: visual */}
            <div className="lg:col-span-5">
              <div
                aria-hidden="true"
                className="flex justify-center lg:justify-end"
              >
                {visuals[active]}
              </div>
            </div>
          </div>
        </div>

        {/* Tab pills — centered below the card */}
        <div
          role="tablist"
          aria-label={t("tabsAriaLabel")}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {AUDIENCES.map((a) => {
            const isActive = a === active;
            return (
              <button
                key={a}
                role="tab"
                type="button"
                id={`${baseId}-tab-${a}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${a}`}
                onClick={() => setActive(a)}
                className={`inline-flex h-11 items-center rounded-full px-6 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none ${
                  isActive
                    ? "bg-brand-navy text-white shadow-sm"
                    : "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-brand-navy"
                }`}
              >
                {t(`audiences.${a}.label`)}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
