(function(){
  "use strict";

  const VERSION = 10; 
  const KEY = "pose"; 

  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const POSE_DATA_OTHERS = {
    // ------------------------------------
    // 一般ポーズ (General)
    // ------------------------------------
    "👫 親密な接触・運ぶ (Intimate & Carrying)": {
      "運ぶ・支える": [
        { ja: "お姫様抱っこ", en: "princess carry, carrying" },
        { ja: "おんぶ (Piggyback)", en: "piggyback, giving piggyback ride" },
        { ja: "肩車 (Shoulder Carry)", en: "shoulder carry, sitting on shoulders" },
        { ja: "肩に担ぐ (米俵)", en: "carrying over shoulder" },
        { ja: "脇に抱える", en: "carrying under arm" },
        { ja: "運ぶ / 支える", en: "carrying, supporting" }
      ],
      "密着・ロマンス": [
        { ja: "慰める (よしよし)", en: "comforting, consoling" },
        { ja: "見つめ合う", en: "eye contact, looking at each other" },
        { ja: "おでこ合わせ", en: "forehead-to-forehead, heads together" },
        { ja: "頬を合わせる", en: "cheek-to-cheek" },
        { ja: "背中合わせ", en: "back-to-back" },
        { ja: "顔を合わせる", en: "face-to-face" },
        { ja: "寄り添う", en: "spooning, cuddling" },
        { ja: "みんなでハグ", en: "group hug" }
      ],
      "頭・髪": [
        { ja: "頭なでなで", en: "headpat, petting" },
        { ja: "他人の頭に手", en: "hand on another's head" },
        { ja: "髪を掴む", en: "grabbing another's hair, pulling hair" },
        { ja: "耳を噛む", en: "ear biting" }
      ]
    },
    "💥 攻撃・ネガティブ (Conflict & Abuse)": {
      "攻撃的接触": [
        { ja: "平手打ち (ビンタ)", en: "slapping, slapped" },
        { ja: "首を絞める", en: "strangling, choking" },
        { ja: "いじめる", en: "bullying" },
        { ja: "からかう", en: "teasing" },
        { ja: "引っ張る", en: "pulling" },
        { ja: "引きずり回す", en: "dragging" },
        { ja: "突き飛ばす/押す", en: "pushing" }
      ]
    },
    "🤝 他者への接触・体 (Touching Others: Body)": {
      "手・腕": [
        { ja: "手をつなぐ", en: "holding hands" },
        { ja: "恋人繋ぎ", en: "interlocked fingers" },
        { ja: "手の甲にキス", en: "kissing hand" },
        { ja: "二人の手でハート", en: "heart hands duo" },
        { ja: "手首を掴む", en: "holding another's wrist" },
        { ja: "腕を引かれる", en: "arm held back" },
        { ja: "腕を組む (ロック)", en: "locked arms" },
        { ja: "腕を抱きしめる", en: "arm hug" },
        { ja: "肩を抱く", en: "arm around shoulder" }
      ],
      "胴体・ハグ": [
        { ja: "抱きしめる (ハグ)", en: "hugging, embrace, cuddling" },
        { ja: "背後から抱きつく", en: "hugging from behind" },
        { ja: "腰に手を回す", en: "arm around waist" },
        { ja: "背中に手を置く", en: "hand on another's back" },
        { ja: "襟を掴む (胸ぐら)", en: "collar grab" },
        { ja: "服の下に手", en: "hand under clothes" }
      ]
    },
    "🔞 特殊接触・前戯 (Fetish & Foreplay)": {
      "性的アクション": [
        { ja: "服を脱がす", en: "assisted exposure, undressing another" },
        { ja: "他人の服をめくる", en: "lifting another's clothes, skirt flip" },
        { ja: "キスする", en: "kissing, kiss" },
        { ja: "あーん (餌付け)", en: "feeding" },
        { ja: "授乳する", en: "breastfeeding" },
        { ja: "乳首をつまむ", en: "nipple tweak" },
        { ja: "股間をこすりつける", en: "grinding, humping" },
        { ja: "またがる (服あり)", en: "straddling" }
      ],
      "愛撫・接触": [
        { ja: "他人の胸を揉む", en: "grabbing another's breast" },
        { ja: "背後から胸揉み", en: "grabbing from behind, breast grab" },
        { ja: "お尻を掴む", en: "grabbing another's ass" },
        { ja: "股間を掴む", en: "crotch grab" },
        { ja: "パンツに手を入れる", en: "hand in another's panties" }
      ]
    },
    
    // ------------------------------------
    // R-18 性交ポーズ (Sex Positions)
    // ※誘導ワードは Quality Preset へ移動しました
    // ------------------------------------
    "🔞 性交・本番体位 (Sex Positions: Intense)": {
      "騎乗位系 (Woman on Top)": [
        { ja: "騎乗位 (Cowgirl)", en: "(cowgirl position:1.3)" },
        { ja: "背面騎乗位 (Reverse)", en: "(reverse cowgirl position:1.3)" },
        { ja: "対面座位 (Upright)", en: "(upright straddle:1.3)" },
        { ja: "背面座位 (Reverse Upright)", en: "(reverse upright straddle:1.3)" },
        { ja: "M字騎乗位 (Squatting)", en: "(squatting cowgirl:1.3)" },
        { ja: "回転騎乗位 (Spinning)", en: "(spinning cowgirl:1.3)" }
      ],
      "基本・バック系": [
        { ja: "正常位 (Missionary)", en: "(missionary:1.3)" },
        { ja: "正常位 (足上げ)", en: "(missionary), (legs up:1.3)" },
        { ja: "バック (Doggy)", en: "(doggystyle:1.3)" },
        { ja: "立位バック (Standing)", en: "(standing doggystyle), (bent over:1.3)" },
        { ja: "側位 (Spoon)", en: "(spooning sex:1.3)" }
      ],
      "ハード・特殊": [
        { ja: "プレス (Mating Press)", en: "(mating press:1.3)" },
        { ja: "だいしゅきホールド", en: "(leg lock:1.3)" },
        { ja: "駅弁 (Standing Carry)", en: "(standing sex), (lifting partner:1.3)" },
        { ja: "パイルドライバー", en: "(piledriver position:1.3)" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.entries(POSE_DATA_OTHERS).forEach(([catName, subCats]) => {
          if (catName.includes("🔞") && !IS_R18_UNLOCKED) return;
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              const key = item.en.split(/,\s*/)[0].replace(/[\(\)]/g, ""); 
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
        
        if (document.getElementById("pose-v10-separator")) return;

        const filteredData = {};
        Object.entries(POSE_DATA_OTHERS).forEach(([key, val]) => {
          if (key.includes("🔞") && !IS_R18_UNLOCKED) return;
          filteredData[key] = val;
        });

        const separator = document.createElement("div");
        separator.id = "pose-v10-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#00bcd4; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ TOUCHING OTHERS (v10 Interaction)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, filteredData, "v10-others");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

