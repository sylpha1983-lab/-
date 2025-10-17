// faith.sleepy.v1.js  (眠/疲労)
(function(root){ "use strict";
  const pack = { 
    id:"faith-sleepy-v1", 
    label:"眠 (Sleepy/Tired)",
    tags:["sleepy","dozy","yawn"],
    hints: {
      "sleepy": "眠い",
      "dozy": "とろんとした",
      "yawn": "あくび"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[{id:"sleepy_basic",label:"Sleepy / まぶた重め",tags:["sleepy"]}]
    });
  }catch(_){}}})(window);