// Auto-generated bundle for section 'hair'
// Contains 7 versions stacked in ascending order.

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
