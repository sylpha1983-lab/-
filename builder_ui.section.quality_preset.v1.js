(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";
  
  // ==============================================================================
  // 🔑 解放状態の管理 (Split Keys)
  // ==============================================================================
  // 1. 究極艶 (Gloss): 画風プリセット5回連打
  const IS_GLOSS_UNLOCKED = localStorage.getItem("MY_GLOSS_UNLOCK") === "true";
  
  // 2. R-18 (Secret): ネガティブ10回連打
  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
  
  // グローバルフラグ更新
  window.__R18_MODE = IS_R18_UNLOCKED;

  // ==============================================================================
  // 📚 マスター辞書 (Global Base Dictionary)
  // ==============================================================================
  const MASTER_DICT = {
    // Quality & Style
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度",
    "photorealistic": "フォトリアル", "realistic": "リアル", "raw photo": "生写真", "8k": "8K",
    "anime style": "アニメ調", "cel shading": "セルルック", "flat color": "フラットカラー",
    "natural light": "自然光", "natural lighting": "自然な照明", "cinematic lighting": "シネマティック照明",
    "perfect face": "完璧な顔", "beautiful detailed face": "美しく詳細な顔",
    "perfect anatomy": "完璧な肉体構造", "highly detailed": "詳細な書き込み",
    "glossy skin": "光沢のある肌", "oiled skin": "オイル肌", "shiny hair": "輝く髪",
    
    // Tech & Render
    "octane render": "Octane Render", "unreal engine 5": "UE5(3D)", "ray tracing": "レイトレーシング",
    "global illumination": "GI(グローバル照明)", "volumetric lighting": "ボリュメトリック照明",
    "physically based rendering": "PBR(物理ベース)", "subsurface scattering": "SSS(表面下散乱)",
    "photon mapping": "フォトンマッピング", "path tracing": "パストレーシング",
    
    // Battle & Action Style
    "battle anime style": "バトルアニメ風", "sakuga": "作画", "comic book style": "アメコミ風",
    "intense action": "激しいアクション", "impact frames": "インパクトフレーム", "dynamic angle": "ダイナミックアングル",
    "manga style": "マンガ風", "speed lines": "集中線", "monochrome": "モノクロ", "dark fantasy": "ダークファンタジー",
    
    // Sub-genres
    "cyberpunk": "サイバーパンク", "steampunk": "スチームパンク", "biopunk": "バイオパンク",
    "dieselpunk": "ディーゼルパンク", "solarpunk": "ソーラーパンク", "neon lights": "ネオンライト",
    
    // R-18 / Sensitive Base
    "nsfw": "R-18", "nude": "ヌード", "uncensored": "無修正", "adult content": "成人向け",
    "tentacles": "触手", "bondage": "拘束", "ahegao": "アヘ顔", "cum": "精液"
  };

  // ==============================================================================
  // 🔰 初心者ガイド (Beginner Guide)
  // ==============================================================================
  const BEGINNER_DATA = {
    "🔰 ① 3D技術・安全セット": [
      { label: "🟢 キャラ・人物 (肌と光)", val: "(realistic lighting), (subsurface scattering)", desc: "肌を生かし、全体をまとめる。迷ったらこれだけ。" },
      { label: "🟢 背景・空間 (空気感)", val: "(global illumination), (volumetric lighting)", desc: "空間の破綻を防ぎ、一気に雰囲気が出る王道セット。" },
      { label: "🟢 物・メカ (質感と影)", val: "(physically based rendering), (ambient occlusion)", desc: "質感が嘘をつかなくなり、影が締まる。" }
    ],
    "🔰 ② エンジン選び (1つだけ)": [
      { label: "Octane (とりあえず綺麗)", val: "(octane render)", desc: "光が派手で凄そうに見える。" },
      { label: "Arnold (落ち着いたリアル)", val: "(arnold render)", desc: "人・顔・映画っぽさ。" },
      { label: "V-Ray (背景・建築・静寂)", val: "(v-ray)", desc: "静かでちゃんとしている。" },
      { label: "UE5 (ゲーム・世界観)", val: "(unreal engine 5)", desc: "環境・世界観重視。" },
      { label: "Cycles (Blender風)", val: "(cycles render)", desc: "主張は弱いが安全パイ。" }
    ]
  };

  // ==============================================================================
  // 📦 画風・品質プリセット (Presets)
  // ==============================================================================
  
  // ハイエンドリスト
  const HIGH_END_LIST = [
    { label: "★究極・レンダリング", val: "(anime-realism blend:1.4), (cinematic lighting:1.4), (high fidelity), (extremely detailed)" },
    { label: "幻想・コンセプトアート", val: "(fantasy concept art), (highly detailed digital painting), (epic scale), (glowing magic), (intricate scenery), (game art style), (artstation), (majestic)" },
    { label: "サイバー・ネオン", val: "(cyberpunk style), (neon lights), (chromatic aberration), (futuristic city), (night), (glowing outlines), (high contrast), (vibrant cyan and magenta)" },
    { label: "アニメ・セミリアル (透明感)", val: "(anime style:1.3), (cel shading:1.2), (soft lighting), (smooth rendering), (glossy highlights), (shiny hair:1.3), (beautiful detailed eyes), (transparent skin texture), (rim light), (blush)" },
    { label: "人物特化ハイエンド", val: "(intricate details:1.3), (extremely detailed skin, face, hair:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1)" }
  ];

  // ★「SECRET・究極艶」は IS_GLOSS_UNLOCKED で制御
  if (IS_GLOSS_UNLOCKED) {
    HIGH_END_LIST.unshift({
      label: "✨ SECRET・究極艶",
      val: "(unreal engine 5), (global illumination), (volumetric lighting), (masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (ultra high resolution:1.5), (anime-realism blend:1.4), (cinematic lighting:1.4), (ray tracing), (subsurface scattering), (physically based rendering), (lumen reflections), (nanite geometry), (8k uhd), (octane render), (realistic lighting), (shiny hair), (glossy hair), (Kodak Portra 400), (low contrast), (teal and orange grading), (anamorphic lens flare), (widescreen), (dramatic atmosphere), perfect face, glossy skin",
      desc: "解放された究極の質感設定",
      links: [
        "基本・最高画質", "UE5", "Unreal Engine 5", "Octane Render", "Ray Tracing", "Global Illumination", 
        "Volumetric Lighting", "Subsurface Scattering", "PBR", "8K", "Cinematic Lighting", 
        "Glossy Skin", "Shiny Hair", "Lens Flare", "Widescreen"
      ]
    });
  }

  const PRESET_DATA = {
    "🏆 基本・画風 (Standard)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy), (natural light), (natural lighting), (perfect face)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風", val: "(masterpiece), (best quality), (3d render style), (octane render), (highly detailed cg)" },
      { label: "パステル・夢かわ", val: "(pastel colors:1.3), (soft focus), (dreamy), (kawaii), (light pink and blue), (airy atmosphere), (fairy kei style), (soft lighting)" },
      { label: "水彩画風", val: "(watercolor medium), (soft brush strokes), (colorful), (wet on wet), (artistic), (white background)" },
      { label: "油絵・厚塗り", val: "(oil painting), (impasto), (thick brushwork), (textured canvas), (traditional media), (rich colors)" },
      { label: "レトロアニメ (90s)", val: "(1990s source material), (retro anime style), (cel animation type), (analog film noise), (vhs artifact), (muted colors)" },
      { label: "水墨画", val: "(ink wash painting), (sumi-e), (brush strokes), (monochrome), (japanese traditional art), (minimalist)" }
    ],
    "💎 ハイエンド・特化 (High-End)": HIGH_END_LIST,
    "⚔️ 戦闘・アクション画風 (Battle & Action)": [
      { label: "バトルアニメ風・作画", val: "(battle anime style), (sakuga), (intense action), (impact frames), (dynamic angle), (highly detailed effects)" },
      { label: "アクションドローイング", val: "(action drawing), (rough sketch style), (dynamic brushwork), (motion lines), (sketchy), (raw energy)" },
      { label: "劇画・アメコミ風", val: "(comic book style), (bold lines), (strong shadows), (inked), (western comic style), (high contrast)" },
      { label: "マンガ戦闘・集中線", val: "(manga style), (monochrome), (speed lines), (focus lines), (sound effects), (action focus)" },
      { label: "ダークファンタジー", val: "(dark fantasy), (grimdark), (blood splatters), (heavy atmosphere), (gothic), (muted colors)" }
    ],
    "🛠️ 制作ソフト・プリセット (Software Presets)": [
      { label: "Octane Render (派手)", val: "(octane render), (volumetric lighting), (caustics), (high contrast), (vibrant)", desc: "CGらしい派手な光と色彩。" },
      { label: "Unreal Engine 5 (リアル)", val: "(unreal engine 5), (lumen global illumination), (nanite geometry), (photorealistic), (8k)", desc: "次世代ゲームエンジンのようなリアルさ。" },
      { label: "ZBrush (造形・粘土)", val: "(zbrush sculpt), (digital sculpting), (clay texture), (model sheet style), (ambient occlusion)", desc: "3Dモデルの造形美を強調。" },
      { label: "Substance Painter (質感)", val: "(substance painter), (pbr textures), (detailed material), (grunge), (scratches)", desc: "使い込まれた道具や汚れの表現。" }
    ],
    "⚙️ 3D技術・プリセット (3D Tech Sets)": [
      { label: "レイトレーシング・光", val: "(ray tracing), (global illumination), (realistic lighting), (reflections), (blooms)", desc: "光の反射と拡散をシミュレート。" },
      { label: "スタジオライティング", val: "(studio lighting), (softbox), (rim lighting), (neutral background), (professional photography)", desc: "写真館のような整った照明。" },
      { label: "シネマティック・ルック", val: "(cinematic lighting), (teal and orange grading), (anamorphic lens flare), (widescreen), (dramatic atmosphere)", desc: "映画のような色調と演出。" }
    ],
    "🧪 サブジャンル・パンク (Sub-genres)": [
      { label: "サイバーパンク", val: "(cyberpunk), (neon lights), (high tech low life), (futuristic city), (cybernetics)" },
      { label: "スチームパンク", val: "(steampunk), (brass and copper), (gears and cogs), (victorian fashion), (steam engine)" },
      { label: "ディーゼルパンク", val: "(dieselpunk), (steel and oil), (1940s style), (military machinery), (gritty)" },
      { label: "バイオパンク", val: "(biopunk), (organic technology), (genetic engineering), (glowing veins), (fleshy texture)" },
      { label: "ソーラーパンク", val: "(solarpunk), (nature and technology blend), (greenery), (solar panels), (utopia), (bright sunlight)" }
    ]
  };

  // 汎用R-18 (基本のみ) - IS_R18_UNLOCKED で制御
  const SECRET_DATA = {
    "💋 R-18 基本 (Basic NSFW)": [
      { label: "基本・R-18", val: "(nsfw), (uncensored), (explicit), (adult content), (hentai)" },
      { label: "ヌード・全裸", val: "(nude), (naked), (full body nudity), (nipples), (pussy), (anus), (detailed genitals)" }
    ]
  };

  // ==============================================================================
  // UI Helper Functions
  // ==============================================================================
  function createSubAccordion(title, items, isSecret = false) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; 
    details.style.marginBottom = "6px"; details.style.border = isSecret ? "1px solid #ffcccc" : "1px solid #eee"; 
    details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    
    const summary = document.createElement("summary"); 
    summary.textContent = title; summary.style.fontWeight = "bold"; 
    summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; 
    summary.style.background = isSecret ? "#fff0f0" : "#f9f9f9"; 
    if(isSecret) summary.style.color = "#d00";
    details.appendChild(summary); 

    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    content.style.padding = "8px"; content.style.display = "grid"; 
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  function createMainSection(id, title, colorStyle = {}) {
    const details = document.createElement("details"); details.id = id; details.className = "qp-main-acc";
    details.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff;";
    if(colorStyle.border) details.style.border = colorStyle.border;
    if(colorStyle.bg) details.style.background = colorStyle.bg;
    
    const summary = document.createElement("summary"); 
    summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`; 
    summary.className = "section-summary";
    summary.style.cssText = "font-weight:bold; padding:10px 14px; cursor:pointer; background:#eef2f6; list-style:none; outline:none; user-select:none; display:flex; align-items:center;";
    if(colorStyle.sumBg) summary.style.background = colorStyle.sumBg;
    if(colorStyle.sumColor) summary.style.color = colorStyle.sumColor;
    
    details.appendChild(summary);
    const content = document.createElement("div"); 
    content.id = id + "-content"; 
    content.className = "qp-section-content"; content.style.padding = "10px";
    details.appendChild(content);
    return details;
  }

  function createBeginnerGuide(data) {
    if (!data) return null;
    const root = document.createElement("details"); root.className = "beginner-guide-root";
    root.style.cssText = "margin-bottom:12px; border:2px solid #89CFF0; border-radius:8px; background:#F0F8FF; display:block;";
    root.open = false; // デフォルトは閉じる

    const summary = document.createElement("summary"); summary.innerHTML = "🔰 <b>初心者ガイド：迷ったらここから選ぶ</b>";
    summary.style.cssText = "padding:10px; cursor:pointer; font-weight:bold; list-style:none; outline:none; color:#0056b3;"; 
    root.appendChild(summary);
    
    const contentWrapper = document.createElement("div"); contentWrapper.style.cssText = "padding:10px; border-top:1px solid #89CFF0; display:flex; flex-direction:column; gap:15px;";
    
    Object.entries(data).forEach(([title, items]) => {
      const section = document.createElement("div"); section.style.cssText = "border:1px solid #bce; background:#fff; border-radius:8px; padding:10px; width:100%; box-sizing:border-box;";
      const h4 = document.createElement("h4"); h4.textContent = title; h4.style.cssText = "margin:5px 0 8px 0; font-size:0.95em; color:#0056b3; border-bottom:1px dashed #bce; padding-bottom:3px;"; section.appendChild(h4);
      const grid = document.createElement("div"); grid.style.cssText = "display:grid; gap:8px; grid-template-columns: 1fr;";
      
      items.forEach(item => {
        const label = document.createElement("label"); label.style.cssText = "display:flex; align-items:center; background:#f9f9f9; padding:8px; border-radius:4px; cursor:pointer; border:1px solid #eee;";
        const cb = document.createElement("input"); cb.type = "checkbox"; 
        cb.className = "qp-beginner-cb"; 
        cb.dataset.val = item.val; cb.style.marginRight = "10px"; cb.style.flexShrink = "0";
        cb.addEventListener("change", (e) => {
          if (e.target.checked) {
             contentWrapper.querySelectorAll(".qp-beginner-cb").forEach(other => {
               if (other !== e.target) other.checked = false;
             });
          }
        });
        const textDiv = document.createElement("div"); textDiv.innerHTML = `<div style="font-weight:bold; font-size:0.95em; color:#333;">${item.label}</div><div style="font-size:0.85em; color:#666; margin-top:2px;">${item.desc}</div>`;
        label.appendChild(cb); label.appendChild(textDiv); grid.appendChild(label);
      });
      section.appendChild(grid); contentWrapper.appendChild(section);
    });
    root.appendChild(contentWrapper); return root;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(MASTER_DICT);
      
      const parent = document.querySelector("#list-quality_preset") || container; parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      
      // 1. 画風・品質プリセット (v1本体)
      const secPresets = createMainSection("qp-presets", "📦 画風・品質プリセット (Art Styles & Quality)");
      const presetsContent = secPresets.querySelector(".qp-section-content");
      presetsContent.id = "qp-presets-content"; 

      // 初心者ガイド
      const beginnerGuide = createBeginnerGuide(BEGINNER_DATA);
      if(beginnerGuide) presetsContent.appendChild(beginnerGuide);

      // 通常プリセットの展開
      Object.entries(PRESET_DATA).forEach(([k,v]) => { 
        presetsContent.appendChild(createSubAccordion(k, v)); 
      });
      
      // シークレット（基本R-18）の展開
      if (IS_R18_UNLOCKED) {
        const secretHeader = document.createElement("div");
        secretHeader.style.cssText = "margin:15px 0 5px; color:#d00; font-weight:bold; border-bottom:2px solid #d00; padding-bottom:3px;";
        secretHeader.textContent = "⚠️ R-18 / NSFW Content (Unlocked)";
        presetsContent.appendChild(secretHeader);
        Object.entries(SECRET_DATA).forEach(([k,v]) => {
          presetsContent.appendChild(createSubAccordion(k, v, true));
        });
      }

      // ★解放トリガーA: 「究極艶」解放 (5回連打)
      const summaryPresets = secPresets.querySelector("summary");
      let clickCount = 0; let clickTimer = null;
      summaryPresets.addEventListener("click", (e) => {
        clickCount++; 
        if(clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 2000); 
        
        if (clickCount >= 5) {
          const unlocked = localStorage.getItem("MY_GLOSS_UNLOCK") === "true";
          const msg = unlocked 
            ? "究極艶モード(High-End Gloss)を【無効】にしますか？\n(ページがリロードされます)" 
            : "究極艶モード(High-End Gloss)を【解放】しますか？\n(ページがリロードされます)";
          
          if (confirm(msg)) {
            localStorage.setItem("MY_GLOSS_UNLOCK", (!unlocked).toString()); 
            location.reload();
          }
          clickCount = 0;
        }
      });

      root.appendChild(secPresets);

      // 2. コンテナ群 (各拡張ファイルの受け皿)
      // ★修正: 他のファイルが確実にIDを見つけられるように、innerIdの要素を生成して追加する方式に統一
      const sectionConfigs = [
        { id: "qp-situations", title: "🎬 シチュエーション・環境 (Situations & Environment)", innerId: "qp-situations-general-area" },
        { id: "qp-packs", title: "📦 シチュエーションパック (Context & Action Packs)", style: { border:"1px solid #99c", bg:"#f4f4ff", sumBg:"#e0e0ff", sumColor:"#336" }, innerId: "qp-packs-content" },
        { id: "qp-combat", title: "⚔️ 戦闘・アクション (Combat)", innerId: "qp-combat-content" },
        { id: "qp-styles", title: "🎨 スタイル・文化 (Styles & Culture)", innerId: "qp-styles-content" },
        { id: "qp-eras", title: "🕰️ 時代・年代 (Eras)", innerId: "qp-eras-content" },
        { id: "qp-quality", title: "🔧 品質・技術・ツール (Quality & Tech)", innerId: "qp-quality-content" },
      ];

      sectionConfigs.forEach(conf => {
        const det = createMainSection(conf.id, conf.title, conf.style || {});
        const content = det.querySelector(".qp-section-content");
        
        // ★修正: v2, v3, v4...などが getElementById で探すため、
        // 確実にIDを持ったdivを作成してcontentに追加する。
        // もしすでにIDがあるなら追加しない、というチェックも可能だが、
        // 毎回リセット(innerHTML="")されるので新規作成で良い。
        
        // 既存のID割り当てロジック（そのまま）
        if (conf.innerId === "qp-situations-general-area") {
           // v2などは qp-situations-general-area というIDのdivを探す
           const div = document.createElement("div"); 
           div.id = conf.innerId;
           content.appendChild(div);
        } else {
           // v6などは content そのもののIDを探す場合もあるが、
           // 安全のため、ここでも内部divを作ってIDを付与する方式に統一しても良い。
           // しかし既存のv3/v4/v6/v7は contentのIDを期待している節があるため、
           // innerIdをcontent自体のIDとして設定する（これが一番安全）。
           content.id = conf.innerId;
        }
        root.appendChild(det);
      });

      // 3. ネガティブ (★解放トリガーB: R-18解放 - 10回連打 & 無反応化)
      const divNegSep = document.createElement("div"); 
      divNegSep.style.cssText = "margin-top:30px; margin-bottom:10px; border-top:2px dashed #ffb3b3;";
      
      // R-18トリガーエリア
      const r18Trigger = document.createElement("div");
      // ★修正: cursor:default, user-select:none, tap-highlight-color:transparent で「反応なし」に見せる
      r18Trigger.style.cssText = "margin-top:-12px; text-align:center; user-select:none; cursor:default; -webkit-tap-highlight-color:transparent; outline:none;";
      r18Trigger.innerHTML = `<span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">⚠️ NEGATIVE PROMPTS</span>`;
      
      // ★修正: 10回連打ロジック (0.5秒以内に次をタップしないとリセット)
      let negClickCount = 0; 
      let negClickTimer = null;

      r18Trigger.addEventListener("click", (e) => {
        // デフォルト動作やバブリング防止（念のため）
        // e.preventDefault(); 
        
        negClickCount++;
        if (negClickTimer) clearTimeout(negClickTimer);
        
        // 0.5秒間隔が空いたらリセット
        negClickTimer = setTimeout(() => { negClickCount = 0; }, 500); 

        if (negClickCount >= 10) {
          const unlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
          const msg = unlocked 
            ? "シークレットモード(R-18)を【封印】しますか？\n(ページがリロードされます)" 
            : "シークレットモード(R-18)を【解放】しますか？\n(ページがリロードされます)";
          
          // alertやconfirmを出すと連打が止まるのでOK
          if(confirm(msg)) {
            localStorage.setItem("MY_SECRET_UNLOCK", (!unlocked).toString());
            location.reload();
          }
          negClickCount = 0;
        }
      });

      divNegSep.appendChild(r18Trigger);
      root.appendChild(divNegSep);

      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット (Negative Sets)", { sumBg: "#fff0f0", sumColor: "#d00" });
      secNegSets.querySelector(".qp-section-content").id = "qp-neg-sets-content";
      root.appendChild(secNegSets);
      
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブ (Negative Words)", { sumBg: "#fff0f0", sumColor: "#d00" });
      secNegWords.querySelector(".qp-section-content").id = "qp-neg-words-content";
      root.appendChild(secNegWords);
      
      parent.appendChild(root);
    },
    getTags() { 
      const tags = []; 
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); }); 
      document.querySelectorAll(".beginner-guide-root input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); });
      return tags; 
    }
  };
  
  window.__registerPromptPart(KEY, VERSION, API);
})();

