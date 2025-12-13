(function(){
  "use strict";
  const VERSION = 4; // 初心者向けガイド版
  const KEY = "quality_preset";

  // ユーザー提供の「深海から浅瀬に戻る」ガイドに基づくデータ
  const BEGINNER_DATA = {
    "🔰 ① 3D技術：安全セット (Safe 3D Tech)": [
      { 
        label: "🟢 キャラ・人物 (肌と光)", 
        val: "(realistic lighting), (subsurface scattering)",
        desc: "肌を生かし、全体をまとめる。迷ったらこれだけ。" 
      },
      { 
        label: "🟢 背景・空間 (空気感)", 
        val: "(global illumination), (volumetric lighting)",
        desc: "空間の破綻を防ぎ、一気に雰囲気が出る王道セット。" 
      },
      { 
        label: "🟢 物・メカ (質感と影)", 
        val: "(physically based rendering), (ambient occlusion)",
        desc: "質感が嘘をつかなくなり、影が締まる。テカテカ事故防止。" 
      }
    ],
    "🔰 ② エンジン選び：1つだけ選ぶ (Pick ONE Engine)": [
      { 
        label: "Octane (とりあえず綺麗)", 
        val: "(octane render)",
        desc: "光が派手で凄そうに見える。一番わかりやすい選択。" 
      },
      { 
        label: "Arnold (落ち着いたリアル)", 
        val: "(arnold render)",
        desc: "人・顔・映画っぽさ。破綻しにくい。" 
      },
      { 
        label: "V-Ray (背景・建築・静寂)", 
        val: "(v-ray)",
        desc: "静かでちゃんとしている。背景やプロップ向き。" 
      },
      { 
        label: "UE5 (ゲーム・世界観)", 
        val: "(unreal engine 5)",
        desc: "キャラ単体より、環境・世界観重視。" 
      },
      { 
        label: "Cycles (Blender風)", 
        val: "(cycles render)",
        desc: "主張は弱いが他と喧嘩しない安全パイ。" 
      }
    ],
    "🔰 ③ 完成形テンプレ (Complete Templates)": [
      { 
        label: "人物イラスト完成セット (Octane+)", 
        val: "(octane render), (realistic lighting), (subsurface scattering)",
        desc: "キャラ1枚絵の安全構成。派手さと肌の質感を両立。" 
      },
      { 
        label: "ファンタジー背景セット (UE5+)", 
        val: "(unreal engine 5), (global illumination), (volumetric lighting)",
        desc: "ゲームのような世界観と空気感を作る構成。" 
      },
      { 
        label: "武器・小物完成セット (V-Ray+)", 
        val: "(v-ray), (physically based rendering), (ambient occlusion)",
        desc: "質感と影を重視した、実在感のある物撮り構成。" 
      }
    ]
  };

  const DICT = {
    "realistic lighting": "リアルな照明", "subsurface scattering": "SSS(表面下散乱)",
    "global illumination": "グローバル照明(GI)", "volumetric lighting": "ボリュメトリック照明",
    "physically based rendering": "物理ベースレンダリング(PBR)", "ambient occlusion": "AO(環境光遮蔽)",
    "octane render": "Octane Render", "arnold render": "Arnold Render",
    "v-ray": "V-Ray", "unreal engine 5": "Unreal Engine 5", "cycles render": "Cycles Render"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const parent = document.querySelector("#list-quality_preset") || container;
      
      let root = parent.querySelector(".beginner-guide-root");
      if (!root) {
        root = document.createElement("details");
        root.className = "beginner-guide-root";
        
        // デフォルト閉じた状態
        root.open = false; 
        
        root.style.marginBottom = "20px";
        root.style.border = "2px solid #89CFF0"; 
        root.style.borderRadius = "8px";
        root.style.background = "#F0F8FF";
        
        // --- Summary (開閉ボタン) ---
        const summary = document.createElement("summary");
        summary.innerHTML = "🔰 <b>初心者ガイド：迷ったらここから選ぶ</b>";
        summary.style.padding = "10px";
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        summary.style.outline = "none";
        summary.style.listStyle = "none"; 
        
        const marker = document.createElement("span");
        marker.textContent = "▶ "; 
        marker.style.display = "inline-block";
        marker.style.marginRight = "5px";
        summary.prepend(marker);

        root.addEventListener("toggle", () => {
          marker.textContent = root.open ? "▼ " : "▶ ";
        });

        root.appendChild(summary);

        // --- Content Wrapper ---
        const contentWrapper = document.createElement("div");
        contentWrapper.style.padding = "10px";
        contentWrapper.style.borderTop = "1px solid #89CFF0";

        const descDiv = document.createElement("div");
        descDiv.innerHTML = "<div style='text-align:center; margin-bottom:15px; font-size:0.9em; color:#555;'>技術を足すより迷いを減らす。混ぜすぎ注意。<br>ここから1つずつ選べば失敗しません。</div>";
        contentWrapper.appendChild(descDiv);

        Object.entries(BEGINNER_DATA).forEach(([title, items]) => {
          const section = document.createElement("div");
          section.style.marginBottom = "15px";
          
          const h4 = document.createElement("h4");
          h4.textContent = title;
          h4.style.margin = "5px 0 8px 0";
          h4.style.fontSize = "0.95em";
          h4.style.color = "#0056b3";
          h4.style.borderBottom = "1px dashed #bce";
          h4.style.paddingBottom = "3px";
          section.appendChild(h4);

          const grid = document.createElement("div");
          grid.style.display = "grid";
          grid.style.gap = "6px";
          grid.style.gridTemplateColumns = "1fr";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.background = "#fff";
            label.style.padding = "8px";
            label.style.borderRadius = "4px";
            label.style.border = "1px solid #ddd";
            label.style.cursor = "pointer";
            label.onmouseover = () => label.style.background = "#eef9ff";
            label.onmouseout = () => label.style.background = "#fff";

            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.style.marginRight = "8px";
            cb.dataset.val = item.val;
            
            const textDiv = document.createElement("div");
            textDiv.innerHTML = `
              <div style="font-weight:bold; font-size:0.95em; color:#333;">${item.label}</div>
              <div style="font-size:0.8em; color:#666;">${item.desc}</div>
            `;

            label.appendChild(cb);
            label.appendChild(textDiv);
            grid.appendChild(label);
          });
          section.appendChild(grid);
          contentWrapper.appendChild(section);
        });

        root.appendChild(contentWrapper);

        if (parent.firstChild) {
          parent.insertBefore(root, parent.firstChild);
        } else {
          parent.appendChild(root);
        }
      }
    },
    // ★ 修正箇所: ここでチェックされた値を取得するようにしました
    getTags() {
      const tags = [];
      document.querySelectorAll(".beginner-guide-root input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

