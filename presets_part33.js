/* presets_part33.js — Heart-themed presets only */
(function (g) {
  const register = g.__registerPresetPart || function (name, data) {
    g.__parts = g.__parts || {};
    g.__parts.presets = g.__parts.presets || {};
    g.__parts.presets[name] = data;
  };

  const presets = [
    {
      id: 'HeartCute-SoftBloom',
      label: 'ハートキュート・やわブルーム',
      tags: [
        'heart-eyes-soft','blush-heart-cheeks','smile-heart-curved',
        'heart-bloom-soft','sparkle-heart-dust','love-pulse-vignette'
      ]
    },
    {
      id: 'Romantic-HeartBokeh',
      label: 'ロマンティック・ハートボケ',
      tags: [
        'gaze-heart-dreamy','wink-heart','kissy-heart-lips',
        'heart-bokeh','love-glow-aura','rim-heart-light'
      ]
    },
    {
      id: 'Confession-CupidSpark',
      label: '告白前・キューピッドスパーク',
      tags: [
        'confession-nervous-heart','tear-joy-heart','pout-heart-shy',
        'cupid-arrow-glint','beam-cupid-soft','heart-frame-soft'
      ]
    },
    {
      id: 'Heartbeat-PetalFloat',
      label: '鼓動×花弁漂い',
      tags: [
        'heart-eyes-sparkle','smile-heart-curved',
        'heart-petals-float','heartbeat-trails','love-glow-aura'
      ]
    },
    {
      id: 'Festival-HeartConfetti',
      label: '祝祭・ハート紙吹雪',
      tags: [
        'wink-heart','blush-heart-cheeks',
        'heart-confetti','heart-bokeh','sparkle-heart-dust'
      ]
    }
  ];

  register('presets_part33', { presets });
})(window);