import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { EcosystemComposition } from "./hero/ecosystem-composition";

// Hero — Phase 1B commit 1. Server-composed shell + a single client island
// (ChatDemo) for the chat loop. PhoneFrame is presentational CSS-only.
//
// Layout:
//   - Mobile: stack vertical (copy first, then phone)
//   - lg+: 2-column grid, copy left + phone right, baseline-aligned
//
// CTAs reuse the same brand-blue-strong primary + outlined secondary
// style from the Header so the visual vocabulary stays consistent.
export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations("hero");
  const tCta = await getTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot grid backdrop — depth without gradients */}
      <div
        aria-hidden="true"
        className="hero-dotgrid pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left: copy + CTAs (5/12 cols on desktop) */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue-strong">
              {t("eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-brand-navy sm:text-5xl lg:text-[56px] xl:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-neutral-600 sm:text-lg">
              {t("subtitle")}
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-navy px-6 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-[#152547] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {tCta("primary")}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
              <Link
                href="#platform"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-neutral-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
              >
                {tCta("viewPlatform")}
              </Link>
            </div>
          </div>

          {/* Right: 4-mockup ecosystem composition (7/12 cols on desktop) */}
          <div className="lg:col-span-7">
            <EcosystemComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
