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

  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-sm">
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
              isActive
                ? "px-2 py-1 font-medium text-brand-navy"
                : "px-2 py-1 text-neutral-500 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            }
          >
            {LABELS[locale]}
          </button>
        );
      })}
    </nav>
  );
}
