/* ============================================
   Chained Heart Pack — part46.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'steadfast-heart-gaze',   label:'揺るがぬ視線（ハート）/ steadfast heart gaze' },
    { id:'bashful-heart-bite',     label:'はにかみ軽噛み（ハート）/ bashful lip-bite (heart)' },
    { id:'resolve-with-heart',     label:'決意のまなざし（ハート）/ resolve with heart' },
    { id:'shy-smile-locked',       label:'鍵付きシャイスマイル / shy smile (locked-heart)' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'heart-chain-frame',      label:'画面枠のハートチェーン / heart chain frame' },
    { id:'locked-heart-emblem',    label:'錠前ハートの紋章 / locked heart emblem' },
    { id:'metal-spark-heart',      label:'金属きらめきのハート粒子 / metallic heart spark' },
    { id:'soft-pulse-heart-glow',  label:'やわらか鼓動ハート光 / soft pulse heart glow' },
    { id:'chain-bokeh-pink',       label:'ピンク鎖ボケ / pink chain bokeh' },
    { id:'floating-mini-locks',    label:'浮遊ミニ錠前 / floating mini locks' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Locked-Heart-Aura',
      label:'ロックド・ハート・オーラ',
      tags:[
        'resolve-with-heart',
        'locked-heart-emblem',
        'soft-pulse-heart-glow',
        'metal-spark-heart',
        'chain-bokeh-pink'
      ]
    },
    {
      id:'Chain-Frame-Shy',
      label:'チェーン枠・シャイスマイル',
      tags:[
        'shy-smile-locked',
        'heart-chain-frame',
        'floating-mini-locks',
        'soft-pulse-heart-glow'
      ]
    },
    {
      id:'Steadfast-Emblem',
      label:'不動の視線・ハート紋章',
      tags:[
        'steadfast-heart-gaze',
        'locked-heart-emblem',
        'metal-spark-heart',
        'chain-bokeh-pink'
      ]
    },
    {
      id:'Bashful-Bite-Glow',
      label:'はにかみ軽噛み・ハートの鼓動光',
      tags:[
        'bashful-heart-bite',
        'soft-pulse-heart-glow',
        'floating-mini-locks'
      ]
    }
  ];

  register('part46',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Chained）', items: eff }
    ],
    presets
  });
})(window);