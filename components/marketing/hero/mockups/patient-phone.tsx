"use client";

import {
  MessageSquare,
  Phone,
  CalendarDays,
  Users,
  Activity,
  Settings,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Patient phone mockup. Premium UI: Lucide icons (no emoji), refined
// hierarchy. Used in Section 3 (Comment ça marche) bento, not in Hero.
// Animation: when `step === 1`, the SOS chip pulses once.
export function PatientPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.patient");
  const sosActive = step === 1;
  return (
    <div className="w-[224px] overflow-hidden rounded-[42px] border-[7px] border-[#0F0F12] bg-white shadow-mockup-floor">
      {/* Notch */}
      <div className="relative h-6 bg-white">
        <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0F0F12]" />
      </div>
      {/* Greeting + SOS chip */}
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 pb-3 pt-2">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-wider text-neutral-400">
            {t("greeting").split(" ")[0]}
          </p>
          <p className="text-sm font-semibold tracking-tight text-brand-navy">
            {t("greeting").split(" ").slice(1).join(" ") || "Marie"}
          </p>
        </div>
        <button
          type="button"
          tabIndex={-1}
          key={sosActive ? `sos-active-${step}` : "sos-idle"}
          className={`flex h-9 items-center justify-center rounded-full bg-[#DC2626] px-3 text-[10px] font-bold tracking-[0.15em] text-white shadow-sm ${
            sosActive ? "eco-anim-sos" : ""
          }`}
        >
          SOS
        </button>
      </div>
      {/* 2x3 grid of large tap targets with Lucide icons */}
      <div className="grid grid-cols-3 gap-1.5 p-3 pb-4">
        {[
          { Icon: MessageSquare, label: t("chat") },
          { Icon: Phone, label: t("calls") },
          { Icon: CalendarDays, label: t("visits") },
          { Icon: Users, label: t("family") },
          { Icon: Activity, label: t("vitals") },
          { Icon: Settings, label: t("permissions") },
        ].map(({ Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-neutral-50 px-1 py-3 text-center"
          >
            <Icon
              size={18}
              strokeWidth={1.75}
              className="text-brand-navy"
              aria-hidden="true"
            />
            <span className="text-[10px] font-medium leading-tight text-brand-navy">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
