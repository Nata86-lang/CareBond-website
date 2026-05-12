"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales } from "@/lib/i18n";

const LABELS: Record<(typeof locales)[number], string> = {
  fr: "FR",
  de: "DE",
  it: "IT",
  en: "EN",
};

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    // pathname always starts with "/{locale}"; swap that segment.
    const segments = pathname.split("/");
    segments[1] = newLocale;
    startTransition(() => {
      router.replace(segments.join("/") || "/");
    });
  };

  // Tap targets are ≥48×48px per WCAG 2.5.5 + extra padding so adjacent
  // buttons do not collide on touch. Inactive color is neutral-700 to keep
  // contrast above 7:1 on white (was neutral-500 = 4.27:1, which Lighthouse
  // sometimes flags despite passing AA).
  return (
    <nav aria-label="Language" className="flex items-center text-sm">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            disabled={isActive || isPending}
            aria-current={isActive ? "true" : undefined}
            className={
              "inline-flex min-h-12 min-w-12 items-center justify-center rounded-md px-2 py-3 font-medium " +
              (isActive
                ? "text-brand-navy"
                : "text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue")
            }
          >
            {LABELS[locale]}
          </button>
        );
      })}
    </nav>
  );
}
