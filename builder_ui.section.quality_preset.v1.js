(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";
  
  const IS_GLOSS_UNLOCKED = localStorage.getItem("MY_GLOSS_UNLOCK") === "true";
  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
  
  window.__R18_MODE = IS_R18_UNLOCKED;

  // -----------------------------------------------------------
  // 1. スタイル注入
  // -----------------------------------------------------------
  function injectStyles() {
    const styleId = "qp-mobile-style-final-fix";
    if (document.getElementById(styleId)) return;
    const css = `
      .qp-main-acc { margin-bottom: 10px !important; border: 1px solid #ccc !important; border-radius: 6px !important; background: #fff !important; }
      .qp-sub-acc { border: 1px solid #ccc !important; border-radius: 4px !important; margin-bottom: 6px !important; background: #fff !important; width: 100% !important; box-sizing: border-box !important; }
      .qp-sub-acc summary, .qp-main-acc summary { padding: 10px 12px !important; font-weight: bold !important; cursor: pointer !important; background: #f9f9f9 !important; font-size: 14px !important; list-style: none !important; outline: none !important; }
      
      /* R-18カテゴリー用スタイル */
      .qp-main-acc.qp-r18-root { border-color: #ffcccc !important; border-width: 2px !important; }
      .qp-main-acc.qp-r18-root summary { background: #fff0f0 !important; color: #d00 !important; }

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

      /* 初心者ガイド用 */
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

  // -----------------------------------------------------------
  // 2. データ定義
  // -----------------------------------------------------------
  
  // ★初心者ガイド
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

  // ① 基本画質
  const BASE_QUALITY = [
    { label: "最高品質 (Masterpiece)", val: "(masterpiece), (best quality), (highres), (ultra-detailed), (8k)" },
    { label: "高画質・精細", val: "(extremely detailed), (intricate details), (sharp focus), (illustration)" },
    { label: "公式アート風", val: "(official art), (unity 8k wallpaper), (detailed background)" },
    { label: "映画的ライティング", val: "(cinematic lighting), (dramatic lighting), (volumetric lighting), (ray tracing)" }
  ];

  // ② ハイエンド・特化
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

  // ■ R-18 統合データ (ここへ集約)
  const R18_FULL_DATA = {
    "⚠️ NSFWフラグ・基本 (Flags)": [
      { label: "NSFW (基本)", val: "nsfw, (uncensored)" },
      { label: "R-18 (卑猥)", val: "r-18, (lewd), (erotic), (sexual)" },
      { label: "ヌード許可", val: "nude, naked, (nipples), (pussy)" },
      { label: "体液・汚れ", val: "(sweat), (wet skin), (saliva), (cum), (sticky texture)" }
    ],
    "⚡ 濃厚・Hシチュエーション (Induction)": [
      // ★修正: messy hair を削除して、髪型カテゴリーと干渉しないようにしました
      { label: "⚡ 濃厚セックスセット", val: "nsfw, (uncensored), r-18, (lewd), (sexual), (1boy), (1girl), (heterosexual), (sex), (intimate), (couple), (sweat), (hardcore), (vaginal sex:1.3)", desc: "これをONにしてポーズを選ぶだけで完璧なHシーンに" },
      { label: "⚡ 激しい動き・エフェクト", val: "(hips moving rhythmically), (fully thrusting), (fast motion), (afterimage of hips), (piston motion), (shaking hips), (foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "中出し (Creampie)", val: "(cum inside), (creampie), (overflowing cum)" },
      { label: "断面図 (X-Ray)", val: "(cross-section), (x-ray), (internal view)" }
    ],
    "🍆 挿入・ピストン (Insertion & Motion)": [
      { label: "結合部アップ", val: "(penetration clearly visible:1.3), (connection point), (inserting), (glans inside)" },
      { label: "激しいピストン", val: "(fast piston motion), (blur), (afterimage), (intense sex)" },
      { label: "最奥突き", val: "(cervix penetration), (womb marking), (deepest part)" },
      { label: "クリ責め", val: "(clitoris stimulation), (rubbing clit), (fingering)" }
    ],
    "🤪 R-18 表情・精神 (Expressions)": [
      { label: "あへ顔", val: "(ahegao), (rolling eyes), (tongue out), (drooling)" },
      { label: "ハート目", val: "(heart-shaped pupils), (pink eyes), (infatuated)" },
      { label: "快楽堕ち", val: "(mind break), (empty eyes), (pleasure face), (blush)" },
      { label: "涙目・懇願", val: "(tears), (crying), (begging), (humiliation)" }
    ],
    "💦 演出・液体 (Fluids)": [
      { label: "大量射精", val: "(copious cum), (cumshot), (splashing cum), (cum everywhere)" },
      { label: "顔射", val: "(cum on face), (bukkake), (sticky face)" },
      { label: "潮吹き", val: "(squirting), (gushing liquid), (wet sheets)" },
      { label: "精液溜まり", val: "(cum pool), (puddle of cum), (messy bed)" }
    ],
    "🪟 硝子・密着 (Glass & Press)": [
      { label: "窓ガラス押し付け", val: "(pressed against glass), (window view), (flattened breasts)" },
      { label: "ガラス越し視点", val: "(view through glass), (fogged glass), (hand print on glass)" },
      { label: "床ドン・壁ドン", val: "(pressed against wall), (pinned down), (on floor)" }
    ],
    "🧸 R-18 玩具・責め (Toys)": [
      { label: "バイブ", val: "(vibrator), (dildo), (sex toy)" },
      { label: "ローター", val: "(pink rotor), (wired toy)" },
      { label: "浣腸・アナル", val: "(enema), (anal plug), (tail plug), (anal bead)" }
    ],
    "🏩 H-ロケーション (Locations)": [
      { label: "ラブホテル", val: "(love hotel), (mirror room), (neon lights), (fancy bed)" },
      { label: "お風呂・温泉", val: "(bathroom), (onsen), (steam), (wet body), (tiled wall)" },
      { label: "プール", val: "(poolside), (night pool), (water reflection)" },
      { label: "保健室", val: "(infirmary), (school clinic), (bed curtain)" }
    ],
    "🐰 乱交・複数 (Group)": [
      { label: "3P (2男1女)", val: "(threesome), (2boys), (1girl), (sandwich)" },
      { label: "輪姦・ギャングバング", val: "(gangbang), (multiple boys), (group sex)" },
      { label: "ハーレム", val: "(harem), (multiple girls), (1boy)" }
    ],
    "⛓️ 拘束・ハード (Hardcore)": [
      { label: "拘束・緊縛", val: "(bondage), (shibari), (rope), (tied up)" },
      { label: "目隠し・口枷", val: "(blindfold), (gag), (ball gag)" },
      { label: "首輪・リード", val: "(collar), (leash), (chain), (pet play)" }
    ]
  };

  // -----------------------------------------------------------
  // 3. UI生成関数
  // -----------------------------------------------------------

  function createBeginnerGuide(data) {
    if (!data) return null;
    const root = document.createElement("details"); 
    root.className = "beginner-guide-root";
    root.open = false; 

    const summary = document.createElement("summary"); 
    summary.innerHTML = "🔰 <b>初心者ガイド：迷ったらここから選ぶ</b>";
    root.appendChild(summary);
    
    const contentWrapper = document.createElement("div"); 
    contentWrapper.style.cssText = "padding:10px; border-top:1px solid #89CFF0; display:flex; flex-direction:column; gap:10px;";
    
    Object.entries(data).forEach(([title, items]) => {
      const section = document.createElement("div"); 
      section.className = "bg-section";
      
      const h4 = document.createElement("h4"); 
      h4.className = "bg-header";
      h4.textContent = title; 
      section.appendChild(h4);
      
      const grid = document.createElement("div"); 
      grid.className = "qp-content-grid";
      
      items.forEach(item => {
        const label = document.createElement("label"); 
        const cb = document.createElement("input"); 
        cb.type = "checkbox"; 
        cb.dataset.val = item.val; 
        
        const textDiv = document.createElement("div");
        textDiv.style.lineHeight = "1.2";
        textDiv.innerHTML = `<div style="font-weight:bold; font-size:0.95em; color:#333;">${item.label}</div><div style="font-size:0.85em; color:#666;">${item.desc}</div>`;
        
        label.appendChild(cb); 
        label.appendChild(textDiv); 
        grid.appendChild(label);
      });
      section.appendChild(grid); 
      contentWrapper.appendChild(section);
    });
    root.appendChild(contentWrapper); 
    return root;
  }

  function createMainSection(id, title, options = {}) {
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

  function createSubAccordion(title, items, type) {
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
      if(item.links) cb.dataset.links = item.links.join(",");
      if(item.desc) label.title = item.desc;
      
      if(item.label.includes("㊙️") || item.label.includes("⚡") || item.label.includes("⚠️")) {
        label.style.fontWeight = "bold";
        label.style.color = "#800080";
        label.style.background = "#f0e6ff";
        label.style.border = "1px solid #d0b0ff";
      }

      label.appendChild(cb);
      label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`));
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  // -----------------------------------------------------------
  // 4. メイン処理
  // -----------------------------------------------------------
  const API = {
    initUI(container) {
      injectStyles();
      
      const root = document.createElement("div");
      root.className = "quality-preset-integrated";

      // 0. 初心者ガイド
      root.appendChild(createBeginnerGuide(BEGINNER_DATA));

      // 1. 品質・基本設定
      const secQuality = createMainSection("qp-quality", "💎 品質・基本設定 (Quality & Settings)");
      const conQuality = secQuality.querySelector(".qp-section-content");
      
      // Base & High-End
      const subBase = createSubAccordion("✨ 画質・クオリティ (Base)", BASE_QUALITY);
      const baseSummary = subBase.querySelector("summary");
      
      let glossTap = 0;
      let lastGlossTime = 0;
      baseSummary.addEventListener("click", (e) => {
        const now = Date.now();
        if (now - lastGlossTime > 2000) glossTap = 0;
        glossTap++;
        lastGlossTime = now;
        if (glossTap >= 5) {
          const action = IS_GLOSS_UNLOCKED ? "封印" : "解放";
          if(confirm(`シークレット機能「究極的艶 (Ultimate Gloss)」を${action}しますか？`)) {
            localStorage.setItem("MY_GLOSS_UNLOCK", (!IS_GLOSS_UNLOCKED).toString());
            location.reload();
          }
          glossTap = 0;
        }
      });
      conQuality.appendChild(subBase);
      conQuality.appendChild(createSubAccordion("🏆 ハイエンド・特化 (High-End)", HIGH_END_DATA, IS_GLOSS_UNLOCKED ? "gloss" : null));
      root.appendChild(secQuality);

      // 2. シチュエーション
      const secSit = createMainSection("qp-situations-general", "📍 場所・シチュエーション (Place & Situation)");
      secSit.querySelector(".qp-section-content").id = "qp-situations-general-area"; 
      root.appendChild(secSit);

      // 3. 職業・パック (Cleaned)
      const secPacks = createMainSection("qp-packs", "📦 職業・なりきりパック (Job & Roleplay)");
      secPacks.querySelector(".qp-section-content").id = "qp-packs-content";
      root.appendChild(secPacks);

      // ★ 4. R-18カテゴリー (完全統合)
      if (IS_R18_UNLOCKED) {
        const secR18 = createMainSection("qp-r18-category", "🔞 R-18・H設定 (Adult Settings)", { 
          sumBg: "#fff0f0", 
          sumColor: "#d00",
          className: "qp-r18-root" 
        });
        const conR18 = secR18.querySelector(".qp-section-content");

        // 定義済みデータをループして生成
        Object.entries(R18_FULL_DATA).forEach(([title, items]) => {
          conR18.appendChild(createSubAccordion(title, items, "secret"));
        });

        root.appendChild(secR18);
      }

      // 5. 戦闘アクション
      const secCombat = createMainSection("qp-combat", "⚔️ 戦闘・アクション (Combat)");
      secCombat.querySelector(".qp-section-content").id = "qp-combat-content";
      root.appendChild(secCombat);

      // 6. ネガティブ (R-18解放トリガー)
      const negTriggerWrap = document.createElement("div");
      negTriggerWrap.id = "qp-neg-trigger-wrap";
      const trigger = document.createElement("span");
      trigger.id = "qp-neg-trigger";
      trigger.innerHTML = `<span style="padding:4px 15px; background:#fff0f0; color:#d9534f; font-weight:bold; font-size:0.9em; border:1px solid #ffb3b3; border-radius:10px;">⚠️ NEGATIVE PROMPTS</span>`;
      
      let r18Count = 0;
      trigger.addEventListener("click", () => {
        r18Count++;
        if (r18Count >= 10) {
          const action = IS_R18_UNLOCKED ? "封印" : "解放";
          if(confirm(`R-18機能(シークレットモード)を${action}しますか？`)) {
            localStorage.setItem("MY_SECRET_UNLOCK", (!IS_R18_UNLOCKED).toString());
            location.reload();
          }
          r18Count = 0;
        }
      });
      negTriggerWrap.appendChild(trigger);
      root.appendChild(negTriggerWrap);

      // 7. ネガティブセクション
      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット", { sumBg: "#fff0f0", sumColor: "#d00" });
      secNegSets.querySelector(".qp-section-content").id = "qp-neg-sets-content";
      root.appendChild(secNegSets);
      
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブワード", { sumBg: "#fff0f0", sumColor: "#d00" });
      secNegWords.querySelector(".qp-section-content").id = "qp-neg-words-content";
      root.appendChild(secNegWords);
      
      // DOM追加
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

