"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

const SOLUTIONS = [
  { slug: "ems", key: "ems" },
  { slug: "home-care", key: "homeCare" },
  { slug: "hospitals", key: "hospitals" },
  { slug: "professionals", key: "professionals" },
] as const;

const NAV_DIRECT = ["features", "compliance", "about", "contact"] as const;

export function MobileNav({ locale }: { locale: string }) {
  const t = useTranslations();
  const tMenu = useTranslations("nav.solutionsMenu");
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={t("header.mobileMenuOpen")}
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue lg:hidden"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="!w-full bg-white p-0 text-brand-navy sm:!max-w-sm"
      >
        <SheetTitle className="sr-only">
          {t("header.navAriaLabel")}
        </SheetTitle>
        <div className="flex h-full flex-col">
          {/* Top bar: brand + close */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <Link
              href={`/${locale}`}
              aria-label={t("header.logoAriaLabel")}
              onClick={close}
              className="inline-flex items-center text-base font-semibold tracking-tight text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              CareBond
            </Link>
            <button
              type="button"
              onClick={close}
              aria-label={t("header.mobileMenuClose")}
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Nav body */}
          <nav
            aria-label={t("header.navAriaLabel")}
            className="flex-1 overflow-y-auto px-2 py-4"
          >
            <details className="group">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">
                <span>{t("nav.solutions")}</span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-150 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <ul className="mt-1 space-y-0.5 pl-2">
                {SOLUTIONS.map(({ slug, key }) => (
                  <li key={slug}>
                    <Link
                      href={`/${locale}/solutions/${slug}`}
                      prefetch={false}
                      onClick={close}
                      className="block min-h-12 rounded-md px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    >
                      {tMenu(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {NAV_DIRECT.map((key) => (
              <Link
                key={key}
                href={`/${locale}/${key}`}
                prefetch={key === "contact" ? undefined : false}
                onClick={close}
                className="block min-h-12 rounded-md px-4 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </nav>

          {/* Footer: CTA + language switcher */}
          <div className="space-y-4 border-t border-neutral-200 px-4 py-4">
            <Link
              href={`/${locale}/contact`}
              onClick={close}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-blue-strong px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
            >
              {t("nav.demo")}
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
