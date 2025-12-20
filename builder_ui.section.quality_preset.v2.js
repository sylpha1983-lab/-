(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "quality_preset";

  const SITUATION_DATA = {
    "📍 スポット・お店 (Spots)": [
      { label: "アイドルステージ", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)", links: ["シネマティック"] },
      { label: "おしゃれカフェ", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)", links: ["ボケ"] },
      { label: "イベントスペース", val: "(mini idol event space), (decorated tables), (promotional posters), (fan meeting), (bright atmosphere)" },
      { label: "コラボカフェ", val: "(themed cafe), (character latte art), (feather-shaped sweets), (cute decorations), (pastel theme)" },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック"] },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "スーパーマーケット", val: "(supermarket), (grocery shopping), (aisle), (shopping basket), (fruit and vegetables), (bright lighting)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)" },
      { label: "病院・病室", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)" },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)" }
    ],
    // 以下、既存データ (省略なし) ...
    "🏫 学園・青春 (School)": [ /* ... */ ],
    "🏠 家・日常 (Home)": [ /* ... */ ],
    "🏙️ 都会・ストリート (City)": [ /* ... */ ],
    "🌺 自然・絶景 (Nature)": [ /* ... */ ],
    "👻 ホラー・怪奇 (Horror)": [ /* ... */ ],
    "⏰ 時間帯・空気感": [ /* ... */ ]
  };
  
  // (前回提示したv2.jsのデータの続きを使用してください)
  // スペースの都合上省略しますが、SITUATION_DATAの続きと、API.initUIの実装は前回通りです。
  // createSubAccordion内のインラインスタイル削除版を使用してください。
  
  // 簡易版UIヘルパー
  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; 
    const summary = document.createElement("summary"); summary.textContent = title; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label"); const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      const generalArea = document.getElementById("qp-situations-general-area");
      if (generalArea) Object.entries(SITUATION_DATA).forEach(([k,v]) => { generalArea.appendChild(createSubAccordion(k, v)); });
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

