/* faith_part4.js — merged parts 31..40 (v1.0)
   - Registers: window.__registerPromptPart('faith', 4, data)
   // [CHANGE] 重複id/重複tags自動排除。カテゴリ名・既存UIは改名/改変しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part31..40）をインライン化
  // =========================

  // part31  （Expressions / 表情）  src: faith_part31.js
  const S31 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'heart-eyed-soft',      label:'ハート目・やわら / heart-eyed (soft)' },
        { id:'heart-eyed-bright',    label:'ハート目・きらきら / heart-eyed (bright)' },
        { id:'smile-heart-corner',   label:'口角ハート気味スマイル / heart-corner smile' },
        { id:'pout-heart-shy',       label:'ハート気味むくれ・照れ / heartish shy pout' },
        { id:'blush-heart',          label:'ハートチーク・赤らめ / heart blush' },
        { id:'wink-heart',           label:'ウィンク・ハート / heart wink' },
        { id:'gaze-heart-softdown',  label:'ハート気味の伏し目 / heart-soft downward gaze' },
        { id:'sparkle-heart-tear',   label:'涙縁にハートきら / heart-sparkle tearline' },
        { id:'kissy-heart-mouth',    label:'ハート投げキス口 / kissy heart mouth' },
        { id:'flutter-heart-breath', label:'ときめき息づかい / fluttering heart breath' }
      ] }
    ],
    presets: []
  };

  // part32  （Expressions / 表情（Heart））  src: faith_part32.js
  const S32 = {
    categories: [
      { name: 'Expressions / 表情（Heart）', items: [
        { id:'heart-eyes-soft',          label:'ハートアイ（やわ） / heart eyes (soft)' },
        { id:'heart-eyes-sparkle',       label:'ハートアイ（きらめき） / heart eyes (sparkle)' },
        { id:'blush-heart-cheeks',       label:'ハートほお染め / heart blush on cheeks' },
        { id:'wink-heart',               label:'ハートウィンク / heart wink' },
        { id:'smile-heart-curved',       label:'ハートカーブ微笑み / heart-curved smile' },
        { id:'pout-heart-shy',           label:'ハートむくれ・照れ / shy heart pout' },
        { id:'gaze-heart-dreamy',        label:'ハートとろ目 / dreamy heart gaze' },
        { id:'tear-joy-heart',           label:'喜び涙・ハート縁 / joyful tear with heart rim' },
        { id:'kissy-heart-lips',         label:'キッシーハート・リップ / kissy heart lips' },
        { id:'confession-nervous-heart', label:'告白前の高鳴り / pre-confession heart thump' }
      ] }
    ],
    presets: []
  };

  // part33  （Expressions / 表情）  src: faith_part33.js
  const S33 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'heart-sigh-eyes',      label:'ため息ハートアイ / sighing heart eyes' },
        { id:'downcast-heart-gaze',  label:'伏し目・ハートの影 / downcast heart gaze' },
        { id:'wistful-heart-smile',  label:'物憂げハート微笑み / wistful heart smile' },
        { id:'tremble-heart-lips',   label:'ふるえる唇・ハート / trembling heart lips' },
        { id:'tearline-heart',       label:'涙縁・ハート / teary heart rim' },
        { id:'lonely-heart-blush',   label:'孤独の頬染め・ハート / lonely heart blush' }
      ] }
    ],
    presets: []
  };

  // part34  （Expressions only）  src: faith_part34.js
  const S34 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'heart-awe-eyes', label:'ハート目・ときめき / heart-awe-eyes' },
        { id:'blush-tinge',    label:'ほの赤らみ / blush-tinge' }
      ] }
    ],
    presets: []
  };

  // part35  （Expressions only）  src: faith_part35.js
  const S35 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'soft-smile-heart', label:'微笑み＋ハート / soft-smile-heart' },
        { id:'heart-spark-eyes', label:'ハートきらめき目 / heart-spark-eyes' }
      ] }
    ],
    presets: []
  };

  // part36  （Expressions / 表情）  src: faith_part36.js
  const S36 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'wink-heart',  label:'ウィンク＋ハート / wink-heart' },
        { id:'blush-soft',  label:'微赤らみ・ソフト / blush-soft' }
      ] }
    ],
    presets: []
  };

  // part37  （Expressions + Effects + preset）  src: faith_part37.js
  const S37 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'heart-kiss-face', label:'投げキス・ハート / heart-kiss-face' },
        { id:'smile-bright',    label:'明るい微笑み / smile-bright' }
      ] },
      { name: 'Effects / エフェクト', items: [
        { id:'kiss-hearts',  label:'キス・ハート / kiss-hearts' },
        { id:'heart-trails', label:'ハートの軌跡 / heart-trails' },
        { id:'glow-warm',    label:'ウォーム発光 / glow-warm' }
      ] }
    ],
    presets: [
      { id:'Kiss-Heart-Trails', label:'キス・ハートの軌跡 / Kiss-Heart-Trails', tags:['kiss-hearts','heart-trails','glow-warm'] }
    ]
  };

  // part38  （表情）  src: faith_part38.js
  const S38 = {
    categories: [
      { name: '表情', items: [
        { id:'sparkle-heart-eyes', label:'きらめくハート目 / sparkle-heart-eyes' },
        { id:'calm-happy',         label:'穏やかな喜び / calm-happy' }
      ] }
    ],
    presets: []
  };

  // part39  （Expressions / 表情）  src: faith_part39.js
  const S39 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'soft-heart-eyes',  label:'やわらかハートアイ / soft heart eyes' },
        { id:'shy-heart-smile',  label:'照れハート微笑み / shy heart smile' },
        { id:'fluttering-blush', label:'ときめき頬染め / fluttering blush' },
        { id:'warm-gaze-heart',  label:'あたたかいハート視線 / warm hearted gaze' }
      ] }
    ],
    presets: []
  };

  // part40  （Expressions / 表情）  src: faith_part40.js
  const S40 = {
    categories: [
      { name: 'Expressions / 表情', items: [
        { id:'fae-heart-eyes',        label:'妖精・ハートアイ / fae heart eyes' },
        { id:'arcane-heart-smile',    label:'秘術・ハートスマイル / arcane heart smile' },
        { id:'myth-heart-gaze',       label:'神話・ハート視線 / myth heart gaze' },
        { id:'enchanted-heart-blush', label:'魔魅・ハート頬染め / enchanted heart blush' }
      ] }
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
  // マージ実行（31..40）
  // =========================
  const SOURCES = [S31,S32,S33,S34,S35,S36,S37,S38,S39,S40];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 4番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 4, data); // ← 4で登録
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part4', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part4'] = data;
    }
  } catch (e) {
    console.error('[faith_part4 merged 31..40] register error:', e);
  }
})();