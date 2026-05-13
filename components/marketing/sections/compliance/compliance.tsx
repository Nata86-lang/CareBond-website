import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Lock, MapPin, ShieldCheck } from "lucide-react";

// Section 8 — Conformité. 2×2 grid of compliance pillars on bg-white.
// Distinguished from the surrounding sections by its grid rhythm (square
// 2×2 instead of horizontal 3-col / 4-col bentos) and its stronger card
// chrome — borders + subtle bg ring — to read as "institutional" rather
// than marketing.
//
// Server component, four lucide icons. Zero client JS.

type Pillar = {
  key: "nlpd" | "hosting" | "encryption" | "audit";
  Icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  { key: "nlpd", Icon: ShieldCheck },
  { key: "hosting", Icon: MapPin },
  { key: "encryption", Icon: Lock },
  { key: "audit", Icon: ClipboardCheck },
];

export async function Compliance() {
  const t = await getTranslations("compliance");

  return (
    <section
      id="compliance"
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

        {/* 2×2 pillar grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {PILLARS.map(({ key, Icon }) => (
            <article
              key={key}
              className="rounded-3xl border border-neutral-200 bg-neutral-50/40 p-8 sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-navy sm:text-[1.375rem]">
                {t(`pillars.${key}.title`)}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {t(`pillars.${key}.description`)}
              </p>
            </article>
          ))}
        </div>

        {/* Trust line */}
        <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-base leading-relaxed text-neutral-500 sm:mt-16">
          {t("trustLine")}
        </p>
      </div>
    </section>
  );
}
