import { setRequestLocale } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/sections/how-it-works/how-it-works";
import { PourQui } from "@/components/marketing/sections/pour-qui/pour-qui";
import { PlatformBento } from "@/components/marketing/sections/platform/platform-bento";
import { SoignerSansSilos } from "@/components/marketing/sections/soigner-sans-silos/soigner-sans-silos";
import { ModuleResidences } from "@/components/marketing/sections/module-residences/module-residences";
import { FloorPlans } from "@/components/marketing/sections/floor-plans/floor-plans";
import { ChatMultilingue } from "@/components/marketing/sections/chat-multilingue/chat-multilingue";
import { Compliance } from "@/components/marketing/sections/compliance/compliance";
import { FAQ } from "@/components/marketing/sections/faq/faq";
import { FinalCTA } from "@/components/marketing/sections/final-cta/final-cta";

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
      <HowItWorks />
      <PourQui />
      <PlatformBento locale={locale} />
      <SoignerSansSilos />
      <ChatMultilingue locale={locale} />
      <ModuleResidences />
      <FloorPlans locale={locale} />
      <Compliance />
      <FAQ />
      <FinalCTA locale={locale} />
    </main>
  );
}
