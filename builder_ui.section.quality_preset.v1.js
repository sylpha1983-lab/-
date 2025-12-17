(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // データ定義
  const BEGINNER_DATA = {
    "🔰 ① 3D技術：安全セット": [
      { label: "🟢 キャラ・人物 (肌と光)", val: "(realistic lighting), (subsurface scattering)", desc: "肌を生かし、全体をまとめる。迷ったらこれだけ。" },
      { label: "🟢 背景・空間 (空気感)", val: "(global illumination), (volumetric lighting)", desc: "空間の破綻を防ぎ、一気に雰囲気が出る王道セット。" },
      { label: "🟢 物・メカ (質感と影)", val: "(physically based rendering), (ambient occlusion)", desc: "質感が嘘をつかなくなり、影が締まる。" }
    ],
    "🔰 ② エンジン選び：1つだけ選ぶ": [
      { label: "Octane (とりあえず綺麗)", val: "(octane render)", desc: "光が派手で凄そうに見える。" },
      { label: "Arnold (落ち着いたリアル)", val: "(arnold render)", desc: "人・顔・映画っぽさ。" },
      { label: "V-Ray (背景・建築・静寂)", val: "(v-ray)", desc: "静かでちゃんとしている。" },
      { label: "UE5 (ゲーム・世界観)", val: "(unreal engine 5)", desc: "環境・世界観重視。" },
      { label: "Cycles (Blender風)", val: "(cycles render)", desc: "主張は弱いが安全パイ。" }
    ],
    "🔰 ③ 完成形テンプレ": [
      { label: "人物イラスト完成セット (Octane+)", val: "(octane render), (realistic lighting), (subsurface scattering)", desc: "キャラ1枚絵の安全構成。" },
      { label: "ファンタジー背景セット (UE5+)", val: "(unreal engine 5), (global illumination), (volumetric lighting)", desc: "ゲームのような世界観。" },
      { label: "武器・小物完成セット (V-Ray+)", val: "(v-ray), (physically based rendering), (ambient occlusion)", desc: "実在感のある物撮り。" }
    ],
    "🔰 ④ 質感・ツール (Optional)": [
      { label: "ZBrush (スカルプト感)", val: "(zbrush sculpt), (digital sculpting), (clay render style)", desc: "フィギュアのような質感。" },
      { label: "Substance Painter (テクスチャ)", val: "(substance painter), (pbr textures), (intricate texture)", desc: "表面の汚れや傷など。" },
      { label: "Cinema 4D (クリーン)", val: "(cinema 4d render), (studio lighting), (clean render)", desc: "整った綺麗な3D感。" }
    ]
  };

  const PRESET_DATA = {
    "🏆 基本・画風": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風", val: "(masterpiece), (best quality), (3d render style), (octane render), (highly detailed cg)" },
      { label: "パステル・夢かわ", val: "(pastel colors:1.3), (soft focus), (dreamy), (kawaii), (light pink and blue), (airy atmosphere), (fairy kei style), (soft lighting)" },
      { label: "水彩画風", val: "(watercolor medium), (soft brush strokes), (colorful), (wet on wet), (artistic), (white background)" },
      { label: "油絵・厚塗り", val: "(oil painting), (impasto), (thick brushwork), (textured canvas), (traditional media), (rich colors)" },
      { label: "レトロアニメ (90s)", val: "(1990s source material), (retro anime style), (cel animation type), (analog film noise), (vhs artifact), (muted colors)" },
      { label: "水墨画", val: "(ink wash painting), (sumi-e), (brush strokes), (monochrome), (japanese traditional art), (minimalist)" }
    ],
    "💎 ハイエンド・特化": [
      { label: "★究極・レンダリング", val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)", links: ["基本・最高画質", "安全セット", "キャラ・人物", "レイトレーシング", "UE5", "PBR", "SSS", "ボリュメトリック", "8K", "整った顔立ち"] },
      { label: "幻想・コンセプトアート", val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (intricate scenery), (game art style), (artstation), (majestic)", links: ["基本・最高画質", "背景・空間", "ファンタジー"] },
      { label: "サイバー・ネオン", val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city), (night), (glowing outlines), (high contrast), (vibrant cyan and magenta)", links: ["物・メカ", "SF"] },
      { label: "アニメ・セミリアル (透明感)", val: "(anime style:1.3), (cel shading:1.2), (soft lighting), (smooth rendering), (glossy highlights), (shiny hair:1.3), (beautiful detailed eyes), (transparent skin texture), (rim light), (blush)", links: ["アニメ塗り", "ソフトライティング", "光沢/ツヤ肌", "リムライト"] },
      { label: "人物特化ハイエンド", val: "(intricate details:1.3), (extremely detailed skin, face, hair:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1), (high-fidelity hair:1.2), (ultra shiny hair:1.1), (individual hair strands:1.2), (micro-texture:1.2), (cinematic framing:1.2), (professional photography:1.2)", links: ["基本・最高画質", "フォトリアル", "キャラ・人物", "整った顔立ち", "リアルな肌", "SSS", "8K", "被写界深度"] }
    ]
  };

  // シークレット
  if (IS_UNLOCKED) {
    PRESET_DATA["💎 ハイエンド・特化"].unshift({ 
      label: "✨SECRET・究極艶", 
      val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (subsurface scattering), (global illumination), (physically based rendering), (unreal engine 5), (lumen reflections), (nanite geometry), (8k uhd), (octane render), (realistic lighting), (shiny hair), (glossy hair), (Kodak Portra 400), (low contrast)",
      links: ["基本・最高画質", "光沢/ツヤ肌", "Shiny Skin", "シネマティック", "Cinematic", "UE5", "PBR", "整った顔立ち", "Perfect Face"]
    });
  }

  // 翻訳辞書
  const DICT = {
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度", "ultra high resolution": "超高解像度",
    "photorealistic": "フォトリアル", "realistic": "リアル", "8k": "8K", "raw photo": "RAW写真", "detailed skin texture": "肌の質感",
    "hyperrealistic": "超リアル", "octane render": "Octane Render", "anime style": "アニメ調", "cel shading": "セルルック",
    "vibrant colors": "鮮やかな色", "clean lines": "綺麗な線", "flat color": "フラットカラー",
    "pastel colors": "パステルカラー", "soft focus": "ソフトフォーカス", "dreamy": "夢幻的", "kawaii": "可愛い",
    "watercolor medium": "水彩", "oil painting": "油絵", "impasto": "厚塗り", "ink wash painting": "水墨画",
    "retro anime style": "レトロアニメ", "cel animation type": "セル画", "analog film noise": "フィルムノイズ",
    "anime-realism blend": "アニメ・リアル融合", "cinematic lighting": "シネマティック照明", "high fidelity": "高忠実度",
    "fantasy concept art": "ファンタジーコンセプト", "digital painting": "デジタルペイント", "epic scale": "壮大",
    "cyberpunk style": "サイバーパンク", "neon lights": "ネオンライト", "chromatic aberration": "色収差",
    "realistic lighting": "リアルな照明", "subsurface scattering": "SSS", "global illumination": "GI", "volumetric lighting": "ボリュメトリック照明",
    "physically based rendering": "PBR", "ambient occlusion": "AO", "arnold render": "Arnold Render", "v-ray": "V-Ray",
    "unreal engine 5": "UE5", "cycles render": "Cycles Render", "zbrush sculpt": "ZBrushスカルプト", "digital sculpting": "デジタル彫刻",
    "clay render style": "クレイ風", "substance painter": "Substance Painter", "pbr textures": "PBRテクスチャ",
    "cinema 4d render": "C4Dレンダー", "studio lighting": "スタジオ照明", "clean render": "クリーンレンダー",
    "Kodak Portra 400": "Portra 400"
  };

  // UIヘルパー (他ファイルでも使用するためwindowに公開しても良いが、今回は各ファイルにコピーして独立性を保つ)
  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  function createBeginnerGuide(data) {
    if (!data) return null;
    const root = document.createElement("details"); root.className = "beginner-guide-root";
    root.style.cssText = "margin-bottom:20px; border:2px solid #89CFF0; border-radius:8px; background:#F0F8FF; display:block;";
    const summary = document.createElement("summary"); summary.innerHTML = "🔰 <b>初心者ガイド：迷ったらここから選ぶ</b>";
    summary.style.cssText = "padding:10px; cursor:pointer; font-weight:bold; list-style:none; outline:none;"; root.appendChild(summary);
    const contentWrapper = document.createElement("div"); contentWrapper.style.cssText = "padding:10px; border-top:1px solid #89CFF0; display:flex; flex-direction:column; gap:15px;";
    Object.entries(data).forEach(([title, items]) => {
      const section = document.createElement("div"); section.style.cssText = "border:1px solid #bce; background:#fff; border-radius:8px; padding:10px; width:100%; box-sizing:border-box;";
      const h4 = document.createElement("h4"); h4.textContent = title; h4.style.cssText = "margin:5px 0 8px 0; font-size:0.95em; color:#0056b3; border-bottom:1px dashed #bce; padding-bottom:3px;"; section.appendChild(h4);
      const grid = document.createElement("div"); grid.style.cssText = "display:grid; gap:8px; grid-template-columns: 1fr;";
      items.forEach(item => {
        const label = document.createElement("label"); label.style.cssText = "display:flex; align-items:center; background:#f9f9f9; padding:8px; border-radius:4px; cursor:pointer; border:1px solid #eee;";
        const cb = document.createElement("input"); cb.type = "checkbox"; cb.dataset.val = item.val; cb.style.marginRight = "10px"; cb.style.flexShrink = "0"; 
        const textDiv = document.createElement("div"); textDiv.innerHTML = `<div style="font-weight:bold; font-size:0.95em; color:#333;">${item.label}</div><div style="font-size:0.85em; color:#666; margin-top:2px;">${item.desc}</div>`;
        label.appendChild(cb); label.appendChild(textDiv); grid.appendChild(label);
      });
      section.appendChild(grid); contentWrapper.appendChild(section);
    });
    root.appendChild(contentWrapper); return root;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const parent = document.querySelector("#list-quality_preset") || container; parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      root.appendChild(createBeginnerGuide(BEGINNER_DATA));
      
      const secPresets = document.createElement("details"); secPresets.id = "qp-presets"; secPresets.className = "qp-main-acc";
      secPresets.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff;";
      const summary = document.createElement("summary"); summary.innerHTML = `<span style="margin-right:8px;">▶</span>📦 画風・品質プリセット (Art Styles & Quality)`; 
      summary.style.cssText = "font-weight:bold; padding:10px 14px; cursor:pointer; background:#eef2f6; list-style:none;";
      secPresets.appendChild(summary);
      const content = document.createElement("div"); content.className = "qp-section-content"; content.style.padding = "10px";
      secPresets.appendChild(content);
      
      // シークレット解除
      let clickCount = 0; let clickTimer = null;
      summary.addEventListener("click", () => {
        clickCount++; if(clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 2000); 
        if (clickCount >= 5) {
          const unlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
          if (confirm(unlocked ? "シークレットモードを解除しますか？" : "シークレットモードを解放しますか？")) {
            localStorage.setItem("MY_SECRET_UNLOCK", (!unlocked).toString()); location.reload();
          }
          clickCount = 0;
        }
      });

      Object.entries(PRESET_DATA).forEach(([k,v]) => { content.appendChild(createSubAccordion(k, v)); });
      root.appendChild(secPresets);
      parent.appendChild(root);
    },
    getTags() { 
      const tags = []; 
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); }); 
      document.querySelectorAll(".beginner-guide-root input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); });
      return tags; 
    }
  };
  
  // 共通CSS登録
  if (!document.getElementById("qp-styles-css")) { const style = document.createElement('style'); style.id = "qp-styles-css"; style.textContent = `.qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; } .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; } .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; } .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; } .qp-content-grid input { margin-right:6px; flex-shrink: 0; }`; document.head.appendChild(style); }
  window.__registerPromptPart(KEY, VERSION, API);
})();

