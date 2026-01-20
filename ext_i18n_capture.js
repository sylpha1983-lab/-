// ext_i18n_capture.js
// DEV-only UI text picker: click any element to generate i18n skeleton entries.
// Safe to load in all modes; it exits immediately unless BUILDER_DEV_MODE is true.

(function () {
  function isDev() {
    try {
      return localStorage.getItem('BUILDER_DEV_MODE') === 'true';
    } catch (e) {
      return false;
    }
  }

  if (!isDev()) return;

  const BTN_ID = '__i18n_pick_btn__';
  const PANEL_ID = '__i18n_pick_panel__';
  const HILITE_ID = '__i18n_pick_hilite__';

  // Avoid duplicate injection
  if (document.getElementById(BTN_ID)) return;

  function cssEscapeIdent(ident) {
    // Best-effort CSS.escape fallback
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(ident);
    return String(ident).replace(/[^a-zA-Z0-9_\-]/g, function (c) {
      return '\\' + c.charCodeAt(0).toString(16) + ' ';
    });
  }

  function buildSelector(el) {
    // A readable selector path: prefer id, then class, then nth-child.
    if (!el || el.nodeType !== 1) return '';
    if (el.id) return '#' + cssEscapeIdent(el.id);

    const parts = [];
    let cur = el;
    for (let depth = 0; cur && cur.nodeType === 1 && depth < 5; depth++) {
      let part = cur.tagName.toLowerCase();
      if (cur.classList && cur.classList.length) {
        const cls = Array.from(cur.classList).slice(0, 2).map(cssEscapeIdent);
        if (cls.length) part += '.' + cls.join('.');
      } else {
        const parent = cur.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) => c.tagName === cur.tagName);
          if (siblings.length > 1) {
            const idx = siblings.indexOf(cur) + 1;
            part += ':nth-of-type(' + idx + ')';
          }
        }
      }
      parts.unshift(part);
      cur = cur.parentElement;
      if (cur && cur.id) {
        parts.unshift('#' + cssEscapeIdent(cur.id));
        break;
      }
    }
    return parts.join(' > ');
  }

  function normalizeText(t) {
    return String(t || '')
      .replace(/\s+/g, ' ')
      .replace(/^\s+|\s+$/g, '')
      .slice(0, 140);
  }

  function slugify(s) {
    const base = String(s || '')
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_\-]/g, '')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '');
    return base || 'label';
  }

  function simpleHash(str) {
    // Non-crypto, stable for a given string
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    // unsigned
    return (h >>> 0).toString(16);
  }

  // UI: toggle button
  const btn = document.createElement('button');
  btn.id = BTN_ID;
  btn.textContent = 'Pick';
  btn.title = 'i18n picker (DEV): click to capture UI text into dict skeleton';
  Object.assign(btn.style, {
    position: 'fixed',
    right: '10px',
    top: '10px',
    zIndex: 99999,
    padding: '8px 10px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'rgba(0,0,0,0.75)',
    color: '#fff',
    fontSize: '12px',
    cursor: 'pointer',
    userSelect: 'none',
  });

  // UI: output panel
  const panel = document.createElement('div');
  panel.id = PANEL_ID;
  Object.assign(panel.style, {
    position: 'fixed',
    right: '10px',
    top: '52px',
    zIndex: 99999,
    width: 'min(420px, calc(100vw - 20px))',
    maxHeight: '55vh',
    display: 'none',
    background: 'rgba(0,0,0,0.85)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '12px',
    padding: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
    overflow: 'auto',
    fontSize: '12px',
    lineHeight: '1.4',
  });

  panel.innerHTML = [
    '<div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">',
    '  <div style="font-weight:700;">i18n Picker</div>',
    '  <button id="__i18n_pick_close__" style="background:none;border:1px solid rgba(255,255,255,0.25);color:#fff;border-radius:8px;padding:4px 8px;cursor:pointer;">Close</button>',
    '</div>',
    '<div style="opacity:0.9; margin-top:6px;">Pick をONにして、翻訳したいUI文字をタップ。候補キーと辞書スケルトンを生成する。</div>',
    '<div style="margin-top:8px;">',
    '  <div style="opacity:0.85;">Last capture</div>',
    '  <pre id="__i18n_pick_out__" style="white-space:pre-wrap; word-break:break-word; background:rgba(255,255,255,0.06); padding:8px; border-radius:10px;">(none)</pre>',
    '  <div style="display:flex; gap:8px;">',
    '    <button id="__i18n_pick_copy__" style="flex:1;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#fff;border-radius:10px;padding:8px;cursor:pointer;">Copy</button>',
    '    <button id="__i18n_pick_clear__" style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.2);color:#fff;border-radius:10px;padding:8px;cursor:pointer;">Clear</button>',
    '  </div>',
    '</div>'
  ].join('');

  // UI: highlight box
  const hilite = document.createElement('div');
  hilite.id = HILITE_ID;
  Object.assign(hilite.style, {
    position: 'fixed',
    zIndex: 99998,
    pointerEvents: 'none',
    border: '2px solid rgba(0, 200, 255, 0.85)',
    borderRadius: '8px',
    boxShadow: '0 0 0 9999px rgba(0,0,0,0.0)',
    display: 'none'
  });

  let enabled = false;
  let lastOut = '';

  function setEnabled(on) {
    enabled = !!on;
    btn.textContent = enabled ? 'Pick:ON' : 'Pick';
    btn.style.background = enabled ? 'rgba(0, 120, 255, 0.75)' : 'rgba(0,0,0,0.75)';
    panel.style.display = enabled ? 'block' : 'none';
    hilite.style.display = enabled ? 'block' : 'none';
  }

  function updateHilite(el) {
    if (!enabled) return;
    if (!el || el.nodeType !== 1) {
      hilite.style.display = 'none';
      return;
    }
    const r = el.getBoundingClientRect();
    hilite.style.display = 'block';
    hilite.style.left = (r.left + window.scrollX) + 'px';
    hilite.style.top = (r.top + window.scrollY) + 'px';
    hilite.style.width = r.width + 'px';
    hilite.style.height = r.height + 'px';
  }

  
  // ---- Prompt output token capture (for generated prompt translation) ----
  function isOutputArea(el) {
    if (!el) return null;
    try {
      return el.closest && el.closest('#out, #output, textarea#out, textarea#output, .prompt-output, .output, .generated-output');
    } catch (e) { return null; }
  }

  function parsePromptLemma(rawToken) {
    let t = (rawToken || '').trim();
    // Strip trailing separators
    t = t.replace(/^[\s,]+|[\s,]+$/g, '');

    // Capture wrapper pairs like (), {}, [] (including repeated e.g. ((...)))
    const wrapMatch = t.match(/^(\(+|\{+|\[+)\s*([\s\S]*?)\s*(\)+|\}+|\]+)$/);
    if (wrapMatch) t = wrapMatch[2].trim();

    // Strip weights like :1.2 or ::1.2 at the end
    const w = t.match(/^(.*?)(?::|::)\s*(-?\d+(?:\.\d+)?)$/);
    if (w) t = w[1].trim();

    // Normalize spaces & case
    t = t.toLowerCase().replace(/\s+/g, ' ').trim();
    return t;
  }

  function extractTokenFromOutputEvent(e, outEl) {
    if (!outEl) return '';

    // 1) If user has an explicit selection inside output, use it.
    try {
      const sel = window.getSelection && window.getSelection();
      const selected = sel && sel.toString ? sel.toString().trim() : '';
      if (selected) {
        const a = sel.anchorNode;
        const f = sel.focusNode;
        if ((a && outEl.contains(a)) || (f && outEl.contains(f))) return selected;
      }
    } catch (err) {}

    // 2) If it's a textarea/input, use caret index.
    const tag = (outEl.tagName || '').toLowerCase();
    if (tag === 'textarea' || (tag === 'input' && (outEl.type || '').toLowerCase() === 'text')) {
      const text = outEl.value || '';
      const idx = (typeof outEl.selectionStart === 'number') ? outEl.selectionStart : 0;
      return sliceTokenAroundIndex(text, idx);
    }

    // 3) Content element: compute caret index from click point.
    let range = null;
    try {
      if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
      } else if (document.caretPositionFromPoint) {
        const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
        if (pos) {
          range = document.createRange();
          range.setStart(pos.offsetNode, pos.offset);
          range.setEnd(pos.offsetNode, pos.offset);
        }
      }
    } catch (err) {}

    const text = normalizeText(outEl.innerText || outEl.textContent || '');
    if (!range) return text;

    try {
      const pre = document.createRange();
      pre.selectNodeContents(outEl);
      pre.setEnd(range.startContainer, range.startOffset);
      const idx = pre.toString().length;
      return sliceTokenAroundIndex(text, idx);
    } catch (err) {
      return text;
    }
  }

  function sliceTokenAroundIndex(text, idx) {
    const s = String(text || '');
    const n = s.length;
    let i = Math.max(0, Math.min(idx || 0, n));
    const isDelim = (ch) => ch === ',' || ch === '\n' || ch === ';' || ch === '|' || ch === '\t';

    // Expand to nearest delimiters (comma-separated prompts)
    let L = i, R = i;
    while (L > 0 && !isDelim(s[L - 1])) L--;
    while (R < n && !isDelim(s[R])) R++;

    let tok = s.slice(L, R).trim();

    // Further trim leading/trailing separators
    tok = tok.replace(/^[\s,]+|[\s,]+$/g, '').trim();

    return tok;
  }

  function generatePromptTokenSkeleton(outEl, rawToken) {
    const rawText = normalizeText(rawToken || '');
    const selector = buildSelector(outEl || document.getElementById('out') || outEl);
    const lemma = parsePromptLemma(rawText) || rawText;

    // Stable-ish key by lemma (keeps dictionary clean)
    const key = 'prompt.token.' + simpleHash('v1|' + lemma).slice(0, 8);

    const ja = { [key]: '' };
    const en = { [key]: lemma };

    const out = [
      '// selector: ' + selector,
      '// raw: ' + rawText,
      '// lemma: ' + lemma,
      '/* i18n.locale.ja.js */',
      JSON.stringify(ja, null, 2).replace(/^\{\n|\n\}$/g, ''),
      '',
      '/* i18n.locale.en.js */',
      JSON.stringify(en, null, 2).replace(/^\{\n|\n\}$/g, ''),
    ].join('\\n');

    lastOut = out;
    const pre = document.getElementById('__i18n_pick_out__');
    if (pre) pre.textContent = out;

    try {
      if (window.__i18n && typeof window.__i18n.__debugMarkMissing === 'function') {
        window.__i18n.__debugMarkMissing(key);
      }
    } catch (e) {}
  }


