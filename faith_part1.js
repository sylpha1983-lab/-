/* faith_part1.js — expressions catalog extracted from part1.js */
/* Registers to __registerPromptPart('faith',1,data) 互換 */

(function(){
  // part1.js のプリセット内で参照されていた表情タグをカタログ化
  const categories = [
    { name: '表情（基本）', items: [
      { id:'jealous',          label:'嫉妬 / jealous' },
      { id:'pout',             label:'むくれ / pout' },
      { id:'side-eye-sharp',   label:'ジト目（鋭）/ side-eye sharp' },
      { id:'sleepy',           label:'眠い / sleepy' },
      { id:'half-lidded',      label:'半目 / half-lidded' },
      { id:'smile',            label:'微笑み / smile' },
      { id:'deadpan',          label:'無表情 / deadpan' },
      { id:'jitome',           label:'ジト目 / jitome' },
      { id:'side-eye',         label:'横目 / side-eye' },
      { id:'grin',             label:'ニヤリ / grin' },
      { id:'embarrassed',      label:'照れ / embarrassed' },
      { id:'surprised',        label:'驚き / surprised' },
      { id:'wide-eyed',        label:'見開き / wide-eyed' },
      { id:'sad',              label:'悲しい / sad' },
      { id:'teary-eyes',       label:'涙目 / teary eyes' }
    ] }
  ];

  const data = { categories, presets: [] };

  try{
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 1, data);
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part1', data);
    } else {
      // 後方互換の退避（起点2ローダが拾える）
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part1'] = data;
    }
  }catch(e){ console.error('[faith_part1] register error:', e); }
})();