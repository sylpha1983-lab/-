(function(){
  "use strict";

  const HISTORY_KEY = "builder_prompt_history";
  const MAX_HISTORY = 30; 

  function getHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } 
    catch(e) { return []; }
  }

  function saveHistory(text) {
    if (!text || text.trim() === "") return;
    let history = getHistory();
    if (history.length > 0 && history[0].text === text) return;
    const newItem = { text: text, time: new Date().toLocaleString() };
    history.unshift(newItem);
    if (history.length > MAX_HISTORY) history.pop(); 
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  // ★テキストエリア取得 (SyncCheckのロジックを借りる)
  function findTarget() {
    if (window.findMainTextarea) return window.findMainTextarea();
    return document.getElementById('out');
  }

  function createHistoryUI() {
    const genBtn = document.getElementById('genBtn');
    if (!genBtn) return;

    const existing = document.getElementById("footer-history-btn");
    if(existing) existing.remove();

    const btn = document.createElement('button');
    btn.id = "footer-history-btn";
    btn.textContent = "📜 履歴";
    btn.title = "生成履歴を表示します";
    btn.style.cursor = "pointer";

    const menu = document.createElement('div');
    menu.id = "history-popup-menu";
    menu.style.cssText = `
      position: fixed; bottom: 70px; left: 50%; transform: translateX(-50%);
      background: white; border: 1px solid #ccc; border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.4); padding: 0; z-index: 10001;
      max-height: 60vh; overflow-y: auto; display: none; min-width: 300px; max-width: 95%; width: 500px;
    `;
    document.body.appendChild(menu);

    genBtn.addEventListener('click', () => {
      setTimeout(() => {
        const out = findTarget();
        if (out) saveHistory(out.value);
      }, 100);
    });

    btn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      const history = getHistory();
      
      let html = `
        <div style="position:sticky; top:0; background:#f8f9fa; padding:10px; border-bottom:1px solid #ddd; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:bold; color:#555;">📜 プロンプト履歴 (${history.length})</span>
          <div>
            <button id="hist-clear-btn" style="font-size:0.8em; margin-right:10px; color:red; cursor:pointer;">全削除</button>
            <span id="hist-close-btn" style="cursor:pointer; font-size:1.5em; color:#999;">&times;</span>
          </div>
        </div>
        <div style="padding:10px;">
      `;

      if (history.length === 0) {
        html += `<div style="text-align:center; color:#999; padding:20px;">履歴はありません</div>`;
      } else {
        history.forEach((item, idx) => {
          html += `
            <div style="margin-bottom:10px; border:1px solid #eee; border-radius:4px; padding:8px; background:#fff;">
              <div style="font-size:0.75em; color:#999; margin-bottom:4px;">${item.time}</div>
              <div style="font-size:0.9em; word-break:break-all; max-height:60px; overflow:hidden; color:#333;">${item.text}</div>
              <div style="margin-top:6px; text-align:right;">
                <button class="hist-copy-btn" data-idx="${idx}" style="font-size:0.8em; cursor:pointer; background:#e2e6ea; border:none; padding:4px 8px; border-radius:4px;">コピー</button>
                <button class="hist-restore-btn" data-idx="${idx}" style="font-size:0.8em; cursor:pointer; background:#d4edda; color:#155724; border:none; padding:4px 8px; border-radius:4px; margin-left:5px;">復元</button>
              </div>
            </div>
          `;
        });
      }
      html += `</div>`;
      menu.innerHTML = html;

      menu.querySelector('#hist-close-btn').onclick = () => menu.style.display = "none";
      const clearBtn = menu.querySelector('#hist-clear-btn');
      if(clearBtn) clearBtn.onclick = () => { if(confirm("全削除しますか？")) { localStorage.removeItem(HISTORY_KEY); menu.style.display = "none"; } };

      menu.querySelectorAll('.hist-copy-btn').forEach(b => {
        b.onclick = (ev) => {
          const idx = ev.target.dataset.idx;
          navigator.clipboard.writeText(history[idx].text).then(() => {
            ev.target.textContent = "コピー完了!";
            setTimeout(()=> ev.target.textContent = "コピー", 1000);
          });
        };
      });

      // ★復元機能
      menu.querySelectorAll('.hist-restore-btn').forEach(b => {
        b.onclick = (ev) => {
          const idx = ev.target.dataset.idx;
          const txt = history[idx].text;
          const out = findTarget();
          
          if(!out) { alert("テキストエリアが見つかりません"); return; }

          out.value = txt;
          
          // イベント発火
          out.dispatchEvent(new Event('input', { bubbles: true }));
          
          // 念のため同期も呼ぶ
          if (window.smartSyncCheckboxes) {
            setTimeout(() => window.smartSyncCheckboxes(false), 200);
          }

          menu.style.display = "none";
        };
      });

      menu.style.display = "block";
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) { menu.style.display = "none"; }
    });

    const container = genBtn.parentElement;
    container.appendChild(btn);
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", () => setTimeout(createHistoryUI, 600)); } 
  else { setTimeout(createHistoryUI, 600); }
})();

