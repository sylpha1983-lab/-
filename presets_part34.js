/* presets_part34.js (from part34.js / Presets only) */
// [CHANGE] part34.js のプリセットを単独で登録（tags = id 群）
(function (g) {
  const register = g.__registerPresetPart || function (id, data) {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const presets = [
    {
      id:'Melancholy-HeartRain',
      label:'切ない雨・ハート',
      tags:[
        'downcast-heart-gaze','tremble-heart-lips','tearline-heart',
        'soft-rain-heart','pale-heart-glow','faded-heart-vignette'
      ]
    },
    {
      id:'Moonlit-WistfulBloom',
      label:'月明かり・物憂げブルーム',
      tags:[
        'wistful-heart-smile','lonely-heart-blush','heart-sigh-eyes',
        'moonlit-heart-bloom','drifting-heart-motes','faded-heart-vignette'
      ]
    },
    {
      id:'Cracked-QuietConfess',
      label:'ひび割れの静告白',
      tags:[
        'tremble-heart-lips','downcast-heart-gaze',
        'cracked-heart-overlay','pale-heart-glow','drifting-heart-motes'
      ]
    }
  ];

  register('presets_part34', {
    categories: [],
    presets
  });
})(window);