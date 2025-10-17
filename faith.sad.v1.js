// faith.sad.v1.js
(function(root){ "use strict";
  const pack = { 
    id:"faith-sad-v1", 
    label:"Sadness (悲しみ)",
    tags:["sad", "crying", "tears"],
    hints: {
      "sad": "悲しい",
      "crying": "泣いている",
      "tears": "涙"
    }
  };
  (root.__faith_packs = root.__faith_packs || []).push(pack);

  if(typeof root.__registerPromptPart==="function"){try{
    root.__registerPromptPart('faith',1,{
      categories:[],
      presets:[
        {id:"sad_basic", label:"Sadness / 悲しみ", tags:["sad","crying","tears"]}
      ]
    });
  }catch(_){}} 
})(window);