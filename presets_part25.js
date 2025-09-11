/* ============================================
   presets_part25.js  (from legacy part25 presets)
   変換方針:
   - 旧プリセット → tags = expressions + effects の id
   - __registerPresetPart("part25", { presets })
   ============================================ */
(function (g) {
  const presets = [
    {
      id: 'Cosmic-Awe-Viewing',
      label: '宇宙への畏敬（流星群×星雲）',
      tags: [
        'stargaze-awe','wistful-skyward',
        'meteor-shower','nebula-swell','starlight-dust','starlight-rim','skyward-framing','deep-space-vignette'
      ]
    },
    {
      id: 'Aurora-Dream',
      label: 'オーロラ・ドリーム（静かな敬虔）',
      tags: [
        'dreamy-cosmic','quiet-reverence',
        'aurora-veil','moonbeam-soft','space-fog-thin','cool-night-bounce','silhouette-foreground'
      ]
    },
    {
      id: 'MilkyWay-Wish',
      label: '天の川に願いを',
      tags: [
        'hopeful-wish','serene-moonlit',
        'milky-way-arc','constellation-lines','bg-constellation-grid','nocturne-contrast','starlight-rim'
      ]
    },
    {
      id: 'Lonely-Galaxy',
      label: '孤独と銀河',
      tags: [
        'lonely-vastness','curious-astral',
        'bg-spiral-galaxy','deep-space-vignette','planetary-halo','space-fog-thin','backlit-moon'
      ]
    },
    {
      id: 'Comet-Encounter',
      label: '彗星遭遇（星ボケ演出）',
      tags: [
        'stargaze-awe','dreamy-cosmic',
        'comet-trail','star-bokeh','bg-orbit-rings','nocturne-contrast','skyward-framing'
      ]
    }
  ];

  g.__registerPresetPart && g.__registerPresetPart("part25", { presets });
})(window);