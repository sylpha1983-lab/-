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
//       const secStyles = window.__QP_UTILS.createMainSection("qp-styles", "🎨 画風・スタイル (Art Styles)");
//       secStyles.querySelector(".qp-section-content").id = "qp-styles-content"; // v8, v9 がここに挿入する
//       root.appendChild(secStyles);

      // （A-3）場所・シチュエーション / 職業・なりきり / 戦闘・アクションは「セットプリセット」側へ移動しました。

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
      { label: "イベントスペース", val: "(mini idol event space), (decorated tables), (promotional posters), (fan meeting), (bright atmosphere)" },
      { label: "コラボカフェ", val: "(themed cafe), (character latte art), (feather-shaped sweets), (cute decorations), (pastel theme)" },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック"] },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "スーパーマーケット", val: "(supermarket), (grocery shopping), (aisle), (shopping basket), (fruit and vegetables), (bright lighting)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)" },
      { label: "病院・病室", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)" },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)" }
    ],
    "🏫 学園・青春 (School)": [
      { label: "教室 (昼)", val: "(classroom), (school desks), (blackboard), (sunlight through window), (afternoon), (school life), (chalk dust)" },
      { label: "教室 (夕方)", val: "(classroom), (sunset), (orange sky), (shadows), (melancholic), (after school), (empty classroom), (nostalgic)" },
      { label: "屋上", val: "(school rooftop), (fence), (blue sky), (clouds), (windy), (city view in distance), (lunch time), (freedom)" },
      { label: "廊下", val: "(school hallway), (lockers), (polished floor), (perspective), (sunbeams), (conversing students in background)" },
      { label: "体育館", val: "(school gymnasium), (basketball court), (varnished wood floor), (indoor sports), (volleyball net), (high ceiling)" },
      { label: "校庭・グラウンド", val: "(school grounds), (running track), (cherry blossoms), (sports day), (blue sky), (activity)" },
      { label: "保健室", val: "(school infirmary), (white bed), (curtain), (medicine cabinet), (quiet), (resting), (afternoon sun)" },
      { label: "図書室", val: "(school library), (bookshelves), (quiet), (reading), (sunlight), (dust particles), (studying)" },
      { label: "部室", val: "(club room), (cluttered), (props), (after school activity), (tea time), (cozy)" }
    ],
    "🏠 家・日常 (Home)": [
      { label: "リビング", val: "(modern living room), (sofa), (tv), (carpet), (cozy atmosphere), (indoor plant), (sunlight), (relaxing)" },
      { label: "キッチン", val: "(kitchen), (cooking), (apron), (refrigerator), (vegetables), (sink), (morning light), (breakfast preparation)" },
      { label: "ベッドルーム", val: "(bedroom), (bed), (messy sheets), (pillows), (curtains), (morning), (waking up), (pajamas), (private space)" },
      { label: "和室", val: "(japanese room), (tatami mats), (shoji screen), (kotatsu), (cushion), (tea), (calm atmosphere), (traditional)" },
      { label: "バスルーム", val: "(bathroom), (bathtub), (steam), (tiles), (mirror), (shampoo bottles), (relaxing bath), (wet skin)" },
      { label: "玄関", val: "(entrance hall), (genkan), (shoes), (umbrella stand), (welcome home), (door), (leaving home)" },
      { label: "ベランダ", val: "(balcony), (laundry hanging), (potted plants), (city view), (railing), (breeze), (relaxing)" }
    ],
    "🏙️ 都会・ストリート (City)": [
      { label: "渋谷・交差点", val: "(shibuya crossing), (crowd), (skyscrapers), (billboards), (neon signs), (modern city), (busy street), (daytime)" },
      { label: "サイバーパンク街", val: "(cyberpunk city), (neon lights), (holograms), (rain), (wet street), (futuristic), (night), (flying cars)" },
      { label: "路地裏", val: "(back alley), (dim lighting), (vending machine), (trash cans), (pipes), (stray cat), (urban exploration), (graffiti)" },
      { label: "夜景・ビル街", val: "(night city view), (skyscraper), (office lights), (highway), (car lights), (bokeh), (beautiful scenery)" },
      { label: "駅のホーム", val: "(train station platform), (waiting for train), (electric board), (commuters), (railway tracks), (morning rush)" },
      { label: "電車内", val: "(inside train), (hanging straps), (seats), (window reflection), (commuting), (passing scenery)" },
      { label: "商店街", val: "(shopping street), (market), (crowded), (signs), (lanterns), (food stalls), (lively atmosphere)" }
    ],
    "🌺 自然・絶景 (Nature)": [
      { label: "青空・草原", val: "(blue sky), (white clouds), (green field), (grass), (wind), (open space), (nature), (bright sunlight)" },
      { label: "森・木漏れ日", val: "(forest), (trees), (sunbeams), (leaf shadows), (nature path), (peaceful), (greenery), (moss)" },
      { label: "海・ビーチ", val: "(beach), (ocean), (waves), (white sand), (horizon), (summer), (tropical), (palm trees)" },
      { label: "夕焼けの海", val: "(sunset at beach), (orange sky), (reflection on water), (silhouettes), (emotional), (purple clouds)" },
      { label: "星空・夜空", val: "(starry sky), (milky way), (night), (shooting star), (silhouette), (beautiful scenery), (universe)" },
      { label: "桜並木", val: "(cherry blossoms), (sakura), (falling petals), (pink flowers), (spring), (park), (pathway)" },
      { label: "紅葉", val: "(autumn leaves), (red and yellow leaves), (fall season), (park), (fallen leaves on ground), (scenic)" },
      { label: "雪景色", val: "(snowy landscape), (winter), (snowing), (white ground), (cold breath), (frost), (frozen lake)" },
      { label: "花畑", val: "(flower field), (colorful flowers), (sunflowers), (blooming), (garden), (nature beauty)" }
    ],
    "👻 ホラー・怪奇 (Horror)": [
      { label: "廃墟", val: "(abandoned building), (ruins), (broken glass), (overgrown), (dust), (decay), (lonely atmosphere)" },
      { label: "廃病院", val: "(abandoned hospital), (wheelchair), (blood stains), (flickering light), (dark corridor), (scary), (medical equipment)" },
      { label: "暗い森", val: "(dark forest), (fog), (mist), (twisted trees), (spooky), (shadows), (moonlight), (unknown creature)" },
      { label: "路地裏 (夜)", val: "(dark alleyway), (street light), (shadows), (ominous), (alone), (danger), (brick wall)" },
      { label: "不気味な洋館", val: "(haunted mansion), (old furniture), (cobwebs), (dark painting), (candle light), (gothic), (mystery)" },
      { label: "儀式の間", val: "(ritual chamber), (magic circle), (candles), (red light), (blood), (cult), (ominous symbol)" }
    ],
    "⏰ 時間帯・空気感 (Time & Atmos)": [
      { label: "朝 (Morning)", val: "(morning), (sunrise), (soft light), (fresh atmosphere), (dew), (start of day)" },
      { label: "昼 (Day)", val: "(day), (noon), (bright sunlight), (hard shadows), (clear sky), (vivid colors)" },
      { label: "夕方 (Sunset)", val: "(sunset), (dusk), (orange light), (long shadows), (golden hour), (sentimental), (evening)" },
      { label: "夜 (Night)", val: "(night), (moonlight), (dark), (artificial lights), (stars), (midnight), (quiet)" },
      { label: "曇り (Cloudy)", val: "(cloudy sky), (diffused light), (grey sky), (soft shadows), (melancholic), (overcast)" },
      { label: "雨 (Rain)", val: "(raining), (wet ground), (umbrella), (raindrops), (puddles), (reflection), (gloomy)" }
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
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
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

  // スタイルデータ
  const STYLES_DATA = {
    "🏢 アニメスタジオ (Studios)": [
      { ja: "京都アニメーション", en: "kyoto animation" }, { ja: "ufotable", en: "ufotable" }, { ja: "SHAFT", en: "shaft" }, { ja: "TRIGGER", en: "studio trigger" },
      { ja: "スタジオジブリ", en: "studio ghibli" }, { ja: "MAPPA", en: "mappa" }, { ja: "WIT STUDIO", en: "wit studio" }, { ja: "CloverWorks", en: "cloverworks" },
      { ja: "A-1 Pictures", en: "a-1 pictures" }, { ja: "Production I.G", en: "production i.g" }, { ja: "マッドハウス", en: "madhouse" }, { ja: "ボンズ", en: "bones" },
      { ja: "サンライズ", en: "sunrise" }, { ja: "東映アニメーション", en: "toei animation" }, { ja: "P.A.WORKS", en: "p.a. works" }, { ja: "動画工房", en: "doga kobo" }
    ],
    "🖌️ イラストレーター (Artists)": [
      { ja: "Mika Pikazo風", en: "mika pikazo style" }, { ja: "米山舞風", en: "yoneyama mai style" }, { ja: "ワダアルコ風", en: "wada arco style" }, { ja: "望月けい風", en: "kei mochizuki style" },
      { ja: "副島成記風 (ペルソナ)", en: "shigenori soejima style" }, { ja: "新川洋司風 (MGS)", en: "yoji shinkawa style" }, { ja: "天野喜孝風 (FF)", en: "yoshitaka amano style" },
      { ja: "村田蓮爾風", en: "range murata style" }, { ja: "カントク風", en: "kantoku style" }, { ja: "Tony風", en: "tony taka style" }, { ja: "珈琲貴族風", en: "coffee kizoku style" },
      { ja: "redjuice風", en: "redjuice style" }, { ja: "huke風", en: "huke style" }, { ja: "深崎暮人風", en: "misaki kurehito style" }
    ],
    "🎨 アート・絵画風 (Art Styles)": [
      { label: "厚塗り・油絵", val: "(oil painting), (impasto:1.2), (visible brushstrokes), (rich texture)" },
      { label: "水彩画", val: "(watercolor medium), (wet on wet), (soft edges), (splatter effect)" },
      { label: "インク・水墨画", val: "(ink wash painting), (sumi-e), (monochrome), (bold lines), (brush stroke)" },
      { label: "スケッチ", val: "(sketch), (pencil drawing), (rough lines), (graphite medium), (hatching)" },
      { label: "線画", val: "(line art), (monochrome), (clean lines), (minimalist), (white background)" },
      { label: "浮世絵", val: "(ukiyo-e style), (woodblock print), (flat perspective), (bold outlines), (washi paper texture)" },
      { label: "ポップアート", val: "(pop art style), (bold colors), (halftone dots), (comic book style)" },
      { label: "ステンドグラス", val: "(stained glass style), (vibrant light), (mosaic pattern), (black outline)" },
      { label: "切り絵", val: "(paper cutout art), (layered paper), (shadow box), (3d depth)" },
      { label: "サイケデリック", val: "(psychedelic art), (lsd trip style), (kaleidoscope pattern), (vibrant neon colors)" },
      { label: "点描画", val: "(pointillism), (stippling), (dots texture), (georges seurat style)" }
    ]
  };

  // 年代データ
  const ERAS_DATA = {
    "🕰️ 時代・年代 (Eras)": [
      { ja: "古代エジプト", en: "ancient egypt" }, { ja: "古代ギリシャ", en: "ancient greek" }, { ja: "中世ヨーロッパ", en: "medieval era" }, { ja: "西部開拓時代", en: "wild west" },
      { ja: "ヴィクトリア朝", en: "victorian era" }, { ja: "大正ロマン", en: "taisho roman" }, { ja: "1920年代 (狂騒)", en: "roaring twenties" }, { ja: "1950年代 (ロカビリー)", en: "1950s style" },
      { ja: "昭和レトロ", en: "showa era style" }, { ja: "バブル時代 (80s)", en: "bubble era" }, { ja: "Y2K (2000年代)", en: "y2k aesthetic" }, { ja: "ポストアポカリプス", en: "post-apocalyptic" },
      { ja: "サイバーパンク未来", en: "cyberpunk future" }
    ]
  };

  const DICT = {
    "kyoto animation": "京都アニメーション", "studio ghibli": "スタジオジブリ", "studio trigger": "TRIGGER", "mika pikazo style": "Mika Pikazo風", "yoneyama mai style": "米山舞風",
    "oil painting": "油絵", "impasto": "厚塗り", "visible brushstrokes": "筆致", "rich texture": "豊かな質感",
    "watercolor medium": "水彩", "wet on wet": "ウェット・オン・ウェット", "soft edges": "柔らかい輪郭", "splatter effect": "飛沫",
    "ink wash painting": "水墨画", "sumi-e": "墨絵", "monochrome": "モノクロ", "bold lines": "太い線", "brush stroke": "筆跡",
    "sketch": "スケッチ", "pencil drawing": "鉛筆画", "rough lines": "ラフな線", "graphite medium": "黒鉛", "hatching": "ハッチング",
    "line art": "線画", "clean lines": "綺麗な線", "minimalist": "ミニマリスト", "white background": "白背景",
    "ukiyo-e style": "浮世絵", "woodblock print": "木版画", "flat perspective": "平面的パース", "bold outlines": "太い輪郭線", "washi paper texture": "和紙の質感",
    "pop art style": "ポップアート", "bold colors": "大胆な色", "halftone dots": "ハーフトーン", "comic book style": "アメコミ風",
    "stained glass style": "ステンドグラス", "vibrant light": "鮮やかな光", "mosaic pattern": "モザイク", "black outline": "黒い輪郭",
    "paper cutout art": "切り絵", "layered paper": "重ね紙", "shadow box": "シャドーボックス", "3d depth": "3Dの奥行き",
    "psychedelic art": "サイケデリック", "lsd trip style": "LSDトリップ風", "kaleidoscope pattern": "万華鏡", "vibrant neon colors": "鮮やかなネオン",
    "pointillism": "点描画", "stippling": "点描", "dots texture": "ドットの質感", "georges seurat style": "スーラ風",
    "ancient egypt": "古代エジプト", "ancient greek": "古代ギリシャ", "medieval era": "中世", "wild west": "西部劇",
    "victorian era": "ヴィクトリア朝", "taisho roman": "大正ロマン", "roaring twenties": "狂騒の20年代", "1950s style": "50年代風",
    "showa era style": "昭和レトロ", "bubble era": "バブル時代", "y2k aesthetic": "Y2K", "post-apocalyptic": "ポストアポカリプス", "cyberpunk future": "サイバーパンク未来"
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en;
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      // Keep output-translation dictionary registration,
      // but DO NOT render Art Style / Era blocks inside Quality Preset.
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      return;
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
      { ja: "Cinema 4D", en: "cinema 4d" }, { ja: "ZBrush (彫刻)", en: "zbrush" }, { ja: "Maya", en: "maya" }, { ja: "Blender", en: "blender" }, { ja: "Substance Painter", en: "substance painter" }
    ],
    "🖥️ レンダリング・エンジン": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" }, { ja: "Octane Render", en: "octane render" }, { ja: "Redshift Render", en: "redshift render" }, { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" }, { ja: "Corona Render", en: "corona render" }, { ja: "Blender Cycles", en: "cycles render" }
    ],
    "⚙️ 3D技術・シェーダー": [
      { ja: "パストレーシング", en: "path tracing" }, { ja: "レイトレーシング", en: "ray tracing" }, { ja: "Lumen反射 (UE5)", en: "lumen reflections" }, { ja: "Naniteジオメトリ", en: "nanite geometry" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" }, { ja: "シェーダー", en: "shaders" }, { ja: "SSS (表面下散乱)", en: "subsurface scattering" }, { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "グローバルイルミネーション", en: "global illumination" }, { ja: "ボリュメトリック照明", en: "volumetric lighting" }
    ],
    "✨ レンズ・ポストエフェクト": [
      { ja: "ゴッドレイ", en: "god rays" }, { ja: "レンズフレア", en: "lens flare" }, { ja: "ブルーム効果", en: "bloom" }, { ja: "色収差", en: "chromatic aberration" },
      { ja: "ケラレ (周辺減光)", en: "vignette" }, { ja: "回折スパイク (光条)", en: "diffraction spikes" }, { ja: "ハレーション", en: "halation" }, { ja: "フィルムグレイン", en: "film grain" },
      { ja: "ポストプロセス", en: "post-processing" }, { ja: "被写界深度 (DoF)", en: "depth of field" }, { ja: "ボケ", en: "bokeh" }
    ],
    "💡 照明・ライティング": [
      { ja: "レンブラント照明", en: "rembrandt lighting" }, { ja: "バタフライ照明", en: "butterfly lighting" }, { ja: "リムライト", en: "rim lighting" }, { ja: "キャッチライト", en: "catchlight" },
      { ja: "ソフトボックス", en: "softbox lighting" }, { ja: "シネマティック照明", en: "cinematic lighting" }
    ],
    "💎 超高解像度・補正": [
      { ja: "8K UHD", en: "8k uhd" }, { ja: "4K UHD", en: "4k uhd" }, { ja: "16K解像度", en: "16k resolution" }, { ja: "ギガピクセル", en: "gigapixel" },
      { ja: "RAW写真", en: "raw photo" }, { ja: "シャープフォーカス", en: "sharp focus" }, { ja: "アニメ・リアル融合", en: "anime-realism blend" }
    ]
  };

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
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      const conQuality = document.getElementById("qp-quality-content");
      if (conQuality) Object.entries(QUALITY_DATA).forEach(([k,v]) => { conQuality.appendChild(createSubAccordion(k, v)); });

