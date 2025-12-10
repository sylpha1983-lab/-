(function(){
  "use strict";
  const VERSION = 12; // 拡張パックL (サーカス・歴史・概念)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎪 サーカス・舞台衣装 (Circus & Stage)": [
      { ja: "ピエロ衣装", en: "clown suit" }, { ja: "道化師 (ジェスター)", en: "jester costume" },
      { ja: "団長 (リングマスター)", en: "ringmaster outfit" }, { ja: "マジシャン", en: "magician suit" },
      { ja: "バニーマジシャン", en: "magician bunny" }, { ja: "バレエ (チュチュ)", en: "ballet tutu" },
      { ja: "レオタード (曲芸)", en: "acrobat leotard" }, { ja: "カーニバル衣装", en: "carnival costume" },
      { ja: "仮面舞踏会", en: "masquerade dress" }, { ja: "歌姫ドレス", en: "diva dress" }
    ],
    "🏛️ 古典・歴史的衣装 (Ancient & Historical)": [
      { ja: "トーガ (古代ローマ)", en: "toga" }, { ja: "チュニック", en: "tunic" },
      { ja: "グラディエーター", en: "gladiator armor" }, { ja: "シュミーズ", en: "chemise" },
      { ja: "コルセットドレス", en: "corset dress" }, { ja: "クリノリン (骨組み)", en: "crinoline" },
      { ja: "バッスルドレス", en: "bustle dress" }, { ja: "貴族の服", en: "aristocrat clothes" },
      { ja: "農民の服", en: "peasant clothes" }, { ja: "マント (貴族)", en: "royal cape" }
    ],
    "🏴‍☠️ 海賊・無法者 (Pirate & Outlaw)": [
      { ja: "海賊コート", en: "pirate coat" }, { ja: "三角帽子 (トリコーン)", en: "tricorn" },
      { ja: "バンダナ", en: "bandana" }, { ja: "眼帯 (海賊)", en: "eye patch" },
      { ja: "フック (義手)", en: "hook hand" }, { ja: "ボーダーシャツ", en: "striped shirt" },
      { ja: "カウボーイベスト", en: "cowboy vest" }, { ja: "チャップス (革脚絆)", en: "chaps" },
      { ja: "ポンチョ", en: "poncho" }, { ja: "盗賊のマスク", en: "bandit mask" }
    ],
    "🌌 概念・エレメンタル (Conceptual & Elemental)": [
      { ja: "炎のドレス", en: "dress made of fire" }, { ja: "水の服", en: "clothes made of water" },
      { ja: "氷のアーマー", en: "ice armor" }, { ja: "光る服", en: "glowing clothes" },
      { ja: "影の服", en: "shadow clothes" }, { ja: "花のドレス", en: "flower dress" },
      { ja: "葉っぱの服", en: "leaf clothes" }, { ja: "雲のドレス", en: "cloud dress" },
      { ja: "不可視 (インビジブル)", en: "invisible clothes" }, { ja: "エネルギー体", en: "energy body" }
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
      root.className = "attire-v12-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v12-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
