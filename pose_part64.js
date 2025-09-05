/* pose_part64.js v1.0 (2025-09-04) */
// 場所ロケーション拡張：公共実務（医療クリニック／保健室・市役所窓口／公民館・郵便局・銀行ATM・証明写真機 など）
// 既存ローダー互換：__registerPosePart を使用
// カテゴリ名は "Locations / 場所"（統合時にマージされます）
// ※ 他パートとの id 重複なし

window.__registerPosePart("pose_part64", {
  categories: [
    {
      name: "Locations / 場所",
      items: [
        // --- 医療・保健 ---
        { id: "loc-clinic-reception", label: "クリニック受付 / clinic reception" },
        { id: "loc-clinic-waiting", label: "クリニック待合 / clinic waiting area" },
        { id: "loc-exam-room", label: "診察室 / examination room" },
        { id: "loc-nurse-station", label: "ナースステーション / nurse station" },
        { id: "loc-school-nurse-room", label: "学校の保健室 / school nurse room" },
        { id: "loc-pharmacy-counter", label: "調剤薬局カウンター / pharmacy counter" },

        // --- 行政窓口・公共手続 ---
        { id: "loc-cityhall-counter", label: "市役所窓口 / city hall counter" },
        { id: "loc-resident-card-desk", label: "住民票・証明窓口 / resident certificate desk" },
        { id: "loc-tax-office-lobby", label: "税務署ロビー / tax office lobby" },
        { id: "loc-public-service-kiosk", label: "公共手続き端末コーナー / public service kiosks" },
        { id: "loc-community-center-desk", label: "公民館受付 / community center desk" },
        { id: "loc-community-multipurpose", label: "公民館多目的室 / community multipurpose room" },

        // --- 郵便・金融 ---
        { id: "loc-post-office-counter", label: "郵便局窓口 / post office counter" },
        { id: "loc-parcel-pickup-shelf", label: "荷物受取棚 / parcel pickup shelf" },
        { id: "loc-po-box-wall", label: "私書箱コーナー / P.O. box wall" },
        { id: "loc-bank-lobby", label: "銀行ロビー / bank lobby" },
        { id: "loc-atm-lobby", label: "ATMロビー / ATM lobby" },
        { id: "loc-foreign-exchange", label: "外貨両替カウンター / foreign exchange counter" },

        // --- 生活サポート・公共設備 ---
        { id: "loc-citizen-helpdesk", label: "市民相談窓口 / citizen help desk" },
        { id: "loc-job-center", label: "就労支援センター / job assistance center" },
        { id: "loc-childcare-desk", label: "子育て支援窓口 / childcare support desk" },
        { id: "loc-photo-booth", label: "証明写真機コーナー / ID photo booth" },
        { id: "loc-copy-print-corner", label: "コピー・プリント機 / copy & print corner" },
        { id: "loc-public-notice-board", label: "掲示板（公共告知） / public notice board" },

        // --- 交通・出張所・その他 ---
        { id: "loc-police-substation", label: "交番・駐在所窓口 / police substation counter" },
        { id: "loc-driving-license-center", label: "運転免許センター受付 / driver license center desk" },
        { id: "loc-transport-service-desk", label: "交通事業者サービスカウンター / transport service desk" }
      ]
    }
  ],
  presets: [
    {
      id: "loc-clinic-pack",
      label: "場所：クリニック・保健 / Clinic & Health",
      tags: ["loc-clinic-reception", "loc-exam-room", "loc-pharmacy-counter"]
    },
    {
      id: "loc-nurse-school-pack",
      label: "場所：保健室・看護 / Nurse & School Health",
      tags: ["loc-school-nurse-room", "loc-nurse-station", "loc-clinic-waiting"]
    },
    {
      id: "loc-municipal-pack",
      label: "場所：市役所・公共窓口 / Municipal Services",
      tags: ["loc-cityhall-counter", "loc-resident-card-desk", "loc-public-service-kiosk"]
    },
    {
      id: "loc-community-pack",
      label: "場所：公民館・市民支援 / Community & Support",
      tags: ["loc-community-center-desk", "loc-community-multipurpose", "loc-citizen-helpdesk"]
    },
    {
      id: "loc-post-bank-pack",
      label: "場所：郵便・金融 / Post & Bank",
      tags: ["loc-post-office-counter", "loc-atm-lobby", "loc-bank-lobby"]
    },
    {
      id: "loc-utilities-pack",
      label: "場所：公共設備・証明写真 / Public Utilities",
      tags: ["loc-photo-booth", "loc-copy-print-corner", "loc-public-notice-board"]
    },
    {
      id: "loc-license-transport-pack",
      label: "場所：免許・交通窓口 / License & Transport",
      tags: ["loc-driving-license-center", "loc-transport-service-desk", "loc-police-substation"]
    }
  ]
});