import { FamilyPhone } from "@/components/marketing/hero/mockups/family-phone";
import { DashboardTile } from "@/components/marketing/sections/how-it-works/dashboard-tile";
import { ClinicsTile } from "./clinics-tile";
import { HospitalsTile } from "./hospitals-tile";
import { PourQuiClient } from "./pour-qui-client";

// Section 4 — Pour qui. Server wrapper that renders all four audience
// visuals (mix of server + client components) and hands them to the
// client tabs component. Each visual is mounted once and the client
// only toggles which one is visible, so tab switching never re-renders
// a server component.
export async function PourQui() {
  return (
    <PourQuiClient
      emsVisual={<DashboardTile />}
      spitexVisual={<FamilyPhone step={4} />}
      hospitalsVisual={<HospitalsTile />}
      clinicsVisual={<ClinicsTile />}
    />
  );
}
