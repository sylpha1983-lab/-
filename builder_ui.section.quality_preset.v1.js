(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";
  
  const IS_GLOSS_UNLOCKED = localStorage.getItem("MY_GLOSS_UNLOCK") === "true";

  // 1. スタイル & ユーティリティ
  function injectStyles() {
    const styleId = "qp-mobile-style-core";
    if (document.getElementById(styleId)) return;
    const css = `
      .qp-main-acc { margin-bottom: 10px !important; border: 1px solid #ccc !important; border-radius: 6px !important; background: #fff !important; }
      .qp-sub-acc { border: 1px solid #ccc !important; border-radius: 4px !important; margin-bottom: 6px !important; background: #fff !important; width: 100% !important; box-sizing: border-box !important; }
      .qp-sub-acc summary, .qp-main-acc summary { padding: 10px 12px !important; font-weight: bold !important; cursor: pointer !important; background: #f9f9f9 !important; font-size: 14px !important; list-style: none !important; outline: none !important; }
      
      .qp-sub-acc.qp-secret { border-color: #ffcccc !important; }
      .qp-sub-acc.qp-secret summary { background: #fff0f0 !important; color: #d00 !important; }
      .qp-sub-acc.qp-gloss { border-color: #e0ccff !important; }
      .qp-sub-acc.qp-gloss summary { background: #f8f0ff !important; color: #6600cc !important; }
      
      .qp-content-grid { padding: 8px !important; display: grid !important; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important; gap: 8px !important; }
      .qp-content-grid label { display: flex !important; align-items: center !important; font-size: 13px !important; cursor: pointer !important; padding: 4px !important; border-radius: 4px !important; transition: background 0.1s; }
      .qp-content-grid label:hover { background: #f0f8ff !important; }
      .qp-content-grid input[type="checkbox"] { transform: scale(1.1); margin-right: 6px; }
      
      #qp-neg-trigger-wrap { margin-top: 15px; margin-bottom: 5px; text-align: center; padding: 10px 0; }
      #qp-neg-trigger { cursor: pointer; user-select: none; transition: opacity 0.2s; display: inline-block; }
      #qp-neg-trigger:active { opacity: 0.6; transform: scale(0.95); }

      /* R-18カテゴリー用 (v10で使用) */
      .qp-main-acc.qp-r18-root { border-color: #ffcccc !important; border-width: 2px !important; }
      .qp-main-acc.qp-r18-root summary { background: #fff0f0 !important; color: #d00 !important; }

      .beginner-guide-root { margin-bottom: 20px; border: 2px solid #89CFF0; border-radius: 8px; background: #F0F8FF; display: block; }
      .beginner-guide-root summary { padding: 10px; cursor: pointer; font-weight: bold; list-style: none; outline: none; background: #F0F8FF; color: #0056b3; }
      .bg-section { border: 1px solid #bce; background: #fff; border-radius: 8px; padding: 10px; margin-bottom: 10px; }
      .bg-header { margin: 5px 0 8px 0; font-size: 0.95em; color: #0056b3; border-bottom: 1px dashed #bce; padding-bottom: 3px; font-weight: bold; }
    `;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 他のバージョンから使える便利関数
  window.__QP_UTILS = {
    createSubAccordion(title, items, type) {
      const details = document.createElement("details");
      details.className = "qp-sub-acc";
      if(type === "secret") details.classList.add("qp-secret");
      if(type === "gloss") details.classList.add("qp-gloss");
      details.open = false;
      const summary = document.createElement("summary");
      summary.textContent = title;
      details.appendChild(summary);
      const content = document.createElement("div");
      content.className = "qp-content-grid";
      items.forEach(item => {
        const label = document.createElement("label");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.dataset.val = item.val || item.en;
cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList) window.__VISUAL_SYNC.updateSelectedList();
});
        if(item.links) cb.dataset.links = item.links.join(",");
        if(item.desc) label.title = item.desc;
        if(item.label.includes("㊙️") || item.label.includes("⚡") || item.label.includes("⚠️")) {
          label.style.fontWeight = "bold"; label.style.color = "#800080"; label.style.background = "#f0e6ff"; label.style.border = "1px solid #d0b0ff";
        }
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`));
        content.appendChild(label);
      });
      details.appendChild(content);
      return details;
    },
    createMainSection(id, title, options = {}) {
      const details = document.createElement("details");
      details.className = "qp-main-acc";
      if (options.className) details.classList.add(options.className);
      details.id = id;
      details.open = false;
      const summary = document.createElement("summary");
      summary.textContent = title;
      if (options.sumBg) summary.style.background = options.sumBg;
      if (options.sumColor) summary.style.color = options.sumColor;
      details.appendChild(summary);
      const content = document.createElement("div");
      content.className = "qp-section-content";
      content.id = id + "-content";
      content.style.padding = "10px";
      details.appendChild(content);
      return details;
    }
  };

  // 2. データ定義 (Core)
  const BEGINNER_DATA = {
    "🔰 基本の画質設定 (Quality)": [
      { label: "超高画質セット", val: "(masterpiece), (best quality), (ultra-detailed), (8k), (illustration)", desc: "とりあえずこれをONにすれば綺麗になります" },
      { label: "背景ボケ・人物集中", val: "(depth of field), (bokeh), (blurred background), (centered)", desc: "人物を際立たせたい時に" }
    ],
    "🎨 イラストのタッチ (Style)": [
      { label: "アニメ塗り (セルルック)", val: "(anime coloring), (cel shading), (vibrant colors), (clean lines)", desc: "くっきりとしたアニメ調" },
      { label: "厚塗り (セミリアル)", val: "(thick painting), (impasto), (realistic texture), (rich colors)", desc: "重厚感のある塗り" },
      { label: "水彩風 (淡い)", val: "(watercolor), (soft colors), (wet on wet), (gentle atmosphere)", desc: "柔らかい雰囲気" }
    ]
  };

  const BASE_QUALITY = [
    { label: "最高品質 (Masterpiece)", val: "(masterpiece), (best quality), (highres), (ultra-detailed), (8k)" },
    { label: "高画質・精細", val: "(extremely detailed), (intricate details), (sharp focus), (illustration)" },
    { label: "公式アート風", val: "(official art), (unity 8k wallpaper), (detailed background)" },
    { label: "映画的ライティング", val: "(cinematic lighting), (dramatic lighting), (volumetric lighting), (ray tracing)" }
  ];

  const HIGH_END_DATA = [
    { label: "ハイエンド補正", val: "(8k wallpaper), (extremely detailed), (intricate), (high budget), (hdr)" },
    { label: "瞳の超書き込み", val: "(beautiful detailed eyes), (detailed iris), (reflection in eyes), (sparkling eyes)" },
    { label: "肌の質感 (リアル)", val: "(realistic skin texture), (detailed skin), (soft skin), (skin pores)" },
    { label: "髪の解像度アップ", val: "(detailed hair), (hair strands), (lustrous hair)" }
  ];

  if (IS_GLOSS_UNLOCKED) {
    HIGH_END_DATA.unshift({
      label: "㊙️ 究極的艶 (Ultimate Gloss)",
      val: "(octane render), (unreal engine 5), (realistic lighting), (subsurface scattering), (global illumination), (volumetric lighting), (masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (physically based rendering), (lumen reflections), (nanite geometry), (8k uhd), (shiny hair), (glossy hair), (Kodak Portra 400), (low contrast)",
      links: ["UE5", "PBR", "SSS", "Ray Tracing", "Global Illumination", "Volumetric", "Octane", "8K"],
      desc: "シークレット: 全ての光と質感を盛り込んだ究極設定"
    });
  }

  // 3. メイン処理
  const API = {
    initUI(container) {
      injectStyles();
      const root = document.createElement("div");
      root.className = "quality-preset-integrated";
      root.id = "qp-root-container"; // 他のバージョンが親を探す用

      // 0. 初心者ガイド
      const guide = document.createElement("details"); guide.className = "beginner-guide-root";
      guide.innerHTML = "<summary>🔰 <b>初心者ガイド：迷ったらここから選ぶ</b></summary>";
      const gContent = document.createElement("div"); gContent.style.cssText = "padding:10px; border-top:1px solid #89CFF0; display:flex; flex-direction:column; gap:10px;";
      Object.entries(BEGINNER_DATA).forEach(([t, i]) => {
        const sec = document.createElement("div"); sec.className = "bg-section";
        sec.innerHTML = `<h4 class="bg-header">${t}</h4>`;
        const grid = document.createElement("div"); grid.className = "qp-content-grid";
        i.forEach(it => {
          const l = document.createElement("label");
          l.innerHTML = `<input type="checkbox" data-val="${it.val}"><div style="line-height:1.2"><div style="font-weight:bold; font-size:0.95em; color:#333;">${it.label}</div><div style="font-size:0.85em; color:#666;">${it.desc}</div></div>`;
          grid.appendChild(l);
        });
        sec.appendChild(grid); gContent.appendChild(sec);
      });
      guide.appendChild(gContent);
      root.appendChild(guide);

      // 1. 品質・基本設定
      const secQuality = window.__QP_UTILS.createMainSection("qp-quality", "💎 品質・基本設定 (Quality & Settings)");
      const conQuality = secQuality.querySelector(".qp-section-content");
      
      const subBase = window.__QP_UTILS.createSubAccordion("✨ 画質・クオリティ (Base)", BASE_QUALITY);
      // 艶解放隠しコマンド
      let glossTap = 0; let lastGlossTime = 0;
      subBase.querySelector("summary").addEventListener("click", () => {
        const now = Date.now(); if(now - lastGlossTime > 2000) glossTap = 0;
        glossTap++; lastGlossTime = now;
        if(glossTap >= 5) {
          if(confirm(`シークレット機能「究極的艶」を${IS_GLOSS_UNLOCKED ? "封印" : "解放"}しますか？`)) {
            localStorage.setItem("MY_GLOSS_UNLOCK", (!IS_GLOSS_UNLOCKED).toString()); location.reload();
          }
          glossTap = 0;
        }
      });
      conQuality.appendChild(subBase);
      conQuality.appendChild(window.__QP_UTILS.createSubAccordion("🏆 ハイエンド・特化 (High-End)", HIGH_END_DATA, IS_GLOSS_UNLOCKED ? "gloss" : null));
      root.appendChild(secQuality);

      // ★ 2. 画風・スタイル (Container for v8, v9)
      const secStyles = window.__QP_UTILS.createMainSection("qp-styles", "🎨 画風・スタイル (Art Styles)");
      secStyles.querySelector(".qp-section-content").id = "qp-styles-content"; // v8, v9 がここに挿入する
      root.appendChild(secStyles);

      // 3. シチュエーション
      const secSit = window.__QP_UTILS.createMainSection("qp-situations-general", "📍 場所・シチュエーション (Place & Situation)");
      root.appendChild(secSit);

      // 4. 職業・パック (Container for v6)
      const secPacks = window.__QP_UTILS.createMainSection("qp-packs", "📦 職業・なりきりパック (Job & Roleplay)");
      secPacks.querySelector(".qp-section-content").id = "qp-packs-content"; // v6 がここに挿入する
      root.appendChild(secPacks);

      // 5. 戦闘アクション
      const secCombat = window.__QP_UTILS.createMainSection("qp-combat", "⚔️ 戦闘・アクション (Combat)");
      secCombat.id = "qp-combat"; // v10 がこれの手前に挿入するターゲット
      root.appendChild(secCombat);

      // 6. ネガティブ (R-18解放トリガー)
      const negTriggerWrap = document.createElement("div");
      negTriggerWrap.id = "qp-neg-trigger-wrap";
      const trigger = document.createElement("span");
      trigger.id = "qp-neg-trigger";
      trigger.innerHTML = `<span style="padding:4px 15px; background:#fff0f0; color:#d9534f; font-weight:bold; font-size:0.9em; border:1px solid #ffb3b3; border-radius:10px;">⚠️ NEGATIVE PROMPTS</span>`;
      let r18Count = 0;
      trigger.addEventListener("click", () => {
        const isUnlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
        r18Count++;
        if (r18Count >= 10) {
          if(confirm(`R-18機能(シークレットモード)を${isUnlocked ? "封印" : "解放"}しますか？`)) {
            localStorage.setItem("MY_SECRET_UNLOCK", (!isUnlocked).toString());
            location.reload();
          }
          r18Count = 0;
        }
      });
      negTriggerWrap.appendChild(trigger);
      root.appendChild(negTriggerWrap);

      // 7. ネガティブセクション
      const secNegSets = window.__QP_UTILS.createMainSection("qp-neg-sets", "🚫 ネガティブプリセット", { sumBg: "#fff0f0", sumColor: "#d00" });
      const secNegWords = window.__QP_UTILS.createMainSection("qp-neg-words", "🗑️ ネガティブワード", { sumBg: "#fff0f0", sumColor: "#d00" });
      root.appendChild(secNegSets);
      root.appendChild(secNegWords);
      
      const contentArea = container.querySelector(".section-content") || container;
      contentArea.innerHTML = ""; 
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      const root = document.querySelector(".quality-preset-integrated");
      if (root) {
        root.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
          if(cb.dataset.val) tags.push(cb.dataset.val);
        });
      }
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

