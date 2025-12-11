(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "texture";

  const CATEGORIES = {
    "肌の質感 (Skin Texture)": [
      { ja: "陶器のような肌 (つるつる)", en: "porcelain skin" },
      { ja: "光沢/ツヤ肌", en: "glossy skin" },
      { ja: "オイル肌 (ぬめり)", en: "oily skin" },
      { ja: "濡れた肌/汗ばんだ", en: "wet skin, sweat" },
      { ja: "マットな肌", en: "matte skin" },
      { ja: "高精細な肌理 (きめ)", en: "highly detailed skin" },
      { ja: "サブサーフェス (透け感)", en: "subsurface scattering" }, // ★重要：肌の透明感
      { ja: "リアルな肌 (毛穴等)", en: "realistic skin texture" }
    ],
    "布・衣装の材質 (Fabric Materials)": [
      { ja: "ラテックス/ラバー", en: "latex" },
      { ja: "レザー (革)", en: "leather" },
      { ja: "シャイニーレザー (エナメル)", en: "shiny leather" },
      { ja: "シルク (絹)", en: "silk" },
      { ja: "サテン", en: "satin" },
      { ja: "ベルベット (起毛)", en: "velvet" },
      { ja: "レース", en: "lace" },
      { ja: "デニム", en: "denim" },
      { ja: "ニット/羊毛", en: "knitted fabric" },
      { ja: "シースルー (透け素材)", en: "see-through fabric" }
    ],
    "硬質・環境素材 (Hard Surface)": [
      { ja: "金属 (メタル)", en: "metal" },
      { ja: "錆びた金属", en: "rusty metal" },
      { ja: "黄金 (ゴールド)", en: "gold" },
      { ja: "ガラス", en: "glass" },
      { ja: "プラスチック", en: "plastic" },
      { ja: "木材 (ウッド)", en: "wooden texture" },
      { ja: "水/液体", en: "liquid" },
      { ja: "氷", en: "ice texture" }
    ],
    "微細ディテール・汚れ (Micro Details)": [
      { ja: "刺繍 (ししゅう)", en: "embroidery" },
      { ja: "ステッチ (縫い目)", en: "stitches" },
      { ja: "ひび割れ", en: "cracked" },
      { ja: "ひっかき傷", en: "scratches" },
      { ja: "汚れ/泥", en: "dirty" },
      { ja: "埃 (ほこり)", en: "dust" },
      { ja: "摩耗/使い古した", en: "worn out" },
      { ja: "不完全さ (リアリティ)", en: "imperfections" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-texture") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "texture-section";
      
      const h = document.createElement("div");
      h.textContent = "🧶 素材・質感 (Material/Texture)";
      h.style.fontWeight = "bold";
      h.style.color = "#556b2f"; // オリーブ色（素材感）
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        // 肌と布はよく使うのでデフォルトで開けておいても良いが、数が多いので閉じておく
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
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
          label.style.backgroundColor = "#f4f4f0"; // 生成り色っぽい背景
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #e0e0d0";
          
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
      document.querySelectorAll(".texture-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
