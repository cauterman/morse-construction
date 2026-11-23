#!/usr/bin/env python3
"""Prepare Gary's supplied house photos and PDF previews for the website.

Usage: python3 scripts/prepare-house-assets.py /path/to/extracted/Photos:Plans
Requires Pillow and Poppler (pdftoppm). Original PDFs are copied unchanged.
"""
import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path
from PIL import Image, ImageOps

ASSETS = {
    "brownstone": ("The Brownstone 2021.jpg", [("Brownstone floor plan.pdf", "main")]),
    "hollow": ("Hollow 2010.png", [("Hollow floor plan.pdf", "main"), ("Hollow lower floor plan.pdf", "lower")]),
    "lockwood": ("The Lockwood 2024.png", [("Lockwood floor plan.pdf", "main")]),
    "maple": ("The Maple 2026.webp", [("Maple floor plan.pdf", "main")]),
    "newport": ("The Newport 2025.png", [("Newport floor plan.pdf", "main")]),
    "pine": ("Pine 2018.jpg", [("Pine floor plan.pdf", "main")]),
    "ridge": ("The Ridge 2020.png", [("Ridge floor plan.pdf", "main")]),
    "saffron": ("The Saffron 2020.png", [("Saffron floor plan.pdf", "main")]),
}

ADDITIONAL_ASSETS = {
    "modern": ("TheModern.png", [("Modern1stfloorplan.pdf", "main"), ("Modern2ndfloorplan.pdf", "second")]),
    "mount": ("TheMount.png", [("Mount1stfloorplan.pdf", "main"), ("Mount2ndfloorplan.pdf", "second")]),
    "canaan": ("TheCanaan.png", [("Canaanmainfloorplan.pdf", "main"), ("Canaanlowerfloorplan.pdf", "lower")]),
    "overlook": ("TheOverlook.jpg", [("Overlook1stfloorplan.pdf", "main"), ("Overlook2ndfloorplan.pdf", "second")]),
    "willow": ("TheWillow.webp", [("Willowfloorplan.pdf", "main")]),
    "wallace": ("Wallace.png", [("Wallacefloorplan.pdf", "main")]),
}


def opaque(image):
    rgba = image.convert("RGBA")
    background = Image.new("RGBA", rgba.size, "white")
    background.alpha_composite(rgba)
    return background.convert("RGB")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("--batch", choices=["original", "additional"], default="original")
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parents[1] / "client/public/assets/morse/plans")
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    assets = ASSETS if args.batch == "original" else ADDITIONAL_ASSETS
    for slug, (photo, floors) in assets.items():
        image = opaque(ImageOps.exif_transpose(Image.open(args.source / photo)))
        image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        image.save(args.output / f"{slug}-exterior.webp", "WEBP", quality=88, method=6)
        thumbnail = image.copy()
        thumbnail.thumbnail((640, 640), Image.Resampling.LANCZOS)
        thumbnail.save(args.output / f"{slug}-thumbnail.webp", "WEBP", quality=85, method=6)
        for source, floor in floors:
            stem = f"{slug}-{floor}-floor"
            shutil.copy2(args.source / source, args.output / f"{stem}.pdf")
            with tempfile.TemporaryDirectory() as tmp:
                prefix = Path(tmp) / "page"
                subprocess.run(["pdftoppm", "-f", "1", "-singlefile", "-r", "170", "-png", str(args.source / source), str(prefix)], check=True)
                preview = Image.open(prefix.with_suffix(".png")).convert("RGB")
                preview.save(args.output / f"{stem}.webp", "WEBP", quality=95, method=6)
        print(f"Prepared {slug}: photo, thumbnail, and {len(floors)} floor-plan PDF(s)/preview(s)", flush=True)


if __name__ == "__main__":
    main()
