import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Building2, MapPin, Workflow } from "lucide-react";
import { HospitalIsometric } from "./hospital-isometric";

// Section 7.5 — Plans 3D & navigation interne.
//
// Layout: section header at top (max-w-3xl, left-aligned to match the
// rest of the site), then the isometric hospital visual occupies the
// full width of the container as the centerpiece, then a 3-column row
// of feature bullets sits below the visual. This puts the
// architectural illustration front-and-center, which is the whole
// point of the section.

const BULLET_KEYS = ["b0", "b1", "b2"] as const;
const BULLET_ICONS = [Building2, Workflow, MapPin];

export async function FloorPlans({ locale }: { locale: string }) {
  const t = await getTranslations("floorPlans");

  return (
    <section id="floor-plans" className="border-t border-neutral-200 bg-white">
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

        {/* Full-width isometric visual */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <HospitalIsometric />
        </div>

        {/* 3 feature bullets in a row below the visual */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 md:grid-cols-3 md:gap-10">
          {BULLET_KEYS.map((k, i) => {
            const Icon = BULLET_ICONS[i] ?? Building2;
            return (
              <div key={k} className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-semibold tracking-tight text-brand-navy">
                  {t(`bullets.${k}.title`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {t(`bullets.${k}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link CTA */}
        <div className="mt-12 sm:mt-14">
          <Link
            href={`/${locale}/platform/floor-plans`}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-strong hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {t("learnMore")}
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
