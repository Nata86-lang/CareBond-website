"use client";

import { useTranslations } from "next-intl";

// Patient phone mockup. Elderly-friendly UX: large SOS button + 2x3 grid
// of big tap targets with full-word labels.
//
// Animation: when `step === 1`, the SOS button pulses once. React `key`
// tied to step forces a fresh DOM node on each loop iteration so the CSS
// animation re-fires reliably.
export function PatientPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.patient");
  const sosActive = step === 1;
  return (
    <div className="w-[224px] overflow-hidden rounded-[42px] border-[10px] border-[#0F0F12] bg-white shadow-mockup">
      {/* Notch */}
      <div className="relative h-6 bg-white">
        <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0F0F12]" />
      </div>
      {/* Header */}
      <div className="border-b border-neutral-100 px-4 pb-3 pt-2">
        <p className="text-[11px] font-medium text-neutral-500">
          {t("greeting")}
        </p>
      </div>
      {/* SOS button */}
      <div className="px-4 pt-4">
        <button
          type="button"
          tabIndex={-1}
          key={sosActive ? `sos-active-${step}` : "sos-idle"}
          className={`flex h-14 w-full items-center justify-center rounded-2xl bg-[#DC2626] text-lg font-bold tracking-[0.15em] text-white shadow-md ${
            sosActive ? "eco-anim-sos" : ""
          }`}
        >
          SOS
        </button>
      </div>
      {/* 2x3 grid of large tap targets */}
      <div className="grid grid-cols-3 gap-1.5 p-3 pb-4">
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
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-neutral-100 px-1 py-2.5 text-center"
          >
            <span className="text-lg leading-none">{item.icon}</span>
            <span className="text-[10px] font-medium leading-tight text-brand-navy">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
