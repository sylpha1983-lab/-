(function(){
  "use strict";

  const VERSION = 5; 
  const KEY = "pose"; 

  const POSE_DATA_CINEMATIC = {
    "❤️ 2人の世界・ロマンス (Duo & Romance)": {
      "密着・ドキドキ": [
        { ja: "壁ドン", en: "kabedon, wall pin, arm against wall" },
        { ja: "床ドン (押し倒す)", en: "yuka-don, pinning on floor, straddling" },
        { ja: "顎クイ", en: "ago-kui, lifting chin, hand on chin" },
        { ja: "お姫様抱っこ", en: "princess carry, carrying in arms" },
        { ja: "おんぶ", en: "piggyback ride, carrying on back" },
        { ja: "後ろからハグ", en: "back hug, hugging from behind" },
        { ja: "膝枕", en: "lap pillow, head on lap" },
        { ja: "あーん (食べさせる)", en: "feeding someone, say ahh" },
        { ja: "頭を撫でる", en: "headpat, patting head" },
        { ja: "抱きしめる", en: "embracing, tight hug" },
        { ja: "キス寸前", en: "about to kiss, close faces" }
      ],
      "信頼・日常": [
        { ja: "背中合わせ (信頼)", en: "standing back to back" },
        { ja: "手をつなぐ (恋人繋ぎ)", en: "holding hands, interlocking fingers" },
        { ja: "額を合わせる", en: "forehead to forehead, touching foreheads" },
        { ja: "相合傘", en: "sharing an umbrella" },
        { ja: "腕を組む (ペア)", en: "arm in arm, linking arms" },
        { ja: "自撮り (ツーショット)", en: "taking selfie together, two people selfie" },
        { ja: "ダンス (ワルツ)", en: "dancing waltz, ballroom dancing pose" }
      ]
    },
    "⚔️ 共闘・対峙 (Battle Duo)": {
      "アクション": [
        { ja: "背中合わせ (共闘)", en: "back to back, fighting together, surrounded" },
        { ja: "鍔迫り合い (剣)", en: "locking swords, blade lock, clashing weapons" },
        { ja: "銃を突きつけ合う", en: "mexican standoff, guns pointed at each other" },
        { ja: "互いに武器を向ける", en: "pointing weapons at each other" },
        { ja: "背中を守る", en: "guarding back, defending partner" },
        { ja: "敵を見下ろす (ペア)", en: "looking down on enemy together" },
        { ja: "負傷者を守る", en: "protecting injured person, shielding body" }
      ]
    },
    "📐 パース・遠近法 (Foreshortening & Angles)": {
      "手足の強調": [
        { ja: "手を伸ばす (パース強調)", en: "reaching towards viewer, foreshortening, hand focus" },
        { ja: "手を差し伸べる (救助)", en: "reaching hand to viewer, inviting hand" },
        { ja: "キック (足裏強調)", en: "kicking at viewer, focus on sole, shoe bottom, foreshortening" },
        { ja: "踏みつけ (カメラを踏む)", en: "stepping on camera, stepping on viewer, foot focus" },
        { ja: "パンチ (拳強調)", en: "punching at viewer, focus on fist, foreshortening" },
        { ja: "武器を突きつける (パース)", en: "pointing weapon at viewer, foreshortening" },
        { ja: "指差す (パース)", en: "pointing at viewer, finger focus" }
      ],
      "重力・浮遊・アングル": [
        { ja: "落下する (逆さま)", en: "falling down, upside down, hair floating" },
        { ja: "空から降り立つ", en: "descending from sky, floating pose" },
        { ja: "水中に沈む", en: "sinking in water, underwater pose, bubbles" },
        { ja: "爆発から歩き去る", en: "walking away from explosion, cool pose" },
        { ja: "超広角 (魚眼)", en: "fisheye lens, distorted perspective" },
        { ja: "真上から (俯瞰)", en: "view from above, high angle, bird's eye view" },
        { ja: "真下から (あおり)", en: "view from below, low angle, worm's eye view" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_CINEMATIC).forEach(subCats => {
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
        
        if (document.getElementById("pose-v5-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v5-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#673ab7; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ DUO & CINEMATIC (v5 Interactions)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_CINEMATIC, "v5-cine");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

