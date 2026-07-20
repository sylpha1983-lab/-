(function(){
  "use strict";

  if(window.__SHIMA_QUALITY_PREVIEW_V1__) return;
  window.__SHIMA_QUALITY_PREVIEW_V1__ = true;

  const VERSION = 50;
  const KEY = "quality_preset";
  const PRESETS = Array.isArray(window.__SHIMA_QUALITY_QUICK_PRESETS_V1__)
    ? window.__SHIMA_QUALITY_QUICK_PRESETS_V1__
    : [];
  const FAMILIES = Array.isArray(window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__)
    ? window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__
    : [];
  const CONFLICT_RULES = Array.isArray(window.__SHIMA_QUALITY_CONFLICT_RULES_V1__)
    ? window.__SHIMA_QUALITY_CONFLICT_RULES_V1__
    : [];

  const state = {
    current: null,
    undo: null,
    applying: false,
    previousFocus: null
  };
  const ui = {};

  function create(tag, className, text){
    const node = document.createElement(tag);
    if(className) node.className = className;
    if(text != null) node.textContent = String(text);
    return node;
  }

  function qsAll(root, selector){
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function cleanText(value){
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function splitPrompt(text){
    const output = [];
    let buffer = "";
    let depth = 0;
    let quote = "";
    const source = String(text || "");
    for(let index = 0; index < source.length; index++){
      const char = source[index];
      if(quote){
        buffer += char;
        if(char === quote && source[index - 1] !== "\\") quote = "";
        continue;
      }
      if(char === '"' || char === "'"){
        quote = char;
        buffer += char;
        continue;
      }
      if(char === "(" || char === "[" || char === "{") depth++;
      else if(char === ")" || char === "]" || char === "}") depth = Math.max(0, depth - 1);
      if(char === "," && depth === 0){
        if(buffer.trim()) output.push(buffer.trim());
        buffer = "";
      }else{
        buffer += char;
      }
    }
    if(buffer.trim()) output.push(buffer.trim());
    return output;
  }

  function coreOf(token){
    return String(token || "")
      .toLowerCase()
      .replace(/^[\s\(\[\{"']+/, "")
      .replace(/[\s\)\]\}"']+$/, "")
      .replace(/:\s*[-+]?\d+(?:\.\d+)?%?\s*$/, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function uniqueByCore(tokens){
    const seen = new Set();
    return (tokens || []).filter(function(token){
      const core = coreOf(token);
      if(!core || seen.has(core)) return false;
      seen.add(core);
      return true;
    });
  }

  function inputValue(input){
    if(!input || !input.dataset) return "";
    return input.dataset.val || input.dataset.en || "";
  }

  function shelf(){
    return document.getElementById("qp-v47-quick-presets");
  }

  function quickInputs(){
    const root = shelf();
    return root ? qsAll(root, 'input[data-qp-v47-kind="pack"], input[data-qp-v47-kind="component"]') : [];
  }

  function selectedQuickInputs(){
    return quickInputs().filter(function(input){ return input.checked; });
  }

  function selectedQuickTokens(){
    const tokens = [];
    selectedQuickInputs().forEach(function(input){
      splitPrompt(inputValue(input)).forEach(function(token){ tokens.push(token); });
    });
    return tokens;
  }

  function presetByKey(key){
    return PRESETS.find(function(preset){ return preset.key === key; }) || null;
  }

  function familyByKey(key){
    return FAMILIES.find(function(family){ return family.key === key; }) || {
      key:key || "",
      label:"品質",
      shortLabel:"品質",
      icon:"❄️"
    };
  }

  function positiveTextarea(){
    try {
      if(typeof window.findMainTextarea === "function"){
        const found = window.findMainTextarea();
        if(found) return found;
      }
    } catch(e) {}
    return document.getElementById("out");
  }

  function positiveText(){
    const output = positiveTextarea();
    if(output && cleanText(output.value)) return cleanText(output.value);
    const values = [];
    qsAll(document, '#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"]):not([data-output-channel="negative"])').forEach(function(input){
      const value = cleanText(inputValue(input));
      if(value) values.push(value);
    });
    return values.join(", ");
  }

  function negativeTags(){
    try {
      if(window.ShimaQualityControl && typeof window.ShimaQualityControl.getNegativeTags === "function"){
        return window.ShimaQualityControl.getNegativeTags().slice();
      }
    } catch(e) {}
    const tags = qsAll(document, '#qp-v49-quality-control input[data-shima-negative-tag]:checked')
      .map(function(input){ return input.dataset.shimaNegativeTag || ""; })
      .filter(Boolean);
    qsAll(document, '#sections input[type="checkbox"][data-output-channel="negative"]:checked').forEach(function(input){
      splitPrompt(inputValue(input)).forEach(function(tag){ if(tag) tags.push(tag); });
    });
    return tags;
  }

  function removeTokenOccurrences(tokens, removed){
    const counts = new Map();
    (removed || []).forEach(function(token){
      const core = coreOf(token);
      if(core) counts.set(core, (counts.get(core) || 0) + 1);
    });
    return (tokens || []).filter(function(token){
      const core = coreOf(token);
      const count = counts.get(core) || 0;
      if(!count) return true;
      if(count === 1) counts.delete(core);
      else counts.set(core, count - 1);
      return false;
    });
  }

  function listDifference(left, right){
    const rightCores = new Set((right || []).map(coreOf).filter(Boolean));
    return uniqueByCore((left || []).filter(function(token){
      const core = coreOf(token);
      return core && !rightCores.has(core);
    }));
  }

  function matchingConflictTerms(tokens, family){
    const rule = CONFLICT_RULES.find(function(item){ return item.family === family; }) || null;
    if(!rule) return { rule:null, terms:[] };
    const matched = [];
    (tokens || []).forEach(function(token){
      const core = coreOf(token);
      const term = (rule.terms || []).find(function(candidate){
        const normalized = coreOf(candidate);
        return normalized && (core === normalized || core.indexOf(normalized) >= 0);
      });
      if(term) matched.push(term);
    });
    return { rule:rule, terms:uniqueByCore(matched) };
  }

  function duplicateTargetTerms(baseTokens, targetTags){
    const base = new Set((baseTokens || []).map(coreOf).filter(Boolean));
    return uniqueByCore((targetTags || []).filter(function(tag){ return base.has(coreOf(tag)); }));
  }

  function buildPreview(preset){
    if(!preset) return null;
    const beforePositive = positiveText();
    const beforeTokens = splitPrompt(beforePositive);
    const oldQuick = selectedQuickTokens();
    const baseTokens = removeTokenOccurrences(beforeTokens, oldQuick);
    const targetTags = Array.isArray(preset.tags) ? preset.tags.slice() : [];
    const projectedTokens = baseTokens.concat(targetTags);
    const afterPositive = projectedTokens.join(", ");
    const duplicateTerms = duplicateTargetTerms(baseTokens, targetTags);
    const conflict = matchingConflictTerms(projectedTokens, preset.family);
    const negative = negativeTags();
    const channelCollisions = duplicateTargetTerms(negative, targetTags);
    return {
      key:preset.key,
      label:preset.label || "品質セット",
      badge:preset.badge || "SET",
      family:preset.family || "",
      familyMeta:familyByKey(preset.family),
      added:listDifference(targetTags, oldQuick),
      removed:listDifference(oldQuick, targetTags),
      duplicates:duplicateTerms,
      conflictRule:conflict.rule,
      conflicts:conflict.terms,
      beforePositive:beforePositive,
      afterPositive:afterPositive,
      negative:negative,
      channelCollisions:channelCollisions,
      charDelta:afterPositive.length - beforePositive.length,
      targetCount:targetTags.length,
      attention:duplicateTerms.length + channelCollisions.length + (conflict.terms.length ? 1 : 0)
    };
  }

  function emptyNode(node){
    while(node && node.firstChild) node.removeChild(node.firstChild);
  }

  function renderChips(node, tokens, emptyLabel, tone){
    if(!node) return;
    emptyNode(node);
    const list = Array.isArray(tokens) ? tokens : [];
    if(!list.length){
      node.appendChild(create("span", "qp-v50-empty", emptyLabel || "なし"));
      return;
    }
    list.slice(0, 12).forEach(function(token){
      const chip = create("span", "qp-v50-chip", token);
      if(tone) chip.dataset.tone = tone;
      node.appendChild(chip);
    });
    if(list.length > 12) node.appendChild(create("span", "qp-v50-more", "ほか" + (list.length - 12) + "語"));
  }

  function setStat(node, value, tone){
    if(!node) return;
    node.textContent = String(value);
    node.dataset.tone = tone || "";
  }

  function renderWarnings(preview){
    if(!ui.warningList) return;
    emptyNode(ui.warningList);
    if(!preview.attention){
      const ok = create("div", "qp-v50-warning qp-v50-warning-ok");
      ok.appendChild(create("strong", "", "✓ 目立つ重複・作風衝突なし"));
      ok.appendChild(create("p", "", "この品質セットは現在の選択へそのまま試着できます。"));
      ui.warningList.appendChild(ok);
      return;
    }
    if(preview.duplicates.length){
      const card = create("div", "qp-v50-warning");
      card.dataset.tone = "warning";
      card.appendChild(create("strong", "", "重複候補 " + preview.duplicates.length + "語"));
      card.appendChild(create("p", "", preview.duplicates.join("、")));
      card.appendChild(create("small", "", "適用はできます。必要なら適用後に品質診断で整理してください。"));
      ui.warningList.appendChild(card);
    }
    if(preview.channelCollisions.length){
      const card = create("div", "qp-v50-warning");
      card.dataset.tone = "warning";
      card.appendChild(create("strong", "", "Positive／Negative同語 " + preview.channelCollisions.length + "語"));
      card.appendChild(create("p", "", preview.channelCollisions.join("、")));
      card.appendChild(create("small", "", "表現としてPositiveへ残せます。Negative側は変更・自動解除しません。"));
      ui.warningList.appendChild(card);
    }
    if(preview.conflicts.length && preview.conflictRule){
      const card = create("div", "qp-v50-warning");
      card.dataset.tone = "info";
      card.appendChild(create("strong", "", preview.conflictRule.title));
      card.appendChild(create("p", "", preview.conflicts.join("、")));
      card.appendChild(create("small", "", preview.conflictRule.detail || "意図した混合作風なら残せます。"));
      ui.warningList.appendChild(card);
    }
  }

  function renderPreview(preview){
    if(!preview) return;
    ui.title.textContent = preview.label;
    ui.family.textContent = (preview.familyMeta.icon ? preview.familyMeta.icon + " " : "") + (preview.familyMeta.label || preview.familyMeta.shortLabel || "品質");
    ui.badge.textContent = preview.badge;
    setStat(ui.addedStat, "+" + preview.added.length, "add");
    setStat(ui.removedStat, "−" + preview.removed.length, preview.removed.length ? "remove" : "");
    setStat(ui.charStat, (preview.charDelta > 0 ? "+" : "") + preview.charDelta, preview.charDelta > 0 ? "add" : (preview.charDelta < 0 ? "remove" : ""));
    setStat(ui.attentionStat, String(preview.attention), preview.attention ? "warning" : "ok");
    renderChips(ui.addedList, preview.added, "新しく加わる語はありません", "add");
    renderChips(ui.removedList, preview.removed, "外れる語はありません", "remove");
    renderWarnings(preview);
    ui.positivePreview.value = preview.afterPositive || "（Positiveは空です）";
    ui.negativePreview.value = preview.negative.length ? preview.negative.join(", ") : "（Negativeは未設定です）";
    ui.negativeStatus.textContent = preview.negative.length
      ? "現在のNegative " + preview.negative.length + "語をそのまま維持"
      : "Negativeは追加・変更しません";
    ui.apply.textContent = preview.attention ? "確認して適用" : "このセットを適用";
  }

  function openForInput(input){
    if(!input || input.checked) return false;
    ensureUI();
    const preset = presetByKey(input.dataset.qpV47Key || "");
    const preview = buildPreview(preset);
    if(!preset || !preview) return false;
    state.current = { input:input, preset:preset, preview:preview };
    state.previousFocus = document.activeElement;
    renderPreview(preview);
    ui.backdrop.hidden = false;
    document.body.classList.add("qp-v50-preview-open");
    setTimeout(function(){ try { ui.close.focus(); } catch(e) {} }, 0);
    return true;
  }

  function closePreview(){
    if(!ui.backdrop || ui.backdrop.hidden) return;
    ui.backdrop.hidden = true;
    document.body.classList.remove("qp-v50-preview-open");
    state.current = null;
    const focus = state.previousFocus;
    state.previousFocus = null;
    if(focus && typeof focus.focus === "function"){
      setTimeout(function(){ try { focus.focus(); } catch(e) {} }, 0);
    }
  }

  function snapshotQuickState(){
    const root = shelf();
    return {
      checked:quickInputs().filter(function(input){ return input.checked; }).map(function(input){ return input.id; }),
      family:root && root.dataset ? root.dataset.qpV47Family || "" : "",
      label:(function(){
        const selected = selectedQuickInputs()[0];
        if(!selected) return "未選択";
        const card = selected.closest ? selected.closest(".qp-v47-card") : null;
        return card && card.dataset.qpV47Label ? card.dataset.qpV47Label : selected.dataset.qpV47Label || "調整済み品質";
      })()
    };
  }

  function showUndo(from, to){
    if(!ui.undo) return;
    ui.undoText.textContent = "「" + to + "」を適用しました";
    ui.undoFrom.textContent = "前の状態：" + (from || "未選択");
    ui.undo.hidden = false;
  }

  function dismissUndo(){
    state.undo = null;
    if(ui.undo) ui.undo.hidden = true;
  }

  function applyCurrent(){
    const current = state.current;
    if(!current || !current.input || !current.input.isConnected) return;
    const snapshot = snapshotQuickState();
    state.applying = true;
    try {
      current.input.checked = true;
      current.input.dispatchEvent(new Event("change", { bubbles:true }));
    } finally {
      state.applying = false;
    }
    state.undo = snapshot;
    const label = current.preset.label || "品質セット";
    closePreview();
    showUndo(snapshot.label, label);
  }

  function clickFamily(family){
    if(!family) return;
    const button = document.querySelector('.qp-v47-family-button[data-qp-v47-family="' + family + '"]');
    if(button) button.click();
  }

  function undoLastApply(){
    const snapshot = state.undo;
    if(!snapshot) return false;
    const ids = new Set(snapshot.checked || []);
    const inputs = quickInputs();
    const previouslyChecked = inputs.filter(function(input){ return input.checked; });
    state.applying = true;
    window.__SHIMA_BULK_RESET__ = true;
    try {
      inputs.forEach(function(input){ input.checked = false; });
      previouslyChecked.forEach(function(input){
        input.dispatchEvent(new Event("change", { bubbles:true }));
      });
      inputs.filter(function(input){ return ids.has(input.id); }).forEach(function(input){
        input.checked = true;
        input.dispatchEvent(new Event("change", { bubbles:true }));
      });
      clickFamily(snapshot.family);
    } finally {
      window.__SHIMA_BULK_RESET__ = false;
      state.applying = false;
    }
    if(typeof window.__builderGenerateOutput === "function") window.__builderGenerateOutput();
    try {
      window.dispatchEvent(new CustomEvent("builderHistoryRestored", {
        detail:{ source:"quality-preview-undo", restoredCount:ids.size }
      }));
    } catch(e) {}
    const root = shelf();
    const live = root && root.querySelector(".qp-v47-live");
    if(live) live.textContent = "↩ 品質セットを「" + (snapshot.label || "前の状態") + "」へ戻しました。";
    dismissUndo();
    return true;
  }

  function ensureStyles(){
    if(document.getElementById("qp-v50-preview-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v50-preview-style";
    style.textContent = `
      body.qp-v50-preview-open{ overflow:hidden !important; }
      #qp-v50-preview-backdrop[hidden],#qp-v50-undo[hidden]{ display:none !important; }
      #qp-v50-preview-backdrop{
        position:fixed; inset:0; z-index:2147483000; display:flex; align-items:flex-end; justify-content:center;
        padding:0; background:rgba(4,25,36,.56); backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px);
      }
      #qp-v50-preview-sheet{
        display:flex; flex-direction:column; width:min(100%,720px); max-height:min(88dvh,820px); overflow:hidden;
        border:1px solid #9ccfdd; border-bottom:0; border-radius:22px 22px 0 0;
        background:linear-gradient(180deg,#ffffff 0%,#f2fbfe 100%); color:#173d4b;
        box-shadow:0 -18px 60px rgba(2,35,48,.28);
      }
      #qp-v50-preview-sheet .qp-v50-head{
        position:sticky; top:0; z-index:2; display:flex; align-items:flex-start; justify-content:space-between; gap:12px;
        padding:14px 15px 11px; border-bottom:1px solid #d5e9ef; background:rgba(255,255,255,.96);
      }
      #qp-v50-preview-sheet .qp-v50-eyebrow{ display:block; color:#17929b; font-size:10px; font-weight:950; letter-spacing:.13em; }
      #qp-v50-preview-sheet .qp-v50-title-row{ display:flex; align-items:center; gap:7px; flex-wrap:wrap; margin-top:3px; }
      #qp-v50-preview-sheet h2{ margin:0; color:#123b49; font-size:18px; line-height:1.35; }
      #qp-v50-preview-sheet .qp-v50-family,#qp-v50-preview-sheet .qp-v50-badge{
        padding:3px 7px; border:1px solid #b8dce5; border-radius:999px; background:#edf9fc; color:#286071; font-size:9px; font-weight:900;
      }
      #qp-v50-preview-sheet .qp-v50-close{
        flex:0 0 auto; width:38px; height:38px; border:1px solid #c6dce4; border-radius:50%; background:#f8fcfd; color:#315967;
        font-size:20px; line-height:1; cursor:pointer;
      }
      #qp-v50-preview-sheet .qp-v50-body{ overflow:auto; padding:11px 12px 13px; overscroll-behavior:contain; }
      #qp-v50-preview-sheet .qp-v50-stats{ display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:6px; }
      #qp-v50-preview-sheet .qp-v50-stat{ min-width:0; padding:8px 5px; border:1px solid #d4e6ec; border-radius:11px; background:#fff; text-align:center; }
      #qp-v50-preview-sheet .qp-v50-stat small{ display:block; color:#6c858e; font-size:8px; font-weight:800; }
      #qp-v50-preview-sheet .qp-v50-stat strong{ display:block; margin-top:2px; color:#284f5d; font-size:16px; }
      #qp-v50-preview-sheet .qp-v50-stat strong[data-tone="add"]{ color:#087d69; }
      #qp-v50-preview-sheet .qp-v50-stat strong[data-tone="remove"]{ color:#b14c64; }
      #qp-v50-preview-sheet .qp-v50-stat strong[data-tone="warning"]{ color:#ad7414; }
      #qp-v50-preview-sheet .qp-v50-stat strong[data-tone="ok"]{ color:#16806b; }
      #qp-v50-preview-sheet .qp-v50-section{ margin-top:9px; padding:10px; border:1px solid #d7e7ec; border-radius:12px; background:#fff; }
      #qp-v50-preview-sheet .qp-v50-section h3{ margin:0 0 7px; color:#244d5b; font-size:11px; }
      #qp-v50-preview-sheet .qp-v50-chip-list{ display:flex; gap:5px; flex-wrap:wrap; }
      #qp-v50-preview-sheet .qp-v50-chip,#qp-v50-preview-sheet .qp-v50-more,#qp-v50-preview-sheet .qp-v50-empty{
        display:inline-flex; max-width:100%; padding:4px 7px; border:1px solid #d6e5e9; border-radius:999px; background:#f6fbfc;
        color:#486872; font-size:9px; line-height:1.35; overflow-wrap:anywhere;
      }
      #qp-v50-preview-sheet .qp-v50-chip[data-tone="add"]{ border-color:#a9ded1; background:#eefbf7; color:#176b5a; }
      #qp-v50-preview-sheet .qp-v50-chip[data-tone="remove"]{ border-color:#ecc7d0; background:#fff5f7; color:#9b4057; text-decoration:line-through; }
      #qp-v50-preview-sheet .qp-v50-warning-list{ display:flex; flex-direction:column; gap:6px; }
      #qp-v50-preview-sheet .qp-v50-warning{ padding:8px; border:1px solid #d6e8e5; border-radius:10px; background:#f5fcf9; }
      #qp-v50-preview-sheet .qp-v50-warning[data-tone="warning"]{ border-color:#ecd6a5; background:#fffaf0; }
      #qp-v50-preview-sheet .qp-v50-warning[data-tone="info"]{ border-color:#c9d7ef; background:#f5f8ff; }
      #qp-v50-preview-sheet .qp-v50-warning strong{ display:block; color:#244d5b; font-size:10px; }
      #qp-v50-preview-sheet .qp-v50-warning p,#qp-v50-preview-sheet .qp-v50-warning small{ display:block; margin:3px 0 0; color:#617780; font-size:9px; line-height:1.45; }
      #qp-v50-preview-sheet .qp-v50-output-grid{ display:grid; grid-template-columns:1fr; gap:7px; }
      #qp-v50-preview-sheet .qp-v50-output-box{ min-width:0; }
      #qp-v50-preview-sheet .qp-v50-output-box label{ display:flex; justify-content:space-between; gap:8px; margin-bottom:5px; color:#315866; font-size:10px; font-weight:900; }
      #qp-v50-preview-sheet .qp-v50-output-box label small{ color:#718892; font-size:8px; font-weight:750; }
      #qp-v50-preview-sheet textarea{
        box-sizing:border-box; width:100%; min-height:94px; resize:vertical; padding:9px; border:1px solid #c8dfe6; border-radius:10px;
        background:#f8fcfd; color:#183f4d; font:10px/1.55 ui-monospace,SFMono-Regular,Consolas,monospace;
      }
      #qp-v50-preview-sheet .qp-v50-actions{
        position:sticky; bottom:0; z-index:2; display:grid; grid-template-columns:minmax(92px,.42fr) minmax(0,1fr); gap:8px;
        padding:10px 12px calc(10px + env(safe-area-inset-bottom)); border-top:1px solid #d4e6ec; background:rgba(255,255,255,.97);
      }
      #qp-v50-preview-sheet .qp-v50-actions button{ min-height:48px; border-radius:13px; font-size:12px; font-weight:950; cursor:pointer; }
      #qp-v50-preview-sheet .qp-v50-cancel{ border:1px solid #cadde4; background:#f5fafb; color:#46646f; }
      #qp-v50-preview-sheet .qp-v50-apply{ border:1px solid #28acae; background:linear-gradient(135deg,#dffcf7,#c9f5f4); color:#0f6262; box-shadow:0 6px 16px rgba(35,145,151,.16); }
      #qp-v50-undo{
        position:fixed; left:50%; bottom:calc(82px + env(safe-area-inset-bottom)); z-index:2147482000; transform:translateX(-50%);
        display:flex; align-items:center; gap:9px; width:min(calc(100% - 22px),620px); box-sizing:border-box; padding:9px 9px 9px 12px;
        border:1px solid #91ccd4; border-radius:15px; background:rgba(250,255,255,.97); color:#244b58; box-shadow:0 10px 28px rgba(7,54,69,.22);
      }
      #qp-v50-undo .qp-v50-undo-copy{ display:flex; flex:1 1 auto; min-width:0; flex-direction:column; }
      #qp-v50-undo strong{ font-size:10px; overflow-wrap:anywhere; }
      #qp-v50-undo small{ color:#71858d; font-size:8px; }
      #qp-v50-undo .qp-v50-undo-button{ flex:0 0 auto; min-height:38px; padding:6px 10px; border:1px solid #4fbac0; border-radius:10px; background:#e5fbfa; color:#11686a; font-size:10px; font-weight:950; }
      #qp-v50-undo .qp-v50-undo-dismiss{ flex:0 0 auto; width:34px; height:34px; border:0; background:transparent; color:#66808a; font-size:17px; }
      #qp-v47-quick-presets .qp-v50-preview-note{ margin:0 10px 8px; padding:7px 9px; border:1px dashed #9ed6df; border-radius:10px; background:#f8feff; color:#267080; font-size:10px; font-weight:850; }
      @media (min-width:760px){
        #qp-v50-preview-backdrop{ align-items:center; padding:20px; }
        #qp-v50-preview-sheet{ border-bottom:1px solid #9ccfdd; border-radius:22px; }
        #qp-v50-preview-sheet .qp-v50-output-grid{ grid-template-columns:1.35fr .65fr; }
        #qp-v50-undo{ bottom:20px; }
      }
      @media (max-width:420px){
        #qp-v50-preview-sheet{ max-height:92dvh; }
        #qp-v50-preview-sheet .qp-v50-stats{ grid-template-columns:repeat(2,minmax(0,1fr)); }
        #qp-v50-preview-sheet .qp-v50-actions{ grid-template-columns:.8fr 1.2fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function makeStat(label){
    const card = create("div", "qp-v50-stat");
    card.appendChild(create("small", "", label));
    const value = create("strong", "", "0");
    card.appendChild(value);
    return { card:card, value:value };
  }

  function makeOutputBox(label, hint){
    const box = create("div", "qp-v50-output-box");
    const head = create("label");
    head.appendChild(create("span", "", label));
    const status = create("small", "", hint || "");
    head.appendChild(status);
    const area = create("textarea");
    area.readOnly = true;
    area.setAttribute("aria-label", label);
    box.appendChild(head);
    box.appendChild(area);
    return { box:box, area:area, status:status };
  }

  function ensureUI(){
    ensureStyles();
    if(ui.backdrop && ui.backdrop.isConnected) return;

    const backdrop = create("div");
    backdrop.id = "qp-v50-preview-backdrop";
    backdrop.hidden = true;
    const sheet = create("section");
    sheet.id = "qp-v50-preview-sheet";
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    sheet.setAttribute("aria-labelledby", "qp-v50-preview-title");

    const head = create("header", "qp-v50-head");
    const heading = create("div");
    heading.appendChild(create("span", "qp-v50-eyebrow", "PRESET FITTING / 適用前確認"));
    const titleRow = create("div", "qp-v50-title-row");
    ui.title = create("h2", "", "品質セット");
    ui.title.id = "qp-v50-preview-title";
    ui.family = create("span", "qp-v50-family", "❄️ 品質");
    ui.badge = create("span", "qp-v50-badge", "SET");
    titleRow.appendChild(ui.title);
    titleRow.appendChild(ui.family);
    titleRow.appendChild(ui.badge);
    heading.appendChild(titleRow);
    ui.close = create("button", "qp-v50-close", "×");
    ui.close.type = "button";
    ui.close.setAttribute("aria-label", "試着画面を閉じる");
    head.appendChild(heading);
    head.appendChild(ui.close);
    sheet.appendChild(head);

    const body = create("div", "qp-v50-body");
    const stats = create("div", "qp-v50-stats");
    const added = makeStat("追加");
    const removed = makeStat("解除");
    const chars = makeStat("文字差");
    const attention = makeStat("要確認");
    ui.addedStat = added.value;
    ui.removedStat = removed.value;
    ui.charStat = chars.value;
    ui.attentionStat = attention.value;
    stats.appendChild(added.card);
    stats.appendChild(removed.card);
    stats.appendChild(chars.card);
    stats.appendChild(attention.card);
    body.appendChild(stats);

    const addSection = create("section", "qp-v50-section");
    addSection.appendChild(create("h3", "", "＋ 加わる品質語"));
    ui.addedList = create("div", "qp-v50-chip-list");
    addSection.appendChild(ui.addedList);
    body.appendChild(addSection);

    const removeSection = create("section", "qp-v50-section");
    removeSection.appendChild(create("h3", "", "− 入れ替えで外れる品質語"));
    ui.removedList = create("div", "qp-v50-chip-list");
    removeSection.appendChild(ui.removedList);
    body.appendChild(removeSection);

    const warningSection = create("section", "qp-v50-section");
    warningSection.appendChild(create("h3", "", "◎ 重複・作風相性"));
    ui.warningList = create("div", "qp-v50-warning-list");
    warningSection.appendChild(ui.warningList);
    body.appendChild(warningSection);

    const outputSection = create("section", "qp-v50-section");
    outputSection.appendChild(create("h3", "", "出力プレビュー"));
    const outputGrid = create("div", "qp-v50-output-grid");
    const positive = makeOutputBox("Positive（適用後）", "生成時に出力順を整えます");
    const negative = makeOutputBox("Negative（維持）", "追加・変更なし");
    ui.positivePreview = positive.area;
    ui.negativePreview = negative.area;
    ui.negativeStatus = negative.status;
    outputGrid.appendChild(positive.box);
    outputGrid.appendChild(negative.box);
    outputSection.appendChild(outputGrid);
    body.appendChild(outputSection);
    sheet.appendChild(body);

    const actions = create("footer", "qp-v50-actions");
    ui.cancel = create("button", "qp-v50-cancel", "やめる");
    ui.cancel.type = "button";
    ui.apply = create("button", "qp-v50-apply", "このセットを適用");
    ui.apply.type = "button";
    actions.appendChild(ui.cancel);
    actions.appendChild(ui.apply);
    sheet.appendChild(actions);
    backdrop.appendChild(sheet);
    document.body.appendChild(backdrop);
    ui.backdrop = backdrop;
    ui.sheet = sheet;

    const undo = create("aside");
    undo.id = "qp-v50-undo";
    undo.hidden = true;
    const undoCopy = create("div", "qp-v50-undo-copy");
    ui.undoText = create("strong", "", "品質セットを適用しました");
    ui.undoFrom = create("small", "", "前の状態：未選択");
    undoCopy.appendChild(ui.undoText);
    undoCopy.appendChild(ui.undoFrom);
    const undoButton = create("button", "qp-v50-undo-button", "↩ 元に戻す");
    undoButton.type = "button";
    const undoDismiss = create("button", "qp-v50-undo-dismiss", "×");
    undoDismiss.type = "button";
    undoDismiss.setAttribute("aria-label", "元に戻す案内を閉じる");
    undo.appendChild(undoCopy);
    undo.appendChild(undoButton);
    undo.appendChild(undoDismiss);
    document.body.appendChild(undo);
    ui.undo = undo;

    ui.close.addEventListener("click", closePreview);
    ui.cancel.addEventListener("click", closePreview);
    ui.apply.addEventListener("click", applyCurrent);
    backdrop.addEventListener("click", function(event){ if(event.target === backdrop) closePreview(); });
    undoButton.addEventListener("click", undoLastApply);
    undoDismiss.addEventListener("click", dismissUndo);
  }

  function enhanceShelf(){
    const root = shelf();
    if(!root) return;
    ensureUI();
    if(!root.querySelector(".qp-v50-preview-note")){
      const note = create("div", "qp-v50-preview-note", "👁 セットをタップすると、チェック前に追加・解除・相性を確認できます。");
      const tabs = root.querySelector(".qp-v47-family-tabs");
      if(tabs) root.insertBefore(note, tabs);
      else root.appendChild(note);
    }
    qsAll(root, '.qp-v47-card input[data-qp-v47-kind="pack"]').forEach(function(input){
      input.setAttribute("aria-haspopup", "dialog");
    });
  }

  function bindGlobal(){
    if(document.documentElement.dataset.qpV50Bound === "true") return;
    document.documentElement.dataset.qpV50Bound = "true";

    document.addEventListener("click", function(event){
      if(state.applying || !event.target || !event.target.closest) return;
      const select = event.target.closest(".qp-v47-select");
      if(!select || !select.closest("#qp-v47-quick-presets")) return;
      const input = select.querySelector('input[data-qp-v47-kind="pack"]');
      if(!input || input.checked) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      openForInput(input);
    }, true);

    document.addEventListener("change", function(event){
      if(state.applying) return;
      const input = event.target;
      if(input && input.closest && input.closest("#list-quality_preset")) dismissUndo();
    }, true);

    document.addEventListener("keydown", function(event){
      if(event.key === "Escape" && ui.backdrop && !ui.backdrop.hidden){
        event.preventDefault();
        closePreview();
      }
    });

    document.addEventListener("builderResetAll", function(){
      closePreview();
      dismissUndo();
    }, true);
    window.addEventListener("builderHistoryRestored", function(event){
      if(event && event.detail && event.detail.source === "quality-preview-undo") return;
      closePreview();
      dismissUndo();
    });
  }

  const API = {
    initUI(){
      ensureStyles();
      ensureUI();
      enhanceShelf();
      bindGlobal();
      setTimeout(enhanceShelf, 0);
      setTimeout(enhanceShelf, 260);
    },
    getTags(){ return []; }
  };

  window.ShimaQualityPreview = {
    preview:function(key){ return buildPreview(presetByKey(key)); },
    open:function(key){
      const input = document.querySelector('input[data-qp-v47-kind="pack"][data-qp-v47-key="' + key + '"]');
      return openForInput(input);
    },
    apply:applyCurrent,
    undo:undoLastApply,
    close:closePreview,
    hasUndo:function(){ return !!state.undo; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }else{
    document.addEventListener("DOMContentLoaded", function(){ API.initUI(); }, { once:true });
  }
})();
