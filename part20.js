/* ============================================
   Expression + Effects Builder — part20.js (20/20)
   保存：builder_main.html と同じフォルダ
   格納：window.expressionEffects["part20"] = {expressions,effects,presets}
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ========== Expressions 追加（最終拡張） ==========
  const expressions = [
    // Eyes / 目
    { id: 'half-lidded-glow',        jp: '半目・ほのかな光',            category: 'Eyes / 目' },
    { id: 'side-eye-softsmile',      jp: '横目・やわ笑み',              category: 'Eyes / 目' },
    { id: 'eye-gleam-tear',          jp: '瞳きらめき・涙縁',            category: 'Eyes / 目' },
    { id: 'gaze-up-curved',          jp: '上向き・曲線視線',            category: 'Eyes / 目' },
    { id: 'stare-determined-soft',   jp: '見据える・柔ら決意',          category: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arc-relief',         jp: 'アーチ眉・安堵',              category: 'Brows / 眉' },
    { id: 'brow-flat-steady',        jp: 'フラット眉・動じず',          category: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-relieved',          jp: '安堵の微笑み',                category: 'Mouth / 口' },
    { id: 'soft-pout-shy',           jp: '照れむくれ・やわら',          category: 'Mouth / 口' },
    { id: 'mouth-open-whisper',      jp: '口開き・ささやき',            category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'tender-pride',            jp: 'やさしい誇り',                category: 'Emotion / 感情' },
    { id: 'quiet-joy',               jp: '静かな喜び',                  category: 'Emotion / 感情' },
    { id: 'fragile-courage',         jp: 'かすかな勇気',                category: 'Emotion / 感情' },
    { id: 'melting-affection',       jp: 'とろける親愛',                category: 'Emotion / 感情' },

    // State / 状態
    { id: 'composed-bright',         jp: '明るい平静',                  category: 'State / 状態' },
    { id: 'hesitant',                jp: 'ためらい',                    category: 'State / 状態' },
    { id: 'buoyant',                 jp: '浮き立つ',                    category: 'State / 状態' }
  ];

  // ========== Effects 追加（最終拡張） ==========
  const effects = [
    // Light / 光
    { id: 'edge-halo-soft',          jp: '縁ハロー・柔',                category: 'Light / 光' },
    { id: 'kisslight-dual',          jp: 'デュアル・キスライト',        category: 'Light / 光' },
    { id: 'inner-bloom-warm',        jp: '内側ブルーム・暖',            category: 'Light / 光' },
    { id: 'backline-neon-soft',      jp: '背面ライン・ソフトネオン',    category: 'Light / 光' },

    // Lines / 線
    { id: 'lace-lines',              jp: 'レース線',                    category: 'Lines / 線' },
    { id: 'tension-threads',         jp: '緊張の糸線',                  category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'glow-petals',             jp: '光る花弁',                    category: 'Particles / 粒子' },
    { id: 'soft-spark-mist',         jp: '柔スパーク霧',                category: 'Particles / 粒子' },
    { id: 'star-confetti',           jp: '星の紙吹雪',                  category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'haze-sunbeam',            jp: '霞に差す光条',                category: 'Weather / 天候' },
    { id: 'drift-spark-snow',        jp: 'きら雪の漂い',                category: 'Weather / 天候' },

    // VFX / その他
    { id: 'soft-vignette-frame',     jp: 'ソフトビネット枠',            category: 'VFX / その他' },
    { id: 'film-bloom-grain',        jp: 'フィルム・ブルーム粒',        category: 'VFX / その他' },
    { id: 'subtle-zoom-frame',       jp: '微ズーム枠',                  category: 'VFX / その他' }
  ];

  // ========== Presets 追加（表情＋エフェクト混合） ==========
  const presets = [
    {
      id: 'Relieved-InnerWarm',
      label: '安堵・内側の暖ブルーム',
      expressions: ['smile-relieved','half-lidded-glow','brow-arc-relief','quiet-joy'],
      effects: ['inner-bloom-warm','edge-halo-soft','soft-vignette-frame']
    },
    {
      id: 'TenderPride-SunHaze',
      label: 'やさしい誇り・霞の光条',
      expressions: ['tender-pride','stare-determined-soft','brow-flat-steady'],
      effects: ['haze-sunbeam','film-bloom-grain','backline-neon-soft']
    },
    {
      id: 'MeltingAffection-Petals',
      label: 'とろけ親愛・光る花弁',
      expressions: ['melting-affection','side-eye-softsmile','soft-pout-shy'],
      effects: ['glow-petals','lace-lines','edge-halo-soft']
    },
    {
      id: 'FragileCourage-KissDual',
      label: 'かすかな勇気・デュアルキス',
      expressions: ['fragile-courage','gaze-up-curved','mouth-open-whisper','hesitant'],
      effects: ['kisslight-dual','tension-threads','subtle-zoom-frame']
    },
    {
      id: 'Buoyant-StarConfetti',
      label: '浮き立つ・星紙吹雪',
      expressions: ['buoyant','eye-gleam-tear','smile-relieved','composed-bright'],
      effects: ['star-confetti','backline-neon-soft','soft-spark-mist']
    },
    {
      id: 'QuietJoy-SparkSnow',
      label: '静かな喜び・きら雪',
      expressions: ['quiet-joy','stare-determined-soft','brow-arc-relief'],
      effects: ['drift-spark-snow','soft-vignette-frame','film-bloom-grain']
    }
  ];

  g.expressionEffects["part20"] = { expressions, effects, presets };
})(window);