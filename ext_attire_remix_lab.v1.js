(function(){
  "use strict";

  const VERSION = 39;
  const KEY = "attire";
  const STYLE_ID = "shima-attire-remix-lab-v1-style";
  const SOURCE_CLASS = "attire-v39-remix-lab";
  const CHECKBOX_CLASS = "attire-v39-remix-checkbox";

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
.attire-v39-remix-lab {
  display:block; width:100%; max-width:100%; margin:12px 0; overflow:hidden;
  border:1px solid rgba(91,151,164,.34); border-radius:17px;
  background:linear-gradient(160deg, rgba(250,254,255,.99), rgba(233,248,247,.96));
  box-shadow:0 8px 24px rgba(59,105,121,.11);
}
.attire-v39-main-summary {
  display:flex !important; align-items:center; gap:10px; width:100%; min-width:0;
  padding:13px !important; list-style:none; cursor:pointer; color:#173f49 !important;
  background:linear-gradient(135deg, rgba(245,253,255,.99), rgba(213,245,239,.96)) !important;
}
.attire-v39-main-summary::-webkit-details-marker,
.attire-v39-axis-summary::-webkit-details-marker { display:none; }
.attire-v39-main-summary::before { content:"▶"; flex:0 0 auto; color:#358b8c; }
.attire-v39-remix-lab[open] > .attire-v39-main-summary::before { transform:rotate(90deg); }
.attire-v39-main-heading { flex:1 1 auto; min-width:0; }
.attire-v39-eyebrow { display:block; color:#25817c; font-size:10px; line-height:1.2; font-weight:900; letter-spacing:.15em; }
.attire-v39-main-title { display:block; margin-top:2px; font-size:17px; line-height:1.3; font-weight:900; overflow-wrap:anywhere; }
.attire-v39-main-note { display:block; margin-top:3px; color:#5d7981; font-size:11px; line-height:1.42; font-weight:650; overflow-wrap:anywhere; }
.attire-v39-main-count { flex:0 0 auto; min-width:48px; padding:5px 9px; border-radius:999px; color:#27666c; background:rgba(255,255,255,.84); border:1px solid rgba(72,147,153,.24); text-align:center; font-size:12px; font-weight:900; }
.attire-v39-body { display:block !important; width:100% !important; max-width:100% !important; padding:10px !important; }
.attire-v39-guide { margin:0 0 9px; padding:10px 11px; border:1px dashed rgba(73,145,154,.40); border-radius:12px; color:#3e6870; background:rgba(251,255,255,.88); font-size:11px; line-height:1.58; font-weight:700; }
.attire-v39-flow { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:6px; margin:0 0 9px; }
.attire-v39-flow-step { min-width:0; padding:8px 7px; border:1px solid rgba(101,159,168,.24); border-radius:10px; background:rgba(255,255,255,.82); color:#537179; font-size:10px; line-height:1.4; font-weight:750; text-align:center; }
.attire-v39-flow-step strong { display:block; margin-bottom:2px; color:#245962; font-size:11px; }
.attire-v39-status { display:flex; flex-wrap:wrap; align-items:center; gap:7px; margin:0 0 10px; padding:8px 9px; border:1px solid rgba(93,153,164,.26); border-radius:11px; background:rgba(240,251,251,.92); }
.attire-v39-status-label { color:#54747b; font-size:10px; font-weight:850; letter-spacing:.08em; }
.attire-v39-status-chip { padding:4px 8px; border-radius:999px; background:#fff; border:1px solid rgba(81,149,156,.24); color:#2f6970; font-size:10px; font-weight:900; }
.attire-v39-status-chip.is-warning { border-color:rgba(211,150,64,.46); background:#fff8e8; color:#936421; }
.attire-v39-axis-list { display:grid !important; grid-template-columns:repeat(2,minmax(0,1fr)) !important; gap:8px; width:100%; min-width:0; }
.attire-v39-axis { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(99,154,164,.28); border-radius:12px; overflow:hidden; background:rgba(255,255,255,.93); }
.attire-v39-axis-summary { display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:10px !important; list-style:none; cursor:pointer; color:#204b53 !important; background:linear-gradient(135deg, rgba(250,254,255,.99), rgba(230,247,244,.94)) !important; }
.attire-v39-axis-summary::before { content:"▶"; flex:0 0 auto; color:#5f979f; }
.attire-v39-axis[open] > .attire-v39-axis-summary::before { transform:rotate(90deg); }
.attire-v39-axis-heading { flex:1 1 auto; min-width:0; }
.attire-v39-axis-title { display:block; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; }
.attire-v39-axis-note { display:block; margin-top:2px; color:#72878d; font-size:10px; line-height:1.42; font-weight:600; overflow-wrap:anywhere; }
.attire-v39-axis-meta { flex:0 0 auto; display:flex; flex-direction:column; align-items:flex-end; gap:3px; }
.attire-v39-axis-count, .attire-v39-mode { padding:3px 7px; border-radius:999px; text-align:center; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v39-axis-count { color:#356e76; background:rgba(207,240,235,.76); }
.attire-v39-mode { color:#6e7281; background:#f1f4f8; }
.attire-v39-mode[data-mode='single'] { color:#7a6125; background:#fff5d9; }
.attire-v39-grid { display:grid !important; grid-template-columns:minmax(0,1fr) !important; gap:7px; width:100%; min-width:0; padding:7px; }
.attire-v39-card { display:grid !important; grid-template-columns:34px minmax(0,1fr) auto !important; grid-template-rows:auto auto; align-items:center; gap:3px 8px; width:100% !important; min-width:0 !important; min-height:72px; margin:0 !important; padding:9px !important; border:1px solid rgba(105,157,166,.28); border-radius:10px; background:rgba(255,255,255,.98); color:#24444d !important; cursor:pointer; }
.attire-v39-card:hover { border-color:rgba(53,158,149,.58); background:#fbffff; }
.attire-v39-card:has(input:checked) { border-color:rgba(42,157,145,.76); background:linear-gradient(135deg, rgba(230,253,247,.99), rgba(246,253,255,.99)); box-shadow:0 0 0 1px rgba(68,184,170,.17) inset; }
.attire-v39-card > input[type='checkbox'] { grid-column:1; grid-row:1 / 3; width:24px !important; height:24px !important; margin:0 auto !important; accent-color:#2fa896; }
.attire-v39-name { grid-column:2; grid-row:1; min-width:0; color:#1c4650; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; }
.attire-v39-prompt { grid-column:2; grid-row:2; min-width:0; color:#72868c; font:10px/1.38 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; overflow-wrap:anywhere; }
.attire-v39-badge { grid-column:3; grid-row:1; align-self:start; padding:3px 7px; border-radius:999px; background:#eaf8f5; color:#39756f; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v39-card > .zero-favorite-star { grid-column:3; grid-row:2; justify-self:end; align-self:end; margin-left:0 !important; }
@media (max-width:760px) {
  .attire-v39-axis-list, .attire-v39-grid { grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important; }
  .attire-v39-axis-list > *, .attire-v39-grid > * { width:100% !important; max-width:100% !important; min-width:0 !important; }
  .attire-v39-flow { grid-template-columns:minmax(0,1fr); }
  .attire-v39-main-summary { padding:11px 10px !important; }
  .attire-v39-body { padding:8px !important; }
  .attire-v39-card { grid-template-columns:34px minmax(0,1fr) auto !important; }
  .attire-v39-main-title, .attire-v39-main-note, .attire-v39-axis-title, .attire-v39-axis-note,
  .attire-v39-name, .attire-v39-prompt, .attire-v39-guide, .attire-v39-flow-step {
    writing-mode:horizontal-tb !important; text-orientation:mixed !important; word-break:normal !important;
  }
}
`;
    document.head.appendChild(style);
  }

  function selectedState(shelf){
    const checked = Array.from(shelf.querySelectorAll("input[type='checkbox']:checked"));
    const curatedChecked = checked.filter(function(input){ return input.classList.contains(CHECKBOX_CLASS); });
    const counts = {};
    curatedChecked.forEach(function(input){
      const axis = input.dataset.remixAxis || "unknown";
      counts[axis] = (counts[axis] || 0) + 1;
    });
    const conflictAxes = Array.from(shelf.querySelectorAll(".attire-v39-axis[data-remix-selection='single']"))
      .filter(function(axis){ return axis.querySelectorAll("input." + CHECKBOX_CLASS + ":checked").length > 1; })
      .map(function(axis){ return axis.dataset.remixAxis || ""; })
      .filter(Boolean);
    return {
      selected: checked.length,
      curatedSelected: curatedChecked.length,
      detailedSelected: checked.length - curatedChecked.length,
      counts: counts,
      conflictAxes: conflictAxes
    };
  }

  function updateStatus(shelf){
    if (!shelf) return;
    const state = selectedState(shelf);
    const selected = shelf.querySelector("[data-remix-status='selected']");
    const detailed = shelf.querySelector("[data-remix-status='detailed']");
    const conflict = shelf.querySelector("[data-remix-status='conflict']");
    if (selected) selected.textContent = "選択中 " + state.selected;
    if (detailed) detailed.textContent = "詳細 " + state.detailedSelected;
    if (conflict) {
      conflict.textContent = state.conflictAxes.length ? "⚠ 軸重複 " + state.conflictAxes.length : "軸重複 0";
      conflict.classList.toggle("is-warning", state.conflictAxes.length > 0);
      conflict.dataset.conflictCount = String(state.conflictAxes.length);
    }
    shelf.dataset.remixSelected = String(state.selected);
    shelf.dataset.remixConflicts = String(state.conflictAxes.length);
    return state;
  }

  function makeCard(axis, item, index, state){
    const slug = String(item[0] || (axis.key + "-" + index)).replace(/[^a-z0-9_-]+/gi, "-");
    const name = String(item[1] || slug);
    const prompt = String(item[2] || "").trim();
    const id = "attire-remix-" + axis.key + "-" + slug;
    const normalizedPrompt = normalize(prompt);

    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ axis: axis.key, name: name, prompt: prompt, reason: "prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ axis: axis.key, name: name, prompt: prompt, reason: "id" });
      return null;
    }

    const label = document.createElement("label");
    label.className = "attire-v39-card";
    label.dataset.remixAxis = axis.key;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.remixAxis = axis.key;
    input.dataset.remixSelection = axis.selection || "multi";
    input.dataset.remixId = axis.key + "/" + slug;
    input.addEventListener("change", function(){ updateStatus(input.closest("." + SOURCE_CLASS)); });

    const title = document.createElement("span");
    title.className = "attire-v39-name";
    title.textContent = name;

    const promptText = document.createElement("span");
    promptText.className = "attire-v39-prompt";
    promptText.textContent = prompt;

    const badge = document.createElement("span");
    badge.className = "attire-v39-badge";
    badge.textContent = "PART · POS";

    label.appendChild(input);
    label.appendChild(title);
    label.appendChild(promptText);
    label.appendChild(badge);

    state.index.prompts.add(normalizedPrompt);
    state.index.ids.add(id);
    state.added += 1;
    state.byAxis[axis.key] = (state.byAxis[axis.key] || 0) + 1;
    return label;
  }

  function makeAxis(axis, state){
    const details = document.createElement("details");
    details.className = "attire-v39-axis";
    details.dataset.remixAxis = axis.key;
    details.dataset.remixSelection = axis.selection || "multi";
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v39-axis-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v39-axis-heading";
    const title = document.createElement("span");
    title.className = "attire-v39-axis-title";
    title.textContent = axis.title;
    const note = document.createElement("span");
    note.className = "attire-v39-axis-note";
    note.textContent = axis.note || "";
    heading.appendChild(title);
    heading.appendChild(note);

    const meta = document.createElement("span");
    meta.className = "attire-v39-axis-meta";
    const count = document.createElement("span");
    count.className = "attire-v39-axis-count";
    const mode = document.createElement("span");
    mode.className = "attire-v39-mode";
    mode.dataset.mode = axis.selection || "multi";
    mode.textContent = axis.selection === "single" ? "1つ推奨" : "複数OK";
    meta.appendChild(count);
    meta.appendChild(mode);

    const grid = document.createElement("div");
    grid.className = "attire-v39-grid";
    (axis.items || []).forEach(function(item, index){
      const card = makeCard(axis, item, index, state);
      if (card) grid.appendChild(card);
    });
    count.textContent = String(grid.querySelectorAll("input[type='checkbox']").length);

    summary.appendChild(heading);
    summary.appendChild(meta);
    details.appendChild(summary);
    details.appendChild(grid);
    return grid.children.length ? details : null;
  }

  function makeFlowStep(number, title, note){
    const step = document.createElement("div");
    step.className = "attire-v39-flow-step";
    const strong = document.createElement("strong");
    strong.textContent = number + " " + title;
    step.appendChild(strong);
    step.appendChild(document.createTextNode(note));
    return step;
  }

  function render(container){
    const root = contentRoot(container);
    const data = window.SHIMA_ATTIRE_REMIX_LAB_V1;
    if (!root || !data || !Array.isArray(data.axes)) return null;
    if (root.querySelector("." + CHECKBOX_CLASS)) return window.__SHIMA_ATTIRE_REMIX_LAB_V1__.lastReport;

    injectStyle();
    const state = {
      candidates: 0,
      added: 0,
      skippedPrompt: 0,
      skippedId: 0,
      skippedItems: [],
      byAxis: {},
      index: existingIndex(root)
    };

    const shelf = document.createElement("details");
    shelf.className = SOURCE_CLASS;
    shelf.dataset.attireRemixLab = "v1";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v39-main-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v39-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "attire-v39-eyebrow";
    eyebrow.textContent = "ATTIRE REMIX LAB / 衣装改造工房";
    const title = document.createElement("span");
    title.className = "attire-v39-main-title";
    title.textContent = "🧰 衣装改造工房 ― REMIX LAB";
    const note = document.createElement("span");
    note.className = "attire-v39-main-note";
    note.textContent = "完成衣装を残したまま、5軸の後付け部品で派生を作る。";
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v39-main-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "attire-v39-body";
    const guide = document.createElement("div");
    guide.className = "attire-v39-guide";
    guide.textContent = "先に完成衣装を1つ選び、必要な軸だけ追加。シルエット・素材・配色は各1つ推奨、状態・装飾は複数使えます。軸が重複しても自動解除せず、警告だけ表示します。";
    body.appendChild(guide);

    const flow = document.createElement("div");
    flow.className = "attire-v39-flow";
    flow.appendChild(makeFlowStep("1", "元衣装", "完成衣装または手組み衣装を選ぶ"));
    flow.appendChild(makeFlowStep("2", "改造軸", "5軸から必要な部品だけ足す"));
    flow.appendChild(makeFlowStep("3", "別棚で完成", "人物・背景・品質は従来どおり決める"));
    body.appendChild(flow);

    const status = document.createElement("div");
    status.className = "attire-v39-status";
    const statusLabel = document.createElement("span");
    statusLabel.className = "attire-v39-status-label";
    statusLabel.textContent = "REMIX STATUS";
    const selected = document.createElement("span");
    selected.className = "attire-v39-status-chip";
    selected.dataset.remixStatus = "selected";
    const conflict = document.createElement("span");
    conflict.className = "attire-v39-status-chip";
    conflict.dataset.remixStatus = "conflict";
    status.appendChild(statusLabel);
    status.appendChild(selected);
    status.appendChild(conflict);
    body.appendChild(status);

    const list = document.createElement("div");
    list.className = "attire-v39-axis-list";
    data.axes.forEach(function(axis){
      const details = makeAxis(axis, state);
      if (details) list.appendChild(details);
    });
    body.appendChild(list);

    count.textContent = String(body.querySelectorAll("input[type='checkbox']").length);
    shelf.appendChild(summary);
    shelf.appendChild(body);
    if (state.added) root.appendChild(shelf);
    updateStatus(shelf);

    const report = {
      version: data.version || "1.0.0",
      expectedCount: Number(data.expectedCount || 0),
      candidates: state.candidates,
      added: state.added,
      skippedPrompt: state.skippedPrompt,
      skippedId: state.skippedId,
      skippedItems: state.skippedItems,
      byAxis: state.byAxis,
      initialOpen: shelf.open,
      initialSelected: Number(shelf.dataset.remixSelected || 0),
      initialConflicts: Number(shelf.dataset.remixConflicts || 0)
    };
    window.__SHIMA_ATTIRE_REMIX_LAB_V1__.lastReport = report;

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

  window.__SHIMA_ATTIRE_REMIX_LAB_V1__ = {
    version: "1.0.0",
    render: render,
    updateStatus: function(){ return updateStatus(document.querySelector("." + SOURCE_CLASS)); },
    getSelectionState: function(){
      const shelf = document.querySelector("." + SOURCE_CLASS);
      return shelf ? selectedState(shelf) : { selected: 0, counts: {}, conflictAxes: [] };
    },
    lastReport: null
  };

  function syncStatus(){
    setTimeout(function(){
      try{ window.__SHIMA_ATTIRE_REMIX_LAB_V1__.updateStatus(); }catch(_){}
    }, 30);
  }
  window.addEventListener("builderHistoryRestored", syncStatus);
  document.addEventListener("builderResetAll", syncStatus, true);
  document.addEventListener("click", function(event){
    if (event.target && event.target.closest && event.target.closest(".category-reset-btn")) syncStatus();
  }, true);

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
  console.log("🧰 Loaded: ./ext_attire_remix_lab.v1.js v1.0.0");
})();
