/* effect_part42.js — split from part43 (Effects) */
(function (g) {
  const id = 'effect_part42';
  const data = {
    categories: [
      {
        name: 'Effects / エフェクト（Heart: Winged）',
        items: [
          { id: 'winged-hearts',          label: '翼のあるハート / winged hearts' },
          { id: 'airflow-heart-trails',   label: '気流ハート軌跡 / airflow heart trails' },
          { id: 'feather-heart-sparkles', label: '羽根ハートのきらめき / feather heart sparkles' },
          { id: 'sky-breeze-heart-glow',  label: '空そよぎハート光 / sky breeze heart glow' }
        ]
      }
    ]
  };
  (g.__registerEffectPart ? g.__registerEffectPart : (x,y)=>{ g.effectBuilder=g.effectBuilder||{}; g.effectBuilder[x]=y; })(id, data);
})(window);