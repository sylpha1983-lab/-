/* faith_part5.js — merged parts 41..50 (v1.0)
   - Registers: window.__registerPromptPart('faith', 5, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part41..50）をインライン化
  // =========================

  // part41  ref: faith_part41.js
  const S41 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'uplifted-heart-look',  label:'舞い上がるハートの眼差し / uplifted heart look' },
        { id:'breezy-heart-smile',   label:'そよ風ハート微笑み / breezy heart smile' },
        { id:'lighthearted-chuckle', label:'軽やかな笑み / lighthearted chuckle' }
      ]}
    ],
    presets:[]
  };

  // part42  ref: faith_part42.js
  const S42 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'verdant-heart-gaze', label:'芽吹きハートの眼差し / verdant heart gaze' },
        { id:'bloom-heart-smile',  label:'開花ハート微笑み / bloom heart smile' },
        { id:'petal-soft-blush',   label:'花びらソフト頬染め / petal soft blush' }
      ]}
    ],
    presets:[]
  };

  // part43  ref: faith_part43.js
  const S43 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'stargaze-heart-eyes', label:'星見ハートアイ / stargaze heart eyes' },
        { id:'nebula-soft-smile',   label:'星雲ソフト微笑み / nebula soft smile' },
        { id:'cosmic-calm',         label:'宇宙の静穏 / cosmic calm' }
      ]}
    ],
    presets:[]
  };

  // part44  ref: faith_part44.js  ※42と内容重複あり → マージ時に自動で重複除去
  const S44 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'verdant-heart-gaze', label:'芽吹きハートの眼差し / verdant heart gaze' },
        { id:'bloom-heart-smile',  label:'開花ハート微笑み / bloom heart smile' },
        { id:'petal-soft-blush',   label:'花びらソフト頬染め / petal soft blush' }
      ]}
    ],
    presets:[]
  };

  // part45  ref: faith_part45.js
  const S45 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'fiery-resolve', label:'炎の決意 / fiery resolve' },
        { id:'ember-smirk',   label:'燠火のニヤリ / ember smirk' },
        { id:'heated-blush',  label:'熱紅潮 / heated blush' },
        { id:'spark-tear',    label:'火花の涙 / spark tear' },
        { id:'ardent-gaze',   label:'熱っぽい視線 / ardent gaze' }
      ]}
    ],
    presets:[]
  };

  // part46  ref: faith_part46.js
  const S46 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'starry-heart-eyes',  label:'星屑ハートアイ / starry heart eyes' },
        { id:'nebula-drift-smile', label:'星雲漂う微笑み / nebula drift smile' },
        { id:'cosmic-awe-gaze',    label:'宇宙への畏敬の眼差し / cosmic awe gaze' },
        { id:'dreamy-comet-blink', label:'夢見彗星まばたき / dreamy comet blink' }
      ]}
    ],
    presets:[]
  };

  // part47  ref: faith_part47.js
  const S47 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'holo-heart-gaze',    label:'ホロ・ハート視線 / hologram heart gaze' },
        { id:'servo-smirk',        label:'サーボ・スマーク / servo smirk' },
        { id:'circuit-blush',      label:'サーキット紅潮 / circuit blush' },
        { id:'mecha-soft-resolve', label:'メカ・柔ら決意 / mecha soft resolve' },
        { id:'optic-heart-spark',  label:'オプティック・ハート火花 / optic heart spark' }
      ]}
    ],
    presets:[]
  };

  // part48  ref: faith_part48.js
  const S48 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'prism-eyed-smile',    label:'プリズム瞳スマイル / prism-eyed smile' },
        { id:'facet-blush-soft',    label:'ファセット紅潮・やわら / faceted soft blush' },
        { id:'crystal-gaze-serene', label:'クリスタル視線・静謐 / crystal serene gaze' },
        { id:'iridescent-wink',     label:'虹彩ウィンク / iridescent wink' },
        { id:'shard-tears-glow',    label:'結晶涙のきらめき / glowing crystal tears' }
      ]}
    ],
    presets:[]
  };

  // part49  ref: faith_part49.js
  const S49 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'ink-blush-soft',     label:'墨染め紅潮・やわら / soft ink blush' },
        { id:'brushstroke-smile',  label:'筆致スマイル / brushstroke smile' },
        { id:'sumi-contemplation', label:'墨の思索・静 / sumi contemplation' },
        { id:'calligrapher-wink',  label:'筆匠ウィンク / calligrapher wink' },
        { id:'bleed-tear-trace',   label:'にじみ涙跡 / bleeding tear trace' }
      ]}
    ],
    presets:[]
  };

  // part50  ref: faith_part50.js
  const S50 = {
    categories: [
      { name:'Expressions / 表情', items: [
        { id:'citypop-wink',       label:'シティポップ・ウィンク / city pop wink' },
        { id:'neon-smile-bright',  label:'ネオンに映える笑顔 / neon bright smile' },
        { id:'afterglow-gaze',     label:'アフターグロー視線 / afterglow gaze' },
        { id:'midnight-melancholy',label:'真夜中のメランコリー / midnight melancholy' },
        { id:'club-heat-flush',    label:'クラブ熱気の紅潮 / club heat flush' },
        { id:'synthwave-cool',     label:'シンセウェイブの静けさ / synthwave cool' }
      ]}
    ],
    presets:[]
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
  // マージ実行（41..50）
  // =========================
  const SOURCES = [S41,S42,S43,S44,S45,S46,S47,S48,S49,S50];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 5番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 5, data); // ← 5で登録
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part5', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part5'] = data;
    }
  } catch (e) {
    console.error('[faith_part5 merged 41..50] register error:', e);
  }
})();