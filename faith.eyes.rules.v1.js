// faith.eyes.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-eyes-rules-v1",
    kinds: ["wide","half","closed","wink","sparkle","no-highlight","teary"],
    hints: {
      "wide": "目を大きく見開く",
      "half": "半目",
      "closed": "目を閉じる",
      "wink": "ウィンク",
      "sparkle": "目が輝く",
      "no-highlight": "ハイライトなし",
      "teary": "涙目"
    }
  };
  (root.__faith_rules = root.__faith_rules || {}).eyes = rules;
  if (typeof root.__registerPromptPart === "function"){
    try{ 
      root.__registerPromptPart('faith', 1, { categories:[], presets:[] }); 
    }catch(_){}
  }
})(window);