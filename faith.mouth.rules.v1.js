// faith.mouth.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-mouth-rules-v1",
    kinds: [
      { id: "closed", label: "Closed / 閉じる" },
      { id: "open", label: "Open / 開く" },
      { id: "pout", label: "Pout / 口を尖らせる" },
      { id: "smirk", label: "Smirk / にやり" },
      { id: "omega", label: "Omega / ω口" },
      { id: "tongue", label: "Tongue / 舌を出す" },
      { id: "kiss", label: "Kiss / キス口" }
    ]
  };

  (root.__faith_rules = root.__faith_rules || {}).mouth = rules;

  if (typeof root.__registerPromptPart === "function"){
    try {
      root.__registerPromptPart('faith', 1, { categories:[], presets:[] });
    } catch(_){}
  }
})(window);