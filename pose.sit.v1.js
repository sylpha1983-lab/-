// pose.sit.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-sit-v1", 
    label:"座り (Sit)",
    tags:["sit","sitting"],
    hints: {
      "sit": "座る",
      "sitting": "着席"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);
  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"基本姿勢",items:[{id:"sit_basic",label:"着席 (Sit)"}]}],
      presets:[{id:"sit_basic",label:"着席 (Sit)",tags:["sit","sitting"]}]
    });
  }catch(_){}}})(window);