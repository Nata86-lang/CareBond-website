// Con www: es el host que Vercel sirve como principal — el apex carebond.ch
// responde 308 hacia www. Un canonical hacia el apex apunta a una redireccion,
// que es una senal debil y demora la indexacion. Si algun dia el apex pasa a ser
// el principal en Vercel, este valor tiene que cambiar con el.
export const PRODUCTION_URL = "https://www.carebond.ch";

// Canonical site URL. NEXT_PUBLIC_SITE_URL can still override it per environment,
// but a *.vercel.app value is ignored on purpose: those deploys answer with
// `X-Robots-Tag: noindex, nofollow`, so emitting one as the canonical of
// carebond.ch told Google the real page was a URL it must not index, and kept the
// whole site out of the results.
const override = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");

export const SITE_URL =
  override && !/^https?:\/\/[^/]*\.vercel\.app$/i.test(override) ? override : PRODUCTION_URL;

export const SITE_NAME = "CareBond";

export const OG_LOCALE_MAP: Record<string, string> = {
  fr: "fr_CH",
  de: "de_CH",
  it: "it_CH",
  en: "en_US",
  es: "es_ES",
  ca: "ca_ES",
};
