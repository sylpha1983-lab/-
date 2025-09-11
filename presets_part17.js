/* ============================================
   presets_part17.js  (from part17.js presets)
   登録先: window.__registerPresetPart("presets_part17", data)
   形式: { presets:[{id,label,tags:[id...]}] }
   ※ expressions/effects → tags に統合
   ============================================ */
(function (w) {
  w.__registerPresetPart = w.__registerPresetPart || function(){ console.warn("__registerPresetPart is not defined"); };

  const src = [
    {
      id: 'Bashful-DappledLight',
      label: '照れくさい・木漏れ日',
      expressions: ['bashful','half-lid-sleepy','smirk-sly'],
      effects: ['dappled-light','dust-motes','halo-soft']
    },
    {
      id: 'Mischievous-SparkleRainbow',
      label: 'いたずら心・虹スパークル',
      expressions: ['mischievous','wink-playful','tongue-out-tease'],
      effects: ['sparkle-rainbow','spiral-lines','aura-glow']
    },
    {
      id: 'Daydreaming-Bubbles',
      label: '白昼夢・バブル',
      expressions: ['daydreaming','gaze-distant','yawn-small'],
      effects: ['bubble-float','moonlight-glow','prism-shift']
    },
    {
      id: 'Energized-BurstLines',
      label: '元気いっぱい・バースト線',
      expressions: ['energized','wide-alert','smirk-sly'],
      effects: ['burst-sharp','dash-motion','light-shaft']
    },
    {
      id: 'Serene-Moonlight',
      label: '穏やか・月光',
      expressions: ['serene','brow-soft-relief','teary-shine'],
      effects: ['moonlight-glow','halo-soft','dust-motes']
    },
    {
      id: 'Suspicious-Rain',
      label: '疑念・小雨',
      expressions: ['suspicious-calm','brow-tilt-confused','whisper-mouth'],
      effects: ['light-rain','lens-flare-soft','spiral-lines']
    }
  ];

  const presets = src.map(p => {
    const tags = []
      .concat(Array.isArray(p.expressions) ? p.expressions : [])
      .concat(Array.isArray(p.effects) ? p.effects : []);
    // 重複排除
    const uniq = Array.from(new Set(tags));
    return { id: p.id, label: p.label, tags: uniq };
  });

  w.__registerPresetPart("presets_part17", { presets });
})(window);