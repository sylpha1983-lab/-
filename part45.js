/* ============================================
   Tearful Heart Pack — part45.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'teary-heart-eyes',     label:'涙ハートアイ / teary heart eyes' },
    { id:'quiver-lip-heart',     label:'震えるくちびる＋ハート / quivering lip (heart)' },
    { id:'soft-sob-smile',       label:'泣き笑い（ハート）/ soft sob smile (heart)' },
    { id:'glassy-gaze-heart',    label:'うるみ視線（ハート）/ glassy gaze (heart)' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'falling-heart-tears',   label:'こぼれるハートの涙 / falling heart tears' },
    { id:'heart-dew-sparkle',     label:'涙粒ハートのきらめき / heart dew sparkle' },
    { id:'pink-haze-heart',       label:'ピンクの涙靄ハート / pink haze (heart)' },
    { id:'background-tear-heart', label:'背景：涙のハートヴェール / background tear-heart veil' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Tearful-Heart-Veil',
      label:'涙のハートヴェール',
      tags:[
        'teary-heart-eyes',
        'falling-heart-tears',
        'heart-dew-sparkle',
        'background-tear-heart',
        'pink-haze-heart'
      ]
    },
    {
      id:'Quiver-SoftSobs',
      label:'震える泣き笑い・ハート',
      tags:[
        'quiver-lip-heart',
        'soft-sob-smile',
        'teary-heart-eyes',
        'heart-dew-sparkle'
      ]
    },
    {
      id:'GlassyGaze-Drizzle',
      label:'うるみ視線・涙のハート霧',
      tags:[
        'glassy-gaze-heart',
        'falling-heart-tears',
        'pink-haze-heart'
      ]
    }
  ];

  register('part45',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Tearful）', items: eff }
    ],
    presets
  });
})(window);