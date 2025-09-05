/* pose_part57.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：和風・欧風・イベント／文化施設／移動
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（統合時に他とマージされます）

window.__registerPosePart("pose_part57", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- 和風・伝統 ---
        { id: "loc-torii-path", label: "鳥居の参道 / torii path" },
        { id: "loc-shrine-festival", label: "神社の縁日・屋台 / shrine festival" },
        { id: "loc-temple-garden", label: "寺の庭園 / temple garden" },
        { id: "loc-ryokan-corridor", label: "旅館の廊下 / ryokan corridor" },
        { id: "loc-tatami-room", label: "和室（畳） / tatami room" },
        { id: "loc-engawa", label: "縁側 / engawa veranda" },
        { id: "loc-onsen-outdoor", label: "露天温泉 / outdoor onsen" },
        { id: "loc-onsen-indoor", label: "内湯（温泉） / indoor bath (onsen)" },
        { id: "loc-castle-town", label: "城下町の通り / castle town street" },
        { id: "loc-bamboo-night", label: "竹林（夜） / bamboo grove (night)" },

        // --- 欧風・旧市街 ---
        { id: "loc-oldtown-stone-alley", label: "石畳の路地 / stone alley (old town)" },
        { id: "loc-euro-plaza", label: "広場（欧風） / european plaza" },
        { id: "loc-cathedral-interior", label: "大聖堂の内部 / cathedral interior" },
        { id: "loc-canal-bridge", label: "運河の橋 / canal bridge" },
        { id: "loc-cafe-terrace", label: "カフェテラス / café terrace" },
        { id: "loc-gondola-pier", label: "ゴンドラ桟橋 / gondola pier" },

        // --- 文化施設・アート ---
        { id: "loc-museum-hall", label: "博物館ホール / museum hall" },
        { id: "loc-art-gallery", label: "アートギャラリー / art gallery" },
        { id: "loc-theater-backstage", label: "劇場の舞台裏 / theater backstage" },
        { id: "loc-opera-house-foyer", label: "オペラハウスのホワイエ / opera house foyer" },
        { id: "loc-library-grand", label: "大図書館ホール / grand library hall" },

        // --- イベント・レジャー ---
        { id: "loc-fireworks-riverbank", label: "花火大会の河川敷 / fireworks riverside" },
        { id: "loc-amusement-night", label: "遊園地（夜） / amusement park (night)" },
        { id: "loc-ferriswheel-cabin", label: "観覧車ゴンドラ内 / ferris wheel cabin" },
        { id: "loc-stadium-stands", label: "スタジアム観客席 / stadium stands" },
        { id: "loc-aquarium-tunnel", label: "水族館トンネル / aquarium tunnel" },
        { id: "loc-zoo-path", label: "動物園の小径 / zoo walkway" },

        // --- 交通・移動 ---
        { id: "loc-train-interior", label: "電車の車内 / train interior" },
        { id: "loc-shinkansen-window", label: "新幹線の窓側席 / shinkansen window seat" },
        { id: "loc-airplane-window", label: "飛行機の窓側 / airplane window seat" },
        { id: "loc-airport-gate", label: "空港ゲート前 / airport gate area" },
        { id: "loc-harbor-docks", label: "港の埠頭 / harbor docks" },
        { id: "loc-morning-market", label: "朝市 / morning market" },
        { id: "loc-fish-market", label: "魚市場 / fish market" },

        // --- 季節・情景 ---
        { id: "loc-snowy-street", label: "雪の街路 / snowy street" },
        { id: "loc-autumn-avenue", label: "並木道（紅葉） / autumn avenue" },
        { id: "loc-sakura-riverside", label: "桜並木の川辺 / sakura riverside" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-japan-traditional-pack",
      label: "場所：和風・伝統 / Japan Traditional",
      tags: ["loc-torii-path", "loc-temple-garden", "loc-ryokan-corridor"]
    },
    {
      id: "loc-festival-pack",
      label: "場所：祭り・屋台 / Festival Night",
      tags: ["loc-shrine-festival", "loc-bamboo-night", "loc-fireworks-riverbank"]
    },
    {
      id: "loc-europe-oldtown-pack",
      label: "場所：欧風・旧市街 / European Old Town",
      tags: ["loc-oldtown-stone-alley", "loc-euro-plaza", "loc-cafe-terrace"]
    },
    {
      id: "loc-art-culture-pack",
      label: "場所：アート＆文化施設 / Art & Culture",
      tags: ["loc-museum-hall", "loc-art-gallery", "loc-theater-backstage"]
    },
    {
      id: "loc-transit-travel-pack",
      label: "場所：移動＆トランジット / Transit & Travel",
      tags: ["loc-train-interior", "loc-airplane-window", "loc-airport-gate"]
    },
    {
      id: "loc-resort-onsen-pack",
      label: "場所：リゾート＆温泉 / Resort & Onsen",
      tags: ["loc-onsen-outdoor", "loc-tatami-room", "loc-engawa"]
    },
    {
      id: "loc-seasonal-pack",
      label: "場所：季節情景 / Seasonal Scenes",
      tags: ["loc-snowy-street", "loc-autumn-avenue", "loc-sakura-riverside"]
    }
  ]
});