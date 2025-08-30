/* ============================================
   Romance Heart Pack — part41.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'soft-heart-eyes',     label:'やわらかハートアイ / soft heart eyes' },
    { id:'shy-heart-smile',     label:'照れハート微笑み / shy heart smile' },
    { id:'fluttering-blush',    label:'ときめき頬染め / fluttering blush' },
    { id:'warm-gaze-heart',     label:'あたたかいハート視線 / warm hearted gaze' }
  ];

  const eff = [
    { id:'heart-petals',            label:'ハート花弁 / heart petals' },
    { id:'soft-heart-glow',         label:'やわらハート光 / soft heart glow' },
    { id:'gentle-heart-bokeh',      label:'やさしいハートボケ / gentle heart bokeh' },
    { id:'background-heart-veil',   label:'背景ハートヴェール / background heart veil' }
  ];

  const presets = [
    {
      id:'Romance-SoftGlow',
      label:'ロマンス・ソフトグロー',
      tags:[
        'soft-heart-eyes','shy-heart-smile','soft-heart-glow','gentle-heart-bokeh'
      ]
    },
    {
      id:'WarmGaze-Petals',
      label:'あたたか視線・花弁',
      tags:[
        'warm-gaze-heart','fluttering-blush','heart-petals','background-heart-veil'
      ]
    },
    {
      id:'ShySmile-Bokeh',
      label:'照れ笑み・ハートボケ',
      tags:[
        'shy-heart-smile','fluttering-blush','gentle-heart-bokeh','soft-heart-glow'
      ]
    }
  ];

  register('part41',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Romance）', items: eff }
    ],
    presets
  });
})(window);