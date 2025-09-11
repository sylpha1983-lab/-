/* ============================================
   effect_part20.js  (from part20.js effects)
   - register: window.__registerEffectPart('effect_part20', { categories })
   ============================================ */
(function (g) {
  const raw = [
    // Light / 光
    { id: 'edge-halo-soft',      jp: '縁ハロー・柔',                  cat: 'Light / 光' },
    { id: 'kisslight-dual',      jp: 'デュアル・キスライト',          cat: 'Light / 光' },
    { id: 'inner-bloom-warm',    jp: '内側ブルーム・暖',              cat: 'Light / 光' },
    { id: 'backline-neon-soft',  jp: '背面ライン・ソフトネオン',      cat: 'Light / 光' },

    // Lines / 線
    { id: 'lace-lines',          jp: 'レース線',                      cat: 'Lines / 線' },
    { id: 'tension-threads',     jp: '緊張の糸線',                    cat: 'Lines / 線' },

    // Particles / 粒子
    { id: 'glow-petals',         jp: '光る花弁',                      cat: 'Particles / 粒子' },
    { id: 'soft-spark-mist',     jp: '柔スパーク霧',                  cat: 'Particles / 粒子' },
    { id: 'star-confetti',       jp: '星の紙吹雪',                    cat: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'haze-sunbeam',        jp: '霞に差す光条',                  cat: 'Weather / 天候' },
    { id: 'drift-spark-snow',    jp: 'きら雪の漂い',                  cat: 'Weather / 天候' },

    // VFX / その他
    { id: 'soft-vignette-frame', jp: 'ソフトビネット枠',              cat: 'VFX / その他' },
    { id: 'film-bloom-grain',    jp: 'フィルム・ブルーム粒',          cat: 'VFX / その他' },
    { id: 'subtle-zoom-frame',   jp: '微ズーム枠',                    cat: 'VFX / その他' }
  ];

  const map = new Map();
  for (const it of raw) {
    if (!map.has(it.cat)) map.set(it.cat, []);
    map.get(it.cat).push({ id: it.id, label: `${it.jp} / ${it.id}` });
  }
  const categories = Array.from(map.entries()).map(([name, items]) => ({ name, items }));

  // register
  if (typeof g.__registerEffectPart === 'function') {
    g.__registerEffectPart('effect_part20', { categories });
  } else {
    g.__parts = g.__parts || {};
    g.__parts.effect = g.__parts.effect || {};
    g.__parts.effect['effect_part20'] = { categories };
  }
})(window);