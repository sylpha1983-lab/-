// pose.jump.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-jump-v1", 
    label:"Jump (跳び)", 
    tags:["jump","leap","hop"], 
    hints: {
      "jump": "跳ぶ",
      "leap": "飛び越える",
      "hop": "軽く跳ぶ"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);

  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"Action",items:[{id:"jump_air",label:"Jump (空中)"}]}],
      presets:[{id:"jump_air",label:"Jump (空中)",tags:["jump","leap"]}]
    });
  }catch(_){}}})(window);