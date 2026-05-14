import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, OG_LOCALE_MAP } from "@/lib/site";

// Dynamic stub for the five platform pillars. Each pillar gets its own
// route (e.g. /fr/platform/oversight) but shares the same minimal
// scaffold: title pulled from the bento copy, shared "coming soon" body,
// back-to-home link. Full content pages are Phase 2.
//
// SSG: 5 slugs × 4 locales = 20 static pages. Invalid slugs hit
// notFound() at build (skipped via generateStaticParams returning only
// known combos) and at runtime fall through to the [...rest] 404 route.

const VALID_SLUGS = [
  "oversight",
  "audit",
  "livestream",
  "chat-multilingue",
  "rounds",
  "floor-plans",
] as const;
type Slug = (typeof VALID_SLUGS)[number];

function isValidSlug(s: string): s is Slug {
  return (VALID_SLUGS as readonly string[]).includes(s);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    VALID_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) return {};
  const t = await getTranslations({ locale, namespace: "platform.bento.pillars" });
  const title = `${t(`${slug}.title`)} — ${SITE_NAME}`;
  const description = t(`${slug}.description`);

  const languages = Object.fromEntries(
    locales.map((l) => [
      l === "en" ? "en" : `${l}-CH`,
      `${SITE_URL}/${l}/platform/${slug}`,
    ]),
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/platform/${slug}`,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale] ?? "fr_CH",
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/platform/${slug}`,
      languages: { ...languages, "x-default": `${SITE_URL}/fr/platform/${slug}` },
    },
  };
}

export default async function PlatformStubPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) notFound();
  setRequestLocale(locale);

  const tPillars = await getTranslations("platform.bento.pillars");
  const tStub = await getTranslations("platform.stubShared");

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[calc(100vh-72px)] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-16 text-center lg:px-8"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
        {tPillars(`${slug}.eyebrow`)}
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
        {tPillars(`${slug}.title`)}
      </h1>
      <p className="max-w-xl text-balance text-base leading-relaxed text-neutral-600 sm:text-lg">
        {tPillars(`${slug}.description`)}
      </p>
      <p className="max-w-xl text-balance text-base leading-relaxed text-neutral-500">
        {tStub("intro")}
      </p>
      <p className="text-base text-neutral-700">
        {tStub("emailLead")}{" "}
        <a
          href="mailto:contact@carebond.ch"
          className="font-semibold text-brand-blue-strong underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          contact@carebond.ch
        </a>
      </p>
      <Link
        href={`/${locale}`}
        className="inline-flex min-h-12 items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        ← {tStub("backToHome")}
      </Link>
    </main>
  );
}
