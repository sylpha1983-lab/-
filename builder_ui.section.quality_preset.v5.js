(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // データ定義 (省略 - 内容は変更なし)...

  // UIヘルパー (★完全修正: インラインスタイルを削除)
  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    if(isSecret) details.classList.add("qp-secret");
    details.open = false; 

    const summary = document.createElement("summary"); 
    summary.textContent = title; 
    details.appendChild(summary); 
    
    const content = document.createElement("div"); 
    content.className = "qp-content-grid"; 
    
    items.forEach(item => { 
      const label = document.createElement("label"); 
      const cb = document.createElement("input"); 
      cb.type = "checkbox"; 
      cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); 
      label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); 
      content.appendChild(label); 
    }); 
    
    details.appendChild(content); 
    return details; 
  }

  const API = {
    initUI(container) {
      // 既存のinitUIロジック (省略なし) ...
      // createSubAccordionを呼び出す部分はそのまま
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

