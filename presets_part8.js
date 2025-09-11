/* presets_part8.js (part 8) — UMD */
// 元の part8.js の presets を分割し、tags=[expressions+effects] に統合
;(function(g){
  const data = {
    presets: [
      { id:'Dazzle-Radiant-Sunbeam', label:'輝きのまぶしいサンビーム',
        tags:['wide-eyes-dazzle','radiant','smile-shy-twist','sunbeam-ray','halo-glow','petal-fall'] },
      { id:'Sneaky-Ember-Gleam', label:'いたずら・火の粉グリーム',
        tags:['narrow-eyes-sneaky','brow-sharp-intense','smile-shy-twist','ember-glow','motion-arc','backlight-dusk'] },
      { id:'Wistful-Snow-Dream', label:'物思い雪夢',
        tags:['wistful','lost-in-thought','lip-bite-anxious','snow-shimmer','dream-blur','screen-tone-hatch'] },
      { id:'Overjoyed-Bubbles', label:'大喜びバブル',
        tags:['overjoyed','smile-shy-twist','brow-arched-elegant','bubble-rise','halo-glow','shock-lines-burst'] },
      { id:'Euphoric-Petals', label:'多幸花びら',
        tags:['euphoric','glimmer-eyes-soft','mouth-open-gasp','petal-fall','sunbeam-ray','dream-blur'] }
    ]
  };
  if(g.__registerPresetPart) g.__registerPresetPart('presets_part8', data);
  else (g.__legacyPreset = g.__legacyPreset||{})['part8']=data;
})(window);