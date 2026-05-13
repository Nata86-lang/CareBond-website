import { getTranslations } from "next-intl/server";

// Professional phone mockup. List of assigned patients with iOS-style
// status pills (text-only badges with tinted backgrounds) replacing the
// previous emoji-colored dots.
//
// Animation: when `step === 3`, the second patient's vital reading swaps
// from "—" to "78 bpm" with a scale + fade.
const PATIENTS = [
  { name: "Pierre M.", status: "stable" as const, value: "" },
  { name: "Sophie L.", status: "review" as const, value: "78 bpm" },
  { name: "Marie G.", status: "stable" as const, value: "" },
  { name: "Jean R.", status: "urgent" as const, value: "" },
  { name: "Anna T.", status: "stable" as const, value: "" },
];

const STATUS_STYLES = {
  stable: "bg-emerald-50 text-emerald-700",
  review: "bg-amber-50 text-amber-700",
  urgent: "bg-red-50 text-red-700",
} as const;

const STATUS_LABEL = {
  stable: "OK",
  review: "78 bpm",
  urgent: "Alert",
} as const;

export async function ProfessionalPhone({ step }: { step: number }) {
  const t = await getTranslations("hero.ecosystem.professional");
  const vitalActive = step === 3;
  const showVital = step >= 3;
  return (
    <div className="w-[224px] overflow-hidden rounded-[42px] border-[7px] border-[#0F0F12] bg-white shadow-mockup-floor">
      <div className="relative h-6 bg-white">
        <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0F0F12]" />
      </div>
      <div className="border-b border-neutral-100 px-4 pb-3 pt-2">
        <p className="text-sm font-semibold tracking-tight text-brand-navy">
          {t("title")}
        </p>
      </div>
      <ul className="space-y-0.5 p-3">
        {PATIENTS.map((p) => {
          const isAnimated = p.status === "review";
          let badgeText: string = STATUS_LABEL[p.status];
          if (isAnimated && !showVital) badgeText = "—";
          return (
            <li
              key={p.name}
              className="flex items-center justify-between rounded-lg px-2 py-2"
            >
              <span className="text-[11px] font-medium text-brand-navy">
                {p.name}
              </span>
              <span
                key={
                  isAnimated && vitalActive
                    ? `vital-active-${step}`
                    : `${p.name}-${showVital}`
                }
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold tabular-nums tracking-tight ${
                  STATUS_STYLES[p.status]
                } ${isAnimated && vitalActive ? "eco-anim-vital" : ""}`}
              >
                {badgeText}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
