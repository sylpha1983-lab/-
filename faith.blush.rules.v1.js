// faith.blush.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-blush-rules-v1",
    levels: [
      { value: "none",   label: "赤面なし" },
      { value: "light",  label: "ほんのり赤面" },
      { value: "medium", label: "中程度の赤面" },
      { value: "heavy",  label: "強い赤面" }
    ]
  };
  (root.__faith_rules = root.__faith_rules || {}).blush = rules;
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('faith', 1, { categories:[], presets:[] }); }catch(_){}
  }
})(window);