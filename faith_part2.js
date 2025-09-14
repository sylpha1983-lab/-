/* faith_part2.js — merged parts 11..20 (v1.0)
   - Registers: window.__registerPromptPart('faith', 2, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part11..20）をインライン化
  // =========================

  // part11  （Eyes/Brows/Mouth/Emotion/State）  src: faith_part11.js
  const S11 = (function(){
    const toLabel = (jp,id)=>`${jp} / ${id}`;
    const eyes = [
      { id:'side-eye-warm-velvet', jp:'横目・ウォームベルベット' },
      { id:'side-eye-crisp',       jp:'横目・クリスプ' },
      { id:'half-lidded-dream',    jp:'半目・夢見' },
      { id:'half-lidded-icy',      jp:'半目・アイシー' },
      { id:'upward-glance-soft',   jp:'上目遣い・ソフト' },
      { id:'teary-corner',         jp:'涙・目尻に滲む' },
      { id:'glassy-eyes-pearl',    jp:'うるみ瞳・パール' },
      { id:'eyelids-flutter-soft', jp:'まぶた・ふわ瞬き' }
    ].map(it=>({id:it.id,label:toLabel(it.jp,it.id)}));

    const brows = [
      { id:'brow-angle-gentle', jp:'斜め眉・やわら' },
      { id:'brow-stern-flat',   jp:'厳しめフラット眉' }
    ].map(it=>({id:it.id,label:toLabel(it.jp,it.id)}));

    const mouth = [
      { id:'smile-quiet',       jp:'静かな微笑み' },
      { id:'smile-curve',       jp:'口角カーブ笑み' },
      { id:'pout-sulk',         jp:'むくれ・すね' },
      { id:'pressed-lips-calm', jp:'口を結ぶ・落ち着き' }
    ].map(it=>({id:it.id,label:toLabel(it.jp,it.id)}));

    const emotion = [
      { id:'fondness',   jp:'愛着' },
      { id:'resentful',  jp:'うらみがましい' },
      { id:'soft-pride', jp:'穏やかな誇り' },
      { id:'gentle-joy', jp:'やさしい喜び' }
    ].map(it=>({id:it.id,label:toLabel(it.jp,it.id)}));

    const state = [
      { id:'collected',   jp:'冷静沈着' },
      { id:'lightheaded', jp:'ふわっと' },
      { id:'brooding',    jp:'思い沈む' }
    ].map(it=>({id:it.id,label:toLabel(it.jp,it.id)}));

    return {
      categories: [
        { name:'Eyes / 目',      items: eyes },
        { name:'Brows / 眉',     items: brows },
        { name:'Mouth / 口',     items: mouth },
        { name:'Emotion / 感情', items: emotion },
        { name:'State / 状態',   items: state }
      ],
      presets: []
    };
  })();

  // part12  （単一「表情」カテゴリに Eyes/Brows/Mouth/Emotion/State 混在） src: faith_part12.js
  const S12 = {
    categories: [{
      name: '表情',
      items: [
        { id:'wide-eyed-wonder', label:'目を大きく開く・驚き / wide-eyed-wonder' },
        { id:'narrow-skeptical', label:'細目・疑い / narrow-skeptical' },
        { id:'gaze-down-soft',   label:'伏し目がち・やわら / gaze-down-soft' },
        { id:'fluttering-eyes',  label:'まばたき・小刻み / fluttering-eyes' },
        { id:'side-glance-shy',  label:'横目・はにかみ / side-glance-shy' },
        { id:'tears-brim',       label:'涙目・たまり / tears-brim' },

        { id:'arched-curious',   label:'好奇心の弓眉 / arched-curious' },
        { id:'angled-intense',   label:'鋭角的な強眉 / angled-intense' },

        { id:'soft-open',        label:'口を少し開ける・やわら / soft-open' },
        { id:'downturned-sad',   label:'口角下げ・悲しみ / downturned-sad' },
        { id:'half-smile',       label:'片側の微笑み / half-smile' },
        { id:'grimace',          label:'しかめっ面 / grimace' },

        { id:'playful',          label:'遊び心 / playful' },
        { id:'tense',            label:'緊張 / tense' },
        { id:'vulnerable',       label:'弱さ / vulnerable' },
        { id:'determined',       label:'決意 / determined' },

        { id:'fatigued',         label:'疲れ / fatigued' },
        { id:'energized',        label:'活力 / energized' },
        { id:'lost-in-thought',  label:'考え込み / lost-in-thought' },
        { id:'serene',           label:'穏やか / serene' }
      ]
    }],
    presets: []
  };

  // part13  src: faith_part13.js
  const S13 = {
    categories: [
      { name:"Eyes / 目", items:[
        { id:"sidelook-curious",   label:"横目・好奇 / sidelook-curious" },
        { id:"sidelook-guilty",    label:"横目・ばつが悪い / sidelook-guilty" },
        { id:"eyelids-heavy",      label:"まぶた重め / eyelids-heavy" },
        { id:"half-lidded-mellow", label:"半目・まろやか / half-lidded-mellow" },
        { id:"glassy-eyes-teal",   label:"うるみ瞳・ティール / glassy-eyes-teal" },
        { id:"teary-blur",         label:"涙でにじむ / teary-blur" }
      ]},
      { name:"Brows / 眉", items:[
        { id:"brow-pinched",       label:"眉つまむように寄せる / brow-pinched" },
        { id:"brow-soft-uplift",   label:"眉・やわら上げ / brow-soft-uplift" }
      ]},
      { name:"Mouth / 口", items:[
        { id:"smile-subtle",       label:"さりげない笑み / smile-subtle" },
        { id:"smile-corner-up",    label:"口角だけ上げる / smile-corner-up" },
        { id:"pout-tilt",          label:"むくれ・かしげ / pout-tilt" },
        { id:"lip-parted-soft",    label:"薄く開いた唇・そっと / lip-parted-soft" }
      ]},
      { name:"Emotion / 感情", items:[
        { id:"fond-smug",          label:"親愛＋どや / fond-smug" },
        { id:"gentle-tease",       label:"やさしい挑発 / gentle-tease" },
        { id:"wistful-soft",       label:"やわ物思い / wistful-soft" },
        { id:"bittersweet",        label:"ほろ苦い / bittersweet" }
      ]},
      { name:"State / 状態", items:[
        { id:"breathless",         label:"息をのむ / breathless" },
        { id:"tranquil",           label:"静謐 / tranquil" },
        { id:"pensive",            label:"沈思 / pensive" }
      ]}
    ],
    presets: []
  };

  // part14  src: faith_part14.js
  const S14 = (function(){
    const raw = [
      // Eyes
      ['starlit-eyes','星の瞳','Eyes / 目'],
      ['shadowed-eyes','影落ち瞳','Eyes / 目'],
      ['flutter-blink','ぱちぱちまばたき','Eyes / 目'],
      ['wide-glisten','見開き・きらめき','Eyes / 目'],
      // Brows
      ['brow-elegant-arch','眉・優美な弧','Brows / 眉'],
      ['brow-pressed-flat','眉・押しつぶし','Brows / 眉'],
      // Mouth
      ['smirk-playful','いたずらっぽいニヤリ','Mouth / 口'],
      ['grit-teeth','歯を食いしばる','Mouth / 口'],
      ['open-shock','驚き・口開き','Mouth / 口'],
      // Emotion
      ['exuberant','快活','Emotion / 感情'],
      ['sorrow-deep','深い悲哀','Emotion / 感情'],
      ['awe-struck','畏怖','Emotion / 感情'],
      ['bashful-soft','はにかみ・やわらか','Emotion / 感情'],
      // State
      ['anticipation','期待感','State / 状態'],
      ['haunted','取り憑かれたよう','State / 状態'],
      ['lighthearted','軽やか','State / 状態'],
      ['wistful-glance','物思いの視線','State / 状態']
    ];
    const by={};
    for (const [id,jp,cat] of raw) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories:Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part15  src: faith_part15.js
  const S15 = {
    categories: [
      { name:"Eyes / 目", items:[
        { id:"teary-glisten",     label:"涙ぐみの輝き / teary-glisten" },
        { id:"narrow-suspicious", label:"疑いの細目 / narrow-suspicious" },
        { id:"bright-hopeful",    label:"希望に満ちた瞳 / bright-hopeful" },
        { id:"downcast-soft",     label:"伏し目・やわら / downcast-soft" },
        { id:"sharp-lock-on",     label:"鋭い視線・ロックオン / sharp-lock-on" },
        { id:"wink-tease",        label:"ウィンク・挑発 / wink-tease" },
        { id:"moist-eyes",        label:"しっとり目 / moist-eyes" },
        { id:"glassy-eyes-ruby",  label:"うるみ瞳・ルビー / glassy-eyes-ruby" }
      ]},
      { name:"Brows / 眉", items:[
        { id:"brow-arched-high",  label:"眉・高く弧を描く / brow-arched-high" },
        { id:"brow-knit-deep",    label:"眉間しわ・深 / brow-knit-deep" },
        { id:"brow-soft-relief",  label:"やわら眉・安堵 / brow-soft-relief" }
      ]},
      { name:"Mouth / 口", items:[
        { id:"smile-bright",              label:"明るい笑み / smile-bright" },
        { id:"soft-smirk-shy",            label:"照れニヤリ・やわら / soft-smirk-shy" },
        { id:"press-lips-determined",     label:"口を結ぶ・決意 / press-lips-determined" },
        { id:"open-laugh-soft",           label:"口開き・小さな笑い / open-laugh-soft" }
      ]},
      { name:"Emotion / 感情", items:[
        { id:"spark-joy",         label:"きらめく喜び / spark-joy" },
        { id:"quiet-sadness",     label:"静かな悲しみ / quiet-sadness" },
        { id:"guarded",           label:"用心深い / guarded" },
        { id:"encouraging",       label:"励ます気持ち / encouraging" }
      ]},
      { name:"State / 状態", items:[
        { id:"steady",            label:"ぶれない / steady" },
        { id:"uptempo",           label:"気分高揚 / uptempo" },
        { id:"drained",           label:"消耗 / drained" }
      ]}
    ],
    presets: []
  };

  // part16  （「表情 / Expressions」一括カテゴリ） src: faith_part16.js
  const S16 = {
    categories: [{
      name: "表情 / Expressions",
      items: [
        { id:"side-eye-amber",       label:"横目・アンバー / side-eye-amber" },
        { id:"squint-sun",           label:"細目・日差し / squint-sun" },
        { id:"eye-smile",            label:"目じり笑い / eye-smile" },
        { id:"droopy-eyes-kind",     label:"たれ目・やさしさ / droopy-eyes-kind" },
        { id:"tear-single-drop",     label:"涙・ひとしずく / tear-single-drop" },
        { id:"starry-pupils-soft",   label:"星の瞳孔・やわら / starry-pupils-soft" },
        { id:"glance-over-shoulder", label:"肩越しの視線 / glance-over-shoulder" },
        { id:"gaze-steady-calm",     label:"落ち着いた視線 / gaze-steady-calm" },
        { id:"brow-arched-softplus", label:"アーチ眉・やわら＋ / brow-arched-softplus" },
        { id:"brow-knit-worried",    label:"眉間寄せ・心配 / brow-knit-worried" },
        { id:"brow-relaxed-flat",    label:"リラックス眉・フラット / brow-relaxed-flat" },
        { id:"shy-smile-closed",     label:"はにかみ・口閉じ / shy-smile-closed" },
        { id:"soft-laugh",           label:"やわらかな笑い / soft-laugh" },
        { id:"pout-curve-soft",      label:"むくれ・やわカーブ / pout-curve-soft" },
        { id:"lip-corner-down-soft", label:"口角下げ・そっと / lip-corner-down-soft" },
        { id:"quiet-hope",           label:"静かな希望 / quiet-hope" },
        { id:"sheepish",             label:"気まずい照れ / sheepish" },
        { id:"soft-frustration",     label:"やわら苛立ち / soft-frustration" },
        { id:"contentment",          label:"満ち足り / contentment" },
        { id:"starstruck",           label:"見惚れる / starstruck" },
        { id:"grounded",             label:"地に足の着いた / grounded" },
        { id:"absent-minded",        label:"うわの空 / absent-minded" },
        { id:"refreshed",            label:"すっきり / refreshed" }
      ]
    }],
    presets: []
  };

  // part17  src: faith_part17.js
  const S17 = (function(){
    const src = [
      // Eyes
      ['half-lid-sleepy','眠そう半目','Eyes / 目'],
      ['blink-slow','ゆっくり瞬き','Eyes / 目'],
      ['wide-alert','見開き・警戒','Eyes / 目'],
      ['gaze-distant','遠い視線','Eyes / 目'],
      ['teary-shine','涙ぐむ輝き','Eyes / 目'],
      ['wink-playful','ウィンク・茶目っ気','Eyes / 目'],
      // Brows
      ['brow-raised-high','大きく上げた眉','Brows / 眉'],
      ['brow-soft-relief','安心の緩み眉','Brows / 眉'],
      ['brow-tilt-confused','傾き眉・困惑','Brows / 眉'],
      // Mouth
      ['smirk-sly','にやり・ずるい','Mouth / 口'],
      ['whisper-mouth','口元・ささやき','Mouth / 口'],
      ['yawn-small','小さなあくび','Mouth / 口'],
      ['tongue-out-tease','舌出し・からかい','Mouth / 口'],
      // Emotion
      ['bashful','照れくさい','Emotion / 感情'],
      ['awed','畏敬・感嘆','Emotion / 感情'],
      ['mischievous','いたずら心','Emotion / 感情'],
      ['suspicious-calm','疑念・冷静','Emotion / 感情'],
      // State
      ['daydreaming','白昼夢','State / 状態'],
      ['energized','元気いっぱい','State / 状態'],
      ['drained','疲れ果て','State / 状態'],
      ['serene','穏やか','State / 状態']
    ];
    const by={}; for (const [id,jp,cat] of src) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories:Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

  // part18  src: faith_part18.js
  const S18 = {
    categories: [
      { name:"Eyes / 目", items:[
        { id:"side-eye-glow",        label:"横目・微光 / side-eye-glow" },
        { id:"soft-squint",          label:"やわら細目 / soft-squint" },
        { id:"half-lidded-smile",    label:"半目・微笑み / half-lidded-smile" },
        { id:"teary-overflow",       label:"涙あふれ / teary-overflow" },
        { id:"glassy-eyes-sapphire", label:"うるみ瞳・サファイア / glassy-eyes-sapphire" },
        { id:"gaze-tilt-up",         label:"視線・上にかしげ / gaze-tilt-up" },
        { id:"blink-quick",          label:"素早い瞬き / blink-quick" }
      ]},
      { name:"Brows / 眉", items:[
        { id:"brow-soft-plead",  label:"眉・お願い気味 / brow-soft-plead" },
        { id:"brow-sharp-focus", label:"眉・鋭い集中 / brow-sharp-focus" }
      ]},
      { name:"Mouth / 口", items:[
        { id:"smile-shy-closed", label:"はにかみ笑み・口閉じ / smile-shy-closed" },
        { id:"mouth-open-soft",  label:"口開き・そっと / mouth-open-soft" },
        { id:"lip-tremble",      label:"唇・震え / lip-tremble" },
        { id:"pout-tiny",        label:"小さなむくれ / pout-tiny" }
      ]},
      { name:"Emotion / 感情", items:[
        { id:"tenderness",      label:"やさしさ / tenderness" },
        { id:"frustrated-cute", label:"もどかしキュート / frustrated-cute" },
        { id:"radiant-joy",     label:"輝く喜び / radiant-joy" },
        { id:"melancholy-soft", label:"やわ憂い / melancholy-soft" }
      ]},
      { name:"State / 状態", items:[
        { id:"breathing-steady", label:"呼吸・穏やか / breathing-steady" },
        { id:"fluttery",         label:"胸が高鳴る / fluttery" },
        { id:"stillness",        label:"静止 / stillness" }
      ]}
    ],
    presets: []
  };

  // part19  src: faith_part19.js
  const S19 = {
    categories: [
      { name:'Eyes / 目', items:[
        { id:'side-eye-ember',      label:'横目・残り火 / side-eye-ember' },
        { id:'half-lidded-shimmer', label:'半目・微きらめき / half-lidded-shimmer' },
        { id:'teary-trail',         label:'涙・つたう / teary-trail' },
        { id:'eye-smile-tilt',      label:'目じり笑い・かしげ / eye-smile-tilt' },
        { id:'stare-steel',         label:'鋼の凝視 / stare-steel' },
        { id:'gaze-soft-curve',     label:'視線・やわらカーブ / gaze-soft-curve' },
        { id:'blink-nervous',       label:'まばたき・そわそわ / blink-nervous' }
      ]},
      { name:'Brows / 眉', items:[
        { id:'brow-arc-softsad',  label:'アーチ眉・やわ悲哀 / brow-arc-softsad' },
        { id:'brow-knit-focus',   label:'眉間寄せ・集中 / brow-knit-focus' },
        { id:'brow-lift-curious', label:'眉上げ・好奇 / brow-lift-curious' }
      ]},
      { name:'Mouth / 口', items:[
        { id:'soft-smile-tremble',  label:'柔ら笑み・小さな震え / soft-smile-tremble' },
        { id:'smile-brave',         label:'勇気の笑み / smile-brave' },
        { id:'pout-glance-away',    label:'むくれ・目をそらす / pout-glance-away' },
        { id:'mouth-parted-breath', label:'口を薄く開ける・息 / mouth-parted-breath' }
      ]},
      { name:'Emotion / 感情', items:[
        { id:'resolute',      label:'断固 / resolute' },
        { id:'gentle-sorrow', label:'やさしい悲しみ / gentle-sorrow' },
        { id:'fond-tease',    label:'親しみ挑発 / fond-tease' },
        { id:'nervous-hope',  label:'不安混じりの希望 / nervous-hope' }
      ]},
      { name:'State / 状態', items:[
        { id:'quiet-breath', label:'静かな呼吸 / quiet-breath' },
        { id:'poised',       label:'凛とした / poised' },
        { id:'on-edge',      label:'張りつめ / on-edge' }
      ]}
    ],
    presets: []
  };

  // part20  src: faith_part20.js
  const S20 = (function(){
    const raw = [
      // Eyes
      ['half-lidded-glow','半目・ほのかな光','Eyes / 目'],
      ['side-eye-softsmile','横目・やわ笑み','Eyes / 目'],
      ['eye-gleam-tear','瞳きらめき・涙縁','Eyes / 目'],
      ['gaze-up-curved','上向き・曲線視線','Eyes / 目'],
      ['stare-determined-soft','見据える・柔ら決意','Eyes / 目'],
      // Brows
      ['brow-arc-relief','アーチ眉・安堵','Brows / 眉'],
      ['brow-flat-steady','フラット眉・動じず','Brows / 眉'],
      // Mouth
      ['smile-relieved','安堵の微笑み','Mouth / 口'],
      ['soft-pout-shy','照れむくれ・やわら','Mouth / 口'],
      ['mouth-open-whisper','口開き・ささやき','Mouth / 口'],
      // Emotion
      ['tender-pride','やさしい誇り','Emotion / 感情'],
      ['quiet-joy','静かな喜び','Emotion / 感情'],
      ['fragile-courage','かすかな勇気','Emotion / 感情'],
      ['melting-affection','とろける親愛','Emotion / 感情'],
      // State
      ['composed-bright','明るい平静','State / 状態'],
      ['hesitant','ためらい','State / 状態'],
      ['buoyant','浮き立つ','State / 状態']
    ];
    const by={}; for (const [id,jp,cat] of raw) (by[cat] ||= []).push({ id, label:`${jp} / ${id}` });
    return { categories:Object.keys(by).map(name=>({name,items:by[name]})), presets:[] };
  })();

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
  // マージ実行（11..20）
  // =========================
  const SOURCES = [S11,S12,S13,S14,S15,S16,S17,S18,S19,S20];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 2番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 2, data); // ←ここは 2
    } else if (typeof window.__registerPromptPart === 'function') {
      // 旧移行用
      window.__registerPromptPart('faith_part2', data);
    } else {
      // さらに古い保険
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part2'] = data;
    }
  } catch (e) {
    console.error('[faith_part2 merged 11..20] register error:', e);
  }
})();