import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { HeroStage } from "./hero/hero-stage";

// Hero — Phase 1B. Linear/Stripe "hero + sidekick" composition: admin
// dashboard MacBook as the visual mass, one phone with the chat
// multilingue demo as the live sidekick. The three other product
// surfaces are introduced in Section 3 (Comment CareBond fonctionne).
//
// Inter font (set in [locale]/layout.tsx) does the heavy lifting on
// premium feel. H1 is semibold (600) not bold (700) — more elegant for
// Swiss product copy.
//
// Background: subtle neutral-50 with a fine dot grid for tactile depth
// without violating the no-gradients rule.
export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations("hero");
  const tCta = await getTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-neutral-50">
      {/* Subtle dot grid backdrop */}
      <div
        aria-hidden="true"
        className="hero-dotgrid pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-14 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left: copy + CTAs (5/12 cols on desktop) */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue-strong">
              {t("eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-brand-navy sm:text-5xl lg:text-[56px] xl:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-neutral-700 sm:text-[17px]">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#152547] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {tCta("primary")}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
              <Link
                href="#platform"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {tCta("viewPlatform")}
              </Link>
            </div>
          </div>

          {/* Right: dashboard + phone sidekick (7/12 cols on desktop) */}
          <div className="lg:col-span-7">
            <HeroStage />
          </div>
        </div>
      </div>
    </section>
  );
}
