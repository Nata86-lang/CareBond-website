"use client";

import { useTranslations } from "next-intl";

// Patient phone mockup. Elderly-friendly UX: large SOS button + 2x3 grid
// of big tap targets with full-word labels.
//
// Animation: when `step === 1`, the SOS button pulses once (1.4s, see
// .eco-anim-sos in globals.css). The `key` prop tied to step forces a
// fresh DOM node on each loop iteration so the CSS animation re-fires.
export function PatientPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.patient");
  const sosActive = step === 1;
  return (
    <div
      aria-hidden="true"
      className="w-[180px] overflow-hidden rounded-[28px] border-[8px] border-[#1A1A1A] bg-white shadow-xl"
    >
      {/* Notch */}
      <div className="relative h-5 bg-white">
        <div className="absolute left-1/2 top-1 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1A1A1A]" />
      </div>
      {/* Header */}
      <div className="border-b border-neutral-200 px-3 py-2.5">
        <p className="text-[11px] font-medium text-neutral-500">
          {t("greeting")}
        </p>
      </div>
      {/* SOS button (animated on step 1) */}
      <div className="px-3 pt-3">
        <button
          type="button"
          tabIndex={-1}
          key={sosActive ? `sos-active-${step}` : "sos-idle"}
          className={`flex h-12 w-full items-center justify-center rounded-2xl bg-[#DC2626] text-base font-bold tracking-wider text-white shadow-md ${
            sosActive ? "eco-anim-sos" : ""
          }`}
        >
          SOS
        </button>
      </div>
      {/* 2x3 grid of large tap targets */}
      <div className="grid grid-cols-3 gap-1.5 p-3">
        {[
          { icon: "💬", label: t("chat") },
          { icon: "📞", label: t("calls") },
          { icon: "📅", label: t("visits") },
          { icon: "👨‍👩‍👧", label: t("family") },
          { icon: "❤️", label: t("vitals") },
          { icon: "⚙️", label: t("permissions") },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-neutral-100 px-1 py-2 text-center"
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span className="text-[9px] font-medium leading-tight text-brand-navy">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
