// faith.anger.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"faith-anger-v1", 
    label:"Anger (怒り)",
    tags:["angry", "furious", "frown"],
    hints: {
      "angry": "怒り",
      "furious": "激昂",
      "frown": "眉をひそめる"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);

  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[
        {id:"anger_basic", label:"Anger / 怒り", tags:["angry","frown"]}
      ]
    });
  }catch(_){}} 
})(window);