(function(){
  "use strict";
  const VERSION = 8; 
  const KEY = "quality_preset";

  const STYLE_DATA = {
    "🖌️ アナログ画材・描画技法 (Traditional Media)": [
      { ja: "色鉛筆画", en: "colored pencil drawing, hatching, soft colors" },
      { ja: "木炭画 (チャコール)", en: "charcoal drawing, smudge, rough sketch, grayscale" },
      { ja: "パステル画", en: "pastel painting, soft texture, chalky, gentle atmosphere" },
      { ja: "クレヨン・落書き", en: "crayon drawing, childish drawing, wax texture, doodles" },
      { ja: "アクリルガッシュ", en: "acrylic painting, matte finish, vibrant opaque colors" },
      { ja: "エアブラシ", en: "airbrush art, smooth gradients, retro 80s style" },
      { ja: "スプレーアート", en: "spray paint art, graffiti style, drips, stencil" },
      { ja: "インク・万年筆", en: "ink drawing, fountain pen, cross-hatching, high contrast" },
      { ja: "筆ペン・書道", en: "brush pen, calligraphy, sumi-e, bold strokes, splashing ink" },
      { ja: "黒板アート", en: "chalkboard art, chalk drawing, blackboard background" },
      { ja: "スクラッチアート", en: "scratchboard, rainbow colors under black, etching" },
      { ja: "アルコールインク", en: "alcohol ink art, fluid art, marble texture, flowing colors" },
      { ja: "テンペラ画", en: "tempera painting, egg tempera, classical matte" },
      { ja: "フレスコ画", en: "fresco painting, wall painting, plaster texture, ancient style" },
      { ja: "銅版画 (エッチング)", en: "etching, copperplate print, fine lines, intaglio" }
    ],
    "🏛️ 古典・芸術運動 (Classic Movements)": [
      { ja: "アール・ヌーヴォー (装飾)", en: "art nouveau, mucha style, intricate floral decoration, elegant curves" },
      { ja: "アール・デコ (幾何学)", en: "art deco, geometric patterns, gold and black, luxury, 1920s style" },
      { ja: "印象派 (光と色)", en: "impressionism, claude monet style, visible brushstrokes, light reflection" },
      { ja: "キュビズム (多視点)", en: "cubism, picasso style, abstract geometric shapes, fragmented" },
      { ja: "シュルレアリスム (夢)", en: "surrealism, salvador dali style, dreamlike, melting objects, impossible geometry" },
      { ja: "バロック (重厚)", en: "baroque style, dramatic lighting, chiaroscuro, ornate, dynamic movement" },
      { ja: "ロココ (優美)", en: "rococo style, pastel colors, frills, elegant, aristocratic" },
      { ja: "ゴシック (暗黒)", en: "gothic art, dark atmosphere, stained glass, pointed arches, melancholy" },
      { ja: "ルネサンス (古典)", en: "renaissance style, michelangelo style, anatomical realism, religious themes" },
      { ja: "象徴主義", en: "symbolism, mystical, dreamlike, mythological" },
      { ja: "表現主義", en: "expressionism, distorted, emotional, bold colors, edvard munch style" },
      { ja: "フォーヴィズム (野獣派)", en: "fauvism, wild colors, matisse style, unrealistic colors" }
    ],
    "🧶 工芸・素材感 (Crafts & Materials)": [
      { ja: "ステンドグラス", en: "stained glass, colorful light, black outlines, church window" },
      { ja: "切り絵・シャドーボックス", en: "paper cutout art, layered paper, shadow box, depth, silhouette" },
      { ja: "折り紙", en: "origami style, folded paper, geometric faceted, paper texture" },
      { ja: "ペーパークラフト", en: "papercraft, assembled paper model, low poly" },
      { ja: "モザイク画", en: "mosaic art, tile pattern, ceramic fragments" },
      { ja: "刺繍・ステッチ", en: "embroidery, cross stitch, fabric texture, sewn thread" },
      { ja: "編み物 (ニット)", en: "knitted texture, wool, amigurumi, soft plush" },
      { ja: "フェルト人形", en: "needle felt, felt texture, fuzzy, soft toy" },
      { ja: "粘土 (クレイアニメ)", en: "claymation, plasticine, stop motion style, fingerprints" },
      { ja: "陶磁器・ポーセリン", en: "porcelain, ceramic texture, glossy, painted pottery" },
      { ja: "金継ぎ", en: "kintsugi, broken and repaired with gold, wabi-sabi" },
      { ja: "ラテアート", en: "latte art, coffee foam, brown and white, cup view" },
      { ja: "氷彫刻", en: "ice sculpture, transparent, melting, cold atmosphere" }
    ]
  };

  const DICT = {
    "colored pencil drawing": "色鉛筆画", "charcoal drawing": "木炭画", "crayon drawing": "クレヨン画",
    "pastel painting": "パステル画", "acrylic painting": "アクリル画", "airbrush art": "エアブラシ画",
    "spray paint art": "スプレーアート", "ink drawing": "インク画", "brush pen": "筆ペン",
    "chalkboard art": "黒板アート", "scratchboard": "スクラッチアート", "alcohol ink art": "アルコールインク",
    "tempera painting": "テンペラ画", "fresco painting": "フレスコ画", "etching": "銅版画",
    "art nouveau": "アール・ヌーヴォー", "art deco": "アール・デコ", "impressionism": "印象派",
    "cubism": "キュビズム", "surrealism": "シュルレアリスム", "baroque style": "バロック",
    "rococo style": "ロココ", "gothic art": "ゴシック", "renaissance style": "ルネサンス",
    "symbolism": "象徴主義", "expressionism": "表現主義", "fauvism": "フォーヴィズム",
    "stained glass": "ステンドグラス", "paper cutout art": "切り絵", "origami style": "折り紙風",
    "papercraft": "ペーパークラフト", "mosaic art": "モザイク画", "embroidery": "刺繍",
    "knitted texture": "ニット風", "needle felt": "フェルト風", "claymation": "クレイアニメ風",
    "porcelain": "陶磁器風", "kintsugi": "金継ぎ", "latte art": "ラテアート", "ice sculpture": "氷彫刻"
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    details.style.cssText = "margin-bottom:6px; border:1px solid #b197fc; border-radius:4px; background:#fff;"; 
    details.open = false; 
    const summary = document.createElement("summary"); 
    summary.innerHTML = `${title} <span style="font-size:0.8em; color:#6741d9;">(Classic)</span>`; 
    summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f3f0ff; color:#5f3dc4;";
    details.appendChild(summary); 
    const content = document.createElement("div"); 
    content.className = "qp-content-grid"; 
    content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";
    items.forEach(item => { 
      const label = document.createElement("label"); 
      label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
      const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.en;
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); label.appendChild(document.createTextNode(item.ja)); label.title = item.en;
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const sharedContent = document.getElementById("qp-styles-content");
      if (sharedContent) Object.entries(STYLE_DATA).forEach(([k,v]) => sharedContent.appendChild(createSubAccordion(k, v)));
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

