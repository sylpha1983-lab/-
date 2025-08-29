/* ============================================
   Expression + Effects Builder — part5.js (5/20)
   置き方：builder_main.html と同じフォルダに保存
   格納：window.expressionEffects["part5"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目（派生強化）
    { id: 'side-eye-razor',        jp: '横目・レイザー',          category: 'Eyes / 目' },
    { id: 'side-eye-gentle',       jp: '横目・そっと',            category: 'Eyes / 目' },
    { id: 'half-lidded-serious',   jp: '半目・真剣',              category: 'Eyes / 目' },
    { id: 'half-lidded-lazy',      jp: '半目・けだるげ',          category: 'Eyes / 目' },
    { id: 'upward-glance-coy',     jp: '上目遣い・小悪魔',        category: 'Eyes / 目' },
    { id: 'tear-brim',             jp: '涙がこぼれそう',          category: 'Eyes / 目' },
    { id: 'glassy-eyes-silver',    jp: 'うるみ瞳・シルバー',      category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-knit-soft',        jp: '眉間寄せ・控えめ',        category: 'Brows / 眉' },
    { id: 'brow-confident-arch',   jp: '自信眉・アーチ',          category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'soft-grin',             jp: '控えめにやり',            category: 'Mouth / 口' },
    { id: 'tight-smile',           jp: '引きつり微笑み',          category: 'Mouth / 口' },
    { id: 'pout-hard-plus',        jp: 'ふくれ・強＋',            category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'wistful',               jp: '物憂げ',                  category: 'Emotion / 感情' },
    { id: 'smug',                  jp: 'どや顔',                  category: 'Emotion / 感情' },
    { id: 'yearning',              jp: '憧憬',                    category: 'Emotion / 感情' },

    // State / 状態
    { id: 'focused-calm',          jp: '静かな集中',              category: 'State / 状態' },
    { id: 'startled',              jp: 'びくっ',                  category: 'State / 状態' },
    { id: 'awkward-freeze',        jp: '固まる気まずさ',          category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-split',       jp: '分割リムライト',          category: 'Light / 光' },
    { id: 'face-gloss-plus',       jp: '顔ハイライト・強',        category: 'Light / 光' },
    { id: 'bloom-soft',            jp: 'ソフト・ブルーム',        category: 'Light / 光' },
    { id: 'vignette-square',       jp: 'スクエア・ビネット',      category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-bold',     jp: '集中線・太',              category: 'Lines / 線' },
    { id: 'impact-lines-ultra',    jp: '集中線・極太',            category: 'Lines / 線' },
    { id: 'speed-lines-arc',       jp: 'スピード線・アーク',      category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-burst',         jp: 'スパークル・バースト',    category: 'Particles / 粒子' },
    { id: 'dust-soft',             jp: 'ソフト・ダスト',          category: 'Particles / 粒子' },
    { id: 'bokeh-ring',            jp: 'ボケ輪',                  category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'drizzle-veil',          jp: 'ヴェール霧雨',            category: 'Weather / 天候' },
    { id: 'snow-feather',          jp: '綿雪',                    category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-trench',      jp: '目の下の溝影',            category: 'VFX / その他' },
    { id: 'screen-tone-dots',      jp: 'トーン・ドット細',        category: 'VFX / その他' },
    { id: 'film-grain-subtle',     jp: '微粒子フィルム',          category: 'VFX / その他' }
  ];

  // ========== Presets 追加 ==========
  const presets = [
    {
      id: 'Coy-Glance-Burst',
      label: '小悪魔上目遣い・バースト',
      expressions: ['upward-glance-coy','soft-grin','smug'],
      effects: ['sparkle-burst','face-gloss-plus','vignette-square']
    },
    {
      id: 'Wistful-Silver-Tear',
      label: '物憂げ・銀のうるみと涙',
      expressions: ['wistful','glassy-eyes-silver','tear-brim'],
      effects: ['bloom-soft','dust-soft','vignette']
    },
    {
      id: 'Razor-Side-Lines',
      label: 'レイザー横目・極太線',
      expressions: ['side-eye-razor','brow-confident-arch','tight-smile'],
      effects: ['impact-lines-ultra','rim-light-split','film-grain-subtle']
    },
    {
      id: 'Startled-Arc-Speed',
      label: 'びくっ・アークスピード',
      expressions: ['startled','half-lidded-serious','brow-knit-soft'],
      effects: ['speed-lines-arc','impact-lines-bold','bloom']
    },
    {
      id: 'Hard-Pout-Drama',
      label: 'むくれ強＋・ドラマ',
      expressions: ['pout-hard-plus','awkward-freeze','side-eye-gentle'],
      effects: ['under-eye-trench','screen-tone-dots','vignette-square']
    },
    {
      id: 'Yearning-Ring-Bokeh',
      label: '憧憬・ボケ輪の光',
      expressions: ['yearning','half-lidded-lazy','soft-grin'],
      effects: ['bokeh-ring','sparkle-burst','rim-light']
    }
  ];

  g.expressionEffects["part5"] = { expressions, effects, presets };
})(window);