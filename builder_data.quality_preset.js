(function(){
  "use strict";
  // データ格納箱を作成
  window.__QP_DB = {};

  // ■ 1. シチュエーション・環境 (Situations) ★ここを拡張していく
  window.__QP_DB.situations = {
    "🌅 朝のシチュエーション (Morning)": [
      { label: "爽やかな朝 (Fresh Morning)", val: "(morning light:1.3), (soft sunlight), (light leaks), (low contrast), (soft shadows), (fresh atmosphere), (depth of field), (white bed sheets)", links: ["ソフトライティング"] },
      { label: "木漏れ日 (Dappled Sunlight)", val: "(sunlight through leaves), (dappled sunlight), (tyndall effect), (nature focus), (soft focus), (forest background), (peaceful)", links: ["ボリュメトリック", "God Rays"] },
      { label: "窓辺の光 (Window Light)", val: "(sunlight through window), (god rays), (dust particles), (indoor), (backlighting), (soft ambient light), (warm white balance)", links: ["God Rays"] },
      { label: "朝のカフェ (Morning Cafe)", val: "(morning light:1.3), (cozy cafe), (sunlight through window), (steam rising from coffee), (fresh atmosphere), (white tablecloth), (soft focus), (peaceful morning)", links: ["座りポーズ"] },
      { label: "目覚めのベッド (Morning Bed)", val: "(morning light), (bedroom), (white bed sheets), (messy hair), (stretching), (light leaks), (soft shadows), (intimate), (pov)", links: ["伸びポーズ"] },
      { label: "登校中の通学路 (School Commute)", val: "(morning sunlight), (street to school), (cherry blossoms falling), (soft breeze), (school uniform), (lens flare), (youthful atmosphere), (clear sky)", links: ["立ちポーズ"] }
    ],
    "☀️ 昼のシチュエーション (Day)": [
      { label: "快晴・青空 (Sunny Day)", val: "(intense sunlight), (blue sky), (cumulus clouds), (vibrant colors), (sharp focus), (high contrast), (dynamic shadows), (summer vibes)", links: ["夏・海", "広角"] },
      { label: "日常・自然光 (Natural Day)", val: "(natural lighting), (daylight), (neutral colors), (realistic shadows), (clear sky), (casual atmosphere), (detailed background)" },
      { label: "真夏の日差し (Hard Sunlight)", val: "(harsh sunlight), (strong shadows), (lens flare), (heat haze), (saturated colors), (shimmering air), (sweat)", links: ["濡れた肌", "Wet Skin"] },
      { label: "昼の賑やかなカフェ (Lunch Cafe)", val: "(daylight), (modern cafe), (bustling atmosphere), (bright interior), (green plants), (sharp focus), (vibrant colors), (lunch time), (clear glass window)", links: ["座りポーズ"] },
      { label: "教室の休み時間 (Classroom)", val: "(daylight), (classroom), (sunlight pouring in), (blue sky outside window), (desks and chairs), (chalkboard), (friends chatting), (anime school life)", links: ["日常ポーズ"] },
      { label: "真夏のビーチ (Sunny Beach)", val: "(intense sunlight), (tropical beach), (blue ocean), (white sand), (cumulus clouds), (high contrast), (heat haze), (wet skin), (summer vibes)", links: ["濡れた肌"] },
      { label: "ショッピング街 (City Street)", val: "(city street), (shopping district), (clear blue sky), (fashionable shops), (crowd), (dynamic shadows), (casual date), (vibrant)", links: ["立ちポーズ"] }
    ],
    "🌇 夕方のシチュエーション (Evening)": [
      { label: "マジックアワー (Golden Hour)", val: "(golden hour:1.4), (sunset), (warm lighting), (orange and purple sky), (long shadows), (sentimental atmosphere), (cinematic lighting)", links: ["シネマティック"] },
      { label: "逆光・シルエット (Backlight)", val: "(strong backlighting), (rim light), (silhouette), (lens flare), (sun behind character), (glowing outline), (dramatic contrast)", links: ["リムライト"] },
      { label: "黄昏 (Twilight)", val: "(twilight), (blue hour), (fading light), (street lights turning on), (nostalgic), (soft bokeh), (melancholic)", links: ["ボケ"] },
      { label: "夕暮れのカフェ (Sunset Cafe)", val: "(golden hour:1.3), (cafe terrace), (warm orange lighting), (long shadows), (sunset glow), (relaxing after work), (nostalgic atmosphere), (coffee cup)", links: ["座りポーズ"] },
      { label: "放課後の教室 (Sunset Classroom)", val: "(sunset), (orange sky through window), (empty classroom), (silhouette against window), (sentimental), (dust particles), (magic hour), (shadows stretching)", links: ["黄昏"] },
      { label: "帰り道 (Evening Street)", val: "(twilight), (residential street), (telephone poles), (street lights turning on), (fading light), (emotional), (backlighting), (rim light)", links: ["日常ポーズ"] }
    ],
    "🌃 夜のシチュエーション (Night)": [
      { label: "都会のネオン (City Night)", val: "(night city), (neon lights), (colorful bokeh), (wet street reflections), (cyberpunk vibes), (high contrast), (cinematic lighting), (dark shadows)", links: ["サイバー・ネオン", "シネマティック"] },
      { label: "月明かり (Moonlight)", val: "(moonlight), (full moon), (cold color palette), (blue tint), (rim light), (mysterious atmosphere), (soft glow), (dark ambient)", links: ["リムライト"] },
      { label: "暗闇とスポット (Dark & Spotlight)", val: "(darkness), (spotlight), (chiaroscuro), (dramatic shadows), (mystery), (focus on face), (black background)", links: ["レイトレーシング"] },
      { label: "夜のカフェバー (Night Cafe Bar)", val: "(night cafe), (dim lighting), (warm string lights), (candle light), (romantic atmosphere), (bokeh background), (reflection in window), (jazz bar vibes)", links: ["座りポーズ", "シネマティック"] },
      { label: "ネオン街 (Cyber/Neon City)", val: "(night city), (neon signs), (cyberpunk vibes), (rainy street), (wet ground reflections), (high contrast), (colorful lights), (cinematic lighting)", links: ["サイバー・ネオン"] },
      { label: "月夜の寝室 (Moonlit Bedroom)", val: "(midnight), (dark bedroom), (moonlight through window), (blue tint), (cold atmosphere), (lonely), (dim ambient light), (shadows)", links: ["寝ポーズ"] },
      { label: "夜景デート (Night View)", val: "(observation deck), (city night view), (sparkling city lights), (bokeh), (couple atmosphere), (elegant), (dark sky), (stars)", links: ["キメポーズ"] }
    ],
    "📍 具体的な場所・シーン (Specific Locations)": [
      { label: "アイドルステージ (Live Stage)", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (light particles), (low-angle close-up), (cinematic glow), (performance)", links: ["シネマティック", "Cinematic"] },
      { label: "おしゃれカフェ (Modern Cafe)", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh), (warm atmosphere), (relaxing)" },
      { label: "学園・教室 (School Life)", val: "(school life), (classroom), (school uniform), (sunlight through window), (desks and chairs), (chalkboard), (friends), (youthful), (anime style)" },
      { label: "デートスポット (Date Night)", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner), (intimate)" },
      { label: "壮大なバトル (Epic Battle)", val: "(epic battle), (fighting), (dynamic action), (explosions), (debris), (ruins), (intense), (motion blur), (cinematic), (sparks)" },
      { label: "日常・スライスオブライフ (Slice of Life)", val: "(slice of life), (daily life), (casual atmosphere), (soft sunlight), (peaceful), (detailed background), (anime style), (street)" },
      { label: "ファンタジーの森 (Fantasy Forest)", val: "(fantasy forest), (glowing plants), (magic particles), (ancient trees), (mysterious), (fairy tale), (lush vegetation)", links: ["ファンタジー"] }
    ]
  };

  // ■ 2. 画風・品質 (Presets)
  window.__QP_DB.presets = {
    "⚠️ NSFWフラグ・基本 (NSFW Flags)": [
      { label: "NSFW", desc: "NSFWフラグ", val: "nsfw" },
      { label: "R-18", desc: "成人向け", val: "r18" },
      { label: "Explicit", desc: "露骨寄り", val: "explicit" }
    ],
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
      { label: "★究極・レンダリング (Ultimate Tech)", val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)", links: ["基本・最高画質", "安全セット", "キャラ・人物", "レイトレーシング", "UE5", "PBR", "SSS", "ボリュメトリック", "8K", "整った顔立ち"] },
      { label: "幻想・コンセプトアート", val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (intricate scenery), (game art style), (artstation), (majestic)", links: ["基本・最高画質", "背景・空間", "ファンタジー"] },
      { label: "サイバー・ネオン (Cyber Neon)", val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city), (night), (glowing outlines), (high contrast), (vibrant cyan and magenta)", links: ["物・メカ", "SF"] },
      { label: "アニメ・セミリアル (透明感)", val: "(anime style:1.3), (cel shading:1.2), (soft lighting), (smooth rendering), (glossy highlights), (shiny hair:1.3), (beautiful detailed eyes), (transparent skin texture), (rim light), (blush)", links: ["アニメ塗り", "ソフトライティング", "光沢/ツヤ肌", "リムライト"] },
      { label: "セミリアル・艶（アニメベース）", val: "(anime style:1.2), (photorealistic:1.2), (smooth rendering:1.3), (beautiful detailed eyes), (shiny skin:1.4), (glossy hair:1.3), (detailed skin texture:1.2), (cinematic lighting), (rim light), (soft focus)", links: ["アニメ塗り", "光沢/ツヤ肌", "濡れた肌", "シネマティック"] },
      { label: "超艶・粘液特化", val: "(anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (extremely detailed skin, face, hair, slime textures:1.3), (cinematic lighting:1.3), (wet glossy oil-like sheen:1.3), (translucent dripping slime glow:1.3), (highly reflective fluid highlights:1.3), (iridescent rainbow oil reflections:1.3), (vivid anime-like colors:1.3)", links: ["基本・最高画質", "キャラ・人物", "光沢/ツヤ肌", "濡れた肌", "SSS", "レイトレーシング"] },
      { label: "人物特化ハイエンド", val: "(intricate details:1.3), (extremely detailed skin, face, hair:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1), (high-fidelity hair:1.2), (ultra shiny hair:1.1), (individual hair strands:1.2), (micro-texture:1.2), (cinematic framing:1.2), (professional photography:1.2)", links: ["基本・最高画質", "フォトリアル", "キャラ・人物", "整った顔立ち", "リアルな肌", "SSS", "8K", "被写界深度"] },
      { label: "風景・背景特化", val: "(ultra detailed background:1.3), (scenery:1.3), (hyperrealistic landscape), (detailed water), (detailed sky), (detailed clouds), (lush vegetation), (atmospheric perspective), (cinematic composition), (epic scale)", links: ["基本・最高画質", "背景・空間", "ボリュメトリック", "8K", "広角"] },
      { label: "メカ・SF特化", val: "(ultra detailed mecha), (mechanical parts:1.3), (complex machinery), (metallic texture), (scratched metal), (glowing lights), (sci-fi atmosphere), (cybernetic), (hard surface modeling), (intricate panel lines)", links: ["物・メカ", "3Dレンダリング風", "PBR", "レイトレーシング", "ハードサーフェス"] }
    ],
    "⚔️ 戦闘・アクション画風 (Battle & Action Styles)": [
      { label: "バトルアニメ風 (作画)", val: "(battle anime style), (sakuga), (intense action), (impact frames), (dynamic angle), (highly detailed effects)", links: ["エフェクト"] },
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

  // ■ 3. その他 (Others)
  window.__QP_DB.styles = {
    "Art Styles": [
      { label: "アール・ヌーヴォー", val: "(art nouveau), (intricate decorative), (mucha style), (stained glass), (elegant curves)" },
      { label: "ゴシック", val: "(gothic style), (dark atmosphere), (lace), (frills), (architectural elements), (dark fantasy)" },
      { label: "スチームパンク", val: "(steampunk), (gears), (brass), (victorian clothing), (goggles), (steam), (mechanical parts)" },
      { label: "サイバーパンク", val: "(cyberpunk), (neon lights), (futuristic city), (cybernetics), (high tech), (rain), (night)" },
      { label: "浮世絵", val: "(ukiyo-e), (woodblock print), (japanese traditional style), (flat color), (outlines)" },
      { label: "ピクセルアート", val: "(pixel art), (16-bit), (retro game), (dot art)" },
      { label: "チビキャラ", val: "(chibi), (super deformed), (big head), (cute), (small body)" }
    ]
  };
  window.__QP_DB.eras = {
    "Eras": [
      { label: "1920s (Roaring Twenties)", val: "(1920s style), (flapper dress), (art deco), (jazz age), (retro fashion)" },
      { label: "1950s (Rockabilly)", val: "(1950s style), (rockabilly), (poodle skirt), (diner), (retro cars), (vintage)" },
      { label: "1980s (Retro Pop)", val: "(1980s style), (neon colors), (retro tech), (synthwave fashion), (leg warmers)" },
      { label: "1990s (Grunge/Anime)", val: "(1990s style), (grunge fashion), (retro anime aesthetic), (vhs quality)" },
      { label: "2000s (Y2K)", val: "(2000s style), (y2k fashion), (futuristic pop), (shiny materials), (flip phones)" }
    ]
  };
  window.__QP_DB.quality = {
    "Quality Boosters": [
      { label: "Masterpiece", val: "(masterpiece:1.2)" },
      { label: "Best Quality", val: "(best quality:1.2)" },
      { label: "Ultra Detailed", val: "(ultra detailed:1.2)" },
      { label: "8k Wallpaper", val: "(8k wallpaper)" },
      { label: "Highres", val: "(highres)" },
      { label: "HDR", val: "(hdr)" },
      { label: "RAW photo", val: "(raw photo)" }
    ]
  };
  window.__QP_DB.negatives = {
    "ネガティブプリセット": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" }
    ]
  };
  window.__QP_DB.secret = {
    label: "✨SECRET・管理者専用（セット）",
    desc: "標準の強化版。画質・光・質感を広く底上げ。（文字数:589）",
    val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (anime-realism blend:1.35), (semi-realistic rendering:1.2), (refined details:1.35), (clean edge definition:1.3), (fine texture detail:1.25), (cinematic lighting:1.3), (global illumination:1.25), (soft ambient occlusion:1.2), (controlled bloom:1.2), (natural skin translucency:1.2), (subtle skin glow:1.15), (silky hair highlights:1.2), (clear specular highlights:1.2), (material separation:1.2), (rich color depth:1.2), (smooth tonal gradation:1.2), (soft rim light:1.15), (volumetric glow:1.15), (light particles in air)",
    links: ["Masterpiece", "Best Quality", "Anime-Realism", "Refined Details", "Lighting", "Material"]
  };
  window.__QP_DB.secret_plain_lite = {
    label: "✨SECRET・管理者専用（セット・強調なし軽量）",
    desc: "ワード数軽め。普段使い・干渉少なめ。（文字数:486）",
    val: "masterpiece, best quality, ultra high resolution, refined details, clean edge definition, fine texture detail, anime-realism blend, semi-realistic rendering, cinematic lighting, soft ambient occlusion, global illumination, controlled bloom, natural skin translucency, subtle skin glow, silky hair highlights, clear specular highlights, material separation, fabric texture detail, soft rim light, backlight glow, volumetric glow, light particles, rich color depth, smooth tonal gradation",
    links: ["Masterpiece", "Best Quality", "Lightweight", "Details", "Lighting"]
  };
  window.__QP_DB.secret_limitbreak = {
    label: "✨SECRET・管理者専用（リミットブレイク）",
    desc: "強調あり。艶・反射・光を限界まで盛る。（文字数:702）",
    val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (anime-realism blend:1.4), (extreme refined details:1.35), (crisp detail definition:1.35), (clean edge definition:1.3), (fine texture detail:1.3), (cinematic lighting:1.45), (global illumination:1.35), (soft ambient occlusion:1.3), (controlled bloom:1.3), (crystal clear speculars:1.35), (layered light diffusion:1.3), (translucent skin glow:1.25), (silky hair highlights:1.35), (hard glossy reflections:1.3), (high energy highlights:1.3), (strong rim lighting:1.35), (backlight glow:1.35), (volumetric glow:1.3), (spark-like bokeh lights:1.25), (material separation:1.3), (glossy coated fabric:1.25), (dynamic light interaction:1.25)",
    links: ["Limit Break", "Specular", "Gloss", "Rim Light", "Material"]
  };
  window.__QP_DB.secret_transparency = {
    label: "✨SECRET・管理者専用（透明感）",
    desc: "肌、髪、空気、光の柔らかさ重視。（文字数:355）",
    val: "masterpiece, best quality, ultra high resolution, refined details, smooth tonal gradation, soft ambient occlusion, light diffusion, controlled bloom, translucent skin glow, subtle skin glow, silky hair highlights, clear specular highlights, soft rim light, backlight glow, volumetric glow, floating light particles, clean edge definition, rich color depth",
    links: ["Transparency", "Skin Glow", "Hair Highlights", "Soft Light"]
  };
  window.__QP_DB.secret_precision_material = {
    label: "✨SECRET・管理者専用（精密マテリアル）",
    desc: "布、金属、髪、肌、衣装の質感分離重視。（文字数:354）",
    val: "masterpiece, best quality, ultra high resolution, fine texture detail, material separation, different reflectivity for skin hair and clothing, fabric texture detail, polished surface reflection, glossy coated fabric, clear specular highlights, crisp detail definition, clean edge definition, soft ambient occlusion, global illumination, balanced contrast",
    links: ["Material", "Fabric", "Specular", "Texture"]
  };
  window.__QP_DB.cg_anime_glow = {
    label: "✨CGアニメ艶彩",
    desc: "とりあえずCGっぽく綺麗にしたい時向け",
    val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (CG animation:1.5), (anime style:1.2), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.2), (clean lineart), (soft natural lighting:1.2), (transparent glow:1.1), (ethereal pastel haze:1.1), (cinematic lighting:1.2), (global illumination:1.1), (ambient occlusion:1.1), (ray tracing-inspired effects:1.1), (depth haze:1.1), (UHD, ultra-sharp details:1.2), (vivid anime-like colors:1.2), (shiny hair:1.1), (subtle skin glow:1.1), (drifting particle lights:1.1), (soft bokeh sparkles:1.1), (subtle colored light reflection in air:1.1), (cinematic framing:1.1), (depth of field:1.1), (high-quality image:1.3)",
    links: ["CG Animation", "Anime-Realism", "Refined Shading", "Clean Lineart", "Global Illumination", "Ambient Occlusion", "Ray Tracing FX", "Soft Glow", "Bokeh", "Cinematic" ]
  };
  window.__QP_DB.cg_anime_glow_soft = {
    label: "✨CGアニメ艶彩・柔光版",
    desc: "ふんわり甘くしたい時向け",
    val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (CG animation:1.4), (anime style:1.2), (anime-realism blend:1.25), (semi-realistic rendering:1.2), (intricate details:1.25), (realistic textures:1.15), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.2), (clean lineart), (soft natural lighting:1.3), (transparent glow:1.2), (ethereal pastel haze:1.2), (cinematic lighting:1.2), (global illumination:1.15), (ambient occlusion:1.05), (ray tracing-inspired effects:1.05), (depth haze:1.15), (UHD, ultra-sharp details:1.2), (vivid anime-like colors:1.2), (shiny hair:1.1), (subtle skin glow:1.15), (drifting particle lights:1.15), (soft bokeh sparkles:1.15), (subtle colored light reflection in air:1.15), (cinematic framing:1.1), (depth of field:1.1), (high-quality image:1.3)",
    links: ["CG Animation", "Soft Glow", "Pastel Haze", "Global Illumination", "Particle Lights", "Bokeh", "Soft Skin Glow", "Cinematic" ]
  };
  window.__QP_DB.cg_anime_glow_hard = {
    label: "✨CGアニメ艶彩・硬質版",
    desc: "面と材質を締めたい時向け",
    val: "(masterpiece:1.35), (best quality:1.35), (ultra high resolution:1.3), (CG animation:1.5), (anime style:1.15), (anime-realism blend:1.35), (semi-realistic rendering:1.25), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.3), (clean lineart), (cinematic lighting:1.3), (global illumination:1.15), (ambient occlusion:1.15), (ray tracing-inspired effects:1.15), (depth haze:1.05), (specular control:1.1), (clean material separation:1.1), (UHD, ultra-sharp details:1.25), (vivid anime-like colors:1.2), (shiny hair:1.15), (subtle skin glow:1.05), (drifting particle lights:1.05), (soft bokeh sparkles:1.05), (subtle colored light reflection in air:1.05), (cinematic framing:1.15), (depth of field:1.1), (high-quality image:1.3)",
    links: ["CG Animation", "Anime-Realism", "Refined Shading", "AO", "Ray Tracing FX", "Material Separation", "Sharper Details", "Cinematic" ]
  };
  window.__QP_DB.cg_anime_glow_warm = {
    label: "✨CGアニメ艶彩・暖色夕景版",
    desc: "教室・夕日・赤面・恋愛イベント向け",
    val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (CG animation:1.45), (anime style:1.2), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.25), (realistic textures:1.15), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.2), (clean lineart), (soft natural lighting:1.25), (golden hour lighting:1.3), (warm backlight glow:1.2), (sunset amber haze:1.2), (cinematic lighting:1.2), (global illumination:1.15), (ambient occlusion:1.05), (ray tracing-inspired effects:1.05), (depth haze:1.15), (UHD, ultra-sharp details:1.2), (vivid anime-like colors:1.2), (shiny hair:1.1), (subtle skin glow:1.15), (drifting particle lights:1.15), (soft bokeh sparkles:1.15), (warm light bloom:1.15), (gold dust in air:1.1), (cinematic framing:1.1), (depth of field:1.1), (high-quality image:1.3)",
    links: ["CG Animation", "Golden Hour", "Warm Backlight", "Sunset Haze", "Particle Lights", "Warm Bloom", "Soft Skin Glow", "Cinematic" ]
  };
  window.__QP_DB.cg_anime_glow_cool = {
    label: "✨CGアニメ艶彩・青白クール版",
    desc: "夜・青照明・黒衣装・クール顔向け",
    val: "(masterpiece:1.35), (best quality:1.35), (ultra high resolution:1.3), (CG animation:1.5), (anime style:1.15), (anime-realism blend:1.35), (semi-realistic rendering:1.25), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin, face, hair, background:1.2), (refined shading:1.3), (clean lineart), (cinematic lighting:1.3), (cool rim lighting:1.2), (blue-white glow:1.2), (cold atmospheric haze:1.15), (global illumination:1.15), (ambient occlusion:1.15), (ray tracing-inspired effects:1.15), (depth haze:1.05), (specular control:1.1), (clean material separation:1.1), (UHD, ultra-sharp details:1.25), (vivid anime-like colors:1.15), (shiny hair:1.15), (subtle skin glow:1.05), (drifting particle lights:1.1), (soft bokeh sparkles:1.05), (cool light bloom:1.1), (crisp luminous air:1.1), (cinematic framing:1.15), (depth of field:1.1), (high-quality image:1.3)",
    links: ["CG Animation", "Cool Rim Light", "Blue-White Glow", "Cold Haze", "AO", "Material Separation", "Sharper Details", "Cinematic" ]
  };
  window.__QP_DB.secret_boost_camera_portrait = {
    label: "✨SECRET・ポートレートブースト",
    desc: "顔・上半身・視線誘導を強める加算用ブースト（文字数:255）",
    val: "(cinematic portrait crop), (portrait composition), (close-up upper body focus), (subject-centered framing), (focus on eyes), (85mm portrait lens look), (delicate facial lighting), (soft depth of field), (background compression), (camera-aware composition)",
    links: ["Portrait", "Close-up", "Focus on Eyes", "Camera"]
  };
  window.__QP_DB.secret_boost_camera_cinematic = {
    label: "✨SECRET・シネマティックカメラブースト",
    desc: "画角・構図・映画的ショット感を足す加算用ブースト（文字数:203）",
    val: "(dynamic camera angle), (cinematic framing), (camera tilt), (depth of field:1.1), (foreground framing), (shot composition emphasis), (lens compression), (visual storytelling shot), (dramatic perspective)",
    links: ["Cinematic", "Camera Angle", "Framing"]
  };
  window.__QP_DB.secret_boost_mood_candle_rose = {
    label: "✨SECRET・燭光ローズムード",
    desc: "蝋燭・薔薇・赤い空気感を足す加算用ムードブースト（文字数:201）",
    val: "(candlelight glow), (rose petal ambience), (warm crimson ambience), (romantic mood), (seductive atmosphere), (soft flickering light), (velvet-like shadows), (luxurious red accent light), (intimate air)",
    links: ["Candlelight", "Rose", "Mood"]
  };
  window.__QP_DB.secret_boost_mood_midnight = {
    label: "✨SECRET・ミッドナイトムード",
    desc: "夜・静けさ・妖しい余韻を足す加算用ムードブースト（文字数:162）",
    val: "(midnight atmosphere), (cool nocturnal air), (blue-violet ambience), (quiet dramatic mood), (night glow), (soft darkness), (afterglow haze), (mysterious elegance)",
    links: ["Midnight", "Night", "Mood"]
  };
  window.__QP_DB.secret_boost_material_luxury = {
    label: "✨SECRET・ラグジュアリーマテリアルブースト",
    desc: "布・金属・宝飾の材質差を強める加算用ブースト（文字数:233）",
    val: "(separate material response), (different reflectivity for skin and clothing), (luxury fabric sheen), (glossy coated fabric), (mirror-like costume highlights), (fine jewelry reflections), (material realism), (premium polished surface)",
    links: ["Material", "Luxury", "Gloss"]
  };
  window.__QP_DB.secret_boost_material_render = {
    label: "✨SECRET・レンダー技術ブースト",
    desc: "エンジン名なしでPBR・反射・シェーダ質感を足す加算用ブースト（文字数:374）",
    val: "(physically based lighting), (ray-traced reflections), (shader-like material response), (subsurface scattering), (anisotropic highlights), (micro-surface detail), (realistic material response), (polished surface reflections), (clear specular highlights), (ambient occlusion), (volumetric lighting), (high dynamic range lighting), (global illumination), (material separation)",
    links: ["PBR", "Shader", "Reflection", "Material"]
  };
  window.__QP_DB.secret_boost_liquid_wet_sheen = {
    label: "✨SECRET・濡れ艶ブースト",
    desc: "水分による艶・反射・湿度感を足す加算用ブースト（文字数:192）",
    val: "(wet surface sheen), (subtle water sheen), (tiny water droplets), (glossy highlights on skin), (controlled wet speculars), (light reflecting on moisture), (soft humid air), (fresh wet texture)",
    links: ["Wet Surface", "Droplets", "Specular"]
  };
  window.__QP_DB.secret_boost_liquid_reflection = {
    label: "✨SECRET・液体反射ブースト",
    desc: "水滴・液膜・反射光を強める液体表現ブースト（文字数:186）",
    val: "(clear liquid surface), (rippling reflections), (liquid surface tension), (transparent water highlights), (caustic light accents), (fluid gloss), (thin liquid film), (sparkling droplets)",
    links: ["Liquid", "Reflection", "Caustics"]
  };
  window.__QP_DB.secret_boost_skinlighting_translucency = {
    label: "✨SECRET・肌透過光ブースト",
    desc: "肌の透明感・血色・柔らかい光を足す加算用ブースト（文字数:200）",
    val: "(natural skin translucency), (subsurface skin glow), (soft cheek light), (gentle skin highlights), (warm skin undertone), (smooth tonal gradation), (soft ambient bounce light), (delicate skin shading)",
    links: ["Skin Light", "Translucency", "Soft Glow"]
  };
  window.__QP_DB.secret_boost_skinlighting_soft_highlight = {
    label: "✨SECRET・柔肌ハイライトブースト",
    desc: "肌ハイライト・影のつながり・顔周りの発光感を整えるブースト（文字数:202）",
    val: "(silky skin highlights), (controlled skin bloom), (soft rim light on skin), (natural face glow), (clean shadow transitions), (fine skin texture detail), (healthy skin luminosity), (soft reflected light)",
    links: ["Skin Highlight", "Face Glow", "Soft Light"]
  };

})();
