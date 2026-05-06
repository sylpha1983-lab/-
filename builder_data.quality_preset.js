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
  window.__QP_DB.secret_mood_candle_rose = {
    label: "燭光ローズムード",
    desc: "蝋燭・薔薇・赤い空気感を足す加算用ムードブースト（文字数:201）",
    val: "(candlelight glow), (rose petal ambience), (warm crimson ambience), (romantic mood), (seductive atmosphere), (soft flickering light), (velvet-like shadows), (luxurious red accent light), (intimate air)",
    links: ["Candlelight", "Rose", "Crimson", "Intimate Mood"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_midnight = {
    label: "ミッドナイトムード",
    desc: "夜・静けさ・妖しい余韻を足す加算用ムードブースト（文字数:162）",
    val: "(midnight atmosphere), (cool nocturnal air), (blue-violet ambience), (quiet dramatic mood), (night glow), (soft darkness), (afterglow haze), (mysterious elegance)",
    links: ["Midnight", "Nocturnal", "Blue-Violet", "Afterglow"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_dreamy = {
    label: "夢幻ムードブースト",
    desc: "夢っぽい霞・やわらかな発光・幻想感を足す加算用ムードブースト（文字数:177）",
    val: "(dreamlike ambience), (soft haze), (ethereal atmosphere), (floating light motes), (gentle glow), (airy softness), (fantasy dream mood), (delicate ambient shimmer)",
    links: ["Dreamlike", "Ethereal", "Light Motes", "Ambient Shimmer"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_sacred = {
    label: "神聖ムードブースト",
    desc: "神聖感・清浄感・祝福光を足す加算用ムードブースト（文字数:163）",
    val: "(sacred atmosphere), (holy glow), (reverent light), (purified air), (divine ambience), (soft blessing light), (serene holy space), (radiant solemnity)",
    links: ["Sacred", "Holy Glow", "Divine", "Solemnity"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_gloom = {
    label: "退廃ダークムードブースト",
    desc: "退廃感・重い空気・耽美な暗さを足す加算用ムードブースト（文字数:169）",
    val: "(decadent atmosphere), (dark elegance), (velvet gloom), (smoky shadows), (somber mood), (faded luxury), (melancholic ambience), (dramatic darkness)",
    links: ["Decadent", "Dark Elegance", "Smoky Shadows", "Melancholic"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_luxury = {
    label: "高級感ムードブースト",
    desc: "高級感・華やかさ・上質な空気感を足す加算用ムードブースト（文字数:173）",
    val: "(luxurious ambience), (rich atmosphere), (premium mood), (elegant opulence), (refined glamour), (ornate air), (wealthy interior aura), (golden ambient richness)",
    links: ["Luxury", "Opulence", "Glamour", "Golden Richness"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_festival = {
    label: "祝祭ムードブースト",
    desc: "祝祭感・賑わい・楽しい高揚感を足す加算用ムードブースト（文字数:194）",
    val: "(festive atmosphere), (celebratory ambience), (joyful glow), (lively festive air), (sparkling celebration lights), (happy mood), (ceremonial warmth), (colorful festive sparkle)",
    links: ["Festive", "Celebration", "Joyful Glow", "Ceremonial"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_rainy = {
    label: "雨夜ムードブースト",
    desc: "雨夜の静けさ・濡れた光・しっとりした情緒を足す加算用ムードブースト（文字数:175）",
    val: "(rainy night ambience), (wet urban glow), (dim reflections), (quiet rain mood), (cool damp air), (neon reflected puddles), (lonely atmosphere), (soft rain haze)",
    links: ["Rainy Night", "Wet Glow", "Reflections", "Rain Haze"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_passion = {
    label: "情熱ムードブースト",
    desc: "熱量・情念・緊張感のある空気を足す加算用ムードブースト（文字数:189）",
    val: "(passionate atmosphere), (heated ambience), (intense emotional air), (warm dramatic glow), (crimson emotional light), (heart-pounding mood), (sensual tension), (burning ambient warmth)",
    links: ["Passionate", "Heated", "Crimson Light", "Sensual Tension"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_mood_boosts = [window.__QP_DB.secret_mood_candle_rose, window.__QP_DB.secret_mood_midnight, window.__QP_DB.secret_mood_dreamy, window.__QP_DB.secret_mood_sacred, window.__QP_DB.secret_mood_gloom, window.__QP_DB.secret_mood_luxury, window.__QP_DB.secret_mood_festival, window.__QP_DB.secret_mood_rainy, window.__QP_DB.secret_mood_passion];

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
  window.__QP_DB.secret_boost_camera_bustup = {
    label: "✨SECRET・バストアップブースト",
    desc: "バストアップ寄りの見せ方を強める加算用ブースト。表情と上半身を見せたい時向け（文字数:192）",
    val: "(bust-up composition), (chest-up framing), (face and shoulders emphasis), (portrait crop), (expressive upper body shot), (upper torso focus), (close character presentation), (intimate framing)",
    links: ["Bust-up", "Upper Body", "Portrait", "Framing"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_camera_fullbody = {
    label: "✨SECRET・全身構図ブースト",
    desc: "全身をきれいに収める加算用ブースト。衣装やポーズを見せたい時向け（文字数:215）",
    val: "(full body composition), (head-to-toe framing), (complete character silhouette), (full figure emphasis), (standing pose visibility), (costume visibility), (balanced full-body framing), (character proportion clarity)",
    links: ["Full Body", "Silhouette", "Costume", "Pose"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_camera_lowangle = {
    label: "✨SECRET・ローアングルブースト",
    desc: "ローアングルの迫力を足す加算用ブースト。強さや支配感を出したい時向け（文字数:186）",
    val: "(low angle shot), (upward camera view), (powerful perspective), (dramatic foreshortening), (heroic angle), (towering composition), (visual impact through angle), (strong upward emphasis)",
    links: ["Low Angle", "Perspective", "Foreshortening", "Heroic"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_camera_lookup = {
    label: "✨SECRET・見上げ構図ブースト",
    desc: "見上げ構図を強める加算用ブースト。相手を大きく見せたい時向け（文字数:213）",
    val: "(looking-up composition), (viewer-from-below angle), (upward gaze framing), (soft towering perspective), (intimate upward viewpoint), (emotional emphasis through angle), (skyward composition), (lifted perspective)",
    links: ["Looking Up", "Upward View", "Gaze", "Perspective"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_camera_cinematic_closeup = {
    label: "✨SECRET・映画的クローズアップブースト",
    desc: "顔や視線へ強く寄せる加算用ブースト。感情・緊張感・親密感を出したい時向け（文字数:208）",
    val: "(cinematic close-up), (dramatic facial close-up), (tight portrait framing), (focused eye contact), (shallow depth of field), (soft background blur), (emotional close framing), (film-like close-up composition)",
    links: ["Close-up", "Eye Contact", "Depth of Field", "Cinematic"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_camera_profile = {
    label: "✨SECRET・横顔ポートレートブースト",
    desc: "横顔の印象を強める加算用ブースト。横顔美人・静かな演出向け（文字数:203）",
    val: "(side profile portrait), (profile face emphasis), (elegant side view), (silhouette-rich composition), (nose and jawline definition), (profile lighting), (serene sideways gaze), (refined portrait profile)",
    links: ["Side Profile", "Portrait", "Silhouette", "Profile Lighting"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_camera_depth = {
    label: "✨SECRET・奥行き構図ブースト",
    desc: "前後の奥行きを強める加算用ブースト。空間の広がりを見せたい時向け（文字数:206）",
    val: "(depth-rich composition), (foreground-background layering), (spatial depth), (perspective emphasis), (layered scene composition), (atmospheric depth), (strong sense of distance), (immersive scene structure)",
    links: ["Depth", "Layering", "Perspective", "Atmosphere"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_camera_boosts = [window.__QP_DB.secret_boost_camera_portrait, window.__QP_DB.secret_boost_camera_cinematic, window.__QP_DB.secret_boost_camera_bustup, window.__QP_DB.secret_boost_camera_fullbody, window.__QP_DB.secret_boost_camera_lowangle, window.__QP_DB.secret_boost_camera_lookup, window.__QP_DB.secret_boost_camera_cinematic_closeup, window.__QP_DB.secret_boost_camera_profile, window.__QP_DB.secret_boost_camera_depth];
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
  window.__QP_DB.secret_boost_mood_gothic_velvet = {
    label: "✨SECRET・ゴシックヴェルヴェットムード",
    desc: "重厚な影・ベルベット感・退廃的な高級感を足す加算用ムードブースト（文字数:196）",
    val: "(gothic ambience), (velvet shadows), (deep crimson mood), (ornate darkness), (luxurious gloom), (dramatic interior air), (dark romantic atmosphere), (elegant decadent aura), (rich shadow layering)",
    links: ["Gothic", "Velvet", "Dark Romance"]
  };
  window.__QP_DB.secret_boost_mood_dreamy_haze = {
    label: "✨SECRET・ドリーミーヘイズムード",
    desc: "柔らかな霞・夢見心地・淡い発光感を足す加算用ムードブースト（文字数:196）",
    val: "(dreamy atmosphere), (soft haze), (pastel air), (gentle floating light), (faint glow mist), (tender dreamy mood), (blurred luminous ambience), (airy fantasy atmosphere), (soft emotional afterglow)",
    links: ["Dreamy", "Haze", "Soft Glow"]
  };
  window.__QP_DB.secret_boost_mood_celestial = {
    label: "✨SECRET・聖光セレストムード",
    desc: "神聖な光・静かな清浄感・天上的な空気を足す加算用ムードブースト（文字数:197）",
    val: "(sacred light ambience), (celestial glow), (holy atmosphere), (soft divine radiance), (serene luminous air), (pure ambient light), (graceful sacred mood), (ethereal calm), (heavenly glow particles)",
    links: ["Sacred", "Celestial", "Holy Light"]
  };
  window.__QP_DB.secret_boost_mood_rain_melancholy = {
    label: "✨SECRET・雨夜メランコリームード",
    desc: "雨夜の湿度・孤独感・静かな感傷を足す加算用ムードブースト（文字数:198）",
    val: "(rainy night atmosphere), (melancholic mood), (wet city air), (soft reflected lights), (lonely ambience), (cool damp haze), (quiet emotional rain scene), (rain-soaked melancholy), (muted night glow)",
    links: ["Rainy Night", "Melancholy", "Wet Air"]
  };
  window.__QP_DB.secret_boost_mood_festival_glow = {
    label: "✨SECRET・祝祭グロウムード",
    desc: "華やぎ・祝祭感・明るい熱量を足す加算用ムードブースト（文字数:210）",
    val: "(festive atmosphere), (warm celebratory glow), (joyful ambience), (sparkling decorative light), (lively air), (cheerful warm scene mood), (festive illumination), (glowing celebration), (bright emotional energy)",
    links: ["Festival", "Celebration", "Warm Glow"]
  };
  window.__QP_DB.secret_boost_mood_ether = {
    label: "✨SECRET・幻想エーテルムード",
    desc: "幻想感・魔法感・ふわりとした異世界空気を足す加算用ムードブースト（文字数:204）",
    val: "(ethereal atmosphere), (mystic ambient glow), (fantasy air), (floating light particles), (soft surreal ambience), (otherworldly haze), (enchanted scene mood), (delicate magical glow), (airy mystical calm)",
    links: ["Ethereal", "Fantasy", "Mystic"]
  };
  window.__QP_DB.secret_boost_mood_decadence = {
    label: "✨SECRET・退廃デカダンスムード",
    desc: "退廃・色香・夜更けの濃密な高級感を足す加算用ムードブースト（文字数:200）",
    val: "(decadent atmosphere), (faded luxury), (sensual shadow mood), (tired glamorous air), (opulent melancholy), (lingering perfume haze), (dark elegance), (withered beauty ambience), (late-night decadence)",
    links: ["Decadent", "Luxury", "Dark Elegance"]
  };
  window.__QP_DB.secret_boost_mood_neon_noir = {
    label: "✨SECRET・ネオンノワールムード",
    desc: "都会夜景・ネオン反射・ノワール感を足す加算用ムードブースト（文字数:200）",
    val: "(neon noir atmosphere), (electric city glow), (pink-blue ambient light), (urban night mood), (sleek noir air), (neon reflections), (cyber city ambience), (stylish nightlife mood), (rainy neon shimmer)",
    links: ["Neon Noir", "Urban Night", "Reflections"]
  };
    window.__QP_DB.secret_boost_mood_moon_silver = {
    label: "✨SECRET・月光シルバームード",
    desc: "月光・銀色の光・静かな夜気を足す加算用ムードブースト（文字数:191）",
    val: "(silver moonlight ambience), (cool lunar glow), (pale blue-white atmosphere), (quiet moonlit air), (soft silver rim light), (night breeze mood), (calm lunar haze), (serene nocturnal radiance)",
    links: ["Moonlight", "Silver", "Nocturnal", "Cool Glow"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_mood_twilight_amber = {
    label: "✨SECRET・黄昏アンバームード",
    desc: "黄昏のアンバー光・夕暮れの余韻・懐かしい空気を足す加算用ムードブースト（文字数:190）",
    val: "(twilight amber atmosphere), (golden dusk glow), (orange-violet sky mood), (warm fading sunlight), (nostalgic evening air), (soft amber haze), (sunset emotional glow), (gentle dusk ambience)",
    links: ["Twilight", "Amber", "Sunset", "Nostalgia"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_mood_snow_sheer = {
    label: "✨SECRET・雪景シアームード",
    desc: "雪景色・白い冷気・繊細な冬の透明感を足す加算用ムードブースト（文字数:186）",
    val: "(snowy sheer atmosphere), (soft white winter air), (falling snow mood), (pale cold glow), (quiet snowfield ambience), (crystal-clear winter light), (frosty haze), (delicate snow sparkle)",
    links: ["Snow", "Winter", "Frost", "Sheer Light"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_mood_royal_grand = {
    label: "✨SECRET・王宮グランドムード",
    desc: "王宮・大広間・儀式感のある豪華な空気を足す加算用ムードブースト（文字数:190）",
    val: "(royal grand atmosphere), (palace-like ambience), (majestic interior mood), (ornate golden light), (ceremonial elegance), (noble spacious air), (grand hall radiance), (regal luxury presence)",
    links: ["Royal", "Palace", "Grand Hall", "Regal"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_mood_deepsea_abyss = {
    label: "✨SECRET・深海アビスムード",
    desc: "深海の青暗さ・水圧感・微かな発光を足す加算用ムードブースト（文字数:192）",
    val: "(deep sea ambience), (abyssal blue atmosphere), (submerged darkness), (bioluminescent glimmers), (quiet aquatic depth), (mysterious underwater haze), (cold pressure mood), (distant ocean glow)",
    links: ["Deep Sea", "Abyss", "Bioluminescence", "Underwater"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_mood_battle_tension = {
    label: "✨SECRET・戦場テンションムード",
    desc: "戦闘前後の緊張感・火花・張りつめた空気を足す加算用ムードブースト（文字数:191）",
    val: "(battlefield tension), (charged atmosphere), (dusty dramatic air), (sparks in the air), (impending clash mood), (high-stakes ambience), (tense cinematic light), (warrior confrontation energy)",
    links: ["Battlefield", "Tension", "Sparks", "Confrontation"],
    addOn: true,
    role: "boost"
  };
window.__QP_DB.secret_mood_boosts = [window.__QP_DB.secret_boost_mood_candle_rose, window.__QP_DB.secret_boost_mood_midnight, window.__QP_DB.secret_boost_mood_gothic_velvet, window.__QP_DB.secret_boost_mood_dreamy_haze, window.__QP_DB.secret_boost_mood_celestial, window.__QP_DB.secret_boost_mood_rain_melancholy, window.__QP_DB.secret_boost_mood_festival_glow, window.__QP_DB.secret_boost_mood_ether, window.__QP_DB.secret_boost_mood_decadence, window.__QP_DB.secret_boost_mood_neon_noir, window.__QP_DB.secret_boost_mood_moon_silver, window.__QP_DB.secret_boost_mood_twilight_amber, window.__QP_DB.secret_boost_mood_snow_sheer, window.__QP_DB.secret_boost_mood_royal_grand, window.__QP_DB.secret_boost_mood_deepsea_abyss, window.__QP_DB.secret_boost_mood_battle_tension];

  window.__QP_DB.secret_boost_material_luxury = {
    label: "✨SECRET・ラグジュアリーマテリアルブースト",
    desc: "布・金属・宝飾の材質差を強める加算用ブースト（文字数:233）",
    val: "(separate material response), (different reflectivity for skin and clothing), (luxury fabric sheen), (glossy coated fabric), (mirror-like costume highlights), (fine jewelry reflections), (material realism), (premium polished surface)",
    links: ["Material", "Luxury", "Gloss"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_render = {
    label: "✨SECRET・レンダー技術ブースト",
    desc: "エンジン名なしでPBR・反射・シェーダ質感を足す加算用ブースト（文字数:374）",
    val: "(physically based lighting), (ray-traced reflections), (shader-like material response), (subsurface scattering), (anisotropic highlights), (micro-surface detail), (realistic material response), (polished surface reflections), (clear specular highlights), (ambient occlusion), (volumetric lighting), (high dynamic range lighting), (global illumination), (material separation)",
    links: ["PBR", "Shader", "Reflection", "Material"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_metal_reflection = {
    label: "✨SECRET・金属反射ブースト",
    desc: "金属の反射・硬質感・エッジハイライトを強める加算用ブースト（文字数:217）",
    val: "(polished metal reflection), (brushed metal texture), (sharp metallic speculars), (cool metal luster), (hard surface reflections), (clean metal material separation), (reflective armor accents), (metal edge highlights)",
    links: ["Metal", "Reflection", "Hard Surface", "Armor"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_jewelry = {
    label: "✨SECRET・宝石装飾ブースト",
    desc: "宝石・金銀装飾・アクセサリーのきらめきを強める加算用ブースト（文字数:206）",
    val: "(gemstone sparkle), (faceted jewel highlights), (crystal-cut reflections), (ornate jewelry detail), (precious stone clarity), (gold and silver accents), (tiny specular glints), (luxury accessory definition)",
    links: ["Jewelry", "Gemstone", "Gold", "Accessory"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_silk_satin = {
    label: "✨SECRET・シルク・サテン布ブースト",
    desc: "シルクやサテンの滑らかな光沢と布の流れを足す加算用ブースト（文字数:195）",
    val: "(silk fabric sheen), (satin smooth highlights), (flowing fabric luster), (soft glossy folds), (delicate textile shine), (luxury dress material), (smooth cloth reflections), (elegant fabric drape)",
    links: ["Silk", "Satin", "Fabric", "Dress"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_velvet = {
    label: "✨SECRET・ベルベット布ブースト",
    desc: "ベルベットの深い影・起毛感・高級布の重さを足す加算用ブースト（文字数:183）",
    val: "(velvet fabric texture), (deep matte fabric), (soft pile texture), (rich dark cloth), (subtle velvet sheen), (luxurious shadowed folds), (dense textile depth), (noble velvet material)",
    links: ["Velvet", "Fabric", "Noble Cloth", "Texture"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_leather = {
    label: "✨SECRET・レザー艶ブースト",
    desc: "革のシボ・艶・折れ目を強める加算用ブースト（文字数:204）",
    val: "(leather grain detail), (glossy leather highlights), (worn leather texture), (tight leather sheen), (soft creases in leather), (polished leather surface), (dark leather luster), (premium leather material)",
    links: ["Leather", "Grain", "Gloss", "Texture"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_transparent = {
    label: "✨SECRET・透明素材ブースト",
    desc: "ガラス・透明布・アクリル風の透け感と屈折光を足す加算用ブースト（文字数:205）",
    val: "(transparent material), (translucent fabric layer), (clear acrylic shine), (glass-like surface), (refractive highlights), (see-through material depth), (soft transparency glow), (delicate edge reflections)",
    links: ["Transparent", "Glass", "Acrylic", "Refraction"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_magic_crystal = {
    label: "✨SECRET・魔法結晶ブースト",
    desc: "魔法結晶・鉱石・ファンタジー宝石の発光と反射を足す加算用ブースト（文字数:202）",
    val: "(magical crystal texture), (glowing crystal facets), (prismatic reflections), (enchanted gem glow), (crystal edge highlights), (inner luminous core), (fantasy mineral clarity), (arcane material sparkle)",
    links: ["Crystal", "Magic", "Prism", "Fantasy"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_mecha_metal = {
    label: "✨SECRET・メカ金属ブースト",
    desc: "ロボット・義手・メカ装甲向けの金属パネル感を足す加算用ブースト（文字数:217）",
    val: "(mecha metal panels), (mechanical surface detail), (hard-surface panel lines), (painted metal finish), (scratched metal edges), (industrial material response), (robot armor reflections), (precision mechanical texture)",
    links: ["Mecha", "Metal Panels", "Robot Armor", "Hard Surface"],
    addOn: true,
    role: "boost"
  };
    window.__QP_DB.secret_boost_material_pearl_luster = {
    label: "✨SECRET・パール光沢ブースト",
    desc: "真珠のような乳白光沢・虹色の反射・上品な艶を足す加算用ブースト（文字数:200）",
    val: "(pearl luster), (iridescent pearl sheen), (soft nacre highlights), (milky reflective surface), (subtle rainbow reflection), (elegant pearlescent glow), (smooth shell-like shine), (luxury pearl finish)",
    links: ["Pearl", "Iridescent", "Nacre", "Luster"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_embroidery = {
    label: "✨SECRET・刺繍・装飾布ブースト",
    desc: "刺繍・金糸・レース・織り柄の細かい装飾布を足す加算用ブースト（文字数:203）",
    val: "(embroidery detail), (ornate stitched fabric), (gold thread accents), (raised textile ornament), (decorative woven pattern), (fine lace trim), (intricate brocade texture), (luxury stitched embellishment)",
    links: ["Embroidery", "Gold Thread", "Brocade", "Lace"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_ceramic_porcelain = {
    label: "✨SECRET・セラミック・磁器ブースト",
    desc: "陶器・磁器・釉薬のつるんとした硬い光沢を足す加算用ブースト（文字数:207）",
    val: "(ceramic surface), (porcelain gloss), (smooth glazed material), (clean white reflective finish), (delicate ceramic highlights), (hard polished porcelain), (subtle glaze reflection), (refined ceramic clarity)",
    links: ["Ceramic", "Porcelain", "Glaze", "Gloss"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_carbon_industrial = {
    label: "✨SECRET・カーボン・工業素材ブースト",
    desc: "カーボン・複合材・工業素材のハイテクな質感を足す加算用ブースト（文字数:222）",
    val: "(carbon fiber texture), (industrial composite material), (matte technical surface), (woven carbon pattern), (synthetic hard-surface finish), (precision material weave), (dark composite sheen), (high-tech material response)",
    links: ["Carbon Fiber", "Industrial", "Composite", "High-Tech"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_rubber_latex = {
    label: "✨SECRET・ラバー・ラテックスブースト",
    desc: "ラバーやラテックスの滑らかな艶・伸縮素材感を足す加算用ブースト（文字数:210）",
    val: "(rubber material sheen), (latex glossy surface), (smooth elastic texture), (tight specular highlights), (black rubber luster), (stretchy coated material), (slick synthetic shine), (controlled latex reflections)",
    links: ["Rubber", "Latex", "Gloss", "Synthetic"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_material_aged_metal = {
    label: "✨SECRET・古金属・風化ブースト",
    desc: "古金属・酸化・傷・風化したアンティーク感を足す加算用ブースト（文字数:204）",
    val: "(aged metal texture), (oxidized patina), (weathered metal edges), (scratched antique surface), (tarnished brass detail), (worn steel finish), (rust-kissed material accents), (old artifact metallic luster)",
    links: ["Aged Metal", "Patina", "Weathered", "Antique"],
    addOn: true,
    role: "boost"
  };
window.__QP_DB.secret_material_boosts = [window.__QP_DB.secret_boost_material_luxury, window.__QP_DB.secret_boost_material_render, window.__QP_DB.secret_boost_material_metal_reflection, window.__QP_DB.secret_boost_material_jewelry, window.__QP_DB.secret_boost_material_silk_satin, window.__QP_DB.secret_boost_material_velvet, window.__QP_DB.secret_boost_material_leather, window.__QP_DB.secret_boost_material_transparent, window.__QP_DB.secret_boost_material_magic_crystal, window.__QP_DB.secret_boost_material_mecha_metal, window.__QP_DB.secret_boost_material_pearl_luster, window.__QP_DB.secret_boost_material_embroidery, window.__QP_DB.secret_boost_material_ceramic_porcelain, window.__QP_DB.secret_boost_material_carbon_industrial, window.__QP_DB.secret_boost_material_rubber_latex, window.__QP_DB.secret_boost_material_aged_metal];

  window.__QP_DB.secret_boost_liquid_wet_hair = {
    label: "✨SECRET・濡れ髪ブースト",
    desc: "髪束、水滴、濡れたハイライトを強める加算用ブースト。濡れ髪表現を明確化（文字数:188）",
    val: "(wet hair strands), (damp hair clumps), (water droplets on hair), (glossy wet highlights), (soaked hair texture), (reflective hair sheen), (dripping hair tips), (moisture-rich hair detail)",
    links: ["Wet Hair", "Water Droplets", "Glossy Highlights", "Moisture Detail"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_sweat_sheen = {
    label: "✨SECRET・汗艶ブースト",
    desc: "肌のしっとり感、汗粒、熱気を足す加算用ブースト。運動後・夏・戦闘後向け（文字数:190）",
    val: "(dewy skin sheen), (subtle sweat droplets), (perspiration highlights), (humid skin gloss), (moist collarbone shine), (glossy skin highlights), (warm skin moisture), (post-exertion damp glow)",
    links: ["Dewy Skin", "Sweat Droplets", "Glossy Skin", "Humid Atmosphere"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_rain_soaked = {
    label: "✨SECRET・雨濡れブースト",
    desc: "雨粒、濡れた服、湿った空気感を足す加算用ブースト。雨シーンのまとまりを強める（文字数:175）",
    val: "(rain-soaked clothing), (rain droplets on skin), (wet fabric cling), (rainy atmosphere), (reflective wet surfaces), (dripping moisture), (overcast rain light), (damp air glow)",
    links: ["Rain-Soaked", "Wet Fabric", "Reflective Wet Surfaces", "Rain Atmosphere"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_water_beads = {
    label: "✨SECRET・水滴付着ブースト",
    desc: "肌や髪や服に乗る水滴を細かく足す加算用ブースト。みずみずしさを見せたい時向け（文字数:211）",
    val: "(beads of water on skin), (scattered droplets), (clear water beads on hair and clothing), (droplet highlights), (moisture accumulation), (fresh wet sparkle), (tiny reflective droplets), (droplet detail emphasis)",
    links: ["Water Beads", "Droplets", "Wet Sparkle", "Droplet Detail"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_dripping = {
    label: "✨SECRET・滴り・雫ブースト",
    desc: "滴る液体や雫の流れを足す加算用ブースト。動きのある濡れ表現を強める（文字数:203）",
    val: "(dripping liquid trails), (falling droplets), (runnels of water), (sliding droplets along skin and fabric), (liquid drip detail), (gravity-pulled moisture), (trailing wet streaks), (fluid motion accents)",
    links: ["Dripping Liquid", "Falling Droplets", "Wet Streaks", "Fluid Motion"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_wet_skin_reflection = {
    label: "✨SECRET・濡れ肌反射ブースト",
    desc: "濡れた肌の反射と艶を足す加算用ブースト。光を拾うしっとり感を強める（文字数:218）",
    val: "(wet skin reflections), (glossy damp skin), (controlled specular highlights on moist skin), (reflective skin sheen), (luminous moisture gloss), (slick highlight accents), (damp surface luster), (polished wet-skin look)",
    links: ["Wet Skin", "Specular Highlights", "Reflective Sheen", "Moisture Gloss"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_wet_fabric_cling = {
    label: "✨SECRET・濡れ布密着ブースト",
    desc: "濡れた布の密着感や重みを足す加算用ブースト。服の貼りつき表現向け（文字数:190）",
    val: "(wet fabric cling), (soaked cloth contour), (water-darkened fabric), (damp textile transparency), (clinging folds), (moisture-weighted cloth), (wet costume adhesion), (soaked garment detail)",
    links: ["Wet Fabric Cling", "Soaked Cloth", "Clinging Folds", "Garment Detail"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_coating = {
    label: "✨SECRET・液体付着ブースト",
    desc: "表面に付着した液体膜や粘りのある艶を足す加算用ブースト。液体感を強める（文字数:194）",
    val: "(liquid coating detail), (translucent liquid layer), (glossy fluid traces), (surface wetness), (sticky liquid shine), (reflective fluid film), (viscous highlight accents), (fluid-coated texture)",
    links: ["Liquid Coating", "Fluid Traces", "Surface Wetness", "Reflective Film"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_surface_reflection = {
    label: "✨SECRET・水面反射ブースト",
    desc: "水面や濡れた床の反射を強める加算用ブースト。水辺・雨上がり・夜景向け（文字数:210）",
    val: "(water surface reflections), (reflective ripples), (mirror-like wet surface), (shimmering water highlights), (surface caustic glints), (rippling light reflection), (wet ground reflection), (liquid mirror sheen)",
    links: ["Water Reflection", "Ripples", "Wet Surface", "Caustics"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_splash = {
    label: "✨SECRET・飛沫スプラッシュブースト",
    desc: "飛沫や跳ねる水の動きを足す加算用ブースト。水遊び・戦闘・雨演出向け（文字数:183）",
    val: "(splashing water), (water spray), (bursting droplets), (dynamic splash arcs), (scattered liquid particles), (impact splash detail), (crisp water motion), (sparkling splash highlights)",
    links: ["Splash", "Water Spray", "Droplets", "Motion"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_bubbles = {
    label: "✨SECRET・泡・気泡ブースト",
    desc: "泡や気泡の細かい反射を足す加算用ブースト。水中・泡・幻想演出向け（文字数:192）",
    val: "(floating bubbles), (tiny air bubbles), (transparent bubble highlights), (foam detail), (soft bubble clusters), (underwater air bubbles), (sparkling bubble reflections), (delicate liquid foam)",
    links: ["Bubbles", "Foam", "Underwater", "Transparent Highlights"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_underwater_float = {
    label: "✨SECRET・水中浮遊ブースト",
    desc: "水中の浮遊感と水越しの光を足す加算用ブースト。水中シーン向け（文字数:200）",
    val: "(underwater atmosphere), (floating hair underwater), (suspended fabric motion), (soft aquatic light), (water-filtered glow), (weightless floating pose), (submerged ambience), (gentle underwater drift)",
    links: ["Underwater", "Floating", "Aquatic Light", "Submerged"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_dew_condensation = {
    label: "✨SECRET・朝露・結露ブースト",
    desc: "朝露や結露の小さな水滴を足す加算用ブースト。涼しげな湿度表現向け（文字数:192）",
    val: "(morning dew droplets), (condensation beads), (dew on skin and fabric), (cool moist air), (tiny fresh droplets), (soft morning wetness), (delicate condensation highlights), (fresh dew sparkle)",
    links: ["Dew", "Condensation", "Fresh Droplets", "Morning Wetness"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_oil_gloss = {
    label: "✨SECRET・オイルグロスブースト",
    desc: "油膜のような艶と強い反射を足す加算用ブースト。高光沢の液体表現向け（文字数:204）",
    val: "(oil-like glossy sheen), (smooth reflective coating), (slick surface highlights), (iridescent oil glints), (high-gloss liquid film), (soft oily reflections), (polished wet luster), (rainbow sheen accents)",
    links: ["Oil Gloss", "Reflective Coating", "Iridescence", "Wet Luster"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_clear_fluid = {
    label: "✨SECRET・透明液体ブースト",
    desc: "透明な水膜や屈折感を足す加算用ブースト。清潔感のある液体表現向け（文字数:211）",
    val: "(clear transparent liquid), (crystal-clear fluid highlights), (transparent water layer), (clean liquid refraction), (glasslike fluid shine), (pure liquid sparkle), (subtle refraction detail), (clear wet coating)",
    links: ["Clear Liquid", "Refraction", "Transparent Water", "Fluid Shine"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_liquid_humidity_mist = {
    label: "✨SECRET・湿度ミストブースト",
    desc: "湿った空気と薄いミストを足す加算用ブースト。雨上がり・湯気・湿度演出向け（文字数:174）",
    val: "(humid mist), (moist air haze), (soft vapor around skin), (warm damp atmosphere), (misty wet glow), (condensed air softness), (steamy ambient haze), (subtle humidity shimmer)",
    links: ["Humidity", "Mist", "Vapor", "Wet Glow"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_liquid_boosts = [window.__QP_DB.secret_boost_liquid_wet_hair, window.__QP_DB.secret_boost_liquid_sweat_sheen, window.__QP_DB.secret_boost_liquid_rain_soaked, window.__QP_DB.secret_boost_liquid_water_beads, window.__QP_DB.secret_boost_liquid_dripping, window.__QP_DB.secret_boost_liquid_wet_skin_reflection, window.__QP_DB.secret_boost_liquid_wet_fabric_cling, window.__QP_DB.secret_boost_liquid_coating, window.__QP_DB.secret_boost_liquid_surface_reflection, window.__QP_DB.secret_boost_liquid_splash, window.__QP_DB.secret_boost_liquid_bubbles, window.__QP_DB.secret_boost_liquid_underwater_float, window.__QP_DB.secret_boost_liquid_dew_condensation, window.__QP_DB.secret_boost_liquid_oil_gloss, window.__QP_DB.secret_boost_liquid_clear_fluid, window.__QP_DB.secret_boost_liquid_humidity_mist];
  window.__QP_DB.secret_boost_skinlighting_transparent = {
    label: "✨SECRET・透明肌ブースト",
    desc: "肌の透け感、柔らかな光、なめらかな発光感を足す加算用ブースト（文字数:205）",
    val: "(translucent skin glow), (natural skin translucency), (clear skin luminosity), (soft subsurface light), (delicate skin highlights), (smooth skin gradation), (airy skin clarity), (fresh luminous complexion)",
    links: ["Translucent Skin", "Skin Glow", "Subsurface Light", "Luminous Complexion"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_blood_tone = {
    label: "✨SECRET・血色感ブースト",
    desc: "頬、唇、耳、指先の自然な赤みを足す加算用ブースト。血色感を整える（文字数:172）",
    val: "(healthy skin bloom), (natural blush tone), (soft lip color), (subtle ear blush), (warm fingertip tint), (lively complexion), (gentle rosy cheeks), (soft blood-flow warmth)",
    links: ["Healthy Bloom", "Blush Tone", "Rosy Cheeks", "Warm Complexion"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_night_glow = {
    label: "✨SECRET・夜光肌ブースト",
    desc: "月光や暗所で映える青白い肌光を足す加算用ブースト。夜シーン向け（文字数:208）",
    val: "(moonlit skin glow), (cool luminous skin), (night skin highlights), (blue-tinted rim light on skin), (soft nocturnal translucency), (low-light skin clarity), (serene moonlight complexion), (gentle night glow)",
    links: ["Moonlit Skin", "Night Highlights", "Blue Rim Light", "Night Glow"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_softlight = {
    label: "✨SECRET・柔肌ソフトライトブースト",
    desc: "肌に回る柔光とやさしい階調を足す加算用ブースト。人物をふんわり見せる（文字数:222）",
    val: "(soft diffuse skin light), (creamy skin shading), (gentle cheek highlights), (soft facial light wrap), (smooth highlight rolloff), (delicate shadow transition on skin), (feathered skin lighting), (tender luminous softness)",
    links: ["Soft Diffuse Light", "Skin Shading", "Light Wrap", "Softness"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_sss = {
    label: "✨SECRET・透過光SSSブースト",
    desc: "透過光とSSSを強める加算用ブースト。耳や指先の抜け感・生命感を足す（文字数:214）",
    val: "(subsurface scattering), (backlit skin translucency), (light bleeding through skin), (ear translucency glow), (fingertip translucency), (warm backlit skin), (internal skin light diffusion), (soft transmitted light)",
    links: ["SSS", "Backlit Skin", "Translucency", "Light Diffusion"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_microtexture = {
    label: "✨SECRET・微細肌テクスチャブースト",
    desc: "肌の微細情報を足す加算用ブースト。のっぺり感を減らし質感を整える（文字数:221）",
    val: "(fine skin texture detail), (delicate micro skin detail), (skin pore suggestion), (cheek microtexture), (forehead skin detail), (refined facial surface detail), (realistic skin texture nuance), (subtle texture separation)",
    links: ["Skin Texture", "Micro Detail", "Surface Detail", "Texture Separation"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_porcelain = {
    label: "✨SECRET・なめらか陶肌ブースト",
    desc: "すべすべで整った陶器肌寄りの仕上がりを足す加算用ブースト（文字数:214）",
    val: "(smooth porcelain-like skin finish), (clean complexion), (silky skin smoothness), (polished soft skin surface), (elegant skin clarity), (refined smooth shading), (soft porcelain glow), (beautiful clean skin finish)",
    links: ["Porcelain Skin", "Clean Complexion", "Smooth Finish", "Skin Clarity"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_gloss = {
    label: "✨SECRET・艶ハイライト肌ブースト",
    desc: "肌の艶ハイライトを足す加算用ブースト。しっとり・映え系の見た目を強める（文字数:206）",
    val: "(dewy skin sheen), (luminous skin highlights), (glossy skin finish), (controlled specular glow on skin), (moist skin luster), (collarbone highlights), (shoulder highlights), (subtle reflective skin accents)",
    links: ["Dewy Skin", "Glossy Skin", "Specular Glow", "Skin Luster"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_dimensional = {
    label: "✨SECRET・立体陰影肌ブースト",
    desc: "顔や肌の立体陰影を足す加算用ブースト。のっぺり回避と彫り感向け（文字数:221）",
    val: "(dimensional facial shading), (sculpted cheek shading), (contour-enhancing skin light), (nose bridge highlight), (jawline shadow control), (under-eye light shaping), (subtle skin depth), (three-dimensional skin rendering)",
    links: ["Dimensional Shading", "Contour Light", "Depth", "3D Skin"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_backlight = {
    label: "✨SECRET・逆光肌ブースト",
    desc: "逆光で肌の輪郭をきれいに見せる加算用ブースト。光に包まれる演出向け（文字数:211）",
    val: "(backlit skin glow), (rim-lit skin edges), (warm light wrapping around skin), (translucent backlight on face), (glowing shoulder edge), (soft halo around skin), (skin edge illumination), (gentle backlight bloom)",
    links: ["Backlight", "Rim Light", "Skin Glow", "Halo"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_golden_hour = {
    label: "✨SECRET・ゴールデンアワー肌ブースト",
    desc: "夕日や暖色光で肌を柔らかく見せる加算用ブースト。夕景・恋愛演出向け（文字数:217）",
    val: "(golden hour skin glow), (warm sunset skin highlights), (amber light on skin), (soft orange facial glow), (sunset blush warmth), (warm rim light on shoulders), (golden skin luminosity), (late afternoon light softness)",
    links: ["Golden Hour", "Sunset", "Warm Skin", "Amber Light"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_cool_rim = {
    label: "✨SECRET・クールリム肌ブースト",
    desc: "青白いリムライトで肌を締める加算用ブースト。夜・クール系・黒衣装向け（文字数:212）",
    val: "(cool rim light on skin), (blue-white skin edge glow), (crisp cool highlights), (icy facial rim light), (cool shadow transition), (night blue skin accent), (clean cold light on shoulders), (cool luminous outline)",
    links: ["Cool Rim", "Blue Light", "Night Skin", "Outline"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_lips_cheeks = {
    label: "✨SECRET・頬唇ハイライトブースト",
    desc: "頬・唇・鼻先など顔の小さな光を足す加算用ブースト。表情の鮮度向け（文字数:206）",
    val: "(soft cheek highlights), (glossy lip highlight), (delicate blush glow), (moist lower lip shine), (gentle nose tip highlight), (subtle eyelid sheen), (warm cheek luminosity), (fresh facial highlight accents)",
    links: ["Cheek Highlights", "Lip Shine", "Blush Glow", "Facial Accents"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_lowlight_clarity = {
    label: "✨SECRET・暗所肌明瞭ブースト",
    desc: "暗所でも肌と顔を見えやすくする加算用ブースト。夜景・暗室・影演出向け（文字数:240）",
    val: "(low-light skin clarity), (visible facial planes in darkness), (soft shadow-readable skin), (dim ambient skin glow), (controlled dark skin tones), (night portrait visibility), (subtle facial catchlight), (clear skin silhouette in low light)",
    links: ["Low Light", "Skin Clarity", "Night Portrait", "Catchlight"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_soft_shadow = {
    label: "✨SECRET・柔影フェイスブースト",
    desc: "顔の影を柔らかく整える加算用ブースト。きつい影を避けたい人物絵向け（文字数:205）",
    val: "(soft facial shadows), (gentle cheek shadow), (smooth under-chin shadow), (soft nose shadow), (feathered face shading), (natural shadow falloff), (delicate skin shadow gradient), (balanced facial contrast)",
    links: ["Soft Shadow", "Face Shading", "Shadow Gradient", "Contrast"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_gradient = {
    label: "✨SECRET・肌グラデーションブースト",
    desc: "肌色のなめらかな階調と色の深みを足す加算用ブースト。塗りの質感向け（文字数:231）",
    val: "(smooth skin color gradation), (subtle warm-to-cool skin transition), (delicate tonal shift on skin), (refined skin gradient), (soft complexion blending), (natural hue variation), (silky tonal rolloff), (beautiful skin color depth)",
    links: ["Skin Gradation", "Tonal Shift", "Color Depth", "Complexion"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_boost_skinlighting_eye_area = {
    label: "✨SECRET・目元ハイライト肌ブースト",
    desc: "目元周辺の肌光を足す加算用ブースト。視線・泣き顔・潤み表現向け（文字数:218）",
    val: "(under-eye soft highlights), (eyelid skin sheen), (catchlight reflected on skin), (delicate tear duct highlight), (soft orbital light), (gentle eye-area glow), (clean under-eye shading), (luminous eye surrounding skin)",
    links: ["Eye Area", "Under-eye", "Eyelid Sheen", "Catchlight"],
    addOn: true,
    role: "boost"
  };
  window.__QP_DB.secret_skinlighting_boosts = [window.__QP_DB.secret_boost_skinlighting_transparent, window.__QP_DB.secret_boost_skinlighting_blood_tone, window.__QP_DB.secret_boost_skinlighting_night_glow, window.__QP_DB.secret_boost_skinlighting_softlight, window.__QP_DB.secret_boost_skinlighting_sss, window.__QP_DB.secret_boost_skinlighting_microtexture, window.__QP_DB.secret_boost_skinlighting_porcelain, window.__QP_DB.secret_boost_skinlighting_gloss, window.__QP_DB.secret_boost_skinlighting_dimensional, window.__QP_DB.secret_boost_skinlighting_backlight, window.__QP_DB.secret_boost_skinlighting_golden_hour, window.__QP_DB.secret_boost_skinlighting_cool_rim, window.__QP_DB.secret_boost_skinlighting_lips_cheeks, window.__QP_DB.secret_boost_skinlighting_lowlight_clarity, window.__QP_DB.secret_boost_skinlighting_soft_shadow, window.__QP_DB.secret_boost_skinlighting_gradient, window.__QP_DB.secret_boost_skinlighting_eye_area];

})();
