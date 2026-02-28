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

  window.smartSyncCheckboxes = function(notify = true) {
    // 生成中は実行しない
    if (window.__isGenerating) return;

    const out = window.findMainTextarea();
    if (!out) return;
    const txt = out.value;
    if (!txt.trim()) return;

    const currentTokens = new Set(getTokens(txt));
    if (currentTokens.size === 0) return;

    let checkboxes = document.querySelectorAll('input[type="checkbox"][data-val], input[type="checkbox"][data-en]');
    if (checkboxes.length === 0) return;

    const toCheck = [];

    checkboxes.forEach(cb => {
      const val = cb.dataset.val || cb.dataset.en;
      if (!val) return;
      const targetTokens = getTokens(val);
      if (targetTokens.length === 0) return;

      let matchCount = 0;
      targetTokens.forEach(token => { if (currentTokens.has(token)) matchCount++; });

      let threshold = 0.8;
      if (targetTokens.length > 10) threshold = 0.75;
      if (targetTokens.length <= 2) threshold = 1.0;

      if ((matchCount / targetTokens.length) >= threshold) {
        toCheck.push(cb);
      }
    });

    if (toCheck.length > 0) {
      // 既存のチェックを一旦リセット（同期モード時のみ）
      // ※ここはユーザーの意図通り「テキストに合わせてUIを書き換える」動作
      const presetCheckboxes = document.querySelectorAll('.quality-preset-integrated input[type="checkbox"], #sections input[type="checkbox"]');
      presetCheckboxes.forEach(cb => cb.checked = false);

      toCheck.forEach(cb => {
        cb.checked = true;
        const details = cb.closest('details');
        if(details) details.open = true;
      });
      if (notify) showNotification(toCheck.length);
    }
  };

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

  function startPersistentWatch() {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const out = window.findMainTextarea();
      
      if (out && out.value.trim().length > 0) {
        // プリセットエリアが空なら同期実行
        const presetChecked = document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").length;
        if (presetChecked === 0) {
          window.smartSyncCheckboxes(false);
        }
      }
      if (attempts >= 20) clearInterval(interval);
    }, 500);
  }

  function init() {
    const out = window.findMainTextarea();
    if(out && !out.dataset.syncListening) {
        out.addEventListener('input', () => window.smartSyncCheckboxes(false));
        out.addEventListener('change', () => window.smartSyncCheckboxes(true));
        out.dataset.syncListening = "true";
    }
    
    // ★修正点: 生成ボタンを押した時の強制Sync（setTimeout）を削除しました。
    // これにより、生成時に勝手にチェックボックスが増える現象が止まります。
    
    startPersistentWatch();
  }

  if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", () => setTimeout(init, 500)); 
  } else { 
    setTimeout(init, 500); 
  }
})();

