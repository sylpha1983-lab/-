/* ============================================
   Floral Heart Pack — part38.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'bloom-heart-eyes',         label:'花咲く・ハートアイ / blooming heart eyes' },
    { id:'petal-heart-smile',        label:'花弁・ハートスマイル / petal heart smile' },
    { id:'vine-heart-gaze',          label:'ツタ絡み・ハート視線 / vine heart gaze' },
    { id:'blossom-heart-blush',      label:'開花・ハート頬染め / blossom heart blush' }
  ];

  const eff = [
    { id:'petal-heart-rain',         label:'花びらの雨×ハート / petal heart rain' },
    { id:'floral-heart-aura',        label:'フローラル・ハートオーラ / floral heart aura' },
    { id:'vine-heart-overlay',       label:'ツタ×ハートオーバレイ / vine heart overlay' },
    { id:'garden-heart-glow',        label:'庭園・ハート光 / garden heart glow' }
  ];

  const presets = [
    {
      id:'Blossom-SpringLove',
      label:'開花・春の愛',
      tags:[
        'bloom-heart-eyes','blossom-heart-blush',
        'petal-heart-rain','floral-heart-aura','garden-heart-glow'
      ]
    },
    {
      id:'PetalSmile-Soft',
      label:'花弁の柔らかスマイル',
      tags:[
        'petal-heart-smile','vine-heart-gaze',
        'vine-heart-overlay','petal-heart-rain'
      ]
    },
    {
      id:'GardenVine-Embrace',
      label:'庭園ツタの抱擁',
      tags:[
        'vine-heart-gaze','bloom-heart-eyes',
        'garden-heart-glow','floral-heart-aura'
      ]
    }
  ];

  register('part38',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Floral）', items: eff }
    ],
    presets
  });
})(window);