# Clean Bundled Base (Translation-Free)

This build is a **clean base** where:
- Runtime loads **only bundle files** (one per category/section).
- Legacy per-version section files are preserved under `./legacy_sections/`.
- Translation system files are preserved under `./legacy_i18n/` but **not loaded**.

## Runtime loading rules
- `ext_manifest.v1.js` lists the only scripts loaded at boot.
- `ext_manifest_loader.v1.js` has the old **category scan** disabled by default.
  - To enable scan for debugging: open with `?scan=1`

## Regenerating bundles
```bash
python3 build_bundles.py
```

## Re-implementing i18n later
When you reintroduce translation, keep it **outside** the prompt-canonical pipeline:
- Canonical prompt tokens remain unchanged.
- UI labels can be localized via a single `i18n` module.
