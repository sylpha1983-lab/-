/* ============================================
   Expression + Effects Builder — part24.js (24/40)
   テーマ：ハート・アトモスフィア（泡/水滴/空/光学現象）
   格納：window.expressionEffects["part24"] = {expressions,effects,presets}
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions（空気感と連動する表情セット） =====
  const expressions = [
    { id:'playful-bubble-kiss',   jp:'遊び心・バブルキス',         category:'Mouth / 口' },
    { id:'awe-heart-sky',         jp:'見上げる驚き・ハート空',     category:'Emotion / 感情' },
    { id:'serene-ocean-love',     jp:'穏やかな海風・想い',         category:'State / 状態' },
    { id:'nostalgic-fog-heart',   jp:'ノスタルジア・霧のハート',   category:'Emotion / 感情' },
    { id:'festive-firework-smile',jp:'祝祭・花火の微笑み',         category:'Emotion / 感情' }
  ];

  // ===== Effects（環境・現象） =====
  const effects = [
    // Water / Bubble / Condensation
    { id:'bubble-heart-field',    jp:'泡ハート・フィールド',       category:'Particles / 粒子' },
    { id:'waterdrop-heart-bokeh', jp:'水滴ハート・ボケ',           category:'Light / 光' },
    { id:'fog-glass-heart-draw',  jp:'曇りガラス・指でハート',     category:'Overlay / 合成' },

    // Sky / Weather / Light
    { id:'cloud-heart-formation', jp:'雲のハート形成',             category:'Weather / 天候' },
    { id:'fireworks-heart-burst', jp:'花火・ハートバースト',       category:'Light / 光' },
    { id:'aurora-heart-arc',      jp:'オーロラ・ハートアーク',     category:'Light / 光' },
    { id:'sunflare-heart-petal',  jp:'太陽フレア・ハート花弁',     category:'Light / 光' },

    // Overlay / Composite
    { id:'window-rain-heart-trace',jp:'濡れ窓・ハートの軌跡',       category:'Overlay / 合成' },
    { id:'mist-heart-breath',     jp:'吐息のミスト・ハート',       category:'VFX / その他' }
  ];

  // ===== Presets（雰囲気別） =====
  const presets = [
    {
      id:'BubbleKiss-AquaGlow',
      label:'バブルキス・アクアグロウ',
      expressions:['playful-bubble-kiss','serene-ocean-love'],
      effects:['bubble-heart-field','waterdrop-heart-bokeh','sunflare-heart-petal']
    },
    {
      id:'FogGlass-Nostalgia',
      label:'曇りガラス・ノスタルジア',
      expressions:['nostalgic-fog-heart'],
      effects:['fog-glass-heart-draw','window-rain-heart-trace','mist-heart-breath']
    },
    {
      id:'SkyLook-AuroraHeart',
      label:'見上げ空・オーロラハート',
      expressions:['awe-heart-sky'],
      effects:['aurora-heart-arc','cloud-heart-formation','sunflare-heart-petal']
    },
    {
      id:'Festival-FireworksHeart',
      label:'祝祭・花火ハート',
      expressions:['festive-firework-smile','playful-bubble-kiss'],
      effects:['fireworks-heart-burst','waterdrop-heart-bokeh','bubble-heart-field']
    }
  ];

  g.expressionEffects["part24"] = { expressions, effects, presets };
})(window);