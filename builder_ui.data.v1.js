(function(){
  "use strict";
  // ==============================================================================
  // 📦 データ・辞書定義ファイル (Data & Dictionary)
  // ==============================================================================
  
  // ------------------------------------------------------------------
  // 1. 翻訳辞書 (Dictionary)
  // ------------------------------------------------------------------
  const ITEMS = {
    "smartphone": "スマホ", "book": "本", "letter": "手紙", "bouquet": "花束", "parasol": "日傘",
    "hand fan": "扇子", "lantern": "ランタン", "camera": "カメラ", "sword": "剣", "katana": "刀",
    "dagger": "短剣", "magic staff": "魔法の杖", "bow weapon": "弓", "arrow": "矢",
    "gun": "銃", "rifle": "ライフル", "dual guns": "二丁拳銃", "scythe": "大鎌", "spear": "槍",
    "bubble tea": "タピオカ", "coffee cup": "コーヒー", "crepe": "クレープ", "hamburger": "ハンバーガー",
    "microphone": "マイク", "sketchbook": "スケッチブック", "paintbrush": "筆", "palette": "パレット"
  };
  
  const ACTIONS = {
    "holding": "持つ", "gripping": "握る", "hugging": "抱きしめる", "biting": "噛む",
    "licking": "舐める", "eating": "食べる", "drinking": "飲む", 
    "holding with both hands": "両手で持つ", "in mouth": "くわえる",
    "on back": "背負う", "on belt": "腰に装備", "in pocket": "ポケットに"
  };

  // アップロードされたファイルの辞書データを完全移植
  let EXTENDED_DICT = {
    // === 画風詳細・塗り・技術 ===
    "thick painting": "厚塗り", "impasto": "厚塗り(インパスト)", "watercolor": "水彩画風",
    "1990s anime style": "90年代アニメ", "anime key visual": "キービジュアル", "sketch": "スケッチ",
    "monochrome": "モノクロ", "semi-realistic": "セミリアル", "realistic lighting": "リアルな照明",
    "subsurface scattering": "サブサーフェス (透け感)", "global illumination": "グローバルイルミネーション",
    "volumetric lighting": "ボリュメトリック (光の筋)", "anime-realism blend": "アニメ・リアル融合",
    "cinematic lighting": "シネマティック (映画風)", "physically based rendering": "PBR (物理ベース)",
    "lumen reflections": "Lumen反射 (UE5)", "nanite geometry": "Naniteジオメトリ", "8k uhd": "8K UHD",
    "shiny hair": "ツヤ髪", "glossy hair": "光沢髪", "kodak portra 400": "Kodak Portra 400 (暖かみ)",
    "low contrast": "ローコントラスト", "high fidelity": "高忠実度", "extremely detailed": "超詳細",
    "8k wallpaper": "8K壁紙", "fantasy concept art": "ファンタジーコンセプトアート",
    "highly detailed digital painting": "高精細デジタルペイント", "epic scale": "壮大なスケール",
    "glowing magic": "輝く魔法", "game art style": "ゲームアート調", "cyberpunk style": "サイバーパンク",
    "neon lights": "ネオンライト", "chromatic aberration": "色収差", "futuristic city": "未来都市",

    // === 基本 ===
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度", 
    "ultra high resolution": "超高解像度", "photorealistic": "フォトリアル", "realistic": "リアル", 
    "8k": "8K", "raw photo": "RAW写真", "detailed skin texture": "肌の質感", 
    "hyperrealistic": "超リアル", "anime style": "アニメ調", "cel shading": "セルルック",
    "vibrant colors": "鮮やかな色", "clean lines": "綺麗な線", "flat color": "フラットカラー",
    "pastel colors": "パステルカラー", "soft focus": "ソフトフォーカス", "dreamy": "夢幻的", 
    "kawaii": "可愛い", "watercolor medium": "水彩", "oil painting": "油絵", 
    "ink wash painting": "水墨画", "retro anime style": "レトロアニメ", "cel animation type": "セル画", 
    "analog film noise": "フィルムノイズ",
    
    // === 3D Tech ===
    "octane render": "Octane Render", "unreal engine 5": "UE5", "ray tracing": "レイトレーシング",
    "ambient occlusion": "AO", "arnold render": "Arnold", "v-ray": "V-Ray", "cycles render": "Cycles",
    "photon mapping": "フォトンマッピング", "radiosity": "ラジオシティ", "path tracing": "パストレーシング", 
    "shaders": "シェーダー", "cinema 4d": "Cinema 4D", "zbrush": "ZBrush", "maya": "Maya", 
    "blender": "Blender", "substance painter": "Substance Painter", "redshift render": "Redshift", 
    "corona render": "Corona",
    
    // === Effects & Lens ===
    "god rays": "ゴッドレイ", "lens flare": "レンズフレア", "bloom": "ブルーム", "vignette": "ケラレ", 
    "diffraction spikes": "回折スパイク", "halation": "ハレーション", "film grain": "フィルム粒子",
    "depth of field": "被写界深度", "bokeh": "ボケ", "rembrandt lighting": "レンブラント照明", 
    "rim lighting": "リムライト", "softbox lighting": "ソフトボックス", "butterfly lighting": "バタフライ照明", 
    "catchlight": "キャッチライト",
    
    // === NSFW & Poses ===
    "missionary": "正常位", "doggystyle": "バック", "standing sex": "立ちバック", "cowgirl position": "騎乗位",
    "mating press": "交尾プレス", "legs up": "足上げ", "face to face": "対面座位", "69 position": "シックスナイン",
    "spread legs": "開脚", "vaginal sex": "膣セックス", "anal sex": "アナル", "creampie": "中出し", 
    "rape": "レイプ", "tentacle sex": "触手セックス", "looking at viewer": "カメラ目線", "blushing": "赤面",

    // === キャラクター・性別 ===
    "1girl": "女性(1人)", "female focus": "女性フォーカス", "toddler girl": "幼児(女)", "little girl": "幼女", 
    "young girl": "少女", "child": "子供", "bishoujo": "美少女", "cute face": "可愛い顔",
    "schoolgirl": "女子学生", "student": "学生", "young woman": "若い女性", "lady": "お姉さん",
    "mature female": "熟女", "milf": "熟女(MILF)", "old woman": "老婆", "gyaru": "ギャル", 
    "tanned skin": "日焼け肌", "mesugaki": "メスガキ", "smug": "ドヤ顔", "ojousama": "お嬢様", 
    "elegant": "高貴・優雅", "tomboy": "ボーイッシュ", "yamato nadeshiko": "大和撫子",
    "1boy": "男性(1人)", "male focus": "男性フォーカス", "toddler boy": "幼児(男)", "shota": "ショタ", 
    "young boy": "少年", "shounen": "少年漫画風", "bishounen": "美少年", "handsome": "ハンサム",
    "young man": "青年", "mature male": "おじさん", "beard": "髭", "old man": "老人",
    "ikemen": "イケメン", "muscular": "筋肉質", "macho": "マッチョ", "otoko no ko": "男の娘",
    
    // === R-18 追加分 ===
    "futanari": "ふたなり", "hermaphrodite": "両性具有", "penis and pussy": "両性",
    "huge penis": "巨根", "hyper": "ハイパー", "shemale": "シーメール", "dickgirl": "ディックガール",
    "real penis": "生ペニス", "human penis": "人ペニス", "vascular": "血管", "veiny penis": "血管ペニス",
    "detailed penis": "詳細ペニス", "glans": "亀頭", "penis head": "亀頭", "testicles": "金玉",
    "balls": "ボール/金玉", "scrotum": "陰嚢", "uncut": "包茎", "foreskin": "包皮", "flesh": "肉感",
    "vaginal penis": "膣内ペニス", "penis in pussy": "挿入中(膣)", "anal penis": "アナルペニス",
    "penis in ass": "挿入中(尻)", "insertion": "挿入", "penetrating": "貫通", "glans inside": "亀頭埋没",
    "piston motion": "ピストン", "afterimage": "残像(激しさ)", "sucking penis": "しゃぶり",
    "titfuck": "パイズリ", "cum in pussy": "膣内射精", "cum": "精液", "ejaculation": "射精", "precum": "我慢汁",
    "deepthroat": "イラマチオ", "face fucked": "顔面騎乗/イラマチオ", "handjob": "手コキ", "stroking": "しごき",
    "sumata": "素股", "grinding": "擦り付け", "legs over head": "屈曲位", "standing sex": "立ちバック", 
    "standing doggystyle": "立ちバック", "reverse cowgirl position": "背面騎乗位", "lifted by male": "駅弁", 
    "standing mating press": "駅弁", "carrying": "抱き上げ", "sitting on lap": "座位", "spooning": "側位", 
    "straddling": "跨がり", "all fours": "四つん這い"
  };

  // 組み合わせ辞書の自動生成 (holding smartphone -> スマホを持つ 等)
  Object.keys(ITEMS).forEach(itemEn => {
    Object.keys(ACTIONS).forEach(actEn => {
      let key, val;
      if (actEn === "in mouth") { key = `${itemEn} in mouth`; val = `${ITEMS[itemEn]}をくわえる`; }
      else if (actEn === "on back") { key = `${itemEn} on back`; val = `${ITEMS[itemEn]}を背負う`; }
      else if (actEn === "on belt") { key = `${itemEn} on belt`; val = `腰に${ITEMS[itemEn]}`; }
      else if (actEn === "in pocket") { key = `${itemEn} in pocket`; val = `ポケットに${ITEMS[itemEn]}`; }
      else { key = `${actEn} ${itemEn}`; val = `${ITEMS[itemEn]}を${ACTIONS[actEn]}`; }
      EXTENDED_DICT[key] = val; 
      EXTENDED_DICT[key.replace(ITEMS[itemEn], itemEn)] = val; // 安全策
    });
  });

  // ------------------------------------------------------------------
  // 2. 初心者ガイド (Beginner Guide)
  // ------------------------------------------------------------------
  const BEGINNER_DATA = {
    "🔰 ① 3D技術：安全セット": [
      { label: "🟢 キャラ・人物 (肌と光)", val: "(realistic lighting), (subsurface scattering)", desc: "肌を生かし、全体をまとめる。迷ったらこれだけ。" },
      { label: "🟢 背景・空間 (空気感)", val: "(global illumination), (volumetric lighting)", desc: "空間の破綻を防ぎ、一気に雰囲気が出る王道セット。" },
      { label: "🟢 物・メカ (質感と影)", val: "(physically based rendering), (ambient occlusion)", desc: "質感が嘘をつかなくなり、影が締まる。" }
    ],
    "🔰 ② エンジン選び：1つだけ選ぶ": [
      { label: "Octane (派手・綺麗)", val: "(octane render)", desc: "光が派手で凄そうに見える。" },
      { label: "Arnold (映画・リアル)", val: "(arnold render)", desc: "人・顔・映画っぽさ。" },
      { label: "V-Ray (建築・静寂)", val: "(v-ray)", desc: "静かでちゃんとしている。" },
      { label: "UE5 (ゲーム・世界観)", val: "(unreal engine 5)", desc: "環境・世界観重視。" },
      { label: "Cycles (万能・安全)", val: "(cycles render)", desc: "主張は弱いが安全パイ。" }
    ],
    "🔰 ③ 完成形テンプレ": [
      { label: "人物イラスト完成セット (Octane+)", val: "(octane render), (realistic lighting), (subsurface scattering)", desc: "キャラ1枚絵の安全構成。" },
      { label: "ファンタジー背景セット (UE5+)", val: "(unreal engine 5), (global illumination), (volumetric lighting)", desc: "ゲームのような世界観。" },
      { label: "武器・小物完成セット (V-Ray+)", val: "(v-ray), (physically based rendering), (ambient occlusion)", desc: "実在感のある物撮り。" }
    ],
    "🔰 ④ 質感・ツール (Optional)": [
      { label: "ZBrush (スカルプト感)", val: "(zbrush sculpt), (digital sculpting), (clay render style)", desc: "フィギュアのような質感。" },
      { label: "Substance Painter (テクスチャ)", val: "(substance painter), (pbr textures), (intricate texture)", desc: "表面の汚れや傷など。" },
      { label: "Cinema 4D (クリーン)", val: "(cinema 4d render), (studio lighting), (clean render)", desc: "整った綺麗な3D感。" }
    ]
  };

  const HIGH_END_LIST = [
    { label: "★究極・アニメセミリアル", val: "(anime-realism blend:1.4), (high fidelity), (extremely detailed), (cinematic lighting:1.4), (8k wallpaper)" },
    { label: "★究極・レンダリング", val: "(octane render), (ray tracing), (high resolution), (masterpiece), (volumetric lighting)" },
    { label: "幻想・コンセプトアート", val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (game art style)" },
    { label: "サイバー・ネオン", val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city)" }
  ];

  // ------------------------------------------------------------------
  // 3. プリセットデータ (Presets)
  // ------------------------------------------------------------------
  const PRESET_DATA = {
    "👫 性別・キャラクター (Gender)": [
      { ja: "女性 (基本)", en: "1girl, female focus" }, { ja: "幼児・幼女", en: "toddler girl, little girl" },
      { ja: "少女", en: "young girl, child" }, { ja: "美少女", en: "bishoujo, cute face" },
      { ja: "女子学生", en: "schoolgirl, student" }, { ja: "お姉さん", en: "young woman, lady" },
      { ja: "熟女", en: "mature female, milf" }, { ja: "老婆", en: "old woman" },
      { ja: "ギャル", en: "gyaru, tanned skin" }, { ja: "メスガキ", en: "mesugaki, smug" },
      { ja: "お嬢様", en: "ojousama, elegant" }, { ja: "ボーイッシュ", en: "tomboy" },
      { ja: "大和撫子", en: "yamato nadeshiko" },
      { ja: "男性 (基本)", en: "1boy, male focus" }, { ja: "幼児・ショタ", en: "toddler boy, shota" },
      { ja: "少年", en: "young boy, shounen" }, { ja: "美少年", en: "bishounen, handsome" },
      { ja: "青年", en: "young man" }, { ja: "おじさん", en: "mature male, beard" },
      { ja: "老人", en: "old man" }, { ja: "イケメン", en: "ikemen, handsome" },
      { ja: "筋肉質", en: "muscular, macho" }, { ja: "男の娘", en: "otoko no ko" }
    ],
    "🏆 基本・画風 (Standard)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (anime style), (cel shading), (vibrant colors)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo)" }
    ],
    "💎 ハイエンド・特化 (High-End)": HIGH_END_LIST,
    "🎨 画風詳細・塗り": [
      { ja: "厚塗り", en: "thick painting, impasto" }, { ja: "水彩画風", en: "watercolor" },
      { ja: "90年代アニメ", en: "1990s anime style" }, { ja: "キービジュアル", en: "anime key visual" },
      { ja: "線画", en: "sketch, monochrome" }, { ja: "セミリアル", en: "semi-realistic" },
      { ja: "フィギュア風", en: "figure style" }
    ],
    "✨ クオリティ・特殊効果": [
      { ja: "超高解像度", en: "8k, 4k, absurdres" }, { ja: "輝き・発光", en: "bloom, glowing light" },
      { ja: "ボケ味", en: "depth of field, bokeh" }, { ja: "パーティクル", en: "particles" },
      { ja: "ゴッドレイ", en: "god rays" }, { ja: "映画的", en: "cinematic lighting" }
    ]
  };

  // ------------------------------------------------------------------
  // 4. シチュエーションデータ (Situations)
  // ------------------------------------------------------------------
  const SITUATION_DATA = {
    "📍 スポット・お店 (Spots)": [
      { label: "アイドルステージ", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)" },
      { label: "おしゃれカフェ", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)" },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes)" },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles)" },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant)" }
    ],
    "🏫 学園・青春 (School)": [
      { label: "教室 (昼)", val: "(classroom), (school desks), (blackboard), (sunlight through window), (afternoon), (school life)" },
      { label: "教室 (夕方)", val: "(classroom), (sunset), (orange sky), (shadows), (melancholic), (after school), (empty classroom)" },
      { label: "屋上", val: "(school rooftop), (fence), (blue sky), (clouds), (windy), (city view in distance)" },
      { label: "廊下", val: "(school hallway), (lockers), (polished floor), (perspective), (sunbeams)" },
      { label: "体育館", val: "(school gymnasium), (basketball court), (varnished wood floor), (indoor sports)" }
    ],
    "🏠 家・日常 (Home)": [
      { label: "リビング", val: "(modern living room), (sofa), (tv), (carpet), (cozy atmosphere), (indoor plant), (sunlight)" },
      { label: "キッチン", val: "(kitchen), (cooking), (apron), (refrigerator), (vegetables), (sink), (morning light)" },
      { label: "ベッドルーム", val: "(bedroom), (bed), (messy sheets), (pillows), (curtains), (morning), (waking up)" },
      { label: "バスルーム", val: "(bathroom), (bathtub), (steam), (tiles), (mirror), (shampoo bottles), (wet skin)" }
    ],
    "🏙️ 都会・ストリート (City)": [
      { label: "渋谷・交差点", val: "(shibuya crossing), (crowd), (skyscrapers), (billboards), (neon signs), (modern city)" },
      { label: "サイバーパンク街", val: "(cyberpunk city), (neon lights), (holograms), (rain), (wet street), (futuristic)" },
      { label: "夜景・ビル街", val: "(night city view), (skyscraper), (office lights), (highway), (car lights), (bokeh)" },
      { label: "路地裏", val: "(back alley), (dim lighting), (vending machine), (trash cans), (pipes), (graffiti)" }
    ],
    "🌺 自然・絶景 (Nature)": [
      { label: "青空・草原", val: "(blue sky), (white clouds), (green field), (grass), (wind), (open space), (bright sunlight)" },
      { label: "森・木漏れ日", val: "(forest), (trees), (sunbeams), (leaf shadows), (nature path), (peaceful), (moss)" },
      { label: "海・ビーチ", val: "(beach), (ocean), (waves), (white sand), (horizon), (summer), (tropical)" },
      { label: "星空・夜空", val: "(starry sky), (milky way), (night), (shooting star), (silhouette), (universe)" }
    ],
    "⏰ 時間帯・空気感 (Time)": [
      { label: "朝 (Morning)", val: "(morning), (sunrise), (soft light), (fresh atmosphere), (dew)" },
      { label: "夕方 (Sunset)", val: "(sunset), (dusk), (orange light), (long shadows), (golden hour), (sentimental)" },
      { label: "夜 (Night)", val: "(night), (moonlight), (dark), (artificial lights), (stars), (quiet)" }
    ]
  };

  // ------------------------------------------------------------------
  // 5. 技術データ (Tech & Tools)
  // ------------------------------------------------------------------
  const TECH_DATA = {
    "🛠️ 制作ソフト・ツール": [
      { ja: "Cinema 4D", en: "cinema 4d" }, { ja: "ZBrush (彫刻)", en: "zbrush" }, 
      { ja: "Maya", en: "maya" }, { ja: "Blender", en: "blender" }, { ja: "Substance Painter", en: "substance painter" }
    ],
    "🖥️ レンダリング・エンジン": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" }, { ja: "Octane Render", en: "octane render" }, 
      { ja: "Redshift Render", en: "redshift render" }, { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" }, { ja: "Corona Render", en: "corona render" }, { ja: "Blender Cycles", en: "cycles render" }
    ],
    "⚙️ 3D技術・シェーダー": [
      { ja: "パストレーシング", en: "path tracing" }, { ja: "レイトレーシング", en: "ray tracing" }, 
      { ja: "Lumen反射 (UE5)", en: "lumen reflections" }, { ja: "Naniteジオメトリ", en: "nanite geometry" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" }, { ja: "シェーダー", en: "shaders" }, 
      { ja: "SSS (表面下散乱)", en: "subsurface scattering" }, { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
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

  // ------------------------------------------------------------------
  // 6. シークレットデータ (R-18)
  // ------------------------------------------------------------------
  const SECRET_DATA = {
    "🍄 男性器・生身強調 (Real Penis)": [
      { ja: "本物のペニス", en: "real penis, human penis" }, { ja: "リアル・血管", en: "vascular, veiny penis" },
      { ja: "亀頭", en: "glans, penis head" }, { ja: "金玉", en: "testicles, balls" },
      { ja: "射精", en: "cum, ejaculation" }, { ja: "★バイブ回避セット", val: "(real penis), (human penis), (testicles), (veins), (glans)" }
    ],
    "🍆 R-18 性別・属性": [
      { ja: "ふたなり", en: "futanari, penis and pussy" }, { ja: "巨根ふたなり", en: "futanari, huge penis" },
      { ja: "男の娘 (R18)", en: "otoko no ko, anal only" }, { ja: "シーメール", en: "shemale" }
    ],
    "🔞 NSFW誘導・基本": [
      { ja: "NSFW (閲覧注意)", en: "nsfw" }, { ja: "R-18 (成人向け)", en: "r-18" },
      { ja: "Explicit (露骨)", en: "explicit" }, { ja: "Uncensored (無修正)", en: "uncensored" },
      { ja: "モザイクなし", en: "no mosaic" }, { ja: "修正棒なし", en: "no bar cencor" }
    ],
    "🛌 体位・セックス": [
      { ja: "正常位", en: "missionary" }, { ja: "屈曲位", en: "legs over head" },
      { ja: "バック", en: "doggystyle" }, { ja: "立ちバック", en: "standing sex" },
      { ja: "騎乗位", en: "cowgirl position" }, { ja: "背面騎乗位", en: "reverse cowgirl position" },
      { ja: "対面座位", en: "mating press, legs up" }, { ja: "駅弁", en: "lifted by male" },
      { ja: "シックスナイン", en: "69 position" }, { ja: "開脚", en: "spread legs" }
    ],
    "💧 挿入・行為・結合": [
      { ja: "膣内性交", en: "vaginal sex, vaginal penis, penis in pussy" },
      { ja: "アナルセックス", en: "anal sex, anal penis, penis in ass" },
      { ja: "結合・貫通", en: "insertion, penetrating" }, { ja: "ピストン", en: "piston motion" },
      { ja: "フェラチオ", en: "fellatio, sucking penis" }, { ja: "イラマチオ", en: "deepthroat" },
      { ja: "パイズリ", en: "paizuri" }, { ja: "中出し", en: "creampie, cum inside" },
      { ja: "顔射", en: "bukkake" }, { ja: "断面図", en: "cross section" }
    ],
    "😈 陵辱・挿入": [
      { label: "極太ペニス挿入", val: "(rape), (vaginal penetration with thick penis), (stretching), (ahegao)" },
      { label: "極太指挿入", val: "(rape), (vaginal penetration with thick finger), (fingering)" },
      { label: "極太触手挿入", val: "(rape), (vaginal penetration with thick tentacle), (tentacle sex)" },
      { label: "異物・拡張", val: "(rape), (vaginal penetration with object), (stretching), (gap)" }
    ]
  };

  // ------------------------------------------------------------------
  // 📤 グローバル公開
  // ------------------------------------------------------------------
  window.__QP_DATA = {
    DICT: EXTENDED_DICT,
    BEGINNER: BEGINNER_DATA,
    PRESET: PRESET_DATA,
    SITUATION: SITUATION_DATA,
    TECH: TECH_DATA,
    SECRET: SECRET_DATA
  };

  console.log("✅ Quality Preset Data V1 Loaded (Fully Restored)");
})();

