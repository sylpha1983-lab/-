/* effect_part11.js — v11 (from old part11 effects) */
/* 既定の新形式：window.__registerEffectPart('effect_part11', {categories, presets:[]}) */

(function (g) {
  const toLabel = (jp, id) => `${jp} / ${id}`;

  const light = [
    { id: 'rim-light-crown-soft',  jp: 'リムライト・クラウン柔' },
    { id: 'cheek-specular-dot',    jp: '頬スペキュラ・きらり点' },
    { id: 'bloom-velvet',          jp: 'ベルベット・ブルーム' },
    { id: 'vignette-soft-ellipse', jp: '楕円ビネット・ソフト' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const lines = [
    { id: 'impact-lines-softflare', jp: '集中線・ソフトフレア' },
    { id: 'speed-lines-feather',    jp: 'スピード線・フェザー' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const particles = [
    { id: 'sparkle-thread',   jp: 'スパークル・細糸' },
    { id: 'dust-sheer',       jp: '微薄ダスト' },
    { id: 'bokeh-soft-orbs',  jp: 'ソフトボケ・オーブ' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const weather = [
    { id: 'rain-rimlight',    jp: '雨・リム光' },
    { id: 'haze-gentle',      jp: 'やわらか霞' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const vfx = [
    { id: 'under-eye-softline',  jp: '目の下・柔線影' },
    { id: 'tone-fine-cross',     jp: 'トーン・細クロス' },
    { id: 'lens-ghost-softring', jp: 'レンズゴースト・柔リング' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const categories = [
    { name: 'Light / 光',        items: light },
    { name: 'Lines / 線',        items: lines },
    { name: 'Particles / 粒子',  items: particles },
    { name: 'Weather / 天候',    items: weather },
    { name: 'VFX / その他',      items: vfx },
  ];

  g.__registerEffectPart && g.__registerEffectPart('effect_part11', {
    categories,
    presets: [] // ← エフェクト側もプリセットは持たない
  });
})(window);