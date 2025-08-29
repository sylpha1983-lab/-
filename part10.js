/* ============================================
   Expression + Effects Builder — part10.js (10/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part10"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions ==========
  const expressions = [
    // Eyes / 目
    { id: 'wide-eyes-shock',      jp: '目を見開く・衝撃',             category: 'Eyes / 目' },
    { id: 'rolling-eyes-irrit',   jp: '目を転がす・うんざり',          category: 'Eyes / 目' },
    { id: 'flutter-eyelids',      jp: 'まばたき・ひらひら',            category: 'Eyes / 目' },
    { id: 'gleam-star',           jp: '瞳キラリ・スター',              category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arched-pride',    jp: '誇り眉アーチ',                 category: 'Brows / 眉' },
    { id: 'brow-low-frown',       jp: 'しかめ眉・低い',               category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'open-gasp',            jp: '口あんぐり・驚き',             category: 'Mouth / 口' },
    { id: 'clenched-grit',        jp: '歯を食いしばる',               category: 'Mouth / 口' },
    { id: 'gentle-smile',         jp: '穏やか笑み',                   category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'shock-fear',           jp: '驚愕・恐れ',                   category: 'Emotion / 感情' },
    { id: 'irritated',            jp: '苛立ち',                       category: 'Emotion / 感情' },
    { id: 'calm-warmth',          jp: '落ち着いた温もり',             category: 'Emotion / 感情' },

    // State / 状態
    { id: 'tense',                jp: '緊張',                         category: 'State / 状態' },
    { id: 'relaxed',              jp: 'リラックス',                   category: 'State / 状態' },
    { id: 'bewildered',           jp: '当惑',                         category: 'State / 状態' }
  ];

  // ========== Effects ==========
  const effects = [
    // Light / 光
    { id: 'spotlight-circle',     jp: 'スポットライト・円',            category: 'Light / 光' },
    { id: 'shadow-intense',       jp: '強い影・ドラマチック',          category: 'Light / 光' },
    { id: 'glow-soft-pulse',      jp: 'ソフトパルス光',                category: 'Light / 光' },

    // Lines / 線
    { id: 'focus-burst',          jp: '集中バースト線',                category: 'Lines / 線' },
    { id: 'zigzag-tension',       jp: 'ジグザグ緊張線',                category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'spark-dust',           jp: '火花ダスト',                   category: 'Particles / 粒子' },
    { id: 'ember-float',          jp: '燃えかすフロート',              category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'gust-wind',            jp: '突風エフェクト',                category: 'Weather / 天候' },
    { id: 'heatwave-ripple',      jp: '陽炎リップル',                  category: 'Weather / 天候' },

    // VFX / その他
    { id: 'screen-shake',         jp: '画面揺れ',                      category: 'VFX / その他' },
    { id: 'distortion-warp',      jp: '歪みワープ',                    category: 'VFX / その他' },
    { id: 'color-invert-flash',   jp: '色反転フラッシュ',              category: 'VFX / その他' }
  ];

  // ========== Presets ==========
  const presets = [
    {
      id: 'Shock-Burst',
      label: '驚愕・バースト集中線',
      expressions: ['wide-eyes-shock','open-gasp','shock-fear'],
      effects: ['focus-burst','spotlight-circle','color-invert-flash']
    },
    {
      id: 'Irritation-Zigzag',
      label: '苛立ち・ジグザグ緊張線',
      expressions: ['rolling-eyes-irrit','brow-low-frown','irritated'],
      effects: ['zigzag-tension','shadow-intense','screen-shake']
    },
    {
      id: 'Calm-Glow',
      label: '穏やか・ソフトグロウ',
      expressions: ['gentle-smile','brow-arched-pride','calm-warmth'],
      effects: ['glow-soft-pulse','ember-float','heatwave-ripple']
    },
    {
      id: 'Tense-Gust',
      label: '緊張・突風',
      expressions: ['clenched-grit','tense','gleam-star'],
      effects: ['gust-wind','distortion-warp','spark-dust']
    },
    {
      id: 'Relaxed-Drift',
      label: 'リラックス・漂い',
      expressions: ['relaxed','flutter-eyelids','gentle-smile'],
      effects: ['glow-soft-pulse','ember-float','screen-shake']
    },
    {
      id: 'Bewildered-Invert',
      label: '当惑・反転フラッシュ',
      expressions: ['bewildered','wide-eyes-shock','open-gasp'],
      effects: ['color-invert-flash','focus-burst','shadow-intense']
    }
  ];

  g.expressionEffects["part10"] = { expressions, effects, presets };
})(window);