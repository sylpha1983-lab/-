/* ============================================
   Expression + Effects Builder — part25.js (25/40)
   テーマ：宇宙・星座 / Space & Constellations
   格納：window.expressionEffects["part25"] = {expressions,effects,presets}
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions（表情） =====
  const expressions = [
    { id:'stargaze-awe',      jp:'星見の畏敬',                 category:'Emotion / 感情' },
    { id:'dreamy-cosmic',     jp:'夢見心地（宇宙）',           category:'Emotion / 感情' },
    { id:'serene-moonlit',    jp:'月光の静けさ',               category:'State / 状態' },
    { id:'wistful-skyward',   jp:'物思い・空を見上げる',       category:'Emotion / 感情' },
    { id:'hopeful-wish',      jp:'願いを込める',               category:'Emotion / 感情' },
    { id:'lonely-vastness',   jp:'宇宙的孤独',                 category:'Emotion / 感情' },
    { id:'curious-astral',    jp:'好奇の眼差し（星々）',       category:'Emotion / 感情' },
    { id:'quiet-reverence',   jp:'静かな敬虔',                 category:'Emotion / 感情' }
  ];

  // ===== Effects（演出・環境） =====
  const effects = [
    // Space / Sky
    { id:'milky-way-arc',       jp:'天の川アーチ',                 category:'Space / 宇宙' },
    { id:'meteor-shower',       jp:'流星群',                       category:'Space / 宇宙' },
    { id:'aurora-veil',         jp:'オーロラのヴェール',           category:'Light / 光' },
    { id:'nebula-swell',        jp:'星雲のうねり',                 category:'Space / 宇宙' },
    { id:'starlight-dust',      jp:'星明かりの微粒子',             category:'Particles / 粒子' },
    { id:'constellation-lines', jp:'星座ライン',                   category:'Space / 宇宙' },
    { id:'deep-space-vignette', jp:'ディープスペース・ビネット',   category:'VFX / その他' },
    { id:'moonbeam-soft',       jp:'やわ月光ビーム',               category:'Light / 光' },
    { id:'planetary-halo',      jp:'惑星のハロー',                 category:'Light / 光' },
    { id:'comet-trail',         jp:'彗星の尾',                     category:'Space / 宇宙' },

    // Helpers
    { id:'nocturne-contrast',   jp:'夜景コントラスト補正',         category:'VFX / その他' },
    { id:'star-bokeh',          jp:'星形ボケ',                     category:'Light / 光' },
    { id:'space-fog-thin',      jp:'薄い宇宙霧',                   category:'VFX / その他' },

    // Background Geometry
    { id:'bg-constellation-grid', jp:'星座グリッド',               category:'Background Geometry / 背景ジオメトリ' },
    { id:'bg-spiral-galaxy',      jp:'渦銀河パターン',             category:'Background Geometry / 背景ジオメトリ' },
    { id:'bg-orbit-rings',        jp:'軌道リング',                 category:'Background Geometry / 背景ジオメトリ' },

    // Lighting details
    { id:'backlit-moon',        jp:'月背光',                       category:'Lighting / ライティング詳細' },
    { id:'starlight-rim',       jp:'星明かりリムライト',           category:'Lighting / ライティング詳細' },
    { id:'cool-night-bounce',   jp:'冷色夜間バウンス',             category:'Lighting / ライティング詳細' },

    // Composition
    { id:'skyward-framing',     jp:'上方シフト構図',               category:'Composition / 構図・フレーミング' },
    { id:'silhouette-foreground', jp:'前景シルエット',             category:'Composition / 構図・フレーミング' }
  ];

  // ===== Presets（表情＋エフェクト混合） =====
  const presets = [
    {
      id:'Cosmic-Awe-Viewing',
      label:'宇宙への畏敬（流星群×星雲）',
      expressions:['stargaze-awe','wistful-skyward'],
      effects:['meteor-shower','nebula-swell','starlight-dust','starlight-rim','skyward-framing','deep-space-vignette']
    },
    {
      id:'Aurora-Dream',
      label:'オーロラ・ドリーム（静かな敬虔）',
      expressions:['dreamy-cosmic','quiet-reverence'],
      effects:['aurora-veil','moonbeam-soft','space-fog-thin','cool-night-bounce','silhouette-foreground']
    },
    {
      id:'MilkyWay-Wish',
      label:'天の川に願いを',
      expressions:['hopeful-wish','serene-moonlit'],
      effects:['milky-way-arc','constellation-lines','bg-constellation-grid','nocturne-contrast','starlight-rim']
    },
    {
      id:'Lonely-Galaxy',
      label:'孤独と銀河',
      expressions:['lonely-vastness','curious-astral'],
      effects:['bg-spiral-galaxy','deep-space-vignette','planetary-halo','space-fog-thin','backlit-moon']
    },
    {
      id:'Comet-Encounter',
      label:'彗星遭遇（星ボケ演出）',
      expressions:['stargaze-awe','dreamy-cosmic'],
      effects:['comet-trail','star-bokeh','bg-orbit-rings','nocturne-contrast','skyward-framing']
    }
  ];

  g.expressionEffects["part25"] = { expressions, effects, presets };
})(window);