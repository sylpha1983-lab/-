/* ============================================
   Expression + Effects Builder — part26.js (26/40)
   Theme: 自然・植物 / Nature & Botany
   形式統一版：window.expressionEffects["part26"] = {expressions, effects, presets}
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions（表情） =====
  const expressions = [
    { id:'fresh-breath-relief', jp:'深呼吸の安堵',           category:'Emotion / 感情' },
    { id:'sun-kissed-smile',    jp:'陽だまり微笑',           category:'Emotion / 感情' },
    { id:'forest-calm',         jp:'森の静けさ',             category:'State / 状態' },
    { id:'breeze-delight',      jp:'風を楽しむ',             category:'Emotion / 感情' },
    { id:'petal-curiosity',     jp:'花びらへの好奇',         category:'Emotion / 感情' },
    { id:'dew-gentleness',      jp:'朝露のやさしさ',         category:'Emotion / 感情' },
    { id:'rain-soothed',        jp:'小雨に癒やされる',       category:'State / 状態' }
  ];

  // ===== Effects（演出・環境） =====
  const effects = [
    // Effects / Light・Particles・VFX
    { id:'leaf-dappled-light',    jp:'木漏れ日',                         category:'Light / 光' },
    { id:'sunray-through-leaves', jp:'葉間の光条',                       category:'Light / 光' },
    { id:'warm-backlight',        jp:'暖色バックライト',                 category:'Light / 光' },
    { id:'pollen-drift',          jp:'花粉の漂い',                       category:'Particles / 粒子' },
    { id:'petal-scatter',         jp:'花びら舞い',                       category:'Particles / 粒子' },
    { id:'seed-fluff',            jp:'綿毛の浮遊',                       category:'Particles / 粒子' },
    { id:'dew-sparkles',          jp:'露のきらめき',                     category:'Particles / 粒子' },
    { id:'raindrop-ripples',      jp:'雨滴の波紋',                       category:'VFX / その他' },
    { id:'chlorophyll-glow',      jp:'クロロフィル輝き',                 category:'VFX / Color & Tone' },
    { id:'morning-haze-soft',     jp:'朝もや・ソフト',                   category:'VFX / その他' },
    { id:'fresh-green-grade',     jp:'新緑グレード',                     category:'VFX / Color & Tone' },

    // Background Geometry
    { id:'bg-leaf-veins',         jp:'葉脈パターン',                     category:'Background Geometry / 背景ジオメトリ' },
    { id:'bg-flower-tiles',       jp:'花タイル',                         category:'Background Geometry / 背景ジオメトリ' },
    { id:'bg-fern-spiral',        jp:'シダ螺旋',                         category:'Background Geometry / 背景ジオメトリ' },

    // Materials
    { id:'bark-texture',          jp:'樹皮テクスチャ',                   category:'Materials / 素材・表面' },
    { id:'moss-soft',             jp:'やわ苔',                           category:'Materials / 素材・表面' },
    { id:'wet-stone',             jp:'濡れた石肌',                       category:'Materials / 素材・表面' },

    // Lighting details
    { id:'green-bounce',          jp:'緑の反射光',                       category:'Lighting / ライティング詳細' },
    { id:'canopy-softbox',        jp:'樹冠ソフトボックス',               category:'Lighting / ライティング詳細' },
    { id:'after-rain-gloss',      jp:'雨上がりの艶',                     category:'Lighting / ライティング詳細' },

    // Composition
    { id:'path-leading',          jp:'小径リード線',                     category:'Composition / 構図・フレーミング' },
    { id:'foreground-leaves',     jp:'前景の葉抜け',                     category:'Composition / 構図・フレーミング' },
    { id:'low-grass-angle',       jp:'草目線ローアングル',               category:'Composition / 構図・フレーミング' }
  ];

  // ===== Presets（表情＋エフェクト混合） =====
  const presets = [
    {
      id: 'Forest-Morning-Refresh',
      label: '森の朝・リフレッシュ',
      expressions: ['fresh-breath-relief','forest-calm'],
      effects: [
        'leaf-dappled-light','morning-haze-soft','dew-sparkles',
        'green-bounce','foreground-leaves','path-leading'
      ]
    },
    {
      id: 'Petal-Breeze-Smile',
      label: '花びらと微風の笑み',
      expressions: ['sun-kissed-smile','breeze-delight'],
      effects: [
        'petal-scatter','sunray-through-leaves','fresh-green-grade',
        'canopy-softbox','low-grass-angle'
      ]
    },
    {
      id: 'After-Rain-Soothing',
      label: '雨上がりの癒やし',
      expressions: ['rain-soothed','dew-gentleness'],
      effects: [
        'after-rain-gloss','raindrop-ripples','moss-soft',
        'wet-stone','foreground-leaves'
      ]
    },
    {
      id: 'Wild-Garden-Curiosity',
      label: '野の庭・好奇心',
      expressions: ['petal-curiosity'],
      effects: [
        'pollen-drift','seed-fluff','chlorophyll-glow',
        'bg-leaf-veins','bark-texture','path-leading'
      ]
    },
    {
      id: 'Fern-Spiral-Calm',
      label: 'シダ螺旋の静けさ',
      expressions: ['forest-calm','fresh-breath-relief'],
      effects: [
        'bg-fern-spiral','leaf-dappled-light','morning-haze-soft',
        'green-bounce'
      ]
    }
  ];

  g.expressionEffects["part26"] = { expressions, effects, presets };
})(window);