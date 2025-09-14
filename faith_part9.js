/* faith_part9.js — merged parts 83..92 (v1.0)
   - Registers: window.__registerPromptPart('faith', 9, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // ====== 収集元データ（83..92） ======
  const S83 = {
    categories:[{name:"Expressions / 表情",items:[
      {id:"gratitude-smile",label:"感謝の笑み / gratitude-smile"},
      {id:"thankful-tears",label:"感謝の涙 / thankful-tears"},
      {id:"moved-expression",label:"胸を打たれた表情 / moved-expression"},
      {id:"overwhelmed-joy",label:"込み上げる喜び / overwhelmed-joy"},
      {id:"relieved-thankful",label:"安堵と感謝 / relieved-thankful"},
      {id:"teary-smile",label:"涙ぐむ笑顔 / teary-smile"},
      {id:"grateful-gaze",label:"感謝のまなざし / grateful-gaze"},
      {id:"appreciative-look",label:"ねぎらいの表情 / appreciative-look"}
    ]}],
    presets:[
      {id:"joy-gratitude-pack",label:"喜：感謝セット",tags:["gratitude-smile","thankful-tears","grateful-gaze"]},
      {id:"joy-moved-pack",label:"喜：感動セット",tags:["moved-expression","overwhelmed-joy","teary-smile"]}
    ]
  }; // 

  const S84 = {categories:[{name:"Expressions / 表情",items:[
    {id:"noble-sorrow",label:"高貴な悲しみ / noble-sorrow"},
    {id:"dignified-grief",label:"気高い悲嘆 / dignified-grief"},
    {id:"serene-tears",label:"静謐な涙 / serene-tears"},
    {id:"graceful-sadness",label:"優雅な哀しみ / graceful-sadness"},
    {id:"majestic-melancholy",label:"荘厳な憂い / majestic-melancholy"},
    {id:"stoic-grief",label:"毅然とした悲しみ / stoic-grief"},
    {id:"poised-remorse",label:"気品ある悔恨 / poised-remorse"},
    {id:"tragic-dignity",label:"悲劇の気高さ / tragic-dignity"}
  ]}],presets:[
    {id:"sad-noble-pack",label:"哀：孤高セット",tags:["noble-sorrow","serene-tears","stoic-grief"]},
    {id:"sad-dignified-pack",label:"哀：高貴な悲しみ",tags:["dignified-grief","majestic-melancholy","tragic-dignity"]}
  ]}; //

  const S85 = {categories:[{name:"Expressions / 表情",items:[
    {id:"smug-smile",label:"どや顔 / smug-smile"},
    {id:"confident-grin",label:"自信満々のニヤリ / confident-grin"},
    {id:"triumphant-smirk",label:"勝ち誇ったどや顔 / triumphant-smirk"},
    {id:"teasing-smug",label:"からかい気味のどや顔 / teasing-smug"},
    {id:"sly-smirk",label:"ずる賢い笑み / sly-smirk"},
    {id:"arrogant-grin",label:"傲慢などや顔 / arrogant-grin"},
    {id:"mischievous-smug",label:"いたずらっぽいどや顔 / mischievous-smug"},
    {id:"proud-chuckle",label:"誇らしげな含み笑い / proud-chuckle"},
    {id:"cool-smirk",label:"クールなどや顔 / cool-smirk"},
    {id:"playful-smirk",label:"軽口混じりのどや顔 / playful-smirk"}
  ]}],presets:[
    {id:"joy-smug-pack",label:"喜：どや顔セット",tags:["smug-smile","confident-grin","teasing-smug"]},
    {id:"anger-smug-pack",label:"怒：優越・皮肉セット",tags:["sly-smirk","arrogant-grin","triumphant-smirk"]}
  ]}; //

  const S86 = {categories:[{name:"Expressions / 表情",items:[
    {id:"tearful-smug",label:"涙混じりのどや顔 / tearful-smug"},
    {id:"brave-smile",label:"強がりの笑み / brave-smile"},
    {id:"smug-through-tears",label:"涙越しのどや顔 / smug-through-tears"},
    {id:"defiant-sad-smirk",label:"哀しみの反抗的どや顔 / defiant-sad-smirk"},
    {id:"sorrowful-pride",label:"哀しみを抱えた誇り / sorrowful-pride"},
    {id:"painful-grin",label:"痛みを隠す笑み / painful-grin"},
    {id:"bittersweet-smug",label:"ほろ苦いどや顔 / bittersweet-smug"},
    {id:"fragile-smile",label:"壊れそうな笑み / fragile-smile"}
  ]}],presets:[
    {id:"sad-smug-pack",label:"哀：強がりどや顔セット",tags:["tearful-smug","brave-smile","smug-through-tears"]},
    {id:"sad-bittersweet-pack",label:"哀：ほろ苦い誇り",tags:["bittersweet-smug","sorrowful-pride","fragile-smile"]}
  ]}; //

  const S87 = {categories:[{name:"Expressions / 表情",items:[
    {id:"taunting-smug",label:"挑発的などや顔 / taunting-smug"},
    {id:"provoking-grin",label:"煽るような笑み / provoking-grin"},
    {id:"mock-victory",label:"あざける勝利顔 / mock-victory"},
    {id:"smirk-challenge",label:"挑戦的なニヤリ / smirk-challenge"},
    {id:"cocky-grin",label:"生意気な笑顔 / cocky-grin"},
    {id:"goading-look",label:"煽る視線 / goading-look"},
    {id:"scornful-smug",label:"軽蔑まじりのどや顔 / scornful-smug"},
    {id:"arrogant-taunt",label:"傲慢な挑発 / arrogant-taunt"}
  ]}],presets:[
    {id:"anger-taunt-pack",label:"怒：挑発どや顔セット",tags:["taunting-smug","provoking-grin","smirk-challenge"]},
    {id:"anger-mock-pack",label:"怒：嘲笑勝利顔",tags:["mock-victory","scornful-smug","arrogant-taunt"]}
  ]}; //

  const S88 = {categories:[{name:"Expressions / 表情",items:[
    {id:"flirty-smug",label:"色っぽいどや顔 / flirty-smug"},
    {id:"romantic-grin",label:"ロマンティックなどや笑み / romantic-grin"},
    {id:"teasing-wink",label:"ウィンクで挑発 / teasing-wink"},
    {id:"seductive-smile",label:"誘惑する笑顔 / seductive-smile"},
    {id:"playful-flirt",label:"戯れるようなどや顔 / playful-flirt"},
    {id:"charming-smirk",label:"魅力的なニヤリ / charming-smirk"},
    {id:"affectionate-grin",label:"愛情を込めたどや顔 / affectionate-grin"},
    {id:"mischievous-wink",label:"小悪魔的ウィンク / mischievous-wink"}
  ]}],presets:[
    {id:"joy-flirty-pack",label:"喜：恋愛どや顔セット",tags:["flirty-smug","romantic-grin","teasing-wink"]},
    {id:"joy-charming-pack",label:"喜：魅惑セット",tags:["seductive-smile","charming-smirk","mischievous-wink"]}
  ]}; //

  const S89 = {categories:[{name:"Expressions / 表情",items:[
    {id:"heartbreak-smug",label:"失恋のどや顔 / heartbreak-smug"},
    {id:"tragic-love-smile",label:"報われない愛の笑み / tragic-love-smile"},
    {id:"sad-flirty-smirk",label:"哀しみ混じりの色っぽい笑み / sad-flirty-smirk"},
    {id:"tearful-romantic-grin",label:"涙ぐむロマンティック笑顔 / tearful-romantic-grin"},
    {id:"bitter-sweet-smug",label:"ほろ苦い愛のどや顔 / bitter-sweet-smug"},
    {id:"lost-love-gaze",label:"失われた愛を見つめる眼差し / lost-love-gaze"},
    {id:"wistful-smile",label:"切ない微笑み / wistful-smile"},
    {id:"broken-heart-smirk",label:"心が砕けたどや顔 / broken-heart-smirk"}
  ]}],presets:[
    {id:"sad-love-smug-pack",label:"哀：失恋どや顔セット",tags:["heartbreak-smug","tragic-love-smile","broken-heart-smirk"]},
    {id:"sad-bittersweet-pack",label:"哀：ほろ苦い愛",tags:["bitter-sweet-smug","tearful-romantic-grin","wistful-smile"]}
  ]}; //

  const S90 = {categories:[{name:"Expressions / 表情",items:[
    {id:"victorious-taunt",label:"勝者の嘲笑 / victorious-taunt"},
    {id:"cruel-triumph",label:"残酷な勝利の笑み / cruel-triumph"},
    {id:"dominant-smirk",label:"支配的などや顔 / dominant-smirk"},
    {id:"mocking-victory",label:"嘲る勝利顔 / mocking-victory"},
    {id:"arrogant-win",label:"傲慢な勝利の笑顔 / arrogant-win"},
    {id:"gleeful-taunt",label:"嬉々とした挑発 / gleeful-taunt"},
    {id:"overconfident-grin",label:"過信したニヤリ / overconfident-grin"},
    {id:"merciless-smile",label:"容赦ない笑み / merciless-smile"}
  ]}],presets:[
    {id:"anger-victory-pack",label:"怒：勝者の嘲笑セット",tags:["victorious-taunt","mocking-victory","arrogant-win"]},
    {id:"anger-crueltriumph-pack",label:"怒：残酷な勝利",tags:["cruel-triumph","merciless-smile","dominant-smirk"]}
  ]}; //

  const S91 = {categories:[{name:"Expressions / 表情",items:[
    {id:"innocent-smug",label:"無垢などや顔 / innocent-smug"},
    {id:"pure-grin",label:"純真な笑顔 / pure-grin"},
    {id:"playful-smug",label:"天真爛漫などや顔 / playful-smug"},
    {id:"happy-chuckle",label:"朗らかな含み笑い / happy-chuckle"},
    {id:"sparkling-smile",label:"輝くどや顔 / sparkling-smile"},
    {id:"lighthearted-grin",label:"気楽なニヤリ / lighthearted-grin"},
    {id:"childlike-smug",label:"子供っぽいどや顔 / childlike-smug"},
    {id:"joyful-wink",label:"無邪気なウィンク / joyful-wink"}
  ]}],presets:[
    {id:"joy-innocent-pack",label:"喜：無垢などや顔セット",tags:["innocent-smug","pure-grin","sparkling-smile"]},
    {id:"joy-playfulsmug-pack",label:"喜：天真爛漫セット",tags:["playful-smug","childlike-smug","joyful-wink"]}
  ]}; //

  const S92 = {categories:[{name:"Expressions / 表情",items:[
    {id:"defiant-smug",label:"負け惜しみのどや顔 / defiant-smug"},
    {id:"bitter-grin",label:"苦々しいどや顔 / bitter-grin"},
    {id:"resentful-smirk",label:"悔しさ混じりのニヤリ / resentful-smirk"},
    {id:"tearful-smirk",label:"涙ぐむどや顔 / tearful-smirk"},
    {id:"angry-smug",label:"怒りを含んだどや顔 / angry-smug"},
    {id:"forced-smile",label:"無理に作った笑顔 / forced-smile"},
    {id:"painful-smug",label:"痛みを隠すどや顔 / painful-smug"},
    {id:"broken-grin",label:"壊れた笑み / broken-grin"}
  ]}],presets:[
    {id:"smug-defiant-pack",label:"怒哀：負け惜しみセット",tags:["defiant-smug","resentful-smirk","tearful-smirk"]},
    {id:"smug-bitter-pack",label:"怒哀：苦々しいどや顔",tags:["bitter-grin","forced-smile","broken-grin"]}
  ]}; //

  // ====== マージユーティリティ ======
  const uniq = (arr)=>Array.from(new Set(arr.filter(Boolean)));
  function mergeCategories(parts){
    const bucket=new Map();
    for(const s of parts) for(const c of (s?.categories||[])){
      if(!bucket.has(c.name)) bucket.set(c.name,new Map());
      const store=bucket.get(c.name);
      for(const it of (c.items||[])){
        const id=String(it.id).trim();
        if(!store.has(id)) store.set(id,{id,label:it.label});
      }
    }
    return Array.from(bucket,([name,map])=>({name,items:[...map.values()]}));
  }
  function mergePresets(parts){
    const map=new Map();
    for(const s of parts) for(const p of (s?.presets||[])){
      if(!p?.id) continue;
      const id=String(p.id).trim();
      if(!map.has(id)) map.set(id,{id,label:p.label,tags:[]});
      const curr=map.get(id);
      const tags=Array.isArray(p.tags)?p.tags.map(t=>String(t).trim()):[];
      curr.tags=uniq(curr.tags.concat(tags));
    }
    return [...map.values()];
  }

  // ====== 実行（83..92） ======
  const SOURCES=[S83,S84,S85,S86,S87,S88,S89,S90,S91,S92];
  const data={categories:mergeCategories(SOURCES),presets:mergePresets(SOURCES)};

  // ====== 登録 ======
  try{
    if(typeof window.__registerPromptPart==="function" && window.__registerPromptPart.length>=3){
      window.__registerPromptPart("faith",9,data);
    }else if(typeof window.__registerPromptPart==="function"){
      window.__registerPromptPart("faith_part9",data);
    }else{
      window.REG_BUFFER=window.REG_BUFFER||{};
      window.REG_BUFFER["faith_part9"]=data;
    }
  }catch(e){console.error("[faith_part9 merged 83..92] register error:",e);}
})();