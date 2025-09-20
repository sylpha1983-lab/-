/* hair_part16.js v1.0 (2025-09-19)
   拡張：Gradient Massive III / Duo&Multi Chrome II / Seasonal & Festival II /
        Food & Drink / Animal-Inspired / Cosmic & Cyber / Monotone Tints
   - 既存ローダー準拠: window.__registerHairPart(name, data)
   - data: { categories:[{ name, items:[{id,label}]}], presets:[{id,label,tags:[]}] }
   - IDは一意。色は hair- 接頭辞、メッシュは mesh- を維持
*/
(function(w){
  'use strict';

  const categories = [
    /* 1) グラデーション大量追加（2/3/4/5色） */
    {
      name: "グラデーション拡張 III / Gradient Massive III",
      items: [
        { id: "hair-ombre-honey-ash", label: "ハニー→アッシュ / ombre honey→ash" },
        { id: "hair-ombre-peach-lilac", label: "ピーチ→ライラック / ombre peach→lilac" },
        { id: "hair-ombre-mint-teal", label: "ミント→ティール / ombre mint→teal" },
        { id: "hair-ombre-amber-copper", label: "アンバー→カッパー / ombre amber→copper" },
        { id: "hair-ombre-slate-silver", label: "スレート→シルバー / ombre slate→silver" },

        { id: "hair-tritone-sky-lilac-rose", label: "三層: スカイ→ライラック→ローズ / tritone sky→lilac→rose" },
        { id: "hair-tritone-teal-emerald-olive", label: "三層: ティール→エメラルド→オリーブ / tritone teal→emerald→olive" },
        { id: "hair-tritone-gold-amber-bronze", label: "三層: 金→琥珀→ブロンズ / tritone gold→amber→bronze" },

        { id: "hair-quad-pastel-candy", label: "四色: キャンディパステル / quad candy pastel (peach→lemon→mint→sky)" },
        { id: "hair-quad-ocean-deep", label: "四色: ディープオーシャン / quad ocean deep (cyan→teal→navy→indigo)" },

        { id: "hair-quint-rainbow-bright", label: "五層: ブライト虹 / quint bright rainbow" },
        { id: "hair-quint-earth-fade", label: "五層: アースフェード / quint earth fade (sand→olive→slate→charcoal→black)" }
      ]
    },

    /* 2) Duo & Multi Chrome（第2弾） */
    {
      name: "デュオ/マルチクローム II / Duo & Multi-Chrome II",
      items: [
        { id: "hair-duochrome-amber-violet", label: "デュオ：アンバー↔バイオレット / duochrome amber↔violet" },
        { id: "hair-duochrome-cyan-rose", label: "デュオ：シアン↔ローズ / duochrome cyan↔rose" },
        { id: "hair-duochrome-emerald-magenta", label: "デュオ：エメラルド↔マゼンタ / duochrome emerald↔magenta" },
        { id: "hair-multichrome-aurora", label: "マルチ：オーロラ / multichrome aurora" },
        { id: "hair-multichrome-sunset", label: "マルチ：サンセット / multichrome sunset" },
        { id: "hair-multichrome-starlight", label: "マルチ：スターライト / multichrome starlight" }
      ]
    },

    /* 3) 季節・祭り（第2弾） */
    {
      name: "季節・祭 II / Seasonal & Festival II",
      items: [
        { id: "hair-hatsuyume", label: "初夢 / hatsuyume" },
        { id: "hair-hanami", label: "花見 / hanami" },
        { id: "hair-tanabata", label: "七夕 / tanabata" },
        { id: "hair-tsukimi", label: "月見 / tsukimi" },
        { id: "hair-momiji", label: "紅葉 / momiji" },
        { id: "hair-yukigeshiki", label: "雪景色 / yukigeshiki" }
      ]
    },

    /* 4) フード＆ドリンク由来カラー */
    {
      name: "フード＆ドリンク / Food & Drink",
      items: [
        { id: "hair-macaron-mix", label: "マカロンミックス / macaron mix" },
        { id: "hair-ramune", label: "ラムネ / ramune" },
        { id: "hair-matcha-latte", label: "抹茶ラテ / matcha latte" },
        { id: "hair-cassis", label: "カシス / cassis" },
        { id: "hair-berry-smoothie", label: "ベリースムージー / berry smoothie" },
        { id: "hair-cola-brown", label: "コーラブラウン / cola brown" },
        { id: "hair-milk-tea", label: "ミルクティー / milk tea" },
        { id: "hair-honey-lemon", label: "ハニーレモン / honey lemon" }
      ]
    },

    /* 5) アニマル・インスパイア */
    {
      name: "アニマル・インスパイア / Animal-Inspired",
      items: [
        { id: "hair-peacock", label: "孔雀 / peacock" },
        { id: "hair-kingfisher", label: "翡翠（カワセミ）/ kingfisher" },
        { id: "hair-koi", label: "錦鯉 / koi" },
        { id: "hair-fox", label: "狐 / fox" },
        { id: "hair-panther", label: "黒豹 / panther" },
        { id: "hair-lynx", label: "リンクス / lynx" },
        { id: "hair-husky", label: "ハスキー / husky" }
      ]
    },

    /* 6) コズミック＆サイバー */
    {
      name: "コズミック＆サイバー / Cosmic & Cyber",
      items: [
        { id: "hair-cyber-cyan", label: "サイバーシアン / cyber cyan" },
        { id: "hair-cyber-magenta", label: "サイバーマゼンタ / cyber magenta" },
        { id: "hair-cyber-lime", label: "サイバーライム / cyber lime" },
        { id: "hair-deep-space", label: "ディープスペース / deep space" },
        { id: "hair-pulsar", label: "パルサー / pulsar" },
        { id: "hair-quasar", label: "クエーサー / quasar" },
        { id: "hair-dark-matter", label: "ダークマター / dark matter" }
      ]
    },

    /* 7) モノトーン・ティント（微妙な明度差） */
    {
      name: "モノトーン・ティント / Monotone Tints",
      items: [
        { id: "hair-ink-black", label: "墨黒（インク）/ ink black" },
        { id: "hair-soft-black", label: "ソフトブラック / soft black" },
        { id: "hair-steel-gray", label: "スチールグレー / steel gray" },
        { id: "hair-dove-gray", label: "ダヴグレー / dove gray" },
        { id: "hair-pearl-gray", label: "パールグレー / pearl gray" },
        { id: "hair-smoke-gray", label: "スモークグレー / smoke gray" }
      ]
    }
  ];

  /* プリセット：種類＋ベース＋アクセント（このPart16の新規を活用） */
  const presets = [
    { id: "preset-p16-mintteal-inner", label: "黒×ミント→ティール・インナー", tags: ["hair-black", "mesh-inner-peek", "hair-ombre-mint-teal"] },
    { id: "preset-p16-duo-emerald-magenta-split", label: "青黒×デュオクローム（エメラルド↔マゼンタ）スプリット", tags: ["hair-blue-black", "mesh-split-two-tone", "hair-duochrome-emerald-magenta"] },
    { id: "preset-p16-hanami-money", label: "花見×マネーピース", tags: ["hair-hanami", "mesh-money-piece"] },
    { id: "preset-p16-matcha-balayage", label: "抹茶ラテ・バレイヤージュ", tags: ["mesh-balayage", "hair-matcha-latte"] },
    { id: "preset-p16-peacock-gradient", label: "孔雀グラデ＋アンダー", tags: ["hair-peacock", "mesh-under-color", "hair-tritone-teal-emerald-olive"] },
    { id: "preset-p16-cyber-cyan-shadow", label: "サイバーシアン＋シャドールート", tags: ["hair-cyber-cyan", "mesh-shadow-root"] },
    { id: "preset-p16-quint-rainbow-hidden", label: "五層虹・隠れレイヤー", tags: ["hair-quint-rainbow-bright", "mesh-underlayer-veil"] },
    { id: "preset-p16-ink-black-gloss", label: "インク黒×グロッシー仕上げ", tags: ["hair-ink-black", "hair-glossy-finish"] }
  ];

  w.__registerHairPart && w.__registerHairPart("hair_part16", { categories, presets });
})(window);