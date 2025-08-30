/* ============================================
   Botanical Heart Pack — part44.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'verdant-heart-gaze',   label:'芽吹きハートの眼差し / verdant heart gaze' },
    { id:'bloom-heart-smile',    label:'開花ハート微笑み / bloom heart smile' },
    { id:'petal-soft-blush',     label:'花びらソフト頬染め / petal soft blush' }
  ];

  const eff = [
    { id:'vine-heart-frame',       label:'蔦ハートフレーム / vine heart frame' },
    { id:'petal-heart-drift',      label:'花弁ハートの漂い / petal heart drift' },
    { id:'dew-heart-bokeh',        label:'露ハートボケ / dew heart bokeh' },
    { id:'leafy-heart-halo',       label:'葉のハートハロー / leafy heart halo' }
  ];

  const presets = [
    {
      id:'Blooming-Vines',
      label:'花咲く蔦ハート',
      tags:[
        'bloom-heart-smile','petal-soft-blush','vine-heart-frame','petal-heart-drift'
      ]
    },
    {
      id:'Dewy-Serenity',
      label:'露の静謐ハート',
      tags:[
        'verdant-heart-gaze','dew-heart-bokeh','leafy-heart-halo','petal-heart-drift'
      ]
    },
    {
      id:'Garden-Glow',
      label:'庭園グロウ・ハート',
      tags:[
        'bloom-heart-smile','leafy-heart-halo','vine-heart-frame','dew-heart-bokeh'
      ]
    }
  ];

  register('part44',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Botanical）', items: eff }
    ],
    presets
  });
})(window);