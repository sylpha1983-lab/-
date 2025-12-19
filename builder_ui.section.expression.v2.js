(function(){
  "use strict";
  const VERSION = 2; // 統合版: パーツ詳細 & 漫符
  const KEY = "expression";

  const EXPRESSION_DATA = {
    "👀 目の形・瞳 (Eyes)": [
      { ja: "ツリ目", en: "tsurime" }, { ja: "タレ目", en: "tareme" },
      { ja: "半目 (ジト目)", en: "jitome" }, { ja: "目を閉じる", en: "closed eyes" },
      { ja: "片目閉じ (ウインク)", en: "one eye closed" }, { ja: "細めた目", en: "squinting" },
      { ja: "見開いた目", en: "wide eyes" }, { ja: "ハート目", en: "heart-shaped pupils" },
      { ja: "しいたけ目", en: "symbol-shaped pupils" }, { ja: "星目", en: "star-shaped pupils" },
      { ja: "オッドアイ", en: "heterochromia" }, { ja: "ハイライトなし", en: "empty eyes" },
      { ja: "ぐるぐる目", en: "swirl eyes" }, { ja: "三白眼", en: "sanpaku" }
    ],
    "👄 口・舌・歯 (Mouth)": [
      { ja: "口を開ける", en: "open mouth" }, { ja: "口を閉じる", en: "closed mouth" },
      { ja: "半開き", en: "parted lips" }, { ja: "むくれ顔 (Pout)", en: "pout" },
      { ja: "舌出し", en: "tongue out" }, { ja: "猫口 (:3)", en: "cat mouth" },
      { ja: "三角口", en: "triangle mouth" }, { ja: "牙 (八重歯)", en: "fangs" },
      { ja: "ギザ歯", en: "shark teeth" }, { ja: "歯を食いしばる", en: "clenched teeth" },
      { ja: "リップ (化粧)", en: "lipstick" }
    ],
    "😳 顔面演出・漫符 (Face Effects)": [
      { ja: "赤面 (Blush)", en: "blush" }, { ja: "激しい赤面", en: "heavy blush" },
      { ja: "青ざめる", en: "blue lines on face" }, { ja: "顔に影", en: "shadow over face" },
      { ja: "涙目", en: "tearing up" }, { ja: "鼻血", en: "nosebleed" },
      { ja: "よだれ", en: "drooling" }, { ja: "そばかす", en: "freckles" },
      { ja: "怒りマーク", en: "anger vein" }, { ja: "汗 (飛び散る)", en: "flying sweatdrops" },
      { ja: "ため息", en: "sigh" }, { ja: "絆創膏", en: "bandage on face" }
    ]
  };

  const DICT = {
    "tsurime": "ツリ目", "tareme": "タレ目", "jitome": "ジト目", "closed eyes": "閉じた目",
    "one eye closed": "片目閉じ", "squinting": "細めた目", "wide eyes": "見開き目",
    "heart-shaped pupils": "ハート目", "symbol-shaped pupils": "しいたけ目", "star-shaped pupils": "星目",
    "heterochromia": "オッドアイ", "empty eyes": "虚ろな目", "swirl eyes": "ぐるぐる目", "sanpaku": "三白眼",
    "open mouth": "開口", "closed mouth": "閉口", "parted lips": "半開き", "pout": "むくれ",
    "tongue out": "舌出し", "cat mouth": "猫口", "triangle mouth": "三角口", "fangs": "牙",
    "shark teeth": "ギザ歯", "clenched teeth": "食いしばり", "lipstick": "リップ",
    "blush": "赤面", "heavy blush": "激しい赤面", "blue lines on face": "青ざめ",
    "shadow over face": "顔に影", "tearing up": "涙目", "nosebleed": "鼻血",
    "drooling": "よだれ", "freckles": "そばかす", "anger vein": "怒りマーク",
    "flying sweatdrops": "飛び散る汗", "sigh": "ため息", "bandage on face": "絆創膏"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-expression");
      if (!parent) return; // v1が作るのを待つ

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
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
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "expression-v2-container";
      
      Object.entries(EXPRESSION_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".expression-v2-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

