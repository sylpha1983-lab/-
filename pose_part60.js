/* pose_part60.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：機能空間（スポーツ会場／スタジオ／司法・行政／警察・消防／管制・放送）
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（統合時に他とマージされます）
// ※ 他パートと id 重複しないよう全て新規IDにしています

window.__registerPosePart("pose_part60", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- スポーツ（屋内） ---
        { id: "loc-gymnasium-court", label: "体育館コート / gymnasium court" },
        { id: "loc-basketball-arena", label: "バスケットアリーナ / basketball arena" },
        { id: "loc-volleyball-court", label: "バレーボールコート / volleyball court" },
        { id: "loc-boxing-ring", label: "ボクシングリング / boxing ring" },
        { id: "loc-dojo-tatami", label: "道場（畳） / dojo tatami" },
        { id: "loc-fencing-piste", label: "フェンシングピスト / fencing piste" },
        { id: "loc-swimming-pool-indoor", label: "室内プール / indoor swimming pool" },
        { id: "loc-ice-rink", label: "アイスリンク / ice rink" },

        // --- スポーツ（屋外） ---
        { id: "loc-stadium-field", label: "スタジアム・フィールド / stadium field" },
        { id: "loc-athletics-track", label: "陸上トラック / athletics track" },
        { id: "loc-soccer-pitch", label: "サッカーピッチ / soccer pitch" },
        { id: "loc-tennis-court", label: "テニスコート / tennis court" },
        { id: "loc-baseball-diamond", label: "野球ダイヤモンド / baseball diamond" },
        { id: "loc-bleachers", label: "観客席・ベンチ / stadium bleachers" },

        // --- スタジオ・制作 ---
        { id: "loc-photo-studio-white", label: "白ホリ・フォトスタジオ / photo studio (white cyclorama)" },
        { id: "loc-sound-stage", label: "サウンドステージ / sound stage" },
        { id: "loc-green-screen", label: "グリーンバック / green screen stage" },
        { id: "loc-mocap-stage", label: "モーキャプスタジオ / motion capture stage" },
        { id: "loc-recording-booth", label: "レコーディングブース / recording booth" },
        { id: "loc-radio-studio", label: "ラジオスタジオ / radio studio" },
        { id: "loc-newsroom-desk", label: "ニュースデスク / newsroom desk" },
        { id: "loc-broadcast-control", label: "放送サブ（調整室） / broadcast control room" },

        // --- 司法・行政 ---
        { id: "loc-courtroom", label: "法廷 / courtroom" },
        { id: "loc-court-judge-bench", label: "裁判官席前 / judge's bench" },
        { id: "loc-council-chamber", label: "評議会室 / council chamber" },
        { id: "loc-press-briefing-room", label: "記者会見室 / press briefing room" },
        { id: "loc-parliament-hall", label: "議場 / parliament hall" },

        // --- 警察・消防・保安 ---
        { id: "loc-police-interrogation", label: "取調室 / police interrogation room" },
        { id: "loc-police-evidence", label: "証拠保管室 / police evidence room" },
        { id: "loc-precinct-bullpen", label: "署内執務スペース / police bullpen" },
        { id: "loc-fire-station-bay", label: "消防車庫（ベイ） / fire station apparatus bay" },
        { id: "loc-ems-triage", label: "救急トリアージ区画 / EMS triage area" },

        // --- 管制・監視・指令 ---
        { id: "loc-ops-war-room", label: "作戦会議室（ウォールーム） / operations war room" },
        { id: "loc-security-monitoring", label: "セキュリティ監視室 / security monitoring room" },
        { id: "loc-traffic-control", label: "交通管制室 / traffic control center" },
        { id: "loc-emergency-operations-center", label: "危機対策本部 / emergency operations center" },
        { id: "loc-data-visualization-wall", label: "データビジュアライゼーション壁面 / data viz wall" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-sports-indoor-pack",
      label: "場所：スポーツ（屋内） / Indoor Sports",
      tags: ["loc-gymnasium-court", "loc-boxing-ring", "loc-swimming-pool-indoor"]
    },
    {
      id: "loc-sports-outdoor-pack",
      label: "場所：スポーツ（屋外） / Outdoor Sports",
      tags: ["loc-stadium-field", "loc-athletics-track", "loc-soccer-pitch"]
    },
    {
      id: "loc-studio-production-pack",
      label: "場所：スタジオ制作 / Studio & Production",
      tags: ["loc-photo-studio-white", "loc-sound-stage", "loc-broadcast-control"]
    },
    {
      id: "loc-judicial-pack",
      label: "場所：司法・行政 / Judicial & Civic",
      tags: ["loc-courtroom", "loc-council-chamber", "loc-press-briefing-room"]
    },
    {
      id: "loc-emergency-pack",
      label: "場所：警察・消防・救急 / Police & Fire & EMS",
      tags: ["loc-police-interrogation", "loc-fire-station-bay", "loc-ems-triage"]
    },
    {
      id: "loc-ops-control-pack",
      label: "場所：管制・指令 / Ops & Control",
      tags: ["loc-ops-war-room", "loc-security-monitoring", "loc-emergency-operations-center"]
    }
  ]
});