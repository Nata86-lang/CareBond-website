"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const SOLUTIONS = [
  { key: "ems", slug: "ems" },
  { key: "homeCare", slug: "home-care" },
  { key: "hospitals", slug: "hospitals" },
  { key: "professionals", slug: "professionals" },
] as const;

export function SolutionsDropdown({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const tMenu = useTranslations("nav.solutionsMenu");
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
        {t("solutions")}
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
          className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-lg border border-neutral-200 bg-white p-2 shadow-md"
        >
          {SOLUTIONS.map(({ key, slug }) => (
            <li key={key} role="none">
              <Link
                role="menuitem"
                href={`/${locale}/solutions/${slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-brand-navy focus-visible:bg-neutral-100 focus-visible:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {tMenu(key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
