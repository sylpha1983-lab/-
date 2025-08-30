/* ============================================
   Winged Heart Pack — part43.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'uplifted-heart-look',   label:'舞い上がるハートの眼差し / uplifted heart look' },
    { id:'breezy-heart-smile',    label:'そよ風ハート微笑み / breezy heart smile' },
    { id:'lighthearted-chuckle',  label:'軽やかな笑み / lighthearted chuckle' }
  ];

  const eff = [
    { id:'winged-hearts',            label:'翼のあるハート / winged hearts' },
    { id:'airflow-heart-trails',     label:'気流ハート軌跡 / airflow heart trails' },
    { id:'feather-heart-sparkles',   label:'羽根ハートのきらめき / feather heart sparkles' },
    { id:'sky-breeze-heart-glow',    label:'空そよぎハート光 / sky breeze heart glow' }
  ];

  const presets = [
    {
      id:'Winged-Hearts-Flight',
      label:'翼ハートの飛翔',
      tags:[
        'winged-hearts','airflow-heart-trails','sky-breeze-heart-glow'
      ]
    },
    {
      id:'Feather-Sparkle-Grin',
      label:'羽きらめき・微笑',
      tags:[
        'breezy-heart-smile','feather-heart-sparkles','winged-hearts'
      ]
    },
    {
      id:'Lighthearted-Skyline',
      label:'軽やかスカイライン',
      tags:[
        'lighthearted-chuckle','uplifted-heart-look','airflow-heart-trails','sky-breeze-heart-glow'
      ]
    }
  ];

  register('part43',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Winged）', items: eff }
    ],
    presets
  });
})(window);