/* ============================================
   Expression + Effects Builder — part4.js (4/20)
   保存場所：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part4"]
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions ==========
  const expressions = [
    // Eyes / 目（さらなる派生）
    { id: 'narrow-eyes-sharp',     jp: '細め目・鋭さ',        category: 'Eyes / 目' },
    { id: 'narrow-eyes-warm',      jp: '細め目・やわらか',    category: 'Eyes / 目' },
    { id: 'sparkle-eyes-star',     jp: '瞳キラキラ・星型',    category: 'Eyes / 目' },
    { id: 'sparkle-eyes-tearful',  jp: '瞳キラキラ・涙混じり',category: 'Eyes / 目' },
    { id: 'closed-eyes-prayer',    jp: '閉じ目・祈り',        category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'slanted-brow-angry',    jp: '斜め眉・怒り',        category: 'Brows / 眉' },
    { id: 'slanted-brow-sad',      jp: '斜め眉・哀愁',        category: 'Brows / 眉' },
    { id: 'arched-brow-playful',   jp: 'アーチ眉・遊び心',    category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'open-smile',            jp: '開いた笑み',          category: 'Mouth / 口' },
    { id: 'soft-pout',             jp: 'ソフトむくれ',        category: 'Mouth / 口' },
    { id: 'tongue-peek',           jp: '舌ちろり',            category: 'Mouth / 口' },
    { id: 'gritted-teeth',         jp: '食いしばり歯',        category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'determined',            jp: '決意',                category: 'Emotion / 感情' },
    { id: 'cheerful',              jp: '朗らか',              category: 'Emotion / 感情' },
    { id: 'bashful-proud',         jp: '照れ誇り',            category: 'Emotion / 感情' },

    // State / 状態
    { id: 'confident',             jp: '自信あり',            category: 'State / 状態' },
    { id: 'shaken',                jp: '動揺',                category: 'State / 状態' },
    { id: 'daydreaming',           jp: '夢想',                category: 'State / 状態' }
  ];

  // ========== Effects ==========
  const effects = [
    // Light / 光
    { id: 'halo-light-soft',       jp: '光輪・ソフト',          category: 'Light / 光' },
    { id: 'glow-pulse',            jp: 'パルス発光',            category: 'Light / 光' },
    { id: 'moonlight-filter',      jp: '月光フィルター',        category: 'Light / 光' },

    // Lines / 線
    { id: 'motion-lines-fast',     jp: 'スピード線・速',        category: 'Lines / 線' },
    { id: 'motion-lines-drama',    jp: 'ドラマ線',              category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'petals-sakura',         jp: '桜の花びら',            category: 'Particles / 粒子' },
    { id: 'leaves-falling',        jp: '落ち葉',                category: 'Particles / 粒子' },
    { id: 'embers-floating',       jp: '舞う火の粉',            category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'rain-soft',             jp: '小雨',                  category: 'Weather / 天候' },
    { id: 'rain-heavy',            jp: '豪雨',                  category: 'Weather / 天候' },

    // VFX / その他
    { id: 'screen-crack',          jp: 'スクリーン亀裂',        category: 'VFX / その他' },
    { id: 'ghost-trail',           jp: 'ゴースト残像',          category: 'VFX / その他' }
  ];

  // ========== Presets ==========
  const presets = [
    {
      id: 'Starry-Cheerful',
      label: '星のきらめき朗らか',
      expressions: ['cheerful','sparkle-eyes-star','open-smile'],
      effects: ['halo-light-soft','petals-sakura']
    },
    {
      id: 'Determined-Rain',
      label: '決意の雨',
      expressions: ['determined','gritted-teeth','slanted-brow-angry'],
      effects: ['rain-heavy','motion-lines-drama']
    },
    {
      id: 'Daydreaming-Moonlight',
      label: '夢想の月光',
      expressions: ['daydreaming','soft-smile','narrow-eyes-warm'],
      effects: ['moonlight-filter','leaves-falling','glow-pulse']
    },
    {
      id: 'Playful-Ghost',
      label: '遊び心のゴースト',
      expressions: ['mischievous','tongue-peek','arched-brow-playful'],
      effects: ['ghost-trail','sparkle-dust-fine']
    },
    {
      id: 'Shaken-Crack',
      label: '動揺の亀裂',
      expressions: ['shaken','soft-pout','stare-blank'],
      effects: ['screen-crack','impact-lines-flare']
    }
  ];

  g.expressionEffects["part4"] = { expressions, effects, presets };
})(window);