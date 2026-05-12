import type { ReactNode } from "react";

// CSS-only iPhone-like frame. No SVG, no foreignObject — avoids the SSR
// edge cases we hit during commit 4 (Next 15.5 streaming with mixed SSR
// roots) and keeps the bundle leaner. Detail (speaker grill, side buttons)
// can be added with extra divs later if Phase 3 polish requires it.
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-[640px] w-[320px] overflow-hidden rounded-[48px] border-[12px] border-[#1A1A1A] bg-white shadow-2xl"
    >
      {/* Notch */}
      <div
        className="absolute left-1/2 top-3 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-[#1A1A1A]"
      />
      {/* Inner content area, accounts for notch */}
      <div className="h-full pt-12">{children}</div>
    </div>
  );
}
