/* ============================================
   presets_part5.js — プリセット定義 (part5)
   置き場所：builder_main.html と同じフォルダ
   読込方式：<script src="presets_part5.js"></script>
   登録先  ：window.__registerPresetPart('presets_part5', data)
   備考    ：tags は 表情id + エフェクトid を結合
   ============================================ */
(function (w) {
  const presets = [
    {
      id: 'Coy-Glance-Burst',
      label: '小悪魔上目遣い・バースト',
      tags: [
        // expressions
        'upward-glance-coy','soft-grin','smug',
        // effects
        'sparkle-burst','face-gloss-plus','vignette-square'
      ]
    },
    {
      id: 'Wistful-Silver-Tear',
      label: '物憂げ・銀のうるみと涙',
      tags: [
        'wistful','glassy-eyes-silver','tear-brim',
        'bloom-soft','dust-soft','vignette'
      ]
    },
    {
      id: 'Razor-Side-Lines',
      label: 'レイザー横目・極太線',
      tags: [
        'side-eye-razor','brow-confident-arch','tight-smile',
        'impact-lines-ultra','rim-light-split','film-grain-subtle'
      ]
    },
    {
      id: 'Startled-Arc-Speed',
      label: 'びくっ・アークスピード',
      tags: [
        'startled','half-lidded-serious','brow-knit-soft',
        'speed-lines-arc','impact-lines-bold','bloom'
      ]
    },
    {
      id: 'Hard-Pout-Drama',
      label: 'むくれ強＋・ドラマ',
      tags: [
        'pout-hard-plus','awkward-freeze','side-eye-gentle',
        'under-eye-trench','screen-tone-dots','vignette-square'
      ]
    },
    {
      id: 'Yearning-Ring-Bokeh',
      label: '憧憬・ボケ輪の光',
      tags: [
        'yearning','half-lidded-lazy','soft-grin',
        'bokeh-ring','sparkle-burst','rim-light'
      ]
    }
  ];

  const data = { presets };

  if (w.__registerPresetPart) w.__registerPresetPart('presets_part5', data);
})(window);