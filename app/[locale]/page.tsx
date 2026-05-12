import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";

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
  const t = await getTranslations("hero");

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {t("stubGreeting")}
      </h1>
    </main>
  );
}
