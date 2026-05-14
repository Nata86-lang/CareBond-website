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
  es: "ES",
};

type Variant = "header" | "footer";

const VARIANT_STYLES: Record<
  Variant,
  { active: string; inactive: string }
> = {
  // Light surface (header): brand-navy active, neutral-700 inactive (7.8:1)
  header: {
    active: "text-brand-navy",
    inactive:
      "text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
  },
  // Dark surface (footer on brand-navy): white active, white/70 inactive
  // (still > 14:1 on #0a1b39, well above AA).
  footer: {
    active: "text-white",
    inactive:
      "text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  },
};

export function LanguageSwitcher({ variant = "header" }: { variant?: Variant } = {}) {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const styles = VARIANT_STYLES[variant];

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
  // buttons do not collide on touch. Colors swap with variant so the
  // component is reusable on light (header) and dark (footer) surfaces
  // without per-call className hacks.
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
              (isActive ? styles.active : styles.inactive)
            }
          >
            {LABELS[locale]}
          </button>
        );
      })}
    </nav>
  );
}
