/* ============================================
   presets_part12.js  (from legacy part12.js)
   変換内容: {id,label, tags:[...]} // expressions + effects を統合
   登録API: window.__registerPresetPart
   ============================================ */
(function(){
  var presets = [
    {
      id: 'Curious-Glimmer',
      label: '好奇のきらめき',
      // legacy: expressions ['wide-eyed-wonder','arched-curious','soft-open']
      //          effects     ['glimmer','spotlight-circle','sparkle-thread']
      tags: ['wide-eyed-wonder','arched-curious','soft-open','glimmer','spotlight-circle','sparkle-thread']
    },
    {
      id: 'Shy-PetalFall',
      label: '恥じらいと花びら',
      tags: ['side-glance-shy','half-smile','playful','petal-fall','halo-soft','soft-haze']
    },
    {
      id: 'Tense-StormFlash',
      label: '緊張と稲光',
      tags: ['tense','grimace','narrow-skeptical','storm-flash','jagged-stress','glitch-frag']
    },
    {
      id: 'Vulnerable-SnowSerene',
      label: '弱さと雪・穏やかさ',
      tags: ['vulnerable','downturned-sad','serene','snow-flakes','soft-haze','glow-orbs']
    },
    {
      id: 'Determined-Sunbeam',
      label: '決意とサンビーム',
      tags: ['determined','angled-intense','soft-open','sunbeam-rays','glimmer','ink-smudge']
    },
    {
      id: 'Fatigued-Ash',
      label: '疲れと灰',
      tags: ['fatigued','lost-in-thought','gaze-down-soft','ash-particles','scribble-lines','halo-soft']
    }
  ];

  var data = { presets: presets, categories: [] };

  var api = window.__registerPresetPart;
  try{
    if(typeof api === 'function'){
      if(api.length >= 3){ api('presets', 12, data); }
      else{ api('presets_part12', data); }
    }else{
      window.__pbPending = window.__pbPending || {};
      window.__pbPending['presets_part12'] = data;
    }
  }catch(e){ console.error('[presets_part12] register error', e); }
})();