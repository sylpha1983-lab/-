(function(){
  "use strict";
  const VERSION = 11; // 拡張パックK (小物・ネイル・持ち物)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "💎 ジュエリー・ピアス (Jewelry)": [
      { ja: "イヤリング/ピアス", en: "earrings" }, { ja: "フープピアス", en: "hoop earrings" },
      { ja: "スタッドピアス", en: "stud earrings" }, { ja: "ドロップピアス", en: "dangle earrings" },
      { ja: "ネックレス", en: "necklace" }, { ja: "パールネックレス", en: "pearl necklace" },
      { ja: "チョーカー", en: "choker" }, { ja: "鎖 (チェーン)", en: "chain" },
      { ja: "指輪", en: "ring" }, { ja: "婚約指輪", en: "engagement ring" },
      { ja: "ブレスレット", en: "bracelet" }, { ja: "腕時計", en: "wristwatch" },
      { ja: "ボディピアス", en: "body piercing" }, { ja: "へそピアス", en: "navel piercing" }
    ],
    "💅 ネイル・手元 (Nails & Hands)": [
      { ja: "マニキュア/ネイル", en: "nail polish" }, { ja: "赤ネイル", en: "red nails" },
      { ja: "黒ネイル", en: "black nails" }, { ja: "ピンクネイル", en: "pink nails" },
      { ja: "長い爪", en: "long nails" }, { ja: "鋭い爪", en: "claws" },
      { ja: "ネイルアート", en: "nail art" }, { ja: "グラデーションネイル", en: "gradient nails" },
      { ja: "指なし手袋", en: "fingerless gloves" }, { ja: "長い手袋", en: "long gloves" },
      { ja: "革手袋", en: "leather gloves" }, { ja: "レース手袋", en: "lace gloves" }
    ],
    "🗡️ 武器・戦闘用品 (Weapons)": [
      { ja: "剣 (ソード)", en: "sword" }, { ja: "日本刀 (カタナ)", en: "katana" },
      { ja: "短剣 (ダガー)", en: "dagger" }, { ja: "大剣", en: "greatsword" },
      { ja: "銃 (ガン)", en: "gun" }, { ja: "拳銃 (ハンドガン)", en: "handgun" },
      { ja: "ライフル", en: "rifle" }, { ja: "魔法の杖", en: "magic staff" },
      { ja: "弓矢", en: "bow and arrow" }, { ja: "大鎌", en: "scythe" },
      { ja: "盾 (シールド)", en: "shield" }, { ja: "ホルスター", en: "holster" }
    ],
    "👜 持ち物・アイテム (Held Items)": [
      { ja: "スマートフォン", en: "smartphone" }, { ja: "本", en: "holding book" },
      { ja: "傘", en: "holding umbrella" }, { ja: "透明傘", en: "transparent umbrella" },
      { ja: "バッグ/鞄", en: "bag" }, { ja: "スクールバッグ", en: "school bag" },
      { ja: "花束", en: "holding flower" }, { ja: "ぬいぐるみ", en: "holding plush toy" },
      { ja: "タバコ", en: "cigarette" }, { ja: "キセル", en: "kiseru" },
      { ja: "扇子", en: "folding fan" }, { ja: "マイク", en: "microphone" }
    ],
    "🎭 マスク・顔装飾 (Masks & Face)": [
      { ja: "マスク (医療用)", en: "mask" }, { ja: "黒マスク", en: "black mask" },
      { ja: "ガスマスク", en: "gas mask" }, { ja: "狐面", en: "fox mask" },
      { ja: "般若面", en: "hannya" }, { ja: "眼帯", en: "eyepatch" },
      { ja: "医療眼帯", en: "medical eyepatch" }, { ja: "包帯 (顔)", en: "bandaged face" },
      { ja: "ヴェール", en: "veil" }, { ja: "サングラス", en: "sunglasses" },
      { ja: "ゴーグル", en: "goggles" }, { ja: "バイザー", en: "visor" }
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
      root.className = "attire-v11-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v11-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
