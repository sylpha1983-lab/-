/* ============================================
   presets_part20.js  (from part20.js)
   - register: window.__registerPresetPart('presets_part20', { presets })
   ============================================ */
(function (g) {
  const presets = [
    {
      id: 'Relieved-InnerWarm',
      label: '安堵・内側の暖ブルーム',
      tags: ['smile-relieved','half-lidded-glow','brow-arc-relief','quiet-joy','inner-bloom-warm','edge-halo-soft','soft-vignette-frame']
    },
    {
      id: 'TenderPride-SunHaze',
      label: 'やさしい誇り・霞の光条',
      tags: ['tender-pride','stare-determined-soft','brow-flat-steady','haze-sunbeam','film-bloom-grain','backline-neon-soft']
    },
    {
      id: 'MeltingAffection-Petals',
      label: 'とろけ親愛・光る花弁',
      tags: ['melting-affection','side-eye-softsmile','soft-pout-shy','glow-petals','lace-lines','edge-halo-soft']
    },
    {
      id: 'FragileCourage-KissDual',
      label: 'かすかな勇気・デュアルキス',
      tags: ['fragile-courage','gaze-up-curved','mouth-open-whisper','hesitant','kisslight-dual','tension-threads','subtle-zoom-frame']
    },
    {
      id: 'Buoyant-StarConfetti',
      label: '浮き立つ・星紙吹雪',
      tags: ['buoyant','eye-gleam-tear','smile-relieved','composed-bright','star-confetti','backline-neon-soft','soft-spark-mist']
    },
    {
      id: 'QuietJoy-SparkSnow',
      label: '静かな喜び・きら雪',
      tags: ['quiet-joy','stare-determined-soft','brow-arc-relief','drift-spark-snow','soft-vignette-frame','film-bloom-grain']
    }
  ];

  // register
  if (typeof g.__registerPresetPart === 'function') {
    g.__registerPresetPart('presets_part20', { presets });
  } else {
    g.__parts = g.__parts || {};
    g.__parts.presets = g.__parts.presets || {};
    g.__parts.presets['presets_part20'] = { presets };
  }
})(window);