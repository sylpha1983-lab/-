(function(){
  "use strict";
  const VERSION = 6; // 拡張パックF (素材・質感・状態)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🧶 生地・素材 (Fabrics & Materials)": [
      { ja: "レザー (革)", en: "leather" }, { ja: "ラテックス", en: "latex" },
      { ja: "PVC (ビニール)", en: "pvc" }, { ja: "デニム", en: "denim" },
      { ja: "ニット", en: "knit" }, { ja: "ツイード", en: "tweed" },
      { ja: "サテン", en: "satin" }, { ja: "シルク", en: "silk" },
      { ja: "ベルベット", en: "velvet" }, { ja: "ファー (毛皮)", en: "fur" },
      { ja: "コーデュロイ", en: "corduroy" }, { ja: "シフォン", en: "chiffon" },
      { ja: "スパンデックス", en: "spandex" }, { ja: "ゴム (ラバー)", en: "rubber" }
    ],
    "✨ 質感・特性 (Textures)": [
      { ja: "光沢あり (Shiny)", en: "shiny" }, { ja: "マット (つや消し)", en: "matte" },
      { ja: "メタリック", en: "metallic" }, { ja: "ホログラフィック", en: "holographic" },
      { ja: "玉虫色 (イリディセント)", en: "iridescent" }, { ja: "透け感 (シースルー)", en: "see-through" },
      { ja: "透明 (クリアパーツ)", en: "transparent" }, { ja: "反射素材", en: "reflective" },
      { ja: "濡れた質感", en: "wet" }
    ],
    "💥 状態・ダメージ (States & Damage)": [
      { ja: "破れた服", en: "torn clothes" }, { ja: "ボロボロ", en: "tattered" },
      { ja: "ダメージ加工", en: "distressed" }, { ja: "はだけた (Open)", en: "open clothes" },
      { ja: "前開き", en: "unzipped" }, { ja: "ボタン外し", en: "unbuttoned" },
      { ja: "濡れた服 (Wet)", en: "wet clothes" }, { ja: "透けブラ", en: "bra visible" },
      { ja: "泥汚れ", en: "muddy" }, { ja: "血まみれ", en: "bloodstained" },
      { ja: "オイルまみれ", en: "oil stains" }, { ja: "焦げ跡", en: "burnt clothes" },
      { ja: "脱ぎかけ", en: "undressing" }
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
      root.className = "attire-v6-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v6-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
