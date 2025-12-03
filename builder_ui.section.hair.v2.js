(function(){
  "use strict";

  const VERSION = 2; // Add-on
  const KEY = "hair";

  const CATEGORIES = {
    "前髪 (Bangs/Fringe)": [
      { ja: "パッツン前髪", en: "blunt bangs" },
      { ja: "分け目あり", en: "parted bangs" },
      { ja: "メカクレ (片目)", en: "hair over one eye" },
      { ja: "メカクレ (両目)", en: "hair over eyes" },
      { ja: "目にかかる髪", en: "hair between eyes" },
      { ja: "斜め分け", en: "swept bangs" },
      { ja: "デコ出し", en: "forehead" },
      { ja: "オールバック", en: "swept back" }
    ],
    "髪質・テクスチャ (Texture)": [
      { ja: "ストレート", en: "straight hair" },
      { ja: "ウェーブ", en: "wavy hair" },
      { ja: "巻き髪 (カール)", en: "curly hair" },
      { ja: "縦ロール", en: "ringlets" },
      { ja: "ボサボサ", en: "messy hair" },
      { ja: "ツンツン (スパイキー)", en: "spiky hair" },
      { ja: "シルキー (光沢)", en: "silky hair" },
      { ja: "濡れ髪", en: "wet hair" }
    ],
    "特殊な髪色 (Advanced Colors)": [
      { ja: "グラデーション", en: "gradient hair" },
      { ja: "マルチカラー", en: "multicolored hair" },
      { ja: "ツートンカラー", en: "two-tone hair" },
      { ja: "メッシュ/筋", en: "streaked hair" },
      { ja: "インナーカラー", en: "inner color" },
      { ja: "虹色", en: "rainbow hair" },
      { ja: "毛先のみ色違い", en: "colored tips" }
    ]
  };

  const API = {
    initUI(container) {
      // 合体モード: 既存UIを消さずに追加
      const section = document.createElement("div");
      section.className = "hair-v2-addon";
      section.style.borderTop = "2px dashed #ccc";
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";

      const title = document.createElement("div");
      title.textContent = "▼ 質感・属性 (v2 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
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
      container.appendChild(section);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v2-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
