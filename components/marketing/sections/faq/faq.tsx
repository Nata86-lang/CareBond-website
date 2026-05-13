import { getTranslations } from "next-intl/server";
import { Plus } from "lucide-react";

// Section 10a — FAQ. Native <details>/<summary> for zero-JS accordion.
// Each question expands inline. The `[&[open]_.faq-icon]:rotate-45`
// arbitrary selector rotates the + into × when the details is open.
//
// Six questions covering the most common B2B prospect concerns:
// onboarding time, EMR compatibility, exit/portability, pricing,
// cantonal coverage, contract length.

const QUESTION_KEYS = ["q0", "q1", "q2", "q3", "q4", "q5"] as const;

export async function FAQ() {
  const t = await getTranslations("faq");

  return (
    <section
      id="faq"
      className="border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Header */}
        <div>
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

        {/* Questions list */}
        <div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200 sm:mt-16">
          {QUESTION_KEYS.map((k) => (
            <details
              key={k}
              className="group py-5 sm:py-6"
            >
              <summary className="flex cursor-pointer items-start gap-4 rounded-lg list-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue">
                <span className="flex-1 text-base font-semibold tracking-tight text-brand-navy sm:text-lg">
                  {t(`questions.${k}.question`)}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
                  <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl pr-12 text-[15px] leading-relaxed text-neutral-600">
                {t(`questions.${k}.answer`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
