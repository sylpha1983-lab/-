/* ============================================
   Neon / Cyber Heart Pack — part55.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情：ネオン・サイバー風）===
  const expr = [
    { id:'neon-smirk',          label:'ネオン・スマーク / neon smirk' },
    { id:'cyber-glow-eyes',     label:'サイバーグロウ眼 / cyber glow eyes' },
    { id:'techno-intense-gaze', label:'テクノ強い視線 / techno intense gaze' },
    { id:'holo-blush',          label:'ホログラム紅潮 / hologram blush' },
    { id:'pulse-smile',         label:'パルス微笑み / pulse smile' }
  ];

  // === Effects（エフェクト：ネオン／サイバー・ハート）===
  const eff = [
    { id:'neon-heart-outline',  label:'ネオンハート輪郭 / neon heart outline' },
    { id:'cyber-heart-grid',    label:'サイバーハート・グリッド / cyber heart grid' },
    { id:'holo-heart-fragments',label:'ホログラムハート破片 / hologram heart fragments' },
    { id:'pulse-heartwave',     label:'パルス・ハート波 / pulse heartwave' },
    { id:'glitch-heart-sparks', label:'グリッチハート・スパーク / glitch heart sparks' },
    { id:'laser-heart-trails',  label:'レーザーハート軌跡 / laser heart trails' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Neon-Spark-Smile',
      label:'ネオン・スパークスマイル',
      tags:[
        'neon-smirk','neon-heart-outline','glitch-heart-sparks','pulse-heartwave'
      ]
    },
    {
      id:'Cyber-Gaze-Grid',
      label:'サイバー・ゲイズグリッド',
      tags:[
        'cyber-glow-eyes','cyber-heart-grid','laser-heart-trails'
      ]
    },
    {
      id:'Holo-Blush-Fragment',
      label:'ホログラム紅潮・フラグメント',
      tags:[
        'holo-blush','holo-heart-fragments','glitch-heart-sparks'
      ]
    },
    {
      id:'Pulse-Intense-Wave',
      label:'パルス強視・ハート波',
      tags:[
        'techno-intense-gaze','pulse-heartwave','neon-heart-outline'
      ]
    },
    {
      id:'Laser-Smile-Trail',
      label:'レーザースマイル・トレイル',
      tags:[
        'pulse-smile','laser-heart-trails','cyber-heart-grid'
      ]
    }
  ];

  register('part55',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Neon / Cyber）', items: eff }
    ],
    presets
  });
})(window);