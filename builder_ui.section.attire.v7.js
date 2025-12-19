(function(){
  "use strict";
  const VERSION = 7; // 拡張パックG (ファッション系統・サブカル)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🦄 原宿・カワイイ系 (Harajuku/Kawaii)": [
      { ja: "ゆめかわいい", en: "yume kawaii" }, 
      { ja: "病みかわいい", en: "yami kawaii" },
      { ja: "フェアリー系", en: "fairy kei" }, 
      { ja: "デコラ (派手)", en: "decora" },
      { ja: "ポップ系", en: "pop kei" }, 
      { ja: "ロリータ (基本)", en: "lolita fashion" },
      { ja: "原宿スタイル", en: "harajuku style" }
    ],
    "🖤 地雷・量産・ゴシック (Dark/Girly)": [
      { ja: "地雷系 (Jiraikei)", en: "jiraikei" }, 
      { ja: "量産型 (Ryousangata)", en: "ryousangata" },
      { ja: "パステルゴス", en: "pastel goth" }, 
      { ja: "ゴシック", en: "gothic" },
      { ja: "メンヘラ", en: "menhera" }, 
      { ja: "パンク", en: "punk fashion" },
      { ja: "ロック", en: "rock style" }
    ],
    "🌺 ギャル・レトロ・森 (Gal/Retro/Mori)": [
      { ja: "ギャル", en: "gyaru" }, 
      { ja: "姫ギャル", en: "hime gyaru" },
      { ja: "コギャル (90s)", en: "kogal" }, 
      { ja: "森ガール", en: "mori girl" },
      { ja: "ドーリー系 (人形)", en: "dolly kei" }, 
      { ja: "カルトパーティ系", en: "cult party kei" },
      { ja: "アンティークドール", en: "antique doll" },
      { ja: "Y2Kファッション", en: "y2k fashion" }
    ],
    "🎀 ロリータ派生 (Lolita Subgenres)": [
      { ja: "甘ロリ (スウィート)", en: "sweet lolita" }, 
      { ja: "クラロリ (クラシック)", en: "classic lolita" },
      { ja: "ゴスロリ", en: "gothic lolita" }, 
      { ja: "和ロリ (着物風)", en: "wa-lolita" },
      { ja: "中華ロリ (チャイナ風)", en: "qi-lolita" }, 
      { ja: "ミリタリーロリータ", en: "military lolita" },
      { ja: "パンクロリータ", en: "punk lolita" }, 
      { ja: "姫ロリ", en: "hime lolita" }
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
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
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
      root.className = "attire-v7-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      // v1のコンテナに追加
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v7-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
