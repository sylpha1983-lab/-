(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";
  
  const IS_GLOSS_UNLOCKED = localStorage.getItem("MY_GLOSS_UNLOCK") === "true";
  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
  
  window.__R18_MODE = IS_R18_UNLOCKED;

  // UIスタイルの注入
  function injectStyles() {
    const styleId = "qp-mobile-style-final-fix";
    if (document.getElementById(styleId)) return;
    const css = `
      .qp-main-acc { margin-bottom: 10px !important; border: 1px solid #ccc !important; border-radius: 6px !important; background: #fff !important; }
      .qp-sub-acc { border: 1px solid #ccc !important; border-radius: 4px !important; margin-bottom: 6px !important; background: #fff !important; width: 100% !important; box-sizing: border-box !important; }
      .qp-sub-acc summary, .qp-main-acc summary { padding: 10px 12px !important; font-weight: bold !important; cursor: pointer !important; background: #f9f9f9 !important; font-size: 14px !important; list-style: none !important; outline: none !important; }
      .qp-sub-acc.qp-secret { border-color: #ffcccc !important; }
      .qp-sub-acc.qp-secret summary { color: #d00 !important; background: #fff0f0 !important; }
      .qp-content-grid { padding: 8px !important; display: grid !important; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) !important; gap: 8px !important; }
      .qp-content-grid label { display: flex !important; align-items: center !important; font-size: 13px !important; line-height: 1.3 !important; cursor: pointer !important; }
      .qp-content-grid input { margin-right: 6px !important; }
    `;
    const style = document.createElement("style");
    style.id = styleId; style.textContent = css; document.head.appendChild(style);
  }

  // アコーディオン生成ヘルパー
  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc" + (isSecret ? " qp-secret" : ""); 
    const summary = document.createElement("summary"); summary.textContent = title; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    
    if (Array.isArray(items)) {
      items.forEach(item => { 
        const label = document.createElement("label"); const cb = document.createElement("input"); 
        cb.type = "checkbox"; cb.dataset.val = item.val || item.en; 
        
        let displayText = item.label || item.ja || item.en;
        if (item.ja && item.en && !item.label) displayText = item.ja;
        
        label.appendChild(cb); label.appendChild(document.createTextNode(displayText)); 
        if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
      }); 
    }
    details.appendChild(content); return details; 
  }

  // メインセクション生成ヘルパー
  function createMainSection(id, title, colorStyle = {}) {
    const details = document.createElement("details"); details.id = id; details.className = "qp-main-acc";
    details.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff;";
    const summary = document.createElement("summary"); 
    summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`; 
    summary.style.cssText = "font-weight:bold; padding:12px 14px; cursor:pointer; background:#eef2f6; list-style:none; outline:none; user-select:none; display:flex; align-items:center;";
    if(colorStyle.sumBg) summary.style.background = colorStyle.sumBg;
    if(colorStyle.sumColor) summary.style.color = colorStyle.sumColor;
    details.appendChild(summary);
    const content = document.createElement("div"); content.id = id + "-content"; 
    content.className = "qp-section-content"; content.style.padding = "10px";
    details.appendChild(content); return details;
  }

  // 初心者ガイド生成ヘルパー
  function createBeginnerGuide(data) {
    if (!data) return null;
    const root = document.createElement("details"); root.className = "beginner-guide-root";
    root.style.cssText = "margin-bottom:20px; border:2px solid #89CFF0; border-radius:8px; background:#F0F8FF; display:block;";
    const summary = document.createElement("summary"); summary.innerHTML = "🔰 <b>初心者ガイド：迷ったらここから選ぶ</b>";
    summary.style.cssText = "padding:10px; cursor:pointer; font-weight:bold; list-style:none; outline:none; background:#F0F8FF;"; 
    root.appendChild(summary);
    
    const contentWrapper = document.createElement("div"); 
    contentWrapper.style.cssText = "padding:10px; border-top:1px solid #89CFF0; display:flex; flex-direction:column; gap:15px;";
    
    Object.entries(data).forEach(([title, items]) => {
      const section = document.createElement("div"); 
      section.style.cssText = "border:1px solid #bce; background:#fff; border-radius:8px; padding:10px; width:100%; box-sizing:border-box;";
      const h4 = document.createElement("h4"); h4.textContent = title; 
      h4.style.cssText = "margin:5px 0 8px 0; font-size:0.95em; color:#0056b3; border-bottom:1px dashed #bce; padding-bottom:3px;"; 
      section.appendChild(h4);
      
      const grid = document.createElement("div"); 
      grid.style.cssText = "display:grid; gap:8px; grid-template-columns: 1fr;";
      
      items.forEach(item => {
        const label = document.createElement("label"); 
        label.style.cssText = "display:flex; align-items:center; background:#f9f9f9; padding:8px; border-radius:4px; cursor:pointer; border:1px solid #eee;";
        const cb = document.createElement("input"); cb.type = "checkbox"; cb.dataset.val = item.val; 
        cb.style.marginRight = "10px"; cb.style.flexShrink = "0"; 
        
        const textDiv = document.createElement("div"); 
        textDiv.innerHTML = `<div style="font-weight:bold; font-size:0.95em; color:#333;">${item.label}</div><div style="font-size:0.85em; color:#666; margin-top:2px;">${item.desc}</div>`;
        
        label.appendChild(cb); label.appendChild(textDiv); grid.appendChild(label);
      });
      section.appendChild(grid); contentWrapper.appendChild(section);
    });
    root.appendChild(contentWrapper); return root;
  }

  // メイン処理
  const API = {
    initUI(container) {
      injectStyles();
      
      // データロード確認
      const DATA = window.__QP_DATA || {};
      
      // 辞書登録
      if (window.__outputTranslation && DATA.DICT) {
        window.__outputTranslation.register(DATA.DICT);
      }

      const parent = document.querySelector("#list-quality_preset") || container; 
      parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      
      // 1. 初心者ガイド
      if(DATA.BEGINNER) root.appendChild(createBeginnerGuide(DATA.BEGINNER));
      
      // 2. メインプリセット (画風・NSFW)
      const secPresets = createMainSection("qp-presets", "📦 画風・品質プリセット (Art Styles & Quality)");
      const content = secPresets.querySelector(".qp-section-content");
      
      // シークレット解除スイッチ
      let clickCount = 0;
      secPresets.querySelector("summary").addEventListener("click", () => {
        clickCount++;
        if (clickCount >= 5) {
          const unlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
          if (confirm(unlocked ? "シークレットモードを解除しますか？" : "シークレットモードを解放しますか？")) {
            localStorage.setItem("MY_SECRET_UNLOCK", (!unlocked).toString()); location.reload();
          }
          clickCount = 0;
        }
      });

      // 究極艶の挿入ロジック
      if (DATA.PRESET) {
        const presetData = {...DATA.PRESET}; // 浅いコピー
        if (IS_GLOSS_UNLOCKED) {
          // ハイエンドリストに挿入する処理
          const highEndKey = "💎 ハイエンド・特化 (High-End)";
          // 究極艶アイテム定義 (以前の完全版プロンプト)
          const GLOSS_ITEM = {
            label: "✨ SECRET・究極艶 (Full)",
            val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (subsurface scattering), (global illumination), (physically based rendering), (unreal engine 5), (lumen reflections), (nanite geometry), (8k uhd), (octane render), (realistic lighting), (shiny hair), (glossy hair), (Kodak Portra 400), (low contrast)",
            desc: "全ての光と質感を盛り込んだ究極設定",
            links: ["UE5", "PBR", "SSS", "Ray Tracing", "Global Illumination", "Volumetric", "Octane", "8K"]
          };
          
          if (presetData[highEndKey]) {
             const newHighEnd = [GLOSS_ITEM, ...presetData[highEndKey]];
             presetData[highEndKey] = newHighEnd;
          }
        }
        Object.entries(presetData).forEach(([k,v]) => { content.appendChild(createSubAccordion(k, v)); });
      }
      
      if (IS_R18_UNLOCKED && DATA.SECRET) {
        const secretHeader = document.createElement("div");
        secretHeader.style.cssText = "margin:15px 0 5px; color:#d00; font-weight:bold; border-bottom:2px solid #d00; padding-bottom:3px;";
        secretHeader.textContent = "⚠️ R-18 Settings & Positions (Adult Only)";
        content.appendChild(secretHeader);
        Object.entries(DATA.SECRET).forEach(([k,v]) => { content.appendChild(createSubAccordion(k, v, true)); });
      }
      root.appendChild(secPresets);

      // 3. 他ファイル用コンテナ
      const config = [
        { id: "qp-situations", title: "🎬 シチュエーション・環境", innerId: "qp-situations-general-area" },
        { id: "qp-packs", title: "📦 シチュエーションパック", innerId: "qp-packs-content" },
        { id: "qp-combat", title: "⚔️ 戦闘・アクション", innerId: "qp-combat-content" },
        // ★修正: スタイル・年代のコンテナ生成を削除 (Styleカテゴリーへ移行のため)
        // { id: "qp-styles", title: "🎨 スタイル・文化", innerId: "qp-styles-content" },
        // { id: "qp-eras", title: "🕰️ 時代・年代", innerId: "qp-eras-content" },
        { id: "qp-quality", title: "🔧 品質・技術・ツール", innerId: "qp-quality-content" }
      ];
      config.forEach(c => {
        const sec = createMainSection(c.id, c.title);
        const inner = document.createElement("div"); inner.id = c.innerId;
        sec.querySelector(".qp-section-content").appendChild(inner);
        root.appendChild(sec);
      });
      
      // シチュエーションデータの注入
      if (DATA.SITUATION) {
        const sitArea = root.querySelector("#qp-situations-general-area");
        if (sitArea) {
          Object.entries(DATA.SITUATION).forEach(([k,v]) => {
            sitArea.appendChild(createSubAccordion(k, v));
          });
        }
      }

      // 技術系データの注入
      if (DATA.TECH) {
        const techContent = root.querySelector("#qp-quality-content");
        if (techContent) {
          Object.entries(DATA.TECH).forEach(([k,v]) => {
            techContent.appendChild(createSubAccordion(k, v));
          });
        }
      }

      // 4. ネガティブ
      const negTriggerWrap = document.createElement("div");
      negTriggerWrap.style.cssText = "margin:30px 0 10px; border-top:2px dashed #ffb3b3; text-align:center;";
      const trigger = document.createElement("div");
      trigger.style.cssText = "margin-top:-12px; display:inline-block; user-select:none; cursor:default; -webkit-tap-highlight-color:transparent;";
      trigger.innerHTML = `<span style="background:#fff; padding:0 15px; color:#d9534f; font-weight:bold; font-size:0.9em; border:1px solid #ffb3b3; border-radius:10px;">⚠️ NEGATIVE PROMPTS</span>`;
      
      let r18Count = 0;
      trigger.addEventListener("click", () => {
        r18Count++;
        if (r18Count >= 10) {
          if(confirm(IS_R18_UNLOCKED ? "R-18機能を封印しますか？" : "R-18機能を解放しますか？")) {
            localStorage.setItem("MY_SECRET_UNLOCK", (!IS_R18_UNLOCKED).toString()); location.reload();
          }
          r18Count = 0;
        }
      });
      negTriggerWrap.appendChild(trigger);
      root.appendChild(negTriggerWrap);

      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット", { sumBg: "#fff0f0", sumColor: "#d00" });
      secNegSets.querySelector(".qp-section-content").id = "qp-neg-sets-content";
      root.appendChild(secNegSets);
      
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブワード", { sumBg: "#fff0f0", sumColor: "#d00" });
      secNegWords.querySelector(".qp-section-content").id = "qp-neg-words-content";
      root.appendChild(secNegWords);
      
      parent.appendChild(root);
    },
    getTags() { 
      const tags = []; 
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.val)); 
      document.querySelectorAll(".beginner-guide-root input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.val));
      return tags; 
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

