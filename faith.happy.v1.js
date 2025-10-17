// faith.happy.v1.js  (軽快/楽)
(function(root){ "use strict";
  const pack = { 
    id:"faith-happy-v1", 
    label:"楽 (Playful/Light)",
    tags:["relax","cheer","sparkle"],
    hints: {
      "relax": "リラックス",
      "cheer": "朗らか・元気づける",
      "sparkle": "きらめき・輝き"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);

  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[
        {id:"happy_light",label:"Light / 軽快",tags:["relax","sparkle"]}
      ]
    });
  }catch(_){}}})(window);