(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "hair";

  const CATEGORIES = {
    "髪の長さ (Length)": [
      { ja: "ショートヘア", en: "short hair" },
      { ja: "ミディアムヘア", en: "medium hair" },
      { ja: "ロングヘア", en: "long hair" },
      { ja: "ベリーロング", en: "very long hair" },
      { ja: "スーパーロング", en: "absurdly long hair" }
    ],
    "基本スタイル (Basic Styles)": [
      { ja: "ボブカット", en: "bob cut" },
      { ja: "ショートボブ", en: "short bob" },
      { ja: "ピクシーカット", en: "pixie cut" },
      { ja: "姫カット", en: "hime cut" },
      { ja: "ウルフカット", en: "wolf cut" },
      { ja: "シャギー", en: "shaggy hair" },
      { ja: "マッシュルーム", en: "bowl cut" }
    ],
    "結び髪・テール (Tails)": [
      { ja: "ポニーテール", en: "ponytail" },
      { ja: "サイドポニー", en: "side ponytail" },
      { ja: "ツインテール", en: "twintails" },
      { ja: "ローツインテール", en: "low twintails" },
      { ja: "ツーサイドアップ", en: "two side up" }
    ],
    "髪色 (Basic Colors)": [
      { ja: "金髪", en: "blonde hair" },
      { ja: "黒髪", en: "black hair" },
      { ja: "茶髪", en: "brown hair" },
      { ja: "銀髪", en: "silver hair" },
      { ja: "白髪", en: "white hair" },
      { ja: "赤髪", en: "red hair" },
      { ja: "青髪", en: "blue hair" },
      { ja: "ピンク髪", en: "pink hair" },
      { ja: "紫髪", en: "purple hair" },
      { ja: "緑髪", en: "green hair" },
      { ja: "オレンジ髪", en: "orange hair" },
      { ja: "グレー髪", en: "grey hair" }
    ]
  };

  const API = {
    initUI(container) {
      // v1 (Base) なので、コンテナを一度クリアして初期化する
      const parent = document.querySelector("#list-hair") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "hair-v1-base";

      const title = document.createElement("div");
      title.textContent = "▼ ヘアスタイル設定 (v1 Base)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
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
        
        // 髪型カテゴリは排他選択（長さや色は1つが望ましいため）
        details.addEventListener("change", e => {
          if (e.target.type === "checkbox" && e.target.checked) {
            details.querySelectorAll("input[type='checkbox']").forEach(c => {
              if (c !== e.target) c.checked = false;
            });
          }
        });

        section.appendChild(details);
      });

      parent.appendChild(section);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v1-base input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
