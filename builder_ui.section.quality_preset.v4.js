(function(){
  "use strict";
  const VERSION = 4; 
  const KEY = "quality_preset";

  // ==============================================================================
  // 1. 品質・技術データ
  // ==============================================================================
  const QUALITY_DATA = {
    "🛠️ 制作ソフト・ツール": [
      { ja: "Cinema 4D", en: "cinema 4d" }, { ja: "ZBrush (彫刻)", en: "zbrush" }, { ja: "Maya", en: "maya" }, { ja: "Blender", en: "blender" }, { ja: "Substance Painter", en: "substance painter" }
    ],
    "🖥️ レンダリング・エンジン": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" }, { ja: "Octane Render", en: "octane render" }, { ja: "Redshift Render", en: "redshift render" }, { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" }, { ja: "Corona Render", en: "corona render" }, { ja: "Blender Cycles", en: "cycles render" }
    ],
    "⚙️ 3D技術・シェーダー": [
      { ja: "パストレーシング", en: "path tracing" }, { ja: "レイトレーシング", en: "ray tracing" }, { ja: "Lumen反射 (UE5)", en: "lumen reflections" }, { ja: "Naniteジオメトリ", en: "nanite geometry" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" }, { ja: "シェーダー", en: "shaders" }, { ja: "SSS (表面下散乱)", en: "subsurface scattering" }, { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
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
      { ja: "RAW写真", en: "raw photo" }, { ja: "シャープフォーカス", en: "sharp focus" }
    ]
  };

  // ==============================================================================
  // 2. ネガティブワード (単語)
  // ==============================================================================
  const NEG_WORDS_DATA = {
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
    ],
    // ★追加: 目のハイライト除去用
    "👁️ 目のハイライト除去 (Kill Highlights)": [
      { ja: "目のハイライト", en: "eye highlight" },
      { ja: "目の反射", en: "reflection" },
      { ja: "キラキラ・輝き", en: "sparkle" },
      { ja: "光の粒子", en: "light particles" },
      { ja: "美しい目 (キラキラ化防止)", en: "beautiful detailed eyes" },
      { ja: "明るい目", en: "bright eyes" }
    ]
  };

  // ==============================================================================
  // 3. ネガティブプリセット (セット)
  // ==============================================================================
  const NEG_SETS = {
    "ネガティブプリセット": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      // ★追加
      { label: "目のハイライト完全除去", val: "eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes", desc: "目に光を入れないための強力な除外設定" }
    ]
  };

  // 翻訳辞書
  const DICT = {
    "cinema 4d": "Cinema 4D", "zbrush": "ZBrush", "blender": "Blender", "substance painter": "Substance Painter",
    "unreal engine 5": "UE5", "octane render": "Octane Render", "ray tracing": "レイトレーシング", "path tracing": "パストレーシング",
    "lumen reflections": "Lumen反射", "nanite geometry": "Nanite", "physically based rendering": "PBR",
    "subsurface scattering": "SSS", "ambient occlusion": "AO", "global illumination": "GI", "volumetric lighting": "ボリュメトリック照明",
    "god rays": "ゴッドレイ", "lens flare": "レンズフレア", "bloom": "ブルーム", "chromatic aberration": "色収差",
    "vignette": "ケラレ", "depth of field": "被写界深度", "bokeh": "ボケ", "rembrandt lighting": "レンブラント照明",
    "cinematic lighting": "シネマティック照明", "8k uhd": "8K", "raw photo": "RAW写真", "sharp focus": "シャープ",
    "low quality": "低品質", "worst quality": "最低品質", "jpeg artifacts": "JPEGノイズ", "blurry": "ぼやけた",
    "bad anatomy": "崩れた解剖学", "bad hands": "崩れた手", "missing fingers": "欠損した指", "extra fingers": "余分な指",
    "text": "テキスト", "watermark": "透かし", "signature": "署名", "username": "ユーザー名", "logo": "ロゴ",
    // 目のハイライト関連
    "eye highlight": "目のハイライト", "reflection": "反射", "sparkle": "キラキラ", 
    "light particles": "光の粒子", "beautiful detailed eyes": "美しく詳細な目", "bright eyes": "明るい目"
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      
      // ★修正: v1.jsが作ったコンテナを探して、そこに中身を入れるだけにする
      // 重複作成（createElementによるメインセクション作成）を廃止
      
      const conQuality = document.getElementById("qp-quality-content");
      if (conQuality) {
        Object.entries(QUALITY_DATA).forEach(([k,v]) => { conQuality.appendChild(createSubAccordion(k, v)); });
      }

      const conNegSets = document.getElementById("qp-neg-sets-content");
      if (conNegSets) {
        Object.entries(NEG_SETS).forEach(([k,v]) => { conNegSets.appendChild(createSubAccordion(k, v)); });
      }

      const conNegWords = document.getElementById("qp-neg-words-content");
      if (conNegWords) {
        Object.entries(NEG_WORDS_DATA).forEach(([k,v]) => { conNegWords.appendChild(createSubAccordion(k, v)); });
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

