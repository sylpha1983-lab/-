/* ============================================
   Expression + Effects Builder — part14.js (14/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part14"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'starlit-eyes',          jp: '星の瞳',                     category: 'Eyes / 目' },
    { id: 'shadowed-eyes',         jp: '影落ち瞳',                   category: 'Eyes / 目' },
    { id: 'flutter-blink',         jp: 'ぱちぱちまばたき',           category: 'Eyes / 目' },
    { id: 'wide-glisten',          jp: '見開き・きらめき',           category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-elegant-arch',     jp: '眉・優美な弧',               category: 'Brows / 眉' },
    { id: 'brow-pressed-flat',     jp: '眉・押しつぶし',             category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smirk-playful',         jp: 'いたずらっぽいニヤリ',       category: 'Mouth / 口' },
    { id: 'grit-teeth',            jp: '歯を食いしばる',             category: 'Mouth / 口' },
    { id: 'open-shock',            jp: '驚き・口開き',               category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'exuberant',             jp: '快活',                       category: 'Emotion / 感情' },
    { id: 'sorrow-deep',           jp: '深い悲哀',                   category: 'Emotion / 感情' },
    { id: 'awe-struck',            jp: '畏怖',                       category: 'Emotion / 感情' },
    { id: 'bashful-soft',          jp: 'はにかみ・やわらか',         category: 'Emotion / 感情' },

    // State / 状態
    { id: 'anticipation',          jp: '期待感',                     category: 'State / 状態' },
    { id: 'haunted',               jp: '取り憑かれたよう',           category: 'State / 状態' },
    { id: 'lighthearted',          jp: '軽やか',                     category: 'State / 状態' },
    { id: 'wistful-glance',        jp: '物思いの視線',               category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'moonbeam',              jp: '月光',                       category: 'Light / 光' },
    { id: 'starlight-dust',        jp: '星屑の光',                   category: 'Light / 光' },
    { id: 'neon-glow',             jp: 'ネオングロー',               category: 'Light / 光' },

    // Lines / 線
    { id: 'spiral-focus',          jp: '螺旋集中線',                 category: 'Lines / 線' },
    { id: 'burst-lines',           jp: '爆発線',                     category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'ember-drifts',          jp: '燃え残りの粒',               category: 'Particles / 粒子' },
    { id: 'stardust-sparkle',      jp: 'スターダストきらめき',       category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'drizzle-soft',          jp: 'やわらか小雨',               category: 'Weather / 天候' },
    { id: 'haze-light',            jp: '淡い霞',                     category: 'Weather / 天候' },

    // VFX / その他
    { id: 'lensflare-thin',        jp: 'レンズフレア・細',           category: 'VFX / その他' },
    { id: 'dream-filter',          jp: 'ドリームフィルター',         category: 'VFX / その他' },
    { id: 'fractured-glass',       jp: '割れガラス効果',             category: 'VFX / その他' }
  ];

  // ========== Presets 追加 ==========
  const presets = [
    {
      id: 'Exuberant-Starlight',
      label: '快活・星屑きらめき',
      expressions: ['exuberant','starlit-eyes','smirk-playful'],
      effects: ['stardust-sparkle','starlight-dust','spiral-focus']
    },
    {
      id: 'Sorrow-Moonbeam',
      label: '悲哀・月光',
      expressions: ['sorrow-deep','shadowed-eyes','grit-teeth'],
      effects: ['moonbeam','haze-light','ember-drifts']
    },
    {
      id: 'Awe-Fracture',
      label: '畏怖・割れガラス',
      expressions: ['awe-struck','wide-glisten','brow-elegant-arch'],
      effects: ['fractured-glass','burst-lines','neon-glow']
    },
    {
      id: 'Bashful-Dream',
      label: 'はにかみ・夢フィルター',
      expressions: ['bashful-soft','flutter-blink','lighthearted'],
      effects: ['dream-filter','drizzle-soft','lensflare-thin']
    },
    {
      id: 'Haunted-Ember',
      label: '取り憑かれ・残り火',
      expressions: ['haunted','anticipation','open-shock'],
      effects: ['ember-drifts','neon-glow','spiral-focus']
    },
    {
      id: 'Wistful-SoftHaze',
      label: '物思い・霞',
      expressions: ['wistful-glance','brow-pressed-flat','smile-corner-up'],
      effects: ['haze-light','moonbeam','starlight-dust']
    }
  ];

  g.expressionEffects["part14"] = { expressions, effects, presets };
})(window);