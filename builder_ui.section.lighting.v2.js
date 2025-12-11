(function(){
  "use strict";

  const VERSION = 2; // ambient lighting追加など強化版
  const KEY = "lighting";

  const CATEGORIES = {
    "基本・自然光 (Natural & Basic)": [
      { ja: "自然光", en: "natural lighting" },
      { ja: "太陽光", en: "sunlight" },
      { ja: "ソフトライティング (柔らかい)", en: "soft lighting" },
      { ja: "ハードライティング (硬い)", en: "hard lighting" },
      { ja: "アンビエント (環境光)", en: "ambient lighting" }, // ★追加
      { ja: "シネマティック (映画風)", en: "cinematic lighting" },
      { ja: "ドラマチック", en: "dramatic lighting" },
      { ja: "明るい照明", en: "bright lighting" },
      { ja: "薄暗い照明", en: "dim lighting" }
    ],
    "時間帯・方向 (Time & Direction)": [
      { ja: "朝の光", en: "morning light" },
      { ja: "夕日/夕暮れ", en: "sunset lighting" },
      { ja: "月明かり", en: "moonlight" },
      { ja: "逆光 (バックライト)", en: "backlighting" },
      { ja: "サイドライト", en: "side lighting" },
      { ja: "トップライト", en: "top lighting" },
      { ja: "リムライト (輪郭光)", en: "rim lighting" },
      { ja: "ボリュメトリック (光の筋)", en: "volumetric lighting" },
      { ja: "クレパスキュラー (薄明光線)", en: "crepuscular rays" }
    ],
    "人工・特殊照明 (Artificial & Special)": [
      { ja: "スタジオ照明", en: "studio lighting" },
      { ja: "ネオン照明", en: "neon lighting" },
      { ja: "サイバーパンク照明", en: "cyberpunk lighting" },
      { ja: "キャンドルライト (蝋燭)", en: "candlelight" },
      { ja: "ランタンの光", en: "lantern light" },
      { ja: "暖色系の光", en: "warm lighting" },
      { ja: "寒色系の光", en: "cold lighting" },
      { ja: "多彩な照明", en: "colorful lighting" },
      { ja: "生物発光", en: "bioluminescence" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-lighting") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "lighting-v2-full";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "8px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "8px";
        content.style.padding = "5px 0 0 10px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.9em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
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
      document.querySelectorAll(".lighting-v2-full input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
