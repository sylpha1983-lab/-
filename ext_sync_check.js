(function(){
  "use strict";

  function getTokens(str) {
    if (!str) return [];
    return str.toLowerCase()
      .replace(/:\s*[\d\.]+(%?)/g, " ")
      // スマホ対策: 安全な範囲指定
      .replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 0 && isNaN(w));
  }

  window.findMainTextarea = function() {
    const out = document.getElementById('out');
    if (out) {
      const rect = out.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) return out;
    }
    const textareas = document.querySelectorAll('textarea');
    let maxArea = 0; let mainEl = null;
    for (const ta of textareas) {
      const rect = ta.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      const area = rect.width * rect.height;
      if (area > maxArea) { maxArea = area; mainEl = ta; }
    }
    return mainEl || out; 
  };

  window.smartSyncCheckboxes = function(){ /* disabled to prevent unintended auto-check */ return; };

  function showNotification(count) {
    const checkBtn = document.querySelector("#footer-search-btn") || 
                     Array.from(document.querySelectorAll("button")).find(b => b.textContent.includes("確認") || b.textContent.includes("Check"));
    if(checkBtn) {
       const originalText = checkBtn.textContent;
       const originalBg = checkBtn.style.background;
       checkBtn.textContent = `復帰OK (${count})`;
       checkBtn.style.background = "#28a745"; 
       checkBtn.style.color = "#fff";
       setTimeout(() => {
         checkBtn.textContent = originalText;
         checkBtn.style.background = originalBg;
       }, 1000);
    }
  }

  function init() {
    const out = window.findMainTextarea();
    if(out && !out.dataset.syncListening) {
        out.addEventListener('input', (ev) => { if (ev && ev.isTrusted === false) return; window.smartSyncCheckboxes(false); });
        out.dataset.syncListening = "true";
    }
    
    // ★修正点: 生成ボタンを押した時の強制Sync（setTimeout）を削除しました。
    // これにより、生成時に勝手にチェックボックスが増える現象が止まります。
    
  }

  if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", () => setTimeout(init, 500)); 
  } else { 
    setTimeout(init, 500); 
  }
})();

