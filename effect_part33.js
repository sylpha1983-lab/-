/* effect_part33.js — Heart-themed Effects */
(function (g) {
  const register = g.__registerEffectPart || function (name, data) {
    g.__parts = g.__parts || {};
    g.__parts.effect = g.__parts.effect || {};
    g.__parts.effect[name] = data;
  };

  const light = [
    { id:'heart-bloom-soft',    label:'ハートブルーム（やわ） / soft heart bloom' },
    { id:'love-glow-aura',      label:'ラブグロー・オーラ / love glow aura' },
    { id:'rim-heart-light',     label:'リムライト（ハート） / heart rim light' },
    { id:'beam-cupid-soft',     label:'キューピッド光束（柔） / cupid soft beam' }
  ];

  const particles = [
    { id:'heart-petals-float',  label:'ハート花弁漂い / floating heart petals' },
    { id:'heart-confetti',      label:'ハート紙吹雪 / heart confetti' },
    { id:'heartbeat-trails',    label:'鼓動トレイル / heartbeat trails' },
    { id:'sparkle-heart-dust',  label:'きら粉・ハート混じり / sparkle dust (hearts)' }
  ];

  const vfx = [
    { id:'heart-bokeh',         label:'ハートボケ / heart bokeh' },
    { id:'heart-frame-soft',    label:'ハート縁取り（柔） / soft heart frame' },
    { id:'cupid-arrow-glint',   label:'キューピッド矢のきらめき / cupid arrow glint' },
    { id:'love-pulse-vignette', label:'ラブパルス・ビネット / love pulse vignette' }
  ];

  register('effect_part33', {
    categories: [
      { name: 'Light / 光', items: light },
      { name: 'Particles / 粒子', items: particles },
      { name: 'VFX / その他', items: vfx }
    ],
    presets: []
  });
})(window);