/* presets_part42.js — split from part43 (Presets) */
(function (g) {
  const id = 'presets_part42';
  const data = {
    presets: [
      {
        id: 'Winged-Hearts-Flight',
        label: '翼ハートの飛翔',
        tags: ['winged-hearts','airflow-heart-trails','sky-breeze-heart-glow']
      },
      {
        id: 'Feather-Sparkle-Grin',
        label: '羽きらめき・微笑',
        tags: ['breezy-heart-smile','feather-heart-sparkles','winged-hearts']
      },
      {
        id: 'Lighthearted-Skyline',
        label: '軽やかスカイライン',
        tags: ['lighthearted-chuckle','uplifted-heart-look','airflow-heart-trails','sky-breeze-heart-glow']
      }
    ]
  };
  (g.__registerPresetPart ? g.__registerPresetPart : (x,y)=>{ g.presetBuilder=g.presetBuilder||{}; g.presetBuilder[x]=y; })(id, data);
})(window);