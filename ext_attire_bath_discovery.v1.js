(function(){
  "use strict";

  const VERSION = 503;
  const KEY = "attire";
  const STYLE_ID = "shima-attire-bath-discovery-v1-style";
  const SOURCE_CLASS = "attire-v55-bath-discovery";
  const CHECKBOX_CLASS = "attire-v55-bath-checkbox";

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
    return { prompts:prompts, ids:ids };
  }

  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
.attire-v55-bath-discovery, .attire-v55-bath-discovery * { box-sizing:border-box; }
.attire-v55-bath-discovery {
  display:block; width:100%; max-width:100%; margin:0 0 12px;
  border:1px solid rgba(79,157,171,.48); border-radius:17px; overflow:hidden;
  background:linear-gradient(155deg, rgba(255,255,255,.99), rgba(235,251,249,.96));
  box-shadow:0 8px 23px rgba(57,115,128,.12);
}
.attire-v55-main-summary {
  display:flex !important; align-items:center; gap:10px; width:100%; min-width:0;
  padding:13px !important; list-style:none; cursor:pointer; color:#173f49 !important;
  background:linear-gradient(135deg, rgba(247,254,255,.99), rgba(210,247,239,.97)) !important;
}
.attire-v55-main-summary::-webkit-details-marker,
.attire-v55-group-summary::-webkit-details-marker,
.attire-v55-category-summary::-webkit-details-marker { display:none; }
.attire-v55-main-summary::before,
.attire-v55-group-summary::before,
.attire-v55-category-summary::before {
  content:"▶"; flex:0 0 auto; color:#408f91; transform:none;
}
.attire-v55-bath-discovery[open] > .attire-v55-main-summary::before,
.attire-v55-group[open] > .attire-v55-group-summary::before,
.attire-v55-category[open] > .attire-v55-category-summary::before { transform:rotate(90deg); }
.attire-v55-main-heading, .attire-v55-group-heading, .attire-v55-category-heading { flex:1 1 auto; min-width:0; }
.attire-v55-eyebrow {
  display:block; color:#27827f; font-size:10px; line-height:1.2;
  font-weight:900; letter-spacing:.14em;
}
.attire-v55-main-title {
  display:block; margin-top:2px; font-size:16px; line-height:1.32; font-weight:900;
  overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-main-note {
  display:block; margin-top:3px; color:#607c84; font-size:11px; line-height:1.45;
  font-weight:650; overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-main-count, .attire-v55-count {
  flex:0 0 auto; min-width:38px; padding:4px 9px; border-radius:999px;
  color:#28676f; background:rgba(255,255,255,.84);
  border:1px solid rgba(75,151,160,.20); text-align:center;
  font-size:11px; line-height:1.25; font-weight:900;
}
.attire-v55-body, .attire-v55-bath-discovery[open] > .attire-v55-body {
  display:flex !important; flex-direction:column !important;
  width:100% !important; max-width:100% !important; min-width:0 !important; gap:8px;
  padding:9px !important;
}
.attire-v55-guide {
  width:100%; padding:10px 11px; border:1px dashed rgba(78,148,159,.38);
  border-radius:12px; color:#426872; background:rgba(251,254,255,.88);
  font-size:11px; line-height:1.55; font-weight:650;
}
.attire-v55-status {
  display:flex; flex-wrap:wrap; align-items:center; gap:6px; width:100%;
  padding:8px 9px; border-radius:11px; background:rgba(225,247,244,.72);
}
.attire-v55-status-label {
  margin-right:auto; color:#2e7475; font-size:10px; font-weight:900; letter-spacing:.12em;
}
.attire-v55-status-chip {
  padding:4px 8px; border-radius:999px; color:#416d74; background:rgba(255,255,255,.88);
  border:1px solid rgba(90,154,164,.20); font-size:10px; font-weight:850;
}
.attire-v55-group-list, .attire-v55-category-list, .attire-v55-card-list {
  display:flex !important; flex-direction:column !important;
  width:100% !important; max-width:100% !important; min-width:0 !important; gap:7px;
}
.attire-v55-group {
  display:block; width:100%; min-width:0; border:1px solid rgba(98,157,167,.32);
  border-radius:13px; overflow:hidden; background:rgba(255,255,255,.84);
}
.attire-v55-group-summary {
  display:flex !important; align-items:center; gap:8px; width:100%; min-width:0;
  padding:11px !important; list-style:none; cursor:pointer; color:#25515a !important;
  background:linear-gradient(135deg, rgba(246,254,255,.98), rgba(224,248,242,.94)) !important;
}
.attire-v55-group-title {
  display:block; font-size:14px; line-height:1.35; font-weight:900;
  overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-group-note {
  display:block; margin-top:2px; color:#6d868d; font-size:10px; line-height:1.42;
  font-weight:600; overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-category-list, .attire-v55-group[open] > .attire-v55-category-list { padding:7px !important; }
.attire-v55-category {
  display:block; width:100%; min-width:0; border:1px solid rgba(106,157,168,.27);
  border-radius:11px; overflow:hidden; background:rgba(255,255,255,.94);
}
.attire-v55-category-summary {
  display:flex !important; align-items:center; gap:8px; width:100%; min-width:0;
  padding:10px !important; list-style:none; cursor:pointer; color:#294e57 !important;
  background:linear-gradient(135deg, rgba(252,255,255,.99), rgba(237,249,247,.94)) !important;
}
.attire-v55-category-title {
  display:block; font-size:13px; line-height:1.35; font-weight:900;
  overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-category-note {
  display:block; margin-top:2px; color:#74888e; font-size:10px; line-height:1.42;
  font-weight:600; overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-category-meta {
  display:flex; flex:0 0 auto; flex-direction:column; align-items:flex-end; gap:3px;
}
.attire-v55-mode {
  padding:2px 6px; border-radius:999px; color:#607981; background:#edf6f8;
  font-size:8px; line-height:1.25; font-weight:900; white-space:nowrap;
}
.attire-v55-mode[data-mode='multi'] { color:#317269; background:#e5f8f1; }
.attire-v55-card-list, .attire-v55-category[open] > .attire-v55-card-list { padding:7px !important; }
.attire-v55-card {
  display:flex !important; align-items:flex-start; gap:9px; width:100% !important; min-width:0 !important;
  min-height:76px; margin:0 !important; padding:10px !important;
  border:1px solid rgba(104,155,166,.29); border-radius:10px;
  background:rgba(255,255,255,.98); color:#264750 !important; cursor:pointer;
}
.attire-v55-card:hover { border-color:rgba(48,158,148,.58); background:#fbffff; }
.attire-v55-card:has(input:checked) {
  border-color:rgba(42,158,145,.78);
  background:linear-gradient(135deg, rgba(230,253,247,.99), rgba(246,253,255,.99));
  box-shadow:0 0 0 1px rgba(67,180,169,.16) inset;
}
.attire-v55-card > input[type='checkbox'] {
  flex:0 0 auto; width:25px !important; height:25px !important; margin:2px 0 0 !important;
  accent-color:#2fa999;
}
.attire-v55-card-main { display:flex; flex:1 1 auto; flex-direction:column; min-width:0; gap:3px; }
.attire-v55-name {
  color:#204952; font-size:13px; line-height:1.35; font-weight:900;
  overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-description {
  color:#566f77; font-size:10px; line-height:1.48; font-weight:650;
  overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-prompt {
  color:#7a8d92; font:9px/1.38 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  overflow-wrap:anywhere; word-break:normal;
}
.attire-v55-badge {
  flex:0 0 auto; padding:3px 7px; border-radius:999px; color:#4f7480;
  background:#edf7fa; font-size:8px; line-height:1.25; font-weight:900; white-space:nowrap;
}
.attire-v55-card[data-bath-kind='wave1'] .attire-v55-badge { color:#826128; background:#fff2d6; }
.attire-v55-card > .zero-favorite-star { flex:0 0 auto; margin-left:0 !important; }
@media (max-width:760px) {
  .attire-v55-body, .attire-v55-bath-discovery[open] > .attire-v55-body,
  .attire-v55-group-list, .attire-v55-category-list, .attire-v55-card-list,
  .attire-v55-group[open] > .attire-v55-category-list,
  .attire-v55-category[open] > .attire-v55-card-list {
    display:flex !important; flex-direction:column !important;
    width:100% !important; max-width:100% !important; min-width:0 !important;
  }
  .attire-v55-main-summary { padding:11px 10px !important; }
  .attire-v55-body { padding:7px !important; }
  .attire-v55-card { width:100% !important; min-width:0 !important; }
  .attire-v55-main-title, .attire-v55-main-note, .attire-v55-guide,
  .attire-v55-group-title, .attire-v55-group-note,
  .attire-v55-category-title, .attire-v55-category-note,
  .attire-v55-name, .attire-v55-description, .attire-v55-prompt {
    writing-mode:horizontal-tb !important; text-orientation:mixed !important;
    word-break:normal !important; overflow-wrap:anywhere !important;
  }
}
`;
    document.head.appendChild(style);
  }

  function selectionState(shelf){
    const checked = Array.from(shelf.querySelectorAll("input." + CHECKBOX_CLASS + ":checked"));
    return checked.reduce(function(state, input){
      state.total += 1;
      if (input.dataset.bathKind === "wave1") state.wave1 += 1;
      else state.rediscovery += 1;
      return state;
    }, { total:0, wave1:0, rediscovery:0 });
  }

  function updateStatus(shelf){
    if (!shelf) return null;
    const state = selectionState(shelf);
    const total = shelf.querySelector("[data-bath-status='total']");
    const wave1 = shelf.querySelector("[data-bath-status='wave1']");
    const rediscovery = shelf.querySelector("[data-bath-status='rediscovery']");
    if (total) total.textContent = "選択中 " + state.total;
    if (wave1) wave1.textContent = "新規 " + state.wave1;
    if (rediscovery) rediscovery.textContent = "再発見 " + state.rediscovery;
    shelf.dataset.bathSelected = String(state.total);
    return state;
  }

  function makeCard(group, category, item, index, state){
    const rawSlug = item && item.slug || (category.key + "-" + index);
    const slug = String(rawSlug).replace(/[^a-z0-9_-]+/gi, "-");
    const name = String(item && item.ja || slug);
    const prompt = String(item && item.en || "").trim();
    const description = String(item && item.description || "").trim();
    const kind = String(item && item.kind || "wave1");
    const id = "attire-bath-v55-" + group.key + "-" + category.key + "-" + slug;
    const normalizedPrompt = normalize(prompt);

    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ group:group.key, category:category.key, name:name, prompt:prompt, reason:"prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ group:group.key, category:category.key, name:name, prompt:prompt, reason:"id" });
      return null;
    }

    const label = document.createElement("label");
    label.className = "attire-v55-card";
    label.dataset.bathKind = kind;
    label.dataset.bathGroup = group.key;
    label.dataset.bathCategory = category.key;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.bathId = group.key + "/" + category.key + "/" + slug;
    input.dataset.bathName = name;
    input.dataset.bathKind = kind;
    input.dataset.bathGroup = group.key;
    input.dataset.bathSelection = category.selection || "single";
    if (description) input.dataset.bathDescription = description;
    input.addEventListener("change", function(){ updateStatus(input.closest("." + SOURCE_CLASS)); });

    const main = document.createElement("span");
    main.className = "attire-v55-card-main";
    const title = document.createElement("span");
    title.className = "attire-v55-name";
    title.textContent = name;
    main.appendChild(title);
    if (description) {
      const descriptionNode = document.createElement("span");
      descriptionNode.className = "attire-v55-description";
      descriptionNode.textContent = description;
      main.appendChild(descriptionNode);
    }
    const promptNode = document.createElement("span");
    promptNode.className = "attire-v55-prompt";
    promptNode.textContent = prompt;
    main.appendChild(promptNode);

    const badge = document.createElement("span");
    badge.className = "attire-v55-badge";
    badge.textContent = kind === "wave1" ? "NEW · POS" : "再発見 · POS";

    label.appendChild(input);
    label.appendChild(main);
    label.appendChild(badge);

    state.index.prompts.add(normalizedPrompt);
    state.index.ids.add(id);
    state.added += 1;
    state.byGroup[group.key] = (state.byGroup[group.key] || 0) + 1;
    return label;
  }

  function makeCategory(group, category, state){
    const details = document.createElement("details");
    details.className = "attire-v55-category";
    details.dataset.bathCategory = category.key;
    details.dataset.bathSelection = category.selection || "single";
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v55-category-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v55-category-heading";
    const title = document.createElement("span");
    title.className = "attire-v55-category-title";
    title.textContent = category.title;
    const note = document.createElement("span");
    note.className = "attire-v55-category-note";
    note.textContent = category.note || "";
    heading.appendChild(title);
    heading.appendChild(note);

    const meta = document.createElement("span");
    meta.className = "attire-v55-category-meta";
    const count = document.createElement("span");
    count.className = "attire-v55-count";
    const mode = document.createElement("span");
    mode.className = "attire-v55-mode";
    mode.dataset.mode = category.selection || "single";
    mode.textContent = mode.dataset.mode === "multi" ? "組合せOK" : "1つ推奨";
    meta.appendChild(count);
    meta.appendChild(mode);

    const list = document.createElement("div");
    list.className = "attire-v55-card-list";
    (category.items || []).forEach(function(item, index){
      const card = makeCard(group, category, item, index, state);
      if (card) list.appendChild(card);
    });
    count.textContent = String(list.querySelectorAll("input[type='checkbox']").length);

    summary.appendChild(heading);
    summary.appendChild(meta);
    details.appendChild(summary);
    details.appendChild(list);
    return list.children.length ? details : null;
  }

  function makeGroup(group, state){
    const details = document.createElement("details");
    details.className = "attire-v55-group";
    details.dataset.bathGroup = group.key;
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v55-group-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v55-group-heading";
    const title = document.createElement("span");
    title.className = "attire-v55-group-title";
    title.textContent = group.title;
    const note = document.createElement("span");
    note.className = "attire-v55-group-note";
    note.textContent = group.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v55-count";

    const list = document.createElement("div");
    list.className = "attire-v55-category-list";
    (group.categories || []).forEach(function(category){
      const node = makeCategory(group, category, state);
      if (node) list.appendChild(node);
    });
    count.textContent = String(list.querySelectorAll("input[type='checkbox']").length);

    summary.appendChild(heading);
    summary.appendChild(count);
    details.appendChild(summary);
    details.appendChild(list);
    return list.children.length ? details : null;
  }

  function refreshIndexes(){
    setTimeout(function(){
      try{
        if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") window.ShimaChannelSearch.invalidate();
      }catch(_){ }
      try{
        if (window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh();
      }catch(_){ }
    }, 30);
  }

  function render(container){
    const root = contentRoot(container);
    const data = window.SHIMA_ATTIRE_BATH_DISCOVERY_V1;
    if (!root || !data || !Array.isArray(data.groups)) return null;
    if (root.querySelector("." + CHECKBOX_CLASS)) return window.__SHIMA_ATTIRE_BATH_DISCOVERY_V1__.lastReport;

    injectStyle();
    const state = {
      candidates:0,
      added:0,
      skippedPrompt:0,
      skippedId:0,
      skippedItems:[],
      byGroup:{},
      index:existingIndex(root)
    };

    const shelf = document.createElement("details");
    shelf.className = SOURCE_CLASS;
    shelf.dataset.bathDiscovery = "v1";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v55-main-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v55-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "attire-v55-eyebrow";
    eyebrow.textContent = "NEW ATTIRE ROUTE / 埋もれない衣装入口";
    const title = document.createElement("span");
    title.className = "attire-v55-main-title";
    title.textContent = "♨️ 湯浴み・湯上がり＋第1便18着";
    const note = document.createElement("span");
    note.className = "attire-v55-main-note";
    note.textContent = "湯上がり定番7セットを再発見し、新規18着を用途別に追加。衣装一覧の先頭から探せます。";
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v55-main-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "attire-v55-body";
    const guide = document.createElement("div");
    guide.className = "attire-v55-guide";
    guide.textContent = "湯浴み棚には既存衣装を場面向けに整えた『再発見セット』7件と新規5着。第1便棚には残りの新規13着を用途別に配置しています。元の棚と語は削除せず、すべて通常Positiveへ出力します。";
    body.appendChild(guide);

    const status = document.createElement("div");
    status.className = "attire-v55-status";
    const statusLabel = document.createElement("span");
    statusLabel.className = "attire-v55-status-label";
    statusLabel.textContent = "DISCOVERY STATUS";
    const total = document.createElement("span");
    total.className = "attire-v55-status-chip";
    total.dataset.bathStatus = "total";
    const wave1 = document.createElement("span");
    wave1.className = "attire-v55-status-chip";
    wave1.dataset.bathStatus = "wave1";
    const rediscovery = document.createElement("span");
    rediscovery.className = "attire-v55-status-chip";
    rediscovery.dataset.bathStatus = "rediscovery";
    status.appendChild(statusLabel);
    status.appendChild(total);
    status.appendChild(wave1);
    status.appendChild(rediscovery);
    body.appendChild(status);

    const groupList = document.createElement("div");
    groupList.className = "attire-v55-group-list";
    data.groups.forEach(function(group){
      const node = makeGroup(group, state);
      if (node) groupList.appendChild(node);
    });
    body.appendChild(groupList);

    count.textContent = String(body.querySelectorAll("input[type='checkbox']").length);
    shelf.appendChild(summary);
    shelf.appendChild(body);
    if (state.added) root.appendChild(shelf);
    updateStatus(shelf);

    const report = {
      version:data.version || "1.0.0",
      expectedCount:Number(data.expectedCount || 0),
      expectedWave1Count:Number(data.expectedWave1Count || 0),
      expectedCategories:Number(data.expectedCategories || 0),
      candidates:state.candidates,
      added:state.added,
      skippedPrompt:state.skippedPrompt,
      skippedId:state.skippedId,
      skippedItems:state.skippedItems,
      byGroup:state.byGroup,
      categories:groupList.querySelectorAll(".attire-v55-category").length,
      initialOpen:shelf.open,
      initialSelected:Number(shelf.dataset.bathSelected || 0)
    };
    window.__SHIMA_ATTIRE_BATH_DISCOVERY_V1__.lastReport = report;

    setTimeout(function(){
      try{
        if (window.__SHIMA_ATTIRE_CATALOG_V1__ && typeof window.__SHIMA_ATTIRE_CATALOG_V1__.organize === "function") {
          window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container);
        }
      }catch(_){ }
    }, 0);
    refreshIndexes();
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

  window.__SHIMA_ATTIRE_BATH_DISCOVERY_V1__ = {
    version:"1.0.0",
    render:render,
    updateStatus:function(){ return updateStatus(document.querySelector("." + SOURCE_CLASS)); },
    getSelectionState:function(){
      const shelf = document.querySelector("." + SOURCE_CLASS);
      return shelf ? selectionState(shelf) : { total:0, wave1:0, rediscovery:0 };
    },
    lastReport:null
  };

  function syncState(){
    setTimeout(function(){
      try{ window.__SHIMA_ATTIRE_BATH_DISCOVERY_V1__.updateStatus(); }catch(_){ }
      refreshIndexes();
    }, 30);
  }
  window.addEventListener("builderHistoryRestored", syncState);
  document.addEventListener("builderResetAll", syncState, true);
  document.addEventListener("click", function(event){
    if (event.target && event.target.closest && event.target.closest(".category-reset-btn")) syncState();
  }, true);

  function register(retry){
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      setTimeout(function(){
        try{ if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }
        catch(_){ }
      }, 20);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ register((retry || 0) + 1); }, 100);
  }

  register(0);
  console.log("♨️ Loaded: ./ext_attire_bath_discovery.v1.js v1.0.0");
})();
