import type { ReactNode } from "react";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SkipLink } from "@/components/layout/skip-link";
import "../globals.css";

// next/font/google self-hosts at build time: fonts land in
// /_next/static/media/, no runtime requests to Google CDN. Cumple el spec
// "self-host en /public/fonts/" con mejor subset + preload automáticos.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Next 15.5 enforces that `params` is typed with a plain string here; we
// narrow to Locale at runtime via the locales.includes guard.
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={outfit.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SkipLink />
          <header className="border-b border-neutral-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
              <span className="text-base font-semibold tracking-tight text-brand-navy">
                CareBond
              </span>
              <LanguageSwitcher />
            </div>
          </header>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
