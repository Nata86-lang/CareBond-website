import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { PatientPhone } from "@/components/marketing/hero/mockups/patient-phone";
import { FamilyPhone } from "@/components/marketing/hero/mockups/family-phone";
import { ProfessionalPhone } from "@/components/marketing/hero/mockups/professional-phone";
import { DashboardTile } from "./dashboard-tile";

// Section 3 — Comment CareBond fonctionne.
//
// Linear-style numbered surfaces. Four columns (Patient / Famille /
// Soignant / Direction) each with a card number, role title, short
// description, and a mockup at the bottom. Mockups are static here
// (step=4 = settled state) so they don't compete with the Hero's live
// dashboard for the user's attention.
//
// Border-top + same bg-white keeps the page reading as one continuous
// editorial flow rather than a stack of chunked sections.
type Step = {
  numberKey: "patient" | "family" | "professional" | "direction";
  mockup: ReactNode;
};

const STEPS: Step[] = [
  { numberKey: "patient", mockup: <PatientPhone step={4} /> },
  { numberKey: "family", mockup: <FamilyPhone step={4} /> },
  { numberKey: "professional", mockup: <ProfessionalPhone step={4} /> },
  { numberKey: "direction", mockup: <DashboardTile /> },
];

export async function HowItWorks() {
  const t = await getTranslations("howItWorks");

  return (
    <section
      id="how-it-works"
      className="border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Section header */}
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

        {/* 4 surfaces */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 md:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {STEPS.map(({ numberKey, mockup }) => (
            <article
              key={numberKey}
              className="flex flex-col"
            >
              <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-brand-blue-strong">
                {t(`steps.${numberKey}.number`)}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-brand-navy">
                {t(`steps.${numberKey}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t(`steps.${numberKey}.description`)}
              </p>
              <div
                aria-hidden="true"
                className="mt-8 flex justify-center md:justify-start"
              >
                {mockup}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
