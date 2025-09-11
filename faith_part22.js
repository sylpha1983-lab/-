/* ================================
 * faith_part22.js  v1.0
 * 変換元: part22.js の expressions
 * 登録: window.__registerPromptPart('faith_part22', data)
 * 備考: categories = [{name, items:{id,label}}] へ正規化
 * ================================ */
(function (w) {
  const byCat = {
    'Eyes / 目': [
      { id:'heart-eyes-gleam',      jp:'ハート目・きらめき' },
      { id:'heart-eyes-pulse',      jp:'ハート目・脈動' },
      { id:'pupils-heart-twinkle',  jp:'瞳ハート・瞬き' },
      { id:'wink-heart-soft-alt',   jp:'ウィンク・ハート（やわ）' },
      { id:'gaze-heart-distant',    jp:'遠い視線・ハート余韻' }
    ],
    'Brows / 眉': [
      { id:'brow-soft-adoring',     jp:'やわ眉・憧憬' },
      { id:'brow-curve-flirty',     jp:'アーチ眉・フラーティ' }
    ],
    'Mouth / 口': [
      { id:'smile-heart-tilt-plus', jp:'微笑・ハート傾き+' },
      { id:'kiss-blow-heart',       jp:'投げキス・ハート' },
      { id:'soft-pout-heart',       jp:'やわむくれ・ハート' }
    ],
    'Emotion / 感情': [
      { id:'love-struck-calm',      jp:'恋に落ちた・静' },
      { id:'affection-bright-plus', jp:'親愛・きらめき+' },
      { id:'shy-heart-rosy',        jp:'照れ・ハートほの紅' },
      { id:'devoted-gentle',        jp:'一途・やさしさ' },
      { id:'fond-teary-heart',      jp:'うるみ瞳・ハート' }
    ],
    'State / 状態': [
      { id:'fluttery-heart',        jp:'胸きゅん・ふわり' },
      { id:'serene-heart-aura',     jp:'穏やか・ハートの余光' },
      { id:'buoyant-heart-lite',    jp:'浮き立つ・ハート' },
      { id:'resolute-kind-heart',   jp:'やさしい決意・ハート' }
    ]
  };

  const categories = Object.entries(byCat).map(([name, items])=>({
    name,
    items: items.map(it => ({ id: it.id, label: `${it.jp} / ${it.id}` }))
  }));

  const data = { categories, presets: [] };
  (w.__registerPromptPart || function(){ console.warn('registerPrompt missing'); })( 'faith_part22', data );
})(window);