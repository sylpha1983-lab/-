(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "camera";

  const CATEGORIES = {
    "ショットサイズ (Shot Size / Framing)": [
      { ja: "クローズアップ (顔)", en: "close-up" },
      { ja: "エクストリーム・アップ (目元等)", en: "extreme close-up" },
      { ja: "ポートレート (顔〜肩)", en: "portrait" },
      { ja: "バストアップ (胸上)", en: "upper body" },
      { ja: "カウボーイショット (膝上)", en: "cowboy shot" },
      { ja: "全身 (フルショット)", en: "full body" },
      { ja: "ワイドショット (遠景)", en: "wide shot" },
      { ja: "超広角 (風景メイン)", en: "extreme wide shot" }
    ],
    "カメラアングル (Angle)": [
      { ja: "正面から", en: "front view" },
      { ja: "横顔 (プロフィール)", en: "profile" },
      { ja: "背後から", en: "from behind" },
      { ja: "ローアングル (煽り)", en: "low angle" },
      { ja: "ワームズアイ (地面すれすれ)", en: "worm's eye view" },
      { ja: "ハイアングル (俯瞰)", en: "high angle" },
      { ja: "バードアイ (上空)", en: "bird's eye view" },
      { ja: "真上から (トップダウン)", en: "overhead shot" },
      { ja: "ダッチアングル (斜め)", en: "dutch angle" },
      { ja: "POV (主観視点)", en: "pov" },
      { ja: "自撮り", en: "selfie" }
    ],
    "レンズ・画角 (Lens & Focal Length)": [
      { ja: "広角レンズ", en: "wide angle lens" },
      { ja: "魚眼レンズ", en: "fisheye lens" },
      { ja: "望遠レンズ", en: "telephoto lens" },
      { ja: "マクロレンズ (接写)", en: "macro lens" },
      { ja: "35mm (標準)", en: "35mm lens" },
      { ja: "50mm (ポートレート)", en: "50mm lens" },
      { ja: "85mm (中望遠)", en: "85mm lens" },
      { ja: "135mm (望遠・圧縮効果)", en: "135mm lens" },
      { ja: "パノラマ", en: "panorama" }
    ],
    "フォーカス・被写界深度 (Focus & Depth)": [
      { ja: "被写界深度 (ボケ味)", en: "depth of field" },
      { ja: "背景ボケ", en: "blurry background" },
      { ja: "強いボケ (Bokeh)", en: "bokeh" },
      { ja: "パンフォーカス (全体にピント)", en: "deep focus" },
      { ja: "シャープフォーカス", en: "sharp focus" },
      { ja: "ソフトフォーカス", en: "soft focus" },
      { ja: "モーションブラー (動き)", en: "motion blur" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-camera") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "camera-section";
      
      // ヘッダーデザイン
      const h = document.createElement("div");
      h.textContent = "📷 カメラ・レンズ (Camera/Lens)";
      h.style.fontWeight = "bold";
      h.style.color = "#004080";
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
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
          label.style.backgroundColor = "#eef6ff"; // 薄い青背景
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #ddeeff";
          
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
      document.querySelectorAll(".camera-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
