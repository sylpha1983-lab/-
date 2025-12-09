(function(){
  "use strict";
  const VERSION = 2;
  const KEY = "quality_preset";

  // === 拡張データ ===
  const EXTRA_PRESETS = {
    "🎨 アート・絵画風 (Artistic)": [
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
    ],
    "🖍️ 画材・アナログ (Traditional Media)": [
      { label: "クレヨン (Crayon)", val: "(crayon drawing), (childish style), (rough texture), (colorful), (wax texture)" },
      { label: "ガッシュ (Gouache)", val: "(gouache painting), (opaque watercolor), (flat colors), (matte finish)" },
      { label: "エアブラシ (Airbrush)", val: "(airbrush art), (smooth gradients), (retro 80s style), (soft focus), (shiny)" },
      { label: "木炭画 (Charcoal)", val: "(charcoal drawing), (smudged), (high contrast), (monochrome), (rough grain)" },
      { label: "パステル画 (Pastel)", val: "(pastel painting), (soft colors), (chalky texture), (blended), (dreamy)" }
    ],
    "🎮 ゲーム・コンセプト (Game)": [
      { label: "設定画 (Char Sheet)", val: "(character sheet), (concept art), (multiple views), (front view), (side view), (back view)" },
      { label: "アイソメトリック (Isometric)", val: "(isometric view), (3d diorama), (miniature), (orthographic camera)" },
      { label: "ドット絵 (Pixel Art)", val: "(pixel art), (16-bit), (retro game), (dot art), (dithering)" },
      { label: "FPS視点 (First Person)", val: "(first person view), (POV), (hands visible), (immersive), (hud)" },
      { label: "ビジュアルノベル風", val: "(visual novel style), (dating sim), (anime character sprite), (expression sheet)" }
    ],
    "📐 デザイン・グラフィック (Design)": [
      { label: "ベクターアート (Vector)", val: "(vector art), (adobe illustrator), (flat design), (clean lines), (svg style)" },
      { label: "ステッカー (Sticker)", val: "(sticker), (die-cut), (white border), (vector style), (cute)" },
      { label: "ロゴデザイン (Logo)", val: "(logo design), (vector), (minimalist), (simple), (modern), (flat), (symbol)" },
      { label: "Tシャツデザイン (T-Shirt)", val: "(t-shirt design), (graphic print), (vector art), (isolated on white)" }
    ]
  };

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
    "t-shirt design": "Tシャツデザイン", "graphic print": "グラフィックプリント", "isolated on white": "白背景で分離"
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
      cb.dataset.val = item.val;
      label.title = item.val;
      
      label.appendChild(cb);
      label.appendChild(document.createTextNode(item.label));
      content.appendChild(label);
    });
    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V2_DICT);

      // マウント先 (v1が作成したID: #qp-presets)
      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");

      // コンテナが存在する場合のみ追記
      if (presetsContainer) {
        Object.entries(EXTRA_PRESETS).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

