import type { FrameSource } from "./FrameSource";

const MAX_DPR = 2;

/** Paints the frame matching the scroll progress onto a full-stage canvas. */
export class ScrollSequence {
  private ctx: CanvasRenderingContext2D;
  private frame = -1;
  private progress = 0;
  private w = 0;
  private h = 0;
  private dpr = 1;

  constructor(
    private canvas: HTMLCanvasElement,
    private source: FrameSource,
    /** When set (reduced motion), progress snaps to these positions: the still keyframes. */
    private snapTo?: number[]
  ) {
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("Canvas 2D unavailable");
    this.ctx = ctx;
    source.onFrameLoaded = (i) => {
      if (Math.abs(i - this.frame) < 24) this.paint();
    };
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.resize();
  }

  private ro: ResizeObserver;

  destroy() {
    this.ro.disconnect();
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const w = Math.round(rect.width * this.dpr);
    const h = Math.round(rect.height * this.dpr);
    if (w === this.w && h === this.h) return;
    this.w = this.canvas.width = w;
    this.h = this.canvas.height = h;
    this.paint();
  }

  setProgress(p: number) {
    this.progress = p;
    const i = this.indexFor(p);
    if (i !== this.frame) {
      this.frame = i;
      this.paint();
    }
  }

  private indexFor(p: number) {
    let q = Math.min(1, Math.max(0, p));
    if (this.snapTo?.length) {
      q = this.snapTo.reduce(
        (best, s) => (Math.abs(s - q) < Math.abs(best - q) ? s : best),
        this.snapTo[0] ?? q
      );
    }
    return Math.round(q * (this.source.count - 1));
  }

  /** Repaints the current frame (e.g. once web fonts used by the placeholder have loaded). */
  redraw() {
    this.paint();
  }

  private paint() {
    if (!this.w || !this.h) return;
    const i = this.frame < 0 ? this.indexFor(this.progress) : this.frame;
    this.source.draw(this.ctx, i, this.w, this.h, this.dpr);
  }
}
