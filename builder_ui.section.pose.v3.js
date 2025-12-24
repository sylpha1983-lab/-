(function(){
  "use strict";

  const VERSION = 3; 
  const KEY = "pose"; 

  const POSE_DATA_WEAPON = {
    "⚔️ 近接武器・ブレード (Melee & Blade)": {
      "構え・グリップ": [
        { ja: "ナイフ構え (順手)", en: "holding knife, fighting stance" },
        { ja: "ナイフ構え (逆手)", en: "reverse grip, holding knife upside down" },
        { ja: "片手剣構え", en: "firmly gripping the hilt of the sword with one hand" },
        { ja: "両手剣構え (正眼)", en: "holding sword with both hands, kendo stance" },
        { ja: "突き構え (レイピア)", en: "thrusting stance, fencing stance" },
        { ja: "武器を担ぐ", en: "holding weapon on shoulder, weapon over shoulder" },
        { ja: "切っ先を向ける", en: "pointing sword at viewer, weapon directed at camera" },
        { ja: "柄に手を置く (抜刀前)", en: "hand on hilt, ready to draw" } // ★追加
      ],
      "アクション・演出": [
        { ja: "地面に突き立てる", en: "planting sword in the ground, sword stuck in ground, hands resting on pommel" },
        { ja: "突き立てた剣に座る", en: "sitting on sword stuck in ground" },
        { ja: "抜刀の瞬間", en: "drawing sword, hand on hilt, battojutsu" },
        { ja: "納刀 (残心)", en: "sheathing sword, returning sword to scabbard" },
        { ja: "刃の血を拭う", en: "wiping blood off sword, cleaning blade" },
        { ja: "刃を確認する", en: "inspecting blade, looking at reflection in sword" }
      ]
    },
    "🔫 銃器・リロード (Firearms & Reload)": {
      "構え・射撃": [
        { ja: "ハンドガン構え (片手)", en: "aiming handgun with one hand, arm extended" },
        { ja: "ハンドガン構え (両手)", en: "holding gun with both hands, combat stance" },
        { ja: "ライフル構え", en: "aiming rifle, looking through scope" },
        { ja: "二丁拳銃 (アキンボ)", en: "dual wielding guns, akimbo, firing two guns" },
        { ja: "銃口を向ける", en: "pointing gun at viewer, gun barrel focus" },
        { ja: "ギャング撃ち (横持ち)", en: "holding gun sideways, gangster style" },
        { ja: "ＣＡＲシステム (近接射撃)", en: "center axis relock stance, holding gun close to chest" },
        { ja: "空へ撃つ", en: "firing into the air" }
      ],
      "リロード・メンテナンス": [
        { ja: "リロード (マガジン交換)", en: "reloading, changing magazine, holding ammo clip" },
        { ja: "弾込め (ショットガン等)", en: "loading ammo, inserting cartridges, shotgun shell" },
        { ja: "スライド操作 (コッキング)", en: "racking the slide, cocking gun, chambering a round" },
        { ja: "残弾確認", en: "checking chamber, inspecting gun" },
        { ja: "硝煙を吹く", en: "blowing smoke from gun barrel" },
        { ja: "ホルスターに手をかける", en: "hand on holster, ready to draw" }
      ]
    },
    "🏹 魔法・弓・長柄 (Magic, Bow & Polearm)": {
      "弓・投擲": [
        { ja: "弓を引き絞る", en: "drawing bow, holding bow and arrow, tension" },
        { ja: "矢を放つ瞬間", en: "loosing arrow, firing bow" },
        { ja: "矢を番える", en: "nocking arrow" },
        { ja: "クナイ/手裏剣構え", en: "holding kunai, throwing stance, ninja pose" }
      ],
      "長柄・魔法": [
        { ja: "槍・斧 (両手持ち)", en: "holding spear with both hands, polearm stance" },
        { ja: "大鎌を構える", en: "holding scythe, grim reaper pose" },
        { ja: "魔法の杖 (詠唱)", en: "casting spell, holding magic staff, glowing tip" },
        { ja: "杖を掲げる", en: "raising staff high" },
        { ja: "浮遊武器の指揮", en: "commanding floating weapons, gesturing forward" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_WEAPON).forEach(subCats => {
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
        
        if (document.getElementById("pose-v3-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v3-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#444; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ WEAPON MASTERY (v3 Grips & Actions)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_WEAPON, "v3-weapon");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

