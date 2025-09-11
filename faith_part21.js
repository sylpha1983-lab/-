<script>
/* faith_part21.js – 表情カテゴリ化（from part21） */
(function (g) {
  const categories = [
    {
      name: 'Eyes / 目',
      items: [
        { id:'eyes-heartshine',   label:'瞳にハートのきらめき / eyes-heartshine' },
        { id:'wink-heart-tease',  label:'ウィンク・ハート小悪魔 / wink-heart-tease' }
      ]
    },
    {
      name: 'Emotion / 感情',
      items: [
        { id:'blush-soft-heart',  label:'ほんのり頬染め・ハート / blush-soft-heart' },
        { id:'gaze-loving-soft',  label:'優しい愛情のまなざし / gaze-loving-soft' },
        { id:'shy-tilt-heart',    label:'照れ顔・首かしげ(ハート) / shy-tilt-heart' }
      ]
    },
    {
      name: 'Mouth / 口',
      items: [
        { id:'smile-sweet-heart', label:'スウィートスマイル・ハート / smile-sweet-heart' }
      ]
    }
  ];

  const data = { categories, presets: [] };
  if (g.__registerPromptPart) {
    g.__registerPromptPart('faith_part21', data);
  } else {
    g.__parts = g.__parts || {}; g.__parts.faith = g.__parts.faith || {};
    g.__parts.faith['faith_part21'] = data;
  }
})(window);
</script>