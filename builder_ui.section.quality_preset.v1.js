(function(){
  "use strict";
  const VERSION = 1; // 統合版: 土台 & プリセットセット
  const KEY = "quality_preset";

  // === データ定義 ===
  const DATA = {
    "🏆 基本・汎用 (Standard)": [
      { label: "基本・最高画質", val: "(masterpiece:1.3), (best quality:1.3), (high resolution), (highly detailed), (beautiful detailed face), (perfect anatomy)" },
      { label: "アニメ塗り", val: "(masterpiece:1.3), (best quality:1.3), (anime style), (cel shading), (vibrant colors), (clean lines), (flat color)" },
      { label: "フォトリアル", val: "(masterpiece:1.3), (best quality:1.3), (photorealistic:1.4), (realistic), (8k), (raw photo), (detailed skin texture), (hyperrealistic)" },
      { label: "3Dレンダリング風", val: "(masterpiece), (best quality), (3d render style), (octane render), (unreal engine 5), (ray tracing), (highly detailed cg)" }
    ],
    "💎 ハイエンド・特化 (High-End Specialized)": [
      { label: "超艶・粘液特化", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.3), (realistic textures:1.3), (extremely detailed skin, face, hair, slime textures:1.3), (cinematic lighting:1.3), (wet glossy oil-like sheen:1.3), (translucent dripping slime glow:1.3), (highly reflective fluid highlights:1.3), (subsurface scattering:1.3), (iridescent rainbow oil reflections:1.3), (UHD, ultra-sharp details:1.3), (vivid anime-like colors:1.3), (consistent anatomy:1.3)" },
      { label: "人物特化ハイエンド", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (intricate details:1.3), (extremely detailed skin, face, hair, background:1.3), (refined shading:1.3), (realistic textures:1.2), (photorealistic shading:1.2), (perfect facial anatomy:1.2), (ultra detailed face), (ultra detailed eyes), (soft blush:1.1), (ultra shiny skin:1.1), (natural skin texture:1.1), (subsurface scattering:1.2), (high-fidelity hair:1.2), (ultra shiny hair:1.1), (individual hair strands:1.2), (cinematic lighting:1.2), (soft natural lighting:1.2), (ray tracing-inspired effects:1.2), (global illumination:1.2), (ambient occlusion:1.1), (depth haze:1.1), (high-fidelity materials:1.2), (micro-texture:1.2), (UHD, ultra-sharp details:1.2), (high dynamic range:1.2), (bokeh lighting:1.1), (depth of field:1.2), (cinematic framing:1.2), (professional photography:1.2)" },
      { label: "半アニメ・セミリアル", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (anime style:1.2), (anime-realism blend:1.2), (semi-realistic rendering:1.1), (smooth shading:1.2), (soft gradient coloring:1.2), (glossy anime highlights:1.2), (cinematic lighting:1.1), (soft natural lighting:1.2), (vivid anime-like colors:1.2), (delicate lineart:1.2)" },
      { label: "風景・背景特化", val: "(masterpiece:1.3), (best quality:1.3), (ultra detailed background:1.3), (scenery:1.3), (hyperrealistic landscape), (8k resolution), (volumetric lighting), (ray tracing), (tyndall effect), (detailed water), (detailed sky), (detailed clouds), (lush vegetation), (atmospheric perspective), (depth of field), (cinematic composition), (epic scale)" },
      { label: "メカ・SF特化", val: "(masterpiece:1.3), (best quality:1.3), (ultra detailed mecha), (mechanical parts:1.3), (complex machinery), (metallic texture), (scratched metal), (glowing lights), (sci-fi atmosphere), (cybernetic), (hard surface modeling), (intricate panel lines), (reflections), (hdr), (unreal engine 5 render)" }
    ],
    "🎬 シチュエーション (Situations)": [
      { label: "ライブコンサート", val: "(live concert), (stage lights), (crowd), (performance), (microphone), (energetic), (confetti), (spotlight)" },
      { label: "壮大なバトル", val: "(epic battle), (fighting), (dynamic action), (explosions), (debris), (intense), (motion blur), (cinematic)" },
      { label: "日常・スライスオブライフ", val: "(slice of life), (daily life), (casual atmosphere), (soft sunlight), (peaceful), (detailed background), (anime style)" },
      { label: "デート", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant)" },
      { label: "学園生活", val: "(school life), (classroom), (school uniform), (sunlight through window), (friends), (youthful), (anime style)" }
    ],
    "🍃 季節・空気感 (Season & Atmosphere)": [
      { label: "春・桜", val: "(spring season), (cherry blossoms), (pink atmosphere), (soft sunlight), (warm breeze)" },
      { label: "夏・海", val: "(summer season), (intense sunlight), (blue sky), (heat haze), (vibrant colors), (high contrast)" },
      { label: "秋・紅葉", val: "(autumn season), (fallen leaves), (orange and red theme), (warm lighting), (nostalgic atmosphere)" },
      { label: "冬・雪", val: "(winter season), (snowing), (snowy landscape), (cold atmosphere), (breath steam), (pale colors), (overcast)" },
      { label: "夕暮れ", val: "(sunset), (golden hour), (orange sky), (dramatic shadows), (lens flare), (sentimental), (rim light)" },
      { label: "深夜の静寂", val: "(midnight), (starry sky), (moonlight), (darkness), (quiet atmosphere), (blue tint), (cinematic lighting)" },
      { label: "雨の情緒", val: "(raining), (wet ground), (reflections), (gloomy sky), (cinematic lighting), (atmospheric perspective)" }
    ],
    "🧪 サブジャンル・パンク (Sub-genres)": [
      { label: "アトムパンク", val: "(atompunk), (1950s retro futurism), (space age), (chrome), (fins), (googie architecture)" },
      { label: "カセットフューチャリズム", val: "(cassette futurism), (retro computer), (crt monitor), (analog tech), (80s sci-fi)" },
      { label: "レイガンゴシック", val: "(raygun gothic), (retro sci-fi), (flash gordon style), (rockets), (shiny metal), (bubble helmets)" },
      { label: "シンセウェーブ", val: "(synthwave), (neon grid), (sunset), (palm trees), (retro 80s), (magenta and cyan)" }
    ]
  };

  const NEG_SETS = {
    "ネガティブプリセット (Negative Sets)": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" }
    ]
  };

  // v1用 翻訳辞書
  const DICT = {
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度",
    "anime style": "アニメスタイル", "photorealistic": "フォトリアル", "3d render style": "3Dレンダリング",
    "low quality": "低品質", "worst quality": "最低品質", "bad anatomy": "崩れた人体",
    // 以下、セット内の構成要素翻訳
    "anime-realism blend": "アニメとリアルの融合", "semi-realistic rendering": "セミリアル描写",
    "wet glossy oil-like sheen": "濡れた油のような光沢", "translucent dripping slime glow": "滴る半透明な粘液の輝き",
    "highly reflective fluid highlights": "高反射の流体ハイライト", "subsurface scattering": "表面下散乱(SSS)",
    "iridescent rainbow oil reflections": "虹色のオイル反射", "vivid anime-like colors": "鮮やかなアニメ風の色",
    "consistent anatomy": "一貫した解剖学",
    "extremely detailed skin, face, hair, background": "超詳細な肌・顔・髪・背景",
    "extremely detailed skin, face, hair, slime textures": "超詳細な肌・顔・髪・粘液",
    "refined shading": "洗練された陰影", "photorealistic shading": "フォトリアルな陰影",
    "perfect facial anatomy": "完璧な顔の構造", "ultra detailed face": "超詳細な顔", "ultra detailed eyes": "超詳細な目",
    "soft blush": "柔らかな赤面", "ultra shiny skin": "超光沢肌", "natural skin texture": "自然な肌の質感",
    "high-fidelity hair": "高忠実度の髪", "ultra shiny hair": "超光沢髪", "individual hair strands": "一本一本の髪",
    "soft natural lighting": "柔らかな自然光", "ray tracing-inspired effects": "レイトレ風エフェクト",
    "global illumination": "グローバルイルミネーション", "ambient occlusion": "アンビエントオクルージョン",
    "depth haze": "奥行き霞", "high-fidelity materials": "高忠実度の素材", "micro-texture": "微細テクスチャ",
    "high dynamic range": "ハイダイナミックレンジ", "bokeh lighting": "ボケ照明",
    "cinematic framing": "映画的フレーミング", "professional photography": "プロの写真",
    "ultra detailed background": "超詳細な背景", "scenery": "風景", "hyperrealistic landscape": "超写実的な風景",
    "volumetric lighting": "ボリュメトリック照明", "ray tracing": "レイトレーシング", "tyndall effect": "チンダル現象",
    "detailed water": "詳細な水", "detailed sky": "詳細な空", "detailed clouds": "詳細な雲",
    "lush vegetation": "豊かな植生", "atmospheric perspective": "空気遠近法", "cinematic composition": "映画的構図", "epic scale": "壮大なスケール",
    "ultra detailed mecha": "超詳細なメカ", "mechanical parts": "機械部品", "complex machinery": "複雑な機械",
    "metallic texture": "金属の質感", "scratched metal": "傷ついた金属", "glowing lights": "輝くライト",
    "sci-fi atmosphere": "SFの雰囲気", "cybernetic": "サイバネティック", "hard surface modeling": "ハードサーフェス",
    "intricate panel lines": "複雑なパネルライン", "reflections": "反射", "hdr": "HDR",
    "unreal engine 5 render": "UE5レンダリング",
    "smooth shading": "滑らかな陰影", "soft gradient coloring": "柔らかなグラデーション彩色",
    "glossy anime highlights": "光沢のあるアニメハイライト", "delicate lineart": "繊細な線画", "cinematic lighting": "シネマティック照明",
    // 季節・シチュエーション
    "live concert": "ライブコンサート", "stage lights": "ステージライト", "performance": "パフォーマンス", "microphone": "マイク", "energetic": "エネルギッシュ", "confetti": "紙吹雪",
    "epic battle": "壮大なバトル", "fighting": "戦闘", "dynamic action": "ダイナミックなアクション", "explosions": "爆発", "debris": "瓦礫", "intense": "激しい",
    "slice of life": "日常系", "daily life": "日常生活", "casual atmosphere": "カジュアルな雰囲気", "soft sunlight": "柔らかな日差し",
    "date night": "デートナイト", "romantic atmosphere": "ロマンチックな雰囲気", "city lights": "街の灯り", "holding hands": "手をつなぐ", "blush": "赤面", "fashionable clothes": "おしゃれな服", "restaurant": "レストラン",
    "school life": "学園生活", "classroom": "教室", "school uniform": "制服", "sunlight through window": "窓からの日差し", "friends": "友達", "youthful": "若々しい",
    "spring season": "春", "cherry blossoms": "桜", "pink atmosphere": "ピンクの雰囲気", "warm breeze": "暖かい風",
    "summer season": "夏", "intense sunlight": "強い日差し", "blue sky": "青空", "heat haze": "陽炎", "vibrant colors": "鮮やかな色", "high contrast": "高コントラスト",
    "autumn season": "秋", "fallen leaves": "落ち葉", "orange and red theme": "オレンジと赤のテーマ", "warm lighting": "暖かい照明", "nostalgic atmosphere": "ノスタルジックな雰囲気",
    "winter season": "冬", "snowing": "降雪", "snowy landscape": "雪景色", "cold atmosphere": "冷たい雰囲気", "breath steam": "白い息", "pale colors": "淡い色", "overcast": "曇り空",
    "sunset": "夕日", "golden hour": "ゴールデンアワー", "orange sky": "オレンジの空", "dramatic shadows": "ドラマチックな影", "lens flare": "レンズフレア", "sentimental": "センチメンタル", "rim light": "リムライト",
    "midnight": "深夜", "starry sky": "星空", "moonlight": "月光", "darkness": "暗闇", "quiet atmosphere": "静寂な雰囲気", "blue tint": "青みがかった",
    "raining": "雨", "wet ground": "濡れた地面", "gloomy sky": "どんよりした空",
    // パンク
    "atompunk": "アトムパンク", "1950s retro futurism": "50年代レトロフューチャー", "space age": "宇宙時代", "googie architecture": "グーギー建築", "fins": "テールフィン", "chrome": "クローム",
    "cassette futurism": "カセットフューチャリズム", "retro computer": "レトロPC", "crt monitor": "CRTモニター", "analog tech": "アナログ技術", "80s sci-fi": "80年代SF",
    "raygun gothic": "レイガンゴシック", "retro sci-fi": "レトロSF", "flash gordon style": "フラッシュ・ゴードン風", "rockets": "ロケット", "shiny metal": "輝く金属", "bubble helmets": "バブルヘルメット",
    "synthwave": "シンセウェーブ", "neon grid": "ネオングリッド", "sunset": "夕日", "palm trees": "ヤシの木", "retro 80s": "レトロ80年代", "magenta and cyan": "マゼンタとシアン"
  };

  // UIヘルパー
  function createSubAccordion(title, items, type) {
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    details.style.marginBottom = "6px";
    details.style.border = "1px solid #eee";
    details.style.borderRadius = "4px";
    details.style.background = "#fff";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.textContent = title;
    summary.style.fontWeight = "bold";
    summary.style.padding = "6px 10px";
    summary.style.cursor = "pointer";
    summary.style.background = "#f9f9f9";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.className = "qp-content-grid";
    content.style.padding = "8px";
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    content.style.gap = "6px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.style.cursor = "pointer";
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.style.marginRight = "6px";
      cb.dataset.val = item.val;
      label.title = item.val;
      label.appendChild(cb);
      label.appendChild(document.createTextNode(item.label));
      
      if(item.label && !DICT[item.label]) DICT[item.label] = item.label;
      content.appendChild(label);
    });
    details.appendChild(content);
    return details;
  }

  function createMainSection(id, title) {
    const details = document.createElement("details");
    details.id = id; 
    details.className = "qp-main-acc";
    details.style.marginBottom = "10px";
    details.style.border = "1px solid #ccc";
    details.style.borderRadius = "6px";
    details.style.background = "#fff";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`;
    summary.style.fontWeight = "bold";
    summary.style.padding = "10px 14px";
    summary.style.cursor = "pointer";
    summary.style.background = "#eef2f6";
    summary.style.listStyle = "none";
    details.appendChild(summary);
    
    const wrapper = document.createElement("div");
    wrapper.className = "qp-section-content";
    wrapper.style.padding = "10px";
    details.appendChild(wrapper);
    return details;
  }

  function createNegativeSeparator() {
    const div = document.createElement("div");
    div.style.marginTop = "30px"; 
    div.style.marginBottom = "10px";
    div.style.borderTop = "2px dashed #ffb3b3";
    div.innerHTML = `<div style="margin-top:-12px; text-align:center;"><span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">⚠️ NEGATIVE PROMPTS</span></div>`;
    return div;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;
      parent.innerHTML = ""; 

      const root = document.createElement("div");
      root.className = "quality-preset-integrated";

      // 1. プリセット
      const secPresets = createMainSection("qp-presets", "📦 プリセット (Preset Sets)");
      Object.entries(DATA).forEach(([k,v]) => {
        secPresets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "preset"));
      });
      root.appendChild(secPresets);

      // 2. スタイル (ID作成)
      root.appendChild(createMainSection("qp-styles", "🎨 スタイル (Style Words)"));

      // 3. 時代 (ID作成)
      root.appendChild(createMainSection("qp-eras", "🕰️ 時代・年代 (Era Words)"));

      // 4. 品質ワード (ID作成)
      root.appendChild(createMainSection("qp-quality", "🔧 品質ワード (Quality Words)"));

      root.appendChild(createNegativeSeparator());

      // 5. ネガティブプリセット
      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット (Negative Sets)");
      secNegSets.querySelector("summary").style.background = "#fff0f0";
      secNegSets.querySelector("summary").style.color = "#d00";
      Object.entries(NEG_SETS).forEach(([k,v]) => {
        secNegSets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v, "negative_set"));
      });
      root.appendChild(secNegSets);

      // 6. ネガティブワード (ID作成)
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブ (Negative Words)");
      secNegWords.querySelector("summary").style.background = "#fff0f0";
      secNegWords.querySelector("summary").style.color = "#d00";
      root.appendChild(secNegWords);

      parent.appendChild(root);

      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  // 共通CSS
  if (!document.getElementById("qp-styles-css")) {
    const style = document.createElement('style');
    style.id = "qp-styles-css";
    style.textContent = `
      .qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; }
      .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; }
      .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; }
      .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; }
      .qp-content-grid input { margin-right:6px; flex-shrink: 0; }
    `;
    document.head.appendChild(style);
  }

  window.__registerPromptPart(KEY, VERSION, API);
})();

