/* ============================================
   Expression + Effects Builder — part21.js (21/40)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part21"] = {expressions,effects,presets}
   テーマ：ハート系エフェクト＋対応表情
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions（表情） =====
  const expressions = [
    { id: 'eyes-heartshine',      jp: '瞳にハートのきらめき',      category: 'Eyes / 目' },
    { id: 'blush-soft-heart',     jp: 'ほんのり頬染め・ハート',      category: 'Emotion / 感情' },
    { id: 'smile-sweet-heart',    jp: 'スウィートスマイル・ハート',  category: 'Mouth / 口' },
    { id: 'wink-heart-tease',     jp: 'ウィンク・ハート小悪魔',      category: 'Eyes / 目' },
    { id: 'gaze-loving-soft',     jp: '優しい愛情のまなざし',        category: 'Emotion / 感情' },
    { id: 'shy-tilt-heart',       jp: '照れ顔・首かしげ(ハート)',     category: 'Emotion / 感情' }
  ];

  // ===== Effects（エフェクト） =====
  const effects = [
    { id: 'heart-glow',           jp: 'ハートグロー',                category: 'Particles / 粒子' },
    { id: 'heart-bokeh',          jp: 'ハートボケ',                  category: 'VFX / その他' },
    { id: 'heart-sparkles',       jp: 'ハートスパークル',            category: 'Particles / 粒子' },
    { id: 'heart-petals',         jp: '舞うハート花弁',              category: 'Particles / 粒子' },
    { id: 'heart-trail',          jp: 'ハートの軌跡',                category: 'Lines / 線' },
    { id: 'kisslight-heart',      jp: 'キスライト（ハート反射）',     category: 'Light / 光' }
  ];

  // ===== Presets（混合セット） =====
  const presets = [
    {
      id: 'HeartSoft-Sweet',
      label: 'ハート・やわ甘スウィート',
      expressions: ['smile-sweet-heart','blush-soft-heart','gaze-loving-soft'],
      effects: ['heart-glow','heart-bokeh','kisslight-heart']
    },
    {
      id: 'HeartSparkle-Tease',
      label: 'ハート・スパークル小悪魔',
      expressions: ['wink-heart-tease','eyes-heartshine','shy-tilt-heart'],
      effects: ['heart-sparkles','heart-trail']
    },
    {
      id: 'HeartPetals-Serene',
      label: '舞うハート花弁・穏やか',
      expressions: ['gaze-loving-soft','blush-soft-heart'],
      effects: ['heart-petals','heart-glow']
    },
    {
      id: 'HeartBokeh-Portrait',
      label: 'ハートボケ・ポートレート',
      expressions: ['smile-sweet-heart','eyes-heartshine'],
      effects: ['heart-bokeh','kisslight-heart']
    },
    {
      id: 'HeartTrail-Dynamic',
      label: 'ハート軌跡・ダイナミック',
      expressions: ['wink-heart-tease','smile-sweet-heart'],
      effects: ['heart-trail','heart-sparkles']
    }
  ];

  g.expressionEffects["part21"] = { expressions, effects, presets };
})(window);