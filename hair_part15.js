/* hair_part15.js v1.0 (2025-09-19)
   拡張：Mesh Advanced II / Base Colors II / Neon+Reactive II / Gradient Massive II /
        Cultural & Festival / Nature II / Pattern & Finish
   - 既存ローダー仕様に準拠: window.__registerHairPart(name, data)
   - data: { categories:[{ name, items:[{id,label}]}], presets:[{id,label,tags:[]}] }
   - IDは一意、色・アクセントは hair- 接頭辞を維持（mesh 種類は mesh-）
*/
(function(w){
  'use strict';

  const categories = [
    /* 1) メッシュ高度化（追加手法・塗り分け） */
    {
      name: "メッシュ高度化 II / Mesh Advanced II",
      items: [
        { id: "mesh-root-melt", label: "ルートメルト / root melt" },
        { id: "mesh-root-smudge", label: "ルートスマッジ / root smudge" },
        { id: "mesh-lowlights", label: "ローライト / lowlights" },
        { id: "mesh-foil-rainbow", label: "フォイル（虹）/ foil rainbow" },
        { id: "mesh-face-framing-thick", label: "顔まわり太め / face framing thick" },
        { id: "mesh-underpaint", label: "アンダーペイント / underpaint" },
        { id: "mesh-sliced-panels", label: "スライスパネル / sliced panels" },
        { id: "mesh-color-block", label: "カラーブロック / color block" },
        { id: "mesh-micro-streaks", label: "マイクロストリーク / micro streaks" },
        { id: "mesh-tip-dye", label: "毛先染め / tip dye" }
      ]
    },

    /* 2) ベース髪色 拡張II（自然〜サロン系ニュアンス） */
    {
      name: "ベース髪色 拡張 II / Base Colors II",
      items: [
        { id: "hair-jet-black", label: "漆黒 / jet black hair" },
        { id: "hair-blue-black", label: "青み黒 / blue-black hair" },
        { id: "hair-espresso", label: "エスプレッソ / espresso hair" },
        { id: "hair-caramel", label: "キャラメル / caramel hair" },
        { id: "hair-toffee", label: "トフィー / toffee hair" },
        { id: "hair-beige-blonde", label: "ベージュブロンド / beige blonde hair" },
        { id: "hair-sandy-blonde", label: "サンディブロンド / sandy blonde hair" },
        { id: "hair-ash-brown", label: "アッシュブラウン / ash brown hair" },
        { id: "hair-smoky-brown", label: "スモーキーブラウン / smoky brown hair" },
        { id: "hair-rose-brown", label: "ローズブラウン / rose brown hair" },
        { id: "hair-mauve", label: "モーブ / mauve hair" },
        { id: "hair-peach", label: "ピーチ / peach hair" }
      ]
    },

    /* 3) ネオン／リアクティブ拡張II（濃淡・白発光・黒光り） */
    {
      name: "ネオン・リアクティブ II / Neon & Reactive II",
      items: [
        { id: "hair-neon-white-hot", label: "白熱ネオン / neon white-hot" },
        { id: "hair-neon-black-gloss", label: "黒光ネオン / neon black gloss" },
        { id: "hair-neon-coral", label: "ネオンコーラル / neon coral" },
        { id: "hair-neon-mint", label: "ネオンミント / neon mint" },
        { id: "hair-neon-lilac", label: "ネオンライラック / neon lilac" },
        { id: "hair-thermal-warm", label: "サーモ反応（暖）/ thermal reactive warm" },
        { id: "hair-thermal-cool", label: "サーモ反応（寒）/ thermal reactive cool" }
      ]
    },

    /* 4) グラデーション 大量追加（デュオ/トライ/クアッド/クインタ） */
    {
      name: "グラデーション大増量 / Gradient Massive II",
      items: [
        { id: "hair-ombre-caramel-honey", label: "キャラメル→ハニー / ombre caramel→honey" },
        { id: "hair-ombre-rose-brown", label: "ローズ→ブラウン / ombre rose→brown" },
        { id: "hair-ombre-jetblack-blueblack", label: "漆黒→青み黒 / ombre jet-black→blue-black" },
        { id: "hair-tritone-ash-beige-platinum", label: "三層: ash→beige→platinum" },
        { id: "hair-tritone-coral-peach-pink", label: "三層: coral→peach→pink" },
        { id: "hair-quad-teal-navy-violet-magenta", label: "四色: teal→navy→violet→magenta" },
        { id: "hair-quad-earth-sandstone-olive-charcoal", label: "四色: sandstone→olive→slate→charcoal" },
        { id: "hair-quint-aurora", label: "五層: aurora (mint→teal→blue→violet→rose)" }
      ]
    },

    /* 5) 文化・祭色（アクセント向け） */
    {
      name: "文化・祭色 / Cultural & Festival",
      items: [
        { id: "hair-hanabi", label: "花火 / hanabi" },
        { id: "hair-matsuri", label: "祭 / matsuri" },
        { id: "hair-yukata-rose", label: "浴衣・ローズ / yukata rose" },
        { id: "hair-wagashi-pastel", label: "和菓子パステル / wagashi pastel" },
        { id: "hair-kiriko-blue", label: "切子ブルー / kiriko blue" },
        { id: "hair-nishijin-gold", label: "西陣ゴールド / nishijin gold" }
      ]
    },

    /* 6) 自然拡張II（気象・地形・天体） */
    {
      name: "自然拡張 II / Nature Extended II",
      items: [
        { id: "hair-storm", label: "嵐（ストーム）/ storm" },
        { id: "hair-thundercloud", label: "雷雲 / thundercloud" },
        { id: "hair-sunrise", label: "朝焼け / sunrise" },
        { id: "hair-dune", label: "砂丘 / dune" },
        { id: "hair-coral-reef", label: "珊瑚礁 / coral reef" },
        { id: "hair-glacier", label: "氷河 / glacier" },
        { id: "hair-meteor", label: "流星 / meteor" },
        { id: "hair-nebula", label: "星雲 / nebula" }
      ]
    },

    /* 7) パターン・質感（アクセント表現） */
    {
      name: "パターン・質感 / Pattern & Finish",
      items: [
        { id: "hair-marble", label: "マーブル / marble" },
        { id: "hair-smoke", label: "スモーク / smoke" },
        { id: "hair-galaxy-swish", label: "ギャラクシースウィッシュ / galaxy swish" },
        { id: "hair-glitter", label: "グリッター / glitter" },
        { id: "hair-matte-finish", label: "マット仕上げ / matte finish" },
        { id: "hair-satin-finish", label: "サテン仕上げ / satin finish" },
        { id: "hair-glossy-finish", label: "グロッシー仕上げ / glossy finish" },
        { id: "hair-wet-look", label: "濡れ髪ルック / wet look" }
      ]
    }
  ];

  /* プリセット：種類＋ベース＋アクセント色を一括指定（本Part15の新規を使用） */
  const presets = [
    { id: "preset-p15-jetblack-neonwhitehot-inner", label: "漆黒×白熱ネオン・インナー", tags: ["hair-jet-black", "mesh-inner-peek", "hair-neon-white-hot"] },
    { id: "preset-p15-espresso-caramel-honey-ombre", label: "エスプレッソ→キャラメル→ハニー", tags: ["hair-tritone-ash-beige-platinum", "hair-espresso", "hair-caramel", "hair-beige-blonde"] },
    { id: "preset-p15-colorblock-teal-violet", label: "カラー・ブロック：ティール×バイオレット", tags: ["mesh-color-block", "hair-teal", "hair-purple"] },
    { id: "preset-p15-rootmelt-rosebrown", label: "ルートメルト×ローズブラウン", tags: ["mesh-root-melt", "hair-rose-brown"] },
    { id: "preset-p15-hidden-nebula", label: "隠れ星雲グラデ", tags: ["mesh-underpaint", "hair-nebula"] },
    { id: "preset-p15-wetlook-blackgloss", label: "濡れ髪×黒光ネオン", tags: ["hair-wet-look", "hair-neon-black-gloss", "mesh-micro-streaks"] },
    { id: "preset-p15-yukata-rose-money", label: "浴衣ローズ・マネーピース", tags: ["hair-yukata-rose", "mesh-money-piece"] },
    { id: "preset-p15-storm-shadow-root", label: "ストーム＋シャドールート", tags: ["hair-storm", "mesh-shadow-root"] }
  ];

  w.__registerHairPart && w.__registerHairPart("hair_part15", { categories, presets });
})(window);