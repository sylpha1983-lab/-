i18n locale files reorganized for easier manual writing

- The dictionary remains a FLAT object: "key": "value"
- We only added comment headers and grouped prompt.token.* blocks.
- You can move lines between groups freely; i18n lookup is by KEY, not by position.
- Recommended workflow:
    1) Pick a token in the builder (pick tool).
    2) Copy the generated key like: "prompt.token.20377b24"
    3) Paste it into the right category block in i18n.locale.ja.js and fill the Japanese translation.
    4) Keep i18n.locale.en.js as the canonical English value (usually already filled).

Notes:
- Some tokens are placed in "未分類" because automatic mapping is heuristic.
- If you want PERFECT grouping automatically, we can extend ext_i18n_capture.js to record
  the current section id when capturing tokens, and output a ready-to-paste block under that section.
