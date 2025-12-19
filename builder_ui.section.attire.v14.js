(function(){
  "use strict";
  const VERSION = 14; // 拡張パックN (カラーパレット・配色)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎨 基本カラー (Basic Colors)": [
      { ja: "白 (ホワイト)", en: "white" }, { ja: "黒 (ブラック)", en: "black" },
      { ja: "赤 (レッド)", en: "red" }, { ja: "青 (ブルー)", en: "blue" },
      { ja: "緑 (グリーン)", en: "green" }, { ja: "黄 (イエロー)", en: "yellow" },
      { ja: "ピンク", en: "pink" }, { ja: "紫 (パープル)", en: "purple" },
      { ja: "オレンジ", en: "orange" }, { ja: "茶色 (ブラウン)", en: "brown" },
      { ja: "灰色 (グレー)", en: "grey" }, { ja: "ベージュ", en: "beige" }
    ],
    "🌈 ニュアンス・トーン (Tone & Nuance)": [
      { ja: "パステルカラー", en: "pastel colors" }, { ja: "ネオンカラー", en: "neon colors" },
      { ja: "ダークカラー", en: "dark colors" }, { ja: "ライトカラー (淡い)", en: "light colors" },
      { ja: "ビビッド (鮮やか)", en: "vivid colors" }, { ja: "モノクロ", en: "monochrome" },
      { ja: "マットカラー", en: "matte color" }, { ja: "メタリックカラー", en: "metallic color" },
      { ja: "金 (ゴールド)", en: "gold" }, { ja: "銀 (シルバー)", en: "silver" }
    ],
    "🖌️ 特殊色・詳細 (Specific Colors)": [
      { ja: "クリムゾン (深紅)", en: "crimson" }, { ja: "ワインレッド", en: "wine red" },
      { ja: "ネイビー (紺)", en: "navy blue" }, { ja: "ティール (青緑)", en: "teal" },
      { ja: "アクア", en: "aqua" }, { ja: "エメラルド", en: "emerald" },
      { ja: "ラベンダー", en: "lavender" }, { ja: "マゼンタ", en: "magenta" },
      { ja: "オリーブ", en: "olive" }, { ja: "カーキ", en: "khaki" },
      { ja: "クリーム色", en: "cream" }, { ja: "アイボリー", en: "ivory" }
    ],
    "🎭 配色パターン (Color Schemes)": [
      { ja: "ツートンカラー", en: "two-tone" }, { ja: "マルチカラー", en: "multicolored" },
      { ja: "グラデーション", en: "gradient" }, { ja: "レインボー", en: "rainbow" },
      { ja: "トリコロール", en: "tricolor" }, { ja: "白黒 (パンダ)", en: "black and white" },
      { ja: "赤と黒", en: "red and black" }, { ja: "青と白", en: "blue and white" },
      { ja: "ピンクと白", en: "pink and white" }, { ja: "迷彩色の", en: "camouflage colored" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;"; // 色選択だとわかるように少し色を変える
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
      root.className = "attire-v14-container";
      
      // 区切り線を入れる
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ カラーリング (Coloring) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v14-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
