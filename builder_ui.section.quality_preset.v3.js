(function(){
  "use strict";
  const VERSION = 3; // 統合版: 技術・品質・ネガティブ
  const KEY = "quality_preset";

  const QUALITY_DATA = {
    "🖥️ レンダリング・エンジン (Rendering Engines)": [
      { ja: "Unreal Engine 5", en: "unreal engine 5" },
      { ja: "Octane Render", en: "octane render" },
      { ja: "Redshift Render", en: "redshift render" },
      { ja: "V-Ray Render", en: "v-ray" },
      { ja: "Arnold Render", en: "arnold render" },
      { ja: "Blender Cycles", en: "cycles render" }
    ],
    "⚙️ 3D技術・シェーダー (3D Tech)": [
      { ja: "パストレーシング", en: "path tracing" },
      { ja: "レイトレーシング", en: "ray tracing" },
      { ja: "PBR (物理ベース)", en: "physically based rendering" },
      { ja: "SSS (サブサーフェス)", en: "subsurface scattering" },
      { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "グローバルイルミネーション", en: "global illumination" },
      { ja: "ボリュメトリック照明", en: "volumetric lighting" }
    ],
    "📸 カメラ・映画技術 (Camera & Cinema)": [
      { ja: "ISO 100", en: "iso 100" }, { ja: "f/1.8", en: "f/1.8" },
      { ja: "シャッタースピード 1/1000", en: "shutter speed 1/1000" },
      { ja: "85mm (ポートレート)", en: "85mm lens" }, { ja: "魚眼レンズ", en: "fisheye lens" },
      { ja: "IMAX", en: "imax" }, { ja: "70mmフィルム", en: "70mm film" },
      { ja: "テクニカラー", en: "technicolor" }, { ja: "銀残し", en: "bleach bypass" }
    ],
    "💡 照明・ライティング (Lighting)": [
      { ja: "レンブラント照明", en: "rembrandt lighting" }, { ja: "バタフライ照明", en: "butterfly lighting" },
      { ja: "リムライト", en: "rim lighting" }, { ja: "キャッチライト", en: "catchlight" },
      { ja: "ソフトボックス", en: "softbox lighting" }, { ja: "シネマティック照明", en: "cinematic lighting" }
    ],
    "💎 超高解像度・補正 (High Fidelity)": [
      { ja: "8K UHD", en: "8k uhd" }, { ja: "4K UHD", en: "4k uhd" },
      { ja: "16K解像度", en: "16k resolution" }, { ja: "ギガピクセル", en: "gigapixel" },
      { ja: "RAW写真", en: "raw photo" }, { ja: "シャープフォーカス", en: "sharp focus" }
    ],
    "🎨 色彩・パレット (Color Palettes)": [
      { ja: "トリコロール", en: "tricolor" }, { ja: "モノトーン", en: "monotone" },
      { ja: "パステルカラー", en: "pastel colors" }, { ja: "ネオンカラー", en: "neon colors" },
      { ja: "ビビッド", en: "vivid colors" }, { ja: "レトロカラー", en: "retro colors" }
    ]
  };

  const NEG_WORDS_DATA = {
    "画質・品質 (Low Quality)": [
      { ja: "低品質", en: "low quality" }, { ja: "最低品質", en: "worst quality" },
      { ja: "JPEGノイズ", en: "jpeg artifacts" }, { ja: "ぼやけた", en: "blurry" },
      { ja: "低解像度", en: "lowres" }, { ja: "エラー", en: "error" }, { ja: "ピクセル化", en: "pixelated" }
    ],
    "人体崩壊 (Bad Anatomy)": [
      { ja: "崩れた解剖学", en: "bad anatomy" }, { ja: "崩れた手", en: "bad hands" },
      { ja: "奇形の手", en: "malformed hands" }, { ja: "欠損した指", en: "missing fingers" },
      { ja: "余分な指", en: "extra fingers" }, { ja: "長い首", en: "long neck" },
      { ja: "変形", en: "deformed" }, { ja: "突然変異", en: "mutated" },
      { ja: "浮遊する肢", en: "floating limbs" }, { ja: "余分な手足", en: "extra limbs" }
    ],
    "不要な要素 (Unwanted)": [
      { ja: "テキスト", en: "text" }, { ja: "透かし", en: "watermark" }, { ja: "署名", en: "signature" },
      { ja: "ユーザー名", en: "username" }, { ja: "ロゴ", en: "logo" },
      { ja: "QRコード", en: "qr code" }, { ja: "バーコード", en: "bar code" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  [...Object.values(QUALITY_DATA), ...Object.values(NEG_WORDS_DATA)].flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const qualityContainer = document.querySelector("#qp-quality .qp-section-content");
      const negWordsContainer = document.querySelector("#qp-neg-words .qp-section-content");

      if (qualityContainer) {
        Object.entries(QUALITY_DATA).forEach(([k, items]) => {
          const details = document.createElement("details");
          details.className = "qp-sub-acc";
          details.style.marginBottom = "6px";
          const summary = document.createElement("summary");
          summary.textContent = k;
          summary.style.fontWeight = "bold";
          summary.style.cursor = "pointer";
          summary.style.background = "#f9f9f9";
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
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.style.marginRight = "6px";
            cb.dataset.val = item.en;
            label.appendChild(cb);
            label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
            content.appendChild(label);
          });
          details.appendChild(content);
          qualityContainer.appendChild(details);
        });
      }

      if (negWordsContainer) {
        Object.entries(NEG_WORDS_DATA).forEach(([k, items]) => {
          const details = document.createElement("details");
          details.className = "qp-sub-acc";
          details.style.marginBottom = "6px";
          const summary = document.createElement("summary");
          summary.textContent = k;
          summary.style.fontWeight = "bold";
          summary.style.cursor = "pointer";
          summary.style.background = "#fff0f0";
          summary.style.color = "#d00";
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
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.style.marginRight = "6px";
            cb.dataset.val = item.en;
            label.appendChild(cb);
            label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
            content.appendChild(label);
          });
          details.appendChild(content);
          negWordsContainer.appendChild(details);
        });
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

