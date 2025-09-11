/* ============================================
   faith_part19.js  (from: part19.js expressions)
   分割: 表情（faith）。UMD互換で __registerPromptPart に登録
   ============================================ */
(function (g) {
  g.__registerPromptPart = g.__registerPromptPart || function(name, data){
    g.__parts = g.__parts || {};
    g.__parts.faith = g.__parts.faith || {};
    g.__parts.faith[name] = data;
  };

  // 元の category 単位でグルーピング
  const categories = [
    {
      name: 'Eyes / 目',
      items: [
        { id:'side-eye-ember',      label:'横目・残り火 / side-eye-ember' },
        { id:'half-lidded-shimmer', label:'半目・微きらめき / half-lidded-shimmer' },
        { id:'teary-trail',         label:'涙・つたう / teary-trail' },
        { id:'eye-smile-tilt',      label:'目じり笑い・かしげ / eye-smile-tilt' },
        { id:'stare-steel',         label:'鋼の凝視 / stare-steel' },
        { id:'gaze-soft-curve',     label:'視線・やわらカーブ / gaze-soft-curve' },
        { id:'blink-nervous',       label:'まばたき・そわそわ / blink-nervous' }
      ]
    },
    {
      name: 'Brows / 眉',
      items: [
        { id:'brow-arc-softsad',  label:'アーチ眉・やわ悲哀 / brow-arc-softsad' },
        { id:'brow-knit-focus',   label:'眉間寄せ・集中 / brow-knit-focus' },
        { id:'brow-lift-curious', label:'眉上げ・好奇 / brow-lift-curious' }
      ]
    },
    {
      name: 'Mouth / 口',
      items: [
        { id:'soft-smile-tremble',  label:'柔ら笑み・小さな震え / soft-smile-tremble' },
        { id:'smile-brave',         label:'勇気の笑み / smile-brave' },
        { id:'pout-glance-away',    label:'むくれ・目をそらす / pout-glance-away' },
        { id:'mouth-parted-breath', label:'口を薄く開ける・息 / mouth-parted-breath' }
      ]
    },
    {
      name: 'Emotion / 感情',
      items: [
        { id:'resolute',      label:'断固 / resolute' },
        { id:'gentle-sorrow', label:'やさしい悲しみ / gentle-sorrow' },
        { id:'fond-tease',    label:'親しみ挑発 / fond-tease' },
        { id:'nervous-hope',  label:'不安混じりの希望 / nervous-hope' }
      ]
    },
    {
      name: 'State / 状態',
      items: [
        { id:'quiet-breath', label:'静かな呼吸 / quiet-breath' },
        { id:'poised',       label:'凛とした / poised' },
        { id:'on-edge',      label:'張りつめ / on-edge' }
      ]
    }
  ];

  // presets は faith には含めない（プリセット専用ファイルに分割）
  g.__registerPromptPart('faith_part19', { categories, presets: [] });
})(window);