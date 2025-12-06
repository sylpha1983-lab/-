(function(){
  "use strict";
  
  const VERSION = 1;
  const KEY = "lighting";

  const CATEGORIES = {
    "光の向き・種類 (Direction & Type)": [
      { ja: "逆光", en: "backlighting" },
      { ja: "リムライト (輪郭光)", en: "rim light" },
      { ja: "サイドライト", en: "side lighting" },
      { ja: "トップライト", en: "top lighting" },
      { ja: "下からの光", en: "lighting from below" },
      { ja: "自然光", en: "natural light" },
      { ja: "人工灯", en: "artificial lighting" }
    ],
    "光の質・雰囲気 (Quality & Mood)": [
      { ja: "シネマティック照明", en: "cinematic lighting" },
      { ja: "ボリュメトリック (光の筋)", en: "volumetric lighting" },
      { ja: "柔らかい光", en: "soft lighting" },
      { ja: "ドラマチック", en: "dramatic lighting" },
      { ja: "薄暗い", en: "dimly lit" },
      { ja: "薄明かり", en: "crepuscular rays" },
      { ja: "生物発光", en: "bioluminescence" },
      { ja: "ネオンライト", en: "neon lights" },
      { ja: "木漏れ日", en: "komorebi" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-lighting") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "lighting-v1";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "lighting-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        section.appendChild(details);
      });

      parent.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".lighting-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

