/* ============================================
   presets_part30.js  (from part30.js presets)
   ============================================ */
(function(g){
  // 元: part30.js の presets をそのまま移設
  // 参照: Noon-Scorch-Runner 〜 Dust-Devil-Thrill まで5件
  // 根拠: 行19-57 付近。 
  const presets = [
    {
      id: 'Noon-Scorch-Runner',
      label: '真昼の灼熱を駆ける',
      tags: [
        'heat-squint','endure-heat','harsh-noon',
        'sun-glare','heat-haze','bg-dune-ridges','sand-grain-sheen','low-angle-mirage'
      ]
    },
    {
      id: 'Golden-Oasis-Relief',
      label: '黄金のオアシス・安堵',
      tags: [
        'found-oasis-relief','wanderer-calm','golden-hour-desert',
        'golden-haze','bg-oasis-palm','backlit-dune-rim','sun-bleached-fabric'
      ]
    },
    {
      id: 'Mirage-Trek',
      label: '蜃気楼の行軍',
      tags: [
        'parched-fatigue','endure-heat','mirage-waves',
        'sand-dust-drift','long-journey-lines','bg-wadi-canyon','weathered-leather'
      ]
    },
    {
      id: 'Dune-Crest-Silhouette',
      label: '砂丘稜線のシルエット',
      tags: [
        'wanderer-calm','silhouette-dune-crest','backlit-dune-rim',
        'specular-sun-spots','heat-vortex-soft','bg-rock-arches-desert'
      ]
    },
    {
      id: 'Dust-Devil-Thrill',
      label: '砂塵つむじ風のスリル',
      tags: [
        'thrill-charged','dust-devil','sand-dust-drift',
        'harsh-noon','sun-glare','cracked-earth','low-angle-mirage'
      ]
    }
  ];

  const data = { categories: [], presets };
  if (typeof g.__registerPresetPart === 'function') {
    g.__registerPresetPart('presets_part30', data);
  } else if (typeof g.__registerPresetsPart === 'function') {
    // 互換エイリアス
    g.__registerPresetsPart('presets_part30', data);
  }
})(window);