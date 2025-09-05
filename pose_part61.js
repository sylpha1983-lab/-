/* pose_part61.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：教育・研究・アトリエ・リハーサル空間
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名 "Locations / 場所"

window.__registerPosePart("pose_part61", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- 学校・教育施設 ---
        { id: "loc-classroom-sunlight", label: "教室（午後の陽光） / classroom with sunlight" },
        { id: "loc-classroom-night", label: "夜の教室 / classroom at night" },
        { id: "loc-laboratory-school", label: "学校の理科室 / school laboratory" },
        { id: "loc-lecture-hall", label: "大学講義室 / university lecture hall" },
        { id: "loc-campus-library", label: "キャンパス図書館 / campus library" },
        { id: "loc-campus-courtyard", label: "キャンパス中庭 / campus courtyard" },

        // --- 研究棟・実験施設 ---
        { id: "loc-physics-lab", label: "物理実験室 / physics laboratory" },
        { id: "loc-chemistry-lab", label: "化学実験室 / chemistry laboratory" },
        { id: "loc-robotics-lab", label: "ロボティクスラボ / robotics lab" },
        { id: "loc-research-office", label: "研究員オフィス / researcher office" },
        { id: "loc-academic-conference", label: "学会会場（ポスター発表） / academic conference poster session" },

        // --- アトリエ・工房 ---
        { id: "loc-art-studio", label: "美術アトリエ / art studio" },
        { id: "loc-sculpture-workshop", label: "彫刻工房 / sculpture workshop" },
        { id: "loc-ceramics-studio", label: "陶芸工房 / ceramics studio" },
        { id: "loc-fashion-studio", label: "ファッションアトリエ / fashion design studio" },
        { id: "loc-craft-woodshop", label: "木工工房 / woodworking shop" },
        { id: "loc-metal-forge", label: "金工鍛冶場 / metal forge workshop" },

        // --- リハーサル空間 ---
        { id: "loc-dance-studio", label: "ダンススタジオ / dance rehearsal studio" },
        { id: "loc-theater-rehearsal", label: "劇場稽古場 / theater rehearsal hall" },
        { id: "loc-music-practice-room", label: "音楽練習室 / music practice room" },
        { id: "loc-orchestra-hall", label: "オーケストラホール / orchestra rehearsal hall" },
        { id: "loc-band-garage", label: "バンドのガレージ / band garage rehearsal" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-school-pack",
      label: "場所：学校・教室 / School & Classroom",
      tags: ["loc-classroom-sunlight", "loc-classroom-night", "loc-laboratory-school"]
    },
    {
      id: "loc-campus-pack",
      label: "場所：大学・キャンパス / University Campus",
      tags: ["loc-lecture-hall", "loc-campus-library", "loc-campus-courtyard"]
    },
    {
      id: "loc-research-pack",
      label: "場所：研究棟・ラボ / Research Labs",
      tags: ["loc-physics-lab", "loc-chemistry-lab", "loc-robotics-lab"]
    },
    {
      id: "loc-artwork-pack",
      label: "場所：アトリエ・工房 / Atelier & Workshop",
      tags: ["loc-art-studio", "loc-craft-woodshop", "loc-metal-forge"]
    },
    {
      id: "loc-rehearsal-pack",
      label: "場所：リハーサル空間 / Rehearsal Spaces",
      tags: ["loc-dance-studio", "loc-theater-rehearsal", "loc-music-practice-room"]
    }
  ]
});