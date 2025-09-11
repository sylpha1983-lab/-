<!-- save as: faith_part40.js -->
(function(g){
  const register = g.__registerPromptPart || function(id, data){
    g.__parts = g.__parts || { faith:{} };
    g.__parts.faith[id] = data;
  };

  const expr = [
    { id:'fae-heart-eyes',         label:'妖精・ハートアイ / fae heart eyes' },
    { id:'arcane-heart-smile',     label:'秘術・ハートスマイル / arcane heart smile' },
    { id:'myth-heart-gaze',        label:'神話・ハート視線 / myth heart gaze' },
    { id:'enchanted-heart-blush',  label:'魔魅・ハート頬染め / enchanted heart blush' }
  ];

  register('faith_part40',{
    categories:[ { name:'Expressions / 表情', items: expr } ],
    presets:[]
  });
})(window);