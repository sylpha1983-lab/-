// faith.surprise.v1.js
(function(root){ "use strict";
  const pack = {
    id: "faith-surprise-v1",
    label: "驚 (Surprise)",
    tags: ["surprised","shocked","astonished","wow"],
    hints:{                          // ← 追加
      surprised: "驚き",
      shocked:   "衝撃",
      astonished:"仰天",
      wow:       "わお"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);

  if (typeof root.__registerPromptPart === "function"){
    try{
      root.__registerPromptPart('faith', 1, {
        categories: [],
        presets: [{ id:"surprise_basic", label:"驚き / 目見開き", tags:["surprised"] }]
      });
    }catch(_){}
  }
})(window);