<!-- presets_part23.js (from part23) -->
<script>
(function (g) {
  // 既定のレジストリAPIに登録
  if (typeof g.__registerPresetPart !== 'function') {
    g.__parts = g.__parts || {};
    g.__parts.presets = g.__parts.presets || {};
    g.__registerPresetPart = (name, data) => { g.__parts.presets[name] = data; };
  }

  const data = {
    presets: [
      {
        id: 'CandySweet-RibbonGlow',
        label: 'キャンディスイート×リボングロウ / CandySweet-RibbonGlow',
        tags: [
          'smile-sweet-candy','cheek-heart-blush','spark-sugar-eyes',
          'ribbon-swirl-heart','stringlights-heart','heart-bokeh-warmplus'
        ]
      },
      {
        id: 'ChocoMelt-Romance',
        label: 'とろけチョコ・ロマンス / ChocoMelt-Romance',
        tags: [
          'fond-melt-choco','glossy-lip-heartshine','dreamy-heart-drift',
          'candy-wrapper-spec','metallic-heart-confetti','heart-bokeh-coolplus'
        ]
      },
      {
        id: 'StainedGlass-Serene',
        label: 'ステンドグラス・静謐 / StainedGlass-Serene',
        tags: [
          'eyes-catchlight-heart','dreamy-heart-drift',
          'stainedglass-heart','stringlights-heart','lace-heart-overlay'
        ]
      },
      {
        id: 'Balloon-PastelField',
        label: 'バルーンハート・パステルフィールド / Balloon-PastelField',
        tags: [
          'bashful-ribbon-tilt','cheek-heart-blush',
          'foil-balloon-heart','macaron-pastel-bg','metallic-heart-confetti'
        ]
      },
      {
        id: 'HeartCaustics-Glow',
        label: 'ハート・コースティクスグロウ / HeartCaustics-Glow',
        tags: [
          'spark-sugar-eyes','dreamy-heart-drift',
          'caustics-heart-reflect','stringlights-heart','lace-heart-overlay'
        ]
      }
    ]
  };

  g.__registerPresetPart('presets_part23', data);
})(window);
</script>