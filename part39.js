/* ============================================
   Galaxy Heart Pack — part39.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'starlit-heart-eyes',       label:'星明かり・ハートアイ / starlit heart eyes' },
    { id:'cosmic-heart-smile',       label:'宇宙・ハートスマイル / cosmic heart smile' },
    { id:'nebula-heart-gaze',        label:'星雲・ハート視線 / nebula heart gaze' },
    { id:'supernova-heart-blush',    label:'超新星・ハート頬染め / supernova heart blush' }
  ];

  const eff = [
    { id:'galaxy-heart-dust',        label:'銀河塵×ハート / galaxy heart dust' },
    { id:'nebula-heart-cloud',       label:'星雲雲×ハート / nebula heart cloud' },
    { id:'starlight-heart-glow',     label:'星光・ハート輝き / starlight heart glow' },
    { id:'blackhole-heart-vortex',   label:'ブラックホール×ハート渦 / blackhole heart vortex' }
  ];

  const presets = [
    {
      id:'NebulaDreams-Heart',
      label:'星雲ドリーム・ハート',
      tags:[
        'nebula-heart-gaze','cosmic-heart-smile',
        'nebula-heart-cloud','galaxy-heart-dust','starlight-heart-glow'
      ]
    },
    {
      id:'Supernova-Embrace',
      label:'超新星の抱擁',
      tags:[
        'supernova-heart-blush','starlit-heart-eyes',
        'starlight-heart-glow','galaxy-heart-dust'
      ]
    },
    {
      id:'CosmicVortex-Gaze',
      label:'宇宙渦の視線',
      tags:[
        'cosmic-heart-smile','nebula-heart-gaze',
        'blackhole-heart-vortex','starlight-heart-glow'
      ]
    }
  ];

  register('part39',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Galaxy）', items: eff }
    ],
    presets
  });
})(window);