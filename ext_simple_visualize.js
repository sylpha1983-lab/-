/*
  Simple Visualize (生成内容の簡易可視化)
  - Shows a compact summary panel under the output
  - Builds a thumbnail-style history list
  - Designed to be non-invasive: no dependency on Builder internals
*/
(function(){
  const LS_KEY_ENABLED = 'shima_builder.simple_visualize.enabled.v1';
  const LS_KEY_HISTORY = 'shima_builder.simple_visualize.history.v1';
  const HISTORY_LIMIT = 12;

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  function safeJsonParse(s, fallback){
    try { return JSON.parse(s); } catch(e){ return fallback; }
  }

  function getEnabledDefault(){
    // Default ON for mobile friendliness
    return true;
  }

  function isEnabled(){
    const raw = localStorage.getItem(LS_KEY_ENABLED);
    if(raw === null) return getEnabledDefault();
    return raw === '1';
  }

  function setEnabled(v){
    localStorage.setItem(LS_KEY_ENABLED, v ? '1' : '0');
  }

  function ensureInlinePanel(){
    const out = $('#out');
    if(!out) return null;

    let panel = $('#aiSummaryInline');
    if(panel) return panel;

    panel = document.createElement('div');
    panel.id = 'aiSummaryInline';
    panel.style.marginTop = '10px';
    panel.style.border = '1px solid #d9d9d9';
    panel.style.borderRadius = '12px';
    panel.style.padding = '12px 12px 10px';
    panel.style.background = '#fff';

    panel.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
        <div style="font-weight:700;">🔎 生成内容の簡易可視化</div>
        <div id="aiSummaryInlineMeta" style="font-size:12px;color:#666;"></div>
      </div>
      <div id="aiSummaryInlineBody" style="font-size:13px;line-height:1.45;"></div>
      <div style="margin-top:6px;font-size:12px;color:#777;">※ <b>確認</b> は「選択語をネット検索」用。ここは“今なにを選んでるか”の即表示です。</div>
    `;

    // Insert right after textarea
    out.insertAdjacentElement('afterend', panel);
    return panel;
  }

  function extractChecked(){
    // We only consider checkboxes that actually represent prompt tags.
    // Convention in this builder: data-val contains the tag/phrase.
    const cbs = $$('input[type="checkbox"][data-val]');
    const checked = cbs.filter(cb => cb.checked);
    return checked;
  }

  function labelFor(cb){
    // Prefer a visible label string.
    const en = (cb.dataset && cb.dataset.en) ? cb.dataset.en.trim() : '';
    const jp = (cb.dataset && cb.dataset.jp) ? cb.dataset.jp.trim() : '';

    // Try closest card text
    let text = '';
    const card = cb.closest('.item-card, .checkbox-card, label, .item, .card');
    if(card){
      text = (card.innerText || '').trim();
      // remove excessive lines
      text = text.replace(/\s+/g,' ').trim();
    }

    // Fallback to dataset
    if(!text){
      if(jp) text = jp;
      else if(en) text = en;
      else text = (cb.dataset.val || '').trim();
    }

    // If card text is long, keep first segment
    if(text.length > 64) text = text.slice(0, 64) + '…';

    // Try to keep bilingual look: "JP (EN)"
    if(jp && en && !text.includes('(') && jp !== en){
      // if text already contains jp, keep it and append en
      if(text.includes(jp)) return `${jp} (${en})`;
      return `${text} (${en})`;
    }
    return text;
  }

  function countOutputLines(){
    const out = $('#out');
    if(!out) return 0;
    const s = (out.value || '').trim();
    if(!s) return 0;
    return s.split(/\r?\n/).filter(Boolean).length;
  }

  function renderSummary(){
    const enabled = isEnabled();

    const inline = ensureInlinePanel();
    const thumb = $('#aiSummaryThumb');
    const historyBox = $('#aiSummaryHistory');

    // Toggle visibility
    if(inline) inline.style.display = enabled ? '' : 'none';
    if(thumb) thumb.classList.toggle('hidden', !enabled);
    if(historyBox) historyBox.classList.toggle('hidden', !enabled);

    if(!enabled) return;

    const checked = extractChecked();
    const selectedCount = checked.length;
    const lineCount = countOutputLines();

    const pick = checked.slice(0, 3).map(labelFor).filter(Boolean);
    const pickLines = pick.length
      ? `<b>選択中（先頭${pick.length}件）:</b><br>${pick.map(p => `・${escapeHtml(p)}`).join('<br>')}`
      : `<b>選択中:</b> まだ何も選ばれていません。`;

    const meta = `チェック選択: <b>${selectedCount}</b>件　/　生成タグ: <b>約${lineCount}</b>行`;

    // Inline
    if(inline){
      const metaEl = $('#aiSummaryInlineMeta');
      const bodyEl = $('#aiSummaryInlineBody');
      if(metaEl) metaEl.innerHTML = meta;
      if(bodyEl) bodyEl.innerHTML = pickLines;
    }

    // Thumb panel
    const thumbWrap = $('#aiSummaryThumbContainer');
    if(thumbWrap){
      thumbWrap.innerHTML = `
        <div style="font-size:13px;line-height:1.5;">
          <div style="color:#555;margin-bottom:6px;">${meta}</div>
          <div>${pickLines}</div>
        </div>
      `;
    }

    // History
    renderHistory();
  }

  function escapeHtml(s){
    return String(s)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function loadHistory(){
    const raw = localStorage.getItem(LS_KEY_HISTORY);
    const arr = safeJsonParse(raw, []);
    return Array.isArray(arr) ? arr : [];
  }

  function saveHistory(arr){
    localStorage.setItem(LS_KEY_HISTORY, JSON.stringify(arr.slice(0, HISTORY_LIMIT)));
  }

  function pushHistorySnapshot(){
    if(!isEnabled()) return;

    const checked = extractChecked();
    const selectedCount = checked.length;
    const lineCount = countOutputLines();
    const top = checked.slice(0, 3).map(labelFor);

    const out = $('#out');
    const promptHead = out && out.value ? out.value.trim().slice(0, 140) : '';

    const entry = {
      t: Date.now(),
      selectedCount,
      lineCount,
      top,
      promptHead
    };

    const hist = loadHistory();
    hist.unshift(entry);
    saveHistory(hist);
  }

  function fmtTime(ts){
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2,'0');
    const mm = String(d.getMinutes()).padStart(2,'0');
    return `${hh}:${mm}`;
  }

  function renderHistory(){
    if(!isEnabled()) return;
    const grid = $('#aiSummaryHistoryGrid');
    if(!grid) return;

    const hist = loadHistory();
    if(!hist.length){
      grid.innerHTML = `<div style="color:#777;font-size:13px;">まだ履歴はありません。<b>生成</b>を押すとサムネが貯まります。</div>`;
      return;
    }

    grid.innerHTML = hist.map((h, idx) => {
      const top = (h.top || []).filter(Boolean);
      const topHtml = top.length ? top.map(x => `・${escapeHtml(x)}`).join('<br>') : '（なし）';
      return `
        <div class="ai-summary-card" data-idx="${idx}" style="border:1px solid #e0e0e0;border-radius:14px;padding:10px 12px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.04);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <div style="font-weight:800;">🧩 サムネ</div>
            <div style="font-size:12px;color:#777;">${fmtTime(h.t)}</div>
          </div>
          <div style="font-size:12px;color:#555;margin-bottom:6px;">選択 <b>${h.selectedCount}</b> / 行 <b>${h.lineCount}</b></div>
          <div style="font-size:12px;line-height:1.4;color:#333;">${topHtml}</div>
        </div>
      `;
    }).join('');
  }

  function bind(){
    const toggle = $('#simpleVisualizeToggle');
    if(toggle){
      toggle.checked = isEnabled();
      toggle.addEventListener('change', () => {
        setEnabled(toggle.checked);
        renderSummary();
      });
    }

    // Update on any checkbox change
    document.addEventListener('change', (e) => {
      const t = e.target;
      if(!(t instanceof HTMLElement)) return;
      if(t.matches && (t.matches('input[type="checkbox"][data-val]') || t.id === 'simpleVisualizeToggle')){
        // slight defer to allow other handlers
        setTimeout(renderSummary, 0);
      }
    }, {capture:true});

    // On Generate button, push history
    const genBtn = $('#genBtn');
    if(genBtn){
      genBtn.addEventListener('click', () => {
        setTimeout(() => {
          pushHistorySnapshot();
          renderSummary();
        }, 50);
      }, {capture:true});
    }

    // When output changes (some flows update without clicking)
    const out = $('#out');
    if(out){
      out.addEventListener('input', () => {
        setTimeout(renderSummary, 0);
      });
    }

    // Initial render
    renderSummary();
  }

  function boot(){
    // Wait until main UI exists
    const start = Date.now();
    const timer = setInterval(() => {
      if($('#out')){
        clearInterval(timer);
        bind();
      } else if(Date.now() - start > 10000){
        clearInterval(timer);
      }
    }, 80);
  }

  boot();
})();
