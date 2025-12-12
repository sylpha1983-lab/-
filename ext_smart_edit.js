(function(){
  "use strict";

  function createSmartEditToolbar() {
    const outArea = document.getElementById('out');
    if (!outArea) return;

    // 既存削除
    const existing = document.getElementById("smart-edit-toolbar");
    if(existing) existing.remove();

    // ツールバー
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
    toolbar.appendChild(label);

    // --- タグ範囲取得 ---
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

    // --- コアテキスト抽出 ---
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

    // --- ボタン配置 ---
    const weightBtn = document.createElement('button');
    weightBtn.textContent = "( ) 強調";
    weightBtn.style.cssText = "font-size:0.85em; padding:8px 12px; border:1px solid #007bff; border-radius:4px; background:#e7f1ff; color:#0056b3; font-weight:bold; cursor:pointer;";
    weightBtn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); const isVisible = menu.style.display === "block"; menu.style.display = isVisible ? "none" : "block"; };
    toolbar.appendChild(weightBtn);

    // シンプルに「{ }」に変更
    const curlyBtn = document.createElement('button');
    curlyBtn.textContent = "{ }";
    curlyBtn.style.cssText = "font-size:0.85em; padding:8px 12px; border:1px solid #ccc; border-radius:4px; background:#f8f9fa; cursor:pointer; font-weight:bold; color:#333; margin-left:5px;";
    curlyBtn.onclick = (e) => { e.preventDefault(); applyEffect("weight", "{}"); };
    toolbar.appendChild(curlyBtn);

    const weakBtn = document.createElement('button');
    weakBtn.textContent = "[ ] 弱化";
    weakBtn.style.cssText = "font-size:0.85em; padding:8px 12px; border:1px solid #ccc; border-radius:4px; background:#f8f9fa; cursor:pointer; font-weight:bold; color:#333; margin-left:5px;";
    weakBtn.onclick = (e) => { e.preventDefault(); applyEffect("weight", "[]"); };
    toolbar.appendChild(weakBtn);

    // ランダムボタンは削除しました

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== weightBtn) { menu.style.display = "none"; }
    });

    outArea.parentElement.insertBefore(toolbar, outArea);
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", () => setTimeout(createSmartEditToolbar, 600)); } 
  else { setTimeout(createSmartEditToolbar, 600); }
})();

