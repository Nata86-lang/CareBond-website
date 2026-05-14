import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Check, Globe2, MapPin, RefreshCcw, UserCheck } from "lucide-react";
import { ChatMultilingualDemo } from "./chat-multilingue-demo";

// Section 9 — Chat multilingue feature spotlight. The demo extracted in
// sub-commit A finally lands here as the centerpiece of its own section,
// not borrowed by the Hero. Layout: copy + three signature bullets on
// the left, the live looping demo card on the right.
//
// bg-neutral-50 alternates the rhythm from the previous bg-white module
// section. The demo card is the only client component on the page below
// the Pour qui tabs — every other section is pure server.

const BULLET_KEYS = ["b0", "b1", "b2", "b3"] as const;

const BULLET_ICONS = [RefreshCcw, MapPin, Globe2, UserCheck];

export async function ChatMultilingue({ locale }: { locale: string }) {
  const t = await getTranslations("chatMultilingue");

  return (
    <section
      id="chat-multilingue"
      className="border-t border-neutral-200 bg-neutral-50"
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

        {/* Copy left + demo right */}
        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left: bullets + CTA */}
          <div className="lg:col-span-5">
            <ul className="space-y-5">
              {BULLET_KEYS.map((k, i) => {
                const Icon = BULLET_ICONS[i] ?? Check;
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
              href={`/${locale}/platform/chat-multilingue`}
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-strong hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {t("learnMore")}
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>

          {/* Right: live demo */}
          <div className="lg:col-span-7">
            <div className="mx-auto w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-3 shadow-mockup-lg sm:p-4">
              <div className="overflow-hidden rounded-2xl bg-neutral-50">
                <ChatMultilingualDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
