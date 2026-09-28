import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./lib/i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  // Off on purpose. With it on, the bare domain answered on Accept-Language, so
  // Googlebot (which crawls as en-US) was 307'd to /en while every canonical and
  // the x-default point at /fr — contradictory signals about which version is
  // the primary one. It only ever affected "/" : every real URL carries its own
  // /{locale} prefix and that prefix always wins. Cost of the change: typing
  // carebond.ch always lands on French, and a returning visitor's NEXT_LOCALE
  // cookie is no longer honoured there either (in next-intl this one flag
  // governs cookie and Accept-Language together). Flip back to true to undo.
  localeDetection: false,
  // The HTML <link rel="alternate"> tags from generateMetadata are the single
  // source of hreflang. The middleware's Link header duplicated them, disagreed
  // on x-default (header said "/", HTML says "/fr"), and was emitted on 404s
  // too, advertising six non-existent URLs per error.
  alternateLinks: false,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
