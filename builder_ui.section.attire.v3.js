(function(){
  "use strict";
  const VERSION = 3; 
  const KEY = "attire";

  const CATEGORIES = {
    "ファンタジー・RPG (Fantasy)": [
      { ja: "鎧/アーマー", en: "armor" }, { ja: "ビキニアーマー", en: "bikini armor" },
      { ja: "ローブ", en: "robe" }, { ja: "魔法使いのローブ", en: "wizard robe" },
      // マントは accessories に移動したため削除
      { ja: "革鎧", en: "leather armor" },
      { ja: "踊り子衣装", en: "dancer outfit" }, { ja: "冒険者の服", en: "adventurer outfit" }
    ],
    "民族・伝統衣装 (Traditional)": [
      { ja: "着物", en: "kimono" }, { ja: "浴衣", en: "yukata" }, { ja: "振袖", en: "furisode" },
      { ja: "袴", en: "hakama" }, { ja: "チャイナドレス", en: "china dress" },
      { ja: "漢服", en: "hanfu" }, { ja: "アオザイ", en: "ao dai" },
      { ja: "ディアンドル", en: "dirndl" }, { ja: "サリー", en: "sari" }
    ],
    "ファッションスタイル (Style)": [
      { ja: "ゴスロリ", en: "gothic lolita" }, { ja: "ロリータ", en: "lolita fashion" },
      { ja: "パンク", en: "punk fashion" }, { ja: "スチームパンク", en: "steampunk attire" },
      { ja: "サイバーパンク", en: "cyberpunk clothes" }, { ja: "地雷系/病みかわ", en: "yami kawaii" },
      { ja: "テックウェア", en: "techwear" }, { ja: "ギャル", en: "gyaru" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      const section = document.createElement("div");
      section.className = "attire-v3-container";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(130px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
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
      document.querySelectorAll(".attire-v3-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

