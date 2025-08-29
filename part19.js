/* ============================================
   Expression + Effects Builder — part19.js (19/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part19"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'side-eye-ember',           jp: '横目・残り火',                 category: 'Eyes / 目' },
    { id: 'half-lidded-shimmer',      jp: '半目・微きらめき',             category: 'Eyes / 目' },
    { id: 'teary-trail',              jp: '涙・つたう',                   category: 'Eyes / 目' },
    { id: 'eye-smile-tilt',           jp: '目じり笑い・かしげ',           category: 'Eyes / 目' },
    { id: 'stare-steel',              jp: '鋼の凝視',                     category: 'Eyes / 目' },
    { id: 'gaze-soft-curve',          jp: '視線・やわらカーブ',           category: 'Eyes / 目' },
    { id: 'blink-nervous',            jp: 'まばたき・そわそわ',           category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arc-softsad',         jp: 'アーチ眉・やわ悲哀',           category: 'Brows / 眉' },
    { id: 'brow-knit-focus',          jp: '眉間寄せ・集中',               category: 'Brows / 眉' },
    { id: 'brow-lift-curious',        jp: '眉上げ・好奇',                 category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'soft-smile-tremble',       jp: '柔ら笑み・小さな震え',         category: 'Mouth / 口' },
    { id: 'smile-brave',              jp: '勇気の笑み',                   category: 'Mouth / 口' },
    { id: 'pout-glance-away',         jp: 'むくれ・目をそらす',           category: 'Mouth / 口' },
    { id: 'mouth-parted-breath',      jp: '口を薄く開ける・息',           category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'resolute',                 jp: '断固',                         category: 'Emotion / 感情' },
    { id: 'gentle-sorrow',            jp: 'やさしい悲しみ',               category: 'Emotion / 感情' },
    { id: 'fond-tease',               jp: '親しみ挑発',                   category: 'Emotion / 感情' },
    { id: 'nervous-hope',             jp: '不安混じりの希望',             category: 'Emotion / 感情' },

    // State / 状態
    { id: 'quiet-breath',             jp: '静かな呼吸',                   category: 'State / 状態' },
    { id: 'poised',                   jp: '凛とした',                     category: 'State / 状態' },
    { id: 'on-edge',                  jp: '張りつめ',                     category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'edge-sheen',              jp: 'エッジの艶光',                 category: 'Light / 光' },
    { id: 'subtle-bounce',           jp: 'サブtleバウンス光',            category: 'Light / 光' },
    { id: 'rim-ember',               jp: 'リムライト・残り火',           category: 'Light / 光' },
    { id: 'volumetric-soft',         jp: 'ボリュメトリック・柔',         category: 'Light / 光' },

    // Lines / 線
    { id: 'hairline-burst',          jp: '極細バースト線',               category: 'Lines / 線' },
    { id: 'shear-speed-lines',       jp: 'シア・スピード線',             category: 'Lines / 線' },
    { id: 'orbit-focus-lines',       jp: 'オービット集中線',             category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'ember-sparks-fine',       jp: '残り火スパーク・微',           category: 'Particles / 粒子' },
    { id: 'haze-motes',              jp: 'ヘイズ粒',                     category: 'Particles / 粒子' },
    { id: 'snow-faint-drift',        jp: 'うっすら雪の漂い',             category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'sprinkle-light',          jp: 'ぱらぱら小雨',                 category: 'Weather / 天候' },
    { id: 'haze-backlit',            jp: '逆光ヘイズ',                   category: 'Weather / 天候' },

    // VFX / その他
    { id: 'soft-focus-frame',        jp: 'ソフトフォーカス枠',           category: 'VFX / その他' },
    { id: 'micro-glow-rim',          jp: 'マイクログロウ・縁',           category: 'VFX / その他' },
    { id: 'fine-grain-organic',      jp: '有機微粒子',                   category: 'VFX / その他' }
  ];

  // ========== Presets 追加（表情＋エフェクト混合） ==========
  const presets = [
    {
      id: 'Resolute-SteelGlow',
      label: '断固・鋼のグロウ',
      expressions: ['resolute','stare-steel','press-lips-determined','brow-knit-focus'],
      effects: ['edge-sheen','orbit-focus-lines','micro-glow-rim']
    },
    {
      id: 'GentleSorrow-SnowVeil',
      label: 'やさしい悲しみ・雪のヴェール',
      expressions: ['gentle-sorrow','brow-arc-softsad','soft-smile-tremble','teary-trail'],
      effects: ['snow-faint-drift','volumetric-soft','soft-focus-frame']
    },
    {
      id: 'FondTease-EmberRim',
      label: '親しみ挑発・残り火リム',
      expressions: ['fond-tease','side-eye-ember','smile-brave','eye-smile-tilt'],
      effects: ['rim-ember','ember-sparks-fine','hairline-burst']
    },
    {
      id: 'NervousHope-HazeBack',
      label: '不安まじりの希望・逆光ヘイズ',
      expressions: ['nervous-hope','gaze-soft-curve','mouth-parted-breath','blink-nervous'],
      effects: ['haze-backlit','haze-motes','subtle-bounce']
    },
    {
      id: 'Poised-QuietBreath',
      label: '凛と・静かな呼吸',
      expressions: ['poised','quiet-breath','brow-lift-curious'],
      effects: ['volumetric-soft','fine-grain-organic','micro-glow-rim']
    },
    {
      id: 'OnEdge-Sprinkle',
      label: '張りつめ・ぱらぱら小雨',
      expressions: ['on-edge','brow-knit-focus','pout-glance-away'],
      effects: ['sprinkle-light','shear-speed-lines','soft-focus-frame']
    }
  ];

  g.expressionEffects["part19"] = { expressions, effects, presets };
})(window);