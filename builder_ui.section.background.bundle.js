// Auto-generated bundle for section 'background'
// v5をベースに背景語を大幅増量した統合版 (v6)

(function(){
(function(){
  "use strict";

  const VERSION = 6;
  const KEY = "background";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

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
    { label: "銀 (Silver)", val: "silver" },
    { label: "茶 (Brown)", val: "brown" },
    { label: "灰 (Gray)", val: "gray" },
    { label: "紺 (Navy)", val: "navy" },
    { label: "ライム (Lime)", val: "lime" }
  ];
  const LOCATIONS = {
    "シンプル・パターン (Simple/Pattern)": [
      { ja: "シンプル背景", en: "simple background" },
      { ja: "白背景", en: "white background" },
      { ja: "黒背景", en: "black background" },
      { ja: "透過背景 (切り抜き用)", en: "transparent background" },
      { ja: "グラデーション", en: "gradient background" },
      { ja: "抽象的な背景", en: "abstract background" },
      { ja: "幾何学模様", en: "geometric pattern" },
      { ja: "集中線", en: "speed lines" },
      { ja: "花柄/花柄背景", en: "floral pattern" },
      { ja: "グリッド", en: "grid background" },
      { ja: "チェック柄/市松", en: "checkered background" },
      { ja: "ストライプ", en: "striped background" },
      { ja: "水玉 (ドット)", en: "polka dot background" },
      { ja: "カモフラ迷彩", en: "camouflage pattern" },
      { ja: "和柄", en: "japanese pattern" },
      { ja: "ペイント/塗料", en: "splatter paint" },
      { ja: "大理石模様", en: "marble pattern" },
      { ja: "ステンドガラス風パターン", en: "stained glass pattern" },
      { ja: "レース模様", en: "lace pattern" },
      { ja: "ホログラム背景", en: "holographic background" },
      { ja: "オーロラグラデ", en: "aurora gradient background" },
      { ja: "万華鏡背景", en: "kaleidoscope background" }
    ],
    "部屋・居住空間 (Rooms/Living)": [
      { ja: "屋内", en: "indoors" },
      { ja: "部屋 (自室)", en: "bedroom" },
      { ja: "リビング", en: "living room" },
      { ja: "キッチン", en: "kitchen" },
      { ja: "ダイニング", en: "dining room" },
      { ja: "お風呂場", en: "bathroom" },
      { ja: "洗面所", en: "washroom" },
      { ja: "トイレ", en: "toilet" },
      { ja: "玄関", en: "entrance hall" },
      { ja: "廊下 (家)", en: "hallway" },
      { ja: "階段", en: "stairs" },
      { ja: "ベッドの上", en: "on bed" },
      { ja: "窓際", en: "by the window" },
      { ja: "ベランダ/バルコニー", en: "balcony" },
      { ja: "屋根裏部屋", en: "attic" },
      { ja: "豪邸/洋館内部", en: "mansion interior" },
      { ja: "暖炉の前", en: "fireplace" },
      { ja: "廃墟 (屋内)", en: "abandoned room" },
      { ja: "テラス", en: "terrace" },
      { ja: "ウッドデッキ", en: "wooden deck" },
      { ja: "サンルーム", en: "sunroom" },
      { ja: "温室", en: "greenhouse interior" },
      { ja: "書斎", en: "study room" },
      { ja: "図書室", en: "private library" },
      { ja: "ロフト", en: "loft interior" }
    ],
    "和風・旅館・温泉 (Japanese/Ryokan/Onsen)": [
      { ja: "和室", en: "tatami room" },
      { ja: "縁側", en: "engawa" },
      { ja: "離れの和室", en: "ryokan room" },
      { ja: "露天風呂付き客室", en: "room with open-air bath" },
      { ja: "旅館の大広間", en: "ryokan hall" },
      { ja: "露天風呂", en: "open-air bath" },
      { ja: "岩風呂", en: "rock bath" },
      { ja: "足湯", en: "foot bath" },
      { ja: "温泉/大浴場", en: "onsen" },
      { ja: "サウナ", en: "sauna" },
      { ja: "温泉街", en: "hot spring town" },
      { ja: "和風中庭", en: "japanese courtyard" }
    ],
    "学校・職場・公共施設 (School/Work/Public)": [
      { ja: "教室", en: "classroom" },
      { ja: "黒板前", en: "blackboard" },
      { ja: "学校の廊下", en: "school hallway" },
      { ja: "学校の屋上", en: "school rooftop" },
      { ja: "保健室", en: "infirmary" },
      { ja: "体育館", en: "gym" },
      { ja: "部室", en: "clubroom" },
      { ja: "図書館", en: "library" },
      { ja: "実験室/理科室", en: "science lab" },
      { ja: "職員室", en: "staff room" },
      { ja: "オフィス/事務所", en: "office" },
      { ja: "会議室", en: "conference room" },
      { ja: "病院 (病室)", en: "hospital room" },
      { ja: "手術室", en: "operating room" },
      { ja: "工場/プラント", en: "factory" },
      { ja: "倉庫", en: "warehouse" },
      { ja: "美術館/博物館", en: "museum" },
      { ja: "非常階段", en: "emergency staircase" },
      { ja: "シャワールーム", en: "shower room" },
      { ja: "洗濯室", en: "laundry room" },
      { ja: "病院ロビー", en: "hospital lobby" },
      { ja: "診察待合室", en: "clinic waiting room" },
      { ja: "美術室", en: "art room" },
      { ja: "音楽室", en: "music room" },
      { ja: "講堂", en: "auditorium" },
      { ja: "温室棟", en: "school greenhouse" }
    ],
    "商業・娯楽・レジャー (Commercial/Leisure)": [
      { ja: "カフェ", en: "cafe" },
      { ja: "カフェテラス", en: "cafe terrace" },
      { ja: "レストラン", en: "restaurant" },
      { ja: "バー/酒場", en: "bar" },
      { ja: "屋上バー", en: "rooftop bar" },
      { ja: "ラウンジ", en: "hotel lounge" },
      { ja: "スパラウンジ", en: "spa lounge" },
      { ja: "コンビニ", en: "convenience store" },
      { ja: "スーパーマーケット", en: "supermarket" },
      { ja: "ショッピングモール", en: "shopping mall" },
      { ja: "ブティック/服屋", en: "clothing store" },
      { ja: "本屋", en: "bookstore" },
      { ja: "ゲームセンター", en: "arcade" },
      { ja: "カジノ", en: "casino" },
      { ja: "映画館", en: "movie theater" },
      { ja: "映画館の席", en: "movie theater seat" },
      { ja: "ライブステージ", en: "concert stage" },
      { ja: "楽屋", en: "dressing room" },
      { ja: "カラオケルーム", en: "karaoke room" },
      { ja: "遊園地", en: "amusement park" },
      { ja: "サーカス", en: "circus tent" },
      { ja: "プールサイド", en: "poolside" },
      { ja: "インフィニティプール", en: "infinity pool" },
      { ja: "アクアリウム", en: "aquarium" },
      { ja: "植物園", en: "botanical garden greenhouse" }
    ],
    "スポーツ・競技 (Sports)": [
      { ja: "スタジアム", en: "stadium" },
      { ja: "野球場", en: "baseball field" },
      { ja: "サッカーコート", en: "soccer field" },
      { ja: "テニスコート", en: "tennis court" },
      { ja: "バスケコート", en: "basketball court" },
      { ja: "プール (競泳)", en: "swimming pool" },
      { ja: "陸上トラック", en: "track and field" },
      { ja: "リング (格闘技)", en: "boxing ring" },
      { ja: "道場", en: "dojo" },
      { ja: "ジム (筋トレ)", en: "fitness gym" },
      { ja: "フェンシング場", en: "fencing hall" },
      { ja: "アーチェリー場", en: "archery range" }
    ],
    "交通・乗り物 (Transport/Vehicles)": [
      { ja: "駅のホーム", en: "train station platform" },
      { ja: "改札口", en: "ticket gate" },
      { ja: "電車内", en: "train interior" },
      { ja: "バス停", en: "bus stop" },
      { ja: "バス車内", en: "bus interior" },
      { ja: "車内 (運転席)", en: "car interior" },
      { ja: "ガソリンスタンド", en: "gas station" },
      { ja: "空港ロビー", en: "airport lobby" },
      { ja: "飛行機内 (客席)", en: "airplane cabin" },
      { ja: "コックピット", en: "cockpit" },
      { ja: "港/埠頭", en: "harbor" },
      { ja: "船の甲板", en: "ship deck" },
      { ja: "豪華客船内", en: "cruise ship interior" },
      { ja: "宇宙船内", en: "spaceship interior" },
      { ja: "地下駐車場", en: "underground parking" },
      { ja: "高架下", en: "underpass" },
      { ja: "停車中の列車内", en: "parked train carriage" },
      { ja: "夜のホーム", en: "station platform at night" }
    ],
    "都市・街並み (Urban/Architecture)": [
      { ja: "街中/ストリート", en: "street" },
      { ja: "交差点", en: "intersection" },
      { ja: "都市景観 (俯瞰)", en: "cityscape" },
      { ja: "高層ビル群", en: "skyscrapers" },
      { ja: "夜景", en: "night city" },
      { ja: "ネオン街", en: "neon lights" },
      { ja: "路地裏", en: "back alley" },
      { ja: "スラム街", en: "slums" },
      { ja: "屋上", en: "rooftop" },
      { ja: "橋の上", en: "on the bridge" },
      { ja: "電話ボックス", en: "phone booth" },
      { ja: "トンネル", en: "tunnel" },
      { ja: "工事現場", en: "construction site" },
      { ja: "廃墟 (都市)", en: "ruins" },
      { ja: "石畳の街路", en: "cobblestone street" },
      { ja: "噴水広場", en: "plaza fountain" },
      { ja: "時計塔前", en: "clock tower square" },
      { ja: "旧市街", en: "old town street" },
      { ja: "市場通り", en: "market street" }
    ],
    "城・宮殿・神殿・歴史建築 (Castle/Palace/Historic)": [
      { ja: "神社", en: "shrine" },
      { ja: "鳥居", en: "torii" },
      { ja: "寺院", en: "temple" },
      { ja: "日本庭園", en: "japanese garden" },
      { ja: "城 (日本)", en: "japanese castle" },
      { ja: "城下町/江戸の町", en: "edo period street" },
      { ja: "茶室", en: "tea room" },
      { ja: "お祭り", en: "festival" },
      { ja: "西洋の城/城外観", en: "castle" },
      { ja: "宮殿/王宮", en: "palace" },
      { ja: "玉座の間", en: "throne room" },
      { ja: "教会/大聖堂", en: "church" },
      { ja: "ステンドグラス", en: "stained glass" },
      { ja: "西洋の古い街並み", en: "old european street" },
      { ja: "図書館 (古典的)", en: "grand library" },
      { ja: "古代遺跡", en: "ancient ruins" },
      { ja: "ピラミッド", en: "pyramid" },
      { ja: "城の外壁前", en: "castle exterior" },
      { ja: "城門前", en: "castle gate" },
      { ja: "城の中庭", en: "castle courtyard" },
      { ja: "城内の回廊", en: "castle corridor" },
      { ja: "城の大広間", en: "castle hall" },
      { ja: "宮殿の中庭", en: "palace courtyard" },
      { ja: "回廊庭園", en: "cloister garden" },
      { ja: "中庭回廊", en: "courtyard corridor" },
      { ja: "王座へ続く階段", en: "grand staircase hall" }
    ],
    "自然・森林・山岳 (Nature/Forest/Mountain)": [
      { ja: "屋外", en: "outdoors" },
      { ja: "青空", en: "blue sky" },
      { ja: "雲海", en: "sea of clouds" },
      { ja: "星空/天の川", en: "starry sky" },
      { ja: "満月", en: "full moon" },
      { ja: "森/森林", en: "forest" },
      { ja: "密林/ジャングル", en: "jungle" },
      { ja: "竹林", en: "bamboo forest" },
      { ja: "並木道", en: "tree-lined street" },
      { ja: "断崖絶壁", en: "cliff" },
      { ja: "洞窟", en: "cave" },
      { ja: "草原", en: "meadow" },
      { ja: "花畑", en: "flower field" },
      { ja: "庭園", en: "garden" },
      { ja: "公園", en: "park" },
      { ja: "ひまわり畑", en: "sunflower field" },
      { ja: "砂漠", en: "desert" },
      { ja: "オアシス", en: "oasis" },
      { ja: "氷河/氷の世界", en: "glacier" },
      { ja: "島", en: "island" },
      { ja: "雪原", en: "snowfield" },
      { ja: "紅葉の庭園", en: "autumn garden" },
      { ja: "桜並木", en: "cherry blossom avenue" }
    ],
    "水辺・海・湖 (Water/Sea/Lakeside)": [
      { ja: "海/ビーチ", en: "ocean" },
      { ja: "砂浜", en: "sandy beach" },
      { ja: "湖", en: "lake" },
      { ja: "湖畔", en: "lakeside" },
      { ja: "川", en: "river" },
      { ja: "川べり/河川敷", en: "riverside" },
      { ja: "隠れた滝", en: "hidden waterfall" },
      { ja: "滝", en: "waterfall" },
      { ja: "水中洞窟", en: "underwater cave" },
      { ja: "月明かりの湖畔", en: "moonlit lakeside" },
      { ja: "入り江", en: "hidden cove" },
      { ja: "崖上テラス", en: "cliffside terrace" }
    ],
    "ファンタジー・神殿・魔法 (Fantasy/Magic/Temple)": [
      { ja: "ファンタジー風景", en: "fantasy world" },
      { ja: "浮遊島", en: "floating island" },
      { ja: "魔法の森", en: "magic forest" },
      { ja: "ダンジョン", en: "dungeon" },
      { ja: "魔法陣", en: "magic circle" },
      { ja: "異世界", en: "otherworld" },
      { ja: "水晶洞窟", en: "crystal cave" },
      { ja: "古代神殿", en: "ancient temple interior" },
      { ja: "天空神殿", en: "celestial temple" },
      { ja: "魔法学院の廊下", en: "magic academy hallway" },
      { ja: "魔導図書館", en: "arcane library" },
      { ja: "ポータルの間", en: "portal chamber" },
      { ja: "竜の巣", en: "dragon lair" },
      { ja: "妖精の森", en: "fairy grove" },
      { ja: "月の祭壇", en: "moon altar" },
      { ja: "浮遊城", en: "floating castle" },
      { ja: "星の回廊", en: "astral corridor" }
    ],
    "SF・研究施設 (Sci-Fi/Lab)": [
      { ja: "水中/海中都市", en: "underwater city" },
      { ja: "深海", en: "deep sea" },
      { ja: "宇宙", en: "space" },
      { ja: "惑星/月面", en: "planet surface" },
      { ja: "サイバーパンク都市", en: "cyberpunk city" },
      { ja: "スチームパンク都市", en: "steampunk city" },
      { ja: "研究所/ラボ/実験室", en: "laboratory" },
      { ja: "サーバールーム", en: "server room" },
      { ja: "ポストアポカリプス", en: "post-apocalyptic" },
      { ja: "機械都市の中枢", en: "mecha control room" }
    ],
    "時間帯・天候 (Time & Weather)": [
      { ja: "昼 (Day)", en: "day" },
      { ja: "朝 (Morning)", en: "morning" },
      { ja: "夕暮れ (Sunset)", en: "sunset" },
      { ja: "マジックアワー/黄昏", en: "golden hour" },
      { ja: "夜 (Night)", en: "night" },
      { ja: "深夜 (Midnight)", en: "midnight" },
      { ja: "晴れ", en: "sunny" },
      { ja: "雨", en: "rain" },
      { ja: "土砂降り", en: "heavy rain" },
      { ja: "曇り", en: "cloudy" },
      { ja: "雪", en: "snow" },
      { ja: "吹雪", en: "blizzard" },
      { ja: "霧 (Fog)", en: "fog" },
      { ja: "強風", en: "windy" },
      { ja: "雷", en: "lightning" },
      { ja: "虹", en: "rainbow" },
      { ja: "オーロラ", en: "aurora" },
      { ja: "夜明け", en: "dawn" },
      { ja: "薄明", en: "twilight" },
      { ja: "月光", en: "moonlight" },
      { ja: "夕立", en: "sudden shower" }
    ],
    "季節・イベント (Seasonal)": [
      { ja: "春 (桜)", en: "cherry blossoms" },
      { ja: "新緑", en: "fresh green" },
      { ja: "夏 (入道雲)", en: "cumulonimbus" },
      { ja: "夏祭り", en: "summer festival" },
      { ja: "花火大会", en: "fireworks" },
      { ja: "秋 (紅葉)", en: "autumn leaves" },
      { ja: "ススキ", en: "pampas grass" },
      { ja: "冬 (雪景色)", en: "winter" },
      { ja: "クリスマス", en: "christmas" },
      { ja: "ハロウィン", en: "halloween" },
      { ja: "正月", en: "new year" },
      { ja: "バレンタイン", en: "valentine" },
      { ja: "誕生日", en: "birthday" },
      { ja: "結婚式", en: "wedding" },
      { ja: "七夕", en: "tanabata festival" },
      { ja: "春の庭園祭", en: "spring garden festival" },
      { ja: "雪あかり", en: "snow lantern festival" }
    ]
  };

  const BG_EFFECTS = {
    "パーティクル・浮遊物 (Particles)": [
      { ja: "花弁が舞う", en: "falling petals" },
      { ja: "桜吹雪", en: "cherry blossom petals" },
      { ja: "羽根が舞う", en: "feathers" },
      { ja: "黒い羽", en: "black feathers" },
      { ja: "キラキラ", en: "sparkles" },
      { ja: "光の粒子", en: "light particles" },
      { ja: "紙吹雪", en: "confetti" },
      { ja: "火の粉", en: "embers" },
      { ja: "気泡 (水中)", en: "air bubbles" },
      { ja: "塵/埃", en: "dust" },
      { ja: "雪の結晶", en: "snowflakes" },
      { ja: "蛍", en: "fireflies" }
    ],
    "空気感・雰囲気 (Atmosphere)": [
      { ja: "濃霧", en: "heavy fog" },
      { ja: "湯気", en: "steam" },
      { ja: "陽光・木漏れ日", en: "sunbeams" },
      { ja: "逆光 (ゴッドレイ)", en: "god rays" },
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "ボケ効果", en: "bokeh" },
      { ja: "モーションブラー", en: "motion blur" },
      { ja: "薄煙", en: "haze" },
      { ja: "体積光", en: "volumetric light" }
    ],
    "漫符・演出 (Manga/Style Effects)": [
      { ja: "枠線", en: "border" },
      { ja: "ビネット (四隅暗)", en: "vignette" },
      { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "ノイズ加工", en: "film grain" }
    ]
  };
  const SECRET_LOCATIONS = {
    "🔒 R-18: 背徳的な場所 (Secret Locations)": [
      { ja: "ラブホテル", en: "love hotel room" },
      { ja: "取調室", en: "interrogation room" },
      { ja: "診察室 (婦人科)", en: "medical examination room" },
      { ja: "個室ビデオ/ネカフェ", en: "private cubicle" },
      { ja: "公衆トイレ", en: "public restroom" },
      { ja: "更衣室/ロッカー", en: "locker room" },
      { ja: "檻の中", en: "inside a cage" },
      { ja: "拷問部屋", en: "torture chamber" },
      { ja: "奴隷市場", en: "slave market" },
      { ja: "診察台", en: "medical exam table" },
      { ja: "保護室/隔離室", en: "padded cell" },
      { ja: "木馬の部屋", en: "wooden horse room" },
      { ja: "フェティッシュスタジオ", en: "fetish studio" }
    ],
    "🏢 R-18: 露出・公衆シチュ (Exhibitionism)": [
      { ja: "人通りのある街中", en: "crowded street" },
      { ja: "夜の公園", en: "park at night" },
      { ja: "試着室", en: "fitting room" },
      { ja: "プールの更衣室", en: "poolside locker room" },
      { ja: "電車内 (痴漢シチュ)", en: "crowded train" }
    ],
    "🖤 R-18: 淫獄・異空間 (Dark Fantasy)": [
      { ja: "触手部屋", en: "tentacle room" },
      { ja: "地下牢", en: "dungeon cell" },
      { ja: "祭壇 (生贄)", en: "sacrificial altar" },
      { ja: "魔王の寝室", en: "demon lord's bedroom" },
      { ja: "淫魔の棲家", en: "succubus lair" },
      { ja: "肉壁の部屋", en: "flesh wall room" },
      { ja: "触手の穴/ピット", en: "tentacle pit" },
      { ja: "生体実験室", en: "biological laboratory" }
    ]
  };

  function createDetails(summaryText, items, isSecret = false) {
    const details = document.createElement("details");
    details.className = isSecret ? "bg-cat-secret" : "background-cat";
    details.open = false;
    if (isSecret) details.style.border = "1px solid #ffcccc";

    const summary = document.createElement("summary");
    summary.textContent = summaryText;
    if (isSecret) summary.style.color = "#b00000";
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
      opt.value = c.val;
      opt.textContent = c.label;
      startSel.appendChild(opt);
    });

    const endSel = document.createElement('select');
    endSel.id = "bg-grad-end";
    GRADIENT_COLORS.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.val;
      opt.textContent = c.label;
      if (c.val === "blue") opt.selected = true;
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
      const tag = `${startSel.value} and ${endSel.value} gradient background`;
      preview.textContent = `出力タグ: ${tag}`;
      preview.style.color = "#008800";
    };
    [startSel, endSel, enableCb].forEach(el => el.addEventListener('change', update));
    update();
    return wrapper;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-background") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "background-v6-integrated";
      section.appendChild(createGradientBuilder());

      const locDetails = document.createElement("details");
      locDetails.className = "bg-section-group";
      locDetails.open = true;
      const locSummary = document.createElement("summary");
      locSummary.textContent = "📍 場所・背景 (Location)";
      locSummary.style.fontWeight = "bold";
      locSummary.style.margin = "10px 0 5px";
      locSummary.style.cursor = "pointer";
      locDetails.appendChild(locSummary);
      Object.entries(LOCATIONS).forEach(([cat, items]) => locDetails.appendChild(createDetails(cat, items)));
      section.appendChild(locDetails);

      const effDetails = document.createElement("details");
      effDetails.className = "bg-section-group";
      effDetails.open = false;
      const effSummary = document.createElement("summary");
      effSummary.textContent = "✨ 背景エフェクト (Background Effects)";
      effSummary.style.fontWeight = "bold";
      effSummary.style.margin = "10px 0 5px";
      effSummary.style.cursor = "pointer";
      effDetails.appendChild(effSummary);
      Object.entries(BG_EFFECTS).forEach(([cat, items]) => effDetails.appendChild(createDetails(cat, items)));
      section.appendChild(effDetails);

      if (IS_UNLOCKED) {
        const secretGroup = document.createElement("details");
        secretGroup.style.marginTop = "10px";
        secretGroup.style.border = "2px solid #ffcccc";
        secretGroup.style.borderRadius = "8px";
        const secretSum = document.createElement("summary");
        secretSum.textContent = "🔒 🔞 シチュエーション背景";
        secretSum.style.fontWeight = "bold";
        secretSum.style.color = "#b00000";
        secretGroup.appendChild(secretSum);
        Object.entries(SECRET_LOCATIONS).forEach(([cat, items]) => secretGroup.appendChild(createDetails(cat, items, true)));
        section.appendChild(secretGroup);
      }

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        [LOCATIONS, BG_EFFECTS, SECRET_LOCATIONS].forEach(catObj => {
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
      document.querySelectorAll(".background-v6-integrated input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
