import { setRequestLocale } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { Hero } from "@/components/marketing/hero";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content">
      <Hero locale={locale} />
    </main>
  );
}
