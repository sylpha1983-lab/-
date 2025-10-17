// faith.intensity.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-intensity-rules-v1",
    scale: ["subtle","medium","strong","overblown"], // 微妙→中→強→オーバー
    hints: {
      "subtle": "微妙",
      "medium": "中",
      "strong": "強",
      "overblown": "オーバー"
    }
  };
  (root.__faith_rules = root.__faith_rules || {}).intensity = rules;
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('faith', 1, { categories:[], presets:[] }); }catch(_){}
  }
})(window);