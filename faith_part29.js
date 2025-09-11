/* ============================================
   faith_part29.js v1.0 (2025-09-10)
   Source: part29.js（雷・嵐）— 表情カテゴリのみ
   ============================================ */
(function (g) {
  const categories = [
    {
      name: 'Expressions / 表情',
      items: [
        { id:'storm-focus',        label:'嵐を見据える集中 / storm focus' },
        { id:'awe-struck',         label:'畏怖のまなざし / awe-struck' },
        { id:'fear-steady',        label:'恐れを堪える / steady in fear' },
        { id:'thrill-charged',     label:'高揚・帯電 / thrill charged' },
        { id:'calm-in-tempest',    label:'嵐の中の静けさ / calm in the tempest' }
      ]
    }
  ];

  const data = { categories, presets: [] };
  if (typeof g.__registerPromptPart === 'function') g.__registerPromptPart('faith_part29', data);
  g.__parts = g.__parts || {}; g.__parts.faith = g.__parts.faith || {}; g.__parts.faith[29] = data;
})(window);

export default {};