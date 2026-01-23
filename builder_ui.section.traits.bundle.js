// Auto-generated bundle for section 'traits'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.traits.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "traits";

  const CATEGORIES = {
    "性格・属性 (Personality)": [
      { ja: "ツンデレ", en: "tsundere" },
      { ja: "クーデレ (冷静)", en: "kuudere" },
      { ja: "ヤンデレ", en: "yandere" },
      { ja: "おっとり/天然", en: "ditz" },
      { ja: "元気/活発", en: "energetic" },
      { ja: "内気/シャイ", en: "shy" },
      { ja: "ミステリアス", en: "enigmatic" },
      { ja: "高貴/お嬢様", en: "ojousama" },
      { ja: "悪役令嬢/ヴィラン", en: "villainess" },
      { ja: "無表情", en: "expressionless" },
      { ja: "自信家", en: "confident" }
    ],
    "身体特徴・マーク (Body Marks)": [
      { ja: "泣きぼくろ (目の下)", en: "mole under eye" },
      { ja: "口元のほくろ", en: "mole under mouth" },
      { ja: "そばかす", en: "freckles" },
      { ja: "日焼け跡", en: "tan lines" },
      { ja: "傷跡 (顔)", en: "scar on face" },
      { ja: "タトゥー", en: "tattoo" },
      { ja: "紋章/刻印", en: "crest" },
      { ja: "異色肌 (青肌等)", en: "colored skin" }, 
      { ja: "オッドアイ", en: "heterochromia" }
    ],
    "トレードマーク (Signature Items)": [
      { ja: "眼鏡", en: "glasses" },
      { ja: "サングラス", en: "sunglasses" },
      { ja: "眼帯", en: "eyepatch" },
      { ja: "マスク/覆面", en: "mask" },
      { ja: "ヘッドフォン", en: "headphones" },
      { ja: "チョーカー", en: "choker" },
      { ja: "リボン (髪飾り)", en: "hair ribbon" },
      { ja: "魔導書", en: "grimoire" },
      { ja: "武器 (剣)", en: "holding sword" },
      { ja: "杖", en: "holding staff" },
      { ja: "タバコ", en: "cigarette" }
    ]
    // テーマカラーはAtmosphereへ移動済み
  
    ,
    "🤖 メカ方向性 (Mecha Direction)": [
      { ja: "メカ工学ノリ", en: "mecha engineering" },
      { ja: "軍用ハード感", en: "military hardware" },
      { ja: "航空宇宙っぽい部品感", en: "aerospace hardware" },
      { ja: "ロボ工学感", en: "robotics" },
      { ja: "産業機械感", en: "industrial machinery" },
      { ja: "ディーゼルパンク機械", en: "dieselpunk machinery" },
      { ja: "近未来テック", en: "near-future tech" }
    ]
};

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-traits") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "traits-section";
      
      const h = document.createElement("div");
      h.textContent = "🆔 キャラクター固有要素 (Traits/Identity)";
      h.style.fontWeight = "bold";
      h.style.color = "#d9534f"; 
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
      document.querySelectorAll(".traits-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

