/* effect_part1.js — from part1.js (Light / 光) */
(function(){
  // 元: Effects → Light / 光 の項目
  const categories = [
    { name:'エフェクト系', items:[
      { id:'rim-light',          label:'リムライト / rim light' },
      { id:'rim-light-strong',   label:'強リムライト / rim light strong' },
      { id:'face-gloss',         label:'顔ハイライト光沢 / face gloss' },
      { id:'bloom',              label:'ブルーム / bloom' },
      { id:'vignette',           label:'ビネット / vignette' },
      { id:'impact-lines',       label:'集中線 / impact lines' },
      { id:'impact-lines-thick', label:'集中線（極太）/ impact lines thick' },
      { id:'under-eye-shadow',   label:'目の下の影 / under-eye shadow' },
      { id:'sparkle',            label:'キラキラ / sparkle' },
      { id:'rain',               label:'雨 / rain' }
    ] }
  ];

  const data = { categories, presets:[] };

  try{
    if (typeof window.__registerEffectPart === 'function') {
      window.__registerEffectPart('effect_part1', data);
    } else if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('effect', 1, data);
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('effect_part1', data);
    } else {
      window.effectBuilder = window.effectBuilder || {};
      window.effectBuilder['effect_part1'] = data;
    }
  }catch(e){ console.error('[effect_part1] register error:', e); }
})();