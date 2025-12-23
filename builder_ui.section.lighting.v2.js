(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "lighting"; 

  const CATEGORIES = {
    "🌈 色付き・多色照明 (Colors & Gels)": [
      { ja: "デュアルライティング (2色)", en: "two tone lighting, red and blue lighting" },
      { ja: "赤の照明", en: "red lighting" },
      { ja: "青の照明", en: "blue lighting" },
      { ja: "紫のアンビエント", en: "purple ambient" },
      { ja: "緑の輝き", en: "green glow" },
      { ja: "カラーフィルター", en: "colored gel lighting" },
      { ja: "虹色の光", en: "iridescent light" },
      { ja: "七色の光", en: "rainbow lighting" }
    ],
    "🌤️ 環境・時間帯 (Atmospheric & Mood)": [
      { ja: "ゴールデンアワー (黄金の夕暮れ)", en: "golden hour" },
      { ja: "ブルーアワー (静寂な青)", en: "blue hour" },
      { ja: "曇天 (拡散光)", en: "overcast lighting" },
      { ja: "ゴッドレイ (天使の梯子)", en: "god rays" },
      { ja: "チンダル現象 (光の筋)", en: "tyndall effect" },
      { ja: "モーニンググロー (朝焼け)", en: "morning glow" },
      { ja: "マジックアワー", en: "magic hour" }
    ],
    "📷 レンズ・光学 (Optical Effects)": [
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "ブルーム (光の滲み)", en: "bloom" },
      { ja: "ボケ (背景ぼかし)", en: "bokeh" },
      { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "ハレーション (白飛び)", en: "halation" },
      { ja: "回折スパイク (光の十字)", en: "diffraction spikes" }
    ],
    "🕯️ マテリアル・質感 (Material & Physics)": [
      { ja: "サブサーフェス・スキャタリング (肌の透け感)", en: "subsurface scattering" },
      { ja: "コースティクス (集光模様)", en: "caustics" },
      { ja: "屈折 (ガラス/宝石)", en: "refraction" },
      { ja: "グローバルイルミネーション (反射)", en: "global illumination" },
      { ja: "放射輝度 (輝き)", en: "radiance" }
    ],
    "📸 プロ・スタジオ構成 (Pro Studio)": [
      { ja: "3点照明 (基本)", en: "three-point lighting" },
      { ja: "キーライト (主光源)", en: "key light" },
      { ja: "フィルライト (補助光)", en: "fill light" },
      { ja: "レンブラント照明 (三角影)", en: "rembrandt lighting" },
      { ja: "バタフライ照明 (美女)", en: "butterfly lighting" },
      { ja: "スプリット照明 (半顔)", en: "split lighting" },
      { ja: "リングライト (瞳の輪)", en: "ring light" },
      { ja: "ソフトボックス", en: "softbox lighting" }
    ],
    "🌿 光の形・影絵 (Light Shapes)": [
      { ja: "ブラインドの影", en: "blinds shadow" },
      { ja: "窓枠の影", en: "window frame shadow" },
      { ja: "格子の影", en: "lattice shadow" },
      { ja: "レースカーテンの影", en: "lace curtain shadow" },
      { ja: "木漏れ日の斑点", en: "dappled sunlight" },
      { ja: "プリズム分光", en: "prism" },
      { ja: "ハート型の影", en: "heart-shaped shadow" }
    ],
    "🔥 発光体・自然現象 (Emissive)": [
      { ja: "焚き火の明かり", en: "firelight" },
      { ja: "暖炉の光", en: "fireplace glow" },
      { ja: "花火の光", en: "sparklers" },
      { ja: "モニターの光 (青白)", en: "monitor light" },
      { ja: "ホログラム光", en: "hologram glow" },
      { ja: "オーロラ", en: "aurora" },
      { ja: "雷光 (フラッシュ)", en: "lightning flash" }
    ]
  };

  const API = {
    initUI(container) {
      // v1が作った受け皿を探す
      const targetArea = document.getElementById("lighting-mount-point");
      if (!targetArea) return;

      // 重複防止
      const oldEl = document.getElementById("lighting-advanced-wrap");
      if (oldEl) oldEl.remove();

      // 「高度 (Advanced)」の大枠
      const advDetails = document.createElement("details");
      advDetails.id = "lighting-advanced-wrap";
      advDetails.style.cssText = "margin-bottom:8px; border:1px solid #ffcc80; border-radius:4px; background:#fff;";
      advDetails.open = false; 

      const advSummary = document.createElement("summary");
      advSummary.innerHTML = "✨ 高度なライティング・演出 (Advanced)";
      advSummary.style.cssText = "padding:10px; font-weight:bold; cursor:pointer; background:#fff8e1; color:#d35400;";
      advDetails.appendChild(advSummary);

      const advContent = document.createElement("div");
      advContent.style.padding = "8px";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const catDetails = document.createElement("details");
        catDetails.style.marginBottom = "6px";
        catDetails.style.borderLeft = "3px solid #ffcc80";
        catDetails.style.paddingLeft = "8px";
        catDetails.open = false;

        const summary = document.createElement("summary");
        summary.innerHTML = `${cat} <span style="font-size:0.8em;">(Adv)</span>`;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.color = "#d35400";
        catDetails.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "8px";
        content.style.padding = "5px 0 5px 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        catDetails.appendChild(content);
        advContent.appendChild(catDetails);
      });

      advDetails.appendChild(advContent);
      targetArea.appendChild(advDetails);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

