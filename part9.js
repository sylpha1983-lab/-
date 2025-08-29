/* ============================================
   Expression + Effects Builder — part9.js (9/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part9"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions（さらに拡張） ==========
  const expressions = [
    // Eyes / 目
    { id: 'side-eye-velvet-pro',   jp: '横目・ベルベットPro',        category: 'Eyes / 目' },
    { id: 'side-eye-icy-cool',     jp: '横目・アイシークール',        category: 'Eyes / 目' },
    { id: 'half-lidded-drowsy',    jp: '半目・とろん',                category: 'Eyes / 目' },
    { id: 'half-lidded-keen',      jp: '半目・鋭い',                  category: 'Eyes / 目' },
    { id: 'teary-stream',          jp: '涙筋・つーっ',                 category: 'Eyes / 目' },
    { id: 'glassy-eyes-rose',      jp: 'うるみ瞳・ローズ',            category: 'Eyes / 目' },
    { id: 'glare',                 jp: 'にらみ',                      category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arch-sly',         jp: 'アーチ眉・したり',            category: 'Brows / 眉' },
    { id: 'brow-flat-determined',  jp: 'フラット眉・決意',            category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'soft-smirk',            jp: 'やわらニヤリ',                category: 'Mouth / 口' },
    { id: 'smile-bashful',         jp: '照れ笑い',                    category: 'Mouth / 口' },
    { id: 'pout-side',             jp: '横むくれ',                    category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'envy',                  jp: '羨望',                        category: 'Emotion / 感情' },
    { id: 'triumphant',            jp: '勝ち誇り',                    category: 'Emotion / 感情' },
    { id: 'melting-cute',          jp: 'とろけキュート',              category: 'Emotion / 感情' },

    // State / 状態
    { id: 'composed-steel',        jp: '鋼の平静',                    category: 'State / 状態' },
    { id: 'restless',              jp: '落ち着かない',                category: 'State / 状態' },
    { id: 'bewitched',             jp: '魅了されて',                  category: 'State / 状態' }
  ];

  // ========== Effects（演出の派生） ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-crescent',    jp: 'リムライト・三日月',           category: 'Light / 光' },
    { id: 'face-gloss-shear',      jp: '顔ハイライト・シア',           category: 'Light / 光' },
    { id: 'bloom-ethereal',        jp: 'エーテル・ブルーム',           category: 'Light / 光' },
    { id: 'vignette-soft-square',  jp: 'ソフト四角ビネット',           category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-focus',    jp: '集中線・フォーカス',           category: 'Lines / 線' },
    { id: 'motion-lines-feather',  jp: 'モーション線・羽毛',           category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-constellation', jp: '星座スパークル',               category: 'Particles / 粒子' },
    { id: 'pollen-float',          jp: '花粉フロート',                 category: 'Particles / 粒子' },
    { id: 'mist-glitter',          jp: 'ミストきらめき',               category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'drizzle-backglow',      jp: '霧雨バックグロー',             category: 'Weather / 天候' },
    { id: 'snow-drift-soft',       jp: '雪の漂い・柔',                 category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-crease',      jp: '目の下・皺影',                 category: 'VFX / その他' },
    { id: 'tone-crosshatch',       jp: 'トーン・クロスハッチ',         category: 'VFX / その他' },
    { id: 'lens-bloom-micro',      jp: 'マイクロ・レンズブルーム',     category: 'VFX / その他' }
  ];

  // ========== Presets（混合セット） ==========
  const presets = [
    {
      id: 'Velvet-Envy-Constellation',
      label: 'ベルベット羨望・星座',
      expressions: ['side-eye-velvet-pro','envy','soft-smirk'],
      effects: ['sparkle-constellation','face-gloss-shear','vignette-soft-square']
    },
    {
      id: 'Icy-Triumph-Focus',
      label: 'アイシー勝ち誇り・フォーカス線',
      expressions: ['side-eye-icy-cool','triumphant','brow-flat-determined'],
      effects: ['impact-lines-focus','rim-light-crescent','lens-bloom-micro']
    },
    {
      id: 'Melting-Cute-Ethereal',
      label: 'とろけキュート・エーテル',
      expressions: ['melting-cute','half-lidded-drowsy','smile-bashful'],
      effects: ['bloom-ethereal','mist-glitter','tone-crosshatch']
    },
    {
      id: 'Steel-Composed-Drizzle',
      label: '鋼の平静・霧雨グロー',
      expressions: ['composed-steel','glare','pout-side'],
      effects: ['drizzle-backglow','under-eye-crease','vignette-soft-square']
    },
    {
      id: 'Bewitched-Rose-Snow',
      label: '魅了ローズ・雪の漂い',
      expressions: ['bewitched','glassy-eyes-rose','brow-arch-sly'],
      effects: ['snow-drift-soft','sparkle-constellation','motion-lines-feather']
    },
    {
      id: 'Restless-Stream-MicroBloom',
      label: '落ち着かない・涙筋と微ブルーム',
      expressions: ['restless','teary-stream','soft-smirk'],
      effects: ['lens-bloom-micro','pollen-float','impact-lines-focus']
    }
  ];

  g.expressionEffects["part9"] = { expressions, effects, presets };
})(window);