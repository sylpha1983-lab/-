(function(){
  "use strict";

  const UI_REG = {};
  window.UI_REG = UI_REG;
  const PROMPT_PARTS = {};

  const CSS = `
    .builder-footer-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
      align-items: stretch;
    }
    .builder-footer-grid button {
      flex: 1 1 auto;
      min-width: 70px;
      height: 44px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    #genBtn { background: #007bff; flex-grow: 2; min-width: 100px; font-size: 1rem; }
    #translateBtn { background: #f0ad4e; }
    #copyBtn { background: #6c757d; }
    #resetBtn { background: #dc3545; }
    #footer-search-btn { background: #17a2b8; }
    #footer-history-btn { background: #6f42c1; }
    .builder-footer-grid button:active { transform: translateY(1px); opacity: 0.9; }
  `;

  // ヘルパー: タグの装飾を除去して「コア」を取得
  function getCoreTag(formattedTag) {
    return formattedTag
      .replace(/[\(\{\[\]\}\)]/g, '') 
      .replace(/:[\d\.]+(%?)/g, '')
      .trim();
  }

  // ★ 全てのチェックボックスから「システムが知っているタグ一覧」を取得
  function getKnownTags() {
    const known = new Set();
    document.querySelectorAll('input[type="checkbox"][data-en]').forEach(cb => {
      known.add(cb.dataset.en);
    });
    return known;
  }

  function ensureContainer(id, label) {
    let container = document.getElementById(`list-${id}`);
    if (!container) {
      container = document.createElement("div");
      container.id = `list-${id}`;
      container.className = "section";
      const h2 = document.createElement("h2");
      h2.textContent = label;
      container.appendChild(h2);
      const sectionsRoot = document.getElementById("sections");
      if (sectionsRoot) sectionsRoot.appendChild(container);
    }
    return container;
  }

  function applyAccordion(container, label) {
    if (container.querySelector('details.accordion-wrap')) return;
    const directH2 = Array.from(container.children).find(el => el.tagName === 'H2');
    if (directH2) directH2.remove();
    const contentNodes = Array.from(container.childNodes);
    if (contentNodes.length === 0) return;

    const details = document.createElement('details');
    details.className = 'accordion-wrap';
    details.open = false; 
    const summary = document.createElement("summary");
    summary.textContent = "▶ " + label;
    summary.className = "section-summary";
    details.addEventListener("toggle", () => {
      summary.textContent = (details.open ? "▼ " : "▶ ") + label;
    });
    const wrapper = document.createElement('div');
    wrapper.className = 'section-content'; 
    contentNodes.forEach(node => wrapper.appendChild(node));
    details.appendChild(summary);
    details.appendChild(wrapper);
    container.appendChild(details);
  }

  window.__registerPromptPart = function(category, version, api) {
    if (!PROMPT_PARTS[category]) PROMPT_PARTS[category] = {};
    PROMPT_PARTS[category][version] = api;
  };

  function attemptMount() {
    const sectionsRoot = document.getElementById("sections");
    if (!sectionsRoot) return;

    if (!document.getElementById("ui-search-bar")) {
      const wrap = document.createElement("div");
      wrap.id = "ui-search-bar";
      wrap.style.cssText = "margin-bottom:15px; position:sticky; top:0; z-index:100; background:#fff; padding:10px 0; border-bottom:1px solid #ccc;";
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "🔍 項目を検索... (例: ビキニ, bikini)";
      input.style.cssText = "width:100%; padding:10px; fontSize:1em; borderRadius:4px; border:1px solid #ccc;";
      input.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll(".section").forEach(sec => {
          let secHit = false;
          sec.querySelectorAll("details").forEach(det => {
            let groupHit = false;
            det.querySelectorAll("label").forEach(lbl => {
              const text = lbl.textContent.toLowerCase();
              if (term === "" || text.includes(term)) {
                lbl.style.display = ""; groupHit = true;
              } else {
                lbl.style.display = "none";
              }
            });
            if (term !== "" && groupHit) { det.open = true; det.style.display = ""; secHit = true; }
            else if (term === "") { det.open = false; det.style.display = ""; secHit = true; }
            else { det.style.display = "none"; }
          });
          sec.style.display = secHit ? "" : "none";
        });
      });
      wrap.appendChild(input);
      sectionsRoot.insertBefore(wrap, sectionsRoot.firstChild);
    }

    const order = [
      { id: "quality_preset", label: "1. クオリティ・画風 (Quality & Style)" },
      { id: "anatomy", label: "2. 人体崩壊防止・構造 (Anatomy)" },
      { id: "race", label: "3. 種族・素体 (Race)" },
      { id: "bodytype", label: "4. 体型・プロポーション (Body Type)" },
      { id: "traits", label: "5. キャラ固有要素・特徴 (Traits)" },
      { id: "hair", label: "6. ヘアスタイル (Hair)" },
      { id: "expression", label: "7. 表情 (Expression)" },
      { id: "attire", label: "8. 服装・衣装 (Attire)" },
      { id: "accessories", label: "9. アクセサリ・小物 (Accessories)" },
      { id: "texture", label: "10. 素材・質感 (Material/Texture)" },
      { id: "pose", label: "11. ポーズ・構図 (Pose)" },
      { id: "narrative", label: "12. ストーリー・行動 (Narrative)" },
      { id: "composition", label: "13. 構図・設計 (Composition)" },
      { id: "camera", label: "14. カメラ・レンズ (Camera/Lens)" },
      { id: "background", label: "15. 背景・場所 (Background)" },
      { id: "lighting", label: "16. 照明・ライティング (Lighting)" },
      { id: "atmosphere", label: "17. 雰囲気・色彩 (Atmosphere & Color)" },
      { id: "effect", label: "18. エフェクト・演出 (Effects)" },
      { id: "postprocessing", label: "19. 仕上げ・後処理 (Post-Processing)" },
      { id: "filter", label: "20. フィルター・効果 (Filter)" },
      { id: "presets", label: "21. 保存済みプリセット (My Presets)" },
      { id: "visualsync", label: "🛠️ Visual Sync (Preview & Adjust)" }
    ];

    order.forEach(({ id, label }) => {
      try {
        const container = ensureContainer(id, label);
        sectionsRoot.appendChild(container);
        const versions = PROMPT_PARTS[id];
        if (versions) {
          Object.keys(versions).map(v=>parseInt(v)).sort((a,b)=>a-b).forEach(v => {
            if (versions[v] && !versions[v]._mounted) {
               if (versions[v].initUI) try { versions[v].initUI(container); } catch(e) { console.error(e); }
               versions[v]._mounted = true; 
            }
          });
          if (container.children.length > 0) applyAccordion(container, label);
        }
      } catch (e) { console.error(e); }
    });
    window.dispatchEvent(new Event("promptPartMounted"));
  }

  window.__triggerUIMount = attemptMount;
  
  UI_REG.getAllSelected = function() {
    const tags = [];
    Object.values(PROMPT_PARTS).forEach(versions => {
      Object.keys(versions).forEach(v => {
        const api = versions[v];
        if (typeof api.getTags === "function") {
          try {
            const t = api.getTags();
            if (Array.isArray(t)) tags.push(...t);
          } catch(e) {}
        }
      });
    });
    return tags;
  };

  // ★ 改良版生成ロジック: 未知のタグ（手動入力）を保護する
  function generateOutput() {
    const out = document.getElementById("out");
    
    // 1. テキストエリアの現状を解析
    const currentText = out.value;
    const currentTags = currentText.split(',').map(s => s.trim()).filter(Boolean);
    
    // 2. 現在アクティブなチェックボックス一覧を取得
    const activeRawTags = new Set(UI_REG.getAllSelected());
    
    // 3. システムが知っている全タグ一覧を取得（これが「未知のタグ」の判定基準）
    const knownDictionary = getKnownTags();

    const finalTags = [];
    const processedActiveTags = new Set();

    // A. 現状のタグを走査し、「残すべきもの」を選別
    currentTags.forEach(tag => {
      const core = getCoreTag(tag);

      if (activeRawTags.has(core)) {
        // ケース1: チェックボックスでONになっていて、テキストエリアにもある
        // -> テキストエリアの記述（強調済みなど）を優先して残す
        finalTags.push(tag);
        processedActiveTags.add(core);
      } 
      else if (!knownDictionary.has(core)) {
        // ケース2: チェックボックス一覧に存在しない「未知のタグ」（手動入力や複雑構文）
        // -> これはユーザーが意図的に書いたものなので、保護して残す！
        finalTags.push(tag);
      }
      // ケース3: 辞書にはあるが、チェックがOFFになっている
      // -> 削除対象なので push しない
    });

    // B. チェックボックスでONだが、まだテキストエリアにないタグを追加
    activeRawTags.forEach(rawTag => {
      if (!processedActiveTags.has(rawTag)) {
        finalTags.push(rawTag);
      }
    });

    out.value = finalTags.join(", ");
    if (window.__outputTranslation) window.__outputTranslation.resetToEn();
  }

  function resetAll() {
    document.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
    document.querySelectorAll("input[type='range']").forEach(el => {
      el.value = 100;
      el.dispatchEvent(new Event('input'));
    });
    const searchBar = document.querySelector("#ui-search-bar input");
    if(searchBar) {
      searchBar.value = "";
      searchBar.dispatchEvent(new Event('input'));
    }
    const out = document.getElementById("out");
    if (out) out.value = "";
    if (window.__outputTranslation) window.__outputTranslation.resetToEn();
  }

  function copyOutput() {
    const out = document.getElementById("out");
    out.select();
    document.execCommand("copy");
  }

  function init() {
    if(!document.getElementById('builder-core-style')) {
      const style = document.createElement('style');
      style.id = 'builder-core-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    const genBtn = document.getElementById("genBtn");
    if (genBtn) {
      const container = genBtn.parentElement;
      container.classList.add("builder-footer-grid");
      
      genBtn.addEventListener("click", generateOutput);
      document.getElementById("copyBtn")?.addEventListener("click", copyOutput);
      document.getElementById("resetBtn")?.addEventListener("click", resetAll);
      
      const transBtn = document.getElementById("translateBtn");
      if (transBtn) transBtn.addEventListener("click", () => window.__outputTranslation.toggle());
    }
  }
  
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();

  // 翻訳ロジック
  window.__outputTranslation = {
    mode: "en", 
    dict: {},
    register(dict) { this.dict = { ...this.dict, ...dict }; },
    resetToEn() {
      this.mode = "en";
      const btn = document.getElementById("translateBtn");
      if(btn) btn.textContent = "日本語表示";
    },
    toggle() {
      const outEl = document.getElementById("out");
      const btn = document.getElementById("translateBtn");
      if (!outEl) return;
      const current = outEl.value;
      if (!current.trim()) return;
      const words = current.split(/,\s*/).filter(Boolean);
      let newText;
      if (this.mode === "en") {
        newText = words.map(w => {
          let core = w.replace(/[\(\{\[\]\}\)]/g, "").replace(/:\d+(\.\d+)?/g, "").trim(); 
          let ja = this.dict[core] || this.dict[core.toLowerCase()];
          if (ja) return w.replace(new RegExp(core.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), ja);
          return w; 
        }).join(", ");
        this.mode = "ja";
        if(btn) btn.textContent = "英語表示";
      } else {
        const reverseDict = {};
        Object.entries(this.dict).forEach(([k, v]) => { reverseDict[v] = k; });
        newText = words.map(w => {
          let core = w.replace(/[\(\{\[\]\}\):0-9\.]/g, "").trim();
          let en = reverseDict[core];
          if (en) return w.replace(core, en);
          return w;
        }).join(", ");
        this.mode = "en";
        if(btn) btn.textContent = "日本語表示";
      }
      outEl.value = newText;
    }
  };
})();

