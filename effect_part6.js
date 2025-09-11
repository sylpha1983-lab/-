/* effect_part6.js — from part6.js (effects→categories) */
;(function (g) {
  g.__parts = g.__parts || {};
  if (!g.__registerPromptPart) {
    g.__registerPromptPart = function (name, data) {
      const m = String(name).match(/^([a-z]+)_part(\d+)$/);
      const cat = m ? m[1] : 'effect';
      const idx = m ? parseInt(m[2], 10) : 1;
      g.__parts[cat] = g.__parts[cat] || {};
      g.__parts[cat][idx] = {
        categories: Array.isArray(data.categories) ? data.categories : [],
        presets: Array.isArray(data.presets) ? data.presets : []
      };
    };
  }

  const src = [
    // Light / 光
    { id:'rim-light-crown-plus',  label:'リムライト・クラウン＋', group:'Light / 光' },
    { id:'rim-light-split-soft',  label:'分割リムライト・ソフト',   group:'Light / 光' },
    { id:'face-gloss-micro-plus', label:'顔ハイライト・微＋',       group:'Light / 光' },
    { id:'bloom-dreamy-pro',      label:'ドリーミー・ブルームPro',  group:'Light / 光' },
    { id:'vignette-feather-oval', label:'フェザー・ビネット楕円',    group:'Light / 光' },

    // Lines / 線
    { id:'impact-lines-heavy',    label:'集中線・ヘビー',           group:'Lines / 線' },
    { id:'impact-lines-spiral',   label:'集中線・スパイラル',       group:'Lines / 線' },
    { id:'speed-lines-rush',      label:'スピード線・ラッシュ',     group:'Lines / 線' },

    // Particles / 粒子
    { id:'sparkle-dense-ring',    label:'高密度スパークル・リング', group:'Particles / 粒子' },
    { id:'sparkle-filament-ring', label:'フィラメント・リング',      group:'Particles / 粒子' },
    { id:'soft-dust-haze',        label:'ソフトダスト・霞',         group:'Particles / 粒子' },
    { id:'bokeh-rain',            label:'ボケ雨',                   group:'Particles / 粒子' },

    // Weather / 天候
    { id:'drizzle-sheer',         label:'薄衣の霧雨',               group:'Weather / 天候' },
    { id:'snow-sparkle-plus',     label:'雪スパークル＋',           group:'Weather / 天候' },

    // VFX / その他
    { id:'under-eye-soft-veil',   label:'目の下・薄ヴェール',       group:'VFX / その他' },
    { id:'screen-tone-fine-plus', label:'スクリーントーン・細＋',   group:'VFX / その他' },
    { id:'lens-ghost-mild',       label:'レンズゴースト・軽',       group:'VFX / その他' }
  ];

  const byGroup = {};
  for (const it of src) {
    (byGroup[it.group] = byGroup[it.group] || []).push({
      id: it.id,
      label: `${it.label} / ${it.id}`
    });
  }
  const categories = Object.keys(byGroup).map(name => ({ name, items: byGroup[name] }));

  g.__registerPromptPart('effect_part6', { categories, presets: [] });
})(window);