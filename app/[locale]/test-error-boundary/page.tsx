// TEMPORARY — error boundary validation page. Delete after Phase 1A signoff.
// Triggers an intentional throw so [locale]/error.tsx renders for review.
// Folder name avoids the `_` / `__` prefix because Next treats those as
// private folders excluded from the router.
// force-dynamic prevents SSG prerender from aborting the build on the
// intentional throw — the error fires on each on-demand request instead.
export const dynamic = "force-dynamic";

export default function TestErrorBoundaryPage() {
  throw new Error(
    "Error boundary validation — delete this page after testing"
  );
}
