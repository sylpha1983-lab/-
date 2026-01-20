// Auto-generated bundle for section 'presets'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.presets.v1.js ---
(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "presets";

  // ★ ここに自分専用の「よく使う組み合わせ」を登録してください
  // Quality_Presetにあるような画質タグではなく、
  // 「銀髪のエルフ＋森の背景」のような "セットアップ" を登録するのがおすすめです。
  const PRESETS = {
    "🌟 マイ・フェイバリット (My Favorites)": [
      { 
        label: "カスタムセットA (例: 銀髪エルフ)", 
        val: "silver hair, elf, pointy ears, forest background, green dress, cinematic lighting" 
      },
      {
        label: "カスタムセットB (例: サイバーパンク)",
        val: "cyberpunk city, neon lights, mechanical arms, glowing eyes, futuristic bodysuit, rain"
      }
    ],
    "🧪 実験用・メモ (Testing)": [
      {
        label: "テストプロンプト 1",
        val: "1girl, solo, smile, standing, simple background"
      },
      {
        label: "手元の修正用",
        val: "detailed hands, interlocking fingers, object in hand"
      }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-presets") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "presets-v1";
      
      // ヘッダーと説明
      const h = document.createElement("div");
      h.textContent = "💾 保存済みプリセット (My Presets)";
      h.style.fontWeight = "bold";
      h.style.color = "#d35400";
      h.style.marginBottom = "5px";
      section.appendChild(h);

      const desc = document.createElement("div");
      desc.style.fontSize = "0.8em";
      desc.style.color = "#666";
      desc.style.marginBottom = "10px";
      desc.textContent = "※このファイル(presets.v1.js)を編集して、よく使うプロンプトの組み合わせを登録できます。";
      section.appendChild(desc);

      Object.entries(PRESETS).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "preset-cat";
        details.style.marginBottom = "6px";
        details.style.border = "1px solid #eee";
        details.style.borderRadius = "4px";
        details.open = true; // カスタム領域なのでデフォルトで開く

        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px 10px";
        summary.style.cursor = "pointer";
        summary.style.background = "#fff8e1"; // クリーム色で区別
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.marginBottom = "4px";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.val; 
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
          label.title = item.val; // ホバーで中身を表示
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      // --- 場所・シチュエーション (Situations) ---
      // builder_data.qp_situations.js にある分類をここで表示する。
      // 以前「品質・設定(quality_preset)」に入っていた分を分離し、重複を避ける。
      try {
        const situations = (window.__QP_DB && window.__QP_DB.situations) ? window.__QP_DB.situations : null;
        if (situations && typeof situations === "object") {
          const h2 = document.createElement("div");
          h2.textContent = "📍 シチュエーション (Situations)";
          h2.style.fontWeight = "bold";
          h2.style.color = "#2c3e50";
          h2.style.margin = "14px 0 6px";
          section.appendChild(h2);

          const desc2 = document.createElement("div");
          desc2.style.fontSize = "0.8em";
          desc2.style.color = "#666";
          desc2.style.marginBottom = "10px";
          desc2.textContent = "※ここは『場所/時間/雰囲気』のセットプリセット。チェックしたものは生成タグにそのまま追加されます。";
          section.appendChild(desc2);

          Object.entries(situations).forEach(([cat, items]) => {
            const details = document.createElement("details");
            details.className = "preset-cat";
            details.style.marginBottom = "6px";
            details.style.border = "1px solid #eee";
            details.style.borderRadius = "4px";
            details.open = false; // 多いのでデフォルトは閉じる

            const summary = document.createElement("summary");
            summary.textContent = cat;
            summary.style.fontWeight = "bold";
            summary.style.padding = "6px 10px";
            summary.style.cursor = "pointer";
            summary.style.background = "#eef7ff"; // 薄い青で区別
            details.appendChild(summary);

            const content = document.createElement("div");
            content.style.padding = "8px";

            (items || []).forEach(item => {
              if (!item || !item.val) return;
              const label = document.createElement("label");
              label.style.display = "flex";
              label.style.alignItems = "center";
              label.style.marginBottom = "4px";
              label.style.cursor = "pointer";

              const cb = document.createElement("input");
              cb.type = "checkbox";
              cb.dataset.en = item.val;
              cb.style.marginRight = "6px";

              label.appendChild(cb);
              label.appendChild(document.createTextNode(item.label || item.val));
              label.title = item.val;
              content.appendChild(label);
            });

            details.appendChild(content);
            section.appendChild(details);
          });
        }
      } catch (e) {
        // noop (situations is optional)
      }

      parent.appendChild(section);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".presets-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

