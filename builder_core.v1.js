(function(){
  "use strict";

  const UI_REG = {};
  window.UI_REG = UI_REG;
  const PROMPT_PARTS = {};

  // --- ログ機能（必要なら拡張）---
  function log(msg) {}

  // --- UI構築ヘルパー ---
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
      // Quality Presetは最上段へ
      if (id === "quality_preset") { 
        sectionsRoot?.insertBefore(container, sectionsRoot.firstChild);
      } else {
        sectionsRoot?.appendChild(container);
      }
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

    const summary = document.createElement('summary');
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

  // --- 拡張パーツ登録API ---
  window.__registerPromptPart = function(category, version, api) {
    if (!PROMPT_PARTS[category]) PROMPT_PARTS[category] = {};
    PROMPT_PARTS[category][version] = api;
  };

  // --- UIマウント実行 ---
  function attemptMount() {
    const order = [
      { id: "quality_preset", label: "クオリティ・プリセット (Quality & Presets)" },
      { id: "expression", label: "表情 (Expression)" },
      { id: "pose", label: "ポーズ (Pose)" },
      { id: "hair", label: "ヘアスタイル (Hair Style)" },
      { id: "attire", label: "服装 (Attire)" },
      { id: "background", label: "背景 (Background)" },
      { id: "filter", label: "フィルター調整 (Filter)" },
      { id: "visualsync", label: "トーン補正 & プレビュー (Visual Sync)" },
      { id: "lighting", label: "照明 (Lighting)" },
      { id: "effect", label: "エフェクト (Effect)" },
      { id: "faith", label: "信仰 (Faith)" }
    ];

    for (const { id, label } of order) {
      const versions = PROMPT_PARTS[id];
      if (versions) {
        const container = ensureContainer(id, label);
        const sortedVersions = Object.keys(versions).map(v => parseInt(v)).sort((a, b) => a - b);
        let hasContent = false;
        for (const v of sortedVersions) {
          const part = versions[v];
          if (part && !part._mounted) {
             if (part.initUI) {
               part.initUI(container);
               hasContent = true;
             }
             part._mounted = true; 
          }
        }
        if (hasContent || container.children.length > 0) {
            applyAccordion(container, label);
        }
      }
    }
    window.dispatchEvent(new Event("promptPartMounted"));
  }

  window.__triggerUIMount = attemptMount;
  
  // --- タグ収集と生成 ---
  UI_REG.getAllSelected = function() {
    const tags = [];
    Object.values(PROMPT_PARTS).forEach(versions => {
      Object.keys(versions).forEach(v => {
        const api = versions[v];
        if (typeof api.getTags === "function") {
          const t = api.getTags();
          if (Array.isArray(t)) tags.push(...t);
        }
      });
    });
    return tags;
  };

  function generateOutput() {
    const out = document.getElementById("out");
    const tags = UI_REG.getAllSelected();
    out.value = tags.join(", ");
    
    // 生成時は英語モード(標準)に戻す
    if (window.__outputTranslation) {
      window.__outputTranslation.resetToEn();
    }
  }

  function resetAll() {
    document.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
    document.querySelectorAll("input[type='range']").forEach(el => {
      el.value = 100;
      el.dispatchEvent(new Event('input'));
    });
    const out = document.getElementById("out");
    if (out) out.value = "";
    
    if (window.__outputTranslation) {
      window.__outputTranslation.resetToEn();
    }
  }

  function copyOutput() {
    const out = document.getElementById("out");
    out.select();
    document.execCommand("copy");
  }

  // --- 初期化 ---
  function init() {
    document.getElementById("genBtn")?.addEventListener("click", generateOutput);
    document.getElementById("copyBtn")?.addEventListener("click", copyOutput);
    document.getElementById("resetBtn")?.addEventListener("click", resetAll);

    // ★ 修正点: 翻訳ボタンの登録をここで行う (タイミング問題を解消)
    const transBtn = document.getElementById("translateBtn");
    if (transBtn) {
      transBtn.addEventListener("click", () => window.__outputTranslation.toggle());
    }
  }
  
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();

  // ============================================
  // 🧩 翻訳制御モジュール (Translation Module)
  // ============================================
  window.__outputTranslation = {
    mode: "en", // current mode
    dict: {},   // { "en_tag": "ja_label" }

    register(dict) {
      this.dict = { ...this.dict, ...dict };
    },

    resetToEn() {
      this.mode = "en";
      const btn = document.getElementById("translateBtn");
      if(btn) btn.textContent = "日本語表示";
    },

    // 英語 <-> 日本語 トグル (強化版)
    toggle() {
      const outEl = document.getElementById("out");
      const btn = document.getElementById("translateBtn");
      if (!outEl) return;

      const current = outEl.value;
      if (!current.trim()) return;

      // カンマ区切りで分割
      const words = current.split(/,\s*/).filter(Boolean);
      let newText;

      if (this.mode === "en") {
        // [EN] -> [JA]
        newText = words.map(w => {
          // カッコや数値を除去してコア単語を抽出 (例: "(masterpiece:1.3)" -> "masterpiece")
          const core = w.replace(/^[\(\{\[]+|[\)\}\]:\d\.]+$/g, "").trim();
          const ja = this.dict[core];
          if (ja) {
            // コア単語部分だけを日本語に置換して戻す
            return w.replace(core, ja);
          }
          return w; // 辞書になければそのまま
        }).join(", ");
        
        this.mode = "ja";
        if(btn) btn.textContent = "英語表示";
      } else {
        // [JA] -> [EN] (逆変換)
        // 逆引き辞書作成
        const reverseDict = {};
        Object.entries(this.dict).forEach(([k, v]) => { reverseDict[v] = k; });

        newText = words.map(w => {
          // 日本語文字以外(記号や数値)を除去してコア抽出の簡易版
          // ※日本語は変動が大きいので、完全一致をトライし、だめなら部分一致を試みる戦略
          let core = w.replace(/^[\(\{\[]+|[\)\}\]:\d\.]+$/g, "").trim();
          
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

