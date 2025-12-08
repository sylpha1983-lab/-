(function(){
  "use strict";

  const UI_REG = {};
  window.UI_REG = UI_REG;
  const PROMPT_PARTS = {};

  function log(msg) {
    if(window.console && console.log) console.log("[BuilderCore] " + msg);
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

    // ★ 表示順序定義 (種族を2番目に)
    const order = [
      { id: "quality_preset", label: "クオリティ・プリセット (Quality & Presets)" },
      { id: "race", label: "種族 (Race)" }, 
      { id: "expression", label: "表情 (Expression)" },
      { id: "pose", label: "ポーズ (Pose)" },
      { id: "hair", label: "ヘアスタイル (Hair Style)" },
      { id: "attire", label: "服装 (Attire)" },
      { id: "background", label: "背景 (Background)" },
      { id: "filter", label: "フィルター調整 (Filter)" },
      { id: "visualsync", label: "トーン補正 & プレビュー (Visual Sync)" },
      { id: "lighting", label: "照明 (Lighting)" },
      { id: "effect", label: "エフェクト (Effect)" }
    ];

    order.forEach(({ id, label }) => {
      // 安全装置 (try-catch): 1つのカテゴリが失敗しても他は動かす
      try {
        const container = ensureContainer(id, label);
        sectionsRoot.appendChild(container); // 強制並べ替え

        const versions = PROMPT_PARTS[id];
        if (versions) {
          const sortedVersions = Object.keys(versions).map(v => parseInt(v)).sort((a, b) => a - b);
          for (const v of sortedVersions) {
            const part = versions[v];
            if (part && !part._mounted) {
               if (part.initUI) {
                 // 個別のinitUI実行を保護
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

  // 翻訳ロジック (カッコ無視対応)
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

