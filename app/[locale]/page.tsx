import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[calc(100vh-65px)] max-w-7xl flex-col items-center justify-center gap-6 px-6 py-16 text-center lg:px-8"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-brand-blue">
        {t("eyebrow")}
      </p>
      <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
        {t("stubGreeting")}
      </h1>
      <p className="max-w-xl text-balance text-base text-neutral-500 sm:text-lg">
        {t("stubSubtitle")}
      </p>
    </main>
  );
}
