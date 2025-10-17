// pose.leg.rules.v1.js
(function(root){ "use strict";
  const rules = [
    { id:"leg_stance_wide",  label:"Legs Wide / 足を開く",    tags:["leg","stance","wide","open"] },
    { id:"leg_cross",        label:"Leg Cross / 脚を組む",    tags:["leg","cross","elegant"] },
    { id:"leg_bend_knee",    label:"Knee Bend / ひざ曲げ",    tags:["leg","bend","knee","pose"] },
    { id:"leg_tiptoe",       label:"Tiptoe / つま先立ち",      tags:["leg","tiptoe","pose"] },
    { id:"leg_one_up",       label:"One Leg Up / 片脚上げ",    tags:["leg","one-leg","raise"] },
    { id:"leg_together",     label:"Legs Together / そろえる", tags:["leg","together","close"] },
    { id:"leg_step_forward", label:"Step Forward / 一歩前へ",  tags:["leg","step","forward"] }
  ];
  (root.__pose_rules = root.__pose_rules || []).push.apply(root.__pose_rules, rules);
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('pose', 2, { categories: [], presets: rules }); }catch(_){}
  }
})(window);