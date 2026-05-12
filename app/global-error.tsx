"use client";

import { useEffect } from "react";

// global-error.tsx handles errors thrown by the root layout itself (rare,
// since our root layout is a pass-through). Must render its own <html>/<body>
// because the layout that normally provides them threw. Hardcoded bilingual
// FR/EN — at this depth we cannot rely on next-intl having mounted.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("GlobalError caught:", error);
  }, [error]);

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
          lineHeight: 1.5,
        }}
      >
        <main style={{ maxWidth: "36rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#2563EB",
              marginBottom: "2rem",
            }}
          >
            500
          </p>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Erreur inattendue
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "#6C7688",
              margin: "0.75rem 0 0 0",
            }}
          >
            Unexpected error
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#565656",
              marginTop: "1.5rem",
              lineHeight: 1.6,
            }}
          >
            Quelque chose s&apos;est mal passé.
            <br />
            Something went wrong.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2.5rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "3rem",
              padding: "0 2rem",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "1rem",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Réessayer / Try again
          </button>
        </main>
      </body>
    </html>
  );
}
