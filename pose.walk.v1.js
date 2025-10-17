// pose.walk.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-walk-v1",
    label:"Walk (歩き)",
    // 英語タグのみ
    tags:["walk","walking","stride"],
    // 日本語の補足説明（UI表示用）
    hints: {
      "walk": "歩く",
      "walking": "歩行中",
      "stride": "大股で歩く"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);

  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"移動 / Movement",items:[{id:"walk_casual",label:"Walk / 歩き（カジュアル）"}]}],
      // プリセットの実タグも英語のみ
      presets:[{id:"walk_casual",label:"Walk / 歩き（カジュアル）",tags:["walk","stride"]}]
    });
  }catch(_){}}
})(window);