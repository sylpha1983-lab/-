(function () {
  // =========================================================
  // Preset Packs Section (ES5 safe)
  // =========================================================

  var KEY = "preset_packs";
  var VERSION = 1;
  // Debug: add ?ppdebug=1 to URL or set window.DEBUG_PRESET_PACKS = true
  var DEBUG = (typeof window !== "undefined" && window.DEBUG_PRESET_PACKS) ||
              (typeof location !== "undefined" && /[?&]ppdebug=1(?:&|$)/.test(location.search || ""));

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
    return { id: id, titleJa: titleJa, titleEn: titleEn, subJa: subJa, subEn: subEn, tags: tags };
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
      "padding:12px; display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;";

    for (var i = 0; i < group.items.length; i++) {
      var item = normalizeItem(group.items[i]);

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
    initUI: function (container) {
      var parent = container || document.querySelector("#list-preset_packs");
      if (!parent) return;

      var mount = parent.querySelector(".section-content") || parent;

      while (mount.firstChild) mount.removeChild(mount.firstChild);

      mount.appendChild(
        createInfoBox("※ ここは「まとめて刺す」系のパック置き場。チェックをONにすると、Generate時にそのまま出力へ混ざる。")
      );

      var db = getDB();
      var groupsRaw = extractGroups(db);

      if (DEBUG) {
        try {
          console.log("[PresetPacks] db=", db, "groupsRaw=", groupsRaw);
        } catch (e0) {}
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

  // If this bundle is loaded AFTER the first UI mount, the section can stay blank.
  // To make it deterministic, re-trigger mount once when possible.
  try {
    setTimeout(function () {
      var host = document.getElementById("list-preset_packs");
      var hasUI = !!(host && host.querySelector && host.querySelector(".preset-packs-container"));

      if (!hasUI && typeof window.__triggerUIMount === "function") {
        if (DEBUG) {
          try { console.log("[PresetPacks] late-load detected -> re-triggering mount"); } catch (e3) {}
        }
        window.__triggerUIMount();
      }
    }, 0);
  } catch (e4) {}
})();
