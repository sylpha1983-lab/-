(function(){
  "use strict";

  const HISTORY_KEY = "builder_prompt_history";
  const MAX_HISTORY = 30;

  function getHistory() {
    try {
      const raw = JSON.parse(localStorage.getItem(HISTORY_KEY));
      return Array.isArray(raw) ? raw : [];
    } catch (e) {
      return [];
    }
  }

  function setHistory(items) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(items || []));
  }

  function findTarget() {
    if (window.findMainTextarea) return window.findMainTextarea();
    return document.getElementById('out');
  }

  function safeText(s) {
    return String(s || "").replace(/\s+/g, " ").trim();
  }

  function cssEscape(v) {
    try {
      if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(String(v));
    } catch (e) {}
    return String(v).replace(/([#.;?+*~':"!^$\[\]()=>|\/@])/g, '\\$1');
  }

  function getSectionRoot(el) {
    return el ? (el.closest('[id^="list-"]') || null) : null;
  }

  function getSectionCheckboxes(section) {
    return Array.from((section || document).querySelectorAll('input[type="checkbox"]'));
  }

  function indexInList(el, arr) {
    return arr.indexOf(el);
  }

  function getDetailsTrail(el) {
    const trail = [];
    let node = el;
    while (node && node !== document.body) {
      if (node.tagName === 'DETAILS') {
        const sm = node.querySelector(':scope > summary');
        if (sm) trail.unshift(safeText(sm.textContent).slice(0, 160));
      }
      node = node.parentElement;
    }
    return trail;
  }

  function getLabelText(cb) {
    const label = cb.closest('label');
    return safeText(label ? label.textContent : '');
  }

  function captureCheckedSnapshot() {
    const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const checked = allCheckboxes.filter(cb => cb.checked);

    return checked.map(cb => {
      const section = getSectionRoot(cb);
      const sectionCheckboxes = getSectionCheckboxes(section);
      return {
        inputId: cb.id || '',
        name: cb.name || '',
        sectionId: section ? section.id : '',
        sectionIndex: indexInList(cb, sectionCheckboxes),
        globalIndex: indexInList(cb, allCheckboxes),
        packId: cb.getAttribute('data-pack-id') || '',
        val: cb.getAttribute('data-val') || '',
        en: cb.getAttribute('data-en') || '',
        ja: cb.getAttribute('data-ja') || '',
        labelText: getLabelText(cb),
        detailsTrail: getDetailsTrail(cb)
      };
    });
  }

  function sameSnapshot(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      const x = a[i] || {};
      const y = b[i] || {};
      if (
        (x.sectionId || '') !== (y.sectionId || '') ||
        Number(x.sectionIndex) !== Number(y.sectionIndex) ||
        (x.packId || '') !== (y.packId || '') ||
        (x.labelText || '') !== (y.labelText || '')
      ) return false;
    }
    return true;
  }

  function saveHistory(text, checkedSnapshot) {
    const promptText = String(text || '').trim();
    if (!promptText) return;

    let history = getHistory();
    const snapshot = Array.isArray(checkedSnapshot) ? checkedSnapshot : [];

    if (history.length > 0) {
      const top = history[0] || {};
      if (top.text === promptText && sameSnapshot(top.checkedItems || [], snapshot)) return;
    }

    const newItem = {
      text: promptText,
      time: new Date().toLocaleString(),
      checkedItems: snapshot
    };

    history.unshift(newItem);
    if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
    setHistory(history);
  }

  function clearAllCheckboxes() {
    const boxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    boxes.forEach(cb => { cb.checked = false; });
    boxes.forEach(cb => {
      cb.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  function openAncestors(el) {
    let node = el;
    while (node && node !== document.body) {
      if (node.tagName === 'DETAILS') node.open = true;
      node = node.parentElement;
    }
  }

  function findBySectionIndex(item) {
    if (!item || !item.sectionId || item.sectionIndex == null || item.sectionIndex < 0) return null;
    const section = document.getElementById(item.sectionId);
    if (!section) return null;
    const list = getSectionCheckboxes(section);
    return list[item.sectionIndex] || null;
  }

  function findByGlobalIndex(item) {
    if (!item || item.globalIndex == null || item.globalIndex < 0) return null;
    const all = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    return all[item.globalIndex] || null;
  }

  function findByPackId(item) {
    if (!item || !item.packId) return null;
    return document.querySelector('input[type="checkbox"][data-pack-id="' + cssEscape(item.packId) + '"]');
  }

  function findByInputId(item) {
    if (!item || !item.inputId) return null;
    const el = document.getElementById(item.inputId);
    return (el && el.type === 'checkbox') ? el : null;
  }

  function findByValueAndSection(item) {
    if (!item || !item.sectionId) return null;
    const section = document.getElementById(item.sectionId);
    if (!section) return null;
    const boxes = getSectionCheckboxes(section);
    return boxes.find(cb => {
      return (item.val && cb.getAttribute('data-val') === item.val) ||
             (item.en && cb.getAttribute('data-en') === item.en);
    }) || null;
  }

  function findByLabelAndSection(item) {
    if (!item || !item.sectionId || !item.labelText) return null;
    const section = document.getElementById(item.sectionId);
    if (!section) return null;
    const boxes = getSectionCheckboxes(section);
    return boxes.find(cb => getLabelText(cb) === item.labelText) || null;
  }

  function restoreCheckedItems(items) {
    const source = Array.isArray(items) ? items : [];
    const used = new Set();
    let restored = 0;

    clearAllCheckboxes();

    source.forEach(item => {
      let cb = null;
      const candidates = [
        () => findBySectionIndex(item),
        () => findByInputId(item),
        () => findByPackId(item),
        () => findByValueAndSection(item),
        () => findByLabelAndSection(item),
        () => findByGlobalIndex(item)
      ];

      for (const getter of candidates) {
        const found = getter();
        if (found && !used.has(found)) {
          cb = found;
          break;
        }
      }

      if (!cb) return;

      used.add(cb);
      cb.checked = true;
      openAncestors(cb);
      cb.dispatchEvent(new Event('change', { bubbles: true }));
      restored++;
    });

    return restored;
  }

  function renderHistoryCard(item, idx) {
    const checkedCount = Array.isArray(item.checkedItems) ? item.checkedItems.length : 0;
    return `
      <div style="margin-bottom:10px; border:1px solid #eee; border-radius:4px; padding:8px; background:#fff;">
        <div style="font-size:0.75em; color:#999; margin-bottom:4px;">${item.time || ''}</div>
        <div style="font-size:0.9em; color:#666; margin-bottom:4px;">チェック保存: ${checkedCount}件</div>
        <div style="font-size:0.9em; word-break:break-all; max-height:60px; overflow:hidden; color:#333;">${item.text || ''}</div>
        <div style="margin-top:6px; text-align:right;">
          <button class="hist-copy-btn" data-idx="${idx}" style="font-size:0.8em; cursor:pointer; background:#e2e6ea; border:none; padding:4px 8px; border-radius:4px;">コピー</button>
          <button class="hist-restore-btn" data-idx="${idx}" style="font-size:0.8em; cursor:pointer; background:#d4edda; color:#155724; border:none; padding:4px 8px; border-radius:4px; margin-left:5px;">復元</button>
        </div>
      </div>
    `;
  }

  const HISTORY_BTN_DEFAULT_LABEL = '📜 履歴';

  function resetHistoryButtonLabel() {
    try {
      const btn = document.getElementById('footer-history-btn');
      if (btn) btn.textContent = HISTORY_BTN_DEFAULT_LABEL;
    } catch (e) {}
  }

  const HISTORY_RESTORE_TOAST_MS = 3000;

  function ensureHistoryRestoreToastStyles() {
    try {
      if (document.getElementById('history-restore-toast-style')) return;
      const style = document.createElement('style');
      style.id = 'history-restore-toast-style';
      style.textContent = `
        @keyframes historyRestoreToastInOut {
          0%   { opacity:0; transform:translateX(-50%) translateY(8px); }
          8%   { opacity:1; transform:translateX(-50%) translateY(0); }
          78%  { opacity:1; transform:translateX(-50%) translateY(0); }
          100% { opacity:0; transform:translateX(-50%) translateY(6px); }
        }
        #history-restore-toast {
          position:fixed;
          left:50%;
          bottom:90px;
          transform:translateX(-50%);
          background:rgba(0,0,0,.88);
          color:#fff;
          padding:10px 14px;
          border-radius:10px;
          font-size:13px;
          z-index:99999;
          max-width:92vw;
          box-sizing:border-box;
          text-align:center;
          line-height:1.35;
          box-shadow:0 6px 20px rgba(0,0,0,.28);
          pointer-events:none;
          opacity:0;
          will-change:opacity,transform;
        }
      `;
      document.head.appendChild(style);
    } catch (e) {}
  }

  function showHistoryRestoreToast(restoredCount) {
    try {
      ensureHistoryRestoreToastStyles();
      if (!window.__historyRestoreToastCtl) window.__historyRestoreToastCtl = {};
      const ctl = window.__historyRestoreToastCtl;
      if (ctl.timer) { clearTimeout(ctl.timer); ctl.timer = null; }
      if (ctl.node && ctl.node.parentNode) {
        ctl.node.remove();
        ctl.node = null;
      }

      const toast = document.createElement('div');
      toast.id = 'history-restore-toast';
      toast.textContent = `履歴から ${Number(restoredCount) || 0}件復元しました`;
      document.body.appendChild(toast);
      ctl.node = toast;

      try { void toast.offsetWidth; } catch (e) {}
      toast.style.animation = `historyRestoreToastInOut ${HISTORY_RESTORE_TOAST_MS}ms ease forwards`;

      const cleanup = () => {
        if (ctl.node === toast) ctl.node = null;
        if (toast.parentNode) toast.remove();
      };

      toast.addEventListener('animationend', cleanup, { once: true });
      ctl.timer = setTimeout(cleanup, HISTORY_RESTORE_TOAST_MS + 120);
    } catch (e) {}
  }

  function createHistoryUI() {
    const genBtn = document.getElementById('genBtn');
    if (!genBtn) return;

    const existing = document.getElementById('footer-history-btn');
    if (existing) existing.remove();

    const btn = document.createElement('button');
    btn.id = 'footer-history-btn';
    btn.textContent = HISTORY_BTN_DEFAULT_LABEL;
    btn.title = '生成履歴を表示します';
    btn.style.cursor = 'pointer';

    const menu = document.createElement('div');
    menu.id = 'history-popup-menu';
    menu.style.cssText = `
      position: fixed; bottom: 70px; left: 50%; transform: translateX(-50%);
      background: white; border: 1px solid #ccc; border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.4); padding: 0; z-index: 10001;
      max-height: 60vh; overflow-y: auto; display: none; min-width: 300px; max-width: 95%; width: 500px;
    `;
    document.body.appendChild(menu);

    genBtn.addEventListener('click', () => {
      const traced = captureCheckedSnapshot();
      setTimeout(() => {
        const out = findTarget();
        if (out) saveHistory(out.value, traced);
      }, 120);
    }, true);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const history = getHistory();
      let html = `
        <div style="position:sticky; top:0; background:#f8f9fa; padding:10px; border-bottom:1px solid #ddd; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:bold; color:#555;">📜 プロンプト履歴 (${history.length})</span>
          <div>
            <button id="hist-clear-btn" style="font-size:0.8em; margin-right:10px; color:red; cursor:pointer;">全削除</button>
            <span id="hist-close-btn" style="cursor:pointer; font-size:1.5em; color:#999;">&times;</span>
          </div>
        </div>
        <div style="padding:10px;">
      `;

      if (history.length === 0) {
        html += `<div style="text-align:center; color:#999; padding:20px;">履歴はありません</div>`;
      } else {
        history.forEach((item, idx) => { html += renderHistoryCard(item, idx); });
      }
      html += `</div>`;
      menu.innerHTML = html;

      const closeBtn = menu.querySelector('#hist-close-btn');
      if (closeBtn) closeBtn.onclick = () => (menu.style.display = 'none');

      const clearBtn = menu.querySelector('#hist-clear-btn');
      if (clearBtn) {
        clearBtn.onclick = () => {
          if (confirm('全削除しますか？')) {
            localStorage.removeItem(HISTORY_KEY);
            menu.style.display = 'none';
          }
        };
      }

      menu.querySelectorAll('.hist-copy-btn').forEach(b => {
        b.onclick = (ev) => {
          const idx = Number(ev.target.dataset.idx);
          navigator.clipboard.writeText(history[idx].text || '').then(() => {
            ev.target.textContent = 'コピー完了!';
            setTimeout(() => { ev.target.textContent = 'コピー'; }, 1000);
          });
        };
      });

      menu.querySelectorAll('.hist-restore-btn').forEach(b => {
        b.onclick = (ev) => {
          const idx = Number(ev.target.dataset.idx);
          const item = history[idx] || {};
          const out = findTarget();
          if (!out) {
            alert('テキストエリアが見つかりません');
            return;
          }

          window.__historyRestoring = true;
          const restoredCount = restoreCheckedItems(item.checkedItems || []);
          out.value = item.text || '';
          out.dispatchEvent(new Event('input', { bubbles: true }));
          out.dispatchEvent(new Event('change', { bubbles: true }));
          window.__historyRestoring = false;

          showHistoryRestoreToast(restoredCount);

          menu.style.display = 'none';
        };
      });

      menu.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) menu.style.display = 'none';
    });

    const container = genBtn.parentElement;
    container.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(createHistoryUI, 600));
  } else {
    setTimeout(createHistoryUI, 600);
  }
})();
