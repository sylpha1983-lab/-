(function(){
  "use strict";

  const VERSION = 6; 
  const KEY = "pose"; 

  const POSE_DATA_ROLEPLAY = {
    "🧙‍♂️ 魔法・ファンタジー (Fantasy & Magic)": {
      "魔法・儀式": [
        { ja: "魔法詠唱 (両手広げ)", en: "casting spell, arms outstretched, glowing hands" },
        { ja: "魔法陣展開", en: "summoning magic circle, glowing rune, casting spell" },
        { ja: "空中に浮遊", en: "floating in air, levitating, toes pointing down" },
        { ja: "エネルギーチャージ", en: "gathering energy, charging power, glowing aura" },
        { ja: "召喚 (手をかざす)", en: "summoning ritual, hand raised, monsters emerging" },
        { ja: "祈りを捧げる (聖職者)", en: "praying, hands clasped, kneeling, eyes closed" },
        { ja: "瞑想 (メディテーション)", en: "meditating, lotus position, floating" }
      ],
      "RPGクラス・スキル": [
        { ja: "錬金術 (調合)", en: "mixing potion, holding flask, alchemy" },
        { ja: "鍛冶 (ハンマー)", en: "blacksmithing, striking anvil, holding hammer" },
        { ja: "吟遊詩人 (リュート)", en: "playing lute, bard performance" },
        { ja: "踊り子 (舞い)", en: "dancing, belly dance pose, dynamic motion" },
        { ja: "占い (水晶玉)", en: "fortune telling, holding crystal ball, mysterious" },
        { ja: "盗賊 (ステルス)", en: "sneaking, crouching, hiding in shadows" }
      ]
    },
    "👔 職業・ロールプレイ (Profession & Job)": {
      "エンタメ・接客": [
        { ja: "アイドル (ライブ)", en: "idol singing, holding microphone, performing on stage" },
        { ja: "ファンサ (指差し)", en: "pointing at audience, winking, idol pose" },
        { ja: "メイド (お辞儀)", en: "curtsey, bowing, lifting skirt edges" },
        { ja: "執事 (恭しく)", en: "bowing politely, hand on chest, butler pose" },
        { ja: "バニー (配膳)", en: "carrying tray, serving drinks, bunny girl" },
        { ja: "モデル (ポージング)", en: "fashion pose, hands on hips, looking at viewer" }
      ],
      "公務・専門職": [
        { ja: "警察 (手錠)", en: "arresting, holding handcuffs, police officer" },
        { ja: "敬礼 (ビシッと)", en: "saluting, military salute" },
        { ja: "医者/ナース (カルテ)", en: "holding clipboard, checking medical records" },
        { ja: "注射器を持つ", en: "holding syringe, nurse pose" },
        { ja: "教師 (黒板)", en: "teaching, pointing at blackboard, holding pointer stick" },
        { ja: "オフィス (疲労)", en: "tired office worker, head on desk, surrounded by paperwork" },
        { ja: "科学者 (実験)", en: "doing experiment, holding test tube, mad scientist" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_ROLEPLAY).forEach(subCats => {
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
        
        if (document.getElementById("pose-v6-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v6-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#9c27b0; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ FANTASY & JOB (v6 Roles)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_ROLEPLAY, "v6-role");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
