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
    return {
      id: id,
      inputId: safeText(it.input_id || it.inputId || ""),
      titleJa: titleJa,
      titleEn: titleEn,
      subJa: subJa,
      subEn: subEn,
      tags: tags,
      type: safeText(it.type || ""),
      leftLabel: safeText(it.leftLabel || ""),
      rightLabel: safeText(it.rightLabel || ""),
      children: childNodes,
      collectionId: safeText(it.collection_id || it.collectionId || ""),
      collectionRole: safeText(it.collection_role || it.collectionRole || ""),
      linkedIds: ensureArray(it.linked_ids || it.linkedIds || []),
      controllerKind: safeText(it.controller_kind || it.controllerKind || ""),
      outputChannel: safeText(it.output_channel || it.outputChannel || "positive"),
      promptIntent: safeText(it.prompt_intent || it.promptIntent || "positive-normal"),
      previewEnabled: !!(it.preview || it.preview_enabled || it.previewEnabled),
      compatibilityOnly: !!(it.compatibility_only || it.compatibilityOnly || it.legacy_compatibility_only)
    };
  }

  function applyPromptMetadata(cb, item) {
    if (!cb || !item) return;
    if (item.inputId) cb.id = item.inputId;
    var channel = item.outputChannel === "negative" ? "negative" : "positive";
    var intent = item.promptIntent || (channel === "negative" ? "negative-only" : "positive-normal");
    var knownStr = "";
    try { knownStr = ensureArray(item.tags).join(", "); } catch (eKnown) {}
    cb.setAttribute("data-val", knownStr);
    cb.setAttribute("data-en", knownStr);
    cb.setAttribute("data-ja", item.titleJa || "");
    cb.setAttribute("data-label", item.titleJa || "");
    cb.setAttribute("data-output-channel", channel);
    cb.setAttribute("data-prompt-intent", intent);
    if (item.previewEnabled) cb.setAttribute("data-shima-pack-preview-enabled", "1");
  }

  function isCompatibilityOnlyNode(node) {
    return !!(node && (node.compatibility_only || node.compatibilityOnly || node.legacy_compatibility_only));
  }

  function getCompatibilityNodeChildren(node) {
    if (!node || typeof node !== "object") return null;
    if (node.children && Object.prototype.toString.call(node.children) === "[object Array]") return node.children;
    if (node.items && Object.prototype.toString.call(node.items) === "[object Array]") return node.items;
    if (node.packs && Object.prototype.toString.call(node.packs) === "[object Array]") return node.packs;
    return null;
  }

  function createCompatibilityOnlySubGroupUI(sub) {
    // Old Fusion branches are intentionally absent from the visible shelf, but their
    // leaves must remain discoverable by packId / data-en / linked_ids / history restore.
    var holder = document.createElement("div");
    holder.className = "preset-pack-compatibility-only";
    holder.setAttribute("data-preset-pack-compatibility-only", "true");
    holder.setAttribute("aria-hidden", "true");
    holder.style.cssText = "display:none !important;";

    function appendLeaf(rawLeaf) {
      var item = normalizeItem(rawLeaf || {});
      if (!item.id || item.type === "pair_header") return;

      var label = document.createElement("label");
      label.className = "preset-pack-compatibility-item";

      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "preset-pack-cb preset-pack-compat-cb";
      cb.tabIndex = -1;
      cb.setAttribute("aria-hidden", "true");
      cb.setAttribute("data-pack-id", item.id);
      cb.setAttribute("data-collection-id", item.collectionId || "");
      cb.setAttribute("data-collection-role", item.collectionRole || "");
      cb.setAttribute("data-ja", item.titleJa || "");
      cb.setAttribute("data-compatibility-only", "true");
      try { cb.setAttribute("data-linked-ids", JSON.stringify(item.linkedIds || [])); } catch (eLinked) { cb.setAttribute("data-linked-ids", "[]"); }
      try { cb.setAttribute("data-tags", JSON.stringify(item.tags || [])); } catch (eTags) { cb.setAttribute("data-tags", "[]"); }
      try {
        var knownStr = ensureArray(item.tags).join(", ");
        cb.setAttribute("data-val", knownStr);
        cb.setAttribute("data-en", knownStr);
      } catch (eKnown) {
        cb.setAttribute("data-val", "");
        cb.setAttribute("data-en", "");
      }

      label.appendChild(cb);
      label.appendChild(document.createTextNode(
        item.titleJa +
        (item.titleEn ? " (" + item.titleEn + ")" : "") +
        ((item.subJa || item.subEn) ? " " + (item.subJa || item.subEn) : "")
      ));
      holder.appendChild(label);
    }

    function walk(node) {
      var children = getCompatibilityNodeChildren(node);
      if (children) {
        for (var i = 0; i < children.length; i++) walk(children[i]);
        return;
      }
      appendLeaf(node);
    }

    walk(sub);
    return holder;
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


  function applyKrakenKrakententaclesPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      var krakenVals = {
        "mythic_sea_complete_kraken_core": "single humanoid girl, clearly human face, human torso and limbs, Kraken traits integrated into her own body, krakententacles attached along hair back waist and hips, layered body-attached krakententacles spreading from her silhouette, fin-membrane accents on arms and thighs, subtle ring-pattern cephalopod markings, glowing abyss-cyan eyes, restrained trench glow hugging her silhouette, single merged character, deep-sea cephalopod features attached to her body rather than appearing as a second creature",
        "mythic_sea_complete_kraken_safe_quality": "single humanoid girl, clearly human face, human torso and limbs, Kraken traits integrated into her own body, krakententacles attached along hair back waist and hips, layered body-attached krakententacles spreading from her silhouette, fin-membrane accents on arms and thighs, subtle ring-pattern cephalopod markings, glowing abyss-cyan eyes, restrained trench glow hugging her silhouette, single merged character, deep-sea cephalopod features attached to her body rather than appearing as a second creature",
        "mythic_sea_complete_kraken_safe_quality_2000": "kraken beastkin, single humanoid girl only, humanoid girl with a clearly human face, human body remains primary, krakententacles integrated into hair back waist hips and thighs, body-attached krakententacles only, membrane and scale accents on shoulders waist hips and thighs, glowing abyss-cyan eyes, soft close-body glow only, no separate beast behind her, no beast silhouette behind her, no beast occupying the background, no full abyssal lower-body replacement",
        "mythic_sea_complete_kraken_mythic_full": "single humanoid girl, clearly human face, human torso and limbs, Kraken traits integrated into her own body, large body-attached krakententacles attached along hair back waist hips and thighs, layered krakententacles spreading from her silhouette, fin-membrane accents on arms and thighs, subtle ring-pattern cephalopod markings, glowing abyss-cyan eyes, restrained trench glow hugging her silhouette, single merged character, deep-sea cephalopod features attached to her body rather than appearing as a second creature",
        "mythic_sea_roleplay_kraken": "single humanoid girl, clearly human face, human torso and limbs, Kraken traits integrated into her own body, krakententacles attached along hair back waist and hips, body-attached krakententacles framing her silhouette, fin-membrane accents on arms and thighs, subtle ring-pattern cephalopod markings, glowing abyss-cyan eyes, restrained trench glow hugging her silhouette, single merged character, deep-sea cephalopod features attached to her body rather than appearing as a second creature",
        "mythic_sea_role_mutation_kraken": "krakententacles integrated into hair back waist and silhouette, smaller body-attached krakententacles along hips and thighs, fin-membrane accents on arms and hips, subtle ring-pattern cephalopod markings, glowing abyss-cyan eyes, humanoid torso remains primary, human legs remain visible",
        "mythic_sea_preserve_kraken": "single humanoid character focus, humanoid proportions, human-like torso, human arms and legs remain intact, human facial structure remains clear, character-first design, krakententacles and abyssal cephalopod traits layered onto a humanoid body, no full background abyss beast body, cephalopod traits balanced without full monster transformation",
        "mythic_sea_suppress_kraken": "no separate abyss beast behind her, no cephalopod creature occupying the background, no spectral abyss monster aura shaped like a beast, no companion kraken, krakententacles remain attached to the humanoid girl, body-attached krakententacles only",
        "mythic_sea_divine_kraken": "abyssal cephalopod sanctity, krakententacles halo arcs close to the body, restrained trench majesty, disciplined deep-sea pressure, mythic submerged presence",
        "mythic_sea_weather_kraken": "trench current arcs, abyssal drift haze, restrained ink-tide tension, submerged pressure atmosphere, krakententacles flow arcs close to the body",
        "mythic_sea_hybrid_kraken": "single humanoid abyssal-cephalopod girl only, clearly human face, human torso remains primary, human legs remain visible, stronger krakententacles integrated across hair back waist shoulders and hips, body-attached krakententacles spreading from the silhouette, clearer fin-membrane accents, denser ring-pattern markings, stronger trench aura close to the silhouette, single merged character",
        "mythic_sea_hybrid_mutation_kraken": "stronger krakententacles growth integrated across hair back waist shoulders hips and thighs, body-attached krakententacles wrapping the silhouette, more membrane accents, clearer ring-pattern cephalopod markings, humanoid torso remains clear, human legs remain visible",
        "mythic_sea_full_kraken": "deep Kraken embodiment integrated into one body, single merged character, clearly human face retained, stronger body-attached krakententacles anatomy, heavier membranes and ring-pattern cephalopod structure layered into the body, no separate kraken companion",
        "mythic_sea_full_mutation_kraken": "large integrated krakententacles growth, body-attached krakententacles fanning from hair back waist hips and thighs, denser trench membranes, stronger ring-pattern cephalopod anatomy, near-complete cephalopod body integrated into a single form",
        "mythic_sea_pair_kraken": "(male kraken abyss lord attire), humanoid boy with a clearly human face (no animal muzzle), (female kraken deep-sea empress dress), (paired kraken duo), (mythic male-female kraken pair), (standing side by side), (body-attached krakententacles aura), (sunken ruin stage), (ink mist), (wet glossy skin sheen), (cephalopod silhouette), (abyssal lighting), (mythic tide presence)",
        "mythic_sea_pair_male_kraken": "humanoid boy with a clearly human face (no animal muzzle), male kraken abyss lord presence, wet deep-sea regalia, body-attached krakententacles authority, drowned sea king glow",
        "mythic_sea_pair_female_kraken": "humanoid girl with a clearly human face (no animal muzzle), female kraken abyss empress presence, deep-sea queen aura, body-attached krakententacles hair-back silhouette, glossy wet skin sheen, sunken ruin elegance",
        "mythic_sea_pair_relation_kraken": "mythic male-female kraken pair, abyssal sea duo, balanced pair composition, mirrored krakententacles aura, standing side by side, slight mutual gaze",
        "mythic_sea_base_kraken": "krakententacles integrated into hair back and waist, body-attached krakententacles along hips and thighs, membrane accents on arms and hips, soft abyss-cyan glow close to the body, non-figurative aura only",
        "mythic_sea_custom_kraken": "inkless abyss shimmer, restrained trench bloom, wet cephalopod reflections close to the silhouette, deep-sea particle drift, krakententacles flow arcs close to the body",
        "mythic_sea_setting_kraken": "ancient abyssal patience, trench-born calm held inside a humanoid form, disciplined hunter pressure, hidden deep-sea majesty, restrained krakententacles presence",
        "mythic_sea_quality_kraken_safe_a": "wet membrane sheen, abyss-cyan reflections, clean cephalopod highlights on body-attached krakententacles",
        "mythic_sea_quality_kraken_safe_b": "close abyss-cyan sheen on krakententacles, controlled cool trench highlights, non-figurative glow only",
        "mythic_sea_quality_kraken_mythic_a": "trench pressure bloom around krakententacles, abyssal haze, restrained deep-sea dread atmosphere",
        "mythic_sea_quality_kraken_mythic_b": "abyssal myth flash, wet dark shimmer, krakententacles aura glow"
      };
      function patchNode(node) {
        if (!node || typeof node !== "object") return;
        var id = safeText(node.id || "");
        if (id && Object.prototype.hasOwnProperty.call(krakenVals, id)) {
          node.val = krakenVals[id];
          if (node.prompt !== undefined) node.prompt = krakenVals[id];
          if (node.values !== undefined) node.values = [krakenVals[id]];
          if (node.tags !== undefined) node.tags = [krakenVals[id]];
        }
        var lists = [];
        if (isArray(node.children)) lists.push(node.children);
        if (isArray(node.items)) lists.push(node.items);
        if (isArray(node.packs)) lists.push(node.packs);
        if (isArray(node.groups)) lists.push(node.groups);
        for (var li = 0; li < lists.length; li++) {
          for (var ni = 0; ni < lists[li].length; ni++) patchNode(lists[li][ni]);
        }
      }
      if (isArray(db)) {
        for (var ai = 0; ai < db.length; ai++) patchNode(db[ai]);
      } else if (typeof db === "object") {
        var keys = Object.keys(db);
        for (var ki = 0; ki < keys.length; ki++) {
          var v = db[keys[ki]];
          if (isArray(v)) {
            for (var vi = 0; vi < v.length; vi++) patchNode(v[vi]);
          } else {
            patchNode(v);
          }
        }
      }
      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }



  function applyFairytaleFolktaleRoleplayPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) { if (titleOf(list[i]) === title) return list[i]; }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;

      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot) {
        roleplayRoot = { title_ja: "🎭 なりきり", title_en: "Roleplay", children: [] };
        rootArr.push(roleplayRoot);
      }
      if (!isArray(roleplayRoot.children)) roleplayRoot.children = [];

      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) return;
      }

      var fairytaleRoot = {"title_ja":"📚 童話・昔話なりきり特化コレクション","title_en":"Fairy Tales & Folktales Roleplay Special Collection","collection_id":"fairytale_folktale_roleplay_collection","children":[{"title_ja":"🧺 西洋童話","title_en":"Western Fairy Tales","children":[{"title_ja":"完成セット","title_en":"Complete Sets","children":[{"title_ja":"赤ずきん 完成セット群","title_en":"Little Red Riding Hood Complete Set Group","children":[{"id":"fairytale_red_riding_hood_core","label":"赤ずきん Core Set / Little Red Riding Hood Core Set","val":"Little Red Riding Hood inspired girl, red hooded cloak, wicker basket, forest path, watchful wolf motif, storybook fairytale tension, single human character focus","desc":"完成セット：赤ずきんの物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_red_riding_hood_base","fairytale_red_riding_hood_setting"]},{"id":"fairytale_red_riding_hood_safe_quality","label":"赤ずきん Safe Quality Set / Little Red Riding Hood Safe Quality Set","val":"Little Red Riding Hood inspired girl, red hooded cloak, wicker basket, forest path, watchful wolf motif, clean storybook illustration, soft cinematic forest light, detailed fabric folds, single human character focus","desc":"完成セット：赤ずきんを崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_red_riding_hood_base","fairytale_red_riding_hood_custom","fairytale_red_riding_hood_setting","fairytale_quality_storybook_safe"]},{"id":"fairytale_red_riding_hood_limit_2000","label":"赤ずきん 2000 Limit Set / Little Red Riding Hood 2000 Limit Set","val":"Little Red Riding Hood inspired girl, red hooded cloak, wicker basket, forest path, wolf motif, storybook mood, single human focus","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_red_riding_hood_base"]},{"id":"fairytale_red_riding_hood_full","label":"赤ずきん Full Set / Little Red Riding Hood Full Set","val":"Little Red Riding Hood inspired girl, red hooded cloak over a simple dress, wicker basket with bread and flowers, ribbon accents, forest path between tall dark trees, distant wolf shadow as a motif, cautious gaze, fairytale suspense, storybook illustration mood, single human character focus","desc":"完成セット：赤ずきんの衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_red_riding_hood_base","fairytale_red_riding_hood_custom","fairytale_red_riding_hood_setting","fairytale_quality_storybook_full"]}]},{"title_ja":"白雪姫 完成セット群","title_en":"Snow White Complete Set Group","children":[{"id":"fairytale_snow_white_core","label":"白雪姫 Core Set / Snow White Core Set","val":"Snow White inspired princess, storybook princess dress, enchanted red apple, dark fairytale forest, mirror-like magic light, gentle ominous fairytale mood, single human character focus","desc":"完成セット：白雪姫の物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_snow_white_base","fairytale_snow_white_setting"]},{"id":"fairytale_snow_white_safe_quality","label":"白雪姫 Safe Quality Set / Snow White Safe Quality Set","val":"Snow White inspired princess, storybook princess dress, enchanted red apple, dark fairytale forest, mirror-like magic light, clean fairytale illustration, delicate dress detail, soft rimlight, single human character focus","desc":"完成セット：白雪姫を崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_snow_white_base","fairytale_snow_white_custom","fairytale_snow_white_setting","fairytale_quality_storybook_safe"]},{"id":"fairytale_snow_white_limit_2000","label":"白雪姫 2000 Limit Set / Snow White 2000 Limit Set","val":"Snow White inspired princess, storybook dress, enchanted red apple, dark forest, mirror magic, fairytale mood, single human focus","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_snow_white_base"]},{"id":"fairytale_snow_white_full","label":"白雪姫 Full Set / Snow White Full Set","val":"Snow White inspired princess, blue bodice and yellow skirt storybook dress with red accents, enchanted red apple in hand, small birds near the shoulder, dark forest clearing, old cottage and distant castle mood, mirror-like magical glimmer, innocent but ominous fairytale atmosphere, single human character focus","desc":"完成セット：白雪姫の衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_snow_white_base","fairytale_snow_white_custom","fairytale_snow_white_setting","fairytale_quality_storybook_full"]}]},{"title_ja":"シンデレラ 完成セット群","title_en":"Cinderella Complete Set Group","children":[{"id":"fairytale_cinderella_core","label":"シンデレラ Core Set / Cinderella Core Set","val":"Cinderella inspired girl, pale blue ball gown, glass slipper, midnight clock, royal staircase, magical sparkle dust, elegant fairytale ball mood, single human character focus","desc":"完成セット：シンデレラの物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_cinderella_base","fairytale_cinderella_setting"]},{"id":"fairytale_cinderella_safe_quality","label":"シンデレラ Safe Quality Set / Cinderella Safe Quality Set","val":"Cinderella inspired girl, pale blue ball gown, glass slipper, midnight clock, royal staircase, clean magical storybook illustration, sparkling fabric highlights, soft ballroom lighting, single human character focus","desc":"完成セット：シンデレラを崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_cinderella_base","fairytale_cinderella_custom","fairytale_cinderella_setting","fairytale_quality_storybook_safe"]},{"id":"fairytale_cinderella_limit_2000","label":"シンデレラ 2000 Limit Set / Cinderella 2000 Limit Set","val":"Cinderella inspired girl, blue ball gown, glass slipper, midnight clock, royal staircase, magical sparkles, single human focus","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_cinderella_base"]},{"id":"fairytale_cinderella_full","label":"シンデレラ Full Set / Cinderella Full Set","val":"Cinderella inspired girl, pale blue ball gown with translucent layers, glass slipper held or visible, midnight clock glow, royal staircase, pumpkin carriage motif in the distance, magical sparkle dust swirling around the dress hem, elegant ballroom fairytale mood, single human character focus","desc":"完成セット：シンデレラの衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_cinderella_base","fairytale_cinderella_custom","fairytale_cinderella_setting","fairytale_quality_storybook_full"]}]},{"title_ja":"人魚姫 完成セット群","title_en":"Little Mermaid Complete Set Group","children":[{"id":"fairytale_little_mermaid_core","label":"人魚姫 Core Set / Little Mermaid Core Set","val":"Little Mermaid inspired mermaid girl, graceful mermaid tail, sea foam, coral ornaments, underwater light, wistful fairytale sea mood, single mermaid character focus","desc":"完成セット：人魚姫の物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_little_mermaid_base","fairytale_little_mermaid_setting"]},{"id":"fairytale_little_mermaid_safe_quality","label":"人魚姫 Safe Quality Set / Little Mermaid Safe Quality Set","val":"Little Mermaid inspired mermaid girl, graceful mermaid tail, sea foam, coral ornaments, underwater light rays, clean aquatic storybook illustration, shimmering scales, single mermaid character focus","desc":"完成セット：人魚姫を崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_little_mermaid_base","fairytale_little_mermaid_custom","fairytale_little_mermaid_setting","fairytale_quality_storybook_safe"]},{"id":"fairytale_little_mermaid_limit_2000","label":"人魚姫 2000 Limit Set / Little Mermaid 2000 Limit Set","val":"Little Mermaid inspired mermaid girl, mermaid tail, sea foam, coral ornaments, underwater light, wistful fairytale mood","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_little_mermaid_base"]},{"id":"fairytale_little_mermaid_full","label":"人魚姫 Full Set / Little Mermaid Full Set","val":"Little Mermaid inspired mermaid girl, graceful mermaid tail with shimmering scales, coral and shell ornaments, floating hair in water, sea foam and bubbles, underwater palace glow, moonlit surface above, wistful fairytale romance mood, single mermaid character focus","desc":"完成セット：人魚姫の衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_little_mermaid_base","fairytale_little_mermaid_custom","fairytale_little_mermaid_setting","fairytale_quality_storybook_full"]}]}]},{"title_ja":"ベース","title_en":"Base","children":[{"id":"fairytale_red_riding_hood_base","label":"赤ずきん：赤いフードの森歩き / Little Red Riding Hood Base","val":"red hooded cloak, simple storybook dress, wicker basket carried at the arm, ribbon accents, fairytale heroine silhouette","desc":"ベース：赤ずきん","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"},{"id":"fairytale_snow_white_base","label":"白雪姫：王女ドレスと林檎 / Snow White Base","val":"storybook princess dress with blue bodice yellow skirt and red accents, enchanted apple held near the chest, elegant fairytale posture","desc":"ベース：白雪姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"},{"id":"fairytale_cinderella_base","label":"シンデレラ：舞踏会ドレスとガラスの靴 / Cinderella Base","val":"pale blue ball gown, translucent dress layers, glass slipper motif, elegant fairytale heroine posture","desc":"ベース：シンデレラ","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"},{"id":"fairytale_little_mermaid_base","label":"人魚姫：人魚尾と海泡 / Little Mermaid Base","val":"graceful mermaid tail, shimmering scale texture, shell and coral ornaments, floating underwater hair","desc":"ベース：人魚姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"}]},{"title_ja":"カスタマイズ","title_en":"Customize","children":[{"id":"fairytale_red_riding_hood_custom","label":"赤ずきん：籠・狼影・赤いリボン / Little Red Riding Hood Custom","val":"basket with bread and flowers, small red ribbon details, watchful wolf silhouette motif, fallen leaves, fairytale warning mood","desc":"カスタマイズ：赤ずきん","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"},{"id":"fairytale_snow_white_custom","label":"白雪姫：魔法の鏡・小鳥・林檎光 / Snow White Custom","val":"glowing red apple, tiny forest birds, mirror-like sparkles, gentle royal ribbon accents, ominous magic shimmer","desc":"カスタマイズ：白雪姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"},{"id":"fairytale_cinderella_custom","label":"シンデレラ：時計・魔法粒子・階段 / Cinderella Custom","val":"glass slipper sparkle, midnight clock face, pumpkin carriage motif, soft magic dust around the dress hem","desc":"カスタマイズ：シンデレラ","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"},{"id":"fairytale_little_mermaid_custom","label":"人魚姫：貝飾り・泡・珊瑚光 / Little Mermaid Custom","val":"sea foam, small bubbles, pearl highlights, coral jewelry, moonlit surface shimmer","desc":"カスタマイズ：人魚姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"}]},{"title_ja":"設定","title_en":"Setting","children":[{"id":"fairytale_red_riding_hood_setting","label":"赤ずきん：暗い森の小道 / Little Red Riding Hood Setting","val":"deep forest path, tall trees, dappled light, grandmother cottage direction implied, quiet fairytale tension","desc":"設定：赤ずきん","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"},{"id":"fairytale_snow_white_setting","label":"白雪姫：森の小屋と古城気配 / Snow White Setting","val":"dark fairytale forest clearing, old woodland cottage mood, distant castle silhouette, soft but uneasy fairytale light","desc":"設定：白雪姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"},{"id":"fairytale_cinderella_setting","label":"シンデレラ：真夜中の宮殿階段 / Cinderella Setting","val":"royal palace staircase at midnight, ballroom glow, moonlit windows, elegant fairytale transformation mood","desc":"設定：シンデレラ","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"},{"id":"fairytale_little_mermaid_setting","label":"人魚姫：海中宮殿と波間 / Little Mermaid Setting","val":"underwater palace glow, coral reef, blue water light rays, sea surface visible above, wistful ocean fairytale mood","desc":"設定：人魚姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"}]}]},{"title_ja":"🌙 日本昔話","title_en":"Japanese Folktales","children":[{"title_ja":"完成セット","title_en":"Complete Sets","children":[{"title_ja":"桃太郎 完成セット群","title_en":"Momotaro Complete Set Group","children":[{"id":"fairytale_momotaro_core","label":"桃太郎 Core Set / Momotaro Core Set","val":"Momotaro inspired Japanese folktale hero, peach emblem, brave travel outfit, banner, kibidango pouch, oni island quest mood, single human hero focus","desc":"完成セット：桃太郎の物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_momotaro_base","fairytale_momotaro_setting"]},{"id":"fairytale_momotaro_safe_quality","label":"桃太郎 Safe Quality Set / Momotaro Safe Quality Set","val":"Momotaro inspired Japanese folktale hero, peach emblem, brave travel outfit, banner, kibidango pouch, clean folktale illustration, crisp cloth detail, heroic warm light, single human hero focus","desc":"完成セット：桃太郎を崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_momotaro_base","fairytale_momotaro_custom","fairytale_momotaro_setting","fairytale_quality_mukashi_safe"]},{"id":"fairytale_momotaro_limit_2000","label":"桃太郎 2000 Limit Set / Momotaro 2000 Limit Set","val":"Momotaro inspired folktale hero, peach emblem, travel outfit, banner, kibidango pouch, oni island quest, single human focus","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_momotaro_base"]},{"id":"fairytale_momotaro_full","label":"桃太郎 Full Set / Momotaro Full Set","val":"Momotaro inspired Japanese folktale hero, peach emblem on the outfit, hachimaki headband, brave travel kimono armor mix, banner carried behind, kibidango pouch at the waist, distant oni island, sunrise journey road, heroic old folktale adventure mood, single human hero focus","desc":"完成セット：桃太郎の衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_momotaro_base","fairytale_momotaro_custom","fairytale_momotaro_setting","fairytale_quality_mukashi_full"]}]},{"title_ja":"かぐや姫 完成セット群","title_en":"Princess Kaguya Complete Set Group","children":[{"id":"fairytale_kaguya_hime_core","label":"かぐや姫 Core Set / Princess Kaguya Core Set","val":"Princess Kaguya inspired noble girl, layered juunihitoe kimono, glowing bamboo grove, full moon, moonlit farewell, Heian court elegance, single human character focus","desc":"完成セット：かぐや姫の物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_kaguya_hime_base","fairytale_kaguya_hime_setting"]},{"id":"fairytale_kaguya_hime_safe_quality","label":"かぐや姫 Safe Quality Set / Princess Kaguya Safe Quality Set","val":"Princess Kaguya inspired noble girl, layered juunihitoe kimono, glowing bamboo grove, full moon, clean elegant folktale illustration, silk texture, soft lunar rimlight, single human character focus","desc":"完成セット：かぐや姫を崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_kaguya_hime_base","fairytale_kaguya_hime_custom","fairytale_kaguya_hime_setting","fairytale_quality_mukashi_safe"]},{"id":"fairytale_kaguya_hime_limit_2000","label":"かぐや姫 2000 Limit Set / Princess Kaguya 2000 Limit Set","val":"Princess Kaguya inspired noble girl, juunihitoe kimono, glowing bamboo, full moon, moonlit farewell, Heian elegance","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_kaguya_hime_base"]},{"id":"fairytale_kaguya_hime_full","label":"かぐや姫 Full Set / Princess Kaguya Full Set","val":"Princess Kaguya inspired noble girl, layered juunihitoe kimono with flowing sleeves, bamboo light rising around her, full moon behind, celestial robe motif, Heian court elegance, quiet farewell scene, silver lunar glow, Japanese folktale grace, single human character focus","desc":"完成セット：かぐや姫の衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_kaguya_hime_base","fairytale_kaguya_hime_custom","fairytale_kaguya_hime_setting","fairytale_quality_mukashi_full"]}]},{"title_ja":"浦島太郎 完成セット群","title_en":"Urashima Taro Complete Set Group","children":[{"id":"fairytale_urashima_taro_core","label":"浦島太郎 Core Set / Urashima Taro Core Set","val":"Urashima Taro inspired Japanese folktale traveler, simple fishing robe, turtle guide motif, jeweled tamatebako box, underwater Ryugu palace, sea-current wonder mood, single human character focus","desc":"完成セット：浦島太郎の物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_urashima_taro_base","fairytale_urashima_taro_setting"]},{"id":"fairytale_urashima_taro_safe_quality","label":"浦島太郎 Safe Quality Set / Urashima Taro Safe Quality Set","val":"Urashima Taro inspired Japanese folktale traveler, simple fishing robe, turtle guide motif, jeweled tamatebako box, underwater Ryugu palace, clean aquatic folktale illustration, soft sea light, single human character focus","desc":"完成セット：浦島太郎を崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_urashima_taro_base","fairytale_urashima_taro_custom","fairytale_urashima_taro_setting","fairytale_quality_mukashi_safe"]},{"id":"fairytale_urashima_taro_limit_2000","label":"浦島太郎 2000 Limit Set / Urashima Taro 2000 Limit Set","val":"Urashima Taro inspired traveler, fishing robe, turtle guide motif, tamatebako box, Ryugu palace, underwater folktale mood","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_urashima_taro_base"]},{"id":"fairytale_urashima_taro_full","label":"浦島太郎 Full Set / Urashima Taro Full Set","val":"Urashima Taro inspired Japanese folktale traveler, simple fishing robe and sash, turtle guide motif beside the path, jeweled tamatebako box held carefully, underwater Ryugu palace gates, flowing sea currents, lantern-like coral light, mysterious time-passage mood, single human character focus","desc":"完成セット：浦島太郎の衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_urashima_taro_base","fairytale_urashima_taro_custom","fairytale_urashima_taro_setting","fairytale_quality_mukashi_full"]}]},{"title_ja":"鶴の恩返し 完成セット群","title_en":"The Crane Wife Complete Set Group","children":[{"id":"fairytale_crane_wife_core","label":"鶴の恩返し Core Set / The Crane Wife Core Set","val":"Crane Wife inspired woman, white crane-feather kimono, weaving loom, paper screen room, soft snow outside, secret graceful melancholy, single human character focus","desc":"完成セット：鶴の恩返しの物語核を軽量に立てる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_crane_wife_base","fairytale_crane_wife_setting"]},{"id":"fairytale_crane_wife_safe_quality","label":"鶴の恩返し Safe Quality Set / The Crane Wife Safe Quality Set","val":"Crane Wife inspired woman, white crane-feather kimono, weaving loom, paper screen room, soft snow outside, clean quiet folktale illustration, feather texture, gentle winter light, single human character focus","desc":"完成セット：鶴の恩返しを崩さず画質と光を安全補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_crane_wife_base","fairytale_crane_wife_custom","fairytale_crane_wife_setting","fairytale_quality_mukashi_safe"]},{"id":"fairytale_crane_wife_limit_2000","label":"鶴の恩返し 2000 Limit Set / The Crane Wife 2000 Limit Set","val":"Crane Wife inspired woman, white crane-feather kimono, weaving loom, paper screen room, falling snow, graceful melancholy","desc":"完成セット：2000字制限向けの短縮実戦版","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_crane_wife_base"]},{"id":"fairytale_crane_wife_full","label":"鶴の恩返し Full Set / The Crane Wife Full Set","val":"Crane Wife inspired woman, white crane-feather kimono with subtle red accents, long sleeves like folded wings, weaving loom beside her, paper screen room, falling snow outside, a few white feathers drifting in the air, secret gratitude and melancholy, Japanese folktale mood, single human character focus","desc":"完成セット：鶴の恩返しの衣装・小物・場面まで厚めに入れる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"complete_set","linked_ids":["fairytale_crane_wife_base","fairytale_crane_wife_custom","fairytale_crane_wife_setting","fairytale_quality_mukashi_full"]}]}]},{"title_ja":"ベース","title_en":"Base","children":[{"id":"fairytale_momotaro_base","label":"桃太郎：桃紋の和装ヒーロー / Momotaro Base","val":"Japanese folktale travel outfit, peach emblem, hachimaki headband, light armor-like kimono layers, heroic silhouette","desc":"ベース：桃太郎","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"},{"id":"fairytale_kaguya_hime_base","label":"かぐや姫：十二単と月光 / Princess Kaguya Base","val":"layered juunihitoe kimono, long flowing sleeves, elegant Heian court silhouette, moon princess grace","desc":"ベース：かぐや姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"},{"id":"fairytale_urashima_taro_base","label":"浦島太郎：旅人和装と玉手箱 / Urashima Taro Base","val":"simple fishing robe, travel sash, humble folktale traveler silhouette, tamatebako box held carefully","desc":"ベース：浦島太郎","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"},{"id":"fairytale_crane_wife_base","label":"鶴の恩返し：白鶴羽の着物 / The Crane Wife Base","val":"white crane-feather kimono, long sleeves like folded wings, quiet graceful posture, subtle red accent cords","desc":"ベース：鶴の恩返し","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"base"}]},{"title_ja":"カスタマイズ","title_en":"Customize","children":[{"id":"fairytale_momotaro_custom","label":"桃太郎：旗・きびだんご・鬼退治 / Momotaro Custom","val":"kibidango pouch, war banner, peach crest charm, oni island quest symbol, brave journey props","desc":"カスタマイズ：桃太郎","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"},{"id":"fairytale_kaguya_hime_custom","label":"かぐや姫：竹光・月の羽衣・雅 / Princess Kaguya Custom","val":"glowing bamboo stalks, celestial robe motif, silver moon particles, delicate court fan, farewell gesture","desc":"カスタマイズ：かぐや姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"},{"id":"fairytale_urashima_taro_custom","label":"浦島太郎：亀・玉手箱・海流 / Urashima Taro Custom","val":"turtle guide motif, jeweled tamatebako box, sea-current ribbons, coral lantern glows, time-passage shimmer","desc":"カスタマイズ：浦島太郎","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"},{"id":"fairytale_crane_wife_custom","label":"鶴の恩返し：機織り・白羽・雪 / The Crane Wife Custom","val":"weaving loom, drifting white feathers, paper screen shadows, soft snow outside, secret gratitude mood","desc":"カスタマイズ：鶴の恩返し","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"custom"}]},{"title_ja":"設定","title_en":"Setting","children":[{"id":"fairytale_momotaro_setting","label":"桃太郎：鬼ヶ島への旅路 / Momotaro Setting","val":"road toward oni island, sunrise coastline, old Japanese village departure mood, heroic folktale adventure atmosphere","desc":"設定：桃太郎","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"},{"id":"fairytale_kaguya_hime_setting","label":"かぐや姫：竹林と満月の別れ / Princess Kaguya Setting","val":"moonlit bamboo grove, full moon overhead, quiet night air, Heian folktale farewell atmosphere","desc":"設定：かぐや姫","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"},{"id":"fairytale_urashima_taro_setting","label":"浦島太郎：竜宮城と海中世界 / Urashima Taro Setting","val":"underwater Ryugu palace, coral gate, blue-green sea light, drifting bubbles, mysterious Japanese folktale wonder","desc":"設定：浦島太郎","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"},{"id":"fairytale_crane_wife_setting","label":"鶴の恩返し：雪夜の機織り部屋 / The Crane Wife Setting","val":"small paper screen room at night, winter snow beyond the window, quiet lamp light, melancholy Japanese folktale atmosphere","desc":"設定：鶴の恩返し","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"setting"}]}]},{"title_ja":"クオリティセット","title_en":"Quality Sets","children":[{"id":"fairytale_quality_storybook_safe","label":"西洋童話 Safe Quality / Western Storybook Safe Quality","val":"clean storybook illustration, soft fairytale lighting, readable silhouette, detailed fabric and props, gentle cinematic rimlight","desc":"西洋童話向け：主題を崩さず絵本調の質感と光を足す","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_set","linked_ids":["fairytale_quality_clean_storybook_line","fairytale_quality_soft_fairytale_light","fairytale_quality_fabric_prop_clarity"]},{"id":"fairytale_quality_storybook_full","label":"西洋童話 Full Quality / Western Storybook Full Quality","val":"rich storybook illustration, cinematic fairytale lighting, detailed costume fabric, symbolic props, atmospheric depth, elegant magical particles","desc":"西洋童話向け：衣装・小物・魔法粒子まで厚めに補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_set","linked_ids":["fairytale_quality_clean_storybook_line","fairytale_quality_soft_fairytale_light","fairytale_quality_fabric_prop_clarity","fairytale_quality_symbolic_magic_depth"]},{"id":"fairytale_quality_mukashi_safe","label":"日本昔話 Safe Quality / Japanese Folktale Safe Quality","val":"clean Japanese folktale illustration, soft washi-paper texture, gentle rimlight, readable kimono silhouette, quiet atmospheric depth","desc":"日本昔話向け：和紙風・やわらかい光・着物の読みやすさを足す","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_set","linked_ids":["fairytale_quality_washi_paper_texture","fairytale_quality_moon_lamp_light","fairytale_quality_kimono_prop_clarity"]},{"id":"fairytale_quality_mukashi_full","label":"日本昔話 Full Quality / Japanese Folktale Full Quality","val":"rich Japanese folktale illustration, washi-paper texture, moonlit or lantern-lit atmosphere, detailed kimono folds, symbolic props, elegant quiet depth","desc":"日本昔話向け：和紙風・月光/灯火・小物まで厚めに補強","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_set","linked_ids":["fairytale_quality_washi_paper_texture","fairytale_quality_moon_lamp_light","fairytale_quality_kimono_prop_clarity","fairytale_quality_symbolic_magic_depth"]}]},{"title_ja":"実クオリティ項目","title_en":"Quality Details","children":[{"id":"fairytale_quality_clean_storybook_line","label":"絵本線画の読みやすさ / Clean Storybook Line","val":"clean storybook line clarity, readable character silhouette, gentle illustration finish","desc":"絵本調の輪郭とキャラの読みやすさ","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"},{"id":"fairytale_quality_soft_fairytale_light","label":"柔らかい童話光 / Soft Fairytale Light","val":"soft fairytale lighting, gentle rimlight, delicate magical glow, warm and clear atmosphere","desc":"童話向けの柔らかい光","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"},{"id":"fairytale_quality_fabric_prop_clarity","label":"衣装と小物の明瞭化 / Fabric and Prop Clarity","val":"detailed costume fabric, clear symbolic props, clean accessory shapes, no cluttered prop layout","desc":"衣装・小物の視認性を上げる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"},{"id":"fairytale_quality_symbolic_magic_depth","label":"物語象徴の奥行き / Symbolic Magic Depth","val":"symbolic story motifs, subtle magical particles, atmospheric depth, elegant fantasy illustration depth","desc":"物語モチーフと魔法感を厚めに足す","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"},{"id":"fairytale_quality_washi_paper_texture","label":"和紙風質感 / Washi Paper Texture","val":"washi-paper texture, soft ink-wash edge, clean Japanese folktale illustration finish","desc":"日本昔話向けの和紙風質感","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"},{"id":"fairytale_quality_moon_lamp_light","label":"月光と灯火 / Moon and Lamp Light","val":"soft moonlight, warm lantern glow, quiet rimlight, old tale night atmosphere","desc":"月光・灯火の和風光","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"},{"id":"fairytale_quality_kimono_prop_clarity","label":"着物と小道具の明瞭化 / Kimono and Prop Clarity","val":"clear kimono folds, readable traditional props, elegant sleeves, clean silhouette, no cluttered background","desc":"着物と和小物の視認性を上げる","collection_id":"fairytale_folktale_roleplay_collection","collection_role":"quality_detail"}]}]};

      var insertAt = roleplayRoot.children.length;
      for (var si = 0; si < roleplayRoot.children.length; si++) {
        if (titleOf(roleplayRoot.children[si]) === "🧩 神獣・伝説特化コレクション") {
          insertAt = si + 1;
          break;
        }
      }
      roleplayRoot.children.splice(insertAt, 0, fairytaleRoot);

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

  function clearQualitySetsAfterManualDetailChange(root, cb) {
    // 実クオリティを手で変えた時は、由来のQuality Set状態を残さない。
    // linked_ids / 履歴復元などの静音処理中は呼び出し側でイベントを発火しないが、
    // 念のため復元中フラグも尊重する。
    if (!root || !cb) return;
    if (window.__historyRestoring || window.__historySilentRestoring) return;

    var collectionId = cb.getAttribute("data-collection-id") || "";
    if (!collectionId) return;
    clearCollectionRoles(root, collectionId, ["quality_set"]);
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
      // compatibility_only branches keep their old checkbox identities in hidden DOM,
      // while remaining out of the ordinary Preset Packs display tree.
      if (isCompatibilityOnlyNode(sub)) return createCompatibilityOnlySubGroupUI(sub);

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
          applyPromptMetadata(cb2, it2);

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
          children: item.children,
          compatibilityOnly: item.compatibilityOnly
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
      applyPromptMetadata(cb, item);


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


  function applyFairytaleExpansionPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) {
          if (titleOf(list[i]) === title) return list[i];
        }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }
      function ensureCategory(children, titleJa, titleEn, collectionId, insertAfterJa) {
        if (!isArray(children)) return null;
        for (var i = 0; i < children.length; i++) {
          var n = children[i];
          if (titleOf(n) === titleJa || safeText(n && n.collection_id) === collectionId) {
            if (!isArray(n.children)) n.children = [];
            return n;
          }
        }
        var node = {
          title_ja: titleJa,
          title_en: titleEn,
          collection_id: collectionId,
          collection_role: "fairytale_theme_group",
          children: []
        };
        var insertAt = children.length;
        if (insertAfterJa) {
          for (var j = 0; j < children.length; j++) {
            if (titleOf(children[j]) === insertAfterJa) {
              insertAt = j + 1;
              break;
            }
          }
        }
        children.splice(insertAt, 0, node);
        return node;
      }
      function hasCollection(list, collectionId) {
        if (!isArray(list)) return false;
        for (var i = 0; i < list.length; i++) {
          if (safeText(list[i] && list[i].collection_id) === collectionId) return true;
        }
        return false;
      }
      function makeLeaf(id, label, val, desc, linkedIds) {
        return {
          id: id,
          label: label,
          val: val,
          desc: desc || "",
          linked_ids: isArray(linkedIds) ? linkedIds : []
        };
      }
      function makeGroup(titleJa, titleEn, collectionId, collectionRole, children) {
        return {
          title_ja: titleJa,
          title_en: titleEn || "",
          collection_id: collectionId,
          collection_role: collectionRole,
          children: isArray(children) ? children : []
        };
      }
      function makeThemeNode(cfg) {
        var stem = safeText(cfg.stem);
        var nameJa = safeText(cfg.nameJa);
        var nameEn = safeText(cfg.nameEn);
        var baseId = "fairytale_" + stem + "_base";
        var customId = "fairytale_" + stem + "_custom";
        var settingId = "fairytale_" + stem + "_setting";
        var qSafeId = "fairytale_" + stem + "_quality_safe";
        var qFullId = "fairytale_" + stem + "_quality_full";
        return makeGroup(
          nameJa + " セット",
          nameEn + " Set",
          "fairytale_" + stem + "_collection",
          "specialized_roleplay_collection",
          [
            makeGroup(
              nameJa + " 完成セット群",
              nameEn + " Complete Sets",
              "fairytale_" + stem + "_complete_collection",
              "complete_set_group",
              [
                makeLeaf("fairytale_" + stem + "_core", nameJa + " Core Set / " + nameEn + " Core Set", safeText(cfg.core), "完成セット", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_safe_quality", nameJa + " Safe Quality Set / " + nameEn + " Safe Quality Set", safeText(cfg.safe), "高画質セット", [baseId, customId, settingId, qSafeId]),
                makeLeaf("fairytale_" + stem + "_2000_limit", nameJa + " 2000 Limit Compatible Set / " + nameEn + " 2000 Limit Compatible Set", safeText(cfg.limit), "2000字制限対応版", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_full", nameJa + " Full Set / " + nameEn + " Full Set", safeText(cfg.full), "フルセット", [baseId, customId, settingId, qFullId])
              ]
            ),
            makeGroup(
              "ベース",
              "Base",
              "fairytale_" + stem + "_base_collection",
              "base_group",
              [makeLeaf(baseId, nameJa + " Base / " + nameEn + " Base", safeText(cfg.base), "ベース", [])]
            ),
            makeGroup(
              "カスタマイズ",
              "Customize",
              "fairytale_" + stem + "_custom_collection",
              "customize_group",
              [makeLeaf(customId, nameJa + " Customize / " + nameEn + " Customize", safeText(cfg.custom), "カスタマイズ", [])]
            ),
            makeGroup(
              "設定",
              "Setting",
              "fairytale_" + stem + "_setting_collection",
              "setting_group",
              [makeLeaf(settingId, nameJa + " Setting / " + nameEn + " Setting", safeText(cfg.setting), "設定", [])]
            ),
            makeGroup(
              "クオリティ",
              "Quality",
              "fairytale_" + stem + "_quality_collection",
              "quality_group",
              [
                makeLeaf(qSafeId, nameJa + " Safe Quality Detail / " + nameEn + " Safe Quality Detail", safeText(cfg.qualitySafe), "クオリティ補助", []),
                makeLeaf(qFullId, nameJa + " Full Quality Detail / " + nameEn + " Full Quality Detail", safeText(cfg.qualityFull), "クオリティ補助", [])
              ]
            )
          ]
        );
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;

      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot || !isArray(roleplayRoot.children)) return;

      var fairytaleRoot = null;
      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) {
          fairytaleRoot = exNode;
          break;
        }
      }
      if (!fairytaleRoot) return;
      if (!isArray(fairytaleRoot.children)) fairytaleRoot.children = [];

      var groupConfigs = [{"categoryJa": "👑 姫・森・魔女系", "categoryEn": "Princess, Forest & Witch Tales", "collectionId": "fairytale_princess_forest_collection", "insertAfterJa": "🧺 西洋童話", "themes": [{"stem": "sleeping_beauty", "nameJa": "眠れる森の姫", "nameEn": "Sleeping Beauty", "core": "Sleeping Beauty inspired princess, elegant pastel gown, rose and thorn motif, enchanted sleep aura, moonlit castle romance, single human character focus", "safe": "Sleeping Beauty inspired princess, elegant pastel gown, rose and thorn motif, enchanted sleep aura, moonlit castle romance, refined lineart, luminous storybook lighting, polished silk texture, single human character focus", "limit": "Sleeping Beauty inspired princess, pastel gown, thorn roses, enchanted sleep motif, moonlit castle, graceful fairytale heroine, single human character focus", "full": "Sleeping Beauty inspired princess, elegant layered gown, rose jewelry, thorn-vine ornaments, dreamy half-lidded gaze, enchanted castle chamber, moonlit roses, quiet fairytale suspense, luminous storybook lighting, single human character focus", "base": "graceful princess silhouette, layered pastel gown, regal hairstyle, rose accessories, delicate tiara, noble fairytale heroine", "custom": "thorn vine ornaments, spindle motif jewelry, sleeping rose motif, dreamy eyelids, delicate lace gloves, storybook elegance", "setting": "moonlit castle chamber, curling thorn roses, enchanted hush, soft candlelight, dreamy fairytale twilight", "qualitySafe": "masterpiece, best quality, refined lineart, soft storybook lighting, polished fabric texture, elegant glow", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic storybook lighting, luminous bloom, rich fabric texture, ornate background detail, atmospheric depth"}, {"stem": "tower_princess", "nameJa": "塔の姫", "nameEn": "Tower Princess", "core": "Rapunzel inspired tower princess, extremely long flowing hair, soft lavender dress, lantern fairy tale mood, curious hopeful heroine, single human character focus", "safe": "Rapunzel inspired tower princess, extremely long flowing hair, soft lavender dress, lantern fairy tale mood, refined lineart, warm storybook glow, silky hair detail, single human character focus", "limit": "tower princess inspired heroine, very long hair, soft dress, lantern lights, high tower motif, hopeful fairytale mood, single human character focus", "full": "Rapunzel inspired tower princess, very long golden hair swirling in the wind, elegant flowing dress, floral embroidery, hanging lanterns, high stone tower, sunlit wonder and freedom, single human character focus", "base": "very long flowing hair, graceful princess dress, ribbon details, floral accents, youthful curious heroine", "custom": "braided hair ornaments, tower window motif, lantern accessories, flowers woven into hair, barefoot softness, storybook sparkle", "setting": "high tower balcony, floating lantern lights, warm sunset sky, winding ivy, dreamy fairytale atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, silky hair rendering, warm soft glow, clean elegant details", "qualityFull": "masterpiece, best quality, ultra detailed, luminous hair highlights, cinematic sunset lighting, rich embroidery detail, atmospheric depth, magical glow"}, {"stem": "beauty_and_beast", "nameJa": "美女と野獣", "nameEn": "Beauty and the Beast", "core": "Beauty and the Beast inspired noble heroine, golden ball gown, enchanted rose motif, castle elegance, romantic fairytale aura, single human character focus", "safe": "Beauty and the Beast inspired noble heroine, golden ball gown, enchanted rose motif, castle elegance, romantic fairytale aura, refined lineart, luxurious fabric shine, single human character focus", "limit": "Beauty and the Beast inspired heroine, golden gown, enchanted rose, castle ballroom mood, elegant romantic fairytale, single human character focus", "full": "Beauty and the Beast inspired noble heroine, luxurious golden gown, rose jewelry, enchanted castle ballroom, candlelit romance, beast motif accents integrated into costume design, storybook elegance, single human character focus", "base": "luxurious ball gown, noble princess silhouette, rose-themed accessories, regal gloves, elegant hairstyle, castle heroine", "custom": "enchanted rose ornament, candlelight sparkle, ballroom ribbon details, subtle beast motif embroidery, glass-like glow, romantic poise", "setting": "enchanted castle ballroom, candlelit hall, grand staircase, rose petals, warm romantic fairytale atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, luxurious fabric texture, warm candlelight glow, elegant highlights", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic ballroom lighting, glowing rose accents, rich golden fabric texture, ornate architectural detail, atmospheric depth"}, {"stem": "hansel_and_gretel", "nameJa": "ヘンゼルとグレーテル", "nameEn": "Hansel and Gretel", "core": "Hansel and Gretel inspired fairytale adventurer, storybook forest traveler, candy house motif, breadcrumb journey, playful and eerie mood, single human character focus", "safe": "Hansel and Gretel inspired fairytale adventurer, candy house motif, breadcrumb journey, playful and eerie mood, refined lineart, rich dessert detail, single human character focus", "limit": "Hansel and Gretel inspired adventurer, candy house motif, breadcrumb trail, forest fairytale mood, playful eerie charm, single human character focus", "full": "Hansel and Gretel inspired fairytale adventurer, forest traveler outfit, candy and pastry ornaments, breadcrumb basket, whimsical but ominous storybook mood, confectionery cottage scene, single human character focus", "base": "storybook traveler outfit, forest cloak, apron or ribbon details, basket accessory, youthful fairytale silhouette", "custom": "candy house motif, gingerbread ornaments, breadcrumb pouch, confectionery ribbons, playful witchy accents, dessert sparkle", "setting": "deep fairytale forest, candy cottage, pastry decorations, winding trail, playful eerie atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, rich prop detail, soft storybook glow, clean fabric rendering", "qualityFull": "masterpiece, best quality, ultra detailed, confectionery texture detail, cinematic storybook lighting, atmospheric forest depth, whimsical glow"}]}, {"categoryJa": "🌀 幻想冒険・古典物語", "categoryEn": "Fantasy Adventure & Classic Tales", "collectionId": "fairytale_fantasy_classics_collection", "insertAfterJa": "👑 姫・森・魔女系", "themes": [{"stem": "alice_in_wonderland", "nameJa": "不思議の国のアリス", "nameEn": "Alice in Wonderland", "core": "Alice in Wonderland inspired curious girl, blue dress and apron, ribbon headband, wonderland whimsy, pocket watch motif, single human character focus", "safe": "Alice in Wonderland inspired curious girl, blue dress and apron, wonderland whimsy, refined lineart, playful storybook glow, crisp accessory detail, single human character focus", "limit": "Alice inspired curious girl, blue dress, ribbon headband, wonderland motif, pocket watch, playful whimsical mood, single human character focus", "full": "Alice in Wonderland inspired curious girl, blue dress with apron, ribbon headband, teacup and card motifs, pocket watch, whimsical wonderland atmosphere, curious bright expression, single human character focus", "base": "classic blue dress, white apron, ribbon headband, youthful heroine silhouette, neat stockings, storybook simplicity", "custom": "teacup motifs, card suit ornaments, pocket watch, rabbit motif accessories, whimsical ribbons, curious wonderland details", "setting": "wonderland garden, oversized flowers, floating cards, whimsical path, dreamlike storybook atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, clean accessory rendering, soft storybook glow, polished dress texture", "qualityFull": "masterpiece, best quality, ultra detailed, whimsical environmental detail, cinematic storybook lighting, crisp prop detail, atmospheric depth"}, {"stem": "peter_pan", "nameJa": "ピーターパン", "nameEn": "Peter Pan", "core": "Peter Pan inspired youthful adventurer, green fantasy outfit, starry night flight motif, neverland wonder, playful freedom, single human character focus", "safe": "Peter Pan inspired youthful adventurer, green fantasy outfit, neverland wonder, refined lineart, airy motion detail, luminous night glow, single human character focus", "limit": "Peter Pan inspired adventurer, green outfit, night sky flight motif, neverland fantasy, playful freedom, single human character focus", "full": "Peter Pan inspired youthful adventurer, green fantasy attire, feathered cap motif, airborne motion, starlit sky, island adventure aura, playful daring energy, single human character focus", "base": "light fantasy adventurer outfit, green leaf-like tailoring, agile silhouette, ribbon belt, youthful hero design", "custom": "feather cap accessory, fairy dust sparkle, airborne scarf flow, tiny dagger motif, playful adventurous energy", "setting": "starry neverland sky, moonlit clouds, distant island silhouette, floating sparkle trail, adventurous storybook mood", "qualitySafe": "masterpiece, best quality, refined lineart, airy motion rendering, soft luminous night glow, clean detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic moonlight, dynamic airborne motion, atmospheric sky depth, magical sparkle detail"}, {"stem": "pinocchio", "nameJa": "ピノキオ", "nameEn": "Pinocchio", "core": "Pinocchio inspired living doll character, puppet story motif, playful wooden toy charm, sincere wishful mood, single human character focus", "safe": "Pinocchio inspired living doll character, puppet story motif, refined lineart, polished costume detail, warm storybook glow, single human character focus", "limit": "Pinocchio inspired living doll, puppet motif, storybook charm, sincere wishful mood, single human character focus", "full": "Pinocchio inspired living doll character, storybook costume, puppet-joint motif accents, ribbon bow, playful theatrical charm, star wish motif, warm nostalgic fairytale mood, single human character focus", "base": "storybook doll costume, neat collar and bow, youthful silhouette, classic puppet-inspired tailoring, playful hero design", "custom": "puppet-joint motif accessories, wooden toy textures, star wish emblem, striped details, whimsical theatrical accents", "setting": "storybook workshop, warm lantern light, toy shelves, nostalgic fairytale scene, gentle magical atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, polished costume rendering, warm nostalgic glow, clean detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic workshop lighting, rich prop detail, nostalgic atmosphere, luminous magical accents"}, {"stem": "magic_lamp", "nameJa": "魔法のランプ", "nameEn": "Magic Lamp", "core": "Arabian Nights inspired lamp story heroine, jeweled veil, ornate dancer princess attire, magical lamp motif, desert palace fantasy, single human character focus", "safe": "Arabian Nights inspired lamp story heroine, jeweled veil, ornate dancer princess attire, magical lamp motif, refined lineart, jewel sparkle, single human character focus", "limit": "magic lamp inspired heroine, jeweled veil, ornate fantasy attire, desert palace motif, magical lamp, single human character focus", "full": "Arabian Nights inspired lamp story heroine, jeweled veil and ornaments, luxurious fantasy attire, magical lamp in hand, desert palace splendor, moonlit oasis mystique, rich storybook fantasy, single human character focus", "base": "ornate middle eastern fantasy attire, jeweled veil, elegant dancer silhouette, gold accessories, luxurious princess design", "custom": "magic lamp prop, gemstone jewelry, incense smoke ribbons, crescent motifs, palace embroidery, desert sparkle accents", "setting": "moonlit desert palace, glowing oasis, silk drapery, ornate arches, mystical night atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, gemstone shine, elegant fabric rendering, warm mystical glow", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic palace lighting, rich jewel detail, luxurious textile texture, atmospheric night depth, magical glow"}, {"stem": "ice_queen", "nameJa": "氷の女王", "nameEn": "Ice Queen", "core": "Ice Queen inspired regal sorceress, crystalline gown, snowflake motif, frozen palace elegance, dignified beauty, single human character focus", "safe": "Ice Queen inspired regal sorceress, crystalline gown, snowflake motif, frozen palace elegance, refined lineart, icy luminous glow, single human character focus", "limit": "Ice Queen inspired sorceress, crystalline gown, snowflake motif, frozen palace, elegant winter fantasy, single human character focus", "full": "Ice Queen inspired regal sorceress, crystalline gown, snowflake jewelry, icy translucent veil, frozen palace splendor, drifting snow particles, majestic winter elegance, single human character focus", "base": "crystalline regal gown, icy crown, elegant long silhouette, snowflake ornaments, noble winter queen design", "custom": "frost aura, crystal accessories, shimmering ice embroidery, snow particle swirl, translucent veil, magical winter sparkle", "setting": "frozen palace hall, aurora glow, drifting snow, crystal pillars, majestic winter atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, icy translucency, crisp highlights, elegant cool glow", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic icy lighting, crystal texture detail, atmospheric snow depth, luminous winter bloom"}, {"stem": "nutcracker", "nameJa": "くるみ割り人形", "nameEn": "Nutcracker", "core": "Nutcracker inspired ballet heroine, toy soldier and christmas fantasy motif, elegant performance costume, festive dream charm, single human character focus", "safe": "Nutcracker inspired ballet heroine, festive dream charm, refined lineart, rich costume detail, stage glow, single human character focus", "limit": "Nutcracker inspired ballet heroine, festive costume, toy soldier motif, dream stage fantasy, single human character focus", "full": "Nutcracker inspired ballet heroine, elegant tutu or performance dress, toy soldier motif accents, ribbon and ornament details, christmas dream stage, magical holiday storybook mood, single human character focus", "base": "ballet-inspired costume, elegant stage silhouette, ribbon decorations, doll-like poise, festive heroine design", "custom": "toy soldier motif accessories, nutcracker emblem, ornament sparkle, stage ribbon detail, holiday accents, dreamlike poise", "setting": "grand theatre stage, christmas decorations, glowing lights, toy kingdom atmosphere, festive dream mood", "qualitySafe": "masterpiece, best quality, refined lineart, crisp costume detail, festive stage glow, polished rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic theatre lighting, rich ornament detail, atmospheric festive depth, elegant motion rendering"}, {"stem": "swan_lake", "nameJa": "白鳥の湖", "nameEn": "Swan Lake", "core": "Swan Lake inspired ballet heroine, white feathered elegance, graceful swan motif, moonlit lake romance, single human character focus", "safe": "Swan Lake inspired ballet heroine, white feathered elegance, moonlit lake romance, refined lineart, luminous stage glow, single human character focus", "limit": "Swan Lake inspired heroine, swan motif, white graceful costume, moonlit lake fantasy, single human character focus", "full": "Swan Lake inspired ballet heroine, elegant white performance costume, feathered ornaments, graceful swan-neck poise, moonlit lakeside magic, tragic beauty, single human character focus", "base": "graceful ballet silhouette, elegant white costume, feather details, swan-inspired heroine design, poised lines", "custom": "feathered accessories, crystal tiara, soft wing-like drapery, moonlit shimmer, tragic romantic elegance", "setting": "moonlit lake, floating feathers, misty water surface, romantic blue night atmosphere, graceful fantasy mood", "qualitySafe": "masterpiece, best quality, refined lineart, luminous moonlit glow, polished feather texture, elegant rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic moonlight, delicate feather detail, atmospheric mist depth, graceful motion rendering"}, {"stem": "wizard_of_oz", "nameJa": "オズの魔法使い", "nameEn": "Wizard of Oz", "core": "Wizard of Oz inspired traveler heroine, ribbon shoes motif, whimsical journey, emerald city fantasy, adventurous storybook charm, single human character focus", "safe": "Wizard of Oz inspired traveler heroine, ribbon shoes motif, emerald city fantasy, refined lineart, bright storybook color, single human character focus", "limit": "Oz inspired traveler heroine, ribbon shoes, emerald city fantasy, whimsical adventure mood, single human character focus", "full": "Wizard of Oz inspired traveler heroine, charming dress, ribbon shoes motif, basket or travel accents, yellow brick road journey, emerald city wonder, whimsical adventurous storybook mood, single human character focus", "base": "storybook traveler dress, ribbon details, youthful heroine silhouette, simple charming outfit, adventurous design", "custom": "ribbon shoes motif, basket accessory, emerald jewel accents, whimsical travel details, playful storybook props", "setting": "yellow brick road, emerald city skyline, fantastical sky, whimsical fields, adventurous fairytale atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, bright storybook lighting, clean prop rendering, polished dress detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic color depth, whimsical environmental detail, atmospheric journey mood, crisp accessory detail"}]}, {"categoryJa": "🌙 日本昔話", "categoryEn": "Japanese Folktales", "collectionId": "fairytale_japanese_folktales_collection", "insertAfterJa": null, "themes": [{"stem": "kintaro", "nameJa": "金太郎", "nameEn": "Kintaro", "core": "Kintaro inspired heroic mountain child, strong folklore hero motif, red bib style costume, axe motif, energetic brave spirit, single human character focus", "safe": "Kintaro inspired heroic mountain child, strong folklore hero motif, refined lineart, bold costume detail, lively storybook energy, single human character focus", "limit": "Kintaro inspired folklore hero, red bib motif, mountain child spirit, brave energetic mood, single human character focus", "full": "Kintaro inspired heroic mountain child, red bib motif costume, axe emblem, mountain forest energy, folk hero bravado, animal-friend folklore charm, single human character focus", "base": "folk hero costume, strong youthful silhouette, simple mountain attire, bold red motif, brave folklore design", "custom": "axe motif, mountain herb ornaments, bear emblem accents, energetic pose support, classic folklore styling", "setting": "mountain forest clearing, bright sunrise, rustic folklore atmosphere, lively heroic mood", "qualitySafe": "masterpiece, best quality, refined lineart, clean folklore styling, lively lighting, polished fabric texture", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic sunrise lighting, rich folklore prop detail, atmospheric forest depth, dynamic heroic rendering"}, {"stem": "issun_boshi", "nameJa": "一寸法師", "nameEn": "Issun Boshi", "core": "Issun Boshi inspired tiny hero motif, miniature folklore warrior charm, needle-sword motif, bowl boat story element, brave tiny adventurer, single human character focus", "safe": "Issun Boshi inspired tiny hero motif, miniature folklore warrior charm, refined lineart, crisp prop detail, single human character focus", "limit": "Issun Boshi inspired tiny hero, needle sword motif, bowl boat folklore charm, brave miniature adventurer, single human character focus", "full": "Issun Boshi inspired tiny folklore hero, miniature warrior costume, needle-sword motif, bowl boat and oar imagery, brave determined spirit, whimsical Japanese tale charm, single human character focus", "base": "miniature hero costume motif, compact folklore styling, youthful brave silhouette, simple traveling attire", "custom": "needle sword motif, bowl boat prop, tiny scale emphasis, small pouch, whimsical tale detailing", "setting": "river journey scene, traditional village atmosphere, storybook waterway, whimsical adventure mood", "qualitySafe": "masterpiece, best quality, refined lineart, crisp miniature prop detail, clean rendering, soft glow", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic folktale lighting, rich prop detail, atmospheric village depth, whimsical scale contrast"}, {"stem": "hana_saka_jiisan", "nameJa": "花咲か爺さん", "nameEn": "Hanasaka Jiisan", "core": "Hanasaka Jiisan inspired blossom miracle motif, gentle folklore storyteller charm, cherry blossom scattering, heartwarming old tale mood, single human character focus", "safe": "Hanasaka Jiisan inspired blossom miracle motif, refined lineart, soft cherry blossom rendering, warm folklore glow, single human character focus", "limit": "Hanasaka Jiisan inspired blossom miracle, cherry blossom scattering, heartwarming folklore mood, single human character focus", "full": "Hanasaka Jiisan inspired blossom miracle motif, traditional folklore attire, pouch of magical ash, blooming cherry trees, gentle smile of kindness, warm hearted old tale atmosphere, single human character focus", "base": "traditional folklore attire, rustic gentle silhouette, warm village story styling, blossom-themed accents", "custom": "blossom ash pouch, cherry blossom swirl, kind miracle motif, rustic charm details, spring folklore accents", "setting": "village path with blooming cherry trees, spring breeze, warm hearted folklore atmosphere, gentle sunlight", "qualitySafe": "masterpiece, best quality, refined lineart, soft blossom rendering, warm natural lighting, clean detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic spring light, rich blossom detail, atmospheric village depth, gentle storybook warmth"}, {"stem": "kasa_jizo", "nameJa": "かさじぞう", "nameEn": "Kasa Jizo", "core": "Kasa Jizo inspired winter folklore pilgrim, straw hat offering motif, humble kindness, snowy village tale mood, single human character focus", "safe": "Kasa Jizo inspired winter folklore pilgrim, refined lineart, snowy atmosphere, gentle warm glow, single human character focus", "limit": "Kasa Jizo inspired winter pilgrim, straw hat motif, humble kindness, snowy folklore mood, single human character focus", "full": "Kasa Jizo inspired winter folklore pilgrim, simple traditional attire, straw hat motif, snowy village road, humble offering scene, warm kindness and blessing, single human character focus", "base": "simple traditional winter attire, humble folklore silhouette, wrapped scarf, rustic village styling", "custom": "straw hat motif, snowfall accents, offering bundle, warm cloth textures, humble blessing atmosphere", "setting": "snowy village path, gentle snowfall, quiet temple approach, warm winter folklore mood", "qualitySafe": "masterpiece, best quality, refined lineart, soft snowfall rendering, warm winter glow, clean detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic winter lighting, atmospheric snow depth, rustic prop detail, quiet emotional mood"}, {"stem": "bunbuku_chagama", "nameJa": "ぶんぶく茶釜", "nameEn": "Bunbuku Chagama", "core": "Bunbuku Chagama inspired tanuki folklore performer, kettle motif, playful transformation tale, festival show charm, single human character focus", "safe": "Bunbuku Chagama inspired tanuki folklore performer, kettle motif, refined lineart, playful prop detail, single human character focus", "limit": "Bunbuku Chagama inspired performer, kettle motif, playful transformation folklore, festival charm, single human character focus", "full": "Bunbuku Chagama inspired folklore performer, tanuki tale motif integrated into costume, kettle accessory, festival show atmosphere, playful transformation charm, whimsical Japanese story energy, single human character focus", "base": "playful folklore performance attire, festive silhouette, rustic costume accents, lively storybook styling", "custom": "kettle motif accessory, tanuki emblem accents, festival ribbons, playful transformation details, whimsical prop charm", "setting": "festival performance space, lantern lights, rustic village stage, playful folklore atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, crisp prop rendering, festive warm glow, clean detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic festival lighting, rich accessory detail, atmospheric village stage depth, playful energy"}, {"stem": "shitakiri_suzume", "nameJa": "舌切り雀", "nameEn": "Tongue-Cut Sparrow", "core": "Tongue-Cut Sparrow inspired gentle folklore heroine, sparrow motif, woven basket charm, gratitude and caution tale mood, single human character focus", "safe": "Tongue-Cut Sparrow inspired gentle folklore heroine, sparrow motif, refined lineart, delicate accessory detail, soft folklore glow, single human character focus", "limit": "Tongue-Cut Sparrow inspired heroine, sparrow motif, woven basket, gentle folklore mood, single human character focus", "full": "Tongue-Cut Sparrow inspired folklore heroine, traditional attire, sparrow motif ornaments, woven basket, forest path kindness and caution, gentle Japanese tale atmosphere, single human character focus", "base": "traditional gentle attire, simple village silhouette, sparrow-themed accents, woven texture details, folklore heroine design", "custom": "sparrow ornaments, woven basket, seed pouch, feather motif details, rustic charm accents, tale-like softness", "setting": "quiet village or bamboo path, small sparrows nearby motif, soft sunlight, gentle folklore atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, delicate feather motif detail, soft natural glow, clean rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic soft light, atmospheric village depth, rich woven texture detail, warm folklore mood"}, {"stem": "yuki_onna", "nameJa": "雪女", "nameEn": "Yuki Onna", "core": "Yuki Onna inspired ethereal winter beauty, flowing white kimono, frost aura, ghostly elegance, silent snow night, single human character focus", "safe": "Yuki Onna inspired ethereal winter beauty, flowing white kimono, frost aura, refined lineart, icy glow, single human character focus", "limit": "Yuki Onna inspired winter beauty, white kimono, frost aura, silent snow night, single human character focus", "full": "Yuki Onna inspired ethereal winter beauty, flowing white kimono, pale frost-like elegance, icy breath motif, drifting snow, haunted yet beautiful Japanese winter atmosphere, single human character focus", "base": "flowing white kimono, graceful winter silhouette, long dark hair, ethereal folklore beauty design", "custom": "frost aura, icy breath motif, snow crystal ornaments, ghostly translucence, cold wind drapery, haunting elegance", "setting": "silent snowy night, winter forest or village edge, drifting snow, pale moonlight, eerie beautiful atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, icy translucence, pale moonlit glow, clean elegant rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic moonlit snow, atmospheric mist depth, crystal frost detail, haunting winter beauty"}, {"stem": "earless_hoichi", "nameJa": "耳なし芳一", "nameEn": "Earless Hoichi", "core": "Earless Hoichi inspired blind biwa storyteller, talisman script motif, haunted temple atmosphere, solemn ghost story mood, single human character focus", "safe": "Earless Hoichi inspired blind biwa storyteller, talisman script motif, refined lineart, atmospheric temple glow, single human character focus", "limit": "Earless Hoichi inspired biwa storyteller, talisman script, haunted temple mood, solemn ghost story, single human character focus", "full": "Earless Hoichi inspired blind biwa storyteller, traditional robes, biwa instrument, sutra and talisman script motif, haunted temple night, solemn tragic kaidan atmosphere, single human character focus", "base": "traditional robe silhouette, calm storyteller posture, biwa musician motif, solemn folklore design", "custom": "talisman script details, sutra text motif, biwa prop, candlelit temple accents, ghost story atmosphere", "setting": "haunted temple hall at night, candlelight and shadows, drifting mist, solemn kaidan atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, atmospheric candlelight, crisp prop detail, moody rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic temple lighting, atmospheric shadow depth, rich calligraphy detail, haunting dramatic mood"}]}];

      for (var gi = 0; gi < groupConfigs.length; gi++) {
        var gcfg = groupConfigs[gi];
        var category = ensureCategory(
          fairytaleRoot.children,
          safeText(gcfg.categoryJa),
          safeText(gcfg.categoryEn),
          safeText(gcfg.collectionId),
          safeText(gcfg.insertAfterJa)
        );
        if (!category) continue;
        if (!isArray(category.children)) category.children = [];
        var themes = isArray(gcfg.themes) ? gcfg.themes : [];
        for (var ti = 0; ti < themes.length; ti++) {
          var theme = themes[ti];
          var collectionId = "fairytale_" + safeText(theme.stem) + "_collection";
          if (hasCollection(category.children, collectionId)) continue;
          category.children.push(makeThemeNode(theme));
        }
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }



  function applyFairytaleExtraStoryPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) {
          if (titleOf(list[i]) === title) return list[i];
        }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }
      function ensureCategory(children, titleJa, titleEn, collectionId, insertAfterJa) {
        if (!isArray(children)) return null;
        for (var i = 0; i < children.length; i++) {
          var n = children[i];
          if (titleOf(n) === titleJa || safeText(n && n.collection_id) === collectionId) {
            if (!isArray(n.children)) n.children = [];
            return n;
          }
        }
        var node = {
          title_ja: titleJa,
          title_en: titleEn,
          collection_id: collectionId,
          collection_role: "fairytale_theme_group",
          children: []
        };
        var insertAt = children.length;
        if (insertAfterJa) {
          for (var j = 0; j < children.length; j++) {
            if (titleOf(children[j]) === insertAfterJa) {
              insertAt = j + 1;
              break;
            }
          }
        }
        children.splice(insertAt, 0, node);
        return node;
      }
      function hasCollection(list, collectionId) {
        if (!isArray(list)) return false;
        for (var i = 0; i < list.length; i++) {
          if (safeText(list[i] && list[i].collection_id) === collectionId) return true;
        }
        return false;
      }
      function makeLeaf(id, label, val, desc, linkedIds) {
        return { id: id, label: label, val: val, desc: desc || "", linked_ids: isArray(linkedIds) ? linkedIds : [] };
      }
      function makeGroup(titleJa, titleEn, collectionId, collectionRole, children) {
        return { title_ja: titleJa, title_en: titleEn || "", collection_id: collectionId, collection_role: collectionRole, children: isArray(children) ? children : [] };
      }
      function makeThemeNode(cfg) {
        var stem = safeText(cfg.stem);
        var nameJa = safeText(cfg.nameJa);
        var nameEn = safeText(cfg.nameEn);
        var baseId = "fairytale_" + stem + "_base";
        var customId = "fairytale_" + stem + "_custom";
        var settingId = "fairytale_" + stem + "_setting";
        var qSafeId = "fairytale_" + stem + "_quality_safe";
        var qFullId = "fairytale_" + stem + "_quality_full";
        return makeGroup(
          nameJa + " セット",
          nameEn + " Set",
          "fairytale_" + stem + "_collection",
          "specialized_roleplay_collection",
          [
            makeGroup(
              nameJa + " 完成セット群",
              nameEn + " Complete Sets",
              "fairytale_" + stem + "_complete_collection",
              "complete_set_group",
              [
                makeLeaf("fairytale_" + stem + "_core", nameJa + " Core Set / " + nameEn + " Core Set", safeText(cfg.core), "完成セット", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_safe_quality", nameJa + " Safe Quality Set / " + nameEn + " Safe Quality Set", safeText(cfg.safe), "高画質セット", [baseId, customId, settingId, qSafeId]),
                makeLeaf("fairytale_" + stem + "_2000_limit", nameJa + " 2000 Limit Compatible Set / " + nameEn + " 2000 Limit Compatible Set", safeText(cfg.limit), "2000字制限対応版", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_full", nameJa + " Full Set / " + nameEn + " Full Set", safeText(cfg.full), "フルセット", [baseId, customId, settingId, qFullId])
              ]
            ),
            makeGroup("ベース", "Base", "fairytale_" + stem + "_base_collection", "base_group", [
              makeLeaf(baseId, nameJa + " Base / " + nameEn + " Base", safeText(cfg.base), "ベース", [])
            ]),
            makeGroup("カスタマイズ", "Customize", "fairytale_" + stem + "_custom_collection", "customize_group", [
              makeLeaf(customId, nameJa + " Customize / " + nameEn + " Customize", safeText(cfg.custom), "カスタマイズ", [])
            ]),
            makeGroup("設定", "Setting", "fairytale_" + stem + "_setting_collection", "setting_group", [
              makeLeaf(settingId, nameJa + " Setting / " + nameEn + " Setting", safeText(cfg.setting), "設定", [])
            ]),
            makeGroup("クオリティ", "Quality", "fairytale_" + stem + "_quality_collection", "quality_group", [
              makeLeaf(qSafeId, nameJa + " Safe Quality Detail / " + nameEn + " Safe Quality Detail", safeText(cfg.qualitySafe), "クオリティ補助", []),
              makeLeaf(qFullId, nameJa + " Full Quality Detail / " + nameEn + " Full Quality Detail", safeText(cfg.qualityFull), "クオリティ補助", [])
            ])
          ]
        );
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;
      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot || !isArray(roleplayRoot.children)) return;

      var fairytaleRoot = null;
      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) {
          fairytaleRoot = exNode;
          break;
        }
      }
      if (!fairytaleRoot) return;
      if (!isArray(fairytaleRoot.children)) fairytaleRoot.children = [];

      var category = ensureCategory(
        fairytaleRoot.children,
        "🎭 寓話・異色童話",
        "Fables & Distinctive Tales",
        "fairytale_fables_distinctive_collection",
        "🌀 幻想冒険・古典物語"
      );
      if (!category || !isArray(category.children)) return;

      var themes = [{"stem": "emperors_new_clothes", "nameJa": "裸の王様", "nameEn": "The Emperor's New Clothes", "core": "The Emperor's New Clothes inspired vain royal figure, extravagant regal styling, invisible finery motif, parade vanity, satirical fairytale aura, single human character focus", "safe": "The Emperor's New Clothes inspired vain royal figure, extravagant regal styling, invisible finery motif, refined lineart, luxurious ornament detail, satirical fairytale aura, single human character focus", "limit": "Emperor's New Clothes inspired royal figure, extravagant styling, invisible finery motif, vain parade mood, satirical fairytale, single human character focus", "full": "The Emperor's New Clothes inspired vain royal figure, lavish crown and jewelry, confident parade poise, illusion of magnificent attire, theatrical royal vanity, playful satirical fairytale mood, single human character focus", "base": "regal silhouette, crown and scepter motif, proud posture, luxurious ornaments, storybook monarch styling", "custom": "invisible finery motif, vanity-rich gestures, court parade accents, embroidered royal symbols, theatrical satire details", "setting": "palace parade route, ornate court backdrop, admiring crowd motif, bright festive atmosphere with subtle comic irony", "qualitySafe": "masterpiece, best quality, refined lineart, luxurious ornament rendering, clean royal details, elegant storybook glow", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic palace lighting, rich jewel detail, ornate court atmosphere, theatrical satire mood"}, {"stem": "pied_piper", "nameJa": "ハーメルンの笛吹き", "nameEn": "The Pied Piper", "core": "Pied Piper inspired mysterious musician, colorful medieval attire, flute motif, storybook procession charm, uncanny folktale aura, single human character focus", "safe": "Pied Piper inspired mysterious musician, colorful medieval attire, flute motif, refined lineart, crisp costume detail, uncanny storybook aura, single human character focus", "limit": "Pied Piper inspired musician, flute motif, medieval colorful attire, storybook procession mood, single human character focus", "full": "Pied Piper inspired mysterious musician, ornate flute in hand, colorful medieval costume, ribboned hat, leading procession motif, charming yet eerie folktale presence, single human character focus", "base": "medieval performer attire, colorful tunic, feathered or ribboned hat, agile storyteller silhouette, travelling musician design", "custom": "flute prop, swirling procession ribbons, town motif accents, subtle rat-symbol charm, playful eerie confidence, patterned costume detail", "setting": "old European town street, cobblestone path, trailing procession atmosphere, twilight storybook mystery", "qualitySafe": "masterpiece, best quality, refined lineart, crisp prop rendering, atmospheric town glow, polished costume detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic twilight lighting, rich medieval town detail, dynamic procession atmosphere, eerie charm"}, {"stem": "red_shoes", "nameJa": "赤い靴", "nameEn": "The Red Shoes", "core": "The Red Shoes inspired tragic dancer heroine, vivid red shoes motif, elegant performance costume, relentless dance symbolism, beautiful melancholic fairytale aura, single human character focus", "safe": "The Red Shoes inspired tragic dancer heroine, vivid red shoes motif, refined lineart, graceful motion rendering, melancholic fairytale glow, single human character focus", "limit": "Red Shoes inspired dancer heroine, vivid red shoes, elegant costume, tragic dance symbolism, melancholic fairytale mood, single human character focus", "full": "The Red Shoes inspired tragic dancer heroine, elegant ballet or performance dress, striking red shoes, swirling motion, beautiful yet ominous dance compulsion motif, dramatic storybook melancholy, single human character focus", "base": "graceful dancer silhouette, elegant performance dress, ribbon accents, poised theatrical heroine design", "custom": "vivid red shoes, motion ribbons, dramatic hem flow, dance symbolism, melancholic elegance, stage-like story details", "setting": "theatre stage or moonlit town square, dramatic spotlight, swirling motion lines, tragic fairytale atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, graceful motion detail, luminous spotlight glow, polished costume rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic stage lighting, rich fabric texture, dynamic motion rendering, melancholic atmospheric depth"}];
      for (var i = 0; i < themes.length; i++) {
        var collectionId = "fairytale_" + safeText(themes[i].stem) + "_collection";
        if (hasCollection(category.children, collectionId)) continue;
        category.children.push(makeThemeNode(themes[i]));
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }



  function applyFairytaleExtraStoryPatch2(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) {
          if (titleOf(list[i]) === title) return list[i];
        }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }
      function ensureCategory(children, titleJa, titleEn, collectionId, insertAfterJa) {
        if (!isArray(children)) return null;
        for (var i = 0; i < children.length; i++) {
          var n = children[i];
          if (titleOf(n) === titleJa || safeText(n && n.collection_id) === collectionId) {
            if (!isArray(n.children)) n.children = [];
            return n;
          }
        }
        var node = {
          title_ja: titleJa,
          title_en: titleEn,
          collection_id: collectionId,
          collection_role: "fairytale_theme_group",
          children: []
        };
        var insertAt = children.length;
        if (insertAfterJa) {
          for (var j = 0; j < children.length; j++) {
            if (titleOf(children[j]) === insertAfterJa) {
              insertAt = j + 1;
              break;
            }
          }
        }
        children.splice(insertAt, 0, node);
        return node;
      }
      function hasCollection(list, collectionId) {
        if (!isArray(list)) return false;
        for (var i = 0; i < list.length; i++) {
          if (safeText(list[i] && list[i].collection_id) === collectionId) return true;
        }
        return false;
      }
      function makeLeaf(id, label, val, desc, collectionRole, linkedIds) {
        return {
          id: id,
          label: label,
          val: val,
          desc: desc || "",
          collection_id: "fairytale_folktale_roleplay_collection",
          collection_role: collectionRole || "",
          linked_ids: isArray(linkedIds) ? linkedIds : []
        };
      }
      function makeGroup(titleJa, titleEn, collectionId, collectionRole, children) {
        return {
          title_ja: titleJa,
          title_en: titleEn || "",
          collection_id: collectionId,
          collection_role: collectionRole,
          children: isArray(children) ? children : []
        };
      }
      function makeThemeNode(cfg) {
        var stem = safeText(cfg.stem);
        var nameJa = safeText(cfg.nameJa);
        var nameEn = safeText(cfg.nameEn);
        var baseId = "fairytale_" + stem + "_base";
        var customId = "fairytale_" + stem + "_custom";
        var settingId = "fairytale_" + stem + "_setting";
        var qSafeId = "fairytale_" + stem + "_quality_safe";
        var qFullId = "fairytale_" + stem + "_quality_full";
        return makeGroup(
          nameJa + " セット",
          nameEn + " Set",
          "fairytale_" + stem + "_collection",
          "specialized_roleplay_collection",
          [
            makeGroup(
              nameJa + " 完成セット群",
              nameEn + " Complete Sets",
              "fairytale_" + stem + "_complete_collection",
              "complete_set_group",
              [
                makeLeaf("fairytale_" + stem + "_core", nameJa + " Core Set / " + nameEn + " Core Set", safeText(cfg.core), "完成セット", "complete_set", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_safe_quality", nameJa + " Safe Quality Set / " + nameEn + " Safe Quality Set", safeText(cfg.safe), "高画質セット", "complete_set", [baseId, customId, settingId, qSafeId]),
                makeLeaf("fairytale_" + stem + "_2000_limit", nameJa + " 2000 Limit Compatible Set / " + nameEn + " 2000 Limit Compatible Set", safeText(cfg.limit), "2000字制限対応版", "complete_set", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_full", nameJa + " Full Set / " + nameEn + " Full Set", safeText(cfg.full), "フルセット", "complete_set", [baseId, customId, settingId, qFullId])
              ]
            ),
            makeGroup("ベース", "Base", "fairytale_" + stem + "_base_collection", "base_group", [
              makeLeaf(baseId, nameJa + " Base / " + nameEn + " Base", safeText(cfg.base), "ベース", "base", [])
            ]),
            makeGroup("カスタマイズ", "Customize", "fairytale_" + stem + "_custom_collection", "customize_group", [
              makeLeaf(customId, nameJa + " Customize / " + nameEn + " Customize", safeText(cfg.custom), "カスタマイズ", "custom", [])
            ]),
            makeGroup("設定", "Setting", "fairytale_" + stem + "_setting_collection", "setting_group", [
              makeLeaf(settingId, nameJa + " Setting / " + nameEn + " Setting", safeText(cfg.setting), "設定", "setting", [])
            ]),
            makeGroup("クオリティ", "Quality", "fairytale_" + stem + "_quality_collection", "quality_group", [
              makeLeaf(qSafeId, nameJa + " Safe Quality Detail / " + nameEn + " Safe Quality Detail", safeText(cfg.qualitySafe), "クオリティ補助", "quality_detail", []),
              makeLeaf(qFullId, nameJa + " Full Quality Detail / " + nameEn + " Full Quality Detail", safeText(cfg.qualityFull), "クオリティ補助", "quality_detail", [])
            ])
          ]
        );
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;
      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot || !isArray(roleplayRoot.children)) return;

      var fairytaleRoot = null;
      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) {
          fairytaleRoot = exNode;
          break;
        }
      }
      if (!fairytaleRoot) return;
      if (!isArray(fairytaleRoot.children)) fairytaleRoot.children = [];

      var category = ensureCategory(
        fairytaleRoot.children,
        "🎭 寓話・異色童話",
        "Fables & Distinctive Tales",
        "fairytale_fables_distinctive_collection",
        "🌀 幻想冒険・古典物語"
      );
      if (!category || !isArray(category.children)) return;

      var themes = [{"stem": "bluebeard", "nameJa": "青ひげ", "nameEn": "Bluebeard", "core": "Bluebeard inspired gothic aristocrat, blue beard motif, forbidden key, locked room mystery, ominous castle elegance, single human character focus", "safe": "Bluebeard inspired gothic aristocrat, blue beard motif, forbidden key, locked room mystery, refined lineart, candlelit castle glow, single human character focus", "limit": "Bluebeard inspired gothic aristocrat, blue beard motif, forbidden key, locked room mystery, ominous castle mood, single human character focus", "full": "Bluebeard inspired gothic aristocrat, deep blue beard or blue facial hair motif, ornate dark noble attire, forbidden golden key, locked door symbol, candlelit castle corridor, elegant but ominous fairytale mystery, single human character focus", "base": "dark noble attire, blue beard motif, ornate aristocrat silhouette, velvet cape, cold elegant posture", "custom": "forbidden key prop, locked door symbol, candle flame accents, blue jewel details, gothic embroidery, secretive gaze", "setting": "gothic castle corridor, locked chamber door, candlelit stone walls, shadowy fairytale mystery atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, candlelit rimlight, rich velvet texture, clean gothic detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic candlelight, ornate castle detail, deep shadow atmosphere, rich fabric texture"}, {"stem": "little_match_girl", "nameJa": "マッチ売りの少女", "nameEn": "The Little Match Girl", "core": "Little Match Girl inspired winter heroine, matchbox and tiny flame motif, snowy street, fragile hope, bittersweet storybook mood, single human character focus", "safe": "Little Match Girl inspired winter heroine, matchbox and tiny flame motif, snowy street, fragile hope, refined lineart, warm flame glow, single human character focus", "limit": "Little Match Girl inspired winter heroine, matchbox, tiny flame, snowy street, fragile hopeful mood, single human character focus", "full": "Little Match Girl inspired winter heroine, worn winter shawl, matchbox held carefully, tiny warm flames glowing in cold snow, quiet street at night, bittersweet hope and memory, emotional storybook atmosphere, single human character focus", "base": "simple winter shawl, humble street outfit, small scarf, quiet fragile silhouette, gentle winter heroine design", "custom": "matchbox prop, tiny flame glow, frost on fabric, warm breath mist, delicate hopeful expression, soft snow accents", "setting": "snowy town street at night, dim window lights, cold pavement, drifting snow, tiny warm flame atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, warm flame glow, soft snowfall rendering, clean emotional detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic snow night lighting, warm-cold contrast, atmospheric depth, delicate fabric texture"}, {"stem": "puss_in_boots", "nameJa": "長靴をはいた猫", "nameEn": "Puss in Boots", "core": "Puss in Boots inspired catlike trickster hero, feathered hat, tall boots, rapier motif, charming swashbuckler fairytale aura, single human character focus", "safe": "Puss in Boots inspired catlike trickster hero, feathered hat, tall boots, rapier motif, refined lineart, polished leather detail, single human character focus", "limit": "Puss in Boots inspired trickster hero, feathered hat, tall boots, rapier motif, charming fairytale adventurer, single human character focus", "full": "Puss in Boots inspired catlike trickster hero, elegant feathered hat, tall leather boots, cape and belt, rapier motif, confident charming pose, clever swashbuckler fairytale mood, single human character focus", "base": "catlike adventurer styling, feathered hat, tall boots, short cape, agile trickster silhouette, charming hero design", "custom": "rapier motif, leather belt, paw-print charm, whisker-like accessory detail, confident grin, swashbuckler flair", "setting": "storybook countryside road, noble castle in distance, warm adventurous sky, playful trickster atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, polished leather texture, clean accessory detail, warm storybook glow", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic adventure lighting, rich leather and fabric detail, lively motion rendering, charming atmosphere"}, {"stem": "bremen_musicians", "nameJa": "ブレーメンの音楽隊", "nameEn": "Town Musicians of Bremen", "core": "Bremen musicians inspired traveling performer, animal band emblems, rustic instrument motifs, road-trip fairytale joy, single human character focus", "safe": "Bremen musicians inspired traveling performer, animal band emblems, rustic instrument motifs, refined lineart, lively folk music glow, single human character focus", "limit": "Bremen musicians inspired performer, animal band emblems, rustic instruments, traveling music tale mood, single human character focus", "full": "Town Musicians of Bremen inspired traveling performer, rustic cloak, instrument case and bell accents, donkey dog cat rooster emblems integrated into costume, cheerful road-trip fairytale music mood, single human character focus", "base": "traveling musician outfit, rustic cloak, instrument straps, folk performer silhouette, warm adventurous design", "custom": "donkey dog cat rooster emblems, lute or drum motif, small bells, music note ribbons, road-trip charm details", "setting": "country road toward Bremen, twilight village lights, rustic inn silhouette, cheerful traveling music atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, crisp instrument detail, warm folk glow, clean costume rendering", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic village twilight, rich instrument and emblem detail, atmospheric road depth, lively music energy"}, {"stem": "ugly_duckling", "nameJa": "みにくいアヒルの子", "nameEn": "The Ugly Duckling", "core": "Ugly Duckling inspired transformation heroine, duckling-to-swan motif, soft feathers, lake reflection, hopeful growth fairytale aura, single human character focus", "safe": "Ugly Duckling inspired transformation heroine, duckling-to-swan motif, soft feathers, lake reflection, refined lineart, luminous gentle glow, single human character focus", "limit": "Ugly Duckling inspired heroine, swan transformation motif, soft feathers, lake reflection, hopeful fairytale mood, single human character focus", "full": "Ugly Duckling inspired transformation heroine, soft gray-to-white feather accents, swan wing-like shawl, lake reflection, gentle awakening posture, hopeful self-discovery fairytale mood, single human character focus", "base": "soft feathered shawl, simple humble outfit shifting into elegant swan motif, graceful transformation silhouette", "custom": "swan feather ornaments, lake reflection motif, gentle growth symbolism, white feather glow, soft wing-like drapery", "setting": "quiet lakeside at dawn, misty water reflection, reeds and soft light, hopeful transformation atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, soft feather rendering, luminous dawn glow, clean gentle detail", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic dawn lighting, delicate feather texture, misty lake depth, hopeful luminous atmosphere"}];
      for (var i = 0; i < themes.length; i++) {
        var collectionId = "fairytale_" + safeText(themes[i].stem) + "_collection";
        if (hasCollection(category.children, collectionId)) continue;
        category.children.push(makeThemeNode(themes[i]));
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }



  function repairFairytaleCollectionRoles(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) {
          if (titleOf(list[i]) === title) return list[i];
        }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }
      function hasSuffix(s, suffix) {
        s = safeText(s);
        suffix = safeText(suffix);
        return s.length >= suffix.length && s.slice(s.length - suffix.length) === suffix;
      }
      function inferRole(id) {
        id = safeText(id);
        if (!id || id.indexOf("fairytale_") !== 0) return "";
        if (hasSuffix(id, "_quality_safe") || hasSuffix(id, "_quality_full")) return "quality_detail";
        if (hasSuffix(id, "_core") || hasSuffix(id, "_safe_quality") || hasSuffix(id, "_2000_limit") || hasSuffix(id, "_limit_2000") || hasSuffix(id, "_full")) return "complete_set";
        if (hasSuffix(id, "_base")) return "base";
        if (hasSuffix(id, "_custom")) return "custom";
        if (hasSuffix(id, "_setting")) return "setting";
        return "";
      }
      function visit(node) {
        if (!node) return;
        var id = safeText(node.id || node.key || node.pack_id || "");
        if (id.indexOf("fairytale_") === 0 && (node.val || node.prompt || node.tags || node.values)) {
          if (!node.collection_id) node.collection_id = "fairytale_folktale_roleplay_collection";
          if (!node.collection_role) {
            var role = inferRole(id);
            if (role) node.collection_role = role;
          }
        }
        var kids = null;
        if (isArray(node.children)) kids = node.children;
        else if (isArray(node.items)) kids = node.items;
        else if (isArray(node.packs)) kids = node.packs;
        if (!kids) return;
        for (var i = 0; i < kids.length; i++) visit(kids[i]);
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;
      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot || !isArray(roleplayRoot.children)) return;

      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) {
          visit(exNode);
          break;
        }
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }



  function applyArisielMirrorRealmPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) {
          if (titleOf(list[i]) === title) return list[i];
        }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }
      function ensureCategory(children, titleJa, titleEn, collectionId, insertAfterJa) {
        if (!isArray(children)) return null;
        for (var i = 0; i < children.length; i++) {
          var n = children[i];
          if (titleOf(n) === titleJa || safeText(n && n.collection_id) === collectionId) {
            if (!isArray(n.children)) n.children = [];
            return n;
          }
        }
        var node = {
          title_ja: titleJa,
          title_en: titleEn,
          collection_id: collectionId,
          collection_role: "fairytale_theme_group",
          children: []
        };
        var insertAt = children.length;
        if (insertAfterJa) {
          for (var j = 0; j < children.length; j++) {
            if (titleOf(children[j]) === insertAfterJa) {
              insertAt = j + 1;
              break;
            }
          }
        }
        children.splice(insertAt, 0, node);
        return node;
      }
      function hasCollection(list, collectionId) {
        if (!isArray(list)) return false;
        for (var i = 0; i < list.length; i++) {
          if (safeText(list[i] && list[i].collection_id) === collectionId) return true;
        }
        return false;
      }
      function makeLeaf(id, label, val, desc, linkedIds) {
        return { id: id, label: label, val: val, desc: desc || "", linked_ids: isArray(linkedIds) ? linkedIds : [] };
      }
      function makeGroup(titleJa, titleEn, collectionId, collectionRole, children) {
        return { title_ja: titleJa, title_en: titleEn || "", collection_id: collectionId, collection_role: collectionRole, children: isArray(children) ? children : [] };
      }
      function makeThemeNode(cfg) {
        var stem = safeText(cfg.stem);
        var nameJa = safeText(cfg.nameJa);
        var nameEn = safeText(cfg.nameEn);
        var baseId = "fairytale_" + stem + "_base";
        var customId = "fairytale_" + stem + "_custom";
        var settingId = "fairytale_" + stem + "_setting";
        var qSafeId = "fairytale_" + stem + "_quality_safe";
        var qFullId = "fairytale_" + stem + "_quality_full";
        return makeGroup(
          nameJa + " セット",
          nameEn + " Set",
          "fairytale_" + stem + "_collection",
          "specialized_roleplay_collection",
          [
            makeGroup(
              nameJa + " 完成セット群",
              nameEn + " Complete Sets",
              "fairytale_" + stem + "_complete_collection",
              "complete_set_group",
              [
                makeLeaf("fairytale_" + stem + "_core", nameJa + " Core Set / " + nameEn + " Core Set", safeText(cfg.core), "完成セット", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_safe_quality", nameJa + " Safe Quality Set / " + nameEn + " Safe Quality Set", safeText(cfg.safe), "高画質セット", [baseId, customId, settingId, qSafeId]),
                makeLeaf("fairytale_" + stem + "_2000_limit", nameJa + " 2000 Limit Compatible Set / " + nameEn + " 2000 Limit Compatible Set", safeText(cfg.limit), "2000字制限対応版", [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_full", nameJa + " Full Set / " + nameEn + " Full Set", safeText(cfg.full), "フルセット", [baseId, customId, settingId, qFullId])
              ]
            ),
            makeGroup("ベース", "Base", "fairytale_" + stem + "_base_collection", "base_group", [
              makeLeaf(baseId, nameJa + " Base / " + nameEn + " Base", safeText(cfg.base), "ベース", [])
            ]),
            makeGroup("カスタマイズ", "Customize", "fairytale_" + stem + "_custom_collection", "customize_group", [
              makeLeaf(customId, nameJa + " Customize / " + nameEn + " Customize", safeText(cfg.custom), "カスタマイズ", [])
            ]),
            makeGroup("設定", "Setting", "fairytale_" + stem + "_setting_collection", "setting_group", [
              makeLeaf(settingId, nameJa + " Setting / " + nameEn + " Setting", safeText(cfg.setting), "設定", [])
            ]),
            makeGroup("クオリティ", "Quality", "fairytale_" + stem + "_quality_collection", "quality_group", [
              makeLeaf(qSafeId, nameJa + " Safe Quality Detail / " + nameEn + " Safe Quality Detail", safeText(cfg.qualitySafe), "クオリティ補助", []),
              makeLeaf(qFullId, nameJa + " Full Quality Detail / " + nameEn + " Full Quality Detail", safeText(cfg.qualityFull), "クオリティ補助", [])
            ])
          ]
        );
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;
      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot || !isArray(roleplayRoot.children)) return;

      var fairytaleRoot = null;
      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) {
          fairytaleRoot = exNode;
          break;
        }
      }
      if (!fairytaleRoot) return;
      if (!isArray(fairytaleRoot.children)) fairytaleRoot.children = [];

      var category = ensureCategory(
        fairytaleRoot.children,
        "🪞 オリジナル童話・鏡界譚",
        "Original Fairy Tales: Mirror Realm",
        "fairytale_original_mirror_realm_collection",
        "🎭 寓話・異色童話"
      );
      if (!category || !isArray(category.children)) return;

      var cfg = {"stem": "arisiel_mirror_realm", "nameJa": "アリシエル ― 鏡界の覇者", "nameEn": "Arisiel – The Sovereign of the Mirror Realm", "core": "Arisiel, sovereign of the mirror realm, saint-like Alice heroine, fractured crown, mirror sword Excalion, shattered mirror shards, divine rebellion, beautiful tragic smile, single human character focus", "safe": "Arisiel, sovereign of the mirror realm, saint-like Alice heroine, fractured crown, mirror sword Excalion, shattered mirror shards, divine rebellion, cinematic holy light, glass reflections, refined lineart, single human character focus", "limit": "Arisiel, mirror realm sovereign, saint-like Alice heroine, fractured crown, mirror sword, shattered mirror realm, divine rebellion, beautiful tragic smile, single human character focus", "full": "Arisiel, the sovereign of the mirror realm, saint-like Alice who defies divinity, long fair hair, blue eyes, elegant white lace dress, ribbon headband, fractured crown, mirror sword Excalion, shattered glass and floating mirror shards, burning fate cards, stopped clocks, checkered mirror hall, white rose of madness, holy light and rebellious flame, beautiful tragic smile, single human character focus", "base": "saint-like Alice heroine, long fair hair, blue eyes, elegant white lace dress, ribbon headband, graceful young queen silhouette, holy yet rebellious presence", "custom": "fractured crown, mirror sword Excalion, floating mirror shards, burning fate cards, white rose of madness, holy flame, blade and flame symbolism, serene defiant smile", "setting": "fractured mirror realm, checkered mirror hall, floating playing cards, stopped clocks, broken glass sky, holy radiance and dark fantasy atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, cinematic holy lighting, polished glass reflections, elegant fabric texture, luminous atmosphere", "qualityFull": "masterpiece, best quality, ultra detailed, glass refraction, cinematic lighting, volumetric light, reflective mirror surfaces, rich lace texture, dramatic atmosphere, crystalline shard detail"};
      var collectionId = "fairytale_" + safeText(cfg.stem) + "_collection";
      if (!hasCollection(category.children, collectionId)) {
        category.push ? 0 : 0;
        category.children.push(makeThemeNode(cfg));
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyFairytaleTragicThemeTonePatch(db) {
    try {
      if (!db) return;
      var overrides = {"fairytale_little_match_girl_core": "Little Match Girl inspired poor winter girl, threadbare winter clothes, patched shawl, frayed scarf, small matchbox held carefully, tiny warm flame lighting her face, cold flushed cheeks, fragile hope, lonely snowy town street at night, bittersweet storybook mood, single human character focus", "fairytale_little_match_girl_safe_quality": "Little Match Girl inspired poor winter girl, threadbare winter clothes, patched shawl, frayed scarf, small matchbox held carefully, tiny warm flame lighting her face, cold flushed cheeks, fragile hope, lonely snowy town street at night, bittersweet storybook mood, refined lineart, soft candlelight, subdued highlights, matte fabric texture, single human character focus", "fairytale_little_match_girl_2000_limit": "Little Match Girl inspired poor winter girl, patched shawl, frayed scarf, matchbox, tiny warm flame, cold flushed cheeks, lonely snowy street, bittersweet hope, single human character focus", "fairytale_little_match_girl_full": "Little Match Girl inspired poor winter girl, threadbare winter clothes, patched shawl, frayed scarf, worn coat, thin layered clothing, small matchbox held protectively in both hands, tiny warm flame illuminating her face, cold flushed cheeks, slightly trembling hands, breath mist, fragile posture, tired but gentle expression, lonely snowy town street at night, dim window lights in the distance, small warmth in darkness, bittersweet hope and memory, emotional storybook atmosphere, single human character focus", "fairytale_little_match_girl_base": "threadbare winter clothes, patched shawl, frayed scarf, worn coat, thin layered clothing, simple hand-me-down winter outfit, quiet fragile silhouette, humble poor girl design", "fairytale_little_match_girl_custom": "small matchbox held carefully, tiny warm flame illuminating her face, cold flushed cheeks, slightly trembling fingers, breath mist, frost on fabric, tired but gentle expression, bittersweet hopeful warmth", "fairytale_little_match_girl_setting": "lonely snowy town street at night, dim window lights in the distance, cold pavement, drifting snow, winter silence, small warmth in darkness, emotional storybook atmosphere", "fairytale_little_match_girl_quality_safe": "masterpiece, best quality, refined lineart, soft candlelight, soft warm-cold contrast, subdued highlights, matte fabric texture, gentle facial light wrap, atmospheric snow night lighting", "fairytale_little_match_girl_quality_full": "masterpiece, best quality, ultra detailed, cinematic candlelight in winter night, soft warm-cold contrast, atmospheric snow depth, matte fabric texture, gentle facial light wrap, delicate flame glow, bittersweet storybook atmosphere", "fairytale_red_shoes_core": "The Red Shoes inspired tragic dancer heroine, simple performance dress, vivid red shoes motif, involuntary dance symbolism, beautiful melancholic fairytale aura, single human character focus", "fairytale_red_shoes_safe_quality": "The Red Shoes inspired tragic dancer heroine, simple performance dress, vivid red shoes motif, involuntary dance symbolism, beautiful melancholic fairytale aura, refined lineart, dramatic spotlight glow, subdued sheen, single human character focus", "fairytale_red_shoes_2000_limit": "Red Shoes inspired tragic dancer heroine, simple dress, vivid red shoes, involuntary dance motif, melancholic fairytale mood, single human character focus", "fairytale_red_shoes_full": "The Red Shoes inspired tragic dancer heroine, simple but elegant performance dress, striking red shoes, swirling motion, strained dance steps, beautiful yet ominous dance compulsion motif, lonely theatre or town-square atmosphere, dramatic storybook melancholy, single human character focus", "fairytale_red_shoes_base": "graceful dancer silhouette, simple performance dress, ribbon accents, poised theatrical heroine design, elegance touched by sadness", "fairytale_red_shoes_custom": "vivid red shoes, involuntary dancing motion, strained step rhythm, dramatic hem flow, melancholy poise, storybook tragedy details", "fairytale_red_shoes_setting": "quiet theatre stage or moonlit town square, dramatic spotlight, drifting snow or dust motes, tragic fairytale atmosphere", "fairytale_red_shoes_quality_safe": "masterpiece, best quality, refined lineart, graceful motion detail, dramatic spotlight glow, subdued fabric sheen, melancholic stage atmosphere", "fairytale_red_shoes_quality_full": "masterpiece, best quality, ultra detailed, cinematic stage lighting, dynamic motion rendering, subdued highlights, rich fabric folds, tragic atmospheric depth", "fairytale_swan_lake_core": "Swan Lake inspired tragic ballet heroine, graceful swan motif, elegant white performance costume, moonlit lake sorrow, single human character focus", "fairytale_swan_lake_safe_quality": "Swan Lake inspired tragic ballet heroine, graceful swan motif, elegant white performance costume, moonlit lake sorrow, refined lineart, luminous moonlit glow, single human character focus", "fairytale_swan_lake_2000_limit": "Swan Lake inspired tragic heroine, swan motif, white costume, moonlit lake, graceful sorrow, single human character focus", "fairytale_swan_lake_full": "Swan Lake inspired tragic ballet heroine, elegant white performance costume, feathered ornaments, graceful swan-neck poise, moonlit lakeside magic, drifting feathers, mist over the water, tragic romantic beauty, single human character focus", "fairytale_swan_lake_base": "graceful ballet silhouette, elegant white costume, feather details, swan-inspired heroine design, poised lines, tragic beauty", "fairytale_swan_lake_custom": "feathered accessories, crystal tiara, soft wing-like drapery, moonlit shimmer, drifting feathers, melancholic elegance", "fairytale_swan_lake_setting": "moonlit lake, misty water surface, floating feathers, romantic blue night atmosphere, graceful tragic fantasy mood", "fairytale_swan_lake_quality_safe": "masterpiece, best quality, refined lineart, luminous moonlit glow, polished feather texture, soft mist atmosphere, elegant rendering", "fairytale_swan_lake_quality_full": "masterpiece, best quality, ultra detailed, cinematic moonlight, delicate feather detail, atmospheric mist depth, graceful motion rendering, tragic romantic atmosphere", "fairytale_little_mermaid_core": "Little Mermaid inspired tragic sea princess, graceful mermaid tail, seafoam melancholy, yearning gaze toward the surface, moonlit ocean romance, single mermaid character focus", "fairytale_little_mermaid_safe_quality": "Little Mermaid inspired tragic sea princess, graceful mermaid tail, seafoam melancholy, yearning gaze toward the surface, moonlit ocean romance, refined lineart, luminous underwater glow, single mermaid character focus", "fairytale_little_mermaid_2000_limit": "Little Mermaid inspired sea princess, mermaid tail, wistful longing, moonlit sea, bittersweet romance, single mermaid character focus", "fairytale_little_mermaid_full": "Little Mermaid inspired tragic sea princess, graceful mermaid tail, shimmering but gentle scale texture, long flowing hair, wistful expression, bubbles and drifting currents, yearning for the world above, moonlit underwater palace or shoreward sea, bittersweet fairytale romance, single mermaid character focus", "fairytale_little_mermaid_base": "graceful mermaid tail, gentle scale texture, flowing hair, delicate sea princess silhouette, wistful tragic heroine design", "fairytale_little_mermaid_custom": "seafoam sparkle, pearl accessories, drifting bubbles, longing gaze, tide-washed softness, bittersweet romantic details", "fairytale_little_mermaid_setting": "moonlit underwater palace glow or quiet shoreline sea, drifting currents, soft bubbles, distant surface light, wistful fairytale atmosphere", "fairytale_little_mermaid_quality_safe": "masterpiece, best quality, refined lineart, luminous underwater glow, gentle scale sheen, atmospheric water depth, elegant soft rendering", "fairytale_little_mermaid_quality_full": "masterpiece, best quality, ultra detailed, cinematic underwater moonlight, delicate bubble detail, atmospheric current flow, bittersweet oceanic atmosphere, graceful soft highlights", "fairytale_yuki_onna_core": "Yuki Onna inspired ethereal winter beauty, flowing white kimono, frost aura, silent snow night, beautiful sorrow, single human character focus", "fairytale_yuki_onna_safe_quality": "Yuki Onna inspired ethereal winter beauty, flowing white kimono, frost aura, silent snow night, beautiful sorrow, refined lineart, icy translucence, single human character focus", "fairytale_yuki_onna_2000_limit": "Yuki Onna inspired winter beauty, white kimono, frost aura, silent snow night, haunting sorrow, single human character focus", "fairytale_yuki_onna_full": "Yuki Onna inspired ethereal winter beauty, flowing white kimono, pale frost-like elegance, icy breath motif, drifting snow, ghostly stillness, haunted yet beautiful Japanese winter atmosphere, single human character focus", "fairytale_yuki_onna_base": "flowing white kimono, graceful winter silhouette, long dark hair, ethereal folklore beauty design, silent sorrow", "fairytale_yuki_onna_custom": "frost aura, icy breath motif, snow crystal ornaments, ghostly translucence, cold wind drapery, haunting elegance", "fairytale_yuki_onna_setting": "silent snowy night, winter forest or village edge, drifting snow, pale moonlight, eerie beautiful atmosphere, lonely stillness", "fairytale_yuki_onna_quality_safe": "masterpiece, best quality, refined lineart, icy translucence, pale moonlit glow, soft snow atmosphere, elegant restrained rendering", "fairytale_yuki_onna_quality_full": "masterpiece, best quality, ultra detailed, cinematic moonlit snow, atmospheric mist depth, crystal frost detail, haunting winter beauty, subdued luminous atmosphere", "fairytale_earless_hoichi_core": "Earless Hoichi inspired blind biwa storyteller, talisman script motif, haunted temple atmosphere, solemn ghost story mood, single human character focus", "fairytale_earless_hoichi_safe_quality": "Earless Hoichi inspired blind biwa storyteller, talisman script motif, haunted temple atmosphere, solemn ghost story mood, refined lineart, candlelit shadow glow, single human character focus", "fairytale_earless_hoichi_2000_limit": "Earless Hoichi inspired biwa storyteller, talisman script, haunted temple mood, solemn ghost story, single human character focus", "fairytale_earless_hoichi_full": "Earless Hoichi inspired blind biwa storyteller, traditional robes, biwa instrument, sutra and talisman script motif, haunted temple hall at night, candlelight and drifting mist, solemn tragic kaidan atmosphere, single human character focus", "fairytale_earless_hoichi_base": "traditional robe silhouette, calm storyteller posture, biwa musician motif, solemn folklore design, austere elegance", "fairytale_earless_hoichi_custom": "talisman script details, sutra text motif, biwa prop, candlelit temple accents, drifting mist, ghost story atmosphere", "fairytale_earless_hoichi_setting": "haunted temple hall at night, candlelight and shadows, drifting mist, solemn kaidan atmosphere, quiet dread", "fairytale_earless_hoichi_quality_safe": "masterpiece, best quality, refined lineart, atmospheric candlelight, crisp prop detail, restrained shadow depth, moody rendering", "fairytale_earless_hoichi_quality_full": "masterpiece, best quality, ultra detailed, cinematic temple lighting, atmospheric shadow depth, rich calligraphy detail, haunting dramatic mood, austere visual tone", "fairytale_bluebeard_core": "Bluebeard inspired ominous castle heroine, keyring and forbidden chamber motif, locked room mystery, candlelit dread, gothic fairytale atmosphere, single human character focus", "fairytale_bluebeard_safe_quality": "Bluebeard inspired ominous castle heroine, keyring and forbidden chamber motif, locked room mystery, candlelit dread, gothic fairytale atmosphere, refined lineart, moody shadow lighting, single human character focus", "fairytale_bluebeard_2000_limit": "Bluebeard inspired castle heroine, keyring motif, forbidden chamber mystery, candlelit gothic fairytale, single human character focus", "fairytale_bluebeard_full": "Bluebeard inspired ominous castle heroine, dark noble dress, blood-red key or keyring motif, forbidden chamber symbolism, candlelit corridors, locked room mystery, eerie curiosity and dread, gothic fairytale atmosphere, single human character focus", "fairytale_bluebeard_base": "dark noble dress, restrained gothic silhouette, key motif accessories, castle bride aura, elegant but ominous heroine design", "fairytale_bluebeard_custom": "keyring motif, forbidden chamber symbolism, candle wax, shadowed veil or ribbon, eerie curiosity, quiet dread accents", "fairytale_bluebeard_setting": "candlelit castle corridor, locked doors, deep shadows, forbidden chamber atmosphere, gothic fairytale tension", "fairytale_bluebeard_quality_safe": "masterpiece, best quality, refined lineart, candlelit shadow glow, subdued textile sheen, moody gothic atmosphere, elegant restraint", "fairytale_bluebeard_quality_full": "masterpiece, best quality, ultra detailed, cinematic candlelit gothic lighting, rich shadow depth, aged castle detail, ominous atmospheric tone", "fairytale_ugly_duckling_core": "Ugly Duckling inspired lonely outcast girl, plain winter clothes, quiet sadness, swan motif of hidden grace, hopeful transformation, single human character focus", "fairytale_ugly_duckling_safe_quality": "Ugly Duckling inspired lonely outcast girl, plain winter clothes, quiet sadness, swan motif of hidden grace, hopeful transformation, refined lineart, soft wintry glow, single human character focus", "fairytale_ugly_duckling_2000_limit": "Ugly Duckling inspired lonely girl, plain clothes, quiet sadness, hidden grace, hopeful transformation, single human character focus", "fairytale_ugly_duckling_full": "Ugly Duckling inspired lonely outcast girl, plain winter clothes, soft scarf, quiet downcast gaze, subtle feather or swan motif, lonely riverside or snowy village atmosphere, hidden beauty awaiting transformation, bittersweet hopeful fairytale mood, single human character focus", "fairytale_ugly_duckling_base": "plain winter clothes, modest silhouette, soft scarf, humble storybook heroine design, quiet hidden grace", "fairytale_ugly_duckling_custom": "subtle feather motif, swan symbolism, downcast but hopeful gaze, winter softness, transformation hints, bittersweet charm", "fairytale_ugly_duckling_setting": "quiet riverside or snowy village path, pale winter light, gentle drifting snow, lonely but hopeful atmosphere", "fairytale_ugly_duckling_quality_safe": "masterpiece, best quality, refined lineart, soft wintry glow, gentle fabric rendering, subdued highlights, hopeful bittersweet atmosphere", "fairytale_ugly_duckling_quality_full": "masterpiece, best quality, ultra detailed, cinematic pale winter light, atmospheric snow depth, delicate feather detail, soft hopeful melancholy"};
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function patchNode(node) {
        if (!node || typeof node !== "object") return;
        var nodeId = safeText(node.id || node.key || "");
        if (nodeId && Object.prototype.hasOwnProperty.call(overrides, nodeId)) {
          node.val = overrides[nodeId];
        }
        if (isArray(node.children)) {
          for (var i = 0; i < node.children.length; i++) patchNode(node.children[i]);
        }
        if (isArray(node.items)) {
          for (var j = 0; j < node.items.length; j++) patchNode(node.items[j]);
        }
        if (isArray(node.packs)) {
          for (var k = 0; k < node.packs.length; k++) patchNode(node.packs[k]);
        }
      }

      if (isArray(db)) {
        for (var a = 0; a < db.length; a++) patchNode(db[a]);
      } else if (typeof db === "object") {
        var keys = Object.keys(db);
        for (var b = 0; b < keys.length; b++) {
          patchNode(db[keys[b]]);
        }
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyOriginalFairytaleMythPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function titleOf(n) { return safeText((n && (n.title_ja || n.label || n.title || n.ja)) || ""); }
      function findByTitle(list, title) {
        if (!isArray(list)) return null;
        for (var i = 0; i < list.length; i++) {
          if (titleOf(list[i]) === title) return list[i];
        }
        return null;
      }
      function findGroupItemsByTitle(groups, titlePrefix) {
        if (!isArray(groups)) return null;
        for (var i = 0; i < groups.length; i++) {
          var t = titleOf(groups[i]);
          if (t.indexOf(titlePrefix) === 0) {
            if (isArray(groups[i].items)) return groups[i].items;
            if (isArray(groups[i].children)) return groups[i].children;
            if (isArray(groups[i].packs)) return groups[i].packs;
          }
        }
        return null;
      }
      function ensureCategory(children, titleJa, titleEn, collectionId, insertAfterJa) {
        if (!isArray(children)) return null;
        for (var i = 0; i < children.length; i++) {
          var n = children[i];
          if (titleOf(n) === titleJa || safeText(n && n.collection_id) === collectionId) {
            if (!isArray(n.children)) n.children = [];
            return n;
          }
        }
        var node = {
          title_ja: titleJa,
          title_en: titleEn,
          collection_id: collectionId,
          collection_role: "fairytale_theme_group",
          children: []
        };
        var insertAt = children.length;
        if (insertAfterJa) {
          for (var j = 0; j < children.length; j++) {
            if (titleOf(children[j]) === insertAfterJa) {
              insertAt = j + 1;
              break;
            }
          }
        }
        children.splice(insertAt, 0, node);
        return node;
      }
      function hasCollection(list, collectionId) {
        if (!isArray(list)) return false;
        for (var i = 0; i < list.length; i++) {
          if (safeText(list[i] && list[i].collection_id) === collectionId) return true;
        }
        return false;
      }
      function removeByTitleOrCollection(children, titleJa, collectionId) {
        if (!isArray(children)) return;
        for (var i = children.length - 1; i >= 0; i--) {
          var n = children[i];
          if (titleOf(n) === titleJa || safeText(n && n.collection_id) === collectionId) {
            children.splice(i, 1);
          }
        }
      }
      function makeLeaf(id, label, val, desc, linkedIds) {
        return { id: id, label: label, val: val, desc: desc || "", linked_ids: isArray(linkedIds) ? linkedIds : [] };
      }
      function makeGroup(titleJa, titleEn, collectionId, collectionRole, children) {
        return { title_ja: titleJa, title_en: titleEn || "", collection_id: collectionId, collection_role: collectionRole, children: isArray(children) ? children : [] };
      }
      function makeThemeNode(cfg) {
        var stem = safeText(cfg.stem);
        var nameJa = safeText(cfg.nameJa);
        var nameEn = safeText(cfg.nameEn);
        var fusionJa = safeText(cfg.fusionJa);
        var conceptJa = safeText(cfg.conceptJa);
        var baseId = "fairytale_" + stem + "_base";
        var customId = "fairytale_" + stem + "_custom";
        var settingId = "fairytale_" + stem + "_setting";
        var qSafeId = "fairytale_" + stem + "_quality_safe";
        var qFullId = "fairytale_" + stem + "_quality_full";
        return makeGroup(
          nameJa + " セット",
          nameEn + " Set",
          "fairytale_" + stem + "_collection",
          "specialized_roleplay_collection",
          [
            makeGroup(
              nameJa + " 完成セット群",
              nameEn + " Complete Sets",
              "fairytale_" + stem + "_complete_collection",
              "complete_set_group",
              [
                makeLeaf("fairytale_" + stem + "_core", nameJa + " Core Set / " + nameEn + " Core Set", safeText(cfg.core), "完成セット｜" + fusionJa + "｜" + conceptJa, [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_safe_quality", nameJa + " Safe Quality Set / " + nameEn + " Safe Quality Set", safeText(cfg.safe), "高画質セット｜" + fusionJa + "｜" + conceptJa, [baseId, customId, settingId, qSafeId]),
                makeLeaf("fairytale_" + stem + "_2000_limit", nameJa + " 2000 Limit Compatible Set / " + nameEn + " 2000 Limit Compatible Set", safeText(cfg.limit), "2000字制限対応版｜" + fusionJa + "｜" + conceptJa, [baseId, customId, settingId]),
                makeLeaf("fairytale_" + stem + "_full", nameJa + " Full Set / " + nameEn + " Full Set", safeText(cfg.full), "フルセット｜" + fusionJa + "｜" + conceptJa, [baseId, customId, settingId, qFullId])
              ]
            ),
            makeGroup("ベース", "Base", "fairytale_" + stem + "_base_collection", "base_group", [
              makeLeaf(baseId, nameJa + " Base / " + nameEn + " Base", safeText(cfg.base), "人物核・衣装の土台｜" + conceptJa, [])
            ]),
            makeGroup("カスタマイズ", "Customize", "fairytale_" + stem + "_custom_collection", "customize_group", [
              makeLeaf(customId, nameJa + " Customize / " + nameEn + " Customize", safeText(cfg.custom), "象徴物・差分演出｜" + conceptJa, [])
            ]),
            makeGroup("設定", "Setting", "fairytale_" + stem + "_setting_collection", "setting_group", [
              makeLeaf(settingId, nameJa + " Setting / " + nameEn + " Setting", safeText(cfg.setting), "舞台・物語空間｜" + conceptJa, [])
            ]),
            makeGroup("クオリティ", "Quality", "fairytale_" + stem + "_quality_collection", "quality_group", [
              makeLeaf(qSafeId, nameJa + " Safe Quality Detail / " + nameEn + " Safe Quality Detail", safeText(cfg.qualitySafe), "クオリティ補助｜安全強化", []),
              makeLeaf(qFullId, nameJa + " Full Quality Detail / " + nameEn + " Full Quality Detail", safeText(cfg.qualityFull), "クオリティ補助｜描写強化", [])
            ])
          ]
        );
      }

      var ROLEPLAY_PARENT_KEY = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      var FAIRYTALE_TITLE_JA = "📚 童話・昔話なりきり特化コレクション";
      var FAIRYTALE_COLLECTION_ID = "fairytale_folktale_roleplay_collection";
      var rootArr = null;

      if (isArray(db)) {
        rootArr = findGroupItemsByTitle(db, ROLEPLAY_PARENT_KEY) || findGroupItemsByTitle(db, "なりきりおすすめセット (Roleplay Recommended Sets)");
      } else if (typeof db === "object") {
        rootArr = db[ROLEPLAY_PARENT_KEY] || db["なりきりおすすめセット (Roleplay Recommended Sets)"] || db["🎭 なりきりおすすめセット｜神獣・伝説なりきり"];
      }
      if (!isArray(rootArr)) return;

      var roleplayRoot = findByTitle(rootArr, "🎭 なりきり");
      if (!roleplayRoot || !isArray(roleplayRoot.children)) return;

      var fairytaleRoot = null;
      for (var ex = 0; ex < roleplayRoot.children.length; ex++) {
        var exNode = roleplayRoot.children[ex];
        if (titleOf(exNode) === FAIRYTALE_TITLE_JA || safeText(exNode && exNode.collection_id) === FAIRYTALE_COLLECTION_ID) {
          fairytaleRoot = exNode;
          break;
        }
      }
      if (!fairytaleRoot) return;
      if (!isArray(fairytaleRoot.children)) fairytaleRoot.children = [];

      removeByTitleOrCollection(fairytaleRoot.children, "🪞 オリジナル童話・鏡界譚", "fairytale_original_mirror_realm_collection");

      var originalRoot = ensureCategory(
        fairytaleRoot.children,
        "🧬 オリジナル童話・神話",
        "Original Fairy Tales & Mythic Fusions",
        "fairytale_original_myth_root_collection",
        "🎭 寓話・異色童話"
      );
      if (!originalRoot || !isArray(originalRoot.children)) return;

      var themes = [{"stem": "arisiel_mirror_realm", "nameJa": "アリシエル ― 鏡界の覇者", "nameEn": "Arisiel – The Sovereign of the Mirror Realm", "fusionJa": "融合元：不思議の国のアリス + ジャンヌ・ダルク + エクスカリバー伝説", "conceptJa": "鏡界を砕き、神と運命に反逆する聖女剣士", "core": "Arisiel, sovereign of the mirror realm, saint-like Alice heroine, fractured crown, mirror sword Excalion, shattered mirror shards, divine rebellion, beautiful tragic smile, single human character focus", "safe": "Arisiel, sovereign of the mirror realm, saint-like Alice heroine, fractured crown, mirror sword Excalion, shattered mirror shards, divine rebellion, cinematic holy light, glass reflections, refined lineart, single human character focus", "limit": "Arisiel, mirror realm sovereign, saint-like Alice heroine, fractured crown, mirror sword, shattered mirror realm, divine rebellion, beautiful tragic smile, single human character focus", "full": "Arisiel, the sovereign of the mirror realm, saint-like Alice who defies divinity, long fair hair, blue eyes, elegant white lace dress, ribbon headband, fractured crown, mirror sword Excalion, shattered glass and floating mirror shards, burning fate cards, stopped clocks, checkered mirror hall, white rose of madness, holy light and rebellious flame, beautiful tragic smile, single human character focus", "base": "saint-like Alice heroine, long fair hair, blue eyes, elegant white lace dress, ribbon headband, graceful young queen silhouette, holy yet rebellious presence", "custom": "fractured crown, mirror sword Excalion, floating mirror shards, burning fate cards, white rose of madness, holy flame, blade and flame symbolism, serene defiant smile", "setting": "fractured mirror realm, checkered mirror hall, floating playing cards, stopped clocks, broken glass sky, holy radiance and dark fantasy atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, cinematic holy lighting, polished glass reflections, elegant fabric texture, luminous atmosphere", "qualityFull": "masterpiece, best quality, ultra detailed, glass refraction, cinematic lighting, volumetric light, reflective mirror surfaces, rich lace texture, dramatic atmosphere, crystalline shard detail"}, {"stem": "lucia_last_flame", "nameJa": "ルチア ― 最後の雪の火継ぎ姫", "nameEn": "Lucia – The Last Flame in the Snow", "fusionJa": "融合元：マッチ売りの少女 + プロメテウス + 聖火伝説", "conceptJa": "雪の街で神の火を守り継ぐ、貧しくも気高い反逆の灯火", "core": "Lucia, last flame princess in the snow, poor winter girl carrying a sacred stolen flame, patched cloak, ember-like match relic, fragile hope, divine rebellion, snowy night street, single human character focus", "safe": "Lucia, last flame princess in the snow, poor winter girl carrying a sacred stolen flame, patched cloak, ember-like match relic, fragile hope, divine rebellion, snowy night street, refined lineart, soft firelight, single human character focus", "limit": "Lucia, last flame princess, poor winter girl, sacred stolen flame, patched cloak, snowy night, fragile hope, single human character focus", "full": "Lucia, the last flame in the snow, poor winter girl with threadbare winter clothes and patched cloak, carrying the sacred stolen flame in a matchbox-like relic, cold flushed cheeks, warm fire in her hands, snowstorm night street, holy embers against divine cold, fragile but defiant smile, single human character focus", "base": "poor winter girl, threadbare layered clothing, patched cloak, frayed scarf, humble fragile silhouette, quiet but resilient heroine design", "custom": "holy ember flame, matchbox relic, slightly trembling hands, cold flushed cheeks, ash sparks, protectively cupped fire, defiant gentle smile", "setting": "snowy town street at night, dim window lights, drifting snow, sacred warmth in darkness, cold silence, bittersweet mythic atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, soft firelight, matte fabric texture, gentle warm-cold contrast, atmospheric snow night lighting", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic snow-night lighting, delicate ember glow, atmospheric winter depth, soft fabric texture, bittersweet sacred atmosphere"}, {"stem": "roselia_thorn_clock", "nameJa": "ローゼリア ― 茨時計の聖女", "nameEn": "Roselia – The Saint of the Thorn Clock", "fusionJa": "融合元：眠れる森の姫 + クロノス + 茨冠の聖遺物", "conceptJa": "止まった世界の時間を身に封じた、眠りと目覚めの聖女姫", "core": "Roselia, saint of the thorn clock, sleeping beauty fused with sacred timekeeper, thorn crown, stopped clock motif, rose and spindle relics, sealed world slumber, single human character focus", "safe": "Roselia, saint of the thorn clock, sleeping beauty fused with sacred timekeeper, thorn crown, stopped clock motif, rose and spindle relics, sealed world slumber, refined lineart, luminous moonlit glow, single human character focus", "limit": "Roselia, thorn clock saint, sleeping beauty motif, thorn crown, stopped clocks, sealed slumber, single human character focus", "full": "Roselia, the saint of the thorn clock, sleeping beauty princess merged with sacred timekeeper, elegant pale gown, thorn crown, spindle relic, stopped clocks and golden second hands, rose coffin-like dais, world-sealing slumber, beautiful awakening tension, single human character focus", "base": "sleeping saint princess silhouette, elegant pale gown, rose motifs, delicate crown, holy and melancholic heroine design", "custom": "thorn crown, spindle relic, stopped clocks, golden second hands, thorn-vine drapery, half-lidded sacred gaze, awakening aura", "setting": "moonlit rose chamber, thorn-wrapped palace, frozen time, silent petals, sacred slumber atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, luminous moonlit glow, polished rose detail, soft restrained highlights, storybook sacred atmosphere", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic moonlight, ornate clockwork detail, atmospheric thorn depth, rich fabric and petal detail, suspended-time mood"}, {"stem": "lunakaguya_moon_court", "nameJa": "ルナカグヤ ― 月宮を追われし竹姫", "nameEn": "Lunakaguya – The Exiled Princess of the Moon Court", "fusionJa": "融合元：かぐや姫 + 月の女神 + 天羽衣伝説", "conceptJa": "月の裁きと地上への別離を背負う、追放された月宮の姫", "core": "Lunakaguya, exiled princess of the moon court, bamboo-born moon maiden, celestial feather robe, silver crown, moonlit elegance, lonely divine judgment, single human character focus", "safe": "Lunakaguya, exiled princess of the moon court, bamboo-born moon maiden, celestial feather robe, silver crown, moonlit elegance, lonely divine judgment, refined lineart, luminous silver glow, single human character focus", "limit": "Lunakaguya, exiled moon princess, bamboo maiden, feather robe, moonlit judgment, lonely elegance, single human character focus", "full": "Lunakaguya, the exiled princess of the moon court, bamboo-born moon maiden in layered celestial robes, silver moon crown, glowing feather mantle, moonlit bamboo grove, distant palace of the moon, sorrowful farewell and divine judgment, single human character focus", "base": "moon princess silhouette, layered celestial kimono, elegant sleeves, silver ornaments, graceful noble heroine design", "custom": "feather robe, moon crown, glowing bamboo fragments, silver hair ornaments, celestial veil, distant sorrowful gaze", "setting": "moonlit bamboo grove, lunar palace glow, drifting silver mist, night of farewell, sacred court atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, luminous silver glow, elegant textile rendering, atmospheric moonlit depth", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic moonlight, rich robe texture, atmospheric bamboo mist, delicate celestial highlights, divine melancholy"}, {"stem": "vermelina_wolf_moon", "nameJa": "ヴェルメリーナ ― 狼月の赤き狩人", "nameEn": "Vermelina – The Red Huntress of the Wolf Moon", "fusionJa": "融合元：赤ずきん + フェンリル + 狩猟女神アルテミス", "conceptJa": "狼の呪いと狩人の誓いを背負う、森を駆ける赤き月の戦姫", "core": "Vermelina, red huntress of the wolf moon, red hooded huntress, silver bow, wolf-shadow curse, moonlit forest, sacred hunt, single human character focus", "safe": "Vermelina, red huntress of the wolf moon, red hooded huntress, silver bow, wolf-shadow curse, moonlit forest, sacred hunt, refined lineart, cold moonlight, single human character focus", "limit": "Vermelina, red hooded huntress, wolf moon curse, silver bow, moonlit forest, single human character focus", "full": "Vermelina, the red huntress of the wolf moon, red hooded warrior maiden, silver bow and hunting dagger, wolf-shadow curse at her back, blood-red ribbons, moonlit deep forest, sacred hunt under a full moon, fierce yet beautiful heroine, single human character focus", "base": "red hooded huntress silhouette, agile warrior attire, boots and belts, graceful battle heroine design", "custom": "silver bow, wolf-shadow aura, blood-red ribbons, hunting dagger, moon sigils, feral protective gaze", "setting": "moonlit forest, mist between trees, full wolf moon, sacred hunting ground atmosphere, quiet danger", "qualitySafe": "masterpiece, best quality, refined lineart, cold moonlight, crisp weapon detail, restrained sheen, dramatic forest atmosphere", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic night lighting, atmospheric forest depth, moonlit mist, dynamic cloth movement, fierce fairytale mood"}, {"stem": "serephine_abyss_lyre", "nameJa": "セレフィーネ ― 深淵に沈む無声の竪琴", "nameEn": "Serephine – The Voiceless Lyre of the Abyss", "fusionJa": "融合元：人魚姫 + オルフェウス + リヴァイアサン", "conceptJa": "声を奪われた歌姫が、深海の王権と愛の喪失を抱く悲歌の人魚姫", "core": "Serephine, voiceless lyre of the abyss, tragic mermaid princess, silent songstress, lyre motif, abyssal royalty, yearning love and sorrow, single mermaid character focus", "safe": "Serephine, voiceless lyre of the abyss, tragic mermaid princess, silent songstress, lyre motif, abyssal royalty, yearning love and sorrow, refined lineart, luminous underwater glow, single mermaid character focus", "limit": "Serephine, voiceless mermaid princess, lyre motif, abyssal royalty, silent sorrow, single mermaid character focus", "full": "Serephine, the voiceless lyre of the abyss, tragic mermaid princess with graceful tail and flowing hair, silent songstress carrying a lyre motif, abyssal palace, leviathan sigils, drifting bubbles and dark currents, love lost to the surface world, single mermaid character focus", "base": "tragic mermaid princess silhouette, graceful tail, flowing hair, delicate sea royal attire, sorrowful heroine design", "custom": "lyre motif, leviathan sigils, pearl and shell ornaments, silent singing expression, dark current ribbons, yearning gaze upward", "setting": "abyssal palace or moonlit deep sea, drifting bubbles, dark currents, distant surface light, elegiac underwater atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, luminous underwater glow, gentle scale sheen, atmospheric water depth, melancholic elegance", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic underwater moonlight, rich bubble detail, atmospheric currents, elegant abyssal reflections, tragic oceanic grandeur"}, {"stem": "odettelia_swan_valkyrie", "nameJa": "オデットリア ― 月湖の白鳥戦乙女", "nameEn": "Odettelia – The Swan Valkyrie of the Moonlit Lake", "fusionJa": "融合元：白鳥の湖 + ワルキューレ + 天秤の女神", "conceptJa": "湖に沈む魂を裁き導く、月光の湖に舞う白鳥の戦乙女", "core": "Odettelia, swan valkyrie of the moonlit lake, tragic ballet warrior maiden, white feathers, silver spear, moonlit judgment, single human character focus", "safe": "Odettelia, swan valkyrie of the moonlit lake, tragic ballet warrior maiden, white feathers, silver spear, moonlit judgment, refined lineart, luminous lake glow, single human character focus", "limit": "Odettelia, swan valkyrie, white feathers, silver spear, moonlit lake, tragic judgment, single human character focus", "full": "Odettelia, the swan valkyrie of the moonlit lake, elegant white feathered battle costume, silver spear, moon crown, graceful swan poise, reflective lake surface, drifting feathers and mist, warrior of tragic judgment and moonlit romance, single human character focus", "base": "white feathered warrior silhouette, elegant ballet-inflected battle costume, poised heroine design, noble tragic beauty", "custom": "silver spear, moon crown, feather aura, swan-neck posture, reflective water shimmer, solemn judging gaze", "setting": "moonlit lake, floating feathers, blue mist, mirrored water surface, sacred battlefield of souls atmosphere", "qualitySafe": "masterpiece, best quality, refined lineart, luminous lake glow, delicate feather texture, soft mist atmosphere, elegant severity", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic moonlight, atmospheric water depth, drifting feather detail, polished weapon rendering, tragic mythic atmosphere"}, {"stem": "noctilia_forbidden_room", "nameJa": "ノクティリア ― 禁室の鍵を持つ姫", "nameEn": "Noctilia – The Keybearer of the Forbidden Room", "fusionJa": "融合元：青ひげ + パンドラの箱 + 禁断の扉神話", "conceptJa": "開けてはならない真実に手を伸ばす、古城の禁忌を継ぐ鍵姫", "core": "Noctilia, keybearer of the forbidden room, gothic castle princess, keyring relic, forbidden chamber mystery, blue rose motif, quiet dread, single human character focus", "safe": "Noctilia, keybearer of the forbidden room, gothic castle princess, keyring relic, forbidden chamber mystery, blue rose motif, quiet dread, refined lineart, candlelit shadows, single human character focus", "limit": "Noctilia, forbidden room keybearer, gothic princess, keyring relic, forbidden chamber mystery, single human character focus", "full": "Noctilia, the keybearer of the forbidden room, gothic castle princess in a dark noble dress, blue rose and red key motifs, forbidden chamber symbolism, sealed box relic, candlelit corridors and locked doors, elegant curiosity mixed with dread, single human character focus", "base": "gothic princess silhouette, dark noble dress, elegant restraint, castle heroine design, mysterious beauty", "custom": "keyring relic, sealed box motif, blue rose accessories, blood-red key, shadow veil, inquisitive yet fearful gaze", "setting": "candlelit castle corridor, locked doors, forbidden chamber atmosphere, deep shadows, secret-laden gothic air", "qualitySafe": "masterpiece, best quality, refined lineart, candlelit shadow glow, restrained textile sheen, moody gothic atmosphere", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic candlelit gothic lighting, rich shadow depth, aged castle detail, ominous storybook tension"}, {"stem": "mirabel_ashborn_swan", "nameJa": "ミラベル ― 灰より生まれた夜明けの白鳥", "nameEn": "Mirabel – The Ashborn Swan of Dawn", "fusionJa": "融合元：みにくいアヒルの子 + 不死鳥 + 変身譚", "conceptJa": "孤独と劣等感を焼き尽くし、夜明けに再誕する灰の白鳥姫", "core": "Mirabel, ashborn swan of dawn, lonely outcast girl, swan motif, phoenix rebirth, dawn awakening, hidden grace, single human character focus", "safe": "Mirabel, ashborn swan of dawn, lonely outcast girl, swan motif, phoenix rebirth, dawn awakening, hidden grace, refined lineart, pale sunrise glow, single human character focus", "limit": "Mirabel, ashborn swan, lonely girl, swan motif, phoenix rebirth, dawn awakening, single human character focus", "full": "Mirabel, the ashborn swan of dawn, lonely outcast girl in plain clothes with soft feather motifs, white swan grace emerging from ash and ember, lakeside dawn, broken shell fragments, phoenix-like rebirth and quiet resolve, single human character focus", "base": "plain but graceful heroine silhouette, modest clothes, soft scarf, hidden nobility, quiet outcast beauty", "custom": "swan feather motifs, ash sparks, broken shell fragments, dawn aura, hopeful gaze, rebirth symbolism", "setting": "lakeside or snowy village edge at dawn, pale light, drifting feathers and ash, rebirth atmosphere, hopeful solitude", "qualitySafe": "masterpiece, best quality, refined lineart, pale sunrise glow, gentle fabric rendering, subdued highlights, hopeful melancholy", "qualityFull": "masterpiece, best quality, ultra detailed, cinematic dawn lighting, atmospheric mist and ash, delicate feather detail, soft rebirth atmosphere"}];
      for (var i = 0; i < themes.length; i++) {
        var collectionId = "fairytale_" + safeText(themes[i].stem) + "_collection";
        if (hasCollection(originalRoot.children, collectionId)) continue;
        originalRoot.children.push(makeThemeNode(themes[i]));
      }

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyLuciaHolyFlameRefinementPatch(db) {
    try {
      if (!db) return;
      var overrides = {"fairytale_lucia_last_flame_core": "Lucia, the last flame in the snow, poor winter girl chosen by a sacred flame, threadbare winter clothes, patched cloak, frayed scarf, small holy ember reliquary held carefully in both hands, blue-white-gold sacred flame, divine fire glowing like a tiny altar, floating holy embers, fragile hope, snowy night street, single human character focus", "fairytale_lucia_last_flame_safe_quality": "Lucia, the last flame in the snow, poor winter girl chosen by a sacred flame, threadbare winter clothes, patched cloak, frayed scarf, small holy ember reliquary held carefully in both hands, blue-white-gold sacred flame, divine fire glowing like a tiny altar, floating holy embers, gentle halo-like glow, snowy night street, refined lineart, soft sacred firelight, single human character focus", "fairytale_lucia_last_flame_2000_limit": "Lucia, last flame in the snow, poor winter girl, chosen firekeeper, sacred ember reliquary, blue-white-gold holy flame, snowy night, fragile hope, single human character focus", "fairytale_lucia_last_flame_full": "Lucia, the last flame in the snow, poor winter girl chosen by the holy fire, threadbare winter clothes, patched cloak, frayed scarf, sacred ember reliquary held protectively in both hands, blue-white-gold holy flame, miracle fire with feather-like sparks and halo-like glow, blessed flame illuminating her tearful face, floating holy embers, cold flushed cheeks, slightly trembling hands, fragile but defiant smile, snowy town street at night, dim window lights, sacred warmth in darkness, divine winter melancholy, mythic firekeeping atmosphere, single human character focus", "fairytale_lucia_last_flame_base": "poor winter girl, threadbare layered clothing, patched cloak, frayed scarf, humble fragile silhouette, quiet but resilient heroine design, chosen firekeeper", "fairytale_lucia_last_flame_custom": "small holy ember reliquary, blue-white-gold sacred flame, floating holy embers, halo-like glow, feather-like sparks, cold flushed cheeks, slightly trembling hands, protectively cupped fire, gentle but defiant smile", "fairytale_lucia_last_flame_setting": "snowy town street at night, dim window lights, drifting snow, sacred warmth in darkness, silent pilgrimage-like night, divine winter melancholy, mythic firekeeping atmosphere", "fairytale_lucia_last_flame_quality_safe": "masterpiece, best quality, refined lineart, soft sacred firelight, blue-white-gold flame glow, gentle halo-like illumination, matte fabric texture, atmospheric snow night lighting, divine warmth in the cold", "fairytale_lucia_last_flame_quality_full": "masterpiece, best quality, ultra detailed, cinematic snow-night lighting, blue-white-gold holy flame, delicate halo glow, feather-like sparks, atmospheric winter depth, soft fabric texture, sacred reliquary detail, bittersweet divine atmosphere"};
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function patchNode(node) {
        if (!node || typeof node !== "object") return;
        var nodeId = safeText(node.id || node.key || "");
        if (nodeId && Object.prototype.hasOwnProperty.call(overrides, nodeId)) {
          node.val = overrides[nodeId];
        }
        if (isArray(node.children)) {
          for (var i = 0; i < node.children.length; i++) patchNode(node.children[i]);
        }
        if (isArray(node.items)) {
          for (var j = 0; j < node.items.length; j++) patchNode(node.items[j]);
        }
        if (isArray(node.packs)) {
          for (var k = 0; k < node.packs.length; k++) patchNode(node.packs[k]);
        }
      }
      if (isArray(db)) {
        for (var a = 0; a < db.length; a++) patchNode(db[a]);
      } else if (typeof db === "object") {
        var keys = Object.keys(db);
        for (var b = 0; b < keys.length; b++) patchNode(db[keys[b]]);
      }
      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyRoseliaDualFullSetPatch(db) {
    try {
      if (!db) return;
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function safeId(v) { return safeText(v || ""); }
      function findNodeByCollectionId(node, collectionId) {
        if (!node || typeof node !== "object") return null;
        if (safeId(node.collection_id) === collectionId) return node;
        var lists = [];
        if (isArray(node.children)) lists.push(node.children);
        if (isArray(node.items)) lists.push(node.items);
        if (isArray(node.packs)) lists.push(node.packs);
        for (var i = 0; i < lists.length; i++) {
          var arr = lists[i];
          for (var j = 0; j < arr.length; j++) {
            var found = findNodeByCollectionId(arr[j], collectionId);
            if (found) return found;
          }
        }
        return null;
      }
      function findNodeById(node, id) {
        if (!node || typeof node !== "object") return null;
        if (safeId(node.id || node.key) === id) return node;
        var lists = [];
        if (isArray(node.children)) lists.push(node.children);
        if (isArray(node.items)) lists.push(node.items);
        if (isArray(node.packs)) lists.push(node.packs);
        for (var i = 0; i < lists.length; i++) {
          var arr = lists[i];
          for (var j = 0; j < arr.length; j++) {
            var found = findNodeById(arr[j], id);
            if (found) return found;
          }
        }
        return null;
      }
      function patchById(node, id, val, desc) {
        var target = findNodeById(node, id);
        if (!target) return null;
        target.val = val;
        if (typeof desc === "string" && desc) target.desc = desc;
        return target;
      }
      function hasId(children, id) {
        if (!isArray(children)) return false;
        for (var i = 0; i < children.length; i++) {
          if (safeId(children[i] && (children[i].id || children[i].key)) === id) return true;
        }
        return false;
      }
      function pushLeaf(children, leaf) {
        if (!isArray(children)) return;
        if (hasId(children, safeId(leaf && leaf.id))) return;
        children.push(leaf);
      }
      function makeLeaf(id, label, val, desc, linkedIds) {
        return { id: id, label: label, val: val, desc: desc || "", linked_ids: isArray(linkedIds) ? linkedIds : [] };
      }

      var root = db;
      var collection = findNodeByCollectionId(root, "fairytale_roselia_thorn_clock_collection");
      if (!collection) return;

      patchById(
        collection,
        "fairytale_roselia_thorn_clock_base",
        "sleeping saint princess silhouette, elegant pale gown, soft rose motifs, delicate crown, sacred slumber heroine design, repose-focused storybook beauty",
        "人物核・衣装の土台｜止まった世界の時間を身に封じた、眠りと目覚めの聖女姫"
      );

      patchById(
        collection,
        "fairytale_roselia_thorn_clock_custom",
        "thorn crown, spindle relic, stopped clocks, golden second hands, thorn-vine drapery, suspended-time aura, slumber symbolism, drowsy sacred expression",
        "象徴物・差分演出｜止まった世界の時間を身に封じた、眠りと目覚めの聖女姫"
      );

      patchById(
        collection,
        "fairytale_roselia_thorn_clock_setting",
        "moonlit rose chamber, thorn-wrapped palace, frozen time, silent petals, clock-face dais, sacred slumber atmosphere",
        "舞台・物語空間｜止まった世界の時間を身に封じた、眠りと目覚めの聖女姫"
      );

      patchById(
        collection,
        "fairytale_roselia_thorn_clock_full",
        "Roselia, the saint of the thorn clock, sleeping beauty princess merged with a sacred timekeeper, elegant pale gown, thorn crown, spindle relic, stopped clocks and golden second hands, clock-face dais and moonlit rose chamber, sacred slumber and awakening tension, suspended time, single human character focus",
        "フルセット｜融合元：眠れる森の姫 + クロノス + 茨冠の聖遺物｜止まった世界の時間を身に封じた、眠りと目覚めの聖女姫"
      );

      var completeGroup = findNodeByCollectionId(collection, "fairytale_roselia_thorn_clock_complete_collection");
      var customizeGroup = findNodeByCollectionId(collection, "fairytale_roselia_thorn_clock_custom_collection");
      var settingGroup = findNodeByCollectionId(collection, "fairytale_roselia_thorn_clock_setting_collection");

      if (!completeGroup || !isArray(completeGroup.children)) return;
      if (!customizeGroup || !isArray(customizeGroup.children)) return;
      if (!settingGroup || !isArray(settingGroup.children)) return;

      pushLeaf(customizeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_slumber_pose",
        "ローゼリア 眠り寄りポーズ / Roselia Slumber Pose",
        "reclining on a thorn-wreathed clockwork bed, rose coffin-like dais, hands folded softly, eyes closed, serene sleeping expression, body relaxed in sacred sleep",
        "差分ポーズ｜完全な眠り寄り",
        []
      ));

      pushLeaf(customizeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_awakening_pose",
        "ローゼリア 目覚めかけポーズ / Roselia Awakening Pose",
        "resting on a rose coffin-like clock altar, sleepy half-open eyes, barely awakened expression, gently rising from slumber, quiet sacred tension",
        "差分ポーズ｜目覚めかけ寄り",
        []
      ));

      pushLeaf(settingGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_slumber_stage",
        "ローゼリア 眠り寄り舞台 / Roselia Slumber Stage",
        "thorn-wreathed clockwork bed, rose coffin-like dais, moonlit rose chamber, frozen time, silent petals, unmoving second hands, sacred slumber atmosphere",
        "舞台差分｜完全な眠り寄り",
        []
      ));

      pushLeaf(settingGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_awakening_stage",
        "ローゼリア 目覚めかけ舞台 / Roselia Awakening Stage",
        "clock-face sleeping altar, moonlit rose chamber, second hands beginning to move, drifting petals, thawing suspended time, silent awakening atmosphere",
        "舞台差分｜目覚めかけ寄り",
        []
      ));

      pushLeaf(completeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_full_slumber",
        "ローゼリア Slumber Full Set / Roselia Slumber Full Set",
        "Roselia, the saint of the thorn clock, sleeping beauty princess merged with a sacred timekeeper, reclining on a thorn-wreathed clockwork bed, rose coffin-like dais, elegant pale gown, thorn crown, spindle relic resting beside her, stopped clocks and golden second hands, moonlit rose chamber, hands folded softly, eyes closed, serene sleeping expression, suspended time, silent petals, sacred slumber atmosphere, single human character focus",
        "フルセット｜眠り寄り｜融合元：眠れる森の姫 + クロノス + 茨冠の聖遺物",
        [
          "fairytale_roselia_thorn_clock_base",
          "fairytale_roselia_thorn_clock_custom",
          "fairytale_roselia_thorn_clock_slumber_pose",
          "fairytale_roselia_thorn_clock_setting",
          "fairytale_roselia_thorn_clock_slumber_stage",
          "fairytale_roselia_thorn_clock_quality_full"
        ]
      ));

      pushLeaf(completeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_full_awakening",
        "ローゼリア Awakening Full Set / Roselia Awakening Full Set",
        "Roselia, the saint of the thorn clock, sleeping beauty princess merged with a sacred timekeeper, resting on a rose coffin-like clock altar, elegant pale gown, thorn crown, spindle relic, stopped clocks and golden second hands, moonlit rose chamber, sleepy half-open eyes, barely awakened expression, quiet sacred tension, second hands beginning to move, drifting petals, suspended time beginning to stir, single human character focus",
        "フルセット｜目覚めかけ寄り｜融合元：眠れる森の姫 + クロノス + 茨冠の聖遺物",
        [
          "fairytale_roselia_thorn_clock_base",
          "fairytale_roselia_thorn_clock_custom",
          "fairytale_roselia_thorn_clock_awakening_pose",
          "fairytale_roselia_thorn_clock_setting",
          "fairytale_roselia_thorn_clock_awakening_stage",
          "fairytale_roselia_thorn_clock_quality_full"
        ]
      ));

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyRoseliaLinkedIdsRepairPatch(db) {
    try {
      if (!db) return;
      var collectionId = "fairytale_roselia_thorn_clock_collection";
      var roleMap = {"fairytale_roselia_thorn_clock_core": "complete_set", "fairytale_roselia_thorn_clock_safe_quality": "complete_set", "fairytale_roselia_thorn_clock_2000_limit": "complete_set", "fairytale_roselia_thorn_clock_full": "complete_set", "fairytale_roselia_thorn_clock_full_slumber": "complete_set", "fairytale_roselia_thorn_clock_full_awakening": "complete_set", "fairytale_roselia_thorn_clock_base": "base", "fairytale_roselia_thorn_clock_custom": "custom", "fairytale_roselia_thorn_clock_slumber_pose": "custom", "fairytale_roselia_thorn_clock_awakening_pose": "custom", "fairytale_roselia_thorn_clock_setting": "setting", "fairytale_roselia_thorn_clock_slumber_stage": "setting", "fairytale_roselia_thorn_clock_awakening_stage": "setting", "fairytale_roselia_thorn_clock_quality_safe": "quality_detail", "fairytale_roselia_thorn_clock_quality_full": "quality_detail"};
      var linkMap = {"fairytale_roselia_thorn_clock_core": ["fairytale_roselia_thorn_clock_base", "fairytale_roselia_thorn_clock_custom", "fairytale_roselia_thorn_clock_setting"], "fairytale_roselia_thorn_clock_safe_quality": ["fairytale_roselia_thorn_clock_base", "fairytale_roselia_thorn_clock_custom", "fairytale_roselia_thorn_clock_setting", "fairytale_roselia_thorn_clock_quality_safe"], "fairytale_roselia_thorn_clock_2000_limit": ["fairytale_roselia_thorn_clock_base", "fairytale_roselia_thorn_clock_custom", "fairytale_roselia_thorn_clock_setting"], "fairytale_roselia_thorn_clock_full": ["fairytale_roselia_thorn_clock_base", "fairytale_roselia_thorn_clock_custom", "fairytale_roselia_thorn_clock_setting", "fairytale_roselia_thorn_clock_quality_full"], "fairytale_roselia_thorn_clock_full_slumber": ["fairytale_roselia_thorn_clock_base", "fairytale_roselia_thorn_clock_custom", "fairytale_roselia_thorn_clock_slumber_pose", "fairytale_roselia_thorn_clock_setting", "fairytale_roselia_thorn_clock_slumber_stage", "fairytale_roselia_thorn_clock_quality_full"], "fairytale_roselia_thorn_clock_full_awakening": ["fairytale_roselia_thorn_clock_base", "fairytale_roselia_thorn_clock_custom", "fairytale_roselia_thorn_clock_awakening_pose", "fairytale_roselia_thorn_clock_setting", "fairytale_roselia_thorn_clock_awakening_stage", "fairytale_roselia_thorn_clock_quality_full"]};
      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function patchNode(node) {
        if (!node || typeof node !== "object") return;
        var nodeId = safeText(node.id || node.key || "");
        if (nodeId && Object.prototype.hasOwnProperty.call(roleMap, nodeId)) {
          node.collection_id = collectionId;
          node.collection_role = roleMap[nodeId];
          if (Object.prototype.hasOwnProperty.call(linkMap, nodeId)) {
            node.linked_ids = linkMap[nodeId];
          }
        }
        if (isArray(node.children)) {
          for (var i = 0; i < node.children.length; i++) patchNode(node.children[i]);
        }
        if (isArray(node.items)) {
          for (var j = 0; j < node.items.length; j++) patchNode(node.items[j]);
        }
        if (isArray(node.packs)) {
          for (var k = 0; k < node.packs.length; k++) patchNode(node.packs[k]);
        }
      }
      if (isArray(db)) {
        for (var a = 0; a < db.length; a++) patchNode(db[a]);
      } else if (typeof db === "object") {
        var keys = Object.keys(db);
        for (var b = 0; b < keys.length; b++) patchNode(db[keys[b]]);
      }
      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
  }


  function applyRoseliaDualFullSetPatchV2(db) {
    try {
      if (!db) return;
      var COLLECTION_ID = "fairytale_roselia_thorn_clock_collection";

      function isArray(v) { return Object.prototype.toString.call(v) === "[object Array]"; }
      function isObj(v) { return v && typeof v === "object"; }
      function text(v) { return safeText(v || ""); }

      function eachChildContainer(node, fn) {
        if (!isObj(node)) return;
        if (isArray(node.children)) fn(node.children);
        if (isArray(node.items)) fn(node.items);
        if (isArray(node.packs)) fn(node.packs);
        if (!isArray(node)) {
          var keys = Object.keys(node);
          for (var i = 0; i < keys.length; i++) {
            var v = node[keys[i]];
            if (isArray(v)) fn(v);
            else if (isObj(v) && (v.children || v.items || v.packs || v.collection_id || v.id || v.label || v.title_ja)) {
              eachChildContainer(v, fn);
            }
          }
        }
      }

      function walk(node, fn) {
        if (!isObj(node)) return;
        if (isArray(node)) {
          for (var ai = 0; ai < node.length; ai++) walk(node[ai], fn);
          return;
        }
        fn(node);
        if (isArray(node.children)) for (var ci = 0; ci < node.children.length; ci++) walk(node.children[ci], fn);
        if (isArray(node.items)) for (var ii = 0; ii < node.items.length; ii++) walk(node.items[ii], fn);
        if (isArray(node.packs)) for (var pi = 0; pi < node.packs.length; pi++) walk(node.packs[pi], fn);
        var keys = Object.keys(node);
        for (var ki = 0; ki < keys.length; ki++) {
          var v = node[keys[ki]];
          if (isArray(v)) {
            for (var vi = 0; vi < v.length; vi++) walk(v[vi], fn);
          } else if (isObj(v) && (v.children || v.items || v.packs || v.collection_id || v.id || v.label || v.title_ja)) {
            walk(v, fn);
          }
        }
      }

      function findByCollectionId(root, collectionId) {
        var found = null;
        walk(root, function(n) {
          if (!found && text(n.collection_id) === collectionId) found = n;
        });
        return found;
      }

      function findById(root, id) {
        var found = null;
        walk(root, function(n) {
          if (!found && text(n.id || n.key || n.pack_id) === id) found = n;
        });
        return found;
      }

      function findDirectGroup(collection, groupCollectionId, fallbackTitle) {
        if (!collection || !isArray(collection.children)) return null;
        for (var i = 0; i < collection.children.length; i++) {
          var n = collection.children[i];
          var title = text(n.title_ja || n.label || n.title || n.ja);
          if (text(n.collection_id) === groupCollectionId || title === fallbackTitle) {
            if (!isArray(n.children)) n.children = [];
            return n;
          }
        }
        return null;
      }

      function ensureLeafMeta(leaf, role) {
        if (!leaf) return leaf;
        leaf.collection_id = COLLECTION_ID;
        leaf.collection_role = role;
        return leaf;
      }

      function makeLeaf(id, label, val, desc, role, linkedIds) {
        return ensureLeafMeta({
          id: id,
          label: label,
          val: val,
          desc: desc || "",
          linked_ids: isArray(linkedIds) ? linkedIds : []
        }, role);
      }

      function removeIds(arr, ids) {
        if (!isArray(arr)) return;
        for (var i = arr.length - 1; i >= 0; i--) {
          var id = text(arr[i] && (arr[i].id || arr[i].key || arr[i].pack_id));
          if (ids.indexOf(id) !== -1) arr.splice(i, 1);
        }
      }

      function upsertLeaf(arr, leaf, afterId) {
        if (!isArray(arr) || !leaf) return;
        removeIds(arr, [leaf.id]);
        var insertAt = arr.length;
        if (afterId) {
          for (var i = 0; i < arr.length; i++) {
            var id = text(arr[i] && (arr[i].id || arr[i].key || arr[i].pack_id));
            if (id === afterId) {
              insertAt = i + 1;
              break;
            }
          }
        }
        arr.splice(insertAt, 0, leaf);
      }

      var collection = findByCollectionId(db, COLLECTION_ID);
      if (!collection) return;

      var completeGroup = findDirectGroup(collection, "fairytale_roselia_thorn_clock_complete_collection", "ローゼリア ― 茨時計の聖女 完成セット群");
      var customizeGroup = findDirectGroup(collection, "fairytale_roselia_thorn_clock_custom_collection", "カスタマイズ");
      var settingGroup = findDirectGroup(collection, "fairytale_roselia_thorn_clock_setting_collection", "設定");
      var qualityGroup = findDirectGroup(collection, "fairytale_roselia_thorn_clock_quality_collection", "クオリティ");

      if (!completeGroup || !customizeGroup || !settingGroup) return;

      var base = findById(collection, "fairytale_roselia_thorn_clock_base");
      if (base) {
        base.val = "sleeping saint princess silhouette, elegant pale gown, soft rose motifs, delicate crown, sacred slumber heroine design, repose-focused storybook beauty";
        base.desc = "人物核・衣装の土台｜眠りと目覚めを描くためのローゼリア共通ベース";
        ensureLeafMeta(base, "base");
      }

      var custom = findById(collection, "fairytale_roselia_thorn_clock_custom");
      if (custom) {
        custom.val = "thorn crown, spindle relic, stopped clocks, golden second hands, thorn-vine drapery, suspended-time aura, slumber symbolism, drowsy sacred expression";
        custom.desc = "象徴物・差分演出｜茨冠・糸車・止まった時計を共通で補強";
        ensureLeafMeta(custom, "custom");
      }

      var setting = findById(collection, "fairytale_roselia_thorn_clock_setting");
      if (setting) {
        setting.val = "moonlit rose chamber, thorn-wrapped palace, frozen time, silent petals, clock-face dais, sacred slumber atmosphere";
        setting.desc = "舞台・物語空間｜時計寝台と薔薇の部屋へ寄せる";
        ensureLeafMeta(setting, "setting");
      }

      var qSafe = findById(collection, "fairytale_roselia_thorn_clock_quality_safe");
      if (qSafe) ensureLeafMeta(qSafe, "quality_detail");
      var qFull = findById(collection, "fairytale_roselia_thorn_clock_quality_full");
      if (qFull) ensureLeafMeta(qFull, "quality_detail");

      removeIds(completeGroup.children, [
        "fairytale_roselia_thorn_clock_full_slumber",
        "fairytale_roselia_thorn_clock_full_awakening"
      ]);
      removeIds(customizeGroup.children, [
        "fairytale_roselia_thorn_clock_slumber_pose",
        "fairytale_roselia_thorn_clock_awakening_pose"
      ]);
      removeIds(settingGroup.children, [
        "fairytale_roselia_thorn_clock_slumber_stage",
        "fairytale_roselia_thorn_clock_awakening_stage"
      ]);

      upsertLeaf(customizeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_slumber_pose",
        "ローゼリア 眠り寄りポーズ / Roselia Slumber Pose",
        "reclining on a thorn-wreathed clockwork bed, rose coffin-like dais, hands folded softly, eyes closed, serene sleeping expression, body relaxed in sacred sleep",
        "差分ポーズ｜完全な眠り寄り",
        "custom",
        []
      ), "fairytale_roselia_thorn_clock_custom");

      upsertLeaf(customizeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_awakening_pose",
        "ローゼリア 目覚めかけポーズ / Roselia Awakening Pose",
        "resting on a rose coffin-like clock altar, sleepy half-open eyes, barely awakened expression, gently rising from slumber, quiet sacred tension",
        "差分ポーズ｜目覚めかけ寄り",
        "custom",
        ["fairytale_roselia_thorn_clock_custom"]
      ), "fairytale_roselia_thorn_clock_slumber_pose");

      upsertLeaf(settingGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_slumber_stage",
        "ローゼリア 眠り寄り舞台 / Roselia Slumber Stage",
        "thorn-wreathed clockwork bed, rose coffin-like dais, moonlit rose chamber, frozen time, silent petals, unmoving second hands, sacred slumber atmosphere",
        "舞台差分｜完全な眠り寄り",
        "setting",
        []
      ), "fairytale_roselia_thorn_clock_setting");

      upsertLeaf(settingGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_awakening_stage",
        "ローゼリア 目覚めかけ舞台 / Roselia Awakening Stage",
        "clock-face sleeping altar, moonlit rose chamber, second hands beginning to move, drifting petals, thawing suspended time, silent awakening atmosphere",
        "舞台差分｜目覚めかけ寄り",
        "setting",
        ["fairytale_roselia_thorn_clock_setting"]
      ), "fairytale_roselia_thorn_clock_slumber_stage");

      var core = findById(collection, "fairytale_roselia_thorn_clock_core");
      if (core) ensureLeafMeta(core, "complete_set");
      var safe = findById(collection, "fairytale_roselia_thorn_clock_safe_quality");
      if (safe) ensureLeafMeta(safe, "complete_set");
      var limit = findById(collection, "fairytale_roselia_thorn_clock_2000_limit");
      if (limit) ensureLeafMeta(limit, "complete_set");

      var full = findById(collection, "fairytale_roselia_thorn_clock_full");
      if (full) {
        full.label = "ローゼリア Slumber Full Set / Roselia Slumber Full Set";
        full.val = "Roselia, the saint of the thorn clock, sleeping beauty princess merged with a sacred timekeeper, reclining on a thorn-wreathed clockwork bed, rose coffin-like dais, elegant pale gown, thorn crown, spindle relic resting beside her, stopped clocks and golden second hands, moonlit rose chamber, hands folded softly, eyes closed, serene sleeping expression, suspended time, silent petals, sacred slumber atmosphere, single human character focus";
        full.desc = "フルセット｜眠り寄り｜融合元：眠れる森の姫 + クロノス + 茨冠の聖遺物";
        full.linked_ids = [
          "fairytale_roselia_thorn_clock_base",
          "fairytale_roselia_thorn_clock_custom",
          "fairytale_roselia_thorn_clock_slumber_pose",
          "fairytale_roselia_thorn_clock_setting",
          "fairytale_roselia_thorn_clock_slumber_stage",
          "fairytale_roselia_thorn_clock_quality_full"
        ];
        ensureLeafMeta(full, "complete_set");
      }

      upsertLeaf(completeGroup.children, makeLeaf(
        "fairytale_roselia_thorn_clock_full_awakening",
        "ローゼリア Awakening Full Set / Roselia Awakening Full Set",
        "Roselia, the saint of the thorn clock, sleeping beauty princess merged with a sacred timekeeper, resting on a rose coffin-like clock altar, elegant pale gown, thorn crown, spindle relic, stopped clocks and golden second hands, moonlit rose chamber, sleepy half-open eyes, barely awakened expression, quiet sacred tension, second hands beginning to move, drifting petals, suspended time beginning to stir, single human character focus",
        "フルセット｜目覚めかけ寄り｜融合元：眠れる森の姫 + クロノス + 茨冠の聖遺物",
        "complete_set",
        [
          "fairytale_roselia_thorn_clock_base",
          "fairytale_roselia_thorn_clock_custom",
          "fairytale_roselia_thorn_clock_awakening_pose",
          "fairytale_roselia_thorn_clock_setting",
          "fairytale_roselia_thorn_clock_awakening_stage",
          "fairytale_roselia_thorn_clock_quality_full"
        ]
      ), "fairytale_roselia_thorn_clock_full");

      if (window.__PP_DB) window.__PP_DB.packs = db;
      window.PRESET_PACKS_DB = db;
      window.__PRESET_PACKS_DB = db;
    } catch (e) {}
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
      applyKrakenKrakententaclesPatch(db);
      applyFairytaleFolktaleRoleplayPatch(db);
      applyFairytaleExpansionPatch(db);
      applyFairytaleExtraStoryPatch(db);
      applyArisielMirrorRealmPatch(db);
      applyFairytaleTragicThemeTonePatch(db);
      applyOriginalFairytaleMythPatch(db);
      applyLuciaHolyFlameRefinementPatch(db);
      applyRoseliaDualFullSetPatch(db);
      applyRoseliaLinkedIdsRepairPatch(db);
      applyFairytaleExtraStoryPatch2(db);
      repairFairytaleCollectionRoles(db);
      applyRoseliaDualFullSetPatchV2(db);
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

      // Reorder key shelves: artwork format -> roleplay -> linked expression support -> expression packs.
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

        var workFormat = takeByPrefix(stage0, [
          "🎯 作品形式スターターパック (Artwork Format Starter Packs)"
        ]);
        var normalRole = takeByPrefix(workFormat.rest, [
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
          .concat(workFormat.taken)
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
        if (collectionId && role === "quality_detail") {
          clearQualitySetsAfterManualDetailChange(root, target);
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
