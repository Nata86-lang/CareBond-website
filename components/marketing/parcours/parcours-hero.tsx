"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CardLayer } from "./CardLayer";
import { ImageSequenceSource } from "./ImageSequenceSource";
import { ScrollSequence } from "./ScrollSequence";
import { residence } from "./residence";
import type { Experience } from "./types";
import "./parcours.css";

// Opening of the home page: a scroll-driven flight through a residence, with the
// CareBond messages appearing as the camera reaches each person. When the flight
// ends, the page continues into the regular hero and sections below.
//
// Footage lives in /public/parcours/<slug>/{desktop,mobile}/ (WebP frames plus a
// manifest.json). Only the first frames load with the page; the rest starts on the
// visitor's first scroll, so someone who never scrolls never downloads the film.

const TRACK_VH = 500;
const HEADER_PX = 65; // keep in sync with --header-h in parcours.css

/** Interface texts around the cards, per site locale. */
const UI: Record<
  string,
  {
    section: string;
    nav: string;
    tabs: [string, string, string];
    skip: string;
    hint: string;
    now: string;
  }
> = {
  fr: {
    section: "CareBond en situation : une résidence",
    nav: "Parcours",
    tabs: ["Résidence", "Domicile", "Recovery"],
    skip: "Passer",
    hint: "Faites défiler",
    now: "maintenant",
  },
  de: {
    section: "CareBond im Einsatz: ein Pflegeheim",
    nav: "Einsatzbereiche",
    tabs: ["Pflegeheim", "Zuhause", "Recovery"],
    skip: "Überspringen",
    hint: "Scrollen",
    now: "jetzt",
  },
  it: {
    section: "CareBond in azione: una casa per anziani",
    nav: "Percorsi",
    tabs: ["Residenza", "Domicilio", "Recovery"],
    skip: "Salta",
    hint: "Scorri",
    now: "ora",
  },
  en: {
    section: "CareBond in practice: a care home",
    nav: "Journeys",
    tabs: ["Care home", "Home care", "Recovery"],
    skip: "Skip",
    hint: "Scroll",
    now: "now",
  },
  es: {
    section: "CareBond en acción: una residencia",
    nav: "Recorridos",
    tabs: ["Residencia", "Domicilio", "Recovery"],
    skip: "Saltar",
    hint: "Desplácese",
    now: "ahora",
  },
  ca: {
    section: "CareBond en acció: una residència",
    nav: "Recorreguts",
    tabs: ["Residència", "Domicili", "Recovery"],
    skip: "Omet",
    hint: "Desplaceu-vos",
    now: "ara",
  },
};

function forLocale(locale: string): Experience {
  const ui = UI[locale] ?? UI.fr!;
  const exp = residence(locale);
  return {
    ...exp,
    cards: exp.cards.map((c) =>
      c.type === "hero" ? { ...c, hint: ui.hint } : c.type === "push" ? { ...c, now: ui.now } : c
    ),
  };
}

export function ParcoursHero({ locale }: { locale: string }) {
  const rootRef = useRef<HTMLElement>(null);
  const ui = UI[locale] ?? UI.fr!;
  const exp = forLocale(locale);
  const positions = exp.keyframes.map((k, i) => k.at ?? i / (exp.keyframes.length - 1));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = <T extends Element>(sel: string) => root.querySelector(sel) as T;
    const track = q<HTMLElement>(".track");
    const canvas = q<HTMLCanvasElement>(".stage__canvas");
    const fill = q<HTMLElement>(".timeline__fill");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.toggle("reduced", reduced);
    const variant = window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";

    const cards = new CardLayer(q(".cards"), q<SVGSVGElement>(".traces"), exp.cards);
    let seq: ScrollSequence | null = null;
    let source: ImageSequenceSource | null = null;
    let cancelled = false;
    let frame = 0;

    const progress = () => {
      const r = track.getBoundingClientRect();
      const span = r.height - (window.innerHeight - HEADER_PX);
      return span > 0 ? Math.min(1, Math.max(0, (HEADER_PX - r.top) / span)) : 0;
    };
    const render = () => {
      const p = progress();
      seq?.setProgress(p);
      cards.update(p);
      fill.style.transform = `scaleX(${p.toFixed(4)})`;
    };
    const onScroll = () => {
      source?.loadRest();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };

    ImageSequenceSource.fromUrl(`/parcours/${exp.slug}/${variant}`)
      .then(async (s) => {
        await s.ready();
        if (cancelled) return;
        source = s;
        seq = new ScrollSequence(canvas, s, reduced ? positions : undefined);
        canvas.classList.add("is-ready");
        render();
        if (window.scrollY > 0) s.loadRest();
      })
      .catch(() => {
        /* the poster image stays in place */
      });

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      seq?.destroy();
      cards.destroy();
    };
    // The experience config is static; re-run only when the locale changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <section ref={rootRef} className="parcours" aria-label={ui.section}>
      <div className="track" style={{ height: `${TRACK_VH}vh` }}>
        <div className="stage">
          <div className="stage__poster stage__poster--desktop" aria-hidden="true" />
          <div className="stage__poster stage__poster--mobile" aria-hidden="true" />
          <canvas className="stage__canvas" aria-hidden="true" />
          <div className="stage__scrim" aria-hidden="true" />
          <div className="stage__ui">
            <nav className="tabs" aria-label={ui.nav}>
              <button type="button" aria-current="true">
                {ui.tabs[0]}
              </button>
              <Link href={`/${locale}/solutions/home-care`}>{ui.tabs[1]}</Link>
              <Link href={`/${locale}/solutions/recovery`}>{ui.tabs[2]}</Link>
            </nav>
            <svg className="traces" aria-hidden="true" />
            <div className="cards" />
            <div className="hud">
              <div className="timeline" aria-hidden="true">
                <div className="timeline__fill" />
                {positions.map((p) => (
                  <span key={p} className="timeline__tick" style={{ left: `${p * 100}%` }} />
                ))}
              </div>
            </div>
            <a className="skip" href="#contenu">
              {ui.skip}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
