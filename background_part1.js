/* ============================================
   background_part1.js  v1.0  (Desert & Environment slice)
   形式: window.__registerBackgroundPart("background_part1", { categories, presets })
   ※presetsは背景専用にしないため今回は空配列。必要になれば後続で追加可。
============================================ */
(function (g) {
  // データ形式: { categories:[{name, items:[{id,label}]}], presets:[] }
  const categories = [
    {
      name: 'Background Geometry / 背景ジオメトリ',
      items: [
        { id:'bg-dune-ridges',        label:'砂丘の尾根 / dune ridges' },
        { id:'bg-wadi-canyon',        label:'ワジ渓谷 / wadi canyon' },
        { id:'bg-rock-arches-desert', label:'砂漠の岩アーチ / desert rock arches' },
        { id:'bg-oasis-palm',         label:'オアシスと椰子 / oasis with palms' }
      ]
    },
    {
      name: 'Materials & Surface / 素材・表面',
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

  const presets = []; // 背景専用のプリセットはここでは定義しません

  const data = { categories, presets };

  // レジストリ登録（既存ローダ互換）
  if (typeof g.__registerBackgroundPart === 'function') {
    g.__registerBackgroundPart('background_part1', data);
  }
  // 旧互換（念のため：共通レジスタでも拾えるように）
  if (typeof g.__registerPromptPart === 'function') {
    g.__registerPromptPart('background_part1', data);
  }
})(window);