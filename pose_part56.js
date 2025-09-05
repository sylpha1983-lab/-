/* pose_part56.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：タウン＆日常スポット
// ※ __registerPosePart を使用（既存ローダー互換）
// カテゴリ名は "Locations / 場所" として追加します（既存UIは任意カテゴリを統合可能）

window.__registerPosePart("pose_part56", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        { id: "loc-city-street-day", label: "街路（昼） / city street (day)" },
        { id: "loc-city-street-night", label: "街路（夜・ネオン） / city street (night)" },
        { id: "loc-alley-neon", label: "路地裏（ネオン） / neon alley" },
        { id: "loc-rooftop", label: "ビル屋上 / rooftop" },
        { id: "loc-train-platform", label: "駅ホーム / train platform" },
        { id: "loc-subway-platform", label: "地下鉄ホーム / subway platform" },
        { id: "loc-bus-stop", label: "バス停 / bus stop" },
        { id: "loc-cafe", label: "カフェ / café" },
        { id: "loc-diner", label: "ダイナー / diner" },
        { id: "loc-convenience-store", label: "コンビニ店内 / convenience store" },
        { id: "loc-arcade", label: "ゲームセンター / arcade" },
        { id: "loc-bookstore", label: "書店 / bookstore" },
        { id: "loc-library", label: "図書館 / library" },
        { id: "loc-classroom", label: "教室 / classroom" },
        { id: "loc-school-corridor", label: "学校の廊下 / school corridor" },
        { id: "loc-school-gym", label: "体育館 / school gym" },
        { id: "loc-shrine", label: "神社 / shrine" },
        { id: "loc-temple", label: "寺院 / temple" },
        { id: "loc-night-market", label: "ナイトマーケット / night market" },
        { id: "loc-shopping-arcade", label: "商店街アーケード / shopping arcade" },
        { id: "loc-seaside-pier-sunset", label: "海辺の桟橋（夕景） / seaside pier (sunset)" },
        { id: "loc-beach-day", label: "ビーチ（昼） / beach (day)" },
        { id: "loc-riverbank", label: "河川敷 / riverbank" },
        { id: "loc-forest-path", label: "森の小径 / forest path" },
        { id: "loc-bamboo-grove", label: "竹林 / bamboo grove" },
        { id: "loc-mountain-overlook", label: "山の見晴らし / mountain overlook" },
        { id: "loc-warehouse", label: "倉庫 / warehouse" },
        { id: "loc-construction-site", label: "工事現場 / construction site" },
        { id: "loc-hospital-corridor", label: "病院の廊下 / hospital corridor" },
        { id: "loc-office-open", label: "オフィス（オープンフロア） / office (open floor)" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-urban-day-pack",
      label: "場所：都市・昼セット / Urban Day Pack",
      tags: ["loc-city-street-day", "loc-cafe", "loc-shopping-arcade"]
    },
    {
      id: "loc-urban-night-pack",
      label: "場所：都市・夜ネオン / Urban Night Neon",
      tags: ["loc-city-street-night", "loc-alley-neon", "loc-night-market"]
    },
    {
      id: "loc-station-pack",
      label: "場所：駅＆移動 / Station & Transit",
      tags: ["loc-train-platform", "loc-subway-platform", "loc-bus-stop"]
    },
    {
      id: "loc-school-pack",
      label: "場所：学内セット / School Pack",
      tags: ["loc-classroom", "loc-school-corridor", "loc-school-gym"]
    },
    {
      id: "loc-nature-pack",
      label: "場所：自然セット / Nature Pack",
      tags: ["loc-forest-path", "loc-riverbank", "loc-bamboo-grove"]
    },
    {
      id: "loc-seaside-sunset-pack",
      label: "場所：海辺・夕景 / Seaside Sunset",
      tags: ["loc-seaside-pier-sunset", "loc-beach-day", "loc-mountain-overlook"]
    },
    {
      id: "loc-workspace-pack",
      label: "場所：仕事・施設 / Work & Facility",
      tags: ["loc-office-open", "loc-hospital-corridor", "loc-warehouse"]
    }
  ]
});