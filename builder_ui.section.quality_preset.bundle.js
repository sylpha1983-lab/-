// Auto-generated bundle for section 'quality_preset'
// Contains 10 versions stacked in ascending order.

(function(){
// --- builder_ui.section.quality_preset.v1.js ---
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


  // 2.5. 上位クオリティ（High-Quality Preset）: 方向性を固定せず、破綻を減らす“精度モード”
  const HIGH_QUALITY_DATA = [
    { label: "エネルギー保存シェーディング (Energy Conserving)", val: "energy-conserving shading" },
    { label: "正確な露出 (Physically Correct Exposure)", val: "physically correct exposure" },
    { label: "HDRライティング (HDRL)", val: "high dynamic range lighting (HDRL)" },
    { label: "光輸送精度 (Light Transport Accuracy)", val: "light transport accuracy" },
    { label: "光挙動の整合 (Physically Plausible Light)", val: "physically plausible light behavior" },
    { label: "スケール整合 (Scale Consistency)", val: "scale consistency" },
    { label: "全体整合 (Visual Coherence)", val: "visual coherence" },
    { label: "スケール間ディテール整合 (Detail Consistency)", val: "detail consistency across scales" },
    { label: "テクスチャ整合 (Texture Coherence)", val: "texture coherence" },
    { label: "マイクロディテール保持 (Micro-detail)", val: "micro-detail preservation" },
    { label: "輪郭忠実度 (Edge Fidelity)", val: "edge fidelity" },
    { label: "細部破綻防止 (Fine Detail Integrity)", val: "fine detail integrity" }
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
      root.id = "qp-root-container"; 

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
      conQuality.appendChild(window.__QP_UTILS.createSubAccordion("🜂 上位クオリティ (High-Quality Preset)", HIGH_QUALITY_DATA));
      root.appendChild(secQuality);

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

})();

(function(){
// --- builder_ui.section.quality_preset.v2.js ---
(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "quality_preset";

  const SITUATION_DATA = {
    "📍 スポット・お店 (Spots)": [
      { label: "アイドルステージ", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)", links: ["シネマティック"] },
      { label: "おしゃれカフェ", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)", links: ["ボケ"] },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック"] },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)" },
      { label: "病院・病室", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)" },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)" }
    ],
    "🏫 学園・青春 (School)": [
      { label: "教室 (昼)", val: "(classroom), (school desks), (blackboard), (sunlight through window), (afternoon), (school life), (chalk dust)" },
      { label: "教室 (夕方)", val: "(classroom), (sunset), (orange sky), (shadows), (melancholic), (after school), (empty classroom), (nostalgic)" },
      { label: "屋上", val: "(school rooftop), (fence), (blue sky), (clouds), (windy), (city view in distance), (lunch time), (freedom)" },
      { label: "体育館", val: "(school gymnasium), (basketball court), (varnished wood floor), (indoor sports), (volleyball net), (high ceiling)" }
    ],
    "🏠 家・日常 (Home)": [
      { label: "リビング", val: "(modern living room), (sofa), (tv), (carpet), (cozy atmosphere), (indoor plant), (sunlight), (relaxing)" },
      { label: "キッチン", val: "(kitchen), (cooking), (apron), (refrigerator), (vegetables), (sink), (morning light), (breakfast preparation)" },
      { label: "ベッドルーム", val: "(bedroom), (bed), (messy sheets), (pillows), (curtains), (morning), (waking up), (pajamas), (private space)" },
      { label: "和室", val: "(japanese room), (tatami mats), (shoji screen), (kotatsu), (cushion), (tea), (calm atmosphere), (traditional)" },
      { label: "バスルーム", val: "(bathroom), (bathtub), (steam), (tiles), (mirror), (shampoo bottles), (relaxing bath), (wet skin)" }
    ],
    "🏙️ 都会・ストリート (City)": [
      { label: "渋谷・交差点", val: "(shibuya crossing), (crowd), (skyscrapers), (billboards), (neon signs), (modern city), (busy street), (daytime)" },
      { label: "サイバーパンク街", val: "(cyberpunk city), (neon lights), (holograms), (rain), (wet street), (futuristic), (night), (flying cars)" },
      { label: "路地裏", val: "(back alley), (dim lighting), (vending machine), (trash cans), (pipes), (stray cat), (urban exploration), (graffiti)" },
      { label: "夜景・ビル街", val: "(night city view), (skyscraper), (office lights), (highway), (car lights), (bokeh), (beautiful scenery)" },
      { label: "電車内", val: "(inside train), (hanging straps), (seats), (window reflection), (commuting), (passing scenery)" }
    ],
    "🌺 自然・絶景 (Nature)": [
      { label: "青空・草原", val: "(blue sky), (white clouds), (green field), (grass), (wind), (open space), (nature), (bright sunlight)" },
      { label: "森・木漏れ日", val: "(forest), (trees), (sunbeams), (leaf shadows), (nature path), (peaceful), (greenery), (moss)" },
      { label: "海・ビーチ", val: "(beach), (ocean), (waves), (white sand), (horizon), (summer), (tropical), (palm trees)" },
      { label: "星空・夜空", val: "(starry sky), (milky way), (night), (shooting star), (silhouette), (beautiful scenery), (universe)" },
      { label: "桜並木", val: "(cherry blossoms), (sakura), (falling petals), (pink flowers), (spring), (park), (pathway)" },
      { label: "雪景色", val: "(snowy landscape), (winter), (snowing), (white ground), (cold breath), (frost), (frozen lake)" }
    ]
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
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
      label.appendChild(cb); 
      label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); 
    return details; 
  }

  const API = {
    initUI(container) {
      const generalArea = document.getElementById("qp-situations-general-area");
      if (generalArea) {
        generalArea.innerHTML = ""; 
        Object.entries(SITUATION_DATA).forEach(([k,v]) => { 
          generalArea.appendChild(createSubAccordion(k, v)); 
        });
      }
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v3.js ---
(function(){
  "use strict";
  const VERSION = 3; 
  const KEY = "quality_preset";
  // v3: 辞書登録のみ行う (UI生成なし)
  const DICT = {
    "kyoto animation": "京都アニメーション", "studio ghibli": "スタジオジブリ", "studio trigger": "TRIGGER", 
    "mika pikazo style": "Mika Pikazo風", "yoneyama mai style": "米山舞風", "oil painting": "油絵", "impasto": "厚塗り", 
    "watercolor medium": "水彩", "ink wash painting": "水墨画", "sketch": "スケッチ", "line art": "線画", 
    "ukiyo-e style": "浮世絵", "stained glass style": "ステンドグラス", "ancient egypt": "古代エジプト", "medieval era": "中世",
    "showa era style": "昭和レトロ", "cyberpunk future": "サイバーパンク未来"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v4.js ---
(function(){
  "use strict";
  const VERSION = 4; 
  const KEY = "quality_preset";

  const QUALITY_DATA = {
    "🛠️ 制作ソフト・ツール": [
      { ja: "Cinema 4D", en: "cinema 4d" }, { ja: "ZBrush (彫刻)", en: "zbrush" }, { ja: "Maya", en: "maya" }, { ja: "Blender", en: "blender" }
    ],
    "🖥️ レンダリング・エンジン": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" }, { ja: "Octane Render", en: "octane render" }, { ja: "Blender Cycles", en: "cycles render" }
    ],
    "⚙️ 3D技術・シェーダー": [
      { ja: "パストレーシング", en: "path tracing" }, { ja: "レイトレーシング", en: "ray tracing" }, { ja: "Lumen反射 (UE5)", en: "lumen reflections" }, { ja: "Naniteジオメトリ", en: "nanite geometry" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" }, { ja: "SSS (表面下散乱)", en: "subsurface scattering" }, { ja: "グローバルイルミネーション", en: "global illumination" }
    ],};

  // --- Negative data (restored) ---
  const NEG_WORDS_DATA = {
    "画質・品質 (Low Quality)": [
      { ja: "低品質", en: "low quality" }, { ja: "最低品質", en: "worst quality" }, { ja: "JPEGノイズ", en: "jpeg artifacts" }, { ja: "ぼやけた", en: "blurry" },
      { ja: "低解像度", en: "lowres" }, { ja: "エラー", en: "error" }, { ja: "ピクセル化", en: "pixelated" }
    ],
    "人体崩壊 (Bad Anatomy)": [
      { ja: "崩れた解剖学", en: "bad anatomy" }, { ja: "崩れた手", en: "bad hands" }, { ja: "奇形の手", en: "malformed hands" }, { ja: "欠損した指", en: "missing fingers" },
      { ja: "余分な指", en: "extra fingers" }, { ja: "長い首", en: "long neck" }, { ja: "変形", en: "deformed" }, { ja: "突然変異", en: "mutated" },
      { ja: "浮遊する肢", en: "floating limbs" }, { ja: "余分な手足", en: "extra limbs" }
    ],
    "不要な要素 (Unwanted)": [
      { ja: "テキスト", en: "text" }, { ja: "透かし", en: "watermark" }, { ja: "署名", en: "signature" }, { ja: "ユーザー名", en: "username" },
      { ja: "ロゴ", en: "logo" }, { ja: "QRコード", en: "qr code" }, { ja: "バーコード", en: "bar code" }
    ],
    "👁️ 目のハイライト除去": [
      { ja: "目のハイライト", en: "eye highlight" }, { ja: "目の反射", en: "reflection" }, { ja: "キラキラ・輝き", en: "sparkle" },
      { ja: "光の粒子", en: "light particles" }, { ja: "美しい目", en: "beautiful detailed eyes" }, { ja: "明るい目", en: "bright eyes" }
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      { label: "目のハイライト完全除去", val: "eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes" }
    ]
  };


  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; 
    const summary = document.createElement("summary"); summary.textContent = title; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label"); const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.dataset.val = item.val || item.en;
      cb.addEventListener("change", () => { if (window.__VISUAL_SYNC?.updateSelectedList) window.__VISUAL_SYNC.updateSelectedList(); });
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      const conQuality = document.getElementById("qp-quality-content");
      if (conQuality) Object.entries(QUALITY_DATA).forEach(([k,v]) => { conQuality.appendChild(createSubAccordion(k, v)); });

      // 🧩 シークレットモード: 開発者モードトグル
      try {
        const summaries = document.querySelectorAll("#qp-quality-content summary");
        summaries.forEach(summary => {
          if (summary.textContent.includes("3D技術")) {
            let devTap = 0; let lastDevTime = 0;
            summary.addEventListener("click", () => {
              const now = Date.now(); if (now - lastDevTime > 2000) devTap = 0;
              lastDevTime = now; devTap++;
              if (devTap >= 10) {
                const key = "BUILDER_DEV_MODE"; const next = !(localStorage.getItem(key) === "true");
                if (confirm(`🧩 開発者モードを ${next ? "ON" : "OFF"} にしますか？`)) {
                  localStorage.setItem(key, next.toString()); location.reload();
                }
                devTap = 0;
              }
            });
          }
        });
      } catch (err) {}

      const conNegSets = document.getElementById("qp-neg-sets-content");
      if (conNegSets) Object.entries(NEG_SETS).forEach(([k,v]) => { conNegSets.appendChild(createSubAccordion(k, v)); });
      const conNegWords = document.getElementById("qp-neg-words-content");
      if (conNegWords) Object.entries(NEG_WORDS_DATA).forEach(([k,v]) => { conNegWords.appendChild(createSubAccordion(k, v)); });

    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v5.js ---
// v5: Empty utility pass-through
(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "quality_preset";
  const API = { initUI(container) {}, getTags() { return []; } };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v6.js ---
(function(){
  "use strict";
  const VERSION = 6; 
  const KEY = "quality_preset";
  const DICT = {
    "holding stethoscope": "聴診器", "nurse uniform": "ナース服", "maid outfit": "メイド服", "bunny girl suit": "バニーガール",
    "office lady": "OL", "police uniform": "婦警", "miko outfit": "巫女服", "holding weapon": "武器を持つ"
  };
  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v7.js ---
(function(){
  "use strict";
  const VERSION = 7; 
  const KEY = "quality_preset";
  const DICT = {
    "drawing katana": "抜刀", "dual wielding": "二刀流", "fire magic": "炎魔法", "flying kick": "飛び蹴り",
    "reloading gun": "リロード", "holding sniper rifle": "スナイパー", "defeated": "敗北", "shibari": "緊縛"
  };
  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v8.js ---
(function(){
  "use strict";
  const VERSION = 8; 
  const KEY = "quality_preset";
  const DICT = { "art nouveau": "アール・ヌーヴォー", "cyberpunk": "サイバーパンク", "steampunk": "スチームパンク", "pixel art": "ドット絵" };
  const API = {
    initUI(container) { if (window.__outputTranslation) window.__outputTranslation.register(DICT); },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v9.js ---
(function(){
  "use strict";
  const VERSION = 9; 
  const KEY = "quality_preset";
  const DICT = { "vaporwave": "ヴェイパーウェイヴ", "synthwave": "シンセウェイヴ", "lo-fi aesthetic": "ローファイ" };
  const API = {
    initUI(container) { if (window.__outputTranslation) window.__outputTranslation.register(DICT); },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v10.js ---
// ★ 修正版: R-18 UI (シークレットモード)
// 解除時のみUIを生成・追加します。
(function(){
  "use strict";
  const VERSION = 10; 
  const KEY = "quality_preset";
  
  // ★ ロック判定: 解除されていなければここで終了
  const IS_UNLOCKED = false;// R-18 moved to Preset Packs (disable in Quality & Settings)

  const R18_FULL_DATA = {
    "⚠️ NSFWフラグ・基本 (Flags)": [
      { label: "NSFW (基本)", val: "nsfw, (uncensored)" },
      { label: "R-18 (卑猥)", val: "r-18, (lewd), (erotic), (sexual)" },
      { label: "ヌード許可", val: "nude, naked, (nipples), (pussy), (no clothes)" },
      { label: "体液・汚れ", val: "(sweat), (wet skin), (saliva), (cum), (sticky texture), (messy body)" },
      { label: "高画質R-18補正", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin:1.3), (cinematic lighting:1.2), (depth of field:1.1)" }
    ],
    "🧘 体位・基本48手 (Positions)": [
      { label: "正常位 (Missionary)", val: "(missionary position), (lying on back), (legs spread), (looking at viewer), (holding hands), (loving sex)" },
      { label: "騎乗位 (Cowgirl)", val: "(cowgirl position), (straddling), (sitting on lap), (bouncing breasts), (looking down), (dominant female)" },
      { label: "背面騎乗位 (Reverse Cowgirl)", val: "(reverse cowgirl position), (showing ass), (back to viewer), (arched back), (looking back)" },
      { label: "バック (Doggystyle)", val: "(doggystyle), (on all fours), (from behind), (grabbing hips), (ass focus), (deep penetration), (curved silhouette)" },
      { label: "対面座位 (Mating Press)", val: "(mating press), (legs on shoulders), (deepest penetration), (folded body), (intense eye contact)" },
      { label: "駅弁 (Standing)", val: "(standing sex), (lifted up), (carrying), (legs wrapped around waist), (against wall)" },
      { label: "側位 (Spoon)", val: "(spooning sex), (lying on side), (hugging from behind), (gentle sex), (intimate)" },
      { label: "屈曲位 (Prone Bone)", val: "(prone bone), (lying on stomach), (hips raised), (face in pillow), (helpless)" },
      { label: "M字開脚", val: "(m-shaped posture), (legs spread wide), (knees raised), (presenting), (open legs)" }
    ],
    "🏩 H-ロケーション (Locations)": [
      { label: "ラブホテル", val: "(love hotel), (mirror room), (neon lights), (fancy bed), (pillows)" },
      { label: "お風呂・温泉", val: "(bathroom), (onsen), (steam), (wet body), (tiled wall), (soap)" },
      { label: "マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism)" },
      { label: "公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex)" }
    ],
    "👫 男女・シチュエーション (Relations)": [
      { label: "純愛・見つめ合い", val: "(1boy), (1girl), (missionary position), (sex), (locking eyes), (loving sex), (blushing), (intertwined fingers), (kissing), (romantic)" },
      { label: "体格差", val: "(1boy), (1girl), (size difference), (height difference), (small girl), (stretching), (bulge), (masculine male)" },
      { label: "寝取られ (NTR)", val: "(ntr), (cheating), (cuckold), (watching from closet), (video call), (crying), (forced smile)" }
    ],
    "🤪 R-18 表情・精神 (Expressions)": [
      { label: "あへ顔", val: "(ahegao:1.3), (rolling eyes), (tongue out), (drooling), (v-shaped eyebrows)" },
      { label: "ハート目", val: "(heart-shaped pupils), (pink eyes), (infatuated), (love struck)" },
      { label: "虚ろ目", val: "(vacant eyes), (empty eyes), (no pupil highlights), (glassy eyes), (mind break), (broken expression)" },
      { label: "快楽堕ち", val: "(pleasure face), (blush), (slobber), (euphoric tears), (ecstatic expression)" }
    ],
    "🐙 触手・スライム (Tentacles)": [
      { label: "触手基本セット", val: "(tentacles), (slime), (mucus), (living tentacles), (bioluminescent), (thick tentacle), (slimy texture), (wriggling)" },
      { label: "生体スーツ", val: "(living monokini), (tentacle suit), (slime bodysuit), (pulsing texture), (fused with skin)" },
      { label: "触手搾乳", val: "(tentacle milking), (suction cups), (breast milking), (nipple stimulation)" }
    ]
  };

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;

      const mount = () => {
        const root = document.getElementById("qp-root-container");
        if(!root || !window.__QP_UTILS) { setTimeout(mount, 50); return; }
        
        // 重複防止
        const old = document.getElementById("qp-r18-category");
        if(old) old.remove();

        const secR18 = window.__QP_UTILS.createMainSection("qp-r18-category", "🔞 R-18・H設定 (Adult Settings)", { 
          sumBg: "#fff0f0", sumColor: "#d00", className: "qp-r18-root" 
        });
        const conR18 = secR18.querySelector(".qp-section-content");

        // データを生成
        Object.entries(R18_FULL_DATA).forEach(([title, items]) => {
          conR18.appendChild(window.__QP_UTILS.createSubAccordion(title, items, "secret"));
        });

        // 戦闘アクション(qp-combat)の前、なければ末尾に追加
        // ※ v1-9で生成されるセクションIDを考慮して位置調整
        const negSets = document.getElementById("qp-neg-sets");
        if(negSets) root.insertBefore(secR18, negSets);
        else root.appendChild(secR18);
      };
      mount();
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();
