(function(){
  "use strict";
  const VERSION = 2; // 拡張パックA (ケモミミ・動物要素)
  const KEY = "race";

  const RACE_DATA = {
    "🐱 ケモミミ・獣人セット (Kemonomimi Sets)": [
      { label: "猫娘 (Catgirl)", val: "catgirl, cat ears, cat tail" },
      { label: "犬娘 (Doggirl)", val: "dog girl, dog ears, dog tail" },
      { label: "狐娘 (Foxgirl)", val: "fox girl, fox ears, fox tail, fluffy tail" },
      { label: "ウサギ娘 (Bunnygirl)", val: "rabbit girl, rabbit ears, rabbit tail" },
      { label: "狼娘 (Wolfgirl)", val: "wolf girl, wolf ears, wolf tail" },
      { label: "タヌキ娘 (Raccoon)", val: "raccoon girl, raccoon ears, raccoon tail" },
      { label: "牛娘 (Cowgirl)", val: "cow girl, cow ears, cow tail, horns" },
      { label: "羊娘 (Sheepgirl)", val: "sheep girl, sheep ears, sheep horns" },
      { label: "ネズミ娘 (Mousegirl)", val: "mouse girl, mouse ears, mouse tail" },
      { label: "虎娘 (Tigergirl)", val: "tiger girl, tiger ears, tiger tail, tiger stripes" }
    ],
    "👂 耳パーツ (Ears Only)": [
      { ja: "猫耳", en: "cat ears" }, { ja: "犬耳", en: "dog ears" },
      { ja: "狐耳", en: "fox ears" }, { ja: "ウサギ耳", en: "rabbit ears" },
      { ja: "垂れ耳 (Floppy)", en: "floppy ears" }, { ja: "狼耳", en: "wolf ears" },
      { ja: "熊耳", en: "bear ears" }, { ja: "ネズミ耳", en: "mouse ears" },
      { ja: "尖った耳 (Pointy)", en: "pointy ears" }, { ja: "エルフ耳", en: "pointy ears" },
      { ja: "ヘッドフォン (耳代わり)", en: "headphones" }, { ja: "偽の獣耳 (Fake)", en: "fake animal ears" }
    ],
    "🐈 尻尾パーツ (Tail Only)": [
      { ja: "猫尻尾", en: "cat tail" }, { ja: "犬尻尾", en: "dog tail" },
      { ja: "狐尻尾 (ふさふさ)", en: "fox tail" }, { ja: "ウサギ尻尾 (丸)", en: "rabbit tail" },
      { ja: "狼尻尾", en: "wolf tail" }, { ja: "悪魔の尻尾", en: "demon tail" },
      { ja: "複数の尻尾", en: "multiple tails" }, { ja: "九尾の狐", en: "nine tails" },
      { ja: "長い尻尾", en: "long tail" }, { ja: "短い尻尾", en: "short tail" }
    ],
    "🐾 動物的特徴・パーツ (Animal Traits)": [
      { ja: "肉球 (手)", en: "paw pads" }, { ja: "動物の手 (Paws)", en: "paws" },
      { ja: "鋭い爪", en: "claws" }, { ja: "牙 (Fangs)", en: "fangs" },
      { ja: "八重歯", en: "snaggletooth" }, { ja: "動物の鼻", en: "animal nose" },
      { ja: "ひげ (Whiskers)", en: "whiskers" }, { ja: "体毛 (Fur)", en: "fur" },
      { ja: "スリット瞳 (猫目)", en: "slit pupils" }, { ja: "異形肌", en: "colored skin" }
    ]
  };

  // 翻訳辞書
  const DICT = {
    // Sets
    "catgirl": "猫娘", "cat ears": "猫耳", "cat tail": "猫尻尾",
    "dog girl": "犬娘", "dog ears": "犬耳", "dog tail": "犬尻尾",
    "fox girl": "狐娘", "fox ears": "狐耳", "fox tail": "狐尻尾", "fluffy tail": "ふさふさの尻尾",
    "rabbit girl": "ウサギ娘", "rabbit ears": "ウサギ耳", "rabbit tail": "ウサギ尻尾",
    "wolf girl": "狼娘", "wolf ears": "狼耳", "wolf tail": "狼尻尾",
    "raccoon girl": "タヌキ娘", "raccoon ears": "タヌキ耳", "raccoon tail": "タヌキ尻尾",
    "cow girl": "牛娘", "cow ears": "牛耳", "cow tail": "牛尻尾", "horns": "角",
    "sheep girl": "羊娘", "sheep ears": "羊耳", "sheep horns": "羊の角",
    "mouse girl": "ネズミ娘", "mouse ears": "ネズミ耳", "mouse tail": "ネズミ尻尾",
    "tiger girl": "虎娘", "tiger ears": "虎耳", "tiger tail": "虎尻尾", "tiger stripes": "虎縞",

    // Parts
    "floppy ears": "垂れ耳", "bear ears": "熊耳", "pointy ears": "尖った耳/エルフ耳",
    "headphones": "ヘッドフォン", "fake animal ears": "偽の獣耳",
    "demon tail": "悪魔の尻尾", "multiple tails": "複数の尻尾", "nine tails": "九尾",
    "long tail": "長い尻尾", "short tail": "短い尻尾",

    // Traits
    "paw pads": "肉球", "paws": "動物の手", "claws": "爪", "fangs": "牙",
    "snaggletooth": "八重歯", "animal nose": "動物の鼻", "whiskers": "ひげ",
    "fur": "体毛", "slit pupils": "縦長の瞳", "colored skin": "異色肌"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      // v1が作成したコンテナを探す
      let parent = document.querySelector("#list-race");
      if (!parent) return; 

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
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
          cb.style.marginRight = "6px";

          // セット(val)か単体(en)かで分岐
          if (item.val) {
            cb.dataset.val = item.val;
            label.title = item.val;
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.label));
          } else {
            cb.dataset.val = item.en;
            label.appendChild(cb);
            label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          }
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "race-v2-container";
      
      Object.entries(RACE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      // v1のコンテナ内に追加 (v1の構造次第だが、基本的にはappend)
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".race-v2-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
