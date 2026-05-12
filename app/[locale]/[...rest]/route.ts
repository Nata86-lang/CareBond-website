import { NextRequest } from "next/server";

type Locale = "fr" | "de" | "it" | "en";
const LOCALES: Locale[] = ["fr", "de", "it", "en"];

const T = {
  fr: {
    lang: "fr",
    htmlTitle: "404 — Page introuvable — CareBond",
    eyebrow: "404",
    title: "Page introuvable",
    subtitle: "Cette page n'existe pas (ou plus).",
    ctaHome: "Retour à l'accueil",
    ctaContact: "Nous contacter",
  },
  de: {
    lang: "de",
    htmlTitle: "404 — Seite nicht gefunden — CareBond",
    eyebrow: "404",
    title: "Seite nicht gefunden",
    subtitle: "Diese Seite existiert nicht (mehr).",
    ctaHome: "Zur Startseite",
    ctaContact: "Kontakt aufnehmen",
  },
  it: {
    lang: "it",
    htmlTitle: "404 — Pagina non trovata — CareBond",
    eyebrow: "404",
    title: "Pagina non trovata",
    subtitle: "Questa pagina non esiste (più).",
    ctaHome: "Torna alla home",
    ctaContact: "Contattaci",
  },
  en: {
    lang: "en",
    htmlTitle: "404 — Page not found — CareBond",
    eyebrow: "404",
    title: "Page not found",
    subtitle: "This page doesn't exist (anymore).",
    ctaHome: "Back to home",
    ctaContact: "Get in touch",
  },
} as const;

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHTML(locale: Locale): string {
  const t = T[locale];
  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(t.htmlTitle)}</title>
<meta name="description" content="${escape(t.subtitle)}">
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{font-family:Outfit,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#fff;color:#0A1B39;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5}
.root{min-height:100vh;display:flex;flex-direction:column}
.nav{padding:1.5rem 2rem;border-bottom:1px solid #E7E8EB}
.nav a{color:#0A1B39;font-weight:700;font-size:1.125rem;text-decoration:none;letter-spacing:-0.01em}
.main{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4rem 1.5rem;text-align:center}
.eyebrow{font-size:.75rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#2563EB;margin-bottom:2rem}
.title{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:700;line-height:1.05;letter-spacing:-0.025em;max-width:32rem}
.subtitle{font-size:1.125rem;color:#565656;margin-top:1.25rem;max-width:32rem;line-height:1.6}
.ctas{display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center;margin-top:2.5rem}
.btn{display:inline-flex;align-items:center;justify-content:center;height:3rem;padding:0 1.75rem;border-radius:.5rem;font-weight:500;font-size:1rem;text-decoration:none;transition:transform 150ms ease,background-color 150ms ease;border:1px solid transparent}
.btn:active{transform:scale(.98)}
.btn-primary{background:#2563EB;color:#fff}
.btn-primary:hover{background:#1D4ED8}
.btn-secondary{border-color:#E7E8EB;color:#0A1B39;background:#fff}
.btn-secondary:hover{background:#FAFBFC;border-color:#9DA4B0}
.footer{padding:1.5rem 2rem;border-top:1px solid #E7E8EB;text-align:center;font-size:.875rem;color:#6C7688}
@media(prefers-reduced-motion:reduce){.btn{transition:none}}
</style>
</head>
<body>
<div class="root">
<nav class="nav"><a href="/${locale}">CareBond</a></nav>
<main class="main">
<p class="eyebrow">${escape(t.eyebrow)}</p>
<h1 class="title">${escape(t.title)}</h1>
<p class="subtitle">${escape(t.subtitle)}</p>
<div class="ctas">
<a class="btn btn-primary" href="/${locale}">${escape(t.ctaHome)}</a>
<a class="btn btn-secondary" href="/${locale}/contact">${escape(t.ctaContact)}</a>
</div>
</main>
<footer class="footer">&copy; 2026 CareBond &middot; Genève, Suisse</footer>
</div>
</body>
</html>`;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ locale: string; rest: string[] }> }
) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";

  return new Response(renderHTML(safeLocale), {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
