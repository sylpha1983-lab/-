<script>
/* effect_part21.js – エフェクトカテゴリ化（from part21） */
(function (g) {
  const categories = [
    {
      name: 'Particles / 粒子',
      items: [
        { id:'heart-glow',     label:'ハートグロー / heart-glow' },
        { id:'heart-sparkles', label:'ハートスパークル / heart-sparkles' },
        { id:'heart-petals',   label:'舞うハート花弁 / heart-petals' }
      ]
    },
    {
      name: 'VFX / その他',
      items: [
        { id:'heart-bokeh',    label:'ハートボケ / heart-bokeh' }
      ]
    },
    {
      name: 'Lines / 線',
      items: [
        { id:'heart-trail',    label:'ハートの軌跡 / heart-trail' }
      ]
    },
    {
      name: 'Light / 光',
      items: [
        { id:'kisslight-heart', label:'キスライト（ハート反射） / kisslight-heart' }
      ]
    }
  ];

  const data = { categories, presets: [] };
  if (g.__registerEffectPart) {
    g.__registerEffectPart('effect_part21', data);
  } else {
    g.__parts = g.__parts || {}; g.__parts.effect = g.__parts.effect || {};
    g.__parts.effect['effect_part21'] = data;
  }
})(window);
</script>