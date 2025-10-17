// pose.hand.rules.v1.js
(function(root){ "use strict";
  const pack = {
    id:"pose-hand-rules-v1",
    label:"Pose Hand Rules (手のルール)",
    rules:[
      { id:"hand_open", label:"Hand Open（手を開く）", tags:["hand open","palm spread"] },
      { id:"hand_closed", label:"Hand Closed（手を握る）", tags:["hand closed","fist"] },
      { id:"hand_point", label:"Hand Point（指差し）", tags:["pointing","hand point"] }
    ]
  };
  (root.__pose_rules = root.__pose_rules || []).push(pack);
})(window);