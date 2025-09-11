/* ============================================
   presets_part27.js  (from part27.js)
   Split: Presets-only (tags = expressions + effects)
   ============================================ */
(function (g) {
  g.__registerPresetPart = g.__registerPresetPart || function(name, data){
    g.__parts = g.__parts || {};
    g.__parts.presets = g.__parts.presets || {};
    g.__parts.presets[name] = data;
  };

  const presets = [
    {
      id: 'Flame-Warrior',
      label: '炎の戦士',
      tags: [
        'fiery-determination','blaze-rage',
        'fire-aura','heat-haze','orange-backlight','bg-flame-pattern'
      ]
    },
    {
      id: 'Candle-Warmth',
      label: 'キャンドルの暖かさ',
      tags: [
        'warm-smile',
        'candle-softlight','smoke-curl','bonfire-glow','charcoal','bg-ash-cloud'
      ]
    },
    {
      id: 'Inferno-Fury',
      label: '業火の憤怒',
      tags: [
        'blaze-rage',
        'inferno-surge','phoenix-flare','molten-reflect','bg-cracked-earth','molten-metal'
      ]
    },
    {
      id: 'Smolder-Sadness',
      label: '燻る悲しみ',
      tags: [
        'smoldering-sadness','ember-gaze',
        'ember-drifts-strong','charred-glow','burnt-wood','bg-ash-cloud'
      ]
    },
    {
      id: 'Phoenix-Rebirth',
      label: '不死鳥の再生',
      tags: [
        'flame-exhilaration',
        'flame-wings','phoenix-flare','orange-backlight','bg-flame-pattern','molten-metal'
      ]
    }
  ];

  g.__registerPresetPart('presets_part27', { presets });
})(window);