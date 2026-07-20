// Auto-generated bundle for section 'body_focus'
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "body_focus";

  // 一般向けカテゴリー
  const CATEGORIES = {
    "💋 顔周り・口元 (Face & Mouth)": [
      { ja: "艶やかな唇", en: "glossy lips, parted lips, lipstick" },
      { ja: "舌・舌出し", en: "tongue out, licking lips, saliva" },
      { ja: "ピアス (舌/へそ等)", en: "piercings, tongue piercing, navel piercing" }
    ],
    "🔍 上半身・首・胸 (Upper Body)": [
      { ja: "うなじ・首筋", en: "nape, back of neck" },
      { ja: "鎖骨", en: "collarbone" },
      { ja: "胸の谷間", en: "cleavage" },
      { ja: "横乳", en: "sideboob" },
      { ja: "下乳", en: "underboob" },
      { ja: "お腹・へそ", en: "midriff, navel" },
      { ja: "腋 (わき)", en: "armpits" }
    ],
    "🦴 背中・手・ボディライン (Back & Limbs)": [
      { ja: "美しい背中・肩甲骨", en: "bare back, back focus, shoulder blades" },
      { ja: "手・指先・ネイル", en: "hands focus, beautiful hands, nail polish" },
      { ja: "くびれ・腰回り", en: "narrow waist, wide hips, hip focus" }
    ],
    "🍑 下半身・脚 (Lower Body)": [
      { ja: "お尻", en: "ass focus, from behind" },
      { ja: "太もも", en: "thigh focus" },
      { ja: "絶対領域", en: "zettai ryouiki" },
      { ja: "足裏・足先", en: "soles, barefoot, toes" }
    ]
  };

  // シークレットモード（R-18）専用カテゴリー
  if (localStorage.getItem("MY_SECRET_UNLOCK") === "true") {
    CATEGORIES["🔞 局部・秘部 (Explicit Focus)"] = [
      { ja: "局部開帳 (あそこ)", en: "spread pussy, showing pussy, crotch focus" },
      { ja: "胸の先端", en: "exposed nipples, nipples focus" },
      { ja: "下着チラ見せ", en: "panty peek, visible underwear" },
      { ja: "衣服ずり落ち", en: "clothes slipping down, half-slipped off shoulder" },
      { ja: "M字開脚", en: "spreading legs, m-leg pose" }
    ];
    
    CATEGORIES["🔞 痕跡・ディープフェチ (Deep Fetish & Marks)"] = [
      { ja: "食い込み・衣服の密着", en: "cameltoe, wedgie, tight clothes" },
      { ja: "キスマーク・噛み跡", en: "kiss marks, hickey, bite marks on neck" },
      { ja: "胸の圧迫・寄せ胸", en: "breast press, squeezing breasts, cleavage cutout" },
      { ja: "柔らかいお腹・膨らみ", en: "stomach bulge, soft belly" }
    ];
  }

  const API = {
    initUI(container) {
      // コアが用意した「list-body_focus」を正しく取得
      const parent = document.querySelector("#list-body_focus") || container;
      if (!parent) return;
      
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "body-focus-section";

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
      document.querySelectorAll(".body-focus-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

