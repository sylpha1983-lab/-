(function(){
  "use strict";

  const UI_REG = {};
  window.UI_REG = UI_REG;
  const PROMPT_PARTS = {};

  function log(msg) {
    if(window.console && console.log) console.log("[BuilderCore] " + msg);
  }

  // --- 検索機能の実装 ---
  function createSearchBar() {
    const wrap = document.createElement("div");
    wrap.style.marginBottom = "15px";
    wrap.style.position = "sticky";
    wrap.style.top = "0";
    wrap.style.zIndex = "100";
    wrap.style.background = "#fff";
    wrap.style.padding = "10px 0";
    wrap.style.borderBottom = "1px solid #ccc";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "🔍 項目を検索... (例: ビキニ, bikini)";
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.fontSize = "1em";
    input.style.borderRadius = "4px";
    input.style.border = "1px solid #ccc";

    input.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const sections = document.querySelectorAll(".section");

      sections.forEach(sec => {
        const detailsList = sec.querySelectorAll("details");
        let secHit = false;

        detailsList.forEach(det => {
          const labels = det.querySelectorAll("label");
          let groupHit = false;

          labels.forEach(lbl => {
            const text = lbl.textContent.toLowerCase();
            // チェックボックス自体は検索対象外だが、ラベルに含まれるテキストで判定
            if (term === "" || text.includes(term)) {
              lbl.style.display = ""; // 表示
              groupHit = true;
            } else {
              lbl.style.display = "none"; // 非表示
            }
          });

          // 検索ヒット時のみアコーディオンを開く
          if (term !== "" && groupHit) {
            det.open = true;
            det.style.display = "";
            secHit = true;
          } else if (term === "") {
            // 検索解除時は元の状態に戻す（閉じる）
            det.open = false;
            det.style.display = "";
            secHit = true; // セクション自体は表示
          } else {
            det.style.display = "none";
          }
        });

        // セクション内にヒットがなければセクションごと隠す
        sec.style.display = secHit ? "" : "none";
      });
    });

    wrap.appendChild(input);
    return wrap;
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

    // ★ 検索バーの設置（すでにある場合は追加しない）
    if (!document.getElementById("ui-search-bar")) {
      const searchBar = createSearchBar();
      searchBar.id = "ui-search-bar";
      sectionsRoot.insertBefore(searchBar, sectionsRoot.firstChild);
    }

    // ★ 最終的なカテゴリ表示順序
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
          const sortedVersions = Object.keys(versions).map(v => parseInt(v)).sort((a, b) => a - b);
          for (const v of sortedVersions) {
            const part = versions[v];
            if (part && !part._mounted) {
               if (part.initUI) {
                 try {
                   part.initUI(container);
                 } catch(e) {
                   console.error(`Error mounting ${id} v${v}:`, e);
                   const errDiv = document.createElement("div");
                   errDiv.style.color = "red";
                   errDiv.style.fontSize = "0.8em";
                   errDiv.textContent = `Error: ${e.message}`;
                   container.appendChild(errDiv);
                 }
               }
               part._mounted = true; 
            }
          }
          if (container.children.length > 0) {
              applyAccordion(container, label);
          }
        }
      } catch (e) {
        console.error(`Critical error in category ${id}:`, e);
      }
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
          } catch(e) {
            console.error("Error getting tags:", e);
          }
        }
      });
    });
    return tags;
  };

  function generateOutput() {
    const out = document.getElementById("out");
    const tags = UI_REG.getAllSelected();
    out.value = tags.join(", ");
    if (window.__outputTranslation) window.__outputTranslation.resetToEn();
  }

  function resetAll() {
    document.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
    document.querySelectorAll("input[type='range']").forEach(el => {
      el.value = 100;
      el.dispatchEvent(new Event('input'));
    });
    // 検索バーもリセット
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
    document.getElementById("genBtn")?.addEventListener("click", generateOutput);
    document.getElementById("copyBtn")?.addEventListener("click", copyOutput);
    document.getElementById("resetBtn")?.addEventListener("click", resetAll);
    
    const transBtn = document.getElementById("translateBtn");
    if (transBtn) {
      transBtn.addEventListener("click", () => window.__outputTranslation.toggle());
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

