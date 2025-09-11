/* effect_part34.js (from part34.js / Effects only) */
// [CHANGE] part34.js の「Effects」だけを effect に登録
(function (g) {
  const register = g.__registerEffectPart || function (id, data) {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const eff = [
    // Light
    { id:'pale-heart-glow',       label:'淡いハート光 / pale heart glow' },
    { id:'moonlit-heart-bloom',   label:'月明かりハートブルーム / moonlit heart bloom' },
    // Particles
    { id:'drifting-heart-motes',  label:'漂うハート塵 / drifting heart motes' },
    { id:'soft-rain-heart',       label:'小雨×ハート粒 / soft rain (hearts)' },
    // VFX
    { id:'faded-heart-vignette',  label:'色褪せハート・ビネット / faded heart vignette' },
    { id:'cracked-heart-overlay', label:'ひび割れハート・オーバレイ / cracked heart overlay' }
  ];

  register('effect_part34', {
    categories: [
      { name: 'Effects / エフェクト（Heart: Melancholy）', items: eff }
    ],
    presets: []
  });
})(window);