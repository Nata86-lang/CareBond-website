#!/usr/bin/env python3
# Run from the repo root:  python3 scripts/generate-og-images.py
# Requires Pillow:  pip3 install Pillow

import json, textwrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
NAVY = (10, 27, 57)        # --color-brand-navy #0a1b39
BLUE = (63, 142, 243)      # --color-brand-blue  #3f8ef3
MUTED = (157, 164, 176)    # --color-neutral-300 #9da4b0
FONT = "/System/Library/Fonts/HelveticaNeue.ttc"
BOLD, MEDIUM, REGULAR = 1, 10, 0

def f(size, face=REGULAR):
    return ImageFont.truetype(FONT, size, index=face)

# White CareBond mark, lifted out of the blue brand logo as a mask.
logo = Image.open("public/logos/carebond-logo.png").convert("RGB")
MARK = logo.crop((739, 645, 1737, 1643))                       # measured bbox
mask = MARK.convert("L").point(lambda p: 255 if p > 170 else 0)

def mark(size):
    m = mask.resize((size, size), Image.LANCZOS)
    tile = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    tile.putalpha(m)
    return tile

def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w_ in words:
        trial = f"{cur} {w_}".strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines

def build(locale, tagline, out):
    img = Image.new("RGB", (W, H), NAVY)

    # Soft brand-blue glow, bottom right — drawn large and blurred so it reads
    # as light rather than as a shape.
    glow = Image.new("RGB", (W, H), NAVY)
    ImageDraw.Draw(glow).ellipse((W - 380, H - 330, W + 320, H + 280), fill=BLUE)
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(190)), 0.55)

    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, 10, H), fill=BLUE)                       # left brand rule

    m = mark(132)
    img.paste(m, (92, 96), m)

    d.text((250, 112), "CareBond", font=f(96, BOLD), fill=(255, 255, 255))

    y = 300
    for line in wrap(d, tagline, f(40, MEDIUM), W - 200)[:3]:
        d.text((92, y), line, font=f(40, MEDIUM), fill=(255, 255, 255))
        y += 56

    d.line((92, y + 34, 168, y + 34), fill=BLUE, width=4)
    d.text((92, y + 62), "carebond.ch", font=f(30, REGULAR), fill=MUTED)

    img.save(out, optimize=True)
    return out

for loc in ["fr", "de", "it", "en", "es", "ca"]:
    tag = json.load(open(f"messages/{loc}.json", encoding="utf-8"))["footer"]["tagline"]
    p = build(loc, tag, f"public/og/carebond-og-{loc}.png")
    import os
    print(p, os.path.getsize(p), "bytes")
