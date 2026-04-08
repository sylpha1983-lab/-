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
          { ja: "カフェテリア", en: "cafeteria" },
          { ja: "ハンバーガーショップ", en: "burger shop" },
          { ja: "イタリアンレストラン", en: "italian restaurant" },
          { ja: "ベーカリー・パン屋", en: "bakery and bread shop" },
          { ja: "たこ焼き店", en: "takoyaki stand" },
          { ja: "お好み焼き店", en: "okonomiyaki restaurant" },
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
          { ja: "和菓子屋", en: "wagashi shop" },
          { ja: "甘味処", en: "japanese sweets cafe" },
          { ja: "かき氷店", en: "kakigori shop" }
        ]
      },
      {
        group: "🍜 麺類 (Noodles)",
        items: [
          { ja: "ラーメン屋", en: "ramen shop" },
          { ja: "つけ麺屋", en: "tsukemen shop" },
          { ja: "うどん屋", en: "udon restaurant" },
          { ja: "そば屋", en: "soba restaurant" },
          { ja: "中華料理店", en: "chinese restaurant" }
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
          { ja: "デザートショップ", en: "dessert specialty shop" },
          { ja: "アイスクリーム店", en: "ice cream shop" },
          { ja: "ジェラート店", en: "gelato shop" },
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
          { ja: "カラオケルーム", en: "karaoke room" },
          { ja: "温浴ラウンジ", en: "spa lounge" },
          { ja: "温浴施設", en: "spa facility" },
          { ja: "リゾートプール", en: "resort pool" },
          { ja: "映画館ロビー", en: "cinema lobby" }
        ]
      },
      {
        group: "🏨 宿泊・滞在空間",
        items: [
          { ja: "ホテルロビー", en: "hotel lobby lounge" },
          { ja: "ホテルの廊下", en: "hotel corridor" },
          { ja: "ホテル客室", en: "business hotel room" },
          { ja: "旅館の和室", en: "ryokan tatami room" },
          { ja: "旅館の廊下", en: "ryokan corridor" },
          { ja: "高層ホテルラウンジ", en: "high-rise hotel lounge" }
        ]
      },
      {
        group: "🚉 交通・移動施設の室内",
        items: [
          { ja: "駅の改札前", en: "station ticket gate hall" },
          { ja: "駅の待合室", en: "station waiting room" },
          { ja: "新幹線の車内", en: "shinkansen carriage" },
          { ja: "空港搭乗ゲート", en: "airport boarding gate lounge" },
          { ja: "空港ロビー", en: "airport terminal lobby" },
          { ja: "フェリーラウンジ", en: "ferry lounge" },
          { ja: "夜行バス車内", en: "overnight coach interior" }
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
      { ja: "バレーコート", en: "volleyball court" },
      { ja: "プール (競泳)", en: "swimming pool" },
      { ja: "バドミントンコート", en: "badminton court" },
      { ja: "体操競技場", en: "gymnastics arena" },
      { ja: "卓球場", en: "table tennis hall" },
      { ja: "スケートリンク", en: "ice skating rink" },
      { ja: "陸上トラック", en: "track and field" },
      { ja: "リング (格闘技)", en: "boxing ring" },
      { ja: "ボクシングジム", en: "boxing gym" },
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

  function createCollectionCheckbox(item, sectionKey, collectionId, options = {}) {
    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "0.9em";
    label.style.padding = "2px 0";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.style.marginRight = "4px";
    cb.dataset.collectionId = collectionId;
    cb.dataset.collectionSection = sectionKey;

    if (options.isComplete) {
      cb.dataset.collectionRole = "complete";
      cb.dataset.collectionItemId = item.id;
    } else {
      cb.dataset.en = item.en;
      cb.dataset.collectionRole = "tag";
      cb.dataset.collectionItemId = item.en;
    }

    label.appendChild(cb);
    label.appendChild(document.createTextNode(item.ja));
    return { label, cb };
  }

  function clearCollectionLinkedState(root, keepValues = false) {
    const state = root.__collectionState || { linked: [] };
    state.linked.forEach(cb => {
      if (!cb) return;
      cb.dataset.autoFromComplete = "";
      if (!keepValues) cb.checked = false;
    });
    state.linked = [];
    state.activeCompleteId = null;
    root.__collectionState = state;
  }

  function applyCompleteSet(root, collection, completeItemId) {
    const state = root.__collectionState || { linked: [], suppress: false, activeCompleteId: null };
    const completeMap = root.__completeMap || {};
    const tagMap = root.__tagMap || {};
    const item = completeMap[completeItemId];
    if (!item) return;

    state.suppress = true;

    root.querySelectorAll('input[data-collection-role="complete"]').forEach(cb => {
      cb.checked = cb.dataset.collectionItemId === completeItemId;
    });
    clearCollectionLinkedState(root, false);

    const linked = [];
    ["base", "customize", "settings"].forEach(sectionKey => {
      (item.links && item.links[sectionKey] || []).forEach(tag => {
        const cb = tagMap[tag];
        if (!cb) return;
        cb.checked = true;
        cb.dataset.autoFromComplete = completeItemId;
        linked.push(cb);
      });
      const shelf = root.querySelector(`details[data-collection-shelf="${sectionKey}"]`);
      if (shelf) shelf.open = true;
    });

    state.linked = linked;
    state.activeCompleteId = completeItemId;
    state.suppress = false;
    root.__collectionState = state;
  }


  function flattenCollectionCompleteItems(items) {
    const out = [];
    (items || []).forEach(item => {
      if (Array.isArray(item.items)) {
        item.items.forEach(child => out.push(child));
      } else {
        out.push(item);
      }
    });
    return out;
  }

  function createCollectionOptionNode(root, collection, shelfKey, item) {
    const { label, cb } = createCollectionCheckbox(item, shelfKey, collection.id, { isComplete: shelfKey === "complete" });
    if (shelfKey !== "complete" && item.en) {
      root.__tagMap[item.en] = cb;
    }

    cb.addEventListener("change", () => {
      const state = root.__collectionState;
      if (state.suppress) return;

      if (shelfKey === "complete") {
        if (cb.checked) {
          applyCompleteSet(root, collection, item.id);
        } else if (state.activeCompleteId === item.id) {
          state.suppress = true;
          clearCollectionLinkedState(root, false);
          state.suppress = false;
          root.__collectionState = state;
        }
        return;
      }

      if (state.activeCompleteId) {
        const activeComplete = root.querySelector(`input[data-collection-role="complete"][data-collection-item-id="${state.activeCompleteId}"]`);
        state.suppress = true;
        if (activeComplete) activeComplete.checked = false;
        clearCollectionLinkedState(root, true);
        state.suppress = false;
        root.__collectionState = state;
      }
    });

    return label;
  }

  function createBackgroundCollection(collection) {
    const root = document.createElement("details");
    root.className = "bg-special-collection";
    root.style.border = "1px solid #dbe4f0";
    root.style.borderRadius = "10px";
    root.style.padding = "6px 8px";
    root.style.background = "#fbfdff";
    root.style.margin = "8px 0";
    root.open = false;

    const summary = document.createElement("summary");
    summary.textContent = collection.title;
    summary.style.fontWeight = "bold";
    summary.style.cursor = "pointer";
    root.appendChild(summary);

    const body = document.createElement("div");
    body.className = "bg-special-collection-body";
    body.style.display = "block";
    body.style.marginTop = "8px";

    const guide = document.createElement("div");
    guide.textContent = collection.subtitle || "";
    guide.style.fontSize = "0.86em";
    guide.style.color = "#4b5563";
    guide.style.margin = "4px 0 8px";
    body.appendChild(guide);

    root.__collectionState = { linked: [], suppress: false, activeCompleteId: null };
    root.__completeMap = Object.fromEntries(flattenCollectionCompleteItems(collection.complete || []).map(item => [item.id, item]));
    root.__tagMap = {};

    const shelves = [
      { key: "complete", title: "🎬 完成セット", items: collection.complete || [] },
      { key: "base", title: "🏠 ベース", items: collection.base || [] },
      { key: "customize", title: "🎨 カスタマイズ", items: collection.customize || [] },
      { key: "settings", title: "⚙ 設定", items: collection.settings || [] }
    ];

    shelves.forEach((shelf) => {
      const shelfDetails = document.createElement("details");
      shelfDetails.dataset.collectionShelf = shelf.key;
      shelfDetails.open = false;
      shelfDetails.style.margin = "6px 0";
      shelfDetails.style.border = "1px solid #e5e7eb";
      shelfDetails.style.borderRadius = "8px";
      shelfDetails.style.background = "#ffffff";
      shelfDetails.style.padding = "4px 6px";

      const shelfSummary = document.createElement("summary");
      shelfSummary.textContent = shelf.title;
      shelfSummary.style.cursor = "pointer";
      shelfSummary.style.fontWeight = "bold";
      shelfDetails.appendChild(shelfSummary);

      const shelfBody = document.createElement("div");
      shelfBody.style.display = "block";
      shelfBody.style.marginTop = "6px";

      const hasGroups = shelf.items.some(item => Array.isArray(item.items));
      if (hasGroups) {
        shelfBody.style.display = "flex";
        shelfBody.style.flexDirection = "column";
        shelfBody.style.gap = "6px";

        shelf.items.forEach((group) => {
          const groupDetails = document.createElement("details");
          groupDetails.open = false;
          groupDetails.style.margin = "0";
          groupDetails.style.border = "1px solid #e5e7eb";
          groupDetails.style.borderRadius = "8px";
          groupDetails.style.background = "#fafafa";
          groupDetails.style.padding = "4px 6px";

          const groupSummary = document.createElement("summary");
          groupSummary.textContent = group.group || "小分類";
          groupSummary.style.cursor = "pointer";
          groupSummary.style.fontWeight = "bold";
          groupDetails.appendChild(groupSummary);

          const groupBody = document.createElement("div");
          groupBody.style.display = "grid";
          groupBody.style.gridTemplateColumns = "repeat(auto-fill, minmax(180px, 1fr))";
          groupBody.style.gap = "4px";
          groupBody.style.marginTop = "6px";

          (group.items || []).forEach(item => {
            groupBody.appendChild(createCollectionOptionNode(root, collection, shelf.key, item));
          });

          groupDetails.appendChild(groupBody);
          shelfBody.appendChild(groupDetails);
        });
      } else {
        shelfBody.style.display = "grid";
        shelfBody.style.gridTemplateColumns = "repeat(auto-fill, minmax(160px, 1fr))";
        shelfBody.style.gap = "4px";

        shelf.items.forEach(item => {
          shelfBody.appendChild(createCollectionOptionNode(root, collection, shelf.key, item));
        });
      }

      shelfDetails.appendChild(shelfBody);
      body.appendChild(shelfDetails);
    });

    root.appendChild(body);
    return root;
  }


  function createCollectionGroup(collections) {
    const wrapper = document.createElement("div");
    wrapper.className = "bg-special-collections-zone";
    wrapper.style.marginBottom = "12px";

    const heading = document.createElement("div");
    heading.textContent = "🧩 背景特化コレクション";
    heading.style.fontSize = "0.92em";
    heading.style.fontWeight = "bold";
    heading.style.color = "#374151";
    heading.style.margin = "4px 0 8px";
    wrapper.appendChild(heading);

    collections.forEach(collection => wrapper.appendChild(createBackgroundCollection(collection)));

    const divider = document.createElement("div");
    divider.style.margin = "10px 0 6px";
    divider.style.paddingTop = "8px";
    divider.style.borderTop = "1px solid #d1d5db";
    divider.textContent = "📍 通常背景";
    divider.style.fontWeight = "bold";
    divider.style.color = "#4b5563";
    wrapper.appendChild(divider);

    return wrapper;
  }

  

  const BACKGROUND_COLLECTIONS = [
  {
    "id": "home_living_collection",
    "title": "🏠 家・居住空間特化コレクション",
    "subtitle": "部屋・窓・半屋外まで含めて、光、時間、天候、生活感を多層で噛ませる、家背景の深掘りコレクション",
    "complete": [
      {
        "group": "🛏 寝室",
        "items": [
          {
            "id": "home_bedroom_morning",
            "ja": "朝の寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "morning",
                "cozy atmosphere",
                "tidy room"
              ],
              "settings": [
                "by the window",
                "soft indoor light",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_bedroom_sun_drenched",
            "ja": "朝日が眩しい寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "morning",
                "sun-drenched room",
                "tidy room"
              ],
              "settings": [
                "strong morning sunlight",
                "by the window",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_bedroom_soft_dawn",
            "ja": "柔らかな朝光の寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "dawn",
                "sleepy atmosphere",
                "quiet atmosphere"
              ],
              "settings": [
                "soft indoor light",
                "swaying curtains",
                "folded blankets"
              ]
            }
          },
          {
            "id": "home_bedroom_quiet_day",
            "ja": "昼の静かな寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "day",
                "tidy room",
                "silent room"
              ],
              "settings": [
                "soft shadows",
                "houseplants",
                "by the window"
              ]
            }
          },
          {
            "id": "home_bedroom_twilight",
            "ja": "夕闇が差し込む寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "twilight",
                "silent room",
                "city glow"
              ],
              "settings": [
                "city skyline outside window",
                "indirect lighting",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_bedroom_dark_night",
            "ja": "夜の暗い寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "cool darkness",
                "late-night stillness"
              ],
              "settings": [
                "indirect lighting",
                "bed rumples",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_bedroom_moonlight",
            "ja": "月明かりの寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "moonlit room",
                "quiet atmosphere"
              ],
              "settings": [
                "moon visible from window",
                "moonbeam streaks",
                "swaying curtains"
              ]
            }
          },
          {
            "id": "home_bedroom_starlit",
            "ja": "星空が窓から見える寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "starlit room",
                "late-night stillness"
              ],
              "settings": [
                "stars visible from window",
                "by the window",
                "soft indoor light"
              ]
            }
          },
          {
            "id": "home_bedroom_rainy_night",
            "ja": "雨夜の寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "rainy night interior",
                "quiet atmosphere"
              ],
              "settings": [
                "rain-streaked window",
                "soft indoor light",
                "by the window"
              ]
            }
          },
          {
            "id": "home_bedroom_storm",
            "ja": "稲光が遠くを走る寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "storm light",
                "cool darkness"
              ],
              "settings": [
                "rain-streaked window",
                "wet glass reflections",
                "half-open window"
              ]
            }
          },
          {
            "id": "home_bedroom_neon",
            "ja": "ネオンが差し込む寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "neon glow",
                "lived-in feeling"
              ],
              "settings": [
                "city skyline outside window",
                "indirect lighting",
                "scattered papers"
              ]
            }
          },
          {
            "id": "home_bedroom_curtain_night",
            "ja": "カーテンが揺れる夜の寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "night breeze",
                "quiet atmosphere"
              ],
              "settings": [
                "swaying curtains",
                "half-open window",
                "moon visible from window"
              ]
            }
          },
          {
            "id": "home_bedroom_messy",
            "ja": "生活感のある散らかった寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "day",
                "messy room",
                "lived-in feeling"
              ],
              "settings": [
                "bed rumples",
                "scattered papers",
                "laundry basket"
              ]
            }
          },
          {
            "id": "home_bedroom_tidy",
            "ja": "整頓された静かな寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "day",
                "tidy room",
                "silent room"
              ],
              "settings": [
                "folded blankets",
                "soft indoor light",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_bedroom_winter_morning",
            "ja": "冬の冷たい朝の寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "winter morning",
                "winter chill",
                "tidy room"
              ],
              "settings": [
                "strong morning sunlight",
                "by the window",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_bedroom_summer_night",
            "ja": "夏の蒸し暑い夜の寝室",
            "links": {
              "base": [
                "bedroom interior"
              ],
              "customize": [
                "night",
                "summer heat",
                "lived-in feeling"
              ],
              "settings": [
                "half-open window",
                "swaying curtains",
                "bed rumples"
              ]
            }
          }
        ]
      },
      {
        "group": "🛋 リビング",
        "items": [
          {
            "id": "home_living_morning",
            "ja": "朝のリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "morning",
                "cozy atmosphere",
                "tidy room"
              ],
              "settings": [
                "soft indoor light",
                "houseplants",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_living_sunlit",
            "ja": "木漏れ日が揺れるリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "day",
                "cozy atmosphere",
                "soft shadows"
              ],
              "settings": [
                "by the window",
                "houseplants",
                "dust particles"
              ]
            }
          },
          {
            "id": "home_living_sunset",
            "ja": "夕暮れのリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "sunset",
                "warm ambient lighting",
                "cozy atmosphere"
              ],
              "settings": [
                "lamp light",
                "bokeh",
                "sofa cushions"
              ]
            }
          },
          {
            "id": "home_living_night_lamp",
            "ja": "暖灯だけの夜のリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "night",
                "warm ambient lighting",
                "quiet atmosphere"
              ],
              "settings": [
                "lamp light",
                "soft shadows",
                "tea set on table"
              ]
            }
          },
          {
            "id": "home_living_tv_only",
            "ja": "テレビの明かりだけのリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "night",
                "television glow",
                "late-night stillness"
              ],
              "settings": [
                "television light",
                "sofa cushions",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_living_rainy",
            "ja": "雨の日のリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "rainy day interior",
                "cozy atmosphere",
                "quiet atmosphere"
              ],
              "settings": [
                "rain-streaked window",
                "lamp light",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_living_family_trace",
            "ja": "家族の気配が残るリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "day",
                "lived-in feeling",
                "cozy atmosphere"
              ],
              "settings": [
                "sofa cushions",
                "tea set on table",
                "bookshelf silhouette"
              ]
            }
          },
          {
            "id": "home_living_messy",
            "ja": "生活感の濃い散らかったリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "day",
                "messy room",
                "lived-in feeling"
              ],
              "settings": [
                "scattered papers",
                "sofa cushions",
                "laundry basket"
              ]
            }
          },
          {
            "id": "home_living_tidy",
            "ja": "整頓された静かなリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "day",
                "tidy room",
                "silent room"
              ],
              "settings": [
                "soft indoor light",
                "bookshelf silhouette",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_living_moonlight",
            "ja": "月明かりが差すリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "night",
                "moonlit room",
                "quiet atmosphere"
              ],
              "settings": [
                "moon visible from window",
                "moonbeam streaks",
                "by the window"
              ]
            }
          },
          {
            "id": "home_living_neon",
            "ja": "ネオンが滲むリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "night",
                "neon glow",
                "city glow"
              ],
              "settings": [
                "city skyline outside window",
                "indirect lighting",
                "reflective floor"
              ]
            }
          },
          {
            "id": "home_living_winter_warm",
            "ja": "冬の夜のあたたかいリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "night",
                "winter chill",
                "warm ambient lighting"
              ],
              "settings": [
                "lamp light",
                "folded blankets",
                "tea set on table"
              ]
            }
          },
          {
            "id": "home_living_summer_breeze",
            "ja": "夏の夕方の風が通るリビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "summer dusk",
                "night breeze",
                "cozy atmosphere"
              ],
              "settings": [
                "half-open window",
                "swaying curtains",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_living_midnight_silence",
            "ja": "深夜の無音リビング",
            "links": {
              "base": [
                "living room interior"
              ],
              "customize": [
                "midnight",
                "silent room",
                "late-night stillness"
              ],
              "settings": [
                "indirect lighting",
                "soft shadows",
                "reflective floor"
              ]
            }
          }
        ]
      },
      {
        "group": "🍽 キッチン",
        "items": [
          {
            "id": "home_kitchen_morning",
            "ja": "朝のキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "morning",
                "tidy room",
                "cozy atmosphere"
              ],
              "settings": [
                "strong morning sunlight",
                "kitchen counter reflections",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_kitchen_bright_day",
            "ja": "昼の明るいキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "day",
                "tidy room",
                "spring freshness"
              ],
              "settings": [
                "soft indoor light",
                "kitchen counter reflections",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_kitchen_evening",
            "ja": "夕方の台所",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "sunset",
                "warm ambient lighting",
                "lived-in feeling"
              ],
              "settings": [
                "lamp light",
                "kitchen counter reflections",
                "sink clutter"
              ]
            }
          },
          {
            "id": "home_kitchen_night",
            "ja": "夜のキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "night",
                "quiet atmosphere",
                "late-night stillness"
              ],
              "settings": [
                "indirect lighting",
                "reflective floor",
                "glowing appliances"
              ]
            }
          },
          {
            "id": "home_kitchen_fridge_only",
            "ja": "冷蔵庫の灯りだけのキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "midnight",
                "refrigerator glow",
                "late-night stillness"
              ],
              "settings": [
                "glowing appliances",
                "reflective floor",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_kitchen_steam",
            "ja": "湯気の立つキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "day",
                "cozy atmosphere",
                "humid air"
              ],
              "settings": [
                "steam haze",
                "kitchen counter reflections",
                "sink clutter"
              ]
            }
          },
          {
            "id": "home_kitchen_rainy",
            "ja": "雨の日のキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "rainy day interior",
                "quiet atmosphere",
                "cozy atmosphere"
              ],
              "settings": [
                "rain-streaked window",
                "soft indoor light",
                "tea set on table"
              ]
            }
          },
          {
            "id": "home_kitchen_clean",
            "ja": "整頓された清潔なキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "day",
                "tidy room",
                "silent room"
              ],
              "settings": [
                "soft shadows",
                "reflective floor",
                "glowing appliances"
              ]
            }
          },
          {
            "id": "home_kitchen_livedin",
            "ja": "使い込まれた生活感のあるキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "day",
                "messy room",
                "lived-in feeling"
              ],
              "settings": [
                "sink clutter",
                "dishes on table",
                "glowing appliances"
              ]
            }
          },
          {
            "id": "home_kitchen_latenight_snack",
            "ja": "深夜の軽食キッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "midnight",
                "refrigerator glow",
                "lived-in feeling"
              ],
              "settings": [
                "glowing appliances",
                "dishes on table",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_kitchen_before_breakfast",
            "ja": "朝食前の静かなキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "dawn",
                "silent room",
                "tidy room"
              ],
              "settings": [
                "soft indoor light",
                "tea set on table",
                "kitchen counter reflections"
              ]
            }
          },
          {
            "id": "home_kitchen_citynight",
            "ja": "都市の光が映る夜のキッチン",
            "links": {
              "base": [
                "kitchen interior"
              ],
              "customize": [
                "night",
                "city glow",
                "neon glow"
              ],
              "settings": [
                "city skyline outside window",
                "wet glass reflections",
                "kitchen counter reflections"
              ]
            }
          }
        ]
      },
      {
        "group": "🧰 作業部屋・書斎",
        "items": [
          {
            "id": "home_study_messy",
            "ja": "散らかった作業部屋",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "day",
                "messy room",
                "lived-in feeling"
              ],
              "settings": [
                "scattered papers",
                "bookshelf silhouette",
                "table lamp glow"
              ]
            }
          },
          {
            "id": "home_study_allnighter",
            "ja": "徹夜明けの作業部屋",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "dawn",
                "sleepy atmosphere",
                "messy room"
              ],
              "settings": [
                "table lamp glow",
                "scattered papers",
                "dust particles"
              ]
            }
          },
          {
            "id": "home_study_morning",
            "ja": "朝光の作業部屋",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "morning",
                "tidy room",
                "quiet atmosphere"
              ],
              "settings": [
                "strong morning sunlight",
                "by the window",
                "bookshelf silhouette"
              ]
            }
          },
          {
            "id": "home_study_evening",
            "ja": "夕方の作業部屋",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "sunset",
                "quiet atmosphere",
                "soft shadows"
              ],
              "settings": [
                "table lamp glow",
                "city skyline outside window",
                "bookshelf silhouette"
              ]
            }
          },
          {
            "id": "home_study_lamp_night",
            "ja": "深夜のデスクライト作業部屋",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "midnight",
                "late-night stillness",
                "cool darkness"
              ],
              "settings": [
                "table lamp glow",
                "scattered papers",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_study_rain",
            "ja": "雨音の作業部屋",
            "links": {
              "base": [
                "window-side study room"
              ],
              "customize": [
                "rainy day interior",
                "rain-hushed quiet",
                "cozy atmosphere"
              ],
              "settings": [
                "rain-streaked window",
                "table lamp glow",
                "bookshelf silhouette"
              ]
            }
          },
          {
            "id": "home_study_tidy",
            "ja": "整頓された書斎",
            "links": {
              "base": [
                "bookshelf-lined study room"
              ],
              "customize": [
                "day",
                "tidy room",
                "silent room"
              ],
              "settings": [
                "bookshelf silhouette",
                "soft indoor light",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_study_monitor",
            "ja": "モニター光に染まる作業部屋",
            "links": {
              "base": [
                "monitor desk workspace"
              ],
              "customize": [
                "night",
                "screen-lit hush",
                "late-night stillness"
              ],
              "settings": [
                "monitor edge glow",
                "keyboard on desk",
                "cable clutter under desk"
              ]
            }
          },
          {
            "id": "home_study_winter",
            "ja": "冬のこもった作業部屋",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "winter morning",
                "heater-warm stillness",
                "silent room"
              ],
              "settings": [
                "folded blankets",
                "desk mug",
                "bookshelf silhouette"
              ]
            }
          },
          {
            "id": "home_study_summer",
            "ja": "夏の熱気が残る作業部屋",
            "links": {
              "base": [
                "window-side study room"
              ],
              "customize": [
                "summer heat",
                "warm summer night air",
                "lived-in feeling"
              ],
              "settings": [
                "half-open window",
                "swaying curtains",
                "scattered papers"
              ]
            }
          },
          {
            "id": "home_study_deadline_midnight",
            "ja": "締切前の深夜書斎",
            "links": {
              "base": [
                "monitor desk workspace"
              ],
              "customize": [
                "midnight",
                "deadline tension",
                "reference-cluttered focus"
              ],
              "settings": [
                "stacked reference books",
                "open notebook",
                "digital desk clock"
              ]
            }
          },
          {
            "id": "home_study_window_rain_hush",
            "ja": "雨音だけが残る窓際の書斎",
            "links": {
              "base": [
                "window-side study room"
              ],
              "customize": [
                "rainy day interior",
                "rain-hushed quiet",
                "deep focus silence"
              ],
              "settings": [
                "rain-streaked window",
                "desk lamp pool",
                "open notebook"
              ]
            }
          },
          {
            "id": "home_study_bookshelf_twilight",
            "ja": "夕暮れの本棚に囲まれた書斎",
            "links": {
              "base": [
                "bookshelf-lined study room"
              ],
              "customize": [
                "sunset",
                "quiet atmosphere",
                "lingering coffee scent"
              ],
              "settings": [
                "bookshelf silhouette",
                "desk mug",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_study_note_wall_night",
            "ja": "付箋の壁に向かう夜の作業部屋",
            "links": {
              "base": [
                "wall-storage study room"
              ],
              "customize": [
                "night",
                "screen-lit hush",
                "deadline tension"
              ],
              "settings": [
                "sticky note wall",
                "desk chair silhouette",
                "monitor edge glow"
              ]
            }
          },
          {
            "id": "home_study_coffee_afterwork",
            "ja": "コーヒーの残り香が沈む夜の書斎",
            "links": {
              "base": [
                "study room interior"
              ],
              "customize": [
                "night",
                "lingering coffee scent",
                "deep focus silence"
              ],
              "settings": [
                "desk mug",
                "pen holder",
                "lamp-lit desk surface"
              ]
            }
          },
          {
            "id": "home_study_floor_seat_dawn",
            "ja": "床座の机で朝を迎える作業部屋",
            "links": {
              "base": [
                "floor-seated work nook"
              ],
              "customize": [
                "dawn",
                "sleepy atmosphere",
                "mid-cleanup lived-in feeling"
              ],
              "settings": [
                "open notebook",
                "scattered papers",
                "dust particles"
              ]
            }
          }
        ]
      },
      {
        "group": "🌃 窓辺・バルコニー",
        "items": [
          {
            "id": "home_balcony_night_breeze",
            "ja": "夜風のバルコニー",
            "links": {
              "base": [
                "balcony"
              ],
              "customize": [
                "night",
                "night breeze",
                "quiet atmosphere"
              ],
              "settings": [
                "half-open window",
                "city skyline outside window",
                "swaying curtains"
              ]
            }
          },
          {
            "id": "home_balcony_sunset",
            "ja": "夕焼けのバルコニー",
            "links": {
              "base": [
                "balcony"
              ],
              "customize": [
                "sunset",
                "summer dusk",
                "cozy atmosphere"
              ],
              "settings": [
                "city skyline outside window",
                "soft shadows",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_balcony_rain",
            "ja": "雨のベランダ",
            "links": {
              "base": [
                "balcony"
              ],
              "customize": [
                "rainy day interior",
                "humid air",
                "quiet atmosphere"
              ],
              "settings": [
                "wet glass reflections",
                "rain-streaked window",
                "reflective floor"
              ]
            }
          },
          {
            "id": "home_balcony_stars",
            "ja": "星空のバルコニー",
            "links": {
              "base": [
                "balcony"
              ],
              "customize": [
                "night",
                "starlit room",
                "late-night stillness"
              ],
              "settings": [
                "stars visible from window",
                "city skyline outside window",
                "bokeh"
              ]
            }
          },
          {
            "id": "home_window_moon",
            "ja": "月見の窓辺",
            "links": {
              "base": [
                "window-side interior"
              ],
              "customize": [
                "night",
                "moonlit room",
                "quiet atmosphere"
              ],
              "settings": [
                "moon visible from window",
                "moonbeam streaks",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_window_morning",
            "ja": "朝日の窓辺",
            "links": {
              "base": [
                "window-side interior"
              ],
              "customize": [
                "morning",
                "sun-drenched room",
                "spring freshness"
              ],
              "settings": [
                "strong morning sunlight",
                "swaying curtains",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_window_neon",
            "ja": "ネオンの窓辺",
            "links": {
              "base": [
                "window-side interior"
              ],
              "customize": [
                "night",
                "neon glow",
                "city glow"
              ],
              "settings": [
                "city skyline outside window",
                "wet glass reflections",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_window_winter",
            "ja": "冬の冷えた窓辺",
            "links": {
              "base": [
                "window-side interior"
              ],
              "customize": [
                "winter chill",
                "day",
                "silent room"
              ],
              "settings": [
                "soft indoor light",
                "wet glass reflections",
                "curtain shadows"
              ]
            }
          },
          {
            "id": "home_balcony_laundry",
            "ja": "洗濯物が揺れるベランダ",
            "links": {
              "base": [
                "balcony"
              ],
              "customize": [
                "day",
                "night breeze",
                "lived-in feeling"
              ],
              "settings": [
                "swaying curtains",
                "hanging clothes",
                "houseplants"
              ]
            }
          },
          {
            "id": "home_window_citynight",
            "ja": "都市夜景を望む窓辺",
            "links": {
              "base": [
                "window-side interior"
              ],
              "customize": [
                "night",
                "city glow",
                "late-night stillness"
              ],
              "settings": [
                "city skyline outside window",
                "bokeh",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_balcony_after_rain_night",
            "ja": "雨上がりの夜風が残るバルコニー",
            "links": {
              "base": [
                "balcony railing corner"
              ],
              "customize": [
                "night",
                "post-rain damp air",
                "quiet atmosphere"
              ],
              "settings": [
                "wet balcony handrail",
                "night window reflections",
                "city skyline outside window"
              ]
            }
          },
          {
            "id": "home_balcony_laundry_dusk",
            "ja": "夕暮れに洗濯物の影が揺れるベランダ",
            "links": {
              "base": [
                "laundry balcony"
              ],
              "customize": [
                "sunset",
                "laundry-shadow sway",
                "lived-in feeling"
              ],
              "settings": [
                "hanging clothes",
                "clothespin basket",
                "wet balcony floor"
              ]
            }
          },
          {
            "id": "home_window_rain_evening",
            "ja": "雨粒が流れる夕方の窓辺",
            "links": {
              "base": [
                "rainy window nook"
              ],
              "customize": [
                "twilight",
                "rain-traced glass hush",
                "quiet atmosphere"
              ],
              "settings": [
                "rain-streaked window",
                "window latch",
                "wet glass reflections"
              ]
            }
          },
          {
            "id": "home_window_midnight_screen",
            "ja": "深夜の画面光が滲む窓辺",
            "links": {
              "base": [
                "window-side interior"
              ],
              "customize": [
                "midnight",
                "screen-lit hush",
                "late-night stillness"
              ],
              "settings": [
                "monitor edge glow",
                "night window reflections",
                "half-open curtain gap"
              ]
            }
          },
          {
            "id": "home_balcony_plants_morning",
            "ja": "朝の鉢植えに光が落ちるバルコニー",
            "links": {
              "base": [
                "plant-lined balcony"
              ],
              "customize": [
                "morning",
                "spring freshness",
                "plant-watered freshness"
              ],
              "settings": [
                "potted plants cluster",
                "watering can",
                "strong morning sunlight"
              ]
            }
          },
          {
            "id": "home_window_sheer_curtain_day",
            "ja": "薄いカーテン越しの昼の窓辺",
            "links": {
              "base": [
                "sheer-curtain window nook"
              ],
              "customize": [
                "day",
                "filtered daylight hush",
                "soft shadows"
              ],
              "settings": [
                "sheer curtain layers",
                "sunlight on sill",
                "window-seat cushion"
              ]
            }
          }
        ]
      },
      {
        "group": "🛁 洗面・浴室",
        "items": [
          {
            "id": "home_bath_steam",
            "ja": "湯気の立つ洗面・浴室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "night",
                "humid air",
                "cozy atmosphere"
              ],
              "settings": [
                "steam haze",
                "mirror condensation",
                "vanity light"
              ]
            }
          },
          {
            "id": "home_bath_morning",
            "ja": "朝の洗面台",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "morning",
                "tidy room",
                "spring freshness"
              ],
              "settings": [
                "strong morning sunlight",
                "vanity light",
                "reflective floor"
              ]
            }
          },
          {
            "id": "home_bath_night",
            "ja": "夜の静かな浴室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "night",
                "quiet atmosphere",
                "cool darkness"
              ],
              "settings": [
                "soft shadows",
                "cool tile reflections",
                "mirror condensation"
              ]
            }
          },
          {
            "id": "home_bath_rain",
            "ja": "雨夜の浴室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "night",
                "rainy night interior",
                "quiet atmosphere"
              ],
              "settings": [
                "rain-streaked window",
                "mirror condensation",
                "soft shadows"
              ]
            }
          },
          {
            "id": "home_bath_moon",
            "ja": "月明かりの浴室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "night",
                "moonlit room",
                "silent room"
              ],
              "settings": [
                "moon visible from window",
                "cool tile reflections",
                "moonbeam streaks"
              ]
            }
          },
          {
            "id": "home_bath_mirror_fog",
            "ja": "鏡が曇った浴室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "night",
                "humid air",
                "lived-in feeling"
              ],
              "settings": [
                "mirror condensation",
                "steam haze",
                "towel drape"
              ]
            }
          },
          {
            "id": "home_bath_clean",
            "ja": "清潔な白い洗面室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "day",
                "tidy room",
                "silent room"
              ],
              "settings": [
                "reflective floor",
                "vanity light",
                "towel drape"
              ]
            }
          },
          {
            "id": "home_bath_cold_tile",
            "ja": "冷たいタイルの浴室",
            "links": {
              "base": [
                "bathroom interior"
              ],
              "customize": [
                "night",
                "winter chill",
                "cool darkness"
              ],
              "settings": [
                "cool tile reflections",
                "soft shadows",
                "mirror condensation"
              ]
            }
          }
        ]
      },
      {
        "group": "🍛 カレー専門店",
        "items": [
          {
            "id": "store_curry_lunch_rush",
            "ja": "昼のカレー専門店ラッシュ",
            "links": {
              "base": [
                "curry specialty shop interior"
              ],
              "customize": [
                "lunch curry rush",
                "spice-scented dining air",
                "bright daytime curry lighting"
              ],
              "settings": [
                "laminated curry menu",
                "curry pot steam",
                "metal water pitcher"
              ]
            }
          },
          {
            "id": "store_curry_rainy_window",
            "ja": "雨夜のカレー専門店窓際席",
            "links": {
              "base": [
                "window-side curry table"
              ],
              "customize": [
                "rainy curry shop glow",
                "quiet curry window seat",
                "spice-scented dining air"
              ],
              "settings": [
                "steam-fogged window",
                "counter condiment set",
                "laminated curry menu"
              ]
            }
          },
          {
            "id": "store_curry_late_night_counter",
            "ja": "深夜のカレー専門店カウンター",
            "links": {
              "base": [
                "counter curry seat"
              ],
              "customize": [
                "late-night curry calm",
                "simmering curry steam",
                "quiet dining atmosphere"
              ],
              "settings": [
                "counter spoon canister",
                "stainless curry pass counter",
                "metal water pitcher"
              ]
            }
          },
          {
            "id": "store_curry_ticket_entry_evening",
            "ja": "夕方の券売機前カレー店",
            "links": {
              "base": [
                "ticket-machine curry entry"
              ],
              "customize": [
                "after-work curry warmth",
                "counter queue bustle",
                "bright daytime curry lighting"
              ],
              "settings": [
                "ticket vending machine",
                "hanging order slips",
                "counter condiment set"
              ]
            }
          },
          {
            "id": "store_curry_open_kitchen_noon",
            "ja": "昼のオープンキッチンのカレー店",
            "links": {
              "base": [
                "open-kitchen curry counter"
              ],
              "customize": [
                "kitchen clatter lunch pace",
                "freshly-served curry heat",
                "lunch curry rush"
              ],
              "settings": [
                "rice warmer corner",
                "tray with curry plates",
                "stainless curry pass counter"
              ]
            }
          },
          {
            "id": "store_curry_closing_quiet",
            "ja": "閉店前の静かなカレー専門店",
            "links": {
              "base": [
                "closing-time curry counter area"
              ],
              "customize": [
                "closing-time curry hush",
                "lingering spice afterglow",
                "late-night curry calm"
              ],
              "settings": [
                "stacked curry trays",
                "wiped stainless counter",
                "dim curry sign glow"
              ]
            }
          }
        ]
      }
    ],
    "base": [
      {
        "group": "🏠 室内空間",
        "items": [
          {
            "ja": "寝室",
            "en": "bedroom interior"
          },
          {
            "ja": "リビング",
            "en": "living room interior"
          },
          {
            "ja": "キッチン",
            "en": "kitchen interior"
          },
          {
            "ja": "ダイニング",
            "en": "dining room interior"
          },
          {
            "ja": "作業部屋・書斎",
            "en": "study room interior"
          },
          {
            "ja": "窓際の書斎",
            "en": "window-side study room"
          },
          {
            "ja": "本棚に囲まれた書斎",
            "en": "bookshelf-lined study room"
          },
          {
            "ja": "モニター前の作業机まわり",
            "en": "monitor desk workspace"
          },
          {
            "ja": "壁面収納のある書斎",
            "en": "wall-storage study room"
          },
          {
            "ja": "床座の作業机まわり",
            "en": "floor-seated work nook"
          },
          {
            "ja": "洗面・浴室",
            "en": "bathroom interior"
          },
          {
            "ja": "廊下",
            "en": "hallway interior"
          },
          {
            "ja": "ランドリールーム",
            "en": "laundry room"
          }
        ]
      },
      {
        "group": "🪟 窓・半屋外",
        "items": [
          {
            "ja": "窓辺",
            "en": "window-side interior"
          },
          {
            "ja": "バルコニー・ベランダ",
            "en": "balcony"
          },
          {
            "ja": "手すり際のバルコニー",
            "en": "balcony railing corner"
          },
          {
            "ja": "洗濯物のあるベランダ",
            "en": "laundry balcony"
          },
          {
            "ja": "鉢植えの並ぶバルコニー",
            "en": "plant-lined balcony"
          },
          {
            "ja": "雨粒を受ける窓辺",
            "en": "rainy window nook"
          },
          {
            "ja": "薄いカーテン越しの窓辺",
            "en": "sheer-curtain window nook"
          },
          {
            "ja": "窓際の腰掛けスペース",
            "en": "window-seat nook"
          },
          {
            "ja": "室内側から見る掃き出し窓まわり",
            "en": "sliding-door threshold"
          }
        ]
      }
    ],
    "customize": [
      {
        "group": "🕰 時間帯・光",
        "items": [
          {
            "ja": "夜明け",
            "en": "dawn"
          },
          {
            "ja": "朝",
            "en": "morning"
          },
          {
            "ja": "昼",
            "en": "day"
          },
          {
            "ja": "夕焼け",
            "en": "sunset"
          },
          {
            "ja": "夕闇・薄暮",
            "en": "twilight"
          },
          {
            "ja": "夜",
            "en": "night"
          },
          {
            "ja": "深夜",
            "en": "midnight"
          },
          {
            "ja": "朝日が強く差す",
            "en": "sun-drenched room"
          },
          {
            "ja": "月明かりの空気",
            "en": "moonlit room"
          },
          {
            "ja": "星明かりの空気",
            "en": "starlit room"
          },
          {
            "ja": "暖色照明",
            "en": "warm ambient lighting"
          },
          {
            "ja": "冷たい暗がり",
            "en": "cool darkness"
          },
          {
            "ja": "ネオンのにじみ",
            "en": "neon glow"
          },
          {
            "ja": "都市の明かり",
            "en": "city glow"
          },
          {
            "ja": "テレビの明かり",
            "en": "television glow"
          },
          {
            "ja": "冷蔵庫の灯り",
            "en": "refrigerator glow"
          }
        ]
      },
      {
        "group": "🌧 天候・空気",
        "items": [
          {
            "ja": "雨の日",
            "en": "rainy day interior"
          },
          {
            "ja": "雨夜",
            "en": "rainy night interior"
          },
          {
            "ja": "嵐の気配",
            "en": "storm light"
          },
          {
            "ja": "湿った空気",
            "en": "humid air"
          },
          {
            "ja": "夜風",
            "en": "night breeze"
          },
          {
            "ja": "冬の冷気",
            "en": "winter chill"
          },
          {
            "ja": "夏の熱気",
            "en": "summer heat"
          },
          {
            "ja": "春の清気",
            "en": "spring freshness"
          },
          {
            "ja": "夏の夕気",
            "en": "summer dusk"
          },
          {
            "ja": "冬の朝",
            "en": "winter morning"
          }
        ]
      },
      {
        "group": "🫧 生活感・気配",
        "items": [
          {
            "ja": "居心地のよさ",
            "en": "cozy atmosphere"
          },
          {
            "ja": "静かな空気",
            "en": "quiet atmosphere"
          },
          {
            "ja": "無音の静けさ",
            "en": "silent room"
          },
          {
            "ja": "眠気の残る空気",
            "en": "sleepy atmosphere"
          },
          {
            "ja": "深夜の静止感",
            "en": "late-night stillness"
          },
          {
            "ja": "整頓された状態",
            "en": "tidy room"
          },
          {
            "ja": "散らかった状態",
            "en": "messy room"
          },
          {
            "ja": "生活感",
            "en": "lived-in feeling"
          },
          {
            "ja": "柔らかな影",
            "en": "soft shadows"
          },
          {
            "ja": "締切前の張りつめ",
            "en": "deadline tension"
          },
          {
            "ja": "画面光に沈む静けさ",
            "en": "screen-lit hush"
          },
          {
            "ja": "書き物に沈む無音",
            "en": "deep focus silence"
          },
          {
            "ja": "雨音に沈む静けさ",
            "en": "rain-hushed quiet"
          },
          {
            "ja": "夏のぬるい夜気",
            "en": "warm summer night air"
          },
          {
            "ja": "暖房がたまる静けさ",
            "en": "heater-warm stillness"
          },
          {
            "ja": "片付け途中の生活感",
            "en": "mid-cleanup lived-in feeling"
          },
          {
            "ja": "コーヒーの残り香",
            "en": "lingering coffee scent"
          },
          {
            "ja": "資料に埋もれる集中感",
            "en": "reference-cluttered focus"
          }
        ]
      },
      {
        "group": "🌃 窓辺・バルコニーの空気",
        "items": [
          {
            "ja": "雨上がりの湿り気",
            "en": "post-rain damp air"
          },
          {
            "ja": "洗濯物の影が揺れる気配",
            "en": "laundry-shadow sway"
          },
          {
            "ja": "ガラスに雨筋が残る静けさ",
            "en": "rain-traced glass hush"
          },
          {
            "ja": "薄布越しの昼光のやわらぎ",
            "en": "filtered daylight hush"
          },
          {
            "ja": "植物に水をやったあとの清気",
            "en": "plant-watered freshness"
          },
          {
            "ja": "街明かりを受ける半屋外の余白",
            "en": "city-lit threshold calm"
          },
          {
            "ja": "窓を開けたあとの冷たい空気",
            "en": "window-open cool draft"
          },
          {
            "ja": "夜更けのガラス越しの孤独",
            "en": "glass-separated solitude"
          },
          {
            "ja": "遠い車音だけが残る夜気",
            "en": "distant traffic hush"
          },
          {
            "ja": "朝の鉢植えまわりの湿った匂い",
            "en": "damp balcony morning scent"
          }
        ]
      },
      {
        "group": "🍛 香り・熱気・客流れ",
        "items": [
          {
            "ja": "昼のカレー店ラッシュ",
            "en": "lunch curry rush"
          },
          {
            "ja": "スパイスの香る店内空気",
            "en": "spice-scented dining air"
          },
          {
            "ja": "昼の明るいカレー店光",
            "en": "bright daytime curry lighting"
          },
          {
            "ja": "雨夜のカレー店の灯り",
            "en": "rainy curry shop glow"
          },
          {
            "ja": "静かな窓際のカレー席",
            "en": "quiet curry window seat"
          },
          {
            "ja": "深夜のカレー店の落ち着き",
            "en": "late-night curry calm"
          },
          {
            "ja": "煮込み続けるカレーの湯気",
            "en": "simmering curry steam"
          },
          {
            "ja": "仕事帰りのカレー店の暖かさ",
            "en": "after-work curry warmth"
          },
          {
            "ja": "カウンター前の行列気配",
            "en": "counter queue bustle"
          },
          {
            "ja": "厨房の昼の忙しさ",
            "en": "kitchen clatter lunch pace"
          },
          {
            "ja": "出来立てカレーの熱",
            "en": "freshly-served curry heat"
          },
          {
            "ja": "閉店前のカレー店の静けさ",
            "en": "closing-time curry hush"
          },
          {
            "ja": "残り香のスパイス熱",
            "en": "lingering spice afterglow"
          }
        ]
      }
    ],
    "settings": [
      {
        "group": "🪟 窓・視界",
        "items": [
          {
            "ja": "窓際構図",
            "en": "by the window"
          },
          {
            "ja": "半開きの窓",
            "en": "half-open window"
          },
          {
            "ja": "月が見える窓",
            "en": "moon visible from window"
          },
          {
            "ja": "星が見える窓",
            "en": "stars visible from window"
          },
          {
            "ja": "雨粒のついた窓",
            "en": "rain-streaked window"
          },
          {
            "ja": "都市夜景の窓",
            "en": "city skyline outside window"
          }
        ]
      },
      {
        "group": "💡 室内光源",
        "items": [
          {
            "ja": "柔らかな室内光",
            "en": "soft indoor light"
          },
          {
            "ja": "強い朝日",
            "en": "strong morning sunlight"
          },
          {
            "ja": "間接照明",
            "en": "indirect lighting"
          },
          {
            "ja": "ランプの灯り",
            "en": "lamp light"
          },
          {
            "ja": "デスクライトの灯り",
            "en": "table lamp glow"
          },
          {
            "ja": "テレビ光",
            "en": "television light"
          },
          {
            "ja": "鏡前ライト",
            "en": "vanity light"
          },
          {
            "ja": "家電の灯り",
            "en": "glowing appliances"
          }
        ]
      },
      {
        "group": "🛋 生活小物・状態",
        "items": [
          {
            "ja": "カーテンの影",
            "en": "curtain shadows"
          },
          {
            "ja": "揺れるカーテン",
            "en": "swaying curtains"
          },
          {
            "ja": "乱れた寝具",
            "en": "bed rumples"
          },
          {
            "ja": "畳まれた毛布",
            "en": "folded blankets"
          },
          {
            "ja": "ソファクッション",
            "en": "sofa cushions"
          },
          {
            "ja": "散らかった書類",
            "en": "scattered papers"
          },
          {
            "ja": "ランドリーバスケット",
            "en": "laundry basket"
          },
          {
            "ja": "食器の残る卓上",
            "en": "dishes on table"
          },
          {
            "ja": "お茶セット",
            "en": "tea set on table"
          },
          {
            "ja": "観葉植物",
            "en": "houseplants"
          },
          {
            "ja": "本棚の影",
            "en": "bookshelf silhouette"
          },
          {
            "ja": "干された衣類",
            "en": "hanging clothes"
          },
          {
            "ja": "シンクまわりの生活感",
            "en": "sink clutter"
          },
          {
            "ja": "タオルの掛かり",
            "en": "towel drape"
          },
          {
            "ja": "デスクライトの光だまり",
            "en": "desk lamp pool"
          },
          {
            "ja": "机上のキーボード",
            "en": "keyboard on desk"
          },
          {
            "ja": "開いたノート",
            "en": "open notebook"
          },
          {
            "ja": "積まれた資料本",
            "en": "stacked reference books"
          },
          {
            "ja": "付箋の貼られた壁",
            "en": "sticky note wall"
          },
          {
            "ja": "フックに掛かったヘッドホン",
            "en": "headphones on hook"
          },
          {
            "ja": "机のマグカップ",
            "en": "desk mug"
          },
          {
            "ja": "床を這うケーブル",
            "en": "cable clutter under desk"
          },
          {
            "ja": "デスクチェアの影",
            "en": "desk chair silhouette"
          },
          {
            "ja": "ペン立て",
            "en": "pen holder"
          },
          {
            "ja": "卓上デジタル時計",
            "en": "digital desk clock"
          }
        ]
      },
      {
        "group": "🌃 窓辺・半屋外の細部",
        "items": [
          {
            "ja": "濡れたバルコニー床",
            "en": "wet balcony floor"
          },
          {
            "ja": "濡れた手すり",
            "en": "wet balcony handrail"
          },
          {
            "ja": "物干し竿",
            "en": "laundry pole"
          },
          {
            "ja": "洗濯ばさみ籠",
            "en": "clothespin basket"
          },
          {
            "ja": "鉢植えのまとまり",
            "en": "potted plants cluster"
          },
          {
            "ja": "じょうろ",
            "en": "watering can"
          },
          {
            "ja": "窓の留め具",
            "en": "window latch"
          },
          {
            "ja": "半開きのカーテン隙間",
            "en": "half-open curtain gap"
          },
          {
            "ja": "薄手カーテンの重なり",
            "en": "sheer curtain layers"
          },
          {
            "ja": "窓台に落ちる光",
            "en": "sunlight on sill"
          },
          {
            "ja": "窓際クッション",
            "en": "window-seat cushion"
          },
          {
            "ja": "掃き出し窓のレール",
            "en": "sliding-door track"
          }
        ]
      },
      {
        "group": "✨ 空気・反射・細部",
        "items": [
          {
            "ja": "湯気",
            "en": "steam haze"
          },
          {
            "ja": "曇った鏡",
            "en": "mirror condensation"
          },
          {
            "ja": "光の玉ぼけ",
            "en": "bokeh"
          },
          {
            "ja": "舞う埃",
            "en": "dust particles"
          },
          {
            "ja": "濡れガラス反射",
            "en": "wet glass reflections"
          },
          {
            "ja": "月光の筋",
            "en": "moonbeam streaks"
          },
          {
            "ja": "床面反射",
            "en": "reflective floor"
          },
          {
            "ja": "冷たいタイル反射",
            "en": "cool tile reflections"
          },
          {
            "ja": "キッチンカウンター反射",
            "en": "kitchen counter reflections"
          },
          {
            "ja": "モニター縁の光",
            "en": "monitor edge glow"
          },
          {
            "ja": "卓上の照り返し",
            "en": "lamp-lit desk surface"
          },
          {
            "ja": "夜の窓ガラス映り",
            "en": "night window reflections"
          },
          {
            "ja": "暖房で乾いた空気",
            "en": "dry heated air"
          }
        ]
      }
    ]
  },
  {
    "id": "city_daily_collection",
    "title": "🏙 街・都市日常特化コレクション",
    "subtitle": "住宅街から中華街、商店街アーケード、市場・マーケット街区、娯楽街・ネオン通り、オフィス街、高層街区、港町・臨海都市、古い下町・昭和街区、再開発地区・工事街区、駅前、路地、繁華街まで、時間帯・天候・都市の気配を多層で噛ませる、街背景の日常コレクション",
    "complete": [
      {
        "group": "🏘 住宅街・生活圏",
        "items": [
          {
            "id": "city_residential_morning",
            "ja": "朝の住宅街",
            "links": {
              "base": [
                "residential street",
                "apartment exterior"
              ],
              "customize": [
                "morning city light",
                "quiet suburb",
                "sparse pedestrians"
              ],
              "settings": [
                "utility poles",
                "potted plants",
                "long morning shadows"
              ]
            }
          },
          {
            "id": "city_residential_sunset",
            "ja": "夕暮れの住宅街",
            "links": {
              "base": [
                "residential street"
              ],
              "customize": [
                "twilight city",
                "quiet suburb",
                "urban wind"
              ],
              "settings": [
                "apartment windows",
                "streetlights",
                "overhead wires"
              ]
            }
          },
          {
            "id": "city_residential_rain",
            "ja": "雨の住宅街",
            "links": {
              "base": [
                "residential street",
                "side street"
              ],
              "customize": [
                "rainy street",
                "drizzle",
                "quiet suburb"
              ],
              "settings": [
                "rain puddles",
                "wet asphalt reflections",
                "parked bicycles"
              ]
            }
          },
          {
            "id": "city_residential_night",
            "ja": "夜の静かな住宅街",
            "links": {
              "base": [
                "residential street"
              ],
              "customize": [
                "night city",
                "late-night stillness",
                "sparse pedestrians"
              ],
              "settings": [
                "streetlights",
                "apartment windows",
                "vending machines"
              ]
            }
          }
        ]
      },
      {
        "group": "🐉 中華街・異国商店街",
        "items": [
          {
            "id": "city_chinatown_noon",
            "ja": "昼の中華街",
            "links": {
              "base": [
                "chinatown street",
                "ethnic market street"
              ],
              "customize": [
                "noon clarity",
                "tourist bustle",
                "multilingual district vibe"
              ],
              "settings": [
                "red lanterns",
                "bilingual signboards",
                "market gate arch"
              ]
            }
          },
          {
            "id": "city_chinatown_twilight",
            "ja": "赤提灯が連なる夕暮れの中華街",
            "links": {
              "base": [
                "chinatown street",
                "lantern-lined street"
              ],
              "customize": [
                "twilight city",
                "warm evening bustle",
                "lantern district atmosphere"
              ],
              "settings": [
                "red lanterns",
                "glowing paper lanterns",
                "hanging banners"
              ]
            }
          },
          {
            "id": "city_chinatown_after_rain",
            "ja": "雨上がりの中華街",
            "links": {
              "base": [
                "chinatown street",
                "food alley"
              ],
              "customize": [
                "after rain reflections",
                "humid food-stall air",
                "tourist bustle"
              ],
              "settings": [
                "red lanterns",
                "wet sign reflections",
                "stall steam"
              ]
            }
          },
          {
            "id": "city_lantern_street_night",
            "ja": "夜の灯籠通り",
            "links": {
              "base": [
                "lantern-lined street",
                "night market lane"
              ],
              "customize": [
                "night city",
                "night market energy",
                "lantern district atmosphere"
              ],
              "settings": [
                "glowing paper lanterns",
                "bilingual signboards",
                "glossy signboards"
              ]
            }
          },
          {
            "id": "city_steam_sign_alley",
            "ja": "湯気と看板が満ちる路地",
            "links": {
              "base": [
                "food alley",
                "ethnic market street"
              ],
              "customize": [
                "steam-filled street",
                "dense foot traffic",
                "humid food-stall air"
              ],
              "settings": [
                "stall steam",
                "glossy signboards",
                "takeout storefronts"
              ]
            }
          },
          {
            "id": "city_chinatown_festival_eve",
            "ja": "祭り前の賑わい",
            "links": {
              "base": [
                "market gate entrance",
                "chinatown street"
              ],
              "customize": [
                "festival eve bustle",
                "dense foot traffic",
                "warm evening bustle"
              ],
              "settings": [
                "hanging banners",
                "red lanterns",
                "temporary festival stalls"
              ]
            }
          },
          {
            "id": "city_chinatown_after_closing",
            "ja": "閉店後の静かな中華街",
            "links": {
              "base": [
                "lantern-lined street",
                "market gate entrance"
              ],
              "customize": [
                "late-night stillness",
                "after-closing stillness",
                "sparse pedestrians"
              ],
              "settings": [
                "shuttered stalls",
                "dim lanterns",
                "bilingual signboards"
              ]
            }
          }
        ]
      },
      {
        "group": "🛒 商店街・アーケード",
        "items": [
          {
            "id": "city_arcade_morning",
            "ja": "朝の商店街",
            "links": {
              "base": [
                "shopping arcade",
                "old shopping street"
              ],
              "customize": [
                "morning city light",
                "neighborhood shopping mood",
                "sparse pedestrians"
              ],
              "settings": [
                "arcade roof lights",
                "handwritten sale signs",
                "bicycle parking"
              ]
            }
          },
          {
            "id": "city_arcade_twilight",
            "ja": "夕暮れの商店街アーケード",
            "links": {
              "base": [
                "shopping arcade",
                "covered shopping street"
              ],
              "customize": [
                "twilight city",
                "warm shopfront glow",
                "neighborhood shopping mood"
              ],
              "settings": [
                "arcade roof lights",
                "hanging shop banners",
                "retro signboards"
              ]
            }
          },
          {
            "id": "city_arcade_rain",
            "ja": "雨のアーケード通り",
            "links": {
              "base": [
                "covered shopping street",
                "shopping arcade"
              ],
              "customize": [
                "rainy arcade echo",
                "after rain reflections",
                "local pedestrian traffic"
              ],
              "settings": [
                "wet tile reflections",
                "arcade roof lights",
                "umbrella stands"
              ]
            }
          },
          {
            "id": "city_arcade_closing",
            "ja": "閉店間際の商店街",
            "links": {
              "base": [
                "old shopping street",
                "neighborhood market arcade"
              ],
              "customize": [
                "closing-time bustle",
                "warm shopfront glow",
                "neighborhood shopping mood"
              ],
              "settings": [
                "shuttered storefronts",
                "handwritten sale signs",
                "hanging shop banners"
              ]
            }
          },
          {
            "id": "city_arcade_night",
            "ja": "夜の静かなアーケード",
            "links": {
              "base": [
                "shopping arcade",
                "covered shopping street"
              ],
              "customize": [
                "night city",
                "after-closing market stillness",
                "sparse pedestrians"
              ],
              "settings": [
                "arcade roof lights",
                "shuttered storefronts",
                "retro signboards"
              ]
            }
          },
          {
            "id": "city_arcade_retro",
            "ja": "昭和感の残る商店街",
            "links": {
              "base": [
                "retro shopping lane",
                "old shopping street"
              ],
              "customize": [
                "retro downtown air",
                "lived-in downtown",
                "local pedestrian traffic"
              ],
              "settings": [
                "retro signboards",
                "bicycle parking",
                "narrow storefront awnings"
              ]
            }
          },
          {
            "id": "city_arcade_festival_eve",
            "ja": "祭り前の商店街通り",
            "links": {
              "base": [
                "neighborhood market arcade",
                "shopping street"
              ],
              "customize": [
                "festival shopping street bustle",
                "dense foot traffic",
                "warm evening bustle"
              ],
              "settings": [
                "hanging seasonal decorations",
                "hanging shop banners",
                "temporary festival stalls"
              ]
            }
          }
        ]
      },
      {
        "group": "🧱 古い下町・昭和街区",
        "items": [
          {
            "id": "city_shitamachi_morning",
            "ja": "朝の古い下町通り",
            "links": {
              "base": [
                "old downtown street",
                "retro shopping lane"
              ],
              "customize": [
                "morning city light",
                "lived-in downtown",
                "local pedestrian traffic"
              ],
              "settings": [
                "utility poles",
                "overhead wires",
                "old shop awnings"
              ]
            }
          },
          {
            "id": "city_shitamachi_twilight",
            "ja": "夕暮れの下町",
            "links": {
              "base": [
                "old downtown street",
                "shitamachi backstreet"
              ],
              "customize": [
                "warm dusk",
                "lived-in downtown",
                "local evening bustle"
              ],
              "settings": [
                "streetlights",
                "faded signboards",
                "parked bicycles"
              ]
            }
          },
          {
            "id": "city_showa_rain",
            "ja": "雨の昭和街区",
            "links": {
              "base": [
                "showa-era streetscape",
                "narrow downtown street"
              ],
              "customize": [
                "rain-soaked old street",
                "humid old city air",
                "after rain reflections"
              ],
              "settings": [
                "patched asphalt",
                "wet sign reflections",
                "overhead wires"
              ]
            }
          },
          {
            "id": "city_shitamachi_festival_eve",
            "ja": "祭り前の下町通り",
            "links": {
              "base": [
                "old downtown street",
                "retro alley"
              ],
              "customize": [
                "festival eve bustle",
                "local evening bustle",
                "showa-era atmosphere"
              ],
              "settings": [
                "hanging seasonal decorations",
                "paper lanterns",
                "noren curtains"
              ]
            }
          },
          {
            "id": "city_retro_alley_night",
            "ja": "夜の赤提灯路地",
            "links": {
              "base": [
                "retro alley",
                "shitamachi backstreet"
              ],
              "customize": [
                "night city",
                "retro nightlife warmth",
                "humid old city air"
              ],
              "settings": [
                "paper lanterns",
                "noren curtains",
                "faded signboards"
              ]
            }
          },
          {
            "id": "city_showa_winter_still",
            "ja": "冬の静かな下町",
            "links": {
              "base": [
                "showa-era streetscape",
                "old downtown street"
              ],
              "customize": [
                "quiet winter downtown",
                "cold evening air",
                "sparse pedestrians"
              ],
              "settings": [
                "utility poles",
                "old vending machine",
                "dim streetlights"
              ]
            }
          },
          {
            "id": "city_shitamachi_noon",
            "ja": "昼の昭和通り",
            "links": {
              "base": [
                "showa-era streetscape",
                "retro shopping lane"
              ],
              "customize": [
                "noon clarity",
                "showa-era atmosphere",
                "local pedestrian traffic"
              ],
              "settings": [
                "faded signboards",
                "bicycles lined up",
                "old tiled facades"
              ]
            }
          }
        ]
      },
      {
        "group": "🧺 市場・マーケット街区",
        "items": [
          {
            "id": "city_market_morning",
            "ja": "朝の市場通り",
            "links": {
              "base": [
                "market street",
                "covered market"
              ],
              "customize": [
                "market opening bustle",
                "fresh produce market mood",
                "morning city light"
              ],
              "settings": [
                "produce crates",
                "fabric awnings",
                "shop shutters half-open"
              ]
            }
          },
          {
            "id": "city_market_noon",
            "ja": "昼の屋内市場",
            "links": {
              "base": [
                "covered market",
                "market arcade"
              ],
              "customize": [
                "noon clarity",
                "market crowd flow",
                "humid market air"
              ],
              "settings": [
                "hanging menu boards",
                "stacked baskets",
                "ceiling fans"
              ]
            }
          },
          {
            "id": "city_market_twilight",
            "ja": "夕暮れの市場街区",
            "links": {
              "base": [
                "market street",
                "shopping arcade"
              ],
              "customize": [
                "twilight city",
                "closing-time bustle",
                "market district mood"
              ],
              "settings": [
                "warm stall lamps",
                "fabric awnings",
                "handwritten price signs"
              ]
            }
          },
          {
            "id": "city_market_rain",
            "ja": "雨の市場アーケード",
            "links": {
              "base": [
                "market arcade",
                "covered market"
              ],
              "customize": [
                "rainy arcade echo",
                "humid market air",
                "local pedestrian traffic"
              ],
              "settings": [
                "wet tile reflections",
                "umbrella stands",
                "produce crates"
              ]
            }
          },
          {
            "id": "city_market_food_alley",
            "ja": "湯気の立つフードマーケット",
            "links": {
              "base": [
                "food market hall",
                "market street"
              ],
              "customize": [
                "steam-filled market",
                "market lunch rush",
                "humid market air"
              ],
              "settings": [
                "food stall steam",
                "hanging menu boards",
                "communal tables"
              ]
            }
          },
          {
            "id": "city_market_after_closing",
            "ja": "閉店後の静かな市場",
            "links": {
              "base": [
                "covered market",
                "market arcade"
              ],
              "customize": [
                "after-closing market stillness",
                "quiet atmosphere",
                "late-night stillness"
              ],
              "settings": [
                "empty stalls",
                "rolled shutters",
                "dim stall lamps"
              ]
            }
          }
        ]
      },
      {
        "group": "🎮 娯楽街・ネオン通り",
        "items": [
          {
            "id": "city_entertainment_twilight",
            "ja": "夕暮れの娯楽街",
            "links": {
              "base": [
                "entertainment district",
                "neon boulevard"
              ],
              "customize": [
                "pre-night excitement",
                "twilight city",
                "entertainment district buzz"
              ],
              "settings": [
                "neon sign towers",
                "arcade marquees",
                "ticket posters"
              ]
            }
          },
          {
            "id": "city_entertainment_neon_night",
            "ja": "ネオンが溢れる夜の娯楽街",
            "links": {
              "base": [
                "entertainment district",
                "neon boulevard"
              ],
              "customize": [
                "night city",
                "dense nightlife energy",
                "neon glow"
              ],
              "settings": [
                "neon sign towers",
                "vertical neon signs",
                "glowing storefront canopies"
              ]
            }
          },
          {
            "id": "city_entertainment_after_rain",
            "ja": "雨上がりのネオン通り",
            "links": {
              "base": [
                "neon boulevard",
                "arcade-lined street"
              ],
              "customize": [
                "after rain reflections",
                "humid nightlife air",
                "dense nightlife energy"
              ],
              "settings": [
                "wet asphalt reflections",
                "neon reflections",
                "street billboard screens"
              ]
            }
          },
          {
            "id": "city_arcade_gaming_night",
            "ja": "ゲームセンター街の夜",
            "links": {
              "base": [
                "arcade-lined street",
                "game center avenue"
              ],
              "customize": [
                "night arcade noise",
                "weekend foot traffic",
                "dense nightlife energy"
              ],
              "settings": [
                "arcade marquees",
                "claw machine glow",
                "poster-covered pillars"
              ]
            }
          },
          {
            "id": "city_cinema_street_evening",
            "ja": "映画館と看板が並ぶ通り",
            "links": {
              "base": [
                "cinema street",
                "entertainment district"
              ],
              "customize": [
                "evening showtime crowd",
                "downtown leisure mood",
                "pre-night excitement"
              ],
              "settings": [
                "movie theater marquee",
                "ticket posters",
                "vertical neon signs"
              ]
            }
          },
          {
            "id": "city_entertainment_last_train",
            "ja": "終電後も灯りが残る娯楽街",
            "links": {
              "base": [
                "nightlife avenue",
                "neon boulevard"
              ],
              "customize": [
                "lingering nightlife heat",
                "late-night stillness",
                "after-hours amusement stillness"
              ],
              "settings": [
                "late-night taxi line",
                "glowing storefront canopies",
                "dim neon spill"
              ]
            }
          },
          {
            "id": "city_arcade_after_hours",
            "ja": "閉店後の静かなゲーム街",
            "links": {
              "base": [
                "game center avenue",
                "side entertainment alley"
              ],
              "customize": [
                "after-hours amusement stillness",
                "residual neon hum",
                "sparse pedestrians"
              ],
              "settings": [
                "shuttered arcade fronts",
                "dim neon spill",
                "poster-covered pillars"
              ]
            }
          }
        ]
      },
      {
        "group": "🏢 オフィス街・高層街区",
        "items": [
          {
            "id": "city_office_morning",
            "ja": "朝のオフィス街",
            "links": {
              "base": [
                "office district",
                "business avenue"
              ],
              "customize": [
                "morning commute",
                "cold urban air",
                "weekday city flow"
              ],
              "settings": [
                "glass curtain walls",
                "crosswalk stripes",
                "office tower entrances"
              ]
            }
          },
          {
            "id": "city_office_lunch",
            "ja": "昼休みの高層街区",
            "links": {
              "base": [
                "high-rise district",
                "corporate plaza"
              ],
              "customize": [
                "lunch break bustle",
                "midday city light",
                "office crowd"
              ],
              "settings": [
                "plaza benches",
                "glass curtain walls",
                "business signage"
              ]
            }
          },
          {
            "id": "city_office_evening",
            "ja": "夕方のオフィス街",
            "links": {
              "base": [
                "office district",
                "business avenue"
              ],
              "customize": [
                "evening rush",
                "twilight city",
                "weekday city flow"
              ],
              "settings": [
                "tower windows",
                "taxi queue",
                "streetlights"
              ]
            }
          },
          {
            "id": "city_office_rain",
            "ja": "雨のオフィス街",
            "links": {
              "base": [
                "office district",
                "skyscraper avenue"
              ],
              "customize": [
                "rainy business street",
                "cold urban air",
                "after-work stillness"
              ],
              "settings": [
                "wet stone reflections",
                "umbrellas crowd",
                "glass curtain walls"
              ]
            }
          },
          {
            "id": "city_highrise_night",
            "ja": "夜の高層ビル街",
            "links": {
              "base": [
                "high-rise district",
                "skyscraper avenue"
              ],
              "customize": [
                "tower lights at night",
                "after-hours stillness",
                "cold urban wind"
              ],
              "settings": [
                "mirrored skyscrapers",
                "tower windows",
                "skybridge"
              ]
            }
          },
          {
            "id": "city_office_afterhours",
            "ja": "退勤後のビジネス街",
            "links": {
              "base": [
                "business avenue",
                "corporate plaza"
              ],
              "customize": [
                "after-work stillness",
                "late evening business street",
                "sparse office workers"
              ],
              "settings": [
                "office tower entrances",
                "plaza benches",
                "revolving doors"
              ]
            }
          },
          {
            "id": "city_office_midnight",
            "ja": "深夜の無人オフィス街",
            "links": {
              "base": [
                "office district",
                "financial district"
              ],
              "customize": [
                "midnight business district",
                "empty city blocks",
                "after-hours stillness"
              ],
              "settings": [
                "security lights",
                "mirrored skyscrapers",
                "silent sidewalks"
              ]
            }
          }
        ]
      },
      {
        "group": "⚓ 港町・臨海都市",
        "items": [
          {
            "id": "city_harbor_sunset",
            "ja": "夕暮れの港町",
            "links": {
              "base": [
                "harbor town street",
                "bayfront avenue"
              ],
              "customize": [
                "evening sea breeze",
                "twilight city",
                "salt-air harbor mood"
              ],
              "settings": [
                "harbor lamps",
                "pier railings",
                "moored ship lights"
              ]
            }
          },
          {
            "id": "city_waterfront_rain",
            "ja": "雨の臨海都市",
            "links": {
              "base": [
                "waterfront city",
                "bayfront avenue"
              ],
              "customize": [
                "rainy waterfront air",
                "humid waterfront air",
                "after rain reflections"
              ],
              "settings": [
                "waterfront reflections",
                "salt-wet pavement",
                "seaside guardrails"
              ]
            }
          },
          {
            "id": "city_bay_promenade_night",
            "ja": "夜の湾岸プロムナード",
            "links": {
              "base": [
                "bay promenade",
                "waterfront city"
              ],
              "customize": [
                "bay lights at night",
                "night city",
                "tourist harbor bustle"
              ],
              "settings": [
                "moored ship lights",
                "harbor lamps",
                "waterfront reflections"
              ]
            }
          },
          {
            "id": "city_dock_overcast",
            "ja": "曇天の埠頭街区",
            "links": {
              "base": [
                "dock district",
                "harbor road"
              ],
              "customize": [
                "overcast harbor sky",
                "working harbor mood",
                "cool urban air"
              ],
              "settings": [
                "container cranes",
                "warehouse facades",
                "pier railings"
              ]
            }
          },
          {
            "id": "city_harbor_windy_road",
            "ja": "海風の強い港湾道路",
            "links": {
              "base": [
                "harbor road",
                "waterfront city"
              ],
              "customize": [
                "strong sea wind",
                "humid waterfront air",
                "salt-air harbor mood"
              ],
              "settings": [
                "seaside guardrails",
                "harbor lamps",
                "distant skyline"
              ]
            }
          },
          {
            "id": "city_container_night_view",
            "ja": "コンテナ越しの港夜景",
            "links": {
              "base": [
                "container wharf",
                "dock district"
              ],
              "customize": [
                "bay lights at night",
                "deep night harbor stillness",
                "working harbor mood"
              ],
              "settings": [
                "container cranes",
                "fence-lined harbor view",
                "moored ship lights"
              ]
            }
          },
          {
            "id": "city_ferry_terminal_morning",
            "ja": "早朝のフェリーターミナル前",
            "links": {
              "base": [
                "ferry terminal front",
                "bay promenade"
              ],
              "customize": [
                "harbor morning haze",
                "sparse pedestrians",
                "salt-air harbor mood"
              ],
              "settings": [
                "ferry terminal signage",
                "pier railings",
                "moored ship lights"
              ]
            }
          }
        ]
      },
      {
        "group": "🚧 再開発地区・工事街区",
        "items": [
          {
            "id": "city_redevelopment_morning",
            "ja": "朝の再開発地区",
            "links": {
              "base": [
                "redevelopment district",
                "construction block"
              ],
              "customize": [
                "morning city light",
                "ongoing construction atmosphere",
                "detour foot traffic"
              ],
              "settings": [
                "construction fences",
                "tower cranes",
                "temporary walkways"
              ]
            }
          },
          {
            "id": "city_redevelopment_twilight",
            "ja": "夕暮れの工事街区",
            "links": {
              "base": [
                "construction block",
                "urban construction corridor"
              ],
              "customize": [
                "twilight city",
                "redevelopment district noise",
                "unfinished city blocks"
              ],
              "settings": [
                "scaffolding",
                "steel frames",
                "warning lights"
              ]
            }
          },
          {
            "id": "city_redevelopment_rain",
            "ja": "雨の再開発通り",
            "links": {
              "base": [
                "redevelopment district",
                "fenced construction site"
              ],
              "customize": [
                "rainy redevelopment air",
                "after rain reflections",
                "ongoing construction atmosphere"
              ],
              "settings": [
                "wet asphalt reflections",
                "reflective safety panels",
                "construction fences"
              ]
            }
          },
          {
            "id": "city_redevelopment_night",
            "ja": "夜の工事現場前",
            "links": {
              "base": [
                "construction block",
                "fenced construction site"
              ],
              "customize": [
                "night city",
                "late-evening worksite glow",
                "after-hours worksite stillness"
              ],
              "settings": [
                "warning lights",
                "covered scaffolds",
                "temporary signage"
              ]
            }
          },
          {
            "id": "city_redevelopment_detour",
            "ja": "仮囲いの続く再開発道路",
            "links": {
              "base": [
                "urban construction corridor",
                "temporary pedestrian detour"
              ],
              "customize": [
                "detour foot traffic",
                "ongoing construction atmosphere",
                "dusty urban air"
              ],
              "settings": [
                "construction fences",
                "temporary walkways",
                "traffic cones"
              ]
            }
          },
          {
            "id": "city_redevelopment_crane",
            "ja": "クレーンが立つ都心再開発地",
            "links": {
              "base": [
                "crane-filled redevelopment zone",
                "unfinished commercial block"
              ],
              "customize": [
                "hard urban light",
                "heavy machinery presence",
                "unfinished city blocks"
              ],
              "settings": [
                "tower cranes",
                "steel frames",
                "unfinished facades"
              ]
            }
          },
          {
            "id": "city_redevelopment_midnight",
            "ja": "深夜の無人工事街区",
            "links": {
              "base": [
                "construction block",
                "unfinished commercial block"
              ],
              "customize": [
                "midnight business district",
                "after-hours worksite stillness",
                "empty city blocks"
              ],
              "settings": [
                "security lights",
                "warning lights",
                "silent sidewalks"
              ]
            }
          }
        ]
      },
      {
        "group": "🏬 繁華街・商業通り",
        "items": [
          {
            "id": "city_downtown_noon",
            "ja": "昼の駅前通り",
            "links": {
              "base": [
                "downtown street",
                "station plaza"
              ],
              "customize": [
                "noon clarity",
                "commuter mood",
                "city crowd signs"
              ],
              "settings": [
                "station signage",
                "crosswalk markings",
                "shop window glow"
              ]
            }
          },
          {
            "id": "city_shopping_twilight",
            "ja": "夕方の商店街",
            "links": {
              "base": [
                "shopping street",
                "cafe terrace"
              ],
              "customize": [
                "twilight city",
                "lived-in downtown",
                "urban wind"
              ],
              "settings": [
                "shop signs",
                "banners and posters",
                "streetlights"
              ]
            }
          },
          {
            "id": "city_downtown_neon",
            "ja": "ネオンの繁華街",
            "links": {
              "base": [
                "downtown street",
                "shopping street"
              ],
              "customize": [
                "night city",
                "neon glow",
                "city crowd signs"
              ],
              "settings": [
                "neon reflections",
                "traffic lights",
                "shop window glow"
              ]
            }
          },
          {
            "id": "city_downtown_after_rain",
            "ja": "雨上がりの夜の繁華街",
            "links": {
              "base": [
                "downtown street"
              ],
              "customize": [
                "night city",
                "after rain reflections",
                "neon glow"
              ],
              "settings": [
                "wet asphalt reflections",
                "neon reflections",
                "umbrella clusters"
              ]
            }
          }
        ]
      },
      {
        "group": "🛣 路地・裏通り",
        "items": [
          {
            "id": "city_back_alley_morning",
            "ja": "朝の裏通り",
            "links": {
              "base": [
                "back alley",
                "service alley"
              ],
              "customize": [
                "morning city light",
                "sparse pedestrians",
                "quiet atmosphere"
              ],
              "settings": [
                "trash bags at curb",
                "utility poles",
                "side doors"
              ]
            }
          },
          {
            "id": "city_back_alley_rain",
            "ja": "雨の路地裏",
            "links": {
              "base": [
                "back alley",
                "narrow alley"
              ],
              "customize": [
                "rainy street",
                "drizzle",
                "cool urban air"
              ],
              "settings": [
                "rain puddles",
                "wet asphalt reflections",
                "air conditioner units"
              ]
            }
          },
          {
            "id": "city_back_alley_neon",
            "ja": "ネオンが滲む路地",
            "links": {
              "base": [
                "back alley",
                "narrow alley"
              ],
              "customize": [
                "night city",
                "neon glow",
                "late-night stillness"
              ],
              "settings": [
                "neon reflections",
                "trash bags at curb",
                "wall pipes"
              ]
            }
          },
          {
            "id": "city_back_alley_humid",
            "ja": "湿気のこもる裏路地",
            "links": {
              "base": [
                "service alley",
                "side street"
              ],
              "customize": [
                "night city",
                "humid urban air",
                "quiet atmosphere"
              ],
              "settings": [
                "dripping vents",
                "air conditioner units",
                "wall pipes"
              ]
            }
          }
        ]
      },
      {
        "group": "🚉 駅前・交通導線",
        "items": [
          {
            "id": "city_station_rush",
            "ja": "通勤朝の駅前",
            "links": {
              "base": [
                "station plaza",
                "crosswalk"
              ],
              "customize": [
                "morning city light",
                "rush hour",
                "commuter mood"
              ],
              "settings": [
                "station signage",
                "crosswalk markings",
                "traffic lights"
              ]
            }
          },
          {
            "id": "city_station_last_train",
            "ja": "終電後の駅前",
            "links": {
              "base": [
                "station plaza"
              ],
              "customize": [
                "night city",
                "late-night stillness",
                "sparse pedestrians"
              ],
              "settings": [
                "station signage",
                "streetlights",
                "vending machines"
              ]
            }
          },
          {
            "id": "city_busstop_evening",
            "ja": "夕方のバス停前",
            "links": {
              "base": [
                "bus stop",
                "side street"
              ],
              "customize": [
                "twilight city",
                "urban wind",
                "commuter mood"
              ],
              "settings": [
                "bus stop sign",
                "streetlights",
                "long shadows"
              ]
            }
          },
          {
            "id": "city_crosswalk_night",
            "ja": "都会夜景の横断歩道",
            "links": {
              "base": [
                "crosswalk",
                "downtown street"
              ],
              "customize": [
                "night city",
                "neon glow",
                "city crowd signs"
              ],
              "settings": [
                "crosswalk markings",
                "headlight streaks",
                "traffic lights"
              ]
            }
          }
        ]
      }
    ],
    "base": [
      {
        "group": "🏘 住宅・生活圏",
        "items": [
          {
            "ja": "住宅街",
            "en": "residential street"
          },
          {
            "ja": "郊外の道",
            "en": "suburban road"
          },
          {
            "ja": "アパート外観",
            "en": "apartment exterior"
          },
          {
            "ja": "住宅街の交差点",
            "en": "neighborhood intersection"
          }
        ]
      },
      {
        "group": "🐉 中華街・異国商店街",
        "items": [
          {
            "ja": "中華街",
            "en": "chinatown street"
          },
          {
            "ja": "赤提灯通り",
            "en": "lantern-lined street"
          },
          {
            "ja": "異国商店街",
            "en": "ethnic market street"
          },
          {
            "ja": "屋台路地",
            "en": "food alley"
          },
          {
            "ja": "市場門前",
            "en": "market gate entrance"
          },
          {
            "ja": "夜市の通り",
            "en": "night market lane"
          }
        ]
      },
      {
        "group": "🛒 商店街・アーケード",
        "items": [
          {
            "ja": "商店街アーケード",
            "en": "shopping arcade"
          },
          {
            "ja": "屋根付き商店街",
            "en": "covered shopping street"
          },
          {
            "ja": "古い商店街",
            "en": "old shopping street"
          },
          {
            "ja": "市場アーケード",
            "en": "neighborhood market arcade"
          },
          {
            "ja": "レトロ商店街",
            "en": "retro shopping lane"
          },
          {
            "ja": "市場通り",
            "en": "local market street"
          }
        ]
      },
      {
        "group": "🧱 古い下町・昭和街区",
        "items": [
          {
            "ja": "古い下町通り",
            "en": "old downtown street"
          },
          {
            "ja": "昭和街区",
            "en": "showa-era streetscape"
          },
          {
            "ja": "下町裏路地",
            "en": "shitamachi backstreet"
          },
          {
            "ja": "レトロ路地",
            "en": "retro alley"
          },
          {
            "ja": "昭和商店通り",
            "en": "retro shopping lane"
          },
          {
            "ja": "狭い下町通り",
            "en": "narrow downtown street"
          }
        ]
      },
      {
        "group": "🧺 市場・マーケット街区",
        "items": [
          {
            "ja": "市場通り",
            "en": "market street"
          },
          {
            "ja": "屋内市場",
            "en": "covered market"
          },
          {
            "ja": "市場アーケード",
            "en": "market arcade"
          },
          {
            "ja": "フードマーケットホール",
            "en": "food market hall"
          },
          {
            "ja": "青果市場の通り",
            "en": "produce market lane"
          },
          {
            "ja": "魚介市場の通路",
            "en": "seafood market aisle"
          }
        ]
      },
      {
        "group": "🎮 娯楽街・ネオン通り",
        "items": [
          {
            "ja": "娯楽街",
            "en": "entertainment district"
          },
          {
            "ja": "ネオン通り",
            "en": "neon boulevard"
          },
          {
            "ja": "ゲームセンター街",
            "en": "game center avenue"
          },
          {
            "ja": "ゲームセンターが並ぶ通り",
            "en": "arcade-lined street"
          },
          {
            "ja": "映画館通り",
            "en": "cinema street"
          },
          {
            "ja": "歓楽街の通り",
            "en": "nightlife avenue"
          },
          {
            "ja": "娯楽街の脇道",
            "en": "side entertainment alley"
          }
        ]
      },
      {
        "group": "🏢 オフィス街・高層街区",
        "items": [
          {
            "ja": "オフィス街",
            "en": "office district"
          },
          {
            "ja": "ビジネス街路",
            "en": "business avenue"
          },
          {
            "ja": "高層街区",
            "en": "high-rise district"
          },
          {
            "ja": "高層ビル通り",
            "en": "skyscraper avenue"
          },
          {
            "ja": "企業広場",
            "en": "corporate plaza"
          },
          {
            "ja": "金融街",
            "en": "financial district"
          },
          {
            "ja": "ガラスタワー街区",
            "en": "glass tower district"
          },
          {
            "ja": "超高層ビル群前",
            "en": "in front of skyscraper cluster"
          }
        ]
      },
      {
        "group": "⚓ 港町・臨海都市",
        "items": [
          {
            "ja": "港町の通り",
            "en": "harbor town street"
          },
          {
            "ja": "臨海都市",
            "en": "waterfront city"
          },
          {
            "ja": "湾岸プロムナード",
            "en": "bay promenade"
          },
          {
            "ja": "埠頭街区",
            "en": "dock district"
          },
          {
            "ja": "港湾道路",
            "en": "harbor road"
          },
          {
            "ja": "コンテナ埠頭",
            "en": "container wharf"
          },
          {
            "ja": "フェリーターミナル前",
            "en": "ferry terminal front"
          },
          {
            "ja": "湾岸大通り",
            "en": "bayfront avenue"
          }
        ]
      },
      {
        "group": "🚧 再開発地区・工事街区",
        "items": [
          {
            "ja": "再開発地区",
            "en": "redevelopment district"
          },
          {
            "ja": "工事街区",
            "en": "construction block"
          },
          {
            "ja": "仮囲いされた工事現場",
            "en": "fenced construction site"
          },
          {
            "ja": "都心工事通路",
            "en": "urban construction corridor"
          },
          {
            "ja": "クレーンが立つ再開発地",
            "en": "crane-filled redevelopment zone"
          },
          {
            "ja": "未完成の商業街区",
            "en": "unfinished commercial block"
          },
          {
            "ja": "仮設歩行者導線",
            "en": "temporary pedestrian detour"
          }
        ]
      },
      {
        "group": "🏬 商業・繁華",
        "items": [
          {
            "ja": "繁華街の通り",
            "en": "downtown street"
          },
          {
            "ja": "商店街",
            "en": "shopping street"
          },
          {
            "ja": "カフェ前",
            "en": "cafe terrace"
          },
          {
            "ja": "コンビニ前",
            "en": "convenience store front"
          },
          {
            "ja": "駅前広場",
            "en": "station plaza"
          }
        ]
      },
      {
        "group": "🛣 路地・裏手",
        "items": [
          {
            "ja": "路地裏",
            "en": "back alley"
          },
          {
            "ja": "細い路地",
            "en": "narrow alley"
          },
          {
            "ja": "横道",
            "en": "side street"
          },
          {
            "ja": "店舗裏の通路",
            "en": "service alley"
          }
        ]
      },
      {
        "group": "🚉 交通・導線",
        "items": [
          {
            "ja": "横断歩道",
            "en": "crosswalk"
          },
          {
            "ja": "バス停前",
            "en": "bus stop"
          },
          {
            "ja": "歩道橋の上",
            "en": "pedestrian bridge"
          },
          {
            "ja": "駅の改札前外部",
            "en": "station entrance exterior"
          }
        ]
      }
    ],
    "customize": [
      {
        "group": "⏰ 時間帯・流れ",
        "items": [
          {
            "ja": "朝の都市光",
            "en": "morning city light"
          },
          {
            "ja": "昼の明瞭感",
            "en": "noon clarity"
          },
          {
            "ja": "夕暮れの都市",
            "en": "twilight city"
          },
          {
            "ja": "夜の都市",
            "en": "night city"
          },
          {
            "ja": "深夜の静けさ",
            "en": "late-night stillness"
          },
          {
            "ja": "通勤ラッシュ",
            "en": "rush hour"
          }
        ]
      },
      {
        "group": "🌧 天候・空気",
        "items": [
          {
            "ja": "小雨",
            "en": "drizzle"
          },
          {
            "ja": "雨の街路",
            "en": "rainy street"
          },
          {
            "ja": "雨上がりの反射",
            "en": "after rain reflections"
          },
          {
            "ja": "夏の熱気",
            "en": "summer heat haze"
          },
          {
            "ja": "冬の冷気",
            "en": "winter chill"
          },
          {
            "ja": "都市の風",
            "en": "urban wind"
          },
          {
            "ja": "冷たい都会の空気",
            "en": "cool urban air"
          },
          {
            "ja": "湿った都市の空気",
            "en": "humid urban air"
          }
        ]
      },
      {
        "group": "👥 都市の気配",
        "items": [
          {
            "ja": "ネオンのにじみ",
            "en": "neon glow"
          },
          {
            "ja": "人混みの看板気配",
            "en": "city crowd signs"
          },
          {
            "ja": "まばらな人影",
            "en": "sparse pedestrians"
          },
          {
            "ja": "生活感のある繁華街",
            "en": "lived-in downtown"
          },
          {
            "ja": "通勤の気配",
            "en": "commuter mood"
          },
          {
            "ja": "静かな郊外",
            "en": "quiet suburb"
          },
          {
            "ja": "静かな空気",
            "en": "quiet atmosphere"
          }
        ]
      },
      {
        "group": "🛒 商店街・アーケードの空気",
        "items": [
          {
            "ja": "商店街の賑わい",
            "en": "neighborhood shopping mood"
          },
          {
            "ja": "店先の暖かな灯り",
            "en": "warm shopfront glow"
          },
          {
            "ja": "雨のアーケードの反響",
            "en": "rainy arcade echo"
          },
          {
            "ja": "閉店後の市場の静けさ",
            "en": "after-closing market stillness"
          },
          {
            "ja": "レトロな下町の空気",
            "en": "retro downtown air"
          },
          {
            "ja": "祭り前の商店街の高揚",
            "en": "festival shopping street bustle"
          },
          {
            "ja": "地元客の流れ",
            "en": "local pedestrian traffic"
          },
          {
            "ja": "閉店間際のせわしさ",
            "en": "closing-time bustle"
          }
        ]
      },
      {
        "group": "🐉 異国街の熱気",
        "items": [
          {
            "ja": "観光客の賑わい",
            "en": "tourist bustle"
          },
          {
            "ja": "多言語街区の空気",
            "en": "multilingual district vibe"
          },
          {
            "ja": "灯籠街の空気",
            "en": "lantern district atmosphere"
          },
          {
            "ja": "湯気の立つ通り",
            "en": "steam-filled street"
          },
          {
            "ja": "屋台の湿った熱気",
            "en": "humid food-stall air"
          },
          {
            "ja": "夜市の熱気",
            "en": "night market energy"
          },
          {
            "ja": "祭り前の高揚",
            "en": "festival eve bustle"
          },
          {
            "ja": "濃い人混み",
            "en": "dense foot traffic"
          },
          {
            "ja": "暖かな夕方の賑わい",
            "en": "warm evening bustle"
          },
          {
            "ja": "閉店後の静けさ",
            "en": "after-closing stillness"
          }
        ]
      },
      {
        "group": "🧱 古い下町・昭和街区",
        "items": [
          {
            "ja": "下町の生活感",
            "en": "lived-in downtown"
          },
          {
            "ja": "昭和の空気",
            "en": "showa-era atmosphere"
          },
          {
            "ja": "暖かな夕暮れ",
            "en": "warm dusk"
          },
          {
            "ja": "下町の夕方の賑わい",
            "en": "local evening bustle"
          },
          {
            "ja": "湿った古い街の空気",
            "en": "humid old city air"
          },
          {
            "ja": "雨に濡れた古い通り",
            "en": "rain-soaked old street"
          },
          {
            "ja": "冬の静かな下町",
            "en": "quiet winter downtown"
          },
          {
            "ja": "レトロな夜のぬくもり",
            "en": "retro nightlife warmth"
          },
          {
            "ja": "冷たい夕方の空気",
            "en": "cold evening air"
          }
        ]
      },
      {
        "group": "🧺 市場・マーケットの空気",
        "items": [
          {
            "ja": "市場の開店前の気配",
            "en": "market opening bustle"
          },
          {
            "ja": "青果市場の活気",
            "en": "fresh produce market mood"
          },
          {
            "ja": "市場の人波",
            "en": "market crowd flow"
          },
          {
            "ja": "湿った市場の空気",
            "en": "humid market air"
          },
          {
            "ja": "市場街区の気配",
            "en": "market district mood"
          },
          {
            "ja": "湯気の立つ市場",
            "en": "steam-filled market"
          },
          {
            "ja": "昼の市場ラッシュ",
            "en": "market lunch rush"
          },
          {
            "ja": "閉店後の市場の静けさ",
            "en": "after-closing market stillness"
          }
        ]
      },
      {
        "group": "🎮 娯楽街・ネオン通り",
        "items": [
          {
            "ja": "夜前の高揚",
            "en": "pre-night excitement"
          },
          {
            "ja": "娯楽街のざわめき",
            "en": "entertainment district buzz"
          },
          {
            "ja": "濃い夜遊びの熱気",
            "en": "dense nightlife energy"
          },
          {
            "ja": "湿った夜の歓楽街の空気",
            "en": "humid nightlife air"
          },
          {
            "ja": "ゲーム街の夜騒音",
            "en": "night arcade noise"
          },
          {
            "ja": "週末の人波",
            "en": "weekend foot traffic"
          },
          {
            "ja": "上映前後の人波",
            "en": "evening showtime crowd"
          },
          {
            "ja": "都会の遊興気配",
            "en": "downtown leisure mood"
          },
          {
            "ja": "終電後も残る熱",
            "en": "lingering nightlife heat"
          },
          {
            "ja": "営業時間後の静けさ",
            "en": "after-hours amusement stillness"
          },
          {
            "ja": "残響するネオンの気配",
            "en": "residual neon hum"
          }
        ]
      },
      {
        "group": "🏢 オフィス街・高層街区",
        "items": [
          {
            "ja": "朝の通勤ラッシュ",
            "en": "morning commute"
          },
          {
            "ja": "昼休みの人波",
            "en": "lunch break bustle"
          },
          {
            "ja": "オフィスワーカーの流れ",
            "en": "office crowd"
          },
          {
            "ja": "平日の街の流れ",
            "en": "weekday city flow"
          },
          {
            "ja": "夕方の退勤ラッシュ",
            "en": "evening rush"
          },
          {
            "ja": "退勤後の静けさ",
            "en": "after-work stillness"
          },
          {
            "ja": "雨のビジネス街",
            "en": "rainy business street"
          },
          {
            "ja": "冷たい都会の空気",
            "en": "cold urban air"
          },
          {
            "ja": "冷たいビル風",
            "en": "cold urban wind"
          },
          {
            "ja": "夜のタワー光",
            "en": "tower lights at night"
          },
          {
            "ja": "深夜のビジネス街",
            "en": "midnight business district"
          },
          {
            "ja": "人の消えた街区",
            "en": "empty city blocks"
          },
          {
            "ja": "遅い夕方の業務街",
            "en": "late evening business street"
          },
          {
            "ja": "まばらな会社員",
            "en": "sparse office workers"
          },
          {
            "ja": "昼の都市光",
            "en": "midday city light"
          }
        ]
      },
      {
        "group": "⚓ 港町・臨海都市",
        "items": [
          {
            "ja": "夕方の海風",
            "en": "evening sea breeze"
          },
          {
            "ja": "湿った湾岸の空気",
            "en": "humid waterfront air"
          },
          {
            "ja": "潮の匂いの港気配",
            "en": "salt-air harbor mood"
          },
          {
            "ja": "雨の臨海都市の空気",
            "en": "rainy waterfront air"
          },
          {
            "ja": "夜の湾岸光",
            "en": "bay lights at night"
          },
          {
            "ja": "曇った港空",
            "en": "overcast harbor sky"
          },
          {
            "ja": "港の作業気配",
            "en": "working harbor mood"
          },
          {
            "ja": "強い海風",
            "en": "strong sea wind"
          },
          {
            "ja": "観光港の賑わい",
            "en": "tourist harbor bustle"
          },
          {
            "ja": "深夜の港の静けさ",
            "en": "deep night harbor stillness"
          },
          {
            "ja": "港の朝もや",
            "en": "harbor morning haze"
          }
        ]
      },
      {
        "group": "🚧 再開発の気配",
        "items": [
          {
            "ja": "工事進行中の気配",
            "en": "ongoing construction atmosphere"
          },
          {
            "ja": "再開発街区の騒音",
            "en": "redevelopment district noise"
          },
          {
            "ja": "夕方の作業灯の気配",
            "en": "late-evening worksite glow"
          },
          {
            "ja": "雨の再開発空気",
            "en": "rainy redevelopment air"
          },
          {
            "ja": "都市の粉塵感",
            "en": "dusty urban air"
          },
          {
            "ja": "重機の存在感",
            "en": "heavy machinery presence"
          },
          {
            "ja": "営業時間後の工事静寂",
            "en": "after-hours worksite stillness"
          },
          {
            "ja": "迂回導線の人流",
            "en": "detour foot traffic"
          },
          {
            "ja": "未完成街区の気配",
            "en": "unfinished city blocks"
          },
          {
            "ja": "硬い都市光",
            "en": "hard urban light"
          }
        ]
      }
    ],
    "settings": [
      {
        "group": "💡 光・反射",
        "items": [
          {
            "ja": "街灯",
            "en": "streetlights"
          },
          {
            "ja": "ネオン反射",
            "en": "neon reflections"
          },
          {
            "ja": "濡れたアスファルト反射",
            "en": "wet asphalt reflections"
          },
          {
            "ja": "信号機の光",
            "en": "traffic lights"
          },
          {
            "ja": "ショーウィンドウの灯り",
            "en": "shop window glow"
          },
          {
            "ja": "ヘッドライトの流れ",
            "en": "headlight streaks"
          },
          {
            "ja": "長い朝影",
            "en": "long morning shadows"
          },
          {
            "ja": "長い夕方の影",
            "en": "long shadows"
          }
        ]
      },
      {
        "group": "🧭 視界・構図",
        "items": [
          {
            "ja": "遠景のビル群",
            "en": "distant skyline"
          },
          {
            "ja": "電線",
            "en": "overhead wires"
          },
          {
            "ja": "自販機",
            "en": "vending machines"
          },
          {
            "ja": "横断歩道の白線",
            "en": "crosswalk markings"
          },
          {
            "ja": "駅の看板",
            "en": "station signage"
          },
          {
            "ja": "アパートの窓明かり",
            "en": "apartment windows"
          },
          {
            "ja": "バス停の標識",
            "en": "bus stop sign"
          },
          {
            "ja": "商店看板",
            "en": "shop signs"
          }
        ]
      },
      {
        "group": "🧩 細部・生活感",
        "items": [
          {
            "ja": "駐輪された自転車",
            "en": "parked bicycles"
          },
          {
            "ja": "植木鉢",
            "en": "potted plants"
          },
          {
            "ja": "傘の群れ",
            "en": "umbrella clusters"
          },
          {
            "ja": "貼り紙・ポスター",
            "en": "banners and posters"
          },
          {
            "ja": "ゴミ袋",
            "en": "trash bags at curb"
          },
          {
            "ja": "室外機",
            "en": "air conditioner units"
          },
          {
            "ja": "配管の走る壁",
            "en": "wall pipes"
          },
          {
            "ja": "脇道のドア",
            "en": "side doors"
          },
          {
            "ja": "水たまり",
            "en": "rain puddles"
          },
          {
            "ja": "滴る換気口",
            "en": "dripping vents"
          }
        ]
      },
      {
        "group": "🛒 アーケード・店先の細部",
        "items": [
          {
            "ja": "アーケードの天井灯",
            "en": "arcade roof lights"
          },
          {
            "ja": "手書きの特売札",
            "en": "handwritten sale signs"
          },
          {
            "ja": "駐輪スペース",
            "en": "bicycle parking"
          },
          {
            "ja": "閉まった店先シャッター",
            "en": "shuttered storefronts"
          },
          {
            "ja": "濡れたタイル反射",
            "en": "wet tile reflections"
          },
          {
            "ja": "傘立て",
            "en": "umbrella stands"
          },
          {
            "ja": "レトロ看板",
            "en": "retro signboards"
          },
          {
            "ja": "細い店先のひさし",
            "en": "narrow storefront awnings"
          },
          {
            "ja": "商店街の吊り幕",
            "en": "hanging shop banners"
          },
          {
            "ja": "季節飾り",
            "en": "hanging seasonal decorations"
          }
        ]
      },
      {
        "group": "🏮 灯り・看板・商店細部",
        "items": [
          {
            "ja": "赤提灯",
            "en": "red lanterns"
          },
          {
            "ja": "灯る紙灯籠",
            "en": "glowing paper lanterns"
          },
          {
            "ja": "二言語看板",
            "en": "bilingual signboards"
          },
          {
            "ja": "艶のある看板反射",
            "en": "wet sign reflections"
          },
          {
            "ja": "吊り旗",
            "en": "hanging banners"
          },
          {
            "ja": "屋台の湯気",
            "en": "stall steam"
          },
          {
            "ja": "艶やかな看板列",
            "en": "glossy signboards"
          },
          {
            "ja": "市場門のアーチ",
            "en": "market gate arch"
          },
          {
            "ja": "テイクアウト店先",
            "en": "takeout storefronts"
          },
          {
            "ja": "祭りの仮設屋台",
            "en": "temporary festival stalls"
          },
          {
            "ja": "閉まった屋台",
            "en": "shuttered stalls"
          },
          {
            "ja": "暗く残る灯籠",
            "en": "dim lanterns"
          }
        ]
      },
      {
        "group": "🧱 古い下町・昭和街区",
        "items": [
          {
            "ja": "電柱",
            "en": "utility poles"
          },
          {
            "ja": "頭上の電線",
            "en": "overhead wires"
          },
          {
            "ja": "色褪せた看板",
            "en": "faded signboards"
          },
          {
            "ja": "古い店の庇",
            "en": "old shop awnings"
          },
          {
            "ja": "赤提灯",
            "en": "paper lanterns"
          },
          {
            "ja": "のれん",
            "en": "noren curtains"
          },
          {
            "ja": "古い自販機",
            "en": "old vending machine"
          },
          {
            "ja": "並んだ自転車",
            "en": "bicycles lined up"
          },
          {
            "ja": "継ぎはぎのアスファルト",
            "en": "patched asphalt"
          },
          {
            "ja": "古いタイル壁",
            "en": "old tiled facades"
          }
        ]
      },
      {
        "group": "🧺 市場・屋台の細部",
        "items": [
          {
            "ja": "青果の木箱",
            "en": "produce crates"
          },
          {
            "ja": "布のひさし",
            "en": "fabric awnings"
          },
          {
            "ja": "半開きの店先シャッター",
            "en": "shop shutters half-open"
          },
          {
            "ja": "吊り下げメニューボード",
            "en": "hanging menu boards"
          },
          {
            "ja": "積まれた買い物かご",
            "en": "stacked baskets"
          },
          {
            "ja": "天井の送風機",
            "en": "ceiling fans"
          },
          {
            "ja": "暖かな屋台灯",
            "en": "warm stall lamps"
          },
          {
            "ja": "手書きの値札",
            "en": "handwritten price signs"
          },
          {
            "ja": "屋台の湯気",
            "en": "food stall steam"
          },
          {
            "ja": "共用テーブル",
            "en": "communal tables"
          },
          {
            "ja": "空いた市場台",
            "en": "empty stalls"
          },
          {
            "ja": "巻き上げシャッター",
            "en": "rolled shutters"
          },
          {
            "ja": "暗い屋台灯",
            "en": "dim stall lamps"
          }
        ]
      },
      {
        "group": "🎮 娯楽街・ネオン通り",
        "items": [
          {
            "ja": "大型ネオン看板",
            "en": "neon sign towers"
          },
          {
            "ja": "ゲームセンターの電飾看板",
            "en": "arcade marquees"
          },
          {
            "ja": "映画館のマーキー",
            "en": "movie theater marquee"
          },
          {
            "ja": "縦長ネオン看板",
            "en": "vertical neon signs"
          },
          {
            "ja": "光る店先の庇",
            "en": "glowing storefront canopies"
          },
          {
            "ja": "上映ポスター",
            "en": "ticket posters"
          },
          {
            "ja": "クレーンゲームの灯り",
            "en": "claw machine glow"
          },
          {
            "ja": "ポスターだらけの柱",
            "en": "poster-covered pillars"
          },
          {
            "ja": "大型街頭ビジョン",
            "en": "street billboard screens"
          },
          {
            "ja": "終電後のタクシー列",
            "en": "late-night taxi line"
          },
          {
            "ja": "閉店したゲーム店のシャッター",
            "en": "shuttered arcade fronts"
          },
          {
            "ja": "薄く残るネオン漏れ",
            "en": "dim neon spill"
          }
        ]
      },
      {
        "group": "🏢 オフィス街・高層街区",
        "items": [
          {
            "ja": "ガラスカーテンウォール",
            "en": "glass curtain walls"
          },
          {
            "ja": "鏡面高層ビル",
            "en": "mirrored skyscrapers"
          },
          {
            "ja": "オフィスタワー入口",
            "en": "office tower entrances"
          },
          {
            "ja": "横断歩道の白線",
            "en": "crosswalk stripes"
          },
          {
            "ja": "ビル窓の灯り",
            "en": "tower windows"
          },
          {
            "ja": "プラザベンチ",
            "en": "plaza benches"
          },
          {
            "ja": "タクシー待機列",
            "en": "taxi queue"
          },
          {
            "ja": "回転ドア",
            "en": "revolving doors"
          },
          {
            "ja": "スカイブリッジ",
            "en": "skybridge"
          },
          {
            "ja": "濡れた石床反射",
            "en": "wet stone reflections"
          },
          {
            "ja": "傘の人波",
            "en": "umbrellas crowd"
          },
          {
            "ja": "企業ロゴ看板",
            "en": "business signage"
          },
          {
            "ja": "警備灯",
            "en": "security lights"
          },
          {
            "ja": "静かな歩道",
            "en": "silent sidewalks"
          }
        ]
      },
      {
        "group": "⚓ 港町・臨海都市",
        "items": [
          {
            "ja": "港の街灯",
            "en": "harbor lamps"
          },
          {
            "ja": "岸壁の手すり",
            "en": "pier railings"
          },
          {
            "ja": "コンテナクレーン",
            "en": "container cranes"
          },
          {
            "ja": "フェリー案内板",
            "en": "ferry terminal signage"
          },
          {
            "ja": "湾岸の反射光",
            "en": "waterfront reflections"
          },
          {
            "ja": "停泊船の灯り",
            "en": "moored ship lights"
          },
          {
            "ja": "潮で濡れた路面",
            "en": "salt-wet pavement"
          },
          {
            "ja": "海沿いのガードレール",
            "en": "seaside guardrails"
          },
          {
            "ja": "倉庫の壁面",
            "en": "warehouse facades"
          },
          {
            "ja": "金網越しの港景",
            "en": "fence-lined harbor view"
          }
        ]
      },
      {
        "group": "🚧 工事ディテール",
        "items": [
          {
            "ja": "工事仮囲い",
            "en": "construction fences"
          },
          {
            "ja": "タワークレーン",
            "en": "tower cranes"
          },
          {
            "ja": "足場",
            "en": "scaffolding"
          },
          {
            "ja": "三角コーン",
            "en": "traffic cones"
          },
          {
            "ja": "仮設通路",
            "en": "temporary walkways"
          },
          {
            "ja": "警告灯",
            "en": "warning lights"
          },
          {
            "ja": "養生シートの足場",
            "en": "covered scaffolds"
          },
          {
            "ja": "鉄骨フレーム",
            "en": "steel frames"
          },
          {
            "ja": "未完成の外壁",
            "en": "unfinished facades"
          },
          {
            "ja": "仮設案内板",
            "en": "temporary signage"
          },
          {
            "ja": "反射安全パネル",
            "en": "reflective safety panels"
          },
          {
            "ja": "重機シルエット",
            "en": "excavator silhouettes"
          }
        ]
      }
    ]
  },
  {
    "id": "store_indoor_collection",
    "title": "🏪 店舗・屋内空間特化コレクション",
    "subtitle": "コンビニ・小型店舗、服屋・アパレルショップなど、飲食以外の都市店舗内観を陳列、照明、売り場導線、生活感で多層に噛ませる、小売・ショップ系の特化コレクション",
    "complete": [
      {
        "group": "🏪 コンビニ・小型店舗",
        "items": [
          {
            "id": "store_convenience_midnight",
            "ja": "深夜のコンビニ店内",
            "links": {
              "base": [
                "convenience store interior"
              ],
              "customize": [
                "late-night store mood",
                "cool fluorescent lighting",
                "quiet convenience store air"
              ],
              "settings": [
                "refrigerated case glow",
                "POS register counter",
                "product shelf rows"
              ]
            }
          },
          {
            "id": "store_convenience_rainy_entrance",
            "ja": "雨夜のコンビニ入口",
            "links": {
              "base": [
                "store entrance area"
              ],
              "customize": [
                "rainy-day customer flow",
                "late-night store mood",
                "wet entrance air"
              ],
              "settings": [
                "automatic sliding door",
                "umbrella stand",
                "rain-wet floor reflection"
              ]
            }
          },
          {
            "id": "store_convenience_bright_morning",
            "ja": "朝の明るいコンビニ",
            "links": {
              "base": [
                "convenience store interior"
              ],
              "customize": [
                "morning store brightness",
                "cool fluorescent lighting",
                "fresh opening atmosphere"
              ],
              "settings": [
                "refrigerated case glow",
                "product shelf rows",
                "window posters"
              ]
            }
          },
          {
            "id": "store_convenience_evening_register",
            "ja": "夕方の混んだレジ前",
            "links": {
              "base": [
                "checkout counter area"
              ],
              "customize": [
                "after-work customer flow",
                "crowded counter zone",
                "busy store atmosphere"
              ],
              "settings": [
                "POS register counter",
                "queue guide posts",
                "countertop small goods"
              ]
            }
          },
          {
            "id": "store_convenience_silent_fluorescent",
            "ja": "蛍光灯の静かな深夜コンビニ",
            "links": {
              "base": [
                "magazine shelf aisle"
              ],
              "customize": [
                "late-night store mood",
                "cool fluorescent lighting",
                "silent aisle atmosphere"
              ],
              "settings": [
                "magazine rack",
                "product shelf rows",
                "security mirror"
              ]
            }
          },
          {
            "id": "store_convenience_dawn_restock",
            "ja": "品出し中の早朝コンビニ",
            "links": {
              "base": [
                "drink case aisle"
              ],
              "customize": [
                "early-morning restocking mood",
                "cool fluorescent lighting",
                "fresh opening atmosphere"
              ],
              "settings": [
                "stacked delivery crates",
                "beverage case glow",
                "restocking cart"
              ]
            }
          },
          {
            "id": "store_convenience_lunch_rush",
            "ja": "昼のコンビニラッシュ",
            "links": {
              "base": [
                "checkout counter area"
              ],
              "customize": [
                "lunchtime store rush",
                "busy store atmosphere",
                "daytime customer turnover"
              ],
              "settings": [
                "queue guide posts",
                "countertop small goods",
                "hot snack warmer case"
              ]
            }
          },
          {
            "id": "store_convenience_hot_snack_night",
            "ja": "夜のホットスナック前",
            "links": {
              "base": [
                "hot snack corner"
              ],
              "customize": [
                "night storefront glow",
                "warm snack-case glow",
                "after-work customer flow"
              ],
              "settings": [
                "hot snack warmer case",
                "counter coffee machine",
                "condiment sachet stand"
              ]
            }
          },
          {
            "id": "store_convenience_rain_shelter",
            "ja": "雨宿り客のいる深夜コンビニ",
            "links": {
              "base": [
                "store entrance area"
              ],
              "customize": [
                "rain-shelter customer flow",
                "late-night store mood",
                "wet entrance air"
              ],
              "settings": [
                "umbrella stand",
                "rain-wet floor reflection",
                "half-open umbrella bin"
              ]
            }
          },
          {
            "id": "store_convenience_copy_corner",
            "ja": "コピー機脇の静かな深夜コンビニ",
            "links": {
              "base": [
                "copy machine corner"
              ],
              "customize": [
                "late-night machine hum",
                "silent aisle atmosphere",
                "quiet convenience store air"
              ],
              "settings": [
                "copy machine terminal",
                "prepaid card rack",
                "security mirror"
              ]
            }
          },
          {
            "id": "store_convenience_winter_entry",
            "ja": "冬の温かいコンビニ入口",
            "links": {
              "base": [
                "store entrance area"
              ],
              "customize": [
                "winter entry warmth",
                "night storefront glow",
                "evening shopping lull"
              ],
              "settings": [
                "automatic sliding door",
                "heated drink shelf",
                "floor heater mat"
              ]
            }
          }
        ]
      },
      {
        "group": "👗 服屋・アパレルショップ",
        "items": [
          {
            "id": "store_apparel_bright",
            "ja": "明るいセレクトショップ店内",
            "links": {
              "base": [
                "apparel shop interior"
              ],
              "customize": [
                "bright boutique lighting",
                "orderly retail display mood",
                "weekend shopping crowd"
              ],
              "settings": [
                "hanger racks",
                "mannequin display",
                "folded clothing tables"
              ]
            }
          },
          {
            "id": "store_apparel_window_night",
            "ja": "夜のショーウィンドウ前",
            "links": {
              "base": [
                "shop window display area"
              ],
              "customize": [
                "night storefront glow",
                "quiet after-hours street feel",
                "window display stillness"
              ],
              "settings": [
                "window spotlights",
                "mannequin display",
                "glass reflections"
              ]
            }
          },
          {
            "id": "store_apparel_closing",
            "ja": "閉店前のアパレル店",
            "links": {
              "base": [
                "apparel shop interior"
              ],
              "customize": [
                "closing-time quiet",
                "orderly retail display mood",
                "evening shopping lull"
              ],
              "settings": [
                "hanger racks",
                "sale POP signs",
                "half-lowered shutter feel"
              ]
            }
          },
          {
            "id": "store_apparel_fitting",
            "ja": "試着室まわりの店内",
            "links": {
              "base": [
                "fitting room frontage"
              ],
              "customize": [
                "fitting room hush",
                "bright boutique lighting",
                "calm retail air"
              ],
              "settings": [
                "full-length mirrors",
                "fitting room curtains",
                "bench near fitting room"
              ]
            }
          },
          {
            "id": "store_apparel_sale",
            "ja": "セール中の服屋",
            "links": {
              "base": [
                "apparel shop interior"
              ],
              "customize": [
                "sale-event bustle",
                "weekend shopping crowd",
                "bright boutique lighting"
              ],
              "settings": [
                "sale POP signs",
                "hanger racks",
                "cash wrap counter"
              ]
            }
          },
          {
            "id": "store_apparel_late_sale",
            "ja": "セール終盤の荒れた服屋",
            "links": {
              "base": [
                "apparel shop interior",
                "sale display table zone"
              ],
              "customize": [
                "late-sale disarray",
                "weekend shopping crowd",
                "bright boutique lighting"
              ],
              "settings": [
                "sale POP signs",
                "central display table",
                "hanging price tags"
              ]
            }
          },
          {
            "id": "store_apparel_mirror_fitting",
            "ja": "鏡灯りが並ぶ試着室前",
            "links": {
              "base": [
                "fitting room frontage",
                "mirror-side display area"
              ],
              "customize": [
                "fitting queue mood",
                "bright boutique lighting",
                "calm retail air"
              ],
              "settings": [
                "full-length mirrors",
                "mirror-side stool",
                "fitting room curtains"
              ]
            }
          },
          {
            "id": "store_apparel_rainy_evening",
            "ja": "雨夜のブティック店内",
            "links": {
              "base": [
                "apparel shop interior",
                "window-side aisle"
              ],
              "customize": [
                "rainy evening boutique glow",
                "night storefront glow",
                "orderly retail display mood"
              ],
              "settings": [
                "window spotlights",
                "glass reflections",
                "accessory display fixtures"
              ]
            }
          },
          {
            "id": "store_apparel_preopening",
            "ja": "開店前の静かなアパレル店",
            "links": {
              "base": [
                "apparel shop interior",
                "stockroom doorway"
              ],
              "customize": [
                "pre-opening prep hush",
                "calm retail air",
                "bright boutique lighting"
              ],
              "settings": [
                "stockroom door",
                "stacked shopping bags",
                "hanger racks"
              ]
            }
          },
          {
            "id": "store_apparel_window_reset",
            "ja": "閉店後のウィンドウ替え中の服屋",
            "links": {
              "base": [
                "shop window display area",
                "stockroom doorway"
              ],
              "customize": [
                "after-hours display reset mood",
                "quiet after-hours street feel",
                "window display stillness"
              ],
              "settings": [
                "window spotlights",
                "stockroom door",
                "stacked shopping bags"
              ]
            }
          }
        ]
      }
    ],
    "base": [
      {
        "group": "🏪 コンビニ・小型店舗",
        "items": [
          {
            "ja": "コンビニ店内",
            "en": "convenience store interior"
          },
          {
            "ja": "レジ前",
            "en": "checkout counter area"
          },
          {
            "ja": "入口まわり",
            "en": "store entrance area"
          },
          {
            "ja": "雑誌棚通路",
            "en": "magazine shelf aisle"
          },
          {
            "ja": "ホットスナック前",
            "en": "hot snack corner"
          },
          {
            "ja": "ドリンクケース通路",
            "en": "drink case aisle"
          },
          {
            "ja": "コピー機コーナー",
            "en": "copy machine corner"
          }
        ]
      },
      {
        "group": "👗 服屋・アパレルショップ",
        "items": [
          {
            "ja": "アパレル店内",
            "en": "apparel shop interior"
          },
          {
            "ja": "試着室前",
            "en": "fitting room frontage"
          },
          {
            "ja": "ショーウィンドウ前",
            "en": "shop window display area"
          },
          {
            "ja": "セール平台まわり",
            "en": "sale display table zone"
          },
          {
            "ja": "ショーウィンドウ脇通路",
            "en": "window-side aisle"
          },
          {
            "ja": "ストックルーム前",
            "en": "stockroom doorway"
          },
          {
            "ja": "ミラー前の売り場",
            "en": "mirror-side display area"
          }
        ]
      }
    ],
    "customize": [
      {
        "group": "🕒 営業時間・流れ",
        "items": [
          {
            "ja": "深夜営業の空気",
            "en": "late-night store mood"
          },
          {
            "ja": "朝の明るさ",
            "en": "morning store brightness"
          },
          {
            "ja": "仕事帰りの客流れ",
            "en": "after-work customer flow"
          },
          {
            "ja": "閉店前の静けさ",
            "en": "closing-time quiet"
          },
          {
            "ja": "週末の買い物客",
            "en": "weekend shopping crowd"
          },
          {
            "ja": "セール時のざわめき",
            "en": "sale-event bustle"
          },
          {
            "ja": "昼のコンビニラッシュ",
            "en": "lunchtime store rush"
          },
          {
            "ja": "早朝の品出し気配",
            "en": "early-morning restocking mood"
          },
          {
            "ja": "雨宿り客の出入り",
            "en": "rain-shelter customer flow"
          },
          {
            "ja": "昼の回転の速い客流れ",
            "en": "daytime customer turnover"
          }
        ]
      },
      {
        "group": "💡 光・温度・煙",
        "items": [
          {
            "ja": "白い蛍光灯",
            "en": "cool fluorescent lighting"
          },
          {
            "ja": "雨夜の湿った入口空気",
            "en": "wet entrance air"
          },
          {
            "ja": "静かな店内空気",
            "en": "calm retail air"
          },
          {
            "ja": "コンビニの静かな深夜感",
            "en": "quiet convenience store air"
          },
          {
            "ja": "忙しい店内の空気",
            "en": "busy store atmosphere"
          },
          {
            "ja": "ホットスナックの暖かな灯り",
            "en": "warm snack-case glow"
          },
          {
            "ja": "冬の入口のぬくもり",
            "en": "winter entry warmth"
          },
          {
            "ja": "明るいブティック照明",
            "en": "bright boutique lighting"
          },
          {
            "ja": "開店前の静かな準備空気",
            "en": "pre-opening prep hush"
          },
          {
            "ja": "雨夜のブティック灯り",
            "en": "rainy evening boutique glow"
          },
          {
            "ja": "試着待ちの気配",
            "en": "fitting queue mood"
          },
          {
            "ja": "セール終盤の荒れた売り場感",
            "en": "late-sale disarray"
          },
          {
            "ja": "閉店後のウィンドウ替え気配",
            "en": "after-hours display reset mood"
          }
        ]
      },
      {
        "group": "👥 気配・ムード",
        "items": [
          {
            "ja": "混んだレジ前の圧",
            "en": "crowded counter zone"
          },
          {
            "ja": "整頓された売り場感",
            "en": "orderly retail display mood"
          },
          {
            "ja": "試着室まわりの静けさ",
            "en": "fitting room hush"
          },
          {
            "ja": "閉店後の街側の静けさ",
            "en": "quiet after-hours street feel"
          },
          {
            "ja": "ショーウィンドウの静止感",
            "en": "window display stillness"
          },
          {
            "ja": "雨の日の来店気配",
            "en": "rainy-day customer flow"
          },
          {
            "ja": "開店直後の新鮮さ",
            "en": "fresh opening atmosphere"
          },
          {
            "ja": "夜の店先の光",
            "en": "night storefront glow"
          },
          {
            "ja": "夕方の買い物の落ち着き",
            "en": "evening shopping lull"
          },
          {
            "ja": "無人の棚通路の静けさ",
            "en": "silent aisle atmosphere"
          },
          {
            "ja": "コピー機の低い作動音",
            "en": "late-night machine hum"
          },
          {
            "ja": "夜の買い物の落ち着き",
            "en": "evening shopping lull"
          }
        ]
      }
    ],
    "settings": [
      {
        "group": "🧊 小売・入口まわり",
        "items": [
          {
            "ja": "冷蔵ケースの灯り",
            "en": "refrigerated case glow"
          },
          {
            "ja": "レジカウンター",
            "en": "POS register counter"
          },
          {
            "ja": "商品棚の列",
            "en": "product shelf rows"
          },
          {
            "ja": "自動ドア",
            "en": "automatic sliding door"
          },
          {
            "ja": "傘立て",
            "en": "umbrella stand"
          },
          {
            "ja": "濡れた床反射",
            "en": "rain-wet floor reflection"
          },
          {
            "ja": "雑誌ラック",
            "en": "magazine rack"
          },
          {
            "ja": "防犯ミラー",
            "en": "security mirror"
          },
          {
            "ja": "窓ポスター",
            "en": "window posters"
          },
          {
            "ja": "レジ横小物棚",
            "en": "countertop small goods"
          },
          {
            "ja": "整列ポール",
            "en": "queue guide posts"
          },
          {
            "ja": "ホットスナックケース",
            "en": "hot snack warmer case"
          },
          {
            "ja": "カウンターコーヒーマシン",
            "en": "counter coffee machine"
          },
          {
            "ja": "コピー機端末",
            "en": "copy machine terminal"
          },
          {
            "ja": "プリペイドカード棚",
            "en": "prepaid card rack"
          },
          {
            "ja": "飲料ケースの灯り",
            "en": "beverage case glow"
          },
          {
            "ja": "品出し台車",
            "en": "restocking cart"
          },
          {
            "ja": "積まれた搬入ケース",
            "en": "stacked delivery crates"
          },
          {
            "ja": "薬味・ソース小袋台",
            "en": "condiment sachet stand"
          },
          {
            "ja": "半開き傘立て箱",
            "en": "half-open umbrella bin"
          },
          {
            "ja": "温かい飲料棚",
            "en": "heated drink shelf"
          },
          {
            "ja": "入口ヒーターマット",
            "en": "floor heater mat"
          }
        ]
      },
      {
        "group": "👗 アパレル・売り場の細部",
        "items": [
          {
            "ja": "ハンガーラック",
            "en": "hanger racks"
          },
          {
            "ja": "マネキン展示",
            "en": "mannequin display"
          },
          {
            "ja": "畳まれた服の台",
            "en": "folded clothing tables"
          },
          {
            "ja": "ウィンドウスポット",
            "en": "window spotlights"
          },
          {
            "ja": "ガラス反射",
            "en": "glass reflections"
          },
          {
            "ja": "セールPOP",
            "en": "sale POP signs"
          },
          {
            "ja": "姿見",
            "en": "full-length mirrors"
          },
          {
            "ja": "試着室カーテン",
            "en": "fitting room curtains"
          },
          {
            "ja": "試着室前のベンチ",
            "en": "bench near fitting room"
          },
          {
            "ja": "半閉じシャッター感",
            "en": "half-lowered shutter feel"
          },
          {
            "ja": "アクセサリー什器",
            "en": "accessory display fixtures"
          },
          {
            "ja": "平台ディスプレイ",
            "en": "central display table"
          },
          {
            "ja": "価格タグ列",
            "en": "hanging price tags"
          },
          {
            "ja": "ストックルーム扉",
            "en": "stockroom door"
          },
          {
            "ja": "ショッパーバッグの束",
            "en": "stacked shopping bags"
          },
          {
            "ja": "ミラー前スツール",
            "en": "mirror-side stool"
          }
        ]
      },
      {
        "group": "🧾 レジ・会計まわり",
        "items": [
          {
            "ja": "アパレルレジカウンター",
            "en": "cash wrap counter"
          }
        ]
      }
    ]
  },
  {
  "id": "food_store_collection",
  "title": "🍽 飲食店・フード店舗特化コレクション",
  "subtitle": "和食店・居酒屋、洋食店・カフェ・レストラン、焼肉・鉄板・煙の店、ハンバーガーショップ、カレー専門店、イタリアンレストラン、カフェテリア・フードコート、ラーメン・麺類店、たこ焼き店・お好み焼き店、ベーカリー・パン屋、中華料理店、寿司屋・回転寿司、スイーツ店・デザートショップ、アイスクリーム店・ジェラート店、かき氷・甘味処、かき氷・甘味処など、飲食店の内観を光、熱、煙、湯気、席、厨房気配で多層に噛ませる、飯テロ特化の屋内コレクション",
  "complete": [
    {
      "group": "🍶 和食店・居酒屋",
      "items": [
        {
          "id": "store_izakaya_lantern_night",
          "ja": "提灯が灯る居酒屋店内",
          "links": {
            "base": [
              "izakaya interior"
            ],
            "customize": [
              "warm indoor lighting",
              "dinner rush atmosphere",
              "izakaya warmth"
            ],
            "settings": [
              "hanging lanterns",
              "noren curtain",
              "table condiment set"
            ]
          }
        },
        {
          "id": "store_japanese_counter_night",
          "ja": "夜の和食カウンター",
          "links": {
            "base": [
              "japanese restaurant counter"
            ],
            "customize": [
              "intimate counter mood",
              "warm indoor lighting",
              "quiet dining atmosphere"
            ],
            "settings": [
              "menu strips",
              "bottle-lined counter",
              "small dish trays"
            ]
          }
        },
        {
          "id": "store_kappo_rain",
          "ja": "雨の小料理屋",
          "links": {
            "base": [
              "small japanese diner interior"
            ],
            "customize": [
              "rainy-day customer flow",
              "quiet dining atmosphere",
              "warm indoor lighting"
            ],
            "settings": [
              "rain-wet entry mat",
              "paper lantern glow",
              "wooden table surfaces"
            ]
          }
        },
        {
          "id": "store_japanese_closing",
          "ja": "閉店前の静かな和食店",
          "links": {
            "base": [
              "small japanese diner interior"
            ],
            "customize": [
              "closing-time quiet",
              "low customer murmur",
              "warm indoor lighting"
            ],
            "settings": [
              "half-cleared tableware",
              "menu strips",
              "noren curtain"
            ]
          }
        },
        {
          "id": "store_izakaya_crowded",
          "ja": "賑わう居酒屋席",
          "links": {
            "base": [
              "table seating area"
            ],
            "customize": [
              "dinner rush atmosphere",
              "crowded table zone",
              "izakaya warmth"
            ],
            "settings": [
              "hanging lanterns",
              "bottle-lined counter",
              "table condiment set"
            ]
          }
        },
        {
          "id": "store_japanese_noren_entry_night",
          "ja": "暖簾越しの夜の和食入口",
          "links": {
            "base": [
              "izakaya entry area"
            ],
            "customize": [
              "noren-entry warmth",
              "night storefront glow",
              "warm indoor lighting"
            ],
            "settings": [
              "noren-lit entry",
              "hanging lanterns",
              "rain-dark storefront stone"
            ]
          }
        },
        {
          "id": "store_teishoku_prelunch_quiet",
          "ja": "昼前の静かな定食屋",
          "links": {
            "base": [
              "set-meal diner interior"
            ],
            "customize": [
              "pre-lunch quiet",
              "quiet dining atmosphere",
              "warm indoor lighting"
            ],
            "settings": [
              "menu strips",
              "counter chopstick canister",
              "wooden table surfaces"
            ]
          }
        },
        {
          "id": "store_japanese_window_rain",
          "ja": "雨音が残る窓際の和食席",
          "links": {
            "base": [
              "japanese window-side seat"
            ],
            "customize": [
              "rainy window-seat hush",
              "quiet dining atmosphere",
              "rainy-day customer flow"
            ],
            "settings": [
              "rain-streaked window glass",
              "wooden table surfaces",
              "folded seat cushions"
            ]
          }
        },
        {
          "id": "store_izakaya_late_cleanup",
          "ja": "深夜の片付け中の居酒屋",
          "links": {
            "base": [
              "izakaya interior"
            ],
            "customize": [
              "late-night cleanup mood",
              "low customer murmur",
              "warm indoor lighting"
            ],
            "settings": [
              "half-cleared tableware",
              "dim lantern afterglow",
              "bottle-lined counter"
            ]
          }
        },
        {
          "id": "store_izakaya_charcoal_remnant",
          "ja": "炭火の匂いが残る居酒屋席",
          "links": {
            "base": [
              "table seating area"
            ],
            "customize": [
              "charcoal-scented air",
              "izakaya warmth",
              "night dining calm"
            ],
            "settings": [
              "grilled skewer smoke traces",
              "stacked sake bottles",
              "table condiment set"
            ]
          }
        }
      ]
    },
    {
      "group": "🍽 洋食店・カフェ・レストラン",
      "items": [
        {
          "id": "store_cafe_daytime",
          "ja": "昼のカフェ店内",
          "links": {
            "base": [
              "cafe interior"
            ],
            "customize": [
              "daytime cafe brightness",
              "calm retail air",
              "soft cafe chatter"
            ],
            "settings": [
              "pastry display case",
              "tabletop menu stands",
              "ambient pendant lights"
            ]
          }
        },
        {
          "id": "store_restaurant_sunset",
          "ja": "夕暮れの洋食レストラン",
          "links": {
            "base": [
              "restaurant dining area"
            ],
            "customize": [
              "sunset dining glow",
              "quiet dining atmosphere",
              "warm indoor lighting"
            ],
            "settings": [
              "tablecloth reflections",
              "tabletop menu stands",
              "ambient pendant lights"
            ]
          }
        },
        {
          "id": "store_cafe_rain_window",
          "ja": "雨の日の窓際席",
          "links": {
            "base": [
              "window-side cafe seat"
            ],
            "customize": [
              "rainy-day customer flow",
              "window-side stillness",
              "soft cafe chatter"
            ],
            "settings": [
              "rain-wet window glass",
              "pastry display case",
              "tabletop menu stands"
            ]
          }
        },
        {
          "id": "store_dining_night",
          "ja": "夜の落ち着いたダイニング",
          "links": {
            "base": [
              "restaurant dining area"
            ],
            "customize": [
              "night dining calm",
              "warm indoor lighting",
              "quiet dining atmosphere"
            ],
            "settings": [
              "ambient pendant lights",
              "tablecloth reflections",
              "wine bottle shelves"
            ]
          }
        },
        {
          "id": "store_cafe_closing",
          "ja": "閉店前の静かなカフェ",
          "links": {
            "base": [
              "cafe interior"
            ],
            "customize": [
              "closing-time quiet",
              "calm retail air",
              "window-side stillness"
            ],
            "settings": [
              "stacked chairs nearby",
              "half-closed signboard",
              "pastry display case"
            ]
          }
        },
        {
          "id": "store_cafe_bread_morning",
          "ja": "焼きたてパンの香る朝のカフェ",
          "links": {
            "base": [
              "bakery cafe counter"
            ],
            "customize": [
              "fresh-baked morning air",
              "daytime cafe brightness",
              "soft cafe chatter"
            ],
            "settings": [
              "bread display shelf",
              "espresso machine steam",
              "ambient pendant lights"
            ]
          }
        },
        {
          "id": "store_restaurant_prelunch",
          "ja": "ランチ前の静かなレストラン",
          "links": {
            "base": [
              "booth dining seat"
            ],
            "customize": [
              "pre-lunch stillness",
              "quiet dining atmosphere",
              "soft daytime window glow"
            ],
            "settings": [
              "booth partition",
              "tablecloth reflections",
              "open kitchen pass counter"
            ]
          }
        },
        {
          "id": "store_cafe_rain_night_corner",
          "ja": "雨夜の街角カフェ",
          "links": {
            "base": [
              "street-corner terrace seat"
            ],
            "customize": [
              "rainy night cafe glow",
              "window-side stillness",
              "night storefront glow"
            ],
            "settings": [
              "street-facing window reflections",
              "rain-wet window glass",
              "tabletop candle light"
            ]
          }
        },
        {
          "id": "store_dining_bar_night",
          "ja": "バーのような夜のダイニング",
          "links": {
            "base": [
              "dining bar counter"
            ],
            "customize": [
              "bar-like evening calm",
              "night dining calm",
              "warm indoor lighting"
            ],
            "settings": [
              "wine glass reflections",
              "back bar bottle shelves",
              "tabletop candle light"
            ]
          }
        },
        {
          "id": "store_restaurant_cleanup_close",
          "ja": "閉店後に片付けの進む洋食店",
          "links": {
            "base": [
              "restaurant dining area"
            ],
            "customize": [
              "after-hours cleanup hush",
              "closing-time quiet",
              "quiet dining atmosphere"
            ],
            "settings": [
              "stacked closing chairs",
              "half-cleared tableware",
              "half-closed signboard"
            ]
          }
        }
      ]
    },
    {
      "group": "🔥 焼肉・鉄板・煙の店",
      "items": [
        {
          "id": "store_yakiniku_smoky",
          "ja": "煙が満ちる焼肉店内",
          "links": {
            "base": [
              "yakiniku restaurant interior"
            ],
            "customize": [
              "smoky dining air",
              "busy grill atmosphere",
              "warm indoor lighting"
            ],
            "settings": [
              "metal exhaust ducts",
              "table grill smoke",
              "charcoal glow reflections"
            ]
          }
        },
        {
          "id": "store_teppan_counter_night",
          "ja": "夜の鉄板焼きカウンター",
          "links": {
            "base": [
              "teppan counter seat"
            ],
            "customize": [
              "teppan heat shimmer",
              "night dining calm",
              "warm indoor lighting"
            ],
            "settings": [
              "teppan steel reflections",
              "counter ingredient trays",
              "chef-side task lights"
            ]
          }
        },
        {
          "id": "store_yakiniku_crowded",
          "ja": "混み合う焼肉店",
          "links": {
            "base": [
              "grill table seating"
            ],
            "customize": [
              "busy grill atmosphere",
              "crowded table zone",
              "smoky dining air"
            ],
            "settings": [
              "metal exhaust ducts",
              "table grill smoke",
              "table condiment set"
            ]
          }
        },
        {
          "id": "store_yakiniku_after_close",
          "ja": "閉店後の静かな焼肉店",
          "links": {
            "base": [
              "yakiniku restaurant interior"
            ],
            "customize": [
              "closing-time quiet",
              "residual smoke warmth",
              "empty table calm"
            ],
            "settings": [
              "cooled grill tops",
              "half-cleared tableware",
              "dim exhaust hood lights"
            ]
          }
        },
        {
          "id": "store_teppan_flame",
          "ja": "炎が映る鉄板席",
          "links": {
            "base": [
              "teppan counter seat"
            ],
            "customize": [
              "teppan heat shimmer",
              "live cooking tension",
              "warm indoor lighting"
            ],
            "settings": [
              "flame reflections on steel",
              "chef-side task lights",
              "counter ingredient trays"
            ]
          }
        },
        {
          "id": "store_yakiniku_weekend_flame",
          "ja": "炎が上がる週末の焼肉店",
          "links": {
            "base": [
              "charcoal roaster booth",
              "yakiniku restaurant interior"
            ],
            "customize": [
              "weekend grill bustle",
              "charcoal heat intensity",
              "live flame burst"
            ],
            "settings": [
              "red-glowing charcoal bed",
              "tabletop built-in roaster",
              "hanging exhaust hood"
            ]
          }
        },
        {
          "id": "store_yakiniku_smoke_before_close",
          "ja": "閉店前の煙が残る焼肉席",
          "links": {
            "base": [
              "grill table seating"
            ],
            "customize": [
              "closing-time smoke linger",
              "residual smoke warmth",
              "empty table calm"
            ],
            "settings": [
              "smoke-stained exhaust hood light",
              "used grill tongs",
              "tabletop built-in roaster"
            ]
          }
        },
        {
          "id": "store_teppan_opening_quiet",
          "ja": "開店直後の静かな鉄板カウンター",
          "links": {
            "base": [
              "chef-facing teppan counter",
              "teppan counter seat"
            ],
            "customize": [
              "opening-hour stillness",
              "teppan heat shimmer",
              "quiet dining atmosphere"
            ],
            "settings": [
              "mise-en-place trays",
              "polished iron griddle sheen",
              "chef-side task lights"
            ]
          }
        },
        {
          "id": "store_yakiniku_afterhours_cleaning",
          "ja": "深夜の清掃中の焼肉店",
          "links": {
            "base": [
              "after-hours cleaning floor",
              "yakiniku restaurant interior"
            ],
            "customize": [
              "after-hours cleaning hush",
              "empty table calm",
              "late-night machine hum"
            ],
            "settings": [
              "floor squeegee",
              "dim exhaust hood lights",
              "cooled grill tops"
            ]
          }
        },
        {
          "id": "store_teppan_afterwork_bustle",
          "ja": "仕事帰りで賑わう鉄板焼き席",
          "links": {
            "base": [
              "teppan counter seat",
              "chef-facing teppan counter"
            ],
            "customize": [
              "after-work grill crowd",
              "live cooking tension",
              "warm indoor lighting"
            ],
            "settings": [
              "teppan flare reflections",
              "counter ingredient trays",
              "oil-splash guard panel"
            ]
          }
        }
      ]
    },
    {
      "group": "🍔 ハンバーガーショップ",
      "items": [
        {
          "id": "store_burger_lunch_rush",
          "ja": "ランチラッシュのハンバーガーショップ",
          "links": {
            "base": [
              "burger shop interior"
            ],
            "customize": [
              "lunch rush atmosphere",
              "bright fast-food lighting",
              "fast-food counter bustle"
            ],
            "settings": [
              "illuminated menu boards",
              "tray return station",
              "soda fountain station"
            ]
          }
        },
        {
          "id": "store_burger_rainy_window",
          "ja": "雨夜のバーガーショップ窓際席",
          "links": {
            "base": [
              "window-side fast-food seat"
            ],
            "customize": [
              "rainy night diner glow",
              "window-side stillness",
              "night storefront glow"
            ],
            "settings": [
              "rain-streaked window glass",
              "vinyl booth seating",
              "street-facing window reflections"
            ]
          }
        },
        {
          "id": "store_burger_late_night",
          "ja": "深夜のファストフード店内",
          "links": {
            "base": [
              "late-night burger counter"
            ],
            "customize": [
              "late-night fast-food calm",
              "bright fast-food lighting",
              "quiet dining atmosphere"
            ],
            "settings": [
              "illuminated menu boards",
              "POS register counter",
              "self-service ketchup station"
            ]
          }
        },
        {
          "id": "store_burger_after_school",
          "ja": "放課後に賑わうバーガー席",
          "links": {
            "base": [
              "burger booth seating"
            ],
            "customize": [
              "after-school burger crowd",
              "busy fast-food atmosphere",
              "soft cafe chatter"
            ],
            "settings": [
              "vinyl booth seating",
              "paper cup trays",
              "order number display"
            ]
          }
        },
        {
          "id": "store_burger_morning_quiet",
          "ja": "朝の静かなバーガーショップ",
          "links": {
            "base": [
              "burger shop interior"
            ],
            "customize": [
              "opening-hour stillness",
              "fresh-griddle morning air",
              "morning counter quiet"
            ],
            "settings": [
              "breakfast menu cards",
              "coffee machine corner",
              "clean tray stack"
            ]
          }
        },
        {
          "id": "store_burger_closing_cleanup",
          "ja": "閉店前の片付け中のバーガー店",
          "links": {
            "base": [
              "counter-side cleaning zone"
            ],
            "customize": [
              "closing-time quiet",
              "after-hours cleaning hush",
              "late-night machine hum"
            ],
            "settings": [
              "stacked cleaning trays",
              "half-wiped table surfaces",
              "mop bucket by counter"
            ]
          }
        }
      ]
    },
    {
      "group": "🍛 カレー専門店",
      "items": [
        {
          "id": "store_curry_lunch_rush",
          "ja": "昼のカレー専門店ラッシュ",
          "links": {
            "base": [
              "curry specialty shop interior"
            ],
            "customize": [
              "lunch curry rush",
              "spice-scented dining air",
              "bright daytime curry lighting"
            ],
            "settings": [
              "laminated curry menu",
              "curry pot steam",
              "metal water pitcher"
            ]
          }
        },
        {
          "id": "store_curry_rainy_window",
          "ja": "雨夜のカレー専門店窓際席",
          "links": {
            "base": [
              "window-side curry table"
            ],
            "customize": [
              "rainy curry shop glow",
              "quiet curry window seat",
              "spice-scented dining air"
            ],
            "settings": [
              "steam-fogged window",
              "counter condiment set",
              "laminated curry menu"
            ]
          }
        },
        {
          "id": "store_curry_late_night_counter",
          "ja": "深夜のカレー専門店カウンター",
          "links": {
            "base": [
              "counter curry seat"
            ],
            "customize": [
              "late-night curry calm",
              "simmering curry steam",
              "quiet dining atmosphere"
            ],
            "settings": [
              "counter spoon canister",
              "stainless curry pass counter",
              "metal water pitcher"
            ]
          }
        },
        {
          "id": "store_curry_ticket_entry_evening",
          "ja": "夕方の券売機前カレー店",
          "links": {
            "base": [
              "ticket-machine curry entry"
            ],
            "customize": [
              "after-work curry warmth",
              "counter queue bustle",
              "bright daytime curry lighting"
            ],
            "settings": [
              "ticket vending machine",
              "hanging order slips",
              "counter condiment set"
            ]
          }
        },
        {
          "id": "store_curry_open_kitchen_noon",
          "ja": "昼のオープンキッチンのカレー店",
          "links": {
            "base": [
              "open-kitchen curry counter"
            ],
            "customize": [
              "kitchen clatter lunch pace",
              "freshly-served curry heat",
              "lunch curry rush"
            ],
            "settings": [
              "rice warmer corner",
              "tray with curry plates",
              "stainless curry pass counter"
            ]
          }
        },
        {
          "id": "store_curry_closing_quiet",
          "ja": "閉店前の静かなカレー専門店",
          "links": {
            "base": [
              "closing-time curry counter area"
            ],
            "customize": [
              "closing-time curry hush",
              "lingering spice afterglow",
              "late-night curry calm"
            ],
            "settings": [
              "stacked curry trays",
              "wiped stainless counter",
              "dim curry sign glow"
            ]
          }
        }
      ]
    },
    {
      "group": "🍝 イタリアンレストラン",
      "items": [
        {
          "id": "store_italian_candle_night",
          "ja": "キャンドルが灯る夜のイタリアン",
          "links": {
            "base": [
              "italian restaurant dining room"
            ],
            "customize": [
              "amber trattoria glow",
              "romantic dinner hush",
              "quiet dining atmosphere"
            ],
            "settings": [
              "tabletop candle light",
              "wine glass reflections",
              "polished cutlery set"
            ]
          }
        },
        {
          "id": "store_italian_pasta_lunch",
          "ja": "昼のパスタランチのイタリアン",
          "links": {
            "base": [
              "pasta-lunch table"
            ],
            "customize": [
              "lunch pasta bustle",
              "noon lunch brightness",
              "tomato-sauce kitchen warmth"
            ],
            "settings": [
              "chalkboard pasta menu",
              "bread basket set",
              "olive oil cruet"
            ]
          }
        },
        {
          "id": "store_italian_rainy_window",
          "ja": "雨夜の窓際のイタリアン席",
          "links": {
            "base": [
              "trattoria window-side seat"
            ],
            "customize": [
              "rainy italian window glow",
              "window-side stillness",
              "romantic dinner hush"
            ],
            "settings": [
              "rain-wet window glass",
              "street-facing window reflections",
              "hanging wine glasses"
            ]
          }
        },
        {
          "id": "store_italian_wine_trattoria",
          "ja": "ワイン棚が見える静かなトラットリア",
          "links": {
            "base": [
              "wine-shelf trattoria corner"
            ],
            "customize": [
              "trattoria wine warmth",
              "warm indoor lighting",
              "quiet dining atmosphere"
            ],
            "settings": [
              "wine bottle shelves",
              "hanging wine glasses",
              "olive oil cruet"
            ]
          }
        },
        {
          "id": "store_italian_preopen_whitecloth",
          "ja": "開店前の白いテーブルクロス席",
          "links": {
            "base": [
              "white-tablecloth italian seat"
            ],
            "customize": [
              "pre-service table-setting stillness",
              "soft tableware clink",
              "warm indoor lighting"
            ],
            "settings": [
              "white tablecloth setting",
              "table service tray",
              "folded white napkin"
            ]
          }
        },
        {
          "id": "store_italian_closing_cleanup",
          "ja": "閉店後の片付け中のイタリアン店",
          "links": {
            "base": [
              "closing italian dining aisle"
            ],
            "customize": [
              "italian closing hush",
              "after-hours dining cleanup hush",
              "low customer murmur"
            ],
            "settings": [
              "half-cleared pasta plates",
              "stacked closing chairs",
              "polished cutlery set"
            ]
          }
        }
      ]
    },
    {
      "group": "🥤 カフェテリア・フードコート",
      "items": [
        {
          "id": "store_foodcourt_lunch_rush",
          "ja": "昼のフードコート席",
          "links": {
            "base": [
              "food court seating area"
            ],
            "customize": [
              "lunchtime tray bustle",
              "bright mall daylight",
              "food court crowd chatter"
            ],
            "settings": [
              "tray return station",
              "numbered pickup display",
              "shared plastic tables"
            ]
          }
        },
        {
          "id": "store_foodcourt_afterschool_busy",
          "ja": "放課後に賑わうフードコート",
          "links": {
            "base": [
              "mall food court edge seat"
            ],
            "customize": [
              "after-school food court chatter",
              "family crowd murmur",
              "food court crowd chatter"
            ],
            "settings": [
              "shopping bags under chairs",
              "shared plastic tables",
              "self-serve drink fountain"
            ]
          }
        },
        {
          "id": "store_foodcourt_rainy_mall",
          "ja": "雨の日のショッピングモール内フードコート",
          "links": {
            "base": [
              "food court seating area"
            ],
            "customize": [
              "rainy mall refuge mood",
              "bright mall daylight",
              "food court crowd chatter"
            ],
            "settings": [
              "mall skylight reflections",
              "tray return station",
              "food court planter divider"
            ]
          }
        },
        {
          "id": "store_foodcourt_closing_quiet",
          "ja": "閉店前の静かなフードコート",
          "links": {
            "base": [
              "food court closing seat row"
            ],
            "customize": [
              "closing-time food court hush",
              "late shopping lull",
              "fluorescent dining brightness"
            ],
            "settings": [
              "floor cleaning caution sign",
              "stacked empty trays",
              "dimmed menu light panels"
            ]
          }
        },
        {
          "id": "store_cafeteria_trayreturn_busy",
          "ja": "トレイ返却台が混むカフェテリア",
          "links": {
            "base": [
              "tray-return cafeteria aisle"
            ],
            "customize": [
              "tray-return bustle",
              "lunchtime tray bustle",
              "fluorescent dining brightness"
            ],
            "settings": [
              "tray return station",
              "shared plastic tables",
              "self-serve drink fountain"
            ]
          }
        },
        {
          "id": "store_cafeteria_morning_quiet",
          "ja": "朝の静かなカフェテリア",
          "links": {
            "base": [
              "self-serve cafeteria line"
            ],
            "customize": [
              "self-serve cafeteria calm",
              "bright mall daylight",
              "morning cafeteria quiet"
            ],
            "settings": [
              "menu light panels",
              "condiment island",
              "shared plastic tables"
            ]
          }
        }
      ]
    },

    {
      "group": "🥪 ベーカリー・パン屋",
      "items": [
        {
          "id": "store_bakery_preopen_dawn",
          "ja": "朝焼け前の仕込み中のベーカリー",
          "links": {
            "base": [
              "early-morning bakery entry"
            ],
            "customize": [
              "pre-opening bakery stillness",
              "oven-preheat warmth",
              "bread-dough prep quiet"
            ],
            "settings": [
              "oven glow from back kitchen",
              "proofing tray racks",
              "flour-dusted prep counter"
            ]
          }
        },
        {
          "id": "store_bakery_morning_fresh",
          "ja": "焼きたてパンが並ぶ朝のパン屋",
          "links": {
            "base": [
              "bread display counter"
            ],
            "customize": [
              "fresh-baked bread aroma",
              "morning bakery bustle",
              "bright morning storefront light"
            ],
            "settings": [
              "fresh bread baskets",
              "bakery price placards",
              "pastry tongs station"
            ]
          }
        },
        {
          "id": "store_bakery_noon_cafe_window",
          "ja": "昼のベーカリーカフェ窓際",
          "links": {
            "base": [
              "bakery cafe window seat"
            ],
            "customize": [
              "soft bakery cafe chatter",
              "noon window warmth",
              "coffee-and-bread calm"
            ],
            "settings": [
              "window pastry display",
              "tray return shelf",
              "coffee cup stack"
            ]
          }
        },
        {
          "id": "store_bakery_rainy_smallshop",
          "ja": "雨の日の小さなパン屋",
          "links": {
            "base": [
              "small neighborhood bakery"
            ],
            "customize": [
              "rainy bakery window glow",
              "warm yeasty indoor air",
              "quiet rainy customer flow"
            ],
            "settings": [
              "rain-streaked bakery window",
              "umbrella stand by door",
              "warm pendant lights"
            ]
          }
        },
        {
          "id": "store_bakery_evening_sellout",
          "ja": "夕方の売れ残りが少ないパン屋",
          "links": {
            "base": [
              "closing-time bakery aisle"
            ],
            "customize": [
              "late sellout hush",
              "evening bakery warmth",
              "sparse evening customer flow"
            ],
            "settings": [
              "half-empty bread shelves",
              "sale sticker trays",
              "dim storefront sign glow"
            ]
          }
        },
        {
          "id": "store_bakery_afterhours_cleanup",
          "ja": "閉店後の片付け中のベーカリー",
          "links": {
            "base": [
              "after-hours bakery floor"
            ],
            "customize": [
              "after-hours bakery cleanup hush",
              "lingering butter aroma",
              "cooling-oven quiet"
            ],
            "settings": [
              "stacked empty bread trays",
              "wiped glass display case",
              "mop bucket by back counter"
            ]
          }
        }
      ]
    },
    {
      "group": "🍜 ラーメン・麺類店",
      "items": [
        {
          "id": "store_ramen_steamy_night",
          "ja": "湯気が立つ夜のラーメン店",
          "links": {
            "base": [
              "ramen shop interior"
            ],
            "customize": [
              "steamy broth air",
              "night noodle-shop warmth",
              "fluorescent noodle-shop brightness"
            ],
            "settings": [
              "broth steam cloud",
              "counter seasoning caddy",
              "noodle menu placards"
            ]
          }
        },
        {
          "id": "store_ramen_latenight_counter",
          "ja": "深夜のカウンターラーメン店",
          "links": {
            "base": [
              "late-night ramen counter"
            ],
            "customize": [
              "late-night noodle-shop calm",
              "counter slurp bustle",
              "broth-scented warmth"
            ],
            "settings": [
              "chopstick dispenser",
              "water pitcher stack",
              "back-kitchen pot steam"
            ]
          }
        },
        {
          "id": "store_noodle_rainy_window",
          "ja": "雨の日の曇った麺店窓際",
          "links": {
            "base": [
              "window-side noodle shop seat"
            ],
            "customize": [
              "rainy noodle-shop window glow",
              "quiet rainy noodle traffic",
              "broth-scented warmth"
            ],
            "settings": [
              "fogged noodle-shop window",
              "hanging noren at noodle shop",
              "water pitcher stack"
            ]
          }
        },
        {
          "id": "store_ramen_lunch_turnover",
          "ja": "昼の回転が速いラーメン店",
          "links": {
            "base": [
              "fast-turnover ramen aisle"
            ],
            "customize": [
              "fast lunch turnover",
              "fluorescent noodle-shop brightness",
              "counter slurp bustle"
            ],
            "settings": [
              "ticket vending machine",
              "stacked bowls drying rack",
              "counter seasoning caddy"
            ]
          }
        },
        {
          "id": "store_noodle_ticket_queue",
          "ja": "券売機前が混む麺類店",
          "links": {
            "base": [
              "ticket-machine noodle shop entry"
            ],
            "customize": [
              "ticket-machine queue pressure",
              "fast lunch turnover",
              "broth-scented warmth"
            ],
            "settings": [
              "ticket vending machine",
              "hanging noren at noodle shop",
              "noodle menu placards"
            ]
          }
        },
        {
          "id": "store_noodle_afterhours_quiet",
          "ja": "閉店後の静かな麺店",
          "links": {
            "base": [
              "after-hours noodle counter"
            ],
            "customize": [
              "closing noodle-shop hush",
              "lingering broth heat",
              "late-night noodle-shop calm"
            ],
            "settings": [
              "wiped broth counter",
              "last-order signboard",
              "stacked bowls drying rack"
            ]
          }
        }
      ]
    },
    {
      "group": "🍜 ラーメン・麺類店",
      "items": [
        {
          "ja": "ラーメン店内",
          "en": "ramen shop interior"
        },
        {
          "ja": "深夜のラーメンカウンター",
          "en": "late-night ramen counter"
        },
        {
          "ja": "窓際の麺店席",
          "en": "window-side noodle shop seat"
        },
        {
          "ja": "回転の速いラーメン通路席",
          "en": "fast-turnover ramen aisle"
        },
        {
          "ja": "券売機前の麺店入口",
          "en": "ticket-machine noodle shop entry"
        },
        {
          "ja": "閉店後の麺店カウンター",
          "en": "after-hours noodle counter"
        }
      ]
    },
    {
      "group": "🍜 ラーメン・麺類店",
      "items": [
        {
          "ja": "湯気立つスープの空気",
          "en": "steamy broth air"
        },
        {
          "ja": "夜の麺店の暖かさ",
          "en": "night noodle-shop warmth"
        },
        {
          "ja": "蛍光灯の麺店明るさ",
          "en": "fluorescent noodle-shop brightness"
        },
        {
          "ja": "深夜の麺店の落ち着き",
          "en": "late-night noodle-shop calm"
        },
        {
          "ja": "カウンターの啜る音の賑わい",
          "en": "counter slurp bustle"
        },
        {
          "ja": "スープの残り熱の暖かさ",
          "en": "broth-scented warmth"
        },
        {
          "ja": "雨の日の麺店窓灯り",
          "en": "rainy noodle-shop window glow"
        },
        {
          "ja": "雨の日の静かな麺店客流れ",
          "en": "quiet rainy noodle traffic"
        },
        {
          "ja": "昼の回転の速さ",
          "en": "fast lunch turnover"
        },
        {
          "ja": "券売機前の列圧",
          "en": "ticket-machine queue pressure"
        },
        {
          "ja": "閉店後の麺店の静けさ",
          "en": "closing noodle-shop hush"
        },
        {
          "ja": "閉店後に残るスープ熱",
          "en": "lingering broth heat"
        }
      ]
    },
    {
      "group": "🥟 中華料理店",
      "items": [
        {
          "id": "store_chinese_steamy_night",
          "ja": "蒸籠湯気の立つ夜の中華料理店",
          "links": {
            "base": [
              "chinese restaurant interior"
            ],
            "customize": [
              "steamer-filled dining air",
              "night chinese-dining warmth",
              "steam-hazed chinese room"
            ],
            "settings": [
              "steaming dim sum baskets",
              "vertical chinese menu strips",
              "red lantern decor"
            ]
          }
        },
        {
          "id": "store_chinese_roundtable_lunch",
          "ja": "昼の円卓が賑わう中華料理店",
          "links": {
            "base": [
              "round-table chinese dining room"
            ],
            "customize": [
              "lunchtime round-table bustle",
              "porcelain clink chatter",
              "night chinese-dining warmth"
            ],
            "settings": [
              "lazy susan dining table",
              "red-back dining chairs",
              "banquet round-table cloth"
            ]
          }
        },
        {
          "id": "store_chinese_rainy_redwindow",
          "ja": "雨夜の赤灯りがにじむ中華料理店",
          "links": {
            "base": [
              "red-lit chinese window seat"
            ],
            "customize": [
              "rainy red-lantern glow",
              "steam-hazed chinese room",
              "night chinese-dining warmth"
            ],
            "settings": [
              "steam-fogged chinese window",
              "red lantern decor",
              "soy-vinegar condiment set"
            ]
          }
        },
        {
          "id": "store_chinese_latenight_cleanup",
          "ja": "深夜の片付け中の中華料理店",
          "links": {
            "base": [
              "late-night chinese service counter"
            ],
            "customize": [
              "late-night chinese cleanup",
              "wok-oil afteraroma",
              "closing chinese hush"
            ],
            "settings": [
              "plate bus cart",
              "wok-flame reflections",
              "dimmed chinese sign light"
            ]
          }
        },
        {
          "id": "store_chinese_banquet_preset",
          "ja": "回転卓が並ぶ宴席前の中華料理店",
          "links": {
            "base": [
              "banquet lazy-susan table"
            ],
            "customize": [
              "pre-banquet bustle",
              "porcelain clink chatter",
              "night chinese-dining warmth"
            ],
            "settings": [
              "lazy susan dining table",
              "banquet round-table cloth",
              "red-back dining chairs"
            ]
          }
        },
        {
          "id": "store_chinese_closing_quiet",
          "ja": "閉店前の静かな中華料理店",
          "links": {
            "base": [
              "closing chinese dining aisle"
            ],
            "customize": [
              "closing chinese hush",
              "wok-oil afteraroma",
              "steam-hazed chinese room"
            ],
            "settings": [
              "plate bus cart",
              "dimmed chinese sign light",
              "vertical chinese menu strips"
            ]
          }
        }
      ]
    },
    {
      "group": "🥟 中華料理店",
      "items": [
        {
          "ja": "中華料理店店内",
          "en": "chinese restaurant interior"
        },
        {
          "ja": "円卓のある中華料理店",
          "en": "round-table chinese dining room"
        },
        {
          "ja": "赤灯りの窓際中華席",
          "en": "red-lit chinese window seat"
        },
        {
          "ja": "深夜の中華カウンター",
          "en": "late-night chinese service counter"
        },
        {
          "ja": "宴席前の回転卓席",
          "en": "banquet lazy-susan table"
        },
        {
          "ja": "閉店前の中華通路席",
          "en": "closing chinese dining aisle"
        }
      ]
    },
    {
      "group": "🥟 中華料理店",
      "items": [
        {
          "ja": "蒸籠湯気のこもる空気",
          "en": "steamer-filled dining air"
        },
        {
          "ja": "夜の中華料理店の熱気",
          "en": "night chinese-dining warmth"
        },
        {
          "ja": "昼の円卓席の賑わい",
          "en": "lunchtime round-table bustle"
        },
        {
          "ja": "雨夜の赤灯り",
          "en": "rainy red-lantern glow"
        },
        {
          "ja": "深夜の片付け気配",
          "en": "late-night chinese cleanup"
        },
        {
          "ja": "宴席前のざわめき",
          "en": "pre-banquet bustle"
        },
        {
          "ja": "炒め油の残り香",
          "en": "wok-oil afteraroma"
        },
        {
          "ja": "中華店の皿音",
          "en": "porcelain clink chatter"
        },
        {
          "ja": "閉店前の中華店の静けさ",
          "en": "closing chinese hush"
        },
        {
          "ja": "湯気に曇る店内",
          "en": "steam-hazed chinese room"
        }
      ]
    },
    {
      "group": "🐙 たこ焼き店・お好み焼き店",
      "items": [
        {
          "id": "store_takoyaki_evening_counter",
          "ja": "夕方のたこ焼き店カウンター",
          "links": {
            "base": [
              "takoyaki counter stall"
            ],
            "customize": [
              "griddle steam bustle",
              "evening street-food warmth",
              "counter-side quick turnover"
            ],
            "settings": [
              "takoyaki griddle plate",
              "sauce brush tray",
              "paper boat trays"
            ]
          }
        },
        {
          "id": "store_okonomiyaki_rainy_teppan",
          "ja": "雨夜のお好み焼き店鉄板席",
          "links": {
            "base": [
              "okonomiyaki teppan table"
            ],
            "customize": [
              "rainy griddle-shop glow",
              "savory sauce aroma",
              "warm indoor lighting"
            ],
            "settings": [
              "okonomiyaki grill spatulas",
              "sauce bottle caddy",
              "rain-wet storefront glass"
            ]
          }
        },
        {
          "id": "store_flourgrill_afterschool_busy",
          "ja": "放課後に賑わう粉もの店",
          "links": {
            "base": [
              "flour-grill casual shop"
            ],
            "customize": [
              "after-school snack crowd",
              "hot griddle chatter",
              "cozy fast-dining bustle"
            ],
            "settings": [
              "tabletop teppan plates",
              "stacked plastic water cups",
              "handwritten menu placards"
            ]
          }
        },
        {
          "id": "store_takoyaki_latenight_cleanup",
          "ja": "深夜の片付け中のたこ焼き店",
          "links": {
            "base": [
              "closing takoyaki counter"
            ],
            "customize": [
              "late-night cleanup mood",
              "closing-time quiet",
              "lingering sauce-and-batter heat"
            ],
            "settings": [
              "octopus batter trays",
              "half-cleaned griddle surface",
              "folded noren at close"
            ]
          }
        },
        {
          "id": "store_takoyaki_festival_busy",
          "ja": "祭り帰りの混んだたこ焼き店",
          "links": {
            "base": [
              "takoyaki counter stall"
            ],
            "customize": [
              "festival-night crowd spill",
              "evening street-food warmth",
              "queue-at-counter pressure"
            ],
            "settings": [
              "paper lantern side glow",
              "stacked paper boat trays",
              "takoyaki pick station"
            ]
          }
        },
        {
          "id": "store_okonomiyaki_preopen_quiet",
          "ja": "開店前の静かなお好み焼き店",
          "links": {
            "base": [
              "pre-open okonomiyaki seat"
            ],
            "customize": [
              "opening-hour stillness",
              "griddle preheat warmth",
              "prep-time kitchen quiet"
            ],
            "settings": [
              "polished teppan surface",
              "batter prep bowls",
              "hanging noren at entrance"
            ]
          }
        }
      ]
    }
  

    ,{
      "group": "🍰 スイーツ店・デザートショップ",
      "items": [
        {
          "id": "food_dessert_showcase_night",
          "ja": "ガラスケースが光る夜のスイーツ店",
          "links": {
            "base": [
              "dessert shop interior"
            ],
            "customize": [
              "glass-case sweet glow",
              "soft confectionery store lighting",
              "afternoon dessert-shop calm"
            ],
            "settings": [
              "illuminated cake display case",
              "price placards on cakes",
              "wiped glass showcase"
            ]
          }
        },
        {
          "id": "food_dessert_afternoon_seat",
          "ja": "昼下がりのデザートショップ席",
          "links": {
            "base": [
              "dessert shop seating"
            ],
            "customize": [
              "afternoon dessert-shop calm",
              "afternoon tea-hour chatter",
              "soft confectionery store lighting"
            ],
            "settings": [
              "window-side dessert menu board",
              "macaron tower display",
              "pastry tongs tray"
            ]
          }
        },
        {
          "id": "food_patisserie_rain_window",
          "ja": "雨の日のパティスリー窓際",
          "links": {
            "base": [
              "patisserie window seat"
            ],
            "customize": [
              "rainy patisserie window light",
              "afternoon dessert-shop calm",
              "sugar-butter aroma"
            ],
            "settings": [
              "rain-streaked patisserie glass",
              "illuminated cake display case",
              "window-side dessert menu board"
            ]
          }
        },
        {
          "id": "food_dessert_closing_sparse",
          "ja": "閉店前のケーキが減ったスイーツ店",
          "links": {
            "base": [
              "closing dessert display aisle"
            ],
            "customize": [
              "closing-time cake-shop stillness",
              "sold-down dessert display mood",
              "display-case cold glow"
            ],
            "settings": [
              "half-empty dessert shelves",
              "dim storefront dessert sign",
              "price placards on cakes"
            ]
          }
        },
        {
          "id": "food_patisserie_preopen_quiet",
          "ja": "開店前の静かなパティスリー",
          "links": {
            "base": [
              "pre-open patisserie counter"
            ],
            "customize": [
              "pre-open pastry-shop quiet",
              "sugar-butter aroma",
              "display-case cold glow"
            ],
            "settings": [
              "back-counter pastry prep trays",
              "cake box stack",
              "wiped glass showcase"
            ]
          }
        },
        {
          "id": "food_dessert_takeout_evening",
          "ja": "夕方のテイクアウト客が並ぶデザート店",
          "links": {
            "base": [
              "takeout dessert counter line"
            ],
            "customize": [
              "evening takeaway dessert queue",
              "boxed-cake takeaway bustle",
              "glass-case sweet glow"
            ],
            "settings": [
              "ribboned cake boxes",
              "cake box stack",
              "illuminated cake display case"
            ]
          }
        }
      ]
    }
  
  
    ,{
      "group": "🍨 アイスクリーム店・ジェラート店",
      "items": [
        {
          "id": "food_gelato_showcase_night",
          "ja": "発光ケースが映える夜のジェラート店",
          "links": {
            "base": [
              "gelato shop interior"
            ],
            "customize": [
              "night gelato shop glow",
              "chilled display glow",
              "sweet milk aroma"
            ],
            "settings": [
              "illuminated gelato display case",
              "flavor placards",
              "condensation on display glass"
            ]
          }
        },
        {
          "id": "food_gelato_counter_day",
          "ja": "昼のジェラートカウンター",
          "links": {
            "base": [
              "gelato counter seating"
            ],
            "customize": [
              "bright daytime gelato light",
              "chilled display glow",
              "summer ice-shop cool air"
            ],
            "settings": [
              "metal scoop canister",
              "flavor placards",
              "chilled glass countertop"
            ]
          }
        },
        {
          "id": "food_icecream_terrace_summer",
          "ja": "夏のアイスクリーム店テラス席",
          "links": {
            "base": [
              "ice cream terrace seating"
            ],
            "customize": [
              "summer ice-shop cool air",
              "terrace dessert chatter",
              "summer takeaway dessert flow"
            ],
            "settings": [
              "terrace round table",
              "cone display stand",
              "stacked takeaway dessert cups"
            ]
          }
        },
        {
          "id": "food_gelato_rain_quiet",
          "ja": "雨の日の静かなジェラート店",
          "links": {
            "base": [
              "rainy gelato window seat"
            ],
            "customize": [
              "rainy gelato-shop quiet",
              "chilled display glow",
              "sweet milk aroma"
            ],
            "settings": [
              "condensation on display glass",
              "mini sidewalk chalkboard",
              "illuminated gelato display case"
            ]
          }
        },
        {
          "id": "food_icecream_closing_freezer",
          "ja": "閉店前のフリーザーケース前",
          "links": {
            "base": [
              "closing freezer-case aisle"
            ],
            "customize": [
              "closing-time ice-shop stillness",
              "freezer-case hum",
              "chilled display glow"
            ],
            "settings": [
              "half-emptied flavor trays",
              "dim ice-shop sign glow",
              "wiped freezer-case edge"
            ]
          }
        },
        {
          "id": "food_icecream_preopen_chill",
          "ja": "開店前の冷たいアイス店",
          "links": {
            "base": [
              "pre-open ice cream counter"
            ],
            "customize": [
              "pre-open chilled quiet",
              "freezer-case hum",
              "sweet milk aroma"
            ],
            "settings": [
              "metal scoop canister",
              "stacked takeaway dessert cups",
              "wiped freezer-case edge"
            ]
          }
        }
      ]
    }
    ,{
      "group": "🍧 かき氷・甘味処",
      "items": [
        {
          "id": "food_kakigori_green_shade",
          "ja": "緑陰の甘味処で食べるかき氷",
          "links": {
            "base": [
              "shaded japanese sweets seating"
            ],
            "customize": [
              "green summer shade",
              "cool summer sweet-shop air",
              "leaf-filtered daylight"
            ],
            "settings": [
              "glass kakigori bowl",
              "wind chime",
              "garden greenery"
            ]
          }
        },
        {
          "id": "food_kakigori_furin_summer",
          "ja": "風鈴が鳴る夏のかき氷席",
          "links": {
            "base": [
              "summer kakigori veranda seat"
            ],
            "customize": [
              "wind-chime summer hush",
              "cool summer sweet-shop air",
              "summer humidity relief"
            ],
            "settings": [
              "wind chime",
              "striped kakigori banner",
              "condensation on glass dessert bowl"
            ]
          }
        },
        {
          "id": "food_kakigori_garden_engawa",
          "ja": "庭園を眺めるかき氷の縁台",
          "links": {
            "base": [
              "garden-view engawa sweets seat"
            ],
            "customize": [
              "garden-view calm",
              "leaf-filtered daylight",
              "gentle summer breeze"
            ],
            "settings": [
              "wooden engawa bench",
              "garden greenery",
              "bamboo-blind light"
            ]
          }
        },
        {
          "id": "food_kakigori_after_rain",
          "ja": "雨上がりの甘味処とかき氷",
          "links": {
            "base": [
              "rain-cleared japanese sweets shop"
            ],
            "customize": [
              "rain-cleared summer air",
              "wet-green freshness",
              "quiet afternoon sweets hush"
            ],
            "settings": [
              "rain-wet garden stones",
              "condensation on glass dessert bowl",
              "half-open bamboo screen"
            ]
          }
        },
        {
          "id": "food_kakigori_sando_side",
          "ja": "参道脇のかき氷屋",
          "links": {
            "base": [
              "sando-side kakigori stand"
            ],
            "customize": [
              "shrine-approach summer bustle",
              "cool shaved-ice pause",
              "green summer shade"
            ],
            "settings": [
              "striped kakigori banner",
              "syrup bottle set",
              "handheld round fan"
            ]
          }
        },
        {
          "id": "food_kakigori_riverside_breeze",
          "ja": "川風が抜ける涼しい甘味席",
          "links": {
            "base": [
              "riverside sweet shop seating"
            ],
            "customize": [
              "riverside breeze coolness",
              "cool summer sweet-shop air",
              "quiet afternoon sweets hush"
            ],
            "settings": [
              "open garden-side window",
              "glass kakigori bowl",
              "bamboo-blind light"
            ]
          }
        }
      ]
    }
  
  
    ,{
      "group": "🍣 寿司屋・回転寿司",
      "items": [
        {
          "id": "food_sushi_counter_night",
          "ja": "照明が反射する夜の寿司カウンター",
          "links": {
            "base": [
              "night sushi counter"
            ],
            "customize": [
              "night sushi counter glow",
              "warm wood counter mood",
              "late-night sushi calm"
            ],
            "settings": [
              "wooden sushi counter",
              "sushi display case",
              "tea cup set"
            ]
          }
        },
        {
          "id": "food_conveyor_sushi_lunch",
          "ja": "ランチで賑わう回転寿司",
          "links": {
            "base": [
              "conveyor sushi seating"
            ],
            "customize": [
              "lunch conveyor sushi bustle",
              "plate-belt rhythm",
              "bright lunchtime sushi light"
            ],
            "settings": [
              "conveyor belt rail",
              "stacked sushi plates",
              "order touch panel"
            ]
          }
        },
        {
          "id": "food_sushi_entrance_rain",
          "ja": "雨夜の暖簾が揺れる寿司屋入口",
          "links": {
            "base": [
              "sushi shop entrance"
            ],
            "customize": [
              "rainy sushi entrance warmth",
              "vinegar rice aroma",
              "rainy-night sushi window glow"
            ],
            "settings": [
              "noren at sushi entrance",
              "wet umbrella stand",
              "rain-streaked sushi window"
            ]
          }
        },
        {
          "id": "food_sushi_closing_quiet",
          "ja": "閉店前の静かな寿司カウンター",
          "links": {
            "base": [
              "quiet closing sushi counter"
            ],
            "customize": [
              "closing-time sushi stillness",
              "late-night sushi calm",
              "warm wood counter mood"
            ],
            "settings": [
              "last-order placard",
              "half-dim sushi sign glow",
              "wiped sushi counter sheen"
            ]
          }
        },
        {
          "id": "food_conveyor_sushi_evening",
          "ja": "皿が流れる回転寿司の席",
          "links": {
            "base": [
              "conveyor sushi booth"
            ],
            "customize": [
              "plate-belt rhythm",
              "family-dinner sushi bustle",
              "evening conveyor sushi warmth"
            ],
            "settings": [
              "conveyor belt rail",
              "soy sauce set",
              "stacked sushi plates"
            ]
          }
        },
        {
          "id": "food_sushi_prep_morning",
          "ja": "開店前の仕込み中の寿司屋",
          "links": {
            "base": [
              "prep-time sushi counter"
            ],
            "customize": [
              "sushi prep quiet",
              "morning prep-room coolness",
              "vinegar rice aroma"
            ],
            "settings": [
              "itamae prep board",
              "rice tub corner",
              "rolled noren before opening"
            ]
          }
        }
      ]
    }],
  "base": [
    {
      "group": "🍶 和食店・居酒屋",
      "items": [
        {
          "ja": "居酒屋店内",
          "en": "izakaya interior"
        },
        {
          "ja": "和食カウンター",
          "en": "japanese restaurant counter"
        },
        {
          "ja": "小料理屋店内",
          "en": "small japanese diner interior"
        },
        {
          "ja": "テーブル席",
          "en": "table seating area"
        },
        {
          "ja": "居酒屋入口まわり",
          "en": "izakaya entry area"
        },
        {
          "ja": "定食屋店内",
          "en": "set-meal diner interior"
        },
        {
          "ja": "窓際の和食席",
          "en": "japanese window-side seat"
        }
      ]
    },
    {
      "group": "🍽 洋食店・カフェ・レストラン",
      "items": [
        {
          "ja": "カフェ店内",
          "en": "cafe interior"
        },
        {
          "ja": "レストラン客席",
          "en": "restaurant dining area"
        },
        {
          "ja": "窓際席",
          "en": "window-side cafe seat"
        },
        {
          "ja": "ベーカリーカフェカウンター",
          "en": "bakery cafe counter"
        },
        {
          "ja": "ダイニングバーカウンター",
          "en": "dining bar counter"
        },
        {
          "ja": "テラス寄りの席",
          "en": "street-corner terrace seat"
        },
        {
          "ja": "ボックス席",
          "en": "booth dining seat"
        }
      ]
    },
    {
      "group": "🔥 焼肉・鉄板・煙の店",
      "items": [
        {
          "ja": "焼肉店内",
          "en": "yakiniku restaurant interior"
        },
        {
          "ja": "焼き網席",
          "en": "grill table seating"
        },
        {
          "ja": "鉄板カウンター席",
          "en": "teppan counter seat"
        },
        {
          "ja": "炭火ロースター席",
          "en": "charcoal roaster booth"
        },
        {
          "ja": "鉄板前の対面カウンター",
          "en": "chef-facing teppan counter"
        },
        {
          "ja": "清掃中の閉店後フロア",
          "en": "after-hours cleaning floor"
        }
      ]
    },
    {
      "group": "🍔 ハンバーガーショップ",
      "items": [
        {
          "ja": "ハンバーガーショップ店内",
          "en": "burger shop interior"
        },
        {
          "ja": "窓際のバーガー席",
          "en": "window-side fast-food seat"
        },
        {
          "ja": "深夜のバーガーカウンター",
          "en": "late-night burger counter"
        },
        {
          "ja": "バーガーのボックス席",
          "en": "burger booth seating"
        },
        {
          "ja": "片付け中のカウンター脇",
          "en": "counter-side cleaning zone"
        },
        {
          "ja": "セルフオーダー端末まわり",
          "en": "self-order kiosk area"
        }
      ]
    },
    {
      "group": "🍛 カレー専門店",
      "items": [
        {
          "ja": "カレー専門店店内",
          "en": "curry specialty shop interior"
        },
        {
          "ja": "窓際のカレー席",
          "en": "window-side curry table"
        },
        {
          "ja": "深夜のカレーカウンター",
          "en": "counter curry seat"
        },
        {
          "ja": "券売機前のカレー店入口",
          "en": "ticket-machine curry entry"
        },
        {
          "ja": "オープンキッチン前のカレー席",
          "en": "open-kitchen curry counter"
        },
        {
          "ja": "閉店前のカレー店カウンター",
          "en": "closing-time curry counter area"
        }
      ]
    },
    {
      "group": "🍝 イタリアンレストラン",
      "items": [
        {
          "ja": "イタリアンレストラン客席",
          "en": "italian restaurant dining room"
        },
        {
          "ja": "パスタランチのテーブル席",
          "en": "pasta-lunch table"
        },
        {
          "ja": "窓際のトラットリア席",
          "en": "trattoria window-side seat"
        },
        {
          "ja": "ワイン棚の見えるトラットリア角席",
          "en": "wine-shelf trattoria corner"
        },
        {
          "ja": "白いテーブルクロスの席",
          "en": "white-tablecloth italian seat"
        },
        {
          "ja": "閉店後のイタリアン通路席",
          "en": "closing italian dining aisle"
        }
      ]
    },
    {
      "group": "🥤 カフェテリア・フードコート",
      "items": [
        {
          "ja": "フードコート席",
          "en": "food court seating area"
        },
        {
          "ja": "カフェテリア列",
          "en": "self-serve cafeteria line"
        },
        {
          "ja": "モール端のフードコート席",
          "en": "mall food court edge seat"
        },
        {
          "ja": "トレイ返却台まわり",
          "en": "tray-return cafeteria aisle"
        },
        {
          "ja": "セルフドリンク機前",
          "en": "drink-fountain corner"
        },
        {
          "ja": "閉店前のフードコート席列",
          "en": "food court closing seat row"
        }
      ]
    },

    {
      "group": "🥪 ベーカリー・パン屋",
      "items": [
        {
          "ja": "ベーカリー売り場",
          "en": "bread display counter"
        },
        {
          "ja": "ベーカリーカフェ窓際",
          "en": "bakery cafe window seat"
        },
        {
          "ja": "小さな町のパン屋店内",
          "en": "small neighborhood bakery"
        },
        {
          "ja": "早朝のパン屋入口",
          "en": "early-morning bakery entry"
        },
        {
          "ja": "閉店前のパン棚通路",
          "en": "closing-time bakery aisle"
        },
        {
          "ja": "閉店後のベーカリー床",
          "en": "after-hours bakery floor"
        }
      ]
    },
    {
      "group": "🐙 たこ焼き店・お好み焼き店",
      "items": [
        {
          "ja": "たこ焼き店カウンター",
          "en": "takoyaki counter stall"
        },
        {
          "ja": "お好み焼き店鉄板席",
          "en": "okonomiyaki teppan table"
        },
        {
          "ja": "粉ものの気軽な店内",
          "en": "flour-grill casual shop"
        },
        {
          "ja": "閉店中のたこ焼きカウンター",
          "en": "closing takoyaki counter"
        },
        {
          "ja": "開店前のお好み焼き席",
          "en": "pre-open okonomiyaki seat"
        }
      ]
    }
  

    ,{
      "group": "🍰 スイーツ店・デザートショップ",
      "items": [
        {
          "ja": "スイーツ店店内",
          "en": "dessert shop interior"
        },
        {
          "ja": "デザートショップ席",
          "en": "dessert shop seating"
        },
        {
          "ja": "パティスリー窓際",
          "en": "patisserie window seat"
        },
        {
          "ja": "閉店前のデザート棚通路",
          "en": "closing dessert display aisle"
        },
        {
          "ja": "開店前のパティスリーカウンター",
          "en": "pre-open patisserie counter"
        },
        {
          "ja": "テイクアウト列のデザートカウンター",
          "en": "takeout dessert counter line"
        }
      ]
    }
  
  
    ,{
      "group": "🍨 アイスクリーム店・ジェラート店",
      "items": [
        {
          "ja": "ジェラート店店内",
          "en": "gelato shop interior"
        },
        {
          "ja": "ジェラートカウンター席",
          "en": "gelato counter seating"
        },
        {
          "ja": "アイスクリーム店テラス席",
          "en": "ice cream terrace seating"
        },
        {
          "ja": "雨の日のジェラート窓際",
          "en": "rainy gelato window seat"
        },
        {
          "ja": "閉店前のフリーザーケース前",
          "en": "closing freezer-case aisle"
        },
        {
          "ja": "開店前のアイス店カウンター",
          "en": "pre-open ice cream counter"
        }
      ]
    }
    ,{
      "group": "🍧 かき氷・甘味処",
      "items": [
        {
          "ja": "木陰の甘味席",
          "en": "shaded japanese sweets seating"
        },
        {
          "ja": "夏のかき氷縁台席",
          "en": "summer kakigori veranda seat"
        },
        {
          "ja": "庭園の見える縁台席",
          "en": "garden-view engawa sweets seat"
        },
        {
          "ja": "雨上がりの甘味処",
          "en": "rain-cleared japanese sweets shop"
        },
        {
          "ja": "参道脇のかき氷店",
          "en": "sando-side kakigori stand"
        },
        {
          "ja": "川風の抜ける甘味席",
          "en": "riverside sweet shop seating"
        }
      ]
    }
  
  
    ,{
      "group": "🍣 寿司屋・回転寿司",
      "items": [
        {
          "ja": "夜の寿司カウンター",
          "en": "night sushi counter"
        },
        {
          "ja": "回転寿司の席",
          "en": "conveyor sushi seating"
        },
        {
          "ja": "寿司屋入口",
          "en": "sushi shop entrance"
        },
        {
          "ja": "閉店前の静かな寿司カウンター",
          "en": "quiet closing sushi counter"
        },
        {
          "ja": "回転寿司のボックス席",
          "en": "conveyor sushi booth"
        },
        {
          "ja": "開店前の仕込み寿司カウンター",
          "en": "prep-time sushi counter"
        }
      ]
    }],
  "customize": [
    {
      "group": "🕒 営業時間・流れ",
      "items": [
        {
          "ja": "夕食時の混雑",
          "en": "dinner rush atmosphere"
        },
        {
          "ja": "閉店前の静けさ",
          "en": "closing-time quiet"
        },
        {
          "ja": "ランチラッシュの流れ",
          "en": "lunch rush atmosphere"
        },
        {
          "ja": "放課後の客流れ",
          "en": "after-school burger crowd"
        },
        {
          "ja": "朝のカウンターの静けさ",
          "en": "morning counter quiet"
        }
      ]
    },
    {
      "group": "💡 光・温度・煙",
      "items": [
        {
          "ja": "暖かな店内照明",
          "en": "warm indoor lighting"
        },
        {
          "ja": "煙のこもる空気",
          "en": "smoky dining air"
        },
        {
          "ja": "焼き場の残り熱",
          "en": "residual smoke warmth"
        },
        {
          "ja": "鉄板の熱気",
          "en": "teppan heat shimmer"
        },
        {
          "ja": "静かな店内空気",
          "en": "calm retail air"
        },
        {
          "ja": "焼きたてパンの朝の空気",
          "en": "fresh-baked morning air"
        },
        {
          "ja": "雨夜のカフェの灯り",
          "en": "rainy night cafe glow"
        },
        {
          "ja": "炭火の強い熱",
          "en": "charcoal heat intensity"
        },
        {
          "ja": "閉店前に残る煙",
          "en": "closing-time smoke linger"
        },
        {
          "ja": "開店直後の静けさ",
          "en": "opening-hour stillness"
        },
        {
          "ja": "ライブ炎の立ち上がり",
          "en": "live flame burst"
        },
        {
          "ja": "明るいファストフード照明",
          "en": "bright fast-food lighting"
        },
        {
          "ja": "雨夜のバーガー店の灯り",
          "en": "rainy night diner glow"
        },
        {
          "ja": "朝の焼き立てグリドル熱",
          "en": "fresh-griddle morning air"
        }
      ]
    },
    {
      "group": "👥 気配・ムード",
      "items": [
        {
          "ja": "居酒屋の暖かさ",
          "en": "izakaya warmth"
        },
        {
          "ja": "静かな食事空気",
          "en": "quiet dining atmosphere"
        },
        {
          "ja": "カウンター席の親密さ",
          "en": "intimate counter mood"
        },
        {
          "ja": "カフェの柔らかな話し声",
          "en": "soft cafe chatter"
        },
        {
          "ja": "窓際の静けさ",
          "en": "window-side stillness"
        },
        {
          "ja": "焼肉店の活気",
          "en": "busy grill atmosphere"
        },
        {
          "ja": "空いた席の静けさ",
          "en": "empty table calm"
        },
        {
          "ja": "少ない客のざわめき",
          "en": "low customer murmur"
        },
        {
          "ja": "夜の食事の落ち着き",
          "en": "night dining calm"
        },
        {
          "ja": "昼のカフェの明るさ",
          "en": "daytime cafe brightness"
        },
        {
          "ja": "夕暮れの食卓の色",
          "en": "sunset dining glow"
        },
        {
          "ja": "ライブ調理の緊張",
          "en": "live cooking tension"
        },
        {
          "ja": "雨の日の来店気配",
          "en": "rainy-day customer flow"
        },
        {
          "ja": "夜の店先の光",
          "en": "night storefront glow"
        },
        {
          "ja": "コピー機の低い作動音",
          "en": "late-night machine hum"
        },
        {
          "ja": "仕事帰りの焼肉の賑わい",
          "en": "after-work grill crowd"
        },
        {
          "ja": "閉店後の清掃の静けさ",
          "en": "after-hours cleaning hush"
        },
        {
          "ja": "混んだテーブル席の圧",
          "en": "crowded table zone"
        },
        {
          "ja": "昼前の静かな和食空気",
          "en": "pre-lunch quiet"
        },
        {
          "ja": "雨音の残る窓際の静けさ",
          "en": "rainy window-seat hush"
        },
        {
          "ja": "深夜の片付け気配",
          "en": "late-night cleanup mood"
        },
        {
          "ja": "炭火の残り香",
          "en": "charcoal-scented air"
        },
        {
          "ja": "暖簾越しの入口の暖かさ",
          "en": "noren-entry warmth"
        },
        {
          "ja": "ランチ前の静けさ",
          "en": "pre-lunch stillness"
        },
        {
          "ja": "柔らかな昼の窓光",
          "en": "soft daytime window glow"
        },
        {
          "ja": "バーのような夜の静けさ",
          "en": "bar-like evening calm"
        },
        {
          "ja": "閉店後の片付けの静けさ",
          "en": "after-hours cleanup hush"
        },
        {
          "ja": "週末の焼肉の賑わい",
          "en": "weekend grill bustle"
        },
        {
          "ja": "ファストフード店の賑わい",
          "en": "busy fast-food atmosphere"
        },
        {
          "ja": "深夜のファストフードの落ち着き",
          "en": "late-night fast-food calm"
        },
        {
          "ja": "カウンター前のせわしさ",
          "en": "fast-food counter bustle"
        }
      ]
    },
    {
      "group": "🍛 カレー専門店",
      "items": [
        {
          "ja": "昼のカレー店ラッシュ",
          "en": "lunch curry rush"
        },
        {
          "ja": "スパイスの香る店内空気",
          "en": "spice-scented dining air"
        },
        {
          "ja": "昼の明るいカレー店光",
          "en": "bright daytime curry lighting"
        },
        {
          "ja": "雨夜のカレー店の灯り",
          "en": "rainy curry shop glow"
        },
        {
          "ja": "静かな窓際のカレー席",
          "en": "quiet curry window seat"
        },
        {
          "ja": "深夜のカレー店の落ち着き",
          "en": "late-night curry calm"
        },
        {
          "ja": "煮込み続けるカレーの湯気",
          "en": "simmering curry steam"
        },
        {
          "ja": "仕事帰りのカレー店の暖かさ",
          "en": "after-work curry warmth"
        },
        {
          "ja": "カウンター前の行列気配",
          "en": "counter queue bustle"
        },
        {
          "ja": "厨房の昼の忙しさ",
          "en": "kitchen clatter lunch pace"
        },
        {
          "ja": "出来立てカレーの熱",
          "en": "freshly-served curry heat"
        },
        {
          "ja": "閉店前のカレー店の静けさ",
          "en": "closing-time curry hush"
        },
        {
          "ja": "残り香のスパイス熱",
          "en": "lingering spice afterglow"
        }
      ]
    },
    {
      "group": "🍝 イタリアンレストラン",
      "items": [
        {
          "ja": "トラットリアの琥珀灯り",
          "en": "amber trattoria glow"
        },
        {
          "ja": "昼のパスタランチの賑わい",
          "en": "lunch pasta bustle"
        },
        {
          "ja": "雨夜のイタリアン窓光",
          "en": "rainy italian window glow"
        },
        {
          "ja": "ワイン棚のある店の暖かさ",
          "en": "trattoria wine warmth"
        },
        {
          "ja": "開店前のテーブルセットの静けさ",
          "en": "pre-service table-setting stillness"
        },
        {
          "ja": "食器が触れ合う柔らかな音",
          "en": "soft tableware clink"
        },
        {
          "ja": "ロマンチックな夜食空気",
          "en": "romantic dinner hush"
        },
        {
          "ja": "昼の明るいランチ光",
          "en": "noon lunch brightness"
        },
        {
          "ja": "トマトソースの厨房熱",
          "en": "tomato-sauce kitchen warmth"
        },
        {
          "ja": "閉店後のイタリアンの静けさ",
          "en": "italian closing hush"
        },
        {
          "ja": "閉店後の片付けの静けさ",
          "en": "after-hours dining cleanup hush"
        }
      ]
    },
    {
      "group": "🥤 カフェテリア・フードコート",
      "items": [
        {
          "ja": "昼のトレイ行列",
          "en": "lunchtime tray bustle"
        },
        {
          "ja": "放課後のフードコートのざわめき",
          "en": "after-school food court chatter"
        },
        {
          "ja": "フードコートの客ざわめき",
          "en": "food court crowd chatter"
        },
        {
          "ja": "モールの明るい昼光",
          "en": "bright mall daylight"
        },
        {
          "ja": "雨の日の避難先みたいな空気",
          "en": "rainy mall refuge mood"
        },
        {
          "ja": "閉店前のフードコートの静けさ",
          "en": "closing-time food court hush"
        },
        {
          "ja": "セルフ式カフェテリアの落ち着き",
          "en": "self-serve cafeteria calm"
        },
        {
          "ja": "家族連れのざわめき",
          "en": "family crowd murmur"
        },
        {
          "ja": "蛍光灯の食堂明るさ",
          "en": "fluorescent dining brightness"
        },
        {
          "ja": "トレイ返却台のせわしさ",
          "en": "tray-return bustle"
        },
        {
          "ja": "買い物終盤の人の引き",
          "en": "late shopping lull"
        },
        {
          "ja": "朝のカフェテリアの静けさ",
          "en": "morning cafeteria quiet"
        }
      ]
    },

    {
      "group": "🥪 ベーカリー・パン屋",
      "items": [
        {
          "ja": "焼きたてパンの香り",
          "en": "fresh-baked bread aroma"
        },
        {
          "ja": "朝のベーカリーの賑わい",
          "en": "morning bakery bustle"
        },
        {
          "ja": "ベーカリーカフェの柔らかな話し声",
          "en": "soft bakery cafe chatter"
        },
        {
          "ja": "イーストの暖かな店内空気",
          "en": "warm yeasty indoor air"
        },
        {
          "ja": "昼の窓際のぬくもり",
          "en": "noon window warmth"
        },
        {
          "ja": "雨の日のパン屋の窓灯り",
          "en": "rainy bakery window glow"
        },
        {
          "ja": "売り切れ前の静けさ",
          "en": "late sellout hush"
        },
        {
          "ja": "夕方のパン屋の暖かさ",
          "en": "evening bakery warmth"
        },
        {
          "ja": "開店前の静かな仕込み空気",
          "en": "pre-opening bakery stillness"
        },
        {
          "ja": "オーブン予熱のぬくもり",
          "en": "oven-preheat warmth"
        },
        {
          "ja": "生地を仕込む静けさ",
          "en": "bread-dough prep quiet"
        },
        {
          "ja": "閉店後のベーカリー片付けの静けさ",
          "en": "after-hours bakery cleanup hush"
        },
        {
          "ja": "バターの残り香",
          "en": "lingering butter aroma"
        },
        {
          "ja": "オーブンが冷める静けさ",
          "en": "cooling-oven quiet"
        },
        {
          "ja": "雨の日の静かな客の出入り",
          "en": "quiet rainy customer flow"
        },
        {
          "ja": "夕方のまばらな客流れ",
          "en": "sparse evening customer flow"
        },
        {
          "ja": "コーヒーとパンの落ち着き",
          "en": "coffee-and-bread calm"
        },
        {
          "ja": "朝の明るい店先の光",
          "en": "bright morning storefront light"
        }
      ]
    },
    {
      "group": "🐙 たこ焼き店・お好み焼き店",
      "items": [
        {
          "ja": "鉄板の湯気でせわしい空気",
          "en": "griddle steam bustle"
        },
        {
          "ja": "夕方の屋台めいた暖かさ",
          "en": "evening street-food warmth"
        },
        {
          "ja": "カウンター脇の回転の速さ",
          "en": "counter-side quick turnover"
        },
        {
          "ja": "雨夜の粉もの店の灯り",
          "en": "rainy griddle-shop glow"
        },
        {
          "ja": "ソースの香ばしい匂い",
          "en": "savory sauce aroma"
        },
        {
          "ja": "放課後のおやつ客の賑わい",
          "en": "after-school snack crowd"
        },
        {
          "ja": "鉄板前の熱いざわめき",
          "en": "hot griddle chatter"
        },
        {
          "ja": "気軽な粉もの店の賑わい",
          "en": "cozy fast-dining bustle"
        },
        {
          "ja": "深夜の片付け気配",
          "en": "late-night cleanup mood"
        },
        {
          "ja": "ソースと生地の残り熱",
          "en": "lingering sauce-and-batter heat"
        },
        {
          "ja": "祭り帰りの混雑",
          "en": "festival-night crowd spill"
        },
        {
          "ja": "カウンター前の列圧",
          "en": "queue-at-counter pressure"
        },
        {
          "ja": "開店前の鉄板の予熱",
          "en": "griddle preheat warmth"
        },
        {
          "ja": "仕込み中の厨房の静けさ",
          "en": "prep-time kitchen quiet"
        }
      ]
    }
  

    ,{
      "group": "🍰 スイーツ店・デザートショップ",
      "items": [
        {
          "ja": "ガラスケースが光る甘い灯り",
          "en": "glass-case sweet glow"
        },
        {
          "ja": "昼下がりのスイーツ店の落ち着き",
          "en": "afternoon dessert-shop calm"
        },
        {
          "ja": "雨の日のパティスリー窓灯り",
          "en": "rainy patisserie window light"
        },
        {
          "ja": "閉店前のケーキ店の静けさ",
          "en": "closing-time cake-shop stillness"
        },
        {
          "ja": "開店前のパティスリーの静けさ",
          "en": "pre-open pastry-shop quiet"
        },
        {
          "ja": "夕方のテイクアウト客の列",
          "en": "evening takeaway dessert queue"
        },
        {
          "ja": "砂糖とバターの残り香",
          "en": "sugar-butter aroma"
        },
        {
          "ja": "やわらかな甘味店の照明",
          "en": "soft confectionery store lighting"
        },
        {
          "ja": "ティータイムの話し声",
          "en": "afternoon tea-hour chatter"
        },
        {
          "ja": "ショーケースの冷たい光",
          "en": "display-case cold glow"
        },
        {
          "ja": "売れた後のデザート棚の気配",
          "en": "sold-down dessert display mood"
        },
        {
          "ja": "箱詰め客のせわしさ",
          "en": "boxed-cake takeaway bustle"
        }
      ]
    }
  
  
    ,{
      "group": "🍨 アイスクリーム店・ジェラート店",
      "items": [
        {
          "ja": "夜のジェラート店の灯り",
          "en": "night gelato shop glow"
        },
        {
          "ja": "ガラスケースの冷たい光",
          "en": "chilled display glow"
        },
        {
          "ja": "昼のジェラート店の明るさ",
          "en": "bright daytime gelato light"
        },
        {
          "ja": "夏のアイス店の涼しい空気",
          "en": "summer ice-shop cool air"
        },
        {
          "ja": "雨の日のジェラート店の静けさ",
          "en": "rainy gelato-shop quiet"
        },
        {
          "ja": "テラス席の甘いざわめき",
          "en": "terrace dessert chatter"
        },
        {
          "ja": "閉店前のアイス店の静けさ",
          "en": "closing-time ice-shop stillness"
        },
        {
          "ja": "開店前の冷たい静けさ",
          "en": "pre-open chilled quiet"
        },
        {
          "ja": "甘いミルクの残り香",
          "en": "sweet milk aroma"
        },
        {
          "ja": "フリーザーケースの低い唸り",
          "en": "freezer-case hum"
        },
        {
          "ja": "夏のテイクアウト客流れ",
          "en": "summer takeaway dessert flow"
        }
      ]
    }
    ,{
      "group": "🍧 かき氷・甘味処",
      "items": [
        {
          "ja": "夏の緑陰",
          "en": "green summer shade"
        },
        {
          "ja": "涼しい夏の甘味空気",
          "en": "cool summer sweet-shop air"
        },
        {
          "ja": "木漏れ日の揺れ",
          "en": "leaf-filtered daylight"
        },
        {
          "ja": "風鈴が似合う夏の静けさ",
          "en": "wind-chime summer hush"
        },
        {
          "ja": "夏湿気の和らぐ涼しさ",
          "en": "summer humidity relief"
        },
        {
          "ja": "庭を眺める落ち着き",
          "en": "garden-view calm"
        },
        {
          "ja": "やわらかな夏風",
          "en": "gentle summer breeze"
        },
        {
          "ja": "雨上がりの夏空気",
          "en": "rain-cleared summer air"
        },
        {
          "ja": "濡れた緑の清涼感",
          "en": "wet-green freshness"
        },
        {
          "ja": "午後の甘味処の静けさ",
          "en": "quiet afternoon sweets hush"
        },
        {
          "ja": "参道脇の夏の賑わい",
          "en": "shrine-approach summer bustle"
        },
        {
          "ja": "かき氷で一息つく涼感",
          "en": "cool shaved-ice pause"
        },
        {
          "ja": "川風の涼しさ",
          "en": "riverside breeze coolness"
        }
      ]
    }
  
  
    ,{
      "group": "🍣 寿司屋・回転寿司",
      "items": [
        {
          "ja": "夜の寿司カウンターの灯り",
          "en": "night sushi counter glow"
        },
        {
          "ja": "ランチの回転寿司の賑わい",
          "en": "lunch conveyor sushi bustle"
        },
        {
          "ja": "雨夜の寿司屋入口の暖かさ",
          "en": "rainy sushi entrance warmth"
        },
        {
          "ja": "閉店前の寿司屋の静けさ",
          "en": "closing-time sushi stillness"
        },
        {
          "ja": "皿が流れる回転のリズム",
          "en": "plate-belt rhythm"
        },
        {
          "ja": "寿司の仕込み前の静けさ",
          "en": "sushi prep quiet"
        },
        {
          "ja": "酢飯の立つ香り",
          "en": "vinegar rice aroma"
        },
        {
          "ja": "深夜の寿司屋の落ち着き",
          "en": "late-night sushi calm"
        },
        {
          "ja": "木のカウンターの暖かさ",
          "en": "warm wood counter mood"
        },
        {
          "ja": "雨夜の寿司窓灯り",
          "en": "rainy-night sushi window glow"
        },
        {
          "ja": "昼の明るい寿司店光",
          "en": "bright lunchtime sushi light"
        },
        {
          "ja": "家族連れの回転寿司の賑わい",
          "en": "family-dinner sushi bustle"
        },
        {
          "ja": "夕方の回転寿司の暖かさ",
          "en": "evening conveyor sushi warmth"
        },
        {
          "ja": "開店前の仕込み場の冷たさ",
          "en": "morning prep-room coolness"
        }
      ]
    }],
  "settings": [
    {
      "group": "🍶 和食・飲食の細部",
      "items": [
        {
          "ja": "提灯",
          "en": "hanging lanterns"
        },
        {
          "ja": "短冊メニュー",
          "en": "menu strips"
        },
        {
          "ja": "暖簾",
          "en": "noren curtain"
        },
        {
          "ja": "並んだ瓶",
          "en": "bottle-lined counter"
        },
        {
          "ja": "小皿の並び",
          "en": "small dish trays"
        },
        {
          "ja": "雨で湿った玄関マット",
          "en": "rain-wet entry mat"
        },
        {
          "ja": "紙灯りの光",
          "en": "paper lantern glow"
        },
        {
          "ja": "木のテーブル面",
          "en": "wooden table surfaces"
        },
        {
          "ja": "卓上調味料",
          "en": "table condiment set"
        },
        {
          "ja": "片付け途中の食器",
          "en": "half-cleared tableware"
        },
        {
          "ja": "暖簾越しの灯り",
          "en": "noren-lit entry"
        },
        {
          "ja": "積まれた酒瓶",
          "en": "stacked sake bottles"
        },
        {
          "ja": "焼き鳥の煙残り",
          "en": "grilled skewer smoke traces"
        },
        {
          "ja": "雨筋のついた窓",
          "en": "rain-streaked window glass"
        },
        {
          "ja": "畳座布団の寄り",
          "en": "folded seat cushions"
        },
        {
          "ja": "箸立て",
          "en": "counter chopstick canister"
        },
        {
          "ja": "雨に暗い店先の石床",
          "en": "rain-dark storefront stone"
        },
        {
          "ja": "消えかけた提灯の残り灯",
          "en": "dim lantern afterglow"
        }
      ]
    },
    {
      "group": "🔥 鉄板・焼き場の細部",
      "items": [
        {
          "ja": "金属ダクト",
          "en": "metal exhaust ducts"
        },
        {
          "ja": "焼き網の煙",
          "en": "table grill smoke"
        },
        {
          "ja": "炭火の反射",
          "en": "charcoal glow reflections"
        },
        {
          "ja": "鉄板の反射",
          "en": "teppan steel reflections"
        },
        {
          "ja": "食材トレー",
          "en": "counter ingredient trays"
        },
        {
          "ja": "作業灯",
          "en": "chef-side task lights"
        },
        {
          "ja": "冷えた焼き台",
          "en": "cooled grill tops"
        },
        {
          "ja": "ダクトの薄灯り",
          "en": "dim exhaust hood lights"
        },
        {
          "ja": "炎の反射",
          "en": "flame reflections on steel"
        },
        {
          "ja": "赤く焼けた炭床",
          "en": "red-glowing charcoal bed"
        },
        {
          "ja": "埋め込みロースター",
          "en": "tabletop built-in roaster"
        },
        {
          "ja": "吊り下がる排煙フード",
          "en": "hanging exhaust hood"
        },
        {
          "ja": "使い込まれたトング",
          "en": "used grill tongs"
        },
        {
          "ja": "煙を吸うダクト灯",
          "en": "smoke-stained exhaust hood light"
        },
        {
          "ja": "仕込み用トレー",
          "en": "mise-en-place trays"
        },
        {
          "ja": "磨かれた鉄板の艶",
          "en": "polished iron griddle sheen"
        },
        {
          "ja": "床ワイパー",
          "en": "floor squeegee"
        },
        {
          "ja": "油はね防止パネル",
          "en": "oil-splash guard panel"
        },
        {
          "ja": "鉄板の火柱反射",
          "en": "teppan flare reflections"
        }
      ]
    },
    {
      "group": "🍽 カフェ・レストランの細部",
      "items": [
        {
          "ja": "ショーケース",
          "en": "pastry display case"
        },
        {
          "ja": "卓上メニュー",
          "en": "tabletop menu stands"
        },
        {
          "ja": "ペンダントライト",
          "en": "ambient pendant lights"
        },
        {
          "ja": "テーブルクロス反射",
          "en": "tablecloth reflections"
        },
        {
          "ja": "ワイン棚",
          "en": "wine bottle shelves"
        },
        {
          "ja": "積まれた椅子",
          "en": "stacked chairs nearby"
        },
        {
          "ja": "半閉じ看板",
          "en": "half-closed signboard"
        },
        {
          "ja": "雨粒の窓ガラス",
          "en": "rain-wet window glass"
        },
        {
          "ja": "エスプレッソマシンの湯気",
          "en": "espresso machine steam"
        },
        {
          "ja": "パン棚",
          "en": "bread display shelf"
        },
        {
          "ja": "オープンキッチンの受け台",
          "en": "open kitchen pass counter"
        },
        {
          "ja": "ワイングラスの反射",
          "en": "wine glass reflections"
        },
        {
          "ja": "ボックス席の仕切り",
          "en": "booth partition"
        },
        {
          "ja": "街側窓の反射",
          "en": "street-facing window reflections"
        },
        {
          "ja": "卓上キャンドル灯",
          "en": "tabletop candle light"
        },
        {
          "ja": "背面のボトル棚",
          "en": "back bar bottle shelves"
        },
        {
          "ja": "重ねられた閉店椅子",
          "en": "stacked closing chairs"
        },
        {
          "ja": "片付け途中の食器",
          "en": "half-cleared tableware"
        }
      ]
    },
    {
      "group": "🍔 ファストフードの細部",
      "items": [
        {
          "ja": "発光メニューボード",
          "en": "illuminated menu boards"
        },
        {
          "ja": "POSレジカウンター",
          "en": "POS register counter"
        },
        {
          "ja": "トレイ返却台",
          "en": "tray return station"
        },
        {
          "ja": "ドリンクバー機",
          "en": "soda fountain station"
        },
        {
          "ja": "ケチャップディスペンサー台",
          "en": "self-service ketchup station"
        },
        {
          "ja": "ビニールのボックス席",
          "en": "vinyl booth seating"
        },
        {
          "ja": "紙カップとトレイ",
          "en": "paper cup trays"
        },
        {
          "ja": "番号表示モニター",
          "en": "order number display"
        },
        {
          "ja": "朝メニューカード",
          "en": "breakfast menu cards"
        },
        {
          "ja": "コーヒーマシン角",
          "en": "coffee machine corner"
        },
        {
          "ja": "積まれた清掃トレイ",
          "en": "stacked cleaning trays"
        },
        {
          "ja": "拭き跡の残るテーブル",
          "en": "half-wiped table surfaces"
        },
        {
          "ja": "カウンター脇のモップバケツ",
          "en": "mop bucket by counter"
        },
        {
          "ja": "整えられた空トレイの束",
          "en": "clean tray stack"
        },
        {
          "ja": "フライ保温ケースの灯り",
          "en": "fry warmer glow"
        }
      ]
    },
    {
      "group": "🍛 カレー店の細部",
      "items": [
        {
          "ja": "券売機",
          "en": "ticket vending machine"
        },
        {
          "ja": "カレー鍋の湯気",
          "en": "curry pot steam"
        },
        {
          "ja": "福神漬け・薬味台",
          "en": "pickle condiment station"
        },
        {
          "ja": "金属の水差し",
          "en": "metal water pitcher"
        },
        {
          "ja": "スプーン立て",
          "en": "counter spoon canister"
        },
        {
          "ja": "ステンレスの受け台",
          "en": "stainless curry pass counter"
        },
        {
          "ja": "ラミネートのカレーメニュー",
          "en": "laminated curry menu"
        },
        {
          "ja": "スパイス告知ポスター",
          "en": "spice poster wall"
        },
        {
          "ja": "カレー皿の乗ったトレイ",
          "en": "tray with curry plates"
        },
        {
          "ja": "炊飯器のある隅",
          "en": "rice warmer corner"
        },
        {
          "ja": "曇った窓ガラス",
          "en": "steam-fogged window"
        },
        {
          "ja": "卓上調味料セット",
          "en": "counter condiment set"
        },
        {
          "ja": "吊り下げられた注文票",
          "en": "hanging order slips"
        },
        {
          "ja": "積まれたカレートレイ",
          "en": "stacked curry trays"
        },
        {
          "ja": "拭き上げられたステンレスカウンター",
          "en": "wiped stainless counter"
        },
        {
          "ja": "薄く残るカレー看板灯",
          "en": "dim curry sign glow"
        }
      ]
    },
    {
      "group": "🍝 イタリアンレストランの細部",
      "items": [
        {
          "ja": "黒板のパスタメニュー",
          "en": "chalkboard pasta menu"
        },
        {
          "ja": "パンかご",
          "en": "bread basket set"
        },
        {
          "ja": "オリーブオイル差し",
          "en": "olive oil cruet"
        },
        {
          "ja": "吊り下げワイングラス",
          "en": "hanging wine glasses"
        },
        {
          "ja": "磨かれたカトラリー",
          "en": "polished cutlery set"
        },
        {
          "ja": "白いテーブルクロスの整列",
          "en": "white tablecloth setting"
        },
        {
          "ja": "給仕用トレー",
          "en": "table service tray"
        },
        {
          "ja": "折られた白いナプキン",
          "en": "folded white napkin"
        },
        {
          "ja": "片付け途中のパスタ皿",
          "en": "half-cleared pasta plates"
        }
      ]
    },
    {
      "group": "🥤 カフェテリア・フードコートの細部",
      "items": [
        {
          "ja": "トレイ返却台",
          "en": "tray return station"
        },
        {
          "ja": "番号呼び出しモニター",
          "en": "numbered pickup display"
        },
        {
          "ja": "共用の樹脂テーブル",
          "en": "shared plastic tables"
        },
        {
          "ja": "セルフドリンク機",
          "en": "self-serve drink fountain"
        },
        {
          "ja": "発光メニューパネル",
          "en": "menu light panels"
        },
        {
          "ja": "薬味アイランド",
          "en": "condiment island"
        },
        {
          "ja": "椅子の下の買い物袋",
          "en": "shopping bags under chairs"
        },
        {
          "ja": "清掃注意の床サイン",
          "en": "floor cleaning caution sign"
        },
        {
          "ja": "フードコートの仕切りプランター",
          "en": "food court planter divider"
        },
        {
          "ja": "モール天窓の反射",
          "en": "mall skylight reflections"
        },
        {
          "ja": "積まれた空トレイ",
          "en": "stacked empty trays"
        },
        {
          "ja": "減光したメニュー灯",
          "en": "dimmed menu light panels"
        }
      ]
    },

    {
      "group": "🥪 ベーカリー・パン屋の細部",
      "items": [
        {
          "ja": "焼きたてパン籠",
          "en": "fresh bread baskets"
        },
        {
          "ja": "値札プレート",
          "en": "bakery price placards"
        },
        {
          "ja": "パン用トング台",
          "en": "pastry tongs station"
        },
        {
          "ja": "窓際のペストリー棚",
          "en": "window pastry display"
        },
        {
          "ja": "トレイ返却棚",
          "en": "tray return shelf"
        },
        {
          "ja": "紙カップの束",
          "en": "coffee cup stack"
        },
        {
          "ja": "雨筋のついたパン屋窓",
          "en": "rain-streaked bakery window"
        },
        {
          "ja": "入口脇の傘立て",
          "en": "umbrella stand by door"
        },
        {
          "ja": "暖かなペンダント灯",
          "en": "warm pendant lights"
        },
        {
          "ja": "売り切れた棚の隙間",
          "en": "half-empty bread shelves"
        },
        {
          "ja": "値引きシール付きトレイ",
          "en": "sale sticker trays"
        },
        {
          "ja": "減光した店先看板灯",
          "en": "dim storefront sign glow"
        },
        {
          "ja": "奥厨房のオーブン灯",
          "en": "oven glow from back kitchen"
        },
        {
          "ja": "発酵トレー棚",
          "en": "proofing tray racks"
        },
        {
          "ja": "粉の残る仕込み台",
          "en": "flour-dusted prep counter"
        },
        {
          "ja": "積まれた空のパン焼きトレイ",
          "en": "stacked empty bread trays"
        },
        {
          "ja": "拭き上げられたガラスケース",
          "en": "wiped glass display case"
        },
        {
          "ja": "奥カウンター脇のモップバケツ",
          "en": "mop bucket by back counter"
        }
      ]
    },
    {
      "group": "🍜 ラーメン・麺類店の細部",
      "items": [
        {
          "ja": "券売機",
          "en": "ticket vending machine"
        },
        {
          "ja": "スープ湯気の雲",
          "en": "broth steam cloud"
        },
        {
          "ja": "卓上調味料立て",
          "en": "counter seasoning caddy"
        },
        {
          "ja": "箸ディスペンサー",
          "en": "chopstick dispenser"
        },
        {
          "ja": "水差しの束",
          "en": "water pitcher stack"
        },
        {
          "ja": "麺店メニュー札",
          "en": "noodle menu placards"
        },
        {
          "ja": "曇った麺店窓",
          "en": "fogged noodle-shop window"
        },
        {
          "ja": "麺店の暖簾",
          "en": "hanging noren at noodle shop"
        },
        {
          "ja": "奥厨房の鍋湯気",
          "en": "back-kitchen pot steam"
        },
        {
          "ja": "積まれた丼の水切り棚",
          "en": "stacked bowls drying rack"
        },
        {
          "ja": "拭き上げられたスープカウンター",
          "en": "wiped broth counter"
        },
        {
          "ja": "ラストオーダー札",
          "en": "last-order signboard"
        }
      ]
    },
    {
      "group": "🥟 中華料理店の細部",
      "items": [
        {
          "ja": "蒸籠ワゴン",
          "en": "bamboo steamer cart"
        },
        {
          "ja": "回転卓",
          "en": "lazy susan dining table"
        },
        {
          "ja": "赤提灯飾り",
          "en": "red lantern decor"
        },
        {
          "ja": "壁の短冊メニュー",
          "en": "vertical chinese menu strips"
        },
        {
          "ja": "卓上醤油酢セット",
          "en": "soy-vinegar condiment set"
        },
        {
          "ja": "湯気の立つ点心籠",
          "en": "steaming dim sum baskets"
        },
        {
          "ja": "赤い背もたれ椅子",
          "en": "red-back dining chairs"
        },
        {
          "ja": "円卓クロス",
          "en": "banquet round-table cloth"
        },
        {
          "ja": "湯気で曇る窓ガラス",
          "en": "steam-fogged chinese window"
        },
        {
          "ja": "片付け中の皿ワゴン",
          "en": "plate bus cart"
        },
        {
          "ja": "閉店前の減光看板",
          "en": "dimmed chinese sign light"
        },
        {
          "ja": "炒め場の炎反射",
          "en": "wok-flame reflections"
        }
      ]
    },
    {
      "group": "🐙 たこ焼き店・お好み焼き店の細部",
      "items": [
        {
          "ja": "たこ焼き鉄板",
          "en": "takoyaki griddle plate"
        },
        {
          "ja": "ソース刷毛トレー",
          "en": "sauce brush tray"
        },
        {
          "ja": "紙舟トレイ",
          "en": "paper boat trays"
        },
        {
          "ja": "お好み焼き用ヘラ",
          "en": "okonomiyaki grill spatulas"
        },
        {
          "ja": "ソースボトル立て",
          "en": "sauce bottle caddy"
        },
        {
          "ja": "雨で濡れた店先ガラス",
          "en": "rain-wet storefront glass"
        },
        {
          "ja": "卓上鉄板プレート",
          "en": "tabletop teppan plates"
        },
        {
          "ja": "積まれたプラコップ",
          "en": "stacked plastic water cups"
        },
        {
          "ja": "手書きメニュー札",
          "en": "handwritten menu placards"
        },
        {
          "ja": "たこ身入り生地トレー",
          "en": "octopus batter trays"
        },
        {
          "ja": "半分掃除された鉄板面",
          "en": "half-cleaned griddle surface"
        },
        {
          "ja": "閉店時に折った暖簾",
          "en": "folded noren at close"
        },
        {
          "ja": "横から差す紙灯り",
          "en": "paper lantern side glow"
        },
        {
          "ja": "重ねた紙舟の束",
          "en": "stacked paper boat trays"
        },
        {
          "ja": "たこ焼きピック置き",
          "en": "takoyaki pick station"
        },
        {
          "ja": "磨いた鉄板面",
          "en": "polished teppan surface"
        },
        {
          "ja": "生地仕込みボウル",
          "en": "batter prep bowls"
        },
        {
          "ja": "入口に掛かる暖簾",
          "en": "hanging noren at entrance"
        }
      ]
    }
  

    ,{
      "group": "🍰 スイーツ店・デザートショップの細部",
      "items": [
        {
          "ja": "発光するケーキケース",
          "en": "illuminated cake display case"
        },
        {
          "ja": "ペストリートング台",
          "en": "pastry tongs tray"
        },
        {
          "ja": "マカロン塔のディスプレイ",
          "en": "macaron tower display"
        },
        {
          "ja": "ケーキ箱の束",
          "en": "cake box stack"
        },
        {
          "ja": "ケーキの値札プレート",
          "en": "price placards on cakes"
        },
        {
          "ja": "窓際のデザートメニューボード",
          "en": "window-side dessert menu board"
        },
        {
          "ja": "雨筋のついたパティスリーガラス",
          "en": "rain-streaked patisserie glass"
        },
        {
          "ja": "リボン付きケーキ箱",
          "en": "ribboned cake boxes"
        },
        {
          "ja": "減ったデザート棚",
          "en": "half-empty dessert shelves"
        },
        {
          "ja": "拭き上げられたガラスショーケース",
          "en": "wiped glass showcase"
        },
        {
          "ja": "奥カウンターの仕込みトレー",
          "en": "back-counter pastry prep trays"
        },
        {
          "ja": "減光したデザート看板灯",
          "en": "dim storefront dessert sign"
        }
      ]
    }
  
  
    ,{
      "group": "🍨 アイスクリーム店・ジェラート店の細部",
      "items": [
        {
          "ja": "発光ジェラートケース",
          "en": "illuminated gelato display case"
        },
        {
          "ja": "金属スクープ筒",
          "en": "metal scoop canister"
        },
        {
          "ja": "コーンスタンド",
          "en": "cone display stand"
        },
        {
          "ja": "フレーバー札",
          "en": "flavor placards"
        },
        {
          "ja": "冷たいガラス天板",
          "en": "chilled glass countertop"
        },
        {
          "ja": "テイクアウトカップの束",
          "en": "stacked takeaway dessert cups"
        },
        {
          "ja": "店先のミニ黒板",
          "en": "mini sidewalk chalkboard"
        },
        {
          "ja": "水滴のついたケースガラス",
          "en": "condensation on display glass"
        },
        {
          "ja": "テラスの丸テーブル",
          "en": "terrace round table"
        },
        {
          "ja": "半分空いたフレーバートレイ",
          "en": "half-emptied flavor trays"
        },
        {
          "ja": "減光したアイス店看板灯",
          "en": "dim ice-shop sign glow"
        },
        {
          "ja": "拭き上げられた冷ケース縁",
          "en": "wiped freezer-case edge"
        }
      ]
    }
    ,{
      "group": "🍧 かき氷・甘味処の細部",
      "items": [
        {
          "ja": "ガラスのかき氷鉢",
          "en": "glass kakigori bowl"
        },
        {
          "ja": "風鈴",
          "en": "wind chime"
        },
        {
          "ja": "庭の青葉",
          "en": "garden greenery"
        },
        {
          "ja": "氷旗",
          "en": "striped kakigori banner"
        },
        {
          "ja": "器の結露",
          "en": "condensation on glass dessert bowl"
        },
        {
          "ja": "木の縁台",
          "en": "wooden engawa bench"
        },
        {
          "ja": "すだれ越しの光",
          "en": "bamboo-blind light"
        },
        {
          "ja": "濡れた庭石",
          "en": "rain-wet garden stones"
        },
        {
          "ja": "半開きのすだれ",
          "en": "half-open bamboo screen"
        },
        {
          "ja": "シロップ瓶",
          "en": "syrup bottle set"
        },
        {
          "ja": "丸いうちわ",
          "en": "handheld round fan"
        },
        {
          "ja": "庭側の開けた窓",
          "en": "open garden-side window"
        }
      ]
    }
  
  
    ,{
      "group": "🍣 寿司屋・回転寿司の細部",
      "items": [
        {
          "ja": "寿司ケース",
          "en": "sushi display case"
        },
        {
          "ja": "木の寿司カウンター",
          "en": "wooden sushi counter"
        },
        {
          "ja": "湯呑みセット",
          "en": "tea cup set"
        },
        {
          "ja": "回転レーン",
          "en": "conveyor belt rail"
        },
        {
          "ja": "積まれた寿司皿",
          "en": "stacked sushi plates"
        },
        {
          "ja": "注文タッチパネル",
          "en": "order touch panel"
        },
        {
          "ja": "入口暖簾",
          "en": "noren at sushi entrance"
        },
        {
          "ja": "濡れた傘立て",
          "en": "wet umbrella stand"
        },
        {
          "ja": "雨筋の寿司屋窓",
          "en": "rain-streaked sushi window"
        },
        {
          "ja": "ラストオーダー札",
          "en": "last-order placard"
        },
        {
          "ja": "減光した寿司看板灯",
          "en": "half-dim sushi sign glow"
        },
        {
          "ja": "拭き上げられた寿司カウンター",
          "en": "wiped sushi counter sheen"
        },
        {
          "ja": "板前の仕込み台",
          "en": "itamae prep board"
        },
        {
          "ja": "酢飯桶のある隅",
          "en": "rice tub corner"
        },
        {
          "ja": "開店前に巻かれた暖簾",
          "en": "rolled noren before opening"
        },
        {
          "ja": "卓上醤油セット",
          "en": "soy sauce set"
        }
      ]
    }]
},
{
  "id": "leisure_relax_collection",
  "title": "♨ 娯楽・休養・レジャー施設特化コレクション",
  "subtitle": "スパ・温浴施設、リゾートプール・ウォーターラウンジ、ゲームセンター・アミューズメント、カラオケ・個室娯楽、映画館・シアター空間など、遊ぶ・休む・浸かる・くつろぐを光、湯気、水面、ネオン、静けさで多層に噛ませる、半露天・岩盤浴まで抱いた屋内レジャーと休養空間の特化コレクション",
  "complete": [
    {
      "group": "♨ スパ・温浴施設",
      "items": [
        {
          "id": "leisure_spa_steam_night",
          "ja": "湯気が満ちる夜のスパ",
          "links": {
            "base": [
              "spa bath area"
            ],
            "customize": [
              "night spa stillness",
              "steam-filled spa air",
              "warm indirect lighting"
            ],
            "settings": [
              "rising spa steam",
              "wet stone floor",
              "glowing spa bath edge"
            ]
          }
        },
        {
          "id": "leisure_spa_morning_lounge",
          "ja": "朝の静かな温浴ラウンジ",
          "links": {
            "base": [
              "spa lounge"
            ],
            "customize": [
              "morning spa calm",
              "soft spa daylight",
              "relaxed rest atmosphere"
            ],
            "settings": [
              "recliner lounge chairs",
              "folded towels stack",
              "wood slat wall"
            ]
          }
        },
        {
          "id": "leisure_spa_indirect_rest",
          "ja": "間接照明のスパ休憩席",
          "links": {
            "base": [
              "spa rest seating"
            ],
            "customize": [
              "indirect spa lighting",
              "quiet rest atmosphere",
              "warm wood-and-stone ambience"
            ],
            "settings": [
              "indirect wall lighting",
              "recliner lounge chairs",
              "glass water station"
            ]
          }
        },
        {
          "id": "leisure_spa_rainy_indoor",
          "ja": "雨の日の屋内スパ",
          "links": {
            "base": [
              "indoor spa corridor"
            ],
            "customize": [
              "rainy-day spa hush",
              "humid spa warmth",
              "echoing water ambience"
            ],
            "settings": [
              "rain-streaked glass panel",
              "wet stone floor",
              "spa signage lamp"
            ]
          }
        },
        {
          "id": "leisure_spa_stone_walkway",
          "ja": "石床が濡れた温浴通路",
          "links": {
            "base": [
              "stone floor spa corridor"
            ],
            "customize": [
              "steam-filled spa air",
              "quiet spa walkway",
              "water-sound ambience"
            ],
            "settings": [
              "wet stone floor",
              "sauna door",
              "small floor drain channel"
            ]
          }
        },
        {
          "id": "leisure_spa_deep_night",
          "ja": "深夜の静まり返ったスパ空間",
          "links": {
            "base": [
              "spa lounge"
            ],
            "customize": [
              "deep-night spa silence",
              "warm indirect lighting",
              "relaxed rest atmosphere"
            ],
            "settings": [
              "dim spa pendant light",
              "folded towels stack",
              "glass water station"
            ]
          }
        },
        {
          "id": "leisure_spa_semiopen_green",
          "ja": "緑がのぞく半露天スパテラス",
          "links": {
            "base": [
              "semi-open spa terrace"
            ],
            "customize": [
              "green spa terrace breeze",
              "steam-filled spa air",
              "warm wood-and-stone ambience"
            ],
            "settings": [
              "bamboo screen shadow",
              "open bath edge light",
              "rising spa steam"
            ]
          }
        },
        {
          "id": "leisure_spa_post_sauna_cold",
          "ja": "サウナ後の水風呂まわり",
          "links": {
            "base": [
              "cold plunge corner"
            ],
            "customize": [
              "post-sauna cool stillness",
              "humid spa warmth",
              "water-sound ambience"
            ],
            "settings": [
              "cold plunge rim light",
              "sauna door",
              "folded sauna mat"
            ]
          }
        },
        {
          "id": "leisure_spa_hotstone_quiet",
          "ja": "岩盤浴の静かな休憩空間",
          "links": {
            "base": [
              "hot-stone lounge"
            ],
            "customize": [
              "heated stone calm",
              "quiet rest atmosphere",
              "warm indirect lighting"
            ],
            "settings": [
              "warm stone bed glow",
              "folded towels stack",
              "dim spa pendant light"
            ]
          }
        },
        {
          "id": "leisure_spa_late_sauna_walk",
          "ja": "深夜のサウナ前通路",
          "links": {
            "base": [
              "sauna-front walkway"
            ],
            "customize": [
              "deep-night spa silence",
              "quiet spa walkway",
              "humid spa warmth"
            ],
            "settings": [
              "sauna door",
              "small floor drain channel",
              "dim spa pendant light"
            ]
          }
        },
        {
          "id": "leisure_spa_morning_vanity",
          "ja": "朝の洗面・更衣ラウンジ",
          "links": {
            "base": [
              "spa vanity lounge"
            ],
            "customize": [
              "morning spa calm",
              "soft spa daylight",
              "relaxed rest atmosphere"
            ],
            "settings": [
              "vanity mirror light",
              "amenity basket",
              "wood slat wall"
            ]
          }
        },
        {
          "id": "leisure_spa_rain_dim_lounge",
          "ja": "雨音が響く半暗がりの温浴ラウンジ",
          "links": {
            "base": [
              "spa lounge"
            ],
            "customize": [
              "rainy-day spa hush",
              "echoing water ambience",
              "warm indirect lighting"
            ],
            "settings": [
              "rain-streaked glass panel",
              "dim spa pendant light",
              "wood slat wall"
            ]
          }
        }
      ]
    },
    {
      "group": "🏝 リゾートプール・ウォーターラウンジ",
      "items": [
        {
          "id": "leisure_pool_day",
          "ja": "昼のリゾートプール",
          "links": {
            "base": [
              "resort poolside"
            ],
            "customize": [
              "bright pool daylight",
              "water-reflection shimmer",
              "tropical humid breeze"
            ],
            "settings": [
              "deck chairs",
              "poolside parasol",
              "pool water lights"
            ]
          }
        },
        {
          "id": "leisure_pool_sunset_infinity",
          "ja": "夕暮れのインフィニティプール",
          "links": {
            "base": [
              "infinity pool edge"
            ],
            "customize": [
              "sunset pool glow",
              "water-reflection shimmer",
              "green resort coolness"
            ],
            "settings": [
              "infinity edge glow",
              "glass handrail",
              "tropical plants"
            ]
          }
        },
        {
          "id": "leisure_pool_night_lightup",
          "ja": "夜のライトアッププール",
          "links": {
            "base": [
              "pool lounge seating"
            ],
            "customize": [
              "night pool lighting",
              "tropical humid breeze",
              "quiet night resort mood"
            ],
            "settings": [
              "pool water lights",
              "deck chairs",
              "rolled pool towels"
            ]
          }
        },
        {
          "id": "leisure_pool_green_side",
          "ja": "緑に囲まれたプールサイド",
          "links": {
            "base": [
              "green pool deck"
            ],
            "customize": [
              "green resort coolness",
              "bright pool daylight",
              "soft tropical breeze"
            ],
            "settings": [
              "tropical plants",
              "wet wooden deck",
              "poolside side table"
            ]
          }
        },
        {
          "id": "leisure_pool_after_rain",
          "ja": "雨上がりの静かなプールラウンジ",
          "links": {
            "base": [
              "after-rain pool deck"
            ],
            "customize": [
              "after-rain pool calm",
              "water-reflection shimmer",
              "quiet night resort mood"
            ],
            "settings": [
              "wet wooden deck",
              "glass handrail",
              "rolled pool towels"
            ]
          }
        },
        {
          "id": "leisure_pool_deckchairs",
          "ja": "南国風のデッキチェア席",
          "links": {
            "base": [
              "deck chair row"
            ],
            "customize": [
              "tropical humid breeze",
              "bright pool daylight",
              "green resort coolness"
            ],
            "settings": [
              "deck chairs",
              "poolside parasol",
              "tropical plants"
            ]
          }
        },
        {
          "id": "leisure_pool_green_morning",
          "ja": "緑陰が映る朝のプールサイド",
          "links": {
            "base": [
              "green pool deck"
            ],
            "customize": [
              "pool-morning calm",
              "green resort coolness",
              "soft tropical breeze"
            ],
            "settings": [
              "tropical plants",
              "deck chairs",
              "poolside side table"
            ]
          }
        },
        {
          "id": "leisure_pool_bar_night",
          "ja": "夜のバーカウンターが光るプールラウンジ",
          "links": {
            "base": [
              "pool bar lounge seating"
            ],
            "customize": [
              "night pool lighting",
              "pool-bar night warmth",
              "quiet night resort mood"
            ],
            "settings": [
              "glowing pool bar shelf",
              "pool water lights",
              "deck chairs"
            ]
          }
        },
        {
          "id": "leisure_pool_cabana_day",
          "ja": "白布カバナのある昼のプールデッキ",
          "links": {
            "base": [
              "shaded cabana deck"
            ],
            "customize": [
              "bright pool daylight",
              "tropical green shade",
              "soft tropical breeze"
            ],
            "settings": [
              "white cabana curtains",
              "deck chairs",
              "tropical plants"
            ]
          }
        },
        {
          "id": "leisure_pool_afterrain_infinity",
          "ja": "雨上がりのインフィニティデッキ",
          "links": {
            "base": [
              "after-rain infinity edge"
            ],
            "customize": [
              "after-rain pool calm",
              "after-rain tropical clarity",
              "water-reflection shimmer"
            ],
            "settings": [
              "infinity edge glow",
              "wet wooden deck",
              "glass handrail"
            ]
          }
        },
        {
          "id": "leisure_pool_deepnight_waterlight",
          "ja": "水面ライトが揺れる深夜のプール",
          "links": {
            "base": [
              "deep-night pool deck"
            ],
            "customize": [
              "deep-night pool hush",
              "blue waterlight flicker",
              "quiet night resort mood"
            ],
            "settings": [
              "pool water lights",
              "submerged step lights",
              "wet wooden deck"
            ]
          }
        },
        {
          "id": "leisure_pool_early_empty_decks",
          "ja": "無人に近い朝のデッキチェア列",
          "links": {
            "base": [
              "deck chair row"
            ],
            "customize": [
              "early poolside stillness",
              "bright pool daylight",
              "green resort coolness"
            ],
            "settings": [
              "deck chairs",
              "rolled pool towels",
              "poolside parasol"
            ]
          }
        }
      ]
    },
    {
      "group": "🎮 ゲームセンター・アミューズメント",
      "items": [
        {
          "id": "leisure_arcade_neon_night",
          "ja": "ネオンが映る夜のゲームセンター",
          "links": {
            "base": [
              "arcade floor"
            ],
            "customize": [
              "neon arcade glow",
              "crowded amusement noise",
              "flashing cabinet light"
            ],
            "settings": [
              "neon floor reflection",
              "crane machine row",
              "prize shelf wall"
            ]
          }
        },
        {
          "id": "leisure_arcade_crane_aisle",
          "ja": "クレーンゲームが並ぶアーケード",
          "links": {
            "base": [
              "crane game aisle"
            ],
            "customize": [
              "crowded amusement noise",
              "bright arcade ambience",
              "holiday arcade bustle"
            ],
            "settings": [
              "crane machine row",
              "prize shelf wall",
              "ticket dispenser"
            ]
          }
        },
        {
          "id": "leisure_arcade_rhythm_corner",
          "ja": "音ゲー筐体が光る一角",
          "links": {
            "base": [
              "rhythm game corner"
            ],
            "customize": [
              "rhythm-game bass pulse",
              "flashing cabinet light",
              "neon arcade glow"
            ],
            "settings": [
              "rhythm game cabinets",
              "neon floor reflection",
              "plastic stools"
            ]
          }
        },
        {
          "id": "leisure_arcade_late_quiet",
          "ja": "深夜の静かなゲームフロア",
          "links": {
            "base": [
              "late-night arcade aisle"
            ],
            "customize": [
              "late-night arcade hush",
              "neon arcade glow",
              "empty arcade stillness"
            ],
            "settings": [
              "coin exchange machine",
              "arcade carpet pattern",
              "token counter"
            ]
          }
        },
        {
          "id": "leisure_arcade_holiday_busy",
          "ja": "休日で混むアミューズメントフロア",
          "links": {
            "base": [
              "amusement floor"
            ],
            "customize": [
              "holiday arcade bustle",
              "crowded amusement noise",
              "bright arcade ambience"
            ],
            "settings": [
              "ticket dispenser",
              "token counter",
              "prize shelf wall"
            ]
          }
        },
        {
          "id": "leisure_arcade_medal_dim",
          "ja": "メダルゲームが並ぶ薄暗い一角",
          "links": {
            "base": [
              "medal machine section"
            ],
            "customize": [
              "medal corner dimness",
              "late-night arcade hush",
              "flashing cabinet light"
            ],
            "settings": [
              "medal machine lights",
              "coin exchange machine",
              "arcade carpet pattern"
            ]
          }
        }
      ]
    },
    {
      "group": "🎤 カラオケ・個室娯楽",
      "items": [
        {
          "id": "leisure_karaoke_deep_night",
          "ja": "ネオンが漏れる深夜のカラオケ室",
          "links": {
            "base": [
              "karaoke private room"
            ],
            "customize": [
              "deep-night karaoke glow",
              "muffled music leakage",
              "near-closing room stillness"
            ],
            "settings": [
              "karaoke monitor glow",
              "colored ceiling lights",
              "wireless microphones"
            ]
          }
        },
        {
          "id": "leisure_karaoke_party_room",
          "ja": "パーティールームのカラオケ個室",
          "links": {
            "base": [
              "party karaoke room"
            ],
            "customize": [
              "party-room chatter",
              "bright room excitement",
              "drink-room bustle"
            ],
            "settings": [
              "sofa booth seating",
              "tambourine basket",
              "touchscreen song tablet"
            ]
          }
        },
        {
          "id": "leisure_karaoke_quiet_hallway",
          "ja": "静かな廊下のあるカラオケ店",
          "links": {
            "base": [
              "karaoke hallway"
            ],
            "customize": [
              "quiet hallway hush",
              "muffled music leakage",
              "deep-night karaoke glow"
            ],
            "settings": [
              "hallway door numbers",
              "reception counter",
              "colored ceiling lights"
            ]
          }
        },
        {
          "id": "leisure_karaoke_rain_reception",
          "ja": "雨夜の受付前カラオケフロア",
          "links": {
            "base": [
              "front desk karaoke floor"
            ],
            "customize": [
              "rainy-night reception light",
              "drink-room bustle",
              "neon lobby warmth"
            ],
            "settings": [
              "reception counter",
              "wet umbrella stand",
              "drink bar machine"
            ]
          }
        },
        {
          "id": "leisure_karaoke_near_closing",
          "ja": "閉店前の静かなカラオケ個室",
          "links": {
            "base": [
              "closing-time karaoke room"
            ],
            "customize": [
              "near-closing room stillness",
              "deep-night karaoke glow",
              "quiet hallway hush"
            ],
            "settings": [
              "karaoke monitor glow",
              "sofa booth seating",
              "wireless microphones"
            ]
          }
        },
        {
          "id": "leisure_karaoke_drinkbar",
          "ja": "ドリンクバー前が混むカラオケ店",
          "links": {
            "base": [
              "drink bar corner"
            ],
            "customize": [
              "drink-bar bustle",
              "party-room chatter",
              "neon lobby warmth"
            ],
            "settings": [
              "drink bar machine",
              "plastic cup stack",
              "wet umbrella stand"
            ]
          }
        }
      ]
    },
    {
      "group": "🎬 映画館・シアター空間",
      "items": [
        {
          "id": "leisure_cinema_pre_show",
          "ja": "開演前の静かな映画館シート列",
          "links": {
            "base": [
              "theater seating rows"
            ],
            "customize": [
              "pre-show theater hush",
              "soft theater darkness",
              "row-seating anticipation"
            ],
            "settings": [
              "theater seat rows",
              "aisle step lights",
              "cup holder armrests"
            ]
          }
        },
        {
          "id": "leisure_cinema_popcorn_corridor",
          "ja": "ポップコーンの匂いが残るシアター通路",
          "links": {
            "base": [
              "theater aisle corridor"
            ],
            "customize": [
              "popcorn-scented air",
              "trailer-light flicker",
              "quiet corridor hush"
            ],
            "settings": [
              "concession menu board",
              "popcorn warmer case",
              "poster lightboxes"
            ]
          }
        },
        {
          "id": "leisure_cinema_after_screening",
          "ja": "上映後の静かな映画館",
          "links": {
            "base": [
              "cinema lobby"
            ],
            "customize": [
              "post-screening stillness",
              "lobby glow at night",
              "quiet corridor hush"
            ],
            "settings": [
              "poster lightboxes",
              "torn ticket stub bin",
              "velvet queue ropes"
            ]
          }
        },
        {
          "id": "leisure_cinema_trailer_dark",
          "ja": "予告編が流れる暗いシアター",
          "links": {
            "base": [
              "trailer-lit theater rows"
            ],
            "customize": [
              "trailer-light flicker",
              "soft theater darkness",
              "pre-show theater hush"
            ],
            "settings": [
              "theater seat rows",
              "aisle step lights",
              "projection haze beam"
            ]
          }
        },
        {
          "id": "leisure_cinema_night_lobby",
          "ja": "夜の映画館ロビー",
          "links": {
            "base": [
              "night cinema lobby"
            ],
            "customize": [
              "lobby glow at night",
              "popcorn-scented air",
              "after-show customer flow"
            ],
            "settings": [
              "ticket kiosk",
              "concession menu board",
              "poster lightboxes"
            ]
          }
        },
        {
          "id": "leisure_cinema_rain_entrance",
          "ja": "雨の日のシネマエントランス",
          "links": {
            "base": [
              "cinema entrance ticket gate"
            ],
            "customize": [
              "rainy entrance bustle",
              "lobby glow at night",
              "after-show customer flow"
            ],
            "settings": [
              "wet entrance mat",
              "ticket kiosk",
              "velvet queue ropes"
            ]
          }
        }
      ]
    }
  ],
  "base": [
    {
      "group": "♨ 温浴エリア・ラウンジ",
      "items": [
        {
          "ja": "スパ浴槽まわり",
          "en": "spa bath area"
        },
        {
          "ja": "温浴ラウンジ",
          "en": "spa lounge"
        },
        {
          "ja": "スパ休憩席",
          "en": "spa rest seating"
        },
        {
          "ja": "屋内スパ通路",
          "en": "indoor spa corridor"
        },
        {
          "ja": "石床の温浴通路",
          "en": "stone floor spa corridor"
        },
        {
          "ja": "サウナ前通路",
          "en": "sauna-front walkway"
        },
        {
          "ja": "水風呂まわり",
          "en": "cold plunge corner"
        },
        {
          "ja": "半露天スパテラス",
          "en": "semi-open spa terrace"
        },
        {
          "ja": "岩盤浴ラウンジ",
          "en": "hot-stone lounge"
        },
        {
          "ja": "洗面・更衣ラウンジ",
          "en": "spa vanity lounge"
        }
      ]
    },
    {
      "group": "🏝 プール・デッキの場所",
      "items": [
        {
          "ja": "リゾートプールサイド",
          "en": "resort poolside"
        },
        {
          "ja": "インフィニティプール縁",
          "en": "infinity pool edge"
        },
        {
          "ja": "プールラウンジ席",
          "en": "pool lounge seating"
        },
        {
          "ja": "緑に囲まれたプールデッキ",
          "en": "green pool deck"
        },
        {
          "ja": "雨上がりのプールデッキ",
          "en": "after-rain pool deck"
        },
        {
          "ja": "デッキチェア列",
          "en": "deck chair row"
        },
        {
          "ja": "プールバーラウンジ席",
          "en": "pool bar lounge seating"
        },
        {
          "ja": "日除けカバナ付きデッキ",
          "en": "shaded cabana deck"
        },
        {
          "ja": "雨上がりのインフィニティ縁",
          "en": "after-rain infinity edge"
        },
        {
          "ja": "深夜のプールデッキ",
          "en": "deep-night pool deck"
        }
      ]
    },
    {
      "group": "🎮 ゲーム機フロアの場所",
      "items": [
        {
          "ja": "ゲームセンターフロア",
          "en": "arcade floor"
        },
        {
          "ja": "クレーンゲーム通路",
          "en": "crane game aisle"
        },
        {
          "ja": "音ゲーコーナー",
          "en": "rhythm game corner"
        },
        {
          "ja": "深夜のアーケード通路",
          "en": "late-night arcade aisle"
        },
        {
          "ja": "大型アミューズメントフロア",
          "en": "amusement floor"
        },
        {
          "ja": "メダルゲーム一角",
          "en": "medal machine section"
        }
      ]
    },
    {
      "group": "🎤 個室・受付まわり",
      "items": [
        {
          "ja": "カラオケ個室",
          "en": "karaoke private room"
        },
        {
          "ja": "パーティーカラオケルーム",
          "en": "party karaoke room"
        },
        {
          "ja": "カラオケ廊下",
          "en": "karaoke hallway"
        },
        {
          "ja": "受付前カラオケフロア",
          "en": "front desk karaoke floor"
        },
        {
          "ja": "閉店前のカラオケ個室",
          "en": "closing-time karaoke room"
        },
        {
          "ja": "ドリンクバーコーナー",
          "en": "drink bar corner"
        }
      ]
    },
    {
      "group": "🎬 シアター・ロビーの場所",
      "items": [
        {
          "ja": "映画館シート列",
          "en": "theater seating rows"
        },
        {
          "ja": "シアター通路",
          "en": "theater aisle corridor"
        },
        {
          "ja": "映画館ロビー",
          "en": "cinema lobby"
        },
        {
          "ja": "予告編が流れるシアター席",
          "en": "trailer-lit theater rows"
        },
        {
          "ja": "夜の映画館ロビー",
          "en": "night cinema lobby"
        },
        {
          "ja": "シネマ入口ゲート",
          "en": "cinema entrance ticket gate"
        }
      ]
    }
  ],
  "customize": [
    {
      "group": "♨ 湯気・休養空気",
      "items": [
        {
          "ja": "夜のスパの静けさ",
          "en": "night spa stillness"
        },
        {
          "ja": "湯気の満ちるスパ空気",
          "en": "steam-filled spa air"
        },
        {
          "ja": "暖かな間接照明",
          "en": "warm indirect lighting"
        },
        {
          "ja": "朝のスパの静けさ",
          "en": "morning spa calm"
        },
        {
          "ja": "柔らかなスパ昼光",
          "en": "soft spa daylight"
        },
        {
          "ja": "休養ラウンジの落ち着き",
          "en": "relaxed rest atmosphere"
        },
        {
          "ja": "静かな休憩席の空気",
          "en": "quiet rest atmosphere"
        },
        {
          "ja": "木と石のぬくもり",
          "en": "warm wood-and-stone ambience"
        },
        {
          "ja": "雨の日のスパの静けさ",
          "en": "rainy-day spa hush"
        },
        {
          "ja": "湿った温浴の暖かさ",
          "en": "humid spa warmth"
        },
        {
          "ja": "水音が響く静けさ",
          "en": "echoing water ambience"
        },
        {
          "ja": "静かな温浴通路",
          "en": "quiet spa walkway"
        },
        {
          "ja": "深夜のスパの静まり",
          "en": "deep-night spa silence"
        },
        {
          "ja": "緑が抜けるスパ風",
          "en": "green spa terrace breeze"
        },
        {
          "ja": "サウナ後の冷えた静けさ",
          "en": "post-sauna cool stillness"
        },
        {
          "ja": "岩盤浴の熱が残る静けさ",
          "en": "heated stone calm"
        }
      ]
    },
    {
      "group": "🏝 水面・南国光",
      "items": [
        {
          "ja": "まぶしいプール昼光",
          "en": "bright pool daylight"
        },
        {
          "ja": "水面反射のきらめき",
          "en": "water-reflection shimmer"
        },
        {
          "ja": "南国の湿った風",
          "en": "tropical humid breeze"
        },
        {
          "ja": "夕暮れのプール光",
          "en": "sunset pool glow"
        },
        {
          "ja": "緑に囲まれた涼感",
          "en": "green resort coolness"
        },
        {
          "ja": "夜のプールライトアップ",
          "en": "night pool lighting"
        },
        {
          "ja": "静かな夜のリゾート空気",
          "en": "quiet night resort mood"
        },
        {
          "ja": "雨上がりのプールの静けさ",
          "en": "after-rain pool calm"
        },
        {
          "ja": "やわらかな南国の風",
          "en": "soft tropical breeze"
        },
        {
          "ja": "朝のプールサイドの静けさ",
          "en": "pool-morning calm"
        },
        {
          "ja": "プールバーの夜の暖かさ",
          "en": "pool-bar night warmth"
        },
        {
          "ja": "緑陰の南国感",
          "en": "tropical green shade"
        },
        {
          "ja": "雨上がりの南国の澄み",
          "en": "after-rain tropical clarity"
        },
        {
          "ja": "深夜プールの静けさ",
          "en": "deep-night pool hush"
        },
        {
          "ja": "水面ライトの青い揺れ",
          "en": "blue waterlight flicker"
        },
        {
          "ja": "早朝プールサイドの静けさ",
          "en": "early poolside stillness"
        }
      ]
    },
    {
      "group": "🎮 ネオン・騒音空気",
      "items": [
        {
          "ja": "ネオンのアーケード光",
          "en": "neon arcade glow"
        },
        {
          "ja": "賑やかなアミューズメント騒音",
          "en": "crowded amusement noise"
        },
        {
          "ja": "筐体の激しい点滅光",
          "en": "flashing cabinet light"
        },
        {
          "ja": "深夜のアーケードの静けさ",
          "en": "late-night arcade hush"
        },
        {
          "ja": "休日のアーケード混雑",
          "en": "holiday arcade bustle"
        },
        {
          "ja": "メダルコーナーの薄暗さ",
          "en": "medal corner dimness"
        },
        {
          "ja": "音ゲーの低音脈動",
          "en": "rhythm-game bass pulse"
        },
        {
          "ja": "明るいアーケード空気",
          "en": "bright arcade ambience"
        },
        {
          "ja": "無人フロアの静止感",
          "en": "empty arcade stillness"
        }
      ]
    },
    {
      "group": "🎤 個室の灯り・深夜感",
      "items": [
        {
          "ja": "深夜のカラオケのネオン光",
          "en": "deep-night karaoke glow"
        },
        {
          "ja": "漏れてくる歌声の気配",
          "en": "muffled music leakage"
        },
        {
          "ja": "閉店前の個室の静けさ",
          "en": "near-closing room stillness"
        },
        {
          "ja": "パーティールームのざわめき",
          "en": "party-room chatter"
        },
        {
          "ja": "明るい部屋の高揚感",
          "en": "bright room excitement"
        },
        {
          "ja": "ドリンクバー周りの混雑",
          "en": "drink-room bustle"
        },
        {
          "ja": "静かな廊下の気配",
          "en": "quiet hallway hush"
        },
        {
          "ja": "雨夜の受付照明",
          "en": "rainy-night reception light"
        },
        {
          "ja": "ネオンロビーの暖かさ",
          "en": "neon lobby warmth"
        }
      ]
    },
    {
      "group": "🎬 開演前後の静けさ",
      "items": [
        {
          "ja": "開演前の劇場の静けさ",
          "en": "pre-show theater hush"
        },
        {
          "ja": "やわらかなシアター暗さ",
          "en": "soft theater darkness"
        },
        {
          "ja": "シート列に満ちる予感",
          "en": "row-seating anticipation"
        },
        {
          "ja": "ポップコーンの匂い",
          "en": "popcorn-scented air"
        },
        {
          "ja": "予告編のちらつく光",
          "en": "trailer-light flicker"
        },
        {
          "ja": "上映後の静けさ",
          "en": "post-screening stillness"
        },
        {
          "ja": "夜のロビーの灯り",
          "en": "lobby glow at night"
        },
        {
          "ja": "上映後の客流れ",
          "en": "after-show customer flow"
        },
        {
          "ja": "雨の日の入口の混み",
          "en": "rainy entrance bustle"
        }
      ]
    }
  ],
  "settings": [
    {
      "group": "♨ 温浴設備・細部",
      "items": [
        {
          "ja": "立ちのぼる湯気",
          "en": "rising spa steam"
        },
        {
          "ja": "濡れた石床",
          "en": "wet stone floor"
        },
        {
          "ja": "浴槽縁のやわらかな光",
          "en": "glowing spa bath edge"
        },
        {
          "ja": "リクライナーラウンジチェア",
          "en": "recliner lounge chairs"
        },
        {
          "ja": "積まれたタオル束",
          "en": "folded towels stack"
        },
        {
          "ja": "木ルーバー壁",
          "en": "wood slat wall"
        },
        {
          "ja": "間接壁照明",
          "en": "indirect wall lighting"
        },
        {
          "ja": "ガラスの給水台",
          "en": "glass water station"
        },
        {
          "ja": "雨筋のついたガラスパネル",
          "en": "rain-streaked glass panel"
        },
        {
          "ja": "温浴サイン灯",
          "en": "spa signage lamp"
        },
        {
          "ja": "サウナ扉",
          "en": "sauna door"
        },
        {
          "ja": "小さな床排水溝",
          "en": "small floor drain channel"
        },
        {
          "ja": "減光したスパ照明",
          "en": "dim spa pendant light"
        },
        {
          "ja": "竹簾の影",
          "en": "bamboo screen shadow"
        },
        {
          "ja": "露天寄り浴槽縁の光",
          "en": "open bath edge light"
        },
        {
          "ja": "水風呂縁の冷たい反射",
          "en": "cold plunge rim light"
        },
        {
          "ja": "畳まれたサウナマット",
          "en": "folded sauna mat"
        },
        {
          "ja": "岩盤浴ベッドの灯り",
          "en": "warm stone bed glow"
        },
        {
          "ja": "洗面鏡の照明",
          "en": "vanity mirror light"
        },
        {
          "ja": "アメニティバスケット",
          "en": "amenity basket"
        }
      ]
    },
    {
      "group": "🏝 プール設備・ラウンジ細部",
      "items": [
        {
          "ja": "デッキチェア",
          "en": "deck chairs"
        },
        {
          "ja": "プールサイドパラソル",
          "en": "poolside parasol"
        },
        {
          "ja": "水中ライト",
          "en": "pool water lights"
        },
        {
          "ja": "インフィニティ縁の光",
          "en": "infinity edge glow"
        },
        {
          "ja": "ガラス手すり",
          "en": "glass handrail"
        },
        {
          "ja": "南国植物",
          "en": "tropical plants"
        },
        {
          "ja": "濡れた木製デッキ",
          "en": "wet wooden deck"
        },
        {
          "ja": "丸めたプールタオル",
          "en": "rolled pool towels"
        },
        {
          "ja": "プールサイド小テーブル",
          "en": "poolside side table"
        },
        {
          "ja": "水中ステップライト",
          "en": "submerged step lights"
        },
        {
          "ja": "白布カバナカーテン",
          "en": "white cabana curtains"
        },
        {
          "ja": "プールバー棚の発光",
          "en": "glowing pool bar shelf"
        }
      ]
    },
    {
      "group": "🎮 筐体・ネオン細部",
      "items": [
        {
          "ja": "クレーンゲーム列",
          "en": "crane machine row"
        },
        {
          "ja": "景品棚の壁面",
          "en": "prize shelf wall"
        },
        {
          "ja": "ネオン床反射",
          "en": "neon floor reflection"
        },
        {
          "ja": "音ゲー筐体列",
          "en": "rhythm game cabinets"
        },
        {
          "ja": "プラスチックスツール",
          "en": "plastic stools"
        },
        {
          "ja": "両替機",
          "en": "coin exchange machine"
        },
        {
          "ja": "ゲームフロアのカーペット柄",
          "en": "arcade carpet pattern"
        },
        {
          "ja": "トークンカウンター",
          "en": "token counter"
        },
        {
          "ja": "メダル機の灯り",
          "en": "medal machine lights"
        },
        {
          "ja": "チケットディスペンサー",
          "en": "ticket dispenser"
        }
      ]
    },
    {
      "group": "🎤 マイク・室内設備",
      "items": [
        {
          "ja": "ワイヤレスマイク",
          "en": "wireless microphones"
        },
        {
          "ja": "タッチ式選曲タブレット",
          "en": "touchscreen song tablet"
        },
        {
          "ja": "色付き天井照明",
          "en": "colored ceiling lights"
        },
        {
          "ja": "ソファボックス席",
          "en": "sofa booth seating"
        },
        {
          "ja": "ドリンクバー機",
          "en": "drink bar machine"
        },
        {
          "ja": "受付カウンター",
          "en": "reception counter"
        },
        {
          "ja": "部屋番号プレート列",
          "en": "hallway door numbers"
        },
        {
          "ja": "タンバリンかご",
          "en": "tambourine basket"
        },
        {
          "ja": "モニターの発光",
          "en": "karaoke monitor glow"
        },
        {
          "ja": "濡れた傘立て",
          "en": "wet umbrella stand"
        },
        {
          "ja": "プラスチックカップの束",
          "en": "plastic cup stack"
        }
      ]
    },
    {
      "group": "🎬 シート・上映設備",
      "items": [
        {
          "ja": "映画館シート列",
          "en": "theater seat rows"
        },
        {
          "ja": "足元の段差灯",
          "en": "aisle step lights"
        },
        {
          "ja": "売店メニューボード",
          "en": "concession menu board"
        },
        {
          "ja": "ポップコーン保温ケース",
          "en": "popcorn warmer case"
        },
        {
          "ja": "チケット端末",
          "en": "ticket kiosk"
        },
        {
          "ja": "ポスターライトボックス",
          "en": "poster lightboxes"
        },
        {
          "ja": "半券入れ",
          "en": "torn ticket stub bin"
        },
        {
          "ja": "濡れた入口マット",
          "en": "wet entrance mat"
        },
        {
          "ja": "ベルベットの待機ロープ",
          "en": "velvet queue ropes"
        },
        {
          "ja": "カップホルダー肘掛け",
          "en": "cup holder armrests"
        },
        {
          "ja": "映写光の靄",
          "en": "projection haze beam"
        }
      ]
    }
  ]
}
,
{
  "id": "lodging_stay_collection",
  "title": "🏨 宿泊・滞在施設特化コレクション",
  "subtitle": "ホテルロビー・廊下・客室、旅館・和室・廊下、高層ホテルラウンジ・夜景室、チェックインカウンター・待機空間など、一時的に身を置く滞在空間を、静けさ、照明、窓外の気配、荷物と導線で多層に噛ませる、宿泊と滞在の屋内背景特化コレクション",
  "complete": [
    {
      "group": "🏨 ホテルロビー・廊下・客室",
      "items": [
        {
          "id": "stay_hotel_corridor_midnight",
          "ja": "深夜の静かなホテル廊下",
          "links": {
            "base": [
              "hotel corridor"
            ],
            "customize": [
              "midnight hotel hush",
              "quiet stay atmosphere"
            ],
            "settings": [
              "carpeted hotel corridor",
              "elevator hall indicator",
              "room keycard slot light"
            ]
          }
        },
        {
          "id": "stay_business_room_morning",
          "ja": "朝のビジネスホテル客室",
          "links": {
            "base": [
              "business hotel room"
            ],
            "customize": [
              "morning hotel room calm",
              "soft daylight through hotel curtains"
            ],
            "settings": [
              "bedside hotel lamp",
              "folded hotel duvet",
              "desk kettle setup"
            ]
          }
        },
        {
          "id": "stay_hotel_lobby_rainy_night",
          "ja": "雨夜のホテルロビーラウンジ",
          "links": {
            "base": [
              "hotel lobby lounge"
            ],
            "customize": [
              "rainy night lobby warmth",
              "quiet stay atmosphere",
              "wet city reflection through window"
            ],
            "settings": [
              "lobby sofa set",
              "reception counter light",
              "rain-darkened entrance mat"
            ]
          }
        },
        {
          "id": "stay_hotel_frontdesk_checkin",
          "ja": "チェックイン前のホテルフロント",
          "links": {
            "base": [
              "hotel front desk"
            ],
            "customize": [
              "pre-check-in waiting air",
              "luggage-rolling ambience",
              "quiet stay atmosphere"
            ],
            "settings": [
              "check-in queue stanchions",
              "reception counter light",
              "luggage cart"
            ]
          }
        },
        {
          "id": "stay_early_lobby_empty",
          "ja": "早朝の無人ロビーラウンジ",
          "links": {
            "base": [
              "lobby waiting area"
            ],
            "customize": [
              "early morning empty lobby stillness",
              "air-conditioning hush"
            ],
            "settings": [
              "lobby sofa set",
              "floor lamp pool light",
              "large lobby window"
            ]
          }
        },
        {
          "id": "stay_elevator_hall_late_night",
          "ja": "夜更けの静かなエレベーターホール",
          "links": {
            "base": [
              "hotel elevator hall"
            ],
            "customize": [
              "late-night elevator hall hush",
              "quiet stay atmosphere"
            ],
            "settings": [
              "elevator door reflections",
              "elevator hall indicator",
              "guest room door row"
            ]
          }
        },
        {
          "id": "stay_room_after_cleaning",
          "ja": "清掃直後の整えられたホテル客室",
          "links": {
            "base": [
              "twin-bed guest room"
            ],
            "customize": [
              "freshly cleaned room stillness",
              "quiet stay atmosphere"
            ],
            "settings": [
              "twin-bed arrangement",
              "blackout curtain folds",
              "room desk chair"
            ]
          }
        },
        {
          "id": "stay_checkout_lobby_after_rain",
          "ja": "雨上がりのチェックアウト後ロビー",
          "links": {
            "base": [
              "rear lobby sofa area"
            ],
            "customize": [
              "post-checkout lobby emptiness",
              "rainy night lobby warmth"
            ],
            "settings": [
              "lobby sofa set",
              "large lobby window",
              "rain-darkened entrance mat"
            ]
          }
        },
        {
          "id": "stay_corridor_rain_glow",
          "ja": "雨光がにじむ深夜のホテル廊下",
          "links": {
            "base": [
              "hotel corridor"
            ],
            "customize": [
              "corridor rain glow hush",
              "midnight hotel hush"
            ],
            "settings": [
              "carpeted hotel corridor",
              "guest room door row",
              "city night window reflection"
            ]
          }
        },
        {
          "id": "stay_consecutive_night_guestroom",
          "ja": "連泊中の静かなホテル客室",
          "links": {
            "base": [
              "window lounge guest room"
            ],
            "customize": [
              "multi-night guest room calm",
              "soft daylight through hotel curtains"
            ],
            "settings": [
              "window lounge sofa",
              "suitcase stand",
              "bedside hotel lamp"
            ]
          }
        },
        {
          "id": "stay_vending_corridor_midnight",
          "ja": "自販機の灯りだけがある深夜通路",
          "links": {
            "base": [
              "vending-machine hotel corridor"
            ],
            "customize": [
              "midnight vending corner hush",
              "air-conditioning hush"
            ],
            "settings": [
              "vending machine cold light",
              "carpeted hotel corridor",
              "room keycard slot light"
            ]
          }
        }
      ]
    },
    {
      "group": "♨ 旅館・和室・廊下",
      "items": [
        {
          "id": "stay_ryokan_room_shoji",
          "ja": "障子越しの光が差す旅館和室",
          "links": {
            "base": [
              "ryokan tatami room"
            ],
            "customize": [
              "shoji-filtered daylight",
              "quiet ryokan room stillness"
            ],
            "settings": [
              "shoji screen glow",
              "tatami edge lines",
              "low tea table set"
            ]
          }
        },
        {
          "id": "stay_ryokan_corridor_quiet",
          "ja": "温泉旅館の静かな廊下",
          "links": {
            "base": [
              "ryokan corridor"
            ],
            "customize": [
              "ryokan corridor hush",
              "paper-lantern warmth"
            ],
            "settings": [
              "ryokan paper lantern light",
              "wooden hallway reflections",
              "slippers by doorway"
            ]
          }
        },
        {
          "id": "stay_ryokan_room_morning",
          "ja": "朝の静かな旅館和室",
          "links": {
            "base": [
              "ryokan tatami room"
            ],
            "customize": [
              "morning ryokan stillness",
              "quiet ryokan room stillness"
            ],
            "settings": [
              "shoji screen glow",
              "tokonoma alcove display",
              "low tea table set"
            ]
          }
        },
        {
          "id": "stay_ryokan_room_garden_dusk",
          "ja": "夕暮れの中庭を望む旅館和室",
          "links": {
            "base": [
              "garden-view ryokan room"
            ],
            "customize": [
              "dusk garden glow",
              "quiet ryokan room stillness"
            ],
            "settings": [
              "garden stone lantern glow",
              "shoji screen glow",
              "lacquered low table sheen"
            ]
          }
        },
        {
          "id": "stay_ryokan_corridor_rain",
          "ja": "雨音がこもる旅館廊下",
          "links": {
            "base": [
              "shoji-lit ryokan hallway"
            ],
            "customize": [
              "rain-hushed inn corridor",
              "ryokan corridor hush"
            ],
            "settings": [
              "rain-darkened wooden veranda",
              "wooden hallway reflections",
              "slippers by doorway"
            ]
          }
        },
        {
          "id": "stay_ryokan_lounge_postbath",
          "ja": "湯上がりの休憩処が静かな旅館",
          "links": {
            "base": [
              "post-bath ryokan lounge"
            ],
            "customize": [
              "post-bath relaxation hush",
              "hot spring inn warmth"
            ],
            "settings": [
              "yukata basket",
              "bamboo blind shadow",
              "ryokan paper lantern light"
            ]
          }
        },
        {
          "id": "stay_ryokan_room_night_shoji",
          "ja": "障子を少し開けた夜の和室",
          "links": {
            "base": [
              "tokonoma-facing tatami room"
            ],
            "customize": [
              "evening inn hush",
              "paper-lantern warmth"
            ],
            "settings": [
              "slightly opened shoji light slit",
              "tokonoma alcove display",
              "zabuton stack"
            ]
          }
        },
        {
          "id": "stay_ryokan_corridor_snowlight",
          "ja": "雪明かりがにじむ旅館廊下",
          "links": {
            "base": [
              "ryokan corridor"
            ],
            "customize": [
              "winter ryokan hush",
              "ryokan corridor hush"
            ],
            "settings": [
              "paper-screen winter glow",
              "wooden hallway reflections",
              "slippers by doorway"
            ]
          }
        }
      ]
    },
    {
      "group": "🌃 高層ホテルラウンジ・夜景室",
      "items": [
        {
          "id": "stay_highrise_nightview_room",
          "ja": "夜景が広がる高層ホテル客室",
          "links": {
            "base": [
              "high-rise hotel room"
            ],
            "customize": [
              "high-rise night view glow",
              "quiet high-floor stillness"
            ],
            "settings": [
              "city night window reflection",
              "bedside hotel lamp",
              "glass wall night skyline"
            ]
          }
        },
        {
          "id": "stay_highrise_lounge_twilight",
          "ja": "夕景が差し込む高層ホテルラウンジ",
          "links": {
            "base": [
              "high-rise hotel lounge"
            ],
            "customize": [
              "twilight skyline glow",
              "quiet lounge hush"
            ],
            "settings": [
              "window lounge sofa",
              "glass wall night skyline",
              "floor lamp pool light"
            ]
          }
        },
        {
          "id": "stay_highrise_corner_suite_night",
          "ja": "街明かりを見下ろすコーナースイート",
          "links": {
            "base": [
              "corner suite room"
            ],
            "customize": [
              "late-night skyline hush",
              "quiet high-floor stillness"
            ],
            "settings": [
              "corner glass window",
              "citylight marble table reflection",
              "mini bar glow"
            ]
          }
        },
        {
          "id": "stay_highrise_morning_windowseat",
          "ja": "朝焼けが差し込む高層窓際シート",
          "links": {
            "base": [
              "skyline window seat"
            ],
            "customize": [
              "dawn skyline soft glow",
              "quiet high-floor stillness"
            ],
            "settings": [
              "sheer curtain dawn glow",
              "window lounge sofa",
              "floor-to-ceiling window wall"
            ]
          }
        },
        {
          "id": "stay_highrise_rain_glass_room",
          "ja": "雨筋が流れる高層ガラス客室",
          "links": {
            "base": [
              "rain-lit skyline room"
            ],
            "customize": [
              "storm-lit skyline hush",
              "wet city reflection through window"
            ],
            "settings": [
              "rain streaks on skyline glass",
              "glass wall night skyline",
              "bedside hotel lamp"
            ]
          }
        },
        {
          "id": "stay_highrise_executive_midnight",
          "ja": "深夜のエグゼクティブラウンジ隅席",
          "links": {
            "base": [
              "executive lounge corner"
            ],
            "customize": [
              "executive lounge midnight hush",
              "quiet lounge hush"
            ],
            "settings": [
              "executive lounge low table",
              "city night window reflection",
              "floor lamp pool light"
            ]
          }
        },
        {
          "id": "stay_highrise_bar_seat_night",
          "ja": "夜景を背にした高層バーラウンジ席",
          "links": {
            "base": [
              "skyline bar seat"
            ],
            "customize": [
              "late-night skyline hush",
              "bar lounge amber hush"
            ],
            "settings": [
              "skyline bar counter glow",
              "glass wall night skyline",
              "citylight marble table reflection"
            ]
          }
        }
      ]
    }
    ,
    {
      "group": "🧳 チェックインカウンター・待機空間",
      "items": [
        {
          "id": "stay_checkin_counter_evening",
          "ja": "夕方のチェックインカウンター",
          "links": {
            "base": [
              "check-in counter"
            ],
            "customize": [
              "evening check-in bustle",
              "soft lobby traffic flow",
              "luggage-rolling ambience"
            ],
            "settings": [
              "queue stanchions line",
              "check-in monitor glow",
              "keycard envelope tray"
            ]
          }
        },
        {
          "id": "stay_frontdesk_late_night",
          "ja": "深夜の静かなフロント前",
          "links": {
            "base": [
              "front desk queue area"
            ],
            "customize": [
              "late-night front desk hush",
              "quiet stay atmosphere",
              "air-conditioning hush"
            ],
            "settings": [
              "concierge bell stand",
              "queue stanchions line",
              "reception counter light"
            ]
          }
        },
        {
          "id": "stay_lobby_waiting_morning_departure",
          "ja": "朝の出発前ロビー待機席",
          "links": {
            "base": [
              "departure-time lounge corner"
            ],
            "customize": [
              "morning departure lobby calm",
              "soft lobby traffic flow",
              "luggage-rolling ambience"
            ],
            "settings": [
              "lobby seating row",
              "luggage cart row",
              "lobby brochure rack"
            ]
          }
        },
        {
          "id": "stay_lobby_chairs_rainy_day",
          "ja": "雨の日のロビーチェア列",
          "links": {
            "base": [
              "lobby seating row"
            ],
            "customize": [
              "rainy lobby waiting hush",
              "wet city reflection through window",
              "quiet stay atmosphere"
            ],
            "settings": [
              "umbrella drip tray",
              "large lobby window",
              "lobby seating row"
            ]
          }
        },
        {
          "id": "stay_frontdesk_luggage_midnight_arrival",
          "ja": "深夜便帰りの荷物が並ぶフロント",
          "links": {
            "base": [
              "luggage staging corner"
            ],
            "customize": [
              "midnight arrival hush",
              "luggage-rolling ambience",
              "quiet stay atmosphere"
            ],
            "settings": [
              "stacked travel cases",
              "check-in monitor glow",
              "luggage cart row"
            ]
          }
        },
        {
          "id": "stay_checkout_line_morning",
          "ja": "チェックアウト行列のある朝のフロント",
          "links": {
            "base": [
              "front desk queue area"
            ],
            "customize": [
              "checkout-line morning tension",
              "morning departure lobby calm",
              "soft lobby traffic flow"
            ],
            "settings": [
              "queue stanchions line",
              "keycard envelope tray",
              "reception counter light"
            ]
          }
        }
      ]
    }
  ],
  "base": [
    {
      "group": "🏨 ホテルの場所",
      "items": [
        {
          "ja": "ホテル廊下",
          "en": "hotel corridor"
        },
        {
          "ja": "ビジネスホテル客室",
          "en": "business hotel room"
        },
        {
          "ja": "ホテルロビーラウンジ",
          "en": "hotel lobby lounge"
        },
        {
          "ja": "ホテルフロント",
          "en": "hotel front desk"
        },
        {
          "ja": "ロビー待機スペース",
          "en": "lobby waiting area"
        },
        {
          "ja": "エレベーターホール",
          "en": "hotel elevator hall"
        },
        {
          "ja": "ツインベッド客室",
          "en": "twin-bed guest room"
        },
        {
          "ja": "窓際ラウンジ客室",
          "en": "window lounge guest room"
        },
        {
          "ja": "ロビーソファ奥席",
          "en": "rear lobby sofa area"
        },
        {
          "ja": "自販機前のホテル通路",
          "en": "vending-machine hotel corridor"
        }
      ]
    },
    {
      "group": "♨ 旅館・和の滞在空間",
      "items": [
        {
          "ja": "旅館和室",
          "en": "ryokan tatami room"
        },
        {
          "ja": "旅館廊下",
          "en": "ryokan corridor"
        },
        {
          "ja": "中庭を望む旅館和室",
          "en": "garden-view ryokan room"
        },
        {
          "ja": "障子灯りの旅館廊下",
          "en": "shoji-lit ryokan hallway"
        },
        {
          "ja": "湯上がりの休憩処",
          "en": "post-bath ryokan lounge"
        },
        {
          "ja": "床の間寄りの和室",
          "en": "tokonoma-facing tatami room"
        }
      ]
    },
    {
      "group": "🌃 高層滞在・夜景空間",
      "items": [
        {
          "ja": "高層ホテル客室",
          "en": "high-rise hotel room"
        },
        {
          "ja": "高層ホテルラウンジ",
          "en": "high-rise hotel lounge"
        },
        {
          "ja": "コーナースイート客室",
          "en": "corner suite room"
        },
        {
          "ja": "高層窓際シート",
          "en": "skyline window seat"
        },
        {
          "ja": "雨光の高層客室",
          "en": "rain-lit skyline room"
        },
        {
          "ja": "エグゼクティブラウンジ隅席",
          "en": "executive lounge corner"
        },
        {
          "ja": "高層バーラウンジ席",
          "en": "skyline bar seat"
        }
      ]
    }
    ,
    {
      "group": "🧳 チェックイン・待機の場所",
      "items": [
        {
          "ja": "チェックインカウンター",
          "en": "check-in counter"
        },
        {
          "ja": "フロント前の行列スペース",
          "en": "front desk queue area"
        },
        {
          "ja": "ロビーチェア列",
          "en": "lobby seating row"
        },
        {
          "ja": "荷物置き寄りの待機隅",
          "en": "luggage staging corner"
        },
        {
          "ja": "コンシェルジュ脇の待機席",
          "en": "concierge side waiting area"
        },
        {
          "ja": "出発前ロビー隅席",
          "en": "departure-time lounge corner"
        }
      ]
    }
  ],
  "customize": [
    {
      "group": "🕒 滞在時間・静けさ",
      "items": [
        {
          "ja": "深夜のホテル静けさ",
          "en": "midnight hotel hush"
        },
        {
          "ja": "朝の客室の静けさ",
          "en": "morning hotel room calm"
        },
        {
          "ja": "雨夜ロビーの暖かさ",
          "en": "rainy night lobby warmth"
        },
        {
          "ja": "チェックイン前の待機空気",
          "en": "pre-check-in waiting air"
        },
        {
          "ja": "早朝ロビーの無人感",
          "en": "early morning empty lobby stillness"
        },
        {
          "ja": "静かな滞在空気",
          "en": "quiet stay atmosphere"
        },
        {
          "ja": "空調の低い静けさ",
          "en": "air-conditioning hush"
        },
        {
          "ja": "荷物が転がる気配",
          "en": "luggage-rolling ambience"
        },
        {
          "ja": "夜更けのエレベーターホールの静けさ",
          "en": "late-night elevator hall hush"
        },
        {
          "ja": "清掃直後の客室の静けさ",
          "en": "freshly cleaned room stillness"
        },
        {
          "ja": "チェックアウト後のロビーの空白",
          "en": "post-checkout lobby emptiness"
        },
        {
          "ja": "廊下に雨光がにじむ静けさ",
          "en": "corridor rain glow hush"
        },
        {
          "ja": "連泊中の客室の落ち着き",
          "en": "multi-night guest room calm"
        },
        {
          "ja": "自販機前の深夜静けさ",
          "en": "midnight vending corner hush"
        }
      ]
    },
    {
      "group": "♨ 和の滞在・灯り",
      "items": [
        {
          "ja": "障子越しの日差し",
          "en": "shoji-filtered daylight"
        },
        {
          "ja": "静かな旅館和室の空気",
          "en": "quiet ryokan room stillness"
        },
        {
          "ja": "旅館廊下の静けさ",
          "en": "ryokan corridor hush"
        },
        {
          "ja": "和灯りの暖かさ",
          "en": "paper-lantern warmth"
        },
        {
          "ja": "朝の旅館の静けさ",
          "en": "morning ryokan stillness"
        },
        {
          "ja": "夕暮れの中庭の灯り",
          "en": "dusk garden glow"
        },
        {
          "ja": "雨音がこもる旅館廊下",
          "en": "rain-hushed inn corridor"
        },
        {
          "ja": "湯上がりの休息の静けさ",
          "en": "post-bath relaxation hush"
        },
        {
          "ja": "温泉宿のぬくもり",
          "en": "hot spring inn warmth"
        },
        {
          "ja": "夜の旅館の静けさ",
          "en": "evening inn hush"
        },
        {
          "ja": "冬の旅館の静けさ",
          "en": "winter ryokan hush"
        }
      ]
    },
    {
      "group": "🌃 夜景・高層滞在の気配",
      "items": [
        {
          "ja": "高層夜景の灯り",
          "en": "high-rise night view glow"
        },
        {
          "ja": "高層階の静けさ",
          "en": "quiet high-floor stillness"
        },
        {
          "ja": "夕景のスカイラインの光",
          "en": "twilight skyline glow"
        },
        {
          "ja": "静かなラウンジの気配",
          "en": "quiet lounge hush"
        },
        {
          "ja": "ホテルカーテン越しの柔らかな朝光",
          "en": "soft daylight through hotel curtains"
        },
        {
          "ja": "窓外の濡れた街の反射",
          "en": "wet city reflection through window"
        },
        {
          "ja": "深夜のスカイラインの静けさ",
          "en": "late-night skyline hush"
        },
        {
          "ja": "朝焼けのスカイラインの柔らかな光",
          "en": "dawn skyline soft glow"
        },
        {
          "ja": "雨雲に照らされる高層夜景の静けさ",
          "en": "storm-lit skyline hush"
        },
        {
          "ja": "深夜のエグゼクティブラウンジの静けさ",
          "en": "executive lounge midnight hush"
        },
        {
          "ja": "高層バーラウンジの琥珀色の静けさ",
          "en": "bar lounge amber hush"
        }
      ]
    }
    ,
    {
      "group": "🧳 ロビー導線・待機気配",
      "items": [
        {
          "ja": "夕方のチェックインの賑わい",
          "en": "evening check-in bustle"
        },
        {
          "ja": "深夜フロント前の静けさ",
          "en": "late-night front desk hush"
        },
        {
          "ja": "朝の出発前ロビーの静けさ",
          "en": "morning departure lobby calm"
        },
        {
          "ja": "雨の日のロビー待機の静けさ",
          "en": "rainy lobby waiting hush"
        },
        {
          "ja": "深夜便帰りの到着静けさ",
          "en": "midnight arrival hush"
        },
        {
          "ja": "荷物が転がる導線の気配",
          "en": "luggage-rolling ambience"
        },
        {
          "ja": "ロビーのやわらかな人流",
          "en": "soft lobby traffic flow"
        },
        {
          "ja": "チェックアウト行列の朝の張りつめ",
          "en": "checkout-line morning tension"
        }
      ]
    }
  ],
  "settings": [
    {
      "group": "💡 照明・窓・導線",
      "items": [
        {
          "ja": "絨毯敷きのホテル廊下",
          "en": "carpeted hotel corridor"
        },
        {
          "ja": "エレベーターホール表示灯",
          "en": "elevator hall indicator"
        },
        {
          "ja": "客室カード差し込み灯",
          "en": "room keycard slot light"
        },
        {
          "ja": "ベッドサイドランプ",
          "en": "bedside hotel lamp"
        },
        {
          "ja": "ホテル窓の夜景反射",
          "en": "city night window reflection"
        },
        {
          "ja": "ガラス壁の夜景",
          "en": "glass wall night skyline"
        },
        {
          "ja": "大きなロビー窓",
          "en": "large lobby window"
        },
        {
          "ja": "フロアランプの灯り溜まり",
          "en": "floor lamp pool light"
        },
        {
          "ja": "チェックイン列ポール",
          "en": "check-in queue stanchions"
        },
        {
          "ja": "フロントカウンター灯",
          "en": "reception counter light"
        },
        {
          "ja": "ロビーソファセット",
          "en": "lobby sofa set"
        },
        {
          "ja": "ラゲッジカート",
          "en": "luggage cart"
        },
        {
          "ja": "雨に暗い入口マット",
          "en": "rain-darkened entrance mat"
        },
        {
          "ja": "エレベータードアの反射",
          "en": "elevator door reflections"
        },
        {
          "ja": "客室ドア列",
          "en": "guest room door row"
        },
        {
          "ja": "ツインベッドの整列",
          "en": "twin-bed arrangement"
        },
        {
          "ja": "遮光カーテンのひだ",
          "en": "blackout curtain folds"
        },
        {
          "ja": "室内デスクチェア",
          "en": "room desk chair"
        },
        {
          "ja": "スーツケース置き台",
          "en": "suitcase stand"
        },
        {
          "ja": "自販機の冷たい灯り",
          "en": "vending machine cold light"
        },
        {
          "ja": "コーナーガラス窓",
          "en": "corner glass window"
        },
        {
          "ja": "大理石テーブルに映る街明かり",
          "en": "citylight marble table reflection"
        },
        {
          "ja": "ミニバーの灯り",
          "en": "mini bar glow"
        },
        {
          "ja": "薄布カーテンの朝光",
          "en": "sheer curtain dawn glow"
        },
        {
          "ja": "床から天井までの窓壁",
          "en": "floor-to-ceiling window wall"
        },
        {
          "ja": "高層ガラスに流れる雨筋",
          "en": "rain streaks on skyline glass"
        },
        {
          "ja": "エグゼクティブラウンジの低テーブル",
          "en": "executive lounge low table"
        },
        {
          "ja": "高層バーカウンターの灯り",
          "en": "skyline bar counter glow"
        }
      ]
    },
    {
      "group": "♨ 和室・旅館の細部",
      "items": [
        {
          "ja": "障子の光",
          "en": "shoji screen glow"
        },
        {
          "ja": "畳の縁",
          "en": "tatami edge lines"
        },
        {
          "ja": "低い茶卓セット",
          "en": "low tea table set"
        },
        {
          "ja": "旅館の紙灯り",
          "en": "ryokan paper lantern light"
        },
        {
          "ja": "木廊下の反射",
          "en": "wooden hallway reflections"
        },
        {
          "ja": "戸口の揃えられたスリッパ",
          "en": "slippers by doorway"
        },
        {
          "ja": "床の間の飾り",
          "en": "tokonoma alcove display"
        },
        {
          "ja": "庭の石灯籠の灯り",
          "en": "garden stone lantern glow"
        },
        {
          "ja": "漆の茶卓の艶",
          "en": "lacquered low table sheen"
        },
        {
          "ja": "雨に濡れた木縁側",
          "en": "rain-darkened wooden veranda"
        },
        {
          "ja": "浴衣かご",
          "en": "yukata basket"
        },
        {
          "ja": "竹簾の影",
          "en": "bamboo blind shadow"
        },
        {
          "ja": "少し開いた障子の光筋",
          "en": "slightly opened shoji light slit"
        },
        {
          "ja": "座布団の重なり",
          "en": "zabuton stack"
        },
        {
          "ja": "障子ににじむ雪明かり",
          "en": "paper-screen winter glow"
        }
      ]
    },
    {
      "group": "🧳 客室・備品まわり",
      "items": [
        {
          "ja": "折りたたまれたデュベ",
          "en": "folded hotel duvet"
        },
        {
          "ja": "デスク上のケトルセット",
          "en": "desk kettle setup"
        },
        {
          "ja": "窓際ラウンジソファ",
          "en": "window lounge sofa"
        }
      ]
    }
    ,
    {
      "group": "🧳 フロント・待機細部",
      "items": [
        {
          "ja": "整列した行列ポール",
          "en": "queue stanchions line"
        },
        {
          "ja": "荷物カートの列",
          "en": "luggage cart row"
        },
        {
          "ja": "チェックインモニターの光",
          "en": "check-in monitor glow"
        },
        {
          "ja": "コンシェルジュベル台",
          "en": "concierge bell stand"
        },
        {
          "ja": "積み重なった旅行ケース",
          "en": "stacked travel cases"
        },
        {
          "ja": "カードキー封筒トレー",
          "en": "keycard envelope tray"
        },
        {
          "ja": "ロビーパンフレット棚",
          "en": "lobby brochure rack"
        },
        {
          "ja": "傘の水受けトレー",
          "en": "umbrella drip tray"
        }
      ]
    }
  ]
}
,

{
  "id": "transport_interior_collection",
  "title": "🚉 交通・移動施設の室内特化コレクション",
  "subtitle": "駅構内・改札・待合室、空港ロビー・搭乗ゲート、電車・新幹線・車内通路、バス車内・長距離移動空間、フェリーラウンジ・船内通路など、移動の途中に身を置く屋内空間を、行列、反響、窓外の流れ、荷物と待機の気配で多層に噛ませる、交通・移動施設の室内背景特化コレクション",
  "complete": [
    {
      "group": "🚉 駅構内・改札・待合室",
      "items": [
        {
          "id": "transport_station_gate_morning",
          "ja": "始発前の静かな改札前",
          "links": {
            "base": ["station ticket gate hall"],
            "customize": ["early station hush", "pre-first-train stillness"],
            "settings": ["ticket gate indicator lights", "empty queue lanes", "timetable display glow"]
          }
        },
        {
          "id": "transport_station_waiting_rain",
          "ja": "雨の日の駅待合室",
          "links": {
            "base": ["station waiting room"],
            "customize": ["rainy station waiting hush", "soft platform announcement echo"],
            "settings": ["station bench row", "rain-darkened platform glass", "vending machine corner glow"]
          }
        },
        {
          "id": "transport_station_concourse_evening",
          "ja": "夕方の乗換コンコース",
          "links": {
            "base": ["transfer concourse"],
            "customize": ["evening commuter flow", "fast-moving station foot traffic"],
            "settings": ["overhead station signage", "ticket gate indicator lights", "rolling luggage trail"]
          }
        },
        {
          "id": "transport_station_last_train",
          "ja": "終電後の静かな駅通路",
          "links": {
            "base": ["late-night station corridor"],
            "customize": ["post-last-train quiet", "air-conditioned station hush"],
            "settings": ["clean station floor reflection", "closed kiosk shutters", "half-dim station signs"]
          }
        },
        {
          "id": "transport_station_rush_gate",
          "ja": "朝ラッシュ前の通勤改札",
          "links": {
            "base": ["commuter gate lanes"],
            "customize": ["pre-rush station tension", "morning commuter density"],
            "settings": ["ticket gate indicator lights", "queue-lane floor arrows", "tap-in beep afterglow"]
          }
        },
        {
          "id": "transport_station_vending_midnight",
          "ja": "自販機だけが光る深夜待合室",
          "links": {
            "base": ["late-night waiting corner"],
            "customize": ["vending-corner midnight hush", "post-last-train quiet"],
            "settings": ["vending machine corner glow", "empty station trash sorter", "wall clock over waiting room"]
          }
        },
        {
          "id": "transport_station_transfer_night",
          "ja": "乗換案内が光る深夜コンコース",
          "links": {
            "base": ["night transfer concourse"],
            "customize": ["after-midnight concourse hush", "footstep echo under station ceiling"],
            "settings": ["transfer board glow", "overhead station signage", "clean station floor reflection"]
          }
        },
        {
          "id": "transport_station_bench_dawn",
          "ja": "早朝のベンチ列が静かな駅待合",
          "links": {
            "base": ["bench-row station waiting area"],
            "customize": ["bench-row dawn stillness", "pre-first-train stillness"],
            "settings": ["station bench row", "timetable display glow", "soft fluorescent station lights"]
          }
        },
        {
          "id": "transport_station_rain_glass_corridor",
          "ja": "雨光がにじむ駅連絡通路",
          "links": {
            "base": ["station link corridor"],
            "customize": ["rain-lit station corridor hush", "air-conditioned station hush"],
            "settings": ["rain-darkened platform glass", "ceiling direction signs", "wet umbrella drip mat"]
          }
        }
      ]
    },
    {
      "group": "✈ 空港ロビー・搭乗ゲート",
      "items": [
        {
          "id": "transport_airport_gate_night",
          "ja": "深夜便前の搭乗ゲート",
          "links": {
            "base": ["airport boarding gate lounge"],
            "customize": ["late-night gate calm", "boarding-wait tension"],
            "settings": ["gate monitor glow", "boarding lane stanchions", "runway window reflections"]
          }
        },
        {
          "id": "transport_airport_terminal_morning",
          "ja": "朝の空港ターミナルロビー",
          "links": {
            "base": ["airport terminal lobby"],
            "customize": ["morning terminal brightness", "rolling luggage ambience"],
            "settings": ["large terminal glass wall", "flight board glow", "check-in counter islands"]
          }
        },
        {
          "id": "transport_airport_rain_window",
          "ja": "雨雲が映る空港窓際",
          "links": {
            "base": ["airport window lounge seats"],
            "customize": ["rain-lit airport stillness", "airport waiting silence"],
            "settings": ["runway window reflections", "airport lounge chairs", "rain-streaked terminal glass"]
          }
        },
        {
          "id": "transport_airport_arrival_midnight",
          "ja": "深夜到着後の空港到着ロビー",
          "links": {
            "base": ["airport arrivals lobby"],
            "customize": ["post-arrival quiet", "midnight terminal hush"],
            "settings": ["baggage cart row", "arrivals display glow", "empty queue lanes"]
          }
        },
        {
          "id": "transport_airport_post_security_lounge",
          "ja": "保安検査後の静かな出発ラウンジ",
          "links": {
            "base": ["post-security departure lounge"],
            "customize": ["post-security waiting calm", "airport waiting silence"],
            "settings": ["boarding lane stanchions", "gate monitor glow", "terminal carpet glow"]
          }
        },
        {
          "id": "transport_airport_gate_corridor_predawn",
          "ja": "明け方の搭乗ゲート通路",
          "links": {
            "base": ["airport gate corridor"],
            "customize": ["pre-dawn gate corridor hush", "boarding-wait tension"],
            "settings": ["ceiling gate signage", "moving walkway lights", "window-side runway glow"]
          }
        },
        {
          "id": "transport_airport_baggage_claim_midnight",
          "ja": "手荷物受取所が静かな深夜到着エリア",
          "links": {
            "base": ["airport baggage claim hall"],
            "customize": ["midnight baggage-claim hush", "post-arrival quiet"],
            "settings": ["baggage carousel", "arrivals display glow", "baggage cart row"]
          }
        },
        {
          "id": "transport_airport_dutyfree_night",
          "ja": "夜の保安検査後ショッピング通路",
          "links": {
            "base": ["post-security shopping concourse"],
            "customize": ["duty-free passage murmur", "late-night gate calm"],
            "settings": ["duty-free showcase lights", "polished terminal floor reflection", "ceiling gate signage"]
          }
        },
        {
          "id": "transport_airport_gate_rain_runway",
          "ja": "滑走路灯がにじむ雨夜の搭乗ゲート",
          "links": {
            "base": ["airport boarding gate lounge"],
            "customize": ["runway-light rain-night hush", "rain-lit airport stillness"],
            "settings": ["runway window reflections", "rain-streaked terminal glass", "gate monitor glow"]
          }
        }
      ]
    },
    {
      "group": "🚄 電車・新幹線・車内通路",
      "items": [
        {
          "id": "transport_shinkansen_night",
          "ja": "夜の新幹線車内",
          "links": {
            "base": ["shinkansen carriage"],
            "customize": ["night train calm", "window-streaked travel silence"],
            "settings": ["shinkansen seat row", "overhead luggage rack", "window city-light streaks"]
          }
        },
        {
          "id": "transport_train_morning_commute",
          "ja": "朝の通勤電車車内",
          "links": {
            "base": ["commuter train interior"],
            "customize": ["morning commuter density", "swaying train aisle tension"],
            "settings": ["hanging strap rows", "door-side standing space", "route display panel"]
          }
        },
        {
          "id": "transport_train_rain_window",
          "ja": "雨筋が流れる電車窓際",
          "links": {
            "base": ["window-side train seats"],
            "customize": ["rainy train hush", "window-side travel quiet"],
            "settings": ["rain-streaked carriage window", "seat armrests", "soft carriage lighting"]
          }
        },
        {
          "id": "transport_shinkansen_corridor_dawn",
          "ja": "夜明け前の新幹線通路",
          "links": {
            "base": ["shinkansen aisle corridor"],
            "customize": ["pre-dawn carriage stillness", "rolling travel hush"],
            "settings": ["carriage door connection", "soft aisle floor lights", "closed tray table rows"]
          }
        }
      
,
        {
          "id": "transport_shinkansen_reserved_dawn",
          "ja": "早朝の静かな指定席車内",
          "links": {
            "base": ["quiet reserved-seat carriage"],
            "customize": ["early reserved-car hush", "soft pre-departure carriage calm"],
            "settings": ["reserved seat headrest covers", "under-rack reading lights", "soft dawn window glow"]
          }
        },
        {
          "id": "transport_train_connector_midnight",
          "ja": "デッキ灯だけが残る深夜の連結通路",
          "links": {
            "base": ["midnight train connector deck"],
            "customize": ["midnight connector hush", "rolling rail hum"],
            "settings": ["accordion connector wall", "deck door indicator light", "rubberized deck floor"]
          }
        },
        {
          "id": "transport_shinkansen_deck_prestop",
          "ja": "停車前のざわめく新幹線デッキ",
          "links": {
            "base": ["pre-stop shinkansen deck"],
            "customize": ["pre-stop carriage stir", "door-side waiting tension"],
            "settings": ["door-side luggage shelf", "arrival display chime glow", "car-end information panel"]
          }
        },
        {
          "id": "transport_train_snow_window",
          "ja": "窓外が白く流れる雪の日の車内",
          "links": {
            "base": ["snow-view train window seats"],
            "customize": ["snow-streaked window silence", "winter carriage stillness"],
            "settings": ["snow-whitened train window", "fogged glass edges", "seat pocket magazine rack"]
          }
        },
        {
          "id": "transport_express_aisle_conductor",
          "ja": "車掌通過後の静かな特急通路",
          "links": {
            "base": ["express train aisle seats"],
            "customize": ["after conductor pass hush", "soft carriage footing rhythm"],
            "settings": ["express carriage indicator lights", "folded aisle jump seat", "door connection sign"]
          }
        }]
    },
    {
      "group": "🚌 バス車内・長距離移動空間",
      "items": [
        {
          "id": "transport_bus_night",
          "ja": "深夜の夜行バス車内",
          "links": {
            "base": ["overnight coach interior"],
            "customize": ["overnight bus hush", "sleeping cabin stillness"],
            "settings": ["reclining bus seats", "aisle reading lights", "dark curtain windows"]
          }
        },
        {
          "id": "transport_bus_terminal_wait",
          "ja": "発車前のバスターミナル待機席",
          "links": {
            "base": ["bus terminal waiting seats"],
            "customize": ["departure wait stillness", "terminal announcement echo"],
            "settings": ["terminal bench row", "departure board glow", "boarding platform doors"]
          }
        },
        {
          "id": "transport_bus_daylight",
          "ja": "昼の長距離バス車内",
          "links": {
            "base": ["long-distance bus interior"],
            "customize": ["daytime road travel calm", "sunlit bus interior"],
            "settings": ["coach seat headrest covers", "window-side curtain tiebacks", "overhead air vents"]
          }
        },
        {
          "id": "transport_bus_servicearea_predawn",
          "ja": "明け方のサービスエリア前の静かな車内",
          "links": {
            "base": ["service-area stop coach interior"],
            "customize": ["pre-dawn coach hush", "rest-stop pause stillness"],
            "settings": ["fogged aisle window", "seatback reading lights", "rest-stop curtain gap glow"]
          }
        },
        {
          "id": "transport_bus_rain_frontseat",
          "ja": "雨粒が流れる停車中のバス前方席",
          "links": {
            "base": ["front-row bus seats"],
            "customize": ["rainy stopover stillness", "wiper-paused silence"],
            "settings": ["rain-streaked windshield", "driver partition glass", "dashboard route light"]
          }
        },
        {
          "id": "transport_bus_midnight_highway_aisle",
          "ja": "高速道路を走る深夜バス通路",
          "links": {
            "base": ["midnight coach aisle"],
            "customize": ["highway-night drift", "engine-vibration hush"],
            "settings": ["aisle step marker lights", "overhead luggage racks", "closed curtain rows"]
          }
        },
        {
          "id": "transport_bus_boarding_bay",
          "ja": "出発前の長距離バス乗り場",
          "links": {
            "base": ["long-distance bus boarding bay"],
            "customize": ["pre-departure bus bay tension", "luggage-loading bustle"],
            "settings": ["bus bay route sign", "luggage hold loading cart", "platform edge caution line"]
          }
        },
        {
          "id": "transport_bus_half_asleep_morning",
          "ja": "朝の半分眠った長距離バス車内",
          "links": {
            "base": ["half-empty morning coach"],
            "customize": ["half-asleep morning ride", "soft dawn coach light"],
            "settings": ["tilted neck pillows", "window condensation arcs", "seatback blanket folds"]
          }
        }
      ]
    },
    {
      "group": "⛴ フェリーラウンジ・船内通路",
      "items": [
        {
          "id": "transport_ferry_morning_lounge",
          "ja": "朝焼けが差すフェリーラウンジ",
          "links": {
            "base": ["ferry lounge"],
            "customize": ["morning sea-travel calm", "soft ferry lounge hush"],
            "settings": ["wide ferry windows", "marine lounge seats", "sea-light reflections"]
          }
        },
        {
          "id": "transport_ferry_night_corridor",
          "ja": "深夜の船内通路",
          "links": {
            "base": ["ferry interior corridor"],
            "customize": ["midnight shipboard hush", "engine-hum stillness"],
            "settings": ["metal ferry corridor walls", "cabin number plates", "soft corridor strip lights"]
          }
        },
        {
          "id": "transport_ferry_departure_lobby",
          "ja": "出航前のフェリー待合ロビー",
          "links": {
            "base": ["ferry departure lobby"],
            "customize": ["pre-boarding ferry wait", "harbor-travel quiet"],
            "settings": ["boarding lane stanchions", "departure gate sign", "stacked travel cases"]
          }
        },
        {
          "id": "transport_ferry_sunset_window_lounge",
          "ja": "夕暮れの海光が差す窓際ラウンジ",
          "links": {
            "base": ["ferry window lounge seats"],
            "customize": ["sunset sea-route hush", "sea-light swaying hush"],
            "settings": ["porthole sunset glow", "window-side ferry sofas", "sea-light reflections"]
          }
        },
        {
          "id": "transport_ferry_blanket_midnight_corridor",
          "ja": "毛布が残る深夜の船内通路",
          "links": {
            "base": ["cabin corridor with blanket cart"],
            "customize": ["overnight ferry cabin hush", "midnight shipboard hush"],
            "settings": ["blanket cart stack", "cabin number plates", "soft corridor strip lights"]
          }
        },
        {
          "id": "transport_ferry_boarding_queue_lounge",
          "ja": "乗船直前のざわめく待機ラウンジ",
          "links": {
            "base": ["boarding queue lounge"],
            "customize": ["pre-boarding bustle", "harbor-travel quiet"],
            "settings": ["boarding lane stanchions", "departure gate sign", "boarding call monitor glow"]
          }
        },
        {
          "id": "transport_ferry_shop_early_lobby",
          "ja": "早朝の売店前が静かな船内ロビー",
          "links": {
            "base": ["ship lobby by kiosk"],
            "customize": ["early ship lobby hush", "morning sea-travel calm"],
            "settings": ["ferry kiosk glow", "marine route notice board", "soft deck carpet reflection"]
          }
        },
        {
          "id": "transport_ferry_rain_window_lounge",
          "ja": "雨粒が流れる船窓ラウンジ",
          "links": {
            "base": ["rainy ferry lounge seats"],
            "customize": ["rainy sea-window hush", "sea-light swaying hush"],
            "settings": ["rain-streaked ferry window", "window-side ferry sofas", "wide ferry windows"]
          }
        }
      ]
    }
  ],
  "base": [
    {
      "group": "🚉 駅・改札まわり",
      "items": [
        {"ja": "駅の改札ホール", "en": "station ticket gate hall"},
        {"ja": "駅待合室", "en": "station waiting room"},
        {"ja": "乗換コンコース", "en": "transfer concourse"},
        {"ja": "終電後の駅通路", "en": "late-night station corridor"},
        {"ja": "通勤改札レーン", "en": "commuter gate lanes"},
        {"ja": "深夜の待合隅", "en": "late-night waiting corner"},
        {"ja": "深夜の乗換コンコース", "en": "night transfer concourse"},
        {"ja": "ベンチ列のある待合エリア", "en": "bench-row station waiting area"},
        {"ja": "駅連絡通路", "en": "station link corridor"}
      ]
    },
    {
      "group": "✈ 空港ロビー・搭乗エリア",
      "items": [
        {"ja": "空港搭乗ゲートラウンジ", "en": "airport boarding gate lounge"},
        {"ja": "空港ターミナルロビー", "en": "airport terminal lobby"},
        {"ja": "空港窓際ラウンジ席", "en": "airport window lounge seats"},
        {"ja": "空港到着ロビー", "en": "airport arrivals lobby"},
        {"ja": "保安検査後の出発ラウンジ", "en": "post-security departure lounge"},
        {"ja": "搭乗ゲート通路", "en": "airport gate corridor"},
        {"ja": "手荷物受取ホール", "en": "airport baggage claim hall"},
        {"ja": "保安検査後ショッピング通路", "en": "post-security shopping concourse"}
      ]
    },
    {
      "group": "🚄 電車・新幹線車内",
      "items": [
        {"ja": "新幹線車内", "en": "shinkansen carriage"},
        {"ja": "通勤電車車内", "en": "commuter train interior"},
        {"ja": "電車の窓際席", "en": "window-side train seats"},
        {"ja": "新幹線通路", "en": "shinkansen aisle corridor"}
      
,
        {"ja": "静かな指定席車内", "en": "quiet reserved-seat carriage"},
        {"ja": "深夜の連結デッキ", "en": "midnight train connector deck"},
        {"ja": "停車前の新幹線デッキ", "en": "pre-stop shinkansen deck"},
        {"ja": "雪景色の窓際席", "en": "snow-view train window seats"},
        {"ja": "特急列車の通路席", "en": "express train aisle seats"}]
    },
    {
      "group": "🚌 バス・ターミナル待機",
      "items": [
        {"ja": "夜行バス車内", "en": "overnight coach interior"},
        {"ja": "バスターミナル待機席", "en": "bus terminal waiting seats"},
        {"ja": "長距離バス車内", "en": "long-distance bus interior"}
        ,{"ja": "サービスエリア前の停車車内", "en": "service-area stop coach interior"}
        ,{"ja": "前方席のあるバス車内", "en": "front-row bus seats"}
        ,{"ja": "深夜のバス通路", "en": "midnight coach aisle"}
        ,{"ja": "長距離バス乗り場", "en": "long-distance bus boarding bay"}
        ,{"ja": "朝の半空席バス車内", "en": "half-empty morning coach"}]
    },
    {
      "group": "⛴ フェリー・船内導線",
      "items": [
        {"ja": "フェリーラウンジ", "en": "ferry lounge"},
        {"ja": "船内通路", "en": "ferry interior corridor"},
        {"ja": "フェリー待合ロビー", "en": "ferry departure lobby"},
        {"ja": "窓際フェリーラウンジ", "en": "ferry window lounge seats"},
        {"ja": "毛布カートのある客室通路", "en": "cabin corridor with blanket cart"},
        {"ja": "乗船待機ラウンジ", "en": "boarding queue lounge"},
        {"ja": "売店前の船内ロビー", "en": "ship lobby by kiosk"},
        {"ja": "雨の船窓ラウンジ席", "en": "rainy ferry lounge seats"}
      ]
    }
  ],
  "customize": [
    {
      "group": "🚉 駅・通勤の空気",
      "items": [
        {"ja": "始発前の静けさ", "en": "pre-first-train stillness"},
        {"ja": "雨の日の駅待合の静けさ", "en": "rainy station waiting hush"},
        {"ja": "夕方の通勤流れ", "en": "evening commuter flow"},
        {"ja": "駅の速い人流", "en": "fast-moving station foot traffic"},
        {"ja": "終電後の静けさ", "en": "post-last-train quiet"},
        {"ja": "駅の空調の低い静けさ", "en": "air-conditioned station hush"},
        {"ja": "駅アナウンスの反響", "en": "soft platform announcement echo"},
        {"ja": "朝ラッシュ前の張りつめ", "en": "pre-rush station tension"},
        {"ja": "朝の通勤密度", "en": "morning commuter density"},
        {"ja": "自販機隅の深夜の静けさ", "en": "vending-corner midnight hush"},
        {"ja": "深夜コンコースの静けさ", "en": "after-midnight concourse hush"},
        {"ja": "天井に響く足音", "en": "footstep echo under station ceiling"},
        {"ja": "ベンチ列が静かな早朝", "en": "bench-row dawn stillness"},
        {"ja": "雨光のにじむ通路の静けさ", "en": "rain-lit station corridor hush"}
      ]
    },
    {
      "group": "✈ 空港・搭乗待機の空気",
      "items": [
        {"ja": "深夜ゲートの静けさ", "en": "late-night gate calm"},
        {"ja": "搭乗待機の張りつめ", "en": "boarding-wait tension"},
        {"ja": "朝のターミナルの明るさ", "en": "morning terminal brightness"},
        {"ja": "荷物が転がる空港の気配", "en": "rolling luggage ambience"},
        {"ja": "雨夜の空港窓際の静けさ", "en": "rain-lit airport stillness"},
        {"ja": "空港待機の静けさ", "en": "airport waiting silence"},
        {"ja": "到着後の静けさ", "en": "post-arrival quiet"},
        {"ja": "深夜ターミナルの静けさ", "en": "midnight terminal hush"},
        {"ja": "保安検査後の待機の静けさ", "en": "post-security waiting calm"},
        {"ja": "明け方のゲート通路の静けさ", "en": "pre-dawn gate corridor hush"},
        {"ja": "手荷物受取所の深夜の静けさ", "en": "midnight baggage-claim hush"},
        {"ja": "保安検査後通路のざわめき", "en": "duty-free passage murmur"},
        {"ja": "滑走路灯がにじむ雨夜の静けさ", "en": "runway-light rain-night hush"}
      ]
    },
    {
      "group": "🚄 車内・移動中の空気",
      "items": [
        {"ja": "夜の列車の静けさ", "en": "night train calm"},
        {"ja": "窓外が流れる移動の静けさ", "en": "window-streaked travel silence"},
        {"ja": "朝の通勤密度", "en": "morning commuter density"},
        {"ja": "揺れる車内通路の緊張", "en": "swaying train aisle tension"},
        {"ja": "雨の日の車内の静けさ", "en": "rainy train hush"},
        {"ja": "窓際移動の静けさ", "en": "window-side travel quiet"},
        {"ja": "夜明け前の車内の静けさ", "en": "pre-dawn carriage stillness"},
        {"ja": "走行中の低い静けさ", "en": "rolling travel hush"}
      
,
        {"ja": "指定席車両の早朝の静けさ", "en": "early reserved-car hush"},
        {"ja": "発車前のやわらかな車内静けさ", "en": "soft pre-departure carriage calm"},
        {"ja": "深夜の連結部の静けさ", "en": "midnight connector hush"},
        {"ja": "車輪音だけが続く移動感", "en": "rolling rail hum"},
        {"ja": "停車前のざわめき", "en": "pre-stop carriage stir"},
        {"ja": "扉前で待つ張りつめ", "en": "door-side waiting tension"},
        {"ja": "雪景色が流れる車窓の静けさ", "en": "snow-streaked window silence"},
        {"ja": "冬の車内の静けさ", "en": "winter carriage stillness"},
        {"ja": "車掌通過後の静けさ", "en": "after conductor pass hush"},
        {"ja": "足元に残る柔らかな歩行リズム", "en": "soft carriage footing rhythm"}]
    },
    {
      "group": "🚌 バス・長距離移動の空気",
      "items": [
        {"ja": "夜行バスの静けさ", "en": "overnight bus hush"},
        {"ja": "眠った車内の静けさ", "en": "sleeping cabin stillness"},
        {"ja": "発車前待機の静けさ", "en": "departure wait stillness"},
        {"ja": "ターミナルアナウンスの反響", "en": "terminal announcement echo"},
        {"ja": "昼の道路移動の落ち着き", "en": "daytime road travel calm"},
        {"ja": "日差しのある車内明るさ", "en": "sunlit bus interior"}
        ,{"ja": "明け方の車内の静けさ", "en": "pre-dawn coach hush"}
        ,{"ja": "休憩停車の静けさ", "en": "rest-stop pause stillness"}
        ,{"ja": "雨の停車中の静けさ", "en": "rainy stopover stillness"}
        ,{"ja": "ワイパーが止んだ後の静けさ", "en": "wiper-paused silence"}
        ,{"ja": "深夜高速の流れ", "en": "highway-night drift"}
        ,{"ja": "エンジン振動の低い静けさ", "en": "engine-vibration hush"}
        ,{"ja": "出発前の乗り場の張りつめ", "en": "pre-departure bus bay tension"}
        ,{"ja": "荷物積み込みのざわめき", "en": "luggage-loading bustle"}
        ,{"ja": "半分眠った朝の移動感", "en": "half-asleep morning ride"}
        ,{"ja": "朝のやわらかな車内光", "en": "soft dawn coach light"}]
    },
    {
      "group": "⛴ フェリー・船旅の空気",
      "items": [
        {"ja": "朝の船旅の静けさ", "en": "morning sea-travel calm"},
        {"ja": "フェリーラウンジの静けさ", "en": "soft ferry lounge hush"},
        {"ja": "深夜の船内静けさ", "en": "midnight shipboard hush"},
        {"ja": "船のエンジン低音の静けさ", "en": "engine-hum stillness"},
        {"ja": "乗船前の待機気配", "en": "pre-boarding ferry wait"},
        {"ja": "港から旅立つ静けさ", "en": "harbor-travel quiet"},
        {"ja": "夕暮れの海路の静けさ", "en": "sunset sea-route hush"},
        {"ja": "海光が揺れる窓際の静けさ", "en": "sea-light swaying hush"},
        {"ja": "夜行フェリー客室の静けさ", "en": "overnight ferry cabin hush"},
        {"ja": "乗船直前のざわめき", "en": "pre-boarding bustle"},
        {"ja": "早朝ロビーの静けさ", "en": "early ship lobby hush"},
        {"ja": "雨粒が流れる船窓の静けさ", "en": "rainy sea-window hush"}
      ]
    }
  ],
  "settings": [
    {
      "group": "🚉 駅・改札の細部",
      "items": [
        {"ja": "改札表示灯", "en": "ticket gate indicator lights"},
        {"ja": "空いた整列レーン", "en": "empty queue lanes"},
        {"ja": "時刻表表示の光", "en": "timetable display glow"},
        {"ja": "駅ベンチ列", "en": "station bench row"},
        {"ja": "雨に暗いホームガラス", "en": "rain-darkened platform glass"},
        {"ja": "自販機の角の灯り", "en": "vending machine corner glow"},
        {"ja": "頭上の駅案内板", "en": "overhead station signage"},
        {"ja": "床に伸びる荷物車輪跡", "en": "rolling luggage trail"},
        {"ja": "磨かれた駅床反射", "en": "clean station floor reflection"},
        {"ja": "閉じた売店シャッター", "en": "closed kiosk shutters"},
        {"ja": "減光した駅看板", "en": "half-dim station signs"},
        {"ja": "レーン床矢印", "en": "queue-lane floor arrows"},
        {"ja": "タッチ通過後の残光", "en": "tap-in beep afterglow"},
        {"ja": "空いたゴミ分別箱", "en": "empty station trash sorter"},
        {"ja": "待合室の壁掛け時計", "en": "wall clock over waiting room"},
        {"ja": "乗換案内板の光", "en": "transfer board glow"},
        {"ja": "天井の方向サイン", "en": "ceiling direction signs"},
        {"ja": "濡れた傘の吸水マット", "en": "wet umbrella drip mat"},
        {"ja": "やわらかな蛍光灯", "en": "soft fluorescent station lights"}
      ]
    },
    {
      "group": "✈ 空港の細部",
      "items": [
        {"ja": "ゲートモニターの光", "en": "gate monitor glow"},
        {"ja": "搭乗整列ポール", "en": "boarding lane stanchions"},
        {"ja": "滑走路の窓反射", "en": "runway window reflections"},
        {"ja": "大きなターミナルガラス壁", "en": "large terminal glass wall"},
        {"ja": "フライト表示板の光", "en": "flight board glow"},
        {"ja": "チェックインカウンター島", "en": "check-in counter islands"},
        {"ja": "空港ラウンジチェア", "en": "airport lounge chairs"},
        {"ja": "雨筋のついたターミナルガラス", "en": "rain-streaked terminal glass"},
        {"ja": "バゲージカートの列", "en": "baggage cart row"},
        {"ja": "到着表示板の光", "en": "arrivals display glow"},
        {"ja": "ターミナルカーペットの光溜まり", "en": "terminal carpet glow"},
        {"ja": "ゲート上の天井表示", "en": "ceiling gate signage"},
        {"ja": "動く歩道の足元灯", "en": "moving walkway lights"},
        {"ja": "窓際の滑走路灯", "en": "window-side runway glow"},
        {"ja": "手荷物受取コンベア", "en": "baggage carousel"},
        {"ja": "免税店ショーケースの光", "en": "duty-free showcase lights"},
        {"ja": "磨かれたターミナル床反射", "en": "polished terminal floor reflection"}
      ]
    },
    {
      "group": "🚄 車内設備・通路細部",
      "items": [
        {"ja": "新幹線シート列", "en": "shinkansen seat row"},
        {"ja": "頭上荷物棚", "en": "overhead luggage rack"},
        {"ja": "窓外の街明かり流れ", "en": "window city-light streaks"},
        {"ja": "吊り革列", "en": "hanging strap rows"},
        {"ja": "扉脇の立ちスペース", "en": "door-side standing space"},
        {"ja": "路線表示パネル", "en": "route display panel"},
        {"ja": "雨筋の車窓", "en": "rain-streaked carriage window"},
        {"ja": "座席肘掛け", "en": "seat armrests"},
        {"ja": "柔らかな車内灯", "en": "soft carriage lighting"},
        {"ja": "連結部ドア", "en": "carriage door connection"},
        {"ja": "通路床の足元灯", "en": "soft aisle floor lights"},
        {"ja": "閉じたテーブル列", "en": "closed tray table rows"}
      
,
        {"ja": "指定席ヘッドカバー", "en": "reserved seat headrest covers"},
        {"ja": "荷棚下の読書灯", "en": "under-rack reading lights"},
        {"ja": "朝焼けを受ける窓の光", "en": "soft dawn window glow"},
        {"ja": "連結部の蛇腹壁", "en": "accordion connector wall"},
        {"ja": "デッキ自動ドアの表示灯", "en": "deck door indicator light"},
        {"ja": "ゴム張りのデッキ床", "en": "rubberized deck floor"},
        {"ja": "扉脇の荷物棚", "en": "door-side luggage shelf"},
        {"ja": "到着表示のチャイム灯", "en": "arrival display chime glow"},
        {"ja": "車端の案内パネル", "en": "car-end information panel"},
        {"ja": "雪で白む車窓", "en": "snow-whitened train window"},
        {"ja": "曇った窓の縁", "en": "fogged glass edges"},
        {"ja": "座席ポケットの車内誌", "en": "seat pocket magazine rack"},
        {"ja": "特急車内の表示灯", "en": "express carriage indicator lights"},
        {"ja": "折りたたみ補助席", "en": "folded aisle jump seat"},
        {"ja": "連結部ドア案内板", "en": "door connection sign"}]
    },
    {
      "group": "🚌 バス・ターミナル細部",
      "items": [
        {"ja": "リクライニングバス席", "en": "reclining bus seats"},
        {"ja": "通路読書灯", "en": "aisle reading lights"},
        {"ja": "暗いカーテン窓", "en": "dark curtain windows"},
        {"ja": "ターミナルベンチ列", "en": "terminal bench row"},
        {"ja": "出発表示の光", "en": "departure board glow"},
        {"ja": "乗車口ドア", "en": "boarding platform doors"},
        {"ja": "座席ヘッドレストカバー", "en": "coach seat headrest covers"},
        {"ja": "窓際カーテン留め", "en": "window-side curtain tiebacks"},
        {"ja": "頭上送風口", "en": "overhead air vents"}
        ,{"ja": "通路側の曇った窓", "en": "fogged aisle window"}
        ,{"ja": "座席背の読書灯", "en": "seatback reading lights"}
        ,{"ja": "休憩所の光が差すカーテン隙間", "en": "rest-stop curtain gap glow"}
        ,{"ja": "雨粒が流れる前方ガラス", "en": "rain-streaked windshield"}
        ,{"ja": "運転席仕切りガラス", "en": "driver partition glass"}
        ,{"ja": "ダッシュボードの路線灯", "en": "dashboard route light"}
        ,{"ja": "足元の段差マーカー灯", "en": "aisle step marker lights"}
        ,{"ja": "頭上荷物棚", "en": "overhead luggage racks"}
        ,{"ja": "閉じたカーテン列", "en": "closed curtain rows"}
        ,{"ja": "乗り場の路線サイン", "en": "bus bay route sign"}
        ,{"ja": "荷室積み込みカート", "en": "luggage hold loading cart"}
        ,{"ja": "乗り場端の注意ライン", "en": "platform edge caution line"}
        ,{"ja": "傾いたネックピロー", "en": "tilted neck pillows"}
        ,{"ja": "窓の曇り弧", "en": "window condensation arcs"}
        ,{"ja": "座席背の毛布の折り目", "en": "seatback blanket folds"}]
    },
    {
      "group": "⛴ フェリー・船内細部",
      "items": [
        {"ja": "大きな船窓", "en": "wide ferry windows"},
        {"ja": "船内ラウンジ席", "en": "marine lounge seats"},
        {"ja": "海光の反射", "en": "sea-light reflections"},
        {"ja": "金属の船内通路壁", "en": "metal ferry corridor walls"},
        {"ja": "客室番号プレート", "en": "cabin number plates"},
        {"ja": "通路の細い足元灯", "en": "soft corridor strip lights"},
        {"ja": "乗船ゲート表示", "en": "departure gate sign"},
        {"ja": "積み重なった旅行ケース", "en": "stacked travel cases"},
        {"ja": "舷窓の夕焼け光", "en": "porthole sunset glow"},
        {"ja": "窓際フェリーソファ", "en": "window-side ferry sofas"},
        {"ja": "毛布カートの束", "en": "blanket cart stack"},
        {"ja": "乗船呼び出しモニターの光", "en": "boarding call monitor glow"},
        {"ja": "船内売店の灯り", "en": "ferry kiosk glow"},
        {"ja": "航路案内ボード", "en": "marine route notice board"},
        {"ja": "柔らかなデッキカーペット反射", "en": "soft deck carpet reflection"},
        {"ja": "雨粒の流れる船窓", "en": "rain-streaked ferry window"}
      ]
    }
  ]
}

,
{
  "id": "sports_facility_collection",
  "title": "🏟 スポーツ施設・競技会場特化コレクション",
  "subtitle": "陸上競技場・トラック、サッカー場・スタンド、野球場・球場、屋内アリーナ・体育館、バレーコート・観客席、体操競技場・器具体育館、バドミントン・屋内コート、卓球場・卓球ホール、テニスコート・観覧席、プール・水泳競技場、武道場・格闘技会場、ボクシングジム・リング会場、トレーニングジム・ウェイトルーム、スケートリンク・アイスアリーナまで、広さ、観客席、照明、試合前後の気配を多層で噛ませる、競技会場特化の背景コレクション",
  "complete": [
    {
      "group": "🏃 陸上競技場・トラック",
      "items": [
        {
          "id": "sports_track_twilight",
          "ja": "夕暮れの陸上トラック",
          "links": {
            "base": [
              "athletics track",
              "stadium lane curve"
            ],
            "customize": [
              "twilight stadium glow",
              "empty stadium hush",
              "trackside breeze"
            ],
            "settings": [
              "track lane markings",
              "stadium bleachers",
              "trackside cones"
            ]
          }
        },
        {
          "id": "sports_track_postrain",
          "ja": "雨上がりの競技場トラック",
          "links": {
            "base": [
              "athletics track",
              "starting line area"
            ],
            "customize": [
              "post-rain track sheen",
              "wet stadium air",
              "quiet after-rain stadium"
            ],
            "settings": [
              "wet rubber track sheen",
              "stadium floodlights",
              "drain grates by track"
            ]
          }
        },
        {
          "id": "sports_track_earlymorning",
          "ja": "早朝の無人トラック",
          "links": {
            "base": [
              "athletics track",
              "trackside stand edge"
            ],
            "customize": [
              "early-morning track chill",
              "empty stadium hush",
              "morning field brightness"
            ],
            "settings": [
              "track lane markings",
              "starting blocks",
              "morning mist above field"
            ]
          }
        },
        {
          "id": "sports_track_relay",
          "ja": "リレー前のレーン整列",
          "links": {
            "base": [
              "relay exchange zone",
              "athletics track"
            ],
            "customize": [
              "relay meet tension",
              "pre-match stillness",
              "stadium anticipation"
            ],
            "settings": [
              "baton exchange marks",
              "starting blocks",
              "lap counter board"
            ]
          }
        },
        {
          "id": "sports_track_night",
          "ja": "ナイター照明の陸上競技場",
          "links": {
            "base": [
              "athletics track",
              "stadium lane curve"
            ],
            "customize": [
              "night-game stadium electricity",
              "cool night field air",
              "stadium anticipation"
            ],
            "settings": [
              "stadium floodlights",
              "track lane markings",
              "scoreboard glow"
            ]
          }
        },
        {
          "id": "sports_track_morning_mist",
          "ja": "朝靄の残る陸上トラック",
          "links": {
            "base": [
              "athletics track",
              "track straightaway"
            ],
            "customize": [
              "early-morning track chill",
              "empty stadium hush",
              "trackside breeze"
            ],
            "settings": [
              "morning mist above field",
              "track lane markings",
              "lap counter board"
            ]
          }
        },
        {
          "id": "sports_track_noon_heat",
          "ja": "炎天下の真昼のトラック",
          "links": {
            "base": [
              "athletics track",
              "track straightaway"
            ],
            "customize": [
              "midday track heat",
              "white midday stadium glare",
              "open stadium air"
            ],
            "settings": [
              "sun-bleached lane surface",
              "track lane markings",
              "trackside cones"
            ]
          }
        },
        {
          "id": "sports_track_startline_tension",
          "ja": "スタート前の張りつめるスタートライン",
          "links": {
            "base": [
              "starting line area",
              "athletics track"
            ],
            "customize": [
              "pre-start line tension",
              "pre-match stillness",
              "stadium anticipation"
            ],
            "settings": [
              "starting blocks",
              "lane number markers",
              "starter stand"
            ]
          }
        },
        {
          "id": "sports_track_exchange_ready",
          "ja": "バトン受け渡し直前のリレーゾーン",
          "links": {
            "base": [
              "relay exchange zone",
              "athletics track"
            ],
            "customize": [
              "relay meet tension",
              "baton-exchange urgency",
              "crowd-held breath hush"
            ],
            "settings": [
              "baton exchange marks",
              "relay baton rack",
              "lap counter board"
            ]
          }
        },
        {
          "id": "sports_track_after_event",
          "ja": "試合後の静かなレーン",
          "links": {
            "base": [
              "athletics track",
              "trackside stand edge"
            ],
            "customize": [
              "after-game stadium hush",
              "empty-seat hush",
              "cool night field air"
            ],
            "settings": [
              "discarded water bottles by lane",
              "track lane markings",
              "stadium bleachers"
            ]
          }
        },
        {
          "id": "sports_track_hurdle_night",
          "ja": "夜の照明に浮くハードル練習場",
          "links": {
            "base": [
              "hurdle setup lane",
              "athletics track"
            ],
            "customize": [
              "night-game stadium electricity",
              "track practice focus",
              "stadium echo"
            ],
            "settings": [
              "hurdle row",
              "stadium floodlights",
              "track lane markings"
            ]
          }
        }
      ]
    },
    {
      "group": "⚽ サッカー場・スタンド",
      "items": [
        {
          "id": "sports_soccer_day",
          "ja": "昼の芝ピッチ",
          "links": {
            "base": [
              "soccer pitch",
              "center-circle view"
            ],
            "customize": [
              "daytime pitch brightness",
              "fresh-cut grass scent",
              "open stadium air"
            ],
            "settings": [
              "cut grass stripes",
              "center-circle marking",
              "goal net"
            ]
          }
        },
        {
          "id": "sports_soccer_night",
          "ja": "ナイターのサッカー場",
          "links": {
            "base": [
              "soccer pitch",
              "supporter-stand side"
            ],
            "customize": [
              "night-game stadium electricity",
              "supporter-stand energy",
              "cool night field air"
            ],
            "settings": [
              "stadium floodlights",
              "goal net",
              "support banners"
            ]
          }
        },
        {
          "id": "sports_soccer_rain_goal",
          "ja": "雨のゴール前",
          "links": {
            "base": [
              "goalmouth sideline",
              "soccer pitch"
            ],
            "customize": [
              "rainy stadium air",
              "wet field hush",
              "goalmouth tension"
            ],
            "settings": [
              "wet turf sheen",
              "goal net",
              "sideline equipment box"
            ]
          }
        },
        {
          "id": "sports_soccer_prematch",
          "ja": "試合前の静かなスタンド",
          "links": {
            "base": [
              "supporter-stand side",
              "player tunnel frontage"
            ],
            "customize": [
              "pre-match stillness",
              "stadium anticipation",
              "empty-seat hush"
            ],
            "settings": [
              "stadium bleachers",
              "support banners",
              "player tunnel lighting"
            ]
          }
        },
        {
          "id": "sports_soccer_concourse",
          "ja": "応援席が見える通路側",
          "links": {
            "base": [
              "supporter-stand side",
              "stadium concourse walkway"
            ],
            "customize": [
              "concourse crowd flow",
              "supporter-stand energy",
              "stadium echo"
            ],
            "settings": [
              "stadium bleachers",
              "guard rails",
              "stadium concourse signs"
            ]
          }
        },
        {
          "id": "sports_soccer_twilight_training",
          "ja": "夕暮れの練習中スタジアム",
          "links": {
            "base": [
              "touchline bench area",
              "soccer pitch"
            ],
            "customize": [
              "twilight stadium glow",
              "pregame warmup buzz",
              "open stadium air"
            ],
            "settings": [
              "training cones on grass",
              "sideline bench shelter",
              "cut grass stripes"
            ]
          }
        },
        {
          "id": "sports_soccer_penalty_tension",
          "ja": "PK前の張りつめたゴール前",
          "links": {
            "base": [
              "goalmouth sideline",
              "soccer pitch"
            ],
            "customize": [
              "goalmouth tension",
              "crowd-held breath hush",
              "stadium anticipation"
            ],
            "settings": [
              "goal net",
              "penalty spot mark",
              "sideline equipment box"
            ]
          }
        },
        {
          "id": "sports_soccer_rain_night_pitch",
          "ja": "雨夜のナイター照明ピッチ",
          "links": {
            "base": [
              "soccer pitch",
              "goal-behind stand"
            ],
            "customize": [
              "rainy stadium air",
              "night-game stadium electricity",
              "wet field hush"
            ],
            "settings": [
              "wet turf sheen",
              "stadium floodlights",
              "goal net"
            ]
          }
        },
        {
          "id": "sports_soccer_home_stand_flags",
          "ja": "旗が揺れるホーム側スタンド",
          "links": {
            "base": [
              "home-stand lower seats",
              "supporter-stand side"
            ],
            "customize": [
              "supporter-stand energy",
              "matchday banner flutter",
              "open stadium air"
            ],
            "settings": [
              "support banners",
              "stadium bleachers",
              "guard rails"
            ]
          }
        },
        {
          "id": "sports_soccer_halftime_concourse",
          "ja": "ハーフタイムの売店通路",
          "links": {
            "base": [
              "stadium concession concourse",
              "stadium concourse walkway"
            ],
            "customize": [
              "halftime concourse bustle",
              "concourse crowd flow",
              "stadium echo"
            ],
            "settings": [
              "concession counters",
              "stadium concourse signs",
              "guard rails"
            ]
          }
        },
        {
          "id": "sports_soccer_aftermatch_stand",
          "ja": "試合後の紙テープが残るスタンド",
          "links": {
            "base": [
              "home-stand lower seats",
              "supporter-stand side"
            ],
            "customize": [
              "after-game stadium hush",
              "empty-seat hush",
              "supporter-stand energy"
            ],
            "settings": [
              "stadium bleachers",
              "scattered paper streamers",
              "support banners"
            ]
          }
        }
      ]
    },
    {
      "group": "⚾ 野球場・球場",
      "items": [
        {
          "id": "sports_baseball_daygame",
          "ja": "デーゲームの球場",
          "links": {
            "base": [
              "baseball stadium seating",
              "infield viewing side"
            ],
            "customize": [
              "day-game stadium brightness",
              "ballpark crowd buzz",
              "summer stadium heat"
            ],
            "settings": [
              "baseball infield dirt",
              "foul netting",
              "scoreboard glow"
            ]
          }
        },
        {
          "id": "sports_baseball_night",
          "ja": "ナイター照明の内野席",
          "links": {
            "base": [
              "infield viewing side",
              "baseball stadium seating"
            ],
            "customize": [
              "night-game stadium electricity",
              "ballpark crowd buzz",
              "cool night field air"
            ],
            "settings": [
              "stadium floodlights",
              "baseball infield dirt",
              "dugout rail"
            ]
          }
        },
        {
          "id": "sports_baseball_bullpen",
          "ja": "ブルペン横の通路",
          "links": {
            "base": [
              "bullpen-side walkway",
              "outfield concourse"
            ],
            "customize": [
              "bullpen-side tension",
              "concourse crowd flow",
              "stadium echo"
            ],
            "settings": [
              "bullpen fence",
              "guard rails",
              "stadium concourse signs"
            ]
          }
        },
        {
          "id": "sports_baseball_concourse",
          "ja": "売店が光るコンコース",
          "links": {
            "base": [
              "outfield concourse",
              "baseball stadium seating"
            ],
            "customize": [
              "concession-stand glow",
              "ballpark crowd buzz",
              "night-game stadium electricity"
            ],
            "settings": [
              "concession counters",
              "stadium concourse signs",
              "scoreboard glow"
            ]
          }
        },
        {
          "id": "sports_baseball_empty",
          "ja": "試合後の静かな球場席",
          "links": {
            "base": [
              "baseball stadium seating",
              "infield viewing side"
            ],
            "customize": [
              "after-game stadium hush",
              "empty-seat hush",
              "cool night field air"
            ],
            "settings": [
              "stadium bleachers",
              "discard cup holders",
              "scoreboard glow"
            ]
          }
        },
        {
          "id": "sports_baseball_summer_daygame",
          "ja": "夏のデーゲーム球場",
          "links": {
            "base": [
              "baseball stadium seating",
              "infield viewing side"
            ],
            "customize": [
              "day-game stadium brightness",
              "white summer day-game heat",
              "ballpark crowd buzz"
            ],
            "settings": [
              "baseball infield dirt",
              "foul netting",
              "stadium bleachers"
            ]
          }
        },
        {
          "id": "sports_baseball_rainy_dugout",
          "ja": "雨でぬれたベンチ前",
          "links": {
            "base": [
              "dugout-front aisle",
              "infield viewing side"
            ],
            "customize": [
              "rainy dugout-front sheen",
              "rainy stadium air",
              "dugout-front tension"
            ],
            "settings": [
              "dugout rail",
              "wet bench-step sheen",
              "foul netting"
            ]
          }
        },
        {
          "id": "sports_baseball_seventh_inning_concourse",
          "ja": "七回裏前の賑わう通路",
          "links": {
            "base": [
              "outfield concourse",
              "baseball stadium seating"
            ],
            "customize": [
              "seventh-inning swell",
              "concourse crowd flow",
              "concession-stand glow"
            ],
            "settings": [
              "concession counters",
              "paper concession trays",
              "stadium concourse signs"
            ]
          }
        },
        {
          "id": "sports_baseball_outfield_breeze",
          "ja": "外野席の風が抜ける球場",
          "links": {
            "base": [
              "outfield bleachers",
              "baseball stadium seating"
            ],
            "customize": [
              "outfield-stand breeze",
              "open stadium air",
              "ballpark crowd buzz"
            ],
            "settings": [
              "outfield wall padding",
              "scoreboard glow",
              "stadium bleachers"
            ]
          }
        },
        {
          "id": "sports_baseball_pregame_dugout",
          "ja": "試合前練習が見えるベンチ前",
          "links": {
            "base": [
              "dugout-front aisle",
              "infield viewing side"
            ],
            "customize": [
              "pregame warmup buzz",
              "stadium anticipation",
              "dugout-front tension"
            ],
            "settings": [
              "dugout rail",
              "bullpen fence",
              "foul netting"
            ]
          }
        }
      ]
    },
    {
      "group": "🏀 屋内アリーナ・体育館",
      "items": [
        {
          "id": "sports_arena_pregame",
          "ja": "試合前の静かなアリーナ",
          "links": {
            "base": [
              "indoor arena court",
              "arena entry tunnel"
            ],
            "customize": [
              "pre-match stillness",
              "arena light wash",
              "hollow arena echo"
            ],
            "settings": [
              "hanging scoreboard",
              "court boundary lines",
              "arena seat rows"
            ]
          }
        },
        {
          "id": "sports_arena_basketball",
          "ja": "照明の強いバスケコート",
          "links": {
            "base": [
              "indoor arena court",
              "basketball baseline seats"
            ],
            "customize": [
              "bright arena light wash",
              "indoor crowd swell",
              "hollow arena echo"
            ],
            "settings": [
              "basketball hoop stanchion",
              "court boundary lines",
              "shot clock glow"
            ]
          }
        },
        {
          "id": "sports_arena_gym",
          "ja": "観客席つき体育館",
          "links": {
            "base": [
              "gymnasium bleachers",
              "indoor arena court"
            ],
            "customize": [
              "gymnasium game-day buzz",
              "bright arena light wash",
              "indoor shoe-squeak energy"
            ],
            "settings": [
              "folded bleacher sections",
              "court boundary lines",
              "bench seating row"
            ]
          }
        },
        {
          "id": "sports_arena_aftergame",
          "ja": "試合後の静かな屋内アリーナ",
          "links": {
            "base": [
              "indoor arena court",
              "arena concourse"
            ],
            "customize": [
              "after-game arena hush",
              "hollow arena echo",
              "cool indoor air"
            ],
            "settings": [
              "stacked folding chairs",
              "hanging scoreboard",
              "wiped wooden court sheen"
            ]
          }
        },
        {
          "id": "sports_arena_tunnel",
          "ja": "入場前の選手トンネル",
          "links": {
            "base": [
              "arena entry tunnel",
              "arena concourse"
            ],
            "customize": [
              "player-entry tunnel tension",
              "pre-match stillness",
              "cool indoor air"
            ],
            "settings": [
              "entry tunnel railings",
              "arena signage boards",
              "floor guide tape"
            ]
          }
        },
        {
          "id": "sports_arena_crowdentry",
          "ja": "観客が入り始めたアリーナ",
          "links": {
            "base": [
              "arena concourse",
              "indoor arena court"
            ],
            "customize": [
              "arena light wash",
              "crowd trickle before tipoff",
              "pre-match stillness"
            ],
            "settings": [
              "arena seat rows",
              "arena signage boards",
              "hanging scoreboard"
            ]
          }
        },
        {
          "id": "sports_arena_halftime",
          "ja": "ハーフタイムの照明が落ちたアリーナ",
          "links": {
            "base": [
              "indoor arena court",
              "arena concourse"
            ],
            "customize": [
              "dimmed halftime arena light",
              "halftime concourse bustle",
              "hollow arena echo"
            ],
            "settings": [
              "dimmed scoreboard glow",
              "court boundary lines",
              "arena seat rows"
            ]
          }
        },
        {
          "id": "sports_arena_volleyball",
          "ja": "バレーボール用ネットが張られた体育館",
          "links": {
            "base": [
              "volleyball setup gym floor",
              "gymnasium bleachers"
            ],
            "customize": [
              "gymnasium game-day buzz",
              "bright arena light wash",
              "indoor shoe-squeak energy"
            ],
            "settings": [
              "volleyball net posts",
              "court boundary lines",
              "bench seating row"
            ]
          }
        },
        {
          "id": "sports_arena_practice",
          "ja": "練習中の無人観客席つきアリーナ",
          "links": {
            "base": [
              "indoor arena court",
              "lower bowl aisle"
            ],
            "customize": [
              "practice-ball echo",
              "empty-seat hush",
              "bright arena light wash"
            ],
            "settings": [
              "arena seat rows",
              "courtside towel pile",
              "wiped wooden court sheen"
            ]
          }
        },
        {
          "id": "sports_arena_woodfloor",
          "ja": "木床が光る夕方の体育館",
          "links": {
            "base": [
              "gymnasium bleachers",
              "scorer table sideline"
            ],
            "customize": [
              "late-afternoon gym glow",
              "cool indoor air",
              "wood-floor hush"
            ],
            "settings": [
              "polished wood floor glare",
              "folded bleacher sections",
              "scorer table monitor glow"
            ]
          }
        },
        {
          "id": "sports_basketball_pretipoff",
          "ja": "試合開始前のバスケットコート",
          "links": {
            "base": [
              "indoor arena court",
              "center circle"
            ],
            "customize": [
              "basketball pre-tipoff tension",
              "bright arena light wash",
              "court-ready hush"
            ],
            "settings": [
              "center circle marking",
              "basketball hoop stanchion",
              "shot clock glow"
            ]
          }
        },
        {
          "id": "sports_basketball_tipoff",
          "ja": "ジャンプボール直前のセンターサークル",
          "links": {
            "base": [
              "center circle",
              "indoor arena court"
            ],
            "customize": [
              "tipoff silence",
              "bright arena light wash",
              "crowd-filling-up energy"
            ],
            "settings": [
              "center circle marking",
              "shot clock glow",
              "scoreboard glow"
            ]
          }
        },
        {
          "id": "sports_basketball_paintaction",
          "ja": "ゴール下が熱い試合中のアリーナ",
          "links": {
            "base": [
              "under-the-hoop paint area",
              "courtside seating"
            ],
            "customize": [
              "under-the-hoop intensity",
              "basketball-game electricity",
              "indoor shoe-squeak energy"
            ],
            "settings": [
              "basketball hoop stanchion",
              "backboard support frame",
              "sweat-marked wood floor"
            ]
          }
        },
        {
          "id": "sports_basketball_halftimequiet",
          "ja": "ハーフタイムの静かなバスケコート",
          "links": {
            "base": [
              "indoor arena court",
              "scorer table sideline"
            ],
            "customize": [
              "halftime lull",
              "dimmed halftime arena light",
              "quiet gym floor reflections"
            ],
            "settings": [
              "scorer table monitor glow",
              "courtside towel pile",
              "court mopping streaks"
            ]
          }
        },
        {
          "id": "sports_basketball_aftersweat",
          "ja": "試合後の汗が残る木床",
          "links": {
            "base": [
              "free-throw line area",
              "indoor arena court"
            ],
            "customize": [
              "post-game hardwood heat",
              "after-game arena hush",
              "quiet gym floor reflections"
            ],
            "settings": [
              "sweat-marked wood floor",
              "wiped wooden court sheen",
              "drink bottle row"
            ]
          }
        },
        {
          "id": "sports_basketball_eveningpractice",
          "ja": "夕方練習中の無人アリーナ",
          "links": {
            "base": [
              "indoor arena court",
              "backboard-behind lane"
            ],
            "customize": [
              "practice-drill echo",
              "late-afternoon gym glow",
              "empty-arena practice focus"
            ],
            "settings": [
              "backboard support frame",
              "court boundary lines",
              "polished wood floor glare"
            ]
          }
        },
        {
          "id": "sports_basketball_benchtension",
          "ja": "ベンチ前が張りつめたコートサイド",
          "links": {
            "base": [
              "bench-side sideline",
              "courtside seating"
            ],
            "customize": [
              "bench-side tension",
              "basketball pre-tipoff tension",
              "indoor crowd swell"
            ],
            "settings": [
              "bench seating row",
              "drink bottle row",
              "court boundary lines"
            ]
          }
        },
        {
          "id": "sports_basketball_nightgame",
          "ja": "観客が埋まり始めたナイトゲーム",
          "links": {
            "base": [
              "courtside seating",
              "indoor arena court"
            ],
            "customize": [
              "night-game artificial light",
              "crowd-filling-up energy",
              "basketball-game electricity"
            ],
            "settings": [
              "arena seat rows",
              "scoreboard glow",
              "shot clock glow"
            ]
          }
        }
      ]
    },
    {
      "group": "🏐 バレーコート・観客席",
      "items": [
        {
          "id": "sports_volleyball_pregame",
          "ja": "試合前の静かなバレーコート",
          "links": {
            "base": [
              "volleyball court",
              "volleyball net center court"
            ],
            "customize": [
              "bright volleyball court light",
              "pre-match volleyball hush",
              "indoor court focus"
            ],
            "settings": [
              "tensioned volleyball net",
              "attack line markings",
              "referee stand"
            ]
          }
        },
        {
          "id": "sports_volleyball_serve_ready",
          "ja": "サーブ前に張りつめたエンドライン",
          "links": {
            "base": [
              "volleyball endline zone",
              "volleyball court"
            ],
            "customize": [
              "pre-serve tension",
              "volleyball crowd hush",
              "indoor court focus"
            ],
            "settings": [
              "service zone markings",
              "tensioned volleyball net",
              "line judge flags"
            ]
          }
        },
        {
          "id": "sports_volleyball_crowd_watch",
          "ja": "観客が見守る屋内バレー会場",
          "links": {
            "base": [
              "volleyball court",
              "gym volleyball bleachers"
            ],
            "customize": [
              "crowd-filling-up energy",
              "volleyball crowd hush",
              "bright volleyball court light"
            ],
            "settings": [
              "volleyball scorer table",
              "folded bleacher sections",
              "tensioned volleyball net"
            ]
          }
        },
        {
          "id": "sports_volleyball_halftime_hush",
          "ja": "ハーフタイムの静かなバレーコート",
          "links": {
            "base": [
              "volleyball net center court",
              "scorer-table volleyball sideline"
            ],
            "customize": [
              "halftime volleyball hush",
              "quiet gym floor reflections",
              "indoor court focus"
            ],
            "settings": [
              "volleyball scorer table",
              "attack line markings",
              "rolling ball cart"
            ]
          }
        },
        {
          "id": "sports_volleyball_practice_echo",
          "ja": "練習ボールが響く体育館",
          "links": {
            "base": [
              "volleyball practice gym floor",
              "volleyball bench-side court"
            ],
            "customize": [
              "volleyball drill echo",
              "evening volleyball gym glow",
              "indoor court focus"
            ],
            "settings": [
              "volleyball antenna posts",
              "rolling ball cart",
              "line judge flags"
            ]
          }
        },
        {
          "id": "sports_volleyball_postmatch",
          "ja": "試合後のネット越しの静かなコート",
          "links": {
            "base": [
              "volleyball net center court",
              "volleyball court"
            ],
            "customize": [
              "post-match volleyball hush",
              "quiet gym floor reflections",
              "court-ready hush"
            ],
            "settings": [
              "tensioned volleyball net",
              "polished wood floor glare",
              "court mopping streaks"
            ]
          }
        }
      ]
    },
    {
      "group": "🏸 バドミントン・屋内コート",
      "items": [
        {
          "id": "sports_badminton_morning_hall",
          "ja": "朝の静かなバドミントンコート",
          "links": {
            "base": [
              "indoor badminton court",
              "tournament hall side aisle"
            ],
            "customize": [
              "morning badminton hall light",
              "pre-match badminton hush",
              "indoor hall air suspension"
            ],
            "settings": [
              "badminton net posts",
              "polished badminton floor",
              "shuttle tube basket"
            ]
          }
        },
        {
          "id": "sports_badminton_preserve",
          "ja": "サービス前に張りつめたサービスコート",
          "links": {
            "base": [
              "badminton service court",
              "center-court badminton setup"
            ],
            "customize": [
              "pre-serve badminton tension",
              "focused badminton silence",
              "spotlighted court focus"
            ],
            "settings": [
              "service line markings",
              "badminton net tape",
              "umpire high chair"
            ]
          }
        },
        {
          "id": "sports_badminton_flying_shuttle",
          "ja": "シャトルが舞う屋内バドミントンコート",
          "links": {
            "base": [
              "indoor badminton court",
              "court-side bench area"
            ],
            "customize": [
              "bright badminton hall lighting",
              "indoor draft feather drift",
              "rally echo in hall"
            ],
            "settings": [
              "shuttle tube basket",
              "court-side towel chair",
              "badminton net posts"
            ]
          }
        },
        {
          "id": "sports_badminton_centercourt",
          "ja": "観客が見守るセンターコート",
          "links": {
            "base": [
              "center-court badminton setup",
              "sidelines viewing seats"
            ],
            "customize": [
              "spectator hush around court",
              "tournament hall buzz",
              "spotlighted court focus"
            ],
            "settings": [
              "small court bleachers",
              "scoreboard panel glow",
              "line judge stool"
            ]
          }
        },
        {
          "id": "sports_badminton_postpractice",
          "ja": "練習後の静かなバドミントンホール",
          "links": {
            "base": [
              "indoor badminton court",
              "tournament hall side aisle"
            ],
            "customize": [
              "post-practice badminton hush",
              "sweat-cooled gym air",
              "badminton shuttle after-echo"
            ],
            "settings": [
              "scattered shuttlecocks",
              "folded divider curtains",
              "court-side mop marks"
            ]
          }
        },
        {
          "id": "sports_badminton_night",
          "ja": "ナイター照明のバドミントン会場",
          "links": {
            "base": [
              "center-court badminton setup",
              "sidelines viewing seats"
            ],
            "customize": [
              "night badminton court light",
              "indoor court focus",
              "match-call hush"
            ],
            "settings": [
              "overhead court lights",
              "scoreboard panel glow",
              "polished badminton floor"
            ]
          }
        }
      ]
    },
    {
      "group": "🎾 テニスコート・観覧席",
      "items": [
        {
          "id": "sports_tennis_day_court",
          "ja": "青空の屋外テニスコート",
          "links": {
            "base": [
              "outdoor tennis court",
              "baseline backcourt"
            ],
            "customize": [
              "clear daytime court light",
              "open court breeze",
              "sunlit match focus"
            ],
            "settings": [
              "center service line",
              "chain-link court fence",
              "umpire chair"
            ]
          }
        },
        {
          "id": "sports_tennis_twilight",
          "ja": "夕暮れのテニスコート",
          "links": {
            "base": [
              "outdoor tennis court",
              "sideline spectator stand"
            ],
            "customize": [
              "twilight court glow",
              "spectator-held hush",
              "open court breeze"
            ],
            "settings": [
              "center-court bleachers",
              "scoreboard panel glow",
              "court-side bench"
            ]
          }
        },
        {
          "id": "sports_tennis_postrain",
          "ja": "雨上がりのハードコート",
          "links": {
            "base": [
              "hard-court baseline",
              "fence-side walkway"
            ],
            "customize": [
              "post-rain hard-court sheen",
              "damp court hush",
              "open court breeze"
            ],
            "settings": [
              "wet hard-court glare",
              "chain-link court fence",
              "ball cart"
            ]
          }
        },
        {
          "id": "sports_tennis_prematch_seats",
          "ja": "試合前の静かな観覧席",
          "links": {
            "base": [
              "center-court seating",
              "sideline spectator stand"
            ],
            "customize": [
              "pre-match stillness",
              "spectator-held hush",
              "center-court focus"
            ],
            "settings": [
              "center-court bleachers",
              "scoreboard panel glow",
              "guard rails"
            ]
          }
        },
        {
          "id": "sports_tennis_preserve_baseline",
          "ja": "サーブ前に張りつめたベースライン",
          "links": {
            "base": [
              "baseline backcourt",
              "outdoor tennis court"
            ],
            "customize": [
              "pre-serve tension",
              "center-court focus",
              "sunlit match focus"
            ],
            "settings": [
              "center service line",
              "net center strap",
              "tennis ball basket"
            ]
          }
        },
        {
          "id": "sports_tennis_night",
          "ja": "ナイター照明のテニスコート",
          "links": {
            "base": [
              "night-lit tennis court",
              "fence-side walkway"
            ],
            "customize": [
              "night tennis floodlights",
              "night-court hush",
              "ball-strike echo"
            ],
            "settings": [
              "court floodlights",
              "chain-link court fence",
              "umpire chair"
            ]
          }
        }
      ]
    },
    {
      "group": "🏊 プール・水泳競技場",
      "items": [
        {
          "id": "sports_pool_morning_still",
          "ja": "朝の静かな屋内プール",
          "links": {
            "base": [
              "indoor competition pool",
              "natatorium bleachers"
            ],
            "customize": [
              "dawn natatorium light",
              "pre-race stillness",
              "cool natatorium air"
            ],
            "settings": [
              "natatorium floodlights",
              "poolside bleachers",
              "water ripple reflections"
            ]
          }
        },
        {
          "id": "sports_pool_start_ready",
          "ja": "スタート直前の競泳レーン",
          "links": {
            "base": [
              "starting-block lanes",
              "indoor competition pool"
            ],
            "customize": [
              "bright natatorium light",
              "pre-race stillness",
              "humid chlorine air"
            ],
            "settings": [
              "starting blocks",
              "lane ropes",
              "backstroke flags"
            ]
          }
        },
        {
          "id": "sports_pool_relay_ready",
          "ja": "リレー前のプールサイド",
          "links": {
            "base": [
              "pool-deck relay zone",
              "poolside deck walkway"
            ],
            "customize": [
              "bright natatorium light",
              "relay exchange anticipation",
              "splash mist in the air"
            ],
            "settings": [
              "starting blocks",
              "timing board glow",
              "poolside drain grates"
            ]
          }
        },
        {
          "id": "sports_pool_night_meet",
          "ja": "ナイトミートの水泳競技場",
          "links": {
            "base": [
              "indoor competition pool",
              "poolside spectator lane"
            ],
            "customize": [
              "blue evening pool glow",
              "swim-meet crowd murmur",
              "water-slap echo"
            ],
            "settings": [
              "natatorium floodlights",
              "lap scoreboard glow",
              "poolside bleachers"
            ]
          }
        },
        {
          "id": "sports_pool_turnend_splash",
          "ja": "飛沫が光るターン側レーン",
          "links": {
            "base": [
              "turn-end lane side",
              "starting-block lanes"
            ],
            "customize": [
              "reflected pool-light shimmer",
              "pre-race stillness",
              "splash mist in the air"
            ],
            "settings": [
              "turn wall touchpads",
              "lane ropes",
              "wet tile reflections"
            ]
          }
        },
        {
          "id": "sports_pool_after_meet",
          "ja": "試合後の静かなプールサイド",
          "links": {
            "base": [
              "poolside deck walkway",
              "natatorium bleachers"
            ],
            "customize": [
              "blue evening pool glow",
              "post-race poolside hush",
              "lane-rope ripple hush"
            ],
            "settings": [
              "poolside drain grates",
              "stacked kickboards",
              "water ripple reflections"
            ]
          }
        }
      ]
    },
    {
      "group": "🥋 武道場・格闘技会場",
      "items": [
        {
          "id": "sports_dojo_morning_still",
          "ja": "朝の静かな武道場",
          "links": {
            "base": [
              "tatami dojo",
              "dojo front side"
            ],
            "customize": [
              "dawn dojo light",
              "dojo stillness",
              "tatami-air hush"
            ],
            "settings": [
              "tatami seam pattern",
              "dojo hanging calligraphy",
              "wooden weapon rack"
            ]
          }
        },
        {
          "id": "sports_dojo_evening_slant",
          "ja": "夕方の差し光が入る道場",
          "links": {
            "base": [
              "wood-floor dojo",
              "dojo front side"
            ],
            "customize": [
              "evening dojo slant light",
              "focused dojo silence",
              "wood-floor footfall echo"
            ],
            "settings": [
              "polished dojo wood floor",
              "high dojo windows",
              "wall-length dojo mirror"
            ]
          }
        },
        {
          "id": "sports_fightarena_prematch",
          "ja": "試合前の静かな格闘技会場",
          "links": {
            "base": [
              "combat arena ringside",
              "fight arena seating"
            ],
            "customize": [
              "pre-fight arena tension",
              "crowd-before-bout murmur",
              "fight-spotlight glow"
            ],
            "settings": [
              "fight ring ropes",
              "red-blue corner pads",
              "fight spotlight rig"
            ]
          }
        },
        {
          "id": "sports_fightarena_walkout",
          "ja": "入場前の格闘技会場通路",
          "links": {
            "base": [
              "combat entry walkway",
              "fight arena seating"
            ],
            "customize": [
              "walkout-before-bout tension",
              "crowd-before-bout murmur",
              "concrete-arena reverb"
            ],
            "settings": [
              "walkout tunnel lights",
              "entry barricades",
              "fight poster wall"
            ]
          }
        },
        {
          "id": "sports_dojo_training_floor",
          "ja": "木床が鳴る稽古中の道場",
          "links": {
            "base": [
              "wood-floor dojo",
              "dojo center practice zone"
            ],
            "customize": [
              "practice-footwork echoes",
              "focused dojo silence",
              "wood-floor footfall echo"
            ],
            "settings": [
              "polished dojo wood floor",
              "stacked practice mats",
              "wall-length dojo mirror"
            ]
          }
        },
        {
          "id": "sports_fightarena_postmatch",
          "ja": "大会後の静かな格闘技会場",
          "links": {
            "base": [
              "combat arena ringside",
              "fight arena seating"
            ],
            "customize": [
              "post-fight arena hush",
              "arena-cleanup hush",
              "fight-spotlight glow"
            ],
            "settings": [
              "folded fight stools",
              "fight ring ropes",
              "walkout tunnel lights"
            ]
          }
        }
      ]
    },
    {
      "group": "🥊 ボクシングジム・リング会場",
      "items": [
        {
          "id": "sports_boxing_ring_pregame",
          "ja": "試合前の静かなボクシングリング",
          "links": {
            "base": [
              "boxing ring",
              "center ring canvas"
            ],
            "customize": [
              "pre-fight ring hush",
              "ringside tension",
              "hard white gym light"
            ],
            "settings": [
              "ring ropes",
              "ring canvas mat",
              "spotlit ring light"
            ]
          }
        },
        {
          "id": "sports_boxing_redcorner_walkout",
          "ja": "入場前の赤コーナー側通路",
          "links": {
            "base": [
              "red-corner walkout aisle",
              "ringside audience seats"
            ],
            "customize": [
              "pre-walkout tension",
              "crowd-held breath hush",
              "ringside murmur"
            ],
            "settings": [
              "red corner pad",
              "walkout aisle lights",
              "folded ring stool"
            ]
          }
        },
        {
          "id": "sports_boxing_mitt_echo",
          "ja": "ミット音が響くボクシングジム",
          "links": {
            "base": [
              "boxing gym floor",
              "heavy-bag line area"
            ],
            "customize": [
              "mitt-slap gym echo",
              "sweat-and-rubber gym air",
              "focused gym intensity"
            ],
            "settings": [
              "heavy bag row",
              "glove rack",
              "bucket by corner"
            ]
          }
        },
        {
          "id": "sports_boxing_night_match",
          "ja": "ナイトマッチのリング会場",
          "links": {
            "base": [
              "boxing ring",
              "ringside audience seats"
            ],
            "customize": [
              "night-fight spotlight heat",
              "crowd-held breath hush",
              "ringside murmur"
            ],
            "settings": [
              "spotlit ring light",
              "round card sign",
              "ringside audience barricade"
            ]
          }
        },
        {
          "id": "sports_boxing_posttraining",
          "ja": "練習後の静かなボクシングリング",
          "links": {
            "base": [
              "boxing ring",
              "boxing gym floor"
            ],
            "customize": [
              "post-training boxing hush",
              "sweat-and-rubber gym air",
              "cooling gym silence"
            ],
            "settings": [
              "sweat-marked ring canvas",
              "water bottles by corner",
              "ring ropes"
            ]
          }
        },
        {
          "id": "sports_boxing_title_tension",
          "ja": "観客が見守るタイトルマッチ前リング",
          "links": {
            "base": [
              "boxing ring",
              "ringside audience seats"
            ],
            "customize": [
              "title-bout anticipation",
              "crowd-held breath hush",
              "ringside tension"
            ],
            "settings": [
              "ring ropes",
              "red blue corner pads",
              "spotlit ring light"
            ]
          }
        }
      ]
    },
    {
      "group": "🏋 トレーニングジム・ウェイトルーム",
      "items": [
        {
          "id": "sports_gym_early_morning",
          "ja": "早朝の静かなウェイトルーム",
          "links": {
            "base": [
              "weight room",
              "free weight zone"
            ],
            "customize": [
              "early-morning gym hush",
              "focused breathing intensity",
              "rubber-floor gym air"
            ],
            "settings": [
              "dumbbell rack",
              "rubber gym flooring",
              "wall mirror"
            ]
          }
        },
        {
          "id": "sports_gym_evening_rush",
          "ja": "夕方の混み合うフリーウェイトエリア",
          "links": {
            "base": [
              "free weight zone",
              "power rack lane"
            ],
            "customize": [
              "evening gym rush",
              "crowded free-weight heat",
              "metal-clank echo"
            ],
            "settings": [
              "power rack",
              "stacked bumper plates",
              "dumbbell rack"
            ]
          }
        },
        {
          "id": "sports_gym_mirror_night",
          "ja": "鏡に照明が反射するナイトジム",
          "links": {
            "base": [
              "mirrored weight room",
              "machine zone walkway"
            ],
            "customize": [
              "mirrored night-gym light",
              "deep-night gym quiet",
              "rubber-floor gym air"
            ],
            "settings": [
              "wall mirror",
              "cable machine towers",
              "adjustable bench"
            ]
          }
        },
        {
          "id": "sports_gym_prerack_focus",
          "ja": "追い込み前の静かなパワーラック",
          "links": {
            "base": [
              "power rack lane",
              "weight room"
            ],
            "customize": [
              "pre-set focus tension",
              "chalk-dust training hush",
              "focused breathing intensity"
            ],
            "settings": [
              "power rack",
              "barbell bench",
              "chalk bucket"
            ]
          }
        },
        {
          "id": "sports_gym_postworkout_heat",
          "ja": "練習後の汗が残るトレーニングジム",
          "links": {
            "base": [
              "weight room",
              "stretch zone corner"
            ],
            "customize": [
              "post-workout sweat heat",
              "cooling gym silence",
              "rubber-floor gym air"
            ],
            "settings": [
              "sweat-darkened bench vinyl",
              "towel bin",
              "water cooler"
            ]
          }
        },
        {
          "id": "sports_gym_deepnight_walkway",
          "ja": "無人に近い深夜のジム通路",
          "links": {
            "base": [
              "machine zone walkway",
              "stretch zone corner"
            ],
            "customize": [
              "deep-night gym quiet",
              "mirrored night-gym light",
              "cooling gym silence"
            ],
            "settings": [
              "wall mirror",
              "rubber gym flooring",
              "empty plate tree"
            ]
          }
        }
      ]
    },
    {
      "group": "🏋 ベース・ウェイトルームの場所",
      "items": [
        {
          "ja": "ウェイトルーム",
          "en": "weight room"
        },
        {
          "ja": "フリーウェイトエリア",
          "en": "free weight zone"
        },
        {
          "ja": "パワーラック列",
          "en": "power rack lane"
        },
        {
          "ja": "鏡張りのウェイトルーム",
          "en": "mirrored weight room"
        },
        {
          "ja": "マシンエリア通路",
          "en": "machine zone walkway"
        },
        {
          "ja": "ストレッチエリア隅",
          "en": "stretch zone corner"
        }
      ]
    },
    {
      "group": "⛸ スケートリンク・アイスアリーナ",
      "items": [
        {
          "id": "sports_ice_morning_still",
          "ja": "朝の静かなスケートリンク",
          "links": {
            "base": [
              "indoor ice rink",
              "ice-side boards"
            ],
            "customize": [
              "cold rink air",
              "dawn rink light",
              "empty-seat hush"
            ],
            "settings": [
              "ice rink boards",
              "ice-reflecting arena lights",
              "skate marks on ice"
            ]
          }
        },
        {
          "id": "sports_ice_night_game",
          "ja": "ナイトゲームのアイスアリーナ",
          "links": {
            "base": [
              "ice arena center ice",
              "ice arena stands"
            ],
            "customize": [
              "night-game ice glow",
              "crowd entering ice arena",
              "cold rink air"
            ],
            "settings": [
              "center ice faceoff circle",
              "hanging arena scoreboard",
              "ice arena stands"
            ]
          }
        },
        {
          "id": "sports_ice_resurfaced",
          "ja": "整氷直後のリンク",
          "links": {
            "base": [
              "freshly resurfaced rink",
              "indoor ice rink"
            ],
            "customize": [
              "freshly resurfaced ice sheen",
              "ice-arena hush",
              "chilled mist above ice"
            ],
            "settings": [
              "smooth ice sheen",
              "ice resurfacer gate",
              "rubber mat walkway"
            ]
          }
        },
        {
          "id": "sports_ice_faceoff",
          "ja": "試合前のフェイスオフサークル",
          "links": {
            "base": [
              "center ice faceoff circle",
              "indoor ice rink"
            ],
            "customize": [
              "pre-faceoff tension",
              "scoreboard countdown hush",
              "hard white arena light"
            ],
            "settings": [
              "center ice faceoff circle",
              "goal crease paint",
              "players bench gate"
            ]
          }
        },
        {
          "id": "sports_ice_crowd_entering",
          "ja": "観客が集まり始めたアイスアリーナ",
          "links": {
            "base": [
              "ice arena stands",
              "ice arena center ice"
            ],
            "customize": [
              "crowd entering ice arena",
              "cold rink air",
              "horn-lingering hush"
            ],
            "settings": [
              "ice arena stands",
              "hanging arena scoreboard",
              "plexiglass boards"
            ]
          }
        },
        {
          "id": "sports_ice_postpractice",
          "ja": "練習後の静かなリンクサイド",
          "links": {
            "base": [
              "rink-side bench area",
              "indoor ice rink"
            ],
            "customize": [
              "post-practice rink hush",
              "skate-blade scrape echo",
              "chilled mist above ice"
            ],
            "settings": [
              "players bench gate",
              "rubber mat walkway",
              "water bottles by bench"
            ]
          }
        }
      ]
    },
    {
      "group": "🏓 卓球場・卓球ホール",
      "items": [
        {
          "id": "sports_tabletennis_pregame",
          "ja": "試合前の静かな卓球台",
          "links": {
            "base": [
              "table tennis table",
              "table tennis hall sideline"
            ],
            "customize": [
              "pre-match table tennis hush",
              "focused hall silence",
              "bright table tennis hall light"
            ],
            "settings": [
              "table tennis net",
              "tabletop reflection sheen",
              "table tennis score flipboard"
            ]
          }
        },
        {
          "id": "sports_tabletennis_preserve",
          "ja": "サーブ前に張りつめた卓球台",
          "links": {
            "base": [
              "table tennis service endline",
              "center-table table tennis setup"
            ],
            "customize": [
              "pre-serve table tennis tension",
              "spectator-held hush",
              "indoor hall air suspension"
            ],
            "settings": [
              "table tennis net",
              "table tennis score flipboard",
              "table tennis ball basket"
            ]
          }
        },
        {
          "id": "sports_tabletennis_rallyecho",
          "ja": "ラリー音が響く卓球ホール",
          "links": {
            "base": [
              "indoor table tennis table",
              "table tennis hall sideline"
            ],
            "customize": [
              "rally echo in hall",
              "focused table tennis intensity",
              "bright table tennis hall light"
            ],
            "settings": [
              "tabletop reflection sheen",
              "table tennis side barriers",
              "scattered table tennis balls"
            ]
          }
        },
        {
          "id": "sports_tabletennis_centercourt",
          "ja": "観客が見守るセンターテーブル",
          "links": {
            "base": [
              "center-table table tennis setup",
              "table tennis seating side"
            ],
            "customize": [
              "crowd-watching table tennis hush",
              "tournament hall buzz",
              "spotlit center-table focus"
            ],
            "settings": [
              "table tennis umpire chair",
              "small table tennis bleachers",
              "table tennis score flipboard"
            ]
          }
        },
        {
          "id": "sports_tabletennis_postpractice",
          "ja": "練習後の静かな卓球場",
          "links": {
            "base": [
              "multi-table practice hall",
              "indoor table tennis table"
            ],
            "customize": [
              "post-practice table tennis hush",
              "sweat-cooled gym air",
              "bouncing ball after-echo"
            ],
            "settings": [
              "folded side barriers",
              "towel chair",
              "mopped floor streaks"
            ]
          }
        },
        {
          "id": "sports_tabletennis_fluorescent",
          "ja": "蛍光灯が強い卓球練習場",
          "links": {
            "base": [
              "multi-table practice hall",
              "practice-table endline"
            ],
            "customize": [
              "hard fluorescent hall light",
              "training-session concentration",
              "bouncing ball after-echo"
            ],
            "settings": [
              "overhead fluorescent rows",
              "tabletop reflection sheen",
              "table tennis ball basket"
            ]
          }
        }
      ]
    },
    {
      "group": "🤸 体操競技場・器具体育館",
      "items": [
        {
          "id": "sports_gymnastics_morning_hall",
          "ja": "朝の静かな体操競技場",
          "links": {
            "base": [
              "gymnastics competition floor",
              "gymnastics viewing stands"
            ],
            "customize": [
              "dawn gymnasium light",
              "pre-routine hush",
              "chalk-dust hush"
            ],
            "settings": [
              "floor exercise spring mat",
              "chalk stand",
              "gymnastics stands"
            ]
          }
        },
        {
          "id": "sports_gymnastics_rings_sway",
          "ja": "つり輪が揺れる器具体育館",
          "links": {
            "base": [
              "apparatus gymnasium",
              "rings apparatus zone"
            ],
            "customize": [
              "bright apparatus hall lighting",
              "apparatus hall echo",
              "pre-routine hush"
            ],
            "settings": [
              "rings support frame",
              "landing mats",
              "chalk stand"
            ]
          }
        },
        {
          "id": "sports_gymnastics_vault_tension",
          "ja": "跳馬前の張りつめた器具エリア",
          "links": {
            "base": [
              "vault runway zone",
              "apparatus gymnasium"
            ],
            "customize": [
              "vault-approach tension",
              "competition-hall hush",
              "bright apparatus hall lighting"
            ],
            "settings": [
              "vaulting table",
              "landing mats",
              "score light board"
            ]
          }
        },
        {
          "id": "sports_gymnastics_beam_spot",
          "ja": "平均台が照らされる静かな体育館",
          "links": {
            "base": [
              "balance beam zone",
              "apparatus gymnasium"
            ],
            "customize": [
              "beam-spot stillness",
              "evening apparatus hall glow",
              "chalk-dust hush"
            ],
            "settings": [
              "balance beam",
              "landing mats",
              "beam spotlight rig"
            ]
          }
        },
        {
          "id": "sports_gymnastics_afterpractice",
          "ja": "練習後のマットが残る器具体育館",
          "links": {
            "base": [
              "mat-staging floor",
              "apparatus gymnasium"
            ],
            "customize": [
              "post-practice apparatus hush",
              "mat-strewn training air",
              "apparatus hall echo"
            ],
            "settings": [
              "folded practice mats",
              "chalk footprints on mat",
              "apparatus transport cart"
            ]
          }
        },
        {
          "id": "sports_gymnastics_prespectators",
          "ja": "大会前の観客が待つ体操会場",
          "links": {
            "base": [
              "gymnastics competition floor",
              "gymnastics viewing stands"
            ],
            "customize": [
              "spectators-gathering tension",
              "competition-hall hush",
              "bright apparatus hall lighting"
            ],
            "settings": [
              "gymnastics stands",
              "score light board",
              "floor exercise boundary tape"
            ]
          }
        }
      ]
    }
  ],
  "base": [
    {
      "group": "🏃 陸上競技場・トラック",
      "items": [
        {
          "ja": "陸上トラック",
          "en": "athletics track"
        },
        {
          "ja": "カーブレーン",
          "en": "stadium lane curve"
        },
        {
          "ja": "スタートライン付近",
          "en": "starting line area"
        },
        {
          "ja": "リレーゾーン",
          "en": "relay exchange zone"
        },
        {
          "ja": "スタンド脇トラック端",
          "en": "trackside stand edge"
        },
        {
          "ja": "直線レーン",
          "en": "track straightaway"
        },
        {
          "ja": "ハードル設置レーン",
          "en": "hurdle setup lane"
        }
      ]
    },
    {
      "group": "⚽ サッカー場・スタンド",
      "items": [
        {
          "ja": "サッカーピッチ",
          "en": "soccer pitch"
        },
        {
          "ja": "センターサークル側",
          "en": "center-circle view"
        },
        {
          "ja": "ゴール前サイド",
          "en": "goalmouth sideline"
        },
        {
          "ja": "応援席側",
          "en": "supporter-stand side"
        },
        {
          "ja": "選手トンネル前",
          "en": "player tunnel frontage"
        },
        {
          "ja": "スタジアム通路",
          "en": "stadium concourse walkway"
        },
        {
          "ja": "ベンチ前タッチライン",
          "en": "touchline bench area"
        },
        {
          "ja": "ゴール裏スタンド",
          "en": "goal-behind stand"
        },
        {
          "ja": "ホーム側下段席",
          "en": "home-stand lower seats"
        },
        {
          "ja": "売店前コンコース",
          "en": "stadium concession concourse"
        }
      ]
    },
    {
      "group": "⚾ 野球場・球場",
      "items": [
        {
          "ja": "球場席",
          "en": "baseball stadium seating"
        },
        {
          "ja": "内野側観客席",
          "en": "infield viewing side"
        },
        {
          "ja": "外野コンコース",
          "en": "outfield concourse"
        },
        {
          "ja": "ブルペン横通路",
          "en": "bullpen-side walkway"
        },
        {
          "ja": "ベンチ前通路",
          "en": "dugout-front aisle"
        },
        {
          "ja": "外野席",
          "en": "outfield bleachers"
        }
      ]
    },
    {
      "group": "🏀 屋内アリーナ・体育館",
      "items": [
        {
          "ja": "屋内アリーナコート",
          "en": "indoor arena court"
        },
        {
          "ja": "バスケゴール下席",
          "en": "basketball baseline seats"
        },
        {
          "ja": "アリーナ通路",
          "en": "arena concourse"
        },
        {
          "ja": "体育館観客席",
          "en": "gymnasium bleachers"
        },
        {
          "ja": "入場トンネル",
          "en": "arena entry tunnel"
        },
        {
          "ja": "バレー設営の体育館コート",
          "en": "volleyball setup gym floor"
        },
        {
          "ja": "下段席通路",
          "en": "lower bowl aisle"
        },
        {
          "ja": "記録席サイドライン",
          "en": "scorer table sideline"
        },
        {
          "ja": "センターサークル",
          "en": "center circle"
        },
        {
          "ja": "ゴール下ペイントエリア",
          "en": "under-the-hoop paint area"
        },
        {
          "ja": "ベンチ前サイドライン",
          "en": "bench-side sideline"
        },
        {
          "ja": "コートサイド席",
          "en": "courtside seating"
        },
        {
          "ja": "フリースローライン周辺",
          "en": "free-throw line area"
        },
        {
          "ja": "バックボード裏レーン",
          "en": "backboard-behind lane"
        }
      ]
    },
    {
      "group": "🏐 バレーコート・観客席",
      "items": [
        {
          "ja": "バレーコート",
          "en": "volleyball court"
        },
        {
          "ja": "ネット中央のコート",
          "en": "volleyball net center court"
        },
        {
          "ja": "エンドライン側コート",
          "en": "volleyball endline zone"
        },
        {
          "ja": "バレー観客席",
          "en": "gym volleyball bleachers"
        },
        {
          "ja": "記録席側のバレーサイドライン",
          "en": "scorer-table volleyball sideline"
        },
        {
          "ja": "練習用バレーコート",
          "en": "volleyball practice gym floor"
        },
        {
          "ja": "チームベンチ側コート",
          "en": "volleyball bench-side court"
        }
      ]
    },
    {
      "group": "🏸 バドミントン・屋内コート",
      "items": [
        {
          "ja": "屋内バドミントンコート",
          "en": "indoor badminton court"
        },
        {
          "ja": "センターコートのバドミントン設営",
          "en": "center-court badminton setup"
        },
        {
          "ja": "バドミントンサービスコート",
          "en": "badminton service court"
        },
        {
          "ja": "サイド観覧席",
          "en": "sidelines viewing seats"
        },
        {
          "ja": "コート脇ベンチエリア",
          "en": "court-side bench area"
        },
        {
          "ja": "大会ホール側通路",
          "en": "tournament hall side aisle"
        }
      ]
    },
    {
      "group": "🎾 テニスコート・観覧席",
      "items": [
        {
          "ja": "屋外テニスコート",
          "en": "outdoor tennis court"
        },
        {
          "ja": "センターコート席",
          "en": "center-court seating"
        },
        {
          "ja": "ベースライン後方",
          "en": "baseline backcourt"
        },
        {
          "ja": "サイド観覧席",
          "en": "sideline spectator stand"
        },
        {
          "ja": "ナイターのテニスコート",
          "en": "night-lit tennis court"
        },
        {
          "ja": "フェンス脇通路",
          "en": "fence-side walkway"
        },
        {
          "ja": "ハードコートのベースライン",
          "en": "hard-court baseline"
        }
      ]
    },
    {
      "group": "🏊 プール・水泳競技場",
      "items": [
        {
          "ja": "屋内競技用プール",
          "en": "indoor competition pool"
        },
        {
          "ja": "スタート台の並ぶレーン",
          "en": "starting-block lanes"
        },
        {
          "ja": "プールサイド観覧通路",
          "en": "poolside spectator lane"
        },
        {
          "ja": "ターン側レーン端",
          "en": "turn-end lane side"
        },
        {
          "ja": "プールデッキ通路",
          "en": "poolside deck walkway"
        },
        {
          "ja": "リレー待機のプールサイド",
          "en": "pool-deck relay zone"
        },
        {
          "ja": "屋内プール観客席",
          "en": "natatorium bleachers"
        }
      ]
    },
    {
      "group": "🥋 武道場・格闘技会場",
      "items": [
        {
          "ja": "畳の武道場",
          "en": "tatami dojo"
        },
        {
          "ja": "木床の道場",
          "en": "wood-floor dojo"
        },
        {
          "ja": "正面側の道場",
          "en": "dojo front side"
        },
        {
          "ja": "稽古中央スペース",
          "en": "dojo center practice zone"
        },
        {
          "ja": "格闘技リングサイド",
          "en": "combat arena ringside"
        },
        {
          "ja": "格闘技会場観客席",
          "en": "fight arena seating"
        },
        {
          "ja": "入場通路前",
          "en": "combat entry walkway"
        }
      ]
    },
    {
      "group": "🥊 ボクシングジム・リング会場",
      "items": [
        {
          "ja": "ボクシングリング",
          "en": "boxing ring"
        },
        {
          "ja": "リング中央マット",
          "en": "center ring canvas"
        },
        {
          "ja": "ロープ際コーナー",
          "en": "rope-side corner"
        },
        {
          "ja": "赤コーナー側通路",
          "en": "red-corner walkout aisle"
        },
        {
          "ja": "ボクシングジム床",
          "en": "boxing gym floor"
        },
        {
          "ja": "サンドバッグ列エリア",
          "en": "heavy-bag line area"
        },
        {
          "ja": "リングサイド観客席",
          "en": "ringside audience seats"
        },
        {
          "ja": "ウォームアップエリア",
          "en": "warmup zone"
        }
      ]
    },
    {
      "group": "⛸ スケートリンク・アイスアリーナ",
      "items": [
        {
          "ja": "屋内スケートリンク",
          "en": "indoor ice rink"
        },
        {
          "ja": "アイスアリーナ中央氷面",
          "en": "ice arena center ice"
        },
        {
          "ja": "センターアイス・フェイスオフサークル",
          "en": "center ice faceoff circle"
        },
        {
          "ja": "リンクサイドベンチ前",
          "en": "rink-side bench area"
        },
        {
          "ja": "ゴールクリーズ横",
          "en": "goal crease side"
        },
        {
          "ja": "アイスアリーナ観客席",
          "en": "ice arena stands"
        },
        {
          "ja": "整氷直後のリンク",
          "en": "freshly resurfaced rink"
        },
        {
          "ja": "リンクボード脇",
          "en": "ice-side boards"
        }
      ]
    },
    {
      "group": "🏓 卓球場・卓球ホール",
      "items": [
        {
          "ja": "卓球台",
          "en": "table tennis table"
        },
        {
          "ja": "屋内卓球台",
          "en": "indoor table tennis table"
        },
        {
          "ja": "センターテーブル卓球台",
          "en": "center-table table tennis setup"
        },
        {
          "ja": "卓球ホール通路側",
          "en": "table tennis hall sideline"
        },
        {
          "ja": "卓球観覧席側",
          "en": "table tennis seating side"
        },
        {
          "ja": "サービス側エンドライン",
          "en": "table tennis service endline"
        },
        {
          "ja": "多台並ぶ卓球練習場",
          "en": "multi-table practice hall"
        },
        {
          "ja": "練習卓球台のエンドライン",
          "en": "practice-table endline"
        }
      ]
    },
    {
      "group": "🤸 体操競技場・器具体育館",
      "items": [
        {
          "ja": "体操競技フロア",
          "en": "gymnastics competition floor"
        },
        {
          "ja": "器具体育館",
          "en": "apparatus gymnasium"
        },
        {
          "ja": "つり輪エリア",
          "en": "rings apparatus zone"
        },
        {
          "ja": "跳馬助走路",
          "en": "vault runway zone"
        },
        {
          "ja": "平均台エリア",
          "en": "balance beam zone"
        },
        {
          "ja": "マット設営フロア",
          "en": "mat-staging floor"
        },
        {
          "ja": "体操観覧席",
          "en": "gymnastics viewing stands"
        }
      ]
    }
  ],
  "customize": [
    {
      "group": "🕒 時間帯・照明",
      "items": [
        {
          "ja": "夕暮れのスタジアム光",
          "en": "twilight stadium glow"
        },
        {
          "ja": "雨上がりのトラック反射",
          "en": "post-rain track sheen"
        },
        {
          "ja": "早朝のトラックの冷気",
          "en": "early-morning track chill"
        },
        {
          "ja": "夜の競技場の高揚",
          "en": "night-game stadium electricity"
        },
        {
          "ja": "昼のピッチの明るさ",
          "en": "daytime pitch brightness"
        },
        {
          "ja": "デーゲームの球場の明るさ",
          "en": "day-game stadium brightness"
        },
        {
          "ja": "明るいアリーナ照明",
          "en": "bright arena light wash"
        },
        {
          "ja": "アリーナの照明洗い",
          "en": "arena light wash"
        },
        {
          "ja": "夜のフィールドの冷気",
          "en": "cool night field air"
        },
        {
          "ja": "朝のフィールドの明るさ",
          "en": "morning field brightness"
        },
        {
          "ja": "真昼のトラック熱",
          "en": "midday track heat"
        },
        {
          "ja": "スタジアムの白い照り返し",
          "en": "white midday stadium glare"
        },
        {
          "ja": "夜のコンコース灯り",
          "en": "concession-stand glow"
        },
        {
          "ja": "屋内の冷たい空気",
          "en": "cool indoor air"
        },
        {
          "ja": "夏のデーゲームの白い熱",
          "en": "white summer day-game heat"
        },
        {
          "ja": "雨のベンチ前の反射",
          "en": "rainy dugout-front sheen"
        },
        {
          "ja": "ハーフタイムの減光アリーナ照明",
          "en": "dimmed halftime arena light"
        },
        {
          "ja": "夕方の体育館光",
          "en": "late-afternoon gym glow"
        },
        {
          "ja": "ナイトゲームの人工光",
          "en": "night-game artificial light"
        },
        {
          "ja": "昼のテニスコートの明るさ",
          "en": "clear daytime court light"
        },
        {
          "ja": "夕暮れのテニスコートの光",
          "en": "twilight court glow"
        },
        {
          "ja": "雨上がりのハードコート反射",
          "en": "post-rain hard-court sheen"
        },
        {
          "ja": "ナイターのテニス照明",
          "en": "night tennis floodlights"
        },
        {
          "ja": "朝の屋内プール光",
          "en": "dawn natatorium light"
        },
        {
          "ja": "明るい屋内プール照明",
          "en": "bright natatorium light"
        },
        {
          "ja": "青い夕方のプール光",
          "en": "blue evening pool glow"
        },
        {
          "ja": "水面反射のゆらめき光",
          "en": "reflected pool-light shimmer"
        },
        {
          "ja": "朝の道場光",
          "en": "dawn dojo light"
        },
        {
          "ja": "夕方の差し光",
          "en": "evening dojo slant light"
        },
        {
          "ja": "格闘技会場のスポット光",
          "en": "fight-spotlight glow"
        },
        {
          "ja": "朝のリンク光",
          "en": "dawn rink light"
        },
        {
          "ja": "ナイトゲームの氷光",
          "en": "night-game ice glow"
        },
        {
          "ja": "整氷直後の艶",
          "en": "freshly resurfaced ice sheen"
        },
        {
          "ja": "硬い白いアリーナ光",
          "en": "hard white arena light"
        },
        {
          "ja": "バレー会場の白い照明",
          "en": "bright volleyball court light"
        },
        {
          "ja": "夕方のバレー体育館光",
          "en": "evening volleyball gym glow"
        },
        {
          "ja": "朝のバドミントンホール光",
          "en": "morning badminton hall light"
        },
        {
          "ja": "明るいバドミントン会場照明",
          "en": "bright badminton hall lighting"
        },
        {
          "ja": "ナイターのバドミントン照明",
          "en": "night badminton court light"
        },
        {
          "ja": "明るい卓球ホール照明",
          "en": "bright table tennis hall light"
        },
        {
          "ja": "センターテーブルを照らすスポット光",
          "en": "spotlit center-table focus"
        },
        {
          "ja": "蛍光灯の強い卓球ホール光",
          "en": "hard fluorescent hall light"
        }
      ]
    },
    {
      "group": "📣 試合前後・観客の気配",
      "items": [
        {
          "ja": "無人の競技場の静けさ",
          "en": "empty stadium hush"
        },
        {
          "ja": "リレー前の緊張感",
          "en": "relay meet tension"
        },
        {
          "ja": "試合前の静けさ",
          "en": "pre-match stillness"
        },
        {
          "ja": "試合前の高揚",
          "en": "stadium anticipation"
        },
        {
          "ja": "スタート前の張りつめ",
          "en": "pre-start line tension"
        },
        {
          "ja": "受け渡し直前の緊張",
          "en": "baton-exchange urgency"
        },
        {
          "ja": "歓声前の息を潜めた空気",
          "en": "crowd-held breath hush"
        },
        {
          "ja": "サポーター席の熱",
          "en": "supporter-stand energy"
        },
        {
          "ja": "コンコースの人流",
          "en": "concourse crowd flow"
        },
        {
          "ja": "球場のざわめき",
          "en": "ballpark crowd buzz"
        },
        {
          "ja": "ブルペン横の緊張",
          "en": "bullpen-side tension"
        },
        {
          "ja": "試合後の静けさ",
          "en": "after-game stadium hush"
        },
        {
          "ja": "試合後のアリーナの静けさ",
          "en": "after-game arena hush"
        },
        {
          "ja": "空席の静けさ",
          "en": "empty-seat hush"
        },
        {
          "ja": "屋内の歓声の膨らみ",
          "en": "indoor crowd swell"
        },
        {
          "ja": "体育館の試合日ざわめき",
          "en": "gymnasium game-day buzz"
        },
        {
          "ja": "入場前トンネルの張りつめ",
          "en": "player-entry tunnel tension"
        },
        {
          "ja": "七回裏前の高まり",
          "en": "seventh-inning swell"
        },
        {
          "ja": "ベンチ前の緊張",
          "en": "dugout-front tension"
        },
        {
          "ja": "試合前練習のざわめき",
          "en": "pregame warmup buzz"
        },
        {
          "ja": "入場が始まる観客の流れ",
          "en": "crowd trickle before tipoff"
        },
        {
          "ja": "サーブ前の張りつめ",
          "en": "pre-serve tension"
        },
        {
          "ja": "観覧席が息を潜める静けさ",
          "en": "spectator-held hush"
        },
        {
          "ja": "センターコートの集中",
          "en": "center-court focus"
        },
        {
          "ja": "スタート前の静けさ",
          "en": "pre-race stillness"
        },
        {
          "ja": "リレー直前の張りつめ",
          "en": "relay exchange anticipation"
        },
        {
          "ja": "水泳大会の客ざわめき",
          "en": "swim-meet crowd murmur"
        },
        {
          "ja": "試合後のプールサイドの静けさ",
          "en": "post-race poolside hush"
        },
        {
          "ja": "ジャンプボール前の張りつめ",
          "en": "basketball pre-tipoff tension"
        },
        {
          "ja": "観客が埋まり始める熱",
          "en": "crowd-filling-up energy"
        },
        {
          "ja": "ゴール下の熱気",
          "en": "under-the-hoop intensity"
        },
        {
          "ja": "ハーフタイムの緩み",
          "en": "halftime lull"
        },
        {
          "ja": "ベンチ前の緊張",
          "en": "bench-side tension"
        },
        {
          "ja": "道場の静けさ",
          "en": "dojo stillness"
        },
        {
          "ja": "稽古の集中した静けさ",
          "en": "focused dojo silence"
        },
        {
          "ja": "試合前の格闘技会場の緊張",
          "en": "pre-fight arena tension"
        },
        {
          "ja": "試合前のざわめき",
          "en": "crowd-before-bout murmur"
        },
        {
          "ja": "入場前の張りつめ",
          "en": "walkout-before-bout tension"
        },
        {
          "ja": "大会後の格闘技会場の静けさ",
          "en": "post-fight arena hush"
        },
        {
          "ja": "片付け後の静けさ",
          "en": "arena-cleanup hush"
        },
        {
          "ja": "フェイスオフ前の張りつめ",
          "en": "pre-faceoff tension"
        },
        {
          "ja": "観客が入り始めるリンク熱",
          "en": "crowd entering ice arena"
        },
        {
          "ja": "練習後のリンクサイドの静けさ",
          "en": "post-practice rink hush"
        },
        {
          "ja": "スコアボード前のカウントダウン静けさ",
          "en": "scoreboard countdown hush"
        },
        {
          "ja": "試合前のバレー会場の静けさ",
          "en": "pre-match volleyball hush"
        },
        {
          "ja": "サーブ前の張りつめ",
          "en": "pre-serve tension"
        },
        {
          "ja": "観客が見守る静かな圧",
          "en": "volleyball crowd hush"
        },
        {
          "ja": "ハーフタイムの静かな体育館",
          "en": "halftime volleyball hush"
        },
        {
          "ja": "試合後のバレー会場の静けさ",
          "en": "post-match volleyball hush"
        },
        {
          "ja": "試合前のバドミントン会場の静けさ",
          "en": "pre-match badminton hush"
        },
        {
          "ja": "サービス前の張りつめ",
          "en": "pre-serve badminton tension"
        },
        {
          "ja": "集中したバドミントンの静寂",
          "en": "focused badminton silence"
        },
        {
          "ja": "観客が見守るコートの静けさ",
          "en": "spectator hush around court"
        },
        {
          "ja": "大会ホールのざわめき",
          "en": "tournament hall buzz"
        },
        {
          "ja": "練習後のバドミントンホールの静けさ",
          "en": "post-practice badminton hush"
        },
        {
          "ja": "コール前の静まり",
          "en": "match-call hush"
        },
        {
          "ja": "試合前の卓球会場の静けさ",
          "en": "pre-match table tennis hush"
        },
        {
          "ja": "サーブ前の卓球の張りつめ",
          "en": "pre-serve table tennis tension"
        },
        {
          "ja": "見守る観客の静かな圧",
          "en": "crowd-watching table tennis hush"
        },
        {
          "ja": "卓球の集中した気配",
          "en": "focused table tennis intensity"
        },
        {
          "ja": "練習後の卓球場の静けさ",
          "en": "post-practice table tennis hush"
        },
        {
          "ja": "練習中の集中気配",
          "en": "training-session concentration"
        }
      ]
    },
    {
      "group": "🌧 空気・音・状態",
      "items": [
        {
          "ja": "トラック脇の風",
          "en": "trackside breeze"
        },
        {
          "ja": "スタジアムの開けた空気",
          "en": "open stadium air"
        },
        {
          "ja": "トラック練習の集中",
          "en": "track practice focus"
        },
        {
          "ja": "濡れた競技場の空気",
          "en": "wet stadium air"
        },
        {
          "ja": "雨上がり後の競技場の静けさ",
          "en": "quiet after-rain stadium"
        },
        {
          "ja": "刈りたて芝の匂い",
          "en": "fresh-cut grass scent"
        },
        {
          "ja": "開けたスタジアムの空気",
          "en": "open stadium air"
        },
        {
          "ja": "雨の競技場の空気",
          "en": "rainy stadium air"
        },
        {
          "ja": "濡れたフィールドの静けさ",
          "en": "wet field hush"
        },
        {
          "ja": "ゴール前の張りつめ",
          "en": "goalmouth tension"
        },
        {
          "ja": "スタジアムの反響",
          "en": "stadium echo"
        },
        {
          "ja": "夏の球場熱",
          "en": "summer stadium heat"
        },
        {
          "ja": "アリーナの空洞反響",
          "en": "hollow arena echo"
        },
        {
          "ja": "体育館シューズ音の気配",
          "en": "indoor shoe-squeak energy"
        },
        {
          "ja": "外野席を抜ける風",
          "en": "outfield-stand breeze"
        },
        {
          "ja": "試合前練習のざわめき",
          "en": "pregame warmup buzz"
        },
        {
          "ja": "試合日の旗のはためき",
          "en": "matchday banner flutter"
        },
        {
          "ja": "ハーフタイム通路のせわしさ",
          "en": "halftime concourse bustle"
        },
        {
          "ja": "練習ボールの反響",
          "en": "practice-ball echo"
        },
        {
          "ja": "木床の静かな反射感",
          "en": "wood-floor hush"
        },
        {
          "ja": "開けたコートの風",
          "en": "open court breeze"
        },
        {
          "ja": "日差しの強い試合集中",
          "en": "sunlit match focus"
        },
        {
          "ja": "雨上がりのコートの静けさ",
          "en": "damp court hush"
        },
        {
          "ja": "夜のテニスコートの静けさ",
          "en": "night-court hush"
        },
        {
          "ja": "ボール音の反響",
          "en": "ball-strike echo"
        },
        {
          "ja": "塩素のある湿った空気",
          "en": "humid chlorine air"
        },
        {
          "ja": "屋内プールの冷気",
          "en": "cool natatorium air"
        },
        {
          "ja": "水音が反響する空間",
          "en": "water-slap echo"
        },
        {
          "ja": "飛沫が浮く湿り気",
          "en": "splash mist in the air"
        },
        {
          "ja": "レーンロープが揺れる静けさ",
          "en": "lane-rope ripple hush"
        },
        {
          "ja": "コート準備前の静けさ",
          "en": "court-ready hush"
        },
        {
          "ja": "ジャンプボール前の静寂",
          "en": "tipoff silence"
        },
        {
          "ja": "バスケットの試合熱",
          "en": "basketball-game electricity"
        },
        {
          "ja": "木床の静かな反射感",
          "en": "quiet gym floor reflections"
        },
        {
          "ja": "試合後の木床の熱残り",
          "en": "post-game hardwood heat"
        },
        {
          "ja": "練習中の反響",
          "en": "practice-drill echo"
        },
        {
          "ja": "無人アリーナの練習集中",
          "en": "empty-arena practice focus"
        },
        {
          "ja": "畳の匂いの静けさ",
          "en": "tatami-air hush"
        },
        {
          "ja": "木床に響く足音",
          "en": "wood-floor footfall echo"
        },
        {
          "ja": "コンクリート会場の反響",
          "en": "concrete-arena reverb"
        },
        {
          "ja": "稽古の足運びの反響",
          "en": "practice-footwork echoes"
        },
        {
          "ja": "冷たいリンク空気",
          "en": "cold rink air"
        },
        {
          "ja": "整氷後の静かなリンク",
          "en": "ice-arena hush"
        },
        {
          "ja": "氷上に漂う冷気の靄",
          "en": "chilled mist above ice"
        },
        {
          "ja": "スケート刃の擦れる反響",
          "en": "skate-blade scrape echo"
        },
        {
          "ja": "ホーン後に残る静けさ",
          "en": "horn-lingering hush"
        },
        {
          "ja": "屋内コートの集中",
          "en": "indoor court focus"
        },
        {
          "ja": "練習ボールの反響",
          "en": "volleyball drill echo"
        },
        {
          "ja": "屋内ホールに漂う静止空気",
          "en": "indoor hall air suspension"
        },
        {
          "ja": "羽根シャトルを揺らす屋内気流",
          "en": "indoor draft feather drift"
        },
        {
          "ja": "ホールに響くラリー音",
          "en": "rally echo in hall"
        },
        {
          "ja": "照らされたコートの集中",
          "en": "spotlighted court focus"
        },
        {
          "ja": "汗が冷えた体育館空気",
          "en": "sweat-cooled gym air"
        },
        {
          "ja": "シャトルの残響",
          "en": "badminton shuttle after-echo"
        },
        {
          "ja": "静まり返ったホールの空気",
          "en": "focused hall silence"
        },
        {
          "ja": "跳ねる球の残響",
          "en": "bouncing ball after-echo"
        }
      ]
    },
    {
      "group": "🤸 体操競技場・器具体育館",
      "items": [
        {
          "ja": "朝の体育館光",
          "en": "dawn gymnasium light"
        },
        {
          "ja": "器具会場の白い照明",
          "en": "bright apparatus hall lighting"
        },
        {
          "ja": "大会前の静けさ",
          "en": "competition-hall hush"
        },
        {
          "ja": "演技前の張りつめ",
          "en": "pre-routine hush"
        },
        {
          "ja": "器具体育館の反響",
          "en": "apparatus hall echo"
        },
        {
          "ja": "粉の舞う静けさ",
          "en": "chalk-dust hush"
        },
        {
          "ja": "跳馬前の張りつめ",
          "en": "vault-approach tension"
        },
        {
          "ja": "平均台の静かな集中",
          "en": "beam-spot stillness"
        },
        {
          "ja": "夕方の器具体育館光",
          "en": "evening apparatus hall glow"
        },
        {
          "ja": "練習後の器具体育館の静けさ",
          "en": "post-practice apparatus hush"
        },
        {
          "ja": "マットが残る練習後空気",
          "en": "mat-strewn training air"
        },
        {
          "ja": "観客が集まり始める緊張",
          "en": "spectators-gathering tension"
        }
      ]
    },
    {
      "group": "🥊 ボクシングジム・リング会場",
      "items": [
        {
          "ja": "試合前のリング静けさ",
          "en": "pre-fight ring hush"
        },
        {
          "ja": "リングサイドの張りつめ",
          "en": "ringside tension"
        },
        {
          "ja": "硬い白いジム照明",
          "en": "hard white gym light"
        },
        {
          "ja": "入場前の張りつめ",
          "en": "pre-walkout tension"
        },
        {
          "ja": "観客が息を潜める静けさ",
          "en": "crowd-held breath hush"
        },
        {
          "ja": "リングサイドのざわめき",
          "en": "ringside murmur"
        },
        {
          "ja": "ミット音が響くジム反響",
          "en": "mitt-slap gym echo"
        },
        {
          "ja": "汗とゴムのジム空気",
          "en": "sweat-and-rubber gym air"
        },
        {
          "ja": "集中したジムの熱",
          "en": "focused gym intensity"
        },
        {
          "ja": "ナイトマッチのスポット熱",
          "en": "night-fight spotlight heat"
        },
        {
          "ja": "練習後のボクシング静けさ",
          "en": "post-training boxing hush"
        },
        {
          "ja": "冷めていくジムの静けさ",
          "en": "cooling gym silence"
        },
        {
          "ja": "タイトルマッチ前の高まり",
          "en": "title-bout anticipation"
        }
      ]
    },
    {
      "group": "🏋 ジム空気・時間帯",
      "items": [
        {
          "ja": "早朝のジム静けさ",
          "en": "early-morning gym hush"
        },
        {
          "ja": "夕方のジムラッシュ",
          "en": "evening gym rush"
        },
        {
          "ja": "鏡に反射するナイトジム照明",
          "en": "mirrored night-gym light"
        },
        {
          "ja": "セット前の張りつめ",
          "en": "pre-set focus tension"
        },
        {
          "ja": "練習後の汗の熱",
          "en": "post-workout sweat heat"
        },
        {
          "ja": "ラバーフロアのジム空気",
          "en": "rubber-floor gym air"
        },
        {
          "ja": "金属音が響く反響",
          "en": "metal-clank echo"
        },
        {
          "ja": "深夜のジムの静けさ",
          "en": "deep-night gym quiet"
        },
        {
          "ja": "チョーク粉の静けさ",
          "en": "chalk-dust training hush"
        },
        {
          "ja": "集中した呼吸の気配",
          "en": "focused breathing intensity"
        },
        {
          "ja": "混み合うフリーウェイトの熱",
          "en": "crowded free-weight heat"
        },
        {
          "ja": "冷めていくジムの静けさ",
          "en": "cooling gym silence"
        }
      ]
    },
  ],
  "settings": [
    {
      "group": "🏟 フィールド・コート設備",
      "items": [
        {
          "ja": "レーンライン",
          "en": "track lane markings"
        },
        {
          "ja": "スターティングブロック",
          "en": "starting blocks"
        },
        {
          "ja": "リレー受け渡しマーク",
          "en": "baton exchange marks"
        },
        {
          "ja": "ゴールネット",
          "en": "goal net"
        },
        {
          "ja": "芝の刈り目",
          "en": "cut grass stripes"
        },
        {
          "ja": "センターサークル線",
          "en": "center-circle marking"
        },
        {
          "ja": "内野土",
          "en": "baseball infield dirt"
        },
        {
          "ja": "ブルペン柵",
          "en": "bullpen fence"
        },
        {
          "ja": "コートライン",
          "en": "court boundary lines"
        },
        {
          "ja": "バスケゴール支柱",
          "en": "basketball hoop stanchion"
        },
        {
          "ja": "外野フェンスクッション",
          "en": "outfield wall padding"
        },
        {
          "ja": "バレーネット支柱",
          "en": "volleyball net posts"
        },
        {
          "ja": "センターサークル線",
          "en": "center circle marking"
        },
        {
          "ja": "バックボード支柱フレーム",
          "en": "backboard support frame"
        },
        {
          "ja": "センターサービスライン",
          "en": "center service line"
        },
        {
          "ja": "ネット中央ストラップ",
          "en": "net center strap"
        },
        {
          "ja": "アンパイアチェア",
          "en": "umpire chair"
        },
        {
          "ja": "レーンロープ",
          "en": "lane ropes"
        },
        {
          "ja": "バックストロークフラッグ",
          "en": "backstroke flags"
        },
        {
          "ja": "ターン壁タッチパッド",
          "en": "turn wall touchpads"
        },
        {
          "ja": "リングロープ",
          "en": "fight ring ropes"
        },
        {
          "ja": "赤青コーナーパッド",
          "en": "red-blue corner pads"
        },
        {
          "ja": "リンクボード",
          "en": "ice rink boards"
        },
        {
          "ja": "センターアイスのフェイスオフサークル",
          "en": "center ice faceoff circle"
        },
        {
          "ja": "ゴールクリーズ塗装",
          "en": "goal crease paint"
        },
        {
          "ja": "リンク面の艶",
          "en": "smooth ice sheen"
        },
        {
          "ja": "プレキシガラスボード",
          "en": "plexiglass boards"
        },
        {
          "ja": "張られたバレーネット",
          "en": "tensioned volleyball net"
        },
        {
          "ja": "アンテナ付き支柱",
          "en": "volleyball antenna posts"
        },
        {
          "ja": "アタックライン",
          "en": "attack line markings"
        },
        {
          "ja": "サービスゾーン印",
          "en": "service zone markings"
        },
        {
          "ja": "審判台",
          "en": "referee stand"
        },
        {
          "ja": "ラインジャッジ旗",
          "en": "line judge flags"
        },
        {
          "ja": "バドミントンネット支柱",
          "en": "badminton net posts"
        },
        {
          "ja": "サービスライン印",
          "en": "service line markings"
        },
        {
          "ja": "ネットトップテープ",
          "en": "badminton net tape"
        },
        {
          "ja": "卓球ネット",
          "en": "table tennis net"
        },
        {
          "ja": "卓球台天板の反射",
          "en": "tabletop reflection sheen"
        }
      ]
    },
    {
      "group": "💡 照明・スコア・観客席",
      "items": [
        {
          "ja": "スタジアム照明塔",
          "en": "stadium floodlights"
        },
        {
          "ja": "スタンド席",
          "en": "stadium bleachers"
        },
        {
          "ja": "スコアボードの光",
          "en": "scoreboard glow"
        },
        {
          "ja": "応援バナー",
          "en": "support banners"
        },
        {
          "ja": "コンコース案内板",
          "en": "stadium concourse signs"
        },
        {
          "ja": "売店カウンター",
          "en": "concession counters"
        },
        {
          "ja": "吊り下げ大型スコアボード",
          "en": "hanging scoreboard"
        },
        {
          "ja": "アリーナ席列",
          "en": "arena seat rows"
        },
        {
          "ja": "折りたたみ観客席",
          "en": "folded bleacher sections"
        },
        {
          "ja": "ベンチ席列",
          "en": "bench seating row"
        },
        {
          "ja": "ショットクロックの光",
          "en": "shot clock glow"
        },
        {
          "ja": "減光したスコアボードの光",
          "en": "dimmed scoreboard glow"
        },
        {
          "ja": "記録席モニターの光",
          "en": "scorer table monitor glow"
        },
        {
          "ja": "センターコート観覧席",
          "en": "center-court bleachers"
        },
        {
          "ja": "テニスコート照明",
          "en": "court floodlights"
        },
        {
          "ja": "テニスのスコア表示板の光",
          "en": "scoreboard panel glow"
        },
        {
          "ja": "屋内プール照明",
          "en": "natatorium floodlights"
        },
        {
          "ja": "ラップ表示板の光",
          "en": "lap scoreboard glow"
        },
        {
          "ja": "計時表示の光",
          "en": "timing board glow"
        },
        {
          "ja": "プール観客席",
          "en": "poolside bleachers"
        },
        {
          "ja": "格闘技会場スポット照明",
          "en": "fight spotlight rig"
        },
        {
          "ja": "氷面に反射するアリーナ照明",
          "en": "ice-reflecting arena lights"
        },
        {
          "ja": "吊り下げスコアボード",
          "en": "hanging arena scoreboard"
        },
        {
          "ja": "アイスアリーナ観客席",
          "en": "ice arena stands"
        },
        {
          "ja": "バレー記録席",
          "en": "volleyball scorer table"
        },
        {
          "ja": "コート上部照明",
          "en": "overhead court lights"
        },
        {
          "ja": "バドミントン用スコア表示板",
          "en": "scoreboard panel glow"
        },
        {
          "ja": "小型観覧席",
          "en": "small court bleachers"
        },
        {
          "ja": "アンパイアハイチェア",
          "en": "umpire high chair"
        },
        {
          "ja": "卓球得点板",
          "en": "table tennis score flipboard"
        },
        {
          "ja": "卓球審判台",
          "en": "table tennis umpire chair"
        },
        {
          "ja": "小型卓球観覧席",
          "en": "small table tennis bleachers"
        },
        {
          "ja": "列状の蛍光灯",
          "en": "overhead fluorescent rows"
        }
      ]
    },
    {
      "group": "🧩 導線・細部",
      "items": [
        {
          "ja": "トラック脇コーン",
          "en": "trackside cones"
        },
        {
          "ja": "濡れたラバー路面反射",
          "en": "wet rubber track sheen"
        },
        {
          "ja": "トラック脇排水溝",
          "en": "drain grates by track"
        },
        {
          "ja": "フィールド上の朝霧",
          "en": "morning mist above field"
        },
        {
          "ja": "濡れた芝の反射",
          "en": "wet turf sheen"
        },
        {
          "ja": "サイド設備箱",
          "en": "sideline equipment box"
        },
        {
          "ja": "選手トンネル灯",
          "en": "player tunnel lighting"
        },
        {
          "ja": "手すり",
          "en": "guard rails"
        },
        {
          "ja": "ファウルネット",
          "en": "foul netting"
        },
        {
          "ja": "ダッグアウト手すり",
          "en": "dugout rail"
        },
        {
          "ja": "カップホルダーの捨てカップ",
          "en": "discard cup holders"
        },
        {
          "ja": "積まれた折りたたみ椅子",
          "en": "stacked folding chairs"
        },
        {
          "ja": "磨かれた木床反射",
          "en": "wiped wooden court sheen"
        },
        {
          "ja": "入場トンネル手すり",
          "en": "entry tunnel railings"
        },
        {
          "ja": "床の誘導テープ",
          "en": "floor guide tape"
        },
        {
          "ja": "周回カウンターボード",
          "en": "lap counter board"
        },
        {
          "ja": "白く照るトラック路面",
          "en": "sun-bleached lane surface"
        },
        {
          "ja": "レーン番号マーカー",
          "en": "lane number markers"
        },
        {
          "ja": "スターター台",
          "en": "starter stand"
        },
        {
          "ja": "バトンラック",
          "en": "relay baton rack"
        },
        {
          "ja": "ハードル列",
          "en": "hurdle row"
        },
        {
          "ja": "レーン脇の捨てボトル",
          "en": "discarded water bottles by lane"
        },
        {
          "ja": "アリーナ案内ボード",
          "en": "arena signage boards"
        },
        {
          "ja": "濡れたベンチ前段差",
          "en": "wet bench-step sheen"
        },
        {
          "ja": "売店の紙トレイ",
          "en": "paper concession trays"
        },
        {
          "ja": "芝上の練習コーン",
          "en": "training cones on grass"
        },
        {
          "ja": "ベンチシェルター",
          "en": "sideline bench shelter"
        },
        {
          "ja": "PKスポット印",
          "en": "penalty spot mark"
        },
        {
          "ja": "散った紙テープ",
          "en": "scattered paper streamers"
        },
        {
          "ja": "コート脇のタオル束",
          "en": "courtside towel pile"
        },
        {
          "ja": "磨かれた木床の強い反射",
          "en": "polished wood floor glare"
        },
        {
          "ja": "ドリンクボトル列",
          "en": "drink bottle row"
        },
        {
          "ja": "モップ跡の残る木床",
          "en": "court mopping streaks"
        },
        {
          "ja": "汗跡の残る木床",
          "en": "sweat-marked wood floor"
        },
        {
          "ja": "金網フェンス",
          "en": "chain-link court fence"
        },
        {
          "ja": "濡れたハードコート反射",
          "en": "wet hard-court glare"
        },
        {
          "ja": "ボールカート",
          "en": "ball cart"
        },
        {
          "ja": "コート脇ベンチ",
          "en": "court-side bench"
        },
        {
          "ja": "テニスボール籠",
          "en": "tennis ball basket"
        },
        {
          "ja": "濡れたタイル反射",
          "en": "wet tile reflections"
        },
        {
          "ja": "プール脇の排水溝",
          "en": "poolside drain grates"
        },
        {
          "ja": "水面反射の揺れ",
          "en": "water ripple reflections"
        },
        {
          "ja": "積まれたキックボード",
          "en": "stacked kickboards"
        },
        {
          "ja": "畳の継ぎ目",
          "en": "tatami seam pattern"
        },
        {
          "ja": "掛け軸",
          "en": "dojo hanging calligraphy"
        },
        {
          "ja": "木刀掛け",
          "en": "wooden weapon rack"
        },
        {
          "ja": "磨かれた道場木床",
          "en": "polished dojo wood floor"
        },
        {
          "ja": "高窓の差し光",
          "en": "high dojo windows"
        },
        {
          "ja": "壁一面の鏡",
          "en": "wall-length dojo mirror"
        },
        {
          "ja": "積まれた練習マット",
          "en": "stacked practice mats"
        },
        {
          "ja": "入場バリケード",
          "en": "entry barricades"
        },
        {
          "ja": "格闘技ポスター壁",
          "en": "fight poster wall"
        },
        {
          "ja": "入場通路灯",
          "en": "walkout tunnel lights"
        },
        {
          "ja": "折りたたみファイトスツール",
          "en": "folded fight stools"
        },
        {
          "ja": "氷上のスケート跡",
          "en": "skate marks on ice"
        },
        {
          "ja": "整氷車ゲート",
          "en": "ice resurfacer gate"
        },
        {
          "ja": "ゴムマット通路",
          "en": "rubber mat walkway"
        },
        {
          "ja": "ベンチゲート",
          "en": "players bench gate"
        },
        {
          "ja": "ベンチ脇の水ボトル",
          "en": "water bottles by bench"
        },
        {
          "ja": "ローリングボールカート",
          "en": "rolling ball cart"
        },
        {
          "ja": "磨かれたバドミントン床",
          "en": "polished badminton floor"
        },
        {
          "ja": "シャトル筒かご",
          "en": "shuttle tube basket"
        },
        {
          "ja": "コート脇タオル椅子",
          "en": "court-side towel chair"
        },
        {
          "ja": "ラインジャッジ椅子",
          "en": "line judge stool"
        },
        {
          "ja": "散ったシャトル",
          "en": "scattered shuttlecocks"
        },
        {
          "ja": "畳まれた間仕切りカーテン",
          "en": "folded divider curtains"
        },
        {
          "ja": "モップ跡の残る床",
          "en": "court-side mop marks"
        },
        {
          "ja": "卓球ボールかご",
          "en": "table tennis ball basket"
        },
        {
          "ja": "卓球台仕切りフェンス",
          "en": "table tennis side barriers"
        },
        {
          "ja": "散った卓球ボール",
          "en": "scattered table tennis balls"
        },
        {
          "ja": "畳まれた仕切りフェンス",
          "en": "folded side barriers"
        },
        {
          "ja": "タオル掛け椅子",
          "en": "towel chair"
        },
        {
          "ja": "モップ跡の残る床",
          "en": "mopped floor streaks"
        }
      ]
    },
    {
      "group": "🤸 体操競技場・器具体育館",
      "items": [
        {
          "ja": "床運動マット",
          "en": "floor exercise spring mat"
        },
        {
          "ja": "つり輪フレーム",
          "en": "rings support frame"
        },
        {
          "ja": "跳馬台",
          "en": "vaulting table"
        },
        {
          "ja": "平均台",
          "en": "balance beam"
        },
        {
          "ja": "着地マット",
          "en": "landing mats"
        },
        {
          "ja": "チョーク台",
          "en": "chalk stand"
        },
        {
          "ja": "体操観覧席",
          "en": "gymnastics stands"
        },
        {
          "ja": "得点表示板の光",
          "en": "score light board"
        },
        {
          "ja": "平均台用スポット灯",
          "en": "beam spotlight rig"
        },
        {
          "ja": "畳まれた練習マット",
          "en": "folded practice mats"
        },
        {
          "ja": "マットのチョーク跡",
          "en": "chalk footprints on mat"
        },
        {
          "ja": "器具運搬カート",
          "en": "apparatus transport cart"
        },
        {
          "ja": "床運動の境界テープ",
          "en": "floor exercise boundary tape"
        }
      ]
    },
    {
      "group": "🥊 ボクシングジム・リング会場",
      "items": [
        {
          "ja": "リングロープ",
          "en": "ring ropes"
        },
        {
          "ja": "リングマット",
          "en": "ring canvas mat"
        },
        {
          "ja": "リング上スポットライト",
          "en": "spotlit ring light"
        },
        {
          "ja": "赤コーナーパッド",
          "en": "red corner pad"
        },
        {
          "ja": "入場通路灯",
          "en": "walkout aisle lights"
        },
        {
          "ja": "折りたたみリングスツール",
          "en": "folded ring stool"
        },
        {
          "ja": "サンドバッグ列",
          "en": "heavy bag row"
        },
        {
          "ja": "グローブラック",
          "en": "glove rack"
        },
        {
          "ja": "コーナー脇バケツ",
          "en": "bucket by corner"
        },
        {
          "ja": "ラウンドカード表示",
          "en": "round card sign"
        },
        {
          "ja": "リングサイド柵",
          "en": "ringside audience barricade"
        },
        {
          "ja": "汗跡の残るリングマット",
          "en": "sweat-marked ring canvas"
        },
        {
          "ja": "コーナー脇の水ボトル",
          "en": "water bottles by corner"
        },
        {
          "ja": "赤青コーナーパッド",
          "en": "red blue corner pads"
        }
      ]
    },
    {
      "group": "🏋 ジム設備・細部",
      "items": [
        {
          "ja": "ダンベルラック",
          "en": "dumbbell rack"
        },
        {
          "ja": "パワーラック",
          "en": "power rack"
        },
        {
          "ja": "バーベルベンチ",
          "en": "barbell bench"
        },
        {
          "ja": "ラバーフロア",
          "en": "rubber gym flooring"
        },
        {
          "ja": "壁一面の鏡",
          "en": "wall mirror"
        },
        {
          "ja": "積まれたバンパープレート",
          "en": "stacked bumper plates"
        },
        {
          "ja": "ケーブルマシン列",
          "en": "cable machine towers"
        },
        {
          "ja": "チョークバケツ",
          "en": "chalk bucket"
        },
        {
          "ja": "汗で色が変わったベンチ",
          "en": "sweat-darkened bench vinyl"
        },
        {
          "ja": "タオルボックス",
          "en": "towel bin"
        },
        {
          "ja": "ウォータークーラー",
          "en": "water cooler"
        },
        {
          "ja": "可変ベンチ",
          "en": "adjustable bench"
        },
        {
          "ja": "空のプレートツリー",
          "en": "empty plate tree"
        }
      ]
    }
  ]
},
  {
    "id": "road_bridge_route_collection",
    "title": "🛣 道・橋・導線特化コレクション",
    "subtitle": "田舎道、鉄道沿いの道、薄暗い夜道、川沿いの道、橋や高架まで、背景を奥へ導く線と流れを多層で噛ませる、道背景の特化コレクション",
    "complete": [
      {
        "group": "🌾 田舎道・農道",
        "items": [
          {
            "id": "road_country_summer",
            "ja": "夏の田舎道",
            "links": {
              "base": [
                "country road",
                "farm lane"
              ],
              "customize": [
                "summer roadside air",
                "quiet countryside flow",
                "long open perspective"
              ],
              "settings": [
                "roadside weeds",
                "telephone poles along road",
                "sunlit asphalt"
              ]
            }
          },
          {
            "id": "road_farm_twilight",
            "ja": "夕暮れの農道",
            "links": {
              "base": [
                "farm lane",
                "rural side road"
              ],
              "customize": [
                "twilight roadside glow",
                "quiet countryside flow",
                "soft evening wind"
              ],
              "settings": [
                "guardrail bends",
                "orange road edge light",
                "roadside grasses"
              ]
            }
          },
          {
            "id": "road_muddy_rain",
            "ja": "雨のぬかるんだ農道",
            "links": {
              "base": [
                "farm lane",
                "country road"
              ],
              "customize": [
                "rainy roadside air",
                "muddy roadside mood",
                "empty road stillness"
              ],
              "settings": [
                "puddles on road",
                "roadside weeds",
                "wet tire tracks"
              ]
            }
          },
          {
            "id": "road_country_mist_morning",
            "ja": "朝霧の田んぼ道",
            "links": {
              "base": [
                "country road",
                "farm lane"
              ],
              "customize": [
                "misty dawn road",
                "quiet countryside flow",
                "cool morning haze"
              ],
              "settings": [
                "mist over roadside fields",
                "telephone poles along road",
                "narrow shoulder path"
              ]
            }
          },
          {
            "id": "road_country_noon_white",
            "ja": "真昼の白い田舎道",
            "links": {
              "base": [
                "country road",
                "road beside rice fields"
              ],
              "customize": [
                "dry noon countryside air",
                "long open perspective",
                "quiet countryside flow"
              ],
              "settings": [
                "sun-bleached asphalt",
                "roadside rice stalks",
                "white roadside posts"
              ]
            }
          },
          {
            "id": "road_country_predawn_blue",
            "ja": "夜明け前の青い農道",
            "links": {
              "base": [
                "farm lane",
                "road beside irrigation canal"
              ],
              "customize": [
                "pre-dawn blue roadside air",
                "quiet countryside flow",
                "cold predawn stillness"
              ],
              "settings": [
                "irrigation ditch by road",
                "faint road mist",
                "telephone poles along road"
              ]
            }
          },
          {
            "id": "road_country_rice_gold",
            "ja": "稲穂に囲まれた黄金の農道",
            "links": {
              "base": [
                "farm lane",
                "road beside rice fields"
              ],
              "customize": [
                "rice-field wind",
                "warm harvest-season glow",
                "long open perspective"
              ],
              "settings": [
                "roadside rice stalks",
                "dry wheel ruts",
                "golden roadside light"
              ]
            }
          },
          {
            "id": "road_country_moonlight_dark",
            "ja": "街灯のない月夜の田舎道",
            "links": {
              "base": [
                "country road",
                "rural side road"
              ],
              "customize": [
                "moonlit countryside mood",
                "sparse streetlights",
                "late-night stillness"
              ],
              "settings": [
                "long darkness ahead",
                "faint curb line",
                "moonlit road surface"
              ]
            }
          },
          {
            "id": "road_country_postharvest_quiet",
            "ja": "収穫後の静かな農道",
            "links": {
              "base": [
                "farm lane",
                "fieldside service path"
              ],
              "customize": [
                "post-harvest quiet",
                "quiet countryside flow",
                "soft evening wind"
              ],
              "settings": [
                "stubbled field edges",
                "dry wheel ruts",
                "roadside weeds"
              ]
            }
          },
          {
            "id": "road_country_winter_bare",
            "ja": "冬枯れの田舎道",
            "links": {
              "base": [
                "country road",
                "rural side road"
              ],
              "customize": [
                "winter-bare roadside air",
                "cold predawn stillness",
                "windy open road"
              ],
              "settings": [
                "bare roadside grasses",
                "white roadside posts",
                "sun-bleached asphalt"
              ]
            }
          }
        ]
      },
      {
        "group": "🚉 鉄道沿いの道",
        "items": [
          {
            "id": "road_tracks_evening",
            "ja": "夕方の線路沿いの道",
            "links": {
              "base": [
                "road beside railway",
                "path by train tracks"
              ],
              "customize": [
                "evening roadside glow",
                "trainline atmosphere",
                "long open perspective"
              ],
              "settings": [
                "rail crossing signal",
                "trackside fence",
                "overhead railway wires"
              ]
            }
          },
          {
            "id": "road_crossing_rain",
            "ja": "雨の踏切前",
            "links": {
              "base": [
                "rail crossing approach",
                "road beside railway"
              ],
              "customize": [
                "rainy roadside air",
                "trainline atmosphere",
                "waiting-road tension"
              ],
              "settings": [
                "rail crossing signal",
                "wet crossing stripes",
                "warning lights"
              ]
            }
          },
          {
            "id": "road_train_sound_alley",
            "ja": "列車の音が響く細道",
            "links": {
              "base": [
                "path by train tracks",
                "narrow neighborhood road"
              ],
              "customize": [
                "echoing train sound",
                "narrow road stillness",
                "trainline atmosphere"
              ],
              "settings": [
                "trackside fence",
                "utility poles",
                "narrow roadside wall"
              ]
            }
          },
          {
            "id": "road_under_overpass_dim",
            "ja": "高架沿いの薄暗い道",
            "links": {
              "base": [
                "road under railway overpass",
                "road beside railway"
              ],
              "customize": [
                "dim overpass shade",
                "cool shadowed air",
                "empty road stillness"
              ],
              "settings": [
                "overpass shadow",
                "concrete retaining wall",
                "chain-link fence"
              ]
            }
          },
          {
            "id": "road_crossing_dawn_glow",
            "ja": "朝焼けの踏切道",
            "links": {
              "base": [
                "rail crossing approach",
                "road beside railway"
              ],
              "customize": [
                "railway dawn glow",
                "trainline atmosphere",
                "open trackside perspective"
              ],
              "settings": [
                "yellow crossing barriers",
                "crossing alarm lamps",
                "overhead railway wires"
              ]
            }
          },
          {
            "id": "road_last_train_quiet",
            "ja": "終電後の線路沿いの道",
            "links": {
              "base": [
                "road beside railway",
                "trackside neighborhood road"
              ],
              "customize": [
                "post-last-train stillness",
                "trainline atmosphere",
                "late-night stillness"
              ],
              "settings": [
                "trackside fence",
                "distant crossing alarm glow",
                "empty sidewalks"
              ]
            }
          },
          {
            "id": "road_waiting_crossing_tension",
            "ja": "列車待ちの踏切前",
            "links": {
              "base": [
                "rail crossing approach",
                "road beside railway"
              ],
              "customize": [
                "tense crossing wait",
                "waiting-road tension",
                "trainline atmosphere"
              ],
              "settings": [
                "yellow crossing barriers",
                "crossing alarm lamps",
                "wet crossing stripes"
              ]
            }
          },
          {
            "id": "road_trackside_summer_grass",
            "ja": "夏草が揺れる線路脇の道",
            "links": {
              "base": [
                "path by train tracks",
                "trackside fence road"
              ],
              "customize": [
                "summer trackside air",
                "trackside grass rustle",
                "trainline atmosphere"
              ],
              "settings": [
                "summer grass railway embankment",
                "trackside gravel",
                "catenary poles"
              ]
            }
          },
          {
            "id": "road_snowy_trackside",
            "ja": "雪の線路沿いの道",
            "links": {
              "base": [
                "road beside railway",
                "path by train tracks"
              ],
              "customize": [
                "snow-muted trackside air",
                "post-last-train stillness",
                "cold railway morning"
              ],
              "settings": [
                "snow-dusted crossing planks",
                "trackside fence",
                "trackside gravel"
              ]
            }
          },
          {
            "id": "road_rail_bridge_sidepath",
            "ja": "鉄橋脇の風が抜ける道",
            "links": {
              "base": [
                "path beside rail bridge",
                "road beside railway"
              ],
              "customize": [
                "rail bridge echo",
                "wind-through-bridge gap",
                "open trackside perspective"
              ],
              "settings": [
                "rail bridge truss",
                "bridge pillars",
                "trackside fence"
              ]
            }
          }
        ]
      },
      {
        "group": "🌑 薄暗い道・夜道",
        "items": [
          {
            "id": "road_sparse_lamplight_night",
            "ja": "街灯の少ない夜道",
            "links": {
              "base": [
                "dim night road",
                "quiet side street"
              ],
              "customize": [
                "sparse streetlights",
                "late-night stillness",
                "narrow road stillness"
              ],
              "settings": [
                "isolated streetlights",
                "long darkness ahead",
                "faint curb line"
              ]
            }
          },
          {
            "id": "road_dark_lane_rain",
            "ja": "雨の暗い路地道",
            "links": {
              "base": [
                "dark back road",
                "quiet side street"
              ],
              "customize": [
                "rainy roadside air",
                "late-night stillness",
                "wet urban silence"
              ],
              "settings": [
                "rain puddles",
                "dim streetlights",
                "wet wall reflections"
              ]
            }
          },
          {
            "id": "road_foggy_night",
            "ja": "霧のかかった夜道",
            "links": {
              "base": [
                "dim night road",
                "riverside road"
              ],
              "customize": [
                "foggy night air",
                "cool shadowed air",
                "empty road stillness"
              ],
              "settings": [
                "mist under streetlights",
                "isolated streetlights",
                "soft road glow"
              ]
            }
          },
          {
            "id": "road_midnight_empty",
            "ja": "深夜の人気のない通り",
            "links": {
              "base": [
                "quiet side street",
                "dim night road"
              ],
              "customize": [
                "deep midnight road",
                "late-night stillness",
                "empty road stillness"
              ],
              "settings": [
                "empty sidewalks",
                "isolated streetlights",
                "long darkness ahead"
              ]
            }
          },
          {
            "id": "road_back_alley_blue_midnight",
            "ja": "青白い深夜の裏道",
            "links": {
              "base": [
                "dark back road",
                "dim night road"
              ],
              "customize": [
                "blue midnight glow",
                "late-night stillness",
                "cool shadowed air"
              ],
              "settings": [
                "blue-tinted streetlights",
                "wet asphalt gloss",
                "long darkness ahead"
              ]
            }
          },
          {
            "id": "road_moonlit_residential_night",
            "ja": "月明かりだけの住宅地の夜道",
            "links": {
              "base": [
                "dim night road",
                "residential lane"
              ],
              "customize": [
                "moonlit roadside air",
                "empty road stillness",
                "cool shadowed air"
              ],
              "settings": [
                "moonlit road surface",
                "silent house silhouettes",
                "faint curb line"
              ]
            }
          },
          {
            "id": "road_underpass_damp_night",
            "ja": "高架下の湿った夜道",
            "links": {
              "base": [
                "dark back road",
                "road under elevated bridge"
              ],
              "customize": [
                "damp underpass air",
                "underpass depth perspective",
                "empty road stillness"
              ],
              "settings": [
                "underpass shadows",
                "wet wall reflections",
                "chain-link fence"
              ]
            }
          },
          {
            "id": "road_tunnel_like_narrow_night",
            "ja": "先の見えない細い夜道",
            "links": {
              "base": [
                "narrow neighborhood road",
                "dim night road"
              ],
              "customize": [
                "tunnel-like night depth",
                "narrow road stillness",
                "sparse streetlights"
              ],
              "settings": [
                "long darkness ahead",
                "faint curb line",
                "isolated streetlights"
              ]
            }
          },
          {
            "id": "road_rain_after_midnight_lane",
            "ja": "雨上がりの真夜中の路地道",
            "links": {
              "base": [
                "dark back road",
                "quiet side street"
              ],
              "customize": [
                "after-rain midnight air",
                "wet urban silence",
                "late-night stillness"
              ],
              "settings": [
                "rain puddles",
                "wet asphalt gloss",
                "isolated streetlights"
              ]
            }
          },
          {
            "id": "road_single_vending_machine_night",
            "ja": "自販機だけが光る夜道",
            "links": {
              "base": [
                "quiet side street",
                "dim night road"
              ],
              "customize": [
                "lonely roadside glow",
                "empty road stillness",
                "cool shadowed air"
              ],
              "settings": [
                "glowing vending machine",
                "isolated streetlights",
                "empty sidewalks"
              ]
            }
          }
        ]
      },
      {
        "group": "🌉 川沿いの道・水辺道路",
        "items": [
          {
            "id": "road_riverside_twilight",
            "ja": "夕暮れの川沿い歩道",
            "links": {
              "base": [
                "riverside path",
                "riverside road"
              ],
              "customize": [
                "twilight riverside glow",
                "riverside breeze",
                "waterfront stillness"
              ],
              "settings": [
                "riverside railing",
                "river surface reflections",
                "embankment blocks"
              ]
            }
          },
          {
            "id": "road_embankment_rain",
            "ja": "雨の堤防道",
            "links": {
              "base": [
                "embankment road",
                "riverside road"
              ],
              "customize": [
                "rainy riverside air",
                "waterfront stillness",
                "windy open road"
              ],
              "settings": [
                "wet guardrail",
                "riverbank grass",
                "rain puddles"
              ]
            }
          },
          {
            "id": "road_riverside_night",
            "ja": "夜の川沿い道路",
            "links": {
              "base": [
                "riverside road",
                "waterside promenade road"
              ],
              "customize": [
                "night waterside glow",
                "riverside breeze",
                "late-night stillness"
              ],
              "settings": [
                "bridge lights in distance",
                "river surface reflections",
                "lined streetlights"
              ]
            }
          },
          {
            "id": "road_waterside_morning",
            "ja": "朝の水辺遊歩道",
            "links": {
              "base": [
                "waterside promenade road",
                "riverside path"
              ],
              "customize": [
                "morning waterside air",
                "soft riverside breeze",
                "open walking route"
              ],
              "settings": [
                "riverside benches",
                "path railings",
                "soft water reflections"
              ]
            }
          },
          {
            "id": "road_riverside_dawn_mist",
            "ja": "朝霧の川沿い散歩道",
            "links": {
              "base": [
                "riverside promenade road",
                "riverside path"
              ],
              "customize": [
                "morning waterside air",
                "riverside morning haze",
                "soft riverside breeze"
              ],
              "settings": [
                "mist over river surface",
                "riverside railing",
                "waterside stairs"
              ]
            }
          },
          {
            "id": "road_riverside_after_rain",
            "ja": "雨上がりの川沿い遊歩道",
            "links": {
              "base": [
                "riverside promenade road",
                "waterside promenade road"
              ],
              "customize": [
                "after-rain riverside air",
                "waterfront stillness",
                "river surface after rain"
              ],
              "settings": [
                "wet promenade tiles",
                "soft water reflections",
                "waterside fence"
              ]
            }
          },
          {
            "id": "road_riverside_evening_reflection",
            "ja": "夕焼けが映る川沿い道路",
            "links": {
              "base": [
                "riverside road",
                "levee-top road"
              ],
              "customize": [
                "sunset river reflections",
                "open levee wind",
                "twilight riverside glow"
              ],
              "settings": [
                "river surface reflections",
                "levee grass slope",
                "long riverside fence"
              ]
            }
          },
          {
            "id": "road_riverside_lit_embankment_night",
            "ja": "街灯が続く夜の堤防道",
            "links": {
              "base": [
                "embankment road",
                "levee-top road"
              ],
              "customize": [
                "night waterside glow",
                "embankment line of lights",
                "late-night stillness"
              ],
              "settings": [
                "lined streetlights",
                "wet levee pavement",
                "distant bridge lights"
              ]
            }
          },
          {
            "id": "road_riverside_winter",
            "ja": "冬の白い川沿い道",
            "links": {
              "base": [
                "riverside road",
                "waterside promenade road"
              ],
              "customize": [
                "winter waterside chill",
                "cold open river wind",
                "waterfront stillness"
              ],
              "settings": [
                "pale winter river light",
                "bare riverside grass",
                "concrete riverside edge"
              ]
            }
          },
          {
            "id": "road_riverside_spring_petals",
            "ja": "桜が散る川沿い歩道",
            "links": {
              "base": [
                "riverside path",
                "riverside promenade road"
              ],
              "customize": [
                "spring riverside breeze",
                "falling petals by water",
                "soft riverside breeze"
              ],
              "settings": [
                "petal-strewn path",
                "riverside benches",
                "soft water reflections"
              ]
            }
          }
        ]
      },
      {
        "group": "🌁 橋・高架・連絡橋",
        "items": [
          {
            "id": "road_pedestrian_bridge_night",
            "ja": "夜の歩道橋",
            "links": {
              "base": [
                "pedestrian bridge approach",
                "bridge roadway"
              ],
              "customize": [
                "night bridge glow",
                "elevated road wind",
                "urban route tension"
              ],
              "settings": [
                "bridge handrails",
                "bridge lights",
                "stair shadows"
              ]
            }
          },
          {
            "id": "road_long_bridge_twilight",
            "ja": "夕暮れの長い橋",
            "links": {
              "base": [
                "long bridge roadway",
                "bridge roadway"
              ],
              "customize": [
                "twilight bridge wind",
                "long open perspective",
                "evening roadside glow"
              ],
              "settings": [
                "bridge handrails",
                "distant city lights",
                "road center line"
              ]
            }
          },
          {
            "id": "road_bridge_rain",
            "ja": "雨の橋上道路",
            "links": {
              "base": [
                "bridge roadway",
                "long bridge roadway"
              ],
              "customize": [
                "rainy bridge air",
                "windy open road",
                "wet urban silence"
              ],
              "settings": [
                "wet bridge surface",
                "bridge handrails",
                "warning reflectors"
              ]
            }
          },
          {
            "id": "road_underpass_corridor",
            "ja": "高架橋下の通路",
            "links": {
              "base": [
                "underpass corridor",
                "road under elevated bridge"
              ],
              "customize": [
                "dim overpass shade",
                "cool shadowed air",
                "empty road stillness"
              ],
              "settings": [
                "bridge pillars",
                "underpass shadows",
                "concrete retaining wall"
              ]
            }
          },
          {
            "id": "road_side_of_rail_bridge",
            "ja": "川を渡る鉄橋の脇道",
            "links": {
              "base": [
                "path beside rail bridge",
                "riverside road"
              ],
              "customize": [
                "bridge rumble in distance",
                "riverside breeze",
                "long open perspective"
              ],
              "settings": [
                "steel bridge silhouette",
                "trackside fence",
                "river surface reflections"
              ]
            }
          },
          {
            "id": "road_bridge_dawn_mist",
            "ja": "朝霧に沈む長い橋",
            "links": {
              "base": [
                "long bridge roadway",
                "river crossing bridge road"
              ],
              "customize": [
                "pre-dawn bridge glow",
                "bridge-top morning mist",
                "long bridge horizon"
              ],
              "settings": [
                "misty bridge lamps",
                "bridge handrails",
                "river surface reflections"
              ]
            }
          },
          {
            "id": "road_windy_overpass",
            "ja": "強風が抜ける高架道路脇",
            "links": {
              "base": [
                "road beside elevated expressway",
                "road under elevated bridge"
              ],
              "customize": [
                "strong bridge crosswind",
                "long open perspective",
                "elevated road echo"
              ],
              "settings": [
                "elevated expressway columns",
                "highway joint shadows",
                "chain-link fence"
              ]
            }
          },
          {
            "id": "road_ped_bridge_drizzle",
            "ja": "霧雨の歩道橋",
            "links": {
              "base": [
                "pedestrian bridge stairs approach",
                "pedestrian bridge approach"
              ],
              "customize": [
                "drizzly bridge air",
                "quiet connector-bridge tension",
                "evening roadside glow"
              ],
              "settings": [
                "wet bridge handrails",
                "row of bridge lights",
                "stair shadows"
              ]
            }
          },
          {
            "id": "road_connector_bridge_predawn",
            "ja": "夜明け前の連絡橋",
            "links": {
              "base": [
                "connector bridge walkway",
                "bridge roadway"
              ],
              "customize": [
                "pre-dawn bridge glow",
                "river-crossing route",
                "cold predawn stillness"
              ],
              "settings": [
                "metal connector bridge railings",
                "distant bridge lights",
                "overlook railings"
              ]
            }
          },
          {
            "id": "road_bridge_riverlight_night",
            "ja": "川光が揺れる夜の橋上道路",
            "links": {
              "base": [
                "windy bridge roadway",
                "bridge roadway"
              ],
              "customize": [
                "night bridge glow",
                "waterfront stillness",
                "river-crossing route"
              ],
              "settings": [
                "bridge lights",
                "river surface reflections",
                "bridge handrails"
              ]
            }
          }
        ]
      }
    ],
    "base": [
      {
        "group": "🛣 一般道路・生活道路",
        "items": [
          {
            "ja": "田舎道",
            "en": "country road"
          },
          {
            "ja": "農道",
            "en": "farm lane"
          },
          {
            "ja": "地方の脇道",
            "en": "rural side road"
          },
          {
            "ja": "住宅地の道",
            "en": "residential lane"
          },
          {
            "ja": "静かな横道",
            "en": "quiet side street"
          },
          {
            "ja": "細い生活道路",
            "en": "narrow neighborhood road"
          },
          {
            "ja": "田んぼ脇の道",
            "en": "road beside rice fields"
          },
          {
            "ja": "用水路沿いの農道",
            "en": "road beside irrigation canal"
          },
          {
            "ja": "畑脇の作業道",
            "en": "fieldside service path"
          }
        ]
      },
      {
        "group": "🚉 線路沿い・踏切周辺",
        "items": [
          {
            "ja": "線路沿いの道",
            "en": "road beside railway"
          },
          {
            "ja": "線路脇の小道",
            "en": "path by train tracks"
          },
          {
            "ja": "踏切前の道",
            "en": "rail crossing approach"
          },
          {
            "ja": "鉄道高架下の道",
            "en": "road under railway overpass"
          },
          {
            "ja": "線路沿いのフェンス道",
            "en": "trackside service road"
          },
          {
            "ja": "踏切脇の生活道路",
            "en": "side street by crossing"
          },
          {
            "ja": "駅裏の線路沿い道",
            "en": "backstreet by station tracks"
          },
          {
            "ja": "鉄橋脇の細道",
            "en": "path beside rail bridge"
          },
          {
            "ja": "高架沿いの生活道路",
            "en": "neighborhood road under elevated tracks"
          },
          {
            "ja": "保線用通路脇の道",
            "en": "road beside maintenance path"
          },
          {
            "ja": "線路沿いの砂利道",
            "en": "gravel trackside road"
          }
        ]
      },
      {
        "group": "🌊 川沿い・水辺の道",
        "items": [
          {
            "ja": "川沿いの道",
            "en": "riverside road"
          },
          {
            "ja": "川沿い歩道",
            "en": "riverside path"
          },
          {
            "ja": "堤防道",
            "en": "embankment road"
          },
          {
            "ja": "水辺道路",
            "en": "waterside promenade road"
          },
          {
            "ja": "河川敷沿いの道",
            "en": "riverside service road"
          },
          {
            "ja": "川沿い遊歩道",
            "en": "riverside promenade road"
          },
          {
            "ja": "堤防上の道",
            "en": "levee-top road"
          },
          {
            "ja": "水門脇の道",
            "en": "road by floodgate"
          },
          {
            "ja": "橋脇の川沿い道",
            "en": "riverside road by bridge"
          },
          {
            "ja": "河川敷へ降りる道",
            "en": "slope down to riverbank"
          }
        ]
      },
      {
        "group": "🌁 橋・高架・連絡橋",
        "items": [
          {
            "ja": "橋上道路",
            "en": "bridge roadway"
          },
          {
            "ja": "長い橋",
            "en": "long bridge roadway"
          },
          {
            "ja": "歩道橋のたもと",
            "en": "pedestrian bridge approach"
          },
          {
            "ja": "高架橋下の通路",
            "en": "underpass corridor"
          },
          {
            "ja": "高架橋下の道",
            "en": "road under elevated bridge"
          },
          {
            "ja": "鉄橋脇の道",
            "en": "path beside rail bridge"
          },
          {
            "ja": "歩道橋の階段道",
            "en": "pedestrian bridge stairs approach"
          },
          {
            "ja": "連絡橋",
            "en": "connector bridge walkway"
          },
          {
            "ja": "高架道路脇の道",
            "en": "road beside elevated expressway"
          },
          {
            "ja": "川を渡る長橋",
            "en": "river crossing bridge road"
          },
          {
            "ja": "風の強い橋上道路",
            "en": "windy bridge roadway"
          }
        ]
      },
      {
        "group": "🌑 夜道・暗がり",
        "items": [
          {
            "ja": "薄暗い夜道",
            "en": "dim night road"
          },
          {
            "ja": "暗い裏道",
            "en": "dark back road"
          },
          {
            "ja": "霧の道",
            "en": "foggy road"
          },
          {
            "ja": "人気のない通り",
            "en": "empty side street"
          },
          {
            "ja": "月明かりの住宅地の道",
            "en": "moonlit residential road"
          },
          {
            "ja": "高架下の夜道",
            "en": "underpass night road"
          },
          {
            "ja": "先の見えない細道",
            "en": "tunnel-like narrow road"
          },
          {
            "ja": "自販機だけが光る道",
            "en": "vending-machine-lit road"
          },
          {
            "ja": "青白い真夜中の路地",
            "en": "blue midnight alley"
          }
        ]
      }
    ],
    "customize": [
      {
        "group": "🕒 時間帯・抜け感",
        "items": [
          {
            "ja": "朝の水辺の空気",
            "en": "morning waterside air"
          },
          {
            "ja": "夕方の道の光",
            "en": "evening roadside glow"
          },
          {
            "ja": "夕暮れの橋風",
            "en": "twilight bridge wind"
          },
          {
            "ja": "深夜の道",
            "en": "deep midnight road"
          },
          {
            "ja": "長い遠近の抜け",
            "en": "long open perspective"
          },
          {
            "ja": "開けた歩行導線",
            "en": "open walking route"
          },
          {
            "ja": "真昼の乾いた空気",
            "en": "dry noon countryside air"
          },
          {
            "ja": "夜明け前の青い空気",
            "en": "pre-dawn blue roadside air"
          },
          {
            "ja": "収穫期の暖かな光",
            "en": "warm harvest-season glow"
          },
          {
            "ja": "朝焼けの鉄道光",
            "en": "railway dawn glow"
          },
          {
            "ja": "線路沿いの長い抜け",
            "en": "open trackside perspective"
          },
          {
            "ja": "高架下の暗い抜け",
            "en": "underpass depth perspective"
          },
          {
            "ja": "青白い深夜光",
            "en": "blue midnight glow"
          },
          {
            "ja": "真夜中の濡れた光",
            "en": "wet asphalt glow"
          },
          {
            "ja": "夜道の先の見えない抜け",
            "en": "tunnel-like night depth"
          },
          {
            "ja": "夜のさびしい道の灯り",
            "en": "lonely roadside glow"
          },
          {
            "ja": "朝霧の川辺の抜け",
            "en": "misty riverside depth"
          },
          {
            "ja": "夕焼けの水面光",
            "en": "sunset river reflections"
          },
          {
            "ja": "堤防上の抜けた視界",
            "en": "open levee perspective"
          },
          {
            "ja": "夜明け前の橋光",
            "en": "pre-dawn bridge glow"
          },
          {
            "ja": "橋の上の朝霧",
            "en": "bridge-top morning mist"
          },
          {
            "ja": "長橋の抜けた視界",
            "en": "long bridge horizon"
          }
        ]
      },
      {
        "group": "🌦 天候・空気",
        "items": [
          {
            "ja": "雨の道の空気",
            "en": "rainy roadside air"
          },
          {
            "ja": "雨の橋の空気",
            "en": "rainy bridge air"
          },
          {
            "ja": "霧の夜気",
            "en": "foggy night air"
          },
          {
            "ja": "冷たい影の空気",
            "en": "cool shadowed air"
          },
          {
            "ja": "夏の道端の空気",
            "en": "summer roadside air"
          },
          {
            "ja": "涼しい朝霧",
            "en": "cool morning haze"
          },
          {
            "ja": "濡れた都市の静けさ",
            "en": "wet urban silence"
          },
          {
            "ja": "冬枯れの道の空気",
            "en": "winter-bare roadside air"
          },
          {
            "ja": "夜明け前の冷えた静けさ",
            "en": "cold predawn stillness"
          },
          {
            "ja": "夏草の揺れる線路脇の空気",
            "en": "summer trackside air"
          },
          {
            "ja": "雪に吸われた沿線の静けさ",
            "en": "snow-muted trackside air"
          },
          {
            "ja": "冷たい鉄道朝の空気",
            "en": "cold railway morning"
          },
          {
            "ja": "高架下の湿った空気",
            "en": "damp underpass air"
          },
          {
            "ja": "月明かりの夜気",
            "en": "moonlit roadside air"
          },
          {
            "ja": "雨上がりの深夜の空気",
            "en": "after-rain midnight air"
          },
          {
            "ja": "青白い真夜中の冷気",
            "en": "cold blue midnight air"
          },
          {
            "ja": "朝の川霧",
            "en": "riverside morning haze"
          },
          {
            "ja": "雨上がりの川辺の空気",
            "en": "after-rain riverside air"
          },
          {
            "ja": "冬の水辺の冷気",
            "en": "winter waterside chill"
          },
          {
            "ja": "冷たい川風",
            "en": "cold open river wind"
          },
          {
            "ja": "霧雨の橋の空気",
            "en": "drizzly bridge air"
          },
          {
            "ja": "強風が吹く橋の上",
            "en": "strong bridge crosswind"
          }
        ]
      },
      {
        "group": "🧭 導線・気配",
        "items": [
          {
            "ja": "静かな田舎道の流れ",
            "en": "quiet countryside flow"
          },
          {
            "ja": "列車沿線の気配",
            "en": "trainline atmosphere"
          },
          {
            "ja": "人気のない道の静けさ",
            "en": "empty road stillness"
          },
          {
            "ja": "狭い道の静けさ",
            "en": "narrow road stillness"
          },
          {
            "ja": "川沿いの風",
            "en": "riverside breeze"
          },
          {
            "ja": "水辺の静けさ",
            "en": "waterfront stillness"
          },
          {
            "ja": "高架上の風",
            "en": "elevated road wind"
          },
          {
            "ja": "風の強い開けた道",
            "en": "windy open road"
          },
          {
            "ja": "橋を渡る緊張感",
            "en": "urban route tension"
          },
          {
            "ja": "列車音の反響",
            "en": "echoing train sound"
          },
          {
            "ja": "橋の振動音",
            "en": "bridge rumble in distance"
          },
          {
            "ja": "待ちの張る道路感",
            "en": "waiting-road tension"
          },
          {
            "ja": "街灯の少なさ",
            "en": "sparse streetlights"
          },
          {
            "ja": "夜更けの静けさ",
            "en": "late-night stillness"
          },
          {
            "ja": "柔らかな川風",
            "en": "soft riverside breeze"
          },
          {
            "ja": "稲穂を揺らす風",
            "en": "rice-field wind"
          },
          {
            "ja": "月夜の田舎気配",
            "en": "moonlit countryside mood"
          },
          {
            "ja": "収穫後の静けさ",
            "en": "post-harvest quiet"
          },
          {
            "ja": "終電後の線路静けさ",
            "en": "post-last-train stillness"
          },
          {
            "ja": "踏切待ちの緊張感",
            "en": "tense crossing wait"
          },
          {
            "ja": "鉄橋に響く残響",
            "en": "rail bridge echo"
          },
          {
            "ja": "橋の隙間を抜ける風",
            "en": "wind-through-bridge gap"
          },
          {
            "ja": "定期列車の生活リズム",
            "en": "routine train rhythm"
          },
          {
            "ja": "遠くの警報音の気配",
            "en": "distant crossing alarm glow"
          },
          {
            "ja": "夏草の擦れる線路気配",
            "en": "trackside grass rustle"
          },
          {
            "ja": "人気のない住宅地の静けさ",
            "en": "empty residential stillness"
          },
          {
            "ja": "自販機だけが残る気配",
            "en": "vending-machine-lit loneliness"
          },
          {
            "ja": "真夜中の裏道の張りつめ",
            "en": "tense midnight backroad"
          },
          {
            "ja": "川面を渡る朝風",
            "en": "riverside dawn breeze"
          },
          {
            "ja": "雨上がりの水辺の静けさ",
            "en": "river surface after rain"
          },
          {
            "ja": "堤防上の風",
            "en": "open levee wind"
          },
          {
            "ja": "街灯が続く堤防の気配",
            "en": "embankment line of lights"
          },
          {
            "ja": "春の川辺の風",
            "en": "spring riverside breeze"
          },
          {
            "ja": "川辺に舞う花びら",
            "en": "falling petals by water"
          },
          {
            "ja": "高架道路の反響",
            "en": "elevated road echo"
          },
          {
            "ja": "連絡橋の静かな緊張",
            "en": "quiet connector-bridge tension"
          },
          {
            "ja": "川を越える導線",
            "en": "river-crossing route"
          }
        ]
      }
    ],
    "settings": [
      {
        "group": "🪧 路面・欄干・境界",
        "items": [
          {
            "ja": "雨水たまり",
            "en": "rain puddles"
          },
          {
            "ja": "濡れた橋面",
            "en": "wet bridge surface"
          },
          {
            "ja": "道路のタイヤ痕",
            "en": "wet tire tracks"
          },
          {
            "ja": "道路中央線",
            "en": "road center line"
          },
          {
            "ja": "かすかな縁石ライン",
            "en": "faint curb line"
          },
          {
            "ja": "欄干",
            "en": "bridge handrails"
          },
          {
            "ja": "川沿い手すり",
            "en": "riverside railing"
          },
          {
            "ja": "遊歩道の手すり",
            "en": "path railings"
          },
          {
            "ja": "濡れたガードレール",
            "en": "wet guardrail"
          },
          {
            "ja": "白い道路ポール",
            "en": "white roadside posts"
          },
          {
            "ja": "濡れたアスファルトの光沢",
            "en": "wet asphalt gloss"
          },
          {
            "ja": "細い側溝",
            "en": "narrow roadside gutter"
          },
          {
            "ja": "水辺フェンス",
            "en": "waterside fence"
          },
          {
            "ja": "濡れた遊歩道タイル",
            "en": "wet promenade tiles"
          },
          {
            "ja": "長い川沿いフェンス",
            "en": "long riverside fence"
          }
        ]
      },
      {
        "group": "💡 光・反射・見通し",
        "items": [
          {
            "ja": "孤立した街灯",
            "en": "isolated streetlights"
          },
          {
            "ja": "並んだ街灯",
            "en": "lined streetlights"
          },
          {
            "ja": "街灯下の霧",
            "en": "mist under streetlights"
          },
          {
            "ja": "橋灯り",
            "en": "bridge lights"
          },
          {
            "ja": "遠くの街明かり",
            "en": "distant city lights"
          },
          {
            "ja": "川面反射",
            "en": "river surface reflections"
          },
          {
            "ja": "柔らかな水面反射",
            "en": "soft water reflections"
          },
          {
            "ja": "前方の長い暗がり",
            "en": "long darkness ahead"
          },
          {
            "ja": "道路の淡い光",
            "en": "soft road glow"
          },
          {
            "ja": "月に照らされた路面",
            "en": "moonlit road surface"
          },
          {
            "ja": "青白い街灯",
            "en": "blue-tinted streetlights"
          },
          {
            "ja": "自販機の孤独な光",
            "en": "glowing vending machine"
          },
          {
            "ja": "消えかけた防犯灯",
            "en": "failing security light"
          },
          {
            "ja": "遠くの橋灯り",
            "en": "distant bridge lights"
          },
          {
            "ja": "冬の薄い川光",
            "en": "pale winter river light"
          },
          {
            "ja": "橋の街灯列",
            "en": "row of bridge lights"
          },
          {
            "ja": "霧に沈む橋灯",
            "en": "misty bridge lamps"
          }
        ]
      },
      {
        "group": "🏗 橋・線路・構造物",
        "items": [
          {
            "ja": "踏切信号",
            "en": "rail crossing signal"
          },
          {
            "ja": "踏切の警告灯",
            "en": "warning lights"
          },
          {
            "ja": "濡れた踏切線",
            "en": "wet crossing stripes"
          },
          {
            "ja": "線路脇フェンス",
            "en": "trackside fence"
          },
          {
            "ja": "鉄道架線",
            "en": "overhead railway wires"
          },
          {
            "ja": "橋脚",
            "en": "bridge pillars"
          },
          {
            "ja": "高架下の影",
            "en": "underpass shadows"
          },
          {
            "ja": "コンクリート擁壁",
            "en": "concrete retaining wall"
          },
          {
            "ja": "金網フェンス",
            "en": "chain-link fence"
          },
          {
            "ja": "鉄橋のシルエット",
            "en": "steel bridge silhouette"
          },
          {
            "ja": "河川敷ブロック",
            "en": "embankment blocks"
          },
          {
            "ja": "路肩の用水路",
            "en": "irrigation ditch by road"
          },
          {
            "ja": "黄色い踏切柵",
            "en": "yellow crossing barriers"
          },
          {
            "ja": "踏切警報灯",
            "en": "crossing alarm lamps"
          },
          {
            "ja": "遠くの踏切灯",
            "en": "distant crossing alarm glow"
          },
          {
            "ja": "線路脇の砂利",
            "en": "trackside gravel"
          },
          {
            "ja": "架線柱",
            "en": "catenary poles"
          },
          {
            "ja": "鉄橋トラス",
            "en": "rail bridge truss"
          },
          {
            "ja": "踏切板の雪残り",
            "en": "snow-dusted crossing planks"
          },
          {
            "ja": "川辺の階段",
            "en": "waterside stairs"
          },
          {
            "ja": "コンクリートの川縁",
            "en": "concrete riverside edge"
          },
          {
            "ja": "夏草の線路法面",
            "en": "summer grass railway embankment"
          },
          {
            "ja": "住宅の黒いシルエット",
            "en": "silent house silhouettes"
          },
          {
            "ja": "高架道路の支柱",
            "en": "elevated expressway columns"
          },
          {
            "ja": "高架継ぎ目の影",
            "en": "highway joint shadows"
          },
          {
            "ja": "金属の連絡橋手すり",
            "en": "metal connector bridge railings"
          },
          {
            "ja": "橋を見下ろす欄干",
            "en": "overlook railings"
          }
        ]
      },
      {
        "group": "🌿 道端・細部",
        "items": [
          {
            "ja": "道端の雑草",
            "en": "roadside weeds"
          },
          {
            "ja": "道沿いの電柱",
            "en": "telephone poles along road"
          },
          {
            "ja": "道路脇の草地霧",
            "en": "mist over roadside fields"
          },
          {
            "ja": "狭い路肩歩道",
            "en": "narrow shoulder path"
          },
          {
            "ja": "空の歩道",
            "en": "empty sidewalks"
          },
          {
            "ja": "川沿いのベンチ",
            "en": "riverside benches"
          },
          {
            "ja": "階段の影",
            "en": "stair shadows"
          },
          {
            "ja": "道路の陽光",
            "en": "sunlit asphalt"
          },
          {
            "ja": "オレンジの路肩光",
            "en": "orange road edge light"
          },
          {
            "ja": "道端の稲穂",
            "en": "roadside rice stalks"
          },
          {
            "ja": "乾いた轍",
            "en": "dry wheel ruts"
          },
          {
            "ja": "路面の白焼け",
            "en": "sun-bleached asphalt"
          },
          {
            "ja": "刈り取り後の畑縁",
            "en": "stubbled field edges"
          },
          {
            "ja": "かすかな路面霧",
            "en": "faint road mist"
          },
          {
            "ja": "冬枯れの草むら",
            "en": "bare roadside grasses"
          },
          {
            "ja": "道路脇の草",
            "en": "roadside grasses"
          },
          {
            "ja": "濡れた壁面反射",
            "en": "wet wall reflections"
          },
          {
            "ja": "堤防の草斜面",
            "en": "levee grass slope"
          },
          {
            "ja": "川辺に散った花びら",
            "en": "petal-strewn path"
          },
          {
            "ja": "川辺の枯れ草",
            "en": "bare riverside grass"
          },
          {
            "ja": "錆びた線路フェンス",
            "en": "rusted trackside fence"
          },
          {
            "ja": "駅裏の細い抜け道",
            "en": "backstreet cut by station"
          },
          {
            "ja": "保線路の脇草",
            "en": "maintenance-path weeds"
          },
          {
            "ja": "路肩の古い自販機",
            "en": "old roadside vending machine"
          },
          {
            "ja": "濡れたブロック塀",
            "en": "wet concrete wall"
          },
          {
            "ja": "夜の住宅フェンス",
            "en": "night residential fence"
          },
          {
            "ja": "濡れた橋欄干",
            "en": "wet bridge handrails"
          }
        ]
      }
    ]
  },
  {
    "id": "countryside_town_collection",
    "title": "🌾 田舎・地方町並み特化コレクション",
    "subtitle": "農村、古民家集落、地方商店街、山あい、海辺の小さな町まで、静けさと生活の息づかいを多層で噛ませる、地方背景コレクション",
    "complete": [
      {
        "group": "🌾 農村・田園",
        "items": [
          {
            "id": "country_ricefield_summer",
            "ja": "夏の田んぼ道",
            "links": {
              "base": [
                "rice field road",
                "country lane"
              ],
              "customize": [
                "summer countryside",
                "quiet countryside",
                "warm country air"
              ],
              "settings": [
                "distant mountains",
                "utility poles",
                "rice field reflections"
              ]
            }
          },
          {
            "id": "country_ricefield_evening",
            "ja": "夕焼けの田園風景",
            "links": {
              "base": [
                "rice field road",
                "rural fields"
              ],
              "customize": [
                "country sunset",
                "quiet countryside",
                "gentle evening breeze"
              ],
              "settings": [
                "orange sky glow",
                "distant mountains",
                "country houses"
              ]
            }
          },
          {
            "id": "country_ricefield_rain",
            "ja": "雨の田んぼ道",
            "links": {
              "base": [
                "rice field road",
                "country lane"
              ],
              "customize": [
                "rainy countryside",
                "humid rural air",
                "quiet countryside"
              ],
              "settings": [
                "wet road reflections",
                "rain puddles",
                "overcast sky"
              ]
            }
          },
          {
            "id": "country_farm_morning_mist",
            "ja": "朝霧の農村",
            "links": {
              "base": [
                "farm village",
                "rural fields"
              ],
              "customize": [
                "misty morning",
                "cool country air",
                "quiet countryside"
              ],
              "settings": [
                "morning haze",
                "distant mountains",
                "vegetable fields"
              ]
            }
          }
        ]
      },
      {
        "group": "🏡 集落・古民家",
        "items": [
          {
            "id": "country_old_house_sunset",
            "ja": "夕暮れの古民家集落",
            "links": {
              "base": [
                "old japanese houses",
                "rural settlement"
              ],
              "customize": [
                "country sunset",
                "nostalgic countryside",
                "quiet countryside"
              ],
              "settings": [
                "wooden facades",
                "narrow stone lane",
                "warm window lights"
              ]
            }
          },
          {
            "id": "country_old_house_rain",
            "ja": "雨の古民家通り",
            "links": {
              "base": [
                "old japanese houses",
                "country village street"
              ],
              "customize": [
                "rainy countryside",
                "nostalgic countryside",
                "still rural air"
              ],
              "settings": [
                "wet stone path",
                "wooden signboards",
                "eaves drips"
              ]
            }
          },
          {
            "id": "country_old_house_winter",
            "ja": "冬の静かな古民家集落",
            "links": {
              "base": [
                "rural settlement",
                "old japanese houses"
              ],
              "customize": [
                "winter countryside",
                "cold rural air",
                "silent village"
              ],
              "settings": [
                "bare trees",
                "thin chimney smoke",
                "pale winter sky"
              ]
            }
          },
          {
            "id": "country_old_house_night",
            "ja": "夜の灯りが残る古民家集落",
            "links": {
              "base": [
                "old japanese houses",
                "rural settlement"
              ],
              "customize": [
                "country night",
                "quiet countryside",
                "still rural air"
              ],
              "settings": [
                "warm window lights",
                "dim lantern light",
                "deep village shadows"
              ]
            }
          }
        ]
      },
      {
        "group": "🏪 地方町・商店街",
        "items": [
          {
            "id": "country_local_shotengai_rain",
            "ja": "雨の地方商店街",
            "links": {
              "base": [
                "local shopping street",
                "small town main street"
              ],
              "customize": [
                "rainy countryside",
                "faded town mood",
                "quiet foot traffic"
              ],
              "settings": [
                "covered arcade",
                "aged signboards",
                "wet asphalt reflections"
              ]
            }
          },
          {
            "id": "country_local_shotengai_evening",
            "ja": "夕方の地方商店街",
            "links": {
              "base": [
                "local shopping street",
                "small town main street"
              ],
              "customize": [
                "country sunset",
                "small-town bustle",
                "nostalgic countryside"
              ],
              "settings": [
                "shop awnings",
                "bicycle parking",
                "warm street lamps"
              ]
            }
          },
          {
            "id": "country_station_front_morning",
            "ja": "朝の地方駅前",
            "links": {
              "base": [
                "local station front",
                "small town main street"
              ],
              "customize": [
                "morning country town",
                "commuter countryside",
                "cool country air"
              ],
              "settings": [
                "station clock",
                "bus stop shelter",
                "utility poles"
              ]
            }
          },
          {
            "id": "country_roadside_noon",
            "ja": "昼の郊外ロードサイド",
            "links": {
              "base": [
                "roadside town",
                "suburban roadside"
              ],
              "customize": [
                "day countryside",
                "roadside quiet",
                "clear rural daylight"
              ],
              "settings": [
                "parking lot",
                "vending machines",
                "wide roadside sky"
              ]
            }
          }
        ]
      },
      {
        "group": "⛰ 山あいの町",
        "items": [
          {
            "id": "country_mountain_town_mist",
            "ja": "朝霧の山あいの町",
            "links": {
              "base": [
                "mountain town",
                "hillside road"
              ],
              "customize": [
                "misty morning",
                "mountain town hush",
                "cool country air"
              ],
              "settings": [
                "steep slopes",
                "layered mountains",
                "morning haze"
              ]
            }
          },
          {
            "id": "country_mountain_town_evening",
            "ja": "夕暮れの山あいの町",
            "links": {
              "base": [
                "mountain town",
                "country village street"
              ],
              "customize": [
                "country sunset",
                "mountain town hush",
                "quiet countryside"
              ],
              "settings": [
                "layered mountains",
                "winding road",
                "warm window lights"
              ]
            }
          },
          {
            "id": "country_mountain_town_rain",
            "ja": "雨の山道集落",
            "links": {
              "base": [
                "mountain hamlet",
                "hillside road"
              ],
              "customize": [
                "rainy countryside",
                "humid rural air",
                "mountain town hush"
              ],
              "settings": [
                "wet guardrails",
                "foggy slopes",
                "dripping eaves"
              ]
            }
          }
        ]
      },
      {
        "group": "⚓ 海辺の小さな町",
        "items": [
          {
            "id": "country_seaside_town_breeze",
            "ja": "海風の吹く小さな港町",
            "links": {
              "base": [
                "coastal town",
                "fishing village"
              ],
              "customize": [
                "sea breeze town",
                "quiet harbor life",
                "bright coastal day"
              ],
              "settings": [
                "harbor boats",
                "seagulls",
                "salty light haze"
              ]
            }
          },
          {
            "id": "country_seaside_town_sunset",
            "ja": "夕焼けの海辺の町",
            "links": {
              "base": [
                "coastal town",
                "seafront road"
              ],
              "customize": [
                "coastal sunset",
                "quiet harbor life",
                "gentle evening breeze"
              ],
              "settings": [
                "orange sky glow",
                "harbor boats",
                "sea wall"
              ]
            }
          },
          {
            "id": "country_seaside_town_rain",
            "ja": "雨の海辺の小道",
            "links": {
              "base": [
                "fishing village",
                "seafront road"
              ],
              "customize": [
                "rainy seaside",
                "humid coastal air",
                "quiet harbor life"
              ],
              "settings": [
                "wet harbor concrete",
                "gray sea horizon",
                "rope and buoys"
              ]
            }
          }
        ]
      }
    ],
    "base": [
      {
        "group": "🌾 農村・田園",
        "items": [
          {
            "ja": "田んぼ道",
            "en": "rice field road"
          },
          {
            "ja": "農道",
            "en": "country lane"
          },
          {
            "ja": "田園地帯",
            "en": "rural fields"
          },
          {
            "ja": "農村",
            "en": "farm village"
          }
        ]
      },
      {
        "group": "🏡 集落・古民家",
        "items": [
          {
            "ja": "古民家の並ぶ通り",
            "en": "old japanese houses"
          },
          {
            "ja": "集落",
            "en": "rural settlement"
          },
          {
            "ja": "村道",
            "en": "country village street"
          },
          {
            "ja": "細い石道",
            "en": "narrow stone lane"
          }
        ]
      },
      {
        "group": "🏪 地方町・商店街",
        "items": [
          {
            "ja": "地方商店街",
            "en": "local shopping street"
          },
          {
            "ja": "地方の大通り",
            "en": "small town main street"
          },
          {
            "ja": "地方駅前",
            "en": "local station front"
          },
          {
            "ja": "郊外ロードサイド",
            "en": "suburban roadside"
          },
          {
            "ja": "ロードサイドの町",
            "en": "roadside town"
          }
        ]
      },
      {
        "group": "⛰ 山あい・海辺",
        "items": [
          {
            "ja": "山あいの町",
            "en": "mountain town"
          },
          {
            "ja": "山道の集落",
            "en": "mountain hamlet"
          },
          {
            "ja": "斜面沿いの道",
            "en": "hillside road"
          },
          {
            "ja": "海辺の町",
            "en": "coastal town"
          },
          {
            "ja": "漁村",
            "en": "fishing village"
          },
          {
            "ja": "海沿いの道",
            "en": "seafront road"
          }
        ]
      }
    ],
    "customize": [
      {
        "group": "⏰ 時間帯・空気",
        "items": [
          {
            "ja": "朝の地方町",
            "en": "morning country town"
          },
          {
            "ja": "昼の地方の明瞭感",
            "en": "day countryside"
          },
          {
            "ja": "夕焼けの地方町",
            "en": "country sunset"
          },
          {
            "ja": "夜の地方町",
            "en": "country night"
          },
          {
            "ja": "朝霧",
            "en": "misty morning"
          }
        ]
      },
      {
        "group": "🌧 天候・季節",
        "items": [
          {
            "ja": "雨の地方",
            "en": "rainy countryside"
          },
          {
            "ja": "湿った田舎の空気",
            "en": "humid rural air"
          },
          {
            "ja": "冬の地方",
            "en": "winter countryside"
          },
          {
            "ja": "夏の地方",
            "en": "summer countryside"
          },
          {
            "ja": "海辺の雨",
            "en": "rainy seaside"
          }
        ]
      },
      {
        "group": "🌾 地方の気配",
        "items": [
          {
            "ja": "静かな田舎",
            "en": "quiet countryside"
          },
          {
            "ja": "郷愁のある田舎",
            "en": "nostalgic countryside"
          },
          {
            "ja": "人通りの少ない地方町",
            "en": "quiet foot traffic"
          },
          {
            "ja": "小さな町の賑わい",
            "en": "small-town bustle"
          },
          {
            "ja": "通勤のある地方町",
            "en": "commuter countryside"
          },
          {
            "ja": "山あいの静けさ",
            "en": "mountain town hush"
          },
          {
            "ja": "港町の暮らし",
            "en": "quiet harbor life"
          },
          {
            "ja": "止まったような空気",
            "en": "still rural air"
          }
        ]
      },
      {
        "group": "🍃 温度・風",
        "items": [
          {
            "ja": "やわらかな夕風",
            "en": "gentle evening breeze"
          },
          {
            "ja": "涼しい田舎の空気",
            "en": "cool country air"
          },
          {
            "ja": "暖かな田舎の空気",
            "en": "warm country air"
          },
          {
            "ja": "明るい海辺の昼",
            "en": "bright coastal day"
          },
          {
            "ja": "海風のある町",
            "en": "sea breeze town"
          },
          {
            "ja": "澄んだ昼光",
            "en": "clear rural daylight"
          },
          {
            "ja": "ロードサイドの静けさ",
            "en": "roadside quiet"
          }
        ]
      }
    ],
    "settings": [
      {
        "group": "🌄 空・遠景",
        "items": [
          {
            "ja": "遠くの山並み",
            "en": "distant mountains"
          },
          {
            "ja": "段なりの山影",
            "en": "layered mountains"
          },
          {
            "ja": "曇天",
            "en": "overcast sky"
          },
          {
            "ja": "夕焼け空の反射",
            "en": "orange sky glow"
          },
          {
            "ja": "朝霧の層",
            "en": "morning haze"
          },
          {
            "ja": "広いロードサイドの空",
            "en": "wide roadside sky"
          },
          {
            "ja": "灰色の海平線",
            "en": "gray sea horizon"
          }
        ]
      },
      {
        "group": "🏘 町並み・生活細部",
        "items": [
          {
            "ja": "電柱",
            "en": "utility poles"
          },
          {
            "ja": "農家の家並み",
            "en": "country houses"
          },
          {
            "ja": "野菜畑",
            "en": "vegetable fields"
          },
          {
            "ja": "木の外壁",
            "en": "wooden facades"
          },
          {
            "ja": "古い看板",
            "en": "wooden signboards"
          },
          {
            "ja": "商店のひさし",
            "en": "shop awnings"
          },
          {
            "ja": "自転車置き場",
            "en": "bicycle parking"
          },
          {
            "ja": "駅前の時計",
            "en": "station clock"
          },
          {
            "ja": "バス停の屋根",
            "en": "bus stop shelter"
          },
          {
            "ja": "駐車場",
            "en": "parking lot"
          },
          {
            "ja": "自販機",
            "en": "vending machines"
          },
          {
            "ja": "港の船",
            "en": "harbor boats"
          },
          {
            "ja": "海鳥",
            "en": "seagulls"
          },
          {
            "ja": "ロープとブイ",
            "en": "rope and buoys"
          },
          {
            "ja": "防波堤",
            "en": "sea wall"
          }
        ]
      },
      {
        "group": "✨ 光・空気・状態",
        "items": [
          {
            "ja": "田んぼの水面反射",
            "en": "rice field reflections"
          },
          {
            "ja": "濡れた道の反射",
            "en": "wet road reflections"
          },
          {
            "ja": "水たまり",
            "en": "rain puddles"
          },
          {
            "ja": "窓の暖灯",
            "en": "warm window lights"
          },
          {
            "ja": "薄い煙突の煙",
            "en": "thin chimney smoke"
          },
          {
            "ja": "薄い冬空",
            "en": "pale winter sky"
          },
          {
            "ja": "薄暗い灯籠",
            "en": "dim lantern light"
          },
          {
            "ja": "深い村影",
            "en": "deep village shadows"
          },
          {
            "ja": "濡れた石道",
            "en": "wet stone path"
          },
          {
            "ja": "軒先の雨だれ",
            "en": "eaves drips"
          },
          {
            "ja": "街灯の暖光",
            "en": "warm street lamps"
          },
          {
            "ja": "濡れたアスファルト反射",
            "en": "wet asphalt reflections"
          },
          {
            "ja": "急な斜面",
            "en": "steep slopes"
          },
          {
            "ja": "曲がり道",
            "en": "winding road"
          },
          {
            "ja": "濡れたガードレール",
            "en": "wet guardrails"
          },
          {
            "ja": "霧の斜面",
            "en": "foggy slopes"
          },
          {
            "ja": "塩気を含む光の霞",
            "en": "salty light haze"
          },
          {
            "ja": "濡れた港のコンクリート",
            "en": "wet harbor concrete"
          }
        ]
      }
    ]
  },
  {
    "id": "depopulated_decline_collection",
    "title": "🏚 過疎・衰退町特化コレクション",
    "subtitle": "シャッター街、無人駅、寂れた温泉街、取り残された住宅地まで、人の気配が薄れていく町の静けさと衰退の痕跡を多層で噛ませる、衰退町背景コレクション",
    "complete": [
      {
        "group": "🏚 シャッター街・寂れた通り",
        "items": [
          {
            "id": "decline_shutter_evening",
            "ja": "夕暮れのシャッター街",
            "links": {
              "base": [
                "shuttered shopping street",
                "deserted town street"
              ],
              "customize": [
                "deserted evening",
                "aging town air",
                "faded local town"
              ],
              "settings": [
                "closed shutters",
                "faded shop signs",
                "empty sidewalks"
              ]
            }
          },
          {
            "id": "decline_shutter_rain",
            "ja": "雨のシャッター街",
            "links": {
              "base": [
                "shuttered shopping street"
              ],
              "customize": [
                "rainy deserted town",
                "humid empty town",
                "aging town air"
              ],
              "settings": [
                "wet pavement reflections",
                "closed shutters",
                "dim signboards"
              ]
            }
          },
          {
            "id": "decline_arcade_empty",
            "ja": "人影のない商店街",
            "links": {
              "base": [
                "abandoned local arcade",
                "deserted town street"
              ],
              "customize": [
                "silent daytime",
                "abandoned town mood",
                "faded local town"
              ],
              "settings": [
                "empty sidewalks",
                "aging storefronts",
                "weathered posters"
              ]
            }
          },
          {
            "id": "decline_shop_closed_night",
            "ja": "閉店後の色褪せた通り",
            "links": {
              "base": [
                "aging main street"
              ],
              "customize": [
                "after closing hours",
                "late night emptiness",
                "aging town air"
              ],
              "settings": [
                "dark storefront windows",
                "dim signboards",
                "few lit windows"
              ]
            }
          },
          {
            "id": "decline_windy_street",
            "ja": "風だけが通る通り",
            "links": {
              "base": [
                "deserted town street"
              ],
              "customize": [
                "windy empty street",
                "silent daytime",
                "abandoned town mood"
              ],
              "settings": [
                "scattered leaves",
                "empty sidewalks",
                "flapping notices"
              ]
            }
          }
        ]
      },
      {
        "group": "🚉 無人駅・停留所",
        "items": [
          {
            "id": "decline_station_no_people",
            "ja": "人影のない駅前",
            "links": {
              "base": [
                "deserted station front",
                "rural station plaza"
              ],
              "customize": [
                "silent daytime",
                "aging town air",
                "sparse transit town"
              ],
              "settings": [
                "empty station signage",
                "few parked bicycles",
                "vacant ticket gate"
              ]
            }
          },
          {
            "id": "decline_station_day",
            "ja": "無人駅の昼",
            "links": {
              "base": [
                "unmanned local station"
              ],
              "customize": [
                "midday stillness",
                "quiet local rail",
                "faded local town"
              ],
              "settings": [
                "weathered platform signs",
                "empty platform benches",
                "overgrown tracksides"
              ]
            }
          },
          {
            "id": "decline_station_last_train",
            "ja": "終電後の寂れた駅前",
            "links": {
              "base": [
                "deserted station front"
              ],
              "customize": [
                "after last train",
                "late night emptiness",
                "sparse transit town"
              ],
              "settings": [
                "few lit windows",
                "dim platform lamps",
                "empty taxi stand"
              ]
            }
          },
          {
            "id": "decline_busstop_rain",
            "ja": "雨の古びたバス停",
            "links": {
              "base": [
                "weathered rural bus stop"
              ],
              "customize": [
                "rainy deserted town",
                "humid empty town",
                "sparse transit town"
              ],
              "settings": [
                "wet pavement reflections",
                "old timetable board",
                "empty bus shelter"
              ]
            }
          },
          {
            "id": "decline_station_fog",
            "ja": "朝霧のローカル駅",
            "links": {
              "base": [
                "unmanned local station",
                "rural station plaza"
              ],
              "customize": [
                "morning fog town",
                "quiet local rail",
                "silent daytime"
              ],
              "settings": [
                "misty tracks",
                "weathered platform signs",
                "empty platform benches"
              ]
            }
          }
        ]
      },
      {
        "group": "♨ 寂れた観光地・温泉街",
        "items": [
          {
            "id": "decline_onsen_rain",
            "ja": "雨の寂れた温泉街",
            "links": {
              "base": [
                "aging hot spring town",
                "faded tourist street"
              ],
              "customize": [
                "rainy deserted town",
                "quiet tourist off-season",
                "aging town air"
              ],
              "settings": [
                "wet inn signs",
                "closed souvenir shops",
                "steamy drainage"
              ]
            }
          },
          {
            "id": "decline_onsen_evening",
            "ja": "夕暮れの古い温泉街",
            "links": {
              "base": [
                "aging hot spring town"
              ],
              "customize": [
                "deserted evening",
                "quiet tourist off-season",
                "faded local town"
              ],
              "settings": [
                "old ryokan facades",
                "warm street lamps",
                "few lit windows"
              ]
            }
          },
          {
            "id": "decline_tourist_ruins",
            "ja": "閉館した観光地跡",
            "links": {
              "base": [
                "abandoned tourist facility",
                "faded tourist street"
              ],
              "customize": [
                "abandoned town mood",
                "silent daytime",
                "aging town air"
              ],
              "settings": [
                "boarded entrances",
                "peeling posters",
                "rusted guide signs"
              ]
            }
          },
          {
            "id": "decline_souvenir_street",
            "ja": "色褪せた土産物通り",
            "links": {
              "base": [
                "faded tourist street"
              ],
              "customize": [
                "quiet tourist off-season",
                "midday stillness",
                "faded local town"
              ],
              "settings": [
                "closed souvenir shops",
                "weathered banners",
                "empty sidewalks"
              ]
            }
          }
        ]
      },
      {
        "group": "🏘 取り残された住宅地・団地",
        "items": [
          {
            "id": "decline_housing_weeds",
            "ja": "雑草の伸びる住宅地",
            "links": {
              "base": [
                "aging residential block",
                "quiet housing area"
              ],
              "customize": [
                "abandoned town mood",
                "silent daytime",
                "faded local town"
              ],
              "settings": [
                "overgrown lots",
                "cracked sidewalks",
                "few parked cars"
              ]
            }
          },
          {
            "id": "decline_danchi_evening",
            "ja": "夕暮れの古い団地",
            "links": {
              "base": [
                "old apartment complex"
              ],
              "customize": [
                "deserted evening",
                "aging residential silence",
                "faded local town"
              ],
              "settings": [
                "aging balconies",
                "few lit windows",
                "empty courtyard"
              ]
            }
          },
          {
            "id": "decline_danchi_rain",
            "ja": "雨の団地通路",
            "links": {
              "base": [
                "old apartment complex",
                "aging residential block"
              ],
              "customize": [
                "rainy deserted town",
                "humid empty town",
                "aging residential silence"
              ],
              "settings": [
                "wet concrete corridors",
                "dim corridor lights",
                "empty bicycle racks"
              ]
            }
          },
          {
            "id": "decline_residential_night",
            "ja": "夜の灯りが少ない住宅地",
            "links": {
              "base": [
                "quiet housing area"
              ],
              "customize": [
                "late night emptiness",
                "aging residential silence",
                "sparse neighborhood life"
              ],
              "settings": [
                "few lit windows",
                "dark side streets",
                "empty parking spaces"
              ]
            }
          },
          {
            "id": "decline_parking_lot",
            "ja": "放置された駐車場のある住宅地",
            "links": {
              "base": [
                "aging residential block"
              ],
              "customize": [
                "silent daytime",
                "sparse neighborhood life",
                "faded local town"
              ],
              "settings": [
                "empty parking spaces",
                "overgrown lots",
                "cracked asphalt"
              ]
            }
          }
        ]
      }
    ],
    "base": [
      {
        "group": "🏚 商店街・通り",
        "items": [
          {
            "ja": "シャッター街",
            "en": "shuttered shopping street"
          },
          {
            "ja": "人通りのない町の通り",
            "en": "deserted town street"
          },
          {
            "ja": "古びたメインストリート",
            "en": "aging main street"
          },
          {
            "ja": "寂れたアーケード",
            "en": "abandoned local arcade"
          }
        ]
      },
      {
        "group": "🚉 駅・停留所",
        "items": [
          {
            "ja": "無人駅",
            "en": "unmanned local station"
          },
          {
            "ja": "寂れた駅前",
            "en": "deserted station front"
          },
          {
            "ja": "地方駅前広場",
            "en": "rural station plaza"
          },
          {
            "ja": "古びたバス停",
            "en": "weathered rural bus stop"
          }
        ]
      },
      {
        "group": "♨ 観光地・温泉街",
        "items": [
          {
            "ja": "寂れた温泉街",
            "en": "aging hot spring town"
          },
          {
            "ja": "色褪せた観光通り",
            "en": "faded tourist street"
          },
          {
            "ja": "閉館した観光施設",
            "en": "abandoned tourist facility"
          }
        ]
      },
      {
        "group": "🏘 住宅地・団地",
        "items": [
          {
            "ja": "古い住宅ブロック",
            "en": "aging residential block"
          },
          {
            "ja": "古い団地",
            "en": "old apartment complex"
          },
          {
            "ja": "静かな住宅地",
            "en": "quiet housing area"
          }
        ]
      }
    ],
    "customize": [
      {
        "group": "🕰 時間帯・静けさ",
        "items": [
          {
            "ja": "夕暮れの寂しさ",
            "en": "deserted evening"
          },
          {
            "ja": "昼の静止感",
            "en": "silent daytime"
          },
          {
            "ja": "閉店後の静けさ",
            "en": "after closing hours"
          },
          {
            "ja": "深夜の空白",
            "en": "late night emptiness"
          },
          {
            "ja": "昼の停滞感",
            "en": "midday stillness"
          },
          {
            "ja": "終電後の空白",
            "en": "after last train"
          }
        ]
      },
      {
        "group": "🌧 天候・空気",
        "items": [
          {
            "ja": "雨の過疎町",
            "en": "rainy deserted town"
          },
          {
            "ja": "湿った無人の空気",
            "en": "humid empty town"
          },
          {
            "ja": "朝霧の町",
            "en": "morning fog town"
          },
          {
            "ja": "風だけが通る空気",
            "en": "windy empty street"
          }
        ]
      },
      {
        "group": "📉 衰退・過疎の気配",
        "items": [
          {
            "ja": "古びた町の空気",
            "en": "aging town air"
          },
          {
            "ja": "色褪せた地方町",
            "en": "faded local town"
          },
          {
            "ja": "人の減った交通町",
            "en": "sparse transit town"
          },
          {
            "ja": "観光オフシーズンの静けさ",
            "en": "quiet tourist off-season"
          },
          {
            "ja": "衰退した町の気配",
            "en": "abandoned town mood"
          },
          {
            "ja": "古い住宅地の静けさ",
            "en": "aging residential silence"
          },
          {
            "ja": "生活の減った住宅地",
            "en": "sparse neighborhood life"
          },
          {
            "ja": "静かなローカル鉄道の気配",
            "en": "quiet local rail"
          }
        ]
      }
    ],
    "settings": [
      {
        "group": "🏷 建物・看板",
        "items": [
          {
            "ja": "閉まったシャッター",
            "en": "closed shutters"
          },
          {
            "ja": "色褪せた店看板",
            "en": "faded shop signs"
          },
          {
            "ja": "古びた店舗正面",
            "en": "aging storefronts"
          },
          {
            "ja": "暗い看板",
            "en": "dim signboards"
          },
          {
            "ja": "駅の古い案内板",
            "en": "weathered platform signs"
          },
          {
            "ja": "駅前の無人サイン",
            "en": "empty station signage"
          },
          {
            "ja": "古い旅館の外観",
            "en": "old ryokan facades"
          },
          {
            "ja": "閉まった土産物屋",
            "en": "closed souvenir shops"
          },
          {
            "ja": "板で塞がれた入口",
            "en": "boarded entrances"
          }
        ]
      },
      {
        "group": "🛣 路面・周辺",
        "items": [
          {
            "ja": "濡れた路面反射",
            "en": "wet pavement reflections"
          },
          {
            "ja": "空っぽの歩道",
            "en": "empty sidewalks"
          },
          {
            "ja": "ひび割れた歩道",
            "en": "cracked sidewalks"
          },
          {
            "ja": "空の駐車スペース",
            "en": "empty parking spaces"
          },
          {
            "ja": "雑草の伸びた空き地",
            "en": "overgrown lots"
          },
          {
            "ja": "霧の線路",
            "en": "misty tracks"
          },
          {
            "ja": "無人のタクシー乗り場",
            "en": "empty taxi stand"
          }
        ]
      },
      {
        "group": "🧾 細部・痕跡",
        "items": [
          {
            "ja": "剥がれたポスター",
            "en": "weathered posters"
          },
          {
            "ja": "はためく注意紙",
            "en": "flapping notices"
          },
          {
            "ja": "少ない駐輪",
            "en": "few parked bicycles"
          },
          {
            "ja": "空のベンチ",
            "en": "empty platform benches"
          },
          {
            "ja": "生い茂る線路脇",
            "en": "overgrown tracksides"
          },
          {
            "ja": "古い時刻表",
            "en": "old timetable board"
          },
          {
            "ja": "空の待合所",
            "en": "empty bus shelter"
          },
          {
            "ja": "錆びた案内板",
            "en": "rusted guide signs"
          },
          {
            "ja": "色褪せたのぼり",
            "en": "weathered banners"
          },
          {
            "ja": "使われていない改札",
            "en": "vacant ticket gate"
          }
        ]
      },
      {
        "group": "💡 光・視界",
        "items": [
          {
            "ja": "少ない明かりの窓",
            "en": "few lit windows"
          },
          {
            "ja": "暗い店先窓",
            "en": "dark storefront windows"
          },
          {
            "ja": "暗い横道",
            "en": "dark side streets"
          },
          {
            "ja": "かすかな駅灯",
            "en": "dim platform lamps"
          },
          {
            "ja": "暖かな街灯",
            "en": "warm street lamps"
          },
          {
            "ja": "湯気の逃げる排水",
            "en": "steamy drainage"
          },
          {
            "ja": "人気のない中庭",
            "en": "empty courtyard"
          },
          {
            "ja": "濡れたコンクリート通路",
            "en": "wet concrete corridors"
          },
          {
            "ja": "薄暗い通路灯",
            "en": "dim corridor lights"
          },
          {
            "ja": "ひび割れたアスファルト",
            "en": "cracked asphalt"
          },
          {
            "ja": "散った枯れ葉",
            "en": "scattered leaves"
          }
        ]
      }
    ]
  },
{
  "id": "school_learning_collection",
  "title": "🏫 学校・学習施設特化コレクション",
  "subtitle": "教室・廊下・階段、図書室・自習室、理科室・実験室、美術室・工作室、音楽室・視聴覚室など、学びの屋内空間を、放課後の静けさ、蛍光灯、雨音、紙とチョークの気配、器具や机の並びで多層に噛ませる、学校・学習施設の屋内背景特化コレクション",
  "complete": [
    {
      "group": "🏫 教室・廊下・階段",
      "items": [
        {
          "id": "school_classroom_after_school",
          "ja": "放課後の静けさが沈む教室",
          "links": {
            "base": [
              "classroom interior"
            ],
            "customize": [
              "after-school hush",
              "fluorescent classroom stillness"
            ],
            "settings": [
              "stacked classroom chairs",
              "chalkboard eraser tray"
            ]
          }
        },
        {
          "id": "school_hallway_rainy",
          "ja": "雨音がにじむ学校廊下",
          "links": {
            "base": [
              "school hallway"
            ],
            "customize": [
              "rainy school quiet",
              "rainy window streak hush"
            ],
            "settings": [
              "row of shoe lockers",
              "rain-marked corridor windows"
            ]
          }
        },
        {
          "id": "school_stair_landing_evening",
          "ja": "夕方の光がたまる階段踊り場",
          "links": {
            "base": [
              "stair landing"
            ],
            "customize": [
              "sunset hallway glow",
              "empty campus interior hush"
            ],
            "settings": [
              "stairwell handrail",
              "landing window glow"
            ]
          }
        },
        {
          "id": "school_blackboard_morning",
          "ja": "朝の気配が張る黒板前",
          "links": {
            "base": [
              "blackboard front row"
            ],
            "customize": [
              "morning classroom light",
              "chalk dust stillness"
            ],
            "settings": [
              "chalkboard eraser tray",
              "teacher desk edge"
            ]
          }
        },
        {
          "id": "school_classroom_twilight_desks",
          "ja": "夕暮れに机列が沈む教室",
          "links": {
            "base": [
              "desk row classroom"
            ],
            "customize": [
              "twilight classroom hush",
              "sunset hallway glow"
            ],
            "settings": [
              "desk row alignment",
              "curtain-lit classroom window"
            ]
          }
        },
        {
          "id": "school_rainy_window_classroom",
          "ja": "雨粒の残る窓際教室",
          "links": {
            "base": [
              "window-side classroom"
            ],
            "customize": [
              "rainy school quiet",
              "rainy window streak hush"
            ],
            "settings": [
              "curtain-lit classroom window",
              "window latch shadow"
            ]
          }
        },
        {
          "id": "school_noon_empty_hallway",
          "ja": "昼休み後の気配が引いた廊下",
          "links": {
            "base": [
              "school hallway"
            ],
            "customize": [
              "lunch-break-after hush",
              "footsteps in hallway echo"
            ],
            "settings": [
              "classroom nameplate row",
              "polished hallway floor sheen"
            ]
          }
        },
        {
          "id": "school_stair_shadow_nightfall",
          "ja": "夕闇が降りる階段踊り場",
          "links": {
            "base": [
              "stair landing"
            ],
            "customize": [
              "nightfall stairwell hush",
              "empty campus interior hush"
            ],
            "settings": [
              "stairwell handrail",
              "landing emergency sign glow"
            ]
          }
        },
        {
          "id": "school_exam_sheet_classroom",
          "ja": "試験の紙が残る放課後の教室",
          "links": {
            "base": [
              "classroom interior"
            ],
            "customize": [
              "post-exam paper hush",
              "fluorescent classroom stillness"
            ],
            "settings": [
              "exam papers left on desks",
              "desk row alignment"
            ]
          }
        },
        {
          "id": "school_early_morning_shoe_lockers",
          "ja": "朝の下駄箱前にたまる静けさ",
          "links": {
            "base": [
              "shoe-locker foyer"
            ],
            "customize": [
              "early-morning foyer hush",
              "morning classroom light"
            ],
            "settings": [
              "row of shoe lockers",
              "umbrella stand rack"
            ]
          }
        }
      ]
    },
    {
      "group": "📚 図書室・自習室",
      "items": [
        {
          "id": "school_library_rain",
          "ja": "雨音がしみる図書室",
          "links": {
            "base": [
              "library reading room"
            ],
            "customize": [
              "library whisper hush",
              "rainy window streak hush"
            ],
            "settings": [
              "library desk lamps",
              "rolling book cart",
              "rain-beaded library window"
            ]
          }
        },
        {
          "id": "school_study_exam",
          "ja": "試験前の張りつめた自習室",
          "links": {
            "base": [
              "self-study cubicle area"
            ],
            "customize": [
              "exam-study silence",
              "fluorescent classroom stillness"
            ],
            "settings": [
              "desk partition row",
              "library desk lamps"
            ]
          }
        },
        {
          "id": "school_reading_seat_evening",
          "ja": "夕方の光が残る閲覧席",
          "links": {
            "base": [
              "library reading room"
            ],
            "customize": [
              "sunset hallway glow",
              "library whisper hush"
            ],
            "settings": [
              "window-side reading table",
              "rolling book cart"
            ]
          }
        },
        {
          "id": "school_bookshelf_closing",
          "ja": "閉館前の気配が細る書架通路",
          "links": {
            "base": [
              "bookshelf aisle"
            ],
            "customize": [
              "closing-time library hush",
              "empty campus interior hush"
            ],
            "settings": [
              "book spine labels",
              "rolling ladder rail"
            ]
          }
        },
        {
          "id": "school_library_opening_morning",
          "ja": "開館直後の朝の図書室",
          "links": {
            "base": [
              "library reading room"
            ],
            "customize": [
              "morning library hush",
              "library whisper hush"
            ],
            "settings": [
              "return counter desk lamp",
              "window-side reading table"
            ]
          }
        },
        {
          "id": "school_window_study_post_rain",
          "ja": "夕立後の湿り気が残る窓際自習席",
          "links": {
            "base": [
              "window-side study booth"
            ],
            "customize": [
              "post-rain study-seat hush",
              "exam-study silence"
            ],
            "settings": [
              "study booth divider",
              "rain-beaded library window"
            ]
          }
        },
        {
          "id": "school_reference_stack_exam",
          "ja": "参考書が積まれた試験期の自習席",
          "links": {
            "base": [
              "exam-season study tables"
            ],
            "customize": [
              "exam-season library tension",
              "exam-study silence"
            ],
            "settings": [
              "stacked reference books",
              "desk partition row"
            ]
          }
        },
        {
          "id": "school_return_counter_closing",
          "ja": "閉館直前の返却カウンター前",
          "links": {
            "base": [
              "library return counter"
            ],
            "customize": [
              "return-counter-before-closing hush",
              "closing-time library hush"
            ],
            "settings": [
              "return-book tray stack",
              "return counter desk lamp"
            ]
          }
        },
        {
          "id": "school_bookshelf_before_open",
          "ja": "開館前の薄暗い書架通路",
          "links": {
            "base": [
              "bookshelf aisle"
            ],
            "customize": [
              "before-opening library hush",
              "empty campus interior hush"
            ],
            "settings": [
              "catalog terminal glow",
              "rolling ladder rail",
              "catalog terminal keyboard"
            ]
          }
        },
        {
          "id": "school_sunbeam_reading_table",
          "ja": "木漏れ日が揺れる閲覧机",
          "links": {
            "base": [
              "library reading room"
            ],
            "customize": [
              "sunlight-dusted library hush",
              "library whisper hush"
            ],
            "settings": [
              "window-side reading table",
              "stacked reference books"
            ]
          }
        }
      ]
    },
    {
      "group": "🧪 理科室・実験室",
      "items": [
        {
          "id": "school_science_evening",
          "ja": "夕方の薄い陰りが差す理科室",
          "links": {
            "base": [
              "science lab bench rows"
            ],
            "customize": [
              "science lab sterile hush",
              "twilight science-room shade"
            ],
            "settings": [
              "lab glassware rack",
              "glassware reflections",
              "graduated cylinders"
            ]
          }
        },
        {
          "id": "school_experiment_before",
          "ja": "実験前の静けさが張る実験台",
          "links": {
            "base": [
              "sink-equipped lab bench"
            ],
            "customize": [
              "before-experiment stillness",
              "before-experiment tension"
            ],
            "settings": [
              "sink faucets",
              "test tube rack",
              "safety goggles tray"
            ]
          }
        },
        {
          "id": "school_prep_room_rain",
          "ja": "放課後の理科準備室寄りの静けさ",
          "links": {
            "base": [
              "science room near prep room"
            ],
            "customize": [
              "after-school science-lab hush",
              "prep-room-side hush"
            ],
            "settings": [
              "chemical shelves",
              "lab coat hanger"
            ]
          }
        },
        {
          "id": "school_science_white_fluorescent",
          "ja": "白い蛍光灯だけが残る理科室",
          "links": {
            "base": [
              "science lab bench rows"
            ],
            "customize": [
              "white fluorescent hush",
              "science lab sterile hush"
            ],
            "settings": [
              "science room blackboard",
              "gas tap line"
            ]
          }
        },
        {
          "id": "school_science_rainy_lab",
          "ja": "雨の日の湿った静けさがある実験室",
          "links": {
            "base": [
              "window-side science lab"
            ],
            "customize": [
              "rainy science-lab air",
              "rainy school quiet"
            ],
            "settings": [
              "glassware reflections",
              "experiment notebook"
            ]
          }
        },
        {
          "id": "school_science_pre_test",
          "ja": "試験前の張りつめが走る理科室",
          "links": {
            "base": [
              "science lab bench rows"
            ],
            "customize": [
              "pre-test science-lab tension",
              "white fluorescent hush"
            ],
            "settings": [
              "experiment notebook",
              "science room blackboard"
            ]
          }
        },
        {
          "id": "school_science_reagent_shelf_quiet",
          "ja": "薬品棚が並ぶ気温の低い理科室",
          "links": {
            "base": [
              "science lab with reagent shelves"
            ],
            "customize": [
              "reagent-shelf hush",
              "cold glassware glint"
            ],
            "settings": [
              "chemical shelves",
              "reagent cabinet glass"
            ]
          }
        },
        {
          "id": "school_science_window_twilight",
          "ja": "薄い陰りが差す窓際の理科室",
          "links": {
            "base": [
              "window-side science lab"
            ],
            "customize": [
              "twilight science-room shade",
              "after-school science-lab hush"
            ],
            "settings": [
              "glassware reflections",
              "microscope"
            ]
          }
        },
        {
          "id": "school_science_sink_before_class",
          "ja": "授業前の水気が残るシンク付き実験台",
          "links": {
            "base": [
              "sink-equipped lab bench"
            ],
            "customize": [
              "before-experiment stillness",
              "white fluorescent hush"
            ],
            "settings": [
              "lab sink basin",
              "beakers"
            ]
          }
        },
        {
          "id": "school_science_back_shelf_still",
          "ja": "後方棚の静けさが立つ理科室",
          "links": {
            "base": [
              "rear shelf zone of science lab"
            ],
            "customize": [
              "reagent-shelf hush",
              "science lab sterile hush"
            ],
            "settings": [
              "storage specimen jars",
              "chemical shelves"
            ]
          }
        },
        {
          "id": "school_lab_afterglow",
          "ja": "実験後の残光がにじむ夜の理科室",
          "links": {
            "base": [
              "science lab benches"
            ],
            "customize": [
              "white lab-light afterglow",
              "empty campus interior hush"
            ],
            "settings": [
              "microscope cover cloth",
              "lab glassware rack"
            ]
          }
        }
      ]
    },
    {
      "group": "🎨 美術室・工作室",
      "items": [
        {
          "id": "school_art_paint_smell",
          "ja": "絵の具の匂いが沈む美術室",
          "links": {
            "base": [
              "art studio worktables"
            ],
            "customize": [
              "paint-smell stillness",
              "workshop dust in light"
            ],
            "settings": [
              "easel row",
              "paint-stained floor",
              "dried paint on palette"
            ]
          }
        },
        {
          "id": "school_craft_after_school",
          "ja": "放課後の静けさが残る工作室",
          "links": {
            "base": [
              "craft room storage wall"
            ],
            "customize": [
              "after-school hush",
              "craft-room quiet"
            ],
            "settings": [
              "tool rack wall",
              "wood glue bottles",
              "woodcarving tool case"
            ]
          }
        },
        {
          "id": "school_art_desk_sunset",
          "ja": "夕光が差し込む制作机まわり",
          "links": {
            "base": [
              "art studio worktables"
            ],
            "customize": [
              "sunset hallway glow",
              "workshop dust in light"
            ],
            "settings": [
              "sunlit drafting table",
              "easel row"
            ]
          }
        },
        {
          "id": "school_art_prep_cleanup",
          "ja": "片付け途中の美術準備室",
          "links": {
            "base": [
              "art prep room"
            ],
            "customize": [
              "cleanup-after-class hush",
              "paint-smell stillness"
            ],
            "settings": [
              "brush drying rack",
              "stacked canvas boards"
            ]
          }
        },
        {
          "id": "school_art_plaster_evening",
          "ja": "夕方の石膏像の影が伸びる美術室",
          "links": {
            "base": [
              "plaster-cast corner"
            ],
            "customize": [
              "plaster-cast hush",
              "late-day art-room shade"
            ],
            "settings": [
              "plaster bust stand",
              "charcoal sketch board"
            ]
          }
        },
        {
          "id": "school_art_rainy_window",
          "ja": "雨の日の湿り気がある窓際美術室",
          "links": {
            "base": [
              "window-side art room"
            ],
            "customize": [
              "rainy art-room air",
              "paint-smell stillness"
            ],
            "settings": [
              "rain-marked studio window",
              "drying artwork rack"
            ]
          }
        },
        {
          "id": "school_art_drying_after_class",
          "ja": "乾きかけの作品が並ぶ放課後の美術室",
          "links": {
            "base": [
              "drying-rack side art room"
            ],
            "customize": [
              "after-class atelier hush",
              "half-dried paint stillness"
            ],
            "settings": [
              "drying artwork rack",
              "paint-water bucket"
            ]
          }
        },
        {
          "id": "school_craft_fluorescent_quiet",
          "ja": "白い蛍光灯だけが残る工作室",
          "links": {
            "base": [
              "craft workbench rows"
            ],
            "customize": [
              "fluorescent workshop hush",
              "glue-and-paper air"
            ],
            "settings": [
              "cutting mat table",
              "steel ruler set"
            ]
          }
        },
        {
          "id": "school_woodwork_dust_after_class",
          "ja": "木くずが残る放課後の木工室",
          "links": {
            "base": [
              "woodworking room bench"
            ],
            "customize": [
              "sawdust in still light",
              "after-school workshop hush"
            ],
            "settings": [
              "wood shavings",
              "clamp rack"
            ]
          }
        },
        {
          "id": "school_art_before_display",
          "ja": "展示前の作品が整列する美術室",
          "links": {
            "base": [
              "display-prep art room"
            ],
            "customize": [
              "pre-display tension",
              "after-class atelier hush"
            ],
            "settings": [
              "framed student works",
              "label cards on shelf"
            ]
          }
        },
        {
          "id": "school_craft_cleanup_before_leave",
          "ja": "帰り際の片付け気配が残る工作室",
          "links": {
            "base": [
              "craft workbench rows"
            ],
            "customize": [
              "cleanup-before-leaving hush",
              "craft-room quiet"
            ],
            "settings": [
              "tool tray cluster",
              "handwashing utility sink"
            ]
          }
        }
      ]
    },
    {
      "group": "🎵 音楽室・視聴覚室",
      "items": [
        {
          "id": "school_music_piano_evening",
          "ja": "夕方のピアノが沈む音楽室",
          "links": {
            "base": [
              "music room with piano"
            ],
            "customize": [
              "evening practice room hush",
              "instrument room echo"
            ],
            "settings": [
              "upright piano",
              "music stand cluster",
              "piano bench"
            ]
          }
        },
        {
          "id": "school_av_before_screening",
          "ja": "上映前の暗幕が張られた視聴覚室",
          "links": {
            "base": [
              "audiovisual room seats"
            ],
            "customize": [
              "projector-lit dimness",
              "before-screening hush"
            ],
            "settings": [
              "projector screen",
              "av control console",
              "spare remote storage box"
            ]
          }
        },
        {
          "id": "school_music_after_choir",
          "ja": "合唱後の余韻が残る音楽室",
          "links": {
            "base": [
              "music room with piano"
            ],
            "customize": [
              "after-choir hush",
              "instrument room echo"
            ],
            "settings": [
              "choir riser stack",
              "upright piano"
            ]
          }
        },
        {
          "id": "school_projector_dark_room",
          "ja": "プロジェクター光が漂う暗い視聴覚室",
          "links": {
            "base": [
              "projector classroom"
            ],
            "customize": [
              "projector-lit dimness",
              "empty campus interior hush"
            ],
            "settings": [
              "projector screen",
              "ceiling projector glow"
            ]
          }
        },
        {
          "id": "school_music_stands_after_class",
          "ja": "譜面台が残る放課後の音楽室",
          "links": {
            "base": [
              "music room with stand rows"
            ],
            "customize": [
              "sheet-music after-school hush",
              "fluorescent music-room hush"
            ],
            "settings": [
              "music stand cluster",
              "score binders"
            ]
          }
        },
        {
          "id": "school_music_rainy_window",
          "ja": "雨音がにじむ窓際音楽室",
          "links": {
            "base": [
              "window-side music room"
            ],
            "customize": [
              "rainy music-room air",
              "rain-on-music-room-window hush"
            ],
            "settings": [
              "rain-marked music-room windows",
              "upright piano"
            ]
          }
        },
        {
          "id": "school_music_before_chorus",
          "ja": "発声前の張りつめが走る音楽室",
          "links": {
            "base": [
              "choir-riser-side music room"
            ],
            "customize": [
              "pre-chorus breath tension",
              "music-room prelude hush"
            ],
            "settings": [
              "choir riser stack",
              "staff-line blackboard"
            ]
          }
        },
        {
          "id": "school_music_white_fluorescent",
          "ja": "白い蛍光灯だけが残る音楽室",
          "links": {
            "base": [
              "music room with stand rows"
            ],
            "customize": [
              "fluorescent music-room hush",
              "late-day rehearsal echo"
            ],
            "settings": [
              "wall clock in music room",
              "closed piano lid"
            ]
          }
        },
        {
          "id": "school_av_curtain_before_screening",
          "ja": "幕前の静けさが張る視聴覚室",
          "links": {
            "base": [
              "curtain-drawn audiovisual room"
            ],
            "customize": [
              "curtain-before-screening hush",
              "before-blackout tension"
            ],
            "settings": [
              "curtain-darkened windows",
              "dim aisle lights"
            ]
          }
        },
        {
          "id": "school_av_after_screening",
          "ja": "上映後の余韻が沈む視聴覚室",
          "links": {
            "base": [
              "audiovisual room seats"
            ],
            "customize": [
              "post-screening afterglow hush",
              "projector fan hum"
            ],
            "settings": [
              "projector remote on desk",
              "av control console"
            ]
          }
        },
        {
          "id": "school_av_old_speaker_room",
          "ja": "古いスピーカーが残る視聴覚室",
          "links": {
            "base": [
              "audiovisual room with speaker stacks"
            ],
            "customize": [
              "old-speaker muffled air",
              "after-screening quiet"
            ],
            "settings": [
              "old speaker cabinet",
              "coiled AV cables"
            ]
          }
        }
      ]
    }
  ],
  "base": [
    {
      "group": "🏫 教室・共用の場所",
      "items": [
        {
          "ja": "標準的な教室",
          "en": "classroom interior"
        },
        {
          "ja": "黒板前の席列",
          "en": "blackboard front row"
        },
        {
          "ja": "校舎の廊下",
          "en": "school hallway"
        },
        {
          "ja": "階段踊り場",
          "en": "stair landing"
        },
        {
          "ja": "窓沿いの廊下",
          "en": "window-side corridor"
        },
        {
          "ja": "机列が整った教室",
          "en": "desk row classroom"
        },
        {
          "ja": "窓際の教室",
          "en": "window-side classroom"
        },
        {
          "ja": "下駄箱前の昇降口ホール",
          "en": "shoe-locker foyer"
        }
      ]
    },
    {
      "group": "📚 図書・自習の場所",
      "items": [
        {
          "ja": "図書室の閲覧席エリア",
          "en": "library reading room"
        },
        {
          "ja": "自習ブースが並ぶ区画",
          "en": "self-study cubicle area"
        },
        {
          "ja": "書架のあいだの通路",
          "en": "bookshelf aisle"
        },
        {
          "ja": "図書返却カウンターまわり",
          "en": "library return counter"
        },
        {
          "ja": "窓際の自習ブース席",
          "en": "window-side study booth"
        },
        {
          "ja": "試験期の自習机エリア",
          "en": "exam-season study tables"
        }
      ]
    },
    {
      "group": "🧪 理科・実験の場所",
      "items": [
        {
          "ja": "実験台のある理科室",
          "en": "science lab benches"
        },
        {
          "ja": "実験台が並ぶ理科室",
          "en": "science lab bench rows"
        },
        {
          "ja": "流し台側の実験室",
          "en": "experiment room sink area"
        },
        {
          "ja": "シンク付き実験台",
          "en": "sink-equipped lab bench"
        },
        {
          "ja": "薬品棚のある理科室",
          "en": "science lab with reagent shelves"
        },
        {
          "ja": "理科準備室まわり",
          "en": "science prep room"
        },
        {
          "ja": "準備室寄りの理科室区画",
          "en": "science room near prep room"
        },
        {
          "ja": "窓際の理科室",
          "en": "window-side science lab"
        },
        {
          "ja": "理科室後方の棚まわり",
          "en": "rear shelf zone of science lab"
        }
      ]
    },
    {
      "group": "🎨 美術・工作の場所",
      "items": [
        {
          "ja": "作業机が並ぶ美術室",
          "en": "art studio worktables"
        },
        {
          "ja": "収納壁のある工作室",
          "en": "craft room storage wall"
        },
        {
          "ja": "美術準備室まわり",
          "en": "art prep room"
        },
        {
          "ja": "石膏像まわりの美術室区画",
          "en": "plaster-cast corner"
        },
        {
          "ja": "窓際の美術室席",
          "en": "window-side art room"
        },
        {
          "ja": "乾燥棚のある美術室",
          "en": "drying-rack side art room"
        },
        {
          "ja": "工作台が並ぶ工作室",
          "en": "craft workbench rows"
        },
        {
          "ja": "木工台のある工作室区画",
          "en": "woodworking room bench"
        },
        {
          "ja": "展示準備中の美術室区画",
          "en": "display-prep art room"
        }
      ]
    },
    {
      "group": "🎵 音楽・視聴覚の場所",
      "items": [
        {
          "ja": "ピアノのある音楽室前方",
          "en": "music room with piano"
        },
        {
          "ja": "譜面台が並ぶ音楽室",
          "en": "music room with stand rows"
        },
        {
          "ja": "合唱台寄りの音楽室区画",
          "en": "choir-riser-side music room"
        },
        {
          "ja": "窓際の音楽室席",
          "en": "window-side music room"
        },
        {
          "ja": "楽器棚のある音楽室",
          "en": "music room with instrument lockers"
        },
        {
          "ja": "視聴覚室の座席列",
          "en": "audiovisual room seats"
        },
        {
          "ja": "暗転した映写教室",
          "en": "projector classroom"
        },
        {
          "ja": "カーテンを閉めた視聴覚室",
          "en": "curtain-drawn audiovisual room"
        },
        {
          "ja": "スピーカーのある視聴覚室",
          "en": "audiovisual room with speaker stacks"
        },
        {
          "ja": "映写卓寄りの視聴覚室区画",
          "en": "AV booth-side classroom"
        }
      ]
    }
  ],
  "customize": [
    {
      "group": "⏰ 時間と校舎の静けさ",
      "items": [
        {
          "ja": "放課後に沈む静けさ",
          "en": "after-school hush"
        },
        {
          "ja": "雨の日の校舎に満ちる静けさ",
          "en": "rainy school quiet"
        },
        {
          "ja": "朝の教室に差す光",
          "en": "morning classroom light"
        },
        {
          "ja": "夕方の廊下に残る灯り",
          "en": "sunset hallway glow"
        },
        {
          "ja": "蛍光灯に沈む教室の静けさ",
          "en": "fluorescent classroom stillness"
        },
        {
          "ja": "閉館前の図書室に沈む静けさ",
          "en": "closing-time library hush"
        },
        {
          "ja": "理科室に漂う無菌めいた静けさ",
          "en": "science lab sterile hush"
        },
        {
          "ja": "上映前の幕内の静けさ",
          "en": "before-screening hush"
        },
        {
          "ja": "無人になった校舎の気配",
          "en": "empty campus interior hush"
        },
        {
          "ja": "夕暮れに沈む教室の静けさ",
          "en": "twilight classroom hush"
        },
        {
          "ja": "昼休み後に引いたざわめき",
          "en": "lunch-break-after hush"
        },
        {
          "ja": "夕闇に沈む階段の静けさ",
          "en": "nightfall stairwell hush"
        },
        {
          "ja": "試験後の紙だけが残る静けさ",
          "en": "post-exam paper hush"
        },
        {
          "ja": "朝の玄関ホールにたまる静けさ",
          "en": "early-morning foyer hush"
        }
      ]
    },
    {
      "group": "👣 学びの気配と音",
      "items": [
        {
          "ja": "図書室に満ちるささやきの静けさ",
          "en": "library whisper hush"
        },
        {
          "ja": "試験勉強に沈む静寂",
          "en": "exam-study silence"
        },
        {
          "ja": "チョーク粉が舞う静けさ",
          "en": "chalk dust stillness"
        },
        {
          "ja": "実験前に張る静けさ",
          "en": "before-experiment stillness"
        },
        {
          "ja": "薬品室まわりの静けさ",
          "en": "chemical-room hush"
        },
        {
          "ja": "工房で埃が光る静けさ",
          "en": "workshop dust in light"
        },
        {
          "ja": "工作室に沈む静けさ",
          "en": "craft-room quiet"
        },
        {
          "ja": "片付け後に残る静けさ",
          "en": "cleanup-after-class hush"
        },
        {
          "ja": "夕方の練習室に沈む静けさ",
          "en": "evening practice room hush"
        },
        {
          "ja": "楽器の残響が残る空気",
          "en": "instrument room echo"
        },
        {
          "ja": "合唱後に残る静けさ",
          "en": "after-choir hush"
        },
        {
          "ja": "プロジェクター光に沈む薄暗さ",
          "en": "projector-lit dimness"
        },
        {
          "ja": "廊下に響く足音の余韻",
          "en": "footsteps in hallway echo"
        },
        {
          "ja": "雨筋の残る窓際の静けさ",
          "en": "rainy window streak hush"
        },
        {
          "ja": "絵の具の匂いが漂う静けさ",
          "en": "paint-smell stillness"
        },
        {
          "ja": "朝の図書室に満ちる静けさ",
          "en": "morning library hush"
        },
        {
          "ja": "夕立後の自習席に残る静けさ",
          "en": "post-rain study-seat hush"
        },
        {
          "ja": "試験期の図書室に張る緊張",
          "en": "exam-season library tension"
        },
        {
          "ja": "閉館前の返却カウンターに沈む静けさ",
          "en": "return-counter-before-closing hush"
        },
        {
          "ja": "開館前の図書室に漂う静けさ",
          "en": "before-opening library hush"
        },
        {
          "ja": "木漏れ日が揺れる図書室の静けさ",
          "en": "sunlight-dusted library hush"
        }
      ]
    },
    {
      "group": "🧪 理科・実験の空気",
      "items": [
        {
          "ja": "白い蛍光灯に沈む静けさ",
          "en": "white fluorescent hush"
        },
        {
          "ja": "実験前に張る緊張",
          "en": "before-experiment tension"
        },
        {
          "ja": "放課後の理科室に沈む静けさ",
          "en": "after-school science-lab hush"
        },
        {
          "ja": "雨の日の理科室にたまる空気",
          "en": "rainy science-lab air"
        },
        {
          "ja": "試験前に張る緊張",
          "en": "pre-test science-lab tension"
        },
        {
          "ja": "薬品棚のそばにたまる静かな空気",
          "en": "reagent-shelf hush"
        },
        {
          "ja": "ガラス器具に宿る冷たさ",
          "en": "cold glassware glint"
        },
        {
          "ja": "夕方の理科室に差す薄い陰り",
          "en": "twilight science-room shade"
        },
        {
          "ja": "準備室寄りに沈む静けさ",
          "en": "prep-room-side hush"
        },
        {
          "ja": "白い灯りだけが残る実験室",
          "en": "white lab-light afterglow"
        }
      ]
    },
    {
      "group": "🎨 美術・工作の空気",
      "items": [
        {
          "ja": "放課後のアトリエに沈む静けさ",
          "en": "after-class atelier hush"
        },
        {
          "ja": "絵の具の匂いが漂う静けさ",
          "en": "paint-smell stillness"
        },
        {
          "ja": "半乾きの絵の具が残す静けさ",
          "en": "half-dried paint stillness"
        },
        {
          "ja": "石膏像に見られているような静けさ",
          "en": "plaster-cast hush"
        },
        {
          "ja": "雨の日の美術室にたまる空気",
          "en": "rainy art-room air"
        },
        {
          "ja": "夕方の美術室に差す薄い陰り",
          "en": "late-day art-room shade"
        },
        {
          "ja": "白い蛍光灯に沈む工作室の静けさ",
          "en": "fluorescent workshop hush"
        },
        {
          "ja": "木くずが光る工作室の静けさ",
          "en": "sawdust in still light"
        },
        {
          "ja": "接着剤と紙の匂いが残る工作室",
          "en": "glue-and-paper air"
        },
        {
          "ja": "放課後の工作室に沈む静けさ",
          "en": "after-school workshop hush"
        },
        {
          "ja": "展示前に張る緊張",
          "en": "pre-display tension"
        },
        {
          "ja": "帰り際の片付けに残る静けさ",
          "en": "cleanup-before-leaving hush"
        }
      ]
    },
    {
      "group": "🎵 音楽・視聴覚の空気",
      "items": [
        {
          "ja": "譜面が残る放課後の静けさ",
          "en": "sheet-music after-school hush"
        },
        {
          "ja": "雨の日の音楽室にたまる空気",
          "en": "rainy music-room air"
        },
        {
          "ja": "雨筋が残る音楽室窓の静けさ",
          "en": "rain-on-music-room-window hush"
        },
        {
          "ja": "発声前に張る緊張",
          "en": "pre-chorus breath tension"
        },
        {
          "ja": "演奏前に張る前奏めいた静けさ",
          "en": "music-room prelude hush"
        },
        {
          "ja": "楽器をしまった後に沈む静けさ",
          "en": "after-instrument-putaway hush"
        },
        {
          "ja": "白い蛍光灯だけが残る音楽室の静けさ",
          "en": "fluorescent music-room hush"
        },
        {
          "ja": "夕方の音楽室に残る薄い残響",
          "en": "late-day rehearsal echo"
        },
        {
          "ja": "幕前の視聴覚室に張る静けさ",
          "en": "curtain-before-screening hush"
        },
        {
          "ja": "上映後に沈む余韻",
          "en": "post-screening afterglow hush"
        },
        {
          "ja": "プロジェクター駆動音の低い響き",
          "en": "projector fan hum"
        },
        {
          "ja": "古いスピーカーがこもらせる空気",
          "en": "old-speaker muffled air"
        },
        {
          "ja": "暗転前に張る緊張",
          "en": "before-blackout tension"
        },
        {
          "ja": "上映後の教室に沈む静けさ",
          "en": "after-screening quiet"
        }
      ]
    }
  ],
  "settings": [
    {
      "group": "🪑 教室・共用の細部",
      "items": [
        {
          "ja": "積み上がった教室椅子",
          "en": "stacked classroom chairs"
        },
        {
          "ja": "黒板消しトレー",
          "en": "chalkboard eraser tray"
        },
        {
          "ja": "下駄箱の列",
          "en": "row of shoe lockers"
        },
        {
          "ja": "階段手すり",
          "en": "stairwell handrail"
        },
        {
          "ja": "踊り場に差す窓明かり",
          "en": "landing window glow"
        },
        {
          "ja": "教師机の角",
          "en": "teacher desk edge"
        },
        {
          "ja": "雨の跡が残る廊下窓",
          "en": "rain-marked corridor windows"
        },
        {
          "ja": "整った机列",
          "en": "desk row alignment"
        },
        {
          "ja": "カーテン越しの教室窓",
          "en": "curtain-lit classroom window"
        },
        {
          "ja": "窓の留め具の影",
          "en": "window latch shadow"
        },
        {
          "ja": "教室名札の列",
          "en": "classroom nameplate row"
        },
        {
          "ja": "磨かれた廊下床の艶",
          "en": "polished hallway floor sheen"
        },
        {
          "ja": "踊り場の非常口灯",
          "en": "landing emergency sign glow"
        },
        {
          "ja": "机に残る試験用紙",
          "en": "exam papers left on desks"
        },
        {
          "ja": "傘立てラック",
          "en": "umbrella stand rack"
        }
      ]
    },
    {
      "group": "📚 図書・自習の細部",
      "items": [
        {
          "ja": "閲覧机のデスクランプ",
          "en": "library desk lamps"
        },
        {
          "ja": "返本用ブックカート",
          "en": "rolling book cart"
        },
        {
          "ja": "自習机の仕切り列",
          "en": "desk partition row"
        },
        {
          "ja": "窓際の閲覧机",
          "en": "window-side reading table"
        },
        {
          "ja": "書架の背ラベル",
          "en": "book spine labels"
        },
        {
          "ja": "書架用ラダーのレール",
          "en": "rolling ladder rail"
        },
        {
          "ja": "返却カウンターのデスクランプ",
          "en": "return counter desk lamp"
        },
        {
          "ja": "雨粒のついた図書室窓",
          "en": "rain-beaded library window"
        },
        {
          "ja": "積まれた参考書",
          "en": "stacked reference books"
        },
        {
          "ja": "返却本トレー",
          "en": "return-book tray stack"
        },
        {
          "ja": "司書カウンター端末の光",
          "en": "catalog terminal glow"
        },
        {
          "ja": "窓際自習ブースの仕切り",
          "en": "study booth divider"
        },
        {
          "ja": "貸出処理用スタンプ台",
          "en": "checkout date stamp pad"
        },
        {
          "ja": "検索端末のキーボード",
          "en": "catalog terminal keyboard"
        },
        {
          "ja": "書架のブックエンド",
          "en": "metal bookends on shelf"
        },
        {
          "ja": "しおり回収箱",
          "en": "bookmark return box"
        },
        {
          "ja": "予約本置きラック",
          "en": "reserved-book rack"
        },
        {
          "ja": "閉館札の卓上サイン",
          "en": "library closing sign"
        },
        {
          "ja": "記入台の備え付けペン",
          "en": "sign-in desk pen chain"
        },
        {
          "ja": "机下の荷物かご",
          "en": "under-desk bag basket"
        }
      ]
    },
    {
      "group": "🧪 理科・実験の細部",
      "items": [
        {
          "ja": "ガラス器具ラック",
          "en": "lab glassware rack"
        },
        {
          "ja": "ビーカー",
          "en": "beakers"
        },
        {
          "ja": "フラスコ",
          "en": "flasks"
        },
        {
          "ja": "試験管立て",
          "en": "test tube rack"
        },
        {
          "ja": "アルコールランプ",
          "en": "alcohol lamp"
        },
        {
          "ja": "滴定スタンド",
          "en": "titration stand"
        },
        {
          "ja": "実験台のガス栓列",
          "en": "gas tap line"
        },
        {
          "ja": "実験流し台の蛇口",
          "en": "sink faucets"
        },
        {
          "ja": "実験用シンク",
          "en": "lab sink basin"
        },
        {
          "ja": "机に収まった実験椅子",
          "en": "lab stools tucked in"
        },
        {
          "ja": "薬品棚のガラス戸",
          "en": "reagent cabinet glass"
        },
        {
          "ja": "薬品棚",
          "en": "chemical shelves"
        },
        {
          "ja": "保存標本瓶",
          "en": "storage specimen jars"
        },
        {
          "ja": "顕微鏡",
          "en": "microscope"
        },
        {
          "ja": "顕微鏡のカバークロス",
          "en": "microscope cover cloth"
        },
        {
          "ja": "実験ノート",
          "en": "experiment notebook"
        },
        {
          "ja": "理科室の黒板面",
          "en": "science room blackboard"
        },
        {
          "ja": "ガラス器具の反射",
          "en": "glassware reflections"
        },
        {
          "ja": "白衣掛けスタンド",
          "en": "lab coat hanger"
        },
        {
          "ja": "メスシリンダー",
          "en": "graduated cylinders"
        },
        {
          "ja": "シャーレの積み重ね",
          "en": "stacked petri dishes"
        },
        {
          "ja": "試薬ラベルの並ぶ瓶",
          "en": "reagent-labeled bottles"
        },
        {
          "ja": "安全ゴーグルのトレー",
          "en": "safety goggles tray"
        },
        {
          "ja": "スライドガラスケース",
          "en": "microscope slide case"
        },
        {
          "ja": "温度計スタンド",
          "en": "lab thermometer stand"
        },
        {
          "ja": "洗浄ブラシ立て",
          "en": "glassware brush holder"
        },
        {
          "ja": "ガスバーナー台",
          "en": "gas burner stand"
        }
      ]
    },
    {
      "group": "🎨 美術・工作の細部",
      "items": [
        {
          "ja": "イーゼルの列",
          "en": "easel row"
        },
        {
          "ja": "絵の具で汚れた床",
          "en": "paint-stained floor"
        },
        {
          "ja": "道具掛けの壁面",
          "en": "tool rack wall"
        },
        {
          "ja": "木工用ボンドの瓶",
          "en": "wood glue bottles"
        },
        {
          "ja": "夕光が差す製図机",
          "en": "sunlit drafting table"
        },
        {
          "ja": "筆干しラック",
          "en": "brush drying rack"
        },
        {
          "ja": "積まれたキャンバス板",
          "en": "stacked canvas boards"
        },
        {
          "ja": "石膏像の台座",
          "en": "plaster bust stand"
        },
        {
          "ja": "木炭デッサン用ボード",
          "en": "charcoal sketch board"
        },
        {
          "ja": "作品乾燥棚",
          "en": "drying artwork rack"
        },
        {
          "ja": "筆洗いバケツ",
          "en": "paint-water bucket"
        },
        {
          "ja": "雨跡の残る美術室窓",
          "en": "rain-marked studio window"
        },
        {
          "ja": "カッターマットの置かれた机",
          "en": "cutting mat table"
        },
        {
          "ja": "金属定規の束",
          "en": "steel ruler set"
        },
        {
          "ja": "散った木くず",
          "en": "wood shavings"
        },
        {
          "ja": "クランプ掛けボード",
          "en": "clamp rack"
        },
        {
          "ja": "額装前の作品列",
          "en": "framed student works"
        },
        {
          "ja": "棚のラベルカード",
          "en": "label cards on shelf"
        },
        {
          "ja": "道具トレーの集まり",
          "en": "tool tray cluster"
        },
        {
          "ja": "工作室の手洗いシンク",
          "en": "handwashing utility sink"
        },
        {
          "ja": "絵の具チューブの散り",
          "en": "scattered paint tubes"
        },
        {
          "ja": "パレットの乾いた絵の具",
          "en": "dried paint on palette"
        },
        {
          "ja": "制作エプロン掛け",
          "en": "paint aprons on hooks"
        },
        {
          "ja": "彫刻刀ケース",
          "en": "woodcarving tool case"
        },
        {
          "ja": "紙やすりの束",
          "en": "stack of sandpaper sheets"
        },
        {
          "ja": "粘土ベラの缶",
          "en": "clay sculpting tools in tin"
        },
        {
          "ja": "卓上万力",
          "en": "small bench vise"
        },
        {
          "ja": "未乾燥作品の札",
          "en": "wet-work caution tags"
        }
      ]
    },
    {
      "group": "🎵 音楽・視聴覚の細部",
      "items": [
        {
          "ja": "アップライトピアノ",
          "en": "upright piano"
        },
        {
          "ja": "閉じたピアノ蓋",
          "en": "closed piano lid"
        },
        {
          "ja": "譜面台の群れ",
          "en": "music stand cluster"
        },
        {
          "ja": "譜面ファイルの束",
          "en": "score binders"
        },
        {
          "ja": "五線譜が引かれた黒板",
          "en": "staff-line blackboard"
        },
        {
          "ja": "メトロノーム",
          "en": "metronome"
        },
        {
          "ja": "音叉",
          "en": "tuning fork"
        },
        {
          "ja": "壁際の積み椅子",
          "en": "stacked chairs by music-room wall"
        },
        {
          "ja": "楽器ロッカー",
          "en": "instrument lockers"
        },
        {
          "ja": "音楽室の壁時計",
          "en": "wall clock in music room"
        },
        {
          "ja": "雨跡の残る音楽室窓",
          "en": "rain-marked music-room windows"
        },
        {
          "ja": "プロジェクタースクリーン",
          "en": "projector screen"
        },
        {
          "ja": "視聴覚卓の操作盤",
          "en": "av control console"
        },
        {
          "ja": "合唱台の積み重ね",
          "en": "choir riser stack"
        },
        {
          "ja": "天吊りプロジェクターの光",
          "en": "ceiling projector glow"
        },
        {
          "ja": "カーテンで落とした室内光",
          "en": "curtain-darkened windows"
        },
        {
          "ja": "古いスピーカーキャビネット",
          "en": "old speaker cabinet"
        },
        {
          "ja": "プロジェクターのリモコン",
          "en": "projector remote on desk"
        },
        {
          "ja": "通路の足元灯",
          "en": "dim aisle lights"
        },
        {
          "ja": "丸めたAVケーブル",
          "en": "coiled AV cables"
        },
        {
          "ja": "ピアノ椅子",
          "en": "piano bench"
        },
        {
          "ja": "指揮台",
          "en": "conductor podium"
        },
        {
          "ja": "指揮棒ケース",
          "en": "baton case"
        },
        {
          "ja": "クリップ付き譜面",
          "en": "clipped score sheets"
        },
        {
          "ja": "チューナー兼メトロノーム端末",
          "en": "digital tuner metronome"
        },
        {
          "ja": "スピーカー配線の這う床",
          "en": "speaker cables on floor"
        },
        {
          "ja": "映写用フィルム缶",
          "en": "film canisters on shelf"
        },
        {
          "ja": "予備リモコンの保管箱",
          "en": "spare remote storage box"
        }
      ]
    }
  ]
}

];


function createCollectionCheckbox(item, sectionKey, collectionId, options = {}) {
    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "0.9em";
    label.style.padding = "2px 0";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.style.marginRight = "4px";
    cb.dataset.collectionId = collectionId;
    cb.dataset.collectionSection = sectionKey;

    if (options.isComplete) {
      cb.dataset.collectionRole = "complete";
      cb.dataset.collectionItemId = item.id;
    } else {
      cb.dataset.en = item.en;
      cb.dataset.collectionRole = "tag";
      cb.dataset.collectionItemId = item.en;
    }

    label.appendChild(cb);
    label.appendChild(document.createTextNode(item.ja));
    return { label, cb };
  }

  function clearCollectionLinkedState(root, keepValues = false) {
    const state = root.__collectionState || { linked: [] };
    state.linked.forEach(cb => {
      if (!cb) return;
      cb.dataset.autoFromComplete = "";
      if (!keepValues) cb.checked = false;
    });
    state.linked = [];
    state.activeCompleteId = null;
    root.__collectionState = state;
  }

  function applyCompleteSet(root, collection, completeItemId) {
    const state = root.__collectionState || { linked: [], suppress: false, activeCompleteId: null };
    const completeMap = root.__completeMap || {};
    const tagMap = root.__tagMap || {};
    const item = completeMap[completeItemId];
    if (!item) return;

    state.suppress = true;

    root.querySelectorAll('input[data-collection-role="complete"]').forEach(cb => {
      cb.checked = cb.dataset.collectionItemId === completeItemId;
    });
    clearCollectionLinkedState(root, false);

    const linked = [];
    ["base", "customize", "settings"].forEach(sectionKey => {
      (item.links && item.links[sectionKey] || []).forEach(tag => {
        const cb = tagMap[tag];
        if (!cb) return;
        cb.checked = true;
        cb.dataset.autoFromComplete = completeItemId;
        linked.push(cb);
      });
      const shelf = root.querySelector(`details[data-collection-shelf="${sectionKey}"]`);
      if (shelf) shelf.open = true;
    });

    state.linked = linked;
    state.activeCompleteId = completeItemId;
    state.suppress = false;
    root.__collectionState = state;
  }


  function flattenCollectionCompleteItems(items) {
    const out = [];
    (items || []).forEach(item => {
      if (Array.isArray(item.items)) {
        item.items.forEach(child => out.push(child));
      } else {
        out.push(item);
      }
    });
    return out;
  }

  function createCollectionOptionNode(root, collection, shelfKey, item) {
    const { label, cb } = createCollectionCheckbox(item, shelfKey, collection.id, { isComplete: shelfKey === "complete" });
    if (shelfKey !== "complete" && item.en) {
      root.__tagMap[item.en] = cb;
    }

    cb.addEventListener("change", () => {
      const state = root.__collectionState;
      if (state.suppress) return;

      if (shelfKey === "complete") {
        if (cb.checked) {
          applyCompleteSet(root, collection, item.id);
        } else if (state.activeCompleteId === item.id) {
          state.suppress = true;
          clearCollectionLinkedState(root, false);
          state.suppress = false;
          root.__collectionState = state;
        }
        return;
      }

      if (state.activeCompleteId) {
        const activeComplete = root.querySelector(`input[data-collection-role="complete"][data-collection-item-id="${state.activeCompleteId}"]`);
        state.suppress = true;
        if (activeComplete) activeComplete.checked = false;
        clearCollectionLinkedState(root, true);
        state.suppress = false;
        root.__collectionState = state;
      }
    });

    return label;
  }

  function createBackgroundCollection(collection) {
    const root = document.createElement("details");
    root.className = "bg-special-collection";
    root.style.border = "1px solid #dbe4f0";
    root.style.borderRadius = "10px";
    root.style.padding = "6px 8px";
    root.style.background = "#fbfdff";
    root.style.margin = "8px 0";
    root.open = false;

    const summary = document.createElement("summary");
    summary.textContent = collection.title;
    summary.style.fontWeight = "bold";
    summary.style.cursor = "pointer";
    root.appendChild(summary);

    const body = document.createElement("div");
    body.className = "bg-special-collection-body";
    body.style.display = "block";
    body.style.marginTop = "8px";

    const guide = document.createElement("div");
    guide.textContent = collection.subtitle || "";
    guide.style.fontSize = "0.86em";
    guide.style.color = "#4b5563";
    guide.style.margin = "4px 0 8px";
    body.appendChild(guide);

    root.__collectionState = { linked: [], suppress: false, activeCompleteId: null };
    root.__completeMap = Object.fromEntries(flattenCollectionCompleteItems(collection.complete || []).map(item => [item.id, item]));
    root.__tagMap = {};

    const shelves = [
      { key: "complete", title: "🎬 完成セット", items: collection.complete || [] },
      { key: "base", title: "🏠 ベース", items: collection.base || [] },
      { key: "customize", title: "🎨 カスタマイズ", items: collection.customize || [] },
      { key: "settings", title: "⚙ 設定", items: collection.settings || [] }
    ];

    shelves.forEach((shelf, idx) => {
      const shelfDetails = document.createElement("details");
      shelfDetails.dataset.collectionShelf = shelf.key;
      shelfDetails.open = false;
      shelfDetails.style.margin = "6px 0";
      shelfDetails.style.border = "1px solid #e5e7eb";
      shelfDetails.style.borderRadius = "8px";
      shelfDetails.style.background = "#ffffff";
      shelfDetails.style.padding = "4px 6px";

      const shelfSummary = document.createElement("summary");
      shelfSummary.textContent = shelf.title;
      shelfSummary.style.cursor = "pointer";
      shelfSummary.style.fontWeight = "bold";
      shelfDetails.appendChild(shelfSummary);

      const shelfBody = document.createElement("div");
      shelfBody.style.display = "block";
      shelfBody.style.marginTop = "6px";

      const hasGroups = shelf.items.some(item => Array.isArray(item.items));
      if (hasGroups) {
        shelfBody.style.display = "flex";
        shelfBody.style.flexDirection = "column";
        shelfBody.style.gap = "6px";

        shelf.items.forEach((group, groupIdx) => {
          const groupDetails = document.createElement("details");
          groupDetails.open = false;
          groupDetails.style.margin = "0";
          groupDetails.style.border = "1px solid #e5e7eb";
          groupDetails.style.borderRadius = "8px";
          groupDetails.style.background = "#fafafa";
          groupDetails.style.padding = "4px 6px";

          const groupSummary = document.createElement("summary");
          groupSummary.textContent = group.group || "小分類";
          groupSummary.style.cursor = "pointer";
          groupSummary.style.fontWeight = "bold";
          groupDetails.appendChild(groupSummary);

          const groupBody = document.createElement("div");
          groupBody.style.display = "grid";
          groupBody.style.gridTemplateColumns = "repeat(auto-fill, minmax(180px, 1fr))";
          groupBody.style.gap = "4px";
          groupBody.style.marginTop = "6px";

          (group.items || []).forEach(item => {
            groupBody.appendChild(createCollectionOptionNode(root, collection, shelf.key, item));
          });

          groupDetails.appendChild(groupBody);
          shelfBody.appendChild(groupDetails);
        });
      } else {
        shelfBody.style.display = "grid";
        shelfBody.style.gridTemplateColumns = "repeat(auto-fill, minmax(160px, 1fr))";
        shelfBody.style.gap = "4px";

        shelf.items.forEach(item => {
          shelfBody.appendChild(createCollectionOptionNode(root, collection, shelf.key, item));
        });
      }

      shelfDetails.appendChild(shelfBody);
      body.appendChild(shelfDetails);
    });

    root.appendChild(body);
    return root;
  }


  function createCollectionGroup(collections) {
    const wrapper = document.createElement("div");
    wrapper.className = "bg-special-collections-zone";
    wrapper.style.marginBottom = "12px";

    const heading = document.createElement("div");
    heading.textContent = "🧩 背景特化コレクション";
    heading.style.fontSize = "0.92em";
    heading.style.fontWeight = "bold";
    heading.style.color = "#374151";
    heading.style.margin = "4px 0 8px";
    wrapper.appendChild(heading);

    collections.forEach(collection => wrapper.appendChild(createBackgroundCollection(collection)));

    const divider = document.createElement("div");
    divider.style.margin = "10px 0 6px";
    divider.style.paddingTop = "8px";
    divider.style.borderTop = "1px solid #d1d5db";
    divider.textContent = "📍 通常背景";
    divider.style.fontWeight = "bold";
    divider.style.color = "#4b5563";
    wrapper.appendChild(divider);

    return wrapper;
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
      section.appendChild(createCollectionGroup(BACKGROUND_COLLECTIONS));

      const locDetails = document.createElement("details");
      locDetails.className = "bg-section-group";
      locDetails.open = false;
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
        BACKGROUND_COLLECTIONS.forEach(collection => {
          [collection.base, collection.customize, collection.settings].forEach(collectTranslation);
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
      document.querySelectorAll(".background-v6-integrated input[type='checkbox']:checked").forEach(cb => {
        if (cb.dataset && cb.dataset.en) tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
