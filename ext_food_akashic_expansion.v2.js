(function () {
  "use strict";

  if (window.__SHIMA_CULINARY_EXPANSION_UI_V2__) return;

  const KEY = "accessories";
  const VERSION = 4;
  const DATA = window.SHIMA_CULINARY_EXPANSION_V2;
  let timer = 0;
  let installing = false;

  function normalize(value) {
    return String(value || "").toLowerCase().replace(/[()]/g, "").replace(/\s+/g, " ").trim();
  }

  function safeId(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function directChild(parent, selector) {
    return Array.from(parent && parent.children || []).find(node => node.matches && node.matches(selector)) || null;
  }

  function makeSummary(titleText, noteText, count) {
    const summary = document.createElement("summary");
    const copy = document.createElement("span");
    copy.className = "culinary-expansion-summary-copy";
    const title = document.createElement("span");
    title.className = "culinary-expansion-summary-title";
    title.textContent = titleText;
    const note = document.createElement("span");
    note.className = "culinary-expansion-summary-note";
    note.textContent = noteText;
    const badge = document.createElement("span");
    badge.className = "culinary-expansion-count";
    badge.textContent = String(count);
    copy.appendChild(title);
    copy.appendChild(note);
    summary.appendChild(copy);
    summary.appendChild(badge);
    return summary;
  }

  function setFoodRole(input, group, itemId) {
    input.dataset.type = group === "actions" ? "action" : "normal";
    if (["quick", "completed", "dessert", "drinks", "ingredients", "specialized"].includes(group)) {
      input.dataset.foodTarget = "true";
      input.dataset.foodSizeTargetMode = group === "drinks" ? "volume" : group === "ingredients" ? "unit" : "portion";
      input.dataset.foodSizeTargetKind = group === "drinks" ? "drink" : group === "ingredients" ? "ingredient" : "dish";
      input.dataset.foodLabel = input.dataset.ja || "";
    }
    if (group === "dessert") {
      input.dataset.foodDecorationTarget = "true";
      input.dataset.foodDecorationGroup = "dessert";
      input.dataset.foodDecorationTargetKey = "culinary-expansion-v2::" + itemId;
      input.addEventListener("change", function () {
        const section = input.closest(".accessories-section");
        if (!section) return;
        const selected = Array.from(section.querySelectorAll('input[data-food-decoration-target="true"][data-food-decoration-group="dessert"]:checked'));
        const current = section.dataset.foodModifierTargetDessert || "";
        if (selected.length === 1) section.dataset.foodModifierTargetDessert = selected[0].dataset.foodDecorationTargetKey || "";
        else if (!selected.some(entry => entry.dataset.foodDecorationTargetKey === current)) section.dataset.foodModifierTargetDessert = "";
      });
    }
  }

  function makeCard(cat, entry) {
    const itemId = "food-akashic-v46-" + safeId(cat.group) + "-" + safeId(cat.key) + "-" + safeId(entry.slug);
    const label = document.createElement("label");
    label.className = "accessory-option-card culinary-expansion-card" + (entry.description ? " has-description" : "");
    label.dataset.culinaryExpansionV2Item = itemId;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = itemId;
    input.dataset.en = entry.en;
    input.dataset.ja = entry.ja;
    input.dataset.outputChannel = "positive";
    input.dataset.promptIntent = "normal";
    input.dataset.culinaryExpansion = "v2";
    input.dataset.culinaryGroup = cat.group;
    input.dataset.culinaryCategory = cat.key;
    if (entry.description) input.dataset.description = entry.description;
    setFoodRole(input, cat.group, itemId);

    const copy = document.createElement("span");
    copy.className = "culinary-expansion-card-copy";
    const title = document.createElement("span");
    title.className = "culinary-expansion-card-title";
    title.textContent = entry.ja;
    copy.appendChild(title);
    if (entry.description) {
      const description = document.createElement("span");
      description.className = "culinary-expansion-card-description";
      description.textContent = entry.description;
      copy.appendChild(description);
    }
    label.appendChild(input);
    label.appendChild(copy);
    return { label, input };
  }

  function makeCategory(cat, existingPrompts, existingIds, report) {
    const details = document.createElement("details");
    details.className = "culinary-expansion-category";
    details.dataset.culinaryExpansionV2Category = cat.key;
    details.dataset.culinaryExpansionGroup = cat.group;
    details.open = false;

    const grid = document.createElement("div");
    grid.className = "accessory-option-grid culinary-expansion-items";
    let count = 0;
    cat.items.forEach(entry => {
      const id = "food-akashic-v46-" + safeId(cat.group) + "-" + safeId(cat.key) + "-" + safeId(entry.slug);
      if (existingIds.has(id)) {
        report.idCollisions.push(id);
        return;
      }
      const promptKey = normalize(entry.en);
      if (existingPrompts.has(promptKey)) {
        report.promptDuplicates.push(entry.en);
        return;
      }
      const built = makeCard(cat, entry);
      grid.appendChild(built.label);
      existingIds.add(id);
      existingPrompts.add(promptKey);
      count++;
    });
    details.appendChild(makeSummary(cat.title, cat.note, count));
    details.appendChild(grid);
    report.added += count;
    report.categoryCounts[cat.key] = count;
    return details;
  }

  function makeSource(groupKey, cats, existingPrompts, existingIds, report) {
    const meta = DATA.groupMeta[groupKey];
    const source = document.createElement("details");
    source.className = "food-akashic-source culinary-expansion-source culinary-expansion-v2-source";
    source.dataset.foodAkashicOrigin = "culinary-expansion-v2-" + groupKey;
    source.dataset.foodAkashicGroup = groupKey;
    source.dataset.foodAkashicOrder = String(meta.order);
    source.dataset.culinaryExpansionV2Source = groupKey;
    source.open = false;

    const body = document.createElement("div");
    body.className = "culinary-expansion-categories";
    cats.forEach(cat => body.appendChild(makeCategory(cat, existingPrompts, existingIds, report)));
    const count = body.querySelectorAll('input[type="checkbox"]').length;
    source.appendChild(makeSummary(meta.title, meta.note, count));
    source.appendChild(body);
    report.groupCounts[groupKey] = count;
    return source;
  }

  function updateCounts(root) {
    const total = root.querySelectorAll('input[type="checkbox"]').length;
    const rootBadge = root.querySelector(":scope > .food-akashic-root-summary .food-akashic-count");
    if (rootBadge) rootBadge.textContent = String(total);
    const groups = [];
    root.querySelectorAll(":scope > .food-akashic-group").forEach(group => {
      const inputs = group.querySelectorAll('input[type="checkbox"]').length;
      const badge = group.querySelector(":scope > .food-akashic-group-summary .food-akashic-count");
      if (badge) badge.textContent = String(inputs);
      groups.push({ key: group.dataset.foodAkashicGroupKey || "", inputs });
    });
    const base = window.__SHIMA_FOOD_AKASHIC_V1__;
    if (base && base.lastReport) {
      base.lastReport.totalInputs = total;
      base.lastReport.groupedInputs = groups.reduce((sum, group) => sum + group.inputs, 0);
      base.lastReport.ungroupedInputs = total - base.lastReport.groupedInputs;
      base.lastReport.sourceNodes = root.querySelectorAll(":scope > .food-akashic-group > .food-akashic-body > .food-akashic-source").length;
      base.lastReport.groups = groups;
    }
    return { total, groups };
  }

  function notifyIndexes() {
    try { window.ShimaChannelSearch && window.ShimaChannelSearch.invalidate && window.ShimaChannelSearch.invalidate(); } catch (_) {}
    try { window.ZeroAssist && window.ZeroAssist.refresh && window.ZeroAssist.refresh(); } catch (_) {}
  }

  function install() {
    if (installing || !DATA) return null;
    const root = document.querySelector("#list-accessories details.food-akashic-root");
    if (!root) return null;
    if (root.querySelectorAll("[data-culinary-expansion-source]").length < 9) return null;
    installing = true;
    try {
      const ownSources = root.querySelectorAll("[data-culinary-expansion-v2-source]");
      if (ownSources.length === Object.keys(DATA.groupMeta).length) {
        const current = updateCounts(root);
        const report = window.__SHIMA_CULINARY_EXPANSION_UI_V2__.lastReport || {};
        report.totalFoodInputs = current.total;
        report.runtimeGroupCounts = Object.fromEntries(current.groups.map(group => [group.key, group.inputs]));
        window.__SHIMA_CULINARY_EXPANSION_UI_V2__.lastReport = report;
        notifyIndexes();
        return report;
      }

      const existingPrompts = new Set(Array.from(root.querySelectorAll('input[type="checkbox"]')).map(input => normalize(input.dataset.en)).filter(Boolean));
      const existingIds = new Set(Array.from(document.querySelectorAll("input[id]")).map(input => input.id));
      const report = {
        version: "2.0.0",
        candidates: DATA.expectedItems,
        categories: DATA.expectedCategories,
        added: 0,
        idCollisions: [],
        promptDuplicates: [],
        categoryCounts: {},
        groupCounts: {},
        totalFoodInputs: 0,
        runtimeGroupCounts: {}
      };

      Object.keys(DATA.groupMeta).forEach(groupKey => {
        if (root.querySelector('[data-culinary-expansion-v2-source="' + groupKey + '"]')) return;
        const cats = DATA.categories.filter(cat => cat.group === groupKey);
        const source = makeSource(groupKey, cats, existingPrompts, existingIds, report);
        const group = root.querySelector(':scope > .food-akashic-group[data-food-akashic-group-key="' + groupKey + '"]');
        const mount = group && directChild(group, ".food-akashic-body");
        (mount || root).appendChild(source);
      });

      const current = updateCounts(root);
      report.totalFoodInputs = current.total;
      report.runtimeGroupCounts = Object.fromEntries(current.groups.map(group => [group.key, group.inputs]));
      window.__SHIMA_CULINARY_EXPANSION_UI_V2__.lastReport = report;
      notifyIndexes();
      try { document.dispatchEvent(new CustomEvent("culinaryAkashicExpandedV2", { detail: report })); } catch (_) {}
      return report;
    } finally {
      installing = false;
    }
  }

  function schedule(delay) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      const report = install();
      if (!report) schedule(120);
    }, delay || 0);
  }

  const API = {
    initUI() {
      schedule(0);
      setTimeout(function () { schedule(0); }, 280);
      setTimeout(function () { schedule(0); }, 760);
    },
    getTags() { return []; }
  };

  window.__SHIMA_CULINARY_EXPANSION_UI_V2__ = {
    version: "2.0.0",
    install,
    lastReport: null
  };

  document.addEventListener("foodAkashicOrganized", function () { schedule(30); });
  document.addEventListener("culinaryAkashicExpanded", function () { schedule(30); });
  window.addEventListener("promptPartMounted", function () { schedule(40); });

  function register(retry) {
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      setTimeout(function () {
        try { if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); } catch (_) {}
      }, 30);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function () { register((retry || 0) + 1); }, 100);
  }

  register(0);
  console.log("🍽️ Loaded: ./ext_food_akashic_expansion.v2.js v2.0.0");
})();
