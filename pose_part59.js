/* pose_part59.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：豪華室内／ホテル・宮殿・宗教建築内部・高級レストラン／バー
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（統合時に他とマージされます）

window.__registerPosePart("pose_part59", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- ホテル＆ラグジュアリー ---
        { id: "loc-grand-hotel-lobby", label: "グランドホテル・ロビー / grand hotel lobby" },
        { id: "loc-hotel-corridor", label: "ホテルの廊下 / hotel corridor" },
        { id: "loc-hotel-suite", label: "ホテル・スイート / hotel suite" },
        { id: "loc-hotel-suite-window", label: "スイートの窓辺 / hotel suite window" },
        { id: "loc-hotel-ballroom", label: "ホテル・ボールルーム / hotel ballroom" },
        { id: "loc-grand-staircase", label: "大階段・レッドカーペット / grand staircase (red carpet)" },
        { id: "loc-crystal-chandelier-hall", label: "クリスタルシャンデリアの間 / crystal chandelier hall" },
        { id: "loc-hotel-terrace-cityview", label: "ホテル・テラス（市街夜景） / hotel terrace (city view)" },
        { id: "loc-infinity-pool-rooftop", label: "屋上インフィニティプール / rooftop infinity pool" },
        { id: "loc-luxury-boutique-lounge", label: "ラグジュアリーラウンジ / luxury lounge" },

        // --- 宮殿・城館内部 ---
        { id: "loc-palace-throne-hall", label: "宮殿の玉座の間 / palace throne hall" },
        { id: "loc-palace-gallery", label: "宮殿ギャラリー / palace gallery" },
        { id: "loc-gilded-corridor", label: "金装飾の回廊 / gilded corridor" },
        { id: "loc-mirror-hall", label: "鏡の間 / hall of mirrors" },
        { id: "loc-castle-great-hall", label: "城の大広間 / castle great hall" },
        { id: "loc-castle-stone-corridor", label: "城の石造回廊 / castle stone corridor" },

        // --- 宗教建築の内部（厳かな空間） ---
        { id: "loc-cathedral-aisle", label: "大聖堂の側廊 / cathedral aisle" },
        { id: "loc-chapel-sunbeams", label: "礼拝堂（光の柱） / chapel with sunbeams" },
        { id: "loc-basilica-crypt", label: "バシリカの地下聖堂 / basilica crypt" },
        { id: "loc-temple-main-hall", label: "寺院の本堂 / temple main hall" },
        { id: "loc-shrine-inner-court", label: "神社の内院 / shrine inner court" },

        // --- 高級レストラン／バー ---
        { id: "loc-fine-dining-table", label: "高級レストランの卓 / fine dining table" },
        { id: "loc-private-dining-room", label: "個室ダイニング / private dining room" },
        { id: "loc-open-kitchen-pass", label: "オープンキッチン・パス / open kitchen pass" },
        { id: "loc-skybar-window", label: "スカイバーの窓際席 / sky bar window seat" },
        { id: "loc-speakeasy-counter", label: "スピークイージー・カウンター / speakeasy counter" },
        { id: "loc-jazz-bar-stage", label: "ジャズバーのステージ前 / jazz bar stage front" },
        { id: "loc-wine-cellar", label: "ワインセラー / wine cellar" },

        // --- セレモニー／パーティ演出 ---
        { id: "loc-ballroom-center", label: "舞踏会の中央 / ballroom center" },
        { id: "loc-banquet-hall", label: "晩餐会場 / banquet hall" },
        { id: "loc-rose-petal-aisle", label: "花弁のバージンロード / rose-petal aisle" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-lux-hotel-pack",
      label: "場所：ラグジュアリーホテル / Luxury Hotel",
      tags: ["loc-grand-hotel-lobby", "loc-hotel-suite", "loc-grand-staircase"]
    },
    {
      id: "loc-palace-pack",
      label: "場所：宮殿・城館 / Palace & Castle",
      tags: ["loc-palace-throne-hall", "loc-mirror-hall", "loc-gilded-corridor"]
    },
    {
      id: "loc-sacred-interior-pack",
      label: "場所：厳かな内部空間 / Sacred Interiors",
      tags: ["loc-cathedral-aisle", "loc-temple-main-hall", "loc-chapel-sunbeams"]
    },
    {
      id: "loc-fine-dining-pack",
      label: "場所：高級レストラン / Fine Dining",
      tags: ["loc-fine-dining-table", "loc-private-dining-room", "loc-open-kitchen-pass"]
    },
    {
      id: "loc-bar-lounge-pack",
      label: "場所：バー＆ラウンジ / Bar & Lounge",
      tags: ["loc-skybar-window", "loc-speakeasy-counter", "loc-jazz-bar-stage"]
    },
    {
      id: "loc-ballroom-pack",
      label: "場所：舞踏会・晩餐 / Ballroom & Banquet",
      tags: ["loc-hotel-ballroom", "loc-ballroom-center", "loc-banquet-hall"]
    },
    {
      id: "loc-rooftop-lux-pack",
      label: "場所：屋上ラグジュアリー / Rooftop Luxury",
      tags: ["loc-hotel-terrace-cityview", "loc-infinity-pool-rooftop", "loc-crystal-chandelier-hall"]
    }
  ]
});