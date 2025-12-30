(function(){
  "use strict";

  const VERSION = 4; 
  const KEY = "pose"; 

  const POSE_DATA_LIFE = {
    "🏠 日常生活・家事 (Daily Life & Chores)": {
      "家事・作業": [
        { ja: "掃除する", en: "cleaning" },
        { ja: "縫い物をする", en: "sewing" },
        { ja: "買い物する", en: "shopping, holding shopping bags" },
        { ja: "料理する", en: "cooking" },
        { ja: "測る (サイズ等)", en: "measuring" },
        { ja: "何かを手渡す", en: "giving, handing over" },
        { ja: "匂いを嗅ぐ", en: "smelling, sniffing" },
        { ja: "結ぶ (Tying)", en: "tying" } // ★復活・追加
      ],
      "身だしなみ": [
        { ja: "化粧をする", en: "applying makeup, lipstick" },
        { ja: "髪をとかす", en: "brushing hair" },
        { ja: "髪を耳にかける", en: "tucking hair" }, // ★復活
        { ja: "髪を整える", en: "hairdressing, styling hair" }, // ★復活
        { ja: "髪を切る", en: "cutting hair" }, // ★復活
        { ja: "服を着る", en: "dressing" },
        { ja: "胸パッドを入れる", en: "breast padding" }
      ],
      "リラックス": [
        { ja: "テレビを見る", en: "watching television" },
        { ja: "スマホ/LINEをする", en: "text messaging, looking at phone" },
        { ja: "ゲームをする", en: "playing games" },
        { ja: "読書", en: "reading book" }
      ]
    },
    "👄 食事・口元の仕草 (Eating & Mouth)": {
      "食べる・飲む": [
        { ja: "食べている", en: "eating" },
        { ja: "飲んでいる", en: "drinking" },
        { ja: "咀嚼する (もぐもぐ)", en: "chewing" },
        { ja: "噛む (Biting)", en: "biting" },
        { ja: "舐める (Licking)", en: "licking" },
        { ja: "唇を噛む", en: "biting own lip" },
        { ja: "手袋を噛む", en: "glove biting" }
      ]
    },
    "🫣 アクション・隠れる (Hiding & Peek)": {
      "潜む動き": [
        { ja: "隠れる", en: "hiding" },
        { ja: "覗く (Peeking)", en: "peeking" },
        { ja: "指の隙間から覗く", en: "peeking through fingers" },
        { ja: "手招き", en: "beckoning" }
      ],
      "生理現象": [
        { ja: "くしゃみ", en: "sneezing" },
        { ja: "あくび", en: "yawning" },
        { ja: "唾を吐く", en: "spitting" }
      ]
    },
    "🗣️ コミュニケーション (Communication)": {
      "会話": [
        { ja: "話す", en: "talking" },
        { ja: "ささやく", en: "whispering" },
        { ja: "叫ぶ", en: "shouting" },
        { ja: "歌う", en: "singing" },
        { ja: "笑う", en: "laughing" },
        { ja: "応援する", en: "cheering" },
        { ja: "誤解 (困惑)", en: "misunderstanding, confused" }
      ]
    },
    "💁 仕草・状態 (Habits & States)": {
      "顔・髪": [
        { ja: "目を覆う (まぶしい)", en: "shading eyes" },
        { ja: "髪がなびく", en: "floating hair, wind blown hair" },
        { ja: "あっかんべー", en: "akanbe" },
        { ja: "頭を抱える", en: "facepalm" },
        { ja: "帽子で挨拶", en: "hat tip" },
        { ja: "ピース", en: "v-sign" },
        { ja: "そわそわする", en: "fidgeting" }
      ]
    },
    "🎸 趣味・アウトドア (Hobbies)": {
      "遊び・アクティビティ": [
        { ja: "シャボン玉を吹く", en: "blowing bubbles" }, // ★復活
        { ja: "ブランコに乗る/揺れる", en: "swinging, on swing" }, // ★復活
        { ja: "息を吹く (ふーっ)", en: "blowing" }, // ★復活
        { ja: "釣りをする", en: "fishing, holding fishing rod" },
        { ja: "絵を描く", en: "painting" },
        { ja: "写真を撮る", en: "taking photo" },
        { ja: "楽器演奏", en: "playing instrument" },
        { ja: "録画/撮影中 (REC)", en: "recording" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_LIFE).forEach(subCats => {
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
        
        if (document.getElementById("pose-v4-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v4-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#2e7d32; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ LIFE & GESTURES (v4)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_LIFE, "v4-life");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

