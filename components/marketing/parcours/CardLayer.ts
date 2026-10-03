import type { AppCard, Card } from "./types";
import { renderCard } from "./templates";

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

interface Mounted {
  card: Card;
  slot: HTMLElement;
  el: HTMLElement;
  button: HTMLElement | null;
  shown: boolean;
}

interface Trace {
  from: Mounted;
  to: Mounted;
  at: [number, number];
  group: SVGGElement;
  path: SVGPathElement;
  dot: SVGCircleElement;
  ring: SVGCircleElement;
}

const SVG = "http://www.w3.org/2000/svg";
// Read lazily: this module is also evaluated during server rendering, where matchMedia does not exist.
const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

/** Scroll-timed overlay of app cards, plus the line a message draws between sender and receiver. */
export class CardLayer {
  private items: Mounted[] = [];
  private traces: Trace[] = [];
  private layer: HTMLElement;
  private svg: SVGSVGElement;

  constructor(layer: HTMLElement, svg: SVGSVGElement, cards: Card[]) {
    this.layer = layer;
    this.svg = svg;
    for (const card of cards) {
      const slot = document.createElement("div");
      slot.className = `slot slot--${card.type} slot--${card.side ?? "center"}`;
      slot.innerHTML = renderCard(card);
      layer.appendChild(slot);
      const el = slot.firstElementChild as HTMLElement;
      if (!el) continue;
      this.items.push({
        card,
        slot,
        el,
        button: el.querySelector('[data-role="send-button"]'),
        shown: true,
      });
    }

    for (const m of this.items) {
      const send = (m.card as AppCard).send;
      if (m.card.type !== "app" || !send) continue;
      const to = this.items.find((x) => x.card.id === send.to);
      if (!to) throw new Error(`Card ${m.card.id} sends to unknown card ${send.to}`);
      const group = document.createElementNS(SVG, "g");
      group.setAttribute("class", "trace");
      const path = document.createElementNS(SVG, "path");
      path.setAttribute("class", "trace__path");
      const ring = document.createElementNS(SVG, "circle");
      ring.setAttribute("class", "trace__ring");
      const dot = document.createElementNS(SVG, "circle");
      dot.setAttribute("class", "trace__dot");
      dot.setAttribute("r", "4.5");
      group.append(path, ring, dot);
      svg.appendChild(group);
      this.traces.push({ from: m, to, at: send.at, group, path, dot, ring });
    }
  }

  destroy() {
    this.layer.replaceChildren();
    this.svg.replaceChildren();
  }

  update(p: number) {
    for (const m of this.items) this.updateCard(m, p);
    for (const t of this.traces) this.updateTrace(t, p);
  }

  private updateCard(m: Mounted, p: number) {
    const [a, b] = m.card.at;
    const f = Math.min(0.025, (b - a) * 0.3);
    const vin = a <= 0 ? 1 : smooth(a, a + f, p);
    const vout = b >= 1 ? 1 : 1 - smooth(b - f, b, p);
    const v = vin * vout;

    const fromTop = m.card.type === "push" && isMobile();
    const enter = (1 - vin) * (m.card.type === "push" ? (fromTop ? -24 : -16) : 22);
    const leave = (1 - vout) * -14;
    m.el.style.opacity = v.toFixed(3);
    m.el.style.transform = `translate3d(0, ${(enter + leave).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * v).toFixed(4)})`;

    const shown = v > 0.01;
    if (shown !== m.shown) {
      m.shown = shown;
      m.slot.style.visibility = shown ? "visible" : "hidden";
      m.slot.setAttribute("aria-hidden", String(!shown));
    }
    if (m.button) {
      const send = (m.card as AppCard).send;
      m.button.classList.toggle("is-sent", !!send && p >= send.at[0]);
    }
  }

  private updateTrace(t: Trace, p: number) {
    const [s, e] = t.at;
    const tail = 0.02;
    if (p < s || p > e + tail) {
      t.group.style.opacity = "0";
      return;
    }
    const k = clamp01((p - s) / (e - s));
    const mobile = isMobile();
    const card = t.from.el.getBoundingClientRect();
    const btn = (t.from.button ?? t.from.el).getBoundingClientRect();
    const tr = t.to.el.getBoundingClientRect();

    // The line leaves the edge of the sender card (level with its button) and lands on the receiver.
    let x0: number, y0: number, x3: number, y3: number;
    if (mobile) {
      [x0, y0] = [card.left + card.width * 0.72, card.top];
      [x3, y3] = [tr.left + tr.width * 0.5, tr.bottom];
    } else {
      const fromLeft = (t.from.card.side ?? "left") === "left";
      const toRight = (t.to.card.side ?? "right") === "right";
      [x0, y0] = [fromLeft ? card.right : card.left, btn.top + btn.height / 2];
      [x3, y3] = [toRight ? tr.left + 8 : tr.right - 8, tr.top + tr.height / 2];
    }
    // Arc the curve to one side of the straight line between the two cards.
    const dx = x3 - x0;
    const dy = y3 - y0;
    const dist = Math.hypot(dx, dy) || 1;
    const nx = dy / dist;
    const ny = -dx / dist;
    const bend = (mobile ? 0.22 : 0.16) * dist * (dx >= 0 ? 1 : -1);
    const x1 = x0 + dx * 0.3 + nx * bend;
    const y1 = y0 + dy * 0.3 + ny * bend;
    const x2 = x0 + dx * 0.7 + nx * bend;
    const y2 = y0 + dy * 0.7 + ny * bend;
    t.path.setAttribute("d", `M${x0},${y0} C${x1},${y1} ${x2},${y2} ${x3},${y3}`);

    const len = t.path.getTotalLength();
    t.path.style.strokeDasharray = `${len}`;
    t.path.style.strokeDashoffset = `${len * (1 - k)}`;
    const pt = t.path.getPointAtLength(len * k);
    t.dot.setAttribute("cx", pt.x.toFixed(1));
    t.dot.setAttribute("cy", pt.y.toFixed(1));

    // Arrival pulse at the receiver.
    const u = clamp01((p - (e - 0.008)) / (0.008 + tail));
    t.ring.setAttribute("cx", x3.toFixed(1));
    t.ring.setAttribute("cy", y3.toFixed(1));
    t.ring.setAttribute("r", (4 + 22 * u).toFixed(1));
    t.ring.style.opacity = u > 0 ? (1 - u).toFixed(3) : "0";

    t.group.style.opacity = p > e ? (1 - (p - e) / tail).toFixed(3) : "1";
  }
}
