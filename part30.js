/* ============================================
   Prompt Builder — part30.js (30/40)
   Theme: 砂漠・熱気 / Desert & Heat
   形式：window.promptBuilder["part30"] = { categories, presets }
   ============================================ */
(function (g) {
  g.promptBuilder = g.promptBuilder || {};

  const categories = [
    {
      name: 'Expressions / 表情',
      items: [
        { id:'heat-squint',         label:'強光で目を細める / heat squint' },
        { id:'endure-heat',         label:'灼熱に耐える / enduring heat' },
        { id:'wanderer-calm',       label:'放浪者の静けさ / wanderer calm' },
        { id:'parched-fatigue',     label:'乾きの疲労 / parched fatigue' },
        { id:'found-oasis-relief',  label:'オアシスの安堵 / relief at oasis' }
      ]
    },
    {
      name: 'Effects / エフェクト',
      items: [
        { id:'heat-haze',           label:'陽炎（ヒートヘイズ） / heat haze' },
        { id:'mirage-waves',        label:'蜃気楼の揺らめき / mirage waves' },
        { id:'sun-glare',           label:'太陽グレア / sun glare' },
        { id:'sand-dust-drift',     label:'砂塵の漂い / drifting sand dust' },
        { id:'dust-devil',          label:'つむじ風 / dust devil' },
        { id:'golden-haze',         label:'ゴールデンヘイズ / golden haze' },
        { id:'heat-vortex-soft',    label:'熱の渦・柔 / soft heat vortex' }
      ]
    },
    {
      name: 'Lighting / ライティング詳細',
      items: [
        { id:'harsh-noon',          label:'真昼の強光 / harsh noon light' },
        { id:'golden-hour-desert',  label:'砂漠のゴールデンアワー / desert golden hour' },
        { id:'backlit-dune-rim',    label:'砂丘の縁・逆光リム / backlit dune rim' },
        { id:'specular-sun-spots',  label:'ギラつくハイライト / specular sun spots' }
      ]
    },
    {
      name: 'Background Geometry / 背景ジオメトリ',
      items: [
        { id:'bg-dune-ridges',       label:'砂丘の尾根 / dune ridges' },
        { id:'bg-wadi-canyon',       label:'ワジ渓谷 / wadi canyon' },
        { id:'bg-rock-arches-desert',label:'砂漠の岩アーチ / desert rock arches' },
        { id:'bg-oasis-palm',        label:'オアシスと椰子 / oasis with palms' }
      ]
    },
    {
      name: 'Materials / 素材・表面',
      items: [
        { id:'sun-bleached-fabric', label:'日焼け布 / sun-bleached fabric' },
        { id:'sand-grain-sheen',    label:'砂粒のきらめき / sand grain sheen' },
        { id:'weathered-leather',   label:'風化レザー / weathered leather' },
        { id:'cracked-earth',       label:'ひび割れた大地 / cracked earth' }
      ]
    },
    {
      name: 'Composition / 構図・フレーミング',
      items: [
        { id:'low-angle-mirage',     label:'ロウアングル・蜃気楼越し / low angle through mirage' },
        { id:'long-journey-lines',   label:'遠近線で旅情 / long journey lines' },
        { id:'silhouette-dune-crest',label:'砂丘稜線のシルエット / silhouette on dune crest' }
      ]
    }
  ];

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

  const data = { categories, presets };
  g.promptBuilder["part30"] = data;
  if (typeof g.__registerPromptPart === 'function') g.__registerPromptPart("part30", data);
})(window);