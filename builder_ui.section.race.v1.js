(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "race"; 

  const DATA_SETS = {
    "基本ファンタジー種族 (Basic Fantasy)": [
      { ja: "人間", en: "human" }, { ja: "エルフ", en: "elf" }, 
      { ja: "ダークエルフ", en: "dark elf" }, { ja: "ドワーフ", en: "dwarf" }, 
      { ja: "ハーフリング/小人", en: "halfling" }, { ja: "巨人", en: "giant" },
      { ja: "オーク", en: "orc" }, { ja: "ゴブリン", en: "goblin" }
    ],
    "神聖・邪悪 (Holy & Evil)": [
      { ja: "天使", en: "angel" }, { ja: "堕天使", en: "fallen angel" },
      { ja: "悪魔", en: "demon" }, { ja: "サキュバス", en: "succubus" }
    ]
  };

  const DATA_PARTS = {
    "🎨 肌の色・スキン属性 (Skin Types)": [
      { ja: "褐色肌", en: "dark skin" }, { ja: "日焼け肌", en: "tan" },
      { ja: "色白", en: "pale skin" }, { ja: "異色肌", en: "colored skin" },
      { ja: "青肌", en: "blue skin" }, { ja: "緑肌", en: "green skin" },
      { ja: "赤肌", en: "red skin" }, { ja: "グレー肌", en: "grey skin" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-race") || container;
      if (!parent.id) {
         parent.id = "list-race";
         const h2 = document.createElement("h2");
         h2.textContent = "2. 種族・素体 (Race)";
         const existingH2 = parent.querySelector("h2");
         if(existingH2) existingH2.remove();
         parent.prepend(h2);
      }

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.innerHTML = ""; 

      const createRootAcc = (id, title, color) => {
        const det = document.createElement("details");
        det.id = id;
        det.className = "race-root-acc";
        det.style.cssText = "margin-bottom:10px; border:2px solid " + color + "; border-radius:6px; background:#fff;";
        
        // 初期状態は閉じる
        det.open = false; 

        const sum = document.createElement("summary");
        sum.textContent = title;
        sum.style.cssText = "font-weight:bold; padding:10px; background:" + color + "22; cursor:pointer; font-size:1.1em; color:#333;";
        const con = document.createElement("div");
        con.id = id + "-content";
        con.style.padding = "10px";
        det.appendChild(sum);
        det.appendChild(con);
        contentArea.appendChild(det);
        return con;
      };

      const setsRoot = createRootAcc("race-root-sets", "📦 キャラクターセット (Full Sets)", "#007bff");
      const partsRoot = createRootAcc("race-root-parts", "🧩 身体パーツ・特徴 (Parts & Traits)", "#28a745");

      const createSubCat = (targetRoot, title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #ccc; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          
          cb.type = "checkbox"; 
          
          // ★修正: セット(val)がある場合、それをlinks(連動対象)としても登録する
          if(item.val) {
             cb.dataset.val = item.val;
             // これにより、Coreの連動機能が働き、ON/OFFが同期されます
             cb.dataset.links = item.val; 
          } else {
             cb.dataset.en = item.en;
          }
          
          cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });
        details.appendChild(content);
        targetRoot.appendChild(details);
      };

      Object.entries(DATA_SETS).forEach(([t, i]) => createSubCat(setsRoot, t, i));
      Object.entries(DATA_PARTS).forEach(([t, i]) => createSubCat(partsRoot, t, i));

      if (window.__outputTranslation) {
        const dict = {};
        [...Object.values(DATA_SETS), ...Object.values(DATA_PARTS)].flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const roots = document.querySelectorAll("#race-root-sets, #race-root-parts");
      roots.forEach(r => {
        r.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
            const val = cb.dataset.val || cb.dataset.en;
            if(val) tags.push(val);
        });
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

