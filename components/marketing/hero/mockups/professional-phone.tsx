"use client";

import { useTranslations } from "next-intl";

// Professional phone mockup. List of assigned patients with status badges.
//
// Animation: when `step === 3`, the second patient's vital reading swaps
// from "—" to "78 bpm" with a scale + fade (1s, see .eco-anim-vital).
// The vital value persists in its visible state after step 3 until the
// loop restarts at step 0.
const PATIENTS = [
  { name: "Pierre M.", status: "ok", value: "" },
  { name: "Sophie L.", status: "vital", value: "78 bpm" }, // animated row
  { name: "Marie G.", status: "ok", value: "" },
  { name: "Jean R.", status: "alert", value: "" },
  { name: "Anna T.", status: "ok", value: "" },
];

export function ProfessionalPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.professional");
  const vitalActive = step === 3;
  const showVital = step >= 3;
  return (
    <div
      aria-hidden="true"
      className="w-[180px] overflow-hidden rounded-[28px] border-[8px] border-[#1A1A1A] bg-white shadow-xl"
    >
      <div className="relative h-5 bg-white">
        <div className="absolute left-1/2 top-1 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1A1A1A]" />
      </div>
      <div className="border-b border-neutral-200 px-3 py-2.5">
        <p className="text-[11px] font-medium text-neutral-500">{t("title")}</p>
      </div>
      <ul className="space-y-1 p-2.5">
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
          return (
            <li
              key={p.name}
              className="flex items-center justify-between rounded-md px-2 py-1.5 text-[10px]"
            >
              <span className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
                <span className="text-brand-navy">{p.name}</span>
              </span>
              <span
                key={isAnimated && vitalActive ? `vital-active-${step}` : `vital-${idx}-${showVital}`}
                className={`font-medium ${
                  p.status === "alert"
                    ? "text-[#DC2626]"
                    : p.status === "vital"
                      ? "text-[#F59E0B]"
                      : "text-neutral-500"
                } ${isAnimated && vitalActive ? "eco-anim-vital" : ""}`}
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
