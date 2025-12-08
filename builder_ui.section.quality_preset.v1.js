(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";

  // === v1: 基本データ ===
  const BASE_PRESETS = {
    "🏆 基本・汎用 (Standard)": [
      { label: "基本・最高画質 (Masterpiece)", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (clearest output)" },
      { label: "アニメ塗り (Anime Style)", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル (Photorealistic)", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風 (3D Render)", val: "(masterpiece), (best quality), (3d render style), (octane render), (unreal engine 5), (ray tracing), (highly detailed cg), (virtual youtuber style)" }
    ]
  };

  const BASE_STYLES = {
    "作家・スタジオ (Artist & Studios)": [
      { ja: "スタジオジブリ風", en: "studio ghibli style" }, { ja: "新海誠風", en: "shinkai makoto style" },
      { ja: "京都アニメーション風", en: "kyoto animation style" }, { ja: "アルフォンス・ミュシャ風", en: "alphonse mucha style" }
    ]
  };

  const BASE_ERAS = {
    "時代・年代 (Time Period)": [
      { ja: "現代", en: "contemporary" }, { ja: "近未来", en: "near future" },
      { ja: "1990年代アニメ風", en: "1990s style" }, { ja: "1980年代レトロ", en: "1980s style" }
    ]
  };

  const BASE_QUALITY = {
    "基本クオリティ (Essential)": [
      { ja: "傑作", en: "masterpiece" }, { ja: "最高画質", en: "best quality" },
      { ja: "高解像度", en: "high resolution" }, { ja: "超高解像度", en: "absurdres" }
    ],
    "解像度・密度 (Resolution)": [
      { ja: "8k解像度", en: "8k resolution" }, { ja: "4k解像度", en: "4k resolution" },
      { ja: "詳細な背景", en: "detailed background" }
    ]
  };

  const BASE_NEG_SETS = {
    "ネガティブプリセット (Negative Sets)": [
      { label: "基本ネガティブ (Basic)", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止 (Bad Anatomy)", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" }
    ]
  };

  // v1用 基礎辞書 (完全網羅)
  const DICT = {
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度", "high quality": "高画質",
    "highly detailed": "非常に詳細", "beautiful detailed face": "美しく詳細な顔", "perfect anatomy": "完璧な解剖学", "clearest output": "最も鮮明な出力",
    "anime style": "アニメスタイル", "cel shading": "セルルック", "vibrant colors": "鮮やかな色", "clean lines": "綺麗な線", "flat color": "フラットカラー",
    "photorealistic": "フォトリアル", "realistic": "リアル", "8k": "8K", "raw photo": "生写真", "detailed skin texture": "詳細な肌の質感", "hyperrealistic": "超写実的",
    "3d render style": "3Dレンダリング", "octane render": "Octaneレンダー", "unreal engine 5": "UE5", "ray tracing": "レイトレーシング",
    "highly detailed cg": "超詳細CG", "virtual youtuber style": "VTuber風",
    
    "studio ghibli style": "スタジオジブリ風", "shinkai makoto style": "新海誠風", "kyoto animation style": "京都アニメーション風",
    "alphonse mucha style": "アルフォンス・ミュシャ風",
    "contemporary": "現代", "near future": "近未来", "1990s style": "90年代風", "1980s style": "80年代風",
    "absurdres": "超高解像度", "8k resolution": "8k解像度", "4k resolution": "4k解像度", "detailed background": "詳細な背景",
    
    "low quality": "低品質", "worst quality": "最低品質", "out of focus": "ピンボケ", "ugly": "醜い", "error": "エラー",
    "jpeg artifacts": "JPEGノイズ", "lowers": "低解像度", "blurry": "ぼやけた", "bokeh": "ボケ",
    "bad anatomy": "崩れた人体", "long neck": "長い首", "deformed": "変形", "mutated": "変異", "disfigured": "崩れた",
    "malformed hands": "奇形の手", "missing limb": "欠損した肢", "floating limbs": "浮遊する肢", "disconnected limbs": "切断された肢",
    "extra limb": "余分な肢", "missing fingers": "欠損した指", "extra fingers": "余分な指", "liquid fingers": "溶けた指",
    "poorly drawn hands": "下手に描かれた手", "mutation": "突然変異"
  };

  function createSubAccordion(title, items, type) {
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    details.style.marginBottom = "6px";
    details.style.border = "1px solid #eee";
    details.style.borderRadius = "4px";
    details.style.background = "#fff";
    details.open = false; 
    details.innerHTML = `<summary style="font-weight:bold;padding:6px 10px;cursor:pointer;background:#f9f9f9;font-size:0.9em;color:#555;">${title}</summary>`;
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
        // v1辞書登録 (ラベル自体も)
        if(item.label && !DICT[item.label]) DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(item.en && item.ja) DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });
    details.appendChild(content);
    return details;
  }

  function createMainSection(id, title) {
    const details = document.createElement("details");
    details.id = id; 
    details.className = "qp-main-acc";
    details.style.marginBottom = "10px";
    details.style.border = "1px solid #ccc";
    details.style.borderRadius = "6px";
    details.style.background = "#fff";
    details.open = false; 
    details.innerHTML = `<summary style="font-weight:bold;padding:10px 14px;cursor:pointer;background:#eef2f6;list-style:none;"><span style="margin-right:8px;">▶</span>${title}</summary>`;
    details.addEventListener("toggle", () => {
      const span = details.querySelector("summary span");
      if(span) span.textContent = details.open ? "▼" : "▶";
    });
    const wrapper = document.createElement("div");
    wrapper.className = "qp-section-content"; 
    wrapper.style.padding = "10px";
    details.appendChild(wrapper);
    return details;
  }

  function createNegativeSeparator() {
    const div = document.createElement("div");
    div.style.marginTop = "30px"; 
    div.style.marginBottom = "10px";
    div.style.borderTop = "2px dashed #ffb3b3";
    div.innerHTML = `<div style="margin-top:-12px; text-align:center;"><span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">⚠️ NEGATIVE PROMPTS</span></div>`;
    return div;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;
      parent.innerHTML = ""; 

      const root = document.createElement("div");
      root.className = "quality-preset-integrated";

      // 1. プリセット
      const secPresets = createMainSection("qp-presets", "📦 プリセット (Preset Sets)");
      Object.entries(BASE_PRESETS).forEach(([k,v]) => {
        secPresets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "preset"));
      });
      root.appendChild(secPresets);

      // 2. スタイル
      const secStyles = createMainSection("qp-styles", "🎨 スタイル (Style Words)");
      Object.entries(BASE_STYLES).forEach(([k,v]) => {
        secStyles.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "style"));
      });
      root.appendChild(secStyles);

      // 3. 時代
      const secEras = createMainSection("qp-eras", "🕰️ 時代・年代 (Era Words)");
      Object.entries(BASE_ERAS).forEach(([k,v]) => {
        secEras.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "era"));
      });
      root.appendChild(secEras);

      // 4. 品質
      const secQuality = createMainSection("qp-quality", "🔧 品質ワード (Quality Words)");
      Object.entries(BASE_QUALITY).forEach(([k,v]) => {
        secQuality.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "word"));
      });
      root.appendChild(secQuality);

      // 5. ネガティブ
      root.appendChild(createNegativeSeparator());
      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット (Negative Sets)");
      secNegSets.querySelector("summary").style.background = "#fff0f0";
      secNegSets.querySelector("summary").style.color = "#d00";
      Object.entries(BASE_NEG_SETS).forEach(([k,v]) => {
        secNegSets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "negative_set"));
      });
      root.appendChild(secNegSets);

      // 6. ネガティブワード (v2用)
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブ (Negative Words)");
      secNegWords.querySelector("summary").style.background = "#fff0f0";
      secNegWords.querySelector("summary").style.color = "#d00";
      root.appendChild(secNegWords);

      parent.appendChild(root);

      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

