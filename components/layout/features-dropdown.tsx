"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

// Mirror of SolutionsDropdown, but for the 6 platform pillars instead
// of the 4 audience landings. The slugs (and translations) come from
// platform.bento.pillars.{slug}.title so the dropdown stays in sync
// with the bento on the home and the deep dives at /platform/{slug}.

const FEATURES = [
  "oversight",
  "audit",
  "livestream",
  "chat-multilingue",
  "rounds",
  "floor-plans",
] as const;

export function FeaturesDropdown({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const tPillars = useTranslations("platform.bento.pillars");
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

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="inline-flex min-h-12 items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        {t("features")}
        <ChevronDown
          size={16}
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
          className="absolute left-0 top-full z-50 mt-1 min-w-[260px] rounded-lg border border-neutral-200 bg-white p-2 shadow-md"
        >
          {FEATURES.map((slug) => (
            <li key={slug} role="none">
              <Link
                role="menuitem"
                href={`/${locale}/platform/${slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-brand-navy focus-visible:bg-neutral-100 focus-visible:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {tPillars(`${slug}.title`)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
