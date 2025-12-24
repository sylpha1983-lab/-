(function(){
  "use strict";

  const VERSION = 2; 
  const KEY = "pose"; 

  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const POSE_DATA_EXTREME = {
    "🌌 SF・メカ・異能 (Sci-Fi & Fantasy)": {
      "特殊能力": [
        { ja: "空を飛ぶ", en: "flying" },
        { ja: "浮かぶ", en: "floating" },
        { ja: "翼を展開", en: "spread wings" },
        { ja: "ビーム発射", en: "firing beam" }
      ],
      "状態異常・ダメージ": [
        { ja: "絡まる (Entangled)", en: "entangled, tentacles" },
        { ja: "燃える", en: "burning" },
        { ja: "吐血する", en: "spitting blood" },
        { ja: "出血", en: "bleeding" },
        { ja: "溶ける", en: "melting" },
        { ja: "洗脳", en: "mind control" }
      ]
    },
    "🔞 センシティブ・フェティッシュ (Risqué & Fetish)": {
      "露出・ずらす (Aside)": [
        { ja: "パンツずらし", en: "panties aside, pulling panties aside" },
        { ja: "ブラずらし", en: "bra aside" },
        { ja: "水着ずらし", en: "swimsuit aside, bikini aside" },
        { ja: "前垂れずらし (Maebari)", en: "pelvic curtain aside" }, // ★追加
        { ja: "Tバックずらし", en: "thong aside" }, // ★追加
        { ja: "ふんどしずらし", en: "fundoshi aside" }, // ★追加
        { ja: "胸元を広げる", en: "pulling shirt open" },
        { ja: "スカートめくり", en: "skirt flip" }
      ],
      "ハプニング・事故": [
        { ja: "ラッキースケベ", en: "accidental pervert" },
        { ja: "偶然の露出", en: "accidental exposure" },
        { ja: "事故 (Accident)", en: "accident" },
        { ja: "服が破れる", en: "torn clothes" }
      ],
      "お仕置き・暴力": [
        { ja: "スパンキング", en: "spanking, spanked" },
        { ja: "お尻の叩かれた跡", en: "spanked, red butt" },
        { ja: "両手拘束", en: "hands tied behind back" },
        { ja: "縛り (亀甲)", en: "shibari" },
        { ja: "踏まれる", en: "being stepped on" }
      ],
      "犯罪的・背徳": [
        { ja: "覗き見 (Voyeurism)", en: "voyeurism, peeping" },
        { ja: "盗む (Theft)", en: "theft, stealing" },
        { ja: "浮気現場", en: "cheating" }
      ],
      "露出・アングル": [
        { ja: "お尻突き出し", en: "top-down bottom-up" },
        { ja: "M字開脚", en: "m-shaped legs" },
        { ja: "チラ見せ", en: "flashing" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.entries(POSE_DATA_EXTREME).forEach(([catName, subCats]) => {
          if (catName.includes("🔞") && !IS_R18_UNLOCKED) return;
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              const firstPart = item.en.split(/,\s*/)[0];
              dict[firstPart] = item.ja;
            }
          });
        });
        window.__outputTranslation.register(dict);
      }

      const mount = () => {
        const root = document.getElementById("pose-master-root");
        if (!root) { setTimeout(mount, 100); return; }
        if (document.getElementById("pose-v2-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v2-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #ff0055; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#ff0055; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ LIMIT BREAK (v2)</span>";
        root.appendChild(separator);

        const filteredData = {};
        Object.entries(POSE_DATA_EXTREME).forEach(([key, val]) => {
          if (key.includes("🔞") && !IS_R18_UNLOCKED) return;
          filteredData[key] = val;
        });

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, filteredData, "v2-ext");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

