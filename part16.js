/* ============================================
   Expression + Effects Builder — part16.js (16/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part16"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'side-eye-amber',        jp: '横目・アンバー',                category: 'Eyes / 目' },
    { id: 'squint-sun',            jp: '細目・日差し',                  category: 'Eyes / 目' },
    { id: 'eye-smile',             jp: '目じり笑い',                    category: 'Eyes / 目' },
    { id: 'droopy-eyes-kind',      jp: 'たれ目・やさしさ',              category: 'Eyes / 目' },
    { id: 'tear-single-drop',      jp: '涙・ひとしずく',                category: 'Eyes / 目' },
    { id: 'starry-pupils-soft',    jp: '星の瞳孔・やわら',              category: 'Eyes / 目' },
    { id: 'glance-over-shoulder',  jp: '肩越しの視線',                  category: 'Eyes / 目' },
    { id: 'gaze-steady-calm',      jp: '落ち着いた視線',                category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arched-softplus',  jp: 'アーチ眉・やわら＋',            category: 'Brows / 眉' },
    { id: 'brow-knit-worried',     jp: '眉間寄せ・心配',                category: 'Brows / 眉' },
    { id: 'brow-relaxed-flat',     jp: 'リラックス眉・フラット',         category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'shy-smile-closed',      jp: 'はにかみ・口閉じ',              category: 'Mouth / 口' },
    { id: 'soft-laugh',            jp: 'やわらかな笑い',                category: 'Mouth / 口' },
    { id: 'pout-curve-soft',       jp: 'むくれ・やわカーブ',            category: 'Mouth / 口' },
    { id: 'lip-corner-down-soft',  jp: '口角下げ・そっと',              category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'quiet-hope',            jp: '静かな希望',                    category: 'Emotion / 感情' },
    { id: 'sheepish',              jp: '気まずい照れ',                  category: 'Emotion / 感情' },
    { id: 'soft-frustration',      jp: 'やわら苛立ち',                  category: 'Emotion / 感情' },
    { id: 'contentment',           jp: '満ち足り',                      category: 'Emotion / 感情' },
    { id: 'starstruck',            jp: '見惚れる',                      category: 'Emotion / 感情' },

    // State / 状態
    { id: 'grounded',              jp: '地に足の着いた',                category: 'State / 状態' },
    { id: 'absent-minded',         jp: 'うわの空',                      category: 'State / 状態' },
    { id: 'refreshed',             jp: 'すっきり',                      category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'rim-light-triple',      jp: 'トリプル・リムライト',          category: 'Light / 光' },
    { id: 'catchlight-heart',      jp: 'キャッチライト・ハート',        category: 'Light / 光' },
    { id: 'softbox-light',         jp: 'ソフトボックス光',              category: 'Light / 光' },
    { id: 'window-stripe-light',   jp: '窓の縞影ライト',                category: 'Light / 光' },
    { id: 'backlight-ring',        jp: 'バックライト・リング',           category: 'Light / 光' },

    // Lines / 線
    { id: 'pulse-lines',           jp: '鼓動パルス線',                  category: 'Lines / 線' },
    { id: 'coil-lines',            jp: 'コイル線',                      category: 'Lines / 線' },
    { id: 'radial-fine-burst',     jp: '放射・細バースト',              category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'glitter-fall',          jp: 'グリッター降り',                category: 'Particles / 粒子' },
    { id: 'confetti-spark',        jp: '紙吹雪スパーク',                category: 'Particles / 粒子' },
    { id: 'mist-beads',            jp: 'ミストの粒',                    category: 'Particles / 粒子' },
    { id: 'snow-crystal',          jp: '雪の結晶',                      category: 'Particles / 粒子' },
    { id: 'rain-streaks-diag',     jp: '雨の筋・斜め',                  category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'downpour-diagonal',     jp: '土砂降り・斜線',                category: 'Weather / 天候' },
    { id: 'blizzard-swirl',        jp: '吹雪・渦',                      category: 'Weather / 天候' },

    // VFX / その他
    { id: 'film-scratch-fine',     jp: 'フィルム傷・細',                category: 'VFX / その他' },
    { id: 'double-exposure-soft',  jp: '二重露光・ソフト',              category: 'VFX / その他' },
    { id: 'light-leak-soft',       jp: 'ライトリーク・やわら',          category: 'VFX / その他' },
    { id: 'chromatic-ring-soft',   jp: '色収差リング・弱',              category: 'VFX / その他' }
  ];

  // ========== Presets 追加（表情＋エフェクト混合） ==========
  const presets = [
    {
      id: 'QuietHope-WindowStripe',
      label: '静かな希望・窓の縞光',
      expressions: ['quiet-hope','eye-smile','brow-arched-softplus','shy-smile-closed'],
      effects: ['window-stripe-light','softbox-light','radial-fine-burst']
    },
    {
      id: 'Starstruck-HeartCatch',
      label: '見惚れ・ハートキャッチ',
      expressions: ['starstruck','starry-pupils-soft','soft-laugh'],
      effects: ['catchlight-heart','glitter-fall','backlight-ring']
    },
    {
      id: 'Sheepish-Glance-Coil',
      label: '気まずい照れ・肩越しコイル線',
      expressions: ['sheepish','glance-over-shoulder','pout-curve-soft','brow-knit-worried'],
      effects: ['coil-lines','light-leak-soft','film-scratch-fine']
    },
    {
      id: 'Content-SnowCrystal',
      label: '満ち足り・雪結晶',
      expressions: ['contentment','droopy-eyes-kind','smile-bright'],
      effects: ['snow-crystal','softbox-light','chromatic-ring-soft']
    },
    {
      id: 'Grounded-RainStreaks',
      label: '地に足・雨筋斜め',
      expressions: ['grounded','gaze-steady-calm','lip-corner-down-soft'],
      effects: ['rain-streaks-diag','rim-light-triple','pulse-lines']
    },
    {
      id: 'Refreshed-Confetti',
      label: 'すっきり・紙吹雪スパーク',
      expressions: ['refreshed','eye-smile','brow-relaxed-flat'],
      effects: ['confetti-spark','glitter-fall','double-exposure-soft']
    },
    {
      id: 'SoftFrustration-Downpour',
      label: 'やわ苛立ち・土砂降り',
      expressions: ['soft-frustration','narrow-suspicious','press-lips-determined'],
      effects: ['downpour-diagonal','film-scratch-fine','vignette']
    },
    {
      id: 'AbsentMinded-MistBeads',
      label: 'うわの空・ミスト粒',
      expressions: ['absent-minded','squint-sun','shy-smile-closed'],
      effects: ['mist-beads','light-leak-soft','backlight-ring']
    }
  ];

  g.expressionEffects["part16"] = { expressions, effects, presets };
})(window);