import { getTranslations } from "next-intl/server";

// Hôpitaux audience visual — a grid of departments with status dots and
// tiny patient counts. Conveys "multi-department platform" at a glance
// without committing to a full screen mockup.
//
// Status colors mirror the dashboard KPI palette: emerald = stable,
// amber = monitoring, red = critical. Subtle to avoid alarming the
// marketing reader, but recognizable to a hospital ops audience.
const DEPARTMENTS = [
  { key: "emergency", count: 24, status: "amber" as const },
  { key: "medicine", count: 58, status: "emerald" as const },
  { key: "geriatrics", count: 41, status: "emerald" as const },
  { key: "pediatrics", count: 19, status: "emerald" as const },
  { key: "surgery", count: 12, status: "red" as const },
  { key: "radiology", count: 8, status: "emerald" as const },
];

const STATUS_DOT = {
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
};

const STATUS_LABEL = {
  emerald: "OK",
  amber: "Review",
  red: "Crit.",
};

export async function HospitalsTile() {
  const t = await getTranslations("pourQui.audiences.hospitals.tile");

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-neutral-200 bg-white p-5 shadow-mockup">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
            {t("eyebrow")}
          </p>
          <p className="mt-0.5 text-sm font-semibold tracking-tight text-brand-navy">
            {t("title")}
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-emerald-700">
            {t("liveLabel")}
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {DEPARTMENTS.map((d) => (
          <div
            key={d.key}
            className="flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2.5"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold tracking-tight text-brand-navy">
                {t(`departments.${d.key}`)}
              </p>
              <p className="mt-0.5 text-[10px] tabular-nums text-neutral-500">
                {d.count} {t("patientsLabel")}
              </p>
            </div>
            <div className="ml-2 flex items-center gap-1">
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[d.status]}`}
              />
              <span
                className={`text-[9px] font-semibold uppercase tracking-wide ${
                  d.status === "emerald"
                    ? "text-emerald-700"
                    : d.status === "amber"
                      ? "text-amber-700"
                      : "text-red-700"
                }`}
              >
                {STATUS_LABEL[d.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
