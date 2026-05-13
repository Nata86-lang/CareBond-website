"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Pause, Play } from "lucide-react";
import { PatientPhone } from "./mockups/patient-phone";
import { FamilyPhone } from "./mockups/family-phone";
import { ProfessionalPhone } from "./mockups/professional-phone";
import { AdminDashboard } from "./mockups/admin-dashboard";

// Orchestrates the 4-mockup ecosystem loop. State machine drives a `step`
// from 0 → 5 → back to 0 over 10 seconds:
//   step 0 (t=0):     idle baseline, no animation
//   step 1 (t=2s):    Patient SOS button pulses
//   step 2 (t=3.5s):  Family mini-report slides in
//   step 3 (t=5s):    Professional vital value swaps from "—" to "78 bpm"
//   step 4 (t=6.5s):  Admin dashboard counter 71 → 72
//   step 5 (t=8.5s):  hold final state
//   (t=10s):          reset to step 0, loop restarts
//
// Mockups are client components that read `step` and apply one-shot CSS
// animation classes via .eco-anim-* (defined in globals.css). React keys
// tied to step force fresh mounts on each loop iteration so CSS animations
// re-fire reliably.
//
// prefers-reduced-motion: detected via matchMedia in useEffect. When true,
// jump to step 5 (final state, all elements visible without animation) and
// pause the loop. Pause button stays interactive so the user can opt back
// in to motion.
//
// WCAG 2.2.2 compliance: loop exceeds 5s, so a pause control is mandatory.
// The button is positioned top-right of the composition wrapper, always
// keyboard-reachable, with a localized aria-label that swaps with state.

const STEP_DELAYS = [2000, 1500, 1500, 1500, 2000, 1500];

export function EcosystemComposition() {
  const t = useTranslations("hero.ecosystem");
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Reduced-motion detection after mount.
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

  // State machine.
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
      {/* Pause / play toggle */}
      <button
        type="button"
        onClick={() => setIsPlaying((v) => !v)}
        aria-label={isPlaying ? t("pauseLabel") : t("playLabel")}
        className="absolute right-0 top-0 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition-colors duration-150 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
      >
        {isPlaying ? (
          <Pause size={16} aria-hidden="true" />
        ) : (
          <Play size={16} aria-hidden="true" />
        )}
      </button>

      {/* Mockup grid */}
      <div
        aria-hidden="true"
        className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[auto_1fr] lg:gap-10"
      >
        {/* Phones cluster — slight vertical offsets on lg for rhythm */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-3 lg:flex lg:items-start lg:gap-3">
          <div className="flex justify-center lg:translate-y-0">
            <PatientPhone step={step} />
          </div>
          <div className="flex justify-center lg:translate-y-5">
            <FamilyPhone step={step} />
          </div>
          <div className="flex justify-center lg:translate-y-2">
            <ProfessionalPhone step={step} />
          </div>
        </div>
        {/* Dashboard */}
        <div className="flex justify-center lg:justify-end">
          <AdminDashboard step={step} />
        </div>
      </div>
    </section>
  );
}
