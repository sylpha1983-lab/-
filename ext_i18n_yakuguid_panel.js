/* ext_i18n_yakuguid_panel.js
 * 訳ガイド（出力）: #out に含まれる英語トークンを、i18n辞書(ja)で引いて表示する。
 * - モバイル向け: 画面下寄せ固定（ドラッグ移動なし）
 * - +/- で高さ調整、×で閉じる
 */
(function () {
  'use strict';

  const PANEL_ID = 'yakuguid_panel';
  const STORAGE_KEY = 'yakuguid.panel.v2';

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const qs = (sel, root) => (root || document).querySelector(sel);

  function getLocales() {
    // i18n.core.js が window.__i18n._locales を保持
    const i18n = window.__i18n;
    return (i18n && i18n._locales) ? i18n._locales : null;
  }

  // ext_i18n_capture.js と揃えた fnv-1a (8 hex)
  function simpleHash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return (h >>> 0).toString(16).padStart(8, '0');
  }

  // 1回だけ作る: en辞書から value -> key を逆引き
  let _enValueToKey = null;
  function buildEnReverseMap(locales) {
    try {
      const en = locales && (locales.en || (locales["en"]));
      const stamp = en ? (Object.keys(en).length + "|" + (en["prompt.token.20377b24"] || "") + "|" + (en["prompt.token.34eea4fb"] || "")) : "none";
      if (_enValueToKey && _enValueToKey.__stamp === stamp) return _enValueToKey;
      const map = Object.create(null);
      if (en) {
        for (const k in en) {
          if (!Object.prototype.hasOwnProperty.call(en, k)) continue;
          if (k.indexOf("prompt.token.") !== 0) continue;
          const v = en[k];
          if (typeof v === "string" && v) map[v] = k;
        }
      }
      map.__stamp = stamp;
      _enValueToKey = map;
      return _enValueToKey;
    } catch (e) {
      const map = Object.create(null);
      map.__stamp = "err";
      _enValueToKey = map;
      return _enValueToKey;
    }
  }

  function resolveTokenKeyByLemma(lemma, locales) {
    if (!lemma) return null;
    const norm = String(lemma).trim();
    if (!norm) return null;

    // まず en 辞書値からの逆引き（確実に一致する場合）
    const rev = buildEnReverseMap(locales);
    if (rev && rev[norm]) return rev[norm];

    // 次にハッシュ生成（Pick の仕様に合わせる）
    // ※ masterpiece -> 20377b24 になるやつ
    return 'prompt.token.' + simpleHash(norm);
  }

  function parseTokensFromOutput(text) {
    // 出力はカンマ区切りが基本。括弧や重みは剥がす。
    const raw = String(text || '');
    if (!raw.trim()) return [];

    return raw
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .map(s => {
        // 先頭末尾の記号を落とす: (), [], {}, ", ' など
        let t = s;
        t = t.replace(/^[\s\(\[\{\"\']+/, '');
        t = t.replace(/[\s\)\]\}\"\']+$/, '');
        // weight :1.2 などを落とす
        t = t.replace(/:\s*[-+]?\d+(?:\.\d+)?\s*$/, '');
        // break や空は除外
        t = t.trim();
        return t;
      })
      .filter(t => t && t.toLowerCase() !== 'break');
  }

  function loadPanelState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || null;
    } catch (_) {
      return null;
    }
  }

  function savePanelState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function ensurePanel() {
    let panel = document.getElementById(PANEL_ID);
    if (panel) return panel;

    panel = document.createElement('div');
    panel.id = PANEL_ID;
    panel.style.cssText = [
      'position:fixed',
      'left:12px',
      'right:12px',
      'bottom:160px',
      'z-index:99999',
      'background:rgba(20,20,20,0.88)',
      'color:#fff',
      'border-radius:16px',
      'box-shadow:0 10px 30px rgba(0,0,0,0.35)',
      'backdrop-filter: blur(8px)',
	      'display:flex',
	      'flex-direction:column',
      'overflow:hidden',
	      'display:none'
    ].join(';');

    const header = document.createElement('div');
    header.style.cssText = [
      'display:flex',
      'align-items:center',
      'justify-content:space-between',
      'gap:10px',
      'padding:12px 12px 10px 14px',
      'font-weight:700',
      'user-select:none'
    ].join(';');

    const title = document.createElement('div');
    title.textContent = '訳ガイド（出力）';
    title.style.cssText = 'font-size:16px; letter-spacing:0.02em;';

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; gap:10px; align-items:center;';

    function mkBtn(label) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.style.cssText = [
        'width:44px',
        'height:34px',
        'border-radius:10px',
        'border:1px solid rgba(255,255,255,0.22)',
        'background:rgba(255,255,255,0.08)',
        'color:#fff',
        'font-size:18px',
        'line-height:1',
        'cursor:pointer'
      ].join(';');
      return b;
    }

    const btnMinus = mkBtn('−');
    const btnPlus = mkBtn('+');
    const btnClose = mkBtn('×');

    actions.appendChild(btnMinus);
    actions.appendChild(btnPlus);
    actions.appendChild(btnClose);

    header.appendChild(title);
    header.appendChild(actions);

    const body = document.createElement('div');
    // Flex body so the list area expands/shrinks with the panel.
    body.style.cssText = 'padding:10px 12px 12px;display:flex;flex-direction:column;gap:10px;height:100%;overflow:hidden;';

    const hint = document.createElement('div');
    hint.id = 'yakuguid_hint';
    hint.style.cssText = 'opacity:0.85; font-size:12px; margin:0 0 10px 2px;';
    hint.textContent = '英語 → 日本語（辞書）／未登録は（未登録）';

    const list = document.createElement('div');
    list.id = 'yakuguid_list';
    // No fixed max-height; let it flex. Add bottom padding so last row is always reachable.
    list.style.cssText = 'display:flex;flex-direction:column;gap:10px;flex:1;min-height:140px;overflow:auto;padding-bottom:12px;-webkit-overflow-scrolling:touch;';

    body.appendChild(hint);
    body.appendChild(list);

    panel.appendChild(header);
    panel.appendChild(body);

    document.body.appendChild(panel);

    // state
    const st = loadPanelState() || {};
    if (typeof st.height === 'number') {
      panel.style.height = clamp(st.height, 360, Math.floor(window.innerHeight * 0.8)) + 'px';
    } else {
      // Default size: show about 4 items.
      panel.style.height = '440px';
      savePanelState({ height: 440 });
    }

    function setHeight(delta) {
      const cur = panel.getBoundingClientRect().height;
      const next = clamp(cur + delta, 360, Math.floor(window.innerHeight * 0.8));
      panel.style.height = next + 'px';
      savePanelState({ height: next });
    }

    btnMinus.addEventListener('click', () => setHeight(-40));
    btnPlus.addEventListener('click', () => setHeight(+40));
    btnClose.addEventListener('click', () => hidePanel());

    // ダブルタップでデフォルトサイズへ
    let lastTap = 0;
    header.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastTap < 350) {
        panel.style.height = '440px';
        savePanelState({ height: 440 });
      }
      lastTap = now;
    });

    // 画面回転時のはみ出し対策
    window.addEventListener('resize', () => {
      const cur = panel.getBoundingClientRect().height;
      const maxH = Math.floor(window.innerHeight * 0.8);
      if (cur > maxH) {
        panel.style.height = maxH + 'px';
        savePanelState({ height: maxH });
      }
    });

    return panel;
  }

  function isPanelVisible() {
    const p = document.getElementById(PANEL_ID);
    return !!(p && p.style.display !== 'none');
  }

  function showPanel() {
    const p = ensurePanel();
    // Keep panel as flex so header/body layout works and list can flex+scroll.
    p.style.display = 'flex';
    refreshPanel();
  }

  function hidePanel() {
    const p = document.getElementById(PANEL_ID);
    if (p) p.style.display = 'none';
  }

  function togglePanel() {
    if (isPanelVisible()) hidePanel();
    else showPanel();
  }

  function findOutputEl() {
    // 既存UIで #out が多い（textarea/ div など）
    return qs('#out') || qs('textarea#out') || qs('textarea[name="out"]') || qs('[data-role="out"]');
  }

  function getOutputText() {
    const out = findOutputEl();
    if (!out) return '';
    if ('value' in out) return out.value || '';
    return out.textContent || '';
  }

  function renderItem(container, enText, key, jpText, missing) {
    const card = document.createElement('div');
    card.style.cssText = [
      'border:1px solid rgba(255,255,255,0.14)',
      'background:rgba(255,255,255,0.06)',
      'border-radius:14px',
      'padding:12px 12px 10px'
    ].join(';');

    const top = document.createElement('div');
    top.style.cssText = 'font-weight:800; font-size:16px; margin-bottom:6px;';
    top.textContent = enText;

    const mid = document.createElement('div');
    mid.style.cssText = 'font-size:14px; opacity:0.92; margin-bottom:6px;';
    mid.textContent = missing ? '（未登録）' : jpText;

    const bot = document.createElement('div');
    bot.style.cssText = 'font-size:12px; opacity:0.6;';
    bot.textContent = 'key: ' + (key || '（key不明）');

    card.appendChild(top);
    card.appendChild(mid);
    card.appendChild(bot);

    container.appendChild(card);
  }

  function refreshPanel() {
    const p = document.getElementById(PANEL_ID);
    if (!p || p.style.display === 'none') return;

    const list = qs('#yakuguid_list', p);
    if (!list) return;

    list.innerHTML = '';

    const locales = getLocales();
    const ja = locales && locales.ja ? locales.ja : null;
    const outText = getOutputText();
    const tokens = parseTokensFromOutput(outText);

    if (!tokens.length) {
      const empty = document.createElement('div');
      empty.style.cssText = 'opacity:0.75; padding:10px 4px;';
      empty.textContent = '出力が空です。まず「生成」を押すか、出力欄にタグがある状態で開いてください。';
      list.appendChild(empty);
      return;
    }

    // 重複除去しつつ順序維持
    const seen = new Set();
    const uniq = [];
    for (const t of tokens) {
      if (seen.has(t)) continue;
      seen.add(t);
      uniq.push(t);
    }

    for (const t of uniq) {
      const key = resolveTokenKeyByLemma(t, locales);
      let jp = null;
      if (ja && key && Object.prototype.hasOwnProperty.call(ja, key)) {
        jp = ja[key];
      }
      const missing = !(jp && String(jp).trim());
      renderItem(list, t, key, jp || '', missing);
    }
  }

  function hookButton() {
    // 「訳ガイド」"そのもの"のボタンだけを拾う（親コンテナdivを拾うと全ボタンで発火する）
    const candidates = Array.from(document.querySelectorAll('button, a[role="button"], [role="button"]'));
    const btn = candidates.find(el => {
      const t = (el && (el.textContent || '')).replace(/\s+/g, ' ').trim();
      // 例: 「訳ガイド」「訳ガイド✓」「訳ガイド (Guide)」などを許容
      return t === '訳ガイド' || t.startsWith('訳ガイド') || t.includes('訳ガイド✓');
    });

    if (btn && !btn.__yakuguidHooked) {
      btn.__yakuguidHooked = true;
      btn.addEventListener('click', (e) => {
        // 他ボタンへ伝播して二重発火しないよう止める
        if (e) { e.preventDefault(); e.stopPropagation(); }
        togglePanel();
        // 開いた直後に最新化
        setTimeout(refreshPanel, 0);
      }, true); // capture: mobileの重なりで確実に拾う
    }
  }

  function hookOutputWatcher() {
    const out = findOutputEl();
    if (!out || out.__yakuguidWatched) return;
    out.__yakuguidWatched = true;

    const onChange = () => refreshPanel();

    // textarea
    if ('addEventListener' in out) {
      out.addEventListener('input', onChange);
      out.addEventListener('change', onChange);
    }

    // div/text
    try {
      const mo = new MutationObserver(onChange);
      mo.observe(out, { childList: true, characterData: true, subtree: true });
    } catch (_) {}
  }

  function boot() {
    hookButton();
    hookOutputWatcher();

    // 初回ロード後にも数回拾う（SPA的に後からDOMが出る）
    let tries = 0;
    const t = setInterval(() => {
      hookButton();
      hookOutputWatcher();
      tries++;
      if (tries > 30) clearInterval(t);
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // デバッグ用に外に出す
  window.__yakuguid_refresh = refreshPanel;
})();
