(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "postprocessing";

  const CATEGORIES = {
    "フィルムエミュレーション (Film Look)": [
      { ja: "Kodak Portra 400 (暖かみ)", en: "Kodak Portra 400" },
      { ja: "Kodak Gold 200", en: "Kodak Gold 200" },
      { ja: "Fujifilm Pro 400H (透明感)", en: "Fujifilm Pro 400H" },
      { ja: "Fujifilm Superia", en: "Fujifilm Superia" },
      { ja: "CineStill 800T (夜景向け)", en: "CineStill 800T" },
      { ja: "Kodachrome (レトロ)", en: "Kodachrome" },
      { ja: "ポラロイド風", en: "Polaroid" },
      { ja: "Instax (チェキ)", en: "Instax" },
      { ja: "35mmフィルム", en: "35mm film" },
      { ja: "16mmフィルム", en: "16mm film" },
      { ja: "VHS (ビデオテープ)", en: "VHS" }
    ],
    "アナログ・質感ノイズ (Grain & Texture)": [
      { ja: "フィルムグレイン (粒子)", en: "film grain" },
      { ja: "ノイズ", en: "noise" },
      { ja: "ISOノイズ (高感度)", en: "ISO noise" },
      { ja: "ざらついた質感", en: "gritty" },
      { ja: "ハーフトーン (網点)", en: "halftone" },
      { ja: "スキャンライン", en: "scan lines" },
      { ja: "ダスト＆スクラッチ", en: "dust and scratches" }
    ],
    "レンズ・光学アーティファクト (Optical Artifacts)": [
      { ja: "ビネット (四隅落ち)", en: "vignette" },
      { ja: "色収差 (色ズレ)", en: "chromatic aberration" },
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "ハレーション", en: "halation" },
      { ja: "ライトリーク (光漏れ)", en: "light leaks" },
      { ja: "ブルーム (光の拡散)", en: "bloom" },
      { ja: "グロー (発光)", en: "glow" },
      { ja: "レンズの歪み", en: "lens distortion" },
      { ja: "モーションブラー", en: "motion blur" }
    ],
    "カラーグレーディング・トーン (Grading & Tone)": [
      { ja: "高コントラスト", en: "high contrast" },
      { ja: "低コントラスト", en: "low contrast" },
      { ja: "彩度高め (Vibrant)", en: "vibrant" },
      { ja: "彩度低め (Desaturated)", en: "desaturated" },
      { ja: "セピア調", en: "sepia" },
      { ja: "モノクロ/白黒", en: "monochrome" },
      { ja: "ブリーチバイパス (銀残し)", en: "bleach bypass" },
      { ja: "HDR (ハイダイナミックレンジ)", en: "HDR" },
      { ja: "テクニカラー (古い映画)", en: "technicolor" },
      { ja: "クロスプロセス", en: "cross processing" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-postprocessing") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "postprocessing-section";
      
      const h = document.createElement("div");
      h.textContent = "🎞️ 仕上げ・後処理 (Post-Processing)";
      h.style.fontWeight = "bold";
      h.style.color = "#2f4f4f"; // ダークスレートグレー（現像室の暗室イメージ）
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "5px 0 0 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#e0eeee"; // 淡いシアン系背景
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #c0d0d0";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "4px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".postprocessing-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
