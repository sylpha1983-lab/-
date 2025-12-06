(function(){
  "use strict";

  const VERSION = 3; // Add-on
  const KEY = "hair";

  const CATEGORIES = {
    "ヘアアレンジ (Arrangement)": [
      { ja: "三つ編み (一本)", en: "single braid" },
      { ja: "おさげ (二本)", en: "braids" },
      { ja: "編み込み", en: "french braid" },
      { ja: "カチューシャ編み", en: "crown braid" },
      { ja: "お団子ヘア", en: "hair bun" },
      { ja: "シニヨン (二つ)", en: "double bun" },
      { ja: "ハーフアップ", en: "half updo" },
      { ja: "サイドテール", en: "side pony" },
      { ja: "アップヘア", en: "updo" }
    ],
    "髪の動き・状態 (Motion & State)": [
      { ja: "風になびく", en: "windblown hair" },
      { ja: "浮遊する髪", en: "floating hair" },
      { ja: "顔にかかる", en: "hair over face" },
      { ja: "肩にかかる", en: "hair over shoulder" },
      { ja: "広がる髪", en: "spread hair" }
    ],
    "アニメ的表現・特徴 (Anime Tropes)": [
      { ja: "アホ毛", en: "ahoge" },
      { ja: "アンテナ (二本)", en: "antenna hair" },
      { ja: "ドリルヘアー", en: "drill hair" },
      { ja: "動物耳風の髪", en: "hair ears" },
      { ja: "ハート型アホ毛", en: "heart ahoge" }
    ],
    "髪飾り・アクセサリー (Accessories)": [
      { ja: "リボン", en: "hair ribbon" },
      { ja: "ヘアバンド", en: "hairband" },
      { ja: "カチューシャ", en: "hairband" }, 
      { ja: "シュシュ", en: "scrunchie" },
      { ja: "ヘアピン", en: "hairpin" },
      { ja: "かんざし", en: "hair stick" },
      { ja: "花の髪飾り", en: "hair flower" },
      { ja: "ヘアオーナメント", en: "hair ornament" }
    ]
  };

  const API = {
    initUI(container) {
      // 合体モード: 既存UIを消さずに追加
      const section = document.createElement("div");
      section.className = "hair-v3-addon";
      section.style.borderTop = "2px dashed #ccc";
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";

      const title = document.createElement("div");
      title.textContent = "▼ アレンジ・動き (v3 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        section.appendChild(details);
      });
      container.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v3-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

