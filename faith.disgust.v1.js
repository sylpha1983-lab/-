// faith.disgust.v1.js  (嫌)
(function(root){ "use strict";
  const pack = { 
    id: "faith-disgust-v1",
    label: "嫌 (Disgust)",
    tags: ["disgust"],
    hints: {
      "disgust": "嫌悪・ドン引き・しかめ・鼻しわ"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);

  if(typeof root.__registerPromptPart === "function"){
    try {
      root.__registerPromptPart('faith', 1, {
        categories: [],
        presets: [
          { id:"disgust_basic", label:"Disgust / しかめ", tags:["disgust"] }
        ]
      });
    } catch(_) {}
  }
})(window);