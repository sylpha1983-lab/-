/* ============================================
   Crystal / Prism Heart Pack — part50.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'prism-eyed-smile',      label:'プリズム瞳スマイル / prism-eyed smile' },
    { id:'facet-blush-soft',      label:'ファセット紅潮・やわら / faceted soft blush' },
    { id:'crystal-gaze-serene',   label:'クリスタル視線・静謐 / crystal serene gaze' },
    { id:'iridescent-wink',       label:'虹彩ウィンク / iridescent wink' },
    { id:'shard-tears-glow',      label:'結晶涙のきらめき / glowing crystal tears' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'prism-heart-refraction', label:'プリズム心の屈折 / prism heart refraction' },
    { id:'crystal-heart-flare',    label:'クリスタルハート・フレア / crystal heart flare' },
    { id:'facet-sparkle-dust',     label:'ファセットきら粉 / faceted sparkle dust' },
    { id:'haze-rainbow-veil',      label:'虹靄ヴェール / rainbow haze veil' },
    { id:'gem-shard-petals',       label:'宝石片の花弁 / gem shard petals' },
    { id:'caustic-light-hearts',   label:'コースティク光・ハート / caustic light hearts' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Prism-Confession',
      label:'プリズムの告白',
      tags:[
        'prism-eyed-smile',
        'prism-heart-refraction',
        'facet-sparkle-dust',
        'haze-rainbow-veil'
      ]
    },
    {
      id:'Crystal-Serenity',
      label:'クリスタル静謐',
      tags:[
        'crystal-gaze-serene',
        'crystal-heart-flare',
        'caustic-light-hearts'
      ]
    },
    {
      id:'Iridescent-Wink-Beat',
      label:'虹彩ウィンク・鼓動',
      tags:[
        'iridescent-wink',
        'prism-heart-refraction',
        'crystal-heart-flare'
      ]
    },
    {
      id:'Shard-Tears-Romance',
      label:'結晶涙のロマンス',
      tags:[
        'shard-tears-glow',
        'gem-shard-petals',
        'facet-sparkle-dust',
        'haze-rainbow-veil'
      ]
    },
    {
      id:'Facet-Blush-Spark',
      label:'ファセット紅潮・火花',
      tags:[
        'facet-blush-soft',
        'facet-sparkle-dust',
        'caustic-light-hearts'
      ]
    }
  ];

  register('part50',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Crystal/Prism）', items: eff }
    ],
    presets
  });
})(window);