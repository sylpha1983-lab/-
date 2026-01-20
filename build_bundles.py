#!/usr/bin/env python3
"""
Build section bundles for the Prompt Builder.

Design goal:
- Runtime loads ONLY bundle files listed in ext_manifest.v1.js
- Legacy per-version files are kept under ./legacy_sections/ for reference
- Each legacy file is wrapped in an IIFE to avoid top-level const/let collisions

Usage:
  python3 build_bundles.py
"""
from __future__ import annotations
import os, re, glob, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
LEGACY = ROOT / "legacy_sections"
OUT_DIR = ROOT

ORDER = [
  "quality_preset","style","anatomy","race","bodytype","traits","hair","skin_details",
  "attire","accessories","texture","expression","pose","narrative","composition","camera",
  "background","lighting","shadow","atmosphere","effect","postprocessing","filter","presets"
]

def parse_section_and_ver(filename: str):
    m = re.match(r"builder_ui\.section\.([^.]+)\.v(\d+)\.js$", filename)
    if not m:
        return None, None
    return m.group(1), int(m.group(2))

def main():
    if not LEGACY.exists():
        raise SystemExit(f"Missing legacy dir: {LEGACY}")

    groups = {}
    for path in LEGACY.glob("builder_ui.section.*.v*.js"):
        sec, ver = parse_section_and_ver(path.name)
        groups.setdefault(sec, []).append((ver, path))

    for sec, items in groups.items():
        items.sort(key=lambda t: t[0])
        out_path = OUT_DIR / f"builder_ui.section.{sec}.bundle.js"
        with out_path.open("w", encoding="utf-8") as out:
            out.write(f"// Auto-generated bundle for section '{sec}'\\n")
            out.write(f"// Contains {len(items)} versions stacked in ascending order.\\n\\n")
            for ver, p in items:
                code = p.read_text(encoding="utf-8")
                out.write("(function(){\\n")
                out.write(f"// --- {p.name} ---\\n")
                out.write(code)
                if not code.endswith("\\n"):
                    out.write("\\n")
                out.write("})();\\n\\n")

    print("✅ Bundles regenerated:")
    for sec in ORDER:
        bp = OUT_DIR / f"builder_ui.section.{sec}.bundle.js"
        if bp.exists():
            print(" -", bp.name)

if __name__ == "__main__":
    main()
