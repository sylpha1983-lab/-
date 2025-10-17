// faith.gaze.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-gaze-rules-v1",
    directions: ["camera","up","down","left","right","far","hands","partner"],
    hints: {
      "camera": "カメラを見る",
      "up": "上を見る",
      "down": "下を見る",
      "left": "左を見る",
      "right": "右を見る",
      "far": "遠くを見る",
      "hands": "手を見る",
      "partner": "相手を見る"
    }
  };
  (root.__faith_rules = root.__faith_rules || {}).gaze = rules;
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('faith', 1, { categories:[], presets:[] }); }catch(_){}
  }
})(window);