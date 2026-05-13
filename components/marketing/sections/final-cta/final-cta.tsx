import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";

// Section 10b — Final CTA. Closing band of the home page. Centered
// showcase card on bg-neutral-50 with a primary "Demander une démo" CTA
// pointing to /contact and a secondary "Write us" mailto fallback.
//
// Server component, single ArrowRight icon. The bordered card matches
// the visual grammar of Section 4 Pour qui — closes the page on the
// same "card-driven editorial" rhythm it opened with.
export async function FinalCTA({ locale }: { locale: string }) {
  const t = await getTranslations("finalCta");
  const tCta = await getTranslations("cta");

  return (
    <section
      id="cta"
      className="border-t border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-white p-10 text-center shadow-mockup-lg sm:p-14 lg:p-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
            {t("eyebrow")}
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.028em] text-brand-navy sm:text-[2.5rem] lg:text-[3rem]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#152547] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
            >
              {tCta("primary")}
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
            <a
              href="mailto:contact@carebond.ch"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
            >
              {t("secondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
