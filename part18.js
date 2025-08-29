/* ============================================
   Expression + Effects Builder — part18.js (18/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part18"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'side-eye-glow',        jp: '横目・微光',                   category: 'Eyes / 目' },
    { id: 'soft-squint',          jp: 'やわら細目',                   category: 'Eyes / 目' },
    { id: 'half-lidded-smile',    jp: '半目・微笑み',                 category: 'Eyes / 目' },
    { id: 'teary-overflow',       jp: '涙あふれ',                     category: 'Eyes / 目' },
    { id: 'glassy-eyes-sapphire', jp: 'うるみ瞳・サファイア',         category: 'Eyes / 目' },
    { id: 'gaze-tilt-up',         jp: '視線・上にかしげ',             category: 'Eyes / 目' },
    { id: 'blink-quick',          jp: '素早い瞬き',                   category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-soft-plead',      jp: '眉・お願い気味',               category: 'Brows / 眉' },
    { id: 'brow-sharp-focus',     jp: '眉・鋭い集中',                 category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-shy-closed',     jp: 'はにかみ笑み・口閉じ',         category: 'Mouth / 口' },
    { id: 'mouth-open-soft',      jp: '口開き・そっと',               category: 'Mouth / 口' },
    { id: 'lip-tremble',          jp: '唇・震え',                     category: 'Mouth / 口' },
    { id: 'pout-tiny',            jp: '小さなむくれ',                 category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'tenderness',           jp: 'やさしさ',                     category: 'Emotion / 感情' },
    { id: 'frustrated-cute',      jp: 'もどかしキュート',             category: 'Emotion / 感情' },
    { id: 'radiant-joy',          jp: '輝く喜び',                     category: 'Emotion / 感情' },
    { id: 'melancholy-soft',      jp: 'やわ憂い',                     category: 'Emotion / 感情' },

    // State / 状態
    { id: 'breathing-steady',     jp: '呼吸・穏やか',                 category: 'State / 状態' },
    { id: 'fluttery',             jp: '胸が高鳴る',                   category: 'State / 状態' },
    { id: 'stillness',            jp: '静止',                         category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'eyelight-softbar',     jp: 'アイライト・ソフトバー',        category: 'Light / 光' },
    { id: 'kiss-light',           jp: 'キスライト（頬狙い）',          category: 'Light / 光' },
    { id: 'halo-ring-thin',       jp: '薄いリングハロー',              category: 'Light / 光' },
    { id: 'backglow-warm',        jp: '背面グロー・暖',                category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-spark-lines',   jp: '火花集中線',                    category: 'Lines / 線' },
    { id: 'wave-lines-soft',      jp: '波紋線・柔',                    category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'glimmer-dust',         jp: '微光ダスト',                    category: 'Particles / 粒子' },
    { id: 'soft-spark-points',    jp: '柔スパーク点',                  category: 'Particles / 粒子' },
    { id: 'petal-swirls',         jp: '花びらスワール',                category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'mist-ribbon',          jp: 'リボン状の霧',                  category: 'Weather / 天候' },
    { id: 'spark-rain',           jp: 'きら雨',                        category: 'Weather / 天候' },

    // VFX / その他
    { id: 'tone-softgrain',       jp: 'ソフト粒状トーン',              category: 'VFX / その他' },
    { id: 'soft-chromatic',       jp: '弱色収差',                      category: 'VFX / その他' },
    { id: 'narrative-frame',      jp: '物語フレーム',                  category: 'VFX / その他' }
  ];

  // ========== Presets 追加（表情＋エフェクト混合） ==========
  const presets = [
    {
      id: 'Tender-KissLight',
      label: 'やさしさ・キスライト',
      expressions: ['tenderness','smile-shy-closed','half-lidded-smile','brow-soft-plead'],
      effects: ['kiss-light','eyelight-softbar','glimmer-dust']
    },
    {
      id: 'Overflow-Teary-Ring',
      label: '涙あふれ・薄リング',
      expressions: ['teary-overflow','lip-tremble','soft-squint'],
      effects: ['halo-ring-thin','soft-chromatic','tone-softgrain']
    },
    {
      id: 'Radiant-Backglow',
      label: '輝く喜び・背面グロー',
      expressions: ['radiant-joy','smile-shy-closed','gaze-tilt-up'],
      effects: ['backglow-warm','soft-spark-points','impact-spark-lines']
    },
    {
      id: 'SoftMelancholy-MistRibbon',
      label: 'やわ憂い・霧のリボン',
      expressions: ['melancholy-soft','downcast-soft','pout-tiny'],
      effects: ['mist-ribbon','wave-lines-soft','narrative-frame']
    },
    {
      id: 'Fluttery-PetalSwirls',
      label: '高鳴り・花びらスワール',
      expressions: ['fluttery','side-eye-glow','mouth-open-soft'],
      effects: ['petal-swirls','eyelight-softbar','glimmer-dust']
    },
    {
      id: 'Stillness-SparkRain',
      label: '静止・きら雨',
      expressions: ['stillness','brow-sharp-focus','glassy-eyes-sapphire'],
      effects: ['spark-rain','halo-ring-thin','soft-chromatic']
    }
  ];

  g.expressionEffects["part18"] = { expressions, effects, presets };
})(window);