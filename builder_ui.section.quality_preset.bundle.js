// Auto-generated bundle for section 'quality_preset'
// Contains 11 versions stacked in ascending order.

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
      { label: "シネマティックカメラブースト", val: "(dynamic camera angle), (cinematic framing), (camera tilt), (depth of field:1.1), (foreground framing), (shot composition emphasis), (lens compression), (visual storytelling shot), (dramatic perspective)", desc: "画角・構図・映画的ショット感を足す加算用ブースト（文字数:203）" },
      { label: "バストアップブースト", val: "(bust-up composition), (chest-up framing), (face and shoulders emphasis), (portrait crop), (expressive upper body shot), (upper torso focus), (close character presentation), (intimate framing)", desc: "バストアップ寄りの見せ方を強める加算用ブースト。表情と上半身を見せたい時向け（文字数:192）", links: ["Bust-up", "Upper Body", "Portrait", "Framing"], addOn: true, role: "boost" },
      { label: "全身構図ブースト", val: "(full body composition), (head-to-toe framing), (complete character silhouette), (full figure emphasis), (standing pose visibility), (costume visibility), (balanced full-body framing), (character proportion clarity)", desc: "全身をきれいに収める加算用ブースト。衣装やポーズを見せたい時向け（文字数:215）", links: ["Full Body", "Silhouette", "Costume", "Pose"], addOn: true, role: "boost" },
      { label: "ローアングルブースト", val: "(low angle shot), (upward camera view), (powerful perspective), (dramatic foreshortening), (heroic angle), (towering composition), (visual impact through angle), (strong upward emphasis)", desc: "ローアングルの迫力を足す加算用ブースト。強さや支配感を出したい時向け（文字数:186）", links: ["Low Angle", "Perspective", "Foreshortening", "Heroic"], addOn: true, role: "boost" },
      { label: "見上げ構図ブースト", val: "(looking-up composition), (viewer-from-below angle), (upward gaze framing), (soft towering perspective), (intimate upward viewpoint), (emotional emphasis through angle), (skyward composition), (lifted perspective)", desc: "見上げ構図を強める加算用ブースト。相手を大きく見せたい時向け（文字数:213）", links: ["Looking Up", "Upward View", "Gaze", "Perspective"], addOn: true, role: "boost" },
      { label: "映画的クローズアップブースト", val: "(cinematic close-up), (dramatic facial close-up), (tight portrait framing), (focused eye contact), (shallow depth of field), (soft background blur), (emotional close framing), (film-like close-up composition)", desc: "顔や視線へ強く寄せる加算用ブースト。感情・緊張感・親密感を出したい時向け（文字数:208）", links: ["Close-up", "Eye Contact", "Depth of Field", "Cinematic"], addOn: true, role: "boost" },
      { label: "横顔ポートレートブースト", val: "(side profile portrait), (profile face emphasis), (elegant side view), (silhouette-rich composition), (nose and jawline definition), (profile lighting), (serene sideways gaze), (refined portrait profile)", desc: "横顔の印象を強める加算用ブースト。横顔美人・静かな演出向け（文字数:203）", links: ["Side Profile", "Portrait", "Silhouette", "Profile Lighting"], addOn: true, role: "boost" },
      { label: "奥行き構図ブースト", val: "(depth-rich composition), (foreground-background layering), (spatial depth), (perspective emphasis), (layered scene composition), (atmospheric depth), (strong sense of distance), (immersive scene structure)", desc: "前後の奥行きを強める加算用ブースト。空間の広がりを見せたい時向け（文字数:206）", links: ["Depth", "Layering", "Perspective", "Atmosphere"], addOn: true, role: "boost" }
    ],
    mood: [
      { label: "燭光ローズムード", val: "(candlelight glow), (rose petal ambience), (warm crimson ambience), (romantic mood), (seductive atmosphere), (soft flickering light), (velvet-like shadows), (luxurious red accent light), (intimate air)", desc: "蝋燭・薔薇・赤い空気感を足す加算用ムードブースト（文字数:201）" },
      { label: "ミッドナイトムード", val: "(midnight atmosphere), (cool nocturnal air), (blue-violet ambience), (quiet dramatic mood), (night glow), (soft darkness), (afterglow haze), (mysterious elegance)", desc: "夜・静けさ・妖しい余韻を足す加算用ムードブースト（文字数:162）" },
      { label: "ゴシックヴェルヴェットムード", val: "(gothic ambience), (velvet shadows), (deep crimson mood), (ornate darkness), (luxurious gloom), (dramatic interior air), (dark romantic atmosphere), (elegant decadent aura), (rich shadow layering)", desc: "重厚な影・ベルベット感・退廃的な高級感を足す加算用ムードブースト（文字数:196）", links: ["Gothic", "Velvet", "Dark Romance"], addOn: true, role: "boost" },
      { label: "ドリーミーヘイズムード", val: "(dreamy atmosphere), (soft haze), (pastel air), (gentle floating light), (faint glow mist), (tender dreamy mood), (blurred luminous ambience), (airy fantasy atmosphere), (soft emotional afterglow)", desc: "柔らかな霞・夢見心地・淡い発光感を足す加算用ムードブースト（文字数:196）", links: ["Dreamy", "Haze", "Soft Glow"], addOn: true, role: "boost" },
      { label: "聖光セレストムード", val: "(sacred light ambience), (celestial glow), (holy atmosphere), (soft divine radiance), (serene luminous air), (pure ambient light), (graceful sacred mood), (ethereal calm), (heavenly glow particles)", desc: "神聖な光・静かな清浄感・天上的な空気を足す加算用ムードブースト（文字数:197）", links: ["Sacred", "Celestial", "Holy Light"], addOn: true, role: "boost" },
      { label: "雨夜メランコリームード", val: "(rainy night atmosphere), (melancholic mood), (wet city air), (soft reflected lights), (lonely ambience), (cool damp haze), (quiet emotional rain scene), (rain-soaked melancholy), (muted night glow)", desc: "雨夜の湿度・孤独感・静かな感傷を足す加算用ムードブースト（文字数:198）", links: ["Rainy Night", "Melancholy", "Wet Air"], addOn: true, role: "boost" },
      { label: "祝祭グロウムード", val: "(festive atmosphere), (warm celebratory glow), (joyful ambience), (sparkling decorative light), (lively air), (cheerful warm scene mood), (festive illumination), (glowing celebration), (bright emotional energy)", desc: "華やぎ・祝祭感・明るい熱量を足す加算用ムードブースト（文字数:210）", links: ["Festival", "Celebration", "Warm Glow"], addOn: true, role: "boost" },
      { label: "幻想エーテルムード", val: "(ethereal atmosphere), (mystic ambient glow), (fantasy air), (floating light particles), (soft surreal ambience), (otherworldly haze), (enchanted scene mood), (delicate magical glow), (airy mystical calm)", desc: "幻想感・魔法感・ふわりとした異世界空気を足す加算用ムードブースト（文字数:204）", links: ["Ethereal", "Fantasy", "Mystic"], addOn: true, role: "boost" },
      { label: "退廃デカダンスムード", val: "(decadent atmosphere), (faded luxury), (sensual shadow mood), (tired glamorous air), (opulent melancholy), (lingering perfume haze), (dark elegance), (withered beauty ambience), (late-night decadence)", desc: "退廃・色香・夜更けの濃密な高級感を足す加算用ムードブースト（文字数:200）", links: ["Decadent", "Luxury", "Dark Elegance"], addOn: true, role: "boost" },
      { label: "ネオンノワールムード", val: "(neon noir atmosphere), (electric city glow), (pink-blue ambient light), (urban night mood), (sleek noir air), (neon reflections), (cyber city ambience), (stylish nightlife mood), (rainy neon shimmer)", desc: "都会夜景・ネオン反射・ノワール感を足す加算用ムードブースト（文字数:200）", links: ["Neon Noir", "Urban Night", "Reflections"], addOn: true, role: "boost" },
      { label: "月光シルバームード", val: "(silver moonlight ambience), (cool lunar glow), (pale blue-white atmosphere), (quiet moonlit air), (soft silver rim light), (night breeze mood), (calm lunar haze), (serene nocturnal radiance)", desc: "月光・銀色の光・静かな夜気を足す加算用ムードブースト（文字数:191）", links: ["Moonlight", "Silver", "Nocturnal", "Cool Glow"], addOn: true, role: "boost" },
      { label: "黄昏アンバームード", val: "(twilight amber atmosphere), (golden dusk glow), (orange-violet sky mood), (warm fading sunlight), (nostalgic evening air), (soft amber haze), (sunset emotional glow), (gentle dusk ambience)", desc: "黄昏のアンバー光・夕暮れの余韻・懐かしい空気を足す加算用ムードブースト（文字数:190）", links: ["Twilight", "Amber", "Sunset", "Nostalgia"], addOn: true, role: "boost" },
      { label: "雪景シアームード", val: "(snowy sheer atmosphere), (soft white winter air), (falling snow mood), (pale cold glow), (quiet snowfield ambience), (crystal-clear winter light), (frosty haze), (delicate snow sparkle)", desc: "雪景色・白い冷気・繊細な冬の透明感を足す加算用ムードブースト（文字数:186）", links: ["Snow", "Winter", "Frost", "Sheer Light"], addOn: true, role: "boost" },
      { label: "王宮グランドムード", val: "(royal grand atmosphere), (palace-like ambience), (majestic interior mood), (ornate golden light), (ceremonial elegance), (noble spacious air), (grand hall radiance), (regal luxury presence)", desc: "王宮・大広間・儀式感のある豪華な空気を足す加算用ムードブースト（文字数:190）", links: ["Royal", "Palace", "Grand Hall", "Regal"], addOn: true, role: "boost" },
      { label: "深海アビスムード", val: "(deep sea ambience), (abyssal blue atmosphere), (submerged darkness), (bioluminescent glimmers), (quiet aquatic depth), (mysterious underwater haze), (cold pressure mood), (distant ocean glow)", desc: "深海の青暗さ・水圧感・微かな発光を足す加算用ムードブースト（文字数:192）", links: ["Deep Sea", "Abyss", "Bioluminescence", "Underwater"], addOn: true, role: "boost" },
      { label: "戦場テンションムード", val: "(battlefield tension), (charged atmosphere), (dusty dramatic air), (sparks in the air), (impending clash mood), (high-stakes ambience), (tense cinematic light), (warrior confrontation energy)", desc: "戦闘前後の緊張感・火花・張りつめた空気を足す加算用ムードブースト（文字数:191）", links: ["Battlefield", "Tension", "Sparks", "Confrontation"], addOn: true, role: "boost" }
    ],
    material: [
      { label: "ラグジュアリーマテリアルブースト", val: "(separate material response), (different reflectivity for skin and clothing), (luxury fabric sheen), (glossy coated fabric), (mirror-like costume highlights), (fine jewelry reflections), (material realism), (premium polished surface)", desc: "布・金属・宝飾の材質差を強める加算用ブースト（文字数:233）", links: ["Material", "Luxury", "Gloss"], addOn: true, role: "boost" },
      { label: "レンダー技術ブースト", val: "(physically based lighting), (ray-traced reflections), (shader-like material response), (subsurface scattering), (anisotropic highlights), (micro-surface detail), (realistic material response), (polished surface reflections), (clear specular highlights), (ambient occlusion), (volumetric lighting), (high dynamic range lighting), (global illumination), (material separation)", desc: "エンジン名なしでPBR・反射・シェーダ質感を足す加算用ブースト（文字数:374）", links: ["PBR", "Shader", "Reflection", "Material"], addOn: true, role: "boost" },
      { label: "金属反射ブースト", val: "(polished metal reflection), (brushed metal texture), (sharp metallic speculars), (cool metal luster), (hard surface reflections), (clean metal material separation), (reflective armor accents), (metal edge highlights)", desc: "金属の反射・硬質感・エッジハイライトを強める加算用ブースト（文字数:217）", links: ["Metal", "Reflection", "Hard Surface", "Armor"], addOn: true, role: "boost" },
      { label: "宝石装飾ブースト", val: "(gemstone sparkle), (faceted jewel highlights), (crystal-cut reflections), (ornate jewelry detail), (precious stone clarity), (gold and silver accents), (tiny specular glints), (luxury accessory definition)", desc: "宝石・金銀装飾・アクセサリーのきらめきを強める加算用ブースト（文字数:206）", links: ["Jewelry", "Gemstone", "Gold", "Accessory"], addOn: true, role: "boost" },
      { label: "シルク・サテン布ブースト", val: "(silk fabric sheen), (satin smooth highlights), (flowing fabric luster), (soft glossy folds), (delicate textile shine), (luxury dress material), (smooth cloth reflections), (elegant fabric drape)", desc: "シルクやサテンの滑らかな光沢と布の流れを足す加算用ブースト（文字数:195）", links: ["Silk", "Satin", "Fabric", "Dress"], addOn: true, role: "boost" },
      { label: "ベルベット布ブースト", val: "(velvet fabric texture), (deep matte fabric), (soft pile texture), (rich dark cloth), (subtle velvet sheen), (luxurious shadowed folds), (dense textile depth), (noble velvet material)", desc: "ベルベットの深い影・起毛感・高級布の重さを足す加算用ブースト（文字数:183）", links: ["Velvet", "Fabric", "Noble Cloth", "Texture"], addOn: true, role: "boost" },
      { label: "レザー艶ブースト", val: "(leather grain detail), (glossy leather highlights), (worn leather texture), (tight leather sheen), (soft creases in leather), (polished leather surface), (dark leather luster), (premium leather material)", desc: "革のシボ・艶・折れ目を強める加算用ブースト（文字数:204）", links: ["Leather", "Grain", "Gloss", "Texture"], addOn: true, role: "boost" },
      { label: "透明素材ブースト", val: "(transparent material), (translucent fabric layer), (clear acrylic shine), (glass-like surface), (refractive highlights), (see-through material depth), (soft transparency glow), (delicate edge reflections)", desc: "ガラス・透明布・アクリル風の透け感と屈折光を足す加算用ブースト（文字数:205）", links: ["Transparent", "Glass", "Acrylic", "Refraction"], addOn: true, role: "boost" },
      { label: "魔法結晶ブースト", val: "(magical crystal texture), (glowing crystal facets), (prismatic reflections), (enchanted gem glow), (crystal edge highlights), (inner luminous core), (fantasy mineral clarity), (arcane material sparkle)", desc: "魔法結晶・鉱石・ファンタジー宝石の発光と反射を足す加算用ブースト（文字数:202）", links: ["Crystal", "Magic", "Prism", "Fantasy"], addOn: true, role: "boost" },
      { label: "メカ金属ブースト", val: "(mecha metal panels), (mechanical surface detail), (hard-surface panel lines), (painted metal finish), (scratched metal edges), (industrial material response), (robot armor reflections), (precision mechanical texture)", desc: "ロボット・義手・メカ装甲向けの金属パネル感を足す加算用ブースト（文字数:217）", links: ["Mecha", "Metal Panels", "Robot Armor", "Hard Surface"], addOn: true, role: "boost" },
      { label: "パール光沢ブースト", val: "(pearl luster), (iridescent pearl sheen), (soft nacre highlights), (milky reflective surface), (subtle rainbow reflection), (elegant pearlescent glow), (smooth shell-like shine), (luxury pearl finish)", desc: "真珠のような乳白光沢・虹色の反射・上品な艶を足す加算用ブースト（文字数:200）", links: ["Pearl", "Iridescent", "Nacre", "Luster"], addOn: true, role: "boost" },
      { label: "刺繍・装飾布ブースト", val: "(embroidery detail), (ornate stitched fabric), (gold thread accents), (raised textile ornament), (decorative woven pattern), (fine lace trim), (intricate brocade texture), (luxury stitched embellishment)", desc: "刺繍・金糸・レース・織り柄の細かい装飾布を足す加算用ブースト（文字数:203）", links: ["Embroidery", "Gold Thread", "Brocade", "Lace"], addOn: true, role: "boost" },
      { label: "セラミック・磁器ブースト", val: "(ceramic surface), (porcelain gloss), (smooth glazed material), (clean white reflective finish), (delicate ceramic highlights), (hard polished porcelain), (subtle glaze reflection), (refined ceramic clarity)", desc: "陶器・磁器・釉薬のつるんとした硬い光沢を足す加算用ブースト（文字数:207）", links: ["Ceramic", "Porcelain", "Glaze", "Gloss"], addOn: true, role: "boost" },
      { label: "カーボン・工業素材ブースト", val: "(carbon fiber texture), (industrial composite material), (matte technical surface), (woven carbon pattern), (synthetic hard-surface finish), (precision material weave), (dark composite sheen), (high-tech material response)", desc: "カーボン・複合材・工業素材のハイテクな質感を足す加算用ブースト（文字数:222）", links: ["Carbon Fiber", "Industrial", "Composite", "High-Tech"], addOn: true, role: "boost" },
      { label: "ラバー・ラテックスブースト", val: "(rubber material sheen), (latex glossy surface), (smooth elastic texture), (tight specular highlights), (black rubber luster), (stretchy coated material), (slick synthetic shine), (controlled latex reflections)", desc: "ラバーやラテックスの滑らかな艶・伸縮素材感を足す加算用ブースト（文字数:210）", links: ["Rubber", "Latex", "Gloss", "Synthetic"], addOn: true, role: "boost" },
      { label: "古金属・風化ブースト", val: "(aged metal texture), (oxidized patina), (weathered metal edges), (scratched antique surface), (tarnished brass detail), (worn steel finish), (rust-kissed material accents), (old artifact metallic luster)", desc: "古金属・酸化・傷・風化したアンティーク感を足す加算用ブースト（文字数:204）", links: ["Aged Metal", "Patina", "Weathered", "Antique"], addOn: true, role: "boost" }
    ],
    liquid: [
      { label: "濡れ髪ブースト", val: "(wet hair strands), (damp hair clumps), (water droplets on hair), (glossy wet highlights), (soaked hair texture), (reflective hair sheen), (dripping hair tips), (moisture-rich hair detail)", desc: "髪束、水滴、濡れたハイライトを強める加算用ブースト。濡れ髪表現を明確化（文字数:188）", links: ["Wet Hair", "Water Droplets", "Glossy Highlights", "Moisture Detail"], addOn: true, role: "boost" },
      { label: "汗艶ブースト", val: "(dewy skin sheen), (subtle sweat droplets), (perspiration highlights), (humid skin gloss), (moist collarbone shine), (glossy skin highlights), (warm skin moisture), (post-exertion damp glow)", desc: "肌のしっとり感、汗粒、熱気を足す加算用ブースト。運動後・夏・戦闘後向け（文字数:190）", links: ["Dewy Skin", "Sweat Droplets", "Glossy Skin", "Humid Atmosphere"], addOn: true, role: "boost" },
      { label: "雨濡れブースト", val: "(rain-soaked clothing), (rain droplets on skin), (wet fabric cling), (rainy atmosphere), (reflective wet surfaces), (dripping moisture), (overcast rain light), (damp air glow)", desc: "雨粒、濡れた服、湿った空気感を足す加算用ブースト。雨シーンのまとまりを強める（文字数:175）", links: ["Rain-Soaked", "Wet Fabric", "Reflective Wet Surfaces", "Rain Atmosphere"], addOn: true, role: "boost" },
      { label: "水滴付着ブースト", val: "(beads of water on skin), (scattered droplets), (clear water beads on hair and clothing), (droplet highlights), (moisture accumulation), (fresh wet sparkle), (tiny reflective droplets), (droplet detail emphasis)", desc: "肌や髪や服に乗る水滴を細かく足す加算用ブースト。みずみずしさを見せたい時向け（文字数:211）", links: ["Water Beads", "Droplets", "Wet Sparkle", "Droplet Detail"], addOn: true, role: "boost" },
      { label: "滴り・雫ブースト", val: "(dripping liquid trails), (falling droplets), (runnels of water), (sliding droplets along skin and fabric), (liquid drip detail), (gravity-pulled moisture), (trailing wet streaks), (fluid motion accents)", desc: "滴る液体や雫の流れを足す加算用ブースト。動きのある濡れ表現を強める（文字数:203）", links: ["Dripping Liquid", "Falling Droplets", "Wet Streaks", "Fluid Motion"], addOn: true, role: "boost" },
      { label: "濡れ肌反射ブースト", val: "(wet skin reflections), (glossy damp skin), (controlled specular highlights on moist skin), (reflective skin sheen), (luminous moisture gloss), (slick highlight accents), (damp surface luster), (polished wet-skin look)", desc: "濡れた肌の反射と艶を足す加算用ブースト。光を拾うしっとり感を強める（文字数:218）", links: ["Wet Skin", "Specular Highlights", "Reflective Sheen", "Moisture Gloss"], addOn: true, role: "boost" },
      { label: "濡れ布密着ブースト", val: "(wet fabric cling), (soaked cloth contour), (water-darkened fabric), (damp textile transparency), (clinging folds), (moisture-weighted cloth), (wet costume adhesion), (soaked garment detail)", desc: "濡れた布の密着感や重みを足す加算用ブースト。服の貼りつき表現向け（文字数:190）", links: ["Wet Fabric Cling", "Soaked Cloth", "Clinging Folds", "Garment Detail"], addOn: true, role: "boost" },
      { label: "液体付着ブースト", val: "(liquid coating detail), (translucent liquid layer), (glossy fluid traces), (surface wetness), (sticky liquid shine), (reflective fluid film), (viscous highlight accents), (fluid-coated texture)", desc: "表面に付着した液体膜や粘りのある艶を足す加算用ブースト。液体感を強める（文字数:194）", links: ["Liquid Coating", "Fluid Traces", "Surface Wetness", "Reflective Film"], addOn: true, role: "boost" },
      { label: "水面反射ブースト", val: "(water surface reflections), (reflective ripples), (mirror-like wet surface), (shimmering water highlights), (surface caustic glints), (rippling light reflection), (wet ground reflection), (liquid mirror sheen)", desc: "水面や濡れた床の反射を強める加算用ブースト。水辺・雨上がり・夜景向け（文字数:210）", links: ["Water Reflection", "Ripples", "Wet Surface", "Caustics"], addOn: true, role: "boost" },
      { label: "飛沫スプラッシュブースト", val: "(splashing water), (water spray), (bursting droplets), (dynamic splash arcs), (scattered liquid particles), (impact splash detail), (crisp water motion), (sparkling splash highlights)", desc: "飛沫や跳ねる水の動きを足す加算用ブースト。水遊び・戦闘・雨演出向け（文字数:183）", links: ["Splash", "Water Spray", "Droplets", "Motion"], addOn: true, role: "boost" },
      { label: "泡・気泡ブースト", val: "(floating bubbles), (tiny air bubbles), (transparent bubble highlights), (foam detail), (soft bubble clusters), (underwater air bubbles), (sparkling bubble reflections), (delicate liquid foam)", desc: "泡や気泡の細かい反射を足す加算用ブースト。水中・泡・幻想演出向け（文字数:192）", links: ["Bubbles", "Foam", "Underwater", "Transparent Highlights"], addOn: true, role: "boost" },
      { label: "水中浮遊ブースト", val: "(underwater atmosphere), (floating hair underwater), (suspended fabric motion), (soft aquatic light), (water-filtered glow), (weightless floating pose), (submerged ambience), (gentle underwater drift)", desc: "水中の浮遊感と水越しの光を足す加算用ブースト。水中シーン向け（文字数:200）", links: ["Underwater", "Floating", "Aquatic Light", "Submerged"], addOn: true, role: "boost" },
      { label: "朝露・結露ブースト", val: "(morning dew droplets), (condensation beads), (dew on skin and fabric), (cool moist air), (tiny fresh droplets), (soft morning wetness), (delicate condensation highlights), (fresh dew sparkle)", desc: "朝露や結露の小さな水滴を足す加算用ブースト。涼しげな湿度表現向け（文字数:192）", links: ["Dew", "Condensation", "Fresh Droplets", "Morning Wetness"], addOn: true, role: "boost" },
      { label: "オイルグロスブースト", val: "(oil-like glossy sheen), (smooth reflective coating), (slick surface highlights), (iridescent oil glints), (high-gloss liquid film), (soft oily reflections), (polished wet luster), (rainbow sheen accents)", desc: "油膜のような艶と強い反射を足す加算用ブースト。高光沢の液体表現向け（文字数:204）", links: ["Oil Gloss", "Reflective Coating", "Iridescence", "Wet Luster"], addOn: true, role: "boost" },
      { label: "透明液体ブースト", val: "(clear transparent liquid), (crystal-clear fluid highlights), (transparent water layer), (clean liquid refraction), (glasslike fluid shine), (pure liquid sparkle), (subtle refraction detail), (clear wet coating)", desc: "透明な水膜や屈折感を足す加算用ブースト。清潔感のある液体表現向け（文字数:211）", links: ["Clear Liquid", "Refraction", "Transparent Water", "Fluid Shine"], addOn: true, role: "boost" },
      { label: "湿度ミストブースト", val: "(humid mist), (moist air haze), (soft vapor around skin), (warm damp atmosphere), (misty wet glow), (condensed air softness), (steamy ambient haze), (subtle humidity shimmer)", desc: "湿った空気と薄いミストを足す加算用ブースト。雨上がり・湯気・湿度演出向け（文字数:174）", links: ["Humidity", "Mist", "Vapor", "Wet Glow"], addOn: true, role: "boost" }
    ],
    skinLighting: [
      { label: "透明肌ブースト", val: "(translucent skin glow), (natural skin translucency), (clear skin luminosity), (soft subsurface light), (delicate skin highlights), (smooth skin gradation), (airy skin clarity), (fresh luminous complexion)", desc: "肌の透け感、柔らかな光、なめらかな発光感を足す加算用ブースト（文字数:205）", links: ["Translucent Skin", "Skin Glow", "Subsurface Light", "Luminous Complexion"], addOn: true, role: "boost" },
      { label: "血色感ブースト", val: "(healthy skin bloom), (natural blush tone), (soft lip color), (subtle ear blush), (warm fingertip tint), (lively complexion), (gentle rosy cheeks), (soft blood-flow warmth)", desc: "頬、唇、耳、指先の自然な赤みを足す加算用ブースト。血色感を整える（文字数:172）", links: ["Healthy Bloom", "Blush Tone", "Rosy Cheeks", "Warm Complexion"], addOn: true, role: "boost" },
      { label: "夜光肌ブースト", val: "(moonlit skin glow), (cool luminous skin), (night skin highlights), (blue-tinted rim light on skin), (soft nocturnal translucency), (low-light skin clarity), (serene moonlight complexion), (gentle night glow)", desc: "月光や暗所で映える青白い肌光を足す加算用ブースト。夜シーン向け（文字数:208）", links: ["Moonlit Skin", "Night Highlights", "Blue Rim Light", "Night Glow"], addOn: true, role: "boost" },
      { label: "柔肌ソフトライトブースト", val: "(soft diffuse skin light), (creamy skin shading), (gentle cheek highlights), (soft facial light wrap), (smooth highlight rolloff), (delicate shadow transition on skin), (feathered skin lighting), (tender luminous softness)", desc: "肌に回る柔光とやさしい階調を足す加算用ブースト。人物をふんわり見せる（文字数:222）", links: ["Soft Diffuse Light", "Skin Shading", "Light Wrap", "Softness"], addOn: true, role: "boost" },
      { label: "透過光SSSブースト", val: "(subsurface scattering), (backlit skin translucency), (light bleeding through skin), (ear translucency glow), (fingertip translucency), (warm backlit skin), (internal skin light diffusion), (soft transmitted light)", desc: "透過光とSSSを強める加算用ブースト。耳や指先の抜け感・生命感を足す（文字数:214）", links: ["SSS", "Backlit Skin", "Translucency", "Light Diffusion"], addOn: true, role: "boost" },
      { label: "微細肌テクスチャブースト", val: "(fine skin texture detail), (delicate micro skin detail), (skin pore suggestion), (cheek microtexture), (forehead skin detail), (refined facial surface detail), (realistic skin texture nuance), (subtle texture separation)", desc: "肌の微細情報を足す加算用ブースト。のっぺり感を減らし質感を整える（文字数:221）", links: ["Skin Texture", "Micro Detail", "Surface Detail", "Texture Separation"], addOn: true, role: "boost" },
      { label: "なめらか陶肌ブースト", val: "(smooth porcelain-like skin finish), (clean complexion), (silky skin smoothness), (polished soft skin surface), (elegant skin clarity), (refined smooth shading), (soft porcelain glow), (beautiful clean skin finish)", desc: "すべすべで整った陶器肌寄りの仕上がりを足す加算用ブースト（文字数:214）", links: ["Porcelain Skin", "Clean Complexion", "Smooth Finish", "Skin Clarity"], addOn: true, role: "boost" },
      { label: "艶ハイライト肌ブースト", val: "(dewy skin sheen), (luminous skin highlights), (glossy skin finish), (controlled specular glow on skin), (moist skin luster), (collarbone highlights), (shoulder highlights), (subtle reflective skin accents)", desc: "肌の艶ハイライトを足す加算用ブースト。しっとり・映え系の見た目を強める（文字数:206）", links: ["Dewy Skin", "Glossy Skin", "Specular Glow", "Skin Luster"], addOn: true, role: "boost" },
      { label: "立体陰影肌ブースト", val: "(dimensional facial shading), (sculpted cheek shading), (contour-enhancing skin light), (nose bridge highlight), (jawline shadow control), (under-eye light shaping), (subtle skin depth), (three-dimensional skin rendering)", desc: "顔や肌の立体陰影を足す加算用ブースト。のっぺり回避と彫り感向け（文字数:221）", links: ["Dimensional Shading", "Contour Light", "Depth", "3D Skin"], addOn: true, role: "boost" },
      { label: "逆光肌ブースト", val: "(backlit skin glow), (rim-lit skin edges), (warm light wrapping around skin), (translucent backlight on face), (glowing shoulder edge), (soft halo around skin), (skin edge illumination), (gentle backlight bloom)", desc: "逆光で肌の輪郭をきれいに見せる加算用ブースト。光に包まれる演出向け（文字数:211）", links: ["Backlight", "Rim Light", "Skin Glow", "Halo"], addOn: true, role: "boost" },
      { label: "ゴールデンアワー肌ブースト", val: "(golden hour skin glow), (warm sunset skin highlights), (amber light on skin), (soft orange facial glow), (sunset blush warmth), (warm rim light on shoulders), (golden skin luminosity), (late afternoon light softness)", desc: "夕日や暖色光で肌を柔らかく見せる加算用ブースト。夕景・恋愛演出向け（文字数:217）", links: ["Golden Hour", "Sunset", "Warm Skin", "Amber Light"], addOn: true, role: "boost" },
      { label: "クールリム肌ブースト", val: "(cool rim light on skin), (blue-white skin edge glow), (crisp cool highlights), (icy facial rim light), (cool shadow transition), (night blue skin accent), (clean cold light on shoulders), (cool luminous outline)", desc: "青白いリムライトで肌を締める加算用ブースト。夜・クール系・黒衣装向け（文字数:212）", links: ["Cool Rim", "Blue Light", "Night Skin", "Outline"], addOn: true, role: "boost" },
      { label: "頬唇ハイライトブースト", val: "(soft cheek highlights), (glossy lip highlight), (delicate blush glow), (moist lower lip shine), (gentle nose tip highlight), (subtle eyelid sheen), (warm cheek luminosity), (fresh facial highlight accents)", desc: "頬・唇・鼻先など顔の小さな光を足す加算用ブースト。表情の鮮度向け（文字数:206）", links: ["Cheek Highlights", "Lip Shine", "Blush Glow", "Facial Accents"], addOn: true, role: "boost" },
      { label: "暗所肌明瞭ブースト", val: "(low-light skin clarity), (visible facial planes in darkness), (soft shadow-readable skin), (dim ambient skin glow), (controlled dark skin tones), (night portrait visibility), (subtle facial catchlight), (clear skin silhouette in low light)", desc: "暗所でも肌と顔を見えやすくする加算用ブースト。夜景・暗室・影演出向け（文字数:240）", links: ["Low Light", "Skin Clarity", "Night Portrait", "Catchlight"], addOn: true, role: "boost" },
      { label: "柔影フェイスブースト", val: "(soft facial shadows), (gentle cheek shadow), (smooth under-chin shadow), (soft nose shadow), (feathered face shading), (natural shadow falloff), (delicate skin shadow gradient), (balanced facial contrast)", desc: "顔の影を柔らかく整える加算用ブースト。きつい影を避けたい人物絵向け（文字数:205）", links: ["Soft Shadow", "Face Shading", "Shadow Gradient", "Contrast"], addOn: true, role: "boost" },
      { label: "肌グラデーションブースト", val: "(smooth skin color gradation), (subtle warm-to-cool skin transition), (delicate tonal shift on skin), (refined skin gradient), (soft complexion blending), (natural hue variation), (silky tonal rolloff), (beautiful skin color depth)", desc: "肌色のなめらかな階調と色の深みを足す加算用ブースト。塗りの質感向け（文字数:231）", links: ["Skin Gradation", "Tonal Shift", "Color Depth", "Complexion"], addOn: true, role: "boost" },
      { label: "目元ハイライト肌ブースト", val: "(under-eye soft highlights), (eyelid skin sheen), (catchlight reflected on skin), (delicate tear duct highlight), (soft orbital light), (gentle eye-area glow), (clean under-eye shading), (luminous eye surrounding skin)", desc: "目元周辺の肌光を足す加算用ブースト。視線・泣き顔・潤み表現向け（文字数:218）", links: ["Eye Area", "Under-eye", "Eyelid Sheen", "Catchlight"], addOn: true, role: "boost" }
    ]
  };

  // ============================
  // 👥 Cast Control (People Count)
  // - Enable toggle prevents affecting models that don't need it
  // - Girls/Boys counts are mutually exclusive within each group
  // ============================
  const IS_R18_SECRET_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const CAST_CONTROL = {
    basic: [
      { key: "cc_solo", label: "solo", desc: "単体フォーカス", val: "solo" },
      { key: "cc_pair_1g1b", label: "1girl + 1boy", desc: "男女ペア / ペア補助向け", val: "1girl, 1boy" }
    ],
    girls: [
      { key: "cc_g1", label: "1girl", desc: "女1", val: "1girl" },
      { key: "cc_g2", label: "2girls", desc: "女2", val: "2girls" },
      { key: "cc_g3", label: "3girls", desc: "女3", val: "3girls" },
      { key: "cc_g4", label: "4girls", desc: "女4", val: "4girls" },
      { key: "cc_g5", label: "5girls", desc: "女5", val: "5girls" },
      { key: "cc_g_r18_faceless_curvy", label: "1girl + faceless female + curvyfemale", desc: "R-18シークレット用: 女性側の匿名・体型補助", val: "(1girl, faceless female, curvyfemale)", r18Only: true }
    ],
    boys: [
      { key: "cc_b1", label: "1boy", desc: "男1", val: "1boy" },
      { key: "cc_b2", label: "2boys", desc: "男2", val: "2boys" },
      { key: "cc_b3", label: "3boys", desc: "男3", val: "3boys" },
      { key: "cc_b4", label: "4boys", desc: "男4", val: "4boys" },
      { key: "cc_b5", label: "5boys", desc: "男5", val: "5boys" },
      { key: "cc_b_r18_faceless_muscular", label: "1boy + faceless male + muscularmale", desc: "R-18シークレット用: 男性側の匿名・体型補助", val: "(1boy, faceless male, muscularmale)", r18Only: true }
    ],
    focus: [
      { key: "cc_focus_single", label: "単体フォーカス補助", desc: "主役を1人に寄せる補助", val: "(single character focus:1.2), (clear main subject:1.2)" },
      { key: "cc_focus_human", label: "人物顔・人型維持", desc: "なりきり・異形モチーフで人型を保つ", val: "(human character focus:1.2), (clearly human face:1.2), (human anatomy:1.1)" },
      { key: "cc_focus_pair", label: "男女ペアの見分け補助", desc: "男女ペアを分離して見せたい時", val: "(distinct male and female characters:1.2), (clear two-person composition:1.2)" }
    ]
  };

  function _setDisabledInBox(box, disabled) {
    box.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      cb.disabled = disabled;
      if (disabled) cb.checked = false;
      const lab = cb.closest("label");
      if (lab) {
        lab.style.opacity = disabled ? "0.55" : "1";
        lab.style.pointerEvents = disabled ? "none" : "auto";
        if (disabled) {
          lab.style.outline = "none";
          lab.style.borderColor = "var(--qp-border, #d0d7de)";
        }
      }
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
    titleWrap.textContent = "👥 人物制御（人数・相手役）";

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
    note.textContent = "※ 有効化ONの時だけ下の人物指定が出力されます。OFFにすると人物指定を全解除します。女/男はそれぞれ1つだけ選択（同時に女+男はOK）。";
    box.appendChild(note);

    const rec = document.createElement("div");
    rec.style.cssText = "margin:10px 0 8px; padding:10px 12px; border-radius:12px; border:1px solid rgba(22,163,74,.26); background:rgba(236,253,245,.96); color:#166534; font-size:12px; line-height:1.55;";
    rec.innerHTML = '<div style="font-weight:800; margin-bottom:2px;">推奨（最適化対応）</div><div>1girl / 1boy / 1girl + 1boy を主軸に各種最適化ロジックを組んでいます。単体キャラと男女ペアはこちらを推奨。</div>';
    box.appendChild(rec);

    const exp = document.createElement("div");
    exp.style.cssText = "margin:0 0 10px; padding:10px 12px; border-radius:12px; border:1px solid rgba(217,119,6,.28); background:rgba(255,247,237,.98); color:#9a3412; font-size:12px; line-height:1.55;";
    exp.innerHTML = '<div style="font-weight:800; margin-bottom:2px;">実験枠（非推奨・各種最適化対応外）</div><div>2girls / 2boys 以上の多人数構成は、ペア補助・役割補正など各種最適化ロジックの対応外です。使えますが、結果はモデル相性に強く左右されます。</div>';
    box.appendChild(exp);

    const mkRow = (label, items, groupClass, multiSelect) => {
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
    const isR18Secret = !!it.r18Only;

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
    } else if (isR18Secret) {
      lab.style.background = "linear-gradient(180deg, rgba(255,241,242,.98), rgba(255,247,247,.98))";
      lab.style.borderColor = "rgba(190,18,60,.30)";
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

    if (isR18Secret) {
      const badge = document.createElement("span");
      badge.textContent = "R-18";
      badge.style.cssText = "display:inline-flex; align-items:center; padding:2px 7px; border-radius:999px; background:rgba(190,18,60,.12); color:#be123c; border:1px solid rgba(190,18,60,.22); font-size:10px; font-weight:800; letter-spacing:.02em;";
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

      // 基本 / girls / boys はそれぞれ排他（女+男の同時はOK）。補助系は複数可。
      if (!multiSelect) {
        box.querySelectorAll(`input[type=checkbox][data-cc-group='${groupClass}']`).forEach((x) => {
          if (x !== cb) x.checked = false;
        });
      }

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

  items.filter((it) => !it.r18Only || IS_R18_SECRET_UNLOCKED).forEach((it) => right.appendChild(makePill(it)));

  row.appendChild(left);
  row.appendChild(right);
  return row;
};

    box.appendChild(mkRow("基本", CAST_CONTROL.basic, "basic"));
    box.appendChild(mkRow("Girls", CAST_CONTROL.girls, "girls"));
    box.appendChild(mkRow("Boys", CAST_CONTROL.boys, "boys"));
    box.appendChild(mkRow("補助", CAST_CONTROL.focus, "focus", true));

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
          if(cb.dataset.val && cb.dataset.outputChannel !== "negative") tags.push(cb.dataset.val);
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
      val: "(ornate clothing design:1.25), (elaborate embroidery:1.3), ornamental brocade, golden thread embroidery, tassel ornaments, ceremonial costume embellishments",
      desc: "刺繍・模様・房飾りを増やして豪華衣装へ寄せたい時向け"
    },
    {
      label: "Glossy Fabric & Satin Tension",
      val: "(glossy fabric texture:1.25), (satin-like reflections:1.2), tight fabric tension, form-fitting costume, light-catching folds, tailored fit",
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
      val: "(ornate ceremonial china dress:1.3), (elaborate golden embroidery:1.2), (ornamental brocade:1.2), glossy silk fabric, form-fitting silhouette, decorative metal fittings, gold-trimmed costume parts, elaborate hair ornaments, ornate chest accessory, tassel ornaments, ceremonial embellishments",
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


(function(){
// --- builder_ui.section.quality_preset.v14.js ---
// Quality Prompt Integrated Trial Shelf
(function(){
  "use strict";
  const VERSION = 14;
  const KEY = "quality_preset";

  const QUALITY_V14 = {
    recommended: [
      {
        label: "GPT-5推奨：幻想アニメリアル",
        desc: "リアル寄りアニメ調・ファンタジー・アクション向け。品質・光・質感・構図をまとめて底上げ。",
        val: "(godlike quality:1.3), (masterpiece:1.3), (best quality:1.3), (amazing quality:1.3), (ultra quality:1.3), (ultra high resolution:1.3), (absurdres:1.3), (anime-realism blend:1.3), (semi-realistic rendering:1.3), (realistic textures:1.3), (intricate details:1.3), (extremely detailed:1.3), (cinematic lighting:1.3), (volumetric lighting:1.3), (volumetric god rays:1.3), (ethereal glow:1.2), (high dynamic range:1.2), (depth of field:1.2), (masterpiece lighting:1.3), (consistent anatomy:1.3), (anatomical accuracy:1.3), (style consistency:1.3), (theme consistency:1.3)"
      },
      {
        label: "軽量：高品質アニメリアル",
        desc: "文字数を抑えた普段使い。主題を圧迫しにくい安全版。",
        val: "(masterpiece:1.3), (best quality:1.3), (amazing quality:1.3), (ultra high resolution:1.3), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (cinematic lighting:1.3), (volumetric lighting:1.2), (depth of field:1.2), (consistent anatomy:1.2), (style consistency:1.2)"
      },
      {
        label: "光重視：シネマ幻想",
        desc: "光・空気感・幻想演出を強めたい時向け。",
        val: "(masterpiece:1.3), (best quality:1.3), (cinematic lighting:1.3), (volumetric lighting:1.3), (volumetric god rays:1.3), (global illumination:1.2), (rim lighting:1.2), (high dynamic range:1.2), (ethereal glow:1.2), (bloom lighting:1.2), (beautiful lighting:1.2)"
      },
      {
        label: "キャラ安定：顔・目・髪",
        desc: "顔、目、髪、人体の安定を優先したい時向け。",
        val: "(masterpiece:1.3), (best quality:1.3), (consistent anatomy:1.3), (anatomical accuracy:1.3), (detailed face:1.3), (detailed eyes:1.3), (detailed hair:1.3), (expressive face:1.2), (natural pose:1.2), (style consistency:1.3), (character consistency:1.3)"
      }
    ],
    core: [
      { label: "masterpiece 強", desc: "完成度を強く底上げ。", val: "(masterpiece:1.3)" },
      { label: "best quality 強", desc: "標準的な高品質指定。Quality Boosterの変換対象にもなる主要語。", val: "(best quality:1.3)" },
      { label: "amazing quality", desc: "華やかな高品質補助。", val: "(amazing quality:1.3)" },
      { label: "ultra quality", desc: "全体品質を強める補助。", val: "(ultra quality:1.3)" },
      { label: "godlike quality", desc: "上級向けの強品質語。使いすぎ注意。", val: "(godlike quality:1.3)" },
      { label: "exceptional quality", desc: "強すぎない上質補助。", val: "(exceptional quality:1.3)" }
    ],
    detail: [
      { label: "absurdres", desc: "解像感を強く上げる定番語。", val: "(absurdres:1.3)" },
      { label: "ultra high resolution", desc: "高解像度感の補助。", val: "(ultra high resolution:1.3)" },
      { label: "high resolution", desc: "軽めの高解像度指定。", val: "(high resolution:1.2)" },
      { label: "UHD", desc: "高精細・UHD寄り。", val: "(UHD:1.2)" },
      { label: "8k", desc: "高解像度の雰囲気付け。", val: "(8k:1.2)" },
      { label: "16k", desc: "かなり強い解像度語。上級向け。", val: "(16k:1.1)" },
      { label: "intricate details", desc: "細部密度を上げる主力語。", val: "(intricate details:1.3)" },
      { label: "extremely detailed", desc: "詳細描写を強める。", val: "(extremely detailed:1.3)" },
      { label: "fine details", desc: "細部を軽く追加。", val: "(fine details:1.2)" },
      { label: "sharp focus", desc: "ピント感を補助。", val: "(sharp focus:1.2)" },
      { label: "crisp details", desc: "輪郭・細部の明瞭さ。", val: "(crisp details:1.2)" }
    ],
    material: [
      { label: "realistic textures", desc: "質感をリアル寄りに。", val: "(realistic textures:1.3)" },
      { label: "hyperrealistic", desc: "かなり写実寄り。絵柄が変わりやすいので注意。", val: "(hyperrealistic:1.3)" },
      { label: "photo-realistic rendering", desc: "写真調レンダリング寄り。", val: "(photo-realistic rendering:1.2)" },
      { label: "semi-realistic rendering", desc: "アニメとリアルの中間。", val: "(semi-realistic rendering:1.3)" },
      { label: "anime-realism blend", desc: "リアル寄りアニメ調の主力語。", val: "(anime-realism blend:1.3)" },
      { label: "physically based rendering", desc: "PBR風の材質・光。", val: "(physically based rendering:1.2)" },
      { label: "realistic materials", desc: "素材感の補助。", val: "(realistic materials:1.2)" },
      { label: "micro details", desc: "微細な質感。", val: "(micro details:1.2)" },
      { label: "subsurface scattering", desc: "肌や半透明素材の光回り。", val: "(subsurface scattering:1.2)" }
    ],
    lighting: [
      { label: "cinematic lighting", desc: "映画的な光。汎用性が高い。", val: "(cinematic lighting:1.3)" },
      { label: "studio lighting", desc: "安定した撮影照明。", val: "(studio lighting:1.2)" },
      { label: "soft natural lighting", desc: "自然で柔らかい光。", val: "(soft natural lighting:1.2)" },
      { label: "volumetric lighting", desc: "空気中に見える光。", val: "(volumetric lighting:1.3)" },
      { label: "volumetric god rays", desc: "神々しい光芒。", val: "(volumetric god rays:1.3)" },
      { label: "global illumination", desc: "全体の反射光・環境光。", val: "(global illumination:1.2)" },
      { label: "rim lighting", desc: "輪郭光。シルエット補強。", val: "(rim lighting:1.2)" },
      { label: "dramatic lighting", desc: "強い陰影演出。", val: "(dramatic lighting:1.3)" },
      { label: "ray tracing lighting", desc: "CG寄りの光表現。", val: "(ray tracing lighting:1.2)" },
      { label: "ambient occlusion", desc: "接地影・奥行き。", val: "(ambient occlusion:1.2)" },
      { label: "high dynamic range", desc: "明暗幅を広げる。", val: "(high dynamic range:1.2)" },
      { label: "ethereal glow", desc: "幻想的な発光。", val: "(ethereal glow:1.2)" },
      { label: "bloom lighting", desc: "柔らかい光のにじみ。", val: "(bloom lighting:1.2)" },
      { label: "glowing effects", desc: "発光演出全般。", val: "(glowing effects:1.2)" }
    ],
    color: [
      { label: "vivid colors", desc: "鮮やかな色。", val: "(vivid colors:1.2)" },
      { label: "vivid anime colors", desc: "アニメ調の鮮やかさ。", val: "(vivid anime colors:1.2)" },
      { label: "rich colors", desc: "濃厚で深い色。", val: "(rich colors:1.2)" },
      { label: "high color contrast", desc: "色のコントラストを強める。", val: "(high color contrast:1.2)" },
      { label: "color harmony", desc: "色のまとまり。", val: "(color harmony:1.2)" },
      { label: "color grading", desc: "映像風の色調整。", val: "(color grading:1.2)" }
    ],
    camera: [
      { label: "cinematic composition", desc: "映画的な構図。", val: "(cinematic composition:1.3)" },
      { label: "dynamic composition", desc: "動きのある構図。", val: "(dynamic composition:1.3)" },
      { label: "epic composition", desc: "大きく迫力ある構図。", val: "(epic composition:1.3)" },
      { label: "dynamic perspective", desc: "パースを強める。", val: "(dynamic perspective:1.2)" },
      { label: "low angle shot", desc: "ローアングル。", val: "(low angle shot:1.2)" },
      { label: "wide angle", desc: "広角。背景や迫力向け。", val: "(wide angle:1.2)" },
      { label: "close-up", desc: "顔や上半身を寄せる。", val: "(close-up:1.2)" },
      { label: "depth of field", desc: "被写界深度。背景ぼかし。", val: "(depth of field:1.2)" },
      { label: "bokeh", desc: "玉ボケ・背景ぼかし。", val: "(bokeh:1.2)" }
    ],
    effects: [
      { label: "lens flare", desc: "レンズフレア。", val: "(lens flare:1.2)" },
      { label: "glowing particles", desc: "光る粒子。", val: "(glowing particles:1.2)" },
      { label: "spark effects", desc: "火花・スパーク。", val: "(spark effects:1.2)" },
      { label: "energy aura", desc: "エネルギーオーラ。", val: "(energy aura:1.2)" },
      { label: "magical aura", desc: "魔法的なオーラ。", val: "(magical aura:1.2)" },
      { label: "light trails", desc: "光跡。", val: "(light trails:1.2)" },
      { label: "motion blur", desc: "動きのブレ。", val: "(motion blur:1.2)" },
      { label: "energy burst", desc: "エネルギー爆発。", val: "(energy burst:1.2)" }
    ],
    character: [
      { label: "consistent anatomy", desc: "人体の一貫性。", val: "(consistent anatomy:1.3)" },
      { label: "anatomical accuracy", desc: "人体構造の正確さ。", val: "(anatomical accuracy:1.3)" },
      { label: "perfect anatomy", desc: "強めの人体補助。", val: "(perfect anatomy:1.2)" },
      { label: "perfect hands", desc: "手の補助。過信は禁物。", val: "(perfect hands:1.2)" },
      { label: "detailed face", desc: "顔の描写。", val: "(detailed face:1.3)" },
      { label: "detailed eyes", desc: "目の描写。", val: "(detailed eyes:1.3)" },
      { label: "detailed hair", desc: "髪の描写。", val: "(detailed hair:1.3)" },
      { label: "expressive face", desc: "表情の見栄え。", val: "(expressive face:1.2)" },
      { label: "natural pose", desc: "自然な姿勢。", val: "(natural pose:1.2)" }
    ],
    style: [
      { label: "style consistency", desc: "絵柄の一貫性。", val: "(style consistency:1.3)" },
      { label: "theme consistency", desc: "テーマの一貫性。", val: "(theme consistency:1.3)" },
      { label: "character consistency", desc: "キャラの一貫性。", val: "(character consistency:1.3)" },
      { label: "clean lineart", desc: "線画をきれいに。", val: "(clean lineart:1.2)" },
      { label: "professional illustration", desc: "商業イラスト寄り。", val: "(professional illustration:1.2)" },
      { label: "concept art", desc: "コンセプトアート寄り。", val: "(concept art:1.2)" },
      { label: "fantasy illustration", desc: "ファンタジーイラスト寄り。", val: "(fantasy illustration:1.2)" }
    ],
    finish: [
      { label: "ultra sharp", desc: "シャープな仕上げ。", val: "(ultra sharp:1.2)" },
      { label: "crystal clear", desc: "透明感・明瞭さ。", val: "(crystal clear:1.2)" },
      { label: "perfect shading", desc: "陰影補助。", val: "(perfect shading:1.2)" },
      { label: "high contrast", desc: "明暗差を強める。", val: "(high contrast:1.2)" },
      { label: "beautiful lighting", desc: "きれいな光。", val: "(beautiful lighting:1.2)" },
      { label: "masterpiece lighting", desc: "強めの完成光。", val: "(masterpiece lighting:1.3)" }
    ]
  };

  function ensureStyles(){
    if(document.getElementById("qp-v14-integrated-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v14-integrated-style";
    style.textContent = `
      #qp-v14-integrated {
        border:1px solid #c7d2fe !important;
        border-radius:12px !important;
        background:#f8fbff !important;
      }
      #qp-v14-integrated > summary {
        background:#eef2ff !important;
        color:#1f2937 !important;
        font-weight:700 !important;
      }
      #qp-v14-integrated .qp-v14-guide {
        font-size:12px;
        line-height:1.6;
        color:#374151;
        background:#ffffff;
        border:1px solid #dbeafe;
        border-radius:10px;
        padding:8px 10px;
        margin:0 0 8px 0;
      }
      #qp-v14-integrated .qp-v14-booster-slot > details {
        margin-top:0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  function findQualityBooster(){
    const host = document.getElementById("qp-quality-content");
    if(!host) return null;
    const details = Array.from(host.querySelectorAll("details"));
    return details.find(function(d){
      const s = d.querySelector(":scope > summary");
      return s && /Quality Booster|品質ブースター/.test(s.textContent || "");
    }) || null;
  }

  function markExclusiveRecommended(root){
    const cbs = root.querySelectorAll('input[type="checkbox"]');
    cbs.forEach(function(cb){
      cb.dataset.qpPresetGroup = "quality-v14-recommended";
      cb.addEventListener("change", function(){
        if(!cb.checked) return;
        cbs.forEach(function(other){
          if(other !== cb && other.checked){
            other.checked = false;
            other.dispatchEvent(new Event("change", { bubbles:true }));
          }
        });
      });
    });
  }

  function createSub(title, items){
    if(window.__QP_UTILS && typeof window.__QP_UTILS.createSubAccordion === "function"){
      return window.__QP_UTILS.createSubAccordion(title, items);
    }
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    const summary = document.createElement("summary");
    summary.textContent = title;
    details.appendChild(summary);
    const box = document.createElement("div");
    box.className = "qp-content-grid";
    (items || []).forEach(function(item){
      const label = document.createElement("label");
      const main = document.createElement("div");
      main.className = "qp-item-main";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.dataset.val = item.val || "";
      const span = document.createElement("span");
      span.className = "qp-item-text";
      span.textContent = item.label || item.val || "";
      main.appendChild(cb);
      main.appendChild(span);
      label.appendChild(main);
      if(item.desc){
        const desc = document.createElement("div");
        desc.className = "qp-item-desc";
        desc.textContent = item.desc;
        label.appendChild(desc);
      }
      box.appendChild(label);
    });
    details.appendChild(box);
    return details;
  }

  const API = {
    initUI(container){
      ensureStyles();
      const conQuality = document.getElementById("qp-quality-content");
      if(!conQuality || document.getElementById("qp-v14-integrated")) return;

      const root = document.createElement("details");
      root.id = "qp-v14-integrated";
      root.className = "qp-sub-acc";
      root.open = false;

      const summary = document.createElement("summary");
      summary.textContent = "🧭 クオリティ統合版 v14（お試し）";
      root.appendChild(summary);

      const content = document.createElement("div");
      content.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";

      const guide = document.createElement("div");
      guide.className = "qp-v14-guide";
      guide.textContent = "統合前の試用棚です。上段の品質ブースターは出力時の強度切替、推奨セットは基本1つ選択、下段の用途別棚は必要な分だけ追加します。旧棚は互換確認のため残しています。";
      content.appendChild(guide);

      const boosterSlot = document.createElement("div");
      boosterSlot.className = "qp-v14-booster-slot";
      const booster = findQualityBooster();
      if(booster){
        const boosterSummary = booster.querySelector(":scope > summary");
        if(boosterSummary) boosterSummary.textContent = "🧪 品質ブースター：出力時の強度切替";
        booster.id = "qp-quality-booster";
        boosterSlot.appendChild(booster);
        content.appendChild(boosterSlot);
      }

      const rec = createSub("⭐ 推奨クオリティセット", QUALITY_V14.recommended);
      markExclusiveRecommended(rec);
      content.appendChild(rec);

      content.appendChild(createSub("🏆 基本品質 Core", QUALITY_V14.core));
      content.appendChild(createSub("🔍 解像度・精細 Detail", QUALITY_V14.detail));
      content.appendChild(createSub("🧵 リアル・質感 Material", QUALITY_V14.material));
      content.appendChild(createSub("💡 光・ライティング Lighting", QUALITY_V14.lighting));
      content.appendChild(createSub("🎨 色彩 Color", QUALITY_V14.color));
      content.appendChild(createSub("📷 カメラ・構図 Camera", QUALITY_V14.camera));
      content.appendChild(createSub("✨ エフェクト Effects", QUALITY_V14.effects));
      content.appendChild(createSub("🧍 キャラクター品質 Character", QUALITY_V14.character));
      content.appendChild(createSub("🎭 スタイル維持 Style", QUALITY_V14.style));
      content.appendChild(createSub("✅ 仕上げ Finish", QUALITY_V14.finish));

      root.appendChild(content);

      const first = conQuality.firstElementChild;
      if(first) conQuality.insertBefore(root, first);
      else conQuality.appendChild(root);
    },
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

// --- builder_ui.section.quality_preset.v15.js ---
// v15: クオリティ統合版の正式運用準備 + 旧棚Legacy化。
// 既存棚は削除せず、直接表示されていた旧棚を互換用Legacyへ退避して重複表示を抑える。
(function(){
  "use strict";
  const VERSION = 15;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v15-legacy-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v15-legacy-style";
    style.textContent = `
      #qp-v14-integrated > summary {
        background:#e0f2fe !important;
        color:#0f172a !important;
      }
      #qp-v14-integrated .qp-v14-guide {
        border-color:#bae6fd !important;
        background:#f8fafc !important;
      }
      #qp-quality-legacy-wrap {
        border:1px dashed #cbd5e1 !important;
        background:#f8fafc !important;
        opacity:0.96;
      }
      #qp-quality-legacy-wrap > summary {
        background:#f1f5f9 !important;
        color:#475569 !important;
        font-weight:700 !important;
      }
      #qp-quality-legacy-wrap .qp-v15-legacy-guide {
        font-size:12px;
        line-height:1.6;
        color:#475569;
        background:#ffffff;
        border:1px solid #e2e8f0;
        border-radius:10px;
        padding:8px 10px;
        margin:8px;
      }
      #qp-quality-legacy-wrap .qp-v15-legacy-content {
        padding:0 8px 8px 8px;
      }
    `;
    document.head.appendChild(style);
  }

  function directChildren(el){
    return Array.prototype.slice.call(el ? el.children : []);
  }

  function ensureLegacyWrap(host, root){
    let legacy = document.getElementById("qp-quality-legacy-wrap");
    if(!legacy){
      legacy = document.createElement("details");
      legacy.id = "qp-quality-legacy-wrap";
      legacy.className = "qp-sub-acc";
      legacy.open = false;

      const summary = document.createElement("summary");
      summary.textContent = "🗂 旧クオリティ棚 / Legacy（互換用）";
      legacy.appendChild(summary);

      const guide = document.createElement("div");
      guide.className = "qp-v15-legacy-guide";
      guide.textContent = "v15では上の統合版をメインに使います。旧棚は互換確認・取りこぼし確認用としてここにまとめています。安定確認後、不要な重複だけを次段階で整理できます。";
      legacy.appendChild(guide);

      const box = document.createElement("div");
      box.className = "qp-v15-legacy-content";
      legacy.appendChild(box);

      if(root && root.nextSibling) host.insertBefore(legacy, root.nextSibling);
      else host.appendChild(legacy);
    }
    return legacy;
  }

  function legacyContent(legacy){
    let box = legacy.querySelector(":scope > .qp-v15-legacy-content");
    if(!box){
      box = document.createElement("div");
      box.className = "qp-v15-legacy-content";
      legacy.appendChild(box);
    }
    return box;
  }

  function relabelIntegrated(root){
    if(!root) return;
    root.dataset.qpIntegratedVersion = "15";
    const summary = root.querySelector(":scope > summary");
    if(summary) summary.textContent = "🧭 クオリティ統合版 v15";
    const guide = root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "v15のメイン品質棚です。品質ブースターで出力時の強度を決め、推奨セットは基本1つだけ選択、必要に応じて用途別の単品品質を足します。旧棚は下のLegacyへまとめました。";
    }
  }

  function moveOldShelvesIntoLegacy(host, root, legacy){
    const box = legacyContent(legacy);
    const children = directChildren(host);
    children.forEach(function(child){
      if(child === root || child === legacy) return;
      if(child.id === "qp-v14-integrated" || child.id === "qp-quality-legacy-wrap") return;
      // details以外の補助要素も旧UI由来ならまとめる。ただし空テキストのscript/style等は動かさない。
      if(child.tagName === "STYLE" || child.tagName === "SCRIPT") return;
      box.appendChild(child);
    });
  }

  const API = {
    initUI(container){
      ensureStyles();
      const host = document.getElementById("qp-quality-content");
      if(!host) return;

      const root = document.getElementById("qp-v14-integrated");
      if(!root) return;

      relabelIntegrated(root);

      const legacy = ensureLegacyWrap(host, root);
      moveOldShelvesIntoLegacy(host, root, legacy);

      // 表示順の保険：統合版 → Legacy の順に並べる。
      if(host.firstElementChild !== root){
        host.insertBefore(root, host.firstElementChild);
      }
      if(root.nextElementSibling !== legacy){
        host.insertBefore(legacy, root.nextSibling);
      }
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v16.js ---
// v16: Legacy内の旧品質棚を診断表示。統合済み / 移植候補 / 旧互換 をマーキングする。
// 削除は行わず、次段階の軽量化判断をしやすくする。
(function(){
  "use strict";
  const VERSION = 16;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v16-legacy-diagnosis-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v16-legacy-diagnosis-style";
    style.textContent = `
      #qp-v14-integrated > summary {
        background:#dbeafe !important;
      }
      #qp-quality-legacy-wrap > summary {
        background:#f8fafc !important;
        color:#334155 !important;
      }
      #qp-quality-legacy-wrap[data-qp-filter="integrated"] label:not([data-qp-v16-status="integrated"]),
      #qp-quality-legacy-wrap[data-qp-filter="candidate"] label:not([data-qp-v16-status="candidate"]),
      #qp-quality-legacy-wrap[data-qp-filter="compat"] label:not([data-qp-v16-status="compat"]) {
        display:none !important;
      }
      .qp-v16-diagnosis {
        margin:8px;
        padding:8px 10px;
        border:1px solid #e2e8f0;
        border-radius:10px;
        background:#ffffff;
        color:#475569;
        font-size:12px;
        line-height:1.6;
      }
      .qp-v16-diagnosis strong {
        color:#0f172a;
      }
      .qp-v16-counts {
        display:flex;
        flex-wrap:wrap;
        gap:6px;
        margin-top:6px;
      }
      .qp-v16-counts span,
      .qp-v16-filters button {
        border:1px solid #cbd5e1;
        border-radius:999px;
        padding:3px 8px;
        background:#f8fafc;
        font-size:11px;
        color:#475569;
      }
      .qp-v16-filters {
        display:flex;
        flex-wrap:wrap;
        gap:6px;
        margin-top:8px;
      }
      .qp-v16-filters button {
        cursor:pointer;
      }
      .qp-v16-filters button[data-active="true"] {
        background:#dbeafe;
        border-color:#93c5fd;
        color:#1e3a8a;
        font-weight:700;
      }
      .qp-v16-badge {
        display:inline-flex;
        align-items:center;
        margin-left:6px;
        padding:1px 6px;
        border-radius:999px;
        font-size:10px;
        line-height:1.5;
        vertical-align:middle;
        border:1px solid transparent;
        white-space:nowrap;
      }
      .qp-v16-badge-integrated {
        background:#ecfdf5;
        border-color:#bbf7d0;
        color:#166534;
      }
      .qp-v16-badge-candidate {
        background:#fff7ed;
        border-color:#fed7aa;
        color:#9a3412;
      }
      .qp-v16-badge-compat {
        background:#f8fafc;
        border-color:#cbd5e1;
        color:#475569;
      }
    `;
    document.head.appendChild(style);
  }

  function normText(s){
    return String(s || "")
      .toLowerCase()
      .replace(/[()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function extractPromptStems(val){
    const text = String(val || "");
    const out = [];
    const parenRe = /\(([^()]+)\)/g;
    let m;
    while((m = parenRe.exec(text))){
      let inner = m[1] || "";
      inner = inner.replace(/:\s*[0-9.]+$/g, "");
      inner = normText(inner);
      if(inner) out.push(inner);
    }
    if(!out.length){
      text.split(",").forEach(function(part){
        let p = part.replace(/:\s*[0-9.]+/g, "");
        p = normText(p);
        if(p) out.push(p);
      });
    }
    return Array.from(new Set(out));
  }

  function collectIntegratedStems(root){
    const stems = new Set();
    if(!root) return stems;
    root.querySelectorAll('input[type="checkbox"][data-val]').forEach(function(input){
      extractPromptStems(input.dataset.val || "").forEach(function(stem){
        stems.add(stem);
      });
    });
    return stems;
  }

  function isQualityLike(text){
    const t = normText(text);
    return /(quality|masterpiece|resolution|res|detailed|detail|focus|sharp|crisp|realistic|texture|rendering|material|lighting|illumination|glow|bloom|color|composition|perspective|angle|depth of field|bokeh|flare|particles|aura|anatomy|face|eyes|hair|style|theme|lineart|illustration|concept art|shading|contrast|clear|cinematic|studio|volumetric|hdr|dynamic range|ambient occlusion|ray tracing|professional|fantasy)/.test(t);
  }

  function setBadge(label, status){
    let textNode = label.querySelector(".qp-item-text") || label;
    let badge = label.querySelector(":scope .qp-v16-badge");
    if(!badge){
      badge = document.createElement("span");
      badge.className = "qp-v16-badge";
      textNode.appendChild(badge);
    }
    badge.className = "qp-v16-badge qp-v16-badge-" + status;
    badge.textContent = status === "integrated" ? "統合済み" : (status === "candidate" ? "移植候補" : "旧互換");
  }

  function statusOfInput(input, integratedStems){
    const stems = extractPromptStems(input.dataset.val || "");
    if(stems.length){
      const hit = stems.filter(function(s){ return integratedStems.has(s); }).length;
      if(hit === stems.length) return "integrated";
      if(hit > 0 || isQualityLike((input.dataset.val || "") + " " + (input.closest("label") ? input.closest("label").textContent : ""))) return "candidate";
      return "compat";
    }
    return isQualityLike(input.closest("label") ? input.closest("label").textContent : "") ? "candidate" : "compat";
  }

  function annotateLegacy(root, legacy){
    const integratedStems = collectIntegratedStems(root);
    const counts = { integrated:0, candidate:0, compat:0, total:0 };
    if(!legacy) return counts;

    legacy.querySelectorAll(".qp-v16-badge").forEach(function(b){ b.remove(); });
    legacy.querySelectorAll("label").forEach(function(label){
      const input = label.querySelector('input[type="checkbox"][data-val]');
      if(!input) return;
      const status = statusOfInput(input, integratedStems);
      label.dataset.qpV16Status = status;
      setBadge(label, status);
      counts[status] += 1;
      counts.total += 1;
    });
    return counts;
  }

  function ensureDiagnosisPanel(legacy, counts){
    let panel = legacy.querySelector(":scope > .qp-v16-diagnosis");
    if(!panel){
      panel = document.createElement("div");
      panel.className = "qp-v16-diagnosis";
      const guide = legacy.querySelector(":scope > .qp-v15-legacy-guide");
      if(guide && guide.nextSibling) legacy.insertBefore(panel, guide.nextSibling);
      else legacy.insertBefore(panel, legacy.firstElementChild ? legacy.firstElementChild.nextSibling : null);
    }

    panel.innerHTML = "";
    const title = document.createElement("div");
    title.innerHTML = "<strong>v16診断：</strong>旧棚を削除せず、項目ごとに整理状態を表示しています。まずは「移植候補」に便利な語が残っていないか確認してください。";
    panel.appendChild(title);

    const countsBox = document.createElement("div");
    countsBox.className = "qp-v16-counts";
    [
      ["全項目", counts.total],
      ["統合済み", counts.integrated],
      ["移植候補", counts.candidate],
      ["旧互換", counts.compat]
    ].forEach(function(pair){
      const pill = document.createElement("span");
      pill.textContent = pair[0] + "：" + pair[1];
      countsBox.appendChild(pill);
    });
    panel.appendChild(countsBox);

    const filters = document.createElement("div");
    filters.className = "qp-v16-filters";
    [
      ["all", "全部"],
      ["integrated", "統合済みだけ"],
      ["candidate", "移植候補だけ"],
      ["compat", "旧互換だけ"]
    ].forEach(function(pair){
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.qpFilter = pair[0];
      btn.textContent = pair[1];
      btn.dataset.active = (legacy.dataset.qpFilter || "all") === pair[0] ? "true" : "false";
      btn.addEventListener("click", function(){
        legacy.dataset.qpFilter = pair[0];
        filters.querySelectorAll("button").forEach(function(b){ b.dataset.active = "false"; });
        btn.dataset.active = "true";
      });
      filters.appendChild(btn);
    });
    panel.appendChild(filters);
  }

  function relabelForV16(root, legacy){
    if(root){
      root.dataset.qpIntegratedVersion = "16";
      const summary = root.querySelector(":scope > summary");
      if(summary) summary.textContent = "🧭 クオリティ統合版 v16";
      const guide = root.querySelector(".qp-v14-guide");
      if(guide){
        guide.textContent = "v16では統合版をメインにしつつ、下のLegacy内で旧品質語の重複診断を見られます。基本は推奨セット1つ＋必要な単品品質を少量追加する運用です。";
      }
    }
    if(legacy){
      const summary = legacy.querySelector(":scope > summary");
      if(summary) summary.textContent = "🗂 旧クオリティ棚 / Legacy（v16診断つき）";
      const guide = legacy.querySelector(":scope > .qp-v15-legacy-guide");
      if(guide){
        guide.textContent = "旧棚はまだ削除していません。緑の「統合済み」はv16側に同系語があります。橙の「移植候補」は旧棚に残った有用語の可能性があります。灰色の「旧互換」は保険用です。";
      }
      if(!legacy.dataset.qpFilter) legacy.dataset.qpFilter = "all";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      const legacy = document.getElementById("qp-quality-legacy-wrap");
      if(!root || !legacy) return;

      relabelForV16(root, legacy);
      const counts = annotateLegacy(root, legacy);
      ensureDiagnosisPanel(legacy, counts);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


})();



// --- builder_ui.section.quality_preset.v17.js ---
// v17: Legacyの移植候補から、統合版へ残す価値が高い品質語を救出。
// 旧棚はまだ削除せず、Legacyは初期表示を「移植候補」寄りにして軽量化する。
(function(){
  "use strict";
  const VERSION = 17;
  const KEY = "quality_preset";

  const QUALITY_V17_RESCUED = [
    {
      label: "CGアニメ艶彩：透明感と粒子光",
      desc: "旧CGアニメ艶彩系から救出。アニメリアルに透明感・髪艶・粒子光を足す。",
      val: "(CG animation:1.2), (refined shading:1.2), (transparent glow:1.15), (ethereal pastel haze:1.15), (shiny hair:1.1), (subtle skin glow:1.1), (drifting particle lights:1.1), (soft bokeh sparkles:1.1), (subtle colored light reflection in air:1.1)"
    },
    {
      label: "硬質レンダ：PBR・素材分離",
      desc: "3D/レンダ系から救出。金属・装甲・宝石・硬質素材向け。",
      val: "(physically based rendering:1.2), (path tracing:1.1), (ray tracing-inspired effects:1.1), (specular control:1.1), (clean material separation:1.1), (high-end render quality:1.2)"
    },
    {
      label: "肌髪質感：近距離キャラ補助",
      desc: "写実・質感系から救出。顔アップやバストアップで肌・髪の密度を足す。",
      val: "(realistic skin texture:1.2), (fine hair strands:1.2), (material realism:1.2), (subsurface scattering:1.2), (soft skin glow:1.1)"
    },
    {
      label: "ポートレート照明：顔を綺麗に",
      desc: "照明系から救出。顔・目・肌を見せたいポートレート向け。",
      val: "(softbox lighting:1.2), (rembrandt lighting:1.15), (butterfly lighting:1.15), (catchlight:1.2), (soft natural lighting:1.2)"
    },
    {
      label: "映画後処理：フィルム質感",
      desc: "レンズ・ポストエフェクト系から救出。映画風の空気感を足す。",
      val: "(post-processing:1.15), (halation:1.1), (film grain:1.05), (vignette:1.05), (chromatic aberration:1.05)"
    },
    {
      label: "奥行き空気：背景なじませ",
      desc: "旧奥行き・空気感語から救出。背景と人物を自然につなぐ。",
      val: "(depth haze:1.15), (atmospheric perspective:1.15), (subtle fog:1.1), (depth of field:1.15), (cinematic framing:1.1)"
    },
    {
      label: "商業クリア：広告・商品寄り",
      desc: "商業/商品系の安全な品質補助。小物・衣装・商品を綺麗に見せる。",
      val: "(clean studio lighting:1.2), (product photography:1.15), (crisp edges:1.15), (color accurate rendering:1.15), (professional illustration:1.2)"
    }
  ];

  function ensureStyles(){
    if(document.getElementById("qp-v17-legacy-light-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v17-legacy-light-style";
    style.textContent = `
      #qp-v14-integrated[data-qp-integrated-version="17"] > summary {
        background:#dcfce7 !important;
        color:#14532d !important;
      }
      #qp-v17-rescued {
        border:1px solid #bbf7d0 !important;
        background:#f0fdf4 !important;
      }
      #qp-v17-rescued > summary {
        background:#dcfce7 !important;
        color:#166534 !important;
        font-weight:700 !important;
      }
      #qp-v17-rescued .qp-v17-note {
        margin:8px;
        padding:8px 10px;
        border:1px solid #bbf7d0;
        border-radius:10px;
        background:#ffffff;
        color:#166534;
        font-size:12px;
        line-height:1.6;
      }
      #qp-quality-legacy-wrap[data-qp-v17-light="true"] {
        opacity:0.92;
      }
      #qp-quality-legacy-wrap[data-qp-v17-light="true"] > summary {
        background:#f8fafc !important;
        color:#64748b !important;
      }
      #qp-quality-legacy-wrap[data-qp-v17-light="true"][data-qp-filter="all"] label[data-qp-v16-status="integrated"] {
        opacity:0.48;
      }
      #qp-quality-legacy-wrap .qp-v17-legacy-note {
        margin:8px;
        padding:8px 10px;
        border:1px solid #e2e8f0;
        border-radius:10px;
        background:#f8fafc;
        color:#475569;
        font-size:12px;
        line-height:1.6;
      }
    `;
    document.head.appendChild(style);
  }

  function createSub(title, items){
    if(window.__QP_UTILS && typeof window.__QP_UTILS.createSubAccordion === "function"){
      return window.__QP_UTILS.createSubAccordion(title, items);
    }
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    const summary = document.createElement("summary");
    summary.textContent = title;
    details.appendChild(summary);
    const box = document.createElement("div");
    box.className = "qp-content-grid";
    (items || []).forEach(function(item){
      const label = document.createElement("label");
      const main = document.createElement("div");
      main.className = "qp-item-main";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.dataset.val = item.val || "";
      const span = document.createElement("span");
      span.className = "qp-item-text";
      span.textContent = item.label || item.val || "";
      main.appendChild(cb);
      main.appendChild(span);
      label.appendChild(main);
      if(item.desc){
        const desc = document.createElement("div");
        desc.className = "qp-item-desc";
        desc.textContent = item.desc;
        label.appendChild(desc);
      }
      box.appendChild(label);
    });
    details.appendChild(box);
    return details;
  }

  function insertRescuedShelf(root){
    if(!root || document.getElementById("qp-v17-rescued")) return;
    const shelf = createSub("🧩 Legacy救出：v17追加分", QUALITY_V17_RESCUED);
    shelf.id = "qp-v17-rescued";

    const note = document.createElement("div");
    note.className = "qp-v17-note";
    note.textContent = "旧棚の移植候補から、統合版にも残したい語だけを救出しました。基本は必要なものを1〜2個だけ足す運用です。";
    const firstContent = shelf.querySelector(":scope > .qp-content-grid, :scope > div");
    if(firstContent) shelf.insertBefore(note, firstContent);
    else shelf.appendChild(note);

    const content = root.querySelector(":scope > div");
    if(!content){
      root.appendChild(shelf);
      return;
    }

    const rec = Array.from(content.children).find(function(el){
      const sum = el.querySelector && el.querySelector(":scope > summary");
      return sum && /推奨クオリティセット/.test(sum.textContent || "");
    });
    if(rec && rec.nextSibling) content.insertBefore(shelf, rec.nextSibling);
    else if(rec) content.appendChild(shelf);
    else {
      const booster = content.querySelector(".qp-v14-booster-slot");
      if(booster && booster.nextSibling) content.insertBefore(shelf, booster.nextSibling);
      else content.appendChild(shelf);
    }
  }

  function relabel(root, legacy){
    if(root){
      root.dataset.qpIntegratedVersion = "17";
      const summary = root.querySelector(":scope > summary");
      if(summary) summary.textContent = "🧭 クオリティ統合版 v17";
      const guide = root.querySelector(".qp-v14-guide");
      if(guide){
        guide.textContent = "v17では旧棚の移植候補から有用な語を統合版へ救出しました。普段使いは統合版、旧棚は確認・保険用です。推奨セットは基本1つ、追加品質は少量が安全です。";
      }
    }
    if(legacy){
      legacy.dataset.qpV17Light = "true";
      const summary = legacy.querySelector(":scope > summary");
      if(summary) summary.textContent = "🗂 旧クオリティ棚 / Legacy（v17軽量表示）";
      const guide = legacy.querySelector(":scope > .qp-v15-legacy-guide");
      if(guide){
        guide.textContent = "v17では移植候補の一部を統合版へ救出済みです。Legacyは互換・確認用として残し、初期表示は軽量にしています。";
      }

      if(!legacy.querySelector(":scope > .qp-v17-legacy-note")){
        const note = document.createElement("div");
        note.className = "qp-v17-legacy-note";
        note.textContent = "次段階で削除する前の保険棚です。必要な旧語が残っていないか見る時だけ開いてください。";
        const diag = legacy.querySelector(":scope > .qp-v16-diagnosis");
        if(diag && diag.nextSibling) legacy.insertBefore(note, diag.nextSibling);
        else legacy.appendChild(note);
      }

      // 軽量化：初期表示は残った移植候補を優先。ユーザーがフィルターを触れば全表示へ戻せる。
      if(!legacy.dataset.qpV17UserFilterTouched){
        legacy.dataset.qpFilter = "candidate";
      }
      legacy.querySelectorAll(".qp-v16-filters button").forEach(function(btn){
        btn.dataset.active = btn.dataset.qpFilter === legacy.dataset.qpFilter ? "true" : "false";
        if(!btn.dataset.qpV17Bound){
          btn.dataset.qpV17Bound = "true";
          btn.addEventListener("click", function(){
            legacy.dataset.qpV17UserFilterTouched = "true";
          });
        }
      });
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      const legacy = document.getElementById("qp-quality-legacy-wrap");
      if(!root) return;

      insertRescuedShelf(root);
      relabel(root, legacy);

      // v17救出語を入れた後にv16診断が再実行できる場合は、統合済み判定を更新する。
      try{
        if(window.__registerPromptPart){
          // no-op: v16 APIは登録システム側の順序で実行済みのため、ここではDOM軽量化だけを行う。
        }
      }catch(e){}
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v18.js ---
// v18: Legacy内の「統合済み」重複を実UIから削減し、旧互換・未救出候補だけを残す。
// Quality Booster と統合版本体は触らない。
(function(){
  "use strict";
  const VERSION = 18;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v18-legacy-prune-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v18-legacy-prune-style";
    style.textContent = `
      #qp-v14-integrated[data-qp-integrated-version="18"] > summary {
        background:#bbf7d0 !important;
        color:#14532d !important;
      }
      #qp-quality-legacy-wrap[data-qp-v18-pruned="true"] {
        opacity:0.9;
      }
      #qp-quality-legacy-wrap[data-qp-v18-pruned="true"] > summary {
        background:#f8fafc !important;
        color:#475569 !important;
      }
      #qp-quality-legacy-wrap .qp-v18-prune-note {
        margin:8px;
        padding:8px 10px;
        border:1px solid #cbd5e1;
        border-radius:10px;
        background:#ffffff;
        color:#334155;
        font-size:12px;
        line-height:1.6;
      }
      #qp-quality-legacy-wrap .qp-v18-prune-log {
        margin:8px;
        padding:8px 10px;
        border:1px dashed #cbd5e1;
        border-radius:10px;
        background:#f8fafc;
        color:#64748b;
        font-size:11px;
        line-height:1.6;
      }
      #qp-quality-legacy-wrap .qp-v18-prune-log code {
        white-space:normal;
        word-break:break-word;
      }
    `;
    document.head.appendChild(style);
  }

  function normalizeToken(str){
    return String(str || "")
      .toLowerCase()
      .replace(/\([^)]*:[0-9.]+\)/g, function(m){ return m.replace(/:[0-9.]+/g, ""); })
      .replace(/:[0-9.]+/g, "")
      .replace(/[()\[\]{}"'`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function phraseStems(str){
    const s = normalizeToken(str);
    const stems = [];
    // 括弧内フレーズを優先して拾う
    String(str || "").replace(/\(([^):]+)(?::[0-9.]+)?\)/g, function(_, p){
      const n = normalizeToken(p);
      if(n && n.length >= 4) stems.push(n);
      return "";
    });
    s.split(",").forEach(function(part){
      const n = normalizeToken(part);
      if(n && n.length >= 4) stems.push(n);
    });
    return Array.from(new Set(stems));
  }

  function collectIntegratedStems(root){
    const set = new Set();
    if(!root) return set;
    root.querySelectorAll('input[type="checkbox"][data-val]').forEach(function(input){
      phraseStems(input.dataset.val || input.value || "").forEach(function(stem){ set.add(stem); });
    });
    return set;
  }

  function isIntegratedDuplicate(label, input, integratedStems){
    if(!label || !input) return false;
    if(label.dataset.qpV16Status === "integrated") return true;
    const stems = phraseStems(input.dataset.val || input.value || "");
    return stems.some(function(stem){ return integratedStems.has(stem); });
  }

  function isSafeToPrune(label, input){
    if(!label || !input) return false;
    // 既にチェックされている旧項目は、ユーザー状態を壊さないため残す。
    if(input.checked) return false;
    // 移植候補・旧互換は今回削らない。
    if(label.dataset.qpV16Status === "candidate" || label.dataset.qpV16Status === "compat") return false;
    return true;
  }

  function cleanEmptyLegacyShelves(legacy){
    if(!legacy) return 0;
    let removed = 0;
    const box = legacy.querySelector(":scope > .qp-v15-legacy-content") || legacy;
    Array.prototype.slice.call(box.querySelectorAll("details")).reverse().forEach(function(details){
      if(details.id === "qp-quality-legacy-wrap") return;
      const hasInput = details.querySelector('input[type="checkbox"][data-val], input[type="radio"]');
      const hasChildDetails = details.querySelector("details");
      if(!hasInput && !hasChildDetails){
        details.remove();
        removed++;
      }
    });
    return removed;
  }

  function ensurePrunePanel(legacy, removedLabels, emptyShelfCount){
    if(!legacy) return;
    let note = legacy.querySelector(":scope > .qp-v18-prune-note");
    if(!note){
      note = document.createElement("div");
      note.className = "qp-v18-prune-note";
      const guide = legacy.querySelector(":scope > .qp-v15-legacy-guide");
      if(guide && guide.nextSibling) legacy.insertBefore(note, guide.nextSibling);
      else legacy.insertBefore(note, legacy.firstElementChild ? legacy.firstElementChild.nextSibling : null);
    }
    note.innerHTML = "<strong>v18：</strong>統合版に吸収済みの旧品質語をLegacy表示から削減しました。旧互換・未救出候補・チェック済み項目は残しています。";

    let log = legacy.querySelector(":scope > .qp-v18-prune-log");
    if(!log){
      log = document.createElement("div");
      log.className = "qp-v18-prune-log";
      if(note.nextSibling) legacy.insertBefore(log, note.nextSibling);
      else legacy.appendChild(log);
    }
    const sample = removedLabels.slice(0, 12).map(function(t){
      return String(t || "").replace(/\s+/g, " ").trim();
    }).filter(Boolean);
    log.innerHTML =
      "<strong>削減ログ：</strong>" +
      "統合済み重複 " + removedLabels.length + "件" +
      (emptyShelfCount ? " / 空になった旧棚 " + emptyShelfCount + "件" : "") +
      (sample.length ? "<br><code>" + sample.map(function(s){ return s.replace(/[<>&]/g, function(c){ return { "<":"&lt;", ">":"&gt;", "&":"&amp;" }[c]; }); }).join(" / ") + "</code>" : "");
  }

  function pruneIntegratedLegacy(root, legacy){
    if(!root || !legacy) return { removed:[], empty:0 };
    const integratedStems = collectIntegratedStems(root);
    const removed = [];
    const box = legacy.querySelector(":scope > .qp-v15-legacy-content") || legacy;

    box.querySelectorAll("label").forEach(function(label){
      const input = label.querySelector('input[type="checkbox"][data-val]');
      if(!input) return;
      if(!isSafeToPrune(label, input)) return;
      if(!isIntegratedDuplicate(label, input, integratedStems)) return;

      removed.push(label.textContent || input.dataset.val || input.value || "");
      label.remove();
    });

    const empty = cleanEmptyLegacyShelves(legacy);
    return { removed:removed, empty:empty };
  }

  function relabel(root, legacy){
    if(root){
      root.dataset.qpIntegratedVersion = "18";
      const summary = root.querySelector(":scope > summary");
      if(summary) summary.textContent = "🧭 クオリティ統合版 v18";
      const guide = root.querySelector(".qp-v14-guide");
      if(guide){
        guide.textContent = "v18では統合版を正式メインにし、Legacy内の統合済み重複を削減しました。Quality Boosterは出力時の強度切替として上段に残しています。";
      }
    }
    if(legacy){
      legacy.dataset.qpV18Pruned = "true";
      const summary = legacy.querySelector(":scope > summary");
      if(summary) summary.textContent = "🗂 旧クオリティ棚 / Legacy（v18削減後）";
      const guide = legacy.querySelector(":scope > .qp-v15-legacy-guide");
      if(guide){
        guide.textContent = "v18では統合済みの重複品質語をLegacy表示から削減しました。ここには旧互換・未救出候補・確認用だけを残しています。";
      }
      // v16フィルターが残っている場合、削減後は全体確認に戻す。
      legacy.dataset.qpFilter = "all";
      legacy.querySelectorAll(".qp-v16-filters button").forEach(function(btn){
        btn.dataset.active = btn.dataset.qpFilter === "all" ? "true" : "false";
      });
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      const legacy = document.getElementById("qp-quality-legacy-wrap");
      if(!root || !legacy) return;

      relabel(root, legacy);
      if(legacy.dataset.qpV18PruneDone !== "true"){
        const result = pruneIntegratedLegacy(root, legacy);
        legacy.dataset.qpV18PruneDone = "true";
        window.__QP_V18_LEGACY_REMOVED = result.removed.slice();
        ensurePrunePanel(legacy, result.removed, result.empty);
      }else{
        ensurePrunePanel(legacy, window.__QP_V18_LEGACY_REMOVED || [], 0);
      }
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v19.js ---
// v19: Quality Boosterを「品質語の追加棚」ではなく「出力時補正」として正式整理。
// 既存の補正処理は壊さず、localStorageに残ったモードをwindowへ同期し、UI文言と注意書きを整える。
(function(){
  "use strict";
  const VERSION = 19;
  const KEY = "quality_preset";
  const LS_KEY = "QUALITY_MODE_V1";

  const MODE_TEXT = {
    normal: {
      label: "🟦 標準 Normal",
      desc: "選んだ品質語をそのまま使います。まずはこのモードが安全です。"
    },
    enhanced: {
      label: "🟨 強化 Enhanced",
      desc: "best quality 系を highest quality 寄りへ補正します。推奨セットと併用しやすい中間モードです。"
    },
    extreme: {
      label: "🟥 限界 Extreme",
      desc: "masterpiece / absurdres などを追加する強めの補正です。品質語が多いセットでは盛りすぎに注意してください。"
    }
  };

  function ensureStyles(){
    if(document.getElementById("qp-v19-booster-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v19-booster-style";
    style.textContent = `
      #qp-v14-integrated[data-qp-integrated-version="19"] > summary {
        background:#a7f3d0 !important;
        color:#064e3b !important;
      }
      #qp-quality-booster[data-qp-v19-booster="true"] {
        border:1px solid #bae6fd !important;
        background:#f8fbff !important;
      }
      #qp-quality-booster[data-qp-v19-booster="true"] > summary {
        background:#e0f2fe !important;
        color:#075985 !important;
        font-weight:700 !important;
      }
      .qp-v19-booster-note {
        margin:8px;
        padding:8px 10px;
        border:1px solid #bae6fd;
        border-radius:10px;
        background:#ffffff;
        color:#334155;
        font-size:12px;
        line-height:1.6;
      }
      .qp-v19-booster-note strong {
        color:#075985;
      }
      .qp-v19-mode-pill {
        display:inline-flex;
        align-items:center;
        margin-left:6px;
        padding:1px 7px;
        border-radius:999px;
        background:#eff6ff;
        border:1px solid #bfdbfe;
        color:#1d4ed8;
        font-size:10px;
        line-height:1.5;
        white-space:nowrap;
      }
    `;
    document.head.appendChild(style);
  }

  function syncQualityModeFromStorage(){
    let mode = "normal";
    try{
      mode = localStorage.getItem(LS_KEY) || window.__QUALITY_MODE || "normal";
    }catch(e){
      mode = window.__QUALITY_MODE || "normal";
    }
    if(!MODE_TEXT[mode]) mode = "normal";
    window.__QUALITY_MODE = mode;
    try{ localStorage.setItem(LS_KEY, mode); }catch(e){}
    return mode;
  }

  function findBooster(){
    return document.getElementById("qp-quality-booster") || Array.prototype.slice.call(document.querySelectorAll("details")).find(function(d){
      const s = d.querySelector(":scope > summary");
      return s && /Quality Booster|品質ブースター/.test(s.textContent || "");
    }) || null;
  }

  function ensureBoosterNote(booster){
    if(!booster || booster.querySelector(":scope > .qp-v19-booster-note")) return;
    const note = document.createElement("div");
    note.className = "qp-v19-booster-note";
    note.innerHTML = "<strong>出力時補正：</strong>ここは品質プロンプトを選ぶ棚ではなく、出力時に <code>best quality</code> 系をどう扱うかを決めるモードです。通常は標準、もう少し押したい時は強化、最大盛りだけ限界を使ってください。";
    const firstBox = booster.querySelector(":scope > .qp-content-grid, :scope > div");
    if(firstBox) booster.insertBefore(note, firstBox);
    else booster.appendChild(note);
  }

  function relabelBoosterModes(booster, currentMode){
    if(!booster) return;
    booster.dataset.qpV19Booster = "true";
    booster.id = "qp-quality-booster";

    const summary = booster.querySelector(":scope > summary");
    if(summary) summary.textContent = "🧪 品質ブースター：出力時補正";

    booster.querySelectorAll('input[type="radio"][name="quality-booster-mode"]').forEach(function(radio){
      const data = MODE_TEXT[radio.value];
      if(!data) return;
      radio.checked = radio.value === currentMode;

      const label = radio.closest("label");
      if(!label) return;

      const text = label.querySelector(".qp-item-text");
      if(text){
        text.textContent = data.label;
        let pill = text.querySelector(".qp-v19-mode-pill");
        if(!pill){
          pill = document.createElement("span");
          pill.className = "qp-v19-mode-pill";
          text.appendChild(pill);
        }
        pill.textContent = radio.value === "normal" ? "安全" : (radio.value === "enhanced" ? "中間" : "強め");
      }

      const desc = label.querySelector(".qp-item-desc");
      if(desc) desc.textContent = data.desc;
    });
  }

  function bindModeSync(booster){
    if(!booster || booster.dataset.qpV19Bound === "true") return;
    booster.dataset.qpV19Bound = "true";
    booster.addEventListener("change", function(ev){
      const radio = ev && ev.target && ev.target.matches ? ev.target : null;
      if(!radio || !radio.matches('input[type="radio"][name="quality-booster-mode"]') || !radio.checked) return;
      if(!MODE_TEXT[radio.value]) return;
      window.__QUALITY_MODE = radio.value;
      try{ localStorage.setItem(LS_KEY, radio.value); }catch(e){}
      relabelBoosterModes(booster, radio.value);
    });
  }

  function relabelIntegrated(root){
    if(!root) return;
    root.dataset.qpIntegratedVersion = "19";
    const summary = root.querySelector(":scope > summary");
    if(summary) summary.textContent = "🧭 クオリティ統合版 v19";
    const guide = root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "v19ではQuality Boosterを出力時補正として正式整理しました。品質セットで実際の品質語を選び、Boosterでは強度だけを切り替えます。迷ったら標準Normalが安全です。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      const booster = findBooster();
      const currentMode = syncQualityModeFromStorage();

      relabelIntegrated(root);
      if(booster){
        ensureBoosterNote(booster);
        relabelBoosterModes(booster, currentMode);
        bindModeSync(booster);
      }
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v20.js ---
// v20: UI上の正式版化。v番号や診断感を表面から下げ、統合版を普段使いの主棚として整理する。
// 旧棚は削除せず、最下段の保険Legacyとして残す。
(function(){
  "use strict";
  const VERSION = 20;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v20-finalize-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v20-finalize-style";
    style.textContent = `
      #qp-v14-integrated[data-qp-integrated-version="20"] {
        border-color:#86efac !important;
        background:#f7fff9 !important;
      }
      #qp-v14-integrated[data-qp-integrated-version="20"] > summary {
        background:#dcfce7 !important;
        color:#14532d !important;
        font-weight:800 !important;
      }
      #qp-v14-integrated[data-qp-integrated-version="20"] .qp-v14-guide {
        border-color:#bbf7d0 !important;
        background:#ffffff !important;
        color:#334155 !important;
      }
      #qp-v20-quick-guide {
        margin:0 0 8px 0;
        padding:8px 10px;
        border:1px solid #bbf7d0;
        border-radius:10px;
        background:#f0fdf4;
        color:#166534;
        font-size:12px;
        line-height:1.65;
      }
      #qp-v20-quick-guide strong {
        color:#14532d;
      }
      #qp-quality-legacy-wrap[data-qp-v20-legacy="true"] {
        margin-top:10px !important;
        border-style:dashed !important;
        opacity:0.82;
      }
      #qp-quality-legacy-wrap[data-qp-v20-legacy="true"] > summary {
        background:#f8fafc !important;
        color:#64748b !important;
        font-weight:700 !important;
      }
      #qp-quality-legacy-wrap[data-qp-v20-legacy="true"] .qp-v15-legacy-guide {
        border-color:#e2e8f0 !important;
        background:#ffffff !important;
        color:#64748b !important;
      }
      #qp-v20-legacy-admin-log {
        margin:8px;
        border:1px dashed #cbd5e1;
        border-radius:10px;
        background:#ffffff;
      }
      #qp-v20-legacy-admin-log > summary {
        padding:7px 10px;
        cursor:pointer;
        color:#64748b;
        font-size:12px;
        font-weight:700;
      }
      #qp-v20-legacy-admin-log > div {
        padding:0 8px 8px 8px;
      }
      #qp-v20-legacy-admin-log .qp-v16-diagnosis,
      #qp-v20-legacy-admin-log .qp-v18-prune-note,
      #qp-v20-legacy-admin-log .qp-v18-prune-log {
        margin:8px 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  function directSummaryText(details, text){
    if(!details) return;
    const summary = details.querySelector(":scope > summary");
    if(summary) summary.textContent = text;
  }

  function ensureQuickGuide(root){
    if(!root) return;
    const content = root.querySelector(":scope > div");
    if(!content) return;
    let guide = document.getElementById("qp-v20-quick-guide");
    if(!guide){
      guide = document.createElement("div");
      guide.id = "qp-v20-quick-guide";
      const firstGuide = content.querySelector(".qp-v14-guide");
      if(firstGuide && firstGuide.nextSibling){
        content.insertBefore(guide, firstGuide.nextSibling);
      }else if(firstGuide){
        content.insertBefore(guide, firstGuide);
      }else{
        content.insertBefore(guide, content.firstChild);
      }
    }
    guide.innerHTML = "<strong>使い方：</strong>まず推奨セットを1つ選び、足りない時だけ細部棚を足します。品質ブースターは品質語を増やす棚ではなく、出力時の強度補正です。迷ったら標準 Normal が安全です。";
  }

  function relabelIntegrated(root){
    if(!root) return;
    root.dataset.qpIntegratedVersion = "20";
    directSummaryText(root, "🧭 品質・設定 統合版");
    const guide = root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "実運用向けの統合品質棚です。品質セット、用途別の細部調整、品質ブースターをこの中にまとめています。";
    }

    Array.prototype.forEach.call(root.querySelectorAll("details"), function(d){
      const summary = d.querySelector(":scope > summary");
      if(!summary) return;
      const t = summary.textContent || "";
      if(/Legacy救出|v17追加分/.test(t)){
        summary.textContent = "🧩 追加品質セット：旧棚から救出";
      }
    });
  }

  function relabelLegacy(legacy){
    if(!legacy) return;
    legacy.dataset.qpV20Legacy = "true";
    legacy.open = false;
    directSummaryText(legacy, "🗂 旧クオリティ棚 / Legacy（保険）");
    const guide = legacy.querySelector(".qp-v15-legacy-guide");
    if(guide){
      guide.textContent = "通常は使わなくてOKです。旧構成の確認や、統合版にない古い項目を一時的に使いたい時だけ開いてください。";
    }
  }

  function moveLegacyToBottom(host, legacy){
    if(host && legacy && legacy.parentElement === host && host.lastElementChild !== legacy){
      host.appendChild(legacy);
    }
  }

  function tuckAdminPanels(legacy){
    if(!legacy) return;
    let holder = document.getElementById("qp-v20-legacy-admin-log");
    if(!holder){
      holder = document.createElement("details");
      holder.id = "qp-v20-legacy-admin-log";
      holder.open = false;
      const summary = document.createElement("summary");
      summary.textContent = "管理ログ・診断表示";
      holder.appendChild(summary);
      const box = document.createElement("div");
      holder.appendChild(box);

      const content = legacy.querySelector(".qp-v15-legacy-content");
      if(content){
        legacy.insertBefore(holder, content);
      }else{
        legacy.appendChild(holder);
      }
    }
    const box = holder.querySelector(":scope > div") || holder;
    [".qp-v16-diagnosis", ".qp-v18-prune-note", ".qp-v18-prune-log"].forEach(function(sel){
      Array.prototype.forEach.call(legacy.querySelectorAll(sel), function(node){
        if(holder.contains(node)) return;
        box.appendChild(node);
      });
    });
  }

  const API = {
    initUI(container){
      ensureStyles();
      const host = document.getElementById("qp-quality-content");
      const root = document.getElementById("qp-v14-integrated");
      const legacy = document.getElementById("qp-quality-legacy-wrap");

      relabelIntegrated(root);
      ensureQuickGuide(root);
      relabelLegacy(legacy);
      tuckAdminPanels(legacy);
      moveLegacyToBottom(host, legacy);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v21.js ---
// v21: Legacy/旧棚救出表示をUIから削除し、推奨クオリティセットを作風別に再編。
// 旧棚DOMは通常UIから外し、品質棚は「アニメリアル / CGアニメ / フォトリアル / 画材表現」の起点を明確化する。
(function(){
  "use strict";
  const VERSION = 21;
  const KEY = "quality_preset";

  const STYLE_SETS = {
    animeReal: [
      {
        label: "アニメリアル標準：幻想・キャラ向け",
        desc: "リアル寄りアニメ調の標準。ファンタジー、人物、アクションの起点。",
        val: "(masterpiece:1.3), (best quality:1.3), (amazing quality:1.3), (ultra high resolution:1.3), (anime-realism blend:1.3), (semi-realistic rendering:1.3), (realistic textures:1.2), (intricate details:1.3), (cinematic lighting:1.3), (volumetric lighting:1.2), (depth of field:1.2), (consistent anatomy:1.3), (style consistency:1.3)"
      },
      {
        label: "アニメリアル強化：光と迫力",
        desc: "幻想光、奥行き、派手めの完成度を足したい時。",
        val: "(godlike quality:1.3), (masterpiece:1.3), (best quality:1.3), (anime-realism blend:1.3), (semi-realistic rendering:1.3), (intricate details:1.3), (extremely detailed:1.3), (cinematic lighting:1.3), (volumetric god rays:1.3), (ethereal glow:1.2), (high dynamic range:1.2), (masterpiece lighting:1.3), (theme consistency:1.3)"
      },
      {
        label: "アニメリアル軽量：2000字制限向け",
        desc: "短めで破綻しにくい品質補助。",
        val: "(masterpiece:1.3), (best quality:1.3), (anime-realism blend:1.3), (intricate details:1.2), (cinematic lighting:1.2), (consistent anatomy:1.2), (style consistency:1.2)"
      }
    ],
    cgAnime: [
      {
        label: "CGアニメ標準：艶・透明感",
        desc: "3D/CGアニメ風の艶、透明感、ライティングを補助。",
        val: "(best quality:1.3), (ultra quality:1.3), (high resolution:1.2), (glossy CG anime style:1.3), (clean 3D anime rendering:1.3), (smooth shading:1.2), (subsurface scattering:1.2), (ray tracing lighting:1.2), (bloom lighting:1.2), (crystal clear:1.2), (color grading:1.2)"
      },
      {
        label: "CGアニメ：セルルック",
        desc: "線と面が読みやすいセル調CG寄り。",
        val: "(best quality:1.3), (clean cel shaded anime style:1.3), (clean lineart:1.2), (smooth color blocks:1.2), (sharp focus:1.2), (vivid anime colors:1.2), (ambient occlusion:1.2), (style consistency:1.3)"
      },
      {
        label: "CGアニメ：ゲームPV風",
        desc: "ゲームPV、キャラ紹介、派手なCG演出向け。",
        val: "(masterpiece:1.3), (ultra quality:1.3), (professional 3D anime render:1.3), (cinematic composition:1.3), (dynamic lighting:1.2), (global illumination:1.2), (rim lighting:1.2), (glowing particles:1.2), (high color contrast:1.2)"
      }
    ],
    photoreal: [
      {
        label: "フォトリアル標準：自然光ポートレート",
        desc: "写真寄り、自然光、肌と素材のリアル感。",
        val: "(photo-realistic rendering:1.3), (hyperrealistic:1.2), (realistic textures:1.3), (realistic materials:1.2), (soft natural lighting:1.2), (subsurface scattering:1.2), (depth of field:1.2), (bokeh:1.2), (sharp focus:1.2), (high dynamic range:1.2)"
      },
      {
        label: "フォトリアル：スタジオ撮影",
        desc: "安定した撮影照明と商業写真寄り。",
        val: "(photo-realistic rendering:1.3), (studio lighting:1.2), (realistic textures:1.3), (realistic materials:1.2), (detailed face:1.2), (detailed eyes:1.2), (crisp details:1.2), (color grading:1.2), (professional photography style:1.2)"
      },
      {
        label: "フォトリアル：映画スチル",
        desc: "映画の1カット風。陰影と空気感を強める。",
        val: "(cinematic photorealism:1.3), (photo-realistic rendering:1.2), (cinematic lighting:1.3), (dramatic lighting:1.2), (volumetric lighting:1.2), (high dynamic range:1.2), (cinematic composition:1.3), (depth of field:1.2), (film still:1.2)"
      }
    ],
    painterly: [
      {
        label: "パステルカラー：やわらか淡色",
        desc: "柔らかい淡色、かわいい・幻想・癒やし系。",
        val: "(pastel colors:1.3), (soft color palette:1.2), (gentle lighting:1.2), (soft shading:1.2), (delicate details:1.2), (dreamy atmosphere:1.2), (color harmony:1.2)"
      },
      {
        label: "水彩画：透明感・にじみ",
        desc: "透明水彩、淡いにじみ、紙の質感。",
        val: "(watercolor painting:1.3), (transparent watercolor wash:1.2), (soft pigment bleeding:1.2), (paper texture:1.2), (delicate brushwork:1.2), (gentle colors:1.2)"
      },
      {
        label: "水墨画：墨・余白・筆致",
        desc: "和風、墨の濃淡、余白を活かす絵向け。",
        val: "(sumi-e ink painting:1.3), (black ink wash:1.2), (monochrome brushwork:1.2), (expressive ink strokes:1.2), (washi paper texture:1.2), (minimal color palette:1.1)"
      },
      {
        label: "色鉛筆画：手描き粒子感",
        desc: "やさしい手描き、細かい線、紙目の表現。",
        val: "(colored pencil drawing:1.3), (visible pencil strokes:1.2), (soft hand-drawn texture:1.2), (paper grain:1.2), (delicate linework:1.2), (warm colors:1.1)"
      },
      {
        label: "油彩画：厚塗り・重厚",
        desc: "重厚な絵画調、厚い筆跡、クラシック寄り。",
        val: "(oil painting:1.3), (thick brush strokes:1.2), (impasto texture:1.2), (rich colors:1.2), (dramatic lighting:1.2), (painterly shading:1.2)"
      },
      {
        label: "アクリル画：鮮やかポップ",
        desc: "くっきり鮮やか、ポスター感のある絵具表現。",
        val: "(acrylic painting:1.3), (bold brushwork:1.2), (vivid colors:1.2), (clean color shapes:1.2), (high color contrast:1.2)"
      },
      {
        label: "ガッシュ：マット塗り",
        desc: "不透明水彩、マットで絵本的な塗り。",
        val: "(gouache painting:1.3), (matte paint texture:1.2), (opaque colors:1.2), (soft edges:1.1), (storybook illustration style:1.2)"
      },
      {
        label: "鉛筆スケッチ：ラフ線画",
        desc: "下描き、ラフ、モノクロの線画確認向け。",
        val: "(pencil sketch:1.3), (graphite drawing:1.2), (visible sketch lines:1.2), (hand-drawn linework:1.2), (paper texture:1.1)"
      },
      {
        label: "木炭画：強い陰影",
        desc: "黒白の陰影、荒いタッチ、重い雰囲気。",
        val: "(charcoal drawing:1.3), (rough charcoal texture:1.2), (strong chiaroscuro:1.2), (monochrome shading:1.2), (paper grain:1.1)"
      },
      {
        label: "マーカーイラスト：くっきり発色",
        desc: "コピック風、鮮やかな手描きイラスト。",
        val: "(marker illustration:1.3), (alcohol marker coloring:1.2), (clean lineart:1.2), (vivid colors:1.2), (smooth gradients:1.1)"
      }
    ]
  };

  function ensureStyles(){
    if(document.getElementById("qp-v21-style-sets-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v21-style-sets-style";
    style.textContent = `
      #qp-v14-integrated .qp-v21-note {
        font-size:12px;
        line-height:1.6;
        color:#334155;
        background:#fff7ed;
        border:1px solid #fed7aa;
        border-radius:10px;
        padding:8px 10px;
        margin:0 0 8px 0;
      }
      #qp-v14-integrated .qp-v21-style-block > summary {
        background:#fef3c7 !important;
        color:#78350f !important;
      }
      #qp-v14-integrated .qp-v21-painter-block > summary {
        background:#ecfeff !important;
        color:#164e63 !important;
      }
    `;
    document.head.appendChild(style);
  }

  function createSub(title, items, cls){
    let details;
    if(window.__QP_UTILS && typeof window.__QP_UTILS.createSubAccordion === "function"){
      details = window.__QP_UTILS.createSubAccordion(title, items);
    }else{
      details = document.createElement("details");
      details.className = "qp-sub-acc";
      const summary = document.createElement("summary");
      summary.textContent = title;
      details.appendChild(summary);
      const box = document.createElement("div");
      box.className = "qp-content-grid";
      (items || []).forEach(function(item){
        const label = document.createElement("label");
        const main = document.createElement("div");
        main.className = "qp-item-main";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.dataset.val = item.val || "";
        const span = document.createElement("span");
        span.className = "qp-item-text";
        span.textContent = item.label || item.val || "";
        main.appendChild(cb);
        main.appendChild(span);
        label.appendChild(main);
        if(item.desc){
          const desc = document.createElement("div");
          desc.className = "qp-item-desc";
          desc.textContent = item.desc;
          label.appendChild(desc);
        }
        box.appendChild(label);
      });
      details.appendChild(box);
    }
    if(cls) details.classList.add(cls);
    return details;
  }

  function markExclusive(root, group){
    if(!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('input[type="checkbox"]'), function(cb){
      cb.dataset.qpPresetGroup = group;
      cb.addEventListener("change", function(){
        if(!cb.checked) return;
        Array.prototype.forEach.call(root.querySelectorAll('input[type="checkbox"]'), function(other){
          if(other !== cb && other.checked){
            other.checked = false;
            other.dispatchEvent(new Event("change", { bubbles:true }));
          }
        });
      });
    });
  }

  function directSummaryText(details, text){
    if(!details) return;
    const summary = details.querySelector(":scope > summary");
    if(summary) summary.textContent = text;
  }

  function removeDirectShelfBySummary(root, patterns){
    if(!root) return;
    const content = root.querySelector(":scope > div");
    const parent = content || root;
    Array.prototype.slice.call(parent.children).forEach(function(child){
      if(!child || child.tagName !== "DETAILS") return;
      const summary = child.querySelector(":scope > summary");
      const t = summary ? (summary.textContent || "") : "";
      if(patterns.some(function(re){ return re.test(t); })){
        child.remove();
      }
    });
  }

  function removeLegacyFromUI(){
    const legacy = document.getElementById("qp-quality-legacy-wrap");
    if(legacy) legacy.remove();
  }

  function buildStyleWrap(){
    const wrap = document.createElement("details");
    wrap.id = "qp-v21-style-recommended";
    wrap.className = "qp-sub-acc qp-v21-style-block";
    wrap.open = true;
    const summary = document.createElement("summary");
    summary.textContent = "⭐ 推奨クオリティセット：作風別";
    wrap.appendChild(summary);

    const box = document.createElement("div");
    box.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";
    const note = document.createElement("div");
    note.className = "qp-v21-note";
    note.textContent = "最初に作風を選ぶ棚です。アニメリアル / CGアニメ / フォトリアルは基本1つだけ、画材表現は必要に応じて追加してください。";
    box.appendChild(note);

    const anime = createSub("🧬 アニメリアル系", STYLE_SETS.animeReal, "qp-v21-style-block");
    const cg = createSub("💎 CGアニメ系", STYLE_SETS.cgAnime, "qp-v21-style-block");
    const photo = createSub("📸 フォトリアル系", STYLE_SETS.photoreal, "qp-v21-style-block");
    const painter = createSub("🎨 画材・アート表現", STYLE_SETS.painterly, "qp-v21-painter-block");

    [anime, cg, photo].forEach(function(d, i){
      markExclusive(d, "qp-v21-primary-style");
      box.appendChild(d);
    });
    box.appendChild(painter);

    wrap.appendChild(box);
    return wrap;
  }

  function insertAfterGuideAndBooster(root, node){
    const content = root && root.querySelector(":scope > div");
    if(!content || !node) return;
    let anchor = content.querySelector(".qp-v14-booster-slot");
    if(!anchor) anchor = content.querySelector(".qp-v21-note") || content.querySelector(".qp-v20-quick-guide") || content.querySelector(".qp-v14-guide");
    if(anchor && anchor.nextSibling) content.insertBefore(node, anchor.nextSibling);
    else if(anchor) content.appendChild(node);
    else content.insertBefore(node, content.firstChild);
  }

  function updateGuide(root){
    const guide = root && root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "品質・設定の正式統合棚です。まず作風別の推奨クオリティセットを選び、足りない時だけ細部調整や画材表現を追加してください。旧棚とLegacyは通常UIから外しました。";
    }
    const quick = root && root.querySelector(".qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①作風別セットから方向性を選ぶ → ②必要なら画材・色・光を足す → ③品質ブースターで出力時補正を調整。迷ったらブースターは標準 Normal。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      if(!root) return;
      root.dataset.qpIntegratedVersion = "21";
      directSummaryText(root, "🧭 品質・設定 統合版");
      updateGuide(root);

      removeDirectShelfBySummary(root, [
        /推奨クオリティセット/,
        /Legacy救出/,
        /旧棚から救出/,
        /追加品質セット/
      ]);

      if(!document.getElementById("qp-v21-style-recommended")){
        insertAfterGuideAndBooster(root, buildStyleWrap());
      }

      removeLegacyFromUI();
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v22.js ---
// v22: 初心者向けに「作風ベース」を排他化。
// アニメリアル/CGアニメ/フォトリアル/画材表現を同じ土台階層に置き、同系統以外の強化が混ざりにくいよう単一選択ロジックを追加。
(function(){
  "use strict";
  const VERSION = 22;
  const KEY = "quality_preset";

  const STYLE_BASES = [
    {
      key: "anime_real",
      group: "digital",
      label: "アニメリアル：幻想キャラ向け",
      desc: "リアル寄りアニメ調。人物、ファンタジー、アクションの標準土台。",
      val: "(anime-realism blend:1.25), (semi-realistic rendering:1.2), cinematic lighting, style consistency"
    },
    {
      key: "cg_anime",
      group: "digital",
      label: "CGアニメ：艶と透明感",
      desc: "3Dアニメ、ゲームPV、セルルック寄りの土台。",
      val: "(clean 3D anime rendering:1.3), (glossy CG anime style:1.2), smooth shading, vivid anime colors"
    },
    {
      key: "photo_real",
      group: "digital",
      label: "フォトリアル：写真寄り",
      desc: "写真風、実在感、リアル素材を出したい時の土台。",
      val: "(photo-realistic rendering:1.3), (realistic textures:1.3), (realistic materials:1.2), (soft natural lighting:1.2), (depth of field:1.2), (sharp focus:1.2)"
    },
    {
      key: "pastel",
      group: "art",
      label: "パステル画：やわらか淡色",
      desc: "淡い色、癒やし、かわいい雰囲気。強いCG光とは混ぜすぎない。",
      val: "(pastel drawing:1.3), (pastel colors:1.3), (soft color palette:1.2), (powdery pastel texture:1.2), (gentle lighting:1.1), (paper texture:1.1)"
    },
    {
      key: "watercolor",
      group: "art",
      label: "水彩画：透明感・にじみ",
      desc: "透明水彩、淡いにじみ、紙の質感。",
      val: "(watercolor painting:1.3), (transparent watercolor wash:1.2), (soft pigment bleeding:1.2), (paper texture:1.2), (delicate brushwork:1.2), (gentle colors:1.2)"
    },
    {
      key: "sumi_e",
      group: "art",
      label: "水墨画：墨・余白・筆致",
      desc: "墨の濃淡、余白、和風の筆表現。",
      val: "(sumi-e ink painting:1.3), (black ink wash:1.2), (expressive ink strokes:1.2), (washi paper texture:1.2), (minimal color palette:1.1)"
    },
    {
      key: "colored_pencil",
      group: "art",
      label: "色鉛筆画：手描き粒子感",
      desc: "やさしい手描き、細かい線、紙目。CG光を足しすぎると弱くなります。",
      val: "(colored pencil drawing:1.3), (visible pencil strokes:1.2), (soft hand-drawn texture:1.2), (paper grain:1.2), (delicate linework:1.2), (warm colors:1.1)"
    },
    {
      key: "oil",
      group: "art",
      label: "油彩画：厚塗り・重厚",
      desc: "クラシック絵画、厚い筆跡、重厚な色。",
      val: "(oil painting:1.3), (thick brush strokes:1.2), (impasto texture:1.2), (rich colors:1.2), (painterly shading:1.2)"
    },
    {
      key: "acrylic",
      group: "art",
      label: "アクリル画：鮮やかポップ",
      desc: "くっきりした発色とポスター感。",
      val: "(acrylic painting:1.3), (bold brushwork:1.2), (vivid colors:1.2), (clean color shapes:1.2), (high color contrast:1.1)"
    },
    {
      key: "gouache",
      group: "art",
      label: "ガッシュ：マット絵本調",
      desc: "不透明水彩、マットで絵本的な塗り。",
      val: "(gouache painting:1.3), (matte paint texture:1.2), (opaque colors:1.2), (soft edges:1.1), (storybook illustration style:1.2)"
    },
    {
      key: "pencil",
      group: "art",
      label: "鉛筆スケッチ：ラフ線画",
      desc: "下描き、モノクロ、ラフ確認。",
      val: "(pencil sketch:1.3), (graphite drawing:1.2), (visible sketch lines:1.2), (hand-drawn linework:1.2), (paper texture:1.1)"
    },
    {
      key: "charcoal",
      group: "art",
      label: "木炭画：強い陰影",
      desc: "荒い黒白タッチ、重い陰影、デッサン寄り。",
      val: "(charcoal drawing:1.3), (rough charcoal texture:1.2), (strong chiaroscuro:1.2), (monochrome shading:1.2), (paper grain:1.1)"
    },
    {
      key: "marker",
      group: "art",
      label: "マーカーイラスト：くっきり発色",
      desc: "コピック風、鮮やかな手描きイラスト。",
      val: "(marker illustration:1.3), (alcohol marker coloring:1.2), (clean lineart:1.2), (vivid colors:1.2), (smooth gradients:1.1)"
    },
    {
      key: "ink_manga",
      group: "art",
      label: "インク漫画：線とベタ",
      desc: "漫画原稿、ペン線、ベタ、スクリーントーン寄り。",
      val: "(ink manga illustration:1.3), (clean ink linework:1.2), (black and white manga shading:1.2), (screentone texture:1.1), (high contrast lineart:1.1)"
    }
  ];

  const STYLE_BOOSTS = {
    anime_real: [
      { label:"光と迫力", desc:"幻想光、奥行き、派手めの完成度。", val:"(cinematic lighting:1.3), (volumetric god rays:1.2), ethereal glow, high dynamic range" },
      { label:"キャラ密度", desc:"顔・目・髪の描写を強める。", val:"(detailed face:1.3), (detailed eyes:1.3), (detailed hair:1.2), (expressive face:1.2), (consistent anatomy:1.2)" },
      { label:"軽量安定", desc:"短めで破綻しにくい補助。", val:"(best quality:1.2), (intricate details:1.2), (style consistency:1.2), (theme consistency:1.2)" }
    ],
    cg_anime: [
      { label:"セルルック強化", desc:"面と線を読みやすくする。", val:"(clean cel shaded anime style:1.3), (clean lineart:1.2), (smooth color blocks:1.2), (sharp focus:1.2), (ambient occlusion:1.1)" },
      { label:"ゲームPV光", desc:"PV風のリムライトと粒子演出。", val:"(professional 3D anime render:1.2), (rim lighting:1.2), (global illumination:1.2), (glowing particles:1.2), (color grading:1.2)" },
      { label:"艶と透明感", desc:"髪・肌・素材のCGらしい艶。", val:"(smooth shading:1.2), (subsurface scattering:1.2), (bloom lighting:1.1), (crystal clear:1.2), (glossy highlights:1.1)" }
    ],
    photo_real: [
      { label:"スタジオ撮影", desc:"商業写真寄りの安定照明。", val:"(studio lighting:1.2), (professional photography style:1.2), (realistic skin texture:1.2), (crisp details:1.2), (color grading:1.2)" },
      { label:"映画スチル", desc:"映画の1カット風。陰影と空気感。", val:"(cinematic photorealism:1.3), (cinematic lighting:1.3), (dramatic lighting:1.2), (cinematic composition:1.2), (film still:1.2)" },
      { label:"素材リアル", desc:"布・金属・肌などの現実感。", val:"(physically based rendering:1.2), (realistic materials:1.2), (micro details:1.2), (subsurface scattering:1.2)" }
    ],
    pastel: [
      { label:"ふんわり淡色", desc:"淡い色と柔らかい空気感。", val:"(soft pastel texture:1.2), (gentle color harmony:1.2), (dreamy atmosphere:1.1), (soft shading:1.1)" },
      { label:"かわいい絵本調", desc:"丸く優しい雰囲気。", val:"(storybook pastel illustration:1.2), (rounded soft shapes:1.1), (warm gentle colors:1.1), (delicate details:1.1)" }
    ],
    watercolor: [
      { label:"にじみ強化", desc:"透明水彩の染みと紙目。", val:"(transparent watercolor wash:1.2), (soft pigment bleeding:1.2), (wet-on-wet watercolor:1.2), (paper texture:1.2)" },
      { label:"淡色幻想", desc:"淡い幻想感。CG光は弱め。", val:"(soft watercolor glow:1.1), (gentle colors:1.2), (light wash background:1.1), (delicate brushwork:1.2)" }
    ],
    sumi_e: [
      { label:"墨の濃淡", desc:"濃墨・淡墨・筆勢を強める。", val:"(expressive ink strokes:1.3), (black ink wash:1.2), (dry brush texture:1.2), (washi paper texture:1.2)" },
      { label:"余白と静けさ", desc:"最小色と余白を活かす。", val:"(minimal composition:1.2), (negative space:1.2), (subtle ink gradients:1.2), (quiet atmosphere:1.1)" }
    ],
    colored_pencil: [
      { label:"手描き粒子感", desc:"色鉛筆の線・紙目を守る強化。", val:"(visible pencil strokes:1.2), (layered colored pencil shading:1.2), (paper grain:1.2), (delicate linework:1.2)" },
      { label:"やさしい暖色", desc:"温かい色と柔らかい手描き感。", val:"(warm colors:1.1), (soft hand-drawn texture:1.2), (gentle shading:1.1), (subtle color blending:1.1)" }
    ],
    oil: [
      { label:"厚塗り筆跡", desc:"絵具の厚みを強める。", val:"(impasto texture:1.3), (thick brush strokes:1.2), (visible oil paint texture:1.2), (rich colors:1.2)" },
      { label:"古典絵画調", desc:"重厚な陰影とクラシック感。", val:"(classical oil painting style:1.2), (dramatic chiaroscuro:1.2), (painterly shading:1.2), (museum painting atmosphere:1.1)" }
    ],
    acrylic: [
      { label:"ポップ発色", desc:"鮮やかでくっきりした面。", val:"(bold acrylic colors:1.2), (clean color shapes:1.2), (high color contrast:1.2), (poster-like composition:1.1)" }
    ],
    gouache: [
      { label:"マット塗り", desc:"不透明で柔らかい絵本風。", val:"(matte paint texture:1.2), (opaque colors:1.2), (soft edges:1.1), (storybook illustration style:1.2)" }
    ],
    pencil: [
      { label:"ラフ線強化", desc:"鉛筆線と下描き感。", val:"(visible sketch lines:1.2), (graphite shading:1.2), (hand-drawn linework:1.2), (paper texture:1.1)" }
    ],
    charcoal: [
      { label:"荒い陰影", desc:"木炭のザラつきと明暗。", val:"(rough charcoal texture:1.2), (strong chiaroscuro:1.2), (smudged charcoal shading:1.2), (paper grain:1.1)" }
    ],
    marker: [
      { label:"マーカー発色", desc:"鮮やかな手描き塗り。", val:"(alcohol marker coloring:1.2), (smooth marker gradients:1.1), (clean lineart:1.2), (vivid colors:1.2)" }
    ],
    ink_manga: [
      { label:"線とベタ強化", desc:"ペン線、ベタ、漫画調の明暗。", val:"(clean ink linework:1.2), (solid black fills:1.2), (screentone texture:1.1), (high contrast manga shading:1.2)" }
    ]
  };

  const COMMON_HELPERS = [
    { label:"顔・目の安定", desc:"作風を壊しにくい人物補助。", val:"(detailed face:1.2), (detailed eyes:1.2), (expressive face:1.1)" },
    { label:"人体・手の安定", desc:"破綻を抑える補助。", val:"(consistent anatomy:1.2), (anatomical accuracy:1.2), (natural pose:1.1)" },
    { label:"細部を少し足す", desc:"画材系でも重くなりすぎない細部補助。", val:"(fine details:1.1), (delicate details:1.1), (crisp details:1.1)" },
    { label:"色調を整える", desc:"色のまとまりを出す。", val:"(color harmony:1.2), (balanced color palette:1.1), (theme consistency:1.2)" },
    { label:"軽い奥行き", desc:"強いCG光ではなく、控えめな奥行き補助。", val:"(depth of field:1.1), (soft background depth:1.1)" }
  ];

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function ensureStyles(){
    if(document.getElementById("qp-v22-style-base-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v22-style-base-style";
    style.textContent = `
      #qp-v22-style-selector {
        border:1px solid #fbbf24;
        border-radius:12px;
        background:#fffbeb;
        margin:8px 0;
      }
      #qp-v22-style-selector > summary {
        background:#fef3c7 !important;
        color:#78350f !important;
        font-weight:700;
      }
      #qp-v22-style-selector .qp-v22-box {
        padding:8px;
        display:flex;
        flex-direction:column;
        gap:8px;
      }
      #qp-v22-style-selector .qp-v22-note {
        font-size:12px;
        line-height:1.6;
        color:#334155;
        background:#fff7ed;
        border:1px solid #fed7aa;
        border-radius:10px;
        padding:8px 10px;
      }
      #qp-v22-style-selector .qp-v22-mini-note {
        font-size:11px;
        line-height:1.5;
        color:#475569;
        margin:4px 2px 6px;
      }
      #qp-v22-style-selector .qp-v22-grid {
        display:grid;
        grid-template-columns:1fr;
        gap:6px;
      }
      #qp-v22-style-selector .qp-v22-item {
        display:block;
        border:1px solid #e5e7eb;
        border-radius:10px;
        padding:8px;
        background:#fff;
      }
      #qp-v22-style-selector .qp-v22-item-main {
        display:flex;
        align-items:flex-start;
        gap:8px;
        font-size:13px;
        font-weight:700;
        color:#0f172a;
      }
      #qp-v22-style-selector .qp-v22-item-desc {
        font-size:11px;
        color:#64748b;
        line-height:1.45;
        margin:4px 0 0 24px;
      }
      #qp-v22-style-selector .qp-v22-style-group > summary {
        background:#ecfeff !important;
        color:#155e75 !important;
      }
      #qp-v22-style-selector .qp-v22-boost-group > summary {
        background:#f0fdf4 !important;
        color:#166534 !important;
      }
      #qp-v22-style-selector .qp-v22-helper-group > summary {
        background:#eef2ff !important;
        color:#3730a3 !important;
      }
      @media (min-width: 760px){
        #qp-v22-style-selector .qp-v22-grid.qp-v22-base-grid {
          grid-template-columns:1fr 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function triggerBuilderUpdate(source){
    if(isBusy()) return;
    try{
      const ev = new CustomEvent("builderQualityPresetExclusiveChanged", { bubbles:true, detail:{ source: source || "v22" } });
      document.dispatchEvent(ev);
    }catch(e){}
  }

  function createItem(item, opts){
    opts = opts || {};
    const label = document.createElement("label");
    label.className = "qp-v22-item";
    const main = document.createElement("div");
    main.className = "qp-v22-item-main";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.val = item.val || "";
    cb.dataset.qpV22 = "true";
    if(opts.exclusiveGroup) cb.dataset.qpExclusiveGroup = opts.exclusiveGroup;
    if(opts.styleKey) cb.dataset.qpStyleKey = opts.styleKey;
    if(opts.baseKey) cb.dataset.qpStyleBaseKey = opts.baseKey;
    if(opts.itemRole) cb.dataset.qpStyleRole = opts.itemRole;
    const span = document.createElement("span");
    span.textContent = item.label || item.val || "";
    main.appendChild(cb);
    main.appendChild(span);
    label.appendChild(main);
    if(item.desc){
      const desc = document.createElement("div");
      desc.className = "qp-v22-item-desc";
      desc.textContent = item.desc;
      label.appendChild(desc);
    }
    return label;
  }

  function createDetails(title, cls, open){
    const d = document.createElement("details");
    d.className = "qp-sub-acc " + (cls || "");
    d.open = !!open;
    const summary = document.createElement("summary");
    summary.textContent = title;
    d.appendChild(summary);
    const box = document.createElement("div");
    box.className = "qp-v22-grid";
    d.appendChild(box);
    return d;
  }

  function getCheckboxes(scope, selector){
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector || 'input[type="checkbox"]'));
  }

  function setCheckedSilently(cb, checked){
    if(!cb || cb.checked === checked) return false;
    cb.checked = checked;
    return true;
  }

  function enforceExclusive(root, active){
    if(!active || !active.checked) return;
    const group = active.dataset.qpExclusiveGroup;
    if(!group) return;
    getCheckboxes(root, 'input[type="checkbox"][data-qp-exclusive-group="' + group + '"]').forEach(function(other){
      if(other !== active && other.checked){
        setCheckedSilently(other, false);
      }
    });
  }

  function syncBaseForBoost(root, boost){
    if(!boost || !boost.checked) return;
    const key = boost.dataset.qpStyleKey;
    if(!key) return;
    const base = root.querySelector('input[type="checkbox"][data-qp-style-base-key="' + key + '"]');
    if(base && !base.checked){
      base.checked = true;
      enforceExclusive(root, base);
    }
  }

  function uncheckOtherFamilyBoosts(root, active){
    if(!active || !active.checked) return;
    const key = active.dataset.qpStyleKey;
    if(!key) return;
    getCheckboxes(root, 'input[type="checkbox"][data-qp-style-role="boost"]').forEach(function(other){
      if(other !== active && other.dataset.qpStyleKey !== key && other.checked){
        setCheckedSilently(other, false);
      }
    });
  }

  function bindExclusive(root){
    if(!root || root.dataset.qpV22ExclusiveBound === "true") return;
    root.dataset.qpV22ExclusiveBound = "true";

    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || cb.dataset.qpV22 !== "true") return;
      if(!cb.checked || isBusy()) return;

      if(cb.dataset.qpStyleRole === "base"){
        enforceExclusive(root, cb);
        const key = cb.dataset.qpStyleBaseKey;
        getCheckboxes(root, 'input[type="checkbox"][data-qp-style-role="boost"]').forEach(function(other){
          if(other.dataset.qpStyleKey !== key && other.checked){
            setCheckedSilently(other, false);
          }
        });
      }else if(cb.dataset.qpStyleRole === "boost"){
        syncBaseForBoost(root, cb);
        enforceExclusive(root, cb);
        uncheckOtherFamilyBoosts(root, cb);
      }else{
        enforceExclusive(root, cb);
      }

      triggerBuilderUpdate("v22-exclusive");
    }, true);
  }

  function buildBaseShelf(){
    const details = createDetails("🎨 作風ベース（単一選択）", "qp-v22-style-group", false);
    const box = details.querySelector(":scope > div");
    box.classList.add("qp-v22-base-grid");
    const note = document.createElement("div");
    note.className = "qp-v22-mini-note";
    note.textContent = "ここは1つだけ選べます。別の作風を選ぶと、前の作風ベースと別系統の作風強化は自動で外れます。";
    box.appendChild(note);
    STYLE_BASES.forEach(function(item){
      box.appendChild(createItem(item, {
        exclusiveGroup: "qp-v22-style-base",
        baseKey: item.key,
        styleKey: item.key,
        itemRole: "base"
      }));
    });
    return details;
  }

  function buildBoostShelf(){
    const wrap = createDetails("✨ 作風別強化（選んだ作風に合わせる）", "qp-v22-boost-group", false);
    const box = wrap.querySelector(":scope > div");
    const note = document.createElement("div");
    note.className = "qp-v22-mini-note";
    note.textContent = "強化を選ぶと、対応する作風ベースも自動で選ばれます。別作風の強化は同時に残りません。";
    box.appendChild(note);

    STYLE_BASES.forEach(function(base){
      const boosts = STYLE_BOOSTS[base.key];
      if(!boosts || !boosts.length) return;
      const d = createDetails(base.label.replace(/：.*/, "") + " 強化", "qp-v22-boost-group", false);
      const inner = d.querySelector(":scope > div");
      boosts.forEach(function(item){
        inner.appendChild(createItem(item, {
          exclusiveGroup: "qp-v22-boost-" + base.key,
          styleKey: base.key,
          itemRole: "boost"
        }));
      });
      box.appendChild(d);
    });
    return wrap;
  }

  function buildHelperShelf(){
    const d = createDetails("🧪 共通品質補助（複数可）", "qp-v22-helper-group", false);
    const box = d.querySelector(":scope > div");
    const note = document.createElement("div");
    note.className = "qp-v22-mini-note";
    note.textContent = "作風を壊しにくい補助だけを置いています。必要なものだけ追加してください。";
    box.appendChild(note);
    COMMON_HELPERS.forEach(function(item){
      box.appendChild(createItem(item, { itemRole:"helper" }));
    });
    return d;
  }

  function buildStyleSelector(){
    const wrap = document.createElement("details");
    wrap.id = "qp-v22-style-selector";
    wrap.className = "qp-sub-acc";
    wrap.open = true;
    const summary = document.createElement("summary");
    summary.textContent = "⭐ 最初に選ぶ：作風ベース";
    wrap.appendChild(summary);

    const box = document.createElement("div");
    box.className = "qp-v22-box";
    const note = document.createElement("div");
    note.className = "qp-v22-note";
    note.innerHTML = "<strong>初心者向け：</strong>最初に絵の土台となる作風を1つ選んでください。アニメリアル / CGアニメ / フォトリアル / 色鉛筆画 / 水彩画 / 水墨画などは、基本1つだけです。その後で、同じ作風に合う強化セットや共通補助を追加してください。";
    box.appendChild(note);
    box.appendChild(buildBaseShelf());
    box.appendChild(buildBoostShelf());
    box.appendChild(buildHelperShelf());
    wrap.appendChild(box);
    bindExclusive(wrap);
    return wrap;
  }

  function directSummaryText(details, text){
    if(!details) return;
    const summary = details.querySelector(":scope > summary");
    if(summary) summary.textContent = text;
  }

  function removeOldStyleShelves(root){
    if(!root) return;
    const oldIds = ["qp-v21-style-recommended", "qp-v22-style-selector"];
    oldIds.forEach(function(id){
      const node = document.getElementById(id);
      if(node) node.remove();
    });
    const content = root.querySelector(":scope > div");
    if(!content) return;
    Array.prototype.slice.call(content.children).forEach(function(child){
      if(!child || child.tagName !== "DETAILS") return;
      const s = child.querySelector(":scope > summary");
      const t = s ? (s.textContent || "") : "";
      if(/推奨クオリティセット|最初に選ぶ：作風ベース/.test(t)){
        child.remove();
      }
    });
  }

  function insertAfterBooster(root, node){
    const content = root && root.querySelector(":scope > div");
    if(!content || !node) return;
    let anchor = content.querySelector(".qp-v14-booster-slot");
    if(!anchor) anchor = content.querySelector("#qp-v20-quick-guide") || content.querySelector(".qp-v20-quick-guide") || content.querySelector(".qp-v14-guide");
    if(anchor && anchor.nextSibling){
      content.insertBefore(node, anchor.nextSibling);
    }else if(anchor){
      content.appendChild(node);
    }else{
      content.insertBefore(node, content.firstChild);
    }
  }

  function updateGuides(root){
    const guide = root && root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "品質・設定の正式統合棚です。最初に作風ベースを1つ選び、同じ作風の強化と共通補助だけを足すと安定します。";
    }
    const quick = root && root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①作風ベースを1つ選ぶ → ②同じ作風の強化を足す → ③必要なら共通補助を足す。別作風を選ぶと前の作風は自動で外れます。";
    }
  }

  function removeLegacyFromUI(){
    const legacy = document.getElementById("qp-quality-legacy-wrap");
    if(legacy) legacy.remove();
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      if(!root) return;
      root.dataset.qpIntegratedVersion = "22";
      directSummaryText(root, "🧭 品質・設定 統合版");
      updateGuides(root);
      removeOldStyleShelves(root);
      insertAfterBooster(root, buildStyleSelector());
      removeLegacyFromUI();
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v23.js ---
// v23: 作風ベース選択時に、相性の良い強化・共通補助をYes/Noで連動ONする提案カードを追加。
// 自動ONではなくユーザー確認式。作風切替時は前作風由来の自動連動だけ静かに解除する。
(function(){
  "use strict";
  const VERSION = 23;
  const KEY = "quality_preset";

  const RECIPES = {
    anime_real: {
      title: "アニメリアル：幻想キャラ向け",
      text: "幻想光・奥行き・キャラ密度をまとめてONにしますか？",
      boosts: ["光と迫力", "キャラ密度"],
      helpers: ["顔・目の安定", "人体・手の安定", "色調を整える", "軽い奥行き"]
    },
    cg_anime: {
      title: "CGアニメ：艶と透明感",
      text: "セルルック・PV光・透明感をまとめてONにしますか？",
      boosts: ["セルルック強化", "ゲームPV光", "艶と透明感"],
      helpers: ["顔・目の安定", "人体・手の安定", "色調を整える"]
    },
    photo_real: {
      title: "フォトリアル：写真寄り",
      text: "スタジオ撮影・素材リアル・自然な奥行きをまとめてONにしますか？",
      boosts: ["スタジオ撮影", "素材リアル"],
      helpers: ["人体・手の安定", "細部を少し足す", "色調を整える", "軽い奥行き"]
    },
    pastel: {
      title: "パステル画：やわらか淡色",
      text: "ふんわり淡色・絵本調・やさしい色調をまとめてONにしますか？",
      boosts: ["ふんわり淡色", "かわいい絵本調"],
      helpers: ["顔・目の安定", "色調を整える"]
    },
    watercolor: {
      title: "水彩画：透明感・にじみ",
      text: "にじみ・淡色幻想・紙目をまとめてONにしますか？",
      boosts: ["にじみ強化", "淡色幻想"],
      helpers: ["顔・目の安定", "細部を少し足す", "色調を整える"]
    },
    sumi_e: {
      title: "水墨画：墨・余白・筆致",
      text: "墨の濃淡・余白・静けさをまとめてONにしますか？",
      boosts: ["墨の濃淡", "余白と静けさ"],
      helpers: ["細部を少し足す"]
    },
    colored_pencil: {
      title: "色鉛筆画：手描き粒子感",
      text: "紙目・鉛筆線・やさしい暖色をまとめてONにしますか？",
      boosts: ["手描き粒子感", "やさしい暖色"],
      helpers: ["顔・目の安定", "細部を少し足す", "色調を整える"]
    },
    oil: {
      title: "油彩画：厚塗り・重厚",
      text: "厚塗り筆跡・古典絵画調をまとめてONにしますか？",
      boosts: ["厚塗り筆跡", "古典絵画調"],
      helpers: ["人体・手の安定", "細部を少し足す", "色調を整える"]
    },
    acrylic: {
      title: "アクリル画：鮮やかポップ",
      text: "ポップ発色とくっきりした色面をONにしますか？",
      boosts: ["ポップ発色"],
      helpers: ["顔・目の安定", "色調を整える"]
    },
    gouache: {
      title: "ガッシュ：マット絵本調",
      text: "マット塗りと絵本調の補助をONにしますか？",
      boosts: ["マット塗り"],
      helpers: ["顔・目の安定", "色調を整える"]
    },
    pencil: {
      title: "鉛筆スケッチ：ラフ線画",
      text: "ラフ線・鉛筆陰影・紙の質感をONにしますか？",
      boosts: ["ラフ線強化"],
      helpers: ["細部を少し足す"]
    },
    charcoal: {
      title: "木炭画：強い陰影",
      text: "荒い陰影と木炭のざらつきをONにしますか？",
      boosts: ["荒い陰影"],
      helpers: ["細部を少し足す"]
    },
    marker: {
      title: "マーカーイラスト：くっきり発色",
      text: "マーカー発色・クリーンな線・鮮やかさをONにしますか？",
      boosts: ["マーカー発色"],
      helpers: ["顔・目の安定", "色調を整える"]
    },
    ink_manga: {
      title: "インク漫画：線とベタ",
      text: "線とベタ・漫画調の明暗をONにしますか？",
      boosts: ["線とベタ強化"],
      helpers: ["細部を少し足す"]
    }
  };

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function ensureStyles(){
    if(document.getElementById("qp-v23-recipe-card-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v23-recipe-card-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v23-recipe-card {
        display:none;
        border:1px solid #93c5fd;
        background:#eff6ff;
        color:#1e3a8a;
        border-radius:12px;
        padding:10px;
        margin:8px 0;
        box-shadow:0 4px 12px rgba(15, 23, 42, .08);
      }
      #qp-v22-style-selector .qp-v23-recipe-card.is-visible {
        display:block;
      }
      #qp-v22-style-selector .qp-v23-recipe-title {
        font-weight:800;
        font-size:13px;
        margin-bottom:4px;
      }
      #qp-v22-style-selector .qp-v23-recipe-text {
        font-size:12px;
        line-height:1.55;
        margin-bottom:8px;
      }
      #qp-v22-style-selector .qp-v23-recipe-actions {
        display:flex;
        gap:8px;
        flex-wrap:wrap;
      }
      #qp-v22-style-selector .qp-v23-btn {
        border:1px solid #bfdbfe;
        border-radius:999px;
        padding:6px 10px;
        background:#fff;
        color:#1d4ed8;
        font-size:12px;
        font-weight:700;
        cursor:pointer;
      }
      #qp-v22-style-selector .qp-v23-btn-primary {
        background:#2563eb;
        color:#fff;
        border-color:#2563eb;
      }
      #qp-v22-style-selector .qp-v23-linked {
        outline:2px solid rgba(37,99,235,.28);
        outline-offset:2px;
      }
    `;
    document.head.appendChild(style);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getItemLabel(cb){
    if(!cb) return "";
    const item = cb.closest(".qp-v22-item");
    if(!item) return "";
    const span = item.querySelector(".qp-v22-item-main span");
    return span ? (span.textContent || "").trim() : "";
  }

  function getStyleSelector(){
    return document.getElementById("qp-v22-style-selector");
  }

  function getRecipeCard(root){
    if(!root) return null;
    let card = root.querySelector(".qp-v23-recipe-card");
    if(card) return card;

    card = document.createElement("div");
    card.className = "qp-v23-recipe-card";
    card.innerHTML = ''
      + '<div class="qp-v23-recipe-title"></div>'
      + '<div class="qp-v23-recipe-text"></div>'
      + '<div class="qp-v23-recipe-actions">'
      + '  <button type="button" class="qp-v23-btn qp-v23-no">いいえ</button>'
      + '  <button type="button" class="qp-v23-btn qp-v23-btn-primary qp-v23-yes">はい：おすすめをON</button>'
      + '</div>';

    const baseShelf = qsAll(root, "details").filter(function(d){
      const s = d.querySelector(":scope > summary");
      return s && /作風ベース/.test(s.textContent || "");
    })[0];

    if(baseShelf && baseShelf.parentNode){
      baseShelf.parentNode.insertBefore(card, baseShelf.nextSibling);
    }else{
      const box = root.querySelector(".qp-v22-box") || root;
      box.insertBefore(card, box.firstChild);
    }

    card.querySelector(".qp-v23-no").addEventListener("click", function(){
      hideRecipeCard(root);
    });
    card.querySelector(".qp-v23-yes").addEventListener("click", function(){
      const key = card.dataset.styleKey || "";
      applyRecipe(root, key);
      hideRecipeCard(root);
    });
    return card;
  }

  function showRecipeCard(root, key){
    if(!root || !key || isBusy()) return;
    const recipe = RECIPES[key];
    if(!recipe) return;
    const card = getRecipeCard(root);
    if(!card) return;
    card.dataset.styleKey = key;
    const title = card.querySelector(".qp-v23-recipe-title");
    const text = card.querySelector(".qp-v23-recipe-text");
    if(title) title.textContent = "🎨 " + recipe.title + " 用おすすめセット";
    if(text) text.textContent = recipe.text + " いいえなら作風ベースだけ残します。";
    card.classList.add("is-visible");
  }

  function hideRecipeCard(root){
    const card = root && root.querySelector(".qp-v23-recipe-card");
    if(card){
      card.classList.remove("is-visible");
      card.dataset.styleKey = "";
    }
  }

  function setChecked(cb, checked){
    if(!cb || cb.checked === checked) return false;
    cb.checked = checked;
    return true;
  }

  function clearAutoLinked(root, keepKey){
    qsAll(root, 'input[type="checkbox"][data-qp-v23-auto-for]').forEach(function(cb){
      const from = cb.dataset.qpV23AutoFor || "";
      if(from && from !== keepKey){
        setChecked(cb, false);
        delete cb.dataset.qpV23AutoFor;
        const item = cb.closest(".qp-v22-item");
        if(item) item.classList.remove("qp-v23-linked");
      }
    });
  }

  function markAuto(cb, key){
    if(!cb || !key) return;
    cb.dataset.qpV23AutoFor = key;
    const item = cb.closest(".qp-v22-item");
    if(item){
      item.classList.add("qp-v23-linked");
      setTimeout(function(){ item.classList.remove("qp-v23-linked"); }, 1600);
    }
  }

  function findBoost(root, key, label){
    return qsAll(root, 'input[type="checkbox"][data-qp-style-role="boost"][data-qp-style-key="' + key + '"]').filter(function(cb){
      return getItemLabel(cb) === label;
    })[0] || null;
  }

  function findHelper(root, label){
    return qsAll(root, 'input[type="checkbox"][data-qp-style-role="helper"]').filter(function(cb){
      return getItemLabel(cb) === label;
    })[0] || null;
  }

  function notifyOneChange(root){
    if(isBusy()) return;
    try{
      const target = root.querySelector('input[type="checkbox"]:checked') || root;
      target.dispatchEvent(new Event("change", { bubbles:true }));
    }catch(e){}
    try{
      document.dispatchEvent(new CustomEvent("builderQualityPresetRecipeApplied", { bubbles:true, detail:{ source:"v23" } }));
    }catch(e){}
  }

  function applyRecipe(root, key){
    const recipe = RECIPES[key];
    if(!root || !recipe || isBusy()) return;

    clearAutoLinked(root, key);

    (recipe.boosts || []).forEach(function(label){
      const cb = findBoost(root, key, label);
      if(cb){
        const wasChecked = cb.checked;
        setChecked(cb, true);
        if(!wasChecked) markAuto(cb, key);
      }
    });

    (recipe.helpers || []).forEach(function(label){
      const cb = findHelper(root, label);
      if(cb){
        const wasChecked = cb.checked;
        setChecked(cb, true);
        if(!wasChecked) markAuto(cb, key);
      }
    });

    notifyOneChange(root);
  }

  function updateGuides(){
    const root = document.getElementById("qp-v14-integrated");
    if(!root) return;
    root.dataset.qpIntegratedVersion = "23";
    const guide = root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "品質・設定の正式統合棚です。最初に作風ベースを1つ選び、必要なら表示されるおすすめセットをYesで連動ONできます。";
    }
    const quick = root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①作風ベースを1つ選ぶ → ②おすすめカードでYes/Noを選ぶ → ③足りない時だけ同じ作風の強化や共通補助を追加。別作風を選ぶと前作風由来の自動連動は外れます。";
    }
  }

  function bindRecipe(root){
    if(!root || root.dataset.qpV23RecipeBound === "true") return;
    root.dataset.qpV23RecipeBound = "true";
    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || cb.dataset.qpStyleRole !== "base") return;
      if(isBusy()) return;
      if(!cb.checked){
        hideRecipeCard(root);
        return;
      }
      const key = cb.dataset.qpStyleBaseKey || "";
      clearAutoLinked(root, key);
      showRecipeCard(root, key);
    }, false);
  }

  const API = {
    initUI(container){
      ensureStyles();
      updateGuides();
      const root = getStyleSelector();
      if(!root) return;
      const summary = root.querySelector(":scope > summary");
      if(summary) summary.textContent = "⭐ 最初に選ぶ：作風ベース＋おすすめ連動";
      bindRecipe(root);
      getRecipeCard(root);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v24.js ---
// v24: 旧商品化Yes/Noの誤誘導対策。
// 商品化・フィギュア化系は通常作風ベースから分離し、専用補助棚として品質統合版の下段へ移動する。
(function(){
  "use strict";
  const VERSION = 24;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v24-commercial-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v24-commercial-style";
    style.textContent = `
      #qp-commercial-mode {
        border:1px solid #fed7aa !important;
        background:#fff7ed !important;
        border-radius:12px !important;
      }
      #qp-commercial-mode > summary {
        background:#ffedd5 !important;
        color:#7c2d12 !important;
        font-weight:800 !important;
      }
      #qp-commercial-mode .qp-v24-commercial-guide {
        font-size:12px;
        line-height:1.6;
        color:#7c2d12;
        background:#fff;
        border:1px solid #fed7aa;
        border-radius:10px;
        padding:8px 10px;
        margin:8px;
      }
    `;
    document.head.appendChild(style);
  }

  function getIntegratedContent(){
    const root = document.getElementById("qp-v14-integrated");
    if(!root) return null;
    return root.querySelector(":scope > div") || root;
  }

  function findCommercialMode(){
    let el = document.getElementById("qp-commercial-mode");
    if(el) return el;
    const candidates = Array.prototype.slice.call(document.querySelectorAll("details"));
    return candidates.find(function(d){
      const s = d.querySelector(":scope > summary");
      return s && /商品レンダリング|Commercial Mode|商品化|フィギュア化/.test(s.textContent || "");
    }) || null;
  }

  function prepareCommercialShelf(shelf){
    if(!shelf) return;
    shelf.id = "qp-commercial-mode";
    shelf.open = false;
    const summary = shelf.querySelector(":scope > summary");
    if(summary) summary.textContent = "🧸 商品化・フィギュア化補助（任意）";

    if(!shelf.querySelector(".qp-v24-commercial-guide")){
      const guide = document.createElement("div");
      guide.className = "qp-v24-commercial-guide";
      guide.textContent = "通常の絵作りとは別用途です。フィギュア化、アクスタ、缶バッジ、商品撮影、白背景カタログ風に寄せたい時だけ使います。アニメリアル・水彩・色鉛筆などの作風ベースとは自動連動しません。";
      const firstContent = Array.prototype.slice.call(shelf.children).find(function(c){ return c.tagName !== "SUMMARY"; });
      if(firstContent) shelf.insertBefore(guide, firstContent);
      else shelf.appendChild(guide);
    }
  }

  function moveCommercialShelf(){
    const content = getIntegratedContent();
    const shelf = findCommercialMode();
    if(!content || !shelf) return;
    prepareCommercialShelf(shelf);

    // Move it to the bottom of the integrated shelf as an optional, separate workflow.
    // appendChild moves the existing node, so existing checkboxes and data are preserved.
    if(shelf.parentElement !== content || content.lastElementChild !== shelf){
      content.appendChild(shelf);
    }
  }

  function updateGuide(){
    const root = document.getElementById("qp-v14-integrated");
    if(root) root.dataset.qpIntegratedVersion = "24";
    const guide = root && root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "品質・設定の正式統合棚です。最初に作風ベースを1つ選び、必要ならおすすめカードで同系統の補助だけ連動ONできます。商品化・フィギュア化は下段の専用補助棚で必要な時だけ使います。";
    }
    const quick = root && root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①作風ベースを1つ選ぶ → ②おすすめカードでYes/Noを選ぶ → ③足りない時だけ同じ作風の強化や共通補助を追加。商品化・フィギュア化は通常作風とは別用途なので、下段の専用棚から必要な時だけ使います。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      updateGuide();
      moveCommercialShelf();
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v25.js ---
// v25: 「作風ベース」を「生成ベース」へ拡張し、商品化ベースを単一選択グループへ昇格。
// 商品化ベース選択時も、v23系の青いYes/Noカードで専用おすすめ補助を連動ONできるようにする。
(function(){
  "use strict";
  const VERSION = 25;
  const KEY = "quality_preset";

  const PRODUCT_BASES = [
    {
      key: "product_figure",
      label: "商品化：フィギュア立体向け",
      desc: "PVCフィギュア、立体感、台座付き展示を基本にします。",
      val: "(collectible figure product render:1.3), (PVC figure style:1.2), (toy figurine design:1.2), (clean display base:1.1), (studio product lighting:1.2)"
    },
    {
      key: "product_acrylic_stand",
      label: "商品化：アクスタ向け",
      desc: "アクリルスタンド、透明板、商品見本風の見せ方。",
      val: "(acrylic standee product design:1.3), (clear acrylic stand:1.2), (character standee:1.2), (clean product preview:1.2), (white background:1.1)"
    },
    {
      key: "product_badge",
      label: "商品化：缶バッジ・丸型グッズ向け",
      desc: "丸型構図、顔や上半身を読みやすくしたグッズ向け。",
      val: "(round badge merchandise design:1.3), (button badge layout:1.2), (centered character portrait:1.2), (clean graphic composition:1.2)"
    },
    {
      key: "product_package",
      label: "商品化：パッケージ用白背景",
      desc: "白背景、商品影、カタログ向けのクリアな見せ方。",
      val: "(product catalog presentation:1.3), (white background:1.2), (soft product shadow:1.2), (clean packaging preview:1.2), (clear front view:1.1)"
    },
    {
      key: "product_photo",
      label: "商品化：商品撮影風",
      desc: "商品写真、スタジオ撮影、商用見本向け。",
      val: "(product photography style:1.3), (studio product lighting:1.2), (clean commercial render:1.2), (sharp focus:1.2), (subtle shadow:1.1)"
    }
  ];

  const PRODUCT_BOOSTS = {
    product_figure: [
      { label:"PVC立体感", desc:"PVC・樹脂の立体感と展示台座。", val:"(PVC material:1.2), (resin figure finish:1.2), (sculpted details:1.2), (display base:1.1)" },
      { label:"フィギュア展示光", desc:"立体を見せる商品照明。", val:"(studio product lighting:1.2), (softbox lighting:1.1), (soft product shadow:1.1), (clean commercial render:1.2)" }
    ],
    product_acrylic_stand: [
      { label:"透明アクリル板", desc:"アクスタの透明板と台座感。", val:"(clear acrylic plate:1.2), (transparent acrylic edges:1.1), (acrylic display base:1.1), (standee product mockup:1.2)" },
      { label:"グッズ用白背景", desc:"通販見本・商品画像向け。", val:"(white background:1.2), (clean product preview:1.2), (soft shadow under product:1.1), (centered composition:1.1)" }
    ],
    product_badge: [
      { label:"丸型グッズ構図", desc:"缶バッジやアイコン用の中心構図。", val:"(round composition:1.2), (badge design layout:1.2), (centered upper body portrait:1.1), (clear silhouette:1.1)" },
      { label:"印刷向けクリア線", desc:"グッズ印刷で読みやすい線と色面。", val:"(clean lineart:1.2), (clear color separation:1.2), (print-ready illustration:1.1), (high readability:1.1)" }
    ],
    product_package: [
      { label:"カタログ白背景", desc:"白背景・影つきのカタログ風。", val:"(white background:1.2), (soft product shadow:1.2), (catalog product shot:1.2), (clean front view:1.1)" },
      { label:"パッケージ見本", desc:"パッケージや商品サンプル用。", val:"(packaging mockup style:1.2), (commercial product presentation:1.2), (clean layout:1.1), (crisp details:1.1)" }
    ],
    product_photo: [
      { label:"スタジオ商品撮影", desc:"ライトと影で商品として見せる。", val:"(studio product photography:1.3), (softbox lighting:1.2), (sharp focus:1.2), (clean commercial background:1.1)" },
      { label:"EC商品見本", desc:"通販サムネ向けの明快な見せ方。", val:"(e-commerce product image:1.2), (clean product presentation:1.2), (white background:1.1), (subtle product shadow:1.1)" }
    ]
  };

  const PRODUCT_RECIPES = {
    product_figure: {
      title: "商品化：フィギュア立体向け",
      text: "PVC立体感・展示光・商品影をまとめてONにしますか？",
      boosts: ["PVC立体感", "フィギュア展示光"],
      helpers: ["細部を少し足す", "色調を整える"]
    },
    product_acrylic_stand: {
      title: "商品化：アクスタ向け",
      text: "透明アクリル板・白背景・商品見本補助をONにしますか？",
      boosts: ["透明アクリル板", "グッズ用白背景"],
      helpers: ["顔・目の安定", "色調を整える"]
    },
    product_badge: {
      title: "商品化：缶バッジ・丸型グッズ向け",
      text: "丸型構図・印刷向けクリア線をONにしますか？",
      boosts: ["丸型グッズ構図", "印刷向けクリア線"],
      helpers: ["顔・目の安定", "色調を整える"]
    },
    product_package: {
      title: "商品化：パッケージ用白背景",
      text: "カタログ白背景・パッケージ見本補助をONにしますか？",
      boosts: ["カタログ白背景", "パッケージ見本"],
      helpers: ["細部を少し足す", "軽い奥行き"]
    },
    product_photo: {
      title: "商品化：商品撮影風",
      text: "スタジオ商品撮影・EC商品見本補助をONにしますか？",
      boosts: ["スタジオ商品撮影", "EC商品見本"],
      helpers: ["細部を少し足す", "色調を整える", "軽い奥行き"]
    }
  };

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getSelector(){
    return document.getElementById("qp-v22-style-selector");
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function ensureStyles(){
    if(document.getElementById("qp-v25-product-base-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v25-product-base-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v25-divider {
        margin:10px 0 6px;
        padding:7px 9px;
        border-radius:10px;
        background:#fff7ed;
        color:#7c2d12;
        border:1px solid #fed7aa;
        font-size:12px;
        font-weight:800;
      }
      #qp-v22-style-selector .qp-v25-product-card {
        display:none;
        border:1px solid #fdba74;
        background:#fff7ed;
        color:#7c2d12;
        border-radius:12px;
        padding:10px;
        margin:8px 0;
        box-shadow:0 4px 12px rgba(15, 23, 42, .08);
      }
      #qp-v22-style-selector .qp-v25-product-card.is-visible { display:block; }
      #qp-v22-style-selector .qp-v25-title {
        font-weight:800;
        font-size:13px;
        margin-bottom:4px;
      }
      #qp-v22-style-selector .qp-v25-text {
        font-size:12px;
        line-height:1.55;
        margin-bottom:8px;
      }
      #qp-v22-style-selector .qp-v25-actions {
        display:flex;
        gap:8px;
        flex-wrap:wrap;
      }
      #qp-v22-style-selector .qp-v25-btn {
        border:1px solid #fdba74;
        border-radius:999px;
        padding:6px 10px;
        background:#fff;
        color:#9a3412;
        font-size:12px;
        font-weight:700;
        cursor:pointer;
      }
      #qp-v22-style-selector .qp-v25-primary {
        background:#ea580c;
        color:#fff;
        border-color:#ea580c;
      }
      #qp-v22-style-selector .qp-v25-linked {
        outline:2px solid rgba(234,88,12,.30);
        outline-offset:2px;
      }
    `;
    document.head.appendChild(style);
  }

  function createItem(item, opts){
    opts = opts || {};
    const label = document.createElement("label");
    label.className = "qp-v22-item qp-v25-item";
    const main = document.createElement("div");
    main.className = "qp-v22-item-main";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.val = item.val || "";
    cb.dataset.qpV22 = "true";
    if(opts.exclusiveGroup) cb.dataset.qpExclusiveGroup = opts.exclusiveGroup;
    if(opts.styleKey) cb.dataset.qpStyleKey = opts.styleKey;
    if(opts.baseKey) cb.dataset.qpStyleBaseKey = opts.baseKey;
    if(opts.itemRole) cb.dataset.qpStyleRole = opts.itemRole;
    if(opts.productBase) cb.dataset.qpV25ProductBase = "true";
    const span = document.createElement("span");
    span.textContent = item.label || item.val || "";
    main.appendChild(cb);
    main.appendChild(span);
    label.appendChild(main);
    if(item.desc){
      const desc = document.createElement("div");
      desc.className = "qp-v22-item-desc";
      desc.textContent = item.desc;
      label.appendChild(desc);
    }
    return label;
  }

  function findDetailsBySummary(root, pattern){
    return qsAll(root, "details").filter(function(d){
      const s = d.querySelector(":scope > summary");
      return s && pattern.test(s.textContent || "");
    })[0] || null;
  }

  function normalizeLabels(root){
    if(!root) return;
    const mainSummary = root.querySelector(":scope > summary");
    if(mainSummary) mainSummary.textContent = "⭐ 最初に選ぶ：生成ベース＋おすすめ連動";

    const base = findDetailsBySummary(root, /作風ベース|生成ベース/);
    if(base){
      const s = base.querySelector(":scope > summary");
      if(s) s.textContent = "🎨 生成ベース（単一選択）";
      const note = base.querySelector(".qp-v22-mini-note");
      if(note){
        note.textContent = "ここは1つだけ選べます。画風ベースも商品化ベースも、別の生成ベースを選ぶと前のベースと別系統の強化は自動で外れます。";
      }
    }

    const note = root.querySelector(".qp-v22-note");
    if(note){
      note.innerHTML = "<strong>初心者向け：</strong>最初に何を基本に生成するかを1つ選んでください。アニメリアル / CGアニメ / フォトリアル / 水彩 / 色鉛筆などの画風ベースと、フィギュア化 / アクスタ / 缶バッジなどの商品化ベースは同じ「生成ベース」です。その後、表示されるおすすめカードで同系統の補助だけ連動ONできます。";
    }
  }

  function appendProductBases(root){
    const base = findDetailsBySummary(root, /生成ベース|作風ベース/);
    if(!base || base.dataset.qpV25ProductBases === "true") return;
    const box = base.querySelector(":scope > div");
    if(!box) return;

    const divider = document.createElement("div");
    divider.className = "qp-v25-divider";
    divider.textContent = "🧸 商品化ベース（必要な時だけ・単一選択）";
    box.appendChild(divider);

    PRODUCT_BASES.forEach(function(item){
      box.appendChild(createItem(item, {
        exclusiveGroup: "qp-v22-style-base",
        baseKey: item.key,
        styleKey: item.key,
        itemRole: "base",
        productBase: true
      }));
    });
    base.dataset.qpV25ProductBases = "true";
  }

  function appendProductBoosts(root){
    const boostRoot = findDetailsBySummary(root, /作風別強化|ベース別強化/);
    if(!boostRoot || boostRoot.dataset.qpV25ProductBoosts === "true") return;
    const box = boostRoot.querySelector(":scope > div");
    if(!box) return;

    const group = document.createElement("details");
    group.className = "qp-sub-acc";
    group.open = false;
    const sum = document.createElement("summary");
    sum.textContent = "🧸 商品化ベース 強化";
    group.appendChild(sum);
    const groupBox = document.createElement("div");
    groupBox.className = "qp-v22-box";
    const note = document.createElement("div");
    note.className = "qp-v22-mini-note";
    note.textContent = "商品化ベースを選んだ時だけ使う補助です。通常の水彩・色鉛筆・アニメリアルなどとは混ぜすぎない方が安定します。";
    groupBox.appendChild(note);

    PRODUCT_BASES.forEach(function(base){
      const d = document.createElement("details");
      d.className = "qp-sub-acc";
      d.open = false;
      const s = document.createElement("summary");
      s.textContent = base.label.replace(/^商品化：/, "") + " 強化";
      d.appendChild(s);
      const inner = document.createElement("div");
      inner.className = "qp-v22-box";
      (PRODUCT_BOOSTS[base.key] || []).forEach(function(item){
        inner.appendChild(createItem(item, {
          styleKey: base.key,
          itemRole: "boost"
        }));
      });
      d.appendChild(inner);
      groupBox.appendChild(d);
    });

    group.appendChild(groupBox);
    box.appendChild(group);
    boostRoot.dataset.qpV25ProductBoosts = "true";
  }

  function hideV23Card(root){
    const card = root && root.querySelector(".qp-v23-recipe-card");
    if(card){
      card.classList.remove("is-visible");
      card.dataset.styleKey = "";
    }
  }

  function getProductCard(root){
    if(!root) return null;
    let card = root.querySelector(".qp-v25-product-card");
    if(card) return card;

    card = document.createElement("div");
    card.className = "qp-v25-product-card";
    card.innerHTML = ''
      + '<div class="qp-v25-title"></div>'
      + '<div class="qp-v25-text"></div>'
      + '<div class="qp-v25-actions">'
      + '  <button type="button" class="qp-v25-btn qp-v25-no">いいえ</button>'
      + '  <button type="button" class="qp-v25-btn qp-v25-primary qp-v25-yes">はい：おすすめをON</button>'
      + '</div>';

    const baseShelf = findDetailsBySummary(root, /生成ベース|作風ベース/);
    const existingV23 = root.querySelector(".qp-v23-recipe-card");
    if(existingV23 && existingV23.parentNode){
      existingV23.parentNode.insertBefore(card, existingV23.nextSibling);
    }else if(baseShelf && baseShelf.parentNode){
      baseShelf.parentNode.insertBefore(card, baseShelf.nextSibling);
    }else{
      const box = root.querySelector(".qp-v22-box") || root;
      box.insertBefore(card, box.firstChild);
    }

    card.querySelector(".qp-v25-no").addEventListener("click", function(){
      hideProductCard(root);
    });
    card.querySelector(".qp-v25-yes").addEventListener("click", function(){
      applyProductRecipe(root, card.dataset.styleKey || "");
      hideProductCard(root);
    });
    return card;
  }

  function showProductCard(root, key){
    if(!root || !key || isBusy()) return;
    const recipe = PRODUCT_RECIPES[key];
    if(!recipe) return;
    hideV23Card(root);
    const card = getProductCard(root);
    if(!card) return;
    card.dataset.styleKey = key;
    const title = card.querySelector(".qp-v25-title");
    const text = card.querySelector(".qp-v25-text");
    if(title) title.textContent = "🧸 " + recipe.title + " 用おすすめセット";
    if(text) text.textContent = recipe.text + " いいえなら生成ベースだけ残します。";
    card.classList.add("is-visible");
  }

  function hideProductCard(root){
    const card = root && root.querySelector(".qp-v25-product-card");
    if(card){
      card.classList.remove("is-visible");
      card.dataset.styleKey = "";
    }
  }

  function getItemLabel(cb){
    const item = cb && cb.closest(".qp-v22-item");
    if(!item) return "";
    const span = item.querySelector(".qp-v22-item-main span");
    return span ? (span.textContent || "").trim() : "";
  }

  function setChecked(cb, checked){
    if(!cb || cb.checked === checked) return false;
    cb.checked = checked;
    return true;
  }

  function clearAutoLinked(root, keepKey){
    qsAll(root, 'input[type="checkbox"][data-qp-v23-auto-for]').forEach(function(cb){
      const from = cb.dataset.qpV23AutoFor || "";
      if(from && from !== keepKey){
        setChecked(cb, false);
        delete cb.dataset.qpV23AutoFor;
        const item = cb.closest(".qp-v22-item");
        if(item){
          item.classList.remove("qp-v23-linked");
          item.classList.remove("qp-v25-linked");
        }
      }
    });
  }

  function markAuto(cb, key){
    if(!cb || !key) return;
    cb.dataset.qpV23AutoFor = key;
    const item = cb.closest(".qp-v22-item");
    if(item){
      item.classList.add("qp-v25-linked");
      setTimeout(function(){ item.classList.remove("qp-v25-linked"); }, 1600);
    }
  }

  function findBoost(root, key, label){
    return qsAll(root, 'input[type="checkbox"][data-qp-style-role="boost"][data-qp-style-key="' + key + '"]').filter(function(cb){
      return getItemLabel(cb) === label;
    })[0] || null;
  }

  function findHelper(root, label){
    return qsAll(root, 'input[type="checkbox"][data-qp-style-role="helper"]').filter(function(cb){
      return getItemLabel(cb) === label;
    })[0] || null;
  }

  function notifyOneChange(root){
    if(isBusy()) return;
    try{
      const target = root.querySelector('input[type="checkbox"]:checked') || root;
      target.dispatchEvent(new Event("change", { bubbles:true }));
    }catch(e){}
    try{
      document.dispatchEvent(new CustomEvent("builderQualityPresetProductRecipeApplied", { bubbles:true, detail:{ source:"v25" } }));
    }catch(e){}
  }

  function applyProductRecipe(root, key){
    const recipe = PRODUCT_RECIPES[key];
    if(!root || !recipe || isBusy()) return;

    clearAutoLinked(root, key);

    (recipe.boosts || []).forEach(function(label){
      const cb = findBoost(root, key, label);
      if(cb){
        const wasChecked = cb.checked;
        setChecked(cb, true);
        if(!wasChecked) markAuto(cb, key);
      }
    });

    (recipe.helpers || []).forEach(function(label){
      const cb = findHelper(root, label);
      if(cb){
        const wasChecked = cb.checked;
        setChecked(cb, true);
        if(!wasChecked) markAuto(cb, key);
      }
    });

    notifyOneChange(root);
  }

  function isProductKey(key){
    return !!PRODUCT_RECIPES[key];
  }

  function bindProductRecipe(root){
    if(!root || root.dataset.qpV25ProductRecipeBound === "true") return;
    root.dataset.qpV25ProductRecipeBound = "true";
    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || cb.dataset.qpStyleRole !== "base") return;
      if(isBusy()) return;

      const key = cb.dataset.qpStyleBaseKey || "";
      if(!cb.checked){
        if(isProductKey(key)) hideProductCard(root);
        return;
      }

      if(isProductKey(key)){
        clearAutoLinked(root, key);
        showProductCard(root, key);
      }else{
        hideProductCard(root);
      }
    }, false);
  }

  function updateGuides(){
    const root = getIntegratedRoot();
    if(!root) return;
    root.dataset.qpIntegratedVersion = "25";
    const guide = root.querySelector(".qp-v14-guide");
    if(guide){
      guide.textContent = "品質・設定の正式統合棚です。最初に生成ベースを1つ選び、必要ならおすすめカードで同系統の補助だけ連動ONできます。商品化したい時は商品化ベース、通常イラストに少しだけ商品用途を足す時は下段の商品化補助を使います。";
    }
    const quick = root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①生成ベースを1つ選ぶ → ②おすすめカードでYes/Noを選ぶ → ③足りない時だけ同系統の強化や共通補助を追加。画風ベースと商品化ベースは同じ単一選択グループです。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = getSelector();
      if(!root) return;
      normalizeLabels(root);
      appendProductBases(root);
      appendProductBoosts(root);
      getProductCard(root);
      bindProductRecipe(root);
      updateGuides();
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v27.js ---
// v27: Style「3.画風スタイル」から、土台になる画風・商品化・デジタル作風を品質/設定の生成ベースへ移植。
// Style側は味付け棚へ寄せるため、ここでは追加分を既存の単一選択/Yes-No連動に接続する。
(function(){
  "use strict";
  const VERSION = 27;
  const KEY = "quality_preset";

  const MIGRATED_BASES = [
    {
      section: "style",
      key: "cel_anime_flat",
      label: "アニメ塗り：くっきりセル調",
      desc: "影少なめ、フラット色、線が読みやすいアニメ塗り。",
      val: "(cel shading:1.3), (flat color:1.2), (solid shading:1.2), (anime coloring:1.2), (clear lines:1.2)"
    },
    {
      section: "style",
      key: "visual_novel_soft",
      label: "ギャルゲ・VN塗り：柔らか光沢",
      desc: "美少女ゲーム・ビジュアルノベル寄り。柔らかい肌・髪の艶。",
      val: "(visual novel style:1.3), (galge style:1.2), (soft shading:1.2), (glossy skin:1.1), (detailed hair shading:1.2)"
    },
    {
      section: "style",
      key: "painterly_anime",
      label: "厚塗りアニメ：ブラシ塗り",
      desc: "アニメ感を残したまま、筆塗り・厚塗り寄りにします。",
      val: "(brush shading:1.3), (semi-realistic anime style:1.2), (painterly rendering:1.2), (blended shading:1.2)"
    },
    {
      section: "style",
      key: "watercolor_anime",
      label: "水彩風アニメ：淡色にじみ",
      desc: "水彩画ほど画材固定せず、アニメ調に透明感を足す土台。",
      val: "(watercolor anime style:1.3), (soft colors:1.2), (transparent shading:1.2), (color bleeding effect:1.1), (anime coloring:1.1)"
    },
    {
      section: "style",
      key: "gacha_sparkle",
      label: "ソシャゲ風：高密度キラキラ",
      desc: "カード絵・ガチャゲーム風。密度、光、派手さを土台にします。",
      val: "(gacha game style:1.3), (sparkling highlights:1.2), rich colors, highly detailed shading"
    },
    {
      section: "style",
      key: "mmd_3d_dance",
      label: "MMD・3DダンスCG：ステージ向け",
      desc: "MMD風、3Dアニメキャラ、ライブステージ・ダンス構図の土台。",
      val: "(MMD style:1.3), (miku miku dance:1.2), (3D anime character:1.2), (dance pose:1.1), (concert stage lighting:1.1)"
    },
    {
      section: "style",
      key: "cel_shaded_3d",
      label: "セルルック3D：トゥーンレンダー",
      desc: "3D感とアニメ線を両立するトゥーンシェーダー系。",
      val: "(cel-shaded 3D:1.3), (toon shader:1.2), (anime 3D render:1.2), (clean outlines:1.1), (smooth color blocks:1.1)"
    },
    {
      section: "digital",
      key: "pixel_art",
      label: "ドット絵：16-bitゲーム風",
      desc: "レトロゲーム、ピクセル単位の表現を土台にします。",
      val: "(pixel art:1.3), (16-bit:1.2), (retro game sprite:1.2), (dithering:1.2), (limited color palette:1.1)"
    },
    {
      section: "digital",
      key: "voxel_art",
      label: "ボクセル：箱庭3D",
      desc: "立方体・箱庭・アイソメ寄りの3D表現。",
      val: "(voxel art:1.3), (3d blocks:1.2), (isometric view:1.2), (blocky shapes:1.2)"
    },
    {
      section: "digital",
      key: "low_poly",
      label: "ローポリゴン：面で見せる3D",
      desc: "少ない面数、シャープな形、ミニマル3D。",
      val: "(low poly:1.3), (faceted 3d render:1.2), (minimalist shapes:1.1), (sharp edges:1.1)"
    },
    {
      section: "digital",
      key: "vector_art",
      label: "ベクターアート：平面クリーン",
      desc: "清潔な線、フラット色、アイコン・ポスター向け。",
      val: "(vector art:1.3), (flat color:1.2), (clean lines:1.2), (illustrator style:1.1), (simple shapes:1.1)"
    },
    {
      section: "digital",
      key: "pop_art",
      label: "ポップアート：太色ハーフトーン",
      desc: "大胆な色、漫画的な網点、ポスター感。",
      val: "(pop art style:1.3), (bold colors:1.2), (halftone dots:1.2), (comic book style:1.1)"
    }
  ];

  const MIGRATED_PRODUCT_BASES = [
    {
      section: "product",
      key: "product_nendoroid",
      label: "商品化：ねんどろいど系デフォルメ",
      desc: "大きな頭、小さな体、光沢プラスチックの立体商品風。",
      val: "(nendoroid style:1.3), (super deformed figure:1.2), (big head small body:1.2), (glossy plastic:1.2), (collectible figure:1.1)"
    },
    {
      section: "product",
      key: "product_scale_figure",
      label: "商品化：スケールフィギュア展示",
      desc: "1/7スケール風、塗装グラデ、展示台座の完成品フィギュア。",
      val: "(scale figure style:1.3), (premium collectible figure:1.2), (museum-quality paint:1.2), (fine gradients:1.2), (display base:1.1)"
    },
    {
      section: "product",
      key: "product_action_figure",
      label: "商品化：可動アクションフィギュア",
      desc: "可動関節、ヒンジ、交換パーツが見える玩具風。",
      val: "(action figure style:1.3), (articulated joints:1.2), (visible seams:1.1), (interchangeable parts:1.1), (manufactured plastic:1.2)"
    },
    {
      section: "product",
      key: "product_plastic_model",
      label: "商品化：プラモデル・ガレージキット",
      desc: "プラモデル、パネルライン、レジンキット、手塗り感。",
      val: "(plastic model style:1.2), (garage kit style:1.2), (panel lines:1.1), (resin kit:1.1), (hand-painted model:1.1)"
    },
    {
      section: "product",
      key: "product_rubber_keychain",
      label: "商品化：ラバーストラップ・キーホルダー",
      desc: "平面デフォルメ、太線、成形ゴム、チャーム穴つき。",
      val: "(rubber strap merchandise:1.3), (silicone keychain charm:1.2), (flat chibi design:1.2), (thick outline:1.2), (keychain loop:1.1)"
    },
    {
      section: "product",
      key: "product_blind_box",
      label: "商品化：ブラインドボックス・ガチャ景品",
      desc: "箱入り小型玩具、カプセル玩具、景品感。",
      val: "(blind box toy:1.2), (collectible series packaging:1.2), (gacha capsule toy:1.1), (prize toy:1.1), (small collectible:1.1)"
    },
    {
      section: "product",
      key: "product_diorama_display",
      label: "商品化：ジオラマ台座展示",
      desc: "台座・ネームプレート・ケース入り展示向け。",
      val: "(diorama base display:1.3), (scenic base:1.2), (nameplate:1.1), (museum display plinth:1.1), (premium collectible display:1.1)"
    },
    {
      section: "product",
      key: "product_hologram_display",
      label: "商品化：ホログラム展示",
      desc: "浮遊ホログラム、SF展示、透明発光の商材イメージ。",
      val: "(hologram projection display:1.3), (volumetric light:1.2), (floating holographic figure:1.2), (sci-fi showcase:1.1)"
    }
  ];

  const MIGRATED_BOOSTS = {
    cel_anime_flat: [
      { label:"線と面を整理", desc:"見やすいアニメ塗りへ寄せる。", val:"(clean lineart:1.2), (crisp edges:1.1), (clear color separation:1.1)" }
    ],
    visual_novel_soft: [
      { label:"肌髪の艶", desc:"VN風の柔らかい質感。", val:"(soft glossy skin:1.1), (detailed hair shading:1.2), (gentle highlights:1.1)" }
    ],
    painterly_anime: [
      { label:"筆跡と厚み", desc:"ブラシ感を強める。", val:"(visible brush strokes:1.2), (painterly texture:1.2), (rich blended shading:1.1)" }
    ],
    watercolor_anime: [
      { label:"淡色にじみ", desc:"アニメ調を守った水彩感。", val:"(soft pigment bleeding:1.1), (transparent color wash:1.1), (delicate brushwork:1.1)" }
    ],
    gacha_sparkle: [
      { label:"カード絵の迫力", desc:"光・密度・エフェクトを強める。", val:"(dynamic composition:1.2), (glowing particles:1.2), (intricate details:1.2), (vivid anime colors:1.2)" }
    ],
    mmd_3d_dance: [
      { label:"ライブステージ光", desc:"ステージライト、ヘイズ、観客シルエット。", val:"(concert stage lighting:1.2), (spotlights:1.2), (volumetric haze:1.1), (crowd silhouettes:1.1)" },
      { label:"ダンス演出", desc:"動き・残像・広角カメラ。", val:"(dynamic camera angle:1.2), (wide-angle lens:1.1), (motion trails:1.1), (light trails:1.1)" }
    ],
    cel_shaded_3d: [
      { label:"トゥーン質感", desc:"3Dセル調の面と輪郭。", val:"(toon shader:1.2), (clean outlines:1.2), (ambient occlusion:1.1), (smooth color blocks:1.1)" }
    ],
    pixel_art: [
      { label:"ドット質感", desc:"低解像度ゲーム風の粒度。", val:"(visible pixels:1.2), (limited color palette:1.1), (pixelated edges:1.2)" }
    ],
    voxel_art: [
      { label:"箱庭感", desc:"ブロック形状と俯瞰構図。", val:"(isometric composition:1.2), (blocky environment:1.1), (toy-like 3d blocks:1.1)" }
    ],
    low_poly: [
      { label:"面の陰影", desc:"ローポリの面構成を強める。", val:"(faceted shading:1.2), (geometric shapes:1.1), (low-poly lighting:1.1)" }
    ],
    vector_art: [
      { label:"クリーン面", desc:"ポスター・アイコン向け。", val:"(flat design:1.2), (simple shapes:1.1), (high readability:1.1)" }
    ],
    pop_art: [
      { label:"網点ポスター", desc:"ポップな漫画ポスター風。", val:"(halftone texture:1.2), (bold outlines:1.1), (poster-like composition:1.1)" }
    ],
    product_nendoroid: [
      { label:"PVCかわいい立体", desc:"小型フィギュアの商品感。", val:"(glossy PVC material:1.2), (painted figure:1.2), (cute collectible toy:1.1)" }
    ],
    product_scale_figure: [
      { label:"展示完成品", desc:"台座と塗装グラデを強める。", val:"(display base:1.2), (premium figure photography:1.1), (fine paint gradients:1.2)" }
    ],
    product_action_figure: [
      { label:"可動ギミック", desc:"関節と玩具工学を強める。", val:"(poseable limbs:1.2), (action figure engineering:1.2), (visible joints:1.1)" }
    ],
    product_plastic_model: [
      { label:"模型質感", desc:"パネルライン・成形素材。", val:"(panel lines:1.2), (plastic texture:1.1), (matte resin surface:1.1)" }
    ],
    product_rubber_keychain: [
      { label:"平面グッズ化", desc:"厚い輪郭とキーホルダー穴。", val:"(molded rubber edges:1.2), (thick outline:1.2), (keychain loop:1.1)" }
    ],
    product_blind_box: [
      { label:"箱入り景品感", desc:"小型箱・景品シリーズ。", val:"(small boxed figure:1.2), (collectible series packaging:1.2), (arcade prize style:1.1)" }
    ],
    product_diorama_display: [
      { label:"台座展示", desc:"台座・ケース・展示光。", val:"(scenic base:1.2), (acrylic dome case:1.1), (premium display lighting:1.1)" }
    ],
    product_hologram_display: [
      { label:"SF展示光", desc:"ホログラムと浮遊光。", val:"(floating holographic figure:1.2), (volumetric light:1.2), (glowing transparent display:1.1)" }
    ]
  };

  const RECIPES = {
    cel_anime_flat: { title:"アニメ塗り：くっきりセル調", text:"線と面を整理して、見やすいセル調へ寄せますか？", boosts:["線と面を整理"], helpers:["顔・目の安定", "色調を整える"] },
    visual_novel_soft: { title:"ギャルゲ・VN塗り：柔らか光沢", text:"肌髪の艶と柔らかい色調をONにしますか？", boosts:["肌髪の艶"], helpers:["顔・目の安定", "色調を整える"] },
    painterly_anime: { title:"厚塗りアニメ：ブラシ塗り", text:"筆跡と厚みを足して、厚塗り寄りにしますか？", boosts:["筆跡と厚み"], helpers:["細部を少し足す", "色調を整える"] },
    watercolor_anime: { title:"水彩風アニメ：淡色にじみ", text:"淡色にじみと紙の柔らかさをONにしますか？", boosts:["淡色にじみ"], helpers:["顔・目の安定", "色調を整える"] },
    gacha_sparkle: { title:"ソシャゲ風：高密度キラキラ", text:"カード絵の迫力・光・密度をONにしますか？", boosts:["カード絵の迫力"], helpers:["顔・目の安定", "人体・手の安定", "細部を少し足す", "色調を整える"] },
    mmd_3d_dance: { title:"MMD・3DダンスCG：ステージ向け", text:"ライブステージ光とダンス演出をまとめてONにしますか？", boosts:["ライブステージ光", "ダンス演出"], helpers:["人体・手の安定", "軽い奥行き"] },
    cel_shaded_3d: { title:"セルルック3D：トゥーンレンダー", text:"トゥーン質感と輪郭をONにしますか？", boosts:["トゥーン質感"], helpers:["顔・目の安定", "色調を整える"] },
    pixel_art: { title:"ドット絵：16-bitゲーム風", text:"ドット質感を強めますか？", boosts:["ドット質感"], helpers:["色調を整える"] },
    voxel_art: { title:"ボクセル：箱庭3D", text:"箱庭感とアイソメ構図をONにしますか？", boosts:["箱庭感"], helpers:["色調を整える", "軽い奥行き"] },
    low_poly: { title:"ローポリゴン：面で見せる3D", text:"面の陰影と形状整理をONにしますか？", boosts:["面の陰影"], helpers:["色調を整える"] },
    vector_art: { title:"ベクターアート：平面クリーン", text:"クリーン面と読みやすさをONにしますか？", boosts:["クリーン面"], helpers:["色調を整える"] },
    pop_art: { title:"ポップアート：太色ハーフトーン", text:"網点ポスター感をONにしますか？", boosts:["網点ポスター"], helpers:["色調を整える"] },
    product_nendoroid: { title:"商品化：ねんどろいど系デフォルメ", text:"PVCかわいい立体と商品感をONにしますか？", boosts:["PVCかわいい立体"], helpers:["細部を少し足す", "色調を整える"] },
    product_scale_figure: { title:"商品化：スケールフィギュア展示", text:"展示完成品向けの台座・塗装・撮影補助をONにしますか？", boosts:["展示完成品"], helpers:["細部を少し足す", "軽い奥行き"] },
    product_action_figure: { title:"商品化：可動アクションフィギュア", text:"可動ギミックと商品的な玩具感をONにしますか？", boosts:["可動ギミック"], helpers:["人体・手の安定", "細部を少し足す"] },
    product_plastic_model: { title:"商品化：プラモデル・ガレージキット", text:"模型質感とパネルラインをONにしますか？", boosts:["模型質感"], helpers:["細部を少し足す", "色調を整える"] },
    product_rubber_keychain: { title:"商品化：ラバーストラップ・キーホルダー", text:"平面グッズ化の太線・成形感をONにしますか？", boosts:["平面グッズ化"], helpers:["色調を整える"] },
    product_blind_box: { title:"商品化：ブラインドボックス・ガチャ景品", text:"箱入り景品感をONにしますか？", boosts:["箱入り景品感"], helpers:["細部を少し足す", "色調を整える"] },
    product_diorama_display: { title:"商品化：ジオラマ台座展示", text:"台座展示・ケース・展示光をONにしますか？", boosts:["台座展示"], helpers:["細部を少し足す", "軽い奥行き"] },
    product_hologram_display: { title:"商品化：ホログラム展示", text:"SF展示光とホログラム感をONにしますか？", boosts:["SF展示光"], helpers:["細部を少し足す", "色調を整える"] }
  };

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function ensureStyles(){
    if(document.getElementById("qp-v27-migrated-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v27-migrated-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v27-divider {
        grid-column:1 / -1;
        font-size:12px;
        font-weight:800;
        color:#0f172a;
        background:#f8fafc;
        border:1px dashed #cbd5e1;
        border-radius:10px;
        padding:7px 9px;
        margin-top:4px;
      }
      #qp-v22-style-selector .qp-v27-product-divider {
        background:#fff7ed;
        border-color:#fed7aa;
        color:#7c2d12;
      }
      #qp-v22-style-selector .qp-v27-recipe-card {
        display:none;
        border:1px solid #a7f3d0;
        background:#ecfdf5;
        color:#065f46;
        border-radius:12px;
        padding:10px;
        margin:8px 0;
        box-shadow:0 4px 12px rgba(15, 23, 42, .08);
      }
      #qp-v22-style-selector .qp-v27-recipe-card.is-visible { display:block; }
      #qp-v22-style-selector .qp-v27-recipe-card.is-product {
        border-color:#fdba74;
        background:#fff7ed;
        color:#7c2d12;
      }
      #qp-v22-style-selector .qp-v27-recipe-title { font-weight:800; font-size:13px; margin-bottom:4px; }
      #qp-v22-style-selector .qp-v27-recipe-text { font-size:12px; line-height:1.55; margin-bottom:8px; }
      #qp-v22-style-selector .qp-v27-actions { display:flex; gap:8px; flex-wrap:wrap; }
      #qp-v22-style-selector .qp-v27-btn {
        border:1px solid #bbf7d0;
        border-radius:999px;
        padding:6px 10px;
        background:#fff;
        color:#047857;
        font-size:12px;
        font-weight:700;
        cursor:pointer;
      }
      #qp-v22-style-selector .qp-v27-btn-primary {
        background:#059669;
        color:#fff;
        border-color:#059669;
      }
      #qp-v22-style-selector .qp-v27-recipe-card.is-product .qp-v27-btn { border-color:#fed7aa; color:#9a3412; }
      #qp-v22-style-selector .qp-v27-recipe-card.is-product .qp-v27-btn-primary { background:#f97316; color:#fff; border-color:#f97316; }
    `;
    document.head.appendChild(style);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getSelector(){
    return document.getElementById("qp-v22-style-selector");
  }

  function getLabel(cb){
    const item = cb && cb.closest(".qp-v22-item");
    const span = item && item.querySelector(".qp-v22-item-main span");
    return span ? (span.textContent || "").trim() : "";
  }

  function createItem(item, opts){
    opts = opts || {};
    const label = document.createElement("label");
    label.className = "qp-v22-item qp-v27-migrated-item";
    const main = document.createElement("div");
    main.className = "qp-v22-item-main";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.val = item.val || "";
    cb.dataset.qpV22 = "true";
    cb.dataset.qpV27 = "true";
    if(opts.exclusiveGroup) cb.dataset.qpExclusiveGroup = opts.exclusiveGroup;
    if(opts.styleKey) cb.dataset.qpStyleKey = opts.styleKey;
    if(opts.baseKey) cb.dataset.qpStyleBaseKey = opts.baseKey;
    if(opts.itemRole) cb.dataset.qpStyleRole = opts.itemRole;
    const span = document.createElement("span");
    span.textContent = item.label || "";
    main.appendChild(cb);
    main.appendChild(span);
    label.appendChild(main);
    if(item.desc){
      const desc = document.createElement("div");
      desc.className = "qp-v22-item-desc";
      desc.textContent = item.desc;
      label.appendChild(desc);
    }
    return label;
  }

  function divider(text, product){
    const div = document.createElement("div");
    div.className = "qp-v27-divider" + (product ? " qp-v27-product-divider" : "");
    div.textContent = text;
    return div;
  }

  function findDetailsBySummary(root, regex){
    return qsAll(root, "details").filter(function(d){
      const s = d.querySelector(":scope > summary");
      return s && regex.test(s.textContent || "");
    })[0] || null;
  }

  function addBases(root){
    const baseShelf = findDetailsBySummary(root, /生成ベース|作風ベース/);
    if(!baseShelf || baseShelf.dataset.qpV27Bases === "true") return;
    baseShelf.dataset.qpV27Bases = "true";
    const box = baseShelf.querySelector(":scope > div");
    if(!box) return;

    box.appendChild(divider("Styleから移植：画風・デジタル生成ベース", false));
    MIGRATED_BASES.forEach(function(item){
      box.appendChild(createItem(item, {
        exclusiveGroup:"qp-v22-style-base",
        baseKey:item.key,
        styleKey:item.key,
        itemRole:"base"
      }));
    });

    box.appendChild(divider("Styleから移植：商品化生成ベース", true));
    MIGRATED_PRODUCT_BASES.forEach(function(item){
      box.appendChild(createItem(item, {
        exclusiveGroup:"qp-v22-style-base",
        baseKey:item.key,
        styleKey:item.key,
        itemRole:"base"
      }));
    });
  }

  function createDetails(title, cls){
    const d = document.createElement("details");
    d.className = "qp-sub-acc " + (cls || "");
    d.open = false;
    const summary = document.createElement("summary");
    summary.textContent = title;
    d.appendChild(summary);
    const box = document.createElement("div");
    box.className = "qp-v22-grid";
    d.appendChild(box);
    return d;
  }

  function addBoosts(root){
    const boostShelf = findDetailsBySummary(root, /作風別強化|ベース別強化|生成ベース別強化/);
    if(!boostShelf || boostShelf.dataset.qpV27Boosts === "true") return;
    boostShelf.dataset.qpV27Boosts = "true";
    const box = boostShelf.querySelector(":scope > div");
    if(!box) return;

    const styleGroup = createDetails("🧩 Style移植ベース 強化", "qp-v22-boost-group");
    const styleBox = styleGroup.querySelector(":scope > div");
    MIGRATED_BASES.forEach(function(base){
      const arr = MIGRATED_BOOSTS[base.key] || [];
      if(!arr.length) return;
      const sub = createDetails(base.label.replace(/：.*/, "") + " 強化", "qp-v22-boost-group");
      const inner = sub.querySelector(":scope > div");
      arr.forEach(function(item){
        inner.appendChild(createItem(item, {
          exclusiveGroup:"qp-v22-boost-" + base.key,
          styleKey:base.key,
          itemRole:"boost"
        }));
      });
      styleBox.appendChild(sub);
    });
    box.appendChild(styleGroup);

    const productGroup = createDetails("🧸 商品化移植ベース 強化", "qp-v22-boost-group");
    const productBox = productGroup.querySelector(":scope > div");
    MIGRATED_PRODUCT_BASES.forEach(function(base){
      const arr = MIGRATED_BOOSTS[base.key] || [];
      if(!arr.length) return;
      const sub = createDetails(base.label.replace(/：.*/, "") + " 強化", "qp-v22-boost-group");
      const inner = sub.querySelector(":scope > div");
      arr.forEach(function(item){
        inner.appendChild(createItem(item, {
          exclusiveGroup:"qp-v22-boost-" + base.key,
          styleKey:base.key,
          itemRole:"boost"
        }));
      });
      productBox.appendChild(sub);
    });
    box.appendChild(productGroup);
  }

  function setChecked(cb, checked){
    if(!cb || cb.checked === checked) return false;
    cb.checked = checked;
    return true;
  }

  function clearAuto(root, keepKey){
    qsAll(root, 'input[type="checkbox"][data-qp-v27-auto-for], input[type="checkbox"][data-qp-v23-auto-for]').forEach(function(cb){
      const from = cb.dataset.qpV27AutoFor || cb.dataset.qpV23AutoFor || "";
      if(from && from !== keepKey){
        setChecked(cb, false);
        delete cb.dataset.qpV27AutoFor;
        delete cb.dataset.qpV23AutoFor;
      }
    });
  }

  function markAuto(cb, key){
    if(!cb || !key) return;
    cb.dataset.qpV27AutoFor = key;
    cb.dataset.qpV23AutoFor = key;
  }

  function findBoost(root, key, label){
    return qsAll(root, 'input[type="checkbox"][data-qp-style-role="boost"][data-qp-style-key="' + key + '"]').filter(function(cb){
      return getLabel(cb) === label;
    })[0] || null;
  }

  function findHelper(root, label){
    return qsAll(root, 'input[type="checkbox"][data-qp-style-role="helper"]').filter(function(cb){
      return getLabel(cb) === label;
    })[0] || null;
  }

  function notify(root){
    if(isBusy()) return;
    try{ root.dispatchEvent(new Event("change", { bubbles:true })); }catch(e){}
    try{ document.dispatchEvent(new CustomEvent("builderQualityPresetRecipeApplied", { bubbles:true, detail:{ source:"v27" } })); }catch(e){}
  }

  function applyRecipe(root, key){
    const r = RECIPES[key];
    if(!root || !r) return;
    clearAuto(root, key);

    (r.boosts || []).forEach(function(label){
      const cb = findBoost(root, key, label);
      if(cb){
        const was = cb.checked;
        setChecked(cb, true);
        if(!was) markAuto(cb, key);
      }
    });
    (r.helpers || []).forEach(function(label){
      const cb = findHelper(root, label);
      if(cb){
        const was = cb.checked;
        setChecked(cb, true);
        if(!was) markAuto(cb, key);
      }
    });
    notify(root);
  }

  function getCard(root){
    let card = root.querySelector(".qp-v27-recipe-card");
    if(card) return card;
    card = document.createElement("div");
    card.className = "qp-v27-recipe-card";
    card.innerHTML = ''
      + '<div class="qp-v27-recipe-title"></div>'
      + '<div class="qp-v27-recipe-text"></div>'
      + '<div class="qp-v27-actions">'
      + '  <button type="button" class="qp-v27-btn qp-v27-no">いいえ</button>'
      + '  <button type="button" class="qp-v27-btn qp-v27-btn-primary qp-v27-yes">はい：おすすめをON</button>'
      + '</div>';
    const baseShelf = findDetailsBySummary(root, /生成ベース|作風ベース/);
    if(baseShelf && baseShelf.parentNode){
      baseShelf.parentNode.insertBefore(card, baseShelf.nextSibling);
    }else{
      (root.querySelector(".qp-v22-box") || root).insertBefore(card, (root.querySelector(".qp-v22-box") || root).firstChild);
    }
    card.querySelector(".qp-v27-no").addEventListener("click", function(){
      hideCard(root);
    });
    card.querySelector(".qp-v27-yes").addEventListener("click", function(){
      applyRecipe(root, card.dataset.styleKey || "");
      hideCard(root);
    });
    return card;
  }

  function showCard(root, key){
    const r = RECIPES[key];
    if(!root || !r || isBusy()) return;
    const card = getCard(root);
    card.dataset.styleKey = key;
    const isProduct = /^product_/.test(key);
    card.classList.toggle("is-product", isProduct);
    const title = card.querySelector(".qp-v27-recipe-title");
    const text = card.querySelector(".qp-v27-recipe-text");
    if(title) title.textContent = (isProduct ? "🧸 " : "🧩 ") + r.title + " 用おすすめセット";
    if(text) text.textContent = r.text + " いいえなら生成ベースだけ残します。";
    card.classList.add("is-visible");
  }

  function hideCard(root){
    const card = root && root.querySelector(".qp-v27-recipe-card");
    if(card){
      card.classList.remove("is-visible");
      card.dataset.styleKey = "";
    }
  }

  function bindRecipe(root){
    if(!root || root.dataset.qpV27RecipeBound === "true") return;
    root.dataset.qpV27RecipeBound = "true";
    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || cb.dataset.qpStyleRole !== "base") return;
      if(isBusy()) return;
      const key = cb.dataset.qpStyleBaseKey || "";
      if(!cb.checked){
        if(RECIPES[key]) hideCard(root);
        return;
      }
      if(RECIPES[key]){
        clearAuto(root, key);
        showCard(root, key);
      }else{
        hideCard(root);
      }
    }, false);
  }

  function updateGuide(root){
    if(!root) return;
    root.dataset.qpIntegratedVersion = "27";
    const guide = document.querySelector("#qp-v14-integrated .qp-v14-guide");
    if(guide){
      guide.textContent = "品質・設定の正式統合棚です。生成ベースにはStyleから移した画風・デジタル作風・商品化ベースも含まれます。まず1つ選び、必要ならおすすめカードで同系統の補助だけ連動ONしてください。";
    }
    const quick = document.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①生成ベースを1つ選ぶ → ②おすすめカードでYes/No → ③足りない時だけ同系統の強化や共通補助を追加。Style側は味付け中心に整理済みです。";
    }
    const summary = root.querySelector(":scope > summary");
    if(summary) summary.textContent = "⭐ 最初に選ぶ：生成ベース＋おすすめ連動";
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = getSelector();
      if(!root) return;
      addBases(root);
      addBoosts(root);
      getCard(root);
      bindRecipe(root);
      updateGuide(root);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v28.js ---
// v28: Legacy削除で見えなくなっていた人物制御（人数）を、統合版の通常UIへ復活。
// 旧Legacyには戻さず、生成ベース直下に置いて初心者が先に選びやすい導線にする。
(function(){
  "use strict";
  const VERSION = 28;
  const KEY = "quality_preset";

  const PERSON_ITEMS = [
    { key:"solo", label:"solo", desc:"単体キャラを明確にしたい時。", val:"solo" },
    { key:"1girl", label:"1girl", desc:"女の子1人。単体女性キャラの基本。", val:"1girl" },
    { key:"1boy", label:"1boy", desc:"男の子1人。単体男性キャラの基本。", val:"1boy" },
    { key:"1girl_1boy", label:"1girl + 1boy", desc:"男女ペア。ペア補助や関係性指定の土台。", val:"1girl, 1boy" },
    { key:"2girls", label:"2girls", desc:"女の子2人。モデル相性に左右されやすい実験枠。", val:"2girls" },
    { key:"2boys", label:"2boys", desc:"男の子2人。モデル相性に左右されやすい実験枠。", val:"2boys" },
    { key:"group", label:"group / multiple characters", desc:"複数人構図。細かい役割指定は別棚と併用。", val:"multiple characters, group shot" }
  ];

  const FOCUS_ITEMS = [
    { key:"single_focus", label:"単体フォーカス補助", desc:"主役を1人に寄せる補助。人数指定と併用。", val:"(single character focus:1.2), (clear main subject:1.2)" },
    { key:"human_focus", label:"人物顔・人型維持", desc:"なりきりや異形モチーフで人型を保ちたい時。", val:"(human character focus:1.2), (clearly human face:1.2), (human anatomy:1.1)" },
    { key:"pair_focus", label:"男女ペアの見分け補助", desc:"1girl + 1boy の時に男女を分けて見せたい時。", val:"(distinct male and female characters:1.2), (clear two-person composition:1.2)" }
  ];

  function ensureStyles(){
    if(document.getElementById("qp-v28-person-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v28-person-style";
    style.textContent = `
      #qp-v28-person-control {
        border:1px solid #c7d2fe;
        border-radius:12px;
        background:#f8faff;
        margin:8px 0;
      }
      #qp-v28-person-control > summary {
        background:#e0e7ff !important;
        color:#312e81 !important;
        font-weight:800 !important;
      }
      #qp-v28-person-control .qp-v28-box {
        padding:8px;
        display:flex;
        flex-direction:column;
        gap:8px;
      }
      #qp-v28-person-control .qp-v28-note {
        font-size:12px;
        line-height:1.6;
        color:#334155;
        background:#ffffff;
        border:1px solid #dbeafe;
        border-radius:10px;
        padding:8px 10px;
      }
      #qp-v28-person-control .qp-v28-grid {
        display:grid;
        grid-template-columns:1fr;
        gap:6px;
      }
      #qp-v28-person-control .qp-v28-item {
        display:block;
        border:1px solid #e5e7eb;
        border-radius:10px;
        padding:8px;
        background:#fff;
      }
      #qp-v28-person-control .qp-v28-main {
        display:flex;
        align-items:flex-start;
        gap:8px;
        font-size:13px;
        font-weight:800;
        color:#0f172a;
      }
      #qp-v28-person-control .qp-v28-desc {
        font-size:11px;
        color:#64748b;
        line-height:1.45;
        margin:4px 0 0 24px;
      }
      #qp-v28-person-control .qp-v28-sub > summary {
        background:#eef2ff !important;
        color:#3730a3 !important;
      }
      @media (min-width:760px){
        #qp-v28-person-control .qp-v28-grid { grid-template-columns:1fr 1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function createItem(item, group){
    const label = document.createElement("label");
    label.className = "qp-v28-item";

    const main = document.createElement("div");
    main.className = "qp-v28-main";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "qp-v28-person-" + item.key;
    cb.dataset.val = item.val;
    if(group) cb.dataset.qpPersonGroup = group;

    const span = document.createElement("span");
    span.textContent = item.label;

    main.appendChild(cb);
    main.appendChild(span);
    label.appendChild(main);

    const desc = document.createElement("div");
    desc.className = "qp-v28-desc";
    desc.textContent = item.desc || "";
    label.appendChild(desc);

    return label;
  }

  function createSub(title, items, group){
    const d = document.createElement("details");
    d.className = "qp-sub-acc qp-v28-sub";
    d.open = group === "person-count";

    const summary = document.createElement("summary");
    summary.textContent = title;
    d.appendChild(summary);

    const grid = document.createElement("div");
    grid.className = "qp-v28-grid";
    items.forEach(function(item){ grid.appendChild(createItem(item, group)); });
    d.appendChild(grid);
    return d;
  }

  function buildPersonControl(){
    const wrap = document.createElement("details");
    wrap.id = "qp-v28-person-control";
    wrap.className = "qp-sub-acc";
    wrap.open = false;

    const summary = document.createElement("summary");
    summary.textContent = "👥 人物制御（人数・主役）";
    wrap.appendChild(summary);

    const box = document.createElement("div");
    box.className = "qp-v28-box";

    const note = document.createElement("div");
    note.className = "qp-v28-note";
    note.innerHTML = "<strong>必要な時だけON。</strong>人数は基本1つだけ選べます。1girl / 1boy / 1girl + 1boy は、ペア補助やPrompt Compiler側の最適化と相性が良い基本指定です。";
    box.appendChild(note);

    box.appendChild(createSub("人数ベース（単一選択）", PERSON_ITEMS, "person-count"));
    box.appendChild(createSub("人物フォーカス補助（複数可）", FOCUS_ITEMS, ""));

    wrap.appendChild(box);
    return wrap;
  }

  function insertPersonControl(root){
    if(!root || document.getElementById("qp-v28-person-control")) return;
    const content = root.querySelector(":scope > div") || root;
    const node = buildPersonControl();

    const styleSelector = document.getElementById("qp-v22-style-selector");
    if(styleSelector && styleSelector.parentElement === content){
      if(styleSelector.nextSibling) content.insertBefore(node, styleSelector.nextSibling);
      else content.appendChild(node);
      return;
    }

    const guide = content.querySelector("#qp-v20-quick-guide, .qp-v14-guide");
    if(guide && guide.nextSibling) content.insertBefore(node, guide.nextSibling);
    else if(guide) content.appendChild(node);
    else content.insertBefore(node, content.firstChild);
  }

  function bindPersonExclusive(root){
    if(!root || root.dataset.qpV28PersonBound === "true") return;
    root.dataset.qpV28PersonBound = "true";
    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || !cb.checked) return;
      const group = cb.dataset.qpPersonGroup;
      if(!group) return;
      Array.prototype.forEach.call(root.querySelectorAll('input[type="checkbox"][data-qp-person-group="' + group + '"]'), function(other){
        if(other !== cb && other.checked) other.checked = false;
      });
    });
  }

  const API = {
    initUI(container){
      ensureStyles();
      const root = document.getElementById("qp-v14-integrated");
      if(!root) return;
      insertPersonControl(root);
      bindPersonExclusive(root);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v29.js ---
// v29: 人物制御を旧Legacy系の「有効化つき」正式棚へ一本化。
// v28で追加した簡易人物制御は重複防止のため通常UIから外す。
(function(){
  "use strict";
  const VERSION = 29;
  const KEY = "quality_preset";

  function cleanupDuplicatePersonControl(){
    try{
      const v28 = document.getElementById("qp-v28-person-control");
      if(v28 && v28.parentElement) v28.parentElement.removeChild(v28);
    }catch(e){}
    try{
      const old = document.querySelector("#cc-enable");
      if(old){
        const acc = old.closest("details");
        if(acc){
          acc.dataset.qpPersonControlOfficial = "v29";
          const title = acc.querySelector(".qp-subacc-title");
          if(title) title.textContent = "👥 人物制御（人数・相手役）";
        }
      }
    }catch(e){}
  }

  const API = {
    initUI(container){
      cleanupDuplicatePersonControl();
      setTimeout(cleanupDuplicatePersonControl, 0);
      setTimeout(cleanupDuplicatePersonControl, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v30.js ---
// v30: v29の人物制御が統合棚へ表示されない問題を修正。
// 旧Legacy系の「有効化つき人物制御」を、品質・設定 統合版の通常UIへ確実に挿入する。
(function(){
  "use strict";
  const VERSION = 30;
  const KEY = "quality_preset";

  const IS_SECRET = (function(){
    try{
      return localStorage.getItem("MY_SECRET_UNLOCK") === "true" ||
             localStorage.getItem("MY_R18_UNLOCK") === "true" ||
             localStorage.getItem("R18_UNLOCK") === "true";
    }catch(e){ return false; }
  })();

  const GROUPS = [
    {
      title: "基本",
      cls: "basic",
      items: [
        { key:"solo", label:"solo", desc:"単体フォーカス", val:"solo" },
        { key:"pair_1girl_1boy", label:"1girl + 1boy", desc:"男女ペア / ペア補助の土台", val:"1girl, 1boy" }
      ]
    },
    {
      title: "Girls",
      cls: "girls",
      items: [
        { key:"1girl", label:"1girl", badge:"推奨", desc:"女1 / 最適化対応", val:"1girl" },
        { key:"2girls", label:"2girls", badge:"実験", desc:"女2 / 最適化対応外", val:"2girls" },
        { key:"3girls", label:"3girls", badge:"実験", desc:"女3 / 最適化対応外", val:"3girls" },
        { key:"4girls", label:"4girls", badge:"実験", desc:"女4 / 最適化対応外", val:"4girls" },
        { key:"5girls", label:"5girls", badge:"実験", desc:"女5 / 最適化対応外", val:"5girls" },
        { key:"faceless_female_curvy", label:"1girl + faceless female + curvyfemale", badge:"R-18", r18:true, desc:"R-18シークレット用：女性側の匿名・体型補助", val:"1girl, faceless female, curvy female" }
      ]
    },
    {
      title: "Boys",
      cls: "boys",
      items: [
        { key:"1boy", label:"1boy", badge:"推奨", desc:"男1 / 最適化対応", val:"1boy" },
        { key:"2boys", label:"2boys", badge:"実験", desc:"男2 / 最適化対応外", val:"2boys" },
        { key:"3boys", label:"3boys", badge:"実験", desc:"男3 / 最適化対応外", val:"3boys" },
        { key:"4boys", label:"4boys", badge:"実験", desc:"男4 / 最適化対応外", val:"4boys" },
        { key:"5boys", label:"5boys", badge:"実験", desc:"男5 / 最適化対応外", val:"5boys" },
        { key:"faceless_male_muscular", label:"1boy + faceless male + muscularmale", badge:"R-18", r18:true, desc:"R-18シークレット用：男性側の匿名・体型補助", val:"1boy, faceless male, muscular male" }
      ]
    },
    {
      title: "補助",
      cls: "support",
      multi: true,
      items: [
        { key:"single_focus", label:"単体フォーカス補助", desc:"主役を1人に寄せる補助。", val:"(single character focus:1.2), (clear main subject:1.2)" },
        { key:"human_focus", label:"人物顔・人型維持", desc:"なりきり・異形モチーフで人型を保つ補助。", val:"(human character focus:1.2), (clearly human face:1.2), (human anatomy:1.1)" },
        { key:"pair_distinguish", label:"男女ペアの見分け補助", desc:"1girl + 1boy の男女差を読みやすくする補助。", val:"(distinct male and female characters:1.2), (clear two-person composition:1.2)" }
      ]
    }
  ];

  function ensureStyles(){
    if(document.getElementById("qp-v30-person-control-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v30-person-control-style";
    style.textContent = `
      #qp-v30-person-control {
        border:1px solid #bfdbfe !important;
        border-radius:14px !important;
        background:#f8fbff !important;
        margin:8px 0 12px !important;
        overflow:hidden !important;
      }
      #qp-v30-person-control > summary {
        background:#dbeafe !important;
        color:#1e3a8a !important;
        font-weight:900 !important;
        display:flex !important;
        align-items:center !important;
        justify-content:space-between !important;
        gap:10px !important;
      }
      #qp-v30-person-control .qp-v30-enable {
        display:inline-flex;
        align-items:center;
        gap:7px;
        padding:5px 9px;
        border-radius:10px;
        background:#eff6ff;
        border:1px solid #93c5fd;
        font-size:12px;
        font-weight:800;
        color:#1d4ed8;
      }
      #qp-v30-person-control .qp-v30-box {
        padding:10px;
        display:flex;
        flex-direction:column;
        gap:10px;
      }
      #qp-v30-person-control .qp-v30-note {
        font-size:12px;
        line-height:1.6;
        color:#334155;
        background:#fff;
        border:1px solid #dbeafe;
        border-radius:12px;
        padding:9px 10px;
      }
      #qp-v30-person-control .qp-v30-row {
        border:1px solid #e5e7eb;
        border-radius:12px;
        background:#fff;
        padding:9px;
      }
      #qp-v30-person-control .qp-v30-row-title {
        font-weight:900;
        color:#334155;
        margin:0 0 8px;
        font-size:14px;
      }
      #qp-v30-person-control .qp-v30-grid {
        display:grid;
        grid-template-columns:1fr;
        gap:8px;
      }
      #qp-v30-person-control .qp-v30-item {
        display:flex;
        align-items:flex-start;
        gap:9px;
        border:1px solid #e5e7eb;
        border-radius:12px;
        padding:10px;
        background:#fff;
        cursor:pointer;
      }
      #qp-v30-person-control .qp-v30-item.is-rec {
        background:linear-gradient(180deg, rgba(236,253,245,.98), rgba(240,253,250,.98));
        border-color:rgba(22,163,74,.28);
      }
      #qp-v30-person-control .qp-v30-item.is-exp {
        background:linear-gradient(180deg, rgba(255,247,237,.98), rgba(255,251,235,.98));
        border-color:rgba(217,119,6,.28);
      }
      #qp-v30-person-control .qp-v30-item.is-r18 {
        background:linear-gradient(180deg, rgba(255,241,242,.98), rgba(255,247,247,.98));
        border-color:rgba(190,18,60,.28);
      }
      #qp-v30-person-control .qp-v30-title {
        font-weight:900;
        color:#0f172a;
        line-height:1.2;
      }
      #qp-v30-person-control .qp-v30-desc {
        font-size:12px;
        color:#64748b;
        line-height:1.45;
        margin-top:3px;
      }
      #qp-v30-person-control .qp-v30-badge {
        display:inline-flex;
        align-items:center;
        padding:2px 7px;
        border-radius:999px;
        font-size:10px;
        font-weight:900;
        margin-left:6px;
      }
      #qp-v30-person-control .qp-v30-badge.rec { background:rgba(22,163,74,.12); color:#166534; border:1px solid rgba(22,163,74,.22); }
      #qp-v30-person-control .qp-v30-badge.exp { background:rgba(217,119,6,.12); color:#9a3412; border:1px solid rgba(217,119,6,.22); }
      #qp-v30-person-control .qp-v30-badge.r18 { background:rgba(190,18,60,.12); color:#be123c; border:1px solid rgba(190,18,60,.22); }
      #qp-v30-person-control.qp-v30-disabled .qp-v30-row {
        opacity:.55;
      }
      #qp-v30-person-control.qp-v30-disabled .qp-v30-row input[data-val] {
        pointer-events:none;
      }
      @media (min-width:760px){
        #qp-v30-person-control .qp-v30-grid { grid-template-columns:1fr 1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getIntegratedContent(root){
    if(!root) return null;
    return root.querySelector(":scope > div") || root;
  }

  function makeBadge(kind){
    const span = document.createElement("span");
    span.className = "qp-v30-badge " + (kind === "推奨" ? "rec" : kind === "実験" ? "exp" : "r18");
    span.textContent = kind;
    return span;
  }

  function makeItem(item, group, multi){
    const lab = document.createElement("label");
    lab.className = "qp-v30-item";
    if(item.badge === "推奨") lab.classList.add("is-rec");
    if(item.badge === "実験") lab.classList.add("is-exp");
    if(item.badge === "R-18") lab.classList.add("is-r18");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "qp-v30-person-" + item.key;
    cb.dataset.val = item.val;
    cb.dataset.qpV30PersonGroup = group || "";
    if(multi) cb.dataset.qpV30PersonMulti = "true";

    const body = document.createElement("div");
    const title = document.createElement("div");
    title.className = "qp-v30-title";
    title.appendChild(document.createTextNode(item.label));
    if(item.badge) title.appendChild(makeBadge(item.badge));

    const desc = document.createElement("div");
    desc.className = "qp-v30-desc";
    desc.textContent = item.desc || "";

    body.appendChild(title);
    body.appendChild(desc);
    lab.appendChild(cb);
    lab.appendChild(body);
    return lab;
  }

  function buildPersonControl(){
    const wrap = document.createElement("details");
    wrap.id = "qp-v30-person-control";
    wrap.open = false;

    const summary = document.createElement("summary");
    const title = document.createElement("span");
    title.textContent = "👥 人物制御（人数・相手役）";

    const enableLab = document.createElement("label");
    enableLab.className = "qp-v30-enable";
    enableLab.addEventListener("click", function(ev){ ev.stopPropagation(); });

    const enable = document.createElement("input");
    enable.type = "checkbox";
    enable.id = "qp-v30-person-enable";

    const enableText = document.createElement("span");
    enableText.textContent = "有効化";

    enableLab.appendChild(enable);
    enableLab.appendChild(enableText);
    summary.appendChild(title);
    summary.appendChild(enableLab);
    wrap.appendChild(summary);

    const box = document.createElement("div");
    box.className = "qp-v30-box";

    const note = document.createElement("div");
    note.className = "qp-v30-note";
    note.innerHTML = "<strong>有効化ONの時だけ下の人物指定が出力されます。</strong> OFFにすると人物指定を全解除します。1girl / 1boy / 1girl + 1boy は推奨、多人数は実験枠です。";
    box.appendChild(note);

    GROUPS.forEach(function(g){
      const row = document.createElement("div");
      row.className = "qp-v30-row";
      const h = document.createElement("div");
      h.className = "qp-v30-row-title";
      h.textContent = g.title;
      row.appendChild(h);

      const grid = document.createElement("div");
      grid.className = "qp-v30-grid";
      (g.items || []).filter(function(it){ return !it.r18 || IS_SECRET; }).forEach(function(it){
        grid.appendChild(makeItem(it, g.cls, !!g.multi));
      });
      row.appendChild(grid);
      box.appendChild(row);
    });

    wrap.appendChild(box);

    function setEnabled(on){
      wrap.classList.toggle("qp-v30-disabled", !on);
      box.querySelectorAll("input[type=checkbox][data-val]").forEach(function(cb){
        cb.disabled = !on;
        if(!on) cb.checked = false;
      });
      try{ window.dispatchEvent(new Event("input")); }catch(e){}
    }

    enable.addEventListener("change", function(){ setEnabled(enable.checked); });
    setEnabled(false);
    return wrap;
  }

  function insertPersonControl(){
    const root = getIntegratedRoot();
    const content = getIntegratedContent(root);
    if(!root || !content) return;

    // v28簡易版や、旧の不可視位置に残ったcc-enable版が通常UIへ出ないよう整理。
    const v28 = document.getElementById("qp-v28-person-control");
    if(v28 && v28.parentElement) v28.parentElement.removeChild(v28);

    let node = document.getElementById("qp-v30-person-control");
    if(!node) node = buildPersonControl();

    // 生成ベースの直後に固定。なければ統合棚の上段へ。
    const selector = document.getElementById("qp-v22-style-selector");
    if(selector && selector.parentElement === content){
      if(selector.nextSibling !== node){
        content.insertBefore(node, selector.nextSibling);
      }
    }else{
      const guide = content.querySelector("#qp-v20-quick-guide, .qp-v14-guide");
      if(guide && guide.nextSibling !== node) content.insertBefore(node, guide.nextSibling);
      else if(!node.parentElement) content.insertBefore(node, content.firstChild);
    }
  }

  function bindExclusive(){
    const root = getIntegratedRoot();
    if(!root || root.dataset.qpV30PersonBound === "true") return;
    root.dataset.qpV30PersonBound = "true";
    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || !cb.checked) return;
      if(!cb.dataset || !cb.dataset.qpV30PersonGroup) return;
      if(cb.dataset.qpV30PersonMulti === "true") return;
      const group = cb.dataset.qpV30PersonGroup;
      root.querySelectorAll('input[type="checkbox"][data-qp-v30-person-group="' + group + '"]').forEach(function(other){
        if(other !== cb) other.checked = false;
      });
    }, false);
  }

  const API = {
    initUI(container){
      ensureStyles();
      insertPersonControl();
      bindExclusive();
      setTimeout(insertPersonControl, 0);
      setTimeout(insertPersonControl, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v31.js ---
// v31: 旧Legacy内に残っていた技術系・NSFWフラグ棚を「高度設定・技術タグ」として正式復帰。
// 生成ベースとは別の任意補助。NSFWフラグは既存のシークレット解放条件を維持。
(function(){
  "use strict";
  const VERSION = 31;
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const ADVANCED_SECTIONS = [
    {
      title: "⚠️ NSFWフラグ・基本",
      secret: true,
      note: "R-18系の基本フラグです。必要な時だけONにしてください。",
      items: [
        { label: "NSFW", val: "nsfw", desc: "成人向け要素を許可したい時の基本フラグ。" },
        { label: "R-18", val: "r18", desc: "R-18系生成へ寄せる明示フラグ。" },
        { label: "ヌード許可", val: "nude, naked, (nipples), (pussy), (no clothes)", desc: "裸体や露出を許可したい時向け。" },
        { label: "露骨な表現（Explicit）", val: "explicit", desc: "性的表現をさらに直接的にしたい時向け。" },
        { label: "高画質R-18補正", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (extremely detailed soft skin:1.3), (glistening skin:1.2), (erotic lighting:1.3), (sensual atmosphere:1.2), (flush:1.2), (sweat drops:1.1), (cinematic lighting:1.1), (depth of field:1.1)", desc: "艶・肌・空気感を整えるR-18向け補正。" }
      ]
    },
    {
      title: "🛠️ 制作ソフト・ツール",
      note: "特定ソフト風の制作感を足す上級者向けタグです。生成ベースとは別の味付けとして使います。",
      items: [
        { label: "Cinema 4D", val: "cinema 4d", desc: "広告CGや整った3D感へ寄せたい時向け。" },
        { label: "ZBrush（彫刻）", val: "zbrush", desc: "彫刻的な造形感や面の強さを足したい時向け。" },
        { label: "Maya", val: "maya", desc: "王道の3D制作感や安定したCG感を出したい時向け。" },
        { label: "Blender", val: "blender", desc: "汎用的な3Dレンダ感を軽く足したい時向け。" },
        { label: "Substance Painter", val: "substance painter", desc: "塗装感や素材表現を強めたい時向け。" }
      ]
    },
    {
      title: "🖥️ レンダリング・エンジン",
      note: "レンダリング方式や商業CG感を明示したい時の補助です。画材系ベースとは競合しやすいので必要時だけ。",
      items: [
        { label: "Unreal Engine 5", val: "unreal engine 5", desc: "UE5寄りのゲームCG感を出したい時向け。" },
        { label: "Octane Render", val: "octane render", desc: "艶や発光の強い高級レンダ感を出したい時向け。" },
        { label: "Redshift Render", val: "redshift render", desc: "高速系の商業CGらしい整理感を足したい時向け。" },
        { label: "V-Ray Render", val: "v-ray", desc: "建築・商品寄りの硬質で綺麗な光に寄せたい時向け。" },
        { label: "Arnold Render", val: "arnold render", desc: "映画寄りの落ち着いた写実感を出したい時向け。" },
        { label: "Corona Render", val: "corona render", desc: "やわらかい自然光の写実レンダ感を足したい時向け。" },
        { label: "Blender Cycles", val: "cycles render", desc: "Blender系のパストレ感を素直に足したい時向け。" }
      ]
    },
    {
      title: "⚙️ 3D技術・シェーダー",
      note: "3D・CG・商品化寄りの質感や光を細かく指定したい時の技術補助です。",
      items: [
        { label: "パストレーシング", val: "path tracing", desc: "光の回り込みや高級CG感を強めたい時向け。" },
        { label: "レイトレーシング", val: "ray tracing", desc: "反射や発光のリアルさを足したい時向け。" },
        { label: "Lumen反射（UE5）", val: "lumen reflections", desc: "UE5風のリアルタイム反射感を足したい時向け。" },
        { label: "Naniteジオメトリ", val: "nanite geometry", desc: "細密な形状情報や高精細3D感を強めたい時向け。" },
        { label: "PBR（物理ベース）", val: "physically based rendering", desc: "素材ごとの反応差を綺麗に出したい時向け。" },
        { label: "シェーダー", val: "shaders", desc: "質感制御やCGらしい面表現を足したい時向け。" },
        { label: "SSS（表面下散乱）", val: "subsurface scattering", desc: "肌や半透明素材の柔らかさを出したい時向け。" },
        { label: "アンビエントオクルージョン", val: "ambient occlusion", desc: "陰影の締まりや接地感を強めたい時向け。" },
        { label: "グローバルイルミネーション", val: "global illumination", desc: "全体の光回りを自然に整えたい時向け。" },
        { label: "ボリュメトリック照明", val: "volumetric lighting", desc: "光の筋や空気感を演出したい時向け。" }
      ]
    }
  ];

  function ensureStyles(){
    if(document.getElementById("qp-v31-advanced-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v31-advanced-style";
    style.textContent = `
      #qp-v31-advanced {
        border:1px solid rgba(100,116,139,.24);
        border-radius:14px;
        background:linear-gradient(180deg, rgba(248,250,252,.98), rgba(255,255,255,.98));
        margin:10px 0 12px;
        overflow:hidden;
      }
      #qp-v31-advanced > summary {
        font-weight:900;
        color:#334155;
        background:#f1f5f9;
      }
      #qp-v31-advanced .qp-v31-box {
        padding:10px;
        display:flex;
        flex-direction:column;
        gap:10px;
      }
      #qp-v31-advanced .qp-v31-note {
        font-size:12px;
        line-height:1.55;
        color:#475569;
        border:1px solid #e2e8f0;
        background:#fff;
        border-radius:12px;
        padding:8px 10px;
      }
      #qp-v31-advanced .qp-v31-sub {
        border:1px solid #e5e7eb;
        border-radius:12px;
        background:#fff;
        overflow:hidden;
      }
      #qp-v31-advanced .qp-v31-sub > summary {
        font-weight:850;
        color:#334155;
        background:#fafafa;
      }
      #qp-v31-advanced .qp-v31-sub-note {
        margin:8px 8px 0;
        padding:7px 9px;
        border-radius:10px;
        font-size:12px;
        color:#64748b;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        line-height:1.5;
      }
      #qp-v31-advanced .qp-v31-grid {
        display:grid;
        grid-template-columns:1fr;
        gap:8px;
        padding:8px;
      }
      #qp-v31-advanced .qp-v31-item {
        display:flex;
        align-items:flex-start;
        gap:8px;
        border:1px solid #e5e7eb;
        border-radius:12px;
        background:#fff;
        padding:8px;
        cursor:pointer;
      }
      #qp-v31-advanced .qp-v31-item:hover {
        background:#f8fafc;
      }
      #qp-v31-advanced .qp-v31-title {
        font-weight:800;
        color:#1f2937;
        line-height:1.25;
      }
      #qp-v31-advanced .qp-v31-desc {
        font-size:12px;
        color:#64748b;
        line-height:1.4;
        margin-top:3px;
      }
      @media (min-width:760px){
        #qp-v31-advanced .qp-v31-grid { grid-template-columns:1fr 1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getIntegratedContent(root){
    if(!root) return null;
    return root.querySelector(":scope > div") || root;
  }

  function makeItem(item){
    const label = document.createElement("label");
    label.className = "qp-v31-item";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.val = item.val;
    const body = document.createElement("div");
    const title = document.createElement("div");
    title.className = "qp-v31-title";
    title.textContent = item.label;
    const desc = document.createElement("div");
    desc.className = "qp-v31-desc";
    desc.textContent = item.desc || "";
    body.appendChild(title);
    if(item.desc) body.appendChild(desc);
    label.appendChild(cb);
    label.appendChild(body);
    return label;
  }

  function makeSub(section){
    if(section.secret && !IS_UNLOCKED) return null;
    const d = document.createElement("details");
    d.className = "qp-v31-sub";
    const s = document.createElement("summary");
    s.textContent = section.title;
    d.appendChild(s);
    if(section.note){
      const note = document.createElement("div");
      note.className = "qp-v31-sub-note";
      note.textContent = section.note;
      d.appendChild(note);
    }
    const grid = document.createElement("div");
    grid.className = "qp-v31-grid";
    section.items.forEach(function(item){ grid.appendChild(makeItem(item)); });
    d.appendChild(grid);
    return d;
  }

  function buildAdvanced(){
    const wrap = document.createElement("details");
    wrap.id = "qp-v31-advanced";
    wrap.open = false;

    const summary = document.createElement("summary");
    summary.textContent = "🧩 高度設定・技術タグ（任意）";
    wrap.appendChild(summary);

    const box = document.createElement("div");
    box.className = "qp-v31-box";

    const note = document.createElement("div");
    note.className = "qp-v31-note";
    note.textContent = "旧クオリティ棚から復帰した上級者向け補助です。制作ソフト・レンダラー・3D技術は作風ベースを上書きしやすいので、必要な時だけ追加してください。";
    box.appendChild(note);

    ADVANCED_SECTIONS.forEach(function(section){
      const sub = makeSub(section);
      if(sub) box.appendChild(sub);
    });

    wrap.appendChild(box);
    return wrap;
  }

  function insertAdvanced(){
    const root = getIntegratedRoot();
    const content = getIntegratedContent(root);
    if(!root || !content || document.getElementById("qp-v31-advanced")) return;

    const node = buildAdvanced();

    const finish = Array.prototype.find.call(content.querySelectorAll("summary"), function(s){
      return /仕上げ|Finish/.test(s.textContent || "");
    });
    const finishDetails = finish ? finish.closest("details") : null;
    if(finishDetails && finishDetails.parentNode === content){
      finishDetails.parentNode.insertBefore(node, finishDetails.nextSibling);
      return;
    }

    const person = document.getElementById("qp-v30-person-control");
    if(person && person.parentNode === content && person.nextSibling){
      content.insertBefore(node, person.nextSibling);
      return;
    }
    content.appendChild(node);
  }

  const API = {
    initUI(container){
      ensureStyles();
      insertAdvanced();
      setTimeout(insertAdvanced, 0);
      setTimeout(insertAdvanced, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v33.js ---
// v33: 技術タグおすすめ連動を控えめ化。
// 制作ソフト名・特定レンダラー名は自動ONしない。見た目に効く3D技術・シェーダー補助だけを必要最小限で連動する。
(function(){
  "use strict";
  const VERSION = 33;
  const KEY = "quality_preset";

  const TECH_RECIPES = {
    // CG / 3D系：工程名ではなく、見た目に効く軽いCG補助だけ
    cg_anime: ["シェーダー", "アンビエントオクルージョン"],
    mmd_3d_dance: ["シェーダー", "アンビエントオクルージョン"],
    cel_shaded_3d: ["シェーダー", "アンビエントオクルージョン"],
    voxel_art: ["アンビエントオクルージョン"],
    low_poly: ["アンビエントオクルージョン"],
    gacha_sparkle: ["シェーダー", "アンビエントオクルージョン"],

    // フォトリアル系：写実の見た目に直結するものだけ
    photo_real: ["PBR（物理ベース）", "レイトレーシング", "SSS（表面下散乱）", "アンビエントオクルージョン", "グローバルイルミネーション"],

    // 商品化系：素材感・接地感・カタログ感に効くものだけ
    product_figure: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン"],
    product_acrylic_stand: ["PBR（物理ベース）", "アンビエントオクルージョン"],
    product_badge: ["PBR（物理ベース）"],
    product_package: ["PBR（物理ベース）", "アンビエントオクルージョン"],
    product_photo: ["PBR（物理ベース）", "レイトレーシング", "アンビエントオクルージョン", "グローバルイルミネーション"],

    product_nendoroid: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン"],
    product_scale_figure: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン"],
    product_action_figure: ["PBR（物理ベース）", "アンビエントオクルージョン"],
    product_plastic_model: ["PBR（物理ベース）", "アンビエントオクルージョン"],
    product_rubber_keychain: ["PBR（物理ベース）"],
    product_blind_box: ["PBR（物理ベース）", "アンビエントオクルージョン"],
    product_diorama_display: ["PBR（物理ベース）", "アンビエントオクルージョン", "グローバルイルミネーション"],
    product_hologram_display: ["シェーダー", "レイトレーシング", "ボリュメトリック照明"]
  };

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getSelector(){
    return document.getElementById("qp-v22-style-selector");
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getSelectedBaseKey(root){
    const cb = (root || document).querySelector('input[type="checkbox"][data-qp-style-role="base"]:checked');
    return cb ? (cb.dataset.qpStyleBaseKey || "") : "";
  }

  function findAdvancedCheckboxByLabel(label){
    const root = document.getElementById("qp-v31-advanced");
    if(!root || !label) return null;
    return qsAll(root, "label.qp-v31-item").map(function(wrap){
      const title = wrap.querySelector(".qp-v31-title");
      const cb = wrap.querySelector('input[type="checkbox"]');
      return { title: title ? (title.textContent || "").trim() : "", cb: cb };
    }).filter(function(row){
      return row.cb && row.title === label;
    }).map(function(row){ return row.cb; })[0] || null;
  }

  function markAuto(cb, key){
    if(!cb || !key) return;
    cb.dataset.qpV33AutoFor = key;
    const item = cb.closest(".qp-v31-item");
    if(item){
      item.classList.add("qp-v33-tech-linked");
      setTimeout(function(){ item.classList.remove("qp-v33-tech-linked"); }, 1800);
    }
  }

  function clearAutoTech(keepKey){
    qsAll(document, 'input[type="checkbox"][data-qp-v33-auto-for]').forEach(function(cb){
      const from = cb.dataset.qpV33AutoFor || "";
      if(from && from !== keepKey){
        cb.checked = false;
        delete cb.dataset.qpV33AutoFor;
      }
    });
    // v32由来の旧auto印が残った環境でも掃除できる保険
    qsAll(document, 'input[type="checkbox"][data-qp-v32-auto-for]').forEach(function(cb){
      const from = cb.dataset.qpV32AutoFor || "";
      if(from && from !== keepKey){
        cb.checked = false;
        delete cb.dataset.qpV32AutoFor;
      }
    });
  }

  function notify(root, key, applied){
    if(isBusy()) return;
    try{
      document.dispatchEvent(new CustomEvent("builderQualityPresetRecipeApplied", {
        bubbles:true,
        detail:{ source:"v33-visual-tech-recipe", key:key || "", applied: applied || [] }
      }));
    }catch(e){}
    try{
      (root || document).dispatchEvent(new Event("change", { bubbles:true }));
    }catch(e){}
  }

  function applyTechRecipe(key){
    if(!key || isBusy()) return;
    const labels = TECH_RECIPES[key] || [];
    clearAutoTech(key);
    if(!labels.length) return;

    const root = getIntegratedRoot() || document;
    const applied = [];
    labels.forEach(function(label){
      const cb = findAdvancedCheckboxByLabel(label);
      if(!cb) return;
      const wasChecked = cb.checked;
      cb.checked = true;
      if(!wasChecked) markAuto(cb, key);
      applied.push(label);
    });
    if(applied.length) notify(root, key, applied);
  }

  function updateCardTextForTech(root){
    root = root || getSelector();
    if(!root) return;
    const key = getSelectedBaseKey(root);
    const labels = TECH_RECIPES[key] || [];
    const cards = qsAll(root, ".qp-v23-recipe-card.is-visible, .qp-v27-recipe-card.is-visible");
    cards.forEach(function(card){
      let note = card.querySelector(".qp-v33-tech-note, .qp-v32-tech-note");
      if(!labels.length){
        if(note) note.remove();
        return;
      }
      if(!note){
        note = document.createElement("div");
        note.className = "qp-v33-tech-note";
        const actions = card.querySelector(".qp-v23-recipe-actions, .qp-v27-actions");
        if(actions && actions.parentNode){
          actions.parentNode.insertBefore(note, actions);
        }else{
          card.appendChild(note);
        }
      }
      note.className = "qp-v33-tech-note";
      note.textContent = "Yesで、見た目に効くレンダリング・シェーダー補助だけを少量連動します。制作ソフト名は自動ONしません。";
    });
  }

  function ensureStyles(){
    if(document.getElementById("qp-v33-tech-recipe-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v33-tech-recipe-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v33-tech-note,
      #qp-v22-style-selector .qp-v32-tech-note {
        font-size:11px;
        line-height:1.5;
        margin:6px 0 8px;
        padding:6px 8px;
        border-radius:10px;
        background:rgba(15, 23, 42, .05);
        color:#334155;
      }
      #qp-v31-advanced .qp-v33-tech-linked,
      #qp-v31-advanced .qp-v32-tech-linked {
        outline:2px solid rgba(14,165,233,.35);
        outline-offset:2px;
      }
    `;
    document.head.appendChild(style);
  }

  function updateGuides(){
    const root = getIntegratedRoot();
    if(!root) return;
    root.dataset.qpIntegratedVersion = "33";
    const quick = root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①生成ベースを1つ選ぶ → ②おすすめカードでYes/No → ③CG/3D/商品化系は、Yes時に見た目へ効くレンダリング・シェーダー補助だけ少量連動。制作ソフト名や特定レンダラー名は必要時だけ手動で追加します。";
    }
    const adv = document.getElementById("qp-v31-advanced");
    const note = adv && adv.querySelector(".qp-v31-note");
    if(note){
      note.textContent = "旧クオリティ棚から復帰した上級者向け補助です。制作ソフト・レンダラー名は自動連動しません。必要な時だけ手動で追加してください。CG/3D/商品化系のおすすめYesでは、見た目に効く3D技術・シェーダー補助だけ少量連動します。";
    }
  }

  function bind(){
    const root = getSelector();
    if(!root || root.dataset.qpV33TechRecipeBound === "true") return;
    root.dataset.qpV33TechRecipeBound = "true";

    root.addEventListener("click", function(ev){
      const btn = ev.target && ev.target.closest ? ev.target.closest(".qp-v23-yes, .qp-v27-yes") : null;
      if(!btn || isBusy()) return;
      const card = btn.closest(".qp-v23-recipe-card, .qp-v27-recipe-card");
      const key = (card && card.dataset.styleKey) || getSelectedBaseKey(root);
      setTimeout(function(){ applyTechRecipe(key); }, 0);
    }, true);

    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || cb.dataset.qpStyleRole !== "base" || isBusy()) return;
      const key = cb.checked ? (cb.dataset.qpStyleBaseKey || "") : "";
      if(key) clearAutoTech(key);
      setTimeout(function(){ updateCardTextForTech(root); }, 0);
    }, true);

    setTimeout(function(){ updateCardTextForTech(root); }, 0);
  }

  const API = {
    initUI(container){
      ensureStyles();
      bind();
      updateGuides();
      setTimeout(function(){ bind(); updateGuides(); updateCardTextForTech(getSelector()); }, 0);
      setTimeout(function(){ bind(); updateGuides(); updateCardTextForTech(getSelector()); }, 300);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v34.js ---
// v34: 生成ベースのおすすめYes/Noカードを棚内固定ではなく、動物ポーズ誘導と同じ画面下部固定カードへ寄せる。
// ユーザーが生成ベース棚から離れても、連動提案に気づきやすくするためのUI整理。ロジック本体はv23/v25を維持。
(function(){
  "use strict";
  const VERSION = 34;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v34-floating-recipe-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v34-floating-recipe-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v23-recipe-card,
      #qp-v22-style-selector .qp-v25-product-card {
        position:fixed !important;
        left:10px !important;
        right:10px !important;
        bottom:calc(12px + env(safe-area-inset-bottom, 0px)) !important;
        z-index:2147483640 !important;
        box-sizing:border-box !important;
        max-width:760px !important;
        margin:0 auto !important;
        padding:10px !important;
        border-radius:14px !important;
        box-shadow:0 10px 28px rgba(15,23,42,.24) !important;
        max-height:34vh !important;
        overflow:auto !important;
      }

      #qp-v22-style-selector .qp-v23-recipe-card {
        border:2px solid #2563eb !important;
        background:#eff6ff !important;
      }

      #qp-v22-style-selector .qp-v25-product-card {
        border:2px solid #f97316 !important;
        background:#fff7ed !important;
      }

      #qp-v22-style-selector .qp-v23-recipe-card.is-visible,
      #qp-v22-style-selector .qp-v25-product-card.is-visible {
        display:block !important;
      }

      #qp-v22-style-selector .qp-v23-recipe-title,
      #qp-v22-style-selector .qp-v25-title {
        font-size:14px !important;
        line-height:1.35 !important;
        margin-bottom:5px !important;
      }

      #qp-v22-style-selector .qp-v23-recipe-text,
      #qp-v22-style-selector .qp-v25-text {
        font-size:13px !important;
        line-height:1.55 !important;
        margin-bottom:9px !important;
      }

      #qp-v22-style-selector .qp-v23-recipe-actions,
      #qp-v22-style-selector .qp-v25-actions {
        display:grid !important;
        grid-template-columns:1fr 1fr !important;
        gap:8px !important;
      }

      #qp-v22-style-selector .qp-v23-btn,
      #qp-v22-style-selector .qp-v25-btn {
        min-height:40px !important;
        font-size:14px !important;
        font-weight:800 !important;
        border-radius:999px !important;
      }

      @media (max-width: 480px) {
        #qp-v22-style-selector .qp-v23-recipe-card,
        #qp-v22-style-selector .qp-v25-product-card {
          left:8px !important;
          right:8px !important;
          bottom:calc(10px + env(safe-area-inset-bottom, 0px)) !important;
          max-height:38vh !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function updateGuide(){
    const root = document.getElementById("qp-v14-integrated");
    const quick = root && root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①生成ベースを1つ選ぶ → ②画面下部のおすすめカードでYes/No → ③足りない時だけ同系統の強化や共通補助を追加。カードは動物ポーズ誘導と同じ下部表示です。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      updateGuide();
      setTimeout(updateGuide, 0);
      setTimeout(updateGuide, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v35.js ---
// v35: おすすめYesで連動ONした項目がどこに入ったか分かるよう、連動した棚だけを自動で開いて一時ハイライトする。
// 生成ベース選択後の「見えない連動」を防ぐ。チェック状態は変更せず、表示補助のみ。
(function(){
  "use strict";
  const VERSION = 35;
  const KEY = "quality_preset";

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getSelectorRoot(){
    return document.getElementById("qp-v22-style-selector") || getIntegratedRoot();
  }

  function ensureStyles(){
    if(document.getElementById("qp-v35-open-linked-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v35-open-linked-style";
    style.textContent = `
      #qp-v14-integrated details.qp-v35-linked-shelf > summary,
      #qp-v22-style-selector details.qp-v35-linked-shelf > summary {
        background:#ecfdf5 !important;
        border-color:#86efac !important;
        color:#166534 !important;
        box-shadow:0 0 0 2px rgba(34,197,94,.18) inset !important;
      }
      #qp-v14-integrated .qp-v35-linked-item,
      #qp-v22-style-selector .qp-v35-linked-item {
        outline:2px solid rgba(34,197,94,.55) !important;
        outline-offset:2px !important;
        background:#f0fdf4 !important;
      }
      #qp-v14-integrated .qp-v35-linked-badge,
      #qp-v22-style-selector .qp-v35-linked-badge {
        display:inline-block;
        margin-left:8px;
        padding:2px 7px;
        border-radius:999px;
        background:#dcfce7;
        color:#166534;
        border:1px solid #86efac;
        font-size:11px;
        font-weight:800;
        vertical-align:middle;
      }
      #qp-v14-integrated .qp-v35-toast,
      #qp-v22-style-selector .qp-v35-toast {
        position:fixed;
        left:12px;
        right:12px;
        bottom:calc(12px + env(safe-area-inset-bottom, 0px));
        z-index:2147483641;
        box-sizing:border-box;
        max-width:760px;
        margin:0 auto;
        padding:10px 12px;
        border-radius:14px;
        border:2px solid #22c55e;
        background:#f0fdf4;
        color:#14532d;
        box-shadow:0 10px 28px rgba(15,23,42,.22);
        font-size:13px;
        line-height:1.55;
        font-weight:700;
      }
    `;
    document.head.appendChild(style);
  }

  function summaryText(details){
    const s = details && details.querySelector(":scope > summary");
    return s ? (s.textContent || "").trim() : "";
  }

  function addBadge(details){
    const s = details && details.querySelector(":scope > summary");
    if(!s) return;
    if(s.querySelector(".qp-v35-linked-badge")) return;
    const badge = document.createElement("span");
    badge.className = "qp-v35-linked-badge";
    badge.textContent = "連動ON";
    s.appendChild(badge);
  }

  function clearVisualMarks(root){
    qsAll(root, ".qp-v35-linked-item").forEach(function(el){
      el.classList.remove("qp-v35-linked-item");
    });
    qsAll(root, "details.qp-v35-linked-shelf").forEach(function(d){
      d.classList.remove("qp-v35-linked-shelf");
      const badge = d.querySelector(":scope > summary .qp-v35-linked-badge");
      if(badge) badge.remove();
    });
  }

  function collectLinkedInputs(root, key){
    if(!root) return [];
    let selector = 'input[type="checkbox"][data-qp-v23-auto-for]:checked';
    let all = qsAll(root, selector);
    if(key){
      all = all.filter(function(cb){ return (cb.dataset.qpV23AutoFor || "") === key; });
    }
    return all;
  }

  function directRelevantDetails(root, cb){
    const chain = [];
    let node = cb.closest("details");
    while(node && root && root.contains(node)){
      chain.push(node);
      node = node.parentElement ? node.parentElement.closest("details") : null;
    }
    // ルートの「品質・設定 統合版」自体は常に開いているので、見出しハイライト対象からは外す。
    return chain.filter(function(d){ return d && d.id !== "qp-v14-integrated"; });
  }

  function showToast(root, count){
    if(!root || !count) return;
    const old = root.querySelector(".qp-v35-toast");
    if(old) old.remove();

    const toast = document.createElement("div");
    toast.className = "qp-v35-toast";
    toast.textContent = "✅ おすすめ連動を適用しました。連動した棚だけ開き、項目を緑色で表示しています。";
    root.appendChild(toast);
    setTimeout(function(){ if(toast && toast.parentNode) toast.remove(); }, 2600);
  }

  function openLinkedShelves(key){
    if(isBusy()) return;
    const root = getIntegratedRoot() || getSelectorRoot();
    if(!root) return;

    ensureStyles();
    clearVisualMarks(root);

    const linked = collectLinkedInputs(root, key);
    if(!linked.length) return;

    const detailsSet = new Set();
    const leafDetails = new Set();

    linked.forEach(function(cb){
      const item = cb.closest(".qp-v22-item") || cb.closest("label") || cb.parentElement;
      if(item) item.classList.add("qp-v35-linked-item");

      const chain = directRelevantDetails(root, cb);
      chain.forEach(function(d){
        d.open = true;
        detailsSet.add(d);
      });
      if(chain[0]) leafDetails.add(chain[0]);
    });

    detailsSet.forEach(function(d){
      d.classList.add("qp-v35-linked-shelf");
    });
    leafDetails.forEach(function(d){
      addBadge(d);
    });

    showToast(root, linked.length);

    // 最初の連動項目へ軽く移動。Androidの固定フッターに隠れにくいよう center にする。
    const first = linked[0];
    const firstItem = first && (first.closest(".qp-v22-item") || first.closest("label"));
    setTimeout(function(){
      try{
        (firstItem || first).scrollIntoView({ behavior:"smooth", block:"center", inline:"nearest" });
      }catch(e){
        try{ (firstItem || first).scrollIntoView(); }catch(_){}
      }
    }, 120);

    // 視認用の一時ハイライトだけ消す。棚のopen状態は残す。
    setTimeout(function(){
      qsAll(root, ".qp-v35-linked-item").forEach(function(el){ el.classList.remove("qp-v35-linked-item"); });
      qsAll(root, "details.qp-v35-linked-shelf").forEach(function(d){
        d.classList.remove("qp-v35-linked-shelf");
        const badge = d.querySelector(":scope > summary .qp-v35-linked-badge");
        if(badge) badge.remove();
      });
    }, 7000);
  }

  function captureRecipeKeyFromButton(btn){
    if(!btn) return "";
    const card = btn.closest(".qp-v23-recipe-card, .qp-v25-product-card");
    return card ? (card.dataset.styleKey || "") : "";
  }

  function bindOpenAfterYes(){
    if(document.documentElement.dataset.qpV35OpenLinkedBound === "true") return;
    document.documentElement.dataset.qpV35OpenLinkedBound = "true";

document.addEventListener("click", function(ev){
      const btn = ev.target && ev.target.closest ? ev.target.closest(".qp-v23-yes, .qp-v25-yes") : null;
      if(!btn || isBusy()) return;
      const key = captureRecipeKeyFromButton(btn);

      // 既存のYes処理がチェックONした後に開く。
      setTimeout(function(){ openLinkedShelves(key); }, 80);
      setTimeout(function(){ openLinkedShelves(key); }, 260);
    }, true);

    // クリック以外の経路で連動が走った場合の保険。
    document.addEventListener("builderQualityPresetRecipeApplied", function(){
      if(isBusy()) return;
      setTimeout(function(){ openLinkedShelves(""); }, 120);
    });
    document.addEventListener("builderQualityPresetProductRecipeApplied", function(){
      if(isBusy()) return;
      setTimeout(function(){ openLinkedShelves(""); }, 120);
    });
  }

  function updateGuide(){
    const root = getIntegratedRoot();
    const quick = root && root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①生成ベースを1つ選ぶ → ②画面下部のおすすめカードでYes/No → ③Yesなら連動した棚だけ自動で開き、項目が一時的に緑色で表示されます。足りない時だけ同系統の補助を追加してください。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      bindOpenAfterYes();
      updateGuide();
      setTimeout(updateGuide, 0);
      setTimeout(updateGuide, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();


// --- builder_ui.section.quality_preset.v36.js ---
// v36: 生成ベースを系統別に折りたたみ整理し、おすすめカードを強度選択式へ拡張。
// 生成ベース自体は単一選択のまま。連動は「使わない / 標準 / レンダリング追加 / 品質効果最大」で選ばせ、適用内容はテロップで案内する。
(function(){
  "use strict";
  const VERSION = 36;
  const KEY = "quality_preset";

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getSelectorRoot(){
    return document.getElementById("qp-v22-style-selector");
  }

  function directSummary(details){
    const s = details && details.querySelector(":scope > summary");
    return s ? (s.textContent || "").trim() : "";
  }

  function itemLabel(item){
    const span = item && item.querySelector(".qp-v22-item-main span");
    return span ? (span.textContent || "").trim() : "";
  }

  function checkboxLabel(cb){
    const item = cb && (cb.closest(".qp-v22-item") || cb.closest(".qp-v31-item") || cb.closest("label"));
    if(!item) return "";
    const span = item.querySelector(".qp-v22-item-main span");
    if(span) return (span.textContent || "").trim();
    const title = item.querySelector(".qp-v31-title");
    if(title) return (title.textContent || "").trim();
    return (item.textContent || "").trim();
  }

  function ensureStyles(){
    if(document.getElementById("qp-v36-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v36-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v36-base-category {
        border:1px solid #dbeafe !important;
        border-radius:12px !important;
        background:#ffffff !important;
        overflow:hidden !important;
        margin:6px 0 !important;
      }
      #qp-v22-style-selector .qp-v36-base-category > summary {
        background:#eff6ff !important;
        color:#1e3a8a !important;
        font-weight:900 !important;
        padding:9px 10px !important;
      }
      #qp-v22-style-selector .qp-v36-base-category-box {
        display:grid !important;
        grid-template-columns:1fr !important;
        gap:8px !important;
        padding:8px !important;
      }
      #qp-v22-style-selector .qp-v36-base-category-note {
        grid-column:1/-1;
        font-size:12px;
        line-height:1.5;
        color:#475569;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:10px;
        padding:7px 9px;
      }
      #qp-v22-style-selector .qp-v36-strength-actions {
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:8px;
        margin-top:8px;
      }
      #qp-v22-style-selector .qp-v36-strength-btn {
        border:1px solid #bfdbfe;
        border-radius:999px;
        padding:8px 10px;
        background:#fff;
        color:#1d4ed8;
        font-size:13px;
        font-weight:850;
        cursor:pointer;
        min-height:38px;
      }
      #qp-v22-style-selector .qp-v36-strength-btn.qp-v36-render {
        background:#eef2ff;
        border-color:#a5b4fc;
        color:#3730a3;
      }
      #qp-v22-style-selector .qp-v36-strength-btn.qp-v36-max {
        background:#2563eb;
        border-color:#2563eb;
        color:#fff;
      }
      #qp-v22-style-selector .qp-v36-strength-btn.qp-v36-none {
        color:#475569;
        border-color:#cbd5e1;
      }
      #qp-v14-integrated .qp-v36-toast,
      #qp-v22-style-selector .qp-v36-toast {
        position:fixed;
        left:12px;
        right:12px;
        bottom:calc(12px + env(safe-area-inset-bottom, 0px));
        z-index:2147483642;
        box-sizing:border-box;
        max-width:760px;
        margin:0 auto;
        padding:10px 12px;
        border-radius:14px;
        border:2px solid #2563eb;
        background:#eff6ff;
        color:#1e3a8a;
        box-shadow:0 10px 28px rgba(15,23,42,.22);
        font-size:13px;
        line-height:1.55;
        font-weight:800;
      }
      @media (min-width:760px){
        #qp-v22-style-selector .qp-v36-base-category-box { grid-template-columns:1fr 1fr; }
      }
      @media (max-width:480px){
        #qp-v22-style-selector .qp-v36-strength-actions { grid-template-columns:1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function getBaseShelf(){
    const root = getSelectorRoot();
    if(!root) return null;
    const details = qsAll(root, "details").filter(function(d){
      const t = directSummary(d);
      return /生成ベース/.test(t) && /単一選択/.test(t);
    });
    return details[0] || null;
  }

  function categoryForItem(item){
    const cb = item && item.querySelector('input[type="checkbox"]');
    const key = cb ? ((cb.dataset.qpStyleBaseKey || cb.dataset.qpStyleKey || "") + "").toLowerCase() : "";
    const label = itemLabel(item);

    if(/^product_/.test(key) || /商品化|フィギュア|アクスタ|缶バッジ|パッケージ|商品撮影|ねんどろいど|スケールフィギュア|アクションフィギュア|プラモデル|ガレージキット|ラバーストラップ|キーホルダー|ブラインドボックス|ガチャ|ジオラマ|ホログラム/.test(label)){
      return "product";
    }
    if(/photo|フォトリアル|写真|映画スチル|ポートレート/.test(key + " " + label)){
      return "photo";
    }
    if(/cg|mmd|3d|cel_shaded|voxel|low_poly|vector|pop_art|ドット絵|ボクセル|ローポリゴン|ベクター|ポップアート|セルルック3D|MMD|ゲームPV/.test(key + " " + label)){
      return "cg";
    }
    if(/anime|アニメリアル|アニメ塗り|ギャルゲ|VN|厚塗りアニメ|水彩風アニメ|ソシャゲ/.test(key + " " + label)){
      return "anime";
    }
    if(/pastel|watercolor|sumi|colored|oil|acrylic|gouache|pencil|charcoal|marker|ink|パステル|水彩|水墨|色鉛筆|油彩|アクリル|ガッシュ|鉛筆|木炭|マーカー|インク漫画|画材/.test(key + " " + label)){
      return "art";
    }
    return "other";
  }

  const CATEGORY_DEFS = {
    anime: { title:"🎨 アニメリアル・アニメ塗り", note:"キャラ絵・幻想キャラ・ソシャゲ風など、アニメ寄りの土台です。" },
    cg: { title:"💎 CGアニメ・デジタル/3D", note:"セルルック3D、ゲームPV、MMD、ドット絵などのデジタル土台です。" },
    photo: { title:"📸 フォトリアル・写真/映画", note:"写真寄り、ポートレート、映画スチル寄りの土台です。" },
    art: { title:"🖌️ 画材表現", note:"水彩・色鉛筆・水墨・油彩など、画材そのものを土台にします。強CG補助は足しすぎ注意。" },
    product: { title:"🧸 商品化・立体/グッズ", note:"フィギュア、アクスタ、缶バッジ、商品撮影など、商品化を土台にします。" },
    other: { title:"🧩 その他の生成ベース", note:"分類外の生成ベースです。必要に応じて選んでください。" }
  };

  function makeCategory(key){
    const def = CATEGORY_DEFS[key] || CATEGORY_DEFS.other;
    const d = document.createElement("details");
    d.className = "qp-v36-base-category";
    d.dataset.qpV36Category = key;
    d.open = false;
    const s = document.createElement("summary");
    s.textContent = def.title;
    d.appendChild(s);
    const box = document.createElement("div");
    box.className = "qp-v36-base-category-box";
    const note = document.createElement("div");
    note.className = "qp-v36-base-category-note";
    note.textContent = def.note;
    box.appendChild(note);
    d.appendChild(box);
    return d;
  }

  function groupBaseShelf(){
    const shelf = getBaseShelf();
    if(!shelf || shelf.dataset.qpV36Grouped === "true") return;
    const box = shelf.querySelector(":scope > div");
    if(!box) return;
    shelf.dataset.qpV36Grouped = "true";
    const s = shelf.querySelector(":scope > summary");
    if(s) s.textContent = "🎨 生成ベース（単一選択・系統別）";
    shelf.open = false;

    const items = qsAll(box, ":scope > .qp-v22-item");
    if(!items.length) return;

    const note = box.querySelector(":scope > .qp-v22-mini-note");
    if(note){
      note.textContent = "ここは1つだけ選べます。まず系統を開いて土台を選び、その後に下部カードで補助の強さを選んでください。";
    }

    const cats = {};
    ["anime","cg","photo","art","product","other"].forEach(function(key){
      cats[key] = makeCategory(key);
    });

    items.forEach(function(item){
      const key = categoryForItem(item);
      const cat = cats[key] || cats.other;
      const inner = cat.querySelector(".qp-v36-base-category-box");
      inner.appendChild(item);
    });

    ["anime","cg","photo","art","product","other"].forEach(function(key){
      const cat = cats[key];
      if(cat.querySelectorAll(".qp-v22-item").length){
        box.appendChild(cat);
      }
    });
  }

  function findCheckboxByLabel(label, opts){
    opts = opts || {};
    const root = getIntegratedRoot() || document;
    const inputs = qsAll(root, 'input[type="checkbox"]').filter(function(cb){
      const text = checkboxLabel(cb);
      return text === label || text.indexOf(label) >= 0;
    });
    if(opts.styleKey){
      const styleHit = inputs.filter(function(cb){ return (cb.dataset.qpStyleKey || "") === opts.styleKey; })[0];
      if(styleHit) return styleHit;
    }
    return inputs[0] || null;
  }

  function setChecked(cb, key){
    if(!cb) return false;
    const was = cb.checked;
    cb.checked = true;
    if(key) cb.dataset.qpV23AutoFor = key;
    const item = cb.closest(".qp-v22-item") || cb.closest(".qp-v31-item") || cb.closest("label");
    if(item){
      item.classList.add("qp-v35-linked-item");
      setTimeout(function(){ item.classList.remove("qp-v35-linked-item"); }, 2200);
    }
    return !was;
  }

  const EXTRA_BY_FAMILY = {
    anime: {
      render: ["リムライト", "軽い奥行き", "ボリュメトリック照明"],
      max: ["光と迫力", "キャラ密度", "細部を少し足す", "色調を整える", "ボリュメトリック照明", "グローバルイルミネーション"]
    },
    cg: {
      render: ["シェーダー", "アンビエントオクルージョン", "グローバルイルミネーション"],
      max: ["シェーダー", "アンビエントオクルージョン", "グローバルイルミネーション", "レイトレーシング", "PBR（物理ベース）", "細部を少し足す"]
    },
    photo: {
      render: ["PBR（物理ベース）", "SSS（表面下散乱）", "グローバルイルミネーション"],
      max: ["PBR（物理ベース）", "SSS（表面下散乱）", "レイトレーシング", "グローバルイルミネーション", "人体・手の安定", "軽い奥行き"]
    },
    art: {
      render: [],
      max: ["細部を少し足す", "色調を整える"]
    },
    product: {
      render: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン"],
      max: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン", "グローバルイルミネーション", "細部を少し足す", "色調を整える"]
    },
    other: {
      render: ["細部を少し足す"],
      max: ["細部を少し足す", "色調を整える"]
    }
  };

  function familyForKey(key){
    const selector = getSelectorRoot();
    const cb = selector && selector.querySelector('input[type="checkbox"][data-qp-style-base-key="' + key + '"], input[type="checkbox"][data-qp-style-key="' + key + '"][data-qp-style-role="base"]');
    const item = cb && cb.closest(".qp-v22-item");
    return categoryForItem(item);
  }

  function applyExtraForTier(key, tier){
    if(tier !== "render" && tier !== "max") return 0;
    const family = familyForKey(key);
    const labels = (EXTRA_BY_FAMILY[family] && EXTRA_BY_FAMILY[family][tier]) || [];
    let count = 0;
    labels.forEach(function(label){
      const cb = findCheckboxByLabel(label, { styleKey:key });
      if(cb && setChecked(cb, key)) count += 1;
    });

    try{
      const target = (getIntegratedRoot() || document).querySelector('input[type="checkbox"]:checked') || document;
      target.dispatchEvent(new Event("change", { bubbles:true }));
    }catch(e){}
    try{
      document.dispatchEvent(new CustomEvent("builderQualityPresetRecipeApplied", { bubbles:true, detail:{ source:"v36", tier:tier, key:key } }));
    }catch(e){}
    return count;
  }

  function showStrengthToast(key, tier, extraCount){
    const root = getIntegratedRoot() || getSelectorRoot();
    if(!root) return;
    const old = root.querySelector(".qp-v36-toast");
    if(old) old.remove();
    const label = tier === "standard" ? "標準" : (tier === "render" ? "レンダリング追加" : (tier === "max" ? "品質効果最大" : "使わない"));
    const toast = document.createElement("div");
    toast.className = "qp-v36-toast";
    if(tier === "none"){
      toast.textContent = "✅ おすすめ連動は使わず、生成ベースだけ残しました。";
    }else{
      toast.textContent = "✅ " + label + "で連動しました。連動棚を開いて表示します。" + (extraCount ? " 追加補助：" + extraCount + "件。" : "");
    }
    root.appendChild(toast);
    setTimeout(function(){ if(toast && toast.parentNode) toast.remove(); }, 2600);
  }

  function upgradeCard(card){
    if(!card) return;
    const actions = card.querySelector(".qp-v23-recipe-actions, .qp-v25-actions");
    if(!actions) return;
    const yes = actions.querySelector(".qp-v23-yes, .qp-v25-yes");
    const no = actions.querySelector(".qp-v23-no, .qp-v25-no");
    if(!yes || !no) return;

    yes.style.display = "none";
    no.style.display = "none";

    let holder = actions.querySelector(".qp-v36-strength-actions");
    // v39 loop fix:
    // v36 used to remove and recreate the strength buttons every time a
    // MutationObserver fired. That DOM rewrite created another mutation and
    // could keep the builder in a "loading never settles" state on Android.
    // Once upgraded, keep the existing buttons and do not rewrite the card.
    if(holder && card.dataset.qpV36StrengthUpgraded === "true"){
      return;
    }
    if(holder) holder.remove();
    card.dataset.qpV36StrengthUpgraded = "true";

    holder = document.createElement("div");
    holder.className = "qp-v36-strength-actions";
    holder.innerHTML = ''
      + '<button type="button" class="qp-v36-strength-btn qp-v36-none" data-tier="none">使わない</button>'
      + '<button type="button" class="qp-v36-strength-btn" data-tier="standard">標準</button>'
      + '<button type="button" class="qp-v36-strength-btn qp-v36-render" data-tier="render">レンダリング追加</button>'
      + '<button type="button" class="qp-v36-strength-btn qp-v36-max" data-tier="max">品質効果最大</button>';

    holder.addEventListener("click", function(ev){
      const btn = ev.target && ev.target.closest ? ev.target.closest(".qp-v36-strength-btn") : null;
      if(!btn || isBusy()) return;
      const tier = btn.dataset.tier || "standard";
      const key = card.dataset.styleKey || "";

      if(tier === "none"){
        no.click();
        showStrengthToast(key, "none", 0);
        return;
      }

      yes.click();
      let delay = tier === "standard" ? 0 : 120;
      setTimeout(function(){
        const extra = applyExtraForTier(key, tier);
        showStrengthToast(key, tier, extra);
      }, delay);
    });

    actions.appendChild(holder);

    const text = card.querySelector(".qp-v23-recipe-text, .qp-v25-text");
    if(text && !/強さを選/.test(text.textContent || "")){
      text.textContent = (text.textContent || "").replace(/はい：おすすめをON|Yes\/No/g, "強さを選択");
      text.textContent += " 補助の強さを選んでください。";
    }
  }

  function upgradeVisibleCards(){
    qsAll(document, ".qp-v23-recipe-card, .qp-v25-product-card").forEach(upgradeCard);
  }

  function bindObserver(){
    if(document.documentElement.dataset.qpV36Bound === "true") return;
    document.documentElement.dataset.qpV36Bound = "true";

    let v36ChangeTimer = 0;
    document.addEventListener("change", function(){
      if(window.__SHIMA_BULK_RESET__) return;
      if(v36ChangeTimer) clearTimeout(v36ChangeTimer);
      v36ChangeTimer = setTimeout(function(){
        v36ChangeTimer = 0;
        groupBaseShelf();
        upgradeVisibleCards();
      }, 80);
    }, true);

    document.addEventListener("builderResetAll", function(){
      if(v36ChangeTimer) clearTimeout(v36ChangeTimer);
      v36ChangeTimer = setTimeout(function(){
        v36ChangeTimer = 0;
        groupBaseShelf();
        upgradeVisibleCards();
      }, 0);
    }, true);

    document.addEventListener("click", function(event){
      if(event.target && event.target.closest && event.target.closest("#resetBtn")) return;
      setTimeout(upgradeVisibleCards, 30);
      setTimeout(upgradeVisibleCards, 160);
    }, true);

    let v36ObserverTimer = 0;
    const obs = new MutationObserver(function(){
      if(v36ObserverTimer) clearTimeout(v36ObserverTimer);
      v36ObserverTimer = setTimeout(function(){
        v36ObserverTimer = 0;
        groupBaseShelf();
        upgradeVisibleCards();
      }, 160);
    });
    obs.observe(document.documentElement, { childList:true, subtree:true });
  }

  function updateGuide(){
    const root = getIntegratedRoot();
    const quick = root && root.querySelector("#qp-v20-quick-guide, .qp-v20-quick-guide");
    if(quick){
      quick.innerHTML = "<strong>使い方：</strong>①生成ベースを系統から1つ選ぶ → ②下部カードで「使わない / 標準 / レンダリング追加 / 品質効果最大」を選択 → ③連動した棚だけ開き、テロップで適用内容を知らせます。画材系は強CG補助を足しすぎない設計です。";
    }
  }

  const API = {
    initUI(container){
      ensureStyles();
      bindObserver();
      groupBaseShelf();
      upgradeVisibleCards();
      updateGuide();
      setTimeout(function(){ groupBaseShelf(); upgradeVisibleCards(); updateGuide(); }, 0);
      setTimeout(function(){ groupBaseShelf(); upgradeVisibleCards(); updateGuide(); }, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();

// --- builder_ui.section.quality_preset.v38.js ---
// v38: 強度選択後、下部固定のおすすめカードが残り続けないように即時クローズする。
// v36の連動・ハイライト・テロップは維持し、邪魔になる大きな選択カードだけを閉じる。
(function(){
  "use strict";
  const VERSION = 38;
  const KEY = "quality_preset";

  function ensureStyles(){
    if(document.getElementById("qp-v38-recipe-dismiss-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v38-recipe-dismiss-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v23-recipe-card.qp-v38-dismissed,
      #qp-v22-style-selector .qp-v25-product-card.qp-v38-dismissed {
        display:none !important;
      }
      #qp-v14-integrated .qp-v36-toast,
      #qp-v22-style-selector .qp-v36-toast {
        pointer-events:none !important;
      }
    `;
    document.head.appendChild(style);
  }

  function hideCard(card){
    if(!card) return;
    card.classList.remove("is-visible");
    card.classList.add("qp-v38-dismissed");
    card.dataset.styleKey = "";
    card.style.display = "none";
    setTimeout(function(){
      if(card) card.style.display = "";
    }, 800);
  }

  function hideAllRecipeCards(){
    Array.prototype.slice.call(document.querySelectorAll(".qp-v23-recipe-card.is-visible, .qp-v25-product-card.is-visible")).forEach(hideCard);
  }

  function clearDismissOnBaseChange(ev){
    const cb = ev && ev.target;
    if(!cb || cb.type !== "checkbox") return;
    if(cb.dataset.qpStyleRole !== "base") return;
    if(!cb.checked) return;
    const root = document.getElementById("qp-v22-style-selector") || document;
    Array.prototype.slice.call(root.querySelectorAll(".qp-v23-recipe-card.qp-v38-dismissed, .qp-v25-product-card.qp-v38-dismissed")).forEach(function(card){
      card.classList.remove("qp-v38-dismissed");
      card.style.display = "";
    });
  }

  function bind(){
    if(document.documentElement.dataset.qpV38Bound === "true") return;
    document.documentElement.dataset.qpV38Bound = "true";

    document.addEventListener("change", clearDismissOnBaseChange, true);

    document.addEventListener("click", function(ev){
      const btn = ev.target && ev.target.closest ? ev.target.closest(".qp-v36-strength-btn") : null;
      if(!btn) return;
      const card = btn.closest(".qp-v23-recipe-card, .qp-v25-product-card");
      // v36側の処理が先に連動を適用できるよう、少しだけ待ってから大きなカードを閉じる。
      setTimeout(function(){ hideCard(card); }, 80);
      setTimeout(function(){ hideCard(card); }, 260);
      setTimeout(function(){ hideAllRecipeCards(); }, 700);
    }, true);

    document.addEventListener("builderQualityPresetRecipeApplied", function(){
      setTimeout(hideAllRecipeCards, 120);
      setTimeout(hideAllRecipeCards, 500);
    }, true);
  }

  const API = {
    initUI(container){
      ensureStyles();
      bind();
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();




// --- builder_ui.section.quality_preset.v40.js ---
// v40: v27でStyle側から移植した生成ベースも、v36以降の強度選択・下部カード・連動テロップへ接続する。
// 制作ソフト名・エンジン名は自動ONせず、見た目に効く補助だけを必要量で連動する。
(function(){
  "use strict";
  const VERSION = 40;
  const KEY = "quality_preset";

  const V27_KEYS = {
    cel_anime_flat: true,
    visual_novel_soft: true,
    painterly_anime: true,
    watercolor_anime: true,
    gacha_sparkle: true,
    mmd_3d_dance: true,
    cel_shaded_3d: true,
    pixel_art: true,
    voxel_art: true,
    low_poly: true,
    vector_art: true,
    pop_art: true,
    product_nendoroid: true,
    product_scale_figure: true,
    product_action_figure: true,
    product_plastic_model: true,
    product_rubber_keychain: true,
    product_blind_box: true,
    product_diorama_display: true,
    product_hologram_display: true
  };

  // 「使うと良くなる」見た目補助だけ。Blender / Unreal / ZBrush など制作ソフト名は自動ONしない。
  const EXTRA_BY_KEY = {
    mmd_3d_dance: {
      render: ["シェーダー", "アンビエントオクルージョン", "ボリュメトリック照明"],
      max: ["シェーダー", "アンビエントオクルージョン", "グローバルイルミネーション", "ボリュメトリック照明", "細部を少し足す", "色調を整える"]
    },
    cel_shaded_3d: {
      render: ["シェーダー", "アンビエントオクルージョン"],
      max: ["シェーダー", "アンビエントオクルージョン", "グローバルイルミネーション", "細部を少し足す"]
    },
    voxel_art: {
      render: ["アンビエントオクルージョン", "軽い奥行き"],
      max: ["アンビエントオクルージョン", "グローバルイルミネーション", "軽い奥行き", "色調を整える"]
    },
    low_poly: {
      render: ["アンビエントオクルージョン", "軽い奥行き"],
      max: ["アンビエントオクルージョン", "グローバルイルミネーション", "細部を少し足す", "色調を整える"]
    },
    gacha_sparkle: {
      render: ["リムライト", "ボリュメトリック照明", "細部を少し足す"],
      max: ["リムライト", "ボリュメトリック照明", "グローバルイルミネーション", "細部を少し足す", "色調を整える"]
    },
    cel_anime_flat: {
      render: ["色調を整える"],
      max: ["細部を少し足す", "色調を整える"]
    },
    visual_novel_soft: {
      render: ["色調を整える", "顔・目の安定"],
      max: ["顔・目の安定", "色調を整える", "軽い奥行き"]
    },
    painterly_anime: {
      render: ["細部を少し足す", "色調を整える"],
      max: ["細部を少し足す", "色調を整える"]
    },
    watercolor_anime: {
      render: ["色調を整える"],
      max: ["顔・目の安定", "色調を整える"]
    },
    pixel_art: {
      render: [],
      max: ["色調を整える"]
    },
    vector_art: {
      render: [],
      max: ["色調を整える"]
    },
    pop_art: {
      render: ["色調を整える"],
      max: ["色調を整える"]
    },
    product_nendoroid: {
      render: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン"],
      max: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン", "グローバルイルミネーション", "細部を少し足す", "色調を整える"]
    },
    product_scale_figure: {
      render: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン"],
      max: ["PBR（物理ベース）", "SSS（表面下散乱）", "アンビエントオクルージョン", "グローバルイルミネーション", "細部を少し足す", "軽い奥行き"]
    },
    product_action_figure: {
      render: ["PBR（物理ベース）", "アンビエントオクルージョン"],
      max: ["PBR（物理ベース）", "アンビエントオクルージョン", "グローバルイルミネーション", "人体・手の安定", "細部を少し足す"]
    },
    product_plastic_model: {
      render: ["PBR（物理ベース）", "アンビエントオクルージョン"],
      max: ["PBR（物理ベース）", "アンビエントオクルージョン", "グローバルイルミネーション", "細部を少し足す"]
    },
    product_rubber_keychain: {
      render: ["色調を整える"],
      max: ["色調を整える", "細部を少し足す"]
    },
    product_blind_box: {
      render: ["アンビエントオクルージョン", "色調を整える"],
      max: ["PBR（物理ベース）", "アンビエントオクルージョン", "色調を整える", "細部を少し足す"]
    },
    product_diorama_display: {
      render: ["アンビエントオクルージョン", "軽い奥行き"],
      max: ["PBR（物理ベース）", "アンビエントオクルージョン", "グローバルイルミネーション", "軽い奥行き", "細部を少し足す"]
    },
    product_hologram_display: {
      render: ["ボリュメトリック照明", "色調を整える"],
      max: ["ボリュメトリック照明", "グローバルイルミネーション", "細部を少し足す", "色調を整える"]
    }
  };

  function isBusy(){
    return !!(window.__historyRestoring || window.__builderRestoring || window.__builderResetting || window.__qpRendering);
  }

  function qsAll(root, sel){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated") || document.getElementById("qp-v22-style-selector") || document;
  }

  function checkboxLabel(cb){
    const item = cb && (cb.closest(".qp-v22-item") || cb.closest(".qp-v31-item") || cb.closest("label"));
    if(!item) return "";
    const span = item.querySelector(".qp-v22-item-main span");
    if(span) return (span.textContent || "").trim();
    const title = item.querySelector(".qp-v31-title");
    if(title) return (title.textContent || "").trim();
    return (item.textContent || "").trim();
  }

  function findCheckboxByLabel(label, opts){
    opts = opts || {};
    const root = getIntegratedRoot();
    const inputs = qsAll(root, 'input[type="checkbox"]').filter(function(cb){
      const text = checkboxLabel(cb);
      return text === label || text.indexOf(label) >= 0;
    });
    if(opts.styleKey){
      const styleHit = inputs.filter(function(cb){ return (cb.dataset.qpStyleKey || "") === opts.styleKey; })[0];
      if(styleHit) return styleHit;
    }
    return inputs[0] || null;
  }

  function setChecked(cb, key){
    if(!cb) return false;
    const was = cb.checked;
    cb.checked = true;
    if(key){
      cb.dataset.qpV23AutoFor = key;
      cb.dataset.qpV27AutoFor = key;
    }
    const item = cb.closest(".qp-v22-item") || cb.closest(".qp-v31-item") || cb.closest("label");
    if(item){
      item.classList.add("qp-v35-linked-item");
      setTimeout(function(){ item.classList.remove("qp-v35-linked-item"); }, 2200);
    }
    return !was;
  }

  function applyExtra(key, tier){
    if(!key || (tier !== "render" && tier !== "max")) return 0;
    const conf = EXTRA_BY_KEY[key] || {};
    const labels = conf[tier] || [];
    let count = 0;
    labels.forEach(function(label){
      const cb = findCheckboxByLabel(label, { styleKey:key });
      if(cb && setChecked(cb, key)) count += 1;
    });
    try{
      const root = getIntegratedRoot();
      const target = root.querySelector('input[type="checkbox"]:checked') || root;
      target.dispatchEvent(new Event("change", { bubbles:true }));
    }catch(e){}
    return count;
  }

  function ensureStyles(){
    if(document.getElementById("qp-v40-v27-strength-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v40-v27-strength-style";
    style.textContent = `
      #qp-v22-style-selector .qp-v27-recipe-card.is-visible {
        position:fixed !important;
        left:12px !important;
        right:12px !important;
        bottom:calc(12px + env(safe-area-inset-bottom, 0px)) !important;
        z-index:2147483643 !important;
        box-sizing:border-box !important;
        max-width:760px !important;
        margin:0 auto !important;
        display:block !important;
        border-width:2px !important;
        box-shadow:0 10px 28px rgba(15,23,42,.24) !important;
      }
      #qp-v22-style-selector .qp-v27-recipe-card .qp-v40-strength-actions {
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:8px;
        margin-top:8px;
      }
      #qp-v22-style-selector .qp-v27-recipe-card .qp-v40-strength-btn {
        border:1px solid #bbf7d0;
        border-radius:999px;
        padding:8px 10px;
        background:#fff;
        color:#047857;
        font-size:13px;
        font-weight:850;
        cursor:pointer;
        min-height:38px;
      }
      #qp-v22-style-selector .qp-v27-recipe-card .qp-v40-strength-btn.qp-v40-render {
        background:#eef2ff;
        border-color:#a5b4fc;
        color:#3730a3;
      }
      #qp-v22-style-selector .qp-v27-recipe-card .qp-v40-strength-btn.qp-v40-max {
        background:#059669;
        border-color:#059669;
        color:#fff;
      }
      #qp-v22-style-selector .qp-v27-recipe-card.is-product .qp-v40-strength-btn {
        border-color:#fed7aa;
        color:#9a3412;
      }
      #qp-v22-style-selector .qp-v27-recipe-card.is-product .qp-v40-strength-btn.qp-v40-max {
        background:#f97316;
        border-color:#f97316;
        color:#fff;
      }
      #qp-v14-integrated .qp-v40-toast,
      #qp-v22-style-selector .qp-v40-toast {
        position:fixed;
        left:12px;
        right:12px;
        bottom:calc(12px + env(safe-area-inset-bottom, 0px));
        z-index:2147483642;
        box-sizing:border-box;
        max-width:760px;
        margin:0 auto;
        padding:10px 12px;
        border-radius:14px;
        border:2px solid #059669;
        background:#ecfdf5;
        color:#065f46;
        box-shadow:0 10px 28px rgba(15,23,42,.22);
        font-size:13px;
        line-height:1.55;
        font-weight:800;
        pointer-events:none;
      }
      @media (max-width:480px){
        #qp-v22-style-selector .qp-v27-recipe-card .qp-v40-strength-actions { grid-template-columns:1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function hideCard(card){
    if(!card) return;
    card.classList.remove("is-visible");
    card.dataset.styleKey = "";
    card.style.display = "none";
    setTimeout(function(){ if(card) card.style.display = ""; }, 700);
  }

  function showToast(key, tier, extraCount){
    const root = getIntegratedRoot();
    const old = root.querySelector(".qp-v40-toast");
    if(old) old.remove();
    const label = tier === "standard" ? "標準" : (tier === "render" ? "レンダリング追加" : (tier === "max" ? "品質効果最大" : "使わない"));
    const toast = document.createElement("div");
    toast.className = "qp-v40-toast";
    if(tier === "none"){
      toast.textContent = "✅ おすすめ連動は使わず、生成ベースだけ残しました。";
    }else{
      toast.textContent = "✅ " + label + "で連動しました。Style移植ベースの補助も連動対象にしました。" + (extraCount ? " 追加補助：" + extraCount + "件。" : "");
    }
    root.appendChild(toast);
    setTimeout(function(){ if(toast && toast.parentNode) toast.remove(); }, 2600);
  }

  function dispatchApplied(key, tier){
    try{
      document.dispatchEvent(new CustomEvent("builderQualityPresetRecipeApplied", {
        bubbles:true,
        detail:{ source:"v40", key:key || "", tier:tier || "" }
      }));
    }catch(e){}
  }

  function upgradeV27Card(card){
    if(!card || card.dataset.qpV40StrengthUpgraded === "true") return;
    const actions = card.querySelector(".qp-v27-actions");
    const yes = actions && actions.querySelector(".qp-v27-yes");
    const no = actions && actions.querySelector(".qp-v27-no");
    if(!actions || !yes || !no) return;

    card.dataset.qpV40StrengthUpgraded = "true";
    yes.style.display = "none";
    no.style.display = "none";

    const holder = document.createElement("div");
    holder.className = "qp-v40-strength-actions";
    holder.innerHTML = ''
      + '<button type="button" class="qp-v40-strength-btn qp-v40-none" data-tier="none">使わない</button>'
      + '<button type="button" class="qp-v40-strength-btn" data-tier="standard">標準</button>'
      + '<button type="button" class="qp-v40-strength-btn qp-v40-render" data-tier="render">レンダリング追加</button>'
      + '<button type="button" class="qp-v40-strength-btn qp-v40-max" data-tier="max">品質効果最大</button>';

    holder.addEventListener("click", function(ev){
      const btn = ev.target && ev.target.closest ? ev.target.closest(".qp-v40-strength-btn") : null;
      if(!btn || isBusy()) return;
      const tier = btn.dataset.tier || "standard";
      const key = card.dataset.styleKey || "";
      if(!V27_KEYS[key]){
        hideCard(card);
        return;
      }

      if(tier === "none"){
        no.click();
        showToast(key, "none", 0);
        hideCard(card);
        return;
      }

      // v27本来の標準レシピを先に適用。その後、強度に応じて必要な見た目補助だけ追加。
      yes.click();
      setTimeout(function(){
        const extra = applyExtra(key, tier);
        dispatchApplied(key, tier);
        showToast(key, tier, extra);
        hideCard(card);
      }, tier === "standard" ? 60 : 140);
    });

    actions.appendChild(holder);

    const text = card.querySelector(".qp-v27-recipe-text");
    if(text && !/強さを選/.test(text.textContent || "")){
      text.textContent = (text.textContent || "").replace(/はい：おすすめをON/g, "強さを選択");
      text.textContent += " 補助の強さを選んでください。制作ソフト名・エンジン名は自動ONしません。";
    }
  }

  function upgradeCards(){
    qsAll(document, ".qp-v27-recipe-card").forEach(upgradeV27Card);
  }

  function bind(){
    if(document.documentElement.dataset.qpV40Bound === "true") return;
    document.documentElement.dataset.qpV40Bound = "true";

    let v40ChangeTimerEarly = 0;
    let v40ChangeTimerLate = 0;
    function scheduleUpgradeCards(){
      if(v40ChangeTimerEarly) clearTimeout(v40ChangeTimerEarly);
      if(v40ChangeTimerLate) clearTimeout(v40ChangeTimerLate);
      v40ChangeTimerEarly = setTimeout(function(){
        v40ChangeTimerEarly = 0;
        upgradeCards();
      }, 60);
      v40ChangeTimerLate = setTimeout(function(){
        v40ChangeTimerLate = 0;
        upgradeCards();
      }, 180);
    }

    document.addEventListener("change", function(){
      if(window.__SHIMA_BULK_RESET__) return;
      scheduleUpgradeCards();
    }, true);
    document.addEventListener("builderResetAll", scheduleUpgradeCards, true);
    document.addEventListener("click", function(event){
      if(event.target && event.target.closest && event.target.closest("#resetBtn")) return;
      setTimeout(upgradeCards, 40);
      setTimeout(upgradeCards, 160);
    }, true);

    let timer = 0;
    const obs = new MutationObserver(function(){
      if(timer) clearTimeout(timer);
      timer = setTimeout(function(){
        timer = 0;
        upgradeCards();
      }, 180);
    });
    obs.observe(document.documentElement, { childList:true, subtree:true });
  }

  const API = {
    initUI(container){
      ensureStyles();
      bind();
      upgradeCards();
      setTimeout(upgradeCards, 0);
      setTimeout(upgradeCards, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v42.js ---
// v42: 旧Admin由来の便利ブースト群を「追加ブースト（任意・上級）」へ復元。
// v46: UI上の旧Admin件数バッジを削除し、通常の上級ブースト棚として表示する。
(function(){
  "use strict";
  const VERSION = 46;
  const KEY = "quality_preset";

  const BOOST_GROUPS = {
    camera: [
      { label: "ポートレートブースト", val: "(cinematic portrait crop), (portrait composition), (close-up upper body focus), (subject-centered framing), (focus on eyes), (85mm portrait lens look), (delicate facial lighting), (soft depth of field), (background compression), (camera-aware composition)", desc: "顔・上半身・視線誘導を強める加算用ブースト（文字数:255）" },
      { label: "シネマティックカメラブースト", val: "(dynamic camera angle), (cinematic framing), (camera tilt), (depth of field:1.1), (foreground framing), (shot composition emphasis), (lens compression), (visual storytelling shot), (dramatic perspective)", desc: "画角・構図・映画的ショット感を足す加算用ブースト（文字数:203）" },
      { label: "バストアップブースト", val: "(bust-up composition), (chest-up framing), (face and shoulders emphasis), (portrait crop), (expressive upper body shot), (upper torso focus), (close character presentation), (intimate framing)", desc: "バストアップ寄りの見せ方を強める加算用ブースト。表情と上半身を見せたい時向け（文字数:192）", links: ["Bust-up", "Upper Body", "Portrait", "Framing"], addOn: true, role: "boost" },
      { label: "全身構図ブースト", val: "(full body composition), (head-to-toe framing), (complete character silhouette), (full figure emphasis), (standing pose visibility), (costume visibility), (balanced full-body framing), (character proportion clarity)", desc: "全身をきれいに収める加算用ブースト。衣装やポーズを見せたい時向け（文字数:215）", links: ["Full Body", "Silhouette", "Costume", "Pose"], addOn: true, role: "boost" },
      { label: "ローアングルブースト", val: "(low angle shot), (upward camera view), (powerful perspective), (dramatic foreshortening), (heroic angle), (towering composition), (visual impact through angle), (strong upward emphasis)", desc: "ローアングルの迫力を足す加算用ブースト。強さや支配感を出したい時向け（文字数:186）", links: ["Low Angle", "Perspective", "Foreshortening", "Heroic"], addOn: true, role: "boost" },
      { label: "見上げ構図ブースト", val: "(looking-up composition), (viewer-from-below angle), (upward gaze framing), (soft towering perspective), (intimate upward viewpoint), (emotional emphasis through angle), (skyward composition), (lifted perspective)", desc: "見上げ構図を強める加算用ブースト。相手を大きく見せたい時向け（文字数:213）", links: ["Looking Up", "Upward View", "Gaze", "Perspective"], addOn: true, role: "boost" },
      { label: "映画的クローズアップブースト", val: "(cinematic close-up), (dramatic facial close-up), (tight portrait framing), (focused eye contact), (shallow depth of field), (soft background blur), (emotional close framing), (film-like close-up composition)", desc: "顔や視線へ強く寄せる加算用ブースト。感情・緊張感・親密感を出したい時向け（文字数:208）", links: ["Close-up", "Eye Contact", "Depth of Field", "Cinematic"], addOn: true, role: "boost" },
      { label: "横顔ポートレートブースト", val: "(side profile portrait), (profile face emphasis), (elegant side view), (silhouette-rich composition), (nose and jawline definition), (profile lighting), (serene sideways gaze), (refined portrait profile)", desc: "横顔の印象を強める加算用ブースト。横顔美人・静かな演出向け（文字数:203）", links: ["Side Profile", "Portrait", "Silhouette", "Profile Lighting"], addOn: true, role: "boost" },
      { label: "奥行き構図ブースト", val: "(depth-rich composition), (foreground-background layering), (spatial depth), (perspective emphasis), (layered scene composition), (atmospheric depth), (strong sense of distance), (immersive scene structure)", desc: "前後の奥行きを強める加算用ブースト。空間の広がりを見せたい時向け（文字数:206）", links: ["Depth", "Layering", "Perspective", "Atmosphere"], addOn: true, role: "boost" }
    ],
    mood: [
      { label: "燭光ローズムード", val: "(candlelight glow), (rose petal ambience), (warm crimson ambience), (romantic mood), (seductive atmosphere), (soft flickering light), (velvet-like shadows), (luxurious red accent light), (intimate air)", desc: "蝋燭・薔薇・赤い空気感を足す加算用ムードブースト（文字数:201）" },
      { label: "ミッドナイトムード", val: "(midnight atmosphere), (cool nocturnal air), (blue-violet ambience), (quiet dramatic mood), (night glow), (soft darkness), (afterglow haze), (mysterious elegance)", desc: "夜・静けさ・妖しい余韻を足す加算用ムードブースト（文字数:162）" },
      { label: "ゴシックヴェルヴェットムード", val: "(gothic ambience), (velvet shadows), (deep crimson mood), (ornate darkness), (luxurious gloom), (dramatic interior air), (dark romantic atmosphere), (elegant decadent aura), (rich shadow layering)", desc: "重厚な影・ベルベット感・退廃的な高級感を足す加算用ムードブースト（文字数:196）", links: ["Gothic", "Velvet", "Dark Romance"], addOn: true, role: "boost" },
      { label: "ドリーミーヘイズムード", val: "(dreamy atmosphere), (soft haze), (pastel air), (gentle floating light), (faint glow mist), (tender dreamy mood), (blurred luminous ambience), (airy fantasy atmosphere), (soft emotional afterglow)", desc: "柔らかな霞・夢見心地・淡い発光感を足す加算用ムードブースト（文字数:196）", links: ["Dreamy", "Haze", "Soft Glow"], addOn: true, role: "boost" },
      { label: "聖光セレストムード", val: "(sacred light ambience), (celestial glow), (holy atmosphere), (soft divine radiance), (serene luminous air), (pure ambient light), (graceful sacred mood), (ethereal calm), (heavenly glow particles)", desc: "神聖な光・静かな清浄感・天上的な空気を足す加算用ムードブースト（文字数:197）", links: ["Sacred", "Celestial", "Holy Light"], addOn: true, role: "boost" },
      { label: "雨夜メランコリームード", val: "(rainy night atmosphere), (melancholic mood), (wet city air), (soft reflected lights), (lonely ambience), (cool damp haze), (quiet emotional rain scene), (rain-soaked melancholy), (muted night glow)", desc: "雨夜の湿度・孤独感・静かな感傷を足す加算用ムードブースト（文字数:198）", links: ["Rainy Night", "Melancholy", "Wet Air"], addOn: true, role: "boost" },
      { label: "祝祭グロウムード", val: "(festive atmosphere), (warm celebratory glow), (joyful ambience), (sparkling decorative light), (lively air), (cheerful warm scene mood), (festive illumination), (glowing celebration), (bright emotional energy)", desc: "華やぎ・祝祭感・明るい熱量を足す加算用ムードブースト（文字数:210）", links: ["Festival", "Celebration", "Warm Glow"], addOn: true, role: "boost" },
      { label: "幻想エーテルムード", val: "(ethereal atmosphere), (mystic ambient glow), (fantasy air), (floating light particles), (soft surreal ambience), (otherworldly haze), (enchanted scene mood), (delicate magical glow), (airy mystical calm)", desc: "幻想感・魔法感・ふわりとした異世界空気を足す加算用ムードブースト（文字数:204）", links: ["Ethereal", "Fantasy", "Mystic"], addOn: true, role: "boost" },
      { label: "退廃デカダンスムード", val: "(decadent atmosphere), (faded luxury), (sensual shadow mood), (tired glamorous air), (opulent melancholy), (lingering perfume haze), (dark elegance), (withered beauty ambience), (late-night decadence)", desc: "退廃・色香・夜更けの濃密な高級感を足す加算用ムードブースト（文字数:200）", links: ["Decadent", "Luxury", "Dark Elegance"], addOn: true, role: "boost" },
      { label: "ネオンノワールムード", val: "(neon noir atmosphere), (electric city glow), (pink-blue ambient light), (urban night mood), (sleek noir air), (neon reflections), (cyber city ambience), (stylish nightlife mood), (rainy neon shimmer)", desc: "都会夜景・ネオン反射・ノワール感を足す加算用ムードブースト（文字数:200）", links: ["Neon Noir", "Urban Night", "Reflections"], addOn: true, role: "boost" },
      { label: "月光シルバームード", val: "(silver moonlight ambience), (cool lunar glow), (pale blue-white atmosphere), (quiet moonlit air), (soft silver rim light), (night breeze mood), (calm lunar haze), (serene nocturnal radiance)", desc: "月光・銀色の光・静かな夜気を足す加算用ムードブースト（文字数:191）", links: ["Moonlight", "Silver", "Nocturnal", "Cool Glow"], addOn: true, role: "boost" },
      { label: "黄昏アンバームード", val: "(twilight amber atmosphere), (golden dusk glow), (orange-violet sky mood), (warm fading sunlight), (nostalgic evening air), (soft amber haze), (sunset emotional glow), (gentle dusk ambience)", desc: "黄昏のアンバー光・夕暮れの余韻・懐かしい空気を足す加算用ムードブースト（文字数:190）", links: ["Twilight", "Amber", "Sunset", "Nostalgia"], addOn: true, role: "boost" },
      { label: "雪景シアームード", val: "(snowy sheer atmosphere), (soft white winter air), (falling snow mood), (pale cold glow), (quiet snowfield ambience), (crystal-clear winter light), (frosty haze), (delicate snow sparkle)", desc: "雪景色・白い冷気・繊細な冬の透明感を足す加算用ムードブースト（文字数:186）", links: ["Snow", "Winter", "Frost", "Sheer Light"], addOn: true, role: "boost" },
      { label: "王宮グランドムード", val: "(royal grand atmosphere), (palace-like ambience), (majestic interior mood), (ornate golden light), (ceremonial elegance), (noble spacious air), (grand hall radiance), (regal luxury presence)", desc: "王宮・大広間・儀式感のある豪華な空気を足す加算用ムードブースト（文字数:190）", links: ["Royal", "Palace", "Grand Hall", "Regal"], addOn: true, role: "boost" },
      { label: "深海アビスムード", val: "(deep sea ambience), (abyssal blue atmosphere), (submerged darkness), (bioluminescent glimmers), (quiet aquatic depth), (mysterious underwater haze), (cold pressure mood), (distant ocean glow)", desc: "深海の青暗さ・水圧感・微かな発光を足す加算用ムードブースト（文字数:192）", links: ["Deep Sea", "Abyss", "Bioluminescence", "Underwater"], addOn: true, role: "boost" },
      { label: "戦場テンションムード", val: "(battlefield tension), (charged atmosphere), (dusty dramatic air), (sparks in the air), (impending clash mood), (high-stakes ambience), (tense cinematic light), (warrior confrontation energy)", desc: "戦闘前後の緊張感・火花・張りつめた空気を足す加算用ムードブースト（文字数:191）", links: ["Battlefield", "Tension", "Sparks", "Confrontation"], addOn: true, role: "boost" }
    ],
    material: [
      { label: "ラグジュアリーマテリアルブースト", val: "(separate material response), (different reflectivity for skin and clothing), (luxury fabric sheen), (glossy coated fabric), (mirror-like costume highlights), (fine jewelry reflections), (material realism), (premium polished surface)", desc: "布・金属・宝飾の材質差を強める加算用ブースト（文字数:233）", links: ["Material", "Luxury", "Gloss"], addOn: true, role: "boost" },
      { label: "レンダー技術ブースト", val: "(physically based lighting), (ray-traced reflections), (shader-like material response), (subsurface scattering), (anisotropic highlights), (micro-surface detail), (realistic material response), (polished surface reflections), (clear specular highlights), (ambient occlusion), (volumetric lighting), (high dynamic range lighting), (global illumination), (material separation)", desc: "エンジン名なしでPBR・反射・シェーダ質感を足す加算用ブースト（文字数:374）", links: ["PBR", "Shader", "Reflection", "Material"], addOn: true, role: "boost" },
      { label: "金属反射ブースト", val: "(polished metal reflection), (brushed metal texture), (sharp metallic speculars), (cool metal luster), (hard surface reflections), (clean metal material separation), (reflective armor accents), (metal edge highlights)", desc: "金属の反射・硬質感・エッジハイライトを強める加算用ブースト（文字数:217）", links: ["Metal", "Reflection", "Hard Surface", "Armor"], addOn: true, role: "boost" },
      { label: "宝石装飾ブースト", val: "(gemstone sparkle), (faceted jewel highlights), (crystal-cut reflections), (ornate jewelry detail), (precious stone clarity), (gold and silver accents), (tiny specular glints), (luxury accessory definition)", desc: "宝石・金銀装飾・アクセサリーのきらめきを強める加算用ブースト（文字数:206）", links: ["Jewelry", "Gemstone", "Gold", "Accessory"], addOn: true, role: "boost" },
      { label: "シルク・サテン布ブースト", val: "(silk fabric sheen), (satin smooth highlights), (flowing fabric luster), (soft glossy folds), (delicate textile shine), (luxury dress material), (smooth cloth reflections), (elegant fabric drape)", desc: "シルクやサテンの滑らかな光沢と布の流れを足す加算用ブースト（文字数:195）", links: ["Silk", "Satin", "Fabric", "Dress"], addOn: true, role: "boost" },
      { label: "ベルベット布ブースト", val: "(velvet fabric texture), (deep matte fabric), (soft pile texture), (rich dark cloth), (subtle velvet sheen), (luxurious shadowed folds), (dense textile depth), (noble velvet material)", desc: "ベルベットの深い影・起毛感・高級布の重さを足す加算用ブースト（文字数:183）", links: ["Velvet", "Fabric", "Noble Cloth", "Texture"], addOn: true, role: "boost" },
      { label: "レザー艶ブースト", val: "(leather grain detail), (glossy leather highlights), (worn leather texture), (tight leather sheen), (soft creases in leather), (polished leather surface), (dark leather luster), (premium leather material)", desc: "革のシボ・艶・折れ目を強める加算用ブースト（文字数:204）", links: ["Leather", "Grain", "Gloss", "Texture"], addOn: true, role: "boost" },
      { label: "透明素材ブースト", val: "(transparent material), (translucent fabric layer), (clear acrylic shine), (glass-like surface), (refractive highlights), (see-through material depth), (soft transparency glow), (delicate edge reflections)", desc: "ガラス・透明布・アクリル風の透け感と屈折光を足す加算用ブースト（文字数:205）", links: ["Transparent", "Glass", "Acrylic", "Refraction"], addOn: true, role: "boost" },
      { label: "魔法結晶ブースト", val: "(magical crystal texture), (glowing crystal facets), (prismatic reflections), (enchanted gem glow), (crystal edge highlights), (inner luminous core), (fantasy mineral clarity), (arcane material sparkle)", desc: "魔法結晶・鉱石・ファンタジー宝石の発光と反射を足す加算用ブースト（文字数:202）", links: ["Crystal", "Magic", "Prism", "Fantasy"], addOn: true, role: "boost" },
      { label: "メカ金属ブースト", val: "(mecha metal panels), (mechanical surface detail), (hard-surface panel lines), (painted metal finish), (scratched metal edges), (industrial material response), (robot armor reflections), (precision mechanical texture)", desc: "ロボット・義手・メカ装甲向けの金属パネル感を足す加算用ブースト（文字数:217）", links: ["Mecha", "Metal Panels", "Robot Armor", "Hard Surface"], addOn: true, role: "boost" },
      { label: "パール光沢ブースト", val: "(pearl luster), (iridescent pearl sheen), (soft nacre highlights), (milky reflective surface), (subtle rainbow reflection), (elegant pearlescent glow), (smooth shell-like shine), (luxury pearl finish)", desc: "真珠のような乳白光沢・虹色の反射・上品な艶を足す加算用ブースト（文字数:200）", links: ["Pearl", "Iridescent", "Nacre", "Luster"], addOn: true, role: "boost" },
      { label: "刺繍・装飾布ブースト", val: "(embroidery detail), (ornate stitched fabric), (gold thread accents), (raised textile ornament), (decorative woven pattern), (fine lace trim), (intricate brocade texture), (luxury stitched embellishment)", desc: "刺繍・金糸・レース・織り柄の細かい装飾布を足す加算用ブースト（文字数:203）", links: ["Embroidery", "Gold Thread", "Brocade", "Lace"], addOn: true, role: "boost" },
      { label: "セラミック・磁器ブースト", val: "(ceramic surface), (porcelain gloss), (smooth glazed material), (clean white reflective finish), (delicate ceramic highlights), (hard polished porcelain), (subtle glaze reflection), (refined ceramic clarity)", desc: "陶器・磁器・釉薬のつるんとした硬い光沢を足す加算用ブースト（文字数:207）", links: ["Ceramic", "Porcelain", "Glaze", "Gloss"], addOn: true, role: "boost" },
      { label: "カーボン・工業素材ブースト", val: "(carbon fiber texture), (industrial composite material), (matte technical surface), (woven carbon pattern), (synthetic hard-surface finish), (precision material weave), (dark composite sheen), (high-tech material response)", desc: "カーボン・複合材・工業素材のハイテクな質感を足す加算用ブースト（文字数:222）", links: ["Carbon Fiber", "Industrial", "Composite", "High-Tech"], addOn: true, role: "boost" },
      { label: "ラバー・ラテックスブースト", val: "(rubber material sheen), (latex glossy surface), (smooth elastic texture), (tight specular highlights), (black rubber luster), (stretchy coated material), (slick synthetic shine), (controlled latex reflections)", desc: "ラバーやラテックスの滑らかな艶・伸縮素材感を足す加算用ブースト（文字数:210）", links: ["Rubber", "Latex", "Gloss", "Synthetic"], addOn: true, role: "boost" },
      { label: "古金属・風化ブースト", val: "(aged metal texture), (oxidized patina), (weathered metal edges), (scratched antique surface), (tarnished brass detail), (worn steel finish), (rust-kissed material accents), (old artifact metallic luster)", desc: "古金属・酸化・傷・風化したアンティーク感を足す加算用ブースト（文字数:204）", links: ["Aged Metal", "Patina", "Weathered", "Antique"], addOn: true, role: "boost" }
    ],
    liquid: [
      { label: "濡れ髪ブースト", val: "(wet hair strands), (damp hair clumps), (water droplets on hair), (glossy wet highlights), (soaked hair texture), (reflective hair sheen), (dripping hair tips), (moisture-rich hair detail)", desc: "髪束、水滴、濡れたハイライトを強める加算用ブースト。濡れ髪表現を明確化（文字数:188）", links: ["Wet Hair", "Water Droplets", "Glossy Highlights", "Moisture Detail"], addOn: true, role: "boost" },
      { label: "汗艶ブースト", val: "(dewy skin sheen), (subtle sweat droplets), (perspiration highlights), (humid skin gloss), (moist collarbone shine), (glossy skin highlights), (warm skin moisture), (post-exertion damp glow)", desc: "肌のしっとり感、汗粒、熱気を足す加算用ブースト。運動後・夏・戦闘後向け（文字数:190）", links: ["Dewy Skin", "Sweat Droplets", "Glossy Skin", "Humid Atmosphere"], addOn: true, role: "boost" },
      { label: "雨濡れブースト", val: "(rain-soaked clothing), (rain droplets on skin), (wet fabric cling), (rainy atmosphere), (reflective wet surfaces), (dripping moisture), (overcast rain light), (damp air glow)", desc: "雨粒、濡れた服、湿った空気感を足す加算用ブースト。雨シーンのまとまりを強める（文字数:175）", links: ["Rain-Soaked", "Wet Fabric", "Reflective Wet Surfaces", "Rain Atmosphere"], addOn: true, role: "boost" },
      { label: "水滴付着ブースト", val: "(beads of water on skin), (scattered droplets), (clear water beads on hair and clothing), (droplet highlights), (moisture accumulation), (fresh wet sparkle), (tiny reflective droplets), (droplet detail emphasis)", desc: "肌や髪や服に乗る水滴を細かく足す加算用ブースト。みずみずしさを見せたい時向け（文字数:211）", links: ["Water Beads", "Droplets", "Wet Sparkle", "Droplet Detail"], addOn: true, role: "boost" },
      { label: "滴り・雫ブースト", val: "(dripping liquid trails), (falling droplets), (runnels of water), (sliding droplets along skin and fabric), (liquid drip detail), (gravity-pulled moisture), (trailing wet streaks), (fluid motion accents)", desc: "滴る液体や雫の流れを足す加算用ブースト。動きのある濡れ表現を強める（文字数:203）", links: ["Dripping Liquid", "Falling Droplets", "Wet Streaks", "Fluid Motion"], addOn: true, role: "boost" },
      { label: "濡れ肌反射ブースト", val: "(wet skin reflections), (glossy damp skin), (controlled specular highlights on moist skin), (reflective skin sheen), (luminous moisture gloss), (slick highlight accents), (damp surface luster), (polished wet-skin look)", desc: "濡れた肌の反射と艶を足す加算用ブースト。光を拾うしっとり感を強める（文字数:218）", links: ["Wet Skin", "Specular Highlights", "Reflective Sheen", "Moisture Gloss"], addOn: true, role: "boost" },
      { label: "濡れ布密着ブースト", val: "(wet fabric cling), (soaked cloth contour), (water-darkened fabric), (damp textile transparency), (clinging folds), (moisture-weighted cloth), (wet costume adhesion), (soaked garment detail)", desc: "濡れた布の密着感や重みを足す加算用ブースト。服の貼りつき表現向け（文字数:190）", links: ["Wet Fabric Cling", "Soaked Cloth", "Clinging Folds", "Garment Detail"], addOn: true, role: "boost" },
      { label: "液体付着ブースト", val: "(liquid coating detail), (translucent liquid layer), (glossy fluid traces), (surface wetness), (sticky liquid shine), (reflective fluid film), (viscous highlight accents), (fluid-coated texture)", desc: "表面に付着した液体膜や粘りのある艶を足す加算用ブースト。液体感を強める（文字数:194）", links: ["Liquid Coating", "Fluid Traces", "Surface Wetness", "Reflective Film"], addOn: true, role: "boost" },
      { label: "水面反射ブースト", val: "(water surface reflections), (reflective ripples), (mirror-like wet surface), (shimmering water highlights), (surface caustic glints), (rippling light reflection), (wet ground reflection), (liquid mirror sheen)", desc: "水面や濡れた床の反射を強める加算用ブースト。水辺・雨上がり・夜景向け（文字数:210）", links: ["Water Reflection", "Ripples", "Wet Surface", "Caustics"], addOn: true, role: "boost" },
      { label: "飛沫スプラッシュブースト", val: "(splashing water), (water spray), (bursting droplets), (dynamic splash arcs), (scattered liquid particles), (impact splash detail), (crisp water motion), (sparkling splash highlights)", desc: "飛沫や跳ねる水の動きを足す加算用ブースト。水遊び・戦闘・雨演出向け（文字数:183）", links: ["Splash", "Water Spray", "Droplets", "Motion"], addOn: true, role: "boost" },
      { label: "泡・気泡ブースト", val: "(floating bubbles), (tiny air bubbles), (transparent bubble highlights), (foam detail), (soft bubble clusters), (underwater air bubbles), (sparkling bubble reflections), (delicate liquid foam)", desc: "泡や気泡の細かい反射を足す加算用ブースト。水中・泡・幻想演出向け（文字数:192）", links: ["Bubbles", "Foam", "Underwater", "Transparent Highlights"], addOn: true, role: "boost" },
      { label: "水中浮遊ブースト", val: "(underwater atmosphere), (floating hair underwater), (suspended fabric motion), (soft aquatic light), (water-filtered glow), (weightless floating pose), (submerged ambience), (gentle underwater drift)", desc: "水中の浮遊感と水越しの光を足す加算用ブースト。水中シーン向け（文字数:200）", links: ["Underwater", "Floating", "Aquatic Light", "Submerged"], addOn: true, role: "boost" },
      { label: "朝露・結露ブースト", val: "(morning dew droplets), (condensation beads), (dew on skin and fabric), (cool moist air), (tiny fresh droplets), (soft morning wetness), (delicate condensation highlights), (fresh dew sparkle)", desc: "朝露や結露の小さな水滴を足す加算用ブースト。涼しげな湿度表現向け（文字数:192）", links: ["Dew", "Condensation", "Fresh Droplets", "Morning Wetness"], addOn: true, role: "boost" },
      { label: "オイルグロスブースト", val: "(oil-like glossy sheen), (smooth reflective coating), (slick surface highlights), (iridescent oil glints), (high-gloss liquid film), (soft oily reflections), (polished wet luster), (rainbow sheen accents)", desc: "油膜のような艶と強い反射を足す加算用ブースト。高光沢の液体表現向け（文字数:204）", links: ["Oil Gloss", "Reflective Coating", "Iridescence", "Wet Luster"], addOn: true, role: "boost" },
      { label: "透明液体ブースト", val: "(clear transparent liquid), (crystal-clear fluid highlights), (transparent water layer), (clean liquid refraction), (glasslike fluid shine), (pure liquid sparkle), (subtle refraction detail), (clear wet coating)", desc: "透明な水膜や屈折感を足す加算用ブースト。清潔感のある液体表現向け（文字数:211）", links: ["Clear Liquid", "Refraction", "Transparent Water", "Fluid Shine"], addOn: true, role: "boost" },
      { label: "湿度ミストブースト", val: "(humid mist), (moist air haze), (soft vapor around skin), (warm damp atmosphere), (misty wet glow), (condensed air softness), (steamy ambient haze), (subtle humidity shimmer)", desc: "湿った空気と薄いミストを足す加算用ブースト。雨上がり・湯気・湿度演出向け（文字数:174）", links: ["Humidity", "Mist", "Vapor", "Wet Glow"], addOn: true, role: "boost" }
    ],
    skinLighting: [
      { label: "透明肌ブースト", val: "(translucent skin glow), (natural skin translucency), (clear skin luminosity), (soft subsurface light), (delicate skin highlights), (smooth skin gradation), (airy skin clarity), (fresh luminous complexion)", desc: "肌の透け感、柔らかな光、なめらかな発光感を足す加算用ブースト（文字数:205）", links: ["Translucent Skin", "Skin Glow", "Subsurface Light", "Luminous Complexion"], addOn: true, role: "boost" },
      { label: "血色感ブースト", val: "(healthy skin bloom), (natural blush tone), (soft lip color), (subtle ear blush), (warm fingertip tint), (lively complexion), (gentle rosy cheeks), (soft blood-flow warmth)", desc: "頬、唇、耳、指先の自然な赤みを足す加算用ブースト。血色感を整える（文字数:172）", links: ["Healthy Bloom", "Blush Tone", "Rosy Cheeks", "Warm Complexion"], addOn: true, role: "boost" },
      { label: "夜光肌ブースト", val: "(moonlit skin glow), (cool luminous skin), (night skin highlights), (blue-tinted rim light on skin), (soft nocturnal translucency), (low-light skin clarity), (serene moonlight complexion), (gentle night glow)", desc: "月光や暗所で映える青白い肌光を足す加算用ブースト。夜シーン向け（文字数:208）", links: ["Moonlit Skin", "Night Highlights", "Blue Rim Light", "Night Glow"], addOn: true, role: "boost" },
      { label: "柔肌ソフトライトブースト", val: "(soft diffuse skin light), (creamy skin shading), (gentle cheek highlights), (soft facial light wrap), (smooth highlight rolloff), (delicate shadow transition on skin), (feathered skin lighting), (tender luminous softness)", desc: "肌に回る柔光とやさしい階調を足す加算用ブースト。人物をふんわり見せる（文字数:222）", links: ["Soft Diffuse Light", "Skin Shading", "Light Wrap", "Softness"], addOn: true, role: "boost" },
      { label: "透過光SSSブースト", val: "(subsurface scattering), (backlit skin translucency), (light bleeding through skin), (ear translucency glow), (fingertip translucency), (warm backlit skin), (internal skin light diffusion), (soft transmitted light)", desc: "透過光とSSSを強める加算用ブースト。耳や指先の抜け感・生命感を足す（文字数:214）", links: ["SSS", "Backlit Skin", "Translucency", "Light Diffusion"], addOn: true, role: "boost" },
      { label: "微細肌テクスチャブースト", val: "(fine skin texture detail), (delicate micro skin detail), (skin pore suggestion), (cheek microtexture), (forehead skin detail), (refined facial surface detail), (realistic skin texture nuance), (subtle texture separation)", desc: "肌の微細情報を足す加算用ブースト。のっぺり感を減らし質感を整える（文字数:221）", links: ["Skin Texture", "Micro Detail", "Surface Detail", "Texture Separation"], addOn: true, role: "boost" },
      { label: "なめらか陶肌ブースト", val: "(smooth porcelain-like skin finish), (clean complexion), (silky skin smoothness), (polished soft skin surface), (elegant skin clarity), (refined smooth shading), (soft porcelain glow), (beautiful clean skin finish)", desc: "すべすべで整った陶器肌寄りの仕上がりを足す加算用ブースト（文字数:214）", links: ["Porcelain Skin", "Clean Complexion", "Smooth Finish", "Skin Clarity"], addOn: true, role: "boost" },
      { label: "艶ハイライト肌ブースト", val: "(dewy skin sheen), (luminous skin highlights), (glossy skin finish), (controlled specular glow on skin), (moist skin luster), (collarbone highlights), (shoulder highlights), (subtle reflective skin accents)", desc: "肌の艶ハイライトを足す加算用ブースト。しっとり・映え系の見た目を強める（文字数:206）", links: ["Dewy Skin", "Glossy Skin", "Specular Glow", "Skin Luster"], addOn: true, role: "boost" },
      { label: "立体陰影肌ブースト", val: "(dimensional facial shading), (sculpted cheek shading), (contour-enhancing skin light), (nose bridge highlight), (jawline shadow control), (under-eye light shaping), (subtle skin depth), (three-dimensional skin rendering)", desc: "顔や肌の立体陰影を足す加算用ブースト。のっぺり回避と彫り感向け（文字数:221）", links: ["Dimensional Shading", "Contour Light", "Depth", "3D Skin"], addOn: true, role: "boost" },
      { label: "逆光肌ブースト", val: "(backlit skin glow), (rim-lit skin edges), (warm light wrapping around skin), (translucent backlight on face), (glowing shoulder edge), (soft halo around skin), (skin edge illumination), (gentle backlight bloom)", desc: "逆光で肌の輪郭をきれいに見せる加算用ブースト。光に包まれる演出向け（文字数:211）", links: ["Backlight", "Rim Light", "Skin Glow", "Halo"], addOn: true, role: "boost" },
      { label: "ゴールデンアワー肌ブースト", val: "(golden hour skin glow), (warm sunset skin highlights), (amber light on skin), (soft orange facial glow), (sunset blush warmth), (warm rim light on shoulders), (golden skin luminosity), (late afternoon light softness)", desc: "夕日や暖色光で肌を柔らかく見せる加算用ブースト。夕景・恋愛演出向け（文字数:217）", links: ["Golden Hour", "Sunset", "Warm Skin", "Amber Light"], addOn: true, role: "boost" },
      { label: "クールリム肌ブースト", val: "(cool rim light on skin), (blue-white skin edge glow), (crisp cool highlights), (icy facial rim light), (cool shadow transition), (night blue skin accent), (clean cold light on shoulders), (cool luminous outline)", desc: "青白いリムライトで肌を締める加算用ブースト。夜・クール系・黒衣装向け（文字数:212）", links: ["Cool Rim", "Blue Light", "Night Skin", "Outline"], addOn: true, role: "boost" },
      { label: "頬唇ハイライトブースト", val: "(soft cheek highlights), (glossy lip highlight), (delicate blush glow), (moist lower lip shine), (gentle nose tip highlight), (subtle eyelid sheen), (warm cheek luminosity), (fresh facial highlight accents)", desc: "頬・唇・鼻先など顔の小さな光を足す加算用ブースト。表情の鮮度向け（文字数:206）", links: ["Cheek Highlights", "Lip Shine", "Blush Glow", "Facial Accents"], addOn: true, role: "boost" },
      { label: "暗所肌明瞭ブースト", val: "(low-light skin clarity), (visible facial planes in darkness), (soft shadow-readable skin), (dim ambient skin glow), (controlled dark skin tones), (night portrait visibility), (subtle facial catchlight), (clear skin silhouette in low light)", desc: "暗所でも肌と顔を見えやすくする加算用ブースト。夜景・暗室・影演出向け（文字数:240）", links: ["Low Light", "Skin Clarity", "Night Portrait", "Catchlight"], addOn: true, role: "boost" },
      { label: "柔影フェイスブースト", val: "(soft facial shadows), (gentle cheek shadow), (smooth under-chin shadow), (soft nose shadow), (feathered face shading), (natural shadow falloff), (delicate skin shadow gradient), (balanced facial contrast)", desc: "顔の影を柔らかく整える加算用ブースト。きつい影を避けたい人物絵向け（文字数:205）", links: ["Soft Shadow", "Face Shading", "Shadow Gradient", "Contrast"], addOn: true, role: "boost" },
      { label: "肌グラデーションブースト", val: "(smooth skin color gradation), (subtle warm-to-cool skin transition), (delicate tonal shift on skin), (refined skin gradient), (soft complexion blending), (natural hue variation), (silky tonal rolloff), (beautiful skin color depth)", desc: "肌色のなめらかな階調と色の深みを足す加算用ブースト。塗りの質感向け（文字数:231）", links: ["Skin Gradation", "Tonal Shift", "Color Depth", "Complexion"], addOn: true, role: "boost" },
      { label: "目元ハイライト肌ブースト", val: "(under-eye soft highlights), (eyelid skin sheen), (catchlight reflected on skin), (delicate tear duct highlight), (soft orbital light), (gentle eye-area glow), (clean under-eye shading), (luminous eye surrounding skin)", desc: "目元周辺の肌光を足す加算用ブースト。視線・泣き顔・潤み表現向け（文字数:218）", links: ["Eye Area", "Under-eye", "Eyelid Sheen", "Catchlight"], addOn: true, role: "boost" }
    ]
  };

  const GROUP_TITLES = [
    ["📷 カメラ・構図ブースト", "camera"],
    ["🌹 ムード・空気感ブースト", "mood"],
    ["💎 マテリアル・質感ブースト", "material"],
    ["💧 濡れ・液体・水滴ブースト", "liquid"],
    ["🫧 肌・人物ライティングブースト", "skinLighting"]
  ];

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getIntegratedContent(root){
    if(!root) return null;
    return root.querySelector(":scope > .qp-section-content") || root.querySelector(":scope > div") || root;
  }

  function removeOldBoosts(){
    ["qp-v41-extra-boosts", "qp-v42-extra-boosts"].forEach(function(id){
      const old = document.getElementById(id);
      if(old && old.parentNode) old.parentNode.removeChild(old);
    });
  }

  function makeSub(title, items){
    if(window.__QP_UTILS && typeof window.__QP_UTILS.createSubAccordion === "function"){
      const acc = window.__QP_UTILS.createSubAccordion(title, items || []);
      acc.classList.add("qp-v42-boost-sub");
      return acc;
    }
    return null;
  }

  function countItems(){
    return Object.keys(BOOST_GROUPS).reduce(function(sum, key){
      return sum + (Array.isArray(BOOST_GROUPS[key]) ? BOOST_GROUPS[key].length : 0);
    }, 0);
  }

  function ensureStyles(){
    if(document.getElementById("qp-v42-boost-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v42-boost-style";
    style.textContent = `
      #qp-v42-extra-boosts{
        border:1px solid #a78bfa !important;
        border-radius:14px !important;
        background:#faf5ff !important;
        margin:10px 0 !important;
        overflow:hidden !important;
      }
      #qp-v42-extra-boosts > summary{
        background:#ede9fe !important;
        color:#4c1d95 !important;
        font-weight:900 !important;
        padding:11px 12px !important;
      }
      #qp-v42-extra-boosts .qp-v42-guide{
        margin:8px;
        padding:9px 10px;
        border:1px solid #ddd6fe;
        border-radius:12px;
        background:#fff;
        color:#4c1d95;
        font-size:12px;
        line-height:1.65;
      }
      #qp-v42-extra-boosts .qp-v42-normal-note{
        margin:8px;
        padding:8px 10px;
        border:1px solid #bae6fd;
        border-radius:12px;
        background:#f0f9ff;
        color:#075985;
        font-size:12px;
        line-height:1.6;
      }
      #qp-v42-extra-boosts .qp-v42-count{
        display:inline-block;
        margin-left:6px;
        padding:2px 7px;
        border-radius:999px;
        background:#ddd6fe;
        color:#4c1d95;
        font-size:11px;
        font-weight:800;
        vertical-align:middle;
      }
      #qp-v42-extra-boosts .qp-v42-boost-sub > summary{
        color:#4c1d95 !important;
      }
      #qp-v42-extra-boosts .qp-content-grid label{
        border-radius:12px !important;
      }
    `;
    document.head.appendChild(style);
  }

  function buildBoosts(){
    const wrap = document.createElement("details");
    wrap.id = "qp-v42-extra-boosts";
    wrap.open = false;

    const summary = document.createElement("summary");
    summary.textContent = "🚀 追加ブースト（任意・上級）";
    // v46: 旧Admin由来の件数バッジはUI上では表示しない。
    wrap.appendChild(summary);

    const guide = document.createElement("div");
    guide.className = "qp-v42-guide";
    guide.textContent = "生成ベースとおすすめ連動のあと、足りない部分だけ足す上級補助です。カメラ、ムード、素材、濡れ表現、肌ライティングなど、目的がはっきりしている時だけ必要な棚を開いて使ってください。";
    wrap.appendChild(guide);

    const note = document.createElement("div");
    note.className = "qp-v42-normal-note";
    note.textContent = "濡れ・液体ブーストも通常UIに復元しています。雨、スポーツ、水辺、水滴、反射、湿度など通常用途でも使えるためです。強く入れすぎると主題や作風を押すので、必要な表現だけ追加してください。";
    wrap.appendChild(note);

    GROUP_TITLES.forEach(function(pair){
      const title = pair[0];
      const key = pair[1];
      const acc = makeSub(title, BOOST_GROUPS[key]);
      if(acc) wrap.appendChild(acc);
    });

    return wrap;
  }

  function insertBoosts(){
    const root = getIntegratedRoot();
    const content = getIntegratedContent(root);
    if(!root || !content) return;
    if(document.getElementById("qp-v42-extra-boosts")) return;

    removeOldBoosts();
    const node = buildBoosts();

    const advanced = document.getElementById("qp-v31-advanced");
    if(advanced && advanced.parentNode === content){
      content.insertBefore(node, advanced.nextSibling);
      return;
    }

    const finishSummary = Array.prototype.find.call(content.querySelectorAll("summary"), function(s){
      return /仕上げ|Finish/.test(s.textContent || "");
    });
    const finish = finishSummary ? finishSummary.closest("details") : null;
    if(finish && finish.parentNode === content){
      content.insertBefore(node, finish.nextSibling);
      return;
    }

    content.appendChild(node);
  }

  const API = {
    initUI(container){
      ensureStyles();
      insertBoosts();
      setTimeout(insertBoosts, 0);
      setTimeout(insertBoosts, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();



// --- builder_ui.section.quality_preset.v44.js ---
// v44: 新品質棚再編後も、⚙️ 3D技術・シェーダー summary 10回タップで開発者/管理者モードを切り替えられるよう復元。
// 旧v4は #qp-quality-content 初期描画時のsummaryだけを走査していたため、v31で後挿入された高度設定棚では拾えなかった。
(function(){
  "use strict";
  const VERSION = 44;
  const KEY = "quality_preset";
  const STORAGE_KEY = "BUILDER_DEV_MODE";
  const TAP_LIMIT = 10;
  const WINDOW_MS = 3000;

  if (window.__QP_V44_DEV_TAP_INSTALLED) return;
  window.__QP_V44_DEV_TAP_INSTALLED = true;

  let tapCount = 0;
  let lastTapAt = 0;
  let confirmOpen = false;

  function isTargetSummary(summary){
    if (!summary) return false;
    const text = (summary.textContent || "").replace(/\s+/g, "");
    if (!/3D技術・シェーダー|3D技術|シェーダー/.test(text)) return false;

    // 新統合棚側の高度設定を主対象にする。旧棚が残っている環境でも保険で許可。
    if (summary.closest && summary.closest("#qp-v31-advanced")) return true;
    if (summary.closest && summary.closest("#qp-quality-content")) return true;
    return false;
  }

  function toggleDevMode(){
    const current = localStorage.getItem(STORAGE_KEY) === "true";
    const next = !current;
    const label = next ? "ON" : "OFF";

    if (confirmOpen) return;
    confirmOpen = true;
    try {
      if (window.confirm("🧩 開発者モードを " + label + " にしますか？")) {
        localStorage.setItem(STORAGE_KEY, String(next));
        window.alert("🧩 開発者モードが " + label + " に切り替わりました。\n再読み込みします。");
        location.reload();
      }
    } finally {
      confirmOpen = false;
      tapCount = 0;
      lastTapAt = 0;
    }
  }

  document.addEventListener("click", function(ev){
    const target = ev.target;
    const summary = target && target.closest ? target.closest("summary") : null;
    if (!isTargetSummary(summary)) return;

    const now = Date.now();
    if (now - lastTapAt > WINDOW_MS) tapCount = 0;
    lastTapAt = now;
    tapCount += 1;

    if (tapCount >= TAP_LIMIT) {
      toggleDevMode();
    }
  }, true);
})();



// --- builder_ui.section.quality_preset.v48.js ---
// v48: おまかせ品質セットを2グループ・8系統×3段階へ拡張し、2段階フィルターを追加。
// 起動時は棚を閉じ、選択・分解・履歴・リセットの排他挙動はv47互換のまま維持する。
(function(){
  "use strict";
  const VERSION = 48;
  const KEY = "quality_preset";
  const PRESETS = Array.isArray(window.__SHIMA_QUALITY_QUICK_PRESETS_V1__)
    ? window.__SHIMA_QUALITY_QUICK_PRESETS_V1__
    : [];
  const FAMILIES = Array.isArray(window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__)
    ? window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__
    : [];
  const GROUPS = Array.isArray(window.__SHIMA_QUALITY_QUICK_PRESET_GROUPS_V1__)
    ? window.__SHIMA_QUALITY_QUICK_PRESET_GROUPS_V1__
    : [{ key:"polished", label:"高品質系", shortLabel:"高品質", icon:"✨" }];
  const DEFAULT_GROUP = GROUPS.length ? GROUPS[0].key : "polished";
  const DEFAULT_FAMILY = FAMILIES.length ? FAMILIES[0].key : "anime_real";
  let applying = false;

  function qsAll(root, selector){
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function getIntegratedRoot(){
    return document.getElementById("qp-v14-integrated");
  }

  function getIntegratedContent(root){
    if(!root) return null;
    return root.querySelector(":scope > .qp-section-content") || root.querySelector(":scope > div") || root;
  }

  function safeKey(value){
    return String(value || "preset").replace(/[^a-z0-9_-]+/gi, "-");
  }

  function promptValue(preset){
    return (preset.tags || []).join(", ");
  }

  function dispatchChange(input){
    if(!input) return;
    try { input.dispatchEvent(new Event("change", { bubbles:true })); } catch(e) {}
  }

  function setChecked(input, checked){
    if(!input || !!input.checked === !!checked) return false;
    input.checked = !!checked;
    dispatchChange(input);
    return true;
  }

  function generateOnce(){
    if(window.__SHIMA_BULK_RESET__) return;
    try {
      if(typeof window.__builderGenerateOutput === "function") window.__builderGenerateOutput();
    } catch(e) {}
  }

  function announce(shelf, message){
    const live = shelf && shelf.querySelector(".qp-v47-live");
    if(live) live.textContent = message || "";
  }

  function emitChanged(detail){
    try {
      document.dispatchEvent(new CustomEvent("builderQualityQuickPresetChanged", {
        bubbles:true,
        detail:detail || {}
      }));
    } catch(e) {}
  }

  function packInputs(shelf){
    return qsAll(shelf, 'input[data-qp-v47-kind="pack"]');
  }

  function componentInputs(shelf, key){
    let list = qsAll(shelf, 'input[data-qp-v47-kind="component"]');
    if(key) list = list.filter(function(input){ return input.dataset.qpV47Key === key; });
    return list;
  }

  function familyMeta(key){
    return FAMILIES.find(function(family){ return family.key === key; }) || FAMILIES[0] || {
      key: DEFAULT_FAMILY,
      label: "品質"
    };
  }

  function setFamily(shelf, key, shouldAnnounce){
    if(!shelf) return;
    const meta = familyMeta(key);
    const activeKey = meta.key || DEFAULT_FAMILY;
    const activeGroup = meta.group || DEFAULT_GROUP;
    shelf.dataset.qpV47Family = activeKey;
    shelf.dataset.qpV47Group = activeGroup;

    qsAll(shelf, ".qp-v47-group-button").forEach(function(button){
      const active = button.dataset.qpV47Group === activeGroup;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    qsAll(shelf, ".qp-v47-family-button").forEach(function(button){
      const visible = (button.dataset.qpV47Group || DEFAULT_GROUP) === activeGroup;
      const active = button.dataset.qpV47Family === activeKey;
      button.hidden = !visible;
      button.setAttribute("aria-hidden", visible ? "false" : "true");
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    qsAll(shelf, ".qp-v47-card").forEach(function(card){
      const visible = card.dataset.qpV47Family === activeKey;
      card.hidden = !visible;
      card.setAttribute("aria-hidden", visible ? "false" : "true");
    });

    if(shouldAnnounce){
      announce(shelf, "「" + (meta.label || "品質") + "」の3セットを表示しています。選択済みセットは系統を切り替えても保持されます。");
    }
  }

  function followSelectedFamily(shelf){
    const selected = packInputs(shelf).concat(componentInputs(shelf)).find(function(input){
      return input.checked;
    });
    const card = selected && selected.closest ? selected.closest(".qp-v47-card") : null;
    if(card && card.dataset.qpV47Family){
      setFamily(shelf, card.dataset.qpV47Family, false);
    }
  }

  function closePanels(shelf, exceptCard){
    qsAll(shelf, ".qp-v47-card").forEach(function(card){
      if(card === exceptCard) return;
      const panel = card.querySelector(".qp-v47-components");
      const button = card.querySelector('[data-qp-v47-action="decompose"]');
      if(panel) panel.hidden = true;
      if(button) button.textContent = "分解して調整";
    });
  }

  function syncCard(card){
    if(!card) return;
    const pack = card.querySelector('input[data-qp-v47-kind="pack"]');
    const components = qsAll(card, 'input[data-qp-v47-kind="component"]');
    const checked = components.filter(function(input){ return input.checked; }).length;
    const status = card.querySelector(".qp-v47-status");
    const packActive = !!(pack && pack.checked);
    const customActive = !packActive && checked > 0;

    card.classList.toggle("is-pack-active", packActive);
    card.classList.toggle("is-custom-active", customActive);
    if(status){
      if(packActive) status.textContent = "セット選択中・" + components.length + "語";
      else if(customActive) status.textContent = "分解調整中・" + checked + "/" + components.length + "語";
      else status.textContent = "未選択";
    }
  }

  function syncShelf(shelf, followSelection){
    qsAll(shelf, ".qp-v47-card").forEach(syncCard);
    if(followSelection) followSelectedFamily(shelf);
  }

  function clearAll(shelf, except){
    let changed = false;
    packInputs(shelf).concat(componentInputs(shelf)).forEach(function(input){
      if(input === except) return;
      if(setChecked(input, false)) changed = true;
    });
    return changed;
  }

  function activatePack(shelf, input){
    const key = input.dataset.qpV47Key || "";
    const card = input.closest ? input.closest(".qp-v47-card") : null;
    applying = true;
    clearAll(shelf, input);
    closePanels(shelf, null);
    applying = false;
    syncShelf(shelf);
    if(card) setFamily(shelf, card.dataset.qpV47Family, false);
    announce(shelf, "✅ 「" + (input.dataset.qpV47Label || "品質セット") + "」を選びました。生成結果は1セットとして扱います。");
    emitChanged({ source:"v47", mode:"pack", key:key });
    generateOnce();
  }

  function activateComponents(shelf, card, selectAll){
    const key = card.dataset.qpV47Key || "";
    const own = componentInputs(card, key);
    let changed = false;
    applying = true;
    packInputs(shelf).forEach(function(input){ if(setChecked(input, false)) changed = true; });
    componentInputs(shelf).forEach(function(input){
      if(input.dataset.qpV47Key !== key && setChecked(input, false)) changed = true;
    });
    if(selectAll){
      own.forEach(function(input){ if(setChecked(input, true)) changed = true; });
    }
    applying = false;
    syncShelf(shelf);
    setFamily(shelf, card.dataset.qpV47Family, false);
    if(changed){
      emitChanged({ source:"v47", mode:"components", key:key, selected:own.filter(function(input){ return input.checked; }).length });
      generateOnce();
    }
    return changed;
  }

  function bindShelf(shelf){
    if(!shelf || shelf.dataset.qpV47Bound === "true") return;
    shelf.dataset.qpV47Bound = "true";

    shelf.addEventListener("change", function(event){
      const input = event.target;
      if(applying || !input || !input.dataset) return;
      const kind = input.dataset.qpV47Kind || "";
      if(kind === "pack"){
        if(input.checked) activatePack(shelf, input);
        else {
          syncShelf(shelf);
          emitChanged({ source:"v47", mode:"off", key:input.dataset.qpV47Key || "" });
          generateOnce();
        }
        return;
      }
      if(kind === "component"){
        const card = input.closest(".qp-v47-card");
        if(input.checked && card) activateComponents(shelf, card, false);
        syncShelf(shelf);
        const selected = card ? componentInputs(card, card.dataset.qpV47Key).filter(function(cb){ return cb.checked; }).length : 0;
        announce(shelf, selected ? "🧩 分解した品質語を " + selected + "語選択中です。" : "分解した品質語の選択を解除しました。");
        emitChanged({ source:"v47", mode:"component-edit", key:input.dataset.qpV47Key || "", selected:selected });
        generateOnce();
      }
    });

    shelf.addEventListener("click", function(event){
      const groupButton = event.target && event.target.closest
        ? event.target.closest(".qp-v47-group-button")
        : null;
      if(groupButton && groupButton.closest("#qp-v47-quick-presets") === shelf){
        event.preventDefault();
        event.stopPropagation();
        const groupKey = groupButton.dataset.qpV47Group || DEFAULT_GROUP;
        const nextFamily = FAMILIES.find(function(family){
          return (family.group || DEFAULT_GROUP) === groupKey;
        });
        if(nextFamily) setFamily(shelf, nextFamily.key, true);
        return;
      }

      const familyButton = event.target && event.target.closest
        ? event.target.closest(".qp-v47-family-button")
        : null;
      if(familyButton && familyButton.closest("#qp-v47-quick-presets") === shelf){
        event.preventDefault();
        event.stopPropagation();
        setFamily(shelf, familyButton.dataset.qpV47Family || DEFAULT_FAMILY, true);
        return;
      }

      const button = event.target && event.target.closest ? event.target.closest("[data-qp-v47-action]") : null;
      if(!button) return;
      event.preventDefault();
      event.stopPropagation();
      const card = button.closest(".qp-v47-card");
      if(!card) return;
      const key = card.dataset.qpV47Key || "";
      const panel = card.querySelector(".qp-v47-components");
      const action = button.dataset.qpV47Action || "";

      if(action === "decompose"){
        if(panel && !panel.hidden){
          panel.hidden = true;
          button.textContent = "分解して調整";
          return;
        }
        closePanels(shelf, card);
        const hasSelectedParts = componentInputs(card, key).some(function(input){ return input.checked; });
        activateComponents(shelf, card, !hasSelectedParts);
        if(panel) panel.hidden = false;
        button.textContent = "調整欄を閉じる";
        announce(shelf, "🧩 「" + (card.dataset.qpV47Label || "品質セット") + "」を個別項目へ分解しました。不要な語だけ外せます。");
        syncShelf(shelf);
        return;
      }

      if(action === "all-on"){
        activateComponents(shelf, card, true);
        if(panel) panel.hidden = false;
        const decompose = card.querySelector('[data-qp-v47-action="decompose"]');
        if(decompose) decompose.textContent = "調整欄を閉じる";
        announce(shelf, "🧩 分解項目をすべてONにしました。");
        return;
      }

      if(action === "all-off"){
        applying = true;
        componentInputs(card, key).forEach(function(input){ setChecked(input, false); });
        applying = false;
        syncShelf(shelf);
        announce(shelf, "分解項目をすべてOFFにしました。");
        emitChanged({ source:"v47", mode:"components-off", key:key, selected:0 });
        generateOnce();
      }
    });
  }

  function makeComponent(preset, tag, index){
    const label = document.createElement("label");
    label.className = "qp-v47-component";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "qp-v47-component-" + safeKey(preset.key) + "-" + index;
    input.dataset.val = tag;
    input.dataset.en = tag;
    input.dataset.qpV47Kind = "component";
    input.dataset.qpV47Key = preset.key;
    input.setAttribute("autocomplete", "off");
    const text = document.createElement("span");
    text.textContent = tag;
    label.appendChild(input);
    label.appendChild(text);
    return label;
  }

  function makeCard(preset){
    const card = document.createElement("article");
    card.className = "qp-v47-card qp-v47-tone-" + safeKey(preset.tone);
    card.dataset.qpV47Key = preset.key;
    card.dataset.qpV47Label = preset.label;
    card.dataset.qpV47Family = preset.family || DEFAULT_FAMILY;

    const select = document.createElement("label");
    select.className = "qp-v47-select";
    const pack = document.createElement("input");
    pack.type = "checkbox";
    pack.id = "qp-v47-pack-" + safeKey(preset.key);
    pack.dataset.val = promptValue(preset);
    pack.dataset.en = promptValue(preset);
    pack.dataset.ja = preset.label;
    pack.dataset.qpV47Kind = "pack";
    pack.dataset.qpV47Key = preset.key;
    pack.dataset.qpV47Label = preset.label;
    pack.setAttribute("autocomplete", "off");

    const body = document.createElement("span");
    body.className = "qp-v47-card-body";
    const titleRow = document.createElement("span");
    titleRow.className = "qp-v47-title-row";
    const title = document.createElement("strong");
    title.textContent = preset.label;
    const badge = document.createElement("span");
    badge.className = "qp-v47-badge";
    badge.textContent = preset.badge;
    titleRow.appendChild(title);
    titleRow.appendChild(badge);
    const desc = document.createElement("span");
    desc.className = "qp-v47-desc";
    desc.textContent = preset.desc;
    const status = document.createElement("span");
    status.className = "qp-v47-status";
    status.textContent = "未選択";
    body.appendChild(titleRow);
    body.appendChild(desc);
    body.appendChild(status);
    select.appendChild(pack);
    select.appendChild(body);
    card.appendChild(select);

    const decompose = document.createElement("button");
    decompose.type = "button";
    decompose.className = "qp-v47-decompose";
    decompose.dataset.qpV47Action = "decompose";
    decompose.textContent = "分解して調整";
    card.appendChild(decompose);

    const panel = document.createElement("div");
    panel.className = "qp-v47-components";
    panel.hidden = true;
    const panelHead = document.createElement("div");
    panelHead.className = "qp-v47-components-head";
    const hint = document.createElement("span");
    hint.textContent = "個別に外したい語だけOFF";
    const actions = document.createElement("span");
    actions.className = "qp-v47-mini-actions";
    const allOn = document.createElement("button");
    allOn.type = "button";
    allOn.dataset.qpV47Action = "all-on";
    allOn.textContent = "全部ON";
    const allOff = document.createElement("button");
    allOff.type = "button";
    allOff.dataset.qpV47Action = "all-off";
    allOff.textContent = "全部OFF";
    actions.appendChild(allOn);
    actions.appendChild(allOff);
    panelHead.appendChild(hint);
    panelHead.appendChild(actions);
    panel.appendChild(panelHead);

    const componentGrid = document.createElement("div");
    componentGrid.className = "qp-v47-component-grid";
    (preset.tags || []).forEach(function(tag, index){
      componentGrid.appendChild(makeComponent(preset, tag, index));
    });
    panel.appendChild(componentGrid);
    card.appendChild(panel);
    return card;
  }

  function makeFamilyTabs(){
    const nav = document.createElement("div");
    nav.className = "qp-v47-family-tabs";
    nav.setAttribute("role", "group");
    nav.setAttribute("aria-label", "品質セットの作風を選択");

    FAMILIES.forEach(function(family){
      const button = document.createElement("button");
      button.type = "button";
      button.className = "qp-v47-family-button";
      button.dataset.qpV47Family = family.key;
      button.dataset.qpV47Group = family.group || DEFAULT_GROUP;
      button.setAttribute("aria-pressed", "false");

      const label = document.createElement("span");
      label.className = "qp-v47-family-label";
      label.textContent = (family.icon ? family.icon + " " : "") + (family.shortLabel || family.label || family.key);
      const count = document.createElement("span");
      count.className = "qp-v47-family-count";
      count.textContent = String(PRESETS.filter(function(preset){ return preset.family === family.key; }).length);
      button.appendChild(label);
      button.appendChild(count);
      nav.appendChild(button);
    });
    return nav;
  }

  function makeGroupTabs(){
    const nav = document.createElement("div");
    nav.className = "qp-v47-group-tabs";
    nav.setAttribute("role", "group");
    nav.setAttribute("aria-label", "品質セットの種類を選択");

    GROUPS.forEach(function(group){
      const button = document.createElement("button");
      button.type = "button";
      button.className = "qp-v47-group-button";
      button.dataset.qpV47Group = group.key;
      button.setAttribute("aria-pressed", "false");

      const label = document.createElement("span");
      label.className = "qp-v47-group-label";
      label.textContent = (group.icon ? group.icon + " " : "") + (group.shortLabel || group.label || group.key);
      const count = document.createElement("span");
      count.className = "qp-v47-group-count";
      count.textContent = FAMILIES.filter(function(family){
        return (family.group || DEFAULT_GROUP) === group.key;
      }).length + "系統";
      button.appendChild(label);
      button.appendChild(count);
      nav.appendChild(button);
    });
    return nav;
  }

  function buildShelf(){
    const shelf = document.createElement("details");
    shelf.id = "qp-v47-quick-presets";
    shelf.open = false;

    const summary = document.createElement("summary");
    const summaryTitle = document.createElement("span");
    summaryTitle.textContent = "⚡ おまかせ品質セット";
    const count = document.createElement("span");
    count.className = "qp-v47-summary-count";
    count.textContent = PRESETS.length + "セット・" + FAMILIES.length + "系統";
    summary.appendChild(summaryTitle);
    summary.appendChild(count);
    shelf.appendChild(summary);

    const guide = document.createElement("div");
    guide.className = "qp-v47-guide";
    guide.innerHTML = "<strong>まず「高品質／表現品質」を選び、作風と3段階から1つ選ぶだけ。</strong> セット同士は自動で切り替わります。細かく触りたい時だけ「分解して調整」を押してください。";
    shelf.appendChild(guide);

    shelf.appendChild(makeGroupTabs());
    shelf.appendChild(makeFamilyTabs());

    const live = document.createElement("div");
    live.className = "qp-v47-live";
    live.setAttribute("role", "status");
    live.setAttribute("aria-live", "polite");
    live.textContent = "迷ったら「リアルアニメ｜標準」がおすすめです。";
    shelf.appendChild(live);

    const grid = document.createElement("div");
    grid.className = "qp-v47-grid";
    PRESETS.forEach(function(preset){ grid.appendChild(makeCard(preset)); });
    shelf.appendChild(grid);
    bindShelf(shelf);
    setFamily(shelf, DEFAULT_FAMILY, false);
    syncShelf(shelf);
    return shelf;
  }

  function ensureStyles(){
    if(document.getElementById("qp-v47-quick-style")) return;
    const style = document.createElement("style");
    style.id = "qp-v47-quick-style";
    style.textContent = `
      #qp-v47-quick-presets{
        margin:2px 0 10px !important;
        overflow:hidden !important;
        border:1px solid #9ed6e7 !important;
        border-radius:16px !important;
        background:linear-gradient(180deg,#ffffff 0%,#f2fbff 100%) !important;
        box-shadow:0 8px 24px rgba(45,112,135,.10) !important;
      }
      #qp-v47-quick-presets > summary{
        display:flex !important;
        align-items:center !important;
        justify-content:space-between !important;
        gap:10px !important;
        padding:12px 14px !important;
        background:linear-gradient(135deg,#eefcff,#dff7fb) !important;
        color:#123a4a !important;
        font-weight:950 !important;
        letter-spacing:.02em !important;
      }
      #qp-v47-quick-presets .qp-v47-summary-count{
        flex:0 0 auto;
        padding:3px 9px;
        border-radius:999px;
        border:1px solid #8bcddd;
        background:#fff;
        color:#17627a;
        font-size:11px;
        font-weight:900;
      }
      #qp-v47-quick-presets .qp-v47-guide{
        margin:10px 10px 6px;
        padding:9px 10px;
        border:1px solid #c7e7ef;
        border-radius:12px;
        background:#fff;
        color:#244b59;
        font-size:12px;
        line-height:1.6;
      }
      #qp-v47-quick-presets .qp-v47-live{
        margin:0 10px 8px;
        color:#2a6172;
        font-size:11px;
        line-height:1.45;
        min-height:1.45em;
      }
      #qp-v47-quick-presets .qp-v47-group-tabs{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:8px;
        padding:2px 10px 9px;
      }
      #qp-v47-quick-presets .qp-v47-group-button{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:7px;
        min-width:0;
        min-height:45px;
        padding:8px 10px;
        border:1px solid #b8dbe5;
        border-radius:13px;
        background:#f7fcfe;
        color:#315766;
        font-size:12px;
        font-weight:950;
        cursor:pointer;
      }
      #qp-v47-quick-presets .qp-v47-group-button.is-active{
        border-color:#24aeb1;
        background:linear-gradient(135deg,#e7fffb,#e6f8ff);
        color:#0b666a;
        box-shadow:0 0 0 2px rgba(36,174,177,.14);
      }
      #qp-v47-quick-presets .qp-v47-group-button[data-qp-v47-group="expression"].is-active{
        border-color:#d7a451;
        background:linear-gradient(135deg,#fff8e9,#fff1dc);
        color:#805312;
        box-shadow:0 0 0 2px rgba(215,164,81,.15);
      }
      #qp-v47-quick-presets .qp-v47-group-label{
        min-width:0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      #qp-v47-quick-presets .qp-v47-group-count{
        flex:0 0 auto;
        padding:2px 7px;
        border-radius:999px;
        background:rgba(255,255,255,.8);
        color:inherit;
        font-size:9px;
      }
      #qp-v47-quick-presets .qp-v47-family-tabs{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:7px;
        padding:0 10px 8px;
      }
      #qp-v47-quick-presets .qp-v47-family-button{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:6px;
        min-width:0;
        min-height:42px;
        padding:7px 9px;
        border:1px solid #c7dfe8;
        border-radius:11px;
        background:#fff;
        color:#315766;
        font-size:11px;
        font-weight:900;
        cursor:pointer;
      }
      #qp-v47-quick-presets .qp-v47-family-button[hidden]{ display:none !important; }
      #qp-v47-quick-presets .qp-v47-family-button.is-active{
        border-color:#35b6bd;
        background:linear-gradient(135deg,#effffc,#e8f9ff);
        color:#0d666a;
        box-shadow:0 0 0 2px rgba(53,182,189,.13);
      }
      #qp-v47-quick-presets .qp-v47-family-label{
        min-width:0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      #qp-v47-quick-presets .qp-v47-family-count{
        flex:0 0 auto;
        display:grid;
        place-items:center;
        min-width:22px;
        min-height:22px;
        border-radius:999px;
        background:#edf6f9;
        color:#456b78;
        font-size:10px;
      }
      #qp-v47-quick-presets .qp-v47-family-button.is-active .qp-v47-family-count{
        background:#ccefeb;
        color:#0d666a;
      }
      #qp-v47-quick-presets .qp-v47-grid{
        display:grid;
        grid-template-columns:1fr;
        gap:9px;
        padding:0 10px 10px;
      }
      #qp-v47-quick-presets .qp-v47-card{
        min-width:0;
        padding:10px;
        border:1px solid #cbdfe7;
        border-radius:14px;
        background:#fff;
        color:#173846;
        transition:border-color .16s ease,box-shadow .16s ease,background .16s ease;
      }
      #qp-v47-quick-presets .qp-v47-card[hidden]{ display:none !important; }
      #qp-v47-quick-presets .qp-v47-card.is-pack-active{
        border-color:#35b6bd;
        background:#ecfffc;
        box-shadow:0 0 0 2px rgba(53,182,189,.17),0 8px 18px rgba(35,125,137,.10);
      }
      #qp-v47-quick-presets .qp-v47-card.is-custom-active{
        border-color:#7c9fe9;
        background:#f4f7ff;
        box-shadow:0 0 0 2px rgba(93,126,211,.14);
      }
      #qp-v47-quick-presets .qp-v47-tone-special.is-pack-active,
      #qp-v47-quick-presets .qp-v47-tone-special.is-custom-active,
      #qp-v47-quick-presets .qp-v47-tone-crystal.is-pack-active,
      #qp-v47-quick-presets .qp-v47-tone-crystal.is-custom-active{
        border-color:#9b8be8;
        background:linear-gradient(135deg,#ffffff 0%,#f1efff 52%,#eaffff 100%);
      }
      #qp-v47-quick-presets .qp-v47-select{
        display:flex;
        align-items:flex-start;
        gap:10px;
        cursor:pointer;
        color:#173846;
      }
      #qp-v47-quick-presets .qp-v47-select > input{
        flex:0 0 auto;
        width:21px;
        height:21px;
        margin:2px 0 0;
        accent-color:#24aeb1;
      }
      #qp-v47-quick-presets .qp-v47-card-body{
        display:flex;
        flex:1 1 auto;
        min-width:0;
        flex-direction:column;
        gap:4px;
      }
      #qp-v47-quick-presets .qp-v47-title-row{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:8px;
        min-width:0;
      }
      #qp-v47-quick-presets .qp-v47-title-row strong{
        color:#123a4a;
        font-size:14px;
        line-height:1.35;
        overflow-wrap:anywhere;
      }
      #qp-v47-quick-presets .qp-v47-badge{
        flex:0 0 auto;
        padding:3px 7px;
        border-radius:999px;
        background:#e7f7fb;
        color:#17627a;
        border:1px solid #b6dde7;
        font-size:10px;
        font-weight:900;
      }
      #qp-v47-quick-presets .qp-v47-tone-high .qp-v47-badge{
        background:#e9f9f1;
        color:#176343;
        border-color:#b9e4cd;
      }
      #qp-v47-quick-presets .qp-v47-tone-special .qp-v47-badge,
      #qp-v47-quick-presets .qp-v47-tone-crystal .qp-v47-badge{
        background:#f0edff;
        color:#55439e;
        border-color:#d2c9ff;
      }
      #qp-v47-quick-presets .qp-v47-desc{
        color:#486773;
        font-size:11px;
        line-height:1.5;
      }
      #qp-v47-quick-presets .qp-v47-status{
        color:#587985;
        font-size:10px;
        font-weight:850;
      }
      #qp-v47-quick-presets .is-pack-active .qp-v47-status{ color:#08756f; }
      #qp-v47-quick-presets .is-custom-active .qp-v47-status{ color:#485cad; }
      #qp-v47-quick-presets .qp-v47-decompose{
        width:100%;
        min-height:40px;
        margin-top:9px;
        border:1px solid #afd5df;
        border-radius:11px;
        background:#f8fdff;
        color:#17627a;
        font-size:12px;
        font-weight:900;
        cursor:pointer;
      }
      #qp-v47-quick-presets .qp-v47-components[hidden]{ display:none !important; }
      #qp-v47-quick-presets .qp-v47-components{
        margin-top:9px;
        padding:9px;
        border:1px solid #cbdce8;
        border-radius:12px;
        background:rgba(255,255,255,.92);
      }
      #qp-v47-quick-presets .qp-v47-components-head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:8px;
        margin-bottom:8px;
        color:#405c68;
        font-size:11px;
        font-weight:850;
      }
      #qp-v47-quick-presets .qp-v47-mini-actions{
        display:flex;
        gap:6px;
      }
      #qp-v47-quick-presets .qp-v47-mini-actions button{
        min-height:34px;
        padding:5px 8px;
        border:1px solid #bfd6df;
        border-radius:9px;
        background:#fff;
        color:#24586a;
        font-size:10px;
        font-weight:900;
        cursor:pointer;
      }
      #qp-v47-quick-presets .qp-v47-component-grid{
        display:grid;
        grid-template-columns:1fr;
        gap:6px;
      }
      #qp-v47-quick-presets .qp-v47-component{
        display:flex;
        align-items:flex-start;
        gap:8px;
        min-width:0;
        padding:7px 8px;
        border:1px solid #dde8ed;
        border-radius:9px;
        background:#fff;
        color:#284b58;
        font-size:10px;
        line-height:1.45;
        overflow-wrap:anywhere;
        cursor:pointer;
      }
      #qp-v47-quick-presets .qp-v47-component:has(input:checked){
        border-color:#73c5c7;
        background:#effdfa;
        color:#155e63;
      }
      #qp-v47-quick-presets .qp-v47-component input{
        flex:0 0 auto;
        width:17px;
        height:17px;
        margin:0;
        accent-color:#24aeb1;
      }
      @media (min-width:760px){
        #qp-v47-quick-presets .qp-v47-family-tabs{ grid-template-columns:repeat(4,minmax(0,1fr)); }
        #qp-v47-quick-presets .qp-v47-grid{ grid-template-columns:repeat(3,minmax(0,1fr)); }
        #qp-v47-quick-presets .qp-v47-card{ display:flex; flex-direction:column; }
        #qp-v47-quick-presets .qp-v47-decompose{ margin-top:auto; transform:translateY(9px); margin-bottom:9px; }
        #qp-v47-quick-presets .qp-v47-components{ grid-column:1/-1; }
        #qp-v47-quick-presets .qp-v47-component-grid{ grid-template-columns:repeat(2,minmax(0,1fr)); }
      }
      @media (max-width:420px){
        #qp-v47-quick-presets .qp-v47-title-row{ align-items:flex-start; flex-direction:column; }
        #qp-v47-quick-presets .qp-v47-components-head{ align-items:flex-start; flex-direction:column; }
      }
    `;
    document.head.appendChild(style);
  }

  function insertShelf(){
    const root = getIntegratedRoot();
    const content = getIntegratedContent(root);
    if(!root || !content || document.getElementById("qp-v47-quick-presets")) return;
    ensureStyles();
    const shelf = buildShelf();
    const guide = content.querySelector(":scope > .qp-v14-guide") || content.querySelector(".qp-v14-guide");
    if(guide && guide.parentNode === content){
      content.insertBefore(shelf, guide.nextSibling);
      if(!/おまかせ品質セット/.test(guide.textContent || "")){
        guide.textContent += " 迷ったら最初の「おまかせ品質セット」から1つ選べます。";
      }
    }else{
      content.insertBefore(shelf, content.firstChild);
    }
  }

  function syncAfterExternalChange(){
    const shelf = document.getElementById("qp-v47-quick-presets");
    if(!shelf) return;
    qsAll(shelf, ".qp-v47-components").forEach(function(panel){ panel.hidden = true; });
    qsAll(shelf, '[data-qp-v47-action="decompose"]').forEach(function(button){ button.textContent = "分解して調整"; });
    syncShelf(shelf, false);
  }

  function bindGlobal(){
    if(document.documentElement.dataset.qpV47GlobalBound === "true") return;
    document.documentElement.dataset.qpV47GlobalBound = "true";
    document.addEventListener("builderResetAll", function(){
      // リセット完了通知の時点で即座に閉じ、他拡張の遅延同期後にももう一度整える。
      syncAfterExternalChange();
      setTimeout(syncAfterExternalChange, 80);
    }, true);
    window.addEventListener("builderHistoryRestored", function(){ setTimeout(function(){
      const shelf = document.getElementById("qp-v47-quick-presets");
      if(shelf) syncShelf(shelf, true);
    }, 0); });
    document.addEventListener("click", function(event){
      const button = event.target && event.target.closest ? event.target.closest(".category-reset-btn") : null;
      if(!button || !button.closest("#list-quality_preset")) return;
      setTimeout(syncAfterExternalChange, 80);
    }, true);
  }

  const API = {
    initUI(container){
      ensureStyles();
      insertShelf();
      bindGlobal();
      setTimeout(insertShelf, 0);
      setTimeout(insertShelf, 250);
    },
    getTags(){ return []; }
  };

  if(typeof window.__registerPromptPart === "function"){
    window.__registerPromptPart(KEY, VERSION, API);
  }
})();
