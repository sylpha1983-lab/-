/* presets_part2.js — from old part2.js (UMD register) */
(() => {
  // 元：old part2.js の presets
  const src = [
    { id: 'Jealous-Pout-Soft', label: '嫉妬むくれ・やわら',
      expressions: ['jealous','pout-cute','side-eye-soft'],
      effects: ['cheek-highlight','sparkle'] },

    { id: 'Cool-Icy-SideEye', label: 'クール横目・アイシー',
      expressions: ['side-eye-icy','smirk-sly','skeptical'],
      effects: ['rim-light-twin','sparkle-ribbon','vignette'] },

    { id: 'Dreamy-HalfLid', label: 'とろけ半目・ドリーミー',
      expressions: ['half-lidded-sultry','smile-gentle','bashful'],
      effects: ['bloom-dreamy','vignette-oval','sparkle-bokeh-ring'] },

    { id: 'Tease-Glance-Ribbon', label: '挑発上目遣い・リボン',
      expressions: ['upward-glance-tease','grin','raised-brow'],
      effects: ['sparkle-ribbon','face-gloss-micro'] },

    { id: 'Awkward-Rain-Drama', label: '気まずい雨ドラマ',
      expressions: ['awkward-tight','teary-smile','annoyed'],
      effects: ['drizzle','under-eye-shadow-soft','screen-tone-fine'] },

    { id: 'Shock-Thicker-Radial', label: 'ショック極太＋放射',
      expressions: ['shocked','wide-eyed','furrowed-brow'],
      effects: ['impact-lines-thicker','impact-lines-radial','bloom'] },

    { id: 'Determined-Noir', label: '決意ノワール',
      expressions: ['determined','stare-blank','smirk'],
      effects: ['vignette-oval','rim-light','film-grain'] },

    { id: 'Snow-Sparkle-Cute', label: '雪スパークル・キュート',
      expressions: ['smile-gentle','pout-cute','bashful'],
      effects: ['snow-sparkle','sparkle','cheek-highlight'] },

    { id: 'Heavy-Rain-Angst', label: '豪雨・アンスト',
      expressions: ['sad','wince','stare-blank'],
      effects: ['heavy-rain','under-eye-shadow','vignette'] }
  ];

  const presets = src.map(p => ({
    id: String(p.id),
    label: String(p.label),
    // 旧式（expressions/effects）→ tags に統合し重複排除
    tags: [...new Set([...(p.expressions||[]), ...(p.effects||[])])].map(String)
  }));

  const data = { presets };

  const g = window;
  if (typeof g.__registerPresetPart === 'function') {
    g.__registerPresetPart('presets_part2', data);
  } else if (typeof g.__registerPromptPart === 'function') {
    // 後方互換（プレセット専用レジスタが無い環境用）
    g.__registerPromptPart('presets_part2', data);
  } else {
    // さらに古い互換：グローバルに一旦置く
    g.__parts = g.__parts || {};
    (g.__parts.presets ||= {})[2] = data;
  }
})();