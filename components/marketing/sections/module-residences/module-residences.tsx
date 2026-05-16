import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Check,
  FileCheck2,
  UserPlus,
} from "lucide-react";

// Section 7 — Module Résidences (deep dive on the EMS flagship module).
// Three columns walking through the resident lifecycle: Admission →
// Tournée digitale → Audit. Each column carries 4 sub-feature bullets so
// EMS directors get a concrete capability list, not a slogan.
//
// Server component. Light bg-white restores the calm reading rhythm
// after the navy manifesto band of Section 6.

type Pillar = {
  key: "admission" | "rounds" | "audit";
  Icon: LucideIcon;
  bullets: readonly string[];
};

const PILLARS: Pillar[] = [
  { key: "admission", Icon: UserPlus, bullets: ["b0", "b1", "b2", "b3"] },
  // rounds has 6 bullets: b4 covers e-prescriptions, b5 covers reports
  // shared across the patient's whole care team + auto mini-report family.
  { key: "rounds", Icon: Activity, bullets: ["b0", "b1", "b2", "b3", "b4", "b5"] },
  { key: "audit", Icon: FileCheck2, bullets: ["b0", "b1", "b2", "b3"] },
];

export async function ModuleResidences() {
  const t = await getTranslations("moduleResidences");

  return (
    <section
      id="module-residences"
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

        {/* 3 columns */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-3 lg:gap-12">
          {PILLARS.map(({ key, Icon, bullets }, i) => (
            <article key={key} className="flex flex-col">
              {/* Number + icon row */}
              <div className="flex items-center gap-4">
                <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-brand-blue-strong">
                  0{i + 1}
                </p>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-navy sm:text-[1.375rem]">
                {t(`pillars.${key}.title`)}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-600">
                {t(`pillars.${key}.description`)}
              </p>
              <ul className="mt-6 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <div
                      aria-hidden="true"
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue/10"
                    >
                      <Check
                        size={10}
                        strokeWidth={3}
                        className="text-brand-blue-strong"
                      />
                    </div>
                    <p className="text-[14px] leading-relaxed text-neutral-700">
                      {t(`pillars.${key}.bullets.${b}`)}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
