// Canonical site URL. Read from NEXT_PUBLIC_SITE_URL when available so Vercel
// preview/production deploys can override per environment. Falls back to the
// future production domain.
// TODO: replace fallback with real domain once carebond.ch is registered.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://carebond.ch").replace(
  /\/$/,
  ""
);

export const SITE_NAME = "CareBond";

export const OG_LOCALE_MAP: Record<string, string> = {
  fr: "fr_CH",
  de: "de_CH",
  it: "it_CH",
  en: "en_US",
};
