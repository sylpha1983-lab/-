(function(){
  "use strict";

  const FAMILY = {
    ANIME_REAL: "anime_real",
    CG_ANIME: "cg_anime",
    ANIME_PAINT: "anime_paint",
    PHOTO: "photo",
    PIXEL_ART: "pixel_art",
    LOW_POLY: "low_poly",
    RETRO_ANIME: "retro_anime",
    ANALOG_MEDIA: "analog_media"
  };

  const GROUP = {
    POLISHED: "polished",
    EXPRESSION: "expression"
  };

  window.__SHIMA_QUALITY_QUICK_PRESET_GROUPS_V1__ = [
    { key: GROUP.POLISHED, label: "高品質系", shortLabel: "高品質", icon: "✨" },
    { key: GROUP.EXPRESSION, label: "表現品質系", shortLabel: "表現品質", icon: "🎞" }
  ];

  window.__SHIMA_QUALITY_QUICK_PRESET_FAMILIES_V1__ = [
    { key: FAMILY.ANIME_REAL, group: GROUP.POLISHED, label: "リアルアニメ", shortLabel: "リアルアニメ", icon: "🧊" },
    { key: FAMILY.CG_ANIME, group: GROUP.POLISHED, label: "CGアニメ", shortLabel: "CGアニメ", icon: "💎" },
    { key: FAMILY.ANIME_PAINT, group: GROUP.POLISHED, label: "アニメ塗り", shortLabel: "アニメ塗り", icon: "🎨" },
    { key: FAMILY.PHOTO, group: GROUP.POLISHED, label: "フォト", shortLabel: "フォト", icon: "📷" },
    { key: FAMILY.PIXEL_ART, group: GROUP.EXPRESSION, label: "ピクセル", shortLabel: "ピクセル", icon: "👾" },
    { key: FAMILY.LOW_POLY, group: GROUP.EXPRESSION, label: "ローポリ", shortLabel: "ローポリ", icon: "🔺" },
    { key: FAMILY.RETRO_ANIME, group: GROUP.EXPRESSION, label: "旧アニメ", shortLabel: "旧アニメ", icon: "📺" },
    { key: FAMILY.ANALOG_MEDIA, group: GROUP.EXPRESSION, label: "アナログ", shortLabel: "アナログ", icon: "📼" }
  ];

  const animeRealStandard = [
    "(anime-realism blend:1.2)",
    "semi-realistic rendering",
    "(masterpiece:1.2)",
    "highest quality",
    "detailed face",
    "crisp details",
    "cinematic lighting",
    "subsurface scattering",
    "global illumination",
    "style consistency"
  ];

  const animeRealHigh = [
    "(anime-realism blend:1.25)",
    "(semi-realistic rendering:1.2)",
    "(masterpiece:1.3)",
    "(highest quality:1.3)",
    "(ultra high resolution:1.2)",
    "absurdres",
    "(intricate details:1.2)",
    "crisp details",
    "cinematic lighting",
    "volumetric lighting",
    "global illumination",
    "high dynamic range lighting",
    "physically based lighting",
    "ray-traced reflections",
    "subsurface scattering",
    "ambient occlusion",
    "anisotropic highlights",
    "micro-surface detail",
    "material separation",
    "style consistency"
  ];

  const animeRealCrystal = animeRealHigh.concat([
    "(dewy skin sheen:1.15)",
    "luminous skin highlights",
    "controlled specular glow on skin",
    "sparkling translucent crystal hair",
    "jewelry-like crystal eyes",
    "collarbone and shoulder highlights"
  ]);

  const cgAnimeStandard = [
    "(3D anime rendering:1.2)",
    "(clean CG shading:1.15)",
    "smooth gradient shading",
    "vivid anime colors",
    "clean facial features",
    "crisp edges",
    "balanced studio lighting",
    "ambient occlusion",
    "material separation",
    "style consistency"
  ];

  const cgAnimeHigh = [
    "(high-end 3D anime rendering:1.3)",
    "(polished CG shading:1.25)",
    "(masterpiece:1.3)",
    "(highest quality:1.3)",
    "(intricate details:1.2)",
    "(cinematic lighting:1.2)",
    "smooth gradient shading",
    "vivid anime colors",
    "clean facial features",
    "crisp edges",
    "volumetric lighting",
    "global illumination",
    "ambient occlusion",
    "physically based materials",
    "subsurface scattering",
    "anisotropic highlights",
    "material separation",
    "micro-surface detail",
    "filmic color grading",
    "style consistency"
  ];

  const cgAnimeGamePv = cgAnimeHigh.concat([
    "(premium game PV finish:1.2)",
    "glossy translucent hair highlights",
    "jewel-like eye reflections",
    "controlled bloom",
    "luminous particles",
    "polished costume materials"
  ]);

  const animePaintStandard = [
    "(clean anime cel shading:1.2)",
    "(polished anime illustration:1.15)",
    "clean lineart",
    "flat color separation",
    "controlled cel shadows",
    "vivid color palette",
    "expressive facial features",
    "crisp details",
    "balanced lighting",
    "style consistency"
  ];

  const animePaintHigh = [
    "(refined anime illustration:1.3)",
    "(clean cel shading:1.25)",
    "(masterpiece:1.3)",
    "(highest quality:1.3)",
    "(intricate linework:1.2)",
    "(cinematic composition:1.2)",
    "flat color separation",
    "controlled cel shadows",
    "soft gradient accents",
    "vivid color palette",
    "detailed facial features",
    "detailed hair rendering",
    "sharp eye highlights",
    "fabric fold clarity",
    "rim lighting",
    "atmospheric depth",
    "clean silhouette",
    "crisp details",
    "color harmony",
    "style consistency"
  ];

  const animePaintEvent = animePaintHigh.concat([
    "(premium mobile game key visual:1.25)",
    "ornate costume detailing",
    "luminous magic particles",
    "jewel-like accessory highlights",
    "luxurious background accents",
    "dramatic event illustration lighting"
  ]);

  const photoStandard = [
    "(photorealistic rendering:1.2)",
    "(professional portrait photography:1.15)",
    "realistic skin texture",
    "realistic material response",
    "natural lighting",
    "sharp focus",
    "natural depth of field",
    "accurate color reproduction",
    "detailed facial features",
    "style consistency"
  ];

  const photoHigh = [
    "(photorealistic rendering:1.3)",
    "(professional photography:1.25)",
    "(masterpiece:1.3)",
    "(highest quality:1.3)",
    "(realistic skin texture:1.2)",
    "(cinematic lighting:1.2)",
    "realistic material response",
    "physically based lighting",
    "ray-traced reflections",
    "subsurface scattering",
    "ambient occlusion",
    "global illumination",
    "micro-surface detail",
    "high dynamic range lighting",
    "accurate color reproduction",
    "sharp focus",
    "natural depth of field",
    "realistic lens response",
    "filmic color grading",
    "style consistency"
  ];

  const photoCinematic = photoHigh.concat([
    "(cinematic portrait photography:1.25)",
    "85mm portrait lens",
    "shallow depth of field",
    "gentle facial key light",
    "soft rim light",
    "background compression"
  ]);

  const pixelArtStandard = [
    "(pixel art:1.25)",
    "(16-bit style:1.15)",
    "low resolution",
    "limited color palette",
    "color dithering",
    "hard pixel edges",
    "nearest-neighbor scaling",
    "clean pixel clusters",
    "readable sprite silhouette",
    "palette consistency"
  ];

  const pixelArtHigh = [
    "(high-detail pixel art:1.3)",
    "(16-bit pixel illustration:1.25)",
    "(masterful pixel clusters:1.2)",
    "(controlled color dithering:1.15)",
    "(crisp hard pixel edges:1.15)",
    "(limited palette harmony:1.15)",
    "sprite art",
    "nearest-neighbor scaling",
    "manual pixel anti-aliasing",
    "selective sub-pixel accents",
    "clean pixel clusters",
    "readable sprite silhouette",
    "tile-ready detail",
    "deliberate jagged contours",
    "indexed color look",
    "clear focal hierarchy",
    "balanced pixel contrast",
    "retro game graphics",
    "palette consistency",
    "style consistency"
  ];

  const pixelArtGameKv = pixelArtHigh.concat([
    "(premium 32-bit game sprite finish:1.2)",
    "ornate pixel costume detailing",
    "luminous pixel effects",
    "parallax game background",
    "arcade key visual composition",
    "polished sprite presentation"
  ]);

  const lowPolyStandard = [
    "(low-poly 3D art:1.25)",
    "(faceted geometry:1.15)",
    "simplified polygonal forms",
    "flat-shaded surfaces",
    "clean polygon silhouette",
    "limited texture detail",
    "readable surface planes",
    "stylized 3D proportions",
    "balanced studio lighting",
    "style consistency"
  ];

  const lowPolyHigh = [
    "(high-quality low-poly rendering:1.3)",
    "(refined faceted geometry:1.25)",
    "(clean low-poly topology:1.2)",
    "(polished flat shading:1.15)",
    "(crisp polygon silhouette:1.15)",
    "(controlled facet highlights:1.15)",
    "deliberate polygon count",
    "simplified geometric forms",
    "readable surface planes",
    "stylized material separation",
    "ambient occlusion",
    "soft global illumination",
    "clean edge flow",
    "balanced studio lighting",
    "controlled color palette",
    "clear focal hierarchy",
    "stable proportions",
    "composition clarity",
    "clean background separation",
    "style consistency"
  ];

  const lowPolyRetroGame = lowPolyHigh.concat([
    "(retro console 3D finish:1.2)",
    "low-resolution textures",
    "texture warping",
    "vertex lighting",
    "jagged polygon edges",
    "1990s game CG atmosphere"
  ]);

  const retroAnimeStandard = [
    "(retro anime style:1.25)",
    "(1980s cel animation:1.15)",
    "hand-painted cels",
    "limited animation look",
    "hand-inked outlines",
    "flat cel colors",
    "analog color palette",
    "simple cel shadows",
    "subtle film grain",
    "era consistency"
  ];

  const retroAnimeHigh = [
    "(premium retro anime illustration:1.3)",
    "(authentic hand-painted cels:1.25)",
    "(refined vintage linework:1.2)",
    "(controlled cel color separation:1.15)",
    "(period-accurate anime palette:1.15)",
    "(clean analog compositing:1.15)",
    "limited animation look",
    "hand-inked outlines",
    "painted background art",
    "simple two-tone cel shadows",
    "rostrum-camera depth",
    "subtle film grain",
    "slight color fading",
    "analog highlight bloom",
    "warm broadcast contrast",
    "clear character silhouette",
    "expressive period facial design",
    "balanced scene lighting",
    "era consistency",
    "style consistency"
  ];

  const retroAnimeBroadcast = retroAnimeHigh.concat([
    "(vintage TV broadcast finish:1.2)",
    "CRT color bleed",
    "soft scanlines",
    "tape-era chroma noise",
    "broadcast-safe saturation",
    "1980s opening sequence composition"
  ]);

  const analogMediaStandard = [
    "(VHS aesthetic:1.25)",
    "(analog video look:1.15)",
    "low quality",
    "scanlines",
    "analog video noise",
    "tape distortion",
    "chromatic aberration",
    "color bleeding",
    "soft broadcast sharpness",
    "analog texture consistency"
  ];

  const analogMediaHigh = [
    "(cinematic VHS aesthetic:1.3)",
    "(authentic analog tape texture:1.25)",
    "(controlled scanlines:1.2)",
    "(layered chroma noise:1.15)",
    "(period-accurate color bleed:1.15)",
    "(stable tape distortion:1.15)",
    "low quality",
    "analog video noise",
    "tracking imperfections",
    "head-switching noise",
    "chromatic aberration",
    "luma noise",
    "slight frame jitter",
    "soft broadcast sharpness",
    "faded blacks",
    "crushed highlights",
    "CRT phosphor glow",
    "4:3 broadcast composition",
    "analog texture consistency",
    "style consistency"
  ];

  const analogMediaArchive = analogMediaHigh.concat([
    "(found-footage archive finish:1.2)",
    "jpeg artifacts",
    "compression artifacts",
    "VHS dropout streaks",
    "generation-loss artifacts",
    "timeworn media patina"
  ]);

  window.__SHIMA_QUALITY_QUICK_PRESETS_V1__ = [
    {
      key: "anime_real_standard",
      family: FAMILY.ANIME_REAL,
      label: "リアルアニメ｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "人物や衣装を押しすぎず、リアル寄りアニメを手早く整える安定セット。",
      tags: animeRealStandard
    },
    {
      key: "anime_real_high",
      family: FAMILY.ANIME_REAL,
      label: "リアルアニメ｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "精細感、映画光、PBR、反射、SSSまで一括で入れる本気品質セット。",
      tags: animeRealHigh
    },
    {
      key: "anime_real_crystal_gloss",
      family: FAMILY.ANIME_REAL,
      label: "リアルアニメ｜水晶艶・高水準盛り",
      badge: "水晶艶・26語",
      tone: "special",
      desc: "高水準に濡れ艶肌、水晶髪、宝石眼を追加。肌・髪・目の質感も変わる華やか版。",
      tags: animeRealCrystal
    },
    {
      key: "cg_anime_standard",
      family: FAMILY.CG_ANIME,
      label: "CGアニメ｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "滑らかな陰影と素材分離を足し、扱いやすい3Dアニメ調へ整えるセット。",
      tags: cgAnimeStandard
    },
    {
      key: "cg_anime_high",
      family: FAMILY.CG_ANIME,
      label: "CGアニメ｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "高品位シェーディング、映画光、GI、SSSまでまとめた本気CGセット。",
      tags: cgAnimeHigh
    },
    {
      key: "cg_anime_game_pv",
      family: FAMILY.CG_ANIME,
      label: "CGアニメ｜ゲームPV・水晶艶",
      badge: "PV艶・26語",
      tone: "special",
      desc: "高水準に透け艶髪、宝石眼、発光粒子を追加。髪・目・衣装の質感も変わるPV版。",
      tags: cgAnimeGamePv
    },
    {
      key: "anime_paint_standard",
      family: FAMILY.ANIME_PAINT,
      label: "アニメ塗り｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "線、色面、セル影を素直に整える軽くて安定したアニメ塗りセット。",
      tags: animePaintStandard
    },
    {
      key: "anime_paint_high",
      family: FAMILY.ANIME_PAINT,
      label: "アニメ塗り｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "精密な線画、顔・髪・衣装の描写、光と色のまとまりを強化する本気セット。",
      tags: animePaintHigh
    },
    {
      key: "anime_paint_event",
      family: FAMILY.ANIME_PAINT,
      label: "アニメ塗り｜豪華ソシャゲイベント",
      badge: "豪華・26語",
      tone: "special",
      desc: "高水準に装飾、魔法粒子、宝石光、豪華背景を追加。衣装と演出を盛るイベント版。",
      tags: animePaintEvent
    },
    {
      key: "photo_standard",
      family: FAMILY.PHOTO,
      label: "フォト｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "自然光、肌と素材、ピントを手早く整える軽量な人物写真セット。",
      tags: photoStandard
    },
    {
      key: "photo_high",
      family: FAMILY.PHOTO,
      label: "フォト｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "PBR、反射、SSS、GI、HDRまで入れた高精細フォト品質セット。",
      tags: photoHigh
    },
    {
      key: "photo_cinematic_portrait",
      family: FAMILY.PHOTO,
      label: "フォト｜映画ポートレート",
      badge: "映画・26語",
      tone: "special",
      desc: "高水準に85mm、浅い被写界深度、柔らかな人物光を足す映画ポートレート版。",
      tags: photoCinematic
    },
    {
      key: "pixel_art_standard",
      family: FAMILY.PIXEL_ART,
      label: "ピクセル｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "低解像度、色数制限、硬いピクセル輪郭をまとめた扱いやすい16-bit表現。",
      tags: pixelArtStandard
    },
    {
      key: "pixel_art_high",
      family: FAMILY.PIXEL_ART,
      label: "ピクセル｜高密度",
      badge: "本気・20語",
      tone: "high",
      desc: "ピクセルクラスタ、ディザ、手動AA、パレット調和まで整える高密度セット。",
      tags: pixelArtHigh
    },
    {
      key: "pixel_art_game_kv",
      family: FAMILY.PIXEL_ART,
      label: "ピクセル｜ゲームKV・発光演出",
      badge: "ゲーム・26語",
      tone: "special",
      desc: "高密度版へ衣装ドット、発光エフェクト、パララックス背景を追加するゲーム演出版。",
      tags: pixelArtGameKv
    },
    {
      key: "low_poly_standard",
      family: FAMILY.LOW_POLY,
      label: "ローポリ｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "面の読みやすさ、フラット影、簡略形状を安定させる軽量ローポリセット。",
      tags: lowPolyStandard
    },
    {
      key: "low_poly_high",
      family: FAMILY.LOW_POLY,
      label: "ローポリ｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "トポロジー、面ハイライト、材質分離、AOまで磨く高品質ローポリセット。",
      tags: lowPolyHigh
    },
    {
      key: "low_poly_retro_game",
      family: FAMILY.LOW_POLY,
      label: "ローポリ｜初期ゲームCG",
      badge: "初期CG・26語",
      tone: "special",
      desc: "高水準版へ低解像度テクスチャ、頂点光、輪郭の荒さを足す初期ゲームCG版。",
      tags: lowPolyRetroGame
    },
    {
      key: "retro_anime_standard",
      family: FAMILY.RETRO_ANIME,
      label: "旧アニメ｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "手描きセル、インク線、色面、フィルム粒子をまとめた1980年代アニメ調。",
      tags: retroAnimeStandard
    },
    {
      key: "retro_anime_high",
      family: FAMILY.RETRO_ANIME,
      label: "旧アニメ｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "時代色、セル分離、背景美術、アナログ撮影感を丁寧に整える高水準版。",
      tags: retroAnimeHigh
    },
    {
      key: "retro_anime_broadcast",
      family: FAMILY.RETRO_ANIME,
      label: "旧アニメ｜TV放送・OP",
      badge: "放送・26語",
      tone: "special",
      desc: "高水準版へCRT滲み、走査線、テープ色ノイズ、旧OP構成を足す放送演出版。",
      tags: retroAnimeBroadcast
    },
    {
      key: "analog_media_standard",
      family: FAMILY.ANALOG_MEDIA,
      label: "アナログ｜標準",
      badge: "軽量・10語",
      tone: "standard",
      desc: "low qualityを欠点ではなく、走査線・テープ歪み・色滲みの表現としてPositiveへ入れます。",
      tags: analogMediaStandard
    },
    {
      key: "analog_media_high",
      family: FAMILY.ANALOG_MEDIA,
      label: "アナログ｜高水準",
      badge: "本気・20語",
      tone: "high",
      desc: "VHSノイズ、トラッキング乱れ、CRT発光、4:3放送構図を制御して重ねる高水準版。",
      tags: analogMediaHigh
    },
    {
      key: "analog_media_archive",
      family: FAMILY.ANALOG_MEDIA,
      label: "アナログ｜VHS・圧縮崩し",
      badge: "崩し・26語",
      tone: "special",
      desc: "高水準版へJPEG・圧縮・ドロップアウトを足し、古い保存映像の崩れを強める版。",
      tags: analogMediaArchive
    }
  ];
})();
