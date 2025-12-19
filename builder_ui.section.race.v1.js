(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "race"; 

  // ★ v2, v3, v4 に詳細があるので、v1は基本ファンタジー種族のみに絞る
  const CATEGORIES = {
    "基本ファンタジー種族 (Basic Fantasy)": [
      { ja: "人間", en: "human" },
      { ja: "エルフ", en: "elf" }, 
      { ja: "ダークエルフ", en: "dark elf" },
      { ja: "ドワーフ", en: "dwarf" }, 
      { ja: "ハーフリング/小人", en: "halfling" },
      { ja: "巨人", en: "giant" },
      { ja: "オーク", en: "orc" },
      { ja: "ゴブリン", en: "goblin" }
    ],
    "神聖・邪悪 (Holy & Evil)": [
      { ja: "天使", en: "angel" }, 
      { ja: "堕天使", en: "fallen angel" },
      { ja: "悪魔", en: "demon" }, 
      { ja: "サキュバス", en: "succubus" }
    ],
    "肌の色・スキン属性 (Skin Types)": [
      { ja: "褐色肌", en: "dark skin" }, 
      { ja: "日焼け肌", en: "tan" },
      { ja: "色白", en: "pale skin" }, 
      { ja: "異色肌 (青肌など)", en: "colored skin" },
      { ja: "青肌", en: "blue skin" }, 
      { ja: "緑肌", en: "green skin" },
      { ja: "赤肌", en: "red skin" }, 
      { ja: "グレー肌", en: "grey skin" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-race") || container;
      
      // 親コンテナ作成 (Coreの読み込み順序に依存せず動作するように)
      if (!parent.id) {
         parent.id = "list-race";
         const h2 = document.createElement("h2");
         h2.textContent = "2. 種族・素体 (Race)";
         const existingH2 = parent.querySelector("h2");
         if(existingH2) existingH2.remove();
         parent.prepend(h2);
      }
      
      parent.innerHTML = ""; 

      const section = document.createElement("div");
      section.className = "race-v1";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.marginBottom = "6px";
        details.style.border = "1px solid #eee";
        details.style.borderRadius = "4px";
        details.style.background = "#fff";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px 10px";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        summary.style.color = "#555";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";
        content.style.gap = "6px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.fontSize = "0.9em";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
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
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) dict[item.en] = item.ja;
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".race-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  
  window.__registerPromptPart(KEY, VERSION, API);
})();

