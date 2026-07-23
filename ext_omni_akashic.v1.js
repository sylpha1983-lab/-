(function(){
  "use strict";

  const STYLE_ID = "shima-omni-akashic-v1-style";
  const SHELF_CLASS = "shima-v50-specialty";
  const CHECKBOX_CLASS = "shima-v50-specialty-checkbox";

  function safeSlug(value){
    return String(value || "item").toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "") || "item";
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

  function contentRoot(collection, container){
    const host = document.querySelector("#list-" + collection.section) || container;
    if (!host) return null;
    return host.querySelector(".section-content") || host;
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
.shima-v50-specialty, .shima-v50-specialty * { box-sizing:border-box; }
.shima-v50-specialty {
  --omni-accent:#2a929b; --omni-soft:#dff6f3; --omni-ink:#173f4a;
  display:block; width:100%; max-width:100%; min-width:0; margin:12px 0;
  border:1px solid color-mix(in srgb, var(--omni-accent) 38%, transparent); border-radius:18px; overflow:hidden;
  background:linear-gradient(155deg, rgba(255,255,255,.99), rgba(235,249,251,.97));
  box-shadow:0 9px 26px rgba(48,116,139,.11);
}
.shima-v50-specialty[data-omni-tone='mint'] { --omni-accent:#298b73; --omni-soft:#ddf5e9; --omni-ink:#1c4b41; }
.shima-v50-specialty[data-omni-tone='steel'] { --omni-accent:#537d9c; --omni-soft:#e5eff6; --omni-ink:#243f54; }
.shima-v50-specialty[data-omni-tone='sky'] { --omni-accent:#3b88ad; --omni-soft:#e0f2fa; --omni-ink:#19465c; }
.shima-v50-specialty[data-omni-tone='violet'] { --omni-accent:#7861a8; --omni-soft:#eee9fb; --omni-ink:#41345d; }
.shima-v50-specialty[data-omni-tone='rose'] { --omni-accent:#a86b83; --omni-soft:#f8e8ee; --omni-ink:#5c3545; }
.shima-v50-specialty[data-omni-tone='amber'] { --omni-accent:#9a742b; --omni-soft:#fbf0d6; --omni-ink:#57451e; }
.shima-v50-main-summary {
  display:flex !important; align-items:center; gap:10px; width:100%; min-width:0;
  padding:13px !important; list-style:none; cursor:pointer; color:var(--omni-ink) !important;
  background:linear-gradient(135deg, rgba(251,255,255,.99), var(--omni-soft)) !important;
}
.shima-v50-main-summary::-webkit-details-marker,
.shima-v50-group-summary::-webkit-details-marker,
.shima-v50-category-summary::-webkit-details-marker { display:none; }
.shima-v50-main-summary::before { content:"▶"; flex:0 0 auto; color:var(--omni-accent); }
.shima-v50-specialty[open] > .shima-v50-main-summary::before { transform:rotate(90deg); }
.shima-v50-main-heading, .shima-v50-group-heading, .shima-v50-category-heading { flex:1 1 auto; min-width:0; }
.shima-v50-eyebrow { display:block; color:var(--omni-accent); font-size:10px; line-height:1.2; font-weight:900; letter-spacing:.14em; }
.shima-v50-main-title { display:block; margin-top:2px; font-size:17px; line-height:1.34; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-main-note { display:block; margin-top:3px; color:#5b7881; font-size:11px; line-height:1.48; font-weight:680; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-main-count { flex:0 0 auto; min-width:50px; padding:5px 9px; border:1px solid rgba(65,125,139,.20); border-radius:999px; background:rgba(255,255,255,.88); color:var(--omni-accent); text-align:center; font-size:12px; font-weight:900; }
.shima-v50-body, .shima-v50-specialty[open] > .shima-v50-body,
.shima-v50-group-list, .shima-v50-category-list, .shima-v50-card-list {
  display:flex !important; flex-direction:column !important; width:100% !important; max-width:100% !important; min-width:0 !important;
}
.shima-v50-body { gap:9px; padding:10px !important; }
.shima-v50-guide { padding:10px 11px; border:1px dashed color-mix(in srgb, var(--omni-accent) 38%, transparent); border-radius:12px; background:rgba(252,255,255,.93); color:#3d6670; font-size:11px; line-height:1.58; font-weight:700; overflow-wrap:anywhere; }
.shima-v50-status { display:flex; flex-wrap:wrap; align-items:center; gap:7px; padding:8px 9px; border:1px solid rgba(67,150,163,.23); border-radius:11px; background:color-mix(in srgb, var(--omni-soft) 72%, white); }
.shima-v50-status-label { color:var(--omni-accent); font-size:10px; font-weight:900; letter-spacing:.08em; }
.shima-v50-status-chip { padding:4px 8px; border:1px solid rgba(66,145,157,.22); border-radius:999px; background:#fff; color:#396a72; font-size:10px; font-weight:900; }
.shima-v50-group-list, .shima-v50-category-list, .shima-v50-card-list { gap:7px; }
.shima-v50-group { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(83,151,165,.28); border-radius:13px; overflow:hidden; background:rgba(255,255,255,.92); }
.shima-v50-group-summary {
  display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:11px !important; list-style:none; cursor:pointer;
  color:var(--omni-ink) !important; background:linear-gradient(135deg, rgba(250,254,255,.99), color-mix(in srgb, var(--omni-soft) 80%, white)) !important;
}
.shima-v50-group-summary::before { content:"▶"; flex:0 0 auto; color:var(--omni-accent); }
.shima-v50-group[open] > .shima-v50-group-summary::before { transform:rotate(90deg); }
.shima-v50-group-title { display:block; font-size:14px; line-height:1.36; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-group-note { display:block; margin-top:2px; color:#68838a; font-size:10px; line-height:1.45; font-weight:650; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-count { flex:0 0 auto; min-width:38px; padding:4px 8px; border-radius:999px; background:color-mix(in srgb, var(--omni-soft) 86%, white); color:var(--omni-accent); text-align:center; font-size:10px; font-weight:900; }
.shima-v50-category-list, .shima-v50-group[open] > .shima-v50-category-list { padding:7px; }
.shima-v50-category { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(98,153,164,.25); border-radius:11px; overflow:hidden; background:rgba(255,255,255,.97); }
.shima-v50-category-summary {
  display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:10px !important; list-style:none; cursor:pointer;
  color:#244d57 !important; background:linear-gradient(135deg, rgba(253,255,255,.99), rgba(239,249,248,.95)) !important;
}
.shima-v50-category-summary::before { content:"▶"; flex:0 0 auto; color:#679aa3; }
.shima-v50-category[open] > .shima-v50-category-summary::before { transform:rotate(90deg); }
.shima-v50-category-title { display:block; font-size:13px; line-height:1.36; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-category-note { display:block; margin-top:2px; color:#73898f; font-size:10px; line-height:1.44; font-weight:620; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-category-meta { flex:0 0 auto; display:flex; flex-direction:column; align-items:flex-end; gap:3px; }
.shima-v50-category-mode { padding:3px 7px; border-radius:999px; background:#eff5f6; color:#65767c; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.shima-v50-category-mode[data-mode='single'] { background:#fff4d6; color:#7a642c; }
.shima-v50-card-list, .shima-v50-category[open] > .shima-v50-card-list { padding:7px; }
.shima-v50-card { display:flex !important; align-items:flex-start; gap:9px; width:100% !important; max-width:100% !important; min-width:0 !important; min-height:0; margin:0 !important; padding:9px !important; border:1px solid rgba(96,151,162,.27); border-radius:10px; background:rgba(255,255,255,.99); color:#234650 !important; cursor:pointer; }
.shima-v50-card:hover { border-color:color-mix(in srgb, var(--omni-accent) 62%, transparent); background:#fbffff; }
.shima-v50-card:has(input:checked) { border-color:var(--omni-accent); background:linear-gradient(135deg, color-mix(in srgb, var(--omni-soft) 76%, white), rgba(249,253,255,.99)); box-shadow:0 0 0 1px color-mix(in srgb, var(--omni-accent) 18%, transparent) inset; }
.shima-v50-card > input[type='checkbox'] { flex:0 0 auto; width:24px !important; height:24px !important; margin:2px 0 0 !important; accent-color:var(--omni-accent); }
.shima-v50-card-main { display:flex; flex:1 1 auto; flex-direction:column; gap:3px; min-width:0; }
.shima-v50-name { color:var(--omni-ink); font-size:13px; line-height:1.36; font-weight:900; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-description { padding:5px 7px; border-left:3px solid color-mix(in srgb, var(--omni-accent) 54%, transparent); border-radius:5px; background:color-mix(in srgb, var(--omni-soft) 60%, white); color:#426c73; font-size:10px; line-height:1.48; font-weight:700; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-prompt { color:#71878d; font:10px/1.40 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; overflow-wrap:anywhere; word-break:normal; }
.shima-v50-badge { flex:0 0 auto; padding:3px 7px; border-radius:999px; background:#e8f7f8; color:#38737d; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.shima-v50-card[data-omni-kind='set'] .shima-v50-badge { background:#fff1d1; color:#816125; }
.shima-v50-card[data-omni-kind='part'] .shima-v50-badge { background:#eeeafe; color:#65558b; }
.shima-v50-card > .zero-favorite-star { flex:0 0 auto; margin-left:0 !important; }
@media (max-width:760px) {
  .shima-v50-body, .shima-v50-specialty[open] > .shima-v50-body,
  .shima-v50-group-list, .shima-v50-category-list, .shima-v50-card-list,
  .shima-v50-group[open] > .shima-v50-category-list,
  .shima-v50-category[open] > .shima-v50-card-list { display:flex !important; flex-direction:column !important; width:100% !important; max-width:100% !important; min-width:0 !important; }
  .shima-v50-main-summary { padding:11px 10px !important; }
  .shima-v50-body { padding:8px !important; }
  .shima-v50-main-title, .shima-v50-main-note, .shima-v50-guide,
  .shima-v50-group-title, .shima-v50-group-note, .shima-v50-category-title, .shima-v50-category-note,
  .shima-v50-name, .shima-v50-description, .shima-v50-prompt {
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
      if (input.dataset.omniKind === "set") state.sets += 1;
      else if (input.dataset.omniKind === "part") state.parts += 1;
      else state.items += 1;
      return state;
    }, { total:0, sets:0, items:0, parts:0 });
  }

  function updateStatus(shelf){
    if (!shelf) return null;
    const state = selectionState(shelf);
    const total = shelf.querySelector("[data-omni-status='total']");
    const sets = shelf.querySelector("[data-omni-status='sets']");
    const parts = shelf.querySelector("[data-omni-status='parts']");
    if (total) total.textContent = "選択中 " + state.total;
    if (sets) sets.textContent = "完成形 " + state.sets;
    if (parts) parts.textContent = "後付け " + state.parts;
    shelf.dataset.omniSelected = String(state.total);
    return state;
  }

  function makeCard(collection, group, category, item, index, state){
    const slug = safeSlug(item && item.slug || (category.key + "-" + index));
    const name = String(item && item.ja || slug);
    const prompt = String(item && item.en || "").trim();
    const description = String(item && item.description || "").trim();
    const kind = category.kind || group.kind || "item";
    const idPrefix = safeSlug(collection.idPrefix || ("shima-v50-" + collection.key));
    const id = idPrefix + "-" + safeSlug(group.key) + "-" + safeSlug(category.key) + "-" + slug;
    const normalizedPrompt = normalize(prompt);

    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ collection:collection.key, group:group.key, category:category.key, name:name, prompt:prompt, reason:"prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ collection:collection.key, group:group.key, category:category.key, name:name, prompt:prompt, reason:"id" });
      return null;
    }

    const label = document.createElement("label");
    label.className = "shima-v50-card";
    label.dataset.omniKind = kind;
    label.dataset.omniCollection = collection.key;
    label.dataset.omniGroup = group.key;
    label.dataset.omniCategory = category.key;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS + " shima-v50-" + collection.key + "-checkbox";
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.omniId = collection.key + "/" + group.key + "/" + category.key + "/" + slug;
    input.dataset.omniName = name;
    input.dataset.omniKind = kind;
    input.dataset.omniCollection = collection.key;
    input.dataset.omniGroup = group.key;
    input.dataset.omniSelection = category.selection || group.selection || "single";
    if (description) input.dataset.omniDescription = description;
    input.addEventListener("change", function(){ updateStatus(input.closest("." + SHELF_CLASS)); });

    const main = document.createElement("span");
    main.className = "shima-v50-card-main";
    const title = document.createElement("span");
    title.className = "shima-v50-name";
    title.textContent = name;
    main.appendChild(title);
    if (description) {
      const descriptionNode = document.createElement("span");
      descriptionNode.className = "shima-v50-description";
      descriptionNode.textContent = description;
      main.appendChild(descriptionNode);
    }
    const promptNode = document.createElement("span");
    promptNode.className = "shima-v50-prompt";
    promptNode.textContent = prompt;
    main.appendChild(promptNode);

    const badge = document.createElement("span");
    badge.className = "shima-v50-badge";
    badge.textContent = kind === "set" ? "SET · POS" : kind === "part" ? "PART · POS" : "ITEM · POS";

    label.appendChild(input);
    label.appendChild(main);
    label.appendChild(badge);
    state.index.prompts.add(normalizedPrompt);
    state.index.ids.add(id);
    state.added += 1;
    state.byGroup[group.key] = (state.byGroup[group.key] || 0) + 1;
    return label;
  }

  function makeCategory(collection, group, category, state){
    const details = document.createElement("details");
    details.className = "shima-v50-category";
    details.dataset.omniCategory = category.key;
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "shima-v50-category-summary";
    const heading = document.createElement("span");
    heading.className = "shima-v50-category-heading";
    const title = document.createElement("span");
    title.className = "shima-v50-category-title";
    title.textContent = category.title;
    const note = document.createElement("span");
    note.className = "shima-v50-category-note";
    note.textContent = category.note || "";
    heading.appendChild(title);
    heading.appendChild(note);

    const meta = document.createElement("span");
    meta.className = "shima-v50-category-meta";
    const count = document.createElement("span");
    count.className = "shima-v50-count";
    const mode = document.createElement("span");
    mode.className = "shima-v50-category-mode";
    mode.dataset.mode = category.selection || group.selection || "single";
    mode.textContent = mode.dataset.mode === "multi" ? "複数OK" : "1つ推奨";
    meta.appendChild(count);
    meta.appendChild(mode);

    const list = document.createElement("div");
    list.className = "shima-v50-card-list";
    (category.items || []).forEach(function(item, index){
      const card = makeCard(collection, group, category, item, index, state);
      if (card) list.appendChild(card);
    });
    count.textContent = String(list.querySelectorAll("input[type='checkbox']").length);

    summary.appendChild(heading);
    summary.appendChild(meta);
    details.appendChild(summary);
    details.appendChild(list);
    return list.children.length ? details : null;
  }

  function makeGroup(collection, group, state){
    const details = document.createElement("details");
    details.className = "shima-v50-group";
    details.dataset.omniGroup = group.key;
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "shima-v50-group-summary";
    const heading = document.createElement("span");
    heading.className = "shima-v50-group-heading";
    const title = document.createElement("span");
    title.className = "shima-v50-group-title";
    title.textContent = group.title;
    const note = document.createElement("span");
    note.className = "shima-v50-group-note";
    note.textContent = group.note || "";
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "shima-v50-count";

    const list = document.createElement("div");
    list.className = "shima-v50-category-list";
    (group.categories || []).forEach(function(category){
      const node = makeCategory(collection, group, category, state);
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
    clearTimeout(window.__SHIMA_OMNI_AKASHIC_REFRESH_TIMER__);
    window.__SHIMA_OMNI_AKASHIC_REFRESH_TIMER__ = setTimeout(function(){
      try{
        if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") window.ShimaChannelSearch.invalidate();
      }catch(_){ }
      try{
        if (window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh();
      }catch(_){ }
    }, 50);
  }

  function renderCollection(collection, container){
    const root = contentRoot(collection, container);
    if (!root || !collection || !Array.isArray(collection.groups)) return null;
    const existingShelf = root.querySelector("." + SHELF_CLASS + "[data-omni-collection='" + collection.key + "']");
    if (existingShelf) return window.__SHIMA_OMNI_AKASHIC_V1__.reports[collection.key] || null;

    injectStyle();
    const state = {
      candidates:0, added:0, skippedPrompt:0, skippedId:0, skippedItems:[], byGroup:{}, index:existingIndex(root)
    };

    const shelf = document.createElement("details");
    shelf.className = SHELF_CLASS + " shima-v50-" + collection.key;
    shelf.dataset.omniCollection = collection.key;
    shelf.dataset.omniTone = collection.tone || "aqua";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "shima-v50-main-summary";
    const heading = document.createElement("span");
    heading.className = "shima-v50-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "shima-v50-eyebrow";
    eyebrow.textContent = collection.eyebrow || "SHIMA SPECIALTY";
    const title = document.createElement("span");
    title.className = "shima-v50-main-title";
    title.textContent = collection.title;
    const note = document.createElement("span");
    note.className = "shima-v50-main-note";
    note.textContent = collection.note || "";
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "shima-v50-main-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "shima-v50-body";
    const guide = document.createElement("div");
    guide.className = "shima-v50-guide";
    guide.textContent = collection.guide || "完成形から選ぶか、必要な部品だけを追加できます。";
    body.appendChild(guide);

    const status = document.createElement("div");
    status.className = "shima-v50-status";
    const statusLabel = document.createElement("span");
    statusLabel.className = "shima-v50-status-label";
    statusLabel.textContent = "SPECIALTY STATUS";
    const total = document.createElement("span");
    total.className = "shima-v50-status-chip";
    total.dataset.omniStatus = "total";
    const sets = document.createElement("span");
    sets.className = "shima-v50-status-chip";
    sets.dataset.omniStatus = "sets";
    const parts = document.createElement("span");
    parts.className = "shima-v50-status-chip";
    parts.dataset.omniStatus = "parts";
    status.appendChild(statusLabel);
    status.appendChild(total);
    status.appendChild(sets);
    status.appendChild(parts);
    body.appendChild(status);

    const groupList = document.createElement("div");
    groupList.className = "shima-v50-group-list";
    collection.groups.forEach(function(group){
      const node = makeGroup(collection, group, state);
      if (node) groupList.appendChild(node);
    });
    body.appendChild(groupList);

    count.textContent = String(body.querySelectorAll("input[type='checkbox']").length);
    shelf.appendChild(summary);
    shelf.appendChild(body);
    if (state.added) root.appendChild(shelf);
    updateStatus(shelf);

    const report = {
      collection:collection.key,
      section:collection.section,
      expectedCount:Number(collection.expectedCount || 0),
      expectedCategories:Number(collection.expectedCategories || 0),
      candidates:state.candidates,
      added:state.added,
      skippedPrompt:state.skippedPrompt,
      skippedId:state.skippedId,
      skippedItems:state.skippedItems,
      byGroup:state.byGroup,
      groups:groupList.querySelectorAll(".shima-v50-group").length,
      categories:groupList.querySelectorAll(".shima-v50-category").length,
      initialOpen:shelf.open,
      initialSelected:Number(shelf.dataset.omniSelected || 0)
    };
    window.__SHIMA_OMNI_AKASHIC_V1__.reports[collection.key] = report;
    if (collection.section === "attire") {
      try{
        if (window.__SHIMA_ATTIRE_CATALOG_V1__ && typeof window.__SHIMA_ATTIRE_CATALOG_V1__.organize === "function") {
          const organized = window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container);
          if (!organized) {
            setTimeout(function(){
              try{ window.__SHIMA_ATTIRE_CATALOG_V1__.organize(container); }catch(_){ }
            }, 25);
          }
        }
      }catch(_){ }
    }
    refreshIndexes();
    return report;
  }

  function makeApi(collection){
    return {
      initUI:function(container){ renderCollection(collection, container); },
      getTags:function(){
        return Array.from(document.querySelectorAll("input.shima-v50-" + collection.key + "-checkbox:checked"))
          .map(function(input){ return String(input.dataset.en || "").trim(); })
          .filter(Boolean);
      }
    };
  }

  function syncState(){
    setTimeout(function(){
      document.querySelectorAll("." + SHELF_CLASS).forEach(function(shelf){ updateStatus(shelf); });
      refreshIndexes();
    }, 35);
  }

  window.__SHIMA_OMNI_AKASHIC_V1__ = {
    version:"1.0.0",
    reports:{},
    renderCollection:renderCollection,
    updateAll:syncState,
    getSelectionState:function(key){
      const shelf = document.querySelector("." + SHELF_CLASS + "[data-omni-collection='" + key + "']");
      return shelf ? selectionState(shelf) : { total:0, sets:0, items:0, parts:0 };
    }
  };

  window.addEventListener("builderHistoryRestored", syncState);
  document.addEventListener("builderResetAll", syncState, true);
  document.addEventListener("click", function(event){
    if (event.target && event.target.closest && event.target.closest(".category-reset-btn")) syncState();
  }, true);

  function registerAll(retry){
    const data = window.SHIMA_OMNI_AKASHIC_V1;
    if (data && Array.isArray(data.collections) && typeof window.__registerPromptPart === "function") {
      data.collections.forEach(function(collection){
        window.__registerPromptPart(collection.section, collection.registerVersion, makeApi(collection));
      });
      setTimeout(function(){
        try{ if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }
        catch(_){ }
      }, 20);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ registerAll((retry || 0) + 1); }, 100);
  }

  registerAll(0);
  console.log("🗃️ Loaded: ./ext_omni_akashic.v1.js v1.0.0");
})();
