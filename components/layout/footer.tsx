import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { hasResources } from "@/lib/resources";
import { LanguageSwitcher } from "./language-switcher";

type LinkSpec = {
  href: string;
  label: string;
  prefetch?: false;
};

const SOLUTION_SLUGS = [
  { slug: "ems", key: "ems" },
  { slug: "home-care", key: "homeCare" },
  { slug: "recovery", key: "recovery" },
  { slug: "hospitals", key: "hospitals" },
  { slug: "clinics", key: "clinics" },
] as const;

// The six product pages. Before this column they were reachable only from a
// dropdown in the header, so they had one crawlable inbound link between them.
const PLATFORM_SLUGS = [
  "oversight",
  "audit",
  "livestream",
  "chat-multilingue",
  "rounds",
  "floor-plans",
] as const;

const COMPANY_KEYS = ["about", "compliance", "contact"] as const;
const LEGAL_KEYS = ["privacy", "terms", "cookies", "imprint", "credits"] as const;

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tMenu = await getTranslations("nav.solutionsMenu");
  const tLogo = await getTranslations("header");
  const tLinks = await getTranslations("footer.links");
  const tPillars = await getTranslations("platform.bento.pillars");
  const year = new Date().getFullYear();

  const solutionLinks: LinkSpec[] = SOLUTION_SLUGS.map((s) => ({
    href: `/${locale}/solutions/${s.slug}`,
    label: tMenu(s.key),
  }));

  const platformLinks: LinkSpec[] = PLATFORM_SLUGS.map((slug) => ({
    href: `/${locale}/platform/${slug}`,
    label: tPillars(`${slug}.title`),
  }));

  const companyLinks: LinkSpec[] = COMPANY_KEYS.map((key) => ({
    href: `/${locale}/${key}`,
    label: tNav(key),
  }));

  // The resources section only exists in fr and de, so the link only appears
  // there — a footer link to a 404 is worse than no link.
  if (hasResources(locale)) {
    const tRes = await getTranslations("resources");
    companyLinks.unshift({
      href: `/${locale}/resources`,
      label: tRes("navLabel"),
    });
  }

  // Legal pages are low value and linked from every page — no point warming
  // five route payloads on hover.
  const legalLinks: LinkSpec[] = LEGAL_KEYS.map((key) => ({
    href: `/${locale}/legal/${key}`,
    label: tLinks(key),
    prefetch: false,
  }));

  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-brand-navy text-white"
    >
      <h2 id="footer-heading" className="sr-only">
        {t("navAriaLabel")}
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: brand */}
          <div className="lg:max-w-xs">
            <Link
              href={`/${locale}`}
              aria-label={tLogo("logoAriaLabel")}
              className="inline-flex items-center rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src="/logos/carebond-logo-white.png"
                alt=""
                width={247}
                height={247}
                sizes="40px"
                className="h-10 w-10"
              />
              <span className="ml-2 text-base font-semibold tracking-tight text-white">
                CareBond
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {t("tagline")}
            </p>
          </div>

          {/* The two headings are links: /solutions and /platform are real pages
              now, and this is what gives them an inbound link from all 132 URLs. */}
          <FooterColumn
            heading={t("columns.solutions")}
            headingHref={`/${locale}/solutions`}
            links={solutionLinks}
          />
          <FooterColumn
            heading={t("columns.platform")}
            headingHref={`/${locale}/platform`}
            links={platformLinks}
          />
          <FooterColumn heading={t("columns.company")} links={companyLinks} />
          <FooterColumn heading={t("columns.legal")} links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-4">
          <p>
            © {year} CareBond · {t("bottom.address")} ·{" "}
            <a
              href="mailto:info@carebond.ch"
              className="text-white underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              info@carebond.ch
            </a>
          </p>
          <LanguageSwitcher variant="footer" />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  headingHref,
  links,
}: {
  heading: string;
  headingHref?: string;
  links: LinkSpec[];
}) {
  const headingId = `footer-col-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <nav aria-labelledby={headingId}>
      <h3
        id={headingId}
        className="text-sm font-semibold uppercase tracking-wide text-white"
      >
        {headingHref ? (
          <Link
            href={headingHref}
            className="rounded hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {heading}
          </Link>
        ) : (
          heading
        )}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              prefetch={link.prefetch}
              className="inline-block min-h-8 rounded text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
