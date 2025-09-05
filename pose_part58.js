/* pose_part58.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：近未来／SF・災害跡・廃墟・研究施設・宇宙
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（統合時に他とマージされます）

window.__registerPosePart("pose_part58", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- 近未来・サイバーパンク ---
        { id: "loc-cyber-street-rain", label: "サイバー街路（雨・ネオン） / cyber street (rain neon)" },
        { id: "loc-holo-market", label: "ホログラム市場 / hologram market" },
        { id: "loc-megacity-overpass", label: "メガシティ高架下 / megacity overpass" },
        { id: "loc-rooftop-helipad", label: "屋上ヘリポート / rooftop helipad" },
        { id: "loc-data-center-aisle", label: "データセンター通路 / data center aisle" },
        { id: "loc-server-room-blue", label: "サーバールーム（青光） / server room (blue glow)" },
        { id: "loc-corp-lobby", label: "巨大企業ロビー / corporate mega-lobby" },

        // --- 研究施設・医療・ラボ ---
        { id: "loc-bio-lab", label: "バイオラボ / bio laboratory" },
        { id: "loc-cleanroom", label: "クリーンルーム / cleanroom" },
        { id: "loc-observation-room", label: "観察室（ガラス越し） / observation room (glass)" },
        { id: "loc-vivarium", label: "飼育室（実験） / vivarium (lab)" },
        { id: "loc-mri-suite", label: "MRI 室 / MRI suite" },
        { id: "loc-operating-theater", label: "手術室 / operating theater" },

        // --- 産業・インフラ ---
        { id: "loc-power-plant-turbine", label: "発電施設タービン室 / power plant turbine hall" },
        { id: "loc-water-treatment", label: "浄水場設備 / water treatment plant" },
        { id: "loc-industrial-catwalk", label: "工場キャットウォーク / industrial catwalk" },
        { id: "loc-oil-refinery", label: "石油精製所 / oil refinery" },
        { id: "loc-cargo-container-yard", label: "コンテナヤード / cargo container yard" },

        // --- 災害跡・危険区域 ---
        { id: "loc-evacuated-street", label: "避難後の街路 / evacuated street" },
        { id: "loc-flooded-subway", label: "浸水した地下鉄 / flooded subway" },
        { id: "loc-burnt-building", label: "焼け落ちた建物 / burnt building" },
        { id: "loc-quake-ruins", label: "地震の瓦礫 / earthquake ruins" },
        { id: "loc-quarantine-zone", label: "隔離区域ゲート / quarantine zone gate" },

        // --- 廃墟・ポストアポカリプス ---
        { id: "loc-ruined-mall", label: "廃モール / ruined mall" },
        { id: "loc-overgrown-station", label: "草に呑まれた駅 / overgrown station" },
        { id: "loc-collapsed-bridge", label: "崩落した橋梁 / collapsed bridge" },
        { id: "loc-derelict-factory", label: "朽ちた工場 / derelict factory" },
        { id: "loc-deserted-town", label: "無人の町並み / deserted town" },

        // --- 宇宙・軌道・SF内部 ---
        { id: "loc-spacestation-corridor", label: "宇宙ステーション通路 / space station corridor" },
        { id: "loc-airlock", label: "エアロック / airlock" },
        { id: "loc-observation-deck", label: "展望デッキ（地球が見える） / observation deck (earth view)" },
        { id: "loc-ship-bridge", label: "宇宙船ブリッジ / starship bridge" },
        { id: "loc-cryosleep-bay", label: "コールドスリープ区画 / cryosleep bay" },
        { id: "loc-colony-dome", label: "コロニードーム内 / colony dome interior" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-cyberpunk-pack",
      label: "場所：サイバーパンク / Cyberpunk",
      tags: ["loc-cyber-street-rain", "loc-holo-market", "loc-megacity-overpass"]
    },
    {
      id: "loc-datacenter-pack",
      label: "場所：データセンター / Data Center",
      tags: ["loc-data-center-aisle", "loc-server-room-blue", "loc-corp-lobby"]
    },
    {
      id: "loc-laboratory-pack",
      label: "場所：研究施設 / Laboratory",
      tags: ["loc-bio-lab", "loc-cleanroom", "loc-observation-room"]
    },
    {
      id: "loc-medical-pack",
      label: "場所：医療 / Medical",
      tags: ["loc-mri-suite", "loc-operating-theater", "loc-vivarium"]
    },
    {
      id: "loc-industrial-pack",
      label: "場所：産業インフラ / Industrial",
      tags: ["loc-power-plant-turbine", "loc-industrial-catwalk", "loc-cargo-container-yard"]
    },
    {
      id: "loc-disaster-pack",
      label: "場所：災害跡 / Disaster Aftermath",
      tags: ["loc-evacuated-street", "loc-flooded-subway", "loc-quake-ruins"]
    },
    {
      id: "loc-ruins-pack",
      label: "場所：廃墟 / Ruins",
      tags: ["loc-ruined-mall", "loc-overgrown-station", "loc-derelict-factory"]
    },
    {
      id: "loc-space-pack",
      label: "場所：宇宙・軌道 / Space & Orbit",
      tags: ["loc-spacestation-corridor", "loc-observation-deck", "loc-ship-bridge"]
    }
  ]
});