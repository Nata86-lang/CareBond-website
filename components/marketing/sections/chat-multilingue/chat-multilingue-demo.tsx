"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Pause, Play, ChevronRight } from "lucide-react";

// 10s loop demoing patient (Spanish) ↔ doctor (French) conversation with
// inline translations. Content is intentionally hardcoded ES↔FR regardless
// of the visitor locale — represents the canonical Vaud EMS use case
// (Hispanic patient + French-speaking caregiver). The site locale shows up
// only on the wrapper aria-label and the role label below the avatar.
//
// State machine (step variable):
//   0: chat header only
//   1: bubble 1 (patient ES)
//   2: + translation 1 (FR)
//   3: + bubble 2 (doctor FR)
//   4: + translation 2 (ES)
//   5: + bubble 3 (patient ES)
//   6: + translation 3 (FR) — full state
//   7: all items fade out (exit phase)
//   then back to 0 for next cycle
//
// Animations: pure CSS keyframes in globals.css. Each rendered item
// applies `chat-anim-bubble` or `chat-anim-translation` while in the
// enter/stable phase, and `chat-anim-exit` during step 7. React mount/
// unmount drives the "fresh class application" so animations re-fire on
// each loop iteration.
//
// prefers-reduced-motion: detected client-side in useEffect after mount.
// When true: jump to step 6 + pause. Pause button stays visible so the
// user can opt back in to playback. The site's global reduce-motion CSS
// rule shortens all animation durations to 0.01ms regardless.
//
// Lives in components/marketing/sections/chat-multilingue/ because in the
// final Home layout this demo is the centerpiece of Section 9
// "Communication sans barrière linguistique" — not the Hero. It is being
// used transiently in Hero v1 until Hero v2 (the 4-mockup ecosystem) lands.

type Phase =
  | {
      kind: "bubble";
      id: string;
      side: "patient" | "doctor";
      text: string;
      visibleFrom: number;
    }
  | {
      kind: "translation";
      id: string;
      side: "patient" | "doctor";
      from: string;
      to: string;
      text: string;
      visibleFrom: number;
    };

const PHASES: Phase[] = [
  {
    kind: "bubble",
    id: "d1",
    side: "doctor",
    text: "Bonjour Mme García, comment allez-vous aujourd'hui ?",
    visibleFrom: 1,
  },
  {
    kind: "translation",
    id: "t1",
    side: "doctor",
    from: "FR",
    to: "ES",
    text: "Buenos días Sra. García, ¿cómo se siente hoy?",
    visibleFrom: 2,
  },
  {
    kind: "bubble",
    id: "p1",
    side: "patient",
    text: "Mucho mejor, gracias. Ya no tengo tanto dolor.",
    visibleFrom: 3,
  },
  {
    kind: "translation",
    id: "t2",
    side: "patient",
    from: "ES",
    to: "FR",
    text: "Beaucoup mieux, merci. Je n'ai plus autant de douleur.",
    visibleFrom: 4,
  },
  {
    kind: "bubble",
    id: "d2",
    side: "doctor",
    text: "C'est une excellente nouvelle. Reposez-vous bien.",
    visibleFrom: 5,
  },
  {
    kind: "translation",
    id: "t3",
    side: "doctor",
    from: "FR",
    to: "ES",
    text: "Es una excelente noticia. Descanse bien.",
    visibleFrom: 6,
  },
];

// Milliseconds spent on each step before advancing.
const STEP_DELAYS = [500, 1000, 1500, 1000, 2000, 1000, 2000, 1000];

export function ChatMultilingualDemo() {
  const t = useTranslations("hero");
  // Initial state matches server render: step 0, playing.
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Detect prefers-reduced-motion after mount and jump to the static
  // full-state without looping.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStep(6);
      setIsPlaying(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setStep(6);
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
    const next = step === 7 ? 0 : step + 1;
    const id = setTimeout(() => setStep(next), delay);
    return () => clearTimeout(id);
  }, [step, isPlaying]);

  return (
    <section
      aria-label={t("demoAriaLabel")}
      // min-h locks the demo's height at its maximum so bubbles
      // appearing/disappearing during the 10s loop don't push the
      // page content below up and down — that "constant movement"
      // is very noticeable on phones where the section stacks
      // vertically below.
      className="relative flex h-full min-h-[420px] flex-col"
    >
      {/* Pause / play toggle. Always visible so reduced-motion users can opt-in. */}
      <button
        type="button"
        onClick={() => setIsPlaying((v) => !v)}
        aria-label={isPlaying ? t("demoPauseLabel") : t("demoPlayLabel")}
        className="absolute right-2 top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm transition-colors duration-150 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none"
      >
        {isPlaying ? (
          <Pause size={16} aria-hidden="true" />
        ) : (
          <Play size={16} aria-hidden="true" />
        )}
      </button>

      {/* Chat header */}
      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-400 text-xs font-semibold text-white">
          MG
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-navy">María García</p>
          <p className="text-xs text-neutral-500">{t("chatDemoRole")}</p>
        </div>
      </div>

      {/* Message stream */}
      <div
        aria-hidden="true"
        className="flex-1 space-y-2 overflow-hidden px-3 py-4"
      >
        {PHASES.map((phase) => {
          // Item is rendered if it's within its visible window OR during
          // the global exit phase (step 7), which lets the exit animation
          // play out before the items are removed at step 0.
          const isVisibleWindow = step >= phase.visibleFrom && step <= 6;
          const isExiting = step === 7;
          if (!isVisibleWindow && !isExiting) return null;

          const animClass = isExiting
            ? "chat-anim-exit"
            : phase.kind === "translation"
              ? "chat-anim-translation"
              : "chat-anim-bubble";

          if (phase.kind === "translation") {
            const itemsAlign =
              phase.side === "doctor" ? "items-end" : "items-start";
            const textAlign =
              phase.side === "doctor" ? "text-right" : "text-left";
            return (
              <div
                key={phase.id}
                className={`-mt-0.5 mb-1 flex flex-col ${itemsAlign} px-1 ${animClass}`}
              >
                <div className="flex items-center gap-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                  <span>{phase.from}</span>
                  <ChevronRight size={10} aria-hidden="true" />
                  <span>{phase.to}</span>
                </div>
                <p
                  className={`max-w-[80%] text-xs italic text-neutral-600 ${textAlign}`}
                >
                  {phase.text}
                </p>
              </div>
            );
          }

          const isDoctor = phase.side === "doctor";
          return (
            <div
              key={phase.id}
              className={`flex ${isDoctor ? "justify-end" : "justify-start"} ${animClass}`}
            >
              <div
                className={
                  isDoctor
                    ? "max-w-[82%] rounded-2xl rounded-br-md bg-brand-blue-strong px-3.5 py-2 text-sm text-white"
                    : "max-w-[82%] rounded-2xl rounded-bl-md bg-neutral-100 px-3.5 py-2 text-sm text-brand-navy"
                }
              >
                {phase.text}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
