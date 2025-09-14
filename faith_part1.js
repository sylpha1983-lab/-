/* faith_part1.js — merged parts 1..10 (v1.0)
   - Registers: window.__registerPromptPart('faith', 1, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part1..10）をインライン化
  // （各ファイルの items/expressions を「{ name, items:[{id,label}] }」へ整形）
  // =========================

  // part1（表情・基本）  ref: turn3file0
  const S1 = {
    categories: [
      { name: '表情（基本）', items: [
        { id:'jealous',       label:'嫉妬 / jealous' },
        { id:'pout',          label:'むくれ / pout' },
        { id:'side-eye-sharp',label:'ジト目（鋭）/ side-eye sharp' },
        { id:'sleepy',        label:'眠い / sleepy' },
        { id:'half-lidded',   label:'半目 / half-lidded' },
        { id:'smile',         label:'微笑み / smile' },
        { id:'deadpan',       label:'無表情 / deadpan' },
        { id:'jitome',        label:'ジト目 / jitome' },
        { id:'side-eye',      label:'横目 / side-eye' },
        { id:'grin',          label:'ニヤリ / grin' },
        { id:'embarrassed',   label:'照れ / embarrassed' },
        { id:'surprised',     label:'驚き / surprised' },
        { id:'wide-eyed',     label:'見開き / wide-eyed' },
        { id:'sad',           label:'悲しい / sad' },
        { id:'teary-eyes',    label:'涙目 / teary eyes' }
      ] }
    ],
    presets: []
  };

  // part2（Eyes/Brows/Mouth/Emotion/State） ref: turn3file1
  const S2 = (function(){
    const src = [
      // Eyes
      ['side-eye-soft','横目・やわら','Eyes / 目'],
      ['side-eye-icy','横目・クール','Eyes / 目'],
      ['half-lidded-serene','半目・静','Eyes / 目'],
      ['half-lidded-sultry','半目・アンニュイ','Eyes / 目'],
      ['upward-glance','上目遣い','Eyes / 目'],
      ['upward-glance-tease','上目遣い・挑発','Eyes / 目'],
      ['glassy-eyes-deep','うるみ瞳・深','Eyes / 目'],
      ['teary-smile','泣き笑い','Eyes / 目'],
      ['wince','目をしかめる','Eyes / 目'],
      ['stare-blank','無表情の見つめ','Eyes / 目'],
      // Brows
      ['raised-brow','片眉上げ','Brows / 眉'],
      ['furrowed-brow','眉間しわ','Brows / 眉'],
      ['soft-brow','やわら眉','Brows / 眉'],
      // Mouth
      ['pout-hard','ふくれ・強','Mouth / 口'],
      ['pout-cute','ふくれ・キュート','Mouth / 口'],
      ['smile-gentle','にこやか微笑み','Mouth / 口'],
      ['smirk-sly','ニヤリ・狡猾','Mouth / 口'],
      ['awkward-tight','引きつり笑い','Mouth / 口'],
      ['bit-lip','噛みしめる唇','Mouth / 口'],
      // Emotion
      ['bashful','はにかみ','Emotion / 感情'],
      ['proud','得意げ','Emotion / 感情'],
      ['annoyed','不機嫌','Emotion / 感情'],
      ['skeptical','懐疑的','Emotion / 感情'],
      ['shocked','ショック','Emotion / 感情'],
      // State
      ['dizzy','ふらつき','State / 状態'],
      ['focused','集中','State / 状態'],
      ['nervous','緊張','State / 状態'],
      ['daydreaming','白昼夢','State / 状態'],
      ['determined','決意','State / 状態'],
    ];
    const by = {};
    for (const [id,jp,cat] of src) (by[cat] ||= []).push({ id, label:`${jp} / ${id.replace(/-/g,' ')}` });
    return { categories: Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part3（派生） ref: turn3file2
  const S3 = (function(){
    const src = [
      // Eyes
      ['side-eye-velvet','横目・ベルベット','Eyes / 目'],
      ['side-eye-tender','横目・やさしめ','Eyes / 目'],
      ['half-lidded-hazy','半目・霞み','Eyes / 目'],
      ['half-lidded-bored','半目・退屈','Eyes / 目'],
      ['upward-glance-innocent','上目遣い・無垢','Eyes / 目'],
      ['glassy-eyes-amber','うるみ瞳・琥珀','Eyes / 目'],
      ['glassy-eyes-amethyst','うるみ瞳・アメシスト','Eyes / 目'],
      ['teary-wide','涙目・見開き','Eyes / 目'],
      // Brows
      ['arched-brow-elegant','アーチ眉・上品','Brows / 眉'],
      ['flat-brow-serious','フラット眉・真面目','Brows / 眉'],
      // Mouth
      ['soft-smile','やわらかな微笑み','Mouth / 口'],
      ['closed-smile','口を閉じた微笑み','Mouth / 口'],
      ['bit-lip-soft','噛みしめ唇・そっと','Mouth / 口'],
      ['awkward-smile-soft','気まずい笑み・控えめ','Mouth / 口'],
      // Emotion
      ['melancholy','うつろ','Emotion / 感情'],
      ['relieved','ほっとした','Emotion / 感情'],
      ['hopeful','希望','Emotion / 感情'],
      ['mischievous','いたずら心','Emotion / 感情'],
      // State
      ['calm','落ち着き','State / 状態'],
      ['tense','張りつめ','State / 状態'],
      ['dazed','ぼんやり','State / 状態'],
      ['flustered','あたふた','State / 状態'],
    ];
    const by={}; for (const [id,jp,cat] of src) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories: Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part4（from part4.js） ref: turn2file14
  const S4 = (function(){
    const add = (cat,id,jp,by)=>((by[cat] ||= []).push({id,label:`${jp} / ${id}`}),by);
    const by={};
    add('Eyes / 目','narrow-eyes-sharp','細め目・鋭さ',by);
    add('Eyes / 目','narrow-eyes-warm','細め目・やわらか',by);
    add('Eyes / 目','sparkle-eyes-star','瞳キラキラ・星型',by);
    add('Eyes / 目','sparkle-eyes-tearful','瞳キラキラ・涙混じり',by);
    add('Eyes / 目','closed-eyes-prayer','閉じ目・祈り',by);
    add('Brows / 眉','slanted-brow-angry','斜め眉・怒り',by);
    add('Brows / 眉','slanted-brow-sad','斜め眉・哀愁',by);
    add('Brows / 眉','arched-brow-playful','アーチ眉・遊び心',by);
    add('Mouth / 口','open-smile','開いた笑み',by);
    add('Mouth / 口','soft-pout','ソフトむくれ',by);
    add('Mouth / 口','tongue-peek','舌ちろり',by);
    add('Mouth / 口','gritted-teeth','食いしばり歯',by);
    add('Emotion / 感情','determined','決意',by);
    add('Emotion / 感情','cheerful','朗らか',by);
    add('Emotion / 感情','bashful-proud','照れ誇り',by);
    add('State / 状態','confident','自信あり',by);
    add('State / 状態','shaken','動揺',by);
    add('State / 状態','daydreaming','夢想',by);
    return { categories: Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part5（表情 part5） ref: turn1file0
  const S5 = {
    categories: [
      { name: '表情 (part5)', items: [
        { id:'side-eye-razor',      label:'横目・レイザー / side-eye-razor' },
        { id:'side-eye-gentle',     label:'横目・そっと / side-eye-gentle' },
        { id:'half-lidded-serious', label:'半目・真剣 / half-lidded-serious' },
        { id:'half-lidded-lazy',    label:'半目・けだるげ / half-lidded-lazy' },
        { id:'upward-glance-coy',   label:'上目遣い・小悪魔 / upward-glance-coy' },
        { id:'tear-brim',           label:'涙がこぼれそう / tear-brim' },
        { id:'glassy-eyes-silver',  label:'うるみ瞳・シルバー / glassy-eyes-silver' },
        { id:'brow-knit-soft',      label:'眉間寄せ・控えめ / brow-knit-soft' },
        { id:'brow-confident-arch', label:'自信眉・アーチ / brow-confident-arch' },
        { id:'soft-grin',           label:'控えめニヤリ / soft-grin' },
        { id:'tight-smile',         label:'引きつり微笑み / tight-smile' },
        { id:'pout-hard-plus',      label:'ふくれ・強＋ / pout-hard-plus' },
        { id:'wistful',             label:'物憂げ / wistful' },
        { id:'smug',                label:'どや顔 / smug' },
        { id:'yearning',            label:'憧憬 / yearning' },
        { id:'focused-calm',        label:'静かな集中 / focused-calm' },
        { id:'startled',            label:'びくっ / startled' },
        { id:'awkward-freeze',      label:'固まる気まずさ / awkward-freeze' }
      ] }
    ],
    presets: []
  };

  // part6（from part6.js） ref: turn2file10
  const S6 = (function(){
    const src = [
      ['brow-raise-doubt','片眉上げ・疑念','Brows / 眉'],
      ['brow-soft-concern','柔ら眉・心配','Brows / 眉'],
      ['smile-soft-closed','柔ら微笑み・口閉じ','Mouth / 口'],
      ['smile-wide-open','笑み・口開き','Mouth / 口'],
      ['pout-soft-mini','むくれ・ミニ','Mouth / 口'],
      ['grin-tilt','にやり・かしげ','Mouth / 口'],
      ['calm-proud','静かな誇り','Emotion / 感情'],
      ['touched','じーん','Emotion / 感情'],
      ['playful','おどけ','Emotion / 感情'],
      ['composed','平静','State / 状態'],
      ['flutter','そわそわ','State / 状態'],
      ['entranced','うっとり','State / 状態'],
    ];
    const by={}; for (const [id,jp,cat] of src) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories: Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part7（from part7.js） ref: turn2file19
  const S7 = (function(){
    const src = [
      // Eyes
      ['side-eye-razor-shade','横目・レイザー影','Eyes / 目'],
      ['side-eye-twinkle','横目・きらり','Eyes / 目'],
      ['half-lidded-warm','半目・あたたか','Eyes / 目'],
      ['half-lidded-frosty','半目・ひんやり','Eyes / 目'],
      ['upward-glance-shy','上目遣い・はにかみ','Eyes / 目'],
      ['glassy-eyes-emerald','うるみ瞳・エメラルド','Eyes / 目'],
      ['teary-soft','涙目・そっと','Eyes / 目'],
      ['eye-squeeze-smile','目を細めて笑う','Eyes / 目'],
      // Brows
      ['brow-sad-tilt','眉しょんぼり・かしげ','Brows / 眉'],
      ['brow-proud-flat','誇り眉・フラット','Brows / 眉'],
      // Mouth
      ['smile-peek-tooth','にこ歯ちらり','Mouth / 口'],
      ['smile-catlike','猫口スマイル','Mouth / 口'],
      ['pout-mini-tease','ミニむくれ・挑発','Mouth / 口'],
      ['lip-press-soft','唇プレス・やわら','Mouth / 口'],
      // Emotion
      ['serene','安らぎ','Emotion / 感情'],
      ['longing','切望','Emotion / 感情'],
      ['tease','挑発','Emotion / 感情'],
      ['bemused','おかしみ','Emotion / 感情'],
      // State
      ['flushed','ほてり','State / 状態'],
      ['composed-soft','穏やかな平静','State / 状態'],
      ['moody','ムーディ','State / 状態'],
    ];
    const by={}; for (const [id,jp,cat] of src) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories: Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part8（from part8.js） ref: turn2file2
  const S8 = (function(){
    const src = [
      ['wide-eyes-dazzle','目ぱっちり・まぶしい','Eyes / 目'],
      ['narrow-eyes-sneaky','目細め・いたずら','Eyes / 目'],
      ['glimmer-eyes-soft','瞳きらめき・そっと','Eyes / 目'],
      ['drowsy-eyes','うとうと目','Eyes / 目'],
      ['brow-arched-elegant','眉アーチ・エレガント','Brows / 眉'],
      ['brow-sharp-intense','鋭い眉・集中','Brows / 眉'],
      ['smile-shy-twist','はにかみ口元・ひねり','Mouth / 口'],
      ['mouth-open-gasp','口あんぐり・驚き','Mouth / 口'],
      ['lip-bite-anxious','唇噛み・不安','Mouth / 口'],
      ['euphoric','多幸感','Emotion / 感情'],
      ['wistful','物思い','Emotion / 感情'],
      ['overjoyed','大喜び','Emotion / 感情'],
      ['bashful','てれてれ','State / 状態'],
      ['lost-in-thought','考え込み','State / 状態'],
      ['radiant','輝きに包まれる','State / 状態'],
    ];
    const by={}; for (const [id,jp,cat] of src) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories: Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part9（空テンプレ） ref: turn2file7
  const S9 = { categories: [], presets: [] };

  // part10（from part10.js） ref: turn2file6
  const S10 = {
    categories: [
      { name: "Eyes / 目", items: [
        { id:"wide-eyes-shock",    label:"目を見開く・衝撃 / wide-eyes-shock" },
        { id:"rolling-eyes-irrit", label:"目を転がす・うんざり / rolling-eyes-irrit" },
        { id:"flutter-eyelids",    label:"まばたき・ひらひら / flutter-eyelids" },
        { id:"gleam-star",         label:"瞳キラリ・スター / gleam-star" }
      ]},
      { name: "Brows / 眉", items: [
        { id:"brow-arched-pride", label:"誇り眉アーチ / brow-arched-pride" },
        { id:"brow-low-frown",    label:"しかめ眉・低い / brow-low-frown" }
      ]},
      { name: "Mouth / 口", items: [
        { id:"open-gasp",     label:"口あんぐり・驚き / open-gasp" },
        { id:"clenched-grit", label:"歯を食いしばる / clenched-grit" },
        { id:"gentle-smile",  label:"穏やか笑み / gentle-smile" }
      ]},
      { name: "Emotion / 感情", items: [
        { id:"shock-fear",   label:"驚愕・恐れ / shock-fear" },
        { id:"irritated",    label:"苛立ち / irritated" },
        { id:"calm-warmth",  label:"落ち着いた温もり / calm-warmth" }
      ]},
      { name: "State / 状態", items: [
        { id:"tense",       label:"緊張 / tense" },
        { id:"relaxed",     label:"リラックス / relaxed" },
        { id:"bewildered",  label:"当惑 / bewildered" }
      ]}
    ],
    presets: []
  };

  // =========================
  // マージ＆重複排除ユーティリティ
  // =========================
  const uniq = (arr) => Array.from(new Set(arr.filter(Boolean)));
  function mergeCategories(parts){
    const bucket = new Map(); // name -> Map<id, item>
    for (const s of parts) for (const c of (s?.categories||[])) {
      if (!bucket.has(c.name)) bucket.set(c.name, new Map());
      const store = bucket.get(c.name);
      for (const it of (c.items||[])) {
        const id = String(it.id).trim();
        if (!store.has(id)) store.set(id, { id, label: it.label });
      }
    }
    return Array.from(bucket, ([name, map]) => ({ name, items: Array.from(map.values()) }));
  }
  function mergePresets(parts){
    const map = new Map();
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

  // =========================
  // マージ実行
  // =========================
  const SOURCES = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 1番のみ）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 1, data); // ←ここは常に1
    } else if (typeof window.__registerPromptPart === 'function') {
      // 古い移行用
      window.__registerPromptPart('faith_part1', data);
    } else {
      // さらに古い保険
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part1'] = data;
    }
  } catch (e) {
    console.error('[faith_part1 merged 1..10] register error:', e);
  }
})();