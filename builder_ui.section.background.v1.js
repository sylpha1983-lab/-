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

