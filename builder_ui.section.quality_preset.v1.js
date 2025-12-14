(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";

  const DATA = {
    "🏆 基本・汎用 (Standard)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風", val: "(masterpiece), (best quality), (3d render style), (octane render), (highly detailed cg)" }
    ],
    "💎 ハイエンド・特化 (High-End Specialized)": [
      { 
        label: "★究極・レンダリング (Ultimate Tech)", 
        val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)",
        // ★最強の連動リスト
        links: [
          "基本・最高画質", "Standard", 
          "安全セット", "Safe 3D", "キャラ・人物", "背景・空間", "物・メカ",
          "レイトレーシング", "Ray Tracing", "UE5", "Unreal Engine", "Lumen", "Nanite",
          "PBR", "物理ベース", "Global Illumination", "グローバルイルミネーション",
          "SSS", "表面下散乱", "サブサーフェス", "Subsurface", "透け感", 
          "ボリュメトリック", "Volumetric", "Ambient Occlusion", "アンビエント",
          "V-Ray", "シネマティック", "Cinematic", "リアルなライティング", "Realistic Lighting",
          "ゴッドレイ", "God Rays", "Bright", "明るい照明", "リムライト", "Rim Lighting", "ソフトライティング",
          "被写界深度", "Depth of Field", "Depth", "奥行き", "ボケ", "Bokeh", 
          "ソフトフォーカス", "Soft Focus", "ダイナミック", "Dynamic", "ぼやけた", "Blurry", 
          "8K", "超高解像度", "整った顔立ち", "Perfect Face",
          "高精細な肌理", "Detailed Skin", "リアルな肌", "Realistic Skin"
        ]
      },
      { 
        label: "超艶・粘液特化", 
        val: "(anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (extremely detailed skin, face, hair, slime textures:1.3), (cinematic lighting:1.3), (wet glossy oil-like sheen:1.3), (translucent dripping slime glow:1.3), (highly reflective fluid highlights:1.3), (iridescent rainbow oil reflections:1.3), (vivid anime-like colors:1.3)",
        // ★追加: 質感・光沢系を連動
        links: [
          "基本・最高画質", 
          "キャラ・人物",
          "光沢/ツヤ肌", "Shiny Skin", "オイル肌", "Oil Skin", "濡れた肌", "Wet Skin",
          "SSS", "サブサーフェス", "透け感",
          "レイトレーシング", "Ray Tracing", "PBR",
          "シネマティック", "Cinematic"
        ]
      },
      { 
        label: "人物特化ハイエンド", 
        val: "(intricate details:1.3), (extremely detailed skin, face, hair:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1), (high-fidelity hair:1.2), (ultra shiny hair:1.1), (individual hair strands:1.2), (micro-texture:1.2), (cinematic framing:1.2), (professional photography:1.2)",
        // ★追加: 人物・肌・解像度系を連動
        links: [
          "基本・最高画質", "フォトリアル",
          "キャラ・人物", "安全セット",
          "整った顔立ち", "Perfect Face", "高精細な肌理", "Detailed Skin", "リアルな肌", "Realistic Skin",
          "SSS", "サブサーフェス", "透け感", "PBR",
          "8K", "超高解像度",
          "被写界深度", "ボケ", "Depth of Field", "ポートレート"
        ]
      },
      { 
        label: "半アニメ・セミリアル", 
        val: "(anime style:1.2), (anime-realism blend:1.2), (semi-realistic rendering:1.1), (smooth shading:1.2), (soft gradient coloring:1.2), (glossy anime highlights:1.2), (vivid anime-like colors:1.2), (delicate lineart:1.2)",
        // ★追加: アニメ・柔らかい光系を連動
        links: [
          "アニメ塗り", "Anime Style",
          "キャラ・人物",
          "ソフトライティング", "Soft Lighting", "ソフトフォーカス",
          "スムース", "Smooth"
        ]
      },
      { 
        label: "風景・背景特化", 
        val: "(ultra detailed background:1.3), (scenery:1.3), (hyperrealistic landscape), (detailed water), (detailed sky), (detailed clouds), (lush vegetation), (atmospheric perspective), (cinematic composition), (epic scale)",
        // ★追加: 背景・環境系を連動
        links: [
          "基本・最高画質",
          "背景・空間", "安全セット",
          "ボリュメトリック", "Volumetric", "God Rays", "ゴッドレイ",
          "8K", "超高解像度",
          "広角", "Wide Angle", "パノラマ"
        ]
      },
      { 
        label: "メカ・SF特化", 
        val: "(ultra detailed mecha), (mechanical parts:1.3), (complex machinery), (metallic texture), (scratched metal), (glowing lights), (sci-fi atmosphere), (cybernetic), (hard surface modeling), (intricate panel lines)",
        // ★追加: メカ・硬質系を連動
        links: [
          "物・メカ", "安全セット",
          "3Dレンダリング風",
          "PBR", "物理ベース", "レイトレーシング",
          "UE5", "Nanite",
          "ハードサーフェス", "Hard Surface"
        ]
      }
    ],
    "🛠️ 制作ソフト・プリセット (Software Presets)": [
      { label: "ZBrush (スカルプト感)", val: "(zbrush sculpt), (digital sculpting), (organic molding), (clay render style)" },
      { label: "Cinema 4D (ライティング)", val: "(cinema 4d render), (studio lighting), (3d art), (clean render)" },
      { label: "Substance Painter (テクスチャ)", val: "(substance painter), (pbr textures), (intricate texture), (detailed surface)", links: ["PBR", "物理ベース"] },
      { label: "Blender Cycles (リアル)", val: "(blender cycles), (path tracing), (high fidelity)", links: ["レイトレーシング", "Ray Tracing"] },
      { label: "Maya (モデリング)", val: "(maya 3d), (hard surface modeling), (clean topology), (3d model)" }
    ],
    "⚙️ 3D技術・プリセット (3D Tech Sets)": [
      { label: "レイトレーシング (光と影)", val: "(ray tracing), (global illumination), (realistic shadows), (ambient occlusion), (realistic lighting)" },
      { label: "PBR (質感・マテリアル)", val: "(physically based rendering), (pbr textures), (highly detailed surface), (realistic materials), (roughness map)" },
      { label: "ボリュメトリック (空気感)", val: "(volumetric lighting), (god rays), (tyndall effect), (atmospheric depth), (foggy atmosphere), (depth haze)" },
      { label: "SSS (肌・透明感)", val: "(subsurface scattering), (translucent skin), (soft light penetration), (organic texture), (realistic skin)" },
      { label: "UE5 (Lumen/Nanite)", val: "(unreal engine 5), (lumen reflections), (nanite geometry), (dynamic lighting), (virtual geometry)" },
      { label: "被写界深度・ボケ", val: "(depth of field), (bokeh), (blurry background), (focus on character)" },
      { label: "8K・超高解像度", val: "(8k uhd), (best quality), (masterpiece), (ultra high resolution)" }
    ],
    "🎬 シチュエーション (Situations)": [
      { label: "アイドルステージ (Idol Stage)", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (light particles), (low-angle close-up), (cinematic glow)" },
      { label: "カフェ・イベント", val: "(cozy modern café), (mini event space), (string lights), (decorations), (bokeh), (warm atmosphere), (indoor)" },
      { label: "ライブコンサート", val: "(live concert), (stage lights), (crowd), (performance), (microphone), (energetic), (confetti), (spotlight)" },
      { label: "壮大なバトル", val: "(epic battle), (fighting), (dynamic action), (explosions), (debris), (intense), (motion blur), (cinematic)" },
      { label: "日常・スライスオブライフ", val: "(slice of life), (daily life), (casual atmosphere), (soft sunlight), (peaceful), (detailed background), (anime style)" },
      { label: "デート", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant)" },
      { label: "学園生活", val: "(school life), (classroom), (school uniform), (sunlight through window), (friends), (youthful), (anime style)" }
    ],
    "🍃 季節・空気感 (Season & Atmosphere)": [
      { label: "幻想的・ドリームライク", val: "(dreamlike atmosphere), (soft focus), (faint sparkles), (floating feathers), (bokeh heart shapes), (pastel theme), (innocent)" },
      { label: "春・桜", val: "(spring season), (cherry blossoms), (pink atmosphere), (soft sunlight), (warm breeze)" },
      { label: "夏・海", val: "(summer season), (intense sunlight), (blue sky), (heat haze), (vibrant colors), (high contrast)" },
      { label: "秋・紅葉", val: "(autumn season), (fallen leaves), (orange and red theme), (warm lighting), (nostalgic atmosphere)" },
      { label: "冬・雪", val: "(winter season), (snowing), (snowy landscape), (cold atmosphere), (breath steam), (pale colors), (overcast)" },
      { label: "夕暮れ", val: "(sunset), (golden hour), (orange sky), (dramatic shadows), (lens flare), (sentimental), (rim light)" },
      { label: "深夜の静寂", val: "(midnight), (starry sky), (moonlight), (darkness), (quiet atmosphere), (blue tint), (cinematic lighting)" },
      { label: "雨の情緒", val: "(raining), (wet ground), (reflections), (gloomy sky), (cinematic lighting), (atmospheric perspective)" }
    ],
    "🧪 サブジャンル・パンク (Sub-genres)": [
      { label: "アトムパンク", val: "(atompunk), (1950s retro futurism), (space age), (chrome), (fins), (googie architecture)" },
      { label: "カセットフューチャリズム", val: "(cassette futurism), (retro computer), (crt monitor), (analog tech), (80s sci-fi)" },
      { label: "レイガンゴシック", val: "(raygun gothic), (retro sci-fi), (flash gordon style), (rockets), (shiny metal), (bubble helmets)" },
      { label: "シンセウェーブ", val: "(synthwave), (neon grid), (sunset), (palm trees), (retro 80s), (magenta and cyan)" }
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット (Negative Sets)": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" }
    ]
  };

  const DICT = { "masterpiece": "傑作", "best quality": "最高画質" };

  function createSubAccordion(title, items, type) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val; 
      if(item.links) cb.dataset.links = item.links.join(",");
      label.title = item.val; label.appendChild(cb); label.appendChild(document.createTextNode(item.label)); 
      if(item.label && !DICT[item.label]) DICT[item.label] = item.label; content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }
  function createMainSection(id, title) { const details = document.createElement("details"); details.id = id; details.className = "qp-main-acc"; details.style.marginBottom = "10px"; details.style.border = "1px solid #ccc"; details.style.borderRadius = "6px"; details.style.background = "#fff"; details.open = false; const summary = document.createElement("summary"); summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`; summary.style.fontWeight = "bold"; summary.style.padding = "10px 14px"; summary.style.cursor = "pointer"; summary.style.background = "#eef2f6"; summary.style.listStyle = "none"; details.appendChild(summary); const wrapper = document.createElement("div"); wrapper.className = "qp-section-content"; wrapper.style.padding = "10px"; details.appendChild(wrapper); return details; }
  function createNegativeSeparator() { const div = document.createElement("div"); div.style.marginTop = "30px"; div.style.marginBottom = "10px"; div.style.borderTop = "2px dashed #ffb3b3"; div.innerHTML = `<div style="margin-top:-12px; text-align:center;"><span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">⚠️ NEGATIVE PROMPTS</span></div>`; return div; }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container; parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      const secPresets = createMainSection("qp-presets", "📦 プリセット (Preset Sets)");
      Object.entries(DATA).forEach(([k,v]) => { secPresets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "preset")); });
      root.appendChild(secPresets);
      root.appendChild(createMainSection("qp-styles", "🎨 スタイル (Style Words)"));
      root.appendChild(createMainSection("qp-eras", "🕰️ 時代・年代 (Era Words)"));
      root.appendChild(createMainSection("qp-quality", "🔧 品質ワード (Quality Words)"));
      root.appendChild(createNegativeSeparator());
      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット (Negative Sets)");
      secNegSets.querySelector("summary").style.background = "#fff0f0"; secNegSets.querySelector("summary").style.color = "#d00";
      Object.entries(NEG_SETS).forEach(([k,v]) => { secNegSets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "negative_set")); });
      root.appendChild(secNegSets);
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブ (Negative Words)");
      secNegWords.querySelector("summary").style.background = "#fff0f0"; secNegWords.querySelector("summary").style.color = "#d00";
      root.appendChild(secNegWords);
      parent.appendChild(root);
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
    },
    getTags() { const tags = []; document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); }); return tags; }
  };

  if (!document.getElementById("qp-styles-css")) { const style = document.createElement('style'); style.id = "qp-styles-css"; style.textContent = `.qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; } .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; } .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; } .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; } .qp-content-grid input { margin-right:6px; flex-shrink: 0; }`; document.head.appendChild(style); }
  window.__registerPromptPart(KEY, VERSION, API);
})();

