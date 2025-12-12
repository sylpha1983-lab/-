(function(){
  "use strict";
  
  const STORAGE_KEY = "builder_autosave_v1";

  // 保存処理
  function saveState() {
    const state = {
      checked: [],
      sliders: []
    };

    // チェックボックスの状態保存
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      if (cb.checked && cb.dataset.en) {
        state.checked.push(cb.dataset.en);
      }
    });

    // Visual Sync等のスライダー保存
    document.querySelectorAll('input[type="range"]').forEach(sl => {
      // デフォルト値(100)以外のみ保存
      if (sl.value !== "100") {
        state.sliders.push({
          key: sl.dataset.key, // Visual Sync用
          id: sl.id,           // その他用
          val: sl.value
        });
      }
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // 復元処理
  function loadState() {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return;

    try {
      const state = JSON.parse(json);

      // チェックボックス復元
      if (state.checked && Array.isArray(state.checked)) {
        state.checked.forEach(tag => {
          // dataset.en が一致するものを探す
          // ※同じタグが複数箇所にある場合も全てチェックする
          const targets = document.querySelectorAll(`input[type="checkbox"][data-en="${tag.replace(/"/g, '\\"')}"]`);
          targets.forEach(cb => cb.checked = true);
        });
      }

      // スライダー復元
      if (state.sliders && Array.isArray(state.sliders)) {
        state.sliders.forEach(item => {
          let target = null;
          if (item.key) {
            target = document.querySelector(`input[type="range"][data-key="${item.key}"]`);
          } else if (item.id) {
            target = document.getElementById(item.id);
          }

          if (target) {
            target.value = item.val;
            target.dispatchEvent(new Event('input')); // 反映トリガー
          }
        });
      }

      // 復元が終わったら出力エリアも更新
      const genBtn = document.getElementById("genBtn");
      if (genBtn) genBtn.click(); // 一度生成を実行してテキストエリアに反映させる

    } catch (e) {
      console.error("AutoSave load error:", e);
    }
  }

  // 初期化
  function initAutoSave() {
    // 変更を監視して保存 (デバウンス処理などは簡易的に省略)
    document.body.addEventListener('change', saveState);
    document.body.addEventListener('input', (e) => {
      if (e.target.type === 'range') saveState();
    });

    // リセットボタンにフックして保存データも消す
    const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        localStorage.removeItem(STORAGE_KEY);
      });
    }

    // 初回ロード実行
    // UI構築が完了するのを少し待ってから実行
    setTimeout(loadState, 800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAutoSave);
  } else {
    initAutoSave();
  }
})();
