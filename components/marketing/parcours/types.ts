export type Range = [number, number];

/** One scene of the flight. Keyframe k sits at progress k / (keyframes.length - 1). */
export interface Keyframe {
  id: string;
  /** Chapter name shown while the camera is in this scene. */
  label: string;
  /** What the shot shows (storyboard caption on the placeholder frames). */
  scene: string;
  /** Scroll position (0–1) where the footage reaches this scene; evenly spaced when omitted. */
  at?: number;
  /** Placeholder palette until the real frames exist: sky, middle, ground. */
  colors: [string, string, string];
  /** Placeholder light source, in 0–1 frame coordinates. */
  light: { x: number; y: number; color: string };
}

export interface Field {
  k: string;
  v: string;
}

interface CardBase {
  id: string;
  at: Range;
  side?: "left" | "right";
}

export interface HeroCard extends CardBase {
  type: "hero";
  eyebrow: string;
  title: string;
  text: string;
  /** Scroll prompt under the text. */
  hint?: string;
}

export interface AppCard extends CardBase {
  type: "app";
  /** Small label above the title (role or channel). */
  tag?: string;
  title: string;
  subtitle?: string;
  fields?: Field[];
  lines?: string[];
  body?: string;
  attachment?: string;
  chip?: string;
  meta?: string;
  button?: { label: string; sentLabel: string };
  /** Message leaving this card: pressed at send[0], arrives at the target card at send[1]. */
  send?: { to: string; at: Range };
}

export interface PushCard extends CardBase {
  type: "push";
  /** Notification text. */
  body?: string;
  /** Time label next to the app name ("now"). */
  now?: string;
}

export interface ReplyCard extends CardBase {
  type: "reply";
  author: string;
  role: string;
  time: string;
  body: string;
}

export interface CtaCard extends CardBase {
  type: "cta";
  title: string;
  button: string;
  href: string;
}

export type Card = HeroCard | AppCard | PushCard | ReplyCard | CtaCard;

export interface Experience {
  slug: "residence" | "domicile" | "recovery";
  name: string;
  /** Footage finished: listed in the navigation and included in the web build. */
  ready?: boolean;
  keyframes: Keyframe[];
  /** Frames in the final sequence (6 clips × 5 s × 15 fps). */
  frameCount: number;
  /** Scroll length of the flight, in viewport heights. */
  track?: number;
  cards: Card[];
}
