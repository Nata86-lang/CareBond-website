import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ChevronRight } from "lucide-react";
import { breadcrumbGraph, jsonLd } from "@/lib/structured-data";

export type Crumb = {
  name: string;
  /** Absolute path including the locale segment, e.g. "/fr/solutions". */
  path: string;
};

/**
 * Visible breadcrumb trail plus its BreadcrumbList JSON-LD, from one list.
 * They are emitted together on purpose: Google only shows the breadcrumb in a
 * result when the markup matches something a visitor can actually see.
 *
 * The last crumb is the current page and is rendered as plain text — a link to
 * the page you are already on is noise both for a visitor and for a crawler.
 */
export async function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = await getTranslations("common");

  return (
    <>
      <nav aria-label={t("breadcrumb")} className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-500">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    size={13}
                    aria-hidden="true"
                    className="text-neutral-300"
                  />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-neutral-600">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="rounded hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbGraph(items)) }}
      />
    </>
  );
}
