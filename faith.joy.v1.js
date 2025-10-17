// faith.joy.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"faith-joy-v1", 
    label:"Joy (喜び)",
    tags:["joy", "smile", "delight"],
    hints: {
      "joy": "喜び",
      "smile": "笑顔",
      "delight": "楽しさ"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);

  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[
        {id:"joy_basic", label:"Joy / 喜び", tags:["joy","smile"]}
      ]
    });
  }catch(_){}} 
})(window);