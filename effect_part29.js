/* ============================================
   effect_part29.js v1.0 (2025-09-10)
   Source: part29.js（雷・嵐）
   ※「Effects / Lighting / Background Geometry / Materials」を effect 側へ統合
   ============================================ */
(function (g) {
  const categories = [
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
        { id:'bg-storm-skyline',    label:'嵐のスカイライン / storm skyline' },
        { id:'bg-coast-tempest',    label:'荒れる海岸線 / coastal tempest' },
        { id:'bg-mountain-tempest', label:'山嵐の稜線 / mountain tempest' }
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

  const data = { categories, presets: [] };
  if (typeof g.__registerEffectPart === 'function') g.__registerEffectPart('effect_part29', data);
  g.__parts = g.__parts || {}; g.__parts.effect = g.__parts.effect || {}; g.__parts.effect[29] = data;
})(window);

export default {};