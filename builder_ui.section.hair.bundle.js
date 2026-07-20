// Auto-generated bundle for section 'hair'
// Contains 8 versions stacked in ascending order.

(function(){
// --- builder_ui.section.hair.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "hair";

  const CATEGORIES = {
    "髪の長さ (Length)": [
      { ja: "ショートヘア", en: "short hair" },
      { ja: "ミディアムヘア", en: "medium hair" },
      { ja: "ロングヘア", en: "long hair" },
      { ja: "ベリーロング", en: "very long hair" },
      { ja: "スーパーロング", en: "absurdly long hair" }
    ],
    "基本スタイル (Basic Styles)": [
      { ja: "ボブカット", en: "bob cut" },
      { ja: "ショートボブ", en: "short bob" },
      { ja: "ピクシーカット", en: "pixie cut" },
      { ja: "姫カット", en: "hime cut" },
      { ja: "ウルフカット", en: "wolf cut" },
      { ja: "シャギー", en: "shaggy hair" },
      { ja: "マッシュルーム", en: "bowl cut" }
    ],
    "結び髪・テール (Tails)": [
      { ja: "ポニーテール", en: "ponytail" },
      { ja: "サイドポニー", en: "side ponytail" },
      { ja: "ツインテール", en: "twintails" },
      { ja: "ローツインテール", en: "low twintails" },
      { ja: "ツーサイドアップ", en: "two side up" }
    ],
    "髪色 (Basic Colors)": [
      { ja: "金髪", en: "blonde hair" },
      { ja: "黒髪", en: "black hair" },
      { ja: "茶髪", en: "brown hair" },
      { ja: "銀髪", en: "silver hair" },
      { ja: "白髪", en: "white hair" },
      { ja: "赤髪", en: "red hair" },
      { ja: "青髪", en: "blue hair" },
      { ja: "ピンク髪", en: "pink hair" },
      { ja: "紫髪", en: "purple hair" },
      { ja: "緑髪", en: "green hair" },
      { ja: "オレンジ髪", en: "orange hair" },
      { ja: "グレー髪", en: "grey hair" }
    ]
  };

  const API = {
    initUI(container) {
      // v1 (Base) なので、コンテナを一度クリアして初期化する
      const parent = document.querySelector("#list-hair") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "hair-v1-base";

      const title = document.createElement("div");
      title.textContent = "▼ ヘアスタイル設定 (v1 Base)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        
        // 排他制御
        details.addEventListener("change", e => {
          if (e.target.type === "checkbox" && e.target.checked) {
            details.querySelectorAll("input[type='checkbox']").forEach(c => {
              if (c !== e.target) c.checked = false;
            });
          }
        });

        section.appendChild(details);
      });

      parent.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v1-base input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.hair.v2.js ---
(function(){
  "use strict";

  const VERSION = 2; // Add-on
  const KEY = "hair";

  const CATEGORIES = {
    "前髪 (Bangs/Fringe)": [
      { ja: "パッツン前髪", en: "blunt bangs" },
      { ja: "分け目あり", en: "parted bangs" },
      { ja: "メカクレ (片目)", en: "hair over one eye" },
      { ja: "メカクレ (両目)", en: "hair over eyes" },
      { ja: "目にかかる髪", en: "hair between eyes" },
      { ja: "斜め分け", en: "swept bangs" },
      { ja: "デコ出し", en: "forehead" },
      { ja: "オールバック", en: "swept back" }
    ],
    "髪質・テクスチャ (Texture)": [
      { ja: "ストレート", en: "straight hair" },
      { ja: "ウェーブ", en: "wavy hair" },
      { ja: "巻き髪 (カール)", en: "curly hair" },
      { ja: "縦ロール", en: "ringlets" },
      { ja: "ボサボサ", en: "messy hair" },
      { ja: "ツンツン (スパイキー)", en: "spiky hair" },
      { ja: "シルキー (光沢)", en: "silky hair" },
      { ja: "濡れ髪", en: "wet hair" }
    ],
    "特殊な髪色 (Advanced Colors)": [
      { ja: "グラデーション", en: "gradient hair" },
      { ja: "マルチカラー", en: "multicolored hair" },
      { ja: "ツートンカラー", en: "two-tone hair" },
      { ja: "メッシュ/筋", en: "streaked hair" },
      { ja: "インナーカラー", en: "inner color" },
      { ja: "虹色", en: "rainbow hair" },
      { ja: "毛先のみ色違い", en: "colored tips" }
    ]
  };

  const API = {
    initUI(container) {
      // 合体モード: 既存UIを消さずに追加
      const section = document.createElement("div");
      section.className = "hair-v2-addon";
      section.style.borderTop = "2px dashed #ccc";
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";

      const title = document.createElement("div");
      title.textContent = "▼ 質感・属性 (v2 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        section.appendChild(details);
      });
      container.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v2-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.hair.v3.js ---
(function(){
  "use strict";

  const VERSION = 3; // Add-on
  const KEY = "hair";

  const CATEGORIES = {
    "ヘアアレンジ (Arrangement)": [
      { ja: "三つ編み (一本)", en: "single braid" },
      { ja: "おさげ (二本)", en: "braids" },
      { ja: "編み込み", en: "french braid" },
      { ja: "カチューシャ編み", en: "crown braid" },
      { ja: "お団子ヘア", en: "hair bun" },
      { ja: "シニヨン (二つ)", en: "double bun" },
      { ja: "ハーフアップ", en: "half updo" },
      { ja: "サイドテール", en: "side pony" },
      { ja: "アップヘア", en: "updo" }
    ],
    "髪の動き・状態 (Motion & State)": [
      { ja: "風になびく", en: "windblown hair" },
      { ja: "浮遊する髪", en: "floating hair" },
      { ja: "顔にかかる", en: "hair over face" },
      { ja: "肩にかかる", en: "hair over shoulder" },
      { ja: "広がる髪", en: "spread hair" }
    ],
    "アニメ的表現・特徴 (Anime Tropes)": [
      { ja: "アホ毛", en: "ahoge" },
      { ja: "アンテナ (二本)", en: "antenna hair" },
      { ja: "ドリルヘアー", en: "drill hair" },
      { ja: "動物耳風の髪", en: "hair ears" },
      { ja: "ハート型アホ毛", en: "heart ahoge" }
    ],
    "髪飾り・アクセサリー (Accessories)": [
      { ja: "リボン", en: "hair ribbon" },
      { ja: "ヘアバンド", en: "hairband" },
      { ja: "カチューシャ", en: "hairband" }, 
      { ja: "シュシュ", en: "scrunchie" },
      { ja: "ヘアピン", en: "hairpin" },
      { ja: "かんざし", en: "hair stick" },
      { ja: "花の髪飾り", en: "hair flower" },
      { ja: "ヘアオーナメント", en: "hair ornament" }
    ]
  };

  const API = {
    initUI(container) {
      // 合体モード: 既存UIを消さずに追加
      const section = document.createElement("div");
      section.className = "hair-v3-addon";
      section.style.borderTop = "2px dashed #ccc";
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";

      const title = document.createElement("div");
      title.textContent = "▼ アレンジ・動き (v3 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        section.appendChild(details);
      });
      container.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v3-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.hair.v4.js ---
(function(){
  "use strict";

  const VERSION = 4; // カスタムビルダー搭載版 (アクセサリ削除済)
  const KEY = "hair";

  // --- 1. カスタムビルダー用のデータ ---
  const BUILDER_COLORS = [
    { ja: "指定なし", en: "", val: "" },
    { ja: "金", en: "Blonde", val: "blonde" },
    { ja: "黒", en: "Black", val: "black" },
    { ja: "茶", en: "Brown", val: "brown" },
    { ja: "銀", en: "Silver", val: "silver" },
    { ja: "白", en: "White", val: "white" },
    { ja: "赤", en: "Red", val: "red" },
    { ja: "青", en: "Blue", val: "blue" },
    { ja: "水色", en: "Light Blue", val: "light blue" },
    { ja: "ピンク", en: "Pink", val: "pink" },
    { ja: "紫", en: "Purple", val: "purple" },
    { ja: "緑", en: "Green", val: "green" },
    { ja: "オレンジ", en: "Orange", val: "orange" },
    { ja: "グレー", en: "Grey", val: "grey" },
    { ja: "虹色", en: "Rainbow", val: "rainbow" }
  ];

  const BUILDER_STYLES = [
    { 
      label: "メッシュ/筋 (Streaks)", 
      val: "streaks", 
      format: "{base} hair with {sub} streaks",
      format_ja: "{sub}のメッシュが入った{base}髪" 
    },
    { 
      label: "グラデーション (Gradient)", 
      val: "gradient", 
      format: "{base} hair, {sub} gradient",
      format_ja: "{base}から{sub}へのグラデーション髪"
    },
    { 
      label: "インナーカラー (Inner)", 
      val: "inner color", 
      format: "{base} hair with {sub} inner color",
      format_ja: "{base}髪、インナーカラーは{sub}"
    },
    { 
      label: "毛先のみ (Tips)", 
      val: "colored tips", 
      format: "{base} hair with {sub} tips",
      format_ja: "{base}髪、毛先は{sub}"
    },
    { 
      label: "ハイライト (Highlights)", 
      val: "highlights", 
      format: "{base} hair with {sub} highlights",
      format_ja: "{sub}のハイライトが入った{base}髪"
    },
    { 
      label: "多色・混色 (Multi)", 
      val: "multicolored", 
      format: "{base} and {sub} multicolored hair",
      format_ja: "{base}と{sub}のマルチカラー髪"
    }
  ];

  // --- 2. 既存カテゴリデータ (アクセサリー削除済) ---
  const CATEGORIES = {
    "髪の長さ (Length)": [
      { ja: "ショートヘア", en: "short hair" }, { ja: "ミディアムヘア", en: "medium hair" },
      { ja: "ロングヘア", en: "long hair" }, { ja: "ベリーロング", en: "very long hair" },
      { ja: "スーパーロング", en: "absurdly long hair" }
    ],
    "基本スタイル (Basic Styles)": [
      { ja: "ボブカット", en: "bob cut" }, { ja: "ショートボブ", en: "short bob" },
      { ja: "ピクシーカット", en: "pixie cut" }, { ja: "姫カット", en: "hime cut" },
      { ja: "ウルフカット", en: "wolf cut" }, { ja: "シャギー", en: "shaggy hair" },
      { ja: "マッシュルーム", en: "bowl cut" }
    ],
    "結び髪・テール (Tails)": [
      { ja: "ポニーテール", en: "ponytail" }, { ja: "サイドポニー", en: "side ponytail" },
      { ja: "ツインテール", en: "twintails" }, { ja: "ローツインテール", en: "low twintails" },
      { ja: "ツーサイドアップ", en: "two side up" }
    ],
    "前髪 (Bangs/Fringe)": [
      { ja: "パッツン前髪", en: "blunt bangs" }, { ja: "分け目あり", en: "parted bangs" },
      { ja: "メカクレ (片目)", en: "hair over one eye" }, { ja: "メカクレ (両目)", en: "hair over eyes" },
      { ja: "目にかかる髪", en: "hair between eyes" }, { ja: "斜め分け", en: "swept bangs" },
      { ja: "デコ出し", en: "forehead" }, { ja: "オールバック", en: "swept back" }
    ],
    "髪質・テクスチャ (Texture)": [
      { ja: "ストレート", en: "straight hair" }, { ja: "ウェーブ", en: "wavy hair" },
      { ja: "巻き髪 (カール)", en: "curly hair" }, { ja: "縦ロール", en: "ringlets" },
      { ja: "ボサボサ", en: "messy hair" }, { ja: "ツンツン (スパイキー)", en: "spiky hair" },
      { ja: "シルキー (光沢)", en: "silky hair" }, { ja: "濡れ髪", en: "wet hair" }
    ],
    "ヘアアレンジ (Arrangement)": [
      { ja: "三つ編み (一本)", en: "single braid" }, { ja: "おさげ (二本)", en: "braids" },
      { ja: "編み込み", en: "french braid" }, { ja: "カチューシャ編み", en: "crown braid" },
      { ja: "お団子ヘア", en: "hair bun" }, { ja: "シニヨン (二つ)", en: "double bun" },
      { ja: "ハーフアップ", en: "half updo" }, { ja: "サイドテール", en: "side pony" },
      { ja: "アップヘア", en: "updo" }
    ],
    "髪の動き・状態 (Motion & State)": [
      { ja: "風になびく", en: "windblown hair" }, { ja: "浮遊する髪", en: "floating hair" },
      { ja: "顔にかかる", en: "hair over face" }, { ja: "肩にかかる", en: "hair over shoulder" },
      { ja: "広がる髪", en: "spread hair" }
    ],
    "アニメ的表現・特徴 (Anime Tropes)": [
      { ja: "アホ毛", en: "ahoge" }, { ja: "アンテナ (二本)", en: "antenna hair" },
      { ja: "ドリルヘアー", en: "drill hair" }, { ja: "動物耳風の髪", en: "hair ears" },
      { ja: "ハート型アホ毛", en: "heart ahoge" }
    ],
    // 髪飾りカテゴリは削除 (accessories.v1.jsへ移動)
    
    "単色・基本カラー (Simple Colors)": [
      { ja: "金髪", en: "blonde hair" }, { ja: "黒髪", en: "black hair" }, { ja: "茶髪", en: "brown hair" },
      { ja: "銀髪", en: "silver hair" }, { ja: "白髪", en: "white hair" }, { ja: "赤髪", en: "red hair" },
      { ja: "青髪", en: "blue hair" }, { ja: "ピンク髪", en: "pink hair" }, { ja: "紫髪", en: "purple hair" },
      { ja: "緑髪", en: "green hair" }, { ja: "オレンジ髪", en: "orange hair" }, { ja: "グレー髪", en: "grey hair" }
    ]
  };

  function createBuilderUI() {
    const wrapper = document.createElement('div');
    wrapper.style.padding = "10px";
    wrapper.style.marginBottom = "15px";
    wrapper.style.backgroundColor = "#f0f8ff";
    wrapper.style.border = "1px solid #cceeff";
    wrapper.style.borderRadius = "6px";
    
    const title = document.createElement('div');
    title.textContent = "🛠️ カスタムヘアカラー・ビルダー";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "8px";
    title.style.color = "#005580";
    wrapper.appendChild(title);
    
    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.gap = "8px";
    container.style.flexWrap = "wrap";
    container.style.alignItems = "center";
    
    const baseSel = document.createElement('select');
    baseSel.id = "hair-base-color";
    BUILDER_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.val ? `${c.ja} (${c.en})` : "ベース色: 指定なし";
      opt.dataset.ja = c.ja;
      baseSel.appendChild(opt);
    });

    const subSel = document.createElement('select');
    subSel.id = "hair-sub-color";
    BUILDER_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.val ? `${c.ja} (${c.en})` : "アクセント色: 指定なし";
      opt.dataset.ja = c.ja;
      subSel.appendChild(opt);
    });

    const styleSel = document.createElement('select');
    styleSel.id = "hair-style-method";
    BUILDER_STYLES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.val;
      opt.dataset.format = s.format;
      opt.dataset.format_ja = s.format_ja;
      opt.textContent = s.label;
      styleSel.appendChild(opt);
    });

    const enableLabel = document.createElement('label');
    enableLabel.style.marginLeft = "auto";
    enableLabel.style.display = "flex";
    enableLabel.style.alignItems = "center";
    enableLabel.style.fontSize = "0.9em";
    const enableCb = document.createElement('input');
    enableCb.type = "checkbox";
    enableCb.id = "hair-builder-enable";
    enableLabel.appendChild(enableCb);
    enableLabel.append(" ビルダーを有効化");

    container.appendChild(baseSel);
    container.appendChild(document.createTextNode("+"));
    container.appendChild(subSel);
    container.appendChild(document.createTextNode("で"));
    container.appendChild(styleSel);
    container.appendChild(enableLabel);
    wrapper.appendChild(container);

    const preview = document.createElement('div');
    preview.id = "hair-builder-preview";
    preview.style.marginTop = "8px";
    preview.style.fontSize = "0.85em";
    preview.style.color = "#666";
    preview.textContent = "出力タグ: (選択してください)";
    wrapper.appendChild(preview);

    const updatePreview = () => {
      if (!enableCb.checked) {
        preview.textContent = "出力タグ: (無効)";
        preview.style.color = "#ccc";
        return;
      }
      const base = baseSel.value;
      const sub = subSel.value;
      const format = styleSel.options[styleSel.selectedIndex].dataset.format;
      
      if (base && sub) {
        const tag = format.replace('{base}', base).replace('{sub}', sub);
        preview.textContent = `出力タグ: ${tag}`;
        preview.style.color = "#008800";
      } else {
        preview.textContent = "出力タグ: (ベース色とアクセント色を選択してください)";
        preview.style.color = "#d9534f";
      }
    };

    [baseSel, subSel, styleSel, enableCb].forEach(el => el.addEventListener('change', updatePreview));
    return wrapper;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-hair") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "hair-v4-builder";

      section.appendChild(createBuilderUI());

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        
        section.appendChild(details);
      });

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) dict[item.en] = item.ja;
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      const enable = document.getElementById("hair-builder-enable");
      
      if (enable && enable.checked) {
        const baseSel = document.getElementById("hair-base-color");
        const subSel = document.getElementById("hair-sub-color");
        const styleSel = document.getElementById("hair-style-method");

        const baseVal = baseSel.value;
        const subVal = subSel.value;
        
        if (baseVal && subVal) {
          const selectedOpt = styleSel.options[styleSel.selectedIndex];
          const format = selectedOpt.dataset.format;
          const enTag = format.replace('{base}', baseVal).replace('{sub}', subVal);
          tags.push(enTag);
        }
      }

      document.querySelectorAll(".hair-v4-builder .hair-cat input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.hair.v5.js ---
(function(){
  "use strict";
  const VERSION = 5; // 拡張パックA (髪色・質感・グラデ)
  const KEY = "hair";

  const HAIR_DATA = {
    "🎨 髪色・カラー詳細 (Hair Colors)": [
      { ja: "ブロンド (金髪)", en: "blonde hair" }, { ja: "プラチナブロンド", en: "platinum blonde hair" },
      { ja: "黒髪", en: "black hair" }, { ja: "茶髪 (ブラウン)", en: "brown hair" },
      { ja: "赤髪 (レッド)", en: "red hair" }, { ja: "真紅 (クリムゾン)", en: "crimson hair" },
      { ja: "青髪 (ブルー)", en: "blue hair" }, { ja: "水色 (ライトブルー)", en: "light blue hair" },
      { ja: "ピンク髪", en: "pink hair" }, { ja: "紫髪 (パープル)", en: "purple hair" },
      { ja: "緑髪 (グリーン)", en: "green hair" }, { ja: "銀髪 (シルバー)", en: "silver hair" },
      { ja: "白髪 (ホワイト)", en: "white hair" }, { ja: "オレンジ髪", en: "orange hair" }
    ],
    "🌈 特殊カラー・染め (Special Colors)": [
      { ja: "グラデーション", en: "gradient hair" }, { ja: "マルチカラー", en: "multicolored hair" },
      { ja: "インナーカラー", en: "inner color hair" }, { ja: "メッシュ (Streaked)", en: "streaked hair" },
      { ja: "ツートンカラー", en: "two-tone hair" }, { ja: "スプリットカラー (左右)", en: "split-color hair" },
      { ja: "レインボー", en: "rainbow hair" }, { ja: "毛先のみ色付き", en: "colored tips" },
      { ja: "アホ毛 (色違い)", en: "colored ahoge" }
    ],
    "✨ 質感・状態 (Texture & State)": [
      { ja: "ツヤツヤ (天使の輪)", en: "shiny hair" }, { ja: "光沢 (Glossy)", en: "glossy hair" },
      { ja: "サラサラ (Silky)", en: "silky hair" }, { ja: "濡れた髪", en: "wet hair" },
      { ja: "ボサボサ (Messy)", en: "messy hair" }, { ja: "寝癖", en: "bed hair" },
      { ja: "ウェーブ (巻き髪)", en: "wavy hair" }, { ja: "カーリーヘア", en: "curly hair" },
      { ja: "直毛 (ストレート)", en: "straight hair" }, { ja: "フローティング (浮遊)", en: "floating hair" }
    ]
  };

  // 翻訳辞書
  const DICT = {
    "blonde hair": "金髪", "platinum blonde hair": "プラチナブロンド",
    "black hair": "黒髪", "brown hair": "茶髪", "red hair": "赤髪", "crimson hair": "真紅の髪",
    "blue hair": "青髪", "light blue hair": "水色の髪", "pink hair": "ピンク髪",
    "purple hair": "紫髪", "green hair": "緑髪", "silver hair": "銀髪",
    "white hair": "白髪", "orange hair": "オレンジ髪",
    "gradient hair": "グラデーション髪", "multicolored hair": "マルチカラー髪",
    "inner color hair": "インナーカラー", "streaked hair": "メッシュ髪",
    "two-tone hair": "ツートンカラー", "split-color hair": "スプリットカラー",
    "rainbow hair": "虹色髪", "colored tips": "毛先カラー", "colored ahoge": "色違いアホ毛",
    "shiny hair": "ツヤ髪", "glossy hair": "光沢髪", "silky hair": "サラサラ髪",
    "wet hair": "濡れた髪", "messy hair": "ボサボサ髪", "bed hair": "寝癖",
    "wavy hair": "ウェーブヘア", "curly hair": "カーリーヘア",
    "straight hair": "ストレートヘア", "floating hair": "浮遊する髪"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-hair");
      // もしv4以前が作成したコンテナがなければ作成する
      if (!parent) {
        parent = document.createElement("div");
        parent.id = "list-hair";
        parent.className = "section";
        const h2 = document.createElement("h2");
        h2.textContent = "3. ヘアスタイル (Hair)"; // 順序番号はCoreに依存するが仮置き
        parent.appendChild(h2);
        document.getElementById("sections").appendChild(parent);
      }

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "hair-v5-container";
      
      Object.entries(HAIR_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      // 既存のコンテンツがあればその下に追加
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v5-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.hair.v6.js ---
(function(){
  "use strict";
  const VERSION = 6; // 拡張パックC (パーツ別・構造組み立て)
  const KEY = "hair";

  const HAIR_PARTS = {
    "💇‍♀️ 前髪パーツ (Front / Bangs)": [
      { ja: "パッツン (Blunt)", en: "blunt bangs" },
      { ja: "Ｍ字バング", en: "hair between eyes" },
      { ja: "センター分け", en: "parted bangs" },
      { ja: "片目隠れ (メカクレ)", en: "hair over one eye" },
      { ja: "目隠れ (両目)", en: "hair over eyes" },
      { ja: "デコ出し (All Back)", en: "forehead" },
      { ja: "斜め分け", en: "swept bangs" },
      { ja: "姫カット (サイド)", en: "hime cut" },
      { ja: "アシンメトリー", en: "asymmetrical bangs" },
      { ja: "長い前髪", en: "long bangs" }
    ],
    "💇‍♀️ 後ろ髪・ベース (Back / Base)": [
      { ja: "ショート", en: "short hair" },
      { ja: "ミディアム", en: "medium hair" },
      { ja: "ロング", en: "long hair" },
      { ja: "スーパーロング", en: "very long hair" },
      { ja: "ボブ", en: "bob cut" },
      { ja: "ウルフ", en: "wolf cut" },
      { ja: "シャギー", en: "shaggy hair" },
      { ja: "ストレート", en: "straight hair" },
      { ja: "巻き髪 (カール)", en: "curly hair" },
      { ja: "ウェーブ", en: "wavy hair" }
    ],
    "🎀 結び髪・エクステ (Tails & Buns)": [
      { ja: "ポニーテール", en: "ponytail" },
      { ja: "サイドテール", en: "side ponytail" },
      { ja: "ツインテール", en: "twintails" },
      { ja: "ローツインテ", en: "low twintails" },
      { ja: "ツーサイドアップ", en: "two side up" },
      { ja: "お団子 (バン)", en: "hair bun" },
      { ja: "シニヨン (二つ)", en: "double bun" },
      { ja: "三つ編み (一本)", en: "single braid" },
      { ja: "おさげ (二本)", en: "braids" },
      { ja: "ハーフアップ", en: "half updo" }
    ],
    "⚡ アクセント・アホ毛 (Ahoge & Extra)": [
      { ja: "アホ毛 (1本)", en: "ahoge" },
      { ja: "アンテナ (2本)", en: "antenna hair" },
      { ja: "ハート型アホ毛", en: "heart ahoge" },
      { ja: "巨大アホ毛", en: "huge ahoge" },
      { ja: "はね髪", en: "messy hair" },
      { ja: "インテーク (前髪の立体感)", en: "hair intakes" },
      { ja: "もみあげ", en: "sidelocks" },
      { ja: "ドリルヘアー", en: "drill hair" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(HAIR_PARTS).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-hair");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "hair-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        // 構造ビルダーは詳細設定なので閉じておく
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#005580;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "hair-v6-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ パーツ別・構造指定 (Structure) ▼";
      root.appendChild(sep);

      Object.entries(HAIR_PARTS).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".hair-v6-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.hair.v7.js ---
(function(){
  "use strict";
  const VERSION = 7; // 童話・昔話キャラ髪型特化コレクション
  const KEY = "hair";
  const COLLECTION_ID = "hair_fairytale_folktale_v7";

  const FAIRYTALE_HAIR = [
    {
      title: "🌟 完成セット (Core Sets)",
      role: "complete_set",
      items: [
        {
          id: "ft_hair_complete_glass_slipper_updo",
          ja: "ガラスの靴姫風：高め丸アップ",
          en: "Glass-slipper princess updo",
          val: "hairstyle focus, neat high rounded updo, smooth swept-back crown, soft side-swept bangs, elegant fairytale ballroom hair shape",
          linked_ids: ["ft_hair_base_high_rounded_updo", "ft_hair_custom_side_swept_bangs", "ft_hair_custom_smooth_swept_crown", "ft_hair_setting_ballroom_princess_shape"]
        },
        {
          id: "ft_hair_complete_short_storybook_bob",
          ja: "白雪姫風：短め丸ボブ",
          en: "Short storybook princess bob",
          val: "hairstyle focus, short rounded bob, curled-under hair ends, soft side-parted bangs, tidy storybook princess hair shape",
          linked_ids: ["ft_hair_base_short_rounded_bob", "ft_hair_custom_curled_under_ends", "ft_hair_custom_soft_side_part", "ft_hair_setting_storybook_princess_shape"]
        },
        {
          id: "ft_hair_complete_tower_princess_braid",
          ja: "塔の姫風：超ロング三つ編み",
          en: "Tower princess long braid",
          val: "hairstyle focus, extremely long thick braid, loose face-framing strands, soft woven braid texture, fairytale tower princess hair shape",
          linked_ids: ["ft_hair_base_extremely_long_braid", "ft_hair_custom_loose_face_framing", "ft_hair_custom_thick_woven_braid", "ft_hair_setting_storybook_princess_shape"]
        },
        {
          id: "ft_hair_complete_sleeping_princess_waves",
          ja: "眠り姫風：流れる長髪ウェーブ",
          en: "Sleeping princess soft waves",
          val: "hairstyle focus, long softly flowing waves, gentle side part, smooth crown volume, graceful fairytale princess hair shape",
          linked_ids: ["ft_hair_base_long_soft_waves", "ft_hair_custom_gentle_side_part", "ft_hair_custom_smooth_swept_crown", "ft_hair_setting_elegant_princess_shape"]
        },
        {
          id: "ft_hair_complete_forest_girl_braids",
          ja: "赤ずきん風：低めツイン三つ編み",
          en: "Forest girl low twin braids",
          val: "hairstyle focus, low twin braids, simple village girl braids, soft short bangs, tidy tied braid ends, folktale forest girl hair shape",
          linked_ids: ["ft_hair_base_low_twin_braids", "ft_hair_custom_soft_short_bangs", "ft_hair_custom_tidy_braid_ends", "ft_hair_setting_rustic_village_shape"]
        },
        {
          id: "ft_hair_complete_court_princess_hime",
          ja: "かぐや姫風：姫カット長髪",
          en: "Ancient court princess hime cut",
          val: "hairstyle focus, very long straight hair, hime cut sidelocks, blunt bangs, smooth traditional court princess hair shape",
          linked_ids: ["ft_hair_base_straight_hime_cut", "ft_hair_custom_blunt_bangs", "ft_hair_custom_long_sidelocks", "ft_hair_setting_ancient_court_shape"]
        },
        {
          id: "ft_hair_complete_regal_villain_updo",
          ja: "女王・継母風：鋭い高めアップ",
          en: "Regal villainess sharp updo",
          val: "hairstyle focus, sharp high updo, sleek pulled-back hairline, sculpted crown volume, severe regal fairytale villainess hair shape",
          linked_ids: ["ft_hair_base_sharp_high_updo", "ft_hair_custom_sleek_hairline", "ft_hair_custom_sculpted_crown_volume", "ft_hair_setting_regal_villain_shape"]
        },
        {
          id: "ft_hair_complete_folktale_witch_messy",
          ja: "森の魔女・山姥風：乱れ長髪",
          en: "Folktale witch messy long hair",
          val: "hairstyle focus, wild messy long hair, uneven flyaway strands, rough loose hair shape, old folktale witch hair silhouette",
          linked_ids: ["ft_hair_base_wild_messy_long", "ft_hair_custom_flyaway_strands", "ft_hair_custom_uneven_layers", "ft_hair_setting_folktale_witch_shape"]
        },
        {
          id: "ft_hair_complete_folktale_hero_topknot",
          ja: "昔話の若者風：短髪＋小さな髷",
          en: "Folktale hero short topknot",
          val: "hairstyle focus, short swept-back hair, small traditional topknot, neat simple folktale hero hair shape",
          linked_ids: ["ft_hair_base_short_swept_back", "ft_hair_custom_small_topknot", "ft_hair_custom_clean_hairline", "ft_hair_setting_folktale_hero_shape"]
        }
      ]
    },
    {
      title: "🧱 ベース髪型 (Base Shapes)",
      role: "base",
      items: [
        { id: "ft_hair_base_high_rounded_updo", ja: "高め丸アップ", en: "High rounded updo", val: "high rounded updo, hair gathered high, rounded bun-like silhouette" },
        { id: "ft_hair_base_short_rounded_bob", ja: "短め丸ボブ", en: "Short rounded bob", val: "short rounded bob, soft bob silhouette, compact storybook bob cut" },
        { id: "ft_hair_base_extremely_long_braid", ja: "超ロング三つ編み", en: "Extremely long braid", val: "extremely long braid, thick single braid, long woven hair" },
        { id: "ft_hair_base_long_soft_waves", ja: "流れる長髪ウェーブ", en: "Long soft waves", val: "long softly flowing wavy hair, gentle waves, smooth long hair silhouette" },
        { id: "ft_hair_base_low_twin_braids", ja: "低めツイン三つ編み", en: "Low twin braids", val: "low twin braids, two simple braids, braids tied near the shoulders" },
        { id: "ft_hair_base_straight_hime_cut", ja: "姫カット長髪", en: "Straight hime cut", val: "very long straight hair, hime cut sidelocks, straight smooth hair fall" },
        { id: "ft_hair_base_sharp_high_updo", ja: "鋭い高めアップ", en: "Sharp high updo", val: "sharp high updo, tall sculpted updo, severe pulled-up hair silhouette" },
        { id: "ft_hair_base_wild_messy_long", ja: "乱れ長髪", en: "Wild messy long hair", val: "wild messy long hair, loose uneven hair mass, rough untamed hair silhouette" },
        { id: "ft_hair_base_short_swept_back", ja: "短髪オールバック寄り", en: "Short swept-back hair", val: "short swept-back hair, neat compact hair, simple traditional short hair shape" },
        { id: "ft_hair_base_low_chignon", ja: "低めシニヨン", en: "Low chignon", val: "low chignon, hair gathered at the nape, modest rounded bun shape" }
      ]
    },
    {
      title: "✂️ 前髪・輪郭カスタム (Bangs / Detail)",
      role: "customize",
      items: [
        { id: "ft_hair_custom_side_swept_bangs", ja: "流れる斜め前髪", en: "Side-swept bangs", val: "soft side-swept bangs, graceful fringe curve" },
        { id: "ft_hair_custom_smooth_swept_crown", ja: "頭頂部なめらか流し", en: "Smooth swept crown", val: "smooth swept-back crown, clean crown volume, polished hairline flow" },
        { id: "ft_hair_custom_curled_under_ends", ja: "内巻き毛先", en: "Curled-under ends", val: "curled-under hair ends, rounded inward bob tips" },
        { id: "ft_hair_custom_soft_side_part", ja: "柔らかい横分け", en: "Soft side part", val: "soft side part, gentle parted fringe" },
        { id: "ft_hair_custom_loose_face_framing", ja: "顔まわり後れ毛", en: "Loose face-framing strands", val: "loose face-framing strands, soft wisps around the face" },
        { id: "ft_hair_custom_thick_woven_braid", ja: "太い編み目", en: "Thick woven braid", val: "thick woven braid texture, clearly braided hair sections" },
        { id: "ft_hair_custom_gentle_side_part", ja: "上品なサイドパート", en: "Gentle side part", val: "gentle side part, elegant parted hairline" },
        { id: "ft_hair_custom_soft_short_bangs", ja: "短め柔らか前髪", en: "Soft short bangs", val: "soft short bangs, gentle compact fringe" },
        { id: "ft_hair_custom_tidy_braid_ends", ja: "整った三つ編み先", en: "Tidy braid ends", val: "tidy braid ends, neat tied braid tips" },
        { id: "ft_hair_custom_blunt_bangs", ja: "ぱっつん前髪", en: "Blunt bangs", val: "blunt bangs, straight-cut fringe" },
        { id: "ft_hair_custom_long_sidelocks", ja: "長い姫毛サイド", en: "Long sidelocks", val: "long straight sidelocks, face-framing hime cut side hair" },
        { id: "ft_hair_custom_sleek_hairline", ja: "鋭い生え際流し", en: "Sleek hairline", val: "sleek pulled-back hairline, sharp clean forehead frame" },
        { id: "ft_hair_custom_sculpted_crown_volume", ja: "彫刻的な頭頂ボリューム", en: "Sculpted crown volume", val: "sculpted crown volume, structured high hair shape" },
        { id: "ft_hair_custom_flyaway_strands", ja: "乱れた後れ毛", en: "Flyaway strands", val: "uneven flyaway strands, stray loose hair wisps" },
        { id: "ft_hair_custom_uneven_layers", ja: "不揃いレイヤー", en: "Uneven layers", val: "uneven hair layers, rough irregular hair edges" },
        { id: "ft_hair_custom_small_topknot", ja: "小さな髷", en: "Small topknot", val: "small traditional topknot, compact tied hair knot" },
        { id: "ft_hair_custom_clean_hairline", ja: "清潔な額まわり", en: "Clean hairline", val: "clean hairline, neatly arranged forehead hair" }
      ]
    },
    {
      title: "🎭 童話らしさ補助 (Hairstyle Mood)",
      role: "setting",
      items: [
        { id: "ft_hair_setting_ballroom_princess_shape", ja: "舞踏会プリンセス髪型", en: "Ballroom princess hair shape", val: "elegant ballroom princess hairstyle, polished fairytale updo shape" },
        { id: "ft_hair_setting_storybook_princess_shape", ja: "絵本の姫髪型", en: "Storybook princess hair shape", val: "storybook princess hairstyle, clean iconic fairytale hair silhouette" },
        { id: "ft_hair_setting_elegant_princess_shape", ja: "上品プリンセス髪型", en: "Elegant princess hair shape", val: "elegant princess hairstyle, graceful smooth hair silhouette" },
        { id: "ft_hair_setting_rustic_village_shape", ja: "村娘・森の少女髪型", en: "Rustic village girl hair shape", val: "rustic village girl hairstyle, simple practical folktale braid shape" },
        { id: "ft_hair_setting_ancient_court_shape", ja: "古典宮廷姫髪型", en: "Ancient court noble hair shape", val: "ancient court noble hairstyle, formal straight traditional hair silhouette" },
        { id: "ft_hair_setting_regal_villain_shape", ja: "女王・悪役髪型", en: "Regal villainess hair shape", val: "regal villainess hairstyle, severe elegant fairytale hair silhouette" },
        { id: "ft_hair_setting_folktale_witch_shape", ja: "昔話の魔女髪型", en: "Folktale witch hair shape", val: "folktale witch hairstyle, rough mysterious messy hair silhouette" },
        { id: "ft_hair_setting_folktale_hero_shape", ja: "昔話の若者髪型", en: "Folktale hero hair shape", val: "folktale hero hairstyle, neat simple traditional hair silhouette" },
        { id: "ft_hair_setting_hairstyle_focus", ja: "髪型優先補助", en: "Hairstyle focus helper", val: "hairstyle focus, hair shape priority, clear hair silhouette" }
      ]
    }
  ];

  const DICT = {};
  FAIRYTALE_HAIR.forEach(group => {
    group.items.forEach(item => {
      if (item.val && item.ja) DICT[item.val] = item.ja;
    });
  });

  function ensureArray(v) {
    if (!v) return [];
    if (Array.isArray(v)) return v;
    return [String(v)];
  }

  function parseJsonArrayAttr(raw) {
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function openAncestorDetails(node) {
    let cur = node;
    while (cur) {
      if (cur.tagName && String(cur.tagName).toLowerCase() === "details") cur.open = true;
      cur = cur.parentElement;
    }
  }

  function applyCheckboxVisual(cb) {
    const label = cb && cb.parentElement && cb.parentElement.tagName && cb.parentElement.tagName.toLowerCase() === "label" ? cb.parentElement : null;
    if (!label) return;
    if (cb.checked) {
      label.style.background = "rgba(111, 76, 255, 0.08)";
      label.style.borderColor = "rgba(111, 76, 255, 0.35)";
    } else {
      label.style.background = "#fff";
      label.style.borderColor = "rgba(0,0,0,0.10)";
    }
  }

  function setCheckboxState(cb, checked) {
    if (!cb) return;
    cb.checked = !!checked;
    applyCheckboxVisual(cb);
  }

  function findCheckboxById(root, id) {
    if (!root || !id) return null;
    return root.querySelector('input.hair-v7-cb[data-pack-id="' + String(id).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"]');
  }

  function clearCollectionRoles(root, roles, exceptId) {
    const boxes = root.querySelectorAll('input.hair-v7-cb[data-collection-id="' + COLLECTION_ID + '"]');
    boxes.forEach(cb => {
      const role = cb.getAttribute("data-collection-role") || "";
      const packId = cb.getAttribute("data-pack-id") || "";
      if (exceptId && packId === exceptId) return;
      if (roles.indexOf(role) !== -1) setCheckboxState(cb, false);
    });
  }

  function applyCompleteSetSelection(root, cb) {
    const packId = cb.getAttribute("data-pack-id") || "";
    const linked = parseJsonArrayAttr(cb.getAttribute("data-linked-ids"));

    if (cb.checked) {
      clearCollectionRoles(root, ["complete_set"], packId);
      clearCollectionRoles(root, ["base", "customize", "setting"]);
      setCheckboxState(cb, true);
      openAncestorDetails(cb);
      linked.forEach(id => {
        const target = findCheckboxById(root, id);
        if (!target) return;
        setCheckboxState(target, true);
        openAncestorDetails(target);
      });
    } else {
      setCheckboxState(cb, false);
      linked.forEach(id => {
        const target = findCheckboxById(root, id);
        if (target) setCheckboxState(target, false);
      });
    }

    if (typeof window.generateOutput === "function") window.generateOutput();
  }

  function createItem(item, role) {
    const label = document.createElement("label");
    label.style.cssText =
      "display:flex; gap:8px; align-items:flex-start; padding:8px 9px; border:1px solid rgba(0,0,0,0.10);" +
      "border-radius:10px; background:#fff; cursor:pointer; font-size:0.92em; line-height:1.3; min-width:0;";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "hair-v7-cb";
    cb.style.cssText = "margin-top:2px; width:18px; height:18px; flex:0 0 auto;";
    cb.setAttribute("data-pack-id", item.id);
    cb.setAttribute("data-collection-id", COLLECTION_ID);
    cb.setAttribute("data-collection-role", role || "");
    cb.setAttribute("data-en", item.val || "");
    cb.setAttribute("data-val", item.val || "");
    try { cb.setAttribute("data-tags", JSON.stringify(ensureArray(item.val))); } catch (e) { cb.setAttribute("data-tags", "[]"); }
    try { cb.setAttribute("data-linked-ids", JSON.stringify(ensureArray(item.linked_ids))); } catch (e2) { cb.setAttribute("data-linked-ids", "[]"); }

    const text = document.createElement("span");
    text.style.cssText = "display:flex; flex-direction:column; gap:2px; min-width:0;";
    const title = document.createElement("span");
    title.style.cssText = "font-weight:700; color:#25203a; word-break:keep-all; overflow-wrap:anywhere;";
    title.textContent = item.en ? item.ja + " / " + item.en : item.ja;
    const sub = document.createElement("span");
    sub.style.cssText = "font-size:0.84em; color:rgba(0,0,0,0.56); overflow-wrap:anywhere;";
    sub.textContent = item.val;

    text.appendChild(title);
    text.appendChild(sub);
    label.appendChild(cb);
    label.appendChild(text);
    applyCheckboxVisual(cb);
    return label;
  }

  function createGroup(group) {
    const details = document.createElement("details");
    details.className = "hair-cat hair-v7-group";
    details.style.cssText = "margin:8px 0; border:1px solid #eadfff; border-radius:12px; background:#fff;";
    details.open = false;

    const summary = document.createElement("summary");
    summary.textContent = group.title;
    summary.style.cssText = "font-weight:800; padding:8px 10px; cursor:pointer; background:#f8f4ff; color:#4b2f7f; border-radius:12px;";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:6px;";
    group.items.forEach(item => content.appendChild(createItem(item, group.role)));
    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const parent = document.querySelector("#list-hair") || container;
      if (!parent) return;
      const contentArea = parent.querySelector(".section-content") || parent;

      if (contentArea.querySelector(".hair-v7-fairytale-collection")) return;

      const root = document.createElement("div");
      root.className = "hair-v7-fairytale-collection";
      root.style.cssText = "margin-top:14px;";

      const wrap = document.createElement("details");
      wrap.className = "hair-v7-collection-wrap";
      wrap.open = false;
      wrap.style.cssText = "border:1px solid #ddccff; border-radius:14px; background:#fbf8ff; padding:0; margin:12px 0;";

      const summary = document.createElement("summary");
      summary.textContent = "📚 童話・昔話キャラ髪型特化コレクション v7";
      summary.style.cssText = "font-weight:900; padding:10px 12px; cursor:pointer; color:#3d246d; background:#efe6ff; border-radius:14px;";
      wrap.appendChild(summary);

      const note = document.createElement("div");
      note.style.cssText = "margin:8px 10px; padding:8px 10px; border-radius:10px; background:#fff; color:#5c5470; font-size:0.88em; line-height:1.45;";
      note.textContent = "髪色は既存の髪色棚に任せるため、この特化コレクションは髪型・前髪・輪郭シルエットだけを出力します。";
      wrap.appendChild(note);

      FAIRYTALE_HAIR.forEach(group => wrap.appendChild(createGroup(group)));

      root.addEventListener("change", ev => {
        const target = ev && ev.target;
        if (!target || !target.classList || !target.classList.contains("hair-v7-cb")) return;
        applyCheckboxVisual(target);

        const role = target.getAttribute("data-collection-role") || "";
        if (role === "complete_set") {
          applyCompleteSetSelection(root, target);
          return;
        }

        if (typeof window.generateOutput === "function") window.generateOutput();
      });

      root.appendChild(wrap);
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      const seen = new Set();
      document.querySelectorAll(".hair-v7-fairytale-collection input.hair-v7-cb:checked").forEach(cb => {
        const values = parseJsonArrayAttr(cb.getAttribute("data-tags"));
        values.forEach(v => {
          const tag = String(v || "").trim();
          if (!tag || seen.has(tag)) return;
          seen.add(tag);
          tags.push(tag);
        });
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.hair.v8.js ---
(function(){
  "use strict";
  const VERSION = 8; // アニメキャラ髪型特化コレクション v8.1 増築版
  const KEY = "hair";
  const COLLECTION_ID = "hair_anime_character_styles_v8";

  const ANIME_HAIR = [
  {
    "title": "🌟 完成セット (Role + Visible Base)",
    "role": "complete_set",
    "items": [
      {
        "id": "anime_hair_complete_heroine_soft_medium",
        "ja": "王道ヒロイン（ふんわりミディアム＋顔まわり毛束）",
        "en": "Classic heroine - soft medium with face-framing locks",
        "val": "hairstyle focus, soft medium-length anime hairstyle, airy layered hair, side-swept bangs, face-framing side locks, clear heroine hair silhouette",
        "linked_ids": [
          "anime_hair_base_soft_medium_layered",
          "anime_hair_bangs_side_swept",
          "anime_hair_bangs_face_framing_locks",
          "anime_hair_symbol_airy_layers",
          "anime_hair_shape_clear_heroine"
        ]
      },
      {
        "id": "anime_hair_complete_cool_rival_sleek_long",
        "ja": "クール系ライバル（シャープなストレートロング＋片目隠れ前髪）",
        "en": "Cool rival - sleek long with one-eye fringe",
        "val": "hairstyle focus, sleek long straight anime hairstyle, sharp side bangs, one-eye-covering fringe, clean face-framing strands, sharp rival hair silhouette",
        "linked_ids": [
          "anime_hair_base_sleek_long_straight",
          "anime_hair_bangs_one_eye_fringe",
          "anime_hair_bangs_sharp_side_bangs",
          "anime_hair_shape_sharp_rival",
          "anime_hair_symbol_clean_strands"
        ]
      },
      {
        "id": "anime_hair_complete_energetic_protagonist_high_pony",
        "ja": "元気系主人公（高めポニーテール＋跳ね毛）",
        "en": "Energetic protagonist - high ponytail with bouncy tips",
        "val": "hairstyle focus, high ponytail anime hairstyle, bouncy outward hair tips, large ahoge, dynamic layered bangs, lively protagonist hair silhouette",
        "linked_ids": [
          "anime_hair_base_high_ponytail",
          "anime_hair_symbol_large_ahoge",
          "anime_hair_symbol_outward_tips",
          "anime_hair_bangs_dynamic_layered",
          "anime_hair_shape_dynamic_motion"
        ]
      },
      {
        "id": "anime_hair_complete_magical_twin_tails",
        "ja": "魔法少女系（ツインテール＋丸いサイドボリューム）",
        "en": "Magical girl - twin tails with round side volume",
        "val": "hairstyle focus, twin tails anime hairstyle, round side hair volume, soft curled hair tips, cute symmetrical magical girl hair silhouette",
        "linked_ids": [
          "anime_hair_base_round_twin_tails",
          "anime_hair_symbol_round_side_volume",
          "anime_hair_symbol_soft_curled_tips",
          "anime_hair_shape_symmetrical_cute",
          "anime_hair_bangs_soft_parted"
        ]
      },
      {
        "id": "anime_hair_complete_ojousama_drill_curls",
        "ja": "お嬢様系（縦ロール風サイドカール＋整った前髪）",
        "en": "Ojousama - drill-like side curls with tidy bangs",
        "val": "hairstyle focus, elegant side drill curls, tidy straight bangs, polished side curls, refined ojousama anime hair silhouette",
        "linked_ids": [
          "anime_hair_base_side_drill_curls",
          "anime_hair_bangs_tidy_straight",
          "anime_hair_symbol_polished_curls",
          "anime_hair_shape_refined_elegant",
          "anime_hair_bangs_face_framing_locks"
        ]
      },
      {
        "id": "anime_hair_complete_quiet_heavy_bob",
        "ja": "無口系ヒロイン（重めボブ＋目にかかる前髪）",
        "en": "Quiet heroine - heavy bob with eye-grazing bangs",
        "val": "hairstyle focus, heavy rounded bob anime hairstyle, long bangs partly covering the eyes, inward curled ends, quiet compact hair silhouette",
        "linked_ids": [
          "anime_hair_base_heavy_rounded_bob",
          "anime_hair_bangs_eye_grazing",
          "anime_hair_symbol_inward_ends",
          "anime_hair_shape_quiet_compact",
          "anime_hair_symbol_soft_hair_mass"
        ]
      },
      {
        "id": "anime_hair_complete_shounen_spiky_short",
        "ja": "少年漫画系主人公（ツンツンショート＋外ハネ）",
        "en": "Shounen protagonist - spiky short with outward tips",
        "val": "hairstyle focus, spiky short anime hairstyle, outward flipped hair tips, sharp hair spikes, energetic heroic hair silhouette",
        "linked_ids": [
          "anime_hair_base_spiky_short",
          "anime_hair_symbol_sharp_spikes",
          "anime_hair_symbol_outward_tips",
          "anime_hair_bangs_dynamic_layered",
          "anime_hair_shape_heroic_spiky"
        ]
      },
      {
        "id": "anime_hair_complete_near_future_asym_bob",
        "ja": "近未来系キャラ（非対称ボブ＋片側ロング）",
        "en": "Near-future character - asymmetrical bob with one long side",
        "val": "hairstyle focus, asymmetrical bob anime hairstyle, one side longer hair lock, sharp angled bangs, sleek futuristic hair silhouette",
        "linked_ids": [
          "anime_hair_base_asymmetrical_bob",
          "anime_hair_bangs_long_asymmetrical",
          "anime_hair_symbol_clean_strands",
          "anime_hair_shape_sleek_future",
          "anime_hair_bangs_sharp_side_bangs"
        ]
      },
      {
        "id": "anime_hair_complete_childhood_friend_side_pony",
        "ja": "幼なじみ系（低めサイドポニー＋やわらか前髪）",
        "en": "Childhood friend - low side ponytail with soft bangs",
        "val": "hairstyle focus, low side ponytail anime hairstyle, soft parted bangs, gentle face-framing strands, friendly everyday hair silhouette",
        "linked_ids": [
          "anime_hair_base_low_side_ponytail",
          "anime_hair_bangs_soft_parted",
          "anime_hair_bangs_face_framing_locks",
          "anime_hair_shape_friendly_everyday",
          "anime_hair_symbol_soft_hair_mass"
        ]
      },
      {
        "id": "anime_hair_complete_androgynous_layered_short",
        "ja": "中性的主人公（レイヤーショート＋長め前髪）",
        "en": "Androgynous protagonist - layered short with longer bangs",
        "val": "hairstyle focus, layered short anime hairstyle, longer soft bangs, light nape layers, androgynous clean hair silhouette",
        "linked_ids": [
          "anime_hair_base_layered_short",
          "anime_hair_bangs_long_soft",
          "anime_hair_symbol_light_nape_layers",
          "anime_hair_shape_androgynous_clean",
          "anime_hair_symbol_airy_layers"
        ]
      },
      {
        "id": "anime_hair_complete_tsundere_two_side_up",
        "ja": "ツンデレ系（高めツーサイドアップ＋小さな跳ね毛）",
        "en": "Tsundere - high two-side-up with small ahoge",
        "val": "hairstyle focus, high two-side-up anime hairstyle, small ahoge, sharp side bangs, perky outward hair tips, expressive tsundere hair silhouette",
        "linked_ids": [
          "anime_hair_base_high_two_side_up",
          "anime_hair_symbol_small_ahoge",
          "anime_hair_symbol_outward_tips",
          "anime_hair_bangs_sharp_side_bangs",
          "anime_hair_shape_expressive_perky"
        ]
      },
      {
        "id": "anime_hair_complete_mysterious_very_long",
        "ja": "神秘系キャラ（超ロングストレート＋額見せ前髪）",
        "en": "Mysterious character - very long straight with open forehead",
        "val": "hairstyle focus, very long straight anime hairstyle, open forehead part, smooth falling hair sheets, mysterious elegant hair silhouette",
        "linked_ids": [
          "anime_hair_base_very_long_straight",
          "anime_hair_bangs_open_forehead",
          "anime_hair_symbol_smooth_hair_sheets",
          "anime_hair_shape_mysterious_elegant",
          "anime_hair_symbol_clean_strands"
        ]
      },
      {
        "id": "anime_hair_complete_hime_princess_cut",
        "ja": "姫系キャラ（姫カット＋ぱっつん前髪＋長い姫もみあげ）",
        "en": "Hime character - hime cut with blunt bangs and long sidelocks",
        "val": "hairstyle focus, hime cut anime hairstyle, blunt straight bangs, long hime sidelocks, straight long hair panels, noble princess hair silhouette",
        "linked_ids": [
          "anime_hair_base_hime_cut_long",
          "anime_hair_bangs_blunt_straight",
          "anime_hair_bangs_long_hime_sidelocks",
          "anime_hair_symbol_smooth_hair_sheets",
          "anime_hair_shape_noble_hime"
        ]
      },
      {
        "id": "anime_hair_complete_villainess_half_up_ringlets",
        "ja": "悪役令嬢（ハーフアップ＋縦ロール風サイドカール）",
        "en": "Villainess - half-up with side ringlets",
        "val": "hairstyle focus, half-up anime hairstyle, elegant side ringlets, curled side locks, lifted crown volume, dramatic noble hair silhouette",
        "linked_ids": [
          "anime_hair_base_half_up_side_ringlets",
          "anime_hair_symbol_polished_curls",
          "anime_hair_symbol_crown_volume",
          "anime_hair_bangs_tidy_straight",
          "anime_hair_shape_dramatic_noble"
        ]
      },
      {
        "id": "anime_hair_complete_imouto_low_twintails",
        "ja": "妹系キャラ（低めツインテール＋丸い毛先）",
        "en": "Younger-sister type - low twin tails with round tips",
        "val": "hairstyle focus, low twin tails anime hairstyle, round hair tips, soft parted bangs, compact cute twin-tail silhouette",
        "linked_ids": [
          "anime_hair_base_low_twin_tails",
          "anime_hair_symbol_round_hair_tips",
          "anime_hair_bangs_soft_parted",
          "anime_hair_shape_compact_cute",
          "anime_hair_symbol_soft_hair_mass"
        ]
      },
      {
        "id": "anime_hair_complete_natural_fluffy_ahoge",
        "ja": "天然系ヒロイン（外ハネミディアム＋大きめアホ毛）",
        "en": "Airheaded heroine - outward medium with large ahoge",
        "val": "hairstyle focus, fluffy outward medium anime hairstyle, large ahoge, loose layered bangs, bouncy outward tips, carefree fluffy hair silhouette",
        "linked_ids": [
          "anime_hair_base_fluffy_outward_medium",
          "anime_hair_symbol_large_ahoge",
          "anime_hair_symbol_outward_tips",
          "anime_hair_bangs_loose_layered",
          "anime_hair_shape_carefree_fluffy"
        ]
      },
      {
        "id": "anime_hair_complete_class_rep_low_braid",
        "ja": "委員長系（低め三つ編み＋整った前髪）",
        "en": "Class representative - low braid with tidy bangs",
        "val": "hairstyle focus, low single braid anime hairstyle, tidy straight bangs, neat side hair, braided texture, serious organized hair silhouette",
        "linked_ids": [
          "anime_hair_base_low_single_braid",
          "anime_hair_bangs_tidy_straight",
          "anime_hair_symbol_braid_texture",
          "anime_hair_shape_neat_organized",
          "anime_hair_symbol_clean_strands"
        ]
      },
      {
        "id": "anime_hair_complete_sports_short_pony",
        "ja": "スポーツ系ヒロイン（短めポニーテール＋軽い後れ毛）",
        "en": "Sports heroine - short ponytail with loose baby hairs",
        "val": "hairstyle focus, short practical ponytail anime hairstyle, loose baby hairs around the face, light nape strands, active sporty hair silhouette",
        "linked_ids": [
          "anime_hair_base_short_sport_ponytail",
          "anime_hair_bangs_loose_baby_hairs",
          "anime_hair_symbol_light_nape_layers",
          "anime_hair_shape_active_sporty",
          "anime_hair_symbol_clean_strands"
        ]
      },
      {
        "id": "anime_hair_complete_boyish_rounded_short",
        "ja": "ボーイッシュ系（丸みショート＋長め前髪）",
        "en": "Boyish character - rounded short with longer bangs",
        "val": "hairstyle focus, rounded short anime hairstyle, longer front bangs, soft nape layers, boyish casual hair silhouette",
        "linked_ids": [
          "anime_hair_base_rounded_short",
          "anime_hair_bangs_long_soft",
          "anime_hair_symbol_light_nape_layers",
          "anime_hair_shape_boyish_casual",
          "anime_hair_symbol_soft_hair_mass"
        ]
      },
      {
        "id": "anime_hair_complete_downer_wolf_layer",
        "ja": "ダウナー系（重めウルフレイヤー＋目にかかる前髪）",
        "en": "Downer character - heavy wolf layer with eye-grazing bangs",
        "val": "hairstyle focus, heavy wolf layered anime hairstyle, eye-grazing bangs, shaggy side layers, low-energy messy hair silhouette",
        "linked_ids": [
          "anime_hair_base_heavy_wolf_layer",
          "anime_hair_bangs_eye_grazing",
          "anime_hair_symbol_shaggy_side_layers",
          "anime_hair_shape_downer_messy",
          "anime_hair_symbol_heavy_layers"
        ]
      },
      {
        "id": "anime_hair_complete_retro_blunt_bob",
        "ja": "レトロ少女（ぱっつんボブ＋内巻きシルエット）",
        "en": "Retro girl - blunt bob with inward silhouette",
        "val": "hairstyle focus, blunt bob anime hairstyle, straight blunt bangs, inward curled bob ends, tidy retro round hair silhouette",
        "linked_ids": [
          "anime_hair_base_blunt_bob",
          "anime_hair_bangs_blunt_straight",
          "anime_hair_symbol_inward_ends",
          "anime_hair_shape_retro_round",
          "anime_hair_symbol_clean_strands"
        ]
      },
      {
        "id": "anime_hair_complete_xianxia_twin_buns",
        "ja": "中華・仙女系（左右お団子＋垂れた長い毛束）",
        "en": "Xianxia/fairy type - twin buns with long falling locks",
        "val": "hairstyle focus, twin hair buns anime hairstyle, long falling side locks, smooth trailing hair strands, graceful fantasy hair silhouette",
        "linked_ids": [
          "anime_hair_base_twin_buns_long_trails",
          "anime_hair_bangs_long_falling_locks",
          "anime_hair_symbol_smooth_trailing_strands",
          "anime_hair_shape_graceful_fantasy",
          "anime_hair_symbol_round_side_volume"
        ]
      },
      {
        "id": "anime_hair_complete_japanese_swordsman_high_tie",
        "ja": "和風剣士系（高め一つ結び＋鋭い流し前髪）",
        "en": "Japanese swordsman type - high single tie with sharp swept bangs",
        "val": "hairstyle focus, high single-tie anime hairstyle, sharp swept bangs, tied-back crown, long trailing pony section, disciplined swordsman hair silhouette",
        "linked_ids": [
          "anime_hair_base_high_single_tie",
          "anime_hair_bangs_sharp_swept",
          "anime_hair_symbol_tied_back_crown",
          "anime_hair_shape_disciplined_sharp",
          "anime_hair_symbol_smooth_trailing_strands"
        ]
      },
      {
        "id": "anime_hair_complete_cyber_step_cut",
        "ja": "サイバー系（段差カット＋非対称サイドロック）",
        "en": "Cyber character - step cut with asymmetrical sidelock",
        "val": "hairstyle focus, step-cut asymmetrical anime hairstyle, angular front locks, uneven side length, clean geometric futuristic hair silhouette",
        "linked_ids": [
          "anime_hair_base_step_cut_asymmetrical",
          "anime_hair_bangs_angular_front_locks",
          "anime_hair_symbol_geometric_edges",
          "anime_hair_shape_geometric_future",
          "anime_hair_bangs_long_asymmetrical"
        ]
      },
      {
        "id": "anime_hair_complete_delinquent_pompadour_short",
        "ja": "不良・ヤンキー系（前髪上げポンパドール風ショート）",
        "en": "Delinquent type - raised pompadour short hair",
        "val": "hairstyle focus, raised pompadour short anime hairstyle, swept-up front hair, exposed forehead, bold angular short hair silhouette",
        "linked_ids": [
          "anime_hair_base_pompadour_short",
          "anime_hair_bangs_swept_up_front",
          "anime_hair_symbol_geometric_edges",
          "anime_hair_shape_bold_delinq",
          "anime_hair_bangs_open_forehead"
        ]
      },
      {
        "id": "anime_hair_complete_gothic_low_twin_drill",
        "ja": "ゴシック少女（低めツインドリル＋重めぱっつん前髪）",
        "en": "Gothic girl - low twin drill curls with heavy blunt bangs",
        "val": "hairstyle focus, low twin drill curls anime hairstyle, heavy blunt bangs, dense spiral side curls, doll-like gothic hair silhouette",
        "linked_ids": [
          "anime_hair_base_low_twin_drill_curls",
          "anime_hair_bangs_heavy_blunt",
          "anime_hair_symbol_dense_spiral_curls",
          "anime_hair_shape_gothic_doll",
          "anime_hair_symbol_polished_curls"
        ]
      },
      {
        "id": "anime_hair_complete_idol_side_tail_curl",
        "ja": "アイドル系（サイドテール＋大きめ毛束カール）",
        "en": "Idol type - side tail with large curled lock",
        "val": "hairstyle focus, high side-tail anime hairstyle, large curled hair lock, lively layered bangs, sparkling idol hair silhouette",
        "linked_ids": [
          "anime_hair_base_high_side_tail",
          "anime_hair_symbol_large_curled_lock",
          "anime_hair_bangs_lively_layered",
          "anime_hair_shape_sparkling_idol",
          "anime_hair_symbol_outward_tips"
        ]
      },
      {
        "id": "anime_hair_complete_doll_blunt_long",
        "ja": "人形系（ぱっつんロング＋均一な毛束）",
        "en": "Doll-like character - blunt long hair with even strands",
        "val": "hairstyle focus, blunt long anime hairstyle, straight blunt bangs, even hair panels, smooth symmetrical doll hair silhouette",
        "linked_ids": [
          "anime_hair_base_blunt_long_even",
          "anime_hair_bangs_blunt_straight",
          "anime_hair_symbol_even_hair_panels",
          "anime_hair_shape_symmetrical_doll",
          "anime_hair_symbol_smooth_hair_sheets"
        ]
      }
    ]
  },
  {
    "title": "🧱 ベース髪型 (Base Hair Shapes)",
    "role": "base",
    "items": [
      {
        "id": "anime_hair_base_soft_medium_layered",
        "ja": "ふんわりミディアムレイヤー",
        "en": "Soft medium layered hair",
        "val": "soft medium-length anime hairstyle, airy layered medium hair"
      },
      {
        "id": "anime_hair_base_sleek_long_straight",
        "ja": "シャープなストレートロング",
        "en": "Sleek long straight hair",
        "val": "sleek long straight anime hairstyle, smooth straight long hair"
      },
      {
        "id": "anime_hair_base_high_ponytail",
        "ja": "高めポニーテール",
        "en": "High ponytail",
        "val": "high ponytail anime hairstyle, hair tied high behind the head"
      },
      {
        "id": "anime_hair_base_round_twin_tails",
        "ja": "丸みツインテール",
        "en": "Round twin tails",
        "val": "twin tails anime hairstyle, rounded twin tail volume"
      },
      {
        "id": "anime_hair_base_side_drill_curls",
        "ja": "縦ロール風サイドカール",
        "en": "Side drill curls",
        "val": "elegant side drill curls, vertical curled side locks"
      },
      {
        "id": "anime_hair_base_heavy_rounded_bob",
        "ja": "重め丸ボブ",
        "en": "Heavy rounded bob",
        "val": "heavy rounded bob anime hairstyle, compact bob hair mass"
      },
      {
        "id": "anime_hair_base_spiky_short",
        "ja": "ツンツンショート",
        "en": "Spiky short hair",
        "val": "spiky short anime hairstyle, short pointed hair tufts"
      },
      {
        "id": "anime_hair_base_asymmetrical_bob",
        "ja": "非対称ボブ",
        "en": "Asymmetrical bob",
        "val": "asymmetrical bob anime hairstyle, uneven left-right bob length"
      },
      {
        "id": "anime_hair_base_low_side_ponytail",
        "ja": "低めサイドポニー",
        "en": "Low side ponytail",
        "val": "low side ponytail anime hairstyle, hair tied low to one side"
      },
      {
        "id": "anime_hair_base_layered_short",
        "ja": "レイヤーショート",
        "en": "Layered short hair",
        "val": "layered short anime hairstyle, light short layered hair"
      },
      {
        "id": "anime_hair_base_high_two_side_up",
        "ja": "高めツーサイドアップ",
        "en": "High two-side-up",
        "val": "high two-side-up anime hairstyle, two small high side pony sections"
      },
      {
        "id": "anime_hair_base_very_long_straight",
        "ja": "超ロングストレート",
        "en": "Very long straight hair",
        "val": "very long straight anime hairstyle, smooth extra-long straight hair"
      },
      {
        "id": "anime_hair_base_hime_cut_long",
        "ja": "姫カットロング",
        "en": "Long hime cut",
        "val": "hime cut anime hairstyle, straight long hair with blunt sidelocks"
      },
      {
        "id": "anime_hair_base_half_up_side_ringlets",
        "ja": "ハーフアップ＋サイド縦ロール",
        "en": "Half-up with side ringlets",
        "val": "half-up anime hairstyle, side ringlets and lifted crown volume"
      },
      {
        "id": "anime_hair_base_low_twin_tails",
        "ja": "低めツインテール",
        "en": "Low twin tails",
        "val": "low twin tails anime hairstyle, hair tied low on both sides"
      },
      {
        "id": "anime_hair_base_fluffy_outward_medium",
        "ja": "外ハネふんわりミディアム",
        "en": "Fluffy outward medium",
        "val": "fluffy outward medium anime hairstyle, medium hair with outward flipped tips"
      },
      {
        "id": "anime_hair_base_low_single_braid",
        "ja": "低め一本三つ編み",
        "en": "Low single braid",
        "val": "low single braid anime hairstyle, hair braided low behind the shoulder"
      },
      {
        "id": "anime_hair_base_short_sport_ponytail",
        "ja": "短めスポーツポニーテール",
        "en": "Short sports ponytail",
        "val": "short practical ponytail anime hairstyle, compact tied-back hair for active motion"
      },
      {
        "id": "anime_hair_base_rounded_short",
        "ja": "丸みショート",
        "en": "Rounded short hair",
        "val": "rounded short anime hairstyle, soft compact short hair shape"
      },
      {
        "id": "anime_hair_base_heavy_wolf_layer",
        "ja": "重めウルフレイヤー",
        "en": "Heavy wolf layer",
        "val": "heavy wolf layered anime hairstyle, shaggy layered hair around the neck"
      },
      {
        "id": "anime_hair_base_blunt_bob",
        "ja": "ぱっつんボブ",
        "en": "Blunt bob",
        "val": "blunt bob anime hairstyle, straight bob cut with clean lower edge"
      },
      {
        "id": "anime_hair_base_twin_buns_long_trails",
        "ja": "左右お団子＋長い垂れ毛束",
        "en": "Twin buns with long trails",
        "val": "twin hair buns anime hairstyle, long falling side locks trailing downward"
      },
      {
        "id": "anime_hair_base_high_single_tie",
        "ja": "高め一つ結び",
        "en": "High single tie",
        "val": "high single-tie anime hairstyle, hair tied high into one trailing section"
      },
      {
        "id": "anime_hair_base_step_cut_asymmetrical",
        "ja": "段差カット非対称ヘア",
        "en": "Step-cut asymmetrical hair",
        "val": "step-cut asymmetrical anime hairstyle, visible layered length steps"
      },
      {
        "id": "anime_hair_base_pompadour_short",
        "ja": "ポンパドール風ショート",
        "en": "Pompadour short hair",
        "val": "raised pompadour short anime hairstyle, swept-up short front hair"
      },
      {
        "id": "anime_hair_base_low_twin_drill_curls",
        "ja": "低めツインドリルカール",
        "en": "Low twin drill curls",
        "val": "low twin drill curls anime hairstyle, two low spiral curled side sections"
      },
      {
        "id": "anime_hair_base_high_side_tail",
        "ja": "高めサイドテール",
        "en": "High side tail",
        "val": "high side-tail anime hairstyle, hair tied high to one side"
      },
      {
        "id": "anime_hair_base_blunt_long_even",
        "ja": "ぱっつんロング均一毛束",
        "en": "Blunt long even hair",
        "val": "blunt long anime hairstyle, straight long hair with even hair panels"
      }
    ]
  },
  {
    "title": "✂️ 前髪・顔まわり (Bangs / Face Frame)",
    "role": "customize",
    "items": [
      {
        "id": "anime_hair_bangs_side_swept",
        "ja": "流し前髪",
        "en": "Side-swept bangs",
        "val": "side-swept bangs, soft diagonal fringe"
      },
      {
        "id": "anime_hair_bangs_face_framing_locks",
        "ja": "顔まわり毛束",
        "en": "Face-framing side locks",
        "val": "face-framing side locks, visible hair strands along the cheeks"
      },
      {
        "id": "anime_hair_bangs_one_eye_fringe",
        "ja": "片目隠れ前髪",
        "en": "One-eye-covering fringe",
        "val": "one-eye-covering fringe, long fringe covering one eye area"
      },
      {
        "id": "anime_hair_bangs_sharp_side_bangs",
        "ja": "鋭い斜め前髪",
        "en": "Sharp side bangs",
        "val": "sharp side bangs, angular diagonal fringe"
      },
      {
        "id": "anime_hair_bangs_dynamic_layered",
        "ja": "動きのあるレイヤー前髪",
        "en": "Dynamic layered bangs",
        "val": "dynamic layered bangs, separated anime fringe locks"
      },
      {
        "id": "anime_hair_bangs_soft_parted",
        "ja": "柔らかい分け前髪",
        "en": "Soft parted bangs",
        "val": "soft parted bangs, gentle separated fringe"
      },
      {
        "id": "anime_hair_bangs_tidy_straight",
        "ja": "整ったまっすぐ前髪",
        "en": "Tidy straight bangs",
        "val": "tidy straight bangs, clean straight fringe line"
      },
      {
        "id": "anime_hair_bangs_eye_grazing",
        "ja": "目にかかる重め前髪",
        "en": "Eye-grazing heavy bangs",
        "val": "long heavy bangs grazing the eyes, soft shadowing fringe"
      },
      {
        "id": "anime_hair_bangs_long_asymmetrical",
        "ja": "長め非対称前髪",
        "en": "Long asymmetrical bangs",
        "val": "long asymmetrical bangs, one side longer front hair lock"
      },
      {
        "id": "anime_hair_bangs_long_soft",
        "ja": "長め柔らか前髪",
        "en": "Long soft bangs",
        "val": "long soft bangs, gentle longer front hair strands"
      },
      {
        "id": "anime_hair_bangs_open_forehead",
        "ja": "額見せ前髪",
        "en": "Open forehead part",
        "val": "open forehead part, parted front hair revealing the forehead"
      },
      {
        "id": "anime_hair_bangs_blunt_straight",
        "ja": "ぱっつん前髪",
        "en": "Blunt straight bangs",
        "val": "blunt straight bangs, straight horizontal fringe line"
      },
      {
        "id": "anime_hair_bangs_long_hime_sidelocks",
        "ja": "長い姫もみあげ",
        "en": "Long hime sidelocks",
        "val": "long hime sidelocks, straight cheek-length to chest-length side locks"
      },
      {
        "id": "anime_hair_bangs_loose_layered",
        "ja": "ゆるいレイヤー前髪",
        "en": "Loose layered bangs",
        "val": "loose layered bangs, soft uneven front hair locks"
      },
      {
        "id": "anime_hair_bangs_loose_baby_hairs",
        "ja": "軽い後れ毛",
        "en": "Loose baby hairs",
        "val": "loose baby hairs around the face, small stray hair strands"
      },
      {
        "id": "anime_hair_bangs_long_falling_locks",
        "ja": "垂れた長い顔横毛束",
        "en": "Long falling side locks",
        "val": "long falling side locks, smooth front-side hair strands hanging downward"
      },
      {
        "id": "anime_hair_bangs_sharp_swept",
        "ja": "鋭い流し前髪",
        "en": "Sharp swept bangs",
        "val": "sharp swept bangs, front hair swept diagonally with pointed tips"
      },
      {
        "id": "anime_hair_bangs_angular_front_locks",
        "ja": "角ばった前髪毛束",
        "en": "Angular front locks",
        "val": "angular front locks, geometric separated front hair strands"
      },
      {
        "id": "anime_hair_bangs_swept_up_front",
        "ja": "前髪上げ",
        "en": "Swept-up front hair",
        "val": "swept-up front hair, raised front hair exposing the forehead"
      },
      {
        "id": "anime_hair_bangs_heavy_blunt",
        "ja": "重めぱっつん前髪",
        "en": "Heavy blunt bangs",
        "val": "heavy blunt bangs, dense straight fringe across the forehead"
      },
      {
        "id": "anime_hair_bangs_lively_layered",
        "ja": "明るいレイヤー前髪",
        "en": "Lively layered bangs",
        "val": "lively layered bangs, separated front hair with upbeat motion"
      }
    ]
  },
  {
    "title": "🌀 アニメ記号カスタム (Anime Hair Symbols)",
    "role": "customize",
    "items": [
      {
        "id": "anime_hair_symbol_large_ahoge",
        "ja": "大きめアホ毛",
        "en": "Large ahoge",
        "val": "large ahoge, expressive single hair antenna"
      },
      {
        "id": "anime_hair_symbol_small_ahoge",
        "ja": "小さなアホ毛",
        "en": "Small ahoge",
        "val": "small ahoge, subtle hair antenna"
      },
      {
        "id": "anime_hair_symbol_hair_intakes",
        "ja": "インテーク風前髪",
        "en": "Hair intakes",
        "val": "hair intakes, stylized curved front hair shapes"
      },
      {
        "id": "anime_hair_symbol_outward_tips",
        "ja": "外ハネ毛先",
        "en": "Outward hair tips",
        "val": "outward flipped hair tips, bouncy hair ends"
      },
      {
        "id": "anime_hair_symbol_inward_ends",
        "ja": "内巻き毛先",
        "en": "Inward curled ends",
        "val": "inward curled hair ends, rounded bob tips"
      },
      {
        "id": "anime_hair_symbol_round_side_volume",
        "ja": "丸いサイドボリューム",
        "en": "Round side volume",
        "val": "round side hair volume, soft rounded side hair mass"
      },
      {
        "id": "anime_hair_symbol_soft_curled_tips",
        "ja": "柔らかい毛先カール",
        "en": "Soft curled tips",
        "val": "soft curled hair tips, gentle curled hair ends"
      },
      {
        "id": "anime_hair_symbol_sharp_spikes",
        "ja": "鋭い毛束スパイク",
        "en": "Sharp hair spikes",
        "val": "sharp hair spikes, pointed anime hair tufts"
      },
      {
        "id": "anime_hair_symbol_clean_strands",
        "ja": "清潔な細い毛束",
        "en": "Clean hair strands",
        "val": "clean separated hair strands, tidy anime hair locks"
      },
      {
        "id": "anime_hair_symbol_polished_curls",
        "ja": "整った巻き髪束",
        "en": "Polished curls",
        "val": "polished curled hair locks, clean spiral curl definition"
      },
      {
        "id": "anime_hair_symbol_soft_hair_mass",
        "ja": "柔らかい髪の塊感",
        "en": "Soft hair mass",
        "val": "soft rounded hair mass, gentle anime hair volume"
      },
      {
        "id": "anime_hair_symbol_light_nape_layers",
        "ja": "軽い襟足レイヤー",
        "en": "Light nape layers",
        "val": "light nape layers, soft short hair at the nape"
      },
      {
        "id": "anime_hair_symbol_airy_layers",
        "ja": "空気感レイヤー",
        "en": "Airy layers",
        "val": "airy layered hair, light floating anime hair layers"
      },
      {
        "id": "anime_hair_symbol_smooth_hair_sheets",
        "ja": "なめらかな面の長髪",
        "en": "Smooth hair sheets",
        "val": "smooth falling hair sheets, clean long hair panels"
      },
      {
        "id": "anime_hair_symbol_crown_volume",
        "ja": "頭頂部の上品ボリューム",
        "en": "Crown volume",
        "val": "lifted crown volume, smooth volume at the top of the hairstyle"
      },
      {
        "id": "anime_hair_symbol_round_hair_tips",
        "ja": "丸い毛先",
        "en": "Round hair tips",
        "val": "round hair tips, softly rounded hair ends"
      },
      {
        "id": "anime_hair_symbol_braid_texture",
        "ja": "三つ編みの編み目",
        "en": "Braid texture",
        "val": "visible braid texture, clear woven hair pattern"
      },
      {
        "id": "anime_hair_symbol_shaggy_side_layers",
        "ja": "ざっくりサイドレイヤー",
        "en": "Shaggy side layers",
        "val": "shaggy side layers, uneven side hair tufts"
      },
      {
        "id": "anime_hair_symbol_heavy_layers",
        "ja": "重めレイヤー",
        "en": "Heavy layers",
        "val": "heavy layered hair, dense layered hair mass"
      },
      {
        "id": "anime_hair_symbol_smooth_trailing_strands",
        "ja": "なめらかな垂れ毛束",
        "en": "Smooth trailing strands",
        "val": "smooth trailing hair strands, long clean falling locks"
      },
      {
        "id": "anime_hair_symbol_tied_back_crown",
        "ja": "結い上げた頭頂部",
        "en": "Tied-back crown",
        "val": "tied-back crown, front hair pulled back into a clean tie"
      },
      {
        "id": "anime_hair_symbol_geometric_edges",
        "ja": "幾何学的な毛先ライン",
        "en": "Geometric hair edges",
        "val": "geometric hair edges, crisp angular hair tips"
      },
      {
        "id": "anime_hair_symbol_dense_spiral_curls",
        "ja": "密なスパイラルカール",
        "en": "Dense spiral curls",
        "val": "dense spiral curls, thick drill-like curled hair locks"
      },
      {
        "id": "anime_hair_symbol_large_curled_lock",
        "ja": "大きめ毛束カール",
        "en": "Large curled lock",
        "val": "large curled hair lock, visible single curled hair section"
      },
      {
        "id": "anime_hair_symbol_even_hair_panels",
        "ja": "均一な長い毛束面",
        "en": "Even hair panels",
        "val": "even hair panels, straight symmetrical long hair sections"
      }
    ]
  },
  {
    "title": "🎬 動き・シルエット補助 (Motion / Silhouette)",
    "role": "setting",
    "items": [
      {
        "id": "anime_hair_shape_clear_heroine",
        "ja": "王道ヒロイン髪型シルエット",
        "en": "Clear heroine hair silhouette",
        "val": "clear heroine hair silhouette, readable soft anime hair shape"
      },
      {
        "id": "anime_hair_shape_sharp_rival",
        "ja": "シャープなライバル髪型シルエット",
        "en": "Sharp rival hair silhouette",
        "val": "sharp rival hair silhouette, sleek angular anime hair shape"
      },
      {
        "id": "anime_hair_shape_dynamic_motion",
        "ja": "動きのある主人公髪型",
        "en": "Dynamic protagonist hair motion",
        "val": "dynamic protagonist hair motion, lively bouncy anime hair silhouette"
      },
      {
        "id": "anime_hair_shape_symmetrical_cute",
        "ja": "左右対称かわいい髪型",
        "en": "Symmetrical cute hair silhouette",
        "val": "symmetrical cute hair silhouette, balanced twin-tail anime hair shape"
      },
      {
        "id": "anime_hair_shape_refined_elegant",
        "ja": "上品で整った髪型",
        "en": "Refined elegant hair silhouette",
        "val": "refined elegant hair silhouette, polished formal anime hair shape"
      },
      {
        "id": "anime_hair_shape_quiet_compact",
        "ja": "静かなコンパクト髪型",
        "en": "Quiet compact hair silhouette",
        "val": "quiet compact hair silhouette, soft closed anime bob shape"
      },
      {
        "id": "anime_hair_shape_heroic_spiky",
        "ja": "主人公らしいツンツン髪型",
        "en": "Heroic spiky hair silhouette",
        "val": "heroic spiky hair silhouette, readable pointed anime short hair"
      },
      {
        "id": "anime_hair_shape_sleek_future",
        "ja": "近未来的なすっきり髪型",
        "en": "Sleek future hair silhouette",
        "val": "sleek futuristic hair silhouette, clean asymmetrical anime hair shape"
      },
      {
        "id": "anime_hair_shape_friendly_everyday",
        "ja": "親しみやすい日常髪型",
        "en": "Friendly everyday hair silhouette",
        "val": "friendly everyday hair silhouette, soft natural anime ponytail shape"
      },
      {
        "id": "anime_hair_shape_androgynous_clean",
        "ja": "中性的で清潔な髪型",
        "en": "Androgynous clean hair silhouette",
        "val": "androgynous clean hair silhouette, light neat anime short hair"
      },
      {
        "id": "anime_hair_shape_expressive_perky",
        "ja": "表情豊かな跳ね髪シルエット",
        "en": "Expressive perky hair silhouette",
        "val": "expressive perky hair silhouette, lively two-side-up anime hair shape"
      },
      {
        "id": "anime_hair_shape_mysterious_elegant",
        "ja": "神秘的で長い髪型",
        "en": "Mysterious elegant hair silhouette",
        "val": "mysterious elegant hair silhouette, smooth very long anime hair shape"
      },
      {
        "id": "anime_hair_shape_noble_hime",
        "ja": "姫系の直線的な高貴シルエット",
        "en": "Noble hime silhouette",
        "val": "noble hime hair silhouette, straight refined princess-like anime hair shape"
      },
      {
        "id": "anime_hair_shape_dramatic_noble",
        "ja": "悪役令嬢風の大きめシルエット",
        "en": "Dramatic noble silhouette",
        "val": "dramatic noble hair silhouette, large elegant curled anime hair shape"
      },
      {
        "id": "anime_hair_shape_compact_cute",
        "ja": "小さく可愛いツイン髪型",
        "en": "Compact cute silhouette",
        "val": "compact cute hair silhouette, low twin-tail anime hair shape"
      },
      {
        "id": "anime_hair_shape_carefree_fluffy",
        "ja": "天然系のふわ跳ねシルエット",
        "en": "Carefree fluffy silhouette",
        "val": "carefree fluffy hair silhouette, loose bouncy anime hair shape"
      },
      {
        "id": "anime_hair_shape_neat_organized",
        "ja": "きちんと整った優等生髪型",
        "en": "Neat organized silhouette",
        "val": "neat organized hair silhouette, serious tidy anime hair shape"
      },
      {
        "id": "anime_hair_shape_active_sporty",
        "ja": "動きやすいスポーツ髪型",
        "en": "Active sporty silhouette",
        "val": "active sporty hair silhouette, practical tied-back anime hair shape"
      },
      {
        "id": "anime_hair_shape_boyish_casual",
        "ja": "ボーイッシュで軽い髪型",
        "en": "Boyish casual silhouette",
        "val": "boyish casual hair silhouette, rounded light anime short hair shape"
      },
      {
        "id": "anime_hair_shape_downer_messy",
        "ja": "ダウナー系の重だるい髪型",
        "en": "Downer messy silhouette",
        "val": "downer messy hair silhouette, heavy shaggy anime hair shape"
      },
      {
        "id": "anime_hair_shape_retro_round",
        "ja": "レトロな丸ボブ髪型",
        "en": "Retro round silhouette",
        "val": "retro round hair silhouette, clean inward bob anime hair shape"
      },
      {
        "id": "anime_hair_shape_graceful_fantasy",
        "ja": "仙女風の優雅な垂れ髪",
        "en": "Graceful fantasy silhouette",
        "val": "graceful fantasy hair silhouette, twin buns with long flowing locks"
      },
      {
        "id": "anime_hair_shape_disciplined_sharp",
        "ja": "和風剣士の引き締まった髪型",
        "en": "Disciplined sharp silhouette",
        "val": "disciplined sharp hair silhouette, tied high anime hair with pointed front locks"
      },
      {
        "id": "anime_hair_shape_geometric_future",
        "ja": "幾何学的なサイバー髪型",
        "en": "Geometric future silhouette",
        "val": "geometric futuristic hair silhouette, angular step-cut anime hair shape"
      },
      {
        "id": "anime_hair_shape_bold_delinq",
        "ja": "前髪上げの強いショート髪型",
        "en": "Bold delinquent silhouette",
        "val": "bold angular short hair silhouette, raised front anime hair shape"
      },
      {
        "id": "anime_hair_shape_gothic_doll",
        "ja": "ゴシック人形風の重い巻き髪",
        "en": "Gothic doll silhouette",
        "val": "gothic doll hair silhouette, low twin drill curls with dense bangs"
      },
      {
        "id": "anime_hair_shape_sparkling_idol",
        "ja": "アイドル風の華やかサイド髪型",
        "en": "Sparkling idol silhouette",
        "val": "sparkling idol hair silhouette, lively side-tail anime hair shape"
      },
      {
        "id": "anime_hair_shape_symmetrical_doll",
        "ja": "人形風の左右対称ロング",
        "en": "Symmetrical doll silhouette",
        "val": "symmetrical doll hair silhouette, even blunt long anime hair shape"
      },
      {
        "id": "anime_hair_shape_wind_swept",
        "ja": "風で流れる髪型補助",
        "en": "Wind-swept hair helper",
        "val": "wind-swept hair motion, hair strands flowing in one direction"
      },
      {
        "id": "anime_hair_shape_hairstyle_priority",
        "ja": "髪型優先補助",
        "en": "Hairstyle priority helper",
        "val": "hairstyle focus, hair shape priority, clear anime hair silhouette"
      }
    ]
  }
];

  const DICT = {};
  ANIME_HAIR.forEach(group => {
    group.items.forEach(item => {
      if (item.val && item.ja) DICT[item.val] = item.ja;
    });
  });

  function ensureArray(v) {
    if (!v) return [];
    if (Array.isArray(v)) return v;
    return [String(v)];
  }

  function parseJsonArrayAttr(raw) {
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function openAncestorDetails(node) {
    let cur = node;
    while (cur) {
      if (cur.tagName && String(cur.tagName).toLowerCase() === "details") cur.open = true;
      cur = cur.parentElement;
    }
  }

  function applyCheckboxVisual(cb) {
    const label = cb && cb.parentElement && cb.parentElement.tagName && cb.parentElement.tagName.toLowerCase() === "label" ? cb.parentElement : null;
    if (!label) return;
    if (cb.checked) {
      label.style.background = "rgba(255, 126, 66, 0.10)";
      label.style.borderColor = "rgba(255, 126, 66, 0.40)";
    } else {
      label.style.background = "#fff";
      label.style.borderColor = "rgba(0,0,0,0.10)";
    }
  }

  function setCheckboxState(cb, checked) {
    if (!cb) return;
    cb.checked = !!checked;
    applyCheckboxVisual(cb);
  }

  function selectorSafeId(id) {
    return String(id || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  function findCheckboxById(root, id) {
    if (!root || !id) return null;
    return root.querySelector('input.hair-v8-cb[data-pack-id="' + selectorSafeId(id) + '"]');
  }

  function clearCollectionRoles(root, roles, exceptId) {
    const boxes = root.querySelectorAll('input.hair-v8-cb[data-collection-id="' + COLLECTION_ID + '"]');
    boxes.forEach(cb => {
      const role = cb.getAttribute("data-collection-role") || "";
      const packId = cb.getAttribute("data-pack-id") || "";
      if (exceptId && packId === exceptId) return;
      if (roles.indexOf(role) !== -1) setCheckboxState(cb, false);
    });
  }

  function applyCompleteSetSelection(root, cb) {
    const packId = cb.getAttribute("data-pack-id") || "";
    const linked = parseJsonArrayAttr(cb.getAttribute("data-linked-ids"));

    if (cb.checked) {
      clearCollectionRoles(root, ["complete_set"], packId);
      clearCollectionRoles(root, ["base", "customize", "setting"]);
      setCheckboxState(cb, true);
      openAncestorDetails(cb);
      linked.forEach(id => {
        const target = findCheckboxById(root, id);
        if (!target) return;
        setCheckboxState(target, true);
        openAncestorDetails(target);
      });
    } else {
      setCheckboxState(cb, false);
      linked.forEach(id => {
        const target = findCheckboxById(root, id);
        if (target) setCheckboxState(target, false);
      });
    }

    if (typeof window.generateOutput === "function") window.generateOutput();
  }

  function createItem(item, role) {
    const label = document.createElement("label");
    label.style.cssText =
      "display:flex; gap:8px; align-items:flex-start; padding:8px 9px; border:1px solid rgba(0,0,0,0.10);" +
      "border-radius:10px; background:#fff; cursor:pointer; font-size:0.92em; line-height:1.3; min-width:0;";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "hair-v8-cb";
    cb.style.cssText = "margin-top:2px; width:18px; height:18px; flex:0 0 auto;";
    cb.setAttribute("data-pack-id", item.id);
    cb.setAttribute("data-collection-id", COLLECTION_ID);
    cb.setAttribute("data-collection-role", role || "");
    cb.setAttribute("data-en", item.val || "");
    cb.setAttribute("data-val", item.val || "");
    try { cb.setAttribute("data-tags", JSON.stringify(ensureArray(item.val))); } catch (e) { cb.setAttribute("data-tags", "[]"); }
    try { cb.setAttribute("data-linked-ids", JSON.stringify(ensureArray(item.linked_ids))); } catch (e2) { cb.setAttribute("data-linked-ids", "[]"); }

    const text = document.createElement("span");
    text.style.cssText = "display:flex; flex-direction:column; gap:2px; min-width:0;";
    const title = document.createElement("span");
    title.style.cssText = "font-weight:700; color:#3a2318; word-break:keep-all; overflow-wrap:anywhere;";
    title.textContent = item.en ? item.ja + " / " + item.en : item.ja;
    const sub = document.createElement("span");
    sub.style.cssText = "font-size:0.84em; color:rgba(0,0,0,0.56); overflow-wrap:anywhere;";
    sub.textContent = item.val;

    text.appendChild(title);
    text.appendChild(sub);
    label.appendChild(cb);
    label.appendChild(text);
    applyCheckboxVisual(cb);
    return label;
  }

  function createGroup(group) {
    const details = document.createElement("details");
    details.className = "hair-cat hair-v8-group";
    details.style.cssText = "margin:8px 0; border:1px solid #ffd7bd; border-radius:12px; background:#fff;";
    details.open = false;

    const summary = document.createElement("summary");
    summary.textContent = group.title;
    summary.style.cssText = "font-weight:800; padding:8px 10px; cursor:pointer; background:#fff3eb; color:#7a3418; border-radius:12px;";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:6px;";
    group.items.forEach(item => content.appendChild(createItem(item, group.role)));
    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const parent = document.querySelector("#list-hair") || container;
      if (!parent) return;
      const contentArea = parent.querySelector(".section-content") || parent;

      if (contentArea.querySelector(".hair-v8-anime-collection")) return;

      const root = document.createElement("div");
      root.className = "hair-v8-anime-collection";
      root.style.cssText = "margin-top:14px;";

      const wrap = document.createElement("details");
      wrap.className = "hair-v8-collection-wrap";
      wrap.open = false;
      wrap.style.cssText = "border:1px solid #ffc8a8; border-radius:14px; background:#fff9f5; padding:0; margin:12px 0;";

      const summary = document.createElement("summary");
      summary.textContent = "🎬 アニメキャラ髪型特化コレクション v8.1";
      summary.style.cssText = "font-weight:900; padding:10px 12px; cursor:pointer; color:#6b2d12; background:#ffe6d6; border-radius:14px;";
      wrap.appendChild(summary);

      const note = document.createElement("div");
      note.style.cssText = "margin:8px 10px; padding:8px 10px; border-radius:10px; background:#fff; color:#5c5048; font-size:0.88em; line-height:1.45;";
      note.textContent = "役割名だけだと誤認しやすいため、完成セット名は「キャラ記号＋髪型ベース」を併記します。v8.1では姫カット、悪役令嬢、妹系、委員長、スポーツ、サイバー、和風剣士などを増築。髪色と固有キャラ名は入れず、髪型・前髪・輪郭シルエットだけを出力します。";
      wrap.appendChild(note);

      ANIME_HAIR.forEach(group => wrap.appendChild(createGroup(group)));

      root.addEventListener("change", ev => {
        const target = ev && ev.target;
        if (!target || !target.classList || !target.classList.contains("hair-v8-cb")) return;
        applyCheckboxVisual(target);

        const role = target.getAttribute("data-collection-role") || "";
        if (role === "complete_set") {
          applyCompleteSetSelection(root, target);
          return;
        }

        if (typeof window.generateOutput === "function") window.generateOutput();
      });

      root.appendChild(wrap);
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      const seen = new Set();
      document.querySelectorAll(".hair-v8-anime-collection input.hair-v8-cb:checked").forEach(cb => {
        const values = parseJsonArrayAttr(cb.getAttribute("data-tags"));
        values.forEach(v => {
          const tag = String(v || "").trim();
          if (!tag || seen.has(tag)) return;
          seen.add(tag);
          tags.push(tag);
        });
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
