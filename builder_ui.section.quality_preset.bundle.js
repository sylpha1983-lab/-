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
      .qp-content-grid label { display: flex !important; flex-direction: column !important; align-items: stretch !important; font-size: 13px !important; cursor: pointer !important; padding: 8px !important; border-radius: 8px !important; transition: background 0.1s; border: 1px solid #e3e3e3 !important; background: #fff !important; box-sizing: border-box !important; }
      .qp-content-grid label:hover { background: #f0f8ff !important; }
      .qp-content-grid input[type="checkbox"] { transform: scale(1.1); margin-right: 8px; }
      .qp-item-main { display: flex !important; align-items: flex-start !important; }
      .qp-item-text { display: inline-block !important; line-height: 1.35 !important; word-break: break-word !important; }
      .qp-item-desc { display: block !important; margin-top: 6px !important; margin-left: 28px !important; font-size: 11px !important; line-height: 1.45 !important; color: #666 !important; word-break: break-word !important; }
      @media (max-width: 640px) {
        .qp-content-grid { grid-template-columns: 1fr !important; }
      }
      
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

      .qp-guide-btnrow{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 2px 0;}
      .qp-guide-btn{padding:8px 10px;border:1px solid #89CFF0;border-radius:10px;background:#f7fbff;font-weight:bold;cursor:pointer;font-size:13px;}
      .qp-guide-btn:active{transform:scale(0.98);}
      .qp-guide-highlight{border:2px solid rgba(80,160,255,0.7)!important; box-shadow:0 0 18px rgba(80,160,255,0.45)!important;}
      .qp-auto-glow{border:2px solid rgba(80,160,255,0.6)!important; box-shadow:0 0 22px rgba(80,160,255,0.35)!important;}

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
        const main = document.createElement("div");
        main.className = "qp-item-main";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.dataset.val = item.val || item.en;
cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList) window.__VISUAL_SYNC.updateSelectedList();
});
        if(item.links) cb.dataset.linksInternal = item.links.join(",");
        if(item.desc) label.title = item.desc;
        if(item.label.includes("㊙️") || item.label.includes("⚡") || item.label.includes("⚠️")) {
          label.style.fontWeight = "bold"; label.style.color = "#800080"; label.style.background = "#f0e6ff"; label.style.border = "1px solid #d0b0ff";
        }
        const textSpan = document.createElement("span");
        textSpan.className = "qp-item-text";
        textSpan.textContent = item.label || `${item.ja}/${item.en}`;
        main.appendChild(cb);
        main.appendChild(textSpan);
        label.appendChild(main);
        if(item.desc){
          const desc = document.createElement("div");
          desc.className = "qp-item-desc";
          desc.textContent = item.desc;
          label.appendChild(desc);
        }
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
    { label: "最高品質 (Masterpiece)", val: "(masterpiece), (best quality), (highres), (ultra-detailed), (8k)", desc: "とにかく全体品質を底上げしたい時向け" },
    { label: "高画質・精細", val: "(extremely detailed), (intricate details), (sharp focus), (illustration)", desc: "細部や描き込みを強めたい時向け" },
    { label: "公式アート風", val: "(official art), (unity 8k wallpaper), (detailed background)", desc: "公式イラストっぽく整えたい時向け" },
    { label: "映画的ライティング", val: "(cinematic lighting), (dramatic lighting), (volumetric lighting), (ray tracing)", desc: "光と影の演出を強めたい時向け" }
  ];

  const HIGH_END_GROUPS = {
    illustration: [
      { label: "王道イラスト品質セット", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.2), (anime style:1.2), (clean lineart:1.2), (vivid colors:1.2), (soft lighting:1.1), (detailed background:1.1)", desc: "王道の高品質イラスト向け。迷ったらまずこれ" }
    ],
    gloss: [
      { label: "艶・グラビア品質セット", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.2), (shiny hair:1.4), (glossy hair:1.4), (glossy skin:1.2), (specular highlights:1.3), (reflective highlights:1.2), (soft cinematic lighting:1.1)", desc: "艶・光沢・映えを強めたグラビア寄りセット" }
    ],
    realism: [
      { label: "写実・質感品質セット", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.2), (physically based rendering:1.3), (subsurface scattering:1.3), (global illumination:1.2), (realistic skin texture:1.3), (fine hair strands:1.3), (material realism:1.3)", desc: "肌・髪・布などの質感を強める写実寄りセット" }
    ],
    cinematic: [
      { label: "シネマ・映像品質セット", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.2), (cinematic lighting:1.4), (dramatic rim light:1.2), (volumetric lighting:1.2), (film look:1.2), (low contrast:1.1), (cinematic atmosphere:1.2)", desc: "映画・PV・広告ビジュアル向けの映像強化セット" }
    ],
    render: [
      { label: "3D・レンダリング品質セット", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.2), (unreal engine 5:1.2), (octane render:1.2), (ray tracing:1.3), (lumen reflections:1.2), (nanite geometry:1.1), (high-end render quality:1.2)", desc: "UE5・Octane・3Dレンダ感を強めるセット" },
      { label: "CGアニメ艶彩", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (CG animation:1.5), (anime style:1.2), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.2), (clean lineart), (soft natural lighting:1.2), (transparent glow:1.1), (ethereal pastel haze:1.1), (cinematic lighting:1.2), (global illumination:1.1), (ambient occlusion:1.1), (ray tracing-inspired effects:1.1), (depth haze:1.1), (UHD, ultra-sharp details:1.2), (vivid anime-like colors:1.2), (shiny hair:1.1), (subtle skin glow:1.1), (drifting particle lights:1.1), (soft bokeh sparkles:1.1), (subtle colored light reflection in air:1.1), (cinematic framing:1.1), (depth of field:1.1), (high-quality image:1.3)", links: ["CG Animation", "Anime-Realism", "Refined Shading", "Clean Lineart", "Global Illumination", "Ambient Occlusion", "Ray Tracing FX", "Soft Glow", "Bokeh", "Cinematic"], desc: "とりあえずCGっぽく綺麗にしたい時向け" },
      { label: "CGアニメ艶彩・柔光版", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (CG animation:1.4), (anime style:1.2), (anime-realism blend:1.25), (semi-realistic rendering:1.2), (intricate details:1.25), (realistic textures:1.15), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.2), (clean lineart), (soft natural lighting:1.3), (transparent glow:1.2), (ethereal pastel haze:1.2), (cinematic lighting:1.2), (global illumination:1.15), (ambient occlusion:1.05), (ray tracing-inspired effects:1.05), (depth haze:1.15), (UHD, ultra-sharp details:1.2), (vivid anime-like colors:1.2), (shiny hair:1.1), (subtle skin glow:1.15), (drifting particle lights:1.15), (soft bokeh sparkles:1.15), (subtle colored light reflection in air:1.15), (cinematic framing:1.1), (depth of field:1.1), (high-quality image:1.3)", links: ["CG Animation", "Soft Glow", "Pastel Haze", "Global Illumination", "Particle Lights", "Bokeh", "Soft Skin Glow", "Cinematic"], desc: "ふんわり甘くしたい時向け" },
      { label: "CGアニメ艶彩・硬質版", val: "(masterpiece:1.35), (best quality:1.35), (ultra high resolution:1.3), (CG animation:1.5), (anime style:1.15), (anime-realism blend:1.35), (semi-realistic rendering:1.25), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.3), (clean lineart), (cinematic lighting:1.3), (global illumination:1.15), (ambient occlusion:1.15), (ray tracing-inspired effects:1.15), (depth haze:1.05), (specular control:1.1), (clean material separation:1.1), (UHD, ultra-sharp details:1.25), (vivid anime-like colors:1.2), (shiny hair:1.15), (subtle skin glow:1.05), (drifting particle lights:1.05), (soft bokeh sparkles:1.05), (subtle colored light reflection in air:1.05), (cinematic framing:1.15), (depth of field:1.1), (high-quality image:1.3)", links: ["CG Animation", "Anime-Realism", "Refined Shading", "AO", "Ray Tracing FX", "Material Separation", "Sharper Details", "Cinematic"], desc: "面と材質を締めたい時向け" },
      { label: "CGアニメ艶彩・暖色夕景版", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (CG animation:1.45), (anime style:1.2), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.25), (realistic textures:1.15), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.2), (clean lineart), (soft natural lighting:1.25), (golden hour lighting:1.3), (warm backlight glow:1.2), (sunset amber haze:1.2), (cinematic lighting:1.2), (global illumination:1.15), (ambient occlusion:1.05), (ray tracing-inspired effects:1.05), (depth haze:1.15), (UHD, ultra-sharp details:1.2), (vivid anime-like colors:1.2), (shiny hair:1.1), (subtle skin glow:1.15), (drifting particle lights:1.15), (soft bokeh sparkles:1.15), (warm light bloom:1.15), (gold dust in air:1.1), (cinematic framing:1.1), (depth of field:1.1), (high-quality image:1.3)", links: ["CG Animation", "Golden Hour", "Warm Backlight", "Sunset Haze", "Particle Lights", "Warm Bloom", "Soft Skin Glow", "Cinematic"], desc: "教室・夕日・赤面・恋愛イベント向け" },
      { label: "CGアニメ艶彩・青白クール版", val: "(masterpiece:1.35), (best quality:1.35), (ultra high resolution:1.3), (CG animation:1.5), (anime style:1.15), (anime-realism blend:1.35), (semi-realistic rendering:1.25), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.3), (clean lineart), (cinematic lighting:1.3), (cool rim lighting:1.2), (blue-white glow:1.2), (cold atmospheric haze:1.15), (global illumination:1.15), (ambient occlusion:1.15), (ray tracing-inspired effects:1.15), (depth haze:1.05), (specular control:1.1), (clean material separation:1.1), (UHD, ultra-sharp details:1.25), (vivid anime-like colors:1.15), (shiny hair:1.15), (subtle skin glow:1.05), (drifting particle lights:1.1), (soft bokeh sparkles:1.05), (cool light bloom:1.1), (crisp luminous air:1.1), (cinematic framing:1.15), (depth of field:1.1), (high-quality image:1.3)", links: ["CG Animation", "Cool Rim Light", "Blue-White Glow", "Cold Haze", "AO", "Material Separation", "Sharper Details", "Cinematic"], desc: "夜・青照明・黒衣装・クール顔向け" }
    ],
    commercial: [
      { label: "商品・商業品質セット", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.2), (studio lighting:1.2), (product photography:1.2), (clean commercial render:1.2), (sharp focus:1.2), (advertising visual feel:1.1), (premium product polish:1.1)", desc: "商品画像・広告ビジュアル向けの商業寄りセット" }
    ],
    secret: [
      { label: "㊙️ 管理者専用（セット）", val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (anime-realism blend:1.35), (semi-realistic rendering:1.2), (refined details:1.35), (clean edge definition:1.3), (fine texture detail:1.25), (cinematic lighting:1.3), (global illumination:1.25), (soft ambient occlusion:1.2), (controlled bloom:1.2), (natural skin translucency:1.2), (subtle skin glow:1.15), (silky hair highlights:1.2), (clear specular highlights:1.2), (material separation:1.2), (rich color depth:1.2), (smooth tonal gradation:1.2), (soft rim light:1.15), (volumetric glow:1.15), (light particles in air)", links: ["Masterpiece", "Best Quality", "Anime-Realism", "Refined Details", "Lighting", "Material"], desc: "標準の強化版。画質・光・質感を広く底上げ。（文字数:589）" },
      { label: "㊙️ 管理者専用（セット・強調なし軽量）", val: "masterpiece, best quality, ultra high resolution, refined details, clean edge definition, fine texture detail, anime-realism blend, semi-realistic rendering, cinematic lighting, soft ambient occlusion, global illumination, controlled bloom, natural skin translucency, subtle skin glow, silky hair highlights, clear specular highlights, material separation, fabric texture detail, soft rim light, backlight glow, volumetric glow, light particles, rich color depth, smooth tonal gradation", links: ["Masterpiece", "Best Quality", "Lightweight", "Details", "Lighting"], desc: "ワード数軽め。普段使い・干渉少なめ。（文字数:486）" },
      { label: "㊙️ 管理者専用（リミットブレイク）", val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (anime-realism blend:1.4), (extreme refined details:1.35), (crisp detail definition:1.35), (clean edge definition:1.3), (fine texture detail:1.3), (cinematic lighting:1.45), (global illumination:1.35), (soft ambient occlusion:1.3), (controlled bloom:1.3), (crystal clear speculars:1.35), (layered light diffusion:1.3), (translucent skin glow:1.25), (silky hair highlights:1.35), (hard glossy reflections:1.3), (high energy highlights:1.3), (strong rim lighting:1.35), (backlight glow:1.35), (volumetric glow:1.3), (spark-like bokeh lights:1.25), (material separation:1.3), (glossy coated fabric:1.25), (dynamic light interaction:1.25)", links: ["Limit Break", "Specular", "Gloss", "Rim Light", "Material"], desc: "強調あり。艶・反射・光を限界まで盛る。（文字数:702）" },
      { label: "㊙️ 管理者専用（透明感）", val: "masterpiece, best quality, ultra high resolution, refined details, smooth tonal gradation, soft ambient occlusion, light diffusion, controlled bloom, translucent skin glow, subtle skin glow, silky hair highlights, clear specular highlights, soft rim light, backlight glow, volumetric glow, floating light particles, clean edge definition, rich color depth", links: ["Transparency", "Skin Glow", "Hair Highlights", "Soft Light"], desc: "肌、髪、空気、光の柔らかさ重視。（文字数:355）" },
      { label: "㊙️ 管理者専用（精密マテリアル）", val: "masterpiece, best quality, ultra high resolution, fine texture detail, material separation, different reflectivity for skin hair and clothing, fabric texture detail, polished surface reflection, glossy coated fabric, clear specular highlights, crisp detail definition, clean edge definition, soft ambient occlusion, global illumination, balanced contrast", links: ["Material", "Fabric", "Specular", "Texture"], desc: "布、金属、髪、肌、衣装の質感分離重視。（文字数:354）" }
    ]
  };

  const SECRET_BOOST_GROUPS = {
    camera: [
      { label: "ポートレートブースト", val: "(cinematic portrait crop), (portrait composition), (close-up upper body focus), (subject-centered framing), (focus on eyes), (85mm portrait lens look), (delicate facial lighting), (soft depth of field), (background compression), (camera-aware composition)", desc: "顔・上半身・視線誘導を強める加算用ブースト（文字数:255）" },
      { label: "シネマティックカメラブースト", val: "(dynamic camera angle), (cinematic framing), (camera tilt), (depth of field:1.1), (foreground framing), (shot composition emphasis), (lens compression), (visual storytelling shot), (dramatic perspective)", desc: "画角・構図・映画的ショット感を足す加算用ブースト（文字数:203）" }
    ],
    mood: [
      { label: "燭光ローズムード", val: "(candlelight glow), (rose petal ambience), (warm crimson ambience), (romantic mood), (seductive atmosphere), (soft flickering light), (velvet-like shadows), (luxurious red accent light), (intimate air)", desc: "蝋燭・薔薇・赤い空気感を足す加算用ムードブースト（文字数:201）" },
      { label: "ミッドナイトムード", val: "(midnight atmosphere), (cool nocturnal air), (blue-violet ambience), (quiet dramatic mood), (night glow), (soft darkness), (afterglow haze), (mysterious elegance)", desc: "夜・静けさ・妖しい余韻を足す加算用ムードブースト（文字数:162）" }
    ],
    material: [
      { label: "ラグジュアリーマテリアルブースト", val: "(separate material response), (different reflectivity for skin and clothing), (luxury fabric sheen), (glossy coated fabric), (mirror-like costume highlights), (fine jewelry reflections), (material realism), (premium polished surface)", desc: "布・金属・宝飾の材質差を強める加算用ブースト（文字数:233）" },
      { label: "レンダー技術ブースト", val: "(physically based lighting), (ray-traced reflections), (shader-like material response), (subsurface scattering), (anisotropic highlights), (micro-surface detail), (realistic material response), (polished surface reflections), (clear specular highlights), (ambient occlusion), (volumetric lighting), (high dynamic range lighting), (global illumination), (material separation)", desc: "エンジン名なしでPBR・反射・シェーダ質感を足す加算用ブースト（文字数:374）" }
    ],
    liquid: [
      { label: "濡れ艶ブースト", val: "(wet surface sheen), (subtle water sheen), (tiny water droplets), (glossy highlights on skin), (controlled wet speculars), (light reflecting on moisture), (soft humid air), (fresh wet texture)", desc: "水分による艶・反射・湿度感を足す加算用ブースト（文字数:192）" },
      { label: "液体反射ブースト", val: "(clear liquid surface), (rippling reflections), (liquid surface tension), (transparent water highlights), (caustic light accents), (fluid gloss), (thin liquid film), (sparkling droplets)", desc: "水滴・液膜・反射光を強める液体表現ブースト（文字数:186）" }
    ],
    skinLighting: [
      { label: "肌透過光ブースト", val: "(natural skin translucency), (subsurface skin glow), (soft cheek light), (gentle skin highlights), (warm skin undertone), (smooth tonal gradation), (soft ambient bounce light), (delicate skin shading)", desc: "肌の透明感・血色・柔らかい光を足す加算用ブースト（文字数:200）" },
      { label: "柔肌ハイライトブースト", val: "(silky skin highlights), (controlled skin bloom), (soft rim light on skin), (natural face glow), (clean shadow transitions), (fine skin texture detail), (healthy skin luminosity), (soft reflected light)", desc: "肌ハイライト・影のつながり・顔周りの発光感を整えるブースト（文字数:202）" }
    ]
  };

  // ============================
  // 👥 Cast Control (People Count)
  // - Enable toggle prevents affecting models that don't need it
  // - Girls/Boys counts are mutually exclusive within each group
  // ============================
  const CAST_CONTROL = {
    girls: [
      { key: "cc_g1", label: "1girl", desc: "女1", val: "1girl" },
      { key: "cc_g2", label: "2girls", desc: "女2", val: "2girls" },
      { key: "cc_g3", label: "3girls", desc: "女3", val: "3girls" },
      { key: "cc_g4", label: "4girls", desc: "女4", val: "4girls" },
      { key: "cc_g5", label: "5girls", desc: "女5", val: "5girls" }
    ],
    boys: [
      { key: "cc_b1", label: "1boy", desc: "男1", val: "1boy" },
      { key: "cc_b2", label: "2boys", desc: "男2", val: "2boys" },
      { key: "cc_b3", label: "3boys", desc: "男3", val: "3boys" },
      { key: "cc_b4", label: "4boys", desc: "男4", val: "4boys" },
      { key: "cc_b5", label: "5boys", desc: "男5", val: "5boys" }
    ]
  };

  function _setDisabledInBox(box, disabled) {
    box.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      cb.disabled = disabled;
      if (disabled) cb.checked = false;
    });
    box.classList.toggle("disabled", !!disabled);
  }

  function createCastControlAccordion() {
    const d = document.createElement("details");
    d.className = "qp-subacc";
    d.open = false;

    const s = document.createElement("summary");
    s.className = "qp-subacc-summary";

    const titleWrap = document.createElement("div");
    titleWrap.className = "qp-subacc-title";
    titleWrap.textContent = "👥 人物制御（人数）";

    const enableWrap = document.createElement("label");
    enableWrap.style.display = "inline-flex";
    enableWrap.style.alignItems = "center";
    enableWrap.style.gap = "8px";
    enableWrap.style.userSelect = "none";

    const enable = document.createElement("input");
    enable.type = "checkbox";
    enable.id = "cc-enable";
    enableWrap.appendChild(enable);

    const enableTxt = document.createElement("span");
    enableTxt.textContent = "有効化";
    enableWrap.appendChild(enableTxt);

    s.appendChild(titleWrap);
    s.appendChild(enableWrap);
    d.appendChild(s);

    const box = document.createElement("div");
    box.className = "qp-subacc-box";

    const note = document.createElement("div");
    note.className = "qp-note";
    note.textContent = "※ モデルによって不要な場合があるので、必要な時だけON。女/男はそれぞれ1つだけ選択（同時に女+男はOK）。";
    box.appendChild(note);

    const rec = document.createElement("div");
    rec.style.cssText = "margin:10px 0 8px; padding:10px 12px; border-radius:12px; border:1px solid rgba(22,163,74,.26); background:rgba(236,253,245,.96); color:#166534; font-size:12px; line-height:1.55;";
    rec.innerHTML = '<div style="font-weight:800; margin-bottom:2px;">推奨（最適化対応）</div><div>1girl / 1boy / 1girl + 1boy を主軸に各種最適化ロジックを組んでいます。単体キャラと男女ペアはこちらを推奨。</div>';
    box.appendChild(rec);

    const exp = document.createElement("div");
    exp.style.cssText = "margin:0 0 10px; padding:10px 12px; border-radius:12px; border:1px solid rgba(217,119,6,.28); background:rgba(255,247,237,.98); color:#9a3412; font-size:12px; line-height:1.55;";
    exp.innerHTML = '<div style="font-weight:800; margin-bottom:2px;">実験枠（非推奨・各種最適化対応外）</div><div>2girls / 2boys 以上の多人数構成は、ペア補助・役割補正など各種最適化ロジックの対応外です。使えますが、結果はモデル相性に強く左右されます。</div>';
    box.appendChild(exp);

    const mkRow = (label, items, groupClass) => {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.flexWrap = "wrap";
  row.style.gap = "10px";
  row.style.alignItems = "flex-start";
  row.style.margin = "12px 0";

  const left = document.createElement("div");
  left.style.fontWeight = "700";
  left.style.minWidth = "72px";
  left.style.paddingTop = "6px";
  left.textContent = label;

  const right = document.createElement("div");
  // ✅ ルール準拠：grid固定禁止 → flex-wrap で増殖に耐える
  right.style.display = "flex";
  right.style.flexWrap = "wrap";
  right.style.gap = "8px";
  right.style.alignItems = "flex-start";
  right.style.width = "100%";
  right.style.flex = "1 1 240px";

  const makePill = (it) => {
    const id = it.key;
    const isRecommended = /^(1girl|1boy)$/.test(it.val || "");
    const isExperimental = /^(?:[2-9]girls|[2-9]boys)$/.test(it.val || "");

    const lab = document.createElement("label");
    lab.style.display = "inline-flex";
    lab.style.alignItems = "center";
    lab.style.gap = "10px";
    lab.style.padding = "10px 12px";
    lab.style.border = "1px solid var(--qp-border, #d0d7de)";
    lab.style.borderRadius = "12px";
    lab.style.background = "var(--qp-bg, #fff)";
    lab.style.cursor = "pointer";
    lab.style.userSelect = "none";
    lab.style.minWidth = "140px";
    if (isRecommended) {
      lab.style.background = "linear-gradient(180deg, rgba(236,253,245,.98), rgba(240,253,250,.98))";
      lab.style.borderColor = "rgba(22,163,74,.30)";
    } else if (isExperimental) {
      lab.style.background = "linear-gradient(180deg, rgba(255,247,237,.98), rgba(255,251,235,.98))";
      lab.style.borderColor = "rgba(217,119,6,.30)";
    }

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = id;
    cb.dataset.val = it.val;
    cb.dataset.ccGroup = groupClass;
    // 目視できるチェックボックスは不要：ピル自体がボタンになる
    cb.style.display = "none";

    const meta = document.createElement("div");
    meta.style.display = "flex";
    meta.style.flexDirection = "column";
    meta.style.lineHeight = "1.1";

    const t = document.createElement("div");
    t.style.display = "flex";
    t.style.alignItems = "center";
    t.style.flexWrap = "wrap";
    t.style.gap = "6px";
    t.style.fontWeight = "700";

    const titleTxt = document.createElement("span");
    titleTxt.textContent = it.label;
    t.appendChild(titleTxt);

    if (isRecommended) {
      const badge = document.createElement("span");
      badge.textContent = "推奨";
      badge.style.cssText = "display:inline-flex; align-items:center; padding:2px 7px; border-radius:999px; background:rgba(22,163,74,.12); color:#166534; border:1px solid rgba(22,163,74,.22); font-size:10px; font-weight:800; letter-spacing:.02em;";
      t.appendChild(badge);
    } else if (isExperimental) {
      const badge = document.createElement("span");
      badge.textContent = "実験";
      badge.style.cssText = "display:inline-flex; align-items:center; padding:2px 7px; border-radius:999px; background:rgba(217,119,6,.12); color:#9a3412; border:1px solid rgba(217,119,6,.22); font-size:10px; font-weight:800; letter-spacing:.02em;";
      t.appendChild(badge);
    }

    const ds = document.createElement("div");
    ds.style.fontSize = "12px";
    ds.style.opacity = "0.82";
    ds.textContent = isRecommended
      ? (it.desc + " / 最適化対応")
      : (isExperimental ? (it.desc + " / 最適化対応外") : it.desc);

    meta.appendChild(t);
    meta.appendChild(ds);

    const paint = () => {
      if (cb.checked) {
        lab.style.outline = "2px solid rgba(37, 99, 235, 0.35)";
        lab.style.borderColor = "rgba(37, 99, 235, 0.65)";
      } else {
        lab.style.outline = "none";
        lab.style.borderColor = "var(--qp-border, #d0d7de)";
      }
    };

    cb.addEventListener("change", () => {
      if (!cb.checked) { paint(); return; }

      // girls / boys はそれぞれ排他（女+男の同時はOK）
      box.querySelectorAll(`input[type=checkbox][data-cc-group='${groupClass}']`).forEach((x) => {
        if (x !== cb) x.checked = false;
      });

      // 見た目更新
      box.querySelectorAll(`input[type=checkbox][data-cc-group='${groupClass}']`).forEach((x) => {
        const parent = x.closest("label");
        if (!parent) return;
        if (x.checked) {
          parent.style.outline = "2px solid rgba(37, 99, 235, 0.35)";
          parent.style.borderColor = "rgba(37, 99, 235, 0.65)";
        } else {
          parent.style.outline = "none";
          parent.style.borderColor = "var(--qp-border, #d0d7de)";
        }
      });
    });

    lab.addEventListener("click", (ev) => {
      // labelクリックでトグル、ただし無効化中は無視
      if (cb.disabled) return;
      // input自体がdisplay:noneなので、自前でトグル
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event("change", { bubbles: true }));
      ev.preventDefault();
    });

    lab.appendChild(cb);
    lab.appendChild(meta);
    paint();
    return lab;
  };

  items.forEach((it) => right.appendChild(makePill(it)));

  row.appendChild(left);
  row.appendChild(right);
  return row;
};

    box.appendChild(mkRow("Girls", CAST_CONTROL.girls, "girls"));
    box.appendChild(mkRow("Boys", CAST_CONTROL.boys, "boys"));

    _setDisabledInBox(box, true);

    enable.addEventListener("change", () => {
      _setDisabledInBox(box, !enable.checked);
    });

    d.appendChild(box);
    return d;
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

      // ✅ 用途別ワンタップ導線（Beginner Workflow Buttons）
      function __qpGuideOpenAndHighlight(el){
        if(!el) return;
        try{
          // 1) Open all ancestor <details> and common accordion containers
          let p = el;
          // If el is a summary, treat its parent details as the primary target
          if(p && p.tagName==="SUMMARY" && p.parentElement && p.parentElement.tagName==="DETAILS") p = p.parentElement;
          while(p){
            try{
              if(p.tagName==="DETAILS"){ p.open = true; }
              // common accordion patterns (best-effort)
              if(p.classList && (p.classList.contains("accordion-item") || p.classList.contains("accordion") || p.classList.contains("group") || p.classList.contains("box"))){
                const sum = p.querySelector(":scope > summary");
                if(sum && sum.parentElement && sum.parentElement.tagName==="DETAILS") sum.parentElement.open = true;
                const hdr = p.querySelector(":scope > .accordion-header, :scope > .header, :scope > .title");
                if(hdr && typeof hdr.click === "function") hdr.click();
              }
            }catch(e){}
            p = p.parentElement;
          }

          // 2) Also open the nearest details (if any)
          const det = (el.tagName==="DETAILS") ? el : el.closest("details");
          if(det) det.open = true;

          // 3) Highlight + scroll
          const target = (el.tagName==="SUMMARY" && el.parentElement) ? el.parentElement : el;
          target.classList.add("qp-guide-highlight");
          // Deterministic scroll (independent of tap position)
          const r = target.getBoundingClientRect();
          const absTop = (window.pageYOffset || document.documentElement.scrollTop || 0) + r.top;
          const offset = 140;
          try{ window.scrollTo({ top: Math.max(0, absTop - offset), left:0, behavior:"smooth" }); }
          catch(e){ window.scrollTo(0, Math.max(0, absTop - offset)); }

          setTimeout(()=>{ try{ target.classList.remove("qp-guide-highlight"); }catch(e){} }, 3200);
        }catch(e){}
      }
      
      function __qpGuideFindByTextContains(keyword){
  const k = String(keyword||"").trim();
  if(!k) return null;
  const candidates = Array.from(document.querySelectorAll("button, summary, .card, .tile, .btn, .qp-card, .qp-tile, label, a, div"));
  for(const el of candidates){
    const t = (el.textContent||"").trim();
    if(!t) continue;
    if(t.indexOf(k) >= 0) return el.closest("details") || el;
  }
  return null;
}

