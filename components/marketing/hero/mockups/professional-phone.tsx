"use client";

import { useTranslations } from "next-intl";

// Professional phone mockup. List of assigned patients with status badges.
//
// Animation: when `step === 3`, the second patient's vital reading swaps
// from "—" to "78 bpm" with a scale + fade. Persists in visible state
// after step 3 until the loop restarts at step 0.
const PATIENTS = [
  { name: "Pierre M.", status: "ok", value: "" },
  { name: "Sophie L.", status: "vital", value: "78 bpm" },
  { name: "Marie G.", status: "ok", value: "" },
  { name: "Jean R.", status: "alert", value: "" },
  { name: "Anna T.", status: "ok", value: "" },
];

export function ProfessionalPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.professional");
  const vitalActive = step === 3;
  const showVital = step >= 3;
  return (
    <div className="w-[224px] overflow-hidden rounded-[42px] border-[10px] border-[#0F0F12] bg-white shadow-mockup">
      <div className="relative h-6 bg-white">
        <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0F0F12]" />
      </div>
      <div className="border-b border-neutral-100 px-4 pb-3 pt-2">
        <p className="text-[11px] font-medium text-neutral-500">{t("title")}</p>
      </div>
      <ul className="space-y-0.5 p-3">
        {PATIENTS.map((p, idx) => {
          const isAnimated = p.status === "vital";
          const dotClass =
            p.status === "alert"
              ? "bg-[#DC2626]"
              : p.status === "vital"
                ? "bg-[#F59E0B]"
                : "bg-[#22C55E]";
          let valueDisplay: string;
          if (isAnimated && !showVital) {
            valueDisplay = "—";
          } else if (isAnimated && showVital) {
            valueDisplay = p.value;
          } else if (p.status === "alert") {
            valueDisplay = "Alert";
          } else {
            valueDisplay = "OK";
          }
          const valueColor =
            p.status === "alert"
              ? "text-[#DC2626]"
              : p.status === "vital"
                ? "text-[#F59E0B]"
                : "text-neutral-400";
          return (
            <li
              key={p.name}
              className="flex items-center justify-between rounded-lg px-2 py-2 text-[11px]"
            >
              <span className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${dotClass}`} />
                <span className="font-medium text-brand-navy">{p.name}</span>
              </span>
              <span
                key={
                  isAnimated && vitalActive
                    ? `vital-active-${step}`
                    : `vital-${idx}-${showVital}`
                }
                className={`text-[10px] font-semibold tabular-nums ${valueColor} ${
                  isAnimated && vitalActive ? "eco-anim-vital" : ""
                }`}
              >
                {valueDisplay}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
