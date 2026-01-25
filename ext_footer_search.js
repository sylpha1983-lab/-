(function(){
  "use strict";

  function createSearchButton() {
    const genBtn = document.getElementById('genBtn');
    if (!genBtn) return;

    const container = genBtn.parentElement;
    if (!container) return;

    // Remove existing (hot reload safe)
    const existing = document.getElementById("footer-search-btn");
    if (existing) existing.remove();

    const btn = document.createElement('button');
    btn.id = "footer-search-btn";
    btn.textContent = "🔎確認";
    btn.title = "チェックしたワードを画像検索（Google）";

    // Inherit core button layout
    btn.style.cssText = `
      flex: 1 1 auto;
      min-width: 70px;
      height: 44px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      background: #28a745;
    `;

    // Popup menu
    const menuId = "search-popup-menu";
    let menu = document.getElementById(menuId);
    if (menu) menu.remove();

    menu = document.createElement('div');
    menu.id = menuId;
    menu.style.cssText = `
      position: fixed;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      padding: 10px;
      z-index: 10000;
      max-height: 50vh;
      overflow-y: auto;
      display: none;
      min-width: 260px;
      max-width: 90%;
    `;
    document.body.appendChild(menu);

    function collectChecked() {
      const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(cb => cb.dataset && (cb.dataset.en || cb.dataset.val))
        .map(cb => {
          let label = "";
          // Prefer explicit label on dataset if present
          if (cb.dataset.label) label = cb.dataset.label;
          if (!label) {
            const host = cb.closest('label') || cb.parentElement;
            label = (host ? host.textContent : "").trim();
          }
          if (label.includes('/')) label = label.split('/')[0].trim();
          // sanitize label
          label = label.replace(/\s+/g, ' ').trim();
          return { label, tag: cb.dataset.en || cb.dataset.val };
        });

      // de-dup by tag
      const seen = new Set();
      return checked.filter(it => {
        const key = it.tag || it.label;
        if (!key) return false;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const checked = collectChecked();
      if (checked.length === 0) {
        alert("検索したいワードにチェックを入れてください");
        return;
      }

      menu.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:6px; margin-bottom:6px;">
          <span style="font-weight:bold; color:#555;">🔎 選択中ワード（タップで画像検索）</span>
          <span id="search-menu-close" style="cursor:pointer; font-size:1.4em; padding:0 8px; color:#999;">&times;</span>
        </div>
      `;

      const list = document.createElement('div');
      checked.forEach(item => {
        const row = document.createElement('div');
        row.textContent = item.label || item.tag;
        row.style.cssText = `
          padding: 10px;
          cursor: pointer;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95em;
          color: #007bff;
        `;
        row.onclick = () => {
          const q = encodeURIComponent(item.tag || item.label);
          window.open("https://www.google.com/search?tbm=isch&q=" + q, "_blank");
        };
        list.appendChild(row);
      });
      menu.appendChild(list);

      const close = menu.querySelector('#search-menu-close');
      if (close) close.onclick = () => (menu.style.display = "none");
      menu.style.display = "block";
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.style.display = "none";
      }
    });

    // Add into action row (alongside Generate/Copy/Reset)
    container.appendChild(btn);
  }

  // Run after UI mount (and on re-mount)
  function boot() {
    try { createSearchButton(); } catch (e) { console.warn("[search] failed:", e); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(boot, 600));
  } else {
    setTimeout(boot, 600);
  }

  // If builder uses custom mount event, hook softly
  window.addEventListener("builder:mounted", () => setTimeout(boot, 200));
})();