function __qpGuideClickCheckboxByLabel(labelText){
  try{
    const labels = Array.from(document.querySelectorAll("label")).filter(l => (l.textContent||"").includes(labelText));
    if(!labels.length) return false;
    const lab = labels[0];
    const inp = lab.querySelector('input[type="checkbox"], input[type="radio"]');
    if(inp){
      if(!inp.checked) inp.click();
      return true;
    }
  }catch(e){}
  return false;
}

function __qpGuideFindBySummaryContains(keyword){
        const k = String(keyword||"").trim();
        if(!k) return null;
        const sums = Array.from(document.querySelectorAll("details > summary"));
        const hit = sums.find(s => (s.textContent||"").indexOf(k) >= 0);
        return hit ? hit.parentElement : null;
      }
      function __qpGuideFocus(target){
        // target can be element id or summary keyword
        let el = null;
        if(!target) return;
        if(typeof target === "string"){
          el = document.getElementById(target) || __qpGuideFindBySummaryContains(target) || __qpGuideFindByTextContains(target);
        }else{
          el = target;
        }
        __qpGuideOpenAndHighlight(el);
      }
      function __qpGuideLog(msg){
        try{
          // If optional AI summary logger exists, add a lightweight line; otherwise ignore.
          if(window.__AI_SUMMARY && typeof window.__AI_SUMMARY.push === "function"){
            window.__AI_SUMMARY.push({ type:"guide", text: msg });
          }
        }catch(e){}
      }

      const btnRow = document.createElement("div");
      btnRow.className = "qp-guide-btnrow";
      btnRow.innerHTML = `
        <button type="button" class="qp-guide-btn" data-act="commercial">🎁 グッズ化したい</button>
        <button type="button" class="qp-guide-btn" data-act="illustration">🎨 イラストとして仕上げたい</button>
        <button type="button" class="qp-guide-btn" data-act="game3d">🎮 ゲーム・3D風にしたい</button>
        <button type="button" class="qp-guide-btn" data-act="maxquality">✨ とにかく最高画質にしたい</button>
      `;
      btnRow.addEventListener("click", (ev)=>{
        const b = ev && ev.target ? ev.target.closest("button.qp-guide-btn") : null;
        if(!b) return;
        const act = b.dataset.act;
        if(act==="commercial"){
          __qpGuideLog("Guide: Commercial workflow suggested");
          __qpGuideFocus("qp-commercial-mode");
          // also hint style-side merch section if present
          __qpGuideFocus("商品化");
        }else if(act==="illustration"){
          __qpGuideLog("Guide: Illustration finishing suggested");
          __qpGuideFocus("qp-finetune");
        }else if(act==="game3d"){
          __qpGuideLog("Guide: Game/3D workflow suggested");
          __qpGuideFocus("MMD・3DダンスCG");
          __qpGuideFocus("3Dレンダリング");
        }else if(act==="maxquality"){
          __qpGuideLog("Guide: Max quality suggested");
          // 1) turn on the beginner ultra-quality preset (if present)
          __qpGuideClickCheckboxByLabel("超高画質セット");
          // 2) jump to Quality Booster tile (for advanced tweaks)
          __qpGuideFocus("Quality Booster");
        }
      });
      gContent.appendChild(btnRow);


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
      
      
      // 👥 Cast Control (People Count) — placed right under Beginner Guide area
      try{
        const subCast = createCastControlAccordion();
        conQuality.appendChild(subCast);
      }catch(e){ console.warn("Cast Control init failed", e); }

