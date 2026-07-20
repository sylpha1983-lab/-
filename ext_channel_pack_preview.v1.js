(function(){
  "use strict";

  if(window.__SHIMA_CHANNEL_PACK_PREVIEW_V1__) return;
  window.__SHIMA_CHANNEL_PACK_PREVIEW_V1__ = true;

  const VERSION = 54;
  const KEY = "quality_preset";
  const SHELVES = ["qp-v51-positive-expression", "qp-v51-negative-only"];
  const state = {
    records:new Map(),
    current:null,
    applying:false,
    editor:false,
    previousFocus:null,
    syncTimer:0,
    toastTimer:0
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
    return String(value || "").replace(/[★☆]/g, "").replace(/\s+/g, " ").trim();
  }

  function valueOf(input){
    const data = input && input.dataset ? input.dataset : {};
    return data.val || data.en || "";
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
      }else buffer += char;
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

  function uniqueTokens(tokens){
    const seen = new Set();
    return (tokens || []).filter(function(token){
      const core = coreOf(token);
      if(!core || core === "break" || seen.has(core)) return false;
      seen.add(core);
      return true;
    });
  }

  function channelOf(input){
    return input && input.dataset && input.dataset.outputChannel === "negative" ? "negative" : "positive";
  }

  function intentOf(input){
    const data = input && input.dataset ? input.dataset : {};
    return data.promptIntent || (data.outputChannel === "negative" ? "negative-only" : "positive-expression");
  }

  function toneOf(channel, intent){
    if(channel === "negative") return "negative";
    if(intent === "positive-suppression") return "suppression";
    if(intent === "positive-normal") return "positive";
    return "expression";
  }

  function routeLabel(channel, intent){
    if(channel === "negative") return "NEG専用";
    if(intent === "positive-suppression") return "POS抑制";
    if(intent === "positive-normal") return "POS通常";
    return "POS表現";
  }

  function packLabel(input){
    const data = input && input.dataset ? input.dataset : {};
    return cleanText(data.label || data.ja || "") || "まとめセット";
  }

  function safePart(value){
    return String(value || "pack")
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "") || "pack";
  }

  function recordId(input){
    return input && input.id ? input.id : "qp-v54-pack-" + (state.records.size + 1);
  }

  function makeSplitItem(record, token, index){
    const label = create("label", "qp-item qp-v51-item qp-v54-split-item");
    label.dataset.tone = record.tone;
    const input = create("input");
    input.type = "checkbox";
    const stableId = "qp-v54-split-" + safePart(record.id) + "-" + String(index + 1).padStart(2, "0");
    input.id = stableId;
    input.dataset.packId = stableId;
    input.dataset.val = token;
    input.dataset.en = token;
    input.dataset.ja = token;
    input.dataset.label = token;
    input.dataset.outputChannel = record.channel;
    input.dataset.promptIntent = record.intent;
    input.dataset.shimaDecomposed = "1";
    input.dataset.shimaPackParent = record.id;
    input.dataset.shimaPackPreviewHidden = "1";
    input.setAttribute("autocomplete", "off");

    const body = create("span", "qp-v51-item-body");
    const row = create("span", "qp-v51-item-title-row");
    row.appendChild(create("strong", "qp-v51-item-title", token));
    const badge = create("small", "qp-v51-route-badge", routeLabel(record.channel, record.intent));
    badge.dataset.tone = record.tone;
    row.appendChild(badge);
    body.appendChild(row);
    body.appendChild(create("span", "qp-v54-split-note", "分解した1語として個別に出力"));
    label.appendChild(input);
    label.appendChild(body);
    return { label:label, input:input };
  }

  function ensureBank(shelf){
    let bank = shelf.querySelector(":scope .qp-v54-split-bank");
    if(bank) return bank;
    bank = create("section", "qp-v54-split-bank");
    bank.hidden = true;
    bank.dataset.shelfId = shelf.id;
    const head = create("div", "qp-v54-split-bank-head");
    head.appendChild(create("strong", "", "🧩 分解して選択中"));
    head.appendChild(create("small", "", "各ワードをここから個別に外せます"));
    bank.appendChild(head);
    const host = shelf.querySelector(":scope > .qp-v51-content") || shelf;
    host.appendChild(bank);
    return bank;
  }

  function buildRecord(input, bank){
    const id = recordId(input);
    if(!input.id) input.id = id;
    if(state.records.has(id)) return state.records.get(id);
    const tokens = uniqueTokens(splitPrompt(valueOf(input)));
    if(tokens.length < 2) return null;
    const channel = channelOf(input);
    const intent = intentOf(input);
    const record = {
      id:id,
      input:input,
      label:packLabel(input),
      tokens:tokens,
      channel:channel,
      intent:intent,
      tone:toneOf(channel, intent),
      bank:bank,
      group:null,
      count:null,
      bankInputs:[]
    };

    const group = create("details", "qp-v54-split-group");
    group.hidden = true;
    group.dataset.packId = id;
    const summary = create("summary", "qp-v54-split-summary");
    summary.appendChild(create("span", "", record.label));
    record.count = create("small", "", "0 / " + tokens.length);
    summary.appendChild(record.count);
    group.appendChild(summary);
    const tools = create("div", "qp-v54-split-tools");
    const clear = create("button", "qp-v54-clear-split", "この分解語を全解除");
    clear.type = "button";
    clear.dataset.qpV54Clear = id;
    tools.appendChild(clear);
    group.appendChild(tools);
    const grid = create("div", "qp-content-grid qp-v51-grid qp-v54-split-grid");
    tokens.forEach(function(token, index){
      const item = makeSplitItem(record, token, index);
      record.bankInputs.push(item.input);
      grid.appendChild(item.label);
    });
    group.appendChild(grid);
    bank.appendChild(group);
    record.group = group;
    state.records.set(id, record);
    input.dataset.shimaPackPreview = "1";
    input.dataset.shimaPackPreviewId = id;
    return record;
  }

  function addShelfNote(shelf){
    const host = shelf.querySelector(":scope > .qp-v51-content") || shelf;
    if(host.querySelector(":scope > .qp-v54-preview-note")) return;
    const note = create("div", "qp-v54-preview-note");
    note.appendChild(create("strong", "", "☑ □はその場でON/OFF・カード本文は詳細確認"));
    note.appendChild(create("span", "", "セット名や説明を押すと、そのまま適用／語ごとに分解／キャンセルを選べます。"));
    const notice = host.querySelector(":scope > .qp-v51-notice, :scope > .qp-v51-channel-status");
    if(notice && notice.nextSibling) host.insertBefore(note, notice.nextSibling);
    else host.insertBefore(note, host.firstChild);
  }

  function selectedCount(record){
    return record.bankInputs.filter(function(input){ return input.checked; }).length;
  }

  function removeFavoriteDecorations(record){
    record.bankInputs.forEach(function(input){
      const label = input.closest("label");
      const star = label && label.querySelector(":scope > .zero-favorite-star");
      if(star) star.remove();
      if(label){
        label.classList.remove("zero-assist-favoritable");
        delete label.dataset.zeroAssistQueued;
      }
    });
  }

  function syncRecord(record){
    const count = selectedCount(record);
    const wasHidden = record.group.hidden;
    const active = count > 0;
    record.group.hidden = !active;
    if(active && wasHidden) record.group.open = true;
    if(!active) record.group.open = false;
    record.count.textContent = count + " / " + record.tokens.length;
    record.bankInputs.forEach(function(input){
      if(active) delete input.dataset.shimaPackPreviewHidden;
      else input.dataset.shimaPackPreviewHidden = "1";
    });
    if(!active) removeFavoriteDecorations(record);
  }

  function invalidateHelpers(){
    try {
      if(window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") window.ShimaChannelSearch.invalidate();
      else if(window.ShimaChannelSearch && typeof window.ShimaChannelSearch.refresh === "function") window.ShimaChannelSearch.refresh();
    } catch(e) {}
    try { if(window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh(); } catch(e) {}
    try { if(window.ShimaPromptChannels && typeof window.ShimaPromptChannels.refresh === "function") window.ShimaPromptChannels.refresh(); } catch(e) {}
  }

  function syncAll(){
    state.records.forEach(syncRecord);
    qsAll(document, ".qp-v54-split-bank").forEach(function(bank){
      bank.hidden = !qsAll(bank, ".qp-v54-split-group").some(function(group){ return !group.hidden; });
    });
    invalidateHelpers();
  }

  function scheduleSync(delay){
    clearTimeout(state.syncTimer);
    state.syncTimer = setTimeout(function(){ state.syncTimer = 0; syncAll(); }, delay == null ? 25 : delay);
  }

  function enhancePacks(){
    let found = 0;
    SHELVES.forEach(function(id){
      const shelf = document.getElementById(id);
      if(!shelf) return;
      addShelfNote(shelf);
      const bank = ensureBank(shelf);
      qsAll(shelf, 'input[type="checkbox"][data-val]:not([data-shima-decomposed="1"])').forEach(function(input){
        if(splitPrompt(valueOf(input)).length < 2) return;
        if(buildRecord(input, bank)) found++;
      });
    });

    const presetHosts = new Set();
    qsAll(document, '#list-preset_packs input[type="checkbox"][data-shima-pack-preview-enabled="1"][data-val]').forEach(function(input){
      const host = input.closest("details.preset-pack-group") || document.getElementById("list-preset_packs");
      if(!host) return;
      const bank = ensureBank(host);
      if(buildRecord(input, bank)) found++;
      presetHosts.add(host);
    });
    presetHosts.forEach(function(host){
      const content = host.querySelector(":scope > .preset-pack-items");
      if(!content || content.querySelector(":scope > .qp-v54-preset-note")) return;
      const note = create("div", "qp-v54-preview-note qp-v54-preset-note");
      note.appendChild(create("strong", "", "☑ □は即時ON/OFF・カード本文は適用前確認"));
      note.appendChild(create("span", "", "Positiveへの追加内容と、現在のNegativeが維持されることを確認してから適用できます。"));
      content.insertBefore(note, content.firstChild);
    });
    syncAll();
    return found;
  }

  function selectedTokensFor(channel, excluded){
    const exclude = excluded || new Set();
    const tokens = [];
    qsAll(document, '#sections input[type="checkbox"]:checked').forEach(function(input){
      if(exclude.has(input) || !valueOf(input)) return;
      if(channelOf(input) !== channel) return;
      splitPrompt(valueOf(input)).forEach(function(token){ if(token) tokens.push(token); });
    });
    if(channel === "negative"){
      qsAll(document, '#qp-v49-quality-control input[data-shima-negative-tag]:checked').forEach(function(input){
        const token = input.dataset.shimaNegativeTag || "";
        if(token) tokens.push(token);
      });
    }
    return tokens;
  }

  function relationList(tokens, against, shouldExist){
    const cores = new Set((against || []).map(coreOf).filter(Boolean));
    return uniqueTokens((tokens || []).filter(function(token){
      const exists = cores.has(coreOf(token));
      return shouldExist ? exists : !exists;
    }));
  }

  function previewFor(record){
    if(!record) return null;
    const related = new Set([record.input].concat(record.bankInputs));
    const same = selectedTokensFor(record.channel, related);
    const oppositeChannel = record.channel === "negative" ? "positive" : "negative";
    const opposite = selectedTokensFor(oppositeChannel, related);
    const compositeChecked = !!record.input.checked;
    const splitCount = selectedCount(record);
    const additions = relationList(record.tokens, same, false);
    const duplicates = relationList(record.tokens, same, true);
    const collisions = relationList(record.tokens, opposite, true);
    const after = compositeChecked ? same.slice() : same.concat(record.tokens);
    return {
      id:record.id,
      label:record.label,
      channel:record.channel,
      intent:record.intent,
      route:routeLabel(record.channel, record.intent),
      tone:record.tone,
      tokens:record.tokens.slice(),
      additions:additions,
      removed:compositeChecked ? additions : [],
      duplicates:duplicates,
      collisions:collisions,
      sameAfter:after,
      opposite:opposite,
      oppositeChannel:oppositeChannel,
      compositeChecked:compositeChecked,
      splitCount:splitCount,
      status:compositeChecked ? "セット選択中" : splitCount ? "分解して " + splitCount + " / " + record.tokens.length + "語を選択中" : "未選択"
    };
  }

  function empty(node){
    while(node && node.firstChild) node.removeChild(node.firstChild);
  }

  function renderChips(node, tokens, emptyText, tone){
    empty(node);
    const list = tokens || [];
    if(!list.length){
      node.appendChild(create("span", "qp-v54-empty", emptyText || "なし"));
      return;
    }
    list.forEach(function(token){
      const chip = create("span", "qp-v54-chip", token);
      if(tone) chip.dataset.tone = tone;
      node.appendChild(chip);
    });
  }

  function setSummaryText(preview){
    ui.eyebrow.textContent = "PACK FITTING / 適用前確認";
    ui.title.textContent = preview.label;
    ui.route.textContent = preview.route + "へ出力";
    ui.route.dataset.tone = preview.tone;
    ui.status.textContent = preview.status;
    ui.status.dataset.tone = preview.compositeChecked || preview.splitCount ? "active" : "";
    ui.totalStat.textContent = String(preview.tokens.length);
    ui.changeStat.textContent = String(preview.compositeChecked ? preview.removed.length : preview.additions.length);
    ui.changeStat.dataset.tone = preview.compositeChecked ? "remove" : "add";
    ui.changeLabel.textContent = preview.compositeChecked ? "解除で外れる" : "新しく加わる";
    ui.duplicateStat.textContent = String(preview.duplicates.length);
    ui.duplicateStat.dataset.tone = preview.duplicates.length ? "warning" : "ok";
    ui.collisionStat.textContent = String(preview.collisions.length);
    ui.collisionStat.dataset.tone = preview.collisions.length ? "warning" : "ok";

    ui.changeHeading.textContent = preview.compositeChecked ? "− 解除すると外れる語" : "＋ 新しく加わる語";
    renderChips(ui.allList, preview.tokens, "セット内容なし");
    renderChips(ui.changeList, preview.compositeChecked ? preview.removed : preview.additions, preview.compositeChecked ? "他の選択からも維持されます" : "すべて既に選択済みです", preview.compositeChecked ? "remove" : "add");
    renderChips(ui.duplicateList, preview.duplicates, "同じ出力先での重複なし", preview.duplicates.length ? "warning" : "ok");
    renderChips(ui.collisionList, preview.collisions, "POS／NEG間の同語なし", preview.collisions.length ? "collision" : "ok");
    ui.collisionNote.textContent = preview.collisions.length
      ? "反対側にも同じ語があります。意図的なら両方に残せます。自動解除はしません。"
      : "反対側の出力は変更しません。";
    ui.sameOutputLabel.textContent = (preview.channel === "negative" ? "Negative" : "Positive") + "（適用後）";
    ui.sameOutput.value = preview.sameAfter.join(", ");
    ui.oppositeOutputLabel.textContent = (preview.oppositeChannel === "negative" ? "Negative" : "Positive") + "（維持）";
    ui.oppositeOutput.value = preview.opposite.join(", ");
    ui.split.textContent = preview.splitCount ? "分解を編集" : preview.compositeChecked ? "分解へ置き換える" : "分解して選ぶ";
    ui.main.textContent = preview.compositeChecked ? "セットを解除" : preview.splitCount ? "セットへまとめる" : "そのまま適用";
  }

  function renderSummary(){
    const record = state.current;
    if(!record) return;
    state.editor = false;
    const preview = previewFor(record);
    state.preview = preview;
    ui.sheet.dataset.mode = "summary";
    ui.summaryBody.hidden = false;
    ui.editorBody.hidden = true;
    ui.split.hidden = false;
    ui.main.disabled = false;
    ui.cancel.textContent = "やめる";
    setSummaryText(preview);
  }

  function editorCheckedCount(){
    return qsAll(ui.editorList, 'input[type="checkbox"]:checked').length;
  }

  function updateEditorCount(){
    const checked = editorCheckedCount();
    const total = state.current ? state.current.tokens.length : 0;
    ui.editorCount.textContent = checked + " / " + total + "語を適用";
    ui.main.disabled = checked === 0;
    ui.editorToggle.textContent = checked === total ? "全解除" : "すべて選択";
  }

  function openEditor(){
    const record = state.current;
    if(!record) return;
    state.editor = true;
    ui.sheet.dataset.mode = "editor";
    ui.summaryBody.hidden = true;
    ui.editorBody.hidden = false;
    ui.split.hidden = true;
    ui.cancel.textContent = "戻る";
    ui.main.textContent = "選んだ語を適用";
    ui.eyebrow.textContent = "PACK DECOMPOSE / 個別選択";
    ui.title.textContent = record.label;
    ui.route.textContent = routeLabel(record.channel, record.intent) + "へ出力";
    ui.route.dataset.tone = record.tone;
    ui.status.textContent = "チェックした語だけを個別項目にします";
    empty(ui.editorList);
    const anySplit = record.bankInputs.some(function(input){ return input.checked; });
    record.tokens.forEach(function(token, index){
      const label = create("label", "qp-v54-editor-item");
      const input = create("input");
      input.type = "checkbox";
      input.checked = anySplit ? record.bankInputs[index].checked : true;
      input.dataset.tokenIndex = String(index);
      label.appendChild(input);
      label.appendChild(create("span", "", token));
      ui.editorList.appendChild(label);
    });
    updateEditorCount();
    const first = ui.editorList.querySelector('input[type="checkbox"]');
    if(first) setTimeout(function(){ try { first.focus({ preventScroll:true }); } catch(e){ first.focus(); } }, 0);
  }

  function showToast(message, tone){
    if(!ui.toast) return;
    ui.toast.textContent = message;
    ui.toast.dataset.tone = tone || "";
    ui.toast.hidden = false;
    ui.toast.classList.remove("is-visible");
    void ui.toast.offsetWidth;
    ui.toast.classList.add("is-visible");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(function(){
      ui.toast.classList.remove("is-visible");
      ui.toast.hidden = true;
    }, 2600);
  }

  function setChecked(input, checked, changed){
    if(!input || input.checked === checked) return;
    input.checked = checked;
    changed.push(input);
  }

  function dispatchChanged(changed){
    (changed || []).forEach(function(input){
      try { input.dispatchEvent(new Event("change", { bubbles:true })); } catch(e) {}
    });
  }

  function applyWhole(){
    const record = state.current;
    if(!record) return false;
    const changed = [];
    const removing = record.input.checked;
    state.applying = true;
    try {
      record.bankInputs.forEach(function(input){ setChecked(input, false, changed); });
      setChecked(record.input, !removing, changed);
      dispatchChanged(changed);
    } finally {
      state.applying = false;
    }
    syncAll();
    closePreview();
    showToast(removing ? "「" + record.label + "」を解除しました" : routeLabel(record.channel, record.intent) + "へ「" + record.label + "」を適用しました", removing ? "remove" : record.tone);
    return true;
  }

  function applyDecomposition(){
    const record = state.current;
    if(!record) return false;
    const selected = new Set(qsAll(ui.editorList, 'input[type="checkbox"]:checked').map(function(input){ return Number(input.dataset.tokenIndex); }));
    if(!selected.size) return false;
    const changed = [];
    state.applying = true;
    try {
      setChecked(record.input, false, changed);
      record.bankInputs.forEach(function(input, index){ setChecked(input, selected.has(index), changed); });
      dispatchChanged(changed);
    } finally {
      state.applying = false;
    }
    syncAll();
    closePreview();
    showToast(routeLabel(record.channel, record.intent) + "へ " + selected.size + "語を分解して選択しました", record.tone);
    return true;
  }

  function clearRecord(record){
    if(!record) return;
    const changed = [];
    state.applying = true;
    try {
      record.bankInputs.forEach(function(input){ setChecked(input, false, changed); });
      dispatchChanged(changed);
    } finally {
      state.applying = false;
    }
    syncAll();
    showToast("「" + record.label + "」の分解語を解除しました", "remove");
  }

  function openForRecord(record){
    if(!record) return false;
    ensureUI();
    state.current = record;
    state.previousFocus = document.activeElement;
    renderSummary();
    ui.backdrop.hidden = false;
    document.body.classList.add("qp-v54-preview-open");
    setTimeout(function(){ try { ui.close.focus({ preventScroll:true }); } catch(e){ ui.close.focus(); } }, 0);
    return true;
  }

  function closePreview(){
    if(!ui.backdrop || ui.backdrop.hidden) return;
    ui.backdrop.hidden = true;
    document.body.classList.remove("qp-v54-preview-open");
    state.current = null;
    state.preview = null;
    state.editor = false;
    const previous = state.previousFocus;
    state.previousFocus = null;
    if(previous && previous.isConnected){
      setTimeout(function(){ try { previous.focus({ preventScroll:true }); } catch(e){ try { previous.focus(); } catch(_) {} } }, 0);
    }
  }

  function makeStat(label){
    const card = create("div", "qp-v54-stat");
    const small = create("small", "", label);
    const strong = create("strong", "", "0");
    card.appendChild(small);
    card.appendChild(strong);
    return { card:card, label:small, value:strong };
  }

  function makeSection(title){
    const section = create("section", "qp-v54-section");
    const heading = create("h3", "", title);
    const list = create("div", "qp-v54-chip-list");
    section.appendChild(heading);
    section.appendChild(list);
    return { section:section, heading:heading, list:list };
  }

  function makeOutput(){
    const box = create("div", "qp-v54-output-box");
    const label = create("strong", "", "出力");
    const area = create("textarea");
    area.readOnly = true;
    box.appendChild(label);
    box.appendChild(area);
    return { box:box, label:label, area:area };
  }

  function ensureUI(){
    ensureStyles();
    if(ui.backdrop && ui.backdrop.isConnected) return;
    const backdrop = create("div");
    backdrop.id = "qp-v54-preview-backdrop";
    backdrop.hidden = true;
    const sheet = create("section");
    sheet.id = "qp-v54-preview-sheet";
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    sheet.setAttribute("aria-labelledby", "qp-v54-preview-title");

    const head = create("header", "qp-v54-head");
    const heading = create("div", "qp-v54-heading");
    ui.eyebrow = create("span", "qp-v54-eyebrow", "PACK FITTING / 適用前確認");
    const titleRow = create("div", "qp-v54-title-row");
    ui.title = create("h2", "", "まとめセット");
    ui.title.id = "qp-v54-preview-title";
    ui.route = create("span", "qp-v54-route", "POS表現へ出力");
    titleRow.appendChild(ui.title);
    titleRow.appendChild(ui.route);
    ui.status = create("p", "qp-v54-status", "未選択");
    heading.appendChild(ui.eyebrow);
    heading.appendChild(titleRow);
    heading.appendChild(ui.status);
    ui.close = create("button", "qp-v54-close", "×");
    ui.close.type = "button";
    ui.close.setAttribute("aria-label", "試着画面を閉じる");
    head.appendChild(heading);
    head.appendChild(ui.close);
    sheet.appendChild(head);

    ui.summaryBody = create("div", "qp-v54-body qp-v54-summary-body");
    const stats = create("div", "qp-v54-stats");
    const total = makeStat("全ワード");
    const change = makeStat("新しく加わる");
    const duplicate = makeStat("同出力の重複");
    const collision = makeStat("POS/NEG同語");
    ui.totalStat = total.value;
    ui.changeStat = change.value;
    ui.changeLabel = change.label;
    ui.duplicateStat = duplicate.value;
    ui.collisionStat = collision.value;
    [total, change, duplicate, collision].forEach(function(stat){ stats.appendChild(stat.card); });
    ui.summaryBody.appendChild(stats);

    const all = makeSection("セットに含まれる全ワード");
    const changed = makeSection("＋ 新しく加わる語");
    const duplicateSection = makeSection("◎ 同じ出力先での重複");
    const collisionSection = makeSection("⚠ Positive／Negative間の同語");
    ui.allList = all.list;
    ui.changeHeading = changed.heading;
    ui.changeList = changed.list;
    ui.duplicateList = duplicateSection.list;
    ui.collisionList = collisionSection.list;
    ui.collisionList.classList.add("qp-v54-collision-list");
    ui.collisionNote = create("p", "qp-v54-note", "反対側の出力は変更しません。");
    collisionSection.section.appendChild(ui.collisionNote);
    [all, changed, duplicateSection, collisionSection].forEach(function(part){ ui.summaryBody.appendChild(part.section); });

    const outputSection = create("section", "qp-v54-section");
    outputSection.appendChild(create("h3", "", "出力先プレビュー（チェック項目ベース）"));
    const outputGrid = create("div", "qp-v54-output-grid");
    const same = makeOutput();
    const opposite = makeOutput();
    ui.sameOutputLabel = same.label;
    ui.sameOutput = same.area;
    ui.oppositeOutputLabel = opposite.label;
    ui.oppositeOutput = opposite.area;
    outputGrid.appendChild(same.box);
    outputGrid.appendChild(opposite.box);
    outputSection.appendChild(outputGrid);
    ui.summaryBody.appendChild(outputSection);
    sheet.appendChild(ui.summaryBody);

    ui.editorBody = create("div", "qp-v54-body qp-v54-editor-body");
    ui.editorBody.hidden = true;
    const editorIntro = create("div", "qp-v54-editor-intro");
    const editorCopy = create("div");
    editorCopy.appendChild(create("strong", "", "必要な語だけ残してください"));
    editorCopy.appendChild(create("p", "", "適用するまでは元のセットも選択状態も変わりません。"));
    ui.editorToggle = create("button", "qp-v54-editor-toggle", "全解除");
    ui.editorToggle.type = "button";
    editorIntro.appendChild(editorCopy);
    editorIntro.appendChild(ui.editorToggle);
    ui.editorBody.appendChild(editorIntro);
    ui.editorCount = create("div", "qp-v54-editor-count", "0語を適用");
    ui.editorBody.appendChild(ui.editorCount);
    ui.editorList = create("div", "qp-v54-editor-list");
    ui.editorBody.appendChild(ui.editorList);
    sheet.appendChild(ui.editorBody);

    const actions = create("footer", "qp-v54-actions");
    ui.cancel = create("button", "qp-v54-cancel", "やめる");
    ui.cancel.type = "button";
    ui.split = create("button", "qp-v54-split", "分解して選ぶ");
    ui.split.type = "button";
    ui.main = create("button", "qp-v54-main", "そのまま適用");
    ui.main.type = "button";
    actions.appendChild(ui.cancel);
    actions.appendChild(ui.split);
    actions.appendChild(ui.main);
    sheet.appendChild(actions);
    backdrop.appendChild(sheet);
    document.body.appendChild(backdrop);
    ui.backdrop = backdrop;
    ui.sheet = sheet;

    ui.toast = create("div", "qp-v54-toast");
    ui.toast.hidden = true;
    ui.toast.setAttribute("role", "status");
    ui.toast.setAttribute("aria-live", "polite");
    document.body.appendChild(ui.toast);

    ui.close.addEventListener("click", closePreview);
    ui.cancel.addEventListener("click", function(){ if(state.editor) renderSummary(); else closePreview(); });
    ui.split.addEventListener("click", openEditor);
    ui.main.addEventListener("click", function(){ if(state.editor) applyDecomposition(); else applyWhole(); });
    ui.editorList.addEventListener("change", updateEditorCount);
    ui.editorToggle.addEventListener("click", function(){
      const boxes = qsAll(ui.editorList, 'input[type="checkbox"]');
      const allChecked = boxes.length && boxes.every(function(input){ return input.checked; });
      boxes.forEach(function(input){ input.checked = !allChecked; });
      updateEditorCount();
    });
    backdrop.addEventListener("click", function(event){ if(event.target === backdrop) closePreview(); });
  }

  function ensureStyles(){
    if(document.getElementById("qp-v54-pack-preview-style")) return;
    const style = create("style");
    style.id = "qp-v54-pack-preview-style";
    style.textContent = `
      body.qp-v54-preview-open{ overflow:hidden !important; }
      #qp-v54-preview-backdrop[hidden],.qp-v54-split-bank[hidden],.qp-v54-split-group[hidden],.qp-v54-toast[hidden],.qp-v54-body[hidden]{ display:none !important; }
      .qp-v54-preview-note{ display:flex; flex-direction:column; gap:3px; padding:8px 10px; border:1px dashed #8fcbd3; border-radius:11px; background:#f5fcfe; color:#356571; }
      .qp-v54-preset-note{ grid-column:1 / -1; width:100%; min-width:0; box-sizing:border-box; }
      .qp-v54-preview-note strong{ font-size:10px; }
      .qp-v54-preview-note span{ font-size:9px; line-height:1.45; }
      .qp-v54-split-bank{ display:flex; flex-direction:column; gap:7px; padding:9px; border:1px solid #8dc9cd; border-radius:13px; background:linear-gradient(145deg,#f5ffff,#edfafa); }
      .qp-v54-split-bank-head{ display:flex; align-items:baseline; justify-content:space-between; gap:8px; }
      .qp-v54-split-bank-head strong{ color:#176664; font-size:11px; }
      .qp-v54-split-bank-head small{ color:#668086; font-size:8px; text-align:right; }
      .qp-v54-split-group{ overflow:hidden; border:1px solid #b9dce0; border-radius:11px; background:#fff; }
      .qp-v54-split-summary{ display:flex !important; align-items:center; justify-content:space-between; gap:8px; padding:9px 10px !important; color:#285661; font-size:10px; font-weight:900; }
      .qp-v54-split-summary small{ flex:0 0 auto; padding:2px 6px; border-radius:999px; background:#e9f8f8; color:#21716d; font-size:8px; }
      .qp-v54-split-tools{ display:flex; justify-content:flex-end; padding:6px 8px 0; border-top:1px solid #e0ecef; }
      .qp-v54-clear-split{ min-height:30px !important; padding:4px 8px !important; border:1px solid #dfb5c2 !important; border-radius:8px !important; background:#fff4f7 !important; color:#97445e !important; font-size:8px !important; font-weight:900 !important; box-shadow:none !important; }
      .qp-v54-split-grid{ padding:7px !important; }
      .qp-v54-split-note{ color:#70868d; font-size:8px; line-height:1.35; }
      #qp-v54-preview-backdrop{ position:fixed; inset:0; z-index:2147483000; display:flex; align-items:flex-end; justify-content:center; background:rgba(7,32,42,.58); backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px); }
      #qp-v54-preview-sheet{ display:flex; flex-direction:column; width:min(100%,760px); max-height:92dvh; overflow:hidden; border:1px solid #9ccfd8; border-bottom:0; border-radius:22px 22px 0 0; background:linear-gradient(180deg,#fff,#f1fbfd); color:#173f4c; box-shadow:0 -18px 60px rgba(4,37,49,.3); }
      .qp-v54-head{ display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:13px 14px 10px; border-bottom:1px solid #d7e9ed; background:rgba(255,255,255,.97); }
      .qp-v54-heading{ min-width:0; }
      .qp-v54-eyebrow{ display:block; color:#169497; font-size:9px; font-weight:950; letter-spacing:.12em; }
      .qp-v54-title-row{ display:flex; align-items:center; gap:7px; flex-wrap:wrap; margin-top:3px; }
      .qp-v54-title-row h2{ margin:0; color:#163e4b; font-size:17px; line-height:1.35; overflow-wrap:anywhere; }
      .qp-v54-route{ padding:3px 7px; border:1px solid #dfc384; border-radius:999px; background:#fff8e5; color:#855f11; font-size:8px; font-weight:950; }
      .qp-v54-route[data-tone="positive"]{ border-color:#8fcfd0; background:#eefbfa; color:#176c69; }
      .qp-v54-route[data-tone="negative"]{ border-color:#dca9ba; background:#fff1f5; color:#983e5e; }
      .qp-v54-status{ margin:4px 0 0; color:#6c838a; font-size:9px; }
      .qp-v54-status[data-tone="active"]{ color:#13766c; font-weight:900; }
      .qp-v54-close{ flex:0 0 auto; width:38px; height:38px; border:1px solid #c7dce1; border-radius:50%; background:#f8fcfd; color:#385d68; font-size:20px; cursor:pointer; }
      .qp-v54-body{ overflow:auto; padding:10px 11px 13px; overscroll-behavior:contain; }
      .qp-v54-stats{ display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:5px; }
      .qp-v54-stat{ min-width:0; padding:7px 4px; border:1px solid #d5e5e9; border-radius:10px; background:#fff; text-align:center; }
      .qp-v54-stat small{ display:block; color:#6d838a; font-size:7px; font-weight:850; }
      .qp-v54-stat strong{ display:block; margin-top:2px; color:#315764; font-size:15px; }
      .qp-v54-stat strong[data-tone="add"]{ color:#087965; }
      .qp-v54-stat strong[data-tone="remove"]{ color:#a83e5b; }
      .qp-v54-stat strong[data-tone="warning"]{ color:#aa7214; }
      .qp-v54-stat strong[data-tone="ok"]{ color:#16806a; }
      .qp-v54-section{ margin-top:8px; padding:9px; border:1px solid #d8e7ea; border-radius:11px; background:#fff; }
      .qp-v54-section h3{ margin:0 0 6px; color:#2b5360; font-size:10px; }
      .qp-v54-chip-list{ display:flex; flex-wrap:wrap; gap:5px; }
      .qp-v54-chip,.qp-v54-empty{ display:inline-flex; max-width:100%; padding:4px 7px; border:1px solid #d3e3e7; border-radius:999px; background:#f7fbfc; color:#496a73; font-size:8px; line-height:1.35; overflow-wrap:anywhere; }
      .qp-v54-chip[data-tone="add"]{ border-color:#a5dcd0; background:#effbf7; color:#156956; }
      .qp-v54-chip[data-tone="remove"]{ border-color:#e7bdc9; background:#fff3f6; color:#9b3e58; text-decoration:line-through; }
      .qp-v54-chip[data-tone="warning"]{ border-color:#e6cf9c; background:#fff9e9; color:#8a5c0b; }
      .qp-v54-chip[data-tone="collision"]{ border-color:#dea6b8; background:#fff0f5; color:#963b5b; }
      .qp-v54-chip[data-tone="ok"],.qp-v54-empty{ color:#70868d; }
      .qp-v54-note{ margin:6px 0 0; color:#6c8086; font-size:8px; line-height:1.45; }
      .qp-v54-output-grid{ display:grid; grid-template-columns:1fr; gap:6px; }
      .qp-v54-output-box strong{ display:block; margin-bottom:4px; color:#3b606b; font-size:9px; }
      .qp-v54-output-box textarea{ box-sizing:border-box; width:100%; min-height:80px; resize:vertical; padding:8px; border:1px solid #cadfe4; border-radius:9px; background:#f8fcfd; color:#1d4652; font:9px/1.5 ui-monospace,SFMono-Regular,Consolas,monospace; }
      .qp-v54-editor-intro{ display:flex; align-items:center; justify-content:space-between; gap:10px; padding:9px; border:1px solid #b9dadd; border-radius:11px; background:#f3fcfc; }
      .qp-v54-editor-intro strong{ color:#245861; font-size:11px; }
      .qp-v54-editor-intro p{ margin:3px 0 0; color:#6b8389; font-size:8px; line-height:1.4; }
      .qp-v54-editor-toggle{ flex:0 0 auto; min-height:34px; padding:5px 9px; border:1px solid #79c4c1; border-radius:9px; background:#e8faf8; color:#176c68; font-size:9px; font-weight:900; }
      .qp-v54-editor-count{ position:sticky; top:-10px; z-index:1; margin:8px 0 6px; padding:6px 8px; border-radius:9px; background:#173f4c; color:#fff; font-size:9px; font-weight:900; text-align:center; }
      .qp-v54-editor-list{ display:flex; flex-direction:column; gap:6px; }
      .qp-v54-editor-item{ display:flex; align-items:flex-start; gap:8px; padding:9px; border:1px solid #d2e3e7; border-radius:10px; background:#fff; color:#294e59; font:10px/1.45 ui-monospace,SFMono-Regular,Consolas,monospace; }
      .qp-v54-editor-item:has(input:checked){ border-color:#71c6bd; background:#effbf8; color:#12665d; }
      .qp-v54-editor-item input{ flex:0 0 auto; width:19px; height:19px; margin:0; accent-color:#279e93; }
      .qp-v54-actions{ display:grid; grid-template-columns:minmax(74px,.55fr) minmax(95px,.9fr) minmax(110px,1.15fr); gap:6px; padding:9px 10px calc(9px + env(safe-area-inset-bottom)); border-top:1px solid #d4e6e9; background:rgba(255,255,255,.98); }
      .qp-v54-actions button{ min-height:48px; padding:6px; border-radius:12px; font-size:10px; font-weight:950; cursor:pointer; }
      .qp-v54-cancel{ border:1px solid #cadde1; background:#f5fafb; color:#536d75; }
      .qp-v54-split{ border:1px solid #d7bd79; background:#fff8e6; color:#815d12; }
      .qp-v54-main{ border:1px solid #43b4ae; background:linear-gradient(135deg,#dffbf5,#c8f4ef); color:#0e6761; box-shadow:0 5px 14px rgba(35,145,139,.16); }
      .qp-v54-main:disabled{ opacity:.45; cursor:not-allowed; }
      #qp-v54-preview-sheet[data-mode="editor"] .qp-v54-actions{ grid-template-columns:minmax(90px,.6fr) minmax(0,1.4fr); }
      .qp-v54-toast{ position:fixed; left:50%; bottom:calc(86px + env(safe-area-inset-bottom)); z-index:2147483100; transform:translate(-50%,10px); width:min(calc(100% - 24px),620px); box-sizing:border-box; padding:10px 12px; border:1px solid #7fcac5; border-radius:13px; background:rgba(246,255,253,.98); color:#176860; font-size:10px; font-weight:900; text-align:center; opacity:0; box-shadow:0 9px 26px rgba(10,75,82,.23); transition:.2s ease; }
      .qp-v54-toast[data-tone="negative"],.qp-v54-toast[data-tone="remove"]{ border-color:#d9a8b8; background:#fff4f7; color:#963e59; }
      .qp-v54-toast.is-visible{ opacity:1; transform:translate(-50%,0); }
      @media(min-width:760px){
        #qp-v54-preview-backdrop{ align-items:center; padding:20px; }
        #qp-v54-preview-sheet{ max-height:min(88dvh,860px); border-bottom:1px solid #9ccfd8; border-radius:22px; }
        .qp-v54-output-grid{ grid-template-columns:1fr 1fr; }
        .qp-v54-toast{ bottom:22px; }
      }
      @media(max-width:430px){
        .qp-v54-stats{ grid-template-columns:repeat(2,minmax(0,1fr)); }
        .qp-v54-title-row h2{ font-size:15px; }
        .qp-v54-actions{ grid-template-columns:.55fr .85fr 1.1fr; }
        .qp-v54-actions button{ font-size:9px; }
      }
      @media(prefers-reduced-motion:reduce){ .qp-v54-toast{ transition:none; } }
    `;
    document.head.appendChild(style);
  }

  function recordFromTarget(target){
    if(!target || !target.closest) return null;
    if(target.matches && target.matches('input[type="checkbox"][data-shima-pack-preview="1"]')) return null;
    if(target.closest("button, a, .zero-favorite-star, .shima-channel-search-route, [role='button']")) return null;
    const label = target.closest("label");
    const input = label && label.querySelector(':scope > input[type="checkbox"][data-shima-pack-preview="1"]');
    if(!input) return null;
    return state.records.get(input.dataset.shimaPackPreviewId || input.id) || null;
  }

  function bindGlobal(){
    if(document.documentElement.dataset.qpV54Bound === "1") return;
    document.documentElement.dataset.qpV54Bound = "1";
    document.addEventListener("click", function(event){
      if(state.applying) return;
      const clear = event.target && event.target.closest ? event.target.closest("[data-qp-v54-clear]") : null;
      if(clear){
        event.preventDefault();
        event.stopImmediatePropagation();
        clearRecord(state.records.get(clear.dataset.qpV54Clear));
        return;
      }
      const record = recordFromTarget(event.target);
      if(!record) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      openForRecord(record);
    }, true);

    document.addEventListener("change", function(event){
      const input = event.target;
      if(input && input.dataset && input.dataset.shimaDecomposed === "1") scheduleSync(20);
    }, true);
    document.addEventListener("keydown", function(event){
      if(event.key === "Escape" && ui.backdrop && !ui.backdrop.hidden){
        event.preventDefault();
        if(state.editor) renderSummary();
        else closePreview();
      }
    }, true);
    document.addEventListener("builderResetAll", function(){ closePreview(); scheduleSync(0); }, true);
    window.addEventListener("builderHistoryRestored", function(){ closePreview(); scheduleSync(0); });
    window.addEventListener("promptPartMounted", function(){ setTimeout(function(){ enhancePacks(); }, 30); });
  }

  function init(){
    ensureStyles();
    ensureUI();
    enhancePacks();
    bindGlobal();
    setTimeout(enhancePacks, 0);
    setTimeout(enhancePacks, 360);
  }

  window.ShimaChannelPackPreview = {
    version:"1.0.1",
    refresh:function(){ enhancePacks(); },
    preview:function(id){ return previewFor(state.records.get(id)); },
    open:function(id){ return openForRecord(state.records.get(id)); },
    close:closePreview,
    apply:function(){ return state.editor ? applyDecomposition() : applyWhole(); },
    decompose:function(id, indexes){
      const record = state.records.get(id);
      if(!record) return false;
      openForRecord(record);
      openEditor();
      if(Array.isArray(indexes)){
        const wanted = new Set(indexes.map(Number));
        qsAll(ui.editorList, 'input[type="checkbox"]').forEach(function(input){ input.checked = wanted.has(Number(input.dataset.tokenIndex)); });
        updateEditorCount();
      }
      return applyDecomposition();
    },
    getState:function(){
      return {
        packs:state.records.size,
        open:!!(ui.backdrop && !ui.backdrop.hidden),
        editor:state.editor,
        current:state.current ? state.current.id : "",
        decomposed:qsAll(document, 'input[data-shima-decomposed="1"]:checked').length
      };
    }
  };

  const API = { initUI:init, getTags:function(){ return []; } };
  if(typeof window.__registerPromptPart === "function") window.__registerPromptPart(KEY, VERSION, API);
  else document.addEventListener("DOMContentLoaded", init, { once:true });
})();
