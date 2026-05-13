import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { MacbookFrame } from "./macbook-frame";

// Admin dashboard mockup. Server component, fully static — no animations,
// no step prop. Looking at a real production EMS dashboard is the right
// experience: a snapshot of "now". Energy in the Hero comes from the
// chat multilingue demo next to it, not from numbers ticking artificially.

// Bar heights for the activity chart. 30 thin bars with a rhythm that
// suggests real human-scale traffic, not a synthetic curve.
const BAR_HEIGHTS = [
  18, 22, 30, 28, 42, 50, 58, 55, 68, 76, 82, 88, 92, 88, 78, 70, 62, 58, 52,
  46, 40, 36, 30, 26, 22, 18, 24, 32, 28, 22,
];

export async function AdminDashboard() {
  const t = await getTranslations("hero.ecosystem.dashboard");

  return (
    <MacbookFrame>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              CareBond · EMS
            </p>
            <p className="mt-0.5 text-base font-semibold tracking-tight text-brand-navy">
              {t("title")}
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span>Live</span>
          </div>
        </div>

        {/* 4 KPI cards */}
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { value: "47", label: t("residents"), trend: "+2" },
            { value: "12", label: t("professionals"), trend: null },
            { value: "3", label: t("alerts"), trend: null, alert: true },
            { value: "18", label: t("devices"), trend: null },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-neutral-100 bg-white px-3 py-2.5"
            >
              <div className="flex items-baseline justify-between">
                <p
                  className={`text-xl font-semibold tracking-tight ${stat.alert ? "text-[#DC2626]" : "text-brand-navy"}`}
                >
                  {stat.value}
                </p>
                {stat.trend && (
                  <p className="text-[9px] font-medium text-emerald-600">
                    {stat.trend}
                  </p>
                )}
              </div>
              <p className="mt-1 truncate text-[9px] font-medium uppercase tracking-wider text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Activity chart */}
        <div className="rounded-lg border border-neutral-100 bg-white p-3.5">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              {t("activityTitle")}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-semibold tabular-nums text-brand-navy">
                72
              </span>
              <span className="text-[9px] text-emerald-600">↑ 12%</span>
            </div>
          </div>
          <div className="flex h-14 items-end gap-[2px]">
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-brand-blue-strong/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </MacbookFrame>
  );
}

// Keep the useTranslations import alive even if not directly invoked here.
// The MacbookFrame children path uses async server translations; the alias
// import above keeps tree-shaking honest if a future variant goes client.
void useTranslations;
