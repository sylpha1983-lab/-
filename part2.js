/* ============================================
   Expression + Effects Builder — part2.js (2/20)
   置き方：builder_main.html と同じフォルダに保存
   仕様：window.expressionEffects["part2"] に {expressions,effects,presets} を格納
   備考：各 id は英語タグ（英語出力用）／jp はUI表示用
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加（目・眉・口・感情・状態を拡張） ==========
  const expressions = [
    // Eyes / 目（拡張）
    { id: 'side-eye-soft',       jp: '横目・やわらか',        category: 'Eyes / 目' },
    { id: 'side-eye-icy',        jp: '横目・クール',          category: 'Eyes / 目' },
    { id: 'half-lidded-serene',  jp: '半目・静',              category: 'Eyes / 目' },
    { id: 'half-lidded-sultry',  jp: '半目・アンニュイ',      category: 'Eyes / 目' },
    { id: 'upward-glance',       jp: '上目遣い',              category: 'Eyes / 目' },
    { id: 'upward-glance-tease', jp: '上目遣い・挑発',        category: 'Eyes / 目' },
    { id: 'glassy-eyes-deep',    jp: 'うるみ瞳・深',          category: 'Eyes / 目' },
    { id: 'teary-smile',         jp: '泣き笑い',              category: 'Eyes / 目' },
    { id: 'wince',               jp: '目をしかめる',          category: 'Eyes / 目' },
    { id: 'stare-blank',         jp: '無表情の見つめ',        category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'raised-brow',         jp: '片眉上げ',              category: 'Brows / 眉' },
    { id: 'furrowed-brow',       jp: '眉間しわ',              category: 'Brows / 眉' },
    { id: 'soft-brow',           jp: 'やわら眉',              category: 'Brows / 眉' },

    // Mouth / 口（拡張）
    { id: 'pout-hard',           jp: 'ふくれ・強',            category: 'Mouth / 口' },
    { id: 'pout-cute',           jp: 'ふくれ・キュート',      category: 'Mouth / 口' },
    { id: 'smile-gentle',        jp: 'にこやか微笑み',        category: 'Mouth / 口' },
    { id: 'smirk-sly',           jp: 'ニヤリ・狡猾',          category: 'Mouth / 口' },
    { id: 'awkward-tight',       jp: '引きつり笑い',          category: 'Mouth / 口' },
    { id: 'bit-lip',             jp: '噛みしめる唇',          category: 'Mouth / 口' },

    // Emotion / 感情（拡張）
    { id: 'bashful',             jp: 'はにかみ',              category: 'Emotion / 感情' },
    { id: 'proud',               jp: '得意げ',                category: 'Emotion / 感情' },
    { id: 'annoyed',             jp: '不機嫌',                category: 'Emotion / 感情' },
    { id: 'skeptical',           jp: '懐疑的',                category: 'Emotion / 感情' },
    { id: 'shocked',             jp: 'ショック',              category: 'Emotion / 感情' },

    // State / 状態（拡張）
    { id: 'dizzy',               jp: 'ふらつき',              category: 'State / 状態' },
    { id: 'focused',             jp: '集中',                  category: 'State / 状態' },
    { id: 'nervous',             jp: '緊張',                  category: 'State / 状態' },
    { id: 'daydreaming',         jp: '白昼夢',                category: 'State / 状態' },
    { id: 'determined',          jp: '決意',                  category: 'State / 状態' }
  ];

  // ========== Effects 追加（ライティング・線・粒子・天候・VFX拡張） ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-twin',      jp: 'ツイン・リムライト',     category: 'Light / 光' },
    { id: 'face-gloss-micro',    jp: '顔ハイライト・微',       category: 'Light / 光' },
    { id: 'bloom-dreamy',        jp: 'ドリーミー・ブルーム',   category: 'Light / 光' },
    { id: 'vignette-oval',       jp: 'オーバル・ビネット',     category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-radial', jp: '集中線・放射',           category: 'Lines / 線' },
    { id: 'impact-lines-thicker',jp: '集中線・極太+',          category: 'Lines / 線' },
    { id: 'speed-lines-swipe',   jp: 'スピード線・スワイプ',   category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-ribbon',      jp: 'スパークル・リボン',     category: 'Particles / 粒子' },
    { id: 'sparkle-bokeh-ring',  jp: 'スパークル・ボケ輪',     category: 'Particles / 粒子' },
    { id: 'film-grain',          jp: 'フィルム粒子',           category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'drizzle',             jp: '霧雨',                   category: 'Weather / 天候' },
    { id: 'heavy-rain',          jp: '豪雨',                   category: 'Weather / 天候' },
    { id: 'snow-sparkle',        jp: '雪スパークル',           category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-shadow-soft', jp: '目の下の影・薄',       category: 'VFX / その他' },
    { id: 'cheek-highlight',     jp: '頬ハイライト',           category: 'VFX / その他' },
    { id: 'screen-tone-fine',    jp: 'スクリーントーン・細',   category: 'VFX / その他' },
    { id: 'soft-ghost',          jp: 'レンズゴースト・柔',     category: 'VFX / その他' }
  ];

  // ========== Presets 追加（表情＋エフェクトの混合セット） ==========
  const presets = [
    { id: 'Jealous-Pout-Soft', label: '嫉妬むくれ・やわら',
      expressions: ['jealous','pout-cute','side-eye-soft'],
      effects: ['cheek-highlight','sparkle'] },

    { id: 'Cool-Icy-SideEye', label: 'クール横目・アイシー',
      expressions: ['side-eye-icy','smirk-sly','skeptical'],
      effects: ['rim-light-twin','sparkle-ribbon','vignette'] },

    { id: 'Dreamy-HalfLid', label: 'とろけ半目・ドリーミー',
      expressions: ['half-lidded-sultry','smile-gentle','bashful'],
      effects: ['bloom-dreamy','vignette-oval','sparkle-bokeh-ring'] },

    { id: 'Tease-Glance-Ribbon', label: '挑発上目遣い・リボン',
      expressions: ['upward-glance-tease','grin','raised-brow'],
      effects: ['sparkle-ribbon','face-gloss-micro'] },

    { id: 'Awkward-Rain-Drama', label: '気まずい雨ドラマ',
      expressions: ['awkward-tight','teary-smile','annoyed'],
      effects: ['drizzle','under-eye-shadow-soft','screen-tone-fine'] },

    { id: 'Shock-Thicker-Radial', label: 'ショック極太＋放射',
      expressions: ['shocked','wide-eyed','furrowed-brow'],
      effects: ['impact-lines-thicker','impact-lines-radial','bloom'] },

    { id: 'Determined-Noir', label: '決意ノワール',
      expressions: ['determined','stare-blank','smirk'],
      effects: ['vignette-oval','rim-light','film-grain'] },

    { id: 'Snow-Sparkle-Cute', label: '雪スパークル・キュート',
      expressions: ['smile-gentle','pout-cute','bashful'],
      effects: ['snow-sparkle','sparkle','cheek-highlight'] },

    { id: 'Heavy-Rain-Angst', label: '豪雨・アンスト',
      expressions: ['sad','wince','stare-blank'],
      effects: ['heavy-rain','under-eye-shadow','vignette'] }
  ];

  g.expressionEffects["part2"] = { expressions, effects, presets };
})(window);