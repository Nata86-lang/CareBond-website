import { getTranslations } from "next-intl/server";
import { MapPin, Navigation } from "lucide-react";

// SVG-based isometric hospital floor plan visualization used in the
// Plans 3D section and as the floor-plans bento card visual. Six
// rooms across two rows with a center corridor, plus a dashed
// wayfinding path from reception to radiology and two pins ("vous
// êtes ici" + destination). Pure SVG, server-rendered, zero JS.
//
// Iso projection: each room rectangle is a 4-point polygon manually
// placed in screen coords. The angle is approximately 30 degrees
// (cos30 ≈ 0.866, sin30 ≈ 0.5), tuned visually for tight composition.

type Room = {
  key: "reception" | "emergency" | "medicine" | "imaging" | "geriatrics" | "pharmacy";
  // Center point of the room's iso polygon (where the label sits).
  cx: number;
  cy: number;
  // The four iso corners: top, right, bottom, left.
  points: string;
  accent: "blue" | "red" | "default";
};

const ROOMS: Room[] = [
  // Top row (back of the floor): reception · medicine · geriatrics
  {
    key: "reception",
    cx: 215,
    cy: 110,
    points: "120,60 270,60 250,160 100,160",
    accent: "blue",
  },
  {
    key: "medicine",
    cx: 360,
    cy: 110,
    points: "270,60 420,60 400,160 250,160",
    accent: "default",
  },
  {
    key: "geriatrics",
    cx: 505,
    cy: 110,
    points: "420,60 570,60 550,160 400,160",
    accent: "default",
  },
  // Bottom row (front of the floor): emergency · imaging · pharmacy
  {
    key: "emergency",
    cx: 195,
    cy: 220,
    points: "100,160 250,160 230,260 80,260",
    accent: "red",
  },
  {
    key: "imaging",
    cx: 340,
    cy: 220,
    points: "250,160 400,160 380,260 230,260",
    accent: "blue",
  },
  {
    key: "pharmacy",
    cx: 485,
    cy: 220,
    points: "400,160 550,160 530,260 380,260",
    accent: "default",
  },
];

const ACCENT_FILL = {
  blue: "rgb(63 142 243 / 0.12)",
  red: "rgb(220 38 38 / 0.10)",
  default: "rgb(10 27 57 / 0.04)",
};

const ACCENT_STROKE = {
  blue: "rgb(37 99 235 / 0.45)",
  red: "rgb(220 38 38 / 0.40)",
  default: "rgb(10 27 57 / 0.18)",
};

export async function HospitalIsometric() {
  const t = await getTranslations("floorPlans.hospital");

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-mockup-lg sm:p-8">
      {/* Header strip */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
            <Navigation
              size={14}
              strokeWidth={2}
              className="text-brand-blue-strong"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              {t("eyebrow")}
            </p>
            <p className="text-sm font-semibold tracking-tight text-brand-navy">
              {t("title")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-strong" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-blue-strong">
            {t("liveLabel")}
          </span>
        </div>
      </div>

      {/* Isometric floor plan SVG */}
      <svg
        viewBox="0 0 650 320"
        className="w-full"
        aria-hidden="true"
        role="img"
      >
        {/* Drop shadow underneath the floor */}
        <ellipse
          cx="325"
          cy="285"
          rx="280"
          ry="14"
          fill="rgb(10 27 57 / 0.10)"
        />

        {/* Floor base */}
        <polygon
          points="80,60 570,60 550,260 80,260"
          fill="#FAFBFC"
          stroke="#E7E8EB"
          strokeWidth="1.5"
        />

        {/* Corridor dividing the two rows */}
        <line
          x1="100"
          y1="160"
          x2="550"
          y2="160"
          stroke="#E7E8EB"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />

        {/* Rooms */}
        {ROOMS.map((room) => (
          <polygon
            key={room.key}
            points={room.points}
            fill={ACCENT_FILL[room.accent]}
            stroke={ACCENT_STROKE[room.accent]}
            strokeWidth="1.5"
          />
        ))}

        {/* Vertical walls (subtle separators between rooms in same row) */}
        <line x1="260" y1="60" x2="240" y2="160" stroke="#E7E8EB" strokeWidth="1" />
        <line x1="410" y1="60" x2="390" y2="160" stroke="#E7E8EB" strokeWidth="1" />
        <line x1="240" y1="160" x2="220" y2="260" stroke="#E7E8EB" strokeWidth="1" />
        <line x1="390" y1="160" x2="370" y2="260" stroke="#E7E8EB" strokeWidth="1" />

        {/* Wayfinding path: reception → imaging (dashed, curved through corridor) */}
        <path
          d="M 215 110 L 215 200 L 340 200 L 340 220"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Pins */}
        {/* "You are here" — Reception */}
        <circle cx="215" cy="110" r="9" fill="#2563EB" />
        <circle cx="215" cy="110" r="14" fill="#2563EB" opacity="0.18" />
        <text
          x="215"
          y="113"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="white"
        >
          {t("youAreHere")}
        </text>

        {/* Destination — Imaging */}
        <circle cx="340" cy="220" r="9" fill="#DC2626" />
        <text
          x="340"
          y="224"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="white"
        >
          ↓
        </text>

        {/* Room labels */}
        {ROOMS.map((room) => (
          <text
            key={room.key}
            x={room.cx}
            y={room.cy}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#0A1B39"
            style={{ pointerEvents: "none" }}
          >
            {t(`rooms.${room.key}`)}
          </text>
        ))}
      </svg>

      {/* Path metadata strip */}
      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50/60 p-3">
        <div className="flex min-w-0 items-center gap-2">
          <MapPin
            size={14}
            strokeWidth={2}
            className="shrink-0 text-brand-blue-strong"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold tracking-tight text-brand-navy">
              {t("pathLabel")}
            </p>
            <p className="text-[10px] text-neutral-500">
              {t("rooms.reception")} → {t("rooms.imaging")}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1 tabular-nums text-neutral-600">
            <span className="font-semibold text-brand-navy">{t("distance")}</span>
          </span>
          <span className="flex items-center gap-1 tabular-nums text-neutral-600">
            <span className="font-semibold text-brand-navy">{t("eta")}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
