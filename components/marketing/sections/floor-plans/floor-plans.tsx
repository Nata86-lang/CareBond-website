import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Building2, MapPin, Workflow } from "lucide-react";
import { HospitalIsometric } from "./hospital-isometric";

// Section 7.5 — Plans 3D & navigation interne.
//
// CareBond produces isometric 3D blueprints of nursing homes,
// hospitals and clinics so visitors and clinicians can navigate the
// premises in-app: a built-in indoor GPS guides them from any
// starting point to the room they're looking for. The visual on the
// right is a server-rendered SVG of a stylized hospital floor with a
// live wayfinding path from reception to imaging.
//
// Layout mirrors Section 9 Chat multilingue: 5/7 split, bullets on
// the left, big visual on the right. bg-white alternates from the
// Module Résidences section that precedes it.

const BULLET_KEYS = ["b0", "b1", "b2"] as const;
const BULLET_ICONS = [Building2, Workflow, MapPin];

export async function FloorPlans({ locale }: { locale: string }) {
  const t = await getTranslations("floorPlans");

  return (
    <section
      id="floor-plans"
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

        {/* Bullets left + visual right */}
        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <ul className="space-y-5">
              {BULLET_KEYS.map((k, i) => {
                const Icon = BULLET_ICONS[i] ?? Building2;
                return (
                  <li key={k} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-strong">
                      <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold tracking-tight text-brand-navy">
                        {t(`bullets.${k}.title`)}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {t(`bullets.${k}.description`)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link
              href={`/${locale}/platform/floor-plans`}
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-strong hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {t("learnMore")}
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <HospitalIsometric />
          </div>
        </div>
      </div>
    </section>
  );
}
