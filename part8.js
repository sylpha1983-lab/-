/* ============================================
   Expression + Effects Builder — part8.js (8/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part8"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes
    { id: 'wide-eyes-dazzle',    jp: '目ぱっちり・まぶしい',     category: 'Eyes / 目' },
    { id: 'narrow-eyes-sneaky',  jp: '目細め・いたずら',         category: 'Eyes / 目' },
    { id: 'glimmer-eyes-soft',   jp: '瞳きらめき・そっと',       category: 'Eyes / 目' },
    { id: 'drowsy-eyes',         jp: 'うとうと目',               category: 'Eyes / 目' },

    // Brows
    { id: 'brow-arched-elegant', jp: '眉アーチ・エレガント',     category: 'Brows / 眉' },
    { id: 'brow-sharp-intense',  jp: '鋭い眉・集中',             category: 'Brows / 眉' },

    // Mouth
    { id: 'smile-shy-twist',     jp: 'はにかみ口元・ひねり',     category: 'Mouth / 口' },
    { id: 'mouth-open-gasp',     jp: '口あんぐり・驚き',         category: 'Mouth / 口' },
    { id: 'lip-bite-anxious',    jp: '唇噛み・不安',             category: 'Mouth / 口' },

    // Emotion
    { id: 'euphoric',            jp: '多幸感',                   category: 'Emotion / 感情' },
    { id: 'wistful',             jp: '物思い',                   category: 'Emotion / 感情' },
    { id: 'overjoyed',           jp: '大喜び',                   category: 'Emotion / 感情' },

    // State
    { id: 'bashful',             jp: 'てれてれ',                 category: 'State / 状態' },
    { id: 'lost-in-thought',     jp: '考え込み',                 category: 'State / 状態' },
    { id: 'radiant',             jp: '輝きに包まれる',           category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light
    { id: 'halo-glow',           jp: '光輪グロー',               category: 'Light / 光' },
    { id: 'backlight-dusk',      jp: '逆光・夕暮れ',             category: 'Light / 光' },
    { id: 'sunbeam-ray',         jp: 'サンビーム光線',           category: 'Light / 光' },

    // Lines
    { id: 'shock-lines-burst',   jp: '驚き線・バースト',         category: 'Lines / 線' },
    { id: 'motion-arc',          jp: 'モーション弧線',           category: 'Lines / 線' },

    // Particles
    { id: 'petal-fall',          jp: '花びら舞い',               category: 'Particles / 粒子' },
    { id: 'ember-glow',          jp: '火の粉グロー',             category: 'Particles / 粒子' },
    { id: 'bubble-rise',         jp: '泡上昇',                   category: 'Particles / 粒子' },

    // Weather
    { id: 'snow-shimmer',        jp: '雪ちらちら・きらめき',     category: 'Weather / 天候' },
    { id: 'heat-haze',           jp: '陽炎',                     category: 'Weather / 天候' },

    // VFX
    { id: 'screen-tone-hatch',   jp: 'スクリーントーン・ハッチ', category: 'VFX / その他' },
    { id: 'dream-blur',          jp: 'ドリームブラー',           category: 'VFX / その他' }
  ];

  // ========== Presets ==========
  const presets = [
    {
      id: 'Dazzle-Radiant-Sunbeam',
      label: '輝きのまぶしいサンビーム',
      expressions: ['wide-eyes-dazzle','radiant','smile-shy-twist'],
      effects: ['sunbeam-ray','halo-glow','petal-fall']
    },
    {
      id: 'Sneaky-Ember-Gleam',
      label: 'いたずら・火の粉グリーム',
      expressions: ['narrow-eyes-sneaky','brow-sharp-intense','smile-shy-twist'],
      effects: ['ember-glow','motion-arc','backlight-dusk']
    },
    {
      id: 'Wistful-Snow-Dream',
      label: '物思い雪夢',
      expressions: ['wistful','lost-in-thought','lip-bite-anxious'],
      effects: ['snow-shimmer','dream-blur','screen-tone-hatch']
    },
    {
      id: 'Overjoyed-Bubbles',
      label: '大喜びバブル',
      expressions: ['overjoyed','smile-shy-twist','brow-arched-elegant'],
      effects: ['bubble-rise','halo-glow','shock-lines-burst']
    },
    {
      id: 'Euphoric-Petals',
      label: '多幸花びら',
      expressions: ['euphoric','glimmer-eyes-soft','mouth-open-gasp'],
      effects: ['petal-fall','sunbeam-ray','dream-blur']
    }
  ];

  g.expressionEffects["part8"] = { expressions, effects, presets };
})(window);