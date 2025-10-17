// pose.turn.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-turn-v1", 
    label:"ひねり / 振り向き (Turn/Twist)",
    tags:["turn","twist","look-back"],
    hints: {
      "turn": "ひねり",
      "twist": "ねじれ",
      "look-back": "振り向き"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);
  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"上半身",items:[{id:"turn_lookback",label:"振り向き"}]}],
      presets:[{id:"turn_lookback",label:"振り向き",tags:["turn","look-back"]}]
    });
  }catch(_){}}})(window);