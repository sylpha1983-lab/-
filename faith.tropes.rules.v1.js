// faith.tropes.rules.v1.js
(function(root){ "use strict";
  const rules = {
    id: "faith-tropes-rules-v1",
    marks: ["sweat","anger-mark","shadow-face","sparkle","spiral-eyes","nosebleed"],
    hints: {
      "sweat": "汗マーク",
      "anger-mark": "怒りマーク（額の十字）",
      "shadow-face": "影の顔（落ち込み）",
      "sparkle": "キラキラ（目の輝きなど）",
      "spiral-eyes": "ぐるぐる目（混乱・失神）",
      "nosebleed": "鼻血（興奮表現）"
    }
  };
  (root.__faith_rules = root.__faith_rules || {}).tropes = rules;
  if (typeof root.__registerPromptPart === "function"){
    try{ root.__registerPromptPart('faith', 1, { categories:[], presets:[] }); }catch(_){}
  }
})(window);