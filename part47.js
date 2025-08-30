/* ============================================
   Flame / Ember Heart Pack — part47.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'fiery-resolve',        label:'炎の決意 / fiery resolve' },
    { id:'ember-smirk',          label:'燠火のニヤリ / ember smirk' },
    { id:'heated-blush',         label:'熱紅潮 / heated blush' },
    { id:'spark-tear',           label:'火花の涙 / spark tear' },
    { id:'ardent-gaze',          label:'熱っぽい視線 / ardent gaze' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'flame-heart-aura',     label:'炎心オーラ / flame heart aura' },
    { id:'ember-drift-hearts',   label:'燠火の漂い・ハート / ember drift hearts' },
    { id:'cinder-spark-rain',    label:'火の粉雨（ハート混じり） / cinder spark rain (hearts)' },
    { id:'scorch-halo-heart',    label:'焦熱ハート・ハロー / scorch halo (heart)' },
    { id:'heat-distort-heart',   label:'陽炎歪み・ハート / heat distortion hearts' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Blazing-Confession',
      label:'燃える告白',
      tags: ['ardent-gaze','heated-blush','flame-heart-aura','cinder-spark-rain']
    },
    {
      id:'Ember-Resolve',
      label:'燠火の決意',
      tags: ['fiery-resolve','ember-smirk','scorch-halo-heart','ember-drift-hearts']
    },
    {
      id:'Heat-Haze-Tears',
      label:'陽炎と涙',
      tags: ['spark-tear','heat-distort-heart','flame-heart-aura']
    }
  ];

  register('part47',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Flame/Ember）', items: eff }
    ],
    presets
  });
})(window);