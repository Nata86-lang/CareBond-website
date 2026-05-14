import Image from "next/image";
import { getTranslations } from "next-intl/server";

// Section 7.5 main visual — a professional isometric 3D illustration
// of a hospital floor with operating theatres, MRI suite, wards,
// laboratory and main lobby, plus an indoor wayfinding route. Source
// asset lives at /public/images/floor-plans/hospital.jpg. Next.js
// Image handles AVIF/WebP optimisation, responsive sizing and lazy
// loading. The illustration is the centerpiece — no chrome around it.
export async function HospitalIsometric() {
  const t = await getTranslations("floorPlans.hospital");

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-mockup-lg">
      <Image
        src="/images/floor-plans/hospital.jpg"
        alt={t("alt")}
        width={2752}
        height={1536}
        className="h-auto w-full"
        sizes="(max-width: 1280px) 100vw, 1280px"
        quality={90}
      />
    </div>
  );
}
