/* faith_part41.js — split from part43 (Expressions) */
(function (g) {
  const id = 'faith_part41';
  const data = {
    categories: [
      {
        name: 'Expressions / 表情',
        items: [
          { id: 'uplifted-heart-look',  label: '舞い上がるハートの眼差し / uplifted heart look' },
          { id: 'breezy-heart-smile',   label: 'そよ風ハート微笑み / breezy heart smile' },
          { id: 'lighthearted-chuckle', label: '軽やかな笑み / lighthearted chuckle' }
        ]
      }
    ]
  };
  (g.__registerPromptPart ? g.__registerPromptPart : (x,y)=>{ g.promptBuilder=g.promptBuilder||{}; g.promptBuilder[x]=y; })(id, data);
})(window);