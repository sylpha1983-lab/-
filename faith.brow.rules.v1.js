// faith.brow.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-brow-rules-v1",
    kinds: ["raised","lowered","inward","outward","flat"],
    hints: {
      "raised":  "眉を上げる（驚き・関心）",
      "lowered": "眉を下げる（困惑・悲しみ）",
      "inward":  "眉を内側に寄せる（怒り・集中）",
      "outward": "眉を外側に開く（困り顔）",
      "flat":    "平常・ニュートラル"
    }
  };
  (root.__faith_rules = root.__faith_rules || {}).brow = rules;
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('faith', 1, { categories:[], presets:[] }); }catch(_){}
  }
})(window);