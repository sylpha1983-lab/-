(function(){
  "use strict";
  const VERSION = 2; // 拡張パックA (芸術・スタイル)
  const KEY = "quality_preset";

  // === 拡張データ (v2) ===
  const PRESETS_DATA = {};
  
  PRESETS_DATA["🎨 アート・絵画風 (Artistic)"] = [
    { label: "厚塗り・油絵 (Oil)", val: "(oil painting), (impasto:1.2), (visible brushstrokes), (rich texture)" },
    { label: "水彩画 (Watercolor)", val: "(watercolor medium), (wet on wet), (soft edges), (splatter effect)" },
    { label: "インク・水墨画 (Ink)", val: "(ink wash painting), (sumi-e), (monochrome), (bold lines), (brush stroke)" },
    { label: "スケッチ (Sketch)", val: "(sketch), (pencil drawing), (rough lines), (graphite medium), (hatching)" },
    { label: "線画 (Line Art)", val: "(line art), (monochrome), (clean lines), (minimalist), (white background)" },
    { label: "浮世絵 (Ukiyo-e)", val: "(ukiyo-e style), (woodblock print), (flat perspective), (bold outlines), (washi paper texture)" },
    { label: "ポップアート (Pop Art)", val: "(pop art style), (bold colors), (halftone dots), (comic book style)" },
    { label: "ステンドグラス (Stained Glass)", val: "(stained glass style), (vibrant light), (mosaic pattern), (black outline)" },
    { label: "切り絵 (Paper Cutout)", val: "(paper cutout art), (layered paper), (shadow box), (3d depth)" },
    { label: "サイケデリック (Psychedelic)", val: "(psychedelic art), (lsd trip style), (kaleidoscope pattern), (vibrant neon colors)" },
    { label: "点描画 (Pointillism)", val: "(pointillism), (stippling), (dots texture), (georges seurat style)" }
  ];

  PRESETS_DATA["🖍️ 画材・アナログ (Traditional Media)"] = [
    { label: "クレヨン (Crayon)", val: "(crayon drawing), (childish style), (rough texture), (colorful), (wax texture)" },
    { label: "ガッシュ (Gouache)", val: "(gouache painting), (opaque watercolor), (flat colors), (matte finish)" },
    { label: "エアブラシ (Airbrush)", val: "(airbrush art), (smooth gradients), (retro 80s style), (soft focus), (shiny)" },
    { label: "木炭画 (Charcoal)", val: "(charcoal drawing), (smudged), (high contrast), (monochrome), (rough grain)" },
    { label: "パステル画 (Pastel)", val: "(pastel painting), (soft colors), (chalky texture), (blended), (dreamy)" }
  ];

  PRESETS_DATA["🎮 ゲーム・コンセプト (Game)"] = [
    { label: "設定画 (Char Sheet)", val: "(character sheet), (concept art), (multiple views), (front view), (side view), (back view)" },
    { label: "アイソメトリック (Isometric)", val: "(isometric view), (3d diorama), (miniature), (orthographic camera)" },
    { label: "ドット絵 (Pixel Art)", val: "(pixel art), (16-bit), (retro game), (dot art), (dithering)" },
    { label: "FPS視点 (First Person)", val: "(first person view), (POV), (hands visible), (immersive), (hud)" },
    { label: "ビジュアルノベル風", val: "(visual novel style), (dating sim), (anime character sprite), (expression sheet)" }
  ];

  PRESETS_DATA["📐 デザイン・グラフィック (Design)"] = [
    { label: "ベクターアート (Vector)", val: "(vector art), (adobe illustrator), (flat design), (clean lines), (svg style)" },
    { label: "ステッカー (Sticker)", val: "(sticker), (die-cut), (white border), (vector style), (cute)" },
    { label: "ロゴデザイン (Logo)", val: "(logo design), (vector), (minimalist), (simple), (modern), (flat), (symbol)" },
    { label: "Tシャツデザイン (T-Shirt)", val: "(t-shirt design), (graphic print), (vector art), (isolated on white)" }
  ];

  const EXTRA_STYLES = {
    "漫画・コミック (Manga & Comics)": [
      { ja: "少年漫画風", en: "shonen manga style" }, { ja: "少女漫画風", en: "shojo manga style" },
      { ja: "劇画風", en: "gekiga style" }, { ja: "アメコミ風", en: "comic book style" },
      { ja: "バンド・デシネ風", en: "bande dessinee style" }, { ja: "4コマ漫画風", en: "4koma" },
      { ja: "ウェブトゥーン風", en: "webtoon style" }
    ],
    "作家・スタジオ (More Artists)": [
      { ja: "TRIGGER風", en: "studio trigger style" }, { ja: "ufotable風", en: "ufotable style" },
      { ja: "MAPPA風", en: "mappa style" }, { ja: "クローバーワークス風", en: "cloverworks style" },
      { ja: "CLAMP風", en: "clamp style" }, { ja: "手塚治虫風", en: "osamu tezuka style" },
      { ja: "鳥山明風", en: "akira toriyama style" }, { ja: "永井博風", en: "hiroshi nagai style" },
      { ja: "Artgerm風", en: "artgerm style" }, { ja: "WLOP風", en: "wlop style" },
      { ja: "イリヤ・クブシノブ風", en: "ilya kuvshinov style" }, { ja: "グレッグ・ルトコフスキ風", en: "greg rutkowski style" },
      { ja: "H.R.ギーガー風", en: "h.r. giger style" }, { ja: "ベクシンスキー風", en: "beksinski style" }
    ],
    "映画監督 (Directors)": [
      { ja: "ティム・バートン風", en: "tim burton style" }, { ja: "ウェス・アンダーソン風", en: "wes anderson style" },
      { ja: "スタンリー・キューブリック風", en: "stanley kubrick style" }, { ja: "クエンティン・タランティーノ風", en: "quentin tarantino style" },
      { ja: "クリストファー・ノーラン風", en: "christopher nolan style" }, { ja: "新房昭之風", en: "akiyuki shinbo style" }
    ],
    "芸術運動 (Movements)": [
      { ja: "アール・ヌーヴォー", en: "art nouveau" }, { ja: "アール・デコ", en: "art deco" },
      { ja: "印象派", en: "impressionism style" }, { ja: "ゴッホ風", en: "van gogh style" },
      { ja: "クリムト風", en: "gustav klimt style" }, { ja: "サルバドール・ダリ風", en: "salvador dali style" },
      { ja: "キュビスム", en: "cubism" }, { ja: "浮世絵風", en: "ukiyo-e style" },
      { ja: "バロック風", en: "baroque style" }, { ja: "シュルレアリスム", en: "surrealism" },
      { ja: "ダダイズム", en: "dadaism" }, { ja: "バウハウス", en: "bauhaus style" }, 
      { ja: "ヴェイパーウェイヴ", en: "vaporwave" }
    ]
  };

  // === v2辞書 ===
  const V2_DICT = {
    "oil painting": "油絵", "impasto": "厚塗り", "visible brushstrokes": "筆致", "rich texture": "豊かな質感",
    "watercolor medium": "水彩画", "wet on wet": "ウェット・オン・ウェット", "soft edges": "柔らかな輪郭", "splatter effect": "飛沫効果",
    "ink wash painting": "水墨画", "sumi-e": "墨絵", "monochrome": "モノクロ", "bold lines": "太い線", "brush stroke": "筆のタッチ",
    "sketch": "スケッチ", "pencil drawing": "鉛筆画", "rough lines": "ラフな線", "graphite medium": "黒鉛画", "hatching": "ハッチング",
    "line art": "線画", "clean lines": "綺麗な線", "minimalist": "ミニマリスト", "white background": "白背景",
    "ukiyo-e style": "浮世絵風", "woodblock print": "木版画", "flat perspective": "平面的なパース", "bold outlines": "太い輪郭線", "washi paper texture": "和紙の質感",
    "pop art style": "ポップアート", "bold colors": "大胆な色", "halftone dots": "ハーフトーン", "comic book style": "アメコミ風",
    "stained glass style": "ステンドグラス風", "vibrant light": "鮮やかな光", "mosaic pattern": "モザイク模様", "black outline": "黒い輪郭線",
    "paper cutout art": "切り絵", "layered paper": "重ねた紙", "shadow box": "シャドーボックス", "3d depth": "3Dの奥行き",
    "psychedelic art": "サイケデリック", "lsd trip style": "LSDトリップ風", "kaleidoscope pattern": "万華鏡模様", "vibrant neon colors": "鮮やかなネオン色",
    "pointillism": "点描画", "stippling": "点描", "dots texture": "ドットの質感", "georges seurat style": "スーラ風",
    
    "crayon drawing": "クレヨン画", "childish style": "子供っぽい画風", "rough texture": "粗い質感", "colorful": "カラフル", "wax texture": "ワックスの質感",
    "gouache painting": "ガッシュ画", "opaque watercolor": "不透明水彩", "flat colors": "フラットな色", "illustrative style": "イラスト調", "matte finish": "マット仕上げ",
    "airbrush art": "エアブラシ画", "smooth gradients": "滑らかなグラデーション", "retro 80s style": "80年代レトロ風", "soft focus": "ソフトフォーカス", "shiny": "光沢",
    "charcoal drawing": "木炭画", "smudged": "ぼかし", "high contrast": "高コントラスト", "rough grain": "粗い粒子",
    "pastel painting": "パステル画", "soft colors": "ソフトな色", "chalky texture": "チョークの質感", "blended": "ブレンド", "dreamy": "夢幻的",
    
    "character sheet": "設定画", "concept art": "コンセプトアート", "multiple views": "複数アングル", "front view": "正面図", "side view": "側面図", "back view": "背面図",
    "isometric view": "アイソメトリック", "3d diorama": "3Dジオラマ", "miniature": "ミニチュア", "orthographic camera": "平行投影",
    "pixel art": "ドット絵", "16-bit": "16ビット", "retro game": "レトロゲーム", "dot art": "ドット絵", "dithering": "ディザリング",
    "first person view": "FPS視点", "POV": "POV", "hands visible": "手が見える", "immersive": "没入感", "hud": "HUD",
    "visual novel style": "ビジュアルノベル風", "dating sim": "恋愛シム", "anime character sprite": "立ち絵", "expression sheet": "表情集",
    "vector art": "ベクターアート", "adobe illustrator": "イラレ風", "flat design": "フラットデザイン", "svg style": "SVG風",
    "sticker": "ステッカー", "die-cut": "ダイカット", "white border": "白い縁取り", "vector style": "ベクター調", "cute": "可愛い",
    "logo design": "ロゴデザイン", "vector": "ベクター", "simple": "シンプル", "modern": "モダン", "flat": "フラット", "symbol": "シンボル",
    "t-shirt design": "Tシャツデザイン", "graphic print": "グラフィックプリント", "isolated on white": "白背景で分離",

    "shonen manga style": "少年漫画風", "shojo manga style": "少女漫画風", "gekiga style": "劇画風",
    "bande dessinee style": "バンド・デシネ風", "webtoon style": "ウェブトゥーン風", "4koma": "4コマ漫画風",
    "studio trigger style": "TRIGGER風", "ufotable style": "ufotable風", "mappa style": "MAPPA風", "cloverworks style": "クローバーワークス風", "clamp style": "CLAMP風",
    "osamu tezuka style": "手塚治虫風", "akira toriyama style": "鳥山明風", "hiroshi nagai style": "永井博風",
    "artgerm style": "Artgerm風", "wlop style": "WLOP風", "ilya kuvshinov style": "イリヤ・クブシノブ風", "greg rutkowski style": "グレッグ・ルトコフスキ風", "h.r. giger style": "H.R.ギーガー風", "beksinski style": "ベクシンスキー風",
    "tim burton style": "ティム・バートン風", "wes anderson style": "ウェス・アンダーソン風", "stanley kubrick style": "キューブリック風", "quentin tarantino style": "タランティーノ風", "christopher nolan style": "ノーラン風", "akiyuki shinbo style": "新房昭之風",
    "art nouveau": "アール・ヌーヴォー", "art deco": "アール・デコ", "impressionism style": "印象派", "van gogh style": "ゴッホ風", "gustav klimt style": "クリムト風", "salvador dali style": "ダリ風", "cubism": "キュビスム",
    "renaissance style": "ルネサンス風", "baroque style": "バロック風", "surrealism": "シュルレアリスム", "dadaism": "ダダイズム", "bauhaus style": "バウハウス", "vaporwave": "ヴェイパーウェイヴ"
  };

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
        if(window.__outputTranslation && item.label && !V2_DICT[item.label]) V2_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V2_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V2_DICT);

      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");
      const stylesContainer = document.querySelector("#qp-styles .qp-section-content");

      if (presetsContainer) {
        Object.entries(PRESETS_DATA).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
      if (stylesContainer) {
        Object.entries(EXTRA_STYLES).forEach(([k,v]) => stylesContainer.appendChild(createSubAccordion(k, v, "style")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

