(function(){
  "use strict";
  const VERSION = 6; // 拡張パックE (クリエイター・ゲーム)
  const KEY = "quality_preset";

  // ==========================================
  // 拡張データ定義
  // ==========================================

  // スタイル系 (#qp-styles) に追加
  const EXTRA_STYLES = {
    "🏢 アニメスタジオ (Anime Studios)": [
      { ja: "京都アニメーション", en: "kyoto animation" }, { ja: "ufotable", en: "ufotable" },
      { ja: "SHAFT (シャフト)", en: "shaft" }, { ja: "TRIGGER (トリガー)", en: "studio trigger" },
      { ja: "スタジオジブリ", en: "studio ghibli" }, { ja: "MAPPA", en: "mappa" },
      { ja: "WIT STUDIO", en: "wit studio" }, { ja: "CloverWorks", en: "cloverworks" },
      { ja: "A-1 Pictures", en: "a-1 pictures" }, { ja: "Production I.G", en: "production i.g" },
      { ja: "マッドハウス", en: "madhouse" }, { ja: "ボンズ (BONES)", en: "bones" },
      { ja: "サンライズ", en: "sunrise" }, { ja: "東映アニメーション", en: "toei animation" },
      { ja: "P.A.WORKS", en: "p.a. works" }, { ja: "動画工房", en: "doga kobo" }
    ],
    "🖌️ イラストレーター (Illustrators)": [
      { ja: "Mika Pikazo風", en: "mika pikazo style" }, { ja: "米山舞風", en: "yoneyama mai style" },
      { ja: "ワダアルコ風", en: "wada arco style" }, { ja: "望月けい風", en: "kei mochizuki style" },
      { ja: "副島成記風 (ペルソナ)", en: "shigenori soejima style" }, { ja: "新川洋司風 (MGS)", en: "yoji shinkawa style" },
      { ja: "天野喜孝風 (FF)", en: "yoshitaka amano style" }, { ja: "村田蓮爾風", en: "range murata style" },
      { ja: "カントク風", en: "kantoku style" }, { ja: "Tony風", en: "tony taka style" },
      { ja: "珈琲貴族風", en: "coffee kizoku style" }, { ja: "redjuice風", en: "redjuice style" },
      { ja: "huke風 (Brs/Steins;Gate)", en: "huke style" }, { ja: "深崎暮人風", en: "misaki kurehito style" }
    ],
    "🎮 ゲームアート (Game Styles)": [
      { ja: "原神スタイル", en: "genshin impact style" }, { ja: "崩壊：スターレイル風", en: "honkai: star rail style" },
      { ja: "アークナイツ風", en: "arknights style" }, { ja: "アズールレーン風", en: "azur lane style" },
      { ja: "ブルーアーカイブ風", en: "blue archive style" }, { ja: "FGO風 (Fate)", en: "fate/grand order style" },
      { ja: "ペルソナ5風", en: "persona 5 style" }, { ja: "ダンガンロンパ風", en: "danganronpa style" },
      { ja: "ニーア オートマタ風", en: "nier: automata style" }, { ja: "ファイナルファンタジー風", en: "final fantasy style" },
      { ja: "エルデンリング風", en: "elden ring style" }, { ja: "スプラトゥーン風", en: "splatoon style" },
      { ja: "グランブルーファンタジー風", en: "granblue fantasy style" }, { ja: "アイマス風", en: "the idolm@ster style" }
    ]
  };

  // === v6用 翻訳辞書 ===
  const V6_DICT = {
    // Studios
    "kyoto animation": "京都アニメーション", "ufotable": "ufotable", "shaft": "シャフト", "studio trigger": "TRIGGER",
    "studio ghibli": "スタジオジブリ", "mappa": "MAPPA", "wit studio": "WIT STUDIO", "cloverworks": "CloverWorks",
    "a-1 pictures": "A-1 Pictures", "production i.g": "Production I.G", "madhouse": "マッドハウス", "bones": "ボンズ",
    "sunrise": "サンライズ", "toei animation": "東映アニメーション", "p.a. works": "P.A.WORKS", "doga kobo": "動画工房",

    // Illustrators
    "mika pikazo style": "Mika Pikazo風", "yoneyama mai style": "米山舞風", "wada arco style": "ワダアルコ風",
    "kei mochizuki style": "望月けい風", "shigenori soejima style": "副島成記風", "yoji shinkawa style": "新川洋司風",
    "yoshitaka amano style": "天野喜孝風", "range murata style": "村田蓮爾風", "kantoku style": "カントク風",
    "tony taka style": "Tony風", "coffee kizoku style": "珈琲貴族風", "redjuice style": "redjuice風",
    "huke style": "huke風", "misaki kurehito style": "深崎暮人風",

    // Game Styles
    "genshin impact style": "原神スタイル", "honkai: star rail style": "スターレイル風", "arknights style": "アークナイツ風",
    "azur lane style": "アズレン風", "blue archive style": "ブルアカ風", "fate/grand order style": "FGO風",
    "persona 5 style": "ペルソナ5風", "danganronpa style": "ダンガンロンパ風", "nier: automata style": "ニーア風",
    "final fantasy style": "FF風", "elden ring style": "エルデンリング風", "splatoon style": "スプラトゥーン風",
    "granblue fantasy style": "グラブル風", "the idolm@ster style": "アイマス風"
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
        if(window.__outputTranslation && item.label && !V6_DICT[item.label]) V6_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V6_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V6_DICT);

      const stylesContainer = document.querySelector("#qp-styles .qp-section-content");

      // コンテナがあれば追加 (v1が土台)
      if (stylesContainer) {
        Object.entries(EXTRA_STYLES).forEach(([k,v]) => stylesContainer.appendChild(createSubAccordion(k, v, "style")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
