<!-- save as: presets_part41.js -->
(function(g){
  const register = g.__registerPresetPart || function(id, data){
    g.__parts = g.__parts || { presets:{} };
    g.__parts.presets[id] = data;
  };

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

  register('presets_part41',{
    categories:[], // プリセット専用
    presets
  });
})(window);