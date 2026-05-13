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
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Left: copy + CTAs */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-strong">
              {t("eyebrow")}
            </p>
            <h1 className="mt-6 whitespace-pre-line text-balance font-bold leading-[1.05] tracking-[-0.02em] text-brand-navy text-[clamp(2.5rem,8vw,7rem)]">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-blue-strong px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
              >
                {tCta("primary")}
              </Link>
              <Link
                href="#platform"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-base font-semibold text-brand-navy transition-colors duration-150 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
              >
                {tCta("viewPlatform")}
              </Link>
            </div>
          </div>

          {/* Right: 4-mockup ecosystem composition */}
          <div className="relative pt-10 lg:pt-0">
            <EcosystemComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
