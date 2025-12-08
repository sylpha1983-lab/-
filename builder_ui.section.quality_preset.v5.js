(function(){
  "use strict";
  const VERSION = 5; // 拡張パック (美学・色彩・ムード・サブジャンル)
  const KEY = "quality_preset";

  // ==========================================
  // 拡張データ定義
  // ==========================================

  // 1. スタイル・作家 (#qp-styles) に追加
  const EXTRA_STYLES = {
    "🌸 美学・コア (Aesthetics)": [
      { ja: "コテージコア (田舎)", en: "cottagecore" }, { ja: "ダークアカデミア", en: "dark academia" },
      { ja: "ウィアードコア (奇妙)", en: "weirdcore" }, { ja: "ドリームコア (夢)", en: "dreamcore" },
      { ja: "プールコア", en: "poolcore" }, { ja: "トラウマコア", en: "traumacore" },
      { ja: "ゴブリンコア", en: "goblincore" }, { ja: "フェアリーコア", en: "fairycore" },
      { ja: "エンジェルコア", en: "angelcore" }, { ja: "サイバープレップ", en: "cyberprep" },
      { ja: "バービーコア", val: "barbiecore" }, { ja: "キッドコア", val: "kidcore" }
    ],
    "🖌️ 専門イラスト (Specialized Art)": [
      { ja: "ボタニカルアート", en: "botanical illustration" }, { ja: "解剖図", en: "anatomical drawing" },
      { ja: "建築スケッチ", en: "architectural sketch" }, { ja: "ファッション画", en: "fashion illustration" },
      { ja: "児童画", en: "children's drawing" }, { ja: "等高線図", en: "topographic map" },
      { ja: "特許図面", en: "patent drawing" }, { ja: "曼荼羅", en: "mandala" }
    ]
  };

  // 2. 品質ワード (#qp-quality) に追加
  const EXTRA_QUALITY = {
    "🎨 色彩・パレット (Color Palettes)": [
      { ja: "トリコロール", en: "tricolor" }, { ja: "モノトーン", en: "monotone" },
      { ja: "アースカラー", en: "earth tones" }, { ja: "ジュエルトーン", en: "jewel tones" },
      { ja: "極彩色", en: "psychedelic colors" }, { ja: "ネオンカラー", en: "neon color palette" },
      { ja: "パステルカラー", en: "pastel color palette" }, { ja: "クリーム色", en: "cream tone" },
      { ja: "クールカラー (寒色)", en: "cool colors" }, { ja: "ウォームカラー (暖色)", en: "warm colors" },
      { ja: "レトロカラー", en: "retro colors" }, { ja: "アシッドカラー", en: "acid colors" }
    ],
    "💡 スタジオ照明 (Studio Lighting)": [
      { ja: "レンブラント照明", en: "rembrandt lighting" }, { ja: "バタフライ照明", en: "butterfly lighting" },
      { ja: "スプリット照明", en: "split lighting" }, { ja: "ループ照明", en: "loop lighting" },
      { ja: "ブロードライティング", en: "broad lighting" }, { ja: "ショートライティング", en: "short lighting" },
      { ja: "キャッチライト (目に光)", en: "catchlight" }, { ja: "ソフトボックス", en: "softbox lighting" },
      { ja: "ハードライト", en: "hard light" }, { ja: "リムライト", en: "rim lighting" }
    ],
    "😌 感情・ムード (Emotion & Mood)": [
      { ja: "メランコリック (憂鬱)", en: "melancholic" }, { ja: "エモーショナル", en: "emotional" },
      { ja: "ロマンチック", en: "romantic" }, { ja: "ミステリアス", en: "mysterious" },
      { ja: "カオティック (混沌)", en: "chaotic" }, { ja: "ピースフル (平穏)", en: "peaceful" },
      { ja: "ノスタルジック", en: "nostalgic" }, { ja: "ユーフォリック (多幸感)", en: "euphoric" },
      { ja: "グルーミー (陰鬱)", en: "gloomy" }, { ja: "ワンダー (驚異)", en: "sense of wonder" }
    ],
    "💻 デジタル表現 (Digital Styles)": [
      { ja: "ローポリゴン", en: "low poly" }, { ja: "ポリゴンアート", en: "polygon art" },
      { ja: "フラットデザイン", en: "flat design" }, { ja: "セルシェーディング", en: "cel shading" },
      { ja: "ハードサーフェス", en: "hard surface" }, { ja: "レンダリング", en: "3d rendering" },
      { ja: "アンリアルエンジン", en: "unreal engine" }, { ja: "オクタンレンダー", en: "octane render" }
    ]
  };

  // 3. プリセット (#qp-presets) に追加
  const EXTRA_PRESETS_SETS = {
    "🧪 サブジャンル・パンク (Sub-genres)": [
      { label: "アトムパンク (Atompunk)", val: "(atompunk), (1950s retro futurism), (space age), (chrome), (fins), (googie architecture)" },
      { label: "カセットフューチャリズム", val: "(cassette futurism), (retro computer), (crt monitor), (analog tech), (80s sci-fi)" },
      { label: "レイガンゴシック", val: "(raygun gothic), (retro sci-fi), (flash gordon style), (rockets), (shiny metal), (bubble helmets)" },
      { label: "シンセウェーブ", val: "(synthwave), (neon grid), (sunset), (palm trees), (retro 80s), (magenta and cyan)" }
    ]
  };

  // === 翻訳辞書 (v5完全版) ===
  const V5_DICT = {
    // Aesthetics
    "cottagecore": "コテージコア", "dark academia": "ダークアカデミア", "weirdcore": "ウィアードコア",
    "dreamcore": "ドリームコア", "poolcore": "プールコア", "traumacore": "トラウマコア",
    "goblincore": "ゴブリンコア", "fairycore": "フェアリーコア", "angelcore": "エンジェルコア",
    "cyberprep": "サイバープレップ", "barbiecore": "バービーコア", "kidcore": "キッドコア",

    // Specialized Art
    "botanical illustration": "植物画", "anatomical drawing": "解剖図", "architectural sketch": "建築スケッチ",
    "fashion illustration": "ファッション画", "children's drawing": "児童画", "topographic map": "等高線図",
    "patent drawing": "特許図面", "mandala": "曼荼羅",

    // Color Palettes
    "tricolor": "トリコロール", "monotone": "モノトーン", "earth tones": "アースカラー",
    "jewel tones": "ジュエルトーン", "psychedelic colors": "極彩色", "neon color palette": "ネオンカラー",
    "pastel color palette": "パステルカラー", "cream tone": "クリーム色", "cool colors": "寒色",
    "warm colors": "暖色", "retro colors": "レトロカラー", "acid colors": "アシッドカラー",

    // Studio Lighting
    "rembrandt lighting": "レンブラント照明", "butterfly lighting": "バタフライ照明", "split lighting": "スプリット照明",
    "loop lighting": "ループ照明", "broad lighting": "ブロードライティング", "short lighting": "ショートライティング",
    "catchlight": "キャッチライト", "softbox lighting": "ソフトボックス", "hard light": "ハードライト", "rim lighting": "リムライト",

    // Emotion & Mood
    "melancholic": "メランコリック", "emotional": "エモーショナル", "romantic": "ロマンチック",
    "mysterious": "ミステリアス", "chaotic": "カオティック", "peaceful": "ピースフル",
    "nostalgic": "ノスタルジック", "euphoric": "ユーフォリック", "gloomy": "グルーミー", "sense of wonder": "センス・オブ・ワンダー",

    // Digital
    "low poly": "ローポリ", "polygon art": "ポリゴンアート", "flat design": "フラットデザイン",
    "cel shading": "セルシェーディング", "hard surface": "ハードサーフェス", "3d rendering": "レンダリング",
    "unreal engine": "アンリアルエンジン", "octane render": "オクタンレンダー",

    // Presets - Sub-genres Punk (詳細ワード網羅)
    "atompunk": "アトムパンク", "1950s retro futurism": "50年代レトロフューチャー", "space age": "宇宙時代", "googie architecture": "グーギー建築", "fins": "テールフィン", "chrome": "クローム",
    "cassette futurism": "カセットフューチャリズム", "retro computer": "レトロPC", "crt monitor": "CRTモニター", "analog tech": "アナログ技術", "80s sci-fi": "80年代SF",
    "raygun gothic": "レイガンゴシック", "retro sci-fi": "レトロSF", "flash gordon style": "フラッシュ・ゴードン風", "rockets": "ロケット", "shiny metal": "輝く金属", "bubble helmets": "バブルヘルメット",
    "synthwave": "シンセウェーブ", "neon grid": "ネオングリッド", "sunset": "夕日", "palm trees": "ヤシの木", "retro 80s": "レトロ80年代", "magenta and cyan": "マゼンタとシアン"
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
        if(window.__outputTranslation && item.label && !V5_DICT[item.label]) V5_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V5_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V5_DICT);

      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");
      const stylesContainer = document.querySelector("#qp-styles .qp-section-content");
      const qualityContainer = document.querySelector("#qp-quality .qp-section-content");

      // コンテナがあれば追加 (v1が土台)
      if (stylesContainer) {
        Object.entries(EXTRA_STYLES).forEach(([k,v]) => stylesContainer.appendChild(createSubAccordion(k, v, "style")));
      }
      if (qualityContainer) {
        Object.entries(EXTRA_QUALITY).forEach(([k,v]) => qualityContainer.appendChild(createSubAccordion(k, v, "word")));
      }
      if (presetsContainer) {
        Object.entries(EXTRA_PRESETS_SETS).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

