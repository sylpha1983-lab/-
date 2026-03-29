(function () {
  "use strict";

  try{console.log("[builder_core] v5 preset_packs enabled");}catch(e){}

  /**
   * builder_core.v1.js (double-load safe)
   * - PROMPT_PARTS / UI_REG を再初期化で潰さない
   * - init() の二重実行を抑止
   * - __registerPromptPart を常に有効化（後から来ても登録できる）
   *
   * 追加:
   * - window.UI_SECTIONS を提供（他bundleが参照しても落ちない）
   */

  const CORE_SENTINEL = "__BUILDER_CORE_V1_SINGLETON__";

  const isAlreadyBooted = !!window[CORE_SENTINEL];

  // i18n helper (UI strings only)
  function __t(key, fallback, vars){
    try{
      const tfn = window.__i18n && typeof window.__i18n.t === "function" ? window.__i18n.t : null;
      let s = tfn ? tfn(key, fallback) : (fallback ?? key);
      if (vars && typeof s === "string"){
        for (const k of Object.keys(vars)){
          s = s.replaceAll("{"+k+"}", String(vars[k]));
        }
      }
      return s;
    }catch(e){
      return fallback ?? key;
    }
  }

  function __applyI18nCore(){
    try{
      const search = document.querySelector('input[type="search"], input#searchInput');
      if (search) search.placeholder = __t("ui.search_placeholder", search.placeholder || "🔍 項目を検索... (例: ビキニ, bikini)");
      const out = document.querySelector("textarea#outputArea, textarea#out");
      if (out) out.placeholder = __t("ui.output_placeholder", out.placeholder || "ここに生成されたタグが表示されます...");
      document.querySelectorAll(".category-reset-btn").forEach(btn=>{
        btn.innerHTML = __t("ui.clear", "🗑️ クリア");
        btn.title = __t("ui.clear_title", "このカテゴリーの選択を全て解除");
      });
      document.querySelectorAll("[data-accordion-label]").forEach(span=>{
        const label = span.getAttribute("data-accordion-label") || "";
        const details = span.closest("details");
        span.textContent = (details && details.open ? "▼ " : "▶ ") + label;
      });
    }catch(e){}
  }

  if (!window.__applyI18n) window.__applyI18n = __applyI18nCore;

  // グローバル状態（破壊しない）
  const UI_REG = (window.UI_REG && typeof window.UI_REG === "object") ? window.UI_REG : {};
  window.UI_REG = UI_REG;

  const PROMPT_PARTS =
    (window.__PROMPT_PARTS__ && typeof window.__PROMPT_PARTS__ === "object")
      ? window.__PROMPT_PARTS__
      : {};
  window.__PROMPT_PARTS__ = PROMPT_PARTS;

  if (typeof window.__isGenerating !== "boolean") window.__isGenerating = false;

  const CSS = `
  .builder-footer-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; align-items: stretch; }
  .builder-footer-grid button { flex: 1 1 auto; min-width: 70px; height: 44px; border-radius: 6px; border: none; font-weight: bold; color: #fff; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; padding: 0 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  #genBtn { background: #007bff; flex-grow: 2; min-width: 100px; font-size: 1rem; }
  #translateBtn { background: #f0ad4e; }
  #copyBtn { background: #6c757d; }
  #resetBtn { background: #dc3545; }
  #footer-search-btn { background: #17a2b8; }
  #footer-history-btn { background: #6f42c1; }
  .builder-footer-grid button:active { transform: translateY(1px); opacity: 0.9; }

  .category-reset-btn {
    background: transparent;
    border: 1px solid #ccc;
    color: #666;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 0.8em;
    cursor: pointer;
    margin-left: 10px;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .category-reset-btn:hover { background: #dc3545; color: #fff; border-color: #dc3545; }

  #linkage-toast {
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(40, 44, 52, 0.95);
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 0.85em;
    z-index: 11000;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.3s, top 0.3s;
    pointer-events: none;
    white-space: normal;
    max-width: 90vw;
    width: max-content;
    text-align: center;
    font-weight: bold;
    line-height: 1.4;
  }
  #linkage-toast.show { opacity: 1; top: 10%; }

  #commercial-suggest-toast{
    position: fixed;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 20, 24, 0.96);
    color:#fff;
    padding: 12px 18px;
    border-radius: 16px;
    font-size: 0.88em;
    z-index: 12000;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    opacity: 0;
    transition: opacity 0.25s, top 0.25s;
    pointer-events: none;
    max-width: 92vw;
    width: max-content;
    text-align:center;
    line-height:1.45;
  }
  #commercial-suggest-toast.show{ opacity: 1; top: 12%; pointer-events:auto; }
  #commercial-suggest-toast .btnrow{ margin-top:8px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
  #commercial-suggest-toast button{
    cursor:pointer;
    border:1px solid rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.08);
    color:#fff;
    padding:6px 10px;
    border-radius:12px;
    font-weight:700;
    font-size:0.92em;
  }
  #commercial-suggest-toast button.primary{
    background: rgba(0, 200, 120, 0.25);
    border-color: rgba(0, 200, 120, 0.55);
  }


  @keyframes linked-flash-anim {
    0% { background-color: rgba(255, 215, 0, 0.6); box-shadow: 0 0 10px rgba(255, 215, 0, 0.8); transform: scale(1.02); }
    100% { background-color: transparent; box-shadow: none; transform: scale(1); }
  }
  .linked-flash { animation: linked-flash-anim 1.5s ease-out; border-radius: 4px; }

  #active-category-floater { position: fixed; top: 15px; right: 15px; z-index: 10000; display: flex; flex-direction: column; align-items: flex-end; }
  #floater-btn {
    background: linear-gradient(135deg, rgba(36, 127, 255, 0.96), rgba(79, 157, 255, 0.96));
    color: white;
    padding: 10px 16px;
    border-radius: 30px;
    font-weight: bold;
    box-shadow: 0 6px 16px rgba(0,0,0,0.22);
    cursor: pointer;
    border: 2px solid rgba(255,255,255,0.22);
    backdrop-filter: blur(4px);
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9em;
    user-select: none;
  }
  #floater-btn:hover { box-shadow: 0 10px 22px rgba(0,0,0,0.22); transform: translateY(-1px); }
  #floater-btn:active { transform: scale(0.96); }
  #floater-btn.show { display: flex; animation: slideDown 0.3s ease; }
  #floater-btn .floater-count {
    min-width: 1.8em;
    height: 1.8em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    border-radius: 999px;
    background: rgba(255,255,255,0.2);
    font-size: 0.86em;
  }
  #floater-list {
    display: none;
    background: rgba(255,255,255,0.98);
    border-radius: 14px;
    box-shadow: 0 14px 36px rgba(0,0,0,0.2);
    margin-top: 10px;
    width: min(86vw, 330px);
    max-height: min(68vh, 560px);
    overflow-y: auto;
    border: 1px solid rgba(0,0,0,0.08);
    animation: fadeIn 0.2s ease;
    overscroll-behavior: contain;
  }
  #floater-list.open { display: block; }
  .floater-header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 10px 12px;
    background: rgba(248,249,250,0.96);
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 0.85em;
    color: #555;
    backdrop-filter: blur(6px);
  }
  .floater-header-meta { display:flex; flex-direction:column; gap:2px; }
  .floater-header-meta small { font-size:0.82em; color:#6b7280; font-weight:600; }
  .close-all-btn {
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 0.88em;
    white-space: nowrap;
  }
  #floater-items { padding: 6px; }
  .floater-item {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid transparent;
    border-radius: 10px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 0.92em;
    text-align: left;
    cursor: pointer;
    transition: background 0.18s, border-color 0.18s, transform 0.18s;
    margin-bottom: 6px;
    box-sizing: border-box;
  }
  .floater-item:hover { background: #f6faff; border-color: #cfe2ff; transform: translateX(-1px); }
  .floater-item:last-child { margin-bottom: 0; }
  .floater-item.active { background: #edf4ff; border-color: #9cc3ff; }
  .floater-item.is-open .floater-item-status { background: #dff5e8; color: #18794e; }
  .floater-item.has-checks { border-color: #f4d58d; background: #fffaf0; }
  .floater-item-status.has-checks { background: #fff0c7; color: #946200; }
  .floater-block { padding: 8px 6px 0; }
  .floater-block + .floater-block { padding-top: 0; }
  .floater-block-title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;
    padding: 0 6px 8px;
    font-size: 0.84em;
    font-weight: 800;
    color: #374151;
  }
  .floater-block-title small {
    font-size: 0.82em;
    font-weight: 700;
    color: #6b7280;
  }
  .floater-divider {
    height: 1px;
    margin: 6px 6px 8px;
    background: linear-gradient(90deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02));
  }
  .floater-empty {
    margin: 0 6px 6px;
    padding: 10px 12px;
    border: 1px dashed #d7dce3;
    border-radius: 10px;
    background: #fbfcfe;
    color: #667085;
    font-size: 0.88em;
    line-height: 1.45;
  }
  .floater-item-text {
    flex: 1;
    min-width: 0;
    font-weight: 700;
    color: #243041;
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .floater-item-status {
    flex: 0 0 auto;
    border-radius: 999px;
    background: #eef2f7;
    color: #4b5563;
    padding: 4px 8px;
    font-size: 0.78em;
    font-weight: 700;
  }
  details.accordion-wrap.toc-target { scroll-margin-top: 84px; }
  .toc-jump-highlight {
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.18), 0 10px 24px rgba(74,144,226,0.12);
    transition: box-shadow 0.28s ease;
    border-radius: 10px;
  }
  #floater-checked-items { padding: 6px; }
  .floater-tools {
    padding: 0 6px 8px;
    display: grid;
    gap: 8px;
  }
  .floater-search-row,
  .floater-sort-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .floater-search-input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d4dbe5;
    border-radius: 10px;
    background: #fff;
    padding: 10px 12px;
    font-size: 0.88em;
    color: #243041;
  }
  .floater-search-input:focus {
    outline: none;
    border-color: #8cb7ff;
    box-shadow: 0 0 0 3px rgba(74,144,226,0.12);
  }
  .floater-sort-label {
    font-size: 0.8em;
    font-weight: 800;
    color: #5b6472;
  }
  .floater-sort-btn {
    border: 1px solid #d9e2ef;
    background: #fff;
    color: #4a5565;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 0.78em;
    font-weight: 800;
    cursor: pointer;
  }
  .floater-sort-btn.active {
    background: #eef5ff;
    border-color: #9cc3ff;
    color: #235dbb;
  }
  .floater-search-meta {
    font-size: 0.78em;
    color: #6b7280;
    font-weight: 700;
  }
  .floater-checked-card {
    margin: 0 0 10px;
    padding: 0;
    border: 1px solid #f0d9a6;
    border-radius: 12px;
    background: linear-gradient(180deg, #fffdf7, #fff8eb);
    overflow: hidden;
  }
  .floater-checked-card .floater-item {
    margin: 0;
    border: none;
    border-radius: 0;
    background: transparent;
  }
  .floater-checked-card .floater-item:hover {
    transform: none;
    background: rgba(255,255,255,0.45);
    border-color: transparent;
  }
  .floater-subtree {
    padding: 0 8px 8px;
  }
  .floater-subgroup-details {
    margin-top: 6px;
    border: 1px solid #f2e3bd;
    border-radius: 10px;
    background: rgba(255,255,255,0.55);
    overflow: hidden;
  }
  .floater-subgroup-details summary {
    list-style: none;
  }
  .floater-subgroup-details summary::-webkit-details-marker {
    display: none;
  }
  .floater-subgroup-btn,
  .floater-leaf-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid transparent;
    background: #fff;
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
  }
  .floater-subgroup-btn {
    margin: 6px 0 0;
    padding: 9px 10px;
    border-radius: 10px;
    background: #fffaf3;
    border-color: #f2e3bd;
  }
  .floater-subgroup-btn:hover {
    background: #fff4dd;
    border-color: #e7c97a;
  }
  .floater-subgroup-details[open] > .floater-subgroup-btn {
    background: #fff4dd;
    border-color: #e7c97a;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .floater-subgroup-text {
    flex: 1;
    min-width: 0;
    font-size: 0.86em;
    font-weight: 700;
    color: #5c4716;
    line-height: 1.35;
  }
  .floater-subgroup-status {
    flex: 0 0 auto;
    border-radius: 999px;
    background: #fff0c7;
    color: #946200;
    padding: 4px 8px;
    font-size: 0.75em;
    font-weight: 800;
  }
  .floater-subgroup-caret {
    flex: 0 0 auto;
    font-size: 0.8em;
    color: #946200;
    margin-left: 2px;
  }
  .floater-leaf-list {
    margin: 4px 0 0;
    padding: 0 0 0 10px;
    border-left: 2px solid rgba(148,98,0,0.12);
  }
  .floater-leaf-btn {
    margin: 4px 0 0;
    padding: 7px 10px;
    border-radius: 8px;
    font-size: 0.83em;
    color: #394150;
  }
  .floater-leaf-btn:hover {
    background: #f6faff;
    border-color: #cfe2ff;
  }
  .floater-leaf-text {
    flex: 1;
    min-width: 0;
    line-height: 1.35;
    color: #334155;
  }
  .floater-leaf-icon {
    flex: 0 0 auto;
    font-size: 0.8em;
    color: #94a3b8;
  }
  .floater-hit-mark {
    background: linear-gradient(180deg, rgba(255,241,118,0.82), rgba(255,224,102,0.92));
    color: inherit;
    padding: 0 0.14em;
    border-radius: 0.28em;
    box-shadow: 0 0 0 1px rgba(180,120,0,0.06);
  }
  @media (max-width: 700px) {
    #active-category-floater { top: 76px; right: 10px; }
    #floater-btn { padding: 8px 14px; font-size: 0.84em; }
    #floater-list { width: min(90vw, 320px); }
  }
  
  /* --- UI Tweak Test: Accordion readability (Food & Drink etc.) --- */
  details.accordion-wrap > .section-content{
    padding: 10px 12px;
  }

  /* Subgroup cards (nested groups inside Accessories/Food) */
  details.subgroup{
    margin-top: 8px;
    padding: 6px;
    border-radius: 8px;
    background: rgba(0,0,0,0.03);
  }

  `;

  function getCoreTag(formattedTag) {
    if (!formattedTag) return "";
    return formattedTag
      .toLowerCase()
      .replace(/:\s*[\d\.]+(%?)/g, "")
      .replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, "");
  }

  function getKnownTags() {
    const known = new Set();

    const addString = (str) => {
      if (!str) return;
      str.split(/[,，、\n]+/).forEach((p) => {
        const part = (p || "").trim();
        if (!part) return;

        // full phrase core (e.g. "pastel glow" => "pastelglow")
        const phraseCore = getCoreTag(part);
        if (phraseCore) known.add(phraseCore);

        // token cores (e.g. "pastel glow" => "pastel", "glow")
        const cleaned = part
          .replace(/[\(\)\{\}\[\]]/g, " ")
          .replace(/:\s*[\d\.]+(%?)/g, " ")
          .trim();
        cleaned.split(/\s+/).forEach((w) => {
          const wCore = getCoreTag(w);
          if (wCore) known.add(wCore);
        });
      });
    };

    document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      addString(cb.dataset.en);
      addString(cb.dataset.val);

      // Some bundles store tags as JSON array in data-tags
      const rawTags = cb.dataset.tags || cb.getAttribute("data-tags");
      if (rawTags) {
        try {
          const parsed = JSON.parse(rawTags);
          if (Array.isArray(parsed)) addString(parsed.join(", "));
          else if (typeof parsed === "string") addString(parsed);
          else addString(String(parsed));
        } catch (e) {
          // Not JSON; treat as plain string
          addString(rawTags);
        }
      }
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
    } else {
      const h2 = container.querySelector("h2");
      if (h2) h2.textContent = label;
    }
    return container;
  }

  function applyAccordion(container, label) {
    if (container.querySelector("details.accordion-wrap")) return;

    const directH2 = Array.from(container.children).find((el) => el.tagName === "H2");
    if (directH2) directH2.remove();

    const contentNodes = Array.from(container.childNodes);
    if (contentNodes.length === 0) return;

    const details = document.createElement("details");
    details.className = "accordion-wrap toc-target";
    details.open = false;

    const sectionKey = (container.id || "")
      .replace(/^list-/, "")
      .replace(/[^a-zA-Z0-9_-]/g, "-") || "section";
    if (!details.id) details.id = `toc-${sectionKey}`;
    details.dataset.sectionKey = sectionKey;
    details.dataset.sectionLabel = label;

    const summary = document.createElement("summary");
    summary.className = "section-summary";
    summary.style.display = "flex";
    summary.style.justifyContent = "space-between";
    summary.style.alignItems = "center";

    const labelSpan = document.createElement("span");
    labelSpan.className = "section-summary-label";
    labelSpan.textContent = "▶ " + label;
    summary.appendChild(labelSpan);

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "category-reset-btn";
    resetBtn.innerHTML = __t("ui.clear", "🗑️ クリア");
    resetBtn.title = __t("ui.clear_title", "このカテゴリーの選択を全て解除");
    resetBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (confirm(`「${label}」内のチェックを全て外しますか？`)) {
        container.querySelectorAll('input[type="checkbox"]').forEach((cb) => (cb.checked = false));
        container.querySelectorAll('input[type="range"]').forEach((rn) => {
          rn.value = 100;
          rn.dispatchEvent(new Event("input"));
        });
        generateOutput();
      }
    });
    summary.appendChild(resetBtn);

    details.addEventListener("toggle", () => {
      labelSpan.textContent = (details.open ? "▼ " : "▶ ") + label;
    });

    const wrapper = document.createElement("div");
    wrapper.className = "section-content";
    contentNodes.forEach((node) => wrapper.appendChild(node));

    details.appendChild(summary);
    details.appendChild(wrapper);
    container.appendChild(details);
  }

  window.__registerPromptPart = function (category, version, api) {
    if (!category) return;
    if (!PROMPT_PARTS[category]) PROMPT_PARTS[category] = {};
    PROMPT_PARTS[category][version] = api;
  };

  function attemptMount() {
    const sectionsRoot = document.getElementById("sections");
    if (!sectionsRoot) return;

    if (!document.getElementById("ui-search-bar")) {
      const wrap = document.createElement("div");
      wrap.id = "ui-search-bar";
      wrap.style.cssText =
        "margin-bottom:15px; position:sticky; top:0; z-index:100; background:#fff; padding:10px 0; border-bottom:1px solid #ccc;";

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "🔍 項目を検索... (例: ビキニ, bikini)";
      input.style.cssText =
        "width:100%; padding:10px; fontSize:1em; borderRadius:4px; border:1px solid #ccc;";

      input.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll(".section").forEach((sec) => {
          let secHit = false;
          sec.querySelectorAll("details").forEach((det) => {
            let groupHit = false;
            det.querySelectorAll("label").forEach((lbl) => {
              const text = lbl.textContent.toLowerCase();
              if (term === "" || text.includes(term)) {
                lbl.style.display = "";
                groupHit = true;
              } else {
                lbl.style.display = "none";
              }
            });
            if (term !== "" && groupHit) {
              det.open = true;
              det.style.display = "";
              secHit = true;
            } else if (term === "") {
              det.open = false;
              det.style.display = "";
              secHit = true;
            } else {
              det.style.display = "none";
            }
          });
          sec.style.display = secHit ? "" : "none";
        });
      });

      wrap.appendChild(input);
      sectionsRoot.insertBefore(wrap, sectionsRoot.firstChild);
    }

    // 並び順（これを外部に公開する）
    const order = [
      { id: "quality_preset", label: "1. 品質・設定 (Quality & Settings)" },
      { id: "preset_packs", label: "📦 プリセットパック (Preset Packs)" },
      { id: "style", label: "2. 画風・スタイル (Art Style)" },
      { id: "anatomy", label: "3. 人体崩壊防止・構造 (Anatomy)" },
      { id: "race", label: "4. 種族・素体 (Race)" },
      { id: "bodytype", label: "5. 体型・プロポーション (Body Type)" },
      { id: "traits", label: "6. キャラ固有要素・特徴 (Traits)" },
      { id: "hair", label: "7. ヘアスタイル (Hair)" },
      { id: "skin_details", label: "8. メイク・身体特徴 (Skin & Details)" },
      { id: "expression", label: "9. 表情 (Expression)" },
      { id: "attire", label: "10. 服装・衣装 (Attire)" },
      { id: "accessories", label: "11. アクセサリ・小物 (Accessories)" },
      { id: "creatures", label: "12. 生物・動物 (Creatures)" },
      { id: "texture", label: "13. 素材・質感 (Material/Texture)" },
      { id: "pose", label: "14. ポーズ・構図 (Pose)" },
      { id: "body_focus", label: "🔍 部位強調・フェチ (Body Focus)" },
      { id: "narrative", label: "15. ストーリー・行動 (Narrative)" },
      { id: "composition", label: "16. 構図・設計 (Composition)" },
      { id: "camera", label: "17. カメラ・レンズ (Camera/Lens)" },
      { id: "background", label: "18. 背景・場所 (Background)" },
      { id: "lighting", label: "19. 照明・ライティング (Lighting & Shadow)" },
      { id: "atmosphere", label: "20. 雰囲気・色彩 (Atmosphere & Color)" },
      { id: "effect", label: "21. エフェクト・演出 (Effects)" },
      { id: "postprocessing", label: "22. 仕上げ・後処理 (Post-Processing)" },
      { id: "filter", label: "23. フィルター・効果 (Filter)" },
      { id: "presets", label: "24. 保存済みプリセット (My Presets)" },
      { id: "visualsync", label: "🛠️ Visual Sync (Preview & Adjust)" },
      { id: "shadow", label: "Shadow (Internal)" },
    ];

    // ★ここが追加：他のbundleが参照する用
    // const UI_SECTIONS を期待する環境があるので、必ず提供する
    window.UI_SECTIONS = order.slice();
    // ついでに map も置いとく（あって困らない）
    window.UI_SECTIONS_MAP = window.UI_SECTIONS.reduce((acc, it) => {
      acc[it.id] = it;
      return acc;
    }, {});

    order.forEach(({ id, label }) => {
      try {
        let container;

        if (id === "shadow") {
          container = document.getElementById("list-lighting");
        } else {
          container = ensureContainer(id, label);
          sectionsRoot.appendChild(container);
        }

        const versions = PROMPT_PARTS[id];
        if (versions) {
          Object.keys(versions)
            .map((v) => parseInt(v, 10))
            .sort((a, b) => a - b)
            .forEach((v) => {
              const api = versions[v];
              if (!api) return;

              if (api._mounted) return;

              if (typeof api.initUI === "function" && container) {
                try {
                  api.initUI(container);
                } catch (e) {
                  console.error(e);
                }
              }
              api._mounted = true;
            });

          if (id !== "shadow" && container && container.children.length > 0) {
            applyAccordion(container, label);
          }
        }
      } catch (e) {
        console.error(e);
      }
    });

    window.dispatchEvent(new Event("promptPartMounted"));
      try{
        if (id === "attire" && window.__normalizeAttireLayout){
          const __attireRoot = document.getElementById("list-attire") || container;
          window.__normalizeAttireLayout(__attireRoot);
          setTimeout(function(){
            try{
              if (window.__normalizeAttireLayout) window.__normalizeAttireLayout(__attireRoot);
            }catch(_){}
          }, 50);
        }
      }catch(_){}

  }

  window.__triggerUIMount = attemptMount;

  UI_REG.getAllSelected = function () {
    const tags = [];
    Object.values(PROMPT_PARTS).forEach((versions) => {
      Object.keys(versions).forEach((v) => {
        const api = versions[v];
        if (api && typeof api.getTags === "function") {
          try {
            const t = api.getTags();
            if (Array.isArray(t)) tags.push(...t);
          } catch (e) {}
        }
      });
    });
    return tags;
  };

  function smartSplit(text) {
    if (!text) return [];
    const result = [];
    let current = "";
    let depth = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === "(" || char === "{" || char === "[") depth++;
      else if (char === ")" || char === "}" || char === "]") depth--;

      if (depth === 0 && (char === "," || char === "，" || char === "、" || char === "\n")) {
        if (current.trim()) result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    if (current.trim()) result.push(current.trim());
    return result;
  }

  // --- Subject Anchor (auto-front) ---
