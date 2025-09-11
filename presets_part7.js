/* presets_part7.js — split from part7.js */
;(function (g) {
  g.__parts = g.__parts || {};
  g.__registerPresetPart = g.__registerPresetPart || function (name, data) {
    g.__parts.presets = g.__parts.presets || {};
    const m = String(name).match(/part(\d+)/); const idx = m ? +m[1] : 1;
    g.__parts.presets[idx] = { presets: Array.isArray(data.presets) ? data.presets : [] };
  };

  // part7 のプリセット（expressions/effects → tags に統合）
  const presets = [
    {
      id: 'Shy-Upglance-Orbit',
      label: 'はにかみ上目遣い・オービット',
      tags: ['upward-glance-shy','smile-peek-tooth','brow-sad-tilt','flushed','sparkle-orbit','face-gloss-spot','vignette-ellipse-soft']
    },
    {
      id: 'Emerald-Serene-Veil',
      label: 'エメラルド安らぎ・ヴェール',
      tags: ['glassy-eyes-emerald','serene','lip-press-soft','bloom-soft-veil','rim-light-aurora','soft-grain-film']
    },
    {
      id: 'Razor-Shade-RingLines',
      label: 'レイザー影・リング集中線',
      tags: ['side-eye-razor-shade','half-lidded-frosty','bemused','impact-lines-ring','screen-tone-radial','lens-ghost-orb']
    },
    {
      id: 'Twinkle-Tease-Rain',
      label: 'きらり挑発・逆光雨',
      tags: ['side-eye-twinkle','tease','pout-mini-tease','rain-backlight','sparkle-dense-plus','rim-light-aurora']
    },
    {
      id: 'Warm-Compose-Noir',
      label: '温もり・穏やかノワール',
      tags: ['half-lidded-warm','composed-soft','smile-catlike','vignette-ellipse-soft','speed-lines-cross','face-gloss-spot']
    },
    {
      id: 'Soft-Teary-Feather',
      label: 'そっと涙・フェザー',
      tags: ['teary-soft','eye-squeeze-smile','longing','bloom-soft-veil','sparkle-dense-plus','under-eye-light-puff']
    }
  ];

  g.__registerPresetPart('presets_part7', { presets });
})(window);