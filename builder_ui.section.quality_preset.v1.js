(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "quality_preset";

  // === 1. プリセット (Tag Sets) ===
  const PRESETS = {
    // ★ 名称を「基本・汎用」に戻しました
    "🏆 基本・汎用 (Standard & High Quality)": [
      {
        label: "基本・最高画質 (Standard Masterpiece)",
        val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (clearest output)"
      },
      {
        label: "アニメ塗り (Anime Style)",
        val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines)"
      },
      {
        label: "フォトリアル (Photorealistic)",
        val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture)"
      },
      {
        label: "3Dレンダリング風 (3D Render)",
        val: "(masterpiece), (best quality), (3d render style), (octane render), (unreal engine 5), (ray tracing), (highly detailed cg)"
      }
    ],
    // --- 以下、拡張部分は維持 ---
    "🎨 アート・絵画風 (Artistic Styles)": [
      {
        label: "厚塗り・油絵 (Impasto/Oil)",
        val: "(masterpiece), (best quality), (oil painting), (impasto:1.2), (visible brushstrokes), (rich texture), (canvas texture)"
      },
      {
        label: "水彩画 (Watercolor)",
        val: "(masterpiece), (best quality), (watercolor medium), (wet on wet), (soft edges), (splatter effect), (pastel colors)"
      },
      {
        label: "インク・水墨画 (Ink Wash)",
        val: "(masterpiece), (best quality), (ink wash painting), (sumi-e), (monochrome), (bold lines), (traditional art)"
      },
      {
        label: "スケッチ・鉛筆画 (Sketch)",
        val: "(masterpiece), (best quality), (sketch), (pencil drawing), (rough lines), (monochrome), (graphite medium)"
      }
    ],
    "✨ 質感・特殊効果 (Texture & FX)": [
      {
        label: "超光沢・オイリー (Ultra Glossy)",
        val: "(masterpiece), (best quality), (wet skin), (oiled skin), (glossy finish), (highly reflective), (shiny)"
      },
      {
        label: "マットな質感 (Matte Finish)",
        val: "(masterpiece), (best quality), (matte finish), (flat color), (soft lighting), (low contrast)"
      },
      {
        label: "レトロ・ヴィンテージ (Retro/Vintage)",
        val: "(masterpiece), (best quality), (retro style), (vintage photo), (film grain), (sepia tone), (faded colors), (1980s style)"
      },
      {
        label: "サイバーパンク・ネオン (Cyberpunk)",
        val: "(masterpiece), (best quality), (cyberpunk style), (neon lights), (chromatic aberration), (futuristic), (glowing)"
      }
    ],
    "💡 照明・雰囲気 (Lighting & Mood)": [
      {
        label: "シネマティック (Cinematic)",
        val: "(masterpiece), (best quality), (cinematic lighting), (dramatic atmosphere), (movie poster), (depth of field), (volumetric lighting)"
      },
      {
        label: "ダーク・ゴシック (Dark/Gothic)",
        val: "(masterpiece), (best quality), (dark atmosphere), (gothic style), (chiaroscuro), (dimly lit), (mysterious)"
      },
      {
        label: "ソフト・夢幻的 (Soft/Dreamy)",
        val: "(masterpiece), (best quality), (soft lighting), (dreamy atmosphere), (bloom), (pastel colors), (ethereal)"
      }
    ]
  };

  // === 2. クオリティ詳細設定 ===
  const CATEGORIES = {
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

  // ★ プリセット内ワード用の完全補完辞書
  const PRESET_DICT = {
    // 基本品質
    "masterpiece": "傑作", "best quality": "最高画質", "high quality": "高画質",
    // 解像度・詳細
    "high resolution": "高解像度", "highly detailed": "非常に詳細",
    "beautiful detailed face": "美しく詳細な顔", "perfect anatomy": "完璧な解剖学",
    "clearest output": "最も鮮明な出力", "absurdres": "超高解像度",
    "8k resolution": "8k解像度", "8k": "8K", "detailed background": "詳細な背景",
    "intricate details": "複雑な詳細", "ultra high resolution": "超高解像度",
    // スタイル
    "anime style": "アニメスタイル", "cel shading": "セルルック",
    "vibrant colors": "鮮やかな色", "clean lines": "綺麗な線",
    "photorealistic": "フォトリアル", "realistic": "リアル",
    "raw photo": "生写真", "detailed skin texture": "詳細な肌の質感",
    "3d render style": "3Dレンダリング風", "octane render": "Octaneレンダー",
    "unreal engine 5": "UE5", "ray tracing": "レイトレーシング",
    "highly detailed cg": "超詳細CG",
    // アート
    "oil painting": "油絵", "impasto": "厚塗り", "visible brushstrokes": "筆致",
    "rich texture": "豊かな質感", "canvas texture": "キャンバスの質感",
    "watercolor medium": "水彩画", "wet on wet": "ウェット・オン・ウェット",
    "soft edges": "柔らかな輪郭", "splatter effect": "飛沫効果",
    "pastel colors": "パステルカラー", "ink wash painting": "水墨画",
    "sumi-e": "墨絵", "monochrome": "モノクロ", "bold lines": "太い線",
    "traditional art": "伝統芸術", "sketch": "スケッチ",
    "pencil drawing": "鉛筆画", "rough lines": "ラフな線", "graphite medium": "黒鉛画",
    // 質感・特殊
    "wet skin": "濡れた肌", "oiled skin": "オイル肌", "glossy finish": "光沢仕上げ",
    "highly reflective": "高反射", "shiny": "輝く",
    "matte finish": "マット仕上げ", "flat color": "フラットカラー",
    "retro style": "レトロスタイル", "vintage photo": "ヴィンテージ写真",
    "film grain": "フィルム粒子", "sepia tone": "セピア調", "faded colors": "色あせた",
    "1980s style": "80年代風", "cyberpunk style": "サイバーパンク風",
    "neon lights": "ネオンライト", "chromatic aberration": "色収差",
    "futuristic": "未来的", "glowing": "発光",
    // 照明・雰囲気
    "cinematic lighting": "シネマティック照明", "dramatic atmosphere": "ドラマチックな雰囲気",
    "movie poster": "映画ポスター風", "depth of field": "被写界深度",
    "volumetric lighting": "ボリュメトリック照明", "dark atmosphere": "暗い雰囲気",
    "gothic style": "ゴシック様式", "chiaroscuro": "明暗法",
    "dimly lit": "薄暗い", "mysterious": "ミステリアス",
    "soft lighting": "柔らかな照明", "dreamy atmosphere": "夢のような雰囲気",
    "bloom": "ブルーム効果", "ethereal": "幻想的"
  };

  // UI構築ヘルパー
  function createAccordionGroup(title, items, isPreset) {
    const details = document.createElement("details");
    details.style.marginBottom = "8px";
    details.open = false; // デフォルトで閉じる

    const summary = document.createElement("summary");
    summary.textContent = title;
    summary.style.fontWeight = "bold";
    summary.style.cursor = "pointer";
    summary.style.marginBottom = "5px";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.style.padding = "5px";
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    content.style.gap = "5px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.style.cursor = "pointer";
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      
      if (isPreset) {
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

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "quality-preset-v1-base";

      // プリセット群の描画
      Object.entries(PRESETS).forEach(([cat, items]) => {
        section.appendChild(createAccordionGroup(cat, items, true));
      });

      // 詳細カテゴリの描画
      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        section.appendChild(createAccordionGroup(cat, items, false));
      });

      parent.appendChild(section);

      // ★ 翻訳辞書登録
      if (window.__outputTranslation) {
        const dict = { ...PRESET_DICT }; 
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-v1-base input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

