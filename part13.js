/* ============================================
   Expression + Effects Builder — part13.js (13/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part13"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'sidelook-curious',      jp: '横目・好奇',                 category: 'Eyes / 目' },
    { id: 'sidelook-guilty',       jp: '横目・ばつが悪い',           category: 'Eyes / 目' },
    { id: 'eyelids-heavy',         jp: 'まぶた重め',                 category: 'Eyes / 目' },
    { id: 'half-lidded-mellow',    jp: '半目・まろやか',             category: 'Eyes / 目' },
    { id: 'glassy-eyes-teal',      jp: 'うるみ瞳・ティール',         category: 'Eyes / 目' },
    { id: 'teary-blur',            jp: '涙でにじむ',                 category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-pinched',          jp: '眉つまむように寄せる',       category: 'Brows / 眉' },
    { id: 'brow-soft-uplift',      jp: '眉・やわら上げ',             category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-subtle',          jp: 'さりげない笑み',             category: 'Mouth / 口' },
    { id: 'smile-corner-up',       jp: '口角だけ上げる',             category: 'Mouth / 口' },
    { id: 'pout-tilt',             jp: 'むくれ・かしげ',             category: 'Mouth / 口' },
    { id: 'lip-parted-soft',       jp: '薄く開いた唇・そっと',       category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'fond-smug',             jp: '親愛＋どや',                 category: 'Emotion / 感情' },
    { id: 'gentle-tease',          jp: 'やさしい挑発',               category: 'Emotion / 感情' },
    { id: 'wistful-soft',          jp: 'やわ物思い',                 category: 'Emotion / 感情' },
    { id: 'bittersweet',           jp: 'ほろ苦い',                   category: 'Emotion / 感情' },

    // State / 状態
    { id: 'breathless',            jp: '息をのむ',                   category: 'State / 状態' },
    { id: 'tranquil',              jp: '静謐',                       category: 'State / 状態' },
    { id: 'pensive',               jp: '沈思',                       category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'edge-light-soft',       jp: 'エッジライト・柔',           category: 'Light / 光' },
    { id: 'inner-glow',            jp: 'インナーグロウ',             category: 'Light / 光' },
    { id: 'subsurface-warm',       jp: 'サブサーフェス・温',         category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-silk',     jp: '集中線・シルク',             category: 'Lines / 線' },
    { id: 'speed-lines-whisper',   jp: 'スピード線・ウィスパー',     category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'floating-motes',        jp: '浮遊モート',                 category: 'Particles / 粒子' },
    { id: 'soft-spark-drift',      jp: '柔ら火花の漂い',             category: 'Particles / 粒子' },
    { id: 'pollen-sheen',          jp: '花粉シーン',                 category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'dew-humidity',          jp: '朝露・湿り',                 category: 'Weather / 天候' },
    { id: 'thin-mist',             jp: '薄もや',                     category: 'Weather / 天候' },

    // VFX / その他
    { id: 'tone-soft-grid',        jp: 'トーン・ソフト格子',         category: 'VFX / その他' },
    { id: 'bloom-ring-micro',      jp: 'リングブルーム・微',         category: 'VFX / その他' },
    { id: 'chromatic-soft',        jp: '色収差・弱',                 category: 'VFX / その他' }
  ];

  // ========== Presets 追加 ==========
  const presets = [
    {
      id: 'Bittersweet-Teal-Mist',
      label: 'ほろ苦・ティールの薄もや',
      expressions: ['bittersweet','glassy-eyes-teal','smile-subtle','brow-soft-uplift'],
      effects: ['thin-mist','edge-light-soft','floating-motes']
    },
    {
      id: 'Guilty-Blur-Whisper',
      label: 'ばつの悪さ・涙にじみ・囁き線',
      expressions: ['sidelook-guilty','teary-blur','lip-parted-soft'],
      effects: ['speed-lines-whisper','inner-glow','pollen-sheen']
    },
    {
      id: 'Curious-EdgeSpark',
      label: '好奇・エッジスパーク',
      expressions: ['sidelook-curious','smile-corner-up','fond-smug'],
      effects: ['soft-spark-drift','edge-light-soft','tone-soft-grid']
    },
    {
      id: 'Mellow-Tranquil',
      label: 'まろやか・静謐',
      expressions: ['half-lidded-mellow','tranquil','smile-subtle'],
      effects: ['subsurface-warm','impact-lines-silk','bloom-ring-micro']
    },
    {
      id: 'Breathless-Dew',
      label: '息をのむ・朝露',
      expressions: ['breathless','eyelids-heavy','gentle-tease'],
      effects: ['dew-humidity','chromatic-soft','inner-glow']
    },
    {
      id: 'Pensive-SoftGrid',
      label: '沈思・ソフト格子',
      expressions: ['pensive','wistful-soft','pout-tilt'],
      effects: ['tone-soft-grid','floating-motes','edge-light-soft']
    }
  ];

  g.expressionEffects["part13"] = { expressions, effects, presets };
})(window);