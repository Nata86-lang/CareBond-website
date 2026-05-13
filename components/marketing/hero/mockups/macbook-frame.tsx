import type { ReactNode } from "react";

// MacBook-style frame for the admin dashboard mockup. CSS-only, no SVG,
// no gradients. Realistic proportions (16:10 screen area, slim bezel,
// base sliver underneath the lid). Server component — no client state.
export function MacbookFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      {/* Lid */}
      <div className="overflow-hidden rounded-t-2xl border-[8px] border-b-0 border-[#0F0F12] bg-white shadow-mockup-lg">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 bg-[#1A1A1F] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[10px] font-medium tracking-wide text-white/50">
            carebond.ch
          </span>
        </div>
        {/* Screen content */}
        <div className="bg-white p-4 sm:p-5">{children}</div>
      </div>
      {/* Base sliver */}
      <div className="mx-auto h-2 w-[105%] -translate-y-px rounded-b-lg bg-[#0F0F12]" />
      <div className="mx-auto h-1.5 w-24 rounded-b-2xl bg-[#1A1A1F]" />
    </div>
  );
}
