(function(){
  "use strict";
  // データ格納箱を初期化
  window.__QP_DB = window.__QP_DB || {};

  // ■ 1. シークレット
  window.__QP_DB.secret = {
    label: "✨SECRET・究極艶・Portra 400", 
    val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (subsurface scattering), (global illumination), (physically based rendering), (unreal engine 5), (lumen reflections), (nanite geometry), (8k uhd), (octane render), (realistic lighting), (shiny hair), (glossy hair), (Kodak Portra 400), (low contrast)",
    links: ["基本・最高画質", "光沢/ツヤ肌", "Shiny Skin", "シネマティック", "Cinematic", "UE5", "PBR", "整った顔立ち", "Perfect Face"]
  };

  // ■ 2. 初心者ガイド
  window.__QP_DB.beginner = {
    "🔰 ① 3D技術：安全セット (Safe 3D Tech)": [
      { label: "🟢 キャラ・人物・肌と光", val: "(realistic lighting), (subsurface scattering)", desc: "肌を生かし、全体をまとめる。迷ったらこれだけ。" },
      { label: "🟢 背景・空間・空気感", val: "(global illumination), (volumetric lighting)", desc: "空間の破綻を防ぎ、一気に雰囲気が出る王道セット。" },
      { label: "🟢 物・メカ・質感と影", val: "(physically based rendering), (ambient occlusion)", desc: "質感が嘘をつかなくなり、影が締まる。テカテカ事故防止。" }
    ],
    "🔰 ② エンジン選び：1つだけ選ぶ (Pick ONE Engine)": [
      { label: "Octane・とりあえず綺麗", val: "(octane render)", desc: "光が派手で凄そうに見える。一番わかりやすい選択。" },
      { label: "Arnold・落ち着いたリアル", val: "(arnold render)", desc: "人・顔・映画っぽさ。破綻しにくい。" },
      { label: "V-Ray・背景・建築・静寂", val: "(v-ray)", desc: "静かでちゃんとしている。背景やプロップ向き。" },
      { label: "UE5・ゲーム・世界観", val: "(unreal engine 5)", desc: "キャラ単体より、環境・世界観重視。" },
      { label: "Cycles・Blender風", val: "(cycles render)", desc: "主張は弱いが他と喧嘩しない安全パイ。" }
    ],
    "🔰 ③ 完成形テンプレ (Complete Templates)": [
      { label: "人物イラスト完成セット・Octane+", val: "(octane render), (realistic lighting), (subsurface scattering)", desc: "キャラ1枚絵の安全構成。派手さと肌の質感を両立。" },
      { label: "ファンタジー背景セット・UE5+", val: "(unreal engine 5), (global illumination), (volumetric lighting)", desc: "ゲームのような世界観と空気感を作る構成。" },
      { label: "武器・小物完成セット・V-Ray+", val: "(v-ray), (physically based rendering), (ambient occlusion)", desc: "質感と影を重視した、実在感のある物撮り構成。" }
    ],
    "🔰 ④ 質感・ツール (Optional Flavors)": [
      { label: "ZBrush・スカルプト・粘土感", val: "(zbrush sculpt), (digital sculpting), (clay render style)", desc: "フィギュアや彫刻のような、有機的で立体的な質感。" },
      { label: "Substance Painter・激細テクスチャ", val: "(substance painter), (pbr textures), (intricate texture)", desc: "表面の汚れや傷など、物質感を極限まで高める。" },
      { label: "Cinema 4D・クリーンな3D", val: "(cinema 4d render), (studio lighting), (clean render)", desc: "モーショングラフィックスのような、整った綺麗な3D感。" }
    ]
  };

  // ■ 3. 基本・画風
  window.__QP_DB.base = {
    "🏆 基本・画風 (Standard & Art Styles)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風", val: "(masterpiece), (best quality), (3d render style), (octane render), (highly detailed cg)" },
      { label: "パステル・夢かわ", val: "(pastel colors:1.3), (soft focus), (dreamy), (kawaii), (light pink and blue), (airy atmosphere), (fairy kei style), (soft lighting)" },
      { label: "水彩画風", val: "(watercolor medium), (soft brush strokes), (colorful), (wet on wet), (artistic), (white background)" },
      { label: "油絵・厚塗り", val: "(oil painting), (impasto), (thick brushwork), (textured canvas), (traditional media), (rich colors)" },
      { label: "レトロアニメ・90s", val: "(1990s source material), (retro anime style), (cel animation type), (analog film noise), (vhs artifact), (muted colors)" },
      { label: "水墨画", val: "(ink wash painting), (sumi-e), (brush strokes), (monochrome), (japanese traditional art), (minimalist)" }
    ],
    "💎 ハイエンド・特化 (High-End Specialized)": [
      { label: "★究極・レンダリング・Ultimate", val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)", links: ["基本・最高画質", "安全セット", "キャラ・人物", "レイトレーシング", "UE5", "PBR", "SSS", "ボリュメトリック", "8K", "整った顔立ち"] },
      { label: "幻想・コンセプトアート", val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (intricate scenery), (game art style), (artstation), (majestic)", links: ["基本・最高画質", "背景・空間", "ファンタジー"] },
      { label: "サイバー・ネオン", val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city), (night), (glowing outlines), (high contrast), (vibrant cyan and magenta)", links: ["物・メカ", "SF"] },
      { label: "アニメ・セミリアル・透明感", val: "(anime style:1.3), (cel shading:1.2), (soft lighting), (smooth rendering), (glossy highlights), (shiny hair:1.3), (beautiful detailed eyes), (transparent skin texture), (rim light), (blush)", links: ["アニメ塗り", "ソフトライティング", "光沢/ツヤ肌", "リムライト"] },
      { label: "セミリアル・艶・アニメベース", val: "(anime style:1.2), (photorealistic:1.2), (smooth rendering:1.3), (beautiful detailed eyes), (shiny skin:1.4), (glossy hair:1.3), (detailed skin texture:1.2), (cinematic lighting), (rim light), (soft focus)", links: ["アニメ塗り", "光沢/ツヤ肌", "濡れた肌", "シネマティック"] },
      { label: "超艶・粘液特化", val: "(anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (extremely detailed skin, face, hair, slime textures:1.3), (cinematic lighting:1.3), (wet glossy oil-like sheen:1.3), (translucent dripping slime glow:1.3), (highly reflective fluid highlights:1.3), (iridescent rainbow oil reflections:1.3), (vivid anime-like colors:1.3)", links: ["基本・最高画質", "キャラ・人物", "光沢/ツヤ肌", "濡れた肌", "SSS", "レイトレーシング"] },
      { label: "人物特化ハイエンド", val: "(intricate details:1.3), (extremely detailed skin, face, hair:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1), (high-fidelity hair:1.2), (ultra shiny hair:1.1), (individual hair strands:1.2), (micro-texture:1.2), (cinematic framing:1.2), (professional photography:1.2)", links: ["基本・最高画質", "フォトリアル", "キャラ・人物", "整った顔立ち", "リアルな肌", "SSS", "8K", "被写界深度"] },
      { label: "風景・背景特化", val: "(ultra detailed background:1.3), (scenery:1.3), (hyperrealistic landscape), (detailed water), (detailed sky), (detailed clouds), (lush vegetation), (atmospheric perspective), (cinematic composition), (epic scale)", links: ["基本・最高画質", "背景・空間", "ボリュメトリック", "8K", "広角"] },
      { label: "メカ・SF特化", val: "(ultra detailed mecha), (mechanical parts:1.3), (complex machinery), (metallic texture), (scratched metal), (glowing lights), (sci-fi atmosphere), (cybernetic), (hard surface modeling), (intricate panel lines)", links: ["物・メカ", "3Dレンダリング風", "PBR", "レイトレーシング", "ハードサーフェス"] }
    ],
    "⚔️ 戦闘・アクション画風 (Battle & Action Styles)": [
      { label: "バトルアニメ風・作画", val: "(battle anime style), (sakuga), (intense action), (impact frames), (dynamic angle), (highly detailed effects)", links: ["エフェクト"] },
      { label: "アクションドローイング・荒々しさ", val: "(action drawing), (rough sketch style), (dynamic brushwork), (motion lines), (sketchy), (raw energy)", links: ["ダイナミックポーズ"] },
      { label: "劇画・アメコミ風", val: "(comic book style), (bold lines), (strong shadows), (inked), (western comic style), (high contrast)" },
      { label: "マンガ戦闘・集中線", val: "(manga style), (monochrome), (speed lines), (focus lines), (sound effects), (action focus)" },
      { label: "ダークファンタジー・重厚", val: "(dark fantasy), (grimdark), (blood splatters), (heavy atmosphere), (gothic), (muted colors)" }
    ]
  };

  // ■ 4. スタイル
  window.__QP_DB.styles = {
    "🏢 アニメスタジオ (Anime Studios)": [
      { ja: "京都アニメーション", en: "kyoto animation" }, { ja: "ufotable", en: "ufotable" }, { ja: "SHAFT", en: "shaft" }, { ja: "TRIGGER", en: "studio trigger" },
      { ja: "スタジオジブリ", en: "studio ghibli" }, { ja: "MAPPA", en: "mappa" }, { ja: "WIT STUDIO", en: "wit studio" }, { ja: "CloverWorks", en: "cloverworks" },
      { ja: "A-1 Pictures", en: "a-1 pictures" }, { ja: "Production I.G", en: "production i.g" }, { ja: "マッドハウス", en: "madhouse" }, { ja: "ボンズ", en: "bones" },
      { ja: "サンライズ", en: "sunrise" }, { ja: "東映アニメーション", en: "toei animation" }, { ja: "P.A.WORKS", en: "p.a. works" }, { ja: "動画工房", en: "doga kobo" }
    ],
    "🖌️ イラストレーター (Illustrators)": [
      { ja: "Mika Pikazo風", en: "mika pikazo style" }, { ja: "米山舞風", en: "yoneyama mai style" }, { ja: "ワダアルコ風", en: "wada arco style" }, { ja: "望月けい風", en: "kei mochizuki style" },
      { ja: "副島成記風・ペルソナ", en: "shigenori soejima style" }, { ja: "新川洋司風・MGS", en: "yoji shinkawa style" }, { ja: "天野喜孝風・FF", en: "yoshitaka amano style" }, { ja: "村田蓮爾風", en: "range murata style" },
      { ja: "カントク風", en: "kantoku style" }, { ja: "Tony風", en: "tony taka style" }, { ja: "珈琲貴族風", en: "coffee kizoku style" }, { ja: "redjuice風", en: "redjuice style" },
      { ja: "huke風", en: "huke style" }, { ja: "深崎暮人風", en: "misaki kurehito style" }
    ],
    "🎮 ゲームアート (Game Styles)": [
      { ja: "原神スタイル", en: "genshin impact style" }, { ja: "スターレイル風", en: "honkai: star rail style" }, { ja: "アークナイツ風", en: "arknights style" }, { ja: "アズレン風", en: "azur lane style" },
      { ja: "ブルアカ風", en: "blue archive style" }, { ja: "FGO風", en: "fate/grand order style" }, { ja: "ペルソナ5風", en: "persona 5 style" }, { ja: "ダンガンロンパ風", en: "danganronpa style" },
      { ja: "ニーア風", en: "nier: automata style" }, { ja: "FF風", en: "final fantasy style" }, { ja: "エルデンリング風", en: "elden ring style" }, { ja: "スプラトゥーン風", en: "splatoon style" },
      { ja: "グラブル風", en: "granblue fantasy style" }, { ja: "アイマス風", en: "the idolm@ster style" }
    ],
    "🎨 アート・絵画風 (Artistic)": [
      { label: "厚塗り・油絵", val: "(oil painting), (impasto:1.2), (visible brushstrokes), (rich texture)" }, { label: "水彩画", val: "(watercolor medium), (wet on wet), (soft edges), (splatter effect)" },
      { label: "インク・水墨画", val: "(ink wash painting), (sumi-e), (monochrome), (bold lines), (brush stroke)" }, { label: "スケッチ", val: "(sketch), (pencil drawing), (rough lines), (graphite medium), (hatching)" },
      { label: "線画", val: "(line art), (monochrome), (clean lines), (minimalist), (white background)" }, { label: "浮世絵", val: "(ukiyo-e style), (woodblock print), (flat perspective), (bold outlines), (washi paper texture)" },
      { label: "ポップアート", val: "(pop art style), (bold colors), (halftone dots), (comic book style)" }, { label: "ステンドグラス", val: "(stained glass style), (vibrant light), (mosaic pattern), (black outline)" },
      { label: "切り絵", val: "(paper cutout art), (layered paper), (shadow box), (3d depth)" }, { label: "サイケデリック", val: "(psychedelic art), (lsd trip style), (kaleidoscope pattern), (vibrant neon colors)" },
      { label: "点描画", val: "(pointillism), (stippling), (dots texture), (georges seurat style)" }
    ],
    "🌸 美学・コア (Aesthetics)": [
      { ja: "コテージコア", en: "cottagecore" }, { ja: "ダークアカデミア", en: "dark academia" }, { ja: "ウィアードコア", en: "weirdcore" }, { ja: "ドリームコア", en: "dreamcore" },
      { ja: "プールコア", en: "poolcore" }, { ja: "トラウマコア", en: "traumacore" }, { ja: "ゴブリンコア", en: "goblincore" }, { ja: "フェアリーコア", en: "fairycore" },
      { ja: "エンジェルコア", en: "angelcore" }, { ja: "サイバープレップ", en: "cyberprep" }, { label: "バービーコア", val: "(barbiecore), (pink aesthetic), (plastic texture), (girly), (fashion doll)" },
      { label: "キッドコア", val: "(kidcore), (primary colors), (childhood nostalgia), (toys), (rainbow), (playful)" }
    ],
    "🎵 音楽・ファッション (Music & Fashion)": [
      { ja: "ヘヴィメタル風", en: "heavy metal aesthetic" }, { ja: "ヒップホップ風", en: "hip hop style" }, { ja: "ジャズ・ノワール", en: "film noir style" }, { ja: "K-POP風", en: "k-pop aesthetic" },
      { ja: "ビジュアル系", en: "visual kei" }, { ja: "パンクロック", en: "punk rock style" }, { ja: "EDM・レイブ", en: "rave style" }, { ja: "グランジ", en: "grunge aesthetic" },
      { ja: "オートクチュール", en: "haute couture" }, { ja: "テックウェア", en: "techwear" }, { ja: "森ガール", en: "mori girl" }, { ja: "ギャル・Y2K", en: "gyaru style" },
      { ja: "ゴスロリ", en: "gothic lolita" }, { ja: "ストリート", en: "streetwear" }, { ja: "アヴァンギャルド", en: "avant-garde fashion" }
    ],
    "🖌️ 専門イラスト (Specialized Art)": [
      { ja: "ボタニカルアート", en: "botanical illustration" }, { ja: "解剖図", en: "anatomical drawing" }, { ja: "建築スケッチ", en: "architectural sketch" }, { ja: "ファッション画", en: "fashion illustration" },
      { ja: "児童画", en: "children's drawing" }, { ja: "等高線図", en: "topographic map" }, { ja: "特許図面", en: "patent drawing" }, { ja: "曼荼羅", en: "mandala" }
    ]
  };

  // ■ 5. 年代
  window.__QP_DB.eras = {
    "🕰️ 時代・年代 (History & Eras)": [
      { ja: "古代エジプト", en: "ancient egypt" }, { ja: "古代ギリシャ", en: "ancient greek" }, { ja: "中世ヨーロッパ", en: "medieval era" }, { ja: "西部開拓時代", en: "wild west" },
      { ja: "ヴィクトリア朝", en: "victorian era" }, { ja: "大正ロマン", en: "taisho roman" }, { ja: "1920年代・狂騒", en: "roaring twenties" }, { ja: "1950年代・ロカビリー", en: "1950s style" },
      { ja: "昭和レトロ", en: "showa era style" }, { ja: "バブル時代・80s", en: "bubble era" }, { ja: "Y2K・2000年代", en: "y2k aesthetic" }, { ja: "ポストアポカリプス", en: "post-apocalyptic" },
      { ja: "サイバーパンク未来", en: "cyberpunk future" }
    ]
  };

  // ■ 6. 品質・技術
  window.__QP_DB.quality = {
    "🛠️ 制作ソフト・ツール (Software & Tools)": [
      { ja: "Cinema 4D", en: "cinema 4d" }, { ja: "ZBrush・彫刻", en: "zbrush" }, { ja: "Maya", en: "maya" }, { ja: "Blender", en: "blender" }, { ja: "Substance Painter", en: "substance painter" }
    ],
    "🖥️ レンダリング・エンジン (Rendering Engines)": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" }, { ja: "Octane Render", en: "octane render" }, { ja: "Redshift Render", en: "redshift render" }, { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" }, { ja: "Corona Render", en: "corona render" }, { ja: "Blender Cycles", en: "cycles render" }
    ],
    "⚙️ 3D技術・シェーダー (3D Tech)": [
      { ja: "パストレーシング", en: "path tracing" }, { ja: "レイトレーシング", en: "ray tracing" }, { ja: "Lumen反射・UE5", en: "lumen reflections" }, { ja: "Naniteジオメトリ", en: "nanite geometry" },
      { ja: "PBR・物理ベース", en: "physically based rendering" }, { ja: "シェーダー", en: "shaders" }, { ja: "SSS・表面下散乱", en: "subsurface scattering" }, { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "グローバルイルミネーション", en: "global illumination" }, { ja: "ボリュメトリック照明", en: "volumetric lighting" }
    ],
    "✨ レンズ・ポストエフェクト (Lens & Post-Process)": [
      { ja: "ゴッドレイ", en: "god rays" }, { ja: "レンズフレア", en: "lens flare" }, { ja: "ブルーム効果", en: "bloom" }, { ja: "色収差", en: "chromatic aberration" },
      { ja: "ケラレ・周辺減光", en: "vignette" }, { ja: "回折スパイク・光条", en: "diffraction spikes" }, { ja: "ハレーション", en: "halation" }, { ja: "フィルムグレイン", en: "film grain" },
      { ja: "ポストプロセス", en: "post-processing" }, { ja: "被写界深度・DoF", en: "depth of field" }, { ja: "ボケ", en: "bokeh" }
    ],
    "📸 カメラ・映画技術 (Camera & Cinema)": [
      { ja: "ISO 100", en: "iso 100" }, { ja: "f/1.8", en: "f/1.8" }, { ja: "シャッタースピード 1/1000", en: "shutter speed 1/1000" }, { ja: "85mm・ポートレート", en: "85mm lens" },
      { ja: "魚眼レンズ", en: "fisheye lens" }, { ja: "IMAX", en: "imax" }, { ja: "70mmフィルム", en: "70mm film" }, { ja: "テクニカラー", en: "technicolor" }, { ja: "銀残し", en: "bleach bypass" }
    ],
    "💡 照明・ライティング (Lighting)": [
      { ja: "レンブラント照明", en: "rembrandt lighting" }, { ja: "バタフライ照明", en: "butterfly lighting" }, { ja: "リムライト", en: "rim lighting" }, { ja: "キャッチライト", en: "catchlight" },
      { ja: "ソフトボックス", en: "softbox lighting" }, { ja: "シネマティック照明", en: "cinematic lighting" }
    ],
    "💎 超高解像度・補正 (High Fidelity)": [
      { ja: "8K UHD", en: "8k uhd" }, { ja: "4K UHD", en: "4k uhd" }, { ja: "16K解像度", en: "16k resolution" }, { ja: "ギガピクセル", en: "gigapixel" },
      { ja: "RAW写真", en: "raw photo" }, { ja: "シャープフォーカス", en: "sharp focus" }
    ],
    "🎨 色彩・パレット (Color Palettes)": [
      { ja: "トリコロール", en: "tricolor" }, { ja: "モノトーン", en: "monotone" }, { ja: "パステルカラー", en: "pastel colors" }, { ja: "ネオンカラー", en: "neon colors" },
      { ja: "ビビッド", en: "vivid colors" }, { ja: "レトロカラー", en: "retro colors" }, { ja: "暖色系", en: "warm colour tones" }, { ja: "コダック Portra 400", en: "kodak portra 400" }
    ]
  };

  // ■ 7. ネガティブ
  window.__QP_DB.negatives = {
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
    ]
  };
})();

