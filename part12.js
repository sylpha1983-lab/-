/* ============================================
   Expression + Effects Builder — part12.js (12/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part12"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions ==========
  const expressions = [
    // Eyes / 目
    { id: 'wide-eyed-wonder',    jp: '目を大きく開く・驚き',    category: 'Eyes / 目' },
    { id: 'narrow-skeptical',    jp: '細目・疑い',              category: 'Eyes / 目' },
    { id: 'gaze-down-soft',      jp: '伏し目がち・やわら',      category: 'Eyes / 目' },
    { id: 'fluttering-eyes',     jp: 'まばたき・小刻み',        category: 'Eyes / 目' },
    { id: 'side-glance-shy',     jp: '横目・はにかみ',          category: 'Eyes / 目' },
    { id: 'tears-brim',          jp: '涙目・たまり',            category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'arched-curious',      jp: '好奇心の弓眉',            category: 'Brows / 眉' },
    { id: 'angled-intense',      jp: '鋭角的な強眉',            category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'soft-open',           jp: '口を少し開ける・やわら', category: 'Mouth / 口' },
    { id: 'downturned-sad',      jp: '口角下げ・悲しみ',        category: 'Mouth / 口' },
    { id: 'half-smile',          jp: '片側の微笑み',            category: 'Mouth / 口' },
    { id: 'grimace',             jp: 'しかめっ面',              category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'playful',             jp: '遊び心',                  category: 'Emotion / 感情' },
    { id: 'tense',               jp: '緊張',                    category: 'Emotion / 感情' },
    { id: 'vulnerable',          jp: '弱さ',                    category: 'Emotion / 感情' },
    { id: 'determined',          jp: '決意',                    category: 'Emotion / 感情' },

    // State / 状態
    { id: 'fatigued',            jp: '疲れ',                    category: 'State / 状態' },
    { id: 'energized',           jp: '活力',                    category: 'State / 状態' },
    { id: 'lost-in-thought',     jp: '考え込み',                category: 'State / 状態' },
    { id: 'serene',              jp: '穏やか',                  category: 'State / 状態' }
  ];

  // ========== Effects ==========
  const effects = [
    // Light / 光
    { id: 'halo-soft',           jp: 'やわらかハロー光',        category: 'Light / 光' },
    { id: 'spotlight-circle',    jp: '円形スポットライト',      category: 'Light / 光' },
    { id: 'glimmer',             jp: 'きらめき',                category: 'Light / 光' },
    { id: 'sunbeam-rays',        jp: 'サンビーム光線',          category: 'Light / 光' },

    // Lines / 線
    { id: 'scribble-lines',      jp: '落書き風線',              category: 'Lines / 線' },
    { id: 'jagged-stress',       jp: 'ギザギザ・ストレス線',    category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'petal-fall',          jp: '花びら・ひらひら',        category: 'Particles / 粒子' },
    { id: 'glow-orbs',           jp: '光るオーブ',              category: 'Particles / 粒子' },
    { id: 'ash-particles',       jp: '灰の粒子',                category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'snow-flakes',         jp: '雪・ひらひら',            category: 'Weather / 天候' },
    { id: 'storm-flash',         jp: '嵐の稲光',                category: 'Weather / 天候' },

    // VFX / その他
    { id: 'soft-haze',           jp: '柔らかい霞',              category: 'VFX / その他' },
    { id: 'ink-smudge',          jp: 'インク汚れ風',            category: 'VFX / その他' },
    { id: 'glitch-frag',         jp: 'グリッチ断片',            category: 'VFX / その他' }
  ];

  // ========== Presets ==========
  const presets = [
    {
      id: 'Curious-Sparkle',
      label: '好奇のきらめき',
      expressions: ['wide-eyed-wonder','arched-curious','soft-open'],
      effects: ['glimmer','spotlight-circle','sparkle-thread']
    },
    {
      id: 'Shy-PetalFall',
      label: '恥じらいと花びら',
      expressions: ['side-glance-shy','half-smile','playful'],
      effects: ['petal-fall','halo-soft','soft-haze']
    },
    {
      id: 'Tense-StormFlash',
      label: '緊張と稲光',
      expressions: ['tense','grimace','narrow-skeptical'],
      effects: ['storm-flash','jagged-stress','glitch-frag']
    },
    {
      id: 'Vulnerable-SnowSerene',
      label: '弱さと雪・穏やかさ',
      expressions: ['vulnerable','downturned-sad','serene'],
      effects: ['snow-flakes','soft-haze','glow-orbs']
    },
    {
      id: 'Determined-Sunbeam',
      label: '決意とサンビーム',
      expressions: ['determined','angled-intense','soft-open'],
      effects: ['sunbeam-rays','glimmer','ink-smudge']
    },
    {
      id: 'Fatigued-Ash',
      label: '疲れと灰',
      expressions: ['fatigued','lost-in-thought','gaze-down-soft'],
      effects: ['ash-particles','scribble-lines','halo-soft']
    }
  ];

  g.expressionEffects["part12"] = { expressions, effects, presets };
})(window);