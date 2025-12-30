(function(){
  "use strict";
  const VERSION = 3; 
  const KEY = "quality_preset";

  // スタイルデータ
  const STYLES_DATA = {
    "🏢 アニメスタジオ (Studios)": [
      { ja: "京都アニメーション", en: "kyoto animation" }, { ja: "ufotable", en: "ufotable" }, { ja: "SHAFT", en: "shaft" }, { ja: "TRIGGER", en: "studio trigger" },
      { ja: "スタジオジブリ", en: "studio ghibli" }, { ja: "MAPPA", en: "mappa" }, { ja: "WIT STUDIO", en: "wit studio" }, { ja: "CloverWorks", en: "cloverworks" },
      { ja: "A-1 Pictures", en: "a-1 pictures" }, { ja: "Production I.G", en: "production i.g" }, { ja: "マッドハウス", en: "madhouse" }, { ja: "ボンズ", en: "bones" },
      { ja: "サンライズ", en: "sunrise" }, { ja: "東映アニメーション", en: "toei animation" }, { ja: "P.A.WORKS", en: "p.a. works" }, { ja: "動画工房", en: "doga kobo" }
    ],
    "🖌️ イラストレーター (Artists)": [
      { ja: "Mika Pikazo風", en: "mika pikazo style" }, { ja: "米山舞風", en: "yoneyama mai style" }, { ja: "ワダアルコ風", en: "wada arco style" }, { ja: "望月けい風", en: "kei mochizuki style" },
      { ja: "副島成記風 (ペルソナ)", en: "shigenori soejima style" }, { ja: "新川洋司風 (MGS)", en: "yoji shinkawa style" }, { ja: "天野喜孝風 (FF)", en: "yoshitaka amano style" },
      { ja: "村田蓮爾風", en: "range murata style" }, { ja: "カントク風", en: "kantoku style" }, { ja: "Tony風", en: "tony taka style" }, { ja: "珈琲貴族風", en: "coffee kizoku style" },
      { ja: "redjuice風", en: "redjuice style" }, { ja: "huke風", en: "huke style" }, { ja: "深崎暮人風", en: "misaki kurehito style" }
    ],
    "🎨 アート・絵画風 (Art Styles)": [
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
    ]
  };

  // 年代データ
  const ERAS_DATA = {
    "🕰️ 時代・年代 (Eras)": [
      { ja: "古代エジプト", en: "ancient egypt" }, { ja: "古代ギリシャ", en: "ancient greek" }, { ja: "中世ヨーロッパ", en: "medieval era" }, { ja: "西部開拓時代", en: "wild west" },
      { ja: "ヴィクトリア朝", en: "victorian era" }, { ja: "大正ロマン", en: "taisho roman" }, { ja: "1920年代 (狂騒)", en: "roaring twenties" }, { ja: "1950年代 (ロカビリー)", en: "1950s style" },
      { ja: "昭和レトロ", en: "showa era style" }, { ja: "バブル時代 (80s)", en: "bubble era" }, { ja: "Y2K (2000年代)", en: "y2k aesthetic" }, { ja: "ポストアポカリプス", en: "post-apocalyptic" },
      { ja: "サイバーパンク未来", en: "cyberpunk future" }
    ]
  };

  const DICT = {
    "kyoto animation": "京都アニメーション", "studio ghibli": "スタジオジブリ", "studio trigger": "TRIGGER", "mika pikazo style": "Mika Pikazo風", "yoneyama mai style": "米山舞風",
    "oil painting": "油絵", "impasto": "厚塗り", "visible brushstrokes": "筆致", "rich texture": "豊かな質感",
    "watercolor medium": "水彩", "wet on wet": "ウェット・オン・ウェット", "soft edges": "柔らかい輪郭", "splatter effect": "飛沫",
    "ink wash painting": "水墨画", "sumi-e": "墨絵", "monochrome": "モノクロ", "bold lines": "太い線", "brush stroke": "筆跡",
    "sketch": "スケッチ", "pencil drawing": "鉛筆画", "rough lines": "ラフな線", "graphite medium": "黒鉛", "hatching": "ハッチング",
    "line art": "線画", "clean lines": "綺麗な線", "minimalist": "ミニマリスト", "white background": "白背景",
    "ukiyo-e style": "浮世絵", "woodblock print": "木版画", "flat perspective": "平面的パース", "bold outlines": "太い輪郭線", "washi paper texture": "和紙の質感",
    "pop art style": "ポップアート", "bold colors": "大胆な色", "halftone dots": "ハーフトーン", "comic book style": "アメコミ風",
    "stained glass style": "ステンドグラス", "vibrant light": "鮮やかな光", "mosaic pattern": "モザイク", "black outline": "黒い輪郭",
    "paper cutout art": "切り絵", "layered paper": "重ね紙", "shadow box": "シャドーボックス", "3d depth": "3Dの奥行き",
    "psychedelic art": "サイケデリック", "lsd trip style": "LSDトリップ風", "kaleidoscope pattern": "万華鏡", "vibrant neon colors": "鮮やかなネオン",
    "pointillism": "点描画", "stippling": "点描", "dots texture": "ドットの質感", "georges seurat style": "スーラ風",
    "ancient egypt": "古代エジプト", "ancient greek": "古代ギリシャ", "medieval era": "中世", "wild west": "西部劇",
    "victorian era": "ヴィクトリア朝", "taisho roman": "大正ロマン", "roaring twenties": "狂騒の20年代", "1950s style": "50年代風",
    "showa era style": "昭和レトロ", "bubble era": "バブル時代", "y2k aesthetic": "Y2K", "post-apocalyptic": "ポストアポカリプス", "cyberpunk future": "サイバーパンク未来"
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en;
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const sharedContent = document.getElementById("qp-styles-content");
      if (sharedContent) {
        Object.entries(STYLES_DATA).forEach(([k,v]) => { sharedContent.appendChild(createSubAccordion(k, v)); });
        const erasContent = document.getElementById("qp-eras-content");
        if(erasContent) Object.entries(ERAS_DATA).forEach(([k,v]) => { erasContent.appendChild(createSubAccordion(k, v)); });
      } else {
        const root = document.querySelector(".quality-preset-integrated");
        if(root){
          Object.entries(STYLES_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
          Object.entries(ERAS_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

