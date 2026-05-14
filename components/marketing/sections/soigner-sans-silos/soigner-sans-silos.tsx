import { getTranslations } from "next-intl/server";
import { Check, X } from "lucide-react";

// Section 6 — Soigner sans silos. Mid-page manifesto break: deep navy
// background, white text, two-column "Sans CareBond / Avec CareBond"
// comparison panel. The dark band is intentional — it anchors the page
// visually and matches the rhetorical shift from "what we build" to
// "why we build it that way".
//
// Server component, zero client JS. Subtle backdrop-blur cards inside
// give the navy band material depth without competing with the Hero.
const ITEM_KEYS = ["i0", "i1", "i2", "i3"] as const;

export async function SoignerSansSilos() {
  const t = await getTranslations("soignerSansSilos");

  return (
    <section
      id="silos"
      className="bg-brand-navy"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Header — centered, light copy on navy */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.028em] text-white sm:text-[2.5rem] lg:text-[3rem]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-[17px]">
            {t("subtitle")}
          </p>
        </div>

        {/* Comparison panels */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
          {/* Sans CareBond — fragmented */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300">
              {t("avant.label")}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
              {t("avant.title")}
            </h3>
            <ul className="mt-7 space-y-4">
              {ITEM_KEYS.map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15"
                  >
                    <X
                      size={13}
                      strokeWidth={2.5}
                      className="text-red-300"
                    />
                  </div>
                  <p className="text-[15px] leading-relaxed text-neutral-200">
                    {t(`avant.items.${k}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Avec CareBond — unified */}
          <div className="rounded-3xl border border-emerald-400/25 bg-emerald-400/[0.06] p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
              {t("apres.label")}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
              {t("apres.title")}
            </h3>
            <ul className="mt-7 space-y-4">
              {ITEM_KEYS.map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                  >
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="text-emerald-300"
                    />
                  </div>
                  <p className="text-[15px] leading-relaxed text-neutral-100">
                    {t(`apres.items.${k}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing line — the rhetorical punch */}
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-lg font-medium leading-snug text-white sm:text-xl lg:mt-20">
          {t("closing")}
        </p>
      </div>
    </section>
  );
}
