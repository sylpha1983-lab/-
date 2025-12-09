(function(){
  "use strict";
  const VERSION = 10; // 拡張パックI (映像技術・3D詳細)
  const KEY = "quality_preset";

  // ==========================================
  // 拡張データ定義 (品質ワード #qp-quality に追加)
  // ==========================================

  const EXTRA_QUALITY = {
    "🎞️ 映画的ルック・色彩 (Cinematic Look)": [
      { ja: "テクニカラー", en: "technicolor" },
      { ja: "銀残し (ブリーチバイパス)", en: "bleach bypass" },
      { ja: "ティール＆オレンジ", en: "teal and orange" },
      { ja: "クロスプロセス", en: "cross processing" },
      { ja: "フィルムストック", en: "film stock" },
      { ja: "コダクローム", en: "kodachrome" },
      { ja: "アグファカラー", en: "agfacolor" },
      { ja: "カラーグレーディング", en: "color grading" }
    ],
    "🎥 映画フォーマット・レンズ (Cinema Formats)": [
      { ja: "IMAX", en: "imax" },
      { ja: "70mmフィルム", en: "70mm film" },
      { ja: "35mmフィルム", en: "35mm film" },
      { ja: "スーパー8 (8mm)", en: "super 8" },
      { ja: "シネマスコープ (2.35:1)", en: "cinemascope" },
      { ja: "ビスタビジョン", en: "vistavision" },
      { ja: "アナモルフィックレンズ", en: "anamorphic lens" },
      { ja: "Arri Alexa (デジタルシネマ)", en: "arri alexa" }
    ],
    "🧊 3Dテクスチャ・詳細 (3D Details)": [
      { ja: "ノーマルマップ (凹凸)", en: "normal map" },
      { ja: "ディスプレイスメントマップ", en: "displacement map" },
      { ja: "スペキュラ (反射)", en: "specular map" },
      { ja: "ラフネス (粗さ)", en: "roughness map" },
      { ja: "アルベド (固有色)", en: "albedo map" },
      { ja: "ワイヤーフレーム", en: "wireframe render" },
      { ja: "プロシージャルテクスチャ", en: "procedural texture" }
    ],
    "🖥️ CG・VFX技術 (CGI & VFX)": [
      { ja: "VFX (視覚効果)", en: "visual effects" },
      { ja: "CGI (コンピュータグラフィックス)", en: "cgi" },
      { ja: "マットペイント (背景画)", en: "matte painting" },
      { ja: "クロマキー (合成)", en: "chroma key" },
      { ja: "モーションキャプチャ", en: "motion capture" },
      { ja: "デジタルペインティング", en: "digital painting" },
      { ja: "マッチムーブ", en: "match moving" }
    ]
  };

  // === v10用 翻訳辞書 ===
  const V10_DICT = {
    // Cinematic Look
    "technicolor": "テクニカラー", "bleach bypass": "銀残し(ブリーチバイパス)",
    "teal and orange": "ティール＆オレンジ", "cross processing": "クロスプロセス",
    "film stock": "フィルムストック", "kodachrome": "コダクローム",
    "agfacolor": "アグファカラー", "color grading": "カラーグレーディング",

    // Cinema Formats
    "imax": "IMAX", "70mm film": "70mmフィルム", "35mm film": "35mmフィルム",
    "super 8": "スーパー8", "cinemascope": "シネマスコープ",
    "vistavision": "ビスタビジョン", "anamorphic lens": "アナモルフィックレンズ",
    "arri alexa": "Arri Alexa",

    // 3D Details
    "normal map": "ノーマルマップ", "displacement map": "ディスプレイスメントマップ",
    "specular map": "スペキュラマップ", "roughness map": "ラフネスマップ",
    "albedo map": "アルベドマップ", "wireframe render": "ワイヤーフレーム",
    "procedural texture": "プロシージャルテクスチャ",

    // CGI & VFX
    "visual effects": "VFX(視覚効果)", "cgi": "CGI",
    "matte painting": "マットペイント", "chroma key": "クロマキー",
    "motion capture": "モーションキャプチャ", "digital painting": "デジタルペインティング",
    "match moving": "マッチムーブ"
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
        if(window.__outputTranslation && item.label && !V10_DICT[item.label]) V10_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V10_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V10_DICT);

      // マウント先 (v1が作成したID: #qp-quality)
      const qualityContainer = document.querySelector("#qp-quality .qp-section-content");

      // コンテナが存在する場合のみ追記
      if (qualityContainer) {
        Object.entries(EXTRA_QUALITY).forEach(([k,v]) => qualityContainer.appendChild(createSubAccordion(k, v, "word")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
