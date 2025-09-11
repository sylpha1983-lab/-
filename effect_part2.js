/* effect_part2.js — from old part2.js effects (UMD register) */
(() => {
  // 元：old part2.js の effects
  const effects = [
    // Light / 光
    { id: 'rim-light-twin',        jp: 'ツイン・リムライト',     category: 'Light / 光' },
    { id: 'face-gloss-micro',      jp: '顔ハイライト・微',       category: 'Light / 光' },
    { id: 'bloom-dreamy',          jp: 'ドリーミー・ブルーム',   category: 'Light / 光' },
    { id: 'vignette-oval',         jp: 'オーバル・ビネット',     category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-radial',   jp: '集中線・放射',           category: 'Lines / 線' },
    { id: 'impact-lines-thicker',  jp: '集中線・極太+',          category: 'Lines / 線' },
    { id: 'speed-lines-swipe',     jp: 'スピード線・スワイプ',   category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-ribbon',        jp: 'スパークル・リボン',     category: 'Particles / 粒子' },
    { id: 'sparkle-bokeh-ring',    jp: 'スパークル・ボケ輪',     category: 'Particles / 粒子' },
    { id: 'film-grain',            jp: 'フィルム粒子',           category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'drizzle',               jp: '霧雨',                   category: 'Weather / 天候' },
    { id: 'heavy-rain',            jp: '豪雨',                   category: 'Weather / 天候' },
    { id: 'snow-sparkle',          jp: '雪スパークル',           category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-shadow-soft', jp: '目の下の影・薄',         category: 'VFX / その他' },
    { id: 'cheek-highlight',       jp: '頬ハイライト',           category: 'VFX / その他' },
    { id: 'screen-tone-fine',      jp: 'スクリーントーン・細',   category: 'VFX / その他' },
    { id: 'soft-ghost',            jp: 'レンズゴースト・柔',     category: 'VFX / その他' }
  ];

  const toLabel = (id, jp) => `${jp} / ${id.replace(/-/g, ' ')}`;

  // カテゴリ別に整形
  const map = {};
  for (const e of effects) {
    (map[e.category] ||= []).push({ id: e.id, label: toLabel(e.id, e.jp) });
  }
  const categories = Object.keys(map).map(name => ({ name, items: map[name] }));

  const data = { categories, presets: [] };

  const g = window;
  if (typeof g.__registerEffectPart === 'function') {
    g.__registerEffectPart('effect_part2', data);
  } else if (typeof g.__registerPromptPart === 'function') {
    g.__registerPromptPart('effect_part2', data);
  } else {
    g.__parts = g.__parts || {};
    (g.__parts.effect ||= {})[2] = data;
  }
})();