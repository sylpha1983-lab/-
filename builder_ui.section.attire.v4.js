(function(){
  "use strict";
  const VERSION = 4; 
  const KEY = "attire";

  // ★「小物・アクセサリー」を削除し、下着・足元・状態のみに絞りました
  const CATEGORIES = {
    "下着・水着 (Underwear/Swimwear)": [
      { ja: "ビキニ", en: "bikini" }, { ja: "ランジェリー", en: "lingerie" },
      { ja: "ブラジャー", en: "bra" }, { ja: "パンティ", en: "panties" },
      { ja: "紐パン", en: "side-tie panties" }, { ja: "スポーツブラ", en: "sports bra" },
      { ja: "ベビードール", en: "babydoll" }, { ja: "ワンピース水着", en: "one-piece swimsuit" }
    ],
    "レッグウェア・靴 (Legwear/Shoes)": [
      { ja: "ニーソックス", en: "kneehighs" }, { ja: "オーバーニー", en: "thighhighs" },
      { ja: "パンスト", en: "pantyhose" }, { ja: "黒タイツ", en: "black tights" },
      { ja: "網タイツ", en: "fishnets" }, { ja: "ガーターベルト", en: "garter belt" },
      { ja: "スニーカー", en: "sneakers" }, { ja: "ブーツ", en: "boots" },
      { ja: "ハイヒール", en: "high heels" }, { ja: "ローファー", en: "loafers" }
    ],
    // "小物" は builder_ui.section.accessories.v1.js に移動したため削除
    
    "フェチ・状態 (Fetish/State)": [
      { ja: "絶対領域", en: "zettai ryouiki" }, { ja: "透け感", en: "see-through" },
      { ja: "濡れた服", en: "wet clothes" }, { ja: "はだけた", en: "open clothes" },
      { ja: "破れた服", en: "torn clothes" }, { ja: "ぴっちり", en: "skintight" },
      { ja: "谷間", en: "cleavage" }, { ja: "へそ出し", en: "midriff" }
    ]
  };

  const API = {
    initUI(container) {
      // v4専用のコンテナ名を使用しているか確認
      // 既存のリストに追加する場合、親IDは共通の #list-attire でOK
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      const section = document.createElement("div");
      section.className = "attire-v4-container";

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
      document.querySelectorAll(".attire-v4-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

