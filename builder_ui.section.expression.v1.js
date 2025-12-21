(function(){
  "use strict";
  const VERSION = 1; // 統合版: 基本感情のみ (視線はv2へ移動)
  const KEY = "expression";

  const EXPRESSION_DATA = {
    "😊 基本感情 (Basic Emotions)": [
      { ja: "笑顔 (スマイル)", en: "smile" }, { ja: "幸せそう", en: "happy" },
      { ja: "大笑い", en: "laughing" }, { ja: "微笑み", en: "light smile" },
      { ja: "怒り", en: "angry" }, { ja: "激怒", en: "furious" },
      { ja: "悲しい", en: "sad" }, { ja: "泣いている", en: "crying" },
      { ja: "真剣", en: "serious" }, { ja: "無表情", en: "expressionless" },
      { ja: "驚き", en: "surprised" }, { ja: "恥ずかしい", en: "embarrassed" },
      { ja: "照れ隠し", en: "shy" }, { ja: "神経質/不安", en: "nervous" }
    ]
  };

  const DICT = {
    "smile": "笑顔", "happy": "幸せ", "laughing": "大笑い", "light smile": "微笑み",
    "angry": "怒り", "furious": "激怒", "sad": "悲しい", "crying": "泣く",
    "serious": "真剣", "expressionless": "無表情", "surprised": "驚き",
    "embarrassed": "恥じらい", "shy": "照れ", "nervous": "不安"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-expression");
      if (!parent) {
        parent = document.createElement("div");
        parent.id = "list-expression";
        parent.className = "section";
        const h2 = document.createElement("h2");
        h2.textContent = "4. 表情 (Expression)"; 
        parent.appendChild(h2);
        document.getElementById("sections").appendChild(parent);
      } else {
        // 重複防止：古いv1コンテナがあれば消す
        const old = parent.querySelector(".expression-v1-container");
        if(old) old.remove();
      }

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        
        details.open = false; // ★初期閉

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
      root.className = "expression-v1-container";
      
      Object.entries(EXPRESSION_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content");
      if (contentArea) {
        contentArea.insertBefore(root, contentArea.firstChild); // 先頭に追加
      } else {
        const newContent = document.createElement("div");
        newContent.className = "section-content";
        newContent.appendChild(root);
        parent.appendChild(newContent);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".expression-v1-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

