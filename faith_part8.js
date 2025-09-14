/* faith_part8.js — merged parts 73..82 (v1.0)
   - Registers: window.__registerPromptPart('faith', 8, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part73..82）をインライン化
  // =========================

  // part73 — 怒：嫉妬・羨望
  const S73 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"jealous-gaze",     label:"嫉妬のまなざし / jealous-gaze" },
      { id:"envy-look",        label:"羨望の表情 / envy-look" },
      { id:"bitter-smile",     label:"苦々しい笑み / bitter-smile" },
      { id:"side-eye-jealous", label:"嫉妬の横目 / side-eye-jealous" },
      { id:"resentful-glare",  label:"恨みがましいにらみ / resentful-glare" },
      { id:"pout-envy",        label:"ふてくされた嫉妬 / pout-envy" },
      { id:"sigh-jealous",     label:"ため息まじりの嫉妬 / sigh-jealous" },
      { id:"gritted-envy",     label:"歯ぎしりする羨望 / gritted-envy" }
    ]}],
    presets: [
      { id:"anger-jealousy-pack", label:"怒：嫉妬セット", tags:["jealous-gaze","side-eye-jealous","resentful-glare"] },
      { id:"anger-envy-pack",     label:"怒：羨望セット", tags:["envy-look","bitter-smile","gritted-envy"] }
    ]
  };

  // part74 — 喜：誇り・栄光・達成感
  const S74 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"proud-smile",        label:"誇らしげな笑み / proud-smile" },
      { id:"triumph-grin",       label:"勝利の笑顔 / triumph-grin" },
      { id:"glory-gaze",         label:"栄光を見つめる眼差し / glory-gaze" },
      { id:"victorious-laugh",   label:"勝ち誇った笑い / victorious-laugh" },
      { id:"confident-smirk",    label:"自信に満ちた笑み / confident-smirk" },
      { id:"achievement-joy",    label:"達成の喜び / achievement-joy" },
      { id:"satisfied-smile",    label:"満足げな笑顔 / satisfied-smile" },
      { id:"champion-pose",      label:"栄光のポーズ / champion-pose" }
    ]}],
    presets: [
      { id:"joy-pride-pack",   label:"喜：誇りセット",       tags:["proud-smile","confident-smirk","satisfied-smile"] },
      { id:"joy-triumph-pack", label:"喜：栄光・勝利セット", tags:["triumph-grin","victorious-laugh","glory-gaze"] }
    ]
  };

  // part75 — 哀：諦念・受容・宿命感
  const S75 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"resigned-sad",     label:"諦めの哀しみ / resigned-sad" },
      { id:"acceptance-look",  label:"受け入れる表情 / acceptance-look" },
      { id:"fatalistic-gaze",  label:"宿命を悟った眼差し / fatalistic-gaze" },
      { id:"calm-tears",       label:"静かな涙 / calm-tears" },
      { id:"stoic-sorrow",     label:"耐える哀しみ / stoic-sorrow" },
      { id:"quiet-grief",      label:"静かな悲嘆 / quiet-grief" },
      { id:"submissive-sad",   label:"従うような哀しみ / submissive-sad" },
      { id:"accepting-smile",  label:"受容の微笑み / accepting-smile" }
    ]}],
    presets: [
      { id:"sad-resignation-pack", label:"哀：諦念セット", tags:["resigned-sad","fatalistic-gaze","quiet-grief"] },
      { id:"sad-acceptance-pack",  label:"哀：受容セット", tags:["acceptance-look","calm-tears","accepting-smile"] }
    ]
  };

  // part76 — 怒：裏切りに対する怒り
  const S76 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"betrayal-rage",     label:"裏切りへの激怒 / betrayal-rage" },
      { id:"shock-anger",       label:"衝撃と怒り / shock-anger" },
      { id:"hurt-anger",        label:"傷ついた怒り / hurt-anger" },
      { id:"grief-rage",        label:"悲しみ混じりの怒り / grief-rage" },
      { id:"accusatory-glare",  label:"糾弾するにらみ / accusatory-glare" },
      { id:"disbelief-fury",    label:"信じられない怒り / disbelief-fury" },
      { id:"vengeful-cry",      label:"復讐の叫び / vengeful-cry" },
      { id:"broken-trust",      label:"信頼を失った怒り / broken-trust" }
    ]}],
    presets: [
      { id:"anger-betrayal-pack", label:"怒：裏切りセット", tags:["betrayal-rage","shock-anger","broken-trust"] },
      { id:"anger-hurt-pack",     label:"怒：傷ついた怒り", tags:["hurt-anger","grief-rage","accusatory-glare"] }
    ]
  };

  // part77 — 喜：無邪気・子供っぽい喜び
  const S77 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"innocent-smile",    label:"無邪気な笑顔 / innocent-smile" },
      { id:"childlike-joy",     label:"子供のような喜び / childlike-joy" },
      { id:"playful-giggle",    label:"はしゃぐ笑い / playful-giggle" },
      { id:"curious-grin",      label:"好奇心の笑み / curious-grin" },
      { id:"excited-bounce",    label:"飛び跳ねる喜び / excited-bounce" },
      { id:"surprise-joy",      label:"驚き混じりの喜び / surprise-joy" },
      { id:"carefree-laugh",    label:"気ままな笑い / carefree-laugh" },
      { id:"sparkle-eyes-joy",  label:"目が輝く喜び / sparkle-eyes-joy" }
    ]}],
    presets: [
      { id:"joy-playful-pack",   label:"喜：無邪気セット",       tags:["innocent-smile","playful-giggle","sparkle-eyes-joy"] },
      { id:"joy-childlike-pack", label:"喜：子供っぽい喜び",     tags:["childlike-joy","excited-bounce","curious-grin"] }
    ]
  };

  // part78 — 哀：喪失の後の空虚・空洞感
  const S78 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"empty-sad",       label:"空虚な哀しみ / empty-sad" },
      { id:"hollow-grief",    label:"空洞の悲嘆 / hollow-grief" },
      { id:"numb-tears",      label:"感情を失った涙 / numb-tears" },
      { id:"blank-sorrow",    label:"虚ろな悲しみ / blank-sorrow" },
      { id:"lifeless-gaze",   label:"生気のない眼差し / lifeless-gaze" },
      { id:"silent-void",     label:"沈黙の虚無 / silent-void" },
      { id:"detached-sad",    label:"切り離された哀しみ / detached-sad" },
      { id:"lost-all",        label:"すべてを失った表情 / lost-all" }
    ]}],
    presets: [
      { id:"sad-emptiness-pack", label:"哀：空虚セット",     tags:["empty-sad","hollow-grief","silent-void"] },
      { id:"sad-lostall-pack",   label:"哀：すべてを失った", tags:["lost-all","lifeless-gaze","blank-sorrow"] }
    ]
  };

  // part79 — 怒：軽蔑・侮蔑・見下し
  const S79 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"scornful-smile",       label:"軽蔑の笑み / scornful-smile" },
      { id:"disdainful-look",      label:"侮蔑の視線 / disdainful-look" },
      { id:"mocking-grin",         label:"嘲笑の笑み / mocking-grin" },
      { id:"sneer-anger",          label:"鼻で笑う怒り / sneer-anger" },
      { id:"derisive-smirk",       label:"あざけりの笑み / derisive-smirk" },
      { id:"condescending-gaze",   label:"見下す眼差し / condescending-gaze" },
      { id:"dismissive-look",      label:"突き放す視線 / dismissive-look" },
      { id:"arrogant-smile",       label:"傲慢な笑み / arrogant-smile" }
    ]}],
    presets: [
      { id:"anger-contempt-pack", label:"怒：軽蔑セット", tags:["scornful-smile","disdainful-look","mocking-grin"] },
      { id:"anger-scorn-pack",    label:"怒：見下しセット", tags:["sneer-anger","condescending-gaze","arrogant-smile"] }
    ]
  };

  // part80 — 喜：安心・安堵・癒やし
  const S80 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"relief-smile",         label:"安堵の笑み / relief-smile" },
      { id:"comfort-gaze",         label:"安心させる眼差し / comfort-gaze" },
      { id:"reassuring-look",      label:"励ますような表情 / reassuring-look" },
      { id:"calm-joy",             label:"落ち着いた喜び / calm-joy" },
      { id:"gentle-relief",        label:"やわらかな安堵 / gentle-relief" },
      { id:"soothing-smile",       label:"癒やしの笑顔 / soothing-smile" },
      { id:"peaceful-happiness",   label:"平穏な幸福感 / peaceful-happiness" },
      { id:"release-breath-smile", label:"吐息まじりの微笑み / release-breath-smile" }
    ]}],
    presets: [
      { id:"joy-relief-pack",  label:"喜：安堵セット", tags:["relief-smile","gentle-relief","release-breath-smile"] },
      { id:"joy-comfort-pack", label:"喜：癒やしセット", tags:["comfort-gaze","soothing-smile","peaceful-happiness"] }
    ]
  };

  // part81 — 哀：罪に縛られた哀しみ・懺悔
  const S81 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"penitent-look",       label:"懺悔のまなざし / penitent-look" },
      { id:"repentant-tears",     label:"悔恨の涙 / repentant-tears" },
      { id:"kneel-remorse",       label:"ひざまずく後悔 / kneel-remorse" },
      { id:"prayerful-sad",       label:"祈るような哀しみ / prayerful-sad" },
      { id:"confession-gaze",     label:"告白の眼差し / confession-gaze" },
      { id:"burdened-expression", label:"罪に押し潰された表情 / burdened-expression" },
      { id:"ashamed-sorrow",      label:"恥じ入る哀しみ / ashamed-sorrow" },
      { id:"seeking-forgiveness", label:"許しを乞う表情 / seeking-forgiveness" }
    ]}],
    presets: [
      { id:"sad-repent-pack",      label:"哀：懺悔セット", tags:["penitent-look","repentant-tears","kneel-remorse"] },
      { id:"sad-forgiveness-pack", label:"哀：許しを乞う", tags:["seeking-forgiveness","prayerful-sad","ashamed-sorrow"] }
    ]
  };

  // part82 — 怒：嘲りと狂気の怒り
  const S82 = {
    categories: [{ name: "Expressions / 表情", items: [
      { id:"mocking-rage",   label:"嘲る怒り / mocking-rage" },
      { id:"sadistic-anger", label:"嗜虐的な怒り / sadistic-anger" },
      { id:"taunting-grin",  label:"挑発的な笑み / taunting-grin" },
      { id:"deranged-fury",  label:"錯乱した怒り / deranged-fury" },
      { id:"cruel-smile",    label:"冷酷な笑み / cruel-smile" },
      { id:"gleeful-anger",  label:"嬉々とした怒り / gleeful-anger" },
      { id:"maniacal-rage",  label:"狂気の憤怒 / maniacal-rage" },
      { id:"tormenting-look",label:"責め苛む視線 / tormenting-look" }
    ]}],
    presets: [
      { id:"anger-mocking-pack",  label:"怒：嘲りセット",     tags:["mocking-rage","taunting-grin","cruel-smile"] },
      { id:"anger-sadistic-pack", label:"怒：嗜虐狂気セット", tags:["sadistic-anger","deranged-fury","maniacal-rage"] }
    ]
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

  // =========================
  // マージ実行（73..82）
  // =========================
  const SOURCES = [S73,S74,S75,S76,S77,S78,S79,S80,S81,S82];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 8番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 8, data); // ← 8で登録
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part8', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part8'] = data;
    }
  } catch (e) {
    console.error('[faith_part8 merged 73..82] register error:', e);
  }
})();