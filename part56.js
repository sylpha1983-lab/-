/* ============================================
   Crystal / Ice Heart Pack — part56.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情：氷・結晶トーン）===
  const expr = [
    { id:'frost-soft-smile',     label:'霜のやわ微笑み / frost soft smile' },
    { id:'glacier-calm-gaze',    label:'氷河の静視線 / glacier calm gaze' },
    { id:'crystal-tear',         label:'クリスタル涙 / crystal tear' },
    { id:'icy-determined-eyes',  label:'氷の決意の眼 / icy determined eyes' },
    { id:'chill-rosy-blush',     label:'ひんやり紅潮 / chill rosy blush' }
  ];

  // === Effects（エフェクト：ハート（氷・結晶））===
  const eff = [
    { id:'ice-heart-aura',       label:'アイスハート・オーラ / ice heart aura' },
    { id:'crystal-heart-shards', label:'結晶ハート破片 / crystal heart shards' },
    { id:'frost-heart-breath',   label:'霜気ハート息 / frost heart breath' },
    { id:'snowflake-heart-drift',label:'雪華ハート漂い / snowflake heart drift' },
    { id:'glacier-heart-glow',   label:'氷河ハート輝き / glacier heart glow' },
    { id:'misty-ice-vignette',   label:'氷霧ビネット / misty ice vignette' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Crystal-Tear-Drift',
      label:'クリスタル涙・雪華漂い',
      tags:[
        'crystal-tear','snowflake-heart-drift','ice-heart-aura','misty-ice-vignette'
      ]
    },
    {
      id:'Glacier-Calm-Glow',
      label:'氷河の静視・ハート輝き',
      tags:[
        'glacier-calm-gaze','glacier-heart-glow','frost-heart-breath'
      ]
    },
    {
      id:'Icy-Resolve-Shards',
      label:'氷の決意・結晶破片',
      tags:[
        'icy-determined-eyes','crystal-heart-shards','ice-heart-aura'
      ]
    },
    {
      id:'Chill-Blush-Mist',
      label:'ひんやり紅潮・氷霧',
      tags:[
        'chill-rosy-blush','misty-ice-vignette','snowflake-heart-drift'
      ]
    },
    {
      id:'Frost-Smile-Breath',
      label:'霜の微笑み・ハート息',
      tags:[
        'frost-soft-smile','frost-heart-breath','glacier-heart-glow'
      ]
    }
  ];

  register('part56',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Crystal / Ice）', items: eff }
    ],
    presets
  });
})(window);