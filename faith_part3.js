/* faith_part3.js — merged parts 21..30 (v1.0)
   - Registers: window.__registerPromptPart('faith', 3, data)
   - 既存UI互換／重複id・重複tags排除。カテゴリ名は改名しません。
*/
(function () {
  "use strict";

  // =========================
  // 収集元（part21..30）をインライン化
  // =========================

  // part21
  const S21 = {
    categories: [
      { name:'Eyes / 目', items:[
        { id:'eyes-heartshine',  label:'瞳にハートのきらめき / eyes-heartshine' },
        { id:'wink-heart-tease', label:'ウィンク・ハート小悪魔 / wink-heart-tease' }
      ]},
      { name:'Emotion / 感情', items:[
        { id:'blush-soft-heart', label:'ほんのり頬染め・ハート / blush-soft-heart' },
        { id:'gaze-loving-soft', label:'優しい愛情のまなざし / gaze-loving-soft' },
        { id:'shy-tilt-heart',   label:'照れ顔・首かしげ(ハート) / shy-tilt-heart' }
      ]},
      { name:'Mouth / 口', items:[
        { id:'smile-sweet-heart', label:'スウィートスマイル・ハート / smile-sweet-heart' }
      ]}
    ],
    presets:[]
  };

  // part22
  const S22 = {
    categories: [
      { name:'Eyes / 目', items:[
        { id:'heart-eyes-gleam',     label:'ハート目・きらめき / heart-eyes-gleam' },
        { id:'heart-eyes-pulse',     label:'ハート目・脈動 / heart-eyes-pulse' },
        { id:'pupils-heart-twinkle', label:'瞳ハート・瞬き / pupils-heart-twinkle' },
        { id:'wink-heart-soft-alt',  label:'ウィンク・ハート（やわ） / wink-heart-soft-alt' },
        { id:'gaze-heart-distant',   label:'遠い視線・ハート余韻 / gaze-heart-distant' }
      ]},
      { name:'Brows / 眉', items:[
        { id:'brow-soft-adoring', label:'やわ眉・憧憬 / brow-soft-adoring' },
        { id:'brow-curve-flirty', label:'アーチ眉・フラーティ / brow-curve-flirty' }
      ]},
      { name:'Mouth / 口', items:[
        { id:'smile-heart-tilt-plus', label:'微笑・ハート傾き+ / smile-heart-tilt-plus' },
        { id:'kiss-blow-heart',       label:'投げキス・ハート / kiss-blow-heart' },
        { id:'soft-pout-heart',       label:'やわむくれ・ハート / soft-pout-heart' }
      ]},
      { name:'Emotion / 感情', items:[
        { id:'love-struck-calm',      label:'恋に落ちた・静 / love-struck-calm' },
        { id:'affection-bright-plus', label:'親愛・きらめき+ / affection-bright-plus' },
        { id:'shy-heart-rosy',        label:'照れ・ハートほの紅 / shy-heart-rosy' },
        { id:'devoted-gentle',        label:'一途・やさしさ / devoted-gentle' },
        { id:'fond-teary-heart',      label:'うるみ瞳・ハート / fond-teary-heart' }
      ]},
      { name:'State / 状態', items:[
        { id:'fluttery-heart',      label:'胸きゅん・ふわり / fluttery-heart' },
        { id:'serene-heart-aura',   label:'穏やか・ハートの余光 / serene-heart-aura' },
        { id:'buoyant-heart-lite',  label:'浮き立つ・ハート / buoyant-heart-lite' },
        { id:'resolute-kind-heart', label:'やさしい決意・ハート / resolute-kind-heart' }
      ]}
    ],
    presets:[]
  };

  // part23
  const S23 = {
    categories: [
      { name:'表情（ハート＆可憐テイスト）', items:[
        { id:'cheek-heart-blush',     label:'頬チーク・ハート / cheek-heart-blush' },
        { id:'eyes-catchlight-heart', label:'瞳キャッチライト・ハート / eyes-catchlight-heart' },
        { id:'smile-sweet-candy',     label:'微笑み・キャンディ / smile-sweet-candy' },
        { id:'bashful-ribbon-tilt',   label:'照れ・リボン頭傾き / bashful-ribbon-tilt' },
        { id:'fond-melt-choco',       label:'親愛・とろけチョコ / fond-melt-choco' },
        { id:'glossy-lip-heartshine', label:'リップ光沢・ハート煌き / glossy-lip-heartshine' },
        { id:'dreamy-heart-drift',    label:'うっとり・ハート漂い / dreamy-heart-drift' },
        { id:'spark-sugar-eyes',      label:'砂糖きらめきの瞳 / spark-sugar-eyes' }
      ]}
    ],
    presets:[]
  };

  // part24
  const S24 = {
    categories: [
      { name:'口元系', items:[
        { id:'playful-bubble-kiss', label:'遊び心・バブルキス / playful-bubble-kiss' }
      ]},
      { name:'感情系', items:[
        { id:'awe-heart-sky',       label:'見上げる驚き・ハート空 / awe-heart-sky' },
        { id:'nostalgic-fog-heart', label:'ノスタルジア・霧のハート / nostalgic-fog-heart' },
        { id:'festive-firework-smile', label:'祝祭・花火の微笑み / festive-firework-smile' }
      ]},
      { name:'状態系', items:[
        { id:'serene-ocean-love', label:'穏やかな海風・想い / serene-ocean-love' }
      ]}
    ],
    presets:[]
  };

  // part25
  const S25 = {
    categories: [
      { name:'Emotion / 感情', items:[
        { id:'stargaze-awe',    label:'星見の畏敬 / stargaze-awe' },
        { id:'dreamy-cosmic',   label:'夢見心地（宇宙） / dreamy-cosmic' },
        { id:'wistful-skyward', label:'物思い・空を見上げる / wistful-skyward' },
        { id:'hopeful-wish',    label:'願いを込める / hopeful-wish' },
        { id:'lonely-vastness', label:'宇宙的孤独 / lonely-vastness' },
        { id:'curious-astral',  label:'好奇の眼差し（星々） / curious-astral' },
        { id:'quiet-reverence', label:'静かな敬虔 / quiet-reverence' }
      ]},
      { name:'State / 状態', items:[
        { id:'serene-moonlit', label:'月光の静けさ / serene-moonlit' }
      ]}
    ],
    presets:[]
  };

  // part26
  const S26 = {
    categories: [
      { name:'Emotion / 感情', items:[
        { id:'fresh-breath-relief', label:'深呼吸の安堵 / fresh-breath-relief' },
        { id:'sun-kissed-smile',    label:'陽だまり微笑 / sun-kissed-smile' },
        { id:'breeze-delight',      label:'風を楽しむ / breeze-delight' },
        { id:'petal-curiosity',     label:'花びらへの好奇 / petal-curiosity' },
        { id:'dew-gentleness',      label:'朝露のやさしさ / dew-gentleness' }
      ]},
      { name:'State / 状態', items:[
        { id:'forest-calm',   label:'森の静けさ / forest-calm' },
        { id:'rain-soothed',  label:'小雨に癒やされる / rain-soothed' }
      ]}
    ],
    presets:[]
  };

  // part27
  const S27 = {
    categories: [
      { name:'Emotion / 感情', items:[
        { id:'fiery-determination', label:'燃える決意 / fiery determination' },
        { id:'ember-gaze',          label:'火の粉の視線 / ember gaze' },
        { id:'warm-smile',          label:'暖かな微笑み / warm smile' },
        { id:'blaze-rage',          label:'烈火の怒り / blaze rage' },
        { id:'flame-exhilaration',  label:'火炎の高揚 / flame exhilaration' },
        { id:'smoldering-sadness',  label:'燻る悲しみ / smoldering sadness' }
      ]}
    ],
    presets:[]
  };

  // part28
  const S28 = {
    categories: [
      { name:'Expressions / 表情（Ice & Snow）', items:[
        { id:'cool-composure',    label:'クールな平静 / cool-composure' },
        { id:'frosty-gaze',       label:'氷の視線 / frosty-gaze' },
        { id:'crystal-smile',     label:'結晶の微笑み / crystal-smile' },
        { id:'winter-melancholy', label:'冬の憂い / winter-melancholy' },
        { id:'hazy-breath-soft',  label:'白息・やわら / hazy-breath-soft' },
        { id:'sparkling-joy',     label:'きらめく喜び / sparkling-joy' }
      ]}
    ],
    presets:[]
  };

  // part29
  const S29 = {
    categories: [
      { name:'Expressions / 表情', items:[
        { id:'storm-focus',     label:'嵐を見据える集中 / storm focus' },
        { id:'awe-struck',      label:'畏怖のまなざし / awe-struck' },
        { id:'fear-steady',     label:'恐れを堪える / steady in fear' },
        { id:'thrill-charged',  label:'高揚・帯電 / thrill charged' },
        { id:'calm-in-tempest', label:'嵐の中の静けさ / calm in the tempest' }
      ]}
    ],
    presets:[]
  };

  // part30
  const S30 = {
    categories: [
      { name:'Expressions / 表情（Desert & Heat）', items:[
        { id:'heat-squint',        label:'強光で目を細める / heat squint' },
        { id:'endure-heat',        label:'灼熱に耐える / enduring heat' },
        { id:'wanderer-calm',      label:'放浪者の静けさ / wanderer calm' },
        { id:'parched-fatigue',    label:'乾きの疲労 / parched fatigue' },
        { id:'found-oasis-relief', label:'オアシスの安堵 / relief at oasis' }
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
  // マージ実行（21..30）
  // =========================
  const SOURCES = [S21,S22,S23,S24,S25,S26,S27,S28,S29,S30];
  const data = {
    categories: mergeCategories(SOURCES),
    presets: mergePresets(SOURCES)
  };

  // =========================
  // レジストリ登録（faith の 3番）
  // =========================
  try {
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 3, data); // ←ここは 3
    } else if (typeof window.__registerPromptPart === 'function') {
      // 旧移行用
      window.__registerPromptPart('faith_part3', data);
    } else {
      // さらに古い保険
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part3'] = data;
    }
  } catch (e) {
    console.error('[faith_part3 merged 21..30] register error:', e);
  }
})();