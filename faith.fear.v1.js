// faith.fear.v1.js  (恐)
(function(root){ "use strict";
  const pack = { id:"faith-fear-v1", label:"恐 (Fear)",
    tags:["fear","scared"],
    hints: {
      "fear": "恐れ、不安",
      "scared": "怯え"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{categories:[],presets:[{id:"fear_basic",label:"Fear / 怯え",tags:["scared","fear"]}]});
  }catch(_){}}})(window);