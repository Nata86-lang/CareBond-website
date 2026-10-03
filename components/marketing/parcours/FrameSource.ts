export interface FrameSource {
  readonly count: number;
  /** Draws frame i covering a w×h canvas (device pixels). Returns false when nothing is drawable yet. */
  draw(ctx: CanvasRenderingContext2D, i: number, w: number, h: number, dpr: number): boolean;
  /** Resolves once the first frames are ready to show. */
  ready(onProgress?: (loaded: number, total: number) => void): Promise<void>;
  /** Called when a frame finishes loading in the background, so the stage can redraw. */
  onFrameLoaded?: (i: number) => void;
}

/** Draws an image so it covers the whole canvas, centred (CSS object-fit: cover). */
export function drawCover(
  ctx: CanvasRenderingContext2D,
  img:
    | (CanvasImageSource & { width: number; height: number })
    | { source: CanvasImageSource; width: number; height: number },
  w: number,
  h: number
) {
  const src = "source" in img ? img.source : img;
  const s = Math.max(w / img.width, h / img.height);
  const dw = img.width * s;
  const dh = img.height * s;
  ctx.drawImage(src, (w - dw) / 2, (h - dh) / 2, dw, dh);
}
