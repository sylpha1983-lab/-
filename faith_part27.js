/* ============================================
   faith_part27.js  (from part27.js)
   Split: Expressions → categories/items
   ============================================ */
(function (g) {
  g.__registerPromptPart = g.__registerPromptPart || function(name, data){
    g.__parts = g.__parts || {};
    g.__parts.faith = g.__parts.faith || {};
    g.__parts.faith[name] = data;
  };

  const categories = [
    {
      name: 'Emotion / 感情',
      items: [
        { id: 'fiery-determination', label: '燃える決意 / fiery determination' },
        { id: 'ember-gaze',          label: '火の粉の視線 / ember gaze' },
        { id: 'warm-smile',          label: '暖かな微笑み / warm smile' },
        { id: 'blaze-rage',          label: '烈火の怒り / blaze rage' },
        { id: 'flame-exhilaration',  label: '火炎の高揚 / flame exhilaration' },
        { id: 'smoldering-sadness',  label: '燻る悲しみ / smoldering sadness' }
      ]
    }
  ];

  g.__registerPromptPart('faith_part27', { categories, presets: [] });
})(window);