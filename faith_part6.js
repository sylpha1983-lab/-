/* faith_part6.js — merged parts 51..60 (v1.0)
   - Registers: window.__registerPromptPart('faith', 6, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part51..60）をインライン化
  // =========================

  // part51  ref: faith_part51.js
  const S51 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'spark-joy-smile',    label:'きら喜びスマイル / sparkling joy smile' },
        { id:'confetti-surprise',  label:'紙吹雪サプライズ / confetti surprise' },
        { id:'twinkle-eye-soft',   label:'目元きらり・やわら / twinkle-eyed (soft)' },
        { id:'festival-cheer',     label:'フェスの昂揚 / festival cheer' },
        { id:'heartflush-bashful', label:'ハート紅潮・照れ / heart-flush bashful' },
        { id:'glitter-wink',       label:'グリッター・ウィンク / glitter wink' }
      ]}
    ],
    presets:[]
  };

  // part52  ref: faith_part52.js
  const S52 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'pastel-soft-smile',   label:'パステル・やわ微笑み / pastel soft smile' },
        { id:'candy-gleam-eyes',    label:'キャンディきら眼 / candy gleam eyes' },
        { id:'sweet-bashful-blush', label:'スウィート照れ紅潮 / sweet bashful blush' },
        { id:'cotton-happy-sigh',   label:'コットン・幸せの吐息 / cotton happy sigh' },
        { id:'lollipop-wink',       label:'ロリポップ・ウィンク / lollipop wink' },
        { id:'sugar-quiet-joy',     label:'シュガー・静かな喜び / sugar quiet joy' }
      ]}
    ],
    presets:[]
  };

  // part53  ref: faith_part53.js
  const S53 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'neon-smirk',          label:'ネオン・スマーク / neon smirk' },
        { id:'cyber-glow-eyes',     label:'サイバーグロウ眼 / cyber glow eyes' },
        { id:'techno-intense-gaze', label:'テクノ強い視線 / techno intense gaze' },
        { id:'holo-blush',          label:'ホログラム紅潮 / hologram blush' },
        { id:'pulse-smile',         label:'パルス微笑み / pulse smile' }
      ]}
    ],
    presets:[]
  };

  // part54  ref: faith_part54.js
  const S54 = {
    categories: [
      { name:'Expressions / 表情（氷・結晶トーン）', items:[
        { id:'frost-soft-smile',    label:'霜のやわ微笑み / frost soft smile' },
        { id:'glacier-calm-gaze',   label:'氷河の静視線 / glacier calm gaze' },
        { id:'crystal-tear',        label:'クリスタル涙 / crystal tear' },
        { id:'icy-determined-eyes', label:'氷の決意の眼 / icy determined eyes' },
        { id:'chill-rosy-blush',    label:'ひんやり紅潮 / chill rosy blush' }
      ]}
    ],
    presets:[]
  };

  // part55  ref: faith_part55.js
  const S55 = {
    categories: [
      { name:'Expressions / 表情（Flame / Ember）', items:[
        { id:'fierce-smirk-ember', label:'鋭いニヤリ・熾火 / fierce smirk (ember)' },
        { id:'warm-gleam-eyes',    label:'温かな輝きの眼 / warm gleam eyes' },
        { id:'flushed-determined', label:'紅潮・決意 / flushed & determined' },
        { id:'fiery-tear',         label:'炎の涙 / fiery tear' },
        { id:'playful-heat-wink',  label:'戯れ・熱のウィンク / playful heat wink' }
      ]}
    ],
    presets:[]
  };

  // part56  ref: faith_part56.js
  const S56 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'smile-soft',        label:'やわらかな微笑み / smile-soft' },
        { id:'smile-gentle',      label:'優しいほほえみ / smile-gentle' },
        { id:'smile-bright',      label:'明るい笑顔 / smile-bright' },
        { id:'smile-big',         label:'満面の笑み / smile-big' },
        { id:'grin-open',         label:'歯を見せた笑顔 / grin-open' },
        { id:'smile-closed-eyes', label:'目を細めた笑顔 / smile-closed-eyes' },
        { id:'smile-shy',         label:'照れ笑い / smile-shy' },
        { id:'smile-proud',       label:'誇らしげな笑み / smile-proud' },
        { id:'laugh-soft',        label:'くすぐす笑い / laugh-soft' },
        { id:'laugh-joyful',      label:'嬉しそうな笑い / laugh-joyful' }
      ]}
    ],
    presets: [
      { id:'joy-basic-pack',  label:'喜：ベーシック笑顔セット', tags:['smile-soft','smile-bright','smile-closed-eyes'] },
      { id:'joy-laugh-pack',  label:'喜：笑いセット',           tags:['laugh-soft','laugh-joyful','grin-open'] }
    ]
  };

  // part57  ref: part57.js
  const S57 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'smile-soft',        label:'やわらかな微笑み / smile-soft' },
        { id:'smile-gentle',      label:'優しいほほえみ / smile-gentle' },
        { id:'smile-bright',      label:'明るい笑顔 / smile-bright' },
        { id:'smile-big',         label:'満面の笑み / smile-big' },
        { id:'grin-open',         label:'歯を見せた笑顔 / grin-open' },
        { id:'smile-closed-eyes', label:'目を細めた笑顔 / smile-closed-eyes' },
        { id:'smile-shy',         label:'照れ笑い / smile-shy' },
        { id:'smile-proud',       label:'誇らしげな笑み / smile-proud' },
        { id:'laugh-soft',        label:'くすくす笑い / laugh-soft' },
        { id:'laugh-joyful',      label:'嬉しそうな笑い / laugh-joyful' }
      ]}
    ],
    presets: [
      { id:'joy-basic-pack', label:'喜：ベーシック笑顔セット', tags:['smile-soft','smile-bright','smile-closed-eyes'] },
      { id:'joy-laugh-pack', label:'喜：笑いセット',           tags:['laugh-soft','laugh-joyful','grin-open'] }
    ]
  };

  // part58  ref: part58.js
  const S58 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'angry-soft',     label:'不満げ（弱） / angry-soft' },
        { id:'angry-medium',   label:'怒り（中） / angry-medium' },
        { id:'angry-furious',  label:'激怒（強） / angry-furious' },
        { id:'glare-forward',  label:'正面への鋭いにらみ / glare-forward' },
        { id:'glare-side-eye', label:'ジト目（横目） / glare-side-eye' },
        { id:'brow-furrow',    label:'眉間にしわ / brow-furrow' },
        { id:'jaw-clench',     label:'食いしばり / jaw-clench' },
        { id:'teeth-grit',     label:'歯ぎしり / teeth-grit' },
        { id:'pout-anger',     label:'むくれ（怒） / pout-anger' },
        { id:'vein-popping',   label:'怒りマーク・こめかみ血管 / vein-popping' }
      ]}
    ],
    presets: [
      { id:'anger-staged',     label:'怒：段階セット',  tags:['angry-soft','angry-medium','angry-furious'] },
      { id:'anger-glare-pack', label:'怒：にらみ特化',  tags:['glare-forward','glare-side-eye','brow-furrow'] }
    ]
  };

  // part59  ref: part59.js
  const S59 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'sad-soft',         label:'物悲しい（弱） / sad-soft' },
        { id:'sad-deep',         label:'深い悲しみ / sad-deep' },
        { id:'downcast-eyes',    label:'伏し目がち / downcast-eyes' },
        { id:'teary-eyes',       label:'うるんだ瞳 / teary-eyes' },
        { id:'single-tear',      label:'片目に一筋の涙 / single-tear' },
        { id:'tear-pool',        label:'涙がたまる / tear-pool' },
        { id:'sob-quiet',        label:'静かなすすり泣き / sob-quiet' },
        { id:'pout-sad',         label:'口を尖らせた哀しみ / pout-sad' },
        { id:'trembling-lip',    label:'震える唇 / trembling-lip' },
        { id:'melancholy-smile', label:'かなしげな微笑 / melancholy-smile' }
      ]}
    ],
    presets: [
      { id:'sad-tears-pack', label:'哀：涙バリエーション', tags:['teary-eyes','single-tear','tear-pool'] },
      { id:'sad-soft-pack',  label:'哀：ソフト表情',       tags:['sad-soft','downcast-eyes','melancholy-smile'] }
    ]
  };

  // part60  ref: part60.js
  const S60 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'smile-eye-smile',     label:'目も笑っている / smile-eye-smile' },
        { id:'smile-dimples',       label:'えくぼ笑顔 / smile-dimples' },
        { id:'smile-teary-joy',     label:'嬉し涙の笑顔 / smile-teary-joy' },
        { id:'smile-side',          label:'横目の微笑み / smile-side' },
        { id:'smile-upturned',      label:'口角しっかり上がる / smile-upturned' },
        { id:'grin-cheeky',         label:'小悪魔的グリン / grin-cheeky' },
        { id:'laugh-closed-mouth',  label:'口閉じ笑い / laugh-closed-mouth' },
        { id:'laugh-open-mouth',    label:'口開け笑い / laugh-open-mouth' }
      ]}
    ],
    presets: [
      { id:'joy-eye-pack', label:'喜：アイスマイル特化', tags:['smile-eye-smile','smile-dimples','smile-side'] }
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
  // マージ実行（51..60）
  // =========================
  const SOURCES = [S51,S52,S53,S54,S55,S56,S57,S58,S59,S60];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 6番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 6, data); // ← 6で登録
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part6', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part6'] = data;
    }
  } catch (e) {
    console.error('[faith_part6 merged 51..60] register error:', e);
  }
})();