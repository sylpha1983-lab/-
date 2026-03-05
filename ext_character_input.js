(function() {
  "use strict";

  // 1. 画面の一番上に「一時メモ帳（折りたたみ式・スクロール追従）」を生成する
  function initUI() {
    if (document.getElementById("ext-char-input-container")) return;

    const firstSection = document.querySelector('details') || document.querySelector('.section-container') || document.body;
    
    const container = document.createElement("div");
    container.id = "ext-char-input-container";
    
    // ★ここが進化ポイント！ position: sticky と top: 0 で画面上部に張り付くようにする
    container.style.cssText = "position: sticky; top: 0; z-index: 999; margin-bottom: 15px; background: rgba(255, 255, 255, 0.95); padding: 4px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);";

    container.innerHTML = `
      <details id="ext-char-details"  style="padding: 10px; border: 2px solid #5f3dc4; border-radius: 8px; background: #f3f0ff;">
        <summary style="font-weight: bold; color: #5f3dc4; cursor: pointer; outline: none;">
          📝 一時メモ帳（固定プロンプト） <span style="font-size: 0.8em; font-weight: normal; color: #6741d9;">※タップで開閉・オンオフ切替</span>
        </summary>
        <div style="margin-top: 10px;">
          <input type="text" id="ext-char-name-input" placeholder="例: 1girl, hatsune miku, red sweater ..." 
                 style="width: 100%; padding: 10px; border: 1px solid #b197fc; border-radius: 4px; box-sizing: border-box; font-size: 16px;">
          <div style="font-size: 0.8em; color: #6741d9; margin-top: 6px;">
            ※ここに入力したワードは、生成時にプロンプトの<b>一番先頭（左端）</b>に強制的に組み込まれます。<br>
            ※一時的に使わない時は、文字を消さなくても<b>枠を「閉じる」だけでオフ（無効）</b>になります！
          </div>
        </div>
      </details>
    `;

    if (firstSection && firstSection.parentNode) {
      firstSection.parentNode.insertBefore(container, firstSection);
    } else {
      document.body.appendChild(container);
    }
  }

  // 2. 「生成」ボタンが押された直後に、強制的に一番先頭にねじ込むロジック
  function setupInjection() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;
      
      const text = target.textContent || "";
      if (text.includes('生成') || text.includes('Generate')) {
        
        setTimeout(() => {
          const details = document.getElementById("ext-char-details");
          const input = document.getElementById("ext-char-name-input");
          const textarea = document.querySelector('textarea'); 
          
          if (details && details.open && input && input.value.trim() !== "" && textarea) {
            const memoText = input.value.trim();
            const currentPrompt = textarea.value.trim();
            
            if (!currentPrompt.startsWith(memoText)) {
              if (currentPrompt === "") {
                textarea.value = memoText;
              } else {
                textarea.value = memoText + ", " + currentPrompt;
              }
              textarea.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        }, 50);
      }
    });
  }

  // 3. 起動処理
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initUI();
      setupInjection();
    });
  } else {
    initUI();
    setupInjection();
  }

  console.log("📝 Memo Pad Extension Loaded! (Sticky & Collapsible)");
})();

