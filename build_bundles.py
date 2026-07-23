#!/usr/bin/env python3
"""
Safely build section bundles for the Prompt Builder.

Runtime uses the bundle files declared in ext_manifest.v2.js.  Legacy
per-version section files are retained under ./legacy_sections/ as source
material for only the sections that are still generated from legacy.

Safety policy:
- Existing bundles that differ from their generated legacy output are treated
  as manually maintained and are never overwritten by the default command.
- Use --check to inspect drift without writing files.
- Use --force only when intentionally replacing the current bundle with the
  legacy-generated version.

Usage:
  python3 build_bundles.py --check
  python3 build_bundles.py
  python3 build_bundles.py --force
"""
from __future__ import annotations

import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent
LEGACY = ROOT / "legacy_sections"
OUT_DIR = ROOT

ORDER = [
    "quality_preset", "style", "anatomy", "race", "bodytype", "traits",
    "hair", "skin_details", "attire", "accessories", "texture",
    "expression", "pose", "narrative", "composition", "camera",
    "background", "lighting", "shadow", "atmosphere", "effect",
    "postprocessing", "filter", "presets",
]


def parse_section_and_ver(filename: str) -> tuple[str | None, int | None]:
    match = re.match(r"builder_ui\.section\.([^.]+)\.v(\d+)\.js$", filename)
    if not match:
        return None, None
    return match.group(1), int(match.group(2))


def collect_groups() -> dict[str, list[tuple[int, pathlib.Path]]]:
    groups: dict[str, list[tuple[int, pathlib.Path]]] = {}
    for path in LEGACY.glob("builder_ui.section.*.v*.js"):
        section, version = parse_section_and_ver(path.name)
        if section is None or version is None:
            continue
        groups.setdefault(section, []).append((version, path))

    for items in groups.values():
        items.sort(key=lambda item: item[0])
    return groups


def render_bundle(section: str, items: list[tuple[int, pathlib.Path]]) -> str:
    chunks = [
        f"// Auto-generated bundle for section '{section}'\n",
        f"// Contains {len(items)} versions stacked in ascending order.\n\n",
    ]
    for _version, source_path in items:
        code = source_path.read_text(encoding="utf-8")
        chunks.append("(function(){\n")
        chunks.append(f"// --- {source_path.name} ---\n")
        chunks.append(code)
        if not code.endswith("\n"):
            chunks.append("\n")
        chunks.append("})();\n\n")
    return "".join(chunks)


def section_order(sections: object) -> list[str]:
    section_set = set(sections)
    known = [section for section in ORDER if section in section_set]
    extra = sorted(section_set.difference(ORDER))
    return known + extra


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Safely regenerate legacy-backed section bundles."
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Report legacy/output drift without writing files.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite drifted bundles with legacy-generated output.",
    )
    args = parser.parse_args(argv)

    if not LEGACY.exists():
        print(f"Missing legacy dir: {LEGACY}", file=sys.stderr)
        return 2

    groups = collect_groups()
    if not groups:
        print(f"No legacy section files found in: {LEGACY}", file=sys.stderr)
        return 2

    planned: dict[pathlib.Path, str] = {
        OUT_DIR / f"builder_ui.section.{section}.bundle.js": render_bundle(section, items)
        for section, items in groups.items()
    }

    drifted: list[pathlib.Path] = []
    missing: list[pathlib.Path] = []
    unchanged: list[pathlib.Path] = []

    for output_path, expected in planned.items():
        if not output_path.exists():
            missing.append(output_path)
            continue
        actual = output_path.read_text(encoding="utf-8")
        if actual == expected:
            unchanged.append(output_path)
        else:
            drifted.append(output_path)

    ordered_drifted = sorted(drifted, key=lambda path: path.name)
    ordered_missing = sorted(missing, key=lambda path: path.name)

    if args.check:
        print("Bundle safety check:")
        print(f" - legacy-backed bundles: {len(planned)}")
        print(f" - unchanged: {len(unchanged)}")
        print(f" - missing: {len(missing)}")
        print(f" - manual drift protected: {len(drifted)}")
        for output_path in ordered_drifted:
            print(f"   ! {output_path.name}")
        for output_path in ordered_missing:
            print(f"   + {output_path.name}")
        return 1 if drifted else 0

    if drifted and not args.force:
        print("Stopped: manually maintained bundle drift was detected.", file=sys.stderr)
        print("No files were written.", file=sys.stderr)
        for output_path in ordered_drifted:
            print(f" - {output_path.name}", file=sys.stderr)
        print(
            "Run `python3 build_bundles.py --check` to inspect, or add "
            "`--force` only when replacement by legacy output is intentional.",
            file=sys.stderr,
        )
        return 2

    if args.force and drifted:
        print("WARNING: --force is replacing manually maintained bundle output.")

    changed: list[pathlib.Path] = []
    for section in section_order(groups.keys()):
        output_path = OUT_DIR / f"builder_ui.section.{section}.bundle.js"
        expected = planned[output_path]
        actual = output_path.read_text(encoding="utf-8") if output_path.exists() else None
        if actual != expected:
            output_path.write_text(expected, encoding="utf-8")
            changed.append(output_path)

    print("Bundle regeneration complete.")
    print(f" - regenerated: {len(changed)}")
    print(f" - already current: {len(planned) - len(changed)}")
    for output_path in changed:
        print(f"   - {output_path.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
