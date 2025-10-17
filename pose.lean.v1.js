// pose.lean.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-lean-v1",
    label:"Lean (もたれ/寄りかかり)",
    // プロンプトに渡るのは英語タグのみ
    tags:["lean","against"],
    // 日本語の補足説明（UI用）
    hints:{
      "lean":"もたれる / 寄りかかる",
      "against":"（壁などに）寄りかかる"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);

  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"姿勢バリエーション",items:[{id:"lean_wall",label:"壁にもたれる (Lean)"}]}],
      presets:[{id:"lean_wall",label:"壁にもたれる (Lean)",tags:["lean","against"]}]
    });
  }catch(_){}} 
})(window);