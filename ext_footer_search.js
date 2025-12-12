(function(){
  "use strict";

  function createSearchButton() {
    // 生成ボタン(genBtn)がある場所を探す
    const genBtn = document.getElementById('genBtn');
    
    if (!genBtn) return;

    // ボタンの親コンテナを取得
    const container = genBtn.parentElement;

    // 既に作成済みなら削除
    const existing = document.getElementById("footer-search-btn");
    if(existing) existing.remove();
    
    // 検索ボタン作成
    const btn = document.createElement('button');
    btn.id = "footer-search-btn";
    btn.textContent = "🔍 確認"; // ★文字を短くしました
    btn.title = "選択中のアイテムを画像検索します";
    
    // スタイル調整
    btn.style.cssText = `
      background-color: #17a2b8;
      color: white;
      border: none;
      padding: 10px 12px; /* 横幅を少し節約 */
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 4px;
      font-size: 1rem;
      height: 44px;
      vertical-align: middle;
      white-space: nowrap; /* 文字の折り返し防止 */
    `;

    // 検索メニュー作成 (非表示)
    const menu = document.createElement('div');
    menu.id = "search-popup-menu";
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
      min-width: 250px;
      max-width: 90%;
    `;
    document.body.appendChild(menu);

    // ボタンクリック時の動作
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault(); 
      
      const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(cb => cb.dataset.en) 
        .map(cb => {
           let label = cb.parentElement.textContent.trim();
           if(label.includes('/')) label = label.split('/')[0].trim();
           return { label: label, tag: cb.dataset.en };
        });

      if (checked.length === 0) {
        alert("検索したいアイテムにチェックを入れてください");
        return;
      }

      // メニュー生成
      menu.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:5px; margin-bottom:5px;">
          <span style="font-weight:bold; color:#555;">🔍 選択中の項目 (タップで検索)</span>
          <span id="search-menu-close" style="cursor:pointer; font-size:1.5em; padding:0 10px; color:#999;">&times;</span>
        </div>
      `;
      
      const list = document.createElement('div');
      checked.forEach(item => {
        const itemBtn = document.createElement('div');
        itemBtn.textContent = `${item.label}`;
        itemBtn.style.cssText = `
          padding: 12px 10px;
          cursor: pointer;
          border-bottom: 1px solid #f0f0f0;
          font-size: 1em;
          color: #007bff;
          display: flex;
          align-items: center;
        `;
        // アイコン追加
        const icon = document.createElement('span');
        icon.textContent = "🔎 ";
        icon.style.marginRight = "8px";
        itemBtn.prepend(icon);

        itemBtn.onmouseover = () => itemBtn.style.background = "#f0f8ff";
        itemBtn.onmouseout = () => itemBtn.style.background = "transparent";
        
        itemBtn.onclick = () => {
          const query = encodeURIComponent(`${item.tag} anime art`);
          window.open(`https://www.google.com/search?tbm=isch&q=${query}`, '_blank');
        };
        
        list.appendChild(itemBtn);
      });
      menu.appendChild(list);

      menu.querySelector('#search-menu-close').onclick = () => menu.style.display = "none";
      menu.style.display = "block";
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.style.display = "none";
      }
    });

    container.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(createSearchButton, 500));
  } else {
    setTimeout(createSearchButton, 500);
  }
})();

