/* effect_part4.js (from part4.js) — UMD register, categories/items only */
(function (g) {
  const byCat = new Map();
  const add = (cat, id, jp) => {
    if (!byCat.has(cat)) byCat.set(cat, []);
    byCat.get(cat).push({ id, label: `${jp} / ${id}` });
  };

  // ==== Effects (from original part4.js) ====
  add('Light / 光', 'halo-light-soft', '光輪・ソフト');
  add('Light / 光', 'glow-pulse', 'パルス発光');
  add('Light / 光', 'moonlight-filter', '月光フィルター');

  add('Lines / 線', 'motion-lines-fast', 'スピード線・速');
  add('Lines / 線', 'motion-lines-drama', 'ドラマ線');

  add('Particles / 粒子', 'petals-sakura', '桜の花びら');
  add('Particles / 粒子', 'leaves-falling', '落ち葉');
  add('Particles / 粒子', 'embers-floating', '舞う火の粉');

  add('Weather / 天候', 'rain-soft', '小雨');
  add('Weather / 天候', 'rain-heavy', '豪雨');

  add('VFX / その他', 'screen-crack', 'スクリーン亀裂');
  add('VFX / その他', 'ghost-trail', 'ゴースト残像');

  const categories = Array.from(byCat, ([name, items]) => ({ name, items }));

  const data = { categories, presets: [] };
  (g.__registerPromptPart || function(name, d){
    g.__parts = g.__parts || {faith:{},background:{},effect:{},pose:{},hair:{},presets:{}};
    g.__parts.effect = g.__parts.effect || {};
    const idx = 4; g.__parts.effect[idx] = d;
  })('effect_part4', data);
})(window);