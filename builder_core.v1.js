(function(){
  "use strict";

  const UI_REG = {};
  window.UI_REG = UI_REG;

  const PROMPT_PARTS = {};
  const CONTAINERS = {};

  function log(msg) {
    const logArea = document.getElementById("log");
    if (logArea) {
      const line = document.createElement("div");
      line.textContent = msg;
      logArea.appendChild(line);
      if (document.getElementById("auto-scroll")?.checked)
        logArea.scrollTop = logArea.scrollHeight;
    }
    console.log(msg);
  }

  function ensureContainer(id, label) {
    let container = document.getElementById(`list-${id}`);
    if (!container) {
      container = document.createElement("div");
      container.id = `list-${id}`;
      container.className = "section";
      
      // H2を作成（表示の保険）
      const h2 = document.createElement("h2");
      h2.textContent = label;
      container.appendChild(h2);

      const sectionsRoot = document.getElementById("sections");
      if (id === "expression") {
        sectionsRoot?.insertBefore(container, sectionsRoot.firstChild);
      } else {
        sectionsRoot?.appendChild(container);
      }
    }
    return container;
  }

  // ★ 安全な折りたたみ化関数
  function applyAccordion(container, label) {
    if (container.querySelector('details.accordion-wrap')) return;

    // 直下のH2を探して削除
    const directH2 = Array.from(container.children).find(el => el.tagName === 'H2');
    if (directH2) directH2.remove();

    // 中身を退避
    const contentNodes = Array.from(container.childNodes);
    if (contentNodes.length === 0) return;

    // <details>作成
    const details = document.createElement('details');
    details.className = 'accordion-wrap';
    // ★ 修正点: 初期状態を閉じる (false) に設定
    details.open = false; 

    const summary = document.createElement('summary');
    // 閉じた状態なので初期アイコンは "▶"
    summary.textContent = "▶ " + label;
    summary.style.cursor = "pointer";
    summary.style.fontWeight = "bold";
    summary.style.fontSize = "1.2em";
    summary.style.marginBottom = "10px";
    summary.style.listStyle = "none";

    details.addEventListener("toggle", () => {
      summary.textContent = (details.open ? "▼ " : "▶ ") + label;
    });

    const wrapper = document.createElement('div');
    contentNodes.forEach(node => wrapper.appendChild(node));

    details.appendChild(summary);
    details.appendChild(wrapper);
    container.appendChild(details);
  }

  window.__registerPromptPart = function(category, version, api) {
    if (!PROMPT_PARTS[category]) PROMPT_PARTS[category] = {};
    PROMPT_PARTS[category][version] = api;
    log(`登録完了: ${category} v${version}`);
  };

  function attemptMount() {
    const order = [
      { id: "expression", label: "表情（Expression）" },
      { id: "filter", label: "フィルター調整（Filter）" },
      { id: "visualsync", label: "トーン補正（Visual Sync）" },
      { id: "preview_sync", label: "プレビュー" },
      { id: "hair", label: "ヘア" },
      { id: "pose", label: "ポーズ" },
      { id: "attire", label: "服装" },
      { id: "background", label: "背景" },
      { id: "lighting", label: "照明" },
      { id: "effect", label: "エフェクト" },
      { id: "cinematic", label: "シネマティック" },
      { id: "faith", label: "信仰" },
      { id: "presets", label: "プリセット" }
    ];

    for (const { id, label } of order) {
      const versions = PROMPT_PARTS[id];
      if (versions) {
        const container = ensureContainer(id, label);
        
        // 合体モード: 昇順で実行
        const sortedVersions = Object.keys(versions)
          .map(v => parseInt(v))
          .sort((a, b) => a - b);

        let hasContent = false;
        for (const v of sortedVersions) {
          const part = versions[v];
          if (part && !part._mounted) {
             if (part.initUI) {
               part.initUI(container);
               log(`✅ Merged UI for ${id} v${v}`);
               hasContent = true;
             }
             part._mounted = true; 
          }
        }

        // マウント後に折りたたみ適用
        if (hasContent || container.children.length > 1) {
            applyAccordion(container, label);
        }
      }
    }
    window.dispatchEvent(new Event("promptPartMounted"));
  }

  window.__triggerUIMount = attemptMount;

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
  }

  function resetAll() {
    document.querySelectorAll("input[type='checkbox']").forEach(el => {
      el.checked = false;
    });
    document.querySelectorAll("input[type='range']").forEach(el => {
      el.value = 100;
      el.dispatchEvent(new Event('input'));
    });
    const out = document.getElementById("out");
    if (out) out.value = "";
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
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();

