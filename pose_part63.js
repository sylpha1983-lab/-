/* pose_part63.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：身近なリアル（住宅／団地／商業バックヤード／駐車場／屋上／雑居ビル）
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（統合時に他パートとマージされます）

window.__registerPosePart("pose_part63", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- 住宅・住空間（和モダン／日常） ---
        { id: "loc-apartment-genkan", label: "マンションの玄関 / apartment genkan" },
        { id: "loc-apartment-living", label: "リビング（和モダン） / living room (wa-modern)" },
        { id: "loc-apartment-kitchen", label: "キッチン（生活感） / lived-in kitchen" },
        { id: "loc-one-room-studio", label: "ワンルーム（ワークデスク） / one-room studio (work desk)" },
        { id: "loc-balcony-cityview", label: "バルコニー（市街ビュー） / balcony city view" },
        { id: "loc-corridor-apartment", label: "共用外廊下 / apartment external corridor" },
        { id: "loc-stairwell-apartment", label: "共用階段室 / apartment stairwell" },
        { id: "loc-trash-area", label: "集合ゴミ置き場 / apartment trash area" },

        // --- 団地・住宅街 ---
        { id: "loc-danchi-courtyard", label: "団地の中庭 / danchi courtyard" },
        { id: "loc-danchi-playground", label: "団地の遊具広場 / danchi playground" },
        { id: "loc-suburb-crosswalk", label: "住宅街の横断歩道 / suburb crosswalk" },
        { id: "loc-suburb-culdesac", label: "袋小路（住宅地） / suburban cul-de-sac" },

        // --- 商業施設・バックヤード ---
        { id: "loc-mall-service-corridor", label: "商業施設のサービス通路 / mall service corridor" },
        { id: "loc-loading-dock", label: "搬入口・ローディングドック / loading dock" },
        { id: "loc-freight-elevator", label: "荷物用エレベーター前 / freight elevator lobby" },
        { id: "loc-convenience-backroom", label: "コンビニのバックヤード / convenience store backroom" },
        { id: "loc-supermarket-aisle", label: "スーパーの売り場通路 / supermarket aisle" },
        { id: "loc-foodcourt-morning", label: "フードコート（開店前） / food court pre-opening" },
        { id: "loc-arcade-corridor", label: "雑居ビル内通路 / mixed-use building corridor" },

        // --- 駐車場・道路付帯 ---
        { id: "loc-parking-lot-night", label: "平面駐車場（夜） / parking lot (night)" },
        { id: "loc-multistory-parking", label: "立体駐車場 / multistory parking deck" },
        { id: "loc-parking-ramp", label: "パーキングのスロープ / parking ramp" },
        { id: "loc-service-lane", label: "建物裏の車路 / service lane (backstreet)" },
        { id: "loc-bike-parking", label: "自転車置き場 / bicycle parking" },

        // --- 屋上・設備 ---
        { id: "loc-rooftop-antenna", label: "屋上（アンテナ／給水塔） / rooftop (antenna & tank)" },
        { id: "loc-rooftop-fence", label: "屋上フェンス際 / rooftop fence side" },
        { id: "loc-hvac-maintenance", label: "ビル屋上の空調設備 / rooftop HVAC area" },

        // --- 階段・通路・非常動線 ---
        { id: "loc-fire-escape", label: "非常階段 / exterior fire escape" },
        { id: "loc-emergency-exit", label: "非常口（サインと扉） / emergency exit door" },
        { id: "loc-service-stairs", label: "サービス階段 / service stairs" },

        // --- コインランドリー・生活店舗 ---
        { id: "loc-coin-laundry", label: "コインランドリー店内 / coin laundry" },
        { id: "loc-hairdresser", label: "理美容室（夜の明かり） / hairdresser at night" },
        { id: "loc-karaoke-foyer", label: "カラオケ店の受付前 / karaoke foyer" },
        { id: "loc-internet-cafe-booth", label: "ネットカフェ・ブース / internet cafe booth" },

        // --- 川沿い・橋・高架下 ---
        { id: "loc-riverside-walk", label: "川沿い遊歩道 / riverside walkway" },
        { id: "loc-river-bridge", label: "中小橋梁・歩道 / small river bridge" },
        { id: "loc-under-overpass", label: "高架下スペース / space under overpass" },

        // --- 休日の公共空間 ---
        { id: "loc-park-gazebo", label: "公園の東屋 / park gazebo" },
        { id: "loc-playground-slide", label: "公園の滑り台付近 / playground slide area" },
        { id: "loc-dog-park-corner", label: "ドッグランの隅 / dog park corner" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-apartment-life-pack",
      label: "場所：マンション生活 / Apartment Life",
      tags: ["loc-apartment-living", "loc-balcony-cityview", "loc-corridor-apartment"]
    },
    {
      id: "loc-danchi-pack",
      label: "場所：団地の日常 / Danchi Daily",
      tags: ["loc-danchi-courtyard", "loc-danchi-playground", "loc-trash-area"]
    },
    {
      id: "loc-backyard-ops-pack",
      label: "場所：バックヤード動線 / Back-of-House",
      tags: ["loc-mall-service-corridor", "loc-loading-dock", "loc-freight-elevator"]
    },
    {
      id: "loc-parking-pack",
      label: "場所：駐車場・車路 / Parking & Lanes",
      tags: ["loc-parking-lot-night", "loc-multistory-parking", "loc-service-lane"]
    },
    {
      id: "loc-rooftop-pack",
      label: "場所：ビル屋上 / Rooftop Scenes",
      tags: ["loc-rooftop-antenna", "loc-rooftop-fence", "loc-hvac-maintenance"]
    },
    {
      id: "loc-everyday-shops-pack",
      label: "場所：生活店舗 / Everyday Shops",
      tags: ["loc-coin-laundry", "loc-hairdresser", "loc-internet-cafe-booth"]
    },
    {
      id: "loc-riverside-pack",
      label: "場所：川沿い・高架下 / Riverside & Overpass",
      tags: ["loc-riverside-walk", "loc-under-overpass", "loc-river-bridge"]
    },
    {
      id: "loc-park-holiday-pack",
      label: "場所：公園の休日 / Park Holiday",
      tags: ["loc-park-gazebo", "loc-playground-slide", "loc-dog-park-corner"]
    }
  ]
});