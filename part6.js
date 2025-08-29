/* ============================================
   Expression + Effects Builder — part6.js (6/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part6"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目（バリエーション強化）
    { id: 'side-eye-velvet-plus',   jp: '横目・ベルベット＋',        category: 'Eyes / 目' },
    { id: 'side-eye-razor-plus',    jp: '横目・レイザー＋',          category: 'Eyes / 目' },
    { id: 'half-lidded-serene',     jp: '半目・静',                  category: 'Eyes / 目' },
    { id: 'half-lidded-hazy-plus',  jp: '半目・霞み＋',              category: 'Eyes / 目' },
    { id: 'upward-glance-bold',     jp: '上目遣い・大胆',            category: 'Eyes / 目' },
    { id: 'glassy-eyes-golden',     jp: 'うるみ瞳・ゴールド',        category: 'Eyes / 目' },
    { id: 'glassy-eyes-dew',        jp: 'うるみ瞳・露滴',            category: 'Eyes / 目' },
    { id: 'teary-tilt',             jp: '涙目・かしげ',              category: 'Eyes / 目' },

    // Brows / 眉（表情補助）
    { id: 'brow-raise-doubt',       jp: '片眉上げ・疑念',            category: 'Brows / 眉' },
    { id: 'brow-soft-concern',      jp: '柔ら眉・心配',              category: 'Brows / 眉' },

    // Mouth / 口（細分化）
    { id: 'smile-soft-closed',      jp: '柔ら微笑み・口閉じ',        category: 'Mouth / 口' },
    { id: 'smile-wide-open',        jp: '笑み・口開き',              category: 'Mouth / 口' },
    { id: 'pout-soft-mini',         jp: 'むくれ・ミニ',              category: 'Mouth / 口' },
    { id: 'grin-tilt',              jp: 'にやり・かしげ',            category: 'Mouth / 口' },

    // Emotion / 感情（追加）
    { id: 'calm-proud',             jp: '静かな誇り',                category: 'Emotion / 感情' },
    { id: 'touched',                jp: 'じーん',                    category: 'Emotion / 感情' },
    { id: 'playful',                jp: 'おどけ',                    category: 'Emotion / 感情' },

    // State / 状態（追加）
    { id: 'composed',               jp: '平静',                      category: 'State / 状態' },
    { id: 'flutter',                jp: 'そわそわ',                  category: 'State / 状態' },
    { id: 'entranced',              jp: 'うっとり',                  category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光（派生）
    { id: 'rim-light-crown-plus',   jp: 'リムライト・クラウン＋',      category: 'Light / 光' },
    { id: 'rim-light-split-soft',   jp: '分割リムライト・ソフト',      category: 'Light / 光' },
    { id: 'face-gloss-micro-plus',  jp: '顔ハイライト・微＋',          category: 'Light / 光' },
    { id: 'bloom-dreamy-pro',       jp: 'ドリーミー・ブルームPro',     category: 'Light / 光' },
    { id: 'vignette-feather-oval',  jp: 'フェザー・ビネット楕円',      category: 'Light / 光' },

    // Lines / 線（派生）
    { id: 'impact-lines-heavy',     jp: '集中線・ヘビー',              category: 'Lines / 線' },
    { id: 'impact-lines-spiral',    jp: '集中線・スパイラル',          category: 'Lines / 線' },
    { id: 'speed-lines-rush',       jp: 'スピード線・ラッシュ',        category: 'Lines / 線' },

    // Particles / 粒子（派生）
    { id: 'sparkle-dense-ring',     jp: '高密度スパークル・リング',    category: 'Particles / 粒子' },
    { id: 'sparkle-filament-ring',  jp: 'フィラメント・リング',        category: 'Particles / 粒子' },
    { id: 'soft-dust-haze',         jp: 'ソフトダスト・霞',            category: 'Particles / 粒子' },
    { id: 'bokeh-rain',             jp: 'ボケ雨',                      category: 'Particles / 粒子' },

    // Weather / 天候（派生）
    { id: 'drizzle-sheer',          jp: '薄衣の霧雨',                  category: 'Weather / 天候' },
    { id: 'snow-sparkle-plus',      jp: '雪スパークル＋',              category: 'Weather / 天候' },

    // VFX / その他（派生）
    { id: 'under-eye-soft-veil',    jp: '目の下・薄ヴェール',          category: 'VFX / その他' },
    { id: 'screen-tone-fine-plus',  jp: 'スクリーントーン・細＋',      category: 'VFX / その他' },
    { id: 'lens-ghost-mild',        jp: 'レンズゴースト・軽',          category: 'VFX / その他' }
  ];

  // ========== Presets 追加（混合セット） ==========
  const presets = [
    {
      id: 'Golden-Glassy-Proud',
      label: '金のうるみ・静かな誇り',
      expressions: ['glassy-eyes-golden','calm-proud','smile-soft-closed'],
      effects: ['face-gloss-micro-plus','vignette-feather-oval','sparkle-dense-ring']
    },
    {
      id: 'Velvet-Jealous-Plus',
      label: 'ベルベット嫉妬＋',
      expressions: ['side-eye-velvet-plus','pout-soft-mini','brow-raise-doubt'],
      effects: ['rim-light-crown-plus','soft-dust-haze','bloom-dreamy-pro']
    },
    {
      id: 'Bold-Glance-Ring',
      label: '大胆上目遣い・リング光',
      expressions: ['upward-glance-bold','grin-tilt','playful'],
      effects: ['sparkle-filament-ring','rim-light-split-soft','impact-lines-spiral']
    },
    {
      id: 'Touched-Teary-Feather',
      label: 'じーん・涙と羽根',
      expressions: ['touched','teary-tilt','half-lidded-serene'],
      effects: ['vignette-feather-oval','soft-dust-haze','bokeh-rain']
    },
    {
      id: 'Composed-Noir-Pro',
      label: '平静ノワールPro',
      expressions: ['composed','side-eye-razor-plus','smile-soft-closed'],
      effects: ['impact-lines-heavy','vignette','face-gloss']
    },
    {
      id: 'Flutter-Dreamy',
      label: 'そわそわ・ドリーミー',
      expressions: ['flutter','half-lidded-hazy-plus','smile-wide-open'],
      effects: ['bloom-dreamy-pro','sparkle-dense-ring','lens-ghost-mild']
    }
  ];

  g.expressionEffects["part6"] = { expressions, effects, presets };
})(window);