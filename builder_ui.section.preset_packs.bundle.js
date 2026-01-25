(function () {
  // =========================================================
  // Preset Packs Section (ES5 safe)
  // =========================================================

  var KEY = "preset_packs";
  var VERSION = 1;

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

  function normalizeItem(it) {
    var id = safeText(it.id || it.key || it.pack_id || it.name || it.label || "");
    var titleJa = safeText(it.title_ja || it.ja || it.title || it.label || "Item");
    var titleEn = safeText(it.title_en || it.en || "");
    var subJa = safeText(it.subtitle_ja || it.desc_ja || it.sub_ja || it.desc || "");
    var subEn = safeText(it.subtitle_en || it.desc_en || it.sub_en || "");
    var tags = ensureArray(it.tags || it.values || it.val || it.prompt || []);
    return { id: id, titleJa: titleJa, titleEn: titleEn, subJa: subJa, subEn: subEn, tags: tags, type: safeText(it.type || ""), leftLabel: safeText(it.leftLabel || ""), rightLabel: safeText(it.rightLabel || ""), children: (it.children && Object.prototype.toString.call(it.children) === "[object Array]") ? it.children : null };
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
      "padding:12px; display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;"
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
      body.style.cssText = "padding:12px; display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;";

      // If this subgroup contains subgroups (2nd level), render them as nested details.
      var subChildren = (sub.children && Object.prototype.toString.call(sub.children) === "[object Array]") ? sub.children : null;
      if (subChildren && subChildren.length > 0 && subChildren[0] && subChildren[0].children) {
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
            "display:flex; gap:10px; align-items:flex-start;" +
            "padding:10px 10px; border-radius:12px; cursor:pointer;" +
            "border:1px solid rgba(0,0,0,0.10); background:#fff;" +
            "box-shadow:0 1px 0 rgba(0,0,0,0.04);";

          var cb2 = document.createElement("input");
          cb2.type = "checkbox";
          cb2.className = "preset-pack-cb";
          cb2.style.cssText = "margin-top:3px; width:18px; height:18px;";
          cb2.setAttribute("data-pack-id", it2.id);
          try { cb2.setAttribute("data-tags", JSON.stringify(it2.tags || [])); } catch (e2) { cb2.setAttribute("data-tags", "[]"); }

          var info2 = document.createElement("div");
          info2.style.cssText = "display:flex; flex-direction:column; gap:2px;";

          var h2 = document.createElement("div");
          h2.style.cssText = "font-weight:900; font-size:13px; line-height:1.2;";
          h2.appendChild(document.createTextNode(it2.titleJa));

          info2.appendChild(h2);

          if (it2.titleEn) {
            var he2 = document.createElement("div");
            he2.style.cssText = "font-weight:800; font-size:12px; color:rgba(0,0,0,0.55);";
            he2.appendChild(document.createTextNode("(" + it2.titleEn + ")"));
            info2.appendChild(he2);
          }

          if (it2.subJa || it2.subEn) {
            var sub2 = document.createElement("div");
            sub2.style.cssText = "font-size:12px; color:rgba(0,0,0,0.62); line-height:1.25;";
            sub2.appendChild(document.createTextNode(it2.subJa || it2.subEn));
            info2.appendChild(sub2);
          }

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
        "display:flex; gap:10px; align-items:flex-start;" +
        "padding:10px 10px; border-radius:12px; cursor:pointer;" +
        "border:1px solid rgba(0,0,0,0.10); background:#fff;" +
        "box-shadow:0 1px 0 rgba(0,0,0,0.04);";

      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "preset-pack-cb";
      cb.style.cssText = "margin-top:3px; width:18px; height:18px;";
      cb.setAttribute("data-pack-id", item.id);
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
      main.style.cssText = "font-weight:800; color:#222; line-height:1.15;";
      var mainTitle = item.titleEn ? (item.titleJa + " (" + item.titleEn + ")") : item.titleJa;
      main.appendChild(document.createTextNode(mainTitle));

      textWrap.appendChild(main);

      var subText = item.subEn ? (item.subJa + " (" + item.subEn + ")") : item.subJa;
      if (subText && subText.replace(/\s/g, "") !== "") {
        var sub = document.createElement("div");
        sub.style.cssText = "font-size:0.9em; font-weight:650; color:rgba(0,0,0,0.60); line-height:1.15;";
        sub.appendChild(document.createTextNode(subText));
        textWrap.appendChild(sub);
      }

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
