"use client";

import { useTranslations } from "next-intl";
import { MacbookFrame } from "./macbook-frame";

// Admin dashboard mockup inside a MacBook frame. Shows 4 KPI stats, an
// activity bar chart, and a counter that animates from 71 → 72.
//
// Animation: when `step === 4`, the counter fades + bumps to the new
// value (1.4s, see .eco-anim-counter).
const BAR_HEIGHTS = [25, 40, 55, 70, 85, 95, 85, 70, 55, 40];

export function AdminDashboard({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.dashboard");
  const counterActive = step === 4;
  const counterValue = step >= 4 ? 72 : 71;
  return (
    <MacbookFrame>
      <div className="space-y-3">
        <p className="text-xs font-semibold text-brand-navy">{t("title")}</p>
        {/* 4 KPI stats */}
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { value: "47", label: t("residents") },
            { value: "12", label: t("professionals") },
            { value: "3", label: t("alerts") },
            { value: "18", label: t("devices") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-1.5 text-center"
            >
              <p className="text-base font-bold leading-tight text-brand-navy">
                {stat.value}
              </p>
              <p className="text-[8px] font-medium leading-tight text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        {/* Activity bar chart */}
        <div>
          <p className="mb-1.5 text-[10px] font-medium text-neutral-600">
            {t("activityTitle")}
          </p>
          <div className="flex h-10 items-end gap-0.5">
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-brand-blue-strong/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        {/* Counter (animated on step 4) */}
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-strong" />
          <span
            key={counterActive ? `counter-active-${step}` : `counter-${counterValue}`}
            className={`text-xs font-semibold tabular-nums text-brand-navy ${
              counterActive ? "eco-anim-counter" : ""
            }`}
          >
            {counterValue}
          </span>
        </div>
      </div>
    </MacbookFrame>
  );
}
