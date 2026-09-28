"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { locales } from "@/lib/i18n";

const LABELS: Record<(typeof locales)[number], string> = {
  fr: "FR",
  de: "DE",
  it: "IT",
  en: "EN",
  es: "ES",
  ca: "CA",
};

type Variant = "header" | "footer";

// Header surface (light): the switcher renders as a compact dropdown
// to leave room for the logo + nav on narrow viewports — 5 inline
// 48×48 buttons would push past the brand on phones.
// Footer surface (dark, lots of space): all locales inline
// so a visitor can switch language without an extra click.
//
// These are real <Link>s, not buttons calling router.replace(). They used to be
// buttons, which meant the five translated versions of the site had no inbound
// link anywhere — a crawler could reach /fr and nothing else, so /de, /it, /en,
// /es and /ca were effectively invisible. The hreflang tags alone are a hint;
// links are what actually gets followed.
export function LanguageSwitcher({ variant = "header" }: { variant?: Variant } = {}) {
  const currentLocale = useLocale();
  const pathname = usePathname();

  // pathname always starts with "/{locale}" (localePrefix: "always"); swap it.
  const hrefFor = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || "/";
  };

  if (variant === "footer") {
    return (
      <nav aria-label="Language" className="flex items-center text-sm">
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          const className =
            "inline-flex min-h-12 min-w-12 items-center justify-center rounded-md px-2 py-3 font-medium " +
            (isActive
              ? "text-white"
              : "text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white");

          // The current language is plain text, never a link to itself: a
          // self-referencing link on every page is noise for a crawler.
          return isActive ? (
            <span key={locale} aria-current="true" className={className}>
              {LABELS[locale]}
            </span>
          ) : (
            <Link
              key={locale}
              href={hrefFor(locale)}
              hrefLang={locale}
              // Don't pull five locale bundles down on hover.
              prefetch={false}
              className={className}
            >
              {LABELS[locale]}
            </Link>
          );
        })}
      </nav>
    );
  }

  return <HeaderDropdown currentLocale={currentLocale} hrefFor={hrefFor} />;
}

function HeaderDropdown({
  currentLocale,
  hrefFor,
}: {
  currentLocale: string;
  hrefFor: (locale: string) => string;
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
        className="inline-flex min-h-10 items-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
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
      {/* Rendered always, hidden with display:none when closed, so the five
          locale links are in the served HTML for a crawler to follow. `hidden`
          specifically — opacity-0/invisible would leave them in the tab order. */}
      <ul
        id={menuId}
        role="menu"
        className={
          (open ? "" : "hidden ") +
          "absolute right-0 top-full z-50 mt-1 min-w-[100px] rounded-lg border border-neutral-200 bg-white p-1 shadow-md"
        }
      >
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          const className =
            "block w-full rounded-md px-3 py-2 text-left text-sm font-medium " +
            (isActive
              ? "bg-neutral-100 text-brand-navy"
              : "text-neutral-700 hover:bg-neutral-100 hover:text-brand-navy focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue");

          return (
            <li key={locale} role="none">
              {isActive ? (
                <span role="menuitem" aria-current="true" className={className}>
                  {LABELS[locale]}
                </span>
              ) : (
                <Link
                  role="menuitem"
                  href={hrefFor(locale)}
                  hrefLang={locale}
                  prefetch={false}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {LABELS[locale]}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
