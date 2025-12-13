(function(){
  "use strict";
  const VERSION = 4; // 初心者向けガイド版
  const KEY = "quality_preset";

  // データ定義（表示順序：① -> ② -> ③ -> ④）
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
    ],
    // ★ ④は一番最後に配置（トッピング扱い）
    "🔰 ④ 質感・ツール (Optional Flavors)": [
      { 
        label: "ZBrush (スカルプト・粘土感)", 
        val: "(zbrush sculpt), (digital sculpting), (clay render style)",
        desc: "フィギュアや彫刻のような、有機的で立体的な質感。" 
      },
      { 
        label: "Substance Painter (激細テクスチャ)", 
        val: "(substance painter), (pbr textures), (intricate texture)",
        desc: "表面の汚れや傷など、物質感を極限まで高める。" 
      },
      { 
        label: "Cinema 4D (クリーンな3D)", 
        val: "(cinema 4d render), (studio lighting), (clean render)",
        desc: "モーショングラフィックスのような、整った綺麗な3D感。" 
      }
    ]
  };

  const DICT = {
    "realistic lighting": "リアルな照明", "subsurface scattering": "SSS(表面下散乱)",
    "global illumination": "グローバル照明(GI)", "volumetric lighting": "ボリュメトリック照明",
    "physically based rendering": "物理ベースレンダリング(PBR)", "ambient occlusion": "AO(環境光遮蔽)",
    "octane render": "Octane Render", "arnold render": "Arnold Render",
    "v-ray": "V-Ray", "unreal engine 5": "Unreal Engine 5", "cycles render": "Cycles Render",
    "zbrush sculpt": "ZBrushスカルプト", "digital sculpting": "デジタル彫刻", "clay render style": "クレイレンダー風",
    "substance painter": "Substance Painter", "pbr textures": "PBRテクスチャ", "intricate texture": "複雑なテクスチャ",
    "cinema 4d render": "Cinema 4Dレンダー", "studio lighting": "スタジオ照明", "clean render": "クリーンレンダー"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const parent = document.querySelector("#list-quality_preset") || container;
      
      let root = parent.querySelector(".beginner-guide-root");
      if (!root) {
        root = document.createElement("details");
        root.className = "beginner-guide-root";
        root.open = false; 
        
        // 外枠スタイル
        root.style.marginBottom = "20px";
        root.style.border = "2px solid #89CFF0"; 
        root.style.borderRadius = "8px";
        root.style.background = "#F0F8FF";
        root.style.display = "block";
        root.style.width = "auto";
        
        // Summary
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

        // Content Wrapper
        const contentWrapper = document.createElement("div");
        contentWrapper.style.padding = "10px";
        contentWrapper.style.borderTop = "1px solid #89CFF0";
        contentWrapper.style.display = "flex";
        contentWrapper.style.flexDirection = "column";
        contentWrapper.style.gap = "15px";

        const descDiv = document.createElement("div");
        descDiv.innerHTML = "<div style='text-align:center; font-size:0.9em; color:#555;'>技術を足すより迷いを減らす。混ぜすぎ注意。<br>ここから1つずつ選べば失敗しません。</div>";
        descDiv.style.width = "100%";
        contentWrapper.appendChild(descDiv);

        Object.entries(BEGINNER_DATA).forEach(([title, items]) => {
          const isTemplateSection = title.includes("③");
          const isFlavorSection = title.includes("④");

          // --- セパレーター処理 ---
          // ③の前：「または」
          if (isTemplateSection) {
            const separatorContainer = document.createElement("div");
            separatorContainer.style.cssText = "width: 100%; text-align: center; margin: 10px 0; position: relative; height: 20px;";
            separatorContainer.innerHTML = `
              <div style="position: absolute; top: 50%; left: 0; right: 0; border-top: 2px dashed #aaa;"></div>
              <span style="position: relative; background: #F0F8FF; padding: 0 10px; color: #777; font-weight: bold; font-size: 0.85em;">または (OR)</span>
            `;
            contentWrapper.appendChild(separatorContainer);
          }
          // ④の前：「プラス」
          if (isFlavorSection) {
             const separatorContainer = document.createElement("div");
            separatorContainer.style.cssText = "width: 100%; text-align: center; margin: 10px 0; position: relative; height: 20px;";
            separatorContainer.innerHTML = `
              <div style="position: absolute; top: 50%; left: 0; right: 0; border-top: 2px dotted #aaa;"></div>
              <span style="position: relative; background: #F0F8FF; padding: 0 10px; color: #555; font-weight: bold; font-size: 0.85em;">＋ 味付け (Plus)</span>
            `;
            contentWrapper.appendChild(separatorContainer);
          }

          const section = document.createElement("div");
          section.style.width = "100%";
          section.style.boxSizing = "border-box";

          // --- デザイン処理 ---
          // ③テンプレート：ゴールド強調
          if (isTemplateSection) {
            section.style.border = "2px solid #ffbf00"; 
            section.style.background = "#fffcf0"; 
            section.style.borderRadius = "8px";
            section.style.padding = "10px";
            section.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
          }
          // ④フレーバー：少し落ち着いた色
          if (isFlavorSection) {
            section.style.border = "1px solid #bce"; 
            section.style.background = "#f0f8ff"; 
            section.style.borderRadius = "8px";
            section.style.padding = "10px";
          }

          const h4 = document.createElement("h4");
          h4.textContent = title;
          h4.style.margin = "5px 0 8px 0";
          h4.style.fontSize = "0.95em";
          
          if (isTemplateSection) h4.style.color = "#d9534f"; // 赤系
          else if (isFlavorSection) h4.style.color = "#28a745"; // 緑系
          else h4.style.color = "#0056b3"; // 青系

          h4.style.borderBottom = "1px dashed #bce";
          h4.style.paddingBottom = "3px";
          section.appendChild(h4);

          // --- 補足テキスト追加 ---
          if (isTemplateSection) {
            const note = document.createElement("div");
            note.style.cssText = "font-size: 0.85em; color: #d9534f; font-weight: bold; margin-bottom: 8px;";
            note.textContent = "✨ 全部入り！これを選べば「①」と「②」は選択不要です。";
            section.appendChild(note);
          }
          if (isFlavorSection) {
            const note = document.createElement("div");
            note.style.cssText = "font-size: 0.85em; color: #555; margin-bottom: 8px;";
            // なぜテンプレートに入っていないのかの理由を明記
            note.textContent = "※これは「強い味付け」です。①②の手動セットにも、③のテンプレにも、お好みで追加できます。";
            section.appendChild(note);
          }

          const grid = document.createElement("div");
          grid.style.display = "grid";
          grid.style.gap = "8px";
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
              <div style="font-size:0.8em; color:#666; line-height:1.3;">${item.desc}</div>
            `;

            label.appendChild(cb);
            label.appendChild(textDiv);
            grid.appendChild(label);
          });
          section.appendChild(grid);
          contentWrapper.appendChild(section);
        });

        root.appendChild(contentWrapper);

        // 挿入位置
        const qualitySection = document.getElementById("qp-quality");
        if (qualitySection && qualitySection.parentNode) {
          const targetParent = qualitySection.parentNode;
          if (qualitySection.nextSibling) {
            targetParent.insertBefore(root, qualitySection.nextSibling);
          } else {
            targetParent.appendChild(root);
          }
        } else {
          const wrapper = parent.querySelector(".quality-preset-integrated");
          if (wrapper) wrapper.appendChild(root);
          else parent.appendChild(root);
        }
      }
    },
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

