(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "quality_preset";

  // === 1. プリセット (Tag Sets) ===
  const PRESETS = {
    "🏆 基本・汎用 (Standard & High Quality)": [
      {
        label: "基本・最高画質 (Standard Masterpiece)",
        val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (clearest output)"
      },
      {
        label: "アニメ塗り (Anime Style)",
        val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors)"
      },
      {
        label: "フォトリアル (Photorealistic)",
        val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo)"
      }
    ]
  };

  // === 2. クオリティ詳細設定 ===
  const CATEGORIES = {
    "基本クオリティ (Essential Quality)": [
      { ja: "傑作", en: "masterpiece" }, { ja: "最高画質", en: "best quality" },
      { ja: "高画質", en: "high quality" }, { ja: "素晴らしい品質", en: "amazing quality" },
      { ja: "非常に美的", en: "very aesthetic" }, { ja: "信じられないほど詳細", en: "incredibly absurdres" },
      { ja: "公式アート", en: "official art" }, { ja: "キービジュアル", en: "key visual" }
    ],
    "解像度・密度 (Resolution & Density)": [
      { ja: "超高解像度 (Absurdres)", en: "absurdres" },
      { ja: "8k解像度", en: "8k resolution" },
      { ja: "詳細な肌", en: "extremely detailed skin" },
      { ja: "詳細な背景", en: "detailed background" }
    ]
  };

  // ★ プリセット内ワード用の補完辞書
  const PRESET_DICT = {
    "high resolution": "高解像度",
    "highly detailed": "非常に詳細",
    "beautiful detailed face": "美しく詳細な顔",
    "perfect anatomy": "完璧な解剖学",
    "clearest output": "最も鮮明な出力",
    "anime style": "アニメスタイル",
    "cel shading": "セルルック",
    "vibrant colors": "鮮やかな色",
    "photorealistic": "フォトリアル",
    "realistic": "リアル",
    "raw photo": "生写真",
    "detailed background": "詳細な背景"
  };

  // UI構築ヘルパー
  function createAccordionGroup(title, items, isPreset) {
    const details = document.createElement("details");
    details.style.marginBottom = "8px";
    details.open = false; // 閉じておく

    const summary = document.createElement("summary");
    summary.textContent = title;
    summary.style.fontWeight = "bold";
    summary.style.cursor = "pointer";
    summary.style.marginBottom = "5px";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.style.padding = "5px";
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    content.style.gap = "5px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.style.cursor = "pointer";
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      
      if (isPreset) {
        cb.dataset.val = item.val;
        label.title = item.val;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label));
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
      }
      
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "quality-preset-v1-base";

      Object.entries(PRESETS).forEach(([cat, items]) => {
        section.appendChild(createAccordionGroup(cat, items, true));
      });

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        section.appendChild(createAccordionGroup(cat, items, false));
      });

      parent.appendChild(section);

      // ★ 翻訳辞書登録 (カテゴリ + 補完辞書)
      if (window.__outputTranslation) {
        const dict = { ...PRESET_DICT }; // 補完辞書をベースに
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-v1-base input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

