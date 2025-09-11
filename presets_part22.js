/* ================================
 * presets_part22.js  v1.0
 * 変換元: part22.js の presets
 * 登録: window.__registerPresetPart('presets_part22', data)
 * ================================ */
(function (w) {
  // 元プリセットは expressions/effects を参照していたので
  // 新形式の tags に統合（id をそのまま列挙）
  const presets = [
    {
      id: 'Romance-HeartBokehWide',
      label: 'ロマンス：ハートボケWide / Romance-HeartBokehWide',
      tags: ['love-struck-calm','smile-heart-tilt-plus','brow-soft-adoring','heart-bokeh-wide','soft-heart-vignette','rim-heart-kicker']
    },
    {
      id: 'Cute-HeartSparkMist',
      label: 'キュート：ハートスパーク霧 / Cute-HeartSparkMist',
      tags: ['shy-heart-rosy','wink-heart-soft-alt','pupils-heart-twinkle','heart-spark-mist','heart-orb-field','heart-bokeh-mini']
    },
    {
      id: 'Valentine-ConfettiPlus',
      label: 'バレンタイン：紙吹雪+ / Valentine-ConfettiPlus',
      tags: ['affection-bright-plus','smile-heart-tilt-plus','fluttery-heart','heart-confetti-plus','heart-overlay-depth','petals-heart-mix']
    },
    {
      id: 'Neon-HeartGlowPro',
      label: 'ネオン・ハートGlow Pro / Neon-HeartGlowPro',
      tags: ['gaze-heart-distant','devoted-gentle','neon-heart-outline-pro','backlit-heart-halo','double-exposure-heart']
    },
    {
      id: 'ECG-DramaLine',
      label: 'ドラマ：心電図ライン / ECG-DramaLine',
      tags: ['resolute-kind-heart','fond-teary-heart','heartbeat-ecg-line','heart-trail-comet','haze-heart-sunbeam']
    },
    {
      id: 'Balloon-SoftRomance',
      label: 'バルーン・ソフトロマンス / Balloon-SoftRomance',
      tags: ['serene-heart-aura','kiss-blow-heart','balloon-heart-float','heart-light-leak','sticker-heart-pack']
    },
    {
      id: 'PixelHUD-Love',
      label: 'ピクセルHUD・ラブ / PixelHUD-Love',
      tags: ['buoyant-heart-lite','wink-heart-soft-alt','pixel-heart-hud','handdrawn-heart-scribble','glitter-heart-dust']
    }
  ];

  const data = { categories: [], presets };
  (w.__registerPresetPart || function(){ console.warn('registerPreset missing'); })( 'presets_part22', data );
})(window);