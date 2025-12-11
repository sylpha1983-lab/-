(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "accessories";

  const CATEGORIES = {
    "頭部の装飾・帽子 (Headgear)": [
      { ja: "帽子 (ハット)", en: "hat" },
      { ja: "キャップ", en: "cap" },
      { ja: "ベレー帽", en: "beret" },
      { ja: "リボン (髪飾り)", en: "hair ribbon" },
      { ja: "カチューシャ", en: "hairband" },
      { ja: "ティアラ/王冠", en: "crown" },
      { ja: "ベール", en: "veil" },
      { ja: "ヘルメット", en: "helmet" },
      { ja: "ヘッドフォン", en: "headphones" },
      { ja: "ヘアピン/髪留め", en: "hair ornament" },
      { ja: "狐面/マスク", en: "mask" },
      { ja: "バイザー", en: "visor" }
    ],
    "ジュエリー・装身具 (Jewelry)": [
      { ja: "イヤリング/ピアス", en: "earrings" },
      { ja: "ネックレス", en: "necklace" },
      { ja: "チョーカー", en: "choker" },
      { ja: "指輪", en: "ring" },
      { ja: "ブレスレット", en: "bracelet" },
      { ja: "ブローチ", en: "brooch" },
      { ja: "真珠 (パール)", en: "pearls" },
      { ja: "宝石", en: "gemstone" },
      { ja: "ボディピアス", en: "body piercing" }
    ],
    "手持ちアイテム・武器 (Handheld & Weapons)": [
      { ja: "剣 (ソード)", en: "sword" },
      { ja: "刀 (カタナ)", en: "katana" },
      { ja: "銃 (ガン)", en: "gun" },
      { ja: "盾 (シールド)", en: "shield" },
      { ja: "魔法の杖", en: "magic staff" },
      { ja: "本/魔導書", en: "holding book" },
      { ja: "スマホ", en: "smartphone" },
      { ja: "傘 (アンブレラ)", en: "umbrella" },
      { ja: "カバン/バッグ", en: "bag" },
      { ja: "花束", en: "bouquet" },
      { ja: "扇子", en: "folding fan" },
      { ja: "ぬいぐるみ", en: "stuffed toy" }
    ],
    "その他・背部 (Others)": [
      { ja: "翼 (ウィング)", en: "wings" },
      { ja: "マント/ケープ", en: "cape" },
      { ja: "スカーフ/マフラー", en: "scarf" },
      { ja: "ネクタイ", en: "necktie" },
      { ja: "手袋 (グローブ)", en: "gloves" },
      { ja: "ベルト", en: "belt" },
      { ja: "リュックサック", en: "backpack" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-accessories") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "accessories-section";
      
      const h = document.createElement("div");
      h.textContent = "💍 アクセサリ・小物 (Accessories)";
      h.style.fontWeight = "bold";
      h.style.color = "#c71585"; // ミディアムバイオレットレッド
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "5px 0 0 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "4px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".accessories-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
