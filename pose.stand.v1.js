// pose.stand.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-stand-v1", 
    label:"Stand (直立/立ち)",
    // プロンプトに渡るのは英語タグのみ
    tags:["stand","standing","upright"],
    // 日本語の補足説明（UI 表示用）
    hints: {
      "stand":    "立つ",
      "standing": "立っている最中",
      "upright":  "直立"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);

  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"基本姿勢 / Basic Posture",items:[{id:"stand_basic",label:"Stand / 直立"}]}],
      presets:[{id:"stand_basic",label:"Stand / 直立",tags:["stand","upright"]}]
    });
  }catch(_){}} 
})(window);