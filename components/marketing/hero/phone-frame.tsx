import type { ReactNode } from "react";

// CSS-only iPhone-like frame. Slim bezels (border 7px instead of 12px) so
// the device reads as a real phone, not a cardboard cutout. Multi-layer
// floor shadow gives it physical depth on the page.
//
// Two sizes available via `size` prop:
//   - "default" (320x640): used in standalone Section 9 (chat multilingue)
//   - "compact" (280x560): used in Hero sidekick position
export function PhoneFrame({
  children,
  size = "default",
}: {
  children: ReactNode;
  size?: "default" | "compact";
}) {
  const dimensions =
    size === "compact" ? "h-[560px] w-[280px]" : "h-[640px] w-[320px]";
  const notchWidth = size === "compact" ? "w-28" : "w-32";

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-[44px] border-[7px] border-[#0F0F12] bg-white shadow-mockup-floor ${dimensions}`}
    >
      {/* Notch */}
      <div
        className={`absolute left-1/2 top-2 z-10 h-6 -translate-x-1/2 rounded-full bg-[#0F0F12] ${notchWidth}`}
      />
      {/* Inner content area, accounts for notch */}
      <div className="h-full pt-10">{children}</div>
    </div>
  );
}
