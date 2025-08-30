/* ============================================
   Cosmic Heart Pack — part45.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'stargaze-heart-eyes',   label:'星見ハートアイ / stargaze heart eyes' },
    { id:'nebula-soft-smile',     label:'星雲ソフト微笑み / nebula soft smile' },
    { id:'cosmic-calm',           label:'宇宙の静穏 / cosmic calm' }
  ];

  const eff = [
    { id:'nebula-heart-bloom',      label:'星雲ハートブルーム / nebula heart bloom' },
    { id:'stardust-heart-trails',   label:'星屑ハート軌跡 / stardust heart trails' },
    { id:'galaxy-heart-halo',       label:'銀河ハートハロー / galaxy heart halo' },
    { id:'aurora-heart-veil',       label:'オーロラハートヴェール / aurora heart veil' }
  ];

  const presets = [
    {
      id:'Nebula-Embrace',
      label:'星雲の抱擁ハート',
      tags:[
        'nebula-soft-smile','nebula-heart-bloom','galaxy-heart-halo','stardust-heart-trails'
      ]
    },
    {
      id:'Aurora-Gaze',
      label:'オーロラの眼差し',
      tags:[
        'stargaze-heart-eyes','aurora-heart-veil','stardust-heart-trails','cosmic-calm'
      ]
    },
    {
      id:'Galaxy-Serenity',
      label:'銀河の静けさハート',
      tags:[
        'cosmic-calm','galaxy-heart-halo','nebula-heart-bloom','aurora-heart-veil'
      ]
    }
  ];

  register('part45',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Cosmic）', items: eff }
    ],
    presets
  });
})(window);