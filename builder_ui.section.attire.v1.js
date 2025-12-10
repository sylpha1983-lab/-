(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "attire";

  const CATEGORIES = {
    "現代・トップス (Modern Tops)": [
      { ja: "Tシャツ", en: "t-shirt" }, { ja: "シャツ", en: "shirt" }, { ja: "ブラウス", en: "blouse" },
      { ja: "パーカー", en: "hoodie" }, { ja: "セーター", en: "sweater" }, { ja: "タートルネック", en: "turtleneck" },
      { ja: "ニット", en: "ribbed sweater" }, { ja: "タンクトップ", en: "tank top" }, { ja: "キャミソール", en: "camisole" },
      { ja: "オフショルダー", en: "off-shoulder" }, { ja: "カーディガン", en: "cardigan" }, { ja: "ベスト", en: "vest" }
    ],
    "アウター・コート (Outerwear)": [
      { ja: "ジャケット", en: "jacket" }, { ja: "コート", en: "coat" }, { ja: "トレンチコート", en: "trench coat" },
      { ja: "ダッフルコート", en: "duffle coat" }, { ja: "ダウンジャケット", en: "puffer jacket" },
      { ja: "スタジャン", en: "varsity jacket" }, { ja: "ライダース", en: "biker jacket" }, { ja: "ブレザー", en: "blazer" }
    ],
    "ボトムス・ワンピース (Bottoms/Dress)": [
      { ja: "ジーンズ", en: "jeans" }, { ja: "ショートパンツ", en: "shorts" }, { ja: "ホットパンツ", en: "hot pants" },
      { ja: "スカート", en: "skirt" }, { ja: "ミニスカート", en: "miniskirt" }, { ja: "プリーツスカート", en: "pleated skirt" },
      { ja: "ロングスカート", en: "long skirt" }, { ja: "ワンピース", en: "dress" }, { ja: "サロペット", en: "overalls" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      parent.innerHTML = ""; 

      const section = document.createElement("div");
      section.className = "attire-v1-container";

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
      document.querySelectorAll(".attire-v1-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

