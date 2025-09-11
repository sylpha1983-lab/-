<script>
/* Hearts Pack I — presets_part31.js
   元 part31.js の presets をそのまま抽出して登録 */
(function(){
  const presets = [
    {
      id: 'Heart-SweetSpark',
      label: '甘やか・ハートきらめき',
      tags: [
        'heart-eyed-soft','smile-heart-corner','blush-heart',
        'heart-dust-fine','heart-glow-inner','heart-bokeh-soft'
      ]
    },
    {
      id: 'Confession-Whisper',
      label: '告白・ささやきハート',
      tags: [
        'gaze-heart-softdown','kissy-heart-mouth','flutter-heart-breath',
        'heart-frame-soft','heartbeat-pulse','cupid-flare'
      ]
    },
    {
      id: 'Twinkle-HeartTears',
      label: 'きら涙・ハートトゥインクル',
      tags: [
        'sparkle-heart-tear','heart-eyed-bright','blush-heart',
        'heart-lens-prism','heart-confetti','heart-zoom-focus'
      ]
    },
    {
      id: 'Cute-WinkHeart',
      label: 'キュートウィンク・ハート',
      tags: [
        'wink-heart','smile-heart-corner','pout-heart-shy',
        'heart-rimlight','heart-petals-fall','heart-bokeh-soft'
      ]
    },
    {
      id: 'Orbiting-Love',
      label: '周回する想い・ハートオービット',
      tags: [
        'gaze-heart-softdown','heart-eyed-soft',
        'heart-trail-orbit','heartbeat-pulse','heart-frame-soft'
      ]
    }
  ];

  // 仕様通り：presets は __registerPresetPart
  if (typeof window.__registerPresetPart === 'function') {
    window.__registerPresetPart('presets_part31', { presets });
  } else {
    // 互換フォールバック
    window.__parts = window.__parts || { presets:{} };
    window.__parts.presets = window.__parts.presets || {};
    window.__parts.presets[31] = { presets };
  }
})();
</script>