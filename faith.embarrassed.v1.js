// faith.embarrassed.v1.js  (照)
(function(root){ "use strict";
  const pack = { id:"faith-embarrassed-v1", label:"照 (Embarrassed)",
    tags:["embarrassed","shy"],
    hints: {
      "embarrassed": "照れ・赤面",
      "shy": "恥ずかしがり・もじもじ"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{categories:[],presets:[{id:"embarrassed_basic",label:"照れ / 赤面",tags:["embarrassed","shy"]}]});
  }catch(_){}}})(window);