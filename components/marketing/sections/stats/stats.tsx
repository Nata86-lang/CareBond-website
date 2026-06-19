import { getTranslations } from "next-intl/server";

// Section — Stats. A credibility band placed right after the Hero: a few
// verified, sourced figures that frame *why* CareBond matters before the
// page explains *how* it works. Light surface to break the white Hero,
// brand-blue numerals, four equal cards. Each card carries its own source
// attribution so the numbers read as auditable, not decorative — this is
// healthcare, the figures have to hold up.
//
// Content (figures, labels, sources) lives in i18n under `stats`; every
// figure is attributed to a primary source (Federal Statistical Office,
// peer-reviewed literature) shown on the card itself.
const KEYS = ["s0", "s1", "s2", "s3"] as const;

export async function Stats() {
  const t = await getTranslations("stats");

  return (
    <section id="stats" className="border-t border-neutral-200 bg-neutral-50">
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

        {/* Stat cards */}
        <dl className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {KEYS.map((k) => (
            <div
              key={k}
              className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-7 sm:p-8"
            >
              <dt className="text-[3rem] font-semibold leading-none tracking-tight text-brand-blue-strong tabular-nums sm:text-[3.25rem]">
                {t(`items.${k}.figure`)}
              </dt>
              <dd className="mt-4 text-[15px] font-medium leading-relaxed text-brand-navy">
                {t(`items.${k}.label`)}
              </dd>
              <p className="mt-auto pt-5 text-[11px] leading-relaxed text-neutral-400">
                {t(`items.${k}.source`)}
              </p>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-neutral-400">
          {t("sourceNote")}
        </p>
      </div>
    </section>
  );
}
