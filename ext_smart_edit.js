(function(){
  "use strict";

  function createSmartEditToolbar() {
    const outArea = document.getElementById('out');
    if (!outArea) return;

    // 既存削除
    const existing = document.getElementById("smart-edit-toolbar");
    if(existing) existing.remove();

    // ツールバー本体
    const toolbar = document.createElement('div');
    toolbar.id = "smart-edit-toolbar";
    toolbar.style.cssText = `
      display: flex;
      gap: 5px;
      margin-bottom: 5px;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
    `;

    const label = document.createElement('span');
    label.textContent = "編集:";
    label.style.fontSize = "0.8em";
    label.style.color = "#666";
    // ラベルも折り返さないようにする
    label.style.whiteSpace = "nowrap";
    toolbar.appendChild(label);

    // --- 内部関数: タグ範囲取得 ---
    function getTagRange(text, pos) {
      let start = pos;
      let end = pos;
      while (start > 0) {
        const char = text[start - 1];
        if (char === ',' || char === '\n') break;
        start--;
      }
      while (end < text.length) {
        const char = text[end];
        if (char === ',' || char === '\n') break;
        end++;
      }
      const rawString = text.substring(start, end);
      const trimmed = rawString.trim();
      if (!trimmed) return { start: start, end: start };

      const leadingSpaceCount = rawString.indexOf(trimmed);
      const trailingSpaceCount = rawString.length - (leadingSpaceCount + trimmed.length);

      return {
        start: start + leadingSpaceCount,
        end: end - trailingSpaceCount
      };
    }

    // --- 内部関数: コアテキスト抽出 ---
    function getCoreTextPreservingBrackets(str) {
      let text = str.trim();
      if (text.startsWith('(') && text.endsWith(')')) {
         let inside = text.slice(1, -1);
         return inside.replace(/:\d+(\.\d+)?$/, '');
      }
      return text;
    }

    function getRawText(str) {
      return str
        .replace(/^[\(\{\[]+/, '')
        .replace(/[\)\}\]]+$/, '')
        .replace(/:[\d\.]+(%?)$/, '');
    }

    // --- 適用ロジック ---
    function applyEffect(type, val) {
      outArea.focus();
      let start = outArea.selectionStart;
      let end = outArea.selectionEnd;
      const text = outArea.value;
      const scrollPos = outArea.scrollTop;

      // 自動範囲認識
      if (start === end) {
         const range = getTagRange(text, start);
         if (range.end > range.start) {
           start = range.start;
           end = range.end;
         }
      }

      let targetText = "";
      if (start !== end) {
        targetText = text.substring(start, end);
      }

      let newText = "";

      if (val === "raw") {
        newText = getRawText(targetText);
      }
      else if (val === "[]") {
        if (targetText.startsWith('[') && targetText.endsWith(']')) {
          newText = `[${targetText}]`;
        } else {
          newText = `[${getCoreTextPreservingBrackets(targetText)}]`;
        }
      } 
      else if (val === "{}") {
        if (targetText.startsWith('{') && targetText.endsWith('}')) {
          newText = `{${targetText}}`;
        } else {
          newText = `{${getCoreTextPreservingBrackets(targetText)}}`;
        }
      } 
      else {
        const core = getCoreTextPreservingBrackets(targetText);
        if (val === "none") {
          if (targetText.startsWith('(') && targetText.endsWith(')') && !targetText.includes(':')) {
             newText = `(${targetText})`;
          } else {
             newText = `(${core})`;
          }
        } else {
          newText = `(${core}:${val})`;
        }
      }

      // 反映
      if (start === end) {
         const insert = newText || "()"; 
         outArea.value = text.substring(0, start) + insert + text.substring(end);
         const newPos = start + insert.length;
         outArea.setSelectionRange(newPos, newPos);
      } else {
         outArea.value = text.substring(0, start) + newText + text.substring(end);
         const newPos = start + newText.length;
         outArea.setSelectionRange(newPos, newPos);
      }

      outArea.scrollTop = scrollPos;
      outArea.dispatchEvent(new Event('input'));
    }

    // --- メニュー構築 ---
    const menu = document.createElement('div');
    menu.id = "weight-popup-menu";
    menu.style.cssText = `position:absolute; bottom:100%; left:0; background:white; border:1px solid #ccc; border-radius:4px; box-shadow:0 4px 10px rgba(0,0,0,0.2); padding:5px; display:none; z-index:10002; min-width:280px;`;
    
    const weights = [
      { label: "0.7", val: "0.7" }, { label: "0.8", val: "0.8" }, { label: "0.9", val: "0.9" }, { label: "なし", val: "none" },
      { label: "1.1", val: "1.1" }, { label: "1.2", val: "1.2" }, { label: "1.3", val: "1.3" }, { label: "1.4", val: "1.4" },
      { label: "解除", val: "raw" }
    ];

    const grid = document.createElement('div');
    grid.style.cssText = "display:grid; grid-template-columns:repeat(4, 1fr); gap:4px;";
    weights.forEach(w => {
      const b = document.createElement('button');
      b.textContent = w.label;
      let bg = '#f0f8ff'; let col = '#333';
      if (w.val === 'none') bg = '#eee';
      if (w.val === 'raw') { bg = '#fff0f0'; col = '#d00'; }
      b.style.cssText = `padding:6px 2px; font-size:0.85em; cursor:pointer; background:${bg}; border:1px solid #ccc; border-radius:3px; color:${col};`;
      b.onclick = (e) => { e.preventDefault(); e.stopPropagation(); applyEffect("weight", w.val); menu.style.display = "none"; };
      grid.appendChild(b);
    });
    menu.appendChild(grid);
    toolbar.appendChild(menu);

    // --- ボタン共通スタイル (white-space: nowrap を追加) ---
    const btnStyle = `
      font-size: 0.85em;
      padding: 8px 10px; /* 少しパディングを調整 */
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      white-space: nowrap; /* ★これが重要：文字の折り返しを禁止 */
    `;

    // 1. 強調ボタン
    const weightBtn = document.createElement('button');
    weightBtn.textContent = "( ) 強調";
    weightBtn.style.cssText = btnStyle + "border-color: #007bff; background: #e7f1ff; color: #0056b3;";
    weightBtn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); const isVisible = menu.style.display === "block"; menu.style.display = isVisible ? "none" : "block"; };
    toolbar.appendChild(weightBtn);

    // 2. { } ボタン
    const curlyBtn = document.createElement('button');
    curlyBtn.textContent = "{ }";
    curlyBtn.style.cssText = btnStyle + "background: #f8f9fa; color: #333; margin-left:5px;";
    curlyBtn.onclick = (e) => { e.preventDefault(); applyEffect("weight", "{}"); };
    toolbar.appendChild(curlyBtn);

    // 3. 弱化ボタン
    const weakBtn = document.createElement('button');
    weakBtn.textContent = "[ ] 弱化";
    weakBtn.style.cssText = btnStyle + "background: #f8f9fa; color: #333; margin-left:5px;";
    weakBtn.onclick = (e) => { e.preventDefault(); applyEffect("weight", "[]"); };
    toolbar.appendChild(weakBtn);

    // スペーサー
    const spacer = document.createElement('div');
    spacer.style.flexGrow = "1";
    toolbar.appendChild(spacer);

    // 4. 拡大ボタン
    const expandBtn = document.createElement('button');
    expandBtn.textContent = "↕️ 拡大";
    expandBtn.style.cssText = `
      font-size: 0.8em;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #fff;
      cursor: pointer;
      color: #555;
      margin-left: 5px;
      white-space: nowrap; /* 折り返し禁止 */
    `;
    expandBtn.onclick = (e) => {
      e.preventDefault();
      outArea.style.height = "50vh"; 
    };
    toolbar.appendChild(expandBtn);

    // 5. 縮小ボタン
    const resetSizeBtn = document.createElement('button');
    resetSizeBtn.textContent = "↩️ 縮小";
    resetSizeBtn.style.cssText = `
      font-size: 0.8em;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #fff;
      cursor: pointer;
      color: #555;
      margin-left: 5px;
      white-space: nowrap; /* 折り返し禁止 */
    `;
    resetSizeBtn.onclick = (e) => {
      e.preventDefault();
      outArea.style.height = ""; 
    };
    toolbar.appendChild(resetSizeBtn);

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== weightBtn) { menu.style.display = "none"; }
    });

