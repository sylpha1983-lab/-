/* ============================================
   Expression + Effects Builder — part7.js (7/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part7"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目（さらなる多様化）
    { id: 'side-eye-razor-shade',   jp: '横目・レイザー影',         category: 'Eyes / 目' },
    { id: 'side-eye-twinkle',       jp: '横目・きらり',             category: 'Eyes / 目' },
    { id: 'half-lidded-warm',       jp: '半目・あたたか',           category: 'Eyes / 目' },
    { id: 'half-lidded-frosty',     jp: '半目・ひんやり',           category: 'Eyes / 目' },
    { id: 'upward-glance-shy',      jp: '上目遣い・はにかみ',       category: 'Eyes / 目' },
    { id: 'glassy-eyes-emerald',    jp: 'うるみ瞳・エメラルド',     category: 'Eyes / 目' },
    { id: 'teary-soft',             jp: '涙目・そっと',             category: 'Eyes / 目' },
    { id: 'eye-squeeze-smile',      jp: '目を細めて笑う',           category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-sad-tilt',          jp: '眉しょんぼり・かしげ',     category: 'Brows / 眉' },
    { id: 'brow-proud-flat',        jp: '誇り眉・フラット',         category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-peek-tooth',       jp: 'にこ歯ちらり',             category: 'Mouth / 口' },
    { id: 'smile-catlike',          jp: '猫口スマイル',             category: 'Mouth / 口' },
    { id: 'pout-mini-tease',        jp: 'ミニむくれ・挑発',         category: 'Mouth / 口' },
    { id: 'lip-press-soft',         jp: '唇プレス・やわら',         category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'serene',                 jp: '安らぎ',                   category: 'Emotion / 感情' },
    { id: 'longing',                jp: '切望',                     category: 'Emotion / 感情' },
    { id: 'tease',                  jp: '挑発',                     category: 'Emotion / 感情' },
    { id: 'bemused',                jp: 'おかしみ',                 category: 'Emotion / 感情' },

    // State / 状態
    { id: 'flushed',                jp: 'ほてり',                   category: 'State / 状態' },
    { id: 'composed-soft',          jp: '穏やかな平静',             category: 'State / 状態' },
    { id: 'moody',                  jp: 'ムーディ',                  category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-aurora',       jp: 'リムライト・オーロラ',      category: 'Light / 光' },
    { id: 'face-gloss-spot',        jp: '顔ハイライト・スポット',    category: 'Light / 光' },
    { id: 'bloom-soft-veil',        jp: 'ソフトヴェール・ブルーム',  category: 'Light / 光' },
    { id: 'vignette-ellipse-soft',  jp: '楕円ビネット・柔',          category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-ring',      jp: '集中線・リング',            category: 'Lines / 線' },
    { id: 'speed-lines-cross',      jp: 'スピード線・クロス',        category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-dense-plus',     jp: '高密度スパークル＋',        category: 'Particles / 粒子' },
    { id: 'sparkle-orbit',          jp: 'スパークル・オービット',    category: 'Particles / 粒子' },
    { id: 'soft-grain-film',        jp: 'ソフトフィルム粒子',        category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'rain-backlight',         jp: '逆光の雨',                  category: 'Weather / 天候' },
    { id: 'mist-cool',              jp: '冷たいもや',                category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-light-puff',   jp: '目の下・淡ふくらみ影',      category: 'VFX / その他' },
    { id: 'screen-tone-radial',     jp: 'トーン・放射',              category: 'VFX / その他' },
    { id: 'lens-ghost-orb',         jp: 'レンズゴースト・オーブ',    category: 'VFX / その他' }
  ];

  // ========== Presets 追加（混合セット） ==========
  const presets = [
    {
      id: 'Shy-Upglance-Orbit',
      label: 'はにかみ上目遣い・オービット',
      expressions: ['upward-glance-shy','smile-peek-tooth','brow-sad-tilt','flushed'],
      effects: ['sparkle-orbit','face-gloss-spot','vignette-ellipse-soft']
    },
    {
      id: 'Emerald-Serene-Veil',
      label: 'エメラルド安らぎ・ヴェール',
      expressions: ['glassy-eyes-emerald','serene','lip-press-soft'],
      effects: ['bloom-soft-veil','rim-light-aurora','soft-grain-film']
    },
    {
      id: 'Razor-Shade-RingLines',
      label: 'レイザー影・リング集中線',
      expressions: ['side-eye-razor-shade','half-lidded-frosty','bemused'],
      effects: ['impact-lines-ring','screen-tone-radial','lens-ghost-orb']
    },
    {
      id: 'Twinkle-Tease-Rain',
      label: 'きらり挑発・逆光雨',
      expressions: ['side-eye-twinkle','tease','pout-mini-tease'],
      effects: ['rain-backlight','sparkle-dense-plus','rim-light-aurora']
    },
    {
      id: 'Warm-Compose-Noir',
      label: '温もり・穏やかノワール',
      expressions: ['half-lidded-warm','composed-soft','smile-catlike'],
      effects: ['vignette-ellipse-soft','speed-lines-cross','face-gloss-spot']
    },
    {
      id: 'Soft-Teary-Feather',
      label: 'そっと涙・フェザー',
      expressions: ['teary-soft','eye-squeeze-smile','longing'],
      effects: ['bloom-soft-veil','sparkle-dense-plus','under-eye-light-puff']
    }
  ];

  g.expressionEffects["part7"] = { expressions, effects, presets };
})(window);