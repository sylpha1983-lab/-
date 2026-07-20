// Auto-generated bundle for section 'bodytype'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.bodytype.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "bodytype";

  const CATEGORIES = {
    "体格・肉付き (Physique)": [
      { ja: "スレンダー (細身)", en: "slender" },
      { ja: "スキニー (痩せ型)", en: "skinny" },
      { ja: "アスレチック (引き締まった)", en: "athletic body" },
      { ja: "トーン (程よい筋肉)", en: "toned body" },
      { ja: "筋肉質 (ムキムキ)", en: "muscular" },
      { ja: "ぽっちゃり", en: "chubby" },
      { ja: "太め (Plump)", en: "plump" },
      { ja: "カーヴィー (曲線美)", en: "curvy" },
      { ja: "ボリュープチュアス (豊満)", en: "voluptuous" },
      { ja: "平均的", en: "average body" }
    ],
    "プロポーション・身長 (Proportions)": [
      { ja: "高身長", en: "tall" },
      { ja: "低身長", en: "short" },
      { ja: "小柄 (Petite)", en: "petite" },
      { ja: "8頭身 (モデル体型)", en: "8 heads tall" },
      { ja: "長い手足", en: "long limbs" },
      { ja: "広い肩幅", en: "broad shoulders" },
      { ja: "くびれたウエスト", en: "narrow waist" },
      { ja: "広い骨盤/ヒップ", en: "wide hips" }
    ],
    "胸・バストサイズ (Bust Size)": [
      { ja: "平らな胸 (Flat)", en: "flat chest" },
      { ja: "小ぶりな胸 (Small)", en: "small breasts" },
      { ja: "中くらいの胸 (Medium)", en: "medium breasts" },
      { ja: "大きな胸 (Large)", en: "large breasts" },
      { ja: "巨乳 (Huge)", en: "huge breasts" },
      { ja: "爆乳 (Gigantic)", en: "gigantic breasts" }
    ],
    "脚・太もも (Legs & Thighs)": [
      { ja: "長い脚", en: "long legs" },
      { ja: "太い太もも (Thick)", en: "thick thighs" },
      { ja: "健康的な脚", en: "healthy legs" }
    ],
    "年齢感 (Age/Maturity)": [
      { ja: "幼い/若々しい", en: "youthful" },
      { ja: "ティーン (10代)", en: "teenager" },
      { ja: "大人びた (Mature)", en: "mature" },
      { ja: "熟女 (Mature Female)", en: "mature female" },
      { ja: "老人/年配", en: "elderly" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-bodytype") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "bodytype-section";
      
      const h = document.createElement("div");
      h.textContent = "🧍 体型・プロポーション (Body Type)";
      h.style.fontWeight = "bold";
      h.style.color = "#8b4513"; // 茶色系
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = (cat.includes("体格")); // 最初だけ開く
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
      document.querySelectorAll(".bodytype-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

