(function(){
  "use strict";

  function getTokens(str) {
    if (!str) return [];
    return str.toLowerCase()
      .replace(/:\s*[\d\.]+(%?)/g, " ")
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
    let maxArea = 0;
    let mainEl = null;
    for (const ta of textareas) {
      const rect = ta.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      const area = rect.width * rect.height;
      if (area > maxArea) {
        maxArea = area;
        mainEl = ta;
      }
    }
    return mainEl || out;
  };

  window.smartSyncCheckboxes = function(notify = true) {
    if (window.__isGenerating || window.__historyRestoring) return 0;

    const out = window.findMainTextarea();
    if (!out) return 0;
    const txt = out.value;
    if (!txt.trim()) return 0;

    const currentTokens = new Set(getTokens(txt));
    if (currentTokens.size === 0) return 0;

    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-val], input[type="checkbox"][data-en]');
    if (checkboxes.length === 0) return 0;

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
      const presetCheckboxes = document.querySelectorAll('.quality-preset-integrated input[type="checkbox"], #sections input[type="checkbox"]');
      presetCheckboxes.forEach(cb => { cb.checked = false; });
      toCheck.forEach(cb => {
        cb.checked = true;
        const details = cb.closest('details');
        if (details) details.open = true;
      });
      if (notify) showNotification(toCheck.length);
    }

    return toCheck.length;
  };

  function showNotification(count) {
    const checkBtn = document.querySelector('#footer-search-btn') ||
      Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('確認') || b.textContent.includes('Check'));
    if (checkBtn) {
      const originalText = checkBtn.textContent;
      const originalBg = checkBtn.style.background;
      checkBtn.textContent = `復帰OK (${count})`;
      checkBtn.style.background = '#28a745';
      checkBtn.style.color = '#fff';
      setTimeout(() => {
        checkBtn.textContent = originalText;
        checkBtn.style.background = originalBg;
      }, 1000);
    }
  }

  function init() {
    const out = window.findMainTextarea();
    if (out) out.dataset.syncListening = 'manual-only';
    console.info('[sync] auto sync disabled; manual window.smartSyncCheckboxes() only');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 500));
  } else {
    setTimeout(init, 500);
  }
})();
