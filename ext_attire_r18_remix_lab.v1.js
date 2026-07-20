(function(){
  "use strict";

  const VERSION = 40;
  const KEY = "attire";
  const STYLE_ID = "shima-attire-r18-remix-lab-v1-style";
  const SOURCE_CLASS = "attire-v40-r18-remix-lab";
  const CHECKBOX_CLASS = "attire-v40-r18-remix-checkbox";

  function unlocked(){
    try{ return localStorage.getItem("MY_SECRET_UNLOCK") === "true"; }
    catch(_){ return false; }
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
.attire-v40-r18-remix-lab {
  display:block; width:100%; max-width:100%; margin:0 0 12px; overflow:hidden;
  border:1px solid rgba(194,75,112,.42); border-radius:17px;
  background:linear-gradient(160deg,rgba(255,251,252,.99),rgba(255,235,242,.96));
  box-shadow:0 8px 24px rgba(134,49,82,.12); box-sizing:border-box;
}
.attire-v40-r18-main-summary {
  display:flex !important; align-items:center; gap:10px; width:100%; min-width:0;
  padding:13px !important; list-style:none; cursor:pointer; color:#6d2140 !important;
  background:linear-gradient(135deg,rgba(255,248,251,.99),rgba(255,218,232,.96)) !important;
}
.attire-v40-r18-main-summary::-webkit-details-marker,
.attire-v40-r18-axis-summary::-webkit-details-marker { display:none; }
.attire-v40-r18-main-summary::before { content:"▶"; flex:0 0 auto; color:#c23f70; }
.attire-v40-r18-remix-lab[open] > .attire-v40-r18-main-summary::before { transform:rotate(90deg); }
.attire-v40-r18-main-heading { flex:1 1 auto; min-width:0; }
.attire-v40-r18-eyebrow { display:block; color:#b52f62; font-size:10px; line-height:1.2; font-weight:900; letter-spacing:.15em; }
.attire-v40-r18-main-title { display:block; margin-top:2px; font-size:17px; line-height:1.3; font-weight:900; overflow-wrap:anywhere; }
.attire-v40-r18-main-note { display:block; margin-top:3px; color:#876071; font-size:11px; line-height:1.42; font-weight:650; overflow-wrap:anywhere; }
.attire-v40-r18-main-count { flex:0 0 auto; min-width:48px; padding:5px 9px; border-radius:999px; color:#9a3158; background:rgba(255,255,255,.88); border:1px solid rgba(194,75,112,.28); text-align:center; font-size:12px; font-weight:900; }
.attire-v40-r18-body { display:block !important; width:100% !important; max-width:100% !important; padding:10px !important; box-sizing:border-box; }
.attire-v40-r18-warning { margin:0 0 9px; padding:10px 11px; border:1px dashed rgba(194,75,112,.44); border-radius:12px; color:#77445a; background:rgba(255,252,253,.92); font-size:11px; line-height:1.58; font-weight:750; }
.attire-v40-r18-flow { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:6px; margin:0 0 9px; }
.attire-v40-r18-flow-step { min-width:0; padding:8px 7px; border:1px solid rgba(194,93,126,.24); border-radius:10px; background:rgba(255,255,255,.84); color:#876273; font-size:10px; line-height:1.4; font-weight:750; text-align:center; }
.attire-v40-r18-flow-step strong { display:block; margin-bottom:2px; color:#7d2949; font-size:11px; }
.attire-v40-r18-status { display:flex; flex-wrap:wrap; align-items:center; gap:7px; margin:0 0 10px; padding:8px 9px; border:1px solid rgba(194,82,119,.26); border-radius:11px; background:rgba(255,241,246,.92); }
.attire-v40-r18-status-label { color:#8a6071; font-size:10px; font-weight:850; letter-spacing:.08em; }
.attire-v40-r18-status-chip { padding:4px 8px; border-radius:999px; background:#fff; border:1px solid rgba(194,75,112,.24); color:#9b365c; font-size:10px; font-weight:900; }
.attire-v40-r18-status-chip.is-warning { border-color:rgba(211,124,64,.46); background:#fff6e8; color:#936021; }
.attire-v40-r18-axis-list { display:grid !important; grid-template-columns:repeat(2,minmax(0,1fr)) !important; gap:8px; width:100%; min-width:0; }
.attire-v40-r18-axis { display:block; width:100%; max-width:100%; min-width:0; border:1px solid rgba(194,91,125,.30); border-radius:12px; overflow:hidden; background:rgba(255,255,255,.94); }
.attire-v40-r18-axis-summary { display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:10px !important; list-style:none; cursor:pointer; color:#762844 !important; background:linear-gradient(135deg,rgba(255,252,253,.99),rgba(255,231,239,.94)) !important; }
.attire-v40-r18-axis-summary::before { content:"▶"; flex:0 0 auto; color:#c06484; }
.attire-v40-r18-axis[open] > .attire-v40-r18-axis-summary::before { transform:rotate(90deg); }
.attire-v40-r18-axis-heading { flex:1 1 auto; min-width:0; }
.attire-v40-r18-axis-title { display:block; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; }
.attire-v40-r18-axis-note { display:block; margin-top:2px; color:#8d747e; font-size:10px; line-height:1.42; font-weight:600; overflow-wrap:anywhere; }
.attire-v40-r18-axis-meta { flex:0 0 auto; display:flex; flex-direction:column; align-items:flex-end; gap:3px; }
.attire-v40-r18-axis-count,.attire-v40-r18-mode { padding:3px 7px; border-radius:999px; text-align:center; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v40-r18-axis-count { color:#9b4263; background:rgba(255,222,233,.80); }
.attire-v40-r18-mode { color:#776976; background:#f5f0f3; }
.attire-v40-r18-mode[data-mode='single'] { color:#8d5d21; background:#fff2d9; }
.attire-v40-r18-grid { display:grid !important; grid-template-columns:minmax(0,1fr) !important; gap:7px; width:100%; min-width:0; padding:7px; box-sizing:border-box; }
.attire-v40-r18-card { display:grid !important; grid-template-columns:34px minmax(0,1fr) auto !important; grid-template-rows:auto auto; align-items:center; gap:3px 8px; width:100% !important; min-width:0 !important; min-height:72px; margin:0 !important; padding:9px !important; border:1px solid rgba(194,104,134,.30); border-radius:10px; background:rgba(255,255,255,.98); color:#5d2940 !important; cursor:pointer; box-sizing:border-box; }
.attire-v40-r18-card:has(input:checked) { border-color:rgba(202,62,111,.78); background:linear-gradient(135deg,rgba(255,231,240,.99),rgba(255,249,251,.99)); box-shadow:0 0 0 1px rgba(210,75,122,.15) inset; }
.attire-v40-r18-card > input[type='checkbox'] { grid-column:1; grid-row:1 / 3; width:24px !important; height:24px !important; margin:0 auto !important; accent-color:#c83c71; }
.attire-v40-r18-name { grid-column:2; grid-row:1; min-width:0; color:#68253f; font-size:13px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; }
.attire-v40-r18-prompt { grid-column:2; grid-row:2; min-width:0; color:#917883; font:10px/1.38 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; overflow-wrap:anywhere; }
.attire-v40-r18-badge { grid-column:3; grid-row:1; align-self:start; padding:3px 7px; border-radius:999px; background:#ffe3ed; color:#a43b61; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v40-r18-card > .zero-favorite-star { grid-column:3; grid-row:2; justify-self:end; align-self:end; margin-left:0 !important; }
@media (max-width:760px) {
  .attire-v40-r18-axis-list,.attire-v40-r18-grid { grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important; }
  .attire-v40-r18-axis-list > *,.attire-v40-r18-grid > * { width:100% !important; max-width:100% !important; min-width:0 !important; }
  .attire-v40-r18-flow { grid-template-columns:minmax(0,1fr); }
  .attire-v40-r18-main-summary { padding:11px 10px !important; }
  .attire-v40-r18-body { padding:8px !important; }
  .attire-v40-r18-main-title,.attire-v40-r18-main-note,.attire-v40-r18-axis-title,.attire-v40-r18-axis-note,
  .attire-v40-r18-name,.attire-v40-r18-prompt,.attire-v40-r18-warning,.attire-v40-r18-flow-step {
    writing-mode:horizontal-tb !important; text-orientation:mixed !important; word-break:normal !important;
  }
}
`;
    document.head.appendChild(style);
  }

  function selectedState(shelf){
    const checked = Array.from(shelf.querySelectorAll("input." + CHECKBOX_CLASS + ":checked"));
    const counts = {};
    checked.forEach(function(input){
      const axis = input.dataset.r18RemixAxis || "unknown";
      counts[axis] = (counts[axis] || 0) + 1;
    });
    const conflictAxes = Array.from(shelf.querySelectorAll(".attire-v40-r18-axis[data-r18-remix-selection='single']"))
      .filter(function(axis){ return axis.querySelectorAll("input." + CHECKBOX_CLASS + ":checked").length > 1; })
      .map(function(axis){ return axis.dataset.r18RemixAxis || ""; })
      .filter(Boolean);
    return { selected: checked.length, counts: counts, conflictAxes: conflictAxes };
  }

  function updateStatus(shelf){
    if (!shelf) return;
    const state = selectedState(shelf);
    const selected = shelf.querySelector("[data-r18-remix-status='selected']");
    const conflict = shelf.querySelector("[data-r18-remix-status='conflict']");
    if (selected) selected.textContent = "選択中 " + state.selected;
    if (conflict) {
      conflict.textContent = state.conflictAxes.length ? "⚠ 軸重複 " + state.conflictAxes.length : "軸重複 0";
      conflict.classList.toggle("is-warning", state.conflictAxes.length > 0);
      conflict.dataset.conflictCount = String(state.conflictAxes.length);
    }
    shelf.dataset.r18RemixSelected = String(state.selected);
    shelf.dataset.r18RemixConflicts = String(state.conflictAxes.length);
    return state;
  }

  function makeCard(axis,item,index,state){
    const slug = String(item[0] || (axis.key + "-" + index)).replace(/[^a-z0-9_-]+/gi,"-");
    const name = String(item[1] || slug);
    const prompt = String(item[2] || "").trim();
    const id = "attire-r18-remix-" + axis.key + "-" + slug;
    const normalizedPrompt = normalize(prompt);
    state.candidates += 1;
    if (!prompt || state.index.prompts.has(normalizedPrompt)) {
      state.skippedPrompt += 1;
      state.skippedItems.push({ axis:axis.key,name:name,prompt:prompt,reason:"prompt" });
      return null;
    }
    if (state.index.ids.has(id)) {
      state.skippedId += 1;
      state.skippedItems.push({ axis:axis.key,name:name,prompt:prompt,reason:"id" });
      return null;
    }

    const label = document.createElement("label");
    label.className = "attire-v40-r18-card";
    label.dataset.r18RemixAxis = axis.key;
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.className = CHECKBOX_CLASS;
    input.value = prompt;
    input.dataset.en = prompt;
    input.dataset.ja = name;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.r18Only = "1";
    input.dataset.r18RemixAxis = axis.key;
    input.dataset.r18RemixSelection = axis.selection || "multi";
    input.dataset.r18RemixId = axis.key + "/" + slug;
    input.addEventListener("change",function(){ updateStatus(input.closest("." + SOURCE_CLASS)); });

    const title = document.createElement("span");
    title.className = "attire-v40-r18-name";
    title.textContent = name;
    const promptText = document.createElement("span");
    promptText.className = "attire-v40-r18-prompt";
    promptText.textContent = prompt;
    const badge = document.createElement("span");
    badge.className = "attire-v40-r18-badge";
    badge.textContent = "R-18 · POS";
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

  function makeAxis(axis,state){
    const details = document.createElement("details");
    details.className = "attire-v40-r18-axis";
    details.dataset.r18RemixAxis = axis.key;
    details.dataset.r18RemixSelection = axis.selection || "multi";
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v40-r18-axis-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v40-r18-axis-heading";
    const title = document.createElement("span");
    title.className = "attire-v40-r18-axis-title";
    title.textContent = axis.title;
    const note = document.createElement("span");
    note.className = "attire-v40-r18-axis-note";
    note.textContent = axis.note || "";
    heading.appendChild(title);
    heading.appendChild(note);

    const meta = document.createElement("span");
    meta.className = "attire-v40-r18-axis-meta";
    const count = document.createElement("span");
    count.className = "attire-v40-r18-axis-count";
    const mode = document.createElement("span");
    mode.className = "attire-v40-r18-mode";
    mode.dataset.mode = axis.selection || "multi";
    mode.textContent = axis.selection === "single" ? "1つ推奨" : "複数OK";
    meta.appendChild(count);
    meta.appendChild(mode);

    const grid = document.createElement("div");
    grid.className = "attire-v40-r18-grid";
    (axis.items || []).forEach(function(item,index){
      const card = makeCard(axis,item,index,state);
      if (card) grid.appendChild(card);
    });
    count.textContent = String(grid.querySelectorAll("input[type='checkbox']").length);
    summary.appendChild(heading);
    summary.appendChild(meta);
    details.appendChild(summary);
    details.appendChild(grid);
    return grid.children.length ? details : null;
  }

  function makeFlowStep(number,title,note){
    const step = document.createElement("div");
    step.className = "attire-v40-r18-flow-step";
    const strong = document.createElement("strong");
    strong.textContent = number + " " + title;
    step.appendChild(strong);
    step.appendChild(document.createTextNode(note));
    return step;
  }

  function render(){
    if (!unlocked()) return null;
    const data = window.SHIMA_ATTIRE_R18_REMIX_LAB_V1;
    const root = document.querySelector("#list-attire .section-content") || document.getElementById("list-attire");
    const zone = root && root.querySelector("#__attire_r18_last_zone__");
    if (!root || !zone || !data || !Array.isArray(data.axes)) return null;
    const existing = zone.querySelector("." + SOURCE_CLASS);
    if (existing) return window.__SHIMA_ATTIRE_R18_REMIX_LAB_V1__.lastReport;

    injectStyle();
    const state = { candidates:0,added:0,skippedPrompt:0,skippedId:0,skippedItems:[],byAxis:{},index:existingIndex(root) };
    const shelf = document.createElement("details");
    shelf.className = SOURCE_CLASS;
    shelf.dataset.attireR18RemixLab = "v1";
    shelf.dataset.r18Only = "1";
    shelf.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v40-r18-main-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v40-r18-main-heading";
    const eyebrow = document.createElement("span");
    eyebrow.className = "attire-v40-r18-eyebrow";
    eyebrow.textContent = "ADULT ATTIRE REMIX LAB / R-18専用";
    const title = document.createElement("span");
    title.className = "attire-v40-r18-main-title";
    title.textContent = "🔞 R-18衣装改造工房 ― NIGHT REMIX";
    const note = document.createElement("span");
    note.className = "attire-v40-r18-main-note";
    note.textContent = "既存R-18衣装を残し、露出・破損・艶素材・拘束装飾・着こなしを後付けする。";
    heading.appendChild(eyebrow);
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-v40-r18-main-count";
    summary.appendChild(heading);
    summary.appendChild(count);

    const body = document.createElement("div");
    body.className = "attire-v40-r18-body";
    const warning = document.createElement("div");
    warning.className = "attire-v40-r18-warning";
    warning.textContent = "R-18解放時だけ表示・出力される衣装専用部品です。未解放時の通常検索には存在せず、解放中は全体検索から見つけられます。通常衣装工房へは混ぜません。単一推奨軸を複数選んでも自動解除せず、警告だけ表示します。";
    body.appendChild(warning);

    const flow = document.createElement("div");
    flow.className = "attire-v40-r18-flow";
    flow.appendChild(makeFlowStep("1","R-18元衣装","下の特化コレクションから土台を選ぶ"));
    flow.appendChild(makeFlowStep("2","改造軸","必要な衣装部品だけ後付けする"));
    flow.appendChild(makeFlowStep("3","出力確認","通常衣装と混ぜずR-18内で確認する"));
    body.appendChild(flow);

    const status = document.createElement("div");
    status.className = "attire-v40-r18-status";
    const statusLabel = document.createElement("span");
    statusLabel.className = "attire-v40-r18-status-label";
    statusLabel.textContent = "NIGHT REMIX STATUS";
    const selected = document.createElement("span");
    selected.className = "attire-v40-r18-status-chip";
    selected.dataset.r18RemixStatus = "selected";
    const conflict = document.createElement("span");
    conflict.className = "attire-v40-r18-status-chip";
    conflict.dataset.r18RemixStatus = "conflict";
    status.appendChild(statusLabel);
    status.appendChild(selected);
    status.appendChild(conflict);
    body.appendChild(status);

    const list = document.createElement("div");
    list.className = "attire-v40-r18-axis-list";
    data.axes.forEach(function(axis){
      const details = makeAxis(axis,state);
      if (details) list.appendChild(details);
    });
    body.appendChild(list);
    count.textContent = String(body.querySelectorAll("input[type='checkbox']").length);
    shelf.appendChild(summary);
    shelf.appendChild(body);

    const divider = zone.querySelector(":scope > .attire-r18-divider");
    if (divider && divider.nextSibling) zone.insertBefore(shelf,divider.nextSibling);
    else zone.appendChild(shelf);
    updateStatus(shelf);

    const report = {
      version:data.version || "1.0.0",
      expectedCount:Number(data.expectedCount || 0),
      candidates:state.candidates,
      added:state.added,
      skippedPrompt:state.skippedPrompt,
      skippedId:state.skippedId,
      skippedItems:state.skippedItems,
      byAxis:state.byAxis,
      adultOnly:true,
      insideR18Zone:shelf.closest("#__attire_r18_last_zone__") === zone,
      initialOpen:shelf.open,
      initialSelected:Number(shelf.dataset.r18RemixSelected || 0),
      initialConflicts:Number(shelf.dataset.r18RemixConflicts || 0)
    };
    window.__SHIMA_ATTIRE_R18_REMIX_LAB_V1__.lastReport = report;
    try{ document.dispatchEvent(new CustomEvent("attireR18RemixReady",{ detail:report })); }catch(_){ }
    return report;
  }

  function scheduleRender(){
    let tries = 0;
    (function run(){
      if (!unlocked()) return;
      const report = render();
      if (!report && tries++ < 90) setTimeout(run,60);
    })();
  }

  const API = {
    initUI(){ scheduleRender(); },
    getTags(){
      return Array.from(document.querySelectorAll("input." + CHECKBOX_CLASS + ":checked"))
        .map(function(input){ return String(input.dataset.en || "").trim(); })
        .filter(Boolean);
    }
  };

  window.__SHIMA_ATTIRE_R18_REMIX_LAB_V1__ = {
    version:"1.0.0",
    render:render,
    updateStatus:function(){ return updateStatus(document.querySelector("." + SOURCE_CLASS)); },
    getSelectionState:function(){
      const shelf = document.querySelector("." + SOURCE_CLASS);
      return shelf ? selectedState(shelf) : { selected:0,counts:{},conflictAxes:[] };
    },
    lastReport:null
  };

  function syncStatus(){ setTimeout(function(){ try{ window.__SHIMA_ATTIRE_R18_REMIX_LAB_V1__.updateStatus(); }catch(_){ } },30); }
  window.addEventListener("builderHistoryRestored",syncStatus);
  document.addEventListener("builderResetAll",syncStatus,true);
  document.addEventListener("click",function(event){
    if (event.target && event.target.closest && event.target.closest(".category-reset-btn")) syncStatus();
  },true);

  function register(retry){
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY,VERSION,API);
      setTimeout(function(){ try{ if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }catch(_){ } },20);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ register((retry || 0) + 1); },100);
  }

  register(0);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",scheduleRender,{ once:true });
  else scheduleRender();
  console.log("🔞 Loaded: ./ext_attire_r18_remix_lab.v1.js v1.0.0");
})();
