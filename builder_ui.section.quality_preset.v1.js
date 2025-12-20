(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";
  
  // 1. 究極艶 (Gloss): 画風プリセット5回連打
  const IS_GLOSS_UNLOCKED = localStorage.getItem("MY_GLOSS_UNLOCK") === "true";
  // 2. R-18 (Secret): ネガティブ10回連打
  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
  
  window.__R18_MODE = IS_R18_UNLOCKED;

  // ==============================================================================
  // 🎨 スマホ対応・UIスタイル定義
  // ==============================================================================
  function injectStyles() {
    const styleId = "qp-mobile-style-final-fix";
    if (document.getElementById(styleId)) return;

    const css = `
      .qp-sub-acc {
        border: 1px solid #ccc !important;
        border-radius: 4px !important;
        margin-bottom: 6px !important;
        background: #fff !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .qp-sub-acc summary {
        padding: 10px 12px !important;
        font-weight: bold !important;
        cursor: pointer !important;
        background: #f9f9f9 !important;
        font-size: 14px !important;
        list-style: none !important;
        outline: none !important;
      }
      .qp-sub-acc.qp-secret { border-color: #ffcccc !important; }
      .qp-sub-acc.qp-secret summary { color: #d00 !important; background: #fff0f0 !important; }

      @media (max-width: 600px) {
        .qp-section-content,
        #qp-situations-general-area,
        #qp-packs-content,
        #qp-combat-content,
        #qp-styles-content,
        #qp-eras-content,
        #qp-quality-content,
        #qp-situations-general-area > details > div {
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
          width: 100% !important;
        }
        .qp-content-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 10px 8px !important;
          padding: 10px !important;
          border-top: 1px solid #eee !important;
          background: #fff !important;
        }
        .qp-content-grid label {
          font-size: 13px !important;
          display: flex !important;
          align-items: flex-start !important;
          line-height: 1.3 !important;
        }
        .qp-content-grid input[type="checkbox"] {
          margin-right: 6px !important;
          margin-top: 2px !important;
          flex-shrink: 0 !important;
          transform: scale(1.1) !important;
        }
      }
    `;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ==============================================================================
  // 📚 マスター辞書
  // ==============================================================================
  const MASTER_DICT = {
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度",
    "photorealistic": "フォトリアル", "realistic": "リアル", "8k": "8K",
    "anime style": "アニメ調", "cel shading": "セルルック", "flat color": "フラットカラー",
    "natural light": "自然光", "cinematic lighting": "シネマティック照明",
    "perfect face": "完璧な顔", "beautiful detailed face": "美しく詳細な顔",
    "highly detailed": "詳細な書き込み", "glossy skin": "光沢のある肌",
    "octane render": "Octane Render", "unreal engine 5": "UE5(3D)", "ray tracing": "レイトレーシング",
    "global illumination": "GI(グローバル照明)", "volumetric lighting": "ボリュメトリック照明",
    "physically based rendering": "PBR(物理ベース)", "subsurface scattering": "SSS(表面下散乱)",
    "depth of field": "被写界深度(ボケ)", "anamorphic lens flare": "レンズフレア",
    "widescreen": "ワイドスクリーン", "dramatic atmosphere": "ドラマチック",
    "teal and orange grading": "ティール＆オレンジ", "vibrant": "彩度高め", "dark": "暗め",
    "nsfw": "R-18", "nude": "ヌード", "uncensored": "無修正", "tentacles": "触手", "cum": "精液",
    "anime-realism blend": "アニメ・リアル融合", "ultra high resolution": "超高解像度",
    "diffraction spikes": "回折スパイク", "halation": "ハレーション", "film grain": "フィルムグレイン",
    "lumen reflections": "Lumen反射", "nanite geometry": "Nanite", "post-processing": "ポストプロセス"
  };

  // ==============================================================================
  // 🔰 初心者ガイド
  // ==============================================================================
  const BEGINNER_DATA = {
    "🔰 ① 3D技術・安全セット": [
      { label: "🟢 キャラ・人物 (肌と光)", val: "(realistic lighting), (subsurface scattering)", desc: "肌を生かし、全体をまとめる。" },
      { label: "🟢 背景・空間 (空気感)", val: "(global illumination), (volumetric lighting)", desc: "空間の破綻を防ぎ、雰囲気が出る。" },
      { label: "🟢 物・メカ (質感と影)", val: "(physically based rendering), (ambient occlusion)", desc: "質感がリアルになり、影が締まる。" }
    ],
    "🔰 ② エンジン選び (1つだけ)": [
      { label: "Octane (派手)", val: "(octane render)", desc: "光が凄そうに見える。" },
      { label: "Arnold (映画風)", val: "(arnold render)", desc: "落ち着いたリアル。" },
      { label: "UE5 (世界観)", val: "(unreal engine 5)", desc: "ゲームのような環境。" }
    ]
  };

  // ==============================================================================
  // 📦 画風・品質プリセット
  // ==============================================================================
  const HIGH_END_LIST = [
    { label: "★究極・レンダリング", val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)" },
    { label: "幻想・コンセプトアート", val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (game art style)" },
    { label: "サイバー・ネオン", val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city)" }
  ];

  if (IS_GLOSS_UNLOCKED) {
    HIGH_END_LIST.unshift({
      label: "✨ SECRET・究極艶 (Full)",
      val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (subsurface scattering), (volumetric lighting), (god rays), (lens flare), (bloom), (chromatic aberration), (vignette), (diffraction spikes), (halation), (film grain), (global illumination), (ambient occlusion), (physically based rendering), (unreal engine 5), (octane render), (redshift render), (v-ray), (arnold render), (corona render), (cycles render), (cinema 4d), (zbrush), (maya), (path tracing), (lumen reflections), (nanite geometry), (physically based rendering), (shaders), (post-processing)",
      desc: "全ての光と質感を盛り込んだ究極設定",
      links: ["UE5", "PBR", "SSS", "Ray Tracing", "Global Illumination", "Volumetric", "Octane", "8K"]
    });
  }

  const PRESET_DATA = {
    "🏆 基本・画風 (Standard)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (natural light), (perfect face)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture)" }
    ],
    "💎 ハイエンド・特化 (High-End)": HIGH_END_LIST,
    "⚔️ 戦闘・アクション画風": [
      { label: "バトルアニメ風", val: "(battle anime style), (sakuga), (intense action), (impact frames), (dynamic angle)" },
      { label: "マンガ戦闘・集中線", val: "(manga style), (monochrome), (speed lines), (focus lines), (action focus)" }
    ],
    "🛠️ 制作ソフト風": [
      { label: "Octane Render", val: "(octane render), (volumetric lighting), (high contrast)" },
      { label: "Unreal Engine 5", val: "(unreal engine 5), (lumen global illumination), (nanite geometry)" }
    ],
    "⚙️ 3D技術セット": [
      { label: "レイトレーシング", val: "(ray tracing), (global illumination), (reflections)" },
      { label: "シネマティック", val: "(cinematic lighting), (teal and orange grading), (anamorphic lens flare), (widescreen)" }
    ],
    "🧪 サブジャンル": [
      { label: "サイバーパンク", val: "(cyberpunk), (neon lights), (futuristic city)" },
      { label: "スチームパンク", val: "(steampunk), (brass and copper), (gears and cogs)" }
    ]
  };

  const SECRET_DATA = {
    "💋 R-18 基本 (Basic NSFW)": [
      { label: "基本・R-18", val: "(nsfw), (uncensored), (explicit), (adult content), (hentai)" },
      { label: "ヌード・全裸", val: "(nude), (naked), (full body nudity), (nipples), (pussy), (anus), (detailed genitals)" }
    ]
  };

  // UI生成関数 (v1オリジナル)
  function createSubAccordion(title, items, isSecret = false) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc" + (isSecret ? " qp-secret" : ""); 
    const summary = document.createElement("summary"); 
    summary.textContent = title; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label"); const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(",");
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  function createMainSection(id, title, colorStyle = {}) {
    const details = document.createElement("details"); details.id = id; details.className = "qp-main-acc";
    details.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff;";
    const summary = document.createElement("summary"); summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`; 
    summary.style.cssText = "font-weight:bold; padding:12px 14px; cursor:pointer; background:#eef2f6; list-style:none; outline:none; user-select:none; display:flex; align-items:center;";
    if(colorStyle.sumBg) summary.style.background = colorStyle.sumBg;
    if(colorStyle.sumColor) summary.style.color = colorStyle.sumColor;
    details.appendChild(summary);
    const content = document.createElement("div"); content.id = id + "-content"; 
    content.className = "qp-section-content"; content.style.padding = "10px";
    details.appendChild(content); return details;
  }

  const API = {
    initUI(container) {
      injectStyles();
      if (window.__outputTranslation) window.__outputTranslation.register(MASTER_DICT);
      const parent = document.querySelector("#list-quality_preset") || container; parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      
      // 1. 画風プリセット
      const secPresets = createMainSection("qp-presets", "📦 画風・品質プリセット (Art Styles)");
      const presetsContent = secPresets.querySelector(".qp-section-content");
      
      const guideRoot = document.createElement("details");
      guideRoot.style.cssText = "margin-bottom:12px; border:2px solid #89CFF0; border-radius:8px; background:#F0F8FF;";
      guideRoot.innerHTML = `<summary style="padding:10px; cursor:pointer; font-weight:bold; color:#0056b3;">🔰 初心者ガイド</summary>`;
      const guideContent = document.createElement("div"); guideContent.style.padding = "10px";
      guideContent.className = "qp-section-content"; 
      Object.entries(BEGINNER_DATA).forEach(([k,v]) => { guideContent.appendChild(createSubAccordion(k, v)); });
      guideRoot.appendChild(guideContent);
      presetsContent.appendChild(guideRoot);

      Object.entries(PRESET_DATA).forEach(([k,v]) => { presetsContent.appendChild(createSubAccordion(k, v)); });
      if (IS_R18_UNLOCKED) Object.entries(SECRET_DATA).forEach(([k,v]) => { presetsContent.appendChild(createSubAccordion(k, v, true)); });

      let glossCount = 0;
      secPresets.querySelector("summary").addEventListener("click", () => {
        glossCount++;
        if (glossCount >= 5) {
          if(confirm(IS_GLOSS_UNLOCKED ? "究極艶を封印しますか？" : "究極艶を解放しますか？")) {
            localStorage.setItem("MY_GLOSS_UNLOCK", (!IS_GLOSS_UNLOCKED).toString()); location.reload();
          }
          glossCount = 0;
        }
      });
      root.appendChild(secPresets);

      // 2. 空のコンテナ
      const config = [
        { id: "qp-situations", title: "🎬 シチュエーション・環境", innerId: "qp-situations-general-area" },
        { id: "qp-packs", title: "📦 シチュエーションパック", innerId: "qp-packs-content" },
        { id: "qp-combat", title: "⚔️ 戦闘・アクション", innerId: "qp-combat-content" },
        { id: "qp-styles", title: "🎨 スタイル・文化", innerId: "qp-styles-content" },
        { id: "qp-eras", title: "🕰️ 時代・年代", innerId: "qp-eras-content" },
        { id: "qp-quality", title: "🔧 品質・技術・ツール", innerId: "qp-quality-content" }
      ];
      config.forEach(c => {
        const sec = createMainSection(c.id, c.title);
        const inner = document.createElement("div"); inner.id = c.innerId;
        sec.querySelector(".qp-section-content").appendChild(inner);
        root.appendChild(sec);
      });

      // 3. ネガティブ
      const negTriggerWrap = document.createElement("div");
      negTriggerWrap.style.cssText = "margin:30px 0 10px; border-top:2px dashed #ffb3b3; text-align:center;";
      const trigger = document.createElement("div");
      trigger.style.cssText = "margin-top:-12px; display:inline-block; user-select:none; cursor:default; -webkit-tap-highlight-color:transparent;";
      trigger.innerHTML = `<span style="background:#fff; padding:0 15px; color:#d9534f; font-weight:bold; font-size:0.9em; border:1px solid #ffb3b3; border-radius:10px;">⚠️ NEGATIVE PROMPTS</span>`;
      
      let r18Count = 0;
      trigger.addEventListener("click", () => {
        r18Count++;
        if (r18Count >= 10) {
          if(confirm(IS_R18_UNLOCKED ? "R-18を封印しますか？" : "R-18を解放しますか？")) {
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
      return tags; 
    }
  };
  
  window.__registerPromptPart(KEY, VERSION, API);
})();

