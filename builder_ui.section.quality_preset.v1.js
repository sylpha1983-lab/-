(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "quality_preset";

  // ==========================================
  // 1. データ定義
  // ==========================================

  // (1) プリセット群
  const PRESETS = {
    "🏆 基本・汎用 (Standard & High Quality)": [
      { label: "基本・最高画質 (Standard Masterpiece)", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (clearest output)" },
      { label: "アニメ塗り (Anime Style)", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines)" },
      { label: "フォトリアル (Photorealistic)", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture)" },
      { label: "3Dレンダリング風 (3D Render)", val: "(masterpiece), (best quality), (3d render style), (octane render), (unreal engine 5), (ray tracing), (highly detailed cg)" }
    ],
    "🎨 アート・絵画風 (Artistic Styles)": [
      { label: "厚塗り・油絵 (Impasto/Oil)", val: "(masterpiece), (best quality), (oil painting), (impasto:1.2), (visible brushstrokes), (rich texture), (canvas texture)" },
      { label: "水彩画 (Watercolor)", val: "(masterpiece), (best quality), (watercolor medium), (wet on wet), (soft edges), (splatter effect), (pastel colors)" },
      { label: "インク・水墨画 (Ink Wash)", val: "(masterpiece), (best quality), (ink wash painting), (sumi-e), (monochrome), (bold lines), (traditional art)" },
      { label: "スケッチ・鉛筆画 (Sketch)", val: "(masterpiece), (best quality), (sketch), (pencil drawing), (rough lines), (monochrome), (graphite medium)" }
    ],
    "✨ 質感・特殊効果 (Texture & FX)": [
      { label: "超光沢・オイリー (Ultra Glossy)", val: "(masterpiece), (best quality), (wet skin), (oiled skin), (glossy finish), (highly reflective), (shiny)" },
      { label: "マットな質感 (Matte Finish)", val: "(masterpiece), (best quality), (matte finish), (flat color), (soft lighting), (low contrast)" },
      { label: "レトロ・ヴィンテージ (Retro/Vintage)", val: "(masterpiece), (best quality), (retro style), (vintage photo), (film grain), (sepia tone), (faded colors), (1980s style)" },
      { label: "サイバーパンク・ネオン (Cyberpunk)", val: "(masterpiece), (best quality), (cyberpunk style), (neon lights), (chromatic aberration), (futuristic), (glowing)" }
    ],
    "💡 照明・雰囲気 (Lighting & Mood)": [
      { label: "シネマティック (Cinematic)", val: "(masterpiece), (best quality), (cinematic lighting), (dramatic atmosphere), (movie poster), (depth of field), (volumetric lighting)" },
      { label: "ダーク・ゴシック (Dark/Gothic)", val: "(masterpiece), (best quality), (dark atmosphere), (gothic style), (chiaroscuro), (dimly lit), (mysterious)" },
      { label: "ソフト・夢幻的 (Soft/Dreamy)", val: "(masterpiece), (best quality), (soft lighting), (dreamy atmosphere), (bloom), (pastel colors), (ethereal)" }
    ]
  };

  // (2) 品質ワード
  const WORDS = {
    "基本クオリティ (Essential Quality)": [
      { ja: "傑作", en: "masterpiece" }, { ja: "最高画質", en: "best quality" },
      { ja: "高画質", en: "high quality" }, { ja: "素晴らしい品質", en: "amazing quality" },
      { ja: "非常に美的", en: "very aesthetic" }, { ja: "信じられないほど詳細", en: "incredibly absurdres" },
      { ja: "公式アート", en: "official art" }, { ja: "キービジュアル", en: "key visual" }
    ],
    "解像度・密度 (Resolution & Density)": [
      { ja: "超高解像度 (Absurdres)", en: "absurdres" },
      { ja: "8k解像度", en: "8k resolution" },
      { ja: "詳細な肌", en: "extremely detailed skin" },
      { ja: "詳細な背景", en: "detailed background" }
    ]
  };

  // (3) スタイル・作家
  const STYLES = {
    "作家・スタジオ (Artist & Studios)": [
      { ja: "スタジオジブリ風", en: "studio ghibli style" }, { ja: "宮崎駿風", en: "miyazaki hayao style" },
      { ja: "新海誠風", en: "shinkai makoto style" }, { ja: "京都アニメーション風", en: "kyoto animation style" },
      { ja: "アルフォンス・ミュシャ風", en: "alphonse mucha style" }, { ja: "印象派・モネ風", en: "impressionism style" },
      { ja: "TRIGGER風", en: "studio trigger style" }, { ja: "永井博風 (シティポップ)", en: "hiroshi nagai style" }
    ]
  };

  // (4) 時代・年代
  const ERAS = {
    "時代・年代 (Time Period)": [
      { ja: "1990年代アニメ風", en: "1990s style" }, { ja: "1980年代レトロ", en: "1980s style" },
      { ja: "昭和レトロ", en: "showa era style" }, { ja: "大正ロマン", en: "taisho roman" },
      { ja: "江戸時代", en: "edo period" }, { ja: "ヴィクトリア朝", en: "victorian era" },
      { ja: "Y2K (2000年代)", en: "y2k aesthetic" }, { ja: "近未来", en: "near future" },
      { ja: "ポストアポカリプス", en: "post-apocalyptic" }
    ]
  };

  // (5) ネガティブ
  const NEGATIVES = {
    "ネガティブ (Negative Prompts)": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      { label: "テキスト排除", val: "text, signature, watermark, username, artist name, copyright name" },
      { label: "3D排除 (2Dのみ)", val: "3d, realistic, photorealistic, photo, real life" },
      { label: "2D排除 (リアルのみ)", val: "illustration, painting, cartoon, anime, 2d, sketch, drawing" }
    ]
  };

  // 翻訳辞書 (大幅拡充)
  const DICT = {
    // Quality & Preset words
    "masterpiece": "傑作", "best quality": "最高画質", "high quality": "高画質", "high resolution": "高解像度",
    "anime style": "アニメスタイル", "cel shading": "セルルック", "photorealistic": "フォトリアル",
    "oil painting": "油絵", "watercolor medium": "水彩画", "ink wash painting": "水墨画", "sketch": "スケッチ",
    "wet skin": "濡れた肌", "matte finish": "マット仕上げ", "retro style": "レトロスタイル", "cyberpunk style": "サイバーパンク",
    "cinematic lighting": "シネマティック照明", "dark atmosphere": "ダークな雰囲気", "soft lighting": "ソフト照明",
    
    // Negative words (ここを完全網羅)
    "low quality": "低品質", "worst quality": "最低品質", "out of focus": "ピンボケ", "ugly": "醜い", "error": "エラー",
    "jpeg artifacts": "JPEGノイズ", "lowers": "低解像度", "blurry": "ぼやけた", "bokeh": "ボケ",
    "bad anatomy": "崩れた解剖学", "long neck": "長い首", "deformed": "変形", "mutated": "突然変異",
    "disfigured": "崩れた", "malformed hands": "奇形の手", "missing limb": "欠損した肢",
    "floating limbs": "浮遊する肢", "disconnected limbs": "切断された肢", "extra limb": "余分な肢",
    "missing fingers": "欠損した指", "extra fingers": "余分な指", "liquid fingers": "溶けた指",
    "poorly drawn hands": "下手に描かれた手", "mutation": "変異",
    "text": "テキスト", "signature": "署名", "watermark": "透かし", "username": "ユーザー名",
    "artist name": "作家名", "copyright name": "著作権名",
    "3d": "3D", "realistic": "リアル", "photo": "写真", "real life": "実写",
    "illustration": "イラスト", "painting": "絵画", "cartoon": "カートゥーン", "anime": "アニメ",
    "2d": "2D", "drawing": "ドローイング"
  };

  // ==========================================
  // 2. UI構築ヘルパー
  // ==========================================

  function createSubAccordion(title, items, type) {
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.textContent = title;
    details.appendChild(summary);

    const content = document.createElement("div");
    content.className = "qp-content-grid";

    items.forEach(item => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";

      if (type === "preset" || type === "negative") {
        cb.dataset.val = item.val;
        label.title = item.val;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label));
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  function createMainSection(title, children) {
    const details = document.createElement("details");
    details.className = "qp-main-acc";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`;
    
    details.addEventListener("toggle", () => {
      const span = summary.querySelector("span");
      if(span) span.textContent = details.open ? "▼" : "▶";
    });

    details.appendChild(summary);

    const wrapper = document.createElement("div");
    wrapper.style.padding = "10px";
    children.forEach(child => wrapper.appendChild(child));
    
    details.appendChild(wrapper);
    return details;
  }

  function createNegativeSeparator() {
    const div = document.createElement("div");
    div.style.marginTop = "30px"; 
    div.style.marginBottom = "10px";
    div.style.borderTop = "2px dashed #ffb3b3";
    div.innerHTML = `
      <div style="margin-top:-12px; text-align:center;">
        <span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">
          ⚠️ NEGATIVE PROMPTS
        </span>
      </div>
    `;
    return div;
  }

  // ==========================================
  // 3. API実装
  // ==========================================
  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;
      parent.innerHTML = ""; 

      const root = document.createElement("div");
      root.className = "quality-preset-integrated";

      // 1. プリセット
      const presetNodes = [];
      Object.entries(PRESETS).forEach(([k,v]) => presetNodes.push(createSubAccordion(k, v, "preset")));
      root.appendChild(createMainSection("📦 プリセット (Presets)", presetNodes));

      // 2. 品質ワード (3番目だが、順序整理のためここに配置してOK)
      // 要望：品質ワードは3番目に順番を変えてください -> プリセット、スタイル、品質ワードの順にします
      
      // 2. スタイル & 作家 (先に持ってくる)
      const styleNodes = [];
      Object.entries(STYLES).forEach(([k,v]) => styleNodes.push(createSubAccordion(k, v, "style")));
      root.appendChild(createMainSection("🎨 スタイル・作家 (Styles & Artists)", styleNodes));

      // 3. 品質ワード (3番目に配置)
      const wordNodes = [];
      Object.entries(WORDS).forEach(([k,v]) => wordNodes.push(createSubAccordion(k, v, "word")));
      root.appendChild(createMainSection("🔧 品質ワード (Quality Words)", wordNodes));

      // 4. 時代・年代
      const eraNodes = [];
      Object.entries(ERAS).forEach(([k,v]) => eraNodes.push(createSubAccordion(k, v, "era")));
      root.appendChild(createMainSection("🕰️ 時代・年代 (Time Period)", eraNodes));

      // 5. ネガティブ (区切り線付き)
      root.appendChild(createNegativeSeparator());
      
      const negNodes = [];
      Object.entries(NEGATIVES).forEach(([k,v]) => negNodes.push(createSubAccordion(k, v, "negative")));
      
      const negSection = createMainSection("🚫 ネガティブ (Negative Prompts)", negNodes);
      negSection.querySelector("summary").style.background = "#fff0f0"; 
      negSection.querySelector("summary").style.color = "#d00";       
      root.appendChild(negSection);

      parent.appendChild(root);

      // 辞書登録
      if (window.__outputTranslation) {
        window.__outputTranslation.register(DICT);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  // スタイル適用
  const style = document.createElement('style');
  style.textContent = `
    .qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; }
    .qp-main-acc > summary { font-weight:bold; padding:10px 14px; cursor:pointer; background:#eef2f6; list-style:none; }
    .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; }
    .qp-sub-acc > summary { font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; font-size:0.9em; color:#555; list-style:none; }
    
    .qp-main-acc[open] > summary span, .qp-sub-acc[open] > summary span { transform: rotate(90deg); display:inline-block; }

    .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; }
    .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; }
    .qp-content-grid input { margin-right:6px; flex-shrink: 0; }
  `;
  document.head.appendChild(style);

  window.__registerPromptPart(KEY, VERSION, API);
})();

