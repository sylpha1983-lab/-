/* presets_part26.js — Nature & Botany（旧 part26 のプリセット） */
(function (g) {
  const presets = [
    {
      id: 'Forest-Morning-Refresh',
      label: '森の朝・リフレッシュ',
      tags: [
        // expressions
        'fresh-breath-relief','forest-calm',
        // effects
        'leaf-dappled-light','morning-haze-soft','dew-sparkles',
        'green-bounce','foreground-leaves','path-leading'
      ]
    },
    {
      id: 'Petal-Breeze-Smile',
      label: '花びらと微風の笑み',
      tags: [
        'sun-kissed-smile','breeze-delight',
        'petal-scatter','sunray-through-leaves','fresh-green-grade',
        'canopy-softbox','low-grass-angle'
      ]
    },
    {
      id: 'After-Rain-Soothing',
      label: '雨上がりの癒やし',
      tags: [
        'rain-soothed','dew-gentleness',
        'after-rain-gloss','raindrop-ripples','moss-soft',
        'wet-stone','foreground-leaves'
      ]
    },
    {
      id: 'Wild-Garden-Curiosity',
      label: '野の庭・好奇心',
      tags: [
        'petal-curiosity',
        'pollen-drift','seed-fluff','chlorophyll-glow',
        'bg-leaf-veins','bark-texture','path-leading'
      ]
    },
    {
      id: 'Fern-Spiral-Calm',
      label: 'シダ螺旋の静けさ',
      tags: [
        'forest-calm','fresh-breath-relief',
        'bg-fern-spiral','leaf-dappled-light','morning-haze-soft',
        'green-bounce'
      ]
    }
  ];

  const data = { categories: [], presets };
  (g.__registerPresetPart || function(){ console.warn('registerPresetPart missing'); })('presets_part26', data);
})(window);