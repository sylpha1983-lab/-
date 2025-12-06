(function(){
  "use strict";

  const VERSION = 2; // ★ v1 に続く拡張
  const KEY = "expression";

  const CATEGORIES = {
    "漫符・記号的表現 (Manga Symbols/Effects)": [
      { ja: "怒りマーク", en: "anger vein" },
      { ja: "縦線 (どんより)", en: "gloom (vertical lines)" },
      { ja: "汗マーク (焦り)", en: "sweat drop" },
      { ja: "魂が抜ける", en: "soul leaving body" },
      { ja: "キラキラ (効果)", en: "sparkles" },
      { ja: "ひらめき (電球)", en: "lightbulb above head" },
      { ja: "ため息 (エフェクト)", en: "sigh symbol" },
      { ja: "ぐるぐる目 (混乱)", en: "swirly eyes" }
    ],
    "特殊な状態異常 (Status Effects)": [
      { ja: "催眠状態", en: "hypnotized" },
      { ja: "洗脳された目", en: "brainwashed" },
      { ja: "ハート目 (メロメロ)", en: "heart-shaped pupils" },
      { ja: "酔っ払い", en: "drunken face" },
      { ja: "めまい", en: "dizziness" },
      { ja: "失神寸前", en: "about to faint" },
      { ja: "石化 (表情)", en: "petrified expression" }
    ],
    "年齢・成長のニュアンス (Age/Growth Nuance)": [
      { ja: "幼い顔つき", en: "baby face" },
      { ja: "若々しい", en: "youthful appearance" },
      { ja: "大人びた表情", en: "mature expression" },
      { ja: "老いた顔", en: "aged face" },
      { ja: "やつれた顔", en: "gaunt face" }
    ],
    "睡眠・覚醒 (Sleep & Waking)": [
      { ja: "寝ぼけ眼", en: "sleepy eyes" },
      { ja: "あくび", en: "yawning" },
      { ja: "寝起き", en: "just woke up" },
      { ja: "よだれ (睡眠)", en: "drooling while sleeping" },
      { ja: "半覚醒", en: "half-awake" }
    ]
  };

  const API = {
    initUI(container) {
      // 既存の v1 の表示の下に追加
      const section = document.createElement("div");
      section.className = "expression-v2-addon";
      section.style.borderTop = "2px dashed #ccc"; 
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";
      
      const title = document.createElement("div");
      title.textContent = "▼ 拡張パック (v2 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
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

        // 排他制御
        details.addEventListener("change", e => {
          if (e.target.type === "checkbox" && e.target.checked) {
            details.querySelectorAll("input[type='checkbox']").forEach(c => {
              if (c !== e.target) c.checked = false;
            });
          }
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
      document.querySelectorAll(".expression-v2-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

