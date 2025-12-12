(function(){
  "use strict";

  function createFloatingPanel() {
    // 既存の要素を取得
    const outArea = document.getElementById('out');
    const genBtn = document.getElementById('genBtn');
    
    // 必須要素がなければ中断
    if (!outArea || !genBtn) return;

    // 元のボタンコンテナ（もしあれば）を取得して、移動の準備
    const originalBtnContainer = genBtn.parentElement;

    // --- パネルの作成 ---
    const panel = document.createElement('div');
    panel.id = "builder-floating-panel";
    panel.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #f8f9fa;
      border-top: 1px solid #ccc;
      box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
      z-index: 9999;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: transform 0.3s ease;
    `;

    // --- 1. 編集ツールバー (強調・弱化) ---
    const toolbar = document.createElement('div');
    toolbar.style.cssText = `
      display: flex;
      gap: 5px;
      justify-content: flex-end;
      padding-right: 5px;
    `;

    // ツールボタン生成ヘルパー
    const createToolBtn = (label, wrapperOpen, wrapperClose) => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = `
        font-size: 0.8em;
        padding: 2px 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #fff;
        cursor: pointer;
        font-weight: bold;
        color: #555;
      `;
      btn.onclick = (e) => {
        e.preventDefault();
        applyWrapper(wrapperOpen, wrapperClose);
      };
      return btn;
    };

    // 括弧適用ロジック
    const applyWrapper = (open, close) => {
      const start = outArea.selectionStart;
      const end = outArea.selectionEnd;
      const text = outArea.value;
      
      // 選択範囲がない場合は全体、あるいはカーソル位置（今回は選択なしなら何もしないか、末尾追加などが考えられるが、選択必須とする）
      if (start === end) return;

      const selected = text.substring(start, end);
      const replaced = open + selected + close;

      outArea.value = text.substring(0, start) + replaced + text.substring(end);
      
      // カーソル位置を維持・更新
      outArea.selectionStart = start;
      outArea.selectionEnd = start + replaced.length;
      outArea.focus();
      
      // 変更イベント発火（自動保存などのため）
      outArea.dispatchEvent(new Event('input'));
    };

    toolbar.appendChild(createToolBtn("( ) 強調", "(", ")"));
    toolbar.appendChild(createToolBtn("{ } NovelAI", "{", "}"));
    toolbar.appendChild(createToolBtn("[ ] 弱化", "[", "]"));
    
    // --- 2. テキストエリアの移動 ---
    // 元の場所からパネル内へ移動
    outArea.style.height = "60px"; // 高さを少し固定
    outArea.style.marginBottom = "0";
    
    // --- 3. ボタンエリアの移動 ---
    // 既存のボタンコンテナの中身を全てパネル内の新しいコンテナへ移動
    const btnRow = document.createElement('div');
    btnRow.className = "builder-footer-grid"; // CoreのCSSクラスを維持
    btnRow.style.marginTop = "0"; // マージンリセット

    // 元のコンテナにあるボタンたち（生成、コピー、リセット、履歴、検索など）を全て移動
    while (originalBtnContainer && originalBtnContainer.firstChild) {
      btnRow.appendChild(originalBtnContainer.firstChild);
    }

    // --- 組み立て ---
    // 上段：ツールバー + テキストエリア
    const upperRow = document.createElement('div');
    upperRow.style.position = "relative";
    
    // ツールバーをテキストエリアの右上に重ねるか、上に置くか
    // スマホの狭さを考慮し、テキストエリアの上に配置
    panel.appendChild(toolbar);
    panel.appendChild(outArea);
    panel.appendChild(btnRow);

    // --- DOMに追加 ---
    document.body.appendChild(panel);

    // --- コンテンツが隠れないようにbodyにパディングを追加 ---
    const panelHeight = panel.offsetHeight;
    document.body.style.paddingBottom = (panelHeight + 20) + "px";

    // --- 折りたたみボタン (スマホ用) ---
    const toggleBtn = document.createElement('div');
    toggleBtn.textContent = "▼";
    toggleBtn.style.cssText = `
      position: absolute;
      top: -20px;
      right: 10px;
      background: #f8f9fa;
      border: 1px solid #ccc;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      padding: 0 10px;
      cursor: pointer;
      font-size: 0.8em;
      color: #666;
      box-shadow: 0 -2px 5px rgba(0,0,0,0.05);
    `;
    let isCollapsed = false;
    toggleBtn.onclick = () => {
      if (isCollapsed) {
        panel.style.transform = "translateY(0)";
        toggleBtn.textContent = "▼";
        document.body.style.paddingBottom = (panel.offsetHeight + 20) + "px";
      } else {
        // ボタンの行だけ残して隠すなどの調整もできるが、今回はシンプルに下へ隠す
        // ただし完全に隠すと戻せないので、少しだけ残すか、ボタン自体はパネル外にあるのでOK
        const move = panel.offsetHeight - 10; // 少し残す？いや、トグルボタンがあるから隠してOK
        panel.style.transform = `translateY(${panel.offsetHeight}px)`;
        toggleBtn.textContent = "▲ PROMPT";
        document.body.style.paddingBottom = "50px";
      }
      isCollapsed = !isCollapsed;
    };
    panel.appendChild(toggleBtn);
  }

  // 読み込みタイミング調整
  // 他の拡張機能（検索ボタンや履歴ボタン）が生成された後に実行したい
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(createFloatingPanel, 800));
  } else {
    setTimeout(createFloatingPanel, 800);
  }
})();
