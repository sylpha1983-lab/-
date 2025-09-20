/* hair_part12.js v1.0 (2025-09-19)
   髪カラー＆メッシュ拡張（和色 / Iridescent / Neon拡張 / 多段グラデ / 追加メッシュ等）
   - 既存ローダー仕様に準拠: window.__registerHairPart(name, data)
   - data: { categories:[{ name, items:[{id,label}] }], presets:[{id,label,tags:[]}] }
   - ID重複回避 / 髪色は hair- 接頭辞を維持
*/
(function(w){
  'use strict';

  const categories = [
    /* 1) 追加メッシュ・塗り分け */
    {
      name: "メッシュ追加 / Advanced Streaks & Splits",
      items: [
        { id: "mesh-balayage", label: "バレイヤージュ / balayage" },
        { id: "mesh-reverse-balayage", label: "リバース・バレイヤージュ / reverse balayage" },
        { id: "mesh-shadow-root", label: "シャドールート / shadow root" },
        { id: "mesh-smoky-root", label: "スモーキールート / smoky root" },
        { id: "mesh-frosted-tips", label: "フロステッドチップ / frosted tips" },
        { id: "mesh-dipped-ends", label: "ディップドエンド / dipped ends" },
        { id: "mesh-hidden-rainbow", label: "隠れ虹色 / hidden rainbow" },
        { id: "mesh-underlayer-veil", label: "アンダーレイヤーベール / underlayer veil" },
        { id: "mesh-checker-split", label: "チェッカー・スプリット / checker split" },
        { id: "mesh-zigzag-streaks", label: "ジグザグストリーク / zigzag streaks" },
        { id: "mesh-pixel", label: "ピクセルヘア / pixel hair" },
        { id: "mesh-gradient-under", label: "グラデ・アンダー / gradient under" }
      ]
    },

    /* 2) 和色（ベース/メッシュ両対応のアクセント色） */
    {
      name: "和色 / Japanese Traditional Colors",
      items: [
        { id: "hair-sakura", label: "桜色 / sakura" },
        { id: "hair-ume", label: "梅色 / ume" },
        { id: "hair-beni", label: "紅 / beni" },
        { id: "hair-sango", label: "珊瑚 / sango" },
        { id: "hair-momo", label: "桃色 / momo" },
        { id: "hair-daidai", label: "橙 / daidai" },
        { id: "hair-kohaku", label: "琥珀 / kohaku" },
        { id: "hair-yamabuki", label: "山吹 / yamabuki" },
        { id: "hair-ukon", label: "鬱金 / ukon" },
        { id: "hair-wakaba", label: "若葉 / wakaba" },
        { id: "hair-matcha", label: "抹茶 / matcha" },
        { id: "hair-midori", label: "緑 / midori" },
        { id: "hair-byakuroku", label: "白緑 / byakuroku" },
        { id: "hair-asagi", label: "浅葱 / asagi" },
        { id: "hair-mizuasagi", label: "水浅葱 / mizu-asagi" },
        { id: "hair-ai", label: "藍 / ai" },
        { id: "hair-ruri", label: "瑠璃 / ruri" },
        { id: "hair-kon", label: "紺 / kon" },
        { id: "hair-fuji", label: "藤 / fuji" },
        { id: "hair-shion", label: "紫苑 / shion" },
        { id: "hair-murasaki", label: "紫 / murasaki" },
        { id: "hair-botannezu", label: "牡丹鼠 / botan-nezu" },
        { id: "hair-ginzumi", label: "銀墨 / ginzumi" },
        { id: "hair-sumi", label: "墨 / sumi" },
        { id: "hair-kyo-midori", label: "京緑 / kyo-midori" },
        { id: "hair-tsuyukusa", label: "露草 / tsuyukusa" },
        { id: "hair-kikyou", label: "桔梗 / kikyo" },
        { id: "hair-azuki", label: "小豆 / azuki" },
        { id: "hair-kuri", label: "栗色 / kuri" },
        { id: "hair-uguisu", label: "鶯色 / uguisu" }
      ]
    },

    /* 3) イリデッセント/オパール/カメレオンの色相違い */
    {
      name: "虹彩・オパール / Iridescent & Opal Variants",
      items: [
        { id: "hair-opal-pink", label: "オパール（桃）/ opal pink" },
        { id: "hair-opal-blue", label: "オパール（青）/ opal blue" },
        { id: "hair-opal-green", label: "オパール（緑）/ opal green" },
        { id: "hair-iridescent-rose", label: "イリデッセント・ローズ / iridescent rose" },
        { id: "hair-iridescent-aqua", label: "イリデッセント・アクア / iridescent aqua" },
        { id: "hair-iridescent-violet", label: "イリデッセント・バイオレット / iridescent violet" },
        { id: "hair-chameleon-purple-green", label: "カメレオン 紫→緑 / chameleon purple→green" },
        { id: "hair-chameleon-blue-gold", label: "カメレオン 青→金 / chameleon blue→gold" },
        { id: "hair-chameleon-teal-magenta", label: "カメレオン ティール→マゼンタ / chameleon teal→magenta" }
      ]
    },

    /* 4) ネオン拡張 */
    {
      name: "ネオン拡張 / Neon Extended",
      items: [
        { id: "hair-neon-lime", label: "ネオンライム / neon lime" },
        { id: "hair-neon-teal", label: "ネオンティール / neon teal" },
        { id: "hair-neon-turquoise", label: "ネオンターコイズ / neon turquoise" },
        { id: "hair-neon-white", label: "ネオンホワイト / neon white" },
        { id: "hair-neon-amber", label: "ネオンアンバー / neon amber" }
      ]
    },

    /* 5) グラデーション（2色/3色/4色） */
    {
      name: "グラデーション拡張 / Gradient & Tritone",
      items: [
        { id: "hair-ombre-rose-gold-pink", label: "ローズゴールド→ピンク / ombre rose-gold→pink" },
        { id: "hair-ombre-ash-gray-blue", label: "アッシュグレー→ブルー / ombre ash-gray→blue" },
        { id: "hair-ombre-teal-purple", label: "ティール→パープル / ombre teal→purple" },
        { id: "hair-tritone-iceblue-lavender-silver", label: "三層: アイス青→ラベンダー→銀 / tritone iceblue→lavender→silver" },
        { id: "hair-tritone-sunset", label: "三層: サンセット / tritone sunset (orange→rose→violet)" },
        { id: "hair-quad-rainbow-soft", label: "四色: ソフト虹 / quad soft rainbow" }
      ]
    },

    /* 6) アース/モノトーン */
    {
      name: "アース・モノトーン / Earth & Monotone",
      items: [
        { id: "hair-ivory", label: "アイボリー / ivory" },
        { id: "hair-ecru", label: "エクリュ / ecru" },
        { id: "hair-sandstone", label: "砂岩 / sandstone" },
        { id: "hair-terracotta", label: "テラコッタ / terracotta" },
        { id: "hair-olive", label: "オリーブ / olive" },
        { id: "hair-sage", label: "セージ / sage" },
        { id: "hair-slate", label: "スレート / slate" },
        { id: "hair-charcoal", label: "チャコール / charcoal" }
      ]
    }
  ];

  /* プリセット例（ベース＋メッシュ種類＋メッシュ色） */
  const presets = [
    { id: "preset-wa-sakura-inner", label: "和：黒×桜 インナー", tags: ["hair-black", "mesh-inner-peek", "hair-sakura"] },
    { id: "preset-wa-ruri-balayage", label: "和：焦茶×瑠璃 バレイヤージュ", tags: ["hair-brown", "mesh-balayage", "hair-ruri"] },
    { id: "preset-hidden-rainbow-ivory", label: "隠れ虹×アイボリー", tags: ["mesh-hidden-rainbow", "hair-ivory"] },
    { id: "preset-neon-teal-split", label: "ネオンティール・スプリット", tags: ["mesh-checker-split", "hair-neon-teal", "hair-black"] },
    { id: "preset-opal-aurora", label: "オパール×オーロラ", tags: ["mesh-gradient-under", "hair-opal-blue", "hair-aurora-gradient"] },
    { id: "preset-tritone-sunset", label: "三層サンセット＋シャドールート", tags: ["hair-tritone-sunset", "mesh-shadow-root"] }
  ];

  w.__registerHairPart && w.__registerHairPart("hair_part12", { categories, presets });
})(window);