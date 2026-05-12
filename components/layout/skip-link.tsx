import { getTranslations } from "next-intl/server";

// Skip link is the first focusable element. It is visually hidden until
// focused, then jumps to <main id="main-content">. Required for WCAG 2.4.1
// and called out in BRAND_GUIDELINES §9.
export async function SkipLink() {
  const t = await getTranslations("common");
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
    >
      {t("skipLink")}
    </a>
  );
}
