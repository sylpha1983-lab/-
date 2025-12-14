(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "pose";

  const POSE_DATA_BASIC = {
    "🧍 基本・日常 (Basic & Daily)": {
      "立ちポーズ": [
        { ja: "立ちポーズ", en: "standing pose" }, { ja: "モデル立ち", en: "model pose" },
        { ja: "S字立ち (コントラポスト)", en: "contrapposto, s-curve standing" },
        { ja: "振り返り", en: "looking over shoulder" }, { ja: "腕組み", en: "crossed arms" },
        { ja: "仁王立ち", en: "standing with legs apart, akimbo" }, { ja: "ポケットに手", en: "hands in pockets" }
      ],
      "座り・床": [
        { ja: "座りポーズ", en: "sitting pose" }, { ja: "足を組む", en: "crossed legs" },
        { ja: "体育座り", en: "hugging knees" }, { ja: "ぺたん座り", en: "w-sitting" },
        { ja: "横座り", en: "side sitting" }, { ja: "開脚座り", en: "spread legs sitting" },
        { ja: "四つん這い", en: "all fours" }, { ja: "片膝立ち", en: "kneeling on one knee" }
      ],
      "寝転び": [
        { ja: "仰向け", en: "lying on back" }, { ja: "うつ伏せ", en: "lying on stomach" },
        { ja: "横向き (胎児)", en: "fetal position" }, { ja: "膝枕", en: "lap pillow" }
      ],
      "生活・仕事": [
        { ja: "スマホ操作", en: "checking phone" }, { ja: "料理中", en: "cooking" },
        { ja: "食事中", en: "eating" }, { ja: "自撮り", en: "taking selfie" },
        { ja: "運転中", en: "driving car" }, { ja: "PC作業", en: "typing on computer" }
      ]
    },
    "⚔️ スタンダード戦闘 (Standard Combat)": {
      "基本アクション": [
        { ja: "戦闘態勢", en: "battle stance" }, { ja: "構え", en: "taking a stance" },
        { ja: "ダッシュ", en: "sprinting" }, { ja: "回避", en: "evasive maneuver" },
        { ja: "着地", en: "landing pose" }, { ja: "浮遊", en: "floating in air" }
      ],
      "打撃・格闘": [
        { ja: "パンチ", en: "punching" }, { ja: "キック", en: "kicking" },
        { ja: "ハイキック", en: "high kick" }, { ja: "回し蹴り", en: "roundhouse kick" },
        { ja: "飛び蹴り", en: "flying kick" }, { ja: "防御", en: "guarding" }
      ],
      "武器 (実弾・冷兵器)": [
        { ja: "剣を構える", en: "holding sword" }, { ja: "斬撃", en: "slashing" },
        { ja: "二刀流", en: "dual wielding" }, { ja: "銃を構える", en: "aiming gun" },
        { ja: "乱射", en: "firing gun" }, { ja: "リロード", en: "reloading" }
      ]
    },
    "❤️ 交流・ライトな感情 (Interaction)": {
      "仕草": [
        { ja: "ピース", en: "peace sign" }, { ja: "指差し", en: "pointing" },
        { ja: "ハート", en: "making heart hands" }, { ja: "敬礼", en: "salute" },
        { ja: "投げキッス", en: "blowing kiss" }, { ja: "手を振る", en: "waving hand" }
      ],
      "ペア": [
        { ja: "手をつなぐ", en: "holding hands" }, { ja: "ハグ", en: "hugging" },
        { ja: "お姫様抱っこ", en: "princess carry" }, { ja: "壁ドン", en: "kabedon" },
        { ja: "背中合わせ", en: "back-to-back" }
      ]
    }
  };

  const API = {
    initUI(container) {
      // 1. 翻訳辞書への登録 (カンマ対策)
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_BASIC).forEach(subCats => {
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              const firstPart = item.en.split(/,\s*/)[0];
              if (firstPart) {
                dict[firstPart] = item.ja;
              }
            }
          });
        });
        window.__outputTranslation.register(dict);
      }

      // 2. UI描画
      const parent = document.querySelector("#list-pose") || container;
      parent.innerHTML = "";
      
      const root = document.createElement("div");
      root.id = "pose-master-root"; 
      root.className = "pose-master-container";

      const h2 = document.createElement("h2");
      h2.textContent = "11. ポーズ・構図 (Pose Master)";
      parent.appendChild(h2);

      this.renderCategories(root, POSE_DATA_BASIC, "v1-basic");
      parent.appendChild(root);
      
      setTimeout(() => window.dispatchEvent(new Event("pose-v1-mounted")), 100);
    },

    renderCategories(root, data, prefix) {
      Object.entries(data).forEach(([mainCat, subCats], index) => {
        const mainDetails = document.createElement("details");
        mainDetails.className = "pose-master-acc";
        mainDetails.style.cssText = "border:1px solid #ccc; border-radius:5px; margin-bottom:8px; background:#fff;";
        
        const mainSummary = document.createElement("summary");
        mainSummary.innerHTML = mainCat;
        mainSummary.style.cssText = "padding:10px; font-weight:bold; cursor:pointer; background:#eef; border-radius:5px; list-style:none;";
        mainDetails.appendChild(mainSummary);

        const content = document.createElement("div");
        content.className = "pose-master-content";
        content.style.padding = "10px";

        Object.entries(subCats).forEach(([subCatName, items]) => {
          const subDetails = document.createElement("details");
          subDetails.style.cssText = "margin-bottom: 8px; border-left: 3px solid #ddd; padding-left: 10px;";
          
          const subSummary = document.createElement("summary");
          subSummary.textContent = subCatName;
          subSummary.style.cssText = "font-size:0.9em; font-weight:bold; color:#444; cursor:pointer; margin-bottom:5px; outline:none;";
          
          const grid = document.createElement("div");
          grid.style.cssText = "display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:5px; margin-top:5px;";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.8em; cursor:pointer; padding:2px 0;";
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            cb.style.marginRight = "5px";
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja));
            grid.appendChild(label);
            
            // 安全策: レンダリング時も念のため登録
            if (window.__outputTranslation && item.ja && item.en) {
              const firstPart = item.en.split(/,\s*/)[0];
              if (firstPart) {
                window.__outputTranslation.register({ [firstPart]: item.ja });
              }
            }
          });

          subDetails.appendChild(subSummary);
          subDetails.appendChild(grid);
          content.appendChild(subDetails);
        });

        mainDetails.appendChild(content);
        root.appendChild(mainDetails);
      });
    },

    getTags() {
      const tags = [];
      document.querySelectorAll("#pose-master-root input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__POSE_RENDERER = API.renderCategories;
  window.__registerPromptPart(KEY, VERSION, API);
})();

