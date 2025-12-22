(function(){
  "use strict";

  const UI_REG = {};
  window.UI_REG = UI_REG;
  const PROMPT_PARTS = {};
  window.__isGenerating = false;

  const CSS = ` .builder-footer-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; align-items: stretch; } .builder-footer-grid button { flex: 1 1 auto; min-width: 70px; height: 44px; border-radius: 6px; border: none; font-weight: bold; color: #fff; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; padding: 0 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); } #genBtn { background: #007bff; flex-grow: 2; min-width: 100px; font-size: 1rem; } #translateBtn { background: #f0ad4e; } #copyBtn { background: #6c757d; } #resetBtn { background: #dc3545; } #footer-search-btn { background: #17a2b8; } #footer-history-btn { background: #6f42c1; } .builder-footer-grid button:active { transform: translateY(1px); opacity: 0.9; } .category-reset-btn { background: transparent; border: 1px solid #ccc; color: #666; border-radius: 4px; padding: 2px 8px; font-size: 0.8em; cursor: pointer; margin-left: 10px; transition: all 0.2s; flex-shrink: 0; } .category-reset-btn:hover { background: #dc3545; color: #fff; border-color: #dc3545; } #linkage-toast { position: fixed; top: 15%; left: 50%; transform: translateX(-50%); background: rgba(40, 44, 52, 0.95); color: #fff; padding: 10px 20px; border-radius: 20px; font-size: 0.85em; z-index: 11000; box-shadow: 0 5px 15px rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s, top 0.3s; pointer-events: none; white-space: normal; max-width: 90vw; width: max-content; text-align: center; font-weight: bold; line-height: 1.4; } #linkage-toast.show { opacity: 1; top: 10%; } @keyframes linked-flash-anim { 0% { background-color: rgba(255, 215, 0, 0.6); box-shadow: 0 0 10px rgba(255, 215, 0, 0.8); transform: scale(1.02); } 100% { background-color: transparent; box-shadow: none; transform: scale(1); } } .linked-flash { animation: linked-flash-anim 1.5s ease-out; border-radius: 4px; }
  
  /* ★カテゴリーマネージャー用CSS */
  #active-category-floater { position: fixed; top: 15px; right: 15px; z-index: 10000; display: flex; flex-direction: column; align-items: flex-end; }
  #floater-btn { background: rgba(0, 123, 255, 0.95); color: white; padding: 8px 16px; border-radius: 30px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.3); cursor: pointer; border: 2px solid rgba(255,255,255,0.2); backdrop-filter: blur(4px); transition: all 0.2s; display: none; align-items: center; gap: 6px; font-size: 0.9em; }
  #floater-btn:active { transform: scale(0.95); }
  #floater-btn.show { display: flex; animation: slideDown 0.3s ease; }
  #floater-list { display: none; background: white; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); margin-top: 10px; width: 280px; max-height: 60vh; overflow-y: auto; border: 1px solid #ddd; animation: fadeIn 0.2s ease; }
  #floater-list.open { display: block; }
  .floater-header { padding: 8px 12px; background: #f8f9fa; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 0.85em; color: #555; }
  .close-all-btn { background: #dc3545; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 0.9em; }
  .floater-item { padding: 8px 12px; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center; font-size: 0.9em; }
  .floater-item:last-child { border-bottom: none; }
  .floater-item span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }
  .item-close-btn { background: #eee; border: none; color: #666; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1em; margin-left: 8px; }
  .item-close-btn:hover { background: #ccc; color: #333; }
  @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `;

  // 正規化関数
  function getCoreTag(formattedTag) {
    if (!formattedTag) return "";
    return formattedTag.toLowerCase().replace(/:\s*[\d\.]+(%?)/g, '').replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, '');
  }

  function getKnownTags() {
    const known = new Set();
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      const addTags = (str) => { if(!str) return; str.split(/[,，\n]+/).forEach(p => { const core = getCoreTag(p); if(core) known.add(core); }); };
      addTags(cb.dataset.en); addTags(cb.dataset.val);
    });
    return known;
  }

  function ensureContainer(id, label) {
    let container = document.getElementById(`list-${id}`);
    if (!container) {
      container = document.createElement("div"); container.id = `list-${id}`; container.className = "section";
      const h2 = document.createElement("h2"); h2.textContent = label; container.appendChild(h2);
      const sectionsRoot = document.getElementById("sections"); if (sectionsRoot) sectionsRoot.appendChild(container);
    }
    return container;
  }

  function applyAccordion(container, label) {
    if (container.querySelector('details.accordion-wrap')) return;
    const directH2 = Array.from(container.children).find(el => el.tagName === 'H2'); if (directH2) directH2.remove();
    const contentNodes = Array.from(container.childNodes); if (contentNodes.length === 0) return;
    const details = document.createElement('details'); details.className = 'accordion-wrap'; details.open = false; 
    const summary = document.createElement("summary"); summary.className = "section-summary"; summary.style.display = "flex"; summary.style.justifyContent = "space-between"; summary.style.alignItems = "center";
    const labelSpan = document.createElement("span"); labelSpan.textContent = "▶ " + label; summary.appendChild(labelSpan);
    const resetBtn = document.createElement("button"); resetBtn.type = "button"; resetBtn.className = "category-reset-btn"; resetBtn.innerHTML = "🗑️ クリア"; resetBtn.title = "このカテゴリーの選択を全て解除";
    resetBtn.addEventListener("click", (e) => { e.stopPropagation(); e.preventDefault(); if(confirm(`「${label}」内のチェックを全て外しますか？`)) { container.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false); container.querySelectorAll('input[type="range"]').forEach(rn => { rn.value = 100; rn.dispatchEvent(new Event('input')); }); generateOutput(); } });
    summary.appendChild(resetBtn); details.addEventListener("toggle", () => { labelSpan.textContent = (details.open ? "▼ " : "▶ ") + label; });
    const wrapper = document.createElement('div'); wrapper.className = 'section-content'; contentNodes.forEach(node => wrapper.appendChild(node)); details.appendChild(summary); details.appendChild(wrapper); container.appendChild(details);
  }

  window.__registerPromptPart = function(category, version, api) { if (!PROMPT_PARTS[category]) PROMPT_PARTS[category] = {}; PROMPT_PARTS[category][version] = api; };

  function attemptMount() {
    const sectionsRoot = document.getElementById("sections"); if (!sectionsRoot) return;
    if (!document.getElementById("ui-search-bar")) {
      const wrap = document.createElement("div"); wrap.id = "ui-search-bar"; wrap.style.cssText = "margin-bottom:15px; position:sticky; top:0; z-index:100; background:#fff; padding:10px 0; border-bottom:1px solid #ccc;";
      const input = document.createElement("input"); input.type = "text"; input.placeholder = "🔍 項目を検索... (例: ビキニ, bikini)"; input.style.cssText = "width:100%; padding:10px; fontSize:1em; borderRadius:4px; border:1px solid #ccc;";
      input.addEventListener("input", (e) => { const term = e.target.value.toLowerCase(); document.querySelectorAll(".section").forEach(sec => { let secHit = false; sec.querySelectorAll("details").forEach(det => { let groupHit = false; det.querySelectorAll("label").forEach(lbl => { const text = lbl.textContent.toLowerCase(); if (term === "" || text.includes(term)) { lbl.style.display = ""; groupHit = true; } else { lbl.style.display = "none"; } }); if (term !== "" && groupHit) { det.open = true; det.style.display = ""; secHit = true; } else if (term === "") { det.open = false; det.style.display = ""; secHit = true; } else { det.style.display = "none"; } }); sec.style.display = secHit ? "" : "none"; }); }); wrap.appendChild(input); sectionsRoot.insertBefore(wrap, sectionsRoot.firstChild);
    }
    
    // ★カテゴリー順序の再構成（Styleを追加）
    const order = [ 
      { id: "quality_preset", label: "1. 品質・技術 (Quality & Tech)" }, 
      { id: "style", label: "2. 画風・スタイル (Art Style)" },          // ★新設
      { id: "anatomy", label: "3. 人体崩壊防止・構造 (Anatomy)" }, 
      { id: "race", label: "4. 種族・素体 (Race)" }, 
      { id: "bodytype", label: "5. 体型・プロポーション (Body Type)" }, 
      { id: "traits", label: "6. キャラ固有要素・特徴 (Traits)" }, 
      { id: "hair", label: "7. ヘアスタイル (Hair)" }, 
      { id: "skin_details", label: "8. メイク・身体特徴 (Skin & Details)" },
      { id: "expression", label: "9. 表情 (Expression)" }, 
      { id: "attire", label: "10. 服装・衣装 (Attire)" }, 
      { id: "accessories", label: "11. アクセサリ・小物 (Accessories)" }, 
      { id: "texture", label: "12. 素材・質感 (Material/Texture)" }, 
      { id: "pose", label: "13. ポーズ・構図 (Pose)" }, 
      { id: "narrative", label: "14. ストーリー・行動 (Narrative)" }, 
      { id: "composition", label: "15. 構図・設計 (Composition)" }, 
      { id: "camera", label: "16. カメラ・レンズ (Camera/Lens)" }, 
      { id: "background", label: "17. 背景・場所 (Background)" }, 
      { id: "lighting", label: "18. 照明・ライティング (Lighting)" }, 
      { id: "atmosphere", label: "19. 雰囲気・色彩 (Atmosphere & Color)" }, 
      { id: "effect", label: "20. エフェクト・演出 (Effects)" }, 
      { id: "postprocessing", label: "21. 仕上げ・後処理 (Post-Processing)" }, 
      { id: "filter", label: "22. フィルター・効果 (Filter)" }, 
      { id: "presets", label: "23. 保存済みプリセット (My Presets)" }, 
      { id: "visualsync", label: "🛠️ Visual Sync (Preview & Adjust)" } 
    ];
    
    order.forEach(({ id, label }) => { try { const container = ensureContainer(id, label); sectionsRoot.appendChild(container); const versions = PROMPT_PARTS[id]; if (versions) { Object.keys(versions).map(v=>parseInt(v)).sort((a,b)=>a-b).forEach(v => { if (versions[v] && !versions[v]._mounted) { if (versions[v].initUI) try { versions[v].initUI(container); } catch(e) { console.error(e); } versions[v]._mounted = true; } }); if (container.children.length > 0) applyAccordion(container, label); } } catch (e) { console.error(e); } });
    window.dispatchEvent(new Event("promptPartMounted"));
  }
  window.__triggerUIMount = attemptMount;
  UI_REG.getAllSelected = function() { const tags = []; Object.values(PROMPT_PARTS).forEach(versions => { Object.keys(versions).forEach(v => { const api = versions[v]; if (typeof api.getTags === "function") { try { const t = api.getTags(); if (Array.isArray(t)) tags.push(...t); } catch(e) {} } }); }); return tags; };

  function generateOutput() {
    window.__isGenerating = true; 
    const out = document.getElementById("out"); if (!out) return; 
    const currentText = out.value;
    const currentTags = currentText.split(/[,，\n]+/).map(s => s.trim()).filter(Boolean);
    const rawSelectedList = UI_REG.getAllSelected();
    const activeRawTags = new Set();
    rawSelectedList.forEach(item => { item.split(/[,，\n]+/).map(s => s.trim()).filter(Boolean).forEach(p => activeRawTags.add(p)); });
    let knownDictionary = new Set();
    try { knownDictionary = getKnownTags(); } catch(e) { console.error("Dict error", e); }
    const finalTags = [];
    const processedCores = new Set();
    currentTags.forEach(tag => { const core = getCoreTag(tag); if (!knownDictionary.has(core)) { if (!processedCores.has(core)) { finalTags.push(tag); processedCores.add(core); } } });
    activeRawTags.forEach(rawTag => { const core = getCoreTag(rawTag); if (!processedCores.has(core)) { finalTags.push(rawTag); processedCores.add(core); } });
    out.value = finalTags.join(", ");
    out.dispatchEvent(new Event('input', { bubbles: true }));
    if (window.__outputTranslation) window.__outputTranslation.resetToEn();
    setTimeout(() => { window.__isGenerating = false; }, 100);
  }

  function showLinkageToast(items, mode) {
    let toast = document.getElementById("linkage-toast");
    if (!toast) { toast = document.createElement("div"); toast.id = "linkage-toast"; document.body.appendChild(toast); }
    const names = items.map(n => `「${n}」`).join(" と ");
    const action = mode ? "ON" : "OFF";
    toast.textContent = `⚡ 連動機能: ${names} を${action}にしました`;
    toast.classList.add("show");
    setTimeout(() => { toast.classList.remove("show"); }, 3000);
  }

  function applyLinkage(checkbox) {
    const isChecked = checkbox.checked;
    if (!checkbox.dataset.links) return;
    const targets = checkbox.dataset.links.split(",");
    const allChecks = document.querySelectorAll('input[type="checkbox"]');
    const linkedItems = [];
    let stateChanged = false; 
    allChecks.forEach(target => {
      if (target === checkbox) return;
      const tLabel = (target.parentElement.textContent || "").toLowerCase();
      let matched = false;
      for (const word of targets) { if (tLabel.includes(word.toLowerCase().trim())) { matched = true; break; } }
      if (matched && target.checked !== isChecked) {
        target.checked = isChecked;
        linkedItems.push(target.parentElement.textContent.trim());
        stateChanged = true;
        if (isChecked) {
          const details = target.closest('details'); if(details) details.open = true;
          const parentLabel = target.parentElement; parentLabel.classList.remove("linked-flash"); void parentLabel.offsetWidth; parentLabel.classList.add("linked-flash");
        }
      }
    });
    if (linkedItems.length > 0) showLinkageToast(linkedItems, isChecked);
    if (stateChanged && !isChecked) generateOutput();
  }

  function resetAll() { if(!confirm("全てリセットしますか？")) return; document.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false); document.querySelectorAll("input[type='range']").forEach(el => { el.value = 100; el.dispatchEvent(new Event('input')); }); const searchBar = document.querySelector("#ui-search-bar input"); if(searchBar) { searchBar.value = ""; searchBar.dispatchEvent(new Event('input')); } const out = document.getElementById("out"); if (out) out.value = ""; out.dispatchEvent(new Event('input', { bubbles: true })); if (window.__outputTranslation) window.__outputTranslation.resetToEn(); }
  function copyOutput() { const out = document.getElementById("out"); out.select(); document.execCommand("copy"); }
  
  // ★カテゴリーマネージャー機能
  function initFloater() {
    // コンテナ作成
    const floater = document.createElement('div');
    floater.id = 'active-category-floater';
    floater.innerHTML = `
      <div id="floater-btn">📂 開いている項目 <span id="open-count">0</span></div>
      <div id="floater-list">
        <div class="floater-header">
          <span>開いているカテゴリー</span>
          <button class="close-all-btn">🗑️ 全て閉じる</button>
        </div>
        <div id="floater-items"></div>
      </div>
    `;
    document.body.appendChild(floater);

    const floaterBtn = document.getElementById('floater-btn');
    const floaterList = document.getElementById('floater-list');
    const itemsContainer = document.getElementById('floater-items');
    const openCountSpan = document.getElementById('open-count');
    const closeAllBtn = floater.querySelector('.close-all-btn');

    // 開いているカテゴリーを収集してリスト更新
    const updateList = () => {
      const openedDetails = Array.from(document.querySelectorAll('details.qp-main-acc[open], details.accordion-wrap[open]'));
      const count = openedDetails.length;
      openCountSpan.textContent = count;

      if (count > 0) {
        floaterBtn.classList.add('show');
        itemsContainer.innerHTML = '';
        openedDetails.forEach(det => {
          const summary = det.querySelector('summary');
          const title = summary ? summary.textContent.replace(/[▶▼]/g, '').trim() : 'カテゴリー';
          
          const itemDiv = document.createElement('div');
          itemDiv.className = 'floater-item';
          itemDiv.innerHTML = `<span>${title}</span>`;
          
          const closeBtn = document.createElement('button');
          closeBtn.className = 'item-close-btn';
          closeBtn.innerHTML = '×';
          closeBtn.onclick = (e) => {
            e.stopPropagation();
            // 子カテゴリーを閉じる
            det.querySelectorAll('details').forEach(d => d.removeAttribute('open'));
            // 親を閉じる
            det.removeAttribute('open');
            // リスト更新
            setTimeout(updateList, 50); // DOM反映待ち
          };
          itemDiv.appendChild(closeBtn);
          itemsContainer.appendChild(itemDiv);
        });
      } else {
        floaterBtn.classList.remove('show');
        floaterList.classList.remove('open');
      }
    };

    // イベントリスナー
    const sectionsRoot = document.getElementById("sections");
    if (sectionsRoot) {
      sectionsRoot.addEventListener('toggle', (e) => {
        if (e.target.tagName === 'DETAILS' && (e.target.classList.contains('qp-main-acc') || e.target.classList.contains('accordion-wrap'))) {
          // 少し遅延させて状態が確定してから更新
          setTimeout(updateList, 50);
        }
      }, true);
    }

    // ボタンクリックでリスト開閉
    floaterBtn.addEventListener('click', () => {
      floaterList.classList.toggle('open');
    });

    // 全て閉じる
    closeAllBtn.addEventListener('click', () => {
      document.querySelectorAll('details.qp-main-acc[open], details.accordion-wrap[open]').forEach(det => {
        det.querySelectorAll('details').forEach(d => d.removeAttribute('open'));
        det.removeAttribute('open');
      });
      setTimeout(updateList, 50);
    });

    // 初期チェック
    setTimeout(updateList, 500);
  }

  function init() { if(!document.getElementById('builder-core-style')) { const style = document.createElement('style'); style.id = 'builder-core-style'; style.textContent = CSS; document.head.appendChild(style); } const genBtn = document.getElementById("genBtn"); if (genBtn) { const container = genBtn.parentElement; container.classList.add("builder-footer-grid"); genBtn.addEventListener("click", generateOutput); document.getElementById("copyBtn")?.addEventListener("click", copyOutput); document.getElementById("resetBtn")?.addEventListener("click", resetAll); const transBtn = document.getElementById("translateBtn"); if (transBtn) transBtn.addEventListener("click", () => window.__outputTranslation.toggle()); } const sectionsRoot = document.getElementById("sections"); if (sectionsRoot) { sectionsRoot.addEventListener("change", (e) => { if (e.target.matches('input[type="checkbox"]')) { applyLinkage(e.target); if (!e.target.checked) generateOutput(); } else if (e.target.matches('input[type="range"]')) { /* rangeはボタン待ち */ } }); } 
    initFloater(); // マネージャー起動
  }
  
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
  
  window.__outputTranslation = { 
    mode: "en", 
    dict: {}, 
    register(dict) { this.dict = { ...this.dict, ...dict }; }, 
    resetToEn() { this.mode = "en"; const btn = document.getElementById("translateBtn"); if(btn) btn.textContent = "日本語表示"; }, 
    normalize(str) { return str.replace(/[\(\{\[\]\}\)]/g, "").replace(/[（）【】［］｛｝]/g, "").replace(/:[\d\.]+(%?)/g, "").replace(/\s+/g, "").toLowerCase(); }, 
    fixExtraClosers(str) { const trimOne = (s, openCh, closeCh) => { const open = (s.match(new RegExp(`\\${openCh}`, "g")) || []).length; const close = (s.match(new RegExp(`\\${closeCh}`, "g")) || []).length; let extra = close - open; while (extra > 0 && s.endsWith(closeCh)) { s = s.slice(0, -1); extra--; } return s; }; return str.split(/,\s*/).map(w => { let s = w; s = trimOne(s, "(", ")"); s = trimOne(s, "{", "}"); s = trimOne(s, "[", "]"); return s; }).join(", "); },
    toggle() { const outEl = document.getElementById("out"); const btn = document.getElementById("translateBtn"); if (!outEl) return; const current = outEl.value; if (!current.trim()) return; const words = current.split(/,\s*/).filter(Boolean); let newText; if (this.mode === "en") { newText = words.map(w => { let core = w.replace(/[\(\{\[\]\}\)]/g, "").replace(/:\d+(\.\d+)?/g, "").trim(); let ja = this.dict[core] || this.dict[core.toLowerCase()]; if (ja) return w.replace(new RegExp(core.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), ja); return w; }).join(", "); this.mode = "ja"; if(btn) btn.textContent = "英語表示"; } else { const reverseMap = {}; Object.entries(this.dict).forEach(([enKey, jaVal]) => { if (!jaVal) return; const normalizedJa = this.normalize(jaVal); reverseMap[normalizedJa] = enKey; }); newText = words.map(w => { let searchKey = this.normalize(w); let en = reverseMap[searchKey]; const match = w.match(/^([（(\{\[]*)([\s\S]*?)((?::[\d\.]+(?:%?))?[）)\}\]]*)$/); if (!match) return w; const prefix = match[1] || ""; let core = match[2] || ""; let suffix = match[3] || ""; if (!en) { let coreKey = this.normalize(core); en = reverseMap[coreKey]; if (!en && suffix.match(/^[）)\}\]]+$/)) { let retryKey = this.normalize(core + suffix); if (reverseMap[retryKey]) { en = reverseMap[retryKey]; suffix = ""; } } } if (en) return prefix + en + suffix; return w; }).join(", "); this.mode = "en"; if(btn) btn.textContent = "日本語表示"; } newText = this.fixExtraClosers(newText); outEl.value = newText; } 
  };
})();

