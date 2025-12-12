(function(){
  "use strict";

  const HISTORY_KEY = "builder_prompt_history";
  const MAX_HISTORY = 30; // 保存件数

  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch(e) {
      return [];
    }
  }

  function saveHistory(text) {
    if (!text || text.trim() === "") return;
    
    let history = getHistory();
    // 重複排除（同じプロンプトを連続で保存しない）
    if (history.length > 0 && history[0].text === text) return;

    const newItem = {
      text: text,
      time: new Date().toLocaleString()
    };

    history.unshift(newItem); // 先頭に追加
    if (history.length > MAX_HISTORY) history.pop(); // 古いものを削除

    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  function createHistoryUI() {
    const genBtn = document.getElementById('genBtn');
    if (!genBtn) return;

    // 既存ボタン削除
    const existing = document.getElementById("footer-history-btn");
    if(existing) existing.remove();

    // 履歴ボタン作成
    const btn = document.createElement('button');
    btn.id = "footer-history-btn";
    btn.textContent = "📜 履歴";
    btn.title = "生成履歴を表示します";
    btn.style.cssText = `
      background-color: #6c757d; /* グレー系 */
      color: white;
      border: none;
      padding: 10px 12px;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 5px;
      font-size: 1rem;
      height: 44px;
      vertical-align: middle;
      white-space: nowrap;
    `;

    // 履歴メニュー
    const menu = document.createElement('div');
    menu.id = "history-popup-menu";
    menu.style.cssText = `
      position: fixed;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.4);
      padding: 0;
      z-index: 10001;
      max-height: 60vh;
      overflow-y: auto;
      display: none;
      min-width: 300px;
      max-width: 95%;
      width: 500px;
    `;
    document.body.appendChild(menu);

    // 生成ボタンにフック
    genBtn.addEventListener('click', () => {
      // 少し遅延させて、出力エリアの値が更新された後に保存
      setTimeout(() => {
        const out = document.getElementById('out');
        if (out) saveHistory(out.value);
      }, 100);
    });

    // 履歴ボタンクリック
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const history = getHistory();
      
      // ヘッダー
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

      // イベント設定
      menu.querySelector('#hist-close-btn').onclick = () => menu.style.display = "none";
      
      const clearBtn = menu.querySelector('#hist-clear-btn');
      if(clearBtn) {
        clearBtn.onclick = () => {
          if(confirm("履歴を全て削除しますか？")) {
            localStorage.removeItem(HISTORY_KEY);
            menu.style.display = "none";
          }
        };
      }

      menu.querySelectorAll('.hist-copy-btn').forEach(b => {
        b.onclick = (ev) => {
          const idx = ev.target.dataset.idx;
          const txt = history[idx].text;
          navigator.clipboard.writeText(txt).then(() => {
            ev.target.textContent = "コピー完了!";
            setTimeout(()=> ev.target.textContent = "コピー", 1000);
          });
        };
      });

      menu.querySelectorAll('.hist-restore-btn').forEach(b => {
        b.onclick = (ev) => {
          const idx = ev.target.dataset.idx;
          const txt = history[idx].text;
          const out = document.getElementById('out');
          if(out) {
            out.value = txt;
            menu.style.display = "none";
            alert("出力エリアに復元しました\n(※チェックボックスの状態までは復元されません)");
          }
        };
      });

      menu.style.display = "block";
    });

    // 閉じる処理
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.style.display = "none";
      }
    });

    // ボタン配置
    const container = genBtn.parentElement;
    container.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(createHistoryUI, 600));
  } else {
    setTimeout(createHistoryUI, 600);
  }
})();
