import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";
import { ContactForm } from "@/components/marketing/contact/contact-form";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });

  const languages = Object.fromEntries(
    locales.map((l) => [
      l,
      `${SITE_URL}/${l}/contact`,
    ]),
  );

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}/${locale}/contact`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/contact` },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tPage = await getTranslations("contact.page");
  const tSide = await getTranslations("contact.sidebar");

  return (
    <main id="main-content" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
            {tPage("eyebrow")}
          </p>
          <h1 className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.028em] text-brand-navy sm:text-[2.75rem] lg:text-[3.25rem]">
            {tPage("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-[17px]">
            {tPage("subtitle")}
          </p>
        </div>

        {/* Form + sidebar */}
        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Form column */}
          <div className="lg:col-span-7">
            <ContactForm locale={locale} />
          </div>

          {/* Direct contact sidebar */}
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/40 p-8 sm:p-10">
              <h2 className="text-lg font-semibold tracking-tight text-brand-navy">
                {tSide("title")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {tSide("description")}
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-strong">
                    <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {tSide("emailLabel")}
                    </p>
                    <a
                      href="mailto:contact@carebond.ch"
                      className="mt-1 inline-block text-sm font-semibold text-brand-navy hover:text-brand-blue-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    >
                      contact@carebond.ch
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-strong">
                    <MapPin size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {tSide("locationLabel")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-navy">
                      {tSide("locationValue")}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-strong">
                    <Clock size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {tSide("responseLabel")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-navy">
                      {tSide("responseValue")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