function applySubjectAnchorOrdering(text) {
  try {
    const tags = smartSplit(text || "");
    if (!tags.length) return text || "";
    const ANCHOR_PAT = /(beastkin|kraken|cephalopod|true\s+cephalopod\s+fusion|mythic\s*beast|bahamut|fenrir|leviathan|seiryu|byakko|suzaku|qilin|kirin|qinglong|baihu|zhuque|cerberus|hydra|orochi|jormungandr|griffin|sphinx|behemoth|phoenix|青龍|白虎|朱雀|麒麟)/i;

    const coreOf = (tag) => {
      try {
        if (typeof getCoreTag === "function") return getCoreTag(tag);
      } catch (e) {}
      return String(tag || "")
        .replace(/[\(\{\[\]\}\)]/g, "")
        .replace(/:[\d\.]+(%?)/g, "")
        .trim()
        .toLowerCase();
    };

    const anchors = [];
    const rest = [];
    const seen = new Set();

    tags.forEach((t) => {
      const c = coreOf(t);
      if (seen.has(c)) return;
      if (ANCHOR_PAT.test(t)) anchors.push(t);
      else rest.push(t);
      seen.add(c);
    });

    const ordered = anchors.slice(0, 8).concat(rest);
    
/*ANCHOR_ORDER_PATCH_V2*/
try {
  const __p = Array.isArray(ordered) ? ordered : [];
  const __isQuality = (s) => /\b(masterpiece|best quality|highres|ultra[- ]detailed|ultra high resolution|8k|16k|34k|uhd|4k|ray tracing|octane render|unreal engine|global illumination|subsurface scattering|volumetric lighting|cinematic lighting|dramatic lighting|official art|unity 8k wallpaper|illustration|sharp focus|extremely detailed|intricate details|detailed background|depth of field|bokeh|hdr|film grain|post-processing|lens flare|bloom|chromatic aberration|vignette|halation|diffraction spikes|ambient occlusion)\b/i.test(s);
  const __isAnchor  = (s) => /\b(seiryu\s+beastkin|byakko\s+beastkin|suzaku\s+beastkin|genbu\s+beastkin|kraken\s+beastkin|beastkin)\b|\b(true\s+eastern\s+dragon\s+fusion\s+entity|mythic\s+divine\s+creature|biological\s+.*\s+anatomy|god\s+presence)\b/i.test(s);
  const __anchors = [];
  const __quality = [];
  const __rest = [];
  for (const __s of __p) {
    if (!__s) continue;
    if (__isAnchor(__s)) __anchors.push(__s);
    else if (__isQuality(__s)) __quality.push(__s);
    else __rest.push(__s);
  }
  ordered.length = 0;
  ordered.push(...__anchors, ...__rest, ...__quality);
} catch (e) {}
return ordered.join(", ");
  } catch (e) {
    return text || "";
  }
}
// __SETSUBUN_BEANS_THROW_V1
function __isSetsubunToken(rawTag) {
  const s = String(rawTag||"").trim().toLowerCase();
  return s.includes("setsubun beans") || s === "roasted soybeans (setsubun beans)" || s === "throwing roasted soybeans (setsubun beans)";
}
function __composeBeansThrow(activeRawTags) {
  let hasBeans=false, hasThrow=false;
  const keep=[];
  activeRawTags.forEach(t=>{
    const raw=String(t||"").trim();
    const low=raw.toLowerCase();
    const core=getCoreTag(raw);
    if (low === "roasted soybeans (setsubun beans)") { hasBeans=true; return; }
    if (low === "throwing roasted soybeans (setsubun beans)") { hasBeans=true; hasThrow=true; return; }
    if (core === "throwing") { hasThrow=true; return; }
    keep.push(raw);
  });
  if (!hasBeans) return keep;
  // beans selected
  if (hasThrow) {
    keep.push("throwing roasted soybeans (setsubun beans)");
  } else {
    keep.push("roasted soybeans (setsubun beans)");
  }
  return keep;
}

