/* ============================================
   Metallic Heart Pack — part35.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'steel-heart-focus',        label:'鋼心の視線 / steel heart focus' },
    { id:'chrome-heart-smirk',       label:'クローム・ハートの微笑 / chrome heart smirk' },
    { id:'forged-heart-determination',label:'鍛造ハートの決意 / forged heart determination' },
    { id:'alloy-heart-wink',         label:'合金ハート・ウィンク / alloy heart wink' }
  ];

  const eff = [
    // Light / Surface
    { id:'metallic-heart-specular',  label:'金属ハート・スペキュラ / metallic heart specular' },
    { id:'chrome-heart-reflection',  label:'クロームハート反射 / chrome heart reflection' },
    { id:'brushed-heart-sheen',      label:'ヘアライン・ハート光沢 / brushed heart sheen' },
    // Particles / VFX
    { id:'spark-shard-hearts',       label:'火花片・ハート混合 / spark shards (hearts)' },
    { id:'ember-heart-glow',         label:'残光・ハート焼け / ember heart glow' },
    { id:'gear-heart-overlay',       label:'歯車×ハート・オーバレイ / gear×heart overlay' }
  ];

  const presets = [
    {
      id:'ForgedResolve-MetalHeart',
      label:'鍛造の決意・メタルハート',
      tags:[
        'forged-heart-determination','steel-heart-focus',
        'metallic-heart-specular','brushed-heart-sheen','spark-shard-hearts'
      ]
    },
    {
      id:'ChromeGleam-Confident',
      label:'クロームの煌き・自信',
      tags:[
        'chrome-heart-smirk','alloy-heart-wink',
        'chrome-heart-reflection','metallic-heart-specular','gear-heart-overlay'
      ]
    },
    {
      id:'EmberPulse-Afterglow',
      label:'エンバー・アフターグロー',
      tags:[
        'steel-heart-focus','chrome-heart-smirk',
        'ember-heart-glow','spark-shard-hearts','brushed-heart-sheen'
      ]
    }
  ];

  register('part35',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Metallic）', items: eff }
    ],
    presets
  });
})(window);