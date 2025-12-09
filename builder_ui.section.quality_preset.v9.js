(function(){
  "use strict";
  const VERSION = 9; // 拡張パックH (肌・質感・季節)
  const KEY = "quality_preset";

  // ==========================================
  // 拡張データ定義
  // ==========================================

  // これらを「プリセット (#qp-presets)」に追加
  const EXTRA_PRESETS_SETS = {
    "👤 キャラクター特徴 (Character Traits)": [
      { label: "汗 (Sweat)", val: "sweat" }, 
      { label: "涙 (Tears)", val: "tears" },
      { label: "血管 (Vascular)", val: "vascular" }, 
      { label: "筋肉質 (Muscular)", val: "muscular" },
      { label: "そばかす (Freckles)", val: "freckles" }, 
      { label: "ほくろ (Mole)", val: "mole" },
      { label: "日焼け跡 (Tan lines)", val: "tan lines" }, 
      { label: "傷跡 (Scars)", val: "scars" },
      { label: "汚れた顔 (Dirty)", val: "dirty face" }
    ],
    "💧 肌・質感表現 (Skin Texture)": [
      { label: "濡れた肌 (Wet)", val: "wet skin" }, 
      { label: "オイル肌 (Oiled)", val: "oiled skin" },
      { label: "透け肌/SSS (Subsurface)", val: "subsurface scattering" },
      { label: "化粧/メイク (Makeup)", val: "makeup" }, 
      { label: "リップ (Lipstick)", val: "lipstick" }
    ],
    "🖼️ 構図・視線 (Composition & Gaze)": [
      { label: "カメラ目線", val: "looking at viewer" }, 
      { label: "よそ見", val: "looking away" },
      { label: "振り返り", val: "looking back" }, 
      { label: "目を閉じる", val: "closed eyes" },
      { label: "ウインク", val: "one eye closed" }, 
      { label: "全身", val: "full body" }, 
      { label: "上半身", val: "upper body" },
      { label: "顔アップ", val: "close-up" }, 
      { label: "足元", val: "feet" },
      { label: "後ろ姿", val: "from behind" }
    ],
    "✨ エフェクト・パーティクル (Effects)": [
      { label: "花弁が舞う", val: "falling petals" }, 
      { label: "羽が舞う", val: "feathers" },
      { label: "紙吹雪", val: "confetti" }, 
      { label: "キラキラ", val: "sparkles" },
      { label: "火の粉", val: "embers" }, 
      { label: "光の粒", val: "light particles" },
      { label: "泡 (バブル)", val: "bubbles" }, 
      { label: "ほこり", val: "floating dust" },
      { label: "魔法陣", val: "magic circle" }, 
      { label: "オーラ", val: "aura" }
    ],
    "🍃 季節・空気感 (Season & Atmosphere)": [
      { label: "春・桜", val: "(spring season), (cherry blossoms), (pink atmosphere), (soft sunlight)" },
      { label: "夏・海", val: "(summer season), (intense sunlight), (blue sky), (heat haze), (vibrant colors)" },
      { label: "秋・紅葉", val: "(autumn season), (fallen leaves), (orange and red theme), (warm lighting)" },
      { label: "冬・雪", val: "(winter season), (snowing), (snowy landscape), (cold atmosphere), (breath steam)" },
      { label: "夕暮れ", val: "(sunset), (golden hour), (orange sky), (dramatic shadows), (lens flare)" },
      { label: "深夜", val: "(midnight), (starry sky), (moonlight), (darkness), (quiet atmosphere), (blue tint)" },
      { label: "雨天", val: "(raining), (wet ground), (reflections), (gloomy sky), (cinematic lighting)" }
    ]
  };

  // === v9用 翻訳辞書 ===
  const V9_DICT = {
    // Character Traits
    "sweat": "汗", "tears": "涙", "vascular": "血管", "muscular": "筋肉質",
    "freckles": "そばかす", "mole": "ほくろ", "tan lines": "日焼け跡", "scars": "傷跡",
    "dirty face": "汚れた顔", "makeup": "メイク", "lipstick": "口紅",

    // Skin Texture
    "wet skin": "濡れた肌", "oiled skin": "オイル肌", "subsurface scattering": "表面下散乱(SSS)",

    // Composition
    "looking at viewer": "カメラ目線", "looking away": "よそ見", "looking back": "振り返り",
    "closed eyes": "目を閉じる", "one eye closed": "ウインク", "full body": "全身",
    "upper body": "上半身", "close-up": "顔アップ", "feet": "足元", "from behind": "後ろ姿",

    // Effects
    "falling petals": "舞い散る花弁", "feathers": "羽", "confetti": "紙吹雪", "sparkles": "キラキラ",
    "embers": "火の粉", "light particles": "光の粒子", "bubbles": "泡", "floating dust": "浮遊する埃",
    "magic circle": "魔法陣", "aura": "オーラ",

    // Season & Atmosphere
    "spring season": "春", "cherry blossoms": "桜", "pink atmosphere": "ピンクの雰囲気", "soft sunlight": "柔らかな日差し",
    "summer season": "夏", "intense sunlight": "強い日差し", "blue sky": "青空", "heat haze": "陽炎", "vibrant colors": "鮮やかな色",
    "autumn season": "秋", "fallen leaves": "落ち葉", "orange and red theme": "オレンジと赤のテーマ", "warm lighting": "暖かい照明",
    "winter season": "冬", "snowing": "降雪", "snowy landscape": "雪景色", "cold atmosphere": "冷たい雰囲気", "breath steam": "白い息",
    "sunset": "夕日", "golden hour": "ゴールデンアワー", "orange sky": "オレンジの空", "dramatic shadows": "ドラマチックな影", "lens flare": "レンズフレア",
    "midnight": "深夜", "starry sky": "星空", "moonlight": "月光", "darkness": "暗闇", "quiet atmosphere": "静寂な雰囲気", "blue tint": "青みがかった",
    "raining": "雨", "wet ground": "濡れた地面", "reflections": "反射", "gloomy sky": "どんよりした空", "cinematic lighting": "シネマティック照明"
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
    summary.style.fontSize = "0.9em";
    summary.style.color = "#555";
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

      if(window.__outputTranslation && item.label && !V9_DICT[item.label]) V9_DICT[item.label] = item.label;

      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V9_DICT);

      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");

      if (presetsContainer) {
        Object.entries(EXTRA_PRESETS_SETS).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

