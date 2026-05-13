"use client";

import { useTranslations } from "next-intl";

// Family phone mockup. Shows a recent mini-report notification card and a
// livestream thumbnail with LIVE badge.
//
// Animation: when `step === 2`, the mini-report card slides down + fades
// in (0.6s, see .eco-anim-slide-down). The `key` tied to step forces a
// fresh mount on each loop iteration.
export function FamilyPhone({ step }: { step: number }) {
  const t = useTranslations("hero.ecosystem.family");
  const notifActive = step === 2;
  // After step 2, the card stays visible in its "final" state (no anim
  // class). On step 0 (loop restart) it disappears, then on step 2 it
  // re-mounts with a fresh animation.
  const showNotif = step >= 2;
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
      <div className="space-y-2.5 p-3">
        {/* Mini-report card */}
        {showNotif && (
          <div
            key={notifActive ? `notif-active-${step}` : "notif-stable"}
            className={`rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm ${
              notifActive ? "eco-anim-slide-down" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold text-brand-blue-strong">
                {t("miniReportTitle")}
              </p>
              <p className="text-[9px] text-neutral-500">{t("miniReportTime")}</p>
            </div>
            <p className="mt-1 text-[10px] leading-snug text-brand-navy">
              {t("miniReportBody")}
            </p>
          </div>
        )}
        {/* Livestream thumbnail */}
        <div className="relative overflow-hidden rounded-xl bg-neutral-700">
          <div className="aspect-video bg-neutral-600" />
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-[#DC2626] px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {t("liveBadge")}
          </div>
          <div className="absolute bottom-1.5 left-2 text-[9px] font-medium text-white/90">
            {t("livestreamLabel")}
          </div>
        </div>
      </div>
    </div>
  );
}
