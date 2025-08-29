/* ============================================
   Pop & Pixel Heart Pack — part36.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'pixel-heart-eyes',         label:'ピクセル・ハートアイ / pixel heart eyes' },
    { id:'pop-heart-grin',           label:'ポップ・ハートにやり / pop heart grin' },
    { id:'emoji-heart-smile',        label:'絵文字風・ハートスマイル / emoji-like heart smile' },
    { id:'retro-heart-wink',         label:'レトロ・ハートウィンク / retro heart wink' }
  ];

  const eff = [
    // Graphic / Particles
    { id:'pixel-heart-burst',        label:'ピクセル・ハートバースト / pixel heart burst' },
    { id:'pop-heart-stickers',       label:'ポップ・ハートステッカー / pop heart stickers' },
    { id:'neon-heart-outline',       label:'ネオン・ハート縁 / neon heart outline' },
    { id:'8bit-heart-confetti',      label:'8-bit ハート紙吹雪 / 8-bit heart confetti' },
    // VFX
    { id:'scanline-heart-overlay',   label:'スキャンライン×ハート / scanline heart overlay' },
    { id:'comic-heart-dots',         label:'コミック網点×ハート / comic halftone hearts' }
  ];

  const presets = [
    {
      id:'PixelPop-Confetti',
      label:'ピクセルポップ・紙吹雪',
      tags:[
        'pixel-heart-eyes','pop-heart-grin',
        '8bit-heart-confetti','pixel-heart-burst','scanline-heart-overlay'
      ]
    },
    {
      id:'NeonOutline-RetroWink',
      label:'ネオン縁・レトロウィンク',
      tags:[
        'retro-heart-wink','emoji-heart-smile',
        'neon-heart-outline','comic-heart-dots','pop-heart-stickers'
      ]
    },
    {
      id:'StickerBurst-Fun',
      label:'ステッカーバースト・楽',
      tags:[
        'emoji-heart-smile','pop-heart-grin',
        'pop-heart-stickers','pixel-heart-burst','neon-heart-outline'
      ]
    }
  ];

  register('part36',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Pop/Pixel）', items: eff }
    ],
    presets
  });
})(window);