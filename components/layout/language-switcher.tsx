"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { locales } from "@/lib/i18n";

const LABELS: Record<(typeof locales)[number], string> = {
  fr: "FR",
  de: "DE",
  it: "IT",
  en: "EN",
  es: "ES",
};

type Variant = "header" | "footer";

// Header surface (light): the switcher renders as a compact dropdown
// to leave room for the logo + nav on narrow viewports — 5 inline
// 48×48 buttons would push past the brand on phones.
// Footer surface (dark, lots of space): all locales inline as buttons
// so a visitor can switch language without an extra click.
export function LanguageSwitcher({ variant = "header" }: { variant?: Variant } = {}) {
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

  if (variant === "footer") {
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
                  ? "text-white"
                  : "text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white")
              }
            >
              {LABELS[locale]}
            </button>
          );
        })}
      </nav>
    );
  }

  return <HeaderDropdown currentLocale={currentLocale} switchTo={switchTo} isPending={isPending} />;
}

function HeaderDropdown({
  currentLocale,
  switchTo,
  isPending,
}: {
  currentLocale: string;
  switchTo: (locale: string) => void;
  isPending: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activeLabel =
    LABELS[currentLocale as keyof typeof LABELS] ?? currentLocale.toUpperCase();

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="Language"
        disabled={isPending}
        className="inline-flex min-h-10 items-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-60"
      >
        {activeLabel}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={
            open
              ? "rotate-180 transition-transform duration-150 motion-reduce:transition-none"
              : "transition-transform duration-150 motion-reduce:transition-none"
          }
        />
      </button>
      {open && (
        <ul
          id={menuId}
          role="menu"
          className="absolute right-0 top-full z-50 mt-1 min-w-[100px] rounded-lg border border-neutral-200 bg-white p-1 shadow-md"
        >
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            return (
              <li key={locale} role="none">
                <button
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    switchTo(locale);
                  }}
                  disabled={isActive || isPending}
                  aria-current={isActive ? "true" : undefined}
                  className={
                    "block w-full rounded-md px-3 py-2 text-left text-sm font-medium " +
                    (isActive
                      ? "bg-neutral-100 text-brand-navy"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-brand-navy focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue")
                  }
                >
                  {LABELS[locale]}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
