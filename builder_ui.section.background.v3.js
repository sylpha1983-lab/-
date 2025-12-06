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

