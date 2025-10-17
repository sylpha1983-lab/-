// pose.balance.rules.v1.js
(function(root){ "use strict";
  const rules = [
    { id:"balance_forward",  label:"Forward Lean",  tags:["balance","lean","forward"], hints:{ "balance_forward":"前傾" } },
    { id:"balance_backward", label:"Backward Lean", tags:["balance","lean","backward"], hints:{ "balance_backward":"後傾" } },
    { id:"balance_side",     label:"Side Lean",     tags:["balance","lean","side"],     hints:{ "balance_side":"横に傾ける" } },
    { id:"balance_center",   label:"Centered",      tags:["balance","center","neutral"],hints:{ "balance_center":"安定" } },
    { id:"balance_dynamic",  label:"Dynamic",       tags:["balance","dynamic","motion"],hints:{ "balance_dynamic":"動き" } }
  ];
  (root.__pose_rules = root.__pose_rules || []).push.apply(root.__pose_rules, rules);
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('pose', 2, { categories: [], presets: rules }); }catch(_){}
  }
})(window);