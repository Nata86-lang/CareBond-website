import { drawCover, type FrameSource } from "./FrameSource";

export interface FrameManifest {
  count: number;
  width: number;
  height: number;
  /** File name pattern; {n} is replaced by the 1-based frame number padded to 4 digits. */
  pattern: string;
}

const FIRST_BATCH = 12;
const CONCURRENCY = 6;

/** Coarse-to-fine order, so scrubbing anywhere finds a nearby frame early. */
function loadOrder(count: number, skip: number): number[] {
  const seen = new Set<number>();
  const out: number[] = [];
  for (const stride of [16, 8, 4, 2, 1]) {
    for (let i = 0; i < count; i += stride) {
      if (i < skip || seen.has(i)) continue;
      seen.add(i);
      out.push(i);
    }
  }
  return out;
}

export class ImageSequenceSource implements FrameSource {
  readonly count: number;
  onFrameLoaded?: (i: number) => void;
  private frames: (HTMLImageElement | null)[];

  constructor(
    private baseUrl: string,
    private manifest: FrameManifest
  ) {
    this.count = manifest.count;
    this.frames = new Array(manifest.count).fill(null);
  }

  static async fromUrl(baseUrl: string): Promise<ImageSequenceSource> {
    const res = await fetch(`${baseUrl}/manifest.json`);
    if (!res.ok) throw new Error(`manifest ${res.status}`);
    return new ImageSequenceSource(baseUrl, (await res.json()) as FrameManifest);
  }

  private url(i: number) {
    return `${this.baseUrl}/${this.manifest.pattern.replace("{n}", String(i + 1).padStart(4, "0"))}`;
  }

  private async load(i: number) {
    const img = new Image();
    img.decoding = "async";
    img.src = this.url(i);
    try {
      await img.decode();
      this.frames[i] = img;
      this.onFrameLoaded?.(i);
    } catch {
      /* a missing frame falls back to its nearest neighbour */
    }
  }

  private async pool(indices: number[], onDone?: () => void) {
    let next = 0;
    const worker = async () => {
      while (next < indices.length) {
        const i = indices[next++];
        if (i !== undefined) await this.load(i);
        onDone?.();
      }
    };
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  }

  private restStarted = false;

  /** Loads the opening frames only; the rest waits for loadRest() (first scroll). */
  async ready(onProgress?: (loaded: number, total: number) => void) {
    const first = Array.from({ length: Math.min(FIRST_BATCH, this.count) }, (_, i) => i);
    let done = 0;
    await this.pool(first, () => onProgress?.(++done, first.length));
  }

  loadRest() {
    if (this.restStarted) return;
    this.restStarted = true;
    void this.pool(loadOrder(this.count, FIRST_BATCH));
  }

  draw(ctx: CanvasRenderingContext2D, i: number, w: number, h: number) {
    for (let d = 0; d < this.count; d++) {
      const img = this.frames[i - d] ?? this.frames[i + d] ?? null;
      if (img) {
        drawCover(ctx, img, w, h);
        return true;
      }
    }
    return false;
  }
}
