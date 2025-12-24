(function(){
  "use strict";

  const VERSION = 12; 
  const KEY = "pose"; 

  const POSE_DATA_HEAD_LOOK = {
    "👀 視線・見る方向 (Eye Gaze & Looking)": {
      "カメラ・視聴者": [
        { ja: "カメラ目線 (基本)", en: "looking at viewer" },
        { ja: "じっと見つめる (凝視)", en: "staring, staring at viewer" }, // ★追加
        { ja: "振り返って見る", en: "looking back" },
        { ja: "前を見る", en: "looking ahead" }
      ],
      "そらす・他": [
        { ja: "目をそらす", en: "looking away" },
        { ja: "横を見る", en: "looking to the side" },
        { ja: "遠くを見る", en: "looking afar" },
        { ja: "手を見る", en: "looking at hand" }
      ],
      "上下": [
        { ja: "上を見る (見上げる)", en: "looking up" },
        { ja: "下を見る (見下ろす)", en: "looking down" }
      ]
    },
    "🙇 頭の動作・角度 (Head Movement)": {
      "角度": [
        { ja: "首をかしげる (Tilt)", en: "head tilt" },
        { ja: "うつむく (Head Down)", en: "head down" },
        { ja: "仰け反る/空を見る (Head Back)", en: "head back" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_HEAD_LOOK).forEach(subCats => {
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
        
        if (document.getElementById("pose-v12-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v12-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#673ab7; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ GAZE & HEAD (v12 Looking)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_HEAD_LOOK, "v12-gaze");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

