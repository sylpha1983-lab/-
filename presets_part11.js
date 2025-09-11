/* presets_part11.js — v11 (from old part11 presets) */
/* 既定の新形式：window.__registerPresetPart('presets_part11', {presets}) */

(function (g) {
  const P = (id, label, expr = [], fx = []) => ({
    id,
    label,
    // 旧形式 expressions/effects を tags に統合（重複除去）
    tags: Array.from(new Set([...(expr||[]), ...(fx||[])]))
  });

  const presets = [
    P('Velvet-SoftFond',   'ベルベット愛着・やわら',
      ['side-eye-warm-velvet','fondness','smile-quiet','brow-angle-gentle'],
      ['bloom-velvet','cheek-specular-dot','vignette-soft-ellipse']
    ),
    P('Icy-Collected-RimRain', 'アイシー冷静・リム雨',
      ['half-lidded-icy','collected','pressed-lips-calm'],
      ['rain-rimlight','rim-light-crown-soft','tone-fine-cross']
    ),
    P('Pearl-Teary-Glow',  'パールの涙・微光',
      ['glassy-eyes-pearl','teary-corner','gentle-joy'],
      ['bokeh-soft-orbs','under-eye-softline','bloom-velvet']
    ),
    P('Resentful-Crisp-Line','うらみ・クリスプ視線',
      ['resentful','side-eye-crisp','pout-sulk','brow-stern-flat'],
      ['impact-lines-softflare','vignette-soft-ellipse','dust-sheer']
    ),
    P('Dreamy-Lightheaded','夢見・ふわっと',
      ['half-lidded-dream','lightheaded','smile-curve'],
      ['sparkle-thread','speed-lines-feather','lens-ghost-softring']
    ),
    P('Brooding-Noir-Soft','沈思ノワール・ソフト',
      ['brooding','side-eye-crisp','smile-quiet'],
      ['vignette-soft-ellipse','rim-light-crown-soft','tone-fine-cross']
    ),
  ];

  g.__registerPresetPart && g.__registerPresetPart('presets_part11', { presets });
})(window);