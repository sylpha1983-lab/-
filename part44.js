/* ============================================
   Exploding Heart Pack — part44.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions ===
  const expr = [
    { id:'shock-heart-eyes',     label:'驚愕ハートアイ / shock heart eyes' },
    { id:'burst-heart-smile',    label:'弾けるハート笑み / burst heart smile' },
    { id:'explosion-blush',      label:'爆発ハート頬染め / explosion blush' }
  ];

  // === Effects ===
  const eff = [
    { id:'exploding-heart-particles', label:'破裂ハート粒子 / exploding heart particles' },
    { id:'shattered-hearts',          label:'砕け散るハート / shattered hearts' },
    { id:'heartburst-flare',          label:'ハートバースト光芒 / heartburst flare' },
    { id:'background-heart-explosion',label:'背景ハート爆発 / background heart explosion' }
  ];

  // === Presets ===
  const presets = [
    {
      id:'ExplodingHearts-Aura',
      label:'破裂ハート・オーラ',
      tags:[
        'exploding-heart-particles',
        'shattered-hearts',
        'heartburst-flare',
        'background-heart-explosion'
      ]
    },
    {
      id:'ShockBurst-Gaze',
      label:'驚愕のハート視線',
      tags:[
        'shock-heart-eyes',
        'burst-heart-smile',
        'exploding-heart-particles',
        'heartburst-flare'
      ]
    },
    {
      id:'Heartbreak-Flare',
      label:'ハートブレイク・閃光',
      tags:[
        'explosion-blush',
        'shattered-hearts',
        'background-heart-explosion'
      ]
    }
  ];

  register('part44',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Exploding）', items: eff }
    ],
    presets
  });
})(window);