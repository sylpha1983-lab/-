/* ============================================
   effect_part27.js  (from part27.js)
   Split: Effects → grouped categories/items
   ============================================ */
(function (g) {
  g.__registerEffectPart = g.__registerEffectPart || function(name, data){
    g.__parts = g.__parts || {};
    g.__parts.effect = g.__parts.effect || {};
    g.__parts.effect[name] = data;
  };

  const categories = [
    {
      name: 'Effects / エフェクト',
      items: [
        { id: 'fire-aura',           label: '炎のオーラ / fire aura' },
        { id: 'ember-drifts-strong', label: '強い火の粉漂い / strong ember drifts' },
        { id: 'torch-flicker',       label: '松明の揺らめき / torch flicker' },
        { id: 'inferno-surge',       label: '業火の奔流 / inferno surge' },
        { id: 'candle-softlight',    label: 'キャンドル光 / candle softlight' },
        { id: 'smoke-curl',          label: '煙の渦巻き / curling smoke' },
        { id: 'heat-haze',           label: '陽炎 / heat haze' },
        { id: 'charred-glow',        label: '焦げ跡の輝き / charred glow' }
      ]
    },
    {
      name: 'VFX / その他',
      items: [
        { id: 'phoenix-flare',       label: 'フェニックスフレア / phoenix flare' },
        { id: 'flame-wings',         label: '炎の翼 / flame wings' },
        { id: 'fire-circle',         label: '炎の円環 / circle of fire' }
      ]
    },
    {
      name: 'Lighting / ライティング詳細',
      items: [
        { id: 'orange-backlight',    label: 'オレンジ逆光 / orange backlight' },
        { id: 'bonfire-glow',        label: '焚き火光 / bonfire glow' },
        { id: 'molten-reflect',      label: '溶岩反射 / molten reflection' }
      ]
    },
    {
      name: 'Background Geometry / 背景ジオメトリ',
      items: [
        { id: 'bg-flame-pattern',    label: '炎パターン / flame pattern' },
        { id: 'bg-cracked-earth',    label: 'ひび割れ地表 / cracked earth' },
        { id: 'bg-ash-cloud',        label: '灰雲 / ash cloud' }
      ]
    },
    {
      name: 'Materials / 素材・表面',
      items: [
        { id: 'charcoal',            label: '木炭 / charcoal' },
        { id: 'molten-metal',        label: '溶けた金属 / molten metal' },
        { id: 'burnt-wood',          label: '焦げた木 / burnt wood' }
      ]
    }
  ];

  g.__registerEffectPart('effect_part27', { categories, presets: [] });
})(window);