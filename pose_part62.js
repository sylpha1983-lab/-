/* pose_part62.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：自然環境／アウトドア・キャンプ・極地探検
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（他パートとマージされます）

window.__registerPosePart("pose_part62", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- 山岳・高地 ---
        { id: "loc-alpine-meadow", label: "高山草原 / alpine meadow" },
        { id: "loc-mountain-ridge", label: "稜線（山の尾根） / mountain ridge" },
        { id: "loc-summit-cross", label: "山頂標の前 / summit marker" },
        { id: "loc-mountain-hut", label: "山小屋前 / mountain hut" },
        { id: "loc-glacier-tongue", label: "氷河の舌 / glacier tongue" },
        { id: "loc-volcano-rim", label: "火口縁 / volcano rim" },

        // --- 森林・渓谷・滝 ---
        { id: "loc-rainforest-trail", label: "熱帯雨林の小径 / rainforest trail" },
        { id: "loc-mossy-forest", label: "苔むす森 / mossy forest" },
        { id: "loc-river-gorge", label: "河川峡谷 / river gorge" },
        { id: "loc-waterfall-base", label: "滝つぼ前 / waterfall base" },
        { id: "loc-cedar-avenue", label: "杉並木道 / cedar avenue" },

        // --- 砂漠・荒野 ---
        { id: "loc-desert-dunes", label: "砂丘 / desert dunes" },
        { id: "loc-oasis-palm", label: "オアシス / oasis with palms" },
        { id: "loc-salt-flats", label: "塩原（ソルトフラッツ） / salt flats" },
        { id: "loc-canyon-plateau", label: "台地の縁（大峡谷） / canyon plateau edge" },

        // --- 極地・雪原 ---
        { id: "loc-snowfield-aurora", label: "雪原とオーロラ / aurora snowfield" },
        { id: "loc-ice-cave-blue", label: "氷の洞窟（青） / blue ice cave" },
        { id: "loc-polar-research-tent", label: "極地観測テント / polar research tent" },
        { id: "loc-frozen-lake", label: "凍結湖上 / frozen lake" },

        // --- 海岸・海中 ---
        { id: "loc-coastal-cliffs", label: "海岸の断崖 / coastal cliffs" },
        { id: "loc-tide-pools", label: "タイドプール（磯） / tide pools" },
        { id: "loc-coral-reef-underwater", label: "サンゴ礁・浅瀬（海中） / coral reef (shallow underwater)" },
        { id: "loc-sea-cave", label: "海蝕洞 / sea cave" },

        // --- 田園・農地・花畑 ---
        { id: "loc-rice-terraces", label: "棚田 / rice terraces" },
        { id: "loc-tea-plantation", label: "茶畑 / tea plantation" },
        { id: "loc-sunflower-field", label: "ひまわり畑 / sunflower field" },
        { id: "loc-lavender-field", label: "ラベンダー畑 / lavender field" },
        { id: "loc-wheat-field", label: "小麦畑 / wheat field" },

        // --- 洞窟・奇岩・地形 ---
        { id: "loc-limestone-cavern", label: "石灰岩洞窟 / limestone cavern" },
        { id: "loc-lava-tube", label: "溶岩トンネル / lava tube" },
        { id: "loc-karst-pinnacles", label: "カルスト奇峰 / karst pinnacles" },
        { id: "loc-natural-arch", label: "天然のアーチ岩 / natural rock arch" },

        // --- キャンプ・アウトドア生活 ---
        { id: "loc-campsite-forest", label: "森林キャンプサイト / forest campsite" },
        { id: "loc-campfire-night", label: "焚き火（星空） / campfire under stars" },
        { id: "loc-lakeside-camp", label: "湖畔キャンプ / lakeside camp" },
        { id: "loc-suspension-bridge", label: "吊り橋上 / suspension bridge crossing" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-hiking-alpine-pack",
      label: "場所：登山・アルプス / Hiking Alpine",
      tags: ["loc-alpine-meadow", "loc-mountain-ridge", "loc-mountain-hut"]
    },
    {
      id: "loc-forest-waterfall-pack",
      label: "場所：森と滝 / Forest & Waterfall",
      tags: ["loc-mossy-forest", "loc-river-gorge", "loc-waterfall-base"]
    },
    {
      id: "loc-desert-expedition-pack",
      label: "場所：砂漠遠征 / Desert Expedition",
      tags: ["loc-desert-dunes", "loc-oasis-palm", "loc-salt-flats"]
    },
    {
      id: "loc-polar-expedition-pack",
      label: "場所：極地探検 / Polar Expedition",
      tags: ["loc-snowfield-aurora", "loc-ice-cave-blue", "loc-polar-research-tent"]
    },
    {
      id: "loc-coast-sea-pack",
      label: "場所：海岸・海中 / Coast & Sea",
      tags: ["loc-coastal-cliffs", "loc-tide-pools", "loc-sea-cave"]
    },
    {
      id: "loc-country-flower-pack",
      label: "場所：田園・花畑 / Countryside & Flowers",
      tags: ["loc-rice-terraces", "loc-sunflower-field", "loc-lavender-field"]
    },
    {
      id: "loc-camping-night-pack",
      label: "場所：キャンプ＆星空 / Camping Night",
      tags: ["loc-campsite-forest", "loc-campfire-night", "loc-lakeside-camp"]
    }
  ]
});