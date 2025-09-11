<script>
/* presets_part21.js – ハート系プリセット抽出（from part21） */
(function (g) {
  const presets = [
    {
      id: 'HeartSoft-Sweet',
      label: 'ハート・やわ甘スウィート',
      tags: ['smile-sweet-heart','blush-soft-heart','gaze-loving-soft','heart-glow','heart-bokeh','kisslight-heart']
    },
    {
      id: 'HeartSparkle-Tease',
      label: 'ハート・スパークル小悪魔',
      tags: ['wink-heart-tease','eyes-heartshine','shy-tilt-heart','heart-sparkles','heart-trail']
    },
    {
      id: 'HeartPetals-Serene',
      label: '舞うハート花弁・穏やか',
      tags: ['gaze-loving-soft','blush-soft-heart','heart-petals','heart-glow']
    },
    {
      id: 'HeartBokeh-Portrait',
      label: 'ハートボケ・ポートレート',
      tags: ['smile-sweet-heart','eyes-heartshine','heart-bokeh','kisslight-heart']
    },
    {
      id: 'HeartTrail-Dynamic',
      label: 'ハート軌跡・ダイナミック',
      tags: ['wink-heart-tease','smile-sweet-heart','heart-trail','heart-sparkles']
    }
  ];

  const data = { presets };
  if (g.__registerPresetPart) {
    g.__registerPresetPart('presets_part21', data);
  } else {
    g.__parts = g.__parts || {}; g.__parts.presets = g.__parts.presets || {};
    g.__parts.presets['presets_part21'] = data;
  }
})(window);
</script>