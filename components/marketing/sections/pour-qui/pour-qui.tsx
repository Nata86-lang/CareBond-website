import { getTranslations } from "next-intl/server";
import { FamilyPhone } from "@/components/marketing/hero/mockups/family-phone";
import { PatientPhone } from "@/components/marketing/hero/mockups/patient-phone";
import { DashboardTile } from "@/components/marketing/sections/how-it-works/dashboard-tile";
import { ClinicsTile } from "./clinics-tile";
import { HospitalsTile } from "./hospitals-tile";
import { PourQuiClient } from "./pour-qui-client";

// Section 4 — Pour qui. Server wrapper that renders all four audience
// visuals (mix of server + client components) and hands them to the
// client tabs component. Each visual is mounted once and the client
// only toggles which one is visible, so tab switching never re-renders
// a server component.
// The tab keys and the /solutions slugs disagree on one name: the tab is
// "spitex", the route is "home-care".
const AUDIENCE_TO_SLUG = {
  ems: "ems",
  spitex: "home-care",
  recovery: "recovery",
  hospitals: "hospitals",
  clinics: "clinics",
} as const;

export async function PourQui({ locale }: { locale: string }) {
  const t = await getTranslations("solutions");
  const solutionLinks = Object.fromEntries(
    Object.entries(AUDIENCE_TO_SLUG).map(([audience, slug]) => [
      audience,
      { href: `/${locale}/solutions/${slug}`, label: t(`${slug}.eyebrow`) },
    ]),
  );

  return (
    <PourQuiClient
      solutionLinks={solutionLinks}
      emsVisual={<DashboardTile />}
      spitexVisual={<FamilyPhone step={4} />}
      recoveryVisual={<PatientPhone step={4} />}
      hospitalsVisual={<HospitalsTile />}
      clinicsVisual={<ClinicsTile />}
    />
  );
}
