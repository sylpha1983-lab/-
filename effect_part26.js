/* effect_part26.js — Nature & Botany（旧 part26 のエフェクト群） */
(function (g) {
  const byCat = {};

  function add(id, jp, cat){
    (byCat[cat] ||= []).push({ id, label: `${jp} / ${id}` });
  }

  // Light / 光
  add('leaf-dappled-light','木漏れ日','Light / 光');
  add('sunray-through-leaves','葉間の光条','Light / 光');
  add('warm-backlight','暖色バックライト','Light / 光');

  // Particles / 粒子
  add('pollen-drift','花粉の漂い','Particles / 粒子');
  add('petal-scatter','花びら舞い','Particles / 粒子');
  add('seed-fluff','綿毛の浮遊','Particles / 粒子');
  add('dew-sparkles','露のきらめき','Particles / 粒子');

  // VFX
  add('raindrop-ripples','雨滴の波紋','VFX / その他');
  add('chlorophyll-glow','クロロフィル輝き','VFX / Color & Tone');
  add('morning-haze-soft','朝もや・ソフト','VFX / その他');
  add('fresh-green-grade','新緑グレード','VFX / Color & Tone');

  // Background Geometry / 背景ジオメトリ
  add('bg-leaf-veins','葉脈パターン','Background Geometry / 背景ジオメトリ');
  add('bg-flower-tiles','花タイル','Background Geometry / 背景ジオメトリ');
  add('bg-fern-spiral','シダ螺旋','Background Geometry / 背景ジオメトリ');

  // Materials / 素材・表面
  add('bark-texture','樹皮テクスチャ','Materials / 素材・表面');
  add('moss-soft','やわ苔','Materials / 素材・表面');
  add('wet-stone','濡れた石肌','Materials / 素材・表面');

  // Lighting details
  add('green-bounce','緑の反射光','Lighting / ライティング詳細');
  add('canopy-softbox','樹冠ソフトボックス','Lighting / ライティング詳細');
  add('after-rain-gloss','雨上がりの艶','Lighting / ライティング詳細');

  // Composition / 構図・フレーミング
  add('path-leading','小径リード線','Composition / 構図・フレーミング');
  add('foreground-leaves','前景の葉抜け','Composition / 構図・フレーミング');
  add('low-grass-angle','草目線ローアングル','Composition / 構図・フレーミング');

  const categories = Object.keys(byCat).map(name => ({ name, items: byCat[name] }));
  const data = { categories, presets: [] };

  (g.__registerEffectPart || function(){ console.warn('registerEffectPart missing'); })('effect_part26', data);
})(window);