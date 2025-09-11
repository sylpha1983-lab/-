/* ============================================
   faith_part39.js  (from part41.js / Expressions)
   ============================================ */
(function (g) {
  const register = g.__registerPromptPart || function (id, data) {
    g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
    g.__parts.faith[id] = data;
  };

  const expressions = [
    { id:'soft-heart-eyes',   label:'やわらかハートアイ / soft heart eyes' },
    { id:'shy-heart-smile',   label:'照れハート微笑み / shy heart smile' },
    { id:'fluttering-blush',  label:'ときめき頬染め / fluttering blush' },
    { id:'warm-gaze-heart',   label:'あたたかいハート視線 / warm hearted gaze' }
  ];

  register('faith_part39', {
    categories: [
      { name: 'Expressions / 表情', items: expressions }
    ],
    presets: []
  });
})(window);