/* ============================================
   presets_part29.js v1.0 (2025-09-10)
   Source: part29.js（雷・嵐）からプリセットのみ分離
   ============================================ */
(function (g) {
  const presets = [
    {
      id: 'Lightning-Resolve',
      label: '稲妻の決意',
      tags: [
        'storm-focus','forked-lightning','strobe-flash',
        'wet-rim-gloss','bg-storm-skyline','slick-asphalt'
      ]
    },
    {
      id: 'Tempest-Awe',
      label: '嵐への畏怖',
      tags: [
        'awe-struck','sheet-lightning','downpour-mist',
        'backlit-silhouette','anvil-clouds','rain-soaked-fabric'
      ]
    },
    {
      id: 'Gust-Thrill',
      label: '突風のスリル',
      tags: [
        'thrill-charged','wind-gust-trails','puddle-splash',
        'split-light-storm','wet-bokeh','bg-coast-tempest'
      ]
    },
    {
      id: 'Calm-Before-Strike',
      label: '落雷前の静寂',
      tags: [
        'calm-in-tempest','mammatus-clouds','horizon-strike',
        'high-contrast','beaded-metal','bg-mountain-tempest'
      ]
    },
    {
      id: 'Storm-Focus-Runner',
      label: '嵐に向かう者',
      tags: [
        'storm-focus','rain-streaks','downpour-mist',
        'strobe-flash','wet-rim-gloss','slick-asphalt'
      ]
    }
  ];

  const data = { presets };
  if (typeof g.__registerPresetPart === 'function') g.__registerPresetPart('29', data);
  g.__parts = g.__parts || {}; g.__parts.presets = g.__parts.presets || {}; g.__parts.presets[29] = data;
})(window);

export default {};