/* ============================================
   presets_part19.js  (from: part19.js presets)
   分割: プリセット専用。UMD互換で __registerPresetPart に登録
   ============================================ */
(function (g) {
  g.__registerPresetPart = g.__registerPresetPart || function(name, data){
    g.__parts = g.__parts || {};
    g.__parts.presets = g.__parts.presets || {};
    g.__parts.presets[name] = data;
  };

  const presets = [
    {
      id: 'Resolute-SteelGlow',
      label: '断固・鋼のグロウ',
      // expressions + effects を tags に統合
      tags: ['resolute','stare-steel','press-lips-determined','brow-knit-focus','edge-sheen','orbit-focus-lines','micro-glow-rim']
    },
    {
      id: 'GentleSorrow-SnowVeil',
      label: 'やさしい悲しみ・雪のヴェール',
      tags: ['gentle-sorrow','brow-arc-softsad','soft-smile-tremble','teary-trail','snow-faint-drift','volumetric-soft','soft-focus-frame']
    },
    {
      id: 'FondTease-EmberRim',
      label: '親しみ挑発・残り火リム',
      tags: ['fond-tease','side-eye-ember','smile-brave','eye-smile-tilt','rim-ember','ember-sparks-fine','hairline-burst']
    },
    {
      id: 'NervousHope-HazeBack',
      label: '不安まじりの希望・逆光ヘイズ',
      tags: ['nervous-hope','gaze-soft-curve','mouth-parted-breath','blink-nervous','haze-backlit','haze-motes','subtle-bounce']
    },
    {
      id: 'Poised-QuietBreath',
      label: '凛と・静かな呼吸',
      tags: ['poised','quiet-breath','brow-lift-curious','volumetric-soft','fine-grain-organic','micro-glow-rim']
    },
    {
      id: 'OnEdge-Sprinkle',
      label: '張りつめ・ぱらぱら小雨',
      tags: ['on-edge','brow-knit-focus','pout-glance-away','sprinkle-light','shear-speed-lines','soft-focus-frame']
    }
  ];

  g.__registerPresetPart('presets_part19', { presets });
})(window);