(function(){
  "use strict";
  const VERSION = 3; // 拡張パックB (技術・SF・質感)
  const KEY = "quality_preset";

  // === 拡張データ ===
  const PRESETS_DATA = {};

  PRESETS_DATA["📸 特殊撮影 (Camera)"] = [
    { label: "魚眼 (Fisheye)", val: "(fisheye lens), (gopro footage), (wide angle), (distorted perspective)" },
    { label: "防犯カメラ (CCTV)", val: "(cctv footage), (security camera), (low quality video), (grainy), (surveillance)" },
    { label: "ポラロイド (Polaroid)", val: "(polaroid photo), (vintage exposure), (vignette), (soft focus), (film grain)" },
    { label: "ドローン (Drone)", val: "(drone footage), (aerial view), (bird's eye view), (high altitude), (wide shot)" },
    { label: "水中 (Underwater)", val: "(underwater photography), (refraction), (bubbles), (caustics)" },
    { label: "マクロ (Macro)", val: "(macro photography), (extreme close-up), (shallow depth of field), (bokeh)" },
    { label: "サーモグラフィ (Thermal)", val: "(thermal imaging), (heat map), (infrared camera), (predator vision)" },
    { label: "X線 (X-Ray)", val: "(x-ray), (skeleton visible), (transparent body), (blue and white inverted)" },
    { label: "ナイトビジョン (Night Vision)", val: "(night vision), (green tint), (grainy), (glowing eyes)" }
  ];

  PRESETS_DATA["🎞️ フィルム・質感 (Film Looks)"] = [
    { label: "Kodak Portra風", val: "(kodak portra), (analog film), (warm tones), (fine grain), (vintage color)" },
    { label: "チェキ風 (Instax)", val: "(instax), (instant photo), (soft focus), (flash photography), (white frame)" },
    { label: "使い捨てカメラ風", val: "(disposable camera), (harsh flash), (vignette), (lo-fi), (authentic)" },
    { label: "VHSテープ風", val: "(vhs artifact), (glitch), (scanlines), (tracking error), (low resolution)" }
  ];

  PRESETS_DATA["🧪 SF・パンク (Sci-Fi)"] = [
    { label: "サイバーパンク", val: "(cyberpunk), (neon lights), (holograms), (night city), (chromatic aberration)" },
    { label: "スチームパンク", val: "(steampunk), (brass and copper), (gears and cogs), (steam engine), (goggles)" },
    { label: "バイオパンク", val: "(biopunk), (organic technology), (flesh and metal), (glowing veins), (mutant)" },
    { label: "ソーラーパンク", val: "(solarpunk), (nature and technology), (green city), (sustainable), (sunlight)" },
    { label: "ディーゼルパンク", val: "(dieselpunk), (steel and oil), (military industrial), (gritty), (smoke)" }
  ];

  PRESETS_DATA["🏺 マニアック画法 (Niche)"] = [
    { label: "設計図 (Blueprint)", val: "(blueprint), (schematic), (technical drawing), (white lines on blue), (grid background)" },
    { label: "黒板アート (Chalkboard)", val: "(chalkboard art), (chalk texture), (blackboard), (white chalk), (hand drawn)" },
    { label: "タロット風 (Tarot)", val: "(tarot card style), (art nouveau frame), (symbolic), (decorative border)" },
    { label: "ボクセル (Voxel)", val: "(voxel art), (minecraft style), (3d pixels), (blocky), (isometric)" },
    { label: "アスキーアート (ASCII)", val: "(ascii art), (text based), (monospaced font), (retro computer style)" },
    { label: "クレイアニメ (Claymation)", val: "(claymation), (stop motion style), (plasticine), (clay texture), (aardman style)" },
    { label: "折り紙 (Origami)", val: "(origami), (folded paper), (paper craft), (geometric), (sharp edges)" },
    { label: "整理整頓 (Knolling)", val: "(knolling), (flat lay), (objects organized neatly), (top down view)" }
  ];

  PRESETS_DATA["✨ 質感・効果 (Texture)"] = [
    { label: "超光沢 (Ultra Glossy)", val: "(wet skin), (oiled skin), (glossy finish), (highly reflective), (sweat)" },
    { label: "マット (Matte)", val: "(matte finish), (flat color), (soft lighting), (low contrast)" },
    { label: "ガラス (Glass)", val: "(glass texture), (crystal), (translucent), (refraction), (fragile)" },
    { label: "金属 (Metallic)", val: "(metallic texture), (chrome), (gold), (silver), (reflection)" },
    { label: "ぬいぐるみ (Plushie)", val: "(plushie), (felt texture), (soft fabric), (stitches), (fuzzy)" },
    { label: "グリッチ (Glitch)", val: "(glitch effect), (datamosh), (scanlines), (distortion), (vhs artifact)" }
  ];

  PRESETS_DATA["💡 照明・雰囲気 (Mood)"] = [
    { label: "シネマティック", val: "(cinematic lighting), (dramatic atmosphere), (movie poster), (depth of field)" },
    { label: "ダーク・ゴシック", val: "(dark atmosphere), (gothic style), (chiaroscuro), (dimly lit), (mysterious)" },
    { label: "ソフト・夢幻的", val: "(soft lighting), (dreamy atmosphere), (bloom), (pastel colors), (ethereal)" },
    { label: "ホラー (Horror)", val: "(horror theme), (eerie), (creepy), (dark), (blood), (scary atmosphere)" },
    { label: "ファンタジー", val: "(fantasy world), (magic), (glowing particles), (enchanted), (mystical)" }
  ];

  PRESETS_DATA["🧸 キャラクター変形 (Deformation)"] = [
    { label: "ちびキャラ (Chibi)", val: "(chibi), (super deformed), (big head), (cute), (simplified)" },
    { label: "フィギュア風 (Figure)", val: "(figure), (toy), (plastic texture), (jointed), (miniature photography)" }
  ];

  // === 拡張ワード ===
  const EXTRA_ERAS = {
    "歴史・時代 (Extended Eras)": [
      { ja: "古代エジプト", en: "ancient egypt" }, { ja: "古代ギリシャ", en: "ancient greek" },
      { ja: "中世ヨーロッパ", en: "medieval era" }, { ja: "西部開拓時代", en: "wild west" },
      { ja: "ヴィクトリア朝", en: "victorian era" }, { ja: "大正ロマン", en: "taisho roman" },
      { ja: "1920年代 (狂騒)", en: "roaring twenties" }, { ja: "1950年代 (ロカビリー)", en: "1950s style" },
      { ja: "昭和レトロ", en: "showa era style" }, { ja: "バブル時代 (80s)", en: "bubble era" },
      { ja: "Y2K (2000年代)", en: "y2k aesthetic" }, { ja: "ポストアポカリプス", en: "post-apocalyptic" },
      { ja: "サイバーパンク未来", en: "cyberpunk future" }
    ],
    "建築・空間 (Architecture)": [
      { ja: "ブルータリズム", en: "brutalism" }, { ja: "インダストリアル", en: "industrial" },
      { ja: "廃墟", en: "ruins" }, { ja: "日本庭園", en: "japanese garden" }
    ]
  };

  const EXTRA_QUALITY = {
    "ディテール (Details)": [
      { ja: "詳細な目", en: "detailed eyes" }, { ja: "詳細な顔", en: "detailed face" },
      { ja: "詳細な髪", en: "detailed hair" }, { ja: "詳細な服", en: "detailed clothing" },
      { ja: "詳細な水", en: "detailed water" }, { ja: "詳細な雲", en: "detailed clouds" }
    ],
    "カメラ・撮影 (Camera)": [
      { ja: "被写界深度 (ボケ)", en: "depth of field" }, { ja: "ボケ", en: "bokeh" },
      { ja: "モーションブラー", en: "motion blur" }, { ja: "長時間露光", en: "long exposure" },
      { ja: "マクロレンズ", en: "macro lens" }, { ja: "魚眼レンズ", en: "fisheye lens" },
      { ja: "チルトシフト", en: "tilt shift" }, { ja: "広角レンズ", en: "wide angle lens" },
      { ja: "望遠レンズ", en: "telephoto lens" }, { ja: "光の軌跡", en: "light trails" }
    ],
    "構図 (Composition)": [
      { ja: "黄金比", en: "golden ratio" }, { ja: "三分割法", en: "rule of thirds" },
      { ja: "ダッチアングル", en: "dutch angle" }, { ja: "アオリ (下から)", en: "from below" },
      { ja: "フカン (上から)", en: "from above" }, { ja: "ダイナミック", en: "dynamic angle" },
      { ja: "クローズアップ", en: "close-up" }, { ja: "カウボーイショット", en: "cowboy shot" }
    ],
    "色彩・カラー (Colors)": [
      { ja: "ビビッド", en: "vivid colors" }, { ja: "パステル", en: "pastel colors" },
      { ja: "モノトーン", en: "monochrome" }, { ja: "セピア", en: "sepia" },
      { ja: "ネオン", en: "neon colors" }, { ja: "虹色", en: "rainbow colors" },
      { ja: "高コントラスト", en: "high contrast" }, { ja: "低コントラスト", en: "low contrast" }
    ],
    "技術・効果 (Tech & FX)": [
      { ja: "HDR", en: "HDR" }, { ja: "UHD", en: "UHD" }, { ja: "レイトレーシング", en: "ray tracing" },
      { ja: "サブサーフェス・スキャタリング", en: "subsurface scattering" },
      { ja: "ボリュメトリック照明", en: "volumetric lighting" }, { ja: "チンダル現象", en: "god rays" },
      { ja: "レンズフレア", en: "lens flare" }, { ja: "ブルーム", en: "bloom" },
      { ja: "色収差", en: "chromatic aberration" }, { ja: "ビネット", en: "vignette" },
      { ja: "回折スパイク", en: "diffraction spikes" }, { ja: "ハレーション", en: "halation" },
      { ja: "フィルムグレイン", en: "film grain" }, { ja: "グローバルイルミネーション", en: "global illumination" },
      { ja: "アンビエントオクルージョン", en: "ambient occlusion" }, { ja: "PBR", en: "physically based rendering" }
    ]
  };

  const EXTRA_NEG_WORDS = {
    "画質・品質 (Low Quality)": [
      { ja: "低品質", en: "low quality" }, { ja: "最低品質", en: "worst quality" },
      { ja: "普通の品質", en: "normal quality" }, { ja: "JPEGノイズ", en: "jpeg artifacts" },
      { ja: "ぼやけた", en: "blurry" }, { ja: "ピンボケ", en: "out of focus" },
      { ja: "低解像度", en: "lowres" }, { ja: "エラー", en: "error" },
      { ja: "醜い", en: "ugly" }, { ja: "ピクセル化", en: "pixelated" }
    ],
    "人体崩壊 (Bad Anatomy)": [
      { ja: "崩れた解剖学", en: "bad anatomy" }, { ja: "崩れた手", en: "bad hands" },
      { ja: "奇形の手", en: "malformed hands" }, { ja: "欠損した指", en: "missing fingers" },
      { ja: "余分な指", en: "extra fingers" }, { ja: "長い首", en: "long neck" },
      { ja: "変形", en: "deformed" }, { ja: "突然変異", en: "mutated" },
      { ja: "切断された肢", en: "disconnected limbs" }, { ja: "浮遊する肢", en: "floating limbs" },
      { ja: "余分な手足", en: "extra limbs" }, { ja: "崩れた顔", en: "poorly drawn face" }
    ],
    "不要な要素 (Unwanted)": [
      { ja: "テキスト", en: "text" }, { ja: "透かし", en: "watermark" }, { ja: "署名", en: "signature" },
      { ja: "ユーザー名", en: "username" }, { ja: "ロゴ", en: "logo" }, { ja: "著作権名", en: "copyright name" },
      { ja: "QRコード", en: "qr code" }, { ja: "バーコード", en: "bar code" }
    ],
    "構図・描写 (Composition)": [
      { ja: "見切れ", en: "out of frame" }, { ja: "クロップ", en: "cropped" },
      { ja: "悪い構図", en: "bad composition" }, { ja: "コラージュ", en: "collage" },
      { ja: "モザイク", en: "mosaic" }, { ja: "グリッチ", en: "glitch" }
    ]
  };

  // === v3用 辞書 ===
  const V3_DICT = {
    // Camera
    "fisheye lens": "魚眼レンズ", "gopro footage": "GoPro映像", "wide angle": "広角", "distorted perspective": "歪んだパース",
    "cctv footage": "防犯カメラ", "security camera": "監視カメラ", "low quality video": "低画質ビデオ", "grainy": "粒子感", "surveillance": "監視",
    "polaroid photo": "ポラロイド", "vintage exposure": "ヴィンテージ露出", "vignette": "ビネット", "soft focus": "ソフトフォーカス", "film grain": "フィルム粒子",
    "drone footage": "ドローン映像", "aerial view": "空撮", "bird's eye view": "鳥瞰図", "high altitude": "高高度", "wide shot": "ワイドショット",
    "underwater photography": "水中写真", "refraction": "屈折", "bubbles": "泡", "caustics": "コースティクス",
    "macro photography": "マクロ撮影", "extreme close-up": "超接写", "shallow depth of field": "浅い被写界深度", "bokeh": "ボケ",
    "thermal imaging": "サーモグラフィ", "heat map": "ヒートマップ", "infrared camera": "赤外線カメラ", "predator vision": "プレデター視覚",
    "x-ray": "X線", "skeleton visible": "骨格透視", "transparent body": "透明な体", "blue and white inverted": "青白反転",
    "night vision": "ナイトビジョン", "green tint": "緑かぶり", "glowing eyes": "輝く目",
    
    // Film
    "kodak portra": "Kodak Portra風", "analog film": "アナログフィルム", "warm tones": "暖色系", "fine grain": "微粒子", "vintage color": "ヴィンテージカラー",
    "instax": "チェキ風", "instant photo": "インスタント写真", "flash photography": "フラッシュ撮影", "white frame": "白い枠",
    "disposable camera": "使い捨てカメラ風", "harsh flash": "強いフラッシュ", "lo-fi": "ローファイ", "authentic": "本物っぽい",
    "vhs artifact": "VHSノイズ", "glitch": "グリッチ", "scanlines": "走査線", "tracking error": "トラッキングエラー", "low resolution": "低解像度", "retro video": "レトロビデオ",
    
    // Sci-Fi
    "cyberpunk": "サイバーパンク", "neon lights": "ネオン", "holograms": "ホログラム", "night city": "ナイトシティ", "chromatic aberration": "色収差",
    "steampunk": "スチームパンク", "brass and copper": "真鍮と銅", "gears and cogs": "歯車", "steam engine": "蒸気機関", "goggles": "ゴーグル", "clockwork": "時計仕掛け",
    "biopunk": "バイオパンク", "organic technology": "有機テクノロジー", "flesh and metal": "肉と金属", "glowing veins": "輝く静脈", "mutant": "ミュータント",
    "solarpunk": "ソーラーパンク", "nature and technology": "自然と技術", "green city": "緑の都市", "sustainable": "持続可能", "sunlight": "日光", "art nouveau architecture": "アール・ヌーヴォー建築", "utopia": "ユートピア",
    "dieselpunk": "ディーゼルパンク", "steel and oil": "鋼鉄と油", "military industrial": "軍産複合体", "gritty": "無骨な", "smoke": "煙",
    
    // Niche
    "blueprint": "設計図", "schematic": "回路図", "technical drawing": "製図", "white lines on blue": "青地に白線", "grid background": "グリッド背景",
    "chalkboard art": "黒板アート", "chalk texture": "チョークの質感", "blackboard": "黒板", "white chalk": "白チョーク", "hand drawn": "手描き", "dusty": "粉っぽい",
    "tarot card style": "タロット風", "art nouveau frame": "アール・ヌーヴォー枠", "symbolic": "象徴的", "decorative border": "装飾枠",
    "voxel art": "ボクセルアート", "minecraft style": "マイクラ風", "3d pixels": "3Dピクセル", "blocky": "ブロック状", "isometric": "アイソメトリック",
    "ascii art": "アスキーアート", "text based": "テキストベース", "monospaced font": "等幅フォント", "retro computer style": "レトロPC風", "green terminal": "緑の端末画面",
    "claymation": "クレイアニメ", "stop motion style": "ストップモーション", "plasticine": "プラスティシン", "clay texture": "粘土の質感", "aardman style": "アードマン風",
    "origami": "折り紙", "folded paper": "折った紙", "paper craft": "ペーパークラフト", "geometric": "幾何学的", "sharp edges": "鋭いエッジ",
    "knolling": "並べる(Knolling)", "flat lay": "フラットレイ", "objects organized neatly": "整列した物体", "top down view": "真上からの視点",
    
    // Texture
    "wet skin": "濡れた肌", "oiled skin": "オイル肌", "glossy finish": "光沢仕上げ", "highly reflective": "高反射", "sweat": "汗",
    "matte finish": "マット仕上げ", "flat color": "フラットカラー", "soft lighting": "柔らかな光", "low contrast": "低コントラスト",
    "glass texture": "ガラスの質感", "crystal": "クリスタル", "translucent": "半透明", "fragile": "儚さ",
    "metallic texture": "金属の質感", "chrome": "クローム", "gold": "金", "silver": "銀", "reflection": "反射",
    "plushie": "ぬいぐるみ", "felt texture": "フェルトの質感", "soft fabric": "柔らかい布", "stitches": "縫い目", "fuzzy": "ふわふわ",
    "glitch effect": "グリッチ効果", "datamosh": "データモッシュ", "distortion": "歪み",
    
    // Mood
    "cinematic lighting": "シネマティック照明", "dramatic atmosphere": "ドラマチックな雰囲気", "movie poster": "映画ポスター",
    "dark atmosphere": "暗い雰囲気", "gothic style": "ゴシック様式", "chiaroscuro": "明暗法", "dimly lit": "薄暗い", "mysterious": "ミステリアス",
    "dreamy atmosphere": "夢のような雰囲気", "bloom": "ブルーム", "ethereal": "幻想的",
    "horror theme": "ホラーテーマ", "eerie": "不気味", "creepy": "怖い", "dark": "暗い", "blood": "血", "scary atmosphere": "恐ろしい雰囲気",
    "fantasy world": "ファンタジー世界", "magic": "魔法", "glowing particles": "輝く粒子", "enchanted": "魔法にかかった", "mystical": "神秘的",
    
    // Chibi
    "chibi": "ちびキャラ", "super deformed": "スーパーデフォルメ", "big head": "頭でっかち", "simplified": "簡略化",
    "figure": "フィギュア", "toy": "おもちゃ", "plastic texture": "プラスチック質感", "jointed": "関節付き", "miniature photography": "ミニチュア写真",
    
    // Eras (v3分)
    "ancient greek": "古代ギリシャ", "medieval era": "中世", "wild west": "西部開拓時代", "roaring twenties": "狂騒の20年代",
    "1950s style": "1950年代風", "showa era style": "昭和レトロ", "bubble era": "バブル時代", "y2k aesthetic": "Y2K", "post-apocalyptic": "ポストアポカリプス",
    "cyberpunk future": "サイバーパンク未来", "victorian era": "ヴィクトリア朝", "victorian fashion": "ヴィクトリア朝ファッション",
    "taisho roman": "大正ロマン", "edo period": "江戸時代",
    "brutalism": "ブルータリズム", "industrial": "インダストリアル", "ruins": "廃墟", "japanese garden": "日本庭園",
    
    // Tech & Quality (v3分)
    "depth of field": "被写界深度", "motion blur": "モーションブラー", "long exposure": "長時間露光", "light trails": "光の軌跡",
    "macro lens": "マクロレンズ", "tilt shift": "チルトシフト", "wide angle lens": "広角レンズ", "telephoto lens": "望遠レンズ",
    "golden ratio": "黄金比", "rule of thirds": "三分割法", "dutch angle": "ダッチアングル", 
    "from below": "アオリ", "from above": "フカン", "dynamic angle": "ダイナミック", "close-up": "クローズアップ",
    "vivid colors": "ビビッド", "pastel colors": "パステル", "monochrome": "モノトーン", "sepia": "セピア", "neon colors": "ネオン", "rainbow colors": "虹色",
    "high contrast": "高コントラスト",
    "HDR": "ハイダイナミックレンジ(HDR)", "UHD": "超高精細(UHD)", "ray tracing": "レイトレーシング", "subsurface scattering": "サブサーフェス・スキャタリング",
    "volumetric lighting": "ボリュメトリック", "god rays": "チンダル現象", "lens flare": "レンズフレア",
    "physically based rendering": "物理ベースレンダリング", "PBR": "物理ベースレンダリング",
    "global illumination": "グローバルイルミネーション", "ambient occlusion": "アンビエントオクルージョン",
    "detailed eyes": "詳細な目", "detailed face": "詳細な顔", "detailed hair": "詳細な髪", "detailed clothing": "詳細な服", "detailed water": "詳細な水",
    "detailed clouds": "詳細な雲", "detailed trees": "詳細な木々", "cowboy shot": "カウボーイショット",
    "diffraction spikes": "回折スパイク", "halation": "ハレーション",
    
    // Negatives (v3分)
    "low quality": "低品質", "worst quality": "最低品質", "normal quality": "普通品質", "jpeg artifacts": "JPEGノイズ",
    "blurry": "ぼやけた", "out of focus": "ピンボケ", "lowres": "低解像度", "error": "エラー", "ugly": "醜い", "pixelated": "ピクセル化",
    "bad anatomy": "崩れた人体", "bad hands": "崩れた手", "missing fingers": "欠損した指", "extra fingers": "余分な指",
    "long neck": "長い首", "deformed": "変形", "mutated": "変異", "disfigured": "崩れた", "missing limb": "欠損した肢",
    "extra limbs": "余分な手足", "text": "テキスト", "watermark": "透かし", "signature": "署名", "username": "ユーザー名",
    "logo": "ロゴ", "out of frame": "フレーム外", "cropped": "切り取り", "bad composition": "悪い構図", "collage": "コラージュ", "mosaic": "モザイク"
  };

  function createSubAccordion(title, items, type) {
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    details.style.marginBottom = "6px";
    details.style.border = "1px solid #eee";
    details.style.borderRadius = "4px";
    details.style.background = "#fff";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.textContent = title;
    summary.style.fontWeight = "bold";
    summary.style.padding = "6px 10px";
    summary.style.cursor = "pointer";
    summary.style.background = "#f9f9f9";
    summary.style.fontSize = "0.9em";
    summary.style.color = "#555";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.className = "qp-content-grid";
    content.style.padding = "8px";
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    content.style.gap = "6px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.style.cursor = "pointer";
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.style.marginRight = "6px";

      if (type === "preset" || type === "negative_set") {
        cb.dataset.val = item.val;
        label.title = item.val;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label));
        // 辞書登録
        if(item.label && !V3_DICT[item.label]) V3_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(item.en && item.ja) V3_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V3_DICT);

      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");
      const erasContainer = document.querySelector("#qp-eras .qp-section-content");
      const qualityContainer = document.querySelector("#qp-quality .qp-section-content");
      const negWordsContainer = document.querySelector("#qp-neg-words .qp-section-content");

      if (presetsContainer) {
        Object.entries(PRESETS_DATA).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
      if (erasContainer) {
        Object.entries(EXTRA_ERAS).forEach(([k,v]) => erasContainer.appendChild(createSubAccordion(k, v, "era")));
      }
      if (qualityContainer) {
        Object.entries(EXTRA_QUALITY).forEach(([k,v]) => qualityContainer.appendChild(createSubAccordion(k, v, "word")));
      }
      if (negWordsContainer) {
        Object.entries(EXTRA_NEG_WORDS).forEach(([k,v]) => negWordsContainer.appendChild(createSubAccordion(k, v, "word")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

