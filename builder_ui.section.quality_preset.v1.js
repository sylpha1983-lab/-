(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "quality_preset";

  // ==========================================
  // 1. データ定義 (プリセット・セット)
  // ==========================================

  const PRESET_SETS = {
    "🏆 基本・汎用 (Standard)": [
      { label: "基本・最高画質 (Masterpiece)", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (clearest output)" },
      { label: "アニメ塗り (Anime Style)", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル (Photorealistic)", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風 (3D Render)", val: "(masterpiece), (best quality), (3d render style), (octane render), (unreal engine 5), (ray tracing), (highly detailed cg), (virtual youtuber style)" }
    ],
    "🎨 アート・絵画風 (Artistic)": [
      { label: "厚塗り・油絵 (Impasto/Oil)", val: "(masterpiece), (oil painting), (impasto:1.2), (visible brushstrokes), (rich texture), (canvas texture), (fine art)" },
      { label: "水彩画 (Watercolor)", val: "(masterpiece), (watercolor medium), (wet on wet), (soft edges), (splatter effect), (pastel colors), (paper texture)" },
      { label: "インク・水墨画 (Ink Wash)", val: "(masterpiece), (ink wash painting), (sumi-e), (monochrome), (bold lines), (traditional art), (brush stroke)" },
      { label: "スケッチ・鉛筆画 (Sketch)", val: "(masterpiece), (sketch), (pencil drawing), (rough lines), (monochrome), (graphite medium), (hatching)" },
      { label: "線画・ラインアート (Line Art)", val: "(masterpiece), (line art), (monochrome), (clean lines), (minimalist), (coloring book style), (white background)" },
      { label: "浮世絵 (Ukiyo-e)", val: "(ukiyo-e style), (woodblock print), (japanese traditional art), (flat perspective), (bold outlines), (washi paper texture)" },
      { label: "ポップアート (Pop Art)", val: "(pop art style), (bold colors), (halftone dots), (comic book style), (high contrast), (andy warhol style)" },
      { label: "ステンドグラス (Stained Glass)", val: "(stained glass style), (vibrant light), (mosaic pattern), (black outline), (translucent colors), (church window)" },
      { label: "切り絵 (Paper Cutout)", val: "(paper cutout art), (layered paper), (shadow box), (craft texture), (3d depth), (kirigami)" }
    ],
    "🎮 ゲーム・コンセプト (Game & Concept)": [
      { label: "キャラクター設定画 (Char Sheet)", val: "(character sheet), (concept art), (multiple views), (front view), (side view), (back view), (white background), (reference sheet)" },
      { label: "アイソメトリック (Isometric)", val: "(isometric view), (3d diorama), (miniature), (detailed), (orthographic camera), (simcity style)" },
      { label: "レトロゲーム・ドット (Pixel Art)", val: "(pixel art), (16-bit), (retro game), (dot art), (dithering), (sprite), (arcade style)" },
      { label: "FPS視点 (First Person)", val: "(first person view), (POV), (hands visible), (immersive), (gameplay screenshot), (hud)" },
      { label: "ビジュアルノベル風 (Visual Novel)", val: "(visual novel style), (dating sim), (anime character sprite), (dialogue box style), (expression sheet)" }
    ],
    "📸 特殊撮影・カメラ (Photography)": [
      { label: "GoPro/魚眼 (GoPro/Fisheye)", val: "(fisheye lens), (gopro footage), (wide angle), (distorted perspective), (action shot), (dynamic)" },
      { label: "防犯カメラ (CCTV/Security)", val: "(cctv footage), (security camera), (low quality video), (grainy), (overhead angle), (surveillance), (timestamp)" },
      { label: "インスタント・ポラロイド (Polaroid)", val: "(polaroid photo), (vintage exposure), (vignette), (soft focus), (film grain), (nostalgic), (flash photography)" },
      { label: "ドローン空撮 (Drone)", val: "(drone footage), (aerial view), (bird's eye view), (high altitude), (landscape), (wide shot)" },
      { label: "水中撮影 (Underwater)", val: "(underwater photography), (refraction), (bubbles), (blue tint), (caustics), (floating hair)" },
      { label: "マクロ撮影 (Macro)", val: "(macro photography), (extreme close-up), (shallow depth of field), (bokeh), (insect eye view), (high detail)" }
    ],
    "🧪 SF・パンク系 (Sci-Fi Subgenres)": [
      { label: "サイバーパンク (Cyberpunk)", val: "(cyberpunk), (neon lights), (high tech low life), (holograms), (night city), (rain), (chromatic aberration)" },
      { label: "スチームパンク (Steampunk)", val: "(steampunk), (brass and copper), (gears and cogs), (steam engine), (victorian fashion), (goggles), (clockwork)" },
      { label: "バイオパンク (Biopunk)", val: "(biopunk), (organic technology), (flesh and metal), (glowing veins), (genetic engineering), (mutant), (visceral)" },
      { label: "ソーラーパンク (Solarpunk)", val: "(solarpunk), (nature and technology), (green city), (sustainable), (sunlight), (art nouveau architecture), (utopia)" },
      { label: "ディーゼルパンク (Dieselpunk)", val: "(dieselpunk), (1940s technology), (steel and oil), (military industrial), (gritty), (smoke)" }
    ],
    "🏺 マニアック画法 (Niche Media)": [
      { label: "設計図・ブループリント (Blueprint)", val: "(blueprint), (schematic), (technical drawing), (white lines on blue), (grid background), (diagram), (annotations)" },
      { label: "クレイアニメ・粘土 (Claymation)", val: "(claymation), (stop motion style), (plasticine), (clay texture), (aardman style), (handmade), (fingerprints)" },
      { label: "折り紙 (Origami)", val: "(origami), (folded paper), (paper craft), (geometric), (sharp edges), (paper texture)" },
      { label: "黒板アート (Chalkboard)", val: "(chalkboard art), (chalk texture), (blackboard), (white chalk), (hand drawn), (dusty)" },
      { label: "タロットカード風 (Tarot)", val: "(tarot card style), (art nouveau frame), (symbolic), (decorative border), (mystical), (flat composition)" },
      { label: "整理整頓・並べる (Knolling)", val: "(knolling), (flat lay), (objects organized neatly), (top down view), (items grid), (collection)" }
    ],
    "✨ 質感・特殊効果 (Texture & FX)": [
      { label: "超光沢・オイリー (Ultra Glossy)", val: "(masterpiece), (wet skin), (oiled skin), (glossy finish), (highly reflective), (shiny), (sweat)" },
      { label: "マットな質感 (Matte Finish)", val: "(masterpiece), (matte finish), (flat color), (soft lighting), (low contrast)" },
      { label: "ガラス・クリスタル (Glass)", val: "(glass texture), (crystal), (translucent), (refraction), (caustics), (shimmering), (fragile)" },
      { label: "金属・メタリック (Metallic)", val: "(metallic texture), (chrome), (gold), (silver), (reflection), (polished metal), (robotics)" },
      { label: "ぬいぐるみ (Plushie)", val: "(plushie), (felt texture), (soft fabric), (stitches), (stuffed toy), (fuzzy), (cute)" },
      { label: "グリッチ・ノイズ (Glitch)", val: "(glitch effect), (datamosh), (chromatic aberration), (noise), (scanlines), (distortion), (vhs artifact)" }
    ],
    "💡 照明・雰囲気 (Lighting & Mood)": [
      { label: "シネマティック (Cinematic)", val: "(masterpiece), (cinematic lighting), (dramatic atmosphere), (movie poster), (depth of field), (volumetric lighting), (lens flare)" },
      { label: "ダーク・ゴシック (Dark/Gothic)", val: "(masterpiece), (dark atmosphere), (gothic style), (chiaroscuro), (dimly lit), (mysterious), (fog)" },
      { label: "ソフト・夢幻的 (Soft/Dreamy)", val: "(masterpiece), (soft lighting), (dreamy atmosphere), (bloom), (pastel colors), (ethereal), (light leaks)" },
      { label: "ホラー・不気味 (Horror)", val: "(horror theme), (eerie), (creepy), (dark), (blood), (gloom), (scary atmosphere), (shadows)" },
      { label: "ファンタジー (Fantasy)", val: "(fantasy world), (magic), (glowing particles), (enchanted), (mystical), (fairytale)" }
    ]
  };

  // ==========================================
  // 2. 単語データ定義
  // ==========================================

  // (1) スタイル（単語）
  const STYLE_WORDS = {
    "作家・スタジオ (Artist & Studios)": [
      { ja: "スタジオジブリ風", en: "studio ghibli style" }, { ja: "宮崎駿風", en: "miyazaki hayao style" },
      { ja: "新海誠風", en: "shinkai makoto style" }, { ja: "京都アニメーション風", en: "kyoto animation style" },
      { ja: "TRIGGER風", en: "studio trigger style" }, { ja: "ufotable風", en: "ufotable style" },
      { ja: "MAPPA風", en: "mappa style" }, { ja: "クローバーワークス風", en: "cloverworks style" },
      { ja: "CLAMP風", en: "clamp style" }, { ja: "手塚治虫風", en: "osamu tezuka style" },
      { ja: "鳥山明風", en: "akira toriyama style" }, { ja: "永井博風 (シティポップ)", en: "hiroshi nagai style" },
      { ja: "グレッグ・ルトコフスキ風", en: "greg rutkowski style" }, { ja: "Artgerm風", en: "artgerm style" },
      { ja: "WLOP風", en: "wlop style" }, { ja: "イリヤ・クブシノブ風", en: "ilya kuvshinov style" }
    ],
    "映画監督・映像スタイル (Directors)": [
      { ja: "ティム・バートン風", en: "tim burton style" }, { ja: "ウェス・アンダーソン風", en: "wes anderson style" },
      { ja: "スタンリー・キューブリック風", en: "stanley kubrick style" }, { ja: "クエンティン・タランティーノ風", en: "quentin tarantino style" },
      { ja: "新房昭之風 (シャフト)", en: "akiyuki shinbo style" }
    ],
    "芸術運動・巨匠 (Art Movements)": [
      { ja: "アルフォンス・ミュシャ風", en: "alphonse mucha style" }, { ja: "アール・ヌーヴォー", en: "art nouveau" },
      { ja: "アール・デコ", en: "art deco" }, { ja: "印象派", en: "impressionism style" },
      { ja: "クロード・モネ風", en: "claude monet style" }, { ja: "ゴッホ風", en: "van gogh style" },
      { ja: "クリムト風", en: "gustav klimt style" }, { ja: "サルバドール・ダリ風", en: "salvador dali style" },
      { ja: "ピカソ風 (キュビスム)", en: "cubism" }, { ja: "浮世絵風", en: "ukiyo-e style" },
      { ja: "ルネサンス風", en: "renaissance style" }, { ja: "バロック風", en: "baroque style" },
      { ja: "シュルレアリスム", en: "surrealism" }
    ]
  };

  // (2) 時代・年代（単語）
  const ERA_WORDS = {
    "時代・年代 (Time Period)": [
      { ja: "古代ギリシャ/ローマ", en: "ancient greek" }, { ja: "中世ヨーロッパ", en: "medieval era" },
      { ja: "江戸時代", en: "edo period" }, { ja: "西部開拓時代", en: "wild west" },
      { ja: "ヴィクトリア朝", en: "victorian era" }, { ja: "大正ロマン", en: "taisho roman" },
      { ja: "1920年代 (狂騒の20年代)", en: "roaring twenties" }, { ja: "昭和レトロ", en: "showa era style" },
      { ja: "1980年代レトロ", en: "1980s style" }, { ja: "1990年代アニメ風", en: "1990s style" },
      { ja: "Y2K (2000年代)", en: "y2k aesthetic" }, { ja: "近未来", en: "near future" },
      { ja: "ポストアポカリプス", en: "post-apocalyptic" }
    ]
  };

  // (3) 品質ワード（単語）
  const QUALITY_WORDS = {
    "基本クオリティ (Essential Quality)": [
      { ja: "傑作", en: "masterpiece" }, { ja: "最高画質", en: "best quality" },
      { ja: "高画質", en: "high quality" }, { ja: "素晴らしい品質", en: "amazing quality" },
      { ja: "非常に美的", en: "very aesthetic" }, { ja: "信じられないほど詳細", en: "incredibly absurdres" },
      { ja: "公式アート", en: "official art" }, { ja: "キービジュアル", en: "key visual" },
      { ja: "受賞作品", en: "award winning" }, { ja: "トレンド", en: "trending on artstation" }
    ],
    "解像度・密度 (Resolution)": [
      { ja: "超高解像度 (Absurdres)", en: "absurdres" }, { ja: "8k解像度", en: "8k resolution" },
      { ja: "4k解像度", en: "4k resolution" }, { ja: "16k解像度", en: "16k resolution" },
      { ja: "詳細な肌", en: "extremely detailed skin" }, { ja: "詳細な背景", en: "detailed background" },
      { ja: "複雑な詳細", en: "intricate details" }, { ja: "ハイパーディテール", en: "hyperdetailed" },
      { ja: "超シャープ", en: "ultra-sharp" }
    ],
    "構図・アングル (Composition)": [
      { ja: "黄金比", en: "golden ratio" }, { ja: "三分割法", en: "rule of thirds" },
      { ja: "ダッチアングル (斜め)", en: "dutch angle" }, { ja: "魚眼パース", en: "fisheye lens" },
      { ja: "広角", en: "wide angle" }, { ja: "超広角", en: "ultra wide angle" },
      { ja: "アオリ (下から)", en: "from below" }, { ja: "フカン (上から)", en: "from above" },
      { ja: "ダイナミックなアングル", en: "dynamic angle" }, { ja: "クローズアップ", en: "close-up" }
    ],
    "色彩・カラー (Colors)": [
      { ja: "ビビッドカラー", en: "vivid colors" }, { ja: "パステルカラー", en: "pastel colors" },
      { ja: "モノトーン", en: "monochrome" }, { ja: "セピア", en: "sepia" },
      { ja: "ネオンカラー", en: "neon colors" }, { ja: "虹色", en: "rainbow colors" },
      { ja: "高コントラスト", en: "high contrast" }, { ja: "低コントラスト", en: "low contrast" }
    ],
    "技術・レンダリング (Tech)": [
      { ja: "HDR", en: "HDR" }, { ja: "UHD", en: "UHD" },
      { ja: "レイトレーシング", en: "ray tracing" }, { ja: "グローバルイルミネーション", en: "global illumination" },
      { ja: "サブサーフェス・スキャタリング", en: "subsurface scattering" },
      { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "物理ベースレンダリング", en: "physically based rendering" },
      { ja: "被写界深度 (ボケ)", en: "depth of field" }, { ja: "モーションブラー", en: "motion blur" }
    ],
    "光と効果 (Effects)": [
      { ja: "ボリュメトリック照明", en: "volumetric lighting" }, { ja: "チンダル現象", en: "god rays" },
      { ja: "レンズフレア", en: "lens flare" }, { ja: "ブルーム (発光)", en: "bloom" },
      { ja: "色収差", en: "chromatic aberration" }, { ja: "ビネット", en: "vignette" },
      { ja: "回折スパイク", en: "diffraction spikes" }, { ja: "ハレーション", en: "halation" },
      { ja: "フィルムグレイン", en: "film grain" }
    ]
  };

  // (4) ネガティブプリセット（セット）
  const NEGATIVE_SETS = {
    "ネガティブプリセット (Negative Sets)": [
      { label: "基本ネガティブ (Basic)", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止 (Bad Anatomy)", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      { label: "テキスト排除 (No Text)", val: "text, signature, watermark, username, artist name, copyright name" },
      { label: "3D排除 (2D Only)", val: "3d, realistic, photorealistic, photo, real life" },
      { label: "2D排除 (Realistic Only)", val: "illustration, painting, cartoon, anime, 2d, sketch, drawing" },
      { label: "モノクロ排除 (Color Only)", val: "monochrome, greyscale, sketches" },
      { label: "背景排除 (Simple BG)", val: "background, scenery, landscape, simple background" },
      { label: "複数人排除 (Solo Only)", val: "multiple views, multiple girls, extra people, crowd" }
    ]
  };

  // (5) ネガティブ（単語）
  const NEGATIVE_WORDS = {
    "画質・品質の低下 (Low Quality)": [
      { ja: "低品質", en: "low quality" }, { ja: "最低品質", en: "worst quality" },
      { ja: "普通の品質", en: "normal quality" }, { ja: "JPEGノイズ", en: "jpeg artifacts" },
      { ja: "ぼやけた", en: "blurry" }, { ja: "ピンボケ", en: "out of focus" },
      { ja: "低解像度", en: "lowres" }, { ja: "エラー", en: "error" },
      { ja: "醜い", en: "ugly" }, { ja: "ピクセル化", en: "pixelated" }
    ],
    "人体・解剖学の崩壊 (Bad Anatomy)": [
      { ja: "崩れた解剖学", en: "bad anatomy" }, { ja: "崩れた手", en: "bad hands" },
      { ja: "奇形の手", en: "malformed hands" }, { ja: "欠損した指", en: "missing fingers" },
      { ja: "余分な指", en: "extra fingers" }, { ja: "長い首", en: "long neck" },
      { ja: "変形", en: "deformed" }, { ja: "突然変異", en: "mutated" },
      { ja: "切断された肢", en: "disconnected limbs" }, { ja: "浮遊する肢", en: "floating limbs" },
      { ja: "余分な手足", en: "extra limbs" }, { ja: "崩れた顔", en: "poorly drawn face" }
    ],
    "不要な要素・物体 (Unwanted)": [
      { ja: "テキスト", en: "text" }, { ja: "透かし", en: "watermark" },
      { ja: "署名", en: "signature" }, { ja: "ユーザー名", en: "username" },
      { ja: "ロゴ", en: "logo" }, { ja: "著作権名", en: "copyright name" },
      { ja: "QRコード", en: "qr code" }, { ja: "バーコード", en: "bar code" }
    ],
    "構図・描写の問題 (Composition)": [
      { ja: "見切れ (フレーム外)", en: "out of frame" }, { ja: "クロップ (切り取り)", en: "cropped" },
      { ja: "悪い構図", en: "bad composition" }, { ja: "コラージュ", en: "collage" },
      { ja: "モザイク", en: "mosaic" }, { ja: "グリッチ", en: "glitch" }
    ]
  };

  // ★ 翻訳辞書 (完全網羅・拡張版)
  const DICT = {
    // Basic & Quality
    "masterpiece": "傑作", "best quality": "最高画質", "high quality": "高画質", "high resolution": "高解像度",
    "anime style": "アニメスタイル", "cel shading": "セルルック", "photorealistic": "フォトリアル",
    "oil painting": "油絵", "watercolor medium": "水彩画", "ink wash painting": "水墨画", "sketch": "スケッチ",
    "wet skin": "濡れた肌", "matte finish": "マット仕上げ", "retro style": "レトロスタイル", "cyberpunk style": "サイバーパンク",
    "cinematic lighting": "シネマティック照明", "dark atmosphere": "ダークな雰囲気", "soft lighting": "ソフト照明",
    "hyperdetailed": "ハイパーディテール", "ultra-sharp": "超シャープ", "award winning": "受賞作品",
    "trending on artstation": "ArtStationトレンド", "4k resolution": "4K解像度", "16k resolution": "16K解像度",
    "intricate details": "複雑な詳細", "very aesthetic": "非常に美的", "incredibly absurdres": "信じられないほど高解像度",
    "official art": "公式アート", "key visual": "キービジュアル",
    
    // New Presets & Maniac
    "pop art style": "ポップアート", "bold colors": "大胆な色", "halftone dots": "ハーフトーン", "comic book style": "アメコミ風",
    "stained glass style": "ステンドグラス風", "mosaic pattern": "モザイク模様", "black outline": "黒い輪郭線", "translucent colors": "半透明色",
    "paper cutout art": "切り絵", "shadow box": "シャドーボックス", "kirigami": "切り紙",
    "glass texture": "ガラスの質感", "crystal": "クリスタル", "refraction": "屈折", "caustics": "コースティクス",
    "metallic texture": "金属の質感", "chrome": "クローム", "polished metal": "磨かれた金属", "robotics": "ロボット工学",
    "plushie": "ぬいぐるみ", "felt texture": "フェルトの質感", "stuffed toy": "ぬいぐるみ人形", "fuzzy": "ふわふわ",
    "glitch effect": "グリッチ効果", "datamosh": "データモッシュ", "scanlines": "走査線", "distortion": "歪み",
    "horror theme": "ホラーテーマ", "eerie": "不気味", "creepy": "怖い", "scary atmosphere": "恐ろしい雰囲気", "shadows": "影",
    "fantasy world": "ファンタジー世界", "magic": "魔法", "glowing particles": "輝く粒子", "enchanted": "魔法にかかった",
    "chibi": "ちびキャラ", "super deformed": "スーパーデフォルメ", "big head": "頭でっかち",
    "figure": "フィギュア", "toy": "おもちゃ", "plastic texture": "プラスチック質感", "jointed": "関節付き", "miniature photography": "ミニチュア写真",
    
    // Game & Concept
    "character sheet": "キャラクター設定画", "concept art": "コンセプトアート", "multiple views": "複数アングル",
    "front view": "正面図", "side view": "側面図", "back view": "背面図", "reference sheet": "リファレンスシート",
    "isometric view": "アイソメトリック", "3d diorama": "3Dジオラマ", "miniature": "ミニチュア", "orthographic camera": "平行投影",
    "pixel art": "ドット絵", "16-bit": "16ビット", "retro game": "レトロゲーム", "dot art": "ドット絵", "dithering": "ディザリング",
    "first person view": "FPS視点", "POV": "POV", "hands visible": "手が見える", "immersive": "没入感", "hud": "HUD",
    "visual novel style": "ビジュアルノベル風", "dating sim": "恋愛シム", "sprite": "スプライト", "dialogue box style": "会話ボックス風",

    // Photography & Camera
    "fisheye lens": "魚眼レンズ", "gopro footage": "GoPro映像", "wide angle": "広角", "action shot": "アクションショット",
    "cctv footage": "防犯カメラ映像", "security camera": "監視カメラ", "low quality video": "低画質ビデオ", "grainy": "粒子感",
    "surveillance": "監視", "timestamp": "タイムスタンプ",
    "polaroid photo": "ポラロイド写真", "vintage exposure": "ヴィンテージ露出", "soft focus": "ソフトフォーカス",
    "drone footage": "ドローン映像", "aerial view": "空撮", "bird's eye view": "鳥瞰図", "high altitude": "高高度",
    "underwater photography": "水中写真", "bubbles": "泡", "blue tint": "青みがかった",
    "macro photography": "マクロ撮影", "extreme close-up": "超接写", "insect eye view": "複眼視点",

    // Sci-Fi & Subgenres
    "high tech low life": "ハイテク・ローライフ", "night city": "ナイトシティ", "rain": "雨",
    "brass and copper": "真鍮と銅", "gears and cogs": "歯車", "steam engine": "蒸気機関", "goggles": "ゴーグル", "clockwork": "時計仕掛け",
    "biopunk": "バイオパンク", "organic technology": "有機テクノロジー", "flesh and metal": "肉と金属", "glowing veins": "輝く静脈",
    "genetic engineering": "遺伝子工学", "mutant": "ミュータント", "visceral": "内臓的",
    "solarpunk": "ソーラーパンク", "nature and technology": "自然と技術", "green city": "緑の都市", "sustainable": "持続可能",
    "dieselpunk": "ディーゼルパンク", "1940s technology": "1940年代技術", "steel and oil": "鋼鉄と油", "military industrial": "軍産複合体",

    // Niche Art
    "blueprint": "設計図", "schematic": "回路図", "technical drawing": "製図", "white lines on blue": "青地に白線", "diagram": "図解",
    "claymation": "クレイアニメ", "stop motion style": "ストップモーション風", "plasticine": "プラスティシン", "clay texture": "粘土の質感",
    "aardman style": "アードマン風", "handmade": "手作り感", "fingerprints": "指紋",
    "origami": "折り紙", "folded paper": "折った紙", "paper craft": "ペーパークラフト", "sharp edges": "鋭いエッジ",
    "chalkboard art": "黒板アート", "chalk texture": "チョークの質感", "blackboard": "黒板", "white chalk": "白チョーク",
    "tarot card style": "タロットカード風", "art nouveau frame": "アール・ヌーヴォー枠", "symbolic": "象徴的", "decorative border": "装飾枠",
    "knolling": "並べる(Knolling)", "flat lay": "フラットレイ", "objects organized neatly": "整列した物体", "collection": "コレクション",

    // Tech
    "HDR": "HDR", "UHD": "UHD", "ray tracing": "レイトレーシング", "global illumination": "グローバルイルミネーション",
    "subsurface scattering": "サブサーフェス・スキャタリング", "ambient occlusion": "アンビエントオクルージョン",
    "physically based rendering": "PBR", "depth of field": "被写界深度", "motion blur": "モーションブラー",
    "ultra wide angle": "超広角", "lens flare": "レンズフレア",
    "bloom": "ブルーム", "chromatic aberration": "色収差", "vignette": "ビネット",
    "diffraction spikes": "回折スパイク", "halation": "ハレーション", "film grain": "フィルム粒子",
    "golden ratio": "黄金比", "rule of thirds": "三分割法", "dutch angle": "ダッチアングル", 
    "from below": "アオリ", "from above": "フカン", "dynamic angle": "ダイナミックなアングル", "close-up": "クローズアップ",

    // Styles & Artists
    "studio ghibli style": "スタジオジブリ風", "miyazaki hayao style": "宮崎駿風",
    "shinkai makoto style": "新海誠風", "kyoto animation style": "京都アニメーション風",
    "ufotable style": "ufotable風", "mappa style": "MAPPA風", "cloverworks style": "クローバーワークス風",
    "clamp style": "CLAMP風", "osamu tezuka style": "手塚治虫風", "akira toriyama style": "鳥山明風",
    "alphonse mucha style": "アルフォンス・ミュシャ風", "art nouveau": "アール・ヌーヴォー", "art deco": "アール・デコ",
    "impressionism style": "印象派", "claude monet style": "モネ風", "van gogh style": "ゴッホ風",
    "gustav klimt style": "クリムト風", "salvador dali style": "ダリ風", "cubism": "キュビスム", "ukiyo-e style": "浮世絵風",
    "studio trigger style": "TRIGGER風", "hiroshi nagai style": "永井博風", "renaissance style": "ルネサンス風", "baroque style": "バロック風",
    "surrealism": "シュルレアリスム", "greg rutkowski style": "グレッグ・ルトコフスキ風", "artgerm style": "Artgerm風",
    "wlop style": "WLOP風", "ilya kuvshinov style": "イリヤ・クブシノブ風", "tim burton style": "ティム・バートン風",
    "wes anderson style": "ウェス・アンダーソン風", "stanley kubrick style": "キューブリック風",
    "quentin tarantino style": "タランティーノ風", "akiyuki shinbo style": "新房昭之風",

    // Eras
    "ancient greek": "古代ギリシャ", "medieval era": "中世", "wild west": "西部開拓時代",
    "roaring twenties": "狂騒の20年代", "showa era style": "昭和レトロ", "taisho roman": "大正ロマン",
    "edo period": "江戸時代", "victorian era": "ヴィクトリア朝", "y2k aesthetic": "Y2K", 
    "near future": "近未来", "post-apocalyptic": "ポストアポカリプス",

    // Negative Words
    "low quality": "低品質", "worst quality": "最低品質", "normal quality": "普通の品質",
    "out of focus": "ピンボケ", "ugly": "醜い", "error": "エラー",
    "jpeg artifacts": "JPEGノイズ", "lowers": "低解像度", "blurry": "ぼやけた", "bokeh": "ボケ", "lowres": "低解像度",
    "pixelated": "ピクセル化",
    "bad anatomy": "崩れた解剖学", "long neck": "長い首", "deformed": "変形", "mutated": "突然変異",
    "disfigured": "崩れた", "malformed hands": "奇形の手", "missing limb": "欠損した肢",
    "floating limbs": "浮遊する肢", "disconnected limbs": "切断された肢", "extra limb": "余分な肢",
    "missing fingers": "欠損した指", "extra fingers": "余分な指", "liquid fingers": "溶けた指",
    "poorly drawn hands": "下手に描かれた手", "poorly drawn face": "下手に描かれた顔", "bad hands": "崩れた手", "extra limbs": "余分な手足",
    "mutation": "変異",
    "text": "テキスト", "signature": "署名", "watermark": "透かし", "username": "ユーザー名",
    "logo": "ロゴ", "copyright name": "著作権名", "qr code": "QRコード", "bar code": "バーコード",
    "3d": "3D", "realistic": "リアル", "photo": "写真", "real life": "実写",
    "illustration": "イラスト", "painting": "絵画", "cartoon": "カートゥーン", "anime": "アニメ",
    "2d": "2D", "drawing": "ドローイング", "monochrome": "モノクロ", "greyscale": "グレースケール",
    "sketches": "スケッチ", "background": "背景", "scenery": "風景", "landscape": "景観",
    "simple background": "シンプル背景", "multiple views": "複数視点", "multiple girls": "複数少女",
    "extra people": "余分な人", "crowd": "群衆",
    "out of frame": "フレーム外", "cropped": "切り取り", "bad composition": "悪い構図", "collage": "コラージュ", "mosaic": "モザイク"
  };

  // ==========================================
  // 2. UI構築ヘルパー
  // ==========================================

  function createSubAccordion(title, items, type) {
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

      // プリセット系(label/val) or 単語系(ja/en)
      if (type === "preset" || type === "negative_set") {
        cb.dataset.val = item.val;
        label.title = item.val;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label));
        // ラベル自体も辞書になければ登録(念のため)
        if(item.label && !DICT[item.label]) DICT[item.label] = item.label; 
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        // 辞書自動登録
        if(item.en && item.ja) DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  function createMainSection(title, children) {
    const details = document.createElement("details");
    details.className = "qp-main-acc";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`;
    
    details.addEventListener("toggle", () => {
      const span = summary.querySelector("span");
      if(span) span.textContent = details.open ? "▼" : "▶";
    });

    details.appendChild(summary);

    const wrapper = document.createElement("div");
    wrapper.style.padding = "10px";
    children.forEach(child => wrapper.appendChild(child));
    
    details.appendChild(wrapper);
    return details;
  }

  function createNegativeSeparator() {
    const div = document.createElement("div");
    div.style.marginTop = "30px"; 
    div.style.marginBottom = "10px";
    div.style.borderTop = "2px dashed #ffb3b3";
    div.innerHTML = `
      <div style="margin-top:-12px; text-align:center;">
        <span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">
          ⚠️ NEGATIVE PROMPTS
        </span>
      </div>
    `;
    return div;
  }

  // ==========================================
  // 3. API実装
  // ==========================================
  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;
      parent.innerHTML = ""; 

      const root = document.createElement("div");
      root.className = "quality-preset-integrated";

      // 1. プリセット（セット）
      const presetNodes = [];
      Object.entries(PRESET_SETS).forEach(([k,v]) => presetNodes.push(createSubAccordion(k, v, "preset")));
      root.appendChild(createMainSection("📦 プリセット (Preset Sets)", presetNodes));

      // 2. スタイル（単語）
      const styleNodes = [];
      Object.entries(STYLE_WORDS).forEach(([k,v]) => styleNodes.push(createSubAccordion(k, v, "style")));
      root.appendChild(createMainSection("🎨 スタイル (Style Words)", styleNodes));

      // 3. 時代・年代（単語）
      const eraNodes = [];
      Object.entries(ERA_WORDS).forEach(([k,v]) => eraNodes.push(createSubAccordion(k, v, "era")));
      root.appendChild(createMainSection("🕰️ 時代・年代 (Era Words)", eraNodes));

      // 4. 品質ワード（単語）
      const qualityNodes = [];
      Object.entries(QUALITY_WORDS).forEach(([k,v]) => qualityNodes.push(createSubAccordion(k, v, "quality")));
      root.appendChild(createMainSection("🔧 品質ワード (Quality Words)", qualityNodes));

      // --- ネガティブエリア ---
      root.appendChild(createNegativeSeparator());
      
      // 5. ネガティブプリセット（セット）
      const negSetNodes = [];
      Object.entries(NEGATIVE_SETS).forEach(([k,v]) => negSetNodes.push(createSubAccordion(k, v, "negative_set")));
      const negSetSection = createMainSection("🚫 ネガティブプリセット (Negative Sets)", negSetNodes);
      negSetSection.querySelector("summary").style.background = "#fff0f0";
      negSetSection.querySelector("summary").style.color = "#d00";
      root.appendChild(negSetSection);

      // 6. ネガティブ（単語）
      const negWordNodes = [];
      Object.entries(NEGATIVE_WORDS).forEach(([k,v]) => negWordNodes.push(createSubAccordion(k, v, "negative_word")));
      const negWordSection = createMainSection("🗑️ ネガティブ (Negative Words)", negWordNodes);
      negWordSection.querySelector("summary").style.background = "#fff0f0";
      negWordSection.querySelector("summary").style.color = "#d00";
      root.appendChild(negWordSection);

      parent.appendChild(root);

      // 辞書登録
      if (window.__outputTranslation) {
        window.__outputTranslation.register(DICT);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  // スタイル適用
  const style = document.createElement('style');
  style.textContent = `
    .qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; }
    .qp-main-acc > summary { font-weight:bold; padding:10px 14px; cursor:pointer; background:#eef2f6; list-style:none; }
    .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; }
    .qp-sub-acc > summary { font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; font-size:0.9em; color:#555; list-style:none; }
    .qp-main-acc[open] > summary span, .qp-sub-acc[open] > summary span { transform: rotate(90deg); display:inline-block; }
    .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; }
    .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; }
    .qp-content-grid input { margin-right:6px; flex-shrink: 0; }
  `;
  document.head.appendChild(style);

  window.__registerPromptPart(KEY, VERSION, API);
})();

