/* ============================================
   faith_part30.js  (from part30.js Expressions)
   ============================================ */
(function(g){
  // 元: "Expressions / 表情" の5アイテムを faith に移設
  // 根拠: 行11-18（heat-squint 〜 found-oasis-relief）
  const categories = [
    {
      name: 'Expressions / 表情（Desert & Heat）',
      items: [
        { id:'heat-squint',        label:'強光で目を細める / heat squint' },
        { id:'endure-heat',        label:'灼熱に耐える / enduring heat' },
        { id:'wanderer-calm',      label:'放浪者の静けさ / wanderer calm' },
        { id:'parched-fatigue',    label:'乾きの疲労 / parched fatigue' },
        { id:'found-oasis-relief', label:'オアシスの安堵 / relief at oasis' }
      ]
    }
  ];

  const data = { categories, presets: [] };
  if (typeof g.__registerPromptPart === 'function') {
    g.__registerPromptPart('faith_part30', data);
  }
})(window);