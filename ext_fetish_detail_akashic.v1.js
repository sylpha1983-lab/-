(function(){
  "use strict";

  const NORMAL_VERSION = 502;
  const ADULT_VERSION = 504;
  const KEY = "attire";
  const STYLE_ID = "shima-fetish-detail-v51-style";
  const NORMAL_CLASS = "shima-v51-fetish-detail";
  const ADULT_CLASS = "shima-v51-adult-fetish-detail";
  const ADULT_CHECKBOX_CLASS = "shima-v51-adult-fetish-checkbox";
  const ADULT_PENDING_ATTR = "adultFetishPending";
  const LEGACY_QUICK_CATEGORIES = new Set(["evening-reveal","gloss-harness","sheer-veil-stockings","disheveled-formal"]);
  const adultLazyState = { bound:false,materializedCards:0,notifyTimer:0 };

  function safeId(value){
    return String(value || "").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"") || "item";
  }

  function normalize(value){
    return String(value || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[\s\u3000]+/g," ")
      .replace(/\s*,\s*/g,",")
      .trim();
  }

  function adultIdGroupKey(group,category){
    if (group && category && String(group.key || "").indexOf("quick-") === 0 && LEGACY_QUICK_CATEGORIES.has(category.key)) return "quick";
    return group && group.key ? group.key : "group";
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
    return { prompts:prompts, ids:ids };
  }

  function unlocked(){
    try{ return localStorage.getItem("MY_SECRET_UNLOCK") === "true"; }
    catch(_){ return false; }
  }

  function attireRoot(container){
    const host = document.querySelector("#list-attire") || container;
    if (!host) return null;
    return host.querySelector(".section-content") || host;
  }

  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
.${NORMAL_CLASS} { --shima-v50-accent:#7866a8; --shima-v50-soft:#f1edff; }
.${ADULT_CLASS},.${ADULT_CLASS} * { box-sizing:border-box; }
.${ADULT_CLASS} {
  display:block; width:100%; max-width:100%; margin:0 0 12px; overflow:hidden;
  border:1px solid rgba(177,83,126,.38); border-radius:17px;
  background:linear-gradient(160deg,rgba(255,253,254,.99),rgba(250,236,244,.97));
  box-shadow:0 8px 24px rgba(120,48,82,.11);
}
.shima-v51-adult-main-summary,.shima-v51-adult-group-summary,.shima-v51-adult-category-summary {
  display:flex !important; align-items:center; gap:9px; width:100%; min-width:0;
  list-style:none; cursor:pointer; writing-mode:horizontal-tb !important;
}
.shima-v51-adult-main-summary::-webkit-details-marker,
.shima-v51-adult-group-summary::-webkit-details-marker,
.shima-v51-adult-category-summary::-webkit-details-marker { display:none; }
.shima-v51-adult-main-summary {
  padding:13px !important; color:#6f2947 !important;
  background:linear-gradient(135deg,rgba(255,250,252,.99),rgba(249,220,233,.96)) !important;
}
.shima-v51-adult-main-summary::before,.shima-v51-adult-group-summary::before,.shima-v51-adult-category-summary::before {
  content:"▶"; flex:0 0 auto; color:#bc5c86; transform:none;
}
.${ADULT_CLASS}[open] > .shima-v51-adult-main-summary::before,
.shima-v51-adult-group[open] > .shima-v51-adult-group-summary::before,
.shima-v51-adult-category[open] > .shima-v51-adult-category-summary::before { transform:rotate(90deg); }
.shima-v51-adult-main-heading,.shima-v51-adult-group-heading,.shima-v51-adult-category-heading { flex:1 1 auto; min-width:0; }
.shima-v51-adult-eyebrow { display:block; color:#a83063; font-size:10px; line-height:1.2; font-weight:900; letter-spacing:.14em; }
.shima-v51-adult-main-title { display:block; margin-top:2px; font-size:17px; line-height:1.34; font-weight:900; overflow-wrap:anywhere; }
.shima-v51-adult-main-note { display:block; margin-top:3px; color:#845e70; font-size:11px; line-height:1.46; font-weight:650; overflow-wrap:anywhere; }
.shima-v51-adult-count { flex:0 0 auto; min-width:48px; padding:5px 9px; border-radius:999px; color:#96385f; background:rgba(255,255,255,.90); border:1px solid rgba(179,78,121,.25); text-align:center; font-size:12px; font-weight:900; }
.shima-v51-adult-body { display:block !important; width:100% !important; max-width:100% !important; padding:10px !important; }
.shima-v51-adult-guide { margin:0 0 9px; padding:10px 11px; border:1px dashed rgba(177,83,126,.42); border-radius:12px; color:#70485b; background:rgba(255,253,254,.94); font-size:11px; line-height:1.58; font-weight:700; }
.shima-v54-adult-start-deck { display:block; width:100%; margin:0 0 10px; padding:10px; border:1px solid rgba(177,83,126,.28); border-radius:14px; background:linear-gradient(150deg,rgba(255,252,253,.98),rgba(247,236,246,.96)); }
.shima-v54-adult-start-heading { display:flex; align-items:center; gap:9px; margin:0 0 8px; }
.shima-v54-adult-start-mark { flex:0 0 auto; display:grid; place-items:center; width:34px; height:34px; border-radius:50%; color:#8c3158; background:#fff; border:1px solid rgba(177,83,126,.28); font-size:17px; }
.shima-v54-adult-start-copy { flex:1 1 auto; min-width:0; }
.shima-v54-adult-start-eyebrow { display:block; color:#a83063; font-size:9px; line-height:1.2; font-weight:900; letter-spacing:.14em; }
.shima-v54-adult-start-title { display:block; margin-top:2px; color:#67273f; font-size:15px; line-height:1.34; font-weight:900; overflow-wrap:anywhere; }
.shima-v54-adult-start-note { display:block; margin:0 0 8px; color:#80606e; font-size:10px; line-height:1.46; font-weight:650; }
.shima-v54-adult-theme-list { display:flex !important; flex-direction:column !important; gap:6px; width:100%; }
.shima-v54-adult-theme-button { display:grid !important; grid-template-columns:minmax(0,1fr) auto !important; grid-template-rows:auto auto; align-items:center; gap:2px 8px; width:100% !important; min-width:0; padding:9px 10px; border:1px solid rgba(177,83,126,.24); border-radius:11px; color:#672d46; background:rgba(255,255,255,.92); text-align:left; cursor:pointer; }
.shima-v54-adult-theme-button:hover,.shima-v54-adult-theme-button:focus-visible { border-color:rgba(190,63,112,.58); background:#fff8fb; outline:none; }
.shima-v54-adult-theme-button.is-selected { border-color:rgba(190,63,112,.62); background:linear-gradient(135deg,rgba(255,231,241,.98),rgba(255,251,252,.98)); }
.shima-v54-adult-theme-name { grid-column:1; grid-row:1; min-width:0; font-size:12px; line-height:1.36; font-weight:900; overflow-wrap:anywhere; }
.shima-v54-adult-theme-note { grid-column:1; grid-row:2; min-width:0; color:#8b6f7c; font-size:9px; line-height:1.4; font-weight:620; overflow-wrap:anywhere; }
.shima-v54-adult-theme-meta { grid-column:2; grid-row:1 / 3; display:flex; flex-direction:column; align-items:flex-end; gap:3px; }
.shima-v54-adult-theme-count,.shima-v54-adult-theme-selected { min-width:42px; padding:3px 7px; border-radius:999px; text-align:center; white-space:nowrap; font-size:9px; font-weight:900; }
.shima-v54-adult-theme-count { color:#923d61; background:#f9dce8; }
.shima-v54-adult-theme-selected { color:#765a67; background:#f3edf0; }
.shima-v54-adult-theme-button.is-selected .shima-v54-adult-theme-selected { color:#fff; background:#b84270; }
.shima-v54-adult-target-flash { animation:shima-v54-adult-flash 1.2s ease; }
@keyframes shima-v54-adult-flash { 0%,100%{ box-shadow:none; } 35%{ box-shadow:0 0 0 3px rgba(190,63,112,.22); } }
.shima-v51-adult-status { display:flex; flex-wrap:wrap; align-items:center; gap:7px; margin:0 0 10px; padding:8px 9px; border:1px solid rgba(177,83,126,.24); border-radius:11px; background:rgba(255,241,247,.92); }
.shima-v51-adult-status-label { color:#865f71; font-size:10px; font-weight:850; letter-spacing:.08em; }
.shima-v51-adult-status-chip { padding:4px 8px; border-radius:999px; background:#fff; border:1px solid rgba(177,83,126,.22); color:#92385f; font-size:10px; font-weight:900; }
.shima-v51-adult-status-chip.is-warning { border-color:rgba(204,126,58,.48); background:#fff7e8; color:#8b5a20; }
.shima-v51-adult-group-list,.shima-v51-adult-category-list,.shima-v51-adult-card-list {
  display:flex !important; flex-direction:column !important; gap:8px; width:100%; min-width:0;
}
.shima-v51-adult-group { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(177,83,126,.28); border-radius:13px; overflow:hidden; background:rgba(255,255,255,.94); }
.shima-v51-adult-group-summary { padding:11px !important; color:#702b49 !important; background:linear-gradient(135deg,rgba(255,252,253,.99),rgba(250,232,240,.95)) !important; }
.shima-v51-adult-group-title { display:block; font-size:14px; line-height:1.38; font-weight:900; overflow-wrap:anywhere; }
.shima-v51-adult-group-note { display:block; margin-top:2px; color:#8b6f7c; font-size:10px; line-height:1.46; font-weight:620; overflow-wrap:anywhere; }
.shima-v51-adult-group-count,.shima-v51-adult-mode { flex:0 0 auto; padding:3px 7px; border-radius:999px; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.shima-v51-adult-group-count { color:#923d61; background:#f9dce8; }
.shima-v51-adult-mode { color:#795f6b; background:#f3edf0; }
.shima-v51-adult-category-list { padding:8px; }
.shima-v51-adult-category { display:block; width:100%; min-width:0; border:1px solid rgba(177,96,130,.24); border-radius:11px; overflow:hidden; background:#fff; }
.shima-v51-adult-category-summary { padding:9px !important; color:#71334e !important; background:rgba(255,247,250,.96) !important; }
.shima-v51-adult-category-title { display:block; font-size:12px; line-height:1.38; font-weight:900; overflow-wrap:anywhere; }
.shima-v51-adult-category-note { display:block; margin-top:2px; color:#927682; font-size:9px; line-height:1.42; font-weight:600; overflow-wrap:anywhere; }
.shima-v51-adult-category-count { flex:0 0 auto; min-width:32px; padding:3px 6px; border-radius:999px; background:#f5e4eb; color:#88405e; text-align:center; font-size:9px; font-weight:900; }
.shima-v51-adult-card-list { padding:7px; }
.shima-v51-adult-card {
  display:grid !important; grid-template-columns:34px minmax(0,1fr) auto !important; grid-template-rows:auto auto auto;
  align-items:center; gap:3px 8px; width:100% !important; min-width:0 !important; min-height:86px; margin:0 !important; padding:9px !important;
  border:1px solid rgba(177,96,130,.27); border-radius:10px; background:rgba(255,255,255,.99); color:#5e2b41 !important; cursor:pointer;
}
.shima-v51-adult-card:has(input:checked) { border-color:rgba(192,58,108,.72); background:linear-gradient(135deg,rgba(255,231,241,.99),rgba(255,251,252,.99)); box-shadow:0 0 0 1px rgba(192,58,108,.12) inset; }
.shima-v51-adult-card > input[type='checkbox'] { grid-column:1; grid-row:1 / 4; width:24px !important; height:24px !important; margin:0 auto !important; accent-color:#be3f70; }
.shima-v51-adult-name { grid-column:2; grid-row:1; min-width:0; color:#67263f; font-size:13px; line-height:1.34; font-weight:900; overflow-wrap:anywhere; }
.shima-v51-adult-description { grid-column:2; grid-row:2; min-width:0; color:#765566; font-size:10px; line-height:1.42; font-weight:650; overflow-wrap:anywhere; }
.shima-v51-adult-prompt { grid-column:2; grid-row:3; min-width:0; color:#927982; font:9px/1.36 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; overflow-wrap:anywhere; }
.shima-v51-adult-badge { grid-column:3; grid-row:1; align-self:start; padding:3px 7px; border-radius:999px; background:#f9dce8; color:#9a3b61; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.shima-v51-adult-card > .zero-favorite-star { grid-column:3; grid-row:2 / 4; justify-self:end; align-self:end; margin-left:0 !important; }
@media (max-width:760px) {
  .${ADULT_CLASS},.${ADULT_CLASS} * { writing-mode:horizontal-tb !important; text-orientation:mixed !important; word-break:normal !important; }
  .shima-v51-adult-main-summary { padding:11px 10px !important; }
  .shima-v51-adult-body { padding:8px !important; }
  .shima-v54-adult-start-deck { padding:8px; }
  .shima-v54-adult-theme-list,.shima-v54-adult-theme-button { width:100% !important; max-width:100% !important; min-width:0 !important; }
  .shima-v51-adult-group-list,.shima-v51-adult-category-list,.shima-v51-adult-card-list { flex-direction:column !important; width:100% !important; }
  .shima-v51-adult-group-list > *,.shima-v51-adult-category-list > *,.shima-v51-adult-card-list > * { width:100% !important; max-width:100% !important; min-width:0 !important; }
}
`;
    document.head.appendChild(style);
  }

  function refreshIndexes(){
    clearTimeout(window.__SHIMA_FETISH_DETAIL_REFRESH_TIMER__);
    window.__SHIMA_FETISH_DETAIL_REFRESH_TIMER__ = setTimeout(function(){
      try{
        if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") window.ShimaChannelSearch.invalidate();
      }catch(_){ }
      try{
        if (window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh();
      }catch(_){ }
    },50);
  }

  function renderNormal(container){
    const data = window.SHIMA_FETISH_DETAIL_AKASHIC_V1;
    const omni = window.__SHIMA_OMNI_AKASHIC_V1__;
    if (!data || !data.normal || !omni || typeof omni.renderCollection !== "function") return null;
    const report = omni.renderCollection(data.normal,container);
    const root = attireRoot(container);
    const shelf = root && root.querySelector(".shima-v50-specialty[data-omni-collection='fetish']");
    if (shelf) {
      shelf.classList.add(NORMAL_CLASS);
      shelf.dataset.fetishDetailAkashic = "v1";
      delete shelf.dataset.attireCatalogOrigin;
      delete shelf.dataset.attireCatalogOrder;
      delete shelf.dataset.attireCatalogGroup;
      shelf.classList.remove("attire-catalog-item","compat-root");
      shelf.open = false;
      shelf.querySelectorAll("details").forEach(function(details){ details.open = false; });
      try{
        if (window.__SHIMA_ATTIRE_CATALOG_V1__ && typeof window.__SHIMA_ATTIRE_CATALOG_V1__.organize === "function") {
          const organized = window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container);
          if (!organized) setTimeout(function(){ try{ window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container); }catch(_){ } },25);
        }
      }catch(_){ }
    }
    window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__.reports.normal = report;
    refreshIndexes();
    return report;
  }

  function adultSelectionState(shelf){
    if (!shelf) return { total:0, sets:0, parts:0, conflictCategories:[] };
    const checked = Array.from(shelf.querySelectorAll("input." + ADULT_CHECKBOX_CLASS + ":checked"));
    const sets = checked.filter(function(input){ return input.dataset.fetishKind === "set"; }).length;
    const conflictCategories = Array.from(shelf.querySelectorAll(".shima-v51-adult-category[data-fetish-selection='single']"))
      .filter(function(category){ return category.querySelectorAll("input." + ADULT_CHECKBOX_CLASS + ":checked").length > 1; })
      .map(function(category){ return category.dataset.fetishCategory || ""; })
      .filter(Boolean);
    return { total:checked.length, sets:sets, parts:checked.length - sets, conflictCategories:conflictCategories };
  }

  function updateAdultStatus(shelf){
    const state = adultSelectionState(shelf);
    if (!shelf) return state;
    const total = shelf.querySelector("[data-adult-fetish-status='total']");
    const sets = shelf.querySelector("[data-adult-fetish-status='sets']");
    const parts = shelf.querySelector("[data-adult-fetish-status='parts']");
    const conflict = shelf.querySelector("[data-adult-fetish-status='conflict']");
    if (total) total.textContent = "選択中 " + state.total;
    if (sets) sets.textContent = "SET " + state.sets;
    if (parts) parts.textContent = "PART " + state.parts;
    if (conflict) {
      conflict.textContent = state.conflictCategories.length ? "⚠ 軸重複 " + state.conflictCategories.length : "軸重複 0";
      conflict.classList.toggle("is-warning",state.conflictCategories.length > 0);
    }
    shelf.querySelectorAll("[data-adult-fetish-deck-group]").forEach(function(button){
      const key = button.dataset.adultFetishDeckGroup || "";
      const group = Array.from(shelf.querySelectorAll(".shima-v51-adult-group")).find(function(node){
        return node.dataset.fetishGroup === key;
      });
      const selected = group ? group.querySelectorAll("input." + ADULT_CHECKBOX_CLASS + ":checked").length : 0;
      const chip = button.querySelector("[data-adult-fetish-deck-selected]");
      if (chip) chip.textContent = selected ? String(selected) + "選択" : "未選択";
      button.classList.toggle("is-selected",selected > 0);
    });
    shelf.dataset.adultFetishSelected = String(state.total);
    shelf.dataset.adultFetishConflicts = String(state.conflictCategories.length);
    return state;
  }

  function makeAdultPendingInput(collection,group,category,item,state){
    const stableGroupKey = adultIdGroupKey(group,category);
    const id = "shima-v51-adult-fetish-" + safeId(stableGroupKey) + "-" + safeId(category.key) + "-" + safeId(item.slug);
    const prompt = String(item.en || "").trim();
    const normalizedPrompt = normalize(prompt);
    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ group:group.key,category:category.key,name:item.ja,prompt:prompt,reason:"prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ group:group.key,category:category.key,name:item.ja,prompt:prompt,reason:"id" });
      return null;
    }

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = ADULT_CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = item.ja;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.r18Only = "1";
    input.dataset.fetishKind = category.kind || group.kind || "part";
    input.dataset.fetishGroup = group.key;
    input.dataset.fetishCategory = category.key;
    input.dataset.fetishSelection = category.selection || group.selection || "multi";
    input.dataset.fetishId = stableGroupKey + "/" + category.key + "/" + item.slug;
    input.dataset.fetishDescription = item.description || "成人向け後付けディテール";
    input.dataset[ADULT_PENDING_ATTR] = "1";
    input.hidden = true;
    input.setAttribute("aria-hidden","true");
    input.addEventListener("change",function(){ updateAdultStatus(input.closest("." + ADULT_CLASS)); });

    state.index.prompts.add(normalizedPrompt);
    state.index.ids.add(id);
    state.added += 1;
    state.byGroup[group.key] = (state.byGroup[group.key] || 0) + 1;
    return input;
  }

  function adultCardForInput(input){
    if (!input) return null;
    const label = document.createElement("label");
    label.className = "shima-v51-adult-card";
    label.dataset.fetishGroup = input.dataset.fetishGroup || "";
    label.dataset.fetishCategory = input.dataset.fetishCategory || "";

    input.hidden = false;
    input.removeAttribute("aria-hidden");
    delete input.dataset[ADULT_PENDING_ATTR];

    const name = document.createElement("span");
    name.className = "shima-v51-adult-name";
    name.textContent = input.dataset.ja || input.id || "成人向け項目";
    const description = document.createElement("span");
    description.className = "shima-v51-adult-description";
    description.textContent = input.dataset.fetishDescription || "成人向け後付けディテール";
    const promptNode = document.createElement("span");
    promptNode.className = "shima-v51-adult-prompt";
    promptNode.textContent = input.dataset.en || input.value || "";
    const badge = document.createElement("span");
    badge.className = "shima-v51-adult-badge";
    badge.textContent = input.dataset.fetishKind === "set" ? "SET · R-18 · POS" : "PART · R-18 · POS";
    label.appendChild(input);
    label.appendChild(name);
    label.appendChild(description);
    label.appendChild(promptNode);
    label.appendChild(badge);
    return label;
  }

  function notifyAdultMaterialized(count){
    if (!count) return;
    clearTimeout(adultLazyState.notifyTimer);
    adultLazyState.notifyTimer = setTimeout(function(){
      try{
        if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") window.ShimaChannelSearch.invalidate();
      }catch(_){ }
      try{
        if (window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh();
      }catch(_){ }
      try{
        window.dispatchEvent(new CustomEvent("shimaAdultFetishMaterialized",{ detail:{ count:count } }));
      }catch(_){ }
    },0);
  }

  function materializeAdultCategory(details){
    if (!details || details.dataset.adultFetishMaterialized === "1") return 0;
    const list = details.querySelector(":scope > .shima-v51-adult-card-list");
    if (!list) return 0;
    const pending = Array.from(list.children || []).filter(function(node){
      return node && node.matches && node.matches("input." + ADULT_CHECKBOX_CLASS) && node.dataset[ADULT_PENDING_ATTR] === "1";
    });
    if (!pending.length) {
      details.dataset.adultFetishMaterialized = "1";
      return 0;
    }
    const fragment = document.createDocumentFragment();
    pending.forEach(function(input){
      const card = adultCardForInput(input);
      if (card) fragment.appendChild(card);
    });
    list.appendChild(fragment);
    details.dataset.adultFetishMaterialized = "1";
    adultLazyState.materializedCards += pending.length;
    const report = window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__ && window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__.reports.adult;
    if (report) {
      report.materialized = adultLazyState.materializedCards;
      report.pending = Math.max(0,report.added - report.materialized);
    }
    notifyAdultMaterialized(pending.length);
    return pending.length;
  }

  function ensureAdultCheckbox(inputOrId){
    const input = typeof inputOrId === "string" ? document.getElementById(inputOrId) : inputOrId;
    if (!input || !input.classList || !input.classList.contains(ADULT_CHECKBOX_CLASS)) return false;
    const details = input.closest("details.shima-v51-adult-category");
    if (details) materializeAdultCategory(details);
    return !!input.closest("label.shima-v51-adult-card");
  }

  function materializeAdultMatching(term){
    const needle = normalize(term);
    if (!needle) return 0;
    let count = 0;
    document.querySelectorAll("details.shima-v51-adult-category:not([data-adult-fetish-materialized='1'])").forEach(function(details){
      const matched = Array.from(details.querySelectorAll("input." + ADULT_CHECKBOX_CLASS + "[data-adult-fetish-pending='1']")).some(function(input){
        return normalize((input.dataset.ja || "") + " " + (input.dataset.en || "") + " " + (input.dataset.fetishDescription || "")).includes(needle);
      });
      if (matched) count += materializeAdultCategory(details);
    });
    return count;
  }

  function materializeAdultSelected(){
    let count = 0;
    document.querySelectorAll("input." + ADULT_CHECKBOX_CLASS + ":checked").forEach(function(input){
      if (input.dataset[ADULT_PENDING_ATTR] === "1" && ensureAdultCheckbox(input)) count += 1;
    });
    return count;
  }

  function materializeAdultFavorites(){
    let saved = [];
    try{ saved = JSON.parse(localStorage.getItem("shimaBuilderV5.zeroAssist.favorites.v1") || "[]"); }
    catch(_){ saved = []; }
    let count = 0;
    (Array.isArray(saved) ? saved : []).forEach(function(key){
      const marker = "|id:";
      const at = String(key || "").indexOf(marker);
      if (at < 0) return;
      const input = document.getElementById(String(key).slice(at + marker.length));
      if (input && input.dataset[ADULT_PENDING_ATTR] === "1" && ensureAdultCheckbox(input)) count += 1;
    });
    return count;
  }

  function materializeAdultAll(){
    let count = 0;
    document.querySelectorAll("details.shima-v51-adult-category:not([data-adult-fetish-materialized='1'])").forEach(function(details){
      count += materializeAdultCategory(details);
    });
    return count;
  }

  function bindAdultLazyEvents(){
    if (adultLazyState.bound) return;
    adultLazyState.bound = true;
    document.addEventListener("input",function(event){
      if (event.target && event.target.matches && event.target.matches("#ui-search-bar input")) materializeAdultMatching(event.target.value || "");
    },true);
    document.addEventListener("click",function(event){
      const target = event.target && event.target.closest ? event.target : null;
      if (!target) return;
      if (target.closest("#zero-selected-filter")) materializeAdultSelected();
      if (target.closest("#zero-favorites-filter")) materializeAdultFavorites();
      const jump = target.closest('[data-zero-action="jump"]');
      const chip = jump && jump.closest(".zero-selection-chip");
      const key = chip && chip.dataset ? String(chip.dataset.zeroCheckboxKey || "") : "";
      const marker = "|id:";
      const at = key.indexOf(marker);
      if (at >= 0) ensureAdultCheckbox(key.slice(at + marker.length));
    },true);
  }

  function makeAdultCategory(collection,group,category,state){
    const details = document.createElement("details");
    details.className = "shima-v51-adult-category";
    details.dataset.fetishCategory = category.key;
    details.dataset.fetishSelection = category.selection || group.selection || "multi";
    details.dataset.adultFetishMaterialized = "0";
    details.open = false;
    const summary = document.createElement("summary");
    summary.className = "shima-v51-adult-category-summary";
    const heading = document.createElement("span");
    heading.className = "shima-v51-adult-category-heading";
    const title = document.createElement("span");
    title.className = "shima-v51-adult-category-title";
    title.textContent = category.title;
    const note = document.createElement("span");
    note.className = "shima-v51-adult-category-note";
    note.textContent = category.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "shima-v51-adult-category-count";
    const list = document.createElement("div");
    list.className = "shima-v51-adult-card-list";
    (category.items || []).forEach(function(item){
      const input = makeAdultPendingInput(collection,group,category,item,state);
      if (input) list.appendChild(input);
    });
    count.textContent = String(list.querySelectorAll("input[type='checkbox']").length);
    summary.appendChild(heading);
    summary.appendChild(count);
    details.appendChild(summary);
    details.appendChild(list);
    details.addEventListener("toggle",function(){
      if (details.open) materializeAdultCategory(details);
    });
    return list.children.length ? details : null;
  }

  function makeAdultGroup(collection,group,state){
    const details = document.createElement("details");
    details.className = "shima-v51-adult-group";
    details.id = "shima-v54-adult-group-" + safeId(group.key);
    details.dataset.fetishGroup = group.key;
    details.dataset.fetishSelection = group.selection || "multi";
    details.open = false;
    const summary = document.createElement("summary");
    summary.className = "shima-v51-adult-group-summary";
    const heading = document.createElement("span");
    heading.className = "shima-v51-adult-group-heading";
    const title = document.createElement("span");
    title.className = "shima-v51-adult-group-title";
    title.textContent = group.title;
    const note = document.createElement("span");
    note.className = "shima-v51-adult-group-note";
    note.textContent = group.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "shima-v51-adult-group-count";
    const mode = document.createElement("span");
    mode.className = "shima-v51-adult-mode";
    mode.textContent = group.selection === "single" ? "1つ推奨" : "複数OK";
    const list = document.createElement("div");
    list.className = "shima-v51-adult-category-list";
    (group.categories || []).forEach(function(category){
      const node = makeAdultCategory(collection,group,category,state);
      if (node) list.appendChild(node);
    });
    count.textContent = String(list.querySelectorAll("input[type='checkbox']").length);
    summary.appendChild(heading);
    summary.appendChild(count);
    summary.appendChild(mode);
    details.appendChild(summary);
    details.appendChild(list);
    return list.children.length ? details : null;
  }

  function makeAdultStartDeck(collection,groupList){
    const deck = document.createElement("section");
    deck.className = "shima-v54-adult-start-deck";
    const quickGroups = (collection.groups || []).filter(function(group){ return String(group.key || "").indexOf("quick-") === 0; });
    deck.dataset.adultFetishDeckThemes = String(quickGroups.length);

    const heading = document.createElement("div");
    heading.className = "shima-v54-adult-start-heading";
    const mark = document.createElement("span");
    mark.className = "shima-v54-adult-start-mark";
    mark.textContent = "✦";
    const copy = document.createElement("span");
    copy.className = "shima-v54-adult-start-copy";
    const eyebrow = document.createElement("span");
    eyebrow.className = "shima-v54-adult-start-eyebrow";
    eyebrow.textContent = "ADULT START DECK / 入口";
    const title = document.createElement("span");
    title.className = "shima-v54-adult-start-title";
    title.textContent = "今日はどの大人衣装？";
    copy.appendChild(eyebrow);
    copy.appendChild(title);
    heading.appendChild(mark);
    heading.appendChild(copy);
    deck.appendChild(heading);

    const note = document.createElement("span");
    note.className = "shima-v54-adult-start-note";
    note.textContent = "15テーマから入口を選ぶと、そのテーマ棚へ移動します。項目は勝手に選択しません。";
    deck.appendChild(note);

    const list = document.createElement("div");
    list.className = "shima-v54-adult-theme-list";
    quickGroups.forEach(function(group){
      const target = Array.from(groupList.querySelectorAll(".shima-v51-adult-group")).find(function(node){
        return node.dataset.fetishGroup === group.key;
      });
      if (!target) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "shima-v54-adult-theme-button";
      button.dataset.adultFetishDeckGroup = group.key;
      button.setAttribute("aria-controls",target.id);
      const name = document.createElement("span");
      name.className = "shima-v54-adult-theme-name";
      name.textContent = group.title;
      const groupNote = document.createElement("span");
      groupNote.className = "shima-v54-adult-theme-note";
      groupNote.textContent = group.note || "完成セットから選ぶ";
      const meta = document.createElement("span");
      meta.className = "shima-v54-adult-theme-meta";
      const count = document.createElement("span");
      count.className = "shima-v54-adult-theme-count";
      count.textContent = String(target.querySelectorAll("input." + ADULT_CHECKBOX_CLASS).length);
      const selected = document.createElement("span");
      selected.className = "shima-v54-adult-theme-selected";
      selected.dataset.adultFetishDeckSelected = "1";
      selected.textContent = "未選択";
      meta.appendChild(count);
      meta.appendChild(selected);
      button.appendChild(name);
      button.appendChild(groupNote);
      button.appendChild(meta);
      button.addEventListener("click",function(){
        const shelf = button.closest("." + ADULT_CLASS);
        if (shelf) shelf.open = true;
        target.style.display = "";
        target.open = true;
        setTimeout(function(){
          try{ target.scrollIntoView({ behavior:"smooth",block:"start" }); }
          catch(_){ try{ target.scrollIntoView(); }catch(__){ } }
          target.classList.remove("shima-v54-adult-target-flash");
          void target.offsetWidth;
          target.classList.add("shima-v54-adult-target-flash");
        },30);
      });
      list.appendChild(button);
    });
    deck.appendChild(list);
    return deck;
  }

  function renderAdult(container){
    if (!unlocked()) return null;
    const data = window.SHIMA_FETISH_DETAIL_AKASHIC_V1;
    const collection = data && data.adult;
    const root = attireRoot(container);
    const zone = root && root.querySelector("#__attire_r18_last_zone__");
    if (!root || !zone || !collection || !Array.isArray(collection.groups)) return null;
    const existing = zone.querySelector("." + ADULT_CLASS);
    if (existing) return window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__.reports.adult || null;

    injectStyle();
    bindAdultLazyEvents();
    adultLazyState.materializedCards = 0;
    const state = { candidates:0,added:0,skippedPrompt:0,skippedId:0,skippedItems:[],byGroup:{},index:existingIndex(root) };
    const shelf = document.createElement("details");
    shelf.className = ADULT_CLASS;
    shelf.dataset.fetishDetailAkashic = "adult-v1";
    shelf.dataset.r18Only = "1";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "shima-v51-adult-main-summary";
    const heading = document.createElement("span");
    heading.className = "shima-v51-adult-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "shima-v51-adult-eyebrow";
    eyebrow.textContent = collection.eyebrow;
    const title = document.createElement("span");
    title.className = "shima-v51-adult-main-title";
    title.textContent = collection.title;
    const note = document.createElement("span");
    note.className = "shima-v51-adult-main-note";
    note.textContent = collection.note;
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "shima-v51-adult-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "shima-v51-adult-body";
    const guide = document.createElement("div");
    guide.className = "shima-v51-adult-guide";
    guide.textContent = collection.guide;
    body.appendChild(guide);
    const status = document.createElement("div");
    status.className = "shima-v51-adult-status";
    const statusLabel = document.createElement("span");
    statusLabel.className = "shima-v51-adult-status-label";
    statusLabel.textContent = "ADULT DETAIL STATUS";
    [
      ["total","選択中 0"],
      ["sets","SET 0"],
      ["parts","PART 0"],
      ["conflict","軸重複 0"]
    ].forEach(function(row){
      const chip = document.createElement("span");
      chip.className = "shima-v51-adult-status-chip";
      chip.dataset.adultFetishStatus = row[0];
      chip.textContent = row[1];
      status.appendChild(chip);
    });
    status.insertBefore(statusLabel,status.firstChild);
    body.appendChild(status);

    const groupList = document.createElement("div");
    groupList.className = "shima-v51-adult-group-list";
    collection.groups.forEach(function(group){
      const node = makeAdultGroup(collection,group,state);
      if (node) groupList.appendChild(node);
    });
    const deck = makeAdultStartDeck(collection,groupList);
    body.insertBefore(deck,status);
    body.appendChild(groupList);
    count.textContent = String(body.querySelectorAll("input[type='checkbox']").length);
    shelf.appendChild(summary);
    shelf.appendChild(body);

    const oldLab = zone.querySelector(":scope > .attire-v40-r18-remix-lab");
    if (oldLab && oldLab.nextSibling) zone.insertBefore(shelf,oldLab.nextSibling);
    else if (oldLab) zone.appendChild(shelf);
    else {
      const divider = zone.querySelector(":scope > .attire-r18-divider");
      if (divider && divider.nextSibling) zone.insertBefore(shelf,divider.nextSibling);
      else zone.appendChild(shelf);
    }
    updateAdultStatus(shelf);
    refreshIndexes();

    const report = {
      version:data.version || "1.0.0",
      collection:collection.key,
      expectedCount:Number(collection.expectedCount || 0),
      expectedCategories:Number(collection.expectedCategories || 0),
      candidates:state.candidates,
      added:state.added,
      skippedPrompt:state.skippedPrompt,
      skippedId:state.skippedId,
      skippedItems:state.skippedItems,
      byGroup:state.byGroup,
      groups:groupList.querySelectorAll(".shima-v51-adult-group").length,
      categories:groupList.querySelectorAll(".shima-v51-adult-category").length,
      startDeckThemes:deck.querySelectorAll("[data-adult-fetish-deck-group]").length,
      lazy:true,
      materialized:0,
      pending:state.added,
      adultOnly:true,
      insideR18Zone:shelf.closest("#__attire_r18_last_zone__") === zone,
      initialOpen:shelf.open,
      initialSelected:Number(shelf.dataset.adultFetishSelected || 0)
    };
    window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__.reports.adult = report;
    try{ document.dispatchEvent(new CustomEvent("fetishDetailAkashicReady",{ detail:report })); }catch(_){ }
    return report;
  }

  function scheduleAdult(container){
    let tries = 0;
    (function run(){
      if (!unlocked()) return;
      const report = renderAdult(container);
      if (!report && tries++ < 90) setTimeout(run,60);
    })();
  }

  const normalApi = {
    initUI:function(container){ renderNormal(container); },
    getTags:function(){
      return Array.from(document.querySelectorAll("input.shima-v50-fetish-checkbox:checked"))
        .map(function(input){ return String(input.dataset.en || "").trim(); })
        .filter(Boolean);
    }
  };

  const adultApi = {
    initUI:function(container){ scheduleAdult(container); },
    getTags:function(){
      if (!unlocked()) return [];
      return Array.from(document.querySelectorAll("input." + ADULT_CHECKBOX_CLASS + ":checked"))
        .map(function(input){ return String(input.dataset.en || "").trim(); })
        .filter(Boolean);
    }
  };

  window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__ = {
    version:"1.3.0",
    reports:{ normal:null,adult:null },
    renderNormal:renderNormal,
    renderAdult:renderAdult,
    updateAll:function(){
      setTimeout(function(){
        const shelf = document.querySelector("." + ADULT_CLASS);
        if (shelf) updateAdultStatus(shelf);
        try{ if (window.__SHIMA_OMNI_AKASHIC_V1__) window.__SHIMA_OMNI_AKASHIC_V1__.updateAll(); }catch(_){ }
        refreshIndexes();
      },35);
    },
    getAdultSelectionState:function(){ return adultSelectionState(document.querySelector("." + ADULT_CLASS)); },
    materializeAdultCategory:materializeAdultCategory,
    ensureAdultCheckbox:ensureAdultCheckbox,
    materializeAdultMatching:materializeAdultMatching,
    materializeAdultSelected:materializeAdultSelected,
    materializeAdultFavorites:materializeAdultFavorites,
    materializeAdultAll:materializeAdultAll
  };

  function syncState(){ window.__SHIMA_FETISH_DETAIL_AKASHIC_V1__.updateAll(); }
  window.addEventListener("builderHistoryRestored",syncState);
  document.addEventListener("builderResetAll",syncState,true);
  document.addEventListener("click",function(event){
    if (event.target && event.target.closest && event.target.closest(".category-reset-btn")) syncState();
  },true);

  function register(retry){
    const data = window.SHIMA_FETISH_DETAIL_AKASHIC_V1;
    if (data && typeof window.__registerPromptPart === "function" && window.__SHIMA_OMNI_AKASHIC_V1__) {
      window.__registerPromptPart(KEY,NORMAL_VERSION,normalApi);
      window.__registerPromptPart(KEY,ADULT_VERSION,adultApi);
      setTimeout(function(){ try{ if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }catch(_){ } },20);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ register((retry || 0) + 1); },100);
  }

  register(0);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",function(){ scheduleAdult(null); },{ once:true });
  else scheduleAdult(null);
  console.log("💎 Loaded: ./ext_fetish_detail_akashic.v1.js v1.3.0 / adult start deck + lazy cards");
})();
