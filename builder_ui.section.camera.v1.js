(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "camera";

  const CATEGORIES = {
    "📏 ショットサイズ (Framing)": [
      { ja: "超クローズアップ (目元等)", en: "extreme close-up" },
      { ja: "クローズアップ (顔)", en: "close-up" },
      { ja: "ポートレート (顔〜肩)", en: "portrait" },
      { ja: "バストアップ (胸上)", en: "upper body" },
      { ja: "カウボーイショット (膝上)", en: "cowboy shot" },
      { ja: "全身 (フルショット)", en: "full body" },
      { ja: "ワイドショット (遠景)", en: "wide shot" },
      { ja: "超広角 (風景メイン)", en: "extreme wide shot" }
    ],
    "📐 カメラアングル (Angle)": [
      { ja: "正面から (フロント)", en: "front view" },
      { ja: "横顔 (プロフィール)", en: "profile" },
      { ja: "背後から (バック)", en: "from behind" },
      { ja: "サイドビュー (横)", en: "side view" },
      { ja: "ローアングル (煽り・威圧)", en: "low angle, from below" },
      { ja: "ワームズアイ (地面すれすれ)", en: "worm's eye view" },
      { ja: "ハイアングル (俯瞰・弱さ)", en: "high angle, from above" },
      { ja: "バードアイ (上空)", en: "bird's eye view" },
      { ja: "トップダウン (真上)", en: "overhead shot" },
      { ja: "ダッチアングル (斜め・不安)", en: "dutch angle" },
      { ja: "POV (主観視点)", en: "pov" },
      { ja: "自撮り (セルフィー)", en: "selfie" }
    ],
    "🔍 レンズ・画角 (Lens & Focal)": [
      { ja: "魚眼レンズ (歪み)", en: "fisheye lens" },
      { ja: "広角レンズ (パース強調)", en: "wide angle lens" },
      { ja: "望遠レンズ (圧縮効果)", en: "telephoto lens" },
      { ja: "マクロレンズ (接写)", en: "macro lens" },
      { ja: "35mm (標準・スナップ)", en: "35mm lens" },
      { ja: "50mm (見たまま)", en: "50mm lens" },
      { ja: "85mm (ポートレート)", en: "85mm lens" },
      { ja: "135mm (強い圧縮)", en: "135mm lens" },
      { ja: "パノラマ", en: "panorama" }
    ],
    "🎯 フォーカス・被写界深度 (Focus)": [
      { ja: "被写界深度 (背景ボケ)", en: "depth of field" },
      { ja: "ボケ (Bokeh)", en: "bokeh" },
      { ja: "背景ぼかし", en: "blurry background" },
      { ja: "前景ぼかし", en: "blurry foreground" },
      { ja: "パンフォーカス (全体)", en: "deep focus" },
      { ja: "シャープフォーカス", en: "sharp focus" },
      { ja: "ソフトフォーカス", en: "soft focus" },
      { ja: "モーションブラー (動き)", en: "motion blur" }
    ],
    "🖼️ 構図・コンポジション (Composition)": [
      { ja: "三分割法", en: "rule of thirds" },
      { ja: "シンメトリー (対称)", en: "symmetry" },
      { ja: "黄金比", en: "golden ratio" },
      { ja: "センタリング", en: "centered composition" },
      { ja: "対角線構図", en: "diagonal composition" },
      { ja: "フレーム・イン・フレーム", en: "framing" },
      { ja: "リーディングライン (視線誘導)", en: "leading lines" },
      { ja: "ネガティブスペース (余白)", en: "negative space" },
      { ja: "動的な構図", en: "dynamic composition" }
    ],
    "✨ カメラエフェクト (Effects)": [
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "ビネット (四隅暗く)", en: "vignette" },
      { ja: "フィルムグレイン (粒子)", en: "film grain" },
      { ja: "光条 (回折スパイク)", en: "diffraction spikes" },
      { ja: "ハレーション", en: "halation" },
      { ja: "ブルーム (発光)", en: "bloom" },
      { ja: "露光オーバー", en: "overexposure" }
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
        details.style.border = "1px solid #cce5ff";
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        summary.style.fontSize = "0.9em";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f0f8ff";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff"; 
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #ddeeff";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
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

