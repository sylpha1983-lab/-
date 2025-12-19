(function(){
  "use strict";

  const VERSION = 2; 
  const KEY = "camera";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ✅ 通常表示：特殊視点・フォーカス (Focus & POV)
  const EXTENDED_CATEGORIES = {
    "📷 特殊視点・フォーカス (Focus & POV)": [
      { ja: "POV (主観視点)", en: "pov" },
      { ja: "自撮り (セルフィー)", en: "selfie" },
      { ja: "鏡越し", en: "mirror" },
      { ja: "胸にフォーカス", en: "focus on breasts" },
      { ja: "尻にフォーカス", en: "focus on ass" },
      { ja: "顔にフォーカス", en: "focus on face" },
      { ja: "目・表情にフォーカス", en: "focus on eyes" },
      { ja: "足にフォーカス", en: "focus on legs" },
      { ja: "横たわる (寝視点)", en: "lying on back, pov" },
      { ja: "見下ろす (冷ややかな視線)", en: "looking down, scorn" }
    ]
  };

  // 🔞 シークレット表示：R-18 視点・アングル (Adult Angles)
  const SECRET_CATEGORIES = {
    "🔞 性行為・内部視点 (Sex POV)": [
      { ja: "フェラチオ視点", en: "pov, fellatio" },
      { ja: "セックス視点", en: "pov, sex" },
      { ja: "騎乗位視点", en: "pov, cowgirl position" },
      { ja: "内部視点 (膣内)", en: "internal view" },
      { ja: "断面図 (X-Ray)", en: "cross section, x-ray" },
      { ja: "子宮口", en: "cervix" }
    ],
    "📐 恥辱・ローアングル (Fetish Angle)": [
      { ja: "ローアングル (パンチラ)", en: "low angle, pantyshot" },
      { ja: "股下からの視点", en: "view between legs" },
      { ja: "股間にフォーカス", en: "focus on crotch" },
      { ja: "足裏・踏みつけ視点", en: "pov, trampling" },
      { ja: "スカートの中", en: "upskirt" }
    ]
  };

  const API = {
    initUI(container) {
      const section = container.querySelector(".camera-section") || document.createElement("div");
      if (!section.className) {
        section.className = "camera-section";
        const h = document.createElement("div");
        h.textContent = "📷 カメラ・レンズ (Camera/Lens)";
        h.style.fontWeight = "bold"; h.style.color = "#004080"; h.style.marginBottom = "8px";
        section.appendChild(h);
        container.appendChild(section);
      }

      // 通常カテゴリ
      Object.entries(EXTENDED_CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #cce5ff"; // 青枠
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

      // シークレットカテゴリ
      if (IS_UNLOCKED) {
        Object.entries(SECRET_CATEGORIES).forEach(([cat, items]) => {
          const details = document.createElement("details");
          details.open = false; 
          details.style.marginBottom = "8px";
          details.style.border = "1px solid #ffcccc";
          details.style.borderRadius = "4px";
          
          const summary = document.createElement("summary");
          summary.innerHTML = `${cat}`;
          summary.style.cursor = "pointer";
          summary.style.fontWeight = "bold";
          summary.style.fontSize = "0.9em";
          summary.style.padding = "6px";
          summary.style.backgroundColor = "#fff0f0";
          summary.style.color = "#d00";
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
            label.style.border = "1px solid #ffcccc";
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
      }

      if (window.__outputTranslation) {
        const dict = {};
        [...Object.values(EXTENDED_CATEGORIES), ...Object.values(SECRET_CATEGORIES)].flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

