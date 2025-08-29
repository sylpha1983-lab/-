/* ============================================
   Prompt Builder — part29.js (29/40)
   Theme: 雷・嵐 / Thunder & Storm
   形式：window.promptBuilder["part29"] = { categories, presets }
   ============================================ */
(function (g) {
  g.promptBuilder = g.promptBuilder || {};

  const categories = [
    {
      name: 'Expressions / 表情',
      items: [
        { id:'storm-focus',        label:'嵐を見据える集中 / storm focus' },
        { id:'awe-struck',         label:'畏怖のまなざし / awe-struck' },
        { id:'fear-steady',        label:'恐れを堪える / steady in fear' },
        { id:'thrill-charged',     label:'高揚・帯電 / thrill charged' },
        { id:'calm-in-tempest',    label:'嵐の中の静けさ / calm in the tempest' }
      ]
    },
    {
      name: 'Effects / エフェクト',
      items: [
        { id:'forked-lightning',   label:'分岐稲妻 / forked lightning' },
        { id:'sheet-lightning',    label:'シート状稲光 / sheet lightning' },
        { id:'ball-lightning-vfx', label:'球電（VFX） / ball lightning (vfx)' },
        { id:'horizon-strike',     label:'地平線に落雷 / horizon strike' },
        { id:'rain-streaks',       label:'雨筋 / rain streaks' },
        { id:'downpour-mist',      label:'豪雨ミスト / downpour mist' },
        { id:'wind-gust-trails',   label:'突風トレイル / wind gust trails' },
        { id:'puddle-splash',      label:'水たまりの跳ね / puddle splash' },
        { id:'wet-bokeh',          label:'濡れボケ / wet bokeh' },
        { id:'anvil-clouds',       label:'かなとこ雲 / anvil clouds' },
        { id:'mammatus-clouds',    label:'乳房雲 / mammatus clouds' }
      ]
    },
    {
      name: 'Lighting / ライティング詳細',
      items: [
        { id:'strobe-flash',       label:'ストロボ閃光 / strobe flash' },
        { id:'split-light-storm',  label:'分割光（嵐） / split light (storm)' },
        { id:'backlit-silhouette', label:'逆光シルエット / backlit silhouette' },
        { id:'wet-rim-gloss',      label:'濡れリム・グロス / wet rim gloss' },
        { id:'high-contrast',      label:'ハイコントラスト / high contrast' }
      ]
    },
    {
      name: 'Background Geometry / 背景ジオメトリ',
      items: [
        { id:'bg-storm-skyline',   label:'嵐のスカイライン / storm skyline' },
        { id:'bg-coast-tempest',   label:'荒れる海岸線 / coastal tempest' },
        { id:'bg-mountain-tempest',label:'山嵐の稜線 / mountain tempest' }
      ]
    },
    {
      name: 'Materials / 素材・表面',
      items: [
        { id:'rain-soaked-fabric', label:'濡れた布地 / rain-soaked fabric' },
        { id:'beaded-metal',       label:'水滴の金属面 / beaded metal' },
        { id:'slick-asphalt',      label:'濡れアスファルト / slick asphalt' }
      ]
    }
  ];

  const presets = [
    {
      id: 'Lightning-Resolve',
      label: '稲妻の決意',
      tags: [
        'storm-focus','forked-lightning','strobe-flash',
        'wet-rim-gloss','bg-storm-skyline','slick-asphalt'
      ]
    },
    {
      id: 'Tempest-Awe',
      label: '嵐への畏怖',
      tags: [
        'awe-struck','sheet-lightning','downpour-mist',
        'backlit-silhouette','anvil-clouds','rain-soaked-fabric'
      ]
    },
    {
      id: 'Gust-Thrill',
      label: '突風のスリル',
      tags: [
        'thrill-charged','wind-gust-trails','puddle-splash',
        'split-light-storm','wet-bokeh','bg-coast-tempest'
      ]
    },
    {
      id: 'Calm-Before-Strike',
      label: '落雷前の静寂',
      tags: [
        'calm-in-tempest','mammatus-clouds','horizon-strike',
        'high-contrast','beaded-metal','bg-mountain-tempest'
      ]
    },
    {
      id: 'Storm-Focus-Runner',
      label: '嵐に向かう者',
      tags: [
        'storm-focus','rain-streaks','downpour-mist',
        'strobe-flash','wet-rim-gloss','slick-asphalt'
      ]
    }
  ];

  const data = { categories, presets };
  // 直接代入
  g.promptBuilder["part29"] = data;
  // 予備：ローダーが登録関数を提供している場合はそれも呼ぶ
  if (typeof g.__registerPromptPart === 'function') g.__registerPromptPart("part29", data);
})(window);