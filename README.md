# carebond-website

Marketing site for CareBond — https://www.carebond.ch

Next.js 15 (App Router) · next-intl · Tailwind v4 · TypeScript.
Six locales, prefix always present: `fr` (default), `de`, `it`, `en`, `es`, `ca`.

## Local development

```bash
nvm use            # .nvmrc → Node 22
npm install
npm run dev        # http://localhost:3000 → redirects to /fr
```

```bash
npm run build       # production build
npm run start       # serve the production build
npm run type-check  # tsc --noEmit
npm run lint
```

`.env.example` documents the environment variables. Only `SMTP_PASSWORD` is
required for the contact form to actually send.

## Where this runs, and why it stays there

| Thing | Where | Notes |
|---|---|---|
| The website | **Vercel** | Auto-deploys on push to `main` from `Nata86-lang/carebond-website`. Region `fra1` (Frankfurt). |
| DNS + registrar | **SiteGround** | Nameservers `ns1/ns2.siteground.net`. `carebond.ch` A → Vercel, `www` CNAME → `cname.vercel-dns.com`. |
| Email | **Infomaniak** | MX + SPF. Nothing to do with the website. |
| `api.` / `admin.carebond.ch` | **VPS** | The product itself, not this repo. |

**Do not move the site to SiteGround hosting, and do not move the DNS.** The
hosting provider is not what decides Google rankings, and those nameservers are
currently serving three independent things at once — the website, the company
email and the product API. Changing them risks the email and the API for no
search benefit. SiteGround's only jobs here are the domain registration and the
DNS records.

## Two things that have broken indexing before

**1. `X-Robots-Tag: noindex` on production.** `next.config.ts` decides
indexability at build time. It used to depend solely on `NEXT_PUBLIC_SITE_URL`
being set by hand in the Vercel dashboard; it wasn't, so every page of
www.carebond.ch shipped `X-Robots-Tag: noindex, nofollow` and Google was
correctly told never to index the site. It now trusts `VERCEL_ENV === "production"`
first. Preview deployments still get the noindex header.

After any deploy, this must print nothing:

```bash
curl -sSI https://www.carebond.ch/fr | grep -i x-robots
```

**2. A canonical pointing somewhere that isn't the served host.** `lib/site.ts`
ignores a `*.vercel.app` value for `NEXT_PUBLIC_SITE_URL` and folds the apex
(`https://carebond.ch`, which 308s to www) to `https://www.carebond.ch`. Every
canonical, hreflang and sitemap URL derives from that one constant.

## SEO invariants

- **One metadata helper.** Every `generateMetadata` goes through
  `buildPageMetadata()` in `lib/seo.ts`, which emits title, description, Open
  Graph, Twitter, canonical and the full hreflang set together. A child route
  that declares its own `openGraph` block *replaces* the parent's rather than
  merging, which is how 114 pages ended up advertising the home page's title
  when shared — the helper exists so that cannot recur.
- **hreflang comes from the HTML only.** `alternateLinks: false` in
  `middleware.ts` turns off next-intl's duplicate `Link:` header, which
  disagreed with the HTML on `x-default` and was emitted on 404s too.
- **New routes must be added to `app/sitemap.ts` by hand.** The route list there
  is manual; a page that isn't in it is invisible to Google.
- **Structured data lives in `lib/structured-data.ts`.** Nodes without
  translated text get one site-wide `@id`; nodes with translated text get one
  per locale. Nothing in there may state a fact that isn't already on the site.
- **`localeDetection: false`.** The bare domain always lands on `/fr`. With it
  on, Googlebot (en-US) was redirected to `/en` while every canonical pointed at
  `/fr`. Set it back to `true` in `middleware.ts` to restore browser-language
  detection on `carebond.ch`.
- **Client translations are filtered.** `app/[locale]/layout.tsx` passes only the
  namespaces client components read. Adding a `useTranslations` call to a client
  component means adding its namespace to `clientMessages`, or it renders the
  raw key path.

## The resources section

`/{fr,de}/resources` — six long-form articles aimed at what a Swiss care
director searches for *before* they know a vendor exists. The rest of the site
is product pages, which only reach people already shopping.

- **French and German only.** `RESOURCE_LOCALES` in `lib/resources.ts` is the
  single switch — routes, sitemap, footer, header nav and the hreflang set all
  read it. Four more machine-widened languages would add 24 thin pages
  competing with nothing.
- **Slugs are localised** (`/fr/resources/nlpd-ems-obligations` pairs with
  `/de/resources/revdsg-pflegeheim-pflichten`). The `ARTICLES` table pairs them
  so hreflang points at the real other-language URL; without it each version
  looks like an orphan to Google.
- **Bodies live in `content/resources/{locale}.ts`, never in `messages/*.json`** —
  that catalogue is read in full on every server render and would carry six long
  articles into every page of the site.
- **Every factual claim traces to an entry in that article's own `sources`.**
  They are listed on the page, marked up as `citation` in the Article JSON-LD,
  and each one was fetched and checked to resolve. Do not add a claim without
  adding its source, and do not add a source without opening it.
- Each article carries a not-legal-advice note. Keep it: these describe Swiss
  federal and cantonal obligations, and the site is published by a vendor, not
  a law firm.

## Icons and share images

`app/favicon.ico` (16→256), `app/icon.png`, `app/apple-icon.png` and
`public/og/carebond-og-{locale}.png` are generated from
`public/logos/carebond-logo.png`. Regenerate with the scripts in
`scripts/` if the brand mark changes.
