(function() {
  "use strict";

  // 1. スタイルの注入（より目立つガッツリR-18仕様）
  const style = document.createElement('style');
  style.innerHTML = `
    /* 枠全体をしっかり塗るためのスタイル */
    .r18-theme-box {
      background-color: #fff0f5 !important; /* 全体の背景を薄いピンクに */
      border: 2px solid #ffb6c1 !important; /* 枠線を少し太めのピンクに */
      border-radius: 6px !important;        /* 少し丸みを持たせる */
      box-shadow: 0 2px 6px rgba(255, 182, 193, 0.5) !important; /* ほんのりピンク色に発光させる */
    }
    
    /* テキストもエッチな色にして目立たせる */
    .r18-theme-text, .r18-theme-text * {
      color: #d0104c !important; /* 和名：真紅（濃い赤紫） */
      font-weight: bold !important;
    }

    /* 押したとき・乗せたときにより濃く */
    .r18-theme-box:hover {
      background-color: #ffe4e1 !important;
      border-color: #ff69b4 !important; /* ホットピンク */
      box-shadow: 0 2px 8px rgba(255, 105, 180, 0.6) !important;
    }
  `;
  document.head.appendChild(style);

  // 2. 要素を賢く探して枠全体を塗る処理
  setInterval(() => {
    if (localStorage.getItem("MY_SECRET_UNLOCK") !== "true") return;

    const r18Markers = ["🔞", "🏩", "🥵", "🌫️", "♨️", "🕯️", "💜", "⛓️", "⏳", "💘", "🧴", "🫂", "👁️", "サキュバス", "悪堕ち", "スライム拘束"];

    // 画面内のすべての要素をチェック
    const elements = document.querySelectorAll('*');

    elements.forEach(el => {
      if (el.classList.contains('r18-theme-processed')) return;

      // 子要素のテキストを除外して、この要素自身の直接のテキストだけを取得
      let directText = "";
      for (let i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === Node.TEXT_NODE) {
          directText += el.childNodes[i].nodeValue;
        }
      }

      // R-18の絵文字やキーワードが含まれているか？
      const isR18 = r18Markers.some(marker => directText.includes(marker));

      if (isR18) {
        // 文字の親要素（ボタン全体や枠全体）を探し出して、そこに色を塗る
        let targetEl = el;
        
        // spanなどの小さい要素なら、一番近いbuttonやdivをターゲットにする
        if (el.tagName.toLowerCase() === 'span' || el.tagName.toLowerCase() === 'p') {
            targetEl = el.closest('button, div') || el;
        }
        
        // さらに親にボタン要素があれば、絶対にボタン全体を優先する
        const parentBtn = targetEl.closest('button');
        if (parentBtn) {
            targetEl = parentBtn;
        }

        // クラスを追加してピンク化
        targetEl.classList.add('r18-theme-box');
        targetEl.classList.add('r18-theme-text');
      }

      // 処理済みマークをつける
      el.classList.add('r18-theme-processed');
    });
  }, 1000);

  console.log("🌸 R-18 Theme Extension Loaded (Enhanced Edition)!");
})();

