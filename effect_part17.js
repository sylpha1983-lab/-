/* ============================================
   effect_part17.js  (from part17.js effects)
   登録先: window.__registerEffectPart("effect_part17", data)
   形式: { categories:[{name, items:[{id,label}]}] }
   ============================================ */
(function (w) {
  w.__registerEffectPart = w.__registerEffectPart || function(){ console.warn("__registerEffectPart is not defined"); };

  const srcEffects = [
    // Light / 光
    { id: 'dappled-light', jp: '木漏れ日ライト', category: 'Light / 光' },
    { id: 'moonlight-glow', jp: '月光の輝き', category: 'Light / 光' },
    { id: 'light-shaft', jp: '光の筋', category: 'Light / 光' },
    { id: 'halo-soft', jp: 'やわらかい光輪', category: 'Light / 光' },

    // Lines / 線
    { id: 'spiral-lines', jp: '渦巻き線', category: 'Lines / 線' },
    { id: 'burst-sharp', jp: 'シャープバースト線', category: 'Lines / 線' },
    { id: 'dash-motion', jp: 'ダッシュ動線', category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'dust-motes', jp: 'ほこり粒', category: 'Particles / 粒子' },
    { id: 'sparkle-rainbow', jp: '虹色スパークル', category: 'Particles / 粒子' },
    { id: 'bubble-float', jp: '浮遊バブル', category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'light-rain', jp: '小雨', category: 'Weather / 天候' },
    { id: 'sun-shower', jp: '天気雨', category: 'Weather / 天候' },

    // VFX / その他
    { id: 'lens-flare-soft', jp: 'レンズフレア・やわら', category: 'VFX / その他' },
    { id: 'prism-shift', jp: 'プリズムシフト', category: 'VFX / その他' },
    { id: 'aura-glow', jp: 'オーラ輝き', category: 'VFX / その他' }
  ];

  const byCat = {};
  for (const fx of srcEffects) {
    const name = fx.category || 'VFX';
    if (!byCat[name]) byCat[name] = [];
    byCat[name].push({ id: fx.id, label: `${fx.jp} / ${fx.id}` });
  }

  const categories = Object.keys(byCat).map(name => ({
    name,
    items: byCat[name]
  }));

  const data = { categories };
  w.__registerEffectPart("effect_part17", data);
})(window);