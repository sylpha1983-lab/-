(function(){
  "use strict";
  
  const SAVE_KEY = "builder_prompt_autosave_v2";

  function saveText() {
    const out = document.getElementById('out');
    if (out) {
      localStorage.setItem(SAVE_KEY, out.value);
    }
  }

  function loadText() {
    const out = document.getElementById('out');
    if (!out) return;

    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      out.value = saved;
      out.dispatchEvent(new Event('input', { bubbles: true }));
      out.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function init() {
    const out = document.getElementById('out');
    if (out) {
      out.addEventListener('input', saveText);
      out.addEventListener('change', saveText);
    }

    const genBtn = document.getElementById('genBtn');
    if (genBtn) {
      genBtn.addEventListener('click', () => {
        setTimeout(saveText, 200);
      });
    }

    loadText();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

