<!-- save as: effect_part41.js -->
(function(g){
  const register = g.__registerEffectPart || function(id, data){
    g.__parts = g.__parts || { effect:{} };
    g.__parts.effect[id] = data;
  };

  const eff = [
    { id:'rune-heart-glow',        label:'ルーン・ハート発光 / rune heart glow' },
    { id:'fairy-heart-dust',       label:'妖精粉×ハート / fairy heart dust' },
    { id:'portal-heart-ring',      label:'ポータル・ハートリング / portal heart ring' },
    { id:'spell-heart-sigil',      label:'呪文・ハート印章 / spell heart sigil' }
  ];

  register('effect_part41',{
    categories:[ { name:'Effects / エフェクト（Heart: Fantasy）', items: eff } ],
    presets:[]
  });
})(window);