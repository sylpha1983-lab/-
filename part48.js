/* ============================================
   Ocean / Bubble Heart Pack — part48.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'ripple-smile',         label:'さざ波スマイル / ripple smile' },
    { id:'tide-soft-gaze',       label:'潮のやわ視線 / tide soft gaze' },
    { id:'sea-breeze-blush',     label:'潮風の紅潮 / sea breeze blush' },
    { id:'pearled-tears',        label:'真珠涙 / pearled tears' },
    { id:'drift-dreamy-eyes',    label:'漂う夢目 / drift dreamy eyes' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'bubble-heart-trail',   label:'泡ハートの軌跡 / bubble heart trail' },
    { id:'aqua-heart-glow',      label:'アクア心光 / aqua heart glow' },
    { id:'sea-spray-mist',       label:'海しぶきの霧 / sea spray mist' },
    { id:'light-shaft-undersea', label:'光条（海中） / undersea light shafts' },
    { id:'foam-spark-hearts',    label:'泡沫スパーク・ハート / foam spark hearts' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Bubble-Confession',
      label:'泡ハートの告白',
      tags: ['ripple-smile','aqua-heart-glow','bubble-heart-trail','sea-spray-mist']
    },
    {
      id:'Undersea-Serenity',
      label:'海中の静謐',
      tags: ['tide-soft-gaze','light-shaft-undersea','aqua-heart-glow']
    },
    {
      id:'Pearled-Tear-Dream',
      label:'真珠涙の夢',
      tags: ['pearled-tears','drift-dreamy-eyes','foam-spark-hearts']
    }
  ];

  register('part48',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Ocean/Bubble）', items: eff }
    ],
    presets
  });
})(window);