const subBase = window.__QP_UTILS.createSubAccordion("✨ 画質・クオリティ (Base)", BASE_QUALITY);
      // 艶解放隠しコマンド
      let glossTap = 0; let lastGlossTime = 0;
      subBase.querySelector("summary").addEventListener("click", () => {
        const now = Date.now(); if(now - lastGlossTime > 2000) glossTap = 0;
        glossTap++; lastGlossTime = now;
        if(glossTap >= 5) {
          if(confirm(`シークレット機能「管理者専用モード」を${IS_GLOSS_UNLOCKED ? "封印" : "解放"}しますか？`)) {
            localStorage.setItem("MY_GLOSS_UNLOCK", (!IS_GLOSS_UNLOCKED).toString()); location.reload();
          }
          glossTap = 0;
        }
      });
      conQuality.appendChild(subBase);
      const subHighEnd = document.createElement("details");
      subHighEnd.className = "qp-sub-acc qp-gloss";
      subHighEnd.open = false;
      const subHighEndSummary = document.createElement("summary");
      subHighEndSummary.textContent = "💎 品質プリセット (Quality Presets)";
      subHighEnd.appendChild(subHighEndSummary);
      const subHighEndContent = document.createElement("div");
      subHighEndContent.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";
      const presetGuide = document.createElement("div");
      presetGuide.style.cssText = "font-size:12px; line-height:1.5; color:#4b5563; background:#f8fbff; border:1px solid #d6e8ff; border-radius:10px; padding:8px 10px;";
      presetGuide.textContent = "用途ごとの完成済み品質セットです。基本は1つ選び、必要なら下の棚で微調整します。";
      subHighEndContent.appendChild(presetGuide);
      const presetIllustration = window.__QP_UTILS.createSubAccordion("🎨 イラスト用 (Illustration)", HIGH_END_GROUPS.illustration);
      const presetGloss = window.__QP_UTILS.createSubAccordion("✨ 艶・グラビア特化 (Glossy / Gravure)", HIGH_END_GROUPS.gloss, "gloss");
      const presetRealism = window.__QP_UTILS.createSubAccordion("🧵 写実・質感特化 (Realism / Material)", HIGH_END_GROUPS.realism);
      const presetCinematic = window.__QP_UTILS.createSubAccordion("🎬 シネマ・映像 (Cinematic)", HIGH_END_GROUPS.cinematic);
      const presetRender = window.__QP_UTILS.createSubAccordion("🖥 3D・レンダリング (3D Render)", HIGH_END_GROUPS.render);
      const presetCommercial = window.__QP_UTILS.createSubAccordion("📦 商品・商業用 (Commercial)", HIGH_END_GROUPS.commercial);
      const exclusivePresetAccs = [presetIllustration, presetGloss, presetRealism, presetCinematic, presetRender, presetCommercial];
      [presetIllustration, presetGloss, presetRealism, presetCinematic, presetRender, presetCommercial].forEach(function(acc){ subHighEndContent.appendChild(acc); });
      if (IS_GLOSS_UNLOCKED) {
        const adminRoot = document.createElement("details");
        adminRoot.className = "qp-sub-acc qp-secret";
        adminRoot.open = false;
        const adminSummary = document.createElement("summary");
        adminSummary.textContent = "㊙️ 管理者専用モード (Admin Mode)";
        adminRoot.appendChild(adminSummary);
        const adminContent = document.createElement("div");
        adminContent.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";

        const adminGuide = document.createElement("div");
        adminGuide.style.cssText = "font-size:12px; line-height:1.55; color:#7f1d1d; background:#fff7f7; border:1px solid #ffd4d4; border-radius:10px; padding:8px 10px;";
        adminGuide.textContent = "上段の管理者専用セットは完成済み品質セットとして1つ選択。下段の各ブースト棚は加算用で、必要な分だけ重ねられます。各項目には文字数を表示しています。";
        adminContent.appendChild(adminGuide);

        const adminSets = window.__QP_UTILS.createSubAccordion("🧪 管理者専用セット", HIGH_END_GROUPS.secret, "secret");
        adminContent.appendChild(adminSets);
        exclusivePresetAccs.push(adminSets);

        const boostCamera = window.__QP_UTILS.createSubAccordion("📷 カメラブースト", SECRET_BOOST_GROUPS.camera, "secret");
        const boostMood = window.__QP_UTILS.createSubAccordion("🌹 ムードブースト", SECRET_BOOST_GROUPS.mood, "secret");
        const boostMaterial = window.__QP_UTILS.createSubAccordion("💎 マテリアルブースト", SECRET_BOOST_GROUPS.material, "secret");
        const boostLiquid = window.__QP_UTILS.createSubAccordion("💧 濡れ・液体ブースト", SECRET_BOOST_GROUPS.liquid, "secret");
        const boostSkinLighting = window.__QP_UTILS.createSubAccordion("🫧 肌ライティングブースト", SECRET_BOOST_GROUPS.skinLighting, "secret");
        [boostCamera, boostMood, boostMaterial, boostLiquid, boostSkinLighting].forEach(function(acc){ adminContent.appendChild(acc); });

        adminRoot.appendChild(adminContent);
        subHighEndContent.appendChild(adminRoot);
      }
      const markPresetGroup = function(acc){
        acc.querySelectorAll('input[type="checkbox"]').forEach(function(cb){
          cb.dataset.qpPresetGroup = 'quality-presets';
        });
      };
      exclusivePresetAccs.forEach(markPresetGroup);
      var presetCbs = subHighEndContent.querySelectorAll('input[data-qp-preset-group="quality-presets"]');
      presetCbs.forEach(function(cb){
        cb.addEventListener('change', function(){
          if (!cb.checked) return;
          presetCbs.forEach(function(other){
            if (other !== cb && other.checked) {
              other.checked = false;
              other.dispatchEvent(new Event('change', { bubbles: true }));
            }
          });
        });
      });
      subHighEnd.appendChild(subHighEndContent);
      conQuality.appendChild(subHighEnd);
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
    getTags() {
      var tags = getLinkedTags();
      var mode = getMode();
      if (!mode || mode === "normal") return tags;

      var out = [];
      for (var i = 0; i < tags.length; i++) {
        var s = String(tags[i] || "");

        if (mode === "enhanced") {
          s = s.replace(/\bbest\s+quality\b/gi, "highest quality");
        } else if (mode === "extreme") {
          // remove weaker quality tokens inside QUALITY section only
          s = s.replace(/\(\s*masterpiece\s*\)/gi, "");
          s = s.replace(/\bmasterpiece\b/gi, "");
          s = s.replace(/\bbest\s+quality\b/gi, "");
          s = s.replace(/\bhighest\s+quality\b/gi, "");
        }

        // cleanup commas/spaces
        s = s.replace(/\s*,\s*/g, ", ").replace(/^,\s*|,\s*$/g, "").trim();
        if (s) out.push(s);
      }

      if (mode === "extreme") {
        out.push(
          "highest quality",
          "absurdres",
          "(masterpiece:1.4)",
          "ultra detailed",
          "(highres)",
          "(ultra-detailed)",
          "(8k)"
        );
      }

      // de-dup while preserving order
      var seen = Object.create(null);
      var finalTags = [];
      for (var j = 0; j < out.length; j++) {
        var t = out[j];
        if (!seen[t]) { seen[t] = 1; finalTags.push(t); }
      }
      return finalTags;
    } 
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
      if(item.links) cb.dataset.linksInternal = item.links.join(","); content.appendChild(label); 
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
    getTags() { return getLinkedTags(); }
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
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const QUALITY_DATA = {
    "⚠️ NSFWフラグ・基本": [
      { label: "NSFW", val: "nsfw" },
      { label: "R-18", val: "r18" },
      { label: "ヌード許可", val: "nude, naked, (nipples), (pussy), (no clothes)" },
      { label: "露骨な表現（Explicit）", val: "explicit" },
      { label: "高画質R-18補正", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (extremely detailed soft skin:1.3), (glistening skin:1.2), (erotic lighting:1.3), (sensual atmosphere:1.2), (flush:1.2), (sweat drops:1.1), (cinematic lighting:1.1), (depth of field:1.1)" }
    ],

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



  const QUALITY_DESC_MAP = {
    "⚠️ NSFWフラグ・基本": {
      "NSFW": "成人向け要素を許可したい時の基本フラグ",
      "R-18": "R-18系生成へ寄せる明示フラグ",
      "ヌード許可": "裸体や露出を許可したい時向け",
      "露骨な表現（Explicit）": "性的表現をさらに直接的にしたい時向け",
      "高画質R-18補正": "艶・肌・空気感を整えるR-18向け補正"
    },
    "🛠️ 制作ソフト・ツール": {
      "Cinema 4D": "広告CGや整った3D感へ寄せたい時向け",
      "ZBrush (彫刻)": "彫刻的な造形感や面の強さを足したい時向け",
      "Maya": "王道の3D制作感や安定したCG感を出したい時向け",
      "Blender": "汎用的な3Dレンダ感を軽く足したい時向け",
      "Substance Painter": "塗装感や素材表現を強めたい時向け"
    },
    "🖥️ レンダリング・エンジン": {
      "Unreal Engine 5": "UE5寄りのゲームCG感を出したい時向け",
      "Octane Render": "艶や発光の強い高級レンダ感を出したい時向け",
      "Redshift Render": "高速系の商業CGらしい整理感を足したい時向け",
      "V-Ray Render": "建築・商品寄りの硬質で綺麗な光に寄せたい時向け",
      "Arnold Render": "映画寄りの落ち着いた写実感を出したい時向け",
      "Corona Render": "やわらかい自然光の写実レンダ感を足したい時向け",
      "Blender Cycles": "Blender系のパストレ感を素直に足したい時向け"
    },
    "⚙️ 3D技術・シェーダー": {
      "パストレーシング": "光の回り込みや高級CG感を強めたい時向け",
      "レイトレーシング": "反射や発光のリアルさを足したい時向け",
      "Lumen反射 (UE5)": "UE5風のリアルタイム反射感を足したい時向け",
      "Naniteジオメトリ": "細密な形状情報や高精細3D感を強めたい時向け",
      "PBR (物理ベース)": "素材ごとの反応差を綺麗に出したい時向け",
      "シェーダー": "質感制御やCGらしい面表現を足したい時向け",
      "SSS (表面下散乱)": "肌や半透明素材の柔らかさを出したい時向け",
      "アンビエントオクルージョン": "陰影の締まりや接地感を強めたい時向け",
      "グローバルイルミネーション": "全体の光回りを自然に整えたい時向け",
      "ボリュメトリック照明": "光の筋や空気感を演出したい時向け"
    },
    "✨ レンズ・ポストエフェクト": {
      "ゴッドレイ": "神々しい光の筋を入れたい時向け",
      "レンズフレア": "強い光源の映えを足したい時向け",
      "ブルーム効果": "発光のにじみをやわらかく出したい時向け",
      "色収差": "映像的なレンズのズレ感を少し足したい時向け",
      "ケラレ (周辺減光)": "視線を中央へ集めたい時向け",
      "回折スパイク (光条)": "光源にシャープな光条を足したい時向け",
      "ハレーション": "明部のにじみをフィルム風に足したい時向け",
      "フィルムグレイン": "映像や写真の粒感を足したい時向け",
      "ポストプロセス": "映像編集後の仕上げ感をまとめて足したい時向け",
      "被写界深度 (DoF)": "背景をぼかして主役を立てたい時向け",
      "ボケ": "玉ボケややわらかい背景表現を足したい時向け"
    },
    "💡 照明・ライティング": {
      "レンブラント照明": "顔立ちを立体的に見せたい時向け",
      "バタフライ照明": "美顔・ポートレート寄りに整えたい時向け",
      "リムライト": "輪郭を光らせて主役感を出したい時向け",
      "キャッチライト": "瞳の輝きや生気を足したい時向け",
      "ソフトボックス": "やわらかく均一な商業光を足したい時向け",
      "シネマティック照明": "映画っぽい光と影を強めたい時向け"
    },
    "💎 超高解像度・補正": {
      "8K UHD": "高精細さをしっかり押し上げたい時向け",
      "4K UHD": "まず標準以上の高解像度感を足したい時向け",
      "16K解像度": "限界まで超高解像度寄りに攻めたい時向け",
      "ギガピクセル": "超精細・拡大耐性を強めたい時向け",
      "RAW写真": "未加工の高情報量な写真感を足したい時向け",
      "シャープフォーカス": "輪郭や細部のキレを強めたい時向け",
      "アニメ・リアル融合": "アニメと写実の中間へ寄せたい時向け"
    }
  };

  Object.keys(QUALITY_DESC_MAP).forEach(sectionKey => {
    const sectionItems = QUALITY_DATA[sectionKey];
    if (!Array.isArray(sectionItems)) return;
    const map = QUALITY_DESC_MAP[sectionKey] || {};
    sectionItems.forEach(item => {
      const key = item.label || item.ja;
      if (!item.desc && map[key]) item.desc = map[key];
    });
  });

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
    ,
    "人物除外 (People Exclusion)": [
      { label: "no humans", val: "no humans" },
      { label: "no human", val: "no human" },
      { label: "no people", val: "no people" },
      { label: "no women", val: "no women" },
      { label: "no men", val: "no men" },
      { label: "no girls", val: "no girls" },
      { label: "no boys", val: "no boys" },
      { label: "no child", val: "no child" },
      { label: "no teen", val: "no teen" },
      { label: "no adult", val: "no adult" },
      { label: "no old", val: "no old" },
      { label: "no loli", val: "no loli" },
      { label: "no shota", val: "no shota" }
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      { label: "目のハイライト完全除去", val: "eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes" }
    ]
  };

  const NEG_DESC_BY_CATEGORY = {
    "画質・品質 (Low Quality)": "低品質やノイズ系の崩れを避けたい時向け",
    "人体崩壊 (Bad Anatomy)": "手や指や体の崩れを避けたい時向け",
    "不要な要素 (Unwanted)": "不要物や余計な写り込みを減らしたい時向け",
    "👁️ 目のハイライト除去": "目の輝きや反射を消して虚ろな目に寄せたい時向け",
    "人物除外 (People Exclusion)": "人物そのものを出したくない時向け"
  };

  const NEG_SET_DESC_BY_LABEL = {
    "基本ネガティブ": "まず定番の崩れをまとめて避けたい時向け",
    "人体崩壊防止": "手や指や体の破綻を重点的に防ぎたい時向け",
    "目のハイライト完全除去": "目のキラキラを消して無機質にしたい時向け"
  };

  Object.entries(NEG_WORDS_DATA).forEach(([category, items]) => {
    const catDesc = NEG_DESC_BY_CATEGORY[category] || "不要な要素を抑えたい時向け";
    items.forEach((item) => {
      if (!item.desc) item.desc = catDesc;
    });
  });

  Object.values(NEG_SETS).forEach((items) => {
    items.forEach((item) => {
      if (!item.desc) item.desc = NEG_SET_DESC_BY_LABEL[item.label] || "崩れをまとめて避けたい時向け";
    });
  });

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; 
    const summary = document.createElement("summary"); summary.textContent = title; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label");
      label.className = "qp-item";
      label.style.display = "block";
      label.style.cursor = "pointer";
      if(item.desc) label.title = item.desc;

      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "flex-start";

      const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.dataset.val = item.val || item.en;
      cb.style.marginRight = "8px";
      cb.style.marginTop = "2px";
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      row.appendChild(cb);

      const textWrap = document.createElement("div");
      textWrap.style.lineHeight = "1.35";
      const titleNode = document.createElement("div");
      titleNode.textContent = item.label || `${item.ja}/${item.en}`;
      textWrap.appendChild(titleNode);
      row.appendChild(textWrap);
      label.appendChild(row);

      if(item.desc){
        const desc = document.createElement("div");
        desc.className = "qp-item-desc";
        desc.textContent = item.desc;
        label.appendChild(desc);
      }

      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      const conQuality = document.getElementById("qp-quality-content");
      if (conQuality) Object.entries(QUALITY_DATA).forEach(([k,v]) => {
        // シークレット未解除ならNSFWフラグは非表示
        if (!IS_UNLOCKED && /NSFWフラグ/.test(k)) return;
        conQuality.appendChild(createSubAccordion(k, v));
      });

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
      if(item.links) cb.dataset.linksInternal = item.links.join(","); 
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
      if(item.links) cb.dataset.linksInternal = item.links.join(","); content.appendChild(label); 
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
    "🔞 R-18 表情カテゴリー (Adult Expressions)": [
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



(function(){
// --- builder_ui.section.quality_preset.v11.js ---
(function(){
  "use strict";
  const VERSION = 11;
  const KEY = "quality_preset";

  // ========================================================
  // ✅ New: Fine-tune categories (Line / Color / Ornament / Atmos)
  // ========================================================
  const LINE_DETAIL_DATA = [
    { label: "Clean Lineart", val: "clean lineart", desc: "線をすっきり整えてアニメらしい清潔感を出したい時向け" },
    { label: "Colored Lineart", val: "colored lineart", desc: "黒線をやわらげて色に馴染む線画へ寄せたい時向け" },
    { label: "Ultra-fine Lines", val: "ultra-fine lines", desc: "極細の線で繊細さや高精細感を強めたい時向け" },
    { label: "Delicate Outline", val: "delicate outline", desc: "輪郭をやさしく上品に見せたい時向け" },
    { label: "Smooth Gradients", val: "smooth gradients", desc: "色のつながりを滑らかにしてCG感を高めたい時向け" },
    { label: "Polished Anime Style", val: "polished anime style", desc: "整ったイベントCG風のアニメ仕上げにしたい時向け" },
    { label: "Soft Edges", val: "soft edges", desc: "輪郭や境界を少しやわらげて優しい印象にしたい時向け" }
  ];

  const COLOR_PALETTE_DATA = [
    { label: "Pastel Colors", val: "pastel colors", desc: "やわらかい淡色で可愛くまとめたい時向け" },
    { label: "Pale Colors", val: "pale colors", desc: "色味を薄めて儚さや透明感を出したい時向け" },
    { label: "Warm Color Palette", val: "warm color palette", desc: "暖色寄りの色でぬくもりを足したい時向け" },
    { label: "Pink & Red Palette", val: "pink and red color palette", desc: "赤みと恋愛感を強めたい時向け" }
  ];

  const ORNAMENT_DATA = [
    { label: "Crystal Hair", val: "crystal hair", desc: "髪に結晶のような透明感と硬質感を足したい時向け" },
    { label: "Translucent Hair", val: "translucent hair", desc: "透けるような髪で幻想感を強めたい時向け" },
    { label: "Sparkle Hair", val: "sparkle hair", desc: "髪のきらめきや光粒感を増やしたい時向け" },
    { label: "Crystal Eyes", val: "crystal eyes", desc: "瞳を澄んだ宝石みたいに見せたい時向け" },
    { label: "Jewelry Eyes", val: "jewelry eyes", desc: "瞳の輝きを強めて装飾的に見せたい時向け" }
  ];

  const ATMOSPHERE_DATA = [
    { label: "Romantic Atmosphere", val: "romantic atmosphere", desc: "恋愛イベントみたいな甘い空気を足したい時向け" },
    { label: "Mystical Atmosphere", val: "mystical atmosphere", desc: "神秘的で魔法っぽい空気感を出したい時向け" },
    { label: "Cozy Interior Light", val: "cozy interior light", desc: "室内のぬくもりある光で落ち着かせたい時向け" },
    { label: "Dreamy Painting", val: "dreamy painting", desc: "夢の中みたいな柔らかい絵画感を足したい時向け" },
    { label: "Illusion Effect", val: "illusion effect", desc: "幻覚や蜃気楼みたいな揺らぎを加えたい時向け" },
    { label: "Sense of Depth", val: "sense of depth", desc: "奥行き感を強めて画面に深さを出したい時向け" }
  ];


  const OUTFIT_DETAIL_DATA = [
    {
      label: "Ornate Embroidery & Trim",
      val: "(intricate outfit details:1.3), (highly detailed costume:1.3), (ornate clothing design:1.2), (elaborate embroidery:1.3), (ornamental brocade:1.2), (golden thread embroidery:1.2), (luxurious decorative patterns:1.2), (elaborate trim), (tassel ornaments), (ceremonial costume embellishments:1.2)",
      desc: "刺繍・模様・房飾りを増やして豪華衣装へ寄せたい時向け"
    },
    {
      label: "Glossy Fabric & Satin Tension",
      val: "(glossy fabric texture:1.25), (silky sheen:1.15), (satin-like reflections:1.15), (tight fabric tension:1.15), (smooth reflective cloth:1.15), (specular fabric highlights:1.15), (form-fitting costume:1.1), (light-catching folds), (luxurious shine on clothing), (tailored fit)",
      desc: "光沢布や密着素材の艶と張りを強めたい時向け"
    },
    {
      label: "Couture Structure & Tailored Fit",
      val: "(couture-level costume detail:1.3), (tailored garment construction:1.2), (refined garment structure:1.2), (refined silhouette:1.2), (structured costume silhouette), (precise seam lines), (detailed seams and stitching:1.2), (carefully fitted clothing), (designer costume quality)",
      desc: "高級仕立ての構造美や服の完成度を上げたい時向け"
    },
    {
      label: "Metal Ornaments & Hybrid Parts",
      val: "(decorative metal fittings:1.2), (ornate shoulder armor), (engraved metallic ornament:1.2), (gold-trimmed costume parts), (metal and fabric hybrid design:1.2), (regal armor accents), (polished decorative metal), (ornamental clasps and emblems), (ceremonial armor decoration)",
      desc: "金属装飾や肩当てなど布とパーツの融合感を足したい時向け"
    },
    {
      label: "Hair Ornaments & Costume Jewelry",
      val: "(elaborate hair ornaments:1.2), (ornate chest accessory), (decorative brooches), (tassel earrings), (flower ornaments), (traditional knot decorations), (jewel ornaments), (luxury accessory layering), (intricate costume jewelry:1.2)",
      desc: "髪飾り・胸飾り・宝飾小物まで豪華に盛りたい時向け"
    },
    {
      label: "Luxury Ceremonial China Dress",
      val: "(intricate outfit details:1.3), (highly detailed costume:1.3), (ornate clothing design:1.2), (elaborate embroidery:1.3), (golden thread embroidery:1.2), (ornamental brocade:1.2), (glossy fabric texture:1.25), (silky sheen:1.15), (satin-like reflections:1.15), (form-fitting costume:1.1), (tight fabric tension:1.15), (decorative metal fittings:1.2), (ornate shoulder armor), (gold-trimmed costume parts), (elaborate hair ornaments:1.2), (ornate chest accessory), (tassel ornaments), (ceremonial costume embellishments:1.2), (luxurious decorative patterns:1.2)",
      desc: "豪華チャイナや儀礼衣装を一発で濃くしたい時向け"
    }
  ];

  const MATERIAL_TEXTURE_DATA = [
    {
      label: "Silk & Satin Luxe Finish",
      val: "(silk fabric sheen:1.2), (satin fabric highlights:1.2), (luxury smooth textile:1.15), (soft directional sheen:1.15), (elegant fabric gloss:1.15), (refined cloth reflections:1.1), (tailored formalwear surface), (rich eveningwear finish)",
      desc: "シルクやサテンの高級な艶と滑らかさを強めたい時向け"
    },
    {
      label: "Velvet & Soft Nap Richness",
      val: "(velvet pile texture:1.25), (plush velvet surface:1.2), (deep light-absorbing fabric:1.15), (soft directional sheen:1.15), (rich crushed velvet highlights:1.15), (low specular luxury fabric), (weighted velvet drape:1.1)",
      desc: "ベルベットや起毛布の深みと高級感を出したい時向け"
    },
    {
      label: "Leather & Glossy Enamel Surface",
      val: "(leather material finish:1.2), (glossy enamel surface:1.2), (firm polished material:1.15), (hard reflective trim:1.15), (structured glossy outfit surface:1.1), (clean specular edges), (fashion-grade synthetic leather)",
      desc: "レザーやエナメルの硬質な光沢と張りを足したい時向け"
    },
    {
      label: "Latex & Rubber Skin-tight Shine",
      val: "(latex clothing sheen:1.2), (rubberized outfit surface:1.2), (skin-tight material tension:1.15), (high gloss contour highlights:1.15), (slick synthetic suit finish:1.1), (controlled specular reflections), (structured fitted costume)",
      desc: "ラテックスやラバーの密着感と強い反射を出したい時向け"
    },
    {
      label: "Lace & Sheer Delicate Transparency",
      val: "(lace detail texture:1.2), (delicate sheer fabric:1.2), (ornamental lace edges:1.15), (subtle transparent cloth layering:1.1), (fine mesh textile detail), (soft translucent garment accents)",
      desc: "レースやシースルー素材の繊細さと透け感を強めたい時向け"
    },
    {
      label: "Denim & Knit Casual Texture",
      val: "(denim fabric texture:1.2), (knit textile detail:1.2), (casual cloth grain:1.15), (soft everyday fabric folds:1.1), (natural stitched textile surface), (lived-in casual material feel)",
      desc: "デニムやニットなど日常服の布感を自然に濃くしたい時向け"
    }
  ];

  const SILHOUETTE_VOLUME_DATA = [
    { label: "Waist Definition & Tailored Shape", val: "(defined waistline:1.2), (tailored silhouette:1.2), (body-contouring outfit structure:1.15), (cinched waist emphasis), (refined garment fit)", desc: "ウエストの締まりや服全体の形を綺麗に見せたい時向け" },
    { label: "Bust Structure & Chest Volume", val: "(structured bodice), (chest contour definition:1.2), (three-dimensional bust shaping:1.15), (curved garment tension), (fitted upper-body silhouette)", desc: "胸元の立体感や上半身の造形を強めたい時向け" },
    { label: "Skirt Spread & Hem Volume", val: "(skirt volume:1.2), (elegant hem flare:1.15), (layered skirt spread), (structured lower silhouette), (dress hem movement)", desc: "スカートの広がりや裾の華やかさを出したい時向け" },
    { label: "Shoulder Shape & Armor Presence", val: "(defined shoulder silhouette:1.2), (structured shoulder shape), (shoulder armor presence:1.15), (upper-body width balance), (regal shoulder line)", desc: "肩幅や肩装甲の張りで上半身の格を出したい時向け" },
    { label: "Elegant Draping & Fabric Fall", val: "(elegant draping:1.2), (weighted fabric fall:1.15), (luxurious cloth drop), (soft gravity folds), (formal gown drape)", desc: "布の落ちる感じや重いドレープを見せたい時向け" },
    { label: "Three-Dimensional Tailoring", val: "(three-dimensional garment construction:1.2), (architectural outfit structure:1.15), (refined pattern cutting), (structured seams), (couture silhouette balance)", desc: "立体裁断っぽい仕立てや衣装の構築感を足したい時向け" }
  ];

  const ACCESSORY_DENSITY_DATA = [
    { label: "Brooches & Emblem Details", val: "(decorative brooches:1.2), (ornamental emblems), (formal crest accessory), (luxury chest ornament)", desc: "ブローチや紋章で格を上げたい時向け" },
    { label: "Chains & Belt Hardware", val: "(decorative chains:1.2), (ornate belt hardware), (fashion buckles), (metal strap accents), (accessory layering)", desc: "チェーンやバックルで情報量を増やしたい時向け" },
    { label: "Tassels & Hanging Ornaments", val: "(tassel ornaments:1.2), (hanging accessory details), (swaying decorative cords), (luxury tassel accents)", desc: "房飾りや揺れる装飾を足したい時向け" },
    { label: "Jewels & Gem Inlays", val: "(jewel embellishments:1.2), (gem inlays), (ornamental gemstones), (sparkling accessory accents)", desc: "宝石や輝く飾りを盛りたい時向け" },
    { label: "Hair & Ear Accessories", val: "(elaborate hair ornaments:1.2), (ornate earrings), (decorative ear accessories), (headpiece accents)", desc: "髪飾りや耳飾りでヒロイン感を出したい時向け" },
    { label: "Heroine-Grade Ornament Density", val: "(luxury accessory layering:1.2), (ornate costume jewelry:1.2), (heroine-grade detailing), (premium decorative density), (showpiece outfit accents)", desc: "全体の装飾密度を上げて主役級の衣装にしたい時向け" }
  ];

  const FOCAL_PARTS_DATA = [
    { label: "Chestpiece & Neckline Focus", val: "(ornate neckline design:1.2), (chestpiece detailing:1.2), (decorated bust area), (upper garment focal detail)", desc: "胸元や首まわりを主役にしたい時向け" },
    { label: "Collar & Shoulder Focus", val: "(decorative collar design:1.2), (shoulder ornament focus), (upper-frame costume accents), (structured neckline framing)", desc: "襟や肩まわりで印象を作りたい時向け" },
    { label: "Sleeves & Arm Detail Focus", val: "(ornate sleeve details:1.2), (arm accessory focus), (decorated cuffs), (sleeve silhouette emphasis)", desc: "袖や腕の意匠を目立たせたい時向け" },
    { label: "Waist & Beltline Focus", val: "(waist accessory focus:1.2), (beltline detailing), (midsection ornament emphasis), (cinched waist accents)", desc: "腰回りやベルト周辺を見せ場にしたい時向け" },
    { label: "Hemline & Lower Detail Focus", val: "(decorated hemline:1.2), (lower garment accents), (skirt edge details), (ornamental lower silhouette)", desc: "裾や下半身側の意匠を強めたい時向け" },
    { label: "Gloves, Boots & Footwear Focus", val: "(ornate gloves:1.2), (detailed boots), (footwear accents), (hand and foot costume focus)", desc: "手袋や足元で衣装の完成度を上げたい時向け" }
  ];

  const WORLDWEAR_DATA = [
    { label: "Royal & Ceremonial Attire", val: "(royal attire:1.2), (ceremonial costume:1.2), (regal formalwear), (noble garment design), (courtly embellishments)", desc: "王族や儀礼服のような格式を足したい時向け" },
    { label: "Temple & Sacred Garments", val: "(sacred garments:1.2), (temple attire), (religious costume motifs), (ritual vestment details), (holy ornamentation)", desc: "宗教・神殿衣装の神聖さを出したい時向け" },
    { label: "Military Dress & Officer Glamour", val: "(military dress uniform:1.2), (officer-style outfit), (formal military embellishments), (commanding costume design), (regimental trim)", desc: "軍装ドレスや士官服っぽい格を出したい時向け" },
    { label: "Imperial Chinese Courtwear", val: "(imperial chinese courtwear:1.2), (palace-inspired dress), (ornate eastern ceremonial attire), (court embroidery), (dynastic ornamentation)", desc: "中華宮廷の豪華さを濃くしたい時向け" },
    { label: "Japanese Ritual & Formal Wear", val: "(japanese ceremonial wear:1.2), (ritual kimono influence), (formal traditional garment motifs), (ornamental japanese dress elements)", desc: "和風儀式服や格式ある和装感を足したい時向け" },
    { label: "Futuristic Suit & Sci-Fi Regalia", val: "(futuristic suit design:1.2), (science fiction regalia), (advanced synthetic costume parts), (sleek futurewear), (high-tech outfit styling)", desc: "未来SFスーツや近未来衣装へ寄せたい時向け" },
    { label: "Mage Robe & Arcane Dress", val: "(mage robe details:1.2), (arcane garment motifs), (sorcerous costume accents), (mystic formalwear), (enchanted cloth design)", desc: "魔導士ローブや魔法衣装の物語感を足したい時向け" },
    { label: "Mechanical Ornament Dress", val: "(mechanical costume accents:1.2), (gear-inspired dress details), (ornamental machine parts), (hybrid ceremonial-tech outfit), (clockwork embellishments)", desc: "機械装飾ドレスやメカ要素入り衣装にしたい時向け" }
  ];

  const WORN_LIVEDIN_DATA = [
    { label: "Subtle Wrinkles & Soft Wear", val: "(subtle wrinkles:1.2), (softened cloth folds), (slight fabric wear), (natural garment creasing)", desc: "新品すぎない自然な使用感を足したい時向け" },
    { label: "Worn Fabric & Lived-In Texture", val: "(worn fabric:1.2), (lived-in texture:1.2), (everyday cloth wear), (soft aged textile feel)", desc: "旅や生活に馴染んだ衣装へ寄せたい時向け" },
    { label: "Polished Edges & Veteran Finish", val: "(polished edges), (handled garment finish), (experienced outfit wear), (refined worn accents)", desc: "使い込まれた端や仕上がりの渋さを出したい時向け" },
    { label: "Slight Fraying & Time Marks", val: "(slight fraying), (time-worn details), (aged trim accents), (minor wear marks)", desc: "端のほつれや時間の痕跡を少し足したい時向け" },
    { label: "Battle-Worn Trim", val: "(battle-worn trim:1.2), (weathered costume edges), (veteran garment details), (used formalwear accents)", desc: "歴戦感や戦場帰りの衣装ニュアンスを足したい時向け" }
  ];

  const PATTERN_MOTIF_DATA = [
    { label: "Floral Pattern & Bloom Motifs", val: "(floral pattern:1.2), (bloom motifs), (flower ornament pattern), (petal-inspired textile design)", desc: "花柄や華やかな植物モチーフを足したい時向け" },
    { label: "Brocade & Regal Textile Pattern", val: "(brocade pattern:1.2), (regal textile motifs), (ornamental woven pattern), (luxury fabric patterning)", desc: "織り柄や高級生地の模様を強めたい時向け" },
    { label: "Geometric & Structured Motifs", val: "(geometric motif:1.2), (structured decorative pattern), (clean repeating textile design), (graphic garment motifs)", desc: "幾何学的で整った模様を入れたい時向け" },
    { label: "Celestial & Star Motifs", val: "(celestial motif:1.2), (star pattern accents), (cosmic decorative symbols), (moon and star garment details)", desc: "星や月の幻想的モチーフを足したい時向け" },
    { label: "Dragon & Beast Emblems", val: "(dragon motif:1.2), (beast emblem pattern), (mythic creature insignia), (power-symbol garment accents)", desc: "龍紋や獣紋で格や迫力を出したい時向け" },
    { label: "Snowflake & Winter Pattern", val: "(snowflake pattern:1.2), (winter textile motifs), (frost ornament design), (icy garment accents)", desc: "雪柄や冬の冷たい意匠を入れたい時向け" },
    { label: "Lace Pattern & Filigree Motifs", val: "(lace pattern:1.2), (filigree motif), (delicate ornamental patterning), (fine decorative lace design)", desc: "レース柄や細密な意匠を強めたい時向け" },
    { label: "Tribal & Ancient Symbol Pattern", val: "(tribal pattern:1.2), (ancient symbol motifs), (ritual textile markings), (primitive ornamental design)", desc: "部族紋や古代記号で世界観を濃くしたい時向け" }
  ];


  // ========================================================
  // 🏪 Commercial Product Mode (adds "productization" pressure; additive, no replacement)
  // ========================================================
  const COMMERCIAL_MODE_DATA = [
    { label: "🎁 フィギュア完全商品化 (Figure)", val: "product photography, studio lighting, softbox lighting, seamless white background, macro lens product shot, retail catalog shot, 1/7 scale collectible figure, premium collectible, pre-painted figure, detailed sculpt, injection molded details, visible seam lines, subtle mold lines, clear coat finish, matte and gloss contrast, display base, engraved nameplate", desc: "完成フィギュアの商品写真っぽく仕上げたい時向け" },
    { label: "🧊 アクリルスタンド商品 (Acrylic Stand)", val: "acrylic stand product, clear acrylic plate, transparent material, transparent edges, laser cut acrylic, printed acrylic surface, double-sided print, small detachable base, product mockup, isolated on white, studio product photo", desc: "アクスタ商品や透明グッズ化を想定したい時向け" },
    { label: "🧸 ラバーストラップ商品 (Rubber Strap)", val: "rubber strap merchandise, silicone material, matte silicone texture, molded rubber edges, flat simplified design, thick outline, keychain loop, metal keychain ring, product photography, white seamless background, retail packaging mockup", desc: "ラバストやキーホルダー商品へ寄せたい時向け" },
    { label: "🪙 缶バッジ商品 (Pin Badge)", val: "metal pin badge, circular button badge, glossy lamination, reflective metal edge, printed badge surface, product mockup, studio product photography, isolated on white, clean catalog shot", desc: "缶バッジ商品や小型グッズに見せたい時向け" },
    { label: "📦 パッケージ演出 (Packaging)", val: "retail packaging, window box packaging, clear plastic blister packaging, blister tray, cardboard backing, hanging retail hook, barcode label, SKU label, warning label, authenticity hologram sticker, limited edition sticker seal", desc: "箱や包装まで含めた商品演出を足したい時向け" },
    { label: "🛒 EC物撮り用 (E-commerce)", val: "e-commerce product listing style, isolated on white, true color reproduction, clean catalog layout, product title header, price badge overlay, star rating icon overlay, thumbnail gallery strip, commercial product photo, studio lighting", desc: "ECサイトの商品一覧や物撮り風にしたい時向け" }
  ];

  // ========================================================
  // ✅ New: Link-based Presets (Quality core only, links choose Lighting/Post/etc.)
  // ========================================================
  const LINK_PRESET_DATA = [
    {
      label: "🎬 シネマティック・核 (Link Preset)",
      val: "(masterpiece), (best quality), (ultra high resolution), (intricate details)",
      links: ["cinematic lighting", "volumetric lighting", "ray tracing", "depth of field", "bokeh"],
      desc: "映画っぽい核を選ぶだけで他棚も連動させたい時向け"
    },
    {
      label: "🌸 パステル・繊細 (Link Preset)",
      val: "(masterpiece), (best quality), (highres), (ultra-detailed)",
      links: ["pastel colors", "pale colors", "soft edges", "smooth gradients"],
      desc: "淡色でやわらかな世界観へ一気に寄せたい時向け"
    },
    {
      label: "💎 クリスタル瞳・髪 (Link Preset)",
      val: "(masterpiece), (best quality), (highres), (extremely detailed)",
      links: ["crystal eyes", "jewelry eyes", "crystal hair", "sparkle hair"],
      desc: "瞳と髪の宝石感をまとめて足したい時向け"
    },
    {
      label: "🫧 夢幻ブースト (Link Preset)",
      val: "(masterpiece), (best quality), (highres), (ultra-detailed)",
      links: ["dreamy painting", "romantic atmosphere", "illusion effect", "sense of depth"],
      desc: "夢幻・ロマン・奥行き感をまとめて足したい時向け"
    }
  ];

  // ========================================================
  // Link engine (reference counting to avoid accidental uncheck)
  // ========================================================
  // ========================================================
  // 🔗 Link engine (internal only, NO checkbox toggling)
  // - Prevents chain reactions with existing auto-link systems
  // - Uses reference counting so multiple presets can share the same link tag safely
  // ========================================================
  function ensureLinkStateStore() {
    if (!window.__QP_LINK_INTERNAL) window.__QP_LINK_INTERNAL = { counts: new Map() };
    return window.__QP_LINK_INTERNAL;
  }

  function addLinks(links) {
    const st = ensureLinkStateStore();
    (links || []).forEach(tag => {
      const t = String(tag || "").trim();
      if (!t) return;
      const cur = st.counts.get(t) || 0;
      st.counts.set(t, cur + 1);
    });
  }

  function removeLinks(links) {
    const st = ensureLinkStateStore();
    (links || []).forEach(tag => {
      const t = String(tag || "").trim();
      if (!t) return;
      const cur = st.counts.get(t) || 0;
      const next = cur - 1;
      if (next <= 0) st.counts.delete(t);
      else st.counts.set(t, next);
    });
  }

  function getLinkedTags() {
    const st = ensureLinkStateStore();
    return Array.from(st.counts.keys());
  }

  // =========================
  // Quality Booster core (scoped to Quality section tags)
  // =========================
  var __QB_STORAGE_KEY = "qp_quality_booster_mode_v1";
  function qbGetMode(){
    try { return (localStorage.getItem(__QB_STORAGE_KEY) || "normal"); } catch(e){ return "normal"; }
  }
  function qbSetMode(mode){
    try { localStorage.setItem(__QB_STORAGE_KEY, mode || "normal"); } catch(e){}
  }
  function qbApplyModeToString(s){
    if(!s || typeof s !== "string") return s;
    var mode = qbGetMode();
    var t = s;

    // Normalize whitespace
    t = t.replace(/\s+/g, " ").trim();

    // Always: if user already has masterpiece:1.4, don't add again
    var hasMaster14 = /\(\s*masterpiece\s*:\s*1\.4\s*\)/i.test(t);

    if(mode === "normal"){
      // no-op
      return t;
    }

    // Common cleanup: remove duplicate plain 'masterpiece' token when extreme/enhanced will add/keep weighted one
    if(mode === "enhanced" || mode === "extreme"){
      t = t
        .replace(/(^|[,(\s])masterpiece([,\)\s]|$)/ig, "$1")
        .replace(/\s+,/g, ",")
        .replace(/,\s*,/g, ",")
        .replace(/^,\s*/,"")
        .trim();
    }

    // Replace best quality -> highest quality (keep weight if provided)
    if(mode === "enhanced" || mode === "extreme"){
      t = t.replace(/\(\s*best quality\s*:\s*([0-9.]+)\s*\)/ig, function(_, w){
        return "(highest quality:" + w + ")";
      });
      t = t.replace(/\bbest quality\b/ig, "highest quality");
    }

    if(mode === "extreme"){
      // If the string already contains any of the extreme signature tokens, don't prepend again.
      var hasAbsurd = /\babsurdres\b/i.test(t);
      var hasHQ = /\bhighest quality\b/i.test(t) || /\(\s*highest quality\s*:\s*[0-9.]+\s*\)/i.test(t);

      var prefixParts = [];
      if(!hasMaster14) prefixParts.push("(masterpiece:1.4)");
      if(!hasHQ) prefixParts.push("highest quality");
      if(!/\bultra detailed\b/i.test(t)) prefixParts.push("ultra detailed");
      if(!hasAbsurd) prefixParts.push("absurdres");
      if(!/\(\s*highres\s*\)/i.test(t) && !/\bhighres\b/i.test(t)) prefixParts.push("(highres)");
      if(!/\(\s*8k\s*\)/i.test(t) && !/\b8k\b/i.test(t)) prefixParts.push("(8k)");

      if(prefixParts.length){
        if(t) t = prefixParts.join(", ") + ", " + t;
        else t = prefixParts.join(", ");
      }
    }

    // Final trim commas
    t = t.replace(/\s+,/g, ",").replace(/,\s*,/g, ",").replace(/^,\s*/,"").replace(/,\s*$/,"").trim();
    return t;
  }

  function qbCollectQualityTags(){
    var root = document.getElementById("qp-quality-content");
    if(!root) return [];
    var selected = root.querySelectorAll('input:checked, select, textarea');
    var out = [];
    for(var i=0;i<selected.length;i++){
      var el = selected[i];

      // Exclude the booster radios themselves
      if(el.tagName === "INPUT" && el.type === "radio" && el.name === "quality-booster-mode") continue;

      // Only harvest elements that look like prompt-tag inputs
      var val = (el.getAttribute && (el.getAttribute("data-value") || el.getAttribute("data-tag"))) || (el.dataset && (el.dataset.value || el.dataset.tag)) || el.value;

      if(!val) continue;

      // Exclude UI/control-only values
      if(val === "on" || val === "off" || val === "normal" || val === "enhanced" || val === "extreme") continue;

      // Skip pure numbers etc
      if(typeof val === "string"){
        val = val.trim();
        if(!val) continue;
      }
      out.push(val);
    }

    // Apply mode transform + de-dup
    var dedup = {};
    var res = [];
    for(var j=0;j<out.length;j++){
      var t = qbApplyModeToString(out[j]);
      if(!t) continue;
      if(dedup[t]) continue;
      dedup[t] = 1;
      res.push(t);
    }
    return res;
  }



  function wirePresetCheckboxLinks(presetContainer) {
    // Read links from dataset (set by UI builder) and store internally only.
    presetContainer.querySelectorAll("input[type='checkbox'][data-links]").forEach(cb => {
      cb.addEventListener("change", () => {
        const links = (cb.dataset.linksInternal || "").split(",").map(s => s.trim()).filter(Boolean);
        if (cb.checked) addLinks(links);
        else removeLinks(links);
        if (window.__VISUAL_SYNC?.updateSelectedList) window.__VISUAL_SYNC.updateSelectedList();
      });
    });
  }

  const API = {
    initUI(container) {
      // ----------------------------------------------------
      // A) Render new categories into UI (Fine-Tune section)
      // ----------------------------------------------------
      const root = document.getElementById("qp-root-container");
      if (!root || !window.__QP_UTILS) return;

      if (!document.getElementById("qp-finetune")) {
        const secFine = window.__QP_UTILS.createMainSection("qp-finetune", "🧩 繊細・色・装飾 (Fine-Tune)");
        const conFine = secFine.querySelector(".qp-section-content");

        conFine.appendChild(window.__QP_UTILS.createSubAccordion("✏️ 線画・アニメ精密 (Line & Anime Detail)", LINE_DETAIL_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🎨 色味・パレット (Color Palette)", COLOR_PALETTE_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("💎 瞳・髪の装飾 (Eye & Hair Ornament)", ORNAMENT_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🌫 雰囲気ブースト (Atmosphere Booster)", ATMOSPHERE_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("👗 衣装ディテール特化 (Outfit Detail)", OUTFIT_DETAIL_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🧵 素材質感特化 (Material Texture Focus)", MATERIAL_TEXTURE_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("📐 シルエット・立体感特化 (Silhouette & Volume)", SILHOUETTE_VOLUME_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("💎 装飾小物・宝飾特化 (Accessory Density)", ACCESSORY_DENSITY_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🎯 衣装の見せ場特化 (Focal Parts)", FOCAL_PARTS_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🏛 世界観衣装ブースト (Worldwear Boost)", WORLDWEAR_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🕰 使用感・経年表現 (Worn & Lived-In)", WORN_LIVEDIN_DATA));
        conFine.appendChild(window.__QP_UTILS.createSubAccordion("🧿 模様・パターン特化 (Pattern & Motif)", PATTERN_MOTIF_DATA));

        // Insert before NEG trigger if exists, else append
        const negWrap = document.getElementById("qp-neg-trigger-wrap");
        if (negWrap && negWrap.parentNode) {
          negWrap.parentNode.insertBefore(secFine, negWrap);
        } else {
          root.appendChild(secFine);
        }
      }

      // ----------------------------------------------------
      // C) Add link-based presets into Quality section (no lighting/post in val)
      // ----------------------------------------------------
      const conQuality = document.getElementById("qp-quality-content");
      if (conQuality && !document.getElementById("qp-link-presets")) {
        const wrap = document.createElement("div");
        
  function createLinkPresetAccordion(title, items){
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
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
      // IMPORTANT: do NOT use data-links (core linkage toggles other checkboxes).
      if(item.links) cb.dataset.linksInternal = item.links.join(",");
      if(item.desc) label.title = item.desc;
      const main = document.createElement("div");
      main.className = "qp-item-main";
      const textSpan = document.createElement("span");
      textSpan.className = "qp-item-text";
      textSpan.textContent = item.label || `${item.ja}/${item.en}`;
      main.appendChild(cb);
      main.appendChild(textSpan);
      label.appendChild(main);
      if(item.desc){
        const desc = document.createElement("div");
        desc.className = "qp-item-desc";
        desc.textContent = item.desc;
        label.appendChild(desc);
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

wrap.id = "qp-link-presets";
        wrap.appendChild(createLinkPresetAccordion("🔗 リンク型プリセット (選ぶだけで他棚も連動)", LINK_PRESET_DATA));
        conQuality.appendChild(wrap);

        // 🏪 Commercial Product Mode (additive)
        if (!document.getElementById("qp-commercial-mode")) {
          const accCommercial = window.__QP_UTILS.createSubAccordion("🏪 商品レンダリング（Commercial Mode）", COMMERCIAL_MODE_DATA);
          accCommercial.id = "qp-commercial-mode";
          conQuality.appendChild(accCommercial);
        }

        // --- Quality Booster (Mode) ---
        (function(){
          const LS_KEY = "QUALITY_MODE_V1";
          const MODES = {
            normal: { label:"🟦 Normal (best quality)", replace:"best quality", desc:"まず標準の高品質で安定させたい時向け" },
            enhanced:{ label:"🟨 Enhanced (highest quality)", replace:"highest quality", desc:"best qualityより一段強く押し上げたい時向け" },
            // Keep this string WITHOUT leading parentheses so emphasized wrappers (e.g. "((best quality))")
            // can safely wrap it without producing "(((masterpiece...)".
            extreme:{ label:"🟥 Extreme (masterpiece+highest+absurdres)", replace:"", prepend:"(masterpiece:1.4), highest quality, ultra detailed, absurdres", desc:"限界まで品質を盛りたい時の危険域ブースト" }
          };

          function getMode(){
            return localStorage.getItem(LS_KEY) || window.__QUALITY_MODE || "normal";
          }
          function setMode(m){
            window.__QUALITY_MODE = m;
            localStorage.setItem(LS_KEY, m);
          }

          function showToast(text){
            let toast = document.getElementById("linkage-toast");
            if(!toast){
              toast = document.createElement("div");
              toast.id="linkage-toast";
              toast.style.cssText="position:fixed; left:50%; transform:translateX(-50%); bottom:90px; background:rgba(0,0,0,.85); color:#fff; padding:10px 14px; border-radius:10px; font-size:13px; z-index:99999; max-width:92vw; max-height:32vh; overflow:auto; box-sizing:border-box; text-align:left; line-height:1.35; white-space:pre-wrap; word-break:break-word;";
              document.body.appendChild(toast);
            }
            const t = (text||"").toString();
            toast.textContent = (t.length>180 ? (t.slice(0,180)+"…") : t);
            toast.classList.add("show");
            toast.style.display="block";
            clearTimeout(toast.__t);
            toast.__t=setTimeout(()=>{ toast.classList.remove("show"); toast.style.display="none"; }, 2500);
          }

          function applyModeToString(s){
            const mode = getMode();
            if(!s || mode==="normal") return s;

            // Always work on a string copy
            s = String(s);

            // Extreme mode should NOT duplicate masterpiece that already exists in other presets.
            if(mode==="extreme"){
              // remove standalone or weighted masterpiece tokens inside the string
              s = s.replace(/\(\s*masterpiece\s*(?::\s*[0-9.]+)?\s*\)/ig, "");
              s = s.replace(/\bmasterpiece\b/ig, "");
              // cleanup leftover commas/spaces from removals
              s = s.replace(/\s+,\s+/g, ", ").replace(/^\s*,\s*|\s*,\s*$/g, "").trim();
            }

            // Replace weighted and unweighted best quality tokens.
            const replPlain = (MODES[mode] && MODES[mode].replace) ? MODES[mode].replace : "highest quality";

            // 1) Handle emphasized variants like "((best quality:1.4))"
            s = s.replace(/(\(+)(\s*best\s+quality\s*:\s*([0-9.]+)\s*)(\)+)/ig, (m, lpar, inner, w, rpar)=>{
              const n = (lpar||"").length;
              const lead = "(".repeat(n);
              const tail = ")".repeat(n);
              if(mode==="enhanced") return `${lead}highest quality:${w}${tail}`;
              // In extreme mode, avoid creating odd "((masterpiece..." patterns by keeping the whole replacement
              // inside the same paren-depth as the original emphasized token.
              if(mode==="extreme") return "";
              return `${lead}best quality:${w}${tail}`;
            });

            // 2) Standard weighted: (best quality:1.3)
            s = s.replace(/\(\s*best\s+quality\s*:\s*([0-9.]+)\s*\)/ig, (m,w)=>{
              if(mode==="enhanced") return `(highest quality:${w})`;
              // Keep as a single parenthetical chunk to prevent stray commas and double-paren look.
              if(mode==="extreme") return `(masterpiece:1.4, highest quality:${w}, ultra detailed, absurdres)`;
              return `(best quality:${w})`;
            });

            // 3) Plain token: best quality
            s = s.replace(/\bbest\s+quality\b/ig, replPlain);

            // Final step for extreme: prepend the Extreme booster and avoid accidental commas
            if(mode==="extreme"){
              var prefix = MODES.extreme.prepend || "";
              var t = (s || "").trim();
              if(prefix){
                // If it doesn't already contain our extreme signature, prepend it.
                var hasMasterpiece14 = /^\(?\s*masterpiece:1\.4\b/i.test(t);
                var hasAbsurdres = /\babsurdres\b/i.test(t);
                if(t){
                  if(!hasMasterpiece14 && !hasAbsurdres){
                    t = prefix + ", " + t;
                  }
                }else{
                  t = prefix;
                }
              }
              s = t.replace(/\s+,\s+/g, ", ").replace(/^\s*,\s*|\s*,\s*$/g, "").trim();
            }
            return s;
          }

          function mountQualityBoosterUI(){
            if(document.getElementById("qp-quality-booster")) return;
            const host = document.getElementById("qp-quality-content");
            if(!host) return;

            const details = document.createElement("details");
            details.className="qp-sub-acc";
            details.open=false;

            const summary = document.createElement("summary");
            summary.textContent="🧪 Quality Booster (モード切替)";
            details.appendChild(summary);

            const box = document.createElement("div");
            box.className="qp-content-grid";

            const name="quality-booster-mode";
            const cur=getMode();

            Object.keys(MODES).forEach(k=>{
              const mode = MODES[k];
              const label=document.createElement("label");
              const r=document.createElement("input");
              r.type="radio";
              r.name=name;
              r.value=k;
              if(k===cur) r.checked=true;
              r.addEventListener("change", ()=>{
                if(!r.checked) return;
                setMode(k);
                showToast(`⚙️ Quality Booster: 「${mode.label}」に切り替えました`);
                if(window.__VISUAL_SYNC?.updateSelectedList) window.__VISUAL_SYNC.updateSelectedList();
              });
              const main = document.createElement("div");
              main.className = "qp-item-main";
              const textSpan = document.createElement("span");
              textSpan.className = "qp-item-text";
              textSpan.textContent = mode.label;
              main.appendChild(r);
              main.appendChild(textSpan);
              label.appendChild(main);
              if(mode.desc){
                const desc = document.createElement("div");
                desc.className = "qp-item-desc";
                desc.textContent = mode.desc;
                label.appendChild(desc);
              }
              box.appendChild(label);
            });

            details.appendChild(box);
            host.appendChild(details);
          }
          // init
          try{ mountQualityBoosterUI(); }catch(e){}
        })();


        // Attach link info to each preset checkbox
        // __QP_UTILS.createSubAccordion stores links into dataset.links if item.links exists
        wirePresetCheckboxLinks(wrap);
      }
    },
    getTags() { return getLinkedTags(); }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();



(function(){
// --- builder_ui.section.quality_preset.v12.js ---
(function(){
  "use strict";
  const VERSION = 12;
  const KEY = "quality_preset";

  const SPECIAL_COLLECTIONS = [
    {
      key: "motion",
      title: "🏃 動作・アクション特化プリセット",
      subtitle: "走る・跳ぶ・突進するなど、顔や質感よりも全身の動き・方向・迫力を優先したい時向け",
      complete: [
        {
          key: "motion_fullbody",
          label: "全身見せ・構図安定セット",
          val: "full body shot, clear limb visibility, balanced composition, clean silhouette, subject fully visible, stable action framing, readable pose, outfit readability",
          desc: "全身の形や衣装を崩さず、まず見やすく通したい時向け",
          links: ["motion_base_fullbody", "motion_cust_stable", "motion_set_beginner"]
        },
        {
          key: "motion_explosive",
          label: "動作演出・爆発力セット",
          val: "dynamic action shot, explosive motion, diagonal composition, dramatic perspective, action emphasis, powerful body line, intense movement, energetic frame",
          desc: "大きく派手な動きや一撃の勢いを見せたい時向け",
          links: ["motion_base_dynamic", "motion_cust_blur", "motion_set_power"]
        },
        {
          key: "motion_forward",
          label: "前進・突進セット",
          val: "forward motion, strong directional movement, leaning forward, aggressive perspective, speed emphasis, momentum, depth toward camera",
          desc: "前へ出る圧やスピード感を通したい時向け",
          links: ["motion_base_direction", "motion_cust_perspective", "motion_set_noface"]
        },
        {
          key: "motion_airborne",
          label: "跳躍・空中動作セット",
          val: "airborne action, mid-air pose, lifted silhouette, body extension, suspended motion, jump action, aerial energy, dynamic skyward framing",
          desc: "ジャンプや宙に浮く瞬間を見せたい時向け",
          links: ["motion_base_air", "motion_cust_upward", "motion_set_nocrop"]
        }
      ],
      base: [
        { key: "motion_base_fullbody", label: "全身を優先", val: "full body priority, subject fully visible, clean silhouette", desc: "頭から足先まで見せたい時向け" },
        { key: "motion_base_dynamic", label: "動きの芯を作る", val: "dynamic action, readable pose, strong body line", desc: "まず動いて見える土台を作りたい時向け" },
        { key: "motion_base_direction", label: "進行方向を明確化", val: "directional movement, forward energy, movement flow", desc: "どちらへ動いているかを分かりやすくしたい時向け" },
        { key: "motion_base_air", label: "空中姿勢を安定", val: "airborne pose, suspended body, floating action line", desc: "宙に浮いた形を崩しにくくしたい時向け" }
      ],
      customize: [
        { key: "motion_cust_stable", label: "破綻しにくい見せ方", val: "stable framing, proportional limbs, readable action silhouette", desc: "四肢崩れや読みづらさを減らしたい時向け" },
        { key: "motion_cust_blur", label: "モーションブラー感", val: "motion blur, speed trail, impact streaks", desc: "速度や爆発感を盛りたい時向け" },
        { key: "motion_cust_perspective", label: "遠近強調", val: "dramatic foreshortening, strong perspective, dynamic depth", desc: "手前と奥の圧を強めたい時向け" },
        { key: "motion_cust_upward", label: "跳躍の伸びを強調", val: "upward energy, extended body line, vertical lift emphasis", desc: "空へ伸びる勢いを見せたい時向け" }
      ],
      settings: [
        { key: "motion_set_beginner", label: "初心者向け安定寄り", val: "balanced action readability, stable composition", desc: "まず崩れにくさ重視で使いたい時向け" },
        { key: "motion_set_power", label: "迫力優先", val: "impact priority, action power emphasis", desc: "多少荒くても勢いを優先したい時向け" },
        { key: "motion_set_noface", label: "顔より動作優先", val: "action priority over portrait, movement first", desc: "顔アップに吸われにくくしたい時向け" },
        { key: "motion_set_nocrop", label: "手足の欠けを避ける", val: "avoid cropped limbs, keep full action figure in frame", desc: "端で切れやすい構図を避けたい時向け" }
      ]
    },
    {
      key: "sports",
      title: "🏊 スポーツ・競技特化プリセット",
      subtitle: "競泳・競技フォーム・スポーツ瞬間を、顔アップではなくフォームと前進感で通したい時向け",
      complete: [
        {
          key: "sports_butterfly",
          label: "バタフライ競泳セット",
          val: "competitive butterfly stroke, both arms recovering simultaneously above the water, chest lifted out of the water, full body swimming form, strong forward motion, powerful splash trail, sports photography angle",
          desc: "バタフライで両腕同時動作と体幹のうねりを見せたい時向け",
          links: ["sports_base_form", "sports_cust_splash", "sports_set_actionfirst"]
        },
        {
          key: "sports_freestyle",
          label: "クロール競泳セット",
          val: "freestyle swimming stroke, one arm extended forward, streamlined body, body roll, racing lane form, strong water-cutting motion, forward drive",
          desc: "クロールの流線型や水を切る前進感を見せたい時向け",
          links: ["sports_base_streamline", "sports_cust_speed", "sports_set_noportrait"]
        },
        {
          key: "sports_form",
          label: "全身フォーム見せセット",
          val: "full body athletic form, clear pose readability, balanced sports composition, training posture clarity, body line emphasis, full figure sports shot",
          desc: "スポーツ全般でフォームや姿勢を綺麗に見せたい時向け",
          links: ["sports_base_fullbody", "sports_cust_clean", "sports_set_beginner"]
        },
        {
          key: "sports_burst",
          label: "瞬発スポーツ動作セット",
          val: "explosive sports action, dynamic takeoff, rapid direction change, athletic burst, intense motion framing, action photography perspective",
          desc: "短距離・跳躍・瞬発系の競技へ広く使いたい時向け",
          links: ["sports_base_dynamic", "sports_cust_perspective", "sports_set_power"]
        }
      ],
      base: [
        { key: "sports_base_form", label: "競技フォームを優先", val: "athletic form priority, readable sports posture, full body sports form", desc: "まずフォームを通したい時向け" },
        { key: "sports_base_streamline", label: "流線型を優先", val: "streamlined body, clean movement flow, hydrodynamic body line", desc: "水泳やスピード競技で流れを見せたい時向け" },
        { key: "sports_base_fullbody", label: "全身可視を優先", val: "full figure sports shot, limb visibility, balanced body framing", desc: "体の使い方を見せたい時向け" },
        { key: "sports_base_dynamic", label: "競技の勢いを作る", val: "sports action energy, explosive athletic movement, direction clarity", desc: "静止ポーズに逃げにくくしたい時向け" }
      ],
      customize: [
        { key: "sports_cust_splash", label: "水しぶき強化", val: "powerful splash, water droplets, splash trail", desc: "競泳らしい水の暴れ方を足したい時向け" },
        { key: "sports_cust_speed", label: "スピード感強化", val: "speed emphasis, racing motion, momentum streaks", desc: "前進や速度の印象を強めたい時向け" },
        { key: "sports_cust_clean", label: "フォームの見やすさ強化", val: "clean action silhouette, readable limb placement, stable sports framing", desc: "崩れを減らして見やすくしたい時向け" },
        { key: "sports_cust_perspective", label: "競技カメラ感", val: "sports photography perspective, trackside angle, dynamic action camera", desc: "会場で撮ったような臨場感を足したい時向け" }
      ],
      settings: [
        { key: "sports_set_beginner", label: "初心者向け安定寄り", val: "stable sports readability, balanced athletic composition", desc: "まず綺麗に競技らしくしたい時向け" },
        { key: "sports_set_power", label: "躍動優先", val: "athletic intensity priority, action over portrait", desc: "動きの圧を優先したい時向け" },
        { key: "sports_set_actionfirst", label: "顔よりフォーム優先", val: "form priority over face, action first", desc: "顔アップに吸われにくくしたい時向け" },
        { key: "sports_set_noportrait", label: "ポートレート化を抑える", val: "avoid portrait framing, avoid close-up crop, keep sports action visible", desc: "接写寄りになりやすい時の補助向け" }
      ]
    },
    {
      key: "combat",
      title: "🥊 格闘・戦闘特化プリセット",
      subtitle: "パンチ・蹴り・組み合い・武器振り抜きなど、ただ立つだけで終わらせず戦闘動作を通したい時向け",
      complete: [
        {
          key: "combat_strike",
          label: "打撃アクションセット",
          val: "striking action, punch and kick motion, hip rotation, impact emphasis, aggressive combat framing, dynamic combat pose, attack momentum",
          desc: "パンチ・キック・踏み込みを見せたい時向け",
          links: ["combat_base_strike", "combat_cust_impact", "combat_set_actionfirst"]
        },
        {
          key: "combat_grapple",
          label: "組み技・接触戦セット",
          val: "grappling motion, body contact, clinch action, close-quarters combat, balance struggle, locked bodies, physical contest",
          desc: "組みつきや押し合い、近接の密度を出したい時向け",
          links: ["combat_base_contact", "combat_cust_balance", "combat_set_readable"]
        },
        {
          key: "combat_weapon",
          label: "武器振り抜きセット",
          val: "weapon swing motion, follow-through action, directional slash arc, dynamic combat perspective, attack trajectory, battle energy",
          desc: "剣や槍などの振り抜き動作を見せたい時向け",
          links: ["combat_base_weapon", "combat_cust_arc", "combat_set_power"]
        },
        {
          key: "combat_standoff",
          label: "対峙・緊張セット",
          val: "combat-ready posture, standoff tension, confrontational framing, pre-strike atmosphere, readable distance between opponents, duel mood",
          desc: "斬り結ぶ直前の緊張や対峙の空気を見せたい時向け",
          links: ["combat_base_distance", "combat_cust_tension", "combat_set_beginner"]
        }
      ],
      base: [
        { key: "combat_base_strike", label: "打撃の軸を作る", val: "striking posture, attack line clarity, rotational body action", desc: "打撃の体幹や軸足を見せたい時向け" },
        { key: "combat_base_contact", label: "接触戦の密度を作る", val: "close body contact, grappling pressure, contested balance", desc: "組み技や密着戦を見せたい時向け" },
        { key: "combat_base_weapon", label: "武器動作の流れを作る", val: "weapon motion flow, follow-through line, attack direction clarity", desc: "剣戟の流れを通したい時向け" },
        { key: "combat_base_distance", label: "対峙距離を見せる", val: "combat spacing, duel distance, readable opponent placement", desc: "向かい合う関係性を見せたい時向け" }
      ],
      customize: [
        { key: "combat_cust_impact", label: "衝撃演出", val: "impact burst, strike emphasis, hit shock", desc: "当たりの重さを足したい時向け" },
        { key: "combat_cust_balance", label: "重心争い強化", val: "balance struggle, weight shift, pushing force", desc: "押し合い・崩し合いの感じを出したい時向け" },
        { key: "combat_cust_arc", label: "振り抜き軌道強化", val: "attack arc, slash trail, motion trajectory", desc: "武器の軌跡を分かりやすくしたい時向け" },
        { key: "combat_cust_tension", label: "緊張感強化", val: "high tension atmosphere, pre-impact silence, duel pressure", desc: "ぶつかる前の空気を濃くしたい時向け" }
      ],
      settings: [
        { key: "combat_set_beginner", label: "初心者向け安定寄り", val: "readable combat composition, stable duel framing", desc: "まず見やすく戦闘らしくしたい時向け" },
        { key: "combat_set_power", label: "迫力優先", val: "combat intensity priority, impact first", desc: "多少荒くても勢いを優先したい時向け" },
        { key: "combat_set_actionfirst", label: "顔より戦闘優先", val: "combat action priority over face, fight first", desc: "イケ顔ポートレート化を抑えたい時向け" },
        { key: "combat_set_readable", label: "状況の読みやすさ優先", val: "clear combat readability, understandable body positions", desc: "何が起きているか分かりやすくしたい時向け" }
      ]
    },
    {
      key: "composition",
      title: "📸 構図・見せ方特化プリセット",
      subtitle: "顔寄せ・全身見せ・ローアングル・俯瞰など、切り取り方を完成セットとして一発で選びたい時向け",
      complete: [
        {
          key: "composition_portrait",
          label: "顔寄せ・上半身セット",
          val: "cinematic portrait crop, close framing, upper body focus, face emphasis, shallow depth of field, portrait composition",
          desc: "顔や上半身を主役にしたい時向け",
          links: ["composition_base_face", "composition_cust_dof", "composition_set_beginner"]
        },
        {
          key: "composition_fullbody",
          label: "全身見せセット",
          val: "full body shot, clean silhouette, long shot, subject fully visible, outfit readability, balanced full figure composition",
          desc: "衣装やポーズ全体を見せたい時向け",
          links: ["composition_base_fullbody", "composition_cust_clean", "composition_set_nocrop"]
        },
        {
          key: "composition_lowangle",
          label: "ローアングル映えセット",
          val: "low angle shot, heroic framing, dramatic perspective, vertical emphasis, powerful presence, upward camera angle",
          desc: "迫力や存在感を下から煽って見せたい時向け",
          links: ["composition_base_low", "composition_cust_perspective", "composition_set_power"]
        },
        {
          key: "composition_highangle",
          label: "俯瞰・俯角セット",
          val: "high angle shot, top-down feeling, layered depth, delicate spacing, scene overview, downward camera angle",
          desc: "上から眺める構図や全体の配置を見せたい時向け",
          links: ["composition_base_high", "composition_cust_layers", "composition_set_readable"]
        }
      ],
      base: [
        { key: "composition_base_face", label: "顔主役の土台", val: "face emphasis, upper body priority, portrait framing", desc: "顔を主役にしたい時向け" },
        { key: "composition_base_fullbody", label: "全身主役の土台", val: "full figure priority, complete silhouette, body readability", desc: "全身を主役にしたい時向け" },
        { key: "composition_base_low", label: "下から煽る土台", val: "low angle framing, upward perspective, towering subject", desc: "下からの迫力を出したい時向け" },
        { key: "composition_base_high", label: "上から俯瞰する土台", val: "high angle composition, top-down spacing, overview framing", desc: "俯瞰の配置感を作りたい時向け" }
      ],
      customize: [
        { key: "composition_cust_dof", label: "背景ボケ強化", val: "depth of field, bokeh, blurred background", desc: "被写体を前へ出したい時向け" },
        { key: "composition_cust_clean", label: "見切れ抑制", val: "clean framing, keep full subject visible, no awkward crop", desc: "端で切れにくくしたい時向け" },
        { key: "composition_cust_perspective", label: "遠近強化", val: "dramatic perspective, depth emphasis, foreshortening", desc: "迫力のある奥行きを足したい時向け" },
        { key: "composition_cust_layers", label: "前後レイヤー強化", val: "foreground background layering, scene depth, layered composition", desc: "空間の重なりを見せたい時向け" }
      ],
      settings: [
        { key: "composition_set_beginner", label: "初心者向け安定寄り", val: "balanced composition, stable framing", desc: "まず破綻しにくくしたい時向け" },
        { key: "composition_set_power", label: "迫力優先", val: "dramatic framing priority, intensity over neutrality", desc: "映えを優先したい時向け" },
        { key: "composition_set_readable", label: "状況の読みやすさ優先", val: "scene readability priority, composition clarity", desc: "何を見せたいか分かりやすくしたい時向け" },
        { key: "composition_set_nocrop", label: "欠け・切れ抑制", val: "avoid cropped subject, keep full composition readable", desc: "手足や衣装が切れやすい時向け" }
      ]
    }
  ];

  function ensureSpecialCollectionStyles(){
    if (document.getElementById("qp-special-collections-style")) return;
    const css = `
      #qp-special-collections-group{margin:12px 0 16px 0;}
      #qp-special-collections-group .qp-special-heading{margin:6px 0 8px 0; font-size:12px; font-weight:700; color:#475569;}
      #qp-special-collections-group .qp-special-guide{margin:0 0 10px 0; padding:10px 12px; border:1px solid #dbe7f5; border-radius:10px; background:#f8fbff; color:#475569; font-size:12px; line-height:1.6;}
      #qp-special-collections-group .qp-special-collection-summary-note{margin:0 0 8px 0; padding:8px 10px; border:1px solid #e5e7eb; border-radius:10px; background:#ffffff; color:#6b7280; font-size:12px; line-height:1.55;}
      #qp-special-collections-group .qp-special-collection,
      #qp-special-collections-group .qp-special-sub{width:100% !important; box-sizing:border-box !important;}
      #qp-special-collections-group .qp-special-collection-body,
      #qp-special-collections-group details[open] > .qp-special-collection-body,
      #qp-special-collections-group .qp-special-collection-list,
      #qp-special-collections-group details[open] > .qp-special-collection-list{display:block !important; grid-template-columns:1fr !important; grid-auto-flow:row !important; width:100% !important; max-width:100% !important; padding:8px !important; box-sizing:border-box !important;}
      #qp-special-collections-group .qp-special-collection-list label{display:block !important; width:100% !important; max-width:100% !important; box-sizing:border-box !important; padding:10px 12px !important; margin:0 0 8px 0 !important; border-radius:10px !important; border:1px solid #e5e7eb !important; background:#fff !important;}
      #qp-special-collections-group .qp-special-collection-list label:last-child{margin-bottom:0 !important;}
      #qp-special-collections-group .qp-special-collection-list .qp-item-main{display:flex !important; align-items:flex-start !important;}
      #qp-special-collections-group .qp-special-collection-list .qp-item-desc{display:block !important; margin-top:6px !important; margin-left:28px !important; font-size:11px !important; line-height:1.55 !important; color:#6b7280 !important;}
      #qp-special-collections-group .qp-special-collection-list input[type="checkbox"]{transform:scale(1.06); margin-right:8px;}
      #qp-special-collections-group .qp-special-divider{height:1px; border:0; background:linear-gradient(90deg, rgba(148,163,184,0), rgba(148,163,184,.55), rgba(148,163,184,0)); margin:8px 0 10px 0;}
    `;
    const style = document.createElement("style");
    style.id = "qp-special-collections-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function createCollectionOption(item, collectionKey, role){
    const label = document.createElement("label");
    const main = document.createElement("div");
    main.className = "qp-item-main";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.val = item.val || item.en || "";
    cb.dataset.specialCollectionKey = collectionKey;
    cb.dataset.specialRole = role;
    cb.dataset.specialItemKey = item.key || "";
    if (role === "complete") {
      cb.dataset.specialComplete = "1";
      cb.dataset.specialLinks = (item.links || []).join(",");
    }
    cb.id = `qp-sc-${collectionKey}-${item.key}`;
    const textSpan = document.createElement("span");
    textSpan.className = "qp-item-text";
    textSpan.textContent = item.label || "";
    main.appendChild(cb);
    main.appendChild(textSpan);
    label.appendChild(main);
    if (item.desc) {
      const desc = document.createElement("div");
      desc.className = "qp-item-desc";
      desc.textContent = item.desc;
      label.appendChild(desc);
    }
    return label;
  }

  function createCollectionSubAccordion(collectionKey, title, role, items){
    const details = document.createElement("details");
    details.className = "qp-sub-acc qp-special-sub";
    details.open = false;
    details.dataset.specialCollectionKey = collectionKey;
    details.dataset.specialRole = role;
    const summary = document.createElement("summary");
    summary.textContent = title;
    details.appendChild(summary);
    const body = document.createElement("div");
    body.className = "qp-special-collection-list";
    items.forEach(item => body.appendChild(createCollectionOption(item, collectionKey, role)));
    details.appendChild(body);
    return details;
  }

  function createCollectionAccordion(def){
    const details = document.createElement("details");
    details.className = "qp-sub-acc qp-special-collection";
    details.open = false;
    details.dataset.specialCollectionKey = def.key;
    const summary = document.createElement("summary");
    summary.textContent = def.title;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "qp-special-collection-body";
    if (def.subtitle) {
      const note = document.createElement("div");
      note.className = "qp-special-collection-summary-note";
      note.textContent = def.subtitle;
      body.appendChild(note);
    }
    body.appendChild(createCollectionSubAccordion(def.key, "🎯 完成セット", "complete", def.complete || []));
    body.appendChild(createCollectionSubAccordion(def.key, "🧱 ベース", "base", def.base || []));
    body.appendChild(createCollectionSubAccordion(def.key, "🎛 カスタマイズ", "customize", def.customize || []));
    body.appendChild(createCollectionSubAccordion(def.key, "⚙ 設定", "setting", def.settings || []));
    details.appendChild(body);
    return details;
  }

  function wireSpecialCollections(groupRoot, conQuality){
    if (!groupRoot || groupRoot.dataset.specialCollectionsWired === "1") return;
    groupRoot.dataset.specialCollectionsWired = "1";

    const checkboxMap = new Map();
    groupRoot.querySelectorAll('input[type="checkbox"][data-special-item-key]').forEach(cb => {
      checkboxMap.set(cb.dataset.specialItemKey, cb);
    });

    const collectionKeys = Array.from(new Set(Array.from(groupRoot.querySelectorAll('[data-special-collection-key]')).map(el => el.dataset.specialCollectionKey).filter(Boolean)));
    const generalPresetCbs = Array.from(conQuality.querySelectorAll('input[type="checkbox"][data-qp-preset-group="quality-presets"]'));
    let isApplyingCompleteSet = false;

    function syncVisual(){
      try { if (window.__VISUAL_SYNC?.updateSelectedList) window.__VISUAL_SYNC.updateSelectedList(); } catch(e){}
    }

    function getCollectionContainer(key){
      return groupRoot.querySelector(`details.qp-special-collection[data-special-collection-key="${key}"]`);
    }

    function getSubAccordion(key, role){
      const root = getCollectionContainer(key);
      if (!root) return null;
      return root.querySelector(`details.qp-special-sub[data-special-role="${role}"]`);
    }

    function getCompleteCheckboxes(key){
      return Array.from(groupRoot.querySelectorAll(`input[type="checkbox"][data-special-complete="1"][data-special-collection-key="${key}"]`));
    }

    function getLowerCheckboxes(key){
      return Array.from(groupRoot.querySelectorAll(`input[type="checkbox"][data-special-collection-key="${key}"]:not([data-special-complete="1"])`));
    }

    function clearGeneralQualityPresets(){
      generalPresetCbs.forEach(cb => {
        if (cb.checked) {
          cb.checked = false;
          cb.dispatchEvent(new Event("change", { bubbles:true }));
        }
      });
    }

    function clearCollectionLinkedState(key){
      getLowerCheckboxes(key).forEach(cb => {
        if (cb.checked) {
          cb.checked = false;
          cb.dispatchEvent(new Event("change", { bubbles:true }));
        }
      });
    }

    function clearCollectionState(key){
      getCompleteCheckboxes(key).forEach(cb => {
        if (cb.checked) {
          cb.checked = false;
        }
      });
      clearCollectionLinkedState(key);
    }

    function openCollectionPath(key, linkedKeys){
      const root = getCollectionContainer(key);
      if (root) root.open = true;
      const completeAcc = getSubAccordion(key, "complete");
      if (completeAcc) completeAcc.open = true;
      (linkedKeys || []).forEach(itemKey => {
        const target = checkboxMap.get(itemKey);
        if (!target) return;
        const parentDetails = target.closest('details.qp-special-sub');
        if (parentDetails) parentDetails.open = true;
      });
    }

    function applyCompleteSet(cb){
      const key = cb.dataset.specialCollectionKey;
      const links = (cb.dataset.specialLinks || "").split(",").map(s => s.trim()).filter(Boolean);
      if (cb.checked) {
        isApplyingCompleteSet = true;
        try {
          clearGeneralQualityPresets();
          collectionKeys.forEach(otherKey => {
            if (otherKey !== key) clearCollectionState(otherKey);
          });
          getCompleteCheckboxes(key).forEach(other => {
            if (other !== cb) other.checked = false;
          });
          clearCollectionLinkedState(key);
          links.forEach(itemKey => {
            const target = checkboxMap.get(itemKey);
            if (target && !target.checked) {
              target.checked = true;
              target.dispatchEvent(new Event("change", { bubbles:true }));
            }
          });
          openCollectionPath(key, links);
        } finally {
          isApplyingCompleteSet = false;
        }
      } else {
        isApplyingCompleteSet = true;
        try {
          clearCollectionLinkedState(key);
        } finally {
          isApplyingCompleteSet = false;
        }
      }
      syncVisual();
    }

    groupRoot.querySelectorAll('input[type="checkbox"][data-special-complete="1"]').forEach(cb => {
      cb.addEventListener("change", () => applyCompleteSet(cb));
    });

    groupRoot.querySelectorAll('input[type="checkbox"][data-special-role]:not([data-special-complete="1"])').forEach(cb => {
      cb.addEventListener("change", () => {
        if (isApplyingCompleteSet) {
          syncVisual();
          return;
        }
        const key = cb.dataset.specialCollectionKey;
        const activeComplete = getCompleteCheckboxes(key).find(x => x.checked);
        if (activeComplete) {
          activeComplete.checked = false;
          activeComplete.dispatchEvent(new Event("change", { bubbles:true }));
        }
        syncVisual();
      });
    });

    generalPresetCbs.forEach(cb => {
      if (cb.dataset.specialCollectionsHooked === "1") return;
      cb.dataset.specialCollectionsHooked = "1";
      cb.addEventListener("change", () => {
        if (!cb.checked) return;
        collectionKeys.forEach(key => clearCollectionState(key));
        syncVisual();
      });
    });
  }

  const API = {
    initUI(container) {
      ensureSpecialCollectionStyles();
      const root = document.getElementById("qp-root-container");
      const conQuality = document.getElementById("qp-quality-content");
      if (!root || !conQuality) return;
      if (document.getElementById("qp-special-collections-group")) {
        wireSpecialCollections(document.getElementById("qp-special-collections-group"), conQuality);
        return;
      }

      const group = document.createElement("div");
      group.id = "qp-special-collections-group";

      const divider = document.createElement("hr");
      divider.className = "qp-special-divider";
      group.appendChild(divider);

      const heading = document.createElement("div");
      heading.className = "qp-special-heading";
      heading.textContent = "🧩 特化プリセット";
      group.appendChild(heading);

      const guide = document.createElement("div");
      guide.className = "qp-special-guide";
      guide.textContent = "動作・競技・戦闘・構図のように、通しにくい題材を完成セット基準で組み直す区画です。完成セットを選ぶと同じプリセット内の下位棚を自動で入れ替えます。顔アップや静止ポーズへ吸われやすい時の一発救済向け。";
      group.appendChild(guide);

      SPECIAL_COLLECTIONS.forEach(def => group.appendChild(createCollectionAccordion(def)));

      const anchor = document.getElementById("qp-link-presets") || document.getElementById("qp-commercial-mode");
      if (anchor && anchor.parentNode === conQuality) conQuality.insertBefore(group, anchor);
      else conQuality.appendChild(group);

      wireSpecialCollections(group, conQuality);
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
// --- builder_ui.section.quality_preset.v13.js ---
(function(){
  "use strict";
  const VERSION = 13;
  const KEY = "quality_preset";

  function ensureQualitySingleColumnStyles(){
    if(document.getElementById("qp-quality-singlecolumn-style")) return;
    const style = document.createElement("style");
    style.id = "qp-quality-singlecolumn-style";
    style.textContent = `
      #qp-quality-content,
      #qp-quality details[open] > #qp-quality-content,
      .quality-preset-integrated #qp-quality-content {
        display:block !important;
        grid-template-columns:1fr !important;
        grid-auto-flow:row !important;
        width:100% !important;
        max-width:100% !important;
        box-sizing:border-box !important;
      }
      #qp-quality-content > *,
      #qp-quality-content > details,
      #qp-quality-content > div {
        display:block !important;
        width:100% !important;
        max-width:100% !important;
        box-sizing:border-box !important;
        grid-column:1 / -1 !important;
      }
      #qp-quality-content > details.qp-sub-acc,
      #qp-quality-content > details.qp-subacc,
      #qp-quality-content > div#qp-special-collections-group {
        margin-left:0 !important;
        margin-right:0 !important;
      }
      #qp-special-collections-group,
      #qp-special-collections-group .qp-special-collection,
      #qp-special-collections-group .qp-special-sub {
        width:100% !important;
        max-width:100% !important;
        box-sizing:border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  const API = {
    initUI(container){
      ensureQualitySingleColumnStyles();
      const conQuality = document.getElementById("qp-quality-content");
      if(!conQuality) return;
      conQuality.style.display = "block";
      conQuality.style.width = "100%";
      Array.from(conQuality.children || []).forEach(el => {
        try{
          el.style.display = "block";
          el.style.width = "100%";
          el.style.maxWidth = "100%";
          el.style.boxSizing = "border-box";
        }catch(e){}
      });
    },
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