function generateOutput() {
    // __QTY_NOT_PRESERVED_V1
    const __qtyCores = new Set(["quantitysingle","quantitymultiple","quantitymany"]);

    window.__isGenerating = true;
    const out = document.getElementById("out");
    if (!out) return;

    const OT = window.__outputTranslation || null;
    const keepMode = OT ? OT.mode : "en";

    const rawSelectedList = UI_REG.getAllSelected();
    const activeRawTags = new Set();
    rawSelectedList.forEach((item) => {
      smartSplit(item || "").forEach((p) => activeRawTags.add(p));
    });

    // NOTE: We intentionally rebuild output from scratch on every Generate to avoid
    // "sticky" / duplicated tags when toggling checkboxes.

    const finalTags = [];
    const processedCores = new Set();

    // compose beans + throwing (setsubun) into a single clean token
    const __composedActiveTags = __composeBeansThrow(Array.from(activeRawTags));

    __composedActiveTags.forEach((rawTag) => {
      const core = getCoreTag(rawTag);
      if (!processedCores.has(core)) {
        finalTags.push(rawTag);
        processedCores.add(core);
      }
    });

    let outText = finalTags.join(", ");
    if (typeof window.__shimaApplyHoodToText === "function") { outText = window.__shimaApplyHoodToText(outText); }

    
    outText = applySubjectAnchorOrdering(outText);

    if (OT && keepMode === "ja" && OT.enToJa) {
      const words = outText.split(/[,，、\n]+/).map((s) => s.trim()).filter(Boolean);
      outText = words
        .map((w) => {
          const core = w
            .replace(/[\(\{\[\]\}\)]/g, "")
            .replace(/:[\d\.]+(%?)/g, "")
            .trim()
            .toLowerCase();
          const ja = OT.enToJa[core];
          if (!ja) return w;
          return w.replace(
            new RegExp(core.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
            ja
          );
        })
        .join(", ");
    }

    
    // ---- Quality Booster (global post-process; replaces only "best quality") ----
    try {
      const mode = window.__QUALITY_MODE || "normal";
      if (mode !== "normal" && typeof outText === "string" && /best\s+quality/i.test(outText)) {
        const raw = outText.split(",");
        const tokens = [];
        const seen = {};
        let hasAbsurdres = false;
        let hasMasterpiece = false;

        for (let i = 0; i < raw.length; i++) {
          let t = (raw[i] || "").trim();
          if (!t) continue;

          if (/absurdres/i.test(t)) hasAbsurdres = true;
          if (/masterpiece/i.test(t)) hasMasterpiece = true;

          if (/best\s+quality/i.test(t)) {
            t = t.replace(/best\s+quality/gi, "highest quality");
          }

          if (/absurdres/i.test(t)) hasAbsurdres = true;
          if (/masterpiece/i.test(t)) hasMasterpiece = true;

          if (!seen[t]) {
            seen[t] = 1;
            tokens.push(t);
          }
        }

        if (mode === "extreme") {
          if (!hasAbsurdres) tokens.push("absurdres");
          if (!hasMasterpiece) tokens.unshift("masterpiece");
        }

        outText = tokens.join(", ");
      }
    } catch (e) {}
    // ---- /Quality Booster ----

    out.value = outText;
    out.dispatchEvent(new Event("input", { bubbles: true }));
    try { if (window.__applyHoodStateToOutput) window.__applyHoodStateToOutput(); } catch (e) {}


    setTimeout(() => {
      window.__isGenerating = false;
    }, 100);
  }

  function showLinkageToast(items, mode) {
    let toast = document.getElementById("linkage-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "linkage-toast";
      document.body.appendChild(toast);
    }
    const names = items.map((n) => `「${n}」`).join(" と ");
    const action = mode ? "ON" : "OFF";
    toast.textContent = `⚡ 連動機能: ${names} を${action}にしました`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  
  // ---- Commercial Mode Suggestion (for hobby/merch styles) ----
  const __COMMERCIAL_HINT_KEYWORDS = [
    "acrylic stand", "acrylic standee", "rubber strap", "keychain charm",
    "action figure", "figma", "nendoroid", "blind box", "gacha", "capsule toy",
    "blister", "retail packaging", "window box", "vinyl toy", "be@rbrick",
    "garage kit", "resin", "pin badge", "button badge", "acrylic", "strap merchandise"
  ];

  function __isCommercialHintStyle(cb){
    try{
      if(!cb || !cb.dataset) return false;
      const s = ((cb.dataset.en || cb.dataset.val || "") + " " + (cb.dataset.ja || "")).toLowerCase();
      return __COMMERCIAL_HINT_KEYWORDS.some(k => s.includes(k));
    }catch(_e){ return false; }
  }

  function __ensureCommercialToast(){
    let t = document.getElementById("commercial-suggest-toast");
    if(!t){
      t = document.createElement("div");
      t.id = "commercial-suggest-toast";
      document.body.appendChild(t);
    }
    return t;
  }

  function __hideCommercialToast(){
    const t = document.getElementById("commercial-suggest-toast");
    if(t) t.classList.remove("show");
  }

  
// --- Commercial Mode auto-apply tracking (for easy undo) ---
window.__COMMERCIAL_AUTO_CHECKED = window.__COMMERCIAL_AUTO_CHECKED || [];
window.__COMMERCIAL_AUTO_APPLIED = window.__COMMERCIAL_AUTO_APPLIED || false;
function undoCommercialDefaults(){
  try{
    const arr = window.__COMMERCIAL_AUTO_CHECKED || [];
    // Uncheck in reverse so dependent UI updates behave predictably
    for(let i=arr.length-1;i>=0;i--){
      const cb = arr[i];
      if(cb && cb.checked){
        cb.checked = false;
        cb.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
    window.__COMMERCIAL_AUTO_CHECKED = [];
    window.__COMMERCIAL_AUTO_APPLIED = false;
    // clear global hint flag
    window.__COMMERCIAL_MODE_AUTO = false;
    __setCommercialAutoGlow(false);
  }catch(e){}


function __setCommercialAutoGlow(on){
  try{
    const el = document.getElementById("qp-commercial-mode");
    if(!el) return;
    if(on) el.classList.add("qp-auto-glow");
    else el.classList.remove("qp-auto-glow");
  }catch(e){}
}

}
// Undo when the Commercial Mode master toggle is turned OFF
document.addEventListener('change', (e)=>{
  const t = e && e.target;
  if(!t || t.type !== 'checkbox') return;
  const en = (t.dataset && t.dataset.en) ? String(t.dataset.en) : '';
  const ja = (t.dataset && t.dataset.ja) ? String(t.dataset.ja) : '';
  const isCommercialToggle = /commercial\s*mode/i.test(en) || /商業|商品|コマーシャル|商用/.test(ja);
  if(isCommercialToggle && !t.checked && window.__COMMERCIAL_AUTO_APPLIED){
    undoCommercialDefaults();
  }
});
function applyCommercialDefaults(){
  window.__COMMERCIAL_AUTO_CHECKED = [];
  window.__COMMERCIAL_AUTO_APPLIED = true;

    // Set a small global flag so other parts can read it if needed
    window.__COMMERCIAL_MODE_AUTO = true;

    // Helper: check a checkbox that matches a predicate
    const all = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const checkFirst = (pred) => {
      const cb = all.find(pred);
      if(cb && !cb.checked){
        cb.checked = true;
        cb.dispatchEvent(new Event("change", { bubbles: true }));
        // track for undo (only what we toggled)
        try{ window.__COMMERCIAL_AUTO_CHECKED.push(cb); }catch(e){}
        return true;
      }
      return false;
    };

    // 1) product photography (prefer Quality Commercial Mode item if present)
    checkFirst(cb => /product\s+photography/i.test(cb.dataset.en || cb.dataset.val || ""));
    // 2) seamless white background (background section or commercial mode tag)
    checkFirst(cb => /(seamless\s+white|white\s+seamless|white\s+backdrop|white\s+studio)/i.test(cb.dataset.en || cb.dataset.val || ""));
    // 3) shadow under object / product shadow
    checkFirst(cb => /(shadow\s+under|realistic\s+shadow|product\s+shadow)/i.test(cb.dataset.en || cb.dataset.val || "") || /影/.test(cb.dataset.ja || ""));
    __setCommercialAutoGlow(true);
  }

  function showCommercialSuggestToast(styleName){
    const now = Date.now();
    if(window.__lastCommercialSuggestAt && (now - window.__lastCommercialSuggestAt) < 8000) return;
    window.__lastCommercialSuggestAt = now;

    const t = __ensureCommercialToast();
    const name = styleName ? `「${styleName}」` : "このスタイル";
    t.innerHTML = `
      🏪 ${name} は商品化向きです。<br/>
      商品レンダリング（白背景・シャドウ・product photography）を自動適用しますか？
      <div class="btnrow">
        <button class="primary" id="commercial-yes">YES（適用）</button>
        <button id="commercial-no">NO</button>
      </div>
    `;
    t.classList.add("show");

    const yes = t.querySelector("#commercial-yes");
    const no  = t.querySelector("#commercial-no");
    if(yes){
      yes.onclick = () => { __hideCommercialToast(); applyCommercialDefaults(); };
    }
    if(no){
      no.onclick = () => { __hideCommercialToast(); };
    }
  }


  function applyLinkage(checkbox) {
    const isChecked = checkbox.checked;
    if (!checkbox.dataset.links) return;

    const targets = checkbox.dataset.links.split(",");
    const allChecks = document.querySelectorAll('input[type="checkbox"]');
    const linkedItems = [];

    allChecks.forEach((target) => {
      if (target === checkbox) return;
      const tLabel = (target.parentElement.textContent || "").toLowerCase();

      let matched = false;
      for (const word of targets) {
        if (tLabel.includes(word.toLowerCase().trim())) {
          matched = true;
          break;
        }
      }

      if (matched && target.checked !== isChecked) {
        target.checked = isChecked;
        linkedItems.push(target.parentElement.textContent.trim());

        if (isChecked) {
          const details = target.closest("details");
          if (details) details.open = true;
          const parentLabel = target.parentElement;
          parentLabel.classList.remove("linked-flash");
          void parentLabel.offsetWidth;
          parentLabel.classList.add("linked-flash");
        }
      }
    });

    if (linkedItems.length > 0) showLinkageToast(linkedItems, isChecked);
  }

  function resetAll() {
    if (!confirm("全てリセットしますか？")) return;

    // Many extension panels update their visibility/state via checkbox
    // 'change' events (e.g. "生成内容の簡易可視化"). If we only flip
    // `checked=false`, those panels can remain visible/stale after reset.
    const allCheckboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
    allCheckboxes.forEach((el) => (el.checked = false));
    // Notify listeners after the state change.
    allCheckboxes.forEach((el) => el.dispatchEvent(new Event("change", { bubbles: true })));
    document.querySelectorAll("input[type='range']").forEach((el) => {
      el.value = 100;
      el.dispatchEvent(new Event("input"));
    });

    const searchBar = document.querySelector("#ui-search-bar input");
    if (searchBar) {
      searchBar.value = "";
      searchBar.dispatchEvent(new Event("input"));
    }

    const out = document.getElementById("out");
    if (out) {
      out.value = "";
      out.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (window.__outputTranslation) window.__outputTranslation.resetToEn();
  }

  function copyOutput() {
    const out = document.getElementById("out");
    if (!out) return;
    out.select();
    document.execCommand("copy");
  }


  function initFloater() {
    if (document.getElementById("active-category-floater")) return;

    const floater = document.createElement("div");
    floater.id = "active-category-floater";
    floater.innerHTML = `
      <div id="floater-btn">📚 目次 <span id="open-count" class="floater-count">0</span></div>
      <div id="floater-list">
        <div class="floater-header">
          <div class="floater-header-meta">
            <span>ショートカット目次</span>
            <small>使用中カテゴリー・小カテゴリ・項目名までここから飛べます</small>
          </div>
          <button class="close-all-btn">🗑️ 全て閉じる</button>
        </div>
        <div class="floater-tools">
          <div class="floater-search-row">
            <input id="floater-search" class="floater-search-input" type="search" placeholder="チェック済み項目を検索（カテゴリ / 小カテゴリ / 項目名）">
          </div>
          <div class="floater-sort-row">
            <span class="floater-sort-label">項目順:</span>
            <button type="button" class="floater-sort-btn active" data-sort-mode="added">追加順</button>
            <button type="button" class="floater-sort-btn" data-sort-mode="name">名前順</button>
            <span id="floater-search-meta" class="floater-search-meta"></span>
          </div>
        </div>
        <div class="floater-block">
          <div class="floater-block-title">
            <span>✅ 使用中のカテゴリー</span>
            <small>件数順 / 小カテゴリ / 項目名</small>
          </div>
          <div id="floater-checked-items"></div>
        </div>
        <div class="floater-divider"></div>
        <div class="floater-block">
          <div class="floater-block-title">
            <span>📚 全カテゴリー目次</span>
            <small>件数バッジ付き</small>
          </div>
          <div id="floater-items"></div>
        </div>
      </div>
    `;
    document.body.appendChild(floater);

    const floaterBtn = document.getElementById("floater-btn");
    const floaterList = document.getElementById("floater-list");
    const itemsContainer = document.getElementById("floater-items");
    const checkedItemsContainer = document.getElementById("floater-checked-items");
    const openCountSpan = document.getElementById("open-count");
    const closeAllBtn = floater.querySelector(".close-all-btn");
    const floaterSearch = document.getElementById("floater-search");
    const floaterSearchMeta = document.getElementById("floater-search-meta");
    const sortButtons = Array.from(floater.querySelectorAll(".floater-sort-btn"));

    let autoIdSeq = 0;
    let checkedStampSeq = 0;
    const FLOATER_STATE_KEY = "shima_builder_floater_state_v2";
    const defaultFloaterState = { sortMode: "added", search: "", subgroupOpen: {}, checkedOrder: {} };
    const loadFloaterState = () => {
      try {
        const raw = localStorage.getItem(FLOATER_STATE_KEY);
        if (!raw) return Object.assign({}, defaultFloaterState);
        const parsed = JSON.parse(raw);
        return {
          sortMode: parsed && parsed.sortMode === "name" ? "name" : "added",
          search: typeof parsed?.search === "string" ? parsed.search : "",
          subgroupOpen: parsed && parsed.subgroupOpen && typeof parsed.subgroupOpen === "object" ? parsed.subgroupOpen : {},
          checkedOrder: parsed && parsed.checkedOrder && typeof parsed.checkedOrder === "object" ? parsed.checkedOrder : {}
        };
      } catch (_) {
        return Object.assign({}, defaultFloaterState);
      }
    };
    const floaterState = loadFloaterState();
    let itemSortMode = floaterState.sortMode;
    const checkedStampMap = new WeakMap();
    const nextAutoId = (prefix) => `${prefix}-${++autoIdSeq}`;
    const persistFloaterState = () => {
      try {
        localStorage.setItem(FLOATER_STATE_KEY, JSON.stringify({
          sortMode: itemSortMode,
          search: floaterSearch ? floaterSearch.value : "",
          subgroupOpen: floaterState.subgroupOpen || {},
          checkedOrder: floaterState.checkedOrder || {}
        }));
      } catch (_) {}
    };

    const assignStableId = (el, prefix) => {
      if (!el) return "";
      if (!el.id) el.id = nextAutoId(prefix || "toc-node");
      return el.id;
    };

    const normalizeForSearch = (text) => String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
    const escapeHtml = (str) => String(str || "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    const escapeRegExp = (str) => String(str || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const highlightText = (text, query) => {
      const safe = escapeHtml(text || "");
      const normalized = normalizeForSearch(query);
      if (!normalized) return safe;
      const parts = normalized.split(" ").filter(Boolean);
      if (!parts.length) return safe;
      const pattern = new RegExp(`(${parts.map(escapeRegExp).join("|")})`, "ig");
      return safe.replace(pattern, '<mark class="floater-hit-mark">$1</mark>');
    };
    const setHighlightedText = (el, text, query, prefix) => {
      if (!el) return;
      el.innerHTML = `${escapeHtml(prefix || "")}${highlightText(text, query)}`;
    };

    const stampCheckedBox = (cb) => {
      if (!cb || !cb.checked) return;
      const det = cb.closest("details.accordion-wrap") || cb.closest("details");
      const persistKey = getCheckboxPersistKey(cb, det);
      if (floaterState.checkedOrder && persistKey && floaterState.checkedOrder[persistKey]) {
        checkedStampMap.set(cb, floaterState.checkedOrder[persistKey]);
        checkedStampSeq = Math.max(checkedStampSeq, floaterState.checkedOrder[persistKey]);
        return;
      }
      if (!checkedStampMap.has(cb)) {
        const next = ++checkedStampSeq;
        checkedStampMap.set(cb, next);
        if (persistKey) {
          floaterState.checkedOrder[persistKey] = next;
          persistFloaterState();
        }
      }
    };

    const getTopLevelSections = () =>
      Array.from(document.querySelectorAll("#sections > .section > details.accordion-wrap"));

    const getOpenDetails = () =>
      Array.from(document.querySelectorAll("details.qp-main-acc[open], details.accordion-wrap[open], details.subgroup[open], details.qp-sub-acc[open], details.subgroup-details[open]"));

    const getCheckedCount = (det) => {
      if (!det) return 0;
      return det.querySelectorAll('input[type="checkbox"]:checked').length;
    };

    const cleanTitle = (raw, fallback) =>
      String(raw || fallback || "カテゴリー")
        .replace(/[▶▼]/g, "")
        .replace(/🗑️\s*クリア/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const getSectionTitle = (det) => {
      const labelEl = det.querySelector(":scope > summary .section-summary-label");
      const summary = det.querySelector(":scope > summary");
      return cleanTitle(labelEl ? labelEl.textContent : summary ? summary.textContent : "カテゴリー", "カテゴリー");
    };

    const getDetailTitle = (detail, fallback) => {
      if (!detail) return fallback || "小カテゴリ";
      const summary = detail.querySelector(":scope > summary");
      return cleanTitle(summary ? summary.textContent : detail.dataset.sectionLabel || detail.getAttribute("aria-label") || fallback || "小カテゴリ", fallback || "小カテゴリ");
    };

    const getCheckboxLabel = (cb) => {
      if (!cb) return "";
      let label = "";
      if (cb.dataset && cb.dataset.label) label = cb.dataset.label;
      if (!label) {
        const host = cb.closest("label") || cb.parentElement;
        label = host ? host.textContent : "";
      }
      label = cleanTitle(label, (cb.dataset && (cb.dataset.ja || cb.dataset.en)) || cb.value || "項目");
      if (label.includes("/")) label = label.split("/")[0].trim();
      return label || (cb.dataset && (cb.dataset.ja || cb.dataset.en)) || cb.value || "項目";
    };

    const getItemTarget = (cb) => {
      const label = cb.closest("label");
      if (label) return label;
      if (cb.parentElement) return cb.parentElement;
      return cb;
    };
    const getCheckboxPersistKey = (cb, det) => {
      const sectionId = assignStableId(det || cb.closest("details.accordion-wrap") || cb.closest("details"), "toc-sec");
      const subgroupPath = [];
      let cur = cb.parentElement;
      while (cur && cur !== det) {
        if (cur.tagName === "DETAILS") subgroupPath.push(getDetailTitle(cur, "小カテゴリ"));
        cur = cur.parentElement;
      }
      subgroupPath.reverse();
      return [sectionId, subgroupPath.join(">"), getCheckboxLabel(cb), cb.value || ""].join("::");
    };

    const openAncestors = (node) => {
      let cur = node;
      while (cur && cur !== document.body) {
        if (cur.tagName === "DETAILS") cur.open = true;
        cur = cur.parentElement;
      }
    };

    const pulseTarget = (node) => {
      if (!node) return;
      node.classList.remove("toc-jump-highlight");
      void node.offsetWidth;
      node.classList.add("toc-jump-highlight");
      setTimeout(() => node.classList.remove("toc-jump-highlight"), 1600);
    };

    const scrollToNode = (node) => {
      if (!node) return;
      openAncestors(node);
      const target = node;
      const top = target.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      pulseTarget(target);
      floaterList.classList.remove("open");
      setTimeout(updateList, 80);
    };

    const createItemButton = (det, title, checkedCount, openedIds) => {
      const itemBtn = document.createElement("button");
      itemBtn.type = "button";
      itemBtn.className = "floater-item";
      itemBtn.dataset.targetId = det.id;
      if (openedIds.has(det.id)) itemBtn.classList.add("is-open");
      if (checkedCount > 0) itemBtn.classList.add("has-checks");

      const text = document.createElement("span");
      text.className = "floater-item-text";
      setHighlightedText(text, title, floaterSearch ? floaterSearch.value : "");

      const status = document.createElement("span");
      status.className = "floater-item-status";
      if (checkedCount > 0) {
        status.classList.add("has-checks");
        status.textContent = `${checkedCount}件`;
      } else {
        status.textContent = det.open ? "OPEN" : "GO";
      }

      itemBtn.appendChild(text);
      itemBtn.appendChild(status);
      itemBtn.addEventListener("click", () => scrollToNode(det));
      return itemBtn;
    };

    const buildCheckedSectionData = (det, title, checkedCount) => {
      const groups = new Map();

      Array.from(det.querySelectorAll('input[type="checkbox"]:checked')).forEach((cb, idx) => {
        const groupDetails = [];
        let cur = cb.parentElement;
        while (cur && cur !== det) {
          if (cur.tagName === "DETAILS") groupDetails.push(cur);
          cur = cur.parentElement;
        }
        groupDetails.reverse();

        const smallGroups = groupDetails.filter((x) => x && x !== det);
        const deepestGroup = smallGroups.length ? smallGroups[smallGroups.length - 1] : null;
        const subgroupTitle = smallGroups.length
          ? smallGroups.map((x) => getDetailTitle(x, "小カテゴリ")).filter(Boolean).join(" › ")
          : "このカテゴリー直下";

        const subgroupTarget = deepestGroup || det;
        const subgroupKey = smallGroups.length
          ? smallGroups.map((x) => assignStableId(x, "toc-sub")).join("|")
          : `root::${det.id}`;

        if (!groups.has(subgroupKey)) {
          groups.set(subgroupKey, {
            key: subgroupKey,
            title: subgroupTitle,
            count: 0,
            depth: smallGroups.length,
            target: subgroupTarget,
            items: []
          });
        }

        const entry = groups.get(subgroupKey);
        entry.count += 1;

        const itemTarget = getItemTarget(cb);
        assignStableId(itemTarget, "toc-item");

        stampCheckedBox(cb);
        const persistKey = getCheckboxPersistKey(cb, det);
        entry.items.push({
          label: getCheckboxLabel(cb),
          target: itemTarget,
          sortIndex: idx,
          addedAt: checkedStampMap.get(cb) || (floaterState.checkedOrder && floaterState.checkedOrder[persistKey]) || idx,
          persistKey,
          searchText: normalizeForSearch(`${title} ${subgroupTitle} ${getCheckboxLabel(cb)}`)
        });
      });

      const grouped = Array.from(groups.values()).map((group) => {
        const seen = new Set();
        group.items = group.items
          .filter((item) => {
            const key = `${item.label}::${assignStableId(item.target, "toc-item")}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
        group.searchText = normalizeForSearch(`${title} ${group.title} ${group.items.map((x) => x.label).join(" ")}`);
        return group;
      });

      grouped.sort((a, b) => b.count - a.count || a.depth - b.depth || a.title.localeCompare(b.title, "ja"));

      return { det, title, checkedCount, groups: grouped };
    };

    const createSubgroupButton = (group, detailsEl) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "floater-subgroup-btn";

      const text = document.createElement("span");
      text.className = "floater-subgroup-text";
      setHighlightedText(text, group.title, floaterSearch ? floaterSearch.value : "", "↳ ");

      const status = document.createElement("span");
      status.className = "floater-subgroup-status";
      status.textContent = `${group.count}件`;

      const caret = document.createElement("span");
      caret.className = "floater-subgroup-caret";
      caret.textContent = detailsEl && detailsEl.open ? "▾" : "▸";

      btn.appendChild(text);
      btn.appendChild(status);
      btn.appendChild(caret);
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (detailsEl) {
          detailsEl.open = !detailsEl.open;
          caret.textContent = detailsEl.open ? "▾" : "▸";
        }
      });
      btn.addEventListener("dblclick", (e) => {
        e.preventDefault();
        scrollToNode(group.target);
      });
      return btn;
    };

    const createLeafButton = (item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "floater-leaf-btn";

      const text = document.createElement("span");
      text.className = "floater-leaf-text";
      setHighlightedText(text, item.label, floaterSearch ? floaterSearch.value : "", "・");

      const icon = document.createElement("span");
      icon.className = "floater-leaf-icon";
      icon.textContent = "GO";

      btn.appendChild(text);
      btn.appendChild(icon);
      btn.addEventListener("click", () => scrollToNode(item.target));
      return btn;
    };

    const getSubgroupPersistKey = (sectionData, group) => `${sectionData.det.id}::${group.key}`;

    const createCheckedSectionCard = (sectionData, openedIds) => {
      const card = document.createElement("div");
      card.className = "floater-checked-card";
      card.appendChild(createItemButton(sectionData.det, sectionData.title, sectionData.checkedCount, openedIds));

      const subtree = document.createElement("div");
      subtree.className = "floater-subtree";

      sectionData.groups.forEach((group) => {
        const subgroupDetails = document.createElement("details");
        subgroupDetails.className = "floater-subgroup-details";
        const subgroupPersistKey = getSubgroupPersistKey(sectionData, group);
        const savedOpen = Object.prototype.hasOwnProperty.call(floaterState.subgroupOpen || {}, subgroupPersistKey)
          ? !!floaterState.subgroupOpen[subgroupPersistKey]
          : null;
        subgroupDetails.open = savedOpen !== null ? savedOpen : (sectionData.groups.length <= 2 || group.count >= 2);
        const summary = document.createElement("summary");
        summary.appendChild(createSubgroupButton(group, subgroupDetails));
        subgroupDetails.appendChild(summary);
        subgroupDetails.addEventListener("toggle", () => {
          floaterState.subgroupOpen[subgroupPersistKey] = !!subgroupDetails.open;
          persistFloaterState();
        });

        const itemList = document.createElement("div");
        itemList.className = "floater-leaf-list";
        group.items.forEach((item) => itemList.appendChild(createLeafButton(item)));
        subgroupDetails.appendChild(itemList);
        subtree.appendChild(subgroupDetails);
      });

      card.appendChild(subtree);
      return card;
    };

    const updateActiveMarker = () => {
      const sections = getTopLevelSections();
      if (!sections.length) return;

      let activeId = "";
      let bestScore = Number.POSITIVE_INFINITY;
      sections.forEach((det) => {
        const rect = det.getBoundingClientRect();
        if (rect.bottom < 80) return;
        const score = Math.abs(rect.top - 110);
        if (score < bestScore) {
          bestScore = score;
          activeId = det.id;
        }
      });

      floater
        .querySelectorAll(".floater-item[data-target-id]")
        .forEach((btn) => btn.classList.toggle("active", btn.dataset.targetId === activeId));
    };

    const updateList = () => {
      const openedIds = new Set(getOpenDetails().map((det) => det.id).filter(Boolean));
      const sections = getTopLevelSections();
      const checkedSections = [];
      let totalCheckedCount = 0;
      const query = normalizeForSearch(floaterSearch ? floaterSearch.value : "");

      floaterBtn.classList.add("show");
      itemsContainer.innerHTML = "";
      checkedItemsContainer.innerHTML = "";

      sections.forEach((det, idx) => {
        if (!det.id) det.id = `toc-auto-${idx + 1}`;

        const title = getSectionTitle(det);
        const checkedCount = getCheckedCount(det);
        totalCheckedCount += checkedCount;

        itemsContainer.appendChild(createItemButton(det, title, checkedCount, openedIds));
        if (checkedCount > 0) checkedSections.push(buildCheckedSectionData(det, title, checkedCount));
      });

      checkedSections.forEach((sectionData) => {
        sectionData.groups = sectionData.groups
          .map((group) => {
            let items = group.items.slice();
            if (itemSortMode === "name") {
              items.sort((a, b) => a.label.localeCompare(b.label, "ja") || a.addedAt - b.addedAt);
            } else {
              items.sort((a, b) => a.addedAt - b.addedAt || a.sortIndex - b.sortIndex);
            }
            if (query) items = items.filter((item) => item.searchText.includes(query));
            return Object.assign({}, group, {
              items,
              count: items.length,
              searchText: group.searchText
            });
          })
          .filter((group) => group.count > 0 && (!query || group.searchText.includes(query) || group.items.length > 0));
        sectionData.checkedCount = sectionData.groups.reduce((sum, group) => sum + group.count, 0);
      });

      let filteredCheckedSections = checkedSections.filter((sectionData) => {
        const sectionText = normalizeForSearch(`${sectionData.title} ${sectionData.groups.map((x) => x.title).join(" ")}`);
        return sectionData.checkedCount > 0 && (!query || sectionText.includes(query) || sectionData.groups.length > 0);
      });

      filteredCheckedSections.sort((a, b) => b.checkedCount - a.checkedCount || a.title.localeCompare(b.title, "ja"));

      openCountSpan.textContent = filteredCheckedSections.length;
      floaterBtn.title = filteredCheckedSections.length
        ? `チェック済みカテゴリー: ${filteredCheckedSections.length} / チェック数: ${totalCheckedCount}`
        : "チェック済みカテゴリーはまだありません";
      if (floaterSearchMeta) {
        floaterSearchMeta.textContent = query
          ? `${filteredCheckedSections.length}カテゴリ / ${filteredCheckedSections.reduce((sum, sec) => sum + sec.checkedCount, 0)}件ヒット`
          : `全${checkedSections.length}カテゴリ / ${totalCheckedCount}件`;
      }

      if (filteredCheckedSections.length) {
        filteredCheckedSections.forEach((sectionData) => {
          checkedItemsContainer.appendChild(createCheckedSectionCard(sectionData, openedIds));
        });
      } else {
        const empty = document.createElement("div");
        empty.className = "floater-empty";
        empty.textContent = query
          ? "検索に一致するチェック済み項目がありません。"
          : "まだチェックはありません。選択が入ると、ここに件数順のショートカットが並びます。";
        checkedItemsContainer.appendChild(empty);
      }

      if (!sections.length) {
        const empty = document.createElement("div");
        empty.className = "floater-empty";
        empty.textContent = "カテゴリーを読み込み中です…";
        itemsContainer.appendChild(empty);
      }

      updateActiveMarker();
    };

    const sectionsRoot = document.getElementById("sections");
    if (sectionsRoot) {
      sectionsRoot.addEventListener(
        "toggle",
        (e) => {
          if (
            e.target.tagName === "DETAILS" &&
            (e.target.classList.contains("qp-main-acc") ||
              e.target.classList.contains("accordion-wrap") ||
              e.target.classList.contains("subgroup") ||
              e.target.classList.contains("qp-sub-acc") ||
              e.target.classList.contains("subgroup-details"))
          ) {
            setTimeout(updateList, 50);
          }
        },
        true
      );

      sectionsRoot.addEventListener(
        "change",
        (e) => {
          if (e.target && e.target.matches && e.target.matches('input[type="checkbox"]')) {
            if (e.target.checked) stampCheckedBox(e.target);
            setTimeout(updateList, 20);
          }
        },
        true
      );
    }

    floaterBtn.addEventListener("click", () => {
      floaterList.classList.toggle("open");
      if (floaterList.classList.contains("open")) updateList();
    });

    if (floaterSearch) {
      floaterSearch.value = floaterState.search || "";
      floaterSearch.addEventListener("input", () => {
        persistFloaterState();
        updateList();
      });
    }
    sortButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        itemSortMode = btn.dataset.sortMode || "added";
        sortButtons.forEach((x) => x.classList.toggle("active", x === btn));
        persistFloaterState();
        updateList();
      });
    });

    closeAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const sectionsRootEl = document.getElementById("sections");
      if (sectionsRootEl) {
        Array.from(sectionsRootEl.querySelectorAll("details[open]"))
          .sort((a, b) => b.querySelectorAll("details").length - a.querySelectorAll("details").length)
          .forEach((det) => det.removeAttribute("open"));
      }

      floater.querySelectorAll("details.subgroup-details[open]").forEach((det) => det.removeAttribute("open"));
      if (floaterState && floaterState.subgroupOpen && typeof floaterState.subgroupOpen === "object") {
        Object.keys(floaterState.subgroupOpen).forEach((key) => {
          floaterState.subgroupOpen[key] = false;
        });
        persistFloaterState();
      }

      setTimeout(updateList, 30);
    });

    document.addEventListener("click", (e) => {
      if (!floater.contains(e.target)) floaterList.classList.remove("open");
    });

    window.addEventListener("scroll", () => updateActiveMarker(), { passive: true });
    window.addEventListener("resize", () => updateActiveMarker());
    window.addEventListener("promptPartMounted", () => setTimeout(updateList, 60));
    window.addEventListener("beforeunload", () => {});

    sortButtons.forEach((x) => x.classList.toggle("active", (x.dataset.sortMode || "added") === itemSortMode));
    setTimeout(updateList, 500);
  }


  function init() {
    if (!document.getElementById("builder-core-style")) {
      const style = document.createElement("style");
      style.id = "builder-core-style";
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    const genBtn = document.getElementById("genBtn");
    if (genBtn) {
      const container = genBtn.parentElement;
      container.classList.add("builder-footer-grid");
      genBtn.addEventListener("click", generateOutput);

      const copyBtn = document.getElementById("copyBtn");
      if (copyBtn) copyBtn.addEventListener("click", copyOutput);

      const resetBtn = document.getElementById("resetBtn");
      if (resetBtn) resetBtn.addEventListener("click", resetAll);

      const transBtn = document.getElementById("translateBtn");
      if (transBtn) {
        transBtn.addEventListener("click", () => window.__outputTranslation.toggle());
      }
    }

    const sectionsRoot = document.getElementById("sections");
    if (sectionsRoot) {
      if (!sectionsRoot.__coreChangeBound) {
        sectionsRoot.__coreChangeBound = true;
        sectionsRoot.addEventListener("change", (e) => {
          if (e.target.matches('input[type="checkbox"]')) {
            applyLinkage(e.target);
            // Suggest Commercial Mode when hobby/merch style is turned ON
            if (e.target.checked && __isCommercialHintStyle(e.target)) {
              showCommercialSuggestToast(e.target.dataset.ja || e.target.dataset.en || "");
            }

            // If the style that triggered Commercial AUTO is turned OFF, and no other
            // "commercial-hint" styles remain selected, undo the AUTO-applied checkboxes.
            // This fixes the confusion where users uncheck the original style and expect
            // the auto-applied commercial tags (white seamless/shadow/product photo) to vanish.
            if (!e.target.checked && __isCommercialHintStyle(e.target) && window.__COMMERCIAL_AUTO_APPLIED) {
              const anyHintStillOn = Array.from(
                sectionsRoot.querySelectorAll("input[type=\"checkbox\"]:checked")
              ).some((cb) => __isCommercialHintStyle(cb));
              if (!anyHintStillOn) {
                undoCommercialDefaults();
              }
            }
          }
        });
      }
    }

    initFloater();

    if (!document.getElementById("core-loaded-toast")) {
      const toast = document.createElement("div");
      toast.id = "core-loaded-toast";
      toast.style.cssText =
        "position:fixed; bottom:10px; left:10px; z-index:99999; background:rgba(0,0,0,0.65); color:#fff; padding:8px 12px; border-radius:10px; font-size:12px;";
      toast.textContent = "CORE LOADED: SAFE (double-load protected)";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    }
  }

  if (!window.__outputTranslation) {
    window.__outputTranslation = {
      mode: "en",
      enToJa: {},
      jaToEn: {},

      register(dict) {
        Object.entries(dict).forEach(([enKeys, jaVal]) => {
          if (!enKeys || !jaVal) return;
          const enKeyList = enKeys.split(/,\s*/).filter(Boolean);
          enKeyList.forEach((key) => {
            this.enToJa[key.toLowerCase().trim()] = jaVal;
          });
          const mainEnKey = enKeyList[0];
          if (!mainEnKey) return;

          const normJaFull = this.normalize(jaVal);
          if (!this.jaToEn[normJaFull]) this.jaToEn[normJaFull] = mainEnKey;

          const shortJa = jaVal.replace(/[（\(].*?[）\)]/g, "").trim();
          const normJaShort = this.normalize(shortJa);
          if (normJaShort && normJaShort !== normJaFull && !this.jaToEn[normJaShort]) {
            this.jaToEn[normJaShort] = mainEnKey;
          }
        });
      },

      registerReverse(dict) {
        Object.entries(dict).forEach(([jaKey, enVal]) => {
          if (!jaKey || !enVal) return;
          const normJa = this.normalize(jaKey);
          this.jaToEn[normJa] = enVal;
        });
      },

      resetToEn() {
        this.mode = "en";
        const btn = document.getElementById("translateBtn");
        if (btn) btn.textContent = "日本語表示";
      },

      normalize(str) {
        return str
          .replace(/[\(\{\[\]\}\)]/g, "")
          .replace(/[（）【】［］｛｝]/g, "")
          .replace(/:[\d\.]+(%?)/g, "")
          .replace(/[^a-zA-Z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, "")
          .toLowerCase();
      },

      fixExtraClosers(str) {
        const trimOne = (s, openCh, closeCh) => {
          const open = (s.match(new RegExp(`\\${openCh}`, "g")) || []).length;
          const close = (s.match(new RegExp(`\\${closeCh}`, "g")) || []).length;
          let extra = close - open;
          while (extra > 0 && s.endsWith(closeCh)) {
            s = s.slice(0, -1);
            extra--;
          }
          return s;
        };
        return str
          .split(/,\s*/)
          .map((w) => {
            let s = w;
            s = trimOne(s, "(", ")");
            s = trimOne(s, "{", "}");
            s = trimOne(s, "[", "]");
            return s;
          })
          .join(", ");
      },

      toggle() {
        const outEl = document.getElementById("out");
        const btn = document.getElementById("translateBtn");
        if (!outEl) return;

        const current = outEl.value;
        if (!current.trim()) return;

        const words = current.split(/[,，、\n]+/).map((s) => s.trim()).filter(Boolean);
        let newText;

        if (this.mode === "en") {
          newText = words
            .map((w) => {
              const core = w
                .replace(/[\(\{\[\]\}\)]/g, "")
                .replace(/:[\d\.]+(%?)/g, "")
                .trim()
                .toLowerCase();
              const ja = this.enToJa[core];
              if (ja) return w.replace(new RegExp(core.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), ja);
              return w;
            })
            .join(", ");
          this.mode = "ja";
          if (btn) btn.textContent = "英語表示";
        } else {
          newText = words
            .map((w) => {
              let s = w;
              let prefix = "";
              while (
                s.startsWith("(") ||
                s.startsWith("（") ||
                s.startsWith("{") ||
                s.startsWith("｛") ||
                s.startsWith("[") ||
                s.startsWith("［")
              ) {
                prefix += s[0];
                s = s.slice(1);
              }
              let suffix = "";
              while (
                s.endsWith(")") ||
                s.endsWith("）") ||
                s.endsWith("}") ||
                s.endsWith("｝") ||
                s.endsWith("]") ||
                s.endsWith("］")
              ) {
                suffix = s.slice(-1) + suffix;
                s = s.slice(0, -1);
              }
              let weight = "";
              const m = s.match(/(:[\d\.]+%?)$/);
              if (m) {
                weight = m[1];
                s = s.slice(0, -weight.length);
              }
              const key = this.normalize(s);
              const en = this.jaToEn[key];
              if (en) return prefix + en + weight + suffix;
              return w;
            })
            .join(", ");
          this.mode = "en";
          if (btn) btn.textContent = "日本語表示";
        }

        newText = this.fixExtraClosers(newText);
        outEl.value = newText;
      },
    };
  }

  if (!isAlreadyBooted) {
    window[CORE_SENTINEL] = { bootedAt: Date.now() };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
      init();
    }
  } else {
    try { init(); } catch (e) {}
  }
})();
