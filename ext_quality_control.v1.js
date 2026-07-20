(function(){
  "use strict";

  if(window.__SHIMA_QUALITY_CONTROL_V1__) return;
  window.__SHIMA_QUALITY_CONTROL_V1__ = true;

  const VERSION = 49;
  const KEY = "quality_preset";
  const GUARDS = Array.isArray(window.__SHIMA_QUALITY_NEGATIVE_GUARDS_V1__)
    ? window.__SHIMA_QUALITY_NEGATIVE_GUARDS_V1__
    : [];
  const CONFLICT_RULES = Array.isArray(window.__SHIMA_QUALITY_CONFLICT_RULES_V1__)
    ? window.__SHIMA_QUALITY_CONFLICT_RULES_V1__
    : [];
  const FAMILIES = Array.isArray(window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__)
    ? window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__
    : [];
  const STORAGE = {
    negative: "shimaBuilderV5.qualityControl.negative.v1",
    recipes: "shimaBuilderV5.qualityControl.recipes.v1"
  };
  const DEFAULT_FAMILY = FAMILIES.length ? FAMILIES[0].key : "anime_real";

  const state = {
    family: DEFAULT_FAMILY,
    recipes: normalizeRecipes(loadJSON(STORAGE.recipes, [])),
    scanTimer: 0,
    lastScan: null,
    applying: false
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

  function loadJSON(key, fallback){
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value == null ? fallback : value;
    } catch(e) {
      return fallback;
    }
  }

  function saveJSON(key, value){
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch(e) {
      return false;
    }
  }

  function safeId(prefix){
    try {
      if(window.crypto && typeof window.crypto.randomUUID === "function"){
        return prefix + "-" + window.crypto.randomUUID();
      }
    } catch(e) {}
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
  }

  function cleanText(value){
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function familyMeta(key){
    return FAMILIES.find(function(family){ return family.key === key; }) || {
      key: key || DEFAULT_FAMILY,
      label: "品質",
      shortLabel: "品質",
      icon: "❄️"
    };
  }

  function guardFor(key){
    return GUARDS.find(function(guard){ return guard.family === key; }) || GUARDS[0] || null;
  }

  function visibleFamily(){
    const shelf = document.getElementById("qp-v47-quick-presets");
    return shelf && shelf.dataset.qpV47Family ? shelf.dataset.qpV47Family : DEFAULT_FAMILY;
  }

  function selectedFamily(){
    const selected = document.querySelector(
      '#qp-v47-quick-presets input[data-qp-v47-kind="pack"]:checked,' +
      '#qp-v47-quick-presets input[data-qp-v47-kind="component"]:checked'
    );
    const card = selected && selected.closest ? selected.closest(".qp-v47-card") : null;
    return card && card.dataset.qpV47Family ? card.dataset.qpV47Family : visibleFamily();
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

  function checkboxValue(input){
    if(!input || !input.dataset) return "";
    return input.dataset.val || input.dataset.en || "";
  }

  function selectedPromptInputs(){
    return qsAll(document, '#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"])')
      .filter(function(input){
        return !!checkboxValue(input) && (!input.dataset || input.dataset.outputChannel !== "negative");
      });
  }

  function qualityInputs(){
    return qsAll(document, '#list-quality_preset input[type="checkbox"]:not([data-zero-ignore="1"])')
      .filter(function(input){ return !!checkboxValue(input); });
  }

  function selectedQualityInputs(){
    return qualityInputs().filter(function(input){ return input.checked; });
  }

  function negativeInputs(family){
    let inputs = qsAll(document, '#qp-v49-quality-control input[data-shima-negative-tag]');
    if(family){
      inputs = inputs.filter(function(input){ return input.dataset.shimaNegativeFamily === family; });
    }
    return inputs;
  }

  function selectedGuardTags(){
    return negativeInputs().filter(function(input){ return input.checked; }).map(function(input){
      return input.dataset.shimaNegativeTag;
    });
  }

  function routedNegativeInputs(){
    return qsAll(document, '#sections input[type="checkbox"][data-output-channel="negative"]');
  }

  function selectedRoutedNegativeTags(){
    const tags = [];
    routedNegativeInputs().filter(function(input){ return input.checked; }).forEach(function(input){
      splitPrompt(checkboxValue(input)).forEach(function(tag){ if(tag) tags.push(tag); });
    });
    return tags;
  }

  function selectedNegativeTags(){
    return selectedGuardTags().concat(selectedRoutedNegativeTags());
  }

  function selectedNegativeFamily(){
    const selected = negativeInputs().find(function(input){ return input.checked; });
    return selected ? selected.dataset.shimaNegativeFamily : "";
  }

  function negativeState(){
    return {
      family: selectedNegativeFamily(),
      tags: selectedGuardTags()
    };
  }

  function persistNegative(){
    const snapshot = negativeState();
    if(snapshot.tags.length) saveJSON(STORAGE.negative, snapshot);
    else {
      try { localStorage.removeItem(STORAGE.negative); } catch(e) {}
    }
  }

  function copyText(text, button){
    const value = String(text || "");
    if(!value) return;
    const done = function(){
      if(!button) return;
      const original = button.dataset.originalLabel || button.textContent;
      button.dataset.originalLabel = original;
      button.textContent = "コピー完了";
      setTimeout(function(){ button.textContent = original; }, 1300);
    };
    if(navigator.clipboard && typeof navigator.clipboard.writeText === "function"){
      navigator.clipboard.writeText(value).then(done).catch(function(){
        if(ui.negativeOut){
          ui.negativeOut.select();
          try { document.execCommand("copy"); } catch(e) {}
          done();
        }
      });
    }else if(ui.negativeOut){
      ui.negativeOut.select();
      try { document.execCommand("copy"); } catch(e) {}
      done();
    }
  }

  function setOutputTab(tab){
    const negative = tab === "negative";
    if(!ui.positiveOut || !ui.negativeOut) return;
    ui.positiveOut.hidden = negative;
    ui.negativeOut.hidden = !negative;
    if(ui.positiveTab){
      ui.positiveTab.classList.toggle("is-active", !negative);
      ui.positiveTab.setAttribute("aria-selected", !negative ? "true" : "false");
    }
    if(ui.negativeTab){
      ui.negativeTab.classList.toggle("is-active", negative);
      ui.negativeTab.setAttribute("aria-selected", negative ? "true" : "false");
    }
    if(ui.negativeCopy) ui.negativeCopy.hidden = !negative;
    const copy = document.getElementById("copyBtn");
    if(copy) copy.hidden = negative;
    if(ui.outputTabs) ui.outputTabs.dataset.activeTab = negative ? "negative" : "positive";
  }

  function updateNegativeOutput(){
    const tags = selectedNegativeTags();
    if(ui.negativeOut) ui.negativeOut.value = tags.join(", ");
    if(ui.negativeCount) ui.negativeCount.textContent = String(tags.length);
    if(ui.negativeTab) ui.negativeTab.classList.toggle("has-parts", tags.length > 0);
    if(ui.negativeCopy) ui.negativeCopy.disabled = tags.length === 0;

    GUARDS.forEach(function(guard){
      const inputs = negativeInputs(guard.family);
      const checked = inputs.filter(function(input){ return input.checked; }).length;
      const block = document.querySelector('[data-shima-negative-block="' + guard.family + '"]');
      if(!block) return;
      const button = block.querySelector('[data-qc-action="negative-toggle"]');
      const status = block.querySelector(".qp-v49-negative-status");
      if(button){
        button.textContent = checked === inputs.length && inputs.length ? "破綻防止を外す" : "6語を追加する";
        button.classList.toggle("is-active", checked > 0);
      }
      if(status){
        status.textContent = checked ? "Negativeへ " + checked + "/" + inputs.length + "語追加中" : "未追加";
      }
    });

    if(ui.summaryNegative) ui.summaryNegative.textContent = "Negative " + tags.length;
  }

  function syncNegativeFamily(family){
    const next = guardFor(family) ? family : DEFAULT_FAMILY;
    state.family = next;
    qsAll(document, "[data-shima-negative-block]").forEach(function(block){
      block.hidden = block.dataset.shimaNegativeBlock !== next;
    });
    const meta = familyMeta(next);
    if(ui.guardFamily) ui.guardFamily.textContent = (meta.icon ? meta.icon + " " : "") + (meta.label || meta.shortLabel || "品質");
    scheduleScan(0);
  }

  function clearNegativeExcept(family){
    negativeInputs().forEach(function(input){
      if(!family || input.dataset.shimaNegativeFamily !== family) input.checked = false;
    });
  }

  function toggleNegativeGuard(family){
    const inputs = negativeInputs(family);
    if(!inputs.length) return;
    const allOn = inputs.every(function(input){ return input.checked; });
    state.applying = true;
    clearNegativeExcept(family);
    inputs.forEach(function(input){ input.checked = !allOn; });
    state.applying = false;
    persistNegative();
    updateNegativeOutput();
    showToast(allOn ? "破綻防止を外しました。" : familyMeta(family).label + "の破綻防止6語をNegativeへ追加しました。", allOn ? "info" : "success");
  }

  function onNegativeChange(input){
    if(!input || state.applying) return;
    const family = input.dataset.shimaNegativeFamily;
    if(input.checked){
      state.applying = true;
      clearNegativeExcept(family);
      state.applying = false;
    }
    persistNegative();
    updateNegativeOutput();
  }

  function restorePersistedNegative(){
    const saved = loadJSON(STORAGE.negative, null);
    if(!saved || !Array.isArray(saved.tags) || !guardFor(saved.family)) return;
    const allowed = new Set(guardFor(saved.family).tags);
    negativeInputs(saved.family).forEach(function(input){
      input.checked = allowed.has(input.dataset.shimaNegativeTag) && saved.tags.includes(input.dataset.shimaNegativeTag);
    });
  }

  function labelForInput(input){
    if(!input) return "項目";
    const data = input.dataset || {};
    if(data.ja) return cleanText(data.ja);
    const label = input.closest ? input.closest("label") : null;
    return cleanText(label ? label.textContent : data.en || data.val || input.id || "項目");
  }

  function sourceForInput(input, index){
    const tokens = splitPrompt(checkboxValue(input));
    return {
      input: input,
      index: index,
      label: labelForInput(input),
      tokens: tokens,
      tokenCount: tokens.length,
      composite: tokens.length > 1
    };
  }

  function uniqueInputs(entries){
    const seen = new Set();
    const result = [];
    (entries || []).forEach(function(entry){
      if(!entry || !entry.source || seen.has(entry.source.input)) return;
      seen.add(entry.source.input);
      result.push(entry.source);
    });
    return result;
  }

  function buildScan(){
    const sources = selectedPromptInputs().map(sourceForInput);
    const tokenMap = new Map();
    sources.forEach(function(source){
      source.tokens.forEach(function(token){
        const core = coreOf(token);
        if(!core || core === "break") return;
        if(!tokenMap.has(core)) tokenMap.set(core, []);
        tokenMap.get(core).push({ token: token, source: source });
      });
    });

    const duplicates = [];
    const duplicateRemovable = new Set();
    tokenMap.forEach(function(entries, core){
      const sourcesForCore = uniqueInputs(entries);
      if(sourcesForCore.length < 2) return;
      const composite = sourcesForCore.filter(function(source){ return source.composite; });
      const singles = sourcesForCore.filter(function(source){ return !source.composite; });
      if(composite.length){
        singles.forEach(function(source){ duplicateRemovable.add(source.input); });
      }else{
        singles.slice(1).forEach(function(source){ duplicateRemovable.add(source.input); });
      }
      duplicates.push({
        core: core,
        count: sourcesForCore.length,
        labels: sourcesForCore.map(function(source){ return source.label; })
      });
    });

    const family = selectedFamily();
    const rule = CONFLICT_RULES.find(function(item){ return item.family === family; });
    const conflicts = [];
    const conflictRemovable = new Set();
    if(rule){
      const matchedByInput = new Map();
      sources.forEach(function(source){
        source.tokens.forEach(function(token){
          const core = coreOf(token);
          const matched = (rule.terms || []).find(function(term){
            const normalized = coreOf(term);
            return core === normalized || core.indexOf(normalized) >= 0;
          });
          if(!matched) return;
          if(!matchedByInput.has(source.input)) matchedByInput.set(source.input, { source:source, terms:[] });
          matchedByInput.get(source.input).terms.push(core);
        });
      });
      matchedByInput.forEach(function(item){
        conflicts.push({
          label: item.source.label,
          terms: Array.from(new Set(item.terms)),
          composite: item.source.composite
        });
        if(!item.source.composite) conflictRemovable.add(item.source.input);
      });
    }

    return {
      family: family,
      rule: rule,
      sources: sources,
      duplicates: duplicates,
      duplicateRemovable: Array.from(duplicateRemovable),
      conflicts: conflicts,
      conflictRemovable: Array.from(conflictRemovable)
    };
  }

  function scanAttentionCount(scan){
    if(!scan) return 0;
    return scan.duplicates.length + (scan.conflicts.length ? 1 : 0);
  }

  function renderScan(scan){
    state.lastScan = scan;
    if(!ui.scanList) return;
    ui.scanList.textContent = "";
    const count = scanAttentionCount(scan);
    if(ui.summaryDiagnostics) ui.summaryDiagnostics.textContent = "診断 " + count;
    if(ui.scanBadge) ui.scanBadge.textContent = String(count);

    if(!count){
      const ok = create("div", "qp-v49-scan-ok");
      ok.appendChild(create("strong", "", "✓ 目立つ重複・作風衝突はありません"));
      ok.appendChild(create("p", "", "意図した混合作風はそのまま利用できます。"));
      ui.scanList.appendChild(ok);
      return;
    }

    if(scan.duplicates.length){
      const card = create("article", "qp-v49-scan-card");
      card.dataset.level = "warning";
      card.appendChild(create("strong", "", "同じ品質語が " + scan.duplicates.length + "種類重複"));
      card.appendChild(create("p", "", scan.duplicates.slice(0, 5).map(function(item){
        return item.core + " ×" + item.count;
      }).join("、") + (scan.duplicates.length > 5 ? " ほか" + (scan.duplicates.length - 5) + "件" : "")));
      if(scan.duplicateRemovable.length){
        const button = create("button", "qp-v49-safe-action", "重複した単品だけ解除（" + scan.duplicateRemovable.length + "）");
        button.type = "button";
        button.dataset.qcAction = "cleanup-duplicates";
        card.appendChild(button);
      }else{
        card.appendChild(create("small", "", "セット物同士の重複なので自動変更しません。"));
      }
      ui.scanList.appendChild(card);
    }

    if(scan.conflicts.length && scan.rule){
      const card = create("article", "qp-v49-scan-card");
      card.dataset.level = "info";
      card.appendChild(create("strong", "", scan.rule.title));
      card.appendChild(create("p", "", scan.rule.detail));
      const names = scan.conflicts.slice(0, 5).map(function(item){ return item.terms.join(" / "); }).join("、");
      card.appendChild(create("small", "", names + (scan.conflicts.length > 5 ? " ほか" + (scan.conflicts.length - 5) + "件" : "")));
      if(scan.conflictRemovable.length){
        const button = create("button", "qp-v49-safe-action", "相性候補の単品だけ解除（" + scan.conflictRemovable.length + "）");
        button.type = "button";
        button.dataset.qcAction = "cleanup-conflicts";
        card.appendChild(button);
      }else{
        card.appendChild(create("small", "", "セット物に含まれるため自動変更しません。内容を見て調整してください。"));
      }
      ui.scanList.appendChild(card);
    }
  }

  function scheduleScan(delay){
    clearTimeout(state.scanTimer);
    state.scanTimer = setTimeout(function(){
      state.scanTimer = 0;
      renderScan(buildScan());
      updateRecipeSaveState();
    }, delay == null ? 100 : delay);
  }

  function removeInputs(inputs, message){
    const targets = Array.from(new Set(inputs || [])).filter(function(input){ return input && input.checked; });
    if(!targets.length) return;
    if(!window.confirm(message.replace("{count}", String(targets.length)))) return;
    state.applying = true;
    targets.forEach(function(input){
      try { input.click(); }
      catch(e) {
        input.checked = false;
        input.dispatchEvent(new Event("change", { bubbles:true }));
      }
    });
    state.applying = false;
    if(typeof window.__builderGenerateOutput === "function") window.__builderGenerateOutput();
    scheduleScan(40);
    showToast(targets.length + "件の単品指定を解除しました。セット物は変更していません。", "success");
  }

  function normalizeRecipes(source){
    if(!Array.isArray(source)) return [];
    return source.filter(function(recipe){
      return recipe && typeof recipe === "object" && Array.isArray(recipe.positive) && recipe.id;
    }).slice(0, 20).map(function(recipe){
      return {
        id: String(recipe.id).slice(0, 120),
        name: cleanText(recipe.name || "品質レシピ").slice(0, 50),
        createdAt: Number(recipe.createdAt) || Date.now(),
        family: String(recipe.family || DEFAULT_FAMILY),
        positive: recipe.positive.slice(0, 240),
        negative: recipe.negative && Array.isArray(recipe.negative.tags)
          ? { family:String(recipe.negative.family || ""), tags:recipe.negative.tags.slice(0, 30) }
          : { family:"", tags:[] }
      };
    });
  }

  function inputSnapshot(input, index){
    const data = input.dataset || {};
    return {
      id: input.id || "",
      index: index,
      key: data.qpV47Key || "",
      kind: data.qpV47Kind || "",
      channel: data.outputChannel || "positive",
      val: data.val || "",
      en: data.en || "",
      ja: data.ja || ""
    };
  }

  function buildRecipeMaps(inputs){
    const maps = { id:new Map(), key:new Map(), val:new Map(), en:new Map(), ja:new Map() };
    const remember = function(map, value, input){
      if(!value) return;
      const existing = map.get(value);
      if(!existing || (
        existing.dataset && existing.dataset.outputChannel === "negative" &&
        (!input.dataset || input.dataset.outputChannel !== "negative")
      )) map.set(value, input);
    };
    inputs.forEach(function(input){
      const data = input.dataset || {};
      if(input.id) maps.id.set(input.id, input);
      if(data.qpV47Key) maps.key.set(data.qpV47Key + "|" + (data.qpV47Kind || ""), input);
      remember(maps.val, data.val, input);
      remember(maps.en, data.en, input);
      remember(maps.ja, data.ja, input);
    });
    return maps;
  }

  function resolveRecipeInput(snapshot, inputs, maps, used){
    const desiredChannel = snapshot.channel || "";
    const acceptsChannel = function(candidate){
      if(!candidate || !desiredChannel) return !!candidate;
      const channel = candidate.dataset && candidate.dataset.outputChannel === "negative" ? "negative" : "positive";
      return channel === desiredChannel;
    };
    const findChannelMatch = function(field, value){
      if(!value) return null;
      return inputs.find(function(candidate){
        return acceptsChannel(candidate) && candidate.dataset && candidate.dataset[field] === value;
      }) || null;
    };
    let input = null;
    if(snapshot.id && acceptsChannel(maps.id.get(snapshot.id))) input = maps.id.get(snapshot.id) || null;
    if(!input && snapshot.key && acceptsChannel(maps.key.get(snapshot.key + "|" + (snapshot.kind || "")))){
      input = maps.key.get(snapshot.key + "|" + (snapshot.kind || "")) || null;
    }
    if(!input && snapshot.val){
      const mapped = maps.val.get(snapshot.val) || null;
      input = acceptsChannel(mapped) ? mapped : findChannelMatch("val", snapshot.val);
    }
    if(!input && snapshot.en){
      const mapped = maps.en.get(snapshot.en) || null;
      input = acceptsChannel(mapped) ? mapped : findChannelMatch("en", snapshot.en);
    }
    if(!input && snapshot.ja){
      const mapped = maps.ja.get(snapshot.ja) || null;
      input = acceptsChannel(mapped) ? mapped : findChannelMatch("ja", snapshot.ja);
    }
    if(!input && Number.isInteger(snapshot.index) && snapshot.index >= 0 && acceptsChannel(inputs[snapshot.index])){
      input = inputs[snapshot.index] || null;
    }
    if(input && used.has(input)) return null;
    return input;
  }

  function updateRecipeSaveState(){
    if(!ui.recipeSave) return;
    const selected = selectedQualityInputs();
    const positiveCount = selected.filter(function(input){
      return !input.dataset || input.dataset.outputChannel !== "negative";
    }).length;
    const routedNegativeCount = selected.filter(function(input){
      return input.dataset && input.dataset.outputChannel === "negative";
    }).length;
    const negativeCount = routedNegativeCount + selectedGuardTags().length;
    ui.recipeSave.disabled = positiveCount + negativeCount === 0;
    if(ui.recipeSelection) ui.recipeSelection.textContent = "Positive " + positiveCount + "・Negative " + negativeCount;
  }

  function saveRecipe(){
    const inputs = qualityInputs();
    const selected = inputs.filter(function(input){ return input.checked; });
    const negative = negativeState();
    if(!selected.length && !negative.tags.length){
      showToast("保存する品質項目がありません。", "warning");
      return;
    }
    let name = cleanText(ui.recipeName ? ui.recipeName.value : "").slice(0, 50);
    if(!name) name = "品質レシピ " + (state.recipes.length + 1);
    const recipe = {
      id: safeId("quality-recipe"),
      name: name,
      createdAt: Date.now(),
      family: selectedFamily(),
      positive: selected.map(function(input){ return inputSnapshot(input, inputs.indexOf(input)); }),
      negative: negative
    };
    state.recipes.unshift(recipe);
    state.recipes = state.recipes.slice(0, 20);
    saveJSON(STORAGE.recipes, state.recipes);
    if(ui.recipeName) ui.recipeName.value = "";
    renderRecipes();
    showToast("「" + name + "」を品質専用レシピへ保存しました。", "success");
  }

  function restoreNegativeSnapshot(snapshot){
    state.applying = true;
    negativeInputs().forEach(function(input){ input.checked = false; });
    if(snapshot && guardFor(snapshot.family) && Array.isArray(snapshot.tags)){
      const allowed = new Set(guardFor(snapshot.family).tags);
      negativeInputs(snapshot.family).forEach(function(input){
        input.checked = allowed.has(input.dataset.shimaNegativeTag) && snapshot.tags.includes(input.dataset.shimaNegativeTag);
      });
    }
    state.applying = false;
    persistNegative();
    updateNegativeOutput();
  }

  function applyRecipe(recipe){
    if(!recipe) return;
    const currentCount = selectedQualityInputs().length + selectedGuardTags().length;
    if(currentCount && !window.confirm("現在の品質選択を外し、「" + recipe.name + "」へ入れ替えますか？")) return;

    const inputs = qualityInputs();
    const maps = buildRecipeMaps(inputs);
    const used = new Set();
    const restored = [];
    const previouslyChecked = inputs.filter(function(input){ return input.checked; });
    let missing = 0;
    state.applying = true;
    window.__SHIMA_BULK_RESET__ = true;
    try {
      inputs.forEach(function(input){ input.checked = false; });
      previouslyChecked.forEach(function(input){
        try { input.dispatchEvent(new Event("change", { bubbles:true })); } catch(e) {}
      });
      (recipe.positive || []).forEach(function(snapshot){
        const input = resolveRecipeInput(snapshot, inputs, maps, used);
        if(!input){ missing++; return; }
        used.add(input);
        input.checked = true;
        restored.push(input);
      });
      restored.forEach(function(input){
        try { input.dispatchEvent(new Event("change", { bubbles:true })); } catch(e) {}
      });
    } finally {
      window.__SHIMA_BULK_RESET__ = false;
      state.applying = false;
    }

    restoreNegativeSnapshot(recipe.negative);
    const familyButton = document.querySelector('.qp-v47-family-button[data-qp-v47-family="' + recipe.family + '"]');
    if(familyButton) familyButton.click();
    if(typeof window.__builderGenerateOutput === "function") window.__builderGenerateOutput();
    try {
      window.dispatchEvent(new CustomEvent("builderHistoryRestored", {
        detail:{ restoredCount:restored.length, source:"quality-control-recipe" }
      }));
    } catch(e) {}
    scheduleScan(40);
    showToast("「" + recipe.name + "」を復元しました。" + (missing ? " 見つからない項目 " + missing + "件。" : ""), missing ? "warning" : "success");
  }

  function deleteRecipe(id){
    const recipe = state.recipes.find(function(item){ return item.id === id; });
    if(!recipe) return;
    if(!window.confirm("「" + recipe.name + "」を削除しますか？")) return;
    state.recipes = state.recipes.filter(function(item){ return item.id !== id; });
    saveJSON(STORAGE.recipes, state.recipes);
    renderRecipes();
    showToast("品質レシピを削除しました。", "info");
  }

  function renderRecipes(){
    if(!ui.recipeList) return;
    ui.recipeList.textContent = "";
    if(!state.recipes.length){
      ui.recipeList.appendChild(create("p", "qp-v49-recipe-empty", "まだ品質レシピはありません。現在の品質だけを名前付きで保存できます。"));
      updateRecipeSaveState();
      return;
    }
    state.recipes.forEach(function(recipe){
      const card = create("article", "qp-v49-recipe-card");
      const text = create("div", "qp-v49-recipe-text");
      text.appendChild(create("strong", "", recipe.name));
      const routedNegativeCount = (recipe.positive || []).filter(function(snapshot){ return snapshot.channel === "negative"; }).length;
      const positiveCount = (recipe.positive || []).length - routedNegativeCount;
      const guardCount = ((recipe.negative && recipe.negative.tags) || []).length;
      text.appendChild(create("small", "", "Positive " + positiveCount + "・Negative " + (routedNegativeCount + guardCount)));
      const actions = create("div", "qp-v49-recipe-actions");
      const apply = create("button", "", "適用");
      apply.type = "button";
      apply.dataset.qcRecipeApply = recipe.id;
      const remove = create("button", "", "削除");
      remove.type = "button";
      remove.dataset.qcRecipeDelete = recipe.id;
      actions.appendChild(apply);
      actions.appendChild(remove);
      card.appendChild(text);
      card.appendChild(actions);
      ui.recipeList.appendChild(card);
    });
    updateRecipeSaveState();
  }

  function showToast(message, kind){
    if(!ui.toast) return;
    ui.toast.textContent = String(message || "");
    ui.toast.dataset.kind = kind || "info";
    ui.toast.classList.remove("is-visible");
    void ui.toast.offsetWidth;
    ui.toast.classList.add("is-visible");
    clearTimeout(ui.toastTimer);
    ui.toastTimer = setTimeout(function(){
      if(ui.toast) ui.toast.classList.remove("is-visible");
    }, 2600);
  }

  function makeNegativeBlock(guard){
    const block = create("div", "qp-v49-negative-block");
    block.dataset.shimaNegativeBlock = guard.family;
    block.hidden = guard.family !== DEFAULT_FAMILY;

    const head = create("div", "qp-v49-negative-head");
    const text = create("div");
    text.appendChild(create("strong", "", guard.label));
    text.appendChild(create("p", "", guard.desc));
    const status = create("small", "qp-v49-negative-status", "未追加");
    text.appendChild(status);
    const toggle = create("button", "qp-v49-negative-toggle", "6語を追加する");
    toggle.type = "button";
    toggle.dataset.qcAction = "negative-toggle";
    toggle.dataset.qcFamily = guard.family;
    head.appendChild(text);
    head.appendChild(toggle);
    block.appendChild(head);

    const details = create("details", "qp-v49-negative-details");
    const summary = create("summary", "", "内容を見る・個別調整");
    details.appendChild(summary);
    const grid = create("div", "qp-v49-negative-grid");
    guard.tags.forEach(function(tag, index){
      const label = create("label", "qp-v49-negative-item");
      const input = create("input");
      input.type = "checkbox";
      input.id = "qp-v49-negative-" + guard.family + "-" + index;
      input.dataset.shimaNegativeTag = tag;
      input.dataset.shimaNegativeFamily = guard.family;
      input.dataset.zeroIgnore = "1";
      input.setAttribute("autocomplete", "off");
      label.appendChild(input);
      label.appendChild(create("span", "", tag));
      grid.appendChild(label);
    });
    details.appendChild(grid);
    block.appendChild(details);
    return block;
  }

  function buildControl(){
    const control = create("details", "qp-v49-quality-control");
    control.id = "qp-v49-quality-control";
    control.open = false;

    const summary = create("summary", "qp-v49-control-summary");
    summary.appendChild(create("span", "", "🧰 品質コントロール"));
    const badges = create("span", "qp-v49-summary-badges");
    ui.summaryNegative = create("small", "", "Negative 0");
    ui.summaryDiagnostics = create("small", "", "診断 0");
    badges.appendChild(ui.summaryNegative);
    badges.appendChild(ui.summaryDiagnostics);
    summary.appendChild(badges);
    control.appendChild(summary);

    const content = create("div", "qp-v49-control-content");

    const guardSection = create("section", "qp-v49-panel qp-v49-guard-panel");
    const guardTitle = create("div", "qp-v49-panel-title");
    const titleText = create("div");
    titleText.appendChild(create("span", "qp-v49-eyebrow", "NEGATIVE GUARD"));
    titleText.appendChild(create("h3", "", "作風別の破綻防止"));
    titleText.appendChild(create("p", "", "勝手には追加しません。必要な時だけNegativeへ入れます。"));
    ui.guardFamily = create("strong", "qp-v49-current-family", "");
    guardTitle.appendChild(titleText);
    guardTitle.appendChild(ui.guardFamily);
    guardSection.appendChild(guardTitle);
    GUARDS.forEach(function(guard){ guardSection.appendChild(makeNegativeBlock(guard)); });
    content.appendChild(guardSection);

    const scanSection = create("section", "qp-v49-panel qp-v49-scan-panel");
    const scanTitle = create("div", "qp-v49-panel-title");
    const scanText = create("div");
    scanText.appendChild(create("span", "qp-v49-eyebrow", "SAFE CHECK"));
    scanText.appendChild(create("h3", "", "重複・作風相性"));
    scanText.appendChild(create("p", "", "解除できるのは重複・相性候補の単品だけ。セット物は変更しません。"));
    ui.scanBadge = create("strong", "qp-v49-scan-badge", "0");
    scanTitle.appendChild(scanText);
    scanTitle.appendChild(ui.scanBadge);
    scanSection.appendChild(scanTitle);
    ui.scanList = create("div", "qp-v49-scan-list");
    scanSection.appendChild(ui.scanList);
    content.appendChild(scanSection);

    const recipeSection = create("section", "qp-v49-panel qp-v49-recipe-panel");
    const recipeTitle = create("div", "qp-v49-panel-title");
    const recipeText = create("div");
    recipeText.appendChild(create("span", "qp-v49-eyebrow", "MY QUALITY"));
    recipeText.appendChild(create("h3", "", "自分の品質レシピ"));
    recipeText.appendChild(create("p", "", "他の棚は触らず、品質とNegativeだけを保存・復元します。"));
    ui.recipeSelection = create("strong", "qp-v49-recipe-selection", "品質 0・Negative 0");
    recipeTitle.appendChild(recipeText);
    recipeTitle.appendChild(ui.recipeSelection);
    recipeSection.appendChild(recipeTitle);
    const saveRow = create("div", "qp-v49-recipe-save");
    ui.recipeName = create("input", "qp-v49-recipe-name");
    ui.recipeName.type = "text";
    ui.recipeName.maxLength = 50;
    ui.recipeName.placeholder = "名前（例：透明感CG）";
    ui.recipeName.setAttribute("aria-label", "品質レシピ名");
    ui.recipeSave = create("button", "qp-v49-recipe-save-button", "現在の品質を保存");
    ui.recipeSave.type = "button";
    ui.recipeSave.dataset.qcAction = "save-recipe";
    saveRow.appendChild(ui.recipeName);
    saveRow.appendChild(ui.recipeSave);
    recipeSection.appendChild(saveRow);
    ui.recipeList = create("div", "qp-v49-recipe-list");
    recipeSection.appendChild(ui.recipeList);
    content.appendChild(recipeSection);

    ui.toast = create("div", "qp-v49-toast");
    ui.toast.setAttribute("role", "status");
    ui.toast.setAttribute("aria-live", "polite");
    content.appendChild(ui.toast);

    control.appendChild(content);
    return control;
  }

  function buildOutputTabs(){
    if(document.getElementById("qp-v49-output-tabs")) return;
    const positive = document.getElementById("out");
    if(!positive || !positive.parentNode) return;
    ui.positiveOut = positive;

    const tabs = create("div", "qp-v49-output-tabs");
    tabs.id = "qp-v49-output-tabs";
    tabs.setAttribute("role", "tablist");
    tabs.dataset.activeTab = "positive";
    ui.positiveTab = create("button", "qp-v49-output-tab is-active", "Positive");
    ui.positiveTab.type = "button";
    ui.positiveTab.dataset.qcOutputTab = "positive";
    ui.positiveTab.setAttribute("role", "tab");
    ui.positiveTab.setAttribute("aria-selected", "true");
    ui.negativeTab = create("button", "qp-v49-output-tab", "Negative専用 ");
    ui.negativeTab.type = "button";
    ui.negativeTab.dataset.qcOutputTab = "negative";
    ui.negativeTab.setAttribute("role", "tab");
    ui.negativeTab.setAttribute("aria-selected", "false");
    ui.negativeCount = create("strong", "qp-v49-output-count", "0");
    ui.negativeTab.appendChild(ui.negativeCount);
    ui.negativeCopy = create("button", "qp-v49-negative-copy", "NEG専用コピー");
    ui.negativeCopy.type = "button";
    ui.negativeCopy.dataset.qcAction = "copy-negative";
    ui.negativeCopy.hidden = true;
    ui.negativeCopy.disabled = true;
    tabs.appendChild(ui.positiveTab);
    tabs.appendChild(ui.negativeTab);
    tabs.appendChild(ui.negativeCopy);
    positive.parentNode.insertBefore(tabs, positive);

    ui.negativeOut = create("textarea", "qp-v49-negative-out");
    ui.negativeOut.id = "shima-negative-out";
    ui.negativeOut.placeholder = "NEG専用棚または作風別の破綻防止を選ぶと、ここだけにNegative promptが表示されます。";
    ui.negativeOut.readOnly = true;
    ui.negativeOut.hidden = true;
    positive.insertAdjacentElement("afterend", ui.negativeOut);

    ui.outputTabs = tabs;
  }

  function ensureStyles(){
    if(document.getElementById("qp-v49-quality-control-style")) return;
    const style = create("style");
    style.id = "qp-v49-quality-control-style";
    style.textContent = `
      #qp-v49-quality-control{
        margin:0 0 10px !important;
        overflow:hidden !important;
        border:1px solid #b9dce7 !important;
        border-radius:16px !important;
        background:linear-gradient(180deg,#fff 0%,#f3fbfe 100%) !important;
        color:#173846 !important;
        box-shadow:0 8px 24px rgba(45,112,135,.08) !important;
      }
      #qp-v49-quality-control > summary{
        display:flex !important;
        align-items:center !important;
        justify-content:space-between !important;
        gap:8px !important;
        padding:12px 14px !important;
        background:linear-gradient(135deg,#f8fdff,#e7f7fb) !important;
        color:#143f4f !important;
        font-weight:950 !important;
      }
      #qp-v49-quality-control .qp-v49-summary-badges{ display:flex; gap:5px; flex-wrap:wrap; justify-content:flex-end; }
      #qp-v49-quality-control .qp-v49-summary-badges small{
        padding:3px 7px; border:1px solid #bddde7; border-radius:999px; background:#fff; color:#356274; font-size:9px; white-space:nowrap;
      }
      #qp-v49-quality-control .qp-v49-control-content{ display:flex !important; grid-template-columns:none !important; flex-direction:column; gap:9px; padding:10px; }
      #qp-v49-quality-control .qp-v49-panel{
        padding:10px; border:1px solid #d4e7ed; border-radius:14px; background:rgba(255,255,255,.96); min-width:0;
      }
      #qp-v49-quality-control .qp-v49-panel-title{ display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:9px; }
      #qp-v49-quality-control .qp-v49-panel-title h3{ margin:1px 0 2px; color:#143f4f; font-size:14px; }
      #qp-v49-quality-control .qp-v49-panel-title p{ margin:0; color:#52707b; font-size:10px; line-height:1.45; }
      #qp-v49-quality-control .qp-v49-eyebrow{ display:block; color:#20929c; font-size:9px; font-weight:950; letter-spacing:.13em; }
      #qp-v49-quality-control .qp-v49-current-family,
      #qp-v49-quality-control .qp-v49-scan-badge,
      #qp-v49-quality-control .qp-v49-recipe-selection{
        flex:0 0 auto; padding:5px 8px; border:1px solid #b9dde5; border-radius:999px; background:#effbfd; color:#17627a; font-size:10px;
      }
      #qp-v49-quality-control .qp-v49-negative-block[hidden]{ display:none !important; }
      #qp-v49-quality-control .qp-v49-negative-head{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
      #qp-v49-quality-control .qp-v49-negative-head strong{ color:#163f4d; font-size:12px; }
      #qp-v49-quality-control .qp-v49-negative-head p{ margin:3px 0; color:#57727c; font-size:10px; line-height:1.45; }
      #qp-v49-quality-control .qp-v49-negative-status{ color:#6c8791; font-size:9px; }
      #qp-v49-quality-control .qp-v49-negative-toggle{
        flex:0 0 auto; min-height:40px; padding:7px 10px; border:1px solid #86cdd0; border-radius:11px; background:#effdfa; color:#126b6c; font-size:11px; font-weight:900;
      }
      #qp-v49-quality-control .qp-v49-negative-toggle.is-active{ background:#d8f7ef; border-color:#31aaa9; }
      #qp-v49-quality-control .qp-v49-negative-details{ margin:9px 0 0 !important; border:1px solid #d8e8ed !important; border-radius:11px !important; background:#fbfeff !important; }
      #qp-v49-quality-control .qp-v49-negative-details > summary{ padding:8px 10px !important; color:#356170 !important; background:#f7fcfd !important; font-size:10px !important; }
      #qp-v49-quality-control .qp-v49-negative-grid{ display:grid !important; grid-template-columns:1fr; gap:6px; padding:8px; }
      #qp-v49-quality-control .qp-v49-negative-item{
        display:flex; align-items:flex-start; gap:8px; padding:7px 8px; border:1px solid #e0ebef; border-radius:9px; background:#fff; color:#36535d; font-size:10px; overflow-wrap:anywhere;
      }
      #qp-v49-quality-control .qp-v49-negative-item:has(input:checked){ border-color:#6bc4bd; background:#effcf8; color:#12645e; }
      #qp-v49-quality-control .qp-v49-negative-item input{ flex:0 0 auto; width:17px; height:17px; margin:0; accent-color:#22a8a5; }
      #qp-v49-quality-control .qp-v49-scan-list{ display:flex; flex-direction:column; gap:7px; }
      #qp-v49-quality-control .qp-v49-scan-ok,
      #qp-v49-quality-control .qp-v49-scan-card{ padding:9px; border:1px solid #d8e8ed; border-radius:11px; background:#f9fdff; }
      #qp-v49-quality-control .qp-v49-scan-card[data-level="warning"]{ border-color:#ecd6a5; background:#fffaf0; }
      #qp-v49-quality-control .qp-v49-scan-card strong,
      #qp-v49-quality-control .qp-v49-scan-ok strong{ display:block; color:#244b59; font-size:11px; }
      #qp-v49-quality-control .qp-v49-scan-card p,
      #qp-v49-quality-control .qp-v49-scan-ok p{ margin:4px 0; color:#5b727c; font-size:10px; line-height:1.45; }
      #qp-v49-quality-control .qp-v49-scan-card small{ display:block; margin-top:4px; color:#71858d; font-size:9px; line-height:1.4; }
      #qp-v49-quality-control .qp-v49-safe-action{
        width:100%; min-height:38px; margin-top:8px; border:1px solid #d7b96e; border-radius:9px; background:#fff9e8; color:#775710; font-size:10px; font-weight:900;
      }
      #qp-v49-quality-control .qp-v49-recipe-save{ display:grid; grid-template-columns:minmax(0,1fr) auto; gap:7px; }
      #qp-v49-quality-control .qp-v49-recipe-name{ min-width:0; min-height:40px; padding:7px 9px; border:1px solid #c9dde5; border-radius:10px; color:#244b59; background:#fff; font-size:11px; }
      #qp-v49-quality-control .qp-v49-recipe-save-button{ min-height:40px; padding:7px 10px; border:1px solid #82c9d1; border-radius:10px; background:#eafafd; color:#17627a; font-size:10px; font-weight:900; }
      #qp-v49-quality-control .qp-v49-recipe-save-button:disabled{ opacity:.48; }
      #qp-v49-quality-control .qp-v49-recipe-list{ display:flex; flex-direction:column; gap:6px; margin-top:8px; }
      #qp-v49-quality-control .qp-v49-recipe-empty{ margin:0; padding:8px; border:1px dashed #d4e2e8; border-radius:9px; color:#72868e; font-size:10px; }
      #qp-v49-quality-control .qp-v49-recipe-card{ display:flex; align-items:center; justify-content:space-between; gap:8px; padding:8px; border:1px solid #dbe8ed; border-radius:10px; background:#fff; }
      #qp-v49-quality-control .qp-v49-recipe-text{ display:flex; flex-direction:column; min-width:0; }
      #qp-v49-quality-control .qp-v49-recipe-text strong{ color:#244b59; font-size:11px; overflow-wrap:anywhere; }
      #qp-v49-quality-control .qp-v49-recipe-text small{ color:#758890; font-size:9px; }
      #qp-v49-quality-control .qp-v49-recipe-actions{ display:flex; flex:0 0 auto; gap:5px; }
      #qp-v49-quality-control .qp-v49-recipe-actions button{ min-height:34px; padding:5px 8px; border:1px solid #c6dae2; border-radius:8px; background:#f8fcfd; color:#356170; font-size:9px; font-weight:850; }
      #qp-v49-quality-control .qp-v49-toast{
        position:fixed; left:50%; bottom:150px; z-index:10080; max-width:min(88vw,520px); padding:9px 12px; border:1px solid #abd9df; border-radius:999px; background:#f7fdff; color:#245260; font-size:11px; font-weight:850; box-shadow:0 10px 28px rgba(24,72,88,.18); opacity:0; pointer-events:none; transform:translate(-50%,10px); transition:.18s ease;
      }
      #qp-v49-quality-control .qp-v49-toast.is-visible{ opacity:1; transform:translate(-50%,0); }
      #qp-v49-quality-control .qp-v49-toast[data-kind="success"]{ border-color:#77c9b7; background:#effcf7; color:#17624f; }
      #qp-v49-quality-control .qp-v49-toast[data-kind="warning"]{ border-color:#e3c16e; background:#fff9e9; color:#745611; }
      #qp-v49-output-tabs{ display:flex; align-items:center; gap:6px; margin:7px 0 6px; }
      #qp-v49-output-tabs .qp-v49-output-tab{ min-height:34px; padding:5px 10px; border:1px solid #b9d2dd; border-radius:10px; background:rgba(255,255,255,.75); color:#66808c; font-size:10px; font-weight:900; }
      #qp-v49-output-tabs .qp-v49-output-tab.is-active{ border-color:#6fc6ca; background:#eafbf8; color:#17686a; }
      #qp-v49-output-tabs .qp-v49-output-tab.has-parts:not(.is-active){ color:#8b4b68; border-color:#dab0c3; }
      #qp-v49-output-tabs .qp-v49-output-count{ display:inline-grid; place-items:center; min-width:20px; min-height:20px; margin-left:3px; border-radius:999px; background:#d8eef1; font-size:9px; }
      #qp-v49-output-tabs .qp-v49-negative-copy{ margin-left:auto; min-height:34px; padding:5px 9px; border:1px solid #d7acc1; border-radius:10px; background:#fff4f8; color:#874964; font-size:9px; font-weight:900; }
      #qp-v49-output-tabs .qp-v49-negative-copy:disabled{ opacity:.45; }
      #qp-v49-output-tabs .qp-v49-negative-copy[hidden], #copyBtn[hidden]{ display:none !important; }
      textarea#shima-negative-out{ width:100%; min-height:110px; box-sizing:border-box; padding:12px; border:1px solid #d5b6c5; border-radius:12px; background:#fffafd; color:#533948; font-family:Consolas,monospace; font-size:13px; line-height:1.5; resize:vertical; }
      textarea#out[hidden], textarea#shima-negative-out[hidden]{ display:none !important; }
      @media(min-width:760px){
        #qp-v49-quality-control .qp-v49-negative-grid{ grid-template-columns:repeat(2,minmax(0,1fr)); }
      }
      @media(max-width:430px){
        #qp-v49-quality-control .qp-v49-panel-title,
        #qp-v49-quality-control .qp-v49-negative-head{ flex-direction:column; }
        #qp-v49-quality-control .qp-v49-negative-toggle{ width:100%; }
        #qp-v49-quality-control .qp-v49-recipe-save{ grid-template-columns:1fr; }
        #qp-v49-quality-control .qp-v49-recipe-card{ align-items:flex-start; flex-direction:column; }
        #qp-v49-quality-control .qp-v49-recipe-actions{ width:100%; }
        #qp-v49-quality-control .qp-v49-recipe-actions button{ flex:1 1 0; }
      }
    `;
    document.head.appendChild(style);
  }

  function bindControl(control){
    if(!control || control.dataset.qcBound === "1") return;
    control.dataset.qcBound = "1";
    control.addEventListener("change", function(event){
      const input = event.target;
      if(input && input.matches && input.matches("input[data-shima-negative-tag]")){
        onNegativeChange(input);
      }
    });
    control.addEventListener("click", function(event){
      const action = event.target && event.target.closest ? event.target.closest("[data-qc-action]") : null;
      if(action){
        const kind = action.dataset.qcAction;
        if(kind === "negative-toggle") toggleNegativeGuard(action.dataset.qcFamily || state.family);
        else if(kind === "cleanup-duplicates" && state.lastScan){
          removeInputs(state.lastScan.duplicateRemovable, "重複した単品候補 {count}件を解除しますか？\nセット物は変更しません。");
        }else if(kind === "cleanup-conflicts" && state.lastScan){
          removeInputs(state.lastScan.conflictRemovable, "作風と相性が競合する単品候補 {count}件を解除しますか？\n意図した混合作風ならキャンセルしてください。");
        }else if(kind === "save-recipe") saveRecipe();
        else if(kind === "copy-negative") copyText(ui.negativeOut ? ui.negativeOut.value : "", action);
        return;
      }
      const apply = event.target && event.target.closest ? event.target.closest("[data-qc-recipe-apply]") : null;
      if(apply){
        applyRecipe(state.recipes.find(function(recipe){ return recipe.id === apply.dataset.qcRecipeApply; }));
        return;
      }
      const remove = event.target && event.target.closest ? event.target.closest("[data-qc-recipe-delete]") : null;
      if(remove) deleteRecipe(remove.dataset.qcRecipeDelete);
    });
  }

  function bindOutputTabs(){
    if(!ui.outputTabs || ui.outputTabs.dataset.qcBound === "1") return;
    ui.outputTabs.dataset.qcBound = "1";
    ui.outputTabs.addEventListener("click", function(event){
      const tab = event.target && event.target.closest ? event.target.closest("[data-qc-output-tab]") : null;
      if(tab) setOutputTab(tab.dataset.qcOutputTab);
      const copy = event.target && event.target.closest ? event.target.closest('[data-qc-action="copy-negative"]') : null;
      if(copy) copyText(ui.negativeOut ? ui.negativeOut.value : "", copy);
    });
  }

  function bindGlobal(){
    if(document.documentElement.dataset.qpV49GlobalBound === "1") return;
    document.documentElement.dataset.qpV49GlobalBound = "1";
    document.addEventListener("click", function(event){
      const family = event.target && event.target.closest ? event.target.closest(".qp-v47-family-button") : null;
      if(family) setTimeout(function(){ syncNegativeFamily(visibleFamily()); }, 0);
      const categoryReset = event.target && event.target.closest ? event.target.closest(".category-reset-btn") : null;
      if(categoryReset && categoryReset.closest("#list-quality_preset")){
        setTimeout(function(){
          persistNegative();
          updateNegativeOutput();
          scheduleScan(0);
        }, 120);
      }
    }, true);
    document.addEventListener("change", function(event){
      const input = event.target;
      if(input && input.matches && input.matches('input[type="checkbox"][data-output-channel="negative"]')){
        updateNegativeOutput();
        updateRecipeSaveState();
      }
      if(input && input.matches && input.matches('#sections input[type="checkbox"]')) scheduleScan(100);
    }, true);
    document.addEventListener("builderQualityQuickPresetChanged", function(){
      setTimeout(function(){
        syncNegativeFamily(visibleFamily());
        updateRecipeSaveState();
      }, 0);
    }, true);
    document.addEventListener("builderResetAll", function(){
      setTimeout(function(){
        persistNegative();
        updateNegativeOutput();
        setOutputTab("positive");
        scheduleScan(0);
      }, 0);
    }, true);
    window.addEventListener("builderHistoryRestored", function(){
      setTimeout(function(){
        syncNegativeFamily(visibleFamily());
        updateNegativeOutput();
        scheduleScan(0);
      }, 0);
    });
  }

  function insertControl(){
    if(document.getElementById("qp-v49-quality-control")) return;
    const shelf = document.getElementById("qp-v47-quick-presets");
    if(!shelf || !shelf.parentNode) return;
    ensureStyles();
    const control = buildControl();
    shelf.insertAdjacentElement("afterend", control);
    ui.control = control;
    bindControl(control);
    restorePersistedNegative();
    syncNegativeFamily(visibleFamily());
    updateNegativeOutput();
    renderRecipes();
    scheduleScan(0);
  }

  function init(){
    ensureStyles();
    buildOutputTabs();
    bindOutputTabs();
    insertControl();
    bindGlobal();
    setTimeout(function(){
      buildOutputTabs();
      bindOutputTabs();
      insertControl();
    }, 0);
    setTimeout(function(){
      buildOutputTabs();
      bindOutputTabs();
      insertControl();
    }, 300);
  }

  const API = {
    initUI(){ init(); },
    getTags(){ return []; }
  };

  window.ShimaQualityControl = {
    scan:function(){
      const scan = buildScan();
      renderScan(scan);
      return scan;
    },
    getNegativeTags:selectedNegativeTags,
    setFamily:function(family){ syncNegativeFamily(family); },
    saveRecipe:saveRecipe,
    applyRecipe:function(id){
      applyRecipe(state.recipes.find(function(recipe){ return recipe.id === id; }));
    },
    refresh:function(){
      syncNegativeFamily(visibleFamily());
      updateNegativeOutput();
      renderRecipes();
      scheduleScan(0);
    }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }else{
    document.addEventListener("DOMContentLoaded", init, { once:true });
  }
})();
