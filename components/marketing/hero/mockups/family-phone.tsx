"use client";

import { useTranslations } from "next-intl";

// Family phone mockup. Recent mini-report card + livestream thumbnail
// with red LIVE badge.
//
// Animation: when `step === 2`, the mini-report card slides down + fades
// in. After step 2 it stays visible in steady state; at step 0 (loop
// restart) it unmounts and re-mounts on step 2 for a fresh animation.
export function FamilyPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.family");
  const notifActive = step === 2;
  const showNotif = step >= 2;
  return (
    <div className="w-[224px] overflow-hidden rounded-[42px] border-[10px] border-[#0F0F12] bg-white shadow-mockup">
      <div className="relative h-6 bg-white">
        <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0F0F12]" />
      </div>
      <div className="border-b border-neutral-100 px-4 pb-3 pt-2">
        <p className="text-[11px] font-medium text-neutral-500">{t("title")}</p>
      </div>
      <div className="space-y-3 p-4">
        {/* Mini-report card */}
        {showNotif && (
          <div
            key={notifActive ? `notif-active-${step}` : "notif-stable"}
            className={`rounded-xl border border-neutral-200 bg-white p-3 shadow-sm ${
              notifActive ? "eco-anim-slide-down" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue-strong">
                {t("miniReportTitle")}
              </p>
              <p className="text-[9px] text-neutral-500">{t("miniReportTime")}</p>
            </div>
            <p className="mt-1.5 text-[11px] leading-snug text-brand-navy">
              {t("miniReportBody")}
            </p>
          </div>
        )}
        {/* Livestream thumbnail */}
        <div className="relative overflow-hidden rounded-xl bg-neutral-700">
          <div className="aspect-video bg-neutral-600" />
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-[#DC2626] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {t("liveBadge")}
          </div>
          <div className="absolute bottom-2 left-2 text-[10px] font-medium text-white/95">
            {t("livestreamLabel")}
          </div>
        </div>
      </div>
    </div>
  );
}
