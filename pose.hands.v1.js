// pose.hands.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"pose-hands-v1",
    label:"Hands (手ぶり/ジェスチャ)",
    // プロンプトに渡るのは英語タグのみ
    tags:["hand-pose","hands-up","peace","thumbs-up","wave"],
    // 日本語の補足（UI表示用）
    hints:{
      "hand-pose":"手のポーズ基礎",
      "hands-up":"手を上げる",
      "peace":"Vサイン",
      "thumbs-up":"サムズアップ",
      "wave":"手を振る"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);

  if(typeof root.__registerPosePart==="function"){try{
    root.__registerPosePart('pose',1,{
      categories:[{name:"Hand Poses / 手のポーズ",items:[
        {id:"hands_peace", label:"Peace / ピース"},
        {id:"hands_wave",  label:"Wave / 手を振る"},
        {id:"hands_thumb", label:"Thumbs-up / サムズアップ"},
        {id:"hands_raise", label:"Hands Up / 挙手"}
      ]}],
      presets:[
        {id:"hands_peace", label:"Peace / ピース",       tags:["hand-pose","peace"]},
        {id:"hands_wave",  label:"Wave / 手を振る",      tags:["hand-pose","wave"]},
        {id:"hands_thumb", label:"Thumbs-up / サムズアップ", tags:["hand-pose","thumbs-up"]},
        {id:"hands_raise", label:"Hands Up / 挙手",      tags:["hand-pose","hands-up"]}
      ]
    });
  }catch(_){}} 
})(window);