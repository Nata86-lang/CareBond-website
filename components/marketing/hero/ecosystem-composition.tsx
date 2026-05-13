"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Pause, Play } from "lucide-react";
import { PatientPhone } from "./mockups/patient-phone";
import { FamilyPhone } from "./mockups/family-phone";
import { ProfessionalPhone } from "./mockups/professional-phone";
import { AdminDashboard } from "./mockups/admin-dashboard";

// Orchestrates the 4-mockup ecosystem loop with a "depth" composition:
// the admin dashboard sits in back (largest visual mass), with the three
// phones in front, slightly tilted, forming a balanced ensemble.
//
// Loop timing (10s, per Phase 1B refinement):
//   t=0     step 0   idle baseline
//   t=2s    step 1   Patient SOS button pulses
//   t=3.5s  step 2   Family mini-report slides in
//   t=5s    step 3   Professional vital value swaps "—" → "78 bpm"
//   t=6.5s  step 4   Admin dashboard counter 71 → 72
//   t=8.5s  step 5   final state hold
//   t=10s   step 0   reset, loop restarts
//
// React keys tied to step force fresh DOM mounts so one-shot CSS
// animations re-fire reliably on each iteration.
//
// WCAG 2.2.2: pause/play button is mandatory because the loop exceeds 5s.
// It floats at the top-right corner of the composition wrapper, keyboard-
// reachable, with a locale-aware aria-label that swaps with state.
//
// prefers-reduced-motion: detected via matchMedia post-mount. When true,
// jumps to step 5 (full visible state) and pauses. User can still hit play
// to opt in to motion.

const STEP_DELAYS = [2000, 1500, 1500, 1500, 2000, 1500];

export function EcosystemComposition() {
  const t = useTranslations("hero.ecosystem");
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStep(5);
      setIsPlaying(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setStep(5);
        setIsPlaying(false);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const delay = STEP_DELAYS[step];
    if (delay === undefined) return;
    const next = step === 5 ? 0 : step + 1;
    const id = setTimeout(() => setStep(next), delay);
    return () => clearTimeout(id);
  }, [step, isPlaying]);

  return (
    <section
      aria-label={t("ariaLabel")}
      className="relative w-full"
    >
      {/* Pause / play toggle — floats top-right */}
      <button
        type="button"
        onClick={() => setIsPlaying((v) => !v)}
        aria-label={isPlaying ? t("pauseLabel") : t("playLabel")}
        className="absolute right-0 top-0 z-30 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-all duration-150 hover:text-brand-navy hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
      >
        {isPlaying ? (
          <Pause size={14} aria-hidden="true" />
        ) : (
          <Play size={14} aria-hidden="true" />
        )}
      </button>

      {/* Mobile / tablet: clean vertical stack (Patient → Family → Pro → Dashboard) */}
      <div
        aria-hidden="true"
        className="flex flex-col items-center gap-6 lg:hidden"
      >
        <PatientPhone step={step} />
        <FamilyPhone step={step} />
        <ProfessionalPhone step={step} />
        <AdminDashboard step={step} />
      </div>

      {/* Desktop ≥ lg: depth composition — dashboard back, phones tilted in front */}
      <div
        aria-hidden="true"
        className="relative hidden h-[560px] lg:block"
      >
        {/* Dashboard back layer, centered-right */}
        <div className="absolute right-0 top-8 z-10 w-[88%]">
          <AdminDashboard step={step} />
        </div>

        {/* Patient phone — front-left, tilted slightly counter-clockwise */}
        <div
          className="absolute bottom-2 left-0 z-20 motion-reduce:-rotate-0"
          style={{ transform: "rotate(-4deg)" }}
        >
          <PatientPhone step={step} />
        </div>

        {/* Family phone — front-center, no rotation, slightly raised */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <FamilyPhone step={step} />
        </div>

        {/* Professional phone — front-right, tilted slightly clockwise */}
        <div
          className="absolute bottom-2 right-0 z-20 motion-reduce:rotate-0"
          style={{ transform: "rotate(3deg)" }}
        >
          <ProfessionalPhone step={step} />
        </div>
      </div>
    </section>
  );
}
