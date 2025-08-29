/* ============================================
   Expression + Effects Builder — part17.js (17/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part17"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加 ==========
  const expressions = [
    // Eyes / 目
    { id: 'half-lid-sleepy',       jp: '眠そう半目',                    category: 'Eyes / 目' },
    { id: 'blink-slow',            jp: 'ゆっくり瞬き',                  category: 'Eyes / 目' },
    { id: 'wide-alert',            jp: '見開き・警戒',                  category: 'Eyes / 目' },
    { id: 'gaze-distant',          jp: '遠い視線',                      category: 'Eyes / 目' },
    { id: 'teary-shine',           jp: '涙ぐむ輝き',                    category: 'Eyes / 目' },
    { id: 'wink-playful',          jp: 'ウィンク・茶目っ気',            category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-raised-high',      jp: '大きく上げた眉',                category: 'Brows / 眉' },
    { id: 'brow-soft-relief',      jp: '安心の緩み眉',                  category: 'Brows / 眉' },
    { id: 'brow-tilt-confused',    jp: '傾き眉・困惑',                  category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smirk-sly',             jp: 'にやり・ずるい',                category: 'Mouth / 口' },
    { id: 'whisper-mouth',         jp: '口元・ささやき',                category: 'Mouth / 口' },
    { id: 'yawn-small',            jp: '小さなあくび',                  category: 'Mouth / 口' },
    { id: 'tongue-out-tease',      jp: '舌出し・からかい',              category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'bashful',               jp: '照れくさい',                    category: 'Emotion / 感情' },
    { id: 'awed',                  jp: '畏敬・感嘆',                    category: 'Emotion / 感情' },
    { id: 'mischievous',           jp: 'いたずら心',                    category: 'Emotion / 感情' },
    { id: 'suspicious-calm',       jp: '疑念・冷静',                    category: 'Emotion / 感情' },

    // State / 状態
    { id: 'daydreaming',           jp: '白昼夢',                        category: 'State / 状態' },
    { id: 'energized',             jp: '元気いっぱい',                  category: 'State / 状態' },
    { id: 'drained',               jp: '疲れ果て',                      category: 'State / 状態' },
    { id: 'serene',                jp: '穏やか',                        category: 'State / 状態' }
  ];

  // ========== Effects 追加 ==========
  const effects = [
    // Light / 光
    { id: 'dappled-light',         jp: '木漏れ日ライト',                category: 'Light / 光' },
    { id: 'moonlight-glow',        jp: '月光の輝き',                    category: 'Light / 光' },
    { id: 'light-shaft',           jp: '光の筋',                        category: 'Light / 光' },
    { id: 'halo-soft',             jp: 'やわらかい光輪',                category: 'Light / 光' },

    // Lines / 線
    { id: 'spiral-lines',          jp: '渦巻き線',                      category: 'Lines / 線' },
    { id: 'burst-sharp',           jp: 'シャープバースト線',            category: 'Lines / 線' },
    { id: 'dash-motion',           jp: 'ダッシュ動線',                  category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'dust-motes',            jp: 'ほこり粒',                      category: 'Particles / 粒子' },
    { id: 'sparkle-rainbow',       jp: '虹色スパークル',                category: 'Particles / 粒子' },
    { id: 'bubble-float',          jp: '浮遊バブル',                    category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'light-rain',            jp: '小雨',                          category: 'Weather / 天候' },
    { id: 'sun-shower',            jp: '天気雨',                        category: 'Weather / 天候' },

    // VFX / その他
    { id: 'lens-flare-soft',       jp: 'レンズフレア・やわら',          category: 'VFX / その他' },
    { id: 'prism-shift',           jp: 'プリズムシフト',                category: 'VFX / その他' },
    { id: 'aura-glow',             jp: 'オーラ輝き',                    category: 'VFX / その他' }
  ];

  // ========== Presets ==========
  const presets = [
    {
      id: 'Bashful-DappledLight',
      label: '照れくさい・木漏れ日',
      expressions: ['bashful','half-lid-sleepy','smirk-sly'],
      effects: ['dappled-light','dust-motes','halo-soft']
    },
    {
      id: 'Mischievous-SparkleRainbow',
      label: 'いたずら心・虹スパークル',
      expressions: ['mischievous','wink-playful','tongue-out-tease'],
      effects: ['sparkle-rainbow','spiral-lines','aura-glow']
    },
    {
      id: 'Daydreaming-Bubbles',
      label: '白昼夢・バブル',
      expressions: ['daydreaming','gaze-distant','yawn-small'],
      effects: ['bubble-float','moonlight-glow','prism-shift']
    },
    {
      id: 'Energized-BurstLines',
      label: '元気いっぱい・バースト線',
      expressions: ['energized','wide-alert','smirk-sly'],
      effects: ['burst-sharp','dash-motion','light-shaft']
    },
    {
      id: 'Serene-Moonlight',
      label: '穏やか・月光',
      expressions: ['serene','brow-soft-relief','teary-shine'],
      effects: ['moonlight-glow','halo-soft','dust-motes']
    },
    {
      id: 'Suspicious-Rain',
      label: '疑念・小雨',
      expressions: ['suspicious-calm','brow-tilt-confused','whisper-mouth'],
      effects: ['light-rain','lens-flare-soft','spiral-lines']
    }
  ];

  g.expressionEffects["part17"] = { expressions, effects, presets };
})(window);