/* ============================================
   Kemono Heart Pack — part41.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const expr = [
    { id:'beast-heart-eyes',       label:'獣・ハートアイ / beast heart eyes' },
    { id:'fang-heart-smile',       label:'牙・ハートスマイル / fang heart smile' },
    { id:'wild-heart-gaze',        label:'野性・ハート視線 / wild heart gaze' },
    { id:'ear-twitch-heart-blush', label:'耳ピク・ハート頬染め / ear twitch heart blush' }
  ];

  const eff = [
    { id:'fur-heart-sparkle',      label:'ファー×ハートスパーク / fur heart sparkle' },
    { id:'pawpad-heart-print',     label:'肉球・ハートプリント / pawpad heart print' },
    { id:'tail-heart-trail',       label:'尻尾・ハート軌跡 / tail heart trail' },
    { id:'howl-heart-aura',        label:'遠吠え・ハートオーラ / howl heart aura' }
  ];

  const presets = [
    {
      id:'WildHowl-EmberHeart',
      label:'野生の遠吠え・紅心',
      tags:[
        'wild-heart-gaze','beast-heart-eyes',
        'howl-heart-aura','fur-heart-sparkle'
      ]
    },
    {
      id:'FangSmile-PawPrint',
      label:'牙スマイル・肉球印',
      tags:[
        'fang-heart-smile','ear-twitch-heart-blush',
        'pawpad-heart-print','tail-heart-trail'
      ]
    },
    {
      id:'TwitchyHeart-Trail',
      label:'ピク耳・ハート軌跡',
      tags:[
        'ear-twitch-heart-blush','beast-heart-eyes',
        'tail-heart-trail','fur-heart-sparkle'
      ]
    }
  ];

  register('part41',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Kemono）', items: eff }
    ],
    presets
  });
})(window);