/* presets_part4.js (from part4.js) — UMD register, presets only */
(function (g) {
  // 「expressions/effects」を統合して tags に
  const presets = [
    {
      id: 'Starry-Cheerful',
      label: '星のきらめき朗らか',
      tags: ['cheerful','sparkle-eyes-star','open-smile','halo-light-soft','petals-sakura']
    },
    {
      id: 'Determined-Rain',
      label: '決意の雨',
      tags: ['determined','gritted-teeth','slanted-brow-angry','rain-heavy','motion-lines-drama']
    },
    {
      id: 'Daydreaming-Moonlight',
      label: '夢想の月光',
      tags: ['daydreaming','soft-smile','narrow-eyes-warm','moonlight-filter','leaves-falling','glow-pulse']
    },
    {
      id: 'Playful-Ghost',
      label: '遊び心のゴースト',
      tags: ['mischievous','tongue-peek','arched-brow-playful','ghost-trail','sparkle-dust-fine']
    },
    {
      id: 'Shaken-Crack',
      label: '動揺の亀裂',
      tags: ['shaken','soft-pout','stare-blank','screen-crack','impact-lines-flare']
    }
  ];

  const data = { categories: [], presets };
  (g.__registerPresetPart || function(name, d){
    g.__parts = g.__parts || {faith:{},background:{},effect:{},pose:{},hair:{},presets:{}};
    g.__parts.presets = g.__parts.presets || {};
    const idx = 4; g.__parts.presets[idx] = d;
  })('presets_part4', data);
})(window);