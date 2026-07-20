(function(){
  "use strict";

  const VERSION = 34;
  const KEY = "attire";
  const STYLE_ID = "shima-attire-akashic-v1-style";
  const SOURCE_CLASS = "attire-v34-akashic-source";
  const CHECKBOX_CLASS = "attire-v34-checkbox";
  const PENDING_ATTR = "akashicPending";
  const lazyState = {
    bound: false,
    materializedCards: 0,
    notifyTimer: 0
  };

  function contentRoot(container){
    const host = document.querySelector("#list-attire") || container;
    if (!host) return null;
    return host.querySelector(".section-content") || host;
  }

  function normalize(value){
    return String(value || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[\s\u3000]+/g, " ")
      .replace(/\s*,\s*/g, ",")
      .trim();
  }

  function promptOf(input){
    if (!input) return "";
    const value = input.dataset.en || input.dataset.val || input.dataset.tags || "";
    if (value) return String(value);
    return input.value && input.value !== "on" ? String(input.value) : "";
  }

  function existingIndex(root){
    const prompts = new Set();
    const ids = new Set();
    root.querySelectorAll("input[type='checkbox']").forEach(function(input){
      if (input.id) ids.add(input.id);
      const prompt = normalize(promptOf(input));
      if (prompt) prompts.add(prompt);
    });
    return { prompts: prompts, ids: ids };
  }

  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
.attire-v34-category, .attire-v34-category * { box-sizing:border-box; }
.attire-v34-category { display:block; width:100%; max-width:100%; border:1px solid rgba(111,159,173,.28); border-radius:12px; overflow:hidden; background:rgba(255,255,255,.82); }
.attire-v34-summary { display:flex !important; align-items:center; gap:9px; width:100%; min-width:0; padding:10px 11px !important; list-style:none; cursor:pointer; color:#254d57 !important; background:linear-gradient(135deg, rgba(244,252,253,.98), rgba(231,248,242,.92)) !important; }
.attire-v34-summary::-webkit-details-marker { display:none; }
.attire-v34-summary::before { content:"▶"; flex:0 0 auto; color:#6599a4; }
.attire-v34-category[open] > .attire-v34-summary::before { transform:rotate(90deg); }
.attire-v34-heading { flex:1 1 auto; min-width:0; }
.attire-v34-title { display:block; font-size:14px; line-height:1.35; font-weight:850; overflow-wrap:anywhere; word-break:normal; }
.attire-v34-note { display:block; margin-top:2px; color:#6c858c; font-size:11px; line-height:1.4; font-weight:600; overflow-wrap:anywhere; word-break:normal; }
.attire-v34-count { flex:0 0 auto; min-width:34px; padding:4px 8px; border-radius:999px; color:#376c75; background:rgba(201,237,232,.76); text-align:center; font-size:11px; font-weight:850; }
.attire-v34-grid { display:grid !important; grid-template-columns:repeat(2,minmax(0,1fr)) !important; gap:7px; width:100%; min-width:0; padding:8px; }
.attire-v34-card { display:grid !important; grid-template-columns:34px minmax(0,1fr) auto !important; grid-template-rows:auto auto; align-items:center; gap:3px 8px; width:100% !important; min-width:0 !important; min-height:68px; margin:0 !important; padding:9px !important; border:1px solid rgba(118,158,170,.27); border-radius:11px; background:rgba(255,255,255,.94); color:#24444d !important; cursor:pointer; }
.attire-v34-card:hover { border-color:rgba(70,158,151,.58); background:#fbffff; }
.attire-v34-card:has(input:checked) { border-color:rgba(50,155,143,.72); background:linear-gradient(135deg, rgba(237,253,249,.98), rgba(247,253,255,.98)); box-shadow:0 0 0 1px rgba(84,190,177,.14) inset; }
.attire-v34-card > input[type='checkbox'] { grid-column:1; grid-row:1 / 3; width:24px !important; height:24px !important; margin:0 auto !important; accent-color:#3cae9e; }
.attire-v34-name { grid-column:2; grid-row:1; min-width:0; color:#214750; font-size:13px; line-height:1.32; font-weight:850; overflow-wrap:anywhere; word-break:normal; }
.attire-v34-prompt { grid-column:2; grid-row:2; min-width:0; color:#70858b; font:10px/1.35 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; overflow-wrap:anywhere; word-break:normal; }
.attire-v34-badge { grid-column:3; grid-row:1; align-self:start; padding:3px 7px; border-radius:999px; background:#edf7fb; color:#557985; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v34-card > .zero-favorite-star { grid-column:3; grid-row:2; justify-self:end; align-self:end; margin-left:0 !important; }
.attire-v34-card[data-akashic-group='quick'] .attire-v34-badge { background:#fff3d8; color:#8b6725; }
@media (max-width:760px) {
  .attire-v34-grid { grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important; padding:7px !important; }
  .attire-v34-grid > * { width:100% !important; max-width:100% !important; min-width:0 !important; }
  .attire-v34-card { grid-template-columns:34px minmax(0,1fr) auto !important; }
  .attire-v34-title, .attire-v34-name, .attire-v34-note { writing-mode:horizontal-tb !important; text-orientation:mixed !important; }
}
`;
    document.head.appendChild(style);
  }

  function makePendingInput(groupKey, categoryKey, item, index, state){
    const slug = String(item[0] || (categoryKey + "-" + index)).replace(/[^a-z0-9_-]+/gi, "-");
    const name = String(item[1] || slug);
    const prompt = String(item[2] || "").trim();
    const id = "attire-akashic-" + groupKey + "-" + categoryKey + "-" + slug;
    const normalizedPrompt = normalize(prompt);

    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ group: groupKey, category: categoryKey, name: name, prompt: prompt, reason: "prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ group: groupKey, category: categoryKey, name: name, prompt: prompt, reason: "id" });
      return null;
    }

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.akashicId = groupKey + "/" + categoryKey + "/" + slug;
    input.dataset.akashicName = name;
    input.dataset.akashicGroup = groupKey;
    input.dataset.akashicCategory = categoryKey;
    input.dataset[PENDING_ATTR] = "1";
    input.hidden = true;
    input.setAttribute("aria-hidden", "true");

    state.index.prompts.add(normalizedPrompt);
    state.index.ids.add(id);
    state.added += 1;
    state.byGroup[groupKey] = (state.byGroup[groupKey] || 0) + 1;
    return input;
  }

  function cardForInput(input){
    if (!input) return null;
    const groupKey = String(input.dataset.akashicGroup || "");
    const categoryKey = String(input.dataset.akashicCategory || "");
    const name = String(input.dataset.ja || input.dataset.akashicName || input.id || "");
    const prompt = String(input.dataset.en || input.value || "");

    const label = document.createElement("label");
    label.className = "attire-v34-card";
    label.dataset.akashicGroup = groupKey;
    label.dataset.akashicCategory = categoryKey;

    input.hidden = false;
    input.removeAttribute("aria-hidden");
    delete input.dataset[PENDING_ATTR];

    const title = document.createElement("span");
    title.className = "attire-v34-name";
    title.textContent = name;

    const promptText = document.createElement("span");
    promptText.className = "attire-v34-prompt";
    promptText.textContent = prompt;

    const badge = document.createElement("span");
    badge.className = "attire-v34-badge";
    badge.textContent = groupKey === "quick" ? "SET · POS" : "POS";

    label.appendChild(input);
    label.appendChild(title);
    label.appendChild(promptText);
    label.appendChild(badge);
    return label;
  }

  function notifyMaterialized(count){
    if (!count) return;
    clearTimeout(lazyState.notifyTimer);
    lazyState.notifyTimer = setTimeout(function(){
      try{
        if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") {
          window.ShimaChannelSearch.invalidate();
        }
      }catch(_){}
      try{
        if (window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh();
      }catch(_){}
      try{
        window.dispatchEvent(new CustomEvent("shimaAttireAkashicMaterialized", { detail: { count: count } }));
      }catch(_){}
    }, 0);
  }

  function materializeCategory(details){
    if (!details || details.dataset.akashicMaterialized === "1") return 0;
    const grid = details.querySelector(":scope > .attire-v34-grid");
    if (!grid) return 0;
    const pending = Array.from(grid.children || []).filter(function(node){
      return node && node.matches && node.matches("input." + CHECKBOX_CLASS) && node.dataset[PENDING_ATTR] === "1";
    });
    if (!pending.length) {
      details.dataset.akashicMaterialized = "1";
      return 0;
    }

    const fragment = document.createDocumentFragment();
    pending.forEach(function(input){
      const card = cardForInput(input);
      if (card) fragment.appendChild(card);
    });
    grid.appendChild(fragment);
    details.dataset.akashicMaterialized = "1";
    lazyState.materializedCards += pending.length;

    const report = window.__SHIMA_ATTIRE_AKASHIC_V1__ && window.__SHIMA_ATTIRE_AKASHIC_V1__.lastReport;
    if (report) {
      report.materialized = lazyState.materializedCards;
      report.pending = Math.max(0, report.added - report.materialized);
    }
    notifyMaterialized(pending.length);
    return pending.length;
  }

  function ensureCheckbox(inputOrId){
    const input = typeof inputOrId === "string" ? document.getElementById(inputOrId) : inputOrId;
    if (!input || !input.classList || !input.classList.contains(CHECKBOX_CLASS)) return false;
    const details = input.closest("details.attire-v34-category");
    if (details) materializeCategory(details);
    return !!input.closest("label.attire-v34-card");
  }

  function materializeMatching(term){
    const needle = normalize(term);
    if (!needle) return 0;
    let count = 0;
    document.querySelectorAll("details.attire-v34-category:not([data-akashic-materialized='1'])").forEach(function(details){
      const matched = Array.from(details.querySelectorAll("input." + CHECKBOX_CLASS + "[data-akashic-pending='1']")).some(function(input){
        return normalize((input.dataset.ja || "") + " " + (input.dataset.en || "")).includes(needle);
      });
      if (matched) count += materializeCategory(details);
    });
    return count;
  }

  function materializeSelected(){
    let count = 0;
    document.querySelectorAll("input." + CHECKBOX_CLASS + ":checked").forEach(function(input){
      if (input.dataset[PENDING_ATTR] === "1" && ensureCheckbox(input)) count += 1;
    });
    return count;
  }

  function materializeFavorites(){
    let saved = [];
    try{ saved = JSON.parse(localStorage.getItem("shimaBuilderV5.zeroAssist.favorites.v1") || "[]"); }
    catch(_){ saved = []; }
    let count = 0;
    (Array.isArray(saved) ? saved : []).forEach(function(key){
      const marker = "|id:";
      const at = String(key || "").indexOf(marker);
      if (at < 0) return;
      const input = document.getElementById(String(key).slice(at + marker.length));
      if (input && input.dataset[PENDING_ATTR] === "1" && ensureCheckbox(input)) count += 1;
    });
    return count;
  }

  function materializeAll(){
    let count = 0;
    document.querySelectorAll("details.attire-v34-category:not([data-akashic-materialized='1'])").forEach(function(details){
      count += materializeCategory(details);
    });
    return count;
  }

  function bindLazyEvents(){
    if (lazyState.bound) return;
    lazyState.bound = true;

    document.addEventListener("input", function(event){
      if (event.target && event.target.matches && event.target.matches("#ui-search-bar input")) {
        materializeMatching(event.target.value || "");
      }
    }, true);

    document.addEventListener("click", function(event){
      const target = event.target && event.target.closest ? event.target : null;
      if (!target) return;
      if (target.closest("#zero-selected-filter")) materializeSelected();
      if (target.closest("#zero-favorites-filter")) materializeFavorites();
      const jump = target.closest('[data-zero-action="jump"]');
      const chip = jump && jump.closest(".zero-selection-chip");
      const key = chip && chip.dataset ? String(chip.dataset.zeroCheckboxKey || "") : "";
      const marker = "|id:";
      const at = key.indexOf(marker);
      if (at >= 0) ensureCheckbox(key.slice(at + marker.length));
    }, true);
  }

  function makeCategory(groupKey, category, state){
    const details = document.createElement("details");
    details.className = "attire-v34-category";
    details.dataset.akashicCategory = category.key;
    details.dataset.akashicMaterialized = "0";
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v34-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v34-heading";
    const title = document.createElement("span");
    title.className = "attire-v34-title";
    title.textContent = category.title;
    const note = document.createElement("span");
    note.className = "attire-v34-note";
    note.textContent = category.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v34-count";

    const grid = document.createElement("div");
    grid.className = "attire-v34-grid";
    (category.items || []).forEach(function(item, index){
      const input = makePendingInput(groupKey, category.key, item, index, state);
      if (input) grid.appendChild(input);
    });
    count.textContent = String(grid.querySelectorAll("input[type='checkbox']").length);
    summary.appendChild(heading);
    summary.appendChild(count);
    details.appendChild(summary);
    details.appendChild(grid);
    details.addEventListener("toggle", function(){
      if (details.open) materializeCategory(details);
    });
    return grid.children.length ? details : null;
  }

  function render(container){
    const root = contentRoot(container);
    const data = window.SHIMA_ATTIRE_AKASHIC_V1;
    if (!root || !data || !Array.isArray(data.groups)) return null;
    if (root.querySelector("." + CHECKBOX_CLASS)) return window.__SHIMA_ATTIRE_AKASHIC_V1__.lastReport;

    injectStyle();
    bindLazyEvents();
    lazyState.materializedCards = 0;
    const state = {
      candidates: 0,
      added: 0,
      skippedPrompt: 0,
      skippedId: 0,
      skippedItems: [],
      byGroup: {},
      index: existingIndex(root)
    };

    data.groups.forEach(function(group){
      const source = document.createElement("div");
      source.className = SOURCE_CLASS + " attire-v34-" + group.key;
      source.dataset.akashicGroup = group.key;
      (group.categories || []).forEach(function(category){
        const details = makeCategory(group.key, category, state);
        if (details) source.appendChild(details);
      });
      if (source.children.length) root.appendChild(source);
    });

    const report = {
      version: data.version || "1.0.0",
      candidates: state.candidates,
      added: state.added,
      skippedPrompt: state.skippedPrompt,
      skippedId: state.skippedId,
      skippedItems: state.skippedItems,
      byGroup: state.byGroup,
      lazy: true,
      materialized: 0,
      pending: state.added
    };
    window.__SHIMA_ATTIRE_AKASHIC_V1__.lastReport = report;
    setTimeout(function(){
      try{
        if (window.__SHIMA_ATTIRE_CATALOG_V1__ && typeof window.__SHIMA_ATTIRE_CATALOG_V1__.organize === "function") {
          window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container);
        }
      }catch(_){}
    }, 0);
    return report;
  }

  const API = {
    initUI(container){ render(container); },
    getTags(){
      return Array.from(document.querySelectorAll("input." + CHECKBOX_CLASS + ":checked"))
        .map(function(input){ return String(input.dataset.en || "").trim(); })
        .filter(Boolean);
    }
  };

  window.__SHIMA_ATTIRE_AKASHIC_V1__ = {
    version: "2.0.0",
    render: render,
    ensureCheckbox: ensureCheckbox,
    materializeCategory: materializeCategory,
    materializeMatching: materializeMatching,
    materializeSelected: materializeSelected,
    materializeFavorites: materializeFavorites,
    materializeAll: materializeAll,
    lastReport: null
  };

  function register(retry){
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      setTimeout(function(){
        try{ if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }
        catch(_){}
      }, 20);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ register((retry || 0) + 1); }, 100);
  }

  register(0);
  console.log("👗 Loaded: ./ext_attire_akashic.v1.js v2.0.0 lazy cards");
})();
