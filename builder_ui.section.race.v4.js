(function(){
  "use strict";
  const VERSION = 4; // 拡張パックC (肌色・メカ・異形セット)
  const KEY = "race";

  const RACE_DATA = {
    "🎨 肌色・スキンカラー (Skin Colors)": [
      { ja: "褐色肌", en: "dark skin" }, { ja: "日焼け肌", en: "tanned skin" },
      { ja: "色白", en: "pale skin" }, { ja: "アルビノ", en: "albino" },
      { ja: "青肌", en: "blue skin" }, { ja: "緑肌", en: "green skin" },
      { ja: "赤肌", en: "red skin" }, { ja: "紫肌", en: "purple skin" },
      { ja: "灰色の肌", en: "grey skin" }, { ja: "金属肌", en: "metallic skin" }
    ],
    "🤖 メカ・サイボーグセット (Mecha Sets)": [
      { label: "アンドロイドセット", val: "android, artificial human, joints, mechanical parts, glowing lines" },
      { label: "サイボーグセット", val: "cyborg, mechanical limbs, half human, sci-fi, armor" },
      { label: "ドールセット (球体関節)", val: "ball-jointed doll, doll joints, artificial skin, porcelain skin" },
      { label: "メカ娘 (フルアーマー)", val: "mecha girl, full armor, robot, helmet, futuristic weapons" },
      { label: "オートマタ (歯車)", val: "automaton, clockwork, gears, steampunk, keyhole on back" }
    ],
    "🐍 異形・モンスター娘セット (Monster Sets)": [
      { label: "ラミアセット (蛇)", val: "lamia, monster girl, snake body, snake tail, scales, long tail" },
      { label: "アラクネセット (蜘蛛)", val: "arachne, monster girl, spider body, spider legs, multiple eyes" },
      { label: "ケンタウロスセット (馬)", val: "centaur, monster girl, horse body, 4 legs, tail" },
      { label: "アルラウネセット (花)", val: "alraune, monster girl, flower body, vines, petals, nature" },
      { label: "ハーピーセット (鳥)", val: "harpy, monster girl, bird wings, bird legs, talons, feathers" },
      { label: "スライム娘セット", val: "slime girl, liquid body, translucent skin, glossy, melting" }
    ],
    "💪 特殊な肉体パーツ (Body Traits)": [
      { ja: "多腕 (4本腕)", en: "multiple arms, 4 arms" }, 
      { ja: "多脚", en: "multiple legs" },
      { ja: "単眼 (モノアイ)", en: "cyclops, single eye" }, 
      { ja: "三つ目", en: "third eye" },
      { ja: "複眼", en: "compound eyes" }, 
      { ja: "異形頭", en: "object head" },
      { ja: "翼 (背中)", en: "wings" }, 
      { ja: "コウモリの翼", en: "bat wings" }
    ]
  };

  // 翻訳辞書 (構成要素を完全網羅)
  const DICT = {
    // Skin Colors
    "dark skin": "褐色肌", "tanned skin": "日焼け肌", "pale skin": "色白肌", 
    "albino": "アルビノ", "blue skin": "青肌", "green skin": "緑肌", 
    "red skin": "赤肌", "purple skin": "紫肌", "grey skin": "灰色の肌", 
    "metallic skin": "金属肌",

    // Mecha Components
    "android": "アンドロイド", "artificial human": "人造人間", "joints": "関節", 
    "mechanical parts": "機械部品", "glowing lines": "光るライン", 
    "cyborg": "サイボーグ", "mechanical limbs": "機械の四肢", "half human": "半人間", 
    "sci-fi": "SF", "armor": "アーマー", "ball-jointed doll": "球体関節人形", 
    "doll joints": "ドール関節", "artificial skin": "人工皮膚", "porcelain skin": "陶器の肌", 
    "mecha girl": "メカ娘", "full armor": "フルアーマー", "robot": "ロボット", 
    "helmet": "ヘルメット", "futuristic weapons": "未来的な武器", 
    "automaton": "オートマタ", "clockwork": "時計仕掛け", "gears": "歯車", 
    "steampunk": "スチームパンク", "keyhole on back": "背中の鍵穴",

    // Monster Components
    "lamia": "ラミア", "monster girl": "モンスター娘", "snake body": "蛇の体", 
    "snake tail": "蛇の尾", "scales": "鱗", "long tail": "長い尻尾", 
    "arachne": "アラクネ", "spider body": "蜘蛛の体", "spider legs": "蜘蛛の脚", 
    "multiple eyes": "複数の目", "centaur": "ケンタウロス", "horse body": "馬の体", 
    "4 legs": "四本足", "tail": "尻尾", "alraune": "アルラウネ", 
    "flower body": "花の体", "vines": "ツタ", "petals": "花弁", "nature": "自然", 
    "harpy": "ハーピー", "bird wings": "鳥の翼", "bird legs": "鳥の脚", 
    "talons": "鉤爪", "feathers": "羽", "slime girl": "スライム娘", 
    "liquid body": "液体の体", "translucent skin": "半透明の肌", 
    "glossy": "光沢", "melting": "溶解",

    // Traits
    "multiple arms": "多腕", "4 arms": "4本腕", "multiple legs": "多脚", 
    "cyclops": "単眼", "single eye": "一つ目", "third eye": "三つ目", 
    "compound eyes": "複眼", "object head": "異形頭", "wings": "翼", 
    "bat wings": "コウモリ翼"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

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
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";

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
      root.className = "race-v4-container";
      
      Object.entries(RACE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".race-v4-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

