(function(){
  "use strict";

  const VERSION = 11; 
  const KEY = "pose"; 

  const POSE_DATA_HOLDING = {
    "🧺 手持ちアイテム・基本 (Holding Objects)": {
      "日用品・雑貨": [
        { ja: "物を持つ (基本)", en: "holding object" },
        { ja: "物を抱きしめる", en: "hugging object" }, // ★追加
        { ja: "枕を抱きしめる", en: "hugging pillow, pillow hug" }, // ★追加
        { ja: "スマホを持つ", en: "holding phone, looking at phone" },
        { ja: "肩で電話を挟む", en: "cradling phone" },
        { ja: "本を持つ", en: "holding book, open book" },
        { ja: "バッグを持つ", en: "holding bag, handbag" },
        { ja: "傘を持つ", en: "holding umbrella" },
        { ja: "プレゼントを持つ", en: "holding gift" }
      ],
      "衣類・装飾": [
        { ja: "服を持つ", en: "holding clothes" },
        { ja: "帽子を持つ", en: "holding hat" },
        { ja: "外したメガネを持つ", en: "holding removed eyewear" },
        { ja: "脱いだ服を持つ", en: "holding unworn clothes" }
      ]
    },
    "🍔 飲食・食べ物 (Food & Drink)": {
      "食器・容器": [
        { ja: "カップを持つ", en: "holding cup, holding teacup" },
        { ja: "ボトルを持つ", en: "holding bottle" },
        { ja: "箸を持つ", en: "holding chopsticks" },
        { ja: "スプーンを持つ", en: "holding spoon" },
        { ja: "フォークを持つ", en: "holding fork" }
      ],
      "食べ物": [
        { ja: "食べ物を持つ", en: "holding food" },
        { ja: "果物を持つ", en: "holding fruit" },
        { ja: "キャンディを持つ", en: "holding candy" },
        { ja: "お酒を持つ", en: "holding alcohol" }
      ]
    },
    "🧸 趣味・動物 (Hobby & Animals)": {
      "自然・生物": [
        { ja: "動物を抱く", en: "holding animal, hugging animal" },
        { ja: "動物を撫でる", en: "petting animal, stroking animal" }, // ★追加
        { ja: "ぬいぐるみを抱く", en: "holding stuffed toy" },
        { ja: "花を持つ", en: "holding flower" },
        { ja: "花束を持つ", en: "holding bouquet" },
        { ja: "じょうろを持つ", en: "holding watering can" }
      ],
      "エンタメ": [
        { ja: "マイクを持つ", en: "holding microphone" },
        { ja: "楽器を持つ", en: "holding instrument" },
        { ja: "カメラを持つ", en: "holding camera" },
        { ja: "カードを持つ", en: "holding card" },
        { ja: "タバコを持つ", en: "holding cigarette" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_HOLDING).forEach(subCats => {
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
        
        if (document.getElementById("pose-v11-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v11-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#795548; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ HOLDING OBJECTS (v11 Items)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_HOLDING, "v11-holding");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

