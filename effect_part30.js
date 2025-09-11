/* ============================================
   effect_part30.js  (from part30.js Effects+Lighting+Materials+Composition)
   ============================================ */
(function(g){
  // 元: "Effects" に加え、"Lighting" / "Materials" / "Composition" も
  // エフェクト系として同梱（背景ジオメトリは background に分離済）
  // 根拠: Effects 行21-30 / Lighting 行33-38 / Materials 行24-29 / Composition 行33-37 など。
  const categories = [
    {
      name: 'Effects / エフェクト',
      items: [
        { id:'heat-haze',        label:'陽炎（ヒートヘイズ） / heat haze' },
        { id:'mirage-waves',     label:'蜃気楼の揺らめき / mirage waves' },
        { id:'sun-glare',        label:'太陽グレア / sun glare' },
        { id:'sand-dust-drift',  label:'砂塵の漂い / drifting sand dust' },
        { id:'dust-devil',       label:'つむじ風 / dust devil' },
        { id:'golden-haze',      label:'ゴールデンヘイズ / golden haze' },
        { id:'heat-vortex-soft', label:'熱の渦・柔 / soft heat vortex' }
      ]
    },
    {
      name: 'Lighting / ライティング詳細',
      items: [
        { id:'harsh-noon',         label:'真昼の強光 / harsh noon light' },
        { id:'golden-hour-desert', label:'砂漠のゴールデンアワー / desert golden hour' },
        { id:'backlit-dune-rim',   label:'砂丘の縁・逆光リム / backlit dune rim' },
        { id:'specular-sun-spots', label:'ギラつくハイライト / specular sun spots' }
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
        { id:'low-angle-mirage',    label:'ロウアングル・蜃気楼越し / low angle through mirage' },
        { id:'long-journey-lines',  label:'遠近線で旅情 / long journey lines' },
        { id:'silhouette-dune-crest',label:'砂丘稜線のシルエット / silhouette on dune crest' }
      ]
    }
  ];

  const data = { categories, presets: [] };
  if (typeof g.__registerEffectPart === 'function') {
    g.__registerEffectPart('effect_part30', data);
  } else if (typeof g.__registerPromptPart === 'function') {
    // 旧版ビルダー互換（effect_* を自動で effect に配架できる実装がある場合に備え）
    g.__registerPromptPart('effect_part30', data);
  }
})(window);