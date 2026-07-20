// Auto-generated bundle for section 'filter'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.filter.v1.js ---
(function(){
  "use strict";

  const VERSION = 1; // 統合して v1 とする
  const KEY = "filter";

  const CATEGORIES = {
    "基本色調・トーン (Base Tone)": [
      { ja: "暖色トーン", en: "warm colour tones" },
      { ja: "寒色トーン", en: "cool-toned" },
      { ja: "モノクロ", en: "monochrome" },
      { ja: "セピア", en: "sepia" },
      { ja: "ソフトトーン", en: "soft tone" },
      { ja: "ビビッド (鮮やか)", en: "vivid" },
      { ja: "フィルム調", en: "film style" },
      { ja: "レトロスタイル", en: "retro style" },
      { ja: "パステルカラー", en: "pastel colors" },
      { ja: "ミュートカラー (くすみ)", en: "muted colors" }
    ],
    "露出・コントラスト (Exposure & Contrast)": [
      { ja: "明るめ (Bright)", en: "bright" },
      { ja: "暗め (Dark)", en: "dark" },
      { ja: "ハイコントラスト", en: "high contrast" },
      { ja: "ローコントラスト", en: "low contrast" },
      { ja: "露出オーバー", en: "overexposed" },
      { ja: "アンダー露出", en: "underexposed" },
      { ja: "HDR (ハイダイナミックレンジ)", en: "HDR" }
    ],
    "レンズ・特殊効果 (Lens & Effects)": [
      { ja: "ボケ効果", en: "bokeh effect" },
      { ja: "背景ぼかし", en: "blurred background" },
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "発光効果", en: "glow effect" },
      { ja: "ブルーム (光の溢れ)", en: "bloom" },
      { ja: "ビネット (四隅落ち)", en: "vignette" },
      { ja: "色収差", en: "chromatic aberration" },
      { ja: "魚眼レンズ", en: "fisheye lens" },
      { ja: "広角レンズ", en: "wide angle lens" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-filter") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "filter-v1-integrated";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "filter-cat";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });

        section.appendChild(details);
      });

      parent.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
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
      document.querySelectorAll(".filter-v1-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

