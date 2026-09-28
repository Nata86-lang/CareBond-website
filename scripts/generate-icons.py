#!/usr/bin/env python3
# Run from the repo root:  python3 scripts/generate-icons.py
# Requires Pillow:  pip3 install Pillow

from PIL import Image, ImageFilter

SRC = 'public/logos/carebond-logo.png'
BLUE = (63, 142, 243, 255)

# The logo file is a 2481x2291 blue canvas (with a stray ~3px white edge on the
# right and bottom) holding a 998x998 mark centred at (1238, 1144) — only ~40%
# fill, far too much padding for a 16px tab icon. Recrop so the mark fills ~76%.
CX, CY, MARK = 1238, 1144, 998
side = round(MARK / 0.76)

src = Image.open(SRC).convert('RGBA')
box = (CX - side // 2, CY - side // 2, CX - side // 2 + side, CY - side // 2 + side)
# Flatten onto brand blue so the stray white edge and any alpha never leak in.
base = Image.new('RGBA', (side, side), BLUE)
base.alpha_composite(src.crop(box))

# Two-step downscale (via 512) keeps the cross edges crisp.
mid = base.resize((512, 512), Image.LANCZOS)

def at(n):
    im = mid.resize((n, n), Image.LANCZOS)
    # LANCZOS alone leaves the cross mushy below ~64px; a light unsharp pass
    # restores the edge without ringing.
    if n <= 64:
        im = im.filter(ImageFilter.UnsharpMask(radius=0.6, percent=140, threshold=0))
    return im

# Next.js App Router file conventions: favicon.ico, icon.png, apple-icon.png.
at(512).save('app/icon.png', optimize=True)
at(180).save('app/apple-icon.png', optimize=True)   # iOS/Android home screen
sizes = [16, 32, 48, 64, 128, 256]
at(256).save('app/favicon.ico', format='ICO',
             sizes=[(n, n) for n in sizes],
             append_images=[at(n) for n in sizes])

for p in ['app/favicon.ico', 'app/icon.png', 'app/apple-icon.png']:
    im = Image.open(p)
    print(p, im.size, im.format, sorted(im.ico.sizes()) if im.format == 'ICO' else '')
