/* ============================================
   Flame / Ember Heart Pack — part57.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情：炎・熱トーン）===
  const expr = [
    { id:'fierce-smirk-ember',   label:'鋭いニヤリ・熾火 / fierce smirk (ember)' },
    { id:'warm-gleam-eyes',      label:'温かな輝きの眼 / warm gleam eyes' },
    { id:'flushed-determined',   label:'紅潮・決意 / flushed & determined' },
    { id:'fiery-tear',           label:'炎の涙 / fiery tear' },
    { id:'playful-heat-wink',    label:'戯れ・熱のウィンク / playful heat wink' }
  ];

  // === Effects（エフェクト：ハート（炎・熾火））===
  const eff = [
    { id:'flame-heart-aura',     label:'フレイムハート・オーラ / flame heart aura' },
    { id:'ember-heart-sparks',   label:'熾火ハート火花 / ember heart sparks' },
    { id:'blazing-heart-trail',  label:'灼熱ハート軌跡 / blazing heart trail' },
    { id:'molten-heart-glow',    label:'溶融ハート輝き / molten heart glow' },
    { id:'smoke-heart-ribbons',  label:'煙のハート帯 / smoke heart ribbons' },
    { id:'scorching-vignette',   label:'焦げビネット / scorching vignette' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Ember-Surge',
      label:'熾火の奔流・ハート火花',
      tags:[
        'fierce-smirk-ember','ember-heart-sparks','flame-heart-aura','scorching-vignette'
      ]
    },
    {
      id:'Warm-Resolve',
      label:'温かな決意・溶融の輝き',
      tags:[
        'flushed-determined','molten-heart-glow','blazing-heart-trail'
      ]
    },
    {
      id:'Blazing-Rush',
      label:'灼熱の疾走・ハート軌跡',
      tags:[
        'warm-gleam-eyes','blazing-heart-trail','flame-heart-aura'
      ]
    },
    {
      id:'Smoldering-Gaze',
      label:'燻る視線・煙の帯',
      tags:[
        'fiery-tear','smoke-heart-ribbons','ember-heart-sparks'
      ]
    },
    {
      id:'Playful-Spark-Hearts',
      label:'戯れ火花・ハートのきらめき',
      tags:[
        'playful-heat-wink','ember-heart-sparks','molten-heart-glow'
      ]
    }
  ];

  register('part57',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Flame / Ember）', items: eff }
    ],
    presets
  });
})(window);