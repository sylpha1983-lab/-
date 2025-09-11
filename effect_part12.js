/* ============================================
   effect_part12.js  (from legacy part12.js)
   変換内容: presets 内で参照される effects をエフェクトカタログ化
   登録API: window.__registerEffectPart
   ※ legacy の part12 には effects 一覧の明示ブロックがないため、
     プリセット参照から欠落なく抽出し、代表カテゴリへ自動仕分け。
   ============================================ */
(function(){
  // プリセット参照から抽出：glimmer, spotlight-circle, sparkle-thread, petal-fall, halo-soft,
  // soft-haze, storm-flash, jagged-stress, glitch-frag, snow-flakes, glow-orbs,
  // sunbeam-rays, ink-smudge, ash-particles, scribble-lines
  var items = {
    'Light / 光': [
      { id:'glimmer', label:'glimmer' },
      { id:'spotlight-circle', label:'spotlight-circle' },
      { id:'halo-soft', label:'halo-soft' },
      { id:'sunbeam-rays', label:'sunbeam-rays' },
      { id:'glow-orbs', label:'glow-orbs' }
    ],
    'Lines / 線': [
      { id:'jagged-stress', label:'jagged-stress' },
      { id:'scribble-lines', label:'scribble-lines' }
    ],
    'Particles / 粒子': [
      { id:'sparkle-thread', label:'sparkle-thread' },
      { id:'ash-particles', label:'ash-particles' },
      { id:'snow-flakes', label:'snow-flakes' }
    ],
    'Weather / 天候': [
      { id:'storm-flash', label:'storm-flash' }
    ],
    'VFX / その他': [
      { id:'glitch-frag', label:'glitch-frag' },
      { id:'soft-haze',  label:'soft-haze' },
      { id:'ink-smudge', label:'ink-smudge' }
    ]
  };

  var data = { categories: Object.keys(items).map(function(name){ return { name:name, items:items[name] }; }), presets: [] };

  var api = window.__registerEffectPart;
  try{
    if(typeof api === 'function'){
      if(api.length >= 3){ api('effect', 12, data); }
      else{ api('effect_part12', data); }
    }else{
      window.__pbPending = window.__pbPending || {};
      window.__pbPending['effect_part12'] = data;
    }
  }catch(e){ console.error('[effect_part12] register error', e); }
})();