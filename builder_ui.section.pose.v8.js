(function(){
  "use strict";

  const VERSION = 8; 
  const KEY = "pose"; 

  const POSE_DATA_LIMBS = {
    "🏃‍♂️ 運動・移動アクション (Movement & Sports)": {
      "移動": [
        { ja: "歩く", en: "walking" },
        { ja: "走る", en: "running" },
        { ja: "追いかける", en: "chasing" },
        { ja: "ジャンプ", en: "jumping" },
        { ja: "四つん這いで進む", en: "crawling" }
      ],
      "アクティビティ": [
        { ja: "遊ぶ (Playing)", en: "playing" },
        { ja: "ストレッチ", en: "stretching" },
        { ja: "登る", en: "climbing" },
        { ja: "ぶら下がる", en: "hanging" },
        { ja: "バランスを取る", en: "balancing" },
        { ja: "回転する", en: "spinning" },
        { ja: "ポールダンス", en: "pole dancing" },
        { ja: "踊る", en: "dancing" }
      ]
    },
    "💃 パフォーマンス・入浴 (Action & Bath)": {
      "アクション": [
        { ja: "拍手する", en: "clapping" },
        { ja: "応援する", en: "cheering" },
        { ja: "尻尾を振る", en: "tail wagging" },
        { ja: "もがく", en: "struggling" }
      ],
      "入浴・水": [
        { ja: "入浴する", en: "bathing" },
        { ja: "混浴", en: "mixed-sex bathing" }, // ★復活
        { ja: "体を洗う", en: "washing body" },
        { ja: "体を乾かす/拭く", en: "drying, holding towel" }, // ★復活
        { ja: "水しぶき", en: "splashing" },
        { ja: "滴る (Wet)", en: "dripping, wet" }
      ]
    },
    "🦵 足・脚・全身 (Body Actions)": {
      "ポーズ": [
        { ja: "Tポーズ", en: "t-pose" },
        { ja: "マッスルポーズ", en: "flexing" },
        { ja: "驚きの腕", en: "surprised arms" },
        { ja: "胸が揺れる", en: "bouncing breasts" }
      ],
      "脚・足": [
        { ja: "Y字バランス", en: "standing split" },
        { ja: "開脚", en: "split" },
        { ja: "片足立ち", en: "standing on one leg" },
        { ja: "足指を広げる", en: "spread toes" }
      ]
    },
    "🧘 座り・姿勢 (Sitting & Posture)": {
      "座り方": [
        { ja: "正座", en: "seiza" },
        { ja: "あぐら", en: "indian style" },
        { ja: "座禅", en: "lotus position" },
        { ja: "立ち膝", en: "kneeling" },
        { ja: "ヤンキー座り", en: "squatting" },
        { ja: "カーテシー", en: "curtsey" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_LIMBS).forEach(subCats => {
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              const key = item.en.split(/,\s*/)[0];
              dict[key] = item.ja;
              dict[item.en] = item.ja;
            }
          });
        });
        window.__outputTranslation.register(dict);
      }

      const mount = () => {
        const root = document.getElementById("pose-master-root");
        if (!root) { setTimeout(mount, 100); return; }
        
        if (document.getElementById("pose-v8-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v8-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#5d4037; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ ACTION & MOVEMENT (v8)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_LIMBS, "v8-limbs");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

