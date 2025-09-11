/* effect_part8.js (part 8) — UMD */
// 元の part8.js の effects を「エフェクトカタログ」に分割登録
;(function(g){
  const items = [
    { id:'halo-glow',           label:'光輪グロー / halo-glow',               group:'Light / 光' },
    { id:'backlight-dusk',      label:'逆光・夕暮れ / backlight-dusk',        group:'Light / 光' },
    { id:'sunbeam-ray',         label:'サンビーム光線 / sunbeam-ray',         group:'Light / 光' },

    { id:'shock-lines-burst',   label:'驚き線・バースト / shock-lines-burst', group:'Lines / 線' },
    { id:'motion-arc',          label:'モーション弧線 / motion-arc',          group:'Lines / 線' },

    { id:'petal-fall',          label:'花びら舞い / petal-fall',              group:'Particles / 粒子' },
    { id:'ember-glow',          label:'火の粉グロー / ember-glow',            group:'Particles / 粒子' },
    { id:'bubble-rise',         label:'泡上昇 / bubble-rise',                 group:'Particles / 粒子' },

    { id:'snow-shimmer',        label:'雪ちらちら・きらめき / snow-shimmer',  group:'Weather / 天候' },
    { id:'heat-haze',           label:'陽炎 / heat-haze',                      group:'Weather / 天候' },

    { id:'screen-tone-hatch',   label:'スクリーントーン・ハッチ / screen-tone-hatch', group:'VFX / その他' },
    { id:'dream-blur',          label:'ドリームブラー / dream-blur',                   group:'VFX / その他' }
  ];
  const categories = Array.from(
    items.reduce((m,it)=> (m.has(it.group)? m.get(it.group).push(it) : m.set(it.group,[it]), m), new Map())
  ).map(([name, arr]) => ({ name, items: arr.map(({id,label})=>({id,label})) }));

  const data = { categories, presets: [] };

  if(g.__registerEffectPart) g.__registerEffectPart('effect_part8', data);
  else (g.__legacyEffect = g.__legacyEffect||{})['part8']=data;
})(window);