(function(){
  "use strict";

  const VERSION = 3; 
  const KEY = "pose"; 

  // 純粋なポーズデータ（エフェクトなし）
  const POSE_DATA_WEAPON = {
    "⚔️ 武器グリップ・構え (Weapon Grips)": {
      "近接武器 (Melee)": [
        { ja: "ナイフ構え (片手)", en: "firmly gripping the handle of the combat knife with one hand" },
        { ja: "片手剣構え", en: "firmly gripping the hilt of the sword with one hand" },
        { ja: "両手剣構え (正面)", en: "firmly gripping the hilt of the sword with both hands in front of the body" },
        { ja: "斧・両手持ち", en: "firmly gripping the long handle of the axe with both hands in front of the body" },
        { ja: "槍・両手持ち", en: "firmly gripping the spear with both hands in front of the body" }
      ],
      "射撃・魔法 (Range & Magic)": [
        { ja: "ハンドガン構え (片手)", en: "firmly gripping the handgun with one hand" },
        { ja: "魔法の杖 (両手)", en: "firmly gripping the long staff with both hands in front of the body" },
        { ja: "ライフル構え", en: "aiming rifle, holding gun with both hands" },
        { ja: "弓を引き絞る", en: "drawing bow, holding bow and arrow" }
      ]
    }
  };

  const API = {
    initUI() {
      // 1. 翻訳辞書登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_WEAPON).forEach(subCats => {
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              dict[item.en] = item.ja;
            }
          });
        });
        window.__outputTranslation.register(dict);
      }

      // 2. マウント処理
      const mount = () => {
        const root = document.getElementById("pose-master-root");
        if (!root) { setTimeout(mount, 100); return; }
        
        // 重複防止
        if (document.getElementById("pose-v3-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v3-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#444; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ WEAPON MASTERY (v3 Grips)</span>";
        root.appendChild(separator);

        // v1のレンダラーを利用して描画
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
