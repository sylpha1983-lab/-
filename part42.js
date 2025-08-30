/* ============================================
   Crystal Heart Pack — part42.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'clear-heart-gaze',      label:'澄んだハート視線 / clear heart gaze' },
    { id:'spark-heart-smirk',     label:'きらめきハート口元 / spark heart smirk' },
    { id:'crystal-calm',          label:'クリスタルの静穏 / crystal calm' }
  ];

  const eff = [
    { id:'crystal-heart-shards',     label:'クリスタルハート片 / crystal heart shards' },
    { id:'prismatic-heart-flare',    label:'プリズムハート光芒 / prismatic heart flare' },
    { id:'glassy-heart-bloom',       label:'ガラス調ハートブルーム / glassy heart bloom' },
    { id:'refracted-heart-halo',     label:'屈折ハートハロー / refracted heart halo' }
  ];

  const presets = [
    {
      id:'Crystal-PrismAura',
      label:'クリスタル・プリズムオーラ',
      tags:[
        'clear-heart-gaze','crystal-calm','prismatic-heart-flare','refracted-heart-halo'
      ]
    },
    {
      id:'Shards-and-Bloom',
      label:'シャード＆ブルーム',
      tags:[
        'spark-heart-smirk','crystal-heart-shards','glassy-heart-bloom','prismatic-heart-flare'
      ]
    },
    {
      id:'Refraction-Serenity',
      label:'屈折の静謐',
      tags:[
        'crystal-calm','clear-heart-gaze','refracted-heart-halo','glassy-heart-bloom'
      ]
    }
  ];

  register('part42',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Crystal）', items: eff }
    ],
    presets
  });
})(window);