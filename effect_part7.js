/* effect_part7.js — split from part7.js (effects→categories) */
;(function (g) {
  g.__parts = g.__parts || {};
  g.__registerEffectPart = g.__registerEffectPart || function (name, data) {
    const m = String(name).match(/^([a-z]+)_part(\d+)$/);
    const cat = 'effect'; const idx = m ? +m[2] : 1;
    g.__parts[cat] = g.__parts[cat] || {}; g.__parts[cat][idx] = { categories: data.categories||[], presets: [] };
  };

  const src = [
    // Light / 光
    { id:'rim-light-aurora',      jp:'リムライト・オーロラ',        category:'Light / 光' },
    { id:'face-gloss-spot',       jp:'顔ハイライト・スポット',      category:'Light / 光' },
    { id:'bloom-soft-veil',       jp:'ソフトヴェール・ブルーム',    category:'Light / 光' },
    { id:'vignette-ellipse-soft', jp:'楕円ビネット・柔',            category:'Light / 光' },

    // Lines / 線
    { id:'impact-lines-ring',     jp:'集中線・リング',              category:'Lines / 線' },
    { id:'speed-lines-cross',     jp:'スピード線・クロス',          category:'Lines / 線' },

    // Particles / 粒子
    { id:'sparkle-dense-plus',    jp:'高密度スパークル＋',          category:'Particles / 粒子' },
    { id:'sparkle-orbit',         jp:'スパークル・オービット',      category:'Particles / 粒子' },
    { id:'soft-grain-film',       jp:'ソフトフィルム粒子',          category:'Particles / 粒子' },

    // Weather / 天候
    { id:'rain-backlight',        jp:'逆光の雨',                    category:'Weather / 天候' },
    { id:'mist-cool',             jp:'冷たいもや',                  category:'Weather / 天候' },

    // VFX / その他
    { id:'under-eye-light-puff',  jp:'目の下・淡ふくらみ影',        category:'VFX / その他' },
    { id:'screen-tone-radial',    jp:'トーン・放射',                category:'VFX / その他' },
    { id:'lens-ghost-orb',        jp:'レンズゴースト・オーブ',      category:'VFX / その他' }
  ];

  const byGroup = {};
  for (const it of src) {
    (byGroup[it.category] = byGroup[it.category] || []).push({ id: it.id, label: `${it.jp} / ${it.id}` });
  }
  const categories = Object.keys(byGroup).map(name => ({ name, items: byGroup[name] }));

  g.__registerEffectPart('effect_part7', { categories });
})(window);