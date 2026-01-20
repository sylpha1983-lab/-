// Auto-generated bundle for section 'composition'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.composition.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "composition";

  const CATEGORIES = {
    "基本ルール・配置 (Basic Rules)": [
      { ja: "三分割法 (1/3の法則)", en: "rule of thirds" },
      { ja: "黄金比", en: "golden ratio" },
      { ja: "日の丸構図 (中央配置)", en: "centered composition" },
      { ja: "シンメトリー (左右対称)", en: "symmetrical composition" },
      { ja: "アシンメトリー (非対称)", en: "asymmetrical composition" },
      { ja: "アイソメトリック (等角投影)", en: "isometric" }
    ],
    "視線誘導・ライン (Leading Lines)": [
      { ja: "リーディングライン (視線誘導)", en: "leading lines" },
      { ja: "対角線構図", en: "diagonal composition" },
      { ja: "三角構図", en: "triangle composition" },
      { ja: "S字構図", en: "s-curve" },
      { ja: "消失点", en: "vanishing point" },
      { ja: "ダイナミックな構図", en: "dynamic composition" }
    ],
    "フレーミング・枠 (Framing)": [
      { ja: "フレーミング (枠取り)", en: "framing" },
      { ja: "隙間から覗く", en: "looking through" },
      { ja: "木々の枠", en: "framed by trees" },
      { ja: "窓枠", en: "framed by window" },
      { ja: "アーチ枠", en: "framed by arch" },
      { ja: "円形枠", en: "circular framing" }
    ],
    "空間・バランス (Space & Balance)": [
      { ja: "ネガティブスペース (余白)", en: "negative space" },
      { ja: "ミニマリスト", en: "minimalist" },
      { ja: "ごちゃごちゃした (Maximalist)", en: "cluttered" },
      { ja: "完璧なバランス", en: "perfectly balanced" },
      { ja: "奥行きのある", en: "depth" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-composition") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "composition-section";
      
      const h = document.createElement("div");
      h.textContent = "📐 構図・設計 (Composition)";
      h.style.fontWeight = "bold";
      h.style.color = "#4682b4"; // スチールブルー（設計図イメージ）
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "5px 0 0 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#f0f8ff"; // 淡い青背景
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #d0e0f0";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "4px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".composition-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

