"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

// Radix's Dialog, which the Sheet is built on, is ~63 KB and was in the shared
// client bundle of every page on every device, purely to power a menu that only
// exists below the lg breakpoint and that most visitors never open. The panel is
// now its own chunk, fetched on the first tap.
//
// ssr: false because the panel renders nothing until it is open — there is no
// server markup to match, and keeping it out of SSR is what removes it from the
// initial payload.
const MobileNavSheet = dynamic(
  () => import("./mobile-nav-sheet").then((m) => m.MobileNavSheet),
  { ssr: false },
);

export function MobileNav({ locale }: { locale: string }) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  // Once opened, stay mounted: the close animation needs the component alive,
  // and reopening should not re-fetch the chunk.
  const [mounted, setMounted] = useState(false);

  return (
    <>
      {/* Always rendered and never code-split, so the menu button is present
          from first paint even before the panel chunk has been fetched. */}
      <button
        type="button"
        aria-label={t("header.mobileMenuOpen")}
        aria-expanded={open}
        onClick={() => {
          setMounted(true);
          setOpen(true);
        }}
        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue lg:hidden"
      >
        <Menu size={24} aria-hidden="true" />
      </button>
      {mounted && (
        <MobileNavSheet locale={locale} open={open} onOpenChange={setOpen} />
      )}
    </>
  );
}
