import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { AdminDashboard } from "./hero/mockups/admin-dashboard";

// Hero — Phase 1B v4. Linear-inspired editorial composition.
//
// Left-aligned giant headline, asymmetric weight, certification strip as a
// trust anchor (substitute for customer logos until we have public refs),
// and the dashboard mockup deployed wide below as the single product
// visual. The chat-multilingue demo moves to Section 9 in the planned IA.
//
// Why a single wide visual instead of a side-by-side composition: Linear,
// Stripe, Mercury all do this. One dominant product surface communicates
// "this is the thing" louder than four overlapping mockups. The numbered
// sections (1.0 / 2.0 / 3.0) below the hero pick up the story arc.
export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations("hero");
  const tCta = await getTranslations("cta");

  const trust = [
    t("trust.nlpd"),
    t("trust.hosting"),
    t("trust.encryption"),
    t("trust.swissMade"),
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8 lg:pt-28">
        {/* Eyebrow — category label, small caps, brand blue */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
          {t("eyebrow")}
        </p>

        {/* H1 — giant, left-aligned, naturally wraps to 2 lines */}
        <h1 className="mt-6 max-w-[18ch] text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-[2.75rem] sm:leading-[1] sm:tracking-[-0.035em] md:text-[3.5rem] lg:text-[4.5rem] lg:leading-[0.98] xl:max-w-[20ch] xl:text-[5.5rem]">
          {t("title")}
        </h1>

        {/* Subtitle — left-aligned, max-w prose, neutral-600 for hierarchy */}
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px] lg:text-lg">
          {t("subtitle")}
        </p>

        {/* CTAs */}
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

        {/* Trust strip — certification anchors, dot separated, neutral-500 */}
        <div className="mt-14 border-t border-neutral-200 pt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            {t("trust.label")}
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-700 sm:text-sm"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-brand-blue-strong/70"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dashboard mockup — wide, centered, depth shadow.
          On phones the dashboard's laptop-sized layout (sidebar 176px
          + dense main grid) would squash unreadably under 768px, so
          we wrap it in a horizontal-scroll container with a min-width
          that preserves the desktop layout. The user can swipe right
          to see the rest. md+ keeps the natural full-width render. */}
      <div className="relative mx-auto mt-16 max-w-6xl pb-24 sm:mt-20 sm:px-6 lg:px-8 lg:pb-32">
        <div
          aria-hidden="true"
          className="overflow-x-auto px-6 pb-2 [scrollbar-width:thin] md:overflow-x-visible md:px-0 md:pb-0"
        >
          <div className="min-w-[960px] md:min-w-0">
            <AdminDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
