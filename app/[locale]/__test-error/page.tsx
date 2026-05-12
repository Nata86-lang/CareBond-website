// TEMPORARY — error boundary validation page. Delete after Phase 1A signoff.
// Triggers an intentional throw so [locale]/error.tsx renders for review.
export default function TestErrorPage() {
  throw new Error(
    "Error boundary validation — delete this page after testing"
  );
}
