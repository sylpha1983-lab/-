(function(){
  "use strict";

  const VERSION = 47;
  const KEY = "attire";
  const STYLE_ID = "shima-aqua-wardrobe-v1-style";
  const SOURCE_CLASS = "attire-v47-aqua-wardrobe";
  const CHECKBOX_CLASS = "attire-v47-aqua-checkbox";

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
.attire-v47-aqua-wardrobe, .attire-v47-aqua-wardrobe * { box-sizing:border-box; }
.attire-v47-aqua-wardrobe {
  display:block; width:100%; max-width:100%; min-width:0; margin:12px 0;
  border:1px solid rgba(62,157,181,.40); border-radius:18px; overflow:hidden;
  background:linear-gradient(155deg, rgba(255,255,255,.99), rgba(228,249,251,.96));
  box-shadow:0 9px 26px rgba(48,116,139,.12);
}
.attire-v47-main-summary {
  display:flex !important; align-items:center; gap:10px; width:100%; min-width:0;
  padding:13px !important; list-style:none; cursor:pointer; color:#153f4c !important;
  background:linear-gradient(135deg, rgba(248,254,255,.99), rgba(205,244,244,.97)) !important;
}
.attire-v47-main-summary::-webkit-details-marker,
.attire-v47-group-summary::-webkit-details-marker,
.attire-v47-category-summary::-webkit-details-marker { display:none; }
.attire-v47-main-summary::before { content:"▶"; flex:0 0 auto; color:#288c9b; }
.attire-v47-aqua-wardrobe[open] > .attire-v47-main-summary::before { transform:rotate(90deg); }
.attire-v47-main-heading { flex:1 1 auto; min-width:0; }
.attire-v47-eyebrow { display:block; color:#167f88; font-size:10px; line-height:1.2; font-weight:900; letter-spacing:.16em; }
.attire-v47-main-title { display:block; margin-top:2px; font-size:17px; line-height:1.32; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-main-note { display:block; margin-top:3px; color:#5b7881; font-size:11px; line-height:1.45; font-weight:680; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-main-count { flex:0 0 auto; min-width:50px; padding:5px 9px; border-radius:999px; border:1px solid rgba(54,148,163,.22); background:rgba(255,255,255,.86); color:#216975; text-align:center; font-size:12px; font-weight:900; }
.attire-v47-body,
.attire-v47-aqua-wardrobe[open] > .attire-v47-body {
  display:flex !important; flex-direction:column !important; gap:9px; width:100% !important; max-width:100% !important; min-width:0 !important; padding:10px !important;
}
.attire-v47-guide { padding:10px 11px; border:1px dashed rgba(54,144,158,.38); border-radius:12px; background:rgba(251,255,255,.90); color:#3d6670; font-size:11px; line-height:1.58; font-weight:700; overflow-wrap:anywhere; }
.attire-v47-flow { display:flex !important; flex-wrap:wrap; gap:6px; width:100%; min-width:0; }
.attire-v47-flow-step { flex:1 1 180px; min-width:0; padding:8px; border:1px solid rgba(87,154,166,.24); border-radius:10px; background:rgba(255,255,255,.84); color:#57727a; font-size:10px; line-height:1.42; font-weight:720; text-align:center; }
.attire-v47-flow-step strong { display:block; margin-bottom:2px; color:#205a66; font-size:11px; }
.attire-v47-status { display:flex; flex-wrap:wrap; align-items:center; gap:7px; padding:8px 9px; border:1px solid rgba(67,150,163,.26); border-radius:11px; background:rgba(233,250,250,.93); }
.attire-v47-status-label { color:#4e737b; font-size:10px; font-weight:900; letter-spacing:.08em; }
.attire-v47-status-chip { padding:4px 8px; border:1px solid rgba(66,145,157,.24); border-radius:999px; background:#fff; color:#286b74; font-size:10px; font-weight:900; }
.attire-v47-group-list,
.attire-v47-category-list,
.attire-v47-card-list { display:flex !important; flex-direction:column !important; gap:7px; width:100%; max-width:100%; min-width:0; }
.attire-v47-group { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(83,151,165,.30); border-radius:13px; overflow:hidden; background:rgba(255,255,255,.90); }
.attire-v47-group-summary {
  display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:11px !important; list-style:none; cursor:pointer;
  color:#1f4c57 !important; background:linear-gradient(135deg, rgba(249,254,255,.99), rgba(221,247,243,.95)) !important;
}
.attire-v47-group-summary::before { content:"▶"; flex:0 0 auto; color:#438f98; }
.attire-v47-group[open] > .attire-v47-group-summary::before { transform:rotate(90deg); }
.attire-v47-group-heading, .attire-v47-category-heading { flex:1 1 auto; min-width:0; }
.attire-v47-group-title { display:block; font-size:14px; line-height:1.36; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-group-note { display:block; margin-top:2px; color:#68838a; font-size:10px; line-height:1.45; font-weight:650; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-count { flex:0 0 auto; min-width:38px; padding:4px 8px; border-radius:999px; background:rgba(196,238,234,.78); color:#326e76; text-align:center; font-size:10px; font-weight:900; }
.attire-v47-category-list,
.attire-v47-group[open] > .attire-v47-category-list { display:flex !important; flex-direction:column !important; gap:7px; padding:7px; }
.attire-v47-category { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(98,153,164,.27); border-radius:11px; overflow:hidden; background:rgba(255,255,255,.96); }
.attire-v47-category-summary {
  display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:10px !important; list-style:none; cursor:pointer;
  color:#244d57 !important; background:linear-gradient(135deg, rgba(252,255,255,.99), rgba(235,249,247,.95)) !important;
}
.attire-v47-category-summary::before { content:"▶"; flex:0 0 auto; color:#679aa3; }
.attire-v47-category[open] > .attire-v47-category-summary::before { transform:rotate(90deg); }
.attire-v47-category-title { display:block; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-category-note { display:block; margin-top:2px; color:#73898f; font-size:10px; line-height:1.43; font-weight:620; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-category-meta { flex:0 0 auto; display:flex; flex-direction:column; align-items:flex-end; gap:3px; }
.attire-v47-category-mode { padding:3px 7px; border-radius:999px; background:#f0f5f6; color:#64757b; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v47-category-mode[data-mode='single'] { background:#fff5d9; color:#7a642c; }
.attire-v47-card-list,
.attire-v47-category[open] > .attire-v47-card-list { display:flex !important; flex-direction:column !important; gap:7px; padding:7px; }
.attire-v47-card { display:flex !important; align-items:flex-start; gap:9px; width:100% !important; max-width:100% !important; min-width:0 !important; min-height:0; margin:0 !important; padding:9px !important; border:1px solid rgba(96,151,162,.28); border-radius:10px; background:rgba(255,255,255,.99); color:#234650 !important; cursor:pointer; }
.attire-v47-card:hover { border-color:rgba(43,153,162,.60); background:#fbffff; }
.attire-v47-card:has(input:checked) { border-color:rgba(35,157,148,.78); background:linear-gradient(135deg, rgba(228,253,248,.99), rgba(246,253,255,.99)); box-shadow:0 0 0 1px rgba(59,181,171,.17) inset; }
.attire-v47-card > input[type='checkbox'] { flex:0 0 auto; width:24px !important; height:24px !important; margin:2px 0 0 !important; accent-color:#249f99; }
.attire-v47-card-main { display:flex; flex:1 1 auto; flex-direction:column; gap:3px; min-width:0; }
.attire-v47-name { color:#194853; font-size:13px; line-height:1.36; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-description { padding:5px 7px; border-left:3px solid rgba(44,155,161,.46); border-radius:5px; background:rgba(231,249,247,.72); color:#426c73; font-size:10px; line-height:1.48; font-weight:700; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-prompt { color:#71878d; font:10px/1.40 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; overflow-wrap:anywhere; word-break:normal; }
.attire-v47-badge { flex:0 0 auto; padding:3px 7px; border-radius:999px; background:#e8f7f8; color:#38737d; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v47-card[data-aqua-kind='set'] .attire-v47-badge { background:#fff1d1; color:#816125; }
.attire-v47-card[data-aqua-kind='part'] .attire-v47-badge { background:#eeeafe; color:#65558b; }
.attire-v47-card > .zero-favorite-star { flex:0 0 auto; margin-left:0 !important; }
@media (max-width:760px) {
  .attire-v47-body, .attire-v47-aqua-wardrobe[open] > .attire-v47-body,
  .attire-v47-group-list, .attire-v47-category-list, .attire-v47-card-list,
  .attire-v47-group[open] > .attire-v47-category-list,
  .attire-v47-category[open] > .attire-v47-card-list { display:flex !important; flex-direction:column !important; width:100% !important; max-width:100% !important; min-width:0 !important; }
  .attire-v47-flow { flex-direction:column !important; }
  .attire-v47-flow-step { flex:0 0 auto; width:100%; }
  .attire-v47-main-summary { padding:11px 10px !important; }
  .attire-v47-body { padding:8px !important; }
  .attire-v47-card { align-items:flex-start; }
  .attire-v47-main-title, .attire-v47-main-note, .attire-v47-guide, .attire-v47-flow-step,
  .attire-v47-group-title, .attire-v47-group-note, .attire-v47-category-title, .attire-v47-category-note,
  .attire-v47-name, .attire-v47-description, .attire-v47-prompt {
    writing-mode:horizontal-tb !important; text-orientation:mixed !important; word-break:normal !important; overflow-wrap:anywhere !important;
  }
}
`;
    document.head.appendChild(style);
  }

  function selectionState(shelf){
    const checked = Array.from(shelf.querySelectorAll("input." + CHECKBOX_CLASS + ":checked"));
    return checked.reduce(function(state, input){
      state.total += 1;
      if (input.dataset.aquaKind === "set") state.sets += 1;
      else if (input.dataset.aquaKind === "part") state.parts += 1;
      else state.swimwear += 1;
      const group = input.dataset.aquaGroup || "unknown";
      state.byGroup[group] = (state.byGroup[group] || 0) + 1;
      return state;
    }, { total:0, sets:0, swimwear:0, parts:0, byGroup:{} });
  }

  function updateStatus(shelf){
    if (!shelf) return null;
    const state = selectionState(shelf);
    const total = shelf.querySelector("[data-aqua-status='total']");
    const sets = shelf.querySelector("[data-aqua-status='sets']");
    const parts = shelf.querySelector("[data-aqua-status='parts']");
    if (total) total.textContent = "選択中 " + state.total;
    if (sets) sets.textContent = "完成セット " + state.sets;
    if (parts) parts.textContent = "専用部品 " + state.parts;
    shelf.dataset.aquaSelected = String(state.total);
    return state;
  }

  function makeCard(group, category, item, index, state){
    const rawSlug = item && item.slug || (category.key + "-" + index);
    const slug = String(rawSlug).replace(/[^a-z0-9_-]+/gi, "-");
    const name = String(item && item.ja || slug);
    const prompt = String(item && item.en || "").trim();
    const description = String(item && item.description || "").trim();
    const kind = category.kind || group.kind || "item";
    const id = "attire-aqua-v47-" + group.key + "-" + category.key + "-" + slug;
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
    label.className = "attire-v47-card";
    label.dataset.aquaKind = kind;
    label.dataset.aquaGroup = group.key;
    label.dataset.aquaCategory = category.key;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.aquaId = group.key + "/" + category.key + "/" + slug;
    input.dataset.aquaName = name;
    input.dataset.aquaKind = kind;
    input.dataset.aquaGroup = group.key;
    input.dataset.aquaSelection = category.selection || group.selection || "single";
    if (description) input.dataset.aquaDescription = description;
    input.addEventListener("change", function(){ updateStatus(input.closest("." + SOURCE_CLASS)); });

    const main = document.createElement("span");
    main.className = "attire-v47-card-main";
    const title = document.createElement("span");
    title.className = "attire-v47-name";
    title.textContent = name;
    main.appendChild(title);
    if (description) {
      const descriptionNode = document.createElement("span");
      descriptionNode.className = "attire-v47-description";
      descriptionNode.textContent = description;
      main.appendChild(descriptionNode);
    }
    const promptNode = document.createElement("span");
    promptNode.className = "attire-v47-prompt";
    promptNode.textContent = prompt;
    main.appendChild(promptNode);

    const badge = document.createElement("span");
    badge.className = "attire-v47-badge";
    badge.textContent = kind === "set" ? "SET · POS" : kind === "part" ? "PART · POS" : "SWIM · POS";

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
    details.className = "attire-v47-category";
    details.dataset.aquaCategory = category.key;
    details.dataset.aquaSelection = category.selection || group.selection || "single";
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v47-category-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v47-category-heading";
    const title = document.createElement("span");
    title.className = "attire-v47-category-title";
    title.textContent = category.title;
    const note = document.createElement("span");
    note.className = "attire-v47-category-note";
    note.textContent = category.note || "";
    heading.appendChild(title);
    heading.appendChild(note);

    const meta = document.createElement("span");
    meta.className = "attire-v47-category-meta";
    const count = document.createElement("span");
    count.className = "attire-v47-count";
    const mode = document.createElement("span");
    mode.className = "attire-v47-category-mode";
    mode.dataset.mode = category.selection || group.selection || "single";
    mode.textContent = mode.dataset.mode === "multi" ? "複数OK" : "1つ推奨";
    meta.appendChild(count);
    meta.appendChild(mode);

    const list = document.createElement("div");
    list.className = "attire-v47-card-list";
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
    details.className = "attire-v47-group";
    details.dataset.aquaGroup = group.key;
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v47-group-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v47-group-heading";
    const title = document.createElement("span");
    title.className = "attire-v47-group-title";
    title.textContent = group.title;
    const note = document.createElement("span");
    note.className = "attire-v47-group-note";
    note.textContent = group.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v47-count";

    const list = document.createElement("div");
    list.className = "attire-v47-category-list";
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

  function flowStep(number, title, note){
    const step = document.createElement("div");
    step.className = "attire-v47-flow-step";
    const strong = document.createElement("strong");
    strong.textContent = number + " " + title;
    step.appendChild(strong);
    step.appendChild(document.createTextNode(note));
    return step;
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
    const data = window.SHIMA_AQUA_WARDROBE_V1;
    if (!root || !data || !Array.isArray(data.groups)) return null;
    if (root.querySelector("." + CHECKBOX_CLASS)) return window.__SHIMA_AQUA_WARDROBE_V1__.lastReport;

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
    shelf.dataset.aquaWardrobe = "v1";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v47-main-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v47-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "attire-v47-eyebrow";
    eyebrow.textContent = "AQUA WARDROBE / 水着アカシックレコード";
    const title = document.createElement("span");
    title.className = "attire-v47-main-title";
    title.textContent = "🌊 水着特化コレクション";
    const note = document.createElement("span");
    note.className = "attire-v47-main-note";
    note.textContent = "完成セット80・水着240・専用部品40。サッと選ぶ時も、細部まで組む時もここで完結。";
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v47-main-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "attire-v47-body";
    const guide = document.createElement("div");
    guide.className = "attire-v47-guide";
    guide.textContent = "迷ったら『おまかせ完成水着』、形から選ぶなら各水着棚、最後に必要な時だけ『水着専用カスタム』を追加。すべて通常Positiveへ出力し、人物・背景・品質・R-18表現は固定しません。";
    body.appendChild(guide);

    const flow = document.createElement("div");
    flow.className = "attire-v47-flow";
    flow.appendChild(flowStep("1", "すぐ決める", "完成水着かカバーアップコーデを1つ選ぶ"));
    flow.appendChild(flowStep("2", "形から探す", "ワンピース、ビキニ、競泳などから1着選ぶ"));
    flow.appendChild(flowStep("3", "水着だけ調整", "ストラップ、範囲、素材、機能を必要な分だけ足す"));
    body.appendChild(flow);

    const status = document.createElement("div");
    status.className = "attire-v47-status";
    const statusLabel = document.createElement("span");
    statusLabel.className = "attire-v47-status-label";
    statusLabel.textContent = "AQUA STATUS";
    const total = document.createElement("span");
    total.className = "attire-v47-status-chip";
    total.dataset.aquaStatus = "total";
    const sets = document.createElement("span");
    sets.className = "attire-v47-status-chip";
    sets.dataset.aquaStatus = "sets";
    const parts = document.createElement("span");
    parts.className = "attire-v47-status-chip";
    parts.dataset.aquaStatus = "parts";
    status.appendChild(statusLabel);
    status.appendChild(total);
    status.appendChild(sets);
    status.appendChild(parts);
    body.appendChild(status);

    const groupList = document.createElement("div");
    groupList.className = "attire-v47-group-list";
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
      expectedCategories:Number(data.expectedCategories || 0),
      candidates:state.candidates,
      added:state.added,
      skippedPrompt:state.skippedPrompt,
      skippedId:state.skippedId,
      skippedItems:state.skippedItems,
      byGroup:state.byGroup,
      categories:groupList.querySelectorAll(".attire-v47-category").length,
      initialOpen:shelf.open,
      initialSelected:Number(shelf.dataset.aquaSelected || 0)
    };
    window.__SHIMA_AQUA_WARDROBE_V1__.lastReport = report;

    setTimeout(function(){
      try{
        if (window.__SHIMA_ATTIRE_CATALOG_V1__ && typeof window.__SHIMA_ATTIRE_CATALOG_V1__.organize === "function") window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container);
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

  window.__SHIMA_AQUA_WARDROBE_V1__ = {
    version:"1.0.0",
    render:render,
    updateStatus:function(){ return updateStatus(document.querySelector("." + SOURCE_CLASS)); },
    getSelectionState:function(){
      const shelf = document.querySelector("." + SOURCE_CLASS);
      return shelf ? selectionState(shelf) : { total:0, sets:0, swimwear:0, parts:0, byGroup:{} };
    },
    lastReport:null
  };

  function syncState(){
    setTimeout(function(){
      try{ window.__SHIMA_AQUA_WARDROBE_V1__.updateStatus(); }catch(_){ }
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
  console.log("🌊 Loaded: ./ext_attire_aqua_wardrobe.v1.js v1.0.0");
})();
