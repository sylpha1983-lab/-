(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "atmosphere"; 

  // 通常のチェックボックス用カテゴリー
  const CATEGORIES = {
    "🎨 単色テーマ (Single Color Theme)": [
      { ja: "ホワイト (白)", en: "white theme" },
      { ja: "ブラック (黒)", en: "black theme" },
      { ja: "レッド (赤)", en: "red theme" },
      { ja: "ブルー (青)", en: "blue theme" },
      { ja: "グリーン (緑)", en: "green theme" },
      { ja: "イエロー (黄)", en: "yellow theme" },
      { ja: "ピンク (桃)", en: "pink theme" },
      { ja: "パープル (紫)", en: "purple theme" },
      { ja: "オレンジ", en: "orange theme" },
      { ja: "ブラウン (茶)", en: "brown theme" },
      { ja: "グレー (灰)", en: "grey theme" },
      { ja: "アクア (水色)", en: "aqua theme" },
      { ja: "虹色 (レインボー)", en: "rainbow theme" },
      { ja: "モノクロ", en: "monochrome" },
      { ja: "セピア", en: "sepia" }
    ],
    "🌫️ 空気感・ムード (Mood)": [
      { ja: "ダーク/暗い", en: "dark atmosphere" },
      { ja: "ホラー/不気味", en: "horror theme" },
      { ja: "神秘的", en: "mysterious" },
      { ja: "幻想的", en: "fantasy" },
      { ja: "ロマンチック", en: "romantic" },
      { ja: "サイケデリック", en: "psychedelic" },
      { ja: "ノスタルジック", en: "nostalgic" },
      { ja: "近未来的", en: "futuristic" },
      { ja: "ゴシック", en: "gothic" },
      { ja: "サイバーパンク", en: "cyberpunk" },
      { ja: "夢のような", en: "dreamlike atmosphere" },
      { ja: "神々しい", en: "divine atmosphere" },
      { ja: "静寂", en: "serene atmosphere" }
    ]
  };

  // カラーミキサー用の色リスト
  const COLORS_LIST = [
    {val:"", label:"選択なし"},
    {val:"red", label:"赤 (Red)"},
    {val:"blue", label:"青 (Blue)"},
    {val:"green", label:"緑 (Green)"},
    {val:"yellow", label:"黄 (Yellow)"},
    {val:"pink", label:"桃 (Pink)"},
    {val:"purple", label:"紫 (Purple)"},
    {val:"white", label:"白 (White)"},
    {val:"black", label:"黒 (Black)"},
    {val:"orange", label:"橙 (Orange)"},
    {val:"aqua", label:"水 (Aqua)"},
    {val:"brown", label:"茶 (Brown)"},
    {val:"gold", label:"金 (Gold)"},
    {val:"silver", label:"銀 (Silver)"}
  ];

  // 比率の選択肢 (プロンプトの重み付けロジック)
  const RATIO_OPTS = [
    {val:"10-0", label:"色1 のみ (10:0)"},
    {val:"9-1",  label:"色1 超メイン (9:1)"},
    {val:"8-2",  label:"色1 メイン (8:2)"},
    {val:"7-3",  label:"色1 強め (7:3)"},
    {val:"6-4",  label:"色1 弱め (6:4)"},
    {val:"5-5",  label:"均等・バランス (5:5)"},
    {val:"4-6",  label:"色2 弱め (4:6)"},
    {val:"3-7",  label:"色2 強め (3:7)"},
    {val:"2-8",  label:"色2 メイン (2:8)"},
    {val:"1-9",  label:"色2 超メイン (1:9)"},
    {val:"0-10", label:"色2 のみ (0:10)"}
  ];

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-atmosphere") || container;
      // 重複防止
      const old = document.getElementById("atmosphere-section-wrap");
      if(old) old.remove();

      const wrap = document.createElement("div");
      wrap.id = "atmosphere-section-wrap";
      
      // 1. 通常のカテゴリー生成
      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #ccc";
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.innerHTML = cat;
        summary.style.padding = "8px";
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.backgroundColor = "#f0f8ff"; // 淡い青系
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.9em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        wrap.appendChild(details);
      });

      // 2. ★神機能: 2色テーマ・ミキサー (比率指定付き)
      const mixerDetails = document.createElement("details");
      mixerDetails.style.marginBottom = "8px";
      mixerDetails.style.border = "2px solid #ff9800"; // 特別感のある枠線
      mixerDetails.style.borderRadius = "4px";
      mixerDetails.open = false;
      
      const mixerSummary = document.createElement("summary");
      mixerSummary.innerHTML = "🎨 2色テーマ・ミキサー (Dual Color Mixer)";
      mixerSummary.style.padding = "8px";
      mixerSummary.style.fontWeight = "bold";
      mixerSummary.style.cursor = "pointer";
      mixerSummary.style.backgroundColor = "#fff3e0";
      mixerSummary.style.color = "#e65100";
      mixerDetails.appendChild(mixerSummary);

      const mixerContent = document.createElement("div");
      mixerContent.style.padding = "10px";
      mixerContent.style.backgroundColor = "#fff";

      // UI作成: 色1, 色2, 比率
      const makeSelect = (id, opts, width) => {
        const s = document.createElement("select");
        s.id = id;
        s.style.marginRight = "5px";
        s.style.padding = "4px";
        s.style.borderRadius = "4px";
        if(width) s.style.width = width;
        opts.forEach(o => {
          const op = document.createElement("option");
          op.value = o.val;
          op.text = o.label;
          if(o.val === "5-5") op.selected = true; // デフォルト均等
          s.appendChild(op);
        });
        return s;
      };

      const sel1 = makeSelect("mix-col1", COLORS_LIST);
      const sel2 = makeSelect("mix-col2", COLORS_LIST);
      const selRatio = makeSelect("mix-ratio", RATIO_OPTS, "180px"); // 少し幅広に

      // 生成されるタグを保持する隠しチェックボックス
      const resultCheck = document.createElement("input");
      resultCheck.type = "checkbox";
      resultCheck.id = "mix-result-check";
      resultCheck.style.display = "none"; 
      resultCheck.dataset.en = ""; 

      // プレビュー表示用
      const preview = document.createElement("div");
      preview.style.marginTop = "10px";
      preview.style.padding = "8px";
      preview.style.backgroundColor = "#fafafa";
      preview.style.border = "1px dashed #ccc";
      preview.style.borderRadius = "4px";
      preview.style.fontSize = "0.85em";
      preview.style.color = "#555";
      preview.innerHTML = "色と比率を選択すると、ここにタグが表示されます";

      // ロジック: 比率に応じて強調タグ (word:1.3) を生成
      const updateMix = () => {
        const c1 = sel1.value;
        const c2 = sel2.value;
        const ratio = selRatio.value; // "8-2" etc

        if (!c1 || !c2) {
           resultCheck.checked = false;
           resultCheck.dataset.en = "";
           preview.innerHTML = "色1と色2を選択してください";
           return;
        }
        if (c1 === c2) {
           resultCheck.checked = false;
           resultCheck.dataset.en = "";
           preview.innerHTML = "異なる2色を選んでください";
           return;
        }

        let tag = "";
        const [r1, r2] = ratio.split("-").map(Number); // "8", "2"

        if (r1 === 10) {
            tag = `${c1} theme`; // 色1のみ
        } else if (r2 === 10) {
            tag = `${c2} theme`; // 色2のみ
        } else if (r1 === 5 && r2 === 5) {
            tag = `${c1} and ${c2} theme`; // 均等
        } else {
            // 比率計算: 5を基準(1.0)とし、差分で重みを付ける
            // 例: 8:2 -> 色1(1.3), 色2(0.7)
            const w1 = (1.0 + (r1 - 5) * 0.1).toFixed(1);
            const w2 = (1.0 + (r2 - 5) * 0.1).toFixed(1);
            
            // 1.0の場合は括弧をつけない処理
            const p1 = w1 === "1.0" ? `${c1} theme` : `(${c1} theme:${w1})`;
            const p2 = w2 === "1.0" ? `${c2} theme` : `(${c2} theme:${w2})`;
            
            tag = `${p1}, ${p2}`;
        }

        resultCheck.dataset.en = tag;
        resultCheck.checked = true; // 自動でONにする
        preview.innerHTML = `生成タグ: <b style="color:#e65100">${tag}</b>`;
        
        // 変更を通知して即座に出力欄へ反映させたい場合は以下を有効化
        // window.__triggerGen && window.__triggerGen();
      };

      sel1.addEventListener("change", updateMix);
      sel2.addEventListener("change", updateMix);
      selRatio.addEventListener("change", updateMix);

      // レイアウト
      const row1 = document.createElement("div");
      row1.style.marginBottom ="8px";
      row1.style.display = "flex";
      row1.style.alignItems = "center";
      row1.innerHTML = "<span style='min-width:40px'>色1:</span>"; 
      row1.appendChild(sel1);
      
      const row2 = document.createElement("div");
      row2.style.marginBottom ="8px";
      row2.style.display = "flex";
      row2.style.alignItems = "center";
      row2.innerHTML = "<span style='min-width:40px'>色2:</span>"; 
      row2.appendChild(sel2);

      const row3 = document.createElement("div");
      row3.style.display = "flex";
      row3.style.alignItems = "center";
      row3.innerHTML = "<span style='min-width:40px'>比率:</span>"; 
      row3.appendChild(selRatio);

      mixerContent.appendChild(row1);
      mixerContent.appendChild(row2);
      mixerContent.appendChild(row3);
      mixerContent.appendChild(preview);
      mixerContent.appendChild(resultCheck); // 隠し要素

      mixerDetails.appendChild(mixerContent);
      wrap.appendChild(mixerDetails);

      parent.appendChild(wrap);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const root = document.getElementById("atmosphere-section-wrap");
      if(root) {
        // 通常のチェックボックス + ミキサーの隠しチェックボックスも回収
        root.querySelectorAll("input:checked").forEach(cb => {
            if(cb.dataset.en) tags.push(cb.dataset.en);
        });
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

