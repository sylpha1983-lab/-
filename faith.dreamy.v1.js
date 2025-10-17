// faith.dreamy.v1.js  (夢見心地/トランス)
(function(root){ "use strict";
  const pack = { 
    id:"faith-dreamy-v1", 
    label:"夢 (Dreamy/Trance)",
    tags:["dreamy","dazed"],
    hints: {
      "dreamy": "夢見心地・うっとり",
      "dazed": "ぼんやり・とろけ"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);
  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[{id:"dreamy_basic",label:"Dreamy / 夢見心地",tags:["dreamy","dazed"]}]
    });
  }catch(_){}}})(window);