<!-- effect_part23.js (from part23) -->
<script>
(function (g) {
  // 既定のレジストリAPIに登録
  if (typeof g.__registerEffectPart !== 'function') {
    g.__parts = g.__parts || {};
    g.__parts.effect = g.__parts.effect || {};
    g.__registerEffectPart = (name, data) => { g.__parts.effect[name] = data; };
  }

  // 旧 part23 の effects をジャンル毎にカテゴリ分割
  const byCat = {
    'VFX / 素材': [
      { id:'stainedglass-heart',    label:'ステンドグラス・ハート / stainedglass-heart' },
      { id:'foil-balloon-heart',    label:'フォイル風船・ハート / foil-balloon-heart' },
      { id:'candy-wrapper-spec',    label:'キャンディ包材スペキュラ / candy-wrapper-spec' }
    ],
    'Lines / 線': [
      { id:'ribbon-swirl-heart',    label:'リボンスワール・ハート / ribbon-swirl-heart' }
    ],
    'Overlay / 合成': [
      { id:'lace-heart-overlay',    label:'レース・ハートオーバーレイ / lace-heart-overlay' }
    ],
    'Background / 背景': [
      { id:'macaron-pastel-bg',     label:'マカロン・パステル背景 / macaron-pastel-bg' }
    ],
    'Particles / 粒子': [
      { id:'metallic-heart-confetti', label:'金属光ハート紙吹雪 / metallic-heart-confetti' }
    ],
    'Light / 光': [
      { id:'stringlights-heart',    label:'ストリングライト・ハート / stringlights-heart' },
      { id:'heart-bokeh-warmplus',  label:'ハートボケ・ウォーム+ / heart-bokeh-warmplus' },
      { id:'heart-bokeh-coolplus',  label:'ハートボケ・クール+ / heart-bokeh-coolplus' },
      { id:'caustics-heart-reflect',label:'水面コースティクス・ハート / caustics-heart-reflect' }
    ]
  };

  const categories = Object.keys(byCat).map(name => ({ name, items: byCat[name] }));
  const data = { categories, presets: [] };

  g.__registerEffectPart('effect_part23', data);
})(window);
</script>