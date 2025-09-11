<script>
/* Hearts Pack I — effect_part31.js
   元 part31.js の「Effects / エフェクト（Hearts）」だけを登録 */
(function(){
  const categories = [
    {
      name: 'Effects / エフェクト（Hearts / ハート）',
      items: [
        /* Particles / 粒子 */
        { id:'heart-dust-fine',       label:'ハート微粒子 / heart dust (fine)' },
        { id:'heart-petals-fall',     label:'ハート花弁落下 / falling heart petals' },
        { id:'heart-bokeh-soft',      label:'ハートボケ・柔 / soft heart bokeh' },
        { id:'heart-confetti',        label:'ハート紙吹雪 / heart confetti' },
        { id:'heart-trail-orbit',     label:'ハート軌跡オービット / orbiting heart trails' },

        /* Light / 光 */
        { id:'heart-glow-inner',      label:'内側ハートグロー / inner heart glow' },
        { id:'heart-rimlight',        label:'ハート調リムライト / heart rim light' },
        { id:'heartbeat-pulse',       label:'鼓動パルス光 / heartbeat pulse' },
        { id:'cupid-flare',           label:'キューピッドフレア / cupid flare' },

        /* VFX / Frames / その他 */
        { id:'heart-frame-soft',      label:'ソフト・ハートフレーム / soft heart frame' },
        { id:'heart-lens-prism',      label:'ハートレンズプリズム / heart lens prism' },
        { id:'heart-zoom-focus',      label:'ハートズームフォーカス / heart zoom focus' }
      ]
    }
  ];

  // 仕様通り：effect は __registerEffectPart
  if (typeof window.__registerEffectPart === 'function') {
    window.__registerEffectPart('effect_part31', { categories, presets: [] });
  } else {
    // 互換フォールバック
    window.__parts = window.__parts || { effect:{} };
    window.__parts.effect = window.__parts.effect || {};
    window.__parts.effect[31] = { categories, presets: [] };
  }
})();
</script>