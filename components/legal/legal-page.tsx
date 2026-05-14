import type { ReactNode } from "react";

// Shared layout for the five legal pages (imprint, privacy, terms,
// cookies, credits). Keeps the visual rhythm consistent — narrow
// readable column, eyebrow + h1 + last-updated date at the top, and a
// styled prose container that auto-formats nested h2/h3/p/ul/a without
// requiring the Tailwind Typography plugin.
export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Header */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-strong">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-brand-navy sm:text-[2.5rem]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-neutral-500">{lastUpdated}</p>

        {/* Prose */}
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-neutral-700 [&_a]:text-brand-blue-strong [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:no-underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-brand-navy [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-brand-navy [&_li]:my-1 [&_p]:my-3 [&_strong]:font-semibold [&_strong]:text-brand-navy [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </main>
  );
}
