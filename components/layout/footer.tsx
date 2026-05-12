import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "./language-switcher";

type LinkSpec = {
  href: string;
  label: string;
  prefetch?: false;
};

const SOLUTION_SLUGS = [
  { slug: "ems", key: "ems" },
  { slug: "home-care", key: "homeCare" },
  { slug: "hospitals", key: "hospitals" },
  { slug: "professionals", key: "professionals" },
] as const;

const COMPANY_KEYS = ["about", "compliance", "contact"] as const;
const LEGAL_KEYS = ["privacy", "terms", "cookies", "imprint", "credits"] as const;

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tMenu = await getTranslations("nav.solutionsMenu");
  const tLogo = await getTranslations("header");
  const tLinks = await getTranslations("footer.links");
  const year = new Date().getFullYear();

  const solutionLinks: LinkSpec[] = SOLUTION_SLUGS.map((s) => ({
    href: `/${locale}/solutions/${s.slug}`,
    label: tMenu(s.key),
    // Routes don't exist until Phase 2 — disable RSC prefetch to avoid 404s.
    prefetch: false,
  }));

  const companyLinks: LinkSpec[] = COMPANY_KEYS.map((key) => ({
    href: `/${locale}/${key}`,
    label: tNav(key),
    // /contact has a stub (commit 1 of Phase 1A); others 404 until Phase 2.
    prefetch: key === "contact" ? undefined : false,
  }));

  const legalLinks: LinkSpec[] = LEGAL_KEYS.map((key) => ({
    href: `/${locale}/legal/${key}`,
    label: tLinks(key),
    // All legal pages aterrize in Phase 1C.
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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

          <FooterColumn
            heading={t("columns.solutions")}
            links={solutionLinks}
          />
          <FooterColumn heading={t("columns.company")} links={companyLinks} />
          <FooterColumn heading={t("columns.legal")} links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-4">
          <p>
            © {year} CareBond SA · {t("bottom.address")} ·{" "}
            <a
              href="mailto:contact@carebond.ch"
              className="text-white underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              contact@carebond.ch
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
  links,
}: {
  heading: string;
  links: LinkSpec[];
}) {
  const headingId = `footer-col-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <nav aria-labelledby={headingId}>
      <h3
        id={headingId}
        className="text-sm font-semibold uppercase tracking-wide text-white"
      >
        {heading}
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