function generateSkeleton(el) {
    const rawText = normalizeText(el.innerText || el.textContent || '');
    const selector = buildSelector(el);
    const keyBase = slugify(rawText);
    const key = 'ui.' + keyBase + '.' + simpleHash(selector + '|' + rawText).slice(0, 6);

    // Create a JSON snippet for locale packs.
    const ja = { [key]: rawText || '' };
    const en = { [key]: '' };

    const out = [
      '// selector: ' + selector,
      '// text: ' + rawText,
      '/* i18n.locale.ja.js */',
      JSON.stringify(ja, null, 2).replace(/^\{\n|\n\}$/g, ''),
      '',
      '/* i18n.locale.en.js */',
      JSON.stringify(en, null, 2).replace(/^\{\n|\n\}$/g, ''),
    ].join('\n');

    lastOut = out;
    const pre = document.getElementById('__i18n_pick_out__');
    if (pre) pre.textContent = out;

    // Also register as "missing" in devtools if available.
    try {
      if (window.__i18n && typeof window.__i18n.__debugMarkMissing === 'function') {
        window.__i18n.__debugMarkMissing(key);
      }
    } catch (e) {}
  }

  function onPointerMove(e) {
    if (!enabled) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el || el.id === BTN_ID || el.id === PANEL_ID || panel.contains(el) || btn.contains(el)) {
      updateHilite(null);
      return;
    }
    updateHilite(el);
  }

  function onClickCapture(e) {
    if (!enabled) return;

    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el || el.id === BTN_ID || panel.contains(el) || btn.contains(el)) return;

    // If user clicked inside the generated prompt output area, capture a token (not the whole box).
    const outEl = isOutputArea(el);
    if (outEl) {
      e.preventDefault();
      e.stopPropagation();
      const tok = extractTokenFromOutputEvent(e, outEl);
      if (tok && tok.trim()) {
        generatePromptTokenSkeleton(outEl, tok);
      } else {
        // Fallback: capture the output area's text if token couldn't be determined
        generatePromptTokenSkeleton(outEl, normalizeText(outEl.innerText || outEl.textContent || outEl.value || ''));
      }
      return;
    }

    // Otherwise, capture UI text as before.
    e.preventDefault();
    e.stopPropagation();
    generateSkeleton(el);
  }


  // Wire up UI
  btn.addEventListener('click', function () {
    setEnabled(!enabled);
  });

  panel.querySelector('#__i18n_pick_close__').addEventListener('click', function () {
    setEnabled(false);
  });

  panel.querySelector('#__i18n_pick_copy__').addEventListener('click', async function () {
    if (!lastOut) return;
    try {
      await navigator.clipboard.writeText(lastOut);
    } catch (e) {
      // fallback: select text in pre
      const pre = document.getElementById('__i18n_pick_out__');
      if (!pre) return;
      const range = document.createRange();
      range.selectNodeContents(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  panel.querySelector('#__i18n_pick_clear__').addEventListener('click', function () {
    lastOut = '';
    const pre = document.getElementById('__i18n_pick_out__');
    if (pre) pre.textContent = '(none)';
  });

  document.body.appendChild(btn);
  document.body.appendChild(panel);
  document.body.appendChild(hilite);

  document.addEventListener('pointermove', onPointerMove, true);
  document.addEventListener('click', onClickCapture, true);

  // Start disabled.
  setEnabled(false);
})();
