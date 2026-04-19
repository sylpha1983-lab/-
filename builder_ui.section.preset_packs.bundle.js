(function () {
  // =========================================================
  // Preset Packs Section (ES5 safe)
  // =========================================================

  var KEY = "preset_packs";
  var VERSION = 3;

  function safeText(v) {
    return (v === null || v === undefined) ? "" : String(v);
  }

  function ensureArray(v) {
    if (!v) return [];
    if (Object.prototype.toString.call(v) === "[object Array]") return v;
    return [v];
  }

  function createInfoBox(text) {
    var box = document.createElement("div");
    box.style.cssText =
      "margin:10px 0; padding:10px 12px; border-radius:10px;" +
      "border:1px dashed rgba(0,0,0,0.25); background:rgba(255,255,255,0.9);" +
      "font-size:0.95em; color:#444; line-height:1.35;";
    box.appendChild(document.createTextNode(text));
    return box;
  }

  function getDB() {
    // Prefer packs map if present
    if (window.__PP_DB && window.__PP_DB.packs) return window.__PP_DB.packs;
    if (window.PRESET_PACKS_DB) return window.PRESET_PACKS_DB;
    if (window.__PRESET_PACKS_DB) return window.__PRESET_PACKS_DB;
    if (window.__PP_DB) return window.__PP_DB;
    return null;
  }

  function extractGroups(db) {
    if (!db) return [];

    // Legacy: groups array
    if (db.groups && Object.prototype.toString.call(db.groups) === "[object Array]") return db.groups;
    if (Object.prototype.toString.call(db) === "[object Array]") return db;

    // Legacy nested
    if (db.PRESET_PACKS_DB && db.PRESET_PACKS_DB.groups && Object.prototype.toString.call(db.PRESET_PACKS_DB.groups) === "[object Array]") {
      return db.PRESET_PACKS_DB.groups;
    }

    // Main: packs map -> groups array
    if (typeof db === "object") {
      var out = [];
      var keys = Object.keys(db);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var arr = db[k];
        if (Object.prototype.toString.call(arr) !== "[object Array]") continue;
        out.push({
          id: "pp_" + i,
          title_ja: k,
          title_en: "",
          icon: "",
          items: arr
        });
      }
      return out;
    }

    return [];
  }

  function normalizeGroup(g) {
    var id = safeText(g.id || g.key || g.group_id || g.name || "");
    var titleJa = safeText(g.title_ja || g.ja || g.title || "Group");
    var titleEn = safeText(g.title_en || g.en || "");
    var icon = safeText(g.icon || "");
    var items = (g.items && Object.prototype.toString.call(g.items) === "[object Array]") ? g.items
              : (g.packs && Object.prototype.toString.call(g.packs) === "[object Array]") ? g.packs
              : [];
    return { id: id, titleJa: titleJa, titleEn: titleEn, icon: icon, items: items };
  }

  function getGridColumns() {
    try {
      if (window.matchMedia && window.matchMedia("(max-width: 760px)").matches) return "minmax(0, 1fr)";
      if (window.innerWidth && window.innerWidth <= 760) return "minmax(0, 1fr)";
    } catch (e) {}
    return "repeat(2, minmax(0, 1fr))";
  }

  function normalizeItem(it) {
    var id = safeText(it.id || it.key || it.pack_id || it.name || it.label || "");
    var titleJa = safeText(it.title_ja || it.ja || it.title || it.label || "Item");
    var titleEn = safeText(it.title_en || it.en || "");
    var subJa = safeText(it.subtitle_ja || it.desc_ja || it.sub_ja || it.desc || "");
    var subEn = safeText(it.subtitle_en || it.desc_en || it.sub_en || "");
    var tags = ensureArray(it.tags || it.values || it.val || it.prompt || []);
    var childNodes = null;
    if (it.children && Object.prototype.toString.call(it.children) === "[object Array]") childNodes = it.children;
    else if (it.items && Object.prototype.toString.call(it.items) === "[object Array]") childNodes = it.items;
    return { id: id, titleJa: titleJa, titleEn: titleEn, subJa: subJa, subEn: subEn, tags: tags, type: safeText(it.type || ""), leftLabel: safeText(it.leftLabel || ""), rightLabel: safeText(it.rightLabel || ""), children: childNodes, collectionId: safeText(it.collection_id || it.collectionId || ""), collectionRole: safeText(it.collection_role || it.collectionRole || ""), linkedIds: ensureArray(it.linked_ids || it.linkedIds || []), controllerKind: safeText(it.controller_kind || it.controllerKind || "") };
  }


  function ensureMythicRoleplayFusionBalance(db) {
    try {
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) { if (titleOf(list[i]) === title) return list[i]; }
        return null;
      }
      function ensureGroup(collectionNode, titleJa, titleEn) {
        if (!collectionNode || !isArray(collectionNode.children)) return null;
        for (var i = 0; i < collectionNode.children.length; i++) {
          if (titleOf(collectionNode.children[i]) === titleJa) {
            if (!isArray(collectionNode.children[i].children)) collectionNode.children[i].children = [];
            collectionNode.children[i].title_en = titleEn;
            return collectionNode.children[i];
          }
        }
        var node = { title_ja: titleJa, title_en: titleEn, children: [] };
        collectionNode.children.push(node);
        return node;
      }
      function appendUniqueLinkedIds(item, ids) {
        if (!item) return;
        if (!isArray(item.linked_ids)) item.linked_ids = isArray(item.linkedIds) ? item.linkedIds.slice() : [];
        for (var i = 0; i < ids.length; i++) if (item.linked_ids.indexOf(ids[i]) === -1) item.linked_ids.push(ids[i]);
      }
      function removeLinkedIds(item, ids) {
        if (!item || !isArray(item.linked_ids)) return;
        item.linked_ids = item.linked_ids.filter(function(id) { return ids.indexOf(id) === -1; });
      }
      function removeLegacyGroups(collectionNode) {
        if (!collectionNode || !isArray(collectionNode.children)) return;
        var deny = {
          '🧬 融合強化': 1,
          '🐾 身体部位変化': 1
        };
        collectionNode.children = collectionNode.children.filter(function(ch) { return !deny[titleOf(ch)]; });
      }
      function normalizeFusionOrder(collectionNode) {
        if (!collectionNode || !isArray(collectionNode.children)) return;
        var priority = {
          '完成セット': 0,
          '🌫 軽融合': 1,
          '🐾 軽身体変化': 2,
          '🧍 人型維持': 3,
          '🚫 外部神獣抑制': 4,
          '👑 青龍神格演出': 5,
          '⛈ 青龍天候・雷演出': 6,
          '👑 フェニックス神格演出': 5,
          '🔥 フェニックス再生火羽演出': 6,
          '👑 グリフォン神格演出': 5,
          '🪽 グリフォン蒼穹・羽爪演出': 6,
          '👑 スフィンクス神格演出': 5,
          '☁ スフィンクス砂碑・神謎演出': 6,
          '🧬 中融合': 7,
          '🐾 中身体変化': 8,
          '🐉 深融合': 9,
          '🐾 深身体変化': 10,
          '🤝 ペア補助': 11,
          'ベース': 12,
          'カスタマイズ': 13,
          '設定': 14,
          'クオリティセット': 15,
          '実クオリティ項目': 16
        };
        collectionNode.children.sort(function(a, b) {
          var at = titleOf(a), bt = titleOf(b);
          var av = Object.prototype.hasOwnProperty.call(priority, at) ? priority[at] : 999;
          var bv = Object.prototype.hasOwnProperty.call(priority, bt) ? priority[bt] : 999;
          if (av !== bv) return av - bv;
          return 0;
        });
      }
      var ROLEPLAY_PARENT_KEY = '🎭 なりきりおすすめセット (Roleplay Recommended Sets)';
      var SPECIAL_TITLE_JA = '🧩 神獣・伝説特化コレクション';
      var rootArr = db[ROLEPLAY_PARENT_KEY] || db['🎭 なりきりおすすめセット｜神獣・伝説なりきり'] || [];
      var roleplayRoot = findByTitle(rootArr, '🎭 なりきり') || { children: [] };
      var specialRoot = findByTitle(roleplayRoot.children, SPECIAL_TITLE_JA);
      if (!specialRoot || !isArray(specialRoot.children)) return;
      var defs = [
        { titleJa:'☯ 四神特化コレクション', prefix:'mythic_four', stems:['seiryu','byakko','suzaku','genbu'] },
        { titleJa:'🌊 海蛇・深海特化コレクション', prefix:'mythic_sea', stems:['leviathan','jormungandr','kraken'] },
        { titleJa:'☠ 冥獣・終末獣特化コレクション', prefix:'mythic_doom', stems:['fenrir','cerberus','behemoth'] },
        { titleJa:'🪽 天空・神鳥特化コレクション', prefix:'mythic_sky', stems:['phoenix','griffin','sphinx'] }
      ];
      function removeFusionGroupsOnly(collectionNode) {
        if (!collectionNode || !isArray(collectionNode.children)) return;
        var deny = {
          '🌫 軽融合': 1,
          '🧬 中融合': 1,
          '🐉 深融合': 1,
          '🐾 軽身体変化': 1,
          '🐾 中身体変化': 1,
          '🐾 深身体変化': 1,
          '🧍 人型維持': 1,
          '🚫 外部神獣抑制': 1,
          '👑 青龍神格演出': 1,
          '⛈ 青龍天候・雷演出': 1,
          '👑 朱雀神格演出': 1,
          '🔥 朱雀聖火・飛翔演出': 1,
          '👑 玄武神格演出': 1,
          '🌫 玄武玄水・蛇霧演出': 1,
          '👑 麒麟神格演出': 1,
          '☁ 麒麟瑞雲・祥光演出': 1,
          '🤝 ペア補助': 0,
          'ベース': 0,
          'カスタマイズ': 0,
          '設定': 0,
          'クオリティセット': 0,
          '実クオリティ項目': 0,
          '完成セット': 0
        };
        collectionNode.children = collectionNode.children.filter(function(ch) { return !deny[titleOf(ch)]; });
      }
      function speciesShelfStem(title) {
        if (title === '🐉 青龍') return 'seiryu';
        if (title === '🐅 白虎') return 'byakko';
        if (title === '🔥 朱雀') return 'suzaku';
        if (title === '🐢 玄武') return 'genbu';
        if (title === '🦌 麒麟') return 'qilin';
        if (title === '🐍 リヴァイアサン') return 'leviathan';
        if (title === '🌍 ヨルムンガンド') return 'jormungandr';
        if (title === '🦑 クラーケン') return 'kraken';
        if (title === '🐺 フェンリル') return 'fenrir';
        if (title === '🐶 ケルベロス') return 'cerberus';
        if (title === '🦬 ベヒーモス') return 'behemoth';
        if (title === '🔥 フェニックス') return 'phoenix';
        if (title === '🦅 グリフォン') return 'griffin';
        if (title === '🦁 スフィンクス') return 'sphinx';
        return '';
      }
      function normalizeCollectionTopOrder(collectionNode) {
        if (!collectionNode || !isArray(collectionNode.children)) return;
        var priority = {
          '🐉 青龍': 0,
          '🐅 白虎': 1,
          '🔥 朱雀': 2,
          '🐢 玄武': 3,
          '🦌 麒麟': 4,
          '🐍 リヴァイアサン': 0,
          '🌍 ヨルムンガンド': 1,
          '🦑 クラーケン': 2,
          '🐺 フェンリル': 0,
          '🐶 ケルベロス': 1,
          '🦬 ベヒーモス': 2,
          '🔥 フェニックス': 0,
          '🦅 グリフォン': 1,
          '🦁 スフィンクス': 2
        };
        collectionNode.children.sort(function(a, b) {
          var at = titleOf(a), bt = titleOf(b);
          var av = Object.prototype.hasOwnProperty.call(priority, at) ? priority[at] : 999;
          var bv = Object.prototype.hasOwnProperty.call(priority, bt) ? priority[bt] : 999;
          if (av !== bv) return av - bv;
          return 0;
        });
      }
      for (var gi = 0; gi < defs.length; gi++) {
        var def = defs[gi];
        var collectionNode = findByTitle(specialRoot.children, def.titleJa);
        if (!collectionNode || !isArray(collectionNode.children)) continue;

        var speciesShelves = [];
        for (var cc = 0; cc < collectionNode.children.length; cc++) {
          var stemFromShelf = speciesShelfStem(titleOf(collectionNode.children[cc]));
          if (stemFromShelf) speciesShelves.push({ node: collectionNode.children[cc], stem: stemFromShelf });
        }

        var targets = [];
        if (speciesShelves.length) {
          removeFusionGroupsOnly(collectionNode);
          normalizeCollectionTopOrder(collectionNode);
          for (var sh = 0; sh < speciesShelves.length; sh++) {
            targets.push({ collectionNode: speciesShelves[sh].node, stems: [speciesShelves[sh].stem], prefix: def.prefix, scoped: true });
          }
        } else {
          targets.push({ collectionNode: collectionNode, stems: def.stems.slice(), prefix: def.prefix, scoped: false });
        }

        for (var tg = 0; tg < targets.length; tg++) {
          var target = targets[tg];
          var node = target.collectionNode;
          if (!node || !isArray(node.children)) continue;
          removeLegacyGroups(node);
          ensureGroup(node, '🌫 軽融合', 'Roleplay Fusion');
          ensureGroup(node, '🧬 中融合', 'Hybrid Fusion');
          ensureGroup(node, '🐉 深融合', 'Full Fusion');
          ensureGroup(node, '🐾 軽身体変化', 'Roleplay Body Mutation');
          ensureGroup(node, '🐾 中身体変化', 'Hybrid Body Mutation');
          ensureGroup(node, '🐾 深身体変化', 'Full Body Mutation');
          ensureGroup(node, '🧍 人型維持', 'Humanoid Preservation');
          ensureGroup(node, '🚫 外部神獣抑制', 'External Beast Suppression');
          if (target.prefix === 'mythic_four') {
            if (target.stems[0] === 'seiryu') {
              ensureGroup(node, '👑 青龍神格演出', 'Seiryu Divine Presence');
              ensureGroup(node, '⛈ 青龍天候・雷演出', 'Seiryu Storm & Lightning');
            } else if (target.stems[0] === 'suzaku') {
              ensureGroup(node, '👑 朱雀神格演出', 'Suzaku Divine Presence');
              ensureGroup(node, '🔥 朱雀聖火・飛翔演出', 'Suzaku Sacred Flame & Flight');
            } else if (target.stems[0] === 'genbu') {
              ensureGroup(node, '👑 玄武神格演出', 'Genbu Divine Presence');
              ensureGroup(node, '🌫 玄武玄水・蛇霧演出', 'Genbu Blackwater & Serpent Mist');
            }
          } else if (target.prefix === 'mythic_sky') {
            if (target.stems[0] === 'phoenix') {
              ensureGroup(node, '👑 フェニックス神格演出', 'Phoenix Divine Presence');
              ensureGroup(node, '🔥 フェニックス再生火羽演出', 'Phoenix Rebirth Ember Wings');
            } else if (target.stems[0] === 'griffin') {
              ensureGroup(node, '👑 グリフォン神格演出', 'Griffin Divine Presence');
              ensureGroup(node, '🪽 グリフォン蒼穹・羽爪演出', 'Griffin Sky Dominion & Talon');
            } else if (target.stems[0] === 'sphinx') {
              ensureGroup(node, '👑 スフィンクス神格演出', 'Sphinx Divine Presence');
              ensureGroup(node, '☁ スフィンクス砂碑・神謎演出', 'Sphinx Sand Monument & Sacred Riddle');
            }
          }
          normalizeFusionOrder(node);
          var completeBox = findByTitle(node.children, '完成セット');
          var completeItems = completeBox && isArray(completeBox.children) ? completeBox.children : [];
          for (var si = 0; si < target.stems.length; si++) {
            var stem = target.stems[si];
            var completeId = target.prefix + '_complete_' + stem;
            var targetComplete = null;
            for (var ci = 0; ci < completeItems.length; ci++) {
              if (((completeItems[ci] && completeItems[ci].id) || '') === completeId) { targetComplete = completeItems[ci]; break; }
            }
            if (!targetComplete) continue;
            var roleplayId = target.prefix + '_roleplay_' + stem;
            var hybridId = target.prefix + '_hybrid_' + stem;
            var fullId = target.prefix + '_full_' + stem;
            var roleMutationId = target.prefix + '_role_mutation_' + stem;
            var hybridMutationId = target.prefix + '_hybrid_mutation_' + stem;
            var fullMutationId = target.prefix + '_full_mutation_' + stem;
            var preserveId = target.prefix + '_preserve_' + stem;
            var suppressId = target.prefix + '_suppress_' + stem;
            var legacyFusionId = target.prefix + '_fusion_' + stem;
            var legacyMutationId = target.prefix + '_mutation_' + stem;
            removeLinkedIds(targetComplete, [legacyFusionId, legacyMutationId, roleplayId, hybridId, fullId, roleMutationId, hybridMutationId, fullMutationId, preserveId, suppressId]);
            appendUniqueLinkedIds(targetComplete, [roleplayId, roleMutationId, preserveId, suppressId]);
          }
        }
      }
      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyCheckboxVisual(cb) {
    if (!cb) return;
    var node = cb;
    while (node && node.tagName !== "LABEL") node = node.parentNode;
    if (!node) return;
    if (cb.checked) {
      node.style.background = "rgba(0, 140, 255, 0.08)";
      node.style.borderColor = "rgba(0, 140, 255, 0.35)";
    } else {
      node.style.background = "#fff";
      node.style.borderColor = "rgba(0,0,0,0.10)";
    }
  }

  function openAncestorDetails(node) {
    var cur = node;
    while (cur) {
      if (cur.tagName === "DETAILS") cur.open = true;
      cur = cur.parentNode;
    }
  }

  function parseJsonArrayAttr(v) {
    if (!v) return [];
    try {
      var arr = JSON.parse(v);
      return Object.prototype.toString.call(arr) === "[object Array]" ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function collectionCheckboxes(root, collectionId, role) {
    if (!root || !collectionId) return [];
    var selector = 'input.preset-pack-cb[data-collection-id="' + collectionId.replace(/"/g, '\\"') + '"]';
    if (role) selector += '[data-collection-role="' + role.replace(/"/g, '\\"') + '"]';
    var list = root.querySelectorAll(selector);
    return Array.prototype.slice.call(list || []);
  }

  function setCheckboxState(cb, checked) {
    if (!cb) return;
    cb.checked = !!checked;
    applyCheckboxVisual(cb);
  }

  function clearCollectionRoles(root, collectionId, roles, exceptId) {
    for (var i = 0; i < roles.length; i++) {
      var boxes = collectionCheckboxes(root, collectionId, roles[i]);
      for (var j = 0; j < boxes.length; j++) {
        if (exceptId && boxes[j].getAttribute("data-pack-id") === exceptId) continue;
        setCheckboxState(boxes[j], false);
      }
    }
  }

  function isExclusivePairRole(role) {
    return role === "pair_helper" || role === "pair_male" || role === "pair_female" || role === "pair_relation";
  }


  function findCheckboxByPackId(root, packId) {
    if (!root || !packId) return null;
    return root.querySelector('input.preset-pack-cb[data-pack-id="' + packId.replace(/"/g, '\\"') + '"]');
  }

  function applyQualitySetSelection(root, cb, suppressGenerate) {
    var collectionId = cb.getAttribute("data-collection-id") || "";
    if (!collectionId) return;
    clearCollectionRoles(root, collectionId, ["quality_set"], cb.getAttribute("data-pack-id"));
    clearCollectionRoles(root, collectionId, ["quality_detail"]);
    if (cb.checked) {
      setCheckboxState(cb, true);
      openAncestorDetails(cb);
      var linked = parseJsonArrayAttr(cb.getAttribute("data-linked-ids"));
      for (var i = 0; i < linked.length; i++) {
        var target = findCheckboxByPackId(root, linked[i]);
        if (!target) continue;
        setCheckboxState(target, true);
        openAncestorDetails(target);
      }
    } else {
      setCheckboxState(cb, false);
    }
    if (!suppressGenerate && typeof window.generateOutput === "function") window.generateOutput();
  }

  function applyCompleteSetSelection(root, cb, suppressGenerate) {
    var collectionId = cb.getAttribute("data-collection-id") || "";
    if (!collectionId) return;
    clearCollectionRoles(root, collectionId, ["complete_set"], cb.getAttribute("data-pack-id"));
    clearCollectionRoles(root, collectionId, ["base", "custom", "customize", "setting", "quality_set", "quality_detail", "pair_helper", "pair_male", "pair_female", "pair_relation"]);
    if (cb.checked) {
      setCheckboxState(cb, true);
      openAncestorDetails(cb);
      var linked = parseJsonArrayAttr(cb.getAttribute("data-linked-ids"));
      for (var i = 0; i < linked.length; i++) {
        var target = findCheckboxByPackId(root, linked[i]);
        if (!target) continue;
        var role = target.getAttribute("data-collection-role") || "";
        if (role === "quality_set") {
          setCheckboxState(target, true);
          applyQualitySetSelection(root, target, true);
        } else {
          setCheckboxState(target, true);
        }
        openAncestorDetails(target);
      }
    } else {
      setCheckboxState(cb, false);
    }
    if (!suppressGenerate && typeof window.generateOutput === "function") window.generateOutput();
  }

  function buildGroupUI(group) {
    var details = document.createElement("details");
    details.className = "preset-pack-group";
    details.open = false;
    details.style.cssText =
      "margin:10px 0; border-radius:12px; border:1px solid rgba(0,0,0,0.10);" +
      "background:rgba(255,255,255,0.98); overflow:hidden;";

    var summary = document.createElement("summary");
    summary.style.cssText =
      "cursor:pointer; padding:12px 12px; user-select:none;" +
      "display:flex; align-items:center; justify-content:space-between;" +
      "background:rgba(0,0,0,0.03); font-weight:700; color:#222;";

    var left = document.createElement("div");
    left.style.cssText = "display:flex; align-items:center; gap:10px;";

    var icon = document.createElement("span");
    icon.appendChild(document.createTextNode(group.icon ? group.icon : "📦"));
    icon.style.cssText = "font-size:1.05em;";

    var title = document.createElement("div");

    var tJa = document.createElement("div");
    tJa.appendChild(document.createTextNode(group.titleJa));
    tJa.style.cssText = "font-size:1.05em; line-height:1.1;";

    title.appendChild(tJa);

    if (group.titleEn) {
      var tEn = document.createElement("div");
      tEn.appendChild(document.createTextNode("(" + group.titleEn + ")"));
      tEn.style.cssText = "font-size:0.9em; font-weight:600; color:rgba(0,0,0,0.55);";
      title.appendChild(tEn);
    }

    left.appendChild(icon);
    left.appendChild(title);

    var right = document.createElement("div");
    right.appendChild(document.createTextNode("△ 開閉"));
    right.style.cssText =
      "font-size:0.85em; font-weight:700; color:rgba(0,0,0,0.45);" +
      "padding:6px 10px; border-radius:999px; background:rgba(255,255,255,0.65);" +
      "border:1px solid rgba(0,0,0,0.08);";

    summary.appendChild(left);
    summary.appendChild(right);
    details.appendChild(summary);

    var content = document.createElement("div");
    content.className = "preset-pack-items";
    content.style.cssText =
      "padding:12px; display:grid; grid-template-columns:" + getGridColumns() + "; gap:10px;";

    // --- Nested subgroup support (1-2 levels) ---
    function buildSubGroupUI(sub, depth) {
      depth = depth || 0;
      var d = document.createElement("details");
      d.className = "preset-pack-subgroup";
      d.open = false;
      d.style.cssText =
        "grid-column:1 / -1; border-radius:12px; border:1px solid rgba(0,0,0,0.10);" +
        "background:rgba(255,255,255,0.98); overflow:hidden;";

      var s = document.createElement("summary");
      s.style.cssText =
        "cursor:pointer; padding:10px 12px; user-select:none;" +
        "display:flex; align-items:center; justify-content:space-between;" +
        "background:rgba(0,0,0,0.02); font-weight:800; color:#222;";

      var l = document.createElement("div");
      l.style.cssText = "display:flex; align-items:center; gap:10px;";

      var icon2 = document.createElement("span");
      icon2.appendChild(document.createTextNode(depth === 0 ? "🧩" : "📂"));
      icon2.style.cssText = "font-size:1.0em; opacity:0.9;";

      var t = document.createElement("div");
      var tJa2 = document.createElement("div");
      tJa2.appendChild(document.createTextNode(safeText(sub.titleJa || sub.title_ja || sub.title || sub.label || "Subgroup")));
      tJa2.style.cssText = "font-size:1.0em; line-height:1.1;";
      t.appendChild(tJa2);

      var tEnVal = safeText(sub.titleEn || sub.title_en || sub.en || "");
      if (tEnVal) {
        var tEn2 = document.createElement("div");
        tEn2.appendChild(document.createTextNode("(" + tEnVal + ")"));
        tEn2.style.cssText = "font-size:0.88em; font-weight:700; color:rgba(0,0,0,0.55);";
        t.appendChild(tEn2);
      }

      l.appendChild(icon2);
      l.appendChild(t);

      var r2 = document.createElement("div");
      r2.appendChild(document.createTextNode("△ 開閉"));
      r2.style.cssText =
        "font-size:0.85em; font-weight:800; color:rgba(0,0,0,0.45);" +
        "padding:6px 10px; border-radius:999px; background:rgba(255,255,255,0.65);" +
        "border:1px solid rgba(0,0,0,0.08);";

      s.appendChild(l);
      s.appendChild(r2);
      d.appendChild(s);

      var body = document.createElement("div");
      body.style.cssText = "padding:12px; display:grid; grid-template-columns:" + getGridColumns() + "; gap:10px;";

      // If this subgroup contains subgroups (2nd level), render them as nested details.
      var subChildren = null;
      if (sub.children && Object.prototype.toString.call(sub.children) === "[object Array]") subChildren = sub.children;
      else if (sub.items && Object.prototype.toString.call(sub.items) === "[object Array]") subChildren = sub.items;
      var firstSub = (subChildren && subChildren.length > 0) ? normalizeItem(subChildren[0]) : null;
      if (subChildren && firstSub && firstSub.children) {
        for (var ii = 0; ii < subChildren.length; ii++) {
          body.appendChild(buildSubGroupUI(subChildren[ii], depth + 1));
        }
      } else if (subChildren) {
        for (var jj = 0; jj < subChildren.length; jj++) {
          var it2 = normalizeItem(subChildren[jj]);
          if (it2.type === "pair_header") {
            var ph2 = document.createElement("div");
            ph2.className = "preset-pack-pair-header";
            ph2.style.cssText =
              "grid-column:1 / -1; display:flex; justify-content:space-between; align-items:center;" +
              "padding:6px 10px; border-radius:10px; background:rgba(0,0,0,0.03);" +
              "font-weight:800; font-size:12px; letter-spacing:0.02em; opacity:0.9;";
            var ll = document.createElement("div");
            ll.textContent = it2.leftLabel || "🎭 なりきり";
            var rr = document.createElement("div");
            rr.textContent = it2.rightLabel || "📍 場所・状況";
            ph2.appendChild(ll);
            ph2.appendChild(rr);
            body.appendChild(ph2);
            continue;
          }

          var label2 = document.createElement("label");
          label2.className = "preset-pack-card";
          label2.style.cssText =
            "display:flex; gap:10px; align-items:flex-start; min-width:0;" +
            "padding:10px 10px; border-radius:12px; cursor:pointer;" +
            "border:1px solid rgba(0,0,0,0.10); background:#fff;" +
            "box-shadow:0 1px 0 rgba(0,0,0,0.04);";

          var cb2 = document.createElement("input");
          cb2.type = "checkbox";
          cb2.className = "preset-pack-cb";
          cb2.style.cssText = "margin-top:3px; width:18px; height:18px;";
          cb2.setAttribute("data-pack-id", it2.id);
          try { cb2.setAttribute("data-tags", JSON.stringify(it2.tags || [])); } catch (e2) { cb2.setAttribute("data-tags", "[]"); }
          cb2.setAttribute("data-collection-id", it2.collectionId || "");
          cb2.setAttribute("data-collection-role", it2.collectionRole || "");
          try { cb2.setAttribute("data-linked-ids", JSON.stringify(it2.linkedIds || [])); } catch (e3) { cb2.setAttribute("data-linked-ids", "[]"); }

          var info2 = document.createElement("div");
          info2.style.cssText = "display:flex; flex-direction:column; gap:2px; min-width:0; flex:1 1 auto;";

          var h2 = document.createElement("div");
          h2.style.cssText = "font-weight:900; font-size:13px; line-height:1.25; word-break:keep-all; overflow-wrap:anywhere;";
          h2.appendChild(document.createTextNode(it2.titleJa));

          info2.appendChild(h2);

          if (it2.titleEn) {
            var he2 = document.createElement("div");
            he2.style.cssText = "font-weight:800; font-size:12px; color:rgba(0,0,0,0.55); word-break:break-word; overflow-wrap:anywhere;";
            he2.appendChild(document.createTextNode("(" + it2.titleEn + ")"));
            info2.appendChild(he2);
          }

          if (it2.subJa || it2.subEn) {
            var sub2 = document.createElement("div");
            sub2.style.cssText = "font-size:12px; color:rgba(0,0,0,0.62); line-height:1.3; word-break:keep-all; overflow-wrap:anywhere;";
            sub2.appendChild(document.createTextNode(it2.subJa || it2.subEn));
            info2.appendChild(sub2);
          }

          applyCheckboxVisual(cb2);
          label2.appendChild(cb2);
          label2.appendChild(info2);
          body.appendChild(label2);
        }
      } else {
        // Fallback: if no children, render nothing
      }

      d.appendChild(body);
      return d;
    }
;

    for (var i = 0; i < group.items.length; i++) {
      var item = normalizeItem(group.items[i]);

      // Nested subgroup: if this item has children, render as collapsible subgroup (no checkbox)
      // This is used for "なりきりおすすめセット" -> (なりきり / 場所・状況 / おすすめ組み合わせ / おすすめ構図)
      if (item.children && Object.prototype.toString.call(item.children) === "[object Array]") {
        var sgDef = {
          titleJa: item.titleJa,
          titleEn: item.titleEn,
          children: item.children
        };
        content.appendChild(buildSubGroupUI(sgDef, 0));
        continue;
      }

      if (item.type === "pair_header") {
        var ph = document.createElement("div");
        ph.className = "preset-pack-pair-header";
        ph.style.cssText =
          "grid-column:1 / -1; display:flex; justify-content:space-between; align-items:center;" +
          "padding:6px 10px; border-radius:10px; background:rgba(0,0,0,0.03);" +
          "font-weight:700; font-size:12px; letter-spacing:0.02em; opacity:0.9;";
        var l = document.createElement("div");
        l.textContent = item.leftLabel || "🎭 なりきり";
        var r = document.createElement("div");
        r.textContent = item.rightLabel || "📍 場所・状況";
        ph.appendChild(l);
        ph.appendChild(r);
        content.appendChild(ph);
        continue;
      }

      var label = document.createElement("label");
      label.className = "preset-pack-card";
      label.style.cssText =
        "display:flex; gap:10px; align-items:flex-start; min-width:0;" +
        "padding:10px 10px; border-radius:12px; cursor:pointer;" +
        "border:1px solid rgba(0,0,0,0.10); background:#fff;" +
        "box-shadow:0 1px 0 rgba(0,0,0,0.04);";

      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "preset-pack-cb";
      cb.style.cssText = "margin-top:3px; width:18px; height:18px;";
      cb.setAttribute("data-pack-id", item.id);
      cb.setAttribute("data-collection-id", item.collectionId || "");
      cb.setAttribute("data-collection-role", item.collectionRole || "");
      try { cb.setAttribute("data-linked-ids", JSON.stringify(item.linkedIds || [])); } catch (eLinked) { cb.setAttribute("data-linked-ids", "[]"); }
      // tags を data に詰める（JSON）
      try {
        cb.setAttribute("data-tags", JSON.stringify(item.tags || []));
      } catch (e1) {
        cb.setAttribute("data-tags", "[]");
      }

      // core の既知辞書(getKnownTags)が読む data-val / data-en を埋める
      // item.tags は ["(a), (b)..."] になりがちなので join でOK
      try {
        var knownStr = ensureArray(item.tags).join(", ");
        cb.setAttribute("data-val", knownStr);
        cb.setAttribute("data-en", knownStr);
      } catch (e2) {
        cb.setAttribute("data-val", "");
        cb.setAttribute("data-en", "");
      }


      var textWrap = document.createElement("div");
      textWrap.style.cssText = "display:flex; flex-direction:column; gap:3px; min-width:0;";

      var main = document.createElement("div");
      main.style.cssText = "font-weight:800; color:#222; line-height:1.25; word-break:keep-all; overflow-wrap:anywhere;";
      var mainTitle = item.titleEn ? (item.titleJa + " (" + item.titleEn + ")") : item.titleJa;
      main.appendChild(document.createTextNode(mainTitle));

      textWrap.appendChild(main);

      var subText = item.subEn ? (item.subJa + " (" + item.subEn + ")") : item.subJa;
      if (subText && subText.replace(/\s/g, "") !== "") {
        var sub = document.createElement("div");
        sub.style.cssText = "font-size:0.9em; font-weight:650; color:rgba(0,0,0,0.60); line-height:1.25; word-break:keep-all; overflow-wrap:anywhere;";
        sub.appendChild(document.createTextNode(subText));
        textWrap.appendChild(sub);
      }

      applyCheckboxVisual(cb);
      label.appendChild(cb);
      label.appendChild(textWrap);

      cb.onchange = (function (cbRef, labelRef) {
        return function () {
          if (cbRef.checked) {
            labelRef.style.background = "rgba(0, 140, 255, 0.08)";
            labelRef.style.borderColor = "rgba(0, 140, 255, 0.35)";
          } else {
            labelRef.style.background = "#fff";
            labelRef.style.borderColor = "rgba(0,0,0,0.10)";
          }

          if (typeof window.generateOutput === "function") {
            window.generateOutput();
          }
        };
      })(cb, label);

      content.appendChild(label);
    }

    details.appendChild(content);
    return details;
  }

  var API = {
    initUI: function () {
      var parent = document.querySelector("#list-preset_packs");
      if (!parent) return;

      var mount = parent.querySelector(".section-content") || parent;

      while (mount.firstChild) mount.removeChild(mount.firstChild);

      mount.appendChild(
        createInfoBox("※ ここは「まとめて刺す」系のパック置き場。チェックをONにすると、Generate時にそのまま出力へ混ざる。")
      );

      var db = getDB();
      ensureMythicRoleplayFusionBalance(db);
      var groupsRaw = extractGroups(db);


      // If a "Roleplay Recommended Sets" parent exists, hide scattered legacy flat groups referenced under it.
      var hasRoleplayParent = false;
      var hasAdultRoleplayParent = false;
      for (var gi = 0; gi < groupsRaw.length; gi++) {
        var g0 = groupsRaw[gi];
        var tj = safeText(g0.title_ja || g0.titleJa || g0.title || "");
        if (tj.indexOf("🎭 なりきりおすすめセット (Roleplay Recommended Sets)") === 0 || tj.indexOf("なりきりおすすめセット (Roleplay Recommended Sets)") === 0) hasRoleplayParent = true;
        if (tj.indexOf("🔞 なりきりおすすめセット (Adult Roleplay Recommended Sets)") === 0) hasAdultRoleplayParent = true;
      }

      if (hasRoleplayParent || hasAdultRoleplayParent) {
        var filtered = [];
        for (var gi2 = 0; gi2 < groupsRaw.length; gi2++) {
          var g1 = groupsRaw[gi2];
          var tj1 = safeText(g1.title_ja || g1.titleJa || g1.title || "");
          if (tj1.indexOf("🎭 なりきりおすすめセット (Roleplay Recommended Sets)") === 0 || tj1.indexOf("なりきりおすすめセット (Roleplay Recommended Sets)") === 0) { filtered.push(g1); continue; }
          if (tj1.indexOf("🔞 なりきりおすすめセット (Adult Roleplay Recommended Sets)") === 0) { filtered.push(g1); continue; }
          // Hide scattered legacy roleplay groups once the parent exists
          if (hasRoleplayParent && (tj1.indexOf("🎭 なりきりおすすめセット｜") === 0 || tj1.indexOf("なりきりおすすめセット｜") === 0 || tj1.indexOf("なりきりおすすめセット |") === 0)) continue;
          // Hide standalone compositions group (it is referenced under the parent)
          if (hasRoleplayParent && tj1.indexOf("📐 おすすめ構図") === 0) continue;
          if (hasAdultRoleplayParent && (tj1.indexOf("🔞 なりきりおすすめセット｜") === 0 || tj1.indexOf("なりきりおすすめセット｜") === 0)) continue;
          if (hasAdultRoleplayParent && tj1.indexOf("📐 おすすめ構図") === 0) continue;
          filtered.push(g1);
        }
        groupsRaw = filtered;
      }

      // Reorder key shelves: roleplay -> linked expression support -> expression packs.
      try {
        function titleOf(g) {
          return safeText((g && (g.title_ja || g.titleJa || g.title)) || "");
        }
        function takeByPrefix(arr, prefixes) {
          var taken = [];
          var rest = [];
          for (var ti = 0; ti < arr.length; ti++) {
            var tg = arr[ti];
            var tt = titleOf(tg);
            var hit = false;
            for (var pj = 0; pj < prefixes.length; pj++) {
              if (tt.indexOf(prefixes[pj]) === 0) { hit = true; break; }
            }
            if (hit) taken.push(tg); else rest.push(tg);
          }
          return { taken: taken, rest: rest };
        }

        var stage0 = groupsRaw.slice();

        var normalRole = takeByPrefix(stage0, [
          "🎭 なりきりおすすめセット (Roleplay Recommended Sets)",
          "なりきりおすすめセット (Roleplay Recommended Sets)"
        ]);
        var adultRole = takeByPrefix(normalRole.rest, [
          "🔞 なりきりおすすめセット (Adult Roleplay Recommended Sets)"
        ]);
        var normalExpr = takeByPrefix(adultRole.rest, [
          "🎭 表情演出プリセット (Expression FX Packs)",
          "表情演出プリセット"
        ]);
        var normalSupport = takeByPrefix(normalExpr.rest, [
          "🎭 なりきり連動・表情補助 (Roleplay-linked Expression Support)",
          "なりきり連動・表情補助 (Roleplay-linked Expression Support)"
        ]);
        var adultExpr = takeByPrefix(normalSupport.rest, [
          "🔞 R-18 表情演出プリセット (Adult Expression FX Packs)"
        ]);
        var adultSupport = takeByPrefix(adultExpr.rest, [
          "🔞 なりきり連動・表情補助 (Adult Roleplay-linked Expression Support)"
        ]);

        groupsRaw = []
          .concat(normalRole.taken)
          .concat(adultRole.taken)
          .concat(normalExpr.taken)
          .concat(normalSupport.taken)
          .concat(adultExpr.taken)
          .concat(adultSupport.taken)
          .concat(adultSupport.rest.slice());
      } catch (eReorder) {}


      if (!groupsRaw || groupsRaw.length === 0) {
        mount.appendChild(
          createInfoBox("Preset Packs のデータが見つからない。builder_data.preset_packs.js が読み込まれているか、window.PRESET_PACKS_DB を確認してね。")
        );
        return;
      }

      var root = document.createElement("div");
      root.className = "preset-packs-container";
      root.style.cssText = "margin-top:8px;";

      for (var i = 0; i < groupsRaw.length; i++) {
        root.appendChild(buildGroupUI(normalizeGroup(groupsRaw[i])));
      }

      root.addEventListener("change", function (ev) {
        var target = ev && ev.target;
        if (!target || !target.className || String(target.className).indexOf("preset-pack-cb") === -1) return;
        applyCheckboxVisual(target);
        var collectionId = target.getAttribute("data-collection-id") || "";
        var role = target.getAttribute("data-collection-role") || "";
        if (collectionId && role === "complete_set") {
          applyCompleteSetSelection(root, target, false);
          return;
        }
        if (collectionId && role === "quality_set") {
          applyQualitySetSelection(root, target, false);
          return;
        }
        if (collectionId && isExclusivePairRole(role) && target.checked) {
          clearCollectionRoles(root, collectionId, [role], target.getAttribute("data-pack-id"));
          openAncestorDetails(target);
        }
        if (typeof window.generateOutput === "function") window.generateOutput();
      });

      mount.appendChild(root);
    },

    getTags: function () {
      var tags = [];
      var checked = document.querySelectorAll("#list-preset_packs input.preset-pack-cb:checked");
      for (var i = 0; i < checked.length; i++) {
        var cb = checked[i];
        var raw = cb.getAttribute("data-tags") || "[]";
        try {
          var arr = JSON.parse(raw);
          if (arr && Object.prototype.toString.call(arr) === "[object Array]") {
            for (var j = 0; j < arr.length; j++) tags.push(arr[j]);
          }
        } catch (e) {
          if (raw) tags.push(raw);
        }
      }
      return tags;
    }
  };

  function tryRegister() {
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      return true;
    }
    return false;
  }

  if (!tryRegister()) {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (tryRegister()) clearInterval(timer);
      if (tries > 60) clearInterval(timer);
    }, 50);
  }
})();
