import { getTranslations } from "next-intl/server";

// A single-statistic interstitial used to break up the text-heavy home
// sections. One large figure, one sentence, its source — centered and
// single-column on purpose, so it stays clean in every locale no matter
// how long the sentence runs (the old equal-height card grid broke on
// translation). Figures and sources live in i18n under `stats.items`,
// each attributed to a primary source on the line beneath.
export async function StatDivider({
  statKey,
  surface = "white",
}: {
  statKey: string;
  surface?: "white" | "muted";
}) {
  const t = await getTranslations("stats.items");

  return (
    <section
      className={`border-t border-neutral-200 ${
        surface === "muted" ? "bg-neutral-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20 lg:py-24">
        <p className="text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.02em] text-brand-blue-strong sm:text-[4.5rem] lg:text-[5rem]">
          {t(`${statKey}.figure`)}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-xl font-medium leading-snug tracking-tight text-brand-navy sm:text-2xl lg:text-[1.75rem]">
          {t(`${statKey}.label`)}
        </p>
        <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-neutral-400">
          {t(`${statKey}.source`)}
        </p>
      </div>
    </section>
  );
}
