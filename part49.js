/* ============================================
   Mechanical / Tech Heart Pack — part49.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'holo-heart-gaze',     label:'ホロ・ハート視線 / hologram heart gaze' },
    { id:'servo-smirk',         label:'サーボ・スマーク / servo smirk' },
    { id:'circuit-blush',       label:'サーキット紅潮 / circuit blush' },
    { id:'mecha-soft-resolve',  label:'メカ・柔ら決意 / mecha soft resolve' },
    { id:'optic-heart-spark',   label:'オプティック・ハート火花 / optic heart spark' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'hologram-heart-proj',   label:'ハート・ホログラム投影 / hologram heart projection' },
    { id:'circuitry-heart-glow',  label:'回路ハート発光 / circuitry heart glow' },
    { id:'neon-heart-grid',       label:'ネオン・ハートグリッド / neon heart grid' },
    { id:'lidar-heart-pulse',     label:'LIDARハートパルス / lidar heart pulse' },
    { id:'mech-sparks-heart',     label:'機械火花・ハート / mechanical sparks (heart)' },
    { id:'steel-petal-hearts',    label:'鋼花弁ハート / steel petal hearts' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Techno-Confession',
      label:'テクノ告白',
      tags:[
        'holo-heart-gaze',
        'hologram-heart-proj',
        'neon-heart-grid',
        'circuitry-heart-glow'
      ]
    },
    {
      id:'Cyber-Resolve-Heart',
      label:'サイバー決意ハート',
      tags:[
        'mecha-soft-resolve',
        'circuit-blush',
        'steel-petal-hearts',
        'lidar-heart-pulse'
      ]
    },
    {
      id:'Factory-Sparks-Love',
      label:'工場火花の恋',
      tags:[
        'servo-smirk',
        'mech-sparks-heart',
        'circuitry-heart-glow'
      ]
    },
    {
      id:'Neon-Grid-Idol',
      label:'ネオングリッド・アイドル',
      tags:[
        'optic-heart-spark',
        'neon-heart-grid',
        'hologram-heart-proj'
      ]
    }
  ];

  register('part49',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Mechanical/Tech）', items: eff }
    ],
    presets
  });
})(window);