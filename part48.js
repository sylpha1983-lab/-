/* ============================================
   Nebula Heart Pack — part48.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'starry-heart-eyes',        label:'星屑ハートアイ / starry heart eyes' },
    { id:'nebula-drift-smile',       label:'星雲漂う微笑み / nebula drift smile' },
    { id:'cosmic-awe-gaze',          label:'宇宙への畏敬の眼差し / cosmic awe gaze' },
    { id:'dreamy-comet-blink',       label:'夢見彗星まばたき / dreamy comet blink' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'nebula-heart-mist',        label:'星雲ハート霧 / nebula heart mist' },
    { id:'starlit-heart-dust',       label:'星明かりハートダスト / starlit heart dust' },
    { id:'aurora-heart-veil',        label:'オーロラ・ハートヴェール / aurora heart veil' },
    { id:'galactic-heart-swirls',    label:'銀河スワール・ハート / galactic heart swirls' },
    { id:'deep-space-glow',          label:'深宇宙グロウ / deep space glow' },
    { id:'constellation-heart-lines',label:'星座線・ハート連結 / constellation heart lines' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Nebula-Whisper',
      label:'星雲のささやき',
      tags:[
        'nebula-drift-smile',
        'nebula-heart-mist',
        'deep-space-glow',
        'starlit-heart-dust'
      ]
    },
    {
      id:'Cosmic-Awe-Constellation',
      label:'宇宙畏敬・星座ハート',
      tags:[
        'cosmic-awe-gaze',
        'constellation-heart-lines',
        'galactic-heart-swirls',
        'deep-space-glow'
      ]
    },
    {
      id:'Aurora-Heart-Dream',
      label:'オーロラ・ハートドリーム',
      tags:[
        'dreamy-comet-blink',
        'aurora-heart-veil',
        'starlit-heart-dust'
      ]
    },
    {
      id:'Starry-Eyes-Nebula',
      label:'星屑アイ・星雲ヴェール',
      tags:[
        'starry-heart-eyes',
        'nebula-heart-mist',
        'aurora-heart-veil'
      ]
    }
  ];

  register('part48',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Nebula）', items: eff }
    ],
    presets
  });
})(window);