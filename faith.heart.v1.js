// faith.heart.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"faith-heart-v1", 
    label:"heart (Love)",
    tags:["heart","love"],
    hints: {
      "heart": "ハート",
      "love": "愛"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[
        {id:"heart_basic",label:"Love / ハート",tags:["heart","love"]}
      ]
    });
  }catch(_){}}})(window);