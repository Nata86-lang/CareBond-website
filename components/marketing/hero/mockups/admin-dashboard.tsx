import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  AlertTriangle,
  Bell,
  Calendar,
  Info,
  LayoutGrid,
  LogOut,
  ScrollText,
  Search,
  Settings,
  Smartphone,
  Stethoscope,
  Users,
} from "lucide-react";
import { MacbookFrame } from "./macbook-frame";

// Admin dashboard mockup. Wide variant rebuilt to match the real CareBond
// product chrome: left sidebar, top bar with search + bell + avatar,
// welcome row + date range pill, 4 colored KPI cards, dual-period bar
// chart over 12 months, donut + stat tiles, recent activities and alert
// feeds. CSS keyframes give it perceived life: bars grow staggered, donut
// fades in, alert icon and bell dot pulse perpetually. Server component,
// zero client JS.

const CHART_BARS: { prev: number; curr: number }[] = [
  { prev: 55, curr: 30 },
  { prev: 68, curr: 42 },
  { prev: 50, curr: 28 },
  { prev: 82, curr: 58 },
  { prev: 88, curr: 60 },
  { prev: 72, curr: 45 },
  { prev: 58, curr: 32 },
  { prev: 70, curr: 40 },
  { prev: 95, curr: 72 },
  { prev: 60, curr: 30 },
  { prev: 78, curr: 55 },
  { prev: 64, curr: 36 },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TIMEFRAMES = ["1D", "1W", "1M", "3M", "6M", "1Y"] as const;

// Donut geometry — perimeter = 2 * π * r, r = 16 → ~100.53
const DONUT_PERIMETER = 100.53;
const DONUT_BLUE_SEGMENT = 60; // 60% of ring
const DONUT_GREEN_SEGMENT = 30; // 30% of ring (10% gap = grey track behind)

export async function AdminDashboard() {
  const t = await getTranslations("hero.ecosystem.dashboard");

  const sidebar = [
    { Icon: LayoutGrid, label: t("sidebar.dashboard"), active: true },
    { Icon: Users, label: t("sidebar.users") },
    { Icon: ScrollText, label: t("sidebar.logs") },
    { Icon: Settings, label: t("sidebar.config") },
    { Icon: LogOut, label: t("sidebar.logout") },
  ];

  const kpis = [
    {
      Icon: Users,
      label: t("residents"),
      value: "20,000",
      trend: "+22%",
      direction: "up" as const,
      bg: "bg-brand-blue",
    },
    {
      Icon: Stethoscope,
      label: t("professionals"),
      value: "2,393",
      trend: "-22%",
      direction: "down" as const,
      bg: "bg-brand-navy",
    },
    {
      Icon: AlertTriangle,
      label: t("alerts"),
      value: "104",
      trend: "+22%",
      direction: "up" as const,
      bg: "bg-[#7B4B1F]",
      pulse: true,
    },
    {
      Icon: Smartphone,
      label: t("devices"),
      value: "21,567",
      trend: "+22%",
      direction: "up" as const,
      bg: "bg-[#0F766E]",
    },
  ];

  return (
    <MacbookFrame flush>
      <div className="flex h-[700px] overflow-hidden bg-neutral-50">
        {/* Sidebar */}
        <aside className="w-44 shrink-0 border-r border-neutral-200 bg-white px-3 py-4">
          <div className="flex items-center px-2">
            <Image
              src="/logos/carebond-logo.png"
              alt=""
              width={2481}
              height={2291}
              priority
              className="h-7 w-auto"
            />
          </div>
          <nav className="mt-7 space-y-0.5">
            {sidebar.map(({ Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                  active
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-neutral-600"
                }`}
              >
                <Icon
                  size={14}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main column */}
        <main className="flex flex-1 flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-3 border-b border-neutral-200 bg-white px-5 py-2.5">
            <div className="flex max-w-md flex-1 items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5">
              <Search
                size={13}
                strokeWidth={2}
                className="text-neutral-400"
                aria-hidden="true"
              />
              <span className="text-[11px] text-neutral-400">
                {t("search")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bell
                  size={16}
                  strokeWidth={2}
                  className="text-neutral-600"
                  aria-hidden="true"
                />
                <span className="dashboard-anim-bell-pulse absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
              </div>
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-400" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4 overflow-hidden p-5">
            {/* Welcome + date */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight text-brand-navy">
                {t("welcome")}
              </h2>
              <div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1">
                <Calendar
                  size={11}
                  strokeWidth={2}
                  className="text-neutral-500"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-medium text-neutral-600 tabular-nums">
                  01 Jan 2024 — 07 Jan 2024
                </span>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-4 gap-3">
              {kpis.map((k, i) => (
                <div
                  key={k.label}
                  className={`dashboard-anim-counter rounded-xl p-3 text-white ${k.bg}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 ${
                        k.pulse ? "dashboard-anim-alert-pulse" : ""
                      }`}
                    >
                      <k.Icon
                        size={14}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-[10px] font-medium opacity-90">
                      {k.label}
                    </p>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between gap-1">
                    <p className="text-lg font-semibold tabular-nums tracking-tight">
                      {k.value}
                    </p>
                    <span
                      className={`flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9px] font-semibold tabular-nums ${
                        k.direction === "up"
                          ? "bg-emerald-400/25 text-emerald-50"
                          : "bg-red-400/25 text-red-50"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="dashboard-anim-trend-bounce"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        {k.direction === "up" ? "↑" : "↓"}
                      </span>
                      {k.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart row: bars 2/3 + donut card 1/3 */}
            <div className="grid grid-cols-3 gap-3">
              {/* Bar chart */}
              <div className="col-span-2 rounded-xl border border-neutral-200 bg-white p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold tracking-tight text-brand-navy">
                      {t("activityTitle")}
                    </p>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
                      <span
                        aria-hidden="true"
                        className="dashboard-anim-live-dot h-1 w-1 rounded-full bg-emerald-500"
                      />
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 rounded-lg bg-neutral-100 p-0.5">
                    {TIMEFRAMES.map((tf, i) => (
                      <span
                        key={tf}
                        className={`rounded px-2 py-0.5 text-[9px] font-semibold ${
                          i === TIMEFRAMES.length - 1
                            ? "bg-brand-blue text-white shadow-sm"
                            : "text-neutral-500"
                        }`}
                      >
                        {tf}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2 py-1">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand-blue/30"
                    />
                    <span className="text-[9px] text-neutral-500">
                      {t("previousPeriod")}
                    </span>
                    <span className="text-[10px] font-semibold tabular-nums text-brand-navy">
                      49K
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2 py-1">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand-blue"
                    />
                    <span className="text-[9px] text-neutral-500">
                      {t("currentPeriod")}
                    </span>
                    <span className="text-[10px] font-semibold tabular-nums text-brand-navy">
                      38K
                    </span>
                  </span>
                </div>
                <div className="mt-4 flex h-32 items-end gap-1.5 sm:gap-2">
                  {CHART_BARS.map((bar, i) => {
                    const isNow = i === CHART_BARS.length - 1;
                    return (
                      <div
                        key={MONTHS[i]}
                        className="flex flex-1 items-end gap-0.5"
                      >
                        <div
                          className="dashboard-anim-bar flex-1 rounded-t bg-brand-blue/25"
                          style={{
                            height: `${bar.prev}%`,
                            animationDelay: `${i * 0.25}s`,
                          }}
                        />
                        <div
                          className={`flex-1 rounded-t bg-brand-blue ${
                            isNow
                              ? "dashboard-anim-bar-now shadow-[0_0_10px_rgba(63,142,243,0.5)]"
                              : "dashboard-anim-bar"
                          }`}
                          style={{
                            height: `${bar.curr}%`,
                            animationDelay: isNow ? "0s" : `${i * 0.25 + 0.12}s`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-1.5 flex justify-between px-0.5 text-[9px] font-medium text-neutral-400">
                  {MONTHS.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>

              {/* Donut + stat tiles */}
              <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                <div className="flex items-center gap-1.5">
                  <Info
                    size={12}
                    strokeWidth={2}
                    className="text-brand-blue-strong"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold tracking-tight text-brand-navy">
                    {t("overallTitle")}
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-neutral-200 p-2">
                    <p className="text-[9px] text-neutral-500">
                      {t("conversations")}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold tabular-nums text-brand-navy">
                      6,987
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-2">
                    <p className="text-[9px] text-neutral-500">
                      {t("families")}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold tabular-nums text-brand-navy">
                      4,896
                    </p>
                  </div>
                </div>
                <div className="mt-3 border-t border-neutral-100 pt-3">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    {t("usageOverview")}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <svg
                      viewBox="0 0 40 40"
                      className="dashboard-anim-donut-breathe h-14 w-14"
                      aria-hidden="true"
                    >
                      {/* Track */}
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="4.5"
                      />
                      {/* Blue segment */}
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#3F8EF3"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeDasharray={`${DONUT_BLUE_SEGMENT} ${DONUT_PERIMETER}`}
                        className="dashboard-anim-donut"
                        style={
                          {
                            ["--donut-start" as string]: `${DONUT_PERIMETER}`,
                          } as React.CSSProperties
                        }
                      />
                      {/* Green segment */}
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeDasharray={`${DONUT_GREEN_SEGMENT} ${DONUT_PERIMETER}`}
                        strokeDashoffset={`-${DONUT_BLUE_SEGMENT + 2}`}
                        className="dashboard-anim-donut"
                        style={
                          {
                            ["--donut-start" as string]: `${-DONUT_BLUE_SEGMENT - 2 + DONUT_PERIMETER}`,
                            animationDelay: "0.3s",
                          } as React.CSSProperties
                        }
                      />
                    </svg>
                    <div className="flex-1 space-y-1.5">
                      <div>
                        <p className="text-[9px] text-neutral-500">
                          {t("firstTime")}
                        </p>
                        <p className="text-[11px] font-semibold tabular-nums text-brand-navy">
                          5.5K{" "}
                          <span className="ml-0.5 rounded bg-emerald-50 px-1 py-0.5 text-[8px] font-semibold text-emerald-700">
                            ↑ 25%
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] text-neutral-500">
                          {t("returnUsers")}
                        </p>
                        <p className="text-[11px] font-semibold tabular-nums text-brand-navy">
                          3.5K{" "}
                          <span className="ml-0.5 rounded bg-emerald-50 px-1 py-0.5 text-[8px] font-semibold text-emerald-700">
                            ↑ 21%
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                <p className="text-xs font-semibold tracking-tight text-brand-navy">
                  {t("recentActivities")}
                </p>
                <ul className="mt-3 space-y-2">
                  {["natanael@carebond.ch", "marie.dupont@carebond.ch"].map(
                    (email) => (
                      <li
                        key={email}
                        className="flex items-start gap-2 rounded-lg border border-neutral-200 p-2"
                      >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                          <Info
                            size={10}
                            strokeWidth={2}
                            className="text-brand-blue-strong"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-semibold text-brand-navy">
                            {t("activityPasswordReset")}
                          </p>
                          <p className="truncate text-[9px] text-neutral-500">
                            {email}
                          </p>
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-tight text-brand-navy">
                    {t("importantAlerts")}
                  </p>
                  <span className="text-[9px] font-medium text-brand-blue-strong">
                    {t("viewAll")}
                  </span>
                </div>
                <div className="mt-3 rounded-lg border-l-2 border-l-amber-500 bg-amber-50/40 p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle
                        size={11}
                        strokeWidth={2}
                        className="text-amber-600"
                        aria-hidden="true"
                      />
                      <p className="text-[10px] font-semibold text-brand-navy">
                        {t("alertSample")}
                      </p>
                    </div>
                    <span className="rounded bg-amber-500 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
                      {t("alertWarning")}
                    </span>
                  </div>
                  <p className="mt-1 text-[9px] leading-snug text-neutral-600">
                    {t("alertSampleBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MacbookFrame>
  );
}
