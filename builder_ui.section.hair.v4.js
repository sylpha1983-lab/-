(function(){
  "use strict";

  const VERSION = 4; // カスタムビルダー搭載版
  const KEY = "hair";

  // --- 1. カスタムビルダー用のデータ (翻訳対応用に構造強化) ---
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

  // --- 2. 既存カテゴリデータ (v1, v2, v3統合) ---
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
    "髪飾り・アクセサリー (Accessories)": [
      { ja: "リボン", en: "hair ribbon" }, { ja: "ヘアバンド", en: "hairband" },
      { ja: "カチューシャ", en: "hairband" }, { ja: "シュシュ", en: "scrunchie" },
      { ja: "ヘアピン", en: "hairpin" }, { ja: "かんざし", en: "hair stick" },
      { ja: "花の髪飾り", en: "hair flower" }, { ja: "ヘアオーナメント", en: "hair ornament" }
    ],
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
    
    // ベース色セレクト
    const baseSel = document.createElement('select');
    baseSel.id = "hair-base-color";
    BUILDER_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.val ? `${c.ja} (${c.en})` : "ベース色: 指定なし";
      // 翻訳用データを保持
      opt.dataset.ja = c.ja;
      baseSel.appendChild(opt);
    });

    // サブ色セレクト
    const subSel = document.createElement('select');
    subSel.id = "hair-sub-color";
    BUILDER_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.val ? `${c.ja} (${c.en})` : "アクセント色: 指定なし";
      opt.dataset.ja = c.ja;
      subSel.appendChild(opt);
    });

    // スタイルセレクト
    const styleSel = document.createElement('select');
    styleSel.id = "hair-style-method";
    BUILDER_STYLES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.val;
      opt.dataset.format = s.format;
      opt.dataset.format_ja = s.format_ja; // 日本語フォーマット
      opt.textContent = s.label;
      styleSel.appendChild(opt);
    });

    // 有効化チェック
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

    // プレビュー
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

  // === API定義 ===
  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-hair") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "hair-v4-builder";

      // 1. ビルダーUI
      section.appendChild(createBuilderUI());

      // 2. 通常カテゴリUI
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

      // ★ 固定カテゴリの翻訳辞書登録
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
      
      // ★ ビルダータグ生成処理 & 動的翻訳登録
      if (enable && enable.checked) {
        const baseSel = document.getElementById("hair-base-color");
        const subSel = document.getElementById("hair-sub-color");
        const styleSel = document.getElementById("hair-style-method");

        const baseVal = baseSel.value;
        const subVal = subSel.value;
        
        if (baseVal && subVal) {
          const selectedOpt = styleSel.options[styleSel.selectedIndex];
          const format = selectedOpt.dataset.format;
          const formatJa = selectedOpt.dataset.format_ja;

          // 英語タグ生成
          const enTag = format.replace('{base}', baseVal).replace('{sub}', subVal);
          
          // 日本語タグ生成 (データ属性から日本語名を取得)
          const baseJa = baseSel.options[baseSel.selectedIndex].dataset.ja;
          const subJa = subSel.options[subSel.selectedIndex].dataset.ja;
          const jaTag = formatJa.replace('{base}', baseJa).replace('{sub}', subJa);

          // ★ ここで生成したタグペアを即座に辞書へ追加する
          if (window.__outputTranslation) {
            const tempDict = {};
            tempDict[enTag] = jaTag;
            window.__outputTranslation.register(tempDict);
          }

          tags.push(enTag);
        }
      }

      // 通常タグ
      document.querySelectorAll(".hair-v4-builder .hair-cat input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

