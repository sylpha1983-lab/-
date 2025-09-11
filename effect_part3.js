// effect_part3.js (from legacy part3 effects -> UMD)

(function (g) {
  // ===== 変換元の effects（part3） =====
  const effects = [
    // Light / 光
    { id: 'rim-light-crown',          jp: 'リムライト・クラウン',       category: 'Light / 光' },
    { id: 'face-gloss-ring',          jp: '顔ハイライト・光輪',         category: 'Light / 光' },
    { id: 'bloom-dreamy-plus',        jp: 'ドリーミー・ブルーム＋',     category: 'Light / 光' },
    { id: 'vignette-feather',         jp: 'フェザー・ビネット',         category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines-flare',       jp: '集中線・フレア',             category: 'Lines / 線' },
    { id: 'impact-lines-taper',       jp: '集中線・テーパー',           category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle-filament',         jp: 'スパークル・フィラメント',   category: 'Particles / 粒子' },
    { id: 'sparkle-dust-fine',        jp: '微細ダスト・スパーク',       category: 'Particles / 粒子' },
    { id: 'film-grain-classic',       jp: 'フィルム粒子・クラシック',   category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'mist',                     jp: 'もや',                       category: 'Weather / 天候' },
    { id: 'light-snow',               jp: '小雪',                       category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-ribbon-shadow',  jp: '目の下・リボン影',           category: 'VFX / その他' },
    { id: 'soft-ghost-lens',          jp: 'ソフト・レンズゴースト',     category: 'VFX / その他' }
  ];

  // カテゴリごとに再編成
  const map = new Map();
  for (const e of effects) {
    const cat = String(e.category || 'misc');
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat).push({ id: String(e.id), label: `${e.jp} / ${e.id}` });
  }
  const categories = Array.from(map, ([name, items]) => ({ name, items }));

  const data = { categories, presets: [] };

  // レジストリ登録（UMD）
  g.__registerEffectPart && g.__registerEffectPart('effect_part3', data);
})(window);