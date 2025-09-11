/* ============================================
   faith_part12.js  (from legacy part12.js)
   変換内容: expressions → 表情カタログ
   登録API: window.__registerPromptPart
   ============================================ */
(function(){
  var data = {
    categories: [
      {
        name: '表情',
        items: [
          { id:'wide-eyed-wonder', label:'目を大きく開く・驚き / wide-eyed-wonder' },
          { id:'narrow-skeptical', label:'細目・疑い / narrow-skeptical' },
          { id:'gaze-down-soft', label:'伏し目がち・やわら / gaze-down-soft' },
          { id:'fluttering-eyes', label:'まばたき・小刻み / fluttering-eyes' },
          { id:'side-glance-shy', label:'横目・はにかみ / side-glance-shy' },
          { id:'tears-brim', label:'涙目・たまり / tears-brim' },

          { id:'arched-curious', label:'好奇心の弓眉 / arched-curious' },
          { id:'angled-intense', label:'鋭角的な強眉 / angled-intense' },

          { id:'soft-open', label:'口を少し開ける・やわら / soft-open' },
          { id:'downturned-sad', label:'口角下げ・悲しみ / downturned-sad' },
          { id:'half-smile', label:'片側の微笑み / half-smile' },
          { id:'grimace', label:'しかめっ面 / grimace' },

          { id:'playful', label:'遊び心 / playful' },
          { id:'tense', label:'緊張 / tense' },
          { id:'vulnerable', label:'弱さ / vulnerable' },
          { id:'determined', label:'決意 / determined' },

          { id:'fatigued', label:'疲れ / fatigued' },
          { id:'energized', label:'活力 / energized' },
          { id:'lost-in-thought', label:'考え込み / lost-in-thought' },
          { id:'serene', label:'穏やか / serene' }
        ]
      }
    ],
    presets: []
  };

  var api = window.__registerPromptPart;
  try{
    if(typeof api === 'function'){
      if(api.length >= 3){ api('faith', 12, data); }
      else{ api('faith_part12', data); }
    }else{
      window.__pbPending = window.__pbPending || {};
      window.__pbPending['faith_part12'] = data;
    }
  }catch(e){ console.error('[faith_part12] register error', e); }
})();