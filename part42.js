/* ============================================
   Fantasy Heart Pack — part42.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'fae-heart-eyes',         label:'妖精・ハートアイ / fae heart eyes' },
    { id:'arcane-heart-smile',     label:'秘術・ハートスマイル / arcane heart smile' },
    { id:'myth-heart-gaze',        label:'神話・ハート視線 / myth heart gaze' },
    { id:'enchanted-heart-blush',  label:'魔魅・ハート頬染め / enchanted heart blush' }
  ];

  const eff = [
    { id:'rune-heart-glow',        label:'ルーン・ハート発光 / rune heart glow' },
    { id:'fairy-heart-dust',       label:'妖精粉×ハート / fairy heart dust' },
    { id:'portal-heart-ring',      label:'ポータル・ハートリング / portal heart ring' },
    { id:'spell-heart-sigil',      label:'呪文・ハート印章 / spell heart sigil' }
  ];

  const presets = [
    {
      id:'Enchanted-RuneDust',
      label:'魔魅の符光',
      tags:[
        'enchanted-heart-blush','fae-heart-eyes',
        'rune-heart-glow','fairy-heart-dust','spell-heart-sigil'
      ]
    },
    {
      id:'ArcanePortal-Gaze',
      label:'秘術ポータル視線',
      tags:[
        'arcane-heart-smile','myth-heart-gaze',
        'portal-heart-ring','rune-heart-glow'
      ]
    },
    {
      id:'FaeWhisper-Glow',
      label:'妖精の囁き・輝き',
      tags:[
        'fae-heart-eyes','enchanted-heart-blush',
        'fairy-heart-dust','spell-heart-sigil'
      ]
    }
  ];

  register('part42',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Fantasy）', items: eff }
    ],
    presets
  });
})(window);