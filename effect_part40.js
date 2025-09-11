/* ============================================
   effect_part40.js  (from part41.js / Effects)
   ============================================ */
(function (g) {
  const register = g.__registerEffectPart || function (id, data) {
    g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
    g.__parts.effect[id] = data;
  };

  const effects = [
    { id:'heart-petals',           label:'ハート花弁 / heart petals' },
    { id:'soft-heart-glow',        label:'やわらハート光 / soft heart glow' },
    { id:'gentle-heart-bokeh',     label:'やさしいハートボケ / gentle heart bokeh' },
    { id:'background-heart-veil',  label:'背景ハートヴェール / background heart veil' }
  ];

  register('effect_part40', {
    categories: [
      { name: 'Effects / エフェクト（Heart: Romance）', items: effects }
    ],
    presets: []
  });
})(window);