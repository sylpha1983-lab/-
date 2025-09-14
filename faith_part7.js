/* faith_part7.js — merged parts 62..69 & 71..72 (v1.0)
   - Registers: window.__registerPromptPart('faith', 7, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（62..69, 71..72）をインライン化
  // =========================

  // part62 — 哀：疲労・喪失・救いを求める視線
  // src: faith_part62.js
  const S62 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "weary-sad",      label: "疲れた哀しみ / weary-sad" },
        { id: "empty-eyes",     label: "虚ろな瞳 / empty-eyes" },
        { id: "mourning-sad",   label: "喪失の悲しみ / mourning-sad" },
        { id: "helpless-look",  label: "助けを求める視線 / helpless-look" },
        { id: "clingy-sad",     label: "縋るような表情 / clingy-sad" },
        { id: "curl-lip-down",  label: "口角が落ちる / curl-lip-down" }
      ] }
    ],
    presets: [
      { id: "sad-weary-pack", label: "哀：疲労系セット", tags: ["weary-sad","empty-eyes","curl-lip-down"] }
    ]
  };

  // part63 — 哀：絶望・挫折・無力感
  // src: faith_part63.js
  const S63 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "despair-deep",     label: "深い絶望 / despair-deep" },
        { id: "despair-hopeless", label: "希望を失った表情 / despair-hopeless" },
        { id: "crying-collapse",  label: "泣き崩れる / crying-collapse" },
        { id: "scream-sad",       label: "悲痛の叫び / scream-sad" },
        { id: "tremble-fear-sad", label: "恐れと哀しみの震え / tremble-fear-sad" },
        { id: "kneel-despair",    label: "膝をつく絶望 / kneel-despair" },
        { id: "cover-face-sad",   label: "顔を覆う哀しみ / cover-face-sad" },
        { id: "hollow-look",      label: "虚無のまなざし / hollow-look" }
      ] }
    ],
    presets: [
      { id: "sad-despair-pack",  label: "哀：絶望セット", tags: ["despair-deep","crying-collapse","hollow-look"] },
      { id: "sad-hopeless-pack", label: "哀：希望喪失",   tags: ["despair-hopeless","kneel-despair","cover-face-sad"] }
    ]
  };

  // part64 — 怒：狂気・憤怒・暴走
  // src: faith_part64.js
  const S64 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "rage-madness",        label: "狂気の怒り / rage-madness" },
        { id: "rage-uncontrollable", label: "抑えられぬ怒り / rage-uncontrollable" },
        { id: "rage-berserk",        label: "憤怒・暴走 / rage-berserk" },
        { id: "scream-anger",        label: "怒号・叫び / scream-anger" },
        { id: "snarl-wild",          label: "獣のような唸り / snarl-wild" },
        { id: "eyes-bloodshot",      label: "血走った目 / eyes-bloodshot" },
        { id: "teeth-bared",         label: "歯をむき出す / teeth-bared" },
        { id: "foaming-rage",        label: "泡を吹く怒り / foaming-rage" }
      ] }
    ],
    presets: [
      { id: "anger-berserk-pack", label: "怒：暴走セット", tags: ["rage-berserk","scream-anger","eyes-bloodshot"] },
      { id: "anger-madness-pack", label: "怒：狂気セット", tags: ["rage-madness","snarl-wild","foaming-rage"] }
    ]
  };

  // part65 — 喜：狂喜・恍惚・高揚感
  // src: faith_part65.js
  const S65 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "joy-ecstatic",   label: "狂喜 / joy-ecstatic" },
        { id: "joy-euphoric",   label: "恍惚の喜び / joy-euphoric" },
        { id: "joy-triumphant", label: "勝利の高揚 / joy-triumphant" },
        { id: "joy-overjoyed",  label: "歓喜に満ちた / joy-overjoyed" },
        { id: "laugh-maniacal", label: "高笑い（狂喜） / laugh-maniacal" },
        { id: "smile-blissful", label: "至福の笑み / smile-blissful" },
        { id: "smile-relieved", label: "安堵の笑顔 / smile-relieved" },
        { id: "smile-radiant",  label: "輝くような笑顔 / smile-radiant" }
      ] }
    ],
    presets: [
      { id: "joy-ecstasy-pack", label: "喜：狂喜セット", tags: ["joy-ecstatic","laugh-maniacal","joy-overjoyed"] },
      { id: "joy-bliss-pack",   label: "喜：至福セット", tags: ["smile-blissful","joy-euphoric","smile-radiant"] }
    ]
  };

  // part66 — 哀：恐怖と悲しみのパニック表情
  // src: faith_part66.js
  const S66 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "panic-sorrow",     label: "パニックの哀しみ / panic-sorrow" },
        { id: "dread-sad",        label: "恐怖混じりの哀しみ / dread-sad" },
        { id: "crying-hysterical",label: "取り乱した泣き / crying-hysterical" },
        { id: "screaming-sad",    label: "悲鳴に近い泣き / screaming-sad" },
        { id: "trembling-sad",    label: "恐怖に震える哀 / trembling-sad" },
        { id: "wide-eyes-tears",  label: "涙目で見開く / wide-eyes-tears" },
        { id: "clingy-cry",       label: "縋りつく泣き / clingy-cry" },
        { id: "begging-sad",      label: "懇願する哀しみ / begging-sad" }
      ] }
    ],
    presets: [
      { id: "sad-panic-pack", label: "哀：パニック哀しみセット", tags: ["panic-sorrow","crying-hysterical","wide-eyes-tears"] },
      { id: "sad-dread-pack", label: "哀：恐怖混じり",           tags: ["dread-sad","trembling-sad","begging-sad"] }
    ]
  };

  // part67 — 怒＋哀：復讐心・憎悪
  // src: faith_part67.js
  const S67 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "revenge-gaze",       label: "復讐のまなざし / revenge-gaze" },
        { id: "hatred-deep",        label: "深い憎悪 / hatred-deep" },
        { id: "vengeful-smirk",     label: "復讐心の笑み / vengeful-smirk" },
        { id: "anger-grief-mix",    label: "怒りと悲しみの混合 / anger-grief-mix" },
        { id: "tearful-anger",      label: "涙混じりの怒り / tearful-anger" },
        { id: "scornful-gaze",      label: "軽蔑の視線 / scornful-gaze" },
        { id: "grim-determination", label: "復讐の決意 / grim-determination" },
        { id: "dark-smile",         label: "闇を帯びた笑み / dark-smile" }
      ] }
    ],
    presets: [
      { id: "revenge-pack", label: "怒哀：復讐心セット", tags: ["revenge-gaze","tearful-anger","grim-determination"] },
      { id: "hatred-pack",  label: "怒哀：憎悪セット",   tags: ["hatred-deep","scornful-gaze","dark-smile"] }
    ]
  };

  // part68 — 喜：狂信・陶酔・崇拝
  // src: faith_part68.js
  const S68 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "fanatic-joy",     label: "狂信的な喜び / fanatic-joy" },
        { id: "worship-bliss",   label: "崇拝の恍惚 / worship-bliss" },
        { id: "rapture-smile",   label: "恍惚の笑み / rapture-smile" },
        { id: "devoted-gaze",    label: "信奉のまなざし / devoted-gaze" },
        { id: "ecstatic-tears",  label: "歓喜の涙 / ecstatic-tears" },
        { id: "joy-trance",      label: "陶酔状態の喜び / joy-trance" },
        { id: "exaltation",      label: "高揚した崇敬 / exaltation" },
        { id: "smile-fanatic",   label: "熱狂的な笑顔 / smile-fanatic" }
      ] }
    ],
    presets: [
      { id: "joy-fanatic-pack", label: "喜：狂信セット", tags: ["fanatic-joy","smile-fanatic","rapture-smile"] },
      { id: "joy-worship-pack", label: "喜：崇拝陶酔",   tags: ["worship-bliss","devoted-gaze","ecstatic-tears"] }
    ]
  };

  // part69 — 哀：罪悪感・自責・後悔
  // src: faith_part69.js
  const S69 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "guilt-look",         label: "罪悪感に満ちた視線 / guilt-look" },
        { id: "remorseful",         label: "後悔の表情 / remorseful" },
        { id: "self-blame",         label: "自分を責める / self-blame" },
        { id: "apologetic-sad",     label: "謝罪の哀しみ / apologetic-sad" },
        { id: "regret-tears",       label: "後悔の涙 / regret-tears" },
        { id: "downcast-remorse",   label: "後悔に伏し目 / downcast-remorse" },
        { id: "hand-cover-mouth",   label: "口を覆う後悔 / hand-cover-mouth" },
        { id: "silent-guilt",       label: "沈黙の罪悪感 / silent-guilt" }
      ] }
    ],
    presets: [
      { id: "sad-guilt-pack",  label: "哀：罪悪感セット", tags: ["guilt-look","self-blame","silent-guilt"] },
      { id: "sad-regret-pack", label: "哀：後悔セット",   tags: ["remorseful","regret-tears","downcast-remorse"] }
    ]
  };

  // part71 — 喜：慈愛・母性的な微笑み
  // src: faith_part71.js
  const S71 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "compassion-smile",   label: "慈愛の笑み / compassion-smile" },
        { id: "maternal-joy",       label: "母性的な喜び / maternal-joy" },
        { id: "gentle-gaze",        label: "優しい眼差し / gentle-gaze" },
        { id: "nurturing-look",     label: "包み込む視線 / nurturing-look" },
        { id: "protective-smile",   label: "守るような笑顔 / protective-smile" },
        { id: "warm-blessing",      label: "祝福の微笑み / warm-blessing" },
        { id: "soft-encouragement", label: "やさしい励まし / soft-encouragement" },
        { id: "relieved-joy",       label: "安心の喜び / relieved-joy" }
      ] }
    ],
    presets: [
      { id: "joy-compassion-pack", label: "喜：慈愛セット",     tags: ["compassion-smile","gentle-gaze","soft-encouragement"] },
      { id: "joy-maternal-pack",   label: "喜：母性の喜び",     tags: ["maternal-joy","protective-smile","warm-blessing"] }
    ]
  };

  // part72 — 哀：孤独・孤立・見捨てられ感
  // src: faith_part72.js
  const S72 = {
    categories: [
      { name: "Expressions / 表情", items: [
        { id: "lonely-gaze",       label: "孤独なまなざし / lonely-gaze" },
        { id: "abandoned-sad",     label: "見捨てられた哀しみ / abandoned-sad" },
        { id: "isolation-look",    label: "孤立した表情 / isolation-look" },
        { id: "forsaken-eyes",     label: "見放された瞳 / forsaken-eyes" },
        { id: "solitary-tears",    label: "孤独の涙 / solitary-tears" },
        { id: "empty-room-stare",  label: "空虚を見つめる / empty-room-stare" },
        { id: "yearning-sad",      label: "求めるような哀しみ / yearning-sad" },
        { id: "reaching-out-sad",  label: "手を伸ばす哀しみ / reaching-out-sad" }
      ] }
    ],
    presets: [
      { id: "sad-lonely-pack",   label: "哀：孤独セット",   tags: ["lonely-gaze","solitary-tears","empty-room-stare"] },
      { id: "sad-abandoned-pack",label: "哀：見捨てられ感", tags: ["abandoned-sad","forsaken-eyes","reaching-out-sad"] }
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
  // マージ実行（62..69,71..72）
  // =========================
  const SOURCES = [S62,S63,S64,S65,S66,S67,S68,S69,S71,S72];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 7番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 7, data); // ← 7で登録
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part7', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part7'] = data;
    }
  } catch (e) {
    console.error('[faith_part7 merged 62..69,71..72] register error:', e);
  }
})();