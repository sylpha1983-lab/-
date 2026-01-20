// Auto-generated bundle for section 'anatomy'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.anatomy.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "anatomy";

  // === 1. データ定義 ===
  const CATEGORIES = {
    "リアル・実写系 (Realistic Anatomy)": [
      { ja: "解剖学的に正確", en: "anatomically accurate" },
      { ja: "正確な人体構造", en: "accurate human anatomy" },
      { ja: "リアルな筋肉・骨格", en: "realistic muscle and bone structure" },
      { ja: "プロポーションの整った体", en: "proportional body" },
      { ja: "高詳細な肌・質感", en: "hyper detailed skin" },
      { ja: "写真のような実在感", en: "photorealistic texture" }
    ],
    "アニメ・誇張表現 (Anime/Natural Structure)": [
      { ja: "自然な身体構造", en: "natural body structure" },
      { ja: "自然なプロポーション", en: "natural body proportions" },
      { ja: "美しい人体ライン", en: "beautiful body line" },
      { ja: "アニメ的な理想体型", en: "ideal anime body" },
      { ja: "ダイナミックな構図への適応", en: "dynamic anatomy" },
      { ja: "崩れにくい作画", en: "stable anatomy" }
    ],
    "手・指の重点補正 (Hands & Fingers)": [
      { ja: "解剖学的に正確な手", en: "anatomically accurate hands" },
      { ja: "美しく自然な手", en: "beautiful and natural hand structure" },
      { ja: "詳細な指", en: "detailed fingers" },
      { ja: "完璧な手", en: "perfect hands" },
      { ja: "指の描写強化", en: "finely detailed fingers" }
    ],
    "顔・表情の整合性 (Face Structure)": [
      { ja: "整った顔立ち", en: "perfect face" },
      { ja: "左右対称の瞳", en: "symmetrical eyes" },
      { ja: "詳細な瞳", en: "detailed eyes" },
      { ja: "自然な顔の陰影", en: "natural face shading" }
    ]
  };

  // === 2. UI構築 ===
  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality") || container; // クオリティ設定の近くに配置推奨
      
      // コンテナ作成
      const section = document.createElement("div");
      section.className = "anatomy-section";
      section.style.marginTop = "10px";
      section.style.borderTop = "1px dashed #ccc";
      section.style.paddingTop = "10px";

      // タイトル
      const title = document.createElement("div");
      title.textContent = "🦴 人体崩壊防止・構造補正 (Anatomy)";
      title.style.fontWeight = "bold";
      title.style.color = "#800000"; // 目立つように濃い赤茶色
      title.style.marginBottom = "5px";
      section.appendChild(title);

      // カテゴリごとの展開UI
      Object.entries(CATEGORIES).forEach(([catName, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "5px";
        
        const summary = document.createElement("summary");
        summary.textContent = catName;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.95em";
        details.appendChild(summary);

        const itemContainer = document.createElement("div");
        itemContainer.style.paddingLeft = "10px";
        itemContainer.style.display = "flex";
        itemContainer.style.flexWrap = "wrap";
        itemContainer.style.gap = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";

          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
          // よく使うものはデフォルトで太字にするなどの装飾
          if(item.en.includes("anatomically") || item.en.includes("natural")) {
            label.style.fontWeight = "500";
          }

          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          itemContainer.appendChild(label);
        });

        details.appendChild(itemContainer);
        section.appendChild(details);
      });

      parent.appendChild(section);

      // 翻訳登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          dict[item.en] = item.ja;
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".anatomy-section input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