// ========================================================
// 🧩 シークレットモード: 開発者モードトグル（⚙️ 3D技術・シェーダー10回）
// ========================================================
try {
  const summaries = document.querySelectorAll("#qp-quality-content summary");
  summaries.forEach(summary => {
    if (summary.textContent.includes("3D技術")) {
      let devTap = 0;
      let lastDevTime = 0;

      summary.addEventListener("click", () => {
        const now = Date.now();
        if (now - lastDevTime > 2000) devTap = 0;
        lastDevTime = now;
        devTap++;

        if (devTap >= 10) {
          const key = "BUILDER_DEV_MODE";
          const current = localStorage.getItem(key) === "true";
          const next = !current;
          if (confirm(`🧩 開発者モードを ${next ? "ON" : "OFF"} にしますか？`)) {
            localStorage.setItem(key, next.toString());
            alert(`🧩 開発者モードが ${next ? "ON" : "OFF"} に切り替わりました。\n再読み込みします。`);
            location.reload();
          }
          devTap = 0;
        }
      });
    }
  });
} catch (err) {
  console.error("Developer Mode Tap Handler Error:", err);
}
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
(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // データ定義 (省略 - 内容は変更なし)...

  // UIヘルパー (★完全修正: インラインスタイルを削除)
  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    if(isSecret) details.classList.add("qp-secret");
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
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
}); 
      label.appendChild(cb); 
      label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); 
      content.appendChild(label); 
    }); 
    
    details.appendChild(content); 
    return details; 
  }

  const API = {
    initUI(container) {
      // 既存のinitUIロジック (省略なし) ...
      // createSubAccordionを呼び出す部分はそのまま
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.quality_preset.v6.js ---
(function(){
  "use strict";
  const VERSION = 6; 
  const KEY = "quality_preset";

  // 一般パックデータ
  const PACK_DATA = {
    "💼 職業・なりきりパック": [
      { label: "アイドル・シマエナガ風", val: "(idol-style outfit), (white and pastel blue frilly dress), (feather embroidery), (fluffy sleeves), (short layered skirt), (down feather texture), (translucent ribbons), (soft feather hairclip)", desc: "シマエナガモチーフのアイドル衣装" },
      { label: "メイド・お給仕", val: "(maid outfit), (holding serving tray), (curtsy), (classic maid), (mansion interior), (elegant), (frills), (tea set)", links: ["立ちポーズ"] },
      { label: "ナース・診察", val: "(nurse uniform), (holding syringe), (clipboard), (hospital room), (white background), (clean atmosphere), (medical checkup)", links: ["病院"] },
      { label: "OL・オフィス", val: "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses), (smart look), (high rise building view)", links: ["眼鏡"] },
      { label: "ポリス・逮捕", val: "(police uniform), (holding handcuffs), (police hat), (arresting pose), (cool expression), (patrol car background), (justice)", links: ["キメポーズ"] },
      { label: "バニーガール", val: "(bunny girl suit), (rabbit ears), (fishnet tights), (holding tray), (casino background), (roulette), (neon lights), (glamorous)", links: ["セクシー"] },
      { label: "巫女・神社", val: "(miko outfit), (holding broom), (shrine background), (sweeping leaves), (traditional japanese), (sacred atmosphere), (red hakama)", links: ["和風"] }
    ],
    "🎒 テーマ別・持ち物セット (Item Sets)": [
      { label: "医者セット", val: "(holding stethoscope), (clipboard under arm), (holding syringe), (medical tools), (pen in pocket)", desc: "診察に必要な道具一式" },
      { label: "ゴスロリセット", val: "(holding frilled parasol), (lace headdress), (cross necklace), (holding gothic doll), (rose decoration)", desc: "ゴシックな装飾品セット" },
      { label: "現代っ子セット", val: "(holding smartphone), (drinking bubble tea), (headphones around neck), (stylish backpack), (mask)", desc: "今風のアイテムセット" },
      { label: "冒険者セット", val: "(holding map), (compass), (lantern), (potion flask on belt), (leather backpack), (dagger)", desc: "旅の必需品セット" },
      { label: "魔法使いセット", val: "(holding magic staff), (grimoire), (potion bottles), (crystal ball), (magic components)", desc: "魔法研究の道具" },
      { label: "アイドルセット", val: "(holding microphone), (glow stick), (bouquet), (fan letter), (towel)", desc: "ステージ映えする小物" },
      { label: "画材・美術セット", val: "(holding paintbrush), (palette), (easel), (apron with paint stains), (sketchbook), (pencils)", desc: "絵を描く道具" },
      { label: "読書・勉強セット", val: "(open book), (stack of books), (glasses), (pen), (notebook), (library card)", desc: "知的なアイテム" }
    ],
    "💦 演出・エフェクト (Effects)": [
      { label: "舞い散る羽根", val: "(floating feathers), (white feathers), (angelic atmosphere), (soft focus), (dreamy)" },
      { label: "ハートのボケ", val: "(bokeh heart shapes), (pink atmosphere), (romantic light), (sparkles), (glowing particles)" },
      { label: "雪の結晶", val: "(snowflake decorations), (winter theme), (glowing snowflakes), (cold breath), (magical atmosphere)" },
      { label: "キラキラ粒子", val: "(faint sparkles), (light particles), (shimmering air), (magical dust), (fantasy setting)" },
      { label: "ポラロイド写真", val: "(polaroid photo developing mid-air), (floating photos), (memories), (nostalgic)" }
    ],
    "🎉 イベント・行事": [
      { label: "クリスマス", val: "(santa costume), (christmas tree), (holding gift box), (snowy background), (lights and ornaments), (happy smile), (winter holiday)" },
      { label: "ハロウィン", val: "(witch costume), (holding pumpkin), (jack-o'-lantern), (bats), (purple and orange theme), (spooky castle background), (magic hat)" },
      { label: "ウェディング", val: "(wedding dress), (holding bouquet), (church interior), (white veil), (stained glass), (happy tears), (marriage ceremony), (pure white)" },
      { label: "温泉旅行", val: "(wearing yukata), (onsen), (steam), (open air bath), (wooden bucket), (relaxing), (flushed face), (night scenery)", links: ["和風"] }
    ],
    "🍽️ 食事・グルメ": [
      { label: "ファストフード", val: "(eating hamburger), (holding burger with both hands), (fast food restaurant), (french fries), (cola), (happy eating face), (open mouth)", links: ["もぐもぐ"] },
      { label: "ティータイム", val: "(afternoon tea), (holding tea cup), (cake stand), (garden terrace), (elegant dress), (sipping tea), (relaxing afternoon)", links: ["カフェ"] },
      { label: "居酒屋で乾杯", val: "(izakaya), (holding beer mug), (kanpai), (yakitori), (lively atmosphere), (drinking), (slightly drunk), (lanterns)", links: ["和風"] }
    ],
    "💕 デート・恋愛": [
      { label: "水族館デート", val: "(aquarium date), (looking at fish), (blue ambient light), (reflection on glass), (romantic atmosphere), (walking together), (happy expression)", links: ["デートスポット"] },
      { label: "映画館デート", val: "(movie theater), (sitting next to each other), (eating popcorn), (dim lighting), (screen light reflecting on face), (intimate moment), (date night)", links: ["デートスポット"] },
      { label: "遊園地・観覧車", val: "(amusement park date), (ferris wheel in background), (holding crepe), (colorful lights), (happy smile), (vibrant atmosphere), (casual clothes)" },
      { label: "夜景・展望台", val: "(observation deck), (night city view), (sparkling city lights), (leaning on railing), (romantic mood), (couple atmosphere), (elegant)", links: ["夜"] },
      { label: "放課後デート", val: "(walking home together), (holding hands), (sunset glow), (school uniform), (blushing), (sentimental atmosphere), (residential street)", links: ["夕方"] }
    ],
    "😱 感情・スリル": [
      { label: "追跡者からの逃走", val: "(running away:1.3), (looking back:1.3), (scared expression), (tears), (sweat), (abandoned hallway), (motion blur:1.2), (scary monster chasing from behind:1.3), (pursuer looming in background), (cinematic lighting), (dynamic angle), (dramatic shadows)", links: ["ダイナミックポーズ", "ホラー"] },
      { label: "ロッカーに隠れる", val: "(hiding in locker), (pov from inside), (peeking through slit), (scared face), (covering mouth), (heavy breathing), (killer outside), (darkness), (ray tracing), (claustrophobic)", links: ["ホラー"] },
      { label: "絶望的な遭遇", val: "(sitting on floor), (backing away), (screaming), (wide eyes), (horror on face), (monster looming), (low angle), (dutch angle), (dim lighting), (volumetric lighting), (shadows)", links: ["座りポーズ"] },
      { label: "ヤンデレ・束縛", val: "(yandere), (empty eyes), (scary smile), (holding knife behind back), (shadow over face), (obsessed), (love hearts in eyes), (dark atmosphere)" },
      { label: "ツンデレ・赤面", val: "(tsundere), (arms crossed), (looking away), (blush), (pout), (angry but shy), (school uniform), (cute angry face)" },
      { label: "クーデレ・無口", val: "(expressionless), (staring), (quiet atmosphere), (beautiful detailed eyes), (cool beauty), (emotionless), (mysterious)" },
      { label: "ジェットコースター", val: "(roller coaster), (screaming), (hands up), (wind blowing hair), (speed lines), (high altitude), (fear and excitement), (blue sky)", links: ["ダイナミックポーズ"] }
    ],
    "👻 ホラー・サスペンス": [
      { label: "心霊写真風", val: "(daily life photo), (peace sign), (group photo), (ghost face behind), (transparent spirit), (cursed image), (noise), (low quality style), (vhs artifact), (film grain)" },
      { label: "儀式の生贄", val: "(lying on altar), (bound hands), (unconscious), (magic circle), (red candles), (hooded figures), (ritual chamber), (high angle shot), (glowing magic), (atmospheric lighting)", links: ["寝ポーズ"] }
    ]
  };

  const DICT = {
    "holding stethoscope": "聴診器を持つ", "clipboard under arm": "クリップボードを挟む", "holding syringe": "注射器を持つ",
    "medical tools": "医療器具", "pen in pocket": "ポケットのペン", "holding frilled parasol": "フリルの日傘を持つ",
    "lace headdress": "レースのヘッドドレス", "cross necklace": "十字架のネックレス", "holding gothic doll": "ゴシックドールを抱く",
    "rose decoration": "薔薇の装飾", "holding smartphone": "スマホを持つ", "drinking bubble tea": "タピオカを飲む",
    "headphones around neck": "首掛けヘッドフォン", "stylish backpack": "おしゃれなリュック", "mask": "マスク",
    "holding map": "地図を持つ", "compass": "コンパス", "lantern": "ランタン", "potion flask on belt": "腰にポーション",
    "leather backpack": "革のリュック", "dagger": "短剣", "holding magic staff": "魔法の杖を持つ", "grimoire": "魔導書",
    "potion bottles": "ポーション瓶", "crystal ball": "水晶玉", "magic components": "魔法の触媒", "holding microphone": "マイクを持つ",
    "glow stick": "サイリウム", "bouquet": "花束", "fan letter": "ファンレター", "towel": "タオル", "holding paintbrush": "筆を持つ",
    "palette": "パレット", "easel": "イーゼル", "apron with paint stains": "絵の具で汚れたエプロン", "sketchbook": "スケッチブック",
    "pencils": "鉛筆", "open book": "開いた本", "stack of books": "積まれた本", "glasses": "眼鏡", "pen": "ペン",
    "notebook": "ノート", "library card": "図書カード", "idol-style outfit": "アイドル衣装", "white and pastel blue frilly dress": "白と水色のフリルドレス",
    "feather embroidery": "羽の刺繍", "fluffy sleeves": "ふわふわ袖", "short layered skirt": "短い段フリルスカート", "down feather texture": "綿毛の質感",
    "translucent ribbons": "半透明のリボン", "soft feather hairclip": "羽の髪飾り", "floating feathers": "舞い散る羽根", "white feathers": "白い羽",
    "bokeh heart shapes": "ハート型のボケ", "pink atmosphere": "ピンクの雰囲気", "romantic light": "ロマンチックな光", "glowing particles": "光る粒子",
    "snowflake decorations": "雪の結晶の飾り", "winter theme": "冬のテーマ", "glowing snowflakes": "光る雪の結晶", "cold breath": "白い息",
    "magical atmosphere": "魔法の雰囲気", "faint sparkles": "ほのかな輝き", "light particles": "光の粒子", "shimmering air": "揺らめく空気",
    "magical dust": "魔法の粉", "fantasy setting": "ファンタジー設定", "polaroid photo developing mid-air": "空中に浮かぶポラロイド",
    "floating photos": "浮遊する写真", "memories": "思い出", "nostalgic": "ノスタルジック"
  };

  const API = {
    initUI(container) {
      // Keep output-translation dictionary registration,
      // but DO NOT render Art Style / Era blocks inside Quality Preset.
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      return;
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
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ==============================================================================
  // 通常戦闘 (Combat)
  // ==============================================================================
  const COMBAT_DATA = {
    "⚔️ 剣戟・刀 (Sword Battle)": [
      { label: "居合・抜刀", val: "(drawing katana), (iai stance), (hand on hilt), (sparkles), (falling petals), (focused expression), (motion blur), (kimono or armor)", links: ["和風", "ダイナミックポーズ"] },
      { label: "二刀流・乱舞", val: "(dual wielding), (two swords), (spinning attack), (slashing effects), (dynamic action), (afterimage), (speed lines), (intense battle)", links: ["ダイナミックポーズ", "エフェクト"] },
      { label: "聖騎士の誓い", val: "(kneeling with sword), (sword planted in ground), (praying), (holy light), (knight armor), (cathedral background), (solemn), (god rays)", links: ["ファンタジー"] },
      { label: "大剣・一撃", val: "(holding giant sword), (heavy weapon), (swinging sword), (ground cracking), (debris flying), (power stance), (screaming), (impact frame)", links: ["アクション"] }
    ],
    "🔫 銃撃・射撃 (Gun Action)": [
      { label: "二丁拳銃・乱射", val: "(dual guns), (firing both hands), (jumping sideways), (bullet time), (muzzle flash), (debris), (action movie shot), (flying cartridges)", links: ["アクション"] },
      { label: "スナイパー・狙撃", val: "(holding sniper rifle), (looking through scope), (lying prone), (rooftop), (cityscape in background), (one eye closed), (windy), (serious face)", links: ["都市"] },
      { label: "リロード・遮蔽物", val: "(reloading gun), (magazine in air), (hiding behind cover), (sweat), (intense battle), (bullets flying), (wall damage), (tactical gear)", links: ["アクション"] },
      { label: "制圧射撃", val: "(holding assault rifle), (firing stance), (muzzle flash), (shell casings), (aggressive expression), (warzone), (smoke and fire)", links: ["アクション"] }
    ],
    "🧙‍♀️ 魔法・召喚 (Magic & Summon)": [
      { label: "爆裂魔法・炎", val: "(fire magic), (fireball in hand), (flames surrounding), (burning eyes), (floating hair), (intense heat), (explosion background), (casting spell)", links: ["エフェクト"] },
      { label: "召喚術・顕現", val: "(summoning ritual), (summoning circle on ground), (giant monster emerging), (holding grimoire), (chanting), (glowing runes), (mystical atmosphere)", links: ["ファンタジー"] },
      { label: "ヒーラー・癒やし", val: "(casting healing magic), (gentle light), (feathers falling), (praying hands), (angelic atmosphere), (soft focus), (warm colors)", links: ["ファンタジー"] }
    ],
    "👊 格闘・近接 (Melee & Brawler)": [
      { label: "飛び蹴り", val: "(flying kick), (dynamic pose), (shoe sole focus), (impact effect), (shattered glass), (street fight), (high angle), (action lines)", links: ["ダイナミックポーズ"] },
      { label: "クロスカウンター", val: "(punching), (fist clash), (sweat flying), (intense face), (motion blur), (close up), (fighting stance), (knuckles)", links: ["アクション"] },
      { label: "気功・オーラ", val: "(martial arts stance), (glowing aura), (energy gathering), (power up), (floating rocks), (dragon effect), (intense eyes)", links: ["エフェクト"] }
    ],
    "🏹 特殊武器・その他 (Special Weapons)": [
      { label: "弓矢・必中", val: "(drawing bow), (energy arrow), (aiming at camera), (concentration), (wind blowing hair), (sharp eyes), (dynamic angle)", links: ["アクション"] },
      { label: "大鎌・死神", val: "(holding scythe), (grim reaper style), (full moon), (dark aura), (floating), (menacing), (black feathers), (silhouette)", links: ["ホラー"] },
      { label: "槍・突撃", val: "(holding spear), (thrusting pose), (charging forward), (speed lines), (army behind), (warrior scream), (battlefield)", links: ["アクション"] }
    ]
  };

  // ==============================================================================
  // 🔞 R-18 戦闘・リョナ (Defeat & Ryona)
  // ==============================================================================
  const SECRET_COMBAT_DATA = {
    "🔞 敗北・リョナ (Defeat & Ryona)": [
      { label: "敗北・地面に", val: "(defeated), (lying on ground), (injured), (torn clothes), (dirt), (bleeding), (crying), (messy hair), (despair)", links: ["Basic R-18"] },
      { label: "拘束戦闘", val: "(fighting while bound), (handcuffs), (struggling), (shibari combat), (disadvantage), (glaring), (sweat)", links: ["Basic R-18"] },
      { label: "服ビリビリ", val: "(clothes torn), (armor broken), (exposed skin), (breast slip), (panchira), (damage), (embarrassed but fighting)", links: ["Basic R-18"] },
      { label: "腹パン・苦悶", val: "(stomach punch), (gut punch), (painful expression), (saliva), (doubled over), (gasping), (impact)", links: ["Basic R-18"] },
      { label: "強制・絶望", val: "(grabbed by face), (lifted up), (feet off ground), (tears), (terror), (overwhelming power), (bad ending)", links: ["Basic R-18"] }
    ]
  };

  // ==============================================================================
  // 📚 v7専用辞書 (Local Dictionary for v7)
  // ==============================================================================
  const DICT = {
    "drawing katana": "抜刀", "iai stance": "居合の構え", "hand on hilt": "柄に手", "falling petals": "散る花弁",
    "focused expression": "集中した表情", "motion blur": "モーションブラー", "kimono or armor": "着物か鎧", "dual wielding": "二刀流",
    "two swords": "二本の剣", "spinning attack": "回転攻撃", "slashing effects": "斬撃エフェクト", "dynamic action": "ダイナミックアクション",
    "afterimage": "残像", "speed lines": "スピード線", "intense battle": "激戦", "kneeling with sword": "剣に跪く",
    "sword planted in ground": "地面に刺さった剣", "praying": "祈り", "holy light": "聖なる光", "knight armor": "騎士の鎧",
    "cathedral background": "大聖堂の背景", "solemn": "厳粛", "god rays": "ゴッドレイ", "holding giant sword": "大剣を持つ",
    "heavy weapon": "重火器", "swinging sword": "剣を振る", "ground cracking": "地割れ", "debris flying": "破片が飛ぶ",
    "power stance": "パワースタンス", "impact frame": "インパクトフレーム", "dual guns": "二丁拳銃", "firing both hands": "両手撃ち",
    "jumping sideways": "横っ飛び", "bullet time": "バレットタイム", "muzzle flash": "マズルフラッシュ", "action movie shot": "アクション映画風",
    "flying cartridges": "薬莢が飛ぶ", "holding sniper rifle": "スライパーライフルを持つ", "looking through scope": "スコープを覗く",
    "lying prone": "伏せ撃ち", "rooftop": "屋上", "cityscape in background": "街並み", "one eye closed": "片目をつぶる",
    "windy": "風", "serious face": "真剣な顔", "reloading gun": "リロード", "magazine in air": "宙に浮くマガジン",
    "hiding behind cover": "物陰に隠れる", "sweat": "汗", "bullets flying": "飛び交う弾丸", "wall damage": "壁の損傷",
    "tactical gear": "タクティカルギア", "holding assault rifle": "アサルトライフルを持つ", "firing stance": "射撃姿勢",
    "shell casings": "薬莢", "aggressive expression": "攻撃的な表情", "warzone": "戦場", "smoke and fire": "煙と炎",
    "fire magic": "炎魔法", "fireball in hand": "火の玉", "flames surrounding": "炎に包まれる", "burning eyes": "燃える瞳",
    "floating hair": "浮遊する髪", "intense heat": "高熱", "explosion background": "爆発背景", "casting spell": "詠唱",
    "summoning ritual": "召喚儀式", "summoning circle on ground": "召喚陣", "giant monster emerging": "巨大モンスター出現",
    "holding grimoire": "魔導書を持つ", "chanting": "詠唱", "glowing runes": "光るルーン", "mystical atmosphere": "神秘的な雰囲気",
    "casting healing magic": "回復魔法", "gentle light": "優しい光", "feathers falling": "舞い散る羽", "praying hands": "祈る手",
    "angelic atmosphere": "天使のような", "soft focus": "ソフトフォーカス", "warm colors": "暖色", "flying kick": "飛び蹴り",
    "dynamic pose": "ダイナミックポーズ", "shoe sole focus": "靴底フォーカス", "impact effect": "衝撃エフェクト", "shattered glass": "割れるガラス",
    "street fight": "ストリートファイト", "high angle": "ハイアングル", "action lines": "アクション線", "punching": "パンチ",
    "fist clash": "拳の激突", "sweat flying": "飛び散る汗", "intense face": "激しい顔", "close up": "接写", "fighting stance": "ファイティングポーズ",
    "knuckles": "拳", "martial arts stance": "武道の構え", "glowing aura": "光るオーラ", "energy gathering": "エネルギー充填",
    "power up": "パワーアップ", "floating rocks": "浮遊する岩", "dragon effect": "龍のエフェクト", "intense eyes": "鋭い眼光",
    "drawing bow": "弓を引く", "energy arrow": "エネルギーの矢", "aiming at camera": "カメラを狙う", "concentration": "集中",
    "sharp eyes": "鋭い目", "holding scythe": "大鎌を持つ", "grim reaper style": "死神風", "full moon": "満月", "dark aura": "闇のオーラ",
    "floating": "浮遊", "menacing": "威圧的", "black feathers": "黒い羽", "holding spear": "槍を持つ", "thrusting pose": "突き",
    "charging forward": "突撃", "army behind": "背後に軍勢", "warrior scream": "雄叫び", "battlefield": "戦場",
    "defeated": "敗北", "injured": "負傷", "torn clothes": "破れた服", "bleeding": "流血", "despair": "絶望",
    "fighting while bound": "拘束戦闘", "shibari combat": "緊縛戦闘", "clothes torn": "服ビリビリ", "armor broken": "鎧破壊",
    "stomach punch": "腹パン", "gut punch": "腹部攻撃", "doubled over": "くの字", "impact": "衝撃", "grabbed by face": "顔を掴まれる",
    "lifted up": "持ち上げられる", "feet off ground": "足が浮く", "terror": "恐怖", "overwhelming power": "圧倒的な力", "bad ending": "バッドエンド"
  };

  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; 
    
    if(isSecret) summary.style.color = "#d00";

    details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en;
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      // Keep output-translation dictionary registration,
      // but DO NOT render Art Style / Era blocks inside Quality Preset.
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      return;
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

  const STYLE_DATA = {
    "🖌️ アナログ画材・描画技法 (Traditional Media)": [
      { ja: "色鉛筆画", en: "colored pencil drawing, hatching, soft colors" },
      { ja: "木炭画 (チャコール)", en: "charcoal drawing, smudge, rough sketch, grayscale" },
      { ja: "パステル画", en: "pastel painting, soft texture, chalky, gentle atmosphere" },
      { ja: "クレヨン・落書き", en: "crayon drawing, childish drawing, wax texture, doodles" },
      { ja: "アクリルガッシュ", en: "acrylic painting, matte finish, vibrant opaque colors" },
      { ja: "エアブラシ", en: "airbrush art, smooth gradients, retro 80s style" },
      { ja: "スプレーアート", en: "spray paint art, graffiti style, drips, stencil" },
      { ja: "インク・万年筆", en: "ink drawing, fountain pen, cross-hatching, high contrast" },
      { ja: "筆ペン・書道", en: "brush pen, calligraphy, sumi-e, bold strokes, splashing ink" },
      { ja: "黒板アート", en: "chalkboard art, chalk drawing, blackboard background" },
      { ja: "スクラッチアート", en: "scratchboard, rainbow colors under black, etching" },
      { ja: "アルコールインク", en: "alcohol ink art, fluid art, marble texture, flowing colors" },
      { ja: "テンペラ画", en: "tempera painting, egg tempera, classical matte" },
      { ja: "フレスコ画", en: "fresco painting, wall painting, plaster texture, ancient style" },
      { ja: "銅版画 (エッチング)", en: "etching, copperplate print, fine lines, intaglio" }
    ],
    "🏛️ 古典・芸術運動 (Classic Movements)": [
      { ja: "アール・ヌーヴォー (装飾)", en: "art nouveau, mucha style, intricate floral decoration, elegant curves" },
      { ja: "アール・デコ (幾何学)", en: "art deco, geometric patterns, gold and black, luxury, 1920s style" },
      { ja: "印象派 (光と色)", en: "impressionism, claude monet style, visible brushstrokes, light reflection" },
      { ja: "キュビズム (多視点)", en: "cubism, picasso style, abstract geometric shapes, fragmented" },
      { ja: "シュルレアリスム (夢)", en: "surrealism, salvador dali style, dreamlike, melting objects, impossible geometry" },
      { ja: "バロック (重厚)", en: "baroque style, dramatic lighting, chiaroscuro, ornate, dynamic movement" },
      { ja: "ロココ (優美)", en: "rococo style, pastel colors, frills, elegant, aristocratic" },
      { ja: "ゴシック (暗黒)", en: "gothic art, dark atmosphere, stained glass, pointed arches, melancholy" },
      { ja: "ルネサンス (古典)", en: "renaissance style, michelangelo style, anatomical realism, religious themes" },
      { ja: "象徴主義", en: "symbolism, mystical, dreamlike, mythological" },
      { ja: "表現主義", en: "expressionism, distorted, emotional, bold colors, edvard munch style" },
      { ja: "フォーヴィズム (野獣派)", en: "fauvism, wild colors, matisse style, unrealistic colors" }
    ],
    "🧶 工芸・素材感 (Crafts & Materials)": [
      { ja: "ステンドグラス", en: "stained glass, colorful light, black outlines, church window" },
      { ja: "切り絵・シャドーボックス", en: "paper cutout art, layered paper, shadow box, depth, silhouette" },
      { ja: "折り紙", en: "origami style, folded paper, geometric faceted, paper texture" },
      { ja: "ペーパークラフト", en: "papercraft, assembled paper model, low poly" },
      { ja: "モザイク画", en: "mosaic art, tile pattern, ceramic fragments" },
      { ja: "刺繍・ステッチ", en: "embroidery, cross stitch, fabric texture, sewn thread" },
      { ja: "編み物 (ニット)", en: "knitted texture, wool, amigurumi, soft plush" },
      { ja: "フェルト人形", en: "needle felt, felt texture, fuzzy, soft toy" },
      { ja: "粘土 (クレイアニメ)", en: "claymation, plasticine, stop motion style, fingerprints" },
      { ja: "陶磁器・ポーセリン", en: "porcelain, ceramic texture, glossy, painted pottery" },
      { ja: "金継ぎ", en: "kintsugi, broken and repaired with gold, wabi-sabi" },
      { ja: "ラテアート", en: "latte art, coffee foam, brown and white, cup view" },
      { ja: "氷彫刻", en: "ice sculpture, transparent, melting, cold atmosphere" }
    ]
  };

  const DICT = {
    "colored pencil drawing": "色鉛筆画", "charcoal drawing": "木炭画", "crayon drawing": "クレヨン画",
    "pastel painting": "パステル画", "acrylic painting": "アクリル画", "airbrush art": "エアブラシ画",
    "spray paint art": "スプレーアート", "ink drawing": "インク画", "brush pen": "筆ペン",
    "chalkboard art": "黒板アート", "scratchboard": "スクラッチアート", "alcohol ink art": "アルコールインク",
    "tempera painting": "テンペラ画", "fresco painting": "フレスコ画", "etching": "銅版画",
    "art nouveau": "アール・ヌーヴォー", "art deco": "アール・デコ", "impressionism": "印象派",
    "cubism": "キュビズム", "surrealism": "シュルレアリスム", "baroque style": "バロック",
    "rococo style": "ロココ", "gothic art": "ゴシック", "renaissance style": "ルネサンス",
    "symbolism": "象徴主義", "expressionism": "表現主義", "fauvism": "フォーヴィズム",
    "stained glass": "ステンドグラス", "paper cutout art": "切り絵", "origami style": "折り紙風",
    "papercraft": "ペーパークラフト", "mosaic art": "モザイク画", "embroidery": "刺繍",
    "knitted texture": "ニット風", "needle felt": "フェルト風", "claymation": "クレイアニメ風",
    "porcelain": "陶磁器風", "kintsugi": "金継ぎ", "latte art": "ラテアート", "ice sculpture": "氷彫刻"
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    details.style.cssText = "margin-bottom:6px; border:1px solid #b197fc; border-radius:4px; background:#fff;"; 
    details.open = false; 
    const summary = document.createElement("summary"); 
    summary.innerHTML = `${title} <span style="font-size:0.8em; color:#6741d9;">(Classic)</span>`; 
    summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f3f0ff; color:#5f3dc4;";
    details.appendChild(summary); 
    const content = document.createElement("div"); 
    content.className = "qp-content-grid"; 
    content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";
    items.forEach(item => { 
      const label = document.createElement("label"); 
      label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
      const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.en;
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); label.appendChild(document.createTextNode(item.ja)); label.title = item.en;
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      // Keep output-translation dictionary registration,
      // but DO NOT render Art Style / Era blocks inside Quality Preset.
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      return;
    },
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

  const STYLE_DATA = {
    "🔮 ネット・美学 (Internet Aesthetics)": [
      { ja: "ヴェイパーウェイヴ", en: "vaporwave, aesthetic, neon pink and blue, retro computer, greek statues, glitch" },
      { ja: "シンセウェイヴ (80s)", en: "synthwave, retrowave, neon grid, sunset, futuristic 80s, outrun" },
      { ja: "ローファイ (Lo-Fi)", en: "lo-fi aesthetic, grainy, nostalgic, muted colors, anime study girl style" },
      { ja: "コテージコア (田舎)", en: "cottagecore, nature, flowers, rustic, peaceful, picnic, sunlight" },
      { ja: "ダークアカデミア", en: "dark academia, library, vintage books, tweed, coffee, gloomy, intellectual" },
      { ja: "ゴブリンコア", en: "goblincore, moss, mushrooms, frogs, earth tones, nature, clutter" },
      { ja: "ドリームコア (夢)", en: "dreamcore, surreal, nostalgia, uncanny, bright colors, fuzzy, liminal" },
      { ja: "リミナルスペース", en: "liminal space, empty rooms, eerie, backrooms, fluorescent light, uncanny" },
      { ja: "カワイイコア", en: "kawaiicore, pastel colors, cute accessories, plushies, pink overload" },
      { ja: "Y2K (2000年代)", en: "y2k aesthetic, chrome, futuristic, glossy, holographic, transparent tech" }
    ],
    "⚙️ パンク・SFサブジャンル (Punks)": [
      { ja: "サイバーパンク", en: "cyberpunk, high tech low life, neon lights, cybernetics, night city" },
      { ja: "スチームパンク (蒸気)", en: "steampunk, brass, gears, victorian tech, goggles, steam engines" },
      { ja: "ソーラーパンク (自然)", en: "solarpunk, green tech, nature and technology, stained glass, bright sunlight" },
      { ja: "ディーゼルパンク", en: "dieselpunk, 1940s tech, oil, war machines, steel, grime" },
      { ja: "バイオパンク", en: "biopunk, organic tech, flesh, genetic engineering, glowing plants" },
      { ja: "アトムパンク (50s)", en: "atompunk, 1950s retro futurism, space age, atomic power, googie architecture" }
    ],
    "💻 デジタル・デザイン様式 (Digital & Design)": [
      { ja: "ピクセルアート (ドット)", en: "pixel art, 16-bit, retro game sprite, dithering" },
      { ja: "ボクセル (箱庭)", en: "voxel art, minecraft style, 3d blocks, isometric view" },
      { ja: "ローポリゴン", en: "low poly, faceted, 3d render, minimalist, sharp edges" },
      { ja: "ベクターアート", en: "vector art, flat color, clean lines, illustrator style" },
      { ja: "グリッチアート", en: "glitch art, datamoshing, digital noise, corrupted image, rgb shift" },
      { ja: "フラットデザイン", en: "flat design, minimalist, simple shapes, bright colors" },
      { ja: "メンフィス (80s)", en: "memphis design, geometric shapes, squiggly lines, pastel and bold colors, 80s pattern" },
      { ja: "ブルータリズム", en: "brutalism, concrete, blocky, monolithic, raw, utilitarian" },
      { ja: "ポップアート", en: "pop art style, bold colors, halftone dots, comic book style, andy warhol style" }
    ],
    "📸 写真・映像スタイル (Photo & Film)": [
      { ja: "フィルムノワール", en: "film noir, high contrast, black and white, dramatic shadows, crime movie style" },
      { ja: "ヴィンテージ写真", en: "vintage photo, sepia tone, scratches, faded colors, old paper texture" },
      { ja: "ポラロイド", en: "polaroid style, flash photography, vignette, soft colors" },
      { ja: "ダブル露光", en: "double exposure, silhouette, superimposed images, nature and portrait blend" },
      { ja: "赤外線写真", en: "infrared photography, white foliage, surreal colors, dreamlike" },
      { ja: "魚眼レンズ", en: "fisheye lens, distorted perspective, nose close up, dynamic" },
      { ja: "ティルトシフト (ミニチュア)", en: "tilt-shift, miniature effect, blur top and bottom, high angle" }
    ]
  };

  const DICT = {
    "vaporwave": "ヴェイパーウェイヴ", "synthwave": "シンセウェイヴ", "lo-fi aesthetic": "ローファイ",
    "cottagecore": "コテージコア", "dark academia": "ダークアカデミア", "goblincore": "ゴブリンコア",
    "dreamcore": "ドリームコア", "liminal space": "リミナルスペース", "kawaiicore": "カワイイコア", "y2k aesthetic": "Y2K",
    "cyberpunk": "サイバーパンク", "steampunk": "スチームパンク", "solarpunk": "ソーラーパンク",
    "dieselpunk": "ディーゼルパンク", "biopunk": "バイオパンク", "atompunk": "アトムパンク",
    "pixel art": "ドット絵", "voxel art": "ボクセル", "low poly": "ローポリ", "vector art": "ベクター画",
    "glitch art": "グリッチアート", "flat design": "フラットデザイン", "memphis design": "メンフィス",
    "brutalism": "ブルータリズム", "pop art style": "ポップアート",
    "film noir": "フィルムノワール", "vintage photo": "ヴィンテージ写真", "polaroid style": "ポラロイド風",
    "double exposure": "ダブル露光", "infrared photography": "赤外線写真", "fisheye lens": "魚眼レンズ", "tilt-shift": "ティルトシフト"
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    details.style.cssText = "margin-bottom:6px; border:1px solid #b197fc; border-radius:4px; background:#fff;"; 
    details.open = false; 
    const summary = document.createElement("summary"); 
    summary.innerHTML = `${title} <span style="font-size:0.8em; color:#6741d9;">(Modern)</span>`; 
    summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f3f0ff; color:#5f3dc4;";
    details.appendChild(summary); 
    const content = document.createElement("div"); 
    content.className = "qp-content-grid"; 
    content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";
    items.forEach(item => { 
      const label = document.createElement("label"); 
      label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
      const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.en;
cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
}); 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.ja)); label.title = item.en;
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      // Keep output-translation dictionary registration,
      // but DO NOT render Art Style / Era blocks inside Quality Preset.
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      return;
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.quality_preset.v10.js ---
(function(){
  "use strict";
  const VERSION = 10; // R-18専用 (Fixed & Lightweight v3)
  const DISABLE_R18_QUALITY = true;
  if (DISABLE_R18_QUALITY) {
    // R-18 was moved out of Quality Presets into the Preset Packs section.
    return;
  }
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // =============================================================================
  // 🔞 R-18 統合プリセットデータ (UI Definition)
  // ※ 翻訳データは builder_data.translation.v1.js に移動済み
  // =============================================================================
  const R18_FULL_DATA = {
    "⚠️ NSFWフラグ・基本 (Flags)": [
      { label: "NSFW (基本)", val: "nsfw, (uncensored)" },
      { label: "R-18 (卑猥)", val: "r-18, (lewd), (erotic), (sexual)" },
      { label: "ヌード許可", val: "nude, naked, (nipples), (pussy), (no clothes)" },
      { label: "体液・汚れ", val: "(sweat), (wet skin), (saliva), (cum), (sticky texture), (messy body)" },
      { label: "高画質R-18補正", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin:1.3), (cinematic lighting:1.2), (depth of field:1.1)" }
    ],
    "⚡ 濃厚・Hシチュエーション (Induction)": [
      { label: "⚡ 濃厚セックスセット", val: "nsfw, (uncensored), r-18, (lewd), (sexual), (1boy), (1girl), (heterosexual), (sex), (intimate), (couple), (sweat), (hardcore), (vaginal sex:1.3)", desc: "これをONにしてポーズを選ぶだけで完璧なHシーンに" },
      { label: "⚡ 激しい動き・エフェクト", val: "(hips moving rhythmically), (fully thrusting), (fast motion), (afterimage of hips), (piston motion), (shaking hips), (foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "中出し (Creampie)", val: "(cum inside), (creampie), (overflowing cum), (filling womb), (semen gushing deep inside)" },
      { label: "断面図 (X-Ray)", val: "(cross-section), (x-ray), (internal view), (cervix penetration), (womb marking), (glowing womb)" }
    ],
    "🐙 触手・スライム (Tentacles & Slime)": [
      { label: "触手基本セット", val: "(tentacles), (slime), (mucus), (living tentacles), (bioluminescent), (thick tentacle), (slimy texture), (wriggling)" },
      { label: "生体スーツ・モノキニ", val: "(living monokini), (tentacle suit), (slime bodysuit), (pulsing texture), (fused with skin), (translucent slime), (jelly fabric), (glowing seams), (clinging tightly)" },
      { label: "スライム拘束・責め", val: "(slime suit attack), (slime groping breasts), (slime sucking nipples), (arms locked behind back), (bound by slime), (unable to resist)" },
      { label: "体内侵入・寄生", val: "(tentacles invade mouth), (deep throat), (stomach bulge), (internal view), (parasite), (eggs), (impregnation), (tentacles invade deep within her body cavity)" },
      { label: "触手搾乳", val: "(tentacle milking), (suction cups), (breast milking), (nipple stimulation), (milking devices), (petal-shaped tentacle motifs), (squeezing breasts)" }
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
    "👅 奉仕・ご奉仕 (Service)": [
      { label: "フェラチオ", val: "(fellatio), (blowjob), (sucking penis), (cheeks hollowed), (looking up), (bobbing head)" },
      { label: "パイズリ", val: "(paizuri), (titfuck), (sandwiching penis), (breasts squished), (cleavage), (looking at penis)" },
      { label: "手コキ", val: "(handjob), (stroking), (jerking off), (saliva lubrication), (glans focus)" },
      { label: "イラマチオ", val: "(irrumatio), (deep throat), (face fuck), (gagging), (tears), (choking), (grabbed by hair)" },
      { label: "69 (シックスナイン)", val: "(69 position), (simultaneous oral), (mutual pleasure), (top view)" },
      { label: "足コキ", val: "(footjob), (soles), (toes), (rubbing with feet), (trampling), (looking down)" },
      { label: "クンニ", val: "(cunnilingus), (licking pussy), (tongue), (spread legs), (pleasure face)" }
    ],
    "👗 着衣プレイ・チラリズム (Clothed Sex)": [
      { label: "たくし上げ (Lifted)", val: "(skirt lifted), (clothes lifted), (exposing panties), (access to crotch), (hiding face)" },
      { label: "ずらし (Pulled Aside)", val: "(panties pulled aside), (crotchless panties), (fingering through clothes), (quickie)" },
      { label: "半脱ぎ (Half-off)", val: "(clothes half removed), (bra pulled down), (shoulders bare), (disheveled), (messy clothes)" },
      { label: "着衣セックス", val: "(clothed sex), (sex with clothes on), (school uniform), (public indecency), (hastily)" }
    ],
    "👫 男女・シチュエーション (Relations)": [
      { label: "純愛・見つめ合い", val: "(1boy), (1girl), (missionary position), (sex), (locking eyes), (loving sex), (blushing), (intertwined fingers), (kissing), (romantic)" },
      { label: "体格差・巨根", val: "(1boy), (1girl), (size difference), (height difference), (giant penis), (small girl), (stretching), (bulge), (masculine male)" },
      { label: "寝取られ (NTR)", val: "(ntr), (cheating), (cuckold), (watching from closet), (video call), (crying), (forced smile)" }
    ],
    "🍆 挿入・ピストン (Insertion)": [
      { label: "結合部アップ", val: "(penetration clearly visible:1.3), (connection point), (inserting), (glans inside), (close up)" },
      { label: "激しいピストン", val: "(fast piston motion), (blur), (afterimage), (intense sex), (clapping sounds)" },
      { label: "最奥突き", val: "(cervix penetration), (womb marking), (deepest part), (stomach bulge)" },
      { label: "クリ責め", val: "(clitoris stimulation), (rubbing clit), (fingering), (pearl)" },
      { label: "ダブルピース・アヘ顔", val: "(double peace sign), (ahegao), (rolling eyes), (tongue out), (mind break), (drooling)" }
    ],
    "🤪 R-18 表情・精神 (Expressions)": [
      { label: "あへ顔", val: "(ahegao:1.3), (rolling eyes), (tongue out), (drooling), (v-shaped eyebrows)" },
      { label: "ハート目", val: "(heart-shaped pupils), (pink eyes), (infatuated), (love struck)" },
      { label: "虚ろ目・レイプ目", val: "(vacant eyes), (empty eyes), (no pupil highlights), (glassy eyes), (mind break), (broken expression)" },
      { label: "快楽堕ち", val: "(pleasure face), (blush), (slobber), (euphoric tears), (ecstatic expression)" },
      { label: "涙目・懇願", val: "(tears), (crying), (begging), (humiliation), (flushed face), (desperate moan)" },
      { label: "絶頂・震え", val: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms), (body control)" }
    ],
    "💦 演出・液体 (Fluids)": [
      { label: "大量射精", val: "(copious cum), (cumshot), (splashing cum), (cum everywhere), (cum explosion)" },
      { label: "顔射", val: "(cum on face), (bukkake), (sticky face), (eye closed)" },
      { label: "潮吹き", val: "(squirting), (gushing liquid), (wet sheets), (fountain), (pussy juice splash)" },
      { label: "精液溜まり", val: "(cum pool), (puddle of cum), (messy bed), (sheets covered in fluids)" },
      { label: "吐息・ハート", val: "(foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "粘液・融合", val: "(wet mucus fuses with her body), (slime coating skin), (oily sheen), (translucent slime), (dripping)" }
    ],
    "🪟 硝子・密着 (Glass)": [
      { label: "窓ガラス押し付け", val: "(pressed against glass:1.3), (window view), (flattened breasts), (breath on glass), (face smeared across surface)" },
      { label: "ガラス越し視点", val: "(view through glass), (fogged glass), (hand print on glass), (voyeur), (moisture trails on glass)" },
      { label: "ガラス押し付け・背面", val: "(viewed from the front through fogged glass panel), (girl in doggystyle position), (breasts pressed and flattened against the glass), (nipples clearly visible through pressure), (steam)" }
    ],
    "🕰️ R-18 ストーリー (Time)": [
      { label: "脱衣・恥じらい", val: "(undressing), (clothes half off), (panties down), (covering body), (shy), (blushing), (looking away)" },
      { label: "事後・余韻", val: "(after sex), (messy hair), (lying on bed), (exhausted), (heavy breathing), (cum on sheets), (disheveled), (peaceful face), (cuddle)" },
      { label: "朝チュン", val: "(morning after), (waking up), (naked in bed), (messy room), (sunlight), (hickey), (memory of last night), (kissing)" }
    ],
    "🧸 玩具・責め (Toys)": [
      { label: "バイブ", val: "(vibrator), (dildo), (sex toy), (insertion)" },
      { label: "ローター", val: "(pink rotor), (wired toy), (remote control)" },
      { label: "口内責め", val: "(tentacles invade deep within her mouth), (mouth gaping), (tongue extended), (throat fucking), (saliva splattering), (choking)" },
      { label: "触手搾乳", val: "(tentacle milking), (breast fondling), (nipple stimulation), (lactation), (squeezing breasts)" }
    ],
    "🏩 H-ロケーション (Locations)": [
      { label: "ラブホテル", val: "(love hotel), (mirror room), (neon lights), (fancy bed), (pillows)" },
      { label: "お風呂・温泉", val: "(bathroom), (onsen), (steam), (wet body), (tiled wall), (soap)" },
      { label: "マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism)" },
      { label: "公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex)" },
      { label: "スライムの巣", val: "(slime nest), (gloomy hall), (dimly lit), (covered in slime), (sticky floor)" }
    ],
    "🌳 野外・露出 (Outdoor)": [
      { label: "野外露出", val: "(outdoor sex), (public nudity), (exposure), (shame), (risk of being seen)" },
      { label: "公園", val: "(public park), (bench), (night park), (bushes), (street lamp)" },
      { label: "路地裏", val: "(back alley), (trash cans), (dark), (wall press), (dirty)" },
      { label: "森の中", val: "(forest), (nature), (grass), (leaves), (secluded)" }
    ],
    "🏫 学園・背徳 (School)": [
      { label: "体育倉庫", val: "(gym storage room), (sweat), (sportswear), (bloomers), (ball cart), (dusty), (after school)" },
      { label: "放課後の教室", val: "(classroom), (sunset), (on desk), (skirt lifted), (messy clothes), (blackboard), (watching door)" },
      { label: "指導室・土下座", val: "(teacher office), (scolding), (kneeling), (looking up), (submission), (desk), (pleading)" }
    ],
    "👯 乱交・複数 (Group)": [
      { label: "3P (2男1女)", val: "(threesome), (2boys), (1girl), (sandwich)" },
      { label: "輪姦・ギャングバング", val: "(gangbang), (multiple boys), (group sex), (bukkake)" },
      { label: "おじさん・醜男", val: "(ugly bastard), (fat man), (sweaty), (grinning), (ntr), (corruption), (forced)" },
      { label: "異種姦パーティ", val: "(monster gangbang), (orcs), (goblins), (slime), (tentacles), (breeding), (defeat)" }
    ],
    "😈 陵辱・ハード (Hard)": [
      { label: "NSFW挿入 (激)", val: "(rape), (vaginal penetration with thick penis)" },
      { label: "肉便器・公衆", val: "(public use), (cum dump), (messy body), (ahegao), (writing on body), (leash), (toilet)" },
      { label: "敗北・オーク", val: "(defeated), (lying on ground), (torn clothes), (crying), (orc looming), (goblin), (messy hair)" },
      { label: "強制・レイプ", val: "(rape), (forced), (struggling), (pinned down), (tears), (fear), (ripped clothes)" }
    ],
    "💊 催眠・変容 (Hypno)": [
      { label: "時間停止", val: "(time stop), (frozen people background), (pause button), (powerless), (unaware)" },
      { label: "催眠・洗脳", val: "(hypnotized), (empty eyes), (swirl eyes), (mind control), (drooling), (obeying orders)" },
      { label: "寄生・苗床", val: "(stomach bulge), (pregnant), (impregnation), (alien), (parasite), (eggs), (x-ray)" }
    ],
    "⛓️ 拘束・ハード (Bondage)": [
      { label: "緊縛・吊り", val: "(shibari), (rope bondage), (suspension), (hanging), (bound wrists), (bound legs)" },
      { label: "拘束椅子", val: "(bondage chair), (restrained), (spread legs), (sex machine), (dildo machine), (helpless)" },
      { label: "目隠し・猿轡", val: "(blindfold), (gag), (ball gag), (drooling), (sensory deprivation)" }
    ]
  };

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;
      // ★ 辞書登録処理は builder_data.translation.v1.js に委任したため削除

      const mount = () => {
        const root = document.getElementById("qp-root-container");
        if(!root || !window.__QP_UTILS) { setTimeout(mount, 50); return; }
        
        // 既存のR-18セクションがあれば削除（重複防止）
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
        const combat = document.getElementById("qp-combat");
        if(combat) root.insertBefore(secR18, combat);
        else root.appendChild(secR18);
      };
      mount();
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

