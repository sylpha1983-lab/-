/* ============================================
   faith_part25.js  (from legacy part25 expressions)
   変換方針:
   - expressions → 表情カテゴリ
   - 元データの category を「Emotion / 感情」「State / 状態」でグループ化
   - __registerPromptPart("part25", { categories })
   ============================================ */
(function (g) {
  const categories = [
    {
      name: 'Emotion / 感情',
      items: [
        { id:'stargaze-awe',    label:'星見の畏敬 / stargaze-awe' },
        { id:'dreamy-cosmic',   label:'夢見心地（宇宙） / dreamy-cosmic' },
        { id:'wistful-skyward', label:'物思い・空を見上げる / wistful-skyward' },
        { id:'hopeful-wish',    label:'願いを込める / hopeful-wish' },
        { id:'lonely-vastness', label:'宇宙的孤独 / lonely-vastness' },
        { id:'curious-astral',  label:'好奇の眼差し（星々） / curious-astral' },
        { id:'quiet-reverence', label:'静かな敬虔 / quiet-reverence' }
      ]
    },
    {
      name: 'State / 状態',
      items: [
        { id:'serene-moonlit',  label:'月光の静けさ / serene-moonlit' }
      ]
    }
  ];

  g.__registerPromptPart && g.__registerPromptPart("part25", { categories, presets: [] });
})(window);