// 🧩 開発者モード用: 翻訳ファイル生成ボタン
    const DEV_KEY = "BUILDER_DEV_MODE";
    if (localStorage.getItem(DEV_KEY) === "true") {
      const devBtn = document.createElement('button');
      devBtn.textContent = "🧩 翻訳生成";
      devBtn.style.cssText = `
        font-size: 0.8em;
        padding: 6px 10px;
        border: 1px solid #28a745;
        border-radius: 4px;
        background: #28a745;
        color: white;
        cursor: pointer;
        font-weight: bold;
        margin-left: 5px;
        white-space: nowrap;
      `;
      devBtn.onclick = (e) => {
        e.preventDefault();
        try {
          if (window.__TRANSLATION_BUILDER__) {
            window.__TRANSLATION_BUILDER__.generateAll();
            alert("✅ 翻訳ファイルを生成しました！");
          } else {
            alert("⚠️ 翻訳生成システムが読み込まれていません。");
          }
        } catch (err) {
          console.error(err);
          alert("❌ 翻訳生成中にエラーが発生しました。");
        }
      };
      toolbar.appendChild(devBtn);
    }    outArea.parentElement.insertBefore(toolbar, outArea);
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", () => setTimeout(createSmartEditToolbar, 600)); } 
  else { setTimeout(createSmartEditToolbar, 600); }
})();

