(function(){
  "use strict";
  const VERSION = 6; // 拡張パックC (パーツ別・構造組み立て)
  const KEY = "hair";

  const HAIR_PARTS = {
    "💇‍♀️ 前髪パーツ (Front / Bangs)": [
      { ja: "パッツン (Blunt)", en: "blunt bangs" },
      { ja: "Ｍ字バング", en: "hair between eyes" },
      { ja: "センター分け", en: "parted bangs" },
      { ja: "片目隠れ (メカクレ)", en: "hair over one eye" },
      { ja: "目隠れ (両目)", en: "hair over eyes" },
      { ja: "デコ出し (All Back)", en: "forehead" },
      { ja: "斜め分け", en: "swept bangs" },
      { ja: "姫カット (サイド)", en: "hime cut" },
      { ja: "アシンメトリー", en: "asymmetrical bangs" },
      { ja: "長い前髪", en: "long bangs" }
    ],
    "💇‍♀️ 後ろ髪・ベース (Back / Base)": [
      { ja: "ショート", en: "short hair" },
      { ja: "ミディアム", en: "medium hair" },
      { ja: "ロング", en: "long hair" },
      { ja: "スーパーロング", en: "very long hair" },
      { ja: "ボブ", en: "bob cut" },
      { ja: "ウルフ", en: "wolf cut" },
      { ja: "シャギー", en: "shaggy hair" },
      { ja: "ストレート", en: "straight hair" },
      { ja: "巻き髪 (カール)", en: "curly hair" },
      { ja: "ウェーブ", en: "wavy hair" }
    ],
    "🎀 結び髪・エクステ (Tails & Buns)": [
      { ja: "ポニーテール", en: "ponytail" },
      { ja: "サイドテール", en: "side ponytail" },
      { ja: "ツインテール", en: "twintails" },
      { ja: "ローツインテ", en: "low twintails" },
      { ja: "ツーサイドアップ", en: "two side up" },
      { ja: "お団子 (バン)", en: "hair bun" },
      { ja: "シニヨン (二つ)", en: "double bun" },
      { ja: "三つ編み (一本)", en: "single braid" },
      { ja: "おさげ (二本)", en: "braids" },
      { ja: "ハーフアップ", en: "half updo" }
    ],
    "⚡ アクセント・アホ毛 (Ahoge & Extra)": [
      { ja: "アホ毛 (1本)", en: "ahoge" },
      { ja: "アンテナ (2本)", en: "antenna hair" },
      { ja: "ハート型アホ毛", en: "heart ahoge" },
      { ja: "巨大アホ毛", en: "huge ahoge" },
      { ja: "はね髪", en: "messy hair" },
      { ja: "インテーク (前髪の立体感)", en: "hair intakes" },
      { ja: "もみあげ", en: "sidelocks" },
      { ja: "ドリルヘアー", en: "drill hair" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(HAIR_PARTS).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-hair");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        // 構造ビルダーは詳細設定なので閉じておく
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#005580;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "hair-v6-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ パーツ別・構造指定 (Structure) ▼";
      root.appendChild(sep);

      Object.entries(HAIR_PARTS).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v6-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
