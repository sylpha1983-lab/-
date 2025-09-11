<!-- effect_part24.js -->
<script>
/* part24 → effect（effects）正規化登録 */
(function(){
  const effects = [
    // Water / Bubble / Condensation
    { id:'bubble-heart-field',    jp:'泡ハート・フィールド',       category:'Particles / 粒子' },
    { id:'waterdrop-heart-bokeh', jp:'水滴ハート・ボケ',           category:'Light / 光' },
    { id:'fog-glass-heart-draw',  jp:'曇りガラス・指でハート',     category:'Overlay / 合成' },

    // Sky / Weather / Light
    { id:'cloud-heart-formation', jp:'雲のハート形成',             category:'Weather / 天候' },
    { id:'fireworks-heart-burst', jp:'花火・ハートバースト',       category:'Light / 光' },
    { id:'aurora-heart-arc',      jp:'オーロラ・ハートアーク',     category:'Light / 光' },
    { id:'sunflare-heart-petal',  jp:'太陽フレア・ハート花弁',     category:'Light / 光' },

    // Overlay / Composite
    { id:'window-rain-heart-trace',jp:'濡れ窓・ハートの軌跡',      category:'Overlay / 合成' },
    { id:'mist-heart-breath',     jp:'吐息のミスト・ハート',       category:'VFX / その他' }
  ];

  const grouped = {};
  for (const fx of effects){
    const key = fx.category || "その他";
    (grouped[key] = grouped[key] || []).push({
      id: fx.id,
      label: `${fx.jp} / ${fx.id}`
    });
  }

  const categories = Object.keys(grouped).map(name => ({
    name, items: grouped[name]
  }));

  window.__registerEffectPart?.('effect_part24', { categories, presets: [] });
})();
</script>