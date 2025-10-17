// faith.neutral.v1.js  (Neutral)
(function(root){ "use strict";
  const pack = { 
    id:"faith-neutral-v1", 
    label:"Neutral (無)",
    tags:["neutral","blank","plain"],
    hints: {
      "neutral": "無",
      "blank": "無表情",
      "plain": "口閉じ"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[{id:"neutral_basic",label:"Neutral / 素",tags:["neutral"]}]
    });
  }catch(_){}}})(window);