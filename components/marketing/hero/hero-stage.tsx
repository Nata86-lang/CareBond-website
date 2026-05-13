import { AdminDashboard } from "./mockups/admin-dashboard";
import { PhoneFrame } from "./phone-frame";
import { ChatMultilingualDemo } from "../sections/chat-multilingue/chat-multilingue-demo";

// Hero composition — the Linear/Stripe "hero + sidekick" pattern.
// Admin dashboard MacBook sits as the visual mass (back layer). One phone
// with the multilingual chat demo floats front-left, tilted slightly.
//
// The dashboard is server-rendered and static (it reads as a "snapshot of
// now", which is the right metaphor for an EMS console). The energy in the
// Hero comes from the chat demo loop, not from artificial number tickers
// on the dashboard.
//
// The chat demo is self-contained: it has its own state machine, its own
// WCAG 2.2.2 pause / play button, and its own prefers-reduced-motion
// fallback. No coordination needed at this level.
//
// The three additional surfaces (Patient, Family, Professional phones) live
// in Section 3 (Comment CareBond fonctionne) — sub-commit D. Keeping the
// Hero to a 2-mockup composition removes visual clutter and respects the
// "show, don't tell" principle: one product surface running in real time
// communicates more than four static mockups overlapping.
export function HeroStage() {
  return (
    <div aria-hidden="true" className="relative w-full">
      {/* Mobile (< lg): vertical stack, dashboard first then phone */}
      <div className="flex flex-col items-center gap-8 lg:hidden">
        <AdminDashboard />
        <PhoneFrame size="compact">
          <ChatMultilingualDemo />
        </PhoneFrame>
      </div>

      {/* Desktop (≥ lg): dashboard back, phone front-left tilted */}
      <div className="relative hidden lg:block">
        {/* Dashboard — right-aligned, slightly raised */}
        <div className="ml-auto w-[88%] pt-4">
          <AdminDashboard />
        </div>
        {/* Phone sidekick — bottom-left, tilted, overlapping dashboard */}
        <div
          className="absolute -bottom-6 left-0 z-20 motion-reduce:!rotate-0"
          style={{ transform: "rotate(-4deg)" }}
        >
          <PhoneFrame size="compact">
            <ChatMultilingualDemo />
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
