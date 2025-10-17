// faith.focus.v1.js  (集中)
(function(root){ "use strict";
  const pack = { 
    id:"faith-focus-v1", 
    label:"集中 (Focus/Determined)",
    tags:["focus","determined"],
    hints: {
      "focus": "集中",
      "determined": "真剣さ・決意"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[{id:"focus_basic",label:"Focus / 集中",tags:["focus","determined"]}]
    });
  }catch(_){}}})(window);