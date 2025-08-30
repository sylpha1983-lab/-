/* ============================================
   Radiant Heart Pack — part47.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'soft-radiant-smile',       label:'柔ら発光スマイル / soft radiant smile' },
    { id:'glow-kissed-gaze',         label:'発光の口づけ視線 / glow-kissed gaze' },
    { id:'dazzled-heart-eyes',       label:'眩しハートアイ / dazzled heart eyes' },
    { id:'warm-hopeful-look',        label:'あたたか希望の眼差し / warm hopeful look' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'heart-radiance-ring',      label:'ハート放射リング / heart radiance ring' },
    { id:'prismatic-heart-bloom',    label:'プリズム発光ハートブルーム / prismatic heart bloom' },
    { id:'halo-rim-heart',           label:'ハート光輪（リム）/ halo rim heart' },
    { id:'volumetric-heart-beams',   label:'ボリューム光・ハートビーム / volumetric heart beams' },
    { id:'soft-heart-bokeh',         label:'ソフト・ハートボケ / soft heart bokeh' },
    { id:'warm-gradient-glow',       label:'暖色グラデ発光 / warm gradient glow' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Radiant-Embrace',
      label:'レイディアント・エンブレイス',
      tags:[
        'soft-radiant-smile',
        'prismatic-heart-bloom',
        'heart-radiance-ring',
        'warm-gradient-glow',
        'soft-heart-bokeh'
      ]
    },
    {
      id:'Dazzled-Gaze-Halo',
      label:'眩し視線・ハート光輪',
      tags:[
        'dazzled-heart-eyes',
        'halo-rim-heart',
        'volumetric-heart-beams',
        'soft-heart-bokeh'
      ]
    },
    {
      id:'Glow-Kissed-Moment',
      label:'発光の口づけモーメント',
      tags:[
        'glow-kissed-gaze',
        'prismatic-heart-bloom',
        'warm-gradient-glow'
      ]
    },
    {
      id:'Hopeful-Radiance',
      label:'希望の発光',
      tags:[
        'warm-hopeful-look',
        'heart-radiance-ring',
        'soft-heart-bokeh'
      ]
    }
  ];

  register('part47',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Radiant）', items: eff }
    ],
    presets
  });
})(window);