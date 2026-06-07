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
      applyKrakenKrakententaclesPatch(db);
      applyFairytaleFolktaleRoleplayPatch(db);
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
