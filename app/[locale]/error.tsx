"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

// Error boundary for routes under [locale]. Client component per Next 15
// contract for error.tsx. Receives error + reset from Next.
//
// We deliberately use next-intl client hooks here (NOT next-intl/server)
// because:
//   1. error.tsx must be a client component, so server APIs are unavailable
//   2. The Header/Footer/NextIntlClientProvider stay mounted around this
//      boundary, so useTranslations() reads from the existing client
//      provider context without any of the streaming/Suspense issues that
//      affected not-found.tsx during commit 4.
export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations("error");

  useEffect(() => {
    // Log to console in dev; in prod this should flow to an error tracker
    // (Sentry/Plausible custom event) once that integration lands.
    console.error("LocaleError caught:", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-24 text-center lg:px-8 lg:py-32"
    >
      <p
        aria-hidden="true"
        className="text-sm font-medium uppercase tracking-widest text-brand-blue-strong"
      >
        500
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-brand-navy [letter-spacing:-0.02em] lg:text-6xl">
        {t("title")}
      </h1>
      <p className="text-lg text-neutral-600">{t("subtitle")}</p>
      <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-blue-strong px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
        >
          {t("retry")}
        </button>
        <Link
          href={`/${locale}`}
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors duration-150 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}
