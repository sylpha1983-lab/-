(function(){
  "use strict";
  const VERSION = 4; 
  const KEY = "quality_preset";

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
      { ja: "RAW写真", en: "raw photo" }, { ja: "シャープフォーカス", en: "sharp focus" }, { ja: "アニメ・リアル融合", en: "anime-realism blend" }
    ]
  };

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
    "👁️ 目のハイライト除去": [
      { ja: "目のハイライト", en: "eye highlight" }, { ja: "目の反射", en: "reflection" }, { ja: "キラキラ・輝き", en: "sparkle" },
      { ja: "光の粒子", en: "light particles" }, { ja: "美しい目", en: "beautiful detailed eyes" }, { ja: "明るい目", en: "bright eyes" }
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      { label: "目のハイライト完全除去", val: "eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes" }
    ]
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; 
    const summary = document.createElement("summary"); summary.textContent = title; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label"); const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      const conQuality = document.getElementById("qp-quality-content");
      if (conQuality) Object.entries(QUALITY_DATA).forEach(([k,v]) => { conQuality.appendChild(createSubAccordion(k, v)); });
      const conNegSets = document.getElementById("qp-neg-sets-content");
      if (conNegSets) Object.entries(NEG_SETS).forEach(([k,v]) => { conNegSets.appendChild(createSubAccordion(k, v)); });
      const conNegWords = document.getElementById("qp-neg-words-content");
      if (conNegWords) Object.entries(NEG_WORDS_DATA).forEach(([k,v]) => { conNegWords.appendChild(createSubAccordion(k, v)); });
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

