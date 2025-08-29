/* ============================================
   Expression + Effects Builder — part3.js (3/20)
   置き方：builder_main.html と同じフォルダに保存
   仕様：window.expressionEffects["part3"] に {expressions,effects,presets} を格納
   備考：id=英語タグ（出力用）／jp=日本語表示
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目（派生）
    { id: 'side-eye-velvet',     jp: '横目・ベルベット',       category: 'Eyes / 目' },
    { id: 'side-eye-tender',     jp: '横目・やさしめ',         category: 'Eyes / 目' },
    { id: 'half-lidded-hazy',    jp: '半目・霞み',             category: 'Eyes / 目' },
    { id: 'half-lidded-bored',   jp: '半目・退屈',             category: 'Eyes / 目' },
    { id: 'upward-glance-innocent', jp: '上目遣い・無垢',      category: 'Eyes / 目' },
    { id: 'glassy-eyes-amber',   jp: 'うるみ瞳・琥珀',         category: 'Eyes / 目' },
    { id: 'glassy-eyes-amethyst',jp: 'うるみ瞳・アメシスト',   category: 'Eyes / 目' },
    { id: 'teary-wide',          jp: '涙目・見開き',           category: 'Eyes / 目' },

    // Brows / 眉（派生）
    { id: 'arched-brow-elegant', jp: 'アーチ眉・上品',         category: 'Brows / 眉' },
    { id: 'flat-brow-serious',   jp: 'フラット眉・真面目',     category: 'Brows / 眉' },

    // Mouth / 口（派生）
    { id: 'soft-smile',          jp: 'やわらかな微笑み',       category: 'Mouth / 口' },
    { id: 'closed-smile',        jp: '口を閉じた微笑み',       category: 'Mouth / 口' },
    { id: 'bit-lip-soft',        jp: '噛みしめ唇・そっと',     category: 'Mouth / 口' },
    { id: 'awkward-smile-soft',  jp: '気まずい笑み・控えめ',   category: 'Mouth / 口' },

    // Emotion / 感情（派生）
    { id: 'melancholy',          jp: 'うつろ',                 category: 'Emotion / 感情' },
    { id: 'relieved',            jp: 'ほっとした',             category: 'Emotion / 感情' },
    { id: 'hopeful',             jp: '希望',                   category: 'Emotion / 感情' },
    { id: 'mischievous',         jp: 'いたずら心',             category: 'Emotion / 感情' },

    // State / 状態（派生）
    { id: 'calm',                jp: '落ち着き',               category: 'State / 状態' },
    { id: 'tense',               jp: '張りつめ',               category: 'State / 状態' },
    { id: 'dazed',               jp: 'ぼんやり',               category: 'State / 状態' },
    { id: 'flustered',           jp: 'あたふた',               category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-crown',     jp: 'リムライト・クラウン',   category: 'Light / 光' },
    { id: 'face-gloss-ring',     jp: '顔ハイライト・光輪',     category: 'Light / 光' },
    { id: 'bloom-dreamy-plus',   jp: 'ドリーミー・ブルーム＋', category: 'Light / 光' },
    { id: 'vignette-feather',    jp: 'フェザー・ビネット',     category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-flare',  jp: '集中線・フレア',         category: 'Lines / 線' },
    { id: 'impact-lines-taper',  jp: '集中線・テーパー',       category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-filament',    jp: 'スパークル・フィラメント', category: 'Particles / 粒子' },
    { id: 'sparkle-dust-fine',   jp: '微細ダスト・スパーク',   category: 'Particles / 粒子' },
    { id: 'film-grain-classic',  jp: 'フィルム粒子・クラシック', category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'mist',                jp: 'もや',                   category: 'Weather / 天候' },
    { id: 'light-snow',          jp: '小雪',                   category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-ribbon-shadow', jp: '目の下・リボン影',   category: 'VFX / その他' },
    { id: 'soft-ghost-lens',     jp: 'ソフト・レンズゴースト', category: 'VFX / その他' }
  ];

  // ========== Presets 追加（混合セット） ==========
  const presets = [
    {
      id: 'Velvet-Jealous-Pout',
      label: 'ベルベット嫉妬むくれ',
      expressions: ['jealous','pout','side-eye-velvet'],
      effects: ['face-gloss-ring','sparkle-filament','vignette-feather']
    },
    {
      id: 'Innocent-Glance-Sparkle',
      label: '無垢の上目遣い・きらめき',
      expressions: ['upward-glance-innocent','soft-smile','bashful'],
      effects: ['sparkle-filament','bloom-dreamy-plus']
    },
    {
      id: 'Amethyst-Melancholy',
      label: 'アメシストのうつろ',
      expressions: ['melancholy','glassy-eyes-amethyst','arched-brow-elegant'],
      effects: ['film-grain-classic','vignette-feather','rim-light-crown']
    },
    {
      id: 'Awkward-Feather-Noir',
      label: '気まずい・フェザーノワール',
      expressions: ['awkward-smile-soft','stare-blank','tense'],
      effects: ['impact-lines-taper','vignette-feather','soft-ghost-lens']
    },
    {
      id: 'Relieved-Snow-Soft',
      label: '安堵・小雪ソフト',
      expressions: ['relieved','closed-smile','calm'],
      effects: ['light-snow','sparkle-dust-fine','face-gloss-ring']
    },
    {
      id: 'Mischief-Ribbon-Lights',
      label: 'いたずら・リボンライト',
      expressions: ['mischievous','upward-glance','grin'],
      effects: ['sparkle-filament','rim-light-crown','impact-lines-flare']
    }
  ];

  g.expressionEffects["part3"] = { expressions, effects, presets };
})(window);