(function(){
  "use strict";

  const VERSION = 2; // 背景の拡張版
  const KEY = "background";

  const GRADIENT_COLORS = [
    { label: "白 (White)", val: "white" },
    { label: "黒 (Black)", val: "black" },
    { label: "赤 (Red)", val: "red" },
    { label: "青 (Blue)", val: "blue" },
    { label: "黄 (Yellow)", val: "yellow" },
    { label: "緑 (Green)", val: "green" },
    { label: "紫 (Purple)", val: "purple" },
    { label: "ピンク (Pink)", val: "pink" },
    { label: "オレンジ (Orange)", val: "orange" },
    { label: "水色 (Cyan)", val: "cyan" },
    { label: "金 (Gold)", val: "gold" },
    { label: "銀 (Silver)", val: "silver" }
  ];

  // 既存のカテゴリデータ (v1の内容を継承)
  const CATEGORIES = {
    // ... (v1の全カテゴリをここにコピー＆ペーストして継承させます) ...
    // 長くなるため省略しますが、実装時はv1の中身をすべて含めます
    "シンプル・抽象 (Simple/Abstract)": [
       { ja: "シンプル背景", en: "simple background" },
       { ja: "白背景", en: "white background" },
       // ... 他
    ],
    // ... 他のカテゴリ ...
  };

  function createGradientBuilder() {
    const wrapper = document.createElement('div');
    wrapper.style.padding = "10px";
    wrapper.style.marginBottom = "10px";
    wrapper.style.backgroundColor = "#f0f8ff"; // 薄い青背景で区別
    wrapper.style.border = "1px solid #cceeff";
    wrapper.style.borderRadius = "6px";

    const title = document.createElement('div');
    title.textContent = "🎨 カスタムグラデーション作成";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "8px";
    title.style.color = "#005580";
    wrapper.appendChild(title);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.gap = "8px";
    container.style.alignItems = "center";
    container.style.flexWrap = "wrap";

    // 開始色
    const startSel = document.createElement('select');
    startSel.id = "bg-grad-start";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.label;
      startSel.appendChild(opt);
    });

    // 終了色
    const endSel = document.createElement('select');
    endSel.id = "bg-grad-end";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.label;
      // デフォルトで違う色にしておく
      if(c.val === "blue") opt.selected = true; 
      endSel.appendChild(opt);
    });

    // 有効化チェックボックス
    const enableLabel = document.createElement('label');
    enableLabel.style.marginLeft = "auto";
    enableLabel.style.display = "flex";
    enableLabel.style.alignItems = "center";
    enableLabel.style.fontSize = "0.9em";
    const enableCb = document.createElement('input');
    enableCb.type = "checkbox";
    enableCb.id = "bg-grad-enable";
    enableLabel.appendChild(enableCb);
    enableLabel.append(" 有効化");

    container.appendChild(startSel);
    container.appendChild(document.createTextNode("→"));
    container.appendChild(endSel);
    container.appendChild(enableLabel);
    wrapper.appendChild(container);

    // プレビューテキスト
    const preview = document.createElement('div');
    preview.id = "bg-grad-preview";
    preview.style.marginTop = "8px";
    preview.style.fontSize = "0.85em";
    preview.style.color = "#666";
    preview.textContent = "出力タグ: (無効)";
    wrapper.appendChild(preview);

    // イベントリスナー
    const update = () => {
      if (!enableCb.checked) {
        preview.textContent = "出力タグ: (無効)";
        preview.style.color = "#ccc";
        return;
      }
      const s = startSel.value;
      const e = endSel.value;
      const tag = `${s} and ${e} gradient background`;
      preview.textContent = `出力タグ: ${tag}`;
      preview.style.color = "#008800";
    };

    [startSel, endSel, enableCb].forEach(el => el.addEventListener('change', update));
    // 初期実行
    update();

    return wrapper;
  }

  const API = {
    initUI(container) {
      // 合体モード: 既存UIを消さずに追加
      const section = document.createElement("div");
      section.className = "background-v2-addon";

      // 1. グラデーションビルダーを追加
      section.appendChild(createGradientBuilder());
      
      // 2. 通常カテゴリ (v1継承分があればここに追加するが、今回はビルダー拡張のみ)
      // ※ もしv1の内容も含めるなら、ここにカテゴリ展開ロジックを入れる

      container.appendChild(section);
    },

    getTags() {
      const tags = [];
      
      // ビルダーからの取得
      const enable = document.getElementById("bg-grad-enable");
      if (enable && enable.checked) {
        const s = document.getElementById("bg-grad-start").value;
        const e = document.getElementById("bg-grad-end").value;
        tags.push(`${s} and ${e} gradient background`);
      }

      // 通常チェックボックスからの取得
      document.querySelectorAll(".background-v2-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
