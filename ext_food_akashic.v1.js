(function(){
  "use strict";

  const VERSION = 2;
  const KEY = "accessories";
  const STYLE_ID = "shima-food-akashic-v1-style";
  const READY_CLASS = "shima-food-akashic-ready";

  const GROUPS = [
    { key: "quick", title: "⚡ おまかせ完成メニュー", note: "完成済みの定番メニューを、ひと押しで選ぶ入口", expected: 145 },
    { key: "completed", title: "🍛 完成料理・地域・世界観", note: "日常食、各国料理、ファンタジー、SF、終末食から探す", expected: 616 },
    { key: "serving", title: "🍽️ 提供場面・食卓", note: "屋台、家庭料理、弁当、祝宴、酒場など食べる場面から探す", expected: 183 },
    { key: "dessert", title: "🍰 デザート・トッピング", note: "甘味本体と、果物、クリーム、ソース、フィリングを組み合わせる", expected: 160 },
    { key: "drinks", title: "🥤 飲み物・容器・フレーバー", note: "カフェ、ソフトドリンク、酒、異世界飲料、器と味をまとめる", expected: 185 },
    { key: "ingredients", title: "🥩 食材図鑑", note: "野菜、果物、肉などを素材単位で細かく選ぶ", expected: 306 },
    { key: "specialized", title: "🧰 特化調理工房", note: "おにぎり、丼、ピザ、鍋、パン、麺を完成セットと部品の両方から組み立てる", expected: 139 },
    { key: "effects", title: "🔥 調理・温度・演出", note: "焼き、揚げ、湯気、氷、泡、結露、発光、盛り付けを後から足す", expected: 76 },
    { key: "actions", title: "🥢 食べる・飲む動作", note: "飲む、食べる、作る、盛る、給仕など人物の動作だけを指定する", expected: 73 },
    { key: "size", title: "📏 サイズ・量・個数", note: "盛り量、単品サイズ、個数、容器容量を選択中の食べ物へ連動する", expected: 20 }
  ];

  const SOURCE_DEFS = [
    { title: "🍽 定番完成メニュー", origin: "direct-menu", group: "quick", order: 10 },
    { title: "🌍 世界観別フード", origin: "world", group: "completed", order: 20 },
    { title: "🍴 料理・ジャンル別", origin: "cuisine", group: "completed", order: 30 },
    { title: "🌍 国・地域別料理", origin: "regional", group: "completed", order: 40 },
    { title: "🍽 提供スタイル・場面別", origin: "serving", group: "serving", order: 50 },
    { title: "🍓 トッピング・フィリング", origin: "toppings", group: "dessert", order: 60 },
    { title: "🥤 飲み物", origin: "drinks", group: "drinks", order: 70 },
    { title: "🥤 ドリンクフレーバー", origin: "drink-flavors", group: "drinks", order: 80 },
    { title: "🥩 食材", origin: "ingredients", group: "ingredients", order: 90 },
    { title: "🍙 おにぎり・和の仕上げ", origin: "onigiri", group: "specialized", order: 100 },
    { title: "🍚 丼物特化コレクション", origin: "donburi", group: "specialized", order: 110 },
    { title: "🍕 ピザ特化コレクション", origin: "pizza", group: "specialized", order: 120 },
    { title: "🎭 食べ物・飲み物演出", origin: "effects", group: "effects", order: 130 },
    { title: "🥢🍻 食べ物・飲み物動作", origin: "actions", group: "actions", order: 140 },
    { title: "📏 サイズ・量カスタマイズ", origin: "size", group: "size", order: 150 }
  ];

  function normalize(value){
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function directSummary(details){
    return Array.from(details && details.children || []).find(function(node){
      return node && node.tagName === "SUMMARY";
    }) || null;
  }

  function titleOf(details){
    const summary = directSummary(details);
    const explicit = summary && summary.querySelector(".food-akashic-title");
    return normalize(explicit ? explicit.textContent : summary && summary.textContent);
  }

  function directDetails(root){
    return Array.from(root && root.children || []).filter(function(node){
      return node && node.tagName === "DETAILS";
    });
  }

  function findDirectDetails(root, title){
    return directDetails(root).find(function(details){ return titleOf(details) === title; }) || null;
  }

  function findFoodRoot(container){
    const host = document.querySelector("#list-accessories") || container;
    if (!host) return null;
    const ready = host.querySelector("details.food-akashic-root");
    if (ready) return ready;
    return Array.from(host.querySelectorAll("details")).find(function(details){
      const title = titleOf(details);
      return title.indexOf("🍱 食べ物・飲み物を開く") >= 0 || title.indexOf("🍽 食のアカシックを開く") >= 0;
    }) || null;
  }

  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
#list-accessories.${READY_CLASS} .food-akashic-root,
#list-accessories.${READY_CLASS} .food-akashic-root * { box-sizing:border-box; writing-mode:horizontal-tb !important; }
#list-accessories.${READY_CLASS} .food-akashic-root {
  display:block; width:100%; max-width:100%; margin:10px 0 14px !important; padding:8px !important;
  border:1px solid rgba(202,160,91,.48) !important; border-radius:15px !important;
  background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(255,249,232,.95)) !important;
  box-shadow:0 10px 24px rgba(121,88,35,.10); overflow:hidden;
}
#list-accessories.${READY_CLASS} .food-akashic-root-summary,
#list-accessories.${READY_CLASS} .food-akashic-group-summary {
  display:flex !important; align-items:center; gap:9px; width:100%; min-width:0;
  list-style:none; cursor:pointer; color:#5d4923 !important;
}
#list-accessories.${READY_CLASS} .food-akashic-root-summary { padding:8px 6px !important; }
#list-accessories.${READY_CLASS} .food-akashic-group-summary {
  padding:11px 12px !important;
  background:linear-gradient(135deg,rgba(255,253,245,.99),rgba(245,238,214,.90)) !important;
}
#list-accessories.${READY_CLASS} .food-akashic-root-summary::before,
#list-accessories.${READY_CLASS} .food-akashic-group-summary::before {
  content:"▶" !important; flex:0 0 auto; margin:0 !important; color:#b08439 !important; transform:none !important;
}
#list-accessories.${READY_CLASS} .food-akashic-root[open] > .food-akashic-root-summary::before,
#list-accessories.${READY_CLASS} .food-akashic-group[open] > .food-akashic-group-summary::before { transform:rotate(90deg) !important; }
#list-accessories.${READY_CLASS} .food-akashic-heading { min-width:0; flex:1 1 auto; }
#list-accessories.${READY_CLASS} .food-akashic-title { display:block; font-size:15px; line-height:1.35; font-weight:850; overflow-wrap:anywhere; }
#list-accessories.${READY_CLASS} .food-akashic-root-title { font-size:16px; color:#59431e; }
#list-accessories.${READY_CLASS} .food-akashic-note { display:block; margin-top:2px; font-size:11px; line-height:1.45; font-weight:600; color:#7c6a49; overflow-wrap:anywhere; }
#list-accessories.${READY_CLASS} .food-akashic-count { flex:0 0 auto; min-width:42px; padding:4px 9px; border-radius:999px; text-align:center; background:rgba(243,220,165,.72); color:#76571f; font-size:12px; font-weight:850; }
#list-accessories.${READY_CLASS} .food-akashic-lead { margin:5px 3px 10px !important; padding:8px 10px; border:1px dashed rgba(184,142,70,.42); border-radius:10px; background:rgba(255,255,255,.62); color:#6f6044 !important; font-size:12px !important; line-height:1.55; }
#list-accessories.${READY_CLASS} .food-akashic-group {
  display:block; width:100%; max-width:100%; margin:0 0 9px !important; padding:0 !important;
  border:1px solid rgba(202,160,91,.34) !important; border-radius:12px !important; background:rgba(255,255,255,.78) !important; overflow:hidden;
}
#list-accessories.${READY_CLASS} .food-akashic-body,
#list-accessories.${READY_CLASS} .food-akashic-group[open] > .food-akashic-body {
  display:block !important; width:100% !important; max-width:100% !important; padding:8px !important;
  grid-template-columns:minmax(0,1fr) !important;
}
#list-accessories.${READY_CLASS} .food-akashic-body > .food-akashic-source {
  display:block; width:100% !important; max-width:100% !important; min-width:0 !important; margin:0 0 7px !important;
}
#list-accessories.${READY_CLASS} .food-akashic-source summary { overflow-wrap:anywhere; word-break:normal; }
#list-accessories.${READY_CLASS} .food-akashic-divider-line { color:#785a24 !important; }
@media (max-width:760px) {
  #list-accessories.${READY_CLASS} .food-akashic-body,
  #list-accessories.${READY_CLASS} .food-akashic-body details[open] > div,
  #list-accessories.${READY_CLASS} .food-akashic-body [style*="grid-template-columns"] {
    display:grid !important; grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important; width:100% !important;
  }
  #list-accessories.${READY_CLASS} .food-akashic-body label {
    display:flex !important; width:100% !important; max-width:100% !important; min-width:0 !important;
    overflow-wrap:anywhere; word-break:normal; text-orientation:mixed !important;
  }
  #list-accessories.${READY_CLASS} .food-akashic-group-summary { padding:10px 9px !important; }
  #list-accessories.${READY_CLASS} .food-akashic-title { font-size:14px; }
  #list-accessories.${READY_CLASS} .food-akashic-root-title { font-size:15px; }
}
`;
    document.head.appendChild(style);
  }

  function makeHeader(summary, titleText, noteText, countText, rootHeader){
    summary.textContent = "";
    summary.className = rootHeader ? "food-akashic-root-summary" : "food-akashic-group-summary";
    const heading = document.createElement("span");
    heading.className = "food-akashic-heading";
    const title = document.createElement("span");
    title.className = "food-akashic-title" + (rootHeader ? " food-akashic-root-title" : "");
    title.textContent = titleText;
    const note = document.createElement("span");
    note.className = "food-akashic-note";
    note.textContent = noteText;
    const count = document.createElement("span");
    count.className = "food-akashic-count";
    count.textContent = String(countText);
    heading.appendChild(title);
    heading.appendChild(note);
    summary.appendChild(heading);
    summary.appendChild(count);
  }

  function updateDivider(root){
    const divider = root && root.previousElementSibling;
    if (!divider || normalize(divider.textContent).indexOf("食べ物・飲み物") < 0) return;
    divider.classList.add("food-akashic-divider");
    const children = Array.from(divider.children || []);
    if (children[0]) {
      children[0].classList.add("food-akashic-divider-line");
      children[0].textContent = "CULINARY AKASHIC / 食のアカシックレコード";
    }
    if (children[1]) children[1].textContent = "完成料理から食材・仕上げ・食べ方まで、既存機能を保ったまま用途別に探す";
  }

  function updateRootHeader(root, total){
    root.classList.add("food-akashic-root");
    root.dataset.foodAkashicRoot = "true";
    const summary = directSummary(root);
    if (summary) makeHeader(summary, "🍽 食のアカシックを開く", "料理を選び、必要な時だけ仕上げ・量・動作を足します", total, true);

    let lead = Array.from(root.children || []).find(function(node){
      return node && node.classList && node.classList.contains("food-akashic-lead");
    });
    if (!lead) {
      lead = Array.from(root.children || []).find(function(node){
        return node && node.tagName === "DIV" && !(node.classList && node.classList.contains("food-akashic-group"));
      });
    }
    if (!lead) {
      lead = document.createElement("div");
      if (summary && summary.nextSibling) root.insertBefore(lead, summary.nextSibling);
      else root.appendChild(lead);
    }
    lead.className = "food-akashic-lead";
    lead.textContent = "基本は『完成料理』から選択。細かく作る時は『食材』『特化調理工房』、最後に『演出』『動作』『サイズ』を追加します。連動棚は対象を選んでから使います。";
    updateDivider(root);
  }

  function captureState(root){
    const groups = {};
    Array.from(root.querySelectorAll(":scope > .food-akashic-group")).forEach(function(group){
      groups[group.dataset.foodAkashicGroupKey || ""] = !!group.open;
    });
    return { rootOpen: !!root.open, groups: groups, hadGroups: Object.keys(groups).length > 0 };
  }

  function unwrapGroups(root){
    Array.from(root.querySelectorAll(":scope > .food-akashic-group")).forEach(function(group){
      const body = group.querySelector(":scope > .food-akashic-body");
      if (body) Array.from(body.children || []).forEach(function(child){ root.appendChild(child); });
      group.remove();
    });
  }

  function tagSource(node, def){
    if (!node || !def) return;
    node.dataset.foodAkashicOrigin = def.origin;
    node.dataset.foodAkashicGroup = def.group;
    node.dataset.foodAkashicOrder = String(def.order);
    node.classList.add("food-akashic-source");
  }

  function extractSources(root){
    let sources = directDetails(root).filter(function(node){ return !!node.dataset.foodAkashicOrigin; });
    if (!sources.length) {
      SOURCE_DEFS.forEach(function(def){
        const node = findDirectDetails(root, def.title);
        if (node) tagSource(node, def);
      });

      const cuisine = directDetails(root).find(function(node){ return node.dataset.foodAkashicOrigin === "cuisine"; });
      const dessert = cuisine && findDirectDetails(cuisine, "🍰 デザート");
      if (dessert) {
        tagSource(dessert, { origin: "dessert-menu", group: "dessert", order: 65 });
        root.appendChild(dessert);
      }
      sources = directDetails(root).filter(function(node){ return !!node.dataset.foodAkashicOrigin; });
    }

    let compatOrder = 900;
    directDetails(root).forEach(function(node){
      if (node.dataset.foodAkashicOrigin) return;
      tagSource(node, { origin: "compat-" + compatOrder, group: "completed", order: compatOrder++ });
    });

    return directDetails(root).filter(function(node){ return !!node.dataset.foodAkashicOrigin; });
  }

  function makeGroup(def, items, open, initial){
    const details = document.createElement("details");
    details.className = "food-akashic-group food-akashic-group-" + def.key;
    details.dataset.foodAkashicGroupKey = def.key;
    details.open = initial ? false : !!open;

    const summary = document.createElement("summary");
    const count = items.reduce(function(total, item){
      return total + item.querySelectorAll("input[type='checkbox']").length;
    }, 0);
    makeHeader(summary, def.title, def.note, count, false);
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "food-akashic-body";
    items.forEach(function(item){
      if (initial) {
        item.open = false;
        item.querySelectorAll("details").forEach(function(child){ child.open = false; });
      }
      body.appendChild(item);
    });
    details.appendChild(body);
    return details;
  }

  function organize(container){
    const root = findFoodRoot(container);
    if (!root || root.__shimaFoodAkashicBusy) return null;
    root.__shimaFoodAkashicBusy = true;
    try {
      injectStyle();
      const state = captureState(root);
      unwrapGroups(root);
      const sources = extractSources(root);
      sources.sort(function(a, b){
        return Number(a.dataset.foodAkashicOrder || 0) - Number(b.dataset.foodAkashicOrder || 0);
      });

      const total = sources.reduce(function(sum, source){
        return sum + source.querySelectorAll("input[type='checkbox']").length;
      }, 0);
      updateRootHeader(root, total);
      const initial = !state.hadGroups && root.dataset.foodAkashicOrganized !== "true";

      const built = [];
      GROUPS.forEach(function(def){
        const items = sources.filter(function(source){ return source.dataset.foodAkashicGroup === def.key; });
        if (!items.length) return;
        const group = makeGroup(def, items, state.groups[def.key], initial);
        root.appendChild(group);
        built.push(group);
      });

      root.dataset.foodAkashicOrganized = "true";
      root.open = initial ? false : state.rootOpen;
      const host = document.querySelector("#list-accessories");
      if (host) host.classList.add(READY_CLASS);

      const groupedInputs = built.reduce(function(total, group){
        return total + group.querySelectorAll("input[type='checkbox']").length;
      }, 0);
      const report = {
        version: "1.0.0",
        totalInputs: total,
        groupedInputs: groupedInputs,
        ungroupedInputs: total - groupedInputs,
        sourceNodes: sources.length,
        groups: built.map(function(group){
          const def = GROUPS.find(function(current){ return current.key === group.dataset.foodAkashicGroupKey; });
          return {
            key: group.dataset.foodAkashicGroupKey,
            sources: group.querySelectorAll(":scope > .food-akashic-body > .food-akashic-source").length,
            inputs: group.querySelectorAll("input[type='checkbox']").length,
            expected: def ? def.expected : 0
          };
        })
      };
      window.__SHIMA_FOOD_AKASHIC_V1__.lastReport = report;
      try { document.dispatchEvent(new CustomEvent("foodAkashicOrganized", { detail: report })); } catch(_) {}
      return report;
    } finally {
      root.__shimaFoodAkashicBusy = false;
    }
  }

  let timer = 0;
  function schedule(container, delay){
    clearTimeout(timer);
    timer = setTimeout(function(){ organize(container); }, delay || 0);
  }

  const API = {
    initUI(container){
      schedule(container, 0);
      setTimeout(function(){ schedule(container, 0); }, 180);
    },
    getTags(){ return []; }
  };

  window.__SHIMA_FOOD_AKASHIC_V1__ = {
    version: "1.0.0",
    groups: GROUPS.map(function(group){ return Object.assign({}, group); }),
    organize: organize,
    lastReport: null
  };

  window.addEventListener("promptPartMounted", function(){ schedule(null, 20); });
  document.addEventListener("promptPartMounted", function(){ schedule(null, 20); });

  function register(retry){
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      setTimeout(function(){
        try { if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }
        catch(_) {}
      }, 30);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ register((retry || 0) + 1); }, 100);
  }

  register(0);
  console.log("🍽 Loaded: ./ext_food_akashic.v1.js v1.0.0");
})();
