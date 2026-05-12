import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page introuvable / Not Found — CareBond",
  description: "This page does not exist. / Cette page n'existe pas.",
  robots: { index: false, follow: false },
};

// Global 404 page lives OUTSIDE the [locale] segment to bypass a Next 15.5
// streaming bug where async LocaleLayout + notFound() produces an empty SSR
// body with RSC-only content. Self-contained: own <html>/<body>, inline
// styles, no next-intl, no async. Bilingual FR/EN hardcoded.
// TODO(V2): revisit when next-intl/next upstream resolves the streaming bug
// so we can share Header/Footer and localize across all four locales.
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          padding: "4rem 1.5rem",
          fontFamily:
            'Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: "#FFFFFF",
          color: "#0A1B39",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <main style={{ maxWidth: "36rem" }}>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2563EB",
              marginBottom: "1.5rem",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Page introuvable
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "#6C7688",
              margin: "0.75rem 0 0 0",
            }}
          >
            Page not found
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#565656",
              marginTop: "1.5rem",
              lineHeight: 1.6,
            }}
          >
            Cette page n&apos;existe pas (ou plus).
            <br />
            This page doesn&apos;t exist (anymore).
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/fr"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "3rem",
                padding: "0 2rem",
                borderRadius: "0.5rem",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/en"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "3rem",
                padding: "0 2rem",
                borderRadius: "0.5rem",
                border: "1px solid #E7E8EB",
                color: "#0A1B39",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Back to home (EN)
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
