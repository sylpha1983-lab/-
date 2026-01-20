// Auto-generated bundle for section 'background'
// Contains 4 versions stacked in ascending order.

(function(){
// --- builder_ui.section.background.v1.js ---
(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "background";

  const CATEGORIES = {
    "シンプル・抽象 (Simple/Abstract)": [
      { ja: "シンプル背景", en: "simple background" },
      { ja: "白背景", en: "white background" },
      { ja: "黒背景", en: "black background" },
      { ja: "透過背景 (切り抜き用)", en: "transparent background" },
      { ja: "グラデーション", en: "gradient background" },
      { ja: "抽象的な背景", en: "abstract background" },
      { ja: "幾何学模様", en: "geometric pattern" },
      { ja: "集中線", en: "speed lines" },
      { ja: "花柄背景", en: "floral background" }
    ],
    "屋内・生活空間 (Indoor/Daily Life)": [
      { ja: "屋内", en: "indoors" },
      { ja: "部屋 (自室)", en: "bedroom" },
      { ja: "リビング", en: "living room" },
      { ja: "教室", en: "classroom" },
      { ja: "学校の廊下", en: "school hallway" },
      { ja: "保健室", en: "infirmary" },
      { ja: "体育館", en: "gym" },
      { ja: "図書館", en: "library" },
      { ja: "カフェ/喫茶店", en: "cafe" },
      { ja: "バー/酒場", en: "bar" },
      { ja: "キッチン", en: "kitchen" },
      { ja: "お風呂場", en: "bathroom" },
      { ja: "ベッドの上", en: "on bed" },
      { ja: "窓際", en: "by the window" },
      { ja: "洋館", en: "mansion interior" },
      { ja: "廃墟 (屋内)", en: "abandoned room" }
    ],
    "屋外・自然 (Outdoor/Nature)": [
      { ja: "屋外", en: "outdoors" },
      { ja: "青空", en: "blue sky" },
      { ja: "雲", en: "clouds" },
      { ja: "星空", en: "starry sky" },
      { ja: "満月", en: "full moon" },
      { ja: "森/森林", en: "forest" },
      { ja: "海/ビーチ", en: "ocean" },
      { ja: "浜辺", en: "beach" },
      { ja: "川/小川", en: "river" },
      { ja: "湖", en: "lake" },
      { ja: "山岳", en: "mountain" },
      { ja: "草原", en: "meadow" },
      { ja: "花畑", en: "flower field" },
      { ja: "ひまわり畑", en: "sunflower field" },
      { ja: "雪原", en: "snowy field" },
      { ja: "庭園", en: "garden" },
      { ja: "公園", en: "park" }
    ],
    "都市・街並み (Urban/Architecture)": [
      { ja: "街中/ストリート", en: "street" },
      { ja: "都市景観", en: "cityscape" },
      { ja: "夜景", en: "night city" },
      { ja: "路地裏", en: "alley" },
      { ja: "屋上", en: "rooftop" },
      { ja: "駅のホーム", en: "train station" },
      { ja: "電車内", en: "train interior" },
      { ja: "コンビニ", en: "convenience store" },
      { ja: "神社", en: "shrine" },
      { ja: "鳥居", en: "torii" },
      { ja: "お祭り", en: "festival" },
      { ja: "廃墟 (都市)", en: "ruins" },
      { ja: "遊園地", en: "amusement park" },
      { ja: "プールサイド", en: "poolside" }
    ],
    "ファンタジー・SF (Fantasy/Sci-Fi)": [
      { ja: "ファンタジー風景", en: "fantasy world" },
      { ja: "城 (外観)", en: "castle" },
      { ja: "玉座の間", en: "throne room" },
      { ja: "ダンジョン/洞窟", en: "dungeon" },
      { ja: "神殿/教会", en: "temple" },
      { ja: "ステンドグラス", en: "stained glass" },
      { ja: "魔法陣", en: "magic circle" },
      { ja: "魔法の森", en: "magic forest" },
      { ja: "水中/海中", en: "underwater" },
      { ja: "サイバーパンク都市", en: "cyberpunk city" },
      { ja: "ネオン街", en: "neon lights" },
      { ja: "宇宙", en: "space" },
      { ja: "宇宙船内", en: "spaceship interior" },
      { ja: "実験室/研究所", en: "laboratory" },
      { ja: "スチームパンク都市", en: "steampunk city" }
    ],
    "時間帯・天候 (Time & Weather)": [
      { ja: "昼 (Day)", en: "day" },
      { ja: "朝 (Morning)", en: "morning" },
      { ja: "夕暮れ (Sunset)", en: "sunset" },
      { ja: "夜 (Night)", en: "night" },
      { ja: "深夜 (Midnight)", en: "midnight" },
      { ja: "黄昏 (Twilight)", en: "twilight" },
      { ja: "晴れ", en: "sunny" },
      { ja: "雨", en: "rain" },
      { ja: "土砂降り", en: "heavy rain" },
      { ja: "曇り", en: "cloudy" },
      { ja: "雪", en: "snow" },
      { ja: "吹雪", en: "blizzard" },
      { ja: "霧", en: "fog" },
      { ja: "強風", en: "wind" },
      { ja: "雷", en: "lightning" }
    ],
    "季節・イベント背景 (Seasonal)": [
      { ja: "春 (桜)", en: "cherry blossoms" },
      { ja: "夏 (入道雲)", en: "cumulonimbus" },
      { ja: "秋 (紅葉)", en: "autumn leaves" },
      { ja: "冬 (雪景色)", en: "winter" },
      { ja: "クリスマス", en: "christmas" },
      { ja: "ハロウィン", en: "halloween" },
      { ja: "正月", en: "new year" },
      { ja: "花火大会", en: "fireworks" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-background") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "background-v1-full";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "background-cat";
        details.open = false; // ★ 閉じた状態

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
      document.querySelectorAll(".background-v1-full input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.background.v2.js ---
(function(){
  "use strict";

  const VERSION = 2; // 背景の拡張版
  const KEY = "background";

  const GRADIENT_COLORS = [
    { label: "白 (White)", val: "white" },
    { label: "黒 (Black)", val: "black" },
    { label: "赤 (Red)", val: "red" },
    { label: "青 (Blue)", val: "blue" },
    { label: "黄 (Yellow)", val: "yellow" },
    { label: "緑 (Green)", val: "green" },
    { label: "紫 (Purple)", val: "purple" },
    { label: "ピンク (Pink)", val: "pink" },
    { label: "オレンジ (Orange)", val: "orange" },
    { label: "水色 (Cyan)", val: "cyan" },
    { label: "金 (Gold)", val: "gold" },
    { label: "銀 (Silver)", val: "silver" }
  ];

  // 既存のカテゴリデータ (v1の内容を継承)
  const CATEGORIES = {
    // ... (v1の全カテゴリをここにコピー＆ペーストして継承させます) ...
    // 長くなるため省略しますが、実装時はv1の中身をすべて含めます
    "シンプル・抽象 (Simple/Abstract)": [
       { ja: "シンプル背景", en: "simple background" },
       { ja: "白背景", en: "white background" },
       // ... 他
    ],
    // ... 他のカテゴリ ...
  };

  function createGradientBuilder() {
    const wrapper = document.createElement('div');
    wrapper.style.padding = "10px";
    wrapper.style.marginBottom = "10px";
    wrapper.style.backgroundColor = "#f0f8ff"; // 薄い青背景で区別
    wrapper.style.border = "1px solid #cceeff";
    wrapper.style.borderRadius = "6px";

    const title = document.createElement('div');
    title.textContent = "🎨 カスタムグラデーション作成";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "8px";
    title.style.color = "#005580";
    wrapper.appendChild(title);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.gap = "8px";
    container.style.alignItems = "center";
    container.style.flexWrap = "wrap";

    // 開始色
    const startSel = document.createElement('select');
    startSel.id = "bg-grad-start";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.label;
      startSel.appendChild(opt);
    });

    // 終了色
    const endSel = document.createElement('select');
    endSel.id = "bg-grad-end";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.label;
      // デフォルトで違う色にしておく
      if(c.val === "blue") opt.selected = true; 
      endSel.appendChild(opt);
    });

    // 有効化チェックボックス
    const enableLabel = document.createElement('label');
    enableLabel.style.marginLeft = "auto";
    enableLabel.style.display = "flex";
    enableLabel.style.alignItems = "center";
    enableLabel.style.fontSize = "0.9em";
    const enableCb = document.createElement('input');
    enableCb.type = "checkbox";
    enableCb.id = "bg-grad-enable";
    enableLabel.appendChild(enableCb);
    enableLabel.append(" 有効化");

    container.appendChild(startSel);
    container.appendChild(document.createTextNode("→"));
    container.appendChild(endSel);
    container.appendChild(enableLabel);
    wrapper.appendChild(container);

    // プレビューテキスト
    const preview = document.createElement('div');
    preview.id = "bg-grad-preview";
    preview.style.marginTop = "8px";
    preview.style.fontSize = "0.85em";
    preview.style.color = "#666";
    preview.textContent = "出力タグ: (無効)";
    wrapper.appendChild(preview);

    // イベントリスナー
    const update = () => {
      if (!enableCb.checked) {
        preview.textContent = "出力タグ: (無効)";
        preview.style.color = "#ccc";
        return;
      }
      const s = startSel.value;
      const e = endSel.value;
      const tag = `${s} and ${e} gradient background`;
      preview.textContent = `出力タグ: ${tag}`;
      preview.style.color = "#008800";
    };

    [startSel, endSel, enableCb].forEach(el => el.addEventListener('change', update));
    // 初期実行
    update();

    return wrapper;
  }

  const API = {
    initUI(container) {
      // 合体モード: 既存UIを消さずに追加
      const section = document.createElement("div");
      section.className = "background-v2-addon";

      // 1. グラデーションビルダーを追加
      section.appendChild(createGradientBuilder());
      
      // 2. 通常カテゴリ (v1継承分があればここに追加するが、今回はビルダー拡張のみ)
      // ※ もしv1の内容も含めるなら、ここにカテゴリ展開ロジックを入れる

      container.appendChild(section);
    },

    getTags() {
      const tags = [];
      
      // ビルダーからの取得
      const enable = document.getElementById("bg-grad-enable");
      if (enable && enable.checked) {
        const s = document.getElementById("bg-grad-start").value;
        const e = document.getElementById("bg-grad-end").value;
        tags.push(`${s} and ${e} gradient background`);
      }

      // 通常チェックボックスからの取得
      document.querySelectorAll(".background-v2-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.background.v3.js ---
(function(){
  "use strict";

  const VERSION = 3; // 階層整理＆機能統合版
  const KEY = "background";

  // === 1. グラデーション用データ ===
  const GRADIENT_COLORS = [
    { label: "白 (White)", val: "white" }, { label: "黒 (Black)", val: "black" },
    { label: "赤 (Red)", val: "red" }, { label: "青 (Blue)", val: "blue" },
    { label: "黄 (Yellow)", val: "yellow" }, { label: "緑 (Green)", val: "green" },
    { label: "紫 (Purple)", val: "purple" }, { label: "ピンク (Pink)", val: "pink" },
    { label: "オレンジ (Orange)", val: "orange" }, { label: "水色 (Cyan)", val: "cyan" },
    { label: "金 (Gold)", val: "gold" }, { label: "銀 (Silver)", val: "silver" }
  ];

  // === 2. 場所 (Location) カテゴリ ===
  const LOCATIONS = {
    "シンプル・抽象 (Simple/Abstract)": [
      { ja: "シンプル背景", en: "simple background" }, { ja: "白背景", en: "white background" },
      { ja: "黒背景", en: "black background" }, { ja: "透過背景 (切り抜き用)", en: "transparent background" },
      { ja: "グラデーション", en: "gradient background" }, { ja: "抽象的な背景", en: "abstract background" },
      { ja: "幾何学模様", en: "geometric pattern" }, { ja: "集中線", en: "speed lines" },
      { ja: "花柄背景", en: "floral background" }, { ja: "グリッド", en: "grid background" }
    ],
    "屋内・生活空間 (Indoor/Daily Life)": [
      { ja: "屋内", en: "indoors" }, { ja: "部屋 (自室)", en: "bedroom" }, { ja: "リビング", en: "living room" },
      { ja: "教室", en: "classroom" }, { ja: "学校の廊下", en: "school hallway" }, { ja: "保健室", en: "infirmary" },
      { ja: "体育館", en: "gym" }, { ja: "図書館", en: "library" }, { ja: "カフェ/喫茶店", en: "cafe" },
      { ja: "バー/酒場", en: "bar" }, { ja: "キッチン", en: "kitchen" }, { ja: "お風呂場", en: "bathroom" },
      { ja: "ベッドの上", en: "on bed" }, { ja: "窓際", en: "by the window" },
      { ja: "洋館", en: "mansion interior" }, { ja: "廃墟 (屋内)", en: "abandoned room" }
    ],
    "屋外・自然 (Outdoor/Nature)": [
      { ja: "屋外", en: "outdoors" }, { ja: "青空", en: "blue sky" }, { ja: "雲", en: "clouds" },
      { ja: "星空", en: "starry sky" }, { ja: "満月", en: "full moon" }, { ja: "森/森林", en: "forest" },
      { ja: "海/ビーチ", en: "ocean" }, { ja: "浜辺", en: "beach" }, { ja: "川/小川", en: "river" },
      { ja: "湖", en: "lake" }, { ja: "山岳", en: "mountain" }, { ja: "草原", en: "meadow" },
      { ja: "花畑", en: "flower field" }, { ja: "ひまわり畑", en: "sunflower field" },
      { ja: "雪原", en: "snowy field" }, { ja: "庭園", en: "garden" }, { ja: "公園", en: "park" }
    ],
    "都市・街並み (Urban/Architecture)": [
      { ja: "街中/ストリート", en: "street" }, { ja: "都市景観", en: "cityscape" }, { ja: "夜景", en: "night city" },
      { ja: "路地裏", en: "alley" }, { ja: "屋上", en: "rooftop" }, { ja: "駅のホーム", en: "train station" },
      { ja: "電車内", en: "train interior" }, { ja: "コンビニ", en: "convenience store" },
      { ja: "神社", en: "shrine" }, { ja: "鳥居", en: "torii" }, { ja: "お祭り", en: "festival" },
      { ja: "廃墟 (都市)", en: "ruins" }, { ja: "遊園地", en: "amusement park" }, { ja: "プールサイド", en: "poolside" }
    ],
    "ファンタジー・SF (Fantasy/Sci-Fi)": [
      { ja: "ファンタジー風景", en: "fantasy world" }, { ja: "城 (外観)", en: "castle" },
      { ja: "玉座の間", en: "throne room" }, { ja: "ダンジョン/洞窟", en: "dungeon" },
      { ja: "神殿/教会", en: "temple" }, { ja: "ステンドグラス", en: "stained glass" },
      { ja: "魔法陣", en: "magic circle" }, { ja: "魔法の森", en: "magic forest" },
      { ja: "水中/海中", en: "underwater" }, { ja: "サイバーパンク都市", en: "cyberpunk city" },
      { ja: "ネオン街", en: "neon lights" }, { ja: "宇宙", en: "space" },
      { ja: "宇宙船内", en: "spaceship interior" }, { ja: "実験室/研究所", en: "laboratory" },
      { ja: "スチームパンク都市", en: "steampunk city" }
    ],
    "時間帯・天候 (Time & Weather)": [
      { ja: "昼 (Day)", en: "day" }, { ja: "朝 (Morning)", en: "morning" },
      { ja: "夕暮れ (Sunset)", en: "sunset" }, { ja: "夜 (Night)", en: "night" },
      { ja: "深夜 (Midnight)", en: "midnight" }, { ja: "黄昏 (Twilight)", en: "twilight" },
      { ja: "晴れ", en: "sunny" }, { ja: "雨", en: "rain" }, { ja: "土砂降り", en: "heavy rain" },
      { ja: "曇り", en: "cloudy" }, { ja: "雪", en: "snow" }, { ja: "吹雪", en: "blizzard" },
      { ja: "霧", en: "fog" }, { ja: "強風", en: "wind" }, { ja: "雷", en: "lightning" }
    ],
    "季節・イベント背景 (Seasonal)": [
      { ja: "春 (桜)", en: "cherry blossoms" }, { ja: "夏 (入道雲)", en: "cumulonimbus" },
      { ja: "秋 (紅葉)", en: "autumn leaves" }, { ja: "冬 (雪景色)", en: "winter" },
      { ja: "クリスマス", en: "christmas" }, { ja: "ハロウィン", en: "halloween" },
      { ja: "正月", en: "new year" }, { ja: "花火大会", en: "fireworks" }
    ]
  };

  // === 3. 背景エフェクト (Background Effects) カテゴリ ===
  const BG_EFFECTS = {
    "パーティクル・浮遊物 (Particles)": [
      { ja: "花弁が舞う", en: "falling petals" }, { ja: "桜吹雪", en: "cherry blossom petals" },
      { ja: "羽根が舞う", en: "feathers" }, { ja: "黒い羽", en: "black feathers" },
      { ja: "キラキラ", en: "sparkles" }, { ja: "光の粒子", en: "light particles" },
      { ja: "紙吹雪", en: "confetti" }, { ja: "火の粉", en: "embers" },
      { ja: "気泡 (水中)", en: "air bubbles" }, { ja: "塵/埃", en: "dust" }
    ],
    "空気感・雰囲気 (Atmosphere)": [
      { ja: "霧・フォグ", en: "fog" }, { ja: "濃霧", en: "heavy fog" },
      { ja: "湯気", en: "steam" }, { ja: "陽光・木漏れ日", en: "sunbeams" },
      { ja: "逆光 (ゴッドレイ)", en: "god rays" }, { ja: "レンズフレア", en: "lens flare" },
      { ja: "ボケ効果", en: "bokeh" }, { ja: "モーションブラー", en: "motion blur" }
    ],
    "漫符・演出 (Manga/Style Effects)": [
      { ja: "集中線", en: "speed lines" }, { ja: "枠線", en: "border" },
      { ja: "ビネット (四隅暗)", en: "vignette" }, { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "ノイズ加工", en: "film grain" }
    ]
  };

  // グラデーションUI生成
  function createGradientBuilder() {
    const wrapper = document.createElement('div');
    wrapper.style.padding = "10px";
    wrapper.style.marginBottom = "15px";
    wrapper.style.backgroundColor = "#f0f8ff";
    wrapper.style.border = "1px solid #cceeff";
    wrapper.style.borderRadius = "6px";
    const title = document.createElement('div');
    title.textContent = "🎨 カスタムグラデーション作成";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "8px";
    title.style.color = "#005580";
    wrapper.appendChild(title);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.gap = "8px";
    container.style.alignItems = "center";
    container.style.flexWrap = "wrap";

    const startSel = document.createElement('select');
    startSel.id = "bg-grad-start";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val; opt.textContent = c.label;
      startSel.appendChild(opt);
    });

    const endSel = document.createElement('select');
    endSel.id = "bg-grad-end";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val; opt.textContent = c.label;
      if(c.val === "blue") opt.selected = true;
      endSel.appendChild(opt);
    });

    const enableLabel = document.createElement('label');
    enableLabel.style.marginLeft = "auto";
    enableLabel.style.display = "flex";
    enableLabel.style.alignItems = "center";
    enableLabel.style.fontSize = "0.9em";
    const enableCb = document.createElement('input');
    enableCb.type = "checkbox";
    enableCb.id = "bg-grad-enable";
    enableLabel.appendChild(enableCb);
    enableLabel.append(" 有効化");

    container.appendChild(startSel);
    container.appendChild(document.createTextNode("→"));
    container.appendChild(endSel);
    container.appendChild(enableLabel);
    wrapper.appendChild(container);

    const preview = document.createElement('div');
    preview.id = "bg-grad-preview";
    preview.style.marginTop = "8px";
    preview.style.fontSize = "0.85em";
    preview.style.color = "#666";
    preview.textContent = "出力タグ: (無効)";
    wrapper.appendChild(preview);

    const update = () => {
      if (!enableCb.checked) {
        preview.textContent = "出力タグ: (無効)";
        preview.style.color = "#ccc";
        return;
      }
      const s = startSel.value;
      const e = endSel.value;
      const tag = `${s} and ${e} gradient background`;
      preview.textContent = `出力タグ: ${tag}`;
      preview.style.color = "#008800";
    };
    [startSel, endSel, enableCb].forEach(el => el.addEventListener('change', update));
    update();
    return wrapper;
  }

  function createDetails(summaryText, items) {
    const details = document.createElement("details");
    details.className = "background-cat";
    details.open = false; // ★ 閉じた状態で開始

    const summary = document.createElement("summary");
    summary.textContent = summaryText;
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
    return details;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-background") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "background-v3-integrated";

      // 1. グラデーションビルダー
      section.appendChild(createGradientBuilder());

      // 2. 場所
      const locDetails = document.createElement("details");
      locDetails.className = "bg-section-group";
      locDetails.open = false; // ★ 親も閉じる
      
      const locSummary = document.createElement("summary");
      locSummary.textContent = "📍 場所 (Location)";
      locSummary.style.fontWeight = "bold";
      locSummary.style.margin = "10px 0 5px";
      locSummary.style.cursor = "pointer";
      locSummary.style.listStyle = "none";
      locDetails.appendChild(locSummary);
      
      Object.entries(LOCATIONS).forEach(([cat, items]) => {
        locDetails.appendChild(createDetails(cat, items));
      });
      section.appendChild(locDetails);

      // 3. エフェクト
      const effDetails = document.createElement("details");
      effDetails.className = "bg-section-group";
      effDetails.open = false; // ★ 親も閉じる
      
      const effSummary = document.createElement("summary");
      effSummary.textContent = "✨ 背景エフェクト (Background Effects)";
      effSummary.style.fontWeight = "bold";
      effSummary.style.margin = "10px 0 5px";
      effSummary.style.cursor = "pointer";
      effSummary.style.listStyle = "none";
      effDetails.appendChild(effSummary);
      
      Object.entries(BG_EFFECTS).forEach(([cat, items]) => {
        effDetails.appendChild(createDetails(cat, items));
      });
      section.appendChild(effDetails);

      parent.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        [LOCATIONS, BG_EFFECTS].forEach(catObj => {
             Object.values(catObj).flat().forEach(item => {
                if (item.en && item.ja) dict[item.en] = item.ja;
             });
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      const enable = document.getElementById("bg-grad-enable");
      if (enable && enable.checked) {
        const s = document.getElementById("bg-grad-start").value;
        const e = document.getElementById("bg-grad-end").value;
        tags.push(`${s} and ${e} gradient background`);
      }
      document.querySelectorAll(".background-v3-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.background.v4.js ---
(function(){
  "use strict";

  const VERSION = 4; // 場所・時間・天候 特化版
  const KEY = "background";

  // === 1. グラデーション用データ ===
  const GRADIENT_COLORS = [
    { label: "白 (White)", val: "white" }, { label: "黒 (Black)", val: "black" },
    { label: "赤 (Red)", val: "red" }, { label: "青 (Blue)", val: "blue" },
    { label: "黄 (Yellow)", val: "yellow" }, { label: "緑 (Green)", val: "green" },
    { label: "紫 (Purple)", val: "purple" }, { label: "ピンク (Pink)", val: "pink" },
    { label: "オレンジ (Orange)", val: "orange" }, { label: "水色 (Cyan)", val: "cyan" },
    { label: "金 (Gold)", val: "gold" }, { label: "銀 (Silver)", val: "silver" },
    { label: "茶 (Brown)", val: "brown" }, { label: "灰 (Gray)", val: "gray" },
    { label: "紺 (Navy)", val: "navy" }, { label: "ライム (Lime)", val: "lime" }
  ];

  // === 2. 場所 (Location) カテゴリ ===
  const LOCATIONS = {
    "シンプル・パターン (Simple/Pattern)": [
      { ja: "シンプル背景", en: "simple background" }, { ja: "白背景", en: "white background" },
      { ja: "黒背景", en: "black background" }, { ja: "透過背景 (切り抜き用)", en: "transparent background" },
      { ja: "グラデーション", en: "gradient background" }, { ja: "抽象的な背景", en: "abstract background" },
      { ja: "幾何学模様", en: "geometric pattern" }, { ja: "集中線", en: "speed lines" },
      { ja: "花柄", en: "floral pattern" }, { ja: "グリッド", en: "grid background" },
      { ja: "チェック柄/市松", en: "checkered background" }, { ja: "ストライプ", en: "striped background" },
      { ja: "水玉 (ドット)", en: "polka dot background" }, { ja: "カモフラ迷彩", en: "camouflage pattern" },
      { ja: "和柄", en: "japanese pattern" }, { ja: "ペイント/塗料", en: "splatter paint" }
    ],
    "屋内・居住空間 (Indoor/Living)": [
      { ja: "屋内", en: "indoors" }, { ja: "部屋 (自室)", en: "bedroom" }, { ja: "リビング", en: "living room" },
      { ja: "キッチン", en: "kitchen" }, { ja: "ダイニング", en: "dining room" },
      { ja: "お風呂場", en: "bathroom" }, { ja: "洗面所", en: "washroom" },
      { ja: "トイレ", en: "toilet" }, { ja: "玄関", en: "entrance hall" },
      { ja: "廊下 (家)", en: "hallway" }, { ja: "階段", en: "stairs" },
      { ja: "ベッドの上", en: "on bed" }, { ja: "窓際", en: "by the window" },
      { ja: "ベランダ/バルコニー", en: "balcony" }, { ja: "屋根裏部屋", en: "attic" },
      { ja: "和室", en: "tatami room" }, { ja: "縁側", en: "engawa" },
      { ja: "豪邸/洋館内部", en: "mansion interior" }, { ja: "暖炉の前", en: "fireplace" }
    ],
    "学校・職場・公共 (School/Work/Public)": [
      { ja: "教室", en: "classroom" }, { ja: "黒板前", en: "blackboard" },
      { ja: "学校の廊下", en: "school hallway" }, { ja: "学校の屋上", en: "school rooftop" },
      { ja: "保健室", en: "infirmary" }, { ja: "体育館", en: "gym" },
      { ja: "部室", en: "clubroom" }, { ja: "図書館", en: "library" },
      { ja: "実験室/理科室", en: "science lab" }, { ja: "職員室", en: "staff room" },
      { ja: "オフィス/事務所", en: "office" }, { ja: "会議室", en: "conference room" },
      { ja: "病院 (病室)", en: "hospital room" }, { ja: "手術室", en: "operating room" },
      { ja: "工場/プラント", en: "factory" }, { ja: "倉庫", en: "warehouse" },
      { ja: "牢屋/監獄", en: "prison cell" }, { ja: "美術館/博物館", en: "museum" }
    ],
    "商業・エンタメ (Commercial/Entertainment)": [
      { ja: "カフェ/喫茶店", en: "cafe" }, { ja: "レストラン", en: "restaurant" },
      { ja: "バー/酒場", en: "bar" }, { ja: "コンビニ", en: "convenience store" },
      { ja: "スーパーマーケット", en: "supermarket" }, { ja: "ショッピングモール", en: "shopping mall" },
      { ja: "ブティック/服屋", en: "clothing store" }, { ja: "本屋", en: "bookstore" },
      { ja: "ゲームセンター", en: "arcade" }, { ja: "カジノ", en: "casino" },
      { ja: "映画館", en: "movie theater" }, { ja: "ライブステージ", en: "concert stage" },
      { ja: "楽屋", en: "dressing room" }, { ja: "遊園地", en: "amusement park" },
      { ja: "サーカス", en: "circus tent" }, { ja: "プールサイド", en: "poolside" },
      { ja: "温泉/大浴場", en: "onsen" }, { ja: "サウナ", en: "sauna" }
    ],
    "スポーツ・競技 (Sports)": [
      { ja: "スタジアム", en: "stadium" }, { ja: "野球場", en: "baseball field" },
      { ja: "サッカーコート", en: "soccer field" }, { ja: "テニスコート", en: "tennis court" },
      { ja: "バスケコート", en: "basketball court" }, { ja: "プール (競泳)", en: "swimming pool" },
      { ja: "陸上トラック", en: "track and field" }, { ja: "リング (格闘技)", en: "boxing ring" },
      { ja: "道場", en: "dojo" }, { ja: "ジム (筋トレ)", en: "fitness gym" }
    ],
    "乗り物・交通 (Vehicle/Transport)": [
      { ja: "駅のホーム", en: "train station platform" }, { ja: "改札口", en: "ticket gate" },
      { ja: "電車内", en: "train interior" }, { ja: "バス停", en: "bus stop" },
      { ja: "バス車内", en: "bus interior" }, { ja: "車内 (運転席)", en: "car interior" },
      { ja: "駐車場", en: "parking lot" }, { ja: "ガソリンスタンド", en: "gas station" },
      { ja: "空港ロビー", en: "airport lobby" }, { ja: "飛行機内 (客席)", en: "airplane cabin" },
      { ja: "コックピット", en: "cockpit" }, { ja: "港/埠頭", en: "harbor" },
      { ja: "船の甲板", en: "ship deck" }, { ja: "豪華客船内", en: "cruise ship interior" },
      { ja: "宇宙船内", en: "spaceship interior" }
    ],
    "都市・街並み (Urban/Architecture)": [
      { ja: "街中/ストリート", en: "street" }, { ja: "交差点", en: "intersection" },
      { ja: "都市景観 (俯瞰)", en: "cityscape" }, { ja: "高層ビル群", en: "skyscrapers" },
      { ja: "夜景", en: "night city" }, { ja: "ネオン街", en: "neon lights" },
      { ja: "路地裏", en: "back alley" }, { ja: "スラム街", en: "slums" },
      { ja: "屋上", en: "rooftop" }, { ja: "橋の上", en: "on the bridge" },
      { ja: "電話ボックス", en: "phone booth" }, { ja: "トンネル", en: "tunnel" },
      { ja: "工事現場", en: "construction site" }, { ja: "廃墟 (都市)", en: "urban ruins" }
    ],
    "歴史・和風・文化 (History/Cultural)": [
      { ja: "神社", en: "shrine" }, { ja: "鳥居", en: "torii" }, { ja: "寺院", en: "temple" },
      { ja: "日本庭園", en: "japanese garden" }, { ja: "城 (日本)", en: "japanese castle" },
      { ja: "城下町/江戸の町", en: "edo period street" }, { ja: "茶室", en: "tea room" },
      { ja: "お祭り", en: "festival" }, { ja: "西洋の城", en: "castle" },
      { ja: "宮殿/王宮", en: "palace" }, { ja: "玉座の間", en: "throne room" },
      { ja: "教会/大聖堂", en: "church" }, { ja: "ステンドグラス", en: "stained glass" },
      { ja: "西洋の古い街並み", en: "old european street" }, { ja: "図書館 (古典的)", en: "grand library" },
      { ja: "古代遺跡", en: "ancient ruins" }, { ja: "ピラミッド", en: "pyramid" }
    ],
    "屋外・自然 (Outdoor/Nature)": [
      { ja: "屋外", en: "outdoors" }, { ja: "青空", en: "blue sky" }, { ja: "雲海", en: "sea of clouds" },
      { ja: "星空/天の川", en: "milky way" }, { ja: "満月", en: "full moon" },
      { ja: "森/森林", en: "forest" }, { ja: "密林/ジャングル", en: "jungle" },
      { ja: "竹林", en: "bamboo forest" }, { ja: "並木道", en: "tree-lined street" },
      { ja: "海/ビーチ", en: "ocean" }, { ja: "砂浜", en: "sandy beach" },
      { ja: "断崖絶壁", en: "cliff" }, { ja: "川/渓流", en: "river" }, { ja: "滝", en: "waterfall" },
      { ja: "湖/湖畔", en: "lake" }, { ja: "山岳", en: "mountain" }, { ja: "雪山", en: "snowy mountain" },
      { ja: "草原", en: "meadow" }, { ja: "花畑", en: "flower field" },
      { ja: "ひまわり畑", en: "sunflower field" }, { ja: "砂漠", en: "desert" },
      { ja: "オアシス", en: "oasis" }, { ja: "洞窟", en: "cave" }, { ja: "氷河/氷の世界", en: "glacier" }
    ],
    "ファンタジー・SF (Fantasy/Sci-Fi)": [
      { ja: "ファンタジー風景", en: "fantasy world" }, { ja: "浮遊島", en: "floating island" },
      { ja: "魔法の森", en: "magic forest" }, { ja: "ダンジョン", en: "dungeon" },
      { ja: "魔法陣", en: "magic circle" }, { ja: "異世界", en: "otherworld" },
      { ja: "水中/海中都市", en: "underwater city" }, { ja: "深海", en: "deep sea" },
      { ja: "宇宙", en: "space" }, { ja: "惑星/月面", en: "planet surface" },
      { ja: "サイバーパンク都市", en: "cyberpunk city" }, { ja: "スチームパンク都市", en: "steampunk city" },
      { ja: "研究所/ラボ", en: "laboratory" }, { ja: "サーバー定規", en: "server room" },
      { ja: "ポストアポカリプス", en: "post-apocalyptic" }
    ],
    "時間帯・天候 (Time & Weather)": [
      { ja: "昼 (Day)", en: "day" }, { ja: "朝 (Morning)", en: "morning" },
      { ja: "夕暮れ (Sunset)", en: "sunset" }, { ja: "マジックアワー", en: "golden hour" },
      { ja: "夜 (Night)", en: "night" }, { ja: "深夜 (Midnight)", en: "midnight" },
      { ja: "晴れ", en: "sunny" }, { ja: "雨", en: "rain" }, { ja: "土砂降り", en: "heavy rain" },
      { ja: "曇り", en: "cloudy" }, { ja: "雪", en: "snow" }, { ja: "吹雪", en: "blizzard" },
      { ja: "霧 (Fog)", en: "fog" }, { ja: "強風", en: "windy" }, { ja: "雷", en: "lightning" },
      { ja: "虹", en: "rainbow" }, { ja: "オーロラ", en: "aurora" }
    ],
    "季節・イベント (Seasonal)": [
      { ja: "春 (桜)", en: "cherry blossoms" }, { ja: "新緑", en: "fresh green" },
      { ja: "夏 (入道雲)", en: "cumulonimbus" }, { ja: "夏祭り", en: "summer festival" },
      { ja: "花火大会", en: "fireworks" }, { ja: "秋 (紅葉)", en: "autumn leaves" },
      { ja: "ススキ", en: "pampas grass" }, { ja: "冬 (雪景色)", en: "winter" },
      { ja: "クリスマス", en: "christmas" }, { ja: "ハロウィン", en: "halloween" },
      { ja: "正月", en: "new year" }, { ja: "バレンタイン", en: "valentine" },
      { ja: "誕生日", en: "birthday" }, { ja: "結婚式", en: "wedding" }
    ]
  };

  // ※ エフェクトカテゴリは削除しました（他のセクションと重複するため）

  function createGradientBuilder() {
    const wrapper = document.createElement('div');
    wrapper.style.padding = "10px";
    wrapper.style.marginBottom = "15px";
    wrapper.style.backgroundColor = "#f0f8ff";
    wrapper.style.border = "1px solid #cceeff";
    wrapper.style.borderRadius = "6px";
    
    const title = document.createElement('div');
    title.textContent = "🎨 カスタムグラデーション作成";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "8px";
    title.style.color = "#005580";
    wrapper.appendChild(title);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.gap = "8px";
    container.style.alignItems = "center";
    container.style.flexWrap = "wrap";

    const startSel = document.createElement('select');
    startSel.id = "bg-grad-start";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val; opt.textContent = c.label;
      startSel.appendChild(opt);
    });

    const endSel = document.createElement('select');
    endSel.id = "bg-grad-end";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val; opt.textContent = c.label;
      if(c.val === "blue") opt.selected = true;
      endSel.appendChild(opt);
    });

    const enableLabel = document.createElement('label');
    enableLabel.style.marginLeft = "auto";
    enableLabel.style.display = "flex";
    enableLabel.style.alignItems = "center";
    enableLabel.style.fontSize = "0.9em";
    const enableCb = document.createElement('input');
    enableCb.type = "checkbox";
    enableCb.id = "bg-grad-enable";
    enableLabel.appendChild(enableCb);
    enableLabel.append(" 有効化");

    container.appendChild(startSel);
    container.appendChild(document.createTextNode("→"));
    container.appendChild(endSel);
    container.appendChild(enableLabel);
    wrapper.appendChild(container);

    const preview = document.createElement('div');
    preview.id = "bg-grad-preview";
    preview.style.marginTop = "8px";
    preview.style.fontSize = "0.85em";
    preview.style.color = "#666";
    preview.textContent = "出力タグ: (無効)";
    wrapper.appendChild(preview);

    const update = () => {
      if (!enableCb.checked) {
        preview.textContent = "出力タグ: (無効)";
        preview.style.color = "#ccc";
        return;
      }
      const s = startSel.value;
      const e = endSel.value;
      const tag = `${s} and ${e} gradient background`;
      preview.textContent = `出力タグ: ${tag}`;
      preview.style.color = "#008800";
    };
    [startSel, endSel, enableCb].forEach(el => el.addEventListener('change', update));
    update();
    return wrapper;
  }

  function createDetails(summaryText, items) {
    const details = document.createElement("details");
    details.className = "background-cat";
    details.open = false;

    const summary = document.createElement("summary");
    summary.textContent = summaryText;
    details.appendChild(summary);

    const content = document.createElement("div");
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";
    content.style.gap = "4px";
    content.style.marginTop = "5px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.title = item.en;

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.dataset.en = item.en;
      cb.style.marginRight = "4px";
      
      label.appendChild(cb);
      label.appendChild(document.createTextNode(item.ja));
      content.appendChild(label);
    });
    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-background") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "background-v4-integrated";

      // 1. グラデーション
      section.appendChild(createGradientBuilder());

      // 2. 場所カテゴリ
      const locDetails = document.createElement("details");
      locDetails.className = "bg-section-group";
      locDetails.open = true;
      
      const locSummary = document.createElement("summary");
      locSummary.textContent = "📍 場所・背景 (Location)";
      locSummary.style.fontWeight = "bold";
      locSummary.style.margin = "10px 0 5px";
      locSummary.style.cursor = "pointer";
      locDetails.appendChild(locSummary);
      
      Object.entries(LOCATIONS).forEach(([cat, items]) => {
        locDetails.appendChild(createDetails(cat, items));
      });
      section.appendChild(locDetails);

      parent.appendChild(section);

      // 翻訳辞書登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(LOCATIONS).flat().forEach(item => {
            if (item.en && item.ja) dict[item.en] = item.ja;
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      const enable = document.getElementById("bg-grad-enable");
      if (enable && enable.checked) {
        const s = document.getElementById("bg-grad-start").value;
        const e = document.getElementById("bg-grad-end").value;
        tags.push(`${s} and ${e} gradient background`);
      }
      document.querySelectorAll(".background-v4-integrated input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

