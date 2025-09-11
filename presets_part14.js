/* presets_part14.js — from part14 (presets only) */
(function (w) {
  w.__registerPresetPart = w.__registerPresetPart || function(){};
  const toTags = (p) => {
    const ex = Array.isArray(p.expressions) ? p.expressions : [];
    const ef = Array.isArray(p.effects) ? p.effects : [];
    return [...ex, ...ef];
  };

  const sourcePresets = [
    {
      id: 'Exuberant-Starlight',
      label: '快活・星屑きらめき',
      expressions: ['exuberant','starlit-eyes','smirk-playful'],
      effects: ['stardust-sparkle','starlight-dust','spiral-focus']
    },
    {
      id: 'Sorrow-Moonbeam',
      label: '悲哀・月光',
      expressions: ['sorrow-deep','shadowed-eyes','grit-teeth'],
      effects: ['moonbeam','haze-light','ember-drifts']
    },
    {
      id: 'Awe-Fracture',
      label: '畏怖・割れガラス',
      expressions: ['awe-struck','wide-glisten','brow-elegant-arch'],
      effects: ['fractured-glass','burst-lines','neon-glow']
    },
    {
      id: 'Bashful-Dream',
      label: 'はにかみ・夢フィルター',
      expressions: ['bashful-soft','flutter-blink','lighthearted'],
      effects: ['dream-filter','drizzle-soft','lensflare-thin']
    },
    {
      id: 'Haunted-Ember',
      label: '取り憑かれ・残り火',
      expressions: ['haunted','anticipation','open-shock'],
      effects: ['ember-drifts','neon-glow','spiral-focus']
    },
    {
      id: 'Wistful-SoftHaze',
      label: '物思い・霞',
      expressions: ['wistful-glance','brow-pressed-flat','smile-corner-up'],
      effects: ['haze-light','moonbeam','starlight-dust']
    }
  ];

  const presets = sourcePresets.map(p => ({
    id: p.id,
    label: p.label,
    tags: toTags(p)
  }));

  w.__registerPresetPart('presets_part14', { presets });
})(window);