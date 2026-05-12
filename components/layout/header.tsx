"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import { SolutionsDropdown } from "./solutions-dropdown";

const NAV_ITEMS = ["features", "compliance", "about", "contact"] as const;

export function Header({ locale }: { locale: string }) {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-40 transition-colors duration-200 ease-out motion-reduce:transition-none data-[scrolled=true]:border-b data-[scrolled=true]:border-neutral-200 data-[scrolled=true]:bg-white/90 data-[scrolled=true]:backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          aria-label={t("header.logoAriaLabel")}
          className="inline-flex items-center rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        >
          <Image
            src="/logos/carebond-logo.png"
            alt=""
            width={2481}
            height={2291}
            priority
            sizes="40px"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-base font-semibold tracking-tight text-brand-navy">
            CareBond
          </span>
        </Link>

        <nav
          aria-label={t("header.navAriaLabel")}
          className="hidden items-center gap-1 lg:flex"
        >
          <SolutionsDropdown locale={locale} />
          {NAV_ITEMS.map((key) => (
            <Link
              key={key}
              href={`/${locale}/${key}`}
              className="inline-flex min-h-12 items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Link
            href={`/${locale}/contact`}
            className="inline-flex min-h-12 items-center rounded-lg bg-brand-blue-strong px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
          >
            {t("nav.demo")}
          </Link>
        </div>
      </div>
    </header>
  );
}
