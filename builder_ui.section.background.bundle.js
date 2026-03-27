// Auto-generated bundle for section 'background'
// v5をベースに背景語を大幅増量した統合版 (v6 hotfix visible background)

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
    "🏠 部屋・居住空間 (Rooms/Living)": [
      {
        group: "🛏️ 寝室・プライベート",
        items: [
          { ja: "部屋 (自室)", en: "bedroom" },
          { ja: "寝室", en: "bedroom interior" },
          { ja: "ベッドの上", en: "on bed" },
          { ja: "窓際", en: "by the window" },
          { ja: "クローゼット・衣装部屋", en: "walk-in closet" },
          { ja: "ドレッサー前", en: "in front of vanity" },
          { ja: "配信部屋", en: "streaming room" },
          { ja: "オタク部屋", en: "otaku room" },
          { ja: "屋根裏部屋", en: "attic" },
          { ja: "ロフト", en: "loft interior" }
        ]
      },
      {
        group: "🛋️ 居間・共有空間",
        items: [
          { ja: "リビング", en: "living room" },
          { ja: "ダイニング", en: "dining room" },
          { ja: "暖炉の前", en: "fireplace" },
          { ja: "豪邸/洋館内部", en: "mansion interior" }
        ]
      },
      {
        group: "🍳 水回り・生活動線",
        items: [
          { ja: "キッチン", en: "kitchen" },
          { ja: "アイランドキッチン", en: "island kitchen" },
          { ja: "お風呂場", en: "bathroom" },
          { ja: "シャワールーム", en: "shower room" },
          { ja: "洗面所", en: "washroom" },
          { ja: "脱衣所", en: "dressing room" },
          { ja: "トイレ", en: "toilet" },
          { ja: "ランドリールーム", en: "laundry room" },
          { ja: "玄関", en: "entrance hall" },
          { ja: "廊下 (家)", en: "hallway" },
          { ja: "階段", en: "stairs" },
          { ja: "踊り場", en: "stair landing" }
        ]
      },
      {
        group: "🌿 半屋外・開放空間",
        items: [
          { ja: "ベランダ/バルコニー", en: "balcony" },
          { ja: "テラス", en: "terrace" },
          { ja: "ウッドデッキ", en: "wooden deck" },
          { ja: "サンルーム", en: "sunroom" }
        ]
      },
      {
        group: "📚 書斎・趣味空間",
        items: [
          { ja: "書斎", en: "study room" },
          { ja: "図書室", en: "private library" },
          { ja: "書庫", en: "archive room" },
          { ja: "作業部屋", en: "workroom" },
          { ja: "アトリエ", en: "atelier" },
          { ja: "ゲーム部屋", en: "game room" }
        ]
      },
      {
        group: "🕯️ 特殊室内・雰囲気空間",
        items: [
          { ja: "屋内", en: "indoors" },
          { ja: "温室", en: "greenhouse interior" },
          { ja: "空き部屋", en: "empty room" },
          { ja: "物置部屋", en: "storage room" },
          { ja: "地下室", en: "basement room" },
          { ja: "秘密の部屋", en: "secret room" },
          { ja: "古い洋館の一室", en: "old mansion room" },
          { ja: "廃墟 (屋内)", en: "abandoned room" }
        ]
      }
    ],
    "♨️ 和風・旅館・温泉 (Japanese/Ryokan/Onsen)": [
      {
        group: "🏯 和室・客室",
        items: [
          { ja: "和室", en: "tatami room" },
          { ja: "離れの和室", en: "ryokan room" },
          { ja: "露天風呂付き客室", en: "room with open-air bath" },
          { ja: "布団の敷かれた和室", en: "tatami room with futon" },
          { ja: "床の間のある和室", en: "tatami room with alcove" },
          { ja: "高級旅館の客室", en: "luxury ryokan room" },
          { ja: "障子越しの室内", en: "interior behind shoji screen" },
          { ja: "畳の寝間", en: "tatami sleeping room" }
        ]
      },
      {
        group: "🍵 館内・くつろぎ空間",
        items: [
          { ja: "旅館の大広間", en: "ryokan hall" },
          { ja: "縁側", en: "engawa" },
          { ja: "和風中庭", en: "japanese courtyard" },
          { ja: "旅館のロビー", en: "ryokan lobby" },
          { ja: "旅館の廊下", en: "ryokan hallway" },
          { ja: "木造旅館の階段", en: "wooden inn staircase" },
          { ja: "囲炉裏の間", en: "irori room" },
          { ja: "茶室", en: "tea room" },
          { ja: "和風ラウンジ", en: "japanese lounge" },
          { ja: "お土産売り場", en: "souvenir shop" },
          { ja: "売店コーナー", en: "gift shop corner" },
          { ja: "卓球スペース", en: "table tennis area" },
          { ja: "休憩処", en: "rest area" },
          { ja: "マッサージチェアコーナー", en: "massage chair corner" },
          { ja: "自販機コーナー", en: "vending machine corner" },
          { ja: "湯上がりラウンジ", en: "after-bath lounge area" },
          { ja: "ロビーの土産棚", en: "lobby souvenir shelf" },
          { ja: "浴衣コーナー", en: "yukata corner" }
        ]
      },
      {
        group: "♨️ 温泉・浴場",
        items: [
          { ja: "温泉/大浴場", en: "onsen" },
          { ja: "露天風呂", en: "open-air bath" },
          { ja: "岩風呂", en: "rock bath" },
          { ja: "足湯", en: "foot bath" },
          { ja: "サウナ", en: "sauna" },
          { ja: "檜風呂", en: "hinoki bath" },
          { ja: "貸切風呂", en: "private bath" },
          { ja: "湯上がり処", en: "after-bath lounge" },
          { ja: "洗い場", en: "bath washing area" },
          { ja: "脱衣所", en: "changing room" },
          { ja: "湯けむりの浴場", en: "steamy bathhouse" },
          { ja: "炭酸泉", en: "carbonated spring bath" },
          { ja: "白濁の湯", en: "milky white hot spring" },
          { ja: "にごり湯", en: "cloudy hot spring" },
          { ja: "寝湯", en: "reclining bath" },
          { ja: "水風呂", en: "cold plunge bath" },
          { ja: "外気浴スペース", en: "open-air cooling area" }
        ]
      },
      {
        group: "🏮 温泉街・屋外",
        items: [
          { ja: "温泉街", en: "hot spring town" },
          { ja: "石畳の温泉街", en: "stone-paved hot spring town" },
          { ja: "夜の温泉街", en: "night hot spring town" },
          { ja: "雪の温泉街", en: "snowy hot spring town" },
          { ja: "旅館の玄関前", en: "front entrance of ryokan" },
          { ja: "和風庭園", en: "japanese garden" },
          { ja: "灯籠の小道", en: "stone lantern path" },
          { ja: "土産物屋通り", en: "souvenir shop street" },
          { ja: "温泉まんじゅう店", en: "onsen manju shop" },
          { ja: "足湯広場", en: "footbath plaza" },
          { ja: "提灯の商店通り", en: "lantern-lit shopping street" },
          { ja: "湯けむり立つ路地", en: "steam-filled alley" }
        ]
      },
      {
        group: "🌙 上質・演出空間",
        items: [
          { ja: "夜の温泉旅館", en: "night ryokan" },
          { ja: "雪見露天風呂", en: "snow-view open-air bath" },
          { ja: "湯けむりの石畳", en: "steam-covered stone pavement" },
          { ja: "提灯の並ぶ旅館街", en: "lantern-lined inn street" },
          { ja: "和傘のある庭園通路", en: "garden walkway with wagasa" },
          { ja: "月夜の露天風呂", en: "moonlit open-air bath" },
          { ja: "朝靄の温泉宿", en: "misty hot spring inn at dawn" },
          { ja: "雪降る貸切風呂", en: "snowy private bath" },
          { ja: "金色の灯りに包まれた売店", en: "souvenir shop bathed in warm golden light" },
          { ja: "誰もいない深夜の卓球室", en: "empty midnight table tennis room" }
        ]
      }
    ],
    "🎓 学校・学園 (School/Academy)": [
      {
        group: "📚 教室・学習空間",
        items: [
          { ja: "教室", en: "classroom" },
          { ja: "黒板前", en: "blackboard" },
          { ja: "図書館", en: "school library" },
          { ja: "職員室", en: "staff room" },
          { ja: "保健室", en: "infirmary" }
        ]
      },
      {
        group: "🏫 校内共有空間",
        items: [
          { ja: "学校の廊下", en: "school hallway" },
          { ja: "下駄箱・昇降口", en: "school shoe lockers" },
          { ja: "学校の屋上", en: "school rooftop" },
          { ja: "講堂", en: "auditorium" },
          { ja: "購買部", en: "school store" },
          { ja: "生徒会室", en: "student council room" }
        ]
      },
      {
        group: "🧪 特別教室・専門室",
        items: [
          { ja: "実験室/理科室", en: "science lab" },
          { ja: "美術室", en: "art room" },
          { ja: "音楽室", en: "music room" },
          { ja: "温室棟", en: "school greenhouse" }
        ]
      },
      {
        group: "🏃 体育・部活空間",
        items: [
          { ja: "体育館", en: "gym" },
          { ja: "部室", en: "clubroom" },
          { ja: "プールサイド", en: "poolside at school" }
        ]
      },
      {
        group: "🌙 学園演出空間",
        items: [
          { ja: "放課後の教室", en: "classroom after school" },
          { ja: "夜の学校の廊下", en: "school hallway at night" }
        ]
      },
      {
        group: "🏫 校舎外観・校門前",
        items: [
          { ja: "学校の正門前", en: "front gate of school" },
          { ja: "校舎の外", en: "outside school building" },
          { ja: "学校の昇降口前", en: "school entrance area" },
          { ja: "校庭側の校舎外観", en: "school building from schoolyard side" },
          { ja: "放課後の校門前", en: "school gate after school" },
          { ja: "雨の学校前", en: "school exterior in the rain" }
        ]
      }
    ],
    "💼 職場・仕事場 (Workplace/Job Site)": [
      {
        group: "🖥️ オフィス・事務空間",
        items: [
          { ja: "オフィス/事務所", en: "office" },
          { ja: "会議室", en: "conference room" },
          { ja: "受付カウンター", en: "reception counter" },
          { ja: "休憩室", en: "break room" },
          { ja: "給湯室", en: "office kitchenette" },
          { ja: "コピー室", en: "copy room" },
          { ja: "社長室", en: "executive office" },
          { ja: "オープンオフィス", en: "open-plan office" },
          { ja: "コールセンター", en: "call center" },
          { ja: "オフィスビルの外", en: "outside office building" },
          { ja: "会社の正面玄関前", en: "front entrance of company" },
          { ja: "雑居ビルの前", en: "in front of multi-tenant building" },
          { ja: "商業ビルの外", en: "outside commercial building" }
        ]
      },
      {
        group: "🏭 工場・作業現場",
        items: [
          { ja: "工場/プラント", en: "factory" },
          { ja: "工場の作業ライン", en: "factory production line" },
          { ja: "資材置き場", en: "material yard" },
          { ja: "建設現場のプレハブ事務所", en: "construction site prefab office" },
          { ja: "仮設詰所", en: "temporary site office" },
          { ja: "工場の外", en: "outside factory" },
          { ja: "工場の搬入口前", en: "factory loading entrance" },
          { ja: "建設現場のゲート前", en: "construction site gate" },
          { ja: "プレハブ事務所の外", en: "outside prefab site office" }
        ]
      },
      {
        group: "🔧 技術職・整備空間",
        items: [
          { ja: "サーバールーム", en: "server room" },
          { ja: "研究室", en: "research laboratory" },
          { ja: "整備工場", en: "maintenance garage" },
          { ja: "工具室", en: "tool room" },
          { ja: "機械室", en: "machine room" }
        ]
      },
      {
        group: "📦 倉庫・バックヤード",
        items: [
          { ja: "倉庫", en: "warehouse" },
          { ja: "搬入口", en: "loading dock" },
          { ja: "在庫棚エリア", en: "storage shelves area" },
          { ja: "荷捌き場", en: "shipping area" },
          { ja: "倉庫の外", en: "outside warehouse" }
        ]
      },
      {
        group: "🌙 職場演出空間",
        items: [
          { ja: "無人の会議室", en: "empty conference room" },
          { ja: "深夜のオフィス", en: "office at midnight" },
          { ja: "残業中の事務所", en: "office during overtime" }
        ]
      },
    ],
    "🏛️ 公共施設・インフラ (Public/Infrastructure)": [
      {
        group: "🏢 行政・公共窓口",
        items: [
          { ja: "市役所窓口", en: "city hall counter" },
          { ja: "役所の待合", en: "government office waiting area" },
          { ja: "公民館", en: "community center" },
          { ja: "市役所の前", en: "front of city hall" }
        ]
      },
      {
        group: "📖 図書館・文化施設",
        items: [
          { ja: "図書閲覧室", en: "public reading room" },
          { ja: "美術館/博物館", en: "museum" },
          { ja: "閉館後の美術館", en: "museum after closing" },
          { ja: "図書館の外", en: "outside library" },
          { ja: "美術館の外", en: "outside museum" }
        ]
      },
      {
        group: "🏥 医療・福祉施設",
        items: [
          { ja: "病院 (病室)", en: "hospital room" },
          { ja: "病院ロビー", en: "hospital lobby" },
          { ja: "診察待合室", en: "clinic waiting room" },
          { ja: "手術室", en: "operating room" },
          { ja: "診察室", en: "examination room" },
          { ja: "処置室", en: "treatment room" },
          { ja: "ナースステーション", en: "nurse station" },
          { ja: "病院の廊下", en: "hospital hallway" },
          { ja: "無菌室", en: "sterile room" },
          { ja: "深夜の病院ロビー", en: "hospital lobby at midnight" },
          { ja: "病院の外", en: "outside hospital" },
          { ja: "救急外来の入口前", en: "emergency entrance" }
        ]
      },
      {
        group: "🚉 交通・移動空間",
        items: [
          { ja: "駅のホーム", en: "train platform" },
          { ja: "改札前", en: "ticket gate area" },
          { ja: "地下通路", en: "underground passage" },
          { ja: "バスターミナル", en: "bus terminal" },
          { ja: "空港ロビー", en: "airport lobby" },
          { ja: "搭乗口前", en: "boarding gate" },
          { ja: "駐車場ビル", en: "parking garage" },
          { ja: "雨の駅ホーム", en: "rainy train platform" },
          { ja: "駅前ロータリー", en: "station rotary" },
          { ja: "空港ターミナルの外", en: "outside airport terminal" }
        ]
      },
      {
        group: "🚨 治安・防災施設",
        items: [
          { ja: "警備室", en: "security office" },
          { ja: "交番", en: "police box" },
          { ja: "警察署受付", en: "police station reception" },
          { ja: "消防署車庫", en: "fire station garage" },
          { ja: "非常階段", en: "emergency staircase" },
          { ja: "警察署の外", en: "outside police station" },
          { ja: "交番の前", en: "front of police box" },
          { ja: "消防署の外", en: "outside fire station" }
        ]
      },
      {
        group: "🌙 公共演出空間",
        items: [
          { ja: "無人の図書館", en: "empty library" },
          { ja: "夜の公共ロビー", en: "public lobby at night" },
          { ja: "静かな地下通路", en: "quiet underground passage" }
        ]
      },
    ],
    "🍴 飲食店 (Dining/Food Spots)": [
      {
        group: "☕️ カフェ・洋食 (Cafe & Western)",
        items: [
          { ja: "カフェ", en: "cafe" },
          { ja: "カフェテラス", en: "cafe terrace" },
          { ja: "レストラン", en: "restaurant" },
          { ja: "ファミレス", en: "family restaurant" },
          { ja: "ビストロ", en: "bistro" },
          { ja: "高級レストラン", en: "fine dining restaurant" },
          { ja: "ダイナー", en: "american diner" },
          { ja: "フードコート", en: "food court" },
          { ja: "ハンバーガーショップ", en: "burger shop" },
          { ja: "ピザ店", en: "pizza restaurant" }
        ]
      },
      {
        group: "🍣 和食系 (Japanese)",
        items: [
          { ja: "寿司屋", en: "sushi restaurant" },
          { ja: "回転寿司", en: "conveyor belt sushi restaurant" },
          { ja: "定食屋", en: "set meal restaurant" },
          { ja: "天ぷら屋", en: "tempura restaurant" },
          { ja: "和菓子屋", en: "wagashi shop" }
        ]
      },
      {
        group: "🍜 麺類 (Noodles)",
        items: [
          { ja: "ラーメン屋", en: "ramen shop" },
          { ja: "つけ麺屋", en: "tsukemen shop" },
          { ja: "うどん屋", en: "udon restaurant" },
          { ja: "そば屋", en: "soba restaurant" },
          { ja: "中華飯店", en: "chinese restaurant" }
        ]
      },
      {
        group: "🥩 肉系 (Meat)",
        items: [
          { ja: "牛丼屋", en: "gyudon restaurant" },
          { ja: "焼き鳥屋", en: "yakitori restaurant" },
          { ja: "焼肉店", en: "yakiniku restaurant" },
          { ja: "鉄板焼き店", en: "teppanyaki restaurant" },
          { ja: "ステーキハウス", en: "steakhouse" }
        ]
      },
      {
        group: "🍰 甘味 (Sweets)",
        items: [
          { ja: "パン屋", en: "bakery" },
          { ja: "ベーカリーカフェ", en: "bakery cafe" },
          { ja: "スイーツ店", en: "dessert shop" },
          { ja: "アイスクリーム店", en: "ice cream shop" },
          { ja: "クレープ屋", en: "crepe stand" },
          { ja: "たこ焼き屋", en: "takoyaki stand" },
          { ja: "屋台の焼きそば屋", en: "festival yakisoba stall" }
        ]
      },
      {
        group: "🍺 酒場 (Bar & Lounge)",
        items: [
          { ja: "居酒屋", en: "izakaya" },
          { ja: "バー/酒場", en: "bar" },
          { ja: "屋上バー", en: "rooftop bar" },
          { ja: "ワインバー", en: "wine bar" },
          { ja: "ホテルラウンジ", en: "hotel lounge" },
          { ja: "スパラウンジ", en: "spa lounge" }
        ]
      }
    ],
    "🛍 商業・ショッピング (Commercial/Shopping)": [
      {
        group: "🏪 小売店・日常店舗",
        items: [
          { ja: "コンビニ", en: "convenience store" },
          { ja: "スーパーマーケット", en: "supermarket" },
          { ja: "ドラッグストア", en: "drugstore" },
          { ja: "商店街の店先", en: "shopping street storefront" }
        ]
      },
      {
        group: "🛒 大型商業・売り場",
        items: [
          { ja: "ショッピングモール", en: "shopping mall" },
          { ja: "デパート売り場", en: "department store floor" },
          { ja: "家電量販店", en: "electronics superstore" }
        ]
      },
      {
        group: "👗 専門店・ブランド店",
        items: [
          { ja: "ブティック/服屋", en: "clothing store" },
          { ja: "本屋", en: "bookstore" },
          { ja: "花屋", en: "flower shop" },
          { ja: "雑貨店", en: "variety goods store" },
          { ja: "靴屋", en: "shoe store" },
          { ja: "宝石店", en: "jewelry store" }
        ]
      },
      {
        group: "💄 サービス・美容・接客空間",
        items: [
          { ja: "コスメ売り場", en: "cosmetics counter" },
          { ja: "美容院", en: "hair salon" },
          { ja: "ネイルサロン", en: "nail salon" },
          { ja: "エステ受付", en: "esthetic salon reception" },
          { ja: "店舗カウンター", en: "shop counter" }
        ]
      },
      {
        group: "🌙 商業演出空間",
        items: [
          { ja: "深夜のコンビニ前", en: "outside convenience store at midnight" },
          { ja: "閉店間際の売り場", en: "shop floor near closing time" }
        ]
      }
    ],
    "🎮 娯楽・アミューズメント (Entertainment/Amusement)": [
      {
        group: "🕹 ゲームセンター・アーケード",
        items: [
          { ja: "ゲームセンター", en: "arcade" },
          { ja: "レトロアーケード", en: "retro arcade" },
          { ja: "ネオンのアーケードフロア", en: "neon arcade floor" },
          { ja: "深夜のゲームセンター", en: "arcade at midnight" },
          { ja: "混雑したゲームセンター", en: "crowded arcade" },
          { ja: "閉店間際のアーケード", en: "arcade near closing time" },
          { ja: "薄暗い古いゲーセン", en: "dim old arcade" },
          { ja: "2階建てゲームセンター", en: "two-story arcade" },
          { ja: "商業ビル内のゲームセンター", en: "arcade inside commercial building" }
        ]
      },
      {
        group: "🎵 音ゲーコーナー",
        items: [
          { ja: "音ゲーコーナー", en: "rhythm game area" },
          { ja: "リズムゲーム筐体エリア", en: "rhythm game cabinet area" },
          { ja: "ダンスゲームエリア", en: "dance game area" },
          { ja: "大音量スピーカー前", en: "in front of loud arcade speakers" },
          { ja: "音ゲー筐体が並ぶ通路", en: "walkway lined with rhythm game cabinets" },
          { ja: "ネオンに照らされた音ゲー島", en: "neon-lit rhythm game island" },
          { ja: "上級者が集まる音ゲーエリア", en: "advanced players rhythm game area" },
          { ja: "深夜の無人音ゲーコーナー", en: "empty rhythm game corner at midnight" },
          { ja: "イベントポスターの貼られた音ゲー壁面", en: "rhythm game wall with event posters" }
        ]
      },
      {
        group: "🔫 ガンシューティング・バトル系",
        items: [
          { ja: "ガンシューティングコーナー", en: "gun shooting game area" },
          { ja: "ゾンビシューティング筐体前", en: "in front of zombie shooting cabinet" },
          { ja: "近未来シューティング筐体エリア", en: "futuristic shooting game cabinet area" },
          { ja: "2人協力型ガンゲームコーナー", en: "two-player cooperative gun game area" },
          { ja: "レーザーサイトが走るゲーム筐体前", en: "in front of arcade cabinet with laser sights" },
          { ja: "戦場風シューティングブース", en: "battlefield-style shooting booth" },
          { ja: "暗がりのガンゲーム通路", en: "dark gun game corridor" },
          { ja: "SFシューティングエリア", en: "science fiction shooting area" }
        ]
      },
      {
        group: "🥊 体感・スポーツゲーム",
        items: [
          { ja: "パンチングマシーン前", en: "in front of punching machine" },
          { ja: "バスケゲームコーナー", en: "arcade basketball game area" },
          { ja: "エアホッケー台", en: "air hockey table" },
          { ja: "体感ゲーム筐体エリア", en: "motion arcade game area" },
          { ja: "スポーツゲームゾーン", en: "sports arcade game zone" },
          { ja: "叩く系ゲームコーナー", en: "drumming and striking game area" },
          { ja: "パワー測定マシン前", en: "in front of strength test machine" },
          { ja: "振動する大型体感筐体前", en: "in front of large vibrating motion cabinet" }
        ]
      },
      {
        group: "🚗 レース・ドライブゲーム",
        items: [
          { ja: "レースゲーム筐体エリア", en: "racing game cabinet area" },
          { ja: "バイクゲーム筐体前", en: "in front of motorcycle arcade cabinet" },
          { ja: "ドライブゲームコーナー", en: "driving game area" },
          { ja: "シート型レーシング筐体前", en: "in front of seat-style racing cabinet" },
          { ja: "夜景風ドライブゲーム筐体", en: "nightscape driving game cabinet" },
          { ja: "赤い筐体が並ぶレースエリア", en: "racing area lined with red cabinets" },
          { ja: "対戦型レースゲーム島", en: "competitive racing game island" }
        ]
      },
      {
        group: "👊 格闘・対戦ゲーム",
        items: [
          { ja: "格闘ゲーム対戦台", en: "fighting game versus cabinet" },
          { ja: "アーケード対戦コーナー", en: "arcade versus game area" },
          { ja: "レトロ格ゲー台前", en: "in front of retro fighting game cabinet" },
          { ja: "対戦待ちの並ぶ筐体列", en: "row of cabinets with players waiting to challenge" },
          { ja: "eスポーツ風アーケード対戦エリア", en: "esports-style arcade battle area" },
          { ja: "薄暗い対戦台の列", en: "dim row of versus cabinets" },
          { ja: "野次馬の集まる格ゲー台前", en: "in front of fighting game cabinet surrounded by spectators" }
        ]
      },
      {
        group: "🧸 UFOキャッチャー・プライズ",
        items: [
          { ja: "UFOキャッチャーコーナー", en: "claw machine area" },
          { ja: "プライズゲームエリア", en: "prize game area" },
          { ja: "ぬいぐるみ景品棚の前", en: "in front of plush prize shelf" },
          { ja: "ガラス筐体が並ぶ景品コーナー", en: "prize corner lined with glass cabinets" },
          { ja: "カラフルなクレーンゲーム通路", en: "colorful crane game walkway" },
          { ja: "お菓子系クレーンゲーム前", en: "in front of snack claw machine" },
          { ja: "フィギュア景品台前", en: "in front of figure prize machine" },
          { ja: "深夜の無人クレーンゲーム島", en: "empty claw machine island at midnight" },
          { ja: "プライズ壁面エリア", en: "prize display wall area" }
        ]
      },
      {
        group: "📷 プリクラ・撮影系",
        items: [
          { ja: "プリクラコーナー", en: "photo sticker booth area" },
          { ja: "プリントシール機エリア", en: "photo booth machine area" },
          { ja: "デコレーション待機スペース", en: "photo booth decoration waiting area" },
          { ja: "カーテン付き撮影ブース前", en: "in front of curtained photo booth" },
          { ja: "女子向けプリクラゾーン", en: "girls photo booth zone" },
          { ja: "ネオンポップな撮影スペース", en: "neon pop photo space" },
          { ja: "鏡と照明のあるプリクラ前", en: "in front of photo booth with mirrors and lights" },
          { ja: "放課後のプリクラコーナー", en: "photo booth area after school" }
        ]
      },
      {
        group: "🎰 メダル・大型遊技",
        items: [
          { ja: "メダルゲームコーナー", en: "medal game area" },
          { ja: "大型メダル筐体前", en: "in front of large medal game cabinet" },
          { ja: "キラキラしたメダルフロア", en: "sparkling medal game floor" },
          { ja: "子ども向けメダルゲーム島", en: "kids medal game island" },
          { ja: "スロット風ゲーム筐体列", en: "row of slot-style arcade cabinets" },
          { ja: "電飾が強い遊技フロア", en: "brightly lit amusement floor" },
          { ja: "当たり演出が走る大型機前", en: "in front of large cabinet with jackpot effects" }
        ]
      },
      {
        group: "🌙 ゲーセン演出空間",
        items: [
          { ja: "深夜のゲームセンター", en: "arcade at midnight" },
          { ja: "雨の日のアーケード入口", en: "arcade entrance on a rainy day" },
          { ja: "ネオン反射の床", en: "floor reflecting neon lights" },
          { ja: "閉店間際の静かなゲーセン", en: "quiet arcade near closing time" },
          { ja: "誰もいない音ゲーコーナー", en: "empty rhythm game corner" },
          { ja: "チカチカ光る景品エリア", en: "flickering prize area" },
          { ja: "無人の対戦台列", en: "empty row of versus cabinets" },
          { ja: "夕方の放課後ゲーセン", en: "after-school arcade in the evening" },
          { ja: "きらびやかな大型アミューズメント施設", en: "glittering large amusement center" },
          { ja: "古びた地方のゲームセンター", en: "old local arcade" }
        ]
      },
      {
        group: "🎰 カジノ・遊技空間",
        items: [
          { ja: "カジノ", en: "casino" },
          { ja: "ポーカールーム", en: "poker room" },
          { ja: "スロットフロア", en: "slot machine floor" },
          { ja: "VIPカジノラウンジ", en: "vip casino lounge" }
        ]
      },
      {
        group: "🎳 室内レジャー・遊技場",
        items: [
          { ja: "ボウリング場", en: "bowling alley" },
          { ja: "ダーツバー", en: "darts bar" },
          { ja: "ビリヤード場", en: "billiards hall" },
          { ja: "卓球場", en: "table tennis hall" },
          { ja: "カラオケルーム", en: "karaoke room" }
        ]
      },
      {
        group: "🎥 観賞・ステージ空間",
        items: [
          { ja: "映画館", en: "movie theater lobby" },
          { ja: "映画館の席", en: "movie theater seat" },
          { ja: "ライブステージ", en: "concert stage" },
          { ja: "楽屋", en: "dressing room" }
        ]
      },
      {
        group: "🌙 娯楽演出空間",
        items: [
          { ja: "深夜のゲームセンター", en: "arcade at midnight" },
          { ja: "ネオンのカジノフロア", en: "neon casino floor" }
        ]
      }
    ],
    "🌴 レジャー・外出スポット (Leisure/Outing)": [
      {
        group: "🎡 遊園地・テーマパーク",
        items: [
          { ja: "遊園地", en: "amusement park" },
          { ja: "観覧車前", en: "in front of ferris wheel" },
          { ja: "メリーゴーランド周辺", en: "merry-go-round area" },
          { ja: "テーマパーク通路", en: "theme park walkway" }
        ]
      },
      {
        group: "🌳 公園・広場・外遊び",
        items: [
          { ja: "公園", en: "park" },
          { ja: "噴水広場", en: "plaza fountain" },
          { ja: "河川敷", en: "riverbank" }
        ]
      },
      {
        group: "🏖 観光・休日スポット",
        items: [
          { ja: "プールサイド", en: "poolside" },
          { ja: "インフィニティプール", en: "infinity pool" },
          { ja: "アクアリウム", en: "aquarium hall" },
          { ja: "植物園", en: "botanical garden greenhouse" },
          { ja: "水族館ホール", en: "aquarium hall interior" },
          { ja: "動物園通路", en: "zoo walkway" },
          { ja: "展望台", en: "observation deck" },
          { ja: "海辺の遊歩道", en: "seaside promenade" }
        ]
      },
      {
        group: "🛶 アクティブレジャー",
        items: [
          { ja: "キャンプ場", en: "campground" },
          { ja: "バーベキュー場", en: "barbecue area" },
          { ja: "スキー場ロッジ前", en: "in front of ski lodge" }
        ]
      },
      {
        group: "🌙 レジャー演出空間",
        items: [
          { ja: "夜の遊園地", en: "amusement park at night" },
          { ja: "夕暮れの広場", en: "plaza at dusk" }
        ]
      }
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

    const hasGroups = Array.isArray(items) && items.some(item => Array.isArray(item.items));
    const content = document.createElement("div");
    content.style.marginTop = "5px";

    if (hasGroups) {
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.gap = "6px";

      items.forEach(group => {
        const child = createDetails(group.group || group.ja || "小分類", group.items || [], isSecret);
        child.style.margin = "0";
        child.style.border = isSecret ? "1px solid #ffcccc" : "1px solid #e5e7eb";
        child.style.borderRadius = "8px";
        child.style.background = "#fafafa";
        child.style.padding = "4px 6px";
        content.appendChild(child);
      });
    } else {
      content.style.display = "grid";
      content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";
      content.style.gap = "4px";

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
    }

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
        const collectTranslation = (entry) => {
          if (!entry) return;
          if (Array.isArray(entry)) {
            entry.forEach(collectTranslation);
            return;
          }
          if (entry.items) {
            collectTranslation(entry.items);
            return;
          }
          if (entry.en && entry.ja) dict[entry.en] = entry.ja;
        };
        [LOCATIONS, BG_EFFECTS, SECRET_LOCATIONS].forEach(catObj => {
          Object.values(catObj).forEach(collectTranslation);
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
