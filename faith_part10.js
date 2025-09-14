/* faith_part10.js — merged parts 93..94 + extracted-safe-expressions (v1.0)
   - Registers: window.__registerPromptPart('faith', 10, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
   - 注意: ユーザー提供リストからは「表情」に該当し、かつNSFW/暴力/未成年の性的文脈を含まない安全なものだけを抽出・命名しています。
*/
(function () {
  "use strict";

  // ===== 既存 part 取り込み =====
  // part93（喜＋愛：甘やかし等）  ref: turn12file0
  const S93a = {
    categories:[{name:"Expressions / 表情",items:[
      { id:"pampering-smug",      label:"甘やかすどや顔 / pampering-smug" },
      { id:"affectionate-grin",   label:"優しいどや笑み / affectionate-grin" },
      { id:"teasing-love-smile",  label:"からかうような愛の笑顔 / teasing-love-smile" },
      { id:"gentle-smug",         label:"やわらかな優越感 / gentle-smug" },
      { id:"fond-smirk",          label:"愛情のこもったニヤリ / fond-smirk" },
      { id:"playful-affection",   label:"じゃれるようなどや顔 / playful-affection" },
      { id:"nurturing-smile",     label:"包み込むようなどや顔 / nurturing-smile" },
      { id:"dominant-love-smirk", label:"甘やかし支配の笑み / dominant-love-smirk" }
    ]}],
    presets:[
      { id:"smug-pampering-pack", label:"喜愛：甘やかしセット", tags:["pampering-smug","gentle-smug","nurturing-smile"] },
      { id:"smug-affection-pack", label:"喜愛：愛情どや顔",     tags:["affectionate-grin","fond-smirk","playful-affection"] }
    ]
  }; // 

  // part93別系（怒＋恐怖：狂気の勝利）  ref: turn12file1
  const S93b = {
    categories:[{name:"Expressions / 表情",items:[
      { id:"mad-triumph-smug",  label:"狂気的な勝者のどや顔 / mad-triumph-smug" },
      { id:"fearsome-grin",     label:"恐怖を与える笑み / fearsome-grin" },
      { id:"intimidating-smirk",label:"威圧的などや顔 / intimidating-smirk" },
      { id:"deranged-victory",  label:"錯乱した勝利の笑み / deranged-victory" },
      { id:"sinister-chuckle",  label:"不気味な含み笑い / sinister-chuckle" },
      { id:"power-mad-smug",    label:"権力に酔ったどや顔 / power-mad-smug" },
      { id:"dreadful-smile",    label:"戦慄の笑み / dreadful-smile" },
      { id:"ominous-grin",      label:"不穏などや顔 / ominous-grin" }
    ]}],
    presets:[
      { id:"smug-mad-triumph-pack", label:"怒恐怖：狂気の勝利セット", tags:["mad-triumph-smug","deranged-victory","power-mad-smug"] },
      { id:"smug-fearsome-pack",    label:"怒恐怖：威圧どや顔",       tags:["fearsome-grin","intimidating-smirk","dreadful-smile"] }
    ]
  }; // 

  // part94（喜＋哀：泣き笑い）  ref: turn12file2
  const S94 = {
    categories:[{name:"Expressions / 表情",items:[
      { id:"tearful-smug",           label:"涙ぐむどや顔 / tearful-smug" },
      { id:"bittersweet-grin",       label:"ほろ苦いどや顔 / bittersweet-grin" },
      { id:"smiling-through-tears",  label:"涙越しの笑み / smiling-through-tears" },
      { id:"joyful-sad-smirk",       label:"嬉し泣きのどや顔 / joyful-sad-smirk" },
      { id:"relieved-teary-smile",   label:"安堵の涙笑顔 / relieved-teary-smile" },
      { id:"proud-tears",            label:"誇らしげな涙 / proud-tears" },
      { id:"fragile-smug",           label:"壊れそうなどや顔 / fragile-smug" },
      { id:"nostalgic-smile",        label:"懐かしさに涙する笑顔 / nostalgic-smile" }
    ]}],
    presets:[
      { id:"smug-tearful-pack",    label:"喜哀：泣き笑いセット", tags:["tearful-smug","smiling-through-tears","relieved-teary-smile"] },
      { id:"smug-bittersweet-pack",label:"喜哀：ほろ苦どや顔",   tags:["bittersweet-grin","fragile-smug","nostalgic-smile"] }
    ]
  }; // 

  // ===== ユーザー提供リストから安全に抽出（表情のみ） =====
  // ※ NSFW/暴力/未成年の性的文脈や過激な語は不採用。近い意味の安全タグへ置換。
  const EXTRACT_SAFE = {
    categories: [
      { name: "抽出（安全版）/ Extracted (Safe)", items: [
        // 無感情・無気力系
        { id:"empty-eyes",           label:"空虚な目 / empty eyes" },
        { id:"blank-eyes",           label:"虚ろな目 / blank eyes" },
        { id:"eyes-in-shadow",       label:"目の影 / eyes in shadow" },
        { id:"shaded-face",          label:"顔に影 / shaded face" },
        { id:"expressionless",       label:"無表情 / expressionless" },
        { id:"dead-eyed",            label:"生気のない目 / dead-eyed" },
        { id:"blank-stare",          label:"焦点の合わない視線 / blank stare" },

        // “感情のない笑顔”系（安全名）
        { id:"emotionless-smile",    label:"感情のない笑顔 / emotionless smile" },
        { id:"empty-smile",          label:"虚ろな笑顔 / empty smile" },

        // 目の特徴
        { id:"squinting-eyes",       label:"目を細める / squinting eyes" },
        { id:"sanpaku",              label:"三白眼 / sanpaku" },
        { id:"sanpaku-eyes",         label:"三白眼（強調）/ sanpaku eyes" },
        { id:"cross-shaped-pupils",  label:"瞳の中に十字 / cross-shaped pupils" },
        { id:"covered-eyes-bangs",   label:"前髪で両目隠れ / covered eyes by bangs" },
        { id:"clear-eyes-line",      label:"目の輪郭くっきり / clear eyes line" },
        { id:"sharp-eye-outline",    label:"鋭いアイライン / eyes sharp outline" },

        // 舌・口・頬
        { id:"fang-open-mouth",      label:"牙＋口開き / fang open mouth" },
        { id:"tongue-out-smirk",     label:"舌出しニヤリ / tongue out smirk" },
        { id:"tehepero",             label:"てへぺろ☆ / tehepero" },
        { id:"full-face-blush",      label:"顔全体の赤らみ / full-face blush" },
        { id:"troubled-eyebrows",    label:"困り眉 / troubled eyebrows" },
        { id:"troubled-brow-blush",  label:"困り眉＋頬染め / troubled brow + blush" },

        // 感情・状態
        { id:"flustered-anger-mix",  label:"動揺を隠せずムッと / flustered & annoyed" },
        { id:"screaming-terror",     label:"恐怖の叫び / screaming in terror" },
        { id:"sleep-deprived",       label:"徹夜明け / sleep-deprived" },
        { id:"broken-expression",    label:"壊れた表情 / broken expression" },
        { id:"crying-eyes-open",     label:"目を開けたまま泣く / crying with eyes open" },

        // 炎・燃焼“風”の目（演出寄りだが表情系として採用）
        { id:"burning-eyes",         label:"燃えた瞳 / burning eyes" },

        // 黒目・暗い雰囲気（安全名）
        { id:"black-eyes",           label:"黒い目 / black eyes" },
        { id:"there-is-no-light",    label:"目に光がない / no light in eyes" },

        // ちら見・覗き
        { id:"peek-through-fingers", label:"指の間から覗く / peek through fingers" },
        { id:"face-cover-embarrass", label:"恥ずかしくて顔を覆う / hands cover face (embarrassed)" }
      ]}],
    presets: [
      // 小さな使い勝手セットを2つ
      { id:"blank-void-pack",  label:"無表情・虚ろセット / Blank & Void",
        tags:["expressionless","empty-eyes","blank-stare"] },
      { id:"emotionless-smile-pack", label:"虚ろな笑顔セット / Emotionless Smile",
        tags:["emotionless-smile","squinting-eyes","empty-smile"] }
    ]
  };

  // ===== マージ＆重複排除ユーティリティ =====
  const uniq = (arr) => Array.from(new Set(arr.filter(Boolean)));
  function mergeCategories(parts){
    const bucket = new Map(); // name -> Map<id,item>
    for (const s of parts) for (const c of (s?.categories||[])) {
      if (!bucket.has(c.name)) bucket.set(c.name, new Map());
      const store = bucket.get(c.name);
      for (const it of (c.items||[])) {
        const id = String(it.id).trim();
        if (!store.has(id)) store.set(id, { id, label: it.label });
      }
    }
    return Array.from(bucket, ([name,map]) => ({ name, items: Array.from(map.values()) }));
  }
  function mergePresets(parts){
    const map = new Map(); // id -> {id,label,tags[]}
    for (const s of parts) for (const p of (s?.presets||[])) {
      if (!p?.id) continue;
      const id = String(p.id).trim();
      if (!map.has(id)) map.set(id, { id, label: p.label, tags: [] });
      const curr = map.get(id);
      const tags = Array.isArray(p.tags) ? p.tags.map(t=>String(t).trim()) : [];
      curr.tags = uniq(curr.tags.concat(tags));
    }
    return Array.from(map.values());
  }

  // ===== 実行（93..94 + 抽出） =====
  const SOURCES = [S93a, S93b, S94, EXTRACT_SAFE];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // ===== レジストリ登録（faith の 10番） =====
  try{
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 10, data);
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part10', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part10'] = data;
    }
  }catch(e){
    console.error('[faith_part10 merged 93..94 + extracted-safe] register error:', e);
  }
})();