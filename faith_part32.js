/* faith_part32.js — Heart-themed Expressions */
(function (g) {
  const register = g.__registerPromptPart || function (name, data) {
    g.__parts = g.__parts || {};
    g.__parts.faith = g.__parts.faith || {};
    g.__parts.faith[name] = data;
  };

  const expr = [
    { id:'heart-eyes-soft',        label:'ハートアイ（やわ） / heart eyes (soft)' },
    { id:'heart-eyes-sparkle',     label:'ハートアイ（きらめき） / heart eyes (sparkle)' },
    { id:'blush-heart-cheeks',     label:'ハートほお染め / heart blush on cheeks' },
    { id:'wink-heart',             label:'ハートウィンク / heart wink' },
    { id:'smile-heart-curved',     label:'ハートカーブ微笑み / heart-curved smile' },
    { id:'pout-heart-shy',         label:'ハートむくれ・照れ / shy heart pout' },
    { id:'gaze-heart-dreamy',      label:'ハートとろ目 / dreamy heart gaze' },
    { id:'tear-joy-heart',         label:'喜び涙・ハート縁 / joyful tear with heart rim' },
    { id:'kissy-heart-lips',       label:'キッシーハート・リップ / kissy heart lips' },
    { id:'confession-nervous-heart', label:'告白前の高鳴り / pre-confession heart thump' }
  ];

  register('faith_part32', {
    categories: [
      { name: 'Expressions / 表情（Heart）', items: expr }
    ],
    presets: []
  });
})(window);