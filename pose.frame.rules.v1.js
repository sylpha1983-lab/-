// pose.frame.rules.v1.js
(function(root){ "use strict";
  const rules = [
    { id:"frame_closeup",  label:"Close-up / 顔アップ",      tags:["frame","close-up","portrait","顔アップ"] },
    { id:"frame_bust",     label:"Bust / バストアップ",      tags:["frame","bust","upper-body","バストアップ"] },
    { id:"frame_waist",    label:"Half / 腰上",              tags:["frame","half","waist-up","腰上"] },
    { id:"frame_knee",     label:"3/4 / ひざ上",             tags:["frame","three-quarters","knee-up","ひざ上"] },
    { id:"frame_full",     label:"Full / 全身",              tags:["frame","full-body","standing","全身"] },
    { id:"frame_over_sh",  label:"Over-Shoulder / 肩越し",   tags:["frame","over-shoulder","OS","肩越し"] }
  ];
  (root.__pose_rules = root.__pose_rules || []).push.apply(root.__pose_rules, rules);
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('pose', 2, { categories: [], presets: rules }); }catch(_){}
  }
})(window);