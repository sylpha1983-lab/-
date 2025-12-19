(function(){
  "use strict";

  const VERSION = 2; 
  const KEY = "texture";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ✅ 通常表示：フェチ・質感拡張 (General Fetish & Texture)
  const EXTENDED_CATEGORIES = {
    "👙 衣装・フェチ素材 (Fetish Fabric)": [
      { ja: "ラテックス (ゴム)", en: "latex" },
      { ja: "ラバー (ゴムスーツ)", en: "rubber" },
      { ja: "エナメル (光沢革)", en: "shiny leather" },
      { ja: "シースルー (透け)", en: "see-through fabric" },
      { ja: "濡れ透け (張り付き)", en: "wet clothes, clinging clothes" },
      { ja: "破れた服", en: "torn clothes" },
      { ja: "レース (透かし)", en: "lace" },
      { ja: "サテン (光沢布)", en: "satin" },
      { ja: "ベルベット", en: "velvet" },
      { ja: "ボディースーツ", en: "bodysuit" },
      { ja: "競泳水着", en: "racing swimsuit" },
      { ja: "網タイツ", en: "fishnet pantyhose" }
    ],
    "💧 液体・汗・オイル (Fluids & Sweat)": [
      { ja: "汗だく", en: "drenched in sweat" },
      { ja: "玉の汗", en: "heavy sweat" },
      { ja: "ローション (ぬるぬる)", en: "lotion, viscous liquid" },
      { ja: "オイルまみれ", en: "oil-covered" },
      { ja: "粘液・スライム", en: "slime" },
      { ja: "したたる (Drip)", en: "dripping" },
      { ja: "泡・バブル", en: "bubbles" },
      { ja: "濡れた肌", en: "wet skin" }
    ]
  };

  // 🔞 シークレット表示：R-18 体液 (Adult Fluids)
  const SECRET_CATEGORIES = {
    "🔞 R-18 液体・白濁 (Adult Fluids)": [
      { ja: "精液 (白濁液)", en: "cum, white fluid" },
      { ja: "大量の精液", en: "excessive cum" },
      { ja: "顔射 (顔にかかる)", en: "cum on face" },
      { ja: "全身精液まみれ", en: "cum on body, messy body" },
      { ja: "口内射精", en: "cum in mouth" },
      { ja: "愛液・よだれ", en: "saliva, drooling, vaginal fluids" },
      { ja: "母乳", en: "breast milk" }
    ]
  };

  const API = {
    initUI(container) {
      const section = container.querySelector(".texture-section") || document.createElement("div");
      if (!section.className) {
        section.className = "texture-section";
        const h = document.createElement("div");
        h.textContent = "🧶 素材・質感 (Material/Texture)";
        h.style.fontWeight = "bold"; h.style.color = "#556b2f"; h.style.marginBottom = "8px";
        section.appendChild(h);
        container.appendChild(section);
      }

      // 通常カテゴリの表示
      Object.entries(EXTENDED_CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #e0e0d0"; // 通常色
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f9f9f5";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff";
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #e0e0d0";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });

      // シークレットカテゴリの表示
      if (IS_UNLOCKED) {
        Object.entries(SECRET_CATEGORIES).forEach(([cat, items]) => {
          const details = document.createElement("details");
          details.open = false; 
          details.style.marginBottom = "8px";
          details.style.border = "1px solid #ffcccc"; // 赤枠
          details.style.borderRadius = "4px";
          
          const summary = document.createElement("summary");
          summary.innerHTML = `${cat}`;
          summary.style.cursor = "pointer";
          summary.style.fontSize = "0.9em";
          summary.style.fontWeight = "bold";
          summary.style.padding = "6px";
          summary.style.backgroundColor = "#fff0f0";
          summary.style.color = "#d00";
          details.appendChild(summary);

          const content = document.createElement("div");
          content.style.display = "flex";
          content.style.flexWrap = "wrap";
          content.style.gap = "6px";
          content.style.padding = "8px";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.fontSize = "0.85em";
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.backgroundColor = "#fff";
            label.style.padding = "4px 8px";
            label.style.borderRadius = "4px";
            label.style.border = "1px solid #ffcccc";
            label.style.cursor = "pointer";
            
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            cb.style.marginRight = "6px";
            
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja));
            content.appendChild(label);
          });
          details.appendChild(content);
          section.appendChild(details);
        });
      }

      if (window.__outputTranslation) {
        const dict = {};
        [...Object.values(EXTENDED_CATEGORIES), ...Object.values(SECRET_CATEGORIES)].flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

