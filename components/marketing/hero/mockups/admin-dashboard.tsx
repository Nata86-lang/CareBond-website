"use client";

import { useTranslations } from "next-intl";
import { MacbookFrame } from "./macbook-frame";

// Admin dashboard mockup inside a MacBook frame. Shows 4 KPI stats in a
// proportionate grid, an activity bar chart with rhythmic heights, and a
// counter that ticks 71 → 72.
//
// Animation: when `step === 4`, the counter fades + bumps to the new value.
const BAR_HEIGHTS = [22, 38, 52, 68, 84, 96, 88, 72, 58, 42];

export function AdminDashboard({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.dashboard");
  const counterActive = step === 4;
  const counterValue = step >= 4 ? 72 : 71;

  return (
    <MacbookFrame>
      <div className="space-y-4 px-1 py-1">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <p className="text-[13px] font-semibold tracking-tight text-brand-navy">
            {t("title")}
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            <span>Live</span>
          </div>
        </div>

        {/* 4 KPI stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: "47", label: t("residents") },
            { value: "12", label: t("professionals") },
            { value: "3", label: t("alerts") },
            { value: "18", label: t("devices") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-neutral-100 bg-neutral-50/50 px-2 py-2.5"
            >
              <p className="text-lg font-bold leading-tight tracking-tight text-brand-navy">
                {stat.value}
              </p>
              <p className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-wider text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Activity chart */}
        <div className="rounded-lg border border-neutral-100 bg-white p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              {t("activityTitle")}
            </p>
            <span
              key={counterActive ? `counter-active-${step}` : `counter-${counterValue}`}
              className={`text-xs font-bold tabular-nums text-brand-navy ${
                counterActive ? "eco-anim-counter" : ""
              }`}
            >
              {counterValue}
            </span>
          </div>
          <div className="flex h-12 items-end gap-1">
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-brand-blue-strong/85"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </MacbookFrame>
  );
}
