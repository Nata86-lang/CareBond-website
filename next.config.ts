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

// Index-allow list. Only deployments whose NEXT_PUBLIC_SITE_URL matches one
// of these exact values are crawlable by search engines. Everything else
// (preview deploys, vercel.app aliases, dev) gets X-Robots-Tag noindex.
// Defensive default: undefined or unrecognized SITE_URL → noindex. That way
// forgetting to set the env var never accidentally exposes a preview to
// Google.
const PRODUCTION_INDEX_URLS = ["https://carebond.ch", "https://www.carebond.ch"];
const allowIndexing = PRODUCTION_INDEX_URLS.includes(
  process.env.NEXT_PUBLIC_SITE_URL ?? ""
);

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
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
