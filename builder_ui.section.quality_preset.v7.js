(function(){
  "use strict";
  const VERSION = 7; // 拡張パックF (レンダリング・高度技術) ※旧v8から繰り上げ
  const KEY = "quality_preset";

  // ==========================================
  // 拡張データ定義 (品質ワード #qp-quality に追加)
  // ==========================================

  const EXTRA_QUALITY = {
    "🖥️ レンダリング・エンジン (Rendering Engines)": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" },
      { ja: "Octane Render", en: "octane render" },
      { ja: "Redshift Render", en: "redshift render" },
      { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" },
      { ja: "Corona Render", en: "corona render" },
      { ja: "Blender Cycles", en: "cycles render" },
      { ja: "Cinema 4D", en: "cinema 4d" },
      { ja: "ZBrush", en: "zbrush" },
      { ja: "Maya", en: "maya" }
    ],
    "⚙️ 3D技術・シェーダー (3D Tech & Shaders)": [
      { ja: "パストレーシング", en: "path tracing" },
      { ja: "レイトレーシング (RTX)", en: "ray tracing" },
      { ja: "Lumen (ルーメン)", en: "lumen reflections" },
      { ja: "Nanite (ナナイト)", en: "nanite geometry" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" },
      { ja: "SSS (サブサーフェス)", en: "subsurface scattering" },
      { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "グローバルイルミネーション", en: "global illumination" },
      { ja: "ボリュメトリック照明", en: "volumetric lighting" },
      { ja: "シェーダー", en: "shaders" },
      { ja: "ポストプロセス", en: "post-processing" }
    ],
    "📸 カメラ設定・スペック (Camera Specs)": [
      { ja: "ISO 100 (低ノイズ)", en: "iso 100" },
      { ja: "f/1.8 (大口径)", en: "f/1.8" },
      { ja: "f/2.8", en: "f/2.8" },
      { ja: "f/8 (パンフォーカス)", en: "f/8" },
      { ja: "1/1000秒 (高速)", en: "shutter speed 1/1000" },
      { ja: "35mm (広角)", en: "35mm lens" },
      { ja: "50mm (標準)", en: "50mm lens" },
      { ja: "85mm (ポートレート)", en: "85mm lens" },
      { ja: "100mm (望遠)", en: "100mm lens" },
      { ja: "マクロレンズ", en: "macro lens" },
      { ja: "広角レンズ", en: "wide angle lens" },
      { ja: "望遠レンズ", en: "telephoto lens" }
    ],
    "💎 超高解像度・補正 (High Fidelity)": [
      { ja: "8K UHD", en: "8k uhd" },
      { ja: "4K UHD", en: "4k uhd" },
      { ja: "16K解像度", en: "16k resolution" },
      { ja: "ギガピクセル", en: "gigapixel" },
      { ja: "RAW写真", en: "raw photo" },
      { ja: "超詳細", en: "hyper-detailed" },
      { ja: "超写実的", en: "hyper-realistic" },
      { ja: "シャープフォーカス", en: "sharp focus" },
      { ja: "完璧な構図", en: "perfect composition" },
      { ja: "カラーグレーディング", en: "color grading" }
    ]
  };

  // === v7用 翻訳辞書 ===
  const V7_DICT = {
    // Rendering Engines
    "unreal engine 5": "Unreal Engine 5",
    "octane render": "Octane Render",
    "redshift render": "Redshift Render",
    "v-ray": "V-Ray",
    "arnold render": "Arnold Render",
    "corona render": "Corona Render",
    "cycles render": "Blender Cycles",
    "cinema 4d": "Cinema 4D",
    "zbrush": "ZBrush",
    "maya": "Maya",

    // 3D Tech
    "path tracing": "パストレーシング",
    "ray tracing": "レイトレーシング",
    "lumen reflections": "Lumen反射",
    "nanite geometry": "Naniteジオメトリ",
    "physically based rendering": "物理ベースレンダリング",
    "subsurface scattering": "サブサーフェス・スキャタリング",
    "ambient occlusion": "アンビエントオクルージョン",
    "global illumination": "グローバルイルミネーション",
    "volumetric lighting": "ボリュメトリック照明",
    "shaders": "シェーダー",
    "post-processing": "ポストプロセス",

    // Camera Specs
    "iso 100": "ISO 100",
    "f/1.8": "f/1.8",
    "f/2.8": "f/2.8",
    "f/8": "f/8",
    "shutter speed 1/1000": "シャッタースピード 1/1000",
    "35mm lens": "35mmレンズ",
    "50mm lens": "50mmレンズ",
    "85mm lens": "85mmレンズ",
    "100mm lens": "100mmレンズ",
    "macro lens": "マクロレンズ",
    "wide angle lens": "広角レンズ",
    "telephoto lens": "望遠レンズ",

    // High Fidelity
    "8k uhd": "8K UHD",
    "4k uhd": "4K UHD",
    "16k resolution": "16K解像度",
    "gigapixel": "ギガピクセル",
    "raw photo": "RAW写真",
    "hyper-detailed": "超詳細",
    "hyper-realistic": "超写実的",
    "sharp focus": "シャープフォーカス",
    "perfect composition": "完璧な構図",
    "color grading": "カラーグレーディング"
  };

  // UIヘルパー
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

      if (type === "preset") {
        cb.dataset.val = item.val;
        label.title = item.val;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label));
        if(window.__outputTranslation && item.label && !V7_DICT[item.label]) V7_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V7_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V7_DICT);

      // マウント先 (v1が作成したID: #qp-quality)
      const qualityContainer = document.querySelector("#qp-quality .qp-section-content");

      // コンテナが存在する場合のみ追記
      if (qualityContainer) {
        Object.entries(EXTRA_QUALITY).forEach(([k,v]) => qualityContainer.appendChild(createSubAccordion(k, v, "word")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

