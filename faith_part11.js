/* faith_part11.js — v11 (from old part11 expressions) */
/* 既定の新形式：window.__registerPromptPart('faith_part11', {categories, presets:[]}) */

(function (g) {
  const toLabel = (jp, id) => `${jp} / ${id}`;

  const eyes = [
    { id: 'side-eye-warm-velvet', jp: '横目・ウォームベルベット' },
    { id: 'side-eye-crisp',       jp: '横目・クリスプ' },
    { id: 'half-lidded-dream',    jp: '半目・夢見' },
    { id: 'half-lidded-icy',      jp: '半目・アイシー' },
    { id: 'upward-glance-soft',   jp: '上目遣い・ソフト' },
    { id: 'teary-corner',         jp: '涙・目尻に滲む' },
    { id: 'glassy-eyes-pearl',    jp: 'うるみ瞳・パール' },
    { id: 'eyelids-flutter-soft', jp: 'まぶた・ふわ瞬き' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const brows = [
    { id: 'brow-angle-gentle', jp: '斜め眉・やわら' },
    { id: 'brow-stern-flat',   jp: '厳しめフラット眉' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const mouth = [
    { id: 'smile-quiet',        jp: '静かな微笑み' },
    { id: 'smile-curve',        jp: '口角カーブ笑み' },
    { id: 'pout-sulk',          jp: 'むくれ・すね' },
    { id: 'pressed-lips-calm',  jp: '口を結ぶ・落ち着き' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const emotion = [
    { id: 'fondness',    jp: '愛着' },
    { id: 'resentful',   jp: 'うらみがましい' },
    { id: 'soft-pride',  jp: '穏やかな誇り' },
    { id: 'gentle-joy',  jp: 'やさしい喜び' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const state = [
    { id: 'collected',     jp: '冷静沈着' },
    { id: 'lightheaded',   jp: 'ふわっと' },
    { id: 'brooding',      jp: '思い沈む' },
  ].map(it => ({ id: it.id, label: toLabel(it.jp, it.id) }));

  const categories = [
    { name: 'Eyes / 目',       items: eyes },
    { name: 'Brows / 眉',      items: brows },
    { name: 'Mouth / 口',      items: mouth },
    { name: 'Emotion / 感情',  items: emotion },
    { name: 'State / 状態',    items: state },
  ];

  g.__registerPromptPart && g.__registerPromptPart('faith_part11', {
    categories,
    presets: [] // ← 表情側はプリセットを持たず、presets_part11.jsで一元管理
  });
})(window);