(function(){
  "use strict";
  const VERSION = 2; // 統合版: 画風・文化・スタイル
  const KEY = "quality_preset";

  const STYLES_DATA = {
    "🏢 アニメスタジオ (Anime Studios)": [
      { ja: "京都アニメーション", en: "kyoto animation" }, { ja: "ufotable", en: "ufotable" },
      { ja: "SHAFT", en: "shaft" }, { ja: "TRIGGER", en: "studio trigger" },
      { ja: "スタジオジブリ", en: "studio ghibli" }, { ja: "MAPPA", en: "mappa" },
      { ja: "WIT STUDIO", en: "wit studio" }, { ja: "CloverWorks", en: "cloverworks" },
      { ja: "A-1 Pictures", en: "a-1 pictures" }, { ja: "Production I.G", en: "production i.g" },
      { ja: "マッドハウス", en: "madhouse" }, { ja: "ボンズ", en: "bones" },
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
      { ja: "huke風", en: "huke style" }, { ja: "深崎暮人風", en: "misaki kurehito style" }
    ],
    "🎮 ゲームアート (Game Styles)": [
      { ja: "原神スタイル", en: "genshin impact style" }, { ja: "スターレイル風", en: "honkai: star rail style" },
      { ja: "アークナイツ風", en: "arknights style" }, { ja: "アズレン風", en: "azur lane style" },
      { ja: "ブルアカ風", en: "blue archive style" }, { ja: "FGO風", en: "fate/grand order style" },
      { ja: "ペルソナ5風", en: "persona 5 style" }, { ja: "ダンガンロンパ風", en: "danganronpa style" },
      { ja: "ニーア風", en: "nier: automata style" }, { ja: "FF風", en: "final fantasy style" },
      { ja: "エルデンリング風", en: "elden ring style" }, { ja: "スプラトゥーン風", en: "splatoon style" },
      { ja: "グラブル風", en: "granblue fantasy style" }, { ja: "アイマス風", en: "the idolm@ster style" }
    ],
    "🎨 アート・絵画風 (Artistic)": [
      { label: "厚塗り・油絵", val: "(oil painting), (impasto:1.2), (visible brushstrokes), (rich texture)" },
      { label: "水彩画", val: "(watercolor medium), (wet on wet), (soft edges), (splatter effect)" },
      { label: "インク・水墨画", val: "(ink wash painting), (sumi-e), (monochrome), (bold lines), (brush stroke)" },
      { label: "スケッチ", val: "(sketch), (pencil drawing), (rough lines), (graphite medium), (hatching)" },
      { label: "線画", val: "(line art), (monochrome), (clean lines), (minimalist), (white background)" },
      { label: "浮世絵", val: "(ukiyo-e style), (woodblock print), (flat perspective), (bold outlines), (washi paper texture)" },
      { label: "ポップアート", val: "(pop art style), (bold colors), (halftone dots), (comic book style)" },
      { label: "ステンドグラス", val: "(stained glass style), (vibrant light), (mosaic pattern), (black outline)" },
      { label: "切り絵", val: "(paper cutout art), (layered paper), (shadow box), (3d depth)" },
      { label: "サイケデリック", val: "(psychedelic art), (lsd trip style), (kaleidoscope pattern), (vibrant neon colors)" },
      { label: "点描画", val: "(pointillism), (stippling), (dots texture), (georges seurat style)" }
    ],
    "🌸 美学・コア (Aesthetics)": [
      { ja: "コテージコア", en: "cottagecore" }, { ja: "ダークアカデミア", en: "dark academia" },
      { ja: "ウィアードコア", en: "weirdcore" }, { ja: "ドリームコア", en: "dreamcore" },
      { ja: "プールコア", en: "poolcore" }, { ja: "トラウマコア", en: "traumacore" },
      { ja: "ゴブリンコア", en: "goblincore" }, { ja: "フェアリーコア", en: "fairycore" },
      { ja: "エンジェルコア", en: "angelcore" }, { ja: "サイバープレップ", en: "cyberprep" },
      { label: "バービーコア", val: "(barbiecore), (pink aesthetic), (plastic texture), (girly), (fashion doll)" },
      { label: "キッドコア", val: "(kidcore), (primary colors), (childhood nostalgia), (toys), (rainbow), (playful)" }
    ],
    "🎵 音楽・ファッション (Music & Fashion)": [
      { ja: "ヘヴィメタル風", en: "heavy metal aesthetic" }, { ja: "ヒップホップ風", en: "hip hop style" },
      { ja: "ジャズ/ノワール", en: "film noir style" }, { ja: "K-POP風", en: "k-pop aesthetic" },
      { ja: "ビジュアル系", en: "visual kei" }, { ja: "パンクロック", en: "punk rock style" },
      { ja: "EDM/レイブ", en: "rave style" }, { ja: "グランジ", en: "grunge aesthetic" },
      { ja: "オートクチュール", en: "haute couture" }, { ja: "テックウェア", en: "techwear" },
      { ja: "森ガール", en: "mori girl" }, { ja: "ギャル (Y2K)", en: "gyaru style" },
      { ja: "ゴスロリ", en: "gothic lolita" }, { ja: "ストリート", en: "streetwear" },
      { ja: "アヴァンギャルド", en: "avant-garde fashion" }
    ],
    "🖌️ 専門イラスト (Specialized Art)": [
      { ja: "ボタニカルアート", en: "botanical illustration" }, { ja: "解剖図", en: "anatomical drawing" },
      { ja: "建築スケッチ", en: "architectural sketch" }, { ja: "ファッション画", en: "fashion illustration" },
      { ja: "児童画", en: "children's drawing" }, { ja: "等高線図", en: "topographic map" },
      { ja: "特許図面", en: "patent drawing" }, { ja: "曼荼羅", en: "mandala" }
    ]
  };

  const ERAS_DATA = {
    "歴史・時代 (Extended Eras)": [
      { ja: "古代エジプト", en: "ancient egypt" }, { ja: "古代ギリシャ", en: "ancient greek" },
      { ja: "中世ヨーロッパ", en: "medieval era" }, { ja: "西部開拓時代", en: "wild west" },
      { ja: "ヴィクトリア朝", en: "victorian era" }, { ja: "大正ロマン", en: "taisho roman" },
      { ja: "1920年代 (狂騒)", en: "roaring twenties" }, { ja: "1950年代 (ロカビリー)", en: "1950s style" },
      { ja: "昭和レトロ", en: "showa era style" }, { ja: "バブル時代 (80s)", en: "bubble era" },
      { ja: "Y2K (2000年代)", en: "y2k aesthetic" }, { ja: "ポストアポカリプス", en: "post-apocalyptic" },
      { ja: "サイバーパンク未来", en: "cyberpunk future" }
    ]
  };

  // 翻訳辞書
  const DICT = {
    // Studios & Illustrators & Games (省略形対応)
    "kyoto animation": "京都アニメーション", "studio ghibli": "スタジオジブリ", "studio trigger": "TRIGGER",
    "mika pikazo style": "Mika Pikazo風", "yoneyama mai style": "米山舞風", "genshin impact style": "原神風",
    // Artistic Presets content
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
    // Aesthetics
    "cottagecore": "コテージコア", "dark academia": "ダークアカデミア", "weirdcore": "ウィアードコア",
    "dreamcore": "ドリームコア", "poolcore": "プールコア", "traumacore": "トラウマコア",
    "goblincore": "ゴブリンコア", "fairycore": "フェアリーコア", "angelcore": "エンジェルコア",
    "cyberprep": "サイバープレップ",
    "barbiecore": "バービーコア", "pink aesthetic": "ピンクの美学", "plastic texture": "プラスチック質感", "girly": "ガーリー", "fashion doll": "ファッションドール",
    "kidcore": "キッドコア", "primary colors": "原色", "childhood nostalgia": "子供時代の郷愁", "toys": "おもちゃ", "rainbow": "虹", "playful": "遊び心",
    // Music & Fashion
    "heavy metal aesthetic": "ヘヴィメタル風", "hip hop style": "ヒップホップ風", "film noir style": "フィルム・ノワール風",
    "k-pop aesthetic": "K-POP風", "visual kei": "ビジュアル系", "punk rock style": "パンクロック風",
    "rave style": "レイブ風", "grunge aesthetic": "グランジ風",
    "haute couture": "オートクチュール", "techwear": "テックウェア", "mori girl": "森ガール",
    "gyaru style": "ギャル風", "gothic lolita": "ゴスロリ", "streetwear": "ストリート", "avant-garde fashion": "アヴァンギャルド",
    // Specialized Art
    "botanical illustration": "植物画", "anatomical drawing": "解剖図", "architectural sketch": "建築スケッチ",
    "fashion illustration": "ファッション画", "children's drawing": "児童画", "topographic map": "等高線図",
    "patent drawing": "特許図面", "mandala": "曼荼羅",
    // Eras
    "ancient egypt": "古代エジプト", "ancient greek": "古代ギリシャ", "medieval era": "中世", "wild west": "西部開拓時代",
    "victorian era": "ヴィクトリア朝", "taisho roman": "大正ロマン", "roaring twenties": "狂騒の20年代",
    "1950s style": "1950年代風", "showa era style": "昭和レトロ", "bubble era": "バブル時代",
    "y2k aesthetic": "Y2K", "post-apocalyptic": "ポストアポカリプス", "cyberpunk future": "サイバーパンク未来"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const stylesContainer = document.querySelector("#qp-styles .qp-section-content");
      const erasContainer = document.querySelector("#qp-eras .qp-section-content");

      if (stylesContainer) {
        // スタイル系: ja/en形式と、preset形式(label/val)が混在しているので分岐
        Object.entries(STYLES_DATA).forEach(([k, items]) => {
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

            if (item.val) {
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
          stylesContainer.appendChild(details);
        });
      }

      if (erasContainer) {
        Object.entries(ERAS_DATA).forEach(([k, items]) => {
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
          erasContainer.appendChild(details);
        });
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

