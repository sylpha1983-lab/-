/* faith_part33.js (from part34.js / Expressions only) */
// [CHANGE] part34.js の「Expressions / 表情」だけを faith に登録
(function (g) {
  const register = g.__registerPromptPart || function (id, data) {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'heart-sigh-eyes',       label:'ため息ハートアイ / sighing heart eyes' },
    { id:'downcast-heart-gaze',   label:'伏し目・ハートの影 / downcast heart gaze' },
    { id:'wistful-heart-smile',   label:'物憂げハート微笑み / wistful heart smile' },
    { id:'tremble-heart-lips',    label:'ふるえる唇・ハート / trembling heart lips' },
    { id:'tearline-heart',        label:'涙縁・ハート / teary heart rim' },
    { id:'lonely-heart-blush',    label:'孤独の頬染め・ハート / lonely heart blush' }
  ];

  register('faith_part33', {
    categories: [
      { name: 'Expressions / 表情', items: expr }
    ],
    presets: []
  });
})(window);