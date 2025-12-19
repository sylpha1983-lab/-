(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "atmosphere"; // 新規キー

  const CATEGORIES = {
    "雰囲気・空気感 (Atmosphere)": [
      { ja: "夢のような雰囲気", en: "dreamlike atmosphere" }, // ★要望
      { ja: "幻想的な雰囲気 (Ethereal)", en: "ethereal atmosphere" }, // ★要望
      { ja: "神々しい雰囲気", en: "divine atmosphere" }, // ★要望
      { ja: "暗い雰囲気", en: "dark atmosphere" }, // ★要望
      { ja: "神秘的", en: "mysterious atmosphere" },
      { ja: "ロマンチック", en: "romantic atmosphere" },
      { ja: "不気味・ホラー", en: "eerie atmosphere" },
      { ja: "陰鬱 (Gloomy)", en: "gloomy atmosphere" },
      { ja: "静寂・穏やか", en: "serene atmosphere" },
      { ja: "未来的・SF", en: "futuristic atmosphere" },
      { ja: "レトロ・懐古", en: "retro atmosphere" },
      { ja: "サイケデリック", en: "psychedelic atmosphere" },
      { ja: "魔法・ファンタジー", en: "magical atmosphere" }
    ],
    "色彩・パレット (Colors & Palette)": [
      { ja: "鮮やかな色", en: "bright colors" }, // ★要望
      { ja: "ビビッドカラー", en: "vivid colors" },
      { ja: "パステルカラー", en: "pastel colors" },
      { ja: "モノクロ", en: "monochrome" },
      { ja: "セピア", en: "sepia" },
      { ja: "彩度低め (Muted)", en: "muted colors" },
      { ja: "ダークカラー", en: "dark colors" },
      { ja: "暖色系 (Warm)", en: "warm color palette" },
      { ja: "寒色系 (Cool)", en: "cool color palette" },
      { ja: "虹色", en: "rainbow colors" },
      { ja: "高コントラスト", en: "high contrast" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-atmosphere") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "atmosphere-section";

      // ヘッダー
      const h = document.createElement("div");
      h.textContent = "🌈 雰囲気・色彩 (Atmosphere & Colors)";
      h.style.fontWeight = "bold";
      h.style.color = "#4b0082";
      h.style.marginBottom = "5px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = true; // よく使うので開いておく
        details.style.marginBottom = "10px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        summary.style.fontSize = "0.95em";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "5px 0 0 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.9em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#f9f9f9";
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #eee";
          
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
      document.querySelectorAll(".atmosphere-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
