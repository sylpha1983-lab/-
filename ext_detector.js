(function(){
  "use strict";

  function startDetective() {
    // 1. 画面上のすべてのテキストエリアを確保
    const textareas = document.querySelectorAll('textarea');
    
    if (textareas.length === 0) {
      alert("⚠️ 異常事態：画面上にテキストエリアが1つも見つかりません！");
      return;
    }

    console.log(`🕵️ 名探偵: ${textareas.length}個のテキストエリアを監視中...`);

    textareas.forEach((ta, index) => {
      // 2. 見た目で区別できるように枠線をつける
      // IDがあるものは青、ないものは赤、'out'は黄色
      const id = ta.id || "(IDなし)";
      
      if (id === 'out') {
        ta.style.border = "5px solid yellow"; // 今のプログラムが見ている場所
        ta.style.backgroundColor = "rgba(255, 255, 0, 0.2)";
        ta.placeholder = "ここは偽物(out)です";
      } else {
        ta.style.border = "3px solid blue"; // 真犯人の可能性
        ta.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
      }

      // 3. 入力監視イベントを仕掛ける
      // あなたが文字を打った瞬間、こいつが反応する
      ta.addEventListener('input', function() {
        const msg = `
🕵️ 犯人を見つけました！
----------------------
あなたが今入力している場所の情報:
ID: ${ta.id || "なし"}
Class: ${ta.className}
Name: ${ta.name || "なし"}
Placeholder: ${ta.placeholder}
----------------------
この情報を教えてください！
`;
        alert(msg);
        console.log("真犯人特定:", ta);
      });
    });

    // 4. 通知
    const div = document.createElement('div');
    div.style.cssText = "position:fixed; top:10px; left:10px; background:red; color:white; padding:10px; z-index:99999; font-weight:bold; border-radius:8px;";
    div.innerHTML = "🕵️ 名探偵モード起動中<br>テキストエリアに一文字打ってください！";
    document.body.appendChild(div);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(startDetective, 1000));
  } else {
    setTimeout(startDetective, 1000);
  }
})();
