(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "lighting";

  const CATEGORIES = {
    "☀️ 基本・自然光 (Natural & Basic)": [
      { ja: "自然光", en: "natural lighting" },
      { ja: "太陽光", en: "sunlight" },
      { ja: "ソフトライティング (柔らかい)", en: "soft lighting" },
      { ja: "ハードライティング (硬い)", en: "hard lighting" },
      { ja: "アンビエント (環境光)", en: "ambient lighting" },
      { ja: "シネマティック (映画風)", en: "cinematic lighting" },
      { ja: "ドラマチック", en: "dramatic lighting" },
      { ja: "明るい照明", en: "bright lighting" },
      { ja: "薄暗い照明", en: "dim lighting" }
    ],
    "🕰️ 時間帯・方向 (Time & Direction)": [
      { ja: "朝の光", en: "morning light" },
      { ja: "夕日/夕暮れ", en: "sunset lighting" },
      { ja: "月明かり", en: "moonlight" },
      { ja: "逆光 (バックライト)", en: "backlighting" },
      { ja: "サイドライト", en: "side lighting" },
      { ja: "トップライト", en: "top lighting" },
      { ja: "リムライト (輪郭光)", en: "rim lighting" },
      { ja: "ボリュメトリック (光の筋)", en: "volumetric lighting" },
      { ja: "クレパスキュラー (薄明光線)", en: "crepuscular rays" }
    ],
    "💡 人工・特殊照明 (Artificial & Special)": [
      { ja: "スタジオ照明", en: "studio lighting" },
      { ja: "ネオン照明", en: "neon lighting" },
      { ja: "サイバーパンク照明", en: "cyberpunk lighting" },
      { ja: "キャンドルライト (蝋燭)", en: "candlelight" },
      { ja: "ランタンの光", en: "lantern light" },
      { ja: "暖色系の光", en: "warm lighting" },
      { ja: "寒色系の光", en: "cold lighting" },
      { ja: "多彩な照明", en: "colorful lighting" },
      { ja: "生物発光", en: "bioluminescence" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-lighting") || container;
      
      // ★初期化: 親コンテナをクリーンにする（ShadowやLightingの古い表示を消す）
      parent.innerHTML = "";

      // 1. Lightingの大枠 (コンテナ)
      const lightingMain = document.createElement("details");
      lightingMain.id = "lighting-main-group"; 
      lightingMain.style.cssText = "margin-top:5px; margin-bottom:10px; border:2px solid #ddd; border-radius:6px; background:#fff;";
      lightingMain.open = false;

      const summary = document.createElement("summary");
      summary.innerHTML = "🔆 Lighting (Lighting)"; // 名前をシンプルに戻す
      summary.style.cssText = "padding:12px; font-weight:bold; cursor:pointer; background:#eee; color:#333; font-size:1.05em;";
      lightingMain.appendChild(summary);
      
      // ★v2 (Advanced) が入るための場所
      const mountPoint = document.createElement("div");
      mountPoint.id = "lighting-mount-point"; 
      mountPoint.style.padding = "10px";

      // 「基本」カテゴリ作成
      const basicDetails = document.createElement("details");
      basicDetails.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:4px; background:#fff;";
      basicDetails.open = false;

      const basicSummary = document.createElement("summary");
      basicSummary.innerHTML = "🔦 基本・自然光 (Basic)";
      basicSummary.style.cssText = "padding:10px; font-weight:bold; cursor:pointer; background:#f9f9f9; color:#444;";
      basicDetails.appendChild(basicSummary);

      const basicContent = document.createElement("div");
      basicContent.style.padding = "8px";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const catDetails = document.createElement("details");
        catDetails.style.marginBottom = "6px";
        catDetails.style.borderLeft = "3px solid #ccc"; 
        catDetails.style.paddingLeft = "8px";
        catDetails.open = false;

        const catSummary = document.createElement("summary");
        catSummary.textContent = cat;
        catSummary.style.cursor = "pointer";
        catSummary.style.fontSize = "0.9em";
        catSummary.style.fontWeight = "bold";
        catSummary.style.color = "#555";
        catDetails.appendChild(catSummary);

        const catGrid = document.createElement("div");
        catGrid.style.display = "flex";
        catGrid.style.flexWrap = "wrap";
        catGrid.style.gap = "8px";
        catGrid.style.padding = "5px 0 5px 5px";

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
          catGrid.appendChild(label);
        });

        catDetails.appendChild(catGrid);
        basicContent.appendChild(catDetails);
      });

      basicDetails.appendChild(basicContent);
      mountPoint.appendChild(basicDetails); 

      lightingMain.appendChild(mountPoint);
      parent.appendChild(lightingMain);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const root = document.getElementById("lighting-main-group");
      if(root) {
        root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

