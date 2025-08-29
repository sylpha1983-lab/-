/* ============================================
   Crystal Heart Pack — part37.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'crystal-heart-eyes',       label:'クリスタル・ハートアイ / crystal heart eyes' },
    { id:'prism-heart-smile',        label:'プリズム・ハートスマイル / prism heart smile' },
    { id:'facet-heart-gaze',         label:'多面カット・ハート視線 / faceted heart gaze' },
    { id:'glimmer-heart-blush',      label:'きらめく頬・ハート / glimmer heart blush' }
  ];

  const eff = [
    { id:'shard-heart-sparkle',      label:'破片・ハートスパーク / shard heart sparkle' },
    { id:'rainbow-heart-refraction', label:'虹色屈折・ハート / rainbow heart refraction' },
    { id:'ice-heart-glow',           label:'氷結光・ハート / icy heart glow' },
    { id:'prism-heart-aura',         label:'プリズム・ハートオーラ / prism heart aura' }
  ];

  const presets = [
    {
      id:'Crystal-ShardGleam',
      label:'クリスタル・破片の輝き',
      tags:[
        'crystal-heart-eyes','glimmer-heart-blush',
        'shard-heart-sparkle','rainbow-heart-refraction','prism-heart-aura'
      ]
    },
    {
      id:'IcyPrism-Gaze',
      label:'氷のプリズム視線',
      tags:[
        'facet-heart-gaze','crystal-heart-eyes',
        'ice-heart-glow','prism-heart-aura'
      ]
    },
    {
      id:'RainbowGlimmer-Smile',
      label:'虹彩きらめきスマイル',
      tags:[
        'prism-heart-smile','glimmer-heart-blush',
        'rainbow-heart-refraction','shard-heart-sparkle'
      ]
    }
  ];

  register('part37',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Crystal）', items: eff }
    ],
    presets
  });
})(window);