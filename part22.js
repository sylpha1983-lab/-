/* ============================================
   Expression + Effects Builder — part22.js (22/40)
   役割：ハート拡張パック（追加版）
   形式：window.expressionEffects["part22"] = {expressions,effects,presets}
   衝突回避：すべて新ID（-alt/-pro/-plus/-v2 など）
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions（ハート連想の表情強化） ==========
  const expressions = [
    // Eyes / 目
    { id: 'heart-eyes-gleam',        jp: 'ハート目・きらめき',          category: 'Eyes / 目' },
    { id: 'heart-eyes-pulse',        jp: 'ハート目・脈動',              category: 'Eyes / 目' },
    { id: 'pupils-heart-twinkle',    jp: '瞳ハート・瞬き',              category: 'Eyes / 目' },
    { id: 'wink-heart-soft-alt',     jp: 'ウィンク・ハート（やわ）',    category: 'Eyes / 目' },
    { id: 'gaze-heart-distant',      jp: '遠い視線・ハート余韻',        category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-soft-adoring',       jp: 'やわ眉・憧憬',                category: 'Brows / 眉' },
    { id: 'brow-curve-flirty',       jp: 'アーチ眉・フラーティ',        category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-heart-tilt-plus',   jp: '微笑・ハート傾き+',           category: 'Mouth / 口' },
    { id: 'kiss-blow-heart',         jp: '投げキス・ハート',            category: 'Mouth / 口' },
    { id: 'soft-pout-heart',         jp: 'やわむくれ・ハート',          category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'love-struck-calm',        jp: '恋に落ちた・静',              category: 'Emotion / 感情' },
    { id: 'affection-bright-plus',   jp: '親愛・きらめき+',             category: 'Emotion / 感情' },
    { id: 'shy-heart-rosy',          jp: '照れ・ハートほの紅',          category: 'Emotion / 感情' },
    { id: 'devoted-gentle',          jp: '一途・やさしさ',              category: 'Emotion / 感情' },
    { id: 'fond-teary-heart',        jp: 'うるみ瞳・ハート',             category: 'Emotion / 感情' },

    // State / 状態
    { id: 'fluttery-heart',          jp: '胸きゅん・ふわり',            category: 'State / 状態' },
    { id: 'serene-heart-aura',       jp: '穏やか・ハートの余光',        category: 'State / 状態' },
    { id: 'buoyant-heart-lite',      jp: '浮き立つ・ハート',            category: 'State / 状態' },
    { id: 'resolute-kind-heart',     jp: 'やさしい決意・ハート',        category: 'State / 状態' }
  ];

  // ========== Effects（ハートVFXの網羅強化） ==========
  const effects = [
    // Light / 光・ボケ
    { id: 'heart-bokeh-mini',        jp: 'ハートボケ・ミニ',            category: 'Light / 光' },
    { id: 'heart-bokeh-wide',        jp: 'ハートボケ・ワイド',          category: 'Light / 光' },
    { id: 'heart-light-leak',        jp: 'ハート光漏れ',                category: 'Light / 光' },
    { id: 'neon-heart-outline-pro',  jp: 'ネオンハート・アウトラインPro',category: 'Light / 光' },
    { id: 'backlit-heart-halo',      jp: '逆光・ハートハロ',            category: 'Light / 光' },
    { id: 'rim-heart-kicker',        jp: 'リム光・ハート反射',          category: 'Light / 光' },
    { id: 'soft-heart-vignette',     jp: 'ソフトビネット・ハート',      category: 'Light / 光' },

    // Lines / 線・軌跡
    { id: 'heartbeat-ecg-line',      jp: '心電図ライン',                category: 'Lines / 線' },
    { id: 'heart-trail-comet',       jp: 'ハート彗星トレイル',          category: 'Lines / 線' },
    { id: 'heart-spiral-orbit',      jp: 'ハート螺旋軌道',              category: 'Lines / 線' },
    { id: 'cupid-arrow-streak',      jp: 'キューピッド矢・光条',        category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'heart-confetti-plus',     jp: 'ハート紙吹雪+',               category: 'Particles / 粒子' },
    { id: 'heart-spark-mist',        jp: 'ハートスパーク霧',            category: 'Particles / 粒子' },
    { id: 'heart-orb-field',         jp: 'ハート光球フィールド',        category: 'Particles / 粒子' },
    { id: 'petals-heart-mix',        jp: '花びら×ハートMIX',           category: 'Particles / 粒子' },
    { id: 'glitter-heart-dust',      jp: 'きら粉・ハート',              category: 'Particles / 粒子' },

    // Weather / 天候・空気感
    { id: 'haze-heart-sunbeam',      jp: '霞に差すハート光条',          category: 'Weather / 天候' },
    { id: 'drift-heart-snow',        jp: '舞う雪・ハート混じり',        category: 'Weather / 天候' },

    // Surfaces / 素材
    { id: 'glass-heart-prism',       jp: 'ガラスハート・プリズム',      category: 'VFX / 素材' },
    { id: 'paper-heart-cutout',      jp: '紙カット・ハート',            category: 'VFX / 素材' },
    { id: 'ink-heart-splash',        jp: 'インクしぶき・ハート',        category: 'VFX / 素材' },
    { id: 'pixel-heart-hud',         jp: 'ピクセルハートHUD',           category: 'VFX / 素材' },

    // Overlays / 合成
    { id: 'heart-overlay-soft',      jp: 'ハート被写体前面ソフト',      category: 'Overlay / 合成' },
    { id: 'heart-overlay-depth',     jp: 'ハート前後景ミックス',        category: 'Overlay / 合成' },
    { id: 'double-exposure-heart',   jp: '二重露光・ハート',            category: 'Overlay / 合成' },

    // Misc / その他
    { id: 'balloon-heart-float',     jp: 'バルーンハート',              category: 'VFX / その他' },
    { id: 'handdrawn-heart-scribble',jp: '手描きハート・らくがき',      category: 'VFX / その他' },
    { id: 'sticker-heart-pack',      jp: 'ステッカーハート',            category: 'VFX / その他' }
  ];

  // ========== Presets（表情＋エフェクトの混合） ==========
  const presets = [
    {
      id: 'Romance-HeartBokehWide',
      label: 'ロマンス：ハートボケWide',
      expressions: ['love-struck-calm','smile-heart-tilt-plus','brow-soft-adoring'],
      effects: ['heart-bokeh-wide','soft-heart-vignette','rim-heart-kicker']
    },
    {
      id: 'Cute-HeartSparkMist',
      label: 'キュート：ハートスパーク霧',
      expressions: ['shy-heart-rosy','wink-heart-soft-alt','pupils-heart-twinkle'],
      effects: ['heart-spark-mist','heart-orb-field','heart-bokeh-mini']
    },
    {
      id: 'Valentine-ConfettiPlus',
      label: 'バレンタイン：紙吹雪+',
      expressions: ['affection-bright-plus','smile-heart-tilt-plus','fluttery-heart'],
      effects: ['heart-confetti-plus','heart-overlay-depth','petals-heart-mix']
    },
    {
      id: 'Neon-HeartGlowPro',
      label: 'ネオン・ハートGlow Pro',
      expressions: ['gaze-heart-distant','devoted-gentle'],
      effects: ['neon-heart-outline-pro','backlit-heart-halo','double-exposure-heart']
    },
    {
      id: 'ECG-DramaLine',
      label: 'ドラマ：心電図ライン',
      expressions: ['resolute-kind-heart','fond-teary-heart'],
      effects: ['heartbeat-ecg-line','heart-trail-comet','haze-heart-sunbeam']
    },
    {
      id: 'Balloon-SoftRomance',
      label: 'バルーン・ソフトロマンス',
      expressions: ['serene-heart-aura','kiss-blow-heart'],
      effects: ['balloon-heart-float','heart-light-leak','sticker-heart-pack']
    },
    {
      id: 'PixelHUD-Love',
      label: 'ピクセルHUD・ラブ',
      expressions: ['buoyant-heart-lite','wink-heart-soft-alt'],
      effects: ['pixel-heart-hud','handdrawn-heart-scribble','glitter-heart-dust']
    }
  ];

  g.expressionEffects["part22"] = { expressions, effects, presets };
})(window);