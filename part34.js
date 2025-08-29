/* ============================================
   Melancholy Heart Pack — part34.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'heart-sigh-eyes',          label:'ため息ハートアイ / sighing heart eyes' },
    { id:'downcast-heart-gaze',      label:'伏し目・ハートの影 / downcast heart gaze' },
    { id:'wistful-heart-smile',      label:'物憂げハート微笑み / wistful heart smile' },
    { id:'tremble-heart-lips',       label:'ふるえる唇・ハート / trembling heart lips' },
    { id:'tearline-heart',           label:'涙縁・ハート / teary heart rim' },
    { id:'lonely-heart-blush',       label:'孤独の頬染め・ハート / lonely heart blush' }
  ];

  const eff = [
    // Light
    { id:'pale-heart-glow',          label:'淡いハート光 / pale heart glow' },
    { id:'moonlit-heart-bloom',      label:'月明かりハートブルーム / moonlit heart bloom' },
    // Particles
    { id:'drifting-heart-motes',     label:'漂うハート塵 / drifting heart motes' },
    { id:'soft-rain-heart',          label:'小雨×ハート粒 / soft rain (hearts)' },
    // VFX
    { id:'faded-heart-vignette',     label:'色褪せハート・ビネット / faded heart vignette' },
    { id:'cracked-heart-overlay',    label:'ひび割れハート・オーバレイ / cracked heart overlay' }
  ];

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

  register('part34',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Melancholy）', items: eff }
    ],
    presets
  });
})(window);