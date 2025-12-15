(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";

  // ★シークレット状態の判定
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ■ グループ1: 画風・品質・スタイル (Art Styles & Quality)
  const PRESET_DATA = {
    "🏆 基本・画風 (Standard & Art Styles)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風", val: "(masterpiece), (best quality), (3d render style), (octane render), (highly detailed cg)" },
      { label: "パステル・夢かわ", val: "(pastel colors:1.3), (soft focus), (dreamy), (kawaii), (light pink and blue), (airy atmosphere), (fairy kei style), (soft lighting)" },
      { label: "水彩画風", val: "(watercolor medium), (soft brush strokes), (colorful), (wet on wet), (artistic), (white background)" },
      { label: "油絵・厚塗り", val: "(oil painting), (impasto), (thick brushwork), (textured canvas), (traditional media), (rich colors)" },
      { label: "レトロアニメ (90s)", val: "(1990s source material), (retro anime style), (cel animation type), (analog film noise), (vhs artifact), (muted colors)" },
      { label: "水墨画", val: "(ink wash painting), (sumi-e), (brush strokes), (monochrome), (japanese traditional art), (minimalist)" }
    ],
    "💎 ハイエンド・特化 (High-End Specialized)": [
      { 
        label: "★究極・レンダリング (Ultimate Tech)", 
        val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)",
        links: ["基本・最高画質", "安全セット", "キャラ・人物", "レイトレーシング", "UE5", "PBR", "SSS", "ボリュメトリック", "8K", "整った顔立ち"]
      },
      { 
        label: "幻想・コンセプトアート", 
        val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (intricate scenery), (game art style), (artstation), (majestic)",
        links: ["基本・最高画質", "背景・空間", "ファンタジー"]
      },
      { 
        label: "サイバー・ネオン (Cyber Neon)", 
        val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city), (night), (glowing outlines), (high contrast), (vibrant cyan and magenta)",
        links: ["物・メカ", "SF"]
      },
      { 
        label: "アニメ・セミリアル (透明感)", 
        val: "(anime style:1.3), (cel shading:1.2), (soft lighting), (smooth rendering), (glossy highlights), (shiny hair:1.3), (beautiful detailed eyes), (transparent skin texture), (rim light), (blush)",
        links: ["アニメ塗り", "ソフトライティング", "光沢/ツヤ肌", "リムライト"]
      },
      { 
        label: "セミリアル・艶（アニメベース）", 
        val: "(anime style:1.2), (photorealistic:1.2), (smooth rendering:1.3), (beautiful detailed eyes), (shiny skin:1.4), (glossy hair:1.3), (detailed skin texture:1.2), (cinematic lighting), (rim light), (soft focus)",
        links: ["アニメ塗り", "光沢/ツヤ肌", "濡れた肌", "シネマティック"]
      },
      { 
        label: "超艶・粘液特化", 
        val: "(anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (extremely detailed skin, face, hair, slime textures:1.3), (cinematic lighting:1.3), (wet glossy oil-like sheen:1.3), (translucent dripping slime glow:1.3), (highly reflective fluid highlights:1.3), (iridescent rainbow oil reflections:1.3), (vivid anime-like colors:1.3)",
        links: ["基本・最高画質", "キャラ・人物", "光沢/ツヤ肌", "濡れた肌", "SSS", "レイトレーシング"]
      },
      { 
        label: "人物特化ハイエンド", 
        val: "(intricate details:1.3), (extremely detailed skin, face, hair:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1), (high-fidelity hair:1.2), (ultra shiny hair:1.1), (individual hair strands:1.2), (micro-texture:1.2), (cinematic framing:1.2), (professional photography:1.2)",
        links: ["基本・最高画質", "フォトリアル", "キャラ・人物", "整った顔立ち", "リアルな肌", "SSS", "8K", "被写界深度"]
      },
      { 
        label: "風景・背景特化", 
        val: "(ultra detailed background:1.3), (scenery:1.3), (hyperrealistic landscape), (detailed water), (detailed sky), (detailed clouds), (lush vegetation), (atmospheric perspective), (cinematic composition), (epic scale)",
        links: ["基本・最高画質", "背景・空間", "ボリュメトリック", "8K", "広角"]
      },
      { 
        label: "メカ・SF特化", 
        val: "(ultra detailed mecha), (mechanical parts:1.3), (complex machinery), (metallic texture), (scratched metal), (glowing lights), (sci-fi atmosphere), (cybernetic), (hard surface modeling), (intricate panel lines)",
        links: ["物・メカ", "3Dレンダリング風", "PBR", "レイトレーシング", "ハードサーフェス"]
      }
    ],
    "⚔️ 戦闘・アクション画風 (Battle & Action Styles)": [
      { label: "バトルアニメ風 (作画)", val: "(battle anime style), (sakuga), (intense action), (impact frames), (dynamic angle), (highly detailed effects)", links: ["ダイナミックポーズ", "エフェクト"] },
      { label: "アクションドローイング (荒々しさ)", val: "(action drawing), (rough sketch style), (dynamic brushwork), (motion lines), (sketchy), (raw energy)", links: ["ダイナミックポーズ"] },
      { label: "劇画・アメコミ風", val: "(comic book style), (bold lines), (strong shadows), (inked), (western comic style), (high contrast)" },
      { label: "マンガ戦闘 (集中線)", val: "(manga style), (monochrome), (speed lines), (focus lines), (sound effects), (action focus)" },
      { label: "ダークファンタジー (重厚)", val: "(dark fantasy), (grimdark), (blood splatters), (heavy atmosphere), (gothic), (muted colors)" }
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
    "🧪 サブジャンル・パンク (Sub-genres)": [
      { label: "アトムパンク", val: "(atompunk), (1950s retro futurism), (space age), (chrome), (fins), (googie architecture)" },
      { label: "カセットフューチャリズム", val: "(cassette futurism), (retro computer), (crt monitor), (analog tech), (80s sci-fi)" },
      { label: "レイガンゴシック", val: "(raygun gothic), (retro sci-fi), (flash gordon style), (rockets), (shiny metal), (bubble helmets)" },
      { label: "シンセウェーブ", val: "(synthwave), (neon grid), (sunset), (palm trees), (retro 80s), (magenta and cyan)" }
    ]
  };

  // ■ グループ2: シチュエーション・環境 (Situations & Environment)
  const SITUATION_DATA = {
    "📍 具体的な場所・シーン (Specific Locations)": [
      { 
        label: "アイドルステージ (Live Stage)", 
        val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (light particles), (low-angle close-up), (cinematic glow), (performance)",
        links: ["可愛いポーズ", "Cute Pose", "ダンスポーズ", "Dance Pose", "シネマティック", "Cinematic"]
      },
      { 
        label: "おしゃれカフェ (Modern Cafe)", 
        val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh), (warm atmosphere), (relaxing)",
        links: ["日常ポーズ", "Casual Pose", "座りポーズ", "Sitting Pose"]
      },
      { 
        label: "学園・教室 (School Life)", 
        val: "(school life), (classroom), (school uniform), (sunlight through window), (desks and chairs), (chalkboard), (friends), (youthful), (anime style)",
        links: ["日常ポーズ", "Casual Pose"]
      },
      { 
        label: "デートスポット (Date Night)", 
        val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner), (intimate)",
        links: ["キメポーズ", "Stylish Pose", "照れポーズ", "Shy Pose"]
      },
      { 
        label: "壮大なバトル (Epic Battle)", 
        val: "(epic battle), (fighting), (dynamic action), (explosions), (debris), (ruins), (intense), (motion blur), (cinematic), (sparks)",
        links: ["戦闘態勢", "Battle Stance", "ダイナミックポーズ", "Dynamic Pose"]
      },
      { 
        label: "日常・スライスオブライフ (Slice of Life)", 
        val: "(slice of life), (daily life), (casual atmosphere), (soft sunlight), (peaceful), (detailed background), (anime style), (street)",
        links: ["日常ポーズ", "Casual Pose"]
      },
      { 
        label: "ファンタジーの森 (Fantasy Forest)", 
        val: "(fantasy forest), (glowing plants), (magic particles), (ancient trees), (mysterious), (fairy tale), (lush vegetation)",
        links: ["ファンタジー"]
      }
    ],
    "🌅 朝のシチュエーション (Morning Scenes)": [
      { label: "爽やかな朝 (Fresh Morning)", val: "(morning light:1.3), (soft sunlight), (light leaks), (low contrast), (soft shadows), (fresh atmosphere), (depth of field), (white bed sheets)", links: ["ソフトライティング"] },
      { label: "木漏れ日と自然 (Dappled Sunlight)", val: "(sunlight through leaves), (dappled sunlight), (tyndall effect), (nature focus), (soft focus), (forest background), (peaceful)", links: ["ボリュメトリック", "God Rays"] },
      { label: "窓辺の光 (Window Light)", val: "(sunlight through window), (god rays), (dust particles), (indoor), (backlighting), (soft ambient light), (warm white balance)", links: ["God Rays"] },
      { label: "朝のカフェ (Morning Cafe)", val: "(morning light:1.3), (cozy cafe), (sunlight through window), (steam rising from coffee), (fresh atmosphere), (white tablecloth), (soft focus), (peaceful morning)", links: ["座りポーズ"] },
      { label: "目覚めのベッド (Morning Bed)", val: "(morning light), (bedroom), (white bed sheets), (messy hair), (stretching), (light leaks), (soft shadows), (intimate), (pov)", links: ["伸びポーズ"] },
      { label: "登校中の通学路 (School Commute)", val: "(morning sunlight), (street to school), (cherry blossoms falling), (soft breeze), (school uniform), (lens flare), (youthful atmosphere), (clear sky)", links: ["立ちポーズ"] }
    ],
    "☀️ 昼のシチュエーション (Day Scenes)": [
      { label: "快晴・青空 (Sunny Day)", val: "(intense sunlight), (blue sky), (cumulus clouds), (vibrant colors), (sharp focus), (high contrast), (dynamic shadows), (summer vibes)", links: ["夏・海", "広角"] },
      { label: "日常・自然光 (Natural Day)", val: "(natural lighting), (daylight), (neutral colors), (realistic shadows), (clear sky), (casual atmosphere), (detailed background)" },
      { label: "真夏の日差し (Hard Sunlight)", val: "(harsh sunlight), (strong shadows), (lens flare), (heat haze), (saturated colors), (shimmering air), (sweat)", links: ["濡れた肌", "Wet Skin"] },
      { label: "昼の賑やかなカフェ (Lunch Cafe)", val: "(daylight), (modern cafe), (bustling atmosphere), (bright interior), (green plants), (sharp focus), (vibrant colors), (lunch time), (clear glass window)", links: ["座りポーズ"] },
      { label: "教室の休み時間 (Classroom)", val: "(daylight), (classroom), (sunlight pouring in), (blue sky outside window), (desks and chairs), (chalkboard), (friends chatting), (anime school life)", links: ["日常ポーズ"] },
      { label: "真夏のビーチ (Sunny Beach)", val: "(intense sunlight), (tropical beach), (blue ocean), (white sand), (cumulus clouds), (high contrast), (heat haze), (wet skin), (summer vibes)", links: ["濡れた肌"] },
      { label: "ショッピング街 (City Street)", val: "(city street), (shopping district), (clear blue sky), (fashionable shops), (crowd), (dynamic shadows), (casual date), (vibrant)", links: ["立ちポーズ"] }
    ],
    "🌇 夕方のシチュエーション (Evening Scenes)": [
      { label: "マジックアワー (Golden Hour)", val: "(golden hour:1.4), (sunset), (warm lighting), (orange and purple sky), (long shadows), (sentimental atmosphere), (cinematic lighting)", links: ["シネマティック"] },
      { label: "逆光・シルエット (Backlight)", val: "(strong backlighting), (rim light), (silhouette), (lens flare), (sun behind character), (glowing outline), (dramatic contrast)", links: ["リムライト"] },
      { label: "黄昏・ノスタルジー (Twilight)", val: "(twilight), (blue hour), (fading light), (street lights turning on), (nostalgic), (soft bokeh), (melancholic)", links: ["ボケ"] },
      { label: "夕暮れのカフェ (Sunset Cafe)", val: "(golden hour:1.3), (cafe terrace), (warm orange lighting), (long shadows), (sunset glow), (relaxing after work), (nostalgic atmosphere), (coffee cup)", links: ["座りポーズ"] },
      { label: "放課後の教室 (Sunset Classroom)", val: "(sunset), (orange sky through window), (empty classroom), (silhouette against window), (sentimental), (dust particles), (magic hour), (shadows stretching)", links: ["黄昏"] },
      { label: "帰り道 (Evening Street)", val: "(twilight), (residential street), (telephone poles), (street lights turning on), (fading light), (emotional), (backlighting), (rim light)", links: ["日常ポーズ"] }
    ],
    "🌃 夜のシチュエーション (Night Scenes)": [
      { label: "都会のネオン (City Night)", val: "(night city), (neon lights), (colorful bokeh), (wet street reflections), (cyberpunk vibes), (high contrast), (cinematic lighting), (dark shadows)", links: ["サイバー・ネオン", "シネマティック"] },
      { label: "月明かり (Moonlight)", val: "(moonlight), (full moon), (cold color palette), (blue tint), (rim light), (mysterious atmosphere), (soft glow), (dark ambient)", links: ["リムライト"] },
      { label: "暗闇とスポット (Dark & Spotlight)", val: "(darkness), (spotlight), (chiaroscuro), (dramatic shadows), (mystery), (focus on face), (black background)", links: ["レイトレーシング"] },
      { label: "夜のカフェバー (Night Cafe Bar)", val: "(night cafe), (dim lighting), (warm string lights), (candle light), (romantic atmosphere), (bokeh background), (reflection in window), (jazz bar vibes)", links: ["座りポーズ", "シネマティック"] },
      { label: "ネオン街 (Cyber/Neon City)", val: "(night city), (neon signs), (cyberpunk vibes), (rainy street), (wet ground reflections), (high contrast), (colorful lights), (cinematic lighting)", links: ["サイバー・ネオン"] },
      { label: "月夜の寝室 (Moonlit Bedroom)", val: "(midnight), (dark bedroom), (moonlight through window), (blue tint), (cold atmosphere), (lonely), (dim ambient light), (shadows)", links: ["寝ポーズ"] },
      { label: "夜景デート (Night View)", val: "(observation deck), (city night view), (sparkling city lights), (bokeh), (couple atmosphere), (elegant), (dark sky), (stars)", links: ["キメポーズ"] }
    ],
    "💡 スタジオ・特殊 (Studio & Tech)": [
      { label: "スタジオ撮影 (Pro Studio)", val: "(studio lighting), (professional photography), (perfect lighting), (neutral background), (softbox), (high definition), (clean visual)" },
      { label: "レンブラント (Rembrandt)", val: "(rembrandt lighting), (dramatic shading), (triangle of light), (artistic lighting), (classic painting style), (rich shadows)" },
      { label: "映画的演出 (Cinematic)", val: "(cinematic lighting), (teal and orange), (anamorphic lens flare), (widescreen), (movie scene), (color grading), (dramatic atmosphere)", links: ["シネマティック"] }
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
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット (Negative Sets)": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" }
    ]
  };

  // ★シークレットモードがONの場合のみ、アイテムを追加
  if (IS_UNLOCKED) {
    PRESET_DATA["💎 ハイエンド・特化 (High-End Specialized)"].unshift({ 
      label: "✨SECRET・究極艶 (Portra 400)", 
      val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (subsurface scattering), (global illumination), (physically based rendering), (unreal engine 5), (lumen reflections), (nanite geometry), (8k uhd), (octane render), (realistic lighting), (shiny hair), (glossy hair), (Kodak Portra 400), (low contrast)",
      links: ["基本・最高画質", "光沢/ツヤ肌", "Shiny Skin", "シネマティック", "Cinematic", "UE5", "PBR", "整った顔立ち", "Perfect Face"]
    });
  }

  function createSubAccordion(title, items, type) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val; 
      if(item.links) cb.dataset.links = item.links.join(",");
      label.title = item.val; label.appendChild(cb); label.appendChild(document.createTextNode(item.label)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }
  function createMainSection(id, title) { const details = document.createElement("details"); details.id = id; details.className = "qp-main-acc"; details.style.marginBottom = "10px"; details.style.border = "1px solid #ccc"; details.style.borderRadius = "6px"; details.style.background = "#fff"; details.open = false; const summary = document.createElement("summary"); summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`; summary.style.fontWeight = "bold"; summary.style.padding = "10px 14px"; summary.style.cursor = "pointer"; summary.style.background = "#eef2f6"; summary.style.listStyle = "none"; details.appendChild(summary); const wrapper = document.createElement("div"); wrapper.className = "qp-section-content"; wrapper.style.padding = "10px"; details.appendChild(wrapper); return details; }
  function createNegativeSeparator() { const div = document.createElement("div"); div.style.marginTop = "30px"; div.style.marginBottom = "10px"; div.style.borderTop = "2px dashed #ffb3b3"; div.innerHTML = `<div style="margin-top:-12px; text-align:center;"><span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">⚠️ NEGATIVE PROMPTS</span></div>`; return div; }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) {
        const dict = {
          "masterpiece": "傑作", "best quality": "最高画質",
          "ultra high resolution": "超高解像度",
          "anime-realism blend": "アニメ・リアル融合",
          "cinematic lighting": "シネマティックライティング",
          "ray tracing": "レイトレーシング",
          "subsurface scattering": "サブサーフェス・スキャタリング(SSS)",
          "global illumination": "グローバルイルミネーション",
          "physically based rendering": "物理ベースレンダリング(PBR)",
          "unreal engine 5": "Unreal Engine 5",
          "lumen reflections": "Lumen反射",
          "nanite geometry": "Naniteジオメトリ",
          "8k uhd": "8K UHD",
          "octane render": "Octane Render",
          "realistic lighting": "リアルなライティング",
          "shiny hair": "輝く髪",
          "glossy hair": "艶のある髪",
          "Kodak Portra 400": "コダックPortra 400(フィルム風)",
          "low contrast": "低コントラスト",
          "pastel colors": "パステルカラー", "soft focus": "ソフトフォーカス", "dreamy": "夢のような",
          "kawaii": "可愛い", "airy atmosphere": "空気感", "fairy kei style": "フェアリー系",
          "watercolor medium": "水彩画媒体", "soft brush strokes": "柔らかな筆致", "wet on wet": "ウェット・オン・ウェット",
          "oil painting": "油絵", "impasto": "厚塗り", "thick brushwork": "厚い筆致", "textured canvas": "キャンバスの質感",
          "retro anime style": "レトロアニメ風", "cel animation type": "セル画風", "analog film noise": "フィルムノイズ",
          "ink wash painting": "水墨画", "sumi-e": "墨絵", "japanese traditional art": "日本伝統芸術",
          "fantasy concept art": "ファンタジーコンセプトアート", "digital painting": "デジタルペイント", "game art style": "ゲームアート風",
          "cyberpunk style": "サイバーパンク風", "chromatic aberration": "色収差", "futuristic city": "未来都市",
          "anime style": "アニメスタイル", "photorealistic": "フォトリアル", "smooth rendering": "滑らかな描写",
          "shiny skin": "ツヤ肌", "detailed skin texture": "詳細な肌の質感",
          "rim light": "リムライト(輪郭光)",
          "glossy highlights": "光沢のあるハイライト", "transparent skin texture": "透明感のある肌",
          "battle anime style": "バトルアニメ風",
          "action drawing": "アクションドローイング",
          "comic book style": "アメコミ風",
          "manga style": "マンガ風",
          "dark fantasy": "ダークファンタジー",
          "sakuga": "作画(サクガ)",
          "intense action": "激しいアクション",
          "impact frames": "インパクトフレーム",
          "dynamic angle": "ダイナミックなアングル",
          "rough sketch style": "ラフスケッチ風",
          "dynamic brushwork": "ダイナミックな筆致",
          "motion lines": "効果線",
          "speed lines": "集中線",
          "focus lines": "集中線",
          "sound effects": "描き文字(SFX)",
          "grimdark": "グリムダーク",
          "blood splatters": "返り血",
          "heavy atmosphere": "重厚な雰囲気",
          "atompunk": "アトムパンク",
          "cassette futurism": "カセットフューチャリズム",
          "raygun gothic": "レイガンゴシック",
          "synthwave": "シンセウェーブ",
          
          // 演出・時間・場所
          "idol focus": "アイドルにフォーカス", "live concert": "ライブコンサート", "stage lights": "ステージライト",
          "sparkles": "キラキラ", "soft ambient stage illumination": "柔らかなステージ照明", "light particles": "光の粒子",
          "low-angle close-up": "ローアングル接写", "cinematic glow": "シネマティックな輝き", "performance": "パフォーマンス",
          "cozy modern café": "モダンなカフェ", "indoor": "屋内", "window seat": "窓際の席", "coffee": "コーヒー", "sweets": "スイーツ",
          "string lights": "ストリングライト", "warm atmosphere": "温かい雰囲気", "relaxing": "リラックス",
          "school life": "学園生活", "classroom": "教室", "school uniform": "制服", "sunlight through window": "窓からの日差し",
          "desks and chairs": "机と椅子", "chalkboard": "黒板", "friends": "友達", "youthful": "青春",
          "date night": "夜のデート", "romantic atmosphere": "ロマンチックな雰囲気", "city lights": "街の灯り",
          "holding hands": "手を繋ぐ", "blush": "赤面", "fashionable clothes": "おしゃれな服", "restaurant": "レストラン", "dinner": "ディナー", "intimate": "親密",
          "epic battle": "壮大なバトル", "fighting": "戦闘", "dynamic action": "動的なアクション", "explosions": "爆発",
          "debris": "瓦礫", "ruins": "廃墟", "motion blur": "モーションブラー", "sparks": "火花",
          "slice of life": "日常系", "daily life": "日常生活", "casual atmosphere": "カジュアルな雰囲気", "soft sunlight": "柔らかな日差し",
          "peaceful": "平和", "detailed background": "詳細な背景", "street": "通り",
          "fantasy forest": "ファンタジーの森", "glowing plants": "光る植物", "magic particles": "魔法の粒子",
          "ancient trees": "古代樹", "mysterious": "神秘的", "fairy tale": "おとぎ話", "lush vegetation": "豊かな植生",
          "morning light": "朝の光", "light leaks": "光漏れ", "soft shadows": "柔らかな影", "fresh atmosphere": "爽やかな雰囲気", "white bed sheets": "白いシーツ",
          "sunlight through leaves": "木漏れ日", "dappled sunlight": "まだらな日差し", "tyndall effect": "チンダル現象", "nature focus": "自然重視", "forest background": "森の背景",
          "god rays": "ゴッドレイ", "dust particles": "舞う埃", "backlighting": "逆光", "soft ambient light": "柔らかな環境光", "warm white balance": "温かいホワイトバランス",
          "intense sunlight": "強い日差し", "cumulus clouds": "入道雲", "sharp focus": "シャープな焦点", "high contrast": "高コントラスト", "dynamic shadows": "ダイナミックな影", "summer vibes": "夏の雰囲気",
          "natural lighting": "自然光", "daylight": "日光", "neutral colors": "中間色", "realistic shadows": "リアルな影", "clear sky": "晴天",
          "harsh sunlight": "厳しい日差し", "strong shadows": "強い影", "lens flare": "レンズフレア", "heat haze": "陽炎", "saturated colors": "高彩度", "shimmering air": "揺らめく空気", "sweat": "汗",
          "golden hour": "ゴールデンアワー", "sunset": "夕日", "warm lighting": "温かい光", "orange and purple sky": "夕暮れの空", "long shadows": "長い影", "sentimental atmosphere": "センチメンタルな雰囲気",
          "strong backlighting": "強い逆光", "silhouette": "シルエット", "sun behind character": "背後に太陽", "glowing outline": "光る輪郭", "dramatic contrast": "劇的なコントラスト",
          "twilight": "黄昏", "blue hour": "ブルーアワー", "fading light": "消えゆく光", "street lights turning on": "街灯点灯", "nostalgic": "ノスタルジック", "melancholic": "メランコリック",
          "night city": "夜の街", "neon lights": "ネオンライト", "colorful bokeh": "カラフルなボケ", "wet street reflections": "濡れた路面の反射", "dark shadows": "暗い影",
          "moonlight": "月光", "full moon": "満月", "cold color palette": "寒色系パレット", "blue tint": "青み", "mysterious atmosphere": "神秘的な雰囲気", "soft glow": "柔らかな輝き", "dark ambient": "暗い環境",
          "darkness": "暗闇", "spotlight": "スポットライト", "chiaroscuro": "明暗法", "mystery": "ミステリー", "focus on face": "顔にフォーカス", "black background": "黒背景",
          "studio lighting": "スタジオライティング", "professional photography": "プロの写真", "perfect lighting": "完璧なライティング", "neutral background": "ニュートラルな背景", "softbox": "ソフトボックス", "high definition": "高精細", "clean visual": "クリーンな見た目",
          "rembrandt lighting": "レンブラントライティング", "dramatic shading": "ドラマチックな陰影", "triangle of light": "光の三角形", "classic painting style": "古典絵画風", "rich shadows": "豊かな影",
          "teal and orange": "ティール＆オレンジ", "anamorphic lens flare": "アナモルフィックレンズフレア", "widescreen": "ワイドスクリーン", "movie scene": "映画のワンシーン", "color grading": "カラーグレーディング", "dramatic atmosphere": "ドラマチックな雰囲気",
          
          // 追加: 具体的なシチュエーション用
          "cafe terrace": "カフェテラス", "sunset glow": "夕焼けの輝き", "relaxing after work": "仕事後のリラックス", "coffee cup": "コーヒーカップ",
          "school rooftop": "学校の屋上", "sunset city skyline": "夕暮れのスカイライン", "wind blowing hair": "風になびく髪", "fence": "フェンス", "clouds": "雲",
          "night cafe": "夜のカフェ", "dim lighting": "薄暗い照明", "warm string lights": "温かいストリングライト", "candle light": "キャンドルの光", "reflection in window": "窓の反射", "jazz bar vibes": "ジャズバーの雰囲気"
        };
        
        // 辞書登録: PRESET_DATA
        Object.values(PRESET_DATA).forEach(group => {
          group.forEach(item => {
            const parts = item.val.split(/,\s*/);
            parts.forEach(p => {
              const raw = p.replace(/^\(|\)$/g, "").split(":")[0];
              if (raw && !dict[raw]) dict[raw] = item.label; 
            });
          });
        });
        
        // 辞書登録: SITUATION_DATA
        Object.values(SITUATION_DATA).forEach(group => {
          group.forEach(item => {
            const parts = item.val.split(/,\s*/);
            parts.forEach(p => {
              const raw = p.replace(/^\(|\)$/g, "").split(":")[0];
              if (raw && !dict[raw]) dict[raw] = item.label; 
            });
          });
        });
        
        window.__outputTranslation.register(dict);
      }

      const parent = document.querySelector("#list-quality_preset") || container; parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      
      // 1. 画風・品質プリセット (Preset Sets)
      const secPresets = createMainSection("qp-presets", "📦 画風・品質プリセット (Art Styles & Quality)");
      // ★隠しコマンド実装
      let clickCount = 0;
      let clickTimer = null;
      secPresets.querySelector("summary").addEventListener("click", (e) => {
        clickCount++;
        if(clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 2000); 
        if (clickCount >= 5) {
          const isUnlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
          if (isUnlocked) {
            if (confirm("シークレットモードを解除（非表示）にしますか？")) {
              localStorage.removeItem("MY_SECRET_UNLOCK");
              location.reload();
            }
          } else {
            if (confirm("シークレットモードを解放しますか？")) {
              localStorage.setItem("MY_SECRET_UNLOCK", "true");
              location.reload();
            }
          }
          clickCount = 0;
        }
      });
      Object.entries(PRESET_DATA).forEach(([k,v]) => { secPresets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "preset")); });
      root.appendChild(secPresets);

      // 2. シチュエーション・環境 (Situations & Environment)
      const secSituation = createMainSection("qp-situations", "🎬 シチュエーション・環境 (Situations & Environment)");
      Object.entries(SITUATION_DATA).forEach(([k,v]) => { secSituation.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "situation")); });
      root.appendChild(secSituation);

      // その他セクション
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
    },
    getTags() { const tags = []; document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); }); return tags; }
  };

  if (!document.getElementById("qp-styles-css")) { const style = document.createElement('style'); style.id = "qp-styles-css"; style.textContent = `.qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; } .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; } .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; } .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; } .qp-content-grid input { margin-right:6px; flex-shrink: 0; }`; document.head.appendChild(style); }
  window.__registerPromptPart(KEY, VERSION, API);
})();

