(function(){
  "use strict";
  const VERSION = 5; // 拡張パックA (髪色・質感・グラデ)
  const KEY = "hair";

  const HAIR_DATA = {
    "🎨 髪色・カラー詳細 (Hair Colors)": [
      { ja: "ブロンド (金髪)", en: "blonde hair" }, { ja: "プラチナブロンド", en: "platinum blonde hair" },
      { ja: "黒髪", en: "black hair" }, { ja: "茶髪 (ブラウン)", en: "brown hair" },
      { ja: "赤髪 (レッド)", en: "red hair" }, { ja: "真紅 (クリムゾン)", en: "crimson hair" },
      { ja: "青髪 (ブルー)", en: "blue hair" }, { ja: "水色 (ライトブルー)", en: "light blue hair" },
      { ja: "ピンク髪", en: "pink hair" }, { ja: "紫髪 (パープル)", en: "purple hair" },
      { ja: "緑髪 (グリーン)", en: "green hair" }, { ja: "銀髪 (シルバー)", en: "silver hair" },
      { ja: "白髪 (ホワイト)", en: "white hair" }, { ja: "オレンジ髪", en: "orange hair" }
    ],
    "🌈 特殊カラー・染め (Special Colors)": [
      { ja: "グラデーション", en: "gradient hair" }, { ja: "マルチカラー", en: "multicolored hair" },
      { ja: "インナーカラー", en: "inner color hair" }, { ja: "メッシュ (Streaked)", en: "streaked hair" },
      { ja: "ツートンカラー", en: "two-tone hair" }, { ja: "スプリットカラー (左右)", en: "split-color hair" },
      { ja: "レインボー", en: "rainbow hair" }, { ja: "毛先のみ色付き", en: "colored tips" },
      { ja: "アホ毛 (色違い)", en: "colored ahoge" }
    ],
    "✨ 質感・状態 (Texture & State)": [
      { ja: "ツヤツヤ (天使の輪)", en: "shiny hair" }, { ja: "光沢 (Glossy)", en: "glossy hair" },
      { ja: "サラサラ (Silky)", en: "silky hair" }, { ja: "濡れた髪", en: "wet hair" },
      { ja: "ボサボサ (Messy)", en: "messy hair" }, { ja: "寝癖", en: "bed hair" },
      { ja: "ウェーブ (巻き髪)", en: "wavy hair" }, { ja: "カーリーヘア", en: "curly hair" },
      { ja: "直毛 (ストレート)", en: "straight hair" }, { ja: "フローティング (浮遊)", en: "floating hair" }
    ]
  };

  // 翻訳辞書
  const DICT = {
    "blonde hair": "金髪", "platinum blonde hair": "プラチナブロンド",
    "black hair": "黒髪", "brown hair": "茶髪", "red hair": "赤髪", "crimson hair": "真紅の髪",
    "blue hair": "青髪", "light blue hair": "水色の髪", "pink hair": "ピンク髪",
    "purple hair": "紫髪", "green hair": "緑髪", "silver hair": "銀髪",
    "white hair": "白髪", "orange hair": "オレンジ髪",
    "gradient hair": "グラデーション髪", "multicolored hair": "マルチカラー髪",
    "inner color hair": "インナーカラー", "streaked hair": "メッシュ髪",
    "two-tone hair": "ツートンカラー", "split-color hair": "スプリットカラー",
    "rainbow hair": "虹色髪", "colored tips": "毛先カラー", "colored ahoge": "色違いアホ毛",
    "shiny hair": "ツヤ髪", "glossy hair": "光沢髪", "silky hair": "サラサラ髪",
    "wet hair": "濡れた髪", "messy hair": "ボサボサ髪", "bed hair": "寝癖",
    "wavy hair": "ウェーブヘア", "curly hair": "カーリーヘア",
    "straight hair": "ストレートヘア", "floating hair": "浮遊する髪"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-hair");
      // もしv4以前が作成したコンテナがなければ作成する
      if (!parent) {
        parent = document.createElement("div");
        parent.id = "list-hair";
        parent.className = "section";
        const h2 = document.createElement("h2");
        h2.textContent = "3. ヘアスタイル (Hair)"; // 順序番号はCoreに依存するが仮置き
        parent.appendChild(h2);
        document.getElementById("sections").appendChild(parent);
      }

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "hair-v5-container";
      
      Object.entries(HAIR_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      // 既存のコンテンツがあればその下に追加
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v5-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
