import type { ReactNode } from "react";

// MacBook-style frame for the admin dashboard mockup. CSS-only, no SVG,
// no gradients. Realistic slim bezels + screen content + tiny base sliver.
// Server component, zero JS cost.
export function MacbookFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      {/* Lid */}
      <div className="overflow-hidden rounded-t-2xl border-[6px] border-b-0 border-[#0F0F12] bg-white shadow-mockup-floor">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 bg-[#1A1A1F] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-auto rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60">
            carebond.ch
          </span>
        </div>
        {/* Screen content */}
        <div className="bg-white p-5 sm:p-6">{children}</div>
      </div>
      {/* Base sliver (laptop bottom edge) */}
      <div className="relative">
        <div className="mx-auto h-2 w-[103%] -translate-y-px rounded-b-lg bg-[#0F0F12]" />
        <div className="mx-auto -mt-px h-1 w-24 rounded-b-2xl bg-[#1A1A1F]" />
      </div>
    </div>
  );
}
