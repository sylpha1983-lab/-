(function(){
  "use strict";

  const VERSION = 8; 
  const KEY = "pose"; 

  const POSE_DATA_LIMBS = {
    "💪 腕・手の動作 (Arm Actions & Raising)": {
      "指示・敬礼": [
        { ja: "指差し (Pointing)", en: "pointing, pointing at viewer" }, // ★追加
        { ja: "上を指差す", en: "pointing up" }, // ★追加
        { ja: "敬礼 (Salute)", en: "salute" }, // ★追加
        { ja: "拳を挙げる (Guts Pose)", en: "raised fist, fist pump" },
        { ja: "手を振る (挨拶)", en: "waving" }
      ],
      "上げる・広げる": [
        { ja: "片手を上げる", en: "hand up, one hand up" },
        { ja: "両手を上げる", en: "hands up, raising hands" },
        { ja: "片腕を上げる (Arm)", en: "arm up, one arm up" },
        { ja: "両腕を上げる (万歳)", en: "arms up, cheering" },
        { ja: "両腕を横に広げる", en: "spread arms, arms outstretched" },
        { ja: "驚きの腕 (反射)", en: "surprised arms" },
        { ja: "Tポーズ", en: "t-pose" },
        { ja: "マッスルポーズ", en: "flexing, muscle pose" }
      ],
      "伸ばす・構える": [
        { ja: "手を差し出す", en: "outstretched hand, reaching" },
        { ja: "腕組み", en: "crossed arms" },
        { ja: "手を腰に", en: "hands on hips" },
        { ja: "頭の後ろで組む", en: "hands behind head" },
        { ja: "背中で組む", en: "hands behind back" },
        { ja: "片手後ろ手", en: "arm behind back" },
        { ja: "腕を下ろす (体側)", en: "arms at sides, arm at side" }
      ]
    },
    "🏃‍♂️ 運動・移動アクション (Movement & Sports)": {
      "移動": [
        { ja: "歩く", en: "walking" },
        { ja: "走る", en: "running" },
        { ja: "追いかける", en: "chasing" },
        { ja: "ジャンプ", en: "jumping" },
        { ja: "四つん這いで進む", en: "crawling" }
      ],
      "アクティビティ": [
        { ja: "ストレッチ", en: "stretching" },
        { ja: "登る (Climbing)", en: "climbing" },
        { ja: "ぶら下がる", en: "hanging" },
        { ja: "バランスを取る", en: "balancing" },
        { ja: "回転する", en: "spinning" },
        { ja: "ポールダンス", en: "pole dancing" },
        { ja: "踊る", en: "dancing" }
      ]
    },
    "🦵 足・脚・全身 (Legs & Body)": {
      "アクシデント": [
        { ja: "つまずく", en: "tripping, stumbling" },
        { ja: "滑る", en: "slipping" },
        { ja: "転ぶ/倒れる", en: "fallen down, falling" },
        { ja: "顔面着地", en: "faceplant" },
        { ja: "落下する", en: "falling" }
      ],
      "ポーズ": [
        { ja: "もがく", en: "struggling" },
        { ja: "Y字バランス", en: "standing split" },
        { ja: "開脚", en: "split" },
        { ja: "片足立ち", en: "standing on one leg" },
        { ja: "足指を広げる", en: "spread toes" },
        { ja: "内股", en: "pigeon-toed" },
        { ja: "がに股", en: "bowlegged" }
      ]
    },
    "🧘 座り・姿勢 (Sitting & Posture)": {
      "座り方": [
        { ja: "正座", en: "seiza" },
        { ja: "あぐら", en: "indian style" },
        { ja: "座禅", en: "lotus position" },
        { ja: "立ち膝", en: "kneeling" },
        { ja: "ヤンキー座り", en: "squatting" },
        { ja: "カーテシー", en: "curtsey" },
        { ja: "横座り", en: "yokozuwari" },
        { ja: "体育座り", en: "hugging knees" },
        { ja: "胎児のポーズ", en: "fetal position" }
      ],
      "寝る": [
        { ja: "寝そべる", en: "lying" },
        { ja: "うつ伏せ", en: "on stomach" },
        { ja: "仰向け", en: "on back" },
        { ja: "横向き", en: "on side" }
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
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#5d4037; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ LIMBS & ACTION (v8)</span>";
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

