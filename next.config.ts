import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

// Security headers per TECH_SPEC §3. Content-Security-Policy is deliberately
// not set yet — it requires inventorying every third party (Cal.com, Resend,
// Plausible, Turnstile) which lands in Phase 1D when those integrations are
// wired up.
const baseSecurityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// Index-allow list. A deployment is crawlable when Vercel reports it as the
// production one, or when NEXT_PUBLIC_SITE_URL matches one of these exact
// values. Everything else (preview deploys, vercel.app aliases, dev) still
// gets X-Robots-Tag noindex, so a preview can never leak into Google.
const PRODUCTION_INDEX_URLS = ["https://carebond.ch", "https://www.carebond.ch"];

// VERCEL_ENV is injected by Vercel itself and only ever reads "production" on the
// production deployment — previews and dev builds get "preview"/"development".
// Trusting it first is what makes the defensive default safe: before this, a
// production build where nobody had set NEXT_PUBLIC_SITE_URL fell through to the
// noindex branch, so every page on www.carebond.ch shipped
// `X-Robots-Tag: noindex, nofollow` and Google was told, correctly, never to
// index the site. That is the whole reason carebond.ch returned no results.
// NEXT_PUBLIC_SITE_URL stays as the manual override for non-Vercel hosting.
const allowIndexing =
  process.env.VERCEL_ENV === "production" ||
  PRODUCTION_INDEX_URLS.includes(process.env.NEXT_PUBLIC_SITE_URL ?? "");

const securityHeaders = allowIndexing
  ? baseSecurityHeaders
  : [
      ...baseSecurityHeaders,
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
    ];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Allowed image quality values (required by Next.js 16).
    qualities: [75, 85, 90],
    // Capped at 1920: nothing on this site is displayed wider than that, and
    // the default list tops out at 3840, so one <Image> with a missing `sizes`
    // was enough to ship a 4K variant.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Brand and content images changed only on deploy but were served
        // `max-age=0, must-revalidate`, so every visit re-requested them.
        // A day, not a year, and deliberately not `immutable`: these paths
        // carry no content hash, so a logo change has to be able to land.
        source: "/:dir(logos|og|images)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
