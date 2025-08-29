/* ============================================
   Electric Heart Pack — part40.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'volt-heart-eyes',        label:'電撃・ハートアイ / volt heart eyes' },
    { id:'spark-heart-smile',      label:'スパーク・ハートスマイル / spark heart smile' },
    { id:'charge-heart-gaze',      label:'帯電・ハート視線 / charged heart gaze' },
    { id:'ion-heart-blush',        label:'イオン・ハート頬染め / ion heart blush' }
  ];

  const eff = [
    { id:'heart-lightning-arc',    label:'ハート稲妻アーク / heart lightning arc' },
    { id:'neon-heart-glow',        label:'ネオン・ハート発光 / neon heart glow' },
    { id:'tesla-heart-spark',      label:'テスラ・ハートスパーク / tesla heart spark' },
    { id:'electro-heart-ring',     label:'電磁・ハートリング / electro heart ring' }
  ];

  const presets = [
    {
      id:'ThunderKiss-Glow',
      label:'雷の口づけ・グロウ',
      tags:[
        'volt-heart-eyes','spark-heart-smile',
        'heart-lightning-arc','neon-heart-glow','electro-heart-ring'
      ]
    },
    {
      id:'Charged-GazeAura',
      label:'帯電する視線オーラ',
      tags:[
        'charge-heart-gaze','ion-heart-blush',
        'tesla-heart-spark','neon-heart-glow'
      ]
    },
    {
      id:'NeonPulse-Beat',
      label:'ネオン脈動ビート',
      tags:[
        'spark-heart-smile','volt-heart-eyes',
        'electro-heart-ring','tesla-heart-spark'
      ]
    }
  ];

  register('part40',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Electric）', items: eff }
    ],
    presets
  });
})(window);