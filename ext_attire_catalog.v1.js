(function(){
  "use strict";

  const VERSION = 33;
  const KEY = "attire";
  const STYLE_ID = "shima-attire-catalog-v1-style";
  const READY_CLASS = "shima-attire-catalog-ready";

  const GROUPS = [
    { key: "quick", title: "🎯 すぐ決める衣装セット", note: "完成コーデから、今回の衣装をサクッと決める入口" },
    { key: "daily", title: "👕 日常・ベーシック", note: "トップス、ボトムス、アウター、普段着を組み立てる" },
    { key: "role", title: "🏫 制服・仕事・スポーツ", note: "学校、職業、医療、競技など役割から探す" },
    { key: "formal", title: "👗 正装・舞台・イベント", note: "礼装、舞台、コスプレ、季節行事から探す" },
    { key: "swim", title: "👙 水着・インナー・部屋着", note: "水着、下着、寝間着、リラックス衣装をまとめる" },
    { key: "traditional", title: "👘 伝統・民族・歴史", note: "和装、世界の民族衣装、年代・歴史衣装から探す" },
    { key: "fantasy", title: "⚔️ ファンタジー・戦闘", note: "RPG職、英雄、海賊、概念衣装をまとめる" },
    { key: "sf", title: "🤖 SF・サイバー・特殊", note: "近未来、戦術、機械、ホログラム衣装から探す" },
    { key: "subculture", title: "🎀 サブカル・年代・トレンド", note: "ロリータ、ゴシック、原宿、現代スタイルから探す" },
    { key: "adjust", title: "✂️ 形・柄・色・着こなし調整", note: "袖、襟、柄、配色、靴、状態などを後から足す" },
    { key: "fallback", title: "📦 その他・互換衣装", note: "旧構造との互換用。未分類項目を失わず残す" }
  ];

  const SOURCES = [
    { selector: ".attire-v20-coordinate-container", origin: "attire-v20-coordinate-container", order: 10 },
    { selector: ".attire-v16-container", origin: "attire-v16-container", order: 20 },
    { selector: ".attire-v34-quick", origin: "attire-v34-quick", order: 30 },
    { selector: ".attire-v1-container", origin: "attire-v1-container", order: 100 },
    { selector: ".attire-v34-daily", origin: "attire-v34-daily", order: 120 },
    { selector: ".attire-v2-container", origin: "attire-v2-container", order: 200 },
    { selector: ".attire-v10-container", origin: "attire-v10-container", order: 220 },
    { selector: ".attire-v13-container", origin: "attire-v13-container", order: 240 },
    { selector: ".attire-v32-role-expansion", origin: "attire-v32-role-expansion", order: 260 },
    { selector: ".attire-v34-role", origin: "attire-v34-role", order: 280 },
    { selector: ".attire-v12-container", origin: "attire-v12-container", order: 300 },
    { selector: ".attire-v20-container", origin: "attire-v20-container", order: 320 },
    { selector: ".attire-v18-container", origin: "attire-v18-container", order: 340 },
    { selector: ".attire-v34-formal", origin: "attire-v34-formal", order: 360 },
    { selector: ".attire-v34-swim", origin: "attire-v34-swim", order: 380 },
    { selector: ".attire-v4-container", origin: "attire-v4-container", order: 400 },
    { selector: ".attire-v9-container", origin: "attire-v9-container", order: 420 },
    { selector: ".attire-v3-container", origin: "attire-v3-container", order: 500 },
    { selector: ".attire-v19-container", origin: "attire-v19-container", order: 520 },
    { selector: ".attire-v34-traditional", origin: "attire-v34-traditional", order: 540 },
    { selector: ".attire-v34-fantasy", origin: "attire-v34-fantasy", order: 560 },
    { selector: ".attire-v8-container", origin: "attire-v8-container", order: 600 },
    { selector: ".attire-v34-sf", origin: "attire-v34-sf", order: 620 },
    { selector: ".attire-v15-container", origin: "attire-v15-container", order: 700 },
    { selector: ".attire-v34-subculture", origin: "attire-v34-subculture", order: 720 },
    { selector: ".attire-v5-container", origin: "attire-v5-container", order: 800 },
    { selector: ".attire-v6-container", origin: "attire-v6-container", order: 820 },
    { selector: ".attire-v14-container", origin: "attire-v14-container", order: 840 },
    { selector: ".attire-v11-container", origin: "attire-v11-container", order: 860 },
    { selector: ".attire-v34-adjust", origin: "attire-v34-adjust", order: 880 }
  ];

  const SPECIAL_SELECTORS = [
    ".attire-v35-arcadia-wardrobe",
    ".attire-v39-remix-lab",
    ".attire-v21-shima",
    ".attire-v23-container",
    ".attire-v25-container",
    ".attire-v27-cyber-machine-attire"
  ];

  function contentRoot(container){
    const host = document.querySelector("#list-attire") || container;
    if (!host) return null;
    return host.querySelector(".section-content") || host;
  }

  function titleOf(details){
    if (!details) return "";
    const summary = Array.from(details.children || []).find(function(node){ return node && node.tagName === "SUMMARY"; });
    return String(summary && summary.textContent || "").replace(/\s+/g, " ").trim();
  }

  function classify(origin, title){
    const text = String(title || "");

    if (/^attire-v34-(quick|daily|role|formal|swim|traditional|fantasy|sf|subculture|adjust)$/.test(origin)) {
      return origin.replace(/^attire-v34-/, "");
    }

    if (origin === "attire-v20-coordinate-container" || origin === "attire-v16-container") return "quick";
    if (origin === "attire-v1-container") return "daily";

    if (origin === "attire-v2-container") {
      if (/エンタメ|舞台衣装|Performance/i.test(text)) return "formal";
      return "role";
    }
    if (origin === "attire-v10-container") {
      if (/部屋着|リラックス|水着|Swimwear|Roomwear/i.test(text)) return "swim";
      return "role";
    }
    if (origin === "attire-v13-container") {
      if (/和装|Japanese Casual/i.test(text)) return "traditional";
      if (/ワーク|Labor|Part-time/i.test(text)) return "role";
      return "daily";
    }
    if (origin === "attire-v32-role-expansion") {
      if (/正装|ドレス|花嫁|メイド|アイドル|可憐/i.test(text)) return "formal";
      if (/水着|露出/i.test(text)) return "swim";
      if (/和装|戦士/i.test(text)) return "traditional";
      if (/カジュアル/i.test(text)) return "daily";
      return "role";
    }

    if (origin === "attire-v12-container") {
      if (/サーカス|舞台|Circus|Stage/i.test(text)) return "formal";
      if (/古典|歴史|Ancient|Historical/i.test(text)) return "traditional";
      return "fantasy";
    }
    if (origin === "attire-v20-container") return "formal";
    if (origin === "attire-v18-container") {
      if (/コスプレ|Cosplay/i.test(text)) return "formal";
      if (/スポーツ|Sporty|Active/i.test(text)) return "role";
      return "swim";
    }

    if (origin === "attire-v4-container") {
      if (/水着|下着|ランジェリー|Swimwear|Underwear|Lingerie/i.test(text)) return "swim";
      return "adjust";
    }
    if (origin === "attire-v9-container") return "adjust";

    if (origin === "attire-v3-container") {
      if (/ファンタジー|RPG|Fantasy/i.test(text)) return "fantasy";
      if (/民族|伝統|Traditional/i.test(text)) return "traditional";
      return "subculture";
    }
    if (origin === "attire-v19-container") return "traditional";

    if (origin === "attire-v8-container") {
      if (/ヒーロー|バトル|Hero|Battle/i.test(text)) return "fantasy";
      return "sf";
    }
    if (origin === "attire-v15-container") return "subculture";

    if (origin === "attire-v5-container") {
      if (/ホログラフィック|Holographic/i.test(text)) return "sf";
      return "adjust";
    }
    if (origin === "attire-v6-container" || origin === "attire-v14-container" || origin === "attire-v11-container") return "adjust";
    return "fallback";
  }

  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
#list-attire.${READY_CLASS} .attire-catalog-group,
#list-attire.${READY_CLASS} .attire-catalog-group * { box-sizing:border-box; }
#list-attire.${READY_CLASS} .attire-catalog-group {
  display:block; width:100%; max-width:100%; margin:0 0 10px;
  border:1px solid rgba(119,166,177,.34); border-radius:14px;
  background:rgba(255,255,255,.88); overflow:hidden;
}
#list-attire.${READY_CLASS} .attire-catalog-summary {
  display:flex !important; align-items:center; gap:9px; width:100%; min-width:0;
  padding:12px 13px !important; background:linear-gradient(135deg, rgba(248,253,255,.98), rgba(230,248,244,.92)) !important;
  color:#244b55 !important; list-style:none; cursor:pointer;
}
#list-attire.${READY_CLASS} .attire-catalog-summary::before { content:"▶" !important; flex:0 0 auto; margin:0 !important; color:#5f98a2 !important; transform:none !important; }
#list-attire.${READY_CLASS} .attire-catalog-group[open] > .attire-catalog-summary::before { transform:rotate(90deg) !important; }
#list-attire.${READY_CLASS} .attire-catalog-heading { min-width:0; flex:1 1 auto; }
#list-attire.${READY_CLASS} .attire-catalog-title { display:block; font-size:15px; line-height:1.35; font-weight:850; overflow-wrap:anywhere; }
#list-attire.${READY_CLASS} .attire-catalog-note { display:block; margin-top:2px; font-size:11px; line-height:1.4; font-weight:600; color:#66828a; overflow-wrap:anywhere; }
#list-attire.${READY_CLASS} .attire-catalog-count { flex:0 0 auto; min-width:38px; padding:4px 9px; border-radius:999px; text-align:center; background:rgba(199,238,232,.72); color:#356974; font-size:12px; font-weight:850; }
#list-attire.${READY_CLASS} .attire-catalog-body,
#list-attire.${READY_CLASS} .attire-catalog-group[open] > .attire-catalog-body {
  display:block !important; width:100% !important; max-width:100% !important;
  padding:8px !important; grid-template-columns:minmax(0,1fr) !important;
}
#list-attire.${READY_CLASS} .attire-catalog-body > * { display:block; width:100% !important; max-width:100% !important; min-width:0 !important; margin:0 0 7px !important; }
#list-attire.${READY_CLASS} .attire-catalog-divider { width:100%; margin:16px 0 8px; padding:0 2px; color:#446d77; }
#list-attire.${READY_CLASS} .attire-catalog-divider-line { display:flex; align-items:center; gap:9px; font-size:14px; font-weight:850; }
#list-attire.${READY_CLASS} .attire-catalog-divider-line::before,
#list-attire.${READY_CLASS} .attire-catalog-divider-line::after { content:""; flex:1; height:1px; background:rgba(102,160,173,.35); }
#list-attire.${READY_CLASS} .attire-catalog-divider-note { margin-top:3px; text-align:center; font-size:11px; line-height:1.45; color:#718b92; }
@media (max-width: 760px) {
  #list-attire.${READY_CLASS} .attire-catalog-body,
  #list-attire.${READY_CLASS} .attire-catalog-body details[open] > div,
  #list-attire.${READY_CLASS} .attire-catalog-body [style*="grid-template-columns"] {
    grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important;
  }
  #list-attire.${READY_CLASS} .attire-catalog-body label { width:100% !important; min-width:0 !important; overflow-wrap:anywhere; word-break:normal; }
  #list-attire.${READY_CLASS} .attire-catalog-summary { padding:11px 10px !important; }
  #list-attire.${READY_CLASS} .attire-catalog-title { font-size:14px; }
}
`;
    document.head.appendChild(style);
  }

  function unwrapExisting(root){
    Array.from(root.querySelectorAll(".attire-catalog-group")).forEach(function(group){
      const body = group.querySelector(":scope > .attire-catalog-body");
      if (body) Array.from(body.children || []).forEach(function(child){ root.appendChild(child); });
      group.remove();
    });
    Array.from(root.querySelectorAll(".attire-catalog-divider")).forEach(function(node){ node.remove(); });

    const normalGroup = root.querySelector("#__attire_normal_group__");
    if (normalGroup) {
      const body = normalGroup.querySelector(".attire-normal-group-body");
      if (body) Array.from(body.children || []).forEach(function(child){ root.appendChild(child); });
      normalGroup.remove();
    }
    const normalDivider = root.querySelector("#__attire_normal_divider__");
    if (normalDivider) normalDivider.remove();
    const themeDivider = root.querySelector("#__attire_theme_tech_divider__");
    if (themeDivider) themeDivider.remove();
  }

  function extractCategories(root){
    SOURCES.forEach(function(source){
      const containers = Array.from(root.querySelectorAll(source.selector)).filter(function(node){
        return node && !node.dataset.attireCatalogOrigin;
      });
      containers.forEach(function(container){
        const detailsList = Array.from(container.children || []).filter(function(node){ return node && node.tagName === "DETAILS"; });
        detailsList.forEach(function(details, index){
          const title = titleOf(details);
          details.dataset.attireCatalogOrigin = source.origin;
          details.dataset.attireCatalogOrder = String(source.order * 100 + index);
          details.dataset.attireCatalogGroup = classify(source.origin, title);
          details.classList.add(source.origin, "attire-catalog-item");
          details.open = false;
          root.appendChild(details);
        });
        container.remove();
      });
    });
  }

  function makeGroup(def, items){
    const details = document.createElement("details");
    details.className = "attire-catalog-group attire-catalog-group-" + def.key;
    details.dataset.attireCatalogGroupKey = def.key;
    details.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-catalog-summary";
    const heading = document.createElement("span");
    heading.className = "attire-catalog-heading";
    const title = document.createElement("span");
    title.className = "attire-catalog-title";
    title.textContent = def.title;
    const note = document.createElement("span");
    note.className = "attire-catalog-note";
    note.textContent = def.note;
    heading.appendChild(title);
    heading.appendChild(note);
    const count = document.createElement("span");
    count.className = "attire-catalog-count";
    count.textContent = String(items.reduce(function(total, item){
      return total + item.querySelectorAll("input[type='checkbox']").length;
    }, 0));
    summary.appendChild(heading);
    summary.appendChild(count);
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "attire-catalog-body";
    items.forEach(function(item){
      item.open = false;
      item.querySelectorAll("details").forEach(function(child){ child.open = false; });
      body.appendChild(item);
    });
    details.appendChild(body);
    return details;
  }

  function makeDivider(title, note){
    const wrap = document.createElement("div");
    wrap.className = "attire-catalog-divider";
    const line = document.createElement("div");
    line.className = "attire-catalog-divider-line";
    const text = document.createElement("span");
    text.textContent = title;
    line.appendChild(text);
    wrap.appendChild(line);
    if (note) {
      const sub = document.createElement("div");
      sub.className = "attire-catalog-divider-note";
      sub.textContent = note;
      wrap.appendChild(sub);
    }
    return wrap;
  }

  function organize(container){
    const root = contentRoot(container);
    if (!root || root.__shimaAttireCatalogBusy) return null;
    root.__shimaAttireCatalogBusy = true;
    try{
      injectStyle();
      unwrapExisting(root);
      extractCategories(root);

      const tagged = Array.from(root.querySelectorAll("[data-attire-catalog-origin]"));
      tagged.forEach(function(item){
        item.dataset.attireCatalogGroup = classify(item.dataset.attireCatalogOrigin, titleOf(item));
      });
      tagged.sort(function(a, b){
        return Number(a.dataset.attireCatalogOrder || 0) - Number(b.dataset.attireCatalogOrder || 0);
      });

      const special = [];
      SPECIAL_SELECTORS.forEach(function(selector){
        Array.from(root.querySelectorAll(selector)).forEach(function(node){
          if (node.dataset.attireCatalogOrigin) return;
          if (special.indexOf(node) < 0) special.push(node);
        });
      });

      const r18Zone = root.querySelector("#__attire_r18_last_zone__");
      const specialZone = root.querySelector("#__attire_special_top_zone__");
      const protectedNodes = new Set(tagged.concat(special));
      if (r18Zone) protectedNodes.add(r18Zone);
      if (specialZone) protectedNodes.add(specialZone);

      if (r18Zone) {
        Array.from(root.children || []).forEach(function(node){
          if (!node || protectedNodes.has(node)) return;
          const nodeTitle = node.tagName === "DETAILS"
            ? titleOf(node)
            : String(node.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120);
          const nodeClass = String(node.className || "");
          const isLooseR18 = /attire-v17-container|attire-v22-container|attire-r18/.test(nodeClass)
            || /R-18|NSFW|完全露出|露出・裸系|ボンテージ|異種姦|生体侵食\+/i.test(nodeTitle);
          if (!isLooseR18) return;
          r18Zone.appendChild(node);
          protectedNodes.add(node);
        });
      }

      const fallbackNodes = Array.from(root.children || []).filter(function(node){
        if (!node || protectedNodes.has(node)) return false;
        if (node.classList && (node.classList.contains("attire-catalog-group") || node.classList.contains("attire-catalog-divider"))) return false;
        if (node.tagName === "H2" && /服装・衣装|Attire/i.test(node.textContent || "")) {
          node.remove();
          return false;
        }
        return !!(node.querySelector && node.querySelector("input[type='checkbox'], details"));
      });
      fallbackNodes.forEach(function(node, index){
        node.dataset.attireCatalogOrigin = node.dataset.attireCatalogOrigin || "compat-root";
        node.dataset.attireCatalogOrder = node.dataset.attireCatalogOrder || String(900000 + index);
        node.dataset.attireCatalogGroup = "fallback";
        tagged.push(node);
      });

      const anchor = r18Zone || null;
      GROUPS.forEach(function(def){
        const items = tagged.filter(function(item){ return item.dataset.attireCatalogGroup === def.key; });
        if (!items.length) return;
        root.insertBefore(makeGroup(def, items), anchor);
      });

      if (special.length) {
        root.insertBefore(makeDivider("⭐ 特化・テーマ衣装", "衣装改造、アルカディア、シマエナガ、チャイナ、アイドル、モチーフ、機械衣装を個別に深掘り"), anchor);
        special.forEach(function(node){
          node.querySelectorAll("details").forEach(function(details){ details.open = false; });
          if (node.tagName === "DETAILS") node.open = false;
          root.insertBefore(node, anchor);
        });
      }

      if (r18Zone && r18Zone.querySelector("input[type='checkbox'], details")) {
        root.insertBefore(makeDivider("🔞 R-18専用衣装", "通常衣装と分離し、解放時だけ最後に表示"), r18Zone);
      }

      const host = document.querySelector("#list-attire");
      if (host) host.classList.add(READY_CLASS);
      root.querySelectorAll(".attire-catalog-group").forEach(function(details){ details.open = false; });

      const report = {
        groups: Array.from(root.querySelectorAll(":scope > .attire-catalog-group")).map(function(group){
          return {
            key: group.dataset.attireCatalogGroupKey,
            categories: group.querySelectorAll(":scope > .attire-catalog-body > .attire-catalog-item").length,
            checkboxes: group.querySelectorAll("input[type='checkbox']").length
          };
        }),
        special: special.length,
        visibleCheckboxes: root.querySelectorAll("input[type='checkbox']").length
      };
      window.__SHIMA_ATTIRE_CATALOG_V1__.lastReport = report;
      try{ document.dispatchEvent(new CustomEvent("attireCatalogOrganized", { detail: report })); }catch(_){ }
      return report;
    } finally {
      root.__shimaAttireCatalogBusy = false;
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

  window.__SHIMA_ATTIRE_CATALOG_V1__ = {
    version: "1.0.0",
    organize: organize,
    lastReport: null
  };

  document.addEventListener("promptPartMounted", function(){ schedule(null, 20); });

  function register(retry){
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      setTimeout(function(){
        try{ if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); }
        catch(_){}
      }, 30);
      return;
    }
    if ((retry || 0) < 80) setTimeout(function(){ register((retry || 0) + 1); }, 100);
  }

  register(0);
  console.log("👗 Loaded: ./ext_attire_catalog.v1.js v1.0.0");
})();
