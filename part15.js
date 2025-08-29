/* ============================================
   Expression + Effects Builder — part15.js (15/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part15"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'teary-glisten',          jp: '涙ぐみの輝き',                 category: 'Eyes / 目' },
    { id: 'narrow-suspicious',      jp: '疑いの細目',                   category: 'Eyes / 目' },
    { id: 'bright-hopeful',         jp: '希望に満ちた瞳',               category: 'Eyes / 目' },
    { id: 'downcast-soft',          jp: '伏し目・やわら',               category: 'Eyes / 目' },
    { id: 'sharp-lock-on',          jp: '鋭い視線・ロックオン',         category: 'Eyes / 目' },
    { id: 'wink-tease',             jp: 'ウィンク・挑発',               category: 'Eyes / 目' },
    { id: 'moist-eyes',             jp: 'しっとり目',                   category: 'Eyes / 目' },
    { id: 'glassy-eyes-ruby',       jp: 'うるみ瞳・ルビー',             category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arched-high',       jp: '眉・高く弧を描く',             category: 'Brows / 眉' },
    { id: 'brow-knit-deep',         jp: '眉間しわ・深',                 category: 'Brows / 眉' },
    { id: 'brow-soft-relief',       jp: 'やわら眉・安堵',               category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-bright',           jp: '明るい笑み',                   category: 'Mouth / 口' },
    { id: 'soft-smirk-shy',         jp: '照れニヤリ・やわら',           category: 'Mouth / 口' },
    { id: 'press-lips-determined',  jp: '口を結ぶ・決意',               category: 'Mouth / 口' },
    { id: 'open-laugh-soft',        jp: '口開き・小さな笑い',           category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'spark-joy',              jp: 'きらめく喜び',                 category: 'Emotion / 感情' },
    { id: 'quiet-sadness',          jp: '静かな悲しみ',                 category: 'Emotion / 感情' },
    { id: 'guarded',                jp: '用心深い',                     category: 'Emotion / 感情' },
    { id: 'encouraging',            jp: '励ます気持ち',                 category: 'Emotion / 感情' },

    // State / 状態
    { id: 'steady',                 jp: 'ぶれない',                     category: 'State / 状態' },
    { id: 'uptempo',                jp: '気分高揚',                     category: 'State / 状態' },
    { id: 'drained',                jp: '消耗',                         category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'catchlight-star',        jp: 'キャッチライト・星',           category: 'Light / 光' },
    { id: 'catchlight-tear',        jp: 'キャッチライト・涙',           category: 'Light / 光' },
    { id: 'rim-light-edge',         jp: 'リムライト・エッジ',           category: 'Light / 光' },
    { id: 'bloom-warm',             jp: '暖色ブルーム',                 category: 'Light / 光' },
    { id: 'vignette-soft-ring',     jp: 'ソフトリング・ビネット',       category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-needle',    jp: '集中線・ニードル',             category: 'Lines / 線' },
    { id: 'impact-lines-arcwide',   jp: '集中線・ワイドアーク',         category: 'Lines / 線' },
    { id: 'speed-lines-sheer',      jp: 'スピード線・シア',             category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-starfall',       jp: 'スターフォール・スパークル',   category: 'Particles / 粒子' },
    { id: 'mist-softline',          jp: '淡い筋ミスト',                 category: 'Particles / 粒子' },
    { id: 'pollen-glow',            jp: '花粉グロー',                   category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'rain-sheen',             jp: '雨の膜光',                     category: 'Weather / 天候' },
    { id: 'snow-softsheet',         jp: 'やわ雪・シート',               category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-softcrease',   jp: '目の下・柔らしわ影',           category: 'VFX / その他' },
    { id: 'tone-microdots',         jp: 'トーン・極小ドット',           category: 'VFX / その他' },
    { id: 'lens-ghost-fine',        jp: 'レンズゴースト・微',           category: 'VFX / その他' }
  ];

  // ========== Presets 追加 ==========
  const presets = [
    {
      id: 'Hopeful-WarmBloom',
      label: '希望と暖色ブルーム',
      expressions: ['bright-hopeful','smile-bright','brow-arched-high','encouraging'],
      effects: ['bloom-warm','catchlight-star','vignette-soft-ring']
    },
    {
      id: 'Guarded-LockOn',
      label: '用心とロックオン視線',
      expressions: ['guarded','sharp-lock-on','press-lips-determined','brow-knit-deep'],
      effects: ['rim-light-edge','impact-lines-needle','tone-microdots']
    },
    {
      id: 'Quiet-Sad-Teary',
      label: '静かな悲しみ・涙の光',
      expressions: ['quiet-sadness','downcast-soft','teary-glisten'],
      effects: ['catchlight-tear','under-eye-softcrease','mist-softline']
    },
    {
      id: 'Uptempo-Starfall',
      label: '高揚・スターフォール',
      expressions: ['uptempo','wink-tease','soft-smirk-shy'],
      effects: ['sparkle-starfall','speed-lines-sheer','lens-ghost-fine']
    },
    {
      id: 'Steady-Noir-Ruby',
      label: 'ぶれない・ノワール紅玉',
      expressions: ['steady','glassy-eyes-ruby','press-lips-determined'],
      effects: ['vignette','rim-light-edge','pollen-glow']
    },
    {
      id: 'Drained-RainSheen',
      label: '消耗と雨の膜光',
      expressions: ['drained','moist-eyes','brow-soft-relief'],
      effects: ['rain-sheen','snow-softsheet','impact-lines-arcwide']
    }
  ];

  g.expressionEffects["part15"] = { expressions, effects, presets };
})(window);