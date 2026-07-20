(function(){
  "use strict";

  const VERSION = 35;
  const KEY = "attire";
  const STYLE_ID = "shima-arcadia-wardrobe-v1-style";
  const SOURCE_CLASS = "attire-v35-arcadia-wardrobe";
  const CHECKBOX_CLASS = "attire-v35-checkbox";

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
.attire-v35-arcadia-wardrobe, .attire-v35-arcadia-wardrobe * { box-sizing:border-box; }
.attire-v35-arcadia-wardrobe {
  display:block; width:100%; max-width:100%; margin:0 0 10px;
  border:1px solid rgba(94,157,173,.42); border-radius:16px; overflow:hidden;
  background:linear-gradient(155deg, rgba(255,255,255,.98), rgba(237,250,251,.94));
  box-shadow:0 7px 20px rgba(63,111,126,.10);
}
.attire-v35-main-summary {
  display:flex !important; align-items:center; gap:10px; width:100%; min-width:0;
  padding:13px !important; list-style:none; cursor:pointer; color:#183f49 !important;
  background:linear-gradient(135deg, rgba(245,253,255,.99), rgba(218,246,240,.96)) !important;
}
.attire-v35-main-summary::-webkit-details-marker, .attire-v35-category-summary::-webkit-details-marker { display:none; }
.attire-v35-main-summary::before { content:"▶"; flex:0 0 auto; color:#408e91; }
.attire-v35-arcadia-wardrobe[open] > .attire-v35-main-summary::before { transform:rotate(90deg); }
.attire-v35-main-heading { flex:1 1 auto; min-width:0; }
.attire-v35-eyebrow { display:block; color:#2f8582; font-size:10px; line-height:1.2; font-weight:900; letter-spacing:.15em; }
.attire-v35-main-title { display:block; margin-top:2px; font-size:16px; line-height:1.3; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-main-note { display:block; margin-top:3px; color:#617c84; font-size:11px; line-height:1.4; font-weight:650; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-main-count { flex:0 0 auto; min-width:46px; padding:5px 9px; border-radius:999px; color:#28656d; background:rgba(255,255,255,.82); border:1px solid rgba(78,151,159,.22); text-align:center; font-size:12px; font-weight:900; }
.attire-v35-body { display:block !important; width:100% !important; max-width:100% !important; padding:9px !important; }
.attire-v35-guide { margin:0 0 9px; padding:9px 10px; border:1px dashed rgba(91,148,159,.35); border-radius:11px; color:#486a73; background:rgba(250,254,255,.82); font-size:11px; line-height:1.55; font-weight:650; }
.attire-v35-zone { display:block; width:100%; max-width:100%; margin:0 0 10px; padding:8px; border:1px solid rgba(107,160,171,.24); border-radius:13px; background:rgba(255,255,255,.66); }
.attire-v35-zone:last-child { margin-bottom:0; }
.attire-v35-zone-head { display:flex; align-items:flex-start; gap:8px; width:100%; min-width:0; padding:2px 2px 8px; }
.attire-v35-zone-heading { flex:1 1 auto; min-width:0; }
.attire-v35-zone-title { display:block; color:#28545d; font-size:14px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-zone-note { display:block; margin-top:2px; color:#72888e; font-size:10px; line-height:1.4; font-weight:600; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-zone-count { flex:0 0 auto; min-width:38px; padding:3px 8px; border-radius:999px; color:#3e737b; background:#eaf8f6; text-align:center; font-size:10px; font-weight:900; }
.attire-v35-category-list { display:grid !important; grid-template-columns:repeat(2,minmax(0,1fr)) !important; gap:7px; width:100%; min-width:0; }
.attire-v35-category { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(112,159,170,.28); border-radius:11px; overflow:hidden; background:rgba(255,255,255,.92); }
.attire-v35-category-summary { display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:10px !important; list-style:none; cursor:pointer; color:#244b54 !important; background:linear-gradient(135deg, rgba(249,254,255,.98), rgba(234,249,246,.92)) !important; }
.attire-v35-category-summary::before { content:"▶"; flex:0 0 auto; color:#6598a2; }
.attire-v35-category[open] > .attire-v35-category-summary::before { transform:rotate(90deg); }
.attire-v35-category-heading { flex:1 1 auto; min-width:0; }
.attire-v35-category-title { display:block; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-category-note { display:block; margin-top:2px; color:#71868d; font-size:10px; line-height:1.42; font-weight:600; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-category-count { flex:0 0 auto; min-width:30px; padding:3px 7px; border-radius:999px; color:#356e76; background:rgba(207,240,235,.74); text-align:center; font-size:10px; font-weight:900; }
.attire-v35-grid { display:grid !important; grid-template-columns:minmax(0,1fr) !important; gap:7px; width:100%; min-width:0; padding:7px; }
.attire-v35-card { display:grid !important; grid-template-columns:34px minmax(0,1fr) auto !important; grid-template-rows:auto auto; align-items:center; gap:3px 8px; width:100% !important; min-width:0 !important; min-height:72px; margin:0 !important; padding:9px !important; border:1px solid rgba(112,157,168,.28); border-radius:10px; background:rgba(255,255,255,.97); color:#24444d !important; cursor:pointer; }
.attire-v35-card:hover { border-color:rgba(63,158,150,.58); background:#fbffff; }
.attire-v35-card:has(input:checked) { border-color:rgba(44,154,143,.76); background:linear-gradient(135deg, rgba(232,253,248,.99), rgba(246,253,255,.99)); box-shadow:0 0 0 1px rgba(73,184,172,.16) inset; }
.attire-v35-card > input[type='checkbox'] { grid-column:1; grid-row:1 / 3; width:24px !important; height:24px !important; margin:0 auto !important; accent-color:#32a999; }
.attire-v35-name { grid-column:2; grid-row:1; min-width:0; color:#1e4650; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-prompt { grid-column:2; grid-row:2; min-width:0; color:#70868c; font:10px/1.38 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; overflow-wrap:anywhere; word-break:normal; }
.attire-v35-badge { grid-column:3; grid-row:1; align-self:start; padding:3px 7px; border-radius:999px; background:#edf7fb; color:#517985; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v35-card[data-arcadia-kind='characters'] .attire-v35-badge,
.attire-v35-card[data-arcadia-kind='ship'] .attire-v35-badge { background:#fff2d7; color:#856226; }
.attire-v35-card > .zero-favorite-star { grid-column:3; grid-row:2; justify-self:end; align-self:end; margin-left:0 !important; }
@media (max-width:760px) {
  .attire-v35-category-list, .attire-v35-grid { grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important; }
  .attire-v35-category-list > *, .attire-v35-grid > * { width:100% !important; max-width:100% !important; min-width:0 !important; }
  .attire-v35-main-summary { padding:11px 10px !important; }
  .attire-v35-body, .attire-v35-zone { padding:7px !important; }
  .attire-v35-card { grid-template-columns:34px minmax(0,1fr) auto !important; }
  .attire-v35-main-title, .attire-v35-main-note, .attire-v35-zone-title, .attire-v35-zone-note,
  .attire-v35-category-title, .attire-v35-category-note, .attire-v35-name, .attire-v35-prompt {
    writing-mode:horizontal-tb !important; text-orientation:mixed !important;
  }
}
`;
    document.head.appendChild(style);
  }

  function makeCard(group, category, item, index, state){
    const slug = String(item[0] || (category.key + "-" + index)).replace(/[^a-z0-9_-]+/gi, "-");
    const name = String(item[1] || slug);
    const prompt = String(item[2] || "").trim();
    const id = "attire-arcadia-" + group.key + "-" + category.key + "-" + slug;
    const normalizedPrompt = normalize(prompt);

    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ group: group.key, category: category.key, name: name, prompt: prompt, reason: "prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ group: group.key, category: category.key, name: name, prompt: prompt, reason: "id" });
      return null;
    }

    const label = document.createElement("label");
    label.className = "attire-v35-card";
    label.dataset.arcadiaKind = group.key;
    label.dataset.arcadiaCategory = category.key;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.arcadiaId = group.key + "/" + category.key + "/" + slug;
    input.dataset.arcadiaName = name;

    const title = document.createElement("span");
    title.className = "attire-v35-name";
    title.textContent = name;

    const promptText = document.createElement("span");
    promptText.className = "attire-v35-prompt";
    promptText.textContent = prompt;

    const badge = document.createElement("span");
    badge.className = "attire-v35-badge";
    badge.textContent = group.key === "modules" ? "PART · POS" : "SET · POS";

    label.appendChild(input);
    label.appendChild(title);
    label.appendChild(promptText);
    label.appendChild(badge);

    state.index.prompts.add(normalizedPrompt);
    state.index.ids.add(id);
    state.added += 1;
    state.byGroup[group.key] = (state.byGroup[group.key] || 0) + 1;
    return label;
  }

  function makeCategory(group, category, state){
    const details = document.createElement("details");
    details.className = "attire-v35-category";
    details.dataset.arcadiaCategory = category.key;
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v35-category-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v35-category-heading";
    const title = document.createElement("span");
    title.className = "attire-v35-category-title";
    title.textContent = category.title;
    const note = document.createElement("span");
    note.className = "attire-v35-category-note";
    note.textContent = category.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v35-category-count";

    const grid = document.createElement("div");
    grid.className = "attire-v35-grid";
    (category.items || []).forEach(function(item, index){
      const card = makeCard(group, category, item, index, state);
      if (card) grid.appendChild(card);
    });
    count.textContent = String(grid.querySelectorAll("input[type='checkbox']").length);
    summary.appendChild(heading);
    summary.appendChild(count);
    details.appendChild(summary);
    details.appendChild(grid);
    return grid.children.length ? details : null;
  }

  function makeZone(group, state){
    const zone = document.createElement("section");
    zone.className = "attire-v35-zone attire-v35-zone-" + group.key;
    zone.dataset.arcadiaGroup = group.key;

    const head = document.createElement("div");
    head.className = "attire-v35-zone-head";
    const heading = document.createElement("div");
    heading.className = "attire-v35-zone-heading";
    const title = document.createElement("span");
    title.className = "attire-v35-zone-title";
    title.textContent = group.title;
    const note = document.createElement("span");
    note.className = "attire-v35-zone-note";
    note.textContent = group.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v35-zone-count";
    head.appendChild(heading);
    head.appendChild(count);

    const list = document.createElement("div");
    list.className = "attire-v35-category-list";
    (group.categories || []).forEach(function(category){
      const details = makeCategory(group, category, state);
      if (details) list.appendChild(details);
    });
    count.textContent = String(list.querySelectorAll("input[type='checkbox']").length);
    zone.appendChild(head);
    zone.appendChild(list);
    return list.children.length ? zone : null;
  }

  function render(container){
    const root = contentRoot(container);
    const data = window.SHIMA_ARCADIA_WARDROBE_V1;
    if (!root || !data || !Array.isArray(data.groups)) return null;
    if (root.querySelector("." + CHECKBOX_CLASS)) return window.__SHIMA_ARCADIA_WARDROBE_V1__.lastReport;

    injectStyle();
    const state = {
      candidates: 0,
      added: 0,
      skippedPrompt: 0,
      skippedId: 0,
      skippedItems: [],
      byGroup: {},
      index: existingIndex(root)
    };

    const shelf = document.createElement("details");
    shelf.className = SOURCE_CLASS;
    shelf.dataset.arcadiaWardrobe = "v1";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v35-main-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v35-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "attire-v35-eyebrow";
    eyebrow.textContent = "ARCADIA WARDROBE / 白翼衣装庫";
    const title = document.createElement("span");
    title.className = "attire-v35-main-title";
    title.textContent = "🪽 シマエナガ・アルカディア衣装";
    const note = document.createElement("span");
    note.className = "attire-v35-main-note";
    note.textContent = "完成服84点＋着せ替え部品60点。階級・役職から選び、どの人物にも使えます。";
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v35-main-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "attire-v35-body";
    const guide = document.createElement("div");
    guide.className = "attire-v35-guide";
    guide.textContent = "サッと決める時は完成衣装、細かく作る時は白翼モジュール。すべてPositive通常へ出力し、髪・目・性別・人物名・背景・品質は指定しません。";
    body.appendChild(guide);
    data.groups.forEach(function(group){
      const zone = makeZone(group, state);
      if (zone) body.appendChild(zone);
    });
    count.textContent = String(body.querySelectorAll("input[type='checkbox']").length);
    shelf.appendChild(summary);
    shelf.appendChild(body);
    if (state.added) root.appendChild(shelf);

    const report = {
      version: data.version || "1.0.0",
      expectedCount: Number(data.expectedCount || 0),
      candidates: state.candidates,
      added: state.added,
      skippedPrompt: state.skippedPrompt,
      skippedId: state.skippedId,
      skippedItems: state.skippedItems,
      byGroup: state.byGroup
    };
    window.__SHIMA_ARCADIA_WARDROBE_V1__.lastReport = report;
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

  window.__SHIMA_ARCADIA_WARDROBE_V1__ = {
    version: "1.1.0",
    render: render,
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
  console.log("🪽 Loaded: ./ext_attire_arcadia_wardrobe.v1.js v1.1.0 rank labels");
})();
