// Auto-generated bundle for section 'shadow'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.shadow.v1.js ---
(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "shadow"; 

  const BASIC_SHADOW = {
    "🌑 影の形・種類 (Basic Shadow)": [
      { ja: "濃い影", en: "deep shadow" },
      { ja: "暗い影", en: "dark shadow" },
      { ja: "重い影", en: "heavy shadow" },
      { ja: "強い影", en: "strong shadow" },
      { ja: "シャープな影", en: "sharp shadow" },
      { ja: "柔らかい影", en: "soft shadow" },
      { ja: "長い影", en: "long shadow" },
      { ja: "ドロップシャドウ", en: "drop shadow" },
      { ja: "シルエット", en: "silhouette" },
      { ja: "影なし (フラット)", en: "no shadow" },
      { ja: "顔に落ちる影", en: "shadow on face" },
      { ja: "目の影", en: "shaded eyes" }
    ]
  };

  const ADV_SHADOW = {
    "🌗 コントラスト・技術 (Advanced Shadow)": [
      { ja: "キアロスクーロ (明暗法)", en: "chiaroscuro" },
      { ja: "高コントラスト", en: "high contrast" },
      { ja: "低コントラスト", en: "low contrast" },
      { ja: "レイトレーシング影", en: "ray tracing" },
      { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "ダイナミックシェーディング", en: "dynamic shading" }
    ]
  };

  // ★新規追加カテゴリー
  const CREATIVE_SHADOW = {
    "🎨 影の演出 (Creative Shadows)": [
      { ja: "セルフシャドウ (自身の影)", en: "self shadow" },
      { ja: "キャストシャドウ (落ちる影)", en: "cast shadow" },
      { ja: "色付きの影", en: "colored shadow" },
      { ja: "接地面の影 (コンタクト)", en: "contact shadow" },
      { ja: "複雑な影", en: "complex shadow" },
      { ja: "偶然できた影", en: "accidental shadow" },
      { ja: "ドラマチックな影", en: "dramatic shadow" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.getElementById("list-lighting") || container;
      if (!parent) return;

      // Coreが作成した中身エリア(.section-content)を探す
      const innerContent = parent.querySelector(".section-content");
      const targetArea = innerContent || parent;

      const oldEl = document.getElementById("shadow-main-group");
      if (oldEl) oldEl.remove();

      const shadowMain = document.createElement("details");
      shadowMain.id = "shadow-main-group";
      shadowMain.style.cssText = "margin-top:10px; margin-bottom:10px; border:2px solid #ccc; border-radius:6px; background:#fff;";
      shadowMain.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.innerHTML = "🌑 Shadow (Shadow)";
      mainSummary.style.cssText = "padding:12px; font-weight:bold; cursor:pointer; background:#eee; color:#333; font-size:1.05em;";
      shadowMain.appendChild(mainSummary);

      const shadowContent = document.createElement("div");
      shadowContent.style.padding = "10px";

      const createSubSection = (title, items, borderColor, bgColor, titleColor) => {
        const details = document.createElement("details");
        details.style.cssText = `margin-bottom:10px; border:1px solid ${borderColor}; border-radius:4px; background:#fff;`;
        details.open = false;
        
        const sum = document.createElement("summary");
        sum.innerHTML = title;
        sum.style.cssText = `padding:10px; font-weight:bold; cursor:pointer; background:${bgColor}; color:${titleColor};`;
        details.appendChild(sum);

        const inner = document.createElement("div");
        inner.style.padding = "8px";

        Object.entries(items).forEach(([cat, list]) => {
           const catDet = document.createElement("details");
           catDet.style.marginBottom = "6px";
           catDet.style.borderLeft = `3px solid ${borderColor}`;
           catDet.style.paddingLeft = "8px";
           catDet.open = false;

           const catSum = document.createElement("summary");
           catSum.textContent = cat;
           catSum.style.cursor="pointer"; catSum.style.fontSize="0.9em"; catSum.style.fontWeight="bold";
           catDet.appendChild(catSum);

           const grid = document.createElement("div");
           grid.style.display="flex"; grid.style.flexWrap="wrap"; grid.style.gap="8px"; grid.style.padding="5px";
           
           list.forEach(item => {
             const lbl = document.createElement("label");
             lbl.style.fontSize="0.85em"; lbl.style.display="flex"; lbl.style.alignItems="center"; lbl.style.cursor="pointer";
             const cb = document.createElement("input");
             cb.type="checkbox"; cb.dataset.en = item.en;
             lbl.appendChild(cb); lbl.appendChild(document.createTextNode(item.ja));
             grid.appendChild(lbl);
           });
           catDet.appendChild(grid);
           inner.appendChild(catDet);
        });
        details.appendChild(inner);
        return details;
      };

      shadowContent.appendChild(createSubSection("🔦 基本・影 (Basic)", BASIC_SHADOW, "#ccc", "#f9f9f9", "#444"));
      shadowContent.appendChild(createSubSection("✨ 高度・コントラスト (Advanced)", ADV_SHADOW, "#7048e8", "#f3f0ff", "#5f3dc4"));
      // ★新しいセクションを追加
      shadowContent.appendChild(createSubSection("🎨 影の演出 (Creative)", CREATIVE_SHADOW, "#e91e63", "#fce4ec", "#880e4f"));

      shadowMain.appendChild(shadowContent);
      targetArea.appendChild(shadowMain);

      if (window.__outputTranslation) {
        const dict = {};
        const allItems = [
          ...Object.values(BASIC_SHADOW).flat(), 
          ...Object.values(ADV_SHADOW).flat(),
          ...Object.values(CREATIVE_SHADOW).flat()
        ];
        allItems.forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const root = document.getElementById("shadow-main-group");
      if(root) {
        root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

