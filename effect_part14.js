/* effect_part14.js — from part14 (effects -> エフェクトカテゴリ) */
(function (w) {
  w.__registerEffectPart = w.__registerEffectPart || function(){};

  const effects = [
    // Light / 光
    { id: 'moonbeam',         jp: '月光',             cat: 'Light / 光' },
    { id: 'starlight-dust',   jp: '星屑の光',         cat: 'Light / 光' },
    { id: 'neon-glow',        jp: 'ネオングロー',     cat: 'Light / 光' },

    // Lines / 線
    { id: 'spiral-focus',     jp: '螺旋集中線',       cat: 'Lines / 線' },
    { id: 'burst-lines',      jp: '爆発線',           cat: 'Lines / 線' },

    // Particles / 粒子
    { id: 'ember-drifts',     jp: '燃え残りの粒',     cat: 'Particles / 粒子' },
    { id: 'stardust-sparkle', jp: 'スターダストきらめき', cat: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'drizzle-soft',     jp: 'やわらか小雨',     cat: 'Weather / 天候' },
    { id: 'haze-light',       jp: '淡い霞',           cat: 'Weather / 天候' },

    // VFX / その他
    { id: 'lensflare-thin',   jp: 'レンズフレア・細', cat: 'VFX / その他' },
    { id: 'dream-filter',     jp: 'ドリームフィルター', cat: 'VFX / その他' },
    { id: 'fractured-glass',  jp: '割れガラス効果',   cat: 'VFX / その他' }
  ];

  const groups = {};
  for (const e of effects) {
    if (!groups[e.cat]) groups[e.cat] = [];
    groups[e.cat].push({ id: e.id, label: `${e.jp} / ${e.id}` });
  }
  const categories = Object.keys(groups).map(name => ({ name, items: groups[name] }));

  w.__registerEffectPart('effect_part14', {
    categories,
    presets: [] // エフェクト側にはプリセットを入れない
  });
})(window);