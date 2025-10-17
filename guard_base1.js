/*!
 * guard_base1.js  v2025-09-21-quiet
 * ベース1HTMLの自己診断＋静的ガード（非侵襲・無通知版）
 * - 場所ツリー: DOMが存在するときだけ見守り。無ければ何もしない（トースト/警告を出さない）
 * - メッシュ重複: 生成後に重複トークンを除去（Set化）/ buildNestedMeshTokens があれば安全ラップ
 * - #gen 多重バインド: 一度だけフック
 * - run() 再入防止: 多重実行ブロック
 * 既存ロジックは変更せず、必要時のみ上からそっと添える方針
 */
(function () {
  'use strict';

  // ─────────────────────────────
  // 0) 多重読込ガード & 署名
  // ─────────────────────────────
  if (window.__pbGuardLoaded) return;
  Object.defineProperty(window, '__pbGuardLoaded', { value: true, writable: false });
  Object.defineProperty(window, '__pbGuardSig', { value: 'PB_GUARD_BASE1_QUIET_2025-09-21', writable: false });

  // ─────────────────────────────
  // 1) 小ユーティリティ
  // ─────────────────────────────
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const onReady = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };
  const debug = (...a) => console.debug('[pb-guard]', ...a);

  // ─────────────────────────────
  // 2) run() の多重実行ガード
  // ─────────────────────────────
  (function guardRunReentry() {
    const orig = window.run;
    if (typeof orig !== 'function' || orig.__guarded) return;
    let running = false;
    window.run = function guardedRun() {
      if (running) { debug('run() re-entry blocked'); return; }
      running = true;
      try { return orig.apply(this, arguments); }
      finally { running = false; }
    };
    window.run.__guarded = true;
  })();

  // ─────────────────────────────
  // 3) タグ生成(#gen)の多重バインド・重複トークン除去
  // ─────────────────────────────
  function bindGenDedupeOnce() {
    const gen = $('#gen') || document.querySelector('button#gen, button[data-role="gen"]');
    if (!gen || gen.dataset.guardBound === '1') return;

    // 生成後の重複除去（カンマ区切り出力を前提に安全にトリム＋Set化）
    function dedupeOutput() {
      const out = document.getElementById('out');
      if (!out) return;
      const raw = String(out.value || '');
      if (!raw) return;
      const items = raw.split(',').map(s => s.trim()).filter(Boolean);
      if (items.length <= 1) return;
      const uniq = Array.from(new Set(items));
      if (uniq.length !== items.length) {
        out.value = uniq.join(', ');
        debug('deduped output tokens:', items.length, '→', uniq.length);
      }
    }

    // クリック直後に1ティック遅らせて実行（既存生成ロジックに干渉しない）
    gen.addEventListener('click', () => setTimeout(dedupeOutput, 0), { passive: true });

    // 二重バインド防止フラグ
    gen.dataset.guardBound = '1';
    debug('#gen bound (dedupe)');
  }
  onReady(bindGenDedupeOnce);

  // ─────────────────────────────
  // 4) メッシュ専用：ビルダー内部APIがあればやさしくラップ
  //    - 種類未選択なら[]返す
  //    - 重複トークン除去
  // ─────────────────────────────
  (function wrapMeshBuilderIfExists() {
    const orig = window.buildNestedMeshTokens;
    if (typeof orig !== 'function' || orig.__patchedByGuard) return;

    function hasMeshTypeChecked() {
      // data-m2="type" のチェック群（既存UIの想定）
      const any = $$('[data-m2="type"]')
        .some(i => (i.matches('input[type="checkbox"],input[type="radio"]') ? i.checked : false));
      return any;
    }

    window.buildNestedMeshTokens = function guardedMeshTokens() {
      // 未選択なら空配列を返し、デフォルト挿入を防ぐ
      if (!hasMeshTypeChecked()) return [];
      const out = orig.apply(this, arguments) || [];
      if (!Array.isArray(out) || out.length <= 1) return out;

      // トークンの正規化→Setで重複排除
      const seen = new Set();
      const ret = [];
      for (const t of out) {
        const k = String(t || '').trim().toLowerCase();
        if (!k || seen.has(k)) continue;
        seen.add(k);
        ret.push(t);
      }
      return ret;
    };
    window.buildNestedMeshTokens.__patchedByGuard = true;
    debug('buildNestedMeshTokens wrapped');
  })();

  // ─────────────────────────────
  // 5) 場所ツリー（#g-bg-place）: DOMがある時だけ静かに監視
  //    details[data-bg-head] が消えた/フラット化したら再構築関数を呼ぶ
  //    ※ ここではトースト/警告を一切出さない
  // ─────────────────────────────
  function tryAutoRestorePlaceTree() {
    const host = document.getElementById('g-bg-place');
    if (!host) return; // DOMが無い構成（カテゴリ直読UIなど）は監視しない

    const rebuild = window.buildPlaceTreeAfterRender;
    if (typeof rebuild !== 'function') {
      // 本体に再構築関数が無い構成は監視不要
      debug('place-tree: rebuild hook not found; skip');
      return;
    }

    const isFlattened = () => {
      const heads = $$('details[data-bg-head]', host);
      // details が 0 かつ チェック項目が直接並んでいるようならフラット化とみなす
      const hasFlatChecks = $$('label input[type="checkbox"]', host).length > 0;
      return heads.length === 0 && hasFlatChecks;
    };

    const mo = new MutationObserver(() => {
      try {
        if (isFlattened()) {
          rebuild();
          debug('place-tree auto-restored');
        }
      } catch (e) {
        console.warn('[pb-guard] place-tree restore failed', e);
      }
    });
    mo.observe(host, { childList: true, subtree: true });
    debug('place-tree observer armed');
  }
  onReady(tryAutoRestorePlaceTree);

  // ─────────────────────────────
  // 6) 最後に、外部から手動呼び出しできる軽いAPIを提供（任意）
  // ─────────────────────────────
  window.__pbGuard = {
    rebindGen: bindGenDedupeOnce,
    restorePlaceTree: () => {
      if (typeof window.buildPlaceTreeAfterRender === 'function') {
        window.buildPlaceTreeAfterRender();
        debug('place-tree restore requested');
      }
    },
    sig: window.__pbGuardSig
  };

})(); 
// ===== Mood (雰囲気) 注入：外部知識 __MOOD_DEFS をUIに反映 =====
(function injectMood(){
  // 背景の親（ベース1準拠：背景カテゴリのwrapが存在する想定）
  const bgRoot = document.getElementById('g-bg'); // 既存背景の親ラッパ（ベース1UI準拠）
  if (!bgRoot) return;

  // 既に描画済みなら二重生成しない
  if (document.getElementById('g-bg-mood')) return;

  // 知識が未到着なら後で再試行（読み込み順ずれ対策）
  let tries = 0;
  const mount = ()=>{
    if (!window.__MOOD_DEFS || !window.__MOOD_DEFS.categories) {
      if (++tries < 10) return setTimeout(mount, 150);
      return;
    }
    // セクション <details>
    const details = document.createElement('details');
    details.id = 'g-bg-mood';
    const sum = document.createElement('summary');
    sum.textContent = '雰囲気 / Mood';
    details.appendChild(sum);

    // 各カテゴリを小パネルとして並べる
    window.__MOOD_DEFS.categories.forEach(cat=>{
      const panel = document.createElement('div');
      panel.className = 'panel';
      const h = document.createElement('h3');
      h.textContent = cat.name;
      h.style.fontSize = '16px';
      h.style.margin = '8px 0';
      panel.appendChild(h);

      // グリッド
      const grid = document.createElement('div');
      grid.className = 'grid';
      cat.items.forEach(it=>{
        const label = document.createElement('label');
        label.className = 'chk';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = it.id;
        input.dataset.role = 'tag';
        input.dataset.group = 'mood';
        const span = document.createElement('span');
        span.textContent = it.label;
        label.appendChild(input);
        label.appendChild(span);
        grid.appendChild(label);
      });
      panel.appendChild(grid);
      details.appendChild(panel);
    });

    // 背景（場所・エフェクト）の直後あたりに追加（最後尾でもOK）
    bgRoot.appendChild(details);

    // 既存の「タグ生成」系へ自然連携：チェック→タグ化
    // ここでは既存の収集ロジックが input[data-role="tag"] を拾う前提に合わせる。
    // 念のため on-change で out に重複なく反映（セーフティ）
    const out = document.getElementById('out');
    const collect = ()=>{
      if(!out) return;
      const set = new Set(
        (out.value||'').split(',')
          .map(s=>s.trim())
          .filter(Boolean)
      );
      const checked = details.querySelectorAll('input[type="checkbox"]:checked');
      checked.forEach(ch=>{
        set.add(ch.value.replace(/\s+/g,' '));
      });
      out.value = Array.from(set).join(', ');
    };
    details.addEventListener('change', collect);
  };
  mount();
})();