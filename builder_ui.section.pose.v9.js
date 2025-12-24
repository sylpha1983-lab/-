(function(){
  "use strict";

  const VERSION = 9; 
  const KEY = "pose"; 
  
  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const POSE_DATA_TOUCH = {
    "💆 自己接触・頭部 (Self Touch: Head)": {
      "髪・頭": [
        { ja: "頭に手を置く", en: "hand on own head" },
        { ja: "頭を抱える (両手)", en: "hands on own head" },
        { ja: "片手後頭部", en: "arm behind head" },
        { ja: "額に手を当てる", en: "hand on own forehead" },
        { ja: "髪を持つ/遊ぶ", en: "holding own hair, playing with own hair" }
      ],
      "顔・耳": [
        { ja: "顔に手を当てる", en: "hand on own face" },
        { ja: "頬をかく/つねる", en: "scratching cheek, pinching own cheek" },
        { ja: "顔を覆う (恥)", en: "covering face" },
        { ja: "耳を塞ぐ", en: "covering own ears" }
      ],
      "口元": [
        { ja: "口に手を当てる", en: "hand to own mouth" },
        { ja: "指を口に入れる/噛む", en: "finger in own mouth, biting own finger" },
        { ja: "指を顎に (思考)", en: "finger to own chin" }
      ]
    },
    "👗 服の調整・着脱 (Clothing Adjustment)": {
      "めくる・持ち上げる": [
        { ja: "服をめくる (Lift)", en: "clothes lift" },
        { ja: "スカートめくり (自)", en: "skirt lift" },
        { ja: "シャツをめくる", en: "shirt lift" },
        { ja: "パーカーをめくる", en: "hoodie lift" }, // ★追加
        { ja: "エプロンをめくる", en: "apron lift" }, // ★追加
        { ja: "着物の裾を持つ", en: "kimono lift" },
        { ja: "風でめくれる", en: "wind lift" }
      ],
      "引っ張る・直す": [
        { ja: "服を引っ張る (Tug)", en: "clothes tug" },
        { ja: "襟を引っ張る", en: "collar tug" },
        { ja: "スカートを引っ張る", en: "skirt tug" },
        { ja: "手袋を直す", en: "adjusting gloves, glove pull" },
        { ja: "ニーハイを直す/引く", en: "thighhighs pull, adjusting thighhighs" }, // ★追加
        { ja: "マスクを直す/外す", en: "mask pull, adjusting mask" }, // ★追加
        { ja: "靴下を直す", en: "sock pull, adjusting socks" }
      ],
      "脱ぐ・下ろす": [
        { ja: "服を脱ぐ/下ろす", en: "clothes pull, undressing" },
        { ja: "パンツを下ろす", en: "panty pull" },
        { ja: "ズボンを下ろす", en: "pants pull" },
        { ja: "ジッパーを下ろす", en: "unzipping" }
      ]
    },
    "👙 自己接触・体幹 (Self Touch: Body)": {
      "胸・首": [
        { ja: "胸を隠す (手ブラ)", en: "covering breasts" },
        { ja: "乳首隠し", en: "covering nipples" },
        { ja: "胸を持ち上げる", en: "breast lift" },
        { ja: "胸を寄せる", en: "breasts squeezed together" },
        { ja: "谷間に腕を挟む", en: "arm between breasts" }
      ],
      "腹・腰・腕": [
        { ja: "お腹に手を当てる", en: "hand on own stomach" },
        { ja: "お腹を掴む", en: "belly grab" },
        { ja: "腰に腕を回す", en: "arm across waist" }
      ]
    },
    "🔞 自己愛撫・R18 (Self Pleasure & R18)": {
      "露出・アピール": [
        { ja: "チラ見せ", en: "flashing" },
        { ja: "体を見せる", en: "presenting" }
      ],
      "胸・セクシー": [
        { ja: "セルフ乳揉み", en: "grabbing own breast" },
        { ja: "ブラに手を入れる", en: "hand in bra" }
      ],
      "下半身・股間": [
        { ja: "お尻を持ち上げる", en: "ass support" },
        { ja: "股間を掴む", en: "crotch grab" },
        { ja: "パンツの中に手", en: "hand in own panties" },
        { ja: "脚の間に手", en: "hand between legs" },
        { ja: "腕を脚の間に挟む", en: "arm between legs" },
        { ja: "局所を隠す", en: "covering privates" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.entries(POSE_DATA_TOUCH).forEach(([catName, subCats]) => {
          if (catName.includes("🔞") && !IS_R18_UNLOCKED) return;
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
        
        if (document.getElementById("pose-v9-separator")) return;

        const filteredData = {};
        Object.entries(POSE_DATA_TOUCH).forEach(([key, val]) => {
          if (key.includes("🔞") && !IS_R18_UNLOCKED) return;
          filteredData[key] = val;
        });

        if (Object.keys(filteredData).length === 0) return;

        const separator = document.createElement("div");
        separator.id = "pose-v9-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#e91e63; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ SELF TOUCH (v9 Interaction)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, filteredData, "v9-touch");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

