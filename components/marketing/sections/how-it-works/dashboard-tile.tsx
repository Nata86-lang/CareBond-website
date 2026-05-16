import { getTranslations } from "next-intl/server";
import { AlertTriangle, Smartphone, Stethoscope, Users } from "lucide-react";

// Compact dashboard tile used as the 4th surface in Section 3. Visually
// echoes the hero AdminDashboard (same brand colors, same 4 KPIs) but
// scaled to phone-mockup dimensions so it sits alongside the three phone
// mockups in the surfaces row.
//
// Server component. No animations here — Section 3 is the "tour", the
// Hero already owns the "alive" feel.
export async function DashboardTile() {
  const t = await getTranslations("hero.ecosystem.dashboard");

  const kpis = [
    {
      Icon: Users,
      label: t("residents"),
      value: "20K",
      bg: "bg-brand-blue",
    },
    {
      Icon: Stethoscope,
      label: t("professionals"),
      value: "2,393",
      bg: "bg-brand-navy",
    },
    {
      Icon: AlertTriangle,
      label: t("alerts"),
      value: "104",
      bg: "bg-[#7B4B1F]",
    },
    {
      Icon: Smartphone,
      label: t("devices"),
      value: "21K",
      bg: "bg-[#0F766E]",
    },
  ];

  return (
    <div className="w-[224px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-mockup-floor">
      {/* Title bar evokes the MacBook chrome */}
      <div className="flex items-center gap-1 bg-[#1A1A1F] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-[8px] font-medium text-white/50">
          carebond.ch
        </span>
      </div>
      <div className="bg-neutral-50 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-neutral-500">
            CareBond · EMS
          </p>
          <span className="rounded-full border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-amber-700">
            {t("demoBadge")}
          </span>
        </div>
        <p className="mt-0.5 text-[11px] font-semibold tracking-tight text-brand-navy">
          {t("welcome")}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {kpis.map((k) => (
            <div
              key={k.label}
              className={`rounded-lg p-2 text-white ${k.bg}`}
            >
              <div className="flex items-center gap-1">
                <k.Icon
                  size={9}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <p className="truncate text-[7px] font-medium opacity-90">
                  {k.label}
                </p>
              </div>
              <p className="mt-1 text-[12px] font-semibold tabular-nums tracking-tight">
                {k.value}
              </p>
            </div>
          ))}
        </div>
        {/* Mini chart strip */}
        <div className="mt-3 rounded-lg border border-neutral-200 bg-white p-2">
          <p className="text-[8px] font-medium text-neutral-500">
            {t("activityTitle")}
          </p>
          <div className="mt-1.5 flex h-8 items-end gap-0.5">
            {[40, 55, 35, 70, 80, 60, 50, 65, 90, 55, 75, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-brand-blue/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
