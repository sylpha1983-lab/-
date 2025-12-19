(function(){
  "use strict";
  const VERSION = 4; 
  const KEY = "quality_preset";

  // ==============================================================================
  // 🔧 品質・技術・ツール (Quality & Tech) - 完全復元版
  // ==============================================================================
  const QUALITY_DATA = {
    "🛠️ 制作ソフト・ツール (Software & Tools)": [
      { ja: "Cinema 4D", en: "cinema 4d" }, { ja: "ZBrush (彫刻)", en: "zbrush" }, { ja: "Maya", en: "maya" }, { ja: "Blender", en: "blender" }, { ja: "Substance Painter", en: "substance painter" },
      { ja: "Houdini", en: "houdini" }, { ja: "3ds Max", en: "3ds max" }, { ja: "Daz 3D", en: "daz 3d" }
    ],
    "🖥️ レンダリング・エンジン (Render Engines)": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" }, { ja: "Octane Render", en: "octane render" }, { ja: "Redshift Render", en: "redshift render" }, { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" }, { ja: "Corona Render", en: "corona render" }, { ja: "Blender Cycles", en: "cycles render" }, { ja: "Eevee Render", en: "eevee render" }
    ],
    "⚙️ 3D技術・シェーダー (3D Tech)": [
      { ja: "パストレーシング", en: "path tracing" }, { ja: "レイトレーシング", en: "ray tracing" }, { ja: "Lumen反射 (UE5)", en: "lumen reflections" }, { ja: "Naniteジオメトリ", en: "nanite geometry" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" }, { ja: "シェーダー", en: "shaders" }, { ja: "SSS (表面下散乱)", en: "subsurface scattering" }, { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "グローバルイルミネーション", en: "global illumination" }, { ja: "ボリュメトリック照明", en: "volumetric lighting" }, { ja: "コースティクス", en: "caustics" }
    ],
    "💡 照明・ライティング (Lighting)": [
      { ja: "レンブラント照明", en: "rembrandt lighting" }, { ja: "バタフライ照明", en: "butterfly lighting" }, { ja: "リムライト", en: "rim lighting" }, { ja: "キャッチライト", en: "catchlight" },
      { ja: "ソフトボックス", en: "softbox lighting" }, { ja: "シネマティック照明", en: "cinematic lighting" }, { ja: "ハードライト", en: "hard lighting" }, { ja: "ソフトライト", en: "soft lighting" },
      { ja: "自然光", en: "natural lighting" }, { ja: "スタジオ照明", en: "studio lighting" }, { ja: "逆光", en: "backlighting" }
    ],
    "✨ レンズ・ポストエフェクト (Lens & Post-Process)": [
      { ja: "ゴッドレイ", en: "god rays" }, { ja: "レンズフレア", en: "lens flare" }, { ja: "ブルーム効果", en: "bloom" }, { ja: "色収差", en: "chromatic aberration" },
      { ja: "ケラレ (周辺減光)", en: "vignette" }, { ja: "回折スパイク (光条)", en: "diffraction spikes" }, { ja: "ハレーション", en: "halation" }, { ja: "フィルムグレイン", en: "film grain" },
      { ja: "ポストプロセス", en: "post-processing" }, { ja: "被写界深度 (DoF)", en: "depth of field" }, { ja: "ボケ", en: "bokeh" }, { ja: "モーションブラー", en: "motion blur" },
      { ja: "ティール＆オレンジ", en: "teal and orange" }, { ja: "カラーグレーディング", en: "color grading" }
    ],
    "💎 超高解像度・補正 (Resolution & Fixes)": [
      { ja: "8K UHD", en: "8k uhd" }, { ja: "4K UHD", en: "4k uhd" }, { ja: "16K解像度", en: "16k resolution" }, { ja: "ギガピクセル", en: "gigapixel" },
      { ja: "RAW写真", en: "raw photo" }, { ja: "シャープフォーカス", en: "sharp focus" }, { ja: "高詳細", en: "highly detailed" }, { ja: "傑作", en: "masterpiece" }
    ]
  };

  // ==============================================================================
  // 🚫 ネガティブデータ (Negatives)
  // ==============================================================================
  const NEG_WORDS_DATA = {
    "画質・品質 (Low Quality)": [
      { ja: "低品質", en: "low quality" }, { ja: "最低品質", en: "worst quality" }, { ja: "JPEGノイズ", en: "jpeg artifacts" }, { ja: "ぼやけた", en: "blurry" },
      { ja: "低解像度", en: "lowres" }, { ja: "エラー", en: "error" }, { ja: "ピクセル化", en: "pixelated" }, { ja: "ノイズ", en: "noise" }, { ja: "圧縮アーティファクト", en: "compression artifacts" }
    ],
    "人体崩壊 (Bad Anatomy)": [
      { ja: "崩れた解剖学", en: "bad anatomy" }, { ja: "崩れた手", en: "bad hands" }, { ja: "奇形の手", en: "malformed hands" }, { ja: "欠損した指", en: "missing fingers" },
      { ja: "余分な指", en: "extra fingers" }, { ja: "長い首", en: "long neck" }, { ja: "変形", en: "deformed" }, { ja: "突然変異", en: "mutated" },
      { ja: "浮遊する肢", en: "floating limbs" }, { ja: "余分な手足", en: "extra limbs" }, { ja: "崩れた顔", en: "bad face" }, { ja: "崩れた目", en: "mutated eyes" }
    ],
    "不要な要素 (Unwanted)": [
      { ja: "テキスト", en: "text" }, { ja: "透かし", en: "watermark" }, { ja: "署名", en: "signature" }, { ja: "ユーザー名", en: "username" },
      { ja: "ロゴ", en: "logo" }, { ja: "QRコード", en: "qr code" }, { ja: "バーコード", en: "bar code" }, { ja: "アーティスト名", en: "artist name" }
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation, bad face, mutated eyes" }
    ]
  };

  // 翻訳辞書
  const DICT = {
    // Software
    "cinema 4d": "Cinema 4D", "zbrush": "ZBrush", "blender": "Blender", "substance painter": "Substance Painter", "maya": "Maya", "houdini": "Houdini", "3ds max": "3ds Max", "daz 3d": "Daz 3D",
    // Render Engines
    "unreal engine 5": "UE5", "octane render": "Octane Render", "redshift render": "Redshift", "v-ray": "V-Ray", "arnold render": "Arnold", "corona render": "Corona", "cycles render": "Cycles", "eevee render": "Eevee",
    // 3D Tech
    "ray tracing": "レイトレーシング", "path tracing": "パストレーシング", "lumen reflections": "Lumen反射", "nanite geometry": "Nanite", "physically based rendering": "PBR",
    "subsurface scattering": "SSS", "ambient occlusion": "AO", "global illumination": "GI", "volumetric lighting": "ボリュメトリック照明", "caustics": "コースティクス", "shaders": "シェーダー",
    // Lighting
    "rembrandt lighting": "レンブラント照明", "butterfly lighting": "バタフライ照明", "rim lighting": "リムライト", "catchlight": "キャッチライト", "softbox lighting": "ソフトボックス",
    "cinematic lighting": "シネマティック照明", "hard lighting": "ハードライト", "soft lighting": "ソフトライト", "natural lighting": "自然光", "studio lighting": "スタジオ照明", "backlighting": "逆光",
    // Lens & Post
    "god rays": "ゴッドレイ", "lens flare": "レンズフレア", "bloom": "ブルーム", "chromatic aberration": "色収差", "vignette": "ケラレ", "depth of field": "被写界深度",
    "bokeh": "ボケ", "diffraction spikes": "回折スパイク", "halation": "ハレーション", "film grain": "フィルムグレイン", "post-processing": "ポストプロセス",
    "motion blur": "モーションブラー", "teal and orange": "ティール＆オレンジ", "color grading": "カラーグレーディング",
    // Resolution
    "8k uhd": "8K", "4k uhd": "4K", "16k resolution": "16K", "gigapixel": "ギガピクセル", "raw photo": "RAW写真", "sharp focus": "シャープ", "highly detailed": "高詳細",
    // Negative
    "low quality": "低品質", "worst quality": "最低品質", "jpeg artifacts": "JPEGノイズ", "blurry": "ぼやけた", "bad anatomy": "崩れた解剖学", "bad hands": "崩れた手",
    "missing fingers": "欠損した指", "extra fingers": "余分な指", "text": "テキスト", "watermark": "透かし", "signature": "署名", "username": "ユーザー名", "logo": "ロゴ",
    "compression artifacts": "圧縮ノイズ", "bad face": "崩れた顔", "mutated eyes": "崩れた目"
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
      const qualityContent = document.getElementById("qp-quality-content");
      if (qualityContent) {
        Object.entries(QUALITY_DATA).forEach(([k,v]) => { qualityContent.appendChild(createSubAccordion(k, v)); });
        
        const negSetsContent = document.getElementById("qp-neg-sets-content");
        if(negSetsContent) Object.entries(NEG_SETS).forEach(([k,v]) => { negSetsContent.appendChild(createSubAccordion(k, v)); });
        
        const negWordsContent = document.getElementById("qp-neg-words-content");
        if(negWordsContent) Object.entries(NEG_WORDS_DATA).forEach(([k,v]) => { negWordsContent.appendChild(createSubAccordion(k, v)); });
      } else {
        const root = document.querySelector(".quality-preset-integrated");
        if(root){
          Object.entries(QUALITY_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
          Object.entries(NEG_SETS).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
          Object.entries(NEG_WORDS_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

