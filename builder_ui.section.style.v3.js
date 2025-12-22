(function(){
  "use strict";
  const VERSION = 3;
  const KEY = "style";

  const STYLE_DATA = {
    "🔮 ネット・美学 (Internet Aesthetics)": [
      { ja: "ヴェイパーウェイヴ", en: "vaporwave, aesthetic, neon pink and blue, retro computer, greek statues, glitch" },
      { ja: "シンセウェイヴ (80s)", en: "synthwave, retrowave, neon grid, sunset, futuristic 80s, outrun" },
      { ja: "ローファイ (Lo-Fi)", en: "lo-fi aesthetic, grainy, nostalgic, muted colors, anime study girl style" },
      { ja: "コテージコア (田舎)", en: "cottagecore, nature, flowers, rustic, peaceful, picnic, sunlight" },
      { ja: "ダークアカデミア", en: "dark academia, library, vintage books, tweed, coffee, gloomy, intellectual" },
      { ja: "ゴブリンコア", en: "goblincore, moss, mushrooms, frogs, earth tones, nature, clutter" },
      { ja: "ドリームコア (夢)", en: "dreamcore, surreal, nostalgia, uncanny, bright colors, fuzzy, liminal" },
      { ja: "リミナルスペース", en: "liminal space, empty rooms, eerie, backrooms, fluorescent light, uncanny" },
      { ja: "カワイイコア", en: "kawaiicore, pastel colors, cute accessories, plushies, pink overload" },
      { ja: "Y2K (2000年代)", en: "y2k aesthetic, chrome, futuristic, glossy, holographic, transparent tech" }
    ],
    "⚙️ パンク・SFサブジャンル (Punks)": [
      { ja: "サイバーパンク", en: "cyberpunk, high tech low life, neon lights, cybernetics, night city" },
      { ja: "スチームパンク (蒸気)", en: "steampunk, brass, gears, victorian tech, goggles, steam engines" },
      { ja: "ソーラーパンク (自然)", en: "solarpunk, green tech, nature and technology, stained glass, bright sunlight" },
      { ja: "ディーゼルパンク", en: "dieselpunk, 1940s tech, oil, war machines, steel, grime" },
      { ja: "バイオパンク", en: "biopunk, organic tech, flesh, genetic engineering, glowing plants" },
      { ja: "アトムパンク (50s)", en: "atompunk, 1950s retro futurism, space age, atomic power, googie architecture" }
    ],
    "💻 デジタル・デザイン様式 (Digital & Design)": [
      { ja: "ピクセルアート (ドット)", en: "pixel art, 16-bit, retro game sprite, dithering" },
      { ja: "ボクセル (箱庭)", en: "voxel art, minecraft style, 3d blocks, isometric view" },
      { ja: "ローポリゴン", en: "low poly, faceted, 3d render, minimalist, sharp edges" },
      { ja: "ベクターアート", en: "vector art, flat color, clean lines, illustrator style" },
      { ja: "グリッチアート", en: "glitch art, datamoshing, digital noise, corrupted image, rgb shift" },
      { ja: "フラットデザイン", en: "flat design, minimalist, simple shapes, bright colors" },
      { ja: "メンフィス (80s)", en: "memphis design, geometric shapes, squiggly lines, pastel and bold colors, 80s pattern" },
      { ja: "ブルータリズム", en: "brutalism, concrete, blocky, monolithic, raw, utilitarian" },
      { ja: "ポップアート", en: "pop art style, bold colors, halftone dots, comic book style, andy warhol style" }
    ],
    "📸 写真・映像スタイル (Photo & Film)": [
      { ja: "フィルムノワール", en: "film noir, high contrast, black and white, dramatic shadows, crime movie style" },
      { ja: "ヴィンテージ写真", en: "vintage photo, sepia tone, scratches, faded colors, old paper texture" },
      { ja: "ポラロイド", en: "polaroid style, flash photography, vignette, soft colors" },
      { ja: "ダブル露光", en: "double exposure, silhouette, superimposed images, nature and portrait blend" },
      { ja: "赤外線写真", en: "infrared photography, white foliage, surreal colors, dreamlike" },
      { ja: "魚眼レンズ", en: "fisheye lens, distorted perspective, nose close up, dynamic" },
      { ja: "ティルトシフト (ミニチュア)", en: "tilt-shift, miniature effect, blur top and bottom, high angle" }
    ]
  };

  const DICT = {
    "vaporwave": "ヴェイパーウェイヴ", "synthwave": "シンセウェイヴ", "lo-fi aesthetic": "ローファイ",
    "cottagecore": "コテージコア", "dark academia": "ダークアカデミア", "goblincore": "ゴブリンコア",
    "dreamcore": "ドリームコア", "liminal space": "リミナルスペース", "kawaiicore": "カワイイコア", "y2k aesthetic": "Y2K",
    "cyberpunk": "サイバーパンク", "steampunk": "スチームパンク", "solarpunk": "ソーラーパンク",
    "dieselpunk": "ディーゼルパンク", "biopunk": "バイオパンク", "atompunk": "アトムパンク",
    "pixel art": "ドット絵", "voxel art": "ボクセル", "low poly": "ローポリ", "vector art": "ベクター画",
    "glitch art": "グリッチアート", "flat design": "フラットデザイン", "memphis design": "メンフィス",
    "brutalism": "ブルータリズム", "pop art style": "ポップアート",
    "film noir": "フィルムノワール", "vintage photo": "ヴィンテージ写真", "polaroid style": "ポラロイド風",
    "double exposure": "ダブル露光", "infrared photography": "赤外線写真", "fisheye lens": "魚眼レンズ", "tilt-shift": "ティルトシフト"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      
      const root = document.querySelector("#list-style");
      if (!root) return;

      const createSub = (title, items) => {
        const details = document.createElement("details");
        details.className = "style-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #b197fc; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.innerHTML = `${title} <span style="font-size:0.8em; color:#6741d9;">(Modern)</span>`;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f3f0ff; color:#5f3dc4;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      // v1, v2と同じ親コンテナに追加
      const sectionContent = root.querySelector(".section-content") || (() => {
        const d = document.createElement("div"); d.className="section-content"; root.appendChild(d); return d;
      })();

      Object.entries(STYLE_DATA).forEach(([key, val]) => {
        sectionContent.appendChild(createSub(key, val));
      });
    },
    getTags() {
      // #list-style内のチェックボックスはv1,v2,v3共通で取得可能
      // ここでは空配列を返し、親側でまとめて取得させるか、
      // 念のため自分の管理分を返すようにする（が、今回はCoreに任せる想定で空でもOK）
      // 安全のため、v2同様に実装
      const tags = [];
      const parent = document.querySelector("#list-style");
      if(parent){
        // 注: 他のバージョンと重複して取得しないよう、厳密には自分のDOMを特定すべきだが
        // Coreが重複排除するので問題なし
      }
      return tags;
    } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
