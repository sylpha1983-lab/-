(function(){
  "use strict";
  // =============================================================================
  // 📦 データ・辞書定義ファイル (Data & Dictionary)
  // =============================================================================

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

  // 辞書拡張定義
  let EXTENDED_DICT = {
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度",
    "ultra high resolution": "超高解像度", "photorealistic": "フォトリアル",
    "realistic": "リアル", "8k": "8K", "raw photo": "RAW写真",
    "detailed skin texture": "肌の質感", "anime style": "アニメ調",
    "cel shading": "セルルック", "vibrant colors": "鮮やかな色",
    "clean lines": "綺麗な線", "flat color": "フラットカラー",
    "thick painting": "厚塗り", "impasto": "厚塗り(インパスト)",
    "watercolor": "水彩画風", "1990s anime style": "90年代アニメ",
    "anime key visual": "キービジュアル", "sketch": "スケッチ",
    "monochrome": "モノクロ", "semi-realistic": "セミリアル",
    "realistic lighting": "リアルな照明",
    "subsurface scattering": "サブサーフェス (透け感)",
    "global illumination": "グローバルイルミネーション",
    "volumetric lighting": "ボリュメトリック (光の筋)",
    "anime-realism blend": "アニメ・リアル融合",
    "cinematic lighting": "シネマティック (映画風)",
    "physically based rendering": "PBR (物理ベース)",
    "octane render": "Octane Render", "unreal engine 5": "UE5",
    "ray tracing": "レイトレーシング", "ambient occlusion": "AO",
    "god rays": "ゴッドレイ", "bloom": "ブルーム",
    "depth of field": "被写界深度", "bokeh": "ボケ"
  };

  // ------------------------------------------------------------------
  // 2. 初心者ガイド (復元版)
  // ------------------------------------------------------------------
  const BEGINNER_DATA = {
    "🔰 基本の画質設定 (Quality)": [
      { label: "超高画質セット", val: "(masterpiece), (best quality), (ultra-detailed), (8k), (illustration)", desc: "とりあえずこれをONにすれば綺麗になります" },
      { label: "背景ボケ・人物集中", val: "(depth of field), (bokeh), (blurred background), (centered)", desc: "人物を際立たせたい時に" }
    ],
    "🎨 イラストのタッチ (Style)": [
      { label: "アニメ塗り (セルルック)", val: "(anime coloring), (cel shading), (vibrant colors), (clean lines)", desc: "くっきりとしたアニメ調" },
      { label: "厚塗り (セミリアル)", val: "(thick painting), (impasto), (realistic texture), (rich colors)", desc: "重厚感のある塗り" },
      { label: "水彩風 (淡い)", val: "(watercolor), (soft colors), (wet on wet), (gentle atmosphere)", desc: "柔らかい雰囲気" }
    ]
  };

  // ------------------------------------------------------------------
  // 3. プレースホルダデータ
  // ------------------------------------------------------------------
  const PRESET_DATA = {};
  const SITUATION_DATA = {};
  const TECH_DATA = {};
  const SECRET_DATA = {};

  // ------------------------------------------------------------------
  // 4. グローバル登録
  // ------------------------------------------------------------------
  window.__QP_DATA = {
    DICT: EXTENDED_DICT,
    BEGINNER: BEGINNER_DATA,
    PRESET: PRESET_DATA,
    SITUATION: SITUATION_DATA,
    TECH: TECH_DATA,
    SECRET: SECRET_DATA
  };

  console.log("✅ builder_data.qp_base.js (初心者ガイド復元版) Loaded");
})();