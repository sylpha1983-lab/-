/* ============================================
   presets_part40.js  (from part41.js / Presets → tags統一)
   ============================================ */
(function (g) {
  const register = g.__registerPresetPart || function (id, data) {
    g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
    g.__parts.presets[id] = data;
  };

  const presets = [
    {
      id:'Romance-SoftGlow',
      label:'ロマンス・ソフトグロー',
      tags:['soft-heart-eyes','shy-heart-smile','soft-heart-glow','gentle-heart-bokeh']
    },
    {
      id:'WarmGaze-Petals',
      label:'あたたか視線・花弁',
      tags:['warm-gaze-heart','fluttering-blush','heart-petals','background-heart-veil']
    },
    {
      id:'ShySmile-Bokeh',
      label:'照れ笑み・ハートボケ',
      tags:['shy-heart-smile','fluttering-blush','gentle-heart-bokeh','soft-heart-glow']
    }
  ];

  register('presets_part40', { presets });
})(window);