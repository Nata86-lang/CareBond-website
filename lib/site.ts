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
const rawOverride = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");

// The apex is a 308 to www, so an apex override would canonicalise every page to a
// redirect. Fold it to www rather than honouring it literally.
const override = rawOverride.replace(/^https:\/\/carebond\.ch$/i, PRODUCTION_URL);

export const SITE_URL =
  override && !/^https?:\/\/[^/]*\.vercel\.app$/i.test(override) ? override : PRODUCTION_URL;

export const SITE_NAME = "CareBond";

// Google Search Console ownership token, for a URL-prefix property
// (https://www.carebond.ch/). Paste ONLY the value of the content="..."
// attribute from the meta tag Search Console shows — not the whole tag.
//
// This route exists so that verification needs nothing from the DNS at
// SiteGround: the tag ships with the next deploy and Search Console reads it
// straight off the live page. A "Domain" property would cover the apex and every
// subdomain at once, but Google only verifies those by DNS TXT.
//
// Empty string = no tag emitted at all, which is the correct default.
export const GOOGLE_SITE_VERIFICATION = "hM1Nysoergnn1NY0XKJC2Rs7T5HA1UfQaLIQJNoH9wM";

export const OG_LOCALE_MAP: Record<string, string> = {
  fr: "fr_CH",
  de: "de_CH",
  it: "it_CH",
  en: "en_US",
  es: "es_ES",
  ca: "ca_ES",
};
