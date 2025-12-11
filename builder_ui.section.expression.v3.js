(function(){
  "use strict";
  const VERSION = 3; // 統合版: ニュアンス & アクション
  const KEY = "expression";

  const EXPRESSION_DATA = {
    "😏 ニュアンス・性格 (Nuance)": [
      { ja: "ドヤ顔 (Smug)", en: "smug" }, { ja: "軽蔑", en: "disdain" },
      { ja: "誘惑的", en: "seductive smile" }, { ja: "病み顔 (ヤンデレ)", en: "yandere" },
      { ja: "恍惚 (トロ顔)", en: "ahegao" }, { ja: "絶望", en: "despair" },
      { ja: "狂気", en: "crazy" }, { ja: "パニック (あわわ)", en: "panicked" },
      { ja: "ツンデレ", en: "tsundere" }, { ja: "クーデレ (無口)", en: "kuudere" },
      { ja: "邪悪な笑み", en: "evil smile" }, { ja: "優しい笑み", en: "gentle smile" }
    ],
    "🗣️ アクション・状態 (Actions)": [
      { ja: "食べる (もぐもぐ)", en: "eating" }, { ja: "飲む", en: "drinking" },
      { ja: "寝る (睡眠)", en: "sleeping" }, { ja: "あくび", en: "yawning" },
      { ja: "キス顔", en: "kissing" }, { ja: "投げキッス", en: "blowing kiss" },
      { ja: "ウインク", en: "wink" }, { ja: "叫ぶ", en: "shouting" },
      { ja: "舐める", en: "licking" }, { ja: "噛む (咀嚼)", en: "chewing" },
      { ja: "あごに手", en: "hand on chin" }, { ja: "頬杖", en: "head resting on hand" },
      { ja: "シーッ (静かに)", en: "shushing" }
    ]
  };

  const DICT = {
    "smug": "ドヤ顔", "disdain": "軽蔑", "seductive smile": "誘惑笑い", "yandere": "ヤンデレ",
    "ahegao": "アヘ顔/恍惚", "despair": "絶望", "crazy": "狂気", "panicked": "パニック",
    "tsundere": "ツンデレ", "kuudere": "クーデレ", "evil smile": "邪悪な笑み", "gentle smile": "優しい笑み",
    "eating": "食べる", "drinking": "飲む", "sleeping": "寝る", "yawning": "あくび",
    "kissing": "キス", "blowing kiss": "投げキッス", "wink": "ウインク", "shouting": "叫ぶ",
    "licking": "舐める", "chewing": "噛む", "hand on chin": "あごに手",
    "head resting on hand": "頬杖", "shushing": "シーッ"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-expression");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "expression-v3-container";
      
      Object.entries(EXPRESSION_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".expression-v3-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

