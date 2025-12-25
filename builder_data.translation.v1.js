(function(){
  "use strict";

  // ============================================================
  // 旧Core(dict方式) 対応の「安定版」翻訳辞書
  // ============================================================

  // 1) 英→日: 単独キー辞書
  const EN_TO_JA = {
    // poses (basic)
    "standing pose": "立ちポーズ",
    "standing": "立ちポーズ",
    "idle pose": "待機ポーズ（アイドル）",
    "model pose": "モデル立ち",
    "contrapposto": "S字立ち（コントラポスト）",
    "casual pose": "日常ポーズ（カジュアル）",
    "looking over shoulder": "振り返り",
    "looking back": "振り返り",
    "crossed arms": "腕組み",
    "standing with legs apart": "仁王立ち",
    "wide stance": "仁王立ち",
    "hands in pockets": "ポケットに手",

    // extra poses
    "sitting": "座り",
    "sitting on floor": "床に座る",
    "seiza": "正座",
    "kneeling": "立ち膝",
    "squatting": "しゃがむ",
    "lying": "寝そべる",
    "on stomach": "うつ伏せ",
    "on back": "仰向け",
    "on side": "横向き",

    // lighting
    "natural lighting": "自然光",
    "sunlight": "太陽光",
    "soft lighting": "ソフトライティング（柔らかい）",
    "hard lighting": "ハードライティング（硬い）",
    "cinematic lighting": "シネマティック（映画風）",
    "dramatic lighting": "ドラマチック",
    "rembrandt lighting": "レンブラント照明",
    "volumetric lighting": "ボリュメトリック（光の筋）",
    "god rays": "ゴッドレイ",
    "bioluminescence": "生物発光",
    "neon lighting": "ネオン照明",
    "studio lighting": "スタジオ照明",
    "realistic lighting": "リアルなライティング", // 追加

    // shadow
    "deep shadow": "濃い影",
    "soft shadow": "柔らかい影",
    "drop shadow": "ドロップシャドウ",
    "backlighting": "逆光",
    "silhouette": "シルエット",
    "ray tracing": "レイトレーシング影",

    // quality & details
    "masterpiece": "傑作",
    "best quality": "最高品質",
    "ultra high resolution": "超高解像度",
    "photorealistic": "フォトリアル",
    "8k uhd": "8K UHD",
    "8k": "8K",
    "depth of field": "被写界深度",
    "bokeh": "ボケ",
    "blurred background": "背景ぼかし",
    "ultra-detailed": "超精細",
    "illustration": "イラスト調",
    "centered": "中央配置",
    "intricate details": "複雑な詳細",
    "highres": "高解像度",
    "extremely detailed": "極めて詳細",
    "sharp focus": "シャープフォーカス",
    "official art": "公式アート",
    "unity 8k wallpaper": "Unity 8K壁紙",
    "detailed background": "詳細な背景",
    "8k wallpaper": "8K壁紙", // 追加
    "intricate": "緻密", // 追加
    "high budget": "高予算", // 追加
    "hdr": "HDR（ハイダイナミックレンジ）", // 追加
    "low contrast": "低コントラスト", // 追加

    // Rendering Engines & Tech (★追加)
    "octane render": "Octane Render",
    "unreal engine 5": "Unreal Engine 5",
    "physically based rendering": "物理ベースレンダリング(PBR)",
    "lumen reflections": "Lumen反射",
    "nanite geometry": "Naniteジオメトリ",
    "subsurface scattering": "サブサーフェス・スキャタリング（肌の透け感）",
    "global illumination": "グローバルイルミネーション（反射）",
    "path tracing": "パストレーシング",
    "anime-realism blend": "アニメ・リアル調ブレンド",

    // Body & Face Details (★追加)
    "beautiful detailed eyes": "美しく詳細な瞳",
    "detailed iris": "詳細な虹彩",
    "reflection in eyes": "瞳のハイライト",
    "sparkling eyes": "輝く瞳",
    "detailed skin": "詳細な肌",
    "soft skin": "柔らかい肌",
    "skin pores": "毛穴",
    "realistic skin texture": "リアルな肌（毛穴等）",
    "detailed hair": "詳細な髪",
    "hair strands": "髪の毛一本一本",
    "lustrous hair": "艶やかな髪",
    "shiny hair": "ツヤ髪",
    "glossy hair": "光沢髪",
    
    // Film & Camera (★追加)
    "kodak portra 400": "Kodak Portra 400（暖かみ）",

    // Art Style
    "anime coloring": "アニメ塗り",
    "cel shading": "セルシェーディング",
    "vibrant colors": "鮮やかな色彩",
    "clean lines": "綺麗な線",
    "thick painting": "厚塗り",
    "impasto": "インパスト(厚塗り)",
    "realistic texture": "リアルな質感",
    "rich colors": "豊かな色彩",
    "watercolor": "水彩",
    "soft colors": "柔らかな色使い",
    "wet on wet": "ウェット・オン・ウェット",
    "gentle atmosphere": "優しい雰囲気"
  };

  // 2) 日→英: “戻すときの正解” を固定
  const EN_TO_JA_PREFERRED = {
    // poses
    "standing pose": "立ちポーズ",
    "idle pose": "待機ポーズ（アイドル）",
    "model pose": "モデル立ち",
    "contrapposto": "S字立ち（コントラポスト）",
    "casual pose": "日常ポーズ（カジュアル）",
    "looking over shoulder": "振り返り",
    "crossed arms": "腕組み",
    "standing with legs apart": "仁王立ち",
    "hands in pockets": "ポケットに手",

    // quality
    "masterpiece": "傑作",
    "best quality": "最高品質",
    "ultra-detailed": "超精細",
    "8k": "8K",
    "illustration": "イラスト調",
    "depth of field": "被写界深度",
    "bokeh": "ボケ",
    "blurred background": "背景ぼかし",
    "centered": "中央配置",
    "intricate details": "複雑な詳細",
    "highres": "高解像度",
    "extremely detailed": "極めて詳細",
    "sharp focus": "シャープフォーカス",
    "official art": "公式アート",
    "unity 8k wallpaper": "Unity 8K壁紙",
    "detailed background": "詳細な背景",
    "8k wallpaper": "8K壁紙",
    "intricate": "緻密",
    "high budget": "高予算",
    "hdr": "HDR（ハイダイナミックレンジ）",
    "low contrast": "低コントラスト",

    // Tech & Engines
    "octane render": "Octane Render",
    "unreal engine 5": "Unreal Engine 5",
    "physically based rendering": "物理ベースレンダリング(PBR)",
    "lumen reflections": "Lumen反射",
    "nanite geometry": "Naniteジオメトリ",
    "subsurface scattering": "サブサーフェス・スキャタリング（肌の透け感）",
    "global illumination": "グローバルイルミネーション（反射）",
    "anime-realism blend": "アニメ・リアル調ブレンド",

    // Details
    "beautiful detailed eyes": "美しく詳細な瞳",
    "detailed iris": "詳細な虹彩",
    "reflection in eyes": "瞳のハイライト",
    "sparkling eyes": "輝く瞳",
    "detailed skin": "詳細な肌",
    "soft skin": "柔らかい肌",
    "skin pores": "毛穴",
    "realistic skin texture": "リアルな肌（毛穴等）",
    "detailed hair": "詳細な髪",
    "hair strands": "髪の毛一本一本",
    "lustrous hair": "艶やかな髪",
    "shiny hair": "ツヤ髪",
    "glossy hair": "光沢髪",
    "kodak portra 400": "Kodak Portra 400（暖かみ）",

    // Art Style
    "anime coloring": "アニメ塗り",
    "cel shading": "セルシェーディング",
    "vibrant colors": "鮮やかな色彩",
    "clean lines": "綺麗な線",
    "thick painting": "厚塗り",
    "impasto": "インパスト(厚塗り)",
    "realistic texture": "リアルな質感",
    "rich colors": "豊かな色彩",
    "watercolor": "水彩",
    "soft colors": "柔らかな色使い",
    "wet on wet": "ウェット・オン・ウェット",
    "gentle atmosphere": "優しい雰囲気",

    // lighting
    "soft lighting": "ソフトライティング（柔らかい）",
    "hard lighting": "ハードライティング（硬い）",
    "cinematic lighting": "シネマティック（映画風）",
    "volumetric lighting": "ボリュメトリック（光の筋）",
    "realistic lighting": "リアルなライティング"
  };

  // --- Core待ち ---
  function waitAndRegister(){
    const OT = window.__outputTranslation;
    if (!OT || typeof OT.register !== "function" || typeof OT.toggle !== "function" || typeof OT.normalize !== "function") {
      return setTimeout(waitAndRegister, 50);
    }

    try {
      // 1) 同義語・全データを先に入れる
      OT.register(EN_TO_JA);

      // 2) 逆引きの「正解」を後から入れて上書き固定する
      OT.register(EN_TO_JA_PREFERRED);

      console.log("[translation] updated dictionary registered.");
    } catch (e) {
      console.warn("[translation] register failed:", e);
    }
  }

  waitAndRegister();
})();

