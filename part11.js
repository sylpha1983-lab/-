/* ============================================
   Expression + Effects Builder — part11.js (11/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part11"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'side-eye-warm-velvet',   jp: '横目・ウォームベルベット',    category: 'Eyes / 目' },
    { id: 'side-eye-crisp',         jp: '横目・クリスプ',              category: 'Eyes / 目' },
    { id: 'half-lidded-dream',      jp: '半目・夢見',                  category: 'Eyes / 目' },
    { id: 'half-lidded-icy',        jp: '半目・アイシー',              category: 'Eyes / 目' },
    { id: 'upward-glance-soft',     jp: '上目遣い・ソフト',            category: 'Eyes / 目' },
    { id: 'teary-corner',           jp: '涙・目尻に滲む',              category: 'Eyes / 目' },
    { id: 'glassy-eyes-pearl',      jp: 'うるみ瞳・パール',            category: 'Eyes / 目' },
    { id: 'eyelids-flutter-soft',   jp: 'まぶた・ふわ瞬き',            category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-angle-gentle',      jp: '斜め眉・やわら',              category: 'Brows / 眉' },
    { id: 'brow-stern-flat',        jp: '厳しめフラット眉',            category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-quiet',            jp: '静かな微笑み',                category: 'Mouth / 口' },
    { id: 'smile-curve',            jp: '口角カーブ笑み',              category: 'Mouth / 口' },
    { id: 'pout-sulk',              jp: 'むくれ・すね',                category: 'Mouth / 口' },
    { id: 'pressed-lips-calm',      jp: '口を結ぶ・落ち着き',          category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'fondness',               jp: '愛着',                        category: 'Emotion / 感情' },
    { id: 'resentful',              jp: 'うらみがましい',              category: 'Emotion / 感情' },
    { id: 'soft-pride',             jp: '穏やかな誇り',                category: 'Emotion / 感情' },
    { id: 'gentle-joy',             jp: 'やさしい喜び',                category: 'Emotion / 感情' },

    // State / 状態
    { id: 'collected',              jp: '冷静沈着',                    category: 'State / 状態' },
    { id: 'lightheaded',            jp: 'ふわっと',                    category: 'State / 状態' },
    { id: 'brooding',               jp: '思い沈む',                    category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-crown-soft',   jp: 'リムライト・クラウン柔',      category: 'Light / 光' },
    { id: 'cheek-specular-dot',     jp: '頬スペキュラ・きらり点',      category: 'Light / 光' },
    { id: 'bloom-velvet',           jp: 'ベルベット・ブルーム',        category: 'Light / 光' },
    { id: 'vignette-soft-ellipse',  jp: '楕円ビネット・ソフト',        category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-softflare', jp: '集中線・ソフトフレア',        category: 'Lines / 線' },
    { id: 'speed-lines-feather',    jp: 'スピード線・フェザー',        category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-thread',         jp: 'スパークル・細糸',            category: 'Particles / 粒子' },
    { id: 'dust-sheer',             jp: '微薄ダスト',                  category: 'Particles / 粒子' },
    { id: 'bokeh-soft-orbs',        jp: 'ソフトボケ・オーブ',          category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'rain-rimlight',          jp: '雨・リム光',                  category: 'Weather / 天候' },
    { id: 'haze-gentle',            jp: 'やわらか霞',                  category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-softline',     jp: '目の下・柔線影',              category: 'VFX / その他' },
    { id: 'tone-fine-cross',        jp: 'トーン・細クロス',            category: 'VFX / その他' },
    { id: 'lens-ghost-softring',    jp: 'レンズゴースト・柔リング',    category: 'VFX / その他' }
  ];

  // ========== Presets 追加（混合セット） ==========
  const presets = [
    {
      id: 'Velvet-SoftFond',
      label: 'ベルベット愛着・やわら',
      expressions: ['side-eye-warm-velvet','fondness','smile-quiet','brow-angle-gentle'],
      effects: ['bloom-velvet','cheek-specular-dot','vignette-soft-ellipse']
    },
    {
      id: 'Icy-Collected-RimRain',
      label: 'アイシー冷静・リム雨',
      expressions: ['half-lidded-icy','collected','pressed-lips-calm'],
      effects: ['rain-rimlight','rim-light-crown-soft','tone-fine-cross']
    },
    {
      id: 'Pearl-Teary-Glow',
      label: 'パールの涙・微光',
      expressions: ['glassy-eyes-pearl','teary-corner','gentle-joy'],
      effects: ['bokeh-soft-orbs','under-eye-softline','bloom-velvet']
    },
    {
      id: 'Resentful-Crisp-Line',
      label: 'うらみ・クリスプ視線',
      expressions: ['resentful','side-eye-crisp','pout-sulk','brow-stern-flat'],
      effects: ['impact-lines-softflare','vignette-soft-ellipse','dust-sheer']
    },
    {
      id: 'Dreamy-Lightheaded',
      label: '夢見・ふわっと',
      expressions: ['half-lidded-dream','lightheaded','smile-curve'],
      effects: ['sparkle-thread','speed-lines-feather','lens-ghost-softring']
    },
    {
      id: 'Brooding-Noir-Soft',
      label: '沈思ノワール・ソフト',
      expressions: ['brooding','side-eye-crisp','smile-quiet'],
      effects: ['vignette','rim-light-crown-soft','tone-fine-cross']
    }
  ];

  g.expressionEffects["part11"] = { expressions, effects, presets };
})(window);