/* ============================================
   effect_part19.js  (from: part19.js effects)
   分割: エフェクト。UMD互換で __registerEffectPart に登録
   ============================================ */
(function (g) {
  g.__registerEffectPart = g.__registerEffectPart || function(name, data){
    g.__parts = g.__parts || {};
    g.__parts.effect = g.__parts.effect || {};
    g.__parts.effect[name] = data;
  };

  const categories = [
    {
      name: 'Light / 光',
      items: [
        { id:'edge-sheen',      label:'エッジの艶光 / edge-sheen' },
        { id:'subtle-bounce',   label:'サブtleバウンス光 / subtle-bounce' },
        { id:'rim-ember',       label:'リムライト・残り火 / rim-ember' },
        { id:'volumetric-soft', label:'ボリュメトリック・柔 / volumetric-soft' }
      ]
    },
    {
      name: 'Lines / 線',
      items: [
        { id:'hairline-burst',    label:'極細バースト線 / hairline-burst' },
        { id:'shear-speed-lines', label:'シア・スピード線 / shear-speed-lines' },
        { id:'orbit-focus-lines', label:'オービット集中線 / orbit-focus-lines' }
      ]
    },
    {
      name: 'Particles / 粒子',
      items: [
        { id:'ember-sparks-fine', label:'残り火スパーク・微 / ember-sparks-fine' },
        { id:'haze-motes',        label:'ヘイズ粒 / haze-motes' },
        { id:'snow-faint-drift',  label:'うっすら雪の漂い / snow-faint-drift' }
      ]
    },
    {
      name: 'Weather / 天候',
      items: [
        { id:'sprinkle-light', label:'ぱらぱら小雨 / sprinkle-light' },
        { id:'haze-backlit',   label:'逆光ヘイズ / haze-backlit' }
      ]
    },
    {
      name: 'VFX / その他',
      items: [
        { id:'soft-focus-frame',   label:'ソフトフォーカス枠 / soft-focus-frame' },
        { id:'micro-glow-rim',     label:'マイクログロウ・縁 / micro-glow-rim' },
        { id:'fine-grain-organic', label:'有機微粒子 / fine-grain-organic' }
      ]
    }
  ];

  g.__registerEffectPart('effect_part19', { categories, presets: [] });
})(window);