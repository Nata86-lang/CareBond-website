import type { ReactNode } from "react";

// CSS-only MacBook-style frame for the admin dashboard mockup. Pure server
// component — no animations of its own, no client state.
//
// Composition:
//   - Title bar at top with the three macOS dots
//   - Screen content area (children render here)
//   - Bezel + base "foot" sliver underneath
//
// All colors flat per BRAND_GUIDELINES (no gradients).
export function MacbookFrame({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="w-full max-w-md">
      {/* Lid */}
      <div className="overflow-hidden rounded-t-xl border-[6px] border-b-0 border-[#1A1A1A] bg-white shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 bg-[#2A2A2A] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[10px] font-medium tracking-wide text-white/60">
            CareBond
          </span>
        </div>
        {/* Screen content */}
        <div className="bg-white p-4">{children}</div>
      </div>
      {/* Base sliver */}
      <div className="mx-auto h-1.5 w-[90%] rounded-b-md bg-[#1A1A1A]" />
      <div className="mx-auto h-2 w-24 rounded-b-2xl bg-[#0F0F0F]" />
    </div>
  );
}
