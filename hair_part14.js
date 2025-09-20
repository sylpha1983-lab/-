/* hair_part14.js v1.0 (2025-09-19)
   拡張：Iridescent/Opal/Chameleon 大量追加 + Neon濃淡/温度差 + Hologram/Oil Slick/Anodized/Prism 系
   - 既存ローダー仕様に準拠: window.__registerHairPart(name, data)
   - data: { categories:[{ name, items:[{id,label}]}], presets:[{id,label,tags:[]}] }
   - IDは一意、髪色系IDは hair- 接頭辞を維持
*/
(function(w){
  'use strict';

  const categories = [
    /* 1) Hologram / Prism / Spectrum 系（既存の "hair-hologram" からの派生を大量追加） */
    {
      name: "ホログラム・プリズム / Hologram, Prism & Spectrum",
      items: [
        { id: "hair-hologram-rose", label: "ホログラム（ローズ）/ hologram rose" },
        { id: "hair-hologram-aqua", label: "ホログラム（アクア）/ hologram aqua" },
        { id: "hair-hologram-amber", label: "ホログラム（アンバー）/ hologram amber" },
        { id: "hair-hologram-violet", label: "ホログラム（バイオレット）/ hologram violet" },
        { id: "hair-hologram-graphite", label: "ホログラム（グラファイト）/ hologram graphite" },
        { id: "hair-prism-rainbow", label: "プリズム虹 / prism rainbow" },
        { id: "hair-spectrum-shift-cool", label: "スペクトラム偏移（寒色）/ spectrum shift cool" },
        { id: "hair-spectrum-shift-warm", label: "スペクトラム偏移（暖色）/ spectrum shift warm" }
      ]
    },

    /* 2) Oil Slick / Pearlescent / Anodized（質感拡張） */
    {
      name: "オイルスリック・パール・アノダイズ / Oil Slick, Pearlescent & Anodized",
      items: [
        { id: "hair-oil-slick-bluegreen", label: "オイルスリック（青緑）/ oil slick blue-green" },
        { id: "hair-oil-slick-violetgold", label: "オイルスリック（紫→金）/ oil slick violet→gold" },
        { id: "hair-oil-slick-magenta-teal", label: "オイルスリック（マゼンタ→ティール）/ oil slick magenta→teal" },
        { id: "hair-pearlescent-rose", label: "パール光沢（ローズ）/ pearlescent rose" },
        { id: "hair-pearlescent-blue", label: "パール光沢（ブルー）/ pearlescent blue" },
        { id: "hair-anodized-titanium", label: "アノダイズ（チタン）/ anodized titanium" },
        { id: "hair-anodized-violet", label: "アノダイズ（バイオレット）/ anodized violet" },
        { id: "hair-anodized-teal", label: "アノダイズ（ティール）/ anodized teal" },
        { id: "hair-anodized-bronze", label: "アノダイズ（ブロンズ）/ anodized bronze" }
      ]
    },

    /* 3) Iridescent / Opal / Chameleon（色相違いを網羅） */
    {
      name: "虹彩・オパール・カメレオン拡張 / Iridescent, Opal & Chameleon Extended",
      items: [
        { id: "hair-iridescent-emerald", label: "イリデッセント（エメラルド）/ iridescent emerald" },
        { id: "hair-iridescent-coral", label: "イリデッセント（コーラル）/ iridescent coral" },
        { id: "hair-iridescent-ice", label: "イリデッセント（アイス）/ iridescent ice" },
        { id: "hair-opal-sun", label: "オパール（サン）/ opal sun" },
        { id: "hair-opal-moon", label: "オパール（ムーン）/ opal moon" },
        { id: "hair-opal-aurora", label: "オパール（オーロラ）/ opal aurora" },
        { id: "hair-chameleon-amber-teal", label: "カメレオン（アンバー→ティール）/ chameleon amber→teal" },
        { id: "hair-chameleon-blue-rose", label: "カメレオン（青→ローズ）/ chameleon blue→rose" },
        { id: "hair-chameleon-navy-lime", label: "カメレオン（ネイビー→ライム）/ chameleon navy→lime" },
        { id: "hair-chameleon-gold-cyan", label: "カメレオン（金→シアン）/ chameleon gold→cyan" }
      ]
    },

    /* 4) Neon（濃淡・温度差・特殊反応） */
    {
      name: "ネオン濃淡・温度差 / Neon Shades & Reactives",
      items: [
        { id: "hair-neon-pink-deep", label: "ネオンピンク（濃）/ neon pink deep" },
        { id: "hair-neon-pink-soft", label: "ネオンピンク（淡）/ neon pink soft" },
        { id: "hair-neon-blue-deep", label: "ネオンブルー（濃）/ neon blue deep" },
        { id: "hair-neon-blue-soft", label: "ネオンブルー（淡）/ neon blue soft" },
        { id: "hair-neon-green-deep", label: "ネオングリーン（濃）/ neon green deep" },
        { id: "hair-neon-green-soft", label: "ネオングリーン（淡）/ neon green soft" },
        { id: "hair-neon-orange-deep", label: "ネオンオレンジ（濃）/ neon orange deep" },
        { id: "hair-neon-orange-soft", label: "ネオンオレンジ（淡）/ neon orange soft" },
        { id: "hair-neon-violet-deep", label: "ネオンバイオレット（濃）/ neon violet deep" },
        { id: "hair-neon-violet-soft", label: "ネオンバイオレット（淡）/ neon violet soft" },
        { id: "hair-blacklight-reactive", label: "ブラックライト反応 / blacklight reactive" },
        { id: "hair-uv-reactive-warm", label: "UV反応（暖色寄り）/ UV reactive warm" },
        { id: "hair-uv-reactive-cool", label: "UV反応（寒色寄り）/ UV reactive cool" }
      ]
    },

    /* 5) Duo/Multi Chrome（二色/多色偏光） */
    {
      name: "デュオ/マルチクローム / Duo & Multi-Chrome",
      items: [
        { id: "hair-duochrome-rose-gold", label: "デュオクローム（ローズ↔ゴールド）/ duochrome rose↔gold" },
        { id: "hair-duochrome-teal-purple", label: "デュオクローム（ティール↔パープル）/ duochrome teal↔purple" },
        { id: "hair-duochrome-blue-magenta", label: "デュオクローム（青↔マゼンタ）/ duochrome blue↔magenta" },
        { id: "hair-multichrome-cool", label: "マルチクローム（寒色）/ multichrome cool" },
        { id: "hair-multichrome-warm", label: "マルチクローム（暖色）/ multichrome warm" },
        { id: "hair-multichrome-galaxy", label: "マルチクローム（ギャラクシー）/ multichrome galaxy" }
      ]
    }
  ];

  /* プリセット：ベース＋メッシュ種類＋アクセント色（このPart14の新色を使用） */
  const presets = [
    { id: "preset-p14-holo-rose-foil", label: "黒×ホログラム・ローズ（フォイル太）", tags: ["hair-black", "mesh-foil-chunky", "hair-hologram-rose"] },
    { id: "preset-p14-oilslick-navy-split", label: "ネイビー×オイルスリック青緑・スプリット", tags: ["hair-navy", "mesh-split-two-tone", "hair-oil-slick-bluegreen"] },
    { id: "preset-p14-pear-blue-inner", label: "プラチナ×パール青・インナー", tags: ["hair-platinum-blonde", "mesh-inner-peek", "hair-pearlescent-blue"] },
    { id: "preset-p14-ano-titan-balayage", label: "ブラウン×アノダイズ・チタン（バレイヤージュ）", tags: ["hair-brown", "mesh-balayage", "hair-anodized-titanium"] },
    { id: "preset-p14-neo-pinkdeep-money", label: "灰髪×ネオンピンク濃・マネーピース", tags: ["hair-gray", "mesh-money-piece", "hair-neon-pink-deep"] },
    { id: "preset-p14-irides-emerald-gradient", label: "黒×イリデッセント・エメラルド（グラデMix）", tags: ["hair-black", "mesh-gradient-mix", "hair-iridescent-emerald"] },
    { id: "preset-p14-chameleon-blue-rose-under", label: "黒×カメレオン青→ローズ・アンダー", tags: ["hair-black", "mesh-under-color", "hair-chameleon-blue-rose"] },
    { id: "preset-p14-prism-rainbow-shadow", label: "茶髪×プリズム虹＋シャドールート", tags: ["hair-brown", "mesh-shadow-root", "hair-prism-rainbow"] }
  ];

  w.__registerHairPart && w.__registerHairPart("hair_part14", { categories, presets });
})(window);